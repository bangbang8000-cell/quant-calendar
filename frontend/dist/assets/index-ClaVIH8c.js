var _d=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);import{aV as xd,L as fe,O as Zt,Z as Sd,au as Et,M as ye,P as Me,aW as Cd,a0 as Ke,_ as Be,F as ut,al as bt,S as it,a1 as rt,X as Xt,ai as _t,q as va,o as ba,a8 as qa,r as dt,e as st,av as qd,Y as ya,$ as $t,R as Ed,aC as Kt,T as Md,Q as Bt,f as Dd,p as Td,n as Xs}from"./vendor-vue-DDF9zi1T.js";import{e as Pd,E as Rd,a as Ad,b as zd,c as Ld,z as Id}from"./vendor-ep-VOop1zGa.js";import{C as Nd,a as Od,W as Fd,I as Vd,S as jd,B as Hd,F as Bd,b as Kd,c as Wd,d as Ud,e as Gd,f as Yd,P as Qd,g as Jd,h as Xd,i as $d,T as Zd,j as eu,L as tu,k as au,G as su,U as nu,l as lu,m as iu,n as ou,D as ru,o as cu,p as du,M as uu,q as vu,R as mu,r as fu,s as pu,K as gu,t as hu,u as yu,v as bu,w as wu,x as ku,y as _u,z as xu,A as Su,E as Cu,H as qu,O as Eu,J as Mu,N as Du,Q as Tu,V as Pu,X as Ru,Y as Au,Z as zu,_ as Lu,$ as Iu,a0 as Nu,a1 as Ou,a2 as Fu,a3 as Vu,a4 as ju,a5 as Hu,a6 as Bu,a7 as Ku,a8 as Wu,a9 as Uu,aa as Gu,ab as Yu,ac as Qu,ad as Ju,ae as Xu,af as $u,ag as Zu,ah as ev,ai as tv,aj as av,ak as sv,al as nv,am as lv,an as iv,ao as ov,ap as rv,aq as cv,ar as dv,as as uv,at as vv,au as mv,av as fv,aw as pv,ax as gv,ay as hv,az as yv,aA as bv,aB as wv,aC as kv,aD as _v,aE as xv,aF as Sv,aG as Cv,aH as qv,aI as Ev,aJ as Mv,aK as Dv,aL as Tv,aM as Pv,aN as Rv,aO as Av,aP as zv,aQ as Lv}from"./vendor-lucide-DidEUx9K.js";var Ip=_d((Gp,Re)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const b of d.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&t(b)}).observe(document,{childList:!0,subtree:!0});function u(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(r){if(r.ep)return;r.ep=!0;const d=u(r);fetch(r.href,d)}})();window.Vue=xd;const ea=Pd||{};window.ElementPlus=ea;ea.ElMessage=ea.ElMessage||Rd;ea.ElMessageBox=ea.ElMessageBox||Ad;ea.ElNotification=ea.ElNotification||zd;ea.ElLoading=ea.ElLoading||Ld;window.ElementPlusLocaleZhCn={default:Id};(function(){const a=[45,220,0,140,270,320,180,25,250],e={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},u={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function t(s,_,l){return"hsl("+s+", "+_+"%, "+l+"%)"}function r(s,_,l){_=_/100,l=l/100;const m=function(E){return(E+s/30)%12},J=_*Math.min(l,1-l),N=function(E){return l-J*Math.max(-1,Math.min(m(E)-3,Math.min(9-m(E),1)))};return Math.round(255*N(0))+", "+Math.round(255*N(8))+", "+Math.round(255*N(4))}const d=5;function b(s,_,l){return r(s,_,l).split(",").map(function(m){return parseInt(m,10)})}function o(s){const _=function(l){return l=l/255,l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)};return .2126*_(s[0])+.7152*_(s[1])+.0722*_(s[2])}function i(s,_){const l=o(s),m=o(_),J=Math.max(l,m),N=Math.min(l,m);return(J+.05)/(N+.05)}function g(s,_,l){for(var m=8,J=92,N=0;N<26;N++){var E=(m+J)/2;o(b(s,_,E))<l?m=E:J=E}return Math.round(J*10)/10}function c(s,_,l,m,J){let N=38,E=76;for(let v=0;v<24;v++){const A=(N+E)/2;i(b(s,m,A),b(s,_,l))>=J?E=A:N=A}return Math.round(E*10)/10}function D(s,_){var l={};return _==="light"?(l["--qc-neutral-50"]=t(s,18,98),l["--qc-neutral-100"]=t(s,16,95),l["--qc-neutral-200"]=t(s,14,90),l["--qc-neutral-300"]=t(s,12,83),l["--qc-neutral-400"]=t(s,10,68),l["--qc-neutral-500"]=t(s,10,53),l["--qc-neutral-600"]=t(s,10,40),l["--qc-neutral-700"]=t(s,10,30),l["--qc-neutral-800"]=t(s,10,20),l["--qc-neutral-900"]=t(s,10,12),l["--qc-background"]=t(s,18,98),l["--qc-muted"]=t(s,16,95),l["--qc-border"]=t(s,12,72),l["--chart-axis"]=t(s,12,55),l["--chart-split"]=t(s,10,88),l["--qc-foreground"]=t(s,10,12),l["--qc-muted-foreground"]=t(s,9,38),l["--qc-nav-item-default"]=t(s,9,38),l["--qc-nav-item-hover"]=t(s,10,12),l["--qc-nav-group-label"]=t(s,9,40),l["--qc-nav-bg"]="#ffffff",l["--bg-page"]=t(s,20,97),l["--bg-stripe"]=t(s,20,97),l["--bg-card-header"]=t(s,24,96),l["--card-gradient-header"]="linear-gradient(135deg, "+t(s,24,96)+" 0%, #ffffff 100%)",l["--bg-hover"]=t(s,26,94),l["--bg-tertiary"]=t(s,14,93),l["--badge-gold-bg"]=t(s,26,96),l["--gold-bg"]=t(s,20,97),l["--border-light"]=t(s,22,89),l["--border-base"]=t(s,24,79),l["--border-color"]=t(s,14,88),l["--text-primary"]=t(s,12,12),l["--text-secondary"]=t(s,12,32),l["--text-tertiary"]=t(s,14,40),l["--text-disabled"]=t(s,9,M(s,9,P(s,18,98),25,70,!0,3.2)),l["--qc-card"]="#ffffff",l["--qc-popover"]="#ffffff",l["--qc-nav-border"]=t(s,12,72),l["--qc-nav-item-hover-bg"]=t(s,16,95),l["--qc-overlay"]="rgba(31, 29, 26, 0.5)",l["--bg-card"]="#ffffff",l["--surface"]="#ffffff",l["--border-heavy"]=t(s,22,72),l["--surface-canvas"]=t(s,18,98),l["--surface-card"]="#ffffff",l["--surface-raised"]="#ffffff",l["--surface-sunken"]=t(s,16,96),l["--surface-input"]="#ffffff",l["--surface-hover"]=t(s,26,94),l["--border-strong"]=t(s,22,72),l["--scrollbar-thumb"]="rgba("+r(s,12,72)+", 0.5)",l["--bg-page-rgb"]=r(s,20,97)):(l["--qc-background"]=t(s,10,8),l["--qc-card"]=t(s,11,11),l["--qc-popover"]=t(s,11,11),l["--qc-muted"]=t(s,12,14),l["--qc-border"]=t(s,14,30),l["--chart-axis"]=t(s,16,52),l["--chart-split"]=t(s,14,26),l["--qc-nav-bg"]=t(s,10,9),l["--qc-nav-border"]=t(s,13,22),l["--qc-nav-item-hover-bg"]=t(s,12,14),l["--bg-page"]=t(s,10,8),l["--bg-card"]=t(s,11,11),l["--bg-card-header"]=t(s,12,14),l["--bg-stripe"]=t(s,10,9),l["--bg-hover"]=t(s,12,14),l["--bg-tertiary"]=t(s,12,14),l["--border-light"]=t(s,13,18),l["--border-base"]=t(s,14,26),l["--border-heavy"]=t(s,16,38),l["--border-color"]=t(s,13,22),l["--surface"]=t(s,11,11),l["--surface-canvas"]=t(s,10,8),l["--surface-card"]=t(s,11,11),l["--surface-raised"]=t(s,12,14),l["--surface-sunken"]=t(s,12,9),l["--surface-input"]=t(s,12,9),l["--surface-hover"]=t(s,12,15),l["--border-strong"]=t(s,16,42),l["--scrollbar-thumb"]="rgba("+r(s,16,52)+", 0.5)",l["--bg-page-rgb"]=r(s,10,8),l["--qc-overlay"]="rgba(0, 0, 0, 0.6)"),l}const k=4.6;var T=[255,255,255];function C(s){return r(s,10,8).split(",").map(function(_){return parseInt(_,10)})}function M(s,_,l,m,J,N,E){for(var v=E||k,A=m,y=J,j=0;j<24;j++){var te=(A+y)/2,re=i(b(s,_,te),l)>=v;N?re?A=te:y=te:re?y=te:A=te}return Math.round((N?A:y)*10)/10}function P(s,_,l){return r(s,_,l).split(",").map(function(m){return parseInt(m,10)})}function x(s){const _=g(s,75,.18),l=g(s,75,.26),m=g(s,70,.36),J=g(s,85,.12),N=r(s,75,_),E=M(s,68,T,14,62,!0),v=Math.max(12,E-5),A=Math.max(10,E-11),y=r(s,16,95).split(",").map(function(le){return parseInt(le,10)}),j=r(s,85,92).split(",").map(function(le){return parseInt(le,10)}),te=M(s,78,y,10,58,!0,4.6),re=M(s,80,j,10,58,!0,4.6),se=Math.min(32,M(s,80,T,8,60,!0,4.6));return{...D(s,"light"),"--primary-color":t(s,75,_),"--primary-rgb":N,"--color-primary":t(s,75,_),"--qc-primary":t(s,75,_),"--qc-primary-50":t(s,90,96),"--qc-primary-100":t(s,85,92),"--qc-primary-200":t(s,80,84),"--qc-primary-300":t(s,75,72),"--qc-primary-400":t(s,70,m),"--qc-primary-500":t(s,75,l),"--qc-primary-600":t(s,80,_),"--qc-primary-700":t(s,85,J),"--qc-primary-800":t(s,88,28),"--qc-primary-900":t(s,90,20),"--text-link":t(s,78,te),"--secondary-color":t(s,70,55),"--card-border":t(s,22,80),"--bg-selected":"rgba("+N+", 0.08)","--btn-primary-bg":t(s,80,se),"--btn-primary-border":t(s,80,se),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":t(s,82,28),"--btn-primary-hover-border":t(s,82,28),"--btn-primary-active-bg":t(s,85,24),"--btn-primary-active-border":t(s,85,24),"--btn-primary-plain-bg":"rgba("+N+", 0.08)","--btn-primary-plain-border":"rgba("+N+", 0.25)","--btn-primary-plain-color":t(s,80,te),"--btn-primary-plain-hover-bg":"rgba("+N+", 0.15)","--btn-primary-plain-hover-border":t(s,80,32),"--btn-primary-text-color":t(s,80,te),"--gradient-brand":"linear-gradient(135deg, "+t(s,76,v)+" 0%, "+t(s,85,A)+" 100%)","--primary-text":t(s,78,te),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+t(s,62,Math.min(74,c(s,45,14,58,d)+5))+" 0%, "+t(s,58,c(s,45,14,58,d))+" 100%)","--panel-fg":t(s,45,14),"--qc-nav-item-active":t(s,80,re),"--qc-nav-item-active-bg":t(s,85,92),"--qc-nav-item-active-border":t(s,75,48),"--qc-nav-badge-bg":t(s,85,92),"--qc-nav-badge-text":t(s,80,re),"--qc-ring":t(s,75,M(s,75,P(s,18,98),25,70,!0,3.2)),"--brand-soft-text":t(s,80,M(s,80,P(s,80,84),10,58,!0,4.6)),"--border-control":t(s,16,M(s,16,P(s,18,98),30,80,!0,3.2))}}function S(s){const _=g(s,85,.34),l=g(s,85,.46),m=r(s,85,_),J=M(s,80,C(s),30,92,!1),N=Math.min(96,J+16),E=P(s,55,22),v=P(s,10,9),A=m.split(",").map(function(le){return parseInt(le,10)}),y=[0,1,2].map(function(le){return Math.round(A[le]*.12+v[le]*.88)}),j=M(s,85,y,45,96,!1,4.6),te=M(s,85,E,45,96,!1,4.6),re=Math.min(94,M(s,92,E,45,96,!1,4.6)),se=Math.min(96,re+6);return{...D(s,"dark"),"--primary-color":t(s,85,_),"--primary-rgb":m,"--color-primary":t(s,85,_),"--qc-primary":t(s,90,_),"--qc-primary-50":t(s,50,18),"--qc-primary-100":t(s,55,22),"--qc-primary-200":t(s,55,26),"--qc-primary-300":t(s,60,30),"--qc-primary-400":t(s,65,38),"--qc-primary-500":t(s,85,l),"--qc-primary-600":t(s,90,_),"--qc-primary-700":t(s,92,re),"--qc-primary-800":t(s,90,se),"--qc-primary-900":t(s,92,Math.min(98,se+8)),"--text-link":t(s,85,te),"--secondary-color":t(s,70,60),"--card-border":t(s,30,25),"--bg-selected":"rgba("+m+", 0.10)","--btn-primary-bg":t(s,85,65),"--btn-primary-border":t(s,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":t(s,80,72),"--btn-primary-hover-border":t(s,80,72),"--btn-primary-active-bg":t(s,75,80),"--btn-primary-active-border":t(s,75,80),"--btn-primary-plain-bg":"rgba("+m+", 0.08)","--btn-primary-plain-border":"rgba("+m+", 0.25)","--btn-primary-plain-color":t(s,85,te),"--btn-primary-plain-hover-bg":"rgba("+m+", 0.15)","--btn-primary-plain-hover-border":t(s,85,65),"--btn-primary-text-color":t(s,85,te),"--gradient-brand":"linear-gradient(135deg, "+t(s,85,N)+" 0%, "+t(s,80,J)+" 100%)","--primary-text":t(s,85,te),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+t(s,60,Math.min(76,c(s,40,12,55,d)+5))+" 0%, "+t(s,55,c(s,40,12,55,d))+" 100%)","--panel-fg":t(s,40,12),"--qc-nav-item-active":t(s,85,j),"--qc-nav-item-active-bg":"rgba("+m+", 0.10)","--qc-nav-item-active-border":t(s,85,65),"--qc-nav-badge-bg":"rgba("+m+", 0.12)","--qc-nav-badge-text":t(s,85,j),"--border-control":t(s,16,M(s,16,P(s,11,11),25,70,!1,3.2)),"--brand-soft-text":t(s,85,M(s,85,P(s,55,26),45,96,!1,4.6)),"--qc-ring":t(s,85,65)}}var n=[],p={mode:"light",hue:45},R=!1;function O(s,_){try{var l=document.querySelector('meta[name="theme-color"]');if(!l)return;var m=_?s["--surface-canvas"]||s["--qc-background"]:s["--btn-primary-bg"]||s["--qc-primary"];m&&l.setAttribute("content",m)}catch{}}function f(){if(!(R||typeof window>"u"||!window.matchMedia)){var s=window.matchMedia("(prefers-color-scheme: dark)"),_=function(){p.mode==="system"&&$("system",p.hue)};s.addEventListener?s.addEventListener("change",_):s.addListener&&s.addListener(_),R=!0}}function w(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}var z=-1;function F(s){return s=parseInt(s,10),isNaN(s)?45:s<0?z:Math.max(0,Math.min(359,s))}function V(s){return Object.keys(s).forEach(function(_){var l=s[_];if(typeof l=="string"){l.indexOf("hsl(")>=0&&(l=l.replace(/hsl\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)%/g,function(v,A){return"hsl("+A+", 0%"}));var m=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*[\d.]+)?\)$/.exec(l);if(m){var J=Math.round(.2126*+m[1]+.7152*+m[2]+.0722*+m[3]);l="rgba("+J+", "+J+", "+J+(m[4]||"")+")"}if(/^\d+,\s*\d+,\s*\d+$/.test(l)){var N=l.split(",").map(function(v){return parseInt(v,10)}),E=Math.round(.2126*N[0]+.7152*N[1]+.0722*N[2]);l=E+", "+E+", "+E}s[_]=l}}),s}function I(s,_){var l=P(45,0,_?22:95),m=P(45,0,_?8:98),J=P(45,0,_?11:100),N=_?M(45,0,l,45,96,!1,4.6):M(45,0,l,10,58,!0,4.6),E=P(45,0,_?22:92),v=_?M(45,0,E,45,96,!1,4.6):M(45,0,E,10,58,!0,4.6),A=_?M(45,0,m,45,96,!1,3.2):M(45,0,m,25,70,!0,3.2),y=_?M(45,0,J,25,70,!1,3.2):M(45,0,m,30,80,!0,3.2),j=_?M(45,0,P(45,0,26),45,96,!1,4.6):M(45,0,P(45,0,84),10,58,!0,4.6);s["--brand-soft-text"]="hsl(45, 0%, "+j+"%)";var te="hsl(45, 0%, "+N+"%)";if(s["--primary-text"]=te,s["--text-link"]=te,s["--btn-primary-text-color"]=te,s["--btn-primary-plain-color"]=te,s["--qc-nav-item-active"]="hsl(45, 0%, "+v+"%)",s["--qc-nav-badge-text"]="hsl(45, 0%, "+v+"%)",s["--qc-ring"]="hsl(45, 0%, "+A+"%)",s["--border-control"]="hsl(45, 0%, "+y+"%)",_){var re=M(45,0,P(45,0,8),30,92,!1,4.6),se=Math.min(96,re+16);s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+se+"%) 0%, hsl(45, 0%, "+re+"%) 100%)"}else{var le=M(45,0,T,14,62,!0,4.6),Q=Math.max(12,le-5),ie=Math.max(10,le-11);s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+Q+"%) 0%, hsl(45, 0%, "+ie+"%) 100%)"}var Ce=c(45,0,14,0,d);return s["--gradient-panel"]="linear-gradient(135deg, hsl(45, 0%, "+Math.min(74,Ce+5)+"%) 0%, hsl(45, 0%, "+Ce+"%) 100%)",s["--panel-fg"]="hsl(45, 0%, 14%)",s}function $(s,_){let l=s||"light",m=_==null||_===""?null:_;if(e[s]){const j=e[s];l=j[0],m==null&&(m=j[1])}l==="system"&&(l=w()?"dark":"light");const J=l==="dark";m=F(m??45);const N=m===z,E=document.documentElement;E.setAttribute("data-theme",J?"dark-pro":"gold"),E.setAttribute("data-theme-mode",J?"dark":"light"),E.setAttribute("data-theme-neutral",N?"true":"false");let v=J?S(N?45:m):x(N?45:m);N&&(v=I(V(v),J));for(var A=Object.keys(v),y=0;y<n.length;y++)A.indexOf(n[y])===-1&&E.style.removeProperty(n[y]);A.forEach(function(j){E.style.setProperty(j,v[j])}),n=A,p.mode=typeof s=="string"&&s?s:"light",p.hue=m,O(v,J);try{localStorage.setItem("quant_theme_mode",J?"dark":"light"),localStorage.setItem("quant_theme_hue",String(m))}catch{}return{mode:J?"dark":"light",hue:m}}function W(){try{var s=localStorage.getItem("quant_theme_hue");if(s!==null&&s!=="")return F(s)}catch{}var _=typeof window<"u"&&window.__quantModules?window.__quantModules.preferences:null;if(_&&_.getPreference){var l=_.getPreference("theme_hue");if(l!=null&&l!=="")return F(l)}return null}function B(s){var _=W();return $(s,_??void 0)}function K(){const s=localStorage.getItem("quant_theme");if(!s||!e[s]||localStorage.getItem("quant_theme_hue")!==null)return null;const _=e[s];return{mode:_[0],hue:_[1]}}function q(){const s=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let _=s.theme||"system",l=s.theme_hue!=null&&s.theme_hue!==""?s.theme_hue:null;const m=K();return l==null&&m&&(_=m.mode,l=m.hue),l==null&&(l=45),f(),$(_,l)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:a,LEGACY_MAP:e,legacyThemes:u,NEUTRAL_HUE:z,generateLightTokens:x,generateDarkTokens:S,migrateLegacyTheme:K,persistedHue:W,applyLegacyTheme:B,applyTheme:$,init:q},typeof queueMicrotask=="function"?queueMicrotask(q):q()})();(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantI18n=e()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",e=["zh-CN","en","ja","ko","zh-TW"],u={};let t=a,r=null;function d(){return r&&typeof r=="object"&&"value"in r?r.value||a:t}function b(k,T){return e.indexOf(k)===-1?!1:(u[k]=T&&typeof T=="object"?T:{},!0)}function o(k){const T=e.indexOf(k)!==-1?k:a;return t=T,r&&typeof r=="object"&&"value"in r&&(r.value=T),typeof document<"u"&&document.documentElement.setAttribute("lang",T),t}function i(){return d()}function g(k){if(k&&typeof k=="object"&&"value"in k){r=k;const T=e.indexOf(k.value)!==-1?k.value:a;k.value=T,t=T}return t}function c(k,T){const C=d(),M=u[C]||{};let P=k in M?M[k]:null;if(P==null&&C!=="en"){const x=u.en||{};P=k in x?x[k]:null}return P==null&&(P=String(k)),T&&typeof T=="object"&&Object.keys(T).forEach(function(x){P=P.replace(new RegExp("\\{"+x+"\\}","g"),String(T[x]))}),P}const D={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:e,messages:u,registerLocale:b,setLocale:o,getLocale:i,bindLocale:g,t:c};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=D),D});(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantZhCN=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.ruleScore":"选股评分","detail.notEvaluated":"未评估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时","glossary.title":"术语表","glossary.search":"搜索术语","glossary.definition":"定义","glossary.calc":"计算口径","glossary.empty":"无匹配术语","glossary.cat.macro":"宏观","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技术","glossary.cat.shortterm":"短线","glossary.cat.datasource":"数据源","glossary.cat.product":"产品","glossary.term.merrill_clock":"美林时钟","glossary.term.recovery":"复苏期","glossary.term.overheat":"过热期","glossary.term.stagflation":"滞胀期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五维评分","glossary.term.momentum":"动量策略","glossary.term.reversal":"反转策略","glossary.term.quality":"质量策略","glossary.term.capital_flow":"资金流策略","glossary.term.consensus":"共识榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰减","glossary.term.zscore":"Z-Score","glossary.term.pe":"市盈率(PE)","glossary.term.pb":"市净率(PB)","glossary.term.roe":"净资产收益率(ROE)","glossary.term.market_cap":"总市值","glossary.term.ma":"均线(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"换手率","glossary.term.zt_pool":"涨停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龙虎榜","glossary.term.ladder":"连板","glossary.term.promote_rate":"晋级率","glossary.term.money_effect":"赚钱效应","glossary.term.sentiment_cycle":"情绪周期","glossary.term.sector_flow":"板块资金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源热备","glossary.term.pit":"PIT(时点数据)","glossary.term.survivorship":"幸存者偏差","glossary.term.ai_eval":"AI评估","glossary.term.ai_chat":"智能问股","glossary.term.backtest":"回测","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"样本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"胜率","glossary.term.portfolio":"模拟组合","glossary.term.data_quality":"数据质量分","glossary.term.rbac":"RBAC权限","glossary.term.sector_rotation":"行业轮动","glossary.term.index_enhance":"指数增强","glossary.term.multifactor":"多因子","glossary.term.volatility":"波动率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林带","glossary.term.dragon_head":"龙头股","glossary.term.data_freshness":"数据新鲜度","state.overviewError":"总览数据加载失败","state.merrillError":"美林时钟数据加载失败","state.marketError":"行情数据加载失败","state.consensusError":"共识榜加载失败","state.strategiesError":"策略研究数据加载失败","state.strategiesManageError":"策略加载失败","state.backtestError":"回测失败","state.intradayError":"盘中快照加载失败","state.freshnessError":"数据新鲜度加载失败","state.healthDetailError":"调度任务数据加载失败","state.factCheckError":"事实护栏数据加载失败","state.notificationError":"通知中心数据加载失败","state.featureConfigError":"基础配置数据加载失败","state.usageError":"用量统计数据加载失败","state.emptyMarket":"暂无行情数据","state.emptyFocus":"暂无重点跟踪数据","state.emptyFreshness":"暂无数据新鲜度记录","state.emptyPool":"暂无涨跌停池数据","state.emptyStrategyResearch":"暂无策略研究数据","state.emptyStrategyManage":"暂无可管理的策略","state.emptyStrategy":"暂无策略","state.emptyDictField":"暂无字段数据","state.descNetworkOrService":"请检查网络或服务后重试","state.descNetwork":"请检查网络后重试","state.descService":"请检查服务后重试","state.descBacktest":"请检查策略与日期范围后重试","state.descEmptyMarket":"当前无指数行情返回，可稍后重试","state.descEmptyFocus":"当前日期/时段暂无评估结果，可切换日期或时段","state.descEmptyFreshness":"接口未返回任何数据表，可点击刷新重试","state.descEmptyPool":"当前交易日三池为空，可切换交易日或刷新重试","state.descEmptyStrategyResearch":"先去「量化研究」加载策略注册表，或创建自定义策略","state.descEmptyStrategyManage":"先复制母本创建微调策略，或用 AI 代写全新策略","state.descEmptyStrategy":"策略注册表为空，请检查后端策略目录或创建自定义策略","state.descEmptyDictField":"当前分类没有字典字段，可切换分类或点击刷新","state.descRetryDict":"点击重试重新加载数据字典","state.descRetryHealth":"点击重试重新加载健康与可靠性数据","state.descAiModels":"厂商模型配置获取失败，可重试","a11y.watchlistList":"自选股列表","a11y.reviewDateList":"复盘日期列表","a11y.dailyReviewList":"每日复盘列表","a11y.shorttermDateList":"复盘日历日期列表","a11y.selectWatchStock":"选择 {code} {name}","a11y.viewMarketReview":"查看 {date} 市场复盘","msg.runFailed":"运行失败: {msg}","msg.exportFailed":"导出失败: {msg}","msg.factorIcFailed":"因子 IC 分析失败: {msg}","msg.layerBacktest":"分层回测: {msg}","msg.layerBacktestFailed":"分层回测失败: {msg}","msg.factorDetail":"因子详情: {msg}","msg.factorDetailFailed":"因子详情失败: {msg}","msg.noData":"无数据"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantEn=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.ruleScore":"Rule score","detail.notEvaluated":"Not scored","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration","glossary.title":"Glossary","glossary.search":"Search terms","glossary.definition":"Definition","glossary.calc":"Calculation","glossary.empty":"No matching terms","glossary.cat.macro":"Macro","glossary.cat.strategy":"Strategy","glossary.cat.factor":"Factor","glossary.cat.tech":"Technical","glossary.cat.shortterm":"Short-term","glossary.cat.datasource":"Data Source","glossary.cat.product":"Product","glossary.term.merrill_clock":"Merrill Clock","glossary.term.recovery":"Recovery","glossary.term.overheat":"Overheat","glossary.term.stagflation":"Stagflation","glossary.term.recession":"Recession","glossary.term.merrill_score":"Five-Dimension Score","glossary.term.momentum":"Momentum","glossary.term.reversal":"Reversal","glossary.term.quality":"Quality","glossary.term.capital_flow":"Capital Flow","glossary.term.consensus":"Consensus Board","glossary.term.in_pool":"In Pool","glossary.term.out_pool":"Out of Pool","glossary.term.factor":"Factor","glossary.term.factor_ic":"Factor IC","glossary.term.ic_decay":"IC Decay","glossary.term.zscore":"Z-Score","glossary.term.pe":"P/E Ratio","glossary.term.pb":"P/B Ratio","glossary.term.roe":"ROE","glossary.term.market_cap":"Market Cap","glossary.term.ma":"Moving Average","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"Volume Ratio","glossary.term.turnover":"Turnover Rate","glossary.term.zt_pool":"Limit-Up Pool","glossary.term.zha_ban":"Failed Limit-Up","glossary.term.dt_pool":"Limit-Down Pool","glossary.term.lhb":"Dragon-Tiger List","glossary.term.ladder":"Consecutive Limit-Ups","glossary.term.promote_rate":"Promotion Rate","glossary.term.money_effect":"Money Effect","glossary.term.sentiment_cycle":"Sentiment Cycle","glossary.term.sector_flow":"Sector Flow","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"Triple-Source Failover","glossary.term.pit":"PIT (Point-in-Time)","glossary.term.survivorship":"Survivorship Bias","glossary.term.ai_eval":"AI Evaluation","glossary.term.ai_chat":"AI Stock Chat","glossary.term.backtest":"Backtest","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"Out-of-Sample","glossary.term.sharpe":"Sharpe Ratio","glossary.term.drawdown":"Drawdown","glossary.term.winrate":"Win Rate","glossary.term.portfolio":"Paper Portfolio","glossary.term.data_quality":"Data Quality Grade","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"Sector Rotation","glossary.term.index_enhance":"Index Enhancement","glossary.term.multifactor":"Multi-Factor","glossary.term.volatility":"Volatility","glossary.term.dividend_yield":"Dividend Yield","glossary.term.bollinger":"Bollinger Bands","glossary.term.dragon_head":"Leading Stock","glossary.term.data_freshness":"Data Freshness","state.overviewError":"Failed to load overview data","state.merrillError":"Failed to load Merrill clock data","state.marketError":"Failed to load market data","state.consensusError":"Failed to load consensus ranking","state.strategiesError":"Failed to load strategy research data","state.strategiesManageError":"Failed to load strategies","state.backtestError":"Backtest failed","state.intradayError":"Failed to load intraday snapshot","state.freshnessError":"Failed to load data freshness","state.healthDetailError":"Failed to load scheduled tasks","state.factCheckError":"Failed to load fact guard data","state.notificationError":"Failed to load notification center","state.featureConfigError":"Failed to load feature configuration","state.usageError":"Failed to load usage statistics","state.emptyMarket":"No market data","state.emptyFocus":"No focus tracking data","state.emptyFreshness":"No data freshness records","state.emptyPool":"No limit-up/down pool data","state.emptyStrategyResearch":"No strategy research data","state.emptyStrategyManage":"No strategies to manage","state.emptyStrategy":"No strategies","state.emptyDictField":"No field data","state.descNetworkOrService":"Check the network or service and retry","state.descNetwork":"Check the network and retry","state.descService":"Check the service and retry","state.descBacktest":"Check the strategy and date range, then retry","state.descEmptyMarket":"No index quotes returned; try again later","state.descEmptyFocus":"No evaluation results for this date/session; switch date or session","state.descEmptyFreshness":"The API returned no tables; click refresh to retry","state.descEmptyPool":"All three pools are empty for this trading day; switch day or refresh","state.descEmptyStrategyResearch":"Load the strategy registry in Quant Research first, or create a custom strategy","state.descEmptyStrategyManage":"Copy a template to create a tuned strategy, or let AI write a new one","state.descEmptyStrategy":"The strategy registry is empty; check the backend strategy directory or create a custom strategy","state.descEmptyDictField":"This category has no dictionary fields; switch category or refresh","state.descRetryDict":"Click retry to reload the data dictionary","state.descRetryHealth":"Click retry to reload health and reliability data","state.descAiModels":"Failed to fetch vendor model configuration; you can retry","a11y.watchlistList":"Watchlist","a11y.reviewDateList":"Review date list","a11y.dailyReviewList":"Daily review list","a11y.shorttermDateList":"Review calendar date list","a11y.selectWatchStock":"Select {code} {name}","a11y.viewMarketReview":"View market review for {date}","msg.runFailed":"Run failed: {msg}","msg.exportFailed":"Export failed: {msg}","msg.factorIcFailed":"Factor IC analysis failed: {msg}","msg.layerBacktest":"Layer backtest: {msg}","msg.layerBacktestFailed":"Layer backtest failed: {msg}","msg.factorDetail":"Factor detail: {msg}","msg.factorDetailFailed":"Factor detail failed: {msg}","msg.noData":"No data"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.Quantja=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.ruleScore":"選股スコア","detail.notEvaluated":"未評価","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間","glossary.title":"用語集","glossary.search":"用語検索","glossary.definition":"定義","glossary.calc":"計算方法","glossary.empty":"該当する用語がありません","glossary.cat.macro":"マクロ","glossary.cat.strategy":"戦略","glossary.cat.factor":"ファクター","glossary.cat.tech":"テクニカル","glossary.cat.shortterm":"短期","glossary.cat.datasource":"データソース","glossary.cat.product":"プロダクト","glossary.term.merrill_clock":"メリルクロック","glossary.term.recovery":"回復期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"スタグフレーション","glossary.term.recession":"景気後退","glossary.term.merrill_score":"5次元スコア","glossary.term.momentum":"モメンタム","glossary.term.reversal":"リバーサル","glossary.term.quality":"クオリティ","glossary.term.capital_flow":"資金フロー","glossary.term.consensus":"コンセンサス","glossary.term.in_pool":"新規採用","glossary.term.out_pool":"除外","glossary.term.factor":"ファクター","glossary.term.factor_ic":"ファクターIC","glossary.term.ic_decay":"IC減衰","glossary.term.zscore":"Zスコア","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"時価総額","glossary.term.ma":"移動平均","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"出来高倍率","glossary.term.turnover":"回転率","glossary.term.zt_pool":"ストップ高","glossary.term.zha_ban":"ストップ高失敗","glossary.term.dt_pool":"ストップ安","glossary.term.lhb":"竜虎榜","glossary.term.ladder":"連続ストップ高","glossary.term.promote_rate":"昇格率","glossary.term.money_effect":"マネー効果","glossary.term.sentiment_cycle":"センチメントサイクル","glossary.term.sector_flow":"セクターフロー","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"三重冗長","glossary.term.pit":"PIT","glossary.term.survivorship":"サバイバーシップバイアス","glossary.term.ai_eval":"AI評価","glossary.term.ai_chat":"AI株チャット","glossary.term.backtest":"バックテスト","glossary.term.walkforward":"ウォークフォワード","glossary.term.oos":"サンプル外","glossary.term.sharpe":"シャープレシオ","glossary.term.drawdown":"ドローダウン","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬ポートフォリオ","glossary.term.data_quality":"データ品質","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"セクターローテーション","glossary.term.index_enhance":"インデックス強化","glossary.term.multifactor":"マルチファクター","glossary.term.volatility":"ボラティリティ","glossary.term.dividend_yield":"配当利回り","glossary.term.bollinger":"ボリンジャーバンド","glossary.term.dragon_head":"リーダー株","glossary.term.data_freshness":"データ鮮度","state.overviewError":"概要データの読み込みに失敗しました","state.merrillError":"メリルクロックデータの読み込みに失敗しました","state.marketError":"相場データの読み込みに失敗しました","state.consensusError":"コンセンサスランキングの読み込みに失敗しました","state.strategiesError":"戦略リサーチデータの読み込みに失敗しました","state.strategiesManageError":"戦略の読み込みに失敗しました","state.backtestError":"バックテストに失敗しました","state.intradayError":"場中スナップショットの読み込みに失敗しました","state.freshnessError":"データ鮮度の読み込みに失敗しました","state.healthDetailError":"スケジュールタスクの読み込みに失敗しました","state.factCheckError":"ファクトガードデータの読み込みに失敗しました","state.notificationError":"通知センターの読み込みに失敗しました","state.featureConfigError":"機能設定の読み込みに失敗しました","state.usageError":"利用統計の読み込みに失敗しました","state.emptyMarket":"相場データがありません","state.emptyFocus":"重点ウォッチのデータがありません","state.emptyFreshness":"データ鮮度の記録がありません","state.emptyPool":"ストップ高/安プールのデータがありません","state.emptyStrategyResearch":"戦略リサーチのデータがありません","state.emptyStrategyManage":"管理できる戦略がありません","state.emptyStrategy":"戦略がありません","state.emptyDictField":"フィールドデータがありません","state.descNetworkOrService":"ネットワークまたはサービスを確認して再試行してください","state.descNetwork":"ネットワークを確認して再試行してください","state.descService":"サービスを確認して再試行してください","state.descBacktest":"戦略と期間を確認して再試行してください","state.descEmptyMarket":"指数の相場が返されていません。後でもう一度お試しください","state.descEmptyFocus":"この日付/時間帯の評価結果がありません。日付や時間帯を切り替えてください","state.descEmptyFreshness":"API がテーブルを返していません。更新をクリックして再試行してください","state.descEmptyPool":"この取引日の3プールは空です。取引日を切り替えるか更新してください","state.descEmptyStrategyResearch":"先に「量子リサーチ」で戦略レジストリを読み込むか、カスタム戦略を作成してください","state.descEmptyStrategyManage":"テンプレートを複製して調整した戦略を作成するか、AI に新規作成させてください","state.descEmptyStrategy":"戦略レジストリが空です。バックエンドの戦略ディレクトリを確認するか、カスタム戦略を作成してください","state.descEmptyDictField":"このカテゴリには辞書フィールドがありません。カテゴリを切り替えるか更新してください","state.descRetryDict":"クリックして再試行し、データ辞書を再読み込みします","state.descRetryHealth":"クリックして再試行し、ヘルスと信頼性データを再読み込みします","state.descAiModels":"ベンダーモデル設定の取得に失敗しました。再試行できます","a11y.watchlistList":"ウォッチリスト","a11y.reviewDateList":"振り返り日付リスト","a11y.dailyReviewList":"日次振り返りリスト","a11y.shorttermDateList":"振り返りカレンダーの日付リスト","a11y.selectWatchStock":"{code} {name} を選択","a11y.viewMarketReview":"{date} の市場振り返りを表示","msg.runFailed":"実行に失敗しました: {msg}","msg.exportFailed":"エクスポートに失敗しました: {msg}","msg.factorIcFailed":"ファクター IC 分析に失敗しました: {msg}","msg.layerBacktest":"レイヤーバックテスト: {msg}","msg.layerBacktestFailed":"レイヤーバックテストに失敗しました: {msg}","msg.factorDetail":"ファクター詳細: {msg}","msg.factorDetailFailed":"ファクター詳細の取得に失敗しました: {msg}","msg.noData":"データなし"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",a),a});(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.Quantko=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.ruleScore":"종목 점수","detail.notEvaluated":"미평가","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간","glossary.title":"용어집","glossary.search":"용어 검색","glossary.definition":"정의","glossary.calc":"계산 방법","glossary.empty":"일치하는 용어가 없습니다","glossary.cat.macro":"거시","glossary.cat.strategy":"전략","glossary.cat.factor":"팩터","glossary.cat.tech":"기술적","glossary.cat.shortterm":"단기","glossary.cat.datasource":"데이터 소스","glossary.cat.product":"제품","glossary.term.merrill_clock":"메릴 클럭","glossary.term.recovery":"회복기","glossary.term.overheat":"과열기","glossary.term.stagflation":"스태그플레이션","glossary.term.recession":"경기 침체","glossary.term.merrill_score":"5차원 점수","glossary.term.momentum":"모멘텀","glossary.term.reversal":"리버설","glossary.term.quality":"퀄리티","glossary.term.capital_flow":"자금 흐름","glossary.term.consensus":"컨센서스","glossary.term.in_pool":"신규 편입","glossary.term.out_pool":"제외","glossary.term.factor":"팩터","glossary.term.factor_ic":"팩터 IC","glossary.term.ic_decay":"IC 감쇠","glossary.term.zscore":"Z-Score","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"시가총액","glossary.term.ma":"이동평균","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"거래량비","glossary.term.turnover":"회전율","glossary.term.zt_pool":"상한가 풀","glossary.term.zha_ban":"상한가 실패","glossary.term.dt_pool":"하한가 풀","glossary.term.lhb":"용호방","glossary.term.ladder":"연속 상한가","glossary.term.promote_rate":"승격률","glossary.term.money_effect":"돈벌이 효과","glossary.term.sentiment_cycle":"심리 사이클","glossary.term.sector_flow":"섹터 자금","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"삼원 이중화","glossary.term.pit":"PIT","glossary.term.survivorship":"생존자 편향","glossary.term.ai_eval":"AI 평가","glossary.term.ai_chat":"AI 주식 채팅","glossary.term.backtest":"백테스트","glossary.term.walkforward":"워크포워드","glossary.term.oos":"샘플 외","glossary.term.sharpe":"샤프 비율","glossary.term.drawdown":"드로다운","glossary.term.winrate":"승률","glossary.term.portfolio":"모의 포트폴리오","glossary.term.data_quality":"데이터 품질","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"섹터 로테이션","glossary.term.index_enhance":"지수 강화","glossary.term.multifactor":"멀티팩터","glossary.term.volatility":"변동성","glossary.term.dividend_yield":"배당수익률","glossary.term.bollinger":"볼린저 밴드","glossary.term.dragon_head":"리더주","glossary.term.data_freshness":"데이터 신선도","state.overviewError":"개요 데이터 로드 실패","state.merrillError":"메릴 클록 데이터 로드 실패","state.marketError":"시세 데이터 로드 실패","state.consensusError":"컨센서스 순위 로드 실패","state.strategiesError":"전략 리서치 데이터 로드 실패","state.strategiesManageError":"전략 로드 실패","state.backtestError":"백테스트 실패","state.intradayError":"장중 스냅샷 로드 실패","state.freshnessError":"데이터 신선도 로드 실패","state.healthDetailError":"예약 작업 데이터 로드 실패","state.factCheckError":"팩트 가드 데이터 로드 실패","state.notificationError":"알림 센터 데이터 로드 실패","state.featureConfigError":"기능 설정 데이터 로드 실패","state.usageError":"사용량 통계 데이터 로드 실패","state.emptyMarket":"시세 데이터 없음","state.emptyFocus":"중점 추적 데이터 없음","state.emptyFreshness":"데이터 신선도 기록 없음","state.emptyPool":"상한가/하한가 풀 데이터 없음","state.emptyStrategyResearch":"전략 리서치 데이터 없음","state.emptyStrategyManage":"관리할 전략 없음","state.emptyStrategy":"전략 없음","state.emptyDictField":"필드 데이터 없음","state.descNetworkOrService":"네트워크 또는 서비스를 확인한 후 다시 시도하세요","state.descNetwork":"네트워크를 확인한 후 다시 시도하세요","state.descService":"서비스를 확인한 후 다시 시도하세요","state.descBacktest":"전략과 날짜 범위를 확인한 후 다시 시도하세요","state.descEmptyMarket":"지수 시세가 반환되지 않았습니다. 나중에 다시 시도하세요","state.descEmptyFocus":"해당 날짜/시간대에 평가 결과가 없습니다. 날짜나 시간대를 전환하세요","state.descEmptyFreshness":"API가 테이블을 반환하지 않았습니다. 새로고침을 눌러 다시 시도하세요","state.descEmptyPool":"해당 거래일의 세 풀이 비어 있습니다. 거래일을 전환하거나 새로고침하세요","state.descEmptyStrategyResearch":"먼저 「양자 리서치」에서 전략 레지스트리를 로드하거나 사용자 전략을 만드세요","state.descEmptyStrategyManage":"템플릿을 복사해 조정 전략을 만들거나 AI로 새로 작성하세요","state.descEmptyStrategy":"전략 레지스트리가 비어 있습니다. 백엔드 전략 디렉터리를 확인하거나 사용자 전략을 만드세요","state.descEmptyDictField":"이 분류에는 사전 필드가 없습니다. 분류를 전환하거나 새로고침하세요","state.descRetryDict":"클릭하여 다시 시도해 데이터 사전을 다시 로드합니다","state.descRetryHealth":"클릭하여 다시 시도해 상태 및 신뢰성 데이터를 다시 로드합니다","state.descAiModels":"공급업체 모델 설정을 가져오지 못했습니다. 다시 시도할 수 있습니다","a11y.watchlistList":"관심종목 목록","a11y.reviewDateList":"복기 날짜 목록","a11y.dailyReviewList":"일일 복기 목록","a11y.shorttermDateList":"복기 캘린더 날짜 목록","a11y.selectWatchStock":"{code} {name} 선택","a11y.viewMarketReview":"{date} 시장 복기 보기","msg.runFailed":"실행 실패: {msg}","msg.exportFailed":"내보내기 실패: {msg}","msg.factorIcFailed":"팩터 IC 분석 실패: {msg}","msg.layerBacktest":"레이어 백테스트: {msg}","msg.layerBacktestFailed":"레이어 백테스트 실패: {msg}","msg.factorDetail":"팩터 상세: {msg}","msg.factorDetailFailed":"팩터 상세 실패: {msg}","msg.noData":"데이터 없음"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",a),a});(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantzhTW=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.ruleScore":"選股評分","detail.notEvaluated":"未評估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時","glossary.title":"術語表","glossary.search":"搜尋術語","glossary.definition":"定義","glossary.calc":"計算口徑","glossary.empty":"無相符術語","glossary.cat.macro":"總體","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技術","glossary.cat.shortterm":"短線","glossary.cat.datasource":"資料源","glossary.cat.product":"產品","glossary.term.merrill_clock":"美林時鐘","glossary.term.recovery":"復甦期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"滯脹期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五維評分","glossary.term.momentum":"動量策略","glossary.term.reversal":"反轉策略","glossary.term.quality":"質量策略","glossary.term.capital_flow":"資金流策略","glossary.term.consensus":"共識榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰減","glossary.term.zscore":"Z-Score","glossary.term.pe":"本益比(PE)","glossary.term.pb":"股價淨值比(PB)","glossary.term.roe":"股東權益報酬率(ROE)","glossary.term.market_cap":"總市值","glossary.term.ma":"均線(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"換手率","glossary.term.zt_pool":"漲停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龍虎榜","glossary.term.ladder":"連板","glossary.term.promote_rate":"晉級率","glossary.term.money_effect":"賺錢效應","glossary.term.sentiment_cycle":"情緒週期","glossary.term.sector_flow":"板塊資金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源熱備","glossary.term.pit":"PIT(時點資料)","glossary.term.survivorship":"倖存者偏差","glossary.term.ai_eval":"AI評估","glossary.term.ai_chat":"智能問股","glossary.term.backtest":"回測","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"樣本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬組合","glossary.term.data_quality":"資料品質分","glossary.term.rbac":"RBAC權限","glossary.term.sector_rotation":"產業輪動","glossary.term.index_enhance":"指數增強","glossary.term.multifactor":"多因子","glossary.term.volatility":"波動率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林帶","glossary.term.dragon_head":"龍頭股","glossary.term.data_freshness":"資料新鮮度","state.overviewError":"總覽資料載入失敗","state.merrillError":"美林時鐘資料載入失敗","state.marketError":"行情資料載入失敗","state.consensusError":"共識榜載入失敗","state.strategiesError":"策略研究資料載入失敗","state.strategiesManageError":"策略載入失敗","state.backtestError":"回測失敗","state.intradayError":"盤中快照載入失敗","state.freshnessError":"資料新鮮度載入失敗","state.healthDetailError":"排程任務資料載入失敗","state.factCheckError":"事實護欄資料載入失敗","state.notificationError":"通知中心資料載入失敗","state.featureConfigError":"基礎配置資料載入失敗","state.usageError":"用量統計資料載入失敗","state.emptyMarket":"暫無行情資料","state.emptyFocus":"暫無重點追蹤資料","state.emptyFreshness":"暫無資料新鮮度記錄","state.emptyPool":"暫無漲跌停池資料","state.emptyStrategyResearch":"暫無策略研究資料","state.emptyStrategyManage":"暫無可管理的策略","state.emptyStrategy":"暫無策略","state.emptyDictField":"暫無欄位資料","state.descNetworkOrService":"請檢查網路或服務後重試","state.descNetwork":"請檢查網路後重試","state.descService":"請檢查服務後重試","state.descBacktest":"請檢查策略與日期範圍後重試","state.descEmptyMarket":"目前無指數行情回傳，可稍後重試","state.descEmptyFocus":"目前日期/時段暫無評估結果，可切換日期或時段","state.descEmptyFreshness":"介面未回傳任何資料表，可點擊重新整理重試","state.descEmptyPool":"目前交易日三池為空，可切換交易日或重新整理重試","state.descEmptyStrategyResearch":"先去「量化研究」載入策略登錄表，或建立自訂策略","state.descEmptyStrategyManage":"先複製母本建立微調策略，或用 AI 代寫全新策略","state.descEmptyStrategy":"策略登錄表為空，請檢查後端策略目錄或建立自訂策略","state.descEmptyDictField":"目前分類沒有字典欄位，可切換分類或點擊重新整理","state.descRetryDict":"點擊重試重新載入資料字典","state.descRetryHealth":"點擊重試重新載入健康與可靠性資料","state.descAiModels":"廠商模型設定取得失敗，可重試","a11y.watchlistList":"自選股列表","a11y.reviewDateList":"復盤日期列表","a11y.dailyReviewList":"每日復盤列表","a11y.shorttermDateList":"復盤日曆日期列表","a11y.selectWatchStock":"選擇 {code} {name}","a11y.viewMarketReview":"檢視 {date} 市場復盤","msg.runFailed":"執行失敗: {msg}","msg.exportFailed":"匯出失敗: {msg}","msg.factorIcFailed":"因子 IC 分析失敗: {msg}","msg.layerBacktest":"分層回測: {msg}","msg.layerBacktestFailed":"分層回測失敗: {msg}","msg.factorDetail":"因子詳情: {msg}","msg.factorDetailFailed":"因子詳情失敗: {msg}","msg.noData":"無資料"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",a),a});(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantPinyin=e()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},e=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let u=[];function t(C){const M=String(C||"");let P="";for(const x of M){const S=a[x];S?P+=S.charAt(0):/[a-zA-Z0-9]/.test(x)&&(P+=x.toLowerCase())}return P}function r(C){const M=String(C||"");let P="";for(const x of M){const S=a[x];S?P+=S:/[a-zA-Z0-9]/.test(x)&&(P+=x.toLowerCase())}return P}function d(C){return String(C||"").trim().toLowerCase()}function b(C,M){const P=(M.code||"").toLowerCase();return/^\d+$/.test(C)?P.indexOf(C)!==-1:/[\u4e00-\u9fa5]/.test(C)?(M.name||"").toLowerCase().indexOf(C)!==-1:P.indexOf(C)!==-1||(M.initials||t(M.name)).indexOf(C)!==-1||(M.pinyin||r(M.name)).indexOf(C)!==-1}function o(C){const M={},P=[],x=function(S,n,p){!S||M[S]||(M[S]=!0,P.push({code:S,name:n||S,source:p||"core",initials:t(n||S),pinyin:r(n||S)}))};return e.forEach(function(S){x(S.code,S.name,"core")}),(C||[]).forEach(function(S){x(S.code,S.name,"extra")}),P}function i(C,M){const P=d(C);if(!P||!M||!M.length)return[];const x=P.split(/[\s,，、;；]+/).filter(Boolean);return x.length?M.filter(function(S){return x.every(function(n){return b(n,S)})}).slice(0,20).map(function(S){return{code:S.code,name:S.name,source:S.source||"core"}}):[]}function g(C){Array.isArray(C)&&(u=u.concat(C))}function c(){return u.slice()}function D(){return o(u)}function k(C){return i(C,D())}const T={CHAR_PINYIN:a,CORE_STOCKS:e,toPinyinInitials:t,toPinyin:r,normalizeQuery:d,matchToken:b,buildStockIndex:o,searchStocksByQuery:i,registerExtraStocks:g,getExtraStocks:c,getStockIndex:D,searchCoreStocks:k};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=T),T});(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantPreferences=e()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",e={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},u=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],t={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function r(n){return n=parseInt(n,10),isNaN(n)?!1:n===-1||n>=0&&n<=360}const d={light:"classic-white",dark:"dark-pro"};function b(){if(typeof localStorage>"u")return{};try{const n=localStorage.getItem(a);if(!n)return{};const p=JSON.parse(n);return p&&typeof p=="object"?p:{}}catch{return{}}}function o(n){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(n))}catch{}}function i(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function g(){const n=Object.assign({},e,b()),p={};return u.forEach(function(R){const O=n[R];p[R]=R==="theme_hue"?r(O)?parseInt(O,10):e[R]:t[R].indexOf(O)!==-1?O:e[R]}),p}function c(n){if(u.indexOf(n)!==-1)return g()[n]}function D(n,p){return u.indexOf(n)===-1?!1:n==="theme_hue"?r(p):t[n].indexOf(p)!==-1}function k(n,p){if(!D(n,p))return!1;const R=b();return R[n]=p,o(R),i()&&C({[n]:p}),!0}function T(n){if(!n||typeof n!="object")return!1;const p={};if(Object.keys(n).forEach(function(O){D(O,n[O])&&(p[O]=n[O])}),!Object.keys(p).length)return!1;const R=Object.assign({},b(),p);return o(R),i()&&C(p),!0}function C(n){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:n})}).catch(function(){})}catch{}}async function M(){const n=g();if(!i()||typeof fetch>"u")return n;try{const p=await fetch("/api/user_config/preferences");if(p.ok){const R=await p.json();if(R.success&&R.preferences){const O=R.preferences;u.forEach(function(f){const w=O[f];if(f==="theme_hue"){r(w)&&(n[f]=parseInt(w,10));return}t[f].indexOf(w)!==-1&&(n[f]=w)}),o(n)}}}catch(p){typeof console<"u"&&console.warn&&console.warn("[preferences] 读取服务端偏好失败, 回退本地偏好:",p&&p.message)}return n}function P(n){const p=n||c("info_density")||"comfortable",R=t.info_density.indexOf(p)!==-1?p:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",R),R}function x(n){const p=n||c("theme")||"system";if(p==="system"){let R=!1;return typeof window<"u"&&window.matchMedia&&(R=window.matchMedia("(prefers-color-scheme: dark)").matches),R?"dark":"light"}return p==="dark"||p==="light"?p:"light"}const S={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:e,PREFERENCE_KEYS:u,PREFERENCE_VALUES:t,THEME_MODE_TO_THEME:d,getLocal:g,getPreference:c,isValidValue:D,setPreference:k,setPreferences:T,saveToBackend:C,loadPreferences:M,resolveTheme:x,applyDensity:P};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=S),S});(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantRecent=e()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function u(){if(typeof localStorage>"u")return[];try{const g=localStorage.getItem(a);if(!g)return[];const c=JSON.parse(g);return Array.isArray(c)?c:[]}catch{return[]}}function t(g){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(g))}catch{}}function r(g,c){if(!g)return!1;let D=u().filter(function(k){return k.code!==g});return D.unshift({code:g,name:(c||"").toString().slice(0,32),ts:Date.now()}),D.length>10&&(D=D.slice(0,10)),t(D),!0}function d(){return u().slice(0,10)}function b(g){t(u().filter(function(c){return c.code!==g}))}function o(){t([])}const i={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:r,getRecentViewed:d,removeRecent:b,clearRecent:o};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=i),i});(function(){const a=typeof Vue<"u"?Vue:{},{ref:e,computed:u,watch:t,onMounted:r,nextTick:d}=a;function b(v,A={}){if(typeof v=="string"&&v.startsWith("/api/")){const y=localStorage.getItem("quant_token");if(y)return{...A,headers:{...A.headers||{},Authorization:"Bearer "+y}}}return A}async function o(v,A={}){const y=b(v,A),j={"Content-Type":"application/json",...y.headers},te=(A.method||"GET").toUpperCase(),re=te+"|"+v,se=async()=>{const le=await fetch(v,{...y,headers:j});if(le.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!le.ok){let Q="";try{const ie=await le.json();Q=ie&&ie.detail||""}catch{}throw Object.assign(new Error(Q||"请求失败（HTTP "+le.status+"）"),{status:le.status})}return await le.json()};try{const le=A.noLoading?se:()=>p(se);return te==="GET"&&!A.noDedupe?await P(re,le):await le()}catch(le){throw le.message==="登录已过期"?le:(console.error("[apiFetch] "+v+":",le.message),Object.assign(le,{_formatted:R(le,le.status)}))}}function i(){return new Date().toISOString().split("T")[0]}function g(v){return v?v.split("T")[0]:""}function c(v,A="info",y=3e3){let j=document.querySelector(".toast-container");j||(j=document.createElement("div"),j.className="toast-container",document.body.appendChild(j));const te=document.createElement("div");te.className=`toast toast-${A}`,te.textContent=v,j.appendChild(te),setTimeout(()=>{te.classList.add("leaving"),setTimeout(()=>te.remove(),300)},y)}function D(v,A=300){let y;return function(...j){clearTimeout(y),y=setTimeout(()=>v.apply(this,j),A)}}function k(v,A=300){let y=!1;return function(...j){y||(v.apply(this,j),y=!0,setTimeout(()=>{y=!1},A))}}async function T(v,A=3e3,y=""){const j=new Promise((te,re)=>setTimeout(()=>re(new Error("timeout")),A));try{return await Promise.race([v,j])}catch(te){console.warn(`[timeout] ${y||"task"} failed:`,te.message)}}const C=new Map;function M(){return C.clear(),!0}function P(v,A){if(!v||typeof A!="function")return Promise.reject(new Error("bad dedupe args"));if(C.has(v))return C.get(v);const y=Promise.resolve().then(A).finally(()=>{C.delete(v)});return C.set(v,y),y}let x=0;function S(){return x=0,!0}function n(){return x}async function p(v){x++;try{return await v()}finally{x--}}function R(v,A){if(!v)return"请求失败";if(v&&typeof v=="object"&&v.detail)return String(v.detail);if(typeof v=="string"&&v)return v;if(v&&v.message){const y=String(v.message);return/Failed to fetch|fetch failed|networkerror/i.test(y)?"网络连接失败，请检查网络后重试":y}return A?"请求失败（HTTP "+A+"）":"请求失败"}function O(v,A){if(v===A)return!0;try{return JSON.stringify(v)===JSON.stringify(A)}catch{return!1}}function f(v,A,y){const j=(v||"GET").toUpperCase();let te="";if(y)try{const re={};Object.keys(y).sort().forEach(se=>{re[se]=y[se]}),te=JSON.stringify(re)}catch{te=""}return j+"|"+A+"|"+te}class w{constructor(){this._map=new Map,this._exp=new Map}get(A){const y=this._exp.get(A);if(y!=null){if(Date.now()>y){this.delete(A);return}return this._map.get(A)}}set(A,y,j){return this._map.set(A,y),this._exp.set(A,Date.now()+(j>0?j:-1)),y}delete(A){this._map.delete(A),this._exp.delete(A)}clear(){this._map.clear(),this._exp.clear()}has(A){return this.get(A)!==void 0}get size(){return this._map.size}}function z(v){const A=new w,y=v!=null&&v>0?v:15e3;return{store:A,defaultTtl:y,get:j=>A.get(j),set:(j,te,re)=>A.set(j,te,re??y),delete:j=>A.delete(j),clear:()=>A.clear(),size:()=>A.size}}const F=new Set;async function V(v){const A=v&&v.cache,y=v&&v.key,j=v&&(v.fetchFn||v.fetcher),te=v&&v.ttl;if(!A||!y||typeof j!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(F.has(y))return{ok:!1,changed:!1,skipped:!0,fresh:null};F.add(y);try{const re=A.get(y);let se;try{se=await j()}catch(Q){return v.onError&&v.onError(Q),{ok:!1,changed:!1,fresh:null}}const le=re!==void 0&&!O(re,se);return A.set(y,se,te),v.apply&&v.apply(se,re),re!==void 0&&(le?v.onChanged&&v.onChanged(se,re):v.onUnchanged&&v.onUnchanged(se,re)),{ok:!0,changed:le,fresh:se}}finally{F.delete(y)}}const I=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function $(v,A={}){if(v==null)return"";const y=A&&A.allow||I,j=new Set(y.map(le=>String(le).toUpperCase()));let te;try{te=new DOMParser().parseFromString(String(v),"text/html")}catch{return String(v).replace(/[<>&]/g,Q=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[Q])}const re=te.body||te;function se(le){Array.from(le.childNodes).forEach(Q=>{if(Q.nodeType===1){const ie=String(Q.tagName).toUpperCase();if(j.has(ie))Array.from(Q.attributes).forEach(Ce=>{const ee=Ce.name.toLowerCase(),X=(Ce.value||"").trim().toLowerCase();(ee.startsWith("on")||(ee==="href"||ee==="src"||ee==="xlink:href")&&X.startsWith("javascript:")||ee==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(X))&&Q.removeAttribute(Ce.name),ee==="href"&&!/^(https?:|mailto:|#|\/)/.test(X)&&Q.removeAttribute("href")}),ie==="A"&&Q.setAttribute("rel","noopener noreferrer"),se(Q);else{const Ce=Q.parentNode;for(;Q.firstChild;)Ce.insertBefore(Q.firstChild,Q);Ce.removeChild(Q)}}else if(Q.nodeType!==3){if(Q.nodeType===8)Q.parentNode&&Q.parentNode.removeChild(Q);else if(Q.nodeType===4){const ie=te.createTextNode(Q.nodeValue||"");Q.parentNode&&Q.parentNode.replaceChild(ie,Q)}}})}return se(re),re.innerHTML}const W="/api/openapi",B="/api/market/ws/quotes",K=1,q=2.5,s="数据不可达",_="实时不可用，不刷新";function l(){const v=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",A=typeof location<"u"?location.host:"localhost:8001";return v+"//"+A+B}function m(v,A){if(!v)return null;const y=A||{riseSpeed:K,volumeRatio:q},j=y.riseSpeed!=null?y.riseSpeed:K,te=y.volumeRatio!=null?y.volumeRatio:q,re=parseFloat(v.rise_speed);if(!isNaN(re)&&Math.abs(re)>j)return re>0?"涨速预警":"跌速预警";const se=parseFloat(v.volume_ratio);return!isNaN(se)&&se>te?"放量预警":null}function J(v){const A=Number(v);return v==null||isNaN(A)?null:A}const E={apiFetch:o,withAuthHeaders:b,getToday:i,formatDate:g,withTimeout:T,showToast:c,debounce:D,throttle:k,resetInFlight:M,dedupeRequest:P,resetLoading:S,loadingCount:n,withLoading:p,formatApiError:R,jsonEquals:O,makeCacheKey:f,CacheStore:w,createTtlCache:z,silentRefresh:V,sanitizeHtml:$,OPENAPI_ROUTE_BASE:W,REALTIME_WS_PATH:B,WARN_RISE_SPEED_THRESHOLD:K,WARN_VOLUME_RATIO_THRESHOLD:q,REALTIME_DEGRADED_TEXT:s,REALTIME_FALLBACK_TEXT:_,buildRealtimeWsUrl:l,checkQuoteWarning:m,quoteFmt:{price:function(v){const A=J(v);return A===null?"--":A.toFixed(2)},pct:function(v){const A=J(v);return A===null?"--":(A>0?"+":"")+A.toFixed(2)+"%"},num:function(v){const A=J(v);return A===null?"--":A.toFixed(2)},color:function(v){const A=v?v.change_pct:null,y=J(A);return y===null?"":y>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=E),typeof Re<"u"&&Re.exports&&(Re.exports=E)})();(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantTabsCore=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(D,k){return D+"/"+k}function u(D,k,T,C){var M=D[k]||[],P=M.findIndex(function(n){return n.subPage===T});if(P!==-1)return{groups:D,activeKey:e(k,T)};var x=M.concat([{subPage:T,title:C}]);x.length>a&&(x=r(x));var S=Object.assign({},D,t({},k,x));return{groups:S,activeKey:e(k,T)}}function t(D,k,T){return D[k]=T,D}function r(D){if(D.length<=a)return D;var k=D.length>1?1:0;return D.filter(function(T,C){return C!==k})}function d(D,k,T,C){var M=D[k]||[],P=M.findIndex(function(p){return p.subPage===T});if(P===-1)return{groups:D,nextActive:null};var x=M.filter(function(p){return p.subPage!==T}),S=Object.assign({},D,t({},k,x)),n=null;return T===C&&(x[P]?n=x[P].subPage:x[P-1]?n=x[P-1].subPage:n=null),{groups:S,nextActive:n}}function b(D){return D&&D.length?D[0]:""}function o(D,k){return D[k]||[]}function i(D,k,T){var C=D[k]||[],M=C.filter(function(x){return x.subPage===T}),P=Object.assign({},D,t({},k,M));return{groups:P,activeKey:M.length?e(k,M[0].subPage):null}}function g(D,k){var T=Object.assign({},D,t({},k,[]));return{groups:T,activeKey:null}}function c(D,k,T,C){var M=(D[k]||[]).slice();if(T<0||T>=M.length)return{groups:D};var P=M.splice(T,1)[0];return M.splice(Math.max(0,Math.min(C,M.length)),0,P),{groups:Object.assign({},D,t({},k,M))}}return{MAX_TABS:a,openTab:u,closeTab:d,getDefaultTab:b,tabsOf:o,evictOldest:r,closeOthers:i,closeAll:g,reorder:c,keyOf:e}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var $s=typeof Re=="object"&&Re.exports?Re.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;$s&&(window.__quantModules.tabsCore=$s)}(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantNavModeCore=e()})(typeof self<"u"?self:void 0,function(){var a=["subnav","tree","toptab"],e="toptab",u="nav_mode";function t(c){return a.indexOf(c)!==-1?c:e}function r(c){return t(c)==="subnav"}function d(c){return t(c)==="tree"}function b(c){return t(c)==="toptab"}function o(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function i(){var c=o(),D=e;if(c)try{D=t(c.getItem(u))}catch{}return{navMode:D}}function g(c){var D=o();if(!(!D||!c))try{c.navMode!==void 0&&D.setItem(u,t(c.navMode))}catch{}}return{NAV_MODES:a,DEFAULT_NAV_MODE:e,normalizeNavMode:t,subnavVisible:r,treeChildrenVisible:d,topTabsVisible:b,readPrefs:i,writePrefs:g}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var Zs=typeof Re=="object"&&Re.exports?Re.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;Zs&&(window.__quantModules.navModeCore=Zs)}(function(){function e(l,m){if(!Array.isArray(l)||l.length<=m)return l;const J=[],N=l.length/m*2;for(let E=0;E<l.length;E+=N){const v=Math.floor(E),A=Math.min(l.length,Math.ceil(E+N));let y=1/0,j=-1,te=-1/0,re=-1;for(let se=v;se<A;se++){const le=l[se];if(!le)continue;const Q=le[3]!=null?Number(le[3]):1/0,ie=le[4]!=null?Number(le[4]):-1/0;Q<y&&(y=Q,j=se),ie>te&&(te=ie,re=se)}j>=0&&J.push(l[j]),re>=0&&re!==j&&J.push(l[re])}return J}let u=null;function t(){return typeof echarts<"u"?Promise.resolve():(u||(u=new Promise(function(l,m){const J=document.createElement("script");J.src="/static/lib/echarts.min.js",J.async=!0,J.onload=function(){typeof echarts<"u"?l():m(new Error("echarts 加载后未定义"))},J.onerror=function(){m(new Error("echarts.min.js 加载失败"))},document.head.appendChild(J)})),u)}function r(){const l=getComputedStyle(document.documentElement);return{primary:l.getPropertyValue("--primary-color").trim()||"#2563eb",up:l.getPropertyValue("--color-up").trim()||"#43e97b",down:l.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:l.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:l.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const d=l=>{try{return typeof getComputedStyle!="function"||typeof document>"u"?"":(getComputedStyle(document.documentElement).getPropertyValue(l)||"").trim()}catch{return""}};function b(){return{up:d("--color-up")||"#E63946",down:d("--color-down")||"#2E7D32",neutral:d("--color-neutral")||"#43a047",accent:d("--color-accent")||"#F59E0B",risk:d("--color-danger")||"#C62828",warn:d("--color-warning")||"#FF9800",success:d("--color-success")||"#4CAF50",primary:d("--qc-primary-600")||"#b8922a",grid:d("--chart-split")||"#e2e8f0",axis:d("--chart-axis")||"#cbd5e1",bg:d("--chart-bg")||"transparent",series:[d("--qc-primary-600")||"#b8922a",d("--qc-primary-500")||"#c49b2e",d("--qc-primary-700")||"#8f6f1f",d("--qc-primary-400")||"#d4b352",d("--color-up")||"#E63946",d("--color-down")||"#2E7D32",d("--color-accent")||"#F59E0B",d("--qc-neutral-400")||"#b8ae9f"]}}function o(l,m,J,N=!1,E=!1){if(!m||m.length===0)return;m.length>2e3&&(m=e(m,2e3));const v=m.map(H=>typeof H[0]=="string"&&H[0].indexOf("-")>=0?H[0]:H[0].slice(0,4)+"-"+H[0].slice(4,6)+"-"+H[0].slice(6,8)),A=r(),y={ma5:d("--color-accent")||"#F59E0B",ma10:d("--color-primary")||"#3B82F6",ma20:d("--color-warning")||"#8B5CF6",ma60:d("--color-success")||"#10B981"},j=m.map(H=>[H[1],H[2],H[3],H[4]]),te=m.map(H=>H[5]),re=m.map(H=>H[6]),se=m.map(H=>H[7]),le=m.map(H=>H[8]),Q=m.map(H=>H[9]),ie=m.map(H=>H[10]),ee=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",X=A.borderLight,be={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:A.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:ee,borderColor:X,textStyle:{color:A.textSecondary,fontSize:12},formatter:function(H){if(!H||!H.length)return"";const me=H[0].dataIndex,ue=m[me];if(!ue)return"";const Z=l.getOption(),de=Z.legend&&Z.legend[0]&&Z.legend[0].selected||{},Ee=pe=>de[pe]!==!1,we=pe=>pe==null||isNaN(pe)?"--":Number(pe).toFixed(2),Ne=pe=>pe==null||isNaN(pe)?"--":(Number(pe)/1e4).toFixed(2)+"万手",Ye=['<div style="font-weight:600;color:'+A.textSecondary+';">'+v[me]+"</div>"];return Ye.push("开: "+we(ue[1])+"　收: "+we(ue[2])),Ye.push("低: "+we(ue[3])+"　高: "+we(ue[4])),Ye.push("成交量: "+Ne(ue[5])),ue[6]!=null&&Ee("MA5")&&Ye.push("MA5: "+we(ue[6])),ue[7]!=null&&Ee("MA10")&&Ye.push("MA10: "+we(ue[7])),ue[8]!=null&&Ee("MA20")&&Ye.push("MA20: "+we(ue[8])),ue[9]!=null&&Ee("MA60")&&Ye.push("MA60: "+we(ue[9])),ue[10]!=null&&Ye.push("VOL_MA5: "+Ne(ue[10])),Ye.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:E?0:8,textStyle:{color:A.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:E?30:40,height:E?"48%":"52%"},{left:56,right:16,top:E?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:v,boundaryGap:!0,axisLine:{lineStyle:{color:X}},axisLabel:{color:A.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:v,axisLabel:{show:!1},axisLine:{lineStyle:{color:X}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:X}},axisLabel:{color:A.textSecondary,fontSize:11,formatter:function(H){const me=Math.round(H*100)/100;return me%1===0?String(Math.round(me)):me.toFixed(2)}},splitLine:{lineStyle:{color:X,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:X}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,m.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:X,textStyle:{color:A.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:j,itemStyle:{color:A.up,color0:A.down,borderColor:A.up,borderColor0:A.down}},{name:"MA5",type:"line",data:re,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:y.ma5}},{name:"MA10",type:"line",data:se,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:y.ma10}},{name:"MA20",type:"line",data:le,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:y.ma20}},{name:"MA60",type:"line",data:Q,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:y.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:te,itemStyle:{color:function(H){const me=H.dataIndex;return m[me][1]>=m[me][2]?A.up:A.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:ie,smooth:!0,symbol:"none",lineStyle:{width:1,color:y.ma5,type:"dashed"}}]};l.setOption(be,!0)}const i=new Map;function g(l){return i.has(l)||i.set(l,{chart:null,cache:null}),i.get(l)}async function c(l,m,J,N=!1,E={}){await t();const v=g(l);let A=document.getElementById(l);if(!A)for(let y=0;y<16&&(await new Promise(j=>setTimeout(j,50)),A=document.getElementById(l),!A);y++);if(!A)throw new Error("无法找到图表容器: "+l);if(A.offsetWidth<50&&(A.style.minWidth="600px",A.style.minHeight="300px"),!v.chart||v.chart.isDisposed()||v.chart.getDom()!==A){if(v.chart)try{v.chart.dispose()}catch{}v.chart=echarts.init(A),v.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const y=E.onLegend;typeof y=="function"&&v.chart.on("legendselectchanged",j=>{j&&j.selected&&y(j.selected)})}return o(v.chart,m,J,N,!!E.isMobile),v.cache={data:m,period:J,isIndex:N,isMobile:!!E.isMobile},v.chart}function D(l){const m=i.get(l);m&&m.chart&&(m.chart.dispose(),m.chart=null,m.cache=null)}function k(l){const m=i.get(l);m&&m.chart&&m.chart.resize()}function T(l,m){const J=i.get(l),N=J&&J.chart;if(N)if(m<=0)N.dispatchAction({type:"dataZoom",start:0,end:100});else{const A=Math.max(0,(60-m)/60*100);N.dispatchAction({type:"dataZoom",start:Math.round(A),end:100})}}function C(l){var N,E,v;const m=i.get(l);if(!m||!m.chart||!m.cache||m.chart.isDisposed())return;const J=((v=(E=(N=m.chart.getOption())==null?void 0:N.legend)==null?void 0:E[0])==null?void 0:v.selected)||null;o(m.chart,m.cache.data,m.cache.period,m.cache.isIndex,m.cache.isMobile),J&&m.chart.setOption({legend:{selected:J}})}function M(l){const m=i.get(l);return m&&m.chart}const P=new Map;function x(l){return P.has(l)||P.set(l,{chart:null,cache:null}),P.get(l)}function S(l,m,J={}){return t().then(function(){const N=x(l),E=document.getElementById(l);if(!E)throw new Error("无法找到图表容器: "+l);if(E.offsetWidth<50&&(E.style.minWidth="600px",E.style.minHeight="300px"),N.chart&&N.chart.getDom&&N.chart.getDom()!==E){try{N.chart.dispose()}catch{}N.chart=null}N.chart||(N.chart=echarts.init(E),N.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),N.resizeBound||(N.resizeBound=!0,window.addEventListener("resize",function(){N.chart&&!N.chart.isDisposed()&&N.chart.resize()})));const v=typeof m=="function"?m():m;return N.chart.setOption(v,!0),N.cache={buildOption:m,key:J.key||""},N.chart})}function n(l){var E,v,A;const m=P.get(l);if(!m||!m.chart||!m.cache||m.chart.isDisposed())return;const J=((A=(v=(E=m.chart.getOption())==null?void 0:E.legend)==null?void 0:v[0])==null?void 0:A.selected)||null,N=typeof m.cache.buildOption=="function"?m.cache.buildOption():m.cache.buildOption;m.chart.setOption(N,!0),J&&N&&N.legend&&N.legend.selected&&m.chart.setOption({legend:{selected:J}})}function p(l){const m=P.get(l);m&&m.chart&&(m.chart.dispose(),m.chart=null,m.cache=null)}function R(l){const m=P.get(l);m&&m.chart&&m.chart.resize()}const O=new Map;function f(l){return O.has(l)||O.set(l,{chart:null,cache:null}),O.get(l)}function w(l,m,J={}){return t().then(function(){const N=f(l),E=document.getElementById(l);if(!E)return null;if(E.offsetWidth<50&&(E.style.minWidth="600px",E.style.minHeight="300px"),N.chart&&N.chart.getDom&&N.chart.getDom()!==E){try{N.chart.dispose()}catch{}N.chart=null}N.chart||(N.chart=echarts.init(E),N.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),N.resizeBound||(N.resizeBound=!0,window.addEventListener("resize",function(){N.chart&&!N.chart.isDisposed()&&N.chart.resize()})));const v=typeof m=="function"?m():m;return N.chart.setOption(v,!0),N.cache={buildOption:m,key:J.key||""},N.chart})}function z(l){const m=O.get(l);if(!m||!m.chart||!m.cache||m.chart.isDisposed())return;const J=typeof m.cache.buildOption=="function"?m.cache.buildOption():m.cache.buildOption;m.chart.setOption(J,!0)}function F(l){const m=O.get(l);m&&m.chart&&(m.chart.dispose(),m.chart=null,m.cache=null)}function V(l){const m=O.get(l);m&&m.chart&&m.chart.resize()}const I=w,$=z,W=F,B=V;function K(l,m,J,N){N=N||{};const E=N.drawdownColor||d("--state-danger-solid")||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[N.navLabel||"净值",N.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:J||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:N.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:N.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:N.navLabel||"净值",type:"line",data:l||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:N.ddLabel||"回撤",type:"line",yAxisIndex:1,data:m||[],showSymbol:!1,areaStyle:{opacity:.25,color:E},lineStyle:{color:E,type:"solid",width:1.5}}]}}function q(l,m){m=m||{};const J=m.bandColor||d("--state-info-solid")||"#1976d2",N=l&&l.dates||[],E=l&&l.median||[],v=l&&l.q25||[],A=l&&l.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[m.medianLabel||"中位IC",m.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:N,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:m.medianLabel||"中位IC",type:"line",data:E,showSymbol:!1,lineStyle:{width:2,color:J}},{name:m.bandLabel||"25–75分位",type:"line",data:v,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:J,opacity:.12}},{name:"_bandH",type:"line",data:A.map(function(y,j){return y-(v[j]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:J,opacity:.12}}]}}function s(l,m){m=m||{};const J=m.color||d("--color-ai")||"#7c3aed",N=l&&l.dates||[],E=l&&l.value||[],v=l&&l.upper||[],A=l&&l.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[m.valueLabel||"情绪",m.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:N,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:m.valueLabel||"情绪",type:"line",data:E,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:J}},{name:m.bandLabel||"过热/冰点带",type:"line",data:v,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:J,opacity:.1}},{name:"_bandL",type:"line",data:A.map(function(y,j){return(v[j]||0)-y}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:J,opacity:.1}}]}}const _={renderKlineChart:o,renderKlineTo:c,disposeKline:D,resizeKline:k,zoomKline:T,redrawKline:C,getKlineChart:M,renderBacktestTo:S,redrawBacktest:n,disposeBacktest:p,resizeBacktest:R,renderPortfolioTo:w,redrawPortfolio:z,disposePortfolio:F,resizePortfolio:V,renderSimpleChartTo:I,redrawSimpleChart:$,disposeSimpleChart:W,resizeSimpleChart:B,buildNavDrawdownOption:K,buildIcBandOption:q,buildSentimentBandOption:s,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:b,init(){return{renderKlineChart:o,renderKlineTo:c,disposeKline:D,resizeKline:k,zoomKline:T,redrawKline:C,getKlineChart:M,renderBacktestTo:S,redrawBacktest:n,disposeBacktest:p,resizeBacktest:R,renderPortfolioTo:w,redrawPortfolio:z,disposePortfolio:F,resizePortfolio:V,renderSimpleChartTo:I,redrawSimpleChart:$,disposeSimpleChart:W,resizeSimpleChart:B,buildNavDrawdownOption:K,buildIcBandOption:q,buildSentimentBandOption:s,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:b}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=_),typeof Re<"u"&&Re.exports&&(Re.exports={downsampleSeries:e,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:K,buildIcBandOption:q,buildSentimentBandOption:s})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:e,computed:u}=Vue,{configChanged:t,consensus:r}=a,d=e(null),b=e(""),o=e(null),i=e([]),g=e([]),c=e([]),D=e([]),k=e([]),T=e([]),C=e({});function M(ge){const Se=k.value.indexOf(ge);Se>=0?k.value.splice(Se,1):k.value.push(ge)}const P=e("date"),x=e([]),S=e(!1),n=e(!1),p=e("watchlist"),R=e([]),O=e({vendors:[]}),f=e(""),w=e(!1),z=e(!1);function F(ge){if(!ge)return"";const Se=String(ge),Ae=Se.length;if(Ae<=4)return Se[0]+"*".repeat(Ae-1);const ze=Ae<=8?2:4;return Se.slice(0,ze)+"*".repeat(Ae-ze-ze)+Se.slice(-ze)}async function V(ge){let Se;try{Se=(await ElementPlus.ElMessageBox.prompt("请输入密钥查看密码（与登录密码不同；默认 admin123，可在 .env 的 KEY_VIEW_PASSWORD 修改）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const ze=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:Se,target:ge})})).json();if(ze.success)return ze.secret;ElementPlus.ElMessage.error((ze.message||"查看失败")+"（查看密码见 .env KEY_VIEW_PASSWORD）")}catch(Ae){ElementPlus.ElMessage.error("查看失败: "+Ae.message)}return null}async function I(ge){if(ge._revealed){ge._revealed=!1,ge._masked=F(ge.api_key);return}const Se=await V("ai:"+ge.vendor_key);Se!==null&&(ge.api_key=Se,ge._revealed=!0)}async function $(ge){if(ge._editing){ge._editing=!1,ge._revealed=!1,ge.api_key&&(ge._masked=F(ge.api_key));return}ge._editing=!0;try{const Ae=await(await fetch("/api/ai/models?full=1")).json();if(Ae.success){const ze=(Ae.data.vendors||[]).find(Je=>Je.vendor_key===ge.vendor_key);ze&&(ge.api_key=ze.api_key||"")}else Ae.message&&ElementPlus.ElMessage.error(String(Ae.message))}catch(Se){ElementPlus.ElMessage.error("解锁失败: "+Se.message)}}function W(ge){const{_fetching:Se,_testing:Ae,_revealed:ze,_masked:Je,_editing:Qe,...Ge}=ge;return Qe||(Ge.api_key=""),Ge.models=(ge.models||[]).map(et=>{const{_testing:tt,testResult:ht,...ve}=et;return ve}),Ge}async function B(){var ge;try{f.value="";const Se=await fetch("/api/ai/models");if(Se.status===401){f.value="请先登录后再查看模型配置";return}if(!Se.ok){f.value=`服务器错误 (${Se.status})`;return}const Ae=await Se.json();Ae.success?(R.value=(((ge=Ae.data)==null?void 0:ge.vendors)||[]).map(ze=>({...ze,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:ze.api_key||"",models:(ze.models||[]).map(Je=>({...Je,_testing:!1,testResult:void 0}))})),f.value=""):f.value=Ae.message||"加载失败"}catch(Se){f.value="网络错误: "+Se.message}}async function K(){try{const Se=await(await fetch("/api/ai/catalog")).json();Se.success&&Se.data&&(O.value=Se.data)}catch(ge){console.warn("AI 厂商目录加载失败",ge)}}async function q(){z.value=!0;try{const Ae=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:R.value.map(W)})})).json();Ae.success?(R.value.forEach(ze=>{ze._editing=!1,ze._revealed=!1,ze.api_key&&(ze._masked=F(ze.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(Ae.message||"保存失败")}catch(ge){ElementPlus.ElMessage.error("保存失败: "+ge.message)}z.value=!1}async function s(ge,Se){Se._testing=!0;try{const ze=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:ge.vendor_key,model:Se.name,base_url:ge.base_url,api_key:ge.api_key,timeout:ge.timeout})});Se.testResult=await ze.json()}catch(Ae){Se.testResult={success:!1,message:Ae.message}}Se._testing=!1}async function _(){w.value=!0;for(const ge of R.value)for(const Se of ge.models||[])ge.api_key?await s(ge,Se):Se.testResult={success:!1,message:"未配置 API Key"};w.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function l(ge){ge._fetching=!0;try{const ze=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:ge.vendor_key,base_url:ge.base_url,api_key:ge.api_key,timeout:ge.timeout})})).json();if(ze.success&&Array.isArray(ze.models)){const Je=new Set((ge.models||[]).map(Qe=>Qe.name));for(const Qe of ze.models)Je.has(Qe)||ge.models.push({name:Qe,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${ze.models.length} 个模型`)}else ElementPlus.ElMessage.error(ze.message||"获取模型列表失败")}catch(Se){ElementPlus.ElMessage.error("获取模型列表失败: "+Se.message)}ge._fetching=!1}function m(ge){const Se=(O.value.vendors||[]).find(Ae=>Ae.vendor_key===ge);if(Se){if(R.value.some(Ae=>Ae.vendor_key===ge)){ElementPlus.ElMessage.warning("该厂商已存在");return}R.value.push({vendor_key:Se.vendor_key,name:Se.name,kind:Se.kind,base_url:Se.base_url,api_key:"",timeout:60,tier:Se.tier||"",website:Se.website||"",locked:!!Se.locked,models:(Se.models||[]).map(Ae=>({name:Ae,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${Se.name}」，配置 API Key 后保存生效`)}}function J(){R.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function N(ge){ge.models||(ge.models=[]),ge.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function E(ge,Se){const Ae=ge.models[Se];if(!(!Ae||Ae.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(Ae.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}ge.models.splice(Se,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function v(ge){if(ge.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(ge.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const Se=R.value.indexOf(ge);Se>=0&&R.value.splice(Se,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const A=e({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),y=e(!1),j=e(""),te=e(0),re=e(""),se=e(!1),le=e(""),Q=e(!1),ie=e(0),Ce=e(0),ee=e(""),X=e({}),be=e({}),H=e({}),me=e({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),ue=e("manual"),Z=u(()=>{const ge={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return ge[me.value.provider]||ge.custom}),de={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function Ee(ge){if(ge==="manual")return;const Se=de[ge];Se&&(me.value.endpoint=Se.endpoint,me.value.model=Se.model,t.value=!0)}function we(){if(t.value=!0,me.value.provider!=="codingplan"&&me.value.provider!=="custom"){const ge=Z.value;ge&&(me.value.endpoint=ge.endpoint,me.value.model=ge.model)}else me.value.provider==="codingplan"&&(me.value.endpoint||(me.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),me.value.model||(me.value.model="ark-code-latest"))}let Ne=null;const Ye=8;async function pe(){Ne&&(Ne.abort(),Ne=null);const Se=(r.value||[]).filter(Ge=>Ge.status==="new"||Ge.status==="out").filter(Ge=>!C.value[Ge.code]);if(Se.length===0)return;const Ae=new AbortController;Ne=Ae;let ze=0;const Je=async()=>{for(;ze<Se.length;){const Ge=Se[ze++];try{const tt=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:Ge.code,stock_name:Ge.name,event_type:Ge.status==="new"?"enter":"exit"}),signal:Ae.signal})).json();tt.success&&tt.signal&&(C.value={...C.value,[Ge.code]:tt.signal})}catch(et){if(et.name==="AbortError")return}}},Qe=Array.from({length:Math.min(Ye,Se.length)},()=>Je());await Promise.all(Qe)}function oe(){Ne&&(Ne.abort(),Ne=null)}let ke=0;async function He(ge){const Se=++ke;try{const ze=await(await fetch(`/api/ai/history/last/${encodeURIComponent(ge)}`)).json();if(Se!==ke)return;ze.success&&ze.data&&(d.value=ze.data,b.value=ze.data.evaluate_time,Oe(ge,ze.data),$e(ze.data))}catch{}}async function Oe(ge,Se){var Ae,ze;try{const Qe=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(ge)}&limit=2`)).json();if(Qe.success&&Qe.data&&Qe.data.length>=2){const Ge=Qe.data[1],et=((Ae=Se.result)==null?void 0:Ae.total_score)||0,tt=((ze=Ge.result)==null?void 0:ze.total_score)||0;et>0&&tt>0&&(o.value={prevScore:tt,currScore:et,diff:et-tt})}}catch(Je){console.warn("[refreshStrategyData] autoPoll failed:",Je)}}function $e(ge){var Je;const Se=((Je=ge.result)==null?void 0:Je.dimensions)||{},Ae=[],ze=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Qe of ze){const Ge=Se[Qe.key];Ge!==void 0&&Ae.push({icon:Ge>=Qe.good?"check-circle-2":Ge>=Qe.warn?"alert-triangle":"x-circle",label:`${Qe.label} ${Math.round(Ge)}分`})}i.value=Ae}return{aiResult:d,lastEvalTime:b,evalHistoryComparison:o,checklistItems:i,aiHistory:g,selectedHistoryIds:c,expandedDates:D,expandedMonths:k,expandedStocks:T,poolSignals:C,toggleMonthExpand:M,aiHistoryView:P,selectedWatchlistCodes:x,showAutoEvaluateSettings:S,savingConfig:n,autoEvaluateScope:p,aiVendors:R,aiCatalog:O,aiModelsError:f,testingAllModels:w,savingAiModels:z,loadAiVendors:B,loadAiCatalog:K,saveAiVendors:q,saveAiModels:q,testVendorModel:s,testAllVendorModels:_,fetchVendorModels:l,addVendorFromCatalog:m,addCustomVendor:J,addVendorModel:N,removeVendorModel:E,removeVendor:v,toggleVendorKeyReveal:I,toggleVendorEdit:$,autoEvaluateConfig:A,aiLoading:y,aiEvalStage:j,aiEvalElapsed:te,aiEvalError:re,showBatchEvaluate:se,batchStocks:le,batchRunning:Q,batchTotal:ie,batchCompleted:Ce,batchCurrent:ee,batchStatuses:X,batchResults:be,batchEvalErrors:H,aiConfig:me,selectedPreset:ue,providerInfo:Z,aiPresets:de,applyPreset:Ee,onProviderChange:we,fetchPoolSignals:pe,cancelPoolSignals:oe,loadLastEvaluation:He}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:e,computed:u,watch:t}=Vue,{configChanged:r,aiConfig:d,aiLoading:b,feishuConfig:o,currentTheme:i,changeTheme:g,autoEvaluateConfig:c,currentUser:D,strategyFilter:k,applyTheme:T,dashboardData:C,lastRefreshTime:M,saveAiModels:P}=a,x=function(pe){const oe=window.__quantModules&&window.__quantModules.themes;return oe&&oe.applyLegacyTheme?oe.applyLegacyTheme(pe):T(pe)},S=e(!1),n=e(!1),p=e(null),R=e(null),O=e(null),f=e(!1),w=e(!1),z=e(null),F=e({token:"",endpoint:"http://api.tushare.pro",timeout:30}),V=e("disconnected"),I=e({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),$=e({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),W=e(!1),B=e(null),K=e(null),q=e("pending"),s=e("..."),_=e(!1),l=e({api_limit:600}),m=e(!1),J=e(!1);async function N(){try{const oe=await(await fetch("/api/system/rate-limit")).json();oe.success&&(l.value=oe.data)}catch(pe){console.warn("loadRateLimit failed:",pe)}}async function E(){J.value=!0;try{const oe=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l.value)})).json();oe.success?(m.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(oe.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{J.value=!1}}t(()=>[d.value.provider,d.value.apiKey,d.value.endpoint,d.value.model],()=>{r.value=!0},{deep:!0});async function v(){S.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(d.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d.value)})).json()).success?(r.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(pe){localStorage.setItem("quant_ai_config",JSON.stringify(d.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",pe)}finally{S.value=!1}}async function A(){b.value=!0;try{const oe=await(await fetch("/api/ai/test")).json();oe.success?ElementPlus.ElMessage.success(oe.message||"API连接正常"):ElementPlus.ElMessage.error(oe.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{b.value=!1}}function y(){const pe={ai:d.value,feishu:o.value,theme:i.value,export_time:new Date().toISOString()},oe=new Blob([JSON.stringify(pe,null,2)],{type:"application/json"}),ke=URL.createObjectURL(oe),He=document.createElement("a");He.href=ke,He.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,He.click(),URL.revokeObjectURL(ke),ElementPlus.ElMessage.success("配置已导出")}function j(pe){const oe=pe.target.files[0];if(!oe)return;const ke=new FileReader;ke.onload=async He=>{try{const Oe=JSON.parse(He.target.result);Oe.ai&&(d.value={...d.value,...Oe.ai},await v()),Oe.feishu&&(Object.assign(o.value,Oe.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Oe.feishu)})),Oe.theme&&(i.value=Oe.theme,g(Oe.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},ke.readAsText(oe),pe.target.value=""}async function te(){S.value=!0;const pe=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:F.value,feishu:o.value,ai:d.value,rate_limit:l.value,auto_evaluate:c.value,theme:i.value}})}).then(Oe=>["userConfig",Oe.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F.value)}).then(Oe=>["tushare",Oe.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:I.value})}).then(Oe=>["datasource",Oe.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o.value)}).then(Oe=>["feishu",Oe.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d.value)}).then(Oe=>["ai",Oe.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l.value)}).then(Oe=>["rateLimit",Oe.ok]),P().then(()=>["aiModels",!0],()=>["aiModels",!1])],oe=await Promise.allSettled(pe),ke=oe.filter(Oe=>Oe.status==="fulfilled"&&Oe.value[1]).length,He=oe.filter(Oe=>Oe.status==="rejected"||Oe.status==="fulfilled"&&!Oe.value[1]).length;m.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(k.value.selected)),localStorage.setItem("quant_strategy_filter_mode",k.value.mode),D.value&&fetch(`/api/users/${D.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:i.value})}).catch(()=>{}),n.value=!1,p.value=new Date().toLocaleString("zh-CN"),S.value=!1,He>0&&console.error(`[saveAllConfig] ${ke}/${ke+He} 项保存成功，${He} 项失败`)}async function re(){try{const oe=await(await fetch("/api/user_config/config")).json();if(oe.success&&oe.config){const ke=oe.config;ke.tushare&&(F.value={...F.value,...ke.tushare}),ke.feishu&&(o.value={...o.value,...ke.feishu}),ke.ai&&(d.value={...d.value,...ke.ai}),ke.rate_limit&&(l.value={...l.value,...ke.rate_limit}),ke.auto_evaluate&&(c.value={...c.value,...ke.auto_evaluate}),ke.theme&&!localStorage.getItem("quant_theme")&&x(ke.theme)}n.value=!1,m.value=!1}catch(pe){console.error("[resetAllConfig] 重新加载配置失败:",pe),n.value=!1}}async function se(){V.value="testing";try{const oe=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(V.value=oe.success?"connected":"disconnected",oe.success){const ke=oe.data_count?` (获取到 ${oe.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+ke)}else ElementPlus.ElMessage.error(oe.message||"连接失败")}catch{V.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function le(){try{const oe=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();V.value=oe.success?"connected":"disconnected"}catch{V.value="disconnected"}}async function Q(){var pe;W.value=!0;try{const ke=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ke.success?(B.value=parseInt(((pe=ke.message.match(/\d+/))==null?void 0:pe[0])||"0"),ElementPlus.ElMessage.success(ke.message)):ElementPlus.ElMessage.error(ke.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{W.value=!1}}async function ie(){try{const oe=await(await fetch("/api/market/tushare/config")).json();oe.success&&oe.config&&(F.value={...F.value,...oe.config})}catch(pe){console.warn("loadTushareConfig failed:",pe)}}function Ce(pe){if(!pe)return"";const oe=String(pe),ke=oe.length;if(ke<=4)return oe[0]+"*".repeat(ke-1);const He=ke<=8?2:4;return oe.slice(0,He)+"*".repeat(ke-He-He)+oe.slice(-He)}const ee="请输入密钥查看密码（与登录密码不同；默认 admin123，可在 .env 的 KEY_VIEW_PASSWORD 修改）";async function X(pe){let oe;try{oe=(await ElementPlus.ElMessageBox.prompt(ee,"查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const He=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:oe,target:pe})})).json();if(He.success)return He.secret;ElementPlus.ElMessage.error((He.message||"查看失败")+"（查看密码见 .env KEY_VIEW_PASSWORD）")}catch(ke){ElementPlus.ElMessage.error("查看失败: "+ke.message)}return null}async function be(pe){const oe=I.value[pe];if(!oe)return;if(oe._revealed){oe._revealed=!1,oe._masked=Ce(oe.token);return}const ke=await X(pe);ke!==null&&(oe.token=ke,oe._revealed=!0)}async function H(pe){const oe=I.value[pe];if(oe){if(oe._editing){oe._editing=!1,oe._revealed=!1,oe.token&&(oe._masked=Ce(oe.token));return}oe._editing=!0;try{const ke=await X(pe);if(ke===null){oe._editing=!1;return}oe.token=ke,oe._revealed=!0}catch(ke){oe._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+ke.message)}}}async function me(){try{const oe=await(await fetch("/api/market/datasource/config")).json();if(oe.success&&oe.config&&oe.config.sources){const ke=oe.config.sources,He=Oe=>{const $e={...I.value[Oe],...ke[Oe]||{}};return $e._editing=!1,$e._revealed=!1,$e._masked=$e.token||"",$e.token="",$e};I.value={sxsc_tushare:He("sxsc_tushare"),tushare:He("tushare"),akshare:{...I.value.akshare,...ke.akshare||{}}}}try{const He=await(await fetch("/api/market/datasource/status")).json();if(He.success&&He.status)for(const[Oe,$e]of Object.entries(He.status))$.value[Oe]=$e.connected?"connected":"disconnected"}catch{}}catch(pe){console.warn("loadDatasourceConfig failed:",pe)}}async function ue(){try{const pe={};for(const[oe,ke]of Object.entries(I.value)){const{_revealed:He,_masked:Oe,_editing:$e,...ge}=ke;!$e&&oe!=="akshare"&&(ge.token=""),pe[oe]=ge}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:pe})}),n.value=!0}catch(pe){console.warn("saveDatasourceConfig failed:",pe)}}async function Z(pe){$.value[pe]="testing";try{const oe=I.value[pe];oe&&oe._editing&&await ue();const He=await(await fetch(`/api/market/datasource/test/${pe}`,{method:"POST"})).json();$.value[pe]=He.success?"connected":"disconnected",He.success?ElementPlus.ElMessage.success(`${pe} 连接成功`):ElementPlus.ElMessage.error(`${pe}: ${He.message}`)}catch{$.value[pe]="disconnected",ElementPlus.ElMessage.error(`${pe} 连接失败`)}}async function de(){w.value=!1;try{const oe=await(await fetch("/api/feishu/config")).json();oe&&typeof oe=="object"&&(o.value={...o.value,...oe},R.value=JSON.parse(JSON.stringify(o.value)))}catch(pe){w.value=!0,console.warn("loadFeishuConfig failed:",pe)}}async function Ee(){try{const oe=await(await fetch("/api/ai/config")).json();if(oe.success&&oe.data)d.value={...d.value,...oe.data};else{const ke=localStorage.getItem("quant_ai_config");ke&&(d.value=JSON.parse(ke))}}catch{const oe=localStorage.getItem("quant_ai_config");oe&&(d.value=JSON.parse(oe))}}async function we(){try{const oe=await(await fetch("/api/user_config/config")).json();if(oe.success&&oe.config){const ke=oe.config;ke.tushare&&(F.value={...F.value,...ke.tushare}),ke.datasource&&ke.datasource.sources&&(I.value={sxsc_tushare:{...I.value.sxsc_tushare,...ke.datasource.sources.sxsc_tushare||{}},tushare:{...I.value.tushare,...ke.datasource.sources.tushare||{}},akshare:{...I.value.akshare,...ke.datasource.sources.akshare||{}}}),ke.feishu&&(o.value={...o.value,...ke.feishu},R.value=JSON.parse(JSON.stringify(o.value))),ke.ai&&(d.value={...d.value,...ke.ai}),ke.rate_limit&&(l.value={...l.value,...ke.rate_limit}),ke.theme&&!localStorage.getItem("quant_theme")&&x(ke.theme),ke.auto_evaluate&&(c.value={...c.value,...ke.auto_evaluate})}}catch(pe){console.warn("加载用户配置失败，使用本地缓存",pe)}}async function Ne(){var pe,oe,ke,He;try{const $e=await(await fetch("/api/dashboard")).json(),ge=$e.success?$e.data:$e;B.value=((pe=ge==null?void 0:ge.stats)==null?void 0:pe.total_stocks_covered)||null;const Ae=await(await fetch("/api/dates")).json();K.value=((oe=Ae==null?void 0:Ae.data)==null?void 0:oe.total)||((He=(ke=Ae==null?void 0:Ae.data)==null?void 0:ke.dates)==null?void 0:He.length)||null;const Je=await(await fetch("/api/ai/history")).json();q.value="ok"}catch{q.value="pending"}}async function Ye(){f.value=!1;try{const oe=await(await fetch("/api/dashboard")).json();C.value=oe.success?oe.data:oe,M.value=Date.now()}catch(pe){f.value=!0,console.error("加载总览数据失败",pe)}}return{configSaving:S,configChanged:r,globalConfigDirty:n,lastSavedTime:p,feishuConfigOriginal:R,aiConfigOriginal:O,tushareConfigOriginal:z,tushareConfig:F,tushareStatus:V,datasourceConfig:I,datasourceStatus:$,syncingData:W,stockCount:B,tradeDateCount:K,aiStatus:q,appVersion:s,showImportDialog:_,rateLimitConfig:l,rateLimitDirty:m,rateLimitSaving:J,loadRateLimit:N,saveRateLimit:E,saveAiConfig:v,testAiApi:A,exportConfig:y,importConfig:j,saveAllConfig:te,resetAllConfig:re,testTushareConnection:se,checkTushareConnection:le,syncStockData:Q,loadTushareConfig:ie,loadDatasourceConfig:me,saveDatasourceConfig:ue,testDatasource:Z,toggleDatasourceKeyReveal:be,toggleDatasourceEdit:H,loadFeishuConfig:de,loadAiConfig:Ee,loadUserConfig:we,loadSystemStatus:Ne,loadDashboardData:Ye,overviewError:f,feishuConfigError:w}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:e,computed:u}=Vue,{currentUser:t,applyTheme:r,allMenuDefs:d,loadGroupConfig:b}=a,o=function(Z){const de=window.__quantModules&&window.__quantModules.themes;return de&&de.applyLegacyTheme?de.applyLegacyTheme(Z):r(Z)},i=e([]),g=e(""),c=e(""),D=e("users"),k=e({}),T=e({}),C=u(()=>{let Z=i.value;if(c.value&&(Z=Z.filter(Ee=>(Ee.group||Ee.role)===c.value)),!g.value)return Z;const de=g.value.toLowerCase();return Z.filter(Ee=>Ee.username.toLowerCase().includes(de))});function M(Z){k.value={...k.value,[Z]:!k.value[Z]}}async function P(Z,de){try{const we=await(await fetch("/api/groups/"+de+"/members/"+Z,{method:"DELETE"})).json();we.success?(await ee(),await ie()):ElementPlus.ElMessage.error(we.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function x(Z){const de=T.value[Z];if(de)try{const we=await(await fetch("/api/groups/"+Z+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:de})})).json();we.success?(await ee(),await ie(),T.value={...T.value,[Z]:""}):ElementPlus.ElMessage.error(we.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function S(Z,de){try{const we=await(await fetch("/api/users/"+Z.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:de})})).json();we.success?await ee():ElementPlus.ElMessage.error(we.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const n=e(!1),p=e(null),R=e({username:"",password:"",role:"user",theme:"tech-blue"}),O=e(!1),f=e(null),w=e(!1),z=e(!1),F=e({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),V=e({}),I=e(!1),$=e({group_id:"",name:"",description:""}),W=e(!1),B=e([]),K=e(""),q=e(""),s=e({});function _(Z){s.value={...s.value,[Z]:!s.value[Z]}}function l(Z){return!i.value||!i.value.length?0:i.value.filter(de=>(de.group||de.role)===Z).length}function m(Z){const de=(Z==null?void 0:Z.visible_menus)||{};return Object.values(de).filter(Boolean).length}const J=u(()=>Object.keys(Q.value).length);async function N(Z){q.value=Z,z.value=!0,await E(Z)}async function E(Z){try{const Ee=await(await fetch("/api/groups/"+Z+"/members")).json();Ee.success&&(B.value=Ee.members||[])}catch(de){B.value=[],console.error("[loadGroupMembers]",de)}}async function v(){if(!(!K.value||!q.value)){W.value=!0;try{const de=await(await fetch("/api/groups/"+q.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:K.value})})).json();de.success?(await E(q.value),await ee(),K.value=""):ElementPlus.ElMessage.error(de.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{W.value=!1}}}async function A(Z){try{const Ee=await(await fetch("/api/groups/"+q.value+"/members/"+Z,{method:"DELETE"})).json();Ee.success?(await E(q.value),await ee()):ElementPlus.ElMessage.error(Ee.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const y=u(()=>{if(!i.value)return[];const Z=new Set(B.value.map(de=>de.username));return i.value.filter(de=>de.username!=="admin"&&de.username!=="guest"&&!Z.has(de.username))});function j(Z){const de=F.value.visible_menus[Z],Ee=d.find(we=>we.key===Z);if(Ee)if(de){const we=V.value[Z]||{};Ee.subPages.forEach(Ne=>{const Ye=Z+"."+Ne;F.value.visible_sub_pages[Ye]=we[Ne]!==void 0?we[Ne]:!0})}else{const we={};Ee.subPages.forEach(Ne=>{const Ye=Z+"."+Ne;we[Ne]=F.value.visible_sub_pages[Ye],F.value.visible_sub_pages[Ye]=!1}),V.value[Z]=we}}function te(Z){f.value=Z;const de=Q.value[Z]||{};F.value={name:de.name||Z,description:de.description||"",visible_menus:{...de.visible_menus||{}},visible_sub_pages:{...de.visible_sub_pages||{}}},V.value={},d.forEach(Ee=>{const we={};Ee.subPages.forEach(Ne=>{we[Ne]=F.value.visible_sub_pages[Ee.key+"."+Ne]}),V.value[Ee.key]=we}),w.value=!0}async function re(){W.value=!0;try{const de=await(await fetch("/api/groups/"+f.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(F.value)})).json();de.success?(w.value=!1,f.value=null,await ie(),await b()):ElementPlus.ElMessage.error(de.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{W.value=!1}}async function se(Z){var de;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((de=Q.value[Z])==null?void 0:de.name)||Z)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const Ne=await(await fetch("/api/groups/"+Z,{method:"DELETE"})).json();Ne.success?await ie():ElementPlus.ElMessage.error(Ne.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function le(){if($.value.group_id){W.value=!0;try{const de=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify($.value)})).json();de.success?(I.value=!1,$.value={group_id:"",name:"",description:""},await ie()):ElementPlus.ElMessage.error(de.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{W.value=!1}}}const Q=e({});async function ie(){try{if(!localStorage.getItem("quant_token"))return;const de=await fetch("/api/groups");if(de.ok){const Ee=await de.json();Q.value=Ee.groups||{}}}catch(Z){console.warn("loadAllGroups:",Z)}}function Ce(Z){var de;return((de=Q.value[Z])==null?void 0:de.name)||Z||"--"}async function ee(){try{if(!localStorage.getItem("quant_token")){i.value=[];return}const de=await fetch("/api/users");if(de.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),t.value=null;return}const Ee=await de.json();i.value=Ee.users||[]}catch(Z){i.value=[],console.error("[loadUsers] error:",Z)}}function X(Z){p.value=Z,R.value={username:Z.username,password:"",role:Z.role,theme:Z.theme||"tech-blue",group:Z.group||Z.role},n.value=!0}async function be(){if(R.value.username){O.value=!0;try{const Z=p.value?"PUT":"POST",de=p.value?`/api/users/${R.value.username}`:"/api/users",we=await(await fetch(de,{method:Z,headers:{"Content-Type":"application/json"},body:JSON.stringify(R.value)})).json();if(we.success){if(ElementPlus.ElMessage.success("保存成功"),t.value&&R.value.username===t.value.username){const Ne=R.value.theme;Ne&&Ne!==t.value.theme&&(t.value.theme=Ne,localStorage.setItem("quant_user",JSON.stringify(t.value)),o(Ne))}n.value=!1,p.value=null,await ee()}else ElementPlus.ElMessage.error(we.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{O.value=!1}}}async function H(Z){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${Z}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await ee())}catch(de){console.error("[deleteUser]",de)}}async function me(Z){try{const Ee=await(await fetch(`/api/users/${Z.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:Z.enabled})})).json();Ee.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(Ee.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function ue(Z){try{const{value:de}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${Z.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(de){const we=await(await fetch(`/api/users/${Z.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:de})})).json();we.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(we.message||"重置失败")}}catch{}}return{userList:i,userSearch:g,groupFilter:c,userPageTab:D,expandedGroups:k,addMemberGroupMap:T,filteredUsers:C,toggleGroupExpand:M,removeMemberFromGroupInline:P,addMemberToGroupInline:x,changeUserGroup:S,showAddUser:n,editingUser:p,userForm:R,savingUser:O,editingGroup:f,menuConfigDialog:w,memberDialog:z,groupEditForm:F,subPageCache:V,showAddGroup:I,addGroupForm:$,savingGroup:W,groupMembers:B,addMemberUsername:K,selectedMemberGroup:q,subPageSectionExpanded:s,toggleSubPageSection:_,getGroupMemberCount:l,getMenuEnabledCount:m,groupCount:J,openMemberManager:N,loadGroupMembers:E,addMemberToGroup:v,removeMemberFromGroup:A,availableUsersForGroup:y,onParentToggle:j,openMenuConfig:te,saveMenuConfig:re,deleteGroupConfig:se,createGroup:le,allGroups:Q,getGroupName:Ce,loadAllGroups:ie,loadUsers:ee,editUser:X,saveUser:be,deleteUser:H,toggleUserEnabled:me,resetUserPassword:ue}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:e,computed:u}=Vue,{stockKlineLoaded:t,stockDetailVisible:r,stockDetailTab:d,stockDetail:b,disposeStockKline:o}=a,i=e([]),g=e(!1),c=e(!1),D=e("date"),k=e([]),T=e([]),C=e([]),M=e([]),P=u(()=>{var v,A;const E=[];for(const y of i.value){if(!y||y.id==null)continue;const j=y.stock_name||y.stock_code||"",te=Array.isArray(y.messages)?y.messages:[];E.push({id:y.id,stock_code:y.stock_code,stock_name:j,first_msg:y.first_msg||((A=(v=te[0])==null?void 0:v.content)==null?void 0:A.substring(0,50))||"",msg_count:y.msg_count||te.length||0,created_at:y.created_at,date:(y.created_at||"").substring(0,10),month:(y.created_at||"").substring(0,7),messages:te})}return E}),x=u(()=>{const E={};for(const A of P.value){const y=A.date||"未知";E[y]||(E[y]=[]),E[y].push(A)}const v={};return Object.keys(E).sort((A,y)=>y.localeCompare(A)).forEach(A=>v[A]=E[A]),v}),S=u(()=>{const E={};for(const A of P.value){const y=A.month||"未知";E[y]||(E[y]=[]),E[y].push(A)}const v={};return Object.keys(E).sort((A,y)=>y.localeCompare(A)).forEach(A=>v[A]=E[A]),v}),n=u(()=>{const E={};for(const v of P.value){const A=`${v.stock_name}(${v.stock_code})`;E[A]||(E[A]=[]),E[A].push(v)}return E});function p(E){const v=k.value.indexOf(E);v>=0?k.value.splice(v,1):k.value.push(E)}function R(E){const v=x.value[E]||[];if(v.every(y=>k.value.includes(y.id)))k.value=k.value.filter(y=>!v.some(j=>j.id===y));else for(const y of v)k.value.includes(y.id)||k.value.push(y.id)}function O(E){const v=S.value[E]||[];if(v.every(y=>k.value.includes(y.id)))k.value=k.value.filter(y=>!v.some(j=>j.id===y));else for(const y of v)k.value.includes(y.id)||k.value.push(y.id)}function f(E){const v=n.value[E]||[];if(v.every(y=>k.value.includes(y.id)))k.value=k.value.filter(y=>!v.some(j=>j.id===y));else for(const y of v)k.value.includes(y.id)||k.value.push(y.id)}function w(E){const v=T.value.indexOf(E);v>=0?T.value.splice(v,1):T.value.push(E)}function z(E){const v=C.value.indexOf(E);v>=0?C.value.splice(v,1):C.value.push(E)}function F(E){const v=M.value.indexOf(E);v>=0?M.value.splice(v,1):M.value.push(E)}function V(){k.value.length===P.value.length?k.value=[]:k.value=P.value.map(E=>E.id)}async function I(){if(k.value.length){try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${k.value.length} 段对话吗？此操作不可恢复。`,"删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}for(const E of[...k.value])await J(E);k.value=[]}}const $={};async function W(E){b.value={stock:E.stock_code,name:E.stock_name},r.value=!0,d.value="chat",t.value=!1,o(),q.value=!0,s.value="",K.value=[];try{let v=$[E.id];if(!v){const A=await fetch("/api/ai/chat/history/"+E.id);if(!A.ok)throw new Error("load history failed");v=(await A.json()).messages||[],$[E.id]=v}K.value=v.map(A=>({role:A.role,content:A.content}))}catch{s.value="历史消息加载失败，请重试"}finally{q.value=!1}}const B=e(""),K=e([]),q=e(!1),s=e("");async function _(){var A;const E=B.value.trim();if(!E||q.value)return;s.value="",K.value.push({role:"user",content:E}),B.value="",q.value=!0;const v=K.value.length;K.value.push({role:"assistant",content:""});try{const te=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((A=b.value)==null?void 0:A.stock)||"",message:E})})).body.getReader(),re=new TextDecoder;let se="";for(;;){const{done:le,value:Q}=await te.read();if(le)break;se+=re.decode(Q,{stream:!0});const ie=se.split(`
`);se=ie.pop()||"";for(const Ce of ie)if(Ce.startsWith("data: "))try{const ee=JSON.parse(Ce.slice(6));ee.token?K.value[v].content+=ee.token:ee.done?console.log("Stream done:",ee.session_id):ee.error&&(s.value=ee.error)}catch(ee){console.warn("SSE parse error:",ee)}}}catch(y){K.value[v].content||(K.value[v].content="网络错误: "+y.message)}q.value=!1}async function l(E){var A;s.value="",q.value=!0;const v={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};K.value.push({role:"user",content:v[E]||v.comprehensive});try{const j=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((A=b.value)==null?void 0:A.stock)||"",mode:E})});if(j.ok){const te=await j.json();K.value.push({role:"assistant",content:te.reply||"无回复"})}}catch(y){s.value="网络错误: "+y.message}q.value=!1}async function m(){g.value=!0,c.value=!1;try{const E=await fetch("/api/ai/chat/history?view=date");if(E.ok){const v=await E.json(),A=[];for(const y of v)for(const j of y.items||[])A.push(j);i.value=A}else c.value=!0}catch(E){console.error(E),c.value=!0}finally{g.value=!1}}async function J(E){try{await fetch("/api/ai/chat/history/"+E,{method:"DELETE"}),i.value=i.value.filter(v=>v.id!==E)}catch(v){console.error("deleteChatSession:",v)}}function N(E){if(!E)return"";const v=String(E).split(`
`),A=[],y=[];let j=0;for(;j<v.length;){if(/^\s*\|.*\|\s*$/.test(v[j])){let re=j;const se=[];for(;re<v.length&&/^\s*\|.*\|\s*$/.test(v[re]);)se.push(v[re]),re++;const le=Ce=>Ce.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map(ee=>ee.trim()),Q=se.map(le);if(Q.length>1&&Q[1].every(Ce=>/^:?-{3,}:?$/.test(Ce))){const Ce=Math.max(...Q.map(H=>H.length)),ee=Q[0].slice(0,Ce),X=Q.slice(2);let be="<table>";X.length?(be+="<thead><tr>"+ee.map(H=>"<th>"+H+"</th>").join("")+"</tr></thead>",be+="<tbody>"+X.map(H=>"<tr>"+H.slice(0,Ce).map(me=>"<td>"+me+"</td>").join("")+"</tr>").join("")+"</tbody>"):be+="<tbody><tr>"+ee.map(H=>"<td>"+H+"</td>").join("")+"</tr></tbody>",be+="</table>",A.push(be),y.push("\0T"+(A.length-1)+"\0"),j=re;continue}for(;j<re;)y.push(v[j]),j++;continue}y.push(v[j]),j++}let te=y.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return A.forEach((re,se)=>{te=te.split("\0T"+se+"\0").join(re)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(te=window.__quantModules.core.sanitizeHtml(te)),te}return{chatSessions:i,chatHistoryView:D,selectedChatIds:k,expandedChatDates:T,expandedChatMonths:C,expandedChatStocks:M,chatHistoryLoading:g,chatHistoryError:c,allChatSessionsFlat:P,chatGroupedByDate:x,chatGroupedByMonth:S,chatGroupedByStock:n,toggleSelectChat:p,toggleSelectChatDate:R,toggleSelectChatMonth:O,toggleSelectChatStock:f,toggleChatDateExpand:w,toggleChatMonthExpand:z,toggleChatStockExpand:F,selectAllChatSessions:V,deleteSelectedChatSessions:I,viewChatSession:W,loadChatHistory:m,deleteChatSession:J,renderMarkdown:N,stockChatInput:B,stockChatMessages:K,stockChatLoading:q,stockChatError:s,askStockSend:_,askStockQuick:l}}}})();(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantUndoCore=e()})(typeof self<"u"?self:void 0,function(){function a(){var e={},u=0;function t(o,i,g){if(typeof o!="function")return"";var c="undo-"+ ++u,D={fn:o,label:i||"",timer:null,active:!0};return e[c]=D,g&&g>0&&(D.timer=setTimeout(function(){d(c)},g)),c}function r(o){var i=e[o];if(!i||!i.active)return!1;i.timer&&clearTimeout(i.timer),delete e[o],i.active=!1;try{i.fn()}catch{}return!0}function d(o){var i=e[o];i&&(i.timer&&clearTimeout(i.timer),delete e[o],i.active=!1)}function b(){var o=0;for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&o++;return o}return{register:t,undo:r,remove:d,activeCount:b}}return{createUndoStack:a}});(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantFormMemory=e()})(typeof self<"u"?self:void 0,function(){function a(d,b,o){return"qc_fm_"+(d||"guest")+"_"+b+"_v"+(o||1)}function e(){return typeof localStorage<"u"&&localStorage?localStorage:null}function u(d,b,o,i){var g=e();if(!g||!d||b===void 0||b===null)return!1;try{return g.setItem(a(o,d,i),JSON.stringify(b)),!0}catch{return!1}}function t(d,b,o){var i=e();if(!i||!d)return null;try{var g=i.getItem(a(b,d,o));return g?JSON.parse(g):null}catch{return null}}function r(d,b,o){var i=e();if(!(!i||!d))try{i.removeItem(a(b,d,o))}catch{}}return{saveForm:u,loadForm:t,clearForm:r}});(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantSessionRestore=e()})(typeof self<"u"?self:void 0,function(){var a="qc_session_restore";function e(){return typeof sessionStorage<"u"&&sessionStorage?sessionStorage:null}function u(d){var b=e();if(!b||!d)return!1;try{return b.setItem(a,JSON.stringify(d)),!0}catch{return!1}}function t(){var d=e();if(!d)return null;try{var b=d.getItem(a);return b?JSON.parse(b):null}catch{return null}}function r(){var d=e();if(d)try{d.removeItem(a)}catch{}}return{save:u,restore:t,clear:r,KEY:a}});(function(){if(typeof window>"u")return;let a=null;function e(){try{return!!localStorage.getItem("qc_install_dismissed")}catch{return!1}}function u(){try{localStorage.setItem("qc_install_dismissed","1")}catch{}}function t(){if(!document.getElementById("qc-install-bar")){var r=document.createElement("div");r.id="qc-install-bar",r.className="qc-install-bar",r.setAttribute("role","status");var d=document.createElement("span");d.textContent="安装「量化日历」到桌面，随时查看行情与评估";var b=document.createElement("span");b.className="qc-install-actions";var o=document.createElement("button");o.className="qc-install-btn",o.type="button",o.textContent="安装";var i=document.createElement("button");i.className="qc-install-close",i.type="button",i.setAttribute("aria-label","关闭"),i.textContent="×",b.appendChild(o),b.appendChild(i),r.appendChild(d),r.appendChild(b),document.body.appendChild(r),o.addEventListener("click",function(){a&&(a.prompt(),a=null),r.remove()}),i.addEventListener("click",function(){u(),r.remove()})}}window.addEventListener("beforeinstallprompt",function(r){r.preventDefault(),a=r,e()||t()}),window.addEventListener("appinstalled",function(){a=null;var r=document.getElementById("qc-install-bar");r&&r.remove()})})();(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantBatchAdd=e()})(typeof self<"u"?self:void 0,function(){function a(u){var t=[];return(u||[]).forEach(function(r){if(r){var d=typeof r=="string"?r:r.code||"",b=typeof r=="object"&&r.name?String(r.name):"";d&&t.push(b&&b!==d?d+" "+b:d)}}),t.join(`
`)}function e(u){if(!u||u.success===!1)return{added:0,existed:0,invalid:0,total:0,failed:0,message:"批量加入失败"};var t=u.added||0,r=u.existed||0,d=u.invalid||0,b=u.total||0;return{added:t,existed:r,invalid:d,total:b,failed:d,message:"已加入 "+t+" 只"+(r?"，"+r+" 只已存在":"")+(d?"，"+d+" 行无效":"")}}return{buildImportText:a,summarize:e}});(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantContextMenu=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(b,o,i,g,c,D,k){var T=k??a,C=b,M=o;return C+i>c-T&&(C=Math.max(T,c-T-i)),M+g>D-T&&(M=Math.max(T,D-T-g)),{left:Math.round(C),top:Math.round(M)}}var u=[{key:"detail",label:"查看详情"},{key:"add-watch",label:"加入自选"},{key:"copy",label:"复制代码"},{key:"export",label:"导出"},{key:"delete",label:"删除"}];function t(){return u.map(function(b){return{key:b.key,label:b.label}})}function r(b){var o=b||"";return o?u.filter(function(i){return i.key==="add-watch"?o!=="watchlist":i.key==="delete"?o==="watchlist":!0}).map(function(i){return{key:i.key,label:i.label}}):t()}function d(b,o,i){var g=i??500;return!b||!o?!1:o-b>=g}return{positionMenu:e,getActions:t,getActionsFor:r,isLongPress:d}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,inject:e,onMounted:u,onBeforeUnmount:t}=Vue,r=window.QuantContextMenu;window.__quantComponents=window.__quantComponents||{};function d(o){let i=o;for(;i&&i!==document.body;){if(i.hasAttribute&&(i.hasAttribute("data-ctx-code")||i.hasAttribute("data-copy-code")))return i;i=i.parentElement}return null}function b(o){return{code:o.getAttribute("data-ctx-code")||o.getAttribute("data-copy-code")||"",name:o.getAttribute("data-ctx-name")||"",context:o.getAttribute("data-ctx-context")||""}}window.__quantComponents.ContextMenu={name:"qc-context-menu",template:`
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
    `,setup(){const o=e("qcState"),i=a(!1),g=a({left:0,top:0}),c=a(r?r.getActions():[]),D=a({});function k(){i.value=!1}function T(f,w,z){if(D.value=z||{},c.value=r&&r.getActionsFor?r.getActionsFor(D.value.context):r?r.getActions():[],r){const F=window.innerWidth||document.documentElement.clientWidth,V=window.innerHeight||document.documentElement.clientHeight,I=180,$=c.value.length*32+12;g.value=r.positionMenu(f,w,I,$,F,V)}else g.value={left:f,top:w};i.value=!0}function C(f){k(),window.dispatchEvent(new CustomEvent("qc:context-action",{detail:{action:f.key,payload:D.value}}))}function M(f){const w=f&&f.detail||{},z=w.payload||{},F=z.code;if(!F||!o)return;const V=window.ElementPlus&&window.ElementPlus.ElMessage;w.action==="detail"?o.showStockDetail(F,z.name):w.action==="add-watch"?o.addToWatchlist(F,z.name):w.action==="delete"?o.removeFromWatchlist(F):w.action==="copy"?navigator.clipboard&&navigator.clipboard.writeText&&(navigator.clipboard.writeText(F),V&&V.success("已复制 "+F)):w.action==="export"&&o.exportCSV()}function P(f){const w=d(f.target);w&&(f.preventDefault(),T(f.clientX,f.clientY,b(w)))}let x=null,S=0;function n(f){const w=d(f.target);w&&(S=Date.now(),x=setTimeout(function(){if(r&&r.isLongPress(S,Date.now(),500)){navigator.vibrate&&navigator.vibrate(10);const z=f.touches&&f.touches[0];T(z?z.clientX:0,z?z.clientY:0,b(w))}},520))}function p(){x&&(clearTimeout(x),x=null)}function R(f){if(f.key==="Escape"){k();return}if(f.shiftKey&&f.key==="F10"){const w=d(document.activeElement);if(w){f.preventDefault();const z=w.getBoundingClientRect();T(z.left+z.width/2,z.bottom,b(w))}}}function O(f){i.value&&!(f.target&&f.target.closest&&f.target.closest(".qc-ctx"))&&k()}return u(function(){document.addEventListener("contextmenu",P,!0),document.addEventListener("touchstart",n,{passive:!0}),document.addEventListener("touchend",p,!0),document.addEventListener("keydown",R,!0),document.addEventListener("mousedown",O,!0),window.addEventListener("qc:context-action",M)}),t(function(){document.removeEventListener("contextmenu",P,!0),document.removeEventListener("touchstart",n,!0),document.removeEventListener("touchend",p,!0),document.removeEventListener("keydown",R,!0),document.removeEventListener("mousedown",O,!0),window.removeEventListener("qc:context-action",M)}),{visible:i,pos:g,actions:c,run:C}}}})();(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantRequestCore=e()})(typeof self<"u"?self:void 0,function(){function a(){var e=0,u={};function t(i){var g=++e;if(i&&u[i])return{deduped:!0,id:u[i].seq,controller:u[i].controller};var c=typeof AbortController<"u"?new AbortController:null;return u[i]={seq:g,controller:c},{deduped:!1,id:g,controller:c}}function r(i,g){var c=u[i];return!c||c.seq!==g}function d(i){var g=u[i];if(g&&g.controller)try{g.controller.abort()}catch{}}function b(i,g){var c=u[i];c&&c.seq===g&&delete u[i]}function o(){var i=0;for(var g in u)Object.prototype.hasOwnProperty.call(u,g)&&i++;return i}return{begin:t,isStale:r,abort:d,finish:b,activeCount:o}}return{createRequestGuard:a}});(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantStateRegistry=e()})(typeof self<"u"?self:void 0,function(){function a(){var e=Object.create(null),u=Object.create(null);function t(k,T){if(!k||typeof k!="string")throw new Error("domain name required");if(e[k])throw new Error("duplicate domain: "+k);for(var C=Array.isArray(T)?T:[],M=0;M<C.length;M++){var P=C[M];if(u[P]&&u[P]!==k)throw new Error("duplicate key across domains: "+P);u[P]=k}return e[k]={keys:C.slice(),refs:Object.create(null)},!0}function r(k,T,C){var M=e[k];if(!M)throw new Error("unknown domain: "+k);if(M.keys.indexOf(T)===-1)throw new Error("key not declared in domain: "+k+"."+T);return M.refs[T]=C,!0}function d(k,T){var C=e[k];return!!C&&T in C.refs}function b(k,T){var C=e[k];if(C){var M=C.refs[T];return M&&typeof M=="object"&&"value"in M?M.value:M}}function o(k){var T=e[k];if(!T)return null;for(var C={},M=0;M<T.keys.length;M++){var P=T.keys[M],x=T.refs[P];C[P]=x&&typeof x=="object"&&"value"in x?x.value:x}return C}function i(k,T){var C=e[k];if(!C||!T)return!1;for(var M=0;M<C.keys.length;M++){var P=C.keys[M];if(P in T){var x=C.refs[P];x&&typeof x=="object"&&"value"in x&&(x.value=T[P])}}return!0}function g(){return Object.keys(e)}function c(k){var T=e[k];return T?T.keys.slice():[]}function D(){for(var k=0,T=Object.keys(e),C=0;C<T.length;C++)k+=Object.keys(e[T[C]].refs).length;return k}return{defineDomain:t,attach:r,has:d,get:b,snapshot:o,restore:i,domains:g,keys:c,attachedCount:D}}return{createStateRegistry:a}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:e,computed:u,watch:t}=Vue,{consensus:r,currentPage:d,currentSubPage:b,dashboardData:o,searchKeyword:i,statusFilter:g,strategyFilter:c,strategyFilterCounts:D}=a;function k(z){const F=c.value.selected;if(!F||F.length===0)return z;const V=c.value.mode;return z.filter(I=>{const $=I.strategy_names||I.strategies||[];return V==="union"?F.some(W=>$.includes(W)):F.every(W=>$.includes(W))})}const T=u(()=>{const z=k(r.value||[]);return{all:z.length,newCount:z.filter(F=>F.status==="new").length,current:z.filter(F=>F.status==="current").length,out:z.filter(F=>F.status==="out").length}}),C=u(()=>{let z=r.value||[];if(g.value!=="all"&&(z=z.filter(F=>F.status===g.value)),z=k(z),i.value){const F=i.value.toLowerCase();z=z.filter(V=>V.code.toLowerCase().includes(F)||V.name&&V.name.toLowerCase().includes(F))}return z}),M=u(()=>{const z=r.value||[],F={},V={};for(const I of z)I.code&&I.name&&(V[I.code]=I.name);for(const I of z){const $=I.strategy_names||I.strategies||[];for(const W of $)F[W]||(F[W]={strategy:W,count:0,codes:[],names:[]}),F[W].count++,F[W].codes.includes(I.code)||(F[W].codes.push(I.code),F[W].names.push({code:I.code,name:V[I.code]||I.code}))}return Object.values(F).sort((I,$)=>$.count-I.count)}),P=u(()=>{const z=c.value.selected,F=c.value.mode,V={};for(const[I,$]of Object.entries(D.value)){const W=$||[];!z||z.length===0?V[I]=W.length:F==="union"?V[I]=W.filter(B=>B.strategies&&z.some(K=>B.strategies.includes(K))).length:V[I]=W.filter(B=>B.strategies&&z.every(K=>B.strategies.includes(K))).length}return V});function x(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(c.value.selected)),localStorage.setItem("quant_strategy_filter_mode",c.value.mode)}const S=u(()=>{const z=(o.value||{}).consensus_rank||[];return k(z)}),n=u(()=>{const z=r.value||D.value.day||[];return k(z).length}),p=u(()=>{const z=(o.value||{}).strategy_counts||[],F=r.value||D.value.day||[];if(F.length===0)return z;const V=k(F),I={};V.forEach(W=>{(W.strategy_names||W.strategies||[]).forEach(K=>{I[K]=(I[K]||0)+1})});const $=V.length||1;return z.map(W=>{const B=W.strategy_name||W.strategy_id,K=I[B]||0;return{...W,count:K,percentage:Math.round(K/$*1e3)/10}})}),R=u(()=>{const z=(o.value||{}).pool_changes||{},F=(z.new_count||0)-(z.out_count||0);return F>0?{dir:"up",text:"↑"+F}:F<0?{dir:"down",text:"↓"+Math.abs(F)}:{dir:"flat",text:"→0"}}),O=u(()=>{const z=(o.value||{}).time_coverage||{},F=new Date(z.start_date),V=new Date(z.end_date),I=new Date;if(!F.getTime()||!V.getTime()||I>=V)return 100;if(I<=F)return 0;const $=V-F,W=I-F;return Math.round(W/$*100)}),f=e(null);function w(z){c.value.selected=[z],c.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([z])),localStorage.setItem("quant_strategy_filter_mode","union"),d.value="calendar",b.value="calendar"}return{applyStrategyFilter:k,statusCounts:T,stockPool:C,strategyDistribution:M,strategyPreviewCount:P,saveStrategyFilter:x,filteredConsensusRank:S,currentPoolSize:n,filteredStrategyCounts:p,poolChangeBadge:R,timeBarPercent:O,lastRefreshTime:f,navigateToStrategyFilter:w}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.history={create:function(a){const{ref:e,computed:u,watch:t,currentUser:r,selectedDate:d,stockDetail:b,stockDetailTab:o,stockDetailVisible:i,stockDetailLoading:g,stockKlineLoaded:c,viewCache:D,animateScoreEntrance:k,loadStockKline:T,refreshStockScore:C,disposeStockKline:M,aiHistory:P,aiLoading:x,aiEvalStage:S,aiEvalElapsed:n,aiEvalError:p,aiResult:R,loadLastEvaluation:O,autoEvaluateConfig:f,autoEvaluateScope:w,batchStocks:z,batchRunning:F,batchTotal:V,batchCompleted:I,batchCurrent:$,batchStatuses:W,batchResults:B,batchEvalErrors:K,expandedDates:q,expandedStocks:s,savingConfig:_,selectedHistoryIds:l,selectedWatchlistCodes:m,showAutoEvaluateSettings:J,showBatchEvaluate:N,getCSSVar:E,quickEvalStock:v,evalStrategy:A,watchlistSort:y,watchlist:j,watchlistCodes:te,aiHistoryLoading:re,aiHistoryError:se,sortedWatchlist:le,getWatchlistScore:Q,getLatestScore:ie,addSearchResult:Ce,evaluatedCodes:ee,klineLoadedCodes:X,markKlineLoaded:be,watchlistSearch:H,watchlistResults:me,watchlistSearching:ue,dataRefreshConfig:Z,dataRefreshReloading:de,dataRefreshSaving:Ee,levelVar:we,levelBgVar:Ne,undoStack:Ye,showUndoMessage:pe,addToWatchlist:oe,removeFromWatchlist:ke}=a;async function He(){if(!b.value)return;x.value=!0,R.value=null,p.value="",S.value="fetching",n.value=0;const Pe=Date.now(),qe=setInterval(()=>{x.value&&(n.value=Math.round((Date.now()-Pe)/1e3))},500);try{const he=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:b.value.stock,stock_name:b.value.name||b.value.stock,strategy:A.value})});S.value="calculating";const Ve=await he.json();S.value="analyzing",Ve.success?(await nextTick(),R.value=Ve.data,o.value="ai",Ae()):(p.value=Ve.message||"评估失败",ElementPlus.ElMessage.error(p.value))}catch(he){p.value=he&&he.message&&!String(he.message).includes("Failed to fetch")?he.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(p.value)}finally{clearInterval(qe),x.value=!1,n.value=0,p.value?S.value="":(S.value="done",setTimeout(()=>{S.value==="done"&&(S.value="")},800))}}const Oe=50,$e=e(0),ge=e(!1),Se=u(()=>P.value.length<$e.value);async function Ae(){re.value=!0,se.value=!1;try{if(!localStorage.getItem("quant_token")){P.value=[];return}const qe=await fetch(`/api/ai/history?limit=${Oe}&offset=0`);if(qe.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),r.value=null;return}const he=await qe.json();he.success?(P.value=he.data||[],$e.value=he.total!=null?he.total:P.value.length):se.value=!0}catch(Pe){console.error("[loadAiHistory] error:",Pe),se.value=!0}finally{re.value=!1}}async function ze(){if(!(ge.value||!Se.value)){ge.value=!0;try{const qe=await(await fetch(`/api/ai/history?limit=${Oe}&offset=${P.value.length}`)).json();if(qe.success&&Array.isArray(qe.data)){const he=new Set(P.value.map(Fe=>Fe.id)),Ve=qe.data.filter(Fe=>!he.has(Fe.id));P.value=P.value.concat(Ve),qe.total!=null&&($e.value=qe.total)}}catch(Pe){console.warn("[loadMoreAiHistory] error:",Pe)}finally{ge.value=!1}}}async function Je(Pe){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const he=await(await fetch(`/api/ai/history/${Pe}`,{method:"DELETE"})).json();if(he.success){ElementPlus.ElMessage.success("删除成功"),Ae();const Ve=l.value.indexOf(Pe);Ve>=0&&l.value.splice(Ve,1)}else ElementPlus.ElMessage.error(he.message||"删除失败")}catch{}}function Qe(Pe){const qe=l.value.indexOf(Pe);qe>=0?l.value.splice(qe,1):l.value.push(Pe)}function Ge(){l.value=[]}function et(){m.value=[]}async function tt(){const Pe=l.value;if(Pe.length===0)return;const qe=P.value.filter(he=>Pe.includes(he.id)).map(he=>he.stock_code);N.value=!0,z.value=[...new Set(qe)].join(",")}async function ht(){const Pe=l.value;if(Pe.length===0)return;const qe=P.value.filter(Fe=>Pe.includes(Fe.id)),he=[...new Map(qe.map(Fe=>[Fe.stock_code,Fe])).values()];let Ve=0;for(const Fe of he)te.value.has(Fe.stock_code)||(await oe(Fe.stock_code,Fe.stock_name||Fe.stock_code),Ve++);Ve>0?ElementPlus.ElMessage.success(`已加入 ${Ve} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function ve(){const Pe=l.value;if(Pe.length===0)return;const qe=P.value.filter(Ve=>Pe.includes(Ve.id)),he=[...new Map(qe.map(Ve=>[Ve.stock_code,Ve])).values()];try{const Fe=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:he.map(lt=>({stock_code:lt.stock_code,stock_name:lt.stock_name||""}))})})).json();Fe&&Fe.success?ElementPlus.ElMessage.success(`已登记 ${Fe.count||he.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(Fe&&Fe.detail||"批量加入组合失败")}catch(Ve){console.warn("batchAddToPortfolio failed:",Ve),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function _e(){if(m.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${m.value.length} 只股票？`,"提示",{type:"warning"});for(const Pe of m.value)await ke(Pe);m.value=[],ElementPlus.ElMessage.success("已移除")}catch(Pe){Pe&&Pe.message!=="cancel"&&console.warn("batchRemoveWatchlist:",Pe)}}function Le(Pe){const qe=m.value.indexOf(Pe);qe>=0?m.value.splice(qe,1):m.value.push(Pe)}function h(){l.value.length===P.value.length?l.value=[]:l.value=P.value.map(Pe=>Pe.id)}function L(){m.value.length===j.value.length?m.value=[]:m.value=j.value.map(Pe=>Pe.code)}async function Y(){if(l.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${l.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const qe=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:l.value})})).json();qe.success?(ElementPlus.ElMessage.success(qe.message),l.value=[],Ae()):ElementPlus.ElMessage.error(qe.message||"删除失败")}catch{}}async function ce(){try{const qe=await(await fetch("/api/ai/auto-config")).json();qe.success&&(f.value=qe.data,qe.data.evaluate_scope&&(w.value=qe.data.evaluate_scope))}catch(Pe){console.warn("loadAutoEvaluateConfig failed:",Pe)}}async function xe(){_.value=!0;try{f.value.evaluate_scope=w.value;const qe=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f.value)})).json();qe.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),J.value=!1):ElementPlus.ElMessage.error(qe.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{_.value=!1}}return{doAiEvaluate:He,aiHistoryTotal:$e,aiHistoryLoadingMore:ge,hasMoreAiHistory:Se,loadAiHistory:Ae,loadMoreAiHistory:ze,deleteSingleHistory:Je,toggleSelectHistory:Qe,clearSelection:Ge,clearWatchlistSelection:et,batchReevaluateHistory:tt,batchAddToWatchlist:ht,batchAddToPortfolio:ve,batchRemoveWatchlist:_e,toggleSelectWatchlist:Le,selectAllHistory:h,selectAllWatchlist:L,deleteSelectedHistory:Y,loadAutoEvaluateConfig:ce,saveAutoEvaluateConfig:xe}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.list={create:function(a){const{ref:e,computed:u,watch:t,currentUser:r,selectedDate:d,stockDetail:b,stockDetailTab:o,stockDetailVisible:i,stockDetailLoading:g,stockKlineLoaded:c,viewCache:D,animateScoreEntrance:k,loadStockKline:T,refreshStockScore:C,disposeStockKline:M,aiHistory:P,aiLoading:x,aiEvalStage:S,aiEvalElapsed:n,aiEvalError:p,aiResult:R,loadLastEvaluation:O,autoEvaluateConfig:f,autoEvaluateScope:w,batchStocks:z,batchRunning:F,batchTotal:V,batchCompleted:I,batchCurrent:$,batchStatuses:W,batchResults:B,batchEvalErrors:K,expandedDates:q,expandedStocks:s,savingConfig:_,selectedHistoryIds:l,selectedWatchlistCodes:m,showAutoEvaluateSettings:J,showBatchEvaluate:N,getCSSVar:E,quickEvalStock:v,evalStrategy:A,watchlistSort:y,watchlist:j,watchlistCodes:te,aiHistoryLoading:re,aiHistoryError:se,sortedWatchlist:le,getWatchlistScore:Q,getLatestScore:ie,addSearchResult:Ce,evaluatedCodes:ee,klineLoadedCodes:X,markKlineLoaded:be,watchlistSearch:H,watchlistResults:me,watchlistSearching:ue,dataRefreshConfig:Z,dataRefreshReloading:de,dataRefreshSaving:Ee,levelVar:we,levelBgVar:Ne,undoStack:Ye,showUndoMessage:pe,loadAiHistory:oe}=a,ke=e(!1);async function He(){ke.value=!0;try{const Y=await(await fetch("/api/watchlist")).json();Y.success&&(j.value=Y.stocks||[])}catch(L){console.warn("loadWatchlist failed:",L)}finally{ke.value=!1}}async function Oe(L,Y){try{const xe=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:L,name:Y})})).json();if(xe.success)return xe.existed||j.value.push({code:L,name:Y,added_at:new Date().toISOString()}),!0}catch(ce){console.warn("addToWatchlist failed:",ce)}return!1}async function $e(L){try{const Y=j.value.find(xe=>xe.code===L),ce=Y&&Y.name||"";if(await fetch(`/api/watchlist/${encodeURIComponent(L)}`,{method:"DELETE"}),j.value=j.value.filter(xe=>xe.code!==L),te.value&&te.value.delete&&te.value.delete(L),Ye){const xe=Ye.register(()=>{Oe(L,ce)},"移除自选",5e3);pe("已移除自选",xe)}else ElementPlus.ElMessage.info("已移除自选")}catch(Y){console.warn("removeFromWatchlist failed:",Y)}}async function ge(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"});const L=j.value.slice();if(await fetch("/api/watchlist",{method:"DELETE"}),j.value=[],te.value&&te.value.clear&&te.value.clear(),ElementPlus.ElMessage.success("自选已清空"),Ye&&L.length){const Y=Ye.register(()=>{L.forEach(ce=>Oe(ce.code,ce.name||""))},"清空自选",5e3);pe("自选已清空",Y)}}catch(L){console.warn("clearWatchlist failed:",L)}}async function Se(L,Y){te.value.has(L)?(await $e(L),ElementPlus.ElMessage.info("已移除自选")):await Oe(L,Y)&&ElementPlus.ElMessage.success("已加入自选")}async function Ae(L,Y){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(L,Y||"");const ce=new Date().toISOString().split("T")[0],xe=d.value||ce;o.value="kline",R.value=null,p.value="",M("stockKlineChart"),b.value=null,g.value=!0,c.value=!1,i.value=!0,nextTick(()=>k());try{const Pe=await fetch(`/api/calendar/stock/${encodeURIComponent(L)}?date=${xe}`);b.value=await Pe.json()}catch{b.value={stock:L,name:Y,total_days:0}}finally{g.value=!1}await nextTick(),await T("daily"),C(),O(L)}const ze=e(!1);async function Je(){var L;if(j.value.length!==0){ze.value=!0;try{const ce=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ce.success&&ce.loaded>0?(((L=ce.details)==null?void 0:L.loaded)||[]).forEach(xe=>X.value.add(xe.code)):ce.loaded===0&&ce.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(Y){console.error("预加载K线失败:",Y)}finally{ze.value=!1}}}async function Qe(L,Y){x.value=!0,R.value=null,p.value="",S.value="fetching",c.value=!1,M();const ce=new Date().toISOString().split("T")[0],xe=d.value||ce;try{const Pe=await fetch(`/api/calendar/stock/${encodeURIComponent(L)}?date=${xe}`);b.value=await Pe.json()}catch{b.value={stock:L,name:Y,total_days:0}}o.value="ai",i.value=!0,await nextTick();try{const qe=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:L,stock_name:Y})})).json();qe.success?(R.value=qe.data,oe()):(p.value=qe.message||"评估失败",ElementPlus.ElMessage.error(p.value))}catch{p.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(p.value)}finally{x.value=!1,S.value=""}}async function Ge(){j.value.length!==0&&(N.value=!0,z.value=j.value.map(L=>L.code).join(","))}async function et(){m.value.length!==0&&(N.value=!0,z.value=m.value.join(","))}async function tt(){if(!H.value.trim()){me.value=[];return}ue.value=!0;try{const Y=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(H.value)}`)).json();me.value=(Y.results||[]).filter(ce=>!te.value.has(ce.code))}catch(L){console.warn("searchStockForWatchlist failed:",L)}finally{ue.value=!1}}async function ht(){try{const Y=await(await fetch("/api/data-refresh/config")).json();Z.value=Y}catch(L){console.error("加载数据刷新配置失败:",L)}}async function ve(){Ee.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Z.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{Ee.value=!1}}async function _e(){var L;de.value=!0;try{const ce=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();ce.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((L=ce.parser_stats)==null?void 0:L.dates_count)||0}交易日`),D.clear(),await ht()):ElementPlus.ElMessage.error(ce.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{de.value=!1}}const Le=e(!1);async function h(){Le.value=!0;try{const Y=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(Y.success){const ce=Y.result||{},xe=Y.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${ce.pulled||0}/${ce.total||0}, 财务 ${xe.pulled||0}/${xe.total||0}`),D.clear(),await ht()}else ElementPlus.ElMessage.error(Y.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{Le.value=!1}}return{watchlistLoading:ke,loadWatchlist:He,addToWatchlist:Oe,removeFromWatchlist:$e,clearWatchlist:ge,toggleWatchlist:Se,showStockKline:Ae,preloadingKline:ze,preloadWatchlistKline:Je,watchlistEvaluate:Qe,batchEvaluateWatchlist:Ge,batchEvaluateSelected:et,searchStockForWatchlist:tt,loadDataRefreshConfig:ht,saveDataRefreshConfig:ve,triggerDataReload:_e,dataPullRunning:Le,triggerDataPull:h}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.analytics={create:function(a){const{ref:e,computed:u,watch:t,currentUser:r,selectedDate:d,stockDetail:b,stockDetailTab:o,stockDetailVisible:i,stockDetailLoading:g,stockKlineLoaded:c,viewCache:D,animateScoreEntrance:k,loadStockKline:T,refreshStockScore:C,disposeStockKline:M,aiHistory:P,aiLoading:x,aiEvalStage:S,aiEvalElapsed:n,aiEvalError:p,aiResult:R,loadLastEvaluation:O,autoEvaluateConfig:f,autoEvaluateScope:w,batchStocks:z,batchRunning:F,batchTotal:V,batchCompleted:I,batchCurrent:$,batchStatuses:W,batchResults:B,batchEvalErrors:K,expandedDates:q,expandedStocks:s,savingConfig:_,selectedHistoryIds:l,selectedWatchlistCodes:m,showAutoEvaluateSettings:J,showBatchEvaluate:N,getCSSVar:E,quickEvalStock:v,evalStrategy:A,watchlistSort:y,watchlist:j,watchlistCodes:te,aiHistoryLoading:re,aiHistoryError:se,sortedWatchlist:le,getWatchlistScore:Q,getLatestScore:ie,addSearchResult:Ce,evaluatedCodes:ee,klineLoadedCodes:X,markKlineLoaded:be,watchlistSearch:H,watchlistResults:me,watchlistSearching:ue,dataRefreshConfig:Z,dataRefreshReloading:de,dataRefreshSaving:Ee,levelVar:we,levelBgVar:Ne,undoStack:Ye,showUndoMessage:pe,loadAiHistory:oe}=a,ke=u(()=>{const h={};for(const L of P.value){const Y=(L.evaluate_time||"").split("T")[0];h[Y]||(h[Y]=[]),h[Y].push(L)}for(const L in h)h[L].sort((Y,ce)=>ce.evaluate_time.localeCompare(Y.evaluate_time));return h}),He=u(()=>{const h={};for(const L of P.value){const Y=L.stock_code;h[Y]||(h[Y]=[]),h[Y].push(L)}for(const L in h)h[L].sort((Y,ce)=>ce.evaluate_time.localeCompare(Y.evaluate_time));return h}),Oe=u(()=>{const h={};for(const L of P.value){const Y=(L.evaluate_time||"").split("T")[0].slice(0,7);h[Y]||(h[Y]=[]),h[Y].push(L)}for(const L in h)h[L].sort((Y,ce)=>ce.evaluate_time.localeCompare(Y.evaluate_time));return h}),$e=u(()=>Object.keys(He.value).length),ge=u(()=>{const h=P.value.length;return h===0?[]:[{label:"90+",min:90,max:100,color:"var(--bar-fill-ok)"},{label:"80-89",min:80,max:89,color:"var(--bar-fill-ok)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--state-success-solid) 42%, var(--surface-card))"},{label:"60-69",min:60,max:69,color:"var(--bar-fill-warn)"},{label:"<60",min:0,max:59,color:"var(--bar-fill-bad)"}].map(Y=>{const ce=P.value.filter(xe=>xe.result.total_score>=Y.min&&xe.result.total_score<=Y.max).length;return{...Y,count:ce,pct:Math.round(ce/h*100)}})});async function Se(){if(!v.value)return;const h=j.value.find(L=>L.code===v.value);if(h){x.value=!0,R.value=null,p.value="",S.value="fetching";try{b.value={stock:h.code,name:h.name,total_days:0},i.value=!0,o.value="ai",await nextTick();const Y=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:h.code,stock_name:h.name,strategy:A.value})})).json();Y.success?(R.value=Y.data,oe(),v.value=""):(p.value=Y.message||"评估失败",ElementPlus.ElMessage.error(p.value))}catch{p.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(p.value)}finally{x.value=!1,S.value=""}}}function Ae(h){const L=q.value.indexOf(h);L>=0?q.value.splice(L,1):q.value.push(h)}function ze(h){const Y=(ke.value[h]||[]).map(xe=>xe.id);Y.every(xe=>l.value.includes(xe))?l.value=l.value.filter(xe=>!Y.includes(xe)):Y.forEach(xe=>{l.value.includes(xe)||l.value.push(xe)})}function Je(h){const Y=(Oe.value[h]||[]).map(xe=>xe.id);Y.every(xe=>l.value.includes(xe))?l.value=l.value.filter(xe=>!Y.includes(xe)):Y.forEach(xe=>{l.value.includes(xe)||l.value.push(xe)})}function Qe(h){const L=s.value.indexOf(h);L>=0?s.value.splice(L,1):s.value.push(h)}function Ge(h){const Y=(He.value[h]||[]).map(xe=>xe.id);Y.every(xe=>l.value.includes(xe))?l.value=l.value.filter(xe=>!Y.includes(xe)):Y.forEach(xe=>{l.value.includes(xe)||l.value.push(xe)})}const et={},tt={};function ht(h,L,Y){if(!h||(Y&&(tt[L]={el:h,records:Y}),et[L]===h))return;const ce=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,xe=()=>{Object.keys(et).forEach(Ue=>{if(et[Ue]&&et[Ue]!==h){try{et[Ue].dispose()}catch{}delete et[Ue]}});const Pe=[...Y].sort((Ue,ft)=>Ue.evaluate_time.localeCompare(ft.evaluate_time)),qe=Pe.map(Ue=>(Ue.evaluate_time||"").split("T")[0]),he=Pe.map(Ue=>{var ft;return((ft=Ue.result)==null?void 0:ft.total_score)??null}),Ve=Pe.map(Ue=>{var ft;return((ft=Ue.result)==null?void 0:ft.level)??""}),Fe={primary:E("--qc-primary-600")||"#b8922a",textPrimary:E("--text-primary")||"#1f2937",textSecondary:E("--text-secondary")||"#6b7280",border:E("--chart-axis")||"#b9b2a6",axis:E("--chart-axis")||"#b9b2a6",split:E("--chart-split")||"#e7e1d6",up:E("--qc-market-up")||"#e63946",down:E("--qc-market-down")||"#2e7d32"},lt=[];for(let Ue=1;Ue<he.length;Ue++)he[Ue]!=null&&he[Ue-1]!=null&&Math.abs(he[Ue]-he[Ue-1])>=15&&lt.push({name:"大幅变化",coord:[qe[Ue],he[Ue]],value:(he[Ue]-he[Ue-1]>0?"↑":"↓")+Math.abs(he[Ue]-he[Ue-1]),symbol:"pin",symbolSize:32,itemStyle:{color:he[Ue]-he[Ue-1]>0?Fe.up:Fe.down}});const at=echarts.init(h),Ze=window.__quantModules&&window.__quantModules.echartsTheme;Ze&&typeof Ze.getEChartsTheme=="function"&&at.setOption(Ze.getEChartsTheme()),at.setOption({tooltip:{trigger:"axis",backgroundColor:E("--bg-card")||"#ffffff",borderColor:Fe.border,textStyle:{color:Fe.textPrimary},formatter:function(Ue){var ne;const ft=(ne=Ue[0])==null?void 0:ne.dataIndex,ae=ft!=null?Ve[ft]:"";return qe[ft]+"<br/>得分: "+he[ft]+(ae?" ("+ae+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:qe,axisLabel:{fontSize:10,rotate:30,color:Fe.textSecondary},axisLine:{lineStyle:{color:Fe.axis}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:Fe.textSecondary},splitLine:{lineStyle:{color:Fe.split}}},series:[{data:he,type:"line",smooth:!0,lineStyle:{color:Fe.primary,width:2},itemStyle:{color:Fe.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:E("--primary-rgb")?"rgba("+E("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:E("--primary-rgb")?"rgba("+E("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:lt.length>0?{data:lt}:void 0}]}),et[L]=at};ce?ce().then(xe).catch(()=>{}):xe()}function ve(){Object.keys(tt).forEach(h=>{const L=tt[h];if(!(!L||!L.el)){if(et[h]){try{et[h].dispose()}catch{}delete et[h]}ht(L.el,h,L.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(ve));async function _e(h){R.value=h,c.value=!1,M();try{const L=await fetch(`/api/calendar/stock/${h.stock_code}?date=${d.value}`);b.value=await L.json()}catch{b.value={stock:h.stock_code,name:h.stock_name||h.stock_code,total_days:0,history:[]}}i.value=!0,o.value="ai"}async function Le(){if(!z.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const h=z.value.split(/[,，\s]+/).filter(qe=>qe.trim());if(h.length===0)return;F.value=!0,V.value=h.length,I.value=0,$.value="",W.value={},B.value={},K.value={},h.forEach(qe=>{W.value[qe]="pending",B.value[qe]=null});const L={"Content-Type":"application/json"};let Y=0,ce=0,xe=!1;try{const qe=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:L,body:JSON.stringify({stock_codes:h})});if(qe.ok&&qe.body){xe=!0;const he=qe.body.getReader(),Ve=new TextDecoder("utf-8");let Fe="",lt=!1;for(;!lt;){const{value:at,done:Ze}=await he.read();lt=Ze,Fe+=Ve.decode(at||new Uint8Array,{stream:!lt});let Ue;for(;(Ue=Fe.indexOf(`

`))>=0;){const ft=Fe.slice(0,Ue);Fe=Fe.slice(Ue+2);const ae=ft.split(`
`).find(Xe=>Xe.startsWith("data: "));if(!ae)continue;let ne;try{ne=JSON.parse(ae.slice(6))}catch{continue}ne.type==="start"?ne.total&&(V.value=ne.total):ne.type==="item"?(I.value++,$.value=ne.stock_code,ne.success?(W.value[ne.stock_code]="success",B.value[ne.stock_code]=ne,Y++):(W.value[ne.stock_code]="error",K.value[ne.stock_code]=ne.error||"评估失败",ce++)):ne.type==="done"&&(typeof ne.success=="number"&&(Y=ne.success),typeof ne.fail=="number"&&(ce=ne.fail))}}if(Fe.trim()){const at=Fe.split(`
`).find(Ze=>Ze.startsWith("data: "));if(at)try{const Ze=JSON.parse(at.slice(6));Ze.type==="item"?(I.value++,$.value=Ze.stock_code,Ze.success?(W.value[Ze.stock_code]="success",B.value[Ze.stock_code]=Ze,Y++):(W.value[Ze.stock_code]="error",K.value[Ze.stock_code]=Ze.error||"评估失败",ce++)):Ze.type==="done"&&(typeof Ze.success=="number"&&(Y=Ze.success),typeof Ze.fail=="number"&&(ce=Ze.fail))}catch{}}}}catch{xe=!1}if(!xe){Y=0,ce=0,I.value=0;for(const qe of h){$.value=qe,W.value[qe]="running";try{const Ve=await(await fetch("/api/ai/evaluate",{method:"POST",headers:L,body:JSON.stringify({stock_code:qe.trim(),stock_name:qe.trim()})})).json();Ve.success?(W.value[qe]="success",B.value[qe]=Ve.data,Y++):(W.value[qe]="error",K.value[qe]=Ve.message&&Ve.message!=="success"?Ve.message:"评估失败",ce++)}catch(he){W.value[qe]="error",K.value[qe]="网络错误: "+(he&&he.message?he.message:he),ce++}I.value++}}$.value="",await oe();const Pe=h.length;setTimeout(()=>{ce===0?ElementPlus.ElMessage.success(`评估完成 成功 ${Y}/${Pe}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${Y}/${Pe} · 失败 ${ce}`),F.value=!1},500)}return{groupedByDate:ke,aiHistoryByStock:He,groupedByMonth:Oe,aiHistoryStockCount:$e,scoreDistribution:ge,quickEvaluate:Se,toggleDateExpand:Ae,toggleSelectDate:ze,toggleSelectMonth:Je,toggleStockExpand:Qe,toggleSelectStock:Ge,registerTrendChart:ht,viewAiResult:_e,doBatchEvaluate:Le}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.realtime={create:function(a){const{ref:e,computed:u,watch:t,currentUser:r,selectedDate:d,stockDetail:b,stockDetailTab:o,stockDetailVisible:i,stockDetailLoading:g,stockKlineLoaded:c,viewCache:D,animateScoreEntrance:k,loadStockKline:T,refreshStockScore:C,disposeStockKline:M,aiHistory:P,aiLoading:x,aiEvalStage:S,aiEvalElapsed:n,aiEvalError:p,aiResult:R,loadLastEvaluation:O,autoEvaluateConfig:f,autoEvaluateScope:w,batchStocks:z,batchRunning:F,batchTotal:V,batchCompleted:I,batchCurrent:$,batchStatuses:W,batchResults:B,batchEvalErrors:K,expandedDates:q,expandedStocks:s,savingConfig:_,selectedHistoryIds:l,selectedWatchlistCodes:m,showAutoEvaluateSettings:J,showBatchEvaluate:N,getCSSVar:E,quickEvalStock:v,evalStrategy:A,watchlistSort:y,watchlist:j,watchlistCodes:te,aiHistoryLoading:re,aiHistoryError:se,sortedWatchlist:le,getWatchlistScore:Q,getLatestScore:ie,addSearchResult:Ce,evaluatedCodes:ee,klineLoadedCodes:X,markKlineLoaded:be,watchlistSearch:H,watchlistResults:me,watchlistSearching:ue,dataRefreshConfig:Z,dataRefreshReloading:de,dataRefreshSaving:Ee,levelVar:we,levelBgVar:Ne,undoStack:Ye,showUndoMessage:pe}=a,oe=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};oe.REALTIME_WS_PATH;const ke=oe.REALTIME_DEGRADED_TEXT||"数据不可达",He=oe.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";oe.WARN_RISE_SPEED_THRESHOLD!=null&&oe.WARN_RISE_SPEED_THRESHOLD,oe.WARN_VOLUME_RATIO_THRESHOLD!=null&&oe.WARN_VOLUME_RATIO_THRESHOLD;const Oe=oe.quoteFmt||{price:he=>he==null?"--":Number(he).toFixed(2),pct:he=>he==null?"--":Number(he).toFixed(2)+"%",num:he=>he==null?"--":Number(he).toFixed(2),color:he=>""},$e=3,ge=5e3,Se=e({}),Ae=e(!1),ze=e(""),Je=e("idle");function Qe(){try{window.dispatchEvent(new CustomEvent("qc:realtime",{detail:{state:Je.value,degraded:Ae.value,reason:ze.value}}))}catch{}}let Ge=null,et=null,tt=0;function ht(){return ze.value==="non_trading_hours"?"非交易时段，暂不推送":ze.value==="upstream_unreachable"?"上游数据源不可达":ke}function ve(he){return oe.checkQuoteWarning?oe.checkQuoteWarning(he):null}function _e(he){return ve(Se.value[he])}function Le(he){return Oe.color(Se.value[he])}function h(he){return Oe.price(Se.value[he]&&Se.value[he].price)}function L(he){return Oe.pct(Se.value[he]&&Se.value[he].change_pct)}function Y(he,Ve){return Oe.num(Se.value[he]&&Se.value[he][Ve])}function ce(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function xe(){if(!Ge||Ge.readyState!==1)return;const he=(j.value||[]).map(Ve=>Ve.code);he.length!==0&&Ge.send(JSON.stringify({subscribe:he}))}function Pe(){if(et&&(clearTimeout(et),et=null),Ge){try{Ge.onopen=null,Ge.onmessage=null,Ge.onerror=null,Ge.onclose=null,Ge.close()}catch{}Ge=null}Se.value={},Ae.value=!1,ze.value="",Je.value="idle"}function qe(){const he=ce();if(!he||!oe.buildRealtimeWsUrl||Je.value==="open"||Je.value==="connecting")return;let Ve;try{Ve=oe.buildRealtimeWsUrl()+"?token="+encodeURIComponent(he)}catch{Je.value="offline",Ae.value=!0,Qe();return}Je.value="connecting";let Fe=null;try{Fe=new WebSocket(Ve)}catch{Je.value="offline",Ae.value=!0,Qe();return}Ge=Fe,Fe.onopen=function(){Je.value="open",tt=0,Qe(),xe()},Fe.onmessage=function(lt){let at=null;try{at=JSON.parse(lt.data||"{}")}catch{return}if(!at||at.type!=="quotes")return;if(Ae.value=!!at.degraded,ze.value=at.reason||(at.degraded?"upstream_unreachable":""),Qe(),at.degraded||!Array.isArray(at.data)){Se.value={};return}const Ze={};at.data.forEach(function(Ue){Ue&&Ue.code&&(Ze[Ue.code]=Ue)}),Se.value=Ze},Fe.onerror=function(){Je.value="offline",Ae.value=!0,Qe()},Fe.onclose=function(){Je.value="offline",Qe(),tt<$e?(tt++,et=setTimeout(function(){Je.value!=="open"&&qe()},ge*tt)):Ae.value=!0}}return t(j,function(){Je.value==="open"&&xe()}),ce()&&setTimeout(qe,500),{REALTIME_DEGRADED_TEXT:ke,REALTIME_FALLBACK_TEXT:He,realtimeQuotes:Se,realtimeDegraded:Ae,realtimeDegradedReason:ze,realtimeWsState:Je,quoteWarningFor:_e,realtimeDegradedText:ht,realtimeQuoteColor:Le,realtimePriceText:h,realtimePctText:L,realtimeRatioText:Y,disconnectRealtimeQuotes:Pe,connectRealtimeQuotes:qe}}}})();(function(){window.__quantModules||(window.__quantModules={});const a={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},e={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function u(o){return a[o]||"var(--text-tertiary)"}function t(o){return e[o]||"var(--bg-hover)"}const r=window.QuantUndoCore,d=r?r.createUndoStack():null;function b(o,i){if(!d||!window.Vue||!window.Vue.h)return;const g=window.Vue.h;ElementPlus.ElMessage.success({message:g("span",null,[o,g("a",{style:"margin-left:8px;color:var(--primary-text);cursor:pointer;text-decoration:underline",onClick:()=>{d.undo(i)&&ElementPlus.ElMessage.success("已撤销")}},"撤销")]),duration:5e3})}window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.create=function(i){const{ref:g,computed:c,watch:D}=Vue,{currentUser:k,selectedDate:T,stockDetail:C,stockDetailTab:M,stockDetailVisible:P,stockDetailLoading:x,stockKlineLoaded:S,viewCache:n,animateScoreEntrance:p,loadStockKline:R,refreshStockScore:O,disposeStockKline:f,aiHistory:w,aiLoading:z,aiEvalStage:F,aiEvalElapsed:V,aiEvalError:I,aiResult:$,loadLastEvaluation:W,autoEvaluateConfig:B,autoEvaluateScope:K,batchStocks:q,batchRunning:s,batchTotal:_,batchCompleted:l,batchCurrent:m,batchStatuses:J,batchResults:N,batchEvalErrors:E,expandedDates:v,expandedStocks:A,savingConfig:y,selectedHistoryIds:j,selectedWatchlistCodes:te,showAutoEvaluateSettings:re,showBatchEvaluate:se}=i,le=ot=>(getComputedStyle(document.documentElement).getPropertyValue(ot)||"").trim(),Q=g(""),ie=g("default"),Ce=g("default"),ee=g([]),X=c(()=>new Set(ee.value.map(ot=>ot.code))),be=g(!1),H=g(!1),me=c(()=>{const ot=[...ee.value];return Ce.value==="name"?ot.sort((xt,Rt)=>xt.name.localeCompare(Rt.name,"zh")):Ce.value==="added"?ot.sort((xt,Rt)=>(Rt.added_at||"").localeCompare(xt.added_at||"")):Ce.value==="score"&&ot.sort((xt,Rt)=>{const jt=Z(xt.code);return Z(Rt.code)-jt}),ot});function ue(ot){const xt=w.value.filter(jt=>jt.stock_code===ot);if(xt.length===0)return null;const Rt=xt.reduce((jt,Qt)=>jt.evaluate_time>Qt.evaluate_time?jt:Qt);return{score:Rt.result.total_score,color:u(Rt.result.level),bg:t(Rt.result.level)}}function Z(ot){const xt=ue(ot);return xt?xt.score:0}function de(ot){at(ot.code,ot.name),pe.value=pe.value.filter(xt=>xt.code!==ot.code),Ye.value=""}const Ee=c(()=>new Set(w.value.map(ot=>ot.stock_code))),we=g(new Set);function Ne(ot){we.value.add(ot)}const Ye=g(""),pe=g([]),oe=g(!1),ke=g({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),He=g(!1),Oe=g(!1),$e={v:null},ge=window.__quantModules.watchlist.history.create({ref:g,computed:c,watch:D,currentUser:k,selectedDate:T,stockDetail:C,stockDetailTab:M,stockDetailVisible:P,stockDetailLoading:x,stockKlineLoaded:S,viewCache:n,animateScoreEntrance:p,loadStockKline:R,refreshStockScore:O,disposeStockKline:f,aiHistory:w,aiLoading:z,aiEvalStage:F,aiEvalElapsed:V,aiEvalError:I,aiResult:$,loadLastEvaluation:W,autoEvaluateConfig:B,autoEvaluateScope:K,batchStocks:q,batchRunning:s,batchTotal:_,batchCompleted:l,batchCurrent:m,batchStatuses:J,batchResults:N,batchEvalErrors:E,expandedDates:v,expandedStocks:A,savingConfig:y,selectedHistoryIds:j,selectedWatchlistCodes:te,showAutoEvaluateSettings:re,showBatchEvaluate:se,getCSSVar:le,quickEvalStock:Q,evalStrategy:ie,watchlistSort:Ce,watchlist:ee,watchlistCodes:X,aiHistoryLoading:be,aiHistoryError:H,sortedWatchlist:me,getWatchlistScore:ue,getLatestScore:Z,addSearchResult:de,evaluatedCodes:Ee,klineLoadedCodes:we,markKlineLoaded:Ne,watchlistSearch:Ye,watchlistResults:pe,watchlistSearching:oe,dataRefreshConfig:ke,dataRefreshReloading:He,dataRefreshSaving:Oe,levelVar:u,levelBgVar:t,undoStack:d,showUndoMessage:b,addToWatchlist:function(ot,xt){return $e.v.addToWatchlist(ot,xt)},removeFromWatchlist:function(ot){return $e.v.removeFromWatchlist(ot)}}),{doAiEvaluate:Se,aiHistoryTotal:Ae,aiHistoryLoadingMore:ze,hasMoreAiHistory:Je,loadAiHistory:Qe,loadMoreAiHistory:Ge,deleteSingleHistory:et,toggleSelectHistory:tt,clearSelection:ht,clearWatchlistSelection:ve,batchReevaluateHistory:_e,batchAddToWatchlist:Le,batchAddToPortfolio:h,batchRemoveWatchlist:L,toggleSelectWatchlist:Y,selectAllHistory:ce,selectAllWatchlist:xe,deleteSelectedHistory:Pe,loadAutoEvaluateConfig:qe,saveAutoEvaluateConfig:he}=ge,Ve=window.__quantModules.watchlist.list.create({ref:g,computed:c,watch:D,currentUser:k,selectedDate:T,stockDetail:C,stockDetailTab:M,stockDetailVisible:P,stockDetailLoading:x,stockKlineLoaded:S,viewCache:n,animateScoreEntrance:p,loadStockKline:R,refreshStockScore:O,disposeStockKline:f,aiHistory:w,aiLoading:z,aiEvalStage:F,aiEvalElapsed:V,aiEvalError:I,aiResult:$,loadLastEvaluation:W,autoEvaluateConfig:B,autoEvaluateScope:K,batchStocks:q,batchRunning:s,batchTotal:_,batchCompleted:l,batchCurrent:m,batchStatuses:J,batchResults:N,batchEvalErrors:E,expandedDates:v,expandedStocks:A,savingConfig:y,selectedHistoryIds:j,selectedWatchlistCodes:te,showAutoEvaluateSettings:re,showBatchEvaluate:se,getCSSVar:le,quickEvalStock:Q,evalStrategy:ie,watchlistSort:Ce,watchlist:ee,watchlistCodes:X,aiHistoryLoading:be,aiHistoryError:H,sortedWatchlist:me,getWatchlistScore:ue,getLatestScore:Z,addSearchResult:de,evaluatedCodes:Ee,klineLoadedCodes:we,markKlineLoaded:Ne,watchlistSearch:Ye,watchlistResults:pe,watchlistSearching:oe,dataRefreshConfig:ke,dataRefreshReloading:He,dataRefreshSaving:Oe,levelVar:u,levelBgVar:t,undoStack:d,showUndoMessage:b,loadAiHistory:Qe}),{watchlistLoading:Fe,loadWatchlist:lt,addToWatchlist:at,removeFromWatchlist:Ze,clearWatchlist:Ue,toggleWatchlist:ft,showStockKline:ae,preloadingKline:ne,preloadWatchlistKline:Xe,watchlistEvaluate:gt,batchEvaluateWatchlist:wt,batchEvaluateSelected:vt,searchStockForWatchlist:Mt,loadDataRefreshConfig:Ot,saveDataRefreshConfig:na,triggerDataReload:Wt,dataPullRunning:St,triggerDataPull:qt}=Ve;$e.v=Ve;const Ft=window.__quantModules.watchlist.analytics.create({ref:g,computed:c,watch:D,currentUser:k,selectedDate:T,stockDetail:C,stockDetailTab:M,stockDetailVisible:P,stockDetailLoading:x,stockKlineLoaded:S,viewCache:n,animateScoreEntrance:p,loadStockKline:R,refreshStockScore:O,disposeStockKline:f,aiHistory:w,aiLoading:z,aiEvalStage:F,aiEvalElapsed:V,aiEvalError:I,aiResult:$,loadLastEvaluation:W,autoEvaluateConfig:B,autoEvaluateScope:K,batchStocks:q,batchRunning:s,batchTotal:_,batchCompleted:l,batchCurrent:m,batchStatuses:J,batchResults:N,batchEvalErrors:E,expandedDates:v,expandedStocks:A,savingConfig:y,selectedHistoryIds:j,selectedWatchlistCodes:te,showAutoEvaluateSettings:re,showBatchEvaluate:se,getCSSVar:le,quickEvalStock:Q,evalStrategy:ie,watchlistSort:Ce,watchlist:ee,watchlistCodes:X,aiHistoryLoading:be,aiHistoryError:H,sortedWatchlist:me,getWatchlistScore:ue,getLatestScore:Z,addSearchResult:de,evaluatedCodes:Ee,klineLoadedCodes:we,markKlineLoaded:Ne,watchlistSearch:Ye,watchlistResults:pe,watchlistSearching:oe,dataRefreshConfig:ke,dataRefreshReloading:He,dataRefreshSaving:Oe,levelVar:u,levelBgVar:t,undoStack:d,showUndoMessage:b,loadAiHistory:Qe}),{groupedByDate:Tt,aiHistoryByStock:Ut,groupedByMonth:At,aiHistoryStockCount:pt,scoreDistribution:Vt,quickEvaluate:Gt,toggleDateExpand:Ct,toggleSelectDate:zt,toggleSelectMonth:ta,toggleStockExpand:la,toggleSelectStock:U,registerTrendChart:De,viewAiResult:We,doBatchEvaluate:Ie}=Ft,ct=window.__quantModules.watchlist.realtime.create({ref:g,computed:c,watch:D,currentUser:k,selectedDate:T,stockDetail:C,stockDetailTab:M,stockDetailVisible:P,stockDetailLoading:x,stockKlineLoaded:S,viewCache:n,animateScoreEntrance:p,loadStockKline:R,refreshStockScore:O,disposeStockKline:f,aiHistory:w,aiLoading:z,aiEvalStage:F,aiEvalElapsed:V,aiEvalError:I,aiResult:$,loadLastEvaluation:W,autoEvaluateConfig:B,autoEvaluateScope:K,batchStocks:q,batchRunning:s,batchTotal:_,batchCompleted:l,batchCurrent:m,batchStatuses:J,batchResults:N,batchEvalErrors:E,expandedDates:v,expandedStocks:A,savingConfig:y,selectedHistoryIds:j,selectedWatchlistCodes:te,showAutoEvaluateSettings:re,showBatchEvaluate:se,getCSSVar:le,quickEvalStock:Q,evalStrategy:ie,watchlistSort:Ce,watchlist:ee,watchlistCodes:X,aiHistoryLoading:be,aiHistoryError:H,sortedWatchlist:me,getWatchlistScore:ue,getLatestScore:Z,addSearchResult:de,evaluatedCodes:Ee,klineLoadedCodes:we,markKlineLoaded:Ne,watchlistSearch:Ye,watchlistResults:pe,watchlistSearching:oe,dataRefreshConfig:ke,dataRefreshReloading:He,dataRefreshSaving:Oe,levelVar:u,levelBgVar:t,undoStack:d,showUndoMessage:b}),{REALTIME_DEGRADED_TEXT:mt,REALTIME_FALLBACK_TEXT:kt,realtimeQuotes:Lt,realtimeDegraded:Pt,realtimeWsState:It,quoteWarningFor:yt,realtimeQuoteColor:ia,realtimePriceText:oa,realtimePctText:Nt,realtimeRatioText:ra,disconnectRealtimeQuotes:Yt,connectRealtimeQuotes:ca}=ct;return{quickEvalStock:Q,evalStrategy:ie,watchlistSort:Ce,watchlist:ee,watchlistCodes:X,sortedWatchlist:me,getWatchlistScore:ue,getLatestScore:Z,addSearchResult:de,evaluatedCodes:Ee,klineLoadedCodes:we,markKlineLoaded:Ne,watchlistSearch:Ye,watchlistResults:pe,watchlistSearching:oe,dataRefreshConfig:ke,dataRefreshReloading:He,dataRefreshSaving:Oe,aiHistoryLoading:be,aiHistoryError:H,aiHistoryTotal:Ae,aiHistoryLoadingMore:ze,hasMoreAiHistory:Je,loadMoreAiHistory:Ge,watchlistLoading:Fe,doAiEvaluate:Se,loadAiHistory:Qe,deleteSingleHistory:et,toggleSelectHistory:tt,clearSelection:ht,clearWatchlistSelection:ve,batchReevaluateHistory:_e,batchAddToWatchlist:Le,batchAddToPortfolio:h,batchRemoveWatchlist:L,toggleSelectWatchlist:Y,selectAllHistory:ce,selectAllWatchlist:xe,deleteSelectedHistory:Pe,loadAutoEvaluateConfig:qe,saveAutoEvaluateConfig:he,loadWatchlist:lt,addToWatchlist:at,removeFromWatchlist:Ze,clearWatchlist:Ue,toggleWatchlist:ft,showStockKline:ae,preloadingKline:ne,preloadWatchlistKline:Xe,watchlistEvaluate:gt,batchEvaluateWatchlist:wt,batchEvaluateSelected:vt,searchStockForWatchlist:Mt,loadDataRefreshConfig:Ot,saveDataRefreshConfig:na,triggerDataReload:Wt,triggerDataPull:qt,dataPullRunning:St,groupedByDate:Tt,aiHistoryByStock:Ut,groupedByMonth:At,aiHistoryStockCount:pt,scoreDistribution:Vt,quickEvaluate:Gt,toggleDateExpand:Ct,toggleSelectDate:zt,toggleSelectMonth:ta,toggleStockExpand:la,toggleSelectStock:U,registerTrendChart:De,viewAiResult:We,doBatchEvaluate:Ie,realtimeQuotes:Lt,realtimeDegraded:Pt,realtimeWsState:It,connectRealtimeQuotes:ca,disconnectRealtimeQuotes:Yt,quoteWarningFor:yt,realtimeQuoteColor:ia,realtimePriceText:oa,realtimePctText:Nt,realtimeRatioText:ra,REALTIME_DEGRADED_TEXT:mt,REALTIME_FALLBACK_TEXT:kt}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:e,computed:u}=Vue,t=e([]),r=e(null),d=e([]),b=e(!1),o=e(!1),i=e(!1),g=e({stock_code:"",stock_name:"",cost_price:null,quantity:null}),c=e(!1),D=e(!1),k=e({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),T=e(!1),C=e("positions"),M=e(30),P=e(!1),x=e(""),S=e(!1),n=e({dates:[],equity:[],values:[]}),p=u(()=>t.value.length),R=e("metrics"),O=e(!1),f=e(""),w=e(!1),z=e({metrics:null,rules:[],rebalance:null}),F=u(function(){const y=z.value.metrics;if(!y)return[];const j=function(re){return re==null?"--":Number(re).toFixed(2)+"%"},te=function(re){return re==null?"--":Number(re).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:j(y.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:j(y.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:j(y.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:j(y.cvar)},{key:"max_drawdown",label:"最大回撤",value:j(y.max_drawdown)},{key:"annual_return",label:"年化收益",value:j(y.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:te(y.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:te(y.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:te(y.calmar_ratio)},{key:"beta",label:"Beta",value:te(y.beta)}]});async function V(){O.value=!0;try{const y=await(await fetch("/api/portfolio/risk?days=60")).json(),j=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),te=y&&y.success?y.risk:null,re=j&&j.success?j.rules||[]:[],se=j&&j.success?j.rebalance:null;z.value={metrics:te,rules:re,rebalance:se},w.value=!!(te&&Object.keys(te).length>0),f.value=y&&y.note||j&&j.note||""}catch(y){console.warn("[portfolio] 加载风险数据失败:",y),w.value=!1,f.value="风险数据加载失败"}finally{O.value=!1}}async function I(){b.value=!0,o.value=!1;try{const j=await(await fetch("/api/portfolio")).json();j.success?(t.value=j.positions||[],r.value=j.summary||null):o.value=!0}catch(y){console.warn("[portfolio] 加载持仓失败:",y),o.value=!0}finally{b.value=!1}}async function $(){const y=g.value,j=(y.stock_code||"").trim();if(!j){ElementPlus.ElMessage.warning("请输入股票代码");return}const te=Number(y.cost_price),re=Number(y.quantity);if(!(te>0)||!(re>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}c.value=!0;try{const le=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:j,stock_name:(y.stock_name||"").trim(),cost_price:te,quantity:re})})).json();le.success?(ElementPlus.ElMessage.success(le.message||"持仓已更新"),i.value=!1,g.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await I(),N(M.value)):ElementPlus.ElMessage.error(le.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{c.value=!1}}async function W(y){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+y+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const te=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(y),{method:"DELETE"})).json();te.success?(ElementPlus.ElMessage.success("已删除持仓"),await I(),q(),N(M.value)):ElementPlus.ElMessage.error(te.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function B(y,j){k.value={stock_code:y,stock_name:j||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},D.value=!0}async function K(){const y=k.value;if(!y.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const j=Number(y.price),te=Number(y.quantity);if(!(j>0)||!(te>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}T.value=!0;try{const se=await(await fetch("/api/portfolio/trades",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:y.stock_code,stock_name:y.stock_name||"",action:y.action,price:j,quantity:te,trade_date:y.trade_date||"",note:(y.note||"").trim()})})).json();se.success?(ElementPlus.ElMessage.success(se.message||"调仓已记录"),D.value=!1,await I(),await q(),N(M.value)):ElementPlus.ElMessage.error(se.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{T.value=!1}}async function q(){try{const j=await(await fetch("/api/portfolio/trades")).json();j.success&&(d.value=j.trades||[])}catch(y){console.warn("[portfolio] 加载调仓记录失败:",y)}}const s=y=>(getComputedStyle(document.documentElement).getPropertyValue(y)||"").trim();function _(y){if(!y||!y.length)return[];let j=y[0]||0;const te=[];for(let re=0;re<y.length;re++){const se=y[re]||0;se>j&&(j=se),te.push(j>0?Math.round((se-j)/j*1e3)/10:0)}return te}function l(){const y={primary:s("--qc-primary-600")||"#b8922a",textPrimary:s("--text-primary")||"#1f2937",textSecondary:s("--text-secondary")||"#6b7280",border:s("--border-light")||"#e5e7eb",up:s("--color-rise")||"#E63946",down:s("--color-fall")||"#2E7D32"},j=n.value;return{tooltip:{trigger:"axis",backgroundColor:s("--bg-card")||"#ffffff",borderColor:y.border,textStyle:{color:y.textPrimary},formatter:function(te){const re=te[0]?te[0].dataIndex:-1,se=j.dates[re]||"",le=j.equity[re],Q=j.values[re];let ie=se||"";return le!=null&&(ie+="<br/>组合净值: "+le),Q!=null&&(ie+="<br/>组合市值: "+Q),ie}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:j.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:y.textSecondary},axisLine:{lineStyle:{color:y.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:y.textSecondary},splitLine:{lineStyle:{color:y.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:y.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:j.equity,smooth:!0,showSymbol:!1,lineStyle:{color:y.primary,width:2},itemStyle:{color:y.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:s("--primary-rgb")?"rgba("+s("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:s("--primary-rgb")?"rgba("+s("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:_(j.equity),smooth:!0,showSymbol:!1,lineStyle:{color:y.down,width:1.5},itemStyle:{color:y.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function m(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function J(y,j,te){n.value={dates:y||[],equity:j||[],values:te||[]},S.value=!!y&&y.length>0,S.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",l,{key:"portfolio-equity"}):m()}async function N(y){P.value=!0,x.value="";const j=Number(y)||M.value||30;M.value=j;try{const re=await(await fetch("/api/portfolio/equity_curve?days="+j)).json();re.success?(x.value=re.note||"",J(re.dates||[],re.equity||[],re.values||[])):(x.value="数据暂不可用",m())}catch(te){console.warn("[portfolio] 加载收益曲线失败:",te),x.value="数据暂不可用",m()}finally{P.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function E(y,j){if(y==null||y===""||isNaN(Number(y)))return"--";const te=Number(y),re=j??2;return(te>=0?"+":"")+te.toFixed(re)}function v(y,j){if(y==null||y===""||isNaN(Number(y)))return"--";const te=Number(y),re=j??2;return(te>=0?"+":"")+te.toFixed(re)+"%"}function A(y){if(y==null||y===""||isNaN(Number(y)))return"";const j=Number(y);return j>0?"portfolio-up":j<0?"portfolio-down":""}return{positions:t,summary:r,trades:d,loading:b,loadError:o,showAddForm:i,addForm:g,addSaving:c,tradeFormVisible:D,tradeForm:k,tradeSaving:T,portfolioTab:C,equityDays:M,equityLoading:P,equityNote:x,equityHasData:S,portfolioCount:p,loadPortfolio:I,addPosition:$,removePosition:W,openTradeForm:B,submitTrade:K,loadTrades:q,loadEquity:N,fmtSigned:E,fmtSignedPct:v,signClass:A,riskTab:R,riskLoading:O,riskNote:f,riskHasData:w,riskData:z,riskMetricList:F,loadRisk:V}}}})();(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantBacktest=e()})(typeof self<"u"?self:void 0,function(){function a(i,g){var c=Number(i);return isFinite(c)?c:typeof g=="number"?g:0}function e(i){var g=Array.isArray(i)?i:[];if(g.length<2)return null;for(var c=-1/0,D=0,k=0,T=0,C=0,M=0;M<g.length;M++){var P=a(g[M].equity!=null?g[M].equity:g[M].value);P>c&&(c=P,D=M);var x=c>0?(c-P)/c*100:0;x>k&&(k=x,T=D,C=M)}function S(n){return g[n]&&g[n].date?g[n].date:""}return{maxDrawdown:Math.round(k*100)/100,peakIndex:T,troughIndex:C,peakDate:S(T),troughDate:S(C)}}function u(i){for(var g=i||{},c={},D=Object.keys(g).sort(),k=0;k<D.length;k++){var T=D[k],C=String(T).slice(0,4);/^\d{4}$/.test(C)&&(c[C]=(c[C]||0)+a(g[T]))}var M=Object.keys(c).sort();return M.map(function(P){return{year:P,return:Math.round(c[P]*100)/100}})}function t(i){var g=Array.isArray(i)?i:[],c={};g.forEach(function(T){(T.points||[]).forEach(function(C){C&&C.date&&(c[C.date]=1)})});var D=Object.keys(c).sort(),k=g.map(function(T){var C={};return(T.points||[]).forEach(function(M){M&&M.date&&(C[M.date]=a(M.value!=null?M.value:M.equity))}),{name:T.name||"",data:D.map(function(M){return M in C?C[M]:null})}});return{dates:D,series:k}}function r(i){var g=i||{},c=function(k){return a(k)},D=function(k,T){var C=c(k);return isFinite(C)?C.toFixed(T):"--"};return[{key:"total_return",label:"总收益",value:D(g.total_return,2),suffix:"%",dir:c(g.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:D(g.annual_return,2),suffix:"%",dir:c(g.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:D(g.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:D(g.sharpe_ratio,2),suffix:"",dir:c(g.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:D(g.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:D(g.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(c(g.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:D(g.volatility,2),suffix:"%",dir:""}]}function d(i){var g=i==null?"":String(i);return/[",\n]/.test(g)?'"'+g.replace(/"/g,'""')+'"':g}function b(i){var g=i||{},c=[];c.push("回测指标"),c.push("指标,数值"),(g.metrics||[]).forEach(function(S){c.push(d(S.label)+","+d((S.value||"")+(S.suffix||"")))}),c.push(""),c.push("净值曲线");var D=["日期"].concat((g.series||[]).map(function(S){return S.name}));c.push(D.map(d).join(","));for(var k=g.dates||[],T=g.series||[],C=0;C<k.length;C++){for(var M=[k[C]],P=0;P<T.length;P++){var x=T[P].data&&T[P].data[C];M.push(x??"")}c.push(M.map(d).join(","))}return c.push(""),c.push("交易明细"),c.push("日期,股票代码,方向,原因"),(g.trades||[]).forEach(function(S){c.push(d(S.date)+","+d(S.stock)+","+d(S.action)+","+d(S.reason))}),c.join(`
`)}function o(i){return i==="buy"?"买入":i==="sell"?"卖出":i||""}return{toNum:a,computeMaxDrawdownRegion:e,buildAnnualReturns:u,buildNavSeries:t,buildMetrics:r,buildBacktestCsv:b,tradeActionText:o}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:e,computed:u}=Vue,t=window.QuantBacktest||{},r=a||{},d=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],o=(Array.isArray(r.backtestStrategies)&&r.backtestStrategies.length?r.backtestStrategies:d).map(s=>({id:s.id,name:s.name})),i=e(o.length?[o[0].id]:[]),g=e(P()),c=e(1e5),D=e(3e-4),k=e(!1),T=e(!1),C=e(null),M=e("");function P(){const s=new Date,_=new Date;_.setFullYear(_.getFullYear()-1);const l=m=>m.getFullYear()+"-"+String(m.getMonth()+1).padStart(2,"0")+"-"+String(m.getDate()).padStart(2,"0");return[l(_),l(s)]}function x(s){const _=i.value.indexOf(s);_>=0?i.value.length>1&&i.value.splice(_,1):i.value.push(s)}function S(s){const _=o.find(l=>l.id===s);return _?_.name:s}function n(s){const _=s.summary||s;return{strategy_id:_.strategy_id,start_date:_.start_date,end_date:_.end_date,total_days:_.total_days,total_return:_.total_return,annual_return:_.annual_return,max_drawdown:_.max_drawdown,volatility:_.volatility,sharpe_ratio:_.sharpe_ratio,sortino_ratio:_.sortino_ratio,win_rate:_.win_rate,profit_loss_ratio:_.profit_loss_ratio,avg_positions:_.avg_positions!=null?_.avg_positions:_.avg_positions_per_day,total_trades:_.total_trades,turnover_rate:_.turnover_rate,success:_.success!==!1,message:_.message||"",insample_total_return:_.insample_total_return!=null?_.insample_total_return:null,outsample_total_return:_.outsample_total_return!=null?_.outsample_total_return:null,out_sample_ratio:_.out_sample_ratio!=null?_.out_sample_ratio:.2,overfit_warning:!!_.overfit_warning,overfit_reason:_.overfit_reason||""}}function p(s){return(Array.isArray(s)?s:[]).map(_=>({date:_.date,value:_.equity!=null?_.equity:_.value}))}function R(s,_){const l=n(_),m=p(_.equity_curve),J=_.monthly_returns||{},N=Array.isArray(_.trade_history)?_.trade_history:[],E={id:s,name:S(s),summary:l,equityCurve:m,monthlyReturns:J,trades:N};let v=null;if(k.value){const A=Number(c.value)||1e5;v={name:"现金基准",points:m.map(y=>({date:y.date,value:A}))}}return{success:!0,mode:"single",strategies:[E],primary:E,benchmark:v,period:(l.start_date||"")+" ~ "+(l.end_date||"")}}function O(s,_){const l=_.strategy_results||{},m=s.map(E=>{const v=l[E];if(!v)return null;const A=n(v);return{id:E,name:S(E),summary:A,equityCurve:p(v.equity_curve),monthlyReturns:v.monthly_returns||{},trades:Array.isArray(v.trade_history)?v.trade_history:[]}}).filter(E=>E&&E.summary.success!==!1),J=m.length?m[0]:null;let N=null;return k.value&&(N={name:"等权组合基准",points:p(_.portfolio_equity)}),{success:m.length>0,mode:"multi",strategies:m,primary:J,benchmark:N,period:J?J.summary.start_date+" ~ "+J.summary.end_date:""}}const f=u(()=>{const s=C.value;return!s||!s.primary?[]:t.buildMetrics?t.buildMetrics(s.primary.summary):[]}),w=u(()=>{const s=C.value;return!s||!s.primary||!s.primary.monthlyReturns?[]:t.buildAnnualReturns?t.buildAnnualReturns(s.primary.monthlyReturns):[]}),z=u(()=>{const s=C.value;return!s||!s.primary?[]:(s.primary.trades||[]).slice().sort((_,l)=>String(l.date||"").localeCompare(String(_.date||"")))}),F=u(()=>{const s=C.value;return!s||!s.strategies||s.strategies.length<2?[]:s.strategies.map(_=>({name:_.name,metrics:t.buildMetrics?t.buildMetrics(_.summary):[]}))}),V=u(()=>{const s=C.value;return!s||!s.primary?null:t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(s.primary.equityCurve):null});async function I(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const _=i.value;if(!_.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const l=g.value,m={start_date:l&&l[0]||void 0,end_date:l&&l[1]||void 0},J={"Content-Type":"application/json"};T.value=!0,C.value=null,M.value="";try{if(_.length===1){const N=Object.assign({},m,{initial_capital:Number(c.value)||1e5,commission_rate:Number(D.value)||3e-4}),E=await fetch("/api/backtest/"+encodeURIComponent(_[0]),{method:"POST",headers:J,body:JSON.stringify(N)});if(!E.ok){const A=await E.json().catch(()=>({}));throw new Error(A.detail||"回测失败")}const v=await E.json();if(!v.success)throw new Error(v.message||"回测失败");C.value=R(_[0],v)}else{const N=await fetch("/api/backtest/multi",{method:"POST",headers:J,body:JSON.stringify(Object.assign({},m,{strategy_ids:_}))});if(!N.ok){const v=await N.json().catch(()=>({}));throw new Error(v.detail||"回测失败")}const E=await N.json();if(!E.success)throw new Error(E.message||"多策略回测失败");if(C.value=O(_,E.data||{}),!C.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(N){M.value=N&&N.message?N.message:"回测失败",ElementPlus.ElMessage.error(M.value)}finally{T.value=!1}}function $(){const s=C.value,_={dates:[],series:[]};if(!s)return _;const l=s.strategies.map(J=>({name:J.name,points:J.equityCurve}));s.benchmark&&s.benchmark.points&&s.benchmark.points.length&&l.push({name:s.benchmark.name,points:s.benchmark.points});const m=t.buildNavSeries?t.buildNavSeries(l):_;return W(m,s)}function W(s,_){const l=j=>(getComputedStyle(document.documentElement).getPropertyValue(j)||"").trim(),m={primary:l("--qc-primary-600")||"#b8922a",success:l("--color-success")||"#4CAF50",accent:l("--color-accent")||"#F59E0B",info:l("--color-info")||"#1976d2",ai:l("--color-ai")||"#6366f1",textPrimary:l("--text-primary")||"#1f2937",textSecondary:l("--text-secondary")||"#6b7280",border:l("--border-light")||"#e5e7eb",up:l("--color-rise")||"#E63946",down:l("--color-fall")||"#2E7D32",bg:l("--bg-card")||"#ffffff"},J=[m.primary,m.success,m.accent,m.info,m.ai],E=m.bg.length===7&&parseInt(m.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",v=t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(_.primary?_.primary.equityCurve:[]):null,A=v&&v.peakDate&&v.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:m.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+v.maxDrawdown+"%",xAxis:v.peakDate,itemStyle:{color:m.down}},{xAxis:v.troughDate}]]}:void 0,y=s.series.map((j,te)=>{const re=_.benchmark&&j.name===_.benchmark.name,se=J[te%J.length];return{name:j.name,type:"line",data:j.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:re?2:2.4,type:re?"dashed":"solid",color:se},itemStyle:{color:se},emphasis:{focus:"series"},...te===0&&A?{markArea:A}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:E,borderColor:m.border,textStyle:{color:m.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:m.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:s.dates,boundaryGap:!1,axisLine:{lineStyle:{color:m.border}},axisLabel:{color:m.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:m.textSecondary,fontSize:11},splitLine:{lineStyle:{color:m.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:m.border,textStyle:{color:m.textSecondary,fontSize:10}}],series:y}}function B(s){if(!s){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",$,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function K(){const s=C.value;if(!s||!s.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const _=s.strategies.map(y=>({name:y.name,points:y.equityCurve}));s.benchmark&&_.push({name:s.benchmark.name,points:s.benchmark.points});const l=t.buildNavSeries?t.buildNavSeries(_):{dates:[],series:[]},m=t.tradeActionText||(y=>y),J=z.value.map(y=>({date:y.date,stock:y.stock,action:m(y.action),reason:y.reason})),N=t.buildBacktestCsv?t.buildBacktestCsv({metrics:f.value,dates:l.dates,series:l.series,trades:J}):"",E=new Blob(["\uFEFF"+N],{type:"text/csv;charset=utf-8"}),v=URL.createObjectURL(E),A=document.createElement("a");A.href=v,A.download="backtest-"+s.strategies.map(y=>y.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",A.click(),URL.revokeObjectURL(v),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function q(s,_){return s==null||s===""||isNaN(Number(s))?"--":Number(s).toFixed(_??2)}return{btStrategyOptions:o,btSelectedStrategies:i,toggleBtStrategy:x,btDateRange:g,btCapital:c,btCommissionRate:D,btIncludeBenchmark:k,btRunning:T,btResult:C,btError:M,btMetrics:f,btAnnualReturns:w,btTrades:z,btStrategyMetricsRows:F,btDrawdownRegion:V,runBacktestWorkbench:I,exportBacktestCSV:K,registerBacktestNavChart:B,btFmtNum:q}}}})();(function(){const{ref:a,computed:e,watch:u,onUnmounted:t}=Vue,r=c=>(getComputedStyle(document.documentElement).getPropertyValue(c)||"").trim(),d=72,b={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},o={stock:"股票",bond:"债券",commodity:"大宗商品",cash:"现金"},i={"🌱":"sprout","🔥":"flame","🌾":"wheat","❄️":"snowflake","📈":"trending-up","📉":"trending-down","📊":"bar-chart-3","💹":"line-chart","🏭":"factory","💰":"banknote","🛢":"fuel"},g={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const c=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"sprout",color:"var(--state-success-solid)",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),D=a({}),k=a(!1),T=a({}),C=a({cycles:[]}),M=a([]),P=a(0),x=a(!1),S=a({autoRefresh:!0,refreshInterval:300}),n=a(""),p=a(""),R=a(!1),O=a(""),f=a(!1);let w=null;const z={x:0,y:0},F=e(()=>{const X=D.value;return["recession","recovery","overheat","stagflation"].map(H=>{const me=X[H]||{};return{key:H,name:me.name||H,icon:i[me.icon]||"bar-chart-3",color:me.color||r("--text-tertiary")||"#888",bg:"color-mix(in srgb, "+(me.color||"var(--text-tertiary)")+" 14%, var(--bg-card))",textColor:"color-mix(in srgb, "+(me.color||"var(--text-tertiary)")+" 48%, var(--qc-foreground))",tagline:me.allocation&&g[H]||""}})}),V=e(()=>{var be,H,me,ue;const X=c.value.indicators||{};return[{key:"pmi",label:"PMI",value:(be=X.pmi)==null?void 0:be.toFixed(2),color:X.pmi>=50?r("--color-success")||"#43a047":r("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((H=X.gdp_growth)==null?void 0:H.toFixed(2))+"%",color:r("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((me=X.cpi)==null?void 0:me.toFixed(2))+"%",color:X.cpi>1.2?r("--color-danger")||"#E53935":r("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((ue=X.m2_growth)==null?void 0:ue.toFixed(2))+"%",color:r("--color-success")||"#43a047"}]}),I=X=>{X=X||{};const be=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],H=()=>r("--color-success")||"#43a047",me=()=>r("--color-danger")||"#E53935",ue=()=>r("--color-warning")||"#FF9800",Z={宽松:H(),中位:ue(),偏低:me(),高增长:H(),承压:me(),不利:me()};return be.map(de=>{const Ee=X[de.key]||{},we=Ee.score||0,Ne=Math.min(100,Math.max(5,(we+2)*25)),Ye=we>=.3?"var(--bar-fill-ok)":we>=-.3?"var(--bar-fill-warn)":"var(--bar-fill-bad)",pe=we>=0?"var(--state-success-text)":"var(--state-danger-text)";return{key:de.key,label:de.label,scoreStr:we.toFixed(2),level:Ee.level||"—",barWidth:Ne,barColor:Ye,scoreColor:pe,color:Z[Ee.level]||"var(--text-tertiary)"}})},$=e(()=>I(c.value.dimension_scores)),W=e(()=>I(T.value._dimensions)),B=e(()=>{var be;const X=((be=c.value.confidence)==null?void 0:be.level)||"";return X==="高"?"var(--state-success-text)":X==="中"?"var(--state-warning-text)":X==="低"?"var(--state-danger-text)":"var(--text-secondary)"}),K=e(()=>{var me,ue,Z,de;const X=D.value,be={recovery:0,overheat:1,stagflation:2,recession:3},H={};for(const[Ee,we]of Object.entries(X))H[Ee]={name:we.name,icon:we.icon,color:we.color,lightColor:we.bg_color,duration:"~"+(((me=we.historical_stats)==null?void 0:me.avg_duration_months)||18)+"个月",order:be[Ee]||0,period:((Z=(ue=we.case_studies)==null?void 0:ue[0])==null?void 0:Z.split("：")[0])||"",avgMonths:((de=we.historical_stats)==null?void 0:de.avg_duration_months)||18};return H}),q=e(()=>{var we,Ne;const X=c.value.stage,H={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[X]||{x:150,y:150},me=c.value.dimension_scores||{},ue=((we=me.growth)==null?void 0:we.score)||0,Z=((Ne=me.inflation)==null?void 0:Ne.score)||0,de=Math.max(-30,Math.min(30,ue*15)),Ee=Math.max(-30,Math.min(30,-Z*15));return{x:H.x+de,y:H.y+Ee,prevX:z.x,prevY:z.y}}),s=e(()=>{var me;const X=Math.min(100,((me=c.value.timing)==null?void 0:me.progress_percent)||0),be=c.value.color||"var(--state-success-solid)",H=X>100?"linear-gradient(90deg, "+be+", var(--state-warning-solid))":be;return{width:X+"%",background:H}});function _(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[c.value.stage]||0}function l(){var X,be;return((be=(X=c.value)==null?void 0:X.timing)==null?void 0:be.progress_percent)||0}function m(){var X,be;return((be=(X=c.value)==null?void 0:X.timing)==null?void 0:be.duration_months)||0}function J(){var X,be;return((be=(X=c.value)==null?void 0:X.timing)==null?void 0:be.avg_duration_months)||18}function N(X){var ue,Z;const be=K.value,H=((ue=be[c.value.stage])==null?void 0:ue.order)||0;return(((Z=be[X])==null?void 0:Z.order)||0)<H}function E(X){return b[X]||X}function v(X){return o[X]||X}function A(X){const be=["var(--state-success-tint)","var(--state-warning-tint)","var(--state-info-tint)","var(--qc-muted)"];return be[X-1]||be[3]}async function y(){try{const be=await(await fetch("/api/market/merrill-clock/stages")).json();be.success&&be.data&&(D.value=be.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function j(){x.value=!0;try{re();const be=await(await fetch("/api/market/merrill-clock/timeline")).json();if(be.success&&be.data){const H=Array.isArray(be.data.cycles)?be.data.cycles.slice().reverse():[];C.value={cycles:H}}}catch{console.warn("获取美林时钟时间轴失败")}finally{x.value=!1}}async function te(X){await le(X)}async function re(){try{const be=await(await fetch("/api/market/merrill-clock/snapshots?limit=30")).json();be&&be.success&&be.data&&(M.value=be.data.items||[],P.value=be.data.total||0)}catch{console.warn("获取美林时钟评估轨迹失败")}}async function se(){var X,be;f.value=!1;try{const me=await(await fetch("/api/market/merrill-clock")).json(),ue=me.stage||"recovery",Z=D.value[ue]||{};if(c.value={...Z,...me,stage_cn:me.stage_cn||Z.stage_cn||"",stage_name:me.stage_name||Z.name||"",name:me.name||Z.name||"复苏期"},n.value=new Date().toLocaleTimeString("zh-CN"),O.value&&O.value!==ue){const de=D.value,Ee=((X=de[O.value])==null?void 0:X.name)||O.value,we=((be=de[ue])==null?void 0:be.name)||ue;ElementPlus.ElMessage({message:"美林时钟阶段切换："+Ee+" → "+we,type:"warning",duration:6e3,showClose:!0})}O.value=ue}catch(H){console.error("获取美林时钟失败:",H),f.value=!0;const me=D.value.recovery||{};c.value={...me,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function le(X){var H;k.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",T.value=D.value[X]||D.value.recovery||{};const be=((H=c.value)==null?void 0:H.stage)===X;T.value._isCurrent=be,be&&c.value&&(T.value._nextPrediction=c.value.next_stage_prediction,T.value._confidence=c.value.confidence,T.value._stage=c.value.stage,T.value._dimensions=c.value.dimension_scores);try{const ue=await(await fetch("/api/market/merrill-clock/stage/"+X)).json();if(ue.success&&ue.data){const Z={...D.value[X],...ue.data};Z._is_current!==void 0&&(Z._isCurrent=Z._is_current),Z._current_timing&&(Z._currentTiming=Z._current_timing),Z._last_period&&(Z._lastPeriod=Z._last_period),T.value._nextPrediction&&(Z._nextPrediction=T.value._nextPrediction),T.value._confidence&&(Z._confidence=T.value._confidence),T.value._stage&&(Z._stage=T.value._stage),T.value._dimensions&&(Z._dimensions=T.value._dimensions),Object.assign(T.value,Z)}}catch(me){console.warn("获取阶段详情失败:",me)}}function Q(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:S.value.autoRefresh,refreshInterval:S.value.refreshInterval})),S.value.autoRefresh?(clearInterval(w),w=setInterval(se,S.value.refreshInterval*1e3)):clearInterval(w),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function ie(){R.value=!0,p.value="";try{const be=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();be.success?(p.value="重评估完成："+(be.stage_name||be.stage),await se(),ElementPlus.ElMessage.success("重评估完成")):(p.value=be.message||"重评估失败",ElementPlus.ElMessage.error(be.message||"重评估失败"))}catch{p.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{R.value=!1}}function Ce(){const X=localStorage.getItem("merrill_clock_config");if(X)try{const be=JSON.parse(X);S.value={...S.value,...be}}catch{}S.value.autoRefresh&&(w=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),se()},S.value.refreshInterval*1e3))}function ee(){w&&clearInterval(w)}return t(()=>{ee()}),{merrillData:c,merrillStagesConfig:D,showMerrillDetail:k,merrillDetailData:T,merrillTimeline:C,merrillSnapshots:M,merrillSnapshotsTotal:P,fetchMerrillSnapshots:re,timelineLoading:x,merrillClockConfig:S,merrillClockLastUpdated:n,merrillReevalResult:p,merrillReevalLoading:R,stages:F,indicatorList:V,dimensionScoreList:$,detailDimensionScoreList:W,confidenceColor:B,timelineStages:K,clockPosition:q,merrillProgressStyle:s,FULL_CYCLE_MONTHS:d,getStageAngle:_,getCycleProgress:l,getCurrentStageMonths:m,getStageTotalMonths:J,isStageCompleted:N,getCharLabel:E,getAssetName:v,getRankColor:A,fetchMerrillStages:y,fetchMerrillClock:se,merrillError:f,loadMerrillTimeline:j,showTimelineStage:te,showStageDetail:le,saveMerrillClockConfig:Q,doMerrillReevaluate:ie,startAutoRefresh:Ce,stopAutoRefresh:ee}}})();(function(){function a(o){return getComputedStyle(document.documentElement).getPropertyValue(o).trim()}var e=[210,28,165,290,348,190,52,250];function u(){var o=!1;try{o=document.documentElement.getAttribute("data-theme-mode")==="dark"}catch{}var i=o?62:58,g=o?62:40;return e.map(function(c){return"hsl("+c+", "+i+"%, "+g+"%)"})}function t(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:a("--chart-bg")||"transparent",color:u(),legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const r=[];function d(o){typeof o=="function"&&r.push(o)}function b(){r.slice().forEach(function(o){try{o()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:t,categoricalPalette:u,registerChart:d,refreshAllCharts:b,init(){return{getEChartsTheme:t,registerChart:d,refreshAllCharts:b}}}})();(function(){const{ref:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const u=e("qcState");try{const d=localStorage.getItem("quant_sidebar_collapsed");d!==null&&u.sidebarCollapsed&&(u.sidebarCollapsed.value=d==="1")}catch{}if(!u)return{};const t=async d=>{if(window.__quantGoPage){await window.__quantGoPage(d.key,d.subPages[0]||"");return}u.currentPage.value=d.key,u.currentSubPage.value=d.subPages[0]||""},r=()=>{u.sidebarCollapsed.value=!u.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",u.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:u.menus,currentPage:u.currentPage,sidebarCollapsed:u.sidebarCollapsed,navigate:t,toggle:r,sanitizeHtml:u.sanitizeHtml,keyClick:u.keyClick,t:u.t}}}})();const aa={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(a){const e=a,u={"layout-dashboard":Lv,calendar:zv,bot:Av,"flask-conical":Rv,zap:Pv,settings:Tv,"chevron-down":Dv,"chevron-right":Mv,"chevron-left":Ev,menu:qv,search:Cv,bell:Sv,sun:xv,moon:_v,user:kv,"user-round":wv,home:bv,x:yv,database:hv,activity:gv,clock:pv,"bar-chart-3":fv,shield:mv,"hard-drive":vv,"file-text":uv,users:dv,cpu:cv,"pie-chart":rv,info:ov,"log-out":iv,palette:lv,languages:nv,refresh:sv,download:av,"external-link":tv,command:ev,sparkles:Zu,"trending-up":$u,"trending-down":Xu,"circle-dot":Ju,check:Qu,"alert-triangle":Yu,loader:Gu,"arrow-left":Uu,"arrow-right":Wu,eye:Ku,"eye-off":Bu,lock:Hu,"sliders-horizontal":ju,play:Vu,history:Fu,layers:Ou,"line-chart":Nu,target:Iu,"search-check":Lu,star:zu,"message-circle":Au,"calendar-days":Ru,"calendar-range":Pu,"calendar-check":Tu,brain:Du,lightbulb:Mu,"octagon-x":Eu,flag:qu,package:Cu,"clipboard-list":Su,pin:xu,"radio-tower":_u,gauge:ku,landmark:wu,"candlestick-chart":bu,wallet:yu,"badge-check":hu,key:gu,factory:pu,trophy:fu,rocket:mu,flame:vu,"map-pin":uu,"scroll-text":du,"book-open":cu,dna:ru,"bar-chart":ou,plus:iu,"star-off":lu,upload:nu,gem:su,"folder-open":au,link:tu,save:eu,"trash-2":Zd,pause:$d,"help-circle":Xd,"play-circle":Jd,pencil:Qd,folder:Yd,code:Gd,sprout:Ud,wheat:Wd,snowflake:Kd,fuel:Bd,banknote:Hd,send:jd,inbox:Vd,"wifi-off":Fd,"check-circle-2":Od,"x-circle":Nd},t=()=>u[e.name]||u["circle-dot"];return(r,d)=>(fe(),Zt(Sd(t()),{size:a.size,"stroke-width":a.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},sa=(a,e)=>{const u=a.__vccOpts||a;for(const[t,r]of e)u[t]=r;return u},Iv={name:"qc-sidebar",components:{AppIcon:aa},setup(){const a=va("qcState");if(!a)return{};const e=st(()=>a.menus&&a.menus.value||[]),u=st(()=>a.currentPage&&a.currentPage.value||""),t=st(()=>a.navMode&&a.navMode.value||"subnav"),r=st({get:()=>a.sidebarCollapsed&&a.sidebarCollapsed.value||!1,set:x=>{a.sidebarCollapsed&&(a.sidebarCollapsed.value=x)}}),d=dt({}),b={research:"量化投研",platform:"平台管理"},o=["research","platform"],i=x=>u.value===x.key,g=(x,S)=>u.value===x.key&&a.currentSubPage&&a.currentSubPage.value===S,c=x=>Array.isArray(x.subPages)&&x.subPages.length>1,D=(x,S)=>a.subPageNames&&a.subPageNames[S]||S;function k(x){!c(x)||r.value||(d.value[x.key]=!d.value[x.key])}function T(){e.value.forEach(x=>{d.value[x.key]===void 0&&(d.value[x.key]=i(x))})}async function C(x,S){const n=S||x.subPages&&x.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(x.key,n):(a.currentPage.value=x.key,a.currentSubPage&&(a.currentSubPage.value=n)),a.navigateTo&&a.navigateTo(x.key,n)}function M(){r.value=!r.value;try{localStorage.setItem("sidebar_collapsed",r.value?"1":"0")}catch{}}function P(x){if(x.ctrlKey&&x.key.toLowerCase()==="b"&&(x.preventDefault(),M()),!x.ctrlKey&&!x.metaKey&&!x.altKey&&(x.key==="ArrowDown"||x.key==="ArrowUp")){const S=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),n=S.indexOf(document.activeElement);if(n>=0){x.preventDefault();const p=S[(n+(x.key==="ArrowDown"?1:S.length-1))%S.length];p&&p.focus()}}}return ba(()=>{T(),document.addEventListener("keydown",P)}),qa(()=>document.removeEventListener("keydown",P)),{state:a,menus:e,currentPage:u,navMode:t,sidebarCollapsed:r,expandedMenus:d,GROUP_LABELS:b,GROUPS:o,isActive:i,isChildActive:g,hasChildren:c,subLabel:D,toggleSubmenu:k,navigate:C,toggleCollapse:M}}},Nv={class:"qc-sidebar-logo"},Ov={key:0,class:"qc-logo-text"},Fv={class:"qc-sidebar-nav"},Vv={key:0,class:"qc-nav-group"},jv={key:0,class:"qc-nav-group-label"},Hv=["href","aria-current","onClick"],Bv={key:0,class:"qc-sidebar-label"},Kv={key:1,class:"qc-nav-badge"},Wv=["aria-expanded","aria-controls","onClick"],Uv=["id"],Gv=["href","aria-current","onClick"],Yv={class:"qc-sidebar-child-label"},Qv={class:"qc-sidebar-footer"},Jv=["aria-expanded","aria-label","title"];function Xv(a,e,u,t,r,d){const b=Et("AppIcon"),o=Et("el-tooltip");return fe(),ye("nav",{class:it(["qc-sidebar",{"is-collapsed":t.sidebarCollapsed}]),"aria-label":"主导航"},[Me("div",Nv,[e[1]||(e[1]=Cd('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),t.sidebarCollapsed?Be("",!0):(fe(),ye("span",Ov,Ke(t.state.t("login.title")),1))]),Me("div",Fv,[(fe(!0),ye(ut,null,bt(t.GROUPS,i=>(fe(),ye(ut,{key:i},[t.menus.some(g=>g.group===i)?(fe(),ye("div",Vv,[t.sidebarCollapsed?Be("",!0):(fe(),ye("span",jv,Ke(t.GROUP_LABELS[i]),1)),(fe(!0),ye(ut,null,bt(t.menus.filter(g=>g.group===i),g=>(fe(),ye(ut,{key:g.key},[Me("div",{class:it(["qc-sidebar-item",{"has-children":t.navMode==="tree"&&t.hasChildren(g),"is-child-open":t.navMode==="tree"&&t.expandedMenus[g.key]}])},[rt(o,{content:g.name,placement:"right","show-after":300,disabled:!t.sidebarCollapsed},{default:Xt(()=>[Me("a",{class:it(["qc-sidebar-link",{"is-active":t.isActive(g)}]),href:"#"+g.key,"aria-current":t.isActive(g)?"page":null,onClick:_t(c=>t.navigate(g),["prevent"])},[rt(b,{name:g.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),t.sidebarCollapsed?Be("",!0):(fe(),ye("span",Bv,Ke(g.name),1)),!t.sidebarCollapsed&&g.badge?(fe(),ye("span",Kv,Ke(g.badge),1)):Be("",!0)],10,Hv)]),_:2},1032,["content","disabled"]),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(g)?(fe(),ye("button",{key:0,class:it(["qc-sidebar-chevron",{"is-open":t.expandedMenus[g.key]}]),"aria-expanded":!!t.expandedMenus[g.key],"aria-controls":"submenu-"+g.key,"aria-label":"展开子菜单",onClick:c=>t.toggleSubmenu(g)},[rt(b,{name:"chevron-down",size:14})],10,Wv)):Be("",!0)],2),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(g)&&t.expandedMenus[g.key]?(fe(),ye("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+g.key},[(fe(!0),ye(ut,null,bt(g.subPages,c=>(fe(),ye("a",{key:c,class:it(["qc-sidebar-item qc-sidebar-child",{"is-active":t.isChildActive(g,c)}]),href:"#"+g.key+"-"+c,"aria-current":t.isChildActive(g,c)?"page":null,onClick:_t(D=>t.navigate(g,c),["prevent"])},[Me("span",Yv,Ke(t.subLabel(g,c)),1)],10,Gv))),128))],8,Uv)):Be("",!0)],64))),128))])):Be("",!0)],64))),128))]),Me("div",Qv,[Me("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!t.sidebarCollapsed,"aria-label":t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:e[0]||(e[0]=(...i)=>t.toggleCollapse&&t.toggleCollapse(...i))},[rt(b,{name:t.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,Jv)])],2)}const $v=sa(Iv,[["render",Xv]]),Zv={name:"qc-header",components:{AppIcon:aa},setup(){const a=va("qcState");if(!a)return{};const e=dt(!1),u=st(()=>a.currentUser&&a.currentUser.value||null),t=st(()=>a.navMode&&a.navMode.value||"subnav"),r=st(()=>{const H=a.currentPage&&a.currentPage.value,me=(a.menus&&a.menus.value||[]).find(ue=>ue.key===H);return!!(me&&me.subPages&&me.subPages.length)}),d=st(()=>{const H=a.currentPage&&a.currentPage.value,me=a.currentPageName&&a.currentPageName.value;if(me)return me;const ue=(a.menus&&a.menus.value||[]).find(Z=>Z.key===H);return ue&&ue.name||H||""}),b=st(()=>{const H=a.currentSubPage&&a.currentSubPage.value;return H&&a.subPageNames&&a.subPageNames[H]||H||""}),o=dt(typeof window<"u"?window.innerWidth<768:!1);function i(){o.value=window.innerWidth<768}ba(()=>window.addEventListener("resize",i)),qa(()=>window.removeEventListener("resize",i));const g=dt(!1),c=st(()=>{const H=a.currentSubPage&&a.currentSubPage.value;return H&&a.subPageNames&&a.subPageNames[H]||H||""}),D=st(()=>{const H=a.currentPage&&a.currentPage.value,me=(a.menus&&a.menus.value||[]).find(ue=>ue.key===H);return(me&&me.subPages||[]).map(ue=>({key:ue,label:a.subPageNames&&a.subPageNames[ue]||ue}))});function k(){g.value=!g.value}function T(){g.value=!1}function C(H){g.value=!1,a.activateTab&&a.activateTab(a.currentPage.value,H)}const M=st(()=>(a.currentTheme&&a.currentTheme.value)==="dark"),P=dt(!1),x=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],S=st(()=>{const H=x.find(me=>me.value===t.value);return H&&H.label||t.value});function n(){P.value=!P.value}function p(){P.value=!1}function R(H){P.value=!1,a.setNavMode&&a.setNavMode(H)}const O=st({get:()=>a.searchQuery&&a.searchQuery.value||"",set:H=>{a.searchQuery&&(a.searchQuery.value=H)}}),f=dt(!1),w=dt([]),z=dt(!1),F=dt(!1);function V(){const H=localStorage.getItem("quant_token")||"";return H?{Authorization:"Bearer "+H,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function I(){z.value=!0,F.value=!1;try{const me=await(await fetch("/api/alerts/history?limit=8",{headers:V()})).json();me&&me.success?w.value=me.history||[]:w.value=[]}catch{F.value=!0,w.value=[]}finally{z.value=!1}}function $(){f.value=!f.value,f.value&&I()}function W(){f.value=!1}function B(){f.value=!1,a.activateTab&&a.activateTab("system","notification")}const K=dt(!1),q=a.themeHues||[45,220,0,140,270,320,180,25,250,-1],s=st(()=>{const H=a.themeHue&&a.themeHue.value;return Number.isFinite(H)?H:45}),_=st(()=>a.themeMode&&a.themeMode.value||"system"),l=[{k:"compact",n:"紧凑"},{k:"comfortable",n:"标准"},{k:"spacious",n:"宽松"}],m=st(()=>a.density&&a.density.value||"comfortable");function J(H){a.changeDensity&&a.changeDensity(H)}function N(H){return a.hueColor?a.hueColor(H):"hsl("+H+", 75%, 42%)"}const E={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色","-1":"中性"};function v(H){return a.hueName?a.hueName(H):E[H]||"自定义 "+H}function A(){K.value=!K.value}function y(){K.value=!1}function j(H){a.changeThemeMode&&a.changeThemeMode(H)}function te(H){a.changeThemeHue&&a.changeThemeHue(H)}function re(){a.changeThemeMode&&a.changeThemeMode(M.value?"light":"dark")}function se(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}a.sidebarCollapsed&&(a.sidebarCollapsed.value=!a.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",a.sidebarCollapsed.value?"1":"0")}catch{}}function le(){e.value=!e.value}function Q(){e.value=!1}function ie(H){return()=>{Q(),H&&H()}}function Ce(){Q(),a.handleLogout&&a.handleLogout()}const ee=st(()=>a.marketData&&a.marketData.value||{}),X=dt(typeof window<"u"&&localStorage.getItem("qc.hideNonTradingBanner")==="1");return{marketData:ee,bannerDismissed:X,dismissBanner:()=>{X.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},state:a,showUserMenu:e,currentUser:u,isDark:M,searchQuery:O,navMode:t,crumbRoot:d,crumbSub:b,hasToptabs:r,toggleThemeQuick:re,toggleSidebar:se,openUserMenu:le,closeUserMenu:Q,menuItem:ie,handleLogout:Ce,openBellMenu:f,notifItems:w,notifLoading:z,notifError:F,toggleBell:$,closeBell:W,goNotificationCenter:B,openThemeMenu:K,themeHues:q,themeHue:s,themeMode:_,hueColor:N,hueName:v,toggleThemeMenu:A,closeThemeMenu:y,pickThemeMode:j,pickThemeHue:te,DENSITY_MODES:l,density:m,pickDensity:J,openNavModeMenu:P,NAV_MODES:x,navModeLabel:S,toggleNavModeMenu:n,closeNavModeMenu:p,pickNavMode:R,isMobile:o,openSubnavPicker:g,currentSubLabel:c,subnavOptions:D,toggleSubnavPicker:k,closeSubnavPicker:T,pickSubnav:C}}},em={class:"qc-header-wrap"},tm={key:0,class:"non-trading-banner",role:"status"},am={class:"qc-header"},sm={class:"visually-hidden"},nm={class:"qc-header-left"},lm=["aria-label"],im={key:0,class:"qc-header-subnav"},om=["aria-expanded"],rm={class:"qc-subnav-picker-label"},cm={key:0,class:"qc-subnav-picker-menu",role:"menu"},dm=["onClick"],um={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},vm={class:"qc-crumb qc-crumb-root"},mm={class:"qc-crumb qc-crumb-sub"},fm={key:1,class:"qc-crumb qc-crumb-root"},pm={class:"qc-header-center"},gm={key:0,class:"qc-search-sublabel"},hm={class:"qc-header-right"},ym={class:"qc-hdr-pop"},bm=["aria-expanded"],wm={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},km={key:0,class:"qc-bell-state"},_m={key:1,class:"qc-bell-state"},xm={key:2,class:"qc-bell-state"},Sm={key:3,class:"qc-bell-list"},Cm={class:"qc-bell-item-title"},qm={class:"qc-bell-item-meta"},Em={key:0},Mm={class:"qc-bell-item-time"},Dm={class:"qc-hdr-pop"},Tm=["aria-expanded"],Pm={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},Rm={class:"qc-theme-modes"},Am=["onClick"],zm={class:"qc-theme-swatches"},Lm=["title","aria-label","onClick"],Im={key:0,class:"qc-theme-swatch-check"},Nm={class:"qc-theme-custom-label"},Om={class:"qc-theme-modes"},Fm=["onClick"],Vm={key:0,class:"qc-navmode-switch"},jm=["aria-label","title","aria-expanded"],Hm={key:0,class:"qc-navmode-menu",role:"menu"},Bm=["onClick","onKeydown"],Km={class:"qc-navmode-item-main"},Wm={class:"qc-user-menu"},Um=["aria-label","aria-expanded"],Gm={key:0,class:"qc-user-dropdown",role:"menu"},Ym={class:"qc-user-dropdown-header"},Qm={class:"qc-user-dropdown-name"},Jm={key:0,class:"qc-user-dropdown-chip"};function Xm(a,e,u,t,r,d){var k,T,C,M,P,x,S;const b=Et("qc-data-stale-banner"),o=Et("AppIcon"),i=Et("qc-top-tabs"),g=Et("el-autocomplete"),c=Et("el-slider"),D=qd("click-outside");return fe(),ye("div",em,[rt(b),t.marketData&&t.marketData.is_trading_day===!1&&!t.bannerDismissed?(fe(),ye("div",tm,[rt(o,{name:"alert-triangle",size:14}),e[15]||(e[15]=Me("span",null,"今日非交易日 · 当前展示最近交易日历史数据",-1)),Me("button",{class:"non-trading-banner-close",onClick:e[0]||(e[0]=(...n)=>t.dismissBanner&&t.dismissBanner(...n)),"aria-label":"关闭提示"},"×")])):Be("",!0),Me("header",am,[Me("h1",sm,Ke(t.crumbRoot||"量化日历"),1),Me("div",nm,[Me("button",{class:"qc-icon-btn","aria-label":(k=t.state.sidebarCollapsed)!=null&&k.value?"展开侧边栏":"折叠侧边栏",onClick:e[1]||(e[1]=(...n)=>t.toggleSidebar&&t.toggleSidebar(...n))},[rt(o,{name:"menu",size:20})],8,lm),t.isMobile?ya((fe(),ye("div",im,[Me("button",{class:"qc-subnav-picker","aria-expanded":t.openSubnavPicker,onClick:e[2]||(e[2]=(...n)=>t.toggleSubnavPicker&&t.toggleSubnavPicker(...n))},[Me("span",rm,Ke(t.currentSubLabel||"二级"),1),rt(o,{name:"chevron-down",size:14})],8,om),t.openSubnavPicker?(fe(),ye("div",cm,[(fe(!0),ye(ut,null,bt(t.subnavOptions,n=>(fe(),ye("div",{key:n.key,class:it(["qc-subnav-picker-item",{"is-active":n.key===(t.state.currentSubPage&&t.state.currentSubPage.value)}]),role:"menuitem",onClick:p=>t.pickSubnav(n.key)},Ke(n.label),11,dm))),128))])):Be("",!0)])),[[D,t.closeSubnavPicker]]):Be("",!0),t.navMode==="tree"&&!t.isMobile?(fe(),ye("div",um,[Me("span",vm,Ke(t.crumbRoot),1),t.crumbSub?(fe(),ye(ut,{key:0},[e[16]||(e[16]=Me("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),Me("span",mm,Ke(t.crumbSub),1)],64)):Be("",!0)])):Be("",!0),t.navMode==="toptab"&&!t.isMobile?(fe(),ye(ut,{key:2},[t.hasToptabs?(fe(),Zt(i,{key:0})):(fe(),ye("span",fm,Ke(t.crumbRoot),1))],64)):Be("",!0)]),Me("div",pm,[rt(g,{class:"qc-header-search",modelValue:t.searchQuery,"onUpdate:modelValue":e[3]||(e[3]=n=>t.searchQuery=n),"fetch-suggestions":t.state.searchStocks,placeholder:t.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:t.state.onSearchSelect},{prefix:Xt(()=>[rt(o,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:Xt(()=>[...e[17]||(e[17]=[Me("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:Xt(n=>{var p,R,O,f,w;return[Me("span",null,Ke((p=n==null?void 0:n.item)==null?void 0:p.icon)+" "+Ke(((R=n==null?void 0:n.item)==null?void 0:R.label)||((O=n==null?void 0:n.item)==null?void 0:O.name)),1),(f=n==null?void 0:n.item)!=null&&f.subLabel?(fe(),ye("span",gm,Ke((w=n==null?void 0:n.item)==null?void 0:w.subLabel),1)):Be("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),Me("div",hm,[ya((fe(),ye("div",ym,[Me("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":t.openBellMenu,onClick:e[4]||(e[4]=(...n)=>t.toggleBell&&t.toggleBell(...n))},[rt(o,{name:"bell",size:20})],8,bm),t.openBellMenu?(fe(),ye("div",wm,[e[18]||(e[18]=Me("div",{class:"qc-bell-header"},"通知",-1)),t.notifLoading?(fe(),ye("div",km,"加载中...")):t.notifError?(fe(),ye("div",_m,"加载失败")):t.notifItems.length?(fe(),ye("div",Sm,[(fe(!0),ye(ut,null,bt(t.notifItems,(n,p)=>(fe(),ye("div",{key:n.id||p,class:it(["qc-bell-item",{"is-fail":n.ok===0}])},[Me("div",Cm,Ke(n.title||n.event_type||"事件"),1),Me("div",qm,[$t(Ke(n.channel||""),1),n.recipient?(fe(),ye("span",Em," · "+Ke(n.recipient),1)):Be("",!0),Me("span",Mm,Ke(n.created_at||""),1)])],2))),128))])):(fe(),ye("div",xm,"暂无通知")),Me("button",{class:"qc-bell-footer",onClick:e[5]||(e[5]=(...n)=>t.goNotificationCenter&&t.goNotificationCenter(...n))},"前往通知中心 →")])):Be("",!0)])),[[D,t.closeBell]]),ya((fe(),ye("div",Dm,[Me("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":t.openThemeMenu,onClick:e[6]||(e[6]=(...n)=>t.toggleThemeMenu&&t.toggleThemeMenu(...n))},[rt(o,{name:"palette",size:20})],8,Tm),t.openThemeMenu?(fe(),ye("div",Pm,[e[19]||(e[19]=Me("div",{class:"qc-theme-section-label"},"外观模式",-1)),Me("div",Rm,[(fe(),ye(ut,null,bt([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],n=>Me("button",{key:n.k,class:it(["qc-theme-mode",{"is-active":t.themeMode===n.k}]),onClick:p=>t.pickThemeMode(n.k)},Ke(n.n),11,Am)),64))]),e[20]||(e[20]=Me("div",{class:"qc-theme-section-label"},"主题色",-1)),Me("div",zm,[(fe(!0),ye(ut,null,bt(t.themeHues,n=>(fe(),ye("button",{key:n,class:it(["qc-theme-swatch",{"is-active":t.themeHue===n}]),style:Ed({background:t.hueColor(n)}),title:t.hueName(n),"aria-label":t.hueName(n),onClick:p=>t.pickThemeHue(n)},[t.themeHue===n?(fe(),ye("span",Im,"✓")):Be("",!0)],14,Lm))),128))]),rt(c,{class:"qc-theme-slider","model-value":t.themeHue,min:0,max:359,step:1,size:"small",onChange:t.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),Me("div",Nm,"自定义 "+Ke(t.themeHue)+"°",1),e[21]||(e[21]=Me("div",{class:"qc-theme-section-label"},"信息密度",-1)),Me("div",Om,[(fe(!0),ye(ut,null,bt(t.DENSITY_MODES,n=>(fe(),ye("button",{key:n.k,class:it(["qc-theme-mode",{"is-active":t.density===n.k}]),onClick:p=>t.pickDensity(n.k)},Ke(n.n),11,Fm))),128))])])):Be("",!0)])),[[D,t.closeThemeMenu]]),t.isMobile?Be("",!0):ya((fe(),ye("div",Vm,[Me("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+t.navModeLabel,title:"导航形态: "+t.navModeLabel,"aria-expanded":t.openNavModeMenu,onClick:e[7]||(e[7]=(...n)=>t.toggleNavModeMenu&&t.toggleNavModeMenu(...n))},[rt(o,{name:"layers",size:20})],8,jm),t.openNavModeMenu?(fe(),ye("div",Hm,[(fe(!0),ye(ut,null,bt(t.NAV_MODES,n=>(fe(),ye("div",{key:n.value,class:it(["qc-user-dropdown-item qc-navmode-item",{"is-active":t.navMode===n.value}]),role:"menuitem",tabindex:"0",onClick:p=>t.pickNavMode(n.value),onKeydown:[Kt(_t(p=>t.pickNavMode(n.value),["prevent"]),["enter"]),Kt(_t(p=>t.pickNavMode(n.value),["prevent"]),["space"])]},[Me("div",Km,[Me("span",null,Ke(n.label),1),t.navMode===n.value?(fe(),Zt(o,{key:0,name:"check",size:14})):Be("",!0)])],42,Bm))),128))])):Be("",!0)])),[[D,t.closeNavModeMenu]]),ya((fe(),ye("div",Wm,[Me("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((T=t.currentUser)==null?void 0:T.username)||""),"aria-haspopup":"menu","aria-expanded":t.showUserMenu,onClick:e[8]||(e[8]=(...n)=>t.openUserMenu&&t.openUserMenu(...n))},Ke((((C=t.currentUser)==null?void 0:C.username)||"A").charAt(0).toUpperCase()),9,Um),t.showUserMenu?(fe(),ye("div",Gm,[Me("div",Ym,[Me("span",Qm,Ke((M=t.currentUser)==null?void 0:M.username),1),((P=t.currentUser)==null?void 0:P.role)==="guest"?(fe(),ye("span",Jm,"访客")):Be("",!0)]),((x=t.currentUser)==null?void 0:x.role)==="admin"?(fe(),ye("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[9]||(e[9]=n=>t.menuItem(t.state.resetSetupWizard)()),onKeydown:e[10]||(e[10]=Kt(_t(n=>t.menuItem(t.state.resetSetupWizard)(),["prevent"]),["enter"]))},[rt(o,{name:"settings",size:16}),e[22]||(e[22]=$t(" 重新运行初始化向导 ",-1))],32)):Be("",!0),((S=t.currentUser)==null?void 0:S.role)!=="guest"?(fe(),ye("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[11]||(e[11]=n=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})()),onKeydown:e[12]||(e[12]=Kt(_t(n=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[rt(o,{name:"lock",size:16}),e[23]||(e[23]=$t(" 修改密码 ",-1))],32)):Be("",!0),e[25]||(e[25]=Me("div",{class:"qc-user-dropdown-divider"},null,-1)),Me("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:e[13]||(e[13]=(...n)=>t.handleLogout&&t.handleLogout(...n)),onKeydown:e[14]||(e[14]=Kt(_t((...n)=>t.handleLogout&&t.handleLogout(...n),["prevent"]),["enter"]))},[rt(o,{name:"log-out",size:16}),e[24]||(e[24]=$t(" 退出登录 ",-1))],32)])):Be("",!0)])),[[D,t.closeUserMenu]])])])])}const $m=sa(Zv,[["render",Xm]]),Zm=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],ef={name:"qc-subnav",components:{AppIcon:aa},setup(){const a=va("qcState");if(!a)return{};const e=st(()=>a.currentPage&&a.currentPage.value||""),u=st(()=>a.currentSubPage&&a.currentSubPage.value||""),t=st(()=>a.navMode&&a.navMode.value||"subnav"),r=dt({}),d=st(()=>a.menus&&a.menus.value||[]),b=st(()=>d.value.find(x=>x.key===e.value)||null),o=st(()=>b.value&&b.value.subPages||[]),i=st(()=>a.currentPageName&&a.currentPageName.value||e.value),g=x=>a.subPageNames&&a.subPageNames[x]||x,c=x=>u.value===x;function D(x){a.openTab?a.openTab(e.value,x):a.currentSubPage&&(a.currentSubPage.value=x);try{localStorage.setItem("quant_last_subpage",x)}catch{}}function k(x){a.openTab?a.openTab(e.value,x.key):a.currentSubPage&&(a.currentSubPage.value=x.key);try{localStorage.setItem("quant_last_subpage",x.key)}catch{}}function T(x){r.value[x]=!r.value[x]}const C={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",notification:"bell",about:"info"}};return{state:a,currentPage:e,currentSubPage:u,navMode:t,subPages:o,currentMenu:b,collapsedGroups:r,pageTitle:i,subLabel:g,isSubActive:c,goSub:D,goSystemItem:k,toggleGroup:T,SYSTEM_GROUPS:Zm,subIcon:(x,S)=>C[x]&&C[x][S]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},tf={key:0,class:"qc-subnav-column","aria-label":"二级导航"},af={class:"qc-subnav-column-header"},sf={class:"qc-subnav-current-label"},nf={class:"qc-subnav-column-body"},lf=["onClick"],of=["href","onClick"],rf={class:"qc-subnav-group-label"},cf=["href","onClick"],df=["href","onClick"];function uf(a,e,u,t,r,d){const b=Et("AppIcon");return t.navMode==="subnav"?(fe(),ye("aside",tf,[Me("div",af,[Me("span",sf,Ke(t.pageTitle),1)]),Me("div",nf,[t.currentPage==="system"?(fe(!0),ye(ut,{key:0},bt(t.SYSTEM_GROUPS,o=>(fe(),ye("div",{key:o.label,class:"qc-subnav-group"},[Me("div",{class:"qc-subnav-group-label",onClick:i=>t.toggleGroup(o.label)},[Me("span",null,Ke(o.label),1),rt(b,{name:"chevron-down",size:12,class:it({"is-open":!t.collapsedGroups[o.label]})},null,8,["class"])],8,lf),t.collapsedGroups[o.label]?Be("",!0):(fe(!0),ye(ut,{key:0},bt(o.items,i=>(fe(),ye("a",{key:i.key,class:it(["qc-subnav-item",{"is-active":t.isSubActive(i.key)}]),href:"#"+i.key,onClick:_t(g=>t.goSystemItem(i),["prevent"])},[rt(b,{name:i.icon,size:16},null,8,["name"]),Me("span",null,Ke(i.label),1)],10,of))),128))]))),128)):t.currentPage==="shortterm"?(fe(!0),ye(ut,{key:1},bt(t.SHORTTERM_GROUPS,o=>(fe(),ye("div",{key:o.label,class:"qc-subnav-group"},[Me("div",rf,[Me("span",null,Ke(o.label),1)]),(fe(!0),ye(ut,null,bt(o.items,i=>(fe(),ye("a",{key:i,class:it(["qc-subnav-item",{"is-active":t.isSubActive(i)}]),href:"#"+t.currentPage+"/"+i,onClick:_t(g=>t.goSub(i),["prevent"])},[rt(b,{name:t.subIcon(t.currentPage,i),size:16},null,8,["name"]),Me("span",null,Ke(t.subLabel(i)),1)],10,cf))),128))]))),128)):(fe(!0),ye(ut,{key:2},bt(t.subPages,o=>(fe(),ye("a",{key:o,class:it(["qc-subnav-item",{"is-active":t.isSubActive(o)}]),href:"#"+t.currentPage+"/"+o,onClick:_t(i=>t.goSub(o),["prevent"])},[rt(b,{name:t.subIcon(t.currentPage,o),size:16},null,8,["name"]),Me("span",null,Ke(t.subLabel(o)),1)],10,df))),128))])])):Be("",!0)}const vf=sa(ef,[["render",uf]]),mf=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],ff={name:"qc-mobile-nav",components:{AppIcon:aa},setup(){const a=va("qcState");if(!a)return{};const e=dt(!1),u=dt(null),t=dt({}),r=st(()=>a.menus&&a.menus.value||[]),d=st(()=>a.currentPage&&a.currentPage.value||""),b={research:"量化投研",platform:"平台管理"},o=["research","platform"];function i(S){return Array.isArray(S.subPages)&&S.subPages.length>0}function g(S){i(S)&&(t.value[S.key]=!t.value[S.key])}function c(S,n){return d.value===S.key&&a.currentSubPage&&a.currentSubPage.value===n}function D(S){return a.subPageNames&&a.subPageNames[S]||S}async function k(S){const n=r.value.find(R=>R.key===S.key),p=n&&n.subPages&&n.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(S.key,p):(a.currentPage.value=S.key,a.currentSubPage&&(a.currentSubPage.value=p)),a.navigateTo&&a.navigateTo(S.key,p)}function T(S,n){e.value=!1;const p=n||S.subPages&&S.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(S.key,p):(a.currentPage.value=S.key,a.currentSubPage&&(a.currentSubPage.value=p)),a.navigateTo&&a.navigateTo(S.key,p)}function C(){e.value=!0,t.value.shortterm===void 0&&(t.value.shortterm=!0)}function M(){e.value=!1;const S=document.querySelector(".qc-header .qc-icon-btn");S&&S.focus()}function P(S){S.detail&&S.detail.open&&C()}function x(S){e.value&&S.key==="Escape"&&M()}return ba(()=>{window.addEventListener("qc:drawer",P),document.addEventListener("keydown",x)}),qa(()=>{window.removeEventListener("qc:drawer",P),document.removeEventListener("keydown",x)}),{state:a,TABS:mf,menus:r,currentPage:d,drawerOpen:e,drawerFocusRef:u,drawerExpanded:t,GROUP_LABELS:b,GROUPS:o,hasSub:i,toggleDrawerMenu:g,isDrawerSubActive:c,subLabel:D,goTab:k,goMenu:T,openDrawer:C,closeDrawer:M}}},pf={class:"qc-mobile-nav","aria-label":"移动端底部导航"},gf=["aria-current","onClick"],hf={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},yf={class:"qc-drawer-header"},bf={class:"qc-drawer-brand"},wf={class:"qc-drawer-body"},kf={key:0},_f={class:"qc-nav-group-label"},xf=["href","aria-current","onClick"],Sf={class:"qc-sidebar-label"},Cf=["aria-expanded","onClick"],qf={key:0,class:"qc-drawer-children"},Ef=["href","onClick"],Mf={class:"qc-drawer-footer"},Df=["title"];function Tf(a,e,u,t,r,d){var o,i;const b=Et("AppIcon");return fe(),ye(ut,null,[Me("nav",pf,[(fe(!0),ye(ut,null,bt(t.TABS,g=>(fe(),ye("button",{key:g.key,class:it(["qc-mobile-tab",{"is-active":t.currentPage===g.key}]),"aria-current":t.currentPage===g.key?"page":null,onClick:c=>t.goTab(g)},[rt(b,{name:g.icon,size:22},null,8,["name"]),Me("span",null,Ke(g.label),1)],10,gf))),128))]),(fe(),Zt(Md,{to:"body"},[t.drawerOpen?(fe(),ye("div",{key:0,class:"qc-drawer-backdrop",onClick:e[0]||(e[0]=(...g)=>t.closeDrawer&&t.closeDrawer(...g))})):Be("",!0),t.drawerOpen?(fe(),ye("div",hf,[Me("div",yf,[Me("div",bf,[e[4]||(e[4]=Me("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[Me("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),Me("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),Me("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),Me("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),Me("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),Me("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),Me("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),Me("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),Me("span",null,Ke(t.state.t("login.title")),1)]),Me("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:e[1]||(e[1]=(...g)=>t.closeDrawer&&t.closeDrawer(...g))},[rt(b,{name:"x",size:18})])]),Me("div",wf,[(fe(!0),ye(ut,null,bt(t.GROUPS,g=>(fe(),ye(ut,{key:g},[t.menus.some(c=>c.group===g)?(fe(),ye("div",kf,[Me("div",_f,Ke(t.GROUP_LABELS[g]),1),(fe(!0),ye(ut,null,bt(t.menus.filter(c=>c.group===g),c=>(fe(),ye("div",{key:c.key,class:"qc-drawer-menu"},[Me("div",{class:it(["qc-drawer-menu-row",{"is-active":t.currentPage===c.key}])},[Me("a",{class:it(["qc-sidebar-item",{"is-active":t.currentPage===c.key}]),href:"#"+c.key,"aria-current":t.currentPage===c.key?"page":null,onClick:_t(D=>t.hasSub(c)?t.toggleDrawerMenu(c):t.goMenu(c),["prevent"])},[rt(b,{name:c.iconName||"",size:18},null,8,["name"]),Me("span",Sf,Ke(c.name),1)],10,xf),t.hasSub(c)?(fe(),ye("button",{key:0,class:it(["qc-sidebar-chevron",{"is-open":t.drawerExpanded[c.key]}]),"aria-expanded":!!t.drawerExpanded[c.key],"aria-label":"展开子菜单",onClick:D=>t.toggleDrawerMenu(c)},[rt(b,{name:"chevron-down",size:14})],10,Cf)):Be("",!0)],2),t.drawerExpanded[c.key]?(fe(),ye("div",qf,[(fe(!0),ye(ut,null,bt(c.subPages,D=>(fe(),ye("a",{key:D,class:it(["qc-subnav-item",{"is-active":t.isDrawerSubActive(c,D)}]),href:"#"+c.key+"/"+D,onClick:_t(k=>t.goMenu(c,D),["prevent"])},[Me("span",null,Ke(t.subLabel(D)),1)],10,Ef))),128))])):Be("",!0)]))),128))])):Be("",!0)],64))),128))]),Me("div",Mf,[Me("button",{class:"qc-icon-btn",title:((o=t.state.currentTheme)==null?void 0:o.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:e[2]||(e[2]=g=>{var c;return t.state.changeThemeMode&&t.state.changeThemeMode(((c=t.state.currentTheme)==null?void 0:c.value)==="dark"?"light":"dark")})},[rt(b,{name:((i=t.state.currentTheme)==null?void 0:i.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,Df),Me("button",{class:"qc-icon-btn",title:"退出登录",onClick:e[3]||(e[3]=g=>t.state.handleLogout&&t.state.handleLogout())},[rt(b,{name:"log-out",size:18})])])])):Be("",!0)]))],64)}const Pf=sa(ff,[["render",Tf]]),Rf={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1},ctxContext:{type:String,default:"stock"}},emits:["select"],setup(a,{emit:e,slots:u}){const t=va("qcState");function r(c){e("select",c)}function d(c){const D=c.strategy_names||c.strategies||[],k=D.slice(0,3),T=D.length>3?D.length-3:0,C=k.map(M=>({text:M,more:!1}));return T&&C.push({text:"+"+T,more:!0}),C}function b(c){const D=Number(c);return isFinite(D)?D.toFixed(2):"—"}function o(c){const D=Number(c);return isFinite(D)?(D>0?"+":"")+D.toFixed(2)+"%":"—"}function i(c){const D=Number(c.consensus_level);return isFinite(D)?Math.round(D*100):0}function g(c){const D=Number(c&&c.consensus_level);return isFinite(D)&&D>0}return{state:t,slots:u,select:r,displayTags:d,fmtPrice:b,fmtChange:o,pctOf:i,hasConsensus:g}}},Af={class:"qc-stock-list"},zf=["data-copy-code","data-ctx-code","data-ctx-name","data-ctx-context","aria-label","onClick","onKeydown"],Lf={key:0,class:"qc-stock-rank"},If={class:"qc-stock-info"},Nf={class:"qc-stock-code"},Of={class:"qc-stock-code-num"},Ff={key:0,class:"qc-stock-status is-new"},Vf={key:1,class:"qc-stock-status is-out"},jf={class:"qc-stock-name"},Hf={key:0,class:"qc-stock-consensus"},Bf={key:1,class:"qc-stock-tags"},Kf={key:2,class:"qc-stock-badge"},Wf={key:3,class:"qc-stock-data"},Uf={class:"qc-stock-price"},Gf={key:4,class:"qc-stock-extra"},Yf={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},Qf=["data-copy-code","data-ctx-code","data-ctx-name","data-ctx-context","aria-label","onClick","onKeydown"],Jf={key:0,class:"qc-stock-rank"},Xf={class:"qc-stock-info"},$f={class:"qc-stock-code"},Zf={class:"qc-stock-code-num"},ep={key:0,class:"qc-stock-status is-new"},tp={key:1,class:"qc-stock-status is-out"},ap={class:"qc-stock-name"},sp={key:0,class:"qc-stock-consensus"},np={key:1,class:"qc-stock-tags"},lp={key:2,class:"qc-stock-badge"},ip={key:3,class:"qc-stock-data"},op={class:"qc-stock-price"},rp={key:4,class:"qc-stock-extra"},cp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function dp(a,e,u,t,r,d){const b=Et("qc-state-panel"),o=Et("qc-virtual-list");return fe(),ye("div",Af,[u.loading?(fe(),Zt(b,{key:0,type:"loading"})):u.items.length?(fe(),ye(ut,{key:2},[u.virtual?(fe(),Zt(o,{key:0,items:u.items,"row-height":u.rowHeight},{default:Xt(({item:i,index:g})=>[Me("div",{class:it(["qc-stock-row",{"is-active":u.activeCode===i.code}]),"data-copy-code":u.copyCode?i.code:void 0,"data-ctx-code":i.code,"data-ctx-name":i.name,"data-ctx-context":u.ctxContext,tabindex:"0",role:"button","aria-label":"查看 "+(i.name||"")+" "+(i.code||""),onClick:c=>t.select(i),onKeydown:[Kt(_t(c=>t.select(i),["prevent"]),["enter"]),Kt(_t(c=>t.select(i),["prevent"]),["space"])]},[u.showRank?(fe(),ye("div",Lf,Ke(g+1),1)):Be("",!0),Me("div",If,[Me("div",Nf,[Me("span",Of,Ke(i.code),1),i.status==="new"?(fe(),ye("span",Ff,Ke(u.statusText.new),1)):i.status==="out"?(fe(),ye("span",Vf,Ke(u.statusText.out),1)):Be("",!0)]),Me("div",jf,[$t(Ke(i.name)+" ",1),Bt(a.$slots,"name-suffix",{item:i,index:g})]),u.showConsensus&&t.hasConsensus(i)?(fe(),ye("span",Hf,Ke(t.pctOf(i))+"% 共识",1)):Be("",!0)]),(i.strategy_names||i.strategies)&&(i.strategy_names||i.strategies).length?(fe(),ye("div",Bf,[(fe(!0),ye(ut,null,bt(t.displayTags(i),c=>(fe(),ye("span",{key:c.text,class:it(["qc-stock-tag",{"is-more":c.more}])},Ke(c.text),3))),128))])):Be("",!0),u.showConsensus?(fe(),ye("span",Kf,Ke(i.strategy_count||0)+" 策略",1)):Be("",!0),u.showPrice&&i.price!=null?(fe(),ye("div",Wf,[Me("span",Uf,Ke(t.fmtPrice(i.price)),1),Me("span",{class:it(["qc-stock-change",i.change_pct>0?"is-up":i.change_pct<0?"is-down":""])},Ke(t.fmtChange(i.change_pct)),3)])):Be("",!0),t.slots.extra?(fe(),ye("div",Gf,[Bt(a.$slots,"extra",{item:i,index:g})])):Be("",!0),t.slots.actions?(fe(),ye("div",{key:5,class:"qc-stock-actions",onClick:e[0]||(e[0]=_t(()=>{},["stop"]))},[Bt(a.$slots,"actions",{item:i,index:g})])):Be("",!0),t.slots.footer?(fe(),ye("div",Yf,[Bt(a.$slots,"footer",{item:i,index:g})])):Be("",!0)],42,zf)]),_:3},8,["items","row-height"])):(fe(!0),ye(ut,{key:1},bt(u.items,(i,g)=>(fe(),ye("div",{key:i.code,class:it(["qc-stock-row",{"is-active":u.activeCode===i.code}]),"data-copy-code":u.copyCode?i.code:void 0,"data-ctx-code":i.code,"data-ctx-name":i.name,"data-ctx-context":u.ctxContext,tabindex:"0",role:"button","aria-label":"查看 "+(i.name||"")+" "+(i.code||""),onClick:c=>t.select(i),onKeydown:[Kt(_t(c=>t.select(i),["prevent"]),["enter"]),Kt(_t(c=>t.select(i),["prevent"]),["space"])]},[u.showRank?(fe(),ye("div",Jf,Ke(g+1),1)):Be("",!0),Me("div",Xf,[Me("div",$f,[Me("span",Zf,Ke(i.code),1),i.status==="new"?(fe(),ye("span",ep,Ke(u.statusText.new),1)):i.status==="out"?(fe(),ye("span",tp,Ke(u.statusText.out),1)):Be("",!0)]),Me("div",ap,[$t(Ke(i.name)+" ",1),Bt(a.$slots,"name-suffix",{item:i,index:g})]),u.showConsensus&&t.hasConsensus(i)?(fe(),ye("span",sp,Ke(t.pctOf(i))+"% 共识",1)):Be("",!0)]),(i.strategy_names||i.strategies)&&(i.strategy_names||i.strategies).length?(fe(),ye("div",np,[(fe(!0),ye(ut,null,bt(t.displayTags(i),c=>(fe(),ye("span",{key:c.text,class:it(["qc-stock-tag",{"is-more":c.more}])},Ke(c.text),3))),128))])):Be("",!0),u.showConsensus?(fe(),ye("span",lp,Ke(i.strategy_count||0)+" 策略",1)):Be("",!0),u.showPrice&&i.price!=null?(fe(),ye("div",ip,[Me("span",op,Ke(t.fmtPrice(i.price)),1),Me("span",{class:it(["qc-stock-change",i.change_pct>0?"is-up":i.change_pct<0?"is-down":""])},Ke(t.fmtChange(i.change_pct)),3)])):Be("",!0),t.slots.extra?(fe(),ye("div",rp,[Bt(a.$slots,"extra",{item:i,index:g})])):Be("",!0),t.slots.actions?(fe(),ye("div",{key:5,class:"qc-stock-actions",onClick:e[1]||(e[1]=_t(()=>{},["stop"]))},[Bt(a.$slots,"actions",{item:i,index:g})])):Be("",!0),t.slots.footer?(fe(),ye("div",cp,[Bt(a.$slots,"footer",{item:i,index:g})])):Be("",!0)],42,Qf))),128))],64)):(fe(),Zt(b,{key:1,type:"empty",title:u.emptyText},null,8,["title"]))])}const up=sa(Rf,[["render",dp]]),vp={name:"qc-detail-split",props:{enabled:{type:Boolean,default:!1},rootClass:{type:String,default:""},listClass:{type:String,default:""},paneClass:{type:String,default:""}}},mp={key:0,class:"split-divider","data-split-resize":""};function fp(a,e,u,t,r,d){return fe(),ye("div",{class:it(["detail-split-wrap",[u.rootClass,{"detail-split":u.enabled}]]),"data-split-root":""},[Me("div",{class:it(["detail-split-list",[u.listClass,{"w-100":!u.enabled}]])},[Bt(a.$slots,"list")],2),u.enabled?(fe(),ye("div",mp)):Be("",!0),u.enabled?(fe(),ye("div",{key:1,class:it(["detail-split-pane",u.paneClass])},[Bt(a.$slots,"pane")],2)):Be("",!0)],2)}const pp=sa(vp,[["render",fp]]),en={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",notification:"bell",about:"info"}},gp=200,hp={name:"qc-top-tabs",components:{AppIcon:aa},setup(){const a=va("qcState");if(!a)return{};const e=st(()=>a.currentPage&&a.currentPage.value||""),u=st(()=>a.currentSubPage&&a.currentSubPage.value||""),t=st(()=>a.menus&&a.menus.value||[]),r=st(()=>{const f=t.value.find(w=>w.key===e.value);return f&&f.subPages||[]}),d=st(()=>r.value.map(f=>({key:f,label:a.subPageNames&&a.subPageNames[f]||f,icon:en[e.value]&&en[e.value][f]||"circle-dot"}))),b=dt(null),o=dt(!1),i=dt(!1),g=dt(!1),c=dt(0);let D=null,k=null,T=0;function C(){const f=b.value;f&&(i.value=f.scrollLeft>2,g.value=f.scrollLeft<f.scrollWidth-f.clientWidth-2)}function M(){const f=b.value;if(!f){o.value=!1,i.value=!1,g.value=!1;return}o.value=f.scrollWidth>f.clientWidth+2,C(),c.value++}function P(){Xs(()=>{T&&cancelAnimationFrame(T),T=requestAnimationFrame(()=>{T=0,M(),x()})})}function x(){D||(D=new ResizeObserver(()=>{clearTimeout(k),k=setTimeout(M,100)})),b.value&&!D.__qcObserved&&(D.observe(b.value),D.__qcObserved=!0)}function S(f){const w=b.value;w&&w.scrollBy({left:f*gp,behavior:"smooth"})}function n(f){a.openTab?a.openTab(e.value,f):a.currentSubPage&&(a.currentSubPage.value=f)}function p(f){n(f),Xs(()=>{const w=b.value;if(!w)return;const z=w.querySelector('[data-tab-key="'+f+'"]');z&&z.scrollIntoView({block:"nearest",inline:"nearest"})})}const R=st(()=>{if(c.value,!o.value)return[];const f=b.value;if(!f)return[];const w=f.getBoundingClientRect(),z=new Set;return f.querySelectorAll(".qc-top-tab").forEach(F=>{const V=F.getBoundingClientRect();V.left>=w.left-2&&V.left<w.right-24&&z.add(F.getAttribute("data-tab-key"))}),d.value.filter(F=>!z.has(F.key))});function O(f,w){f.key==="ArrowLeft"?(f.preventDefault(),S(-1)):f.key==="ArrowRight"?(f.preventDefault(),S(1)):f.key==="Home"?(f.preventDefault(),S(-999)):f.key==="End"?(f.preventDefault(),S(999)):(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),n(w.key))}return Dd([d,u],()=>P(),{flush:"post",deep:!1}),ba(()=>{M(),x(),window.addEventListener("resize",M),P()}),Td(()=>{D&&D.disconnect(),window.removeEventListener("resize",M),clearTimeout(k),T&&cancelAnimationFrame(T)}),{state:a,tabs:d,currentSubPage:u,go:n,scrollRef:b,hasOverflow:o,canScrollLeft:i,canScrollRight:g,scrollByStep:S,scrollToTab:p,hiddenTabs:R,onTabKeydown:O,updateScrollState:C}}},yp={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},bp=["disabled"],wp=["data-tab-key","aria-selected","title","onClick","onKeydown"],kp={class:"qc-top-tab-label"},_p=["disabled"];function xp(a,e,u,t,r,d){const b=Et("AppIcon"),o=Et("el-dropdown-item"),i=Et("el-dropdown-menu"),g=Et("el-dropdown");return t.tabs.length?(fe(),ye("div",yp,[t.hasOverflow?(fe(),ye("button",{key:0,class:"qc-top-tabs-btn",disabled:!t.canScrollLeft,"aria-label":"向左滚动",onClick:e[0]||(e[0]=c=>t.scrollByStep(-1))},"‹",8,bp)):Be("",!0),Me("div",{ref:"scrollRef",class:it(["qc-header-tabs qc-top-tabs-scroll",{"has-overflow":t.hasOverflow}]),onScrollPassive:e[1]||(e[1]=(...c)=>t.updateScrollState&&t.updateScrollState(...c))},[(fe(!0),ye(ut,null,bt(t.tabs,c=>(fe(),ye("div",{key:c.key,"data-tab-key":c.key,class:it(["qc-top-tab",{"is-active":t.currentSubPage===c.key}]),role:"tab",tabindex:"0","aria-selected":t.currentSubPage===c.key?"true":"false",title:c.label,onClick:D=>t.go(c.key),onKeydown:D=>t.onTabKeydown(D,c)},[rt(b,{name:c.icon,size:14},null,8,["name"]),Me("span",kp,Ke(c.label),1)],42,wp))),128))],34),t.hasOverflow?(fe(),ye("button",{key:1,class:"qc-top-tabs-btn",disabled:!t.canScrollRight,"aria-label":"向右滚动",onClick:e[2]||(e[2]=c=>t.scrollByStep(1))},"›",8,_p)):Be("",!0),t.hasOverflow&&t.hiddenTabs.length?(fe(),Zt(g,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:t.scrollToTab},{dropdown:Xt(()=>[rt(i,null,{default:Xt(()=>[(fe(!0),ye(ut,null,bt(t.hiddenTabs,c=>(fe(),Zt(o,{key:c.key,command:c.key,class:it({"is-active":t.currentSubPage===c.key})},{default:Xt(()=>[rt(b,{name:c.icon,size:14},null,8,["name"]),$t(" "+Ke(c.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:Xt(()=>[e[3]||(e[3]=Me("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):Be("",!0)])):Be("",!0)}const Sp=sa(hp,[["render",xp]]),tn="qc.hideStaleBanner",Cp={upstream_unreachable:"上游数据源不可达",non_trading_hours:"当前非交易时段"},qp={name:"qc-data-stale-banner",components:{AppIcon:aa},setup(){const a=dt(!1),e=dt(!1),u=dt(!1),t=dt(0),r=dt(""),d=dt(0),b=dt(""),o=dt(!1),i=dt(!1),g=dt("");function c(){const S=localStorage.getItem("quant_token")||"";return S?{Authorization:"Bearer "+S}:{}}async function D(){if(localStorage.getItem("quant_token"))try{sessionStorage.getItem(tn)==="1"&&(a.value=!0);const n=await(await fetch("/api/reliability/freshness",{headers:c()})).json(),p=n&&n.data||{};u.value=!!p.calendar_stale,t.value=Number(p.stale_count)||0,r.value=p.expected_latest||"",d.value=Number(p.expected_age_days)||0,b.value=p.expected_source||""}catch{}finally{e.value=!0}}const k=st(()=>!e.value||a.value?!1:u.value||t.value>0),T=st(()=>b.value==="weekday_fallback"?"交易日历不可用，数据新鲜度无法判定":u.value?"行情数据停在 "+r.value+"，已 "+d.value+" 天未更新":t.value+" 项数据资产已过期"),C=st(()=>u.value?"期望最近交易日为 "+r.value+"（"+d.value+" 天前）。在该基准恢复前，交易类资产一律标记为「无法判定」，不再显示为新鲜。":"期望最近交易日本身已滞后，页面上的「新鲜」判定不可信；请先恢复交易数据源。");function M(){a.value=!0;try{sessionStorage.setItem(tn,"1")}catch{}}function P(){typeof window.__quantGoPage=="function"?window.__quantGoPage("system","datasource"):window.__quantState&&window.__quantState.activateTab&&window.__quantState.activateTab("system","datasource")}function x(S){const n=S&&S.detail||{};g.value=n.reason||"",i.value=!!n.degraded||n.state==="offline"}return ba(()=>{D(),window.addEventListener("qc:realtime",x)}),qa(()=>window.removeEventListener("qc:realtime",x)),{showStale:k,staleText:T,staleDetail:C,expanded:o,dismiss:M,gotoDataSource:P,rtDegraded:i,rtReason:g,RT_REASON_TEXT:Cp}}},Ep={key:0,class:"qc-stale-wrap"},Mp={key:0,class:"qc-stale-banner",role:"status"},Dp=["aria-expanded"],Tp={class:"qc-stale-text"},Pp={key:0,class:"qc-stale-detail"},Rp={key:1,class:"qc-rt-strip",role:"status"},Ap={key:0};function zp(a,e,u,t,r,d){const b=Et("AppIcon");return t.showStale||t.rtDegraded?(fe(),ye("div",Ep,[t.showStale?(fe(),ye("div",Mp,[rt(b,{name:"alert-triangle",size:14,class:"qc-stale-icon"}),Me("button",{class:"qc-stale-main","aria-expanded":t.expanded?"true":"false",onClick:e[2]||(e[2]=o=>t.expanded=!t.expanded)},[Me("span",Tp,Ke(t.staleText),1),Me("span",{class:"qc-stale-cta",onClick:e[0]||(e[0]=_t((...o)=>t.gotoDataSource&&t.gotoDataSource(...o),["stop"])),role:"link",tabindex:"0",onKeydown:e[1]||(e[1]=Kt(_t((...o)=>t.gotoDataSource&&t.gotoDataSource(...o),["prevent"]),["enter"]))},"查看数据源状态 →",32)],8,Dp),Me("button",{class:"qc-stale-close","aria-label":"关闭数据陈旧提示",onClick:e[3]||(e[3]=(...o)=>t.dismiss&&t.dismiss(...o))},"×"),t.expanded?(fe(),ye("div",Pp,Ke(t.staleDetail),1)):Be("",!0)])):Be("",!0),t.rtDegraded?(fe(),ye("div",Rp,[e[4]||(e[4]=Me("span",{class:"qc-rt-dot","aria-hidden":"true"},null,-1)),e[5]||(e[5]=$t(" 实时报价不可用",-1)),t.RT_REASON_TEXT[t.rtReason]?(fe(),ye("span",Ap,"（"+Ke(t.RT_REASON_TEXT[t.rtReason])+"）",1)):Be("",!0),e[6]||(e[6]=$t("，当前显示为延迟数据 ",-1))])):Be("",!0)])):Be("",!0)}const Lp=sa(qp,[["render",zp]]);(function(){const{ref:a,computed:e,inject:u}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
    `,setup(){const t=u("qcState");if(!t)return{};const r=a(!1),d=a(localStorage.getItem("qc.hideNonTradingBanner")==="1"),b=()=>{d.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},o=e(()=>t.marketData&&t.marketData.value||{}),i=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:t.menus,marketData:o,bannerDismissed:d,dismissBanner:b,goMerrill:i,currentPage:t.currentPage,currentSubPage:t.currentSubPage,currentUser:t.currentUser,currentPageName:t.currentPageName,searchQuery:t.searchQuery,searchStocks:t.searchStocks,onSearchSelect:t.onSearchSelect,selectedDate:t.selectedDate,onDateChange:t.onDateChange,disabledDate:t.disabledDate,refreshCalendarData:t.refreshCalendarData,exportCSV:t.exportCSV,loading:t.loading,lastLoadTime:t.lastLoadTime,showUserMenu:r,resetSetupWizard:t.resetSetupWizard,showChangePassword:t.showChangePassword,themes:t.themes,currentTheme:t.currentTheme,changeTheme:t.changeTheme,handleLogout:t.handleLogout,subPageNames:t.subPageNames,keyClick:t.keyClick,t:t.t,subTabLabel:function(g,c){const D="sub."+g.key+"."+c,k=t.t(D);if(k!==D)return k;const T="sub."+c,C=t.t(T);return C!==T&&C?C:t.subPageNames[c]||c}}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                </div>`,setup(){const e=a("qcState");if(!e)return{};const{ref:u,computed:t}=Vue,r=u(0),d=u(0),b=u(!1),o=t(()=>{const f={day:"date",week:"week",month:"month",year:"year"},w=e.currentView&&e.currentView.value||"day";return f[w]||"date"}),i={day:"日",week:"周",month:"月",year:"年"};function g(f){return e.t&&e.t("view."+f)||i[f]||f}function c(f){e.switchView?e.switchView(f):e.currentView&&(e.currentView.value=f)}let D=null;function k(f){const w=f.touches&&f.touches[0];w&&(r.value=w.clientX,d.value=w.clientY)}async function T(){if(!b.value){b.value=!0;try{await e.refreshCalendarData()}catch{}D&&clearTimeout(D),D=setTimeout(()=>{b.value=!1},500)}}function C(f){if(!(window.innerWidth<=768))return;const w=f.changedTouches&&f.changedTouches[0];if(!w)return;const z=window.__quantModules&&window.__quantModules.gestures||{};if((typeof z.judgePullToRefresh=="function"?z.judgePullToRefresh(d.value,w.clientY):w.clientY-d.value>=60)&&(window.scrollY||0)<=0){f.stopPropagation(),T();return}if(e.currentSubPage.value==="pool")return;const V=w.clientX-r.value,I=w.clientY-d.value;Math.abs(V)>50&&Math.abs(V)>Math.abs(I)*1.2&&(e.navigateDate(V<0?1:-1),f.stopPropagation())}const M=u(!1),P=u(!1),x=u(""),S=u(null),n=u([]);function p(f){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[f]||f}async function R(){if(e.selectedDate.value){M.value=!0,P.value=!0,x.value="",S.value=null,n.value=[];try{const f=await fetch("/api/calendar/"+e.selectedDate.value+"/compare"),w=await f.json();if(!f.ok)throw new Error(w.detail||"HTTP "+f.status);S.value=w;const z=w&&w.comparison||{},F=[];for(const V of Object.keys(z)){if(V==="all_intersection")continue;const I=z[V]||{},$=V.split("_vs_");F.push({label:p($[0])+" ↔ "+p($[1]),interCount:I.intersection_count||0,inter:(I.intersection||[]).join(", "),onlyS1Count:I.only_s1_count||0,onlyS1:(I.only_s1||[]).join(", "),onlyS2Count:I.only_s2_count||0,onlyS2:(I.only_s2||[]).join(", ")})}n.value=F}catch(f){x.value=String(f&&f.message?f.message:f)}finally{P.value=!1}}}let O="";return Vue.watch(()=>{const f=e.stockPool,w=f&&f.value||[];return{n:w.length,first:w[0]&&w[0].code,split:!!e.detailSplitEnabled.value}},(f,w)=>{if(!f.split||!f.first||f.n===0)return;const z=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,F=(e.stockPool.value||[]).some(V=>V.code===z);if(!(e.externalStockActive&&(!z&&e.externalStockActive(null)||z&&e.externalStockActive(z)))&&(!z||!F)){if(O===f.first&&z&&F===!1&&f.n>1)return;O=f.first,e.showStockDetail&&e.showStockDetail(f.first)}},{immediate:!0}),{...e,calType:o,pullRefreshing:b,onCalTouchStart:k,onCalTouchEnd:C,viewLabel:g,switchViewLocal:c,compareVisible:M,compareLoading:P,compareError:x,compareData:S,comparePairs:n,openStrategyCompare:R}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.strategiesPage=window.__quantModules.strategiesPage||{};window.__quantModules.strategiesPage.part1=`
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
    `;window.__quantModules=window.__quantModules||{};window.__quantModules.strategiesPage=window.__quantModules.strategiesPage||{};window.__quantModules.strategiesPage.view=window.__quantModules.strategiesPage.part1+window.__quantModules.strategiesPage.part2;(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:window.__quantModules.strategiesPage.view,setup(){const e=a("qcState"),u=Vue.ref(!1);if(!e)return{};const{computed:t}=Vue;let r=0;const d=t(()=>{var h;return((h=e.merrillData)==null?void 0:h.value)||{}}),b=t(()=>{var h;return((h=e.marketData)==null?void 0:h.value)||{}}),o=t(()=>{var h;return((h=e.dashboardData)==null?void 0:h.value)||{}}),i=t(()=>{var h;return((h=e.healthMetrics)==null?void 0:h.value)||[]}),g=t(()=>{var h;return((h=e.filteredConsensusRank)==null?void 0:h.value)||[]}),c=t(()=>{const h={};for(const L of g.value)L.code&&L.name&&(h[L.code]=L.name);return h}),D={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function k(h){return D[h]||h}const T=t(()=>b.value.date||o.value.latest_date||"-"),C=t(()=>{const h=b.value;return!h||Object.keys(h).length===0?"数据加载中...":h.is_trading_day&&h.in_trading_hours?"● 交易中":h.is_trading_day?"已收盘":"○ 非交易日"}),M=t(()=>{const h=d.value.next_stage_prediction;return h&&h.next_stage_name&&h.transition_probability>.2?`→${h.next_stage_name} ${(h.transition_probability*100).toFixed(2)}%`:""}),P=t(()=>{const h=[],L=o.value.pool_changes||{},Y=L.new_count||0;if(Y>0){const Pe=L.new_stock_names||{},qe=(L.new_stocks||[]).map(he=>Pe[he]||c.value[he]||he).slice(0,4).join("、");h.push({icon:"sparkles",level:"new",text:`今日新入池 ${Y} 只${qe?" · "+qe:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(e.currentPage.value="calendar",e.currentSubPage.value="pool"),e.statusFilter.value="new"}})}for(const Pe of i.value.filter(qe=>qe.degraded))h.push({icon:"alert-triangle",level:"warn",text:`数据源 ${k(Pe.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});const ce=d.value.timing;ce&&ce.progress_percent&&ce.progress_percent>100?h.push({icon:"clock",level:"warn",text:`美林「${d.value.name}」已超期 ${ce.progress_percent}%`,action:()=>{e.currentSubPage.value="merrill"}}):ce&&ce.maturity&&d.value.name&&h.push({icon:"clock",level:"info",text:`美林「${d.value.name}」阶段成熟度 ${ce.maturity}`,action:()=>{e.currentSubPage.value="merrill"}});const xe=b.value;return xe&&xe.is_trading_day===!1&&xe.date&&h.push({icon:"calendar",level:"info",text:`${xe.date} 非交易日`,action:()=>{e.currentSubPage.value="market"}}),h}),x=t(()=>{const h=[],L=d.value.name||"",Y=d.value.timing||{},ce=["复苏","成长","过热"],xe=["滞胀","衰退"];ce.some(Fe=>L.includes(Fe))&&h.push({kind:"opportunity",source:"美林",text:L+" 顺势",action:()=>{e.currentSubPage.value="merrill"}}),xe.some(Fe=>L.includes(Fe))&&h.push({kind:"risk",source:"美林",text:L+" 防守",action:()=>{e.currentSubPage.value="merrill"}}),Y.progress_percent&&Y.progress_percent>100&&h.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{e.currentSubPage.value="merrill"}});const Pe=o.value.pool_changes||{},qe=(Pe.new_count||0)-(Pe.out_count||0);qe>=3?h.push({kind:"opportunity",source:"池变动",text:"净入池 +"+qe,action:()=>{e.statusFilter.value="new",e.currentPage.value="calendar",e.currentSubPage.value="pool"}}):qe<=-3&&h.push({kind:"risk",source:"池变动",text:"净出池 "+qe,action:()=>{e.currentSubPage.value="consensus"}});const he=b.value.market_sentiment,Ve=he&&he.text||"";(Ve.includes("乐观")||Ve.includes("积极")||Ve.includes("亢奋"))&&h.push({kind:"opportunity",source:"情绪",text:Ve,action:()=>{e.currentSubPage.value="market"}}),(Ve.includes("悲观")||Ve.includes("恐慌")||Ve.includes("低迷"))&&h.push({kind:"risk",source:"情绪",text:Ve,action:()=>{e.currentSubPage.value="market"}});for(const Fe of i.value.filter(lt=>lt.degraded))h.push({kind:"risk",source:"数据",text:k(Fe.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});return h}),S=t(()=>{var h;return((h=e.merrillTimeline)==null?void 0:h.value)||e.merrillTimeline||{cycles:[]}}),n=t(()=>{var h;return((h=e.timelineLoading)==null?void 0:h.value)||!1});function p(h){const L=e.showStageDetail;typeof L=="function"&&L(h)}function R(h){const L=e.merrillStagesConfig,ce=(L&&L.value?L.value:L||{})[h]||{};return ce.color||ce.bg_color||"var(--color-primary)"}function O(h){const L=e.merrillStagesConfig,Y=L&&L.value?L.value:L||{};return Y[h]&&Y[h].name||""}function f(){const h=e.merrillStagesConfig;return h&&h.value?h.value:h||{}}function w(h){return f()[h]&&f()[h].description||""}const z=Vue.ref([]),F=Vue.ref(null),V=Vue.ref(!1),I=Vue.ref(!1),$=Vue.ref(7),W=Vue.ref(""),B=Vue.ref(""),K=Vue.computed(()=>{const h=new Set;return(z.value||[]).forEach(function(L){L.task&&h.add(L.task)}),Array.from(h).sort()}),q=Vue.computed(function(){const h=F.value&&F.value.success_rate||0;return h>=80?"color-success":h>=50?"color-warning":"color-danger"});function s(h,L){return h>0&&L/h>=.8?"status-ok":h>0&&L/h>=.5?"status-warn":"status-bad"}async function _(){const h=++r;V.value=!0,I.value=!1;try{const L=window.__quantModules&&window.__quantModules.core||{},Y=typeof L.authHeaders=="function"?L.authHeaders():{},ce=new URLSearchParams({days:String($.value)});W.value&&ce.set("task",W.value),B.value&&ce.set("status",B.value);const[xe,Pe]=await Promise.all([fetch("/api/system/execution-history?"+ce.toString(),{headers:Y}).then(function(qe){return qe.json()}),fetch("/api/system/execution-summary?days="+$.value,{headers:Y}).then(function(qe){return qe.json()})]);if(h!==r)return;z.value=xe&&xe.data||[],F.value=Pe&&Pe.data||null}catch(L){console.error("[execution] 执行数据加载失败:",L),I.value=!0}finally{h===r&&(V.value=!1)}}const l=window.__quantModules&&window.__quantModules.i18n||{},m=typeof l.t=="function"?l.t:function(h){return String(h)},J=Vue.ref([]),N=Vue.ref(null),E=Vue.ref(null),v=Vue.ref(""),A=Vue.ref([]),y=Vue.ref(!1);let j=null;const te=Vue.computed(function(){const h=E.value&&E.value.dates||[];return h.length&&!v.value&&(v.value=h[h.length-1].date),h}),re=Vue.computed(function(){const h=(J.value||[]).find(function(Y){return Y.enabled});if(!h||h.countdown_seconds==null)return"—";const L=h.countdown_seconds;return Math.floor(L/3600)+"h"+String(Math.floor(L%3600/60)).padStart(2,"0")+"m"}),se=Vue.computed(function(){const h=(J.value||[]).find(function(L){return L.enabled});if(!h||h.countdown_seconds==null||h.countdown_seconds<0)return"";try{return new Date(Date.now()+h.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),le=Vue.computed(function(){const h=N.value;return!h||h.phase==="idle"?m("exec.waiting"):h.phase==="running"?m("exec.running")+(h.current_sid?" · "+h.current_sid:""):h.phase==="done"?m("exec.done"):m("exec.failed")}),Q=Vue.computed(function(){return N.value&&N.value.phase==="running"?"loader":"check-circle-2"}),ie=Vue.computed(function(){const h=E.value&&E.value.dates||[];return h.length?h[h.length-1].date:"—"}),Ce=Vue.computed(function(){const h=E.value&&E.value.dates||[],L=h[h.length-1];return L&&L.visible?"color-success":"color-danger"}),ee=Vue.computed(function(){const h=E.value&&E.value.dates||[],L=h[h.length-1];return L?L.day_view_total:"—"});function X(h){const L=window.__quantModules&&window.__quantModules.core||{},Y=typeof L.authHeaders=="function"?L.authHeaders():{};return fetch(h,{headers:Y}).then(function(ce){return ce.json()})}async function be(){const h=++r;try{const[L,Y,ce]=await Promise.all([X("/api/strategies/execution/plan"),X("/api/strategies/execution/status"),X("/api/strategies/execution/results?days=7")]);if(h!==r)return;J.value=L&&L.data&&L.data.plans||[],N.value=Y&&Y.data||null,E.value=ce&&ce.data||null,N.value&&N.value.phase==="running"?H():me()}catch(L){console.error("[execution-monitor] 监控数据加载失败:",L)}}function H(){me(),j=setInterval(function(){X("/api/strategies/execution/status").then(function(h){N.value=h&&h.data||null,N.value&&N.value.phase!=="running"&&(me(),be())}).catch(function(){})},5e3)}function me(){j&&(clearInterval(j),j=null)}async function ue(h){if(!h)return;const L=++r;y.value=!0;try{const Y=await X("/api/strategies/execution/trace/"+encodeURIComponent(h));if(L!==r)return;const ce=Y&&Y.data||null;A.value=ce&&ce.steps||[]}catch(Y){console.error("[execution-trace] 追溯加载失败:",Y)}finally{L===r&&(y.value=!1)}}Vue.watch(function(){return e.currentSubPage&&e.currentSubPage.value},function(h){h==="execution"?(_(),be()):me()},{immediate:!0}),Vue.watch(function(){const h=e.currentSubPage&&e.currentSubPage.value,L=e.filteredConsensusRank&&e.filteredConsensusRank.value||[],Y=e.marketData&&e.marketData.value||{};return{sub:h,split:!!e.detailSplitEnabled.value,top5:L.slice(0,5),rank:L,indices:(Y.indices||[]).map(function(ce){return ce})}},function(h,L){if(h.split){if(h.sub==="overview"){if(!h.top5.length)return;const Y=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,ce=h.top5.some(function(xe){return xe.code===Y});(!Y||!ce)&&e.showStockDetail&&e.showStockDetail(h.top5[0].code)}else if(h.sub==="consensus"){if(!h.rank.length)return;const Y=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,ce=h.rank.some(function(xe){return xe.code===Y});(!Y||!ce)&&e.showStockDetail&&e.showStockDetail(h.rank[0].code)}else if(h.sub==="market"){if(!h.indices.length)return;const Y=e.indexDetail&&e.indexDetail.value&&e.indexDetail.value.code,ce=h.indices.some(function(xe){return xe.code===Y});(!Y||!ce)&&e.showIndexDetail&&e.showIndexDetail(h.indices[0])}}},{immediate:!0});const Z=Vue.ref("band"),de=["recession","recovery","overheating","stagflation"];function Ee(h){if(!h)return null;const L=String(h).split("-"),Y=parseInt(L[0],10),ce=parseInt(L[1]||"1",10);return isFinite(Y)?Y+(ce-1)/12:null}function we(h){const L=Math.floor(h);let Y=Math.round((h-L)*12)+1;return Y>12&&(Y=12),Y<1&&(Y=1),L+"-"+(Y<10?"0"+Y:""+Y)}function Ne(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.timing||{}}function Ye(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.color||"var(--color-success)"}function pe(h,L){const Y=Ne(),ce=Number(Y.avg_duration_months)||0,xe=Math.min(100,Number(Y.progress_percent)||0),Pe=Ee(Y.current_stage_start_date),qe=[];let he=null;if((h||[]).forEach(function(ne){const Xe=Ee(ne.start);he==null&&Xe!=null&&(he=Xe);const gt=!!(ne.is_current||Pe!=null&&Xe===Pe&&!ne.duration_months),wt=ne.name||O(ne.stage);if(gt&&ce>0){const vt=ce*xe/100;vt>.5&&qe.push({stage:ne.stage,name:wt,months:vt,live:!0,start:ne.start});const Mt=ce-vt;Mt>.5&&qe.push({stage:ne.stage,name:"剩余(预测)",months:Mt,ghost:!0,start:ne.start})}else{let vt=Number(ne.duration_months)||0;if(!vt&&Xe!=null){const Mt=Ee(ne.end);Mt!=null&&Mt>Xe&&(vt=Math.max(1,Math.round((Mt-Xe)*12)))}vt||(vt=1),qe.push({stage:ne.stage,name:wt,months:vt,live:gt,start:ne.start,end:ne.end})}if(gt&&L&&ce>0){const vt=e.merrillData&&e.merrillData.value&&e.merrillData.value.next_stage_prediction;vt&&qe.push({stage:vt.next_stage,name:(vt.next_stage_name||"下一阶段")+" (预测)",months:ce,ghost:!0,prob:vt.transition_probability})}}),!qe.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};const Ve=qe.reduce(function(ne,Xe){return ne+Xe.months},0)||1,Fe=he??0;let lt=0,at=0;const Ze=qe.map(function(ne){const Xe=lt;ne.ghost||(at+=ne.months),lt+=ne.months;const gt={stage:ne.stage,name:ne.name,months:Math.round(ne.months),ghost:!!ne.ghost,live:!!ne.live,prob:ne.prob,left:Xe/Ve*100,width:Math.max(2,ne.months/Ve*100)},wt=Ee(ne.start),vt=Ee(ne.end);return gt.start=wt!=null?we(wt):we(Fe+Xe/12),gt.end=vt!=null?we(vt):"",gt.predicted=wt==null,gt}),Ue=qe[qe.length-1],ft=qe.some(function(ne){return ne.ghost}),ae=Ue&&Ue.end?Ue.end:we(Fe+Ve/12);return{segs:Ze,axisStart:we(Fe),axisEnd:ae,nowPct:ft?at/Ve*100:null}}function oe(h){return(h.stages||[]).some(function(L){return L.is_current})}const ke=Vue.computed(function(){const h=e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[];if(!h.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};let L=null;for(let Y=h.length-1;Y>=0;Y--)if(oe(h[Y])){L=h[Y];break}return L||(L=h[h.length-1]),pe(L.stages,!0)});function He(h){const L=h&&h.stages?h.stages:[];if(!L.length)return"";const Y=L[0]&&L[0].start?String(L[0].start).slice(0,4):"",ce=L[L.length-1]||{},xe=ce.end?String(ce.end).slice(0,4):ce.start?String(ce.start).slice(0,4):"";return Y||xe?Y?Y+"–"+xe:xe:""}const Oe=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).filter(function(L){return!oe(L)}).map(function(L){return{label:L.label,years:He(L),segs:pe(L.stages,!1).segs}})}),$e=de,ge=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).map(function(L){const Y={};de.forEach(function(xe){Y[xe]=0});let ce=null;return(L.stages||[]).forEach(function(xe){Y[xe.stage]!=null&&(Y[xe.stage]+=Number(xe.duration_months)||0),xe.is_current&&(ce=xe.stage)}),{label:L.label,sum:Y,cur:ce}})}),Se=Vue.computed(function(){let h=0;return ge.value.forEach(function(L){de.forEach(function(Y){L.sum[Y]>h&&(h=L.sum[Y])})}),h||1}),Ae=Vue.computed(function(){const h=e.merrillSnapshots&&e.merrillSnapshots.value||[],L=[];return h.forEach(function(Y){const ce=L[L.length-1];ce&&ce.stage===Y.stage?(ce.count++,ce.last=Y.timestamp):L.push({stage:Y.stage,name:Y.stage_name||O(Y.stage),count:1,first:Y.timestamp,last:Y.timestamp})}),L}),ze=Vue.computed(function(){return Math.max(100,Math.min(200,Number(Ne().progress_percent)||0))}),Je=Vue.computed(function(){const h=Number(Ne().progress_percent)||0;return{width:Math.max(0,Math.min(100,h/ze.value*100))+"%",background:h>100?"linear-gradient(90deg, color-mix(in srgb, "+Ye()+" var(--bar-mix), var(--surface-card)), var(--bar-fill-warn))":"color-mix(in srgb, "+Ye()+" var(--bar-mix), var(--surface-card))"}}),Qe=Vue.computed(function(){return 100/ze.value*100}),Ge=Vue.computed(function(){const h=Ne().predicted_end;if(!h)return"";if(typeof h=="string")return h;const L=h.optimistic||h.earliest||"",Y=h.pessimistic||h.latest||"";return L&&Y?L+" ~ "+Y:h.base||h.mid||L||Y||""});var et=22;function tt(h){return"color-mix(in srgb, "+h+" "+et+"%, var(--surface-card))"}function ht(h){const L=R(h.stage);return h.ghost?{left:h.left+"%",width:h.width+"%",color:"var(--text-primary)",borderLeft:"3px solid "+L,background:"repeating-linear-gradient(45deg, "+tt(L)+" 0, "+tt(L)+" 5px, var(--surface-card) 5px, var(--surface-card) 10px)"}:{left:h.left+"%",width:h.width+"%",background:tt(L),color:"var(--text-primary)",borderLeft:"3px solid "+L}}function ve(h){const L=[h.name];return h.start&&L.push((h.predicted?"预计起始 ":"起始 ")+h.start+(h.end?" → "+h.end:"")),h.months&&L.push("约 "+h.months+" 个月"),h.ghost&&L.push("预测(尚未发生)"),h.prob!=null&&L.push("转移概率 "+(h.prob*100).toFixed(0)+"%"),L.join(" · ")}function _e(h,L){const Y=R(h),ce=Math.max(.28,L/Se.value),xe=Math.round(14+30*ce);return{background:"color-mix(in srgb, "+Y+" "+xe+"%, var(--surface-card))",color:"var(--text-primary)"}}const Le=Vue.computed(function(){const h=e.merrillData&&e.merrillData.value||e.merrillData||{},L=h.color||R(h.stage);return{background:"color-mix(in srgb, "+L+" 14%, var(--surface-card))",color:"color-mix(in srgb, "+L+" 48%, var(--text-primary))",borderColor:"color-mix(in srgb, "+L+" 26%, transparent)"}});return{...e,todayText:T,tradingStatus:C,merrillNext:M,todayFocus:P,todaySignals:x,merrillConfigOpen:u,getTimelineStageColor:R,getTimelineStageName:O,getTimelineStageDesc:w,merrillChipStyle:Le,mcHistView:Z,mcCurrentBand:ke,mcHistoryBands:Oe,mcStageKeys:$e,mcMatrix:ge,mcTrailRuns:Ae,mcProgStyle:Je,mcAvgMark:Qe,mcEndRange:Ge,mcSegStyle:ht,mcSegTitle:ve,mcMxCellStyle:_e,merrillTimeline:S,timelineLoading:n,showTimelineStage:p,execHistory:z,execSummary:F,execLoading:V,execError:I,execDays:$,execTaskFilter:W,execStatusFilter:B,execTaskOptions:K,execSuccessClass:q,loadExecutionData:_,execRateClass:s,execPlan:J,execStatus:N,execResults:E,execTraceDate:v,execTraceSteps:A,execTraceLoading:y,execResultsDates:te,execCountdownText:re,execNextRunText:se,execPhaseText:le,execStatusIcon:Q,execLastDate:ie,execVisibleClass:Ce,execVisibleText:ee,loadExecutionTrace:ue}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.systemPage=window.__quantModules.systemPage||{};window.__quantModules.systemPage.part1=`
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
                                    <!-- 6.3.5 (BUG-FIX): ① 解锁按钮/眼睛移出 #suffix —— 禁用输入框的 suffix 在 EP 2.14.5 下 pointer-events:none, 放里面点不动;
                                         ② 输入框取值补 v._revealed —— 原先只认 _editing, 眼睛验密成功后仍显示掩码 (查看密钥无效) -->
                                    <div class="key-field-row">
                                        <el-input :model-value="(v._editing || v._revealed) ? v.api_key : v._masked" :disabled="!v._editing" @update:model-value="val => { if (v._editing) { v.api_key = val; } else { v._masked = val; } }" placeholder="厂商级密钥，卡内模型共用"></el-input>
                                        <el-button size="small" :type="v._editing ? 'warning' : 'primary'" plain @click="toggleVendorEdit(v)"><qc-icon name="lock" :size="14" /> {{ v._editing ? '锁定' : '编辑密钥' }}</el-button>
                                        <span class="key-reveal-toggle" :title="v._revealed ? '收起（重新掩码）' : '查看完整密钥（需密码）'" @click="toggleVendorKeyReveal(v)" v-html="sanitizeHtml(viewIcon(v._revealed))"></span>
                                    </div>
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
                                <!-- 6.3.5 (BUG-FIX): 眼睛移出 #suffix 插槽 —— 禁用输入框的 suffix 不可点击 -->
                                <div class="key-field-row">
                                    <el-input :model-value="datasourceConfig.sxsc_tushare._revealed ? datasourceConfig.sxsc_tushare.token : datasourceConfig.sxsc_tushare._masked" :disabled="!datasourceConfig.sxsc_tushare._editing" @update:model-value="val => { if (datasourceConfig.sxsc_tushare._editing) { datasourceConfig.sxsc_tushare.token = val; if (!datasourceConfig.sxsc_tushare._revealed) datasourceConfig.sxsc_tushare._masked = val; } }" placeholder="输入 sxsc-tushare Token" @change="saveDatasourceConfig"></el-input>
                                    <span class="key-reveal-toggle" :title="datasourceConfig.sxsc_tushare._editing ? '锁定（重新掩码）' : '编辑（查看完整 Token，需密码）'" @click="toggleDatasourceEdit('sxsc_tushare')" v-html="sanitizeHtml(viewIcon(datasourceConfig.sxsc_tushare._editing))"></span>
                                </div>
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
                                <!-- 6.3.5 (BUG-FIX): 眼睛移出 #suffix 插槽 —— 禁用输入框的 suffix 不可点击 -->
                                <div class="key-field-row">
                                    <el-input :model-value="datasourceConfig.tushare._revealed ? datasourceConfig.tushare.token : datasourceConfig.tushare._masked" :disabled="!datasourceConfig.tushare._editing" @update:model-value="val => { if (datasourceConfig.tushare._editing) { datasourceConfig.tushare.token = val; if (!datasourceConfig.tushare._revealed) datasourceConfig.tushare._masked = val; } }" placeholder="输入 Tushare Token" @change="saveDatasourceConfig"></el-input>
                                    <span class="key-reveal-toggle" :title="datasourceConfig.tushare._editing ? '锁定（重新掩码）' : '编辑（查看完整 Token，需密码）'" @click="toggleDatasourceEdit('tushare')" v-html="sanitizeHtml(viewIcon(datasourceConfig.tushare._editing))"></span>
                                </div>
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
    `;window.__quantModules=window.__quantModules||{};window.__quantModules.systemPage=window.__quantModules.systemPage||{};window.__quantModules.systemPage.view=window.__quantModules.systemPage.part1+window.__quantModules.systemPage.part2;(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:window.__quantModules.systemPage.view,setup(){const e=a("qcState");if(!e)return{};function u(ae){e.currentSubPage.value=ae}function t(){Ne.value=!1,pe(),oe(),ke()}Vue.watch(()=>e.currentSubPage&&e.currentSubPage.value,ae=>{ae==="autoeval"&&e.loadAiVendors&&e.loadAiVendors(),ae==="datadict"&&se(),ae==="health"&&A(),ae==="notification"&&t(),ae==="datasource"&&x(),ae!=="usage"&&_()});const r=e.themeHues||[45,220,0,140,270,320,180,25,250,-1],d=e.themeHueNames||{},b=e.themeMode||Vue.computed(()=>"light"),o=e.themeHue||Vue.ref(45);function i(ae){e.changeThemeMode&&e.changeThemeMode(ae)}function g(ae){e.changeThemeHue&&e.changeThemeHue(parseInt(ae,10))}function c(ae){return e.hueColor?e.hueColor(ae):ae<0?"hsl(0, 0%, 46%)":"hsl("+ae+", 75%, 42%)"}function D(ae){return e.hueName?e.hueName(ae):d[ae]||"自定义 "+ae}function k(ae){e.setNavMode&&e.setNavMode(ae)}const T=Vue.ref([]),C=Vue.ref([]),M=Vue.ref(!1),P=Vue.ref(!1);async function x(){M.value=!0,P.value=!1;try{const ne=await(await fetch("/api/meta/freshness")).json();ne&&ne.success?C.value=ne.items||[]:P.value=!0}catch{P.value=!0}M.value=!1}const S=Vue.ref(""),n=Vue.ref("read"),p=Vue.ref(""),R=Vue.ref(!1),O=()=>window.__quantModules&&window.__quantModules.core||{},f=Vue.ref([]),w=Vue.ref(!1);async function z(){w.value=!0;try{const ae=await fetch("/api/audit/logs?limit=20",{headers:O().authHeaders?O().authHeaders():{}}).then(function(ne){if(!ne.ok)throw new Error("HTTP "+ne.status);return ne.json()});f.value=ae&&ae.logs||[]}catch(ae){console.error("[system] 审计加载失败:",ae),f.value=[]}finally{w.value=!1}}const F=Vue.ref(!1),V=Vue.ref(null),I=Vue.ref(null),$=Vue.ref([]),W=Vue.ref(null);function B(ae){return ae==="completed"?"完成":ae==="running"?"运行中":ae==="pending"?"排队中":ae==="cancelled"?"已取消":"失败"}async function K(){try{const ne=await(await fetch("/api/jobs?limit=20")).json();ne&&ne.success&&($.value=ne.data&&ne.data.tasks||[])}catch(ae){console.warn("[system] 加载任务队列失败:",ae)}}async function q(ae){try{await fetch("/api/jobs/"+ae+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),K()}catch(ne){console.warn("[system] 取消任务失败:",ne)}}function s(){K(),W.value=window.setInterval(K,15e3)}function _(){W.value&&(clearInterval(W.value),W.value=null)}Vue.onBeforeUnmount&&Vue.onBeforeUnmount(function(){_()});const l=Vue.ref({items:[]}),m=Vue.ref([]),J=Vue.ref(null),N=Vue.ref({data_sources:[],alerts:[]}),E=function(){return O().authHeaders?O().authHeaders():{}},v=function(ae){return fetch(ae,{headers:E()}).then(function(ne){if(!ne.ok)throw new Error("HTTP "+ne.status);return ne.json()})};async function A(){F.value=!0,V.value=null;try{const[ae,ne,Xe,gt]=await Promise.all([v("/api/reliability/freshness"),v("/api/reliability/heal-history?limit=20"),v("/api/reliability/startup-report"),v("/api/reliability/source-health")]);l.value=ae&&ae.data||{items:[]},m.value=ne&&ne.data||[],J.value=Xe&&Xe.data||null,N.value=gt||{data_sources:[],alerts:[]},I.value=new Date().toLocaleTimeString()}catch(ae){console.warn("[health] 加载失败:",ae),V.value="健康数据加载失败: "+(ae.message||""),l.value={items:[]},m.value=[]}finally{F.value=!1}}const y=Vue.ref(!1),j=Vue.ref(""),te=Vue.ref(""),re=Vue.ref({fields:[]});async function se(){y.value=!0,j.value="";try{const ae="/api/data-dict"+(te.value?"?category="+te.value:""),ne=await v(ae);re.value=ne&&ne.data||{fields:[]}}catch(ae){console.warn("[dict] 加载失败:",ae),j.value="数据字典加载失败: "+(ae.message||""),re.value={fields:[]}}finally{y.value=!1}}function le(ae){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[ae]||"var(--text-secondary)"}function Q(ae){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[ae]||ae}const ie=Vue.computed(()=>(l.value?l.value.items||[]:[]).filter(ne=>ne.status==="stale"||ne.status==="missing").length),Ce=Vue.ref("rules"),ee=Vue.ref([]),X=Vue.ref([]),be=Vue.ref([]),H=Vue.ref(!1),me=Vue.ref(""),ue=Vue.ref("price_above"),Z=Vue.ref(""),de=Vue.ref(!1),Ee=Vue.ref(60),we=Vue.ref(""),Ne=Vue.ref(!1);function Ye(ae){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[ae]||ae}async function pe(){H.value=!0,Ne.value=!1;try{const ae=await(await fetch("/api/alerts/rules")).json();ee.value=ae&&ae.rules||[]}catch(ae){we.value="规则加载失败: "+ae,Ne.value=!0}finally{H.value=!1}}async function oe(){H.value=!0,Ne.value=!1;try{const ae=await(await fetch("/api/alerts/history?limit=50")).json();X.value=ae&&ae.history||[]}catch(ae){we.value="历史加载失败: "+ae,Ne.value=!0}finally{H.value=!1}}async function ke(){H.value=!0,Ne.value=!1;try{const ae=await(await fetch("/api/alerts/channels")).json(),ne=await(await fetch("/api/alerts/silence")).json();be.value=ae&&ae.channels||[],de.value=!!(ne&&ne.silenced)}catch(ae){we.value="通道状态加载失败: "+ae,Ne.value=!0}finally{H.value=!1}}function He(ae){Ce.value=ae,ae==="rules"?pe():ae==="history"?oe():ke()}async function Oe(){const ae=me.value.trim();if(!ae){we.value="请填写股票代码";return}H.value=!0;try{const ne={stock_code:ae,rule_type:ue.value};if(ue.value!=="new_pool"){const gt=Number(Z.value);if(isNaN(gt)){we.value="阈值必须为数值";return}ne.threshold=gt}const Xe=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ne)})).json();Xe&&Xe.rule?(we.value="规则已添加",me.value="",Z.value="",pe()):we.value=Xe&&Xe.detail||"添加失败"}catch(ne){we.value="添加失败: "+ne}finally{H.value=!1}}async function $e(ae){try{await fetch("/api/alerts/rules/"+ae.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!ae.enabled})}),ae.enabled=!ae.enabled}catch(ne){we.value="切换失败: "+ne}}async function ge(ae){try{const ne=await(await fetch("/api/alerts/rules/"+ae.id,{method:"DELETE"})).json();ne&&ne.success?(we.value="规则已删除",pe()):we.value="删除失败"}catch(ne){we.value="删除失败: "+ne}}async function Se(){try{const ae=de.value?Ee.value:0,ne=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:ae})})).json();de.value=!!(ne&&ne.silenced),we.value=de.value?"已静默":"已恢复推送"}catch(ae){we.value="静默设置失败: "+ae}}async function Ae(){de.value=!1,await Se()}function ze(ae){return!!ae&&!ae.degraded}const Je=Vue.computed(()=>(e&&e.analyticsRank&&e.analyticsRank.value||[]).reduce((ne,Xe)=>Math.max(ne,Xe.views||0),0)||1),Qe=()=>O().OPENAPI_ROUTE_BASE||"/api/openapi";async function Ge(){R.value=!0;try{const ae=await O().apiFetch(Qe()+"/keys");T.value=ae&&ae.data||[]}catch(ae){ElementPlus.ElMessage.error("加载 API Key 失败: "+(ae.message||""))}finally{R.value=!1}}async function et(){try{const ae=await O().apiFetch(Qe()+"/keys",{method:"POST",body:JSON.stringify({name:S.value||"未命名",role:n.value||"read",expire_days:365})});ae&&ae.success?(p.value=ae.api_key||"",S.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await Ge()):ElementPlus.ElMessage.error(ae&&(ae.detail||ae.message)||"生成失败")}catch(ae){ElementPlus.ElMessage.error("生成失败: "+(ae.message||""))}}async function tt(){if(p.value)try{await navigator.clipboard.writeText(p.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function ht(ae){try{const ne=await O().apiFetch(Qe()+"/keys/"+ae.id,{method:"DELETE"});ne&&ne.success?(ElementPlus.ElMessage.success("Key 已吊销"),p.value&&ae.prefix&&p.value.includes(ae.prefix)&&(p.value=""),await Ge()):ElementPlus.ElMessage.error(ne&&(ne.detail||ne.message)||"吊销失败")}catch(ne){ElementPlus.ElMessage.error("吊销失败: "+(ne.message||""))}}const ve={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function _e(ae){return ve[ae]||ae}const Le=computed(()=>{var ae;return(((ae=e.healthMetrics)==null?void 0:ae.value)||[]).map(ne=>({name:_e(ne.name),source:ne.name,success_rate:ne.success_rate,avg_latency_ms:ne.avg_latency_ms,calls:ne.calls||0,degraded:!!ne.degraded,data_age_hours:ne.data_age_hours!=null?ne.data_age_hours:null,stale:!!ne.stale,last_fetch:ne.last_fetch||ne.last_success||null}))});function h(ae){return ae.degraded?"degraded":ae.success_rate==null?"unknown":ae.success_rate>=90?"ok":ae.success_rate>=60?"warn":"bad"}function L(ae){return ae==null?"":ae<1?"刚刚":ae<24?Math.round(ae)+"小时前":Math.floor(ae/24)+"天前"}const Y=e.aiUsage||Vue.ref({}),ce=Vue.computed(()=>{const ae=Y.value&&Y.value.by_model||{};return Object.entries(ae).map(([ne,Xe])=>({name:ne,count:Xe})).sort((ne,Xe)=>Xe.count-ne.count)}),xe=Vue.computed(()=>ce.value.reduce((ae,ne)=>Math.max(ae,ne.count),0)||1),Pe=Vue.computed(()=>ce.value.reduce((ae,ne)=>ae+ne.count,0)||1),qe=Vue.computed(()=>he.value.reduce((ae,ne)=>Math.max(ae,ne.count),0)||0),he=Vue.computed(()=>{const ae=Y.value&&Y.value.by_day||{},ne=[],Xe=new Date;for(let gt=29;gt>=0;gt--){const wt=new Date(Xe.getFullYear(),Xe.getMonth(),Xe.getDate()-gt),vt=wt.getFullYear()+"-"+String(wt.getMonth()+1).padStart(2,"0")+"-"+String(wt.getDate()).padStart(2,"0");ne.push({day:vt,count:ae[vt]||0})}return ne}),Ve=Vue.computed(()=>he.value.reduce((ae,ne)=>Math.max(ae,ne.count),0)||1),Fe=Vue.computed(()=>{const ae=Y.value&&Y.value.by_day||{},ne=new Date,Xe=ne.getFullYear()+"-"+String(ne.getMonth()+1).padStart(2,"0")+"-"+String(ne.getDate()).padStart(2,"0");return ae[Xe]||0}),lt=Vue.computed(()=>{const ae=Y.value&&Y.value.by_day||{},ne=Object.keys(ae).filter(Xe=>(ae[Xe]||0)>0);return ne.length?ne[ne.length-1]:""});function at(ae){e.analyticsDays&&(e.analyticsDays.value=ae),typeof e.loadAnalytics=="function"&&e.loadAnalytics()}const Ze='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',Ue='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function ft(ae){return ae?Ue:Ze}return s(),{...e,themeHues:r,themeHueNames:d,themeMode:b,themeHue:o,onThemeModeChange:i,setThemeHue:g,hueColor:c,hueName:D,onNavModeChange:k,analyticsMaxViews:Je,aiModelRank:ce,aiModelMax:xe,aiDayTrend:he,aiDayMax:Ve,todayAiCalls:Fe,lastAiCallDay:lt,aiTotal:Pe,aiDayPeak:qe,setAnalyticsDays:at,viewIcon:ft,openApiKeys:T,openApiKeyName:S,openApiKeyRole:n,newOpenApiKey:p,openApiLoading:R,loadOpenApiKeys:Ge,generateOpenApiKey:et,copyOpenApiKey:tt,revokeOpenApiKey:ht,healthRows:Le,healthClass:h,fmtAge:L,staleAssetCount:ie,jobQueue:$,loadJobQueue:K,cancelJob:q,jobStatusText:B,auditLogs:f,auditLoading:w,loadAuditLogs:z,healthLoading:F,healthError:V,healthUpdatedAt:I,freshnessData:l,healHistory:m,startupReport:J,sourceHealth:N,refreshHealth:A,statusColor:le,statusLabel:Q,sourceOk:ze,dictLoading:y,dictError:j,dictCategory:te,dictData:re,loadDataDict:se,ncTab:Ce,ncRules:ee,ncHistory:X,ncChannels:be,ncLoading:H,ncNewCode:me,ncNewType:ue,ncNewThreshold:Z,ncSilence:de,ncSilenceMinutes:Ee,ncMsg:we,ncTypeLabel:Ye,onNcTab:He,loadAlertRules:pe,loadAlertHistory:oe,loadAlertChannels:ke,addAlertRule:Oe,toggleAlertRule:$e,removeAlertRule:ge,applySilence:Se,clearSilence:Ae,freshnessItems:C,freshnessLoading:M,freshnessError:P,loadFreshness:x,ncError:Ne,goSystemSub:u}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.aiPage=window.__quantModules.aiPage||{};window.__quantModules.aiPage.part1=`
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
                                    {{ realtimeDegraded ? realtimeDegradedText() : REALTIME_FALLBACK_TEXT }}
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
                </div>`;window.__quantModules=window.__quantModules||{};window.__quantModules.aiPage=window.__quantModules.aiPage||{};window.__quantModules.aiPage.view=window.__quantModules.aiPage.part1+window.__quantModules.aiPage.part2;(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:window.__quantModules.aiPage.view,setup(){const{ref:e,watch:u,onUnmounted:t}=Vue,r=a("qcState");if(!r)return{};function d(){if(!r.hasMoreAiHistory||!r.loadMoreAiHistory||r.currentPage.value!=="ai"||r.currentSubPage.value!=="history")return;const H=document.documentElement;H.scrollTop+window.innerHeight>=H.scrollHeight-300&&r.loadMoreAiHistory()}window.addEventListener("scroll",d,{passive:!0}),t(()=>window.removeEventListener("scroll",d));const b=e(null),o=e(!1),i=e(!1),g=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function c(H){return!H||H.total===0||H.rate===null||H.rate===void 0?"--":H.rate.toFixed(2)+"%"}const D=e(5);function k(H){D.value=H}function T(H,me){if(!H)return"--";if(H.available===!1)return"— 数据不可达";const ue=H["hit_n"+me];return ue===!0?"✓ 命中":ue===!1?"✗ 未中":"– 中性/待验证"}async function C(){o.value=!0,i.value=!1;try{const me=await(await fetch("/api/ai/track")).json();b.value=me&&me.success?me.data:null}catch(H){console.warn("[eval-track] 评估命中率加载失败:",H),b.value=null,i.value=!0}finally{o.value=!1}}u(function(){return r.currentPage.value+"/"+r.currentSubPage.value},function(H){H==="ai/evaluation-analysis"&&C()},{immediate:!0});const M=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:P,summary:x,trades:S,loading:n,loadError:p,showAddForm:R,addForm:O,addSaving:f,tradeFormVisible:w,tradeForm:z,tradeSaving:F,portfolioTab:V,equityDays:I,equityLoading:$,equityNote:W,equityHasData:B,loadPortfolio:K,addPosition:q,removePosition:s,openTradeForm:_,submitTrade:l,loadTrades:m,loadEquity:J,fmtSigned:N,fmtSignedPct:E,signClass:v,riskTab:A,riskLoading:y,riskNote:j,riskHasData:te,riskData:re,riskMetricList:se,loadRisk:le}=M;u(P,function(H){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((H||[]).map(function(me){return{code:me.stock_code,name:me.stock_name||me.stock_code}}))},{deep:!0}),u(function(){return r.currentPage.value+"/"+r.currentSubPage.value},function(H){H==="ai/portfolio"?(K(),m(),J(I?I.value:30),typeof le=="function"&&le()):H==="ai/overview"&&K()},{immediate:!0});let Q="",ie=!1;u(function(){const H=r.currentSubPage&&r.currentSubPage.value,me=!!(r.detailSplitEnabled&&r.detailSplitEnabled.value),ue={sub:H,split:me,kind:"",view:"",key:"",first:null,expandList:null,expandFn:null};if(H==="history"){const Z=r.aiHistoryView&&r.aiHistoryView.value||"date",de=Z==="date"?r.groupedByDate:Z==="month"?r.groupedByMonth:r.aiHistoryByStock,Ee=de&&de.value||{},we=Object.keys(Ee);ue.kind="history",ue.view=Z,ue.key=we.length?we[0]:"",ue.first=we.length&&(Ee[we[0]]||[])[0]||null,ue.expandList=Z==="date"?r.expandedDates:Z==="month"?r.expandedMonths:r.expandedStocks,ue.expandFn=Z==="date"?r.toggleDateExpand:Z==="month"?r.toggleMonthExpand:r.toggleStockExpand}else if(H==="chat_history"){const Z=r.chatHistoryView&&r.chatHistoryView.value||"date",de=Z==="date"?r.chatGroupedByDate:Z==="month"?r.chatGroupedByMonth:r.chatGroupedByStock,Ee=de&&de.value||{},we=Object.keys(Ee);ue.kind="chat",ue.view=Z,ue.key=we.length?we[0]:"",ue.first=we.length&&(Ee[we[0]]||[])[0]||null,ue.expandList=Z==="date"?r.expandedChatDates:Z==="month"?r.expandedChatMonths:r.expandedChatStocks,ue.expandFn=Z==="date"?r.toggleChatDateExpand:Z==="month"?r.toggleChatMonthExpand:r.toggleChatStockExpand}return ue},function(H){if(!H.split||!H.first||!H.kind)return;const me=H.sub!==Q,ue=r.stockDetail&&r.stockDetail.value,Z=!!(ue&&ue.stock);if(!me&&Z||ie)return;Q=H.sub,ie=!0;try{H.key&&H.expandList&&H.expandFn&&H.expandList.value&&H.expandList.value.indexOf(H.key)<0&&H.expandFn(H.key)}catch{}const de=H.kind==="history"?r.viewAiResult(H.first):r.viewChatSession(H.first);de&&typeof de.finally=="function"?de.finally(function(){ie=!1}):ie=!1},{immediate:!0});const Ce=e({error:!1,empty:!1}),ee=e(null);function X(H){H&&(Ce.value=H)}function be(){const H=ee.value;H&&typeof H.loadAll=="function"&&H.loadAll()}return{...r,trackData:b,trackLoading:o,trackError:i,trackWindows:g,fmtTrackRate:c,loadTrack:C,trackWindow:D,setTrackWindow:k,trackHitText:T,focusState:Ce,focusViewRef:ee,onFocusLoadState:X,reloadFocus:be,positions:P,summary:x,trades:S,loading:n,loadError:p,showAddForm:R,addForm:O,addSaving:f,tradeFormVisible:w,tradeForm:z,tradeSaving:F,portfolioTab:V,equityDays:I,equityLoading:$,equityNote:W,equityHasData:B,loadPortfolio:K,addPosition:q,removePosition:s,openTradeForm:_,submitTrade:l,loadTrades:m,loadEquity:J,fmtSigned:N,fmtSignedPct:E,signClass:v,riskTab:A,riskLoading:y,riskNote:j,riskHasData:te,riskData:re,riskMetricList:se,loadRisk:le}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.marketReview={create:function(a){const{ref:e,seqOf:u,authHeaders:t}=a,r=e([]),d=e(!1),b=e(!1),o=e(""),i=e(null),g=e(!1),c=e(!1);async function D(){const R=u("marketReviews"),O=++R.n;d.value=!0,b.value=!1;try{const f=await fetch("/api/market/reviews?limit=30",{headers:t()}).then(w=>w.json());if(O!==R.n)return;f&&f.success?r.value=Array.isArray(f.data)?f.data:[]:b.value=!0}catch(f){console.error("[market-review] 复盘列表加载失败:",f),b.value=!0}finally{d.value=!1}}function k(R){o.value=R,x(R)}function T(R){o.value===R?P():k(R)}function C(R){return R==null||isNaN(Number(R))?"—":(Number(R)>=0?"+":"")+Number(R).toFixed(2)+"%"}function M(R){return R==null||isNaN(Number(R))?"—":Number(R).toFixed(2)}function P(){o.value="",i.value=null,c.value=!1}async function x(R){const O=u("marketReviewDetail"),f=++O.n;g.value=!0,c.value=!1,i.value=null;try{const w=R?"/api/market/review?date="+encodeURIComponent(R):"/api/market/review",z=await fetch(w,{headers:t()}).then(F=>F.json());if(f!==O.n)return;z&&z.success?i.value=z.data:c.value=!0}catch(w){console.error("[market-review] 复盘详情加载失败:",w),c.value=!0}finally{g.value=!1}}function S(R){return R>0?"up":R<0?"down":"flat"}function n(R){return R==null||isNaN(Number(R))?"—":(R>0?"+":"")+Number(R).toFixed(2)+"%"}function p(R){const O={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(R||{}).map(function(f){const w=f[0],z=f[1],F=!z||z==="unavailable"||z==="数据不可达";return{label:O[w]||w,value:F?"数据不可达":z,unavailable:F}})}return{marketReviews:r,marketReviewLoading:d,marketReviewError:b,selectedReviewDate:o,marketReviewDetail:i,marketReviewDetailLoading:g,marketReviewDetailError:c,loadMarketReviews:D,openMarketReview:k,toggleMarketReviewDate:T,backToMarketReviewList:P,loadMarketReviewDetail:x,marketReviewChgClass:S,marketReviewChgText:n,marketReviewSrcEntries:p,fmtPct:C,fmtEmotion:M}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.factor={create:function(a){const{ref:e,seqOf:u,withAuth:t,authHeaders:r,activeStrategyId:d,paramValues:b}=a,o=window.__quantModules&&window.__quantModules.i18n||{},i=typeof o.t=="function"?o.t:function(F){return String(F)},g=e("mom20"),c=e(!1),D=e(!1),k=e(null),T=e(null),C=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],M=e('{"top_n":[10,20,30]}'),P=e(null),x=e(""),S=e(!1),n=e(null);async function p(){if(!d.value){ElementPlus.ElMessage.warning("请先选择策略");return}let F;try{F=JSON.parse(M.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!F||Object.keys(F).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}S.value=!0,P.value=null,x.value="";try{const V=await fetch("/api/strategies/"+d.value+"/sweep",{method:"POST",headers:r(),body:JSON.stringify({param_grid:F})}).then(function(I){return I.json()});V&&Array.isArray(V.results)?(P.value=V.results,x.value="完成 "+V.count+" 组"+(V.data_degraded?" (数据不可达, 结果降级)":""),n.value=V.param_stability||null):x.value=V&&V.detail||"扫描失败"}catch(V){console.error("[sweep]",V),x.value="扫描失败: "+V.message}finally{S.value=!1}}async function R(){const F=u("factorIc"),V=++F.n;c.value=!0;try{const I=await t("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:d.value||"multi_factor",factor_key:g.value,params:b.value||{}})}).then(function(W){return W.json()});if(V!==F.n)return;const $=I&&I.report?I.report.n1||{}:{};k.value=$}catch(I){console.error("[research] 因子IC分析失败:",I),ElementPlus.ElMessage.error(i("msg.factorIcFailed",{msg:I.message}))}finally{c.value=!1}}async function O(){const F=u("factorLayer"),V=++F.n;D.value=!0;try{const I=await t("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:d.value||"multi_factor",factor_key:g.value,params:b.value||{}})}).then(function($){return $.json()});if(V!==F.n)return;I&&I.layers?T.value=I:ElementPlus.ElMessage.warning(i("msg.layerBacktest",{msg:I.message||i("msg.noData")}))}catch(I){console.error("[research] 分层回测失败:",I),ElementPlus.ElMessage.error(i("msg.layerBacktestFailed",{msg:I.message}))}finally{D.value=!1}}const f=e(null),w=e(!1);async function z(){const F=u("factorDetail"),V=++F.n;w.value=!0,f.value=null;try{const I=await t("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:d.value||"multi_factor",factor_key:g.value,params:b.value||{}})}).then(function($){return $.json()});if(V!==F.n)return;I&&I.detail?f.value=I.detail:ElementPlus.ElMessage.warning(i("msg.factorDetail",{msg:I.message||i("msg.noData")}))}catch(I){console.error("[research] 因子详情失败:",I),ElementPlus.ElMessage.error(i("msg.factorDetailFailed",{msg:I.message}))}finally{w.value=!1}}return{factorKey:g,factorIcLoading:c,factorLayerLoading:D,factorIcReport:k,factorLayerResult:T,factorOptions:C,runFactorIc:R,runFactorLayer:O,factorDetail:f,factorDetailLoading:w,runFactorDetail:z,sweepGrid:M,sweepResult:P,sweepMessage:x,sweepLoading:S,sweepStability:n,runSweep:p}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.history={create:function(a){const{seqOf:e,state:u}=a,t=Vue.ref([]),r=Vue.ref(!1),d=Vue.ref(!1),b=Vue.ref(""),o=Vue.ref([]),i=Vue.ref(""),g=Vue.ref([]),c=Vue.ref(!1),D=Vue.ref(!1),k={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function T(O){return k[O]||O||"—"}function C(O){u&&u.navigateTo&&u.navigateTo("shortterm",O)}function M(){u.currentSubPage.value="research-history",P()}async function P(){const O=e("researchHistory"),f=++O.n;r.value=!0,d.value=!1;try{const w=window.__quantModules&&window.__quantModules.core||{},z=typeof w.authHeaders=="function"?w.authHeaders():{},F=b.value?"?type="+encodeURIComponent(b.value):"",V=await fetch("/api/strategies/research-history"+F,{headers:z}).then(function(I){return I.json()});if(f!==O.n)return;t.value=V&&V.items||[]}catch(w){console.error("[research-history] 加载失败:",w),d.value=!0}finally{r.value=!1}}async function x(){const O=e("researchExport"),f=++O.n;D.value=!0;try{const w=window.__quantModules&&window.__quantModules.core||{},z=typeof w.authHeaders=="function"?w.authHeaders():{},F=b.value?"?type="+encodeURIComponent(b.value):"",V=await fetch("/api/strategies/research-history/export"+F,{headers:z});if(!V.ok)throw new Error("HTTP "+V.status);const I=await V.blob();if(f!==O.n)return;const $=URL.createObjectURL(I),W=document.createElement("a");W.href=$,W.download="research_history.csv",document.body.appendChild(W),W.click(),document.body.removeChild(W),URL.revokeObjectURL($)}catch(w){console.error("[research-history] 导出失败:",w)}finally{D.value=!1}}function S(O){const f=o.value.indexOf(O);f>=0?o.value.splice(f,1):o.value.length<10&&o.value.push(O)}function n(O){i.value=i.value===O?"":O}async function p(){const O=e("researchCompare"),f=++O.n,w=o.value;if(!(w.length<2)){c.value=!0;try{const z=window.__quantModules&&window.__quantModules.core||{},F=typeof z.authHeaders=="function"?z.authHeaders():{},V=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},F),body:JSON.stringify({ids:w})}).then(function(I){return I.json()});if(f!==O.n)return;g.value=V&&V.items||[]}catch(z){console.error("[research-history] 对比失败:",z)}finally{c.value=!1}}}async function R(O){try{const f=window.__quantModules&&window.__quantModules.core||{},w=typeof f.authHeaders=="function"?f.authHeaders():{},z=await fetch("/api/strategies/research-history/"+O,{method:"DELETE",headers:w}).then(function(F){return F.json()});if(z&&z.deleted){t.value=t.value.filter(function(V){return V.id!==O});const F=o.value.indexOf(O);F>=0&&o.value.splice(F,1)}}catch(f){console.error("[research-history] 删除失败:",f)}}return{researchHistory:t,researchHistoryLoading:r,researchHistoryError:d,researchHistoryType:b,researchHistorySelected:o,researchDetailId:i,researchCompareRows:g,researchCompareLoading:c,researchExportLoading:D,researchTypeLabel:T,goShortterm:C,openResearchHistory:M,loadResearchHistory:P,exportResearchHistory:x,toggleResearchSelect:S,toggleResearchDetail:n,runResearchCompare:p,deleteResearchHistory:R}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.researchPage=window.__quantModules.researchPage||{};window.__quantModules.researchPage.part1=`
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
                </div>`;window.__quantModules=window.__quantModules||{};window.__quantModules.researchPage=window.__quantModules.researchPage||{};window.__quantModules.researchPage.view=window.__quantModules.researchPage.part1+window.__quantModules.researchPage.part2;(function(){const{ref:a,computed:e,watch:u,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:window.__quantModules.researchPage.view,setup(){const r=t("qcState"),d=Vue.ref(!1),b=Vue.ref(!1),o=Object.create(null);function i(G){return o[G]||(o[G]={n:0}),o[G]}const g=15e3;async function c(G,Te,je){var Dt=typeof AbortController<"u"?new AbortController:null,Jt=null,ka=Object.assign({},Te||{});Dt&&(ka.signal=Dt.signal,Jt=setTimeout(function(){try{Dt.abort()}catch{}},g));try{var Ma=await fetch(G,ka);return await Ma.json()}finally{Jt&&clearTimeout(Jt)}}function D(G){return!!(G&&(G.name==="AbortError"||G.code===20))}if(!r)return{};const k=a(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function T(G){k.value=G;try{localStorage.setItem("quant_strategy_mode",G)}catch{}r.currentSubPage.value="strategy-manage"}const C=a([]),M=a(!1),P=a(!1),x=a(""),S=a(""),n=a(""),p=a({}),R=a(!1),O=a(""),f=a(""),w=a([]),z=a([]),F=a(""),V=a(""),I=a(!0),$=a(!0),W=a("20:00"),B=a("default"),K=a(!1),q=a(""),s=e(function(){return C.value.find(function(G){return G.id===n.value})||null});async function _(G,Te){Te=Te||{},Te.headers=Object.assign({},Te.headers||{});const je=localStorage.getItem("quant_token")||"";return je&&(Te.headers.Authorization="Bearer "+je),fetch(G,Te)}async function l(){const G=i("strategies"),Te=++G.n;M.value=!0,P.value=!1,x.value="",S.value="";try{const je=await c("/api/strategies",{headers:Ct()});if(Te!==G.n)return;let Dt=null;Array.isArray(je)?Dt=je:je&&Array.isArray(je.strategies)?(Dt=je.strategies,je.warn&&(S.value=String(je.warn))):(P.value=!0,x.value=je&&je.detail?String(je.detail):"策略列表加载失败（接口返回异常）"),Dt!==null&&(C.value=Dt,C.value.length&&!n.value&&(n.value=C.value[0].id,m()))}catch(je){if(Te!==G.n)return;console.error("[research] 策略列表加载失败:",je),P.value=!0,x.value=D(je)?"策略列表请求超时（15s），请检查后端服务后重试":"策略列表加载失败: "+(je&&je.message||"网络错误")}finally{M.value=!1}}function m(){const G=s.value;G&&(p.value={},G.schema.forEach(function(Te){p.value[Te.key]=Te.default}),f.value="",le(),J(),A())}async function J(){if(!n.value){z.value=[];return}try{const G=await _("/api/strategies/"+n.value+"/profiles").then(function(Te){return Te.json()});z.value=G&&G.data&&G.data.profiles||[],F.value=""}catch(G){console.error("[research] 方案列表加载失败:",G),z.value=[]}}async function N(){d.value=!0;const G=(V.value||"").trim();if(!G){window._core&&window._core.showToast("请输入方案名称");return}try{const Te=await _("/api/strategies/"+n.value+"/profiles",{method:"POST",body:JSON.stringify({name:G,params:p.value})}).then(function(je){return je.json()});if(Te&&Te.detail){window._core&&window._core.showToast(String(Te.detail));return}V.value="",await J(),window._core&&window._core.showToast("方案已保存")}catch(Te){console.error("[research] 方案保存失败:",Te),window._core&&window._core.showToast("方案保存失败")}}function E(){const G=z.value.find(function(Te){return Te.id===F.value});G&&(Object.keys(G.params||{}).forEach(function(Te){p.value[Te]=G.params[Te]}),window._core&&window._core.showToast("已应用方案: "+G.name))}async function v(){if(F.value)try{await _("/api/strategies/"+n.value+"/profiles/"+F.value,{method:"DELETE"}).then(function(G){return G.json()}),await J(),window._core&&window._core.showToast("方案已删除")}catch(G){console.error("[research] 方案删除失败:",G)}}async function A(){try{const G=await _("/api/strategies/governance").then(function(Dt){return Dt.json()}),je=(G&&G.data&&G.data.strategies||{})[n.value]||{};I.value=je.enabled!==!1,W.value=je.schedule||"20:00",B.value=je.universe==="all"?"all":"default",$.value=je.show_in_calendar!==!1,q.value=je.last_holdings||""}catch(G){console.error("[research] 纳管状态加载失败:",G)}}async function y(){try{await _("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const G={};return G[n.value]={enabled:I.value,schedule:W.value,universe:B.value,show_in_calendar:$.value},G}()})}).then(function(G){return G.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(G){console.error("[research] 纳管更新失败:",G)}}async function j(){if(n.value){K.value=!0;try{const G=await _("/api/strategies/"+n.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:O.value||void 0})}).then(function(Te){return Te.json()});if(G&&G.detail){window._core&&window._core.showToast(String(G.detail));return}window._core&&window._core.showToast("持仓已生成"),await A()}catch(G){console.error("[research] run-once 失败:",G),window._core&&window._core.showToast("持仓生成失败")}finally{K.value=!1}}}function te(){q.value&&window.open(q.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function re(){const G=s.value;if(!G)return;const Te=(V.value||"").trim()||G.name+"-副本";se(Te,Object.assign({},p.value)),window._core&&window._core.showToast("已复制为副本方案: "+Te)}async function se(G,Te){try{await _("/api/strategies/"+n.value+"/profiles",{method:"POST",body:JSON.stringify({name:G,params:Te})}).then(function(je){return je.json()}),await J()}catch(je){console.error("[research] 副本保存失败:",je)}}async function le(){const G=i("runs"),Te=++G.n;if(n.value)try{const je=await c("/api/strategies/"+n.value+"/runs?limit=5",{headers:Ct()});if(Te!==G.n)return;w.value=Array.isArray(je)?je:[]}catch(je){if(Te!==G.n)return;console.error("[research] 运行记录加载失败:",je),w.value=[]}}async function Q(){if(n.value){R.value=!0;try{const G=await _("/api/strategies/"+n.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:p.value,as_of:O.value||void 0})}).then(function(Te){return Te.json()});G&&G.status==="success"?le():ElementPlus.ElMessage.error(r.t("msg.runFailed",{msg:G.detail||JSON.stringify(G)}))}catch(G){console.error("[research] 策略运行失败:",G),ElementPlus.ElMessage.error(r.t("msg.runFailed",{msg:G.message}))}finally{R.value=!1}}}async function ie(){if(n.value)try{const G=Object.keys(p.value).map(function(je){return encodeURIComponent(je)+"="+encodeURIComponent(p.value[je])}).join("&"),Te=await _("/api/strategies/"+n.value+"/ptrade-code?"+G).then(function(je){return je.json()});Te&&Te.code?f.value=Te.code:ElementPlus.ElMessage.error(r.t("msg.exportFailed",{msg:Te.detail||JSON.stringify(Te)}))}catch(G){console.error("[research] PTrade 导出失败:",G),ElementPlus.ElMessage.error(r.t("msg.exportFailed",{msg:G.message}))}}function Ce(){if(!f.value)return;const G=document.createElement("textarea");G.value=f.value,document.body.appendChild(G),G.select();try{document.execCommand("copy")}catch{}document.body.removeChild(G)}const ee=window.__quantModules.researchPage.marketReview.create({ref:a,seqOf:i,authHeaders:Ct}),{marketReviews:X,marketReviewLoading:be,marketReviewError:H,selectedReviewDate:me,marketReviewDetail:ue,marketReviewDetailLoading:Z}=ee,{marketReviewDetailError:de,loadMarketReviews:Ee,openMarketReview:we,toggleMarketReviewDate:Ne,backToMarketReviewList:Ye,loadMarketReviewDetail:pe}=ee,{marketReviewChgClass:oe,marketReviewChgText:ke,marketReviewSrcEntries:He,fmtPct:Oe,fmtEmotion:$e}=ee,ge=window.__quantModules.researchPage.factor.create({ref:a,seqOf:i,withAuth:_,authHeaders:Ct,activeStrategyId:n,paramValues:p}),{factorKey:Se,factorIcLoading:Ae,factorLayerLoading:ze,factorIcReport:Je,factorLayerResult:Qe,factorOptions:Ge}=ge,{runFactorIc:et,runFactorLayer:tt,factorDetail:ht,factorDetailLoading:ve,runFactorDetail:_e,sweepGrid:Le}=ge,{sweepResult:h,sweepMessage:L,sweepLoading:Y,sweepStability:ce,runSweep:xe}=ge,Pe=window.__quantModules.researchPage.history.create({seqOf:i,state:r}),{researchHistory:qe,researchHistoryLoading:he,researchHistoryError:Ve,researchHistoryType:Fe,researchHistorySelected:lt,researchDetailId:at}=Pe,{researchCompareRows:Ze,researchCompareLoading:Ue,researchExportLoading:ft,researchTypeLabel:ae,goShortterm:ne,openResearchHistory:Xe}=Pe,{loadResearchHistory:gt,exportResearchHistory:wt,toggleResearchSelect:vt,toggleResearchDetail:Mt,runResearchCompare:Ot,deleteResearchHistory:na}=Pe;u(function(){return r.currentPage.value+"/"+r.currentSubPage.value},function(G){G==="research/research-overview"&&(l(),Ee(),zt(),ca()),(G==="research/market-review"||G==="shortterm/market-review")&&!me.value&&Ee(),G==="research/quant-research"&&l(),G==="research/backtest-history"&&Ea()},{immediate:!0});const Wt=a([]),St=a(null),qt=a(null),Ft=a(null),Tt=a(""),Ut=a(!1),At=a(!1),pt=a(""),Vt=a(""),Gt=a("");function Ct(){const G=localStorage.getItem("quant_token")||"";return G?{Authorization:"Bearer "+G,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function zt(){const G=i("variants"),Te=++G.n;try{const je=await c("/api/strategies/variants",{headers:Ct()});if(Te!==G.n)return;Wt.value=je&&je.data&&je.data.variants||[]}catch(je){if(Te!==G.n)return;console.error("[i3a] 加载 variants 失败:",je),Wt.value=[]}}async function ta(){if(!n.value){pt.value="请先在量化研究选择母本策略";return}At.value=!0,pt.value="";try{const G=await fetch("/api/strategies/"+n.value+"/clone",{method:"POST",headers:Ct(),body:JSON.stringify({name:(V.value||"").trim()||void 0,params:Object.assign({},p.value)})}).then(function(je){return je.json()});if(G&&G.detail){pt.value=String(G.detail);return}const Te=G&&G.data;Te&&Te.sid&&(St.value=Te.sid,pt.value="已复制为新策略: "+Te.name,await zt(),await U(Te.sid))}catch(G){console.error("[i3a] 复制失败:",G),pt.value="复制失败: "+G.message}finally{At.value=!1}}async function la(G){St.value=G,pt.value="",Tt.value="",await U(G)}async function U(G){try{const Te=await fetch("/api/strategies/"+G+"/selection-spec",{headers:Ct()}).then(function(je){return je.json()});Te&&Te.data&&Te.data.spec&&(qt.value=Object.assign({},Te.data.spec),Ft.value=Te.data.fields,Vt.value=(Te.data.spec.industry_scope||[]).join(","),Gt.value=(Te.data.spec.market_cap_range||[]).join(","))}catch(Te){console.error("[i3a] 加载 spec 失败:",Te)}}async function De(){if(b.value=!0,!(!St.value||!qt.value))try{qt.value.industry_scope=Vt.value?Vt.value.split(/[,，]/).map(function(Te){return Te.trim()}).filter(Boolean):[],qt.value.market_cap_range=Gt.value?Gt.value.split(/[,，]/).map(Number).filter(function(Te){return!isNaN(Te)}):[];const G=await fetch("/api/strategies/"+St.value+"/selection-spec",{method:"PUT",headers:Ct(),body:JSON.stringify({spec:qt.value})}).then(function(Te){return Te.json()});G&&G.data&&G.data.spec&&(qt.value=G.data.spec,pt.value="SelectionSpec 已保存")}catch(G){console.error("[i3a] 保存 spec 失败:",G),pt.value="保存失败"}}async function We(){if(!St.value){pt.value="请先选择/创建微调策略";return}At.value=!0,pt.value="";try{const G=await fetch("/api/strategies/"+St.value+"/run-once",{method:"POST",headers:Ct(),body:"{}"}).then(function(Te){return Te.json()});pt.value=G&&G.detail?String(G.detail):"持仓已生成: "+(G&&G.data&&G.data.symbols||0)+" 只"}catch(G){console.error("[i3a] run-once 失败:",G),pt.value="生成持仓失败"}finally{At.value=!1}}async function Ie(){if(!St.value){pt.value="请先选择/创建微调策略";return}qt.value||await U(St.value),Ut.value=!0,pt.value="";try{const G=await fetch("/api/strategies/"+St.value+"/ai-trade-code",{method:"POST",headers:Ct(),body:JSON.stringify({spec:qt.value})}).then(function(Te){return Te.json()});if(G&&G.detail){pt.value=String(G.detail);return}G&&G.data&&(Tt.value=G.data.code||"",G.data.api_errors&&G.data.api_errors.length?pt.value="生成成功(含 API 校验告警 "+G.data.api_errors.length+" 条)":pt.value="AI 交易码已生成, 已通过矩阵内校验")}catch(G){console.error("[i3a] AI 交易码失败:",G),pt.value="AI 生成失败: "+G.message}finally{Ut.value=!1}}function ct(){if(Tt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Tt.value).then(function(){pt.value="代码已复制"});else{const G=document.createElement("textarea");G.value=Tt.value,document.body.appendChild(G),G.select(),document.execCommand("copy"),document.body.removeChild(G),pt.value="代码已复制"}}const mt=a(""),kt=a(""),Lt=a([]),Pt=a(""),It=a(""),yt=a(""),ia=a(null),oa=a(!1),Nt=a(!1),ra=a(!1);function Yt(){const G=localStorage.getItem("quant_token")||"";return G?{Authorization:"Bearer "+G,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function ca(){const G=i("customs"),Te=++G.n;try{const je=await c("/api/strategies/custom",{headers:Yt()});if(Te!==G.n)return;Lt.value=je&&je.data&&je.data.customs||[]}catch(je){if(Te!==G.n)return;console.error("[i3b] 加载自定义策略失败:",je),Lt.value=[]}}async function ot(){if(!kt.value.trim()){yt.value="请描述策略思路";return}oa.value=!0,yt.value="";try{const G=await fetch("/api/strategies/custom",{method:"POST",headers:Yt(),body:JSON.stringify({name:mt.value.trim()||"自定义策略",prompt:kt.value})}).then(function(Te){return Te.json()});if(G&&G.detail){yt.value=String(G.detail);return}G&&G.data&&(It.value=G.data.code||"",yt.value="AI 代写成功: "+G.data.sid+(G.data.api_errors&&G.data.api_errors.length?" (API 告警 "+G.data.api_errors.length+" 条)":" (校验通过)"),await ca())}catch(G){console.error("[i3b] AI 代写失败:",G),yt.value="AI 代写失败: "+G.message}finally{oa.value=!1}}async function xt(){if(Pt.value)try{const G=await fetch("/api/strategies/custom/"+Pt.value+"/code",{headers:Yt()}).then(function(Te){return Te.json()});G&&G.data&&(It.value=G.data.code||"",yt.value="")}catch(G){console.error("[i3b] 读取代码失败:",G)}}async function Rt(){if(!Pt.value){yt.value="请先选择自定义策略";return}Nt.value=!0,yt.value="";try{const G=await fetch("/api/strategies/custom/"+Pt.value+"/backtest",{method:"POST",headers:Yt(),body:"{}"}).then(function(Te){return Te.json()});if(G&&G.detail){yt.value=String(G.detail);return}G&&G.data&&(ia.value=G.data,yt.value="回测完成")}catch(G){console.error("[i3b] 回测失败:",G),yt.value="回测失败: "+G.message}finally{Nt.value=!1}}async function jt(){if(!Pt.value){yt.value="请先选择自定义策略";return}ra.value=!0,yt.value="";try{const G=await fetch("/api/strategies/custom/"+Pt.value+"/ai-optimize",{method:"POST",headers:Yt(),body:JSON.stringify({backtest:ia.value})}).then(function(Te){return Te.json()});if(G&&G.detail){yt.value=String(G.detail);return}G&&G.data&&(It.value=G.data.code||"",yt.value="AI 优化完成"+(G.data.api_errors&&G.data.api_errors.length?" (API 告警 "+G.data.api_errors.length+" 条)":" (校验通过)"))}catch(G){console.error("[i3b] AI 优化失败:",G),yt.value="AI 优化失败: "+G.message}finally{ra.value=!1}}function Qt(){if(It.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(It.value).then(function(){yt.value="代码已复制"});else{const G=document.createElement("textarea");G.value=It.value,document.body.appendChild(G),G.select(),document.execCommand("copy"),document.body.removeChild(G),yt.value="代码已复制"}}const ma=Vue.ref([]),fa=Vue.ref(!1),pa=Vue.ref(!1),wa=Vue.ref(30);async function Ea(){const G=i("btHistory"),Te=++G.n;fa.value=!0,pa.value=!1;try{const je=window.__quantModules&&window.__quantModules.core||{},Dt=typeof je.authHeaders=="function"?je.authHeaders():{},Jt=await c("/api/backtest/history?days="+wa.value,{headers:Dt});if(Te!==G.n)return;ma.value=Jt&&Jt.data||[]}catch(je){if(Te!==G.n)return;console.error("[backtest] 回测历史加载失败:",je),pa.value=!0}finally{fa.value=!1}}return{...r,strategyManageMode:k,openStrategyManage:T,btHistory:ma,btHistoryLoading:fa,btHistoryError:pa,btHistoryDays:wa,loadBtHistory:Ea,researchHistory:qe,researchHistoryLoading:he,researchHistoryError:Ve,researchHistoryType:Fe,researchHistorySelected:lt,researchDetailId:at,researchCompareRows:Ze,researchCompareLoading:Ue,researchTypeLabel:ae,goShortterm:ne,openResearchHistory:Xe,loadResearchHistory:gt,researchExportLoading:ft,exportResearchHistory:wt,toggleResearchSelect:vt,toggleResearchDetail:Mt,runResearchCompare:Ot,deleteResearchHistory:na,marketReviews:X,marketReviewLoading:be,marketReviewError:H,selectedReviewDate:me,marketReviewDetail:ue,marketReviewDetailLoading:Z,marketReviewDetailError:de,loadMarketReviews:Ee,openMarketReview:we,toggleMarketReviewDate:Ne,backToMarketReviewList:Ye,loadMarketReviewDetail:pe,marketReviewChgClass:oe,marketReviewChgText:ke,marketReviewSrcEntries:He,fmtPct:Oe,fmtEmotion:$e,strategies:C,strategiesLoading:M,strategiesError:P,strategiesErrorText:x,strategiesWarn:S,activeStrategyId:n,activeStrategy:s,paramValues:p,strategyRunning:R,ptradeCode:f,strategyRuns:w,savingProfile:d,variantSaving:b,loadStrategies:l,onStrategyChange:m,runActiveStrategy:Q,exportActivePtradeCode:ie,copyPtradeCode:Ce,profiles:z,profileSelect:F,profileName:V,loadProfiles:J,saveProfile:N,applyProfile:E,deleteProfile:v,govEnabled:I,govSchedule:W,govUniverse:B,govRunning:K,lastHoldings:q,loadGov:A,updateGov:y,runOnceActive:j,openLastHoldings:te,cloneStrategy:re,govShowCalendar:$,factorKey:Se,factorIcLoading:Ae,factorLayerLoading:ze,factorIcReport:Je,factorLayerResult:Qe,factorOptions:Ge,runFactorIc:et,runFactorLayer:tt,factorDetail:ht,factorDetailLoading:ve,runFactorDetail:_e,variants:Wt,variantSelected:St,variantSpec:qt,specFields:Ft,aiCode:Tt,aiCodeLoading:Ut,variantBusy:At,variantMsg:pt,loadVariants:zt,cloneNewStrategy:ta,selectVariant:la,loadVariantSpec:U,saveVariantSpec:De,runVariantOnce:We,genVariantAiCode:Ie,copyVariantCode:ct,customName:mt,customPrompt:kt,customs:Lt,customSelected:Pt,customCode:It,customMsg:yt,customBtResult:ia,customGenLoading:oa,customBtLoading:Nt,customOptLoading:ra,loadCustoms:ca,genCustomCode:ot,loadCustomCode:xt,runCustomBacktest:Rt,runCustomOptimize:jt,copyCustomCode:Qt,sweepGrid:Le,sweepResult:h,sweepMessage:L,sweepLoading:Y,sweepStability:ce,runSweep:xe}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.shorttermPage=window.__quantModules.shorttermPage||{},window.__quantModules.shorttermPage.tour={create:function(a){const{ref:e,computed:u,currentSubPage:t}=a,r=window.QuantOnboarding,d=e(!1),b=e(r?r.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),o=u(function(){return r&&r.shorttermTourSteps()[b.value.stepIndex]||{key:"",title:"",desc:""}}),i=u(function(){return r?r.shorttermTourProgress(b.value):{done:0,total:3,pct:0}}),g=u(function(){return b.value.stepIndex>=2});function c(){if(r){var P=null;try{P=localStorage.getItem("qc_shortterm_tour")}catch{}if(P){var x=r.parseState(P);x&&(b.value=x)}}}function D(){if(r){var P=JSON.stringify(b.value);try{localStorage.setItem("qc_shortterm_tour",P)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:P}})}).catch(function(){})}catch{}}}function k(){window.__quantGuideModalsEnabled===!0&&r&&t.value==="overview"&&(c(),r.shorttermTourShouldShow(b.value)&&(d.value=!0))}function T(){b.value=r.shorttermTourNext(b.value),D()}function C(){b.value=r.shorttermTourComplete(b.value),D(),d.value=!1}function M(){b.value=r.shorttermTourDismiss(b.value),D(),d.value=!1}return{shorttermTourVisible:d,shorttermTourState:b,shorttermTourStep:o,shorttermTourProg:i,shorttermTourIsLast:g,maybeShowShorttermTour:k,shorttermTourNext:T,shorttermTourFinish:C,shorttermTourSkip:M}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.shorttermPage=window.__quantModules.shorttermPage||{};window.__quantModules.shorttermPage.part1=`
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
                </div>`;window.__quantModules=window.__quantModules||{};window.__quantModules.shorttermPage=window.__quantModules.shorttermPage||{};window.__quantModules.shorttermPage.view=window.__quantModules.shorttermPage.part1+window.__quantModules.shorttermPage.part2;(function(){const{inject:a,ref:e,onMounted:u,computed:t,nextTick:r}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:window.__quantModules.shorttermPage.view,setup(){const d=a("qcState");if(!d)return{};const b=d.currentPage,o=d.currentSubPage,i=e(""),g=e(null),c=e(!1),D=e(!1),k=e("数据加载失败"),T=e("请检查服务后重试"),C=e(null),M=e(null),P=e(!1),x=e(!1),S=e("数据加载失败"),n=e("请检查服务后重试"),p=e(null),R=e(1),O=50,f=t(function(){const U=M.value||[];if(U.length<=200)return U;const De=(R.value-1)*O;return U.slice(De,De+O)}),w=e(null),z=e(!1),F=e(!1),V=e("数据加载失败"),I=e("请检查服务后重试"),$=e([]),W=e(!1);async function B(){W.value=!0;try{const U=await Ee("/api/shortterm/dates/summary",!1);U&&U.success&&($.value=U.dates||[])}catch{$.value=[]}finally{W.value=!1}}function K(U){U!==i.value&&(i.value=U,Xe(!0))}const q=e("行业资金流"),s=e("今日"),_=e(""),l=e(null),m=e(1),J=e(!1),N=e(!1),E=e("数据加载失败"),v=e("请检查服务后重试"),A=e(""),y=e(null),j=e(!1),te=e(null),re=e(!1),se=e(!1),le=e(!1),Q=e(""),ie=e(""),Ce=e(!1);function ee(){const U=localStorage.getItem("quant_token")||"";return U?{Authorization:"Bearer "+U,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const X={},be=[],H=50,me=60*1e3;let ue=0,Z=0,de=0;function Ee(U,De){const We=Date.now(),Ie=X[U];return!De&&Ie&&We-Ie.ts<me?Promise.resolve(Ie.data):fetch(U,{headers:ee()}).then(function(ct){return ct.json()}).then(function(ct){if(X[U]||be.push(U),X[U]={ts:Date.now(),data:ct},be.length>H){const mt=be.shift();delete X[mt]}return ct})}async function we(U){const De=++ue;c.value=!0,D.value=!1;try{const We="/api/shortterm/pools"+(i.value?"?date="+i.value:""),Ie=await Ee(We,U);if(De!==ue)return;Ie&&Ie.success?(g.value=Ie,r(ft)):Ie&&Ie.detail?(D.value=!0,k.value=String(Ie.detail),T.value="请先登录后再查看"):(D.value=!0,k.value="数据加载失败",T.value="请检查服务后重试")}catch{if(De!==ue)return;D.value=!0,k.value="数据加载失败",T.value="请检查服务后重试"}finally{De===ue&&(c.value=!1)}}async function Ne(U){const De=++ue;P.value=!0,x.value=!1;try{const We="/api/shortterm/lhb"+(i.value?"?date="+i.value:""),Ie=await Ee(We,U);if(De!==ue)return;Ie&&Ie.success?(M.value=Array.isArray(Ie.rows)?Ie.rows:null,p.value=Ie.available===!1&&Ie.reason||null,R.value=1):Ie&&Ie.detail?(x.value=!0,S.value=String(Ie.detail),n.value="请先登录后再查看"):(x.value=!0,S.value="数据加载失败",n.value="请检查服务后重试")}catch{if(De!==ue)return;x.value=!0,S.value="数据加载失败",n.value="请检查服务后重试"}finally{De===ue&&(P.value=!1)}}const Ye=t(function(){const U=g.value&&g.value.ladder&&g.value.ladder.tiers;return!U||!Object.keys(U).length?"—":Object.keys(U).sort(function(De,We){return De-We}).map(function(De){return De+"板:"+U[De]}).join(" ")}),pe=t(function(){const U=g.value&&g.value.zt||[];return C.value?U.filter(function(De){return De.boards===C.value}):U});function oe(){C.value=null}const ke=t(function(){const U=g.value;if(!U)return!1;const De=U.ladder&&U.ladder.tiers?Object.keys(U.ladder.tiers).length:0;return(U.zt||[]).length+(U.zb||[]).length+(U.dt||[]).length+De>0}),He=t(function(){const U=w.value&&w.value.emotion&&w.value.emotion.money_effect;return!U||!U.available?"—":U.source==="settled"?"定稿记录":U.source==="realtime"?U.partial?"实时(样本不全)":"实时":"—"}),Oe=t(function(){const U=w.value&&w.value.emotion&&w.value.emotion.promotion&&w.value.emotion.promotion.tiers&&w.value.emotion.promotion.tiers["1进2"];return U?U.rate:null}),$e=t(function(){const U=w.value&&w.value.emotion&&w.value.emotion.sentiment_cycle;return U&&U.available&&U.current_score!=null?U.current_score.toFixed(2):"—"}),ge=t(function(){const U=w.value&&w.value.emotion&&w.value.emotion.sentiment_cycle;return!U||!U.available?"—":(U.trend||"—")+(U.day_n!=null?" · 距低谷"+U.day_n+"天":"")}),Se=t(function(){const U=w.value&&w.value.emotion;if(!U)return"";const De=[];for(const We of["money_effect","promotion","consec_premium","sentiment_cycle"]){const Ie=U[We];Ie&&Ie.available===!1&&Ie.reason&&De.push(String(Ie.reason).replace(/^[[^]]*]s*/,""))}return De.join("；")}),Ae=t(function(){const U=w.value&&w.value.facts;if(!U)return"";const De=[];for(const We of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const Ie=U[We];Ie&&Ie.available===!1&&Ie.reason&&De.push(String(Ie.reason).replace(/^[[^]]*]s*/,""))}return De.join("；")});function ze(U){return U==null||isNaN(U)?"—":(U*100).toFixed(0)+"%"}function Je(U,De){return U==null?"—":(typeof U=="number"?Math.round(U*100)/100:U)+(De||"")}function Qe(U){return"tag-chip mr-4"}function Ge(U){return U==null?"":U>0?"is-rise":U<0?"is-fall":""}function et(U){return U==="机构"?"is-institution":U==="游资"?"is-hotmoney":U==="主力"?"is-main":""}const tt=t(function(){const U=w.value&&w.value.session_status;if(!U)return"—";const De=w.value.date;return De===U.latest_session&&U.settled?"已收盘":De===U.today&&U.is_trade_day&&!U.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),ht=t(function(){const U=w.value&&w.value.session_status;if(!U)return"";const De=w.value.date;return De===U.latest_session&&U.settled?"is-institution":De===U.today&&U.is_trade_day&&!U.settled?"is-main":""});function ve(U){U&&U.ts_code&&d&&d.showStockDetail&&d.showStockDetail(U.ts_code)}const _e=t(function(){return(M.value||[]).filter(function(U){return(U.tags||[]).indexOf("机构")>=0}).reduce(function(U,De){return U+(De.net_buy||0)},0)}),Le=t(function(){return(M.value||[]).filter(function(U){return(U.tags||[]).indexOf("游资")>=0}).length}),h=t(function(){const U=(l.value||[]).filter(function(De){return De.main_net_inflow!=null});return U.length?U.reduce(function(De,We){return De.main_net_inflow>=We.main_net_inflow?De:We}):null}),L=t(function(){const U=h.value;return U?U.name:"—"}),Y=t(function(){const U=h.value;return U?U.main_net_inflow:null}),ce=t(function(){return A.value||"东财"}),xe=t(function(){const U=(_.value||"").trim(),De=l.value||[];return U?De.filter(function(We){return We.name&&String(We.name).indexOf(U)>=0}):De});function Pe(U){_.value=U||"",d&&d.currentSubPage&&(d.currentSubPage.value="sector")}const qe=t(function(){const U=xe.value;if(U.length<=200)return U;const De=(m.value-1)*O;return U.slice(De,De+O)}),he=["09:25","09:35","10:00","11:30","14:00","15:00"],Ve=t(function(){const U={};return(te.value||[]).forEach(function(De){U[De.slot]=!0}),U});function Fe(U){return Ve.value[U]?"is-done":U===lt.value?"is-current":"is-empty"}const lt=t(function(){const U=new Date,De=(U.getHours()<10?"0":"")+U.getHours(),We=(U.getMinutes()<10?"0":"")+U.getMinutes(),Ie=De+":"+We;for(var ct=0;ct<he.length;ct++)if(Ie===he[ct])return he[ct];for(var mt=0;mt<he.length-1;mt++){var kt=he[mt],Lt=new Date;Lt.setHours(Number(kt.split(":")[0]),Number(kt.split(":")[1]),0,0);var Pt=new Date(Lt.getTime()+8*6e4);if(U>=Lt&&U<=Pt)return kt}return""}),at=t(function(){const U=new Date,De=lt.value;if(De)return"当前处于快照窗口 "+De+" (前后 8 分钟) — 可采集";const We=U.getHours(),Ie=U.getMinutes();let ct="";for(let mt=0;mt<he.length;mt++){const kt=he[mt].split(":");if(Number(kt[0])>We||Number(kt[0])===We&&Number(kt[1])>Ie){ct=he[mt];break}}return ct?"下一快照时点 "+ct+" — 非窗口期不可采集":"今日快照时点已全部结束"}),Ze=e(""),Ue=e("info");function ft(){const U=g.value&&g.value.ladder&&g.value.ladder.tiers;if(!U||!Object.keys(U).length)return;const De=window.__quantModules&&window.__quantModules.charts;if(!De||!De.renderSimpleChartTo)return;const We=C.value,Ie=De.renderSimpleChartTo("shorttermLadderChart",function(){const ct=Object.keys(U).sort(function(mt,kt){return Number(mt)-Number(kt)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:ct.map(function(mt){return mt+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(mt){return We&&Number(ct[mt.dataIndex])===We?"var(--color-accent)":"var(--chart-split)"}},data:ct.map(function(mt){return U[mt]})}]}},{key:"shortterm-ladder"});Ie&&Ie.off&&(Ie.off("click"),Ie.on("click",function(ct){if(!ct||!ct.name)return;const mt=parseInt(ct.name,10);isNaN(mt)||(C.value=C.value===mt?null:mt)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(ft);function ae(U){if(U==null)return"—";const De=Math.abs(U);return De>=1e8?(U/1e8).toFixed(2)+"亿":De>=1e4?(U/1e4).toFixed(0)+"万":U.toFixed(0)}function ne(U){return U==null?"—":(U>=0?"+":"")+U.toFixed(2)+"%"}async function Xe(U){const De=++Z;z.value=!0,F.value=!1;try{const We="/api/shortterm/overview"+(i.value?"?date="+i.value:""),Ie=await Ee(We,U);if(De!==Z)return;Ie&&Ie.success?w.value=Ie:Ie&&Ie.detail?(F.value=!0,V.value=String(Ie.detail),I.value="请先登录后再查看"):(F.value=!0,V.value="数据加载失败",I.value="请检查服务后重试")}catch{if(De!==Z)return;F.value=!0,V.value="数据加载失败",I.value="请检查服务后重试"}finally{De===Z&&(z.value=!1)}}async function gt(U){const De=++ue;J.value=!0,N.value=!1;try{const We="/api/shortterm/sector-flow?indicator="+encodeURIComponent(s.value)+"&sector_type="+encodeURIComponent(q.value),Ie=await Ee(We,U);if(De!==ue)return;Ie&&Ie.success&&Ie.available?(l.value=Ie.rows||[],A.value=Ie.source||(Ie.note?"同花顺":"东财"),m.value=1):Ie&&Ie.reason?(N.value=!0,E.value="数据加载失败",v.value=String(Ie.reason).replace(/^\[[^\]]*\]\s*/,"")):Ie&&Ie.detail?(N.value=!0,E.value=String(Ie.detail),v.value="请先登录后再查看"):(N.value=!0,E.value="数据加载失败",v.value="请检查服务后重试")}catch{if(De!==ue)return;N.value=!0,E.value="数据加载失败",v.value="请检查服务后重试"}finally{De===ue&&(J.value=!1)}}async function wt(U){const De=++de;try{const We="/api/shortterm/review"+(i.value?"?date="+i.value:""),Ie=await Ee(We,U);if(De!==de)return;Ie&&Ie.success&&(y.value=Ie.review||null)}catch{}}async function vt(){j.value=!0;try{const U="/api/shortterm/review"+(i.value?"?date="+i.value:""),De=await fetch(U,{method:"POST",headers:ee()}).then(function(We){return We.json()});De&&De.success&&(y.value=De,X[U]={ts:Date.now(),data:De})}catch{}finally{j.value=!1}}async function Mt(){const U=Q.value.trim();if(U){Ce.value=!0,ie.value="";try{const We=await fetch("/api/shortterm/review/chat",{method:"POST",headers:ee(),body:JSON.stringify({date:overviewDate.value,question:U})}).then(function(Ie){return Ie.json()});ie.value=We.answer||"[无回复]"}catch{ie.value="[发送失败]"}finally{Ce.value=!1}}}async function Ot(U){const De=++ue;re.value=!0,se.value=!1;try{const We="/api/shortterm/intraday"+(i.value?"?date="+i.value:""),Ie=await Ee(We,U);if(De!==ue)return;Ie&&Ie.success?te.value=Ie.snapshots||[]:se.value=!0}catch{De===ue&&(se.value=!0)}finally{De===ue&&(re.value=!1)}}async function na(){le.value=!0;try{const U="/api/shortterm/intraday/snapshot"+(i.value?"?date="+i.value:""),De=await fetch(U,{method:"POST",headers:ee()}).then(function(We){return We.json()});De&&De.success?(De.accepted?(Ze.value="已采集 "+De.slot+" 快照"+(De.pools_available&&!De.pools_available.zt?" (池源部分不可用)":""),Ue.value="ok"):(Ze.value="⏱ "+(De.reason||"非快照时点"),Ue.value="warn"),Ot()):Ze.value="采集失败, 请稍后重试"}catch{Ze.value="采集失败, 请稍后重试"}finally{le.value=!1}}function Wt(){return Ee("/api/shortterm/latest-session",!1).then(function(U){U&&U.date&&(i.value||(i.value=U.date))}).catch(function(){})}function St(){const U=o.value;U==="ztpool"?we():U==="lhb"?Ne():U==="overview"?(Xe(),wt()):U==="sector"?gt():U==="intraday"&&Ot()}function qt(){const U=i.value?"?date="+i.value:"";["/api/shortterm/overview"+U,"/api/shortterm/pools"+U,"/api/shortterm/lhb"+U].forEach(function(We){Ee(We,!1).catch(function(){})})}function Ft(){const U=o.value;U==="ztpool"?we(!0):U==="lhb"?Ne(!0):U==="overview"?(Xe(!0),wt(!0)):U==="sector"?gt(!0):U==="intraday"&&Ot(!0)}const Tt=window.__quantModules.shorttermPage.tour.create({ref:e,computed:t,currentSubPage:o}),{shorttermTourVisible:Ut,shorttermTourState:At,shorttermTourStep:pt,shorttermTourProg:Vt,shorttermTourIsLast:Gt}=Tt,{maybeShowShorttermTour:Ct,shorttermTourNext:zt,shorttermTourFinish:ta,shorttermTourSkip:la}=Tt;return u(function(){Wt(),St(),qt(),Ct(),B()}),Vue.watch(function(){return o.value},function(U){St(),U==="overview"&&Ct()}),{currentPage:b,currentSubPage:o,shortDate:i,pools:g,poolLoading:c,poolError:D,ztBoardFilter:C,filteredZt:pe,clearBoardFilter:oe,hasAnyPool:ke,lhbRows:M,lhbLoading:P,lhbError:x,lhbReason:p,lhbPageRows:f,lhbPage:R,overview:w,overviewLoading:z,overviewError:F,dateList:$,dateListLoading:W,loadDateList:B,pickDate:K,sectorType:q,sectorIndicator:s,sectorKeyword:_,sectorRows:l,filteredSectorRows:xe,sectorPageRows:qe,sectorPage:m,sectorLoading:J,sectorError:N,sectorFlowSource:A,PAGE_SIZE:O,gotoSector:Pe,review:y,reviewRunning:j,intradaySnapshots:te,intradayLoading:re,intradayError:se,intradayCollecting:le,intradaySlots:he,intradayMsg:Ze,slotClass:Fe,intradayStatus:at,chatQuestion:Q,chatAnswer:ie,chatLoading:Ce,loadPools:we,loadLhb:Ne,loadOverview:Xe,loadSectorFlow:gt,loadReview:wt,runReview:vt,sendChat:Mt,loadIntraday:Ot,collectSnapshot:na,refreshCurrent:Ft,ladderText:Ye,fmtAmount:ae,fmtPct:ne,riseFall:Ge,tagClass:et,openStock:ve,lhbInstitutionNetBuy:_e,lhbHotMoneyCount:Le,sectorTopName:L,sectorTopInflow:Y,sectorSource:ce,moneySource:He,promotion1to2:Oe,cycleScore:$e,cycleTrend:ge,pct:ze,fmtCond:Je,verdictClass:Qe,sessionStatusText:tt,sessionStatusClass:ht,t:d.t,emotionNotice:Se,factsNotice:Ae,shorttermTourVisible:Ut,shorttermTourState:At,shorttermTourStep:pt,shorttermTourProg:Vt,shorttermTourIsLast:Gt,shorttermTourNext:zt,shorttermTourFinish:ta,shorttermTourSkip:la}}}})();(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantVirtualList=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(o,i,g,c,D){var k=g>0?g:1,T=typeof D=="number"&&D>=0?D:a,C=Math.max(0,c),M=Math.max(0,o),P=Math.max(0,i),x=Math.max(0,Math.floor(M/k)-T),S=Math.min(C,Math.ceil((M+P)/k)+T);return{startIndex:x,endIndex:S}}function u(o,i){return Math.max(0,o||0)*(i>0?i:0)}function t(o,i,g,c,D){var k=o||[],T=e(i,g,c,k.length,D),C=k.slice(T.startIndex,T.endIndex);return{visible:C,startIndex:T.startIndex,endIndex:T.endIndex,offsetY:T.startIndex*(c>0?c:1),totalHeight:u(k.length,c)}}function r(o,i){if(o){if(o.code!=null)return o.code;if(o.id!=null)return o.id;if(o.ts_code!=null)return o.ts_code}return i}function d(o,i,g){var c=o||[];if(!c.length)return i>0?i:1;for(var D=Math.min(g||50,c.length),k=0,T=0,C=0;C<D;C++){var M=c[C]&&c[C].rowHeight;typeof M=="number"&&M>0&&(k+=M,T++)}return T?k/T:i>0?i:1}function b(o,i,g,c,D){var k=e(o,i,g,c,D),T=Math.max(0,c);return T?(k.endIndex-k.startIndex)/T:0}return{DEFAULT_BUFFER:a,computeVisibleRange:e,computeTotalHeight:u,sliceVisible:t,getRowKey:r,estimateDynamicRowHeight:d,renderedRatio:b}});(function(){const{ref:a,computed:e,onMounted:u,onBeforeUnmount:t}=Vue,r=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:r.DEFAULT_BUFFER||8},ariaLabel:{type:String,default:""}},template:`
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
    `,setup(d){const b=a(null),o=a(0),i=a(400),g=e(()=>(r.computeVisibleRange||function(n,p,R,O,f){const w=R>0?R:1,z=f>=0?f:8,F=Math.max(0,O);return{startIndex:Math.max(0,Math.floor(n/w)-z),endIndex:Math.min(F,Math.ceil((n+p)/w)+z)}})(o.value,i.value,d.rowHeight,d.items.length,d.buffer)),c=e(()=>d.items.length*d.rowHeight),D=e(()=>g.value.startIndex),k=e(()=>g.value.endIndex),T=e(()=>d.items.slice(D.value,k.value));function C(){b.value&&(o.value=b.value.scrollTop)}function M(){b.value&&(i.value=b.value.clientHeight||400)}function P(S,n){return r.getRowKey?r.getRowKey(S,n):S&&S.code!=null?S.code:S&&S.id!=null?S.id:n}let x=null;return u(()=>{M(),b.value&&typeof ResizeObserver<"u"&&(x=new ResizeObserver(()=>M()),x.observe(b.value))}),t(()=>{x&&x.disconnect()}),{scrollEl:b,totalHeight:c,startIndex:D,endIndex:k,visibleItems:T,onScroll:C,keyOf:P}}}})();(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=e())})(typeof self<"u"?self:void 0,function(){var a=40,e=1.2,u=60,t=500,r=10,d=88,b=350;function o(n,p,R,O,f){f=f||{};var w=typeof f.threshold=="number"?f.threshold:a,z=typeof f.bias=="number"?f.bias:e,F=R-n,V=O-p;return Math.abs(F)<w||Math.abs(F)<Math.abs(V)*z?"none":F<0?"left":"right"}function i(n,p,R){R=R||{};var O=typeof R.threshold=="number"?R.threshold:u;return p-n>=O}function g(n,p){p=p||{};var R=typeof p.threshold=="number"?p.threshold:t;return n>=R}var c=!1;function D(n,p){return n&&typeof n.closest=="function"?n.closest(p):null}function k(n){if(!n)return"";var p=n.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(p){var R=p.getAttribute&&p.getAttribute("data-copy-code");if(R)return R.trim();var O=(p.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(O)return O[0]}var f=n.getAttribute&&n.getAttribute("data-copy-code");return f?f.trim():""}function T(n){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(n).then(function(){return!0}).catch(function(){return C(n)}):Promise.resolve(C(n))}function C(n){try{var p=document.createElement("textarea");return p.value=n,p.style.position="fixed",p.style.opacity="0",document.body.appendChild(p),p.select(),document.execCommand("copy"),document.body.removeChild(p),!0}catch{return!1}}function M(n){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(n)}function P(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function x(){var n=null,p=null,R=null;function O(){p&&(p.timer&&clearTimeout(p.timer),p=null)}function f(W){R={el:W,until:Date.now()+b}}function w(W){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(B){B!==W&&B.classList.remove("swipe-open")}),n&&n.el!==W&&(n=null)}function z(W){var B=W.touches&&W.touches[0];if(B){var K=D(W.target,".swipe-reveal");K&&(n={el:K,x:B.clientX,y:B.clientY,moved:!1},W.stopPropagation());var q=D(W.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");q&&(O(),p={el:q,x:B.clientX,y:B.clientY,timer:setTimeout(function(){var s=k(q);p=null,s&&(f(q),T(s).then(function(){P(),M("已复制代码 "+s)}))},t)})}}function F(W){if(n){var B=W.touches&&W.touches[0];if(B){var K=B.clientX-n.x,q=B.clientY-n.y;if(Math.abs(K)>8&&Math.abs(K)>Math.abs(q)*1.2){W.cancelable&&W.preventDefault(),n.moved=!0;var s=n.el.querySelector(".swipe-reveal-main")||n.el,_=Math.max(-d,Math.min(0,K));s.style.transition="none",s.style.transform="translateX("+_+"px)",W.stopPropagation()}if(p){var l=B.clientX-p.x,m=B.clientY-p.y;(Math.abs(l)>r||Math.abs(m)>r)&&O()}}}}function V(W){if(O(),!!n){var B=n.el,K=W.changedTouches&&W.changedTouches[0],q=n.x,s=n.y,_="none";K&&(_=o(q,s,K.clientX,K.clientY));var l=n.moved;n=null;var m=B.querySelector(".swipe-reveal-main")||B;m.style.transform="",m.style.transition="",_==="left"?(w(B),B.classList.add("swipe-open"),f(B)):(_==="right"||l)&&B.classList.remove("swipe-open"),W.stopPropagation()}}function I(){O(),n=null}function $(W){if(R&&Date.now()<R.until){var B=R.el.contains(W.target)||W.target===R.el,K=W.target.closest&&W.target.closest(".swipe-reveal-actions");B&&!K&&(W.preventDefault(),W.stopPropagation(),R=null)}}document.addEventListener("touchstart",z,!0),document.addEventListener("touchmove",F,!0),document.addEventListener("touchend",V,!0),document.addEventListener("touchcancel",I,!0),document.addEventListener("click",$,!0)}function S(){c||typeof document>"u"||(c=!0,x())}return{judgeSwipe:o,judgePullToRefresh:i,judgeLongPress:g,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:e,PULL_THRESHOLD:u,LONG_PRESS_MS:t,LONG_PRESS_MOVE_SLOP:r,REVEAL_WIDTH:d,initGestures:S,_codeFromRow:k}});(function(){const a={empty:{icon:"inbox",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"alert-triangle",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"wifi-off",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},e=Object.keys(a);function u(d){return a[d]||a.empty}function t(){const d=[];for(const b of e){const o=a[b];o.title||d.push(b+".title"),b!=="loading"&&!o.icon&&d.push(b+".icon"),typeof o.retry!="boolean"&&d.push(b+".retry"),typeof o.skeleton!="boolean"&&d.push(b+".skeleton")}return{ok:d.length===0,errors:d}}const r={VARIANTS:a,KEYS:e,resolve:u,validate:t};typeof window<"u"&&(window.QuantStatePanel=r),typeof Re<"u"&&Re.exports&&(Re.exports=r)})();(function(){const{computed:a}=Vue,e=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(u){const t=a(()=>typeof e.resolve=="function"?e.resolve(u.type):{}),r=a(()=>u.icon||t.value.icon||""),d=a(()=>u.title||t.value.title||""),b=a(()=>u.desc||t.value.desc||""),o=a(()=>!!t.value.retry),i=a(()=>/^[a-z][a-z0-9-]*$/.test(String(r.value||"")));return{icon:r,title:d,desc:b,retryable:o,isIconName:i}}}})();(function(a,e){typeof Re=="object"&&Re.exports?Re.exports=e():a.QuantCommandPanel=e()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function a(n){return String(n||"").trim().toLowerCase()}function e(n,p){if(!n)return!0;const R=n.split(/\s+/).filter(Boolean);if(!R.length)return!0;const O=String(p||"").toLowerCase();return R.every(function(f){return O.indexOf(f)!==-1})}function u(){return{visible:!1,query:"",activeIndex:0}}function t(n,p){return p===void 0&&(p=!n.visible),n.visible=p,p&&(n.query="",n.activeIndex=0),n.visible}function r(n,p,R){const O=a(n);if(!p||!p.length)return[];const f=[];return p.forEach(function(w){const z=e(O,w.name)||e(O,w.key),F=(w.subPages||[]).filter(function(V){const I=R&&R[V]||V;return e(O,I)||e(O,V)});z&&f.push({type:"menu",menuKey:w.key,subPage:w.subPages&&w.subPages[0]||"",label:w.name,subLabel:"页面",icon:w.icon||"file-text"}),F.forEach(function(V){f.push({type:"menu",menuKey:w.key,subPage:V,label:R&&R[V]||V,subLabel:w.name,icon:w.icon||"file-text"})})}),f.slice(0,8)}function d(n,p){const R=a(n);return!p||!p.length?[]:p.filter(function(O){return!!(!R||e(R,O.label)||e(R,O.key)||O.keywords&&e(R,O.keywords))}).slice(0,8)}function b(n,p){const R=a(n);return!R||!p||!p.length?[]:p.filter(function(O){return e(R,O.code)||e(R,O.name)}).slice(0,8).map(function(O){return{type:"stock",code:O.code,name:O.name,label:O.name,subLabel:O.code,icon:"trending-up"}})}function o(n,p,R){const O=[],f=[];return R&&R.length&&(O.push({key:"stock",label:"股票",items:R}),f.push.apply(f,R)),n&&n.length&&(O.push({key:"menu",label:"菜单",items:n}),f.push.apply(f,n)),p&&p.length&&(O.push({key:"command",label:"指令",items:p}),f.push.apply(f,p)),{groups:O,flat:f}}function i(n,p,R){if(p<=0)return 0;const O=((n||0)+R)%p;return O<0?p-1:O}function g(n,p,R,O){const f=r(n,p,R).map(function(z){return{type:"menu",menuKey:z.menuKey,subPage:z.subPage,label:z.label,subLabel:z.subLabel,icon:z.icon,iconName:z.icon,value:z.icon+" "+z.label+" · "+z.subLabel}}),w=d(n,O||[]).map(function(z){return{type:"command",key:z.key,label:z.label,icon:z.icon,iconName:z.icon,subLabel:"指令",value:z.icon+" "+z.label}});return f.concat(w)}function c(n){return n?n.type==="menu"?{action:"menu",menuKey:n.menuKey,subPage:n.subPage}:n.type==="command"?{action:"command",key:n.key}:n.type==="sector"?{action:"sector",name:n.name}:n.type==="strategy"?{action:"strategy",id:n.id,name:n.name}:n.type==="stock"||n.code&&n.name?{action:"stock",code:n.code,name:n.name}:null:null}const D=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"onboarding",label:"新手引导（重新查看）",icon:"sparkles",keywords:"guide tour onboarding 引导 新手 帮助"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"},{key:"open-watchlist",label:"打开我的自选",icon:"star",keywords:"watchlist 自选 收藏"},{key:"manage-groups",label:"管理自选分组",icon:"folder-open",keywords:"groups 分组 自选 管理 归类"},{key:"open-focus",label:"打开重点跟踪",icon:"target",keywords:"focus 重点 跟踪 盯盘"},{key:"open-portfolio",label:"打开模拟组合",icon:"wallet",keywords:"portfolio 组合 持仓 净值"},{key:"open-backtest",label:"打开回测工作台",icon:"line-chart",keywords:"backtest 回测 净值 收益"},{key:"open-market-review",label:"打开每日复盘",icon:"book-open",keywords:"review 复盘 市场 收盘"},{key:"open-shortterm-sectors",label:"打开板块资金",icon:"pie-chart",keywords:"sector 板块 资金 行业"},{key:"open-shortterm-intraday",label:"打开盘中核验",icon:"clock",keywords:"intraday 盘中 核验 验证"},{key:"open-status",label:"打开系统状态",icon:"activity",keywords:"ops status 状态 运行 健康"},{key:"open-health",label:"打开数据源健康",icon:"database",keywords:"health 数据源 健康 源状态"},{key:"open-schedule",label:"打开调度任务",icon:"clock",keywords:"schedule 调度 任务 定时"},{key:"open-guard",label:"打开AI事实护栏",icon:"shield",keywords:"guard 护栏 事实 校验"},{key:"open-usage",label:"打开用量统计",icon:"bar-chart-3",keywords:"usage 用量 统计 调用量"},{key:"open-datadict",label:"打开数据字典",icon:"book-open",keywords:"datadict 数据字典 字段"},{key:"open-notification",label:"打开通知中心",icon:"bell",keywords:"notification 通知 消息"},{key:"open-users",label:"打开用户与权限",icon:"users",keywords:"users 用户 权限 rbac 角色"},{key:"open-autoeval",label:"打开AI服务配置",icon:"bot",keywords:"autoeval 自动评估 AI 服务 模型"},{key:"open-feature",label:"打开基础配置",icon:"settings",keywords:"feature 基础 配置 功能"},{key:"open-config",label:"打开配置保存",icon:"save",keywords:"config 配置 保存 备份"},{key:"open-strategies-overview",label:"打开策略概览",icon:"layout-dashboard",keywords:"strategies overview 策略 概览 总览"},{key:"open-merrill",label:"打开美林时钟",icon:"clock",keywords:"merrill 美林 时钟 周期 投资钟"},{key:"open-strategies-market",label:"打开大盘行情",icon:"line-chart",keywords:"market 大盘 行情 指数 大盘行情"},{key:"open-consensus",label:"打开策略共识榜",icon:"trophy",keywords:"consensus 共识 榜单 一致预期"},{key:"open-pool",label:"打开股票池",icon:"database",keywords:"pool 股票池 选池 日历"},{key:"open-ai-overview",label:"打开评估概览",icon:"bot",keywords:"ai overview 评估 概览 看板"},{key:"open-eval-analysis",label:"打开评估分析",icon:"bar-chart-3",keywords:"analysis 评估分析 分布 维度"},{key:"open-chat-history",label:"打开问股历史",icon:"message-circle",keywords:"chat history 问股 历史 对话"},{key:"open-quant-research",label:"打开量化研究",icon:"flask-conical",keywords:"quant research 量化 研究 注册表"},{key:"open-strategy-manage",label:"打开策略管理",icon:"layers",keywords:"manage 策略 管理 微调 母本"},{key:"open-backtest-history",label:"打开回测记录",icon:"history",keywords:"backtest 回测 记录 历史 净值"},{key:"open-ztpool",label:"打开涨停复盘",icon:"trending-up",keywords:"ztpool 涨停 复盘 池"},{key:"open-lhb",label:"打开龙虎榜",icon:"list",keywords:"lhb 龙虎榜 席位 资金"},{key:"open-execution",label:"打开执行看板",icon:"activity",keywords:"execution 执行 看板 流水线 任务"},{key:"open-about",label:"打开关于",icon:"info",keywords:"about 关于 版本 说明"},{key:"theme-gold",label:"金色主题",icon:"palette",keywords:"theme gold 金色 主题 颜色"},{key:"theme-blue",label:"蓝色主题",icon:"palette",keywords:"theme blue 蓝色 主题"},{key:"theme-red",label:"红色主题",icon:"palette",keywords:"theme red 红色 主题"},{key:"theme-green",label:"绿色主题",icon:"palette",keywords:"theme green 绿色 主题"},{key:"theme-purple",label:"紫色主题",icon:"palette",keywords:"theme purple 紫色 主题"},{key:"theme-pink",label:"粉色主题",icon:"palette",keywords:"theme pink 粉色 主题"},{key:"theme-dark",label:"暗色主题",icon:"moon",keywords:"theme dark 暗色 深色 夜间"},{key:"theme-light",label:"亮色主题",icon:"sun",keywords:"theme light 亮色 浅色 日间"}];var k={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function T(n){if(!n||typeof n!="string")return null;var p=n.split("+").map(function(f){return f.trim()}).filter(Boolean);if(!p.length)return null;var R=p.pop().toLowerCase();if(!R)return null;var O={ctrl:!1,alt:!1,shift:!1,meta:!1};return p.forEach(function(f){var w=f.toLowerCase();k.ctrl.indexOf(w)!==-1?O.ctrl=!0:k.alt.indexOf(w)!==-1?O.alt=!0:k.shift.indexOf(w)!==-1?O.shift=!0:k.meta.indexOf(w)!==-1&&(O.meta=!0)}),{ctrl:O.ctrl,alt:O.alt,shift:O.shift,meta:O.meta,key:R}}function C(n,p){if(!n||!p)return!1;var R=String(p.key||p.code||"").toLowerCase();return n.key!==R?!1:n.ctrl===!!p.ctrlKey&&n.alt===!!p.altKey&&n.shift===!!p.shiftKey&&n.meta===!!p.metaKey}function M(n){if(!n)return"";var p=[];return n.ctrl&&p.push("Ctrl"),n.alt&&p.push("Alt"),n.shift&&p.push("Shift"),n.meta&&p.push("Meta"),p.push(n.key.toUpperCase()),p.join("+")}function P(){var n={};return{register:function(p){if(!p||!p.key)throw new Error("命令 key 必填");if(n[p.key])throw new Error("命令重复注册: "+p.key);return n[p.key]=Object.assign({},p),p.key},list:function(){return Object.keys(n).map(function(p){return n[p]})},get:function(p){return n[p]||null},remove:function(p){delete n[p]},has:function(p){return!!n[p]},count:function(){return Object.keys(n).length}}}function x(){var n={},p={};return{register:function(R,O,f){var w=T(R);if(!w)throw new Error("无效快捷键: "+R);var z=M(w);if(n[z])throw new Error("快捷键冲突: "+R);if(O!=null&&p[O]!==void 0)throw new Error("动作重复绑定: "+O);return n[z]={combo:R,action:O,description:f||"",parsed:w},p[O]=z,z},resolve:function(R){for(var O in n)if(C(n[O].parsed,R))return n[O].action;return null},list:function(){return Object.keys(n).map(function(R){return n[R]})},unregister:function(R){var O=M(T(R));n[O]&&(delete p[n[O].action],delete n[O])},count:function(){return Object.keys(n).length}}}function S(){var n=x();return n.register("Ctrl+K","toggle-palette","打开命令面板"),n.register("F5","refresh","刷新当前页"),n.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),n.register("Ctrl+J","open-ai","打开 AI 问股"),n.register("Ctrl+D","open-today","今日一屏"),n.register("Ctrl+E","batch-eval","批量 AI 评估"),n.register("Ctrl+G","add-portfolio","加入组合"),n.register("Ctrl+H","open-eval-history","打开评估历史"),n.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),n}return{normalize:a,createPaletteState:u,toggleVisible:t,searchMenus:r,searchCommands:d,filterStocksLocal:b,mergeResults:o,moveIndex:i,buildSearchSuggestions:g,dispatchSearchSelection:c,DEFAULT_COMMANDS:D,parseKeyCombo:T,matchShortcut:C,canonicalCombo:M,createCommandRegistry:P,createShortcutRegistry:x,createDefaultShortcuts:S}});(function(a){if(a&&!a.QuantCommandPanel)try{var e=typeof Re<"u"&&Re.exports?Re.exports:null;e&&(a.QuantCommandPanel=e)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(a,e){var u=e();typeof Re=="object"&&Re.exports&&(Re.exports=u),a.QuantOnboarding=u})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var a=[{key:"today",title:"看懂今日一屏",target:"strategies",selector:".today-hero",desc:"先看美林时钟阶段与今日一屏：宏观周期、策略共识、股票池一目了然"},{key:"calendar",title:"量化日历与策略池",target:"calendar",selector:".stock-pool-body",desc:"日/周/月/年切换视图，按全部/新入池/当前持仓/已出池筛选股票"},{key:"evaluate",title:"智能评估一只股票",target:"ai",selector:".qc-work-area",desc:"点击任意股票查看详情：多模型 AI 评估、五维体检、历史趋势"},{key:"watchlist",title:"我的自选与重点跟踪",target:"ai",selector:"",desc:"在智能评估页把心仪股票加入自选，重点跟踪持续盯盘"},{key:"config",title:"系统配置要点",target:"system",selector:".system-page-root",desc:"数据源、AI Key、通知与主题都在系统配置，按需设置"}],e=a.length,u=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],t=u.length;function r(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function d(){return u.slice()}function b(V){return V<0?0:V>=t?t-1:V}function o(V){return{stepIndex:V.stepIndex,completed:!!V.completed,dismissed:!!V.dismissed,updatedAt:V.updatedAt||0}}function i(V){return o(Object.assign({},V,{stepIndex:b((V.stepIndex||0)+1),updatedAt:Date.now()}))}function g(V){return o(Object.assign({},V,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function c(V){return o(Object.assign({},V,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function D(V){var I=Math.min(V&&V.stepIndex||0,t);return{done:I,total:t,pct:Math.round(I/t*100)}}function k(V){return!!(V&&!V.completed&&!V.dismissed)}function T(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function C(){return a.slice()}function M(){return e}function P(V){return V<0?0:V>=e?e-1:V}function x(V){return{stepIndex:V.stepIndex,completed:!!V.completed,dismissed:!!V.dismissed,updatedAt:V.updatedAt||0}}function S(V){return x(Object.assign({},V,{stepIndex:P((V.stepIndex||0)+1),updatedAt:Date.now()}))}function n(V){return x(Object.assign({},V,{stepIndex:P((V.stepIndex||0)-1),updatedAt:Date.now()}))}function p(V,I){return x(Object.assign({},V,{stepIndex:P(I),updatedAt:Date.now()}))}function R(V){return x(Object.assign({},V,{completed:!0,updatedAt:Date.now()}))}function O(V){return x(Object.assign({},V,{dismissed:!0,updatedAt:Date.now()}))}function f(V){return!!(V&&V.completed)}function w(V){var I=Math.min(V&&V.stepIndex||0,e);return{done:I,total:e,pct:Math.round(I/e*100)}}function z(V){var I=V||T();return JSON.stringify({stepIndex:I.stepIndex,completed:!!I.completed,dismissed:!!I.dismissed,updatedAt:I.updatedAt||0})}function F(V){var I=T();if(!V||typeof V!="string")return I;try{var $=JSON.parse(V);if(!$||typeof $!="object")return I;var W=parseInt($.stepIndex,10);return isNaN(W)?I:{stepIndex:P(W),completed:!!$.completed,dismissed:!!$.dismissed,updatedAt:$.updatedAt||0}}catch{return I}}return{ONBOARDING_STEPS:a,steps:C,stepCount:M,createOnboardingState:T,next:S,prev:n,jumpTo:p,complete:R,dismiss:O,isComplete:f,progress:w,persistState:z,parseState:F,SHORTTERM_TOUR_STEPS:u,shorttermTourSteps:d,createShorttermTourState:r,shorttermTourNext:i,shorttermTourComplete:g,shorttermTourDismiss:c,shorttermTourProgress:D,shorttermTourShouldShow:k}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:e,onMounted:u}=Vue,t=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const r=a(!1),d=a(t.createOnboardingState()),b=e(function(){return t.steps()[d.value.stepIndex]}),o=e(function(){return t.progress(d.value)}),i=e(function(){return d.value.stepIndex>=t.stepCount()-1}),g=e(function(){return"onboarding.step."+b.value.key});function c(){const S=t.persistState(d.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:S}})}).then(function(n){return n.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",S)}catch{}})}function D(S){S&&window.__quantGoPage?window.__quantGoPage(S,""):S&&window.__quantState&&window.__quantState.currentPage&&(window.__quantState.currentPage.value=S,window.__quantState.currentSubPage&&(window.__quantState.currentSubPage.value=""))}function k(){d.value=t.next(d.value);const S=t.steps()[d.value.stepIndex];S&&S.target&&D(S.target)}function T(){d.value=t.prev(d.value);const S=t.steps()[d.value.stepIndex];S&&S.target&&D(S.target)}function C(){d.value=t.complete(d.value),c(),r.value=!1}function M(){d.value=t.dismiss(d.value),c(),r.value=!1}function P(){d.value=t.createOnboardingState(),c(),r.value=!0}function x(){fetch("/api/user_config/preferences").then(function(S){return S.json()}).then(function(S){const n=S&&S.preferences&&S.preferences.onboarding_progress;return n&&(d.value=t.parseState(n)),n}).catch(function(){return null}).then(function(S){if(!S)try{const n=localStorage.getItem("qc_onboarding_progress");n&&(d.value=t.parseState(n))}catch{}!t.isComplete(d.value)&&!d.value.dismissed&&(r.value=!0)}),window.addEventListener("qc:onboarding-replay",P)}return u(x),{visible:r,st:d,step:b,prog:o,isLast:i,stepKey:g,next:k,prev:T,finish:C,skip:M,replay:P}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"inbox"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
      <div class="qc-empty-state" role="status">
        <div class="qc-empty-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-empty-title">{{ title || t('common.emptyTitle') }}</div>
        <div class="qc-empty-desc">{{ desc || t('common.emptyDesc') }}</div>
        <el-button v-if="actionText" size="small" type="primary" @click="$emit('action')">{{ actionText }}</el-button>
      </div>
    `,setup(){function a(e){try{const u=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(u)return u(e)||""}catch{}return e}return{t:a}}},window.__quantComponents.ErrorState={name:"qc-error",props:{icon:{type:String,default:"alert-triangle"},title:{type:String,default:""},desc:{type:String,default:""},retrying:{type:Boolean,default:!1}},emits:["retry"],template:`
      <div class="qc-error-state" role="alert">
        <div class="qc-error-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-error-title">{{ title || t('common.errorTitle') }}</div>
        <div class="qc-error-desc">{{ desc || t('common.errorDesc') }}</div>
        <el-button v-if="!retrying" size="small" @click="$emit('retry')">{{ t('common.retry') }}</el-button>
        <el-button v-else size="small" :loading="retrying">{{ t('common.retry') }}</el-button>
      </div>
    `,setup(){function a(e){try{const u=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(u)return u(e)||""}catch{}return e}return{t:a}}})})();(function(){const{ref:a,computed:e,watch:u,nextTick:t,inject:r,onMounted:d}=Vue,b=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
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
    `,setup(){const o=r("qcState");if(!o)return{};const i=a(""),g=e({get:()=>o.commandPaletteVisible.value,set:q=>{o.commandPaletteVisible.value=q}}),c=a(0),D=a([]),k=a(null),T=e(()=>{const q=(b.DEFAULT_COMMANDS||[]).map(function(_){return Object.assign({},_)});return Object.keys(o.themes.value||{}).forEach(function(_){const l=o.themes.value[_];q.push({key:"theme:"+_,label:"切换主题 · "+(l.name||_),icon:"palette",keywords:"theme 主题"})}),q});function C(q){return typeof q=="string"&&/^[a-z][a-z0-9-]*$/.test(q)}const M=e(()=>o.menus.value||[]);function P(){const q=window.__quantModules&&window.__quantModules.pinyin;if(!q)return[];const s=[];return(o.watchlist&&o.watchlist.value||[]).forEach(function(_){s.push({code:_.code,name:_.name})}),(o.aiHistory&&o.aiHistory.value||[]).forEach(function(_){_&&_.stock_code&&s.push({code:_.stock_code,name:_.stock_name||_.stock_code})}),s.push.apply(s,q.getExtraStocks()),q.buildStockIndex(s)}function x(q){const s=window.__quantModules&&window.__quantModules.pinyin;return s?s.searchStocksByQuery(q,P()).map(function(_){return{type:"stock",code:_.code,name:_.name,label:_.name,subLabel:_.code,icon:"trending-up"}}):[]}function S(){const q=[],s=window.__quantModules&&window.__quantModules.recent;s&&s.getRecentViewed().slice(0,5).forEach(function(l){q.push({type:"stock",code:l.code,name:l.name||l.code,label:l.name||l.code,subLabel:"最近查看 · "+l.code,icon:"trending-up"})});const _=(o.watchlist&&o.watchlist.value||[]).slice(0,8).map(function(l){return{type:"stock",code:l.code,name:l.name||l.code,label:l.name||l.code,subLabel:"我的自选 · "+l.code,icon:"trending-up"}});return q.concat(_)}const n=e(()=>{const q=i.value;if(!q)return b.mergeResults([],[],S());const s=b.searchMenus(q,M.value,o.subPageNames),_=b.searchCommands(q,T.value),l=D.value;return b.mergeResults(s,_,l)}),p=e(()=>n.value);function R(q){return p.value.flat[c.value]===q}function O(q){c.value=p.value.flat.indexOf(q)}function f(q){return(q.type||"")+":"+(q.code||q.menuKey||q.key||q.label)}let w=null;function z(){const q=i.value.trim();if(q.length<1){D.value=[];return}w&&clearTimeout(w),w=setTimeout(function(){const s=x(q);D.value=s,c.value=0,o.searchStocks(q,function(_){if(i.value.trim()!==q)return;const l=(_||[]).filter(function(N){return N&&N.code&&N.name}).map(function(N){return{type:"stock",code:N.code,name:N.name,label:N.name,subLabel:N.code,icon:"trending-up"}}),m={},J=[];s.forEach(function(N){m[N.code]||(m[N.code]=!0,J.push(N))}),l.forEach(function(N){m[N.code]||(m[N.code]=!0,J.push(N))}),D.value=J,c.value=0})},200)}function F(){c.value=b.moveIndex(c.value,p.value.flat.length,1)}function V(){c.value=b.moveIndex(c.value,p.value.flat.length,-1)}function I(){const q=p.value.flat[c.value];q&&$(q)}function $(q){o.commandPaletteVisible.value=!1,q.type==="menu"?o.navigateTo(q.menuKey,q.subPage):q.type==="stock"?o.showStockDetail(q.code,q.name):q.type==="command"&&W(q.key)}function W(q){if(q==="refresh"){const s=o.currentPage.value;s==="strategies"?o.loadDashboardData().catch(function(){}):s==="calendar"?o.refreshCalendarData().catch(function(){}):s==="ai"&&o.loadAiHistory().catch(function(){})}else q==="export"?o.exportCSV():q==="batch"?o.showBatchEvaluate.value=!0:q==="ai"?o.openAiFab():q==="sidebar"?o.toggleSidebar():q==="today"?o.navigateTo("strategies","overview"):q==="onboarding"?window.dispatchEvent(new CustomEvent("qc:onboarding-replay")):q==="add-portfolio"?(o.currentPage.value="ai",o.currentSubPage.value="portfolio"):q==="open-system"?o.navigateTo("system","config"):q==="open-shortterm"?o.navigateTo("shortterm","overview"):q==="open-research"?o.navigateTo("research","research-overview"):q==="open-calendar"?o.navigateTo("calendar","calendar"):q==="refresh-data-source"?o.navigateTo("system","datasource"):q==="open-watchlist"?o.navigateTo("ai","watchlist"):q==="manage-groups"?window.dispatchEvent(new CustomEvent("qc:show-watch-groups")):q==="open-focus"?o.navigateTo("ai","focus"):q==="open-portfolio"?o.navigateTo("ai","portfolio"):q==="open-backtest"?o.navigateTo("research","backtest"):q==="open-market-review"?o.navigateTo("shortterm","market-review"):q==="open-shortterm-sectors"?o.navigateTo("shortterm","sector"):q==="open-shortterm-intraday"?o.navigateTo("shortterm","intraday"):q==="open-status"?o.navigateTo("ops","status"):q==="open-health"?o.navigateTo("ops","health"):q==="open-schedule"?o.navigateTo("ops","schedule"):q==="open-guard"?o.navigateTo("ops","guard"):q==="open-usage"?o.navigateTo("ops","usage"):q==="open-datadict"?o.navigateTo("ops","datadict"):q==="open-notification"?o.navigateTo("system","notification"):q==="open-users"?o.navigateTo("system","user"):q==="open-autoeval"?o.navigateTo("system","autoeval"):q==="open-feature"?o.navigateTo("system","feature"):q==="open-config"?o.navigateTo("system","config"):q==="open-strategies-overview"?o.navigateTo("strategies","overview"):q==="open-merrill"?o.navigateTo("strategies","merrill"):q==="open-strategies-market"?o.navigateTo("strategies","market"):q==="open-consensus"?o.navigateTo("strategies","consensus"):q==="open-pool"?o.navigateTo("calendar","pool"):q==="open-ai-overview"?o.navigateTo("ai","overview"):q==="open-eval-analysis"?o.navigateTo("ai","evaluation-analysis"):q==="open-eval-history"?o.navigateTo("ai","history"):q==="open-chat-history"?o.navigateTo("ai","chat_history"):q==="open-quant-research"?o.navigateTo("research","quant-research"):q==="open-strategy-manage"?o.navigateTo("research","strategy-manage"):q==="open-backtest-history"?o.navigateTo("research","backtest-history"):q==="open-ztpool"?o.navigateTo("shortterm","ztpool"):q==="open-lhb"?o.navigateTo("shortterm","lhb"):q==="open-execution"?o.navigateTo("ops","execution"):q==="open-about"?o.navigateTo("system","about"):q==="theme-dark"?o.changeTheme("dark-pro"):q==="theme-light"?o.changeTheme("gold"):q==="theme-gold"?o.changeThemeHue(45):q==="theme-blue"?o.changeThemeHue(220):q==="theme-red"?o.changeThemeHue(0):q==="theme-green"?o.changeThemeHue(140):q==="theme-purple"?o.changeThemeHue(270):q==="theme-pink"?o.changeThemeHue(320):q.indexOf("theme:")===0&&o.changeTheme(q.slice(6))}u(g,function(q){q&&(i.value="",D.value=[],c.value=0,t(function(){k.value&&k.value.focus&&k.value.focus()}))}),u(i,z);function B(q){q==="toggle-palette"?o.commandPaletteVisible.value=!o.commandPaletteVisible.value:q==="toggle-sidebar"?o.toggleSidebar():q==="open-ai"?o.openAiFab():q==="refresh"?W("refresh"):q==="open-today"?W("today"):q==="batch-eval"?W("batch"):q==="add-portfolio"?W("add-portfolio"):q==="open-eval-history"?W("open-eval-history"):q==="open-shortterm"&&W("open-shortterm")}function K(q){if(!b.createDefaultShortcuts||!b.createShortcutRegistry)return;const _=b.createDefaultShortcuts().resolve({key:q.key,ctrlKey:q.ctrlKey,altKey:q.altKey,shiftKey:q.shiftKey,metaKey:q.metaKey});_&&(q.preventDefault(),B(_))}return d(function(){document.addEventListener("keydown",K)}),{visible:g,query:i,results:p,inputEl:k,sanitizeHtml:o.sanitizeHtml,isIconName:C,onDown:F,onUp:V,onEnter:I,execute:$,isActive:R,setActive:O,itemKey:f,onGlobalKeydown:K}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
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
    `,setup(){const e=a("qcState");if(!e)return{};const u=window.__quantModules&&window.__quantModules.themes&&window.__quantModules.themes.legacyThemes||{},t=Object.keys(u).length?u:e.themes||{light:{name:"浅色"},dark:{name:"深色"}};return{...e,themeOptions:t}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.BatchEvaluateDialog={name:"qc-batch-evaluate-dialog",template:`
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
    `,setup(){const e=a("qcState");if(!e)return{};const u=window.QuantFormMemory;function t(){const o=e.currentUser;return o&&o.value&&o.value.username||"guest"}Vue.watch(()=>e.showBatchEvaluate&&e.showBatchEvaluate.value||!1,o=>{if(o&&u){const i=u.loadForm("batch-evaluate",t(),1);i&&i.batchStocks&&!(e.batchStocks&&e.batchStocks.value)&&(e.batchStocks.value=i.batchStocks)}});function r(){return u&&u.saveForm("batch-evaluate",{batchStocks:e.batchStocks&&e.batchStocks.value||""},t(),1),e.doBatchEvaluate()}const d=Vue.ref(0);let b=null;return e.batchRunning&&e.batchRunning.__v_isRef&&Vue.watch(e.batchRunning,o=>{o?(d.value=0,b=setInterval(()=>{d.value++},1e3)):b&&(clearInterval(b),b=null)}),{...e,batchElapsed:d,onBatchEvaluate:r}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
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
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:e,onMounted:u}=Vue;window.__quantComponents=window.__quantComponents||{};const t=["#c49b2e","#2563eb","#dc2626","#16a34a","#7c3aed","#db2777","#64748b","#b45309"];window.__quantComponents.WatchGroupsDialog={name:"qc-watch-groups-dialog",template:`
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
    `,setup(){const r=a(!1),d=a(!1),b=a(!1),o=a([]),i=a({}),g=a(""),c=a(""),D=a("");function k(f,w){w=w||{},w.headers=Object.assign({},w.headers||{});const z=localStorage.getItem("quant_token")||"";return z&&(w.headers.Authorization="Bearer "+z),fetch(f,w)}async function T(){d.value=!0;try{const w=await(await k("/api/watchlist/groups")).json();w&&w.success&&(o.value=w.groups||[],i.value=w.mapping||{})}catch{}d.value=!1}function C(f){return Object.values(i.value).filter(function(w){return w===f}).length}function M(f){const w=o.value[f],z=t.indexOf(w.color);w.color=t[(z+1)%t.length]}function P(f){if(f<=0)return;const w=o.value.slice(),z=w[f-1];w[f-1]=w[f],w[f]=z,o.value=w}function x(f){if(f>=o.value.length-1)return;const w=o.value.slice(),z=w[f+1];w[f+1]=w[f],w[f]=z,o.value=w}function S(){const f=g.value.trim();f&&(o.value.some(function(w){return w.name===f})||(o.value.push({name:f,color:t[o.value.length%t.length],sort_order:o.value.length,expanded:!0}),g.value=""))}function n(f){c.value=f,D.value=f}function p(f){const w=D.value.trim();if(!w||w===f||o.value.some(function(F){return F.name===w})){c.value="";return}o.value=o.value.map(function(F){return F.name===f?Object.assign({},F,{name:w}):F});const z={};Object.keys(i.value).forEach(function(F){z[F]=i.value[F]===f?w:i.value[F]}),i.value=z,c.value=""}function R(f){o.value=o.value.filter(function(z){return z.name!==f});const w={};Object.keys(i.value).forEach(function(z){w[z]=i.value[z]===f?"默认分组":i.value[z]}),i.value=w}async function O(){b.value=!0;try{await k("/api/watchlist/groups",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({groups:o.value,mapping:i.value})}),ElementPlus.ElMessage.success("分组已保存"),r.value=!1}catch{ElementPlus.ElMessage.error("保存失败")}b.value=!1}return u(function(){window.addEventListener("qc:show-watch-groups",function(){r.value=!0,T()})}),{visible:r,loading:d,saving:b,groups:o,mapping:i,newName:g,renaming:c,renameVal:D,load:T,countIn:C,cycleColor:M,moveUp:P,moveDown:x,addGroup:S,startRename:n,commitRename:p,remove:R,save:O}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.IndexDetailDialog={name:"qc-index-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a,computed:e,ref:u,watch:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StockDetailDialog={name:"qc-stock-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
    `,setup(){const r=a("qcState");if(!r)return{};const d={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},b=e(()=>d[r.aiEvalStage.value]||""),o=e(()=>{const I=r.aiResult&&r.aiResult.value&&r.aiResult.value.result&&r.aiResult.value.result.level;return I?I==="强烈推荐"||I==="推荐"?"var(--success-text)":I==="谨慎推荐"?"var(--warning-text)":I==="中性"||I==="观望"?"var(--text-secondary)":I==="评估失败"||I==="无可用模型"?"var(--danger-text)":"var(--color-primary)":"var(--color-primary)"});function i(I){const $=document.createElement("textarea");$.value=I,$.style.position="fixed",$.style.opacity="0",document.body.appendChild($),$.select(),document.execCommand("copy"),document.body.removeChild($)}async function g(){const I=r.aiResult&&r.aiResult.value;if(!I||!I.result)return;const $=I.result.dimensions||{},W=Object.entries($).map(([K,q])=>`${K} ${Math.round(q)}分`).join(`
`),B=`【AI 智能评估】${I.result.level||""} ${I.result.total_score!=null?I.result.total_score:"—"}分
模型：${I.model_used||I.result.provider||"—"}

${I.result.detailed_report||""}

九维度评分：
${W||"无"}`;try{await navigator.clipboard.writeText(B),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{i(B),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const c=u(!1),D=u(!1),k=u(null),T=u([]),C={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function M(I){return C[I]||"factor-sem-none"}async function P(){const I=r.stockDetail.value&&r.stockDetail.value.stock;if(I){c.value=!0,D.value=!1,T.value=[],k.value=null;try{const $=r.selectedDate.value?`?date=${r.selectedDate.value}`:"",W=await fetch(`/api/calendar/stock/${I}/factors${$}`).then(s=>s.json()),B=W&&Array.isArray(W.factors)?W.factors:[],K=[],q={};B.forEach(s=>{q[s.category]||(q[s.category]={category:s.category,items:[]},K.push(q[s.category])),q[s.category].items.push(s)}),T.value=K,k.value=W&&W.summary||null}catch{D.value=!0}finally{c.value=!1}}}t(r.stockDetailTab,I=>{I==="factor"&&r.stockDetail.value&&r.stockDetailVisible.value&&(P(),S())});const x=u(null);async function S(){try{const I=await fetch("/api/market/factor-ic").then($=>$.json());x.value=I&&I.success&&I.data?I.data:{}}catch{x.value={}}}function n(I){if(!I||!I.n5)return"—";const $=I.n5.icir!=null?"ICIR "+I.n5.icir:"ICIR —";return I.n5.grade+" ("+$+")"}const p=u(!1),R=u(!1),O=u([]),f=u([]);function w(I){if(I==null)return"—";const $=Number(I);return Number.isNaN($)?"—":Math.abs($)>=1e8?($/1e8).toFixed(2)+"亿":Math.abs($)>=1e4?($/1e4).toFixed(1)+"万":String($)}async function z(){const I=r.stockDetail&&r.stockDetail.value&&r.stockDetail.value.stock;if(I){p.value=!0,R.value=!1;try{const $=await fetch("/api/market/performance/"+encodeURIComponent(I)).then(W=>W.json());$&&$.success?(O.value=$.forecast||[],f.value=$.express||[]):R.value=!0}catch{R.value=!0}finally{p.value=!1}}}t(r.stockDetailTab,I=>{I==="performance"&&z()});const F=u(null);async function V(){const I=r.stockDetail&&r.stockDetail.value&&r.stockDetail.value.stock;if(!I){F.value=null;return}try{const $=await fetch("/api/focus/stock/"+encodeURIComponent(I)+"/pool").then(W=>W.json());F.value=$&&$.success&&$.data?$.data:null}catch{F.value=null}}return t(()=>r.stockDetail&&r.stockDetail.value&&r.stockDetail.value.stock,I=>{I&&r.stockDetailVisible.value?V():F.value=null}),t(()=>r.stockDetailVisible.value,I=>{I?V():F.value=null}),{...r,aiStageText:b,levelRingColor:o,copyAiReport:g,factorLoading:c,factorError:D,factorSummary:k,factorGroups:T,factorSemClass:M,loadFactorPanel:P,factorIc:x,loadFactorIc:S,factorIcGrade:n,perfLoading:p,perfError:R,perfForecast:O,perfExpress:f,fmtY:w,loadPerformance:z,poolInfo:F,loadPoolInfo:V}}}})();(function(){const{computed:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
    `,setup(u){const t=e("qcState");if(!t)return{};const r=a(()=>u.type==="history"?t.selectedHistoryIds.value.includes(u.item.id):t.selectedChatIds.value.includes(u.item.id)),d=a(()=>{const C=t.watchlistCodes.value.has(u.item.stock_code);return{icon:"star",isWatched:C,label:C?"取消收藏":"加入收藏"}}),b=a(()=>u.type==="history"?"bot":"message-circle"),o=a(()=>{var C;return u.type==="history"?((C=u.item.result)==null?void 0:C.provider)||"":u.item.first_msg||""}),i=a(()=>{var C,M;return`${((M=(C=u.item.result)==null?void 0:C.dimensions)==null?void 0:M.length)||9}维度分析`}),g=a(()=>{var M,P;const C=u.type==="history"?u.item.evaluate_time:u.item.created_at||"";return C?u.timeFormat==="datetime"?u.type==="history"?`${C.split("T")[0]} ${(C.split("T")[1]||"").split(".")[0]}`:`${C.split("T")[0]} ${((M=C.split("T")[1])==null?void 0:M.substring(0,5))||""}`:u.type==="history"?(C.split("T")[1]||"").split(".")[0]||C:((P=C.split("T")[1])==null?void 0:P.substring(0,5))||"":""});function c(){u.type==="history"?t.toggleSelectHistory(u.item.id):t.toggleSelectChat(u.item.id)}function D(){u.type==="history"?t.viewAiResult(u.item):t.viewChatSession(u.item)}async function k(){try{await ElementPlus.ElMessageBox.confirm(u.type==="history"?"确定删除这条评估记录吗？此操作不可恢复。":"确定删除这段对话吗？此操作不可恢复。","删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}u.type==="history"?t.deleteSingleHistory(u.item.id):t.deleteChatSession(u.item.id)}function T(C,M){t.toggleWatchlist(C,M)}return{isSelected:r,watchState:d,providerIcon:b,providerText:o,dimsText:i,timeText:g,toggleSelect:c,view:D,remove:k,toggleWatchlist:T,keyClick:t.keyClick,fmtNum:t.fmtNum,evaluatedCodes:t.evaluatedCodes,klineLoadedCodes:t.klineLoadedCodes,levelColor:t.levelColor,levelBg:t.levelBg}}}})();(function(){const{ref:a,computed:e,onMounted:u,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{};const r=["买入","持有","观望","减仓","卖出"],d={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},b={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},o=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],i={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},g=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function c(k){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(k).then(M=>M.json?M.json():M)}function D(){const k=new Date,T=C=>C<10?"0"+C:""+C;return k.getFullYear()+"-"+T(k.getMonth()+1)+"-"+T(k.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",emits:["load-state"],template:`
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
      </div>`,setup(k,{emit:T}){const C=t("qcState"),M=a(D()),P=a("after_close"),x=a({rows:[],actions:{},total:0,groups:{}}),S=a({sessions:{},total:0}),n=a(null),p=a(!1),R=a(""),O=a(!1),f=a(!1),w=a(!1),z=a([]),F=a(""),V=a(null),I={},$=a({});let W=0;const B=a(null),K=e(function(){const ee=x.value&&x.value.groups||{};return Object.keys(ee).length?ee:x.value&&x.value.rows&&x.value.rows.length?{全部:x.value.rows}:{}}),q=e(function(){const ee=B.value;return!ee||!ee.date||ee.date!==M.value?"":"已加载最近一次评估: "+ee.date+" · "+(i[ee.session]||ee.session)}),s=e(function(){const ee=x.value&&x.value.base_date;return ee?ee===M.value?"评分范围: "+ee+" 收盘池 + 自选":"评分范围: "+ee+" 收盘池(前一交易日算好) + 自选":""});function _(){w.value=!f.value&&(x.value.rows||[]).length===0&&Object.keys(S.value.sessions||{}).length===0,T("load-state",{error:f.value,empty:w.value})}function l(ee){if(ee==null)return"—";const X=Number(ee);return X===Math.floor(X)?String(X):X.toFixed(1)}function m(ee){const X=x.value.total||0,be=(x.value.actions||{})[ee]||0;if(!X)return"0%";const H=be/X*100;return H>0&&H<4?"4%":H.toFixed(1)+"%"}function J(ee){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[ee]||"info"}function N(ee){const X=n.value&&n.value.overall&&n.value.overall[ee]||null;return!X||X.total===0||X.rate===null||X.rate===void 0?"info":X.rate>=60?"success":X.rate>=40?"warning":"danger"}function E(ee){const X=n.value&&n.value.overall&&n.value.overall[ee]||null;return!X||X.total===0||X.rate===null||X.rate===void 0?"样本不足":X.rate.toFixed(1)+"% ("+X.total+" 样本)"}function v(){return i[P.value]||P.value}function A(ee){const X=z.value.indexOf(ee);X>=0?z.value.splice(X,1):z.value.push(ee)}function y(ee){if(!ee||!ee.raw_json)return{};if(I[ee.stock_code+ee.session+ee.trade_date])return I[ee.stock_code+ee.session+ee.trade_date];let X={};try{X=JSON.parse(ee.raw_json)||{}}catch{X={}}return I[ee.stock_code+ee.session+ee.trade_date]=X,X}async function j(){try{const ee=await c("/api/focus/latest"),X=ee&&ee.success&&ee.data;X&&X.date&&(B.value=X,M.value=X.date,X.session&&(P.value=X.session))}catch(ee){console.warn("[focus] 最近一次评估解析失败:",ee)}}async function te(){O.value=!0,f.value=!1;try{const ee=await c("/api/focus/results?date="+M.value+"&session="+P.value);x.value=ee&&ee.success&&ee.data||{rows:[],actions:{},total:0,groups:{}},re((x.value.rows||[]).map(function(X){return X.stock_code}))}catch(ee){console.warn("[focus] 结果加载失败:",ee),x.value={rows:[],actions:{},total:0,groups:{}},f.value=!0}finally{O.value=!1,_()}}async function re(ee){const X=$.value||{},be=(ee||[]).filter(function(ue){return ue&&!X[ue]});if(!be.length)return;const H=++W,me=be.map(function(ue){return c("/api/focus/stock/"+encodeURIComponent(ue)+"/pool?date="+M.value).then(function(Z){Z&&Z.success&&Z.data?X[ue]=Z.data:X[ue]={stock_code:ue,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){X[ue]={stock_code:ue,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(me)}catch{}H===W&&($.value=Object.assign({},X))}function se(ee){const X=C&&C.showStockDetail;if(typeof X=="function"){X(ee);return}const H=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;H&&H.info("请从其他页面打开股票详情: "+ee)}async function le(){try{const ee=await c("/api/focus/history?date="+M.value);S.value=ee&&ee.success&&ee.data||{sessions:{},total:0}}catch(ee){console.warn("[focus] 历史加载失败:",ee),S.value={sessions:{},total:0},f.value=!0}_()}async function Q(){p.value=!0;try{const ee=await c("/api/ai/track");ee&&ee.success&&ee.data?(n.value=ee.data,R.value=(ee.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):n.value=null}catch(ee){console.warn("[focus] 效果块加载失败:",ee),n.value=null,f.value=!0}finally{p.value=!1,_()}}async function ie(){const ee=(F.value||"").trim();if(ee){V.value=null;try{const X=await c("/api/focus/stock/"+encodeURIComponent(ee));V.value=X&&X.success&&X.data&&X.data.rows||[]}catch(X){console.warn("[focus] 单股历史加载失败:",X),V.value=[]}}}async function Ce(){await te(),await le(),await Q()}return u(async function(){await j(),await Ce()}),{curDate:M,session:P,results:x,history:S,track:n,trackLoading:p,trackNote:R,detailSplitEnabled:C.detailSplitEnabled,stockDetail:C.stockDetail,loading:O,expanded:z,stockCode:F,stockHistory:V,SESSIONS:o,ACTION_ORDER:r,TRACK_WINDOWS:g,ACTION_DOT:d,TIER_DOT:b,SESSION_LABELS:i,displayGroups:K,latestNote:q,baseNote:s,sessionLabel:v,fmtScore:l,tagType:J,rateTagType:N,fmtRate:E,toggle:A,detailOf:y,loadResults:te,loadHistory:le,loadTrack:Q,loadStockHistory:ie,loadAll:Ce,poolStatus:$,openStockDetail:se,actionPct:m}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:e,nextTick:u}=Vue,{currentView:t,statusFilter:r,dashboardData:d,loadHealthMetrics:b,getLoadDashboardData:o,getLastRefreshTime:i,getFetchPoolSignals:g}=a,c=e(!1),D=e(""),k=new Map,T=e([]),C=e(""),M=e(""),P=e([]),x=e(!1),S=e(""),n=window.__quantModules.core||{},p=typeof n.createTtlCache=="function"?n.createTtlCache(15e3):null;let R=0;function O(){const W=Date.now();W-R<5e3||(R=W,ElementPlus.ElMessage.success("有新数据，已更新"))}function f(W,B,K,q){!p||!B||typeof n.silentRefresh!="function"||n.silentRefresh({cache:p,key:B,fetchFn:async()=>{const s=await fetch(W);if(!s.ok)throw new Error("HTTP "+s.status);const _=await s.json();return K?K(_):_},ttl:p.defaultTtl,apply:q,onChanged:O,onError:()=>{}})}const w=new Set;async function z(){var W;try{const K=await(await fetch("/api/dates")).json();T.value=((W=K.data)==null?void 0:W.dates)||K.dates||[],T.value.length>0&&(C.value=T.value[T.value.length-1]),M.value=new Date().toLocaleTimeString()}catch(B){console.error(B)}}async function F(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),M.value="刷新中...",k.clear(),await z(),await I(),M.value=new Date().toLocaleTimeString()}catch(W){console.error("数据刷新失败",W)}}function V(){if(!C.value)return;const B="/api/view/"+(t.value||"day")+"/"+C.value+"?status="+(r.value||"all")+"&format=csv";window.open(B,"_blank")}async function I(){if(x.value=!1,!C.value)return;const W=`${t.value}_${C.value}`;if(w.has(W))return;w.add(W);const B=`/api/view/${t.value}/${C.value}?status=all`,K=p&&typeof n.makeCacheKey=="function"?n.makeCacheKey("GET",`/api/view/${t.value}/${C.value}`,{status:"all"}):null,q=(l,m)=>{P.value=l,S.value=m||"",k.set(W,{stocks:l,note:m||""})},s=l=>{q(l&&l.stocks||[],l&&l.note||"")};if(k.has(W)){s(k.get(W)),f(B,K,l=>l,s),w.delete(W);return}const _=K&&p?p.get(K):void 0;if(_!==void 0){s(_),f(B,K,l=>l,s),w.delete(W);return}c.value=!0,D.value={day:"日",week:"周",month:"月",year:"年"}[t.value]||t.value;try{const m=await(await fetch(B)).json(),J=m.stocks||[];q(J,m.note||""),p&&K&&p.set(K,{stocks:J,note:m.note||""})}catch{try{const J=await(await fetch(`/api/calendar/${C.value}/consensus`)).json();P.value=(J.consensus||[]).map(N=>({...N,code:N.stock,status:"current"}))}catch{x.value=!0,ElementPlus.ElMessage.error("数据加载失败")}}finally{c.value=!1}g(),w.delete(W)}async function $(){const W=p&&typeof n.makeCacheKey=="function"?n.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(p){const B=p.get(W);if(B!==void 0){d.value=B,b().catch(()=>{}),f("/api/dashboard",W,K=>K.data||K,K=>{d.value=K,i().value=Date.now()});return}}await o()(),b().catch(()=>{}),p&&p.set(W,d.value)}return{loading:c,loadingView:D,viewCache:k,dates:T,selectedDate:C,lastLoadTime:M,consensus:P,viewNote:S,consensusError:x,loadDates:z,refreshCalendarData:F,exportCSV:V,loadConsensusData:I,loadDashboardCached:$}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:e}=Vue,{currentKlinePeriod:u,loadIndexKline:t,rememberDialogTrigger:r,menus:d,currentPage:b,currentSubPage:o,stockDetail:i,selectedDate:g}=a,c=ref({indices:[],market_sentiment:null}),D=ref(!1);let k=null;const T=ref(!1),C=ref(null),M=ref(null),P=ref(!1);function x(){window.__quantModules.charts.disposeKline("stockKlineChart")}const S=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{S.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const n=ref(!1),p=ref(null),R=ref(!1),O=ref(0),f=ref(0);async function w(){D.value=!1;try{const m=await(await fetch("/api/market/overview")).json();c.value=m,z(m)}catch(l){D.value=!0,console.error("获取市场行情失败:",l)}}function z(l){k&&clearInterval(k),l&&l.in_trading_hours&&(k=setInterval(w,6e5))}function F(l){r(),C.value=l,M.value=null,u.value="daily",V(l.code),window.__quantModules.charts.disposeKline("indexKlineChart"),T.value=!0,setTimeout(async()=>{await t("daily")},500)}async function V(l){try{const J=await(await fetch("/api/ai/index-eval/"+l)).json();J.success&&J.data&&(M.value=J.data)}catch(m){console.warn("[getIndexAiScore] cache check failed:",m)}}async function I(){if(C.value){P.value=!0;try{const m=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:C.value.code,index_name:C.value.name,current_price:C.value.close,pct_chg:C.value.pct_chg})})).json();m.success?M.value=m.data:ElementPlus.ElMessage.error(m.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{P.value=!1}}}function $(l){window.__quantModules.charts.zoomKline("stockKlineChart",l)}function W(){R.value=!0,setTimeout(()=>{R.value=!1},600)}function B(l,m){if(l===m){W();return}const J=800,N=performance.now(),E=m-l;n.value=!0,p.value={value:E,dir:E>0?"up":"down"},R.value=!0,setTimeout(()=>{R.value=!1},600),setTimeout(()=>{p.value=null},2300);function v(A){const y=A-N,j=Math.min(y/J,1),te=1-Math.pow(1-j,3),re=Math.round(l+E*te);i.value&&i.value.score_data&&(i.value.score_data.score=re),j<1?requestAnimationFrame(v):(i.value&&i.value.score_data&&(i.value.score_data.score=m),n.value=!1)}requestAnimationFrame(v)}function K(){if(!i.value||!i.value.score_data)return;const l=i.value.score_data.score;if(l==null)return;const m=600,J=performance.now();R.value=!0,setTimeout(()=>{R.value=!1},600);function N(E){const v=Math.min((E-J)/m,1),A=1-Math.pow(1-v,3),y=Math.round(l*A);i.value&&i.value.score_data&&(i.value.score_data.score=y),v<1?requestAnimationFrame(N):i.value&&i.value.score_data&&(i.value.score_data.score=l)}requestAnimationFrame(N)}async function q(){var J;if(!i.value||!i.value.stock)return;const l=i.value.stock,m=(J=i.value.score_data)==null?void 0:J.score;try{const N=new Date().toISOString().split("T")[0],E=g.value||N,A=await(await fetch(`/api/calendar/stock/${encodeURIComponent(l)}/score?date=${E}`)).json();if(A.success&&A.score_data){const y=A.score_data.score;i.value&&(i.value.score_data=A.score_data),m!=null&&y!==m?B(m,y):W()}else W()}catch(N){console.warn("[refreshStockScore] failed:",N)}}function s(l){S.value&&(O.value=l.touches[0].clientX,f.value=l.touches[0].clientY)}function _(l){if(!S.value)return;const m=O.value-l.changedTouches[0].clientX,J=f.value-l.changedTouches[0].clientY;if(Math.abs(m)>Math.abs(J)&&Math.abs(m)>80){const N=d.value.map(function(v){return v.key}),E=N.indexOf(b.value);if(m>0&&E<N.length-1){const v=N[E+1],A=window.__quantGoPage;A?A(v,""):(b.value=v,o.value="")}else if(m<0&&E>0){const v=N[E-1],A=window.__quantGoPage;A?A(v,""):(b.value=v,o.value="")}}}return{marketData:c,marketRefreshTimer:k,marketError:D,fetchMarketData:w,indexDetailVisible:T,indexDetail:C,indexAiResult:M,indexAiLoading:P,showIndexDetail:F,loadCachedIndexEval:V,doIndexAiEvaluate:I,disposeStockKline:x,isMobile:S,zoomKlineRange:$,scoreAnimating:n,scoreDelta:p,scorePulse:R,triggerScorePulse:W,animateScoreChange:B,animateScoreEntrance:K,refreshStockScore:q,touchStartX:O,touchStartY:f,onTouchStart:s,onTouchEnd:_}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:e,currentPage:u,currentSubPage:t}=a,r=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),d=ref("idle"),b=ref("");async function o(){if(!r.value.webhook_url){b.value="请先输入Webhook地址";return}d.value="testing",b.value="";try{const ie=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:r.value.webhook_url})})).json();ie.success||ie.status==="ok"?(b.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(b.value=ie.message||"测试失败",ElementPlus.ElMessage.error(b.value))}catch{b.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}d.value="idle"}const i=Vue.ref(!1);async function g(){i.value=!0;try{const ie=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{i.value=!1}}const c=ref(!1);function D(){e("ai","chat_history"),c.value=!0,Vue.nextTick(()=>{const Q=document.querySelector('input[placeholder*="输入问题"]');Q&&Q.focus()})}const k=ref([]),T=ref({});async function C(){try{const ie=await(await fetch("/api/ai/recommend-strategies")).json();ie.success&&(k.value=ie.recommendations||[])}catch(Q){console.warn("[loadStrategyRecommendations] failed:",Q)}}async function M(){try{const ie=await(await fetch("/api/ai/usage-stats")).json();ie.success&&(T.value=ie)}catch(Q){console.warn("loadAiUsage failed:",Q)}}const P=ref({}),x=ref([]),S=ref(7),n=ref(!1),p=ref(!1),R=ref(!1);async function O(){n.value=!1;try{const ie=await(await fetch("/api/system/monitor")).json();ie.success&&(P.value=ie)}catch(Q){n.value=!0,console.warn("loadSysMonitor failed:",Q)}}const f=ref({});async function w(){p.value=!1;try{const ie=await(await fetch("/api/system/health-detail")).json();ie.success&&(f.value=ie)}catch(Q){p.value=!0,console.warn("loadHealthDetail failed:",Q)}}async function z(){try{const ie=await(await fetch(`/api/analytics/rank?days=${S.value}`)).json();ie.success&&(x.value=ie.rank||[])}catch(Q){console.warn("loadAnalytics failed:",Q)}}const F=ref(!1);async function V(){if(!F.value){F.value=!0;try{const ie=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return ie&&ie.success?ie.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${ie.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${ie.date}）`):ElementPlus.ElMessage.error(ie&&(ie.detail||ie.message)||"生成复盘失败"),w(),ie}catch(Q){ElementPlus.ElMessage.error("生成复盘失败: "+(Q.message||""))}finally{F.value=!1}}}const I=ref(null),$=ref(!1);async function W(){R.value=!1;try{const ie=await(await fetch("/api/ai/fact-check/latest")).json();I.value=ie&&ie.success&&ie.data||null}catch(Q){R.value=!0,console.warn("loadFactCheck failed:",Q)}}async function B(){if(!$.value){$.value=!0;try{const ie=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return ie&&ie.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${ie.data.pass_rate!=null?ie.data.pass_rate+"%":"--"} (${ie.data.checked} 个数字)`),W()):ElementPlus.ElMessage.error(ie&&(ie.detail||ie.message)||"事实护栏抽查失败"),ie}catch(Q){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(Q.message||""))}finally{$.value=!1}}}const K=ref([]),q=ref(!1);async function s(){try{const ie=await(await fetch("/api/backup/list")).json();ie.success&&(K.value=ie.backups||[])}catch(Q){console.error("加载备份列表失败",Q)}}async function _(){q.value=!0;try{const ie=await(await fetch("/api/backup/create",{method:"POST"})).json();ie.success?(ElementPlus.ElMessage.success(ie.message||"备份成功"),s()):ElementPlus.ElMessage.error(ie.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{q.value=!1}}const l=ref(""),m=ref("");async function J(Q){l.value=Q,m.value="";try{const ie=window.__quantModules&&window.__quantModules.core||{},Ce=typeof ie.authHeaders=="function"?ie.authHeaders():{},ee=await fetch("/api/reports/export?format="+encodeURIComponent(Q),{headers:Ce});if(!ee.ok)throw new Error("HTTP "+ee.status);const X=await ee.blob(),be=URL.createObjectURL(X),H=document.createElement("a");H.href=be;const me=new Date().toISOString().slice(0,10);H.download="report_"+me+"."+Q,document.body.appendChild(H),H.click(),document.body.removeChild(H),URL.revokeObjectURL(be),m.value="报表已导出 ("+Q.toUpperCase()+")"}catch(ie){m.value="报表导出失败: "+(ie.message||ie)}finally{l.value=""}}async function N(Q){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${Q} 恢复吗？当前数据将被覆盖。`,"恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(ie){console.warn("[restoreBackup] confirm cancelled:",ie);return}try{const Ce=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Q})})).json();Ce.success?(ElementPlus.ElMessage.success(Ce.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(Ce.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const E=ref(!1),v=ref(0),A=[{icon:"calendar",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"bot",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 AI 按钮可随时快速问股。"},{icon:"send",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function y(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{v.value=0,E.value=!0},800)}function j(){E.value=!1,localStorage.setItem("quant_tour_done","1")}function te(){E.value=!1,localStorage.setItem("quant_tour_done","1")}const re=ref(""),se=ref(!1);async function le(){if(!re.value||!re.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}se.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:re.value.trim(),page:u.value+"/"+t.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(re.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{se.value=!1}}return{feishuConfig:r,feishuTestStatus:d,feishuTestMessage:b,feishuSaving:i,testFeishuWebhook:o,saveFeishuConfig:g,aiFabHidden:c,openAiFab:D,strategyRecommendations:k,aiUsage:T,loadStrategyRecommendations:C,loadAiUsage:M,sysMonitor:P,analyticsRank:x,analyticsDays:S,loadSysMonitor:O,loadAnalytics:z,sysMonitorError:n,healthDetail:f,loadHealthDetail:w,healthDetailError:p,reviewTriggering:F,triggerMarketReview:V,factCheck:I,factCheckRunning:$,loadFactCheck:W,triggerFactCheck:B,factCheckError:R,backups:K,backupCreating:q,loadBackups:s,createBackup:_,restoreBackup:N,reportExporting:l,reportExportMsg:m,exportReport:J,tourVisible:E,tourStep:v,tourSteps:A,maybeShowTour:y,skipTour:j,finishTour:te,feedbackText:re,feedbackSubmitting:se,submitFeedback:le}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:e}=Vue,{currentView:u,selectedDate:t,dates:r,loadConsensusData:d,hapticFeedback:b}=a,o=e(()=>({day:"天",week:"周",month:"月",year:"年"})[u.value]||"天"),i=e(()=>({day:"date",week:"week",month:"month",year:"year"})[u.value]||"date"),g=e(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[u.value]||"YYYY-MM-DD"),c=e(()=>!t.value||!r.value||r.value.length===0?!1:t.value>r.value[0]),D=e(()=>!t.value||!r.value||r.value.length===0?!1:t.value<r.value[r.value.length-1]);function k(P){b("light"),u.value=P;let x=t.value||r.value[r.value.length-1];if(P==="year"){const S=x.substring(0,4),n=r.value.find(p=>p.startsWith(S));t.value=n||x}else if(P==="month"){const S=x.substring(0,7),n=r.value.find(p=>p.startsWith(S));t.value=n||x}setTimeout(d,50)}function T(P){b("light");const x=t.value,S=r.value,n=S.indexOf(x);if(n<0)return;let p=1;u.value==="week"&&(p=5),u.value==="month"&&(p=22),u.value==="year"&&(p=250);const R=n+P*p;if(R>=0&&R<S.length){const O=S[R];if(u.value==="month"){const f=O.substring(0,7),w=S.find(z=>z.startsWith(f));t.value=w||O}else if(u.value==="year"){const f=O.substring(0,4),w=S.find(z=>z.startsWith(f));t.value=w||O}else t.value=O;d()}}function C(P){if(!r.value||r.value.length===0)return!1;const x=P.getFullYear(),S=String(P.getMonth()+1).padStart(2,"0"),n=String(P.getDate()).padStart(2,"0"),p=`${x}-${S}-${n}`;return!r.value.includes(p)}function M(P){P&&P.length>10&&(t.value=P.substring(0,10)),d()}return{viewUnit:o,datePickerType:i,dateFormat:g,canNavPrev:c,canNavNext:D,switchView:k,navigateDate:T,disabledDate:C,onDateChange:M}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:e,subPageNames:u,navigateTo:t,currentPage:r,currentSubPage:d,currentView:b,navigateDate:o,switchView:i,getLoadDashboardData:g,refreshCalendarData:c,getLoadAiHistory:D,exportCSV:k,getShowBatchEvaluate:T,openAiFab:C,toggleSidebar:M,showStockDetail:P,getSelectedDate:x,markExternalStock:S}=a,n=ref("");async function p(B,K){if(!B||B.trim().length<1){K([]);return}const q=window.QuantCommandPanel;let s=[];q&&e.value&&(s=q.buildSearchSuggestions(B,e.value,u,q.DEFAULT_COMMANDS));const _=window.__quantModules&&window.__quantModules.pinyin;_&&_.searchCoreStocks(B).forEach(function(l){s.push({value:l.code+" "+l.name,type:"stock",code:l.code,name:l.name,label:l.name,subLabel:l.code,icon:"trending-up",iconName:"trending-up"})});try{const m=await(await fetch("/api/search?q="+encodeURIComponent(B))).json();if(m.success&&m.results){const J=m.results.map(function(E){return{value:E.code+" "+E.name,type:"stock",code:E.code,name:E.name,label:E.name,subLabel:E.code,icon:"trending-up",iconName:"trending-up"}}),N=[];(m.groups||[]).forEach(function(E){(E.items||[]).forEach(function(v){v.type==="sector"?N.push({value:v.name+" · "+v.subLabel,type:"sector",name:v.name,label:v.name,subLabel:"板块",icon:"layers",iconName:"layers"}):v.type==="strategy"?N.push({value:v.name+" · 策略",type:"strategy",id:v.id,name:v.name,label:v.name,subLabel:"策略",icon:"target",iconName:"target"}):v.type==="menu"&&N.push({value:v.name,type:"menu",menuKey:v.menuKey,name:v.name,label:v.name,subLabel:v.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),K(s.concat(J,N))}else K(s)}catch(l){console.warn("[searchStocks] fetch failed:",l),K(s)}}function R(B){return B?B.type==="menu"?{action:"menu",menuKey:B.menuKey,subPage:B.subPage}:B.type==="command"?{action:"command",key:B.key}:B.type==="sector"?{action:"sector",name:B.name}:B.type==="strategy"?{action:"strategy",id:B.id,name:B.name}:B.type==="stock"||B.code&&B.name?{action:"stock",code:B.code,name:B.name}:null:null}function O(B){n.value="";const K=window.QuantCommandPanel,q=K?K.dispatchSearchSelection(B):R(B);if(q){if(q.action==="menu"){t(q.menuKey,q.subPage);return}if(q.action==="command"){z(q.key);return}if(q.action==="sector"){t("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(q.name);return}if(q.action==="strategy"){t("research","overview");return}if(q.action==="stock"){(r.value!=="calendar"||d.value!=="calendar")&&t("calendar","calendar"),typeof S=="function"&&S(q.code),w(q.code,q.name);return}}}let f=null;function w(B,K){f&&(clearInterval(f),f=null);const q=function(){typeof P=="function"&&P(B,K)},s=x?x():null;if(s&&s.value){q();return}const _=Date.now();f=setInterval(function(){((x?x().value:!0)||Date.now()-_>4e3)&&(clearInterval(f),f=null,q())},60)}function z(B){if(B==="refresh"){const K=r.value;K==="strategies"?g().catch(function(){}):K==="calendar"?c().catch(function(){}):K==="ai"&&D().catch(function(){})}else B==="export"?k():B==="batch"?T().value=!0:B==="ai"?C():B==="sidebar"?M():B==="open-eval-history"?t("ai","history"):B==="open-shortterm"&&t("shortterm","overview")}const F=ref(!1),V=ref(!1);function I(B){if(!B)return!1;const K=B.tagName;return K==="INPUT"||K==="TEXTAREA"||K==="SELECT"||B.isContentEditable}function $(B){if(I(B.target))return;const K=B.key.toLowerCase();if(B.ctrlKey&&K==="k"){B.preventDefault(),V.value=!0;return}if(B.ctrlKey&&K==="/"){B.preventDefault(),F.value=!F.value;return}if(B.ctrlKey&&K==="h"){B.preventDefault(),t("ai","history");return}if(B.ctrlKey&&B.shiftKey&&K==="s"){B.preventDefault(),t("shortterm","overview");return}if(!(B.ctrlKey||B.metaKey||B.altKey)){if(K>="1"&&K<="5"){const q=parseInt(K)-1,s=e.value[q];s&&t(s.key,s.subPages[0]||"");return}if(K==="r"&&W(),(K==="arrowleft"||K==="arrowright"||K==="arrowup"||K==="arrowdown")&&r.value==="calendar")if(B.preventDefault(),K==="arrowleft"||K==="arrowright")o(K==="arrowleft"?-1:1);else{const q=["day","week","month","year"].indexOf(b.value),s=["day","week","month","year"][(q+(K==="arrowup"?-1:1)+4)%4];i(s)}}}function W(){const B=r.value;B==="strategies"?g().catch(()=>{}):B==="calendar"?c().catch(()=>{}):B==="ai"&&D().catch(()=>{})}return{searchQuery:n,searchStocks:p,onSearchSelect:O,runGlobalCommand:z,shortcutHelpVisible:F,commandPaletteVisible:V,isTypingTarget:I,handleGlobalKeydown:$,refreshCurrentPage:W}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:e,loadUserConfig:u,loadDates:t,loadDashboardData:r,loadDashboardCached:d,loadHealthMetrics:b,loadConsensusData:o,applyTheme:i,maybeShowTour:g,loadAiVendors:c,loadGroupConfig:D,groupsConfig:k}=a,T=function(K){const q=window.__quantModules&&window.__quantModules.themes;return q&&q.applyLegacyTheme?q.applyLegacyTheme(K):i(K)},C="qc_login_username";let M="";try{M=localStorage.getItem(C)||""}catch{M=""}const P=ref({username:M,password:""}),x=ref(!1),S=ref(!1),n=ref(!1),p=ref({oldPassword:"",newPassword:"",confirmPassword:""}),R=ref(!1),O=ref(!1),f=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),w=ref(1);async function z(){try{(await(await fetch("/api/setup/status")).json()).needed&&(f.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},w.value=1,O.value=!0)}catch(K){console.warn("[checkSetupWizard] failed:",K)}}async function F(){try{const K={new_password:f.value.newPassword,ai_key:f.value.aiKey,ai_provider:f.value.aiProvider,ai_model:f.value.aiModel,ai_endpoint:f.value.aiEndpoint,tushare_token:f.value.tushareToken},s=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(K)})).json();s.success?(O.value=!1,ElementPlus.ElMessage.success("初始化完成"),await u()):ElementPlus.ElMessage.error(s.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function V(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(O.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function I(){if(!P.value.username||!P.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}x.value=!0;try{const q=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P.value)})).json();if(q.success){e.value=q.user,localStorage.setItem("quant_user",JSON.stringify(q.user)),localStorage.setItem("quant_token",q.data.access_token),T(q.user.theme||"gold");try{localStorage.setItem(C,P.value.username||"")}catch{}typeof D=="function"&&await D().catch(function(){}),typeof c=="function"&&c(),await u(),await t(),await Promise.all([d(),o(),b().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),q.data&&q.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),g(),q.user.role==="admin"&&setTimeout(z,500)}else ElementPlus.ElMessage.error(q.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{x.value=!1}}async function $(){S.value=!0;try{const q=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();q.success?(e.value=q.user,localStorage.setItem("quant_user",JSON.stringify(q.user)),localStorage.setItem("quant_token",q.data.access_token),T(q.user.theme||"gold"),typeof D=="function"&&await D().catch(function(){}),await u(),await t(),await r(),b().catch(()=>{}),await o(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(q.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{S.value=!1}}function W(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{e.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{k&&(k.value={})}catch{}try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}try{const K=window.caches;K&&K.keys&&K.keys().then(q=>Promise.all(q.filter(s=>s.indexOf("quant-calendar-api-")===0).map(s=>K.delete(s)))).catch(()=>{})}catch{}}).catch(()=>{})}async function B(){if(!p.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!p.value.newPassword||p.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(p.value.newPassword!==p.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}R.value=!0;try{const K=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:p.value.oldPassword,new_password:p.value.newPassword})}),q=await K.json();K.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),n.value=!1,p.value={oldPassword:"",newPassword:"",confirmPassword:""},W()):ElementPlus.ElMessage.error(q.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{R.value=!1}}return{loginForm:P,logining:x,guestLogining:S,showChangePassword:n,changePasswordForm:p,changingPassword:R,showSetupWizard:O,setupForm:f,setupStep:w,checkSetupWizard:z,completeSetupWizard:F,resetSetupWizard:V,handleLogin:I,handleGuestLogin:$,handleLogout:W,doChangePassword:B}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:e}=Vue;let u=null;const{strategyFilter:t,currentView:r,statusFilter:d,currentPage:b,currentSubPage:o,menus:i,currentUser:g,strategyFilterCounts:c,lazyTick:D,dates:k,selectedDate:T,consensus:C,loadConsensusData:M,fetchMerrillClock:P,fetchMarketData:x,loadWatchlist:S,loadAiHistory:n,preloadWatchlistKline:p,loadChatHistory:R,loadSystemStatus:O,checkTushareConnection:f,loadSysMonitor:w,loadAnalytics:z,loadHealthDetail:F,loadHealthMetrics:V,loadAiUsage:I,loadFactCheck:$,loadAutoEvaluateConfig:W,loadDatasourceConfig:B,loadFeishuConfig:K,loadAiConfig:q,loadAiVendors:s,loadRateLimit:_,loadDataRefreshConfig:l,loadBackups:m,loadAllGroups:J,loadUsers:N,stockDetailTab:E,stockDetailVisible:v,stockKlineLoaded:A,loadStockKline:y,currentKlinePeriod:j,showMerrillDetail:te,indexDetailVisible:re,restoreDialogFocus:se}=a;e(t,le=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(le.selected)),localStorage.setItem("quant_strategy_filter_mode",le.mode)},{deep:!0}),e([r,d],(le,Q)=>{le[0]!==Q[0]&&M()}),e([b,o],([le,Q])=>{var ie;try{const ee=!(le==="calendar"&&Q==="calendar")&&Q||"",X=ee?"#"+le+"/"+ee:"#"+le;window.location.hash!==X&&(window.location.hash=X)}catch{}if(Q&&localStorage.setItem("quant_last_subpage",Q),!Q&&i.value.find(Ce=>Ce.key===le)){const Ce=i.value.find(ee=>ee.key===le);Ce&&Ce.subPages.length>0&&(o.value=Ce.subPages[0])}if(le==="shortterm"&&Q==="market-review"){const Ce=window.__lazyLoaders&&window.__lazyLoaders.research;Ce&&Ce().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function(ee){ee&&ee.name&&!ee.__quantRegistered&&(window.__quantApp.component(ee.name,ee),ee.__quantRegistered=!0)}),D&&D.value++}).catch(function(ee){console.warn("[lazy] research 组件补加载失败",ee)})}le==="calendar"&&Q==="calendar"&&(!C.value||C.value.length===0)&&(k.value.length>0&&!T.value&&(T.value=k.value[k.value.length-1]||""),setTimeout(M,50)),le==="calendar"&&Q==="pool"&&(!C.value||C.value.length===0)&&(k.value.length>0&&!T.value&&(T.value=k.value[k.value.length-1]||""),setTimeout(M,50)),le==="strategies"&&(Q==="merrill"&&P(),Q==="market"&&x(),Q==="consensus"&&(!C.value||C.value.length===0)&&setTimeout(M,50)),le==="ai"&&(Q==="watchlist"&&(S(),n(),setTimeout(p,500)),Q==="history"&&n(),Q==="overview"&&(n(),S()),Q==="chat_history"&&R()),(le==="system"||le==="ops")&&((ie=g.value)==null?void 0:ie.role)==="admin"&&(Q==="status"&&(O(),f()),Q==="health"&&(F(),V()),Q==="schedule"&&F(),Q==="guard"&&$(),Q==="usage"&&(w(),z(),F(),V(),I(),$()),Q==="autoeval"&&(W(),s()),Q==="datasource"&&B(),Q==="feature"&&(K(),q(),_(),l(),m()),Q==="user"&&(J(),N())),(le==="system"||le==="ops")&&Q==="usage"?u||(u=setInterval(()=>{w(),z(),F(),V(),I()},3e4)):u&&(clearInterval(u),u=null)}),e(E,(le,Q)=>{le==="kline"&&Q&&Q!=="kline"&&v.value&&(A.value=!1,setTimeout(async()=>{!await y(j.value)&&v.value&&E.value==="kline"&&setTimeout(()=>y(j.value),800)},50))}),e(te,le=>{le||(document.documentElement.style.overflow="",document.body.style.overflow="")}),e([v,re],([le,Q])=>{!le&&!Q&&se()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:e,applyTheme:u,menus:t,currentPage:r,currentSubPage:d,currentView:b,currentKlinePeriod:o,selectedDate:i,dates:g,loadDates:c,loadConsensusData:D,loadDashboardCached:k,appVersion:T,themes:C,fetchMarketData:M,fetchMerrillStages:P,fetchMerrillClock:x,loadAiConfig:S,loadAiVendors:n,loadAiCatalog:p,currentUser:R,loadUserConfig:O,loadAutoEvaluateConfig:f,loadGroupConfig:w,loadUsers:z,loadAllGroups:F,loadAiHistory:V}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",e);function I(N,E){const v={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(N==="calendar"&&v[E])return r.value="calendar",d.value="calendar",v[E]&&(b.value=v[E]),!0;if(N==="research"&&(E==="strategy-write"||E==="custom-write")){r.value="research",d.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",E==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const N=window.location.hash||"";if(!N||N==="#")return;const E=N.replace(/^#\/?/,"").split("/"),v=E[0],A=E[1]||"",y=t.value.find(function(j){return j.key===v});if(y&&!I(v,A)){if(!A)r.value=v,d.value=y.subPages[0]||"";else if(y.subPages.indexOf(A)>=0)r.value=v,d.value=A;else return;window.__lazyLoaders&&window.__lazyLoaders[v]&&window.__quantGoPage&&window.__quantGoPage(v,d.value).catch(function(){})}});const $=(N,E=3e3,v="")=>{const A=new Promise((y,j)=>setTimeout(()=>j(new Error("timeout")),E));return Promise.race([N,A]).catch(y=>{console.warn(`[init] ${v||"task"} failed:`,y.message)})},W=localStorage.getItem("quant_theme"),B=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const N=window.__quantModules.themes;let E=B.theme||"system",v=B.theme_hue!=null&&B.theme_hue!==""?B.theme_hue:null;const A=typeof N.migrateLegacyTheme=="function"?N.migrateLegacyTheme():null;v==null&&A&&(E=A.mode,v=A.hue),v==null&&(v=45),u(E,v)}else W&&u(W);await w().catch(function(){}),function(){var N=window.location.hash||"",E=!1;if(N&&N!=="#"){var v=N.replace(/^#\/?/,"").split("/"),A=v[0],y=v[1]||"",j=t.value.find(function(Q){return Q.key===A});j&&(I(A,y)||(r.value=A,y&&j.subPages.indexOf(y)>=0?d.value=y:y||(d.value=j.subPages[0]||"")),E=!0)}if(!E){var te=localStorage.getItem("quant_last_page");te&&t.value.some(function(Q){return Q.key===te})?r.value=te:B.default_view&&t.value.some(function(Q){return Q.key===B.default_view})&&(r.value=B.default_view);var re=localStorage.getItem("quant_last_subpage");re&&(d.value=re)}var se=localStorage.getItem("quant_last_date");se&&(i.value=se);var le=localStorage.getItem("quant_last_view");le&&(b.value=le),window.__lazyLoaders&&window.__lazyLoaders[r.value]&&window.__quantGoPage&&window.__quantGoPage(r.value,d.value).catch(function(){})}(),fetch("/api/health").then(N=>N.json()).then(N=>{N.version&&(T.value=N.version)}).catch(()=>{});const K=localStorage.getItem("quant_user"),q=localStorage.getItem("quant_token"),s=!!(K&&q),_=Promise.all([Promise.resolve().then(()=>{C.value={light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}}),$(M(),3e3,"marketData"),$(P(),2e3,"merrillStages")]).then(()=>{$(x(),3e3,"merrillClock")});if(S(),p(),s&&R.value&&n(),!s||!R.value){await _;return}let l=!0;try{l=(await fetch("/api/users/me")).ok}catch{l=!1}if(!l){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),R.value=null;return}if(R.value){const N=R.value.theme||"",E=window.__quantModules&&window.__quantModules.themes;let v=B.theme||"system",A=B.theme_hue!=null&&B.theme_hue!==""?B.theme_hue:null;if(A==null&&E&&typeof E.migrateLegacyTheme=="function"){const y=E.migrateLegacyTheme();if(y)v=y.mode,A=y.hue;else if(N&&E.LEGACY_MAP&&E.LEGACY_MAP[N]){const j=E.LEGACY_MAP[N];v=j[0],A=j[1]}}A==null&&(A=45),u(v,A)}if(window.__quantModules&&window.__quantModules.preferences){const E=await window.__quantModules.preferences.loadPreferences();var m=localStorage.getItem("quant_last_page");!m&&E.default_view&&t.value.some(function(v){return v.key===E.default_view})&&(r.value=E.default_view),E.theme&&u(E.theme,E.theme_hue!=null&&E.theme_hue!==""?E.theme_hue:null),o&&(E.chart_period==="weekly"||E.chart_period==="monthly")&&(o.value=E.chart_period)}await Promise.all([$(O(),2e3,"userConfig"),$(c(),2e3,"dates")]),f().catch(()=>{}),w().catch(()=>{});const J=r.value==="strategies"?$(k(),2e3,"dashboard"):$(D(),2e3,"consensus");await Promise.all([J,$(z(),2e3,"users"),$(V(),2e3,"aiHistory")]),F().catch(()=>{})}}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.shell={create:function(a){const{ref:e,computed:u,watch:t}=a,r=e(!1),d=window.__quantModules&&window.__quantModules.i18n||{},b=d.SUPPORTED_LOCALES||["zh-CN","en"],o=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",i=e(b.indexOf(o)!==-1?o:"zh-CN");typeof d.bindLocale=="function"&&d.bindLocale(i);const g=typeof d.t=="function"?d.t:function(s){return String(s)};function c(s){b.indexOf(s)!==-1&&(i.value=s,typeof d.setLocale=="function"&&d.setLocale(s),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",s))}function D(s,_){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(s,_):s==null?"":String(s)}function k(s){(s.key==="Enter"||s.key===" "||s.key==="Spacebar")&&(s.preventDefault(),s.currentTarget&&typeof s.currentTarget.click=="function"&&s.currentTarget.click())}let T=null;function C(){document.activeElement&&document.activeElement!==document.body&&(T=document.activeElement)}function M(){if(T&&T.isConnected)try{T.focus()}catch{}T=null}function P(){Vue.nextTick(()=>{const s=document.querySelector(".el-dialog-overlay .el-dialog");if(!s)return;const _=s.querySelector('input:not([type=hidden]), textarea, [tabindex]:not([tabindex="-1"])');_&&typeof _.focus=="function"&&_.focus()})}const x=e(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{x.value=!0}),window.addEventListener("offline",()=>{x.value=!1})),window.addEventListener("beforeunload",s=>{if(r.value)return s.preventDefault(),s.returnValue="您有未保存的配置变更，确定要离开吗？",s.returnValue});function S(s="light"){typeof navigator<"u"&&navigator.vibrate&&(s==="light"?navigator.vibrate(10):s==="medium"?navigator.vibrate(20):s==="heavy"&&navigator.vibrate([10,30,10]))}const n=e(localStorage.getItem("sidebar_collapsed")==="1");function p(){n.value=!n.value,localStorage.setItem("sidebar_collapsed",n.value?"1":"0")}const R=e(null),O=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","notification","about"],guestSubPages:["config","about"]}],f=u(()=>{var J,N,E;const s=((J=q.value)==null?void 0:J.role)||"guest",_=((N=q.value)==null?void 0:N.group)||s,l=((E=R.value)==null?void 0:E[_])||null;return O.map(v=>{if(l&&l.visible_menus&&v.key in l.visible_menus&&!l.visible_menus[v.key])return null;const A={...v,name:g("nav."+v.key)||v.name};return l!=null&&l.visible_sub_pages&&(A.subPages=v.subPages.filter(y=>{const j=v.key+"."+y;return l.visible_sub_pages[j]!==!1})),v.key==="system"&&s==="guest"&&v.guestSubPages&&(A.subPages=v.guestSubPages),A}).filter(Boolean)});async function w(){try{if(!localStorage.getItem("quant_token"))return;const _=await fetch("/api/groups/my");if(_.ok){const l=await _.json();R.value={[l.group_id]:l.group}}}catch(s){console.warn("loadGroupConfig:",s)}}const z=e("strategies"),F=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},V=e(F.navMode);function I(s){const _=window.__quantModules&&window.__quantModules.navModeCore;V.value=_?_.normalizeNavMode(s):s==="tree"||s==="toptab"?s:"toptab",_&&_.writePrefs({navMode:V.value})}const $=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function W(s,_=""){S("light"),z.value=s,K.value=_,localStorage.setItem("quant_last_subpage",_)}function B(){const s=f.value;if(!s||!s.length)return;if(!s.some(function(m){return m.key===z.value})){const m=s[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",m.key),z.value=m.key,K.value=m.subPages&&m.subPages[0]||"";return}const l=s.find(function(m){return m.key===z.value});l&&l.subPages&&l.subPages.length&&!l.subPages.includes(K.value)&&(K.value=l.subPages[0])}const K=e("overview"),q=e(null);return t(f,function(){B()}),function(){if(typeof localStorage>"u")return;const s=localStorage.getItem("quant_user"),_=localStorage.getItem("quant_token");if(s&&_)try{q.value=JSON.parse(s)}catch{}}(),{configChanged:r,locale:i,t:g,changeLanguage:c,sanitizeHtml:D,keyClick:k,rememberDialogTrigger:C,restoreDialogFocus:M,focusFirstInDialog:P,isOnline:x,hapticFeedback:S,sidebarCollapsed:n,toggleSidebar:p,groupsConfig:R,allMenuDefs:O,menus:f,loadGroupConfig:w,currentPage:z,currentSubPage:K,navMode:V,setNavMode:I,shortcutHelpItems:$,navigateTo:W,ensureVisiblePage:B,currentUser:q}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.workspace={create:function(a){const{ref:e,computed:u,watch:t,currentPage:r,currentSubPage:d,allMenuDefs:b,menus:o,navigateTo:i,ensureVisiblePage:g,currentUser:c}=a,D=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],k=e("multifactor"),T=e(null),C=e(1e5),M=e(!1),P=e(null),x=e(!1);let S=null,n=null;async function p(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const _e={initial_capital:C.value||1e5};T.value&&T.value.length===2&&(_e.start_date=T.value[0],_e.end_date=T.value[1]),M.value=!0,P.value=null,x.value=!1;try{const Le=await fetch("/api/strategies/"+k.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_e)});if(!Le.ok){const Y=await Le.json().catch(()=>({}));throw new Error(Y.detail||"回测失败")}const h=await Le.json(),L=h.result||{};if(!L.success)throw new Error(L.message||"回测失败");h.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),P.value={total_return_pct:((L.total_return??0)*100).toFixed(2),annual_return_pct:((L.annual_return??0)*100).toFixed(2),max_drawdown_pct:((L.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(L.sharpe_ratio??0).toFixed(2),win_rate:((L.win_rate??0)*100).toFixed(2),out_sample:L.outsample_total_return===void 0?"":((L.outsample_total_return??0)*100).toFixed(2),overfit_warning:L.overfit_warning||!1,message:L.message||""},R(L.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(Le){x.value=!0,ElementPlus.ElMessage.error(Le.message||"回测失败")}finally{M.value=!1}}function R(ve){const _e=document.getElementById("backtestEquityChart");if(!_e||!ve||ve.length===0)return;const Le=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,h=()=>{n=ve,S&&(S.dispose(),S=null),S=echarts.init(_e),S.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const L=ve.map(ce=>ce.date||ce[0]),Y=ve.map(ce=>ce.value??ce[1]);S.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:L,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:Y,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};Le?Le().then(h).catch(()=>{}):h()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){n&&R(n)})),function(){const ve=window.QuantSessionRestore;if(ve){const _e=ve.restore();_e&&_e.page&&(r.value=_e.page,_e.sub&&(d.value=_e.sub))}}(),Vue.watch(d,function(){ht()});const O=u(()=>{const ve=b.find(_e=>_e.key===r.value);return ve?ve.name:r.value}),f=e(0),w=u(()=>{f.value;const ve={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},_e=d.value;return r.value==="shortterm"&&_e==="market-review"?"qc-research-page":r.value==="ops"&&_e==="execution"?"qc-strategies-page":ve[r.value]||""}),z=e(!1),F=e({}),V=e([]),I=e(""),$=e([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),W=e("day"),B=e("all");t([r,d],function(){const ve=document.querySelector(".main-content");ve&&(ve.scrollTop=0)});const K=e(!1),q=e("kline"),s=e(null),_=e(!1),l=e(localStorage.getItem("qc_detail_mode")||"split"),m=e(window.innerWidth<=1024),J=u(()=>l.value==="split"&&!m.value);function N(ve){l.value=ve;try{localStorage.setItem("qc_detail_mode",ve)}catch{}}window.addEventListener("resize",()=>{m.value=window.innerWidth<=1024});const E=35,v=e(parseInt(localStorage.getItem("qc_split_width")||"",10)||null);function A(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",v.value?v.value+"px":E+"%")}A();function y(ve){const _e=Math.max(1,Math.min(ve,2e3));v.value=_e,A();try{localStorage.setItem("qc_split_width",String(_e))}catch{}}function j(ve){if(v.value)return v.value;const _e=ve?ve.getBoundingClientRect().width:0;return Math.max(200,Math.floor(_e*E/100))}let te=null;function re(ve,_e){if(!_e||m.value)return;ve.preventDefault();const Le=_e.getBoundingClientRect().width;te={startX:ve.clientX,startW:j(_e),minW:Math.max(200,Math.floor(Le*E/100)),maxW:Math.floor(Le/2)},document.body.classList.add("qc-split-resizing")}function se(ve){if(!te)return;const _e=ve.clientX-te.startX;let Le=te.startW+_e;Le=Math.max(te.minW,Math.min(Le,te.maxW)),v.value=Le,A();try{localStorage.setItem("qc_split_width",String(Le))}catch{}}function le(){te&&(te=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",se),document.addEventListener("mouseup",le));function Q(ve){const _e=ve.target&&ve.target.closest?ve.target.closest("[data-split-resize]"):null;if(!_e)return;const Le=_e.closest("[data-split-root]");re(ve,Le)}typeof document<"u"&&document.addEventListener("mousedown",Q,!0);const ie={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于"},Ce=e({});function ee(ve,_e){return ie[_e]||_e}function X(ve){const _e=b.find(h=>h.key===ve);if(!_e||!_e.subPages||!_e.subPages.length)return;if(!(Ce.value[ve]||[]).length){const h=_e.subPages[0];Ce.value=Object.assign({},Ce.value,{[ve]:[{subPage:h,title:ee(ve,h)}]})}}function be(ve,_e){const Le=window.__quantModules&&window.__quantModules.tabsCore,h=ee(ve,_e);if(Le){const L=Le.openTab(Ce.value,ve,_e,h);Ce.value=L.groups}else{const L=Ce.value[ve]||[];L.some(Y=>Y.subPage===_e)||(Ce.value=Object.assign({},Ce.value,{[ve]:L.concat([{subPage:_e,title:h}])}))}i(ve,_e)}function H(ve,_e){const Le=window.__quantModules&&window.__quantModules.tabsCore,h=d.value;let L=null;if(Le)L=Le.closeTab(Ce.value,ve,_e,h),Ce.value=L.groups;else{const xe=Ce.value[ve]||[];Ce.value=Object.assign({},Ce.value,{[ve]:xe.filter(Pe=>Pe.subPage!==_e)})}if(!(Ce.value[ve]||[]).length){X(ve);const xe=b.find(qe=>qe.key===ve),Pe=xe&&xe.subPages&&xe.subPages[0];Pe&&i(ve,Pe);return}const ce=L?L.nextActive:null;ce&&i(ve,ce)}function me(ve,_e){if(!(Ce.value[ve]||[]).some(h=>h.subPage===_e)){be(ve,_e);return}i(ve,_e)}t([r,d],([ve,_e])=>{X(ve);const Le=Ce.value[ve]||[];_e&&!Le.some(h=>h.subPage===_e)&&(Ce.value=Object.assign({},Ce.value,{[ve]:Le.concat([{subPage:_e,title:ee(ve,_e)}])}))},{immediate:!0});const ue=function(ve){if(!(ve.ctrlKey&&ve.key==="Tab"))return;const _e=r.value,Le=Ce.value[_e]||[];if(Le.length<=1)return;ve.preventDefault();const h=d.value,L=Math.max(0,Le.findIndex(xe=>xe.subPage===h)),Y=ve.shiftKey?(L-1+Le.length)%Le.length:(L+1)%Le.length,ce=Le[Y];ce&&me(_e,ce.subPage)};window.addEventListener("keydown",ue);const Z=e({light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}),de=e("light"),Ee=[45,220,0,140,270,320,180,25,250,-1],we={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色",180:"青色",25:"橙色",250:"靛蓝","-1":"中性"},Ne=e(45),Ye=e(function(){const ve=window.__quantModules&&window.__quantModules.preferences;return ve&&ve.getPreference&&ve.getPreference("theme")||"system"}());(function(){const ve=window.__quantModules&&window.__quantModules.preferences,_e=ve&&ve.getPreference&&ve.getPreference("theme_hue");_e!=null&&_e!==""&&(Ne.value=parseInt(_e,10))})();const pe=e("comfortable");(function(){const ve=window.__quantModules&&window.__quantModules.preferences;ve&&ve.applyDensity&&(pe.value=ve.applyDensity()||"comfortable")})();function oe(ve){return ve<0?"hsl(0, 0%, 46%)":"hsl("+ve+", 75%, 42%)"}function ke(ve){return we[ve]||"自定义 "+ve}const He=e(""),Oe=e([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),$e=e({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),ge=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],Se=e({day:[],week:[],month:[],year:[]}),Ae=e({});function ze(ve,_e){let Le=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(Le=window.__quantModules.themes.applyTheme(ve,_e)),de.value=Le&&Le.mode?Le.mode:ve==="dark"||ve==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function Je(ve,_e){const Le=window.__quantModules&&window.__quantModules.preferences;if(!(!Le||!Le.setPreferences))try{Le.setPreferences({theme:ve}),_e!=null&&_e!==""&&Le.setPreferences({theme_hue:parseInt(_e,10)})}catch{}}function Qe(ve,_e){ze(ve,_e),_e!=null&&_e!==""&&(Ne.value=parseInt(_e,10));const Le=window.__quantModules&&window.__quantModules.themes;let h=ve;Le&&Le.LEGACY_MAP&&Le.LEGACY_MAP[ve]&&(h=Le.LEGACY_MAP[ve][0]),h==="light"||h==="dark"||h==="system"?Ye.value=h:Ye.value=de.value,h==="system"&&(h=de.value),Je(h,_e),c.value&&(fetch(`/api/users/${c.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:h})}),c.value.theme=h,localStorage.setItem("quant_user",JSON.stringify(c.value)))}function Ge(ve){const _e=window.__quantModules&&window.__quantModules.preferences,Le=_e&&_e.getPreference?_e.getPreference("theme_hue"):null;Qe(ve,Le)}function et(ve){const _e=window.__quantModules&&window.__quantModules.preferences;!_e||!_e.applyDensity||(pe.value=_e.applyDensity(ve)||"comfortable",_e.setPreference&&_e.setPreference("info_density",pe.value))}function tt(ve){Ne.value=parseInt(ve,10);const _e=window.__quantModules&&window.__quantModules.preferences,Le=_e&&_e.getPreference&&_e.getPreference("theme")||"light";Qe(Le,Ne.value)}function ht(){const ve=window.QuantSessionRestore;ve&&ve.save({page:r.value,sub:d.value||""})}return{backtestStrategies:D,backtestStrategy:k,backtestRange:T,backtestCapital:C,backtestRunning:M,backtestResult:P,backtestError:x,runBacktest:p,currentPageName:O,lazyTick:f,pageComp:w,showUserMenu:z,dashboardData:F,healthMetrics:V,dashboardDate:I,views:$,currentView:W,statusFilter:B,stockDetailVisible:K,stockDetailTab:q,stockDetail:s,stockDetailLoading:_,detailDisplayMode:l,setDetailDisplayMode:N,isNarrow:m,detailSplitEnabled:J,splitWidth:v,setSplitWidth:y,SPLIT_DEFAULT_PCT:E,subPageNames:ie,tabGroups:Ce,openTab:be,closeTab:H,activateTab:me,_onTabKeydown:ue,themes:Z,currentTheme:de,themeHues:Ee,themeHueNames:we,themeHue:Ne,themeMode:Ye,density:pe,hueColor:oe,hueName:ke,applyTheme:ze,changeTheme:Qe,changeThemeMode:Ge,changeDensity:et,changeThemeHue:tt,searchKeyword:He,strategyList:Oe,strategyFilter:$e,strategyFilterOptions:ge,strategyFilterCounts:Se,expandedStrategies:Ae,saveSessionState:ht}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.detail={create:function(a){const{ref:e,computed:u,nextTick:t,stockDetail:r,stockDetailTab:d,stockDetailVisible:b,stockDetailLoading:o,rememberDialogTrigger:i,getIsMobile:g,getIndexDetail:c,getIndexDetailVisible:D,getMarkKlineLoaded:k,getAiResult:T,getLoadLastEvaluation:C,getSelectedDateRef:M,getRefreshStockScore:P,getAnimateScoreEntrance:x}=a,S=e(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function n(se){S.value=!!se;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",se?"show":"hide")}catch{}}const p=u(()=>{const se=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return S.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...se]:se}),R=e("daily");(function(){try{const le=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(le==="weekly"||le==="monthly")&&(R.value=le)}catch{}})();const O=e(!1),f=e(""),w=e(!1),z=e(!1),F=e({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),V=["MA5","MA10","MA20","MA60"],I=e(!1);let $=0;async function W(se){if(!r.value)return!1;const le=++$;O.value=!0,R.value=se;try{const ie=await(await fetch(`/api/market/kline/${r.value.stock}?period=${se}&limit=60`)).json();if(!ie.success||!ie.data)throw new Error(ie.message||"数据获取失败");return f.value=ie.degraded_from?"分钟数据("+ie.degraded_from+")暂不可用, 已降级展示日线":"",k()(r.value.stock),le!==$?!1:(d.value!=="kline"||(z.value=!0,await t(),window.__quantModules.charts.renderKlineTo("stockKlineChart",ie.data,se,!1,{isMobile:g().value,onLegend:Ce=>{Object.keys(F.value).forEach(ee=>{ee in Ce&&(F.value[ee]=!!Ce[ee])})}}),_()),!0)}catch(Q){return console.error("[kline] 加载失败:",r.value&&r.value.stock,se,Q),d.value==="kline"&&(z.value=!1,f.value="",ElementPlus.ElMessage.error("K线加载失败: "+(Q&&Q.message?Q.message:"数据源不可达，请重试"))),!1}finally{O.value=!1}}async function B(se){if(c().value){w.value=!0,R.value=se;try{const Q=await(await fetch(`/api/market/kline/${c().value.code}?period=${se}&limit=60`)).json();if(!Q.success||!Q.data)throw new Error(Q.message||"数据获取失败");I.value=!0,await t(),window.__quantModules.charts.renderKlineTo("indexKlineChart",Q.data,se,!0,{isMobile:g().value,onLegend:ie=>{Object.keys(F.value).forEach(Ce=>{Ce in ie&&(F.value[Ce]=!!ie[Ce])})}}),_()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{w.value=!1}}}async function K(se){if(!z.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await W(se)}async function q(se){if(!I.value){ElementPlus.ElMessage.info("请先加载K线");return}await B(se)}function s(se){const le=(b.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(D().value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);le&&le.dispatchAction({type:"legendToggleSelect",name:se})}function _(){["K线","MA5","MA10","MA20","MA60"].forEach(se=>{F.value[se]=!0})}async function l(se){R.value=se,await B(se)}async function m(){const se=await fetch("/api/system/metrics");if(!se.ok)throw new Error("metrics "+se.status);const le=await se.json(),Q=Array.isArray(le)?le:le&&le.data_sources||[];healthMetrics.value=Q}let J=null;function N(se){J={code:se,ts:Date.now()}}function E(se){return!!(J&&Date.now()-J.ts<4e3&&(se==null||J.code===se))}let v=0;async function A(se){const le=++v;i(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(se,""),T().value=null,R.value="daily",z.value=!1,d.value="kline",r.value=null,o.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),b.value=!0,t(()=>x()());try{const Q=await fetch(`/api/calendar/stock/${se}?date=${M().value}`);if(le!==v)return;r.value=await Q.json(),r.value&&r.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(se,r.value.name)}catch{if(le!==v)return;ElementPlus.ElMessage.error("加载失败"),r.value={stock:se,name:"",total_days:0}}finally{le===v&&(o.value=!1)}setTimeout(async()=>{await W("daily"),P()()},500),C()(se)}const y={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},j={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function te(se){return y[se]||"var(--text-tertiary)"}function re(se){return j[se]||"var(--bg-hover)"}return{klineShowMinutes:S,toggleKlineShowMinutes:n,klinePeriods:p,currentKlinePeriod:R,klineLoading:O,klineDegradeNote:f,indexKlineLoading:w,stockKlineLoaded:z,klineMaVisible:F,MA_LINES:V,indexKlineLoaded:I,loadStockKline:W,loadIndexKline:B,switchKlinePeriod:K,switchIndexKlinePeriod:q,toggleKlineMa:s,resetKlineMaVisible:_,loadIndexKlineWithPeriod:l,loadHealthMetrics:m,markExternalStock:N,externalStockActive:E,showStockDetail:A,levelColor:te,levelBg:re}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.runtime={create:function(a){const{watch:e,onMounted:u,onUnmounted:t,lazyTick:r,currentPage:d,currentSubPage:b,hapticFeedback:o,allMenuDefs:i,saveSessionState:g,_onTabKeydown:c,handleGlobalKeydown:D,runOnMounted:k,startAutoRefresh:T,loadMerrillTimeline:C,cancelPoolSignals:M,loadDashboardCached:P,selectedDate:x,loadConsensusData:S,loadStrategyRecommendations:n,loadAiUsage:p,loadAiHistory:R,strategyFilterCounts:O,consensus:f,currentUser:w,loadUsers:z,loadFeishuConfig:F,loadTushareConfig:V,loadSystemStatus:I,loadAiConfig:$,loadRateLimit:W,checkTushareConnection:B}=a;window.__quantGoPage=async(q,s)=>{try{const _=window.__lazyLoaders&&window.__lazyLoaders[q];_&&await _()}catch(_){console.warn("[lazy] 页面组件加载失败",q,_)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(_=>{_&&_.name&&!_.__quantRegistered&&(window.__quantApp.component(_.name,_),_.__quantRegistered=!0)}),r&&r.value++,d.value=q,s&&(b.value=s)};let K;e(d,async q=>{var s;o("light"),g();try{const _=i.find(function(l){return l.key===q});document.title=(_?_.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",q),q!=="calendar"&&typeof M=="function"&&M();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:q})}).catch(()=>{})}catch(_){console.warn("pageView track failed:",_)}if(K&&(clearInterval(K),K=null),q==="strategies")await P(),K=setInterval(()=>{P().catch(()=>{})},5*60*1e3);else if(q==="calendar")x.value&&await S();else if(q==="ai")n(),p(),await R();else if(q==="system"){if(!x.value){const l=await(await fetch("/api/dashboard")).json(),m=l.data||l;m.latest_date&&(x.value=m.latest_date)}if(x.value){const _=["day","week","month","year"];for(const l of _)try{const J=await(await fetch(`/api/view/${l}/${x.value}?status=all`)).json();O.value[l]=J.stocks||[]}catch(m){console.warn("loadConsensusData view load failed:",m)}(!f.value||f.value.length===0)&&(f.value=O.value.day||[])}((s=w.value)==null?void 0:s.role)==="admin"&&(await z(),await F(),await V(),await I(),await $(),await W(),B(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(B,36e5)))}}),u(async()=>{await k()}),T(),C(),t(()=>{K&&clearInterval(K),window.removeEventListener("keydown",D),window.removeEventListener("keydown",c)})}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:e,onMounted:u,onUnmounted:t,watch:r,nextTick:d}=Vue,b=window.__quantAppLogic.shell.create({ref:a,computed:e,watch:r}),{configChanged:o,locale:i,t:g,changeLanguage:c,sanitizeHtml:D,keyClick:k,rememberDialogTrigger:T,restoreDialogFocus:C,focusFirstInDialog:M,isOnline:P,hapticFeedback:x,sidebarCollapsed:S,toggleSidebar:n,groupsConfig:p,allMenuDefs:R,menus:O,loadGroupConfig:f,currentPage:w,currentSubPage:z,navMode:F,setNavMode:V,shortcutHelpItems:I,navigateTo:$,ensureVisiblePage:W,currentUser:B}=b,K=useMerrillClock(),{merrillData:q,merrillStagesConfig:s,showMerrillDetail:_,merrillDetailData:l,merrillClockConfig:m,merrillClockLastUpdated:J,merrillReevalResult:N,merrillReevalLoading:E,stages:v,indicatorList:A,dimensionScoreList:y,detailDimensionScoreList:j,confidenceColor:te,timelineStages:re,clockPosition:se,merrillProgressStyle:le,FULL_CYCLE_MONTHS:Q,getStageAngle:ie,getCycleProgress:Ce,getCurrentStageMonths:ee,getStageTotalMonths:X,isStageCompleted:be,getCharLabel:H,getAssetName:me,getRankColor:ue,fetchMerrillStages:Z,fetchMerrillClock:de,merrillError:Ee,loadMerrillTimeline:we,showTimelineStage:Ne,merrillTimeline:Ye,timelineLoading:pe,showStageDetail:oe,saveMerrillClockConfig:ke,doMerrillReevaluate:He,startAutoRefresh:Oe,stopAutoRefresh:$e,merrillSnapshots:ge,merrillSnapshotsTotal:Se,fetchMerrillSnapshots:Ae}=K,ze=window.__quantAppLogic.workspace.create({ref:a,computed:e,watch:r,currentPage:w,currentSubPage:z,allMenuDefs:R,menus:O,navigateTo:$,ensureVisiblePage:W,currentUser:B}),{backtestStrategies:Je,backtestStrategy:Qe,backtestRange:Ge,backtestCapital:et,backtestRunning:tt,backtestResult:ht,backtestError:ve,runBacktest:_e,currentPageName:Le,lazyTick:h,pageComp:L,showUserMenu:Y,dashboardData:ce,healthMetrics:xe,dashboardDate:Pe,views:qe,currentView:he,statusFilter:Ve,stockDetailVisible:Fe,stockDetailTab:lt,stockDetail:at,stockDetailLoading:Ze,detailDisplayMode:Ue,setDetailDisplayMode:ft,isNarrow:ae,detailSplitEnabled:ne,splitWidth:Xe,setSplitWidth:gt,SPLIT_DEFAULT_PCT:wt,subPageNames:vt,tabGroups:Mt,openTab:Ot,closeTab:na,activateTab:Wt,_onTabKeydown:St,themes:qt,currentTheme:Ft,themeHues:Tt,themeHueNames:Ut,themeHue:At,themeMode:pt,density:Vt,hueColor:Gt,hueName:Ct,applyTheme:zt,changeTheme:ta,changeThemeMode:la,changeDensity:U,changeThemeHue:De,searchKeyword:We,strategyList:Ie,strategyFilter:ct,strategyFilterOptions:mt,strategyFilterCounts:kt,expandedStrategies:Lt,saveSessionState:Pt}=ze,It=window.__quantAppLogic.detail.create({ref:a,computed:e,nextTick:d,stockDetail:at,stockDetailTab:lt,stockDetailVisible:Fe,stockDetailLoading:Ze,rememberDialogTrigger:T,getIsMobile:()=>kn,getIndexDetail:()=>$a,getIndexDetailVisible:()=>Pa,getMarkKlineLoaded:()=>Ns,getAiResult:()=>Na,getLoadLastEvaluation:()=>ja,getSelectedDateRef:()=>Ht,getRefreshStockScore:()=>Aa,getAnimateScoreEntrance:()=>za}),{klineShowMinutes:yt,toggleKlineShowMinutes:ia,klinePeriods:oa,currentKlinePeriod:Nt,klineLoading:ra,klineDegradeNote:Yt,indexKlineLoading:ca,stockKlineLoaded:ot,klineMaVisible:xt,MA_LINES:Rt,indexKlineLoaded:jt,loadStockKline:Qt,loadIndexKline:ma,switchKlinePeriod:fa,switchIndexKlinePeriod:pa,toggleKlineMa:wa,resetKlineMaVisible:Ea,loadIndexKlineWithPeriod:G,loadHealthMetrics:Te,markExternalStock:je,externalStockActive:Dt,showStockDetail:Jt,levelColor:ka,levelBg:Ma}=It,Da=()=>Ua,an=()=>fs,sn=()=>Lo,nn=()=>ha,ln=()=>Va,on=()=>Ht,rn=window.__quantAppLogic.data.create({currentView:he,statusFilter:Ve,dashboardData:ce,loadHealthMetrics:Te,getLoadDashboardData:Da,getLastRefreshTime:an,getFetchPoolSignals:sn}),{loading:Ga,loadingView:cn,viewCache:dn,dates:ga,selectedDate:Ht,lastLoadTime:Ya,consensus:da,viewNote:un,loadDates:Qa,refreshCalendarData:Ja,exportCSV:Xa,loadConsensusData:ua,loadDashboardCached:Ta,consensusError:vn}=rn,mn=window.__quantAppLogic.market.create({currentKlinePeriod:Nt,loadIndexKline:ma,rememberDialogTrigger:T,menus:O,currentPage:w,currentSubPage:z,stockDetail:at,selectedDate:Ht}),{marketData:fn,marketError:pn,indexDetailVisible:Pa,indexDetail:$a,indexAiResult:gn,indexAiLoading:hn,fetchMarketData:Ra,showIndexDetail:yn,loadCachedIndexEval:bn,doIndexAiEvaluate:wn,disposeStockKline:Za,isMobile:kn,zoomKlineRange:_n,scoreAnimating:xn,scoreDelta:Sn,scorePulse:Cn,refreshStockScore:Aa,animateScoreEntrance:za,onTouchStart:qn,onTouchEnd:En}=mn,Mn=window.__quantAppLogic.ops.create({navigateTo:$,currentPage:w,currentSubPage:z}),{feishuConfig:es,feishuTestStatus:Dn,feishuTestMessage:Tn,testFeishuWebhook:Pn,saveFeishuConfig:Rn,aiFabHidden:An,openAiFab:ts,strategyRecommendations:zn,aiUsage:Ln,loadStrategyRecommendations:as,loadAiUsage:La,sysMonitor:In,analyticsRank:Nn,analyticsDays:On,loadSysMonitor:ss,loadAnalytics:ns,sysMonitorError:Fn,healthDetail:Vn,loadHealthDetail:ls,healthDetailError:jn,reviewTriggering:Hn,triggerMarketReview:Bn,factCheck:Kn,factCheckRunning:Wn,loadFactCheck:is,triggerFactCheck:Un,factCheckError:Gn,backups:Yn,backupCreating:Qn,loadBackups:os,createBackup:Jn,restoreBackup:Xn,reportExporting:$n,reportExportMsg:Zn,exportReport:el,tourVisible:tl,tourStep:al,tourSteps:sl,maybeShowTour:nl,skipTour:ll,finishTour:il,feedbackText:ol,feedbackSubmitting:rl,submitFeedback:cl}=Mn,dl=window.__quantAppLogic.nav.create({currentView:he,selectedDate:Ht,dates:ga,loadConsensusData:ua,hapticFeedback:x}),{viewUnit:ul,datePickerType:vl,dateFormat:ml,canNavPrev:fl,canNavNext:pl,switchView:rs,navigateDate:cs,disabledDate:gl,onDateChange:hl}=dl,yl=window.__quantAppLogic.keys.create({menus:O,subPageNames:vt,navigateTo:$,currentPage:w,currentSubPage:z,currentView:he,navigateDate:cs,switchView:rs,getLoadDashboardData:Da,refreshCalendarData:Ja,getLoadAiHistory:nn,exportCSV:Xa,getShowBatchEvaluate:ln,openAiFab:ts,toggleSidebar:n,showStockDetail:Jt,getSelectedDate:on,markExternalStock:je}),{searchQuery:bl,searchStocks:wl,onSearchSelect:kl,shortcutHelpVisible:ds,commandPaletteVisible:us,handleGlobalKeydown:vs}=yl,_l=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:ot,stockDetailVisible:Fe,stockDetailTab:lt,stockDetail:at,disposeStockKline:Za}):{},{chatSessions:xl,chatHistoryView:Sl,selectedChatIds:Cl,expandedChatDates:ql,expandedChatMonths:El,expandedChatStocks:Ml,chatHistoryLoading:Dl,chatHistoryError:Tl,allChatSessionsFlat:Pl,chatGroupedByDate:Rl,chatGroupedByMonth:Al,chatGroupedByStock:zl,toggleSelectChat:Ll,toggleSelectChatDate:Il,toggleSelectChatMonth:Nl,toggleSelectChatStock:Ol,toggleChatDateExpand:Fl,toggleChatMonthExpand:Vl,toggleChatStockExpand:jl,selectAllChatSessions:Hl,deleteSelectedChatSessions:Bl,viewChatSession:Kl,loadChatHistory:ms,deleteChatSession:Wl,renderMarkdown:Ul,stockChatInput:Gl,stockChatMessages:Yl,stockChatLoading:Ql,stockChatError:Jl,askStockSend:Xl,askStockQuick:$l}=_l,Zl=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:B,applyTheme:zt,allMenuDefs:R,loadGroupConfig:f}):{},{userList:ei,userSearch:ti,groupFilter:ai,userPageTab:si,expandedGroups:ni,addMemberGroupMap:li,filteredUsers:ii,toggleGroupExpand:oi,removeMemberFromGroupInline:ri,addMemberToGroupInline:ci,changeUserGroup:di,showAddUser:ui,editingUser:vi,userForm:mi,savingUser:fi,editingGroup:pi,menuConfigDialog:gi,memberDialog:hi,groupEditForm:yi,subPageCache:bi,showAddGroup:wi,addGroupForm:ki,savingGroup:_i,groupMembers:xi,addMemberUsername:Si,selectedMemberGroup:Ci,subPageSectionExpanded:qi,toggleSubPageSection:Ei,getGroupMemberCount:Mi,getMenuEnabledCount:Di,groupCount:Ti,openMemberManager:Pi,loadGroupMembers:Ri,addMemberToGroup:Ai,removeMemberFromGroup:zi,availableUsersForGroup:Li,onParentToggle:Ii,openMenuConfig:Ni,saveMenuConfig:Oi,deleteGroupConfig:Fi,createGroup:Vi,allGroups:ji,getGroupName:Hi,loadAllGroups:Ia,loadUsers:_a,editUser:Bi,saveUser:Ki,deleteUser:Wi,toggleUserEnabled:Ui,resetUserPassword:Gi}=Zl,Yi=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:da,currentPage:w,currentSubPage:z,dashboardData:ce,searchKeyword:We,statusFilter:Ve,strategyFilter:ct,strategyFilterCounts:kt}):{},{applyStrategyFilter:Np,statusCounts:Qi,stockPool:Ji,strategyDistribution:Xi,strategyPreviewCount:$i,saveStrategyFilter:Zi,filteredConsensusRank:eo,currentPoolSize:to,filteredStrategyCounts:ao,poolChangeBadge:so,timeBarPercent:no,lastRefreshTime:fs,navigateToStrategyFilter:lo}=Yi,io=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:o,consensus:da}):{},{aiResult:Na,lastEvalTime:oo,evalHistoryComparison:ro,checklistItems:co,aiHistory:ps,selectedHistoryIds:gs,expandedDates:hs,expandedMonths:uo,expandedStocks:ys,poolSignals:vo,toggleMonthExpand:mo,aiHistoryView:fo,selectedWatchlistCodes:bs,showAutoEvaluateSettings:ws,savingConfig:ks,autoEvaluateScope:_s,aiVendors:po,aiCatalog:go,aiModelsError:ho,testingAllModels:yo,savingAiModels:bo,loadAiVendors:xa,loadAiCatalog:xs,saveAiVendors:Ss,saveAiModels:wo,testVendorModel:ko,testAllVendorModels:_o,fetchVendorModels:xo,addVendorFromCatalog:So,addCustomVendor:Co,addVendorModel:qo,removeVendorModel:Eo,removeVendor:Mo,toggleVendorKeyReveal:Do,toggleVendorEdit:To,autoEvaluateConfig:Oa,aiLoading:Fa,aiEvalStage:Cs,aiEvalElapsed:qs,aiEvalError:Es,showBatchEvaluate:Va,batchStocks:Ms,batchRunning:Ds,batchTotal:Ts,batchCompleted:Ps,batchCurrent:Rs,batchStatuses:As,batchResults:zs,batchEvalErrors:Ls,aiConfig:Is,selectedPreset:Po,providerInfo:Ro,aiPresets:Op,applyPreset:Ao,onProviderChange:zo,fetchPoolSignals:Lo,cancelPoolSignals:Io,loadLastEvaluation:ja}=io,No=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:B,selectedDate:Ht,stockDetail:at,stockDetailTab:lt,stockDetailVisible:Fe,stockDetailLoading:Ze,stockKlineLoaded:ot,viewCache:dn,animateScoreEntrance:za,loadStockKline:Qt,refreshStockScore:Aa,disposeStockKline:Za,aiHistory:ps,aiLoading:Fa,aiEvalStage:Cs,aiEvalElapsed:qs,aiEvalError:Es,aiResult:Na,loadLastEvaluation:ja,autoEvaluateConfig:Oa,autoEvaluateScope:_s,batchStocks:Ms,batchRunning:Ds,batchTotal:Ts,batchCompleted:Ps,batchCurrent:Rs,batchStatuses:As,batchResults:zs,batchEvalErrors:Ls,expandedDates:hs,expandedStocks:ys,savingConfig:ks,selectedHistoryIds:gs,selectedWatchlistCodes:bs,showAutoEvaluateSettings:ws,showBatchEvaluate:Va}):{},{quickEvalStock:Oo,evalStrategy:Fo,watchlistSort:Vo,watchlist:jo,watchlistCodes:Ho,sortedWatchlist:Bo,getWatchlistScore:Ko,getLatestScore:Fp,addSearchResult:Wo,evaluatedCodes:Uo,klineLoadedCodes:Go,markKlineLoaded:Ns,watchlistSearch:Yo,watchlistResults:Qo,watchlistSearching:Jo,dataRefreshConfig:Xo,dataRefreshReloading:$o,dataRefreshSaving:Zo,aiHistoryLoading:er,aiHistoryError:tr,aiHistoryTotal:ar,aiHistoryLoadingMore:sr,hasMoreAiHistory:nr,loadMoreAiHistory:lr,watchlistLoading:ir,doAiEvaluate:or,loadAiHistory:ha,deleteSingleHistory:rr,toggleSelectHistory:cr,clearSelection:dr,clearWatchlistSelection:ur,batchReevaluateHistory:vr,batchAddToWatchlist:mr,batchRemoveWatchlist:fr,toggleSelectWatchlist:pr,selectAllHistory:gr,selectAllWatchlist:hr,deleteSelectedHistory:yr,loadAutoEvaluateConfig:Os,saveAutoEvaluateConfig:br,loadWatchlist:Fs,addToWatchlist:wr,removeFromWatchlist:kr,clearWatchlist:_r,toggleWatchlist:xr,showStockKline:Sr,preloadingKline:Cr,preloadWatchlistKline:Vs,watchlistEvaluate:qr,batchEvaluateWatchlist:Er,batchEvaluateSelected:Mr,searchStockForWatchlist:Dr,loadDataRefreshConfig:js,saveDataRefreshConfig:Tr,triggerDataReload:Pr,triggerDataPull:Rr,dataPullRunning:Ar,groupedByDate:zr,aiHistoryByStock:Lr,groupedByMonth:Ir,aiHistoryStockCount:Nr,scoreDistribution:Or,quickEvaluate:Fr,toggleDateExpand:Vr,toggleSelectDate:jr,toggleSelectMonth:Hr,toggleStockExpand:Br,toggleSelectStock:Kr,registerTrendChart:Wr,viewAiResult:Ur,doBatchEvaluate:Gr,realtimeQuotes:Yr,realtimeDegraded:Qr,realtimeDegradedReason:Jr,realtimeWsState:Xr,connectRealtimeQuotes:$r,disconnectRealtimeQuotes:Zr,quoteWarningFor:ec,realtimeQuoteColor:tc,realtimeDegradedText:ac,realtimePriceText:sc,realtimePctText:nc,realtimeRatioText:lc,REALTIME_DEGRADED_TEXT:ic,REALTIME_FALLBACK_TEXT:oc}=No,rc=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:Je}):{},{btStrategyOptions:cc,btSelectedStrategies:dc,toggleBtStrategy:uc,btDateRange:vc,btCapital:mc,btCommissionRate:fc,btIncludeBenchmark:pc,btRunning:gc,btResult:hc,btError:yc,btMetrics:bc,btAnnualReturns:wc,btTrades:kc,btStrategyMetricsRows:_c,btDrawdownRegion:xc,runBacktestWorkbench:Sc,exportBacktestCSV:Cc,registerBacktestNavChart:qc,btFmtNum:Ec}=rc,Mc=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:o,aiConfig:Is,aiLoading:Fa,feishuConfig:es,currentTheme:Ft,changeTheme:ta,autoEvaluateConfig:Oa,currentUser:B,strategyFilter:ct,applyTheme:zt,dashboardData:ce,lastRefreshTime:fs,saveAiModels:wo}):{},{configSaving:Dc,globalConfigDirty:Tc,lastSavedTime:Pc,feishuConfigOriginal:Vp,aiConfigOriginal:jp,tushareConfigOriginal:Hp,tushareConfig:Rc,tushareStatus:Ac,datasourceConfig:zc,datasourceStatus:Lc,syncingData:Ic,stockCount:Nc,tradeDateCount:Oc,aiStatus:Fc,appVersion:Hs,showImportDialog:Vc,rateLimitConfig:jc,rateLimitDirty:Hc,rateLimitSaving:Bc,loadRateLimit:Ha,saveRateLimit:Kc,saveAiConfig:Wc,testAiApi:Uc,exportConfig:Gc,importConfig:Yc,saveAllConfig:Qc,resetAllConfig:Jc,testTushareConnection:Xc,checkTushareConnection:Ba,syncStockData:$c,loadTushareConfig:Bs,loadDatasourceConfig:Ks,saveDatasourceConfig:Zc,testDatasource:ed,toggleDatasourceKeyReveal:td,toggleDatasourceEdit:ad,loadFeishuConfig:Ka,loadAiConfig:Sa,loadUserConfig:Ws,loadSystemStatus:Wa,loadDashboardData:Ua,overviewError:sd,feishuConfigError:nd}=Mc,ld=window.__quantAppLogic.auth.create({currentUser:B,loadUserConfig:Ws,loadDates:Qa,loadDashboardData:Ua,loadDashboardCached:Ta,loadHealthMetrics:Te,loadConsensusData:ua,applyTheme:zt,maybeShowTour:nl,loadAiVendors:xa,loadGroupConfig:f,groupsConfig:p}),{loginForm:Us,logining:Gs,guestLogining:Ys,showChangePassword:id,changePasswordForm:od,changingPassword:rd,showSetupWizard:Qs,setupForm:cd,setupStep:dd,checkSetupWizard:ud,completeSetupWizard:vd,resetSetupWizard:md,handleLogin:fd,handleGuestLogin:pd,handleLogout:gd,doChangePassword:hd}=ld;window.__quantAppLogic.watch.register({strategyFilter:ct,currentView:he,statusFilter:Ve,currentPage:w,currentSubPage:z,menus:O,currentUser:B,strategyFilterCounts:kt,lazyTick:h,dates:ga,selectedDate:Ht,consensus:da,loadConsensusData:ua,fetchMerrillClock:de,fetchMarketData:Ra,loadWatchlist:Fs,loadAiHistory:ha,preloadWatchlistKline:Vs,loadChatHistory:ms,loadSystemStatus:Wa,checkTushareConnection:Ba,loadSysMonitor:ss,loadAnalytics:ns,loadHealthDetail:ls,loadHealthMetrics:Te,loadAiUsage:La,loadFactCheck:is,loadAutoEvaluateConfig:Os,loadDatasourceConfig:Ks,loadFeishuConfig:Ka,loadAiConfig:Sa,loadAiVendors:xa,loadRateLimit:Ha,loadDataRefreshConfig:js,loadBackups:os,loadAllGroups:Ia,loadUsers:_a,stockDetailTab:lt,stockDetailVisible:Fe,stockKlineLoaded:ot,loadStockKline:Qt,currentKlinePeriod:Nt,showMerrillDetail:_,indexDetailVisible:Pa,restoreDialogFocus:C});const yd=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:vs,applyTheme:zt,menus:O,currentPage:w,currentSubPage:z,currentView:he,currentKlinePeriod:Nt,selectedDate:Ht,dates:ga,loadDates:Qa,loadConsensusData:ua,loadDashboardCached:Ta,appVersion:Hs,themes:qt,fetchMarketData:Ra,fetchMerrillStages:Z,fetchMerrillClock:de,loadMerrillTimeline:we,showTimelineStage:Ne,merrillTimeline:Ye,timelineLoading:pe,loadAiConfig:Sa,loadAiVendors:xa,loadAiCatalog:xs,currentUser:B,loadUserConfig:Ws,loadAutoEvaluateConfig:Os,loadGroupConfig:f,loadUsers:_a,loadAllGroups:Ia,loadAiHistory:ha}),{runOnMounted:bd}=yd;window.__quantAppLogic.runtime.create({watch:r,onMounted:u,onUnmounted:t,lazyTick:h,currentPage:w,currentSubPage:z,hapticFeedback:x,allMenuDefs:R,saveSessionState:Pt,_onTabKeydown:St,handleGlobalKeydown:vs,runOnMounted:bd,startAutoRefresh:Oe,loadMerrillTimeline:we,cancelPoolSignals:Io,loadDashboardCached:Ta,selectedDate:Ht,loadConsensusData:ua,loadStrategyRecommendations:as,loadAiUsage:La,loadAiHistory:ha,strategyFilterCounts:kt,consensus:da,currentUser:B,loadUsers:_a,loadFeishuConfig:Ka,loadTushareConfig:Bs,loadSystemStatus:Wa,loadAiConfig:Sa,loadRateLimit:Ha,checkTushareConnection:Ba});function wd(Ca,kd=2){return Ca==null||Ca===""||isNaN(Number(Ca))?"--":Number(Ca).toFixed(kd)}const Js={currentPage:w,pageComp:L,currentSubPage:z,sidebarCollapsed:S,menus:O,navMode:F,setNavMode:V,tabGroups:Mt,openTab:Ot,closeTab:na,activateTab:Wt,fmtNum:wd,sanitizeHtml:D,keyClick:k,isOnline:P,currentUser:B,allMenuDefs:R,t:g,locale:i,changeLanguage:c,currentPageName:Le,subPageNames:vt,searchQuery:bl,searchStocks:wl,onSearchSelect:kl,selectedDate:Ht,onDateChange:hl,disabledDate:gl,refreshCalendarData:Ja,exportCSV:Xa,viewNote:un,loading:Ga,lastLoadTime:Ya,resetSetupWizard:md,showChangePassword:id,themes:qt,currentTheme:Ft,changeTheme:ta,changeThemeMode:la,changeThemeHue:De,handleLogout:gd,themeHues:Tt,themeHueNames:Ut,themeHue:At,themeMode:pt,hueColor:Gt,hueName:Ct,density:Vt,changeDensity:U,marketData:fn,marketError:pn,merrillData:q,merrillError:Ee,merrillTimeline:Ye,timelineLoading:pe,merrillStagesConfig:s,fetchMerrillStages:Z,merrillSnapshots:ge,merrillSnapshotsTotal:Se,healthMetrics:xe,feishuConfig:es,feishuTestStatus:Dn,feishuTestMessage:Tn,shortcutHelpVisible:ds,shortcutHelpItems:I,commandPaletteVisible:us,tourVisible:tl,tourStep:al,tourSteps:sl,skipTour:ll,finishTour:il,backups:Yn,backupCreating:Qn,loadBackups:os,createBackup:Jn,restoreBackup:Xn,reportExporting:$n,reportExportMsg:Zn,exportReport:el,sysMonitor:In,analyticsRank:Nn,analyticsDays:On,loadSysMonitor:ss,loadAnalytics:ns,sysMonitorError:Fn,healthDetail:Vn,loadHealthDetail:ls,healthDetailError:jn,reviewTriggering:Hn,triggerMarketReview:Bn,factCheck:Kn,factCheckRunning:Wn,loadFactCheck:is,triggerFactCheck:Un,factCheckError:Gn,strategyRecommendations:zn,aiUsage:Ln,loadStrategyRecommendations:as,loadAiUsage:La,aiFabHidden:An,openAiFab:ts,feedbackText:ol,feedbackSubmitting:rl,submitFeedback:cl,backtestStrategies:Je,backtestStrategy:Qe,backtestRange:Ge,backtestCapital:et,backtestRunning:tt,backtestResult:ht,backtestError:ve,runBacktest:_e,btStrategyOptions:cc,btSelectedStrategies:dc,toggleBtStrategy:uc,btDateRange:vc,btCapital:mc,btCommissionRate:fc,btIncludeBenchmark:pc,btRunning:gc,btResult:hc,btError:yc,btMetrics:bc,btAnnualReturns:wc,btTrades:kc,btStrategyMetricsRows:_c,btDrawdownRegion:xc,runBacktestWorkbench:Sc,exportBacktestCSV:Cc,registerBacktestNavChart:qc,btFmtNum:Ec,fetchMarketData:Ra,fetchMerrillClock:de,testFeishuWebhook:Pn,saveFeishuConfig:Rn,merrillClockConfig:m,merrillClockLastUpdated:J,merrillReevalResult:N,merrillReevalLoading:E,saveMerrillClockConfig:ke,doMerrillReevaluate:He,dataRefreshConfig:Xo,dataRefreshReloading:$o,dataRefreshSaving:Zo,loadDataRefreshConfig:js,saveDataRefreshConfig:Tr,triggerDataReload:Pr,triggerDataPull:Rr,dataPullRunning:Ar,indexDetailVisible:Pa,indexDetail:$a,indexAiResult:gn,indexAiLoading:hn,loadCachedIndexEval:bn,showIndexDetail:yn,doIndexAiEvaluate:wn,klinePeriods:oa,currentKlinePeriod:Nt,klineLoading:ra,indexKlineLoading:ca,stockKlineLoaded:ot,indexKlineLoaded:jt,klineDegradeNote:Yt,klineShowMinutes:yt,toggleKlineShowMinutes:ia,loadStockKline:Qt,switchKlinePeriod:fa,loadIndexKline:ma,switchIndexKlinePeriod:pa,zoomKlineRange:_n,MA_LINES:Rt,klineMaVisible:xt,toggleKlineMa:wa,scoreAnimating:xn,scoreDelta:Sn,scorePulse:Cn,refreshStockScore:Aa,animateScoreEntrance:za,showMerrillDetail:_,merrillDetailData:l,showStageDetail:oe,getCharLabel:H,getAssetName:me,getRankColor:ue,levelColor:ka,levelBg:Ma,timelineStages:re,getStageAngle:ie,getCycleProgress:Ce,getCurrentStageMonths:ee,getStageTotalMonths:X,isStageCompleted:be,stages:v,indicatorList:A,dimensionScoreList:y,confidenceColor:te,views:qe,currentView:he,statusFilter:Ve,loginForm:Us,logining:Gs,guestLogining:Ys,dashboardData:ce,loadingView:cn,dates:ga,consensus:da,searchKeyword:We,stockDetailVisible:Fe,stockDetailTab:lt,stockDetail:at,stockDetailLoading:Ze,detailDisplayMode:Ue,setDetailDisplayMode:ft,isNarrow:ae,detailSplitEnabled:ne,splitWidth:Xe,setSplitWidth:gt,SPLIT_DEFAULT_PCT:wt,aiLoading:Fa,aiEvalStage:Cs,aiEvalElapsed:qs,aiEvalError:Es,showBatchEvaluate:Va,batchStocks:Ms,batchRunning:Ds,batchTotal:Ts,batchCompleted:Ps,batchCurrent:Rs,batchStatuses:As,batchResults:zs,batchEvalErrors:Ls,aiConfig:Is,userList:ei,showAddUser:ui,editingUser:vi,userForm:mi,savingUser:fi,userSearch:ti,filteredUsers:ii,groupFilter:ai,userPageTab:si,expandedGroups:ni,addMemberGroupMap:li,toggleGroupExpand:oi,removeMemberFromGroupInline:ri,addMemberToGroupInline:ci,changeUserGroup:di,statusCounts:Qi,stockPool:Ji,poolSignals:vo,aiResult:Na,aiHistory:ps,groupedByDate:zr,groupedByMonth:Ir,expandedDates:hs,expandedMonths:uo,aiHistoryByStock:Lr,aiHistoryStockCount:Nr,expandedStocks:ys,aiHistoryView:fo,aiHistoryLoading:er,aiHistoryError:tr,aiHistoryTotal:ar,aiHistoryLoadingMore:sr,hasMoreAiHistory:nr,loadMoreAiHistory:lr,watchlistLoading:ir,scoreDistribution:Or,quickEvalStock:Oo,evalStrategy:Fo,checklistItems:co,evalHistoryComparison:ro,quickEvaluate:Fr,selectedHistoryIds:gs,showAutoEvaluateSettings:ws,savingConfig:ks,autoEvaluateConfig:Oa,autoEvaluateScope:_s,strategyList:Ie,toggleDateExpand:Vr,toggleMonthExpand:mo,toggleSelectDate:jr,toggleSelectMonth:Hr,toggleSelectStock:Kr,toggleStockExpand:Br,registerTrendChart:Wr,selectedWatchlistCodes:bs,clearWatchlistSelection:ur,toggleSelectWatchlist:pr,selectAllHistory:gr,selectAllWatchlist:hr,batchRemoveWatchlist:fr,batchEvaluateSelected:Mr,batchReevaluateHistory:vr,batchAddToWatchlist:mr,viewUnit:ul,datePickerType:vl,dateFormat:ml,canNavPrev:fl,canNavNext:pl,handleLogin:fd,handleGuestLogin:pd,switchView:rs,navigateDate:cs,navigateTo:$,loadDashboardData:Ua,loadConsensusData:ua,showStockDetail:Jt,consensusError:vn,overviewError:sd,externalStockActive:Dt,doAiEvaluate:or,doBatchEvaluate:Gr,loadAiHistory:ha,loadLastEvaluation:ja,lastEvalTime:oo,viewAiResult:Ur,saveAiConfig:Wc,testAiApi:Uc,exportConfig:Gc,importConfig:Yc,configSaving:Dc,configChanged:o,watchlist:jo,watchlistCodes:Ho,watchlistSearch:Yo,watchlistResults:Qo,watchlistSearching:Jo,watchlistSort:Vo,sortedWatchlist:Bo,getWatchlistScore:Ko,addSearchResult:Wo,evaluatedCodes:Uo,klineLoadedCodes:Go,markKlineLoaded:Ns,loadWatchlist:Fs,addToWatchlist:wr,removeFromWatchlist:kr,clearWatchlist:_r,searchStockForWatchlist:Dr,toggleWatchlist:xr,batchEvaluateWatchlist:Er,watchlistEvaluate:qr,showStockKline:Sr,preloadWatchlistKline:Vs,preloadingKline:Cr,realtimeQuotes:Yr,realtimeDegraded:Qr,realtimeDegradedReason:Jr,realtimeWsState:Xr,connectRealtimeQuotes:$r,disconnectRealtimeQuotes:Zr,quoteWarningFor:ec,realtimeQuoteColor:tc,realtimeDegradedText:ac,realtimePriceText:sc,realtimePctText:nc,realtimeRatioText:lc,REALTIME_DEGRADED_TEXT:ic,REALTIME_FALLBACK_TEXT:oc,toggleSelectHistory:cr,clearSelection:dr,deleteSingleHistory:rr,deleteSelectedHistory:yr,saveAutoEvaluateConfig:br,editUser:Bi,saveUser:Ki,deleteUser:Wi,loadUsers:_a,allGroups:ji,loadAllGroups:Ia,getGroupName:Hi,toggleUserEnabled:Ui,resetUserPassword:Gi,selectedPreset:Po,applyPreset:Ao,onProviderChange:zo,providerInfo:Ro,globalConfigDirty:Tc,lastSavedTime:Pc,tushareConfig:Rc,tushareStatus:Ac,syncingData:Ic,stockCount:Nc,tradeDateCount:Oc,aiStatus:Fc,appVersion:Hs,showImportDialog:Vc,rateLimitConfig:jc,rateLimitDirty:Hc,rateLimitSaving:Bc,loadRateLimit:Ha,saveRateLimit:Kc,saveAllConfig:Qc,resetAllConfig:Jc,testTushareConnection:Xc,syncStockData:$c,loadTushareConfig:Bs,loadFeishuConfig:Ka,loadSystemStatus:Wa,loadAiConfig:Sa,feishuConfigError:nd,aiVendors:po,aiCatalog:go,aiModelsError:ho,testingAllModels:yo,savingAiModels:bo,loadAiVendors:xa,loadAiCatalog:xs,saveAiVendors:Ss,saveAiModels:Ss,testVendorModel:ko,testAllVendorModels:_o,fetchVendorModels:xo,addVendorFromCatalog:So,addCustomVendor:Co,addVendorModel:qo,removeVendorModel:Eo,removeVendor:Mo,toggleVendorKeyReveal:Do,toggleVendorEdit:To,checkTushareConnection:Ba,datasourceConfig:zc,datasourceStatus:Lc,loadDatasourceConfig:Ks,saveDatasourceConfig:Zc,testDatasource:ed,toggleDatasourceKeyReveal:td,toggleDatasourceEdit:ad,strategyFilter:ct,strategyFilterOptions:mt,strategyFilterCounts:kt,strategyPreviewCount:$i,saveStrategyFilter:Zi,filteredConsensusRank:eo,currentPoolSize:to,filteredStrategyCounts:ao,strategyDistribution:Xi,expandedStrategies:Lt,poolChangeBadge:so,timeBarPercent:no,navigateToStrategyFilter:lo,showUserMenu:Y,toggleSidebar:n,groupsConfig:p,loadGroupConfig:f,editingGroup:pi,groupEditForm:yi,showAddGroup:wi,addGroupForm:ki,savingGroup:_i,menuConfigDialog:gi,memberDialog:hi,groupMembers:xi,addMemberUsername:Si,selectedMemberGroup:Ci,subPageSectionExpanded:qi,toggleSubPageSection:Ei,getGroupMemberCount:Mi,getMenuEnabledCount:Di,groupCount:Ti,openMemberManager:Pi,loadGroupMembers:Ri,addMemberToGroup:Ai,removeMemberFromGroup:zi,availableUsersForGroup:Li,subPageCache:bi,onParentToggle:Ii,openMenuConfig:Ni,saveMenuConfig:Oi,deleteGroupConfig:Fi,createGroup:Vi,changePasswordForm:od,changingPassword:rd,doChangePassword:hd,showSetupWizard:Qs,setupForm:cd,setupStep:dd,checkSetupWizard:ud,completeSetupWizard:vd,chatSessions:xl,chatHistoryView:Sl,selectedChatIds:Cl,expandedChatDates:ql,expandedChatMonths:El,expandedChatStocks:Ml,chatHistoryLoading:Dl,chatHistoryError:Tl,allChatSessionsFlat:Pl,chatGroupedByDate:Rl,chatGroupedByMonth:Al,chatGroupedByStock:zl,toggleSelectChat:Ll,toggleSelectChatDate:Il,toggleSelectChatMonth:Nl,toggleSelectChatStock:Ol,toggleChatDateExpand:Fl,toggleChatMonthExpand:Vl,toggleChatStockExpand:jl,selectAllChatSessions:Hl,deleteSelectedChatSessions:Bl,viewChatSession:Kl,loadChatHistory:ms,deleteChatSession:Wl,renderMarkdown:Ul,stockChatInput:Gl,stockChatMessages:Yl,stockChatLoading:Ql,stockChatError:Jl,askStockSend:Xl,askStockQuick:$l,onTouchStart:qn,onTouchEnd:En,hapticFeedback:x};let nt=null;return window.QuantStateRegistry&&window.QuantStateRegistry.createStateRegistry&&(nt=window.QuantStateRegistry.createStateRegistry(),nt.defineDomain("theme",["currentTheme","themeMode","themeHue","density","currentKlinePeriod"]),nt.defineDomain("auth",["currentUser","loginForm","logining","guestLogining","showSetupWizard"]),nt.defineDomain("prefs",["navMode","detailDisplayMode","splitWidth","sidebarCollapsed","klineShowMinutes"]),nt.defineDomain("ui",["currentPage","currentSubPage","currentView","showUserMenu","searchKeyword","shortcutHelpVisible","commandPaletteVisible"]),nt.defineDomain("page",["loading","dates","selectedDate","consensus","dashboardData","lastLoadTime"]),nt.attach("theme","currentTheme",Ft),nt.attach("theme","themeMode",pt),nt.attach("theme","themeHue",At),nt.attach("theme","density",Vt),nt.attach("theme","currentKlinePeriod",Nt),nt.attach("auth","currentUser",B),nt.attach("auth","loginForm",Us),nt.attach("auth","logining",Gs),nt.attach("auth","guestLogining",Ys),nt.attach("auth","showSetupWizard",Qs),nt.attach("prefs","navMode",F),nt.attach("prefs","detailDisplayMode",Ue),nt.attach("prefs","splitWidth",Xe),nt.attach("prefs","sidebarCollapsed",S),nt.attach("prefs","klineShowMinutes",yt),nt.attach("ui","currentPage",w),nt.attach("ui","currentSubPage",z),nt.attach("ui","currentView",he),nt.attach("ui","showUserMenu",Y),nt.attach("ui","searchKeyword",We),nt.attach("ui","shortcutHelpVisible",ds),nt.attach("ui","commandPaletteVisible",us),nt.attach("page","loading",Ga),nt.attach("page","dates",ga),nt.attach("page","selectedDate",Ht),nt.attach("page","consensus",da),nt.attach("page","dashboardData",ce),nt.attach("page","lastLoadTime",Ya),Js.stateRegistry=nt),Js}})();aa.name="qc-icon";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=$v;window.__quantComponents.Header=$m;window.__quantComponents.SubNav=vf;window.__quantComponents.MobileNav=Pf;window.__quantComponents.StockList=up;window.__quantComponents.DetailSplit=pp;window.__quantComponents.TopTabs=Sp;window.__quantComponents.DataStaleBanner=Lp;window.__quantComponents.AppIcon=aa;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default Ip();
