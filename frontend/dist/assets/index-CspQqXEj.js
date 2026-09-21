var Od=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);import{aV as jd,L as ve,O as ya,Z as Vd,au as Ft,M as pe,P as he,aW as Fd,a0 as Le,_ as Ke,F as rt,al as qt,S as ct,a1 as lt,X as aa,ai as Vt,q as za,o as Aa,a8 as ms,r as kt,e as at,av as Hd,Y as Fa,$ as Ea,R as Bd,aC as ha,T as Kd,Q as ca,p as Wd,n as Ud}from"./vendor-vue-DDF9zi1T.js";import{e as Gd,E as Yd,a as Qd,b as Jd,c as $d,z as Xd}from"./vendor-ep-VOop1zGa.js";import{C as Zd,a as eu,W as tu,I as au,S as su,B as nu,F as lu,b as iu,c as ou,d as ru,e as cu,f as du,P as uu,g as vu,h as mu,i as fu,T as pu,j as gu,L as hu,k as yu,G as bu,U as wu,l as ku,m as _u,n as xu,D as Su,o as Cu,p as qu,M as Eu,q as Mu,R as Tu,r as Pu,s as Du,K as Ru,t as zu,u as Au,v as Lu,w as Iu,x as Nu,y as Ou,z as ju,A as Vu,E as Fu,H as Hu,O as Bu,J as Ku,N as Wu,Q as Uu,V as Gu,X as Yu,Y as Qu,Z as Ju,_ as $u,$ as Xu,a0 as Zu,a1 as ev,a2 as tv,a3 as av,a4 as sv,a5 as nv,a6 as lv,a7 as iv,a8 as ov,a9 as rv,aa as cv,ab as dv,ac as uv,ad as vv,ae as mv,af as fv,ag as pv,ah as gv,ai as hv,aj as yv,ak as bv,al as wv,am as kv,an as _v,ao as xv,ap as Sv,aq as Cv,ar as qv,as as Ev,at as Mv,au as Tv,av as Pv,aw as Dv,ax as Rv,ay as zv,az as Av,aA as Lv,aB as Iv,aC as Nv,aD as Ov,aE as jv,aF as Vv,aG as Fv,aH as Hv,aI as Bv,aJ as Kv,aK as Wv,aL as Uv,aM as Gv,aN as Yv,aO as Qv,aP as Jv,aQ as $v}from"./vendor-lucide-DidEUx9K.js";var mg=Od((Sg,Me)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))t(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const x of d.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&t(x)}).observe(document,{childList:!0,subtree:!0});function f(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(c){if(c.ep)return;c.ep=!0;const d=f(c);fetch(c.href,d)}})();window.Vue=jd;const ba=Gd||{};window.ElementPlus=ba;ba.ElMessage=ba.ElMessage||Yd;ba.ElMessageBox=ba.ElMessageBox||Qd;ba.ElNotification=ba.ElNotification||Jd;ba.ElLoading=ba.ElLoading||$d;window.ElementPlusLocaleZhCn={default:Xd};(function(){const a=[45,220,0,140,270,320,180,25,250],e={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},f={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function t(s,b,i){return"hsl("+s+", "+b+"%, "+i+"%)"}function c(s,b,i){b=b/100,i=i/100;const g=function(w){return(w+s/30)%12},Z=b*Math.min(i,1-i),R=function(w){return i-Z*Math.max(-1,Math.min(g(w)-3,Math.min(9-g(w),1)))};return Math.round(255*R(0))+", "+Math.round(255*R(8))+", "+Math.round(255*R(4))}const d=5;function x(s,b,i){return c(s,b,i).split(",").map(function(g){return parseInt(g,10)})}function r(s){const b=function(i){return i=i/255,i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4)};return .2126*b(s[0])+.7152*b(s[1])+.0722*b(s[2])}function n(s,b){const i=r(s),g=r(b),Z=Math.max(i,g),R=Math.min(i,g);return(Z+.05)/(R+.05)}function p(s,b,i){for(var g=8,Z=92,R=0;R<26;R++){var w=(g+Z)/2;r(x(s,b,w))<i?g=w:Z=w}return Math.round(Z*10)/10}function o(s,b,i,g,Z){let R=38,w=76;for(let v=0;v<24;v++){const M=(R+w)/2;n(x(s,g,M),x(s,b,i))>=Z?w=M:R=M}return Math.round(w*10)/10}function C(s,b){var i={};return b==="light"?(i["--qc-neutral-50"]=t(s,18,98),i["--qc-neutral-100"]=t(s,16,95),i["--qc-neutral-200"]=t(s,14,90),i["--qc-neutral-300"]=t(s,12,83),i["--qc-neutral-400"]=t(s,10,68),i["--qc-neutral-500"]=t(s,10,53),i["--qc-neutral-600"]=t(s,10,40),i["--qc-neutral-700"]=t(s,10,30),i["--qc-neutral-800"]=t(s,10,20),i["--qc-neutral-900"]=t(s,10,12),i["--qc-background"]=t(s,18,98),i["--qc-muted"]=t(s,16,95),i["--qc-border"]=t(s,12,72),i["--chart-axis"]=t(s,12,55),i["--chart-split"]=t(s,10,88),i["--qc-foreground"]=t(s,10,12),i["--qc-muted-foreground"]=t(s,9,38),i["--qc-nav-item-default"]=t(s,9,38),i["--qc-nav-item-hover"]=t(s,10,12),i["--qc-nav-group-label"]=t(s,9,40),i["--qc-nav-bg"]="#ffffff",i["--bg-page"]=t(s,20,97),i["--bg-stripe"]=t(s,20,97),i["--bg-card-header"]=t(s,24,96),i["--card-gradient-header"]="linear-gradient(135deg, "+t(s,24,96)+" 0%, #ffffff 100%)",i["--bg-hover"]=t(s,26,94),i["--bg-tertiary"]=t(s,14,93),i["--badge-gold-bg"]=t(s,26,96),i["--gold-bg"]=t(s,20,97),i["--border-light"]=t(s,22,89),i["--border-base"]=t(s,24,79),i["--border-color"]=t(s,14,88),i["--text-primary"]=t(s,12,12),i["--text-secondary"]=t(s,12,32),i["--text-tertiary"]=t(s,14,40),i["--text-disabled"]=t(s,9,S(s,9,A(s,18,98),25,70,!0,3.2)),i["--qc-card"]="#ffffff",i["--qc-popover"]="#ffffff",i["--qc-nav-border"]=t(s,12,72),i["--qc-nav-item-hover-bg"]=t(s,16,95),i["--qc-overlay"]="rgba(31, 29, 26, 0.5)",i["--bg-card"]="#ffffff",i["--surface"]="#ffffff",i["--border-heavy"]=t(s,22,72),i["--surface-canvas"]=t(s,18,98),i["--surface-card"]="#ffffff",i["--surface-raised"]="#ffffff",i["--surface-sunken"]=t(s,16,96),i["--surface-input"]="#ffffff",i["--surface-hover"]=t(s,26,94),i["--border-strong"]=t(s,22,72),i["--scrollbar-thumb"]="rgba("+c(s,12,72)+", 0.5)",i["--bg-page-rgb"]=c(s,20,97)):(i["--qc-background"]=t(s,10,8),i["--qc-card"]=t(s,11,11),i["--qc-popover"]=t(s,11,11),i["--qc-muted"]=t(s,12,14),i["--qc-border"]=t(s,14,30),i["--chart-axis"]=t(s,16,52),i["--chart-split"]=t(s,14,26),i["--qc-nav-bg"]=t(s,10,9),i["--qc-nav-border"]=t(s,13,22),i["--qc-nav-item-hover-bg"]=t(s,12,14),i["--bg-page"]=t(s,10,8),i["--bg-card"]=t(s,11,11),i["--bg-card-header"]=t(s,12,14),i["--bg-stripe"]=t(s,10,9),i["--bg-hover"]=t(s,12,14),i["--bg-tertiary"]=t(s,12,14),i["--border-light"]=t(s,13,18),i["--border-base"]=t(s,14,26),i["--border-heavy"]=t(s,16,38),i["--border-color"]=t(s,13,22),i["--surface"]=t(s,11,11),i["--surface-canvas"]=t(s,10,8),i["--surface-card"]=t(s,11,11),i["--surface-raised"]=t(s,12,14),i["--surface-sunken"]=t(s,12,9),i["--surface-input"]=t(s,12,9),i["--surface-hover"]=t(s,12,15),i["--border-strong"]=t(s,16,42),i["--scrollbar-thumb"]="rgba("+c(s,16,52)+", 0.5)",i["--bg-page-rgb"]=c(s,10,8),i["--qc-overlay"]="rgba(0, 0, 0, 0.6)"),i}const y=4.6;var k=[255,255,255];function _(s){return c(s,10,8).split(",").map(function(b){return parseInt(b,10)})}function S(s,b,i,g,Z,R,w){for(var v=w||y,M=g,u=Z,N=0;N<24;N++){var oe=(M+u)/2,J=n(x(s,b,oe),i)>=v;R?J?M=oe:u=oe:J?u=oe:M=oe}return Math.round((R?M:u)*10)/10}function A(s,b,i){return c(s,b,i).split(",").map(function(g){return parseInt(g,10)})}function P(s){const b=p(s,75,.18),i=p(s,75,.26),g=p(s,70,.36),Z=p(s,85,.12),R=c(s,75,b),w=S(s,68,k,14,62,!0),v=Math.max(12,w-5),M=Math.max(10,w-11),u=c(s,16,95).split(",").map(function(G){return parseInt(G,10)}),N=c(s,85,92).split(",").map(function(G){return parseInt(G,10)}),oe=S(s,78,u,10,58,!0,4.6),J=S(s,80,N,10,58,!0,4.6),D=Math.min(32,S(s,80,k,8,60,!0,4.6));return{...C(s,"light"),"--primary-color":t(s,75,b),"--primary-rgb":R,"--color-primary":t(s,75,b),"--qc-primary":t(s,75,b),"--qc-primary-50":t(s,90,96),"--qc-primary-100":t(s,85,92),"--qc-primary-200":t(s,80,84),"--qc-primary-300":t(s,75,72),"--qc-primary-400":t(s,70,g),"--qc-primary-500":t(s,75,i),"--qc-primary-600":t(s,80,b),"--qc-primary-700":t(s,85,Z),"--qc-primary-800":t(s,88,28),"--qc-primary-900":t(s,90,20),"--text-link":t(s,78,oe),"--secondary-color":t(s,70,55),"--card-border":t(s,22,80),"--bg-selected":"rgba("+R+", 0.08)","--btn-primary-bg":t(s,80,D),"--btn-primary-border":t(s,80,D),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":t(s,82,28),"--btn-primary-hover-border":t(s,82,28),"--btn-primary-active-bg":t(s,85,24),"--btn-primary-active-border":t(s,85,24),"--btn-primary-plain-bg":"rgba("+R+", 0.08)","--btn-primary-plain-border":"rgba("+R+", 0.25)","--btn-primary-plain-color":t(s,80,oe),"--btn-primary-plain-hover-bg":"rgba("+R+", 0.15)","--btn-primary-plain-hover-border":t(s,80,32),"--btn-primary-text-color":t(s,80,oe),"--gradient":"linear-gradient(135deg, "+t(s,80,M)+" 0%, "+t(s,76,v)+" 50%, "+t(s,70,w)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+t(s,76,v)+" 0%, "+t(s,85,M)+" 100%)","--primary-text":t(s,78,oe),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+t(s,62,Math.min(74,o(s,45,14,58,d)+5))+" 0%, "+t(s,58,o(s,45,14,58,d))+" 100%)","--panel-fg":t(s,45,14),"--qc-nav-item-active":t(s,80,J),"--qc-nav-item-active-bg":t(s,85,92),"--qc-nav-item-active-border":t(s,75,48),"--qc-nav-badge-bg":t(s,85,92),"--qc-nav-badge-text":t(s,80,J),"--qc-ring":t(s,75,S(s,75,A(s,18,98),25,70,!0,3.2)),"--brand-soft-text":t(s,80,S(s,80,A(s,80,84),10,58,!0,4.6)),"--border-control":t(s,16,S(s,16,A(s,18,98),30,80,!0,3.2))}}function m(s){const b=p(s,85,.34),i=p(s,85,.46),g=c(s,85,b),Z=S(s,80,_(s),30,92,!1),R=Math.min(94,Z+8),w=Math.min(96,Z+16),v=A(s,55,22),M=A(s,10,9),u=g.split(",").map(function(ie){return parseInt(ie,10)}),N=[0,1,2].map(function(ie){return Math.round(u[ie]*.12+M[ie]*.88)}),oe=S(s,85,N,45,96,!1,4.6),J=S(s,85,v,45,96,!1,4.6),D=Math.min(94,S(s,92,v,45,96,!1,4.6)),G=Math.min(96,D+6);return{...C(s,"dark"),"--primary-color":t(s,85,b),"--primary-rgb":g,"--color-primary":t(s,85,b),"--qc-primary":t(s,90,b),"--qc-primary-50":t(s,50,18),"--qc-primary-100":t(s,55,22),"--qc-primary-200":t(s,55,26),"--qc-primary-300":t(s,60,30),"--qc-primary-400":t(s,65,38),"--qc-primary-500":t(s,85,i),"--qc-primary-600":t(s,90,b),"--qc-primary-700":t(s,92,D),"--qc-primary-800":t(s,90,G),"--qc-primary-900":t(s,92,Math.min(98,G+8)),"--text-link":t(s,85,J),"--secondary-color":t(s,70,60),"--card-border":t(s,30,25),"--bg-selected":"rgba("+g+", 0.10)","--btn-primary-bg":t(s,85,65),"--btn-primary-border":t(s,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":t(s,80,72),"--btn-primary-hover-border":t(s,80,72),"--btn-primary-active-bg":t(s,75,80),"--btn-primary-active-border":t(s,75,80),"--btn-primary-plain-bg":"rgba("+g+", 0.08)","--btn-primary-plain-border":"rgba("+g+", 0.25)","--btn-primary-plain-color":t(s,85,J),"--btn-primary-plain-hover-bg":"rgba("+g+", 0.15)","--btn-primary-plain-hover-border":t(s,85,65),"--btn-primary-text-color":t(s,85,J),"--gradient":"linear-gradient(135deg, "+t(s,80,Z)+" 0%, "+t(s,85,R)+" 50%, "+t(s,85,w)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+t(s,85,w)+" 0%, "+t(s,80,Z)+" 100%)","--primary-text":t(s,85,J),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+t(s,60,Math.min(76,o(s,40,12,55,d)+5))+" 0%, "+t(s,55,o(s,40,12,55,d))+" 100%)","--panel-fg":t(s,40,12),"--qc-nav-item-active":t(s,85,oe),"--qc-nav-item-active-bg":"rgba("+g+", 0.10)","--qc-nav-item-active-border":t(s,85,65),"--qc-nav-badge-bg":"rgba("+g+", 0.12)","--qc-nav-badge-text":t(s,85,oe),"--border-control":t(s,16,S(s,16,A(s,11,11),25,70,!1,3.2)),"--brand-soft-text":t(s,85,S(s,85,A(s,55,26),45,96,!1,4.6)),"--qc-ring":t(s,85,65)}}var l=[],h={mode:"light",hue:45},L=!1;function K(s,b){try{var i=document.querySelector('meta[name="theme-color"]');if(!i)return;var g=b?s["--surface-canvas"]||s["--qc-background"]:s["--btn-primary-bg"]||s["--qc-primary"];g&&i.setAttribute("content",g)}catch{}}function E(){if(!(L||typeof window>"u"||!window.matchMedia)){var s=window.matchMedia("(prefers-color-scheme: dark)"),b=function(){h.mode==="system"&&ee("system",h.hue)};s.addEventListener?s.addEventListener("change",b):s.addListener&&s.addListener(b),L=!0}}function I(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}var F=-1;function X(s){return s=parseInt(s,10),isNaN(s)?45:s<0?F:Math.max(0,Math.min(359,s))}function H(s){return Object.keys(s).forEach(function(b){var i=s[b];if(typeof i=="string"){i.indexOf("hsl(")>=0&&(i=i.replace(/hsl\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)%/g,function(v,M){return"hsl("+M+", 0%"}));var g=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*[\d.]+)?\)$/.exec(i);if(g){var Z=Math.round(.2126*+g[1]+.7152*+g[2]+.0722*+g[3]);i="rgba("+Z+", "+Z+", "+Z+(g[4]||"")+")"}if(/^\d+,\s*\d+,\s*\d+$/.test(i)){var R=i.split(",").map(function(v){return parseInt(v,10)}),w=Math.round(.2126*R[0]+.7152*R[1]+.0722*R[2]);i=w+", "+w+", "+w}s[b]=i}}),s}function W(s,b){var i=A(45,0,b?22:95),g=A(45,0,b?8:98),Z=A(45,0,b?11:100),R=b?S(45,0,i,45,96,!1,4.6):S(45,0,i,10,58,!0,4.6),w=A(45,0,b?22:92),v=b?S(45,0,w,45,96,!1,4.6):S(45,0,w,10,58,!0,4.6),M=b?S(45,0,g,45,96,!1,3.2):S(45,0,g,25,70,!0,3.2),u=b?S(45,0,Z,25,70,!1,3.2):S(45,0,g,30,80,!0,3.2),N=b?S(45,0,A(45,0,26),45,96,!1,4.6):S(45,0,A(45,0,84),10,58,!0,4.6);s["--brand-soft-text"]="hsl(45, 0%, "+N+"%)";var oe="hsl(45, 0%, "+R+"%)";if(s["--primary-text"]=oe,s["--text-link"]=oe,s["--btn-primary-text-color"]=oe,s["--btn-primary-plain-color"]=oe,s["--qc-nav-item-active"]="hsl(45, 0%, "+v+"%)",s["--qc-nav-badge-text"]="hsl(45, 0%, "+v+"%)",s["--qc-ring"]="hsl(45, 0%, "+M+"%)",s["--border-control"]="hsl(45, 0%, "+u+"%)",b){var J=S(45,0,A(45,0,8),30,92,!1,4.6),D=Math.min(94,J+8),G=Math.min(96,J+16);s["--gradient"]="linear-gradient(135deg, hsl(45, 0%, "+J+"%) 0%, hsl(45, 0%, "+D+"%) 50%, hsl(45, 0%, "+G+"%) 100%)",s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+G+"%) 0%, hsl(45, 0%, "+J+"%) 100%)"}else{var ie=S(45,0,k,14,62,!0,4.6),ge=Math.max(12,ie-5),qe=Math.max(10,ie-11);s["--gradient"]="linear-gradient(135deg, hsl(45, 0%, "+qe+"%) 0%, hsl(45, 0%, "+ge+"%) 50%, hsl(45, 0%, "+ie+"%) 100%)",s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+ge+"%) 0%, hsl(45, 0%, "+qe+"%) 100%)"}var $=o(45,0,14,0,d);return s["--gradient-panel"]="linear-gradient(135deg, hsl(45, 0%, "+Math.min(74,$+5)+"%) 0%, hsl(45, 0%, "+$+"%) 100%)",s["--panel-fg"]="hsl(45, 0%, 14%)",s}function ee(s,b){let i=s||"light",g=b==null||b===""?null:b;if(e[s]){const N=e[s];i=N[0],g==null&&(g=N[1])}i==="system"&&(i=I()?"dark":"light");const Z=i==="dark";g=X(g??45);const R=g===F,w=document.documentElement;w.setAttribute("data-theme",Z?"dark-pro":"gold"),w.setAttribute("data-theme-mode",Z?"dark":"light"),w.setAttribute("data-theme-neutral",R?"true":"false");let v=Z?m(R?45:g):P(R?45:g);R&&(v=W(H(v),Z));for(var M=Object.keys(v),u=0;u<l.length;u++)M.indexOf(l[u])===-1&&w.style.removeProperty(l[u]);M.forEach(function(N){w.style.setProperty(N,v[N])}),l=M,h.mode=typeof s=="string"&&s?s:"light",h.hue=g,K(v,Z);try{localStorage.setItem("quant_theme_mode",Z?"dark":"light"),localStorage.setItem("quant_theme_hue",String(g))}catch{}return{mode:Z?"dark":"light",hue:g}}function ae(){try{var s=localStorage.getItem("quant_theme_hue");if(s!==null&&s!=="")return X(s)}catch{}var b=typeof window<"u"&&window.__quantModules?window.__quantModules.preferences:null;if(b&&b.getPreference){var i=b.getPreference("theme_hue");if(i!=null&&i!=="")return X(i)}return null}function B(s){var b=ae();return ee(s,b??void 0)}function U(){const s=localStorage.getItem("quant_theme");if(!s||!e[s]||localStorage.getItem("quant_theme_hue")!==null)return null;const b=e[s];return{mode:b[0],hue:b[1]}}function q(){const s=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let b=s.theme||"system",i=s.theme_hue!=null&&s.theme_hue!==""?s.theme_hue:null;const g=U();return i==null&&g&&(b=g.mode,i=g.hue),i==null&&(i=45),E(),ee(b,i)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:a,LEGACY_MAP:e,legacyThemes:f,NEUTRAL_HUE:F,generateLightTokens:P,generateDarkTokens:m,migrateLegacyTheme:U,persistedHue:ae,applyLegacyTheme:B,applyTheme:ee,init:q},typeof queueMicrotask=="function"?queueMicrotask(q):q()})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantI18n=e()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",e=["zh-CN","en","ja","ko","zh-TW"],f={};let t=a,c=null;function d(){return c&&typeof c=="object"&&"value"in c?c.value||a:t}function x(y,k){return e.indexOf(y)===-1?!1:(f[y]=k&&typeof k=="object"?k:{},!0)}function r(y){const k=e.indexOf(y)!==-1?y:a;return t=k,c&&typeof c=="object"&&"value"in c&&(c.value=k),typeof document<"u"&&document.documentElement.setAttribute("lang",k),t}function n(){return d()}function p(y){if(y&&typeof y=="object"&&"value"in y){c=y;const k=e.indexOf(y.value)!==-1?y.value:a;y.value=k,t=k}return t}function o(y,k){const _=d(),S=f[_]||{};let A=y in S?S[y]:null;if(A==null&&_!=="en"){const P=f.en||{};A=y in P?P[y]:null}return A==null&&(A=String(y)),k&&typeof k=="object"&&Object.keys(k).forEach(function(P){A=A.replace(new RegExp("\\{"+P+"\\}","g"),String(k[P]))}),A}const C={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:e,messages:f,registerLocale:x,setLocale:r,getLocale:n,bindLocale:p,t:o};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=C),C});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantZhCN=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.ruleScore":"选股评分","detail.notEvaluated":"未评估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时","glossary.title":"术语表","glossary.search":"搜索术语","glossary.definition":"定义","glossary.calc":"计算口径","glossary.empty":"无匹配术语","glossary.cat.macro":"宏观","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技术","glossary.cat.shortterm":"短线","glossary.cat.datasource":"数据源","glossary.cat.product":"产品","glossary.term.merrill_clock":"美林时钟","glossary.term.recovery":"复苏期","glossary.term.overheat":"过热期","glossary.term.stagflation":"滞胀期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五维评分","glossary.term.momentum":"动量策略","glossary.term.reversal":"反转策略","glossary.term.quality":"质量策略","glossary.term.capital_flow":"资金流策略","glossary.term.consensus":"共识榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰减","glossary.term.zscore":"Z-Score","glossary.term.pe":"市盈率(PE)","glossary.term.pb":"市净率(PB)","glossary.term.roe":"净资产收益率(ROE)","glossary.term.market_cap":"总市值","glossary.term.ma":"均线(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"换手率","glossary.term.zt_pool":"涨停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龙虎榜","glossary.term.ladder":"连板","glossary.term.promote_rate":"晋级率","glossary.term.money_effect":"赚钱效应","glossary.term.sentiment_cycle":"情绪周期","glossary.term.sector_flow":"板块资金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源热备","glossary.term.pit":"PIT(时点数据)","glossary.term.survivorship":"幸存者偏差","glossary.term.ai_eval":"AI评估","glossary.term.ai_chat":"智能问股","glossary.term.backtest":"回测","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"样本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"胜率","glossary.term.portfolio":"模拟组合","glossary.term.data_quality":"数据质量分","glossary.term.rbac":"RBAC权限","glossary.term.sector_rotation":"行业轮动","glossary.term.index_enhance":"指数增强","glossary.term.multifactor":"多因子","glossary.term.volatility":"波动率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林带","glossary.term.dragon_head":"龙头股","glossary.term.data_freshness":"数据新鲜度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantEn=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.ruleScore":"Rule score","detail.notEvaluated":"Not scored","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration","glossary.title":"Glossary","glossary.search":"Search terms","glossary.definition":"Definition","glossary.calc":"Calculation","glossary.empty":"No matching terms","glossary.cat.macro":"Macro","glossary.cat.strategy":"Strategy","glossary.cat.factor":"Factor","glossary.cat.tech":"Technical","glossary.cat.shortterm":"Short-term","glossary.cat.datasource":"Data Source","glossary.cat.product":"Product","glossary.term.merrill_clock":"Merrill Clock","glossary.term.recovery":"Recovery","glossary.term.overheat":"Overheat","glossary.term.stagflation":"Stagflation","glossary.term.recession":"Recession","glossary.term.merrill_score":"Five-Dimension Score","glossary.term.momentum":"Momentum","glossary.term.reversal":"Reversal","glossary.term.quality":"Quality","glossary.term.capital_flow":"Capital Flow","glossary.term.consensus":"Consensus Board","glossary.term.in_pool":"In Pool","glossary.term.out_pool":"Out of Pool","glossary.term.factor":"Factor","glossary.term.factor_ic":"Factor IC","glossary.term.ic_decay":"IC Decay","glossary.term.zscore":"Z-Score","glossary.term.pe":"P/E Ratio","glossary.term.pb":"P/B Ratio","glossary.term.roe":"ROE","glossary.term.market_cap":"Market Cap","glossary.term.ma":"Moving Average","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"Volume Ratio","glossary.term.turnover":"Turnover Rate","glossary.term.zt_pool":"Limit-Up Pool","glossary.term.zha_ban":"Failed Limit-Up","glossary.term.dt_pool":"Limit-Down Pool","glossary.term.lhb":"Dragon-Tiger List","glossary.term.ladder":"Consecutive Limit-Ups","glossary.term.promote_rate":"Promotion Rate","glossary.term.money_effect":"Money Effect","glossary.term.sentiment_cycle":"Sentiment Cycle","glossary.term.sector_flow":"Sector Flow","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"Triple-Source Failover","glossary.term.pit":"PIT (Point-in-Time)","glossary.term.survivorship":"Survivorship Bias","glossary.term.ai_eval":"AI Evaluation","glossary.term.ai_chat":"AI Stock Chat","glossary.term.backtest":"Backtest","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"Out-of-Sample","glossary.term.sharpe":"Sharpe Ratio","glossary.term.drawdown":"Drawdown","glossary.term.winrate":"Win Rate","glossary.term.portfolio":"Paper Portfolio","glossary.term.data_quality":"Data Quality Grade","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"Sector Rotation","glossary.term.index_enhance":"Index Enhancement","glossary.term.multifactor":"Multi-Factor","glossary.term.volatility":"Volatility","glossary.term.dividend_yield":"Dividend Yield","glossary.term.bollinger":"Bollinger Bands","glossary.term.dragon_head":"Leading Stock","glossary.term.data_freshness":"Data Freshness"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.Quantja=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.ruleScore":"選股スコア","detail.notEvaluated":"未評価","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間","glossary.title":"用語集","glossary.search":"用語検索","glossary.definition":"定義","glossary.calc":"計算方法","glossary.empty":"該当する用語がありません","glossary.cat.macro":"マクロ","glossary.cat.strategy":"戦略","glossary.cat.factor":"ファクター","glossary.cat.tech":"テクニカル","glossary.cat.shortterm":"短期","glossary.cat.datasource":"データソース","glossary.cat.product":"プロダクト","glossary.term.merrill_clock":"メリルクロック","glossary.term.recovery":"回復期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"スタグフレーション","glossary.term.recession":"景気後退","glossary.term.merrill_score":"5次元スコア","glossary.term.momentum":"モメンタム","glossary.term.reversal":"リバーサル","glossary.term.quality":"クオリティ","glossary.term.capital_flow":"資金フロー","glossary.term.consensus":"コンセンサス","glossary.term.in_pool":"新規採用","glossary.term.out_pool":"除外","glossary.term.factor":"ファクター","glossary.term.factor_ic":"ファクターIC","glossary.term.ic_decay":"IC減衰","glossary.term.zscore":"Zスコア","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"時価総額","glossary.term.ma":"移動平均","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"出来高倍率","glossary.term.turnover":"回転率","glossary.term.zt_pool":"ストップ高","glossary.term.zha_ban":"ストップ高失敗","glossary.term.dt_pool":"ストップ安","glossary.term.lhb":"竜虎榜","glossary.term.ladder":"連続ストップ高","glossary.term.promote_rate":"昇格率","glossary.term.money_effect":"マネー効果","glossary.term.sentiment_cycle":"センチメントサイクル","glossary.term.sector_flow":"セクターフロー","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"三重冗長","glossary.term.pit":"PIT","glossary.term.survivorship":"サバイバーシップバイアス","glossary.term.ai_eval":"AI評価","glossary.term.ai_chat":"AI株チャット","glossary.term.backtest":"バックテスト","glossary.term.walkforward":"ウォークフォワード","glossary.term.oos":"サンプル外","glossary.term.sharpe":"シャープレシオ","glossary.term.drawdown":"ドローダウン","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬ポートフォリオ","glossary.term.data_quality":"データ品質","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"セクターローテーション","glossary.term.index_enhance":"インデックス強化","glossary.term.multifactor":"マルチファクター","glossary.term.volatility":"ボラティリティ","glossary.term.dividend_yield":"配当利回り","glossary.term.bollinger":"ボリンジャーバンド","glossary.term.dragon_head":"リーダー株","glossary.term.data_freshness":"データ鮮度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",a),a});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.Quantko=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.ruleScore":"종목 점수","detail.notEvaluated":"미평가","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간","glossary.title":"용어집","glossary.search":"용어 검색","glossary.definition":"정의","glossary.calc":"계산 방법","glossary.empty":"일치하는 용어가 없습니다","glossary.cat.macro":"거시","glossary.cat.strategy":"전략","glossary.cat.factor":"팩터","glossary.cat.tech":"기술적","glossary.cat.shortterm":"단기","glossary.cat.datasource":"데이터 소스","glossary.cat.product":"제품","glossary.term.merrill_clock":"메릴 클럭","glossary.term.recovery":"회복기","glossary.term.overheat":"과열기","glossary.term.stagflation":"스태그플레이션","glossary.term.recession":"경기 침체","glossary.term.merrill_score":"5차원 점수","glossary.term.momentum":"모멘텀","glossary.term.reversal":"리버설","glossary.term.quality":"퀄리티","glossary.term.capital_flow":"자금 흐름","glossary.term.consensus":"컨센서스","glossary.term.in_pool":"신규 편입","glossary.term.out_pool":"제외","glossary.term.factor":"팩터","glossary.term.factor_ic":"팩터 IC","glossary.term.ic_decay":"IC 감쇠","glossary.term.zscore":"Z-Score","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"시가총액","glossary.term.ma":"이동평균","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"거래량비","glossary.term.turnover":"회전율","glossary.term.zt_pool":"상한가 풀","glossary.term.zha_ban":"상한가 실패","glossary.term.dt_pool":"하한가 풀","glossary.term.lhb":"용호방","glossary.term.ladder":"연속 상한가","glossary.term.promote_rate":"승격률","glossary.term.money_effect":"돈벌이 효과","glossary.term.sentiment_cycle":"심리 사이클","glossary.term.sector_flow":"섹터 자금","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"삼원 이중화","glossary.term.pit":"PIT","glossary.term.survivorship":"생존자 편향","glossary.term.ai_eval":"AI 평가","glossary.term.ai_chat":"AI 주식 채팅","glossary.term.backtest":"백테스트","glossary.term.walkforward":"워크포워드","glossary.term.oos":"샘플 외","glossary.term.sharpe":"샤프 비율","glossary.term.drawdown":"드로다운","glossary.term.winrate":"승률","glossary.term.portfolio":"모의 포트폴리오","glossary.term.data_quality":"데이터 품질","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"섹터 로테이션","glossary.term.index_enhance":"지수 강화","glossary.term.multifactor":"멀티팩터","glossary.term.volatility":"변동성","glossary.term.dividend_yield":"배당수익률","glossary.term.bollinger":"볼린저 밴드","glossary.term.dragon_head":"리더주","glossary.term.data_freshness":"데이터 신선도"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",a),a});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantzhTW=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.ruleScore":"選股評分","detail.notEvaluated":"未評估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時","glossary.title":"術語表","glossary.search":"搜尋術語","glossary.definition":"定義","glossary.calc":"計算口徑","glossary.empty":"無相符術語","glossary.cat.macro":"總體","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技術","glossary.cat.shortterm":"短線","glossary.cat.datasource":"資料源","glossary.cat.product":"產品","glossary.term.merrill_clock":"美林時鐘","glossary.term.recovery":"復甦期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"滯脹期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五維評分","glossary.term.momentum":"動量策略","glossary.term.reversal":"反轉策略","glossary.term.quality":"質量策略","glossary.term.capital_flow":"資金流策略","glossary.term.consensus":"共識榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰減","glossary.term.zscore":"Z-Score","glossary.term.pe":"本益比(PE)","glossary.term.pb":"股價淨值比(PB)","glossary.term.roe":"股東權益報酬率(ROE)","glossary.term.market_cap":"總市值","glossary.term.ma":"均線(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"換手率","glossary.term.zt_pool":"漲停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龍虎榜","glossary.term.ladder":"連板","glossary.term.promote_rate":"晉級率","glossary.term.money_effect":"賺錢效應","glossary.term.sentiment_cycle":"情緒週期","glossary.term.sector_flow":"板塊資金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源熱備","glossary.term.pit":"PIT(時點資料)","glossary.term.survivorship":"倖存者偏差","glossary.term.ai_eval":"AI評估","glossary.term.ai_chat":"智能問股","glossary.term.backtest":"回測","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"樣本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬組合","glossary.term.data_quality":"資料品質分","glossary.term.rbac":"RBAC權限","glossary.term.sector_rotation":"產業輪動","glossary.term.index_enhance":"指數增強","glossary.term.multifactor":"多因子","glossary.term.volatility":"波動率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林帶","glossary.term.dragon_head":"龍頭股","glossary.term.data_freshness":"資料新鮮度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",a),a});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantPinyin=e()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},e=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let f=[];function t(_){const S=String(_||"");let A="";for(const P of S){const m=a[P];m?A+=m.charAt(0):/[a-zA-Z0-9]/.test(P)&&(A+=P.toLowerCase())}return A}function c(_){const S=String(_||"");let A="";for(const P of S){const m=a[P];m?A+=m:/[a-zA-Z0-9]/.test(P)&&(A+=P.toLowerCase())}return A}function d(_){return String(_||"").trim().toLowerCase()}function x(_,S){const A=(S.code||"").toLowerCase();return/^\d+$/.test(_)?A.indexOf(_)!==-1:/[\u4e00-\u9fa5]/.test(_)?(S.name||"").toLowerCase().indexOf(_)!==-1:A.indexOf(_)!==-1||(S.initials||t(S.name)).indexOf(_)!==-1||(S.pinyin||c(S.name)).indexOf(_)!==-1}function r(_){const S={},A=[],P=function(m,l,h){!m||S[m]||(S[m]=!0,A.push({code:m,name:l||m,source:h||"core",initials:t(l||m),pinyin:c(l||m)}))};return e.forEach(function(m){P(m.code,m.name,"core")}),(_||[]).forEach(function(m){P(m.code,m.name,"extra")}),A}function n(_,S){const A=d(_);if(!A||!S||!S.length)return[];const P=A.split(/[\s,，、;；]+/).filter(Boolean);return P.length?S.filter(function(m){return P.every(function(l){return x(l,m)})}).slice(0,20).map(function(m){return{code:m.code,name:m.name,source:m.source||"core"}}):[]}function p(_){Array.isArray(_)&&(f=f.concat(_))}function o(){return f.slice()}function C(){return r(f)}function y(_){return n(_,C())}const k={CHAR_PINYIN:a,CORE_STOCKS:e,toPinyinInitials:t,toPinyin:c,normalizeQuery:d,matchToken:x,buildStockIndex:r,searchStocksByQuery:n,registerExtraStocks:p,getExtraStocks:o,getStockIndex:C,searchCoreStocks:y};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=k),k});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantPreferences=e()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",e={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},f=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],t={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function c(l){return l=parseInt(l,10),isNaN(l)?!1:l===-1||l>=0&&l<=360}const d={light:"classic-white",dark:"dark-pro"};function x(){if(typeof localStorage>"u")return{};try{const l=localStorage.getItem(a);if(!l)return{};const h=JSON.parse(l);return h&&typeof h=="object"?h:{}}catch{return{}}}function r(l){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(l))}catch{}}function n(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function p(){const l=Object.assign({},e,x()),h={};return f.forEach(function(L){const K=l[L];h[L]=L==="theme_hue"?c(K)?parseInt(K,10):e[L]:t[L].indexOf(K)!==-1?K:e[L]}),h}function o(l){if(f.indexOf(l)!==-1)return p()[l]}function C(l,h){return f.indexOf(l)===-1?!1:l==="theme_hue"?c(h):t[l].indexOf(h)!==-1}function y(l,h){if(!C(l,h))return!1;const L=x();return L[l]=h,r(L),n()&&_({[l]:h}),!0}function k(l){if(!l||typeof l!="object")return!1;const h={};if(Object.keys(l).forEach(function(K){C(K,l[K])&&(h[K]=l[K])}),!Object.keys(h).length)return!1;const L=Object.assign({},x(),h);return r(L),n()&&_(h),!0}function _(l){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:l})}).catch(function(){})}catch{}}async function S(){const l=p();if(!n()||typeof fetch>"u")return l;try{const h=await fetch("/api/user_config/preferences");if(h.ok){const L=await h.json();if(L.success&&L.preferences){const K=L.preferences;f.forEach(function(E){const I=K[E];if(E==="theme_hue"){c(I)&&(l[E]=parseInt(I,10));return}t[E].indexOf(I)!==-1&&(l[E]=I)}),r(l)}}}catch(h){typeof console<"u"&&console.warn&&console.warn("[preferences] 读取服务端偏好失败, 回退本地偏好:",h&&h.message)}return l}function A(l){const h=l||o("info_density")||"comfortable",L=t.info_density.indexOf(h)!==-1?h:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",L),L}function P(l){const h=l||o("theme")||"system";if(h==="system"){let L=!1;return typeof window<"u"&&window.matchMedia&&(L=window.matchMedia("(prefers-color-scheme: dark)").matches),L?"dark":"light"}return h==="dark"||h==="light"?h:"light"}const m={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:e,PREFERENCE_KEYS:f,PREFERENCE_VALUES:t,THEME_MODE_TO_THEME:d,getLocal:p,getPreference:o,isValidValue:C,setPreference:y,setPreferences:k,saveToBackend:_,loadPreferences:S,resolveTheme:P,applyDensity:A};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=m),m});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantRecent=e()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function f(){if(typeof localStorage>"u")return[];try{const p=localStorage.getItem(a);if(!p)return[];const o=JSON.parse(p);return Array.isArray(o)?o:[]}catch{return[]}}function t(p){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(p))}catch{}}function c(p,o){if(!p)return!1;let C=f().filter(function(y){return y.code!==p});return C.unshift({code:p,name:(o||"").toString().slice(0,32),ts:Date.now()}),C.length>10&&(C=C.slice(0,10)),t(C),!0}function d(){return f().slice(0,10)}function x(p){t(f().filter(function(o){return o.code!==p}))}function r(){t([])}const n={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:c,getRecentViewed:d,removeRecent:x,clearRecent:r};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=n),n});(function(){const a=typeof Vue<"u"?Vue:{},{ref:e,computed:f,watch:t,onMounted:c,nextTick:d}=a;function x(v,M={}){if(typeof v=="string"&&v.startsWith("/api/")){const u=localStorage.getItem("quant_token");if(u)return{...M,headers:{...M.headers||{},Authorization:"Bearer "+u}}}return M}async function r(v,M={}){const u=x(v,M),N={"Content-Type":"application/json",...u.headers},oe=(M.method||"GET").toUpperCase(),J=oe+"|"+v,D=async()=>{const G=await fetch(v,{...u,headers:N});if(G.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!G.ok){let ie="";try{const ge=await G.json();ie=ge&&ge.detail||""}catch{}throw Object.assign(new Error(ie||"请求失败（HTTP "+G.status+"）"),{status:G.status})}return await G.json()};try{const G=M.noLoading?D:()=>h(D);return oe==="GET"&&!M.noDedupe?await A(J,G):await G()}catch(G){throw G.message==="登录已过期"?G:(console.error("[apiFetch] "+v+":",G.message),Object.assign(G,{_formatted:L(G,G.status)}))}}function n(){return new Date().toISOString().split("T")[0]}function p(v){return v?v.split("T")[0]:""}function o(v,M="info",u=3e3){let N=document.querySelector(".toast-container");N||(N=document.createElement("div"),N.className="toast-container",document.body.appendChild(N));const oe=document.createElement("div");oe.className=`toast toast-${M}`,oe.textContent=v,N.appendChild(oe),setTimeout(()=>{oe.classList.add("leaving"),setTimeout(()=>oe.remove(),300)},u)}function C(v,M=300){let u;return function(...N){clearTimeout(u),u=setTimeout(()=>v.apply(this,N),M)}}function y(v,M=300){let u=!1;return function(...N){u||(v.apply(this,N),u=!0,setTimeout(()=>{u=!1},M))}}async function k(v,M=3e3,u=""){const N=new Promise((oe,J)=>setTimeout(()=>J(new Error("timeout")),M));try{return await Promise.race([v,N])}catch(oe){console.warn(`[timeout] ${u||"task"} failed:`,oe.message)}}const _=new Map;function S(){return _.clear(),!0}function A(v,M){if(!v||typeof M!="function")return Promise.reject(new Error("bad dedupe args"));if(_.has(v))return _.get(v);const u=Promise.resolve().then(M).finally(()=>{_.delete(v)});return _.set(v,u),u}let P=0;function m(){return P=0,!0}function l(){return P}async function h(v){P++;try{return await v()}finally{P--}}function L(v,M){if(!v)return"请求失败";if(v&&typeof v=="object"&&v.detail)return String(v.detail);if(typeof v=="string"&&v)return v;if(v&&v.message){const u=String(v.message);return/Failed to fetch|fetch failed|networkerror/i.test(u)?"网络连接失败，请检查网络后重试":u}return M?"请求失败（HTTP "+M+"）":"请求失败"}function K(v,M){if(v===M)return!0;try{return JSON.stringify(v)===JSON.stringify(M)}catch{return!1}}function E(v,M,u){const N=(v||"GET").toUpperCase();let oe="";if(u)try{const J={};Object.keys(u).sort().forEach(D=>{J[D]=u[D]}),oe=JSON.stringify(J)}catch{oe=""}return N+"|"+M+"|"+oe}class I{constructor(){this._map=new Map,this._exp=new Map}get(M){const u=this._exp.get(M);if(u!=null){if(Date.now()>u){this.delete(M);return}return this._map.get(M)}}set(M,u,N){return this._map.set(M,u),this._exp.set(M,Date.now()+(N>0?N:-1)),u}delete(M){this._map.delete(M),this._exp.delete(M)}clear(){this._map.clear(),this._exp.clear()}has(M){return this.get(M)!==void 0}get size(){return this._map.size}}function F(v){const M=new I,u=v!=null&&v>0?v:15e3;return{store:M,defaultTtl:u,get:N=>M.get(N),set:(N,oe,J)=>M.set(N,oe,J??u),delete:N=>M.delete(N),clear:()=>M.clear(),size:()=>M.size}}const X=new Set;async function H(v){const M=v&&v.cache,u=v&&v.key,N=v&&(v.fetchFn||v.fetcher),oe=v&&v.ttl;if(!M||!u||typeof N!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(X.has(u))return{ok:!1,changed:!1,skipped:!0,fresh:null};X.add(u);try{const J=M.get(u);let D;try{D=await N()}catch(ie){return v.onError&&v.onError(ie),{ok:!1,changed:!1,fresh:null}}const G=J!==void 0&&!K(J,D);return M.set(u,D,oe),v.apply&&v.apply(D,J),J!==void 0&&(G?v.onChanged&&v.onChanged(D,J):v.onUnchanged&&v.onUnchanged(D,J)),{ok:!0,changed:G,fresh:D}}finally{X.delete(u)}}const W=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function ee(v,M={}){if(v==null)return"";const u=M&&M.allow||W,N=new Set(u.map(G=>String(G).toUpperCase()));let oe;try{oe=new DOMParser().parseFromString(String(v),"text/html")}catch{return String(v).replace(/[<>&]/g,ie=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[ie])}const J=oe.body||oe;function D(G){Array.from(G.childNodes).forEach(ie=>{if(ie.nodeType===1){const ge=String(ie.tagName).toUpperCase();if(N.has(ge))Array.from(ie.attributes).forEach(qe=>{const $=qe.name.toLowerCase(),ue=(qe.value||"").trim().toLowerCase();($.startsWith("on")||($==="href"||$==="src"||$==="xlink:href")&&ue.startsWith("javascript:")||$==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(ue))&&ie.removeAttribute(qe.name),$==="href"&&!/^(https?:|mailto:|#|\/)/.test(ue)&&ie.removeAttribute("href")}),ge==="A"&&ie.setAttribute("rel","noopener noreferrer"),D(ie);else{const qe=ie.parentNode;for(;ie.firstChild;)qe.insertBefore(ie.firstChild,ie);qe.removeChild(ie)}}else if(ie.nodeType!==3){if(ie.nodeType===8)ie.parentNode&&ie.parentNode.removeChild(ie);else if(ie.nodeType===4){const ge=oe.createTextNode(ie.nodeValue||"");ie.parentNode&&ie.parentNode.replaceChild(ge,ie)}}})}return D(J),J.innerHTML}const ae="/api/openapi",B="/api/market/ws/quotes",U=1,q=2.5,s="数据不可达",b="实时不可用，不刷新";function i(){const v=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",M=typeof location<"u"?location.host:"localhost:8001";return v+"//"+M+B}function g(v,M){if(!v)return null;const u=M||{riseSpeed:U,volumeRatio:q},N=u.riseSpeed!=null?u.riseSpeed:U,oe=u.volumeRatio!=null?u.volumeRatio:q,J=parseFloat(v.rise_speed);if(!isNaN(J)&&Math.abs(J)>N)return J>0?"涨速预警":"跌速预警";const D=parseFloat(v.volume_ratio);return!isNaN(D)&&D>oe?"放量预警":null}function Z(v){const M=Number(v);return v==null||isNaN(M)?null:M}const w={apiFetch:r,withAuthHeaders:x,getToday:n,formatDate:p,withTimeout:k,showToast:o,debounce:C,throttle:y,resetInFlight:S,dedupeRequest:A,resetLoading:m,loadingCount:l,withLoading:h,formatApiError:L,jsonEquals:K,makeCacheKey:E,CacheStore:I,createTtlCache:F,silentRefresh:H,sanitizeHtml:ee,OPENAPI_ROUTE_BASE:ae,REALTIME_WS_PATH:B,WARN_RISE_SPEED_THRESHOLD:U,WARN_VOLUME_RATIO_THRESHOLD:q,REALTIME_DEGRADED_TEXT:s,REALTIME_FALLBACK_TEXT:b,buildRealtimeWsUrl:i,checkQuoteWarning:g,quoteFmt:{price:function(v){const M=Z(v);return M===null?"--":M.toFixed(2)},pct:function(v){const M=Z(v);return M===null?"--":(M>0?"+":"")+M.toFixed(2)+"%"},num:function(v){const M=Z(v);return M===null?"--":M.toFixed(2)},color:function(v){const M=v?v.change_pct:null,u=Z(M);return u===null?"":u>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=w),typeof Me<"u"&&Me.exports&&(Me.exports=w)})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantTabsCore=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(C,y){return C+"/"+y}function f(C,y,k,_){var S=C[y]||[],A=S.findIndex(function(l){return l.subPage===k});if(A!==-1)return{groups:C,activeKey:e(y,k)};var P=S.concat([{subPage:k,title:_}]);P.length>a&&(P=c(P));var m=Object.assign({},C,t({},y,P));return{groups:m,activeKey:e(y,k)}}function t(C,y,k){return C[y]=k,C}function c(C){if(C.length<=a)return C;var y=C.length>1?1:0;return C.filter(function(k,_){return _!==y})}function d(C,y,k,_){var S=C[y]||[],A=S.findIndex(function(h){return h.subPage===k});if(A===-1)return{groups:C,nextActive:null};var P=S.filter(function(h){return h.subPage!==k}),m=Object.assign({},C,t({},y,P)),l=null;return k===_&&(P[A]?l=P[A].subPage:P[A-1]?l=P[A-1].subPage:l=null),{groups:m,nextActive:l}}function x(C){return C&&C.length?C[0]:""}function r(C,y){return C[y]||[]}function n(C,y,k){var _=C[y]||[],S=_.filter(function(P){return P.subPage===k}),A=Object.assign({},C,t({},y,S));return{groups:A,activeKey:S.length?e(y,S[0].subPage):null}}function p(C,y){var k=Object.assign({},C,t({},y,[]));return{groups:k,activeKey:null}}function o(C,y,k,_){var S=(C[y]||[]).slice();if(k<0||k>=S.length)return{groups:C};var A=S.splice(k,1)[0];return S.splice(Math.max(0,Math.min(_,S.length)),0,A),{groups:Object.assign({},C,t({},y,S))}}return{MAX_TABS:a,openTab:f,closeTab:d,getDefaultTab:x,tabsOf:r,evictOldest:c,closeOthers:n,closeAll:p,reorder:o,keyOf:e}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var _n=typeof Me=="object"&&Me.exports?Me.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;_n&&(window.__quantModules.tabsCore=_n)}(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantNavModeCore=e()})(typeof self<"u"?self:void 0,function(){var a=["subnav","tree","toptab"],e="toptab",f="nav_mode";function t(o){return a.indexOf(o)!==-1?o:e}function c(o){return t(o)==="subnav"}function d(o){return t(o)==="tree"}function x(o){return t(o)==="toptab"}function r(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function n(){var o=r(),C=e;if(o)try{C=t(o.getItem(f))}catch{}return{navMode:C}}function p(o){var C=r();if(!(!C||!o))try{o.navMode!==void 0&&C.setItem(f,t(o.navMode))}catch{}}return{NAV_MODES:a,DEFAULT_NAV_MODE:e,normalizeNavMode:t,subnavVisible:c,treeChildrenVisible:d,topTabsVisible:x,readPrefs:n,writePrefs:p}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var xn=typeof Me=="object"&&Me.exports?Me.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;xn&&(window.__quantModules.navModeCore=xn)}(function(){function e(i,g){if(!Array.isArray(i)||i.length<=g)return i;const Z=[],R=i.length/g*2;for(let w=0;w<i.length;w+=R){const v=Math.floor(w),M=Math.min(i.length,Math.ceil(w+R));let u=1/0,N=-1,oe=-1/0,J=-1;for(let D=v;D<M;D++){const G=i[D];if(!G)continue;const ie=G[3]!=null?Number(G[3]):1/0,ge=G[4]!=null?Number(G[4]):-1/0;ie<u&&(u=ie,N=D),ge>oe&&(oe=ge,J=D)}N>=0&&Z.push(i[N]),J>=0&&J!==N&&Z.push(i[J])}return Z}let f=null;function t(){return typeof echarts<"u"?Promise.resolve():(f||(f=new Promise(function(i,g){const Z=document.createElement("script");Z.src="/static/lib/echarts.min.js",Z.async=!0,Z.onload=function(){typeof echarts<"u"?i():g(new Error("echarts 加载后未定义"))},Z.onerror=function(){g(new Error("echarts.min.js 加载失败"))},document.head.appendChild(Z)})),f)}function c(){const i=getComputedStyle(document.documentElement);return{primary:i.getPropertyValue("--primary-color").trim()||"#2563eb",up:i.getPropertyValue("--color-up").trim()||"#43e97b",down:i.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:i.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:i.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const d=i=>{try{return typeof getComputedStyle!="function"||typeof document>"u"?"":(getComputedStyle(document.documentElement).getPropertyValue(i)||"").trim()}catch{return""}};function x(){return{up:d("--color-up")||"#E63946",down:d("--color-down")||"#2E7D32",neutral:d("--color-neutral")||"#43a047",accent:d("--color-accent")||"#F59E0B",risk:d("--color-danger")||"#C62828",warn:d("--color-warning")||"#FF9800",success:d("--color-success")||"#4CAF50",primary:d("--qc-primary-600")||"#b8922a",grid:d("--chart-split")||"#e2e8f0",axis:d("--chart-axis")||"#cbd5e1",bg:d("--chart-bg")||"transparent",series:[d("--qc-primary-600")||"#b8922a",d("--qc-primary-500")||"#c49b2e",d("--qc-primary-700")||"#8f6f1f",d("--qc-primary-400")||"#d4b352",d("--color-up")||"#E63946",d("--color-down")||"#2E7D32",d("--color-accent")||"#F59E0B",d("--qc-neutral-400")||"#b8ae9f"]}}function r(i,g,Z,R=!1,w=!1){if(!g||g.length===0)return;g.length>2e3&&(g=e(g,2e3));const v=g.map(ne=>typeof ne[0]=="string"&&ne[0].indexOf("-")>=0?ne[0]:ne[0].slice(0,4)+"-"+ne[0].slice(4,6)+"-"+ne[0].slice(6,8)),M=c(),u={ma5:d("--color-accent")||"#F59E0B",ma10:d("--color-primary")||"#3B82F6",ma20:d("--color-warning")||"#8B5CF6",ma60:d("--color-success")||"#10B981"},N=g.map(ne=>[ne[1],ne[2],ne[3],ne[4]]),oe=g.map(ne=>ne[5]),J=g.map(ne=>ne[6]),D=g.map(ne=>ne[7]),G=g.map(ne=>ne[8]),ie=g.map(ne=>ne[9]),ge=g.map(ne=>ne[10]),$=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",ue=M.borderLight,De={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:M.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:$,borderColor:ue,textStyle:{color:M.textSecondary,fontSize:12},formatter:function(ne){if(!ne||!ne.length)return"";const be=ne[0].dataIndex,Pe=g[be];if(!Pe)return"";const me=i.getOption(),we=me.legend&&me.legend[0]&&me.legend[0].selected||{},xe=Ne=>we[Ne]!==!1,ce=Ne=>Ne==null||isNaN(Ne)?"--":Number(Ne).toFixed(2),se=Ne=>Ne==null||isNaN(Ne)?"--":(Number(Ne)/1e4).toFixed(2)+"万手",fe=['<div style="font-weight:600;color:'+M.textSecondary+';">'+v[be]+"</div>"];return fe.push("开: "+ce(Pe[1])+"　收: "+ce(Pe[2])),fe.push("低: "+ce(Pe[3])+"　高: "+ce(Pe[4])),fe.push("成交量: "+se(Pe[5])),Pe[6]!=null&&xe("MA5")&&fe.push("MA5: "+ce(Pe[6])),Pe[7]!=null&&xe("MA10")&&fe.push("MA10: "+ce(Pe[7])),Pe[8]!=null&&xe("MA20")&&fe.push("MA20: "+ce(Pe[8])),Pe[9]!=null&&xe("MA60")&&fe.push("MA60: "+ce(Pe[9])),Pe[10]!=null&&fe.push("VOL_MA5: "+se(Pe[10])),fe.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:w?0:8,textStyle:{color:M.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:w?30:40,height:w?"48%":"52%"},{left:56,right:16,top:w?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:v,boundaryGap:!0,axisLine:{lineStyle:{color:ue}},axisLabel:{color:M.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:v,axisLabel:{show:!1},axisLine:{lineStyle:{color:ue}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:ue}},axisLabel:{color:M.textSecondary,fontSize:11,formatter:function(ne){const be=Math.round(ne*100)/100;return be%1===0?String(Math.round(be)):be.toFixed(2)}},splitLine:{lineStyle:{color:ue,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:ue}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,g.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:ue,textStyle:{color:M.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:N,itemStyle:{color:M.up,color0:M.down,borderColor:M.up,borderColor0:M.down}},{name:"MA5",type:"line",data:J,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma5}},{name:"MA10",type:"line",data:D,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma10}},{name:"MA20",type:"line",data:G,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma20}},{name:"MA60",type:"line",data:ie,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:oe,itemStyle:{color:function(ne){const be=ne.dataIndex;return g[be][1]>=g[be][2]?M.up:M.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:ge,smooth:!0,symbol:"none",lineStyle:{width:1,color:u.ma5,type:"dashed"}}]};i.setOption(De,!0)}const n=new Map;function p(i){return n.has(i)||n.set(i,{chart:null,cache:null}),n.get(i)}async function o(i,g,Z,R=!1,w={}){await t();const v=p(i);let M=document.getElementById(i);if(!M)for(let u=0;u<16&&(await new Promise(N=>setTimeout(N,50)),M=document.getElementById(i),!M);u++);if(!M)throw new Error("无法找到图表容器: "+i);if(M.offsetWidth<50&&(M.style.minWidth="600px",M.style.minHeight="300px"),!v.chart||v.chart.isDisposed()||v.chart.getDom()!==M){if(v.chart)try{v.chart.dispose()}catch{}v.chart=echarts.init(M),v.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const u=w.onLegend;typeof u=="function"&&v.chart.on("legendselectchanged",N=>{N&&N.selected&&u(N.selected)})}return r(v.chart,g,Z,R,!!w.isMobile),v.cache={data:g,period:Z,isIndex:R,isMobile:!!w.isMobile},v.chart}function C(i){const g=n.get(i);g&&g.chart&&(g.chart.dispose(),g.chart=null,g.cache=null)}function y(i){const g=n.get(i);g&&g.chart&&g.chart.resize()}function k(i,g){const Z=n.get(i),R=Z&&Z.chart;if(R)if(g<=0)R.dispatchAction({type:"dataZoom",start:0,end:100});else{const M=Math.max(0,(60-g)/60*100);R.dispatchAction({type:"dataZoom",start:Math.round(M),end:100})}}function _(i){var R,w,v;const g=n.get(i);if(!g||!g.chart||!g.cache||g.chart.isDisposed())return;const Z=((v=(w=(R=g.chart.getOption())==null?void 0:R.legend)==null?void 0:w[0])==null?void 0:v.selected)||null;r(g.chart,g.cache.data,g.cache.period,g.cache.isIndex,g.cache.isMobile),Z&&g.chart.setOption({legend:{selected:Z}})}function S(i){const g=n.get(i);return g&&g.chart}const A=new Map;function P(i){return A.has(i)||A.set(i,{chart:null,cache:null}),A.get(i)}function m(i,g,Z={}){return t().then(function(){const R=P(i),w=document.getElementById(i);if(!w)throw new Error("无法找到图表容器: "+i);if(w.offsetWidth<50&&(w.style.minWidth="600px",w.style.minHeight="300px"),R.chart&&R.chart.getDom&&R.chart.getDom()!==w){try{R.chart.dispose()}catch{}R.chart=null}R.chart||(R.chart=echarts.init(w),R.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),R.resizeBound||(R.resizeBound=!0,window.addEventListener("resize",function(){R.chart&&!R.chart.isDisposed()&&R.chart.resize()})));const v=typeof g=="function"?g():g;return R.chart.setOption(v,!0),R.cache={buildOption:g,key:Z.key||""},R.chart})}function l(i){var w,v,M;const g=A.get(i);if(!g||!g.chart||!g.cache||g.chart.isDisposed())return;const Z=((M=(v=(w=g.chart.getOption())==null?void 0:w.legend)==null?void 0:v[0])==null?void 0:M.selected)||null,R=typeof g.cache.buildOption=="function"?g.cache.buildOption():g.cache.buildOption;g.chart.setOption(R,!0),Z&&R&&R.legend&&R.legend.selected&&g.chart.setOption({legend:{selected:Z}})}function h(i){const g=A.get(i);g&&g.chart&&(g.chart.dispose(),g.chart=null,g.cache=null)}function L(i){const g=A.get(i);g&&g.chart&&g.chart.resize()}const K=new Map;function E(i){return K.has(i)||K.set(i,{chart:null,cache:null}),K.get(i)}function I(i,g,Z={}){return t().then(function(){const R=E(i),w=document.getElementById(i);if(!w)return null;if(w.offsetWidth<50&&(w.style.minWidth="600px",w.style.minHeight="300px"),R.chart&&R.chart.getDom&&R.chart.getDom()!==w){try{R.chart.dispose()}catch{}R.chart=null}R.chart||(R.chart=echarts.init(w),R.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),R.resizeBound||(R.resizeBound=!0,window.addEventListener("resize",function(){R.chart&&!R.chart.isDisposed()&&R.chart.resize()})));const v=typeof g=="function"?g():g;return R.chart.setOption(v,!0),R.cache={buildOption:g,key:Z.key||""},R.chart})}function F(i){const g=K.get(i);if(!g||!g.chart||!g.cache||g.chart.isDisposed())return;const Z=typeof g.cache.buildOption=="function"?g.cache.buildOption():g.cache.buildOption;g.chart.setOption(Z,!0)}function X(i){const g=K.get(i);g&&g.chart&&(g.chart.dispose(),g.chart=null,g.cache=null)}function H(i){const g=K.get(i);g&&g.chart&&g.chart.resize()}const W=I,ee=F,ae=X,B=H;function U(i,g,Z,R){R=R||{};const w=R.drawdownColor||d("--state-danger-solid")||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[R.navLabel||"净值",R.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:Z||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:R.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:R.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:R.navLabel||"净值",type:"line",data:i||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:R.ddLabel||"回撤",type:"line",yAxisIndex:1,data:g||[],showSymbol:!1,areaStyle:{opacity:.25,color:w},lineStyle:{color:w,type:"solid",width:1.5}}]}}function q(i,g){g=g||{};const Z=g.bandColor||d("--state-info-solid")||"#1976d2",R=i&&i.dates||[],w=i&&i.median||[],v=i&&i.q25||[],M=i&&i.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[g.medianLabel||"中位IC",g.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:R,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:g.medianLabel||"中位IC",type:"line",data:w,showSymbol:!1,lineStyle:{width:2,color:Z}},{name:g.bandLabel||"25–75分位",type:"line",data:v,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:Z,opacity:.12}},{name:"_bandH",type:"line",data:M.map(function(u,N){return u-(v[N]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:Z,opacity:.12}}]}}function s(i,g){g=g||{};const Z=g.color||d("--color-ai")||"#7c3aed",R=i&&i.dates||[],w=i&&i.value||[],v=i&&i.upper||[],M=i&&i.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[g.valueLabel||"情绪",g.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:R,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:g.valueLabel||"情绪",type:"line",data:w,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:Z}},{name:g.bandLabel||"过热/冰点带",type:"line",data:v,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:Z,opacity:.1}},{name:"_bandL",type:"line",data:M.map(function(u,N){return(v[N]||0)-u}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:Z,opacity:.1}}]}}const b={renderKlineChart:r,renderKlineTo:o,disposeKline:C,resizeKline:y,zoomKline:k,redrawKline:_,getKlineChart:S,renderBacktestTo:m,redrawBacktest:l,disposeBacktest:h,resizeBacktest:L,renderPortfolioTo:I,redrawPortfolio:F,disposePortfolio:X,resizePortfolio:H,renderSimpleChartTo:W,redrawSimpleChart:ee,disposeSimpleChart:ae,resizeSimpleChart:B,buildNavDrawdownOption:U,buildIcBandOption:q,buildSentimentBandOption:s,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:x,init(){return{renderKlineChart:r,renderKlineTo:o,disposeKline:C,resizeKline:y,zoomKline:k,redrawKline:_,getKlineChart:S,renderBacktestTo:m,redrawBacktest:l,disposeBacktest:h,resizeBacktest:L,renderPortfolioTo:I,redrawPortfolio:F,disposePortfolio:X,resizePortfolio:H,renderSimpleChartTo:W,redrawSimpleChart:ee,disposeSimpleChart:ae,resizeSimpleChart:B,buildNavDrawdownOption:U,buildIcBandOption:q,buildSentimentBandOption:s,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:x}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=b),typeof Me<"u"&&Me.exports&&(Me.exports={downsampleSeries:e,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:U,buildIcBandOption:q,buildSentimentBandOption:s})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:e,computed:f}=Vue,{configChanged:t,consensus:c}=a,d=e(null),x=e(""),r=e(null),n=e([]),p=e([]),o=e([]),C=e([]),y=e([]),k=e([]),_=e({});function S(Se){const Ee=y.value.indexOf(Se);Ee>=0?y.value.splice(Ee,1):y.value.push(Se)}const A=e("date"),P=e([]),m=e(!1),l=e(!1),h=e("watchlist"),L=e([]),K=e({vendors:[]}),E=e(""),I=e(!1),F=e(!1);function X(Se){if(!Se)return"";const Ee=String(Se),Ve=Ee.length;if(Ve<=4)return Ee[0]+"*".repeat(Ve-1);const Oe=Ve<=8?2:4;return Ee.slice(0,Oe)+"*".repeat(Ve-Oe-Oe)+Ee.slice(-Oe)}async function H(Se){let Ee;try{Ee=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Oe=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:Ee,target:Se})})).json();if(Oe.success)return Oe.secret;ElementPlus.ElMessage.error(Oe.message||"查看失败")}catch(Ve){ElementPlus.ElMessage.error("查看失败: "+Ve.message)}return null}async function W(Se){if(Se._revealed){Se._revealed=!1,Se._masked=X(Se.api_key);return}const Ee=await H("ai:"+Se.vendor_key);Ee!==null&&(Se.api_key=Ee,Se._revealed=!0)}async function ee(Se){if(Se._editing){Se._editing=!1,Se._revealed=!1,Se.api_key&&(Se._masked=X(Se.api_key));return}Se._editing=!0;try{const Ve=await(await fetch("/api/ai/models?full=1")).json();if(Ve.success){const Oe=(Ve.data.vendors||[]).find($e=>$e.vendor_key===Se.vendor_key);Oe&&(Se.api_key=Oe.api_key||"")}else Ve.message&&ElementPlus.ElMessage.error(String(Ve.message))}catch(Ee){ElementPlus.ElMessage.error("解锁失败: "+Ee.message)}}function ae(Se){const{_fetching:Ee,_testing:Ve,_revealed:Oe,_masked:$e,_editing:Xe,...Ye}=Se;return Xe||(Ye.api_key=""),Ye.models=(Se.models||[]).map(it=>{const{_testing:bt,testResult:Mt,...Ht}=it;return Ht}),Ye}async function B(){var Se;try{E.value="";const Ee=await fetch("/api/ai/models");if(Ee.status===401){E.value="请先登录后再查看模型配置";return}if(!Ee.ok){E.value=`服务器错误 (${Ee.status})`;return}const Ve=await Ee.json();Ve.success?(L.value=(((Se=Ve.data)==null?void 0:Se.vendors)||[]).map(Oe=>({...Oe,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:Oe.api_key||"",models:(Oe.models||[]).map($e=>({...$e,_testing:!1,testResult:void 0}))})),E.value=""):E.value=Ve.message||"加载失败"}catch(Ee){E.value="网络错误: "+Ee.message}}async function U(){try{const Ee=await(await fetch("/api/ai/catalog")).json();Ee.success&&Ee.data&&(K.value=Ee.data)}catch(Se){console.warn("AI 厂商目录加载失败",Se)}}async function q(){F.value=!0;try{const Ve=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:L.value.map(ae)})})).json();Ve.success?(L.value.forEach(Oe=>{Oe._editing=!1,Oe._revealed=!1,Oe.api_key&&(Oe._masked=X(Oe.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(Ve.message||"保存失败")}catch(Se){ElementPlus.ElMessage.error("保存失败: "+Se.message)}F.value=!1}async function s(Se,Ee){Ee._testing=!0;try{const Oe=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:Se.vendor_key,model:Ee.name,base_url:Se.base_url,api_key:Se.api_key,timeout:Se.timeout})});Ee.testResult=await Oe.json()}catch(Ve){Ee.testResult={success:!1,message:Ve.message}}Ee._testing=!1}async function b(){I.value=!0;for(const Se of L.value)for(const Ee of Se.models||[])Se.api_key?await s(Se,Ee):Ee.testResult={success:!1,message:"未配置 API Key"};I.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function i(Se){Se._fetching=!0;try{const Oe=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:Se.vendor_key,base_url:Se.base_url,api_key:Se.api_key,timeout:Se.timeout})})).json();if(Oe.success&&Array.isArray(Oe.models)){const $e=new Set((Se.models||[]).map(Xe=>Xe.name));for(const Xe of Oe.models)$e.has(Xe)||Se.models.push({name:Xe,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${Oe.models.length} 个模型`)}else ElementPlus.ElMessage.error(Oe.message||"获取模型列表失败")}catch(Ee){ElementPlus.ElMessage.error("获取模型列表失败: "+Ee.message)}Se._fetching=!1}function g(Se){const Ee=(K.value.vendors||[]).find(Ve=>Ve.vendor_key===Se);if(Ee){if(L.value.some(Ve=>Ve.vendor_key===Se)){ElementPlus.ElMessage.warning("该厂商已存在");return}L.value.push({vendor_key:Ee.vendor_key,name:Ee.name,kind:Ee.kind,base_url:Ee.base_url,api_key:"",timeout:60,tier:Ee.tier||"",website:Ee.website||"",locked:!!Ee.locked,models:(Ee.models||[]).map(Ve=>({name:Ve,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${Ee.name}」，配置 API Key 后保存生效`)}}function Z(){L.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function R(Se){Se.models||(Se.models=[]),Se.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function w(Se,Ee){const Ve=Se.models[Ee];if(!(!Ve||Ve.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(Ve.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}Se.models.splice(Ee,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function v(Se){if(Se.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(Se.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const Ee=L.value.indexOf(Se);Ee>=0&&L.value.splice(Ee,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const M=e({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),u=e(!1),N=e(""),oe=e(0),J=e(""),D=e(!1),G=e(""),ie=e(!1),ge=e(0),qe=e(0),$=e(""),ue=e({}),De=e({}),ne=e({}),be=e({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),Pe=e("manual"),me=f(()=>{const Se={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return Se[be.value.provider]||Se.custom}),we={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function xe(Se){if(Se==="manual")return;const Ee=we[Se];Ee&&(be.value.endpoint=Ee.endpoint,be.value.model=Ee.model,t.value=!0)}function ce(){if(t.value=!0,be.value.provider!=="codingplan"&&be.value.provider!=="custom"){const Se=me.value;Se&&(be.value.endpoint=Se.endpoint,be.value.model=Se.model)}else be.value.provider==="codingplan"&&(be.value.endpoint||(be.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),be.value.model||(be.value.model="ark-code-latest"))}let se=null;const fe=8;async function Ne(){se&&(se.abort(),se=null);const Ee=(c.value||[]).filter(Ye=>Ye.status==="new"||Ye.status==="out").filter(Ye=>!_.value[Ye.code]);if(Ee.length===0)return;const Ve=new AbortController;se=Ve;let Oe=0;const $e=async()=>{for(;Oe<Ee.length;){const Ye=Ee[Oe++];try{const bt=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:Ye.code,stock_name:Ye.name,event_type:Ye.status==="new"?"enter":"exit"}),signal:Ve.signal})).json();bt.success&&bt.signal&&(_.value={..._.value,[Ye.code]:bt.signal})}catch(it){if(it.name==="AbortError")return}}},Xe=Array.from({length:Math.min(fe,Ee.length)},()=>$e());await Promise.all(Xe)}function Be(){se&&(se.abort(),se=null)}let We=0;async function Et(Se){const Ee=++We;try{const Oe=await(await fetch(`/api/ai/history/last/${encodeURIComponent(Se)}`)).json();if(Ee!==We)return;Oe.success&&Oe.data&&(d.value=Oe.data,x.value=Oe.data.evaluate_time,pt(Se,Oe.data),Pt(Oe.data))}catch{}}async function pt(Se,Ee){var Ve,Oe;try{const Xe=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(Se)}&limit=2`)).json();if(Xe.success&&Xe.data&&Xe.data.length>=2){const Ye=Xe.data[1],it=((Ve=Ee.result)==null?void 0:Ve.total_score)||0,bt=((Oe=Ye.result)==null?void 0:Oe.total_score)||0;it>0&&bt>0&&(r.value={prevScore:bt,currScore:it,diff:it-bt})}}catch($e){console.warn("[refreshStrategyData] autoPoll failed:",$e)}}function Pt(Se){var $e;const Ee=(($e=Se.result)==null?void 0:$e.dimensions)||{},Ve=[],Oe=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Xe of Oe){const Ye=Ee[Xe.key];Ye!==void 0&&Ve.push({icon:Ye>=Xe.good?"check-circle-2":Ye>=Xe.warn?"alert-triangle":"x-circle",label:`${Xe.label} ${Math.round(Ye)}分`})}n.value=Ve}return{aiResult:d,lastEvalTime:x,evalHistoryComparison:r,checklistItems:n,aiHistory:p,selectedHistoryIds:o,expandedDates:C,expandedMonths:y,expandedStocks:k,poolSignals:_,toggleMonthExpand:S,aiHistoryView:A,selectedWatchlistCodes:P,showAutoEvaluateSettings:m,savingConfig:l,autoEvaluateScope:h,aiVendors:L,aiCatalog:K,aiModelsError:E,testingAllModels:I,savingAiModels:F,loadAiVendors:B,loadAiCatalog:U,saveAiVendors:q,saveAiModels:q,testVendorModel:s,testAllVendorModels:b,fetchVendorModels:i,addVendorFromCatalog:g,addCustomVendor:Z,addVendorModel:R,removeVendorModel:w,removeVendor:v,toggleVendorKeyReveal:W,toggleVendorEdit:ee,autoEvaluateConfig:M,aiLoading:u,aiEvalStage:N,aiEvalElapsed:oe,aiEvalError:J,showBatchEvaluate:D,batchStocks:G,batchRunning:ie,batchTotal:ge,batchCompleted:qe,batchCurrent:$,batchStatuses:ue,batchResults:De,batchEvalErrors:ne,aiConfig:be,selectedPreset:Pe,providerInfo:me,aiPresets:we,applyPreset:xe,onProviderChange:ce,fetchPoolSignals:Ne,cancelPoolSignals:Be,loadLastEvaluation:Et}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:e,computed:f,watch:t}=Vue,{configChanged:c,aiConfig:d,aiLoading:x,feishuConfig:r,currentTheme:n,changeTheme:p,autoEvaluateConfig:o,currentUser:C,strategyFilter:y,applyTheme:k,dashboardData:_,lastRefreshTime:S,saveAiModels:A}=a,P=function(ce){const se=window.__quantModules&&window.__quantModules.themes;return se&&se.applyLegacyTheme?se.applyLegacyTheme(ce):k(ce)},m=e(!1),l=e(!1),h=e(null),L=e(null),K=e(null),E=e(null),I=e({token:"",endpoint:"http://api.tushare.pro",timeout:30}),F=e("disconnected"),X=e({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),H=e({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),W=e(!1),ee=e(null),ae=e(null),B=e("pending"),U=e("..."),q=e(!1),s=e({api_limit:600}),b=e(!1),i=e(!1);async function g(){try{const se=await(await fetch("/api/system/rate-limit")).json();se.success&&(s.value=se.data)}catch(ce){console.warn("loadRateLimit failed:",ce)}}async function Z(){i.value=!0;try{const se=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.value)})).json();se.success?(b.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(se.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{i.value=!1}}t(()=>[d.value.provider,d.value.apiKey,d.value.endpoint,d.value.model],()=>{c.value=!0},{deep:!0});async function R(){m.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(d.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d.value)})).json()).success?(c.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(ce){localStorage.setItem("quant_ai_config",JSON.stringify(d.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",ce)}finally{m.value=!1}}async function w(){x.value=!0;try{const se=await(await fetch("/api/ai/test")).json();se.success?ElementPlus.ElMessage.success(se.message||"API连接正常"):ElementPlus.ElMessage.error(se.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{x.value=!1}}function v(){const ce={ai:d.value,feishu:r.value,theme:n.value,export_time:new Date().toISOString()},se=new Blob([JSON.stringify(ce,null,2)],{type:"application/json"}),fe=URL.createObjectURL(se),Ne=document.createElement("a");Ne.href=fe,Ne.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Ne.click(),URL.revokeObjectURL(fe),ElementPlus.ElMessage.success("配置已导出")}function M(ce){const se=ce.target.files[0];if(!se)return;const fe=new FileReader;fe.onload=async Ne=>{try{const Be=JSON.parse(Ne.target.result);Be.ai&&(d.value={...d.value,...Be.ai},await R()),Be.feishu&&(Object.assign(r.value,Be.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Be.feishu)})),Be.theme&&(n.value=Be.theme,p(Be.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},fe.readAsText(se),ce.target.value=""}async function u(){m.value=!0;const ce=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:I.value,feishu:r.value,ai:d.value,rate_limit:s.value,auto_evaluate:o.value,theme:n.value}})}).then(Be=>["userConfig",Be.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(I.value)}).then(Be=>["tushare",Be.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:X.value})}).then(Be=>["datasource",Be.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r.value)}).then(Be=>["feishu",Be.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d.value)}).then(Be=>["ai",Be.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.value)}).then(Be=>["rateLimit",Be.ok]),A().then(()=>["aiModels",!0],()=>["aiModels",!1])],se=await Promise.allSettled(ce),fe=se.filter(Be=>Be.status==="fulfilled"&&Be.value[1]).length,Ne=se.filter(Be=>Be.status==="rejected"||Be.status==="fulfilled"&&!Be.value[1]).length;b.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(y.value.selected)),localStorage.setItem("quant_strategy_filter_mode",y.value.mode),C.value&&fetch(`/api/users/${C.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:n.value})}).catch(()=>{}),l.value=!1,h.value=new Date().toLocaleString("zh-CN"),m.value=!1,Ne>0&&console.error(`[saveAllConfig] ${fe}/${fe+Ne} 项保存成功，${Ne} 项失败`)}async function N(){try{const se=await(await fetch("/api/user_config/config")).json();if(se.success&&se.config){const fe=se.config;fe.tushare&&(I.value={...I.value,...fe.tushare}),fe.feishu&&(r.value={...r.value,...fe.feishu}),fe.ai&&(d.value={...d.value,...fe.ai}),fe.rate_limit&&(s.value={...s.value,...fe.rate_limit}),fe.auto_evaluate&&(o.value={...o.value,...fe.auto_evaluate}),fe.theme&&!localStorage.getItem("quant_theme")&&P(fe.theme)}l.value=!1,b.value=!1}catch(ce){console.error("[resetAllConfig] 重新加载配置失败:",ce),l.value=!1}}async function oe(){F.value="testing";try{const se=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(F.value=se.success?"connected":"disconnected",se.success){const fe=se.data_count?` (获取到 ${se.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+fe)}else ElementPlus.ElMessage.error(se.message||"连接失败")}catch{F.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function J(){try{const se=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();F.value=se.success?"connected":"disconnected"}catch{F.value="disconnected"}}async function D(){var ce;W.value=!0;try{const fe=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();fe.success?(ee.value=parseInt(((ce=fe.message.match(/\d+/))==null?void 0:ce[0])||"0"),ElementPlus.ElMessage.success(fe.message)):ElementPlus.ElMessage.error(fe.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{W.value=!1}}async function G(){try{const se=await(await fetch("/api/market/tushare/config")).json();se.success&&se.config&&(I.value={...I.value,...se.config})}catch(ce){console.warn("loadTushareConfig failed:",ce)}}function ie(ce){if(!ce)return"";const se=String(ce),fe=se.length;if(fe<=4)return se[0]+"*".repeat(fe-1);const Ne=fe<=8?2:4;return se.slice(0,Ne)+"*".repeat(fe-Ne-Ne)+se.slice(-Ne)}async function ge(ce){let se;try{se=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ne=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:se,target:ce})})).json();if(Ne.success)return Ne.secret;ElementPlus.ElMessage.error(Ne.message||"查看失败")}catch(fe){ElementPlus.ElMessage.error("查看失败: "+fe.message)}return null}async function qe(ce){const se=X.value[ce];if(!se)return;if(se._revealed){se._revealed=!1,se._masked=ie(se.token);return}const fe=await ge(ce);fe!==null&&(se.token=fe,se._revealed=!0)}async function $(ce){const se=X.value[ce];if(se){if(se._editing){se._editing=!1,se._revealed=!1,se.token&&(se._masked=ie(se.token));return}se._editing=!0;try{const fe=await ge(ce);if(fe===null){se._editing=!1;return}se.token=fe,se._revealed=!0}catch(fe){se._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+fe.message)}}}async function ue(){try{const se=await(await fetch("/api/market/datasource/config")).json();if(se.success&&se.config&&se.config.sources){const fe=se.config.sources,Ne=Be=>{const We={...X.value[Be],...fe[Be]||{}};return We._editing=!1,We._revealed=!1,We._masked=We.token||"",We.token="",We};X.value={sxsc_tushare:Ne("sxsc_tushare"),tushare:Ne("tushare"),akshare:{...X.value.akshare,...fe.akshare||{}}}}try{const Ne=await(await fetch("/api/market/datasource/status")).json();if(Ne.success&&Ne.status)for(const[Be,We]of Object.entries(Ne.status))H.value[Be]=We.connected?"connected":"disconnected"}catch{}}catch(ce){console.warn("loadDatasourceConfig failed:",ce)}}async function De(){try{const ce={};for(const[se,fe]of Object.entries(X.value)){const{_revealed:Ne,_masked:Be,_editing:We,...Et}=fe;!We&&se!=="akshare"&&(Et.token=""),ce[se]=Et}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:ce})}),l.value=!0}catch(ce){console.warn("saveDatasourceConfig failed:",ce)}}async function ne(ce){H.value[ce]="testing";try{const se=X.value[ce];se&&se._editing&&await De();const Ne=await(await fetch(`/api/market/datasource/test/${ce}`,{method:"POST"})).json();H.value[ce]=Ne.success?"connected":"disconnected",Ne.success?ElementPlus.ElMessage.success(`${ce} 连接成功`):ElementPlus.ElMessage.error(`${ce}: ${Ne.message}`)}catch{H.value[ce]="disconnected",ElementPlus.ElMessage.error(`${ce} 连接失败`)}}async function be(){try{const se=await(await fetch("/api/feishu/config")).json();se&&typeof se=="object"&&(r.value={...r.value,...se},L.value=JSON.parse(JSON.stringify(r.value)))}catch(ce){console.warn("loadFeishuConfig failed:",ce)}}async function Pe(){try{const se=await(await fetch("/api/ai/config")).json();if(se.success&&se.data)d.value={...d.value,...se.data};else{const fe=localStorage.getItem("quant_ai_config");fe&&(d.value=JSON.parse(fe))}}catch{const se=localStorage.getItem("quant_ai_config");se&&(d.value=JSON.parse(se))}}async function me(){try{const se=await(await fetch("/api/user_config/config")).json();if(se.success&&se.config){const fe=se.config;fe.tushare&&(I.value={...I.value,...fe.tushare}),fe.datasource&&fe.datasource.sources&&(X.value={sxsc_tushare:{...X.value.sxsc_tushare,...fe.datasource.sources.sxsc_tushare||{}},tushare:{...X.value.tushare,...fe.datasource.sources.tushare||{}},akshare:{...X.value.akshare,...fe.datasource.sources.akshare||{}}}),fe.feishu&&(r.value={...r.value,...fe.feishu},L.value=JSON.parse(JSON.stringify(r.value))),fe.ai&&(d.value={...d.value,...fe.ai}),fe.rate_limit&&(s.value={...s.value,...fe.rate_limit}),fe.theme&&!localStorage.getItem("quant_theme")&&P(fe.theme),fe.auto_evaluate&&(o.value={...o.value,...fe.auto_evaluate})}}catch(ce){console.warn("加载用户配置失败，使用本地缓存",ce)}}async function we(){var ce,se,fe,Ne;try{const We=await(await fetch("/api/dashboard")).json(),Et=We.success?We.data:We;ee.value=((ce=Et==null?void 0:Et.stats)==null?void 0:ce.total_stocks_covered)||null;const Pt=await(await fetch("/api/dates")).json();ae.value=((se=Pt==null?void 0:Pt.data)==null?void 0:se.total)||((Ne=(fe=Pt==null?void 0:Pt.data)==null?void 0:fe.dates)==null?void 0:Ne.length)||null;const Ee=await(await fetch("/api/ai/history")).json();B.value="ok"}catch{B.value="pending"}}async function xe(){try{const se=await(await fetch("/api/dashboard")).json();_.value=se.success?se.data:se,S.value=Date.now()}catch(ce){console.error("加载总览数据失败",ce)}}return{configSaving:m,configChanged:c,globalConfigDirty:l,lastSavedTime:h,feishuConfigOriginal:L,aiConfigOriginal:K,tushareConfigOriginal:E,tushareConfig:I,tushareStatus:F,datasourceConfig:X,datasourceStatus:H,syncingData:W,stockCount:ee,tradeDateCount:ae,aiStatus:B,appVersion:U,showImportDialog:q,rateLimitConfig:s,rateLimitDirty:b,rateLimitSaving:i,loadRateLimit:g,saveRateLimit:Z,saveAiConfig:R,testAiApi:w,exportConfig:v,importConfig:M,saveAllConfig:u,resetAllConfig:N,testTushareConnection:oe,checkTushareConnection:J,syncStockData:D,loadTushareConfig:G,loadDatasourceConfig:ue,saveDatasourceConfig:De,testDatasource:ne,toggleDatasourceKeyReveal:qe,toggleDatasourceEdit:$,loadFeishuConfig:be,loadAiConfig:Pe,loadUserConfig:me,loadSystemStatus:we,loadDashboardData:xe}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:e,computed:f}=Vue,{currentUser:t,applyTheme:c,allMenuDefs:d,loadGroupConfig:x}=a,r=function(me){const we=window.__quantModules&&window.__quantModules.themes;return we&&we.applyLegacyTheme?we.applyLegacyTheme(me):c(me)},n=e([]),p=e(""),o=e(""),C=e("users"),y=e({}),k=e({}),_=f(()=>{let me=n.value;if(o.value&&(me=me.filter(xe=>(xe.group||xe.role)===o.value)),!p.value)return me;const we=p.value.toLowerCase();return me.filter(xe=>xe.username.toLowerCase().includes(we))});function S(me){y.value={...y.value,[me]:!y.value[me]}}async function A(me,we){try{const ce=await(await fetch("/api/groups/"+we+"/members/"+me,{method:"DELETE"})).json();ce.success?(await $(),await ge()):ElementPlus.ElMessage.error(ce.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function P(me){const we=k.value[me];if(we)try{const ce=await(await fetch("/api/groups/"+me+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:we})})).json();ce.success?(await $(),await ge(),k.value={...k.value,[me]:""}):ElementPlus.ElMessage.error(ce.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function m(me,we){try{const ce=await(await fetch("/api/users/"+me.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:we})})).json();ce.success?await $():ElementPlus.ElMessage.error(ce.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const l=e(!1),h=e(null),L=e({username:"",password:"",role:"user",theme:"tech-blue"}),K=e(!1),E=e(null),I=e(!1),F=e(!1),X=e({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),H=e({}),W=e(!1),ee=e({group_id:"",name:"",description:""}),ae=e(!1),B=e([]),U=e(""),q=e(""),s=e({});function b(me){s.value={...s.value,[me]:!s.value[me]}}function i(me){return!n.value||!n.value.length?0:n.value.filter(we=>(we.group||we.role)===me).length}function g(me){const we=(me==null?void 0:me.visible_menus)||{};return Object.values(we).filter(Boolean).length}const Z=f(()=>Object.keys(ie.value).length);async function R(me){q.value=me,F.value=!0,await w(me)}async function w(me){try{const xe=await(await fetch("/api/groups/"+me+"/members")).json();xe.success&&(B.value=xe.members||[])}catch(we){B.value=[],console.error("[loadGroupMembers]",we)}}async function v(){if(!(!U.value||!q.value)){ae.value=!0;try{const we=await(await fetch("/api/groups/"+q.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:U.value})})).json();we.success?(await w(q.value),await $(),U.value=""):ElementPlus.ElMessage.error(we.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{ae.value=!1}}}async function M(me){try{const xe=await(await fetch("/api/groups/"+q.value+"/members/"+me,{method:"DELETE"})).json();xe.success?(await w(q.value),await $()):ElementPlus.ElMessage.error(xe.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const u=f(()=>{if(!n.value)return[];const me=new Set(B.value.map(we=>we.username));return n.value.filter(we=>we.username!=="admin"&&we.username!=="guest"&&!me.has(we.username))});function N(me){const we=X.value.visible_menus[me],xe=d.find(ce=>ce.key===me);if(xe)if(we){const ce=H.value[me]||{};xe.subPages.forEach(se=>{const fe=me+"."+se;X.value.visible_sub_pages[fe]=ce[se]!==void 0?ce[se]:!0})}else{const ce={};xe.subPages.forEach(se=>{const fe=me+"."+se;ce[se]=X.value.visible_sub_pages[fe],X.value.visible_sub_pages[fe]=!1}),H.value[me]=ce}}function oe(me){E.value=me;const we=ie.value[me]||{};X.value={name:we.name||me,description:we.description||"",visible_menus:{...we.visible_menus||{}},visible_sub_pages:{...we.visible_sub_pages||{}}},H.value={},d.forEach(xe=>{const ce={};xe.subPages.forEach(se=>{ce[se]=X.value.visible_sub_pages[xe.key+"."+se]}),H.value[xe.key]=ce}),I.value=!0}async function J(){ae.value=!0;try{const we=await(await fetch("/api/groups/"+E.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(X.value)})).json();we.success?(I.value=!1,E.value=null,await ge(),await x()):ElementPlus.ElMessage.error(we.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{ae.value=!1}}async function D(me){var we;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((we=ie.value[me])==null?void 0:we.name)||me)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const se=await(await fetch("/api/groups/"+me,{method:"DELETE"})).json();se.success?await ge():ElementPlus.ElMessage.error(se.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function G(){if(ee.value.group_id){ae.value=!0;try{const we=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ee.value)})).json();we.success?(W.value=!1,ee.value={group_id:"",name:"",description:""},await ge()):ElementPlus.ElMessage.error(we.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{ae.value=!1}}}const ie=e({});async function ge(){try{if(!localStorage.getItem("quant_token"))return;const we=await fetch("/api/groups");if(we.ok){const xe=await we.json();ie.value=xe.groups||{}}}catch(me){console.warn("loadAllGroups:",me)}}function qe(me){var we;return((we=ie.value[me])==null?void 0:we.name)||me||"--"}async function $(){try{if(!localStorage.getItem("quant_token")){n.value=[];return}const we=await fetch("/api/users");if(we.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),t.value=null;return}const xe=await we.json();n.value=xe.users||[]}catch(me){n.value=[],console.error("[loadUsers] error:",me)}}function ue(me){h.value=me,L.value={username:me.username,password:"",role:me.role,theme:me.theme||"tech-blue",group:me.group||me.role},l.value=!0}async function De(){if(L.value.username){K.value=!0;try{const me=h.value?"PUT":"POST",we=h.value?`/api/users/${L.value.username}`:"/api/users",ce=await(await fetch(we,{method:me,headers:{"Content-Type":"application/json"},body:JSON.stringify(L.value)})).json();if(ce.success){if(ElementPlus.ElMessage.success("保存成功"),t.value&&L.value.username===t.value.username){const se=L.value.theme;se&&se!==t.value.theme&&(t.value.theme=se,localStorage.setItem("quant_user",JSON.stringify(t.value)),r(se))}l.value=!1,h.value=null,await $()}else ElementPlus.ElMessage.error(ce.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{K.value=!1}}}async function ne(me){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${me}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await $())}catch(we){console.error("[deleteUser]",we)}}async function be(me){try{const xe=await(await fetch(`/api/users/${me.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:me.enabled})})).json();xe.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(xe.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function Pe(me){try{const{value:we}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${me.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(we){const ce=await(await fetch(`/api/users/${me.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:we})})).json();ce.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(ce.message||"重置失败")}}catch{}}return{userList:n,userSearch:p,groupFilter:o,userPageTab:C,expandedGroups:y,addMemberGroupMap:k,filteredUsers:_,toggleGroupExpand:S,removeMemberFromGroupInline:A,addMemberToGroupInline:P,changeUserGroup:m,showAddUser:l,editingUser:h,userForm:L,savingUser:K,editingGroup:E,menuConfigDialog:I,memberDialog:F,groupEditForm:X,subPageCache:H,showAddGroup:W,addGroupForm:ee,savingGroup:ae,groupMembers:B,addMemberUsername:U,selectedMemberGroup:q,subPageSectionExpanded:s,toggleSubPageSection:b,getGroupMemberCount:i,getMenuEnabledCount:g,groupCount:Z,openMemberManager:R,loadGroupMembers:w,addMemberToGroup:v,removeMemberFromGroup:M,availableUsersForGroup:u,onParentToggle:N,openMenuConfig:oe,saveMenuConfig:J,deleteGroupConfig:D,createGroup:G,allGroups:ie,getGroupName:qe,loadAllGroups:ge,loadUsers:$,editUser:ue,saveUser:De,deleteUser:ne,toggleUserEnabled:be,resetUserPassword:Pe}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:e,computed:f}=Vue,{stockKlineLoaded:t,stockDetailVisible:c,stockDetailTab:d,stockDetail:x,disposeStockKline:r}=a,n=e([]),p=e(!1),o=e(!1),C=e("date"),y=e([]),k=e([]),_=e([]),S=e([]),A=f(()=>{var v,M;const w=[];for(const u of n.value){if(!u||u.id==null)continue;const N=u.stock_name||u.stock_code||"",oe=Array.isArray(u.messages)?u.messages:[];w.push({id:u.id,stock_code:u.stock_code,stock_name:N,first_msg:u.first_msg||((M=(v=oe[0])==null?void 0:v.content)==null?void 0:M.substring(0,50))||"",msg_count:u.msg_count||oe.length||0,created_at:u.created_at,date:(u.created_at||"").substring(0,10),month:(u.created_at||"").substring(0,7),messages:oe})}return w}),P=f(()=>{const w={};for(const M of A.value){const u=M.date||"未知";w[u]||(w[u]=[]),w[u].push(M)}const v={};return Object.keys(w).sort((M,u)=>u.localeCompare(M)).forEach(M=>v[M]=w[M]),v}),m=f(()=>{const w={};for(const M of A.value){const u=M.month||"未知";w[u]||(w[u]=[]),w[u].push(M)}const v={};return Object.keys(w).sort((M,u)=>u.localeCompare(M)).forEach(M=>v[M]=w[M]),v}),l=f(()=>{const w={};for(const v of A.value){const M=`${v.stock_name}(${v.stock_code})`;w[M]||(w[M]=[]),w[M].push(v)}return w});function h(w){const v=y.value.indexOf(w);v>=0?y.value.splice(v,1):y.value.push(w)}function L(w){const v=P.value[w]||[];if(v.every(u=>y.value.includes(u.id)))y.value=y.value.filter(u=>!v.some(N=>N.id===u));else for(const u of v)y.value.includes(u.id)||y.value.push(u.id)}function K(w){const v=m.value[w]||[];if(v.every(u=>y.value.includes(u.id)))y.value=y.value.filter(u=>!v.some(N=>N.id===u));else for(const u of v)y.value.includes(u.id)||y.value.push(u.id)}function E(w){const v=l.value[w]||[];if(v.every(u=>y.value.includes(u.id)))y.value=y.value.filter(u=>!v.some(N=>N.id===u));else for(const u of v)y.value.includes(u.id)||y.value.push(u.id)}function I(w){const v=k.value.indexOf(w);v>=0?k.value.splice(v,1):k.value.push(w)}function F(w){const v=_.value.indexOf(w);v>=0?_.value.splice(v,1):_.value.push(w)}function X(w){const v=S.value.indexOf(w);v>=0?S.value.splice(v,1):S.value.push(w)}function H(){y.value.length===A.value.length?y.value=[]:y.value=A.value.map(w=>w.id)}async function W(){if(y.value.length){try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${y.value.length} 段对话吗？此操作不可恢复。`,"删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}for(const w of[...y.value])await Z(w);y.value=[]}}const ee={};async function ae(w){x.value={stock:w.stock_code,name:w.stock_name},c.value=!0,d.value="chat",t.value=!1,r(),q.value=!0,s.value="",U.value=[];try{let v=ee[w.id];if(!v){const M=await fetch("/api/ai/chat/history/"+w.id);if(!M.ok)throw new Error("load history failed");v=(await M.json()).messages||[],ee[w.id]=v}U.value=v.map(M=>({role:M.role,content:M.content}))}catch{s.value="历史消息加载失败，请重试"}finally{q.value=!1}}const B=e(""),U=e([]),q=e(!1),s=e("");async function b(){var M;const w=B.value.trim();if(!w||q.value)return;s.value="",U.value.push({role:"user",content:w}),B.value="",q.value=!0;const v=U.value.length;U.value.push({role:"assistant",content:""});try{const oe=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((M=x.value)==null?void 0:M.stock)||"",message:w})})).body.getReader(),J=new TextDecoder;let D="";for(;;){const{done:G,value:ie}=await oe.read();if(G)break;D+=J.decode(ie,{stream:!0});const ge=D.split(`
`);D=ge.pop()||"";for(const qe of ge)if(qe.startsWith("data: "))try{const $=JSON.parse(qe.slice(6));$.token?U.value[v].content+=$.token:$.done?console.log("Stream done:",$.session_id):$.error&&(s.value=$.error)}catch($){console.warn("SSE parse error:",$)}}}catch(u){U.value[v].content||(U.value[v].content="网络错误: "+u.message)}q.value=!1}async function i(w){var M;s.value="",q.value=!0;const v={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};U.value.push({role:"user",content:v[w]||v.comprehensive});try{const N=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((M=x.value)==null?void 0:M.stock)||"",mode:w})});if(N.ok){const oe=await N.json();U.value.push({role:"assistant",content:oe.reply||"无回复"})}}catch(u){s.value="网络错误: "+u.message}q.value=!1}async function g(){p.value=!0,o.value=!1;try{const w=await fetch("/api/ai/chat/history?view=date");if(w.ok){const v=await w.json(),M=[];for(const u of v)for(const N of u.items||[])M.push(N);n.value=M}else o.value=!0}catch(w){console.error(w),o.value=!0}finally{p.value=!1}}async function Z(w){try{await fetch("/api/ai/chat/history/"+w,{method:"DELETE"}),n.value=n.value.filter(v=>v.id!==w)}catch(v){console.error("deleteChatSession:",v)}}function R(w){if(!w)return"";const v=String(w).split(`
`),M=[],u=[];let N=0;for(;N<v.length;){if(/^\s*\|.*\|\s*$/.test(v[N])){let J=N;const D=[];for(;J<v.length&&/^\s*\|.*\|\s*$/.test(v[J]);)D.push(v[J]),J++;const G=qe=>qe.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map($=>$.trim()),ie=D.map(G);if(ie.length>1&&ie[1].every(qe=>/^:?-{3,}:?$/.test(qe))){const qe=Math.max(...ie.map(ne=>ne.length)),$=ie[0].slice(0,qe),ue=ie.slice(2);let De="<table>";ue.length?(De+="<thead><tr>"+$.map(ne=>"<th>"+ne+"</th>").join("")+"</tr></thead>",De+="<tbody>"+ue.map(ne=>"<tr>"+ne.slice(0,qe).map(be=>"<td>"+be+"</td>").join("")+"</tr>").join("")+"</tbody>"):De+="<tbody><tr>"+$.map(ne=>"<td>"+ne+"</td>").join("")+"</tr></tbody>",De+="</table>",M.push(De),u.push("\0T"+(M.length-1)+"\0"),N=J;continue}for(;N<J;)u.push(v[N]),N++;continue}u.push(v[N]),N++}let oe=u.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return M.forEach((J,D)=>{oe=oe.split("\0T"+D+"\0").join(J)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(oe=window.__quantModules.core.sanitizeHtml(oe)),oe}return{chatSessions:n,chatHistoryView:C,selectedChatIds:y,expandedChatDates:k,expandedChatMonths:_,expandedChatStocks:S,chatHistoryLoading:p,chatHistoryError:o,allChatSessionsFlat:A,chatGroupedByDate:P,chatGroupedByMonth:m,chatGroupedByStock:l,toggleSelectChat:h,toggleSelectChatDate:L,toggleSelectChatMonth:K,toggleSelectChatStock:E,toggleChatDateExpand:I,toggleChatMonthExpand:F,toggleChatStockExpand:X,selectAllChatSessions:H,deleteSelectedChatSessions:W,viewChatSession:ae,loadChatHistory:g,deleteChatSession:Z,renderMarkdown:R,stockChatInput:B,stockChatMessages:U,stockChatLoading:q,stockChatError:s,askStockSend:b,askStockQuick:i}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantUndoCore=e()})(typeof self<"u"?self:void 0,function(){function a(){var e={},f=0;function t(r,n,p){if(typeof r!="function")return"";var o="undo-"+ ++f,C={fn:r,label:n||"",timer:null,active:!0};return e[o]=C,p&&p>0&&(C.timer=setTimeout(function(){d(o)},p)),o}function c(r){var n=e[r];if(!n||!n.active)return!1;n.timer&&clearTimeout(n.timer),delete e[r],n.active=!1;try{n.fn()}catch{}return!0}function d(r){var n=e[r];n&&(n.timer&&clearTimeout(n.timer),delete e[r],n.active=!1)}function x(){var r=0;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r++;return r}return{register:t,undo:c,remove:d,activeCount:x}}return{createUndoStack:a}});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantFormMemory=e()})(typeof self<"u"?self:void 0,function(){function a(d,x,r){return"qc_fm_"+(d||"guest")+"_"+x+"_v"+(r||1)}function e(){return typeof localStorage<"u"&&localStorage?localStorage:null}function f(d,x,r,n){var p=e();if(!p||!d||x===void 0||x===null)return!1;try{return p.setItem(a(r,d,n),JSON.stringify(x)),!0}catch{return!1}}function t(d,x,r){var n=e();if(!n||!d)return null;try{var p=n.getItem(a(x,d,r));return p?JSON.parse(p):null}catch{return null}}function c(d,x,r){var n=e();if(!(!n||!d))try{n.removeItem(a(x,d,r))}catch{}}return{saveForm:f,loadForm:t,clearForm:c}});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantSessionRestore=e()})(typeof self<"u"?self:void 0,function(){var a="qc_session_restore";function e(){return typeof sessionStorage<"u"&&sessionStorage?sessionStorage:null}function f(d){var x=e();if(!x||!d)return!1;try{return x.setItem(a,JSON.stringify(d)),!0}catch{return!1}}function t(){var d=e();if(!d)return null;try{var x=d.getItem(a);return x?JSON.parse(x):null}catch{return null}}function c(){var d=e();if(d)try{d.removeItem(a)}catch{}}return{save:f,restore:t,clear:c,KEY:a}});(function(){if(typeof window>"u")return;let a=null;function e(){try{return!!localStorage.getItem("qc_install_dismissed")}catch{return!1}}function f(){try{localStorage.setItem("qc_install_dismissed","1")}catch{}}function t(){if(!document.getElementById("qc-install-bar")){var c=document.createElement("div");c.id="qc-install-bar",c.className="qc-install-bar",c.setAttribute("role","status");var d=document.createElement("span");d.textContent="安装「量化日历」到桌面，随时查看行情与评估";var x=document.createElement("span");x.className="qc-install-actions";var r=document.createElement("button");r.className="qc-install-btn",r.type="button",r.textContent="安装";var n=document.createElement("button");n.className="qc-install-close",n.type="button",n.setAttribute("aria-label","关闭"),n.textContent="×",x.appendChild(r),x.appendChild(n),c.appendChild(d),c.appendChild(x),document.body.appendChild(c),r.addEventListener("click",function(){a&&(a.prompt(),a=null),c.remove()}),n.addEventListener("click",function(){f(),c.remove()})}}window.addEventListener("beforeinstallprompt",function(c){c.preventDefault(),a=c,e()||t()}),window.addEventListener("appinstalled",function(){a=null;var c=document.getElementById("qc-install-bar");c&&c.remove()})})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantBatchAdd=e()})(typeof self<"u"?self:void 0,function(){function a(f){var t=[];return(f||[]).forEach(function(c){if(c){var d=typeof c=="string"?c:c.code||"",x=typeof c=="object"&&c.name?String(c.name):"";d&&t.push(x&&x!==d?d+" "+x:d)}}),t.join(`
`)}function e(f){if(!f||f.success===!1)return{added:0,existed:0,invalid:0,total:0,failed:0,message:"批量加入失败"};var t=f.added||0,c=f.existed||0,d=f.invalid||0,x=f.total||0;return{added:t,existed:c,invalid:d,total:x,failed:d,message:"已加入 "+t+" 只"+(c?"，"+c+" 只已存在":"")+(d?"，"+d+" 行无效":"")}}return{buildImportText:a,summarize:e}});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantContextMenu=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(d,x,r,n,p,o,C){var y=C??a,k=d,_=x;return k+r>p-y&&(k=Math.max(y,p-y-r)),_+n>o-y&&(_=Math.max(y,o-y-n)),{left:Math.round(k),top:Math.round(_)}}var f=[{key:"detail",label:"查看详情"},{key:"add-watch",label:"加入自选"},{key:"copy",label:"复制代码"},{key:"export",label:"导出"},{key:"delete",label:"删除"}];function t(){return f.map(function(d){return{key:d.key,label:d.label}})}function c(d,x,r){var n=r??500;return!d||!x?!1:x-d>=n}return{positionMenu:e,getActions:t,isLongPress:c}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,onMounted:e,onBeforeUnmount:f}=Vue,t=window.QuantContextMenu;window.__quantComponents=window.__quantComponents||{};function c(d){let x=d;for(;x&&x!==document.body;){if(x.hasAttribute&&x.hasAttribute("data-ctx-code"))return x;x=x.parentElement}return null}window.__quantComponents.ContextMenu={name:"qc-context-menu",template:`
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
    `,setup(){const d=a(!1),x=a({left:0,top:0}),r=a(t?t.getActions():[]),n=a({});function p(){d.value=!1}function o(l,h,L){if(n.value=L||{},t){const K=window.innerWidth||document.documentElement.clientWidth,E=window.innerHeight||document.documentElement.clientHeight,I=180,F=r.value.length*32+12;x.value=t.positionMenu(l,h,I,F,K,E)}else x.value={left:l,top:h};d.value=!0}function C(l){p(),window.dispatchEvent(new CustomEvent("qc:context-action",{detail:{action:l.key,payload:n.value}}))}function y(l){const h=c(l.target);h&&(l.preventDefault(),o(l.clientX,l.clientY,{code:h.getAttribute("data-ctx-code")||"",name:h.getAttribute("data-ctx-name")||"",context:h.getAttribute("data-ctx-context")||""}))}let k=null,_=0;function S(l){const h=c(l.target);h&&(_=Date.now(),k=setTimeout(function(){if(t&&t.isLongPress(_,Date.now(),500)){navigator.vibrate&&navigator.vibrate(10);const L=l.touches&&l.touches[0];o(L?L.clientX:0,L?L.clientY:0,{code:h.getAttribute("data-ctx-code")||"",name:h.getAttribute("data-ctx-name")||"",context:h.getAttribute("data-ctx-context")||""})}},520))}function A(){k&&(clearTimeout(k),k=null)}function P(l){if(l.key==="Escape"){p();return}if(l.shiftKey&&l.key==="F10"){const h=c(document.activeElement);if(h){l.preventDefault();const L=h.getBoundingClientRect();o(L.left+L.width/2,L.bottom,{code:h.getAttribute("data-ctx-code")||"",name:h.getAttribute("data-ctx-name")||"",context:h.getAttribute("data-ctx-context")||""})}}}function m(l){d.value&&!(l.target&&l.target.closest&&l.target.closest(".qc-ctx"))&&p()}return e(function(){document.addEventListener("contextmenu",y,!0),document.addEventListener("touchstart",S,{passive:!0}),document.addEventListener("touchend",A,!0),document.addEventListener("keydown",P,!0),document.addEventListener("mousedown",m,!0)}),f(function(){document.removeEventListener("contextmenu",y,!0),document.removeEventListener("touchstart",S,!0),document.removeEventListener("touchend",A,!0),document.removeEventListener("keydown",P,!0),document.removeEventListener("mousedown",m,!0)}),{visible:d,pos:x,actions:r,run:C}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantRequestCore=e()})(typeof self<"u"?self:void 0,function(){function a(){var e=0,f={};function t(n){var p=++e;if(n&&f[n])return{deduped:!0,id:f[n].seq,controller:f[n].controller};var o=typeof AbortController<"u"?new AbortController:null;return f[n]={seq:p,controller:o},{deduped:!1,id:p,controller:o}}function c(n,p){var o=f[n];return!o||o.seq!==p}function d(n){var p=f[n];if(p&&p.controller)try{p.controller.abort()}catch{}}function x(n,p){var o=f[n];o&&o.seq===p&&delete f[n]}function r(){var n=0;for(var p in f)Object.prototype.hasOwnProperty.call(f,p)&&n++;return n}return{begin:t,isStale:c,abort:d,finish:x,activeCount:r}}return{createRequestGuard:a}});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantStateRegistry=e()})(typeof self<"u"?self:void 0,function(){function a(){var e=Object.create(null),f=Object.create(null);function t(y,k){if(!y||typeof y!="string")throw new Error("domain name required");if(e[y])throw new Error("duplicate domain: "+y);for(var _=Array.isArray(k)?k:[],S=0;S<_.length;S++){var A=_[S];if(f[A]&&f[A]!==y)throw new Error("duplicate key across domains: "+A);f[A]=y}return e[y]={keys:_.slice(),refs:Object.create(null)},!0}function c(y,k,_){var S=e[y];if(!S)throw new Error("unknown domain: "+y);if(S.keys.indexOf(k)===-1)throw new Error("key not declared in domain: "+y+"."+k);return S.refs[k]=_,!0}function d(y,k){var _=e[y];return!!_&&k in _.refs}function x(y,k){var _=e[y];if(_){var S=_.refs[k];return S&&typeof S=="object"&&"value"in S?S.value:S}}function r(y){var k=e[y];if(!k)return null;for(var _={},S=0;S<k.keys.length;S++){var A=k.keys[S],P=k.refs[A];_[A]=P&&typeof P=="object"&&"value"in P?P.value:P}return _}function n(y,k){var _=e[y];if(!_||!k)return!1;for(var S=0;S<_.keys.length;S++){var A=_.keys[S];if(A in k){var P=_.refs[A];P&&typeof P=="object"&&"value"in P&&(P.value=k[A])}}return!0}function p(){return Object.keys(e)}function o(y){var k=e[y];return k?k.keys.slice():[]}function C(){for(var y=0,k=Object.keys(e),_=0;_<k.length;_++)y+=Object.keys(e[k[_]].refs).length;return y}return{defineDomain:t,attach:c,has:d,get:x,snapshot:r,restore:n,domains:p,keys:o,attachedCount:C}}return{createStateRegistry:a}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:e,computed:f,watch:t}=Vue,{consensus:c,currentPage:d,currentSubPage:x,dashboardData:r,searchKeyword:n,statusFilter:p,strategyFilter:o,strategyFilterCounts:C}=a;function y(F){const X=o.value.selected;if(!X||X.length===0)return F;const H=o.value.mode;return F.filter(W=>{const ee=W.strategy_names||W.strategies||[];return H==="union"?X.some(ae=>ee.includes(ae)):X.every(ae=>ee.includes(ae))})}const k=f(()=>{const F=y(c.value||[]);return{all:F.length,newCount:F.filter(X=>X.status==="new").length,current:F.filter(X=>X.status==="current").length,out:F.filter(X=>X.status==="out").length}}),_=f(()=>{let F=c.value||[];if(p.value!=="all"&&(F=F.filter(X=>X.status===p.value)),F=y(F),n.value){const X=n.value.toLowerCase();F=F.filter(H=>H.code.toLowerCase().includes(X)||H.name&&H.name.toLowerCase().includes(X))}return F}),S=f(()=>{const F=c.value||[],X={},H={};for(const W of F)W.code&&W.name&&(H[W.code]=W.name);for(const W of F){const ee=W.strategy_names||W.strategies||[];for(const ae of ee)X[ae]||(X[ae]={strategy:ae,count:0,codes:[],names:[]}),X[ae].count++,X[ae].codes.includes(W.code)||(X[ae].codes.push(W.code),X[ae].names.push({code:W.code,name:H[W.code]||W.code}))}return Object.values(X).sort((W,ee)=>ee.count-W.count)}),A=f(()=>{const F=o.value.selected,X=o.value.mode,H={};for(const[W,ee]of Object.entries(C.value)){const ae=ee||[];!F||F.length===0?H[W]=ae.length:X==="union"?H[W]=ae.filter(B=>B.strategies&&F.some(U=>B.strategies.includes(U))).length:H[W]=ae.filter(B=>B.strategies&&F.every(U=>B.strategies.includes(U))).length}return H});function P(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(o.value.selected)),localStorage.setItem("quant_strategy_filter_mode",o.value.mode)}const m=f(()=>{const F=(r.value||{}).consensus_rank||[];return y(F)}),l=f(()=>{const F=c.value||C.value.day||[];return y(F).length}),h=f(()=>{const F=(r.value||{}).strategy_counts||[],X=c.value||C.value.day||[];if(X.length===0)return F;const H=y(X),W={};H.forEach(ae=>{(ae.strategy_names||ae.strategies||[]).forEach(U=>{W[U]=(W[U]||0)+1})});const ee=H.length||1;return F.map(ae=>{const B=ae.strategy_name||ae.strategy_id,U=W[B]||0;return{...ae,count:U,percentage:Math.round(U/ee*1e3)/10}})}),L=f(()=>{const F=(r.value||{}).pool_changes||{},X=(F.new_count||0)-(F.out_count||0);return X>0?{dir:"up",text:"↑"+X}:X<0?{dir:"down",text:"↓"+Math.abs(X)}:{dir:"flat",text:"→0"}}),K=f(()=>{const F=(r.value||{}).time_coverage||{},X=new Date(F.start_date),H=new Date(F.end_date),W=new Date;if(!X.getTime()||!H.getTime()||W>=H)return 100;if(W<=X)return 0;const ee=H-X,ae=W-X;return Math.round(ae/ee*100)}),E=e(null);function I(F){o.value.selected=[F],o.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([F])),localStorage.setItem("quant_strategy_filter_mode","union"),d.value="calendar",x.value="calendar"}return{applyStrategyFilter:y,statusCounts:k,stockPool:_,strategyDistribution:S,strategyPreviewCount:A,saveStrategyFilter:P,filteredConsensusRank:m,currentPoolSize:l,filteredStrategyCounts:h,poolChangeBadge:L,timeBarPercent:K,lastRefreshTime:E,navigateToStrategyFilter:I}}}})();(function(){window.__quantModules||(window.__quantModules={});const a={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},e={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function f(r){return a[r]||"var(--text-tertiary)"}function t(r){return e[r]||"var(--bg-hover)"}const c=window.QuantUndoCore,d=c?c.createUndoStack():null;function x(r,n){if(!d||!window.Vue||!window.Vue.h)return;const p=window.Vue.h;ElementPlus.ElMessage.success({message:p("span",null,[r,p("a",{style:"margin-left:8px;color:var(--primary-text);cursor:pointer;text-decoration:underline",onClick:()=>{d.undo(n)&&ElementPlus.ElMessage.success("已撤销")}},"撤销")]),duration:5e3})}window.__quantModules.watchlist={create(r){const{ref:n,computed:p,watch:o}=Vue,{currentUser:C,selectedDate:y,stockDetail:k,stockDetailTab:_,stockDetailVisible:S,stockDetailLoading:A,stockKlineLoaded:P,viewCache:m,animateScoreEntrance:l,loadStockKline:h,refreshStockScore:L,disposeStockKline:K,aiHistory:E,aiLoading:I,aiEvalStage:F,aiEvalElapsed:X,aiEvalError:H,aiResult:W,loadLastEvaluation:ee,autoEvaluateConfig:ae,autoEvaluateScope:B,batchStocks:U,batchRunning:q,batchTotal:s,batchCompleted:b,batchCurrent:i,batchStatuses:g,batchResults:Z,batchEvalErrors:R,expandedDates:w,expandedStocks:v,savingConfig:M,selectedHistoryIds:u,selectedWatchlistCodes:N,showAutoEvaluateSettings:oe,showBatchEvaluate:J}=r,D=z=>(getComputedStyle(document.documentElement).getPropertyValue(z)||"").trim(),G=n(""),ie=n("default"),ge=n("default"),qe=n([]),$=p(()=>new Set(qe.value.map(z=>z.code))),ue=n(!1),De=n(!1),ne=p(()=>{const z=[...qe.value];return ge.value==="name"?z.sort((le,de)=>le.name.localeCompare(de.name,"zh")):ge.value==="added"?z.sort((le,de)=>(de.added_at||"").localeCompare(le.added_at||"")):ge.value==="score"&&z.sort((le,de)=>{const Te=Pe(le.code);return Pe(de.code)-Te}),z});function be(z){const le=E.value.filter(Te=>Te.stock_code===z);if(le.length===0)return null;const de=le.reduce((Te,Re)=>Te.evaluate_time>Re.evaluate_time?Te:Re);return{score:de.result.total_score,color:f(de.result.level),bg:t(de.result.level)}}function Pe(z){const le=be(z);return le?le.score:0}function me(z){ut(z.code,z.name),fe.value=fe.value.filter(le=>le.code!==z.code),se.value=""}const we=p(()=>new Set(E.value.map(z=>z.stock_code))),xe=n(new Set);function ce(z){xe.value.add(z)}const se=n(""),fe=n([]),Ne=n(!1),Be=n({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),We=n(!1),Et=n(!1),pt=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};pt.REALTIME_WS_PATH;const Pt=pt.REALTIME_DEGRADED_TEXT||"数据不可达",Se=pt.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";pt.WARN_RISE_SPEED_THRESHOLD!=null&&pt.WARN_RISE_SPEED_THRESHOLD,pt.WARN_VOLUME_RATIO_THRESHOLD!=null&&pt.WARN_VOLUME_RATIO_THRESHOLD;const Ee=pt.quoteFmt||{price:z=>z==null?"--":Number(z).toFixed(2),pct:z=>z==null?"--":Number(z).toFixed(2)+"%",num:z=>z==null?"--":Number(z).toFixed(2),color:z=>""},Ve=3,Oe=5e3,$e=n({}),Xe=n(!1),Ye=n("idle");let it=null,bt=null,Mt=0;function Ht(z){return pt.checkQuoteWarning?pt.checkQuoteWarning(z):null}function sa(z){return Ht($e.value[z])}function O(z){return Ee.color($e.value[z])}function te(z){return Ee.price($e.value[z]&&$e.value[z].price)}function Ce(z){return Ee.pct($e.value[z]&&$e.value[z].change_pct)}function Ie(z,le){return Ee.num($e.value[z]&&$e.value[z][le])}function Ue(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function wt(){if(!it||it.readyState!==1)return;const z=(qe.value||[]).map(le=>le.code);z.length!==0&&it.send(JSON.stringify({subscribe:z}))}function Qe(){if(bt&&(clearTimeout(bt),bt=null),it){try{it.onopen=null,it.onmessage=null,it.onerror=null,it.onclose=null,it.close()}catch{}it=null}$e.value={},Xe.value=!1,Ye.value="idle"}function Ge(){const z=Ue();if(!z||!pt.buildRealtimeWsUrl||Ye.value==="open"||Ye.value==="connecting")return;let le;try{le=pt.buildRealtimeWsUrl()+"?token="+encodeURIComponent(z)}catch{Ye.value="offline",Xe.value=!0;return}Ye.value="connecting";let de=null;try{de=new WebSocket(le)}catch{Ye.value="offline",Xe.value=!0;return}it=de,de.onopen=function(){Ye.value="open",Mt=0,wt()},de.onmessage=function(Te){let Re=null;try{Re=JSON.parse(Te.data||"{}")}catch{return}if(!Re||Re.type!=="quotes")return;if(Xe.value=!!Re.degraded,Re.degraded||!Array.isArray(Re.data)){$e.value={};return}const It={};Re.data.forEach(function(nt){nt&&nt.code&&(It[nt.code]=nt)}),$e.value=It},de.onerror=function(){Ye.value="offline",Xe.value=!0},de.onclose=function(){Ye.value="offline",Mt<Ve?(Mt++,bt=setTimeout(function(){Ye.value!=="open"&&Ge()},Oe*Mt)):Xe.value=!0}}o(qe,function(){Ye.value==="open"&&wt()}),Ue()&&setTimeout(Ge,500);async function _t(){if(!k.value)return;I.value=!0,W.value=null,H.value="",F.value="fetching",X.value=0;const z=Date.now(),le=setInterval(()=>{I.value&&(X.value=Math.round((Date.now()-z)/1e3))},500);try{const de=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:k.value.stock,stock_name:k.value.name||k.value.stock,strategy:ie.value})});F.value="calculating";const Te=await de.json();F.value="analyzing",Te.success?(await nextTick(),W.value=Te.data,_.value="ai",xt()):(H.value=Te.message||"评估失败",ElementPlus.ElMessage.error(H.value))}catch(de){H.value=de&&de.message&&!String(de.message).includes("Failed to fetch")?de.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(H.value)}finally{clearInterval(le),I.value=!1,X.value=0,H.value?F.value="":(F.value="done",setTimeout(()=>{F.value==="done"&&(F.value="")},800))}}const ot=50,gt=n(0),st=n(!1),Bt=p(()=>E.value.length<gt.value);async function xt(){ue.value=!0,De.value=!1;try{if(!localStorage.getItem("quant_token")){E.value=[];return}const le=await fetch(`/api/ai/history?limit=${ot}&offset=0`);if(le.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),C.value=null;return}const de=await le.json();de.success?(E.value=de.data||[],gt.value=de.total!=null?de.total:E.value.length):De.value=!0}catch(z){console.error("[loadAiHistory] error:",z),De.value=!0}finally{ue.value=!1}}async function Y(){if(!(st.value||!Bt.value)){st.value=!0;try{const le=await(await fetch(`/api/ai/history?limit=${ot}&offset=${E.value.length}`)).json();if(le.success&&Array.isArray(le.data)){const de=new Set(E.value.map(Re=>Re.id)),Te=le.data.filter(Re=>!de.has(Re.id));E.value=E.value.concat(Te),le.total!=null&&(gt.value=le.total)}}catch(z){console.warn("[loadMoreAiHistory] error:",z)}finally{st.value=!1}}}async function ke(z){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const de=await(await fetch(`/api/ai/history/${z}`,{method:"DELETE"})).json();if(de.success){ElementPlus.ElMessage.success("删除成功"),xt();const Te=u.value.indexOf(z);Te>=0&&u.value.splice(Te,1)}else ElementPlus.ElMessage.error(de.message||"删除失败")}catch{}}function je(z){const le=u.value.indexOf(z);le>=0?u.value.splice(le,1):u.value.push(z)}function dt(){u.value=[]}function At(){N.value=[]}async function Rt(){const z=u.value;if(z.length===0)return;const le=E.value.filter(de=>z.includes(de.id)).map(de=>de.stock_code);J.value=!0,U.value=[...new Set(le)].join(",")}async function mt(){const z=u.value;if(z.length===0)return;const le=E.value.filter(Re=>z.includes(Re.id)),de=[...new Map(le.map(Re=>[Re.stock_code,Re])).values()];let Te=0;for(const Re of de)$.value.has(Re.stock_code)||(await ut(Re.stock_code,Re.stock_name||Re.stock_code),Te++);Te>0?ElementPlus.ElMessage.success(`已加入 ${Te} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function Dt(){const z=u.value;if(z.length===0)return;const le=E.value.filter(Te=>z.includes(Te.id)),de=[...new Map(le.map(Te=>[Te.stock_code,Te])).values()];try{const Re=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:de.map(It=>({stock_code:It.stock_code,stock_name:It.stock_name||""}))})})).json();Re&&Re.success?ElementPlus.ElMessage.success(`已登记 ${Re.count||de.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(Re&&Re.detail||"批量加入组合失败")}catch(Te){console.warn("batchAddToPortfolio failed:",Te),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function Ut(){if(N.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${N.value.length} 只股票？`,"提示",{type:"warning"});for(const z of N.value)await Zt(z);N.value=[],ElementPlus.ElMessage.success("已移除")}catch(z){z&&z.message!=="cancel"&&console.warn("batchRemoveWatchlist:",z)}}function $t(z){const le=N.value.indexOf(z);le>=0?N.value.splice(le,1):N.value.push(z)}function St(){u.value.length===E.value.length?u.value=[]:u.value=E.value.map(z=>z.id)}function ht(){N.value.length===qe.value.length?N.value=[]:N.value=qe.value.map(z=>z.code)}async function ta(){if(u.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${u.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const le=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:u.value})})).json();le.success?(ElementPlus.ElMessage.success(le.message),u.value=[],xt()):ElementPlus.ElMessage.error(le.message||"删除失败")}catch{}}async function zt(){try{const le=await(await fetch("/api/ai/auto-config")).json();le.success&&(ae.value=le.data,le.data.evaluate_scope&&(B.value=le.data.evaluate_scope))}catch(z){console.warn("loadAutoEvaluateConfig failed:",z)}}async function da(){M.value=!0;try{ae.value.evaluate_scope=B.value;const le=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ae.value)})).json();le.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),oe.value=!1):ElementPlus.ElMessage.error(le.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{M.value=!1}}const Xt=n(!1);async function na(){Xt.value=!0;try{const le=await(await fetch("/api/watchlist")).json();le.success&&(qe.value=le.stocks||[])}catch(z){console.warn("loadWatchlist failed:",z)}finally{Xt.value=!1}}async function ut(z,le){try{const Te=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:z,name:le})})).json();if(Te.success)return Te.existed||qe.value.push({code:z,name:le,added_at:new Date().toISOString()}),!0}catch(de){console.warn("addToWatchlist failed:",de)}return!1}async function Zt(z){try{const le=qe.value.find(Te=>Te.code===z),de=le&&le.name||"";if(await fetch(`/api/watchlist/${encodeURIComponent(z)}`,{method:"DELETE"}),qe.value=qe.value.filter(Te=>Te.code!==z),$.value&&$.value.delete&&$.value.delete(z),d){const Te=d.register(()=>{ut(z,de)},"移除自选",5e3);x("已移除自选",Te)}else ElementPlus.ElMessage.info("已移除自选")}catch(le){console.warn("removeFromWatchlist failed:",le)}}async function ua(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"});const z=qe.value.slice();if(await fetch("/api/watchlist",{method:"DELETE"}),qe.value=[],$.value&&$.value.clear&&$.value.clear(),ElementPlus.ElMessage.success("自选已清空"),d&&z.length){const le=d.register(()=>{z.forEach(de=>ut(de.code,de.name||""))},"清空自选",5e3);x("自选已清空",le)}}catch(z){console.warn("clearWatchlist failed:",z)}}async function wa(z,le){$.value.has(z)?(await Zt(z),ElementPlus.ElMessage.info("已移除自选")):await ut(z,le)&&ElementPlus.ElMessage.success("已加入自选")}async function Sa(z,le){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(z,le||"");const de=new Date().toISOString().split("T")[0],Te=y.value||de;_.value="kline",W.value=null,H.value="",K("stockKlineChart"),k.value=null,A.value=!0,P.value=!1,S.value=!0,nextTick(()=>l());try{const Re=await fetch(`/api/calendar/stock/${encodeURIComponent(z)}?date=${Te}`);k.value=await Re.json()}catch{k.value={stock:z,name:le,total_days:0}}finally{A.value=!1}await nextTick(),await h("daily"),L(),ee(z)}const la=n(!1);async function V(){var z;if(qe.value.length!==0){la.value=!0;try{const de=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();de.success&&de.loaded>0?(((z=de.details)==null?void 0:z.loaded)||[]).forEach(Te=>xe.value.add(Te.code)):de.loaded===0&&de.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(le){console.error("预加载K线失败:",le)}finally{la.value=!1}}}async function _e(z,le){I.value=!0,W.value=null,H.value="",F.value="fetching",P.value=!1,K();const de=new Date().toISOString().split("T")[0],Te=y.value||de;try{const Re=await fetch(`/api/calendar/stock/${encodeURIComponent(z)}?date=${Te}`);k.value=await Re.json()}catch{k.value={stock:z,name:le,total_days:0}}_.value="ai",S.value=!0,await nextTick();try{const It=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:z,stock_name:le})})).json();It.success?(W.value=It.data,xt()):(H.value=It.message||"评估失败",ElementPlus.ElMessage.error(H.value))}catch{H.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(H.value)}finally{I.value=!1,F.value=""}}async function He(){qe.value.length!==0&&(J.value=!0,U.value=qe.value.map(z=>z.code).join(","))}async function ze(){N.value.length!==0&&(J.value=!0,U.value=N.value.join(","))}async function vt(){if(!se.value.trim()){fe.value=[];return}Ne.value=!0;try{const le=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(se.value)}`)).json();fe.value=(le.results||[]).filter(de=>!$.value.has(de.code))}catch(z){console.warn("searchStockForWatchlist failed:",z)}finally{Ne.value=!1}}async function Ze(){try{const le=await(await fetch("/api/data-refresh/config")).json();Be.value=le}catch(z){console.error("加载数据刷新配置失败:",z)}}async function Lt(){Et.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Be.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{Et.value=!1}}async function Kt(){var z;We.value=!0;try{const de=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();de.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((z=de.parser_stats)==null?void 0:z.dates_count)||0}交易日`),m.clear(),await Ze()):ElementPlus.ElMessage.error(de.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{We.value=!1}}const Gt=n(!1);async function Ca(){Gt.value=!0;try{const le=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(le.success){const de=le.result||{},Te=le.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${de.pulled||0}/${de.total||0}, 财务 ${Te.pulled||0}/${Te.total||0}`),m.clear(),await Ze()}else ElementPlus.ElMessage.error(le.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{Gt.value=!1}}const va=p(()=>{const z={};for(const le of E.value){const de=(le.evaluate_time||"").split("T")[0];z[de]||(z[de]=[]),z[de].push(le)}for(const le in z)z[le].sort((de,Te)=>Te.evaluate_time.localeCompare(de.evaluate_time));return z}),ma=p(()=>{const z={};for(const le of E.value){const de=le.stock_code;z[de]||(z[de]=[]),z[de].push(le)}for(const le in z)z[le].sort((de,Te)=>Te.evaluate_time.localeCompare(de.evaluate_time));return z}),ia=p(()=>{const z={};for(const le of E.value){const de=(le.evaluate_time||"").split("T")[0].slice(0,7);z[de]||(z[de]=[]),z[de].push(le)}for(const le in z)z[le].sort((de,Te)=>Te.evaluate_time.localeCompare(de.evaluate_time));return z}),La=p(()=>Object.keys(ma.value).length),fa=p(()=>{const z=E.value.length;return z===0?[]:[{label:"90+",min:90,max:100,color:"var(--success-text)"},{label:"80-89",min:80,max:89,color:"var(--success-text)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--success-text) 55%, var(--bg-card))"},{label:"60-69",min:60,max:69,color:"var(--warning-text)"},{label:"<60",min:0,max:59,color:"var(--danger-text)"}].map(de=>{const Te=E.value.filter(Re=>Re.result.total_score>=de.min&&Re.result.total_score<=de.max).length;return{...de,count:Te,pct:Math.round(Te/z*100)}})});async function Ia(){if(!G.value)return;const z=qe.value.find(le=>le.code===G.value);if(z){I.value=!0,W.value=null,H.value="",F.value="fetching";try{k.value={stock:z.code,name:z.name,total_days:0},S.value=!0,_.value="ai",await nextTick();const de=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:z.code,stock_name:z.name,strategy:ie.value})})).json();de.success?(W.value=de.data,xt(),G.value=""):(H.value=de.message||"评估失败",ElementPlus.ElMessage.error(H.value))}catch{H.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(H.value)}finally{I.value=!1,F.value=""}}}function pa(z){const le=w.value.indexOf(z);le>=0?w.value.splice(le,1):w.value.push(z)}function Pa(z){const de=(va.value[z]||[]).map(Re=>Re.id);de.every(Re=>u.value.includes(Re))?u.value=u.value.filter(Re=>!de.includes(Re)):de.forEach(Re=>{u.value.includes(Re)||u.value.push(Re)})}function ka(z){const de=(ia.value[z]||[]).map(Re=>Re.id);de.every(Re=>u.value.includes(Re))?u.value=u.value.filter(Re=>!de.includes(Re)):de.forEach(Re=>{u.value.includes(Re)||u.value.push(Re)})}function Na(z){const le=v.value.indexOf(z);le>=0?v.value.splice(le,1):v.value.push(z)}function Oa(z){const de=(ma.value[z]||[]).map(Re=>Re.id);de.every(Re=>u.value.includes(Re))?u.value=u.value.filter(Re=>!de.includes(Re)):de.forEach(Re=>{u.value.includes(Re)||u.value.push(Re)})}const Yt={},oa={};function T(z,le,de){if(!z||(de&&(oa[le]={el:z,records:de}),Yt[le]===z))return;const Te=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Re=()=>{Object.keys(Yt).forEach(et=>{if(Yt[et]&&Yt[et]!==z){try{Yt[et].dispose()}catch{}delete Yt[et]}});const It=[...de].sort((et,Ot)=>et.evaluate_time.localeCompare(Ot.evaluate_time)),nt=It.map(et=>(et.evaluate_time||"").split("T")[0]),yt=It.map(et=>{var Ot;return((Ot=et.result)==null?void 0:Ot.total_score)??null}),ea=It.map(et=>{var Ot;return((Ot=et.result)==null?void 0:Ot.level)??""}),Nt={primary:D("--qc-primary-600")||"#b8922a",textPrimary:D("--text-primary")||"#1f2937",textSecondary:D("--text-secondary")||"#6b7280",border:D("--chart-axis")||"#b9b2a6",axis:D("--chart-axis")||"#b9b2a6",split:D("--chart-split")||"#e7e1d6",up:D("--qc-market-up")||"#e63946",down:D("--qc-market-down")||"#2e7d32"},ga=[];for(let et=1;et<yt.length;et++)yt[et]!=null&&yt[et-1]!=null&&Math.abs(yt[et]-yt[et-1])>=15&&ga.push({name:"大幅变化",coord:[nt[et],yt[et]],value:(yt[et]-yt[et-1]>0?"↑":"↓")+Math.abs(yt[et]-yt[et-1]),symbol:"pin",symbolSize:32,itemStyle:{color:yt[et]-yt[et-1]>0?Nt.up:Nt.down}});const ra=echarts.init(z),Ct=window.__quantModules&&window.__quantModules.echartsTheme;Ct&&typeof Ct.getEChartsTheme=="function"&&ra.setOption(Ct.getEChartsTheme()),ra.setOption({tooltip:{trigger:"axis",backgroundColor:D("--bg-card")||"#ffffff",borderColor:Nt.border,textStyle:{color:Nt.textPrimary},formatter:function(et){var Tt;const Ot=(Tt=et[0])==null?void 0:Tt.dataIndex,qa=Ot!=null?ea[Ot]:"";return nt[Ot]+"<br/>得分: "+yt[Ot]+(qa?" ("+qa+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:nt,axisLabel:{fontSize:10,rotate:30,color:Nt.textSecondary},axisLine:{lineStyle:{color:Nt.axis}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:Nt.textSecondary},splitLine:{lineStyle:{color:Nt.split}}},series:[{data:yt,type:"line",smooth:!0,lineStyle:{color:Nt.primary,width:2},itemStyle:{color:Nt.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:D("--primary-rgb")?"rgba("+D("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:D("--primary-rgb")?"rgba("+D("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:ga.length>0?{data:ga}:void 0}]}),Yt[le]=ra};Te?Te().then(Re).catch(()=>{}):Re()}function Q(){Object.keys(oa).forEach(z=>{const le=oa[z];if(!(!le||!le.el)){if(Yt[z]){try{Yt[z].dispose()}catch{}delete Yt[z]}T(le.el,z,le.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(Q));async function Ae(z){W.value=z,P.value=!1,K();try{const le=await fetch(`/api/calendar/stock/${z.stock_code}?date=${y.value}`);k.value=await le.json()}catch{k.value={stock:z.stock_code,name:z.stock_name||z.stock_code,total_days:0,history:[]}}S.value=!0,_.value="ai"}async function ft(){if(!U.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const z=U.value.split(/[,，\s]+/).filter(nt=>nt.trim());if(z.length===0)return;q.value=!0,s.value=z.length,b.value=0,i.value="",g.value={},Z.value={},R.value={},z.forEach(nt=>{g.value[nt]="pending",Z.value[nt]=null});const le={"Content-Type":"application/json"};let de=0,Te=0,Re=!1;try{const nt=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:le,body:JSON.stringify({stock_codes:z})});if(nt.ok&&nt.body){Re=!0;const yt=nt.body.getReader(),ea=new TextDecoder("utf-8");let Nt="",ga=!1;for(;!ga;){const{value:ra,done:Ct}=await yt.read();ga=Ct,Nt+=ea.decode(ra||new Uint8Array,{stream:!ga});let et;for(;(et=Nt.indexOf(`

`))>=0;){const Ot=Nt.slice(0,et);Nt=Nt.slice(et+2);const qa=Ot.split(`
`).find(Qa=>Qa.startsWith("data: "));if(!qa)continue;let Tt;try{Tt=JSON.parse(qa.slice(6))}catch{continue}Tt.type==="start"?Tt.total&&(s.value=Tt.total):Tt.type==="item"?(b.value++,i.value=Tt.stock_code,Tt.success?(g.value[Tt.stock_code]="success",Z.value[Tt.stock_code]=Tt,de++):(g.value[Tt.stock_code]="error",R.value[Tt.stock_code]=Tt.error||"评估失败",Te++)):Tt.type==="done"&&(typeof Tt.success=="number"&&(de=Tt.success),typeof Tt.fail=="number"&&(Te=Tt.fail))}}if(Nt.trim()){const ra=Nt.split(`
`).find(Ct=>Ct.startsWith("data: "));if(ra)try{const Ct=JSON.parse(ra.slice(6));Ct.type==="item"?(b.value++,i.value=Ct.stock_code,Ct.success?(g.value[Ct.stock_code]="success",Z.value[Ct.stock_code]=Ct,de++):(g.value[Ct.stock_code]="error",R.value[Ct.stock_code]=Ct.error||"评估失败",Te++)):Ct.type==="done"&&(typeof Ct.success=="number"&&(de=Ct.success),typeof Ct.fail=="number"&&(Te=Ct.fail))}catch{}}}}catch{Re=!1}if(!Re){de=0,Te=0,b.value=0;for(const nt of z){i.value=nt,g.value[nt]="running";try{const ea=await(await fetch("/api/ai/evaluate",{method:"POST",headers:le,body:JSON.stringify({stock_code:nt.trim(),stock_name:nt.trim()})})).json();ea.success?(g.value[nt]="success",Z.value[nt]=ea.data,de++):(g.value[nt]="error",R.value[nt]=ea.message&&ea.message!=="success"?ea.message:"评估失败",Te++)}catch(yt){g.value[nt]="error",R.value[nt]="网络错误: "+(yt&&yt.message?yt.message:yt),Te++}b.value++}}i.value="",await xt();const It=z.length;setTimeout(()=>{Te===0?ElementPlus.ElMessage.success(`评估完成 成功 ${de}/${It}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${de}/${It} · 失败 ${Te}`),q.value=!1},500)}return{quickEvalStock:G,evalStrategy:ie,watchlistSort:ge,watchlist:qe,watchlistCodes:$,sortedWatchlist:ne,getWatchlistScore:be,getLatestScore:Pe,addSearchResult:me,evaluatedCodes:we,klineLoadedCodes:xe,markKlineLoaded:ce,watchlistSearch:se,watchlistResults:fe,watchlistSearching:Ne,dataRefreshConfig:Be,dataRefreshReloading:We,dataRefreshSaving:Et,aiHistoryLoading:ue,aiHistoryError:De,aiHistoryTotal:gt,aiHistoryLoadingMore:st,hasMoreAiHistory:Bt,loadMoreAiHistory:Y,watchlistLoading:Xt,doAiEvaluate:_t,loadAiHistory:xt,deleteSingleHistory:ke,toggleSelectHistory:je,clearSelection:dt,clearWatchlistSelection:At,batchReevaluateHistory:Rt,batchAddToWatchlist:mt,batchAddToPortfolio:Dt,batchRemoveWatchlist:Ut,toggleSelectWatchlist:$t,selectAllHistory:St,selectAllWatchlist:ht,deleteSelectedHistory:ta,loadAutoEvaluateConfig:zt,saveAutoEvaluateConfig:da,loadWatchlist:na,addToWatchlist:ut,removeFromWatchlist:Zt,clearWatchlist:ua,toggleWatchlist:wa,showStockKline:Sa,preloadingKline:la,preloadWatchlistKline:V,watchlistEvaluate:_e,batchEvaluateWatchlist:He,batchEvaluateSelected:ze,searchStockForWatchlist:vt,loadDataRefreshConfig:Ze,saveDataRefreshConfig:Lt,triggerDataReload:Kt,triggerDataPull:Ca,dataPullRunning:Gt,groupedByDate:va,aiHistoryByStock:ma,groupedByMonth:ia,aiHistoryStockCount:La,scoreDistribution:fa,quickEvaluate:Ia,toggleDateExpand:pa,toggleSelectDate:Pa,toggleSelectMonth:ka,toggleStockExpand:Na,toggleSelectStock:Oa,registerTrendChart:T,viewAiResult:Ae,doBatchEvaluate:ft,realtimeQuotes:$e,realtimeDegraded:Xe,realtimeWsState:Ye,connectRealtimeQuotes:Ge,disconnectRealtimeQuotes:Qe,quoteWarningFor:sa,realtimeQuoteColor:O,realtimePriceText:te,realtimePctText:Ce,realtimeRatioText:Ie,REALTIME_DEGRADED_TEXT:Pt,REALTIME_FALLBACK_TEXT:Se}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:e,computed:f}=Vue,t=e([]),c=e(null),d=e([]),x=e(!1),r=e(!1),n=e(!1),p=e({stock_code:"",stock_name:"",cost_price:null,quantity:null}),o=e(!1),C=e(!1),y=e({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),k=e(!1),_=e("positions"),S=e(30),A=e(!1),P=e(""),m=e(!1),l=e({dates:[],equity:[],values:[]}),h=f(()=>t.value.length),L=e("metrics"),K=e(!1),E=e(""),I=e(!1),F=e({metrics:null,rules:[],rebalance:null}),X=f(function(){const u=F.value.metrics;if(!u)return[];const N=function(J){return J==null?"--":Number(J).toFixed(2)+"%"},oe=function(J){return J==null?"--":Number(J).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:N(u.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:N(u.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:N(u.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:N(u.cvar)},{key:"max_drawdown",label:"最大回撤",value:N(u.max_drawdown)},{key:"annual_return",label:"年化收益",value:N(u.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:oe(u.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:oe(u.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:oe(u.calmar_ratio)},{key:"beta",label:"Beta",value:oe(u.beta)}]});async function H(){K.value=!0;try{const u=await(await fetch("/api/portfolio/risk?days=60")).json(),N=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),oe=u&&u.success?u.risk:null,J=N&&N.success?N.rules||[]:[],D=N&&N.success?N.rebalance:null;F.value={metrics:oe,rules:J,rebalance:D},I.value=!!(oe&&Object.keys(oe).length>0),E.value=u&&u.note||N&&N.note||""}catch(u){console.warn("[portfolio] 加载风险数据失败:",u),I.value=!1,E.value="风险数据加载失败"}finally{K.value=!1}}async function W(){x.value=!0,r.value=!1;try{const N=await(await fetch("/api/portfolio")).json();N.success?(t.value=N.positions||[],c.value=N.summary||null):r.value=!0}catch(u){console.warn("[portfolio] 加载持仓失败:",u),r.value=!0}finally{x.value=!1}}async function ee(){const u=p.value,N=(u.stock_code||"").trim();if(!N){ElementPlus.ElMessage.warning("请输入股票代码");return}const oe=Number(u.cost_price),J=Number(u.quantity);if(!(oe>0)||!(J>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}o.value=!0;try{const G=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:N,stock_name:(u.stock_name||"").trim(),cost_price:oe,quantity:J})})).json();G.success?(ElementPlus.ElMessage.success(G.message||"持仓已更新"),n.value=!1,p.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await W(),R(S.value)):ElementPlus.ElMessage.error(G.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{o.value=!1}}async function ae(u){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+u+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const oe=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(u),{method:"DELETE"})).json();oe.success?(ElementPlus.ElMessage.success("已删除持仓"),await W(),q(),R(S.value)):ElementPlus.ElMessage.error(oe.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function B(u,N){y.value={stock_code:u,stock_name:N||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},C.value=!0}async function U(){const u=y.value;if(!u.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const N=Number(u.price),oe=Number(u.quantity);if(!(N>0)||!(oe>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}k.value=!0;try{const D=await(await fetch("/api/portfolio/trades",{method:"POST",headers:_authHeaders(),body:JSON.stringify({stock_code:u.stock_code,stock_name:u.stock_name||"",action:u.action,price:N,quantity:oe,trade_date:u.trade_date||"",note:(u.note||"").trim()})})).json();D.success?(ElementPlus.ElMessage.success(D.message||"调仓已记录"),C.value=!1,await W(),await q(),R(S.value)):ElementPlus.ElMessage.error(D.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{k.value=!1}}async function q(){try{const N=await(await fetch("/api/portfolio/trades")).json();N.success&&(d.value=N.trades||[])}catch(u){console.warn("[portfolio] 加载调仓记录失败:",u)}}const s=u=>(getComputedStyle(document.documentElement).getPropertyValue(u)||"").trim();function b(u){if(!u||!u.length)return[];let N=u[0]||0;const oe=[];for(let J=0;J<u.length;J++){const D=u[J]||0;D>N&&(N=D),oe.push(N>0?Math.round((D-N)/N*1e3)/10:0)}return oe}function i(){const u={primary:s("--qc-primary-600")||"#b8922a",textPrimary:s("--text-primary")||"#1f2937",textSecondary:s("--text-secondary")||"#6b7280",border:s("--border-light")||"#e5e7eb",up:s("--color-rise")||"#E63946",down:s("--color-fall")||"#2E7D32"},N=l.value;return{tooltip:{trigger:"axis",backgroundColor:s("--bg-card")||"#ffffff",borderColor:u.border,textStyle:{color:u.textPrimary},formatter:function(oe){const J=oe[0]?oe[0].dataIndex:-1,D=N.dates[J]||"",G=N.equity[J],ie=N.values[J];let ge=D||"";return G!=null&&(ge+="<br/>组合净值: "+G),ie!=null&&(ge+="<br/>组合市值: "+ie),ge}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:N.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:u.textSecondary},axisLine:{lineStyle:{color:u.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:u.textSecondary},splitLine:{lineStyle:{color:u.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:u.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:N.equity,smooth:!0,showSymbol:!1,lineStyle:{color:u.primary,width:2},itemStyle:{color:u.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:s("--primary-rgb")?"rgba("+s("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:s("--primary-rgb")?"rgba("+s("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:b(N.equity),smooth:!0,showSymbol:!1,lineStyle:{color:u.down,width:1.5},itemStyle:{color:u.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function g(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function Z(u,N,oe){l.value={dates:u||[],equity:N||[],values:oe||[]},m.value=!!u&&u.length>0,m.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",i,{key:"portfolio-equity"}):g()}async function R(u){A.value=!0,P.value="";const N=Number(u)||S.value||30;S.value=N;try{const J=await(await fetch("/api/portfolio/equity_curve?days="+N)).json();J.success?(P.value=J.note||"",Z(J.dates||[],J.equity||[],J.values||[])):(P.value="数据暂不可用",g())}catch(oe){console.warn("[portfolio] 加载收益曲线失败:",oe),P.value="数据暂不可用",g()}finally{A.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function w(u,N){if(u==null||u===""||isNaN(Number(u)))return"--";const oe=Number(u),J=N??2;return(oe>=0?"+":"")+oe.toFixed(J)}function v(u,N){if(u==null||u===""||isNaN(Number(u)))return"--";const oe=Number(u),J=N??2;return(oe>=0?"+":"")+oe.toFixed(J)+"%"}function M(u){if(u==null||u===""||isNaN(Number(u)))return"";const N=Number(u);return N>0?"portfolio-up":N<0?"portfolio-down":""}return{positions:t,summary:c,trades:d,loading:x,loadError:r,showAddForm:n,addForm:p,addSaving:o,tradeFormVisible:C,tradeForm:y,tradeSaving:k,portfolioTab:_,equityDays:S,equityLoading:A,equityNote:P,equityHasData:m,portfolioCount:h,loadPortfolio:W,addPosition:ee,removePosition:ae,openTradeForm:B,submitTrade:U,loadTrades:q,loadEquity:R,fmtSigned:w,fmtSignedPct:v,signClass:M,riskTab:L,riskLoading:K,riskNote:E,riskHasData:I,riskData:F,riskMetricList:X,loadRisk:H}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantBacktest=e()})(typeof self<"u"?self:void 0,function(){function a(n,p){var o=Number(n);return isFinite(o)?o:typeof p=="number"?p:0}function e(n){var p=Array.isArray(n)?n:[];if(p.length<2)return null;for(var o=-1/0,C=0,y=0,k=0,_=0,S=0;S<p.length;S++){var A=a(p[S].equity!=null?p[S].equity:p[S].value);A>o&&(o=A,C=S);var P=o>0?(o-A)/o*100:0;P>y&&(y=P,k=C,_=S)}function m(l){return p[l]&&p[l].date?p[l].date:""}return{maxDrawdown:Math.round(y*100)/100,peakIndex:k,troughIndex:_,peakDate:m(k),troughDate:m(_)}}function f(n){for(var p=n||{},o={},C=Object.keys(p).sort(),y=0;y<C.length;y++){var k=C[y],_=String(k).slice(0,4);/^\d{4}$/.test(_)&&(o[_]=(o[_]||0)+a(p[k]))}var S=Object.keys(o).sort();return S.map(function(A){return{year:A,return:Math.round(o[A]*100)/100}})}function t(n){var p=Array.isArray(n)?n:[],o={};p.forEach(function(k){(k.points||[]).forEach(function(_){_&&_.date&&(o[_.date]=1)})});var C=Object.keys(o).sort(),y=p.map(function(k){var _={};return(k.points||[]).forEach(function(S){S&&S.date&&(_[S.date]=a(S.value!=null?S.value:S.equity))}),{name:k.name||"",data:C.map(function(S){return S in _?_[S]:null})}});return{dates:C,series:y}}function c(n){var p=n||{},o=function(y){return a(y)},C=function(y,k){var _=o(y);return isFinite(_)?_.toFixed(k):"--"};return[{key:"total_return",label:"总收益",value:C(p.total_return,2),suffix:"%",dir:o(p.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:C(p.annual_return,2),suffix:"%",dir:o(p.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:C(p.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:C(p.sharpe_ratio,2),suffix:"",dir:o(p.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:C(p.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:C(p.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(o(p.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:C(p.volatility,2),suffix:"%",dir:""}]}function d(n){var p=n==null?"":String(n);return/[",\n]/.test(p)?'"'+p.replace(/"/g,'""')+'"':p}function x(n){var p=n||{},o=[];o.push("回测指标"),o.push("指标,数值"),(p.metrics||[]).forEach(function(m){o.push(d(m.label)+","+d((m.value||"")+(m.suffix||"")))}),o.push(""),o.push("净值曲线");var C=["日期"].concat((p.series||[]).map(function(m){return m.name}));o.push(C.map(d).join(","));for(var y=p.dates||[],k=p.series||[],_=0;_<y.length;_++){for(var S=[y[_]],A=0;A<k.length;A++){var P=k[A].data&&k[A].data[_];S.push(P??"")}o.push(S.map(d).join(","))}return o.push(""),o.push("交易明细"),o.push("日期,股票代码,方向,原因"),(p.trades||[]).forEach(function(m){o.push(d(m.date)+","+d(m.stock)+","+d(m.action)+","+d(m.reason))}),o.join(`
`)}function r(n){return n==="buy"?"买入":n==="sell"?"卖出":n||""}return{toNum:a,computeMaxDrawdownRegion:e,buildAnnualReturns:f,buildNavSeries:t,buildMetrics:c,buildBacktestCsv:x,tradeActionText:r}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:e,computed:f}=Vue,t=window.QuantBacktest||{},c=a||{},d=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],r=(Array.isArray(c.backtestStrategies)&&c.backtestStrategies.length?c.backtestStrategies:d).map(s=>({id:s.id,name:s.name})),n=e(r.length?[r[0].id]:[]),p=e(A()),o=e(1e5),C=e(3e-4),y=e(!1),k=e(!1),_=e(null),S=e("");function A(){const s=new Date,b=new Date;b.setFullYear(b.getFullYear()-1);const i=g=>g.getFullYear()+"-"+String(g.getMonth()+1).padStart(2,"0")+"-"+String(g.getDate()).padStart(2,"0");return[i(b),i(s)]}function P(s){const b=n.value.indexOf(s);b>=0?n.value.length>1&&n.value.splice(b,1):n.value.push(s)}function m(s){const b=r.find(i=>i.id===s);return b?b.name:s}function l(s){const b=s.summary||s;return{strategy_id:b.strategy_id,start_date:b.start_date,end_date:b.end_date,total_days:b.total_days,total_return:b.total_return,annual_return:b.annual_return,max_drawdown:b.max_drawdown,volatility:b.volatility,sharpe_ratio:b.sharpe_ratio,sortino_ratio:b.sortino_ratio,win_rate:b.win_rate,profit_loss_ratio:b.profit_loss_ratio,avg_positions:b.avg_positions!=null?b.avg_positions:b.avg_positions_per_day,total_trades:b.total_trades,turnover_rate:b.turnover_rate,success:b.success!==!1,message:b.message||"",insample_total_return:b.insample_total_return!=null?b.insample_total_return:null,outsample_total_return:b.outsample_total_return!=null?b.outsample_total_return:null,out_sample_ratio:b.out_sample_ratio!=null?b.out_sample_ratio:.2,overfit_warning:!!b.overfit_warning,overfit_reason:b.overfit_reason||""}}function h(s){return(Array.isArray(s)?s:[]).map(b=>({date:b.date,value:b.equity!=null?b.equity:b.value}))}function L(s,b){const i=l(b),g=h(b.equity_curve),Z=b.monthly_returns||{},R=Array.isArray(b.trade_history)?b.trade_history:[],w={id:s,name:m(s),summary:i,equityCurve:g,monthlyReturns:Z,trades:R};let v=null;if(y.value){const M=Number(o.value)||1e5;v={name:"现金基准",points:g.map(u=>({date:u.date,value:M}))}}return{success:!0,mode:"single",strategies:[w],primary:w,benchmark:v,period:(i.start_date||"")+" ~ "+(i.end_date||"")}}function K(s,b){const i=b.strategy_results||{},g=s.map(w=>{const v=i[w];if(!v)return null;const M=l(v);return{id:w,name:m(w),summary:M,equityCurve:h(v.equity_curve),monthlyReturns:v.monthly_returns||{},trades:Array.isArray(v.trade_history)?v.trade_history:[]}}).filter(w=>w&&w.summary.success!==!1),Z=g.length?g[0]:null;let R=null;return y.value&&(R={name:"等权组合基准",points:h(b.portfolio_equity)}),{success:g.length>0,mode:"multi",strategies:g,primary:Z,benchmark:R,period:Z?Z.summary.start_date+" ~ "+Z.summary.end_date:""}}const E=f(()=>{const s=_.value;return!s||!s.primary?[]:t.buildMetrics?t.buildMetrics(s.primary.summary):[]}),I=f(()=>{const s=_.value;return!s||!s.primary||!s.primary.monthlyReturns?[]:t.buildAnnualReturns?t.buildAnnualReturns(s.primary.monthlyReturns):[]}),F=f(()=>{const s=_.value;return!s||!s.primary?[]:(s.primary.trades||[]).slice().sort((b,i)=>String(i.date||"").localeCompare(String(b.date||"")))}),X=f(()=>{const s=_.value;return!s||!s.strategies||s.strategies.length<2?[]:s.strategies.map(b=>({name:b.name,metrics:t.buildMetrics?t.buildMetrics(b.summary):[]}))}),H=f(()=>{const s=_.value;return!s||!s.primary?null:t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(s.primary.equityCurve):null});async function W(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const b=n.value;if(!b.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const i=p.value,g={start_date:i&&i[0]||void 0,end_date:i&&i[1]||void 0},Z={"Content-Type":"application/json"};k.value=!0,_.value=null,S.value="";try{if(b.length===1){const R=Object.assign({},g,{initial_capital:Number(o.value)||1e5,commission_rate:Number(C.value)||3e-4}),w=await fetch("/api/backtest/"+encodeURIComponent(b[0]),{method:"POST",headers:Z,body:JSON.stringify(R)});if(!w.ok){const M=await w.json().catch(()=>({}));throw new Error(M.detail||"回测失败")}const v=await w.json();if(!v.success)throw new Error(v.message||"回测失败");_.value=L(b[0],v)}else{const R=await fetch("/api/backtest/multi",{method:"POST",headers:Z,body:JSON.stringify(Object.assign({},g,{strategy_ids:b}))});if(!R.ok){const v=await R.json().catch(()=>({}));throw new Error(v.detail||"回测失败")}const w=await R.json();if(!w.success)throw new Error(w.message||"多策略回测失败");if(_.value=K(b,w.data||{}),!_.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(R){S.value=R&&R.message?R.message:"回测失败",ElementPlus.ElMessage.error(S.value)}finally{k.value=!1}}function ee(){const s=_.value,b={dates:[],series:[]};if(!s)return b;const i=s.strategies.map(Z=>({name:Z.name,points:Z.equityCurve}));s.benchmark&&s.benchmark.points&&s.benchmark.points.length&&i.push({name:s.benchmark.name,points:s.benchmark.points});const g=t.buildNavSeries?t.buildNavSeries(i):b;return ae(g,s)}function ae(s,b){const i=N=>(getComputedStyle(document.documentElement).getPropertyValue(N)||"").trim(),g={primary:i("--qc-primary-600")||"#b8922a",success:i("--color-success")||"#4CAF50",accent:i("--color-accent")||"#F59E0B",info:i("--color-info")||"#1976d2",ai:i("--color-ai")||"#6366f1",textPrimary:i("--text-primary")||"#1f2937",textSecondary:i("--text-secondary")||"#6b7280",border:i("--border-light")||"#e5e7eb",up:i("--color-rise")||"#E63946",down:i("--color-fall")||"#2E7D32",bg:i("--bg-card")||"#ffffff"},Z=[g.primary,g.success,g.accent,g.info,g.ai],w=g.bg.length===7&&parseInt(g.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",v=t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(b.primary?b.primary.equityCurve:[]):null,M=v&&v.peakDate&&v.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:g.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+v.maxDrawdown+"%",xAxis:v.peakDate,itemStyle:{color:g.down}},{xAxis:v.troughDate}]]}:void 0,u=s.series.map((N,oe)=>{const J=b.benchmark&&N.name===b.benchmark.name,D=Z[oe%Z.length];return{name:N.name,type:"line",data:N.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:J?2:2.4,type:J?"dashed":"solid",color:D},itemStyle:{color:D},emphasis:{focus:"series"},...oe===0&&M?{markArea:M}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:w,borderColor:g.border,textStyle:{color:g.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:g.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:s.dates,boundaryGap:!1,axisLine:{lineStyle:{color:g.border}},axisLabel:{color:g.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:g.textSecondary,fontSize:11},splitLine:{lineStyle:{color:g.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:g.border,textStyle:{color:g.textSecondary,fontSize:10}}],series:u}}function B(s){if(!s){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",ee,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function U(){const s=_.value;if(!s||!s.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const b=s.strategies.map(u=>({name:u.name,points:u.equityCurve}));s.benchmark&&b.push({name:s.benchmark.name,points:s.benchmark.points});const i=t.buildNavSeries?t.buildNavSeries(b):{dates:[],series:[]},g=t.tradeActionText||(u=>u),Z=F.value.map(u=>({date:u.date,stock:u.stock,action:g(u.action),reason:u.reason})),R=t.buildBacktestCsv?t.buildBacktestCsv({metrics:E.value,dates:i.dates,series:i.series,trades:Z}):"",w=new Blob(["\uFEFF"+R],{type:"text/csv;charset=utf-8"}),v=URL.createObjectURL(w),M=document.createElement("a");M.href=v,M.download="backtest-"+s.strategies.map(u=>u.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",M.click(),URL.revokeObjectURL(v),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function q(s,b){return s==null||s===""||isNaN(Number(s))?"--":Number(s).toFixed(b??2)}return{btStrategyOptions:r,btSelectedStrategies:n,toggleBtStrategy:P,btDateRange:p,btCapital:o,btCommissionRate:C,btIncludeBenchmark:y,btRunning:k,btResult:_,btError:S,btMetrics:E,btAnnualReturns:I,btTrades:F,btStrategyMetricsRows:X,btDrawdownRegion:H,runBacktestWorkbench:W,exportBacktestCSV:U,registerBacktestNavChart:B,btFmtNum:q}}}})();(function(){const{ref:a,computed:e,watch:f,onUnmounted:t}=Vue,c=o=>(getComputedStyle(document.documentElement).getPropertyValue(o)||"").trim(),d=72,x={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},r={stock:"股票",bond:"债券",commodity:"大宗商品",cash:"现金"},n={"🌱":"sprout","🔥":"flame","🌾":"wheat","❄️":"snowflake","📈":"trending-up","📉":"trending-down","📊":"bar-chart-3","💹":"line-chart","🏭":"factory","💰":"banknote","🛢":"fuel"},p={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const o=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"sprout",color:"var(--state-success-solid)",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),C=a({}),y=a(!1),k=a({}),_=a({cycles:[]}),S=a([]),A=a(0),P=a(!1),m=a({autoRefresh:!0,refreshInterval:300}),l=a(""),h=a(""),L=a(!1),K=a("");let E=null;const I={x:0,y:0},F=e(()=>{const $=C.value;return["recession","recovery","overheat","stagflation"].map(De=>{const ne=$[De]||{};return{key:De,name:ne.name||De,icon:n[ne.icon]||"bar-chart-3",color:ne.color||c("--text-tertiary")||"#888",bg:"color-mix(in srgb, "+(ne.color||"var(--text-tertiary)")+" 14%, var(--bg-card))",textColor:"color-mix(in srgb, "+(ne.color||"var(--text-tertiary)")+" 48%, var(--qc-foreground))",tagline:ne.allocation&&p[De]||""}})}),X=e(()=>{var ue,De,ne,be;const $=o.value.indicators||{};return[{key:"pmi",label:"PMI",value:(ue=$.pmi)==null?void 0:ue.toFixed(2),color:$.pmi>=50?c("--color-success")||"#43a047":c("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((De=$.gdp_growth)==null?void 0:De.toFixed(2))+"%",color:c("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((ne=$.cpi)==null?void 0:ne.toFixed(2))+"%",color:$.cpi>1.2?c("--color-danger")||"#E53935":c("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((be=$.m2_growth)==null?void 0:be.toFixed(2))+"%",color:c("--color-success")||"#43a047"}]}),H=$=>{$=$||{};const ue=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],De=()=>c("--color-success")||"#43a047",ne=()=>c("--color-danger")||"#E53935",be=()=>c("--color-warning")||"#FF9800",Pe={宽松:De(),中位:be(),偏低:ne(),高增长:De(),承压:ne(),不利:ne()};return ue.map(me=>{const we=$[me.key]||{},xe=we.score||0,ce=Math.min(100,Math.max(5,(xe+2)*25)),se=xe>=.3?"var(--state-success-solid)":xe>=-.3?"var(--state-warning-solid)":"var(--state-danger-solid)",fe=xe>=0?"var(--state-success-text)":"var(--state-danger-text)";return{key:me.key,label:me.label,scoreStr:xe.toFixed(2),level:we.level||"—",barWidth:ce,barColor:se,scoreColor:fe,color:Pe[we.level]||"var(--text-tertiary)"}})},W=e(()=>H(o.value.dimension_scores)),ee=e(()=>H(k.value._dimensions)),ae=e(()=>{var ue;const $=((ue=o.value.confidence)==null?void 0:ue.level)||"";return $==="高"?"var(--state-success-text)":$==="中"?"var(--state-warning-text)":$==="低"?"var(--state-danger-text)":"var(--text-secondary)"}),B=e(()=>{var ne,be,Pe,me;const $=C.value,ue={recovery:0,overheat:1,stagflation:2,recession:3},De={};for(const[we,xe]of Object.entries($))De[we]={name:xe.name,icon:xe.icon,color:xe.color,lightColor:xe.bg_color,duration:"~"+(((ne=xe.historical_stats)==null?void 0:ne.avg_duration_months)||18)+"个月",order:ue[we]||0,period:((Pe=(be=xe.case_studies)==null?void 0:be[0])==null?void 0:Pe.split("：")[0])||"",avgMonths:((me=xe.historical_stats)==null?void 0:me.avg_duration_months)||18};return De}),U=e(()=>{var xe,ce;const $=o.value.stage,De={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[$]||{x:150,y:150},ne=o.value.dimension_scores||{},be=((xe=ne.growth)==null?void 0:xe.score)||0,Pe=((ce=ne.inflation)==null?void 0:ce.score)||0,me=Math.max(-30,Math.min(30,be*15)),we=Math.max(-30,Math.min(30,-Pe*15));return{x:De.x+me,y:De.y+we,prevX:I.x,prevY:I.y}}),q=e(()=>{var ne;const $=Math.min(100,((ne=o.value.timing)==null?void 0:ne.progress_percent)||0),ue=o.value.color||"var(--state-success-solid)",De=$>100?"linear-gradient(90deg, "+ue+", var(--state-warning-solid))":ue;return{width:$+"%",background:De}});function s(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[o.value.stage]||0}function b(){var $,ue;return((ue=($=o.value)==null?void 0:$.timing)==null?void 0:ue.progress_percent)||0}function i(){var $,ue;return((ue=($=o.value)==null?void 0:$.timing)==null?void 0:ue.duration_months)||0}function g(){var $,ue;return((ue=($=o.value)==null?void 0:$.timing)==null?void 0:ue.avg_duration_months)||18}function Z($){var be,Pe;const ue=B.value,De=((be=ue[o.value.stage])==null?void 0:be.order)||0;return(((Pe=ue[$])==null?void 0:Pe.order)||0)<De}function R($){return x[$]||$}function w($){return r[$]||$}function v($){const ue=["var(--state-success-solid)","var(--state-warning-solid)","var(--state-info-solid)","var(--text-tertiary)"];return ue[$-1]||ue[3]}async function M(){try{const ue=await(await fetch("/api/market/merrill-clock/stages")).json();ue.success&&ue.data&&(C.value=ue.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function u(){P.value=!0;try{oe();const ue=await(await fetch("/api/market/merrill-clock/timeline")).json();if(ue.success&&ue.data){const De=Array.isArray(ue.data.cycles)?ue.data.cycles.slice().reverse():[];_.value={cycles:De}}}catch{console.warn("获取美林时钟时间轴失败")}finally{P.value=!1}}async function N($){await D($)}async function oe(){try{const ue=await(await fetch("/api/market/merrill-clock/snapshots?limit=30")).json();ue&&ue.success&&ue.data&&(S.value=ue.data.items||[],A.value=ue.data.total||0)}catch{console.warn("获取美林时钟评估轨迹失败")}}async function J(){var $,ue;try{const ne=await(await fetch("/api/market/merrill-clock")).json(),be=ne.stage||"recovery",Pe=C.value[be]||{};if(o.value={...Pe,...ne,stage_cn:ne.stage_cn||Pe.stage_cn||"",stage_name:ne.stage_name||Pe.name||"",name:ne.name||Pe.name||"复苏期"},l.value=new Date().toLocaleTimeString("zh-CN"),K.value&&K.value!==be){const me=C.value,we=(($=me[K.value])==null?void 0:$.name)||K.value,xe=((ue=me[be])==null?void 0:ue.name)||be;ElementPlus.ElMessage({message:"美林时钟阶段切换："+we+" → "+xe,type:"warning",duration:6e3,showClose:!0})}K.value=be}catch(De){console.error("获取美林时钟失败:",De);const ne=C.value.recovery||{};o.value={...ne,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function D($){var De;y.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",k.value=C.value[$]||C.value.recovery||{};const ue=((De=o.value)==null?void 0:De.stage)===$;k.value._isCurrent=ue,ue&&o.value&&(k.value._nextPrediction=o.value.next_stage_prediction,k.value._confidence=o.value.confidence,k.value._stage=o.value.stage,k.value._dimensions=o.value.dimension_scores);try{const be=await(await fetch("/api/market/merrill-clock/stage/"+$)).json();if(be.success&&be.data){const Pe={...C.value[$],...be.data};Pe._is_current!==void 0&&(Pe._isCurrent=Pe._is_current),Pe._current_timing&&(Pe._currentTiming=Pe._current_timing),Pe._last_period&&(Pe._lastPeriod=Pe._last_period),k.value._nextPrediction&&(Pe._nextPrediction=k.value._nextPrediction),k.value._confidence&&(Pe._confidence=k.value._confidence),k.value._stage&&(Pe._stage=k.value._stage),k.value._dimensions&&(Pe._dimensions=k.value._dimensions),Object.assign(k.value,Pe)}}catch(ne){console.warn("获取阶段详情失败:",ne)}}function G(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:m.value.autoRefresh,refreshInterval:m.value.refreshInterval})),m.value.autoRefresh?(clearInterval(E),E=setInterval(J,m.value.refreshInterval*1e3)):clearInterval(E),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function ie(){L.value=!0,h.value="";try{const ue=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();ue.success?(h.value="重评估完成："+(ue.stage_name||ue.stage),await J(),ElementPlus.ElMessage.success("重评估完成")):(h.value=ue.message||"重评估失败",ElementPlus.ElMessage.error(ue.message||"重评估失败"))}catch{h.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{L.value=!1}}function ge(){const $=localStorage.getItem("merrill_clock_config");if($)try{const ue=JSON.parse($);m.value={...m.value,...ue}}catch{}m.value.autoRefresh&&(E=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),J()},m.value.refreshInterval*1e3))}function qe(){E&&clearInterval(E)}return t(()=>{qe()}),{merrillData:o,merrillStagesConfig:C,showMerrillDetail:y,merrillDetailData:k,merrillTimeline:_,merrillSnapshots:S,merrillSnapshotsTotal:A,fetchMerrillSnapshots:oe,timelineLoading:P,merrillClockConfig:m,merrillClockLastUpdated:l,merrillReevalResult:h,merrillReevalLoading:L,stages:F,indicatorList:X,dimensionScoreList:W,detailDimensionScoreList:ee,confidenceColor:ae,timelineStages:B,clockPosition:U,merrillProgressStyle:q,FULL_CYCLE_MONTHS:d,getStageAngle:s,getCycleProgress:b,getCurrentStageMonths:i,getStageTotalMonths:g,isStageCompleted:Z,getCharLabel:R,getAssetName:w,getRankColor:v,fetchMerrillStages:M,fetchMerrillClock:J,loadMerrillTimeline:u,showTimelineStage:N,showStageDetail:D,saveMerrillClockConfig:G,doMerrillReevaluate:ie,startAutoRefresh:ge,stopAutoRefresh:qe}}})();(function(){function a(r){return getComputedStyle(document.documentElement).getPropertyValue(r).trim()}var e=[210,28,165,290,348,190,52,250];function f(){var r=!1;try{r=document.documentElement.getAttribute("data-theme-mode")==="dark"}catch{}var n=r?62:58,p=r?62:40;return e.map(function(o){return"hsl("+o+", "+n+"%, "+p+"%)"})}function t(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:a("--chart-bg")||"transparent",color:f(),legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const c=[];function d(r){typeof r=="function"&&c.push(r)}function x(){c.slice().forEach(function(r){try{r()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:t,categoricalPalette:f,registerChart:d,refreshAllCharts:x,init(){return{getEChartsTheme:t,registerChart:d,refreshAllCharts:x}}}})();(function(){const{ref:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const f=e("qcState");try{const d=localStorage.getItem("quant_sidebar_collapsed");d!==null&&f.sidebarCollapsed&&(f.sidebarCollapsed.value=d==="1")}catch{}if(!f)return{};const t=async d=>{if(window.__quantGoPage){await window.__quantGoPage(d.key,d.subPages[0]||"");return}f.currentPage.value=d.key,f.currentSubPage.value=d.subPages[0]||""},c=()=>{f.sidebarCollapsed.value=!f.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",f.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:f.menus,currentPage:f.currentPage,sidebarCollapsed:f.sidebarCollapsed,navigate:t,toggle:c,sanitizeHtml:f.sanitizeHtml,keyClick:f.keyClick,t:f.t}}}})();const Ma={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(a){const e=a,f={"layout-dashboard":$v,calendar:Jv,bot:Qv,"flask-conical":Yv,zap:Gv,settings:Uv,"chevron-down":Wv,"chevron-right":Kv,"chevron-left":Bv,menu:Hv,search:Fv,bell:Vv,sun:jv,moon:Ov,user:Nv,"user-round":Iv,home:Lv,x:Av,database:zv,activity:Rv,clock:Dv,"bar-chart-3":Pv,shield:Tv,"hard-drive":Mv,"file-text":Ev,users:qv,cpu:Cv,"pie-chart":Sv,info:xv,"log-out":_v,palette:kv,languages:wv,refresh:bv,download:yv,"external-link":hv,command:gv,sparkles:pv,"trending-up":fv,"trending-down":mv,"circle-dot":vv,check:uv,"alert-triangle":dv,loader:cv,"arrow-left":rv,"arrow-right":ov,eye:iv,"eye-off":lv,lock:nv,"sliders-horizontal":sv,play:av,history:tv,layers:ev,"line-chart":Zu,target:Xu,"search-check":$u,star:Ju,"message-circle":Qu,"calendar-days":Yu,"calendar-range":Gu,"calendar-check":Uu,brain:Wu,lightbulb:Ku,"octagon-x":Bu,flag:Hu,package:Fu,"clipboard-list":Vu,pin:ju,"radio-tower":Ou,gauge:Nu,landmark:Iu,"candlestick-chart":Lu,wallet:Au,"badge-check":zu,key:Ru,factory:Du,trophy:Pu,rocket:Tu,flame:Mu,"map-pin":Eu,"scroll-text":qu,"book-open":Cu,dna:Su,"bar-chart":xu,plus:_u,"star-off":ku,upload:wu,gem:bu,"folder-open":yu,link:hu,save:gu,"trash-2":pu,pause:fu,"help-circle":mu,"play-circle":vu,pencil:uu,folder:du,code:cu,sprout:ru,wheat:ou,snowflake:iu,fuel:lu,banknote:nu,send:su,inbox:au,"wifi-off":tu,"check-circle-2":eu,"x-circle":Zd},t=()=>f[e.name]||f["circle-dot"];return(c,d)=>(ve(),ya(Vd(t()),{size:a.size,"stroke-width":a.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},Ta=(a,e)=>{const f=a.__vccOpts||a;for(const[t,c]of e)f[t]=c;return f},Xv={name:"qc-sidebar",components:{AppIcon:Ma},setup(){const a=za("qcState");if(!a)return{};const e=at(()=>a.menus&&a.menus.value||[]),f=at(()=>a.currentPage&&a.currentPage.value||""),t=at(()=>a.navMode&&a.navMode.value||"subnav"),c=at({get:()=>a.sidebarCollapsed&&a.sidebarCollapsed.value||!1,set:P=>{a.sidebarCollapsed&&(a.sidebarCollapsed.value=P)}}),d=kt({}),x={research:"量化投研",platform:"平台管理"},r=["research","platform"],n=P=>f.value===P.key,p=(P,m)=>f.value===P.key&&a.currentSubPage&&a.currentSubPage.value===m,o=P=>Array.isArray(P.subPages)&&P.subPages.length>1,C=(P,m)=>a.subPageNames&&a.subPageNames[m]||m;function y(P){!o(P)||c.value||(d.value[P.key]=!d.value[P.key])}function k(){e.value.forEach(P=>{d.value[P.key]===void 0&&(d.value[P.key]=n(P))})}async function _(P,m){const l=m||P.subPages&&P.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(P.key,l):(a.currentPage.value=P.key,a.currentSubPage&&(a.currentSubPage.value=l)),a.navigateTo&&a.navigateTo(P.key,l)}function S(){c.value=!c.value;try{localStorage.setItem("sidebar_collapsed",c.value?"1":"0")}catch{}}function A(P){if(P.ctrlKey&&P.key.toLowerCase()==="b"&&(P.preventDefault(),S()),!P.ctrlKey&&!P.metaKey&&!P.altKey&&(P.key==="ArrowDown"||P.key==="ArrowUp")){const m=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),l=m.indexOf(document.activeElement);if(l>=0){P.preventDefault();const h=m[(l+(P.key==="ArrowDown"?1:m.length-1))%m.length];h&&h.focus()}}}return Aa(()=>{k(),document.addEventListener("keydown",A)}),ms(()=>document.removeEventListener("keydown",A)),{state:a,menus:e,currentPage:f,navMode:t,sidebarCollapsed:c,expandedMenus:d,GROUP_LABELS:x,GROUPS:r,isActive:n,isChildActive:p,hasChildren:o,subLabel:C,toggleSubmenu:y,navigate:_,toggleCollapse:S}}},Zv={class:"qc-sidebar-logo"},em={key:0,class:"qc-logo-text"},tm={class:"qc-sidebar-nav"},am={key:0,class:"qc-nav-group"},sm={key:0,class:"qc-nav-group-label"},nm=["href","aria-current","onClick"],lm={key:0,class:"qc-sidebar-label"},im={key:1,class:"qc-nav-badge"},om=["aria-expanded","aria-controls","onClick"],rm=["id"],cm=["href","aria-current","onClick"],dm={class:"qc-sidebar-child-label"},um={class:"qc-sidebar-footer"},vm=["aria-expanded","aria-label","title"];function mm(a,e,f,t,c,d){const x=Ft("AppIcon"),r=Ft("el-tooltip");return ve(),pe("nav",{class:ct(["qc-sidebar",{"is-collapsed":t.sidebarCollapsed}]),"aria-label":"主导航"},[he("div",Zv,[e[1]||(e[1]=Fd('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),t.sidebarCollapsed?Ke("",!0):(ve(),pe("span",em,Le(t.state.t("login.title")),1))]),he("div",tm,[(ve(!0),pe(rt,null,qt(t.GROUPS,n=>(ve(),pe(rt,{key:n},[t.menus.some(p=>p.group===n)?(ve(),pe("div",am,[t.sidebarCollapsed?Ke("",!0):(ve(),pe("span",sm,Le(t.GROUP_LABELS[n]),1)),(ve(!0),pe(rt,null,qt(t.menus.filter(p=>p.group===n),p=>(ve(),pe(rt,{key:p.key},[he("div",{class:ct(["qc-sidebar-item",{"has-children":t.navMode==="tree"&&t.hasChildren(p),"is-child-open":t.navMode==="tree"&&t.expandedMenus[p.key]}])},[lt(r,{content:p.name,placement:"right","show-after":300,disabled:!t.sidebarCollapsed},{default:aa(()=>[he("a",{class:ct(["qc-sidebar-link",{"is-active":t.isActive(p)}]),href:"#"+p.key,"aria-current":t.isActive(p)?"page":null,onClick:Vt(o=>t.navigate(p),["prevent"])},[lt(x,{name:p.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),t.sidebarCollapsed?Ke("",!0):(ve(),pe("span",lm,Le(p.name),1)),!t.sidebarCollapsed&&p.badge?(ve(),pe("span",im,Le(p.badge),1)):Ke("",!0)],10,nm)]),_:2},1032,["content","disabled"]),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(p)?(ve(),pe("button",{key:0,class:ct(["qc-sidebar-chevron",{"is-open":t.expandedMenus[p.key]}]),"aria-expanded":!!t.expandedMenus[p.key],"aria-controls":"submenu-"+p.key,"aria-label":"展开子菜单",onClick:o=>t.toggleSubmenu(p)},[lt(x,{name:"chevron-down",size:14})],10,om)):Ke("",!0)],2),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(p)&&t.expandedMenus[p.key]?(ve(),pe("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+p.key},[(ve(!0),pe(rt,null,qt(p.subPages,o=>(ve(),pe("a",{key:o,class:ct(["qc-sidebar-item qc-sidebar-child",{"is-active":t.isChildActive(p,o)}]),href:"#"+p.key+"-"+o,"aria-current":t.isChildActive(p,o)?"page":null,onClick:Vt(C=>t.navigate(p,o),["prevent"])},[he("span",dm,Le(t.subLabel(p,o)),1)],10,cm))),128))],8,rm)):Ke("",!0)],64))),128))])):Ke("",!0)],64))),128))]),he("div",um,[he("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!t.sidebarCollapsed,"aria-label":t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:e[0]||(e[0]=(...n)=>t.toggleCollapse&&t.toggleCollapse(...n))},[lt(x,{name:t.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,vm)])],2)}const fm=Ta(Xv,[["render",mm]]),pm={name:"qc-header",components:{AppIcon:Ma},setup(){const a=za("qcState");if(!a)return{};const e=kt(!1),f=at(()=>a.currentUser&&a.currentUser.value||null),t=at(()=>a.navMode&&a.navMode.value||"subnav"),c=at(()=>{const ne=a.currentPage&&a.currentPage.value,be=(a.menus&&a.menus.value||[]).find(Pe=>Pe.key===ne);return!!(be&&be.subPages&&be.subPages.length)}),d=at(()=>{const ne=a.currentPage&&a.currentPage.value,be=a.currentPageName&&a.currentPageName.value;if(be)return be;const Pe=(a.menus&&a.menus.value||[]).find(me=>me.key===ne);return Pe&&Pe.name||ne||""}),x=at(()=>{const ne=a.currentSubPage&&a.currentSubPage.value;return ne&&a.subPageNames&&a.subPageNames[ne]||ne||""}),r=kt(typeof window<"u"?window.innerWidth<768:!1);function n(){r.value=window.innerWidth<768}Aa(()=>window.addEventListener("resize",n)),ms(()=>window.removeEventListener("resize",n));const p=kt(!1),o=at(()=>{const ne=a.currentSubPage&&a.currentSubPage.value;return ne&&a.subPageNames&&a.subPageNames[ne]||ne||""}),C=at(()=>{const ne=a.currentPage&&a.currentPage.value,be=(a.menus&&a.menus.value||[]).find(Pe=>Pe.key===ne);return(be&&be.subPages||[]).map(Pe=>({key:Pe,label:a.subPageNames&&a.subPageNames[Pe]||Pe}))});function y(){p.value=!p.value}function k(){p.value=!1}function _(ne){p.value=!1,a.activateTab&&a.activateTab(a.currentPage.value,ne)}const S=at(()=>(a.currentTheme&&a.currentTheme.value)==="dark"),A=kt(!1),P=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],m=at(()=>{const ne=P.find(be=>be.value===t.value);return ne&&ne.label||t.value});function l(){A.value=!A.value}function h(){A.value=!1}function L(ne){A.value=!1,a.setNavMode&&a.setNavMode(ne)}const K=at({get:()=>a.searchQuery&&a.searchQuery.value||"",set:ne=>{a.searchQuery&&(a.searchQuery.value=ne)}}),E=kt(!1),I=kt([]),F=kt(!1),X=kt(!1);function H(){const ne=localStorage.getItem("quant_token")||"";return ne?{Authorization:"Bearer "+ne,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function W(){F.value=!0,X.value=!1;try{const be=await(await fetch("/api/alerts/history?limit=8",{headers:H()})).json();be&&be.success?I.value=be.history||[]:I.value=[]}catch{X.value=!0,I.value=[]}finally{F.value=!1}}function ee(){E.value=!E.value,E.value&&W()}function ae(){E.value=!1}function B(){E.value=!1,a.activateTab&&a.activateTab("system","notification")}const U=kt(!1),q=a.themeHues||[45,220,0,140,270,320,180,25,250,-1],s=at(()=>{const ne=a.themeHue&&a.themeHue.value;return Number.isFinite(ne)?ne:45}),b=at(()=>a.themeMode&&a.themeMode.value||"system"),i=[{k:"compact",n:"紧凑"},{k:"comfortable",n:"标准"},{k:"spacious",n:"宽松"}],g=at(()=>a.density&&a.density.value||"comfortable");function Z(ne){a.changeDensity&&a.changeDensity(ne)}function R(ne){return a.hueColor?a.hueColor(ne):"hsl("+ne+", 75%, 42%)"}const w={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色","-1":"中性"};function v(ne){return a.hueName?a.hueName(ne):w[ne]||"自定义 "+ne}function M(){U.value=!U.value}function u(){U.value=!1}function N(ne){a.changeThemeMode&&a.changeThemeMode(ne)}function oe(ne){a.changeThemeHue&&a.changeThemeHue(ne)}function J(){a.changeThemeMode&&a.changeThemeMode(S.value?"light":"dark")}function D(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}a.sidebarCollapsed&&(a.sidebarCollapsed.value=!a.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",a.sidebarCollapsed.value?"1":"0")}catch{}}function G(){e.value=!e.value}function ie(){e.value=!1}function ge(ne){return()=>{ie(),ne&&ne()}}function qe(){ie(),a.handleLogout&&a.handleLogout()}const $=at(()=>a.marketData&&a.marketData.value||{}),ue=kt(typeof window<"u"&&localStorage.getItem("qc.hideNonTradingBanner")==="1");return{marketData:$,bannerDismissed:ue,dismissBanner:()=>{ue.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},state:a,showUserMenu:e,currentUser:f,isDark:S,searchQuery:K,navMode:t,crumbRoot:d,crumbSub:x,hasToptabs:c,toggleThemeQuick:J,toggleSidebar:D,openUserMenu:G,closeUserMenu:ie,menuItem:ge,handleLogout:qe,openBellMenu:E,notifItems:I,notifLoading:F,notifError:X,toggleBell:ee,closeBell:ae,goNotificationCenter:B,openThemeMenu:U,themeHues:q,themeHue:s,themeMode:b,hueColor:R,hueName:v,toggleThemeMenu:M,closeThemeMenu:u,pickThemeMode:N,pickThemeHue:oe,DENSITY_MODES:i,density:g,pickDensity:Z,openNavModeMenu:A,NAV_MODES:P,navModeLabel:m,toggleNavModeMenu:l,closeNavModeMenu:h,pickNavMode:L,isMobile:r,openSubnavPicker:p,currentSubLabel:o,subnavOptions:C,toggleSubnavPicker:y,closeSubnavPicker:k,pickSubnav:_}}},gm={class:"qc-header-wrap"},hm={key:0,class:"non-trading-banner",role:"status"},ym={class:"qc-header"},bm={class:"visually-hidden"},wm={class:"qc-header-left"},km=["aria-label"],_m={key:0,class:"qc-header-subnav"},xm=["aria-expanded"],Sm={class:"qc-subnav-picker-label"},Cm={key:0,class:"qc-subnav-picker-menu",role:"menu"},qm=["onClick"],Em={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},Mm={class:"qc-crumb qc-crumb-root"},Tm={class:"qc-crumb qc-crumb-sub"},Pm={key:1,class:"qc-crumb qc-crumb-root"},Dm={class:"qc-header-center"},Rm={key:0,class:"qc-search-sublabel"},zm={class:"qc-header-right"},Am={class:"qc-hdr-pop"},Lm=["aria-expanded"],Im={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},Nm={key:0,class:"qc-bell-state"},Om={key:1,class:"qc-bell-state"},jm={key:2,class:"qc-bell-state"},Vm={key:3,class:"qc-bell-list"},Fm={class:"qc-bell-item-title"},Hm={class:"qc-bell-item-meta"},Bm={key:0},Km={class:"qc-bell-item-time"},Wm={class:"qc-hdr-pop"},Um=["aria-expanded"],Gm={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},Ym={class:"qc-theme-modes"},Qm=["onClick"],Jm={class:"qc-theme-swatches"},$m=["title","aria-label","onClick"],Xm={key:0,class:"qc-theme-swatch-check"},Zm={class:"qc-theme-custom-label"},ef={class:"qc-theme-modes"},tf=["onClick"],af={key:0,class:"qc-navmode-switch"},sf=["aria-label","title","aria-expanded"],nf={key:0,class:"qc-navmode-menu",role:"menu"},lf=["onClick","onKeydown"],of={class:"qc-navmode-item-main"},rf={class:"qc-user-menu"},cf=["aria-label","aria-expanded"],df={key:0,class:"qc-user-dropdown",role:"menu"},uf={class:"qc-user-dropdown-header"},vf={class:"qc-user-dropdown-name"},mf={key:0,class:"qc-user-dropdown-chip"};function ff(a,e,f,t,c,d){var C,y,k,_,S,A,P;const x=Ft("AppIcon"),r=Ft("qc-top-tabs"),n=Ft("el-autocomplete"),p=Ft("el-slider"),o=Hd("click-outside");return ve(),pe("div",gm,[t.marketData&&t.marketData.is_trading_day===!1&&!t.bannerDismissed?(ve(),pe("div",hm,[lt(x,{name:"alert-triangle",size:14}),e[15]||(e[15]=he("span",null,"今日非交易日 · 当前展示最近交易日历史数据",-1)),he("button",{class:"non-trading-banner-close",onClick:e[0]||(e[0]=(...m)=>t.dismissBanner&&t.dismissBanner(...m)),"aria-label":"关闭提示"},"×")])):Ke("",!0),he("header",ym,[he("h1",bm,Le(t.crumbRoot||"量化日历"),1),he("div",wm,[he("button",{class:"qc-icon-btn","aria-label":(C=t.state.sidebarCollapsed)!=null&&C.value?"展开侧边栏":"折叠侧边栏",onClick:e[1]||(e[1]=(...m)=>t.toggleSidebar&&t.toggleSidebar(...m))},[lt(x,{name:"menu",size:20})],8,km),t.isMobile?Fa((ve(),pe("div",_m,[he("button",{class:"qc-subnav-picker","aria-expanded":t.openSubnavPicker,onClick:e[2]||(e[2]=(...m)=>t.toggleSubnavPicker&&t.toggleSubnavPicker(...m))},[he("span",Sm,Le(t.currentSubLabel||"二级"),1),lt(x,{name:"chevron-down",size:14})],8,xm),t.openSubnavPicker?(ve(),pe("div",Cm,[(ve(!0),pe(rt,null,qt(t.subnavOptions,m=>(ve(),pe("div",{key:m.key,class:ct(["qc-subnav-picker-item",{"is-active":m.key===(t.state.currentSubPage&&t.state.currentSubPage.value)}]),role:"menuitem",onClick:l=>t.pickSubnav(m.key)},Le(m.label),11,qm))),128))])):Ke("",!0)])),[[o,t.closeSubnavPicker]]):Ke("",!0),t.navMode==="tree"&&!t.isMobile?(ve(),pe("div",Em,[he("span",Mm,Le(t.crumbRoot),1),t.crumbSub?(ve(),pe(rt,{key:0},[e[16]||(e[16]=he("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),he("span",Tm,Le(t.crumbSub),1)],64)):Ke("",!0)])):Ke("",!0),t.navMode==="toptab"&&!t.isMobile?(ve(),pe(rt,{key:2},[t.hasToptabs?(ve(),ya(r,{key:0})):(ve(),pe("span",Pm,Le(t.crumbRoot),1))],64)):Ke("",!0)]),he("div",Dm,[lt(n,{class:"qc-header-search",modelValue:t.searchQuery,"onUpdate:modelValue":e[3]||(e[3]=m=>t.searchQuery=m),"fetch-suggestions":t.state.searchStocks,placeholder:t.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:t.state.onSearchSelect},{prefix:aa(()=>[lt(x,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:aa(()=>[...e[17]||(e[17]=[he("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:aa(m=>{var l,h,L,K,E;return[he("span",null,Le((l=m==null?void 0:m.item)==null?void 0:l.icon)+" "+Le(((h=m==null?void 0:m.item)==null?void 0:h.label)||((L=m==null?void 0:m.item)==null?void 0:L.name)),1),(K=m==null?void 0:m.item)!=null&&K.subLabel?(ve(),pe("span",Rm,Le((E=m==null?void 0:m.item)==null?void 0:E.subLabel),1)):Ke("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),he("div",zm,[Fa((ve(),pe("div",Am,[he("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":t.openBellMenu,onClick:e[4]||(e[4]=(...m)=>t.toggleBell&&t.toggleBell(...m))},[lt(x,{name:"bell",size:20})],8,Lm),t.openBellMenu?(ve(),pe("div",Im,[e[18]||(e[18]=he("div",{class:"qc-bell-header"},"通知",-1)),t.notifLoading?(ve(),pe("div",Nm,"加载中...")):t.notifError?(ve(),pe("div",Om,"加载失败")):t.notifItems.length?(ve(),pe("div",Vm,[(ve(!0),pe(rt,null,qt(t.notifItems,(m,l)=>(ve(),pe("div",{key:m.id||l,class:ct(["qc-bell-item",{"is-fail":m.ok===0}])},[he("div",Fm,Le(m.title||m.event_type||"事件"),1),he("div",Hm,[Ea(Le(m.channel||""),1),m.recipient?(ve(),pe("span",Bm," · "+Le(m.recipient),1)):Ke("",!0),he("span",Km,Le(m.created_at||""),1)])],2))),128))])):(ve(),pe("div",jm,"暂无通知")),he("button",{class:"qc-bell-footer",onClick:e[5]||(e[5]=(...m)=>t.goNotificationCenter&&t.goNotificationCenter(...m))},"前往通知中心 →")])):Ke("",!0)])),[[o,t.closeBell]]),Fa((ve(),pe("div",Wm,[he("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":t.openThemeMenu,onClick:e[6]||(e[6]=(...m)=>t.toggleThemeMenu&&t.toggleThemeMenu(...m))},[lt(x,{name:"palette",size:20})],8,Um),t.openThemeMenu?(ve(),pe("div",Gm,[e[19]||(e[19]=he("div",{class:"qc-theme-section-label"},"外观模式",-1)),he("div",Ym,[(ve(),pe(rt,null,qt([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],m=>he("button",{key:m.k,class:ct(["qc-theme-mode",{"is-active":t.themeMode===m.k}]),onClick:l=>t.pickThemeMode(m.k)},Le(m.n),11,Qm)),64))]),e[20]||(e[20]=he("div",{class:"qc-theme-section-label"},"主题色",-1)),he("div",Jm,[(ve(!0),pe(rt,null,qt(t.themeHues,m=>(ve(),pe("button",{key:m,class:ct(["qc-theme-swatch",{"is-active":t.themeHue===m}]),style:Bd({background:t.hueColor(m)}),title:t.hueName(m),"aria-label":t.hueName(m),onClick:l=>t.pickThemeHue(m)},[t.themeHue===m?(ve(),pe("span",Xm,"✓")):Ke("",!0)],14,$m))),128))]),lt(p,{class:"qc-theme-slider","model-value":t.themeHue,min:0,max:359,step:1,size:"small",onChange:t.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),he("div",Zm,"自定义 "+Le(t.themeHue)+"°",1),e[21]||(e[21]=he("div",{class:"qc-theme-section-label"},"信息密度",-1)),he("div",ef,[(ve(!0),pe(rt,null,qt(t.DENSITY_MODES,m=>(ve(),pe("button",{key:m.k,class:ct(["qc-theme-mode",{"is-active":t.density===m.k}]),onClick:l=>t.pickDensity(m.k)},Le(m.n),11,tf))),128))])])):Ke("",!0)])),[[o,t.closeThemeMenu]]),t.isMobile?Ke("",!0):Fa((ve(),pe("div",af,[he("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+t.navModeLabel,title:"导航形态: "+t.navModeLabel,"aria-expanded":t.openNavModeMenu,onClick:e[7]||(e[7]=(...m)=>t.toggleNavModeMenu&&t.toggleNavModeMenu(...m))},[lt(x,{name:"layers",size:20})],8,sf),t.openNavModeMenu?(ve(),pe("div",nf,[(ve(!0),pe(rt,null,qt(t.NAV_MODES,m=>(ve(),pe("div",{key:m.value,class:ct(["qc-user-dropdown-item qc-navmode-item",{"is-active":t.navMode===m.value}]),role:"menuitem",tabindex:"0",onClick:l=>t.pickNavMode(m.value),onKeydown:[ha(Vt(l=>t.pickNavMode(m.value),["prevent"]),["enter"]),ha(Vt(l=>t.pickNavMode(m.value),["prevent"]),["space"])]},[he("div",of,[he("span",null,Le(m.label),1),t.navMode===m.value?(ve(),ya(x,{key:0,name:"check",size:14})):Ke("",!0)])],42,lf))),128))])):Ke("",!0)])),[[o,t.closeNavModeMenu]]),Fa((ve(),pe("div",rf,[he("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((y=t.currentUser)==null?void 0:y.username)||""),"aria-haspopup":"menu","aria-expanded":t.showUserMenu,onClick:e[8]||(e[8]=(...m)=>t.openUserMenu&&t.openUserMenu(...m))},Le((((k=t.currentUser)==null?void 0:k.username)||"A").charAt(0).toUpperCase()),9,cf),t.showUserMenu?(ve(),pe("div",df,[he("div",uf,[he("span",vf,Le((_=t.currentUser)==null?void 0:_.username),1),((S=t.currentUser)==null?void 0:S.role)==="guest"?(ve(),pe("span",mf,"访客")):Ke("",!0)]),((A=t.currentUser)==null?void 0:A.role)==="admin"?(ve(),pe("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[9]||(e[9]=m=>t.menuItem(t.state.resetSetupWizard)()),onKeydown:e[10]||(e[10]=ha(Vt(m=>t.menuItem(t.state.resetSetupWizard)(),["prevent"]),["enter"]))},[lt(x,{name:"settings",size:16}),e[22]||(e[22]=Ea(" 重新运行初始化向导 ",-1))],32)):Ke("",!0),((P=t.currentUser)==null?void 0:P.role)!=="guest"?(ve(),pe("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[11]||(e[11]=m=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})()),onKeydown:e[12]||(e[12]=ha(Vt(m=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[lt(x,{name:"lock",size:16}),e[23]||(e[23]=Ea(" 修改密码 ",-1))],32)):Ke("",!0),e[25]||(e[25]=he("div",{class:"qc-user-dropdown-divider"},null,-1)),he("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:e[13]||(e[13]=(...m)=>t.handleLogout&&t.handleLogout(...m)),onKeydown:e[14]||(e[14]=ha(Vt((...m)=>t.handleLogout&&t.handleLogout(...m),["prevent"]),["enter"]))},[lt(x,{name:"log-out",size:16}),e[24]||(e[24]=Ea(" 退出登录 ",-1))],32)])):Ke("",!0)])),[[o,t.closeUserMenu]])])])])}const pf=Ta(pm,[["render",ff]]),gf=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],hf={name:"qc-subnav",components:{AppIcon:Ma},setup(){const a=za("qcState");if(!a)return{};const e=at(()=>a.currentPage&&a.currentPage.value||""),f=at(()=>a.currentSubPage&&a.currentSubPage.value||""),t=at(()=>a.navMode&&a.navMode.value||"subnav"),c=kt({}),d=at(()=>a.menus&&a.menus.value||[]),x=at(()=>d.value.find(P=>P.key===e.value)||null),r=at(()=>x.value&&x.value.subPages||[]),n=at(()=>a.currentPageName&&a.currentPageName.value||e.value),p=P=>a.subPageNames&&a.subPageNames[P]||P,o=P=>f.value===P;function C(P){a.openTab?a.openTab(e.value,P):a.currentSubPage&&(a.currentSubPage.value=P);try{localStorage.setItem("quant_last_subpage",P)}catch{}}function y(P){a.openTab?a.openTab(e.value,P.key):a.currentSubPage&&(a.currentSubPage.value=P.key);try{localStorage.setItem("quant_last_subpage",P.key)}catch{}}function k(P){c.value[P]=!c.value[P]}const _={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}};return{state:a,currentPage:e,currentSubPage:f,navMode:t,subPages:r,currentMenu:x,collapsedGroups:c,pageTitle:n,subLabel:p,isSubActive:o,goSub:C,goSystemItem:y,toggleGroup:k,SYSTEM_GROUPS:gf,subIcon:(P,m)=>_[P]&&_[P][m]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},yf={key:0,class:"qc-subnav-column","aria-label":"二级导航"},bf={class:"qc-subnav-column-header"},wf={class:"qc-subnav-current-label"},kf={class:"qc-subnav-column-body"},_f=["onClick"],xf=["href","onClick"],Sf={class:"qc-subnav-group-label"},Cf=["href","onClick"],qf=["href","onClick"];function Ef(a,e,f,t,c,d){const x=Ft("AppIcon");return t.navMode==="subnav"?(ve(),pe("aside",yf,[he("div",bf,[he("span",wf,Le(t.pageTitle),1)]),he("div",kf,[t.currentPage==="system"?(ve(!0),pe(rt,{key:0},qt(t.SYSTEM_GROUPS,r=>(ve(),pe("div",{key:r.label,class:"qc-subnav-group"},[he("div",{class:"qc-subnav-group-label",onClick:n=>t.toggleGroup(r.label)},[he("span",null,Le(r.label),1),lt(x,{name:"chevron-down",size:12,class:ct({"is-open":!t.collapsedGroups[r.label]})},null,8,["class"])],8,_f),t.collapsedGroups[r.label]?Ke("",!0):(ve(!0),pe(rt,{key:0},qt(r.items,n=>(ve(),pe("a",{key:n.key,class:ct(["qc-subnav-item",{"is-active":t.isSubActive(n.key)}]),href:"#"+n.key,onClick:Vt(p=>t.goSystemItem(n),["prevent"])},[lt(x,{name:n.icon,size:16},null,8,["name"]),he("span",null,Le(n.label),1)],10,xf))),128))]))),128)):t.currentPage==="shortterm"?(ve(!0),pe(rt,{key:1},qt(t.SHORTTERM_GROUPS,r=>(ve(),pe("div",{key:r.label,class:"qc-subnav-group"},[he("div",Sf,[he("span",null,Le(r.label),1)]),(ve(!0),pe(rt,null,qt(r.items,n=>(ve(),pe("a",{key:n,class:ct(["qc-subnav-item",{"is-active":t.isSubActive(n)}]),href:"#"+t.currentPage+"/"+n,onClick:Vt(p=>t.goSub(n),["prevent"])},[lt(x,{name:t.subIcon(t.currentPage,n),size:16},null,8,["name"]),he("span",null,Le(t.subLabel(n)),1)],10,Cf))),128))]))),128)):(ve(!0),pe(rt,{key:2},qt(t.subPages,r=>(ve(),pe("a",{key:r,class:ct(["qc-subnav-item",{"is-active":t.isSubActive(r)}]),href:"#"+t.currentPage+"/"+r,onClick:Vt(n=>t.goSub(r),["prevent"])},[lt(x,{name:t.subIcon(t.currentPage,r),size:16},null,8,["name"]),he("span",null,Le(t.subLabel(r)),1)],10,qf))),128))])])):Ke("",!0)}const Mf=Ta(hf,[["render",Ef]]),Tf=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],Pf={name:"qc-mobile-nav",components:{AppIcon:Ma},setup(){const a=za("qcState");if(!a)return{};const e=kt(!1),f=kt(null),t=kt({}),c=at(()=>a.menus&&a.menus.value||[]),d=at(()=>a.currentPage&&a.currentPage.value||""),x={research:"量化投研",platform:"平台管理"},r=["research","platform"];function n(m){return Array.isArray(m.subPages)&&m.subPages.length>0}function p(m){n(m)&&(t.value[m.key]=!t.value[m.key])}function o(m,l){return d.value===m.key&&a.currentSubPage&&a.currentSubPage.value===l}function C(m){return a.subPageNames&&a.subPageNames[m]||m}async function y(m){const l=c.value.find(L=>L.key===m.key),h=l&&l.subPages&&l.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(m.key,h):(a.currentPage.value=m.key,a.currentSubPage&&(a.currentSubPage.value=h)),a.navigateTo&&a.navigateTo(m.key,h)}function k(m,l){e.value=!1;const h=l||m.subPages&&m.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(m.key,h):(a.currentPage.value=m.key,a.currentSubPage&&(a.currentSubPage.value=h)),a.navigateTo&&a.navigateTo(m.key,h)}function _(){e.value=!0,t.value.shortterm===void 0&&(t.value.shortterm=!0)}function S(){e.value=!1;const m=document.querySelector(".qc-header .qc-icon-btn");m&&m.focus()}function A(m){m.detail&&m.detail.open&&_()}function P(m){e.value&&m.key==="Escape"&&S()}return Aa(()=>{window.addEventListener("qc:drawer",A),document.addEventListener("keydown",P)}),ms(()=>{window.removeEventListener("qc:drawer",A),document.removeEventListener("keydown",P)}),{state:a,TABS:Tf,menus:c,currentPage:d,drawerOpen:e,drawerFocusRef:f,drawerExpanded:t,GROUP_LABELS:x,GROUPS:r,hasSub:n,toggleDrawerMenu:p,isDrawerSubActive:o,subLabel:C,goTab:y,goMenu:k,openDrawer:_,closeDrawer:S}}},Df={class:"qc-mobile-nav","aria-label":"移动端底部导航"},Rf=["aria-current","onClick"],zf={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},Af={class:"qc-drawer-header"},Lf={class:"qc-drawer-brand"},If={class:"qc-drawer-body"},Nf={key:0},Of={class:"qc-nav-group-label"},jf=["href","aria-current","onClick"],Vf={class:"qc-sidebar-label"},Ff=["aria-expanded","onClick"],Hf={key:0,class:"qc-drawer-children"},Bf=["href","onClick"],Kf={class:"qc-drawer-footer"},Wf=["title"];function Uf(a,e,f,t,c,d){var r,n;const x=Ft("AppIcon");return ve(),pe(rt,null,[he("nav",Df,[(ve(!0),pe(rt,null,qt(t.TABS,p=>(ve(),pe("button",{key:p.key,class:ct(["qc-mobile-tab",{"is-active":t.currentPage===p.key}]),"aria-current":t.currentPage===p.key?"page":null,onClick:o=>t.goTab(p)},[lt(x,{name:p.icon,size:22},null,8,["name"]),he("span",null,Le(p.label),1)],10,Rf))),128))]),(ve(),ya(Kd,{to:"body"},[t.drawerOpen?(ve(),pe("div",{key:0,class:"qc-drawer-backdrop",onClick:e[0]||(e[0]=(...p)=>t.closeDrawer&&t.closeDrawer(...p))})):Ke("",!0),t.drawerOpen?(ve(),pe("div",zf,[he("div",Af,[he("div",Lf,[e[4]||(e[4]=he("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[he("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),he("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),he("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),he("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),he("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),he("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),he("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),he("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),he("span",null,Le(t.state.t("login.title")),1)]),he("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:e[1]||(e[1]=(...p)=>t.closeDrawer&&t.closeDrawer(...p))},[lt(x,{name:"x",size:18})])]),he("div",If,[(ve(!0),pe(rt,null,qt(t.GROUPS,p=>(ve(),pe(rt,{key:p},[t.menus.some(o=>o.group===p)?(ve(),pe("div",Nf,[he("div",Of,Le(t.GROUP_LABELS[p]),1),(ve(!0),pe(rt,null,qt(t.menus.filter(o=>o.group===p),o=>(ve(),pe("div",{key:o.key,class:"qc-drawer-menu"},[he("div",{class:ct(["qc-drawer-menu-row",{"is-active":t.currentPage===o.key}])},[he("a",{class:ct(["qc-sidebar-item",{"is-active":t.currentPage===o.key}]),href:"#"+o.key,"aria-current":t.currentPage===o.key?"page":null,onClick:Vt(C=>t.hasSub(o)?t.toggleDrawerMenu(o):t.goMenu(o),["prevent"])},[lt(x,{name:o.iconName||"",size:18},null,8,["name"]),he("span",Vf,Le(o.name),1)],10,jf),t.hasSub(o)?(ve(),pe("button",{key:0,class:ct(["qc-sidebar-chevron",{"is-open":t.drawerExpanded[o.key]}]),"aria-expanded":!!t.drawerExpanded[o.key],"aria-label":"展开子菜单",onClick:C=>t.toggleDrawerMenu(o)},[lt(x,{name:"chevron-down",size:14})],10,Ff)):Ke("",!0)],2),t.drawerExpanded[o.key]?(ve(),pe("div",Hf,[(ve(!0),pe(rt,null,qt(o.subPages,C=>(ve(),pe("a",{key:C,class:ct(["qc-subnav-item",{"is-active":t.isDrawerSubActive(o,C)}]),href:"#"+o.key+"/"+C,onClick:Vt(y=>t.goMenu(o,C),["prevent"])},[he("span",null,Le(t.subLabel(C)),1)],10,Bf))),128))])):Ke("",!0)]))),128))])):Ke("",!0)],64))),128))]),he("div",Kf,[he("button",{class:"qc-icon-btn",title:((r=t.state.currentTheme)==null?void 0:r.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:e[2]||(e[2]=p=>{var o;return t.state.changeThemeMode&&t.state.changeThemeMode(((o=t.state.currentTheme)==null?void 0:o.value)==="dark"?"light":"dark")})},[lt(x,{name:((n=t.state.currentTheme)==null?void 0:n.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,Wf),he("button",{class:"qc-icon-btn",title:"退出登录",onClick:e[3]||(e[3]=p=>t.state.handleLogout&&t.state.handleLogout())},[lt(x,{name:"log-out",size:18})])])])):Ke("",!0)]))],64)}const Gf=Ta(Pf,[["render",Uf]]),Yf={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(a,{emit:e,slots:f}){const t=za("qcState");function c(o){e("select",o)}function d(o){const C=o.strategy_names||o.strategies||[],y=C.slice(0,3),k=C.length>3?C.length-3:0,_=y.map(S=>({text:S,more:!1}));return k&&_.push({text:"+"+k,more:!0}),_}function x(o){const C=Number(o);return isFinite(C)?C.toFixed(2):"—"}function r(o){const C=Number(o);return isFinite(C)?(C>0?"+":"")+C.toFixed(2)+"%":"—"}function n(o){const C=Number(o.consensus_level);return isFinite(C)?Math.round(C*100):0}function p(o){const C=Number(o&&o.consensus_level);return isFinite(C)&&C>0}return{state:t,slots:f,select:c,displayTags:d,fmtPrice:x,fmtChange:r,pctOf:n,hasConsensus:p}}},Qf={class:"qc-stock-list"},Jf=["data-copy-code","aria-label","onClick","onKeydown"],$f={key:0,class:"qc-stock-rank"},Xf={class:"qc-stock-info"},Zf={class:"qc-stock-code"},ep={class:"qc-stock-code-num"},tp={key:0,class:"qc-stock-status is-new"},ap={key:1,class:"qc-stock-status is-out"},sp={class:"qc-stock-name"},np={key:0,class:"qc-stock-consensus"},lp={key:1,class:"qc-stock-tags"},ip={key:2,class:"qc-stock-badge"},op={key:3,class:"qc-stock-data"},rp={class:"qc-stock-price"},cp={key:4,class:"qc-stock-extra"},dp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},up=["data-copy-code","aria-label","onClick","onKeydown"],vp={key:0,class:"qc-stock-rank"},mp={class:"qc-stock-info"},fp={class:"qc-stock-code"},pp={class:"qc-stock-code-num"},gp={key:0,class:"qc-stock-status is-new"},hp={key:1,class:"qc-stock-status is-out"},yp={class:"qc-stock-name"},bp={key:0,class:"qc-stock-consensus"},wp={key:1,class:"qc-stock-tags"},kp={key:2,class:"qc-stock-badge"},_p={key:3,class:"qc-stock-data"},xp={class:"qc-stock-price"},Sp={key:4,class:"qc-stock-extra"},Cp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function qp(a,e,f,t,c,d){const x=Ft("qc-state-panel"),r=Ft("qc-virtual-list");return ve(),pe("div",Qf,[f.loading?(ve(),ya(x,{key:0,type:"loading"})):f.items.length?(ve(),pe(rt,{key:2},[f.virtual?(ve(),ya(r,{key:0,items:f.items,"row-height":f.rowHeight},{default:aa(({item:n,index:p})=>[he("div",{class:ct(["qc-stock-row",{"is-active":f.activeCode===n.code}]),"data-copy-code":f.copyCode?n.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(n.name||"")+" "+(n.code||""),onClick:o=>t.select(n),onKeydown:[ha(Vt(o=>t.select(n),["prevent"]),["enter"]),ha(Vt(o=>t.select(n),["prevent"]),["space"])]},[f.showRank?(ve(),pe("div",$f,Le(p+1),1)):Ke("",!0),he("div",Xf,[he("div",Zf,[he("span",ep,Le(n.code),1),n.status==="new"?(ve(),pe("span",tp,Le(f.statusText.new),1)):n.status==="out"?(ve(),pe("span",ap,Le(f.statusText.out),1)):Ke("",!0)]),he("div",sp,[Ea(Le(n.name)+" ",1),ca(a.$slots,"name-suffix",{item:n,index:p})]),f.showConsensus&&t.hasConsensus(n)?(ve(),pe("span",np,Le(t.pctOf(n))+"% 共识",1)):Ke("",!0)]),(n.strategy_names||n.strategies)&&(n.strategy_names||n.strategies).length?(ve(),pe("div",lp,[(ve(!0),pe(rt,null,qt(t.displayTags(n),o=>(ve(),pe("span",{key:o.text,class:ct(["qc-stock-tag",{"is-more":o.more}])},Le(o.text),3))),128))])):Ke("",!0),f.showConsensus?(ve(),pe("span",ip,Le(n.strategy_count||0)+" 策略",1)):Ke("",!0),f.showPrice&&n.price!=null?(ve(),pe("div",op,[he("span",rp,Le(t.fmtPrice(n.price)),1),he("span",{class:ct(["qc-stock-change",n.change_pct>0?"is-up":n.change_pct<0?"is-down":""])},Le(t.fmtChange(n.change_pct)),3)])):Ke("",!0),t.slots.extra?(ve(),pe("div",cp,[ca(a.$slots,"extra",{item:n,index:p})])):Ke("",!0),t.slots.actions?(ve(),pe("div",{key:5,class:"qc-stock-actions",onClick:e[0]||(e[0]=Vt(()=>{},["stop"]))},[ca(a.$slots,"actions",{item:n,index:p})])):Ke("",!0),t.slots.footer?(ve(),pe("div",dp,[ca(a.$slots,"footer",{item:n,index:p})])):Ke("",!0)],42,Jf)]),_:3},8,["items","row-height"])):(ve(!0),pe(rt,{key:1},qt(f.items,(n,p)=>(ve(),pe("div",{key:n.code,class:ct(["qc-stock-row",{"is-active":f.activeCode===n.code}]),"data-copy-code":f.copyCode?n.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(n.name||"")+" "+(n.code||""),onClick:o=>t.select(n),onKeydown:[ha(Vt(o=>t.select(n),["prevent"]),["enter"]),ha(Vt(o=>t.select(n),["prevent"]),["space"])]},[f.showRank?(ve(),pe("div",vp,Le(p+1),1)):Ke("",!0),he("div",mp,[he("div",fp,[he("span",pp,Le(n.code),1),n.status==="new"?(ve(),pe("span",gp,Le(f.statusText.new),1)):n.status==="out"?(ve(),pe("span",hp,Le(f.statusText.out),1)):Ke("",!0)]),he("div",yp,[Ea(Le(n.name)+" ",1),ca(a.$slots,"name-suffix",{item:n,index:p})]),f.showConsensus&&t.hasConsensus(n)?(ve(),pe("span",bp,Le(t.pctOf(n))+"% 共识",1)):Ke("",!0)]),(n.strategy_names||n.strategies)&&(n.strategy_names||n.strategies).length?(ve(),pe("div",wp,[(ve(!0),pe(rt,null,qt(t.displayTags(n),o=>(ve(),pe("span",{key:o.text,class:ct(["qc-stock-tag",{"is-more":o.more}])},Le(o.text),3))),128))])):Ke("",!0),f.showConsensus?(ve(),pe("span",kp,Le(n.strategy_count||0)+" 策略",1)):Ke("",!0),f.showPrice&&n.price!=null?(ve(),pe("div",_p,[he("span",xp,Le(t.fmtPrice(n.price)),1),he("span",{class:ct(["qc-stock-change",n.change_pct>0?"is-up":n.change_pct<0?"is-down":""])},Le(t.fmtChange(n.change_pct)),3)])):Ke("",!0),t.slots.extra?(ve(),pe("div",Sp,[ca(a.$slots,"extra",{item:n,index:p})])):Ke("",!0),t.slots.actions?(ve(),pe("div",{key:5,class:"qc-stock-actions",onClick:e[1]||(e[1]=Vt(()=>{},["stop"]))},[ca(a.$slots,"actions",{item:n,index:p})])):Ke("",!0),t.slots.footer?(ve(),pe("div",Cp,[ca(a.$slots,"footer",{item:n,index:p})])):Ke("",!0)],42,up))),128))],64)):(ve(),ya(x,{key:1,type:"empty",title:f.emptyText},null,8,["title"]))])}const Ep=Ta(Yf,[["render",qp]]),Mp={name:"qc-detail-split",props:{enabled:{type:Boolean,default:!1},rootClass:{type:String,default:""},listClass:{type:String,default:""},paneClass:{type:String,default:""}}},Tp={key:0,class:"split-divider","data-split-resize":""};function Pp(a,e,f,t,c,d){return ve(),pe("div",{class:ct(["detail-split-wrap",[f.rootClass,{"detail-split":f.enabled}]]),"data-split-root":""},[he("div",{class:ct(["detail-split-list",[f.listClass,{"w-100":!f.enabled}]])},[ca(a.$slots,"list")],2),f.enabled?(ve(),pe("div",Tp)):Ke("",!0),f.enabled?(ve(),pe("div",{key:1,class:ct(["detail-split-pane",f.paneClass])},[ca(a.$slots,"pane")],2)):Ke("",!0)],2)}const Dp=Ta(Mp,[["render",Pp]]),Sn={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}},Rp=200,zp={name:"qc-top-tabs",components:{AppIcon:Ma},setup(){const a=za("qcState");if(!a)return{};const e=at(()=>a.currentPage&&a.currentPage.value||""),f=at(()=>a.currentSubPage&&a.currentSubPage.value||""),t=at(()=>a.menus&&a.menus.value||[]),c=at(()=>{const l=t.value.find(h=>h.key===e.value);return l&&l.subPages||[]}),d=at(()=>c.value.map(l=>({key:l,label:a.subPageNames&&a.subPageNames[l]||l,icon:Sn[e.value]&&Sn[e.value][l]||"circle-dot"}))),x=kt(null),r=kt(!1),n=kt(!1),p=kt(!1);let o=null,C=null;function y(){const l=x.value;l&&(n.value=l.scrollLeft>2,p.value=l.scrollLeft<l.scrollWidth-l.clientWidth-2)}function k(){const l=x.value;l&&(r.value=l.scrollWidth>l.clientWidth+2,y())}function _(l){const h=x.value;h&&h.scrollBy({left:l*Rp,behavior:"smooth"})}function S(l){a.openTab?a.openTab(e.value,l):a.currentSubPage&&(a.currentSubPage.value=l)}function A(l){S(l),Ud(()=>{const h=x.value;if(!h)return;const L=h.querySelector('[data-tab-key="'+l+'"]');L&&L.scrollIntoView({block:"nearest",inline:"nearest"})})}const P=at(()=>{if(!r.value)return[];const l=x.value;if(!l)return[];const h=l.getBoundingClientRect(),L=new Set;return l.querySelectorAll(".qc-top-tab").forEach(K=>{const E=K.getBoundingClientRect();E.left>=h.left-2&&E.left<h.right-24&&L.add(K.getAttribute("data-tab-key"))}),d.value.filter(K=>!L.has(K.key))});function m(l,h){l.key==="ArrowLeft"?(l.preventDefault(),_(-1)):l.key==="ArrowRight"?(l.preventDefault(),_(1)):(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),S(h.key))}return Aa(()=>{k(),o=new ResizeObserver(()=>{clearTimeout(C),C=setTimeout(k,100)}),x.value&&o.observe(x.value),window.addEventListener("resize",k)}),Wd(()=>{o&&o.disconnect(),window.removeEventListener("resize",k),clearTimeout(C)}),{state:a,tabs:d,currentSubPage:f,go:S,scrollRef:x,hasOverflow:r,canScrollLeft:n,canScrollRight:p,scrollByStep:_,scrollToTab:A,hiddenTabs:P,onTabKeydown:m,updateScrollState:y}}},Ap={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},Lp=["disabled"],Ip=["data-tab-key","aria-selected","title","onClick","onKeydown"],Np={class:"qc-top-tab-label"},Op=["disabled"];function jp(a,e,f,t,c,d){const x=Ft("AppIcon"),r=Ft("el-dropdown-item"),n=Ft("el-dropdown-menu"),p=Ft("el-dropdown");return t.tabs.length?(ve(),pe("div",Ap,[t.hasOverflow?(ve(),pe("button",{key:0,class:"qc-top-tabs-btn",disabled:!t.canScrollLeft,"aria-label":"向左滚动",onClick:e[0]||(e[0]=o=>t.scrollByStep(-1))},"‹",8,Lp)):Ke("",!0),he("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:e[1]||(e[1]=(...o)=>t.updateScrollState&&t.updateScrollState(...o))},[(ve(!0),pe(rt,null,qt(t.tabs,o=>(ve(),pe("div",{key:o.key,"data-tab-key":o.key,class:ct(["qc-top-tab",{"is-active":t.currentSubPage===o.key}]),role:"tab",tabindex:"0","aria-selected":t.currentSubPage===o.key?"true":"false",title:o.label,onClick:C=>t.go(o.key),onKeydown:C=>t.onTabKeydown(C,o)},[lt(x,{name:o.icon,size:14},null,8,["name"]),he("span",Np,Le(o.label),1)],42,Ip))),128))],544),t.hasOverflow?(ve(),pe("button",{key:1,class:"qc-top-tabs-btn",disabled:!t.canScrollRight,"aria-label":"向右滚动",onClick:e[2]||(e[2]=o=>t.scrollByStep(1))},"›",8,Op)):Ke("",!0),t.hasOverflow&&t.hiddenTabs.length?(ve(),ya(p,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:t.scrollToTab},{dropdown:aa(()=>[lt(n,null,{default:aa(()=>[(ve(!0),pe(rt,null,qt(t.hiddenTabs,o=>(ve(),ya(r,{key:o.key,command:o.key,class:ct({"is-active":t.currentSubPage===o.key})},{default:aa(()=>[lt(x,{name:o.icon,size:14},null,8,["name"]),Ea(" "+Le(o.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:aa(()=>[e[3]||(e[3]=he("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):Ke("",!0)])):Ke("",!0)}const Vp=Ta(zp,[["render",jp]]),Fp=["title"],Hp={class:"qc-glossary-trigger",role:"button",tabindex:"0","aria-label":"术语解释"},Bp={class:"qc-glossary-card"},Kp={class:"qc-glossary-head"},Wp={class:"qc-glossary-term"},Up={class:"qc-glossary-cat"},Gp={class:"qc-glossary-row"},Yp={class:"qc-glossary-label"},Qp={class:"qc-glossary-text"},Jp={class:"qc-glossary-row"},$p={class:"qc-glossary-label"},Xp={class:"qc-glossary-text"},Zp={class:"qc-glossary-foot"},Cn={__name:"GlossaryHint",props:{gkey:{type:String,required:!0},size:{type:[Number,String],default:14}},setup(a){const e=a;let f=null;function t(){return f||(f=fetch("/api/meta/glossary").then(n=>n.ok?n.json():null).then(n=>n&&n.success?n.items:null).catch(()=>null)),f}const c=kt(!0),d=kt(null);Aa(async()=>{const n=await t();if(n){const p=n.find(o=>o.key===e.gkey);p&&(d.value=p,c.value=!1)}});function x(){window.__quantGoPage?window.__quantGoPage("system","glossary"):window.__quantState&&window.__quantState.currentPage&&(window.__quantState.currentPage.value="system",window.__quantState.currentSubPage.value="glossary")}const r=at(()=>!c.value&&!!d.value);return(n,p)=>{const o=Ft("qc-icon"),C=Ft("el-popover");return r.value?(ve(),pe("span",{key:0,class:"qc-glossary-hint",title:d.value.term},[lt(C,{placement:"bottom-start",width:340,trigger:"hover","popper-class":"qc-glossary-pop"},{reference:aa(()=>[he("span",Hp,[lt(o,{name:"help-circle",size:a.size},null,8,["size"])])]),default:aa(()=>[he("div",Bp,[he("div",Kp,[he("span",Wp,Le(n.t("glossary.term."+d.value.key)),1),he("span",Up,Le(n.t("glossary.cat."+d.value.category)),1)]),he("div",Gp,[he("span",Yp,Le(n.t("glossary.definition")),1),he("span",Qp,Le(d.value.definition),1)]),he("div",Jp,[he("span",$p,Le(n.t("glossary.calc")),1),he("span",Xp,Le(d.value.calc),1)]),he("div",Zp,[he("span",{class:"qc-glossary-link",onClick:x},Le(n.t("glossary.title"))+" →",1)])])]),_:1})],8,Fp)):Ke("",!0)}}},eg={class:"card qc-glossary-page"},tg={class:"card-title flex-between"},ag={class:"qc-glossary-tabs",role:"tablist"},sg=["onClick"],ng={key:0,class:"qc-glossary-loading"},lg={key:1,class:"qc-glossary-empty"},ig={key:2,class:"qc-glossary-list"},og={class:"qc-glossary-item-head"},rg={class:"qc-glossary-term"},cg={class:"qc-glossary-cat"},dg={class:"qc-glossary-item-def"},ug={class:"qc-glossary-item-calc"},vg={class:"qc-glossary-label"},qn={__name:"GlossaryPage",setup(a){const e=kt([]),f=kt([]),t=kt("all"),c=kt(""),d=kt(!0);Aa(async()=>{try{const p=await(await fetch("/api/meta/glossary")).json();p&&p.success&&(e.value=p.items||[],f.value=p.categories||[])}catch{}finally{d.value=!1}});const x=at(()=>{let n=e.value;t.value!=="all"&&(n=n.filter(o=>o.category===t.value));const p=(c.value||"").trim().toLowerCase();return p&&(n=n.filter(o=>(o.term||"").toLowerCase().includes(p)||(o.definition||"").toLowerCase().includes(p))),n}),r=["宏观","策略","因子","技术","短线","数据源","产品"];return(n,p)=>{const o=Ft("qc-icon"),C=Ft("el-input");return ve(),pe("div",eg,[he("div",tg,[he("span",null,Le(n.t("glossary.title")),1),lt(C,{modelValue:c.value,"onUpdate:modelValue":p[0]||(p[0]=y=>c.value=y),class:"qc-glossary-search",placeholder:n.t("glossary.search"),clearable:"",size:"small"},{prefix:aa(()=>[lt(o,{name:"search",size:14})]),_:1},8,["modelValue","placeholder"])]),he("div",ag,[(ve(!0),pe(rt,null,qt(["all"].concat(r),y=>(ve(),pe("span",{key:y,class:ct(["qc-glossary-tab",{"is-active":t.value===y}]),role:"tab",onClick:k=>t.value=y},Le(y==="all"?n.t("glossary.title"):n.t("glossary.cat."+y)),11,sg))),128))]),d.value?(ve(),pe("div",ng,Le(n.t("common.loading")),1)):x.value.length?(ve(),pe("div",ig,[(ve(!0),pe(rt,null,qt(x.value,y=>(ve(),pe("div",{key:y.key,class:"qc-glossary-item"},[he("div",og,[he("span",rg,Le(n.t("glossary.term."+y.key)),1),he("span",cg,Le(n.t("glossary.cat."+y.category)),1)]),he("div",dg,Le(y.definition),1),he("div",ug,[he("span",vg,Le(n.t("glossary.calc"))+":",1),he("span",null,Le(y.calc),1)])]))),128))])):(ve(),pe("div",lg,Le(n.t("glossary.empty")),1))])}}};(function(){const{ref:a,computed:e,inject:f}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
    `,setup(){const t=f("qcState");if(!t)return{};const c=a(!1),d=a(localStorage.getItem("qc.hideNonTradingBanner")==="1"),x=()=>{d.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},r=e(()=>t.marketData&&t.marketData.value||{}),n=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:t.menus,marketData:r,bannerDismissed:d,dismissBanner:x,goMerrill:n,currentPage:t.currentPage,currentSubPage:t.currentSubPage,currentUser:t.currentUser,currentPageName:t.currentPageName,searchQuery:t.searchQuery,searchStocks:t.searchStocks,onSearchSelect:t.onSearchSelect,selectedDate:t.selectedDate,onDateChange:t.onDateChange,disabledDate:t.disabledDate,refreshCalendarData:t.refreshCalendarData,exportCSV:t.exportCSV,loading:t.loading,lastLoadTime:t.lastLoadTime,showUserMenu:c,resetSetupWizard:t.resetSetupWizard,showChangePassword:t.showChangePassword,themes:t.themes,currentTheme:t.currentTheme,changeTheme:t.changeTheme,handleLogout:t.handleLogout,subPageNames:t.subPageNames,keyClick:t.keyClick,t:t.t,subTabLabel:function(p,o){const C="sub."+p.key+"."+o,y=t.t(C);if(y!==C)return y;const k="sub."+o,_=t.t(k);return _!==k&&_?_:t.subPageNames[o]||o}}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                </div>`,setup(){const e=a("qcState");if(!e)return{};const{ref:f,computed:t}=Vue,c=f(0),d=f(0),x=f(!1),r=t(()=>{const E={day:"date",week:"week",month:"month",year:"year"},I=e.currentView&&e.currentView.value||"day";return E[I]||"date"}),n={day:"日",week:"周",month:"月",year:"年"};function p(E){return e.t&&e.t("view."+E)||n[E]||E}function o(E){e.switchView?e.switchView(E):e.currentView&&(e.currentView.value=E)}let C=null;function y(E){const I=E.touches&&E.touches[0];I&&(c.value=I.clientX,d.value=I.clientY)}async function k(){if(!x.value){x.value=!0;try{await e.refreshCalendarData()}catch{}C&&clearTimeout(C),C=setTimeout(()=>{x.value=!1},500)}}function _(E){if(!(window.innerWidth<=768))return;const I=E.changedTouches&&E.changedTouches[0];if(!I)return;const F=window.__quantModules&&window.__quantModules.gestures||{};if((typeof F.judgePullToRefresh=="function"?F.judgePullToRefresh(d.value,I.clientY):I.clientY-d.value>=60)&&(window.scrollY||0)<=0){E.stopPropagation(),k();return}if(e.currentSubPage.value==="pool")return;const H=I.clientX-c.value,W=I.clientY-d.value;Math.abs(H)>50&&Math.abs(H)>Math.abs(W)*1.2&&(e.navigateDate(H<0?1:-1),E.stopPropagation())}const S=f(!1),A=f(!1),P=f(""),m=f(null),l=f([]);function h(E){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[E]||E}async function L(){if(e.selectedDate.value){S.value=!0,A.value=!0,P.value="",m.value=null,l.value=[];try{const E=await fetch("/api/calendar/"+e.selectedDate.value+"/compare"),I=await E.json();if(!E.ok)throw new Error(I.detail||"HTTP "+E.status);m.value=I;const F=I&&I.comparison||{},X=[];for(const H of Object.keys(F)){if(H==="all_intersection")continue;const W=F[H]||{},ee=H.split("_vs_");X.push({label:h(ee[0])+" ↔ "+h(ee[1]),interCount:W.intersection_count||0,inter:(W.intersection||[]).join(", "),onlyS1Count:W.only_s1_count||0,onlyS1:(W.only_s1||[]).join(", "),onlyS2Count:W.only_s2_count||0,onlyS2:(W.only_s2||[]).join(", ")})}l.value=X}catch(E){P.value=String(E&&E.message?E.message:E)}finally{A.value=!1}}}let K="";return Vue.watch(()=>{const E=e.stockPool,I=E&&E.value||[];return{n:I.length,first:I[0]&&I[0].code,split:!!e.detailSplitEnabled.value}},(E,I)=>{if(!E.split||!E.first||E.n===0)return;const F=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,X=(e.stockPool.value||[]).some(H=>H.code===F);if(!(e.externalStockActive&&(!F&&e.externalStockActive(null)||F&&e.externalStockActive(F)))&&(!F||!X)){if(K===E.first&&F&&X===!1&&E.n>1)return;K=E.first,e.showStockDetail&&e.showStockDetail(E.first)}},{immediate:!0}),{...e,calType:r,pullRefreshing:x,onCalTouchStart:y,onCalTouchEnd:_,viewLabel:p,switchViewLocal:o,compareVisible:S,compareLoading:A,compareError:P,compareData:m,comparePairs:l,openStrategyCompare:L}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:`
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
    `,setup(){const e=a("qcState"),f=Vue.ref(!1);if(!e)return{};const{computed:t}=Vue;let c=0;const d=t(()=>{var O;return((O=e.merrillData)==null?void 0:O.value)||{}}),x=t(()=>{var O;return((O=e.marketData)==null?void 0:O.value)||{}}),r=t(()=>{var O;return((O=e.dashboardData)==null?void 0:O.value)||{}}),n=t(()=>{var O;return((O=e.healthMetrics)==null?void 0:O.value)||[]}),p=t(()=>{var O;return((O=e.filteredConsensusRank)==null?void 0:O.value)||[]}),o=t(()=>{const O={};for(const te of p.value)te.code&&te.name&&(O[te.code]=te.name);return O}),C={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function y(O){return C[O]||O}const k=t(()=>x.value.date||r.value.latest_date||"-"),_=t(()=>{const O=x.value;return!O||Object.keys(O).length===0?"数据加载中...":O.is_trading_day&&O.in_trading_hours?"● 交易中":O.is_trading_day?"已收盘":"○ 非交易日"}),S=t(()=>{const O=d.value.next_stage_prediction;return O&&O.next_stage_name&&O.transition_probability>.2?`→${O.next_stage_name} ${(O.transition_probability*100).toFixed(2)}%`:""}),A=t(()=>{const O=[],te=r.value.pool_changes||{},Ce=te.new_count||0;if(Ce>0){const wt=te.new_stock_names||{},Qe=(te.new_stocks||[]).map(Ge=>wt[Ge]||o.value[Ge]||Ge).slice(0,4).join("、");O.push({icon:"sparkles",level:"new",text:`今日新入池 ${Ce} 只${Qe?" · "+Qe:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(e.currentPage.value="calendar",e.currentSubPage.value="pool"),e.statusFilter.value="new"}})}for(const wt of n.value.filter(Qe=>Qe.degraded))O.push({icon:"alert-triangle",level:"warn",text:`数据源 ${y(wt.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});const Ie=d.value.timing;Ie&&Ie.progress_percent&&Ie.progress_percent>100?O.push({icon:"clock",level:"warn",text:`美林「${d.value.name}」已超期 ${Ie.progress_percent}%`,action:()=>{e.currentSubPage.value="merrill"}}):Ie&&Ie.maturity&&d.value.name&&O.push({icon:"clock",level:"info",text:`美林「${d.value.name}」阶段成熟度 ${Ie.maturity}`,action:()=>{e.currentSubPage.value="merrill"}});const Ue=x.value;return Ue&&Ue.is_trading_day===!1&&Ue.date&&O.push({icon:"calendar",level:"info",text:`${Ue.date} 非交易日`,action:()=>{e.currentSubPage.value="market"}}),O}),P=t(()=>{const O=[],te=d.value.name||"",Ce=d.value.timing||{},Ie=["复苏","成长","过热"],Ue=["滞胀","衰退"];Ie.some(ot=>te.includes(ot))&&O.push({kind:"opportunity",source:"美林",text:te+" 顺势",action:()=>{e.currentSubPage.value="merrill"}}),Ue.some(ot=>te.includes(ot))&&O.push({kind:"risk",source:"美林",text:te+" 防守",action:()=>{e.currentSubPage.value="merrill"}}),Ce.progress_percent&&Ce.progress_percent>100&&O.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{e.currentSubPage.value="merrill"}});const wt=r.value.pool_changes||{},Qe=(wt.new_count||0)-(wt.out_count||0);Qe>=3?O.push({kind:"opportunity",source:"池变动",text:"净入池 +"+Qe,action:()=>{e.statusFilter.value="new",e.currentPage.value="calendar",e.currentSubPage.value="pool"}}):Qe<=-3&&O.push({kind:"risk",source:"池变动",text:"净出池 "+Qe,action:()=>{e.currentSubPage.value="consensus"}});const Ge=x.value.market_sentiment,_t=Ge&&Ge.text||"";(_t.includes("乐观")||_t.includes("积极")||_t.includes("亢奋"))&&O.push({kind:"opportunity",source:"情绪",text:_t,action:()=>{e.currentSubPage.value="market"}}),(_t.includes("悲观")||_t.includes("恐慌")||_t.includes("低迷"))&&O.push({kind:"risk",source:"情绪",text:_t,action:()=>{e.currentSubPage.value="market"}});for(const ot of n.value.filter(gt=>gt.degraded))O.push({kind:"risk",source:"数据",text:y(ot.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});return O}),m=t(()=>{var O;return((O=e.merrillTimeline)==null?void 0:O.value)||e.merrillTimeline||{cycles:[]}}),l=t(()=>{var O;return((O=e.timelineLoading)==null?void 0:O.value)||!1});function h(O){const te=e.showStageDetail;typeof te=="function"&&te(O)}function L(O){const te=e.merrillStagesConfig,Ie=(te&&te.value?te.value:te||{})[O]||{};return Ie.color||Ie.bg_color||"var(--color-primary)"}function K(O){const te=e.merrillStagesConfig,Ce=te&&te.value?te.value:te||{};return Ce[O]&&Ce[O].name||""}function E(){const O=e.merrillStagesConfig;return O&&O.value?O.value:O||{}}function I(O){return E()[O]&&E()[O].description||""}const F=Vue.ref([]),X=Vue.ref(null),H=Vue.ref(!1),W=Vue.ref(!1),ee=Vue.ref(7),ae=Vue.ref(""),B=Vue.ref(""),U=Vue.computed(()=>{const O=new Set;return(F.value||[]).forEach(function(te){te.task&&O.add(te.task)}),Array.from(O).sort()}),q=Vue.computed(function(){const O=X.value&&X.value.success_rate||0;return O>=80?"color-success":O>=50?"color-warning":"color-danger"});function s(O,te){return O>0&&te/O>=.8?"status-ok":O>0&&te/O>=.5?"status-warn":"status-bad"}async function b(){const O=++c;H.value=!0,W.value=!1;try{const te=window.__quantModules&&window.__quantModules.core||{},Ce=typeof te.authHeaders=="function"?te.authHeaders():{},Ie=new URLSearchParams({days:String(ee.value)});ae.value&&Ie.set("task",ae.value),B.value&&Ie.set("status",B.value);const[Ue,wt]=await Promise.all([fetch("/api/system/execution-history?"+Ie.toString(),{headers:Ce}).then(function(Qe){return Qe.json()}),fetch("/api/system/execution-summary?days="+ee.value,{headers:Ce}).then(function(Qe){return Qe.json()})]);if(O!==c)return;F.value=Ue&&Ue.data||[],X.value=wt&&wt.data||null}catch(te){console.error("[execution] 执行数据加载失败:",te),W.value=!0}finally{O===c&&(H.value=!1)}}const i=window.__quantModules&&window.__quantModules.i18n||{},g=typeof i.t=="function"?i.t:function(O){return String(O)},Z=Vue.ref([]),R=Vue.ref(null),w=Vue.ref(null),v=Vue.ref(""),M=Vue.ref([]),u=Vue.ref(!1);let N=null;const oe=Vue.computed(function(){const O=w.value&&w.value.dates||[];return O.length&&!v.value&&(v.value=O[O.length-1].date),O}),J=Vue.computed(function(){const O=(Z.value||[]).find(function(Ce){return Ce.enabled});if(!O||O.countdown_seconds==null)return"—";const te=O.countdown_seconds;return Math.floor(te/3600)+"h"+String(Math.floor(te%3600/60)).padStart(2,"0")+"m"}),D=Vue.computed(function(){const O=(Z.value||[]).find(function(te){return te.enabled});if(!O||O.countdown_seconds==null||O.countdown_seconds<0)return"";try{return new Date(Date.now()+O.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),G=Vue.computed(function(){const O=R.value;return!O||O.phase==="idle"?g("exec.waiting"):O.phase==="running"?g("exec.running")+(O.current_sid?" · "+O.current_sid:""):O.phase==="done"?g("exec.done"):g("exec.failed")}),ie=Vue.computed(function(){return R.value&&R.value.phase==="running"?"loader":"check-circle-2"}),ge=Vue.computed(function(){const O=w.value&&w.value.dates||[];return O.length?O[O.length-1].date:"—"}),qe=Vue.computed(function(){const O=w.value&&w.value.dates||[],te=O[O.length-1];return te&&te.visible?"color-success":"color-danger"}),$=Vue.computed(function(){const O=w.value&&w.value.dates||[],te=O[O.length-1];return te?te.day_view_total:"—"});function ue(O){const te=window.__quantModules&&window.__quantModules.core||{},Ce=typeof te.authHeaders=="function"?te.authHeaders():{};return fetch(O,{headers:Ce}).then(function(Ie){return Ie.json()})}async function De(){const O=++c;try{const[te,Ce,Ie]=await Promise.all([ue("/api/strategies/execution/plan"),ue("/api/strategies/execution/status"),ue("/api/strategies/execution/results?days=7")]);if(O!==c)return;Z.value=te&&te.data&&te.data.plans||[],R.value=Ce&&Ce.data||null,w.value=Ie&&Ie.data||null,R.value&&R.value.phase==="running"?ne():be()}catch(te){console.error("[execution-monitor] 监控数据加载失败:",te)}}function ne(){be(),N=setInterval(function(){ue("/api/strategies/execution/status").then(function(O){R.value=O&&O.data||null,R.value&&R.value.phase!=="running"&&(be(),De())}).catch(function(){})},5e3)}function be(){N&&(clearInterval(N),N=null)}async function Pe(O){if(!O)return;const te=++c;u.value=!0;try{const Ce=await ue("/api/strategies/execution/trace/"+encodeURIComponent(O));if(te!==c)return;const Ie=Ce&&Ce.data||null;M.value=Ie&&Ie.steps||[]}catch(Ce){console.error("[execution-trace] 追溯加载失败:",Ce)}finally{te===c&&(u.value=!1)}}Vue.watch(function(){return e.currentSubPage&&e.currentSubPage.value},function(O){O==="execution"?(b(),De()):be()},{immediate:!0}),Vue.watch(function(){const O=e.currentSubPage&&e.currentSubPage.value,te=e.filteredConsensusRank&&e.filteredConsensusRank.value||[],Ce=e.marketData&&e.marketData.value||{};return{sub:O,split:!!e.detailSplitEnabled.value,top5:te.slice(0,5),rank:te,indices:(Ce.indices||[]).map(function(Ie){return Ie})}},function(O,te){if(O.split){if(O.sub==="overview"){if(!O.top5.length)return;const Ce=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,Ie=O.top5.some(function(Ue){return Ue.code===Ce});(!Ce||!Ie)&&e.showStockDetail&&e.showStockDetail(O.top5[0].code)}else if(O.sub==="consensus"){if(!O.rank.length)return;const Ce=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,Ie=O.rank.some(function(Ue){return Ue.code===Ce});(!Ce||!Ie)&&e.showStockDetail&&e.showStockDetail(O.rank[0].code)}else if(O.sub==="market"){if(!O.indices.length)return;const Ce=e.indexDetail&&e.indexDetail.value&&e.indexDetail.value.code,Ie=O.indices.some(function(Ue){return Ue.code===Ce});(!Ce||!Ie)&&e.showIndexDetail&&e.showIndexDetail(O.indices[0])}}},{immediate:!0});const me=Vue.ref("band"),we=["recession","recovery","overheating","stagflation"];function xe(O){if(!O)return null;const te=String(O).split("-"),Ce=parseInt(te[0],10),Ie=parseInt(te[1]||"1",10);return isFinite(Ce)?Ce+(Ie-1)/12:null}function ce(O){const te=Math.floor(O);let Ce=Math.round((O-te)*12)+1;return Ce>12&&(Ce=12),Ce<1&&(Ce=1),te+"-"+(Ce<10?"0"+Ce:""+Ce)}function se(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.timing||{}}function fe(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.color||"var(--color-success)"}function Ne(O,te){const Ce=se(),Ie=Number(Ce.avg_duration_months)||0,Ue=Math.min(100,Number(Ce.progress_percent)||0),wt=xe(Ce.current_stage_start_date),Qe=[];let Ge=null;if((O||[]).forEach(function(je){const dt=xe(je.start);Ge==null&&dt!=null&&(Ge=dt);const At=!!(je.is_current||wt!=null&&dt===wt&&!je.duration_months),Rt=je.name||K(je.stage);if(At&&Ie>0){const mt=Ie*Ue/100;mt>.5&&Qe.push({stage:je.stage,name:Rt,months:mt,live:!0,start:je.start});const Dt=Ie-mt;Dt>.5&&Qe.push({stage:je.stage,name:"剩余(预测)",months:Dt,ghost:!0,start:je.start})}else{let mt=Number(je.duration_months)||0;if(!mt&&dt!=null){const Dt=xe(je.end);Dt!=null&&Dt>dt&&(mt=Math.max(1,Math.round((Dt-dt)*12)))}mt||(mt=1),Qe.push({stage:je.stage,name:Rt,months:mt,live:At,start:je.start,end:je.end})}if(At&&te&&Ie>0){const mt=e.merrillData&&e.merrillData.value&&e.merrillData.value.next_stage_prediction;mt&&Qe.push({stage:mt.next_stage,name:(mt.next_stage_name||"下一阶段")+" (预测)",months:Ie,ghost:!0,prob:mt.transition_probability})}}),!Qe.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};const _t=Qe.reduce(function(je,dt){return je+dt.months},0)||1,ot=Ge??0;let gt=0,st=0;const Bt=Qe.map(function(je){const dt=gt;je.ghost||(st+=je.months),gt+=je.months;const At={stage:je.stage,name:je.name,months:Math.round(je.months),ghost:!!je.ghost,live:!!je.live,prob:je.prob,left:dt/_t*100,width:Math.max(2,je.months/_t*100)},Rt=xe(je.start),mt=xe(je.end);return At.start=Rt!=null?ce(Rt):ce(ot+dt/12),At.end=mt!=null?ce(mt):"",At.predicted=Rt==null,At}),xt=Qe[Qe.length-1],Y=Qe.some(function(je){return je.ghost}),ke=xt&&xt.end?xt.end:ce(ot+_t/12);return{segs:Bt,axisStart:ce(ot),axisEnd:ke,nowPct:Y?st/_t*100:null}}function Be(O){return(O.stages||[]).some(function(te){return te.is_current})}const We=Vue.computed(function(){const O=e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[];if(!O.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};let te=null;for(let Ce=O.length-1;Ce>=0;Ce--)if(Be(O[Ce])){te=O[Ce];break}return te||(te=O[O.length-1]),Ne(te.stages,!0)});function Et(O){const te=O&&O.stages?O.stages:[];if(!te.length)return"";const Ce=te[0]&&te[0].start?String(te[0].start).slice(0,4):"",Ie=te[te.length-1]||{},Ue=Ie.end?String(Ie.end).slice(0,4):Ie.start?String(Ie.start).slice(0,4):"";return Ce||Ue?Ce?Ce+"–"+Ue:Ue:""}const pt=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).filter(function(te){return!Be(te)}).map(function(te){return{label:te.label,years:Et(te),segs:Ne(te.stages,!1).segs}})}),Pt=we,Se=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).map(function(te){const Ce={};we.forEach(function(Ue){Ce[Ue]=0});let Ie=null;return(te.stages||[]).forEach(function(Ue){Ce[Ue.stage]!=null&&(Ce[Ue.stage]+=Number(Ue.duration_months)||0),Ue.is_current&&(Ie=Ue.stage)}),{label:te.label,sum:Ce,cur:Ie}})}),Ee=Vue.computed(function(){let O=0;return Se.value.forEach(function(te){we.forEach(function(Ce){te.sum[Ce]>O&&(O=te.sum[Ce])})}),O||1}),Ve=Vue.computed(function(){const O=e.merrillSnapshots&&e.merrillSnapshots.value||[],te=[];return O.forEach(function(Ce){const Ie=te[te.length-1];Ie&&Ie.stage===Ce.stage?(Ie.count++,Ie.last=Ce.timestamp):te.push({stage:Ce.stage,name:Ce.stage_name||K(Ce.stage),count:1,first:Ce.timestamp,last:Ce.timestamp})}),te}),Oe=Vue.computed(function(){return Math.max(100,Math.min(200,Number(se().progress_percent)||0))}),$e=Vue.computed(function(){const O=Number(se().progress_percent)||0;return{width:Math.max(0,Math.min(100,O/Oe.value*100))+"%",background:O>100?"linear-gradient(90deg, "+fe()+", var(--color-warning))":fe()}}),Xe=Vue.computed(function(){return 100/Oe.value*100}),Ye=Vue.computed(function(){const O=se().predicted_end;if(!O)return"";if(typeof O=="string")return O;const te=O.optimistic||O.earliest||"",Ce=O.pessimistic||O.latest||"";return te&&Ce?te+" ~ "+Ce:O.base||O.mid||te||Ce||""});var it=22;function bt(O){return"color-mix(in srgb, "+O+" "+it+"%, var(--surface-card))"}function Mt(O){const te=L(O.stage);return O.ghost?{left:O.left+"%",width:O.width+"%",color:"var(--text-primary)",borderLeft:"3px solid "+te,background:"repeating-linear-gradient(45deg, "+bt(te)+" 0, "+bt(te)+" 5px, var(--surface-card) 5px, var(--surface-card) 10px)"}:{left:O.left+"%",width:O.width+"%",background:bt(te),color:"var(--text-primary)",borderLeft:"3px solid "+te}}function Ht(O){const te=[O.name];return O.start&&te.push((O.predicted?"预计起始 ":"起始 ")+O.start+(O.end?" → "+O.end:"")),O.months&&te.push("约 "+O.months+" 个月"),O.ghost&&te.push("预测(尚未发生)"),O.prob!=null&&te.push("转移概率 "+(O.prob*100).toFixed(0)+"%"),te.join(" · ")}function sa(O,te){const Ce=L(O),Ie=Math.max(.28,te/Ee.value),Ue=Math.round(14+30*Ie);return{background:"color-mix(in srgb, "+Ce+" "+Ue+"%, var(--surface-card))",color:"var(--text-primary)"}}return{...e,todayText:k,tradingStatus:_,merrillNext:S,todayFocus:A,todaySignals:P,merrillConfigOpen:f,getTimelineStageColor:L,getTimelineStageName:K,getTimelineStageDesc:I,mcHistView:me,mcCurrentBand:We,mcHistoryBands:pt,mcStageKeys:Pt,mcMatrix:Se,mcTrailRuns:Ve,mcProgStyle:$e,mcAvgMark:Xe,mcEndRange:Ye,mcSegStyle:Mt,mcSegTitle:Ht,mcMxCellStyle:sa,merrillTimeline:m,timelineLoading:l,showTimelineStage:h,execHistory:F,execSummary:X,execLoading:H,execError:W,execDays:ee,execTaskFilter:ae,execStatusFilter:B,execTaskOptions:U,execSuccessClass:q,loadExecutionData:b,execRateClass:s,execPlan:Z,execStatus:R,execResults:w,execTraceDate:v,execTraceSteps:M,execTraceLoading:u,execResultsDates:oe,execCountdownText:J,execNextRunText:D,execPhaseText:G,execStatusIcon:ie,execLastDate:ge,execVisibleClass:qe,execVisibleText:$,loadExecutionTrace:Pe}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:`
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
    `,setup(){const e=a("qcState");if(!e)return{};function f(Y){e.currentSubPage.value=Y}function t(){se(),fe(),Ne()}Vue.watch(()=>e.currentSubPage&&e.currentSubPage.value,Y=>{Y==="autoeval"&&e.loadAiVendors&&e.loadAiVendors(),Y==="datadict"&&J(),Y==="health"&&v(),Y==="notification"&&t(),Y==="datasource"&&A(),Y!=="usage"&&s()});const c=e.themeHues||[45,220,0,140,270,320,180,25,250,-1],d=e.themeHueNames||{},x=e.themeMode||Vue.computed(()=>"light"),r=e.themeHue||Vue.ref(45);function n(Y){e.changeThemeMode&&e.changeThemeMode(Y)}function p(Y){e.changeThemeHue&&e.changeThemeHue(parseInt(Y,10))}function o(Y){return e.hueColor?e.hueColor(Y):Y<0?"hsl(0, 0%, 46%)":"hsl("+Y+", 75%, 42%)"}function C(Y){return e.hueName?e.hueName(Y):d[Y]||"自定义 "+Y}function y(Y){e.setNavMode&&e.setNavMode(Y)}const k=Vue.ref([]),_=Vue.ref([]),S=Vue.ref(!1);async function A(){S.value=!0;try{const ke=await(await fetch("/api/meta/freshness")).json();ke&&ke.success&&(_.value=ke.items||[])}catch{}S.value=!1}const P=Vue.ref(""),m=Vue.ref("read"),l=Vue.ref(""),h=Vue.ref(!1),L=()=>window.__quantModules&&window.__quantModules.core||{},K=Vue.ref([]),E=Vue.ref(!1);async function I(){E.value=!0;try{const Y=await fetch("/api/audit/logs?limit=20",{headers:L().authHeaders?L().authHeaders():{}}).then(function(ke){if(!ke.ok)throw new Error("HTTP "+ke.status);return ke.json()});K.value=Y&&Y.logs||[]}catch(Y){console.error("[system] 审计加载失败:",Y),K.value=[]}finally{E.value=!1}}const F=Vue.ref(!1),X=Vue.ref(null),H=Vue.ref(null),W=Vue.ref([]),ee=Vue.ref(null);function ae(Y){return Y==="completed"?"完成":Y==="running"?"运行中":Y==="pending"?"排队中":Y==="cancelled"?"已取消":"失败"}async function B(){try{const ke=await(await fetch("/api/jobs?limit=20")).json();ke&&ke.success&&(W.value=ke.data&&ke.data.tasks||[])}catch(Y){console.warn("[system] 加载任务队列失败:",Y)}}async function U(Y){try{await fetch("/api/jobs/"+Y+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),B()}catch(ke){console.warn("[system] 取消任务失败:",ke)}}function q(){B(),ee.value=window.setInterval(B,15e3)}function s(){ee.value&&(clearInterval(ee.value),ee.value=null)}Vue.onBeforeUnmount&&Vue.onBeforeUnmount(function(){s()});const b=Vue.ref({items:[]}),i=Vue.ref([]),g=Vue.ref(null),Z=Vue.ref({data_sources:[],alerts:[]}),R=function(){return L().authHeaders?L().authHeaders():{}},w=function(Y){return fetch(Y,{headers:R()}).then(function(ke){if(!ke.ok)throw new Error("HTTP "+ke.status);return ke.json()})};async function v(){F.value=!0,X.value=null;try{const[Y,ke,je,dt]=await Promise.all([w("/api/reliability/freshness"),w("/api/reliability/heal-history?limit=20"),w("/api/reliability/startup-report"),w("/api/reliability/source-health")]);b.value=Y&&Y.data||{items:[]},i.value=ke&&ke.data||[],g.value=je&&je.data||null,Z.value=dt||{data_sources:[],alerts:[]},H.value=new Date().toLocaleTimeString()}catch(Y){console.warn("[health] 加载失败:",Y),X.value="健康数据加载失败: "+(Y.message||""),b.value={items:[]},i.value=[]}finally{F.value=!1}}const M=Vue.ref(!1),u=Vue.ref(""),N=Vue.ref(""),oe=Vue.ref({fields:[]});async function J(){M.value=!0,u.value="";try{const Y="/api/data-dict"+(N.value?"?category="+N.value:""),ke=await w(Y);oe.value=ke&&ke.data||{fields:[]}}catch(Y){console.warn("[dict] 加载失败:",Y),u.value="数据字典加载失败: "+(Y.message||""),oe.value={fields:[]}}finally{M.value=!1}}function D(Y){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[Y]||"var(--text-secondary)"}function G(Y){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[Y]||Y}const ie=Vue.computed(()=>(b.value?b.value.items||[]:[]).filter(ke=>ke.status==="stale"||ke.status==="missing").length),ge=Vue.ref("rules"),qe=Vue.ref([]),$=Vue.ref([]),ue=Vue.ref([]),De=Vue.ref(!1),ne=Vue.ref(""),be=Vue.ref("price_above"),Pe=Vue.ref(""),me=Vue.ref(!1),we=Vue.ref(60),xe=Vue.ref("");function ce(Y){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[Y]||Y}async function se(){De.value=!0;try{const Y=await(await fetch("/api/alerts/rules")).json();qe.value=Y&&Y.rules||[]}catch(Y){xe.value="规则加载失败: "+Y}finally{De.value=!1}}async function fe(){De.value=!0;try{const Y=await(await fetch("/api/alerts/history?limit=50")).json();$.value=Y&&Y.history||[]}catch(Y){xe.value="历史加载失败: "+Y}finally{De.value=!1}}async function Ne(){De.value=!0;try{const Y=await(await fetch("/api/alerts/channels")).json(),ke=await(await fetch("/api/alerts/silence")).json();ue.value=Y&&Y.channels||[],me.value=!!(ke&&ke.silenced)}catch(Y){xe.value="通道状态加载失败: "+Y}finally{De.value=!1}}function Be(Y){ge.value=Y,Y==="rules"?se():Y==="history"?fe():Ne()}async function We(){const Y=ne.value.trim();if(!Y){xe.value="请填写股票代码";return}De.value=!0;try{const ke={stock_code:Y,rule_type:be.value};if(be.value!=="new_pool"){const dt=Number(Pe.value);if(isNaN(dt)){xe.value="阈值必须为数值";return}ke.threshold=dt}const je=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ke)})).json();je&&je.rule?(xe.value="规则已添加",ne.value="",Pe.value="",se()):xe.value=je&&je.detail||"添加失败"}catch(ke){xe.value="添加失败: "+ke}finally{De.value=!1}}async function Et(Y){try{await fetch("/api/alerts/rules/"+Y.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!Y.enabled})}),Y.enabled=!Y.enabled}catch(ke){xe.value="切换失败: "+ke}}async function pt(Y){try{const ke=await(await fetch("/api/alerts/rules/"+Y.id,{method:"DELETE"})).json();ke&&ke.success?(xe.value="规则已删除",se()):xe.value="删除失败"}catch(ke){xe.value="删除失败: "+ke}}async function Pt(){try{const Y=me.value?we.value:0,ke=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:Y})})).json();me.value=!!(ke&&ke.silenced),xe.value=me.value?"已静默":"已恢复推送"}catch(Y){xe.value="静默设置失败: "+Y}}async function Se(){me.value=!1,await Pt()}function Ee(Y){return!!Y&&!Y.degraded}const Ve=Vue.computed(()=>(e&&e.analyticsRank&&e.analyticsRank.value||[]).reduce((ke,je)=>Math.max(ke,je.views||0),0)||1),Oe=()=>L().OPENAPI_ROUTE_BASE||"/api/openapi";async function $e(){h.value=!0;try{const Y=await L().apiFetch(Oe()+"/keys");k.value=Y&&Y.data||[]}catch(Y){ElementPlus.ElMessage.error("加载 API Key 失败: "+(Y.message||""))}finally{h.value=!1}}async function Xe(){try{const Y=await L().apiFetch(Oe()+"/keys",{method:"POST",body:JSON.stringify({name:P.value||"未命名",role:m.value||"read",expire_days:365})});Y&&Y.success?(l.value=Y.api_key||"",P.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await $e()):ElementPlus.ElMessage.error(Y&&(Y.detail||Y.message)||"生成失败")}catch(Y){ElementPlus.ElMessage.error("生成失败: "+(Y.message||""))}}async function Ye(){if(l.value)try{await navigator.clipboard.writeText(l.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function it(Y){try{const ke=await L().apiFetch(Oe()+"/keys/"+Y.id,{method:"DELETE"});ke&&ke.success?(ElementPlus.ElMessage.success("Key 已吊销"),l.value&&Y.prefix&&l.value.includes(Y.prefix)&&(l.value=""),await $e()):ElementPlus.ElMessage.error(ke&&(ke.detail||ke.message)||"吊销失败")}catch(ke){ElementPlus.ElMessage.error("吊销失败: "+(ke.message||""))}}const bt={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function Mt(Y){return bt[Y]||Y}const Ht=computed(()=>{var Y;return(((Y=e.healthMetrics)==null?void 0:Y.value)||[]).map(ke=>({name:Mt(ke.name),source:ke.name,success_rate:ke.success_rate,avg_latency_ms:ke.avg_latency_ms,calls:ke.calls||0,degraded:!!ke.degraded,data_age_hours:ke.data_age_hours!=null?ke.data_age_hours:null,stale:!!ke.stale,last_fetch:ke.last_fetch||ke.last_success||null}))});function sa(Y){return Y.degraded?"degraded":Y.success_rate==null?"unknown":Y.success_rate>=90?"ok":Y.success_rate>=60?"warn":"bad"}function O(Y){return Y==null?"":Y<1?"刚刚":Y<24?Math.round(Y)+"小时前":Math.floor(Y/24)+"天前"}const te=e.aiUsage||Vue.ref({}),Ce=Vue.computed(()=>{const Y=te.value&&te.value.by_model||{};return Object.entries(Y).map(([ke,je])=>({name:ke,count:je})).sort((ke,je)=>je.count-ke.count)}),Ie=Vue.computed(()=>Ce.value.reduce((Y,ke)=>Math.max(Y,ke.count),0)||1),Ue=Vue.computed(()=>Ce.value.reduce((Y,ke)=>Y+ke.count,0)||1),wt=Vue.computed(()=>Qe.value.reduce((Y,ke)=>Math.max(Y,ke.count),0)||0),Qe=Vue.computed(()=>{const Y=te.value&&te.value.by_day||{},ke=[],je=new Date;for(let dt=29;dt>=0;dt--){const At=new Date(je.getFullYear(),je.getMonth(),je.getDate()-dt),Rt=At.getFullYear()+"-"+String(At.getMonth()+1).padStart(2,"0")+"-"+String(At.getDate()).padStart(2,"0");ke.push({day:Rt,count:Y[Rt]||0})}return ke}),Ge=Vue.computed(()=>Qe.value.reduce((Y,ke)=>Math.max(Y,ke.count),0)||1),_t=Vue.computed(()=>{const Y=te.value&&te.value.by_day||{},ke=new Date,je=ke.getFullYear()+"-"+String(ke.getMonth()+1).padStart(2,"0")+"-"+String(ke.getDate()).padStart(2,"0");return Y[je]||0}),ot=Vue.computed(()=>{const Y=te.value&&te.value.by_day||{},ke=Object.keys(Y).filter(je=>(Y[je]||0)>0);return ke.length?ke[ke.length-1]:""});function gt(Y){e.analyticsDays&&(e.analyticsDays.value=Y),typeof e.loadAnalytics=="function"&&e.loadAnalytics()}const st='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',Bt='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function xt(Y){return Y?Bt:st}return q(),{...e,themeHues:c,themeHueNames:d,themeMode:x,themeHue:r,onThemeModeChange:n,setThemeHue:p,hueColor:o,hueName:C,onNavModeChange:y,analyticsMaxViews:Ve,aiModelRank:Ce,aiModelMax:Ie,aiDayTrend:Qe,aiDayMax:Ge,todayAiCalls:_t,lastAiCallDay:ot,aiTotal:Ue,aiDayPeak:wt,setAnalyticsDays:gt,viewIcon:xt,openApiKeys:k,openApiKeyName:P,openApiKeyRole:m,newOpenApiKey:l,openApiLoading:h,loadOpenApiKeys:$e,generateOpenApiKey:Xe,copyOpenApiKey:Ye,revokeOpenApiKey:it,healthRows:Ht,healthClass:sa,fmtAge:O,staleAssetCount:ie,jobQueue:W,loadJobQueue:B,cancelJob:U,jobStatusText:ae,auditLogs:K,auditLoading:E,loadAuditLogs:I,healthLoading:F,healthError:X,healthUpdatedAt:H,freshnessData:b,healHistory:i,startupReport:g,sourceHealth:Z,refreshHealth:v,statusColor:D,statusLabel:G,sourceOk:Ee,dictLoading:M,dictError:u,dictCategory:N,dictData:oe,loadDataDict:J,ncTab:ge,ncRules:qe,ncHistory:$,ncChannels:ue,ncLoading:De,ncNewCode:ne,ncNewType:be,ncNewThreshold:Pe,ncSilence:me,ncSilenceMinutes:we,ncMsg:xe,ncTypeLabel:ce,onNcTab:Be,loadAlertRules:se,loadAlertHistory:fe,loadAlertChannels:Ne,addAlertRule:We,toggleAlertRule:Et,removeAlertRule:pt,applySilence:Pt,clearSilence:Se,freshnessItems:_,freshnessLoading:S,loadFreshness:A,goSystemSub:f}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:`
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
                </div>`,setup(){const{ref:e,watch:f,onUnmounted:t}=Vue,c=a("qcState");if(!c)return{};function d(){if(!c.hasMoreAiHistory||!c.loadMoreAiHistory||c.currentPage.value!=="ai"||c.currentSubPage.value!=="history")return;const ge=document.documentElement;ge.scrollTop+window.innerHeight>=ge.scrollHeight-300&&c.loadMoreAiHistory()}window.addEventListener("scroll",d,{passive:!0}),t(()=>window.removeEventListener("scroll",d));const x=e(null),r=e(!1),n=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function p(ge){return!ge||ge.total===0||ge.rate===null||ge.rate===void 0?"--":ge.rate.toFixed(2)+"%"}const o=e(5);function C(ge){o.value=ge}function y(ge,qe){if(!ge)return"--";if(ge.available===!1)return"— 数据不可达";const $=ge["hit_n"+qe];return $===!0?"✓ 命中":$===!1?"✗ 未中":"– 中性/待验证"}async function k(){r.value=!0;try{const qe=await(await fetch("/api/ai/track")).json();x.value=qe&&qe.success?qe.data:null}catch(ge){console.warn("[eval-track] 评估命中率加载失败:",ge),x.value=null}finally{r.value=!1}}f(function(){return c.currentPage.value+"/"+c.currentSubPage.value},function(ge){ge==="ai/evaluation-analysis"&&k()},{immediate:!0});const _=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:S,summary:A,trades:P,loading:m,loadError:l,showAddForm:h,addForm:L,addSaving:K,tradeFormVisible:E,tradeForm:I,tradeSaving:F,portfolioTab:X,equityDays:H,equityLoading:W,equityNote:ee,equityHasData:ae,loadPortfolio:B,addPosition:U,removePosition:q,openTradeForm:s,submitTrade:b,loadTrades:i,loadEquity:g,fmtSigned:Z,fmtSignedPct:R,signClass:w,riskTab:v,riskLoading:M,riskNote:u,riskHasData:N,riskData:oe,riskMetricList:J,loadRisk:D}=_;f(S,function(ge){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((ge||[]).map(function(qe){return{code:qe.stock_code,name:qe.stock_name||qe.stock_code}}))},{deep:!0}),f(function(){return c.currentPage.value+"/"+c.currentSubPage.value},function(ge){ge==="ai/portfolio"?(B(),i(),g(H?H.value:30),typeof D=="function"&&D()):ge==="ai/overview"&&B()},{immediate:!0});let G="",ie=!1;return f(function(){const ge=c.currentSubPage&&c.currentSubPage.value,qe=!!(c.detailSplitEnabled&&c.detailSplitEnabled.value),$={sub:ge,split:qe,kind:"",view:"",key:"",first:null,expandList:null,expandFn:null};if(ge==="history"){const ue=c.aiHistoryView&&c.aiHistoryView.value||"date",De=ue==="date"?c.groupedByDate:ue==="month"?c.groupedByMonth:c.aiHistoryByStock,ne=De&&De.value||{},be=Object.keys(ne);$.kind="history",$.view=ue,$.key=be.length?be[0]:"",$.first=be.length&&(ne[be[0]]||[])[0]||null,$.expandList=ue==="date"?c.expandedDates:ue==="month"?c.expandedMonths:c.expandedStocks,$.expandFn=ue==="date"?c.toggleDateExpand:ue==="month"?c.toggleMonthExpand:c.toggleStockExpand}else if(ge==="chat_history"){const ue=c.chatHistoryView&&c.chatHistoryView.value||"date",De=ue==="date"?c.chatGroupedByDate:ue==="month"?c.chatGroupedByMonth:c.chatGroupedByStock,ne=De&&De.value||{},be=Object.keys(ne);$.kind="chat",$.view=ue,$.key=be.length?be[0]:"",$.first=be.length&&(ne[be[0]]||[])[0]||null,$.expandList=ue==="date"?c.expandedChatDates:ue==="month"?c.expandedChatMonths:c.expandedChatStocks,$.expandFn=ue==="date"?c.toggleChatDateExpand:ue==="month"?c.toggleChatMonthExpand:c.toggleChatStockExpand}return $},function(ge){if(!ge.split||!ge.first||!ge.kind)return;const qe=ge.sub!==G,$=c.stockDetail&&c.stockDetail.value,ue=!!($&&$.stock);if(!qe&&ue||ie)return;G=ge.sub,ie=!0;try{ge.key&&ge.expandList&&ge.expandFn&&ge.expandList.value&&ge.expandList.value.indexOf(ge.key)<0&&ge.expandFn(ge.key)}catch{}const De=ge.kind==="history"?c.viewAiResult(ge.first):c.viewChatSession(ge.first);De&&typeof De.finally=="function"?De.finally(function(){ie=!1}):ie=!1},{immediate:!0}),{...c,trackData:x,trackLoading:r,trackWindows:n,fmtTrackRate:p,loadTrack:k,trackWindow:o,setTrackWindow:C,trackHitText:y,positions:S,summary:A,trades:P,loading:m,loadError:l,showAddForm:h,addForm:L,addSaving:K,tradeFormVisible:E,tradeForm:I,tradeSaving:F,portfolioTab:X,equityDays:H,equityLoading:W,equityNote:ee,equityHasData:ae,loadPortfolio:B,addPosition:U,removePosition:q,openTradeForm:s,submitTrade:b,loadTrades:i,loadEquity:g,fmtSigned:Z,fmtSignedPct:R,signClass:w,riskTab:v,riskLoading:M,riskNote:u,riskHasData:N,riskData:oe,riskMetricList:J,loadRisk:D}}}})();(function(){const{ref:a,computed:e,watch:f,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:`
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
                </div>`,setup(){const c=t("qcState"),d=Vue.ref(!1),x=Vue.ref(!1);let r=0;if(!c)return{};const n=a(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function p(T){n.value=T;try{localStorage.setItem("quant_strategy_mode",T)}catch{}c.currentSubPage.value="strategy-manage"}const o=a([]),C=a(!1),y=a(!1),k=a(""),_=a(null),S=a(!1),A=a(!1);async function P(){const T=++r;C.value=!0,y.value=!1;try{const Q=await fetch("/api/market/reviews?limit=30",{headers:gt()}).then(Ae=>Ae.json());if(T!==r)return;Q&&Q.success?o.value=Array.isArray(Q.data)?Q.data:[]:y.value=!0}catch(Q){console.error("[market-review] 复盘列表加载失败:",Q),y.value=!0}finally{T===r&&(C.value=!1)}}function m(T){k.value=T,E(T)}function l(T){k.value===T?K():m(T)}function h(T){return T==null||isNaN(Number(T))?"—":(Number(T)>=0?"+":"")+Number(T).toFixed(2)+"%"}function L(T){return T==null||isNaN(Number(T))?"—":Number(T).toFixed(2)}function K(){k.value="",_.value=null,A.value=!1}async function E(T){const Q=++r;S.value=!0,A.value=!1,_.value=null;try{const Ae=T?"/api/market/review?date="+encodeURIComponent(T):"/api/market/review",ft=await fetch(Ae,{headers:gt()}).then(z=>z.json());if(Q!==r)return;ft&&ft.success?_.value=ft.data:A.value=!0}catch(Ae){console.error("[market-review] 复盘详情加载失败:",Ae),A.value=!0}finally{Q===r&&(S.value=!1)}}function I(T){return T>0?"up":T<0?"down":"flat"}function F(T){return T==null||isNaN(Number(T))?"—":(T>0?"+":"")+Number(T).toFixed(2)+"%"}function X(T){const Q={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(T||{}).map(function(Ae){const ft=Ae[0],z=Ae[1],le=!z||z==="unavailable"||z==="数据不可达";return{label:Q[ft]||ft,value:le?"数据不可达":z,unavailable:le}})}const H=a([]),W=a(!1),ee=a(!1),ae=a(""),B=a(""),U=a(""),q=a({}),s=a(!1),b=a(""),i=a(""),g=a([]),Z=a([]),R=a(""),w=a(""),v=a(!0),M=a(!0),u=a("20:00"),N=a("default"),oe=a(!1),J=a(""),D=e(function(){return H.value.find(function(T){return T.id===U.value})||null});async function G(T,Q){Q=Q||{},Q.headers=Object.assign({},Q.headers||{});const Ae=localStorage.getItem("quant_token")||"";return Ae&&(Q.headers.Authorization="Bearer "+Ae),fetch(T,Q)}async function ie(){const T=++r;W.value=!0,ee.value=!1,ae.value="",B.value="";try{const Q=await G("/api/strategies").then(function(ft){return ft.json()});if(T!==r)return;let Ae=null;Array.isArray(Q)?Ae=Q:Q&&Array.isArray(Q.strategies)?(Ae=Q.strategies,Q.warn&&(B.value=String(Q.warn))):(ee.value=!0,ae.value=Q&&Q.detail?String(Q.detail):"策略列表加载失败（接口返回异常）"),Ae!==null&&(H.value=Ae,H.value.length&&!U.value&&(U.value=H.value[0].id,ge()))}catch(Q){console.error("[research] 策略列表加载失败:",Q),ee.value=!0,ae.value="策略列表加载失败: "+(Q&&Q.message||"网络错误")}finally{T===r&&(W.value=!1)}}function ge(){const T=D.value;T&&(q.value={},T.schema.forEach(function(Q){q.value[Q.key]=Q.default}),i.value="",ce(),qe(),ne())}async function qe(){if(!U.value){Z.value=[];return}try{const T=await G("/api/strategies/"+U.value+"/profiles").then(function(Q){return Q.json()});Z.value=T&&T.data&&T.data.profiles||[],R.value=""}catch(T){console.error("[research] 方案列表加载失败:",T),Z.value=[]}}async function $(){d.value=!0;const T=(w.value||"").trim();if(!T){window._core&&window._core.showToast("请输入方案名称");return}try{const Q=await G("/api/strategies/"+U.value+"/profiles",{method:"POST",body:JSON.stringify({name:T,params:q.value})}).then(function(Ae){return Ae.json()});if(Q&&Q.detail){window._core&&window._core.showToast(String(Q.detail));return}w.value="",await qe(),window._core&&window._core.showToast("方案已保存")}catch(Q){console.error("[research] 方案保存失败:",Q),window._core&&window._core.showToast("方案保存失败")}}function ue(){const T=Z.value.find(function(Q){return Q.id===R.value});T&&(Object.keys(T.params||{}).forEach(function(Q){q.value[Q]=T.params[Q]}),window._core&&window._core.showToast("已应用方案: "+T.name))}async function De(){if(R.value)try{await G("/api/strategies/"+U.value+"/profiles/"+R.value,{method:"DELETE"}).then(function(T){return T.json()}),await qe(),window._core&&window._core.showToast("方案已删除")}catch(T){console.error("[research] 方案删除失败:",T)}}async function ne(){try{const T=await G("/api/strategies/governance").then(function(ft){return ft.json()}),Ae=(T&&T.data&&T.data.strategies||{})[U.value]||{};v.value=Ae.enabled!==!1,u.value=Ae.schedule||"20:00",N.value=Ae.universe==="all"?"all":"default",M.value=Ae.show_in_calendar!==!1,J.value=Ae.last_holdings||""}catch(T){console.error("[research] 纳管状态加载失败:",T)}}async function be(){try{await G("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const T={};return T[U.value]={enabled:v.value,schedule:u.value,universe:N.value,show_in_calendar:M.value},T}()})}).then(function(T){return T.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(T){console.error("[research] 纳管更新失败:",T)}}async function Pe(){if(U.value){oe.value=!0;try{const T=await G("/api/strategies/"+U.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:b.value||void 0})}).then(function(Q){return Q.json()});if(T&&T.detail){window._core&&window._core.showToast(String(T.detail));return}window._core&&window._core.showToast("持仓已生成"),await ne()}catch(T){console.error("[research] run-once 失败:",T),window._core&&window._core.showToast("持仓生成失败")}finally{oe.value=!1}}}function me(){J.value&&window.open(J.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function we(){const T=D.value;if(!T)return;const Q=(w.value||"").trim()||T.name+"-副本";xe(Q,Object.assign({},q.value)),window._core&&window._core.showToast("已复制为副本方案: "+Q)}async function xe(T,Q){try{await G("/api/strategies/"+U.value+"/profiles",{method:"POST",body:JSON.stringify({name:T,params:Q})}).then(function(Ae){return Ae.json()}),await qe()}catch(Ae){console.error("[research] 副本保存失败:",Ae)}}async function ce(){const T=++r;if(U.value)try{const Q=await G("/api/strategies/"+U.value+"/runs?limit=5").then(function(Ae){return Ae.json()});if(T!==r)return;g.value=Array.isArray(Q)?Q:[]}catch{g.value=[]}}async function se(){if(U.value){s.value=!0;try{const T=await G("/api/strategies/"+U.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:q.value,as_of:b.value||void 0})}).then(function(Q){return Q.json()});T&&T.status==="success"?ce():alert("运行失败: "+(T.detail||JSON.stringify(T)))}catch(T){console.error("[research] 策略运行失败:",T),alert("运行失败: "+T.message)}finally{s.value=!1}}}async function fe(){if(U.value)try{const T=Object.keys(q.value).map(function(Ae){return encodeURIComponent(Ae)+"="+encodeURIComponent(q.value[Ae])}).join("&"),Q=await G("/api/strategies/"+U.value+"/ptrade-code?"+T).then(function(Ae){return Ae.json()});Q&&Q.code?i.value=Q.code:alert("导出失败: "+(Q.detail||JSON.stringify(Q)))}catch(T){console.error("[research] PTrade 导出失败:",T),alert("导出失败: "+T.message)}}function Ne(){if(!i.value)return;const T=document.createElement("textarea");T.value=i.value,document.body.appendChild(T),T.select();try{document.execCommand("copy")}catch{}document.body.removeChild(T)}f(function(){return c.currentPage.value+"/"+c.currentSubPage.value},function(T){T==="research/research-overview"&&(ie(),P(),st(),na()),(T==="research/market-review"||T==="shortterm/market-review")&&!k.value&&P(),T==="research/quant-research"&&ie(),T==="research/backtest-history"&&ze()},{immediate:!0});const Be=a("mom20"),We=a(!1),Et=a(!1),pt=a(null),Pt=a(null),Se=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],Ee=a('{"top_n":[10,20,30]}'),Ve=a(null),Oe=a(""),$e=a(!1),Xe=a(null);async function Ye(){if(!U.value){ElementPlus.ElMessage.warning("请先选择策略");return}let T;try{T=JSON.parse(Ee.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!T||Object.keys(T).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}$e.value=!0,Ve.value=null,Oe.value="";try{const Q=await fetch("/api/strategies/"+U.value+"/sweep",{method:"POST",headers:gt(),body:JSON.stringify({param_grid:T})}).then(function(Ae){return Ae.json()});Q&&Array.isArray(Q.results)?(Ve.value=Q.results,Oe.value="完成 "+Q.count+" 组"+(Q.data_degraded?" (数据不可达, 结果降级)":""),Xe.value=Q.param_stability||null):Oe.value=Q&&Q.detail||"扫描失败"}catch(Q){console.error("[sweep]",Q),Oe.value="扫描失败: "+Q.message}finally{$e.value=!1}}async function it(){const T=++r;We.value=!0;try{const Q=await G("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:U.value||"multi_factor",factor_key:Be.value,params:q.value||{}})}).then(function(ft){return ft.json()}),Ae=Q&&Q.report?Q.report.n1||{}:{};pt.value=Ae}catch(Q){console.error("[research] 因子IC分析失败:",Q),alert("因子 IC 分析失败: "+Q.message)}finally{T===r&&(We.value=!1)}}async function bt(){const T=++r;Et.value=!0;try{const Q=await G("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:U.value||"multi_factor",factor_key:Be.value,params:q.value||{}})}).then(function(Ae){return Ae.json()});Q&&Q.layers?Pt.value=Q:alert("分层回测: "+(Q.message||"无数据"))}catch(Q){console.error("[research] 分层回测失败:",Q),alert("分层回测失败: "+Q.message)}finally{T===r&&(Et.value=!1)}}const Mt=a(null),Ht=a(!1);async function sa(){const T=++r;Ht.value=!0,Mt.value=null;try{const Q=await G("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:U.value||"multi_factor",factor_key:Be.value,params:q.value||{}})}).then(function(Ae){return Ae.json()});Q&&Q.detail?Mt.value=Q.detail:alert("因子详情: "+(Q.message||"无数据"))}catch(Q){console.error("[research] 因子详情失败:",Q),alert("因子详情失败: "+Q.message)}finally{T===r&&(Ht.value=!1)}}const O=a([]),te=a(null),Ce=a(null),Ie=a(null),Ue=a(""),wt=a(!1),Qe=a(!1),Ge=a(""),_t=a(""),ot=a("");function gt(){const T=localStorage.getItem("quant_token")||"";return T?{Authorization:"Bearer "+T,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function st(){const T=++r;try{const Q=await fetch("/api/strategies/variants",{headers:gt()}).then(function(Ae){return Ae.json()});if(T!==r)return;O.value=Q&&Q.data&&Q.data.variants||[]}catch(Q){console.error("[i3a] 加载 variants 失败:",Q)}}async function Bt(){if(!U.value){Ge.value="请先在量化研究选择母本策略";return}Qe.value=!0,Ge.value="";try{const T=await fetch("/api/strategies/"+U.value+"/clone",{method:"POST",headers:gt(),body:JSON.stringify({name:(w.value||"").trim()||void 0,params:Object.assign({},q.value)})}).then(function(Ae){return Ae.json()});if(T&&T.detail){Ge.value=String(T.detail);return}const Q=T&&T.data;Q&&Q.sid&&(te.value=Q.sid,Ge.value="已复制为新策略: "+Q.name,await st(),await Y(Q.sid))}catch(T){console.error("[i3a] 复制失败:",T),Ge.value="复制失败: "+T.message}finally{Qe.value=!1}}async function xt(T){te.value=T,Ge.value="",Ue.value="",await Y(T)}async function Y(T){try{const Q=await fetch("/api/strategies/"+T+"/selection-spec",{headers:gt()}).then(function(Ae){return Ae.json()});Q&&Q.data&&Q.data.spec&&(Ce.value=Object.assign({},Q.data.spec),Ie.value=Q.data.fields,_t.value=(Q.data.spec.industry_scope||[]).join(","),ot.value=(Q.data.spec.market_cap_range||[]).join(","))}catch(Q){console.error("[i3a] 加载 spec 失败:",Q)}}async function ke(){if(x.value=!0,!(!te.value||!Ce.value))try{Ce.value.industry_scope=_t.value?_t.value.split(/[,，]/).map(function(Q){return Q.trim()}).filter(Boolean):[],Ce.value.market_cap_range=ot.value?ot.value.split(/[,，]/).map(Number).filter(function(Q){return!isNaN(Q)}):[];const T=await fetch("/api/strategies/"+te.value+"/selection-spec",{method:"PUT",headers:gt(),body:JSON.stringify({spec:Ce.value})}).then(function(Q){return Q.json()});T&&T.data&&T.data.spec&&(Ce.value=T.data.spec,Ge.value="SelectionSpec 已保存")}catch(T){console.error("[i3a] 保存 spec 失败:",T),Ge.value="保存失败"}}async function je(){if(!te.value){Ge.value="请先选择/创建微调策略";return}Qe.value=!0,Ge.value="";try{const T=await fetch("/api/strategies/"+te.value+"/run-once",{method:"POST",headers:gt(),body:"{}"}).then(function(Q){return Q.json()});Ge.value=T&&T.detail?String(T.detail):"持仓已生成: "+(T&&T.data&&T.data.symbols||0)+" 只"}catch(T){console.error("[i3a] run-once 失败:",T),Ge.value="生成持仓失败"}finally{Qe.value=!1}}async function dt(){if(!te.value){Ge.value="请先选择/创建微调策略";return}Ce.value||await Y(te.value),wt.value=!0,Ge.value="";try{const T=await fetch("/api/strategies/"+te.value+"/ai-trade-code",{method:"POST",headers:gt(),body:JSON.stringify({spec:Ce.value})}).then(function(Q){return Q.json()});if(T&&T.detail){Ge.value=String(T.detail);return}T&&T.data&&(Ue.value=T.data.code||"",T.data.api_errors&&T.data.api_errors.length?Ge.value="生成成功(含 API 校验告警 "+T.data.api_errors.length+" 条)":Ge.value="AI 交易码已生成, 已通过矩阵内校验")}catch(T){console.error("[i3a] AI 交易码失败:",T),Ge.value="AI 生成失败: "+T.message}finally{wt.value=!1}}function At(){if(Ue.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Ue.value).then(function(){Ge.value="代码已复制"});else{const T=document.createElement("textarea");T.value=Ue.value,document.body.appendChild(T),T.select(),document.execCommand("copy"),document.body.removeChild(T),Ge.value="代码已复制"}}const Rt=a(""),mt=a(""),Dt=a([]),Ut=a(""),$t=a(""),St=a(""),ht=a(null),ta=a(!1),zt=a(!1),da=a(!1);function Xt(){const T=localStorage.getItem("quant_token")||"";return T?{Authorization:"Bearer "+T,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function na(){const T=++r;try{const Q=await fetch("/api/strategies/custom",{headers:Xt()}).then(function(Ae){return Ae.json()});if(T!==r)return;Dt.value=Q&&Q.data&&Q.data.customs||[]}catch(Q){console.error("[i3b] 加载自定义策略失败:",Q)}}async function ut(){if(!mt.value.trim()){St.value="请描述策略思路";return}ta.value=!0,St.value="";try{const T=await fetch("/api/strategies/custom",{method:"POST",headers:Xt(),body:JSON.stringify({name:Rt.value.trim()||"自定义策略",prompt:mt.value})}).then(function(Q){return Q.json()});if(T&&T.detail){St.value=String(T.detail);return}T&&T.data&&($t.value=T.data.code||"",St.value="AI 代写成功: "+T.data.sid+(T.data.api_errors&&T.data.api_errors.length?" (API 告警 "+T.data.api_errors.length+" 条)":" (校验通过)"),await na())}catch(T){console.error("[i3b] AI 代写失败:",T),St.value="AI 代写失败: "+T.message}finally{ta.value=!1}}async function Zt(){if(Ut.value)try{const T=await fetch("/api/strategies/custom/"+Ut.value+"/code",{headers:Xt()}).then(function(Q){return Q.json()});T&&T.data&&($t.value=T.data.code||"",St.value="")}catch(T){console.error("[i3b] 读取代码失败:",T)}}async function ua(){if(!Ut.value){St.value="请先选择自定义策略";return}zt.value=!0,St.value="";try{const T=await fetch("/api/strategies/custom/"+Ut.value+"/backtest",{method:"POST",headers:Xt(),body:"{}"}).then(function(Q){return Q.json()});if(T&&T.detail){St.value=String(T.detail);return}T&&T.data&&(ht.value=T.data,St.value="回测完成")}catch(T){console.error("[i3b] 回测失败:",T),St.value="回测失败: "+T.message}finally{zt.value=!1}}async function wa(){if(!Ut.value){St.value="请先选择自定义策略";return}da.value=!0,St.value="";try{const T=await fetch("/api/strategies/custom/"+Ut.value+"/ai-optimize",{method:"POST",headers:Xt(),body:JSON.stringify({backtest:ht.value})}).then(function(Q){return Q.json()});if(T&&T.detail){St.value=String(T.detail);return}T&&T.data&&($t.value=T.data.code||"",St.value="AI 优化完成"+(T.data.api_errors&&T.data.api_errors.length?" (API 告警 "+T.data.api_errors.length+" 条)":" (校验通过)"))}catch(T){console.error("[i3b] AI 优化失败:",T),St.value="AI 优化失败: "+T.message}finally{da.value=!1}}function Sa(){if($t.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText($t.value).then(function(){St.value="代码已复制"});else{const T=document.createElement("textarea");T.value=$t.value,document.body.appendChild(T),T.select(),document.execCommand("copy"),document.body.removeChild(T),St.value="代码已复制"}}const la=Vue.ref([]),V=Vue.ref(!1),_e=Vue.ref(!1),He=Vue.ref(30);async function ze(){const T=++r;V.value=!0,_e.value=!1;try{const Q=window.__quantModules&&window.__quantModules.core||{},Ae=typeof Q.authHeaders=="function"?Q.authHeaders():{},ft=await fetch("/api/backtest/history?days="+He.value,{headers:Ae}).then(function(z){return z.json()});if(T!==r)return;la.value=ft&&ft.data||[]}catch(Q){console.error("[backtest] 回测历史加载失败:",Q),_e.value=!0}finally{T===r&&(V.value=!1)}}const vt=Vue.ref([]),Ze=Vue.ref(!1),Lt=Vue.ref(!1),Kt=Vue.ref(""),Gt=Vue.ref([]),Ca=Vue.ref(""),va=Vue.ref([]),ma=Vue.ref(!1),ia=Vue.ref(!1),La={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function fa(T){return La[T]||T||"—"}function Ia(T){c&&c.navigateTo&&c.navigateTo("shortterm",T)}function pa(){c.currentSubPage.value="research-history",Pa()}async function Pa(){const T=++r;Ze.value=!0,Lt.value=!1;try{const Q=window.__quantModules&&window.__quantModules.core||{},Ae=typeof Q.authHeaders=="function"?Q.authHeaders():{},ft=Kt.value?"?type="+encodeURIComponent(Kt.value):"",z=await fetch("/api/strategies/research-history"+ft,{headers:Ae}).then(function(le){return le.json()});if(T!==r)return;vt.value=z&&z.items||[]}catch(Q){console.error("[research-history] 加载失败:",Q),Lt.value=!0}finally{T===r&&(Ze.value=!1)}}async function ka(){const T=++r;ia.value=!0;try{const Q=window.__quantModules&&window.__quantModules.core||{},Ae=typeof Q.authHeaders=="function"?Q.authHeaders():{},ft=Kt.value?"?type="+encodeURIComponent(Kt.value):"",z=await fetch("/api/strategies/research-history/export"+ft,{headers:Ae});if(!z.ok)throw new Error("HTTP "+z.status);const le=await z.blob(),de=URL.createObjectURL(le),Te=document.createElement("a");Te.href=de,Te.download="research_history.csv",document.body.appendChild(Te),Te.click(),document.body.removeChild(Te),URL.revokeObjectURL(de)}catch(Q){console.error("[research-history] 导出失败:",Q)}finally{T===r&&(ia.value=!1)}}function Na(T){const Q=Gt.value.indexOf(T);Q>=0?Gt.value.splice(Q,1):Gt.value.length<10&&Gt.value.push(T)}function Oa(T){Ca.value=Ca.value===T?"":T}async function Yt(){const T=++r,Q=Gt.value;if(!(Q.length<2)){ma.value=!0;try{const Ae=window.__quantModules&&window.__quantModules.core||{},ft=typeof Ae.authHeaders=="function"?Ae.authHeaders():{},z=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},ft),body:JSON.stringify({ids:Q})}).then(function(le){return le.json()});va.value=z&&z.items||[]}catch(Ae){console.error("[research-history] 对比失败:",Ae)}finally{T===r&&(ma.value=!1)}}}async function oa(T){try{const Q=window.__quantModules&&window.__quantModules.core||{},Ae=typeof Q.authHeaders=="function"?Q.authHeaders():{},ft=await fetch("/api/strategies/research-history/"+T,{method:"DELETE",headers:Ae}).then(function(z){return z.json()});if(ft&&ft.deleted){vt.value=vt.value.filter(function(le){return le.id!==T});const z=Gt.value.indexOf(T);z>=0&&Gt.value.splice(z,1)}}catch(Q){console.error("[research-history] 删除失败:",Q)}}return{...c,strategyManageMode:n,openStrategyManage:p,btHistory:la,btHistoryLoading:V,btHistoryError:_e,btHistoryDays:He,loadBtHistory:ze,researchHistory:vt,researchHistoryLoading:Ze,researchHistoryError:Lt,researchHistoryType:Kt,researchHistorySelected:Gt,researchDetailId:Ca,researchCompareRows:va,researchCompareLoading:ma,researchTypeLabel:fa,goShortterm:Ia,openResearchHistory:pa,loadResearchHistory:Pa,researchExportLoading:ia,exportResearchHistory:ka,toggleResearchSelect:Na,toggleResearchDetail:Oa,runResearchCompare:Yt,deleteResearchHistory:oa,marketReviews:o,marketReviewLoading:C,marketReviewError:y,selectedReviewDate:k,marketReviewDetail:_,marketReviewDetailLoading:S,marketReviewDetailError:A,loadMarketReviews:P,openMarketReview:m,toggleMarketReviewDate:l,backToMarketReviewList:K,loadMarketReviewDetail:E,marketReviewChgClass:I,marketReviewChgText:F,marketReviewSrcEntries:X,fmtPct:h,fmtEmotion:L,strategies:H,strategiesLoading:W,strategiesError:ee,strategiesErrorText:ae,strategiesWarn:B,activeStrategyId:U,activeStrategy:D,paramValues:q,strategyRunning:s,ptradeCode:i,strategyRuns:g,savingProfile:d,variantSaving:x,loadStrategies:ie,onStrategyChange:ge,runActiveStrategy:se,exportActivePtradeCode:fe,copyPtradeCode:Ne,profiles:Z,profileSelect:R,profileName:w,loadProfiles:qe,saveProfile:$,applyProfile:ue,deleteProfile:De,govEnabled:v,govSchedule:u,govUniverse:N,govRunning:oe,lastHoldings:J,loadGov:ne,updateGov:be,runOnceActive:Pe,openLastHoldings:me,cloneStrategy:we,govShowCalendar:M,factorKey:Be,factorIcLoading:We,factorLayerLoading:Et,factorIcReport:pt,factorLayerResult:Pt,factorOptions:Se,runFactorIc:it,runFactorLayer:bt,factorDetail:Mt,factorDetailLoading:Ht,runFactorDetail:sa,variants:O,variantSelected:te,variantSpec:Ce,specFields:Ie,aiCode:Ue,aiCodeLoading:wt,variantBusy:Qe,variantMsg:Ge,loadVariants:st,cloneNewStrategy:Bt,selectVariant:xt,loadVariantSpec:Y,saveVariantSpec:ke,runVariantOnce:je,genVariantAiCode:dt,copyVariantCode:At,customName:Rt,customPrompt:mt,customs:Dt,customSelected:Ut,customCode:$t,customMsg:St,customBtResult:ht,customGenLoading:ta,customBtLoading:zt,customOptLoading:da,loadCustoms:na,genCustomCode:ut,loadCustomCode:Zt,runCustomBacktest:ua,runCustomOptimize:wa,copyCustomCode:Sa,sweepGrid:Ee,sweepResult:Ve,sweepMessage:Oe,sweepLoading:$e,sweepStability:Xe,runSweep:Ye}}}})();(function(){const{inject:a,ref:e,onMounted:f,computed:t,nextTick:c}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
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
                </div>`,setup(){const d=a("qcState");if(!d)return{};const x=d.currentPage,r=d.currentSubPage,n=e(""),p=e(null),o=e(!1),C=e(!1),y=e("数据加载失败"),k=e("请检查服务后重试"),_=e(null),S=e(null),A=e(!1),P=e(!1),m=e("数据加载失败"),l=e("请检查服务后重试"),h=e(null),L=e(1),K=50,E=t(function(){const V=S.value||[];if(V.length<=200)return V;const _e=(L.value-1)*K;return V.slice(_e,_e+K)}),I=e(null),F=e(!1),X=e(!1),H=e("数据加载失败"),W=e("请检查服务后重试"),ee=e([]),ae=e(!1);async function B(){ae.value=!0;try{const V=await we("/api/shortterm/dates/summary",!1);V&&V.success&&(ee.value=V.dates||[])}catch{ee.value=[]}finally{ae.value=!1}}function U(V){V!==n.value&&(n.value=V,Y(!0))}const q=e("行业资金流"),s=e("今日"),b=e(""),i=e(null),g=e(1),Z=e(!1),R=e(!1),w=e("数据加载失败"),v=e("请检查服务后重试"),M=e(""),u=e(null),N=e(!1),oe=e(null),J=e(!1),D=e(!1),G=e(""),ie=e(""),ge=e(!1);function qe(){const V=localStorage.getItem("quant_token")||"";return V?{Authorization:"Bearer "+V,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const $={},ue=[],De=50,ne=60*1e3;let be=0,Pe=0,me=0;function we(V,_e){const He=Date.now(),ze=$[V];return!_e&&ze&&He-ze.ts<ne?Promise.resolve(ze.data):fetch(V,{headers:qe()}).then(function(vt){return vt.json()}).then(function(vt){if($[V]||ue.push(V),$[V]={ts:Date.now(),data:vt},ue.length>De){const Ze=ue.shift();delete $[Ze]}return vt})}async function xe(V){const _e=++be;o.value=!0,C.value=!1;try{const He="/api/shortterm/pools"+(n.value?"?date="+n.value:""),ze=await we(He,V);if(_e!==be)return;ze&&ze.success?(p.value=ze,c(st)):ze&&ze.detail?(C.value=!0,y.value=String(ze.detail),k.value="请先登录后再查看"):(C.value=!0,y.value="数据加载失败",k.value="请检查服务后重试")}catch{if(_e!==be)return;C.value=!0,y.value="数据加载失败",k.value="请检查服务后重试"}finally{_e===be&&(o.value=!1)}}async function ce(V){const _e=++be;A.value=!0,P.value=!1;try{const He="/api/shortterm/lhb"+(n.value?"?date="+n.value:""),ze=await we(He,V);if(_e!==be)return;ze&&ze.success?(S.value=Array.isArray(ze.rows)?ze.rows:null,h.value=ze.available===!1&&ze.reason||null,L.value=1):ze&&ze.detail?(P.value=!0,m.value=String(ze.detail),l.value="请先登录后再查看"):(P.value=!0,m.value="数据加载失败",l.value="请检查服务后重试")}catch{if(_e!==be)return;P.value=!0,m.value="数据加载失败",l.value="请检查服务后重试"}finally{_e===be&&(A.value=!1)}}const se=t(function(){const V=p.value&&p.value.ladder&&p.value.ladder.tiers;return!V||!Object.keys(V).length?"—":Object.keys(V).sort(function(_e,He){return _e-He}).map(function(_e){return _e+"板:"+V[_e]}).join(" ")}),fe=t(function(){const V=p.value&&p.value.zt||[];return _.value?V.filter(function(_e){return _e.boards===_.value}):V});function Ne(){_.value=null}const Be=t(function(){const V=I.value&&I.value.emotion&&I.value.emotion.money_effect;return!V||!V.available?"—":V.source==="settled"?"定稿记录":V.source==="realtime"?V.partial?"实时(样本不全)":"实时":"—"}),We=t(function(){const V=I.value&&I.value.emotion&&I.value.emotion.promotion&&I.value.emotion.promotion.tiers&&I.value.emotion.promotion.tiers["1进2"];return V?V.rate:null}),Et=t(function(){const V=I.value&&I.value.emotion&&I.value.emotion.sentiment_cycle;return V&&V.available&&V.current_score!=null?V.current_score.toFixed(2):"—"}),pt=t(function(){const V=I.value&&I.value.emotion&&I.value.emotion.sentiment_cycle;return!V||!V.available?"—":(V.trend||"—")+(V.day_n!=null?" · 距低谷"+V.day_n+"天":"")});t(function(){const V=I.value&&I.value.emotion;if(!V)return"";const _e=[];for(const He of["money_effect","promotion","consec_premium","sentiment_cycle"]){const ze=V[He];ze&&ze.available===!1&&ze.reason&&_e.push(String(ze.reason).replace(/^[[^]]*]s*/,""))}return _e.join("；")}),t(function(){const V=I.value&&I.value.facts;if(!V)return"";const _e=[];for(const He of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const ze=V[He];ze&&ze.available===!1&&ze.reason&&_e.push(String(ze.reason).replace(/^[[^]]*]s*/,""))}return _e.join("；")});function Pt(V){return V==null||isNaN(V)?"—":(V*100).toFixed(0)+"%"}function Se(V,_e){return V==null?"—":(typeof V=="number"?Math.round(V*100)/100:V)+(_e||"")}function Ee(V){return"tag-chip mr-4"}function Ve(V){return V==null?"":V>0?"is-rise":V<0?"is-fall":""}function Oe(V){return V==="机构"?"is-institution":V==="游资"?"is-hotmoney":V==="主力"?"is-main":""}const $e=t(function(){const V=I.value&&I.value.session_status;if(!V)return"—";const _e=I.value.date;return _e===V.latest_session&&V.settled?"已收盘":_e===V.today&&V.is_trade_day&&!V.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),Xe=t(function(){const V=I.value&&I.value.session_status;if(!V)return"";const _e=I.value.date;return _e===V.latest_session&&V.settled?"is-institution":_e===V.today&&V.is_trade_day&&!V.settled?"is-main":""});function Ye(V){V&&V.ts_code&&d&&d.showStockDetail&&d.showStockDetail(V.ts_code)}const it=t(function(){return(S.value||[]).filter(function(V){return(V.tags||[]).indexOf("机构")>=0}).reduce(function(V,_e){return V+(_e.net_buy||0)},0)}),bt=t(function(){return(S.value||[]).filter(function(V){return(V.tags||[]).indexOf("游资")>=0}).length}),Mt=t(function(){const V=(i.value||[]).filter(function(_e){return _e.main_net_inflow!=null});return V.length?V.reduce(function(_e,He){return _e.main_net_inflow>=He.main_net_inflow?_e:He}):null}),Ht=t(function(){const V=Mt.value;return V?V.name:"—"}),sa=t(function(){const V=Mt.value;return V?V.main_net_inflow:null}),O=t(function(){return M.value||"东财"}),te=t(function(){const V=(b.value||"").trim(),_e=i.value||[];return V?_e.filter(function(He){return He.name&&String(He.name).indexOf(V)>=0}):_e});function Ce(V){b.value=V||"",d&&d.currentSubPage&&(d.currentSubPage.value="sector")}const Ie=t(function(){const V=te.value;if(V.length<=200)return V;const _e=(g.value-1)*K;return V.slice(_e,_e+K)}),Ue=["09:25","09:35","10:00","11:30","14:00","15:00"],wt=t(function(){const V={};return(oe.value||[]).forEach(function(_e){V[_e.slot]=!0}),V});function Qe(V){return wt.value[V]?"is-done":V===Ge.value?"is-current":"is-empty"}const Ge=t(function(){const V=new Date,_e=(V.getHours()<10?"0":"")+V.getHours(),He=(V.getMinutes()<10?"0":"")+V.getMinutes(),ze=_e+":"+He;for(var vt=0;vt<Ue.length;vt++)if(ze===Ue[vt])return Ue[vt];for(var Ze=0;Ze<Ue.length-1;Ze++){var Lt=Ue[Ze],Kt=new Date;Kt.setHours(Number(Lt.split(":")[0]),Number(Lt.split(":")[1]),0,0);var Gt=new Date(Kt.getTime()+8*6e4);if(V>=Kt&&V<=Gt)return Lt}return""}),_t=t(function(){const V=new Date,_e=Ge.value;if(_e)return"当前处于快照窗口 "+_e+" (前后 8 分钟) — 可采集";const He=V.getHours(),ze=V.getMinutes();let vt="";for(let Ze=0;Ze<Ue.length;Ze++){const Lt=Ue[Ze].split(":");if(Number(Lt[0])>He||Number(Lt[0])===He&&Number(Lt[1])>ze){vt=Ue[Ze];break}}return vt?"下一快照时点 "+vt+" — 非窗口期不可采集":"今日快照时点已全部结束"}),ot=e(""),gt=e("info");function st(){const V=p.value&&p.value.ladder&&p.value.ladder.tiers;if(!V||!Object.keys(V).length)return;const _e=window.__quantModules&&window.__quantModules.charts;if(!_e||!_e.renderSimpleChartTo)return;const He=_.value,ze=_e.renderSimpleChartTo("shorttermLadderChart",function(){const vt=Object.keys(V).sort(function(Ze,Lt){return Number(Ze)-Number(Lt)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:vt.map(function(Ze){return Ze+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(Ze){return He&&Number(vt[Ze.dataIndex])===He?"var(--color-accent)":"var(--chart-split)"}},data:vt.map(function(Ze){return V[Ze]})}]}},{key:"shortterm-ladder"});ze&&ze.off&&(ze.off("click"),ze.on("click",function(vt){if(!vt||!vt.name)return;const Ze=parseInt(vt.name,10);isNaN(Ze)||(_.value=_.value===Ze?null:Ze)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(st);function Bt(V){if(V==null)return"—";const _e=Math.abs(V);return _e>=1e8?(V/1e8).toFixed(2)+"亿":_e>=1e4?(V/1e4).toFixed(0)+"万":V.toFixed(0)}function xt(V){return V==null?"—":(V>=0?"+":"")+V.toFixed(2)+"%"}async function Y(V){const _e=++Pe;F.value=!0,X.value=!1;try{const He="/api/shortterm/overview"+(n.value?"?date="+n.value:""),ze=await we(He,V);if(_e!==Pe)return;ze&&ze.success?I.value=ze:ze&&ze.detail?(X.value=!0,H.value=String(ze.detail),W.value="请先登录后再查看"):(X.value=!0,H.value="数据加载失败",W.value="请检查服务后重试")}catch{if(_e!==Pe)return;X.value=!0,H.value="数据加载失败",W.value="请检查服务后重试"}finally{_e===Pe&&(F.value=!1)}}async function ke(V){const _e=++be;Z.value=!0,R.value=!1;try{const He="/api/shortterm/sector-flow?indicator="+encodeURIComponent(s.value)+"&sector_type="+encodeURIComponent(q.value),ze=await we(He,V);if(_e!==be)return;ze&&ze.success&&ze.available?(i.value=ze.rows||[],M.value=ze.source||(ze.note?"同花顺":"东财"),g.value=1):ze&&ze.reason?(R.value=!0,w.value="数据加载失败",v.value=String(ze.reason).replace(/^\[[^\]]*\]\s*/,"")):ze&&ze.detail?(R.value=!0,w.value=String(ze.detail),v.value="请先登录后再查看"):(R.value=!0,w.value="数据加载失败",v.value="请检查服务后重试")}catch{if(_e!==be)return;R.value=!0,w.value="数据加载失败",v.value="请检查服务后重试"}finally{_e===be&&(Z.value=!1)}}async function je(V){const _e=++me;try{const He="/api/shortterm/review"+(n.value?"?date="+n.value:""),ze=await we(He,V);if(_e!==me)return;ze&&ze.success&&(u.value=ze.review||null)}catch{}}async function dt(){N.value=!0;try{const V="/api/shortterm/review"+(n.value?"?date="+n.value:""),_e=await fetch(V,{method:"POST",headers:qe()}).then(function(He){return He.json()});_e&&_e.success&&(u.value=_e,$[V]={ts:Date.now(),data:_e})}catch{}finally{N.value=!1}}async function At(){const V=G.value.trim();if(V){ge.value=!0,ie.value="";try{const He=await fetch("/api/shortterm/review/chat",{method:"POST",headers:qe(),body:JSON.stringify({date:overviewDate.value,question:V})}).then(function(ze){return ze.json()});ie.value=He.answer||"[无回复]"}catch{ie.value="[发送失败]"}finally{ge.value=!1}}}async function Rt(V){const _e=++be;J.value=!0;try{const He="/api/shortterm/intraday"+(n.value?"?date="+n.value:""),ze=await we(He,V);if(_e!==be)return;ze&&ze.success&&(oe.value=ze.snapshots||[])}catch{}finally{_e===be&&(J.value=!1)}}async function mt(){D.value=!0;try{const V="/api/shortterm/intraday/snapshot"+(n.value?"?date="+n.value:""),_e=await fetch(V,{method:"POST",headers:qe()}).then(function(He){return He.json()});_e&&_e.success?(_e.accepted?(ot.value="已采集 "+_e.slot+" 快照"+(_e.pools_available&&!_e.pools_available.zt?" (池源部分不可用)":""),gt.value="ok"):(ot.value="⏱ "+(_e.reason||"非快照时点"),gt.value="warn"),Rt()):ot.value="采集失败, 请稍后重试"}catch{ot.value="采集失败, 请稍后重试"}finally{D.value=!1}}function Dt(){return we("/api/shortterm/latest-session",!1).then(function(V){V&&V.date&&(n.value||(n.value=V.date))}).catch(function(){})}function Ut(){const V=r.value;V==="ztpool"?xe():V==="lhb"?ce():V==="overview"?(Y(),je()):V==="sector"?ke():V==="intraday"&&Rt()}function $t(){const V=n.value?"?date="+n.value:"";["/api/shortterm/overview"+V,"/api/shortterm/pools"+V,"/api/shortterm/lhb"+V].forEach(function(He){we(He,!1).catch(function(){})})}function St(){const V=r.value;V==="ztpool"?xe(!0):V==="lhb"?ce(!0):V==="overview"?(Y(!0),je(!0)):V==="sector"?ke(!0):V==="intraday"&&Rt(!0)}f(function(){Dt(),Ut(),$t(),ua(),B()}),Vue.watch(function(){return r.value},function(V){Ut(),V==="overview"&&ua()});const ht=window.QuantOnboarding,ta=e(!1),zt=e(ht?ht.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),da=t(function(){return ht&&ht.shorttermTourSteps()[zt.value.stepIndex]||{key:"",title:"",desc:""}}),Xt=t(function(){return ht?ht.shorttermTourProgress(zt.value):{done:0,total:3,pct:0}}),na=t(function(){return zt.value.stepIndex>=2});function ut(){if(ht){var V=null;try{V=localStorage.getItem("qc_shortterm_tour")}catch{}if(V){var _e=ht.parseState(V);_e&&(zt.value=_e)}}}function Zt(){if(ht){var V=JSON.stringify(zt.value);try{localStorage.setItem("qc_shortterm_tour",V)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:V}})}).catch(function(){})}catch{}}}function ua(){window.__quantGuideModalsEnabled===!0&&ht&&r.value==="overview"&&(ut(),ht.shorttermTourShouldShow(zt.value)&&(ta.value=!0))}function wa(){zt.value=ht.shorttermTourNext(zt.value),Zt()}function Sa(){zt.value=ht.shorttermTourComplete(zt.value),Zt(),ta.value=!1}function la(){zt.value=ht.shorttermTourDismiss(zt.value),Zt(),ta.value=!1}return{currentPage:x,currentSubPage:r,shortDate:n,pools:p,poolLoading:o,poolError:C,ztBoardFilter:_,filteredZt:fe,clearBoardFilter:Ne,lhbRows:S,lhbLoading:A,lhbError:P,lhbReason:h,lhbPageRows:E,lhbPage:L,overview:I,overviewLoading:F,overviewError:X,dateList:ee,dateListLoading:ae,loadDateList:B,pickDate:U,sectorType:q,sectorIndicator:s,sectorKeyword:b,sectorRows:i,filteredSectorRows:te,sectorPageRows:Ie,sectorPage:g,sectorLoading:Z,sectorError:R,sectorFlowSource:M,PAGE_SIZE:K,gotoSector:Ce,review:u,reviewRunning:N,intradaySnapshots:oe,intradayLoading:J,intradayCollecting:D,intradaySlots:Ue,intradayMsg:ot,slotClass:Qe,intradayStatus:_t,chatQuestion:G,chatAnswer:ie,chatLoading:ge,loadPools:xe,loadLhb:ce,loadOverview:Y,loadSectorFlow:ke,loadReview:je,runReview:dt,sendChat:At,loadIntraday:Rt,collectSnapshot:mt,refreshCurrent:St,ladderText:se,fmtAmount:Bt,fmtPct:xt,riseFall:Ve,tagClass:Oe,openStock:Ye,lhbInstitutionNetBuy:it,lhbHotMoneyCount:bt,sectorTopName:Ht,sectorTopInflow:sa,sectorSource:O,moneySource:Be,promotion1to2:We,cycleScore:Et,cycleTrend:pt,pct:Pt,fmtCond:Se,verdictClass:Ee,sessionStatusText:$e,sessionStatusClass:Xe,shorttermTourVisible:ta,shorttermTourState:zt,shorttermTourStep:da,shorttermTourProg:Xt,shorttermTourIsLast:na,shorttermTourNext:wa,shorttermTourFinish:Sa,shorttermTourSkip:la}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantVirtualList=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(r,n,p,o,C){var y=p>0?p:1,k=typeof C=="number"&&C>=0?C:a,_=Math.max(0,o),S=Math.max(0,r),A=Math.max(0,n),P=Math.max(0,Math.floor(S/y)-k),m=Math.min(_,Math.ceil((S+A)/y)+k);return{startIndex:P,endIndex:m}}function f(r,n){return Math.max(0,r||0)*(n>0?n:0)}function t(r,n,p,o,C){var y=r||[],k=e(n,p,o,y.length,C),_=y.slice(k.startIndex,k.endIndex);return{visible:_,startIndex:k.startIndex,endIndex:k.endIndex,offsetY:k.startIndex*(o>0?o:1),totalHeight:f(y.length,o)}}function c(r,n){if(r){if(r.code!=null)return r.code;if(r.id!=null)return r.id;if(r.ts_code!=null)return r.ts_code}return n}function d(r,n,p){var o=r||[];if(!o.length)return n>0?n:1;for(var C=Math.min(p||50,o.length),y=0,k=0,_=0;_<C;_++){var S=o[_]&&o[_].rowHeight;typeof S=="number"&&S>0&&(y+=S,k++)}return k?y/k:n>0?n:1}function x(r,n,p,o,C){var y=e(r,n,p,o,C),k=Math.max(0,o);return k?(y.endIndex-y.startIndex)/k:0}return{DEFAULT_BUFFER:a,computeVisibleRange:e,computeTotalHeight:f,sliceVisible:t,getRowKey:c,estimateDynamicRowHeight:d,renderedRatio:x}});(function(){const{ref:a,computed:e,onMounted:f,onBeforeUnmount:t}=Vue,c=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:c.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(d){const x=a(null),r=a(0),n=a(400),p=e(()=>(c.computeVisibleRange||function(l,h,L,K,E){const I=L>0?L:1,F=E>=0?E:8,X=Math.max(0,K);return{startIndex:Math.max(0,Math.floor(l/I)-F),endIndex:Math.min(X,Math.ceil((l+h)/I)+F)}})(r.value,n.value,d.rowHeight,d.items.length,d.buffer)),o=e(()=>d.items.length*d.rowHeight),C=e(()=>p.value.startIndex),y=e(()=>p.value.endIndex),k=e(()=>d.items.slice(C.value,y.value));function _(){x.value&&(r.value=x.value.scrollTop)}function S(){x.value&&(n.value=x.value.clientHeight||400)}function A(m,l){return c.getRowKey?c.getRowKey(m,l):m&&m.code!=null?m.code:m&&m.id!=null?m.id:l}let P=null;return f(()=>{S(),x.value&&typeof ResizeObserver<"u"&&(P=new ResizeObserver(()=>S()),P.observe(x.value))}),t(()=>{P&&P.disconnect()}),{scrollEl:x,totalHeight:o,startIndex:C,endIndex:y,visibleItems:k,onScroll:_,keyOf:A}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=e())})(typeof self<"u"?self:void 0,function(){var a=40,e=1.2,f=60,t=500,c=10,d=88,x=350;function r(l,h,L,K,E){E=E||{};var I=typeof E.threshold=="number"?E.threshold:a,F=typeof E.bias=="number"?E.bias:e,X=L-l,H=K-h;return Math.abs(X)<I||Math.abs(X)<Math.abs(H)*F?"none":X<0?"left":"right"}function n(l,h,L){L=L||{};var K=typeof L.threshold=="number"?L.threshold:f;return h-l>=K}function p(l,h){h=h||{};var L=typeof h.threshold=="number"?h.threshold:t;return l>=L}var o=!1;function C(l,h){return l&&typeof l.closest=="function"?l.closest(h):null}function y(l){if(!l)return"";var h=l.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(h){var L=h.getAttribute&&h.getAttribute("data-copy-code");if(L)return L.trim();var K=(h.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(K)return K[0]}var E=l.getAttribute&&l.getAttribute("data-copy-code");return E?E.trim():""}function k(l){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(l).then(function(){return!0}).catch(function(){return _(l)}):Promise.resolve(_(l))}function _(l){try{var h=document.createElement("textarea");return h.value=l,h.style.position="fixed",h.style.opacity="0",document.body.appendChild(h),h.select(),document.execCommand("copy"),document.body.removeChild(h),!0}catch{return!1}}function S(l){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(l)}function A(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function P(){var l=null,h=null,L=null;function K(){h&&(h.timer&&clearTimeout(h.timer),h=null)}function E(ae){L={el:ae,until:Date.now()+x}}function I(ae){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(B){B!==ae&&B.classList.remove("swipe-open")}),l&&l.el!==ae&&(l=null)}function F(ae){var B=ae.touches&&ae.touches[0];if(B){var U=C(ae.target,".swipe-reveal");U&&(l={el:U,x:B.clientX,y:B.clientY,moved:!1},ae.stopPropagation());var q=C(ae.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");q&&(K(),h={el:q,x:B.clientX,y:B.clientY,timer:setTimeout(function(){var s=y(q);h=null,s&&(E(q),k(s).then(function(){A(),S("已复制代码 "+s)}))},t)})}}function X(ae){if(l){var B=ae.touches&&ae.touches[0];if(B){var U=B.clientX-l.x,q=B.clientY-l.y;if(Math.abs(U)>8&&Math.abs(U)>Math.abs(q)*1.2){ae.cancelable&&ae.preventDefault(),l.moved=!0;var s=l.el.querySelector(".swipe-reveal-main")||l.el,b=Math.max(-d,Math.min(0,U));s.style.transition="none",s.style.transform="translateX("+b+"px)",ae.stopPropagation()}if(h){var i=B.clientX-h.x,g=B.clientY-h.y;(Math.abs(i)>c||Math.abs(g)>c)&&K()}}}}function H(ae){if(K(),!!l){var B=l.el,U=ae.changedTouches&&ae.changedTouches[0],q=l.x,s=l.y,b="none";U&&(b=r(q,s,U.clientX,U.clientY));var i=l.moved;l=null;var g=B.querySelector(".swipe-reveal-main")||B;g.style.transform="",g.style.transition="",b==="left"?(I(B),B.classList.add("swipe-open"),E(B)):(b==="right"||i)&&B.classList.remove("swipe-open"),ae.stopPropagation()}}function W(){K(),l=null}function ee(ae){if(L&&Date.now()<L.until){var B=L.el.contains(ae.target)||ae.target===L.el,U=ae.target.closest&&ae.target.closest(".swipe-reveal-actions");B&&!U&&(ae.preventDefault(),ae.stopPropagation(),L=null)}}document.addEventListener("touchstart",F,!0),document.addEventListener("touchmove",X,!0),document.addEventListener("touchend",H,!0),document.addEventListener("touchcancel",W,!0),document.addEventListener("click",ee,!0)}function m(){o||typeof document>"u"||(o=!0,P())}return{judgeSwipe:r,judgePullToRefresh:n,judgeLongPress:p,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:e,PULL_THRESHOLD:f,LONG_PRESS_MS:t,LONG_PRESS_MOVE_SLOP:c,REVEAL_WIDTH:d,initGestures:m,_codeFromRow:y}});(function(){const a={empty:{icon:"inbox",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"alert-triangle",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"wifi-off",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},e=Object.keys(a);function f(d){return a[d]||a.empty}function t(){const d=[];for(const x of e){const r=a[x];r.title||d.push(x+".title"),x!=="loading"&&!r.icon&&d.push(x+".icon"),typeof r.retry!="boolean"&&d.push(x+".retry"),typeof r.skeleton!="boolean"&&d.push(x+".skeleton")}return{ok:d.length===0,errors:d}}const c={VARIANTS:a,KEYS:e,resolve:f,validate:t};typeof window<"u"&&(window.QuantStatePanel=c),typeof Me<"u"&&Me.exports&&(Me.exports=c)})();(function(){const{computed:a}=Vue,e=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(f){const t=a(()=>typeof e.resolve=="function"?e.resolve(f.type):{}),c=a(()=>f.icon||t.value.icon||""),d=a(()=>f.title||t.value.title||""),x=a(()=>f.desc||t.value.desc||""),r=a(()=>!!t.value.retry),n=a(()=>/^[a-z][a-z0-9-]*$/.test(String(c.value||"")));return{icon:c,title:d,desc:x,retryable:r,isIconName:n}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantCommandPanel=e()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function a(l){return String(l||"").trim().toLowerCase()}function e(l,h){if(!l)return!0;const L=l.split(/\s+/).filter(Boolean);if(!L.length)return!0;const K=String(h||"").toLowerCase();return L.every(function(E){return K.indexOf(E)!==-1})}function f(){return{visible:!1,query:"",activeIndex:0}}function t(l,h){return h===void 0&&(h=!l.visible),l.visible=h,h&&(l.query="",l.activeIndex=0),l.visible}function c(l,h,L){const K=a(l);if(!h||!h.length)return[];const E=[];return h.forEach(function(I){const F=e(K,I.name)||e(K,I.key),X=(I.subPages||[]).filter(function(H){const W=L&&L[H]||H;return e(K,W)||e(K,H)});F&&E.push({type:"menu",menuKey:I.key,subPage:I.subPages&&I.subPages[0]||"",label:I.name,subLabel:"页面",icon:I.icon||"file-text"}),X.forEach(function(H){E.push({type:"menu",menuKey:I.key,subPage:H,label:L&&L[H]||H,subLabel:I.name,icon:I.icon||"file-text"})})}),E.slice(0,8)}function d(l,h){const L=a(l);return!h||!h.length?[]:h.filter(function(K){return!!(!L||e(L,K.label)||e(L,K.key)||K.keywords&&e(L,K.keywords))}).slice(0,8)}function x(l,h){const L=a(l);return!L||!h||!h.length?[]:h.filter(function(K){return e(L,K.code)||e(L,K.name)}).slice(0,8).map(function(K){return{type:"stock",code:K.code,name:K.name,label:K.name,subLabel:K.code,icon:"trending-up"}})}function r(l,h,L){const K=[],E=[];return L&&L.length&&(K.push({key:"stock",label:"股票",items:L}),E.push.apply(E,L)),l&&l.length&&(K.push({key:"menu",label:"菜单",items:l}),E.push.apply(E,l)),h&&h.length&&(K.push({key:"command",label:"指令",items:h}),E.push.apply(E,h)),{groups:K,flat:E}}function n(l,h,L){if(h<=0)return 0;const K=((l||0)+L)%h;return K<0?h-1:K}function p(l,h,L,K){const E=c(l,h,L).map(function(F){return{type:"menu",menuKey:F.menuKey,subPage:F.subPage,label:F.label,subLabel:F.subLabel,icon:F.icon,iconName:F.icon,value:F.icon+" "+F.label+" · "+F.subLabel}}),I=d(l,K||[]).map(function(F){return{type:"command",key:F.key,label:F.label,icon:F.icon,iconName:F.icon,subLabel:"指令",value:F.icon+" "+F.label}});return E.concat(I)}function o(l){return l?l.type==="menu"?{action:"menu",menuKey:l.menuKey,subPage:l.subPage}:l.type==="command"?{action:"command",key:l.key}:l.type==="sector"?{action:"sector",name:l.name}:l.type==="strategy"?{action:"strategy",id:l.id,name:l.name}:l.type==="stock"||l.code&&l.name?{action:"stock",code:l.code,name:l.name}:null:null}const C=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"onboarding",label:"新手引导（重新查看）",icon:"sparkles",keywords:"guide tour onboarding 引导 新手 帮助"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"},{key:"open-watchlist",label:"打开我的自选",icon:"star",keywords:"watchlist 自选 收藏"},{key:"manage-groups",label:"管理自选分组",icon:"folder-open",keywords:"groups 分组 自选 管理 归类"},{key:"open-focus",label:"打开重点跟踪",icon:"target",keywords:"focus 重点 跟踪 盯盘"},{key:"open-portfolio",label:"打开模拟组合",icon:"wallet",keywords:"portfolio 组合 持仓 净值"},{key:"open-backtest",label:"打开回测工作台",icon:"line-chart",keywords:"backtest 回测 净值 收益"},{key:"open-market-review",label:"打开每日复盘",icon:"book-open",keywords:"review 复盘 市场 收盘"},{key:"open-shortterm-sectors",label:"打开板块资金",icon:"pie-chart",keywords:"sector 板块 资金 行业"},{key:"open-shortterm-intraday",label:"打开盘中核验",icon:"clock",keywords:"intraday 盘中 核验 验证"},{key:"open-status",label:"打开系统状态",icon:"activity",keywords:"ops status 状态 运行 健康"},{key:"open-health",label:"打开数据源健康",icon:"database",keywords:"health 数据源 健康 源状态"},{key:"open-schedule",label:"打开调度任务",icon:"clock",keywords:"schedule 调度 任务 定时"},{key:"open-guard",label:"打开AI事实护栏",icon:"shield",keywords:"guard 护栏 事实 校验"},{key:"open-usage",label:"打开用量统计",icon:"bar-chart-3",keywords:"usage 用量 统计 调用量"},{key:"open-datadict",label:"打开数据字典",icon:"book-open",keywords:"datadict 数据字典 字段"},{key:"open-notification",label:"打开通知中心",icon:"bell",keywords:"notification 通知 消息"},{key:"open-users",label:"打开用户与权限",icon:"users",keywords:"users 用户 权限 rbac 角色"},{key:"open-autoeval",label:"打开AI服务配置",icon:"bot",keywords:"autoeval 自动评估 AI 服务 模型"},{key:"open-feature",label:"打开基础配置",icon:"settings",keywords:"feature 基础 配置 功能"},{key:"open-config",label:"打开配置保存",icon:"save",keywords:"config 配置 保存 备份"},{key:"open-glossary",label:"打开术语表",icon:"help-circle",keywords:"glossary 术语 词条 解释"},{key:"theme-gold",label:"金色主题",icon:"palette",keywords:"theme gold 金色 主题 颜色"},{key:"theme-blue",label:"蓝色主题",icon:"palette",keywords:"theme blue 蓝色 主题"},{key:"theme-red",label:"红色主题",icon:"palette",keywords:"theme red 红色 主题"},{key:"theme-green",label:"绿色主题",icon:"palette",keywords:"theme green 绿色 主题"},{key:"theme-purple",label:"紫色主题",icon:"palette",keywords:"theme purple 紫色 主题"},{key:"theme-pink",label:"粉色主题",icon:"palette",keywords:"theme pink 粉色 主题"},{key:"theme-dark",label:"暗色主题",icon:"moon",keywords:"theme dark 暗色 深色 夜间"},{key:"theme-light",label:"亮色主题",icon:"sun",keywords:"theme light 亮色 浅色 日间"}];var y={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function k(l){if(!l||typeof l!="string")return null;var h=l.split("+").map(function(E){return E.trim()}).filter(Boolean);if(!h.length)return null;var L=h.pop().toLowerCase();if(!L)return null;var K={ctrl:!1,alt:!1,shift:!1,meta:!1};return h.forEach(function(E){var I=E.toLowerCase();y.ctrl.indexOf(I)!==-1?K.ctrl=!0:y.alt.indexOf(I)!==-1?K.alt=!0:y.shift.indexOf(I)!==-1?K.shift=!0:y.meta.indexOf(I)!==-1&&(K.meta=!0)}),{ctrl:K.ctrl,alt:K.alt,shift:K.shift,meta:K.meta,key:L}}function _(l,h){if(!l||!h)return!1;var L=String(h.key||h.code||"").toLowerCase();return l.key!==L?!1:l.ctrl===!!h.ctrlKey&&l.alt===!!h.altKey&&l.shift===!!h.shiftKey&&l.meta===!!h.metaKey}function S(l){if(!l)return"";var h=[];return l.ctrl&&h.push("Ctrl"),l.alt&&h.push("Alt"),l.shift&&h.push("Shift"),l.meta&&h.push("Meta"),h.push(l.key.toUpperCase()),h.join("+")}function A(){var l={};return{register:function(h){if(!h||!h.key)throw new Error("命令 key 必填");if(l[h.key])throw new Error("命令重复注册: "+h.key);return l[h.key]=Object.assign({},h),h.key},list:function(){return Object.keys(l).map(function(h){return l[h]})},get:function(h){return l[h]||null},remove:function(h){delete l[h]},has:function(h){return!!l[h]},count:function(){return Object.keys(l).length}}}function P(){var l={},h={};return{register:function(L,K,E){var I=k(L);if(!I)throw new Error("无效快捷键: "+L);var F=S(I);if(l[F])throw new Error("快捷键冲突: "+L);if(K!=null&&h[K]!==void 0)throw new Error("动作重复绑定: "+K);return l[F]={combo:L,action:K,description:E||"",parsed:I},h[K]=F,F},resolve:function(L){for(var K in l)if(_(l[K].parsed,L))return l[K].action;return null},list:function(){return Object.keys(l).map(function(L){return l[L]})},unregister:function(L){var K=S(k(L));l[K]&&(delete h[l[K].action],delete l[K])},count:function(){return Object.keys(l).length}}}function m(){var l=P();return l.register("Ctrl+K","toggle-palette","打开命令面板"),l.register("F5","refresh","刷新当前页"),l.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),l.register("Ctrl+J","open-ai","打开 AI 问股"),l.register("Ctrl+D","open-today","今日一屏"),l.register("Ctrl+E","batch-eval","批量 AI 评估"),l.register("Ctrl+G","add-portfolio","加入组合"),l.register("Ctrl+H","open-eval-history","打开评估历史"),l.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),l}return{normalize:a,createPaletteState:f,toggleVisible:t,searchMenus:c,searchCommands:d,filterStocksLocal:x,mergeResults:r,moveIndex:n,buildSearchSuggestions:p,dispatchSearchSelection:o,DEFAULT_COMMANDS:C,parseKeyCombo:k,matchShortcut:_,canonicalCombo:S,createCommandRegistry:A,createShortcutRegistry:P,createDefaultShortcuts:m}});(function(a){if(a&&!a.QuantCommandPanel)try{var e=typeof Me<"u"&&Me.exports?Me.exports:null;e&&(a.QuantCommandPanel=e)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(a,e){var f=e();typeof Me=="object"&&Me.exports&&(Me.exports=f),a.QuantOnboarding=f})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var a=[{key:"today",title:"看懂今日一屏",target:"strategies",selector:".today-hero",desc:"先看美林时钟阶段与今日一屏：宏观周期、策略共识、股票池一目了然"},{key:"calendar",title:"量化日历与策略池",target:"calendar",selector:".stock-pool-body",desc:"日/周/月/年切换视图，按全部/新入池/当前持仓/已出池筛选股票"},{key:"evaluate",title:"智能评估一只股票",target:"ai",selector:".qc-work-area",desc:"点击任意股票查看详情：多模型 AI 评估、五维体检、历史趋势"},{key:"watchlist",title:"我的自选与重点跟踪",target:"ai",selector:"",desc:"在智能评估页把心仪股票加入自选，重点跟踪持续盯盘"},{key:"config",title:"系统配置要点",target:"system",selector:".system-page-root",desc:"数据源、AI Key、通知与主题都在系统配置，按需设置"}],e=a.length,f=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],t=f.length;function c(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function d(){return f.slice()}function x(H){return H<0?0:H>=t?t-1:H}function r(H){return{stepIndex:H.stepIndex,completed:!!H.completed,dismissed:!!H.dismissed,updatedAt:H.updatedAt||0}}function n(H){return r(Object.assign({},H,{stepIndex:x((H.stepIndex||0)+1),updatedAt:Date.now()}))}function p(H){return r(Object.assign({},H,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function o(H){return r(Object.assign({},H,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function C(H){var W=Math.min(H&&H.stepIndex||0,t);return{done:W,total:t,pct:Math.round(W/t*100)}}function y(H){return!!(H&&!H.completed&&!H.dismissed)}function k(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function _(){return a.slice()}function S(){return e}function A(H){return H<0?0:H>=e?e-1:H}function P(H){return{stepIndex:H.stepIndex,completed:!!H.completed,dismissed:!!H.dismissed,updatedAt:H.updatedAt||0}}function m(H){return P(Object.assign({},H,{stepIndex:A((H.stepIndex||0)+1),updatedAt:Date.now()}))}function l(H){return P(Object.assign({},H,{stepIndex:A((H.stepIndex||0)-1),updatedAt:Date.now()}))}function h(H,W){return P(Object.assign({},H,{stepIndex:A(W),updatedAt:Date.now()}))}function L(H){return P(Object.assign({},H,{completed:!0,updatedAt:Date.now()}))}function K(H){return P(Object.assign({},H,{dismissed:!0,updatedAt:Date.now()}))}function E(H){return!!(H&&H.completed)}function I(H){var W=Math.min(H&&H.stepIndex||0,e);return{done:W,total:e,pct:Math.round(W/e*100)}}function F(H){var W=H||k();return JSON.stringify({stepIndex:W.stepIndex,completed:!!W.completed,dismissed:!!W.dismissed,updatedAt:W.updatedAt||0})}function X(H){var W=k();if(!H||typeof H!="string")return W;try{var ee=JSON.parse(H);if(!ee||typeof ee!="object")return W;var ae=parseInt(ee.stepIndex,10);return isNaN(ae)?W:{stepIndex:A(ae),completed:!!ee.completed,dismissed:!!ee.dismissed,updatedAt:ee.updatedAt||0}}catch{return W}}return{ONBOARDING_STEPS:a,steps:_,stepCount:S,createOnboardingState:k,next:m,prev:l,jumpTo:h,complete:L,dismiss:K,isComplete:E,progress:I,persistState:F,parseState:X,SHORTTERM_TOUR_STEPS:f,shorttermTourSteps:d,createShorttermTourState:c,shorttermTourNext:n,shorttermTourComplete:p,shorttermTourDismiss:o,shorttermTourProgress:C,shorttermTourShouldShow:y}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:e,onMounted:f}=Vue,t=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const c=a(!1),d=a(t.createOnboardingState()),x=e(function(){return t.steps()[d.value.stepIndex]}),r=e(function(){return t.progress(d.value)}),n=e(function(){return d.value.stepIndex>=t.stepCount()-1}),p=e(function(){return"onboarding.step."+x.value.key});function o(){const m=t.persistState(d.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:m}})}).then(function(l){return l.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",m)}catch{}})}function C(m){m&&window.__quantGoPage?window.__quantGoPage(m,""):m&&window.__quantState&&window.__quantState.currentPage&&(window.__quantState.currentPage.value=m,window.__quantState.currentSubPage&&(window.__quantState.currentSubPage.value=""))}function y(){d.value=t.next(d.value);const m=t.steps()[d.value.stepIndex];m&&m.target&&C(m.target)}function k(){d.value=t.prev(d.value);const m=t.steps()[d.value.stepIndex];m&&m.target&&C(m.target)}function _(){d.value=t.complete(d.value),o(),c.value=!1}function S(){d.value=t.dismiss(d.value),o(),c.value=!1}function A(){d.value=t.createOnboardingState(),o(),c.value=!0}function P(){fetch("/api/user_config/preferences").then(function(m){return m.json()}).then(function(m){const l=m&&m.preferences&&m.preferences.onboarding_progress;return l&&(d.value=t.parseState(l)),l}).catch(function(){return null}).then(function(m){if(!m)try{const l=localStorage.getItem("qc_onboarding_progress");l&&(d.value=t.parseState(l))}catch{}!t.isComplete(d.value)&&!d.value.dismissed&&(c.value=!0)}),window.addEventListener("qc:onboarding-replay",A)}return f(P),{visible:c,st:d,step:x,prog:r,isLast:n,stepKey:p,next:y,prev:k,finish:_,skip:S,replay:A}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"inbox"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
      <div class="qc-empty-state" role="status">
        <div class="qc-empty-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-empty-title">{{ title || t('common.emptyTitle') }}</div>
        <div class="qc-empty-desc">{{ desc || t('common.emptyDesc') }}</div>
        <el-button v-if="actionText" size="small" type="primary" @click="$emit('action')">{{ actionText }}</el-button>
      </div>
    `,setup(){function a(e){try{const f=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(f)return f(e)||""}catch{}return e}return{t:a}}},window.__quantComponents.ErrorState={name:"qc-error",props:{icon:{type:String,default:"alert-triangle"},title:{type:String,default:""},desc:{type:String,default:""},retrying:{type:Boolean,default:!1}},emits:["retry"],template:`
      <div class="qc-error-state" role="alert">
        <div class="qc-error-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-error-title">{{ title || t('common.errorTitle') }}</div>
        <div class="qc-error-desc">{{ desc || t('common.errorDesc') }}</div>
        <el-button v-if="!retrying" size="small" @click="$emit('retry')">{{ t('common.retry') }}</el-button>
        <el-button v-else size="small" :loading="retrying">{{ t('common.retry') }}</el-button>
      </div>
    `,setup(){function a(e){try{const f=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(f)return f(e)||""}catch{}return e}return{t:a}}})})();(function(){const{ref:a,computed:e,watch:f,nextTick:t,inject:c,onMounted:d}=Vue,x=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
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
    `,setup(){const r=c("qcState");if(!r)return{};const n=a(""),p=e({get:()=>r.commandPaletteVisible.value,set:q=>{r.commandPaletteVisible.value=q}}),o=a(0),C=a([]),y=a(null),k=e(()=>{const q=(x.DEFAULT_COMMANDS||[]).map(function(b){return Object.assign({},b)});return Object.keys(r.themes.value||{}).forEach(function(b){const i=r.themes.value[b];q.push({key:"theme:"+b,label:"切换主题 · "+(i.name||b),icon:"palette",keywords:"theme 主题"})}),q});function _(q){return typeof q=="string"&&/^[a-z][a-z0-9-]*$/.test(q)}const S=e(()=>r.menus.value||[]);function A(){const q=window.__quantModules&&window.__quantModules.pinyin;if(!q)return[];const s=[];return(r.watchlist&&r.watchlist.value||[]).forEach(function(b){s.push({code:b.code,name:b.name})}),(r.aiHistory&&r.aiHistory.value||[]).forEach(function(b){b&&b.stock_code&&s.push({code:b.stock_code,name:b.stock_name||b.stock_code})}),s.push.apply(s,q.getExtraStocks()),q.buildStockIndex(s)}function P(q){const s=window.__quantModules&&window.__quantModules.pinyin;return s?s.searchStocksByQuery(q,A()).map(function(b){return{type:"stock",code:b.code,name:b.name,label:b.name,subLabel:b.code,icon:"trending-up"}}):[]}function m(){const q=[],s=window.__quantModules&&window.__quantModules.recent;s&&s.getRecentViewed().slice(0,5).forEach(function(i){q.push({type:"stock",code:i.code,name:i.name||i.code,label:i.name||i.code,subLabel:"最近查看 · "+i.code,icon:"trending-up"})});const b=(r.watchlist&&r.watchlist.value||[]).slice(0,8).map(function(i){return{type:"stock",code:i.code,name:i.name||i.code,label:i.name||i.code,subLabel:"我的自选 · "+i.code,icon:"trending-up"}});return q.concat(b)}const l=e(()=>{const q=n.value;if(!q)return x.mergeResults([],[],m());const s=x.searchMenus(q,S.value,r.subPageNames),b=x.searchCommands(q,k.value),i=C.value;return x.mergeResults(s,b,i)}),h=e(()=>l.value);function L(q){return h.value.flat[o.value]===q}function K(q){o.value=h.value.flat.indexOf(q)}function E(q){return(q.type||"")+":"+(q.code||q.menuKey||q.key||q.label)}let I=null;function F(){const q=n.value.trim();if(q.length<1){C.value=[];return}I&&clearTimeout(I),I=setTimeout(function(){const s=P(q);C.value=s,o.value=0,r.searchStocks(q,function(b){if(n.value.trim()!==q)return;const i=(b||[]).filter(function(R){return R&&R.code&&R.name}).map(function(R){return{type:"stock",code:R.code,name:R.name,label:R.name,subLabel:R.code,icon:"trending-up"}}),g={},Z=[];s.forEach(function(R){g[R.code]||(g[R.code]=!0,Z.push(R))}),i.forEach(function(R){g[R.code]||(g[R.code]=!0,Z.push(R))}),C.value=Z,o.value=0})},200)}function X(){o.value=x.moveIndex(o.value,h.value.flat.length,1)}function H(){o.value=x.moveIndex(o.value,h.value.flat.length,-1)}function W(){const q=h.value.flat[o.value];q&&ee(q)}function ee(q){r.commandPaletteVisible.value=!1,q.type==="menu"?r.navigateTo(q.menuKey,q.subPage):q.type==="stock"?r.showStockDetail(q.code,q.name):q.type==="command"&&ae(q.key)}function ae(q){if(q==="refresh"){const s=r.currentPage.value;s==="strategies"?r.loadDashboardData().catch(function(){}):s==="calendar"?r.refreshCalendarData().catch(function(){}):s==="ai"&&r.loadAiHistory().catch(function(){})}else q==="export"?r.exportCSV():q==="batch"?r.showBatchEvaluate.value=!0:q==="ai"?r.openAiFab():q==="sidebar"?r.toggleSidebar():q==="today"?r.navigateTo("strategies","overview"):q==="onboarding"?window.dispatchEvent(new CustomEvent("qc:onboarding-replay")):q==="add-portfolio"?(r.currentPage.value="ai",r.currentSubPage.value="portfolio"):q==="open-system"?r.navigateTo("system","status"):q==="open-shortterm"?r.navigateTo("shortterm","overview"):q==="open-research"?r.navigateTo("research","overview"):q==="open-calendar"?r.navigateTo("calendar",""):q==="refresh-data-source"?r.navigateTo("system","datasource"):q==="open-watchlist"?r.navigateTo("ai","watchlist"):q==="manage-groups"?window.dispatchEvent(new CustomEvent("qc:show-watch-groups")):q==="open-focus"?r.navigateTo("ai","focus"):q==="open-portfolio"?r.navigateTo("ai","portfolio"):q==="open-backtest"?r.navigateTo("research","backtest"):q==="open-market-review"?r.navigateTo("shortterm","market-review"):q==="open-shortterm-sectors"?r.navigateTo("shortterm","sector"):q==="open-shortterm-intraday"?r.navigateTo("shortterm","intraday"):q==="open-status"?r.navigateTo("ops","status"):q==="open-health"?r.navigateTo("ops","health"):q==="open-schedule"?r.navigateTo("ops","schedule"):q==="open-guard"?r.navigateTo("ops","guard"):q==="open-usage"?r.navigateTo("ops","usage"):q==="open-datadict"?r.navigateTo("ops","datadict"):q==="open-notification"?r.navigateTo("system","notification"):q==="open-users"?r.navigateTo("system","user"):q==="open-autoeval"?r.navigateTo("system","autoeval"):q==="open-feature"?r.navigateTo("system","feature"):q==="open-config"?r.navigateTo("system","config"):q==="open-glossary"?r.navigateTo("system","glossary"):q==="theme-dark"?r.changeTheme("dark-pro"):q==="theme-light"?r.changeTheme("gold"):q.indexOf("theme:")===0&&r.changeTheme(q.slice(6))}f(p,function(q){q&&(n.value="",C.value=[],o.value=0,t(function(){y.value&&y.value.focus&&y.value.focus()}))}),f(n,F);function B(q){q==="toggle-palette"?r.commandPaletteVisible.value=!r.commandPaletteVisible.value:q==="toggle-sidebar"?r.toggleSidebar():q==="open-ai"?r.openAiFab():q==="refresh"?ae("refresh"):q==="open-today"?ae("today"):q==="batch-eval"?ae("batch"):q==="add-portfolio"&&ae("add-portfolio")}function U(q){if(!x.createDefaultShortcuts||!x.createShortcutRegistry)return;const b=x.createDefaultShortcuts().resolve({key:q.key,ctrlKey:q.ctrlKey,altKey:q.altKey,shiftKey:q.shiftKey,metaKey:q.metaKey});b&&(q.preventDefault(),B(b))}return d(function(){document.addEventListener("keydown",U)}),{visible:p,query:n,results:h,inputEl:y,sanitizeHtml:r.sanitizeHtml,isIconName:_,onDown:X,onUp:H,onEnter:W,execute:ee,isActive:L,setActive:K,itemKey:E,onGlobalKeydown:U}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
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
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShortcutHelpDialog={name:"qc-shortcut-help-dialog",template:`
        <el-dialog v-model="shortcutHelpVisible" title="⌨ 键盘快捷键" width="440px">
            <div class="shortcut-list">
                <div class="shortcut-row" v-for="s in shortcutHelpItems" :key="s.keys">
                    <span class="shortcut-keys"><kbd>{{ s.keys }}</kbd></span>
                    <span class="shortcut-desc">{{ s.desc }}</span>
                </div>
            </div>
        </el-dialog>
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.TourDialog={name:"qc-tour-dialog",template:`
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
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.MenuConfigDialog={name:"qc-menu-config-dialog",template:`
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
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AddGroupDialog={name:"qc-add-group-dialog",template:`
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
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AddUserDialog={name:"qc-add-user-dialog",template:`
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
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.BatchEvaluateDialog={name:"qc-batch-evaluate-dialog",template:`
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
    `,setup(){const e=a("qcState");if(!e)return{};const f=window.QuantFormMemory;function t(){const r=e.currentUser;return r&&r.value&&r.value.username||"guest"}Vue.watch(()=>e.showBatchEvaluate&&e.showBatchEvaluate.value||!1,r=>{if(r&&f){const n=f.loadForm("batch-evaluate",t(),1);n&&n.batchStocks&&!(e.batchStocks&&e.batchStocks.value)&&(e.batchStocks.value=n.batchStocks)}});function c(){return f&&f.saveForm("batch-evaluate",{batchStocks:e.batchStocks&&e.batchStocks.value||""},t(),1),e.doBatchEvaluate()}const d=Vue.ref(0);let x=null;return e.batchRunning&&e.batchRunning.__v_isRef&&Vue.watch(e.batchRunning,r=>{r?(d.value=0,x=setInterval(()=>{d.value++},1e3)):x&&(clearInterval(x),x=null)}),{...e,batchElapsed:d,onBatchEvaluate:c}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
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
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:e,onMounted:f}=Vue;window.__quantComponents=window.__quantComponents||{};const t=["#c49b2e","#2563eb","#dc2626","#16a34a","#7c3aed","#db2777","#64748b","#b45309"];window.__quantComponents.WatchGroupsDialog={name:"qc-watch-groups-dialog",template:`
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
    `,setup(){const c=a(!1),d=a(!1),x=a(!1),r=a([]),n=a({}),p=a(""),o=a(""),C=a("");function y(E,I){I=I||{},I.headers=Object.assign({},I.headers||{});const F=localStorage.getItem("quant_token")||"";return F&&(I.headers.Authorization="Bearer "+F),fetch(E,I)}async function k(){d.value=!0;try{const I=await(await y("/api/watchlist/groups")).json();I&&I.success&&(r.value=I.groups||[],n.value=I.mapping||{})}catch{}d.value=!1}function _(E){return Object.values(n.value).filter(function(I){return I===E}).length}function S(E){const I=r.value[E],F=t.indexOf(I.color);I.color=t[(F+1)%t.length]}function A(E){if(E<=0)return;const I=r.value.slice(),F=I[E-1];I[E-1]=I[E],I[E]=F,r.value=I}function P(E){if(E>=r.value.length-1)return;const I=r.value.slice(),F=I[E+1];I[E+1]=I[E],I[E]=F,r.value=I}function m(){const E=p.value.trim();E&&(r.value.some(function(I){return I.name===E})||(r.value.push({name:E,color:t[r.value.length%t.length],sort_order:r.value.length,expanded:!0}),p.value=""))}function l(E){o.value=E,C.value=E}function h(E){const I=C.value.trim();if(!I||I===E||r.value.some(function(X){return X.name===I})){o.value="";return}r.value=r.value.map(function(X){return X.name===E?Object.assign({},X,{name:I}):X});const F={};Object.keys(n.value).forEach(function(X){F[X]=n.value[X]===E?I:n.value[X]}),n.value=F,o.value=""}function L(E){r.value=r.value.filter(function(F){return F.name!==E});const I={};Object.keys(n.value).forEach(function(F){I[F]=n.value[F]===E?"默认分组":n.value[F]}),n.value=I}async function K(){x.value=!0;try{await y("/api/watchlist/groups",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({groups:r.value,mapping:n.value})}),ElementPlus.ElMessage.success("分组已保存"),c.value=!1}catch{ElementPlus.ElMessage.error("保存失败")}x.value=!1}return f(function(){window.addEventListener("qc:show-watch-groups",function(){c.value=!0,k()})}),{visible:c,loading:d,saving:x,groups:r,mapping:n,newName:p,renaming:o,renameVal:C,load:k,countIn:_,cycleColor:S,moveUp:A,moveDown:P,addGroup:m,startRename:l,commitRename:h,remove:L,save:K}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.IndexDetailDialog={name:"qc-index-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SetupWizardDialog={name:"qc-setup-wizard-dialog",template:`
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
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.MerrillDetailDialog={name:"qc-merrill-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a,computed:e,ref:f,watch:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StockDetailDialog={name:"qc-stock-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
    `,setup(){const c=a("qcState");if(!c)return{};const d={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},x=e(()=>d[c.aiEvalStage.value]||""),r=e(()=>{const W=c.aiResult&&c.aiResult.value&&c.aiResult.value.result&&c.aiResult.value.result.level;return W?W==="强烈推荐"||W==="推荐"?"var(--success-text)":W==="谨慎推荐"?"var(--warning-text)":W==="中性"||W==="观望"?"var(--text-secondary)":W==="评估失败"||W==="无可用模型"?"var(--danger-text)":"var(--color-primary)":"var(--color-primary)"});function n(W){const ee=document.createElement("textarea");ee.value=W,ee.style.position="fixed",ee.style.opacity="0",document.body.appendChild(ee),ee.select(),document.execCommand("copy"),document.body.removeChild(ee)}async function p(){const W=c.aiResult&&c.aiResult.value;if(!W||!W.result)return;const ee=W.result.dimensions||{},ae=Object.entries(ee).map(([U,q])=>`${U} ${Math.round(q)}分`).join(`
`),B=`【AI 智能评估】${W.result.level||""} ${W.result.total_score!=null?W.result.total_score:"—"}分
模型：${W.model_used||W.result.provider||"—"}

${W.result.detailed_report||""}

九维度评分：
${ae||"无"}`;try{await navigator.clipboard.writeText(B),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{n(B),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const o=f(!1),C=f(!1),y=f(null),k=f([]),_={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function S(W){return _[W]||"factor-sem-none"}async function A(){const W=c.stockDetail.value&&c.stockDetail.value.stock;if(W){o.value=!0,C.value=!1,k.value=[],y.value=null;try{const ee=c.selectedDate.value?`?date=${c.selectedDate.value}`:"",ae=await fetch(`/api/calendar/stock/${W}/factors${ee}`).then(s=>s.json()),B=ae&&Array.isArray(ae.factors)?ae.factors:[],U=[],q={};B.forEach(s=>{q[s.category]||(q[s.category]={category:s.category,items:[]},U.push(q[s.category])),q[s.category].items.push(s)}),k.value=U,y.value=ae&&ae.summary||null}catch{C.value=!0}finally{o.value=!1}}}t(c.stockDetailTab,W=>{W==="factor"&&c.stockDetail.value&&c.stockDetailVisible.value&&(A(),m())});const P=f(null);async function m(){try{const W=await fetch("/api/market/factor-ic").then(ee=>ee.json());P.value=W&&W.success&&W.data?W.data:{}}catch{P.value={}}}function l(W){if(!W||!W.n5)return"—";const ee=W.n5.icir!=null?"ICIR "+W.n5.icir:"ICIR —";return W.n5.grade+" ("+ee+")"}const h=f(!1),L=f(!1),K=f([]),E=f([]);function I(W){if(W==null)return"—";const ee=Number(W);return Number.isNaN(ee)?"—":Math.abs(ee)>=1e8?(ee/1e8).toFixed(2)+"亿":Math.abs(ee)>=1e4?(ee/1e4).toFixed(1)+"万":String(ee)}async function F(){const W=c.stockDetail&&c.stockDetail.value&&c.stockDetail.value.stock;if(W){h.value=!0,L.value=!1;try{const ee=await fetch("/api/market/performance/"+encodeURIComponent(W)).then(ae=>ae.json());ee&&ee.success?(K.value=ee.forecast||[],E.value=ee.express||[]):L.value=!0}catch{L.value=!0}finally{h.value=!1}}}t(c.stockDetailTab,W=>{W==="performance"&&F()});const X=f(null);async function H(){const W=c.stockDetail&&c.stockDetail.value&&c.stockDetail.value.stock;if(!W){X.value=null;return}try{const ee=await fetch("/api/focus/stock/"+encodeURIComponent(W)+"/pool").then(ae=>ae.json());X.value=ee&&ee.success&&ee.data?ee.data:null}catch{X.value=null}}return t(()=>c.stockDetail&&c.stockDetail.value&&c.stockDetail.value.stock,W=>{W&&c.stockDetailVisible.value?H():X.value=null}),t(()=>c.stockDetailVisible.value,W=>{W?H():X.value=null}),{...c,aiStageText:x,levelRingColor:r,copyAiReport:p,factorLoading:o,factorError:C,factorSummary:y,factorGroups:k,factorSemClass:S,loadFactorPanel:A,factorIc:P,loadFactorIc:m,factorIcGrade:l,perfLoading:h,perfError:L,perfForecast:K,perfExpress:E,fmtY:I,loadPerformance:F,poolInfo:X,loadPoolInfo:H}}}})();(function(){const{computed:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
    `,setup(f){const t=e("qcState");if(!t)return{};const c=a(()=>f.type==="history"?t.selectedHistoryIds.value.includes(f.item.id):t.selectedChatIds.value.includes(f.item.id)),d=a(()=>{const _=t.watchlistCodes.value.has(f.item.stock_code);return{icon:"star",isWatched:_,label:_?"取消收藏":"加入收藏"}}),x=a(()=>f.type==="history"?"bot":"message-circle"),r=a(()=>{var _;return f.type==="history"?((_=f.item.result)==null?void 0:_.provider)||"":f.item.first_msg||""}),n=a(()=>{var _,S;return`${((S=(_=f.item.result)==null?void 0:_.dimensions)==null?void 0:S.length)||9}维度分析`}),p=a(()=>{var S,A;const _=f.type==="history"?f.item.evaluate_time:f.item.created_at||"";return _?f.timeFormat==="datetime"?f.type==="history"?`${_.split("T")[0]} ${(_.split("T")[1]||"").split(".")[0]}`:`${_.split("T")[0]} ${((S=_.split("T")[1])==null?void 0:S.substring(0,5))||""}`:f.type==="history"?(_.split("T")[1]||"").split(".")[0]||_:((A=_.split("T")[1])==null?void 0:A.substring(0,5))||"":""});function o(){f.type==="history"?t.toggleSelectHistory(f.item.id):t.toggleSelectChat(f.item.id)}function C(){f.type==="history"?t.viewAiResult(f.item):t.viewChatSession(f.item)}async function y(){try{await ElementPlus.ElMessageBox.confirm(f.type==="history"?"确定删除这条评估记录吗？此操作不可恢复。":"确定删除这段对话吗？此操作不可恢复。","删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}f.type==="history"?t.deleteSingleHistory(f.item.id):t.deleteChatSession(f.item.id)}function k(_,S){t.toggleWatchlist(_,S)}return{isSelected:c,watchState:d,providerIcon:x,providerText:r,dimsText:n,timeText:p,toggleSelect:o,view:C,remove:y,toggleWatchlist:k,keyClick:t.keyClick,fmtNum:t.fmtNum,evaluatedCodes:t.evaluatedCodes,klineLoadedCodes:t.klineLoadedCodes,levelColor:t.levelColor,levelBg:t.levelBg}}}})();(function(){const{ref:a,computed:e,onMounted:f,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{};const c=["买入","持有","观望","减仓","卖出"],d={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},x={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},r=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],n={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},p=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function o(y){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(y).then(S=>S.json?S.json():S)}function C(){const y=new Date,k=_=>_<10?"0"+_:""+_;return y.getFullYear()+"-"+k(y.getMonth()+1)+"-"+k(y.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",template:`
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
      </div>`,setup(){const y=t("qcState"),k=a(C()),_=a("after_close"),S=a({rows:[],actions:{},total:0,groups:{}}),A=a({sessions:{},total:0}),P=a(null),m=a(!1),l=a(""),h=a(!1),L=a([]),K=a(""),E=a(null),I={},F=a({});let X=0;const H=a(null),W=e(function(){const D=S.value&&S.value.groups||{};return Object.keys(D).length?D:S.value&&S.value.rows&&S.value.rows.length?{全部:S.value.rows}:{}}),ee=e(function(){const D=H.value;return!D||!D.date||D.date!==k.value?"":"已加载最近一次评估: "+D.date+" · "+(n[D.session]||D.session)}),ae=e(function(){const D=S.value&&S.value.base_date;return D?D===k.value?"评分范围: "+D+" 收盘池 + 自选":"评分范围: "+D+" 收盘池(前一交易日算好) + 自选":""});function B(D){if(D==null)return"—";const G=Number(D);return G===Math.floor(G)?String(G):G.toFixed(1)}function U(D){const G=S.value.total||0,ie=(S.value.actions||{})[D]||0;if(!G)return"0%";const ge=ie/G*100;return ge>0&&ge<4?"4%":ge.toFixed(1)+"%"}function q(D){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[D]||"info"}function s(D){const G=P.value&&P.value.overall&&P.value.overall[D]||null;return!G||G.total===0||G.rate===null||G.rate===void 0?"info":G.rate>=60?"success":G.rate>=40?"warning":"danger"}function b(D){const G=P.value&&P.value.overall&&P.value.overall[D]||null;return!G||G.total===0||G.rate===null||G.rate===void 0?"样本不足":G.rate.toFixed(1)+"% ("+G.total+" 样本)"}function i(){return n[_.value]||_.value}function g(D){const G=L.value.indexOf(D);G>=0?L.value.splice(G,1):L.value.push(D)}function Z(D){if(!D||!D.raw_json)return{};if(I[D.stock_code+D.session+D.trade_date])return I[D.stock_code+D.session+D.trade_date];let G={};try{G=JSON.parse(D.raw_json)||{}}catch{G={}}return I[D.stock_code+D.session+D.trade_date]=G,G}async function R(){try{const D=await o("/api/focus/latest"),G=D&&D.success&&D.data;G&&G.date&&(H.value=G,k.value=G.date,G.session&&(_.value=G.session))}catch(D){console.warn("[focus] 最近一次评估解析失败:",D)}}async function w(){h.value=!0;try{const D=await o("/api/focus/results?date="+k.value+"&session="+_.value);S.value=D&&D.success&&D.data||{rows:[],actions:{},total:0,groups:{}},v((S.value.rows||[]).map(function(G){return G.stock_code}))}catch(D){console.warn("[focus] 结果加载失败:",D),S.value={rows:[],actions:{},total:0,groups:{}}}finally{h.value=!1}}async function v(D){const G=F.value||{},ie=(D||[]).filter(function($){return $&&!G[$]});if(!ie.length)return;const ge=++X,qe=ie.map(function($){return o("/api/focus/stock/"+encodeURIComponent($)+"/pool?date="+k.value).then(function(ue){ue&&ue.success&&ue.data?G[$]=ue.data:G[$]={stock_code:$,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){G[$]={stock_code:$,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(qe)}catch{}ge===X&&(F.value=Object.assign({},G))}function M(D){const G=y&&y.showStockDetail;if(typeof G=="function"){G(D);return}const ge=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;ge&&ge.info("请从其他页面打开股票详情: "+D)}async function u(){try{const D=await o("/api/focus/history?date="+k.value);A.value=D&&D.success&&D.data||{sessions:{},total:0}}catch(D){console.warn("[focus] 历史加载失败:",D),A.value={sessions:{},total:0}}}async function N(){m.value=!0;try{const D=await o("/api/ai/track");D&&D.success&&D.data?(P.value=D.data,l.value=(D.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):P.value=null}catch(D){console.warn("[focus] 效果块加载失败:",D),P.value=null}finally{m.value=!1}}async function oe(){const D=(K.value||"").trim();if(D){E.value=null;try{const G=await o("/api/focus/stock/"+encodeURIComponent(D));E.value=G&&G.success&&G.data&&G.data.rows||[]}catch(G){console.warn("[focus] 单股历史加载失败:",G),E.value=[]}}}async function J(){await w(),await u(),await N()}return f(async function(){await R(),await J()}),{curDate:k,session:_,results:S,history:A,track:P,trackLoading:m,trackNote:l,detailSplitEnabled:y.detailSplitEnabled,stockDetail:y.stockDetail,loading:h,expanded:L,stockCode:K,stockHistory:E,SESSIONS:r,ACTION_ORDER:c,TRACK_WINDOWS:p,ACTION_DOT:d,TIER_DOT:x,SESSION_LABELS:n,displayGroups:W,latestNote:ee,baseNote:ae,sessionLabel:i,fmtScore:B,tagType:q,rateTagType:s,fmtRate:b,toggle:g,detailOf:Z,loadResults:w,loadHistory:u,loadTrack:N,loadStockHistory:oe,loadAll:J,poolStatus:F,openStockDetail:M,actionPct:U}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:e,nextTick:f}=Vue,{currentView:t,statusFilter:c,dashboardData:d,loadHealthMetrics:x,getLoadDashboardData:r,getLastRefreshTime:n,getFetchPoolSignals:p}=a,o=e(!1),C=e(""),y=new Map,k=e([]),_=e(""),S=e(""),A=e([]),P=e(""),m=window.__quantModules.core||{},l=typeof m.createTtlCache=="function"?m.createTtlCache(15e3):null;let h=0;function L(){const ee=Date.now();ee-h<5e3||(h=ee,ElementPlus.ElMessage.success("有新数据，已更新"))}function K(ee,ae,B,U){!l||!ae||typeof m.silentRefresh!="function"||m.silentRefresh({cache:l,key:ae,fetchFn:async()=>{const q=await fetch(ee);if(!q.ok)throw new Error("HTTP "+q.status);const s=await q.json();return B?B(s):s},ttl:l.defaultTtl,apply:U,onChanged:L,onError:()=>{}})}const E=new Set;async function I(){var ee;try{const B=await(await fetch("/api/dates")).json();k.value=((ee=B.data)==null?void 0:ee.dates)||B.dates||[],k.value.length>0&&(_.value=k.value[k.value.length-1]),S.value=new Date().toLocaleTimeString()}catch(ae){console.error(ae)}}async function F(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),S.value="刷新中...",y.clear(),await I(),await H(),S.value=new Date().toLocaleTimeString()}catch(ee){console.error("数据刷新失败",ee)}}function X(){if(!_.value)return;const ae="/api/view/"+(t.value||"day")+"/"+_.value+"?status="+(c.value||"all")+"&format=csv";window.open(ae,"_blank")}async function H(){if(!_.value)return;const ee=`${t.value}_${_.value}`;if(E.has(ee))return;E.add(ee);const ae=`/api/view/${t.value}/${_.value}?status=all`,B=l&&typeof m.makeCacheKey=="function"?m.makeCacheKey("GET",`/api/view/${t.value}/${_.value}`,{status:"all"}):null,U=(b,i)=>{A.value=b,P.value=i||"",y.set(ee,{stocks:b,note:i||""})},q=b=>{U(b&&b.stocks||[],b&&b.note||"")};if(y.has(ee)){q(y.get(ee)),K(ae,B,b=>b,q),E.delete(ee);return}const s=B&&l?l.get(B):void 0;if(s!==void 0){q(s),K(ae,B,b=>b,q),E.delete(ee);return}o.value=!0,C.value={day:"日",week:"周",month:"月",year:"年"}[t.value]||t.value;try{const i=await(await fetch(ae)).json(),g=i.stocks||[];U(g,i.note||""),l&&B&&l.set(B,{stocks:g,note:i.note||""})}catch{try{const g=await(await fetch(`/api/calendar/${_.value}/consensus`)).json();A.value=(g.consensus||[]).map(Z=>({...Z,code:Z.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{o.value=!1}p(),E.delete(ee)}async function W(){const ee=l&&typeof m.makeCacheKey=="function"?m.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(l){const ae=l.get(ee);if(ae!==void 0){d.value=ae,x().catch(()=>{}),K("/api/dashboard",ee,B=>B.data||B,B=>{d.value=B,n().value=Date.now()});return}}await r()(),x().catch(()=>{}),l&&l.set(ee,d.value)}return{loading:o,loadingView:C,viewCache:y,dates:k,selectedDate:_,lastLoadTime:S,consensus:A,viewNote:P,loadDates:I,refreshCalendarData:F,exportCSV:X,loadConsensusData:H,loadDashboardCached:W}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:e}=Vue,{currentKlinePeriod:f,loadIndexKline:t,rememberDialogTrigger:c,menus:d,currentPage:x,currentSubPage:r,stockDetail:n,selectedDate:p}=a,o=ref({indices:[],market_sentiment:null});let C=null;const y=ref(!1),k=ref(null),_=ref(null),S=ref(!1);function A(){window.__quantModules.charts.disposeKline("stockKlineChart")}const P=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{P.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const m=ref(!1),l=ref(null),h=ref(!1),L=ref(0),K=ref(0);async function E(){try{const i=await(await fetch("/api/market/overview")).json();o.value=i,I(i)}catch(b){console.error("获取市场行情失败:",b)}}function I(b){C&&clearInterval(C),b&&b.in_trading_hours&&(C=setInterval(E,6e5))}function F(b){c(),k.value=b,_.value=null,f.value="daily",X(b.code),window.__quantModules.charts.disposeKline("indexKlineChart"),y.value=!0,setTimeout(async()=>{await t("daily")},500)}async function X(b){try{const g=await(await fetch("/api/ai/index-eval/"+b)).json();g.success&&g.data&&(_.value=g.data)}catch(i){console.warn("[getIndexAiScore] cache check failed:",i)}}async function H(){if(k.value){S.value=!0;try{const i=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:k.value.code,index_name:k.value.name,current_price:k.value.close,pct_chg:k.value.pct_chg})})).json();i.success?_.value=i.data:ElementPlus.ElMessage.error(i.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{S.value=!1}}}function W(b){window.__quantModules.charts.zoomKline("stockKlineChart",b)}function ee(){h.value=!0,setTimeout(()=>{h.value=!1},600)}function ae(b,i){if(b===i){ee();return}const g=800,Z=performance.now(),R=i-b;m.value=!0,l.value={value:R,dir:R>0?"up":"down"},h.value=!0,setTimeout(()=>{h.value=!1},600),setTimeout(()=>{l.value=null},2300);function w(v){const M=v-Z,u=Math.min(M/g,1),N=1-Math.pow(1-u,3),oe=Math.round(b+R*N);n.value&&n.value.score_data&&(n.value.score_data.score=oe),u<1?requestAnimationFrame(w):(n.value&&n.value.score_data&&(n.value.score_data.score=i),m.value=!1)}requestAnimationFrame(w)}function B(){if(!n.value||!n.value.score_data)return;const b=n.value.score_data.score;if(b==null)return;const i=600,g=performance.now();h.value=!0,setTimeout(()=>{h.value=!1},600);function Z(R){const w=Math.min((R-g)/i,1),v=1-Math.pow(1-w,3),M=Math.round(b*v);n.value&&n.value.score_data&&(n.value.score_data.score=M),w<1?requestAnimationFrame(Z):n.value&&n.value.score_data&&(n.value.score_data.score=b)}requestAnimationFrame(Z)}async function U(){var g;if(!n.value||!n.value.stock)return;const b=n.value.stock,i=(g=n.value.score_data)==null?void 0:g.score;try{const Z=new Date().toISOString().split("T")[0],R=p.value||Z,v=await(await fetch(`/api/calendar/stock/${encodeURIComponent(b)}/score?date=${R}`)).json();if(v.success&&v.score_data){const M=v.score_data.score;n.value&&(n.value.score_data=v.score_data),i!=null&&M!==i?ae(i,M):ee()}else ee()}catch(Z){console.warn("[refreshStockScore] failed:",Z)}}function q(b){P.value&&(L.value=b.touches[0].clientX,K.value=b.touches[0].clientY)}function s(b){if(!P.value)return;const i=L.value-b.changedTouches[0].clientX,g=K.value-b.changedTouches[0].clientY;if(Math.abs(i)>Math.abs(g)&&Math.abs(i)>80){const Z=d.value.map(function(w){return w.key}),R=Z.indexOf(x.value);if(i>0&&R<Z.length-1){const w=Z[R+1],v=window.__quantGoPage;v?v(w,""):(x.value=w,r.value="")}else if(i<0&&R>0){const w=Z[R-1],v=window.__quantGoPage;v?v(w,""):(x.value=w,r.value="")}}}return{marketData:o,marketRefreshTimer:C,fetchMarketData:E,indexDetailVisible:y,indexDetail:k,indexAiResult:_,indexAiLoading:S,showIndexDetail:F,loadCachedIndexEval:X,doIndexAiEvaluate:H,disposeStockKline:A,isMobile:P,zoomKlineRange:W,scoreAnimating:m,scoreDelta:l,scorePulse:h,triggerScorePulse:ee,animateScoreChange:ae,animateScoreEntrance:B,refreshStockScore:U,touchStartX:L,touchStartY:K,onTouchStart:q,onTouchEnd:s}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:e,currentPage:f,currentSubPage:t}=a,c=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),d=ref("idle"),x=ref("");async function r(){if(!c.value.webhook_url){x.value="请先输入Webhook地址";return}d.value="testing",x.value="";try{const D=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:c.value.webhook_url})})).json();D.success||D.status==="ok"?(x.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(x.value=D.message||"测试失败",ElementPlus.ElMessage.error(x.value))}catch{x.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}d.value="idle"}const n=Vue.ref(!1);async function p(){n.value=!0;try{const D=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{n.value=!1}}const o=ref(!1);function C(){e("ai","chat_history"),o.value=!0,Vue.nextTick(()=>{const J=document.querySelector('input[placeholder*="输入问题"]');J&&J.focus()})}const y=ref([]),k=ref({});async function _(){try{const D=await(await fetch("/api/ai/recommend-strategies")).json();D.success&&(y.value=D.recommendations||[])}catch(J){console.warn("[loadStrategyRecommendations] failed:",J)}}async function S(){try{const D=await(await fetch("/api/ai/usage-stats")).json();D.success&&(k.value=D)}catch(J){console.warn("loadAiUsage failed:",J)}}const A=ref({}),P=ref([]),m=ref(7);async function l(){try{const D=await(await fetch("/api/system/monitor")).json();D.success&&(A.value=D)}catch(J){console.warn("loadSysMonitor failed:",J)}}const h=ref({});async function L(){try{const D=await(await fetch("/api/system/health-detail")).json();D.success&&(h.value=D)}catch(J){console.warn("loadHealthDetail failed:",J)}}async function K(){try{const D=await(await fetch(`/api/analytics/rank?days=${m.value}`)).json();D.success&&(P.value=D.rank||[])}catch(J){console.warn("loadAnalytics failed:",J)}}const E=ref(!1);async function I(){if(!E.value){E.value=!0;try{const D=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return D&&D.success?D.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${D.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${D.date}）`):ElementPlus.ElMessage.error(D&&(D.detail||D.message)||"生成复盘失败"),L(),D}catch(J){ElementPlus.ElMessage.error("生成复盘失败: "+(J.message||""))}finally{E.value=!1}}}const F=ref(null),X=ref(!1);async function H(){try{const D=await(await fetch("/api/ai/fact-check/latest")).json();F.value=D&&D.success&&D.data||null}catch(J){console.warn("loadFactCheck failed:",J)}}async function W(){if(!X.value){X.value=!0;try{const D=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return D&&D.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${D.data.pass_rate!=null?D.data.pass_rate+"%":"--"} (${D.data.checked} 个数字)`),H()):ElementPlus.ElMessage.error(D&&(D.detail||D.message)||"事实护栏抽查失败"),D}catch(J){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(J.message||""))}finally{X.value=!1}}}const ee=ref([]),ae=ref(!1);async function B(){try{const D=await(await fetch("/api/backup/list")).json();D.success&&(ee.value=D.backups||[])}catch(J){console.error("加载备份列表失败",J)}}async function U(){ae.value=!0;try{const D=await(await fetch("/api/backup/create",{method:"POST"})).json();D.success?(ElementPlus.ElMessage.success(D.message||"备份成功"),B()):ElementPlus.ElMessage.error(D.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{ae.value=!1}}const q=ref(""),s=ref("");async function b(J){q.value=J,s.value="";try{const D=window.__quantModules&&window.__quantModules.core||{},G=typeof D.authHeaders=="function"?D.authHeaders():{},ie=await fetch("/api/reports/export?format="+encodeURIComponent(J),{headers:G});if(!ie.ok)throw new Error("HTTP "+ie.status);const ge=await ie.blob(),qe=URL.createObjectURL(ge),$=document.createElement("a");$.href=qe;const ue=new Date().toISOString().slice(0,10);$.download="report_"+ue+"."+J,document.body.appendChild($),$.click(),document.body.removeChild($),URL.revokeObjectURL(qe),s.value="报表已导出 ("+J.toUpperCase()+")"}catch(D){s.value="报表导出失败: "+(D.message||D)}finally{q.value=""}}async function i(J){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${J} 恢复吗？当前数据将被覆盖。`,"恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(D){console.warn("[restoreBackup] confirm cancelled:",D);return}try{const G=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:J})})).json();G.success?(ElementPlus.ElMessage.success(G.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(G.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const g=ref(!1),Z=ref(0),R=[{icon:"calendar",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"bot",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 AI 按钮可随时快速问股。"},{icon:"send",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function w(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{Z.value=0,g.value=!0},800)}function v(){g.value=!1,localStorage.setItem("quant_tour_done","1")}function M(){g.value=!1,localStorage.setItem("quant_tour_done","1")}const u=ref(""),N=ref(!1);async function oe(){if(!u.value||!u.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}N.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:u.value.trim(),page:f.value+"/"+t.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(u.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{N.value=!1}}return{feishuConfig:c,feishuTestStatus:d,feishuTestMessage:x,feishuSaving:n,testFeishuWebhook:r,saveFeishuConfig:p,aiFabHidden:o,openAiFab:C,strategyRecommendations:y,aiUsage:k,loadStrategyRecommendations:_,loadAiUsage:S,sysMonitor:A,analyticsRank:P,analyticsDays:m,loadSysMonitor:l,loadAnalytics:K,healthDetail:h,loadHealthDetail:L,reviewTriggering:E,triggerMarketReview:I,factCheck:F,factCheckRunning:X,loadFactCheck:H,triggerFactCheck:W,backups:ee,backupCreating:ae,loadBackups:B,createBackup:U,restoreBackup:i,reportExporting:q,reportExportMsg:s,exportReport:b,tourVisible:g,tourStep:Z,tourSteps:R,maybeShowTour:w,skipTour:v,finishTour:M,feedbackText:u,feedbackSubmitting:N,submitFeedback:oe}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:e}=Vue,{currentView:f,selectedDate:t,dates:c,loadConsensusData:d,hapticFeedback:x}=a,r=e(()=>({day:"天",week:"周",month:"月",year:"年"})[f.value]||"天"),n=e(()=>({day:"date",week:"week",month:"month",year:"year"})[f.value]||"date"),p=e(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[f.value]||"YYYY-MM-DD"),o=e(()=>!t.value||!c.value||c.value.length===0?!1:t.value>c.value[0]),C=e(()=>!t.value||!c.value||c.value.length===0?!1:t.value<c.value[c.value.length-1]);function y(A){x("light"),f.value=A;let P=t.value||c.value[c.value.length-1];if(A==="year"){const m=P.substring(0,4),l=c.value.find(h=>h.startsWith(m));t.value=l||P}else if(A==="month"){const m=P.substring(0,7),l=c.value.find(h=>h.startsWith(m));t.value=l||P}setTimeout(d,50)}function k(A){x("light");const P=t.value,m=c.value,l=m.indexOf(P);if(l<0)return;let h=1;f.value==="week"&&(h=5),f.value==="month"&&(h=22),f.value==="year"&&(h=250);const L=l+A*h;if(L>=0&&L<m.length){const K=m[L];if(f.value==="month"){const E=K.substring(0,7),I=m.find(F=>F.startsWith(E));t.value=I||K}else if(f.value==="year"){const E=K.substring(0,4),I=m.find(F=>F.startsWith(E));t.value=I||K}else t.value=K;d()}}function _(A){if(!c.value||c.value.length===0)return!1;const P=A.getFullYear(),m=String(A.getMonth()+1).padStart(2,"0"),l=String(A.getDate()).padStart(2,"0"),h=`${P}-${m}-${l}`;return!c.value.includes(h)}function S(A){A&&A.length>10&&(t.value=A.substring(0,10)),d()}return{viewUnit:r,datePickerType:n,dateFormat:p,canNavPrev:o,canNavNext:C,switchView:y,navigateDate:k,disabledDate:_,onDateChange:S}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:e,subPageNames:f,navigateTo:t,currentPage:c,currentSubPage:d,currentView:x,navigateDate:r,switchView:n,getLoadDashboardData:p,refreshCalendarData:o,getLoadAiHistory:C,exportCSV:y,getShowBatchEvaluate:k,openAiFab:_,toggleSidebar:S,showStockDetail:A,getSelectedDate:P,markExternalStock:m}=a,l=ref("");async function h(B,U){if(!B||B.trim().length<1){U([]);return}const q=window.QuantCommandPanel;let s=[];q&&e.value&&(s=q.buildSearchSuggestions(B,e.value,f,q.DEFAULT_COMMANDS));const b=window.__quantModules&&window.__quantModules.pinyin;b&&b.searchCoreStocks(B).forEach(function(i){s.push({value:i.code+" "+i.name,type:"stock",code:i.code,name:i.name,label:i.name,subLabel:i.code,icon:"trending-up",iconName:"trending-up"})});try{const g=await(await fetch("/api/search?q="+encodeURIComponent(B))).json();if(g.success&&g.results){const Z=g.results.map(function(w){return{value:w.code+" "+w.name,type:"stock",code:w.code,name:w.name,label:w.name,subLabel:w.code,icon:"trending-up",iconName:"trending-up"}}),R=[];(g.groups||[]).forEach(function(w){(w.items||[]).forEach(function(v){v.type==="sector"?R.push({value:v.name+" · "+v.subLabel,type:"sector",name:v.name,label:v.name,subLabel:"板块",icon:"layers",iconName:"layers"}):v.type==="strategy"?R.push({value:v.name+" · 策略",type:"strategy",id:v.id,name:v.name,label:v.name,subLabel:"策略",icon:"target",iconName:"target"}):v.type==="menu"&&R.push({value:v.name,type:"menu",menuKey:v.menuKey,name:v.name,label:v.name,subLabel:v.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),U(s.concat(Z,R))}else U(s)}catch(i){console.warn("[searchStocks] fetch failed:",i),U(s)}}function L(B){return B?B.type==="menu"?{action:"menu",menuKey:B.menuKey,subPage:B.subPage}:B.type==="command"?{action:"command",key:B.key}:B.type==="sector"?{action:"sector",name:B.name}:B.type==="strategy"?{action:"strategy",id:B.id,name:B.name}:B.type==="stock"||B.code&&B.name?{action:"stock",code:B.code,name:B.name}:null:null}function K(B){l.value="";const U=window.QuantCommandPanel,q=U?U.dispatchSearchSelection(B):L(B);if(q){if(q.action==="menu"){t(q.menuKey,q.subPage);return}if(q.action==="command"){F(q.key);return}if(q.action==="sector"){t("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(q.name);return}if(q.action==="strategy"){t("research","overview");return}if(q.action==="stock"){(c.value!=="calendar"||d.value!=="calendar")&&t("calendar","calendar"),typeof m=="function"&&m(q.code),I(q.code,q.name);return}}}let E=null;function I(B,U){E&&(clearInterval(E),E=null);const q=function(){typeof A=="function"&&A(B,U)},s=P?P():null;if(s&&s.value){q();return}const b=Date.now();E=setInterval(function(){((P?P().value:!0)||Date.now()-b>4e3)&&(clearInterval(E),E=null,q())},60)}function F(B){if(B==="refresh"){const U=c.value;U==="strategies"?p().catch(function(){}):U==="calendar"?o().catch(function(){}):U==="ai"&&C().catch(function(){})}else B==="export"?y():B==="batch"?k().value=!0:B==="ai"?_():B==="sidebar"?S():B==="open-eval-history"?t("ai","history"):B==="open-shortterm"&&t("shortterm","overview")}const X=ref(!1),H=ref(!1);function W(B){if(!B)return!1;const U=B.tagName;return U==="INPUT"||U==="TEXTAREA"||U==="SELECT"||B.isContentEditable}function ee(B){if(W(B.target))return;const U=B.key.toLowerCase();if(B.ctrlKey&&U==="k"){B.preventDefault(),H.value=!0;return}if(B.ctrlKey&&U==="/"){B.preventDefault(),X.value=!X.value;return}if(B.ctrlKey&&U==="h"){B.preventDefault(),t("ai","history");return}if(B.ctrlKey&&B.shiftKey&&U==="s"){B.preventDefault(),t("shortterm","overview");return}if(!(B.ctrlKey||B.metaKey||B.altKey)){if(U>="1"&&U<="5"){const q=parseInt(U)-1,s=e.value[q];s&&t(s.key,s.subPages[0]||"");return}if(U==="r"&&ae(),(U==="arrowleft"||U==="arrowright"||U==="arrowup"||U==="arrowdown")&&c.value==="calendar")if(B.preventDefault(),U==="arrowleft"||U==="arrowright")r(U==="arrowleft"?-1:1);else{const q=["day","week","month","year"].indexOf(x.value),s=["day","week","month","year"][(q+(U==="arrowup"?-1:1)+4)%4];n(s)}}}function ae(){const B=c.value;B==="strategies"?p().catch(()=>{}):B==="calendar"?o().catch(()=>{}):B==="ai"&&C().catch(()=>{})}return{searchQuery:l,searchStocks:h,onSearchSelect:K,runGlobalCommand:F,shortcutHelpVisible:X,commandPaletteVisible:H,isTypingTarget:W,handleGlobalKeydown:ee,refreshCurrentPage:ae}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:e,loadUserConfig:f,loadDates:t,loadDashboardData:c,loadDashboardCached:d,loadHealthMetrics:x,loadConsensusData:r,applyTheme:n,maybeShowTour:p,loadAiVendors:o,loadGroupConfig:C,groupsConfig:y}=a,k=function(U){const q=window.__quantModules&&window.__quantModules.themes;return q&&q.applyLegacyTheme?q.applyLegacyTheme(U):n(U)},_="qc_login_username";let S="";try{S=localStorage.getItem(_)||""}catch{S=""}const A=ref({username:S,password:""}),P=ref(!1),m=ref(!1),l=ref(!1),h=ref({oldPassword:"",newPassword:"",confirmPassword:""}),L=ref(!1),K=ref(!1),E=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),I=ref(1);async function F(){try{(await(await fetch("/api/setup/status")).json()).needed&&(E.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},I.value=1,K.value=!0)}catch(U){console.warn("[checkSetupWizard] failed:",U)}}async function X(){try{const U={new_password:E.value.newPassword,ai_key:E.value.aiKey,ai_provider:E.value.aiProvider,ai_model:E.value.aiModel,ai_endpoint:E.value.aiEndpoint,tushare_token:E.value.tushareToken},s=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(U)})).json();s.success?(K.value=!1,ElementPlus.ElMessage.success("初始化完成"),await f()):ElementPlus.ElMessage.error(s.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function H(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(K.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function W(){if(!A.value.username||!A.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}P.value=!0;try{const q=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(A.value)})).json();if(q.success){e.value=q.user,localStorage.setItem("quant_user",JSON.stringify(q.user)),localStorage.setItem("quant_token",q.data.access_token),k(q.user.theme||"gold");try{localStorage.setItem(_,A.value.username||"")}catch{}typeof C=="function"&&await C().catch(function(){}),typeof o=="function"&&o(),await f(),await t(),await Promise.all([d(),r(),x().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),q.data&&q.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),p(),q.user.role==="admin"&&setTimeout(F,500)}else ElementPlus.ElMessage.error(q.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{P.value=!1}}async function ee(){m.value=!0;try{const q=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();q.success?(e.value=q.user,localStorage.setItem("quant_user",JSON.stringify(q.user)),localStorage.setItem("quant_token",q.data.access_token),k(q.user.theme||"gold"),typeof C=="function"&&await C().catch(function(){}),await f(),await t(),await c(),x().catch(()=>{}),await r(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(q.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{m.value=!1}}function ae(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{e.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{y&&(y.value={})}catch{}try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function B(){if(!h.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!h.value.newPassword||h.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(h.value.newPassword!==h.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}L.value=!0;try{const U=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:h.value.oldPassword,new_password:h.value.newPassword})}),q=await U.json();U.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),l.value=!1,h.value={oldPassword:"",newPassword:"",confirmPassword:""},ae()):ElementPlus.ElMessage.error(q.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{L.value=!1}}return{loginForm:A,logining:P,guestLogining:m,showChangePassword:l,changePasswordForm:h,changingPassword:L,showSetupWizard:K,setupForm:E,setupStep:I,checkSetupWizard:F,completeSetupWizard:X,resetSetupWizard:H,handleLogin:W,handleGuestLogin:ee,handleLogout:ae,doChangePassword:B}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:e}=Vue;let f=null;const{strategyFilter:t,currentView:c,statusFilter:d,currentPage:x,currentSubPage:r,menus:n,currentUser:p,strategyFilterCounts:o,lazyTick:C,dates:y,selectedDate:k,consensus:_,loadConsensusData:S,fetchMerrillClock:A,fetchMarketData:P,loadWatchlist:m,loadAiHistory:l,preloadWatchlistKline:h,loadChatHistory:L,loadSystemStatus:K,checkTushareConnection:E,loadSysMonitor:I,loadAnalytics:F,loadHealthDetail:X,loadHealthMetrics:H,loadAiUsage:W,loadFactCheck:ee,loadAutoEvaluateConfig:ae,loadDatasourceConfig:B,loadFeishuConfig:U,loadAiConfig:q,loadAiVendors:s,loadRateLimit:b,loadDataRefreshConfig:i,loadBackups:g,loadAllGroups:Z,loadUsers:R,stockDetailTab:w,stockDetailVisible:v,stockKlineLoaded:M,loadStockKline:u,currentKlinePeriod:N,showMerrillDetail:oe,indexDetailVisible:J,restoreDialogFocus:D}=a;e(t,G=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(G.selected)),localStorage.setItem("quant_strategy_filter_mode",G.mode)},{deep:!0}),e([c,d],(G,ie)=>{G[0]!==ie[0]&&S()}),e([x,r],([G,ie])=>{var ge;try{const $=!(G==="calendar"&&ie==="calendar")&&ie||"",ue=$?"#"+G+"/"+$:"#"+G;window.location.hash!==ue&&(window.location.hash=ue)}catch{}if(ie&&localStorage.setItem("quant_last_subpage",ie),!ie&&n.value.find(qe=>qe.key===G)){const qe=n.value.find($=>$.key===G);qe&&qe.subPages.length>0&&(r.value=qe.subPages[0])}if(G==="shortterm"&&ie==="market-review"){const qe=window.__lazyLoaders&&window.__lazyLoaders.research;qe&&qe().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function($){$&&$.name&&!$.__quantRegistered&&(window.__quantApp.component($.name,$),$.__quantRegistered=!0)}),C&&C.value++}).catch(function($){console.warn("[lazy] research 组件补加载失败",$)})}G==="calendar"&&ie==="calendar"&&(!_.value||_.value.length===0)&&(y.value.length>0&&!k.value&&(k.value=y.value[y.value.length-1]||""),setTimeout(S,50)),G==="calendar"&&ie==="pool"&&(!_.value||_.value.length===0)&&(y.value.length>0&&!k.value&&(k.value=y.value[y.value.length-1]||""),setTimeout(S,50)),G==="strategies"&&(ie==="merrill"&&A(),ie==="market"&&P(),ie==="consensus"&&(!_.value||_.value.length===0)&&setTimeout(S,50)),G==="ai"&&(ie==="watchlist"&&(m(),l(),setTimeout(h,500)),ie==="history"&&l(),ie==="overview"&&(l(),m()),ie==="chat_history"&&L()),(G==="system"||G==="ops")&&((ge=p.value)==null?void 0:ge.role)==="admin"&&(ie==="status"&&(K(),E()),ie==="health"&&(X(),H()),ie==="schedule"&&X(),ie==="guard"&&ee(),ie==="usage"&&(I(),F(),X(),H(),W(),ee()),ie==="autoeval"&&(ae(),s()),ie==="datasource"&&B(),ie==="feature"&&(U(),q(),b(),i(),g()),ie==="user"&&(Z(),R())),(G==="system"||G==="ops")&&ie==="usage"?f||(f=setInterval(()=>{I(),F(),X(),H(),W()},3e4)):f&&(clearInterval(f),f=null)}),e(w,(G,ie)=>{G==="kline"&&ie&&ie!=="kline"&&v.value&&(M.value=!1,setTimeout(async()=>{!await u(N.value)&&v.value&&w.value==="kline"&&setTimeout(()=>u(N.value),800)},50))}),e(oe,G=>{G||(document.documentElement.style.overflow="",document.body.style.overflow="")}),e([v,J],([G,ie])=>{!G&&!ie&&D()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:e,applyTheme:f,menus:t,currentPage:c,currentSubPage:d,currentView:x,currentKlinePeriod:r,selectedDate:n,dates:p,loadDates:o,loadConsensusData:C,loadDashboardCached:y,appVersion:k,themes:_,fetchMarketData:S,fetchMerrillStages:A,fetchMerrillClock:P,loadAiConfig:m,loadAiVendors:l,loadAiCatalog:h,currentUser:L,loadUserConfig:K,loadAutoEvaluateConfig:E,loadGroupConfig:I,loadUsers:F,loadAllGroups:X,loadAiHistory:H}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",e);function W(R,w){const v={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(R==="calendar"&&v[w])return c.value="calendar",d.value="calendar",v[w]&&(x.value=v[w]),!0;if(R==="research"&&(w==="strategy-write"||w==="custom-write")){c.value="research",d.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",w==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const R=window.location.hash||"";if(!R||R==="#")return;const w=R.replace(/^#\/?/,"").split("/"),v=w[0],M=w[1]||"",u=t.value.find(function(N){return N.key===v});if(u&&!W(v,M)){if(!M)c.value=v,d.value=u.subPages[0]||"";else if(u.subPages.indexOf(M)>=0)c.value=v,d.value=M;else return;window.__lazyLoaders&&window.__lazyLoaders[v]&&window.__quantGoPage&&window.__quantGoPage(v,d.value).catch(function(){})}});const ee=(R,w=3e3,v="")=>{const M=new Promise((u,N)=>setTimeout(()=>N(new Error("timeout")),w));return Promise.race([R,M]).catch(u=>{console.warn(`[init] ${v||"task"} failed:`,u.message)})},ae=localStorage.getItem("quant_theme"),B=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const R=window.__quantModules.themes;let w=B.theme||"system",v=B.theme_hue!=null&&B.theme_hue!==""?B.theme_hue:null;const M=typeof R.migrateLegacyTheme=="function"?R.migrateLegacyTheme():null;v==null&&M&&(w=M.mode,v=M.hue),v==null&&(v=45),f(w,v)}else ae&&f(ae);await I().catch(function(){}),function(){var R=window.location.hash||"",w=!1;if(R&&R!=="#"){var v=R.replace(/^#\/?/,"").split("/"),M=v[0],u=v[1]||"",N=t.value.find(function(ie){return ie.key===M});N&&(W(M,u)||(c.value=M,u&&N.subPages.indexOf(u)>=0?d.value=u:u||(d.value=N.subPages[0]||"")),w=!0)}if(!w){var oe=localStorage.getItem("quant_last_page");oe&&t.value.some(function(ie){return ie.key===oe})?c.value=oe:B.default_view&&t.value.some(function(ie){return ie.key===B.default_view})&&(c.value=B.default_view);var J=localStorage.getItem("quant_last_subpage");J&&(d.value=J)}var D=localStorage.getItem("quant_last_date");D&&(n.value=D);var G=localStorage.getItem("quant_last_view");G&&(x.value=G),window.__lazyLoaders&&window.__lazyLoaders[c.value]&&window.__quantGoPage&&window.__quantGoPage(c.value,d.value).catch(function(){})}(),fetch("/api/health").then(R=>R.json()).then(R=>{R.version&&(k.value=R.version)}).catch(()=>{});const U=localStorage.getItem("quant_user"),q=localStorage.getItem("quant_token"),s=!!(U&&q),b=Promise.all([Promise.resolve().then(()=>{_.value={light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}}),ee(S(),3e3,"marketData"),ee(A(),2e3,"merrillStages")]).then(()=>{ee(P(),3e3,"merrillClock")});if(m(),h(),s&&L.value&&l(),!s||!L.value){await b;return}let i=!0;try{i=(await fetch("/api/users/me")).ok}catch{i=!1}if(!i){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),L.value=null;return}if(L.value){const R=L.value.theme||"",w=window.__quantModules&&window.__quantModules.themes;let v=B.theme||"system",M=B.theme_hue!=null&&B.theme_hue!==""?B.theme_hue:null;if(M==null&&w&&typeof w.migrateLegacyTheme=="function"){const u=w.migrateLegacyTheme();if(u)v=u.mode,M=u.hue;else if(R&&w.LEGACY_MAP&&w.LEGACY_MAP[R]){const N=w.LEGACY_MAP[R];v=N[0],M=N[1]}}M==null&&(M=45),f(v,M)}if(window.__quantModules&&window.__quantModules.preferences){const w=await window.__quantModules.preferences.loadPreferences();var g=localStorage.getItem("quant_last_page");!g&&w.default_view&&t.value.some(function(v){return v.key===w.default_view})&&(c.value=w.default_view),w.theme&&f(w.theme,w.theme_hue!=null&&w.theme_hue!==""?w.theme_hue:null),r&&(w.chart_period==="weekly"||w.chart_period==="monthly")&&(r.value=w.chart_period)}await Promise.all([ee(K(),2e3,"userConfig"),ee(o(),2e3,"dates")]),E().catch(()=>{}),I().catch(()=>{});const Z=c.value==="strategies"?ee(y(),2e3,"dashboard"):ee(C(),2e3,"consensus");await Promise.all([Z,ee(F(),2e3,"users"),ee(H(),2e3,"aiHistory")]),X().catch(()=>{})}}}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:e,onMounted:f,onUnmounted:t,watch:c,nextTick:d}=Vue,x=a(!1),r=window.__quantModules&&window.__quantModules.i18n||{},n=r.SUPPORTED_LOCALES||["zh-CN","en"],p=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",o=a(n.indexOf(p)!==-1?p:"zh-CN");typeof r.bindLocale=="function"&&r.bindLocale(o);const C=typeof r.t=="function"?r.t:function(j){return String(j)};function y(j){n.indexOf(j)!==-1&&(o.value=j,typeof r.setLocale=="function"&&r.setLocale(j),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",j))}function k(j,re){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(j,re):j==null?"":String(j)}function _(j){(j.key==="Enter"||j.key===" "||j.key==="Spacebar")&&(j.preventDefault(),j.currentTarget&&typeof j.currentTarget.click=="function"&&j.currentTarget.click())}let S=null;function A(){document.activeElement&&document.activeElement!==document.body&&(S=document.activeElement)}function P(){if(S&&S.isConnected)try{S.focus()}catch{}S=null}const m=a(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{m.value=!0}),window.addEventListener("offline",()=>{m.value=!1})),window.addEventListener("beforeunload",j=>{if(x.value)return j.preventDefault(),j.returnValue="您有未保存的配置变更，确定要离开吗？",j.returnValue});function l(j="light"){typeof navigator<"u"&&navigator.vibrate&&(j==="light"?navigator.vibrate(10):j==="medium"?navigator.vibrate(20):j==="heavy"&&navigator.vibrate([10,30,10]))}const h=useMerrillClock(),{merrillData:L,merrillStagesConfig:K,showMerrillDetail:E,merrillDetailData:I,merrillClockConfig:F,merrillClockLastUpdated:X,merrillReevalResult:H,merrillReevalLoading:W,stages:ee,indicatorList:ae,dimensionScoreList:B,detailDimensionScoreList:U,confidenceColor:q,timelineStages:s,clockPosition:b,merrillProgressStyle:i,FULL_CYCLE_MONTHS:g,getStageAngle:Z,getCycleProgress:R,getCurrentStageMonths:w,getStageTotalMonths:v,isStageCompleted:M,getCharLabel:u,getAssetName:N,getRankColor:oe,fetchMerrillStages:J,fetchMerrillClock:D,loadMerrillTimeline:G,showTimelineStage:ie,merrillTimeline:ge,timelineLoading:qe,showStageDetail:$,saveMerrillClockConfig:ue,doMerrillReevaluate:De,startAutoRefresh:ne,stopAutoRefresh:be,merrillSnapshots:Pe,merrillSnapshotsTotal:me,fetchMerrillSnapshots:we}=h,xe=a(localStorage.getItem("sidebar_collapsed")==="1");function ce(){xe.value=!xe.value,localStorage.setItem("sidebar_collapsed",xe.value?"1":"0")}const se=a(null),fe=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","about","glossary","notification"],guestSubPages:["config","about"]}],Ne=e(()=>{var Je,Wt,Jt;const j=((Je=st.value)==null?void 0:Je.role)||"guest",re=((Wt=st.value)==null?void 0:Wt.group)||j,ye=((Jt=se.value)==null?void 0:Jt[re])||null;return fe.map(jt=>{if(ye&&ye.visible_menus&&jt.key in ye.visible_menus&&!ye.visible_menus[jt.key])return null;const xa={...jt,name:C("nav."+jt.key)||jt.name};return ye!=null&&ye.visible_sub_pages&&(xa.subPages=jt.subPages.filter(vs=>{const Nd=jt.key+"."+vs;return ye.visible_sub_pages[Nd]!==!1})),jt.key==="system"&&j==="guest"&&jt.guestSubPages&&(xa.subPages=jt.guestSubPages),xa}).filter(Boolean)});async function Be(){try{if(!localStorage.getItem("quant_token"))return;const re=await fetch("/api/groups/my");if(re.ok){const ye=await re.json();se.value={[ye.group_id]:ye.group}}}catch(j){console.warn("loadGroupConfig:",j)}}const We=a("strategies"),Et=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},pt=a(Et.navMode);function Pt(j){const re=window.__quantModules&&window.__quantModules.navModeCore;pt.value=re?re.normalizeNavMode(j):j==="tree"||j==="toptab"?j:"toptab",re&&re.writePrefs({navMode:pt.value})}const Se=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function Ee(j,re=""){l("light"),We.value=j,te.value=re,localStorage.setItem("quant_last_subpage",re)}function Ve(){const j=Ne.value;if(!j||!j.length)return;if(!j.some(function(Fe){return Fe.key===We.value})){const Fe=j[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",Fe.key),We.value=Fe.key,te.value=Fe.subPages&&Fe.subPages[0]||"";return}const ye=j.find(function(Fe){return Fe.key===We.value});ye&&ye.subPages&&ye.subPages.length&&!ye.subPages.includes(te.value)&&(te.value=ye.subPages[0])}const Oe=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],$e=a("multifactor"),Xe=a(null),Ye=a(1e5),it=a(!1),bt=a(null);let Mt=null,Ht=null;async function sa(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const re={initial_capital:Ye.value||1e5};Xe.value&&Xe.value.length===2&&(re.start_date=Xe.value[0],re.end_date=Xe.value[1]),it.value=!0,bt.value=null;try{const ye=await fetch("/api/strategies/"+$e.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(re)});if(!ye.ok){const Wt=await ye.json().catch(()=>({}));throw new Error(Wt.detail||"回测失败")}const Fe=await ye.json(),Je=Fe.result||{};if(!Je.success)throw new Error(Je.message||"回测失败");Fe.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),bt.value={total_return_pct:((Je.total_return??0)*100).toFixed(2),annual_return_pct:((Je.annual_return??0)*100).toFixed(2),max_drawdown_pct:((Je.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(Je.sharpe_ratio??0).toFixed(2),win_rate:((Je.win_rate??0)*100).toFixed(2),out_sample:Je.outsample_total_return===void 0?"":((Je.outsample_total_return??0)*100).toFixed(2),overfit_warning:Je.overfit_warning||!1,message:Je.message||""},O(Je.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(ye){ElementPlus.ElMessage.error(ye.message||"回测失败")}finally{it.value=!1}}function O(j){const re=document.getElementById("backtestEquityChart");if(!re||!j||j.length===0)return;const ye=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Fe=()=>{Ht=j,Mt&&(Mt.dispose(),Mt=null),Mt=echarts.init(re),Mt.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const Je=j.map(Jt=>Jt.date||Jt[0]),Wt=j.map(Jt=>Jt.value??Jt[1]);Mt.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:Je,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:Wt,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};ye?ye().then(Fe).catch(()=>{}):Fe()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){Ht&&O(Ht)}));const te=a("overview");(function(){const j=window.QuantSessionRestore;if(j){const re=j.restore();re&&re.page&&(We.value=re.page,re.sub&&(te.value=re.sub))}})(),Vue.watch(te,function(){wn()});const Ce=e(()=>{const j=fe.find(re=>re.key===We.value);return j?j.name:We.value}),Ie=a(0),Ue=e(()=>{Ie.value;const j={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},re=te.value;return We.value==="shortterm"&&re==="market-review"?"qc-research-page":We.value==="ops"&&re==="execution"?"qc-strategies-page":j[We.value]||""}),wt=a(!1),Qe=a({}),Ge=a([]);a("");const _t=a([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),ot=a("day"),gt=a("all"),st=a(null);c(Ne,function(){Ve()}),c([We,te],function(){const j=document.querySelector(".main-content");j&&(j.scrollTop=0)}),function(){if(typeof localStorage>"u")return;const j=localStorage.getItem("quant_user"),re=localStorage.getItem("quant_token");if(j&&re)try{st.value=JSON.parse(j)}catch{}}();const Bt=a(!1),xt=a("kline"),Y=a(null),ke=a(!1),je=a(localStorage.getItem("qc_detail_mode")||"split"),dt=a(window.innerWidth<=1024),At=e(()=>je.value==="split"&&!dt.value);function Rt(j){je.value=j;try{localStorage.setItem("qc_detail_mode",j)}catch{}}window.addEventListener("resize",()=>{dt.value=window.innerWidth<=1024});const mt=35,Dt=a(parseInt(localStorage.getItem("qc_split_width")||"",10)||null);function Ut(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",Dt.value?Dt.value+"px":mt+"%")}Ut();function $t(j){const re=Math.max(1,Math.min(j,2e3));Dt.value=re,Ut();try{localStorage.setItem("qc_split_width",String(re))}catch{}}function St(j){if(Dt.value)return Dt.value;const re=j?j.getBoundingClientRect().width:0;return Math.max(200,Math.floor(re*mt/100))}let ht=null;function ta(j,re){if(!re||dt.value)return;j.preventDefault();const ye=re.getBoundingClientRect().width;ht={startX:j.clientX,startW:St(re),minW:Math.max(200,Math.floor(ye*mt/100)),maxW:Math.floor(ye/2)},document.body.classList.add("qc-split-resizing")}function zt(j){if(!ht)return;const re=j.clientX-ht.startX;let ye=ht.startW+re;ye=Math.max(ht.minW,Math.min(ye,ht.maxW)),Dt.value=ye,Ut();try{localStorage.setItem("qc_split_width",String(ye))}catch{}}function da(){ht&&(ht=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",zt),document.addEventListener("mouseup",da));function Xt(j){const re=j.target&&j.target.closest?j.target.closest("[data-split-resize]"):null;if(!re)return;const ye=re.closest("[data-split-root]");ta(j,ye)}typeof document<"u"&&document.addEventListener("mousedown",Xt,!0);const na={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于",glossary:"术语表"},ut=a({});function Zt(j,re){return na[re]||re}function ua(j){const re=fe.find(Fe=>Fe.key===j);if(!re||!re.subPages||!re.subPages.length)return;if(!(ut.value[j]||[]).length){const Fe=re.subPages[0];ut.value=Object.assign({},ut.value,{[j]:[{subPage:Fe,title:Zt(j,Fe)}]})}}function wa(j,re){const ye=window.__quantModules&&window.__quantModules.tabsCore,Fe=Zt(j,re);if(ye){const Je=ye.openTab(ut.value,j,re,Fe);ut.value=Je.groups}else{const Je=ut.value[j]||[];Je.some(Wt=>Wt.subPage===re)||(ut.value=Object.assign({},ut.value,{[j]:Je.concat([{subPage:re,title:Fe}])}))}Ee(j,re)}function Sa(j,re){const ye=window.__quantModules&&window.__quantModules.tabsCore,Fe=te.value;let Je=null;if(ye)Je=ye.closeTab(ut.value,j,re,Fe),ut.value=Je.groups;else{const jt=ut.value[j]||[];ut.value=Object.assign({},ut.value,{[j]:jt.filter(xa=>xa.subPage!==re)})}if(!(ut.value[j]||[]).length){ua(j);const jt=fe.find(vs=>vs.key===j),xa=jt&&jt.subPages&&jt.subPages[0];xa&&Ee(j,xa);return}const Jt=Je?Je.nextActive:null;Jt&&Ee(j,Jt)}function la(j,re){if(!(ut.value[j]||[]).some(Fe=>Fe.subPage===re)){wa(j,re);return}Ee(j,re)}c([We,te],([j,re])=>{ua(j);const ye=ut.value[j]||[];re&&!ye.some(Fe=>Fe.subPage===re)&&(ut.value=Object.assign({},ut.value,{[j]:ye.concat([{subPage:re,title:Zt(j,re)}])}))},{immediate:!0});const V=function(j){if(!(j.ctrlKey&&j.key==="Tab"))return;const re=We.value,ye=ut.value[re]||[];if(ye.length<=1)return;j.preventDefault();const Fe=te.value,Je=Math.max(0,ye.findIndex(jt=>jt.subPage===Fe)),Wt=j.shiftKey?(Je-1+ye.length)%ye.length:(Je+1)%ye.length,Jt=ye[Wt];Jt&&la(re,Jt.subPage)};window.addEventListener("keydown",V);const _e=a({light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}),He=a("light"),ze=[45,220,0,140,270,320,180,25,250,-1],vt={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色",180:"青色",25:"橙色",250:"靛蓝","-1":"中性"},Ze=a(45),Lt=a(function(){const j=window.__quantModules&&window.__quantModules.preferences;return j&&j.getPreference&&j.getPreference("theme")||"system"}());(function(){const j=window.__quantModules&&window.__quantModules.preferences,re=j&&j.getPreference&&j.getPreference("theme_hue");re!=null&&re!==""&&(Ze.value=parseInt(re,10))})();const Kt=a("comfortable");(function(){const j=window.__quantModules&&window.__quantModules.preferences;j&&j.applyDensity&&(Kt.value=j.applyDensity()||"comfortable")})();function Gt(j){return j<0?"hsl(0, 0%, 46%)":"hsl("+j+", 75%, 42%)"}function Ca(j){return vt[j]||"自定义 "+j}const va=a(""),ma=a([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),ia=a({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),La=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],fa=a({day:[],week:[],month:[],year:[]}),Ia=a({});function pa(j,re){let ye=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(ye=window.__quantModules.themes.applyTheme(j,re)),He.value=ye&&ye.mode?ye.mode:j==="dark"||j==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function Pa(j,re){const ye=window.__quantModules&&window.__quantModules.preferences;if(!(!ye||!ye.setPreferences))try{ye.setPreferences({theme:j}),re!=null&&re!==""&&ye.setPreferences({theme_hue:parseInt(re,10)})}catch{}}function ka(j,re){pa(j,re),re!=null&&re!==""&&(Ze.value=parseInt(re,10));const ye=window.__quantModules&&window.__quantModules.themes;let Fe=j;ye&&ye.LEGACY_MAP&&ye.LEGACY_MAP[j]&&(Fe=ye.LEGACY_MAP[j][0]),Fe==="light"||Fe==="dark"||Fe==="system"?Lt.value=Fe:Lt.value=He.value,Fe==="system"&&(Fe=He.value),Pa(Fe,re),st.value&&(fetch(`/api/users/${st.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:Fe})}),st.value.theme=Fe,localStorage.setItem("quant_user",JSON.stringify(st.value)))}function Na(j){const re=window.__quantModules&&window.__quantModules.preferences,ye=re&&re.getPreference?re.getPreference("theme_hue"):null;ka(j,ye)}function Oa(j){const re=window.__quantModules&&window.__quantModules.preferences;!re||!re.applyDensity||(Kt.value=re.applyDensity(j)||"comfortable",re.setPreference&&re.setPreference("info_density",Kt.value))}function Yt(j){Ze.value=parseInt(j,10);const re=window.__quantModules&&window.__quantModules.preferences,ye=re&&re.getPreference&&re.getPreference("theme")||"light";ka(ye,Ze.value)}const oa=a(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function T(j){oa.value=!!j;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",j?"show":"hide")}catch{}}const Q=e(()=>{const j=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return oa.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...j]:j}),Ae=a("daily");(function(){try{const re=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(re==="weekly"||re==="monthly")&&(Ae.value=re)}catch{}})();const ft=a(!1),z=a(""),le=a(!1),de=a(!1),Te=a({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),Re=["MA5","MA10","MA20","MA60"],It=a(!1);let nt=0;async function yt(j){if(!Y.value)return!1;const re=++nt;ft.value=!0,Ae.value=j;try{const Fe=await(await fetch(`/api/market/kline/${Y.value.stock}?period=${j}&limit=60`)).json();if(!Fe.success||!Fe.data)throw new Error(Fe.message||"数据获取失败");return z.value=Fe.degraded_from?"分钟数据("+Fe.degraded_from+")暂不可用, 已降级展示日线":"",on(Y.value.stock),re!==nt?!1:(xt.value!=="kline"||(de.value=!0,await d(),window.__quantModules.charts.renderKlineTo("stockKlineChart",Fe.data,j,!1,{isMobile:ws.value,onLegend:Je=>{Object.keys(Te.value).forEach(Wt=>{Wt in Je&&(Te.value[Wt]=!!Je[Wt])})}}),Ct()),!0)}catch(ye){return console.error("[kline] 加载失败:",Y.value&&Y.value.stock,j,ye),xt.value==="kline"&&(de.value=!1,z.value="",ElementPlus.ElMessage.error("K线加载失败: "+(ye&&ye.message?ye.message:"数据源不可达，请重试"))),!1}finally{ft.value=!1}}async function ea(j){if($a.value){le.value=!0,Ae.value=j;try{const ye=await(await fetch(`/api/market/kline/${$a.value.code}?period=${j}&limit=60`)).json();if(!ye.success||!ye.data)throw new Error(ye.message||"数据获取失败");It.value=!0,await d(),window.__quantModules.charts.renderKlineTo("indexKlineChart",ye.data,j,!0,{isMobile:ws.value,onLegend:Fe=>{Object.keys(Te.value).forEach(Je=>{Je in Fe&&(Te.value[Je]=!!Fe[Je])})}}),Ct()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{le.value=!1}}}async function Nt(j){if(!de.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await yt(j)}async function ga(j){if(!It.value){ElementPlus.ElMessage.info("请先加载K线");return}await ea(j)}function ra(j){const re=(Bt.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(Ja.value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);re&&re.dispatchAction({type:"legendToggleSelect",name:j})}function Ct(){["K线","MA5","MA10","MA20","MA60"].forEach(j=>{Te.value[j]=!0})}async function et(){const j=await fetch("/api/system/metrics");if(!j.ok)throw new Error("metrics "+j.status);const re=await j.json(),ye=Array.isArray(re)?re:re&&re.data_sources||[];Ge.value=ye}const Ot=()=>us,qa=()=>Is,Tt=()=>ar,Qa=()=>Va,En=()=>is,Mn=()=>Qt,Tn=window.__quantAppLogic.data.create({currentView:ot,statusFilter:gt,dashboardData:Qe,loadHealthMetrics:et,getLoadDashboardData:Ot,getLastRefreshTime:qa,getFetchPoolSignals:Tt}),{loading:fs,loadingView:Pn,viewCache:Dn,dates:ja,selectedDate:Qt,lastLoadTime:ps,consensus:_a,viewNote:Rn,loadDates:gs,refreshCalendarData:hs,exportCSV:ys,loadConsensusData:Da,loadDashboardCached:Ha}=Tn,zn=window.__quantAppLogic.market.create({currentKlinePeriod:Ae,loadIndexKline:ea,rememberDialogTrigger:A,menus:Ne,currentPage:We,currentSubPage:te,stockDetail:Y,selectedDate:Qt}),{marketData:An,indexDetailVisible:Ja,indexDetail:$a,indexAiResult:Ln,indexAiLoading:In,fetchMarketData:Xa,showIndexDetail:Nn,loadCachedIndexEval:On,doIndexAiEvaluate:jn,disposeStockKline:bs,isMobile:ws,zoomKlineRange:Vn,scoreAnimating:Fn,scoreDelta:Hn,scorePulse:Bn,refreshStockScore:Za,animateScoreEntrance:es,onTouchStart:Kn,onTouchEnd:Wn}=zn,Un=window.__quantAppLogic.ops.create({navigateTo:Ee,currentPage:We,currentSubPage:te}),{feishuConfig:ks,feishuTestStatus:Gn,feishuTestMessage:Yn,testFeishuWebhook:Qn,saveFeishuConfig:Jn,aiFabHidden:$n,openAiFab:_s,strategyRecommendations:Xn,aiUsage:Zn,loadStrategyRecommendations:xs,loadAiUsage:ts,sysMonitor:el,analyticsRank:tl,analyticsDays:al,loadSysMonitor:Ss,loadAnalytics:Cs,healthDetail:sl,loadHealthDetail:qs,reviewTriggering:nl,triggerMarketReview:ll,factCheck:il,factCheckRunning:ol,loadFactCheck:Es,triggerFactCheck:rl,backups:cl,backupCreating:dl,loadBackups:Ms,createBackup:ul,restoreBackup:vl,reportExporting:ml,reportExportMsg:fl,exportReport:pl,tourVisible:gl,tourStep:hl,tourSteps:yl,maybeShowTour:bl,skipTour:wl,finishTour:kl,feedbackText:_l,feedbackSubmitting:xl,submitFeedback:Sl}=Un,Cl=window.__quantAppLogic.nav.create({currentView:ot,selectedDate:Qt,dates:ja,loadConsensusData:Da,hapticFeedback:l}),{viewUnit:ql,datePickerType:El,dateFormat:Ml,canNavPrev:Tl,canNavNext:Pl,switchView:Ts,navigateDate:Ps,disabledDate:Dl,onDateChange:Rl}=Cl,zl=window.__quantAppLogic.keys.create({menus:Ne,subPageNames:na,navigateTo:Ee,currentPage:We,currentSubPage:te,currentView:ot,navigateDate:Ps,switchView:Ts,getLoadDashboardData:Ot,refreshCalendarData:hs,getLoadAiHistory:Qa,exportCSV:ys,getShowBatchEvaluate:En,openAiFab:_s,toggleSidebar:ce,showStockDetail:As,getSelectedDate:Mn,markExternalStock:Nl}),{searchQuery:Al,searchStocks:Ll,onSearchSelect:Il,shortcutHelpVisible:Ds,commandPaletteVisible:Rs,handleGlobalKeydown:zs}=zl;let Ba=null;function Nl(j){Ba={code:j,ts:Date.now()}}function Ol(j){return!!(Ba&&Date.now()-Ba.ts<4e3&&(j==null||Ba.code===j))}let Ka=0;async function As(j){const re=++Ka;A(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(j,""),ss.value=null,Ae.value="daily",de.value=!1,xt.value="kline",Y.value=null,ke.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),Bt.value=!0,d(()=>es());try{const ye=await fetch(`/api/calendar/stock/${j}?date=${Qt.value}`);if(re!==Ka)return;Y.value=await ye.json(),Y.value&&Y.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(j,Y.value.name)}catch{if(re!==Ka)return;ElementPlus.ElMessage.error("加载失败"),Y.value={stock:j,name:"",total_days:0}}finally{re===Ka&&(ke.value=!1)}setTimeout(async()=>{await yt("daily"),Za()},500),os(j)}const jl={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},Vl={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function Fl(j){return jl[j]||"var(--text-tertiary)"}function Hl(j){return Vl[j]||"var(--bg-hover)"}const Bl=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:de,stockDetailVisible:Bt,stockDetailTab:xt,stockDetail:Y,disposeStockKline:bs}):{},{chatSessions:Kl,chatHistoryView:Wl,selectedChatIds:Ul,expandedChatDates:Gl,expandedChatMonths:Yl,expandedChatStocks:Ql,chatHistoryLoading:Jl,chatHistoryError:$l,allChatSessionsFlat:Xl,chatGroupedByDate:Zl,chatGroupedByMonth:ei,chatGroupedByStock:ti,toggleSelectChat:ai,toggleSelectChatDate:si,toggleSelectChatMonth:ni,toggleSelectChatStock:li,toggleChatDateExpand:ii,toggleChatMonthExpand:oi,toggleChatStockExpand:ri,selectAllChatSessions:ci,deleteSelectedChatSessions:di,viewChatSession:ui,loadChatHistory:Ls,deleteChatSession:vi,renderMarkdown:mi,stockChatInput:fi,stockChatMessages:pi,stockChatLoading:gi,stockChatError:hi,askStockSend:yi,askStockQuick:bi}=Bl,wi=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:st,applyTheme:pa,allMenuDefs:fe,loadGroupConfig:Be}):{},{userList:ki,userSearch:_i,groupFilter:xi,userPageTab:Si,expandedGroups:Ci,addMemberGroupMap:qi,filteredUsers:Ei,toggleGroupExpand:Mi,removeMemberFromGroupInline:Ti,addMemberToGroupInline:Pi,changeUserGroup:Di,showAddUser:Ri,editingUser:zi,userForm:Ai,savingUser:Li,editingGroup:Ii,menuConfigDialog:Ni,memberDialog:Oi,groupEditForm:ji,subPageCache:Vi,showAddGroup:Fi,addGroupForm:Hi,savingGroup:Bi,groupMembers:Ki,addMemberUsername:Wi,selectedMemberGroup:Ui,subPageSectionExpanded:Gi,toggleSubPageSection:Yi,getGroupMemberCount:Qi,getMenuEnabledCount:Ji,groupCount:$i,openMemberManager:Xi,loadGroupMembers:Zi,addMemberToGroup:eo,removeMemberFromGroup:to,availableUsersForGroup:ao,onParentToggle:so,openMenuConfig:no,saveMenuConfig:lo,deleteGroupConfig:io,createGroup:oo,allGroups:ro,getGroupName:co,loadAllGroups:as,loadUsers:Wa,editUser:uo,saveUser:vo,deleteUser:mo,toggleUserEnabled:fo,resetUserPassword:po}=wi,go=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:_a,currentPage:We,currentSubPage:te,dashboardData:Qe,searchKeyword:va,statusFilter:gt,strategyFilter:ia,strategyFilterCounts:fa}):{},{applyStrategyFilter:fg,statusCounts:ho,stockPool:yo,strategyDistribution:bo,strategyPreviewCount:wo,saveStrategyFilter:ko,filteredConsensusRank:_o,currentPoolSize:xo,filteredStrategyCounts:So,poolChangeBadge:Co,timeBarPercent:qo,lastRefreshTime:Is,navigateToStrategyFilter:Eo}=go,Mo=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:x,consensus:_a}):{},{aiResult:ss,lastEvalTime:To,evalHistoryComparison:Po,checklistItems:Do,aiHistory:Ns,selectedHistoryIds:Os,expandedDates:js,expandedMonths:Ro,expandedStocks:Vs,poolSignals:zo,toggleMonthExpand:Ao,aiHistoryView:Lo,selectedWatchlistCodes:Fs,showAutoEvaluateSettings:Hs,savingConfig:Bs,autoEvaluateScope:Ks,aiVendors:Io,aiCatalog:No,aiModelsError:Oo,testingAllModels:jo,savingAiModels:Vo,loadAiVendors:Ua,loadAiCatalog:Ws,saveAiVendors:Us,saveAiModels:Fo,testVendorModel:Ho,testAllVendorModels:Bo,fetchVendorModels:Ko,addVendorFromCatalog:Wo,addCustomVendor:Uo,addVendorModel:Go,removeVendorModel:Yo,removeVendor:Qo,toggleVendorKeyReveal:Jo,toggleVendorEdit:$o,autoEvaluateConfig:ns,aiLoading:ls,aiEvalStage:Gs,aiEvalElapsed:Ys,aiEvalError:Qs,showBatchEvaluate:is,batchStocks:Js,batchRunning:$s,batchTotal:Xs,batchCompleted:Zs,batchCurrent:en,batchStatuses:tn,batchResults:an,batchEvalErrors:sn,aiConfig:nn,selectedPreset:Xo,providerInfo:Zo,aiPresets:pg,applyPreset:er,onProviderChange:tr,fetchPoolSignals:ar,cancelPoolSignals:ln,loadLastEvaluation:os}=Mo,sr=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:st,selectedDate:Qt,stockDetail:Y,stockDetailTab:xt,stockDetailVisible:Bt,stockDetailLoading:ke,stockKlineLoaded:de,viewCache:Dn,animateScoreEntrance:es,loadStockKline:yt,refreshStockScore:Za,disposeStockKline:bs,aiHistory:Ns,aiLoading:ls,aiEvalStage:Gs,aiEvalElapsed:Ys,aiEvalError:Qs,aiResult:ss,loadLastEvaluation:os,autoEvaluateConfig:ns,autoEvaluateScope:Ks,batchStocks:Js,batchRunning:$s,batchTotal:Xs,batchCompleted:Zs,batchCurrent:en,batchStatuses:tn,batchResults:an,batchEvalErrors:sn,expandedDates:js,expandedStocks:Vs,savingConfig:Bs,selectedHistoryIds:Os,selectedWatchlistCodes:Fs,showAutoEvaluateSettings:Hs,showBatchEvaluate:is}):{},{quickEvalStock:nr,evalStrategy:lr,watchlistSort:ir,watchlist:or,watchlistCodes:rr,sortedWatchlist:cr,getWatchlistScore:dr,getLatestScore:gg,addSearchResult:ur,evaluatedCodes:vr,klineLoadedCodes:mr,markKlineLoaded:on,watchlistSearch:fr,watchlistResults:pr,watchlistSearching:gr,dataRefreshConfig:hr,dataRefreshReloading:yr,dataRefreshSaving:br,aiHistoryLoading:wr,aiHistoryError:kr,aiHistoryTotal:_r,aiHistoryLoadingMore:xr,hasMoreAiHistory:Sr,loadMoreAiHistory:Cr,watchlistLoading:qr,doAiEvaluate:Er,loadAiHistory:Va,deleteSingleHistory:Mr,toggleSelectHistory:Tr,clearSelection:Pr,clearWatchlistSelection:Dr,batchReevaluateHistory:Rr,batchAddToWatchlist:zr,batchRemoveWatchlist:Ar,toggleSelectWatchlist:Lr,selectAllHistory:Ir,selectAllWatchlist:Nr,deleteSelectedHistory:Or,loadAutoEvaluateConfig:rn,saveAutoEvaluateConfig:jr,loadWatchlist:cn,addToWatchlist:Vr,removeFromWatchlist:Fr,clearWatchlist:Hr,toggleWatchlist:Br,showStockKline:Kr,preloadingKline:Wr,preloadWatchlistKline:dn,watchlistEvaluate:Ur,batchEvaluateWatchlist:Gr,batchEvaluateSelected:Yr,searchStockForWatchlist:Qr,loadDataRefreshConfig:un,saveDataRefreshConfig:Jr,triggerDataReload:$r,triggerDataPull:Xr,dataPullRunning:Zr,groupedByDate:ec,aiHistoryByStock:tc,groupedByMonth:ac,aiHistoryStockCount:sc,scoreDistribution:nc,quickEvaluate:lc,toggleDateExpand:ic,toggleSelectDate:oc,toggleSelectMonth:rc,toggleStockExpand:cc,toggleSelectStock:dc,registerTrendChart:uc,viewAiResult:vc,doBatchEvaluate:mc,realtimeQuotes:fc,realtimeDegraded:pc,realtimeWsState:gc,connectRealtimeQuotes:hc,disconnectRealtimeQuotes:yc,quoteWarningFor:bc,realtimeQuoteColor:wc,realtimePriceText:kc,realtimePctText:_c,realtimeRatioText:xc,REALTIME_DEGRADED_TEXT:Sc,REALTIME_FALLBACK_TEXT:Cc}=sr,qc=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:Oe}):{},{btStrategyOptions:Ec,btSelectedStrategies:Mc,toggleBtStrategy:Tc,btDateRange:Pc,btCapital:Dc,btCommissionRate:Rc,btIncludeBenchmark:zc,btRunning:Ac,btResult:Lc,btError:Ic,btMetrics:Nc,btAnnualReturns:Oc,btTrades:jc,btStrategyMetricsRows:Vc,btDrawdownRegion:Fc,runBacktestWorkbench:Hc,exportBacktestCSV:Bc,registerBacktestNavChart:Kc,btFmtNum:Wc}=qc,Uc=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:x,aiConfig:nn,aiLoading:ls,feishuConfig:ks,currentTheme:He,changeTheme:ka,autoEvaluateConfig:ns,currentUser:st,strategyFilter:ia,applyTheme:pa,dashboardData:Qe,lastRefreshTime:Is,saveAiModels:Fo}):{},{configSaving:Gc,globalConfigDirty:Yc,lastSavedTime:Qc,feishuConfigOriginal:hg,aiConfigOriginal:yg,tushareConfigOriginal:bg,tushareConfig:Jc,tushareStatus:$c,datasourceConfig:Xc,datasourceStatus:Zc,syncingData:ed,stockCount:td,tradeDateCount:ad,aiStatus:sd,appVersion:vn,showImportDialog:nd,rateLimitConfig:ld,rateLimitDirty:id,rateLimitSaving:od,loadRateLimit:rs,saveRateLimit:rd,saveAiConfig:cd,testAiApi:dd,exportConfig:ud,importConfig:vd,saveAllConfig:md,resetAllConfig:fd,testTushareConnection:pd,checkTushareConnection:Ga,syncStockData:gd,loadTushareConfig:mn,loadDatasourceConfig:fn,saveDatasourceConfig:hd,testDatasource:yd,toggleDatasourceKeyReveal:bd,toggleDatasourceEdit:wd,loadFeishuConfig:cs,loadAiConfig:Ya,loadUserConfig:pn,loadSystemStatus:ds,loadDashboardData:us}=Uc,kd=window.__quantAppLogic.auth.create({currentUser:st,loadUserConfig:pn,loadDates:gs,loadDashboardData:us,loadDashboardCached:Ha,loadHealthMetrics:et,loadConsensusData:Da,applyTheme:pa,maybeShowTour:bl,loadAiVendors:Ua,loadGroupConfig:Be,groupsConfig:se}),{loginForm:gn,logining:hn,guestLogining:yn,showChangePassword:_d,changePasswordForm:xd,changingPassword:Sd,showSetupWizard:bn,setupForm:Cd,setupStep:qd,checkSetupWizard:Ed,completeSetupWizard:Md,resetSetupWizard:Td,handleLogin:Pd,handleGuestLogin:Dd,handleLogout:Rd,doChangePassword:zd}=kd;window.__quantAppLogic.watch.register({strategyFilter:ia,currentView:ot,statusFilter:gt,currentPage:We,currentSubPage:te,menus:Ne,currentUser:st,strategyFilterCounts:fa,lazyTick:Ie,dates:ja,selectedDate:Qt,consensus:_a,loadConsensusData:Da,fetchMerrillClock:D,fetchMarketData:Xa,loadWatchlist:cn,loadAiHistory:Va,preloadWatchlistKline:dn,loadChatHistory:Ls,loadSystemStatus:ds,checkTushareConnection:Ga,loadSysMonitor:Ss,loadAnalytics:Cs,loadHealthDetail:qs,loadHealthMetrics:et,loadAiUsage:ts,loadFactCheck:Es,loadAutoEvaluateConfig:rn,loadDatasourceConfig:fn,loadFeishuConfig:cs,loadAiConfig:Ya,loadAiVendors:Ua,loadRateLimit:rs,loadDataRefreshConfig:un,loadBackups:Ms,loadAllGroups:as,loadUsers:Wa,stockDetailTab:xt,stockDetailVisible:Bt,stockKlineLoaded:de,loadStockKline:yt,currentKlinePeriod:Ae,showMerrillDetail:E,indexDetailVisible:Ja,restoreDialogFocus:P});const Ad=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:zs,applyTheme:pa,menus:Ne,currentPage:We,currentSubPage:te,currentView:ot,currentKlinePeriod:Ae,selectedDate:Qt,dates:ja,loadDates:gs,loadConsensusData:Da,loadDashboardCached:Ha,appVersion:vn,themes:_e,fetchMarketData:Xa,fetchMerrillStages:J,fetchMerrillClock:D,loadMerrillTimeline:G,showTimelineStage:ie,merrillTimeline:ge,timelineLoading:qe,loadAiConfig:Ya,loadAiVendors:Ua,loadAiCatalog:Ws,currentUser:st,loadUserConfig:pn,loadAutoEvaluateConfig:rn,loadGroupConfig:Be,loadUsers:Wa,loadAllGroups:as,loadAiHistory:Va}),{runOnMounted:Ld}=Ad;window.__quantGoPage=async(j,re)=>{try{const ye=window.__lazyLoaders&&window.__lazyLoaders[j];ye&&await ye()}catch(ye){console.warn("[lazy] 页面组件加载失败",j,ye)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(ye=>{ye&&ye.name&&!ye.__quantRegistered&&(window.__quantApp.component(ye.name,ye),ye.__quantRegistered=!0)}),Ie&&Ie.value++,We.value=j,re&&(te.value=re)};let Ra;function wn(){const j=window.QuantSessionRestore;j&&j.save({page:We.value,sub:te.value||""})}c(We,async j=>{var re;l("light"),wn();try{const ye=fe.find(function(Fe){return Fe.key===j});document.title=(ye?ye.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",j),j!=="calendar"&&typeof ln=="function"&&ln();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:j})}).catch(()=>{})}catch(ye){console.warn("pageView track failed:",ye)}if(Ra&&(clearInterval(Ra),Ra=null),j==="strategies")await Ha(),Ra=setInterval(()=>{Ha().catch(()=>{})},5*60*1e3);else if(j==="calendar")Qt.value&&await Da();else if(j==="ai")xs(),ts(),await Va();else if(j==="system"){if(!Qt.value){const Fe=await(await fetch("/api/dashboard")).json(),Je=Fe.data||Fe;Je.latest_date&&(Qt.value=Je.latest_date)}if(Qt.value){const ye=["day","week","month","year"];for(const Fe of ye)try{const Wt=await(await fetch(`/api/view/${Fe}/${Qt.value}?status=all`)).json();fa.value[Fe]=Wt.stocks||[]}catch(Je){console.warn("loadConsensusData view load failed:",Je)}(!_a.value||_a.value.length===0)&&(_a.value=fa.value.day||[])}((re=st.value)==null?void 0:re.role)==="admin"&&(await Wa(),await cs(),await mn(),await ds(),await Ya(),await rs(),Ga(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(Ga,36e5)))}}),f(async()=>{await Ld()}),ne(),G(),t(()=>{Ra&&clearInterval(Ra),window.removeEventListener("keydown",zs),window.removeEventListener("keydown",V)});function Id(j,re=2){return j==null||j===""||isNaN(Number(j))?"--":Number(j).toFixed(re)}const kn={currentPage:We,pageComp:Ue,currentSubPage:te,sidebarCollapsed:xe,menus:Ne,navMode:pt,setNavMode:Pt,tabGroups:ut,openTab:wa,closeTab:Sa,activateTab:la,fmtNum:Id,sanitizeHtml:k,keyClick:_,isOnline:m,currentUser:st,allMenuDefs:fe,t:C,locale:o,changeLanguage:y,currentPageName:Ce,subPageNames:na,searchQuery:Al,searchStocks:Ll,onSearchSelect:Il,selectedDate:Qt,onDateChange:Rl,disabledDate:Dl,refreshCalendarData:hs,exportCSV:ys,viewNote:Rn,loading:fs,lastLoadTime:ps,resetSetupWizard:Td,showChangePassword:_d,themes:_e,currentTheme:He,changeTheme:ka,changeThemeMode:Na,changeThemeHue:Yt,handleLogout:Rd,themeHues:ze,themeHueNames:vt,themeHue:Ze,themeMode:Lt,hueColor:Gt,hueName:Ca,density:Kt,changeDensity:Oa,marketData:An,merrillData:L,merrillTimeline:ge,timelineLoading:qe,merrillStagesConfig:K,fetchMerrillStages:J,merrillSnapshots:Pe,merrillSnapshotsTotal:me,healthMetrics:Ge,feishuConfig:ks,feishuTestStatus:Gn,feishuTestMessage:Yn,shortcutHelpVisible:Ds,shortcutHelpItems:Se,commandPaletteVisible:Rs,tourVisible:gl,tourStep:hl,tourSteps:yl,skipTour:wl,finishTour:kl,backups:cl,backupCreating:dl,loadBackups:Ms,createBackup:ul,restoreBackup:vl,reportExporting:ml,reportExportMsg:fl,exportReport:pl,sysMonitor:el,analyticsRank:tl,analyticsDays:al,loadSysMonitor:Ss,loadAnalytics:Cs,healthDetail:sl,loadHealthDetail:qs,reviewTriggering:nl,triggerMarketReview:ll,factCheck:il,factCheckRunning:ol,loadFactCheck:Es,triggerFactCheck:rl,strategyRecommendations:Xn,aiUsage:Zn,loadStrategyRecommendations:xs,loadAiUsage:ts,aiFabHidden:$n,openAiFab:_s,feedbackText:_l,feedbackSubmitting:xl,submitFeedback:Sl,backtestStrategies:Oe,backtestStrategy:$e,backtestRange:Xe,backtestCapital:Ye,backtestRunning:it,backtestResult:bt,runBacktest:sa,btStrategyOptions:Ec,btSelectedStrategies:Mc,toggleBtStrategy:Tc,btDateRange:Pc,btCapital:Dc,btCommissionRate:Rc,btIncludeBenchmark:zc,btRunning:Ac,btResult:Lc,btError:Ic,btMetrics:Nc,btAnnualReturns:Oc,btTrades:jc,btStrategyMetricsRows:Vc,btDrawdownRegion:Fc,runBacktestWorkbench:Hc,exportBacktestCSV:Bc,registerBacktestNavChart:Kc,btFmtNum:Wc,fetchMarketData:Xa,fetchMerrillClock:D,testFeishuWebhook:Qn,saveFeishuConfig:Jn,merrillClockConfig:F,merrillClockLastUpdated:X,merrillReevalResult:H,merrillReevalLoading:W,saveMerrillClockConfig:ue,doMerrillReevaluate:De,dataRefreshConfig:hr,dataRefreshReloading:yr,dataRefreshSaving:br,loadDataRefreshConfig:un,saveDataRefreshConfig:Jr,triggerDataReload:$r,triggerDataPull:Xr,dataPullRunning:Zr,indexDetailVisible:Ja,indexDetail:$a,indexAiResult:Ln,indexAiLoading:In,loadCachedIndexEval:On,showIndexDetail:Nn,doIndexAiEvaluate:jn,klinePeriods:Q,currentKlinePeriod:Ae,klineLoading:ft,indexKlineLoading:le,stockKlineLoaded:de,indexKlineLoaded:It,klineDegradeNote:z,klineShowMinutes:oa,toggleKlineShowMinutes:T,loadStockKline:yt,switchKlinePeriod:Nt,loadIndexKline:ea,switchIndexKlinePeriod:ga,zoomKlineRange:Vn,MA_LINES:Re,klineMaVisible:Te,toggleKlineMa:ra,scoreAnimating:Fn,scoreDelta:Hn,scorePulse:Bn,refreshStockScore:Za,animateScoreEntrance:es,showMerrillDetail:E,merrillDetailData:I,showStageDetail:$,getCharLabel:u,getAssetName:N,getRankColor:oe,levelColor:Fl,levelBg:Hl,timelineStages:s,getStageAngle:Z,getCycleProgress:R,getCurrentStageMonths:w,getStageTotalMonths:v,isStageCompleted:M,stages:ee,indicatorList:ae,dimensionScoreList:B,confidenceColor:q,views:_t,currentView:ot,statusFilter:gt,loginForm:gn,logining:hn,guestLogining:yn,dashboardData:Qe,loadingView:Pn,dates:ja,consensus:_a,searchKeyword:va,stockDetailVisible:Bt,stockDetailTab:xt,stockDetail:Y,stockDetailLoading:ke,detailDisplayMode:je,setDetailDisplayMode:Rt,isNarrow:dt,detailSplitEnabled:At,splitWidth:Dt,setSplitWidth:$t,SPLIT_DEFAULT_PCT:mt,aiLoading:ls,aiEvalStage:Gs,aiEvalElapsed:Ys,aiEvalError:Qs,showBatchEvaluate:is,batchStocks:Js,batchRunning:$s,batchTotal:Xs,batchCompleted:Zs,batchCurrent:en,batchStatuses:tn,batchResults:an,batchEvalErrors:sn,aiConfig:nn,userList:ki,showAddUser:Ri,editingUser:zi,userForm:Ai,savingUser:Li,userSearch:_i,filteredUsers:Ei,groupFilter:xi,userPageTab:Si,expandedGroups:Ci,addMemberGroupMap:qi,toggleGroupExpand:Mi,removeMemberFromGroupInline:Ti,addMemberToGroupInline:Pi,changeUserGroup:Di,statusCounts:ho,stockPool:yo,poolSignals:zo,aiResult:ss,aiHistory:Ns,groupedByDate:ec,groupedByMonth:ac,expandedDates:js,expandedMonths:Ro,aiHistoryByStock:tc,aiHistoryStockCount:sc,expandedStocks:Vs,aiHistoryView:Lo,aiHistoryLoading:wr,aiHistoryError:kr,aiHistoryTotal:_r,aiHistoryLoadingMore:xr,hasMoreAiHistory:Sr,loadMoreAiHistory:Cr,watchlistLoading:qr,scoreDistribution:nc,quickEvalStock:nr,evalStrategy:lr,checklistItems:Do,evalHistoryComparison:Po,quickEvaluate:lc,selectedHistoryIds:Os,showAutoEvaluateSettings:Hs,savingConfig:Bs,autoEvaluateConfig:ns,autoEvaluateScope:Ks,strategyList:ma,toggleDateExpand:ic,toggleMonthExpand:Ao,toggleSelectDate:oc,toggleSelectMonth:rc,toggleSelectStock:dc,toggleStockExpand:cc,registerTrendChart:uc,selectedWatchlistCodes:Fs,clearWatchlistSelection:Dr,toggleSelectWatchlist:Lr,selectAllHistory:Ir,selectAllWatchlist:Nr,batchRemoveWatchlist:Ar,batchEvaluateSelected:Yr,batchReevaluateHistory:Rr,batchAddToWatchlist:zr,viewUnit:ql,datePickerType:El,dateFormat:Ml,canNavPrev:Tl,canNavNext:Pl,handleLogin:Pd,handleGuestLogin:Dd,switchView:Ts,navigateDate:Ps,navigateTo:Ee,loadDashboardData:us,loadConsensusData:Da,showStockDetail:As,externalStockActive:Ol,doAiEvaluate:Er,doBatchEvaluate:mc,loadAiHistory:Va,loadLastEvaluation:os,lastEvalTime:To,viewAiResult:vc,saveAiConfig:cd,testAiApi:dd,exportConfig:ud,importConfig:vd,configSaving:Gc,configChanged:x,watchlist:or,watchlistCodes:rr,watchlistSearch:fr,watchlistResults:pr,watchlistSearching:gr,watchlistSort:ir,sortedWatchlist:cr,getWatchlistScore:dr,addSearchResult:ur,evaluatedCodes:vr,klineLoadedCodes:mr,markKlineLoaded:on,loadWatchlist:cn,addToWatchlist:Vr,removeFromWatchlist:Fr,clearWatchlist:Hr,searchStockForWatchlist:Qr,toggleWatchlist:Br,batchEvaluateWatchlist:Gr,watchlistEvaluate:Ur,showStockKline:Kr,preloadWatchlistKline:dn,preloadingKline:Wr,realtimeQuotes:fc,realtimeDegraded:pc,realtimeWsState:gc,connectRealtimeQuotes:hc,disconnectRealtimeQuotes:yc,quoteWarningFor:bc,realtimeQuoteColor:wc,realtimePriceText:kc,realtimePctText:_c,realtimeRatioText:xc,REALTIME_DEGRADED_TEXT:Sc,REALTIME_FALLBACK_TEXT:Cc,toggleSelectHistory:Tr,clearSelection:Pr,deleteSingleHistory:Mr,deleteSelectedHistory:Or,saveAutoEvaluateConfig:jr,editUser:uo,saveUser:vo,deleteUser:mo,loadUsers:Wa,allGroups:ro,loadAllGroups:as,getGroupName:co,toggleUserEnabled:fo,resetUserPassword:po,selectedPreset:Xo,applyPreset:er,onProviderChange:tr,providerInfo:Zo,globalConfigDirty:Yc,lastSavedTime:Qc,tushareConfig:Jc,tushareStatus:$c,syncingData:ed,stockCount:td,tradeDateCount:ad,aiStatus:sd,appVersion:vn,showImportDialog:nd,rateLimitConfig:ld,rateLimitDirty:id,rateLimitSaving:od,loadRateLimit:rs,saveRateLimit:rd,saveAllConfig:md,resetAllConfig:fd,testTushareConnection:pd,syncStockData:gd,loadTushareConfig:mn,loadFeishuConfig:cs,loadSystemStatus:ds,loadAiConfig:Ya,aiVendors:Io,aiCatalog:No,aiModelsError:Oo,testingAllModels:jo,savingAiModels:Vo,loadAiVendors:Ua,loadAiCatalog:Ws,saveAiVendors:Us,saveAiModels:Us,testVendorModel:Ho,testAllVendorModels:Bo,fetchVendorModels:Ko,addVendorFromCatalog:Wo,addCustomVendor:Uo,addVendorModel:Go,removeVendorModel:Yo,removeVendor:Qo,toggleVendorKeyReveal:Jo,toggleVendorEdit:$o,checkTushareConnection:Ga,datasourceConfig:Xc,datasourceStatus:Zc,loadDatasourceConfig:fn,saveDatasourceConfig:hd,testDatasource:yd,toggleDatasourceKeyReveal:bd,toggleDatasourceEdit:wd,strategyFilter:ia,strategyFilterOptions:La,strategyFilterCounts:fa,strategyPreviewCount:wo,saveStrategyFilter:ko,filteredConsensusRank:_o,currentPoolSize:xo,filteredStrategyCounts:So,strategyDistribution:bo,expandedStrategies:Ia,poolChangeBadge:Co,timeBarPercent:qo,navigateToStrategyFilter:Eo,showUserMenu:wt,toggleSidebar:ce,groupsConfig:se,loadGroupConfig:Be,editingGroup:Ii,groupEditForm:ji,showAddGroup:Fi,addGroupForm:Hi,savingGroup:Bi,menuConfigDialog:Ni,memberDialog:Oi,groupMembers:Ki,addMemberUsername:Wi,selectedMemberGroup:Ui,subPageSectionExpanded:Gi,toggleSubPageSection:Yi,getGroupMemberCount:Qi,getMenuEnabledCount:Ji,groupCount:$i,openMemberManager:Xi,loadGroupMembers:Zi,addMemberToGroup:eo,removeMemberFromGroup:to,availableUsersForGroup:ao,subPageCache:Vi,onParentToggle:so,openMenuConfig:no,saveMenuConfig:lo,deleteGroupConfig:io,createGroup:oo,changePasswordForm:xd,changingPassword:Sd,doChangePassword:zd,showSetupWizard:bn,setupForm:Cd,setupStep:qd,checkSetupWizard:Ed,completeSetupWizard:Md,chatSessions:Kl,chatHistoryView:Wl,selectedChatIds:Ul,expandedChatDates:Gl,expandedChatMonths:Yl,expandedChatStocks:Ql,chatHistoryLoading:Jl,chatHistoryError:$l,allChatSessionsFlat:Xl,chatGroupedByDate:Zl,chatGroupedByMonth:ei,chatGroupedByStock:ti,toggleSelectChat:ai,toggleSelectChatDate:si,toggleSelectChatMonth:ni,toggleSelectChatStock:li,toggleChatDateExpand:ii,toggleChatMonthExpand:oi,toggleChatStockExpand:ri,selectAllChatSessions:ci,deleteSelectedChatSessions:di,viewChatSession:ui,loadChatHistory:Ls,deleteChatSession:vi,renderMarkdown:mi,stockChatInput:fi,stockChatMessages:pi,stockChatLoading:gi,stockChatError:hi,askStockSend:yi,askStockQuick:bi,onTouchStart:Kn,onTouchEnd:Wn,hapticFeedback:l};let tt=null;return window.QuantStateRegistry&&window.QuantStateRegistry.createStateRegistry&&(tt=window.QuantStateRegistry.createStateRegistry(),tt.defineDomain("theme",["currentTheme","themeMode","themeHue","density","currentKlinePeriod"]),tt.defineDomain("auth",["currentUser","loginForm","logining","guestLogining","showSetupWizard"]),tt.defineDomain("prefs",["navMode","detailDisplayMode","splitWidth","sidebarCollapsed","klineShowMinutes"]),tt.defineDomain("ui",["currentPage","currentSubPage","currentView","showUserMenu","searchKeyword","shortcutHelpVisible","commandPaletteVisible"]),tt.defineDomain("page",["loading","dates","selectedDate","consensus","dashboardData","lastLoadTime"]),tt.attach("theme","currentTheme",He),tt.attach("theme","themeMode",Lt),tt.attach("theme","themeHue",Ze),tt.attach("theme","density",Kt),tt.attach("theme","currentKlinePeriod",Ae),tt.attach("auth","currentUser",st),tt.attach("auth","loginForm",gn),tt.attach("auth","logining",hn),tt.attach("auth","guestLogining",yn),tt.attach("auth","showSetupWizard",bn),tt.attach("prefs","navMode",pt),tt.attach("prefs","detailDisplayMode",je),tt.attach("prefs","splitWidth",Dt),tt.attach("prefs","sidebarCollapsed",xe),tt.attach("prefs","klineShowMinutes",oa),tt.attach("ui","currentPage",We),tt.attach("ui","currentSubPage",te),tt.attach("ui","currentView",ot),tt.attach("ui","showUserMenu",wt),tt.attach("ui","searchKeyword",va),tt.attach("ui","shortcutHelpVisible",Ds),tt.attach("ui","commandPaletteVisible",Rs),tt.attach("page","loading",fs),tt.attach("page","dates",ja),tt.attach("page","selectedDate",Qt),tt.attach("page","consensus",_a),tt.attach("page","dashboardData",Qe),tt.attach("page","lastLoadTime",ps),kn.stateRegistry=tt),kn}})();Ma.name="qc-icon";Cn.name="qc-glossary-hint";qn.name="qc-glossary-page";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=fm;window.__quantComponents.Header=pf;window.__quantComponents.SubNav=Mf;window.__quantComponents.MobileNav=Gf;window.__quantComponents.StockList=Ep;window.__quantComponents.DetailSplit=Dp;window.__quantComponents.TopTabs=Vp;window.__quantComponents.AppIcon=Ma;window.__quantComponents.GlossaryHint=Cn;window.__quantComponents.GlossaryPage=qn;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default mg();
