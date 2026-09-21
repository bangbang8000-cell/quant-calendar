var Dd=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports);import{aV as Rd,L as ue,O as ua,Z as zd,au as It,M as pe,P as he,aW as Ad,a0 as ze,_ as Fe,F as lt,al as yt,S as nt,a1 as st,X as ea,ai as Lt,q as Pa,o as Da,a8 as rs,r as ft,e as tt,av as Ld,Y as Ia,$ as xa,R as Id,aC as da,T as Nd,Q as ia,p as Od,n as jd}from"./vendor-vue-DDF9zi1T.js";import{e as Vd,E as Fd,a as Hd,b as Bd,c as Kd,z as Wd}from"./vendor-ep-VOop1zGa.js";import{C as Ud,a as Gd,W as Yd,I as Jd,S as Qd,B as $d,F as Xd,b as Zd,c as eu,d as tu,e as au,f as su,P as lu,g as nu,h as iu,i as ou,T as ru,j as cu,L as du,k as uu,G as vu,U as mu,l as pu,m as fu,n as gu,D as hu,o as yu,p as bu,M as wu,q as ku,R as _u,r as xu,s as Su,K as Cu,t as qu,u as Eu,v as Mu,w as Tu,x as Pu,y as Du,z as Ru,A as zu,E as Au,H as Lu,O as Iu,J as Nu,N as Ou,Q as ju,V as Vu,X as Fu,Y as Hu,Z as Bu,_ as Ku,$ as Wu,a0 as Uu,a1 as Gu,a2 as Yu,a3 as Ju,a4 as Qu,a5 as $u,a6 as Xu,a7 as Zu,a8 as ev,a9 as tv,aa as av,ab as sv,ac as lv,ad as nv,ae as iv,af as ov,ag as rv,ah as cv,ai as dv,aj as uv,ak as vv,al as mv,am as pv,an as fv,ao as gv,ap as hv,aq as yv,ar as bv,as as wv,at as kv,au as _v,av as xv,aw as Sv,ax as Cv,ay as qv,az as Ev,aA as Mv,aB as Tv,aC as Pv,aD as Dv,aE as Rv,aF as zv,aG as Av,aH as Lv,aI as Iv,aJ as Nv,aK as Ov,aL as jv,aM as Vv,aN as Fv,aO as Hv,aP as Bv,aQ as Kv}from"./vendor-lucide-DidEUx9K.js";var ng=Dd((hg,Ne)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))e(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const D of f.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&e(D)}).observe(document,{childList:!0,subtree:!0});function y(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function e(d){if(d.ep)return;d.ep=!0;const f=y(d);fetch(d.href,f)}})();window.Vue=Rd;const va=Vd||{};window.ElementPlus=va;va.ElMessage=va.ElMessage||Fd;va.ElMessageBox=va.ElMessageBox||Hd;va.ElNotification=va.ElNotification||Bd;va.ElLoading=va.ElLoading||Kd;window.ElementPlusLocaleZhCn={default:Wd};(function(){const a=[45,220,0,140,270,320],t={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},y={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function e(s,b,l){return"hsl("+s+", "+b+"%, "+l+"%)"}function d(s,b,l){b=b/100,l=l/100;const g=function(p){return(p+s/30)%12},X=b*Math.min(l,1-l),P=function(p){return l-X*Math.max(-1,Math.min(g(p)-3,Math.min(9-g(p),1)))};return Math.round(255*P(0))+", "+Math.round(255*P(8))+", "+Math.round(255*P(4))}const f=5;function D(s,b,l){return d(s,b,l).split(",").map(function(g){return parseInt(g,10)})}function h(s){const b=function(l){return l=l/255,l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)};return .2126*b(s[0])+.7152*b(s[1])+.0722*b(s[2])}function r(s,b){const l=h(s),g=h(b),X=Math.max(l,g),P=Math.min(l,g);return(X+.05)/(P+.05)}function w(s,b,l){for(var g=8,X=92,P=0;P<26;P++){var p=(g+X)/2;h(D(s,b,p))<l?g=p:X=p}return Math.round(X*10)/10}function o(s,b,l,g,X){let P=38,p=76;for(let c=0;c<24;c++){const _=(P+p)/2;r(D(s,g,_),D(s,b,l))>=X?p=_:P=_}return Math.round(p*10)/10}function S(s,b){var l={};return b==="light"?(l["--qc-neutral-50"]=e(s,18,98),l["--qc-neutral-100"]=e(s,16,95),l["--qc-neutral-200"]=e(s,14,90),l["--qc-neutral-300"]=e(s,12,83),l["--qc-neutral-400"]=e(s,10,68),l["--qc-neutral-500"]=e(s,10,53),l["--qc-neutral-600"]=e(s,10,40),l["--qc-neutral-700"]=e(s,10,30),l["--qc-neutral-800"]=e(s,10,20),l["--qc-neutral-900"]=e(s,10,12),l["--qc-background"]=e(s,18,98),l["--qc-muted"]=e(s,16,95),l["--qc-border"]=e(s,12,72),l["--chart-axis"]=e(s,12,55),l["--chart-split"]=e(s,10,88),l["--qc-foreground"]=e(s,10,12),l["--qc-muted-foreground"]=e(s,9,38),l["--qc-nav-item-default"]=e(s,9,38),l["--qc-nav-item-hover"]=e(s,10,12),l["--qc-nav-group-label"]=e(s,9,40),l["--qc-nav-bg"]="#ffffff",l["--bg-page"]=e(s,20,97),l["--bg-stripe"]=e(s,20,97),l["--bg-card-header"]=e(s,24,96),l["--card-gradient-header"]="linear-gradient(135deg, "+e(s,24,96)+" 0%, #ffffff 100%)",l["--bg-hover"]=e(s,26,94),l["--bg-tertiary"]=e(s,14,93),l["--badge-gold-bg"]=e(s,26,96),l["--gold-bg"]=e(s,20,97),l["--border-light"]=e(s,22,89),l["--border-base"]=e(s,24,79),l["--border-color"]=e(s,14,88),l["--text-primary"]=e(s,12,12),l["--text-secondary"]=e(s,12,32),l["--text-tertiary"]=e(s,14,40),l["--text-disabled"]=e(s,9,q(s,9,R(s,18,98),25,70,!0,3.2)),l["--qc-card"]="#ffffff",l["--qc-popover"]="#ffffff",l["--qc-nav-border"]=e(s,12,72),l["--qc-nav-item-hover-bg"]=e(s,16,95),l["--qc-overlay"]="rgba(31, 29, 26, 0.5)",l["--bg-card"]="#ffffff",l["--surface"]="#ffffff",l["--border-heavy"]=e(s,22,72),l["--surface-canvas"]=e(s,18,98),l["--surface-card"]="#ffffff",l["--surface-raised"]="#ffffff",l["--surface-sunken"]=e(s,16,96),l["--surface-input"]="#ffffff",l["--surface-hover"]=e(s,26,94),l["--border-strong"]=e(s,22,72),l["--scrollbar-thumb"]="rgba("+d(s,12,72)+", 0.5)",l["--bg-page-rgb"]=d(s,20,97)):(l["--qc-background"]=e(s,10,8),l["--qc-card"]=e(s,11,11),l["--qc-popover"]=e(s,11,11),l["--qc-muted"]=e(s,12,14),l["--qc-border"]=e(s,14,30),l["--chart-axis"]=e(s,16,52),l["--chart-split"]=e(s,14,26),l["--qc-nav-bg"]=e(s,10,9),l["--qc-nav-border"]=e(s,13,22),l["--qc-nav-item-hover-bg"]=e(s,12,14),l["--bg-page"]=e(s,10,8),l["--bg-card"]=e(s,11,11),l["--bg-card-header"]=e(s,12,14),l["--bg-stripe"]=e(s,10,9),l["--bg-hover"]=e(s,12,14),l["--bg-tertiary"]=e(s,12,14),l["--border-light"]=e(s,13,18),l["--border-base"]=e(s,14,26),l["--border-heavy"]=e(s,16,38),l["--border-color"]=e(s,13,22),l["--surface"]=e(s,11,11),l["--surface-canvas"]=e(s,10,8),l["--surface-card"]=e(s,11,11),l["--surface-raised"]=e(s,12,14),l["--surface-sunken"]=e(s,12,9),l["--surface-input"]=e(s,12,9),l["--surface-hover"]=e(s,12,15),l["--border-strong"]=e(s,16,42),l["--scrollbar-thumb"]="rgba("+d(s,16,52)+", 0.5)",l["--bg-page-rgb"]=d(s,10,8),l["--qc-overlay"]="rgba(0, 0, 0, 0.6)"),l}const k=4.6;var T=[255,255,255];function C(s){return d(s,10,8).split(",").map(function(b){return parseInt(b,10)})}function q(s,b,l,g,X,P,p){for(var c=p||k,_=g,u=X,z=0;z<24;z++){var ie=(_+u)/2,G=r(D(s,b,ie),l)>=c;P?G?_=ie:u=ie:G?u=ie:_=ie}return Math.round((P?_:u)*10)/10}function R(s,b,l){return d(s,b,l).split(",").map(function(g){return parseInt(g,10)})}function E(s){const b=w(s,75,.18),l=w(s,75,.26),g=w(s,70,.36),X=w(s,85,.12),P=d(s,75,b),p=q(s,68,T,14,62,!0),c=Math.max(12,p-5),_=Math.max(10,p-11),u=d(s,16,95).split(",").map(function(W){return parseInt(W,10)}),z=d(s,85,92).split(",").map(function(W){return parseInt(W,10)}),ie=q(s,78,u,10,58,!0,4.6),G=q(s,80,z,10,58,!0,4.6),M=Math.min(32,q(s,80,T,8,60,!0,4.6));return{...S(s,"light"),"--primary-color":e(s,75,b),"--primary-rgb":P,"--color-primary":e(s,75,b),"--qc-primary":e(s,75,b),"--qc-primary-50":e(s,90,96),"--qc-primary-100":e(s,85,92),"--qc-primary-200":e(s,80,84),"--qc-primary-300":e(s,75,72),"--qc-primary-400":e(s,70,g),"--qc-primary-500":e(s,75,l),"--qc-primary-600":e(s,80,b),"--qc-primary-700":e(s,85,X),"--qc-primary-800":e(s,88,28),"--qc-primary-900":e(s,90,20),"--text-link":e(s,78,ie),"--secondary-color":e(s,70,55),"--card-border":e(s,22,80),"--bg-selected":"rgba("+P+", 0.08)","--btn-primary-bg":e(s,80,M),"--btn-primary-border":e(s,80,M),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":e(s,82,28),"--btn-primary-hover-border":e(s,82,28),"--btn-primary-active-bg":e(s,85,24),"--btn-primary-active-border":e(s,85,24),"--btn-primary-plain-bg":"rgba("+P+", 0.08)","--btn-primary-plain-border":"rgba("+P+", 0.25)","--btn-primary-plain-color":e(s,80,ie),"--btn-primary-plain-hover-bg":"rgba("+P+", 0.15)","--btn-primary-plain-hover-border":e(s,80,32),"--btn-primary-text-color":e(s,80,ie),"--gradient":"linear-gradient(135deg, "+e(s,80,_)+" 0%, "+e(s,76,c)+" 50%, "+e(s,70,p)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+e(s,76,c)+" 0%, "+e(s,85,_)+" 100%)","--primary-text":e(s,78,ie),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+e(s,62,Math.min(74,o(s,45,14,58,f)+5))+" 0%, "+e(s,58,o(s,45,14,58,f))+" 100%)","--panel-fg":e(s,45,14),"--qc-nav-item-active":e(s,80,G),"--qc-nav-item-active-bg":e(s,85,92),"--qc-nav-item-active-border":e(s,75,48),"--qc-nav-badge-bg":e(s,85,92),"--qc-nav-badge-text":e(s,80,G),"--qc-ring":e(s,75,q(s,75,R(s,18,98),25,70,!0,3.2)),"--brand-soft-text":e(s,80,q(s,80,R(s,80,84),10,58,!0,4.6)),"--border-control":e(s,16,q(s,16,R(s,18,98),30,80,!0,3.2))}}function v(s){const b=w(s,85,.34),l=w(s,85,.46),g=d(s,85,b),X=q(s,80,C(s),30,92,!1),P=Math.min(94,X+8),p=Math.min(96,X+16),c=R(s,55,22),_=R(s,10,9),u=g.split(",").map(function(ne){return parseInt(ne,10)}),z=[0,1,2].map(function(ne){return Math.round(u[ne]*.12+_[ne]*.88)}),ie=q(s,85,z,45,96,!1,4.6),G=q(s,85,c,45,96,!1,4.6),M=Math.min(94,q(s,92,c,45,96,!1,4.6)),W=Math.min(96,M+6);return{...S(s,"dark"),"--primary-color":e(s,85,b),"--primary-rgb":g,"--color-primary":e(s,85,b),"--qc-primary":e(s,90,b),"--qc-primary-50":e(s,50,18),"--qc-primary-100":e(s,55,22),"--qc-primary-200":e(s,55,26),"--qc-primary-300":e(s,60,30),"--qc-primary-400":e(s,65,38),"--qc-primary-500":e(s,85,l),"--qc-primary-600":e(s,90,b),"--qc-primary-700":e(s,92,M),"--qc-primary-800":e(s,90,W),"--qc-primary-900":e(s,92,Math.min(98,W+8)),"--text-link":e(s,85,G),"--secondary-color":e(s,70,60),"--card-border":e(s,30,25),"--bg-selected":"rgba("+g+", 0.10)","--btn-primary-bg":e(s,85,65),"--btn-primary-border":e(s,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":e(s,80,72),"--btn-primary-hover-border":e(s,80,72),"--btn-primary-active-bg":e(s,75,80),"--btn-primary-active-border":e(s,75,80),"--btn-primary-plain-bg":"rgba("+g+", 0.08)","--btn-primary-plain-border":"rgba("+g+", 0.25)","--btn-primary-plain-color":e(s,85,G),"--btn-primary-plain-hover-bg":"rgba("+g+", 0.15)","--btn-primary-plain-hover-border":e(s,85,65),"--btn-primary-text-color":e(s,85,G),"--gradient":"linear-gradient(135deg, "+e(s,80,X)+" 0%, "+e(s,85,P)+" 50%, "+e(s,85,p)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+e(s,85,p)+" 0%, "+e(s,80,X)+" 100%)","--primary-text":e(s,85,G),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+e(s,60,Math.min(76,o(s,40,12,55,f)+5))+" 0%, "+e(s,55,o(s,40,12,55,f))+" 100%)","--panel-fg":e(s,40,12),"--qc-nav-item-active":e(s,85,ie),"--qc-nav-item-active-bg":"rgba("+g+", 0.10)","--qc-nav-item-active-border":e(s,85,65),"--qc-nav-badge-bg":"rgba("+g+", 0.12)","--qc-nav-badge-text":e(s,85,ie),"--border-control":e(s,16,q(s,16,R(s,11,11),25,70,!1,3.2)),"--brand-soft-text":e(s,85,q(s,85,R(s,55,26),45,96,!1,4.6)),"--qc-ring":e(s,85,65)}}var i=[],m={mode:"light",hue:45},O=!1;function K(s,b){try{var l=document.querySelector('meta[name="theme-color"]');if(!l)return;var g=b?s["--surface-canvas"]||s["--qc-background"]:s["--btn-primary-bg"]||s["--qc-primary"];g&&l.setAttribute("content",g)}catch{}}function B(){if(!(O||typeof window>"u"||!window.matchMedia)){var s=window.matchMedia("(prefers-color-scheme: dark)"),b=function(){m.mode==="system"&&J("system",m.hue)};s.addEventListener?s.addEventListener("change",b):s.addListener&&s.addListener(b),O=!0}}function U(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}var Q=-1;function I(s){return s=parseInt(s,10),isNaN(s)?45:s<0?Q:Math.max(0,Math.min(359,s))}function N(s){return Object.keys(s).forEach(function(b){var l=s[b];if(typeof l=="string"){l.indexOf("hsl(")>=0&&(l=l.replace(/hsl\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)%/g,function(c,_){return"hsl("+_+", 0%"}));var g=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*[\d.]+)?\)$/.exec(l);if(g){var X=Math.round(.2126*+g[1]+.7152*+g[2]+.0722*+g[3]);l="rgba("+X+", "+X+", "+X+(g[4]||"")+")"}if(/^\d+,\s*\d+,\s*\d+$/.test(l)){var P=l.split(",").map(function(c){return parseInt(c,10)}),p=Math.round(.2126*P[0]+.7152*P[1]+.0722*P[2]);l=p+", "+p+", "+p}s[b]=l}}),s}function F(s,b){var l=R(45,0,b?22:95),g=R(45,0,b?8:98),X=R(45,0,b?11:100),P=b?q(45,0,l,45,96,!1,4.6):q(45,0,l,10,58,!0,4.6),p=R(45,0,b?22:92),c=b?q(45,0,p,45,96,!1,4.6):q(45,0,p,10,58,!0,4.6),_=b?q(45,0,g,45,96,!1,3.2):q(45,0,g,25,70,!0,3.2),u=b?q(45,0,X,25,70,!1,3.2):q(45,0,g,30,80,!0,3.2),z=b?q(45,0,R(45,0,26),45,96,!1,4.6):q(45,0,R(45,0,84),10,58,!0,4.6);s["--brand-soft-text"]="hsl(45, 0%, "+z+"%)";var ie="hsl(45, 0%, "+P+"%)";if(s["--primary-text"]=ie,s["--text-link"]=ie,s["--btn-primary-text-color"]=ie,s["--btn-primary-plain-color"]=ie,s["--qc-nav-item-active"]="hsl(45, 0%, "+c+"%)",s["--qc-nav-badge-text"]="hsl(45, 0%, "+c+"%)",s["--qc-ring"]="hsl(45, 0%, "+_+"%)",s["--border-control"]="hsl(45, 0%, "+u+"%)",b){var G=q(45,0,R(45,0,8),30,92,!1,4.6),M=Math.min(94,G+8),W=Math.min(96,G+16);s["--gradient"]="linear-gradient(135deg, hsl(45, 0%, "+G+"%) 0%, hsl(45, 0%, "+M+"%) 50%, hsl(45, 0%, "+W+"%) 100%)",s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+W+"%) 0%, hsl(45, 0%, "+G+"%) 100%)"}else{var ne=q(45,0,T,14,62,!0,4.6),ve=Math.max(12,ne-5),Me=Math.max(10,ne-11);s["--gradient"]="linear-gradient(135deg, hsl(45, 0%, "+Me+"%) 0%, hsl(45, 0%, "+ve+"%) 50%, hsl(45, 0%, "+ne+"%) 100%)",s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+ve+"%) 0%, hsl(45, 0%, "+Me+"%) 100%)"}var $=o(45,0,14,0,f);return s["--gradient-panel"]="linear-gradient(135deg, hsl(45, 0%, "+Math.min(74,$+5)+"%) 0%, hsl(45, 0%, "+$+"%) 100%)",s["--panel-fg"]="hsl(45, 0%, 14%)",s}function J(s,b){let l=s||"light",g=b==null||b===""?null:b;if(t[s]){const z=t[s];l=z[0],g==null&&(g=z[1])}l==="system"&&(l=U()?"dark":"light");const X=l==="dark";g=I(g??45);const P=g===Q,p=document.documentElement;p.setAttribute("data-theme",X?"dark-pro":"gold"),p.setAttribute("data-theme-mode",X?"dark":"light"),p.setAttribute("data-theme-neutral",P?"true":"false");let c=X?v(P?45:g):E(P?45:g);P&&(c=F(N(c),X));for(var _=Object.keys(c),u=0;u<i.length;u++)_.indexOf(i[u])===-1&&p.style.removeProperty(i[u]);_.forEach(function(z){p.style.setProperty(z,c[z])}),i=_,m.mode=typeof s=="string"&&s?s:"light",m.hue=g,K(c,X);try{localStorage.setItem("quant_theme_mode",X?"dark":"light"),localStorage.setItem("quant_theme_hue",String(g))}catch{}return{mode:X?"dark":"light",hue:g}}function Z(){try{var s=localStorage.getItem("quant_theme_hue");if(s!==null&&s!=="")return I(s)}catch{}var b=typeof window<"u"&&window.__quantModules?window.__quantModules.preferences:null;if(b&&b.getPreference){var l=b.getPreference("theme_hue");if(l!=null&&l!=="")return I(l)}return null}function le(s){var b=Z();return J(s,b??void 0)}function ee(){const s=localStorage.getItem("quant_theme");if(!s||!t[s]||localStorage.getItem("quant_theme_hue")!==null)return null;const b=t[s];return{mode:b[0],hue:b[1]}}function L(){const s=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let b=s.theme||"system",l=s.theme_hue!=null&&s.theme_hue!==""?s.theme_hue:null;const g=ee();return l==null&&g&&(b=g.mode,l=g.hue),l==null&&(l=45),B(),J(b,l)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:a,LEGACY_MAP:t,legacyThemes:y,NEUTRAL_HUE:Q,generateLightTokens:E,generateDarkTokens:v,migrateLegacyTheme:ee,persistedHue:Z,applyLegacyTheme:le,applyTheme:J,init:L},typeof queueMicrotask=="function"?queueMicrotask(L):L()})();(function(a,t){typeof Ne=="object"&&Ne.exports?Ne.exports=t():a.QuantI18n=t()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",t=["zh-CN","en","ja","ko","zh-TW"],y={};let e=a,d=null;function f(){return d&&typeof d=="object"&&"value"in d?d.value||a:e}function D(k,T){return t.indexOf(k)===-1?!1:(y[k]=T&&typeof T=="object"?T:{},!0)}function h(k){const T=t.indexOf(k)!==-1?k:a;return e=T,d&&typeof d=="object"&&"value"in d&&(d.value=T),typeof document<"u"&&document.documentElement.setAttribute("lang",T),e}function r(){return f()}function w(k){if(k&&typeof k=="object"&&"value"in k){d=k;const T=t.indexOf(k.value)!==-1?k.value:a;k.value=T,e=T}return e}function o(k,T){const C=f(),q=y[C]||{};let R=k in q?q[k]:null;if(R==null&&C!=="en"){const E=y.en||{};R=k in E?E[k]:null}return R==null&&(R=String(k)),T&&typeof T=="object"&&Object.keys(T).forEach(function(E){R=R.replace(new RegExp("\\{"+E+"\\}","g"),String(T[E]))}),R}const S={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:t,messages:y,registerLocale:D,setLocale:h,getLocale:r,bindLocale:w,t:o};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=S),S});(function(a,t){typeof Ne=="object"&&Ne.exports?Ne.exports=t():a.QuantZhCN=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.ruleScore":"选股评分","detail.notEvaluated":"未评估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时","glossary.title":"术语表","glossary.search":"搜索术语","glossary.definition":"定义","glossary.calc":"计算口径","glossary.empty":"无匹配术语","glossary.cat.macro":"宏观","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技术","glossary.cat.shortterm":"短线","glossary.cat.datasource":"数据源","glossary.cat.product":"产品","glossary.term.merrill_clock":"美林时钟","glossary.term.recovery":"复苏期","glossary.term.overheat":"过热期","glossary.term.stagflation":"滞胀期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五维评分","glossary.term.momentum":"动量策略","glossary.term.reversal":"反转策略","glossary.term.quality":"质量策略","glossary.term.capital_flow":"资金流策略","glossary.term.consensus":"共识榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰减","glossary.term.zscore":"Z-Score","glossary.term.pe":"市盈率(PE)","glossary.term.pb":"市净率(PB)","glossary.term.roe":"净资产收益率(ROE)","glossary.term.market_cap":"总市值","glossary.term.ma":"均线(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"换手率","glossary.term.zt_pool":"涨停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龙虎榜","glossary.term.ladder":"连板","glossary.term.promote_rate":"晋级率","glossary.term.money_effect":"赚钱效应","glossary.term.sentiment_cycle":"情绪周期","glossary.term.sector_flow":"板块资金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源热备","glossary.term.pit":"PIT(时点数据)","glossary.term.survivorship":"幸存者偏差","glossary.term.ai_eval":"AI评估","glossary.term.ai_chat":"智能问股","glossary.term.backtest":"回测","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"样本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"胜率","glossary.term.portfolio":"模拟组合","glossary.term.data_quality":"数据质量分","glossary.term.rbac":"RBAC权限","glossary.term.sector_rotation":"行业轮动","glossary.term.index_enhance":"指数增强","glossary.term.multifactor":"多因子","glossary.term.volatility":"波动率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林带","glossary.term.dragon_head":"龙头股","glossary.term.data_freshness":"数据新鲜度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,t){typeof Ne=="object"&&Ne.exports?Ne.exports=t():a.QuantEn=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.ruleScore":"Rule score","detail.notEvaluated":"Not scored","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration","glossary.title":"Glossary","glossary.search":"Search terms","glossary.definition":"Definition","glossary.calc":"Calculation","glossary.empty":"No matching terms","glossary.cat.macro":"Macro","glossary.cat.strategy":"Strategy","glossary.cat.factor":"Factor","glossary.cat.tech":"Technical","glossary.cat.shortterm":"Short-term","glossary.cat.datasource":"Data Source","glossary.cat.product":"Product","glossary.term.merrill_clock":"Merrill Clock","glossary.term.recovery":"Recovery","glossary.term.overheat":"Overheat","glossary.term.stagflation":"Stagflation","glossary.term.recession":"Recession","glossary.term.merrill_score":"Five-Dimension Score","glossary.term.momentum":"Momentum","glossary.term.reversal":"Reversal","glossary.term.quality":"Quality","glossary.term.capital_flow":"Capital Flow","glossary.term.consensus":"Consensus Board","glossary.term.in_pool":"In Pool","glossary.term.out_pool":"Out of Pool","glossary.term.factor":"Factor","glossary.term.factor_ic":"Factor IC","glossary.term.ic_decay":"IC Decay","glossary.term.zscore":"Z-Score","glossary.term.pe":"P/E Ratio","glossary.term.pb":"P/B Ratio","glossary.term.roe":"ROE","glossary.term.market_cap":"Market Cap","glossary.term.ma":"Moving Average","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"Volume Ratio","glossary.term.turnover":"Turnover Rate","glossary.term.zt_pool":"Limit-Up Pool","glossary.term.zha_ban":"Failed Limit-Up","glossary.term.dt_pool":"Limit-Down Pool","glossary.term.lhb":"Dragon-Tiger List","glossary.term.ladder":"Consecutive Limit-Ups","glossary.term.promote_rate":"Promotion Rate","glossary.term.money_effect":"Money Effect","glossary.term.sentiment_cycle":"Sentiment Cycle","glossary.term.sector_flow":"Sector Flow","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"Triple-Source Failover","glossary.term.pit":"PIT (Point-in-Time)","glossary.term.survivorship":"Survivorship Bias","glossary.term.ai_eval":"AI Evaluation","glossary.term.ai_chat":"AI Stock Chat","glossary.term.backtest":"Backtest","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"Out-of-Sample","glossary.term.sharpe":"Sharpe Ratio","glossary.term.drawdown":"Drawdown","glossary.term.winrate":"Win Rate","glossary.term.portfolio":"Paper Portfolio","glossary.term.data_quality":"Data Quality Grade","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"Sector Rotation","glossary.term.index_enhance":"Index Enhancement","glossary.term.multifactor":"Multi-Factor","glossary.term.volatility":"Volatility","glossary.term.dividend_yield":"Dividend Yield","glossary.term.bollinger":"Bollinger Bands","glossary.term.dragon_head":"Leading Stock","glossary.term.data_freshness":"Data Freshness"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,t){typeof Ne=="object"&&Ne.exports?Ne.exports=t():a.Quantja=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.ruleScore":"選股スコア","detail.notEvaluated":"未評価","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間","glossary.title":"用語集","glossary.search":"用語検索","glossary.definition":"定義","glossary.calc":"計算方法","glossary.empty":"該当する用語がありません","glossary.cat.macro":"マクロ","glossary.cat.strategy":"戦略","glossary.cat.factor":"ファクター","glossary.cat.tech":"テクニカル","glossary.cat.shortterm":"短期","glossary.cat.datasource":"データソース","glossary.cat.product":"プロダクト","glossary.term.merrill_clock":"メリルクロック","glossary.term.recovery":"回復期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"スタグフレーション","glossary.term.recession":"景気後退","glossary.term.merrill_score":"5次元スコア","glossary.term.momentum":"モメンタム","glossary.term.reversal":"リバーサル","glossary.term.quality":"クオリティ","glossary.term.capital_flow":"資金フロー","glossary.term.consensus":"コンセンサス","glossary.term.in_pool":"新規採用","glossary.term.out_pool":"除外","glossary.term.factor":"ファクター","glossary.term.factor_ic":"ファクターIC","glossary.term.ic_decay":"IC減衰","glossary.term.zscore":"Zスコア","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"時価総額","glossary.term.ma":"移動平均","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"出来高倍率","glossary.term.turnover":"回転率","glossary.term.zt_pool":"ストップ高","glossary.term.zha_ban":"ストップ高失敗","glossary.term.dt_pool":"ストップ安","glossary.term.lhb":"竜虎榜","glossary.term.ladder":"連続ストップ高","glossary.term.promote_rate":"昇格率","glossary.term.money_effect":"マネー効果","glossary.term.sentiment_cycle":"センチメントサイクル","glossary.term.sector_flow":"セクターフロー","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"三重冗長","glossary.term.pit":"PIT","glossary.term.survivorship":"サバイバーシップバイアス","glossary.term.ai_eval":"AI評価","glossary.term.ai_chat":"AI株チャット","glossary.term.backtest":"バックテスト","glossary.term.walkforward":"ウォークフォワード","glossary.term.oos":"サンプル外","glossary.term.sharpe":"シャープレシオ","glossary.term.drawdown":"ドローダウン","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬ポートフォリオ","glossary.term.data_quality":"データ品質","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"セクターローテーション","glossary.term.index_enhance":"インデックス強化","glossary.term.multifactor":"マルチファクター","glossary.term.volatility":"ボラティリティ","glossary.term.dividend_yield":"配当利回り","glossary.term.bollinger":"ボリンジャーバンド","glossary.term.dragon_head":"リーダー株","glossary.term.data_freshness":"データ鮮度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",a),a});(function(a,t){typeof Ne=="object"&&Ne.exports?Ne.exports=t():a.Quantko=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.ruleScore":"종목 점수","detail.notEvaluated":"미평가","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간","glossary.title":"용어집","glossary.search":"용어 검색","glossary.definition":"정의","glossary.calc":"계산 방법","glossary.empty":"일치하는 용어가 없습니다","glossary.cat.macro":"거시","glossary.cat.strategy":"전략","glossary.cat.factor":"팩터","glossary.cat.tech":"기술적","glossary.cat.shortterm":"단기","glossary.cat.datasource":"데이터 소스","glossary.cat.product":"제품","glossary.term.merrill_clock":"메릴 클럭","glossary.term.recovery":"회복기","glossary.term.overheat":"과열기","glossary.term.stagflation":"스태그플레이션","glossary.term.recession":"경기 침체","glossary.term.merrill_score":"5차원 점수","glossary.term.momentum":"모멘텀","glossary.term.reversal":"리버설","glossary.term.quality":"퀄리티","glossary.term.capital_flow":"자금 흐름","glossary.term.consensus":"컨센서스","glossary.term.in_pool":"신규 편입","glossary.term.out_pool":"제외","glossary.term.factor":"팩터","glossary.term.factor_ic":"팩터 IC","glossary.term.ic_decay":"IC 감쇠","glossary.term.zscore":"Z-Score","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"시가총액","glossary.term.ma":"이동평균","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"거래량비","glossary.term.turnover":"회전율","glossary.term.zt_pool":"상한가 풀","glossary.term.zha_ban":"상한가 실패","glossary.term.dt_pool":"하한가 풀","glossary.term.lhb":"용호방","glossary.term.ladder":"연속 상한가","glossary.term.promote_rate":"승격률","glossary.term.money_effect":"돈벌이 효과","glossary.term.sentiment_cycle":"심리 사이클","glossary.term.sector_flow":"섹터 자금","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"삼원 이중화","glossary.term.pit":"PIT","glossary.term.survivorship":"생존자 편향","glossary.term.ai_eval":"AI 평가","glossary.term.ai_chat":"AI 주식 채팅","glossary.term.backtest":"백테스트","glossary.term.walkforward":"워크포워드","glossary.term.oos":"샘플 외","glossary.term.sharpe":"샤프 비율","glossary.term.drawdown":"드로다운","glossary.term.winrate":"승률","glossary.term.portfolio":"모의 포트폴리오","glossary.term.data_quality":"데이터 품질","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"섹터 로테이션","glossary.term.index_enhance":"지수 강화","glossary.term.multifactor":"멀티팩터","glossary.term.volatility":"변동성","glossary.term.dividend_yield":"배당수익률","glossary.term.bollinger":"볼린저 밴드","glossary.term.dragon_head":"리더주","glossary.term.data_freshness":"데이터 신선도"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",a),a});(function(a,t){typeof Ne=="object"&&Ne.exports?Ne.exports=t():a.QuantzhTW=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.ruleScore":"選股評分","detail.notEvaluated":"未評估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時","glossary.title":"術語表","glossary.search":"搜尋術語","glossary.definition":"定義","glossary.calc":"計算口徑","glossary.empty":"無相符術語","glossary.cat.macro":"總體","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技術","glossary.cat.shortterm":"短線","glossary.cat.datasource":"資料源","glossary.cat.product":"產品","glossary.term.merrill_clock":"美林時鐘","glossary.term.recovery":"復甦期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"滯脹期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五維評分","glossary.term.momentum":"動量策略","glossary.term.reversal":"反轉策略","glossary.term.quality":"質量策略","glossary.term.capital_flow":"資金流策略","glossary.term.consensus":"共識榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰減","glossary.term.zscore":"Z-Score","glossary.term.pe":"本益比(PE)","glossary.term.pb":"股價淨值比(PB)","glossary.term.roe":"股東權益報酬率(ROE)","glossary.term.market_cap":"總市值","glossary.term.ma":"均線(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"換手率","glossary.term.zt_pool":"漲停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龍虎榜","glossary.term.ladder":"連板","glossary.term.promote_rate":"晉級率","glossary.term.money_effect":"賺錢效應","glossary.term.sentiment_cycle":"情緒週期","glossary.term.sector_flow":"板塊資金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源熱備","glossary.term.pit":"PIT(時點資料)","glossary.term.survivorship":"倖存者偏差","glossary.term.ai_eval":"AI評估","glossary.term.ai_chat":"智能問股","glossary.term.backtest":"回測","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"樣本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬組合","glossary.term.data_quality":"資料品質分","glossary.term.rbac":"RBAC權限","glossary.term.sector_rotation":"產業輪動","glossary.term.index_enhance":"指數增強","glossary.term.multifactor":"多因子","glossary.term.volatility":"波動率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林帶","glossary.term.dragon_head":"龍頭股","glossary.term.data_freshness":"資料新鮮度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",a),a});(function(a,t){typeof Ne=="object"&&Ne.exports?Ne.exports=t():a.QuantPinyin=t()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},t=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let y=[];function e(C){const q=String(C||"");let R="";for(const E of q){const v=a[E];v?R+=v.charAt(0):/[a-zA-Z0-9]/.test(E)&&(R+=E.toLowerCase())}return R}function d(C){const q=String(C||"");let R="";for(const E of q){const v=a[E];v?R+=v:/[a-zA-Z0-9]/.test(E)&&(R+=E.toLowerCase())}return R}function f(C){return String(C||"").trim().toLowerCase()}function D(C,q){const R=(q.code||"").toLowerCase();return/^\d+$/.test(C)?R.indexOf(C)!==-1:/[\u4e00-\u9fa5]/.test(C)?(q.name||"").toLowerCase().indexOf(C)!==-1:R.indexOf(C)!==-1||(q.initials||e(q.name)).indexOf(C)!==-1||(q.pinyin||d(q.name)).indexOf(C)!==-1}function h(C){const q={},R=[],E=function(v,i,m){!v||q[v]||(q[v]=!0,R.push({code:v,name:i||v,source:m||"core",initials:e(i||v),pinyin:d(i||v)}))};return t.forEach(function(v){E(v.code,v.name,"core")}),(C||[]).forEach(function(v){E(v.code,v.name,"extra")}),R}function r(C,q){const R=f(C);if(!R||!q||!q.length)return[];const E=R.split(/[\s,，、;；]+/).filter(Boolean);return E.length?q.filter(function(v){return E.every(function(i){return D(i,v)})}).slice(0,20).map(function(v){return{code:v.code,name:v.name,source:v.source||"core"}}):[]}function w(C){Array.isArray(C)&&(y=y.concat(C))}function o(){return y.slice()}function S(){return h(y)}function k(C){return r(C,S())}const T={CHAR_PINYIN:a,CORE_STOCKS:t,toPinyinInitials:e,toPinyin:d,normalizeQuery:f,matchToken:D,buildStockIndex:h,searchStocksByQuery:r,registerExtraStocks:w,getExtraStocks:o,getStockIndex:S,searchCoreStocks:k};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=T),T});(function(a,t){typeof Ne=="object"&&Ne.exports?Ne.exports=t():a.QuantPreferences=t()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",t={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},y=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],e={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function d(i){return i=parseInt(i,10),isNaN(i)?!1:i===-1||i>=0&&i<=360}const f={light:"classic-white",dark:"dark-pro"};function D(){if(typeof localStorage>"u")return{};try{const i=localStorage.getItem(a);if(!i)return{};const m=JSON.parse(i);return m&&typeof m=="object"?m:{}}catch{return{}}}function h(i){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(i))}catch{}}function r(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function w(){const i=Object.assign({},t,D()),m={};return y.forEach(function(O){const K=i[O];m[O]=O==="theme_hue"?d(K)?parseInt(K,10):t[O]:e[O].indexOf(K)!==-1?K:t[O]}),m}function o(i){if(y.indexOf(i)!==-1)return w()[i]}function S(i,m){return y.indexOf(i)===-1?!1:i==="theme_hue"?d(m):e[i].indexOf(m)!==-1}function k(i,m){if(!S(i,m))return!1;const O=D();return O[i]=m,h(O),r()&&C({[i]:m}),!0}function T(i){if(!i||typeof i!="object")return!1;const m={};if(Object.keys(i).forEach(function(K){S(K,i[K])&&(m[K]=i[K])}),!Object.keys(m).length)return!1;const O=Object.assign({},D(),m);return h(O),r()&&C(m),!0}function C(i){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:i})}).catch(function(){})}catch{}}async function q(){const i=w();if(!r()||typeof fetch>"u")return i;try{const m=await fetch("/api/user_config/preferences");if(m.ok){const O=await m.json();if(O.success&&O.preferences){const K=O.preferences;y.forEach(function(B){const U=K[B];if(B==="theme_hue"){d(U)&&(i[B]=parseInt(U,10));return}e[B].indexOf(U)!==-1&&(i[B]=U)}),h(i)}}}catch(m){typeof console<"u"&&console.warn&&console.warn("[preferences] 读取服务端偏好失败, 回退本地偏好:",m&&m.message)}return i}function R(i){const m=i||o("info_density")||"comfortable",O=e.info_density.indexOf(m)!==-1?m:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",O),O}function E(i){const m=i||o("theme")||"system";if(m==="system"){let O=!1;return typeof window<"u"&&window.matchMedia&&(O=window.matchMedia("(prefers-color-scheme: dark)").matches),O?"dark":"light"}return m==="dark"||m==="light"?m:"light"}const v={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:t,PREFERENCE_KEYS:y,PREFERENCE_VALUES:e,THEME_MODE_TO_THEME:f,getLocal:w,getPreference:o,isValidValue:S,setPreference:k,setPreferences:T,saveToBackend:C,loadPreferences:q,resolveTheme:E,applyDensity:R};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=v),v});(function(a,t){typeof Ne=="object"&&Ne.exports?Ne.exports=t():a.QuantRecent=t()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function y(){if(typeof localStorage>"u")return[];try{const w=localStorage.getItem(a);if(!w)return[];const o=JSON.parse(w);return Array.isArray(o)?o:[]}catch{return[]}}function e(w){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(w))}catch{}}function d(w,o){if(!w)return!1;let S=y().filter(function(k){return k.code!==w});return S.unshift({code:w,name:(o||"").toString().slice(0,32),ts:Date.now()}),S.length>10&&(S=S.slice(0,10)),e(S),!0}function f(){return y().slice(0,10)}function D(w){e(y().filter(function(o){return o.code!==w}))}function h(){e([])}const r={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:d,getRecentViewed:f,removeRecent:D,clearRecent:h};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=r),r});(function(){const a=typeof Vue<"u"?Vue:{},{ref:t,computed:y,watch:e,onMounted:d,nextTick:f}=a;function D(c,_={}){if(typeof c=="string"&&c.startsWith("/api/")){const u=localStorage.getItem("quant_token");if(u)return{..._,headers:{..._.headers||{},Authorization:"Bearer "+u}}}return _}async function h(c,_={}){const u=D(c,_),z={"Content-Type":"application/json",...u.headers},ie=(_.method||"GET").toUpperCase(),G=ie+"|"+c,M=async()=>{const W=await fetch(c,{...u,headers:z});if(W.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!W.ok){let ne="";try{const ve=await W.json();ne=ve&&ve.detail||""}catch{}throw Object.assign(new Error(ne||"请求失败（HTTP "+W.status+"）"),{status:W.status})}return await W.json()};try{const W=_.noLoading?M:()=>m(M);return ie==="GET"&&!_.noDedupe?await R(G,W):await W()}catch(W){throw W.message==="登录已过期"?W:(console.error("[apiFetch] "+c+":",W.message),Object.assign(W,{_formatted:O(W,W.status)}))}}function r(){return new Date().toISOString().split("T")[0]}function w(c){return c?c.split("T")[0]:""}function o(c,_="info",u=3e3){let z=document.querySelector(".toast-container");z||(z=document.createElement("div"),z.className="toast-container",document.body.appendChild(z));const ie=document.createElement("div");ie.className=`toast toast-${_}`,ie.textContent=c,z.appendChild(ie),setTimeout(()=>{ie.classList.add("leaving"),setTimeout(()=>ie.remove(),300)},u)}function S(c,_=300){let u;return function(...z){clearTimeout(u),u=setTimeout(()=>c.apply(this,z),_)}}function k(c,_=300){let u=!1;return function(...z){u||(c.apply(this,z),u=!0,setTimeout(()=>{u=!1},_))}}async function T(c,_=3e3,u=""){const z=new Promise((ie,G)=>setTimeout(()=>G(new Error("timeout")),_));try{return await Promise.race([c,z])}catch(ie){console.warn(`[timeout] ${u||"task"} failed:`,ie.message)}}const C=new Map;function q(){return C.clear(),!0}function R(c,_){if(!c||typeof _!="function")return Promise.reject(new Error("bad dedupe args"));if(C.has(c))return C.get(c);const u=Promise.resolve().then(_).finally(()=>{C.delete(c)});return C.set(c,u),u}let E=0;function v(){return E=0,!0}function i(){return E}async function m(c){E++;try{return await c()}finally{E--}}function O(c,_){if(!c)return"请求失败";if(c&&typeof c=="object"&&c.detail)return String(c.detail);if(typeof c=="string"&&c)return c;if(c&&c.message){const u=String(c.message);return/Failed to fetch|fetch failed|networkerror/i.test(u)?"网络连接失败，请检查网络后重试":u}return _?"请求失败（HTTP "+_+"）":"请求失败"}function K(c,_){if(c===_)return!0;try{return JSON.stringify(c)===JSON.stringify(_)}catch{return!1}}function B(c,_,u){const z=(c||"GET").toUpperCase();let ie="";if(u)try{const G={};Object.keys(u).sort().forEach(M=>{G[M]=u[M]}),ie=JSON.stringify(G)}catch{ie=""}return z+"|"+_+"|"+ie}class U{constructor(){this._map=new Map,this._exp=new Map}get(_){const u=this._exp.get(_);if(u!=null){if(Date.now()>u){this.delete(_);return}return this._map.get(_)}}set(_,u,z){return this._map.set(_,u),this._exp.set(_,Date.now()+(z>0?z:-1)),u}delete(_){this._map.delete(_),this._exp.delete(_)}clear(){this._map.clear(),this._exp.clear()}has(_){return this.get(_)!==void 0}get size(){return this._map.size}}function Q(c){const _=new U,u=c!=null&&c>0?c:15e3;return{store:_,defaultTtl:u,get:z=>_.get(z),set:(z,ie,G)=>_.set(z,ie,G??u),delete:z=>_.delete(z),clear:()=>_.clear(),size:()=>_.size}}const I=new Set;async function N(c){const _=c&&c.cache,u=c&&c.key,z=c&&(c.fetchFn||c.fetcher),ie=c&&c.ttl;if(!_||!u||typeof z!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(I.has(u))return{ok:!1,changed:!1,skipped:!0,fresh:null};I.add(u);try{const G=_.get(u);let M;try{M=await z()}catch(ne){return c.onError&&c.onError(ne),{ok:!1,changed:!1,fresh:null}}const W=G!==void 0&&!K(G,M);return _.set(u,M,ie),c.apply&&c.apply(M,G),G!==void 0&&(W?c.onChanged&&c.onChanged(M,G):c.onUnchanged&&c.onUnchanged(M,G)),{ok:!0,changed:W,fresh:M}}finally{I.delete(u)}}const F=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function J(c,_={}){if(c==null)return"";const u=_&&_.allow||F,z=new Set(u.map(W=>String(W).toUpperCase()));let ie;try{ie=new DOMParser().parseFromString(String(c),"text/html")}catch{return String(c).replace(/[<>&]/g,ne=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[ne])}const G=ie.body||ie;function M(W){Array.from(W.childNodes).forEach(ne=>{if(ne.nodeType===1){const ve=String(ne.tagName).toUpperCase();if(z.has(ve))Array.from(ne.attributes).forEach(Me=>{const $=Me.name.toLowerCase(),ce=(Me.value||"").trim().toLowerCase();($.startsWith("on")||($==="href"||$==="src"||$==="xlink:href")&&ce.startsWith("javascript:")||$==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(ce))&&ne.removeAttribute(Me.name),$==="href"&&!/^(https?:|mailto:|#|\/)/.test(ce)&&ne.removeAttribute("href")}),ve==="A"&&ne.setAttribute("rel","noopener noreferrer"),M(ne);else{const Me=ne.parentNode;for(;ne.firstChild;)Me.insertBefore(ne.firstChild,ne);Me.removeChild(ne)}}else if(ne.nodeType!==3){if(ne.nodeType===8)ne.parentNode&&ne.parentNode.removeChild(ne);else if(ne.nodeType===4){const ve=ie.createTextNode(ne.nodeValue||"");ne.parentNode&&ne.parentNode.replaceChild(ve,ne)}}})}return M(G),G.innerHTML}const Z="/api/openapi",le="/api/market/ws/quotes",ee=1,L=2.5,s="数据不可达",b="实时不可用，不刷新";function l(){const c=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",_=typeof location<"u"?location.host:"localhost:8001";return c+"//"+_+le}function g(c,_){if(!c)return null;const u=_||{riseSpeed:ee,volumeRatio:L},z=u.riseSpeed!=null?u.riseSpeed:ee,ie=u.volumeRatio!=null?u.volumeRatio:L,G=parseFloat(c.rise_speed);if(!isNaN(G)&&Math.abs(G)>z)return G>0?"涨速预警":"跌速预警";const M=parseFloat(c.volume_ratio);return!isNaN(M)&&M>ie?"放量预警":null}function X(c){const _=Number(c);return c==null||isNaN(_)?null:_}const p={apiFetch:h,withAuthHeaders:D,getToday:r,formatDate:w,withTimeout:T,showToast:o,debounce:S,throttle:k,resetInFlight:q,dedupeRequest:R,resetLoading:v,loadingCount:i,withLoading:m,formatApiError:O,jsonEquals:K,makeCacheKey:B,CacheStore:U,createTtlCache:Q,silentRefresh:N,sanitizeHtml:J,OPENAPI_ROUTE_BASE:Z,REALTIME_WS_PATH:le,WARN_RISE_SPEED_THRESHOLD:ee,WARN_VOLUME_RATIO_THRESHOLD:L,REALTIME_DEGRADED_TEXT:s,REALTIME_FALLBACK_TEXT:b,buildRealtimeWsUrl:l,checkQuoteWarning:g,quoteFmt:{price:function(c){const _=X(c);return _===null?"--":_.toFixed(2)},pct:function(c){const _=X(c);return _===null?"--":(_>0?"+":"")+_.toFixed(2)+"%"},num:function(c){const _=X(c);return _===null?"--":_.toFixed(2)},color:function(c){const _=c?c.change_pct:null,u=X(_);return u===null?"":u>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=p),typeof Ne<"u"&&Ne.exports&&(Ne.exports=p)})();(function(a,t){typeof Ne=="object"&&Ne.exports?Ne.exports=t():a.QuantTabsCore=t()})(typeof self<"u"?self:void 0,function(){var a=8;function t(S,k){return S+"/"+k}function y(S,k,T,C){var q=S[k]||[],R=q.findIndex(function(i){return i.subPage===T});if(R!==-1)return{groups:S,activeKey:t(k,T)};var E=q.concat([{subPage:T,title:C}]);E.length>a&&(E=d(E));var v=Object.assign({},S,e({},k,E));return{groups:v,activeKey:t(k,T)}}function e(S,k,T){return S[k]=T,S}function d(S){if(S.length<=a)return S;var k=S.length>1?1:0;return S.filter(function(T,C){return C!==k})}function f(S,k,T,C){var q=S[k]||[],R=q.findIndex(function(m){return m.subPage===T});if(R===-1)return{groups:S,nextActive:null};var E=q.filter(function(m){return m.subPage!==T}),v=Object.assign({},S,e({},k,E)),i=null;return T===C&&(E[R]?i=E[R].subPage:E[R-1]?i=E[R-1].subPage:i=null),{groups:v,nextActive:i}}function D(S){return S&&S.length?S[0]:""}function h(S,k){return S[k]||[]}function r(S,k,T){var C=S[k]||[],q=C.filter(function(E){return E.subPage===T}),R=Object.assign({},S,e({},k,q));return{groups:R,activeKey:q.length?t(k,q[0].subPage):null}}function w(S,k){var T=Object.assign({},S,e({},k,[]));return{groups:T,activeKey:null}}function o(S,k,T,C){var q=(S[k]||[]).slice();if(T<0||T>=q.length)return{groups:S};var R=q.splice(T,1)[0];return q.splice(Math.max(0,Math.min(C,q.length)),0,R),{groups:Object.assign({},S,e({},k,q))}}return{MAX_TABS:a,openTab:y,closeTab:f,getDefaultTab:D,tabsOf:h,evictOldest:d,closeOthers:r,closeAll:w,reorder:o,keyOf:t}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var il=typeof Ne=="object"&&Ne.exports?Ne.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;il&&(window.__quantModules.tabsCore=il)}(function(a,t){typeof Ne=="object"&&Ne.exports?Ne.exports=t():a.QuantNavModeCore=t()})(typeof self<"u"?self:void 0,function(){var a=["subnav","tree","toptab"],t="toptab",y="nav_mode";function e(o){return a.indexOf(o)!==-1?o:t}function d(o){return e(o)==="subnav"}function f(o){return e(o)==="tree"}function D(o){return e(o)==="toptab"}function h(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function r(){var o=h(),S=t;if(o)try{S=e(o.getItem(y))}catch{}return{navMode:S}}function w(o){var S=h();if(!(!S||!o))try{o.navMode!==void 0&&S.setItem(y,e(o.navMode))}catch{}}return{NAV_MODES:a,DEFAULT_NAV_MODE:t,normalizeNavMode:e,subnavVisible:d,treeChildrenVisible:f,topTabsVisible:D,readPrefs:r,writePrefs:w}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var ol=typeof Ne=="object"&&Ne.exports?Ne.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;ol&&(window.__quantModules.navModeCore=ol)}(function(){function t(l,g){if(!Array.isArray(l)||l.length<=g)return l;const X=[],P=l.length/g*2;for(let p=0;p<l.length;p+=P){const c=Math.floor(p),_=Math.min(l.length,Math.ceil(p+P));let u=1/0,z=-1,ie=-1/0,G=-1;for(let M=c;M<_;M++){const W=l[M];if(!W)continue;const ne=W[3]!=null?Number(W[3]):1/0,ve=W[4]!=null?Number(W[4]):-1/0;ne<u&&(u=ne,z=M),ve>ie&&(ie=ve,G=M)}z>=0&&X.push(l[z]),G>=0&&G!==z&&X.push(l[G])}return X}let y=null;function e(){return typeof echarts<"u"?Promise.resolve():(y||(y=new Promise(function(l,g){const X=document.createElement("script");X.src="/static/lib/echarts.min.js",X.async=!0,X.onload=function(){typeof echarts<"u"?l():g(new Error("echarts 加载后未定义"))},X.onerror=function(){g(new Error("echarts.min.js 加载失败"))},document.head.appendChild(X)})),y)}function d(){const l=getComputedStyle(document.documentElement);return{primary:l.getPropertyValue("--primary-color").trim()||"#2563eb",up:l.getPropertyValue("--color-up").trim()||"#43e97b",down:l.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:l.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:l.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const f=l=>{try{return typeof getComputedStyle!="function"||typeof document>"u"?"":(getComputedStyle(document.documentElement).getPropertyValue(l)||"").trim()}catch{return""}};function D(){return{up:f("--color-up")||"#E63946",down:f("--color-down")||"#2E7D32",neutral:f("--color-neutral")||"#43a047",accent:f("--color-accent")||"#F59E0B",risk:f("--color-danger")||"#C62828",warn:f("--color-warning")||"#FF9800",success:f("--color-success")||"#4CAF50",primary:f("--qc-primary-600")||"#b8922a",grid:f("--chart-split")||"#e2e8f0",axis:f("--chart-axis")||"#cbd5e1",bg:f("--chart-bg")||"transparent",series:[f("--qc-primary-600")||"#b8922a",f("--qc-primary-500")||"#c49b2e",f("--qc-primary-700")||"#8f6f1f",f("--qc-primary-400")||"#d4b352",f("--color-up")||"#E63946",f("--color-down")||"#2E7D32",f("--color-accent")||"#F59E0B",f("--qc-neutral-400")||"#b8ae9f"]}}function h(l,g,X,P=!1,p=!1){if(!g||g.length===0)return;g.length>2e3&&(g=t(g,2e3));const c=g.map(se=>typeof se[0]=="string"&&se[0].indexOf("-")>=0?se[0]:se[0].slice(0,4)+"-"+se[0].slice(4,6)+"-"+se[0].slice(6,8)),_=d(),u={ma5:f("--color-accent")||"#F59E0B",ma10:f("--color-primary")||"#3B82F6",ma20:f("--color-warning")||"#8B5CF6",ma60:f("--color-success")||"#10B981"},z=g.map(se=>[se[1],se[2],se[3],se[4]]),ie=g.map(se=>se[5]),G=g.map(se=>se[6]),M=g.map(se=>se[7]),W=g.map(se=>se[8]),ne=g.map(se=>se[9]),ve=g.map(se=>se[10]),$=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",ce=_.borderLight,Re={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:_.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:$,borderColor:ce,textStyle:{color:_.textSecondary,fontSize:12},formatter:function(se){if(!se||!se.length)return"";const fe=se[0].dataIndex,Te=g[fe];if(!Te)return"";const me=l.getOption(),we=me.legend&&me.legend[0]&&me.legend[0].selected||{},qe=Oe=>we[Oe]!==!1,re=Oe=>Oe==null||isNaN(Oe)?"--":Number(Oe).toFixed(2),ae=Oe=>Oe==null||isNaN(Oe)?"--":(Number(Oe)/1e4).toFixed(2)+"万手",ge=['<div style="font-weight:600;color:'+_.textSecondary+';">'+c[fe]+"</div>"];return ge.push("开: "+re(Te[1])+"　收: "+re(Te[2])),ge.push("低: "+re(Te[3])+"　高: "+re(Te[4])),ge.push("成交量: "+ae(Te[5])),Te[6]!=null&&qe("MA5")&&ge.push("MA5: "+re(Te[6])),Te[7]!=null&&qe("MA10")&&ge.push("MA10: "+re(Te[7])),Te[8]!=null&&qe("MA20")&&ge.push("MA20: "+re(Te[8])),Te[9]!=null&&qe("MA60")&&ge.push("MA60: "+re(Te[9])),Te[10]!=null&&ge.push("VOL_MA5: "+ae(Te[10])),ge.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:p?0:8,textStyle:{color:_.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:p?30:40,height:p?"48%":"52%"},{left:56,right:16,top:p?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:c,boundaryGap:!0,axisLine:{lineStyle:{color:ce}},axisLabel:{color:_.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:c,axisLabel:{show:!1},axisLine:{lineStyle:{color:ce}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:ce}},axisLabel:{color:_.textSecondary,fontSize:11,formatter:function(se){const fe=Math.round(se*100)/100;return fe%1===0?String(Math.round(fe)):fe.toFixed(2)}},splitLine:{lineStyle:{color:ce,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:ce}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,g.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:ce,textStyle:{color:_.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:z,itemStyle:{color:_.up,color0:_.down,borderColor:_.up,borderColor0:_.down}},{name:"MA5",type:"line",data:G,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma5}},{name:"MA10",type:"line",data:M,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma10}},{name:"MA20",type:"line",data:W,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma20}},{name:"MA60",type:"line",data:ne,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:u.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:ie,itemStyle:{color:function(se){const fe=se.dataIndex;return g[fe][1]>=g[fe][2]?_.up:_.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:ve,smooth:!0,symbol:"none",lineStyle:{width:1,color:u.ma5,type:"dashed"}}]};l.setOption(Re,!0)}const r=new Map;function w(l){return r.has(l)||r.set(l,{chart:null,cache:null}),r.get(l)}async function o(l,g,X,P=!1,p={}){await e();const c=w(l);let _=document.getElementById(l);if(!_)for(let u=0;u<16&&(await new Promise(z=>setTimeout(z,50)),_=document.getElementById(l),!_);u++);if(!_)throw new Error("无法找到图表容器: "+l);if(_.offsetWidth<50&&(_.style.minWidth="600px",_.style.minHeight="300px"),!c.chart||c.chart.isDisposed()||c.chart.getDom()!==_){if(c.chart)try{c.chart.dispose()}catch{}c.chart=echarts.init(_),c.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const u=p.onLegend;typeof u=="function"&&c.chart.on("legendselectchanged",z=>{z&&z.selected&&u(z.selected)})}return h(c.chart,g,X,P,!!p.isMobile),c.cache={data:g,period:X,isIndex:P,isMobile:!!p.isMobile},c.chart}function S(l){const g=r.get(l);g&&g.chart&&(g.chart.dispose(),g.chart=null,g.cache=null)}function k(l){const g=r.get(l);g&&g.chart&&g.chart.resize()}function T(l,g){const X=r.get(l),P=X&&X.chart;if(P)if(g<=0)P.dispatchAction({type:"dataZoom",start:0,end:100});else{const _=Math.max(0,(60-g)/60*100);P.dispatchAction({type:"dataZoom",start:Math.round(_),end:100})}}function C(l){var P,p,c;const g=r.get(l);if(!g||!g.chart||!g.cache||g.chart.isDisposed())return;const X=((c=(p=(P=g.chart.getOption())==null?void 0:P.legend)==null?void 0:p[0])==null?void 0:c.selected)||null;h(g.chart,g.cache.data,g.cache.period,g.cache.isIndex,g.cache.isMobile),X&&g.chart.setOption({legend:{selected:X}})}function q(l){const g=r.get(l);return g&&g.chart}const R=new Map;function E(l){return R.has(l)||R.set(l,{chart:null,cache:null}),R.get(l)}function v(l,g,X={}){return e().then(function(){const P=E(l),p=document.getElementById(l);if(!p)throw new Error("无法找到图表容器: "+l);if(p.offsetWidth<50&&(p.style.minWidth="600px",p.style.minHeight="300px"),P.chart&&P.chart.getDom&&P.chart.getDom()!==p){try{P.chart.dispose()}catch{}P.chart=null}P.chart||(P.chart=echarts.init(p),P.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),P.resizeBound||(P.resizeBound=!0,window.addEventListener("resize",function(){P.chart&&!P.chart.isDisposed()&&P.chart.resize()})));const c=typeof g=="function"?g():g;return P.chart.setOption(c,!0),P.cache={buildOption:g,key:X.key||""},P.chart})}function i(l){var p,c,_;const g=R.get(l);if(!g||!g.chart||!g.cache||g.chart.isDisposed())return;const X=((_=(c=(p=g.chart.getOption())==null?void 0:p.legend)==null?void 0:c[0])==null?void 0:_.selected)||null,P=typeof g.cache.buildOption=="function"?g.cache.buildOption():g.cache.buildOption;g.chart.setOption(P,!0),X&&P&&P.legend&&P.legend.selected&&g.chart.setOption({legend:{selected:X}})}function m(l){const g=R.get(l);g&&g.chart&&(g.chart.dispose(),g.chart=null,g.cache=null)}function O(l){const g=R.get(l);g&&g.chart&&g.chart.resize()}const K=new Map;function B(l){return K.has(l)||K.set(l,{chart:null,cache:null}),K.get(l)}function U(l,g,X={}){return e().then(function(){const P=B(l),p=document.getElementById(l);if(!p)return null;if(p.offsetWidth<50&&(p.style.minWidth="600px",p.style.minHeight="300px"),P.chart&&P.chart.getDom&&P.chart.getDom()!==p){try{P.chart.dispose()}catch{}P.chart=null}P.chart||(P.chart=echarts.init(p),P.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),P.resizeBound||(P.resizeBound=!0,window.addEventListener("resize",function(){P.chart&&!P.chart.isDisposed()&&P.chart.resize()})));const c=typeof g=="function"?g():g;return P.chart.setOption(c,!0),P.cache={buildOption:g,key:X.key||""},P.chart})}function Q(l){const g=K.get(l);if(!g||!g.chart||!g.cache||g.chart.isDisposed())return;const X=typeof g.cache.buildOption=="function"?g.cache.buildOption():g.cache.buildOption;g.chart.setOption(X,!0)}function I(l){const g=K.get(l);g&&g.chart&&(g.chart.dispose(),g.chart=null,g.cache=null)}function N(l){const g=K.get(l);g&&g.chart&&g.chart.resize()}const F=U,J=Q,Z=I,le=N;function ee(l,g,X,P){P=P||{};const p=P.drawdownColor||f("--state-danger-solid")||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[P.navLabel||"净值",P.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:X||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:P.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:P.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:P.navLabel||"净值",type:"line",data:l||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:P.ddLabel||"回撤",type:"line",yAxisIndex:1,data:g||[],showSymbol:!1,areaStyle:{opacity:.25,color:p},lineStyle:{color:p,type:"solid",width:1.5}}]}}function L(l,g){g=g||{};const X=g.bandColor||f("--state-info-solid")||"#1976d2",P=l&&l.dates||[],p=l&&l.median||[],c=l&&l.q25||[],_=l&&l.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[g.medianLabel||"中位IC",g.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:P,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:g.medianLabel||"中位IC",type:"line",data:p,showSymbol:!1,lineStyle:{width:2,color:X}},{name:g.bandLabel||"25–75分位",type:"line",data:c,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:X,opacity:.12}},{name:"_bandH",type:"line",data:_.map(function(u,z){return u-(c[z]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:X,opacity:.12}}]}}function s(l,g){g=g||{};const X=g.color||f("--color-ai")||"#7c3aed",P=l&&l.dates||[],p=l&&l.value||[],c=l&&l.upper||[],_=l&&l.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[g.valueLabel||"情绪",g.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:P,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:g.valueLabel||"情绪",type:"line",data:p,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:X}},{name:g.bandLabel||"过热/冰点带",type:"line",data:c,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:X,opacity:.1}},{name:"_bandL",type:"line",data:_.map(function(u,z){return(c[z]||0)-u}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:X,opacity:.1}}]}}const b={renderKlineChart:h,renderKlineTo:o,disposeKline:S,resizeKline:k,zoomKline:T,redrawKline:C,getKlineChart:q,renderBacktestTo:v,redrawBacktest:i,disposeBacktest:m,resizeBacktest:O,renderPortfolioTo:U,redrawPortfolio:Q,disposePortfolio:I,resizePortfolio:N,renderSimpleChartTo:F,redrawSimpleChart:J,disposeSimpleChart:Z,resizeSimpleChart:le,buildNavDrawdownOption:ee,buildIcBandOption:L,buildSentimentBandOption:s,downsampleSeries:t,ensureEcharts:e,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:D,init(){return{renderKlineChart:h,renderKlineTo:o,disposeKline:S,resizeKline:k,zoomKline:T,redrawKline:C,getKlineChart:q,renderBacktestTo:v,redrawBacktest:i,disposeBacktest:m,resizeBacktest:O,renderPortfolioTo:U,redrawPortfolio:Q,disposePortfolio:I,resizePortfolio:N,renderSimpleChartTo:F,redrawSimpleChart:J,disposeSimpleChart:Z,resizeSimpleChart:le,buildNavDrawdownOption:ee,buildIcBandOption:L,buildSentimentBandOption:s,downsampleSeries:t,ensureEcharts:e,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:D}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=b),typeof Ne<"u"&&Ne.exports&&(Ne.exports={downsampleSeries:t,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:ee,buildIcBandOption:L,buildSentimentBandOption:s})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:t,computed:y}=Vue,{configChanged:e,consensus:d}=a,f=t(null),D=t(""),h=t(null),r=t([]),w=t([]),o=t([]),S=t([]),k=t([]),T=t([]),C=t({});function q(_e){const ke=k.value.indexOf(_e);ke>=0?k.value.splice(ke,1):k.value.push(_e)}const R=t("date"),E=t([]),v=t(!1),i=t(!1),m=t("watchlist"),O=t([]),K=t({vendors:[]}),B=t(""),U=t(!1),Q=t(!1);function I(_e){if(!_e)return"";const ke=String(_e),Ie=ke.length;if(Ie<=4)return ke[0]+"*".repeat(Ie-1);const De=Ie<=8?2:4;return ke.slice(0,De)+"*".repeat(Ie-De-De)+ke.slice(-De)}async function N(_e){let ke;try{ke=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const De=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:ke,target:_e})})).json();if(De.success)return De.secret;ElementPlus.ElMessage.error(De.message||"查看失败")}catch(Ie){ElementPlus.ElMessage.error("查看失败: "+Ie.message)}return null}async function F(_e){if(_e._revealed){_e._revealed=!1,_e._masked=I(_e.api_key);return}const ke=await N("ai:"+_e.vendor_key);ke!==null&&(_e.api_key=ke,_e._revealed=!0)}async function J(_e){if(_e._editing){_e._editing=!1,_e._revealed=!1,_e.api_key&&(_e._masked=I(_e.api_key));return}_e._editing=!0;try{const Ie=await(await fetch("/api/ai/models?full=1")).json();if(Ie.success){const De=(Ie.data.vendors||[]).find(Je=>Je.vendor_key===_e.vendor_key);De&&(_e.api_key=De.api_key||"")}else Ie.message&&ElementPlus.ElMessage.error(String(Ie.message))}catch(ke){ElementPlus.ElMessage.error("解锁失败: "+ke.message)}}function Z(_e){const{_fetching:ke,_testing:Ie,_revealed:De,_masked:Je,_editing:Qe,...$e}=_e;return Qe||($e.api_key=""),$e.models=(_e.models||[]).map(Ct=>{const{_testing:bt,testResult:vt,...Dt}=Ct;return Dt}),$e}async function le(){var _e;try{B.value="";const ke=await fetch("/api/ai/models");if(ke.status===401){B.value="请先登录后再查看模型配置";return}if(!ke.ok){B.value=`服务器错误 (${ke.status})`;return}const Ie=await ke.json();Ie.success?(O.value=(((_e=Ie.data)==null?void 0:_e.vendors)||[]).map(De=>({...De,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:De.api_key||"",models:(De.models||[]).map(Je=>({...Je,_testing:!1,testResult:void 0}))})),B.value=""):B.value=Ie.message||"加载失败"}catch(ke){B.value="网络错误: "+ke.message}}async function ee(){try{const ke=await(await fetch("/api/ai/catalog")).json();ke.success&&ke.data&&(K.value=ke.data)}catch(_e){console.warn("AI 厂商目录加载失败",_e)}}async function L(){Q.value=!0;try{const Ie=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:O.value.map(Z)})})).json();Ie.success?(O.value.forEach(De=>{De._editing=!1,De._revealed=!1,De.api_key&&(De._masked=I(De.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(Ie.message||"保存失败")}catch(_e){ElementPlus.ElMessage.error("保存失败: "+_e.message)}Q.value=!1}async function s(_e,ke){ke._testing=!0;try{const De=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:_e.vendor_key,model:ke.name,base_url:_e.base_url,api_key:_e.api_key,timeout:_e.timeout})});ke.testResult=await De.json()}catch(Ie){ke.testResult={success:!1,message:Ie.message}}ke._testing=!1}async function b(){U.value=!0;for(const _e of O.value)for(const ke of _e.models||[])_e.api_key?await s(_e,ke):ke.testResult={success:!1,message:"未配置 API Key"};U.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function l(_e){_e._fetching=!0;try{const De=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:_e.vendor_key,base_url:_e.base_url,api_key:_e.api_key,timeout:_e.timeout})})).json();if(De.success&&Array.isArray(De.models)){const Je=new Set((_e.models||[]).map(Qe=>Qe.name));for(const Qe of De.models)Je.has(Qe)||_e.models.push({name:Qe,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${De.models.length} 个模型`)}else ElementPlus.ElMessage.error(De.message||"获取模型列表失败")}catch(ke){ElementPlus.ElMessage.error("获取模型列表失败: "+ke.message)}_e._fetching=!1}function g(_e){const ke=(K.value.vendors||[]).find(Ie=>Ie.vendor_key===_e);if(ke){if(O.value.some(Ie=>Ie.vendor_key===_e)){ElementPlus.ElMessage.warning("该厂商已存在");return}O.value.push({vendor_key:ke.vendor_key,name:ke.name,kind:ke.kind,base_url:ke.base_url,api_key:"",timeout:60,tier:ke.tier||"",website:ke.website||"",locked:!!ke.locked,models:(ke.models||[]).map(Ie=>({name:Ie,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${ke.name}」，配置 API Key 后保存生效`)}}function X(){O.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function P(_e){_e.models||(_e.models=[]),_e.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function p(_e,ke){const Ie=_e.models[ke];if(!(!Ie||Ie.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(Ie.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}_e.models.splice(ke,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function c(_e){if(_e.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(_e.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const ke=O.value.indexOf(_e);ke>=0&&O.value.splice(ke,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const _=t({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),u=t(!1),z=t(""),ie=t(0),G=t(""),M=t(!1),W=t(""),ne=t(!1),ve=t(0),Me=t(0),$=t(""),ce=t({}),Re=t({}),se=t({}),fe=t({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),Te=t("manual"),me=y(()=>{const _e={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return _e[fe.value.provider]||_e.custom}),we={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function qe(_e){if(_e==="manual")return;const ke=we[_e];ke&&(fe.value.endpoint=ke.endpoint,fe.value.model=ke.model,e.value=!0)}function re(){if(e.value=!0,fe.value.provider!=="codingplan"&&fe.value.provider!=="custom"){const _e=me.value;_e&&(fe.value.endpoint=_e.endpoint,fe.value.model=_e.model)}else fe.value.provider==="codingplan"&&(fe.value.endpoint||(fe.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),fe.value.model||(fe.value.model="ark-code-latest"))}let ae=null;const ge=8;async function Oe(){ae&&(ae.abort(),ae=null);const ke=(d.value||[]).filter($e=>$e.status==="new"||$e.status==="out").filter($e=>!C.value[$e.code]);if(ke.length===0)return;const Ie=new AbortController;ae=Ie;let De=0;const Je=async()=>{for(;De<ke.length;){const $e=ke[De++];try{const bt=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:$e.code,stock_name:$e.name,event_type:$e.status==="new"?"enter":"exit"}),signal:Ie.signal})).json();bt.success&&bt.signal&&(C.value={...C.value,[$e.code]:bt.signal})}catch(Ct){if(Ct.name==="AbortError")return}}},Qe=Array.from({length:Math.min(ge,ke.length)},()=>Je());await Promise.all(Qe)}function Ae(){ae&&(ae.abort(),ae=null)}let Be=0;async function St(_e){const ke=++Be;try{const De=await(await fetch(`/api/ai/history/last/${encodeURIComponent(_e)}`)).json();if(ke!==Be)return;De.success&&De.data&&(f.value=De.data,D.value=De.data.evaluate_time,Pt(_e,De.data),xt(De.data))}catch{}}async function Pt(_e,ke){var Ie,De;try{const Qe=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(_e)}&limit=2`)).json();if(Qe.success&&Qe.data&&Qe.data.length>=2){const $e=Qe.data[1],Ct=((Ie=ke.result)==null?void 0:Ie.total_score)||0,bt=((De=$e.result)==null?void 0:De.total_score)||0;Ct>0&&bt>0&&(h.value={prevScore:bt,currScore:Ct,diff:Ct-bt})}}catch(Je){console.warn("[refreshStrategyData] autoPoll failed:",Je)}}function xt(_e){var Je;const ke=((Je=_e.result)==null?void 0:Je.dimensions)||{},Ie=[],De=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Qe of De){const $e=ke[Qe.key];$e!==void 0&&Ie.push({icon:$e>=Qe.good?"check-circle-2":$e>=Qe.warn?"alert-triangle":"x-circle",label:`${Qe.label} ${Math.round($e)}分`})}r.value=Ie}return{aiResult:f,lastEvalTime:D,evalHistoryComparison:h,checklistItems:r,aiHistory:w,selectedHistoryIds:o,expandedDates:S,expandedMonths:k,expandedStocks:T,poolSignals:C,toggleMonthExpand:q,aiHistoryView:R,selectedWatchlistCodes:E,showAutoEvaluateSettings:v,savingConfig:i,autoEvaluateScope:m,aiVendors:O,aiCatalog:K,aiModelsError:B,testingAllModels:U,savingAiModels:Q,loadAiVendors:le,loadAiCatalog:ee,saveAiVendors:L,saveAiModels:L,testVendorModel:s,testAllVendorModels:b,fetchVendorModels:l,addVendorFromCatalog:g,addCustomVendor:X,addVendorModel:P,removeVendorModel:p,removeVendor:c,toggleVendorKeyReveal:F,toggleVendorEdit:J,autoEvaluateConfig:_,aiLoading:u,aiEvalStage:z,aiEvalElapsed:ie,aiEvalError:G,showBatchEvaluate:M,batchStocks:W,batchRunning:ne,batchTotal:ve,batchCompleted:Me,batchCurrent:$,batchStatuses:ce,batchResults:Re,batchEvalErrors:se,aiConfig:fe,selectedPreset:Te,providerInfo:me,aiPresets:we,applyPreset:qe,onProviderChange:re,fetchPoolSignals:Oe,cancelPoolSignals:Ae,loadLastEvaluation:St}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:t,computed:y,watch:e}=Vue,{configChanged:d,aiConfig:f,aiLoading:D,feishuConfig:h,currentTheme:r,changeTheme:w,autoEvaluateConfig:o,currentUser:S,strategyFilter:k,applyTheme:T,dashboardData:C,lastRefreshTime:q,saveAiModels:R}=a,E=function(re){const ae=window.__quantModules&&window.__quantModules.themes;return ae&&ae.applyLegacyTheme?ae.applyLegacyTheme(re):T(re)},v=t(!1),i=t(!1),m=t(null),O=t(null),K=t(null),B=t(null),U=t({token:"",endpoint:"http://api.tushare.pro",timeout:30}),Q=t("disconnected"),I=t({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),N=t({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),F=t(!1),J=t(null),Z=t(null),le=t("pending"),ee=t("..."),L=t(!1),s=t({api_limit:600}),b=t(!1),l=t(!1);async function g(){try{const ae=await(await fetch("/api/system/rate-limit")).json();ae.success&&(s.value=ae.data)}catch(re){console.warn("loadRateLimit failed:",re)}}async function X(){l.value=!0;try{const ae=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.value)})).json();ae.success?(b.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(ae.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{l.value=!1}}e(()=>[f.value.provider,f.value.apiKey,f.value.endpoint,f.value.model],()=>{d.value=!0},{deep:!0});async function P(){v.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(f.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f.value)})).json()).success?(d.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(re){localStorage.setItem("quant_ai_config",JSON.stringify(f.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",re)}finally{v.value=!1}}async function p(){D.value=!0;try{const ae=await(await fetch("/api/ai/test")).json();ae.success?ElementPlus.ElMessage.success(ae.message||"API连接正常"):ElementPlus.ElMessage.error(ae.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{D.value=!1}}function c(){const re={ai:f.value,feishu:h.value,theme:r.value,export_time:new Date().toISOString()},ae=new Blob([JSON.stringify(re,null,2)],{type:"application/json"}),ge=URL.createObjectURL(ae),Oe=document.createElement("a");Oe.href=ge,Oe.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Oe.click(),URL.revokeObjectURL(ge),ElementPlus.ElMessage.success("配置已导出")}function _(re){const ae=re.target.files[0];if(!ae)return;const ge=new FileReader;ge.onload=async Oe=>{try{const Ae=JSON.parse(Oe.target.result);Ae.ai&&(f.value={...f.value,...Ae.ai},await P()),Ae.feishu&&(Object.assign(h.value,Ae.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Ae.feishu)})),Ae.theme&&(r.value=Ae.theme,w(Ae.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},ge.readAsText(ae),re.target.value=""}async function u(){v.value=!0;const re=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:U.value,feishu:h.value,ai:f.value,rate_limit:s.value,auto_evaluate:o.value,theme:r.value}})}).then(Ae=>["userConfig",Ae.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(U.value)}).then(Ae=>["tushare",Ae.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:I.value})}).then(Ae=>["datasource",Ae.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h.value)}).then(Ae=>["feishu",Ae.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f.value)}).then(Ae=>["ai",Ae.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.value)}).then(Ae=>["rateLimit",Ae.ok]),R().then(()=>["aiModels",!0],()=>["aiModels",!1])],ae=await Promise.allSettled(re),ge=ae.filter(Ae=>Ae.status==="fulfilled"&&Ae.value[1]).length,Oe=ae.filter(Ae=>Ae.status==="rejected"||Ae.status==="fulfilled"&&!Ae.value[1]).length;b.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(k.value.selected)),localStorage.setItem("quant_strategy_filter_mode",k.value.mode),S.value&&fetch(`/api/users/${S.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:r.value})}).catch(()=>{}),i.value=!1,m.value=new Date().toLocaleString("zh-CN"),v.value=!1,Oe>0&&console.error(`[saveAllConfig] ${ge}/${ge+Oe} 项保存成功，${Oe} 项失败`)}async function z(){try{const ae=await(await fetch("/api/user_config/config")).json();if(ae.success&&ae.config){const ge=ae.config;ge.tushare&&(U.value={...U.value,...ge.tushare}),ge.feishu&&(h.value={...h.value,...ge.feishu}),ge.ai&&(f.value={...f.value,...ge.ai}),ge.rate_limit&&(s.value={...s.value,...ge.rate_limit}),ge.auto_evaluate&&(o.value={...o.value,...ge.auto_evaluate}),ge.theme&&!localStorage.getItem("quant_theme")&&E(ge.theme)}i.value=!1,b.value=!1}catch(re){console.error("[resetAllConfig] 重新加载配置失败:",re),i.value=!1}}async function ie(){Q.value="testing";try{const ae=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(Q.value=ae.success?"connected":"disconnected",ae.success){const ge=ae.data_count?` (获取到 ${ae.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+ge)}else ElementPlus.ElMessage.error(ae.message||"连接失败")}catch{Q.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function G(){try{const ae=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();Q.value=ae.success?"connected":"disconnected"}catch{Q.value="disconnected"}}async function M(){var re;F.value=!0;try{const ge=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ge.success?(J.value=parseInt(((re=ge.message.match(/\d+/))==null?void 0:re[0])||"0"),ElementPlus.ElMessage.success(ge.message)):ElementPlus.ElMessage.error(ge.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{F.value=!1}}async function W(){try{const ae=await(await fetch("/api/market/tushare/config")).json();ae.success&&ae.config&&(U.value={...U.value,...ae.config})}catch(re){console.warn("loadTushareConfig failed:",re)}}function ne(re){if(!re)return"";const ae=String(re),ge=ae.length;if(ge<=4)return ae[0]+"*".repeat(ge-1);const Oe=ge<=8?2:4;return ae.slice(0,Oe)+"*".repeat(ge-Oe-Oe)+ae.slice(-Oe)}async function ve(re){let ae;try{ae=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Oe=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:ae,target:re})})).json();if(Oe.success)return Oe.secret;ElementPlus.ElMessage.error(Oe.message||"查看失败")}catch(ge){ElementPlus.ElMessage.error("查看失败: "+ge.message)}return null}async function Me(re){const ae=I.value[re];if(!ae)return;if(ae._revealed){ae._revealed=!1,ae._masked=ne(ae.token);return}const ge=await ve(re);ge!==null&&(ae.token=ge,ae._revealed=!0)}async function $(re){const ae=I.value[re];if(ae){if(ae._editing){ae._editing=!1,ae._revealed=!1,ae.token&&(ae._masked=ne(ae.token));return}ae._editing=!0;try{const ge=await ve(re);if(ge===null){ae._editing=!1;return}ae.token=ge,ae._revealed=!0}catch(ge){ae._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+ge.message)}}}async function ce(){try{const ae=await(await fetch("/api/market/datasource/config")).json();if(ae.success&&ae.config&&ae.config.sources){const ge=ae.config.sources,Oe=Ae=>{const Be={...I.value[Ae],...ge[Ae]||{}};return Be._editing=!1,Be._revealed=!1,Be._masked=Be.token||"",Be.token="",Be};I.value={sxsc_tushare:Oe("sxsc_tushare"),tushare:Oe("tushare"),akshare:{...I.value.akshare,...ge.akshare||{}}}}try{const Oe=await(await fetch("/api/market/datasource/status")).json();if(Oe.success&&Oe.status)for(const[Ae,Be]of Object.entries(Oe.status))N.value[Ae]=Be.connected?"connected":"disconnected"}catch{}}catch(re){console.warn("loadDatasourceConfig failed:",re)}}async function Re(){try{const re={};for(const[ae,ge]of Object.entries(I.value)){const{_revealed:Oe,_masked:Ae,_editing:Be,...St}=ge;!Be&&ae!=="akshare"&&(St.token=""),re[ae]=St}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:re})}),i.value=!0}catch(re){console.warn("saveDatasourceConfig failed:",re)}}async function se(re){N.value[re]="testing";try{const ae=I.value[re];ae&&ae._editing&&await Re();const Oe=await(await fetch(`/api/market/datasource/test/${re}`,{method:"POST"})).json();N.value[re]=Oe.success?"connected":"disconnected",Oe.success?ElementPlus.ElMessage.success(`${re} 连接成功`):ElementPlus.ElMessage.error(`${re}: ${Oe.message}`)}catch{N.value[re]="disconnected",ElementPlus.ElMessage.error(`${re} 连接失败`)}}async function fe(){try{const ae=await(await fetch("/api/feishu/config")).json();ae&&typeof ae=="object"&&(h.value={...h.value,...ae},O.value=JSON.parse(JSON.stringify(h.value)))}catch(re){console.warn("loadFeishuConfig failed:",re)}}async function Te(){try{const ae=await(await fetch("/api/ai/config")).json();if(ae.success&&ae.data)f.value={...f.value,...ae.data};else{const ge=localStorage.getItem("quant_ai_config");ge&&(f.value=JSON.parse(ge))}}catch{const ae=localStorage.getItem("quant_ai_config");ae&&(f.value=JSON.parse(ae))}}async function me(){try{const ae=await(await fetch("/api/user_config/config")).json();if(ae.success&&ae.config){const ge=ae.config;ge.tushare&&(U.value={...U.value,...ge.tushare}),ge.datasource&&ge.datasource.sources&&(I.value={sxsc_tushare:{...I.value.sxsc_tushare,...ge.datasource.sources.sxsc_tushare||{}},tushare:{...I.value.tushare,...ge.datasource.sources.tushare||{}},akshare:{...I.value.akshare,...ge.datasource.sources.akshare||{}}}),ge.feishu&&(h.value={...h.value,...ge.feishu},O.value=JSON.parse(JSON.stringify(h.value))),ge.ai&&(f.value={...f.value,...ge.ai}),ge.rate_limit&&(s.value={...s.value,...ge.rate_limit}),ge.theme&&!localStorage.getItem("quant_theme")&&E(ge.theme),ge.auto_evaluate&&(o.value={...o.value,...ge.auto_evaluate})}}catch(re){console.warn("加载用户配置失败，使用本地缓存",re)}}async function we(){var re,ae,ge,Oe;try{const Be=await(await fetch("/api/dashboard")).json(),St=Be.success?Be.data:Be;J.value=((re=St==null?void 0:St.stats)==null?void 0:re.total_stocks_covered)||null;const xt=await(await fetch("/api/dates")).json();Z.value=((ae=xt==null?void 0:xt.data)==null?void 0:ae.total)||((Oe=(ge=xt==null?void 0:xt.data)==null?void 0:ge.dates)==null?void 0:Oe.length)||null;const ke=await(await fetch("/api/ai/history")).json();le.value="ok"}catch{le.value="pending"}}async function qe(){try{const ae=await(await fetch("/api/dashboard")).json();C.value=ae.success?ae.data:ae,q.value=Date.now()}catch(re){console.error("加载总览数据失败",re)}}return{configSaving:v,configChanged:d,globalConfigDirty:i,lastSavedTime:m,feishuConfigOriginal:O,aiConfigOriginal:K,tushareConfigOriginal:B,tushareConfig:U,tushareStatus:Q,datasourceConfig:I,datasourceStatus:N,syncingData:F,stockCount:J,tradeDateCount:Z,aiStatus:le,appVersion:ee,showImportDialog:L,rateLimitConfig:s,rateLimitDirty:b,rateLimitSaving:l,loadRateLimit:g,saveRateLimit:X,saveAiConfig:P,testAiApi:p,exportConfig:c,importConfig:_,saveAllConfig:u,resetAllConfig:z,testTushareConnection:ie,checkTushareConnection:G,syncStockData:M,loadTushareConfig:W,loadDatasourceConfig:ce,saveDatasourceConfig:Re,testDatasource:se,toggleDatasourceKeyReveal:Me,toggleDatasourceEdit:$,loadFeishuConfig:fe,loadAiConfig:Te,loadUserConfig:me,loadSystemStatus:we,loadDashboardData:qe}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:t,computed:y}=Vue,{currentUser:e,applyTheme:d,allMenuDefs:f,loadGroupConfig:D}=a,h=function(me){const we=window.__quantModules&&window.__quantModules.themes;return we&&we.applyLegacyTheme?we.applyLegacyTheme(me):d(me)},r=t([]),w=t(""),o=t(""),S=t("users"),k=t({}),T=t({}),C=y(()=>{let me=r.value;if(o.value&&(me=me.filter(qe=>(qe.group||qe.role)===o.value)),!w.value)return me;const we=w.value.toLowerCase();return me.filter(qe=>qe.username.toLowerCase().includes(we))});function q(me){k.value={...k.value,[me]:!k.value[me]}}async function R(me,we){try{const re=await(await fetch("/api/groups/"+we+"/members/"+me,{method:"DELETE"})).json();re.success?(await $(),await ve()):ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function E(me){const we=T.value[me];if(we)try{const re=await(await fetch("/api/groups/"+me+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:we})})).json();re.success?(await $(),await ve(),T.value={...T.value,[me]:""}):ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function v(me,we){try{const re=await(await fetch("/api/users/"+me.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:we})})).json();re.success?await $():ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const i=t(!1),m=t(null),O=t({username:"",password:"",role:"user",theme:"tech-blue"}),K=t(!1),B=t(null),U=t(!1),Q=t(!1),I=t({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),N=t({}),F=t(!1),J=t({group_id:"",name:"",description:""}),Z=t(!1),le=t([]),ee=t(""),L=t(""),s=t({});function b(me){s.value={...s.value,[me]:!s.value[me]}}function l(me){return!r.value||!r.value.length?0:r.value.filter(we=>(we.group||we.role)===me).length}function g(me){const we=(me==null?void 0:me.visible_menus)||{};return Object.values(we).filter(Boolean).length}const X=y(()=>Object.keys(ne.value).length);async function P(me){L.value=me,Q.value=!0,await p(me)}async function p(me){try{const qe=await(await fetch("/api/groups/"+me+"/members")).json();qe.success&&(le.value=qe.members||[])}catch(we){le.value=[],console.error("[loadGroupMembers]",we)}}async function c(){if(!(!ee.value||!L.value)){Z.value=!0;try{const we=await(await fetch("/api/groups/"+L.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:ee.value})})).json();we.success?(await p(L.value),await $(),ee.value=""):ElementPlus.ElMessage.error(we.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{Z.value=!1}}}async function _(me){try{const qe=await(await fetch("/api/groups/"+L.value+"/members/"+me,{method:"DELETE"})).json();qe.success?(await p(L.value),await $()):ElementPlus.ElMessage.error(qe.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const u=y(()=>{if(!r.value)return[];const me=new Set(le.value.map(we=>we.username));return r.value.filter(we=>we.username!=="admin"&&we.username!=="guest"&&!me.has(we.username))});function z(me){const we=I.value.visible_menus[me],qe=f.find(re=>re.key===me);if(qe)if(we){const re=N.value[me]||{};qe.subPages.forEach(ae=>{const ge=me+"."+ae;I.value.visible_sub_pages[ge]=re[ae]!==void 0?re[ae]:!0})}else{const re={};qe.subPages.forEach(ae=>{const ge=me+"."+ae;re[ae]=I.value.visible_sub_pages[ge],I.value.visible_sub_pages[ge]=!1}),N.value[me]=re}}function ie(me){B.value=me;const we=ne.value[me]||{};I.value={name:we.name||me,description:we.description||"",visible_menus:{...we.visible_menus||{}},visible_sub_pages:{...we.visible_sub_pages||{}}},N.value={},f.forEach(qe=>{const re={};qe.subPages.forEach(ae=>{re[ae]=I.value.visible_sub_pages[qe.key+"."+ae]}),N.value[qe.key]=re}),U.value=!0}async function G(){Z.value=!0;try{const we=await(await fetch("/api/groups/"+B.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(I.value)})).json();we.success?(U.value=!1,B.value=null,await ve(),await D()):ElementPlus.ElMessage.error(we.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{Z.value=!1}}async function M(me){var we;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((we=ne.value[me])==null?void 0:we.name)||me)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const ae=await(await fetch("/api/groups/"+me,{method:"DELETE"})).json();ae.success?await ve():ElementPlus.ElMessage.error(ae.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function W(){if(J.value.group_id){Z.value=!0;try{const we=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(J.value)})).json();we.success?(F.value=!1,J.value={group_id:"",name:"",description:""},await ve()):ElementPlus.ElMessage.error(we.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{Z.value=!1}}}const ne=t({});async function ve(){try{if(!localStorage.getItem("quant_token"))return;const we=await fetch("/api/groups");if(we.ok){const qe=await we.json();ne.value=qe.groups||{}}}catch(me){console.warn("loadAllGroups:",me)}}function Me(me){var we;return((we=ne.value[me])==null?void 0:we.name)||me||"--"}async function $(){try{if(!localStorage.getItem("quant_token")){r.value=[];return}const we=await fetch("/api/users");if(we.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),e.value=null;return}const qe=await we.json();r.value=qe.users||[]}catch(me){r.value=[],console.error("[loadUsers] error:",me)}}function ce(me){m.value=me,O.value={username:me.username,password:"",role:me.role,theme:me.theme||"tech-blue",group:me.group||me.role},i.value=!0}async function Re(){if(O.value.username){K.value=!0;try{const me=m.value?"PUT":"POST",we=m.value?`/api/users/${O.value.username}`:"/api/users",re=await(await fetch(we,{method:me,headers:{"Content-Type":"application/json"},body:JSON.stringify(O.value)})).json();if(re.success){if(ElementPlus.ElMessage.success("保存成功"),e.value&&O.value.username===e.value.username){const ae=O.value.theme;ae&&ae!==e.value.theme&&(e.value.theme=ae,localStorage.setItem("quant_user",JSON.stringify(e.value)),h(ae))}i.value=!1,m.value=null,await $()}else ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{K.value=!1}}}async function se(me){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${me}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await $())}catch(we){console.error("[deleteUser]",we)}}async function fe(me){try{const qe=await(await fetch(`/api/users/${me.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:me.enabled})})).json();qe.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(qe.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function Te(me){try{const{value:we}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${me.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(we){const re=await(await fetch(`/api/users/${me.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:we})})).json();re.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(re.message||"重置失败")}}catch{}}return{userList:r,userSearch:w,groupFilter:o,userPageTab:S,expandedGroups:k,addMemberGroupMap:T,filteredUsers:C,toggleGroupExpand:q,removeMemberFromGroupInline:R,addMemberToGroupInline:E,changeUserGroup:v,showAddUser:i,editingUser:m,userForm:O,savingUser:K,editingGroup:B,menuConfigDialog:U,memberDialog:Q,groupEditForm:I,subPageCache:N,showAddGroup:F,addGroupForm:J,savingGroup:Z,groupMembers:le,addMemberUsername:ee,selectedMemberGroup:L,subPageSectionExpanded:s,toggleSubPageSection:b,getGroupMemberCount:l,getMenuEnabledCount:g,groupCount:X,openMemberManager:P,loadGroupMembers:p,addMemberToGroup:c,removeMemberFromGroup:_,availableUsersForGroup:u,onParentToggle:z,openMenuConfig:ie,saveMenuConfig:G,deleteGroupConfig:M,createGroup:W,allGroups:ne,getGroupName:Me,loadAllGroups:ve,loadUsers:$,editUser:ce,saveUser:Re,deleteUser:se,toggleUserEnabled:fe,resetUserPassword:Te}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:t,computed:y}=Vue,{stockKlineLoaded:e,stockDetailVisible:d,stockDetailTab:f,stockDetail:D,disposeStockKline:h}=a,r=t([]),w=t(!1),o=t(!1),S=t("date"),k=t([]),T=t([]),C=t([]),q=t([]),R=y(()=>{var c,_;const p=[];for(const u of r.value){if(!u||u.id==null)continue;const z=u.stock_name||u.stock_code||"",ie=Array.isArray(u.messages)?u.messages:[];p.push({id:u.id,stock_code:u.stock_code,stock_name:z,first_msg:u.first_msg||((_=(c=ie[0])==null?void 0:c.content)==null?void 0:_.substring(0,50))||"",msg_count:u.msg_count||ie.length||0,created_at:u.created_at,date:(u.created_at||"").substring(0,10),month:(u.created_at||"").substring(0,7),messages:ie})}return p}),E=y(()=>{const p={};for(const _ of R.value){const u=_.date||"未知";p[u]||(p[u]=[]),p[u].push(_)}const c={};return Object.keys(p).sort((_,u)=>u.localeCompare(_)).forEach(_=>c[_]=p[_]),c}),v=y(()=>{const p={};for(const _ of R.value){const u=_.month||"未知";p[u]||(p[u]=[]),p[u].push(_)}const c={};return Object.keys(p).sort((_,u)=>u.localeCompare(_)).forEach(_=>c[_]=p[_]),c}),i=y(()=>{const p={};for(const c of R.value){const _=`${c.stock_name}(${c.stock_code})`;p[_]||(p[_]=[]),p[_].push(c)}return p});function m(p){const c=k.value.indexOf(p);c>=0?k.value.splice(c,1):k.value.push(p)}function O(p){const c=E.value[p]||[];if(c.every(u=>k.value.includes(u.id)))k.value=k.value.filter(u=>!c.some(z=>z.id===u));else for(const u of c)k.value.includes(u.id)||k.value.push(u.id)}function K(p){const c=v.value[p]||[];if(c.every(u=>k.value.includes(u.id)))k.value=k.value.filter(u=>!c.some(z=>z.id===u));else for(const u of c)k.value.includes(u.id)||k.value.push(u.id)}function B(p){const c=i.value[p]||[];if(c.every(u=>k.value.includes(u.id)))k.value=k.value.filter(u=>!c.some(z=>z.id===u));else for(const u of c)k.value.includes(u.id)||k.value.push(u.id)}function U(p){const c=T.value.indexOf(p);c>=0?T.value.splice(c,1):T.value.push(p)}function Q(p){const c=C.value.indexOf(p);c>=0?C.value.splice(c,1):C.value.push(p)}function I(p){const c=q.value.indexOf(p);c>=0?q.value.splice(c,1):q.value.push(p)}function N(){k.value.length===R.value.length?k.value=[]:k.value=R.value.map(p=>p.id)}async function F(){if(k.value.length){try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${k.value.length} 段对话吗？此操作不可恢复。`,"删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}for(const p of[...k.value])await X(p);k.value=[]}}const J={};async function Z(p){D.value={stock:p.stock_code,name:p.stock_name},d.value=!0,f.value="chat",e.value=!1,h(),L.value=!0,s.value="",ee.value=[];try{let c=J[p.id];if(!c){const _=await fetch("/api/ai/chat/history/"+p.id);if(!_.ok)throw new Error("load history failed");c=(await _.json()).messages||[],J[p.id]=c}ee.value=c.map(_=>({role:_.role,content:_.content}))}catch{s.value="历史消息加载失败，请重试"}finally{L.value=!1}}const le=t(""),ee=t([]),L=t(!1),s=t("");async function b(){var _;const p=le.value.trim();if(!p||L.value)return;s.value="",ee.value.push({role:"user",content:p}),le.value="",L.value=!0;const c=ee.value.length;ee.value.push({role:"assistant",content:""});try{const ie=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((_=D.value)==null?void 0:_.stock)||"",message:p})})).body.getReader(),G=new TextDecoder;let M="";for(;;){const{done:W,value:ne}=await ie.read();if(W)break;M+=G.decode(ne,{stream:!0});const ve=M.split(`
`);M=ve.pop()||"";for(const Me of ve)if(Me.startsWith("data: "))try{const $=JSON.parse(Me.slice(6));$.token?ee.value[c].content+=$.token:$.done?console.log("Stream done:",$.session_id):$.error&&(s.value=$.error)}catch($){console.warn("SSE parse error:",$)}}}catch(u){ee.value[c].content||(ee.value[c].content="网络错误: "+u.message)}L.value=!1}async function l(p){var _;s.value="",L.value=!0;const c={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};ee.value.push({role:"user",content:c[p]||c.comprehensive});try{const z=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((_=D.value)==null?void 0:_.stock)||"",mode:p})});if(z.ok){const ie=await z.json();ee.value.push({role:"assistant",content:ie.reply||"无回复"})}}catch(u){s.value="网络错误: "+u.message}L.value=!1}async function g(){w.value=!0,o.value=!1;try{const p=await fetch("/api/ai/chat/history?view=date");if(p.ok){const c=await p.json(),_=[];for(const u of c)for(const z of u.items||[])_.push(z);r.value=_}else o.value=!0}catch(p){console.error(p),o.value=!0}finally{w.value=!1}}async function X(p){try{await fetch("/api/ai/chat/history/"+p,{method:"DELETE"}),r.value=r.value.filter(c=>c.id!==p)}catch(c){console.error("deleteChatSession:",c)}}function P(p){if(!p)return"";const c=String(p).split(`
`),_=[],u=[];let z=0;for(;z<c.length;){if(/^\s*\|.*\|\s*$/.test(c[z])){let G=z;const M=[];for(;G<c.length&&/^\s*\|.*\|\s*$/.test(c[G]);)M.push(c[G]),G++;const W=Me=>Me.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map($=>$.trim()),ne=M.map(W);if(ne.length>1&&ne[1].every(Me=>/^:?-{3,}:?$/.test(Me))){const Me=Math.max(...ne.map(se=>se.length)),$=ne[0].slice(0,Me),ce=ne.slice(2);let Re="<table>";ce.length?(Re+="<thead><tr>"+$.map(se=>"<th>"+se+"</th>").join("")+"</tr></thead>",Re+="<tbody>"+ce.map(se=>"<tr>"+se.slice(0,Me).map(fe=>"<td>"+fe+"</td>").join("")+"</tr>").join("")+"</tbody>"):Re+="<tbody><tr>"+$.map(se=>"<td>"+se+"</td>").join("")+"</tr></tbody>",Re+="</table>",_.push(Re),u.push("\0T"+(_.length-1)+"\0"),z=G;continue}for(;z<G;)u.push(c[z]),z++;continue}u.push(c[z]),z++}let ie=u.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return _.forEach((G,M)=>{ie=ie.split("\0T"+M+"\0").join(G)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(ie=window.__quantModules.core.sanitizeHtml(ie)),ie}return{chatSessions:r,chatHistoryView:S,selectedChatIds:k,expandedChatDates:T,expandedChatMonths:C,expandedChatStocks:q,chatHistoryLoading:w,chatHistoryError:o,allChatSessionsFlat:R,chatGroupedByDate:E,chatGroupedByMonth:v,chatGroupedByStock:i,toggleSelectChat:m,toggleSelectChatDate:O,toggleSelectChatMonth:K,toggleSelectChatStock:B,toggleChatDateExpand:U,toggleChatMonthExpand:Q,toggleChatStockExpand:I,selectAllChatSessions:N,deleteSelectedChatSessions:F,viewChatSession:Z,loadChatHistory:g,deleteChatSession:X,renderMarkdown:P,stockChatInput:le,stockChatMessages:ee,stockChatLoading:L,stockChatError:s,askStockSend:b,askStockQuick:l}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:t,computed:y,watch:e}=Vue,{consensus:d,currentPage:f,currentSubPage:D,dashboardData:h,searchKeyword:r,statusFilter:w,strategyFilter:o,strategyFilterCounts:S}=a;function k(Q){const I=o.value.selected;if(!I||I.length===0)return Q;const N=o.value.mode;return Q.filter(F=>{const J=F.strategy_names||F.strategies||[];return N==="union"?I.some(Z=>J.includes(Z)):I.every(Z=>J.includes(Z))})}const T=y(()=>{const Q=k(d.value||[]);return{all:Q.length,newCount:Q.filter(I=>I.status==="new").length,current:Q.filter(I=>I.status==="current").length,out:Q.filter(I=>I.status==="out").length}}),C=y(()=>{let Q=d.value||[];if(w.value!=="all"&&(Q=Q.filter(I=>I.status===w.value)),Q=k(Q),r.value){const I=r.value.toLowerCase();Q=Q.filter(N=>N.code.toLowerCase().includes(I)||N.name&&N.name.toLowerCase().includes(I))}return Q}),q=y(()=>{const Q=d.value||[],I={},N={};for(const F of Q)F.code&&F.name&&(N[F.code]=F.name);for(const F of Q){const J=F.strategy_names||F.strategies||[];for(const Z of J)I[Z]||(I[Z]={strategy:Z,count:0,codes:[],names:[]}),I[Z].count++,I[Z].codes.includes(F.code)||(I[Z].codes.push(F.code),I[Z].names.push({code:F.code,name:N[F.code]||F.code}))}return Object.values(I).sort((F,J)=>J.count-F.count)}),R=y(()=>{const Q=o.value.selected,I=o.value.mode,N={};for(const[F,J]of Object.entries(S.value)){const Z=J||[];!Q||Q.length===0?N[F]=Z.length:I==="union"?N[F]=Z.filter(le=>le.strategies&&Q.some(ee=>le.strategies.includes(ee))).length:N[F]=Z.filter(le=>le.strategies&&Q.every(ee=>le.strategies.includes(ee))).length}return N});function E(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(o.value.selected)),localStorage.setItem("quant_strategy_filter_mode",o.value.mode)}const v=y(()=>{const Q=(h.value||{}).consensus_rank||[];return k(Q)}),i=y(()=>{const Q=d.value||S.value.day||[];return k(Q).length}),m=y(()=>{const Q=(h.value||{}).strategy_counts||[],I=d.value||S.value.day||[];if(I.length===0)return Q;const N=k(I),F={};N.forEach(Z=>{(Z.strategy_names||Z.strategies||[]).forEach(ee=>{F[ee]=(F[ee]||0)+1})});const J=N.length||1;return Q.map(Z=>{const le=Z.strategy_name||Z.strategy_id,ee=F[le]||0;return{...Z,count:ee,percentage:Math.round(ee/J*1e3)/10}})}),O=y(()=>{const Q=(h.value||{}).pool_changes||{},I=(Q.new_count||0)-(Q.out_count||0);return I>0?{dir:"up",text:"↑"+I}:I<0?{dir:"down",text:"↓"+Math.abs(I)}:{dir:"flat",text:"→0"}}),K=y(()=>{const Q=(h.value||{}).time_coverage||{},I=new Date(Q.start_date),N=new Date(Q.end_date),F=new Date;if(!I.getTime()||!N.getTime()||F>=N)return 100;if(F<=I)return 0;const J=N-I,Z=F-I;return Math.round(Z/J*100)}),B=t(null);function U(Q){o.value.selected=[Q],o.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([Q])),localStorage.setItem("quant_strategy_filter_mode","union"),f.value="calendar",D.value="calendar"}return{applyStrategyFilter:k,statusCounts:T,stockPool:C,strategyDistribution:q,strategyPreviewCount:R,saveStrategyFilter:E,filteredConsensusRank:v,currentPoolSize:i,filteredStrategyCounts:m,poolChangeBadge:O,timeBarPercent:K,lastRefreshTime:B,navigateToStrategyFilter:U}}}})();(function(){window.__quantModules||(window.__quantModules={});const a={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},t={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function y(d){return a[d]||"var(--text-tertiary)"}function e(d){return t[d]||"var(--bg-hover)"}window.__quantModules.watchlist={create(d){const{ref:f,computed:D,watch:h}=Vue,{currentUser:r,selectedDate:w,stockDetail:o,stockDetailTab:S,stockDetailVisible:k,stockDetailLoading:T,stockKlineLoaded:C,viewCache:q,animateScoreEntrance:R,loadStockKline:E,refreshStockScore:v,disposeStockKline:i,aiHistory:m,aiLoading:O,aiEvalStage:K,aiEvalElapsed:B,aiEvalError:U,aiResult:Q,loadLastEvaluation:I,autoEvaluateConfig:N,autoEvaluateScope:F,batchStocks:J,batchRunning:Z,batchTotal:le,batchCompleted:ee,batchCurrent:L,batchStatuses:s,batchResults:b,batchEvalErrors:l,expandedDates:g,expandedStocks:X,savingConfig:P,selectedHistoryIds:p,selectedWatchlistCodes:c,showAutoEvaluateSettings:_,showBatchEvaluate:u}=d,z=n=>(getComputedStyle(document.documentElement).getPropertyValue(n)||"").trim(),ie=f(""),G=f("default"),M=f("default"),W=f([]),ne=D(()=>new Set(W.value.map(n=>n.code))),ve=f(!1),Me=f(!1),$=D(()=>{const n=[...W.value];return M.value==="name"?n.sort((V,oe)=>V.name.localeCompare(oe.name,"zh")):M.value==="added"?n.sort((V,oe)=>(oe.added_at||"").localeCompare(V.added_at||"")):M.value==="score"&&n.sort((V,oe)=>{const Ce=Re(V.code);return Re(oe.code)-Ce}),n});function ce(n){const V=m.value.filter(Ce=>Ce.stock_code===n);if(V.length===0)return null;const oe=V.reduce((Ce,Ee)=>Ce.evaluate_time>Ee.evaluate_time?Ce:Ee);return{score:oe.result.total_score,color:y(oe.result.level),bg:e(oe.result.level)}}function Re(n){const V=ce(n);return V?V.score:0}function se(n){$t(n.code,n.name),qe.value=qe.value.filter(V=>V.code!==n.code),we.value=""}const fe=D(()=>new Set(m.value.map(n=>n.stock_code))),Te=f(new Set);function me(n){Te.value.add(n)}const we=f(""),qe=f([]),re=f(!1),ae=f({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),ge=f(!1),Oe=f(!1),Ae=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};Ae.REALTIME_WS_PATH;const Be=Ae.REALTIME_DEGRADED_TEXT||"数据不可达",St=Ae.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";Ae.WARN_RISE_SPEED_THRESHOLD!=null&&Ae.WARN_RISE_SPEED_THRESHOLD,Ae.WARN_VOLUME_RATIO_THRESHOLD!=null&&Ae.WARN_VOLUME_RATIO_THRESHOLD;const Pt=Ae.quoteFmt||{price:n=>n==null?"--":Number(n).toFixed(2),pct:n=>n==null?"--":Number(n).toFixed(2)+"%",num:n=>n==null?"--":Number(n).toFixed(2),color:n=>""},xt=3,_e=5e3,ke=f({}),Ie=f(!1),De=f("idle");let Je=null,Qe=null,$e=0;function Ct(n){return Ae.checkQuoteWarning?Ae.checkQuoteWarning(n):null}function bt(n){return Ct(ke.value[n])}function vt(n){return Pt.color(ke.value[n])}function Dt(n){return Pt.price(ke.value[n]&&ke.value[n].price)}function ta(n){return Pt.pct(ke.value[n]&&ke.value[n].change_pct)}function A(n,V){return Pt.num(ke.value[n]&&ke.value[n][V])}function te(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function Se(){if(!Je||Je.readyState!==1)return;const n=(W.value||[]).map(V=>V.code);n.length!==0&&Je.send(JSON.stringify({subscribe:n}))}function Le(){if(Qe&&(clearTimeout(Qe),Qe=null),Je){try{Je.onopen=null,Je.onmessage=null,Je.onerror=null,Je.onclose=null,Je.close()}catch{}Je=null}ke.value={},Ie.value=!1,De.value="idle"}function He(){const n=te();if(!n||!Ae.buildRealtimeWsUrl||De.value==="open"||De.value==="connecting")return;let V;try{V=Ae.buildRealtimeWsUrl()+"?token="+encodeURIComponent(n)}catch{De.value="offline",Ie.value=!0;return}De.value="connecting";let oe=null;try{oe=new WebSocket(V)}catch{De.value="offline",Ie.value=!0;return}Je=oe,oe.onopen=function(){De.value="open",$e=0,Se()},oe.onmessage=function(Ce){let Ee=null;try{Ee=JSON.parse(Ce.data||"{}")}catch{return}if(!Ee||Ee.type!=="quotes")return;if(Ie.value=!!Ee.degraded,Ee.degraded||!Array.isArray(Ee.data)){ke.value={};return}const ut={};Ee.data.forEach(function(Ue){Ue&&Ue.code&&(ut[Ue.code]=Ue)}),ke.value=ut},oe.onerror=function(){De.value="offline",Ie.value=!0},oe.onclose=function(){De.value="offline",$e<xt?($e++,Qe=setTimeout(function(){De.value!=="open"&&He()},_e*$e)):Ie.value=!0}}h(W,function(){De.value==="open"&&Se()}),te()&&setTimeout(He,500);async function wt(){if(!o.value)return;O.value=!0,Q.value=null,U.value="",K.value="fetching",B.value=0;const n=Date.now(),V=setInterval(()=>{O.value&&(B.value=Math.round((Date.now()-n)/1e3))},500);try{const oe=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:o.value.stock,stock_name:o.value.name||o.value.stock,strategy:G.value})});K.value="calculating";const Ce=await oe.json();K.value="analyzing",Ce.success?(await nextTick(),Q.value=Ce.data,S.value="ai",Y()):(U.value=Ce.message||"评估失败",ElementPlus.ElMessage.error(U.value))}catch(oe){U.value=oe&&oe.message&&!String(oe.message).includes("Failed to fetch")?oe.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(U.value)}finally{clearInterval(V),O.value=!1,B.value=0,U.value?K.value="":(K.value="done",setTimeout(()=>{K.value==="done"&&(K.value="")},800))}}const Ye=50,Ke=f(0),dt=f(!1),it=D(()=>m.value.length<Ke.value);async function Y(){ve.value=!0,Me.value=!1;try{if(!localStorage.getItem("quant_token")){m.value=[];return}const V=await fetch(`/api/ai/history?limit=${Ye}&offset=0`);if(V.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),r.value=null;return}const oe=await V.json();oe.success?(m.value=oe.data||[],Ke.value=oe.total!=null?oe.total:m.value.length):Me.value=!0}catch(n){console.error("[loadAiHistory] error:",n),Me.value=!0}finally{ve.value=!1}}async function ye(){if(!(dt.value||!it.value)){dt.value=!0;try{const V=await(await fetch(`/api/ai/history?limit=${Ye}&offset=${m.value.length}`)).json();if(V.success&&Array.isArray(V.data)){const oe=new Set(m.value.map(Ee=>Ee.id)),Ce=V.data.filter(Ee=>!oe.has(Ee.id));m.value=m.value.concat(Ce),V.total!=null&&(Ke.value=V.total)}}catch(n){console.warn("[loadMoreAiHistory] error:",n)}finally{dt.value=!1}}}async function Xe(n){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const oe=await(await fetch(`/api/ai/history/${n}`,{method:"DELETE"})).json();if(oe.success){ElementPlus.ElMessage.success("删除成功"),Y();const Ce=p.value.indexOf(n);Ce>=0&&p.value.splice(Ce,1)}else ElementPlus.ElMessage.error(oe.message||"删除失败")}catch{}}function mt(n){const V=p.value.indexOf(n);V>=0?p.value.splice(V,1):p.value.push(n)}function at(){p.value=[]}function Nt(){c.value=[]}async function We(){const n=p.value;if(n.length===0)return;const V=m.value.filter(oe=>n.includes(oe.id)).map(oe=>oe.stock_code);u.value=!0,J.value=[...new Set(V)].join(",")}async function qt(){const n=p.value;if(n.length===0)return;const V=m.value.filter(Ee=>n.includes(Ee.id)),oe=[...new Map(V.map(Ee=>[Ee.stock_code,Ee])).values()];let Ce=0;for(const Ee of oe)ne.value.has(Ee.stock_code)||(await $t(Ee.stock_code,Ee.stock_name||Ee.stock_code),Ce++);Ce>0?ElementPlus.ElMessage.success(`已加入 ${Ce} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function Ht(){const n=p.value;if(n.length===0)return;const V=m.value.filter(Ce=>n.includes(Ce.id)),oe=[...new Map(V.map(Ce=>[Ce.stock_code,Ce])).values()];try{const Ee=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:oe.map(ut=>({stock_code:ut.stock_code,stock_name:ut.stock_name||""}))})})).json();Ee&&Ee.success?ElementPlus.ElMessage.success(`已登记 ${Ee.count||oe.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(Ee&&Ee.detail||"批量加入组合失败")}catch(Ce){console.warn("batchAddToPortfolio failed:",Ce),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function zt(){if(c.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${c.value.length} 只股票？`,"提示",{type:"warning"});for(const n of c.value)await Yt(n);c.value=[],ElementPlus.ElMessage.success("已移除")}catch(n){n&&n.message!=="cancel"&&console.warn("batchRemoveWatchlist:",n)}}function rt(n){const V=c.value.indexOf(n);V>=0?c.value.splice(V,1):c.value.push(n)}function Et(){p.value.length===m.value.length?p.value=[]:p.value=m.value.map(n=>n.id)}function Bt(){c.value.length===W.value.length?c.value=[]:c.value=W.value.map(n=>n.code)}async function Gt(){if(p.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${p.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const V=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:p.value})})).json();V.success?(ElementPlus.ElMessage.success(V.message),p.value=[],Y()):ElementPlus.ElMessage.error(V.message||"删除失败")}catch{}}async function gt(){try{const V=await(await fetch("/api/ai/auto-config")).json();V.success&&(N.value=V.data,V.data.evaluate_scope&&(F.value=V.data.evaluate_scope))}catch(n){console.warn("loadAutoEvaluateConfig failed:",n)}}async function ct(){P.value=!0;try{N.value.evaluate_scope=F.value;const V=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N.value)})).json();V.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),_.value=!1):ElementPlus.ElMessage.error(V.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{P.value=!1}}const Wt=f(!1);async function Mt(){Wt.value=!0;try{const V=await(await fetch("/api/watchlist")).json();V.success&&(W.value=V.stocks||[])}catch(n){console.warn("loadWatchlist failed:",n)}finally{Wt.value=!1}}async function $t(n,V){try{const Ce=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n,name:V})})).json();if(Ce.success)return Ce.existed||W.value.push({code:n,name:V,added_at:new Date().toISOString()}),!0}catch(oe){console.warn("addToWatchlist failed:",oe)}return!1}async function Yt(n){try{await fetch(`/api/watchlist/${encodeURIComponent(n)}`,{method:"DELETE"}),W.value=W.value.filter(V=>V.code!==n)}catch(V){console.warn("removeFromWatchlist failed:",V)}}async function aa(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"}),await fetch("/api/watchlist",{method:"DELETE"}),W.value=[],ElementPlus.ElMessage.success("自选已清空")}catch(n){console.warn("clearWatchlist failed:",n)}}async function pt(n,V){ne.value.has(n)?(await Yt(n),ElementPlus.ElMessage.info("已移除自选")):await $t(n,V)&&ElementPlus.ElMessage.success("已加入自选")}async function sa(n,V){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(n,V||"");const oe=new Date().toISOString().split("T")[0],Ce=w.value||oe;S.value="kline",Q.value=null,U.value="",i("stockKlineChart"),o.value=null,T.value=!0,C.value=!1,k.value=!0,nextTick(()=>R());try{const Ee=await fetch(`/api/calendar/stock/${encodeURIComponent(n)}?date=${Ce}`);o.value=await Ee.json()}catch{o.value={stock:n,name:V,total_days:0}}finally{T.value=!1}await nextTick(),await E("daily"),v(),I(n)}const la=f(!1);async function ma(){var n;if(W.value.length!==0){la.value=!0;try{const oe=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();oe.success&&oe.loaded>0?(((n=oe.details)==null?void 0:n.loaded)||[]).forEach(Ce=>Te.value.add(Ce.code)):oe.loaded===0&&oe.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(V){console.error("预加载K线失败:",V)}finally{la.value=!1}}}async function ha(n,V){O.value=!0,Q.value=null,U.value="",K.value="fetching",C.value=!1,i();const oe=new Date().toISOString().split("T")[0],Ce=w.value||oe;try{const Ee=await fetch(`/api/calendar/stock/${encodeURIComponent(n)}?date=${Ce}`);o.value=await Ee.json()}catch{o.value={stock:n,name:V,total_days:0}}S.value="ai",k.value=!0,await nextTick();try{const ut=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:n,stock_name:V})})).json();ut.success?(Q.value=ut.data,Y()):(U.value=ut.message||"评估失败",ElementPlus.ElMessage.error(U.value))}catch{U.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(U.value)}finally{O.value=!1,K.value=""}}async function oa(){W.value.length!==0&&(u.value=!0,J.value=W.value.map(n=>n.code).join(","))}async function H(){c.value.length!==0&&(u.value=!0,J.value=c.value.join(","))}async function xe(){if(!we.value.trim()){qe.value=[];return}re.value=!0;try{const V=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(we.value)}`)).json();qe.value=(V.results||[]).filter(oe=>!ne.value.has(oe.code))}catch(n){console.warn("searchStockForWatchlist failed:",n)}finally{re.value=!1}}async function je(){try{const V=await(await fetch("/api/data-refresh/config")).json();ae.value=V}catch(n){console.error("加载数据刷新配置失败:",n)}}async function Pe(){Oe.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ae.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{Oe.value=!1}}async function ot(){var n;ge.value=!0;try{const oe=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();oe.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((n=oe.parser_stats)==null?void 0:n.dates_count)||0}交易日`),q.clear(),await je()):ElementPlus.ElMessage.error(oe.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{ge.value=!1}}const Ze=f(!1);async function Rt(){Ze.value=!0;try{const V=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(V.success){const oe=V.result||{},Ce=V.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${oe.pulled||0}/${oe.total||0}, 财务 ${Ce.pulled||0}/${Ce.total||0}`),q.clear(),await je()}else ElementPlus.ElMessage.error(V.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{Ze.value=!1}}const Ot=D(()=>{const n={};for(const V of m.value){const oe=(V.evaluate_time||"").split("T")[0];n[oe]||(n[oe]=[]),n[oe].push(V)}for(const V in n)n[V].sort((oe,Ce)=>Ce.evaluate_time.localeCompare(oe.evaluate_time));return n}),Kt=D(()=>{const n={};for(const V of m.value){const oe=V.stock_code;n[oe]||(n[oe]=[]),n[oe].push(V)}for(const V in n)n[V].sort((oe,Ce)=>Ce.evaluate_time.localeCompare(oe.evaluate_time));return n}),pa=D(()=>{const n={};for(const V of m.value){const oe=(V.evaluate_time||"").split("T")[0].slice(0,7);n[oe]||(n[oe]=[]),n[oe].push(V)}for(const V in n)n[V].sort((oe,Ce)=>Ce.evaluate_time.localeCompare(oe.evaluate_time));return n}),ya=D(()=>Object.keys(Kt.value).length),ba=D(()=>{const n=m.value.length;return n===0?[]:[{label:"90+",min:90,max:100,color:"var(--success-text)"},{label:"80-89",min:80,max:89,color:"var(--success-text)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--success-text) 55%, var(--bg-card))"},{label:"60-69",min:60,max:69,color:"var(--warning-text)"},{label:"<60",min:0,max:59,color:"var(--danger-text)"}].map(oe=>{const Ce=m.value.filter(Ee=>Ee.result.total_score>=oe.min&&Ee.result.total_score<=oe.max).length;return{...oe,count:Ce,pct:Math.round(Ce/n*100)}})});async function na(){if(!ie.value)return;const n=W.value.find(V=>V.code===ie.value);if(n){O.value=!0,Q.value=null,U.value="",K.value="fetching";try{o.value={stock:n.code,name:n.name,total_days:0},k.value=!0,S.value="ai",await nextTick();const oe=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:n.code,stock_name:n.name,strategy:G.value})})).json();oe.success?(Q.value=oe.data,Y(),ie.value=""):(U.value=oe.message||"评估失败",ElementPlus.ElMessage.error(U.value))}catch{U.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(U.value)}finally{O.value=!1,K.value=""}}}function Ra(n){const V=g.value.indexOf(n);V>=0?g.value.splice(V,1):g.value.push(n)}function ra(n){const oe=(Ot.value[n]||[]).map(Ee=>Ee.id);oe.every(Ee=>p.value.includes(Ee))?p.value=p.value.filter(Ee=>!oe.includes(Ee)):oe.forEach(Ee=>{p.value.includes(Ee)||p.value.push(Ee)})}function za(n){const oe=(pa.value[n]||[]).map(Ee=>Ee.id);oe.every(Ee=>p.value.includes(Ee))?p.value=p.value.filter(Ee=>!oe.includes(Ee)):oe.forEach(Ee=>{p.value.includes(Ee)||p.value.push(Ee)})}function ca(n){const V=X.value.indexOf(n);V>=0?X.value.splice(V,1):X.value.push(n)}function qa(n){const oe=(Kt.value[n]||[]).map(Ee=>Ee.id);oe.every(Ee=>p.value.includes(Ee))?p.value=p.value.filter(Ee=>!oe.includes(Ee)):oe.forEach(Ee=>{p.value.includes(Ee)||p.value.push(Ee)})}const jt={},wa={};function Ea(n,V,oe){if(!n||(oe&&(wa[V]={el:n,records:oe}),jt[V]===n))return;const Ce=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Ee=()=>{Object.keys(jt).forEach(et=>{if(jt[et]&&jt[et]!==n){try{jt[et].dispose()}catch{}delete jt[et]}});const ut=[...oe].sort((et,Vt)=>et.evaluate_time.localeCompare(Vt.evaluate_time)),Ue=ut.map(et=>(et.evaluate_time||"").split("T")[0]),kt=ut.map(et=>{var Vt;return((Vt=et.result)==null?void 0:Vt.total_score)??null}),Jt=ut.map(et=>{var Vt;return((Vt=et.result)==null?void 0:Vt.level)??""}),Tt={primary:z("--qc-primary-600")||"#b8922a",textPrimary:z("--text-primary")||"#1f2937",textSecondary:z("--text-secondary")||"#6b7280",border:z("--chart-axis")||"#b9b2a6",axis:z("--chart-axis")||"#b9b2a6",split:z("--chart-split")||"#e7e1d6",up:z("--qc-market-up")||"#e63946",down:z("--qc-market-down")||"#2e7d32"},Qt=[];for(let et=1;et<kt.length;et++)kt[et]!=null&&kt[et-1]!=null&&Math.abs(kt[et]-kt[et-1])>=15&&Qt.push({name:"大幅变化",coord:[Ue[et],kt[et]],value:(kt[et]-kt[et-1]>0?"↑":"↓")+Math.abs(kt[et]-kt[et-1]),symbol:"pin",symbolSize:32,itemStyle:{color:kt[et]-kt[et-1]>0?Tt.up:Tt.down}});const Xt=echarts.init(n),_t=window.__quantModules&&window.__quantModules.echartsTheme;_t&&typeof _t.getEChartsTheme=="function"&&Xt.setOption(_t.getEChartsTheme()),Xt.setOption({tooltip:{trigger:"axis",backgroundColor:z("--bg-card")||"#ffffff",borderColor:Tt.border,textStyle:{color:Tt.textPrimary},formatter:function(et){var ht;const Vt=(ht=et[0])==null?void 0:ht.dataIndex,fa=Vt!=null?Jt[Vt]:"";return Ue[Vt]+"<br/>得分: "+kt[Vt]+(fa?" ("+fa+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:Ue,axisLabel:{fontSize:10,rotate:30,color:Tt.textSecondary},axisLine:{lineStyle:{color:Tt.axis}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:Tt.textSecondary},splitLine:{lineStyle:{color:Tt.split}}},series:[{data:kt,type:"line",smooth:!0,lineStyle:{color:Tt.primary,width:2},itemStyle:{color:Tt.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:z("--primary-rgb")?"rgba("+z("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:z("--primary-rgb")?"rgba("+z("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:Qt.length>0?{data:Qt}:void 0}]}),jt[V]=Xt};Ce?Ce().then(Ee).catch(()=>{}):Ee()}function Aa(){Object.keys(wa).forEach(n=>{const V=wa[n];if(!(!V||!V.el)){if(jt[n]){try{jt[n].dispose()}catch{}delete jt[n]}Ea(V.el,n,V.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(Aa));async function ka(n){Q.value=n,C.value=!1,i();try{const V=await fetch(`/api/calendar/stock/${n.stock_code}?date=${w.value}`);o.value=await V.json()}catch{o.value={stock:n.stock_code,name:n.stock_name||n.stock_code,total_days:0,history:[]}}k.value=!0,S.value="ai"}async function x(){if(!J.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const n=J.value.split(/[,，\s]+/).filter(Ue=>Ue.trim());if(n.length===0)return;Z.value=!0,le.value=n.length,ee.value=0,L.value="",s.value={},b.value={},l.value={},n.forEach(Ue=>{s.value[Ue]="pending",b.value[Ue]=null});const V={"Content-Type":"application/json"};let oe=0,Ce=0,Ee=!1;try{const Ue=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:V,body:JSON.stringify({stock_codes:n})});if(Ue.ok&&Ue.body){Ee=!0;const kt=Ue.body.getReader(),Jt=new TextDecoder("utf-8");let Tt="",Qt=!1;for(;!Qt;){const{value:Xt,done:_t}=await kt.read();Qt=_t,Tt+=Jt.decode(Xt||new Uint8Array,{stream:!Qt});let et;for(;(et=Tt.indexOf(`

`))>=0;){const Vt=Tt.slice(0,et);Tt=Tt.slice(et+2);const fa=Vt.split(`
`).find(Na=>Na.startsWith("data: "));if(!fa)continue;let ht;try{ht=JSON.parse(fa.slice(6))}catch{continue}ht.type==="start"?ht.total&&(le.value=ht.total):ht.type==="item"?(ee.value++,L.value=ht.stock_code,ht.success?(s.value[ht.stock_code]="success",b.value[ht.stock_code]=ht,oe++):(s.value[ht.stock_code]="error",l.value[ht.stock_code]=ht.error||"评估失败",Ce++)):ht.type==="done"&&(typeof ht.success=="number"&&(oe=ht.success),typeof ht.fail=="number"&&(Ce=ht.fail))}}if(Tt.trim()){const Xt=Tt.split(`
`).find(_t=>_t.startsWith("data: "));if(Xt)try{const _t=JSON.parse(Xt.slice(6));_t.type==="item"?(ee.value++,L.value=_t.stock_code,_t.success?(s.value[_t.stock_code]="success",b.value[_t.stock_code]=_t,oe++):(s.value[_t.stock_code]="error",l.value[_t.stock_code]=_t.error||"评估失败",Ce++)):_t.type==="done"&&(typeof _t.success=="number"&&(oe=_t.success),typeof _t.fail=="number"&&(Ce=_t.fail))}catch{}}}}catch{Ee=!1}if(!Ee){oe=0,Ce=0,ee.value=0;for(const Ue of n){L.value=Ue,s.value[Ue]="running";try{const Jt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:V,body:JSON.stringify({stock_code:Ue.trim(),stock_name:Ue.trim()})})).json();Jt.success?(s.value[Ue]="success",b.value[Ue]=Jt.data,oe++):(s.value[Ue]="error",l.value[Ue]=Jt.message&&Jt.message!=="success"?Jt.message:"评估失败",Ce++)}catch(kt){s.value[Ue]="error",l.value[Ue]="网络错误: "+(kt&&kt.message?kt.message:kt),Ce++}ee.value++}}L.value="",await Y();const ut=n.length;setTimeout(()=>{Ce===0?ElementPlus.ElMessage.success(`评估完成 成功 ${oe}/${ut}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${oe}/${ut} · 失败 ${Ce}`),Z.value=!1},500)}return{quickEvalStock:ie,evalStrategy:G,watchlistSort:M,watchlist:W,watchlistCodes:ne,sortedWatchlist:$,getWatchlistScore:ce,getLatestScore:Re,addSearchResult:se,evaluatedCodes:fe,klineLoadedCodes:Te,markKlineLoaded:me,watchlistSearch:we,watchlistResults:qe,watchlistSearching:re,dataRefreshConfig:ae,dataRefreshReloading:ge,dataRefreshSaving:Oe,aiHistoryLoading:ve,aiHistoryError:Me,aiHistoryTotal:Ke,aiHistoryLoadingMore:dt,hasMoreAiHistory:it,loadMoreAiHistory:ye,watchlistLoading:Wt,doAiEvaluate:wt,loadAiHistory:Y,deleteSingleHistory:Xe,toggleSelectHistory:mt,clearSelection:at,clearWatchlistSelection:Nt,batchReevaluateHistory:We,batchAddToWatchlist:qt,batchAddToPortfolio:Ht,batchRemoveWatchlist:zt,toggleSelectWatchlist:rt,selectAllHistory:Et,selectAllWatchlist:Bt,deleteSelectedHistory:Gt,loadAutoEvaluateConfig:gt,saveAutoEvaluateConfig:ct,loadWatchlist:Mt,addToWatchlist:$t,removeFromWatchlist:Yt,clearWatchlist:aa,toggleWatchlist:pt,showStockKline:sa,preloadingKline:la,preloadWatchlistKline:ma,watchlistEvaluate:ha,batchEvaluateWatchlist:oa,batchEvaluateSelected:H,searchStockForWatchlist:xe,loadDataRefreshConfig:je,saveDataRefreshConfig:Pe,triggerDataReload:ot,triggerDataPull:Rt,dataPullRunning:Ze,groupedByDate:Ot,aiHistoryByStock:Kt,groupedByMonth:pa,aiHistoryStockCount:ya,scoreDistribution:ba,quickEvaluate:na,toggleDateExpand:Ra,toggleSelectDate:ra,toggleSelectMonth:za,toggleStockExpand:ca,toggleSelectStock:qa,registerTrendChart:Ea,viewAiResult:ka,doBatchEvaluate:x,realtimeQuotes:ke,realtimeDegraded:Ie,realtimeWsState:De,connectRealtimeQuotes:He,disconnectRealtimeQuotes:Le,quoteWarningFor:bt,realtimeQuoteColor:vt,realtimePriceText:Dt,realtimePctText:ta,realtimeRatioText:A,REALTIME_DEGRADED_TEXT:Be,REALTIME_FALLBACK_TEXT:St}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:t,computed:y}=Vue,e=t([]),d=t(null),f=t([]),D=t(!1),h=t(!1),r=t(!1),w=t({stock_code:"",stock_name:"",cost_price:null,quantity:null}),o=t(!1),S=t(!1),k=t({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),T=t(!1),C=t("positions"),q=t(30),R=t(!1),E=t(""),v=t(!1),i=t({dates:[],equity:[],values:[]}),m=y(()=>e.value.length),O=t("metrics"),K=t(!1),B=t(""),U=t(!1),Q=t({metrics:null,rules:[],rebalance:null}),I=y(function(){const u=Q.value.metrics;if(!u)return[];const z=function(G){return G==null?"--":Number(G).toFixed(2)+"%"},ie=function(G){return G==null?"--":Number(G).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:z(u.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:z(u.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:z(u.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:z(u.cvar)},{key:"max_drawdown",label:"最大回撤",value:z(u.max_drawdown)},{key:"annual_return",label:"年化收益",value:z(u.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:ie(u.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:ie(u.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:ie(u.calmar_ratio)},{key:"beta",label:"Beta",value:ie(u.beta)}]});async function N(){K.value=!0;try{const u=await(await fetch("/api/portfolio/risk?days=60")).json(),z=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),ie=u&&u.success?u.risk:null,G=z&&z.success?z.rules||[]:[],M=z&&z.success?z.rebalance:null;Q.value={metrics:ie,rules:G,rebalance:M},U.value=!!(ie&&Object.keys(ie).length>0),B.value=u&&u.note||z&&z.note||""}catch(u){console.warn("[portfolio] 加载风险数据失败:",u),U.value=!1,B.value="风险数据加载失败"}finally{K.value=!1}}async function F(){D.value=!0,h.value=!1;try{const z=await(await fetch("/api/portfolio")).json();z.success?(e.value=z.positions||[],d.value=z.summary||null):h.value=!0}catch(u){console.warn("[portfolio] 加载持仓失败:",u),h.value=!0}finally{D.value=!1}}async function J(){const u=w.value,z=(u.stock_code||"").trim();if(!z){ElementPlus.ElMessage.warning("请输入股票代码");return}const ie=Number(u.cost_price),G=Number(u.quantity);if(!(ie>0)||!(G>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}o.value=!0;try{const W=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:z,stock_name:(u.stock_name||"").trim(),cost_price:ie,quantity:G})})).json();W.success?(ElementPlus.ElMessage.success(W.message||"持仓已更新"),r.value=!1,w.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await F(),P(q.value)):ElementPlus.ElMessage.error(W.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{o.value=!1}}async function Z(u){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+u+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const ie=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(u),{method:"DELETE"})).json();ie.success?(ElementPlus.ElMessage.success("已删除持仓"),await F(),L(),P(q.value)):ElementPlus.ElMessage.error(ie.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function le(u,z){k.value={stock_code:u,stock_name:z||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},S.value=!0}async function ee(){const u=k.value;if(!u.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const z=Number(u.price),ie=Number(u.quantity);if(!(z>0)||!(ie>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}T.value=!0;try{const M=await(await fetch("/api/portfolio/trades",{method:"POST",headers:_authHeaders(),body:JSON.stringify({stock_code:u.stock_code,stock_name:u.stock_name||"",action:u.action,price:z,quantity:ie,trade_date:u.trade_date||"",note:(u.note||"").trim()})})).json();M.success?(ElementPlus.ElMessage.success(M.message||"调仓已记录"),S.value=!1,await F(),await L(),P(q.value)):ElementPlus.ElMessage.error(M.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{T.value=!1}}async function L(){try{const z=await(await fetch("/api/portfolio/trades")).json();z.success&&(f.value=z.trades||[])}catch(u){console.warn("[portfolio] 加载调仓记录失败:",u)}}const s=u=>(getComputedStyle(document.documentElement).getPropertyValue(u)||"").trim();function b(u){if(!u||!u.length)return[];let z=u[0]||0;const ie=[];for(let G=0;G<u.length;G++){const M=u[G]||0;M>z&&(z=M),ie.push(z>0?Math.round((M-z)/z*1e3)/10:0)}return ie}function l(){const u={primary:s("--qc-primary-600")||"#b8922a",textPrimary:s("--text-primary")||"#1f2937",textSecondary:s("--text-secondary")||"#6b7280",border:s("--border-light")||"#e5e7eb",up:s("--color-rise")||"#E63946",down:s("--color-fall")||"#2E7D32"},z=i.value;return{tooltip:{trigger:"axis",backgroundColor:s("--bg-card")||"#ffffff",borderColor:u.border,textStyle:{color:u.textPrimary},formatter:function(ie){const G=ie[0]?ie[0].dataIndex:-1,M=z.dates[G]||"",W=z.equity[G],ne=z.values[G];let ve=M||"";return W!=null&&(ve+="<br/>组合净值: "+W),ne!=null&&(ve+="<br/>组合市值: "+ne),ve}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:z.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:u.textSecondary},axisLine:{lineStyle:{color:u.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:u.textSecondary},splitLine:{lineStyle:{color:u.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:u.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:z.equity,smooth:!0,showSymbol:!1,lineStyle:{color:u.primary,width:2},itemStyle:{color:u.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:s("--primary-rgb")?"rgba("+s("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:s("--primary-rgb")?"rgba("+s("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:b(z.equity),smooth:!0,showSymbol:!1,lineStyle:{color:u.down,width:1.5},itemStyle:{color:u.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function g(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function X(u,z,ie){i.value={dates:u||[],equity:z||[],values:ie||[]},v.value=!!u&&u.length>0,v.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",l,{key:"portfolio-equity"}):g()}async function P(u){R.value=!0,E.value="";const z=Number(u)||q.value||30;q.value=z;try{const G=await(await fetch("/api/portfolio/equity_curve?days="+z)).json();G.success?(E.value=G.note||"",X(G.dates||[],G.equity||[],G.values||[])):(E.value="数据暂不可用",g())}catch(ie){console.warn("[portfolio] 加载收益曲线失败:",ie),E.value="数据暂不可用",g()}finally{R.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function p(u,z){if(u==null||u===""||isNaN(Number(u)))return"--";const ie=Number(u),G=z??2;return(ie>=0?"+":"")+ie.toFixed(G)}function c(u,z){if(u==null||u===""||isNaN(Number(u)))return"--";const ie=Number(u),G=z??2;return(ie>=0?"+":"")+ie.toFixed(G)+"%"}function _(u){if(u==null||u===""||isNaN(Number(u)))return"";const z=Number(u);return z>0?"portfolio-up":z<0?"portfolio-down":""}return{positions:e,summary:d,trades:f,loading:D,loadError:h,showAddForm:r,addForm:w,addSaving:o,tradeFormVisible:S,tradeForm:k,tradeSaving:T,portfolioTab:C,equityDays:q,equityLoading:R,equityNote:E,equityHasData:v,portfolioCount:m,loadPortfolio:F,addPosition:J,removePosition:Z,openTradeForm:le,submitTrade:ee,loadTrades:L,loadEquity:P,fmtSigned:p,fmtSignedPct:c,signClass:_,riskTab:O,riskLoading:K,riskNote:B,riskHasData:U,riskData:Q,riskMetricList:I,loadRisk:N}}}})();(function(a,t){typeof Ne=="object"&&Ne.exports?Ne.exports=t():a.QuantBacktest=t()})(typeof self<"u"?self:void 0,function(){function a(r,w){var o=Number(r);return isFinite(o)?o:typeof w=="number"?w:0}function t(r){var w=Array.isArray(r)?r:[];if(w.length<2)return null;for(var o=-1/0,S=0,k=0,T=0,C=0,q=0;q<w.length;q++){var R=a(w[q].equity!=null?w[q].equity:w[q].value);R>o&&(o=R,S=q);var E=o>0?(o-R)/o*100:0;E>k&&(k=E,T=S,C=q)}function v(i){return w[i]&&w[i].date?w[i].date:""}return{maxDrawdown:Math.round(k*100)/100,peakIndex:T,troughIndex:C,peakDate:v(T),troughDate:v(C)}}function y(r){for(var w=r||{},o={},S=Object.keys(w).sort(),k=0;k<S.length;k++){var T=S[k],C=String(T).slice(0,4);/^\d{4}$/.test(C)&&(o[C]=(o[C]||0)+a(w[T]))}var q=Object.keys(o).sort();return q.map(function(R){return{year:R,return:Math.round(o[R]*100)/100}})}function e(r){var w=Array.isArray(r)?r:[],o={};w.forEach(function(T){(T.points||[]).forEach(function(C){C&&C.date&&(o[C.date]=1)})});var S=Object.keys(o).sort(),k=w.map(function(T){var C={};return(T.points||[]).forEach(function(q){q&&q.date&&(C[q.date]=a(q.value!=null?q.value:q.equity))}),{name:T.name||"",data:S.map(function(q){return q in C?C[q]:null})}});return{dates:S,series:k}}function d(r){var w=r||{},o=function(k){return a(k)},S=function(k,T){var C=o(k);return isFinite(C)?C.toFixed(T):"--"};return[{key:"total_return",label:"总收益",value:S(w.total_return,2),suffix:"%",dir:o(w.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:S(w.annual_return,2),suffix:"%",dir:o(w.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:S(w.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:S(w.sharpe_ratio,2),suffix:"",dir:o(w.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:S(w.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:S(w.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(o(w.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:S(w.volatility,2),suffix:"%",dir:""}]}function f(r){var w=r==null?"":String(r);return/[",\n]/.test(w)?'"'+w.replace(/"/g,'""')+'"':w}function D(r){var w=r||{},o=[];o.push("回测指标"),o.push("指标,数值"),(w.metrics||[]).forEach(function(v){o.push(f(v.label)+","+f((v.value||"")+(v.suffix||"")))}),o.push(""),o.push("净值曲线");var S=["日期"].concat((w.series||[]).map(function(v){return v.name}));o.push(S.map(f).join(","));for(var k=w.dates||[],T=w.series||[],C=0;C<k.length;C++){for(var q=[k[C]],R=0;R<T.length;R++){var E=T[R].data&&T[R].data[C];q.push(E??"")}o.push(q.map(f).join(","))}return o.push(""),o.push("交易明细"),o.push("日期,股票代码,方向,原因"),(w.trades||[]).forEach(function(v){o.push(f(v.date)+","+f(v.stock)+","+f(v.action)+","+f(v.reason))}),o.join(`
`)}function h(r){return r==="buy"?"买入":r==="sell"?"卖出":r||""}return{toNum:a,computeMaxDrawdownRegion:t,buildAnnualReturns:y,buildNavSeries:e,buildMetrics:d,buildBacktestCsv:D,tradeActionText:h}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:t,computed:y}=Vue,e=window.QuantBacktest||{},d=a||{},f=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],h=(Array.isArray(d.backtestStrategies)&&d.backtestStrategies.length?d.backtestStrategies:f).map(s=>({id:s.id,name:s.name})),r=t(h.length?[h[0].id]:[]),w=t(R()),o=t(1e5),S=t(3e-4),k=t(!1),T=t(!1),C=t(null),q=t("");function R(){const s=new Date,b=new Date;b.setFullYear(b.getFullYear()-1);const l=g=>g.getFullYear()+"-"+String(g.getMonth()+1).padStart(2,"0")+"-"+String(g.getDate()).padStart(2,"0");return[l(b),l(s)]}function E(s){const b=r.value.indexOf(s);b>=0?r.value.length>1&&r.value.splice(b,1):r.value.push(s)}function v(s){const b=h.find(l=>l.id===s);return b?b.name:s}function i(s){const b=s.summary||s;return{strategy_id:b.strategy_id,start_date:b.start_date,end_date:b.end_date,total_days:b.total_days,total_return:b.total_return,annual_return:b.annual_return,max_drawdown:b.max_drawdown,volatility:b.volatility,sharpe_ratio:b.sharpe_ratio,sortino_ratio:b.sortino_ratio,win_rate:b.win_rate,profit_loss_ratio:b.profit_loss_ratio,avg_positions:b.avg_positions!=null?b.avg_positions:b.avg_positions_per_day,total_trades:b.total_trades,turnover_rate:b.turnover_rate,success:b.success!==!1,message:b.message||"",insample_total_return:b.insample_total_return!=null?b.insample_total_return:null,outsample_total_return:b.outsample_total_return!=null?b.outsample_total_return:null,out_sample_ratio:b.out_sample_ratio!=null?b.out_sample_ratio:.2,overfit_warning:!!b.overfit_warning,overfit_reason:b.overfit_reason||""}}function m(s){return(Array.isArray(s)?s:[]).map(b=>({date:b.date,value:b.equity!=null?b.equity:b.value}))}function O(s,b){const l=i(b),g=m(b.equity_curve),X=b.monthly_returns||{},P=Array.isArray(b.trade_history)?b.trade_history:[],p={id:s,name:v(s),summary:l,equityCurve:g,monthlyReturns:X,trades:P};let c=null;if(k.value){const _=Number(o.value)||1e5;c={name:"现金基准",points:g.map(u=>({date:u.date,value:_}))}}return{success:!0,mode:"single",strategies:[p],primary:p,benchmark:c,period:(l.start_date||"")+" ~ "+(l.end_date||"")}}function K(s,b){const l=b.strategy_results||{},g=s.map(p=>{const c=l[p];if(!c)return null;const _=i(c);return{id:p,name:v(p),summary:_,equityCurve:m(c.equity_curve),monthlyReturns:c.monthly_returns||{},trades:Array.isArray(c.trade_history)?c.trade_history:[]}}).filter(p=>p&&p.summary.success!==!1),X=g.length?g[0]:null;let P=null;return k.value&&(P={name:"等权组合基准",points:m(b.portfolio_equity)}),{success:g.length>0,mode:"multi",strategies:g,primary:X,benchmark:P,period:X?X.summary.start_date+" ~ "+X.summary.end_date:""}}const B=y(()=>{const s=C.value;return!s||!s.primary?[]:e.buildMetrics?e.buildMetrics(s.primary.summary):[]}),U=y(()=>{const s=C.value;return!s||!s.primary||!s.primary.monthlyReturns?[]:e.buildAnnualReturns?e.buildAnnualReturns(s.primary.monthlyReturns):[]}),Q=y(()=>{const s=C.value;return!s||!s.primary?[]:(s.primary.trades||[]).slice().sort((b,l)=>String(l.date||"").localeCompare(String(b.date||"")))}),I=y(()=>{const s=C.value;return!s||!s.strategies||s.strategies.length<2?[]:s.strategies.map(b=>({name:b.name,metrics:e.buildMetrics?e.buildMetrics(b.summary):[]}))}),N=y(()=>{const s=C.value;return!s||!s.primary?null:e.computeMaxDrawdownRegion?e.computeMaxDrawdownRegion(s.primary.equityCurve):null});async function F(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const b=r.value;if(!b.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const l=w.value,g={start_date:l&&l[0]||void 0,end_date:l&&l[1]||void 0},X={"Content-Type":"application/json"};T.value=!0,C.value=null,q.value="";try{if(b.length===1){const P=Object.assign({},g,{initial_capital:Number(o.value)||1e5,commission_rate:Number(S.value)||3e-4}),p=await fetch("/api/backtest/"+encodeURIComponent(b[0]),{method:"POST",headers:X,body:JSON.stringify(P)});if(!p.ok){const _=await p.json().catch(()=>({}));throw new Error(_.detail||"回测失败")}const c=await p.json();if(!c.success)throw new Error(c.message||"回测失败");C.value=O(b[0],c)}else{const P=await fetch("/api/backtest/multi",{method:"POST",headers:X,body:JSON.stringify(Object.assign({},g,{strategy_ids:b}))});if(!P.ok){const c=await P.json().catch(()=>({}));throw new Error(c.detail||"回测失败")}const p=await P.json();if(!p.success)throw new Error(p.message||"多策略回测失败");if(C.value=K(b,p.data||{}),!C.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(P){q.value=P&&P.message?P.message:"回测失败",ElementPlus.ElMessage.error(q.value)}finally{T.value=!1}}function J(){const s=C.value,b={dates:[],series:[]};if(!s)return b;const l=s.strategies.map(X=>({name:X.name,points:X.equityCurve}));s.benchmark&&s.benchmark.points&&s.benchmark.points.length&&l.push({name:s.benchmark.name,points:s.benchmark.points});const g=e.buildNavSeries?e.buildNavSeries(l):b;return Z(g,s)}function Z(s,b){const l=z=>(getComputedStyle(document.documentElement).getPropertyValue(z)||"").trim(),g={primary:l("--qc-primary-600")||"#b8922a",success:l("--color-success")||"#4CAF50",accent:l("--color-accent")||"#F59E0B",info:l("--color-info")||"#1976d2",ai:l("--color-ai")||"#6366f1",textPrimary:l("--text-primary")||"#1f2937",textSecondary:l("--text-secondary")||"#6b7280",border:l("--border-light")||"#e5e7eb",up:l("--color-rise")||"#E63946",down:l("--color-fall")||"#2E7D32",bg:l("--bg-card")||"#ffffff"},X=[g.primary,g.success,g.accent,g.info,g.ai],p=g.bg.length===7&&parseInt(g.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",c=e.computeMaxDrawdownRegion?e.computeMaxDrawdownRegion(b.primary?b.primary.equityCurve:[]):null,_=c&&c.peakDate&&c.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:g.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+c.maxDrawdown+"%",xAxis:c.peakDate,itemStyle:{color:g.down}},{xAxis:c.troughDate}]]}:void 0,u=s.series.map((z,ie)=>{const G=b.benchmark&&z.name===b.benchmark.name,M=X[ie%X.length];return{name:z.name,type:"line",data:z.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:G?2:2.4,type:G?"dashed":"solid",color:M},itemStyle:{color:M},emphasis:{focus:"series"},...ie===0&&_?{markArea:_}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:p,borderColor:g.border,textStyle:{color:g.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:g.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:s.dates,boundaryGap:!1,axisLine:{lineStyle:{color:g.border}},axisLabel:{color:g.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:g.textSecondary,fontSize:11},splitLine:{lineStyle:{color:g.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:g.border,textStyle:{color:g.textSecondary,fontSize:10}}],series:u}}function le(s){if(!s){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",J,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function ee(){const s=C.value;if(!s||!s.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const b=s.strategies.map(u=>({name:u.name,points:u.equityCurve}));s.benchmark&&b.push({name:s.benchmark.name,points:s.benchmark.points});const l=e.buildNavSeries?e.buildNavSeries(b):{dates:[],series:[]},g=e.tradeActionText||(u=>u),X=Q.value.map(u=>({date:u.date,stock:u.stock,action:g(u.action),reason:u.reason})),P=e.buildBacktestCsv?e.buildBacktestCsv({metrics:B.value,dates:l.dates,series:l.series,trades:X}):"",p=new Blob(["\uFEFF"+P],{type:"text/csv;charset=utf-8"}),c=URL.createObjectURL(p),_=document.createElement("a");_.href=c,_.download="backtest-"+s.strategies.map(u=>u.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",_.click(),URL.revokeObjectURL(c),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function L(s,b){return s==null||s===""||isNaN(Number(s))?"--":Number(s).toFixed(b??2)}return{btStrategyOptions:h,btSelectedStrategies:r,toggleBtStrategy:E,btDateRange:w,btCapital:o,btCommissionRate:S,btIncludeBenchmark:k,btRunning:T,btResult:C,btError:q,btMetrics:B,btAnnualReturns:U,btTrades:Q,btStrategyMetricsRows:I,btDrawdownRegion:N,runBacktestWorkbench:F,exportBacktestCSV:ee,registerBacktestNavChart:le,btFmtNum:L}}}})();(function(){const{ref:a,computed:t,watch:y,onUnmounted:e}=Vue,d=o=>(getComputedStyle(document.documentElement).getPropertyValue(o)||"").trim(),f=72,D={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},h={stock:"股票",bond:"债券",commodity:"大宗商品",cash:"现金"},r={"🌱":"sprout","🔥":"flame","🌾":"wheat","❄️":"snowflake","📈":"trending-up","📉":"trending-down","📊":"bar-chart-3","💹":"line-chart","🏭":"factory","💰":"banknote","🛢":"fuel"},w={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const o=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"sprout",color:"var(--state-success-solid)",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),S=a({}),k=a(!1),T=a({}),C=a({cycles:[]}),q=a([]),R=a(0),E=a(!1),v=a({autoRefresh:!0,refreshInterval:300}),i=a(""),m=a(""),O=a(!1),K=a("");let B=null;const U={x:0,y:0},Q=t(()=>{const $=S.value;return["recession","recovery","overheat","stagflation"].map(Re=>{const se=$[Re]||{};return{key:Re,name:se.name||Re,icon:r[se.icon]||"bar-chart-3",color:se.color||d("--text-tertiary")||"#888",bg:"color-mix(in srgb, "+(se.color||"var(--text-tertiary)")+" 14%, var(--bg-card))",textColor:"color-mix(in srgb, "+(se.color||"var(--text-tertiary)")+" 48%, var(--qc-foreground))",tagline:se.allocation&&w[Re]||""}})}),I=t(()=>{var ce,Re,se,fe;const $=o.value.indicators||{};return[{key:"pmi",label:"PMI",value:(ce=$.pmi)==null?void 0:ce.toFixed(2),color:$.pmi>=50?d("--color-success")||"#43a047":d("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((Re=$.gdp_growth)==null?void 0:Re.toFixed(2))+"%",color:d("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((se=$.cpi)==null?void 0:se.toFixed(2))+"%",color:$.cpi>1.2?d("--color-danger")||"#E53935":d("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((fe=$.m2_growth)==null?void 0:fe.toFixed(2))+"%",color:d("--color-success")||"#43a047"}]}),N=$=>{$=$||{};const ce=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],Re=()=>d("--color-success")||"#43a047",se=()=>d("--color-danger")||"#E53935",fe=()=>d("--color-warning")||"#FF9800",Te={宽松:Re(),中位:fe(),偏低:se(),高增长:Re(),承压:se(),不利:se()};return ce.map(me=>{const we=$[me.key]||{},qe=we.score||0,re=Math.min(100,Math.max(5,(qe+2)*25)),ae=qe>=.3?"var(--state-success-solid)":qe>=-.3?"var(--state-warning-solid)":"var(--state-danger-solid)",ge=qe>=0?"var(--state-success-text)":"var(--state-danger-text)";return{key:me.key,label:me.label,scoreStr:qe.toFixed(2),level:we.level||"—",barWidth:re,barColor:ae,scoreColor:ge,color:Te[we.level]||"var(--text-tertiary)"}})},F=t(()=>N(o.value.dimension_scores)),J=t(()=>N(T.value._dimensions)),Z=t(()=>{var ce;const $=((ce=o.value.confidence)==null?void 0:ce.level)||"";return $==="高"?"var(--state-success-text)":$==="中"?"var(--state-warning-text)":$==="低"?"var(--state-danger-text)":"var(--text-secondary)"}),le=t(()=>{var se,fe,Te,me;const $=S.value,ce={recovery:0,overheat:1,stagflation:2,recession:3},Re={};for(const[we,qe]of Object.entries($))Re[we]={name:qe.name,icon:qe.icon,color:qe.color,lightColor:qe.bg_color,duration:"~"+(((se=qe.historical_stats)==null?void 0:se.avg_duration_months)||18)+"个月",order:ce[we]||0,period:((Te=(fe=qe.case_studies)==null?void 0:fe[0])==null?void 0:Te.split("：")[0])||"",avgMonths:((me=qe.historical_stats)==null?void 0:me.avg_duration_months)||18};return Re}),ee=t(()=>{var qe,re;const $=o.value.stage,Re={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[$]||{x:150,y:150},se=o.value.dimension_scores||{},fe=((qe=se.growth)==null?void 0:qe.score)||0,Te=((re=se.inflation)==null?void 0:re.score)||0,me=Math.max(-30,Math.min(30,fe*15)),we=Math.max(-30,Math.min(30,-Te*15));return{x:Re.x+me,y:Re.y+we,prevX:U.x,prevY:U.y}}),L=t(()=>{var se;const $=Math.min(100,((se=o.value.timing)==null?void 0:se.progress_percent)||0),ce=o.value.color||"var(--state-success-solid)",Re=$>100?"linear-gradient(90deg, "+ce+", var(--state-warning-solid))":ce;return{width:$+"%",background:Re}});function s(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[o.value.stage]||0}function b(){var $,ce;return((ce=($=o.value)==null?void 0:$.timing)==null?void 0:ce.progress_percent)||0}function l(){var $,ce;return((ce=($=o.value)==null?void 0:$.timing)==null?void 0:ce.duration_months)||0}function g(){var $,ce;return((ce=($=o.value)==null?void 0:$.timing)==null?void 0:ce.avg_duration_months)||18}function X($){var fe,Te;const ce=le.value,Re=((fe=ce[o.value.stage])==null?void 0:fe.order)||0;return(((Te=ce[$])==null?void 0:Te.order)||0)<Re}function P($){return D[$]||$}function p($){return h[$]||$}function c($){const ce=["var(--state-success-solid)","var(--state-warning-solid)","var(--state-info-solid)","var(--text-tertiary)"];return ce[$-1]||ce[3]}async function _(){try{const ce=await(await fetch("/api/market/merrill-clock/stages")).json();ce.success&&ce.data&&(S.value=ce.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function u(){E.value=!0;try{ie();const ce=await(await fetch("/api/market/merrill-clock/timeline")).json();if(ce.success&&ce.data){const Re=Array.isArray(ce.data.cycles)?ce.data.cycles.slice().reverse():[];C.value={cycles:Re}}}catch{console.warn("获取美林时钟时间轴失败")}finally{E.value=!1}}async function z($){await M($)}async function ie(){try{const ce=await(await fetch("/api/market/merrill-clock/snapshots?limit=30")).json();ce&&ce.success&&ce.data&&(q.value=ce.data.items||[],R.value=ce.data.total||0)}catch{console.warn("获取美林时钟评估轨迹失败")}}async function G(){var $,ce;try{const se=await(await fetch("/api/market/merrill-clock")).json(),fe=se.stage||"recovery",Te=S.value[fe]||{};if(o.value={...Te,...se,stage_cn:se.stage_cn||Te.stage_cn||"",stage_name:se.stage_name||Te.name||"",name:se.name||Te.name||"复苏期"},i.value=new Date().toLocaleTimeString("zh-CN"),K.value&&K.value!==fe){const me=S.value,we=(($=me[K.value])==null?void 0:$.name)||K.value,qe=((ce=me[fe])==null?void 0:ce.name)||fe;ElementPlus.ElMessage({message:"美林时钟阶段切换："+we+" → "+qe,type:"warning",duration:6e3,showClose:!0})}K.value=fe}catch(Re){console.error("获取美林时钟失败:",Re);const se=S.value.recovery||{};o.value={...se,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function M($){var Re;k.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",T.value=S.value[$]||S.value.recovery||{};const ce=((Re=o.value)==null?void 0:Re.stage)===$;T.value._isCurrent=ce,ce&&o.value&&(T.value._nextPrediction=o.value.next_stage_prediction,T.value._confidence=o.value.confidence,T.value._stage=o.value.stage,T.value._dimensions=o.value.dimension_scores);try{const fe=await(await fetch("/api/market/merrill-clock/stage/"+$)).json();if(fe.success&&fe.data){const Te={...S.value[$],...fe.data};Te._is_current!==void 0&&(Te._isCurrent=Te._is_current),Te._current_timing&&(Te._currentTiming=Te._current_timing),Te._last_period&&(Te._lastPeriod=Te._last_period),T.value._nextPrediction&&(Te._nextPrediction=T.value._nextPrediction),T.value._confidence&&(Te._confidence=T.value._confidence),T.value._stage&&(Te._stage=T.value._stage),T.value._dimensions&&(Te._dimensions=T.value._dimensions),Object.assign(T.value,Te)}}catch(se){console.warn("获取阶段详情失败:",se)}}function W(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:v.value.autoRefresh,refreshInterval:v.value.refreshInterval})),v.value.autoRefresh?(clearInterval(B),B=setInterval(G,v.value.refreshInterval*1e3)):clearInterval(B),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function ne(){O.value=!0,m.value="";try{const ce=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();ce.success?(m.value="重评估完成："+(ce.stage_name||ce.stage),await G(),ElementPlus.ElMessage.success("重评估完成")):(m.value=ce.message||"重评估失败",ElementPlus.ElMessage.error(ce.message||"重评估失败"))}catch{m.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{O.value=!1}}function ve(){const $=localStorage.getItem("merrill_clock_config");if($)try{const ce=JSON.parse($);v.value={...v.value,...ce}}catch{}v.value.autoRefresh&&(B=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),G()},v.value.refreshInterval*1e3))}function Me(){B&&clearInterval(B)}return e(()=>{Me()}),{merrillData:o,merrillStagesConfig:S,showMerrillDetail:k,merrillDetailData:T,merrillTimeline:C,merrillSnapshots:q,merrillSnapshotsTotal:R,fetchMerrillSnapshots:ie,timelineLoading:E,merrillClockConfig:v,merrillClockLastUpdated:i,merrillReevalResult:m,merrillReevalLoading:O,stages:Q,indicatorList:I,dimensionScoreList:F,detailDimensionScoreList:J,confidenceColor:Z,timelineStages:le,clockPosition:ee,merrillProgressStyle:L,FULL_CYCLE_MONTHS:f,getStageAngle:s,getCycleProgress:b,getCurrentStageMonths:l,getStageTotalMonths:g,isStageCompleted:X,getCharLabel:P,getAssetName:p,getRankColor:c,fetchMerrillStages:_,fetchMerrillClock:G,loadMerrillTimeline:u,showTimelineStage:z,showStageDetail:M,saveMerrillClockConfig:W,doMerrillReevaluate:ne,startAutoRefresh:ve,stopAutoRefresh:Me}}})();(function(){function a(h){return getComputedStyle(document.documentElement).getPropertyValue(h).trim()}var t=[210,28,165,290,348,190,52,250];function y(){var h=!1;try{h=document.documentElement.getAttribute("data-theme-mode")==="dark"}catch{}var r=h?62:58,w=h?62:40;return t.map(function(o){return"hsl("+o+", "+r+"%, "+w+"%)"})}function e(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:a("--chart-bg")||"transparent",color:y(),legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const d=[];function f(h){typeof h=="function"&&d.push(h)}function D(){d.slice().forEach(function(h){try{h()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:e,categoricalPalette:y,registerChart:f,refreshAllCharts:D,init(){return{getEChartsTheme:e,registerChart:f,refreshAllCharts:D}}}})();(function(){const{ref:a,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const y=t("qcState");try{const f=localStorage.getItem("quant_sidebar_collapsed");f!==null&&y.sidebarCollapsed&&(y.sidebarCollapsed.value=f==="1")}catch{}if(!y)return{};const e=async f=>{if(window.__quantGoPage){await window.__quantGoPage(f.key,f.subPages[0]||"");return}y.currentPage.value=f.key,y.currentSubPage.value=f.subPages[0]||""},d=()=>{y.sidebarCollapsed.value=!y.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",y.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:y.menus,currentPage:y.currentPage,sidebarCollapsed:y.sidebarCollapsed,navigate:e,toggle:d,sanitizeHtml:y.sanitizeHtml,keyClick:y.keyClick,t:y.t}}}})();const Sa={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(a){const t=a,y={"layout-dashboard":Kv,calendar:Bv,bot:Hv,"flask-conical":Fv,zap:Vv,settings:jv,"chevron-down":Ov,"chevron-right":Nv,"chevron-left":Iv,menu:Lv,search:Av,bell:zv,sun:Rv,moon:Dv,user:Pv,"user-round":Tv,home:Mv,x:Ev,database:qv,activity:Cv,clock:Sv,"bar-chart-3":xv,shield:_v,"hard-drive":kv,"file-text":wv,users:bv,cpu:yv,"pie-chart":hv,info:gv,"log-out":fv,palette:pv,languages:mv,refresh:vv,download:uv,"external-link":dv,command:cv,sparkles:rv,"trending-up":ov,"trending-down":iv,"circle-dot":nv,check:lv,"alert-triangle":sv,loader:av,"arrow-left":tv,"arrow-right":ev,eye:Zu,"eye-off":Xu,lock:$u,"sliders-horizontal":Qu,play:Ju,history:Yu,layers:Gu,"line-chart":Uu,target:Wu,"search-check":Ku,star:Bu,"message-circle":Hu,"calendar-days":Fu,"calendar-range":Vu,"calendar-check":ju,brain:Ou,lightbulb:Nu,"octagon-x":Iu,flag:Lu,package:Au,"clipboard-list":zu,pin:Ru,"radio-tower":Du,gauge:Pu,landmark:Tu,"candlestick-chart":Mu,wallet:Eu,"badge-check":qu,key:Cu,factory:Su,trophy:xu,rocket:_u,flame:ku,"map-pin":wu,"scroll-text":bu,"book-open":yu,dna:hu,"bar-chart":gu,plus:fu,"star-off":pu,upload:mu,gem:vu,"folder-open":uu,link:du,save:cu,"trash-2":ru,pause:ou,"help-circle":iu,"play-circle":nu,pencil:lu,folder:su,code:au,sprout:tu,wheat:eu,snowflake:Zd,fuel:Xd,banknote:$d,send:Qd,inbox:Jd,"wifi-off":Yd,"check-circle-2":Gd,"x-circle":Ud},e=()=>y[t.name]||y["circle-dot"];return(d,f)=>(ue(),ua(zd(e()),{size:a.size,"stroke-width":a.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},Ca=(a,t)=>{const y=a.__vccOpts||a;for(const[e,d]of t)y[e]=d;return y},Wv={name:"qc-sidebar",components:{AppIcon:Sa},setup(){const a=Pa("qcState");if(!a)return{};const t=tt(()=>a.menus&&a.menus.value||[]),y=tt(()=>a.currentPage&&a.currentPage.value||""),e=tt(()=>a.navMode&&a.navMode.value||"subnav"),d=tt({get:()=>a.sidebarCollapsed&&a.sidebarCollapsed.value||!1,set:E=>{a.sidebarCollapsed&&(a.sidebarCollapsed.value=E)}}),f=ft({}),D={research:"量化投研",platform:"平台管理"},h=["research","platform"],r=E=>y.value===E.key,w=(E,v)=>y.value===E.key&&a.currentSubPage&&a.currentSubPage.value===v,o=E=>Array.isArray(E.subPages)&&E.subPages.length>1,S=(E,v)=>a.subPageNames&&a.subPageNames[v]||v;function k(E){!o(E)||d.value||(f.value[E.key]=!f.value[E.key])}function T(){t.value.forEach(E=>{f.value[E.key]===void 0&&(f.value[E.key]=r(E))})}async function C(E,v){const i=v||E.subPages&&E.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(E.key,i):(a.currentPage.value=E.key,a.currentSubPage&&(a.currentSubPage.value=i)),a.navigateTo&&a.navigateTo(E.key,i)}function q(){d.value=!d.value;try{localStorage.setItem("sidebar_collapsed",d.value?"1":"0")}catch{}}function R(E){if(E.ctrlKey&&E.key.toLowerCase()==="b"&&(E.preventDefault(),q()),!E.ctrlKey&&!E.metaKey&&!E.altKey&&(E.key==="ArrowDown"||E.key==="ArrowUp")){const v=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),i=v.indexOf(document.activeElement);if(i>=0){E.preventDefault();const m=v[(i+(E.key==="ArrowDown"?1:v.length-1))%v.length];m&&m.focus()}}}return Da(()=>{T(),document.addEventListener("keydown",R)}),rs(()=>document.removeEventListener("keydown",R)),{state:a,menus:t,currentPage:y,navMode:e,sidebarCollapsed:d,expandedMenus:f,GROUP_LABELS:D,GROUPS:h,isActive:r,isChildActive:w,hasChildren:o,subLabel:S,toggleSubmenu:k,navigate:C,toggleCollapse:q}}},Uv={class:"qc-sidebar-logo"},Gv={key:0,class:"qc-logo-text"},Yv={class:"qc-sidebar-nav"},Jv={key:0,class:"qc-nav-group"},Qv={key:0,class:"qc-nav-group-label"},$v=["href","aria-current","onClick"],Xv={key:0,class:"qc-sidebar-label"},Zv={key:1,class:"qc-nav-badge"},em=["aria-expanded","aria-controls","onClick"],tm=["id"],am=["href","aria-current","onClick"],sm={class:"qc-sidebar-child-label"},lm={class:"qc-sidebar-footer"},nm=["aria-expanded","aria-label","title"];function im(a,t,y,e,d,f){const D=It("AppIcon"),h=It("el-tooltip");return ue(),pe("nav",{class:nt(["qc-sidebar",{"is-collapsed":e.sidebarCollapsed}]),"aria-label":"主导航"},[he("div",Uv,[t[1]||(t[1]=Ad('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),e.sidebarCollapsed?Fe("",!0):(ue(),pe("span",Gv,ze(e.state.t("login.title")),1))]),he("div",Yv,[(ue(!0),pe(lt,null,yt(e.GROUPS,r=>(ue(),pe(lt,{key:r},[e.menus.some(w=>w.group===r)?(ue(),pe("div",Jv,[e.sidebarCollapsed?Fe("",!0):(ue(),pe("span",Qv,ze(e.GROUP_LABELS[r]),1)),(ue(!0),pe(lt,null,yt(e.menus.filter(w=>w.group===r),w=>(ue(),pe(lt,{key:w.key},[he("div",{class:nt(["qc-sidebar-item",{"has-children":e.navMode==="tree"&&e.hasChildren(w),"is-child-open":e.navMode==="tree"&&e.expandedMenus[w.key]}])},[st(h,{content:w.name,placement:"right","show-after":300,disabled:!e.sidebarCollapsed},{default:ea(()=>[he("a",{class:nt(["qc-sidebar-link",{"is-active":e.isActive(w)}]),href:"#"+w.key,"aria-current":e.isActive(w)?"page":null,onClick:Lt(o=>e.navigate(w),["prevent"])},[st(D,{name:w.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),e.sidebarCollapsed?Fe("",!0):(ue(),pe("span",Xv,ze(w.name),1)),!e.sidebarCollapsed&&w.badge?(ue(),pe("span",Zv,ze(w.badge),1)):Fe("",!0)],10,$v)]),_:2},1032,["content","disabled"]),!e.sidebarCollapsed&&e.navMode==="tree"&&e.hasChildren(w)?(ue(),pe("button",{key:0,class:nt(["qc-sidebar-chevron",{"is-open":e.expandedMenus[w.key]}]),"aria-expanded":!!e.expandedMenus[w.key],"aria-controls":"submenu-"+w.key,"aria-label":"展开子菜单",onClick:o=>e.toggleSubmenu(w)},[st(D,{name:"chevron-down",size:14})],10,em)):Fe("",!0)],2),!e.sidebarCollapsed&&e.navMode==="tree"&&e.hasChildren(w)&&e.expandedMenus[w.key]?(ue(),pe("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+w.key},[(ue(!0),pe(lt,null,yt(w.subPages,o=>(ue(),pe("a",{key:o,class:nt(["qc-sidebar-item qc-sidebar-child",{"is-active":e.isChildActive(w,o)}]),href:"#"+w.key+"-"+o,"aria-current":e.isChildActive(w,o)?"page":null,onClick:Lt(S=>e.navigate(w,o),["prevent"])},[he("span",sm,ze(e.subLabel(w,o)),1)],10,am))),128))],8,tm)):Fe("",!0)],64))),128))])):Fe("",!0)],64))),128))]),he("div",lm,[he("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!e.sidebarCollapsed,"aria-label":e.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:e.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:t[0]||(t[0]=(...r)=>e.toggleCollapse&&e.toggleCollapse(...r))},[st(D,{name:e.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,nm)])],2)}const om=Ca(Wv,[["render",im]]),rm={name:"qc-header",components:{AppIcon:Sa},setup(){const a=Pa("qcState");if(!a)return{};const t=ft(!1),y=tt(()=>a.currentUser&&a.currentUser.value||null),e=tt(()=>a.navMode&&a.navMode.value||"subnav"),d=tt(()=>{const se=a.currentPage&&a.currentPage.value,fe=(a.menus&&a.menus.value||[]).find(Te=>Te.key===se);return!!(fe&&fe.subPages&&fe.subPages.length)}),f=tt(()=>{const se=a.currentPage&&a.currentPage.value,fe=a.currentPageName&&a.currentPageName.value;if(fe)return fe;const Te=(a.menus&&a.menus.value||[]).find(me=>me.key===se);return Te&&Te.name||se||""}),D=tt(()=>{const se=a.currentSubPage&&a.currentSubPage.value;return se&&a.subPageNames&&a.subPageNames[se]||se||""}),h=ft(typeof window<"u"?window.innerWidth<768:!1);function r(){h.value=window.innerWidth<768}Da(()=>window.addEventListener("resize",r)),rs(()=>window.removeEventListener("resize",r));const w=ft(!1),o=tt(()=>{const se=a.currentSubPage&&a.currentSubPage.value;return se&&a.subPageNames&&a.subPageNames[se]||se||""}),S=tt(()=>{const se=a.currentPage&&a.currentPage.value,fe=(a.menus&&a.menus.value||[]).find(Te=>Te.key===se);return(fe&&fe.subPages||[]).map(Te=>({key:Te,label:a.subPageNames&&a.subPageNames[Te]||Te}))});function k(){w.value=!w.value}function T(){w.value=!1}function C(se){w.value=!1,a.activateTab&&a.activateTab(a.currentPage.value,se)}const q=tt(()=>(a.currentTheme&&a.currentTheme.value)==="dark"),R=ft(!1),E=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],v=tt(()=>{const se=E.find(fe=>fe.value===e.value);return se&&se.label||e.value});function i(){R.value=!R.value}function m(){R.value=!1}function O(se){R.value=!1,a.setNavMode&&a.setNavMode(se)}const K=tt({get:()=>a.searchQuery&&a.searchQuery.value||"",set:se=>{a.searchQuery&&(a.searchQuery.value=se)}}),B=ft(!1),U=ft([]),Q=ft(!1),I=ft(!1);function N(){const se=localStorage.getItem("quant_token")||"";return se?{Authorization:"Bearer "+se,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function F(){Q.value=!0,I.value=!1;try{const fe=await(await fetch("/api/alerts/history?limit=8",{headers:N()})).json();fe&&fe.success?U.value=fe.history||[]:U.value=[]}catch{I.value=!0,U.value=[]}finally{Q.value=!1}}function J(){B.value=!B.value,B.value&&F()}function Z(){B.value=!1}function le(){B.value=!1,a.activateTab&&a.activateTab("system","notification")}const ee=ft(!1),L=a.themeHues||[45,220,0,140,270,320,-1],s=tt(()=>{const se=a.themeHue&&a.themeHue.value;return Number.isFinite(se)?se:45}),b=tt(()=>a.themeMode&&a.themeMode.value||"system"),l=[{k:"compact",n:"紧凑"},{k:"comfortable",n:"标准"},{k:"spacious",n:"宽松"}],g=tt(()=>a.density&&a.density.value||"comfortable");function X(se){a.changeDensity&&a.changeDensity(se)}function P(se){return a.hueColor?a.hueColor(se):"hsl("+se+", 75%, 42%)"}const p={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色","-1":"中性"};function c(se){return a.hueName?a.hueName(se):p[se]||"自定义 "+se}function _(){ee.value=!ee.value}function u(){ee.value=!1}function z(se){a.changeThemeMode&&a.changeThemeMode(se)}function ie(se){a.changeThemeHue&&a.changeThemeHue(se)}function G(){a.changeThemeMode&&a.changeThemeMode(q.value?"light":"dark")}function M(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}a.sidebarCollapsed&&(a.sidebarCollapsed.value=!a.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",a.sidebarCollapsed.value?"1":"0")}catch{}}function W(){t.value=!t.value}function ne(){t.value=!1}function ve(se){return()=>{ne(),se&&se()}}function Me(){ne(),a.handleLogout&&a.handleLogout()}const $=tt(()=>a.marketData&&a.marketData.value||{}),ce=ft(typeof window<"u"&&localStorage.getItem("qc.hideNonTradingBanner")==="1");return{marketData:$,bannerDismissed:ce,dismissBanner:()=>{ce.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},state:a,showUserMenu:t,currentUser:y,isDark:q,searchQuery:K,navMode:e,crumbRoot:f,crumbSub:D,hasToptabs:d,toggleThemeQuick:G,toggleSidebar:M,openUserMenu:W,closeUserMenu:ne,menuItem:ve,handleLogout:Me,openBellMenu:B,notifItems:U,notifLoading:Q,notifError:I,toggleBell:J,closeBell:Z,goNotificationCenter:le,openThemeMenu:ee,themeHues:L,themeHue:s,themeMode:b,hueColor:P,hueName:c,toggleThemeMenu:_,closeThemeMenu:u,pickThemeMode:z,pickThemeHue:ie,DENSITY_MODES:l,density:g,pickDensity:X,openNavModeMenu:R,NAV_MODES:E,navModeLabel:v,toggleNavModeMenu:i,closeNavModeMenu:m,pickNavMode:O,isMobile:h,openSubnavPicker:w,currentSubLabel:o,subnavOptions:S,toggleSubnavPicker:k,closeSubnavPicker:T,pickSubnav:C}}},cm={class:"qc-header-wrap"},dm={key:0,class:"non-trading-banner",role:"status"},um={class:"qc-header"},vm={class:"qc-header-left"},mm=["aria-label"],pm={key:0,class:"qc-header-subnav"},fm=["aria-expanded"],gm={class:"qc-subnav-picker-label"},hm={key:0,class:"qc-subnav-picker-menu",role:"menu"},ym=["onClick"],bm={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},wm={class:"qc-crumb qc-crumb-root"},km={class:"qc-crumb qc-crumb-sub"},_m={key:1,class:"qc-crumb qc-crumb-root"},xm={class:"qc-header-center"},Sm={key:0,class:"qc-search-sublabel"},Cm={class:"qc-header-right"},qm={class:"qc-hdr-pop"},Em=["aria-expanded"],Mm={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},Tm={key:0,class:"qc-bell-state"},Pm={key:1,class:"qc-bell-state"},Dm={key:2,class:"qc-bell-state"},Rm={key:3,class:"qc-bell-list"},zm={class:"qc-bell-item-title"},Am={class:"qc-bell-item-meta"},Lm={key:0},Im={class:"qc-bell-item-time"},Nm={class:"qc-hdr-pop"},Om=["aria-expanded"],jm={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},Vm={class:"qc-theme-modes"},Fm=["onClick"],Hm={class:"qc-theme-swatches"},Bm=["title","aria-label","onClick"],Km={key:0,class:"qc-theme-swatch-check"},Wm={class:"qc-theme-custom-label"},Um={class:"qc-theme-modes"},Gm=["onClick"],Ym={key:0,class:"qc-navmode-switch"},Jm=["aria-label","title","aria-expanded"],Qm={key:0,class:"qc-navmode-menu",role:"menu"},$m=["onClick","onKeydown"],Xm={class:"qc-navmode-item-main"},Zm={class:"qc-user-menu"},ep=["aria-label","aria-expanded"],tp={key:0,class:"qc-user-dropdown",role:"menu"},ap={class:"qc-user-dropdown-header"},sp={class:"qc-user-dropdown-name"},lp={key:0,class:"qc-user-dropdown-chip"};function np(a,t,y,e,d,f){var S,k,T,C,q,R,E;const D=It("AppIcon"),h=It("qc-top-tabs"),r=It("el-autocomplete"),w=It("el-slider"),o=Ld("click-outside");return ue(),pe("div",cm,[e.marketData&&e.marketData.is_trading_day===!1&&!e.bannerDismissed?(ue(),pe("div",dm,[st(D,{name:"alert-triangle",size:14}),t[15]||(t[15]=he("span",null,"今日非交易日 · 当前展示最近交易日历史数据",-1)),he("button",{class:"non-trading-banner-close",onClick:t[0]||(t[0]=(...v)=>e.dismissBanner&&e.dismissBanner(...v)),"aria-label":"关闭提示"},"×")])):Fe("",!0),he("header",um,[he("div",vm,[he("button",{class:"qc-icon-btn","aria-label":(S=e.state.sidebarCollapsed)!=null&&S.value?"展开侧边栏":"折叠侧边栏",onClick:t[1]||(t[1]=(...v)=>e.toggleSidebar&&e.toggleSidebar(...v))},[st(D,{name:"menu",size:20})],8,mm),e.isMobile?Ia((ue(),pe("div",pm,[he("button",{class:"qc-subnav-picker","aria-expanded":e.openSubnavPicker,onClick:t[2]||(t[2]=(...v)=>e.toggleSubnavPicker&&e.toggleSubnavPicker(...v))},[he("span",gm,ze(e.currentSubLabel||"二级"),1),st(D,{name:"chevron-down",size:14})],8,fm),e.openSubnavPicker?(ue(),pe("div",hm,[(ue(!0),pe(lt,null,yt(e.subnavOptions,v=>(ue(),pe("div",{key:v.key,class:nt(["qc-subnav-picker-item",{"is-active":v.key===(e.state.currentSubPage&&e.state.currentSubPage.value)}]),role:"menuitem",onClick:i=>e.pickSubnav(v.key)},ze(v.label),11,ym))),128))])):Fe("",!0)])),[[o,e.closeSubnavPicker]]):Fe("",!0),e.navMode==="tree"&&!e.isMobile?(ue(),pe("div",bm,[he("span",wm,ze(e.crumbRoot),1),e.crumbSub?(ue(),pe(lt,{key:0},[t[16]||(t[16]=he("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),he("span",km,ze(e.crumbSub),1)],64)):Fe("",!0)])):Fe("",!0),e.navMode==="toptab"&&!e.isMobile?(ue(),pe(lt,{key:2},[e.hasToptabs?(ue(),ua(h,{key:0})):(ue(),pe("span",_m,ze(e.crumbRoot),1))],64)):Fe("",!0)]),he("div",xm,[st(r,{class:"qc-header-search",modelValue:e.searchQuery,"onUpdate:modelValue":t[3]||(t[3]=v=>e.searchQuery=v),"fetch-suggestions":e.state.searchStocks,placeholder:e.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:e.state.onSearchSelect},{prefix:ea(()=>[st(D,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:ea(()=>[...t[17]||(t[17]=[he("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:ea(v=>{var i,m,O,K,B;return[he("span",null,ze((i=v==null?void 0:v.item)==null?void 0:i.icon)+" "+ze(((m=v==null?void 0:v.item)==null?void 0:m.label)||((O=v==null?void 0:v.item)==null?void 0:O.name)),1),(K=v==null?void 0:v.item)!=null&&K.subLabel?(ue(),pe("span",Sm,ze((B=v==null?void 0:v.item)==null?void 0:B.subLabel),1)):Fe("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),he("div",Cm,[Ia((ue(),pe("div",qm,[he("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":e.openBellMenu,onClick:t[4]||(t[4]=(...v)=>e.toggleBell&&e.toggleBell(...v))},[st(D,{name:"bell",size:20})],8,Em),e.openBellMenu?(ue(),pe("div",Mm,[t[18]||(t[18]=he("div",{class:"qc-bell-header"},"通知",-1)),e.notifLoading?(ue(),pe("div",Tm,"加载中...")):e.notifError?(ue(),pe("div",Pm,"加载失败")):e.notifItems.length?(ue(),pe("div",Rm,[(ue(!0),pe(lt,null,yt(e.notifItems,(v,i)=>(ue(),pe("div",{key:v.id||i,class:nt(["qc-bell-item",{"is-fail":v.ok===0}])},[he("div",zm,ze(v.title||v.event_type||"事件"),1),he("div",Am,[xa(ze(v.channel||""),1),v.recipient?(ue(),pe("span",Lm," · "+ze(v.recipient),1)):Fe("",!0),he("span",Im,ze(v.created_at||""),1)])],2))),128))])):(ue(),pe("div",Dm,"暂无通知")),he("button",{class:"qc-bell-footer",onClick:t[5]||(t[5]=(...v)=>e.goNotificationCenter&&e.goNotificationCenter(...v))},"前往通知中心 →")])):Fe("",!0)])),[[o,e.closeBell]]),Ia((ue(),pe("div",Nm,[he("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":e.openThemeMenu,onClick:t[6]||(t[6]=(...v)=>e.toggleThemeMenu&&e.toggleThemeMenu(...v))},[st(D,{name:"palette",size:20})],8,Om),e.openThemeMenu?(ue(),pe("div",jm,[t[19]||(t[19]=he("div",{class:"qc-theme-section-label"},"外观模式",-1)),he("div",Vm,[(ue(),pe(lt,null,yt([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],v=>he("button",{key:v.k,class:nt(["qc-theme-mode",{"is-active":e.themeMode===v.k}]),onClick:i=>e.pickThemeMode(v.k)},ze(v.n),11,Fm)),64))]),t[20]||(t[20]=he("div",{class:"qc-theme-section-label"},"主题色",-1)),he("div",Hm,[(ue(!0),pe(lt,null,yt(e.themeHues,v=>(ue(),pe("button",{key:v,class:nt(["qc-theme-swatch",{"is-active":e.themeHue===v}]),style:Id({background:e.hueColor(v)}),title:e.hueName(v),"aria-label":e.hueName(v),onClick:i=>e.pickThemeHue(v)},[e.themeHue===v?(ue(),pe("span",Km,"✓")):Fe("",!0)],14,Bm))),128))]),st(w,{class:"qc-theme-slider","model-value":e.themeHue,min:0,max:359,step:1,size:"small",onChange:e.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),he("div",Wm,"自定义 "+ze(e.themeHue)+"°",1),t[21]||(t[21]=he("div",{class:"qc-theme-section-label"},"信息密度",-1)),he("div",Um,[(ue(!0),pe(lt,null,yt(e.DENSITY_MODES,v=>(ue(),pe("button",{key:v.k,class:nt(["qc-theme-mode",{"is-active":e.density===v.k}]),onClick:i=>e.pickDensity(v.k)},ze(v.n),11,Gm))),128))])])):Fe("",!0)])),[[o,e.closeThemeMenu]]),e.isMobile?Fe("",!0):Ia((ue(),pe("div",Ym,[he("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+e.navModeLabel,title:"导航形态: "+e.navModeLabel,"aria-expanded":e.openNavModeMenu,onClick:t[7]||(t[7]=(...v)=>e.toggleNavModeMenu&&e.toggleNavModeMenu(...v))},[st(D,{name:"layers",size:20})],8,Jm),e.openNavModeMenu?(ue(),pe("div",Qm,[(ue(!0),pe(lt,null,yt(e.NAV_MODES,v=>(ue(),pe("div",{key:v.value,class:nt(["qc-user-dropdown-item qc-navmode-item",{"is-active":e.navMode===v.value}]),role:"menuitem",tabindex:"0",onClick:i=>e.pickNavMode(v.value),onKeydown:[da(Lt(i=>e.pickNavMode(v.value),["prevent"]),["enter"]),da(Lt(i=>e.pickNavMode(v.value),["prevent"]),["space"])]},[he("div",Xm,[he("span",null,ze(v.label),1),e.navMode===v.value?(ue(),ua(D,{key:0,name:"check",size:14})):Fe("",!0)])],42,$m))),128))])):Fe("",!0)])),[[o,e.closeNavModeMenu]]),Ia((ue(),pe("div",Zm,[he("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((k=e.currentUser)==null?void 0:k.username)||""),"aria-haspopup":"menu","aria-expanded":e.showUserMenu,onClick:t[8]||(t[8]=(...v)=>e.openUserMenu&&e.openUserMenu(...v))},ze((((T=e.currentUser)==null?void 0:T.username)||"A").charAt(0).toUpperCase()),9,ep),e.showUserMenu?(ue(),pe("div",tp,[he("div",ap,[he("span",sp,ze((C=e.currentUser)==null?void 0:C.username),1),((q=e.currentUser)==null?void 0:q.role)==="guest"?(ue(),pe("span",lp,"访客")):Fe("",!0)]),((R=e.currentUser)==null?void 0:R.role)==="admin"?(ue(),pe("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:t[9]||(t[9]=v=>e.menuItem(e.state.resetSetupWizard)()),onKeydown:t[10]||(t[10]=da(Lt(v=>e.menuItem(e.state.resetSetupWizard)(),["prevent"]),["enter"]))},[st(D,{name:"settings",size:16}),t[22]||(t[22]=xa(" 重新运行初始化向导 ",-1))],32)):Fe("",!0),((E=e.currentUser)==null?void 0:E.role)!=="guest"?(ue(),pe("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:t[11]||(t[11]=v=>e.menuItem(()=>{e.state.showChangePassword&&(e.state.showChangePassword.value=!0)})()),onKeydown:t[12]||(t[12]=da(Lt(v=>e.menuItem(()=>{e.state.showChangePassword&&(e.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[st(D,{name:"lock",size:16}),t[23]||(t[23]=xa(" 修改密码 ",-1))],32)):Fe("",!0),t[25]||(t[25]=he("div",{class:"qc-user-dropdown-divider"},null,-1)),he("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:t[13]||(t[13]=(...v)=>e.handleLogout&&e.handleLogout(...v)),onKeydown:t[14]||(t[14]=da(Lt((...v)=>e.handleLogout&&e.handleLogout(...v),["prevent"]),["enter"]))},[st(D,{name:"log-out",size:16}),t[24]||(t[24]=xa(" 退出登录 ",-1))],32)])):Fe("",!0)])),[[o,e.closeUserMenu]])])])])}const ip=Ca(rm,[["render",np]]),op=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],rp={name:"qc-subnav",components:{AppIcon:Sa},setup(){const a=Pa("qcState");if(!a)return{};const t=tt(()=>a.currentPage&&a.currentPage.value||""),y=tt(()=>a.currentSubPage&&a.currentSubPage.value||""),e=tt(()=>a.navMode&&a.navMode.value||"subnav"),d=ft({}),f=tt(()=>a.menus&&a.menus.value||[]),D=tt(()=>f.value.find(E=>E.key===t.value)||null),h=tt(()=>D.value&&D.value.subPages||[]),r=tt(()=>a.currentPageName&&a.currentPageName.value||t.value),w=E=>a.subPageNames&&a.subPageNames[E]||E,o=E=>y.value===E;function S(E){a.openTab?a.openTab(t.value,E):a.currentSubPage&&(a.currentSubPage.value=E);try{localStorage.setItem("quant_last_subpage",E)}catch{}}function k(E){a.openTab?a.openTab(t.value,E.key):a.currentSubPage&&(a.currentSubPage.value=E.key);try{localStorage.setItem("quant_last_subpage",E.key)}catch{}}function T(E){d.value[E]=!d.value[E]}const C={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}};return{state:a,currentPage:t,currentSubPage:y,navMode:e,subPages:h,currentMenu:D,collapsedGroups:d,pageTitle:r,subLabel:w,isSubActive:o,goSub:S,goSystemItem:k,toggleGroup:T,SYSTEM_GROUPS:op,subIcon:(E,v)=>C[E]&&C[E][v]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},cp={key:0,class:"qc-subnav-column","aria-label":"二级导航"},dp={class:"qc-subnav-column-header"},up={class:"qc-subnav-current-label"},vp={class:"qc-subnav-column-body"},mp=["onClick"],pp=["href","onClick"],fp={class:"qc-subnav-group-label"},gp=["href","onClick"],hp=["href","onClick"];function yp(a,t,y,e,d,f){const D=It("AppIcon");return e.navMode==="subnav"?(ue(),pe("aside",cp,[he("div",dp,[he("span",up,ze(e.pageTitle),1)]),he("div",vp,[e.currentPage==="system"?(ue(!0),pe(lt,{key:0},yt(e.SYSTEM_GROUPS,h=>(ue(),pe("div",{key:h.label,class:"qc-subnav-group"},[he("div",{class:"qc-subnav-group-label",onClick:r=>e.toggleGroup(h.label)},[he("span",null,ze(h.label),1),st(D,{name:"chevron-down",size:12,class:nt({"is-open":!e.collapsedGroups[h.label]})},null,8,["class"])],8,mp),e.collapsedGroups[h.label]?Fe("",!0):(ue(!0),pe(lt,{key:0},yt(h.items,r=>(ue(),pe("a",{key:r.key,class:nt(["qc-subnav-item",{"is-active":e.isSubActive(r.key)}]),href:"#"+r.key,onClick:Lt(w=>e.goSystemItem(r),["prevent"])},[st(D,{name:r.icon,size:16},null,8,["name"]),he("span",null,ze(r.label),1)],10,pp))),128))]))),128)):e.currentPage==="shortterm"?(ue(!0),pe(lt,{key:1},yt(e.SHORTTERM_GROUPS,h=>(ue(),pe("div",{key:h.label,class:"qc-subnav-group"},[he("div",fp,[he("span",null,ze(h.label),1)]),(ue(!0),pe(lt,null,yt(h.items,r=>(ue(),pe("a",{key:r,class:nt(["qc-subnav-item",{"is-active":e.isSubActive(r)}]),href:"#"+e.currentPage+"/"+r,onClick:Lt(w=>e.goSub(r),["prevent"])},[st(D,{name:e.subIcon(e.currentPage,r),size:16},null,8,["name"]),he("span",null,ze(e.subLabel(r)),1)],10,gp))),128))]))),128)):(ue(!0),pe(lt,{key:2},yt(e.subPages,h=>(ue(),pe("a",{key:h,class:nt(["qc-subnav-item",{"is-active":e.isSubActive(h)}]),href:"#"+e.currentPage+"/"+h,onClick:Lt(r=>e.goSub(h),["prevent"])},[st(D,{name:e.subIcon(e.currentPage,h),size:16},null,8,["name"]),he("span",null,ze(e.subLabel(h)),1)],10,hp))),128))])])):Fe("",!0)}const bp=Ca(rp,[["render",yp]]),wp=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],kp={name:"qc-mobile-nav",components:{AppIcon:Sa},setup(){const a=Pa("qcState");if(!a)return{};const t=ft(!1),y=ft(null),e=ft({}),d=tt(()=>a.menus&&a.menus.value||[]),f=tt(()=>a.currentPage&&a.currentPage.value||""),D={research:"量化投研",platform:"平台管理"},h=["research","platform"];function r(v){return Array.isArray(v.subPages)&&v.subPages.length>0}function w(v){r(v)&&(e.value[v.key]=!e.value[v.key])}function o(v,i){return f.value===v.key&&a.currentSubPage&&a.currentSubPage.value===i}function S(v){return a.subPageNames&&a.subPageNames[v]||v}async function k(v){const i=d.value.find(O=>O.key===v.key),m=i&&i.subPages&&i.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(v.key,m):(a.currentPage.value=v.key,a.currentSubPage&&(a.currentSubPage.value=m)),a.navigateTo&&a.navigateTo(v.key,m)}function T(v,i){t.value=!1;const m=i||v.subPages&&v.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(v.key,m):(a.currentPage.value=v.key,a.currentSubPage&&(a.currentSubPage.value=m)),a.navigateTo&&a.navigateTo(v.key,m)}function C(){t.value=!0,e.value.shortterm===void 0&&(e.value.shortterm=!0)}function q(){t.value=!1;const v=document.querySelector(".qc-header .qc-icon-btn");v&&v.focus()}function R(v){v.detail&&v.detail.open&&C()}function E(v){t.value&&v.key==="Escape"&&q()}return Da(()=>{window.addEventListener("qc:drawer",R),document.addEventListener("keydown",E)}),rs(()=>{window.removeEventListener("qc:drawer",R),document.removeEventListener("keydown",E)}),{state:a,TABS:wp,menus:d,currentPage:f,drawerOpen:t,drawerFocusRef:y,drawerExpanded:e,GROUP_LABELS:D,GROUPS:h,hasSub:r,toggleDrawerMenu:w,isDrawerSubActive:o,subLabel:S,goTab:k,goMenu:T,openDrawer:C,closeDrawer:q}}},_p={class:"qc-mobile-nav","aria-label":"移动端底部导航"},xp=["aria-current","onClick"],Sp={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},Cp={class:"qc-drawer-header"},qp={class:"qc-drawer-brand"},Ep={class:"qc-drawer-body"},Mp={key:0},Tp={class:"qc-nav-group-label"},Pp=["href","aria-current","onClick"],Dp={class:"qc-sidebar-label"},Rp=["aria-expanded","onClick"],zp={key:0,class:"qc-drawer-children"},Ap=["href","onClick"],Lp={class:"qc-drawer-footer"},Ip=["title"];function Np(a,t,y,e,d,f){var h,r;const D=It("AppIcon");return ue(),pe(lt,null,[he("nav",_p,[(ue(!0),pe(lt,null,yt(e.TABS,w=>(ue(),pe("button",{key:w.key,class:nt(["qc-mobile-tab",{"is-active":e.currentPage===w.key}]),"aria-current":e.currentPage===w.key?"page":null,onClick:o=>e.goTab(w)},[st(D,{name:w.icon,size:22},null,8,["name"]),he("span",null,ze(w.label),1)],10,xp))),128))]),(ue(),ua(Nd,{to:"body"},[e.drawerOpen?(ue(),pe("div",{key:0,class:"qc-drawer-backdrop",onClick:t[0]||(t[0]=(...w)=>e.closeDrawer&&e.closeDrawer(...w))})):Fe("",!0),e.drawerOpen?(ue(),pe("div",Sp,[he("div",Cp,[he("div",qp,[t[4]||(t[4]=he("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[he("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),he("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),he("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),he("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),he("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),he("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),he("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),he("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),he("span",null,ze(e.state.t("login.title")),1)]),he("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:t[1]||(t[1]=(...w)=>e.closeDrawer&&e.closeDrawer(...w))},[st(D,{name:"x",size:18})])]),he("div",Ep,[(ue(!0),pe(lt,null,yt(e.GROUPS,w=>(ue(),pe(lt,{key:w},[e.menus.some(o=>o.group===w)?(ue(),pe("div",Mp,[he("div",Tp,ze(e.GROUP_LABELS[w]),1),(ue(!0),pe(lt,null,yt(e.menus.filter(o=>o.group===w),o=>(ue(),pe("div",{key:o.key,class:"qc-drawer-menu"},[he("div",{class:nt(["qc-drawer-menu-row",{"is-active":e.currentPage===o.key}])},[he("a",{class:nt(["qc-sidebar-item",{"is-active":e.currentPage===o.key}]),href:"#"+o.key,"aria-current":e.currentPage===o.key?"page":null,onClick:Lt(S=>e.hasSub(o)?e.toggleDrawerMenu(o):e.goMenu(o),["prevent"])},[st(D,{name:o.iconName||"",size:18},null,8,["name"]),he("span",Dp,ze(o.name),1)],10,Pp),e.hasSub(o)?(ue(),pe("button",{key:0,class:nt(["qc-sidebar-chevron",{"is-open":e.drawerExpanded[o.key]}]),"aria-expanded":!!e.drawerExpanded[o.key],"aria-label":"展开子菜单",onClick:S=>e.toggleDrawerMenu(o)},[st(D,{name:"chevron-down",size:14})],10,Rp)):Fe("",!0)],2),e.drawerExpanded[o.key]?(ue(),pe("div",zp,[(ue(!0),pe(lt,null,yt(o.subPages,S=>(ue(),pe("a",{key:S,class:nt(["qc-subnav-item",{"is-active":e.isDrawerSubActive(o,S)}]),href:"#"+o.key+"/"+S,onClick:Lt(k=>e.goMenu(o,S),["prevent"])},[he("span",null,ze(e.subLabel(S)),1)],10,Ap))),128))])):Fe("",!0)]))),128))])):Fe("",!0)],64))),128))]),he("div",Lp,[he("button",{class:"qc-icon-btn",title:((h=e.state.currentTheme)==null?void 0:h.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:t[2]||(t[2]=w=>{var o;return e.state.changeThemeMode&&e.state.changeThemeMode(((o=e.state.currentTheme)==null?void 0:o.value)==="dark"?"light":"dark")})},[st(D,{name:((r=e.state.currentTheme)==null?void 0:r.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,Ip),he("button",{class:"qc-icon-btn",title:"退出登录",onClick:t[3]||(t[3]=w=>e.state.handleLogout&&e.state.handleLogout())},[st(D,{name:"log-out",size:18})])])])):Fe("",!0)]))],64)}const Op=Ca(kp,[["render",Np]]),jp={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(a,{emit:t,slots:y}){const e=Pa("qcState");function d(o){t("select",o)}function f(o){const S=o.strategy_names||o.strategies||[],k=S.slice(0,3),T=S.length>3?S.length-3:0,C=k.map(q=>({text:q,more:!1}));return T&&C.push({text:"+"+T,more:!0}),C}function D(o){const S=Number(o);return isFinite(S)?S.toFixed(2):"—"}function h(o){const S=Number(o);return isFinite(S)?(S>0?"+":"")+S.toFixed(2)+"%":"—"}function r(o){const S=Number(o.consensus_level);return isFinite(S)?Math.round(S*100):0}function w(o){const S=Number(o&&o.consensus_level);return isFinite(S)&&S>0}return{state:e,slots:y,select:d,displayTags:f,fmtPrice:D,fmtChange:h,pctOf:r,hasConsensus:w}}},Vp={class:"qc-stock-list"},Fp=["data-copy-code","aria-label","onClick","onKeydown"],Hp={key:0,class:"qc-stock-rank"},Bp={class:"qc-stock-info"},Kp={class:"qc-stock-code"},Wp={class:"qc-stock-code-num"},Up={key:0,class:"qc-stock-status is-new"},Gp={key:1,class:"qc-stock-status is-out"},Yp={class:"qc-stock-name"},Jp={key:0,class:"qc-stock-consensus"},Qp={key:1,class:"qc-stock-tags"},$p={key:2,class:"qc-stock-badge"},Xp={key:3,class:"qc-stock-data"},Zp={class:"qc-stock-price"},ef={key:4,class:"qc-stock-extra"},tf={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},af=["data-copy-code","aria-label","onClick","onKeydown"],sf={key:0,class:"qc-stock-rank"},lf={class:"qc-stock-info"},nf={class:"qc-stock-code"},of={class:"qc-stock-code-num"},rf={key:0,class:"qc-stock-status is-new"},cf={key:1,class:"qc-stock-status is-out"},df={class:"qc-stock-name"},uf={key:0,class:"qc-stock-consensus"},vf={key:1,class:"qc-stock-tags"},mf={key:2,class:"qc-stock-badge"},pf={key:3,class:"qc-stock-data"},ff={class:"qc-stock-price"},gf={key:4,class:"qc-stock-extra"},hf={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function yf(a,t,y,e,d,f){const D=It("qc-state-panel"),h=It("qc-virtual-list");return ue(),pe("div",Vp,[y.loading?(ue(),ua(D,{key:0,type:"loading"})):y.items.length?(ue(),pe(lt,{key:2},[y.virtual?(ue(),ua(h,{key:0,items:y.items,"row-height":y.rowHeight},{default:ea(({item:r,index:w})=>[he("div",{class:nt(["qc-stock-row",{"is-active":y.activeCode===r.code}]),"data-copy-code":y.copyCode?r.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(r.name||"")+" "+(r.code||""),onClick:o=>e.select(r),onKeydown:[da(Lt(o=>e.select(r),["prevent"]),["enter"]),da(Lt(o=>e.select(r),["prevent"]),["space"])]},[y.showRank?(ue(),pe("div",Hp,ze(w+1),1)):Fe("",!0),he("div",Bp,[he("div",Kp,[he("span",Wp,ze(r.code),1),r.status==="new"?(ue(),pe("span",Up,ze(y.statusText.new),1)):r.status==="out"?(ue(),pe("span",Gp,ze(y.statusText.out),1)):Fe("",!0)]),he("div",Yp,[xa(ze(r.name)+" ",1),ia(a.$slots,"name-suffix",{item:r,index:w})]),y.showConsensus&&e.hasConsensus(r)?(ue(),pe("span",Jp,ze(e.pctOf(r))+"% 共识",1)):Fe("",!0)]),(r.strategy_names||r.strategies)&&(r.strategy_names||r.strategies).length?(ue(),pe("div",Qp,[(ue(!0),pe(lt,null,yt(e.displayTags(r),o=>(ue(),pe("span",{key:o.text,class:nt(["qc-stock-tag",{"is-more":o.more}])},ze(o.text),3))),128))])):Fe("",!0),y.showConsensus?(ue(),pe("span",$p,ze(r.strategy_count||0)+" 策略",1)):Fe("",!0),y.showPrice&&r.price!=null?(ue(),pe("div",Xp,[he("span",Zp,ze(e.fmtPrice(r.price)),1),he("span",{class:nt(["qc-stock-change",r.change_pct>0?"is-up":r.change_pct<0?"is-down":""])},ze(e.fmtChange(r.change_pct)),3)])):Fe("",!0),e.slots.extra?(ue(),pe("div",ef,[ia(a.$slots,"extra",{item:r,index:w})])):Fe("",!0),e.slots.actions?(ue(),pe("div",{key:5,class:"qc-stock-actions",onClick:t[0]||(t[0]=Lt(()=>{},["stop"]))},[ia(a.$slots,"actions",{item:r,index:w})])):Fe("",!0),e.slots.footer?(ue(),pe("div",tf,[ia(a.$slots,"footer",{item:r,index:w})])):Fe("",!0)],42,Fp)]),_:3},8,["items","row-height"])):(ue(!0),pe(lt,{key:1},yt(y.items,(r,w)=>(ue(),pe("div",{key:r.code,class:nt(["qc-stock-row",{"is-active":y.activeCode===r.code}]),"data-copy-code":y.copyCode?r.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(r.name||"")+" "+(r.code||""),onClick:o=>e.select(r),onKeydown:[da(Lt(o=>e.select(r),["prevent"]),["enter"]),da(Lt(o=>e.select(r),["prevent"]),["space"])]},[y.showRank?(ue(),pe("div",sf,ze(w+1),1)):Fe("",!0),he("div",lf,[he("div",nf,[he("span",of,ze(r.code),1),r.status==="new"?(ue(),pe("span",rf,ze(y.statusText.new),1)):r.status==="out"?(ue(),pe("span",cf,ze(y.statusText.out),1)):Fe("",!0)]),he("div",df,[xa(ze(r.name)+" ",1),ia(a.$slots,"name-suffix",{item:r,index:w})]),y.showConsensus&&e.hasConsensus(r)?(ue(),pe("span",uf,ze(e.pctOf(r))+"% 共识",1)):Fe("",!0)]),(r.strategy_names||r.strategies)&&(r.strategy_names||r.strategies).length?(ue(),pe("div",vf,[(ue(!0),pe(lt,null,yt(e.displayTags(r),o=>(ue(),pe("span",{key:o.text,class:nt(["qc-stock-tag",{"is-more":o.more}])},ze(o.text),3))),128))])):Fe("",!0),y.showConsensus?(ue(),pe("span",mf,ze(r.strategy_count||0)+" 策略",1)):Fe("",!0),y.showPrice&&r.price!=null?(ue(),pe("div",pf,[he("span",ff,ze(e.fmtPrice(r.price)),1),he("span",{class:nt(["qc-stock-change",r.change_pct>0?"is-up":r.change_pct<0?"is-down":""])},ze(e.fmtChange(r.change_pct)),3)])):Fe("",!0),e.slots.extra?(ue(),pe("div",gf,[ia(a.$slots,"extra",{item:r,index:w})])):Fe("",!0),e.slots.actions?(ue(),pe("div",{key:5,class:"qc-stock-actions",onClick:t[1]||(t[1]=Lt(()=>{},["stop"]))},[ia(a.$slots,"actions",{item:r,index:w})])):Fe("",!0),e.slots.footer?(ue(),pe("div",hf,[ia(a.$slots,"footer",{item:r,index:w})])):Fe("",!0)],42,af))),128))],64)):(ue(),ua(D,{key:1,type:"empty",title:y.emptyText},null,8,["title"]))])}const bf=Ca(jp,[["render",yf]]),wf={name:"qc-detail-split",props:{enabled:{type:Boolean,default:!1},rootClass:{type:String,default:""},listClass:{type:String,default:""},paneClass:{type:String,default:""}}},kf={key:0,class:"split-divider","data-split-resize":""};function _f(a,t,y,e,d,f){return ue(),pe("div",{class:nt(["detail-split-wrap",[y.rootClass,{"detail-split":y.enabled}]]),"data-split-root":""},[he("div",{class:nt(["detail-split-list",[y.listClass,{"w-100":!y.enabled}]])},[ia(a.$slots,"list")],2),y.enabled?(ue(),pe("div",kf)):Fe("",!0),y.enabled?(ue(),pe("div",{key:1,class:nt(["detail-split-pane",y.paneClass])},[ia(a.$slots,"pane")],2)):Fe("",!0)],2)}const xf=Ca(wf,[["render",_f]]),rl={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}},Sf=200,Cf={name:"qc-top-tabs",components:{AppIcon:Sa},setup(){const a=Pa("qcState");if(!a)return{};const t=tt(()=>a.currentPage&&a.currentPage.value||""),y=tt(()=>a.currentSubPage&&a.currentSubPage.value||""),e=tt(()=>a.menus&&a.menus.value||[]),d=tt(()=>{const i=e.value.find(m=>m.key===t.value);return i&&i.subPages||[]}),f=tt(()=>d.value.map(i=>({key:i,label:a.subPageNames&&a.subPageNames[i]||i,icon:rl[t.value]&&rl[t.value][i]||"circle-dot"}))),D=ft(null),h=ft(!1),r=ft(!1),w=ft(!1);let o=null,S=null;function k(){const i=D.value;i&&(r.value=i.scrollLeft>2,w.value=i.scrollLeft<i.scrollWidth-i.clientWidth-2)}function T(){const i=D.value;i&&(h.value=i.scrollWidth>i.clientWidth+2,k())}function C(i){const m=D.value;m&&m.scrollBy({left:i*Sf,behavior:"smooth"})}function q(i){a.openTab?a.openTab(t.value,i):a.currentSubPage&&(a.currentSubPage.value=i)}function R(i){q(i),jd(()=>{const m=D.value;if(!m)return;const O=m.querySelector('[data-tab-key="'+i+'"]');O&&O.scrollIntoView({block:"nearest",inline:"nearest"})})}const E=tt(()=>{if(!h.value)return[];const i=D.value;if(!i)return[];const m=i.getBoundingClientRect(),O=new Set;return i.querySelectorAll(".qc-top-tab").forEach(K=>{const B=K.getBoundingClientRect();B.left>=m.left-2&&B.left<m.right-24&&O.add(K.getAttribute("data-tab-key"))}),f.value.filter(K=>!O.has(K.key))});function v(i,m){i.key==="ArrowLeft"?(i.preventDefault(),C(-1)):i.key==="ArrowRight"?(i.preventDefault(),C(1)):(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),q(m.key))}return Da(()=>{T(),o=new ResizeObserver(()=>{clearTimeout(S),S=setTimeout(T,100)}),D.value&&o.observe(D.value),window.addEventListener("resize",T)}),Od(()=>{o&&o.disconnect(),window.removeEventListener("resize",T),clearTimeout(S)}),{state:a,tabs:f,currentSubPage:y,go:q,scrollRef:D,hasOverflow:h,canScrollLeft:r,canScrollRight:w,scrollByStep:C,scrollToTab:R,hiddenTabs:E,onTabKeydown:v,updateScrollState:k}}},qf={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},Ef=["disabled"],Mf=["data-tab-key","aria-selected","title","onClick","onKeydown"],Tf={class:"qc-top-tab-label"},Pf=["disabled"];function Df(a,t,y,e,d,f){const D=It("AppIcon"),h=It("el-dropdown-item"),r=It("el-dropdown-menu"),w=It("el-dropdown");return e.tabs.length?(ue(),pe("div",qf,[e.hasOverflow?(ue(),pe("button",{key:0,class:"qc-top-tabs-btn",disabled:!e.canScrollLeft,"aria-label":"向左滚动",onClick:t[0]||(t[0]=o=>e.scrollByStep(-1))},"‹",8,Ef)):Fe("",!0),he("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:t[1]||(t[1]=(...o)=>e.updateScrollState&&e.updateScrollState(...o))},[(ue(!0),pe(lt,null,yt(e.tabs,o=>(ue(),pe("div",{key:o.key,"data-tab-key":o.key,class:nt(["qc-top-tab",{"is-active":e.currentSubPage===o.key}]),role:"tab",tabindex:"0","aria-selected":e.currentSubPage===o.key?"true":"false",title:o.label,onClick:S=>e.go(o.key),onKeydown:S=>e.onTabKeydown(S,o)},[st(D,{name:o.icon,size:14},null,8,["name"]),he("span",Tf,ze(o.label),1)],42,Mf))),128))],544),e.hasOverflow?(ue(),pe("button",{key:1,class:"qc-top-tabs-btn",disabled:!e.canScrollRight,"aria-label":"向右滚动",onClick:t[2]||(t[2]=o=>e.scrollByStep(1))},"›",8,Pf)):Fe("",!0),e.hasOverflow&&e.hiddenTabs.length?(ue(),ua(w,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:e.scrollToTab},{dropdown:ea(()=>[st(r,null,{default:ea(()=>[(ue(!0),pe(lt,null,yt(e.hiddenTabs,o=>(ue(),ua(h,{key:o.key,command:o.key,class:nt({"is-active":e.currentSubPage===o.key})},{default:ea(()=>[st(D,{name:o.icon,size:14},null,8,["name"]),xa(" "+ze(o.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:ea(()=>[t[3]||(t[3]=he("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):Fe("",!0)])):Fe("",!0)}const Rf=Ca(Cf,[["render",Df]]),zf=["title"],Af={class:"qc-glossary-trigger",role:"button",tabindex:"0","aria-label":"术语解释"},Lf={class:"qc-glossary-card"},If={class:"qc-glossary-head"},Nf={class:"qc-glossary-term"},Of={class:"qc-glossary-cat"},jf={class:"qc-glossary-row"},Vf={class:"qc-glossary-label"},Ff={class:"qc-glossary-text"},Hf={class:"qc-glossary-row"},Bf={class:"qc-glossary-label"},Kf={class:"qc-glossary-text"},Wf={class:"qc-glossary-foot"},cl={__name:"GlossaryHint",props:{gkey:{type:String,required:!0},size:{type:[Number,String],default:14}},setup(a){const t=a;let y=null;function e(){return y||(y=fetch("/api/meta/glossary").then(r=>r.ok?r.json():null).then(r=>r&&r.success?r.items:null).catch(()=>null)),y}const d=ft(!0),f=ft(null);Da(async()=>{const r=await e();if(r){const w=r.find(o=>o.key===t.gkey);w&&(f.value=w,d.value=!1)}});function D(){window.__quantGoPage?window.__quantGoPage("system","glossary"):window.__quantState&&window.__quantState.currentPage&&(window.__quantState.currentPage.value="system",window.__quantState.currentSubPage.value="glossary")}const h=tt(()=>!d.value&&!!f.value);return(r,w)=>{const o=It("qc-icon"),S=It("el-popover");return h.value?(ue(),pe("span",{key:0,class:"qc-glossary-hint",title:f.value.term},[st(S,{placement:"bottom-start",width:340,trigger:"hover","popper-class":"qc-glossary-pop"},{reference:ea(()=>[he("span",Af,[st(o,{name:"help-circle",size:a.size},null,8,["size"])])]),default:ea(()=>[he("div",Lf,[he("div",If,[he("span",Nf,ze(r.t("glossary.term."+f.value.key)),1),he("span",Of,ze(r.t("glossary.cat."+f.value.category)),1)]),he("div",jf,[he("span",Vf,ze(r.t("glossary.definition")),1),he("span",Ff,ze(f.value.definition),1)]),he("div",Hf,[he("span",Bf,ze(r.t("glossary.calc")),1),he("span",Kf,ze(f.value.calc),1)]),he("div",Wf,[he("span",{class:"qc-glossary-link",onClick:D},ze(r.t("glossary.title"))+" →",1)])])]),_:1})],8,zf)):Fe("",!0)}}},Uf={class:"card qc-glossary-page"},Gf={class:"card-title flex-between"},Yf={class:"qc-glossary-tabs",role:"tablist"},Jf=["onClick"],Qf={key:0,class:"qc-glossary-loading"},$f={key:1,class:"qc-glossary-empty"},Xf={key:2,class:"qc-glossary-list"},Zf={class:"qc-glossary-item-head"},eg={class:"qc-glossary-term"},tg={class:"qc-glossary-cat"},ag={class:"qc-glossary-item-def"},sg={class:"qc-glossary-item-calc"},lg={class:"qc-glossary-label"},dl={__name:"GlossaryPage",setup(a){const t=ft([]),y=ft([]),e=ft("all"),d=ft(""),f=ft(!0);Da(async()=>{try{const w=await(await fetch("/api/meta/glossary")).json();w&&w.success&&(t.value=w.items||[],y.value=w.categories||[])}catch{}finally{f.value=!1}});const D=tt(()=>{let r=t.value;e.value!=="all"&&(r=r.filter(o=>o.category===e.value));const w=(d.value||"").trim().toLowerCase();return w&&(r=r.filter(o=>(o.term||"").toLowerCase().includes(w)||(o.definition||"").toLowerCase().includes(w))),r}),h=["宏观","策略","因子","技术","短线","数据源","产品"];return(r,w)=>{const o=It("qc-icon"),S=It("el-input");return ue(),pe("div",Uf,[he("div",Gf,[he("span",null,ze(r.t("glossary.title")),1),st(S,{modelValue:d.value,"onUpdate:modelValue":w[0]||(w[0]=k=>d.value=k),class:"qc-glossary-search",placeholder:r.t("glossary.search"),clearable:"",size:"small"},{prefix:ea(()=>[st(o,{name:"search",size:14})]),_:1},8,["modelValue","placeholder"])]),he("div",Yf,[(ue(!0),pe(lt,null,yt(["all"].concat(h),k=>(ue(),pe("span",{key:k,class:nt(["qc-glossary-tab",{"is-active":e.value===k}]),role:"tab",onClick:T=>e.value=k},ze(k==="all"?r.t("glossary.title"):r.t("glossary.cat."+k)),11,Jf))),128))]),f.value?(ue(),pe("div",Qf,ze(r.t("common.loading")),1)):D.value.length?(ue(),pe("div",Xf,[(ue(!0),pe(lt,null,yt(D.value,k=>(ue(),pe("div",{key:k.key,class:"qc-glossary-item"},[he("div",Zf,[he("span",eg,ze(r.t("glossary.term."+k.key)),1),he("span",tg,ze(r.t("glossary.cat."+k.category)),1)]),he("div",ag,ze(k.definition),1),he("div",sg,[he("span",lg,ze(r.t("glossary.calc"))+":",1),he("span",null,ze(k.calc),1)])]))),128))])):(ue(),pe("div",$f,ze(r.t("glossary.empty")),1))])}}};(function(){const{ref:a,computed:t,inject:y}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
    `,setup(){const e=y("qcState");if(!e)return{};const d=a(!1),f=a(localStorage.getItem("qc.hideNonTradingBanner")==="1"),D=()=>{f.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},h=t(()=>e.marketData&&e.marketData.value||{}),r=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:e.menus,marketData:h,bannerDismissed:f,dismissBanner:D,goMerrill:r,currentPage:e.currentPage,currentSubPage:e.currentSubPage,currentUser:e.currentUser,currentPageName:e.currentPageName,searchQuery:e.searchQuery,searchStocks:e.searchStocks,onSearchSelect:e.onSearchSelect,selectedDate:e.selectedDate,onDateChange:e.onDateChange,disabledDate:e.disabledDate,refreshCalendarData:e.refreshCalendarData,exportCSV:e.exportCSV,loading:e.loading,lastLoadTime:e.lastLoadTime,showUserMenu:d,resetSetupWizard:e.resetSetupWizard,showChangePassword:e.showChangePassword,themes:e.themes,currentTheme:e.currentTheme,changeTheme:e.changeTheme,handleLogout:e.handleLogout,subPageNames:e.subPageNames,keyClick:e.keyClick,t:e.t,subTabLabel:function(w,o){const S="sub."+w.key+"."+o,k=e.t(S);if(k!==S)return k;const T="sub."+o,C=e.t(T);return C!==T&&C?C:e.subPageNames[o]||o}}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                </div>`,setup(){const t=a("qcState");if(!t)return{};const{ref:y,computed:e}=Vue,d=y(0),f=y(0),D=y(!1),h=e(()=>{const B={day:"date",week:"week",month:"month",year:"year"},U=t.currentView&&t.currentView.value||"day";return B[U]||"date"}),r={day:"日",week:"周",month:"月",year:"年"};function w(B){return t.t&&t.t("view."+B)||r[B]||B}function o(B){t.switchView?t.switchView(B):t.currentView&&(t.currentView.value=B)}let S=null;function k(B){const U=B.touches&&B.touches[0];U&&(d.value=U.clientX,f.value=U.clientY)}async function T(){if(!D.value){D.value=!0;try{await t.refreshCalendarData()}catch{}S&&clearTimeout(S),S=setTimeout(()=>{D.value=!1},500)}}function C(B){if(!(window.innerWidth<=768))return;const U=B.changedTouches&&B.changedTouches[0];if(!U)return;const Q=window.__quantModules&&window.__quantModules.gestures||{};if((typeof Q.judgePullToRefresh=="function"?Q.judgePullToRefresh(f.value,U.clientY):U.clientY-f.value>=60)&&(window.scrollY||0)<=0){B.stopPropagation(),T();return}if(t.currentSubPage.value==="pool")return;const N=U.clientX-d.value,F=U.clientY-f.value;Math.abs(N)>50&&Math.abs(N)>Math.abs(F)*1.2&&(t.navigateDate(N<0?1:-1),B.stopPropagation())}const q=y(!1),R=y(!1),E=y(""),v=y(null),i=y([]);function m(B){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[B]||B}async function O(){if(t.selectedDate.value){q.value=!0,R.value=!0,E.value="",v.value=null,i.value=[];try{const B=await fetch("/api/calendar/"+t.selectedDate.value+"/compare"),U=await B.json();if(!B.ok)throw new Error(U.detail||"HTTP "+B.status);v.value=U;const Q=U&&U.comparison||{},I=[];for(const N of Object.keys(Q)){if(N==="all_intersection")continue;const F=Q[N]||{},J=N.split("_vs_");I.push({label:m(J[0])+" ↔ "+m(J[1]),interCount:F.intersection_count||0,inter:(F.intersection||[]).join(", "),onlyS1Count:F.only_s1_count||0,onlyS1:(F.only_s1||[]).join(", "),onlyS2Count:F.only_s2_count||0,onlyS2:(F.only_s2||[]).join(", ")})}i.value=I}catch(B){E.value=String(B&&B.message?B.message:B)}finally{R.value=!1}}}let K="";return Vue.watch(()=>{const B=t.stockPool,U=B&&B.value||[];return{n:U.length,first:U[0]&&U[0].code,split:!!t.detailSplitEnabled.value}},(B,U)=>{if(!B.split||!B.first||B.n===0)return;const Q=t.stockDetail&&t.stockDetail.value&&t.stockDetail.value.stock,I=(t.stockPool.value||[]).some(N=>N.code===Q);if(!Q||!I){if(K===B.first&&Q&&I===!1&&B.n>1)return;K=B.first,t.showStockDetail&&t.showStockDetail(B.first)}},{immediate:!0}),{...t,calType:h,pullRefreshing:D,onCalTouchStart:k,onCalTouchEnd:C,viewLabel:w,switchViewLocal:o,compareVisible:q,compareLoading:R,compareError:E,compareData:v,comparePairs:i,openStrategyCompare:O}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:`
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
    `,setup(){const t=a("qcState"),y=Vue.ref(!1);if(!t)return{};const{computed:e}=Vue;let d=0;const f=e(()=>{var A;return((A=t.merrillData)==null?void 0:A.value)||{}}),D=e(()=>{var A;return((A=t.marketData)==null?void 0:A.value)||{}}),h=e(()=>{var A;return((A=t.dashboardData)==null?void 0:A.value)||{}}),r=e(()=>{var A;return((A=t.healthMetrics)==null?void 0:A.value)||[]}),w=e(()=>{var A;return((A=t.filteredConsensusRank)==null?void 0:A.value)||[]}),o=e(()=>{const A={};for(const te of w.value)te.code&&te.name&&(A[te.code]=te.name);return A}),S={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function k(A){return S[A]||A}const T=e(()=>D.value.date||h.value.latest_date||"-"),C=e(()=>{const A=D.value;return!A||Object.keys(A).length===0?"数据加载中...":A.is_trading_day&&A.in_trading_hours?"● 交易中":A.is_trading_day?"已收盘":"○ 非交易日"}),q=e(()=>{const A=f.value.next_stage_prediction;return A&&A.next_stage_name&&A.transition_probability>.2?`→${A.next_stage_name} ${(A.transition_probability*100).toFixed(2)}%`:""}),R=e(()=>{const A=[],te=h.value.pool_changes||{},Se=te.new_count||0;if(Se>0){const wt=te.new_stock_names||{},Ye=(te.new_stocks||[]).map(Ke=>wt[Ke]||o.value[Ke]||Ke).slice(0,4).join("、");A.push({icon:"sparkles",level:"new",text:`今日新入池 ${Se} 只${Ye?" · "+Ye:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(t.currentPage.value="calendar",t.currentSubPage.value="pool"),t.statusFilter.value="new"}})}for(const wt of r.value.filter(Ye=>Ye.degraded))A.push({icon:"alert-triangle",level:"warn",text:`数据源 ${k(wt.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):t.currentPage.value="system"}});const Le=f.value.timing;Le&&Le.progress_percent&&Le.progress_percent>100?A.push({icon:"clock",level:"warn",text:`美林「${f.value.name}」已超期 ${Le.progress_percent}%`,action:()=>{t.currentSubPage.value="merrill"}}):Le&&Le.maturity&&f.value.name&&A.push({icon:"clock",level:"info",text:`美林「${f.value.name}」阶段成熟度 ${Le.maturity}`,action:()=>{t.currentSubPage.value="merrill"}});const He=D.value;return He&&He.is_trading_day===!1&&He.date&&A.push({icon:"calendar",level:"info",text:`${He.date} 非交易日`,action:()=>{t.currentSubPage.value="market"}}),A}),E=e(()=>{const A=[],te=f.value.name||"",Se=f.value.timing||{},Le=["复苏","成长","过热"],He=["滞胀","衰退"];Le.some(it=>te.includes(it))&&A.push({kind:"opportunity",source:"美林",text:te+" 顺势",action:()=>{t.currentSubPage.value="merrill"}}),He.some(it=>te.includes(it))&&A.push({kind:"risk",source:"美林",text:te+" 防守",action:()=>{t.currentSubPage.value="merrill"}}),Se.progress_percent&&Se.progress_percent>100&&A.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{t.currentSubPage.value="merrill"}});const wt=h.value.pool_changes||{},Ye=(wt.new_count||0)-(wt.out_count||0);Ye>=3?A.push({kind:"opportunity",source:"池变动",text:"净入池 +"+Ye,action:()=>{t.statusFilter.value="new",t.currentPage.value="calendar",t.currentSubPage.value="pool"}}):Ye<=-3&&A.push({kind:"risk",source:"池变动",text:"净出池 "+Ye,action:()=>{t.currentSubPage.value="consensus"}});const Ke=D.value.market_sentiment,dt=Ke&&Ke.text||"";(dt.includes("乐观")||dt.includes("积极")||dt.includes("亢奋"))&&A.push({kind:"opportunity",source:"情绪",text:dt,action:()=>{t.currentSubPage.value="market"}}),(dt.includes("悲观")||dt.includes("恐慌")||dt.includes("低迷"))&&A.push({kind:"risk",source:"情绪",text:dt,action:()=>{t.currentSubPage.value="market"}});for(const it of r.value.filter(Y=>Y.degraded))A.push({kind:"risk",source:"数据",text:k(it.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):t.currentPage.value="system"}});return A}),v=e(()=>{var A;return((A=t.merrillTimeline)==null?void 0:A.value)||t.merrillTimeline||{cycles:[]}}),i=e(()=>{var A;return((A=t.timelineLoading)==null?void 0:A.value)||!1});function m(A){const te=t.showStageDetail;typeof te=="function"&&te(A)}function O(A){const te=t.merrillStagesConfig,Le=(te&&te.value?te.value:te||{})[A]||{};return Le.color||Le.bg_color||"var(--color-primary)"}function K(A){const te=t.merrillStagesConfig,Se=te&&te.value?te.value:te||{};return Se[A]&&Se[A].name||""}function B(){const A=t.merrillStagesConfig;return A&&A.value?A.value:A||{}}function U(A){return B()[A]&&B()[A].description||""}const Q=Vue.ref([]),I=Vue.ref(null),N=Vue.ref(!1),F=Vue.ref(!1),J=Vue.ref(7),Z=Vue.ref(""),le=Vue.ref(""),ee=Vue.computed(()=>{const A=new Set;return(Q.value||[]).forEach(function(te){te.task&&A.add(te.task)}),Array.from(A).sort()}),L=Vue.computed(function(){const A=I.value&&I.value.success_rate||0;return A>=80?"color-success":A>=50?"color-warning":"color-danger"});function s(A,te){return A>0&&te/A>=.8?"status-ok":A>0&&te/A>=.5?"status-warn":"status-bad"}async function b(){const A=++d;N.value=!0,F.value=!1;try{const te=window.__quantModules&&window.__quantModules.core||{},Se=typeof te.authHeaders=="function"?te.authHeaders():{},Le=new URLSearchParams({days:String(J.value)});Z.value&&Le.set("task",Z.value),le.value&&Le.set("status",le.value);const[He,wt]=await Promise.all([fetch("/api/system/execution-history?"+Le.toString(),{headers:Se}).then(function(Ye){return Ye.json()}),fetch("/api/system/execution-summary?days="+J.value,{headers:Se}).then(function(Ye){return Ye.json()})]);if(A!==d)return;Q.value=He&&He.data||[],I.value=wt&&wt.data||null}catch(te){console.error("[execution] 执行数据加载失败:",te),F.value=!0}finally{A===d&&(N.value=!1)}}const l=window.__quantModules&&window.__quantModules.i18n||{},g=typeof l.t=="function"?l.t:function(A){return String(A)},X=Vue.ref([]),P=Vue.ref(null),p=Vue.ref(null),c=Vue.ref(""),_=Vue.ref([]),u=Vue.ref(!1);let z=null;const ie=Vue.computed(function(){const A=p.value&&p.value.dates||[];return A.length&&!c.value&&(c.value=A[A.length-1].date),A}),G=Vue.computed(function(){const A=(X.value||[]).find(function(Se){return Se.enabled});if(!A||A.countdown_seconds==null)return"—";const te=A.countdown_seconds;return Math.floor(te/3600)+"h"+String(Math.floor(te%3600/60)).padStart(2,"0")+"m"}),M=Vue.computed(function(){const A=(X.value||[]).find(function(te){return te.enabled});if(!A||A.countdown_seconds==null||A.countdown_seconds<0)return"";try{return new Date(Date.now()+A.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),W=Vue.computed(function(){const A=P.value;return!A||A.phase==="idle"?g("exec.waiting"):A.phase==="running"?g("exec.running")+(A.current_sid?" · "+A.current_sid:""):A.phase==="done"?g("exec.done"):g("exec.failed")}),ne=Vue.computed(function(){return P.value&&P.value.phase==="running"?"loader":"check-circle-2"}),ve=Vue.computed(function(){const A=p.value&&p.value.dates||[];return A.length?A[A.length-1].date:"—"}),Me=Vue.computed(function(){const A=p.value&&p.value.dates||[],te=A[A.length-1];return te&&te.visible?"color-success":"color-danger"}),$=Vue.computed(function(){const A=p.value&&p.value.dates||[],te=A[A.length-1];return te?te.day_view_total:"—"});function ce(A){const te=window.__quantModules&&window.__quantModules.core||{},Se=typeof te.authHeaders=="function"?te.authHeaders():{};return fetch(A,{headers:Se}).then(function(Le){return Le.json()})}async function Re(){const A=++d;try{const[te,Se,Le]=await Promise.all([ce("/api/strategies/execution/plan"),ce("/api/strategies/execution/status"),ce("/api/strategies/execution/results?days=7")]);if(A!==d)return;X.value=te&&te.data&&te.data.plans||[],P.value=Se&&Se.data||null,p.value=Le&&Le.data||null,P.value&&P.value.phase==="running"?se():fe()}catch(te){console.error("[execution-monitor] 监控数据加载失败:",te)}}function se(){fe(),z=setInterval(function(){ce("/api/strategies/execution/status").then(function(A){P.value=A&&A.data||null,P.value&&P.value.phase!=="running"&&(fe(),Re())}).catch(function(){})},5e3)}function fe(){z&&(clearInterval(z),z=null)}async function Te(A){if(!A)return;const te=++d;u.value=!0;try{const Se=await ce("/api/strategies/execution/trace/"+encodeURIComponent(A));if(te!==d)return;const Le=Se&&Se.data||null;_.value=Le&&Le.steps||[]}catch(Se){console.error("[execution-trace] 追溯加载失败:",Se)}finally{te===d&&(u.value=!1)}}Vue.watch(function(){return t.currentSubPage&&t.currentSubPage.value},function(A){A==="execution"?(b(),Re()):fe()},{immediate:!0}),Vue.watch(function(){const A=t.currentSubPage&&t.currentSubPage.value,te=t.filteredConsensusRank&&t.filteredConsensusRank.value||[],Se=t.marketData&&t.marketData.value||{};return{sub:A,split:!!t.detailSplitEnabled.value,top5:te.slice(0,5),rank:te,indices:(Se.indices||[]).map(function(Le){return Le})}},function(A,te){if(A.split){if(A.sub==="overview"){if(!A.top5.length)return;const Se=t.stockDetail&&t.stockDetail.value&&t.stockDetail.value.stock,Le=A.top5.some(function(He){return He.code===Se});(!Se||!Le)&&t.showStockDetail&&t.showStockDetail(A.top5[0].code)}else if(A.sub==="consensus"){if(!A.rank.length)return;const Se=t.stockDetail&&t.stockDetail.value&&t.stockDetail.value.stock,Le=A.rank.some(function(He){return He.code===Se});(!Se||!Le)&&t.showStockDetail&&t.showStockDetail(A.rank[0].code)}else if(A.sub==="market"){if(!A.indices.length)return;const Se=t.indexDetail&&t.indexDetail.value&&t.indexDetail.value.code,Le=A.indices.some(function(He){return He.code===Se});(!Se||!Le)&&t.showIndexDetail&&t.showIndexDetail(A.indices[0])}}},{immediate:!0});const me=Vue.ref("band"),we=["recession","recovery","overheating","stagflation"];function qe(A){if(!A)return null;const te=String(A).split("-"),Se=parseInt(te[0],10),Le=parseInt(te[1]||"1",10);return isFinite(Se)?Se+(Le-1)/12:null}function re(A){const te=Math.floor(A);let Se=Math.round((A-te)*12)+1;return Se>12&&(Se=12),Se<1&&(Se=1),te+"-"+(Se<10?"0"+Se:""+Se)}function ae(){return t.merrillData&&t.merrillData.value&&t.merrillData.value.timing||{}}function ge(){return t.merrillData&&t.merrillData.value&&t.merrillData.value.color||"var(--color-success)"}function Oe(A,te){const Se=ae(),Le=Number(Se.avg_duration_months)||0,He=Math.min(100,Number(Se.progress_percent)||0),wt=qe(Se.current_stage_start_date),Ye=[];let Ke=null;if((A||[]).forEach(function(We){const qt=qe(We.start);Ke==null&&qt!=null&&(Ke=qt);const Ht=!!(We.is_current||wt!=null&&qt===wt&&!We.duration_months),zt=We.name||K(We.stage);if(Ht&&Le>0){const rt=Le*He/100;rt>.5&&Ye.push({stage:We.stage,name:zt,months:rt,live:!0,start:We.start});const Et=Le-rt;Et>.5&&Ye.push({stage:We.stage,name:"剩余(预测)",months:Et,ghost:!0,start:We.start})}else{let rt=Number(We.duration_months)||0;if(!rt&&qt!=null){const Et=qe(We.end);Et!=null&&Et>qt&&(rt=Math.max(1,Math.round((Et-qt)*12)))}rt||(rt=1),Ye.push({stage:We.stage,name:zt,months:rt,live:Ht,start:We.start,end:We.end})}if(Ht&&te&&Le>0){const rt=t.merrillData&&t.merrillData.value&&t.merrillData.value.next_stage_prediction;rt&&Ye.push({stage:rt.next_stage,name:(rt.next_stage_name||"下一阶段")+" (预测)",months:Le,ghost:!0,prob:rt.transition_probability})}}),!Ye.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};const dt=Ye.reduce(function(We,qt){return We+qt.months},0)||1,it=Ke??0;let Y=0,ye=0;const Xe=Ye.map(function(We){const qt=Y;We.ghost||(ye+=We.months),Y+=We.months;const Ht={stage:We.stage,name:We.name,months:Math.round(We.months),ghost:!!We.ghost,live:!!We.live,prob:We.prob,left:qt/dt*100,width:Math.max(2,We.months/dt*100)},zt=qe(We.start),rt=qe(We.end);return Ht.start=zt!=null?re(zt):re(it+qt/12),Ht.end=rt!=null?re(rt):"",Ht.predicted=zt==null,Ht}),mt=Ye[Ye.length-1],at=Ye.some(function(We){return We.ghost}),Nt=mt&&mt.end?mt.end:re(it+dt/12);return{segs:Xe,axisStart:re(it),axisEnd:Nt,nowPct:at?ye/dt*100:null}}function Ae(A){return(A.stages||[]).some(function(te){return te.is_current})}const Be=Vue.computed(function(){const A=t.merrillTimeline&&t.merrillTimeline.value&&t.merrillTimeline.value.cycles||[];if(!A.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};let te=null;for(let Se=A.length-1;Se>=0;Se--)if(Ae(A[Se])){te=A[Se];break}return te||(te=A[A.length-1]),Oe(te.stages,!0)});function St(A){const te=A&&A.stages?A.stages:[];if(!te.length)return"";const Se=te[0]&&te[0].start?String(te[0].start).slice(0,4):"",Le=te[te.length-1]||{},He=Le.end?String(Le.end).slice(0,4):Le.start?String(Le.start).slice(0,4):"";return Se||He?Se?Se+"–"+He:He:""}const Pt=Vue.computed(function(){return(t.merrillTimeline&&t.merrillTimeline.value&&t.merrillTimeline.value.cycles||[]).filter(function(te){return!Ae(te)}).map(function(te){return{label:te.label,years:St(te),segs:Oe(te.stages,!1).segs}})}),xt=we,_e=Vue.computed(function(){return(t.merrillTimeline&&t.merrillTimeline.value&&t.merrillTimeline.value.cycles||[]).map(function(te){const Se={};we.forEach(function(He){Se[He]=0});let Le=null;return(te.stages||[]).forEach(function(He){Se[He.stage]!=null&&(Se[He.stage]+=Number(He.duration_months)||0),He.is_current&&(Le=He.stage)}),{label:te.label,sum:Se,cur:Le}})}),ke=Vue.computed(function(){let A=0;return _e.value.forEach(function(te){we.forEach(function(Se){te.sum[Se]>A&&(A=te.sum[Se])})}),A||1}),Ie=Vue.computed(function(){const A=t.merrillSnapshots&&t.merrillSnapshots.value||[],te=[];return A.forEach(function(Se){const Le=te[te.length-1];Le&&Le.stage===Se.stage?(Le.count++,Le.last=Se.timestamp):te.push({stage:Se.stage,name:Se.stage_name||K(Se.stage),count:1,first:Se.timestamp,last:Se.timestamp})}),te}),De=Vue.computed(function(){return Math.max(100,Math.min(200,Number(ae().progress_percent)||0))}),Je=Vue.computed(function(){const A=Number(ae().progress_percent)||0;return{width:Math.max(0,Math.min(100,A/De.value*100))+"%",background:A>100?"linear-gradient(90deg, "+ge()+", var(--color-warning))":ge()}}),Qe=Vue.computed(function(){return 100/De.value*100}),$e=Vue.computed(function(){const A=ae().predicted_end;if(!A)return"";if(typeof A=="string")return A;const te=A.optimistic||A.earliest||"",Se=A.pessimistic||A.latest||"";return te&&Se?te+" ~ "+Se:A.base||A.mid||te||Se||""});var Ct=22;function bt(A){return"color-mix(in srgb, "+A+" "+Ct+"%, var(--surface-card))"}function vt(A){const te=O(A.stage);return A.ghost?{left:A.left+"%",width:A.width+"%",color:"var(--text-primary)",borderLeft:"3px solid "+te,background:"repeating-linear-gradient(45deg, "+bt(te)+" 0, "+bt(te)+" 5px, var(--surface-card) 5px, var(--surface-card) 10px)"}:{left:A.left+"%",width:A.width+"%",background:bt(te),color:"var(--text-primary)",borderLeft:"3px solid "+te}}function Dt(A){const te=[A.name];return A.start&&te.push((A.predicted?"预计起始 ":"起始 ")+A.start+(A.end?" → "+A.end:"")),A.months&&te.push("约 "+A.months+" 个月"),A.ghost&&te.push("预测(尚未发生)"),A.prob!=null&&te.push("转移概率 "+(A.prob*100).toFixed(0)+"%"),te.join(" · ")}function ta(A,te){const Se=O(A),Le=Math.max(.28,te/ke.value),He=Math.round(14+30*Le);return{background:"color-mix(in srgb, "+Se+" "+He+"%, var(--surface-card))",color:"var(--text-primary)"}}return{...t,todayText:T,tradingStatus:C,merrillNext:q,todayFocus:R,todaySignals:E,merrillConfigOpen:y,getTimelineStageColor:O,getTimelineStageName:K,getTimelineStageDesc:U,mcHistView:me,mcCurrentBand:Be,mcHistoryBands:Pt,mcStageKeys:xt,mcMatrix:_e,mcTrailRuns:Ie,mcProgStyle:Je,mcAvgMark:Qe,mcEndRange:$e,mcSegStyle:vt,mcSegTitle:Dt,mcMxCellStyle:ta,merrillTimeline:v,timelineLoading:i,showTimelineStage:m,execHistory:Q,execSummary:I,execLoading:N,execError:F,execDays:J,execTaskFilter:Z,execStatusFilter:le,execTaskOptions:ee,execSuccessClass:L,loadExecutionData:b,execRateClass:s,execPlan:X,execStatus:P,execResults:p,execTraceDate:c,execTraceSteps:_,execTraceLoading:u,execResultsDates:ie,execCountdownText:G,execNextRunText:M,execPhaseText:W,execStatusIcon:ne,execLastDate:ve,execVisibleClass:Me,execVisibleText:$,loadExecutionTrace:Te}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:`
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
                    <!-- 6.1.1 (A1): 量化术语表子页 -->
                    <div v-else-if="currentSubPage === 'glossary'">
                        <qc-glossary-page />
                    </div>
                    </div>
    `,setup(){const t=a("qcState");if(!t)return{};function y(Y){t.currentSubPage.value=Y}function e(){me(),we(),qe()}Vue.watch(()=>t.currentSubPage&&t.currentSubPage.value,Y=>{Y==="autoeval"&&t.loadAiVendors&&t.loadAiVendors(),Y==="datadict"&&_(),Y==="health"&&g(),Y==="notification"&&e()});const d=t.themeHues||[45,220,0,140,270,320,-1],f=t.themeHueNames||{},D=t.themeMode||Vue.computed(()=>"light"),h=t.themeHue||Vue.ref(45);function r(Y){t.changeThemeMode&&t.changeThemeMode(Y)}function w(Y){t.changeThemeHue&&t.changeThemeHue(parseInt(Y,10))}function o(Y){return t.hueColor?t.hueColor(Y):Y<0?"hsl(0, 0%, 46%)":"hsl("+Y+", 75%, 42%)"}function S(Y){return t.hueName?t.hueName(Y):f[Y]||"自定义 "+Y}function k(Y){t.setNavMode&&t.setNavMode(Y)}const T=Vue.ref([]),C=Vue.ref(""),q=Vue.ref("read"),R=Vue.ref(""),E=Vue.ref(!1),v=()=>window.__quantModules&&window.__quantModules.core||{},i=Vue.ref([]),m=Vue.ref(!1);async function O(){m.value=!0;try{const Y=await fetch("/api/audit/logs?limit=20",{headers:v().authHeaders?v().authHeaders():{}}).then(function(ye){if(!ye.ok)throw new Error("HTTP "+ye.status);return ye.json()});i.value=Y&&Y.logs||[]}catch(Y){console.error("[system] 审计加载失败:",Y),i.value=[]}finally{m.value=!1}}const K=Vue.ref(!1),B=Vue.ref(null),U=Vue.ref(null),Q=Vue.ref([]),I=Vue.ref(null);function N(Y){return Y==="completed"?"完成":Y==="running"?"运行中":Y==="pending"?"排队中":Y==="cancelled"?"已取消":"失败"}async function F(){try{const ye=await(await fetch("/api/jobs?limit=20")).json();ye&&ye.success&&(Q.value=ye.data&&ye.data.tasks||[])}catch(Y){console.warn("[system] 加载任务队列失败:",Y)}}async function J(Y){try{await fetch("/api/jobs/"+Y+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),F()}catch(ye){console.warn("[system] 取消任务失败:",ye)}}function Z(){F(),I.value=window.setInterval(F,15e3)}const le=Vue.ref({items:[]}),ee=Vue.ref([]),L=Vue.ref(null),s=Vue.ref({data_sources:[],alerts:[]}),b=function(){return v().authHeaders?v().authHeaders():{}},l=function(Y){return fetch(Y,{headers:b()}).then(function(ye){if(!ye.ok)throw new Error("HTTP "+ye.status);return ye.json()})};async function g(){K.value=!0,B.value=null;try{const[Y,ye,Xe,mt]=await Promise.all([l("/api/reliability/freshness"),l("/api/reliability/heal-history?limit=20"),l("/api/reliability/startup-report"),l("/api/reliability/source-health")]);le.value=Y&&Y.data||{items:[]},ee.value=ye&&ye.data||[],L.value=Xe&&Xe.data||null,s.value=mt||{data_sources:[],alerts:[]},U.value=new Date().toLocaleTimeString()}catch(Y){console.warn("[health] 加载失败:",Y),B.value="健康数据加载失败: "+(Y.message||""),le.value={items:[]},ee.value=[]}finally{K.value=!1}}const X=Vue.ref(!1),P=Vue.ref(""),p=Vue.ref(""),c=Vue.ref({fields:[]});async function _(){X.value=!0,P.value="";try{const Y="/api/data-dict"+(p.value?"?category="+p.value:""),ye=await l(Y);c.value=ye&&ye.data||{fields:[]}}catch(Y){console.warn("[dict] 加载失败:",Y),P.value="数据字典加载失败: "+(Y.message||""),c.value={fields:[]}}finally{X.value=!1}}function u(Y){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[Y]||"var(--text-secondary)"}function z(Y){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[Y]||Y}const ie=Vue.computed(()=>(le.value?le.value.items||[]:[]).filter(ye=>ye.status==="stale"||ye.status==="missing").length),G=Vue.ref("rules"),M=Vue.ref([]),W=Vue.ref([]),ne=Vue.ref([]),ve=Vue.ref(!1),Me=Vue.ref(""),$=Vue.ref("price_above"),ce=Vue.ref(""),Re=Vue.ref(!1),se=Vue.ref(60),fe=Vue.ref("");function Te(Y){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[Y]||Y}async function me(){ve.value=!0;try{const Y=await(await fetch("/api/alerts/rules")).json();M.value=Y&&Y.rules||[]}catch(Y){fe.value="规则加载失败: "+Y}finally{ve.value=!1}}async function we(){ve.value=!0;try{const Y=await(await fetch("/api/alerts/history?limit=50")).json();W.value=Y&&Y.history||[]}catch(Y){fe.value="历史加载失败: "+Y}finally{ve.value=!1}}async function qe(){ve.value=!0;try{const Y=await(await fetch("/api/alerts/channels")).json(),ye=await(await fetch("/api/alerts/silence")).json();ne.value=Y&&Y.channels||[],Re.value=!!(ye&&ye.silenced)}catch(Y){fe.value="通道状态加载失败: "+Y}finally{ve.value=!1}}function re(Y){G.value=Y,Y==="rules"?me():Y==="history"?we():qe()}async function ae(){const Y=Me.value.trim();if(!Y){fe.value="请填写股票代码";return}ve.value=!0;try{const ye={stock_code:Y,rule_type:$.value};if($.value!=="new_pool"){const mt=Number(ce.value);if(isNaN(mt)){fe.value="阈值必须为数值";return}ye.threshold=mt}const Xe=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ye)})).json();Xe&&Xe.rule?(fe.value="规则已添加",Me.value="",ce.value="",me()):fe.value=Xe&&Xe.detail||"添加失败"}catch(ye){fe.value="添加失败: "+ye}finally{ve.value=!1}}async function ge(Y){try{await fetch("/api/alerts/rules/"+Y.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!Y.enabled})}),Y.enabled=!Y.enabled}catch(ye){fe.value="切换失败: "+ye}}async function Oe(Y){try{const ye=await(await fetch("/api/alerts/rules/"+Y.id,{method:"DELETE"})).json();ye&&ye.success?(fe.value="规则已删除",me()):fe.value="删除失败"}catch(ye){fe.value="删除失败: "+ye}}async function Ae(){try{const Y=Re.value?se.value:0,ye=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:Y})})).json();Re.value=!!(ye&&ye.silenced),fe.value=Re.value?"已静默":"已恢复推送"}catch(Y){fe.value="静默设置失败: "+Y}}async function Be(){Re.value=!1,await Ae()}function St(Y){return!!Y&&!Y.degraded}const Pt=Vue.computed(()=>(t&&t.analyticsRank&&t.analyticsRank.value||[]).reduce((ye,Xe)=>Math.max(ye,Xe.views||0),0)||1),xt=()=>v().OPENAPI_ROUTE_BASE||"/api/openapi";async function _e(){E.value=!0;try{const Y=await v().apiFetch(xt()+"/keys");T.value=Y&&Y.data||[]}catch(Y){ElementPlus.ElMessage.error("加载 API Key 失败: "+(Y.message||""))}finally{E.value=!1}}async function ke(){try{const Y=await v().apiFetch(xt()+"/keys",{method:"POST",body:JSON.stringify({name:C.value||"未命名",role:q.value||"read",expire_days:365})});Y&&Y.success?(R.value=Y.api_key||"",C.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await _e()):ElementPlus.ElMessage.error(Y&&(Y.detail||Y.message)||"生成失败")}catch(Y){ElementPlus.ElMessage.error("生成失败: "+(Y.message||""))}}async function Ie(){if(R.value)try{await navigator.clipboard.writeText(R.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function De(Y){try{const ye=await v().apiFetch(xt()+"/keys/"+Y.id,{method:"DELETE"});ye&&ye.success?(ElementPlus.ElMessage.success("Key 已吊销"),R.value&&Y.prefix&&R.value.includes(Y.prefix)&&(R.value=""),await _e()):ElementPlus.ElMessage.error(ye&&(ye.detail||ye.message)||"吊销失败")}catch(ye){ElementPlus.ElMessage.error("吊销失败: "+(ye.message||""))}}const Je={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function Qe(Y){return Je[Y]||Y}const $e=computed(()=>{var Y;return(((Y=t.healthMetrics)==null?void 0:Y.value)||[]).map(ye=>({name:Qe(ye.name),source:ye.name,success_rate:ye.success_rate,avg_latency_ms:ye.avg_latency_ms,calls:ye.calls||0,degraded:!!ye.degraded,data_age_hours:ye.data_age_hours!=null?ye.data_age_hours:null,stale:!!ye.stale,last_fetch:ye.last_fetch||ye.last_success||null}))});function Ct(Y){return Y.degraded?"degraded":Y.success_rate==null?"unknown":Y.success_rate>=90?"ok":Y.success_rate>=60?"warn":"bad"}function bt(Y){return Y==null?"":Y<1?"刚刚":Y<24?Math.round(Y)+"小时前":Math.floor(Y/24)+"天前"}const vt=t.aiUsage||Vue.ref({}),Dt=Vue.computed(()=>{const Y=vt.value&&vt.value.by_model||{};return Object.entries(Y).map(([ye,Xe])=>({name:ye,count:Xe})).sort((ye,Xe)=>Xe.count-ye.count)}),ta=Vue.computed(()=>Dt.value.reduce((Y,ye)=>Math.max(Y,ye.count),0)||1),A=Vue.computed(()=>Dt.value.reduce((Y,ye)=>Y+ye.count,0)||1),te=Vue.computed(()=>Se.value.reduce((Y,ye)=>Math.max(Y,ye.count),0)||0),Se=Vue.computed(()=>{const Y=vt.value&&vt.value.by_day||{},ye=[],Xe=new Date;for(let mt=29;mt>=0;mt--){const at=new Date(Xe.getFullYear(),Xe.getMonth(),Xe.getDate()-mt),Nt=at.getFullYear()+"-"+String(at.getMonth()+1).padStart(2,"0")+"-"+String(at.getDate()).padStart(2,"0");ye.push({day:Nt,count:Y[Nt]||0})}return ye}),Le=Vue.computed(()=>Se.value.reduce((Y,ye)=>Math.max(Y,ye.count),0)||1),He=Vue.computed(()=>{const Y=vt.value&&vt.value.by_day||{},ye=new Date,Xe=ye.getFullYear()+"-"+String(ye.getMonth()+1).padStart(2,"0")+"-"+String(ye.getDate()).padStart(2,"0");return Y[Xe]||0}),wt=Vue.computed(()=>{const Y=vt.value&&vt.value.by_day||{},ye=Object.keys(Y).filter(Xe=>(Y[Xe]||0)>0);return ye.length?ye[ye.length-1]:""});function Ye(Y){t.analyticsDays&&(t.analyticsDays.value=Y),typeof t.loadAnalytics=="function"&&t.loadAnalytics()}const Ke='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',dt='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function it(Y){return Y?dt:Ke}return Z(),{...t,themeHues:d,themeHueNames:f,themeMode:D,themeHue:h,onThemeModeChange:r,setThemeHue:w,hueColor:o,hueName:S,onNavModeChange:k,analyticsMaxViews:Pt,aiModelRank:Dt,aiModelMax:ta,aiDayTrend:Se,aiDayMax:Le,todayAiCalls:He,lastAiCallDay:wt,aiTotal:A,aiDayPeak:te,setAnalyticsDays:Ye,viewIcon:it,openApiKeys:T,openApiKeyName:C,openApiKeyRole:q,newOpenApiKey:R,openApiLoading:E,loadOpenApiKeys:_e,generateOpenApiKey:ke,copyOpenApiKey:Ie,revokeOpenApiKey:De,healthRows:$e,healthClass:Ct,fmtAge:bt,staleAssetCount:ie,jobQueue:Q,loadJobQueue:F,cancelJob:J,jobStatusText:N,auditLogs:i,auditLoading:m,loadAuditLogs:O,healthLoading:K,healthError:B,healthUpdatedAt:U,freshnessData:le,healHistory:ee,startupReport:L,sourceHealth:s,refreshHealth:g,statusColor:u,statusLabel:z,sourceOk:St,dictLoading:X,dictError:P,dictCategory:p,dictData:c,loadDataDict:_,ncTab:G,ncRules:M,ncHistory:W,ncChannels:ne,ncLoading:ve,ncNewCode:Me,ncNewType:$,ncNewThreshold:ce,ncSilence:Re,ncSilenceMinutes:se,ncMsg:fe,ncTypeLabel:Te,onNcTab:re,loadAlertRules:me,loadAlertHistory:we,loadAlertChannels:qe,addAlertRule:ae,toggleAlertRule:ge,removeAlertRule:Oe,applySilence:Ae,clearSilence:Be,goSystemSub:y}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:`
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
                </div>`,setup(){const{ref:t,watch:y,onUnmounted:e}=Vue,d=a("qcState");if(!d)return{};function f(){if(!d.hasMoreAiHistory||!d.loadMoreAiHistory||d.currentPage.value!=="ai"||d.currentSubPage.value!=="history")return;const ve=document.documentElement;ve.scrollTop+window.innerHeight>=ve.scrollHeight-300&&d.loadMoreAiHistory()}window.addEventListener("scroll",f,{passive:!0}),e(()=>window.removeEventListener("scroll",f));const D=t(null),h=t(!1),r=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function w(ve){return!ve||ve.total===0||ve.rate===null||ve.rate===void 0?"--":ve.rate.toFixed(2)+"%"}const o=t(5);function S(ve){o.value=ve}function k(ve,Me){if(!ve)return"--";if(ve.available===!1)return"— 数据不可达";const $=ve["hit_n"+Me];return $===!0?"✓ 命中":$===!1?"✗ 未中":"– 中性/待验证"}async function T(){h.value=!0;try{const Me=await(await fetch("/api/ai/track")).json();D.value=Me&&Me.success?Me.data:null}catch(ve){console.warn("[eval-track] 评估命中率加载失败:",ve),D.value=null}finally{h.value=!1}}y(function(){return d.currentPage.value+"/"+d.currentSubPage.value},function(ve){ve==="ai/evaluation-analysis"&&T()},{immediate:!0});const C=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:q,summary:R,trades:E,loading:v,loadError:i,showAddForm:m,addForm:O,addSaving:K,tradeFormVisible:B,tradeForm:U,tradeSaving:Q,portfolioTab:I,equityDays:N,equityLoading:F,equityNote:J,equityHasData:Z,loadPortfolio:le,addPosition:ee,removePosition:L,openTradeForm:s,submitTrade:b,loadTrades:l,loadEquity:g,fmtSigned:X,fmtSignedPct:P,signClass:p,riskTab:c,riskLoading:_,riskNote:u,riskHasData:z,riskData:ie,riskMetricList:G,loadRisk:M}=C;y(q,function(ve){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((ve||[]).map(function(Me){return{code:Me.stock_code,name:Me.stock_name||Me.stock_code}}))},{deep:!0}),y(function(){return d.currentPage.value+"/"+d.currentSubPage.value},function(ve){ve==="ai/portfolio"?(le(),l(),g(N?N.value:30),typeof M=="function"&&M()):ve==="ai/overview"&&le()},{immediate:!0});let W="",ne=!1;return y(function(){const ve=d.currentSubPage&&d.currentSubPage.value,Me=!!(d.detailSplitEnabled&&d.detailSplitEnabled.value),$={sub:ve,split:Me,kind:"",view:"",key:"",first:null,expandList:null,expandFn:null};if(ve==="history"){const ce=d.aiHistoryView&&d.aiHistoryView.value||"date",Re=ce==="date"?d.groupedByDate:ce==="month"?d.groupedByMonth:d.aiHistoryByStock,se=Re&&Re.value||{},fe=Object.keys(se);$.kind="history",$.view=ce,$.key=fe.length?fe[0]:"",$.first=fe.length&&(se[fe[0]]||[])[0]||null,$.expandList=ce==="date"?d.expandedDates:ce==="month"?d.expandedMonths:d.expandedStocks,$.expandFn=ce==="date"?d.toggleDateExpand:ce==="month"?d.toggleMonthExpand:d.toggleStockExpand}else if(ve==="chat_history"){const ce=d.chatHistoryView&&d.chatHistoryView.value||"date",Re=ce==="date"?d.chatGroupedByDate:ce==="month"?d.chatGroupedByMonth:d.chatGroupedByStock,se=Re&&Re.value||{},fe=Object.keys(se);$.kind="chat",$.view=ce,$.key=fe.length?fe[0]:"",$.first=fe.length&&(se[fe[0]]||[])[0]||null,$.expandList=ce==="date"?d.expandedChatDates:ce==="month"?d.expandedChatMonths:d.expandedChatStocks,$.expandFn=ce==="date"?d.toggleChatDateExpand:ce==="month"?d.toggleChatMonthExpand:d.toggleChatStockExpand}return $},function(ve){if(!ve.split||!ve.first||!ve.kind)return;const Me=ve.sub!==W,$=d.stockDetail&&d.stockDetail.value,ce=!!($&&$.stock);if(!Me&&ce||ne)return;W=ve.sub,ne=!0;try{ve.key&&ve.expandList&&ve.expandFn&&ve.expandList.value&&ve.expandList.value.indexOf(ve.key)<0&&ve.expandFn(ve.key)}catch{}const Re=ve.kind==="history"?d.viewAiResult(ve.first):d.viewChatSession(ve.first);Re&&typeof Re.finally=="function"?Re.finally(function(){ne=!1}):ne=!1},{immediate:!0}),{...d,trackData:D,trackLoading:h,trackWindows:r,fmtTrackRate:w,loadTrack:T,trackWindow:o,setTrackWindow:S,trackHitText:k,positions:q,summary:R,trades:E,loading:v,loadError:i,showAddForm:m,addForm:O,addSaving:K,tradeFormVisible:B,tradeForm:U,tradeSaving:Q,portfolioTab:I,equityDays:N,equityLoading:F,equityNote:J,equityHasData:Z,loadPortfolio:le,addPosition:ee,removePosition:L,openTradeForm:s,submitTrade:b,loadTrades:l,loadEquity:g,fmtSigned:X,fmtSignedPct:P,signClass:p,riskTab:c,riskLoading:_,riskNote:u,riskHasData:z,riskData:ie,riskMetricList:G,loadRisk:M}}}})();(function(){const{ref:a,computed:t,watch:y,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:`
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
                </div>`,setup(){const d=e("qcState"),f=Vue.ref(!1),D=Vue.ref(!1);let h=0;if(!d)return{};const r=a(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function w(x){r.value=x;try{localStorage.setItem("quant_strategy_mode",x)}catch{}d.currentSubPage.value="strategy-manage"}const o=a([]),S=a(!1),k=a(!1),T=a(""),C=a(null),q=a(!1),R=a(!1);async function E(){const x=++h;S.value=!0,k.value=!1;try{const n=await fetch("/api/market/reviews?limit=30",{headers:Y()}).then(V=>V.json());if(x!==h)return;n&&n.success?o.value=Array.isArray(n.data)?n.data:[]:k.value=!0}catch(n){console.error("[market-review] 复盘列表加载失败:",n),k.value=!0}finally{x===h&&(S.value=!1)}}function v(x){T.value=x,B(x)}function i(x){T.value===x?K():v(x)}function m(x){return x==null||isNaN(Number(x))?"—":(Number(x)>=0?"+":"")+Number(x).toFixed(2)+"%"}function O(x){return x==null||isNaN(Number(x))?"—":Number(x).toFixed(2)}function K(){T.value="",C.value=null,R.value=!1}async function B(x){const n=++h;q.value=!0,R.value=!1,C.value=null;try{const V=x?"/api/market/review?date="+encodeURIComponent(x):"/api/market/review",oe=await fetch(V,{headers:Y()}).then(Ce=>Ce.json());if(n!==h)return;oe&&oe.success?C.value=oe.data:R.value=!0}catch(V){console.error("[market-review] 复盘详情加载失败:",V),R.value=!0}finally{n===h&&(q.value=!1)}}function U(x){return x>0?"up":x<0?"down":"flat"}function Q(x){return x==null||isNaN(Number(x))?"—":(x>0?"+":"")+Number(x).toFixed(2)+"%"}function I(x){const n={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(x||{}).map(function(V){const oe=V[0],Ce=V[1],Ee=!Ce||Ce==="unavailable"||Ce==="数据不可达";return{label:n[oe]||oe,value:Ee?"数据不可达":Ce,unavailable:Ee}})}const N=a([]),F=a(!1),J=a(!1),Z=a(""),le=a(""),ee=a(""),L=a({}),s=a(!1),b=a(""),l=a(""),g=a([]),X=a([]),P=a(""),p=a(""),c=a(!0),_=a(!0),u=a("20:00"),z=a("default"),ie=a(!1),G=a(""),M=t(function(){return N.value.find(function(x){return x.id===ee.value})||null});async function W(x,n){n=n||{},n.headers=Object.assign({},n.headers||{});const V=localStorage.getItem("quant_token")||"";return V&&(n.headers.Authorization="Bearer "+V),fetch(x,n)}async function ne(){const x=++h;F.value=!0,J.value=!1,Z.value="",le.value="";try{const n=await W("/api/strategies").then(function(oe){return oe.json()});if(x!==h)return;let V=null;Array.isArray(n)?V=n:n&&Array.isArray(n.strategies)?(V=n.strategies,n.warn&&(le.value=String(n.warn))):(J.value=!0,Z.value=n&&n.detail?String(n.detail):"策略列表加载失败（接口返回异常）"),V!==null&&(N.value=V,N.value.length&&!ee.value&&(ee.value=N.value[0].id,ve()))}catch(n){console.error("[research] 策略列表加载失败:",n),J.value=!0,Z.value="策略列表加载失败: "+(n&&n.message||"网络错误")}finally{x===h&&(F.value=!1)}}function ve(){const x=M.value;x&&(L.value={},x.schema.forEach(function(n){L.value[n.key]=n.default}),l.value="",re(),Me(),se())}async function Me(){if(!ee.value){X.value=[];return}try{const x=await W("/api/strategies/"+ee.value+"/profiles").then(function(n){return n.json()});X.value=x&&x.data&&x.data.profiles||[],P.value=""}catch(x){console.error("[research] 方案列表加载失败:",x),X.value=[]}}async function $(){f.value=!0;const x=(p.value||"").trim();if(!x){window._core&&window._core.showToast("请输入方案名称");return}try{const n=await W("/api/strategies/"+ee.value+"/profiles",{method:"POST",body:JSON.stringify({name:x,params:L.value})}).then(function(V){return V.json()});if(n&&n.detail){window._core&&window._core.showToast(String(n.detail));return}p.value="",await Me(),window._core&&window._core.showToast("方案已保存")}catch(n){console.error("[research] 方案保存失败:",n),window._core&&window._core.showToast("方案保存失败")}}function ce(){const x=X.value.find(function(n){return n.id===P.value});x&&(Object.keys(x.params||{}).forEach(function(n){L.value[n]=x.params[n]}),window._core&&window._core.showToast("已应用方案: "+x.name))}async function Re(){if(P.value)try{await W("/api/strategies/"+ee.value+"/profiles/"+P.value,{method:"DELETE"}).then(function(x){return x.json()}),await Me(),window._core&&window._core.showToast("方案已删除")}catch(x){console.error("[research] 方案删除失败:",x)}}async function se(){try{const x=await W("/api/strategies/governance").then(function(oe){return oe.json()}),V=(x&&x.data&&x.data.strategies||{})[ee.value]||{};c.value=V.enabled!==!1,u.value=V.schedule||"20:00",z.value=V.universe==="all"?"all":"default",_.value=V.show_in_calendar!==!1,G.value=V.last_holdings||""}catch(x){console.error("[research] 纳管状态加载失败:",x)}}async function fe(){try{await W("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const x={};return x[ee.value]={enabled:c.value,schedule:u.value,universe:z.value,show_in_calendar:_.value},x}()})}).then(function(x){return x.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(x){console.error("[research] 纳管更新失败:",x)}}async function Te(){if(ee.value){ie.value=!0;try{const x=await W("/api/strategies/"+ee.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:b.value||void 0})}).then(function(n){return n.json()});if(x&&x.detail){window._core&&window._core.showToast(String(x.detail));return}window._core&&window._core.showToast("持仓已生成"),await se()}catch(x){console.error("[research] run-once 失败:",x),window._core&&window._core.showToast("持仓生成失败")}finally{ie.value=!1}}}function me(){G.value&&window.open(G.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function we(){const x=M.value;if(!x)return;const n=(p.value||"").trim()||x.name+"-副本";qe(n,Object.assign({},L.value)),window._core&&window._core.showToast("已复制为副本方案: "+n)}async function qe(x,n){try{await W("/api/strategies/"+ee.value+"/profiles",{method:"POST",body:JSON.stringify({name:x,params:n})}).then(function(V){return V.json()}),await Me()}catch(V){console.error("[research] 副本保存失败:",V)}}async function re(){const x=++h;if(ee.value)try{const n=await W("/api/strategies/"+ee.value+"/runs?limit=5").then(function(V){return V.json()});if(x!==h)return;g.value=Array.isArray(n)?n:[]}catch{g.value=[]}}async function ae(){if(ee.value){s.value=!0;try{const x=await W("/api/strategies/"+ee.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:L.value,as_of:b.value||void 0})}).then(function(n){return n.json()});x&&x.status==="success"?re():alert("运行失败: "+(x.detail||JSON.stringify(x)))}catch(x){console.error("[research] 策略运行失败:",x),alert("运行失败: "+x.message)}finally{s.value=!1}}}async function ge(){if(ee.value)try{const x=Object.keys(L.value).map(function(V){return encodeURIComponent(V)+"="+encodeURIComponent(L.value[V])}).join("&"),n=await W("/api/strategies/"+ee.value+"/ptrade-code?"+x).then(function(V){return V.json()});n&&n.code?l.value=n.code:alert("导出失败: "+(n.detail||JSON.stringify(n)))}catch(x){console.error("[research] PTrade 导出失败:",x),alert("导出失败: "+x.message)}}function Oe(){if(!l.value)return;const x=document.createElement("textarea");x.value=l.value,document.body.appendChild(x),x.select();try{document.execCommand("copy")}catch{}document.body.removeChild(x)}y(function(){return d.currentPage.value+"/"+d.currentSubPage.value},function(x){x==="research/research-overview"&&(ne(),E(),ye(),aa()),(x==="research/market-review"||x==="shortterm/market-review")&&!T.value&&E(),x==="research/quant-research"&&ne(),x==="research/backtest-history"&&Pe()},{immediate:!0});const Ae=a("mom20"),Be=a(!1),St=a(!1),Pt=a(null),xt=a(null),_e=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],ke=a('{"top_n":[10,20,30]}'),Ie=a(null),De=a(""),Je=a(!1),Qe=a(null);async function $e(){if(!ee.value){ElementPlus.ElMessage.warning("请先选择策略");return}let x;try{x=JSON.parse(ke.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!x||Object.keys(x).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}Je.value=!0,Ie.value=null,De.value="";try{const n=await fetch("/api/strategies/"+ee.value+"/sweep",{method:"POST",headers:Y(),body:JSON.stringify({param_grid:x})}).then(function(V){return V.json()});n&&Array.isArray(n.results)?(Ie.value=n.results,De.value="完成 "+n.count+" 组"+(n.data_degraded?" (数据不可达, 结果降级)":""),Qe.value=n.param_stability||null):De.value=n&&n.detail||"扫描失败"}catch(n){console.error("[sweep]",n),De.value="扫描失败: "+n.message}finally{Je.value=!1}}async function Ct(){const x=++h;Be.value=!0;try{const n=await W("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:ee.value||"multi_factor",factor_key:Ae.value,params:L.value||{}})}).then(function(oe){return oe.json()}),V=n&&n.report?n.report.n1||{}:{};Pt.value=V}catch(n){console.error("[research] 因子IC分析失败:",n),alert("因子 IC 分析失败: "+n.message)}finally{x===h&&(Be.value=!1)}}async function bt(){const x=++h;St.value=!0;try{const n=await W("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:ee.value||"multi_factor",factor_key:Ae.value,params:L.value||{}})}).then(function(V){return V.json()});n&&n.layers?xt.value=n:alert("分层回测: "+(n.message||"无数据"))}catch(n){console.error("[research] 分层回测失败:",n),alert("分层回测失败: "+n.message)}finally{x===h&&(St.value=!1)}}const vt=a(null),Dt=a(!1);async function ta(){const x=++h;Dt.value=!0,vt.value=null;try{const n=await W("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:ee.value||"multi_factor",factor_key:Ae.value,params:L.value||{}})}).then(function(V){return V.json()});n&&n.detail?vt.value=n.detail:alert("因子详情: "+(n.message||"无数据"))}catch(n){console.error("[research] 因子详情失败:",n),alert("因子详情失败: "+n.message)}finally{x===h&&(Dt.value=!1)}}const A=a([]),te=a(null),Se=a(null),Le=a(null),He=a(""),wt=a(!1),Ye=a(!1),Ke=a(""),dt=a(""),it=a("");function Y(){const x=localStorage.getItem("quant_token")||"";return x?{Authorization:"Bearer "+x,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function ye(){const x=++h;try{const n=await fetch("/api/strategies/variants",{headers:Y()}).then(function(V){return V.json()});if(x!==h)return;A.value=n&&n.data&&n.data.variants||[]}catch(n){console.error("[i3a] 加载 variants 失败:",n)}}async function Xe(){if(!ee.value){Ke.value="请先在量化研究选择母本策略";return}Ye.value=!0,Ke.value="";try{const x=await fetch("/api/strategies/"+ee.value+"/clone",{method:"POST",headers:Y(),body:JSON.stringify({name:(p.value||"").trim()||void 0,params:Object.assign({},L.value)})}).then(function(V){return V.json()});if(x&&x.detail){Ke.value=String(x.detail);return}const n=x&&x.data;n&&n.sid&&(te.value=n.sid,Ke.value="已复制为新策略: "+n.name,await ye(),await at(n.sid))}catch(x){console.error("[i3a] 复制失败:",x),Ke.value="复制失败: "+x.message}finally{Ye.value=!1}}async function mt(x){te.value=x,Ke.value="",He.value="",await at(x)}async function at(x){try{const n=await fetch("/api/strategies/"+x+"/selection-spec",{headers:Y()}).then(function(V){return V.json()});n&&n.data&&n.data.spec&&(Se.value=Object.assign({},n.data.spec),Le.value=n.data.fields,dt.value=(n.data.spec.industry_scope||[]).join(","),it.value=(n.data.spec.market_cap_range||[]).join(","))}catch(n){console.error("[i3a] 加载 spec 失败:",n)}}async function Nt(){if(D.value=!0,!(!te.value||!Se.value))try{Se.value.industry_scope=dt.value?dt.value.split(/[,，]/).map(function(n){return n.trim()}).filter(Boolean):[],Se.value.market_cap_range=it.value?it.value.split(/[,，]/).map(Number).filter(function(n){return!isNaN(n)}):[];const x=await fetch("/api/strategies/"+te.value+"/selection-spec",{method:"PUT",headers:Y(),body:JSON.stringify({spec:Se.value})}).then(function(n){return n.json()});x&&x.data&&x.data.spec&&(Se.value=x.data.spec,Ke.value="SelectionSpec 已保存")}catch(x){console.error("[i3a] 保存 spec 失败:",x),Ke.value="保存失败"}}async function We(){if(!te.value){Ke.value="请先选择/创建微调策略";return}Ye.value=!0,Ke.value="";try{const x=await fetch("/api/strategies/"+te.value+"/run-once",{method:"POST",headers:Y(),body:"{}"}).then(function(n){return n.json()});Ke.value=x&&x.detail?String(x.detail):"持仓已生成: "+(x&&x.data&&x.data.symbols||0)+" 只"}catch(x){console.error("[i3a] run-once 失败:",x),Ke.value="生成持仓失败"}finally{Ye.value=!1}}async function qt(){if(!te.value){Ke.value="请先选择/创建微调策略";return}Se.value||await at(te.value),wt.value=!0,Ke.value="";try{const x=await fetch("/api/strategies/"+te.value+"/ai-trade-code",{method:"POST",headers:Y(),body:JSON.stringify({spec:Se.value})}).then(function(n){return n.json()});if(x&&x.detail){Ke.value=String(x.detail);return}x&&x.data&&(He.value=x.data.code||"",x.data.api_errors&&x.data.api_errors.length?Ke.value="生成成功(含 API 校验告警 "+x.data.api_errors.length+" 条)":Ke.value="AI 交易码已生成, 已通过矩阵内校验")}catch(x){console.error("[i3a] AI 交易码失败:",x),Ke.value="AI 生成失败: "+x.message}finally{wt.value=!1}}function Ht(){if(He.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(He.value).then(function(){Ke.value="代码已复制"});else{const x=document.createElement("textarea");x.value=He.value,document.body.appendChild(x),x.select(),document.execCommand("copy"),document.body.removeChild(x),Ke.value="代码已复制"}}const zt=a(""),rt=a(""),Et=a([]),Bt=a(""),Gt=a(""),gt=a(""),ct=a(null),Wt=a(!1),Mt=a(!1),$t=a(!1);function Yt(){const x=localStorage.getItem("quant_token")||"";return x?{Authorization:"Bearer "+x,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function aa(){const x=++h;try{const n=await fetch("/api/strategies/custom",{headers:Yt()}).then(function(V){return V.json()});if(x!==h)return;Et.value=n&&n.data&&n.data.customs||[]}catch(n){console.error("[i3b] 加载自定义策略失败:",n)}}async function pt(){if(!rt.value.trim()){gt.value="请描述策略思路";return}Wt.value=!0,gt.value="";try{const x=await fetch("/api/strategies/custom",{method:"POST",headers:Yt(),body:JSON.stringify({name:zt.value.trim()||"自定义策略",prompt:rt.value})}).then(function(n){return n.json()});if(x&&x.detail){gt.value=String(x.detail);return}x&&x.data&&(Gt.value=x.data.code||"",gt.value="AI 代写成功: "+x.data.sid+(x.data.api_errors&&x.data.api_errors.length?" (API 告警 "+x.data.api_errors.length+" 条)":" (校验通过)"),await aa())}catch(x){console.error("[i3b] AI 代写失败:",x),gt.value="AI 代写失败: "+x.message}finally{Wt.value=!1}}async function sa(){if(Bt.value)try{const x=await fetch("/api/strategies/custom/"+Bt.value+"/code",{headers:Yt()}).then(function(n){return n.json()});x&&x.data&&(Gt.value=x.data.code||"",gt.value="")}catch(x){console.error("[i3b] 读取代码失败:",x)}}async function la(){if(!Bt.value){gt.value="请先选择自定义策略";return}Mt.value=!0,gt.value="";try{const x=await fetch("/api/strategies/custom/"+Bt.value+"/backtest",{method:"POST",headers:Yt(),body:"{}"}).then(function(n){return n.json()});if(x&&x.detail){gt.value=String(x.detail);return}x&&x.data&&(ct.value=x.data,gt.value="回测完成")}catch(x){console.error("[i3b] 回测失败:",x),gt.value="回测失败: "+x.message}finally{Mt.value=!1}}async function ma(){if(!Bt.value){gt.value="请先选择自定义策略";return}$t.value=!0,gt.value="";try{const x=await fetch("/api/strategies/custom/"+Bt.value+"/ai-optimize",{method:"POST",headers:Yt(),body:JSON.stringify({backtest:ct.value})}).then(function(n){return n.json()});if(x&&x.detail){gt.value=String(x.detail);return}x&&x.data&&(Gt.value=x.data.code||"",gt.value="AI 优化完成"+(x.data.api_errors&&x.data.api_errors.length?" (API 告警 "+x.data.api_errors.length+" 条)":" (校验通过)"))}catch(x){console.error("[i3b] AI 优化失败:",x),gt.value="AI 优化失败: "+x.message}finally{$t.value=!1}}function ha(){if(Gt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Gt.value).then(function(){gt.value="代码已复制"});else{const x=document.createElement("textarea");x.value=Gt.value,document.body.appendChild(x),x.select(),document.execCommand("copy"),document.body.removeChild(x),gt.value="代码已复制"}}const oa=Vue.ref([]),H=Vue.ref(!1),xe=Vue.ref(!1),je=Vue.ref(30);async function Pe(){const x=++h;H.value=!0,xe.value=!1;try{const n=window.__quantModules&&window.__quantModules.core||{},V=typeof n.authHeaders=="function"?n.authHeaders():{},oe=await fetch("/api/backtest/history?days="+je.value,{headers:V}).then(function(Ce){return Ce.json()});if(x!==h)return;oa.value=oe&&oe.data||[]}catch(n){console.error("[backtest] 回测历史加载失败:",n),xe.value=!0}finally{x===h&&(H.value=!1)}}const ot=Vue.ref([]),Ze=Vue.ref(!1),Rt=Vue.ref(!1),Ot=Vue.ref(""),Kt=Vue.ref([]),pa=Vue.ref(""),ya=Vue.ref([]),ba=Vue.ref(!1),na=Vue.ref(!1),Ra={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function ra(x){return Ra[x]||x||"—"}function za(x){d&&d.navigateTo&&d.navigateTo("shortterm",x)}function ca(){d.currentSubPage.value="research-history",qa()}async function qa(){const x=++h;Ze.value=!0,Rt.value=!1;try{const n=window.__quantModules&&window.__quantModules.core||{},V=typeof n.authHeaders=="function"?n.authHeaders():{},oe=Ot.value?"?type="+encodeURIComponent(Ot.value):"",Ce=await fetch("/api/strategies/research-history"+oe,{headers:V}).then(function(Ee){return Ee.json()});if(x!==h)return;ot.value=Ce&&Ce.items||[]}catch(n){console.error("[research-history] 加载失败:",n),Rt.value=!0}finally{x===h&&(Ze.value=!1)}}async function jt(){const x=++h;na.value=!0;try{const n=window.__quantModules&&window.__quantModules.core||{},V=typeof n.authHeaders=="function"?n.authHeaders():{},oe=Ot.value?"?type="+encodeURIComponent(Ot.value):"",Ce=await fetch("/api/strategies/research-history/export"+oe,{headers:V});if(!Ce.ok)throw new Error("HTTP "+Ce.status);const Ee=await Ce.blob(),ut=URL.createObjectURL(Ee),Ue=document.createElement("a");Ue.href=ut,Ue.download="research_history.csv",document.body.appendChild(Ue),Ue.click(),document.body.removeChild(Ue),URL.revokeObjectURL(ut)}catch(n){console.error("[research-history] 导出失败:",n)}finally{x===h&&(na.value=!1)}}function wa(x){const n=Kt.value.indexOf(x);n>=0?Kt.value.splice(n,1):Kt.value.length<10&&Kt.value.push(x)}function Ea(x){pa.value=pa.value===x?"":x}async function Aa(){const x=++h,n=Kt.value;if(!(n.length<2)){ba.value=!0;try{const V=window.__quantModules&&window.__quantModules.core||{},oe=typeof V.authHeaders=="function"?V.authHeaders():{},Ce=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},oe),body:JSON.stringify({ids:n})}).then(function(Ee){return Ee.json()});ya.value=Ce&&Ce.items||[]}catch(V){console.error("[research-history] 对比失败:",V)}finally{x===h&&(ba.value=!1)}}}async function ka(x){try{const n=window.__quantModules&&window.__quantModules.core||{},V=typeof n.authHeaders=="function"?n.authHeaders():{},oe=await fetch("/api/strategies/research-history/"+x,{method:"DELETE",headers:V}).then(function(Ce){return Ce.json()});if(oe&&oe.deleted){ot.value=ot.value.filter(function(Ee){return Ee.id!==x});const Ce=Kt.value.indexOf(x);Ce>=0&&Kt.value.splice(Ce,1)}}catch(n){console.error("[research-history] 删除失败:",n)}}return{...d,strategyManageMode:r,openStrategyManage:w,btHistory:oa,btHistoryLoading:H,btHistoryError:xe,btHistoryDays:je,loadBtHistory:Pe,researchHistory:ot,researchHistoryLoading:Ze,researchHistoryError:Rt,researchHistoryType:Ot,researchHistorySelected:Kt,researchDetailId:pa,researchCompareRows:ya,researchCompareLoading:ba,researchTypeLabel:ra,goShortterm:za,openResearchHistory:ca,loadResearchHistory:qa,researchExportLoading:na,exportResearchHistory:jt,toggleResearchSelect:wa,toggleResearchDetail:Ea,runResearchCompare:Aa,deleteResearchHistory:ka,marketReviews:o,marketReviewLoading:S,marketReviewError:k,selectedReviewDate:T,marketReviewDetail:C,marketReviewDetailLoading:q,marketReviewDetailError:R,loadMarketReviews:E,openMarketReview:v,toggleMarketReviewDate:i,backToMarketReviewList:K,loadMarketReviewDetail:B,marketReviewChgClass:U,marketReviewChgText:Q,marketReviewSrcEntries:I,fmtPct:m,fmtEmotion:O,strategies:N,strategiesLoading:F,strategiesError:J,strategiesErrorText:Z,strategiesWarn:le,activeStrategyId:ee,activeStrategy:M,paramValues:L,strategyRunning:s,ptradeCode:l,strategyRuns:g,savingProfile:f,variantSaving:D,loadStrategies:ne,onStrategyChange:ve,runActiveStrategy:ae,exportActivePtradeCode:ge,copyPtradeCode:Oe,profiles:X,profileSelect:P,profileName:p,loadProfiles:Me,saveProfile:$,applyProfile:ce,deleteProfile:Re,govEnabled:c,govSchedule:u,govUniverse:z,govRunning:ie,lastHoldings:G,loadGov:se,updateGov:fe,runOnceActive:Te,openLastHoldings:me,cloneStrategy:we,govShowCalendar:_,factorKey:Ae,factorIcLoading:Be,factorLayerLoading:St,factorIcReport:Pt,factorLayerResult:xt,factorOptions:_e,runFactorIc:Ct,runFactorLayer:bt,factorDetail:vt,factorDetailLoading:Dt,runFactorDetail:ta,variants:A,variantSelected:te,variantSpec:Se,specFields:Le,aiCode:He,aiCodeLoading:wt,variantBusy:Ye,variantMsg:Ke,loadVariants:ye,cloneNewStrategy:Xe,selectVariant:mt,loadVariantSpec:at,saveVariantSpec:Nt,runVariantOnce:We,genVariantAiCode:qt,copyVariantCode:Ht,customName:zt,customPrompt:rt,customs:Et,customSelected:Bt,customCode:Gt,customMsg:gt,customBtResult:ct,customGenLoading:Wt,customBtLoading:Mt,customOptLoading:$t,loadCustoms:aa,genCustomCode:pt,loadCustomCode:sa,runCustomBacktest:la,runCustomOptimize:ma,copyCustomCode:ha,sweepGrid:ke,sweepResult:Ie,sweepMessage:De,sweepLoading:Je,sweepStability:Qe,runSweep:$e}}}})();(function(){const{inject:a,ref:t,onMounted:y,computed:e,nextTick:d}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
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
                </div>`,setup(){const f=a("qcState");if(!f)return{};const D=f.currentPage,h=f.currentSubPage,r=t(""),w=t(null),o=t(!1),S=t(!1),k=t("数据加载失败"),T=t("请检查服务后重试"),C=t(null),q=t(null),R=t(!1),E=t(!1),v=t("数据加载失败"),i=t("请检查服务后重试"),m=t(null),O=t(1),K=50,B=e(function(){const H=q.value||[];if(H.length<=200)return H;const xe=(O.value-1)*K;return H.slice(xe,xe+K)}),U=t(null),Q=t(!1),I=t(!1),N=t("数据加载失败"),F=t("请检查服务后重试"),J=t([]),Z=t(!1);async function le(){Z.value=!0;try{const H=await we("/api/shortterm/dates/summary",!1);H&&H.success&&(J.value=H.dates||[])}catch{J.value=[]}finally{Z.value=!1}}function ee(H){H!==r.value&&(r.value=H,at(!0))}const L=t("行业资金流"),s=t("今日"),b=t(""),l=t(null),g=t(1),X=t(!1),P=t(!1),p=t("数据加载失败"),c=t("请检查服务后重试"),_=t(""),u=t(null),z=t(!1),ie=t(null),G=t(!1),M=t(!1),W=t(""),ne=t(""),ve=t(!1);function Me(){const H=localStorage.getItem("quant_token")||"";return H?{Authorization:"Bearer "+H,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const $={},ce=[],Re=50,se=60*1e3;let fe=0,Te=0,me=0;function we(H,xe){const je=Date.now(),Pe=$[H];return!xe&&Pe&&je-Pe.ts<se?Promise.resolve(Pe.data):fetch(H,{headers:Me()}).then(function(ot){return ot.json()}).then(function(ot){if($[H]||ce.push(H),$[H]={ts:Date.now(),data:ot},ce.length>Re){const Ze=ce.shift();delete $[Ze]}return ot})}async function qe(H){const xe=++fe;o.value=!0,S.value=!1;try{const je="/api/shortterm/pools"+(r.value?"?date="+r.value:""),Pe=await we(je,H);if(xe!==fe)return;Pe&&Pe.success?(w.value=Pe,d(ye)):Pe&&Pe.detail?(S.value=!0,k.value=String(Pe.detail),T.value="请先登录后再查看"):(S.value=!0,k.value="数据加载失败",T.value="请检查服务后重试")}catch{if(xe!==fe)return;S.value=!0,k.value="数据加载失败",T.value="请检查服务后重试"}finally{xe===fe&&(o.value=!1)}}async function re(H){const xe=++fe;R.value=!0,E.value=!1;try{const je="/api/shortterm/lhb"+(r.value?"?date="+r.value:""),Pe=await we(je,H);if(xe!==fe)return;Pe&&Pe.success?(q.value=Array.isArray(Pe.rows)?Pe.rows:null,m.value=Pe.available===!1&&Pe.reason||null,O.value=1):Pe&&Pe.detail?(E.value=!0,v.value=String(Pe.detail),i.value="请先登录后再查看"):(E.value=!0,v.value="数据加载失败",i.value="请检查服务后重试")}catch{if(xe!==fe)return;E.value=!0,v.value="数据加载失败",i.value="请检查服务后重试"}finally{xe===fe&&(R.value=!1)}}const ae=e(function(){const H=w.value&&w.value.ladder&&w.value.ladder.tiers;return!H||!Object.keys(H).length?"—":Object.keys(H).sort(function(xe,je){return xe-je}).map(function(xe){return xe+"板:"+H[xe]}).join(" ")}),ge=e(function(){const H=w.value&&w.value.zt||[];return C.value?H.filter(function(xe){return xe.boards===C.value}):H});function Oe(){C.value=null}const Ae=e(function(){const H=U.value&&U.value.emotion&&U.value.emotion.money_effect;return!H||!H.available?"—":H.source==="settled"?"定稿记录":H.source==="realtime"?H.partial?"实时(样本不全)":"实时":"—"}),Be=e(function(){const H=U.value&&U.value.emotion&&U.value.emotion.promotion&&U.value.emotion.promotion.tiers&&U.value.emotion.promotion.tiers["1进2"];return H?H.rate:null}),St=e(function(){const H=U.value&&U.value.emotion&&U.value.emotion.sentiment_cycle;return H&&H.available&&H.current_score!=null?H.current_score.toFixed(2):"—"}),Pt=e(function(){const H=U.value&&U.value.emotion&&U.value.emotion.sentiment_cycle;return!H||!H.available?"—":(H.trend||"—")+(H.day_n!=null?" · 距低谷"+H.day_n+"天":"")});e(function(){const H=U.value&&U.value.emotion;if(!H)return"";const xe=[];for(const je of["money_effect","promotion","consec_premium","sentiment_cycle"]){const Pe=H[je];Pe&&Pe.available===!1&&Pe.reason&&xe.push(String(Pe.reason).replace(/^[[^]]*]s*/,""))}return xe.join("；")}),e(function(){const H=U.value&&U.value.facts;if(!H)return"";const xe=[];for(const je of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const Pe=H[je];Pe&&Pe.available===!1&&Pe.reason&&xe.push(String(Pe.reason).replace(/^[[^]]*]s*/,""))}return xe.join("；")});function xt(H){return H==null||isNaN(H)?"—":(H*100).toFixed(0)+"%"}function _e(H,xe){return H==null?"—":(typeof H=="number"?Math.round(H*100)/100:H)+(xe||"")}function ke(H){return"tag-chip mr-4"}function Ie(H){return H==null?"":H>0?"is-rise":H<0?"is-fall":""}function De(H){return H==="机构"?"is-institution":H==="游资"?"is-hotmoney":H==="主力"?"is-main":""}const Je=e(function(){const H=U.value&&U.value.session_status;if(!H)return"—";const xe=U.value.date;return xe===H.latest_session&&H.settled?"已收盘":xe===H.today&&H.is_trade_day&&!H.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),Qe=e(function(){const H=U.value&&U.value.session_status;if(!H)return"";const xe=U.value.date;return xe===H.latest_session&&H.settled?"is-institution":xe===H.today&&H.is_trade_day&&!H.settled?"is-main":""});function $e(H){H&&H.ts_code&&f&&f.showStockDetail&&f.showStockDetail(H.ts_code)}const Ct=e(function(){return(q.value||[]).filter(function(H){return(H.tags||[]).indexOf("机构")>=0}).reduce(function(H,xe){return H+(xe.net_buy||0)},0)}),bt=e(function(){return(q.value||[]).filter(function(H){return(H.tags||[]).indexOf("游资")>=0}).length}),vt=e(function(){const H=(l.value||[]).filter(function(xe){return xe.main_net_inflow!=null});return H.length?H.reduce(function(xe,je){return xe.main_net_inflow>=je.main_net_inflow?xe:je}):null}),Dt=e(function(){const H=vt.value;return H?H.name:"—"}),ta=e(function(){const H=vt.value;return H?H.main_net_inflow:null}),A=e(function(){return _.value||"东财"}),te=e(function(){const H=(b.value||"").trim(),xe=l.value||[];return H?xe.filter(function(je){return je.name&&String(je.name).indexOf(H)>=0}):xe});function Se(H){b.value=H||"",f&&f.currentSubPage&&(f.currentSubPage.value="sector")}const Le=e(function(){const H=te.value;if(H.length<=200)return H;const xe=(g.value-1)*K;return H.slice(xe,xe+K)}),He=["09:25","09:35","10:00","11:30","14:00","15:00"],wt=e(function(){const H={};return(ie.value||[]).forEach(function(xe){H[xe.slot]=!0}),H});function Ye(H){return wt.value[H]?"is-done":H===Ke.value?"is-current":"is-empty"}const Ke=e(function(){const H=new Date,xe=(H.getHours()<10?"0":"")+H.getHours(),je=(H.getMinutes()<10?"0":"")+H.getMinutes(),Pe=xe+":"+je;for(var ot=0;ot<He.length;ot++)if(Pe===He[ot])return He[ot];for(var Ze=0;Ze<He.length-1;Ze++){var Rt=He[Ze],Ot=new Date;Ot.setHours(Number(Rt.split(":")[0]),Number(Rt.split(":")[1]),0,0);var Kt=new Date(Ot.getTime()+8*6e4);if(H>=Ot&&H<=Kt)return Rt}return""}),dt=e(function(){const H=new Date,xe=Ke.value;if(xe)return"当前处于快照窗口 "+xe+" (前后 8 分钟) — 可采集";const je=H.getHours(),Pe=H.getMinutes();let ot="";for(let Ze=0;Ze<He.length;Ze++){const Rt=He[Ze].split(":");if(Number(Rt[0])>je||Number(Rt[0])===je&&Number(Rt[1])>Pe){ot=He[Ze];break}}return ot?"下一快照时点 "+ot+" — 非窗口期不可采集":"今日快照时点已全部结束"}),it=t(""),Y=t("info");function ye(){const H=w.value&&w.value.ladder&&w.value.ladder.tiers;if(!H||!Object.keys(H).length)return;const xe=window.__quantModules&&window.__quantModules.charts;if(!xe||!xe.renderSimpleChartTo)return;const je=C.value,Pe=xe.renderSimpleChartTo("shorttermLadderChart",function(){const ot=Object.keys(H).sort(function(Ze,Rt){return Number(Ze)-Number(Rt)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:ot.map(function(Ze){return Ze+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(Ze){return je&&Number(ot[Ze.dataIndex])===je?"var(--color-accent)":"var(--chart-split)"}},data:ot.map(function(Ze){return H[Ze]})}]}},{key:"shortterm-ladder"});Pe&&Pe.off&&(Pe.off("click"),Pe.on("click",function(ot){if(!ot||!ot.name)return;const Ze=parseInt(ot.name,10);isNaN(Ze)||(C.value=C.value===Ze?null:Ze)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(ye);function Xe(H){if(H==null)return"—";const xe=Math.abs(H);return xe>=1e8?(H/1e8).toFixed(2)+"亿":xe>=1e4?(H/1e4).toFixed(0)+"万":H.toFixed(0)}function mt(H){return H==null?"—":(H>=0?"+":"")+H.toFixed(2)+"%"}async function at(H){const xe=++Te;Q.value=!0,I.value=!1;try{const je="/api/shortterm/overview"+(r.value?"?date="+r.value:""),Pe=await we(je,H);if(xe!==Te)return;Pe&&Pe.success?U.value=Pe:Pe&&Pe.detail?(I.value=!0,N.value=String(Pe.detail),F.value="请先登录后再查看"):(I.value=!0,N.value="数据加载失败",F.value="请检查服务后重试")}catch{if(xe!==Te)return;I.value=!0,N.value="数据加载失败",F.value="请检查服务后重试"}finally{xe===Te&&(Q.value=!1)}}async function Nt(H){const xe=++fe;X.value=!0,P.value=!1;try{const je="/api/shortterm/sector-flow?indicator="+encodeURIComponent(s.value)+"&sector_type="+encodeURIComponent(L.value),Pe=await we(je,H);if(xe!==fe)return;Pe&&Pe.success&&Pe.available?(l.value=Pe.rows||[],_.value=Pe.source||(Pe.note?"同花顺":"东财"),g.value=1):Pe&&Pe.reason?(P.value=!0,p.value="数据加载失败",c.value=String(Pe.reason).replace(/^\[[^\]]*\]\s*/,"")):Pe&&Pe.detail?(P.value=!0,p.value=String(Pe.detail),c.value="请先登录后再查看"):(P.value=!0,p.value="数据加载失败",c.value="请检查服务后重试")}catch{if(xe!==fe)return;P.value=!0,p.value="数据加载失败",c.value="请检查服务后重试"}finally{xe===fe&&(X.value=!1)}}async function We(H){const xe=++me;try{const je="/api/shortterm/review"+(r.value?"?date="+r.value:""),Pe=await we(je,H);if(xe!==me)return;Pe&&Pe.success&&(u.value=Pe.review||null)}catch{}}async function qt(){z.value=!0;try{const H="/api/shortterm/review"+(r.value?"?date="+r.value:""),xe=await fetch(H,{method:"POST",headers:Me()}).then(function(je){return je.json()});xe&&xe.success&&(u.value=xe,$[H]={ts:Date.now(),data:xe})}catch{}finally{z.value=!1}}async function Ht(){const H=W.value.trim();if(H){ve.value=!0,ne.value="";try{const je=await fetch("/api/shortterm/review/chat",{method:"POST",headers:Me(),body:JSON.stringify({date:overviewDate.value,question:H})}).then(function(Pe){return Pe.json()});ne.value=je.answer||"[无回复]"}catch{ne.value="[发送失败]"}finally{ve.value=!1}}}async function zt(H){const xe=++fe;G.value=!0;try{const je="/api/shortterm/intraday"+(r.value?"?date="+r.value:""),Pe=await we(je,H);if(xe!==fe)return;Pe&&Pe.success&&(ie.value=Pe.snapshots||[])}catch{}finally{xe===fe&&(G.value=!1)}}async function rt(){M.value=!0;try{const H="/api/shortterm/intraday/snapshot"+(r.value?"?date="+r.value:""),xe=await fetch(H,{method:"POST",headers:Me()}).then(function(je){return je.json()});xe&&xe.success?(xe.accepted?(it.value="已采集 "+xe.slot+" 快照"+(xe.pools_available&&!xe.pools_available.zt?" (池源部分不可用)":""),Y.value="ok"):(it.value="⏱ "+(xe.reason||"非快照时点"),Y.value="warn"),zt()):it.value="采集失败, 请稍后重试"}catch{it.value="采集失败, 请稍后重试"}finally{M.value=!1}}function Et(){return we("/api/shortterm/latest-session",!1).then(function(H){H&&H.date&&(r.value||(r.value=H.date))}).catch(function(){})}function Bt(){const H=h.value;H==="ztpool"?qe():H==="lhb"?re():H==="overview"?(at(),We()):H==="sector"?Nt():H==="intraday"&&zt()}function Gt(){const H=r.value?"?date="+r.value:"";["/api/shortterm/overview"+H,"/api/shortterm/pools"+H,"/api/shortterm/lhb"+H].forEach(function(je){we(je,!1).catch(function(){})})}function gt(){const H=h.value;H==="ztpool"?qe(!0):H==="lhb"?re(!0):H==="overview"?(at(!0),We(!0)):H==="sector"?Nt(!0):H==="intraday"&&zt(!0)}y(function(){Et(),Bt(),Gt(),la(),le()}),Vue.watch(function(){return h.value},function(H){Bt(),H==="overview"&&la()});const ct=window.QuantOnboarding,Wt=t(!1),Mt=t(ct?ct.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),$t=e(function(){return ct&&ct.shorttermTourSteps()[Mt.value.stepIndex]||{key:"",title:"",desc:""}}),Yt=e(function(){return ct?ct.shorttermTourProgress(Mt.value):{done:0,total:3,pct:0}}),aa=e(function(){return Mt.value.stepIndex>=2});function pt(){if(ct){var H=null;try{H=localStorage.getItem("qc_shortterm_tour")}catch{}if(H){var xe=ct.parseState(H);xe&&(Mt.value=xe)}}}function sa(){if(ct){var H=JSON.stringify(Mt.value);try{localStorage.setItem("qc_shortterm_tour",H)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:H}})}).catch(function(){})}catch{}}}function la(){window.__quantGuideModalsEnabled===!0&&ct&&h.value==="overview"&&(pt(),ct.shorttermTourShouldShow(Mt.value)&&(Wt.value=!0))}function ma(){Mt.value=ct.shorttermTourNext(Mt.value),sa()}function ha(){Mt.value=ct.shorttermTourComplete(Mt.value),sa(),Wt.value=!1}function oa(){Mt.value=ct.shorttermTourDismiss(Mt.value),sa(),Wt.value=!1}return{currentPage:D,currentSubPage:h,shortDate:r,pools:w,poolLoading:o,poolError:S,ztBoardFilter:C,filteredZt:ge,clearBoardFilter:Oe,lhbRows:q,lhbLoading:R,lhbError:E,lhbReason:m,lhbPageRows:B,lhbPage:O,overview:U,overviewLoading:Q,overviewError:I,dateList:J,dateListLoading:Z,loadDateList:le,pickDate:ee,sectorType:L,sectorIndicator:s,sectorKeyword:b,sectorRows:l,filteredSectorRows:te,sectorPageRows:Le,sectorPage:g,sectorLoading:X,sectorError:P,sectorFlowSource:_,PAGE_SIZE:K,gotoSector:Se,review:u,reviewRunning:z,intradaySnapshots:ie,intradayLoading:G,intradayCollecting:M,intradaySlots:He,intradayMsg:it,slotClass:Ye,intradayStatus:dt,chatQuestion:W,chatAnswer:ne,chatLoading:ve,loadPools:qe,loadLhb:re,loadOverview:at,loadSectorFlow:Nt,loadReview:We,runReview:qt,sendChat:Ht,loadIntraday:zt,collectSnapshot:rt,refreshCurrent:gt,ladderText:ae,fmtAmount:Xe,fmtPct:mt,riseFall:Ie,tagClass:De,openStock:$e,lhbInstitutionNetBuy:Ct,lhbHotMoneyCount:bt,sectorTopName:Dt,sectorTopInflow:ta,sectorSource:A,moneySource:Ae,promotion1to2:Be,cycleScore:St,cycleTrend:Pt,pct:xt,fmtCond:_e,verdictClass:ke,sessionStatusText:Je,sessionStatusClass:Qe,shorttermTourVisible:Wt,shorttermTourState:Mt,shorttermTourStep:$t,shorttermTourProg:Yt,shorttermTourIsLast:aa,shorttermTourNext:ma,shorttermTourFinish:ha,shorttermTourSkip:oa}}}})();(function(a,t){typeof Ne=="object"&&Ne.exports?Ne.exports=t():a.QuantVirtualList=t()})(typeof self<"u"?self:void 0,function(){var a=8;function t(h,r,w,o,S){var k=w>0?w:1,T=typeof S=="number"&&S>=0?S:a,C=Math.max(0,o),q=Math.max(0,h),R=Math.max(0,r),E=Math.max(0,Math.floor(q/k)-T),v=Math.min(C,Math.ceil((q+R)/k)+T);return{startIndex:E,endIndex:v}}function y(h,r){return Math.max(0,h||0)*(r>0?r:0)}function e(h,r,w,o,S){var k=h||[],T=t(r,w,o,k.length,S),C=k.slice(T.startIndex,T.endIndex);return{visible:C,startIndex:T.startIndex,endIndex:T.endIndex,offsetY:T.startIndex*(o>0?o:1),totalHeight:y(k.length,o)}}function d(h,r){if(h){if(h.code!=null)return h.code;if(h.id!=null)return h.id;if(h.ts_code!=null)return h.ts_code}return r}function f(h,r,w){var o=h||[];if(!o.length)return r>0?r:1;for(var S=Math.min(w||50,o.length),k=0,T=0,C=0;C<S;C++){var q=o[C]&&o[C].rowHeight;typeof q=="number"&&q>0&&(k+=q,T++)}return T?k/T:r>0?r:1}function D(h,r,w,o,S){var k=t(h,r,w,o,S),T=Math.max(0,o);return T?(k.endIndex-k.startIndex)/T:0}return{DEFAULT_BUFFER:a,computeVisibleRange:t,computeTotalHeight:y,sliceVisible:e,getRowKey:d,estimateDynamicRowHeight:f,renderedRatio:D}});(function(){const{ref:a,computed:t,onMounted:y,onBeforeUnmount:e}=Vue,d=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:d.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(f){const D=a(null),h=a(0),r=a(400),w=t(()=>(d.computeVisibleRange||function(i,m,O,K,B){const U=O>0?O:1,Q=B>=0?B:8,I=Math.max(0,K);return{startIndex:Math.max(0,Math.floor(i/U)-Q),endIndex:Math.min(I,Math.ceil((i+m)/U)+Q)}})(h.value,r.value,f.rowHeight,f.items.length,f.buffer)),o=t(()=>f.items.length*f.rowHeight),S=t(()=>w.value.startIndex),k=t(()=>w.value.endIndex),T=t(()=>f.items.slice(S.value,k.value));function C(){D.value&&(h.value=D.value.scrollTop)}function q(){D.value&&(r.value=D.value.clientHeight||400)}function R(v,i){return d.getRowKey?d.getRowKey(v,i):v&&v.code!=null?v.code:v&&v.id!=null?v.id:i}let E=null;return y(()=>{q(),D.value&&typeof ResizeObserver<"u"&&(E=new ResizeObserver(()=>q()),E.observe(D.value))}),e(()=>{E&&E.disconnect()}),{scrollEl:D,totalHeight:o,startIndex:S,endIndex:k,visibleItems:T,onScroll:C,keyOf:R}}}})();(function(a,t){typeof Ne=="object"&&Ne.exports?Ne.exports=t():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=t())})(typeof self<"u"?self:void 0,function(){var a=40,t=1.2,y=60,e=500,d=10,f=88,D=350;function h(i,m,O,K,B){B=B||{};var U=typeof B.threshold=="number"?B.threshold:a,Q=typeof B.bias=="number"?B.bias:t,I=O-i,N=K-m;return Math.abs(I)<U||Math.abs(I)<Math.abs(N)*Q?"none":I<0?"left":"right"}function r(i,m,O){O=O||{};var K=typeof O.threshold=="number"?O.threshold:y;return m-i>=K}function w(i,m){m=m||{};var O=typeof m.threshold=="number"?m.threshold:e;return i>=O}var o=!1;function S(i,m){return i&&typeof i.closest=="function"?i.closest(m):null}function k(i){if(!i)return"";var m=i.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(m){var O=m.getAttribute&&m.getAttribute("data-copy-code");if(O)return O.trim();var K=(m.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(K)return K[0]}var B=i.getAttribute&&i.getAttribute("data-copy-code");return B?B.trim():""}function T(i){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(i).then(function(){return!0}).catch(function(){return C(i)}):Promise.resolve(C(i))}function C(i){try{var m=document.createElement("textarea");return m.value=i,m.style.position="fixed",m.style.opacity="0",document.body.appendChild(m),m.select(),document.execCommand("copy"),document.body.removeChild(m),!0}catch{return!1}}function q(i){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(i)}function R(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function E(){var i=null,m=null,O=null;function K(){m&&(m.timer&&clearTimeout(m.timer),m=null)}function B(Z){O={el:Z,until:Date.now()+D}}function U(Z){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(le){le!==Z&&le.classList.remove("swipe-open")}),i&&i.el!==Z&&(i=null)}function Q(Z){var le=Z.touches&&Z.touches[0];if(le){var ee=S(Z.target,".swipe-reveal");ee&&(i={el:ee,x:le.clientX,y:le.clientY,moved:!1},Z.stopPropagation());var L=S(Z.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");L&&(K(),m={el:L,x:le.clientX,y:le.clientY,timer:setTimeout(function(){var s=k(L);m=null,s&&(B(L),T(s).then(function(){R(),q("已复制代码 "+s)}))},e)})}}function I(Z){if(i){var le=Z.touches&&Z.touches[0];if(le){var ee=le.clientX-i.x,L=le.clientY-i.y;if(Math.abs(ee)>8&&Math.abs(ee)>Math.abs(L)*1.2){Z.cancelable&&Z.preventDefault(),i.moved=!0;var s=i.el.querySelector(".swipe-reveal-main")||i.el,b=Math.max(-f,Math.min(0,ee));s.style.transition="none",s.style.transform="translateX("+b+"px)",Z.stopPropagation()}if(m){var l=le.clientX-m.x,g=le.clientY-m.y;(Math.abs(l)>d||Math.abs(g)>d)&&K()}}}}function N(Z){if(K(),!!i){var le=i.el,ee=Z.changedTouches&&Z.changedTouches[0],L=i.x,s=i.y,b="none";ee&&(b=h(L,s,ee.clientX,ee.clientY));var l=i.moved;i=null;var g=le.querySelector(".swipe-reveal-main")||le;g.style.transform="",g.style.transition="",b==="left"?(U(le),le.classList.add("swipe-open"),B(le)):(b==="right"||l)&&le.classList.remove("swipe-open"),Z.stopPropagation()}}function F(){K(),i=null}function J(Z){if(O&&Date.now()<O.until){var le=O.el.contains(Z.target)||Z.target===O.el,ee=Z.target.closest&&Z.target.closest(".swipe-reveal-actions");le&&!ee&&(Z.preventDefault(),Z.stopPropagation(),O=null)}}document.addEventListener("touchstart",Q,!0),document.addEventListener("touchmove",I,!0),document.addEventListener("touchend",N,!0),document.addEventListener("touchcancel",F,!0),document.addEventListener("click",J,!0)}function v(){o||typeof document>"u"||(o=!0,E())}return{judgeSwipe:h,judgePullToRefresh:r,judgeLongPress:w,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:t,PULL_THRESHOLD:y,LONG_PRESS_MS:e,LONG_PRESS_MOVE_SLOP:d,REVEAL_WIDTH:f,initGestures:v,_codeFromRow:k}});(function(){const a={empty:{icon:"inbox",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"alert-triangle",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"wifi-off",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},t=Object.keys(a);function y(f){return a[f]||a.empty}function e(){const f=[];for(const D of t){const h=a[D];h.title||f.push(D+".title"),D!=="loading"&&!h.icon&&f.push(D+".icon"),typeof h.retry!="boolean"&&f.push(D+".retry"),typeof h.skeleton!="boolean"&&f.push(D+".skeleton")}return{ok:f.length===0,errors:f}}const d={VARIANTS:a,KEYS:t,resolve:y,validate:e};typeof window<"u"&&(window.QuantStatePanel=d),typeof Ne<"u"&&Ne.exports&&(Ne.exports=d)})();(function(){const{computed:a}=Vue,t=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(y){const e=a(()=>typeof t.resolve=="function"?t.resolve(y.type):{}),d=a(()=>y.icon||e.value.icon||""),f=a(()=>y.title||e.value.title||""),D=a(()=>y.desc||e.value.desc||""),h=a(()=>!!e.value.retry),r=a(()=>/^[a-z][a-z0-9-]*$/.test(String(d.value||"")));return{icon:d,title:f,desc:D,retryable:h,isIconName:r}}}})();(function(a,t){typeof Ne=="object"&&Ne.exports?Ne.exports=t():a.QuantCommandPanel=t()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function a(i){return String(i||"").trim().toLowerCase()}function t(i,m){if(!i)return!0;const O=i.split(/\s+/).filter(Boolean);if(!O.length)return!0;const K=String(m||"").toLowerCase();return O.every(function(B){return K.indexOf(B)!==-1})}function y(){return{visible:!1,query:"",activeIndex:0}}function e(i,m){return m===void 0&&(m=!i.visible),i.visible=m,m&&(i.query="",i.activeIndex=0),i.visible}function d(i,m,O){const K=a(i);if(!m||!m.length)return[];const B=[];return m.forEach(function(U){const Q=t(K,U.name)||t(K,U.key),I=(U.subPages||[]).filter(function(N){const F=O&&O[N]||N;return t(K,F)||t(K,N)});Q&&B.push({type:"menu",menuKey:U.key,subPage:U.subPages&&U.subPages[0]||"",label:U.name,subLabel:"页面",icon:U.icon||"file-text"}),I.forEach(function(N){B.push({type:"menu",menuKey:U.key,subPage:N,label:O&&O[N]||N,subLabel:U.name,icon:U.icon||"file-text"})})}),B.slice(0,8)}function f(i,m){const O=a(i);return!m||!m.length?[]:m.filter(function(K){return!!(!O||t(O,K.label)||t(O,K.key)||K.keywords&&t(O,K.keywords))}).slice(0,8)}function D(i,m){const O=a(i);return!O||!m||!m.length?[]:m.filter(function(K){return t(O,K.code)||t(O,K.name)}).slice(0,8).map(function(K){return{type:"stock",code:K.code,name:K.name,label:K.name,subLabel:K.code,icon:"trending-up"}})}function h(i,m,O){const K=[],B=[];return O&&O.length&&(K.push({key:"stock",label:"股票",items:O}),B.push.apply(B,O)),i&&i.length&&(K.push({key:"menu",label:"菜单",items:i}),B.push.apply(B,i)),m&&m.length&&(K.push({key:"command",label:"指令",items:m}),B.push.apply(B,m)),{groups:K,flat:B}}function r(i,m,O){if(m<=0)return 0;const K=((i||0)+O)%m;return K<0?m-1:K}function w(i,m,O,K){const B=d(i,m,O).map(function(Q){return{type:"menu",menuKey:Q.menuKey,subPage:Q.subPage,label:Q.label,subLabel:Q.subLabel,icon:Q.icon,iconName:Q.icon,value:Q.icon+" "+Q.label+" · "+Q.subLabel}}),U=f(i,K||[]).map(function(Q){return{type:"command",key:Q.key,label:Q.label,icon:Q.icon,iconName:Q.icon,subLabel:"指令",value:Q.icon+" "+Q.label}});return B.concat(U)}function o(i){return i?i.type==="menu"?{action:"menu",menuKey:i.menuKey,subPage:i.subPage}:i.type==="command"?{action:"command",key:i.key}:i.type==="sector"?{action:"sector",name:i.name}:i.type==="strategy"?{action:"strategy",id:i.id,name:i.name}:i.type==="stock"||i.code&&i.name?{action:"stock",code:i.code,name:i.name}:null:null}const S=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"}];var k={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function T(i){if(!i||typeof i!="string")return null;var m=i.split("+").map(function(B){return B.trim()}).filter(Boolean);if(!m.length)return null;var O=m.pop().toLowerCase();if(!O)return null;var K={ctrl:!1,alt:!1,shift:!1,meta:!1};return m.forEach(function(B){var U=B.toLowerCase();k.ctrl.indexOf(U)!==-1?K.ctrl=!0:k.alt.indexOf(U)!==-1?K.alt=!0:k.shift.indexOf(U)!==-1?K.shift=!0:k.meta.indexOf(U)!==-1&&(K.meta=!0)}),{ctrl:K.ctrl,alt:K.alt,shift:K.shift,meta:K.meta,key:O}}function C(i,m){if(!i||!m)return!1;var O=String(m.key||m.code||"").toLowerCase();return i.key!==O?!1:i.ctrl===!!m.ctrlKey&&i.alt===!!m.altKey&&i.shift===!!m.shiftKey&&i.meta===!!m.metaKey}function q(i){if(!i)return"";var m=[];return i.ctrl&&m.push("Ctrl"),i.alt&&m.push("Alt"),i.shift&&m.push("Shift"),i.meta&&m.push("Meta"),m.push(i.key.toUpperCase()),m.join("+")}function R(){var i={};return{register:function(m){if(!m||!m.key)throw new Error("命令 key 必填");if(i[m.key])throw new Error("命令重复注册: "+m.key);return i[m.key]=Object.assign({},m),m.key},list:function(){return Object.keys(i).map(function(m){return i[m]})},get:function(m){return i[m]||null},remove:function(m){delete i[m]},has:function(m){return!!i[m]},count:function(){return Object.keys(i).length}}}function E(){var i={},m={};return{register:function(O,K,B){var U=T(O);if(!U)throw new Error("无效快捷键: "+O);var Q=q(U);if(i[Q])throw new Error("快捷键冲突: "+O);if(K!=null&&m[K]!==void 0)throw new Error("动作重复绑定: "+K);return i[Q]={combo:O,action:K,description:B||"",parsed:U},m[K]=Q,Q},resolve:function(O){for(var K in i)if(C(i[K].parsed,O))return i[K].action;return null},list:function(){return Object.keys(i).map(function(O){return i[O]})},unregister:function(O){var K=q(T(O));i[K]&&(delete m[i[K].action],delete i[K])},count:function(){return Object.keys(i).length}}}function v(){var i=E();return i.register("Ctrl+K","toggle-palette","打开命令面板"),i.register("F5","refresh","刷新当前页"),i.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),i.register("Ctrl+J","open-ai","打开 AI 问股"),i.register("Ctrl+D","open-today","今日一屏"),i.register("Ctrl+E","batch-eval","批量 AI 评估"),i.register("Ctrl+G","add-portfolio","加入组合"),i.register("Ctrl+H","open-eval-history","打开评估历史"),i.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),i}return{normalize:a,createPaletteState:y,toggleVisible:e,searchMenus:d,searchCommands:f,filterStocksLocal:D,mergeResults:h,moveIndex:r,buildSearchSuggestions:w,dispatchSearchSelection:o,DEFAULT_COMMANDS:S,parseKeyCombo:T,matchShortcut:C,canonicalCombo:q,createCommandRegistry:R,createShortcutRegistry:E,createDefaultShortcuts:v}});(function(a){if(a&&!a.QuantCommandPanel)try{var t=typeof Ne<"u"&&Ne.exports?Ne.exports:null;t&&(a.QuantCommandPanel=t)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(a,t){var y=t();typeof Ne=="object"&&Ne.exports&&(Ne.exports=y),a.QuantOnboarding=y})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var a=[{key:"welcome",title:"欢迎使用量化日历",target:""},{key:"pool",title:"认识今日股票池",target:"strategies"},{key:"calendar",title:"日历视图",target:"calendar"},{key:"ai",title:"AI 评估",target:"ai"},{key:"finish",title:"完成",target:"research"}],t=a.length,y=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],e=y.length;function d(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function f(){return y.slice()}function D(N){return N<0?0:N>=e?e-1:N}function h(N){return{stepIndex:N.stepIndex,completed:!!N.completed,dismissed:!!N.dismissed,updatedAt:N.updatedAt||0}}function r(N){return h(Object.assign({},N,{stepIndex:D((N.stepIndex||0)+1),updatedAt:Date.now()}))}function w(N){return h(Object.assign({},N,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function o(N){return h(Object.assign({},N,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function S(N){var F=Math.min(N&&N.stepIndex||0,e);return{done:F,total:e,pct:Math.round(F/e*100)}}function k(N){return!!(N&&!N.completed&&!N.dismissed)}function T(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function C(){return a.slice()}function q(){return t}function R(N){return N<0?0:N>=t?t-1:N}function E(N){return{stepIndex:N.stepIndex,completed:!!N.completed,dismissed:!!N.dismissed,updatedAt:N.updatedAt||0}}function v(N){return E(Object.assign({},N,{stepIndex:R((N.stepIndex||0)+1),updatedAt:Date.now()}))}function i(N){return E(Object.assign({},N,{stepIndex:R((N.stepIndex||0)-1),updatedAt:Date.now()}))}function m(N,F){return E(Object.assign({},N,{stepIndex:R(F),updatedAt:Date.now()}))}function O(N){return E(Object.assign({},N,{completed:!0,updatedAt:Date.now()}))}function K(N){return E(Object.assign({},N,{dismissed:!0,updatedAt:Date.now()}))}function B(N){return!!(N&&N.completed)}function U(N){var F=Math.min(N&&N.stepIndex||0,t);return{done:F,total:t,pct:Math.round(F/t*100)}}function Q(N){var F=N||T();return JSON.stringify({stepIndex:F.stepIndex,completed:!!F.completed,dismissed:!!F.dismissed,updatedAt:F.updatedAt||0})}function I(N){var F=T();if(!N||typeof N!="string")return F;try{var J=JSON.parse(N);if(!J||typeof J!="object")return F;var Z=parseInt(J.stepIndex,10);return isNaN(Z)?F:{stepIndex:R(Z),completed:!!J.completed,dismissed:!!J.dismissed,updatedAt:J.updatedAt||0}}catch{return F}}return{ONBOARDING_STEPS:a,steps:C,stepCount:q,createOnboardingState:T,next:v,prev:i,jumpTo:m,complete:O,dismiss:K,isComplete:B,progress:U,persistState:Q,parseState:I,SHORTTERM_TOUR_STEPS:y,shorttermTourSteps:f,createShorttermTourState:d,shorttermTourNext:r,shorttermTourComplete:w,shorttermTourDismiss:o,shorttermTourProgress:S,shorttermTourShouldShow:k}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:t,onMounted:y}=Vue,e=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const d=a(!1),f=a(e.createOnboardingState()),D=t(function(){return e.steps()[f.value.stepIndex]}),h=t(function(){return e.progress(f.value)}),r=t(function(){return f.value.stepIndex>=e.stepCount()-1}),w=t(function(){return"onboarding.step."+D.value.key});function o(){const R=e.persistState(f.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:R}})}).then(function(E){return E.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",R)}catch{}})}function S(){f.value=e.next(f.value)}function k(){f.value=e.prev(f.value)}function T(){f.value=e.complete(f.value),o(),d.value=!1}function C(){f.value=e.dismiss(f.value),o(),d.value=!1}function q(){fetch("/api/user_config/preferences").then(function(R){return R.json()}).then(function(R){const E=R&&R.preferences&&R.preferences.onboarding_progress;return E&&(f.value=e.parseState(E)),E}).catch(function(){return null}).then(function(R){if(!R)try{const E=localStorage.getItem("qc_onboarding_progress");E&&(f.value=e.parseState(E))}catch{}!e.isComplete(f.value)&&!f.value.dismissed&&(d.value=!0)})}return y(q),{visible:d,st:f,step:D,prog:h,isLast:r,stepKey:w,next:S,prev:k,finish:T,skip:C}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"inbox"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
      <div class="qc-empty-state" role="status">
        <div class="qc-empty-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-empty-title">{{ title || t('common.emptyTitle') }}</div>
        <div class="qc-empty-desc">{{ desc || t('common.emptyDesc') }}</div>
        <el-button v-if="actionText" size="small" type="primary" @click="$emit('action')">{{ actionText }}</el-button>
      </div>
    `,setup(){function a(t){try{const y=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(y)return y(t)||""}catch{}return t}return{t:a}}},window.__quantComponents.ErrorState={name:"qc-error",props:{icon:{type:String,default:"alert-triangle"},title:{type:String,default:""},desc:{type:String,default:""},retrying:{type:Boolean,default:!1}},emits:["retry"],template:`
      <div class="qc-error-state" role="alert">
        <div class="qc-error-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-error-title">{{ title || t('common.errorTitle') }}</div>
        <div class="qc-error-desc">{{ desc || t('common.errorDesc') }}</div>
        <el-button v-if="!retrying" size="small" @click="$emit('retry')">{{ t('common.retry') }}</el-button>
        <el-button v-else size="small" :loading="retrying">{{ t('common.retry') }}</el-button>
      </div>
    `,setup(){function a(t){try{const y=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(y)return y(t)||""}catch{}return t}return{t:a}}})})();(function(){const{ref:a,computed:t,watch:y,nextTick:e,inject:d,onMounted:f}=Vue,D=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
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
    `,setup(){const h=d("qcState");if(!h)return{};const r=a(""),w=t({get:()=>h.commandPaletteVisible.value,set:L=>{h.commandPaletteVisible.value=L}}),o=a(0),S=a([]),k=a(null),T=t(()=>{const L=(D.DEFAULT_COMMANDS||[]).map(function(b){return Object.assign({},b)});return Object.keys(h.themes.value||{}).forEach(function(b){const l=h.themes.value[b];L.push({key:"theme:"+b,label:"切换主题 · "+(l.name||b),icon:"palette",keywords:"theme 主题"})}),L});function C(L){return typeof L=="string"&&/^[a-z][a-z0-9-]*$/.test(L)}const q=t(()=>h.menus.value||[]);function R(){const L=window.__quantModules&&window.__quantModules.pinyin;if(!L)return[];const s=[];return(h.watchlist&&h.watchlist.value||[]).forEach(function(b){s.push({code:b.code,name:b.name})}),(h.aiHistory&&h.aiHistory.value||[]).forEach(function(b){b&&b.stock_code&&s.push({code:b.stock_code,name:b.stock_name||b.stock_code})}),s.push.apply(s,L.getExtraStocks()),L.buildStockIndex(s)}function E(L){const s=window.__quantModules&&window.__quantModules.pinyin;return s?s.searchStocksByQuery(L,R()).map(function(b){return{type:"stock",code:b.code,name:b.name,label:b.name,subLabel:b.code,icon:"trending-up"}}):[]}function v(){const L=[],s=window.__quantModules&&window.__quantModules.recent;s&&s.getRecentViewed().slice(0,5).forEach(function(l){L.push({type:"stock",code:l.code,name:l.name||l.code,label:l.name||l.code,subLabel:"最近查看 · "+l.code,icon:"trending-up"})});const b=(h.watchlist&&h.watchlist.value||[]).slice(0,8).map(function(l){return{type:"stock",code:l.code,name:l.name||l.code,label:l.name||l.code,subLabel:"我的自选 · "+l.code,icon:"trending-up"}});return L.concat(b)}const i=t(()=>{const L=r.value;if(!L)return D.mergeResults([],[],v());const s=D.searchMenus(L,q.value,h.subPageNames),b=D.searchCommands(L,T.value),l=S.value;return D.mergeResults(s,b,l)}),m=t(()=>i.value);function O(L){return m.value.flat[o.value]===L}function K(L){o.value=m.value.flat.indexOf(L)}function B(L){return(L.type||"")+":"+(L.code||L.menuKey||L.key||L.label)}let U=null;function Q(){const L=r.value.trim();if(L.length<1){S.value=[];return}U&&clearTimeout(U),U=setTimeout(function(){const s=E(L);S.value=s,o.value=0,h.searchStocks(L,function(b){if(r.value.trim()!==L)return;const l=(b||[]).filter(function(P){return P&&P.code&&P.name}).map(function(P){return{type:"stock",code:P.code,name:P.name,label:P.name,subLabel:P.code,icon:"trending-up"}}),g={},X=[];s.forEach(function(P){g[P.code]||(g[P.code]=!0,X.push(P))}),l.forEach(function(P){g[P.code]||(g[P.code]=!0,X.push(P))}),S.value=X,o.value=0})},200)}function I(){o.value=D.moveIndex(o.value,m.value.flat.length,1)}function N(){o.value=D.moveIndex(o.value,m.value.flat.length,-1)}function F(){const L=m.value.flat[o.value];L&&J(L)}function J(L){h.commandPaletteVisible.value=!1,L.type==="menu"?h.navigateTo(L.menuKey,L.subPage):L.type==="stock"?h.showStockDetail(L.code,L.name):L.type==="command"&&Z(L.key)}function Z(L){if(L==="refresh"){const s=h.currentPage.value;s==="strategies"?h.loadDashboardData().catch(function(){}):s==="calendar"?h.refreshCalendarData().catch(function(){}):s==="ai"&&h.loadAiHistory().catch(function(){})}else L==="export"?h.exportCSV():L==="batch"?h.showBatchEvaluate.value=!0:L==="ai"?h.openAiFab():L==="sidebar"?h.toggleSidebar():L==="today"?h.navigateTo("strategies","overview"):L==="add-portfolio"?(h.currentPage.value="ai",h.currentSubPage.value="portfolio"):L==="open-system"?h.navigateTo("system","status"):L==="open-shortterm"?h.navigateTo("shortterm","overview"):L==="open-research"?h.navigateTo("research","overview"):L==="open-calendar"?h.navigateTo("calendar",""):L==="refresh-data-source"?h.navigateTo("system","datasource"):L.indexOf("theme:")===0&&h.changeTheme(L.slice(6))}y(w,function(L){L&&(r.value="",S.value=[],o.value=0,e(function(){k.value&&k.value.focus&&k.value.focus()}))}),y(r,Q);function le(L){L==="toggle-palette"?h.commandPaletteVisible.value=!h.commandPaletteVisible.value:L==="toggle-sidebar"?h.toggleSidebar():L==="open-ai"?h.openAiFab():L==="refresh"?Z("refresh"):L==="open-today"?Z("today"):L==="batch-eval"?Z("batch"):L==="add-portfolio"&&Z("add-portfolio")}function ee(L){if(!D.createDefaultShortcuts||!D.createShortcutRegistry)return;const b=D.createDefaultShortcuts().resolve({key:L.key,ctrlKey:L.ctrlKey,altKey:L.altKey,shiftKey:L.shiftKey,metaKey:L.metaKey});b&&(L.preventDefault(),le(b))}return f(function(){document.addEventListener("keydown",ee)}),{visible:w,query:r,results:m,inputEl:k,sanitizeHtml:h.sanitizeHtml,isIconName:C,onDown:I,onUp:N,onEnter:F,execute:J,isActive:O,setActive:K,itemKey:B,onGlobalKeydown:ee}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
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
    `,setup(){const t=a("qcState");if(!t)return{};const y=Vue.ref(0);let e=null;return t.batchRunning&&t.batchRunning.__v_isRef&&Vue.watch(t.batchRunning,d=>{d?(y.value=0,e=setInterval(()=>{y.value++},1e3)):e&&(clearInterval(e),e=null)}),{...t,batchElapsed:y}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
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
    `,setup(){const t=a("qcState");return t?{...t}:{}}}})();(function(){const{inject:a,computed:t,ref:y,watch:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StockDetailDialog={name:"qc-stock-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
    `,setup(){const d=a("qcState");if(!d)return{};const f={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},D=t(()=>f[d.aiEvalStage.value]||""),h=t(()=>{const F=d.aiResult&&d.aiResult.value&&d.aiResult.value.result&&d.aiResult.value.result.level;return F?F==="强烈推荐"||F==="推荐"?"var(--success-text)":F==="谨慎推荐"?"var(--warning-text)":F==="中性"||F==="观望"?"var(--text-secondary)":F==="评估失败"||F==="无可用模型"?"var(--danger-text)":"var(--color-primary)":"var(--color-primary)"});function r(F){const J=document.createElement("textarea");J.value=F,J.style.position="fixed",J.style.opacity="0",document.body.appendChild(J),J.select(),document.execCommand("copy"),document.body.removeChild(J)}async function w(){const F=d.aiResult&&d.aiResult.value;if(!F||!F.result)return;const J=F.result.dimensions||{},Z=Object.entries(J).map(([ee,L])=>`${ee} ${Math.round(L)}分`).join(`
`),le=`【AI 智能评估】${F.result.level||""} ${F.result.total_score!=null?F.result.total_score:"—"}分
模型：${F.model_used||F.result.provider||"—"}

${F.result.detailed_report||""}

九维度评分：
${Z||"无"}`;try{await navigator.clipboard.writeText(le),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{r(le),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const o=y(!1),S=y(!1),k=y(null),T=y([]),C={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function q(F){return C[F]||"factor-sem-none"}async function R(){const F=d.stockDetail.value&&d.stockDetail.value.stock;if(F){o.value=!0,S.value=!1,T.value=[],k.value=null;try{const J=d.selectedDate.value?`?date=${d.selectedDate.value}`:"",Z=await fetch(`/api/calendar/stock/${F}/factors${J}`).then(s=>s.json()),le=Z&&Array.isArray(Z.factors)?Z.factors:[],ee=[],L={};le.forEach(s=>{L[s.category]||(L[s.category]={category:s.category,items:[]},ee.push(L[s.category])),L[s.category].items.push(s)}),T.value=ee,k.value=Z&&Z.summary||null}catch{S.value=!0}finally{o.value=!1}}}e(d.stockDetailTab,F=>{F==="factor"&&d.stockDetail.value&&d.stockDetailVisible.value&&(R(),v())});const E=y(null);async function v(){try{const F=await fetch("/api/market/factor-ic").then(J=>J.json());E.value=F&&F.success&&F.data?F.data:{}}catch{E.value={}}}function i(F){if(!F||!F.n5)return"—";const J=F.n5.icir!=null?"ICIR "+F.n5.icir:"ICIR —";return F.n5.grade+" ("+J+")"}const m=y(!1),O=y(!1),K=y([]),B=y([]);function U(F){if(F==null)return"—";const J=Number(F);return Number.isNaN(J)?"—":Math.abs(J)>=1e8?(J/1e8).toFixed(2)+"亿":Math.abs(J)>=1e4?(J/1e4).toFixed(1)+"万":String(J)}async function Q(){const F=d.stockDetail&&d.stockDetail.value&&d.stockDetail.value.stock;if(F){m.value=!0,O.value=!1;try{const J=await fetch("/api/market/performance/"+encodeURIComponent(F)).then(Z=>Z.json());J&&J.success?(K.value=J.forecast||[],B.value=J.express||[]):O.value=!0}catch{O.value=!0}finally{m.value=!1}}}e(d.stockDetailTab,F=>{F==="performance"&&Q()});const I=y(null);async function N(){const F=d.stockDetail&&d.stockDetail.value&&d.stockDetail.value.stock;if(!F){I.value=null;return}try{const J=await fetch("/api/focus/stock/"+encodeURIComponent(F)+"/pool").then(Z=>Z.json());I.value=J&&J.success&&J.data?J.data:null}catch{I.value=null}}return e(()=>d.stockDetail&&d.stockDetail.value&&d.stockDetail.value.stock,F=>{F&&d.stockDetailVisible.value?N():I.value=null}),e(()=>d.stockDetailVisible.value,F=>{F?N():I.value=null}),{...d,aiStageText:D,levelRingColor:h,copyAiReport:w,factorLoading:o,factorError:S,factorSummary:k,factorGroups:T,factorSemClass:q,loadFactorPanel:R,factorIc:E,loadFactorIc:v,factorIcGrade:i,perfLoading:m,perfError:O,perfForecast:K,perfExpress:B,fmtY:U,loadPerformance:Q,poolInfo:I,loadPoolInfo:N}}}})();(function(){const{computed:a,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
    `,setup(y){const e=t("qcState");if(!e)return{};const d=a(()=>y.type==="history"?e.selectedHistoryIds.value.includes(y.item.id):e.selectedChatIds.value.includes(y.item.id)),f=a(()=>{const C=e.watchlistCodes.value.has(y.item.stock_code);return{icon:"star",isWatched:C,label:C?"取消收藏":"加入收藏"}}),D=a(()=>y.type==="history"?"bot":"message-circle"),h=a(()=>{var C;return y.type==="history"?((C=y.item.result)==null?void 0:C.provider)||"":y.item.first_msg||""}),r=a(()=>{var C,q;return`${((q=(C=y.item.result)==null?void 0:C.dimensions)==null?void 0:q.length)||9}维度分析`}),w=a(()=>{var q,R;const C=y.type==="history"?y.item.evaluate_time:y.item.created_at||"";return C?y.timeFormat==="datetime"?y.type==="history"?`${C.split("T")[0]} ${(C.split("T")[1]||"").split(".")[0]}`:`${C.split("T")[0]} ${((q=C.split("T")[1])==null?void 0:q.substring(0,5))||""}`:y.type==="history"?(C.split("T")[1]||"").split(".")[0]||C:((R=C.split("T")[1])==null?void 0:R.substring(0,5))||"":""});function o(){y.type==="history"?e.toggleSelectHistory(y.item.id):e.toggleSelectChat(y.item.id)}function S(){y.type==="history"?e.viewAiResult(y.item):e.viewChatSession(y.item)}async function k(){try{await ElementPlus.ElMessageBox.confirm(y.type==="history"?"确定删除这条评估记录吗？此操作不可恢复。":"确定删除这段对话吗？此操作不可恢复。","删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}y.type==="history"?e.deleteSingleHistory(y.item.id):e.deleteChatSession(y.item.id)}function T(C,q){e.toggleWatchlist(C,q)}return{isSelected:d,watchState:f,providerIcon:D,providerText:h,dimsText:r,timeText:w,toggleSelect:o,view:S,remove:k,toggleWatchlist:T,keyClick:e.keyClick,fmtNum:e.fmtNum,evaluatedCodes:e.evaluatedCodes,klineLoadedCodes:e.klineLoadedCodes,levelColor:e.levelColor,levelBg:e.levelBg}}}})();(function(){const{ref:a,computed:t,onMounted:y,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{};const d=["买入","持有","观望","减仓","卖出"],f={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},D={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},h=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],r={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},w=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function o(k){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(k).then(q=>q.json?q.json():q)}function S(){const k=new Date,T=C=>C<10?"0"+C:""+C;return k.getFullYear()+"-"+T(k.getMonth()+1)+"-"+T(k.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",template:`
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
      </div>`,setup(){const k=e("qcState"),T=a(S()),C=a("after_close"),q=a({rows:[],actions:{},total:0,groups:{}}),R=a({sessions:{},total:0}),E=a(null),v=a(!1),i=a(""),m=a(!1),O=a([]),K=a(""),B=a(null),U={},Q=a({});let I=0;const N=a(null),F=t(function(){const M=q.value&&q.value.groups||{};return Object.keys(M).length?M:q.value&&q.value.rows&&q.value.rows.length?{全部:q.value.rows}:{}}),J=t(function(){const M=N.value;return!M||!M.date||M.date!==T.value?"":"已加载最近一次评估: "+M.date+" · "+(r[M.session]||M.session)}),Z=t(function(){const M=q.value&&q.value.base_date;return M?M===T.value?"评分范围: "+M+" 收盘池 + 自选":"评分范围: "+M+" 收盘池(前一交易日算好) + 自选":""});function le(M){if(M==null)return"—";const W=Number(M);return W===Math.floor(W)?String(W):W.toFixed(1)}function ee(M){const W=q.value.total||0,ne=(q.value.actions||{})[M]||0;if(!W)return"0%";const ve=ne/W*100;return ve>0&&ve<4?"4%":ve.toFixed(1)+"%"}function L(M){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[M]||"info"}function s(M){const W=E.value&&E.value.overall&&E.value.overall[M]||null;return!W||W.total===0||W.rate===null||W.rate===void 0?"info":W.rate>=60?"success":W.rate>=40?"warning":"danger"}function b(M){const W=E.value&&E.value.overall&&E.value.overall[M]||null;return!W||W.total===0||W.rate===null||W.rate===void 0?"样本不足":W.rate.toFixed(1)+"% ("+W.total+" 样本)"}function l(){return r[C.value]||C.value}function g(M){const W=O.value.indexOf(M);W>=0?O.value.splice(W,1):O.value.push(M)}function X(M){if(!M||!M.raw_json)return{};if(U[M.stock_code+M.session+M.trade_date])return U[M.stock_code+M.session+M.trade_date];let W={};try{W=JSON.parse(M.raw_json)||{}}catch{W={}}return U[M.stock_code+M.session+M.trade_date]=W,W}async function P(){try{const M=await o("/api/focus/latest"),W=M&&M.success&&M.data;W&&W.date&&(N.value=W,T.value=W.date,W.session&&(C.value=W.session))}catch(M){console.warn("[focus] 最近一次评估解析失败:",M)}}async function p(){m.value=!0;try{const M=await o("/api/focus/results?date="+T.value+"&session="+C.value);q.value=M&&M.success&&M.data||{rows:[],actions:{},total:0,groups:{}},c((q.value.rows||[]).map(function(W){return W.stock_code}))}catch(M){console.warn("[focus] 结果加载失败:",M),q.value={rows:[],actions:{},total:0,groups:{}}}finally{m.value=!1}}async function c(M){const W=Q.value||{},ne=(M||[]).filter(function($){return $&&!W[$]});if(!ne.length)return;const ve=++I,Me=ne.map(function($){return o("/api/focus/stock/"+encodeURIComponent($)+"/pool?date="+T.value).then(function(ce){ce&&ce.success&&ce.data?W[$]=ce.data:W[$]={stock_code:$,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){W[$]={stock_code:$,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(Me)}catch{}ve===I&&(Q.value=Object.assign({},W))}function _(M){const W=k&&k.showStockDetail;if(typeof W=="function"){W(M);return}const ve=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;ve&&ve.info("请从其他页面打开股票详情: "+M)}async function u(){try{const M=await o("/api/focus/history?date="+T.value);R.value=M&&M.success&&M.data||{sessions:{},total:0}}catch(M){console.warn("[focus] 历史加载失败:",M),R.value={sessions:{},total:0}}}async function z(){v.value=!0;try{const M=await o("/api/ai/track");M&&M.success&&M.data?(E.value=M.data,i.value=(M.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):E.value=null}catch(M){console.warn("[focus] 效果块加载失败:",M),E.value=null}finally{v.value=!1}}async function ie(){const M=(K.value||"").trim();if(M){B.value=null;try{const W=await o("/api/focus/stock/"+encodeURIComponent(M));B.value=W&&W.success&&W.data&&W.data.rows||[]}catch(W){console.warn("[focus] 单股历史加载失败:",W),B.value=[]}}}async function G(){await p(),await u(),await z()}return y(async function(){await P(),await G()}),{curDate:T,session:C,results:q,history:R,track:E,trackLoading:v,trackNote:i,detailSplitEnabled:k.detailSplitEnabled,stockDetail:k.stockDetail,loading:m,expanded:O,stockCode:K,stockHistory:B,SESSIONS:h,ACTION_ORDER:d,TRACK_WINDOWS:w,ACTION_DOT:f,TIER_DOT:D,SESSION_LABELS:r,displayGroups:F,latestNote:J,baseNote:Z,sessionLabel:l,fmtScore:le,tagType:L,rateTagType:s,fmtRate:b,toggle:g,detailOf:X,loadResults:p,loadHistory:u,loadTrack:z,loadStockHistory:ie,loadAll:G,poolStatus:Q,openStockDetail:_,actionPct:ee}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:t,nextTick:y}=Vue,{currentView:e,statusFilter:d,dashboardData:f,loadHealthMetrics:D,getLoadDashboardData:h,getLastRefreshTime:r,getFetchPoolSignals:w}=a,o=t(!1),S=t(""),k=new Map,T=t([]),C=t(""),q=t(""),R=t([]),E=t(""),v=window.__quantModules.core||{},i=typeof v.createTtlCache=="function"?v.createTtlCache(15e3):null;let m=0;function O(){const J=Date.now();J-m<5e3||(m=J,ElementPlus.ElMessage.success("有新数据，已更新"))}function K(J,Z,le,ee){!i||!Z||typeof v.silentRefresh!="function"||v.silentRefresh({cache:i,key:Z,fetchFn:async()=>{const L=await fetch(J);if(!L.ok)throw new Error("HTTP "+L.status);const s=await L.json();return le?le(s):s},ttl:i.defaultTtl,apply:ee,onChanged:O,onError:()=>{}})}const B=new Set;async function U(){var J;try{const le=await(await fetch("/api/dates")).json();T.value=((J=le.data)==null?void 0:J.dates)||le.dates||[],T.value.length>0&&(C.value=T.value[T.value.length-1]),q.value=new Date().toLocaleTimeString()}catch(Z){console.error(Z)}}async function Q(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),q.value="刷新中...",k.clear(),await U(),await N(),q.value=new Date().toLocaleTimeString()}catch(J){console.error("数据刷新失败",J)}}function I(){if(!C.value)return;const Z="/api/view/"+(e.value||"day")+"/"+C.value+"?status="+(d.value||"all")+"&format=csv";window.open(Z,"_blank")}async function N(){if(!C.value)return;const J=`${e.value}_${C.value}`;if(B.has(J))return;B.add(J);const Z=`/api/view/${e.value}/${C.value}?status=all`,le=i&&typeof v.makeCacheKey=="function"?v.makeCacheKey("GET",`/api/view/${e.value}/${C.value}`,{status:"all"}):null,ee=(b,l)=>{R.value=b,E.value=l||"",k.set(J,{stocks:b,note:l||""})},L=b=>{ee(b&&b.stocks||[],b&&b.note||"")};if(k.has(J)){L(k.get(J)),K(Z,le,b=>b,L),B.delete(J);return}const s=le&&i?i.get(le):void 0;if(s!==void 0){L(s),K(Z,le,b=>b,L),B.delete(J);return}o.value=!0,S.value={day:"日",week:"周",month:"月",year:"年"}[e.value]||e.value;try{const l=await(await fetch(Z)).json(),g=l.stocks||[];ee(g,l.note||""),i&&le&&i.set(le,{stocks:g,note:l.note||""})}catch{try{const g=await(await fetch(`/api/calendar/${C.value}/consensus`)).json();R.value=(g.consensus||[]).map(X=>({...X,code:X.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{o.value=!1}w(),B.delete(J)}async function F(){const J=i&&typeof v.makeCacheKey=="function"?v.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(i){const Z=i.get(J);if(Z!==void 0){f.value=Z,D().catch(()=>{}),K("/api/dashboard",J,le=>le.data||le,le=>{f.value=le,r().value=Date.now()});return}}await h()(),D().catch(()=>{}),i&&i.set(J,f.value)}return{loading:o,loadingView:S,viewCache:k,dates:T,selectedDate:C,lastLoadTime:q,consensus:R,viewNote:E,loadDates:U,refreshCalendarData:Q,exportCSV:I,loadConsensusData:N,loadDashboardCached:F}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:t}=Vue,{currentKlinePeriod:y,loadIndexKline:e,rememberDialogTrigger:d,menus:f,currentPage:D,currentSubPage:h,stockDetail:r,selectedDate:w}=a,o=ref({indices:[],market_sentiment:null});let S=null;const k=ref(!1),T=ref(null),C=ref(null),q=ref(!1);function R(){window.__quantModules.charts.disposeKline("stockKlineChart")}const E=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{E.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const v=ref(!1),i=ref(null),m=ref(!1),O=ref(0),K=ref(0);async function B(){try{const l=await(await fetch("/api/market/overview")).json();o.value=l,U(l)}catch(b){console.error("获取市场行情失败:",b)}}function U(b){S&&clearInterval(S),b&&b.in_trading_hours&&(S=setInterval(B,6e5))}function Q(b){d(),T.value=b,C.value=null,y.value="daily",I(b.code),window.__quantModules.charts.disposeKline("indexKlineChart"),k.value=!0,setTimeout(async()=>{await e("daily")},500)}async function I(b){try{const g=await(await fetch("/api/ai/index-eval/"+b)).json();g.success&&g.data&&(C.value=g.data)}catch(l){console.warn("[getIndexAiScore] cache check failed:",l)}}async function N(){if(T.value){q.value=!0;try{const l=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:T.value.code,index_name:T.value.name,current_price:T.value.close,pct_chg:T.value.pct_chg})})).json();l.success?C.value=l.data:ElementPlus.ElMessage.error(l.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{q.value=!1}}}function F(b){window.__quantModules.charts.zoomKline("stockKlineChart",b)}function J(){m.value=!0,setTimeout(()=>{m.value=!1},600)}function Z(b,l){if(b===l){J();return}const g=800,X=performance.now(),P=l-b;v.value=!0,i.value={value:P,dir:P>0?"up":"down"},m.value=!0,setTimeout(()=>{m.value=!1},600),setTimeout(()=>{i.value=null},2300);function p(c){const _=c-X,u=Math.min(_/g,1),z=1-Math.pow(1-u,3),ie=Math.round(b+P*z);r.value&&r.value.score_data&&(r.value.score_data.score=ie),u<1?requestAnimationFrame(p):(r.value&&r.value.score_data&&(r.value.score_data.score=l),v.value=!1)}requestAnimationFrame(p)}function le(){if(!r.value||!r.value.score_data)return;const b=r.value.score_data.score;if(b==null)return;const l=600,g=performance.now();m.value=!0,setTimeout(()=>{m.value=!1},600);function X(P){const p=Math.min((P-g)/l,1),c=1-Math.pow(1-p,3),_=Math.round(b*c);r.value&&r.value.score_data&&(r.value.score_data.score=_),p<1?requestAnimationFrame(X):r.value&&r.value.score_data&&(r.value.score_data.score=b)}requestAnimationFrame(X)}async function ee(){var g;if(!r.value||!r.value.stock)return;const b=r.value.stock,l=(g=r.value.score_data)==null?void 0:g.score;try{const X=new Date().toISOString().split("T")[0],P=w.value||X,c=await(await fetch(`/api/calendar/stock/${encodeURIComponent(b)}/score?date=${P}`)).json();if(c.success&&c.score_data){const _=c.score_data.score;r.value&&(r.value.score_data=c.score_data),l!=null&&_!==l?Z(l,_):J()}else J()}catch(X){console.warn("[refreshStockScore] failed:",X)}}function L(b){E.value&&(O.value=b.touches[0].clientX,K.value=b.touches[0].clientY)}function s(b){if(!E.value)return;const l=O.value-b.changedTouches[0].clientX,g=K.value-b.changedTouches[0].clientY;if(Math.abs(l)>Math.abs(g)&&Math.abs(l)>80){const X=f.value.map(function(p){return p.key}),P=X.indexOf(D.value);if(l>0&&P<X.length-1){const p=X[P+1],c=window.__quantGoPage;c?c(p,""):(D.value=p,h.value="")}else if(l<0&&P>0){const p=X[P-1],c=window.__quantGoPage;c?c(p,""):(D.value=p,h.value="")}}}return{marketData:o,marketRefreshTimer:S,fetchMarketData:B,indexDetailVisible:k,indexDetail:T,indexAiResult:C,indexAiLoading:q,showIndexDetail:Q,loadCachedIndexEval:I,doIndexAiEvaluate:N,disposeStockKline:R,isMobile:E,zoomKlineRange:F,scoreAnimating:v,scoreDelta:i,scorePulse:m,triggerScorePulse:J,animateScoreChange:Z,animateScoreEntrance:le,refreshStockScore:ee,touchStartX:O,touchStartY:K,onTouchStart:L,onTouchEnd:s}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:t,currentPage:y,currentSubPage:e}=a,d=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),f=ref("idle"),D=ref("");async function h(){if(!d.value.webhook_url){D.value="请先输入Webhook地址";return}f.value="testing",D.value="";try{const M=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:d.value.webhook_url})})).json();M.success||M.status==="ok"?(D.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(D.value=M.message||"测试失败",ElementPlus.ElMessage.error(D.value))}catch{D.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}f.value="idle"}const r=Vue.ref(!1);async function w(){r.value=!0;try{const M=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{r.value=!1}}const o=ref(!1);function S(){t("ai","chat_history"),o.value=!0,Vue.nextTick(()=>{const G=document.querySelector('input[placeholder*="输入问题"]');G&&G.focus()})}const k=ref([]),T=ref({});async function C(){try{const M=await(await fetch("/api/ai/recommend-strategies")).json();M.success&&(k.value=M.recommendations||[])}catch(G){console.warn("[loadStrategyRecommendations] failed:",G)}}async function q(){try{const M=await(await fetch("/api/ai/usage-stats")).json();M.success&&(T.value=M)}catch(G){console.warn("loadAiUsage failed:",G)}}const R=ref({}),E=ref([]),v=ref(7);async function i(){try{const M=await(await fetch("/api/system/monitor")).json();M.success&&(R.value=M)}catch(G){console.warn("loadSysMonitor failed:",G)}}const m=ref({});async function O(){try{const M=await(await fetch("/api/system/health-detail")).json();M.success&&(m.value=M)}catch(G){console.warn("loadHealthDetail failed:",G)}}async function K(){try{const M=await(await fetch(`/api/analytics/rank?days=${v.value}`)).json();M.success&&(E.value=M.rank||[])}catch(G){console.warn("loadAnalytics failed:",G)}}const B=ref(!1);async function U(){if(!B.value){B.value=!0;try{const M=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return M&&M.success?M.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${M.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${M.date}）`):ElementPlus.ElMessage.error(M&&(M.detail||M.message)||"生成复盘失败"),O(),M}catch(G){ElementPlus.ElMessage.error("生成复盘失败: "+(G.message||""))}finally{B.value=!1}}}const Q=ref(null),I=ref(!1);async function N(){try{const M=await(await fetch("/api/ai/fact-check/latest")).json();Q.value=M&&M.success&&M.data||null}catch(G){console.warn("loadFactCheck failed:",G)}}async function F(){if(!I.value){I.value=!0;try{const M=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return M&&M.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${M.data.pass_rate!=null?M.data.pass_rate+"%":"--"} (${M.data.checked} 个数字)`),N()):ElementPlus.ElMessage.error(M&&(M.detail||M.message)||"事实护栏抽查失败"),M}catch(G){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(G.message||""))}finally{I.value=!1}}}const J=ref([]),Z=ref(!1);async function le(){try{const M=await(await fetch("/api/backup/list")).json();M.success&&(J.value=M.backups||[])}catch(G){console.error("加载备份列表失败",G)}}async function ee(){Z.value=!0;try{const M=await(await fetch("/api/backup/create",{method:"POST"})).json();M.success?(ElementPlus.ElMessage.success(M.message||"备份成功"),le()):ElementPlus.ElMessage.error(M.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{Z.value=!1}}const L=ref(""),s=ref("");async function b(G){L.value=G,s.value="";try{const M=window.__quantModules&&window.__quantModules.core||{},W=typeof M.authHeaders=="function"?M.authHeaders():{},ne=await fetch("/api/reports/export?format="+encodeURIComponent(G),{headers:W});if(!ne.ok)throw new Error("HTTP "+ne.status);const ve=await ne.blob(),Me=URL.createObjectURL(ve),$=document.createElement("a");$.href=Me;const ce=new Date().toISOString().slice(0,10);$.download="report_"+ce+"."+G,document.body.appendChild($),$.click(),document.body.removeChild($),URL.revokeObjectURL(Me),s.value="报表已导出 ("+G.toUpperCase()+")"}catch(M){s.value="报表导出失败: "+(M.message||M)}finally{L.value=""}}async function l(G){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${G} 恢复吗？当前数据将被覆盖。`,"恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(M){console.warn("[restoreBackup] confirm cancelled:",M);return}try{const W=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:G})})).json();W.success?(ElementPlus.ElMessage.success(W.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(W.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const g=ref(!1),X=ref(0),P=[{icon:"calendar",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"bot",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 AI 按钮可随时快速问股。"},{icon:"send",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function p(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{X.value=0,g.value=!0},800)}function c(){g.value=!1,localStorage.setItem("quant_tour_done","1")}function _(){g.value=!1,localStorage.setItem("quant_tour_done","1")}const u=ref(""),z=ref(!1);async function ie(){if(!u.value||!u.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}z.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:u.value.trim(),page:y.value+"/"+e.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(u.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{z.value=!1}}return{feishuConfig:d,feishuTestStatus:f,feishuTestMessage:D,feishuSaving:r,testFeishuWebhook:h,saveFeishuConfig:w,aiFabHidden:o,openAiFab:S,strategyRecommendations:k,aiUsage:T,loadStrategyRecommendations:C,loadAiUsage:q,sysMonitor:R,analyticsRank:E,analyticsDays:v,loadSysMonitor:i,loadAnalytics:K,healthDetail:m,loadHealthDetail:O,reviewTriggering:B,triggerMarketReview:U,factCheck:Q,factCheckRunning:I,loadFactCheck:N,triggerFactCheck:F,backups:J,backupCreating:Z,loadBackups:le,createBackup:ee,restoreBackup:l,reportExporting:L,reportExportMsg:s,exportReport:b,tourVisible:g,tourStep:X,tourSteps:P,maybeShowTour:p,skipTour:c,finishTour:_,feedbackText:u,feedbackSubmitting:z,submitFeedback:ie}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:t}=Vue,{currentView:y,selectedDate:e,dates:d,loadConsensusData:f,hapticFeedback:D}=a,h=t(()=>({day:"天",week:"周",month:"月",year:"年"})[y.value]||"天"),r=t(()=>({day:"date",week:"week",month:"month",year:"year"})[y.value]||"date"),w=t(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[y.value]||"YYYY-MM-DD"),o=t(()=>!e.value||!d.value||d.value.length===0?!1:e.value>d.value[0]),S=t(()=>!e.value||!d.value||d.value.length===0?!1:e.value<d.value[d.value.length-1]);function k(R){D("light"),y.value=R;let E=e.value||d.value[d.value.length-1];if(R==="year"){const v=E.substring(0,4),i=d.value.find(m=>m.startsWith(v));e.value=i||E}else if(R==="month"){const v=E.substring(0,7),i=d.value.find(m=>m.startsWith(v));e.value=i||E}setTimeout(f,50)}function T(R){D("light");const E=e.value,v=d.value,i=v.indexOf(E);if(i<0)return;let m=1;y.value==="week"&&(m=5),y.value==="month"&&(m=22),y.value==="year"&&(m=250);const O=i+R*m;if(O>=0&&O<v.length){const K=v[O];if(y.value==="month"){const B=K.substring(0,7),U=v.find(Q=>Q.startsWith(B));e.value=U||K}else if(y.value==="year"){const B=K.substring(0,4),U=v.find(Q=>Q.startsWith(B));e.value=U||K}else e.value=K;f()}}function C(R){if(!d.value||d.value.length===0)return!1;const E=R.getFullYear(),v=String(R.getMonth()+1).padStart(2,"0"),i=String(R.getDate()).padStart(2,"0"),m=`${E}-${v}-${i}`;return!d.value.includes(m)}function q(R){R&&R.length>10&&(e.value=R.substring(0,10)),f()}return{viewUnit:h,datePickerType:r,dateFormat:w,canNavPrev:o,canNavNext:S,switchView:k,navigateDate:T,disabledDate:C,onDateChange:q}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:t,subPageNames:y,navigateTo:e,currentPage:d,currentView:f,navigateDate:D,switchView:h,getLoadDashboardData:r,refreshCalendarData:w,getLoadAiHistory:o,exportCSV:S,getShowBatchEvaluate:k,openAiFab:T,toggleSidebar:C,showStockDetail:q}=a,R=ref("");async function E(I,N){if(!I||I.trim().length<1){N([]);return}const F=window.QuantCommandPanel;let J=[];F&&t.value&&(J=F.buildSearchSuggestions(I,t.value,y,F.DEFAULT_COMMANDS));const Z=window.__quantModules&&window.__quantModules.pinyin;Z&&Z.searchCoreStocks(I).forEach(function(le){J.push({value:le.code+" "+le.name,type:"stock",code:le.code,name:le.name,label:le.name,subLabel:le.code,icon:"trending-up",iconName:"trending-up"})});try{const ee=await(await fetch("/api/search?q="+encodeURIComponent(I))).json();if(ee.success&&ee.results){const L=ee.results.map(function(b){return{value:b.code+" "+b.name,type:"stock",code:b.code,name:b.name,label:b.name,subLabel:b.code,icon:"trending-up",iconName:"trending-up"}}),s=[];(ee.groups||[]).forEach(function(b){(b.items||[]).forEach(function(l){l.type==="sector"?s.push({value:l.name+" · "+l.subLabel,type:"sector",name:l.name,label:l.name,subLabel:"板块",icon:"layers",iconName:"layers"}):l.type==="strategy"?s.push({value:l.name+" · 策略",type:"strategy",id:l.id,name:l.name,label:l.name,subLabel:"策略",icon:"target",iconName:"target"}):l.type==="menu"&&s.push({value:l.name,type:"menu",menuKey:l.menuKey,name:l.name,label:l.name,subLabel:l.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),N(J.concat(L,s))}else N(J)}catch(le){console.warn("[searchStocks] fetch failed:",le),N(J)}}function v(I){return I?I.type==="menu"?{action:"menu",menuKey:I.menuKey,subPage:I.subPage}:I.type==="command"?{action:"command",key:I.key}:I.type==="sector"?{action:"sector",name:I.name}:I.type==="strategy"?{action:"strategy",id:I.id,name:I.name}:I.type==="stock"||I.code&&I.name?{action:"stock",code:I.code,name:I.name}:null:null}function i(I){R.value="";const N=window.QuantCommandPanel,F=N?N.dispatchSearchSelection(I):v(I);if(F){if(F.action==="menu"){e(F.menuKey,F.subPage);return}if(F.action==="command"){m(F.key);return}if(F.action==="sector"){e("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(F.name);return}if(F.action==="strategy"){e("research","overview");return}F.action==="stock"&&typeof q=="function"&&q(F.code,F.name)}}function m(I){if(I==="refresh"){const N=d.value;N==="strategies"?r().catch(function(){}):N==="calendar"?w().catch(function(){}):N==="ai"&&o().catch(function(){})}else I==="export"?S():I==="batch"?k().value=!0:I==="ai"?T():I==="sidebar"?C():I==="open-eval-history"?e("ai","history"):I==="open-shortterm"&&e("shortterm","overview")}const O=ref(!1),K=ref(!1);function B(I){if(!I)return!1;const N=I.tagName;return N==="INPUT"||N==="TEXTAREA"||N==="SELECT"||I.isContentEditable}function U(I){if(B(I.target))return;const N=I.key.toLowerCase();if(I.ctrlKey&&N==="k"){I.preventDefault(),K.value=!0;return}if(I.ctrlKey&&N==="/"){I.preventDefault(),O.value=!O.value;return}if(I.ctrlKey&&N==="h"){I.preventDefault(),e("ai","history");return}if(I.ctrlKey&&I.shiftKey&&N==="s"){I.preventDefault(),e("shortterm","overview");return}if(!(I.ctrlKey||I.metaKey||I.altKey)){if(N>="1"&&N<="5"){const F=parseInt(N)-1,J=t.value[F];J&&e(J.key,J.subPages[0]||"");return}if(N==="r"&&Q(),(N==="arrowleft"||N==="arrowright"||N==="arrowup"||N==="arrowdown")&&d.value==="calendar")if(I.preventDefault(),N==="arrowleft"||N==="arrowright")D(N==="arrowleft"?-1:1);else{const F=["day","week","month","year"].indexOf(f.value),J=["day","week","month","year"][(F+(N==="arrowup"?-1:1)+4)%4];h(J)}}}function Q(){const I=d.value;I==="strategies"?r().catch(()=>{}):I==="calendar"?w().catch(()=>{}):I==="ai"&&o().catch(()=>{})}return{searchQuery:R,searchStocks:E,onSearchSelect:i,runGlobalCommand:m,shortcutHelpVisible:O,commandPaletteVisible:K,isTypingTarget:B,handleGlobalKeydown:U,refreshCurrentPage:Q}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:t,loadUserConfig:y,loadDates:e,loadDashboardData:d,loadDashboardCached:f,loadHealthMetrics:D,loadConsensusData:h,applyTheme:r,maybeShowTour:w,loadAiVendors:o,loadGroupConfig:S,groupsConfig:k}=a,T=function(ee){const L=window.__quantModules&&window.__quantModules.themes;return L&&L.applyLegacyTheme?L.applyLegacyTheme(ee):r(ee)},C="qc_login_username";let q="";try{q=localStorage.getItem(C)||""}catch{q=""}const R=ref({username:q,password:""}),E=ref(!1),v=ref(!1),i=ref(!1),m=ref({oldPassword:"",newPassword:"",confirmPassword:""}),O=ref(!1),K=ref(!1),B=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),U=ref(1);async function Q(){try{(await(await fetch("/api/setup/status")).json()).needed&&(B.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},U.value=1,K.value=!0)}catch(ee){console.warn("[checkSetupWizard] failed:",ee)}}async function I(){try{const ee={new_password:B.value.newPassword,ai_key:B.value.aiKey,ai_provider:B.value.aiProvider,ai_model:B.value.aiModel,ai_endpoint:B.value.aiEndpoint,tushare_token:B.value.tushareToken},s=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ee)})).json();s.success?(K.value=!1,ElementPlus.ElMessage.success("初始化完成"),await y()):ElementPlus.ElMessage.error(s.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function N(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(K.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function F(){if(!R.value.username||!R.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}E.value=!0;try{const L=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(R.value)})).json();if(L.success){t.value=L.user,localStorage.setItem("quant_user",JSON.stringify(L.user)),localStorage.setItem("quant_token",L.data.access_token),T(L.user.theme||"gold");try{localStorage.setItem(C,R.value.username||"")}catch{}typeof S=="function"&&await S().catch(function(){}),typeof o=="function"&&o(),await y(),await e(),await Promise.all([f(),h(),D().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),L.data&&L.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),w(),L.user.role==="admin"&&setTimeout(Q,500)}else ElementPlus.ElMessage.error(L.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{E.value=!1}}async function J(){v.value=!0;try{const L=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();L.success?(t.value=L.user,localStorage.setItem("quant_user",JSON.stringify(L.user)),localStorage.setItem("quant_token",L.data.access_token),T(L.user.theme||"gold"),typeof S=="function"&&await S().catch(function(){}),await y(),await e(),await d(),D().catch(()=>{}),await h(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(L.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{v.value=!1}}function Z(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{t.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{k&&(k.value={})}catch{}try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function le(){if(!m.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!m.value.newPassword||m.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(m.value.newPassword!==m.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}O.value=!0;try{const ee=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:m.value.oldPassword,new_password:m.value.newPassword})}),L=await ee.json();ee.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),i.value=!1,m.value={oldPassword:"",newPassword:"",confirmPassword:""},Z()):ElementPlus.ElMessage.error(L.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{O.value=!1}}return{loginForm:R,logining:E,guestLogining:v,showChangePassword:i,changePasswordForm:m,changingPassword:O,showSetupWizard:K,setupForm:B,setupStep:U,checkSetupWizard:Q,completeSetupWizard:I,resetSetupWizard:N,handleLogin:F,handleGuestLogin:J,handleLogout:Z,doChangePassword:le}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:t}=Vue;let y=null;const{strategyFilter:e,currentView:d,statusFilter:f,currentPage:D,currentSubPage:h,menus:r,currentUser:w,strategyFilterCounts:o,lazyTick:S,dates:k,selectedDate:T,consensus:C,loadConsensusData:q,fetchMerrillClock:R,fetchMarketData:E,loadWatchlist:v,loadAiHistory:i,preloadWatchlistKline:m,loadChatHistory:O,loadSystemStatus:K,checkTushareConnection:B,loadSysMonitor:U,loadAnalytics:Q,loadHealthDetail:I,loadHealthMetrics:N,loadAiUsage:F,loadFactCheck:J,loadAutoEvaluateConfig:Z,loadDatasourceConfig:le,loadFeishuConfig:ee,loadAiConfig:L,loadAiVendors:s,loadRateLimit:b,loadDataRefreshConfig:l,loadBackups:g,loadAllGroups:X,loadUsers:P,stockDetailTab:p,stockDetailVisible:c,stockKlineLoaded:_,loadStockKline:u,currentKlinePeriod:z,showMerrillDetail:ie,indexDetailVisible:G,restoreDialogFocus:M}=a;t(e,W=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(W.selected)),localStorage.setItem("quant_strategy_filter_mode",W.mode)},{deep:!0}),t([d,f],(W,ne)=>{W[0]!==ne[0]&&q()}),t([D,h],([W,ne])=>{var ve;try{const $=!(W==="calendar"&&ne==="calendar")&&ne||"",ce=$?"#"+W+"/"+$:"#"+W;window.location.hash!==ce&&(window.location.hash=ce)}catch{}if(ne&&localStorage.setItem("quant_last_subpage",ne),!ne&&r.value.find(Me=>Me.key===W)){const Me=r.value.find($=>$.key===W);Me&&Me.subPages.length>0&&(h.value=Me.subPages[0])}if(W==="shortterm"&&ne==="market-review"){const Me=window.__lazyLoaders&&window.__lazyLoaders.research;Me&&Me().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function($){$&&$.name&&!$.__quantRegistered&&(window.__quantApp.component($.name,$),$.__quantRegistered=!0)}),S&&S.value++}).catch(function($){console.warn("[lazy] research 组件补加载失败",$)})}W==="calendar"&&ne==="calendar"&&(!C.value||C.value.length===0)&&(k.value.length>0&&!T.value&&(T.value=k.value[k.value.length-1]||""),setTimeout(q,50)),W==="calendar"&&ne==="pool"&&(!C.value||C.value.length===0)&&(k.value.length>0&&!T.value&&(T.value=k.value[k.value.length-1]||""),setTimeout(q,50)),W==="strategies"&&(ne==="merrill"&&R(),ne==="market"&&E(),ne==="consensus"&&(!C.value||C.value.length===0)&&setTimeout(q,50)),W==="ai"&&(ne==="watchlist"&&(v(),i(),setTimeout(m,500)),ne==="history"&&i(),ne==="overview"&&(i(),v()),ne==="chat_history"&&O()),(W==="system"||W==="ops")&&((ve=w.value)==null?void 0:ve.role)==="admin"&&(ne==="status"&&(K(),B()),ne==="health"&&(I(),N()),ne==="schedule"&&I(),ne==="guard"&&J(),ne==="usage"&&(U(),Q(),I(),N(),F(),J()),ne==="autoeval"&&(Z(),s()),ne==="datasource"&&le(),ne==="feature"&&(ee(),L(),b(),l(),g()),ne==="user"&&(X(),P())),(W==="system"||W==="ops")&&ne==="usage"?y||(y=setInterval(()=>{U(),Q(),I(),N(),F()},3e4)):y&&(clearInterval(y),y=null)}),t(p,(W,ne)=>{W==="kline"&&ne&&ne!=="kline"&&c.value&&(_.value=!1,setTimeout(async()=>{!await u(z.value)&&c.value&&p.value==="kline"&&setTimeout(()=>u(z.value),800)},50))}),t(ie,W=>{W||(document.documentElement.style.overflow="",document.body.style.overflow="")}),t([c,G],([W,ne])=>{!W&&!ne&&M()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:t,applyTheme:y,menus:e,currentPage:d,currentSubPage:f,currentView:D,currentKlinePeriod:h,selectedDate:r,dates:w,loadDates:o,loadConsensusData:S,loadDashboardCached:k,appVersion:T,themes:C,fetchMarketData:q,fetchMerrillStages:R,fetchMerrillClock:E,loadAiConfig:v,loadAiVendors:i,loadAiCatalog:m,currentUser:O,loadUserConfig:K,loadAutoEvaluateConfig:B,loadGroupConfig:U,loadUsers:Q,loadAllGroups:I,loadAiHistory:N}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",t);function F(P,p){const c={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(P==="calendar"&&c[p])return d.value="calendar",f.value="calendar",c[p]&&(D.value=c[p]),!0;if(P==="research"&&(p==="strategy-write"||p==="custom-write")){d.value="research",f.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",p==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const P=window.location.hash||"";if(!P||P==="#")return;const p=P.replace(/^#\/?/,"").split("/"),c=p[0],_=p[1]||"",u=e.value.find(function(z){return z.key===c});if(u&&!F(c,_)){if(!_)d.value=c,f.value=u.subPages[0]||"";else if(u.subPages.indexOf(_)>=0)d.value=c,f.value=_;else return;window.__lazyLoaders&&window.__lazyLoaders[c]&&window.__quantGoPage&&window.__quantGoPage(c,f.value).catch(function(){})}});const J=(P,p=3e3,c="")=>{const _=new Promise((u,z)=>setTimeout(()=>z(new Error("timeout")),p));return Promise.race([P,_]).catch(u=>{console.warn(`[init] ${c||"task"} failed:`,u.message)})},Z=localStorage.getItem("quant_theme"),le=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const P=window.__quantModules.themes;let p=le.theme||"system",c=le.theme_hue!=null&&le.theme_hue!==""?le.theme_hue:null;const _=typeof P.migrateLegacyTheme=="function"?P.migrateLegacyTheme():null;c==null&&_&&(p=_.mode,c=_.hue),c==null&&(c=45),y(p,c)}else Z&&y(Z);await U().catch(function(){}),function(){var P=window.location.hash||"",p=!1;if(P&&P!=="#"){var c=P.replace(/^#\/?/,"").split("/"),_=c[0],u=c[1]||"",z=e.value.find(function(ne){return ne.key===_});z&&(F(_,u)||(d.value=_,u&&z.subPages.indexOf(u)>=0?f.value=u:u||(f.value=z.subPages[0]||"")),p=!0)}if(!p){var ie=localStorage.getItem("quant_last_page");ie&&e.value.some(function(ne){return ne.key===ie})?d.value=ie:le.default_view&&e.value.some(function(ne){return ne.key===le.default_view})&&(d.value=le.default_view);var G=localStorage.getItem("quant_last_subpage");G&&(f.value=G)}var M=localStorage.getItem("quant_last_date");M&&(r.value=M);var W=localStorage.getItem("quant_last_view");W&&(D.value=W),window.__lazyLoaders&&window.__lazyLoaders[d.value]&&window.__quantGoPage&&window.__quantGoPage(d.value,f.value).catch(function(){})}(),fetch("/api/health").then(P=>P.json()).then(P=>{P.version&&(T.value=P.version)}).catch(()=>{});const ee=localStorage.getItem("quant_user"),L=localStorage.getItem("quant_token"),s=!!(ee&&L),b=Promise.all([Promise.resolve().then(()=>{C.value={light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}}),J(q(),3e3,"marketData"),J(R(),2e3,"merrillStages")]).then(()=>{J(E(),3e3,"merrillClock")});if(v(),m(),s&&O.value&&i(),!s||!O.value){await b;return}let l=!0;try{l=(await fetch("/api/users/me")).ok}catch{l=!1}if(!l){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),O.value=null;return}if(O.value){const P=O.value.theme||"",p=window.__quantModules&&window.__quantModules.themes;let c=le.theme||"system",_=le.theme_hue!=null&&le.theme_hue!==""?le.theme_hue:null;if(_==null&&p&&typeof p.migrateLegacyTheme=="function"){const u=p.migrateLegacyTheme();if(u)c=u.mode,_=u.hue;else if(P&&p.LEGACY_MAP&&p.LEGACY_MAP[P]){const z=p.LEGACY_MAP[P];c=z[0],_=z[1]}}_==null&&(_=45),y(c,_)}if(window.__quantModules&&window.__quantModules.preferences){const p=await window.__quantModules.preferences.loadPreferences();var g=localStorage.getItem("quant_last_page");!g&&p.default_view&&e.value.some(function(c){return c.key===p.default_view})&&(d.value=p.default_view),p.theme&&y(p.theme,p.theme_hue!=null&&p.theme_hue!==""?p.theme_hue:null),h&&(p.chart_period==="weekly"||p.chart_period==="monthly")&&(h.value=p.chart_period)}await Promise.all([J(K(),2e3,"userConfig"),J(o(),2e3,"dates")]),B().catch(()=>{}),U().catch(()=>{});const X=d.value==="strategies"?J(k(),2e3,"dashboard"):J(S(),2e3,"consensus");await Promise.all([X,J(Q(),2e3,"users"),J(N(),2e3,"aiHistory")]),I().catch(()=>{})}}}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:t,onMounted:y,onUnmounted:e,watch:d,nextTick:f}=Vue,D=a(!1),h=window.__quantModules&&window.__quantModules.i18n||{},r=h.SUPPORTED_LOCALES||["zh-CN","en"],w=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",o=a(r.indexOf(w)!==-1?w:"zh-CN");typeof h.bindLocale=="function"&&h.bindLocale(o);const S=typeof h.t=="function"?h.t:function(j){return String(j)};function k(j){r.indexOf(j)!==-1&&(o.value=j,typeof h.setLocale=="function"&&h.setLocale(j),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",j))}function T(j,de){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(j,de):j==null?"":String(j)}function C(j){(j.key==="Enter"||j.key===" "||j.key==="Spacebar")&&(j.preventDefault(),j.currentTarget&&typeof j.currentTarget.click=="function"&&j.currentTarget.click())}let q=null;function R(){document.activeElement&&document.activeElement!==document.body&&(q=document.activeElement)}function E(){if(q&&q.isConnected)try{q.focus()}catch{}q=null}const v=a(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{v.value=!0}),window.addEventListener("offline",()=>{v.value=!1})),window.addEventListener("beforeunload",j=>{if(D.value)return j.preventDefault(),j.returnValue="您有未保存的配置变更，确定要离开吗？",j.returnValue});function i(j="light"){typeof navigator<"u"&&navigator.vibrate&&(j==="light"?navigator.vibrate(10):j==="medium"?navigator.vibrate(20):j==="heavy"&&navigator.vibrate([10,30,10]))}const m=useMerrillClock(),{merrillData:O,merrillStagesConfig:K,showMerrillDetail:B,merrillDetailData:U,merrillClockConfig:Q,merrillClockLastUpdated:I,merrillReevalResult:N,merrillReevalLoading:F,stages:J,indicatorList:Z,dimensionScoreList:le,detailDimensionScoreList:ee,confidenceColor:L,timelineStages:s,clockPosition:b,merrillProgressStyle:l,FULL_CYCLE_MONTHS:g,getStageAngle:X,getCycleProgress:P,getCurrentStageMonths:p,getStageTotalMonths:c,isStageCompleted:_,getCharLabel:u,getAssetName:z,getRankColor:ie,fetchMerrillStages:G,fetchMerrillClock:M,loadMerrillTimeline:W,showTimelineStage:ne,merrillTimeline:ve,timelineLoading:Me,showStageDetail:$,saveMerrillClockConfig:ce,doMerrillReevaluate:Re,startAutoRefresh:se,stopAutoRefresh:fe,merrillSnapshots:Te,merrillSnapshotsTotal:me,fetchMerrillSnapshots:we}=m,qe=a(localStorage.getItem("sidebar_collapsed")==="1");function re(){qe.value=!qe.value,localStorage.setItem("sidebar_collapsed",qe.value?"1":"0")}const ae=a(null),ge=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","about","glossary","notification"],guestSubPages:["config","about"]}],Oe=t(()=>{var Ge,Ft,Ut;const j=((Ge=ye.value)==null?void 0:Ge.role)||"guest",de=((Ft=ye.value)==null?void 0:Ft.group)||j,be=((Ut=ae.value)==null?void 0:Ut[de])||null;return ge.map(At=>{if(be&&be.visible_menus&&At.key in be.visible_menus&&!be.visible_menus[At.key])return null;const ga={...At,name:S("nav."+At.key)||At.name};return be!=null&&be.visible_sub_pages&&(ga.subPages=At.subPages.filter(os=>{const Pd=At.key+"."+os;return be.visible_sub_pages[Pd]!==!1})),At.key==="system"&&j==="guest"&&At.guestSubPages&&(ga.subPages=At.guestSubPages),ga}).filter(Boolean)});async function Ae(){try{if(!localStorage.getItem("quant_token"))return;const de=await fetch("/api/groups/my");if(de.ok){const be=await de.json();ae.value={[be.group_id]:be.group}}}catch(j){console.warn("loadGroupConfig:",j)}}const Be=a("strategies"),St=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},Pt=a(St.navMode);function xt(j){const de=window.__quantModules&&window.__quantModules.navModeCore;Pt.value=de?de.normalizeNavMode(j):j==="tree"||j==="toptab"?j:"toptab",de&&de.writePrefs({navMode:Pt.value})}const _e=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function ke(j,de=""){i("light"),Be.value=j,te.value=de,localStorage.setItem("quant_last_subpage",de)}function Ie(){const j=Oe.value;if(!j||!j.length)return;if(!j.some(function(Ve){return Ve.key===Be.value})){const Ve=j[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",Ve.key),Be.value=Ve.key,te.value=Ve.subPages&&Ve.subPages[0]||"";return}const be=j.find(function(Ve){return Ve.key===Be.value});be&&be.subPages&&be.subPages.length&&!be.subPages.includes(te.value)&&(te.value=be.subPages[0])}const De=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],Je=a("multifactor"),Qe=a(null),$e=a(1e5),Ct=a(!1),bt=a(null);let vt=null,Dt=null;async function ta(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const de={initial_capital:$e.value||1e5};Qe.value&&Qe.value.length===2&&(de.start_date=Qe.value[0],de.end_date=Qe.value[1]),Ct.value=!0,bt.value=null;try{const be=await fetch("/api/strategies/"+Je.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(de)});if(!be.ok){const Ft=await be.json().catch(()=>({}));throw new Error(Ft.detail||"回测失败")}const Ve=await be.json(),Ge=Ve.result||{};if(!Ge.success)throw new Error(Ge.message||"回测失败");Ve.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),bt.value={total_return_pct:((Ge.total_return??0)*100).toFixed(2),annual_return_pct:((Ge.annual_return??0)*100).toFixed(2),max_drawdown_pct:((Ge.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(Ge.sharpe_ratio??0).toFixed(2),win_rate:((Ge.win_rate??0)*100).toFixed(2),out_sample:Ge.outsample_total_return===void 0?"":((Ge.outsample_total_return??0)*100).toFixed(2),overfit_warning:Ge.overfit_warning||!1,message:Ge.message||""},A(Ge.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(be){ElementPlus.ElMessage.error(be.message||"回测失败")}finally{Ct.value=!1}}function A(j){const de=document.getElementById("backtestEquityChart");if(!de||!j||j.length===0)return;const be=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Ve=()=>{Dt=j,vt&&(vt.dispose(),vt=null),vt=echarts.init(de),vt.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const Ge=j.map(Ut=>Ut.date||Ut[0]),Ft=j.map(Ut=>Ut.value??Ut[1]);vt.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:Ge,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:Ft,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};be?be().then(Ve).catch(()=>{}):Ve()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){Dt&&A(Dt)}));const te=a("overview"),Se=t(()=>{const j=ge.find(de=>de.key===Be.value);return j?j.name:Be.value}),Le=a(0),He=t(()=>{Le.value;const j={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},de=te.value;return Be.value==="shortterm"&&de==="market-review"?"qc-research-page":Be.value==="ops"&&de==="execution"?"qc-strategies-page":j[Be.value]||""}),wt=a(!1),Ye=a({}),Ke=a([]);a("");const dt=a([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),it=a("day"),Y=a("all"),ye=a(null);d(Oe,function(){Ie()}),d([Be,te],function(){const j=document.querySelector(".main-content");j&&(j.scrollTop=0)}),function(){if(typeof localStorage>"u")return;const j=localStorage.getItem("quant_user"),de=localStorage.getItem("quant_token");if(j&&de)try{ye.value=JSON.parse(j)}catch{}}();const Xe=a(!1),mt=a("kline"),at=a(null),Nt=a(!1),We=a(localStorage.getItem("qc_detail_mode")||"split"),qt=a(window.innerWidth<=1024),Ht=t(()=>We.value==="split"&&!qt.value);function zt(j){We.value=j;try{localStorage.setItem("qc_detail_mode",j)}catch{}}window.addEventListener("resize",()=>{qt.value=window.innerWidth<=1024});const rt=35,Et=a(parseInt(localStorage.getItem("qc_split_width")||"",10)||null);function Bt(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",Et.value?Et.value+"px":rt+"%")}Bt();function Gt(j){const de=Math.max(1,Math.min(j,2e3));Et.value=de,Bt();try{localStorage.setItem("qc_split_width",String(de))}catch{}}function gt(j){if(Et.value)return Et.value;const de=j?j.getBoundingClientRect().width:0;return Math.max(200,Math.floor(de*rt/100))}let ct=null;function Wt(j,de){if(!de||qt.value)return;j.preventDefault();const be=de.getBoundingClientRect().width;ct={startX:j.clientX,startW:gt(de),minW:Math.max(200,Math.floor(be*rt/100)),maxW:Math.floor(be/2)},document.body.classList.add("qc-split-resizing")}function Mt(j){if(!ct)return;const de=j.clientX-ct.startX;let be=ct.startW+de;be=Math.max(ct.minW,Math.min(be,ct.maxW)),Et.value=be,Bt();try{localStorage.setItem("qc_split_width",String(be))}catch{}}function $t(){ct&&(ct=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",Mt),document.addEventListener("mouseup",$t));function Yt(j){const de=j.target&&j.target.closest?j.target.closest("[data-split-resize]"):null;if(!de)return;const be=de.closest("[data-split-root]");Wt(j,be)}typeof document<"u"&&document.addEventListener("mousedown",Yt,!0);const aa={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于",glossary:"术语表"},pt=a({});function sa(j,de){return aa[de]||de}function la(j){const de=ge.find(Ve=>Ve.key===j);if(!de||!de.subPages||!de.subPages.length)return;if(!(pt.value[j]||[]).length){const Ve=de.subPages[0];pt.value=Object.assign({},pt.value,{[j]:[{subPage:Ve,title:sa(j,Ve)}]})}}function ma(j,de){const be=window.__quantModules&&window.__quantModules.tabsCore,Ve=sa(j,de);if(be){const Ge=be.openTab(pt.value,j,de,Ve);pt.value=Ge.groups}else{const Ge=pt.value[j]||[];Ge.some(Ft=>Ft.subPage===de)||(pt.value=Object.assign({},pt.value,{[j]:Ge.concat([{subPage:de,title:Ve}])}))}ke(j,de)}function ha(j,de){const be=window.__quantModules&&window.__quantModules.tabsCore,Ve=te.value;let Ge=null;if(be)Ge=be.closeTab(pt.value,j,de,Ve),pt.value=Ge.groups;else{const At=pt.value[j]||[];pt.value=Object.assign({},pt.value,{[j]:At.filter(ga=>ga.subPage!==de)})}if(!(pt.value[j]||[]).length){la(j);const At=ge.find(os=>os.key===j),ga=At&&At.subPages&&At.subPages[0];ga&&ke(j,ga);return}const Ut=Ge?Ge.nextActive:null;Ut&&ke(j,Ut)}function oa(j,de){if(!(pt.value[j]||[]).some(Ve=>Ve.subPage===de)){ma(j,de);return}ke(j,de)}d([Be,te],([j,de])=>{la(j);const be=pt.value[j]||[];de&&!be.some(Ve=>Ve.subPage===de)&&(pt.value=Object.assign({},pt.value,{[j]:be.concat([{subPage:de,title:sa(j,de)}])}))},{immediate:!0});const H=function(j){if(!(j.ctrlKey&&j.key==="Tab"))return;const de=Be.value,be=pt.value[de]||[];if(be.length<=1)return;j.preventDefault();const Ve=te.value,Ge=Math.max(0,be.findIndex(At=>At.subPage===Ve)),Ft=j.shiftKey?(Ge-1+be.length)%be.length:(Ge+1)%be.length,Ut=be[Ft];Ut&&oa(de,Ut.subPage)};window.addEventListener("keydown",H);const xe=a({light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}),je=a("light"),Pe=[45,220,0,140,270,320,-1],ot={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色","-1":"中性"},Ze=a(45),Rt=a(function(){const j=window.__quantModules&&window.__quantModules.preferences;return j&&j.getPreference&&j.getPreference("theme")||"system"}());(function(){const j=window.__quantModules&&window.__quantModules.preferences,de=j&&j.getPreference&&j.getPreference("theme_hue");de!=null&&de!==""&&(Ze.value=parseInt(de,10))})();const Ot=a("comfortable");(function(){const j=window.__quantModules&&window.__quantModules.preferences;j&&j.applyDensity&&(Ot.value=j.applyDensity()||"comfortable")})();function Kt(j){return j<0?"hsl(0, 0%, 46%)":"hsl("+j+", 75%, 42%)"}function pa(j){return ot[j]||"自定义 "+j}const ya=a(""),ba=a([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),na=a({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),Ra=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],ra=a({day:[],week:[],month:[],year:[]}),za=a({});function ca(j,de){let be=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(be=window.__quantModules.themes.applyTheme(j,de)),je.value=be&&be.mode?be.mode:j==="dark"||j==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function qa(j,de){const be=window.__quantModules&&window.__quantModules.preferences;if(!(!be||!be.setPreferences))try{be.setPreferences({theme:j}),de!=null&&de!==""&&be.setPreferences({theme_hue:parseInt(de,10)})}catch{}}function jt(j,de){ca(j,de),de!=null&&de!==""&&(Ze.value=parseInt(de,10));const be=window.__quantModules&&window.__quantModules.themes;let Ve=j;be&&be.LEGACY_MAP&&be.LEGACY_MAP[j]&&(Ve=be.LEGACY_MAP[j][0]),Ve==="light"||Ve==="dark"||Ve==="system"?Rt.value=Ve:Rt.value=je.value,Ve==="system"&&(Ve=je.value),qa(Ve,de),ye.value&&(fetch(`/api/users/${ye.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:Ve})}),ye.value.theme=Ve,localStorage.setItem("quant_user",JSON.stringify(ye.value)))}function wa(j){const de=window.__quantModules&&window.__quantModules.preferences,be=de&&de.getPreference?de.getPreference("theme_hue"):null;jt(j,be)}function Ea(j){const de=window.__quantModules&&window.__quantModules.preferences;!de||!de.applyDensity||(Ot.value=de.applyDensity(j)||"comfortable",de.setPreference&&de.setPreference("info_density",Ot.value))}function Aa(j){Ze.value=parseInt(j,10);const de=window.__quantModules&&window.__quantModules.preferences,be=de&&de.getPreference&&de.getPreference("theme")||"light";jt(be,Ze.value)}const ka=a(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function x(j){ka.value=!!j;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",j?"show":"hide")}catch{}}const n=t(()=>{const j=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return ka.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...j]:j}),V=a("daily");(function(){try{const de=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(de==="weekly"||de==="monthly")&&(V.value=de)}catch{}})();const oe=a(!1),Ce=a(""),Ee=a(!1),ut=a(!1),Ue=a({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),kt=["MA5","MA10","MA20","MA60"],Jt=a(!1);let Tt=0;async function Qt(j){if(!at.value)return!1;const de=++Tt;oe.value=!0,V.value=j;try{const Ve=await(await fetch(`/api/market/kline/${at.value.stock}?period=${j}&limit=60`)).json();if(!Ve.success||!Ve.data)throw new Error(Ve.message||"数据获取失败");return Ce.value=Ve.degraded_from?"分钟数据("+Ve.degraded_from+")暂不可用, 已降级展示日线":"",$s(at.value.stock),de!==Tt?!1:(mt.value!=="kline"||(ut.value=!0,await f(),window.__quantModules.charts.renderKlineTo("stockKlineChart",Ve.data,j,!1,{isMobile:ms.value,onLegend:Ge=>{Object.keys(Ue.value).forEach(Ft=>{Ft in Ge&&(Ue.value[Ft]=!!Ge[Ft])})}}),fa()),!0)}catch(be){return console.error("[kline] 加载失败:",at.value&&at.value.stock,j,be),mt.value==="kline"&&(ut.value=!1,Ce.value="",ElementPlus.ElMessage.error("K线加载失败: "+(be&&be.message?be.message:"数据源不可达，请重试"))),!1}finally{oe.value=!1}}async function Xt(j){if(Ua.value){Ee.value=!0,V.value=j;try{const be=await(await fetch(`/api/market/kline/${Ua.value.code}?period=${j}&limit=60`)).json();if(!be.success||!be.data)throw new Error(be.message||"数据获取失败");Jt.value=!0,await f(),window.__quantModules.charts.renderKlineTo("indexKlineChart",be.data,j,!0,{isMobile:ms.value,onLegend:Ve=>{Object.keys(Ue.value).forEach(Ge=>{Ge in Ve&&(Ue.value[Ge]=!!Ve[Ge])})}}),fa()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{Ee.value=!1}}}async function _t(j){if(!ut.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await Qt(j)}async function et(j){if(!Jt.value){ElementPlus.ElMessage.info("请先加载K线");return}await Xt(j)}function Vt(j){const de=(Xe.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(Wa.value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);de&&de.dispatchAction({type:"legendToggleSelect",name:j})}function fa(){["K线","MA5","MA10","MA20","MA60"].forEach(j=>{Ue.value[j]=!0})}async function ht(){const j=await fetch("/api/system/metrics");if(!j.ok)throw new Error("metrics "+j.status);const de=await j.json(),be=Array.isArray(de)?de:de&&de.data_sources||[];Ke.value=be}const Na=()=>is,ul=()=>Es,vl=()=>Wo,ml=()=>La,pl=()=>ts,fl=window.__quantAppLogic.data.create({currentView:it,statusFilter:Y,dashboardData:Ye,loadHealthMetrics:ht,getLoadDashboardData:Na,getLastRefreshTime:ul,getFetchPoolSignals:vl}),{loading:gl,loadingView:hl,viewCache:yl,dates:Oa,selectedDate:Zt,lastLoadTime:bl,consensus:_a,viewNote:wl,loadDates:cs,refreshCalendarData:ds,exportCSV:us,loadConsensusData:Ma,loadDashboardCached:ja}=fl,kl=window.__quantAppLogic.market.create({currentKlinePeriod:V,loadIndexKline:Xt,rememberDialogTrigger:R,menus:Oe,currentPage:Be,currentSubPage:te,stockDetail:at,selectedDate:Zt}),{marketData:_l,indexDetailVisible:Wa,indexDetail:Ua,indexAiResult:xl,indexAiLoading:Sl,fetchMarketData:Ga,showIndexDetail:Cl,loadCachedIndexEval:ql,doIndexAiEvaluate:El,disposeStockKline:vs,isMobile:ms,zoomKlineRange:Ml,scoreAnimating:Tl,scoreDelta:Pl,scorePulse:Dl,refreshStockScore:Ya,animateScoreEntrance:Ja,onTouchStart:Rl,onTouchEnd:zl}=kl,Al=window.__quantAppLogic.ops.create({navigateTo:ke,currentPage:Be,currentSubPage:te}),{feishuConfig:ps,feishuTestStatus:Ll,feishuTestMessage:Il,testFeishuWebhook:Nl,saveFeishuConfig:Ol,aiFabHidden:jl,openAiFab:fs,strategyRecommendations:Vl,aiUsage:Fl,loadStrategyRecommendations:gs,loadAiUsage:Qa,sysMonitor:Hl,analyticsRank:Bl,analyticsDays:Kl,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:Wl,loadHealthDetail:bs,reviewTriggering:Ul,triggerMarketReview:Gl,factCheck:Yl,factCheckRunning:Jl,loadFactCheck:ws,triggerFactCheck:Ql,backups:$l,backupCreating:Xl,loadBackups:ks,createBackup:Zl,restoreBackup:en,reportExporting:tn,reportExportMsg:an,exportReport:sn,tourVisible:ln,tourStep:nn,tourSteps:on,maybeShowTour:rn,skipTour:cn,finishTour:dn,feedbackText:un,feedbackSubmitting:vn,submitFeedback:mn}=Al,pn=window.__quantAppLogic.nav.create({currentView:it,selectedDate:Zt,dates:Oa,loadConsensusData:Ma,hapticFeedback:i}),{viewUnit:fn,datePickerType:gn,dateFormat:hn,canNavPrev:yn,canNavNext:bn,switchView:_s,navigateDate:xs,disabledDate:wn,onDateChange:kn}=pn,_n=window.__quantAppLogic.keys.create({menus:Oe,subPageNames:aa,navigateTo:ke,currentPage:Be,currentView:it,navigateDate:xs,switchView:_s,getLoadDashboardData:Na,refreshCalendarData:ds,getLoadAiHistory:ml,exportCSV:us,getShowBatchEvaluate:pl,openAiFab:fs,toggleSidebar:re,showStockDetail:Cs}),{searchQuery:xn,searchStocks:Sn,onSearchSelect:Cn,shortcutHelpVisible:qn,commandPaletteVisible:En,handleGlobalKeydown:Ss}=_n;let Va=0;async function Cs(j){const de=++Va;R(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(j,""),Xa.value=null,V.value="daily",ut.value=!1,mt.value="kline",at.value=null,Nt.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),Xe.value=!0,f(()=>Ja());try{const be=await fetch(`/api/calendar/stock/${j}?date=${Zt.value}`);if(de!==Va)return;at.value=await be.json(),at.value&&at.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(j,at.value.name)}catch{if(de!==Va)return;ElementPlus.ElMessage.error("加载失败"),at.value={stock:j,name:"",total_days:0}}finally{de===Va&&(Nt.value=!1)}setTimeout(async()=>{await Qt("daily"),Ya()},500),as(j)}const Mn={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},Tn={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function Pn(j){return Mn[j]||"var(--text-tertiary)"}function Dn(j){return Tn[j]||"var(--bg-hover)"}const Rn=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:ut,stockDetailVisible:Xe,stockDetailTab:mt,stockDetail:at,disposeStockKline:vs}):{},{chatSessions:zn,chatHistoryView:An,selectedChatIds:Ln,expandedChatDates:In,expandedChatMonths:Nn,expandedChatStocks:On,chatHistoryLoading:jn,chatHistoryError:Vn,allChatSessionsFlat:Fn,chatGroupedByDate:Hn,chatGroupedByMonth:Bn,chatGroupedByStock:Kn,toggleSelectChat:Wn,toggleSelectChatDate:Un,toggleSelectChatMonth:Gn,toggleSelectChatStock:Yn,toggleChatDateExpand:Jn,toggleChatMonthExpand:Qn,toggleChatStockExpand:$n,selectAllChatSessions:Xn,deleteSelectedChatSessions:Zn,viewChatSession:ei,loadChatHistory:qs,deleteChatSession:ti,renderMarkdown:ai,stockChatInput:si,stockChatMessages:li,stockChatLoading:ni,stockChatError:ii,askStockSend:oi,askStockQuick:ri}=Rn,ci=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:ye,applyTheme:ca,allMenuDefs:ge,loadGroupConfig:Ae}):{},{userList:di,userSearch:ui,groupFilter:vi,userPageTab:mi,expandedGroups:pi,addMemberGroupMap:fi,filteredUsers:gi,toggleGroupExpand:hi,removeMemberFromGroupInline:yi,addMemberToGroupInline:bi,changeUserGroup:wi,showAddUser:ki,editingUser:_i,userForm:xi,savingUser:Si,editingGroup:Ci,menuConfigDialog:qi,memberDialog:Ei,groupEditForm:Mi,subPageCache:Ti,showAddGroup:Pi,addGroupForm:Di,savingGroup:Ri,groupMembers:zi,addMemberUsername:Ai,selectedMemberGroup:Li,subPageSectionExpanded:Ii,toggleSubPageSection:Ni,getGroupMemberCount:Oi,getMenuEnabledCount:ji,groupCount:Vi,openMemberManager:Fi,loadGroupMembers:Hi,addMemberToGroup:Bi,removeMemberFromGroup:Ki,availableUsersForGroup:Wi,onParentToggle:Ui,openMenuConfig:Gi,saveMenuConfig:Yi,deleteGroupConfig:Ji,createGroup:Qi,allGroups:$i,getGroupName:Xi,loadAllGroups:$a,loadUsers:Fa,editUser:Zi,saveUser:eo,deleteUser:to,toggleUserEnabled:ao,resetUserPassword:so}=ci,lo=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:_a,currentPage:Be,currentSubPage:te,dashboardData:Ye,searchKeyword:ya,statusFilter:Y,strategyFilter:na,strategyFilterCounts:ra}):{},{applyStrategyFilter:ig,statusCounts:no,stockPool:io,strategyDistribution:oo,strategyPreviewCount:ro,saveStrategyFilter:co,filteredConsensusRank:uo,currentPoolSize:vo,filteredStrategyCounts:mo,poolChangeBadge:po,timeBarPercent:fo,lastRefreshTime:Es,navigateToStrategyFilter:go}=lo,ho=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:D,consensus:_a}):{},{aiResult:Xa,lastEvalTime:yo,evalHistoryComparison:bo,checklistItems:wo,aiHistory:Ms,selectedHistoryIds:Ts,expandedDates:Ps,expandedMonths:ko,expandedStocks:Ds,poolSignals:_o,toggleMonthExpand:xo,aiHistoryView:So,selectedWatchlistCodes:Rs,showAutoEvaluateSettings:zs,savingConfig:As,autoEvaluateScope:Ls,aiVendors:Co,aiCatalog:qo,aiModelsError:Eo,testingAllModels:Mo,savingAiModels:To,loadAiVendors:Ha,loadAiCatalog:Is,saveAiVendors:Ns,saveAiModels:Po,testVendorModel:Do,testAllVendorModels:Ro,fetchVendorModels:zo,addVendorFromCatalog:Ao,addCustomVendor:Lo,addVendorModel:Io,removeVendorModel:No,removeVendor:Oo,toggleVendorKeyReveal:jo,toggleVendorEdit:Vo,autoEvaluateConfig:Za,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,showBatchEvaluate:ts,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,aiConfig:Js,selectedPreset:Fo,providerInfo:Ho,aiPresets:og,applyPreset:Bo,onProviderChange:Ko,fetchPoolSignals:Wo,cancelPoolSignals:Qs,loadLastEvaluation:as}=ho,Uo=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:ye,selectedDate:Zt,stockDetail:at,stockDetailTab:mt,stockDetailVisible:Xe,stockDetailLoading:Nt,stockKlineLoaded:ut,viewCache:yl,animateScoreEntrance:Ja,loadStockKline:Qt,refreshStockScore:Ya,disposeStockKline:vs,aiHistory:Ms,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,aiResult:Xa,loadLastEvaluation:as,autoEvaluateConfig:Za,autoEvaluateScope:Ls,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,expandedDates:Ps,expandedStocks:Ds,savingConfig:As,selectedHistoryIds:Ts,selectedWatchlistCodes:Rs,showAutoEvaluateSettings:zs,showBatchEvaluate:ts}):{},{quickEvalStock:Go,evalStrategy:Yo,watchlistSort:Jo,watchlist:Qo,watchlistCodes:$o,sortedWatchlist:Xo,getWatchlistScore:Zo,getLatestScore:rg,addSearchResult:er,evaluatedCodes:tr,klineLoadedCodes:ar,markKlineLoaded:$s,watchlistSearch:sr,watchlistResults:lr,watchlistSearching:nr,dataRefreshConfig:ir,dataRefreshReloading:or,dataRefreshSaving:rr,aiHistoryLoading:cr,aiHistoryError:dr,aiHistoryTotal:ur,aiHistoryLoadingMore:vr,hasMoreAiHistory:mr,loadMoreAiHistory:pr,watchlistLoading:fr,doAiEvaluate:gr,loadAiHistory:La,deleteSingleHistory:hr,toggleSelectHistory:yr,clearSelection:br,clearWatchlistSelection:wr,batchReevaluateHistory:kr,batchAddToWatchlist:_r,batchRemoveWatchlist:xr,toggleSelectWatchlist:Sr,selectAllHistory:Cr,selectAllWatchlist:qr,deleteSelectedHistory:Er,loadAutoEvaluateConfig:Xs,saveAutoEvaluateConfig:Mr,loadWatchlist:Zs,addToWatchlist:Tr,removeFromWatchlist:Pr,clearWatchlist:Dr,toggleWatchlist:Rr,showStockKline:zr,preloadingKline:Ar,preloadWatchlistKline:el,watchlistEvaluate:Lr,batchEvaluateWatchlist:Ir,batchEvaluateSelected:Nr,searchStockForWatchlist:Or,loadDataRefreshConfig:tl,saveDataRefreshConfig:jr,triggerDataReload:Vr,triggerDataPull:Fr,dataPullRunning:Hr,groupedByDate:Br,aiHistoryByStock:Kr,groupedByMonth:Wr,aiHistoryStockCount:Ur,scoreDistribution:Gr,quickEvaluate:Yr,toggleDateExpand:Jr,toggleSelectDate:Qr,toggleSelectMonth:$r,toggleStockExpand:Xr,toggleSelectStock:Zr,registerTrendChart:ec,viewAiResult:tc,doBatchEvaluate:ac,realtimeQuotes:sc,realtimeDegraded:lc,realtimeWsState:nc,connectRealtimeQuotes:ic,disconnectRealtimeQuotes:oc,quoteWarningFor:rc,realtimeQuoteColor:cc,realtimePriceText:dc,realtimePctText:uc,realtimeRatioText:vc,REALTIME_DEGRADED_TEXT:mc,REALTIME_FALLBACK_TEXT:pc}=Uo,fc=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:De}):{},{btStrategyOptions:gc,btSelectedStrategies:hc,toggleBtStrategy:yc,btDateRange:bc,btCapital:wc,btCommissionRate:kc,btIncludeBenchmark:_c,btRunning:xc,btResult:Sc,btError:Cc,btMetrics:qc,btAnnualReturns:Ec,btTrades:Mc,btStrategyMetricsRows:Tc,btDrawdownRegion:Pc,runBacktestWorkbench:Dc,exportBacktestCSV:Rc,registerBacktestNavChart:zc,btFmtNum:Ac}=fc,Lc=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:D,aiConfig:Js,aiLoading:es,feishuConfig:ps,currentTheme:je,changeTheme:jt,autoEvaluateConfig:Za,currentUser:ye,strategyFilter:na,applyTheme:ca,dashboardData:Ye,lastRefreshTime:Es,saveAiModels:Po}):{},{configSaving:Ic,globalConfigDirty:Nc,lastSavedTime:Oc,feishuConfigOriginal:cg,aiConfigOriginal:dg,tushareConfigOriginal:ug,tushareConfig:jc,tushareStatus:Vc,datasourceConfig:Fc,datasourceStatus:Hc,syncingData:Bc,stockCount:Kc,tradeDateCount:Wc,aiStatus:Uc,appVersion:al,showImportDialog:Gc,rateLimitConfig:Yc,rateLimitDirty:Jc,rateLimitSaving:Qc,loadRateLimit:ss,saveRateLimit:$c,saveAiConfig:Xc,testAiApi:Zc,exportConfig:ed,importConfig:td,saveAllConfig:ad,resetAllConfig:sd,testTushareConnection:ld,checkTushareConnection:Ba,syncStockData:nd,loadTushareConfig:sl,loadDatasourceConfig:ll,saveDatasourceConfig:id,testDatasource:od,toggleDatasourceKeyReveal:rd,toggleDatasourceEdit:cd,loadFeishuConfig:ls,loadAiConfig:Ka,loadUserConfig:nl,loadSystemStatus:ns,loadDashboardData:is}=Lc,dd=window.__quantAppLogic.auth.create({currentUser:ye,loadUserConfig:nl,loadDates:cs,loadDashboardData:is,loadDashboardCached:ja,loadHealthMetrics:ht,loadConsensusData:Ma,applyTheme:ca,maybeShowTour:rn,loadAiVendors:Ha,loadGroupConfig:Ae,groupsConfig:ae}),{loginForm:ud,logining:vd,guestLogining:md,showChangePassword:pd,changePasswordForm:fd,changingPassword:gd,showSetupWizard:hd,setupForm:yd,setupStep:bd,checkSetupWizard:wd,completeSetupWizard:kd,resetSetupWizard:_d,handleLogin:xd,handleGuestLogin:Sd,handleLogout:Cd,doChangePassword:qd}=dd;window.__quantAppLogic.watch.register({strategyFilter:na,currentView:it,statusFilter:Y,currentPage:Be,currentSubPage:te,menus:Oe,currentUser:ye,strategyFilterCounts:ra,lazyTick:Le,dates:Oa,selectedDate:Zt,consensus:_a,loadConsensusData:Ma,fetchMerrillClock:M,fetchMarketData:Ga,loadWatchlist:Zs,loadAiHistory:La,preloadWatchlistKline:el,loadChatHistory:qs,loadSystemStatus:ns,checkTushareConnection:Ba,loadSysMonitor:hs,loadAnalytics:ys,loadHealthDetail:bs,loadHealthMetrics:ht,loadAiUsage:Qa,loadFactCheck:ws,loadAutoEvaluateConfig:Xs,loadDatasourceConfig:ll,loadFeishuConfig:ls,loadAiConfig:Ka,loadAiVendors:Ha,loadRateLimit:ss,loadDataRefreshConfig:tl,loadBackups:ks,loadAllGroups:$a,loadUsers:Fa,stockDetailTab:mt,stockDetailVisible:Xe,stockKlineLoaded:ut,loadStockKline:Qt,currentKlinePeriod:V,showMerrillDetail:B,indexDetailVisible:Wa,restoreDialogFocus:E});const Ed=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:Ss,applyTheme:ca,menus:Oe,currentPage:Be,currentSubPage:te,currentView:it,currentKlinePeriod:V,selectedDate:Zt,dates:Oa,loadDates:cs,loadConsensusData:Ma,loadDashboardCached:ja,appVersion:al,themes:xe,fetchMarketData:Ga,fetchMerrillStages:G,fetchMerrillClock:M,loadMerrillTimeline:W,showTimelineStage:ne,merrillTimeline:ve,timelineLoading:Me,loadAiConfig:Ka,loadAiVendors:Ha,loadAiCatalog:Is,currentUser:ye,loadUserConfig:nl,loadAutoEvaluateConfig:Xs,loadGroupConfig:Ae,loadUsers:Fa,loadAllGroups:$a,loadAiHistory:La}),{runOnMounted:Md}=Ed;window.__quantGoPage=async(j,de)=>{try{const be=window.__lazyLoaders&&window.__lazyLoaders[j];be&&await be()}catch(be){console.warn("[lazy] 页面组件加载失败",j,be)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(be=>{be&&be.name&&!be.__quantRegistered&&(window.__quantApp.component(be.name,be),be.__quantRegistered=!0)}),Le&&Le.value++,Be.value=j,de&&(te.value=de)};let Ta;d(Be,async j=>{var de;i("light");try{const be=ge.find(function(Ve){return Ve.key===j});document.title=(be?be.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",j),j!=="calendar"&&typeof Qs=="function"&&Qs();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:j})}).catch(()=>{})}catch(be){console.warn("pageView track failed:",be)}if(Ta&&(clearInterval(Ta),Ta=null),j==="strategies")await ja(),Ta=setInterval(()=>{ja().catch(()=>{})},5*60*1e3);else if(j==="calendar")Zt.value&&await Ma();else if(j==="ai")gs(),Qa(),await La();else if(j==="system"){if(!Zt.value){const Ve=await(await fetch("/api/dashboard")).json(),Ge=Ve.data||Ve;Ge.latest_date&&(Zt.value=Ge.latest_date)}if(Zt.value){const be=["day","week","month","year"];for(const Ve of be)try{const Ft=await(await fetch(`/api/view/${Ve}/${Zt.value}?status=all`)).json();ra.value[Ve]=Ft.stocks||[]}catch(Ge){console.warn("loadConsensusData view load failed:",Ge)}(!_a.value||_a.value.length===0)&&(_a.value=ra.value.day||[])}((de=ye.value)==null?void 0:de.role)==="admin"&&(await Fa(),await ls(),await sl(),await ns(),await Ka(),await ss(),Ba(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(Ba,36e5)))}}),y(async()=>{await Md()}),se(),W(),e(()=>{Ta&&clearInterval(Ta),window.removeEventListener("keydown",Ss),window.removeEventListener("keydown",H)});function Td(j,de=2){return j==null||j===""||isNaN(Number(j))?"--":Number(j).toFixed(de)}return{currentPage:Be,pageComp:He,currentSubPage:te,sidebarCollapsed:qe,menus:Oe,navMode:Pt,setNavMode:xt,tabGroups:pt,openTab:ma,closeTab:ha,activateTab:oa,fmtNum:Td,sanitizeHtml:T,keyClick:C,isOnline:v,currentUser:ye,allMenuDefs:ge,t:S,locale:o,changeLanguage:k,currentPageName:Se,subPageNames:aa,searchQuery:xn,searchStocks:Sn,onSearchSelect:Cn,selectedDate:Zt,onDateChange:kn,disabledDate:wn,refreshCalendarData:ds,exportCSV:us,viewNote:wl,loading:gl,lastLoadTime:bl,resetSetupWizard:_d,showChangePassword:pd,themes:xe,currentTheme:je,changeTheme:jt,changeThemeMode:wa,changeThemeHue:Aa,handleLogout:Cd,themeHues:Pe,themeHueNames:ot,themeHue:Ze,themeMode:Rt,hueColor:Kt,hueName:pa,density:Ot,changeDensity:Ea,marketData:_l,merrillData:O,merrillTimeline:ve,timelineLoading:Me,merrillStagesConfig:K,fetchMerrillStages:G,merrillSnapshots:Te,merrillSnapshotsTotal:me,healthMetrics:Ke,feishuConfig:ps,feishuTestStatus:Ll,feishuTestMessage:Il,shortcutHelpVisible:qn,shortcutHelpItems:_e,commandPaletteVisible:En,tourVisible:ln,tourStep:nn,tourSteps:on,skipTour:cn,finishTour:dn,backups:$l,backupCreating:Xl,loadBackups:ks,createBackup:Zl,restoreBackup:en,reportExporting:tn,reportExportMsg:an,exportReport:sn,sysMonitor:Hl,analyticsRank:Bl,analyticsDays:Kl,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:Wl,loadHealthDetail:bs,reviewTriggering:Ul,triggerMarketReview:Gl,factCheck:Yl,factCheckRunning:Jl,loadFactCheck:ws,triggerFactCheck:Ql,strategyRecommendations:Vl,aiUsage:Fl,loadStrategyRecommendations:gs,loadAiUsage:Qa,aiFabHidden:jl,openAiFab:fs,feedbackText:un,feedbackSubmitting:vn,submitFeedback:mn,backtestStrategies:De,backtestStrategy:Je,backtestRange:Qe,backtestCapital:$e,backtestRunning:Ct,backtestResult:bt,runBacktest:ta,btStrategyOptions:gc,btSelectedStrategies:hc,toggleBtStrategy:yc,btDateRange:bc,btCapital:wc,btCommissionRate:kc,btIncludeBenchmark:_c,btRunning:xc,btResult:Sc,btError:Cc,btMetrics:qc,btAnnualReturns:Ec,btTrades:Mc,btStrategyMetricsRows:Tc,btDrawdownRegion:Pc,runBacktestWorkbench:Dc,exportBacktestCSV:Rc,registerBacktestNavChart:zc,btFmtNum:Ac,fetchMarketData:Ga,fetchMerrillClock:M,testFeishuWebhook:Nl,saveFeishuConfig:Ol,merrillClockConfig:Q,merrillClockLastUpdated:I,merrillReevalResult:N,merrillReevalLoading:F,saveMerrillClockConfig:ce,doMerrillReevaluate:Re,dataRefreshConfig:ir,dataRefreshReloading:or,dataRefreshSaving:rr,loadDataRefreshConfig:tl,saveDataRefreshConfig:jr,triggerDataReload:Vr,triggerDataPull:Fr,dataPullRunning:Hr,indexDetailVisible:Wa,indexDetail:Ua,indexAiResult:xl,indexAiLoading:Sl,loadCachedIndexEval:ql,showIndexDetail:Cl,doIndexAiEvaluate:El,klinePeriods:n,currentKlinePeriod:V,klineLoading:oe,indexKlineLoading:Ee,stockKlineLoaded:ut,indexKlineLoaded:Jt,klineDegradeNote:Ce,klineShowMinutes:ka,toggleKlineShowMinutes:x,loadStockKline:Qt,switchKlinePeriod:_t,loadIndexKline:Xt,switchIndexKlinePeriod:et,zoomKlineRange:Ml,MA_LINES:kt,klineMaVisible:Ue,toggleKlineMa:Vt,scoreAnimating:Tl,scoreDelta:Pl,scorePulse:Dl,refreshStockScore:Ya,animateScoreEntrance:Ja,showMerrillDetail:B,merrillDetailData:U,showStageDetail:$,getCharLabel:u,getAssetName:z,getRankColor:ie,levelColor:Pn,levelBg:Dn,timelineStages:s,getStageAngle:X,getCycleProgress:P,getCurrentStageMonths:p,getStageTotalMonths:c,isStageCompleted:_,stages:J,indicatorList:Z,dimensionScoreList:le,confidenceColor:L,views:dt,currentView:it,statusFilter:Y,loginForm:ud,logining:vd,guestLogining:md,dashboardData:Ye,loadingView:hl,dates:Oa,consensus:_a,searchKeyword:ya,stockDetailVisible:Xe,stockDetailTab:mt,stockDetail:at,stockDetailLoading:Nt,detailDisplayMode:We,setDetailDisplayMode:zt,isNarrow:qt,detailSplitEnabled:Ht,splitWidth:Et,setSplitWidth:Gt,SPLIT_DEFAULT_PCT:rt,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,showBatchEvaluate:ts,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,aiConfig:Js,userList:di,showAddUser:ki,editingUser:_i,userForm:xi,savingUser:Si,userSearch:ui,filteredUsers:gi,groupFilter:vi,userPageTab:mi,expandedGroups:pi,addMemberGroupMap:fi,toggleGroupExpand:hi,removeMemberFromGroupInline:yi,addMemberToGroupInline:bi,changeUserGroup:wi,statusCounts:no,stockPool:io,poolSignals:_o,aiResult:Xa,aiHistory:Ms,groupedByDate:Br,groupedByMonth:Wr,expandedDates:Ps,expandedMonths:ko,aiHistoryByStock:Kr,aiHistoryStockCount:Ur,expandedStocks:Ds,aiHistoryView:So,aiHistoryLoading:cr,aiHistoryError:dr,aiHistoryTotal:ur,aiHistoryLoadingMore:vr,hasMoreAiHistory:mr,loadMoreAiHistory:pr,watchlistLoading:fr,scoreDistribution:Gr,quickEvalStock:Go,evalStrategy:Yo,checklistItems:wo,evalHistoryComparison:bo,quickEvaluate:Yr,selectedHistoryIds:Ts,showAutoEvaluateSettings:zs,savingConfig:As,autoEvaluateConfig:Za,autoEvaluateScope:Ls,strategyList:ba,toggleDateExpand:Jr,toggleMonthExpand:xo,toggleSelectDate:Qr,toggleSelectMonth:$r,toggleSelectStock:Zr,toggleStockExpand:Xr,registerTrendChart:ec,selectedWatchlistCodes:Rs,clearWatchlistSelection:wr,toggleSelectWatchlist:Sr,selectAllHistory:Cr,selectAllWatchlist:qr,batchRemoveWatchlist:xr,batchEvaluateSelected:Nr,batchReevaluateHistory:kr,batchAddToWatchlist:_r,viewUnit:fn,datePickerType:gn,dateFormat:hn,canNavPrev:yn,canNavNext:bn,handleLogin:xd,handleGuestLogin:Sd,switchView:_s,navigateDate:xs,navigateTo:ke,loadDashboardData:is,loadConsensusData:Ma,showStockDetail:Cs,doAiEvaluate:gr,doBatchEvaluate:ac,loadAiHistory:La,loadLastEvaluation:as,lastEvalTime:yo,viewAiResult:tc,saveAiConfig:Xc,testAiApi:Zc,exportConfig:ed,importConfig:td,configSaving:Ic,configChanged:D,watchlist:Qo,watchlistCodes:$o,watchlistSearch:sr,watchlistResults:lr,watchlistSearching:nr,watchlistSort:Jo,sortedWatchlist:Xo,getWatchlistScore:Zo,addSearchResult:er,evaluatedCodes:tr,klineLoadedCodes:ar,markKlineLoaded:$s,loadWatchlist:Zs,addToWatchlist:Tr,removeFromWatchlist:Pr,clearWatchlist:Dr,searchStockForWatchlist:Or,toggleWatchlist:Rr,batchEvaluateWatchlist:Ir,watchlistEvaluate:Lr,showStockKline:zr,preloadWatchlistKline:el,preloadingKline:Ar,realtimeQuotes:sc,realtimeDegraded:lc,realtimeWsState:nc,connectRealtimeQuotes:ic,disconnectRealtimeQuotes:oc,quoteWarningFor:rc,realtimeQuoteColor:cc,realtimePriceText:dc,realtimePctText:uc,realtimeRatioText:vc,REALTIME_DEGRADED_TEXT:mc,REALTIME_FALLBACK_TEXT:pc,toggleSelectHistory:yr,clearSelection:br,deleteSingleHistory:hr,deleteSelectedHistory:Er,saveAutoEvaluateConfig:Mr,editUser:Zi,saveUser:eo,deleteUser:to,loadUsers:Fa,allGroups:$i,loadAllGroups:$a,getGroupName:Xi,toggleUserEnabled:ao,resetUserPassword:so,selectedPreset:Fo,applyPreset:Bo,onProviderChange:Ko,providerInfo:Ho,globalConfigDirty:Nc,lastSavedTime:Oc,tushareConfig:jc,tushareStatus:Vc,syncingData:Bc,stockCount:Kc,tradeDateCount:Wc,aiStatus:Uc,appVersion:al,showImportDialog:Gc,rateLimitConfig:Yc,rateLimitDirty:Jc,rateLimitSaving:Qc,loadRateLimit:ss,saveRateLimit:$c,saveAllConfig:ad,resetAllConfig:sd,testTushareConnection:ld,syncStockData:nd,loadTushareConfig:sl,loadFeishuConfig:ls,loadSystemStatus:ns,loadAiConfig:Ka,aiVendors:Co,aiCatalog:qo,aiModelsError:Eo,testingAllModels:Mo,savingAiModels:To,loadAiVendors:Ha,loadAiCatalog:Is,saveAiVendors:Ns,saveAiModels:Ns,testVendorModel:Do,testAllVendorModels:Ro,fetchVendorModels:zo,addVendorFromCatalog:Ao,addCustomVendor:Lo,addVendorModel:Io,removeVendorModel:No,removeVendor:Oo,toggleVendorKeyReveal:jo,toggleVendorEdit:Vo,checkTushareConnection:Ba,datasourceConfig:Fc,datasourceStatus:Hc,loadDatasourceConfig:ll,saveDatasourceConfig:id,testDatasource:od,toggleDatasourceKeyReveal:rd,toggleDatasourceEdit:cd,strategyFilter:na,strategyFilterOptions:Ra,strategyFilterCounts:ra,strategyPreviewCount:ro,saveStrategyFilter:co,filteredConsensusRank:uo,currentPoolSize:vo,filteredStrategyCounts:mo,strategyDistribution:oo,expandedStrategies:za,poolChangeBadge:po,timeBarPercent:fo,navigateToStrategyFilter:go,showUserMenu:wt,toggleSidebar:re,groupsConfig:ae,loadGroupConfig:Ae,editingGroup:Ci,groupEditForm:Mi,showAddGroup:Pi,addGroupForm:Di,savingGroup:Ri,menuConfigDialog:qi,memberDialog:Ei,groupMembers:zi,addMemberUsername:Ai,selectedMemberGroup:Li,subPageSectionExpanded:Ii,toggleSubPageSection:Ni,getGroupMemberCount:Oi,getMenuEnabledCount:ji,groupCount:Vi,openMemberManager:Fi,loadGroupMembers:Hi,addMemberToGroup:Bi,removeMemberFromGroup:Ki,availableUsersForGroup:Wi,subPageCache:Ti,onParentToggle:Ui,openMenuConfig:Gi,saveMenuConfig:Yi,deleteGroupConfig:Ji,createGroup:Qi,changePasswordForm:fd,changingPassword:gd,doChangePassword:qd,showSetupWizard:hd,setupForm:yd,setupStep:bd,checkSetupWizard:wd,completeSetupWizard:kd,chatSessions:zn,chatHistoryView:An,selectedChatIds:Ln,expandedChatDates:In,expandedChatMonths:Nn,expandedChatStocks:On,chatHistoryLoading:jn,chatHistoryError:Vn,allChatSessionsFlat:Fn,chatGroupedByDate:Hn,chatGroupedByMonth:Bn,chatGroupedByStock:Kn,toggleSelectChat:Wn,toggleSelectChatDate:Un,toggleSelectChatMonth:Gn,toggleSelectChatStock:Yn,toggleChatDateExpand:Jn,toggleChatMonthExpand:Qn,toggleChatStockExpand:$n,selectAllChatSessions:Xn,deleteSelectedChatSessions:Zn,viewChatSession:ei,loadChatHistory:qs,deleteChatSession:ti,renderMarkdown:ai,stockChatInput:si,stockChatMessages:li,stockChatLoading:ni,stockChatError:ii,askStockSend:oi,askStockQuick:ri,onTouchStart:Rl,onTouchEnd:zl,hapticFeedback:i}}})();Sa.name="qc-icon";cl.name="qc-glossary-hint";dl.name="qc-glossary-page";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=om;window.__quantComponents.Header=ip;window.__quantComponents.SubNav=bp;window.__quantComponents.MobileNav=Op;window.__quantComponents.StockList=bf;window.__quantComponents.DetailSplit=xf;window.__quantComponents.TopTabs=Rf;window.__quantComponents.AppIcon=Sa;window.__quantComponents.GlossaryHint=cl;window.__quantComponents.GlossaryPage=dl;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default ng();
