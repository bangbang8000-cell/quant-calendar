var Id=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);import{aV as Nd,L as me,O as ha,Z as Od,au as Qt,M as ge,P as Se,aW as jd,a0 as Ve,_ as Be,F as ut,al as Et,S as ct,a1 as vt,X as ga,ai as Vt,q as Aa,o as Ya,a8 as ms,r as It,e as it,av as Vd,Y as Va,$ as Ea,R as Fd,aC as pa,T as Hd,Q as ca,p as Bd,n as Kd}from"./vendor-vue-DDF9zi1T.js";import{e as Wd,E as Ud,a as Gd,b as Yd,c as Qd,z as Jd}from"./vendor-ep-VOop1zGa.js";import{C as $d,a as Xd,W as Zd,I as eu,S as tu,B as au,F as su,b as nu,c as lu,d as iu,e as ou,f as ru,P as cu,g as du,h as uu,i as vu,T as mu,j as fu,L as pu,k as gu,G as hu,U as yu,l as bu,m as wu,n as ku,D as _u,o as xu,p as Su,M as Cu,q as qu,R as Eu,r as Mu,s as Tu,K as Pu,t as Du,u as Ru,v as zu,w as Au,x as Lu,y as Iu,z as Nu,A as Ou,E as ju,H as Vu,O as Fu,J as Hu,N as Bu,Q as Ku,V as Wu,X as Uu,Y as Gu,Z as Yu,_ as Qu,$ as Ju,a0 as $u,a1 as Xu,a2 as Zu,a3 as ev,a4 as tv,a5 as av,a6 as sv,a7 as nv,a8 as lv,a9 as iv,aa as ov,ab as rv,ac as cv,ad as dv,ae as uv,af as vv,ag as mv,ah as fv,ai as pv,aj as gv,ak as hv,al as yv,am as bv,an as wv,ao as kv,ap as _v,aq as xv,ar as Sv,as as Cv,at as qv,au as Ev,av as Mv,aw as Tv,ax as Pv,ay as Dv,az as Rv,aA as zv,aB as Av,aC as Lv,aD as Iv,aE as Nv,aF as Ov,aG as jv,aH as Vv,aI as Fv,aJ as Hv,aK as Bv,aL as Kv,aM as Wv,aN as Uv,aO as Gv,aP as Yv,aQ as Qv}from"./vendor-lucide-DidEUx9K.js";var jp=Id((Jp,Me)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))t(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const x of d.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&t(x)}).observe(document,{childList:!0,subtree:!0});function m(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(c){if(c.ep)return;c.ep=!0;const d=m(c);fetch(c.href,d)}})();window.Vue=Nd;const ya=Wd||{};window.ElementPlus=ya;ya.ElMessage=ya.ElMessage||Ud;ya.ElMessageBox=ya.ElMessageBox||Gd;ya.ElNotification=ya.ElNotification||Yd;ya.ElLoading=ya.ElLoading||Qd;window.ElementPlusLocaleZhCn={default:Jd};(function(){const a=[45,220,0,140,270,320,180,25,250],e={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},m={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function t(s,S,i){return"hsl("+s+", "+S+"%, "+i+"%)"}function c(s,S,i){S=S/100,i=i/100;const h=function(C){return(C+s/30)%12},X=S*Math.min(i,1-i),N=function(C){return i-X*Math.max(-1,Math.min(h(C)-3,Math.min(9-h(C),1)))};return Math.round(255*N(0))+", "+Math.round(255*N(8))+", "+Math.round(255*N(4))}const d=5;function x(s,S,i){return c(s,S,i).split(",").map(function(h){return parseInt(h,10)})}function r(s){const S=function(i){return i=i/255,i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4)};return .2126*S(s[0])+.7152*S(s[1])+.0722*S(s[2])}function n(s,S){const i=r(s),h=r(S),X=Math.max(i,h),N=Math.min(i,h);return(X+.05)/(N+.05)}function p(s,S,i){for(var h=8,X=92,N=0;N<26;N++){var C=(h+X)/2;r(x(s,S,C))<i?h=C:X=C}return Math.round(X*10)/10}function o(s,S,i,h,X){let N=38,C=76;for(let f=0;f<24;f++){const P=(N+C)/2;n(x(s,h,P),x(s,S,i))>=X?C=P:N=P}return Math.round(C*10)/10}function q(s,S){var i={};return S==="light"?(i["--qc-neutral-50"]=t(s,18,98),i["--qc-neutral-100"]=t(s,16,95),i["--qc-neutral-200"]=t(s,14,90),i["--qc-neutral-300"]=t(s,12,83),i["--qc-neutral-400"]=t(s,10,68),i["--qc-neutral-500"]=t(s,10,53),i["--qc-neutral-600"]=t(s,10,40),i["--qc-neutral-700"]=t(s,10,30),i["--qc-neutral-800"]=t(s,10,20),i["--qc-neutral-900"]=t(s,10,12),i["--qc-background"]=t(s,18,98),i["--qc-muted"]=t(s,16,95),i["--qc-border"]=t(s,12,72),i["--chart-axis"]=t(s,12,55),i["--chart-split"]=t(s,10,88),i["--qc-foreground"]=t(s,10,12),i["--qc-muted-foreground"]=t(s,9,38),i["--qc-nav-item-default"]=t(s,9,38),i["--qc-nav-item-hover"]=t(s,10,12),i["--qc-nav-group-label"]=t(s,9,40),i["--qc-nav-bg"]="#ffffff",i["--bg-page"]=t(s,20,97),i["--bg-stripe"]=t(s,20,97),i["--bg-card-header"]=t(s,24,96),i["--card-gradient-header"]="linear-gradient(135deg, "+t(s,24,96)+" 0%, #ffffff 100%)",i["--bg-hover"]=t(s,26,94),i["--bg-tertiary"]=t(s,14,93),i["--badge-gold-bg"]=t(s,26,96),i["--gold-bg"]=t(s,20,97),i["--border-light"]=t(s,22,89),i["--border-base"]=t(s,24,79),i["--border-color"]=t(s,14,88),i["--text-primary"]=t(s,12,12),i["--text-secondary"]=t(s,12,32),i["--text-tertiary"]=t(s,14,40),i["--text-disabled"]=t(s,9,y(s,9,I(s,18,98),25,70,!0,3.2)),i["--qc-card"]="#ffffff",i["--qc-popover"]="#ffffff",i["--qc-nav-border"]=t(s,12,72),i["--qc-nav-item-hover-bg"]=t(s,16,95),i["--qc-overlay"]="rgba(31, 29, 26, 0.5)",i["--bg-card"]="#ffffff",i["--surface"]="#ffffff",i["--border-heavy"]=t(s,22,72),i["--surface-canvas"]=t(s,18,98),i["--surface-card"]="#ffffff",i["--surface-raised"]="#ffffff",i["--surface-sunken"]=t(s,16,96),i["--surface-input"]="#ffffff",i["--surface-hover"]=t(s,26,94),i["--border-strong"]=t(s,22,72),i["--scrollbar-thumb"]="rgba("+c(s,12,72)+", 0.5)",i["--bg-page-rgb"]=c(s,20,97)):(i["--qc-background"]=t(s,10,8),i["--qc-card"]=t(s,11,11),i["--qc-popover"]=t(s,11,11),i["--qc-muted"]=t(s,12,14),i["--qc-border"]=t(s,14,30),i["--chart-axis"]=t(s,16,52),i["--chart-split"]=t(s,14,26),i["--qc-nav-bg"]=t(s,10,9),i["--qc-nav-border"]=t(s,13,22),i["--qc-nav-item-hover-bg"]=t(s,12,14),i["--bg-page"]=t(s,10,8),i["--bg-card"]=t(s,11,11),i["--bg-card-header"]=t(s,12,14),i["--bg-stripe"]=t(s,10,9),i["--bg-hover"]=t(s,12,14),i["--bg-tertiary"]=t(s,12,14),i["--border-light"]=t(s,13,18),i["--border-base"]=t(s,14,26),i["--border-heavy"]=t(s,16,38),i["--border-color"]=t(s,13,22),i["--surface"]=t(s,11,11),i["--surface-canvas"]=t(s,10,8),i["--surface-card"]=t(s,11,11),i["--surface-raised"]=t(s,12,14),i["--surface-sunken"]=t(s,12,9),i["--surface-input"]=t(s,12,9),i["--surface-hover"]=t(s,12,15),i["--border-strong"]=t(s,16,42),i["--scrollbar-thumb"]="rgba("+c(s,16,52)+", 0.5)",i["--bg-page-rgb"]=c(s,10,8),i["--qc-overlay"]="rgba(0, 0, 0, 0.6)"),i}const b=4.6;var _=[255,255,255];function k(s){return c(s,10,8).split(",").map(function(S){return parseInt(S,10)})}function y(s,S,i,h,X,N,C){for(var f=C||b,P=h,v=X,j=0;j<24;j++){var ne=(P+v)/2,$=n(x(s,S,ne),i)>=f;N?$?P=ne:v=ne:$?v=ne:P=ne}return Math.round((N?P:v)*10)/10}function I(s,S,i){return c(s,S,i).split(",").map(function(h){return parseInt(h,10)})}function M(s){const S=p(s,75,.18),i=p(s,75,.26),h=p(s,70,.36),X=p(s,85,.12),N=c(s,75,S),C=y(s,68,_,14,62,!0),f=Math.max(12,C-5),P=Math.max(10,C-11),v=c(s,16,95).split(",").map(function(Q){return parseInt(Q,10)}),j=c(s,85,92).split(",").map(function(Q){return parseInt(Q,10)}),ne=y(s,78,v,10,58,!0,4.6),$=y(s,80,j,10,58,!0,4.6),L=Math.min(32,y(s,80,_,8,60,!0,4.6));return{...q(s,"light"),"--primary-color":t(s,75,S),"--primary-rgb":N,"--color-primary":t(s,75,S),"--qc-primary":t(s,75,S),"--qc-primary-50":t(s,90,96),"--qc-primary-100":t(s,85,92),"--qc-primary-200":t(s,80,84),"--qc-primary-300":t(s,75,72),"--qc-primary-400":t(s,70,h),"--qc-primary-500":t(s,75,i),"--qc-primary-600":t(s,80,S),"--qc-primary-700":t(s,85,X),"--qc-primary-800":t(s,88,28),"--qc-primary-900":t(s,90,20),"--text-link":t(s,78,ne),"--secondary-color":t(s,70,55),"--card-border":t(s,22,80),"--bg-selected":"rgba("+N+", 0.08)","--btn-primary-bg":t(s,80,L),"--btn-primary-border":t(s,80,L),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":t(s,82,28),"--btn-primary-hover-border":t(s,82,28),"--btn-primary-active-bg":t(s,85,24),"--btn-primary-active-border":t(s,85,24),"--btn-primary-plain-bg":"rgba("+N+", 0.08)","--btn-primary-plain-border":"rgba("+N+", 0.25)","--btn-primary-plain-color":t(s,80,ne),"--btn-primary-plain-hover-bg":"rgba("+N+", 0.15)","--btn-primary-plain-hover-border":t(s,80,32),"--btn-primary-text-color":t(s,80,ne),"--gradient-brand":"linear-gradient(135deg, "+t(s,76,f)+" 0%, "+t(s,85,P)+" 100%)","--primary-text":t(s,78,ne),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+t(s,62,Math.min(74,o(s,45,14,58,d)+5))+" 0%, "+t(s,58,o(s,45,14,58,d))+" 100%)","--panel-fg":t(s,45,14),"--qc-nav-item-active":t(s,80,$),"--qc-nav-item-active-bg":t(s,85,92),"--qc-nav-item-active-border":t(s,75,48),"--qc-nav-badge-bg":t(s,85,92),"--qc-nav-badge-text":t(s,80,$),"--qc-ring":t(s,75,y(s,75,I(s,18,98),25,70,!0,3.2)),"--brand-soft-text":t(s,80,y(s,80,I(s,80,84),10,58,!0,4.6)),"--border-control":t(s,16,y(s,16,I(s,18,98),30,80,!0,3.2))}}function u(s){const S=p(s,85,.34),i=p(s,85,.46),h=c(s,85,S),X=y(s,80,k(s),30,92,!1),N=Math.min(96,X+16),C=I(s,55,22),f=I(s,10,9),P=h.split(",").map(function(Q){return parseInt(Q,10)}),v=[0,1,2].map(function(Q){return Math.round(P[Q]*.12+f[Q]*.88)}),j=y(s,85,v,45,96,!1,4.6),ne=y(s,85,C,45,96,!1,4.6),$=Math.min(94,y(s,92,C,45,96,!1,4.6)),L=Math.min(96,$+6);return{...q(s,"dark"),"--primary-color":t(s,85,S),"--primary-rgb":h,"--color-primary":t(s,85,S),"--qc-primary":t(s,90,S),"--qc-primary-50":t(s,50,18),"--qc-primary-100":t(s,55,22),"--qc-primary-200":t(s,55,26),"--qc-primary-300":t(s,60,30),"--qc-primary-400":t(s,65,38),"--qc-primary-500":t(s,85,i),"--qc-primary-600":t(s,90,S),"--qc-primary-700":t(s,92,$),"--qc-primary-800":t(s,90,L),"--qc-primary-900":t(s,92,Math.min(98,L+8)),"--text-link":t(s,85,ne),"--secondary-color":t(s,70,60),"--card-border":t(s,30,25),"--bg-selected":"rgba("+h+", 0.10)","--btn-primary-bg":t(s,85,65),"--btn-primary-border":t(s,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":t(s,80,72),"--btn-primary-hover-border":t(s,80,72),"--btn-primary-active-bg":t(s,75,80),"--btn-primary-active-border":t(s,75,80),"--btn-primary-plain-bg":"rgba("+h+", 0.08)","--btn-primary-plain-border":"rgba("+h+", 0.25)","--btn-primary-plain-color":t(s,85,ne),"--btn-primary-plain-hover-bg":"rgba("+h+", 0.15)","--btn-primary-plain-hover-border":t(s,85,65),"--btn-primary-text-color":t(s,85,ne),"--gradient-brand":"linear-gradient(135deg, "+t(s,85,N)+" 0%, "+t(s,80,X)+" 100%)","--primary-text":t(s,85,ne),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+t(s,60,Math.min(76,o(s,40,12,55,d)+5))+" 0%, "+t(s,55,o(s,40,12,55,d))+" 100%)","--panel-fg":t(s,40,12),"--qc-nav-item-active":t(s,85,j),"--qc-nav-item-active-bg":"rgba("+h+", 0.10)","--qc-nav-item-active-border":t(s,85,65),"--qc-nav-badge-bg":"rgba("+h+", 0.12)","--qc-nav-badge-text":t(s,85,j),"--border-control":t(s,16,y(s,16,I(s,11,11),25,70,!1,3.2)),"--brand-soft-text":t(s,85,y(s,85,I(s,55,26),45,96,!1,4.6)),"--qc-ring":t(s,85,65)}}var l=[],g={mode:"light",hue:45},E=!1;function O(s,S){try{var i=document.querySelector('meta[name="theme-color"]');if(!i)return;var h=S?s["--surface-canvas"]||s["--qc-background"]:s["--btn-primary-bg"]||s["--qc-primary"];h&&i.setAttribute("content",h)}catch{}}function w(){if(!(E||typeof window>"u"||!window.matchMedia)){var s=window.matchMedia("(prefers-color-scheme: dark)"),S=function(){g.mode==="system"&&J("system",g.hue)};s.addEventListener?s.addEventListener("change",S):s.addListener&&s.addListener(S),E=!0}}function D(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}var T=-1;function B(s){return s=parseInt(s,10),isNaN(s)?45:s<0?T:Math.max(0,Math.min(359,s))}function F(s){return Object.keys(s).forEach(function(S){var i=s[S];if(typeof i=="string"){i.indexOf("hsl(")>=0&&(i=i.replace(/hsl\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)%/g,function(f,P){return"hsl("+P+", 0%"}));var h=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*[\d.]+)?\)$/.exec(i);if(h){var X=Math.round(.2126*+h[1]+.7152*+h[2]+.0722*+h[3]);i="rgba("+X+", "+X+", "+X+(h[4]||"")+")"}if(/^\d+,\s*\d+,\s*\d+$/.test(i)){var N=i.split(",").map(function(f){return parseInt(f,10)}),C=Math.round(.2126*N[0]+.7152*N[1]+.0722*N[2]);i=C+", "+C+", "+C}s[S]=i}}),s}function U(s,S){var i=I(45,0,S?22:95),h=I(45,0,S?8:98),X=I(45,0,S?11:100),N=S?y(45,0,i,45,96,!1,4.6):y(45,0,i,10,58,!0,4.6),C=I(45,0,S?22:92),f=S?y(45,0,C,45,96,!1,4.6):y(45,0,C,10,58,!0,4.6),P=S?y(45,0,h,45,96,!1,3.2):y(45,0,h,25,70,!0,3.2),v=S?y(45,0,X,25,70,!1,3.2):y(45,0,h,30,80,!0,3.2),j=S?y(45,0,I(45,0,26),45,96,!1,4.6):y(45,0,I(45,0,84),10,58,!0,4.6);s["--brand-soft-text"]="hsl(45, 0%, "+j+"%)";var ne="hsl(45, 0%, "+N+"%)";if(s["--primary-text"]=ne,s["--text-link"]=ne,s["--btn-primary-text-color"]=ne,s["--btn-primary-plain-color"]=ne,s["--qc-nav-item-active"]="hsl(45, 0%, "+f+"%)",s["--qc-nav-badge-text"]="hsl(45, 0%, "+f+"%)",s["--qc-ring"]="hsl(45, 0%, "+P+"%)",s["--border-control"]="hsl(45, 0%, "+v+"%)",S){var $=y(45,0,I(45,0,8),30,92,!1,4.6),L=Math.min(96,$+16);s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+L+"%) 0%, hsl(45, 0%, "+$+"%) 100%)"}else{var Q=y(45,0,_,14,62,!0,4.6),oe=Math.max(12,Q-5),fe=Math.max(10,Q-11);s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+oe+"%) 0%, hsl(45, 0%, "+fe+"%) 100%)"}var Ce=o(45,0,14,0,d);return s["--gradient-panel"]="linear-gradient(135deg, hsl(45, 0%, "+Math.min(74,Ce+5)+"%) 0%, hsl(45, 0%, "+Ce+"%) 100%)",s["--panel-fg"]="hsl(45, 0%, 14%)",s}function J(s,S){let i=s||"light",h=S==null||S===""?null:S;if(e[s]){const j=e[s];i=j[0],h==null&&(h=j[1])}i==="system"&&(i=D()?"dark":"light");const X=i==="dark";h=B(h??45);const N=h===T,C=document.documentElement;C.setAttribute("data-theme",X?"dark-pro":"gold"),C.setAttribute("data-theme-mode",X?"dark":"light"),C.setAttribute("data-theme-neutral",N?"true":"false");let f=X?u(N?45:h):M(N?45:h);N&&(f=U(F(f),X));for(var P=Object.keys(f),v=0;v<l.length;v++)P.indexOf(l[v])===-1&&C.style.removeProperty(l[v]);P.forEach(function(j){C.style.setProperty(j,f[j])}),l=P,g.mode=typeof s=="string"&&s?s:"light",g.hue=h,O(f,X);try{localStorage.setItem("quant_theme_mode",X?"dark":"light"),localStorage.setItem("quant_theme_hue",String(h))}catch{}return{mode:X?"dark":"light",hue:h}}function ee(){try{var s=localStorage.getItem("quant_theme_hue");if(s!==null&&s!=="")return B(s)}catch{}var S=typeof window<"u"&&window.__quantModules?window.__quantModules.preferences:null;if(S&&S.getPreference){var i=S.getPreference("theme_hue");if(i!=null&&i!=="")return B(i)}return null}function H(s){var S=ee();return J(s,S??void 0)}function Z(){const s=localStorage.getItem("quant_theme");if(!s||!e[s]||localStorage.getItem("quant_theme_hue")!==null)return null;const S=e[s];return{mode:S[0],hue:S[1]}}function z(){const s=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let S=s.theme||"system",i=s.theme_hue!=null&&s.theme_hue!==""?s.theme_hue:null;const h=Z();return i==null&&h&&(S=h.mode,i=h.hue),i==null&&(i=45),w(),J(S,i)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:a,LEGACY_MAP:e,legacyThemes:m,NEUTRAL_HUE:T,generateLightTokens:M,generateDarkTokens:u,migrateLegacyTheme:Z,persistedHue:ee,applyLegacyTheme:H,applyTheme:J,init:z},typeof queueMicrotask=="function"?queueMicrotask(z):z()})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantI18n=e()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",e=["zh-CN","en","ja","ko","zh-TW"],m={};let t=a,c=null;function d(){return c&&typeof c=="object"&&"value"in c?c.value||a:t}function x(b,_){return e.indexOf(b)===-1?!1:(m[b]=_&&typeof _=="object"?_:{},!0)}function r(b){const _=e.indexOf(b)!==-1?b:a;return t=_,c&&typeof c=="object"&&"value"in c&&(c.value=_),typeof document<"u"&&document.documentElement.setAttribute("lang",_),t}function n(){return d()}function p(b){if(b&&typeof b=="object"&&"value"in b){c=b;const _=e.indexOf(b.value)!==-1?b.value:a;b.value=_,t=_}return t}function o(b,_){const k=d(),y=m[k]||{};let I=b in y?y[b]:null;if(I==null&&k!=="en"){const M=m.en||{};I=b in M?M[b]:null}return I==null&&(I=String(b)),_&&typeof _=="object"&&Object.keys(_).forEach(function(M){I=I.replace(new RegExp("\\{"+M+"\\}","g"),String(_[M]))}),I}const q={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:e,messages:m,registerLocale:x,setLocale:r,getLocale:n,bindLocale:p,t:o};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=q),q});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantZhCN=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.ruleScore":"选股评分","detail.notEvaluated":"未评估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时","glossary.title":"术语表","glossary.search":"搜索术语","glossary.definition":"定义","glossary.calc":"计算口径","glossary.empty":"无匹配术语","glossary.cat.macro":"宏观","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技术","glossary.cat.shortterm":"短线","glossary.cat.datasource":"数据源","glossary.cat.product":"产品","glossary.term.merrill_clock":"美林时钟","glossary.term.recovery":"复苏期","glossary.term.overheat":"过热期","glossary.term.stagflation":"滞胀期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五维评分","glossary.term.momentum":"动量策略","glossary.term.reversal":"反转策略","glossary.term.quality":"质量策略","glossary.term.capital_flow":"资金流策略","glossary.term.consensus":"共识榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰减","glossary.term.zscore":"Z-Score","glossary.term.pe":"市盈率(PE)","glossary.term.pb":"市净率(PB)","glossary.term.roe":"净资产收益率(ROE)","glossary.term.market_cap":"总市值","glossary.term.ma":"均线(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"换手率","glossary.term.zt_pool":"涨停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龙虎榜","glossary.term.ladder":"连板","glossary.term.promote_rate":"晋级率","glossary.term.money_effect":"赚钱效应","glossary.term.sentiment_cycle":"情绪周期","glossary.term.sector_flow":"板块资金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源热备","glossary.term.pit":"PIT(时点数据)","glossary.term.survivorship":"幸存者偏差","glossary.term.ai_eval":"AI评估","glossary.term.ai_chat":"智能问股","glossary.term.backtest":"回测","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"样本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"胜率","glossary.term.portfolio":"模拟组合","glossary.term.data_quality":"数据质量分","glossary.term.rbac":"RBAC权限","glossary.term.sector_rotation":"行业轮动","glossary.term.index_enhance":"指数增强","glossary.term.multifactor":"多因子","glossary.term.volatility":"波动率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林带","glossary.term.dragon_head":"龙头股","glossary.term.data_freshness":"数据新鲜度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantEn=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.ruleScore":"Rule score","detail.notEvaluated":"Not scored","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration","glossary.title":"Glossary","glossary.search":"Search terms","glossary.definition":"Definition","glossary.calc":"Calculation","glossary.empty":"No matching terms","glossary.cat.macro":"Macro","glossary.cat.strategy":"Strategy","glossary.cat.factor":"Factor","glossary.cat.tech":"Technical","glossary.cat.shortterm":"Short-term","glossary.cat.datasource":"Data Source","glossary.cat.product":"Product","glossary.term.merrill_clock":"Merrill Clock","glossary.term.recovery":"Recovery","glossary.term.overheat":"Overheat","glossary.term.stagflation":"Stagflation","glossary.term.recession":"Recession","glossary.term.merrill_score":"Five-Dimension Score","glossary.term.momentum":"Momentum","glossary.term.reversal":"Reversal","glossary.term.quality":"Quality","glossary.term.capital_flow":"Capital Flow","glossary.term.consensus":"Consensus Board","glossary.term.in_pool":"In Pool","glossary.term.out_pool":"Out of Pool","glossary.term.factor":"Factor","glossary.term.factor_ic":"Factor IC","glossary.term.ic_decay":"IC Decay","glossary.term.zscore":"Z-Score","glossary.term.pe":"P/E Ratio","glossary.term.pb":"P/B Ratio","glossary.term.roe":"ROE","glossary.term.market_cap":"Market Cap","glossary.term.ma":"Moving Average","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"Volume Ratio","glossary.term.turnover":"Turnover Rate","glossary.term.zt_pool":"Limit-Up Pool","glossary.term.zha_ban":"Failed Limit-Up","glossary.term.dt_pool":"Limit-Down Pool","glossary.term.lhb":"Dragon-Tiger List","glossary.term.ladder":"Consecutive Limit-Ups","glossary.term.promote_rate":"Promotion Rate","glossary.term.money_effect":"Money Effect","glossary.term.sentiment_cycle":"Sentiment Cycle","glossary.term.sector_flow":"Sector Flow","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"Triple-Source Failover","glossary.term.pit":"PIT (Point-in-Time)","glossary.term.survivorship":"Survivorship Bias","glossary.term.ai_eval":"AI Evaluation","glossary.term.ai_chat":"AI Stock Chat","glossary.term.backtest":"Backtest","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"Out-of-Sample","glossary.term.sharpe":"Sharpe Ratio","glossary.term.drawdown":"Drawdown","glossary.term.winrate":"Win Rate","glossary.term.portfolio":"Paper Portfolio","glossary.term.data_quality":"Data Quality Grade","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"Sector Rotation","glossary.term.index_enhance":"Index Enhancement","glossary.term.multifactor":"Multi-Factor","glossary.term.volatility":"Volatility","glossary.term.dividend_yield":"Dividend Yield","glossary.term.bollinger":"Bollinger Bands","glossary.term.dragon_head":"Leading Stock","glossary.term.data_freshness":"Data Freshness"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.Quantja=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.ruleScore":"選股スコア","detail.notEvaluated":"未評価","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間","glossary.title":"用語集","glossary.search":"用語検索","glossary.definition":"定義","glossary.calc":"計算方法","glossary.empty":"該当する用語がありません","glossary.cat.macro":"マクロ","glossary.cat.strategy":"戦略","glossary.cat.factor":"ファクター","glossary.cat.tech":"テクニカル","glossary.cat.shortterm":"短期","glossary.cat.datasource":"データソース","glossary.cat.product":"プロダクト","glossary.term.merrill_clock":"メリルクロック","glossary.term.recovery":"回復期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"スタグフレーション","glossary.term.recession":"景気後退","glossary.term.merrill_score":"5次元スコア","glossary.term.momentum":"モメンタム","glossary.term.reversal":"リバーサル","glossary.term.quality":"クオリティ","glossary.term.capital_flow":"資金フロー","glossary.term.consensus":"コンセンサス","glossary.term.in_pool":"新規採用","glossary.term.out_pool":"除外","glossary.term.factor":"ファクター","glossary.term.factor_ic":"ファクターIC","glossary.term.ic_decay":"IC減衰","glossary.term.zscore":"Zスコア","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"時価総額","glossary.term.ma":"移動平均","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"出来高倍率","glossary.term.turnover":"回転率","glossary.term.zt_pool":"ストップ高","glossary.term.zha_ban":"ストップ高失敗","glossary.term.dt_pool":"ストップ安","glossary.term.lhb":"竜虎榜","glossary.term.ladder":"連続ストップ高","glossary.term.promote_rate":"昇格率","glossary.term.money_effect":"マネー効果","glossary.term.sentiment_cycle":"センチメントサイクル","glossary.term.sector_flow":"セクターフロー","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"三重冗長","glossary.term.pit":"PIT","glossary.term.survivorship":"サバイバーシップバイアス","glossary.term.ai_eval":"AI評価","glossary.term.ai_chat":"AI株チャット","glossary.term.backtest":"バックテスト","glossary.term.walkforward":"ウォークフォワード","glossary.term.oos":"サンプル外","glossary.term.sharpe":"シャープレシオ","glossary.term.drawdown":"ドローダウン","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬ポートフォリオ","glossary.term.data_quality":"データ品質","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"セクターローテーション","glossary.term.index_enhance":"インデックス強化","glossary.term.multifactor":"マルチファクター","glossary.term.volatility":"ボラティリティ","glossary.term.dividend_yield":"配当利回り","glossary.term.bollinger":"ボリンジャーバンド","glossary.term.dragon_head":"リーダー株","glossary.term.data_freshness":"データ鮮度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",a),a});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.Quantko=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.ruleScore":"종목 점수","detail.notEvaluated":"미평가","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간","glossary.title":"용어집","glossary.search":"용어 검색","glossary.definition":"정의","glossary.calc":"계산 방법","glossary.empty":"일치하는 용어가 없습니다","glossary.cat.macro":"거시","glossary.cat.strategy":"전략","glossary.cat.factor":"팩터","glossary.cat.tech":"기술적","glossary.cat.shortterm":"단기","glossary.cat.datasource":"데이터 소스","glossary.cat.product":"제품","glossary.term.merrill_clock":"메릴 클럭","glossary.term.recovery":"회복기","glossary.term.overheat":"과열기","glossary.term.stagflation":"스태그플레이션","glossary.term.recession":"경기 침체","glossary.term.merrill_score":"5차원 점수","glossary.term.momentum":"모멘텀","glossary.term.reversal":"리버설","glossary.term.quality":"퀄리티","glossary.term.capital_flow":"자금 흐름","glossary.term.consensus":"컨센서스","glossary.term.in_pool":"신규 편입","glossary.term.out_pool":"제외","glossary.term.factor":"팩터","glossary.term.factor_ic":"팩터 IC","glossary.term.ic_decay":"IC 감쇠","glossary.term.zscore":"Z-Score","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"시가총액","glossary.term.ma":"이동평균","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"거래량비","glossary.term.turnover":"회전율","glossary.term.zt_pool":"상한가 풀","glossary.term.zha_ban":"상한가 실패","glossary.term.dt_pool":"하한가 풀","glossary.term.lhb":"용호방","glossary.term.ladder":"연속 상한가","glossary.term.promote_rate":"승격률","glossary.term.money_effect":"돈벌이 효과","glossary.term.sentiment_cycle":"심리 사이클","glossary.term.sector_flow":"섹터 자금","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"삼원 이중화","glossary.term.pit":"PIT","glossary.term.survivorship":"생존자 편향","glossary.term.ai_eval":"AI 평가","glossary.term.ai_chat":"AI 주식 채팅","glossary.term.backtest":"백테스트","glossary.term.walkforward":"워크포워드","glossary.term.oos":"샘플 외","glossary.term.sharpe":"샤프 비율","glossary.term.drawdown":"드로다운","glossary.term.winrate":"승률","glossary.term.portfolio":"모의 포트폴리오","glossary.term.data_quality":"데이터 품질","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"섹터 로테이션","glossary.term.index_enhance":"지수 강화","glossary.term.multifactor":"멀티팩터","glossary.term.volatility":"변동성","glossary.term.dividend_yield":"배당수익률","glossary.term.bollinger":"볼린저 밴드","glossary.term.dragon_head":"리더주","glossary.term.data_freshness":"데이터 신선도"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",a),a});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantzhTW=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.ruleScore":"選股評分","detail.notEvaluated":"未評估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時","glossary.title":"術語表","glossary.search":"搜尋術語","glossary.definition":"定義","glossary.calc":"計算口徑","glossary.empty":"無相符術語","glossary.cat.macro":"總體","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技術","glossary.cat.shortterm":"短線","glossary.cat.datasource":"資料源","glossary.cat.product":"產品","glossary.term.merrill_clock":"美林時鐘","glossary.term.recovery":"復甦期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"滯脹期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五維評分","glossary.term.momentum":"動量策略","glossary.term.reversal":"反轉策略","glossary.term.quality":"質量策略","glossary.term.capital_flow":"資金流策略","glossary.term.consensus":"共識榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰減","glossary.term.zscore":"Z-Score","glossary.term.pe":"本益比(PE)","glossary.term.pb":"股價淨值比(PB)","glossary.term.roe":"股東權益報酬率(ROE)","glossary.term.market_cap":"總市值","glossary.term.ma":"均線(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"換手率","glossary.term.zt_pool":"漲停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龍虎榜","glossary.term.ladder":"連板","glossary.term.promote_rate":"晉級率","glossary.term.money_effect":"賺錢效應","glossary.term.sentiment_cycle":"情緒週期","glossary.term.sector_flow":"板塊資金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源熱備","glossary.term.pit":"PIT(時點資料)","glossary.term.survivorship":"倖存者偏差","glossary.term.ai_eval":"AI評估","glossary.term.ai_chat":"智能問股","glossary.term.backtest":"回測","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"樣本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬組合","glossary.term.data_quality":"資料品質分","glossary.term.rbac":"RBAC權限","glossary.term.sector_rotation":"產業輪動","glossary.term.index_enhance":"指數增強","glossary.term.multifactor":"多因子","glossary.term.volatility":"波動率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林帶","glossary.term.dragon_head":"龍頭股","glossary.term.data_freshness":"資料新鮮度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",a),a});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantPinyin=e()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},e=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let m=[];function t(k){const y=String(k||"");let I="";for(const M of y){const u=a[M];u?I+=u.charAt(0):/[a-zA-Z0-9]/.test(M)&&(I+=M.toLowerCase())}return I}function c(k){const y=String(k||"");let I="";for(const M of y){const u=a[M];u?I+=u:/[a-zA-Z0-9]/.test(M)&&(I+=M.toLowerCase())}return I}function d(k){return String(k||"").trim().toLowerCase()}function x(k,y){const I=(y.code||"").toLowerCase();return/^\d+$/.test(k)?I.indexOf(k)!==-1:/[\u4e00-\u9fa5]/.test(k)?(y.name||"").toLowerCase().indexOf(k)!==-1:I.indexOf(k)!==-1||(y.initials||t(y.name)).indexOf(k)!==-1||(y.pinyin||c(y.name)).indexOf(k)!==-1}function r(k){const y={},I=[],M=function(u,l,g){!u||y[u]||(y[u]=!0,I.push({code:u,name:l||u,source:g||"core",initials:t(l||u),pinyin:c(l||u)}))};return e.forEach(function(u){M(u.code,u.name,"core")}),(k||[]).forEach(function(u){M(u.code,u.name,"extra")}),I}function n(k,y){const I=d(k);if(!I||!y||!y.length)return[];const M=I.split(/[\s,，、;；]+/).filter(Boolean);return M.length?y.filter(function(u){return M.every(function(l){return x(l,u)})}).slice(0,20).map(function(u){return{code:u.code,name:u.name,source:u.source||"core"}}):[]}function p(k){Array.isArray(k)&&(m=m.concat(k))}function o(){return m.slice()}function q(){return r(m)}function b(k){return n(k,q())}const _={CHAR_PINYIN:a,CORE_STOCKS:e,toPinyinInitials:t,toPinyin:c,normalizeQuery:d,matchToken:x,buildStockIndex:r,searchStocksByQuery:n,registerExtraStocks:p,getExtraStocks:o,getStockIndex:q,searchCoreStocks:b};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=_),_});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantPreferences=e()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",e={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},m=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],t={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function c(l){return l=parseInt(l,10),isNaN(l)?!1:l===-1||l>=0&&l<=360}const d={light:"classic-white",dark:"dark-pro"};function x(){if(typeof localStorage>"u")return{};try{const l=localStorage.getItem(a);if(!l)return{};const g=JSON.parse(l);return g&&typeof g=="object"?g:{}}catch{return{}}}function r(l){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(l))}catch{}}function n(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function p(){const l=Object.assign({},e,x()),g={};return m.forEach(function(E){const O=l[E];g[E]=E==="theme_hue"?c(O)?parseInt(O,10):e[E]:t[E].indexOf(O)!==-1?O:e[E]}),g}function o(l){if(m.indexOf(l)!==-1)return p()[l]}function q(l,g){return m.indexOf(l)===-1?!1:l==="theme_hue"?c(g):t[l].indexOf(g)!==-1}function b(l,g){if(!q(l,g))return!1;const E=x();return E[l]=g,r(E),n()&&k({[l]:g}),!0}function _(l){if(!l||typeof l!="object")return!1;const g={};if(Object.keys(l).forEach(function(O){q(O,l[O])&&(g[O]=l[O])}),!Object.keys(g).length)return!1;const E=Object.assign({},x(),g);return r(E),n()&&k(g),!0}function k(l){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:l})}).catch(function(){})}catch{}}async function y(){const l=p();if(!n()||typeof fetch>"u")return l;try{const g=await fetch("/api/user_config/preferences");if(g.ok){const E=await g.json();if(E.success&&E.preferences){const O=E.preferences;m.forEach(function(w){const D=O[w];if(w==="theme_hue"){c(D)&&(l[w]=parseInt(D,10));return}t[w].indexOf(D)!==-1&&(l[w]=D)}),r(l)}}}catch(g){typeof console<"u"&&console.warn&&console.warn("[preferences] 读取服务端偏好失败, 回退本地偏好:",g&&g.message)}return l}function I(l){const g=l||o("info_density")||"comfortable",E=t.info_density.indexOf(g)!==-1?g:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",E),E}function M(l){const g=l||o("theme")||"system";if(g==="system"){let E=!1;return typeof window<"u"&&window.matchMedia&&(E=window.matchMedia("(prefers-color-scheme: dark)").matches),E?"dark":"light"}return g==="dark"||g==="light"?g:"light"}const u={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:e,PREFERENCE_KEYS:m,PREFERENCE_VALUES:t,THEME_MODE_TO_THEME:d,getLocal:p,getPreference:o,isValidValue:q,setPreference:b,setPreferences:_,saveToBackend:k,loadPreferences:y,resolveTheme:M,applyDensity:I};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=u),u});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantRecent=e()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function m(){if(typeof localStorage>"u")return[];try{const p=localStorage.getItem(a);if(!p)return[];const o=JSON.parse(p);return Array.isArray(o)?o:[]}catch{return[]}}function t(p){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(p))}catch{}}function c(p,o){if(!p)return!1;let q=m().filter(function(b){return b.code!==p});return q.unshift({code:p,name:(o||"").toString().slice(0,32),ts:Date.now()}),q.length>10&&(q=q.slice(0,10)),t(q),!0}function d(){return m().slice(0,10)}function x(p){t(m().filter(function(o){return o.code!==p}))}function r(){t([])}const n={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:c,getRecentViewed:d,removeRecent:x,clearRecent:r};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=n),n});(function(){const a=typeof Vue<"u"?Vue:{},{ref:e,computed:m,watch:t,onMounted:c,nextTick:d}=a;function x(f,P={}){if(typeof f=="string"&&f.startsWith("/api/")){const v=localStorage.getItem("quant_token");if(v)return{...P,headers:{...P.headers||{},Authorization:"Bearer "+v}}}return P}async function r(f,P={}){const v=x(f,P),j={"Content-Type":"application/json",...v.headers},ne=(P.method||"GET").toUpperCase(),$=ne+"|"+f,L=async()=>{const Q=await fetch(f,{...v,headers:j});if(Q.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!Q.ok){let oe="";try{const fe=await Q.json();oe=fe&&fe.detail||""}catch{}throw Object.assign(new Error(oe||"请求失败（HTTP "+Q.status+"）"),{status:Q.status})}return await Q.json()};try{const Q=P.noLoading?L:()=>g(L);return ne==="GET"&&!P.noDedupe?await I($,Q):await Q()}catch(Q){throw Q.message==="登录已过期"?Q:(console.error("[apiFetch] "+f+":",Q.message),Object.assign(Q,{_formatted:E(Q,Q.status)}))}}function n(){return new Date().toISOString().split("T")[0]}function p(f){return f?f.split("T")[0]:""}function o(f,P="info",v=3e3){let j=document.querySelector(".toast-container");j||(j=document.createElement("div"),j.className="toast-container",document.body.appendChild(j));const ne=document.createElement("div");ne.className=`toast toast-${P}`,ne.textContent=f,j.appendChild(ne),setTimeout(()=>{ne.classList.add("leaving"),setTimeout(()=>ne.remove(),300)},v)}function q(f,P=300){let v;return function(...j){clearTimeout(v),v=setTimeout(()=>f.apply(this,j),P)}}function b(f,P=300){let v=!1;return function(...j){v||(f.apply(this,j),v=!0,setTimeout(()=>{v=!1},P))}}async function _(f,P=3e3,v=""){const j=new Promise((ne,$)=>setTimeout(()=>$(new Error("timeout")),P));try{return await Promise.race([f,j])}catch(ne){console.warn(`[timeout] ${v||"task"} failed:`,ne.message)}}const k=new Map;function y(){return k.clear(),!0}function I(f,P){if(!f||typeof P!="function")return Promise.reject(new Error("bad dedupe args"));if(k.has(f))return k.get(f);const v=Promise.resolve().then(P).finally(()=>{k.delete(f)});return k.set(f,v),v}let M=0;function u(){return M=0,!0}function l(){return M}async function g(f){M++;try{return await f()}finally{M--}}function E(f,P){if(!f)return"请求失败";if(f&&typeof f=="object"&&f.detail)return String(f.detail);if(typeof f=="string"&&f)return f;if(f&&f.message){const v=String(f.message);return/Failed to fetch|fetch failed|networkerror/i.test(v)?"网络连接失败，请检查网络后重试":v}return P?"请求失败（HTTP "+P+"）":"请求失败"}function O(f,P){if(f===P)return!0;try{return JSON.stringify(f)===JSON.stringify(P)}catch{return!1}}function w(f,P,v){const j=(f||"GET").toUpperCase();let ne="";if(v)try{const $={};Object.keys(v).sort().forEach(L=>{$[L]=v[L]}),ne=JSON.stringify($)}catch{ne=""}return j+"|"+P+"|"+ne}class D{constructor(){this._map=new Map,this._exp=new Map}get(P){const v=this._exp.get(P);if(v!=null){if(Date.now()>v){this.delete(P);return}return this._map.get(P)}}set(P,v,j){return this._map.set(P,v),this._exp.set(P,Date.now()+(j>0?j:-1)),v}delete(P){this._map.delete(P),this._exp.delete(P)}clear(){this._map.clear(),this._exp.clear()}has(P){return this.get(P)!==void 0}get size(){return this._map.size}}function T(f){const P=new D,v=f!=null&&f>0?f:15e3;return{store:P,defaultTtl:v,get:j=>P.get(j),set:(j,ne,$)=>P.set(j,ne,$??v),delete:j=>P.delete(j),clear:()=>P.clear(),size:()=>P.size}}const B=new Set;async function F(f){const P=f&&f.cache,v=f&&f.key,j=f&&(f.fetchFn||f.fetcher),ne=f&&f.ttl;if(!P||!v||typeof j!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(B.has(v))return{ok:!1,changed:!1,skipped:!0,fresh:null};B.add(v);try{const $=P.get(v);let L;try{L=await j()}catch(oe){return f.onError&&f.onError(oe),{ok:!1,changed:!1,fresh:null}}const Q=$!==void 0&&!O($,L);return P.set(v,L,ne),f.apply&&f.apply(L,$),$!==void 0&&(Q?f.onChanged&&f.onChanged(L,$):f.onUnchanged&&f.onUnchanged(L,$)),{ok:!0,changed:Q,fresh:L}}finally{B.delete(v)}}const U=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function J(f,P={}){if(f==null)return"";const v=P&&P.allow||U,j=new Set(v.map(Q=>String(Q).toUpperCase()));let ne;try{ne=new DOMParser().parseFromString(String(f),"text/html")}catch{return String(f).replace(/[<>&]/g,oe=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[oe])}const $=ne.body||ne;function L(Q){Array.from(Q.childNodes).forEach(oe=>{if(oe.nodeType===1){const fe=String(oe.tagName).toUpperCase();if(j.has(fe))Array.from(oe.attributes).forEach(Ce=>{const Y=Ce.name.toLowerCase(),de=(Ce.value||"").trim().toLowerCase();(Y.startsWith("on")||(Y==="href"||Y==="src"||Y==="xlink:href")&&de.startsWith("javascript:")||Y==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(de))&&oe.removeAttribute(Ce.name),Y==="href"&&!/^(https?:|mailto:|#|\/)/.test(de)&&oe.removeAttribute("href")}),fe==="A"&&oe.setAttribute("rel","noopener noreferrer"),L(oe);else{const Ce=oe.parentNode;for(;oe.firstChild;)Ce.insertBefore(oe.firstChild,oe);Ce.removeChild(oe)}}else if(oe.nodeType!==3){if(oe.nodeType===8)oe.parentNode&&oe.parentNode.removeChild(oe);else if(oe.nodeType===4){const fe=ne.createTextNode(oe.nodeValue||"");oe.parentNode&&oe.parentNode.replaceChild(fe,oe)}}})}return L($),$.innerHTML}const ee="/api/openapi",H="/api/market/ws/quotes",Z=1,z=2.5,s="数据不可达",S="实时不可用，不刷新";function i(){const f=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",P=typeof location<"u"?location.host:"localhost:8001";return f+"//"+P+H}function h(f,P){if(!f)return null;const v=P||{riseSpeed:Z,volumeRatio:z},j=v.riseSpeed!=null?v.riseSpeed:Z,ne=v.volumeRatio!=null?v.volumeRatio:z,$=parseFloat(f.rise_speed);if(!isNaN($)&&Math.abs($)>j)return $>0?"涨速预警":"跌速预警";const L=parseFloat(f.volume_ratio);return!isNaN(L)&&L>ne?"放量预警":null}function X(f){const P=Number(f);return f==null||isNaN(P)?null:P}const C={apiFetch:r,withAuthHeaders:x,getToday:n,formatDate:p,withTimeout:_,showToast:o,debounce:q,throttle:b,resetInFlight:y,dedupeRequest:I,resetLoading:u,loadingCount:l,withLoading:g,formatApiError:E,jsonEquals:O,makeCacheKey:w,CacheStore:D,createTtlCache:T,silentRefresh:F,sanitizeHtml:J,OPENAPI_ROUTE_BASE:ee,REALTIME_WS_PATH:H,WARN_RISE_SPEED_THRESHOLD:Z,WARN_VOLUME_RATIO_THRESHOLD:z,REALTIME_DEGRADED_TEXT:s,REALTIME_FALLBACK_TEXT:S,buildRealtimeWsUrl:i,checkQuoteWarning:h,quoteFmt:{price:function(f){const P=X(f);return P===null?"--":P.toFixed(2)},pct:function(f){const P=X(f);return P===null?"--":(P>0?"+":"")+P.toFixed(2)+"%"},num:function(f){const P=X(f);return P===null?"--":P.toFixed(2)},color:function(f){const P=f?f.change_pct:null,v=X(P);return v===null?"":v>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=C),typeof Me<"u"&&Me.exports&&(Me.exports=C)})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantTabsCore=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(q,b){return q+"/"+b}function m(q,b,_,k){var y=q[b]||[],I=y.findIndex(function(l){return l.subPage===_});if(I!==-1)return{groups:q,activeKey:e(b,_)};var M=y.concat([{subPage:_,title:k}]);M.length>a&&(M=c(M));var u=Object.assign({},q,t({},b,M));return{groups:u,activeKey:e(b,_)}}function t(q,b,_){return q[b]=_,q}function c(q){if(q.length<=a)return q;var b=q.length>1?1:0;return q.filter(function(_,k){return k!==b})}function d(q,b,_,k){var y=q[b]||[],I=y.findIndex(function(g){return g.subPage===_});if(I===-1)return{groups:q,nextActive:null};var M=y.filter(function(g){return g.subPage!==_}),u=Object.assign({},q,t({},b,M)),l=null;return _===k&&(M[I]?l=M[I].subPage:M[I-1]?l=M[I-1].subPage:l=null),{groups:u,nextActive:l}}function x(q){return q&&q.length?q[0]:""}function r(q,b){return q[b]||[]}function n(q,b,_){var k=q[b]||[],y=k.filter(function(M){return M.subPage===_}),I=Object.assign({},q,t({},b,y));return{groups:I,activeKey:y.length?e(b,y[0].subPage):null}}function p(q,b){var _=Object.assign({},q,t({},b,[]));return{groups:_,activeKey:null}}function o(q,b,_,k){var y=(q[b]||[]).slice();if(_<0||_>=y.length)return{groups:q};var I=y.splice(_,1)[0];return y.splice(Math.max(0,Math.min(k,y.length)),0,I),{groups:Object.assign({},q,t({},b,y))}}return{MAX_TABS:a,openTab:m,closeTab:d,getDefaultTab:x,tabsOf:r,evictOldest:c,closeOthers:n,closeAll:p,reorder:o,keyOf:e}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var _n=typeof Me=="object"&&Me.exports?Me.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;_n&&(window.__quantModules.tabsCore=_n)}(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantNavModeCore=e()})(typeof self<"u"?self:void 0,function(){var a=["subnav","tree","toptab"],e="toptab",m="nav_mode";function t(o){return a.indexOf(o)!==-1?o:e}function c(o){return t(o)==="subnav"}function d(o){return t(o)==="tree"}function x(o){return t(o)==="toptab"}function r(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function n(){var o=r(),q=e;if(o)try{q=t(o.getItem(m))}catch{}return{navMode:q}}function p(o){var q=r();if(!(!q||!o))try{o.navMode!==void 0&&q.setItem(m,t(o.navMode))}catch{}}return{NAV_MODES:a,DEFAULT_NAV_MODE:e,normalizeNavMode:t,subnavVisible:c,treeChildrenVisible:d,topTabsVisible:x,readPrefs:n,writePrefs:p}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var xn=typeof Me=="object"&&Me.exports?Me.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;xn&&(window.__quantModules.navModeCore=xn)}(function(){function e(i,h){if(!Array.isArray(i)||i.length<=h)return i;const X=[],N=i.length/h*2;for(let C=0;C<i.length;C+=N){const f=Math.floor(C),P=Math.min(i.length,Math.ceil(C+N));let v=1/0,j=-1,ne=-1/0,$=-1;for(let L=f;L<P;L++){const Q=i[L];if(!Q)continue;const oe=Q[3]!=null?Number(Q[3]):1/0,fe=Q[4]!=null?Number(Q[4]):-1/0;oe<v&&(v=oe,j=L),fe>ne&&(ne=fe,$=L)}j>=0&&X.push(i[j]),$>=0&&$!==j&&X.push(i[$])}return X}let m=null;function t(){return typeof echarts<"u"?Promise.resolve():(m||(m=new Promise(function(i,h){const X=document.createElement("script");X.src="/static/lib/echarts.min.js",X.async=!0,X.onload=function(){typeof echarts<"u"?i():h(new Error("echarts 加载后未定义"))},X.onerror=function(){h(new Error("echarts.min.js 加载失败"))},document.head.appendChild(X)})),m)}function c(){const i=getComputedStyle(document.documentElement);return{primary:i.getPropertyValue("--primary-color").trim()||"#2563eb",up:i.getPropertyValue("--color-up").trim()||"#43e97b",down:i.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:i.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:i.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const d=i=>{try{return typeof getComputedStyle!="function"||typeof document>"u"?"":(getComputedStyle(document.documentElement).getPropertyValue(i)||"").trim()}catch{return""}};function x(){return{up:d("--color-up")||"#E63946",down:d("--color-down")||"#2E7D32",neutral:d("--color-neutral")||"#43a047",accent:d("--color-accent")||"#F59E0B",risk:d("--color-danger")||"#C62828",warn:d("--color-warning")||"#FF9800",success:d("--color-success")||"#4CAF50",primary:d("--qc-primary-600")||"#b8922a",grid:d("--chart-split")||"#e2e8f0",axis:d("--chart-axis")||"#cbd5e1",bg:d("--chart-bg")||"transparent",series:[d("--qc-primary-600")||"#b8922a",d("--qc-primary-500")||"#c49b2e",d("--qc-primary-700")||"#8f6f1f",d("--qc-primary-400")||"#d4b352",d("--color-up")||"#E63946",d("--color-down")||"#2E7D32",d("--color-accent")||"#F59E0B",d("--qc-neutral-400")||"#b8ae9f"]}}function r(i,h,X,N=!1,C=!1){if(!h||h.length===0)return;h.length>2e3&&(h=e(h,2e3));const f=h.map(ae=>typeof ae[0]=="string"&&ae[0].indexOf("-")>=0?ae[0]:ae[0].slice(0,4)+"-"+ae[0].slice(4,6)+"-"+ae[0].slice(6,8)),P=c(),v={ma5:d("--color-accent")||"#F59E0B",ma10:d("--color-primary")||"#3B82F6",ma20:d("--color-warning")||"#8B5CF6",ma60:d("--color-success")||"#10B981"},j=h.map(ae=>[ae[1],ae[2],ae[3],ae[4]]),ne=h.map(ae=>ae[5]),$=h.map(ae=>ae[6]),L=h.map(ae=>ae[7]),Q=h.map(ae=>ae[8]),oe=h.map(ae=>ae[9]),fe=h.map(ae=>ae[10]),Y=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",de=P.borderLight,De={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:P.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:Y,borderColor:de,textStyle:{color:P.textSecondary,fontSize:12},formatter:function(ae){if(!ae||!ae.length)return"";const ye=ae[0].dataIndex,Te=h[ye];if(!Te)return"";const ue=i.getOption(),be=ue.legend&&ue.legend[0]&&ue.legend[0].selected||{},ke=Le=>be[Le]!==!1,re=Le=>Le==null||isNaN(Le)?"--":Number(Le).toFixed(2),te=Le=>Le==null||isNaN(Le)?"--":(Number(Le)/1e4).toFixed(2)+"万手",ve=['<div style="font-weight:600;color:'+P.textSecondary+';">'+f[ye]+"</div>"];return ve.push("开: "+re(Te[1])+"　收: "+re(Te[2])),ve.push("低: "+re(Te[3])+"　高: "+re(Te[4])),ve.push("成交量: "+te(Te[5])),Te[6]!=null&&ke("MA5")&&ve.push("MA5: "+re(Te[6])),Te[7]!=null&&ke("MA10")&&ve.push("MA10: "+re(Te[7])),Te[8]!=null&&ke("MA20")&&ve.push("MA20: "+re(Te[8])),Te[9]!=null&&ke("MA60")&&ve.push("MA60: "+re(Te[9])),Te[10]!=null&&ve.push("VOL_MA5: "+te(Te[10])),ve.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:C?0:8,textStyle:{color:P.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:C?30:40,height:C?"48%":"52%"},{left:56,right:16,top:C?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:f,boundaryGap:!0,axisLine:{lineStyle:{color:de}},axisLabel:{color:P.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:f,axisLabel:{show:!1},axisLine:{lineStyle:{color:de}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:de}},axisLabel:{color:P.textSecondary,fontSize:11,formatter:function(ae){const ye=Math.round(ae*100)/100;return ye%1===0?String(Math.round(ye)):ye.toFixed(2)}},splitLine:{lineStyle:{color:de,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:de}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,h.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:de,textStyle:{color:P.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:j,itemStyle:{color:P.up,color0:P.down,borderColor:P.up,borderColor0:P.down}},{name:"MA5",type:"line",data:$,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:v.ma5}},{name:"MA10",type:"line",data:L,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:v.ma10}},{name:"MA20",type:"line",data:Q,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:v.ma20}},{name:"MA60",type:"line",data:oe,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:v.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:ne,itemStyle:{color:function(ae){const ye=ae.dataIndex;return h[ye][1]>=h[ye][2]?P.up:P.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:fe,smooth:!0,symbol:"none",lineStyle:{width:1,color:v.ma5,type:"dashed"}}]};i.setOption(De,!0)}const n=new Map;function p(i){return n.has(i)||n.set(i,{chart:null,cache:null}),n.get(i)}async function o(i,h,X,N=!1,C={}){await t();const f=p(i);let P=document.getElementById(i);if(!P)for(let v=0;v<16&&(await new Promise(j=>setTimeout(j,50)),P=document.getElementById(i),!P);v++);if(!P)throw new Error("无法找到图表容器: "+i);if(P.offsetWidth<50&&(P.style.minWidth="600px",P.style.minHeight="300px"),!f.chart||f.chart.isDisposed()||f.chart.getDom()!==P){if(f.chart)try{f.chart.dispose()}catch{}f.chart=echarts.init(P),f.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const v=C.onLegend;typeof v=="function"&&f.chart.on("legendselectchanged",j=>{j&&j.selected&&v(j.selected)})}return r(f.chart,h,X,N,!!C.isMobile),f.cache={data:h,period:X,isIndex:N,isMobile:!!C.isMobile},f.chart}function q(i){const h=n.get(i);h&&h.chart&&(h.chart.dispose(),h.chart=null,h.cache=null)}function b(i){const h=n.get(i);h&&h.chart&&h.chart.resize()}function _(i,h){const X=n.get(i),N=X&&X.chart;if(N)if(h<=0)N.dispatchAction({type:"dataZoom",start:0,end:100});else{const P=Math.max(0,(60-h)/60*100);N.dispatchAction({type:"dataZoom",start:Math.round(P),end:100})}}function k(i){var N,C,f;const h=n.get(i);if(!h||!h.chart||!h.cache||h.chart.isDisposed())return;const X=((f=(C=(N=h.chart.getOption())==null?void 0:N.legend)==null?void 0:C[0])==null?void 0:f.selected)||null;r(h.chart,h.cache.data,h.cache.period,h.cache.isIndex,h.cache.isMobile),X&&h.chart.setOption({legend:{selected:X}})}function y(i){const h=n.get(i);return h&&h.chart}const I=new Map;function M(i){return I.has(i)||I.set(i,{chart:null,cache:null}),I.get(i)}function u(i,h,X={}){return t().then(function(){const N=M(i),C=document.getElementById(i);if(!C)throw new Error("无法找到图表容器: "+i);if(C.offsetWidth<50&&(C.style.minWidth="600px",C.style.minHeight="300px"),N.chart&&N.chart.getDom&&N.chart.getDom()!==C){try{N.chart.dispose()}catch{}N.chart=null}N.chart||(N.chart=echarts.init(C),N.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),N.resizeBound||(N.resizeBound=!0,window.addEventListener("resize",function(){N.chart&&!N.chart.isDisposed()&&N.chart.resize()})));const f=typeof h=="function"?h():h;return N.chart.setOption(f,!0),N.cache={buildOption:h,key:X.key||""},N.chart})}function l(i){var C,f,P;const h=I.get(i);if(!h||!h.chart||!h.cache||h.chart.isDisposed())return;const X=((P=(f=(C=h.chart.getOption())==null?void 0:C.legend)==null?void 0:f[0])==null?void 0:P.selected)||null,N=typeof h.cache.buildOption=="function"?h.cache.buildOption():h.cache.buildOption;h.chart.setOption(N,!0),X&&N&&N.legend&&N.legend.selected&&h.chart.setOption({legend:{selected:X}})}function g(i){const h=I.get(i);h&&h.chart&&(h.chart.dispose(),h.chart=null,h.cache=null)}function E(i){const h=I.get(i);h&&h.chart&&h.chart.resize()}const O=new Map;function w(i){return O.has(i)||O.set(i,{chart:null,cache:null}),O.get(i)}function D(i,h,X={}){return t().then(function(){const N=w(i),C=document.getElementById(i);if(!C)return null;if(C.offsetWidth<50&&(C.style.minWidth="600px",C.style.minHeight="300px"),N.chart&&N.chart.getDom&&N.chart.getDom()!==C){try{N.chart.dispose()}catch{}N.chart=null}N.chart||(N.chart=echarts.init(C),N.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),N.resizeBound||(N.resizeBound=!0,window.addEventListener("resize",function(){N.chart&&!N.chart.isDisposed()&&N.chart.resize()})));const f=typeof h=="function"?h():h;return N.chart.setOption(f,!0),N.cache={buildOption:h,key:X.key||""},N.chart})}function T(i){const h=O.get(i);if(!h||!h.chart||!h.cache||h.chart.isDisposed())return;const X=typeof h.cache.buildOption=="function"?h.cache.buildOption():h.cache.buildOption;h.chart.setOption(X,!0)}function B(i){const h=O.get(i);h&&h.chart&&(h.chart.dispose(),h.chart=null,h.cache=null)}function F(i){const h=O.get(i);h&&h.chart&&h.chart.resize()}const U=D,J=T,ee=B,H=F;function Z(i,h,X,N){N=N||{};const C=N.drawdownColor||d("--state-danger-solid")||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[N.navLabel||"净值",N.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:X||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:N.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:N.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:N.navLabel||"净值",type:"line",data:i||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:N.ddLabel||"回撤",type:"line",yAxisIndex:1,data:h||[],showSymbol:!1,areaStyle:{opacity:.25,color:C},lineStyle:{color:C,type:"solid",width:1.5}}]}}function z(i,h){h=h||{};const X=h.bandColor||d("--state-info-solid")||"#1976d2",N=i&&i.dates||[],C=i&&i.median||[],f=i&&i.q25||[],P=i&&i.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[h.medianLabel||"中位IC",h.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:N,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:h.medianLabel||"中位IC",type:"line",data:C,showSymbol:!1,lineStyle:{width:2,color:X}},{name:h.bandLabel||"25–75分位",type:"line",data:f,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:X,opacity:.12}},{name:"_bandH",type:"line",data:P.map(function(v,j){return v-(f[j]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:X,opacity:.12}}]}}function s(i,h){h=h||{};const X=h.color||d("--color-ai")||"#7c3aed",N=i&&i.dates||[],C=i&&i.value||[],f=i&&i.upper||[],P=i&&i.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[h.valueLabel||"情绪",h.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:N,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:h.valueLabel||"情绪",type:"line",data:C,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:X}},{name:h.bandLabel||"过热/冰点带",type:"line",data:f,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:X,opacity:.1}},{name:"_bandL",type:"line",data:P.map(function(v,j){return(f[j]||0)-v}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:X,opacity:.1}}]}}const S={renderKlineChart:r,renderKlineTo:o,disposeKline:q,resizeKline:b,zoomKline:_,redrawKline:k,getKlineChart:y,renderBacktestTo:u,redrawBacktest:l,disposeBacktest:g,resizeBacktest:E,renderPortfolioTo:D,redrawPortfolio:T,disposePortfolio:B,resizePortfolio:F,renderSimpleChartTo:U,redrawSimpleChart:J,disposeSimpleChart:ee,resizeSimpleChart:H,buildNavDrawdownOption:Z,buildIcBandOption:z,buildSentimentBandOption:s,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:x,init(){return{renderKlineChart:r,renderKlineTo:o,disposeKline:q,resizeKline:b,zoomKline:_,redrawKline:k,getKlineChart:y,renderBacktestTo:u,redrawBacktest:l,disposeBacktest:g,resizeBacktest:E,renderPortfolioTo:D,redrawPortfolio:T,disposePortfolio:B,resizePortfolio:F,renderSimpleChartTo:U,redrawSimpleChart:J,disposeSimpleChart:ee,resizeSimpleChart:H,buildNavDrawdownOption:Z,buildIcBandOption:z,buildSentimentBandOption:s,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:x}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=S),typeof Me<"u"&&Me.exports&&(Me.exports={downsampleSeries:e,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:Z,buildIcBandOption:z,buildSentimentBandOption:s})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:e,computed:m}=Vue,{configChanged:t,consensus:c}=a,d=e(null),x=e(""),r=e(null),n=e([]),p=e([]),o=e([]),q=e([]),b=e([]),_=e([]),k=e({});function y(_e){const qe=b.value.indexOf(_e);qe>=0?b.value.splice(qe,1):b.value.push(_e)}const I=e("date"),M=e([]),u=e(!1),l=e(!1),g=e("watchlist"),E=e([]),O=e({vendors:[]}),w=e(""),D=e(!1),T=e(!1);function B(_e){if(!_e)return"";const qe=String(_e),Oe=qe.length;if(Oe<=4)return qe[0]+"*".repeat(Oe-1);const Ie=Oe<=8?2:4;return qe.slice(0,Ie)+"*".repeat(Oe-Ie-Ie)+qe.slice(-Ie)}async function F(_e){let qe;try{qe=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ie=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:qe,target:_e})})).json();if(Ie.success)return Ie.secret;ElementPlus.ElMessage.error(Ie.message||"查看失败")}catch(Oe){ElementPlus.ElMessage.error("查看失败: "+Oe.message)}return null}async function U(_e){if(_e._revealed){_e._revealed=!1,_e._masked=B(_e.api_key);return}const qe=await F("ai:"+_e.vendor_key);qe!==null&&(_e.api_key=qe,_e._revealed=!0)}async function J(_e){if(_e._editing){_e._editing=!1,_e._revealed=!1,_e.api_key&&(_e._masked=B(_e.api_key));return}_e._editing=!0;try{const Oe=await(await fetch("/api/ai/models?full=1")).json();if(Oe.success){const Ie=(Oe.data.vendors||[]).find(Ye=>Ye.vendor_key===_e.vendor_key);Ie&&(_e.api_key=Ie.api_key||"")}else Oe.message&&ElementPlus.ElMessage.error(String(Oe.message))}catch(qe){ElementPlus.ElMessage.error("解锁失败: "+qe.message)}}function ee(_e){const{_fetching:qe,_testing:Oe,_revealed:Ie,_masked:Ye,_editing:Qe,...We}=_e;return Qe||(We.api_key=""),We.models=(_e.models||[]).map(ot=>{const{_testing:gt,testResult:Dt,...Kt}=ot;return Kt}),We}async function H(){var _e;try{w.value="";const qe=await fetch("/api/ai/models");if(qe.status===401){w.value="请先登录后再查看模型配置";return}if(!qe.ok){w.value=`服务器错误 (${qe.status})`;return}const Oe=await qe.json();Oe.success?(E.value=(((_e=Oe.data)==null?void 0:_e.vendors)||[]).map(Ie=>({...Ie,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:Ie.api_key||"",models:(Ie.models||[]).map(Ye=>({...Ye,_testing:!1,testResult:void 0}))})),w.value=""):w.value=Oe.message||"加载失败"}catch(qe){w.value="网络错误: "+qe.message}}async function Z(){try{const qe=await(await fetch("/api/ai/catalog")).json();qe.success&&qe.data&&(O.value=qe.data)}catch(_e){console.warn("AI 厂商目录加载失败",_e)}}async function z(){T.value=!0;try{const Oe=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:E.value.map(ee)})})).json();Oe.success?(E.value.forEach(Ie=>{Ie._editing=!1,Ie._revealed=!1,Ie.api_key&&(Ie._masked=B(Ie.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(Oe.message||"保存失败")}catch(_e){ElementPlus.ElMessage.error("保存失败: "+_e.message)}T.value=!1}async function s(_e,qe){qe._testing=!0;try{const Ie=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:_e.vendor_key,model:qe.name,base_url:_e.base_url,api_key:_e.api_key,timeout:_e.timeout})});qe.testResult=await Ie.json()}catch(Oe){qe.testResult={success:!1,message:Oe.message}}qe._testing=!1}async function S(){D.value=!0;for(const _e of E.value)for(const qe of _e.models||[])_e.api_key?await s(_e,qe):qe.testResult={success:!1,message:"未配置 API Key"};D.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function i(_e){_e._fetching=!0;try{const Ie=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:_e.vendor_key,base_url:_e.base_url,api_key:_e.api_key,timeout:_e.timeout})})).json();if(Ie.success&&Array.isArray(Ie.models)){const Ye=new Set((_e.models||[]).map(Qe=>Qe.name));for(const Qe of Ie.models)Ye.has(Qe)||_e.models.push({name:Qe,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${Ie.models.length} 个模型`)}else ElementPlus.ElMessage.error(Ie.message||"获取模型列表失败")}catch(qe){ElementPlus.ElMessage.error("获取模型列表失败: "+qe.message)}_e._fetching=!1}function h(_e){const qe=(O.value.vendors||[]).find(Oe=>Oe.vendor_key===_e);if(qe){if(E.value.some(Oe=>Oe.vendor_key===_e)){ElementPlus.ElMessage.warning("该厂商已存在");return}E.value.push({vendor_key:qe.vendor_key,name:qe.name,kind:qe.kind,base_url:qe.base_url,api_key:"",timeout:60,tier:qe.tier||"",website:qe.website||"",locked:!!qe.locked,models:(qe.models||[]).map(Oe=>({name:Oe,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${qe.name}」，配置 API Key 后保存生效`)}}function X(){E.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function N(_e){_e.models||(_e.models=[]),_e.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function C(_e,qe){const Oe=_e.models[qe];if(!(!Oe||Oe.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(Oe.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}_e.models.splice(qe,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function f(_e){if(_e.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(_e.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const qe=E.value.indexOf(_e);qe>=0&&E.value.splice(qe,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const P=e({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),v=e(!1),j=e(""),ne=e(0),$=e(""),L=e(!1),Q=e(""),oe=e(!1),fe=e(0),Ce=e(0),Y=e(""),de=e({}),De=e({}),ae=e({}),ye=e({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),Te=e("manual"),ue=m(()=>{const _e={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return _e[ye.value.provider]||_e.custom}),be={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function ke(_e){if(_e==="manual")return;const qe=be[_e];qe&&(ye.value.endpoint=qe.endpoint,ye.value.model=qe.model,t.value=!0)}function re(){if(t.value=!0,ye.value.provider!=="codingplan"&&ye.value.provider!=="custom"){const _e=ue.value;_e&&(ye.value.endpoint=_e.endpoint,ye.value.model=_e.model)}else ye.value.provider==="codingplan"&&(ye.value.endpoint||(ye.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),ye.value.model||(ye.value.model="ark-code-latest"))}let te=null;const ve=8;async function Le(){te&&(te.abort(),te=null);const qe=(c.value||[]).filter(We=>We.status==="new"||We.status==="out").filter(We=>!k.value[We.code]);if(qe.length===0)return;const Oe=new AbortController;te=Oe;let Ie=0;const Ye=async()=>{for(;Ie<qe.length;){const We=qe[Ie++];try{const gt=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:We.code,stock_name:We.name,event_type:We.status==="new"?"enter":"exit"}),signal:Oe.signal})).json();gt.success&&gt.signal&&(k.value={...k.value,[We.code]:gt.signal})}catch(ot){if(ot.name==="AbortError")return}}},Qe=Array.from({length:Math.min(ve,qe.length)},()=>Ye());await Promise.all(Qe)}function Fe(){te&&(te.abort(),te=null)}let He=0;async function Mt(_e){const qe=++He;try{const Ie=await(await fetch(`/api/ai/history/last/${encodeURIComponent(_e)}`)).json();if(qe!==He)return;Ie.success&&Ie.data&&(d.value=Ie.data,x.value=Ie.data.evaluate_time,mt(_e,Ie.data),Pt(Ie.data))}catch{}}async function mt(_e,qe){var Oe,Ie;try{const Qe=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(_e)}&limit=2`)).json();if(Qe.success&&Qe.data&&Qe.data.length>=2){const We=Qe.data[1],ot=((Oe=qe.result)==null?void 0:Oe.total_score)||0,gt=((Ie=We.result)==null?void 0:Ie.total_score)||0;ot>0&&gt>0&&(r.value={prevScore:gt,currScore:ot,diff:ot-gt})}}catch(Ye){console.warn("[refreshStrategyData] autoPoll failed:",Ye)}}function Pt(_e){var Ye;const qe=((Ye=_e.result)==null?void 0:Ye.dimensions)||{},Oe=[],Ie=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Qe of Ie){const We=qe[Qe.key];We!==void 0&&Oe.push({icon:We>=Qe.good?"check-circle-2":We>=Qe.warn?"alert-triangle":"x-circle",label:`${Qe.label} ${Math.round(We)}分`})}n.value=Oe}return{aiResult:d,lastEvalTime:x,evalHistoryComparison:r,checklistItems:n,aiHistory:p,selectedHistoryIds:o,expandedDates:q,expandedMonths:b,expandedStocks:_,poolSignals:k,toggleMonthExpand:y,aiHistoryView:I,selectedWatchlistCodes:M,showAutoEvaluateSettings:u,savingConfig:l,autoEvaluateScope:g,aiVendors:E,aiCatalog:O,aiModelsError:w,testingAllModels:D,savingAiModels:T,loadAiVendors:H,loadAiCatalog:Z,saveAiVendors:z,saveAiModels:z,testVendorModel:s,testAllVendorModels:S,fetchVendorModels:i,addVendorFromCatalog:h,addCustomVendor:X,addVendorModel:N,removeVendorModel:C,removeVendor:f,toggleVendorKeyReveal:U,toggleVendorEdit:J,autoEvaluateConfig:P,aiLoading:v,aiEvalStage:j,aiEvalElapsed:ne,aiEvalError:$,showBatchEvaluate:L,batchStocks:Q,batchRunning:oe,batchTotal:fe,batchCompleted:Ce,batchCurrent:Y,batchStatuses:de,batchResults:De,batchEvalErrors:ae,aiConfig:ye,selectedPreset:Te,providerInfo:ue,aiPresets:be,applyPreset:ke,onProviderChange:re,fetchPoolSignals:Le,cancelPoolSignals:Fe,loadLastEvaluation:Mt}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:e,computed:m,watch:t}=Vue,{configChanged:c,aiConfig:d,aiLoading:x,feishuConfig:r,currentTheme:n,changeTheme:p,autoEvaluateConfig:o,currentUser:q,strategyFilter:b,applyTheme:_,dashboardData:k,lastRefreshTime:y,saveAiModels:I}=a,M=function(re){const te=window.__quantModules&&window.__quantModules.themes;return te&&te.applyLegacyTheme?te.applyLegacyTheme(re):_(re)},u=e(!1),l=e(!1),g=e(null),E=e(null),O=e(null),w=e(null),D=e({token:"",endpoint:"http://api.tushare.pro",timeout:30}),T=e("disconnected"),B=e({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),F=e({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),U=e(!1),J=e(null),ee=e(null),H=e("pending"),Z=e("..."),z=e(!1),s=e({api_limit:600}),S=e(!1),i=e(!1);async function h(){try{const te=await(await fetch("/api/system/rate-limit")).json();te.success&&(s.value=te.data)}catch(re){console.warn("loadRateLimit failed:",re)}}async function X(){i.value=!0;try{const te=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.value)})).json();te.success?(S.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(te.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{i.value=!1}}t(()=>[d.value.provider,d.value.apiKey,d.value.endpoint,d.value.model],()=>{c.value=!0},{deep:!0});async function N(){u.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(d.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d.value)})).json()).success?(c.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(re){localStorage.setItem("quant_ai_config",JSON.stringify(d.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",re)}finally{u.value=!1}}async function C(){x.value=!0;try{const te=await(await fetch("/api/ai/test")).json();te.success?ElementPlus.ElMessage.success(te.message||"API连接正常"):ElementPlus.ElMessage.error(te.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{x.value=!1}}function f(){const re={ai:d.value,feishu:r.value,theme:n.value,export_time:new Date().toISOString()},te=new Blob([JSON.stringify(re,null,2)],{type:"application/json"}),ve=URL.createObjectURL(te),Le=document.createElement("a");Le.href=ve,Le.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Le.click(),URL.revokeObjectURL(ve),ElementPlus.ElMessage.success("配置已导出")}function P(re){const te=re.target.files[0];if(!te)return;const ve=new FileReader;ve.onload=async Le=>{try{const Fe=JSON.parse(Le.target.result);Fe.ai&&(d.value={...d.value,...Fe.ai},await N()),Fe.feishu&&(Object.assign(r.value,Fe.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Fe.feishu)})),Fe.theme&&(n.value=Fe.theme,p(Fe.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},ve.readAsText(te),re.target.value=""}async function v(){u.value=!0;const re=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:D.value,feishu:r.value,ai:d.value,rate_limit:s.value,auto_evaluate:o.value,theme:n.value}})}).then(Fe=>["userConfig",Fe.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(D.value)}).then(Fe=>["tushare",Fe.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:B.value})}).then(Fe=>["datasource",Fe.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r.value)}).then(Fe=>["feishu",Fe.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d.value)}).then(Fe=>["ai",Fe.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.value)}).then(Fe=>["rateLimit",Fe.ok]),I().then(()=>["aiModels",!0],()=>["aiModels",!1])],te=await Promise.allSettled(re),ve=te.filter(Fe=>Fe.status==="fulfilled"&&Fe.value[1]).length,Le=te.filter(Fe=>Fe.status==="rejected"||Fe.status==="fulfilled"&&!Fe.value[1]).length;S.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(b.value.selected)),localStorage.setItem("quant_strategy_filter_mode",b.value.mode),q.value&&fetch(`/api/users/${q.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:n.value})}).catch(()=>{}),l.value=!1,g.value=new Date().toLocaleString("zh-CN"),u.value=!1,Le>0&&console.error(`[saveAllConfig] ${ve}/${ve+Le} 项保存成功，${Le} 项失败`)}async function j(){try{const te=await(await fetch("/api/user_config/config")).json();if(te.success&&te.config){const ve=te.config;ve.tushare&&(D.value={...D.value,...ve.tushare}),ve.feishu&&(r.value={...r.value,...ve.feishu}),ve.ai&&(d.value={...d.value,...ve.ai}),ve.rate_limit&&(s.value={...s.value,...ve.rate_limit}),ve.auto_evaluate&&(o.value={...o.value,...ve.auto_evaluate}),ve.theme&&!localStorage.getItem("quant_theme")&&M(ve.theme)}l.value=!1,S.value=!1}catch(re){console.error("[resetAllConfig] 重新加载配置失败:",re),l.value=!1}}async function ne(){T.value="testing";try{const te=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(T.value=te.success?"connected":"disconnected",te.success){const ve=te.data_count?` (获取到 ${te.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+ve)}else ElementPlus.ElMessage.error(te.message||"连接失败")}catch{T.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function $(){try{const te=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();T.value=te.success?"connected":"disconnected"}catch{T.value="disconnected"}}async function L(){var re;U.value=!0;try{const ve=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ve.success?(J.value=parseInt(((re=ve.message.match(/\d+/))==null?void 0:re[0])||"0"),ElementPlus.ElMessage.success(ve.message)):ElementPlus.ElMessage.error(ve.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{U.value=!1}}async function Q(){try{const te=await(await fetch("/api/market/tushare/config")).json();te.success&&te.config&&(D.value={...D.value,...te.config})}catch(re){console.warn("loadTushareConfig failed:",re)}}function oe(re){if(!re)return"";const te=String(re),ve=te.length;if(ve<=4)return te[0]+"*".repeat(ve-1);const Le=ve<=8?2:4;return te.slice(0,Le)+"*".repeat(ve-Le-Le)+te.slice(-Le)}async function fe(re){let te;try{te=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Le=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:te,target:re})})).json();if(Le.success)return Le.secret;ElementPlus.ElMessage.error(Le.message||"查看失败")}catch(ve){ElementPlus.ElMessage.error("查看失败: "+ve.message)}return null}async function Ce(re){const te=B.value[re];if(!te)return;if(te._revealed){te._revealed=!1,te._masked=oe(te.token);return}const ve=await fe(re);ve!==null&&(te.token=ve,te._revealed=!0)}async function Y(re){const te=B.value[re];if(te){if(te._editing){te._editing=!1,te._revealed=!1,te.token&&(te._masked=oe(te.token));return}te._editing=!0;try{const ve=await fe(re);if(ve===null){te._editing=!1;return}te.token=ve,te._revealed=!0}catch(ve){te._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+ve.message)}}}async function de(){try{const te=await(await fetch("/api/market/datasource/config")).json();if(te.success&&te.config&&te.config.sources){const ve=te.config.sources,Le=Fe=>{const He={...B.value[Fe],...ve[Fe]||{}};return He._editing=!1,He._revealed=!1,He._masked=He.token||"",He.token="",He};B.value={sxsc_tushare:Le("sxsc_tushare"),tushare:Le("tushare"),akshare:{...B.value.akshare,...ve.akshare||{}}}}try{const Le=await(await fetch("/api/market/datasource/status")).json();if(Le.success&&Le.status)for(const[Fe,He]of Object.entries(Le.status))F.value[Fe]=He.connected?"connected":"disconnected"}catch{}}catch(re){console.warn("loadDatasourceConfig failed:",re)}}async function De(){try{const re={};for(const[te,ve]of Object.entries(B.value)){const{_revealed:Le,_masked:Fe,_editing:He,...Mt}=ve;!He&&te!=="akshare"&&(Mt.token=""),re[te]=Mt}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:re})}),l.value=!0}catch(re){console.warn("saveDatasourceConfig failed:",re)}}async function ae(re){F.value[re]="testing";try{const te=B.value[re];te&&te._editing&&await De();const Le=await(await fetch(`/api/market/datasource/test/${re}`,{method:"POST"})).json();F.value[re]=Le.success?"connected":"disconnected",Le.success?ElementPlus.ElMessage.success(`${re} 连接成功`):ElementPlus.ElMessage.error(`${re}: ${Le.message}`)}catch{F.value[re]="disconnected",ElementPlus.ElMessage.error(`${re} 连接失败`)}}async function ye(){try{const te=await(await fetch("/api/feishu/config")).json();te&&typeof te=="object"&&(r.value={...r.value,...te},E.value=JSON.parse(JSON.stringify(r.value)))}catch(re){console.warn("loadFeishuConfig failed:",re)}}async function Te(){try{const te=await(await fetch("/api/ai/config")).json();if(te.success&&te.data)d.value={...d.value,...te.data};else{const ve=localStorage.getItem("quant_ai_config");ve&&(d.value=JSON.parse(ve))}}catch{const te=localStorage.getItem("quant_ai_config");te&&(d.value=JSON.parse(te))}}async function ue(){try{const te=await(await fetch("/api/user_config/config")).json();if(te.success&&te.config){const ve=te.config;ve.tushare&&(D.value={...D.value,...ve.tushare}),ve.datasource&&ve.datasource.sources&&(B.value={sxsc_tushare:{...B.value.sxsc_tushare,...ve.datasource.sources.sxsc_tushare||{}},tushare:{...B.value.tushare,...ve.datasource.sources.tushare||{}},akshare:{...B.value.akshare,...ve.datasource.sources.akshare||{}}}),ve.feishu&&(r.value={...r.value,...ve.feishu},E.value=JSON.parse(JSON.stringify(r.value))),ve.ai&&(d.value={...d.value,...ve.ai}),ve.rate_limit&&(s.value={...s.value,...ve.rate_limit}),ve.theme&&!localStorage.getItem("quant_theme")&&M(ve.theme),ve.auto_evaluate&&(o.value={...o.value,...ve.auto_evaluate})}}catch(re){console.warn("加载用户配置失败，使用本地缓存",re)}}async function be(){var re,te,ve,Le;try{const He=await(await fetch("/api/dashboard")).json(),Mt=He.success?He.data:He;J.value=((re=Mt==null?void 0:Mt.stats)==null?void 0:re.total_stocks_covered)||null;const Pt=await(await fetch("/api/dates")).json();ee.value=((te=Pt==null?void 0:Pt.data)==null?void 0:te.total)||((Le=(ve=Pt==null?void 0:Pt.data)==null?void 0:ve.dates)==null?void 0:Le.length)||null;const qe=await(await fetch("/api/ai/history")).json();H.value="ok"}catch{H.value="pending"}}async function ke(){try{const te=await(await fetch("/api/dashboard")).json();k.value=te.success?te.data:te,y.value=Date.now()}catch(re){console.error("加载总览数据失败",re)}}return{configSaving:u,configChanged:c,globalConfigDirty:l,lastSavedTime:g,feishuConfigOriginal:E,aiConfigOriginal:O,tushareConfigOriginal:w,tushareConfig:D,tushareStatus:T,datasourceConfig:B,datasourceStatus:F,syncingData:U,stockCount:J,tradeDateCount:ee,aiStatus:H,appVersion:Z,showImportDialog:z,rateLimitConfig:s,rateLimitDirty:S,rateLimitSaving:i,loadRateLimit:h,saveRateLimit:X,saveAiConfig:N,testAiApi:C,exportConfig:f,importConfig:P,saveAllConfig:v,resetAllConfig:j,testTushareConnection:ne,checkTushareConnection:$,syncStockData:L,loadTushareConfig:Q,loadDatasourceConfig:de,saveDatasourceConfig:De,testDatasource:ae,toggleDatasourceKeyReveal:Ce,toggleDatasourceEdit:Y,loadFeishuConfig:ye,loadAiConfig:Te,loadUserConfig:ue,loadSystemStatus:be,loadDashboardData:ke}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:e,computed:m}=Vue,{currentUser:t,applyTheme:c,allMenuDefs:d,loadGroupConfig:x}=a,r=function(ue){const be=window.__quantModules&&window.__quantModules.themes;return be&&be.applyLegacyTheme?be.applyLegacyTheme(ue):c(ue)},n=e([]),p=e(""),o=e(""),q=e("users"),b=e({}),_=e({}),k=m(()=>{let ue=n.value;if(o.value&&(ue=ue.filter(ke=>(ke.group||ke.role)===o.value)),!p.value)return ue;const be=p.value.toLowerCase();return ue.filter(ke=>ke.username.toLowerCase().includes(be))});function y(ue){b.value={...b.value,[ue]:!b.value[ue]}}async function I(ue,be){try{const re=await(await fetch("/api/groups/"+be+"/members/"+ue,{method:"DELETE"})).json();re.success?(await Y(),await fe()):ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function M(ue){const be=_.value[ue];if(be)try{const re=await(await fetch("/api/groups/"+ue+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:be})})).json();re.success?(await Y(),await fe(),_.value={..._.value,[ue]:""}):ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function u(ue,be){try{const re=await(await fetch("/api/users/"+ue.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:be})})).json();re.success?await Y():ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const l=e(!1),g=e(null),E=e({username:"",password:"",role:"user",theme:"tech-blue"}),O=e(!1),w=e(null),D=e(!1),T=e(!1),B=e({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),F=e({}),U=e(!1),J=e({group_id:"",name:"",description:""}),ee=e(!1),H=e([]),Z=e(""),z=e(""),s=e({});function S(ue){s.value={...s.value,[ue]:!s.value[ue]}}function i(ue){return!n.value||!n.value.length?0:n.value.filter(be=>(be.group||be.role)===ue).length}function h(ue){const be=(ue==null?void 0:ue.visible_menus)||{};return Object.values(be).filter(Boolean).length}const X=m(()=>Object.keys(oe.value).length);async function N(ue){z.value=ue,T.value=!0,await C(ue)}async function C(ue){try{const ke=await(await fetch("/api/groups/"+ue+"/members")).json();ke.success&&(H.value=ke.members||[])}catch(be){H.value=[],console.error("[loadGroupMembers]",be)}}async function f(){if(!(!Z.value||!z.value)){ee.value=!0;try{const be=await(await fetch("/api/groups/"+z.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:Z.value})})).json();be.success?(await C(z.value),await Y(),Z.value=""):ElementPlus.ElMessage.error(be.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{ee.value=!1}}}async function P(ue){try{const ke=await(await fetch("/api/groups/"+z.value+"/members/"+ue,{method:"DELETE"})).json();ke.success?(await C(z.value),await Y()):ElementPlus.ElMessage.error(ke.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const v=m(()=>{if(!n.value)return[];const ue=new Set(H.value.map(be=>be.username));return n.value.filter(be=>be.username!=="admin"&&be.username!=="guest"&&!ue.has(be.username))});function j(ue){const be=B.value.visible_menus[ue],ke=d.find(re=>re.key===ue);if(ke)if(be){const re=F.value[ue]||{};ke.subPages.forEach(te=>{const ve=ue+"."+te;B.value.visible_sub_pages[ve]=re[te]!==void 0?re[te]:!0})}else{const re={};ke.subPages.forEach(te=>{const ve=ue+"."+te;re[te]=B.value.visible_sub_pages[ve],B.value.visible_sub_pages[ve]=!1}),F.value[ue]=re}}function ne(ue){w.value=ue;const be=oe.value[ue]||{};B.value={name:be.name||ue,description:be.description||"",visible_menus:{...be.visible_menus||{}},visible_sub_pages:{...be.visible_sub_pages||{}}},F.value={},d.forEach(ke=>{const re={};ke.subPages.forEach(te=>{re[te]=B.value.visible_sub_pages[ke.key+"."+te]}),F.value[ke.key]=re}),D.value=!0}async function $(){ee.value=!0;try{const be=await(await fetch("/api/groups/"+w.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(B.value)})).json();be.success?(D.value=!1,w.value=null,await fe(),await x()):ElementPlus.ElMessage.error(be.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{ee.value=!1}}async function L(ue){var be;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((be=oe.value[ue])==null?void 0:be.name)||ue)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const te=await(await fetch("/api/groups/"+ue,{method:"DELETE"})).json();te.success?await fe():ElementPlus.ElMessage.error(te.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function Q(){if(J.value.group_id){ee.value=!0;try{const be=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(J.value)})).json();be.success?(U.value=!1,J.value={group_id:"",name:"",description:""},await fe()):ElementPlus.ElMessage.error(be.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{ee.value=!1}}}const oe=e({});async function fe(){try{if(!localStorage.getItem("quant_token"))return;const be=await fetch("/api/groups");if(be.ok){const ke=await be.json();oe.value=ke.groups||{}}}catch(ue){console.warn("loadAllGroups:",ue)}}function Ce(ue){var be;return((be=oe.value[ue])==null?void 0:be.name)||ue||"--"}async function Y(){try{if(!localStorage.getItem("quant_token")){n.value=[];return}const be=await fetch("/api/users");if(be.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),t.value=null;return}const ke=await be.json();n.value=ke.users||[]}catch(ue){n.value=[],console.error("[loadUsers] error:",ue)}}function de(ue){g.value=ue,E.value={username:ue.username,password:"",role:ue.role,theme:ue.theme||"tech-blue",group:ue.group||ue.role},l.value=!0}async function De(){if(E.value.username){O.value=!0;try{const ue=g.value?"PUT":"POST",be=g.value?`/api/users/${E.value.username}`:"/api/users",re=await(await fetch(be,{method:ue,headers:{"Content-Type":"application/json"},body:JSON.stringify(E.value)})).json();if(re.success){if(ElementPlus.ElMessage.success("保存成功"),t.value&&E.value.username===t.value.username){const te=E.value.theme;te&&te!==t.value.theme&&(t.value.theme=te,localStorage.setItem("quant_user",JSON.stringify(t.value)),r(te))}l.value=!1,g.value=null,await Y()}else ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{O.value=!1}}}async function ae(ue){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${ue}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await Y())}catch(be){console.error("[deleteUser]",be)}}async function ye(ue){try{const ke=await(await fetch(`/api/users/${ue.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:ue.enabled})})).json();ke.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(ke.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function Te(ue){try{const{value:be}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${ue.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(be){const re=await(await fetch(`/api/users/${ue.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:be})})).json();re.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(re.message||"重置失败")}}catch{}}return{userList:n,userSearch:p,groupFilter:o,userPageTab:q,expandedGroups:b,addMemberGroupMap:_,filteredUsers:k,toggleGroupExpand:y,removeMemberFromGroupInline:I,addMemberToGroupInline:M,changeUserGroup:u,showAddUser:l,editingUser:g,userForm:E,savingUser:O,editingGroup:w,menuConfigDialog:D,memberDialog:T,groupEditForm:B,subPageCache:F,showAddGroup:U,addGroupForm:J,savingGroup:ee,groupMembers:H,addMemberUsername:Z,selectedMemberGroup:z,subPageSectionExpanded:s,toggleSubPageSection:S,getGroupMemberCount:i,getMenuEnabledCount:h,groupCount:X,openMemberManager:N,loadGroupMembers:C,addMemberToGroup:f,removeMemberFromGroup:P,availableUsersForGroup:v,onParentToggle:j,openMenuConfig:ne,saveMenuConfig:$,deleteGroupConfig:L,createGroup:Q,allGroups:oe,getGroupName:Ce,loadAllGroups:fe,loadUsers:Y,editUser:de,saveUser:De,deleteUser:ae,toggleUserEnabled:ye,resetUserPassword:Te}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:e,computed:m}=Vue,{stockKlineLoaded:t,stockDetailVisible:c,stockDetailTab:d,stockDetail:x,disposeStockKline:r}=a,n=e([]),p=e(!1),o=e(!1),q=e("date"),b=e([]),_=e([]),k=e([]),y=e([]),I=m(()=>{var f,P;const C=[];for(const v of n.value){if(!v||v.id==null)continue;const j=v.stock_name||v.stock_code||"",ne=Array.isArray(v.messages)?v.messages:[];C.push({id:v.id,stock_code:v.stock_code,stock_name:j,first_msg:v.first_msg||((P=(f=ne[0])==null?void 0:f.content)==null?void 0:P.substring(0,50))||"",msg_count:v.msg_count||ne.length||0,created_at:v.created_at,date:(v.created_at||"").substring(0,10),month:(v.created_at||"").substring(0,7),messages:ne})}return C}),M=m(()=>{const C={};for(const P of I.value){const v=P.date||"未知";C[v]||(C[v]=[]),C[v].push(P)}const f={};return Object.keys(C).sort((P,v)=>v.localeCompare(P)).forEach(P=>f[P]=C[P]),f}),u=m(()=>{const C={};for(const P of I.value){const v=P.month||"未知";C[v]||(C[v]=[]),C[v].push(P)}const f={};return Object.keys(C).sort((P,v)=>v.localeCompare(P)).forEach(P=>f[P]=C[P]),f}),l=m(()=>{const C={};for(const f of I.value){const P=`${f.stock_name}(${f.stock_code})`;C[P]||(C[P]=[]),C[P].push(f)}return C});function g(C){const f=b.value.indexOf(C);f>=0?b.value.splice(f,1):b.value.push(C)}function E(C){const f=M.value[C]||[];if(f.every(v=>b.value.includes(v.id)))b.value=b.value.filter(v=>!f.some(j=>j.id===v));else for(const v of f)b.value.includes(v.id)||b.value.push(v.id)}function O(C){const f=u.value[C]||[];if(f.every(v=>b.value.includes(v.id)))b.value=b.value.filter(v=>!f.some(j=>j.id===v));else for(const v of f)b.value.includes(v.id)||b.value.push(v.id)}function w(C){const f=l.value[C]||[];if(f.every(v=>b.value.includes(v.id)))b.value=b.value.filter(v=>!f.some(j=>j.id===v));else for(const v of f)b.value.includes(v.id)||b.value.push(v.id)}function D(C){const f=_.value.indexOf(C);f>=0?_.value.splice(f,1):_.value.push(C)}function T(C){const f=k.value.indexOf(C);f>=0?k.value.splice(f,1):k.value.push(C)}function B(C){const f=y.value.indexOf(C);f>=0?y.value.splice(f,1):y.value.push(C)}function F(){b.value.length===I.value.length?b.value=[]:b.value=I.value.map(C=>C.id)}async function U(){if(b.value.length){try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${b.value.length} 段对话吗？此操作不可恢复。`,"删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}for(const C of[...b.value])await X(C);b.value=[]}}const J={};async function ee(C){x.value={stock:C.stock_code,name:C.stock_name},c.value=!0,d.value="chat",t.value=!1,r(),z.value=!0,s.value="",Z.value=[];try{let f=J[C.id];if(!f){const P=await fetch("/api/ai/chat/history/"+C.id);if(!P.ok)throw new Error("load history failed");f=(await P.json()).messages||[],J[C.id]=f}Z.value=f.map(P=>({role:P.role,content:P.content}))}catch{s.value="历史消息加载失败，请重试"}finally{z.value=!1}}const H=e(""),Z=e([]),z=e(!1),s=e("");async function S(){var P;const C=H.value.trim();if(!C||z.value)return;s.value="",Z.value.push({role:"user",content:C}),H.value="",z.value=!0;const f=Z.value.length;Z.value.push({role:"assistant",content:""});try{const ne=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((P=x.value)==null?void 0:P.stock)||"",message:C})})).body.getReader(),$=new TextDecoder;let L="";for(;;){const{done:Q,value:oe}=await ne.read();if(Q)break;L+=$.decode(oe,{stream:!0});const fe=L.split(`
`);L=fe.pop()||"";for(const Ce of fe)if(Ce.startsWith("data: "))try{const Y=JSON.parse(Ce.slice(6));Y.token?Z.value[f].content+=Y.token:Y.done?console.log("Stream done:",Y.session_id):Y.error&&(s.value=Y.error)}catch(Y){console.warn("SSE parse error:",Y)}}}catch(v){Z.value[f].content||(Z.value[f].content="网络错误: "+v.message)}z.value=!1}async function i(C){var P;s.value="",z.value=!0;const f={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};Z.value.push({role:"user",content:f[C]||f.comprehensive});try{const j=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((P=x.value)==null?void 0:P.stock)||"",mode:C})});if(j.ok){const ne=await j.json();Z.value.push({role:"assistant",content:ne.reply||"无回复"})}}catch(v){s.value="网络错误: "+v.message}z.value=!1}async function h(){p.value=!0,o.value=!1;try{const C=await fetch("/api/ai/chat/history?view=date");if(C.ok){const f=await C.json(),P=[];for(const v of f)for(const j of v.items||[])P.push(j);n.value=P}else o.value=!0}catch(C){console.error(C),o.value=!0}finally{p.value=!1}}async function X(C){try{await fetch("/api/ai/chat/history/"+C,{method:"DELETE"}),n.value=n.value.filter(f=>f.id!==C)}catch(f){console.error("deleteChatSession:",f)}}function N(C){if(!C)return"";const f=String(C).split(`
`),P=[],v=[];let j=0;for(;j<f.length;){if(/^\s*\|.*\|\s*$/.test(f[j])){let $=j;const L=[];for(;$<f.length&&/^\s*\|.*\|\s*$/.test(f[$]);)L.push(f[$]),$++;const Q=Ce=>Ce.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map(Y=>Y.trim()),oe=L.map(Q);if(oe.length>1&&oe[1].every(Ce=>/^:?-{3,}:?$/.test(Ce))){const Ce=Math.max(...oe.map(ae=>ae.length)),Y=oe[0].slice(0,Ce),de=oe.slice(2);let De="<table>";de.length?(De+="<thead><tr>"+Y.map(ae=>"<th>"+ae+"</th>").join("")+"</tr></thead>",De+="<tbody>"+de.map(ae=>"<tr>"+ae.slice(0,Ce).map(ye=>"<td>"+ye+"</td>").join("")+"</tr>").join("")+"</tbody>"):De+="<tbody><tr>"+Y.map(ae=>"<td>"+ae+"</td>").join("")+"</tr></tbody>",De+="</table>",P.push(De),v.push("\0T"+(P.length-1)+"\0"),j=$;continue}for(;j<$;)v.push(f[j]),j++;continue}v.push(f[j]),j++}let ne=v.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return P.forEach(($,L)=>{ne=ne.split("\0T"+L+"\0").join($)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(ne=window.__quantModules.core.sanitizeHtml(ne)),ne}return{chatSessions:n,chatHistoryView:q,selectedChatIds:b,expandedChatDates:_,expandedChatMonths:k,expandedChatStocks:y,chatHistoryLoading:p,chatHistoryError:o,allChatSessionsFlat:I,chatGroupedByDate:M,chatGroupedByMonth:u,chatGroupedByStock:l,toggleSelectChat:g,toggleSelectChatDate:E,toggleSelectChatMonth:O,toggleSelectChatStock:w,toggleChatDateExpand:D,toggleChatMonthExpand:T,toggleChatStockExpand:B,selectAllChatSessions:F,deleteSelectedChatSessions:U,viewChatSession:ee,loadChatHistory:h,deleteChatSession:X,renderMarkdown:N,stockChatInput:H,stockChatMessages:Z,stockChatLoading:z,stockChatError:s,askStockSend:S,askStockQuick:i}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantUndoCore=e()})(typeof self<"u"?self:void 0,function(){function a(){var e={},m=0;function t(r,n,p){if(typeof r!="function")return"";var o="undo-"+ ++m,q={fn:r,label:n||"",timer:null,active:!0};return e[o]=q,p&&p>0&&(q.timer=setTimeout(function(){d(o)},p)),o}function c(r){var n=e[r];if(!n||!n.active)return!1;n.timer&&clearTimeout(n.timer),delete e[r],n.active=!1;try{n.fn()}catch{}return!0}function d(r){var n=e[r];n&&(n.timer&&clearTimeout(n.timer),delete e[r],n.active=!1)}function x(){var r=0;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r++;return r}return{register:t,undo:c,remove:d,activeCount:x}}return{createUndoStack:a}});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantFormMemory=e()})(typeof self<"u"?self:void 0,function(){function a(d,x,r){return"qc_fm_"+(d||"guest")+"_"+x+"_v"+(r||1)}function e(){return typeof localStorage<"u"&&localStorage?localStorage:null}function m(d,x,r,n){var p=e();if(!p||!d||x===void 0||x===null)return!1;try{return p.setItem(a(r,d,n),JSON.stringify(x)),!0}catch{return!1}}function t(d,x,r){var n=e();if(!n||!d)return null;try{var p=n.getItem(a(x,d,r));return p?JSON.parse(p):null}catch{return null}}function c(d,x,r){var n=e();if(!(!n||!d))try{n.removeItem(a(x,d,r))}catch{}}return{saveForm:m,loadForm:t,clearForm:c}});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantSessionRestore=e()})(typeof self<"u"?self:void 0,function(){var a="qc_session_restore";function e(){return typeof sessionStorage<"u"&&sessionStorage?sessionStorage:null}function m(d){var x=e();if(!x||!d)return!1;try{return x.setItem(a,JSON.stringify(d)),!0}catch{return!1}}function t(){var d=e();if(!d)return null;try{var x=d.getItem(a);return x?JSON.parse(x):null}catch{return null}}function c(){var d=e();if(d)try{d.removeItem(a)}catch{}}return{save:m,restore:t,clear:c,KEY:a}});(function(){if(typeof window>"u")return;let a=null;function e(){try{return!!localStorage.getItem("qc_install_dismissed")}catch{return!1}}function m(){try{localStorage.setItem("qc_install_dismissed","1")}catch{}}function t(){if(!document.getElementById("qc-install-bar")){var c=document.createElement("div");c.id="qc-install-bar",c.className="qc-install-bar",c.setAttribute("role","status");var d=document.createElement("span");d.textContent="安装「量化日历」到桌面，随时查看行情与评估";var x=document.createElement("span");x.className="qc-install-actions";var r=document.createElement("button");r.className="qc-install-btn",r.type="button",r.textContent="安装";var n=document.createElement("button");n.className="qc-install-close",n.type="button",n.setAttribute("aria-label","关闭"),n.textContent="×",x.appendChild(r),x.appendChild(n),c.appendChild(d),c.appendChild(x),document.body.appendChild(c),r.addEventListener("click",function(){a&&(a.prompt(),a=null),c.remove()}),n.addEventListener("click",function(){m(),c.remove()})}}window.addEventListener("beforeinstallprompt",function(c){c.preventDefault(),a=c,e()||t()}),window.addEventListener("appinstalled",function(){a=null;var c=document.getElementById("qc-install-bar");c&&c.remove()})})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantBatchAdd=e()})(typeof self<"u"?self:void 0,function(){function a(m){var t=[];return(m||[]).forEach(function(c){if(c){var d=typeof c=="string"?c:c.code||"",x=typeof c=="object"&&c.name?String(c.name):"";d&&t.push(x&&x!==d?d+" "+x:d)}}),t.join(`
`)}function e(m){if(!m||m.success===!1)return{added:0,existed:0,invalid:0,total:0,failed:0,message:"批量加入失败"};var t=m.added||0,c=m.existed||0,d=m.invalid||0,x=m.total||0;return{added:t,existed:c,invalid:d,total:x,failed:d,message:"已加入 "+t+" 只"+(c?"，"+c+" 只已存在":"")+(d?"，"+d+" 行无效":"")}}return{buildImportText:a,summarize:e}});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantContextMenu=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(d,x,r,n,p,o,q){var b=q??a,_=d,k=x;return _+r>p-b&&(_=Math.max(b,p-b-r)),k+n>o-b&&(k=Math.max(b,o-b-n)),{left:Math.round(_),top:Math.round(k)}}var m=[{key:"detail",label:"查看详情"},{key:"add-watch",label:"加入自选"},{key:"copy",label:"复制代码"},{key:"export",label:"导出"},{key:"delete",label:"删除"}];function t(){return m.map(function(d){return{key:d.key,label:d.label}})}function c(d,x,r){var n=r??500;return!d||!x?!1:x-d>=n}return{positionMenu:e,getActions:t,isLongPress:c}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,onMounted:e,onBeforeUnmount:m}=Vue,t=window.QuantContextMenu;window.__quantComponents=window.__quantComponents||{};function c(d){let x=d;for(;x&&x!==document.body;){if(x.hasAttribute&&x.hasAttribute("data-ctx-code"))return x;x=x.parentElement}return null}window.__quantComponents.ContextMenu={name:"qc-context-menu",template:`
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
    `,setup(){const d=a(!1),x=a({left:0,top:0}),r=a(t?t.getActions():[]),n=a({});function p(){d.value=!1}function o(l,g,E){if(n.value=E||{},t){const O=window.innerWidth||document.documentElement.clientWidth,w=window.innerHeight||document.documentElement.clientHeight,D=180,T=r.value.length*32+12;x.value=t.positionMenu(l,g,D,T,O,w)}else x.value={left:l,top:g};d.value=!0}function q(l){p(),window.dispatchEvent(new CustomEvent("qc:context-action",{detail:{action:l.key,payload:n.value}}))}function b(l){const g=c(l.target);g&&(l.preventDefault(),o(l.clientX,l.clientY,{code:g.getAttribute("data-ctx-code")||"",name:g.getAttribute("data-ctx-name")||"",context:g.getAttribute("data-ctx-context")||""}))}let _=null,k=0;function y(l){const g=c(l.target);g&&(k=Date.now(),_=setTimeout(function(){if(t&&t.isLongPress(k,Date.now(),500)){navigator.vibrate&&navigator.vibrate(10);const E=l.touches&&l.touches[0];o(E?E.clientX:0,E?E.clientY:0,{code:g.getAttribute("data-ctx-code")||"",name:g.getAttribute("data-ctx-name")||"",context:g.getAttribute("data-ctx-context")||""})}},520))}function I(){_&&(clearTimeout(_),_=null)}function M(l){if(l.key==="Escape"){p();return}if(l.shiftKey&&l.key==="F10"){const g=c(document.activeElement);if(g){l.preventDefault();const E=g.getBoundingClientRect();o(E.left+E.width/2,E.bottom,{code:g.getAttribute("data-ctx-code")||"",name:g.getAttribute("data-ctx-name")||"",context:g.getAttribute("data-ctx-context")||""})}}}function u(l){d.value&&!(l.target&&l.target.closest&&l.target.closest(".qc-ctx"))&&p()}return e(function(){document.addEventListener("contextmenu",b,!0),document.addEventListener("touchstart",y,{passive:!0}),document.addEventListener("touchend",I,!0),document.addEventListener("keydown",M,!0),document.addEventListener("mousedown",u,!0)}),m(function(){document.removeEventListener("contextmenu",b,!0),document.removeEventListener("touchstart",y,!0),document.removeEventListener("touchend",I,!0),document.removeEventListener("keydown",M,!0),document.removeEventListener("mousedown",u,!0)}),{visible:d,pos:x,actions:r,run:q}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantRequestCore=e()})(typeof self<"u"?self:void 0,function(){function a(){var e=0,m={};function t(n){var p=++e;if(n&&m[n])return{deduped:!0,id:m[n].seq,controller:m[n].controller};var o=typeof AbortController<"u"?new AbortController:null;return m[n]={seq:p,controller:o},{deduped:!1,id:p,controller:o}}function c(n,p){var o=m[n];return!o||o.seq!==p}function d(n){var p=m[n];if(p&&p.controller)try{p.controller.abort()}catch{}}function x(n,p){var o=m[n];o&&o.seq===p&&delete m[n]}function r(){var n=0;for(var p in m)Object.prototype.hasOwnProperty.call(m,p)&&n++;return n}return{begin:t,isStale:c,abort:d,finish:x,activeCount:r}}return{createRequestGuard:a}});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantStateRegistry=e()})(typeof self<"u"?self:void 0,function(){function a(){var e=Object.create(null),m=Object.create(null);function t(b,_){if(!b||typeof b!="string")throw new Error("domain name required");if(e[b])throw new Error("duplicate domain: "+b);for(var k=Array.isArray(_)?_:[],y=0;y<k.length;y++){var I=k[y];if(m[I]&&m[I]!==b)throw new Error("duplicate key across domains: "+I);m[I]=b}return e[b]={keys:k.slice(),refs:Object.create(null)},!0}function c(b,_,k){var y=e[b];if(!y)throw new Error("unknown domain: "+b);if(y.keys.indexOf(_)===-1)throw new Error("key not declared in domain: "+b+"."+_);return y.refs[_]=k,!0}function d(b,_){var k=e[b];return!!k&&_ in k.refs}function x(b,_){var k=e[b];if(k){var y=k.refs[_];return y&&typeof y=="object"&&"value"in y?y.value:y}}function r(b){var _=e[b];if(!_)return null;for(var k={},y=0;y<_.keys.length;y++){var I=_.keys[y],M=_.refs[I];k[I]=M&&typeof M=="object"&&"value"in M?M.value:M}return k}function n(b,_){var k=e[b];if(!k||!_)return!1;for(var y=0;y<k.keys.length;y++){var I=k.keys[y];if(I in _){var M=k.refs[I];M&&typeof M=="object"&&"value"in M&&(M.value=_[I])}}return!0}function p(){return Object.keys(e)}function o(b){var _=e[b];return _?_.keys.slice():[]}function q(){for(var b=0,_=Object.keys(e),k=0;k<_.length;k++)b+=Object.keys(e[_[k]].refs).length;return b}return{defineDomain:t,attach:c,has:d,get:x,snapshot:r,restore:n,domains:p,keys:o,attachedCount:q}}return{createStateRegistry:a}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:e,computed:m,watch:t}=Vue,{consensus:c,currentPage:d,currentSubPage:x,dashboardData:r,searchKeyword:n,statusFilter:p,strategyFilter:o,strategyFilterCounts:q}=a;function b(T){const B=o.value.selected;if(!B||B.length===0)return T;const F=o.value.mode;return T.filter(U=>{const J=U.strategy_names||U.strategies||[];return F==="union"?B.some(ee=>J.includes(ee)):B.every(ee=>J.includes(ee))})}const _=m(()=>{const T=b(c.value||[]);return{all:T.length,newCount:T.filter(B=>B.status==="new").length,current:T.filter(B=>B.status==="current").length,out:T.filter(B=>B.status==="out").length}}),k=m(()=>{let T=c.value||[];if(p.value!=="all"&&(T=T.filter(B=>B.status===p.value)),T=b(T),n.value){const B=n.value.toLowerCase();T=T.filter(F=>F.code.toLowerCase().includes(B)||F.name&&F.name.toLowerCase().includes(B))}return T}),y=m(()=>{const T=c.value||[],B={},F={};for(const U of T)U.code&&U.name&&(F[U.code]=U.name);for(const U of T){const J=U.strategy_names||U.strategies||[];for(const ee of J)B[ee]||(B[ee]={strategy:ee,count:0,codes:[],names:[]}),B[ee].count++,B[ee].codes.includes(U.code)||(B[ee].codes.push(U.code),B[ee].names.push({code:U.code,name:F[U.code]||U.code}))}return Object.values(B).sort((U,J)=>J.count-U.count)}),I=m(()=>{const T=o.value.selected,B=o.value.mode,F={};for(const[U,J]of Object.entries(q.value)){const ee=J||[];!T||T.length===0?F[U]=ee.length:B==="union"?F[U]=ee.filter(H=>H.strategies&&T.some(Z=>H.strategies.includes(Z))).length:F[U]=ee.filter(H=>H.strategies&&T.every(Z=>H.strategies.includes(Z))).length}return F});function M(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(o.value.selected)),localStorage.setItem("quant_strategy_filter_mode",o.value.mode)}const u=m(()=>{const T=(r.value||{}).consensus_rank||[];return b(T)}),l=m(()=>{const T=c.value||q.value.day||[];return b(T).length}),g=m(()=>{const T=(r.value||{}).strategy_counts||[],B=c.value||q.value.day||[];if(B.length===0)return T;const F=b(B),U={};F.forEach(ee=>{(ee.strategy_names||ee.strategies||[]).forEach(Z=>{U[Z]=(U[Z]||0)+1})});const J=F.length||1;return T.map(ee=>{const H=ee.strategy_name||ee.strategy_id,Z=U[H]||0;return{...ee,count:Z,percentage:Math.round(Z/J*1e3)/10}})}),E=m(()=>{const T=(r.value||{}).pool_changes||{},B=(T.new_count||0)-(T.out_count||0);return B>0?{dir:"up",text:"↑"+B}:B<0?{dir:"down",text:"↓"+Math.abs(B)}:{dir:"flat",text:"→0"}}),O=m(()=>{const T=(r.value||{}).time_coverage||{},B=new Date(T.start_date),F=new Date(T.end_date),U=new Date;if(!B.getTime()||!F.getTime()||U>=F)return 100;if(U<=B)return 0;const J=F-B,ee=U-B;return Math.round(ee/J*100)}),w=e(null);function D(T){o.value.selected=[T],o.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([T])),localStorage.setItem("quant_strategy_filter_mode","union"),d.value="calendar",x.value="calendar"}return{applyStrategyFilter:b,statusCounts:_,stockPool:k,strategyDistribution:y,strategyPreviewCount:I,saveStrategyFilter:M,filteredConsensusRank:u,currentPoolSize:l,filteredStrategyCounts:g,poolChangeBadge:E,timeBarPercent:O,lastRefreshTime:w,navigateToStrategyFilter:D}}}})();(function(){window.__quantModules||(window.__quantModules={});const a={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},e={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function m(r){return a[r]||"var(--text-tertiary)"}function t(r){return e[r]||"var(--bg-hover)"}const c=window.QuantUndoCore,d=c?c.createUndoStack():null;function x(r,n){if(!d||!window.Vue||!window.Vue.h)return;const p=window.Vue.h;ElementPlus.ElMessage.success({message:p("span",null,[r,p("a",{style:"margin-left:8px;color:var(--primary-text);cursor:pointer;text-decoration:underline",onClick:()=>{d.undo(n)&&ElementPlus.ElMessage.success("已撤销")}},"撤销")]),duration:5e3})}window.__quantModules.watchlist={create(r){const{ref:n,computed:p,watch:o}=Vue,{currentUser:q,selectedDate:b,stockDetail:_,stockDetailTab:k,stockDetailVisible:y,stockDetailLoading:I,stockKlineLoaded:M,viewCache:u,animateScoreEntrance:l,loadStockKline:g,refreshStockScore:E,disposeStockKline:O,aiHistory:w,aiLoading:D,aiEvalStage:T,aiEvalElapsed:B,aiEvalError:F,aiResult:U,loadLastEvaluation:J,autoEvaluateConfig:ee,autoEvaluateScope:H,batchStocks:Z,batchRunning:z,batchTotal:s,batchCompleted:S,batchCurrent:i,batchStatuses:h,batchResults:X,batchEvalErrors:N,expandedDates:C,expandedStocks:f,savingConfig:P,selectedHistoryIds:v,selectedWatchlistCodes:j,showAutoEvaluateSettings:ne,showBatchEvaluate:$}=r,L=R=>(getComputedStyle(document.documentElement).getPropertyValue(R)||"").trim(),Q=n(""),oe=n("default"),fe=n("default"),Ce=n([]),Y=p(()=>new Set(Ce.value.map(R=>R.code))),de=n(!1),De=n(!1),ae=p(()=>{const R=[...Ce.value];return fe.value==="name"?R.sort((se,ce)=>se.name.localeCompare(ce.name,"zh")):fe.value==="added"?R.sort((se,ce)=>(ce.added_at||"").localeCompare(se.added_at||"")):fe.value==="score"&&R.sort((se,ce)=>{const Pe=Te(se.code);return Te(ce.code)-Pe}),R});function ye(R){const se=w.value.filter(Pe=>Pe.stock_code===R);if(se.length===0)return null;const ce=se.reduce((Pe,Re)=>Pe.evaluate_time>Re.evaluate_time?Pe:Re);return{score:ce.result.total_score,color:m(ce.result.level),bg:t(ce.result.level)}}function Te(R){const se=ye(R);return se?se.score:0}function ue(R){$e(R.code,R.name),ve.value=ve.value.filter(se=>se.code!==R.code),te.value=""}const be=p(()=>new Set(w.value.map(R=>R.stock_code))),ke=n(new Set);function re(R){ke.value.add(R)}const te=n(""),ve=n([]),Le=n(!1),Fe=n({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),He=n(!1),Mt=n(!1),mt=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};mt.REALTIME_WS_PATH;const Pt=mt.REALTIME_DEGRADED_TEXT||"数据不可达",_e=mt.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";mt.WARN_RISE_SPEED_THRESHOLD!=null&&mt.WARN_RISE_SPEED_THRESHOLD,mt.WARN_VOLUME_RATIO_THRESHOLD!=null&&mt.WARN_VOLUME_RATIO_THRESHOLD;const qe=mt.quoteFmt||{price:R=>R==null?"--":Number(R).toFixed(2),pct:R=>R==null?"--":Number(R).toFixed(2)+"%",num:R=>R==null?"--":Number(R).toFixed(2),color:R=>""},Oe=3,Ie=5e3,Ye=n({}),Qe=n(!1),We=n("idle");let ot=null,gt=null,Dt=0;function Kt(R){return mt.checkQuoteWarning?mt.checkQuoteWarning(R):null}function ea(R){return Kt(Ye.value[R])}function $t(R){return qe.color(Ye.value[R])}function A(R){return qe.price(Ye.value[R]&&Ye.value[R].price)}function le(R){return qe.pct(Ye.value[R]&&Ye.value[R].change_pct)}function Ee(R,se){return qe.num(Ye.value[R]&&Ye.value[R][se])}function Ae(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function Ue(){if(!ot||ot.readyState!==1)return;const R=(Ce.value||[]).map(se=>se.code);R.length!==0&&ot.send(JSON.stringify({subscribe:R}))}function ft(){if(gt&&(clearTimeout(gt),gt=null),ot){try{ot.onopen=null,ot.onmessage=null,ot.onerror=null,ot.onclose=null,ot.close()}catch{}ot=null}Ye.value={},Qe.value=!1,We.value="idle"}function Je(){const R=Ae();if(!R||!mt.buildRealtimeWsUrl||We.value==="open"||We.value==="connecting")return;let se;try{se=mt.buildRealtimeWsUrl()+"?token="+encodeURIComponent(R)}catch{We.value="offline",Qe.value=!0;return}We.value="connecting";let ce=null;try{ce=new WebSocket(se)}catch{We.value="offline",Qe.value=!0;return}ot=ce,ce.onopen=function(){We.value="open",Dt=0,Ue()},ce.onmessage=function(Pe){let Re=null;try{Re=JSON.parse(Pe.data||"{}")}catch{return}if(!Re||Re.type!=="quotes")return;if(Qe.value=!!Re.degraded,Re.degraded||!Array.isArray(Re.data)){Ye.value={};return}const zt={};Re.data.forEach(function(lt){lt&&lt.code&&(zt[lt.code]=lt)}),Ye.value=zt},ce.onerror=function(){We.value="offline",Qe.value=!0},ce.onclose=function(){We.value="offline",Dt<Oe?(Dt++,gt=setTimeout(function(){We.value!=="open"&&Je()},Ie*Dt)):Qe.value=!0}}o(Ce,function(){We.value==="open"&&Ue()}),Ae()&&setTimeout(Je,500);async function Rt(){if(!_.value)return;D.value=!0,U.value=null,F.value="",T.value="fetching",B.value=0;const R=Date.now(),se=setInterval(()=>{D.value&&(B.value=Math.round((Date.now()-R)/1e3))},500);try{const ce=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:_.value.stock,stock_name:_.value.name||_.value.stock,strategy:oe.value})});T.value="calculating";const Pe=await ce.json();T.value="analyzing",Pe.success?(await nextTick(),U.value=Pe.data,k.value="ai",xt()):(F.value=Pe.message||"评估失败",ElementPlus.ElMessage.error(F.value))}catch(ce){F.value=ce&&ce.message&&!String(ce.message).includes("Failed to fetch")?ce.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(F.value)}finally{clearInterval(se),D.value=!1,B.value=0,F.value?T.value="":(T.value="done",setTimeout(()=>{T.value==="done"&&(T.value="")},800))}}const at=50,bt=n(0),st=n(!1),Nt=p(()=>w.value.length<bt.value);async function xt(){de.value=!0,De.value=!1;try{if(!localStorage.getItem("quant_token")){w.value=[];return}const se=await fetch(`/api/ai/history?limit=${at}&offset=0`);if(se.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),q.value=null;return}const ce=await se.json();ce.success?(w.value=ce.data||[],bt.value=ce.total!=null?ce.total:w.value.length):De.value=!0}catch(R){console.error("[loadAiHistory] error:",R),De.value=!0}finally{de.value=!1}}async function G(){if(!(st.value||!Nt.value)){st.value=!0;try{const se=await(await fetch(`/api/ai/history?limit=${at}&offset=${w.value.length}`)).json();if(se.success&&Array.isArray(se.data)){const ce=new Set(w.value.map(Re=>Re.id)),Pe=se.data.filter(Re=>!ce.has(Re.id));w.value=w.value.concat(Pe),se.total!=null&&(bt.value=se.total)}}catch(R){console.warn("[loadMoreAiHistory] error:",R)}finally{st.value=!1}}}async function we(R){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const ce=await(await fetch(`/api/ai/history/${R}`,{method:"DELETE"})).json();if(ce.success){ElementPlus.ElMessage.success("删除成功"),xt();const Pe=v.value.indexOf(R);Pe>=0&&v.value.splice(Pe,1)}else ElementPlus.ElMessage.error(ce.message||"删除失败")}catch{}}function Ze(R){const se=v.value.indexOf(R);se>=0?v.value.splice(se,1):v.value.push(R)}function Ke(){v.value=[]}function St(){j.value=[]}async function Tt(){const R=v.value;if(R.length===0)return;const se=w.value.filter(ce=>R.includes(ce.id)).map(ce=>ce.stock_code);$.value=!0,Z.value=[...new Set(se)].join(",")}async function Ft(){const R=v.value;if(R.length===0)return;const se=w.value.filter(Re=>R.includes(Re.id)),ce=[...new Map(se.map(Re=>[Re.stock_code,Re])).values()];let Pe=0;for(const Re of ce)Y.value.has(Re.stock_code)||(await $e(Re.stock_code,Re.stock_name||Re.stock_code),Pe++);Pe>0?ElementPlus.ElMessage.success(`已加入 ${Pe} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function nt(){const R=v.value;if(R.length===0)return;const se=w.value.filter(Pe=>R.includes(Pe.id)),ce=[...new Map(se.map(Pe=>[Pe.stock_code,Pe])).values()];try{const Re=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:ce.map(zt=>({stock_code:zt.stock_code,stock_name:zt.stock_name||""}))})})).json();Re&&Re.success?ElementPlus.ElMessage.success(`已登记 ${Re.count||ce.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(Re&&Re.detail||"批量加入组合失败")}catch(Pe){console.warn("batchAddToPortfolio failed:",Pe),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function wt(){if(j.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${j.value.length} 只股票？`,"提示",{type:"warning"});for(const R of j.value)await Ut(R);j.value=[],ElementPlus.ElMessage.success("已移除")}catch(R){R&&R.message!=="cancel"&&console.warn("batchRemoveWatchlist:",R)}}function Wt(R){const se=j.value.indexOf(R);se>=0?j.value.splice(se,1):j.value.push(R)}function ba(){v.value.length===w.value.length?v.value=[]:v.value=w.value.map(R=>R.id)}function rt(){j.value.length===Ce.value.length?j.value=[]:j.value=Ce.value.map(R=>R.code)}async function Xt(){if(v.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${v.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const se=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:v.value})})).json();se.success?(ElementPlus.ElMessage.success(se.message),v.value=[],xt()):ElementPlus.ElMessage.error(se.message||"删除失败")}catch{}}async function Ct(){try{const se=await(await fetch("/api/ai/auto-config")).json();se.success&&(ee.value=se.data,se.data.evaluate_scope&&(H.value=se.data.evaluate_scope))}catch(R){console.warn("loadAutoEvaluateConfig failed:",R)}}async function ht(){P.value=!0;try{ee.value.evaluate_scope=H.value;const se=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ee.value)})).json();se.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),ne.value=!1):ElementPlus.ElMessage.error(se.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{P.value=!1}}const ta=n(!1);async function aa(){ta.value=!0;try{const se=await(await fetch("/api/watchlist")).json();se.success&&(Ce.value=se.stocks||[])}catch(R){console.warn("loadWatchlist failed:",R)}finally{ta.value=!1}}async function $e(R,se){try{const Pe=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:R,name:se})})).json();if(Pe.success)return Pe.existed||Ce.value.push({code:R,name:se,added_at:new Date().toISOString()}),!0}catch(ce){console.warn("addToWatchlist failed:",ce)}return!1}async function Ut(R){try{const se=Ce.value.find(Pe=>Pe.code===R),ce=se&&se.name||"";if(await fetch(`/api/watchlist/${encodeURIComponent(R)}`,{method:"DELETE"}),Ce.value=Ce.value.filter(Pe=>Pe.code!==R),Y.value&&Y.value.delete&&Y.value.delete(R),d){const Pe=d.register(()=>{$e(R,ce)},"移除自选",5e3);x("已移除自选",Pe)}else ElementPlus.ElMessage.info("已移除自选")}catch(se){console.warn("removeFromWatchlist failed:",se)}}async function da(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"});const R=Ce.value.slice();if(await fetch("/api/watchlist",{method:"DELETE"}),Ce.value=[],Y.value&&Y.value.clear&&Y.value.clear(),ElementPlus.ElMessage.success("自选已清空"),d&&R.length){const se=d.register(()=>{R.forEach(ce=>$e(ce.code,ce.name||""))},"清空自选",5e3);x("自选已清空",se)}}catch(R){console.warn("clearWatchlist failed:",R)}}async function wa(R,se){Y.value.has(R)?(await Ut(R),ElementPlus.ElMessage.info("已移除自选")):await $e(R,se)&&ElementPlus.ElMessage.success("已加入自选")}async function la(R,se){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(R,se||"");const ce=new Date().toISOString().split("T")[0],Pe=b.value||ce;k.value="kline",U.value=null,F.value="",O("stockKlineChart"),_.value=null,I.value=!0,M.value=!1,y.value=!0,nextTick(()=>l());try{const Re=await fetch(`/api/calendar/stock/${encodeURIComponent(R)}?date=${Pe}`);_.value=await Re.json()}catch{_.value={stock:R,name:se,total_days:0}}finally{I.value=!1}await nextTick(),await g("daily"),E(),J(R)}const ia=n(!1);async function K(){var R;if(Ce.value.length!==0){ia.value=!0;try{const ce=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ce.success&&ce.loaded>0?(((R=ce.details)==null?void 0:R.loaded)||[]).forEach(Pe=>ke.value.add(Pe.code)):ce.loaded===0&&ce.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(se){console.error("预加载K线失败:",se)}finally{ia.value=!1}}}async function xe(R,se){D.value=!0,U.value=null,F.value="",T.value="fetching",M.value=!1,O();const ce=new Date().toISOString().split("T")[0],Pe=b.value||ce;try{const Re=await fetch(`/api/calendar/stock/${encodeURIComponent(R)}?date=${Pe}`);_.value=await Re.json()}catch{_.value={stock:R,name:se,total_days:0}}k.value="ai",y.value=!0,await nextTick();try{const zt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:R,stock_name:se})})).json();zt.success?(U.value=zt.data,xt()):(F.value=zt.message||"评估失败",ElementPlus.ElMessage.error(F.value))}catch{F.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(F.value)}finally{D.value=!1,T.value=""}}async function je(){Ce.value.length!==0&&($.value=!0,Z.value=Ce.value.map(R=>R.code).join(","))}async function ze(){j.value.length!==0&&($.value=!0,Z.value=j.value.join(","))}async function dt(){if(!te.value.trim()){ve.value=[];return}Le.value=!0;try{const se=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(te.value)}`)).json();ve.value=(se.results||[]).filter(ce=>!Y.value.has(ce.code))}catch(R){console.warn("searchStockForWatchlist failed:",R)}finally{Le.value=!1}}async function et(){try{const se=await(await fetch("/api/data-refresh/config")).json();Fe.value=se}catch(R){console.error("加载数据刷新配置失败:",R)}}async function _t(){Mt.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Fe.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{Mt.value=!1}}async function Lt(){var R;He.value=!0;try{const ce=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();ce.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((R=ce.parser_stats)==null?void 0:R.dates_count)||0}交易日`),u.clear(),await et()):ElementPlus.ElMessage.error(ce.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{He.value=!1}}const yt=n(!1);async function Sa(){yt.value=!0;try{const se=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(se.success){const ce=se.result||{},Pe=se.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${ce.pulled||0}/${ce.total||0}, 财务 ${Pe.pulled||0}/${Pe.total||0}`),u.clear(),await et()}else ElementPlus.ElMessage.error(se.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{yt.value=!1}}const oa=p(()=>{const R={};for(const se of w.value){const ce=(se.evaluate_time||"").split("T")[0];R[ce]||(R[ce]=[]),R[ce].push(se)}for(const se in R)R[se].sort((ce,Pe)=>Pe.evaluate_time.localeCompare(ce.evaluate_time));return R}),ua=p(()=>{const R={};for(const se of w.value){const ce=se.stock_code;R[ce]||(R[ce]=[]),R[ce].push(se)}for(const se in R)R[se].sort((ce,Pe)=>Pe.evaluate_time.localeCompare(ce.evaluate_time));return R}),sa=p(()=>{const R={};for(const se of w.value){const ce=(se.evaluate_time||"").split("T")[0].slice(0,7);R[ce]||(R[ce]=[]),R[ce].push(se)}for(const se in R)R[se].sort((ce,Pe)=>Pe.evaluate_time.localeCompare(ce.evaluate_time));return R}),va=p(()=>Object.keys(ua.value).length),na=p(()=>{const R=w.value.length;return R===0?[]:[{label:"90+",min:90,max:100,color:"var(--bar-fill-ok)"},{label:"80-89",min:80,max:89,color:"var(--bar-fill-ok)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--state-success-solid) 42%, var(--surface-card))"},{label:"60-69",min:60,max:69,color:"var(--bar-fill-warn)"},{label:"<60",min:0,max:59,color:"var(--bar-fill-bad)"}].map(ce=>{const Pe=w.value.filter(Re=>Re.result.total_score>=ce.min&&Re.result.total_score<=ce.max).length;return{...ce,count:Pe,pct:Math.round(Pe/R*100)}})});async function La(){if(!Q.value)return;const R=Ce.value.find(se=>se.code===Q.value);if(R){D.value=!0,U.value=null,F.value="",T.value="fetching";try{_.value={stock:R.code,name:R.name,total_days:0},y.value=!0,k.value="ai",await nextTick();const ce=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:R.code,stock_name:R.name,strategy:oe.value})})).json();ce.success?(U.value=ce.data,xt(),Q.value=""):(F.value=ce.message||"评估失败",ElementPlus.ElMessage.error(F.value))}catch{F.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(F.value)}finally{D.value=!1,T.value=""}}}function ma(R){const se=C.value.indexOf(R);se>=0?C.value.splice(se,1):C.value.push(R)}function Ia(R){const ce=(oa.value[R]||[]).map(Re=>Re.id);ce.every(Re=>v.value.includes(Re))?v.value=v.value.filter(Re=>!ce.includes(Re)):ce.forEach(Re=>{v.value.includes(Re)||v.value.push(Re)})}function ka(R){const ce=(sa.value[R]||[]).map(Re=>Re.id);ce.every(Re=>v.value.includes(Re))?v.value=v.value.filter(Re=>!ce.includes(Re)):ce.forEach(Re=>{v.value.includes(Re)||v.value.push(Re)})}function Na(R){const se=f.value.indexOf(R);se>=0?f.value.splice(se,1):f.value.push(R)}function Pa(R){const ce=(ua.value[R]||[]).map(Re=>Re.id);ce.every(Re=>v.value.includes(Re))?v.value=v.value.filter(Re=>!ce.includes(Re)):ce.forEach(Re=>{v.value.includes(Re)||v.value.push(Re)})}const Bt={},Zt={};function Ca(R,se,ce){if(!R||(ce&&(Zt[se]={el:R,records:ce}),Bt[se]===R))return;const Pe=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Re=()=>{Object.keys(Bt).forEach(Xe=>{if(Bt[Xe]&&Bt[Xe]!==R){try{Bt[Xe].dispose()}catch{}delete Bt[Xe]}});const zt=[...ce].sort((Xe,Ot)=>Xe.evaluate_time.localeCompare(Ot.evaluate_time)),lt=zt.map(Xe=>(Xe.evaluate_time||"").split("T")[0]),pt=zt.map(Xe=>{var Ot;return((Ot=Xe.result)==null?void 0:Ot.total_score)??null}),Jt=zt.map(Xe=>{var Ot;return((Ot=Xe.result)==null?void 0:Ot.level)??""}),At={primary:L("--qc-primary-600")||"#b8922a",textPrimary:L("--text-primary")||"#1f2937",textSecondary:L("--text-secondary")||"#6b7280",border:L("--chart-axis")||"#b9b2a6",axis:L("--chart-axis")||"#b9b2a6",split:L("--chart-split")||"#e7e1d6",up:L("--qc-market-up")||"#e63946",down:L("--qc-market-down")||"#2e7d32"},fa=[];for(let Xe=1;Xe<pt.length;Xe++)pt[Xe]!=null&&pt[Xe-1]!=null&&Math.abs(pt[Xe]-pt[Xe-1])>=15&&fa.push({name:"大幅变化",coord:[lt[Xe],pt[Xe]],value:(pt[Xe]-pt[Xe-1]>0?"↑":"↓")+Math.abs(pt[Xe]-pt[Xe-1]),symbol:"pin",symbolSize:32,itemStyle:{color:pt[Xe]-pt[Xe-1]>0?At.up:At.down}});const ra=echarts.init(R),kt=window.__quantModules&&window.__quantModules.echartsTheme;kt&&typeof kt.getEChartsTheme=="function"&&ra.setOption(kt.getEChartsTheme()),ra.setOption({tooltip:{trigger:"axis",backgroundColor:L("--bg-card")||"#ffffff",borderColor:At.border,textStyle:{color:At.textPrimary},formatter:function(Xe){var qt;const Ot=(qt=Xe[0])==null?void 0:qt.dataIndex,qa=Ot!=null?Jt[Ot]:"";return lt[Ot]+"<br/>得分: "+pt[Ot]+(qa?" ("+qa+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:lt,axisLabel:{fontSize:10,rotate:30,color:At.textSecondary},axisLine:{lineStyle:{color:At.axis}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:At.textSecondary},splitLine:{lineStyle:{color:At.split}}},series:[{data:pt,type:"line",smooth:!0,lineStyle:{color:At.primary,width:2},itemStyle:{color:At.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:L("--primary-rgb")?"rgba("+L("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:L("--primary-rgb")?"rgba("+L("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:fa.length>0?{data:fa}:void 0}]}),Bt[se]=ra};Pe?Pe().then(Re).catch(()=>{}):Re()}function Da(){Object.keys(Zt).forEach(R=>{const se=Zt[R];if(!(!se||!se.el)){if(Bt[R]){try{Bt[R].dispose()}catch{}delete Bt[R]}Ca(se.el,R,se.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(Da));async function W(R){U.value=R,M.value=!1,O();try{const se=await fetch(`/api/calendar/stock/${R.stock_code}?date=${b.value}`);_.value=await se.json()}catch{_.value={stock:R.stock_code,name:R.stock_name||R.stock_code,total_days:0,history:[]}}y.value=!0,k.value="ai"}async function pe(){if(!Z.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const R=Z.value.split(/[,，\s]+/).filter(lt=>lt.trim());if(R.length===0)return;z.value=!0,s.value=R.length,S.value=0,i.value="",h.value={},X.value={},N.value={},R.forEach(lt=>{h.value[lt]="pending",X.value[lt]=null});const se={"Content-Type":"application/json"};let ce=0,Pe=0,Re=!1;try{const lt=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:se,body:JSON.stringify({stock_codes:R})});if(lt.ok&&lt.body){Re=!0;const pt=lt.body.getReader(),Jt=new TextDecoder("utf-8");let At="",fa=!1;for(;!fa;){const{value:ra,done:kt}=await pt.read();fa=kt,At+=Jt.decode(ra||new Uint8Array,{stream:!fa});let Xe;for(;(Xe=At.indexOf(`

`))>=0;){const Ot=At.slice(0,Xe);At=At.slice(Xe+2);const qa=Ot.split(`
`).find(Qa=>Qa.startsWith("data: "));if(!qa)continue;let qt;try{qt=JSON.parse(qa.slice(6))}catch{continue}qt.type==="start"?qt.total&&(s.value=qt.total):qt.type==="item"?(S.value++,i.value=qt.stock_code,qt.success?(h.value[qt.stock_code]="success",X.value[qt.stock_code]=qt,ce++):(h.value[qt.stock_code]="error",N.value[qt.stock_code]=qt.error||"评估失败",Pe++)):qt.type==="done"&&(typeof qt.success=="number"&&(ce=qt.success),typeof qt.fail=="number"&&(Pe=qt.fail))}}if(At.trim()){const ra=At.split(`
`).find(kt=>kt.startsWith("data: "));if(ra)try{const kt=JSON.parse(ra.slice(6));kt.type==="item"?(S.value++,i.value=kt.stock_code,kt.success?(h.value[kt.stock_code]="success",X.value[kt.stock_code]=kt,ce++):(h.value[kt.stock_code]="error",N.value[kt.stock_code]=kt.error||"评估失败",Pe++)):kt.type==="done"&&(typeof kt.success=="number"&&(ce=kt.success),typeof kt.fail=="number"&&(Pe=kt.fail))}catch{}}}}catch{Re=!1}if(!Re){ce=0,Pe=0,S.value=0;for(const lt of R){i.value=lt,h.value[lt]="running";try{const Jt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:se,body:JSON.stringify({stock_code:lt.trim(),stock_name:lt.trim()})})).json();Jt.success?(h.value[lt]="success",X.value[lt]=Jt.data,ce++):(h.value[lt]="error",N.value[lt]=Jt.message&&Jt.message!=="success"?Jt.message:"评估失败",Pe++)}catch(pt){h.value[lt]="error",N.value[lt]="网络错误: "+(pt&&pt.message?pt.message:pt),Pe++}S.value++}}i.value="",await xt();const zt=R.length;setTimeout(()=>{Pe===0?ElementPlus.ElMessage.success(`评估完成 成功 ${ce}/${zt}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${ce}/${zt} · 失败 ${Pe}`),z.value=!1},500)}return{quickEvalStock:Q,evalStrategy:oe,watchlistSort:fe,watchlist:Ce,watchlistCodes:Y,sortedWatchlist:ae,getWatchlistScore:ye,getLatestScore:Te,addSearchResult:ue,evaluatedCodes:be,klineLoadedCodes:ke,markKlineLoaded:re,watchlistSearch:te,watchlistResults:ve,watchlistSearching:Le,dataRefreshConfig:Fe,dataRefreshReloading:He,dataRefreshSaving:Mt,aiHistoryLoading:de,aiHistoryError:De,aiHistoryTotal:bt,aiHistoryLoadingMore:st,hasMoreAiHistory:Nt,loadMoreAiHistory:G,watchlistLoading:ta,doAiEvaluate:Rt,loadAiHistory:xt,deleteSingleHistory:we,toggleSelectHistory:Ze,clearSelection:Ke,clearWatchlistSelection:St,batchReevaluateHistory:Tt,batchAddToWatchlist:Ft,batchAddToPortfolio:nt,batchRemoveWatchlist:wt,toggleSelectWatchlist:Wt,selectAllHistory:ba,selectAllWatchlist:rt,deleteSelectedHistory:Xt,loadAutoEvaluateConfig:Ct,saveAutoEvaluateConfig:ht,loadWatchlist:aa,addToWatchlist:$e,removeFromWatchlist:Ut,clearWatchlist:da,toggleWatchlist:wa,showStockKline:la,preloadingKline:ia,preloadWatchlistKline:K,watchlistEvaluate:xe,batchEvaluateWatchlist:je,batchEvaluateSelected:ze,searchStockForWatchlist:dt,loadDataRefreshConfig:et,saveDataRefreshConfig:_t,triggerDataReload:Lt,triggerDataPull:Sa,dataPullRunning:yt,groupedByDate:oa,aiHistoryByStock:ua,groupedByMonth:sa,aiHistoryStockCount:va,scoreDistribution:na,quickEvaluate:La,toggleDateExpand:ma,toggleSelectDate:Ia,toggleSelectMonth:ka,toggleStockExpand:Na,toggleSelectStock:Pa,registerTrendChart:Ca,viewAiResult:W,doBatchEvaluate:pe,realtimeQuotes:Ye,realtimeDegraded:Qe,realtimeWsState:We,connectRealtimeQuotes:Je,disconnectRealtimeQuotes:ft,quoteWarningFor:ea,realtimeQuoteColor:$t,realtimePriceText:A,realtimePctText:le,realtimeRatioText:Ee,REALTIME_DEGRADED_TEXT:Pt,REALTIME_FALLBACK_TEXT:_e}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:e,computed:m}=Vue,t=e([]),c=e(null),d=e([]),x=e(!1),r=e(!1),n=e(!1),p=e({stock_code:"",stock_name:"",cost_price:null,quantity:null}),o=e(!1),q=e(!1),b=e({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),_=e(!1),k=e("positions"),y=e(30),I=e(!1),M=e(""),u=e(!1),l=e({dates:[],equity:[],values:[]}),g=m(()=>t.value.length),E=e("metrics"),O=e(!1),w=e(""),D=e(!1),T=e({metrics:null,rules:[],rebalance:null}),B=m(function(){const v=T.value.metrics;if(!v)return[];const j=function($){return $==null?"--":Number($).toFixed(2)+"%"},ne=function($){return $==null?"--":Number($).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:j(v.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:j(v.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:j(v.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:j(v.cvar)},{key:"max_drawdown",label:"最大回撤",value:j(v.max_drawdown)},{key:"annual_return",label:"年化收益",value:j(v.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:ne(v.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:ne(v.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:ne(v.calmar_ratio)},{key:"beta",label:"Beta",value:ne(v.beta)}]});async function F(){O.value=!0;try{const v=await(await fetch("/api/portfolio/risk?days=60")).json(),j=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),ne=v&&v.success?v.risk:null,$=j&&j.success?j.rules||[]:[],L=j&&j.success?j.rebalance:null;T.value={metrics:ne,rules:$,rebalance:L},D.value=!!(ne&&Object.keys(ne).length>0),w.value=v&&v.note||j&&j.note||""}catch(v){console.warn("[portfolio] 加载风险数据失败:",v),D.value=!1,w.value="风险数据加载失败"}finally{O.value=!1}}async function U(){x.value=!0,r.value=!1;try{const j=await(await fetch("/api/portfolio")).json();j.success?(t.value=j.positions||[],c.value=j.summary||null):r.value=!0}catch(v){console.warn("[portfolio] 加载持仓失败:",v),r.value=!0}finally{x.value=!1}}async function J(){const v=p.value,j=(v.stock_code||"").trim();if(!j){ElementPlus.ElMessage.warning("请输入股票代码");return}const ne=Number(v.cost_price),$=Number(v.quantity);if(!(ne>0)||!($>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}o.value=!0;try{const Q=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:j,stock_name:(v.stock_name||"").trim(),cost_price:ne,quantity:$})})).json();Q.success?(ElementPlus.ElMessage.success(Q.message||"持仓已更新"),n.value=!1,p.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await U(),N(y.value)):ElementPlus.ElMessage.error(Q.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{o.value=!1}}async function ee(v){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+v+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const ne=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(v),{method:"DELETE"})).json();ne.success?(ElementPlus.ElMessage.success("已删除持仓"),await U(),z(),N(y.value)):ElementPlus.ElMessage.error(ne.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function H(v,j){b.value={stock_code:v,stock_name:j||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},q.value=!0}async function Z(){const v=b.value;if(!v.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const j=Number(v.price),ne=Number(v.quantity);if(!(j>0)||!(ne>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}_.value=!0;try{const L=await(await fetch("/api/portfolio/trades",{method:"POST",headers:_authHeaders(),body:JSON.stringify({stock_code:v.stock_code,stock_name:v.stock_name||"",action:v.action,price:j,quantity:ne,trade_date:v.trade_date||"",note:(v.note||"").trim()})})).json();L.success?(ElementPlus.ElMessage.success(L.message||"调仓已记录"),q.value=!1,await U(),await z(),N(y.value)):ElementPlus.ElMessage.error(L.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{_.value=!1}}async function z(){try{const j=await(await fetch("/api/portfolio/trades")).json();j.success&&(d.value=j.trades||[])}catch(v){console.warn("[portfolio] 加载调仓记录失败:",v)}}const s=v=>(getComputedStyle(document.documentElement).getPropertyValue(v)||"").trim();function S(v){if(!v||!v.length)return[];let j=v[0]||0;const ne=[];for(let $=0;$<v.length;$++){const L=v[$]||0;L>j&&(j=L),ne.push(j>0?Math.round((L-j)/j*1e3)/10:0)}return ne}function i(){const v={primary:s("--qc-primary-600")||"#b8922a",textPrimary:s("--text-primary")||"#1f2937",textSecondary:s("--text-secondary")||"#6b7280",border:s("--border-light")||"#e5e7eb",up:s("--color-rise")||"#E63946",down:s("--color-fall")||"#2E7D32"},j=l.value;return{tooltip:{trigger:"axis",backgroundColor:s("--bg-card")||"#ffffff",borderColor:v.border,textStyle:{color:v.textPrimary},formatter:function(ne){const $=ne[0]?ne[0].dataIndex:-1,L=j.dates[$]||"",Q=j.equity[$],oe=j.values[$];let fe=L||"";return Q!=null&&(fe+="<br/>组合净值: "+Q),oe!=null&&(fe+="<br/>组合市值: "+oe),fe}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:j.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:v.textSecondary},axisLine:{lineStyle:{color:v.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:v.textSecondary},splitLine:{lineStyle:{color:v.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:v.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:j.equity,smooth:!0,showSymbol:!1,lineStyle:{color:v.primary,width:2},itemStyle:{color:v.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:s("--primary-rgb")?"rgba("+s("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:s("--primary-rgb")?"rgba("+s("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:S(j.equity),smooth:!0,showSymbol:!1,lineStyle:{color:v.down,width:1.5},itemStyle:{color:v.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function h(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function X(v,j,ne){l.value={dates:v||[],equity:j||[],values:ne||[]},u.value=!!v&&v.length>0,u.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",i,{key:"portfolio-equity"}):h()}async function N(v){I.value=!0,M.value="";const j=Number(v)||y.value||30;y.value=j;try{const $=await(await fetch("/api/portfolio/equity_curve?days="+j)).json();$.success?(M.value=$.note||"",X($.dates||[],$.equity||[],$.values||[])):(M.value="数据暂不可用",h())}catch(ne){console.warn("[portfolio] 加载收益曲线失败:",ne),M.value="数据暂不可用",h()}finally{I.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function C(v,j){if(v==null||v===""||isNaN(Number(v)))return"--";const ne=Number(v),$=j??2;return(ne>=0?"+":"")+ne.toFixed($)}function f(v,j){if(v==null||v===""||isNaN(Number(v)))return"--";const ne=Number(v),$=j??2;return(ne>=0?"+":"")+ne.toFixed($)+"%"}function P(v){if(v==null||v===""||isNaN(Number(v)))return"";const j=Number(v);return j>0?"portfolio-up":j<0?"portfolio-down":""}return{positions:t,summary:c,trades:d,loading:x,loadError:r,showAddForm:n,addForm:p,addSaving:o,tradeFormVisible:q,tradeForm:b,tradeSaving:_,portfolioTab:k,equityDays:y,equityLoading:I,equityNote:M,equityHasData:u,portfolioCount:g,loadPortfolio:U,addPosition:J,removePosition:ee,openTradeForm:H,submitTrade:Z,loadTrades:z,loadEquity:N,fmtSigned:C,fmtSignedPct:f,signClass:P,riskTab:E,riskLoading:O,riskNote:w,riskHasData:D,riskData:T,riskMetricList:B,loadRisk:F}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantBacktest=e()})(typeof self<"u"?self:void 0,function(){function a(n,p){var o=Number(n);return isFinite(o)?o:typeof p=="number"?p:0}function e(n){var p=Array.isArray(n)?n:[];if(p.length<2)return null;for(var o=-1/0,q=0,b=0,_=0,k=0,y=0;y<p.length;y++){var I=a(p[y].equity!=null?p[y].equity:p[y].value);I>o&&(o=I,q=y);var M=o>0?(o-I)/o*100:0;M>b&&(b=M,_=q,k=y)}function u(l){return p[l]&&p[l].date?p[l].date:""}return{maxDrawdown:Math.round(b*100)/100,peakIndex:_,troughIndex:k,peakDate:u(_),troughDate:u(k)}}function m(n){for(var p=n||{},o={},q=Object.keys(p).sort(),b=0;b<q.length;b++){var _=q[b],k=String(_).slice(0,4);/^\d{4}$/.test(k)&&(o[k]=(o[k]||0)+a(p[_]))}var y=Object.keys(o).sort();return y.map(function(I){return{year:I,return:Math.round(o[I]*100)/100}})}function t(n){var p=Array.isArray(n)?n:[],o={};p.forEach(function(_){(_.points||[]).forEach(function(k){k&&k.date&&(o[k.date]=1)})});var q=Object.keys(o).sort(),b=p.map(function(_){var k={};return(_.points||[]).forEach(function(y){y&&y.date&&(k[y.date]=a(y.value!=null?y.value:y.equity))}),{name:_.name||"",data:q.map(function(y){return y in k?k[y]:null})}});return{dates:q,series:b}}function c(n){var p=n||{},o=function(b){return a(b)},q=function(b,_){var k=o(b);return isFinite(k)?k.toFixed(_):"--"};return[{key:"total_return",label:"总收益",value:q(p.total_return,2),suffix:"%",dir:o(p.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:q(p.annual_return,2),suffix:"%",dir:o(p.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:q(p.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:q(p.sharpe_ratio,2),suffix:"",dir:o(p.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:q(p.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:q(p.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(o(p.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:q(p.volatility,2),suffix:"%",dir:""}]}function d(n){var p=n==null?"":String(n);return/[",\n]/.test(p)?'"'+p.replace(/"/g,'""')+'"':p}function x(n){var p=n||{},o=[];o.push("回测指标"),o.push("指标,数值"),(p.metrics||[]).forEach(function(u){o.push(d(u.label)+","+d((u.value||"")+(u.suffix||"")))}),o.push(""),o.push("净值曲线");var q=["日期"].concat((p.series||[]).map(function(u){return u.name}));o.push(q.map(d).join(","));for(var b=p.dates||[],_=p.series||[],k=0;k<b.length;k++){for(var y=[b[k]],I=0;I<_.length;I++){var M=_[I].data&&_[I].data[k];y.push(M??"")}o.push(y.map(d).join(","))}return o.push(""),o.push("交易明细"),o.push("日期,股票代码,方向,原因"),(p.trades||[]).forEach(function(u){o.push(d(u.date)+","+d(u.stock)+","+d(u.action)+","+d(u.reason))}),o.join(`
`)}function r(n){return n==="buy"?"买入":n==="sell"?"卖出":n||""}return{toNum:a,computeMaxDrawdownRegion:e,buildAnnualReturns:m,buildNavSeries:t,buildMetrics:c,buildBacktestCsv:x,tradeActionText:r}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:e,computed:m}=Vue,t=window.QuantBacktest||{},c=a||{},d=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],r=(Array.isArray(c.backtestStrategies)&&c.backtestStrategies.length?c.backtestStrategies:d).map(s=>({id:s.id,name:s.name})),n=e(r.length?[r[0].id]:[]),p=e(I()),o=e(1e5),q=e(3e-4),b=e(!1),_=e(!1),k=e(null),y=e("");function I(){const s=new Date,S=new Date;S.setFullYear(S.getFullYear()-1);const i=h=>h.getFullYear()+"-"+String(h.getMonth()+1).padStart(2,"0")+"-"+String(h.getDate()).padStart(2,"0");return[i(S),i(s)]}function M(s){const S=n.value.indexOf(s);S>=0?n.value.length>1&&n.value.splice(S,1):n.value.push(s)}function u(s){const S=r.find(i=>i.id===s);return S?S.name:s}function l(s){const S=s.summary||s;return{strategy_id:S.strategy_id,start_date:S.start_date,end_date:S.end_date,total_days:S.total_days,total_return:S.total_return,annual_return:S.annual_return,max_drawdown:S.max_drawdown,volatility:S.volatility,sharpe_ratio:S.sharpe_ratio,sortino_ratio:S.sortino_ratio,win_rate:S.win_rate,profit_loss_ratio:S.profit_loss_ratio,avg_positions:S.avg_positions!=null?S.avg_positions:S.avg_positions_per_day,total_trades:S.total_trades,turnover_rate:S.turnover_rate,success:S.success!==!1,message:S.message||"",insample_total_return:S.insample_total_return!=null?S.insample_total_return:null,outsample_total_return:S.outsample_total_return!=null?S.outsample_total_return:null,out_sample_ratio:S.out_sample_ratio!=null?S.out_sample_ratio:.2,overfit_warning:!!S.overfit_warning,overfit_reason:S.overfit_reason||""}}function g(s){return(Array.isArray(s)?s:[]).map(S=>({date:S.date,value:S.equity!=null?S.equity:S.value}))}function E(s,S){const i=l(S),h=g(S.equity_curve),X=S.monthly_returns||{},N=Array.isArray(S.trade_history)?S.trade_history:[],C={id:s,name:u(s),summary:i,equityCurve:h,monthlyReturns:X,trades:N};let f=null;if(b.value){const P=Number(o.value)||1e5;f={name:"现金基准",points:h.map(v=>({date:v.date,value:P}))}}return{success:!0,mode:"single",strategies:[C],primary:C,benchmark:f,period:(i.start_date||"")+" ~ "+(i.end_date||"")}}function O(s,S){const i=S.strategy_results||{},h=s.map(C=>{const f=i[C];if(!f)return null;const P=l(f);return{id:C,name:u(C),summary:P,equityCurve:g(f.equity_curve),monthlyReturns:f.monthly_returns||{},trades:Array.isArray(f.trade_history)?f.trade_history:[]}}).filter(C=>C&&C.summary.success!==!1),X=h.length?h[0]:null;let N=null;return b.value&&(N={name:"等权组合基准",points:g(S.portfolio_equity)}),{success:h.length>0,mode:"multi",strategies:h,primary:X,benchmark:N,period:X?X.summary.start_date+" ~ "+X.summary.end_date:""}}const w=m(()=>{const s=k.value;return!s||!s.primary?[]:t.buildMetrics?t.buildMetrics(s.primary.summary):[]}),D=m(()=>{const s=k.value;return!s||!s.primary||!s.primary.monthlyReturns?[]:t.buildAnnualReturns?t.buildAnnualReturns(s.primary.monthlyReturns):[]}),T=m(()=>{const s=k.value;return!s||!s.primary?[]:(s.primary.trades||[]).slice().sort((S,i)=>String(i.date||"").localeCompare(String(S.date||"")))}),B=m(()=>{const s=k.value;return!s||!s.strategies||s.strategies.length<2?[]:s.strategies.map(S=>({name:S.name,metrics:t.buildMetrics?t.buildMetrics(S.summary):[]}))}),F=m(()=>{const s=k.value;return!s||!s.primary?null:t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(s.primary.equityCurve):null});async function U(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const S=n.value;if(!S.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const i=p.value,h={start_date:i&&i[0]||void 0,end_date:i&&i[1]||void 0},X={"Content-Type":"application/json"};_.value=!0,k.value=null,y.value="";try{if(S.length===1){const N=Object.assign({},h,{initial_capital:Number(o.value)||1e5,commission_rate:Number(q.value)||3e-4}),C=await fetch("/api/backtest/"+encodeURIComponent(S[0]),{method:"POST",headers:X,body:JSON.stringify(N)});if(!C.ok){const P=await C.json().catch(()=>({}));throw new Error(P.detail||"回测失败")}const f=await C.json();if(!f.success)throw new Error(f.message||"回测失败");k.value=E(S[0],f)}else{const N=await fetch("/api/backtest/multi",{method:"POST",headers:X,body:JSON.stringify(Object.assign({},h,{strategy_ids:S}))});if(!N.ok){const f=await N.json().catch(()=>({}));throw new Error(f.detail||"回测失败")}const C=await N.json();if(!C.success)throw new Error(C.message||"多策略回测失败");if(k.value=O(S,C.data||{}),!k.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(N){y.value=N&&N.message?N.message:"回测失败",ElementPlus.ElMessage.error(y.value)}finally{_.value=!1}}function J(){const s=k.value,S={dates:[],series:[]};if(!s)return S;const i=s.strategies.map(X=>({name:X.name,points:X.equityCurve}));s.benchmark&&s.benchmark.points&&s.benchmark.points.length&&i.push({name:s.benchmark.name,points:s.benchmark.points});const h=t.buildNavSeries?t.buildNavSeries(i):S;return ee(h,s)}function ee(s,S){const i=j=>(getComputedStyle(document.documentElement).getPropertyValue(j)||"").trim(),h={primary:i("--qc-primary-600")||"#b8922a",success:i("--color-success")||"#4CAF50",accent:i("--color-accent")||"#F59E0B",info:i("--color-info")||"#1976d2",ai:i("--color-ai")||"#6366f1",textPrimary:i("--text-primary")||"#1f2937",textSecondary:i("--text-secondary")||"#6b7280",border:i("--border-light")||"#e5e7eb",up:i("--color-rise")||"#E63946",down:i("--color-fall")||"#2E7D32",bg:i("--bg-card")||"#ffffff"},X=[h.primary,h.success,h.accent,h.info,h.ai],C=h.bg.length===7&&parseInt(h.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",f=t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(S.primary?S.primary.equityCurve:[]):null,P=f&&f.peakDate&&f.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:h.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+f.maxDrawdown+"%",xAxis:f.peakDate,itemStyle:{color:h.down}},{xAxis:f.troughDate}]]}:void 0,v=s.series.map((j,ne)=>{const $=S.benchmark&&j.name===S.benchmark.name,L=X[ne%X.length];return{name:j.name,type:"line",data:j.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:$?2:2.4,type:$?"dashed":"solid",color:L},itemStyle:{color:L},emphasis:{focus:"series"},...ne===0&&P?{markArea:P}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:C,borderColor:h.border,textStyle:{color:h.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:h.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:s.dates,boundaryGap:!1,axisLine:{lineStyle:{color:h.border}},axisLabel:{color:h.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:h.textSecondary,fontSize:11},splitLine:{lineStyle:{color:h.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:h.border,textStyle:{color:h.textSecondary,fontSize:10}}],series:v}}function H(s){if(!s){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",J,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function Z(){const s=k.value;if(!s||!s.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const S=s.strategies.map(v=>({name:v.name,points:v.equityCurve}));s.benchmark&&S.push({name:s.benchmark.name,points:s.benchmark.points});const i=t.buildNavSeries?t.buildNavSeries(S):{dates:[],series:[]},h=t.tradeActionText||(v=>v),X=T.value.map(v=>({date:v.date,stock:v.stock,action:h(v.action),reason:v.reason})),N=t.buildBacktestCsv?t.buildBacktestCsv({metrics:w.value,dates:i.dates,series:i.series,trades:X}):"",C=new Blob(["\uFEFF"+N],{type:"text/csv;charset=utf-8"}),f=URL.createObjectURL(C),P=document.createElement("a");P.href=f,P.download="backtest-"+s.strategies.map(v=>v.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",P.click(),URL.revokeObjectURL(f),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function z(s,S){return s==null||s===""||isNaN(Number(s))?"--":Number(s).toFixed(S??2)}return{btStrategyOptions:r,btSelectedStrategies:n,toggleBtStrategy:M,btDateRange:p,btCapital:o,btCommissionRate:q,btIncludeBenchmark:b,btRunning:_,btResult:k,btError:y,btMetrics:w,btAnnualReturns:D,btTrades:T,btStrategyMetricsRows:B,btDrawdownRegion:F,runBacktestWorkbench:U,exportBacktestCSV:Z,registerBacktestNavChart:H,btFmtNum:z}}}})();(function(){const{ref:a,computed:e,watch:m,onUnmounted:t}=Vue,c=o=>(getComputedStyle(document.documentElement).getPropertyValue(o)||"").trim(),d=72,x={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},r={stock:"股票",bond:"债券",commodity:"大宗商品",cash:"现金"},n={"🌱":"sprout","🔥":"flame","🌾":"wheat","❄️":"snowflake","📈":"trending-up","📉":"trending-down","📊":"bar-chart-3","💹":"line-chart","🏭":"factory","💰":"banknote","🛢":"fuel"},p={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const o=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"sprout",color:"var(--state-success-solid)",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),q=a({}),b=a(!1),_=a({}),k=a({cycles:[]}),y=a([]),I=a(0),M=a(!1),u=a({autoRefresh:!0,refreshInterval:300}),l=a(""),g=a(""),E=a(!1),O=a("");let w=null;const D={x:0,y:0},T=e(()=>{const Y=q.value;return["recession","recovery","overheat","stagflation"].map(De=>{const ae=Y[De]||{};return{key:De,name:ae.name||De,icon:n[ae.icon]||"bar-chart-3",color:ae.color||c("--text-tertiary")||"#888",bg:"color-mix(in srgb, "+(ae.color||"var(--text-tertiary)")+" 14%, var(--bg-card))",textColor:"color-mix(in srgb, "+(ae.color||"var(--text-tertiary)")+" 48%, var(--qc-foreground))",tagline:ae.allocation&&p[De]||""}})}),B=e(()=>{var de,De,ae,ye;const Y=o.value.indicators||{};return[{key:"pmi",label:"PMI",value:(de=Y.pmi)==null?void 0:de.toFixed(2),color:Y.pmi>=50?c("--color-success")||"#43a047":c("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((De=Y.gdp_growth)==null?void 0:De.toFixed(2))+"%",color:c("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((ae=Y.cpi)==null?void 0:ae.toFixed(2))+"%",color:Y.cpi>1.2?c("--color-danger")||"#E53935":c("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((ye=Y.m2_growth)==null?void 0:ye.toFixed(2))+"%",color:c("--color-success")||"#43a047"}]}),F=Y=>{Y=Y||{};const de=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],De=()=>c("--color-success")||"#43a047",ae=()=>c("--color-danger")||"#E53935",ye=()=>c("--color-warning")||"#FF9800",Te={宽松:De(),中位:ye(),偏低:ae(),高增长:De(),承压:ae(),不利:ae()};return de.map(ue=>{const be=Y[ue.key]||{},ke=be.score||0,re=Math.min(100,Math.max(5,(ke+2)*25)),te=ke>=.3?"var(--bar-fill-ok)":ke>=-.3?"var(--bar-fill-warn)":"var(--bar-fill-bad)",ve=ke>=0?"var(--state-success-text)":"var(--state-danger-text)";return{key:ue.key,label:ue.label,scoreStr:ke.toFixed(2),level:be.level||"—",barWidth:re,barColor:te,scoreColor:ve,color:Te[be.level]||"var(--text-tertiary)"}})},U=e(()=>F(o.value.dimension_scores)),J=e(()=>F(_.value._dimensions)),ee=e(()=>{var de;const Y=((de=o.value.confidence)==null?void 0:de.level)||"";return Y==="高"?"var(--state-success-text)":Y==="中"?"var(--state-warning-text)":Y==="低"?"var(--state-danger-text)":"var(--text-secondary)"}),H=e(()=>{var ae,ye,Te,ue;const Y=q.value,de={recovery:0,overheat:1,stagflation:2,recession:3},De={};for(const[be,ke]of Object.entries(Y))De[be]={name:ke.name,icon:ke.icon,color:ke.color,lightColor:ke.bg_color,duration:"~"+(((ae=ke.historical_stats)==null?void 0:ae.avg_duration_months)||18)+"个月",order:de[be]||0,period:((Te=(ye=ke.case_studies)==null?void 0:ye[0])==null?void 0:Te.split("：")[0])||"",avgMonths:((ue=ke.historical_stats)==null?void 0:ue.avg_duration_months)||18};return De}),Z=e(()=>{var ke,re;const Y=o.value.stage,De={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[Y]||{x:150,y:150},ae=o.value.dimension_scores||{},ye=((ke=ae.growth)==null?void 0:ke.score)||0,Te=((re=ae.inflation)==null?void 0:re.score)||0,ue=Math.max(-30,Math.min(30,ye*15)),be=Math.max(-30,Math.min(30,-Te*15));return{x:De.x+ue,y:De.y+be,prevX:D.x,prevY:D.y}}),z=e(()=>{var ae;const Y=Math.min(100,((ae=o.value.timing)==null?void 0:ae.progress_percent)||0),de=o.value.color||"var(--state-success-solid)",De=Y>100?"linear-gradient(90deg, "+de+", var(--state-warning-solid))":de;return{width:Y+"%",background:De}});function s(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[o.value.stage]||0}function S(){var Y,de;return((de=(Y=o.value)==null?void 0:Y.timing)==null?void 0:de.progress_percent)||0}function i(){var Y,de;return((de=(Y=o.value)==null?void 0:Y.timing)==null?void 0:de.duration_months)||0}function h(){var Y,de;return((de=(Y=o.value)==null?void 0:Y.timing)==null?void 0:de.avg_duration_months)||18}function X(Y){var ye,Te;const de=H.value,De=((ye=de[o.value.stage])==null?void 0:ye.order)||0;return(((Te=de[Y])==null?void 0:Te.order)||0)<De}function N(Y){return x[Y]||Y}function C(Y){return r[Y]||Y}function f(Y){const de=["var(--state-success-tint)","var(--state-warning-tint)","var(--state-info-tint)","var(--qc-muted)"];return de[Y-1]||de[3]}async function P(){try{const de=await(await fetch("/api/market/merrill-clock/stages")).json();de.success&&de.data&&(q.value=de.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function v(){M.value=!0;try{ne();const de=await(await fetch("/api/market/merrill-clock/timeline")).json();if(de.success&&de.data){const De=Array.isArray(de.data.cycles)?de.data.cycles.slice().reverse():[];k.value={cycles:De}}}catch{console.warn("获取美林时钟时间轴失败")}finally{M.value=!1}}async function j(Y){await L(Y)}async function ne(){try{const de=await(await fetch("/api/market/merrill-clock/snapshots?limit=30")).json();de&&de.success&&de.data&&(y.value=de.data.items||[],I.value=de.data.total||0)}catch{console.warn("获取美林时钟评估轨迹失败")}}async function $(){var Y,de;try{const ae=await(await fetch("/api/market/merrill-clock")).json(),ye=ae.stage||"recovery",Te=q.value[ye]||{};if(o.value={...Te,...ae,stage_cn:ae.stage_cn||Te.stage_cn||"",stage_name:ae.stage_name||Te.name||"",name:ae.name||Te.name||"复苏期"},l.value=new Date().toLocaleTimeString("zh-CN"),O.value&&O.value!==ye){const ue=q.value,be=((Y=ue[O.value])==null?void 0:Y.name)||O.value,ke=((de=ue[ye])==null?void 0:de.name)||ye;ElementPlus.ElMessage({message:"美林时钟阶段切换："+be+" → "+ke,type:"warning",duration:6e3,showClose:!0})}O.value=ye}catch(De){console.error("获取美林时钟失败:",De);const ae=q.value.recovery||{};o.value={...ae,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function L(Y){var De;b.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",_.value=q.value[Y]||q.value.recovery||{};const de=((De=o.value)==null?void 0:De.stage)===Y;_.value._isCurrent=de,de&&o.value&&(_.value._nextPrediction=o.value.next_stage_prediction,_.value._confidence=o.value.confidence,_.value._stage=o.value.stage,_.value._dimensions=o.value.dimension_scores);try{const ye=await(await fetch("/api/market/merrill-clock/stage/"+Y)).json();if(ye.success&&ye.data){const Te={...q.value[Y],...ye.data};Te._is_current!==void 0&&(Te._isCurrent=Te._is_current),Te._current_timing&&(Te._currentTiming=Te._current_timing),Te._last_period&&(Te._lastPeriod=Te._last_period),_.value._nextPrediction&&(Te._nextPrediction=_.value._nextPrediction),_.value._confidence&&(Te._confidence=_.value._confidence),_.value._stage&&(Te._stage=_.value._stage),_.value._dimensions&&(Te._dimensions=_.value._dimensions),Object.assign(_.value,Te)}}catch(ae){console.warn("获取阶段详情失败:",ae)}}function Q(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:u.value.autoRefresh,refreshInterval:u.value.refreshInterval})),u.value.autoRefresh?(clearInterval(w),w=setInterval($,u.value.refreshInterval*1e3)):clearInterval(w),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function oe(){E.value=!0,g.value="";try{const de=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();de.success?(g.value="重评估完成："+(de.stage_name||de.stage),await $(),ElementPlus.ElMessage.success("重评估完成")):(g.value=de.message||"重评估失败",ElementPlus.ElMessage.error(de.message||"重评估失败"))}catch{g.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{E.value=!1}}function fe(){const Y=localStorage.getItem("merrill_clock_config");if(Y)try{const de=JSON.parse(Y);u.value={...u.value,...de}}catch{}u.value.autoRefresh&&(w=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),$()},u.value.refreshInterval*1e3))}function Ce(){w&&clearInterval(w)}return t(()=>{Ce()}),{merrillData:o,merrillStagesConfig:q,showMerrillDetail:b,merrillDetailData:_,merrillTimeline:k,merrillSnapshots:y,merrillSnapshotsTotal:I,fetchMerrillSnapshots:ne,timelineLoading:M,merrillClockConfig:u,merrillClockLastUpdated:l,merrillReevalResult:g,merrillReevalLoading:E,stages:T,indicatorList:B,dimensionScoreList:U,detailDimensionScoreList:J,confidenceColor:ee,timelineStages:H,clockPosition:Z,merrillProgressStyle:z,FULL_CYCLE_MONTHS:d,getStageAngle:s,getCycleProgress:S,getCurrentStageMonths:i,getStageTotalMonths:h,isStageCompleted:X,getCharLabel:N,getAssetName:C,getRankColor:f,fetchMerrillStages:P,fetchMerrillClock:$,loadMerrillTimeline:v,showTimelineStage:j,showStageDetail:L,saveMerrillClockConfig:Q,doMerrillReevaluate:oe,startAutoRefresh:fe,stopAutoRefresh:Ce}}})();(function(){function a(r){return getComputedStyle(document.documentElement).getPropertyValue(r).trim()}var e=[210,28,165,290,348,190,52,250];function m(){var r=!1;try{r=document.documentElement.getAttribute("data-theme-mode")==="dark"}catch{}var n=r?62:58,p=r?62:40;return e.map(function(o){return"hsl("+o+", "+n+"%, "+p+"%)"})}function t(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:a("--chart-bg")||"transparent",color:m(),legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const c=[];function d(r){typeof r=="function"&&c.push(r)}function x(){c.slice().forEach(function(r){try{r()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:t,categoricalPalette:m,registerChart:d,refreshAllCharts:x,init(){return{getEChartsTheme:t,registerChart:d,refreshAllCharts:x}}}})();(function(){const{ref:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const m=e("qcState");try{const d=localStorage.getItem("quant_sidebar_collapsed");d!==null&&m.sidebarCollapsed&&(m.sidebarCollapsed.value=d==="1")}catch{}if(!m)return{};const t=async d=>{if(window.__quantGoPage){await window.__quantGoPage(d.key,d.subPages[0]||"");return}m.currentPage.value=d.key,m.currentSubPage.value=d.subPages[0]||""},c=()=>{m.sidebarCollapsed.value=!m.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",m.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:m.menus,currentPage:m.currentPage,sidebarCollapsed:m.sidebarCollapsed,navigate:t,toggle:c,sanitizeHtml:m.sanitizeHtml,keyClick:m.keyClick,t:m.t}}}})();const Ma={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(a){const e=a,m={"layout-dashboard":Qv,calendar:Yv,bot:Gv,"flask-conical":Uv,zap:Wv,settings:Kv,"chevron-down":Bv,"chevron-right":Hv,"chevron-left":Fv,menu:Vv,search:jv,bell:Ov,sun:Nv,moon:Iv,user:Lv,"user-round":Av,home:zv,x:Rv,database:Dv,activity:Pv,clock:Tv,"bar-chart-3":Mv,shield:Ev,"hard-drive":qv,"file-text":Cv,users:Sv,cpu:xv,"pie-chart":_v,info:kv,"log-out":wv,palette:bv,languages:yv,refresh:hv,download:gv,"external-link":pv,command:fv,sparkles:mv,"trending-up":vv,"trending-down":uv,"circle-dot":dv,check:cv,"alert-triangle":rv,loader:ov,"arrow-left":iv,"arrow-right":lv,eye:nv,"eye-off":sv,lock:av,"sliders-horizontal":tv,play:ev,history:Zu,layers:Xu,"line-chart":$u,target:Ju,"search-check":Qu,star:Yu,"message-circle":Gu,"calendar-days":Uu,"calendar-range":Wu,"calendar-check":Ku,brain:Bu,lightbulb:Hu,"octagon-x":Fu,flag:Vu,package:ju,"clipboard-list":Ou,pin:Nu,"radio-tower":Iu,gauge:Lu,landmark:Au,"candlestick-chart":zu,wallet:Ru,"badge-check":Du,key:Pu,factory:Tu,trophy:Mu,rocket:Eu,flame:qu,"map-pin":Cu,"scroll-text":Su,"book-open":xu,dna:_u,"bar-chart":ku,plus:wu,"star-off":bu,upload:yu,gem:hu,"folder-open":gu,link:pu,save:fu,"trash-2":mu,pause:vu,"help-circle":uu,"play-circle":du,pencil:cu,folder:ru,code:ou,sprout:iu,wheat:lu,snowflake:nu,fuel:su,banknote:au,send:tu,inbox:eu,"wifi-off":Zd,"check-circle-2":Xd,"x-circle":$d},t=()=>m[e.name]||m["circle-dot"];return(c,d)=>(me(),ha(Od(t()),{size:a.size,"stroke-width":a.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},Ta=(a,e)=>{const m=a.__vccOpts||a;for(const[t,c]of e)m[t]=c;return m},Jv={name:"qc-sidebar",components:{AppIcon:Ma},setup(){const a=Aa("qcState");if(!a)return{};const e=it(()=>a.menus&&a.menus.value||[]),m=it(()=>a.currentPage&&a.currentPage.value||""),t=it(()=>a.navMode&&a.navMode.value||"subnav"),c=it({get:()=>a.sidebarCollapsed&&a.sidebarCollapsed.value||!1,set:M=>{a.sidebarCollapsed&&(a.sidebarCollapsed.value=M)}}),d=It({}),x={research:"量化投研",platform:"平台管理"},r=["research","platform"],n=M=>m.value===M.key,p=(M,u)=>m.value===M.key&&a.currentSubPage&&a.currentSubPage.value===u,o=M=>Array.isArray(M.subPages)&&M.subPages.length>1,q=(M,u)=>a.subPageNames&&a.subPageNames[u]||u;function b(M){!o(M)||c.value||(d.value[M.key]=!d.value[M.key])}function _(){e.value.forEach(M=>{d.value[M.key]===void 0&&(d.value[M.key]=n(M))})}async function k(M,u){const l=u||M.subPages&&M.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(M.key,l):(a.currentPage.value=M.key,a.currentSubPage&&(a.currentSubPage.value=l)),a.navigateTo&&a.navigateTo(M.key,l)}function y(){c.value=!c.value;try{localStorage.setItem("sidebar_collapsed",c.value?"1":"0")}catch{}}function I(M){if(M.ctrlKey&&M.key.toLowerCase()==="b"&&(M.preventDefault(),y()),!M.ctrlKey&&!M.metaKey&&!M.altKey&&(M.key==="ArrowDown"||M.key==="ArrowUp")){const u=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),l=u.indexOf(document.activeElement);if(l>=0){M.preventDefault();const g=u[(l+(M.key==="ArrowDown"?1:u.length-1))%u.length];g&&g.focus()}}}return Ya(()=>{_(),document.addEventListener("keydown",I)}),ms(()=>document.removeEventListener("keydown",I)),{state:a,menus:e,currentPage:m,navMode:t,sidebarCollapsed:c,expandedMenus:d,GROUP_LABELS:x,GROUPS:r,isActive:n,isChildActive:p,hasChildren:o,subLabel:q,toggleSubmenu:b,navigate:k,toggleCollapse:y}}},$v={class:"qc-sidebar-logo"},Xv={key:0,class:"qc-logo-text"},Zv={class:"qc-sidebar-nav"},em={key:0,class:"qc-nav-group"},tm={key:0,class:"qc-nav-group-label"},am=["href","aria-current","onClick"],sm={key:0,class:"qc-sidebar-label"},nm={key:1,class:"qc-nav-badge"},lm=["aria-expanded","aria-controls","onClick"],im=["id"],om=["href","aria-current","onClick"],rm={class:"qc-sidebar-child-label"},cm={class:"qc-sidebar-footer"},dm=["aria-expanded","aria-label","title"];function um(a,e,m,t,c,d){const x=Qt("AppIcon"),r=Qt("el-tooltip");return me(),ge("nav",{class:ct(["qc-sidebar",{"is-collapsed":t.sidebarCollapsed}]),"aria-label":"主导航"},[Se("div",$v,[e[1]||(e[1]=jd('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),t.sidebarCollapsed?Be("",!0):(me(),ge("span",Xv,Ve(t.state.t("login.title")),1))]),Se("div",Zv,[(me(!0),ge(ut,null,Et(t.GROUPS,n=>(me(),ge(ut,{key:n},[t.menus.some(p=>p.group===n)?(me(),ge("div",em,[t.sidebarCollapsed?Be("",!0):(me(),ge("span",tm,Ve(t.GROUP_LABELS[n]),1)),(me(!0),ge(ut,null,Et(t.menus.filter(p=>p.group===n),p=>(me(),ge(ut,{key:p.key},[Se("div",{class:ct(["qc-sidebar-item",{"has-children":t.navMode==="tree"&&t.hasChildren(p),"is-child-open":t.navMode==="tree"&&t.expandedMenus[p.key]}])},[vt(r,{content:p.name,placement:"right","show-after":300,disabled:!t.sidebarCollapsed},{default:ga(()=>[Se("a",{class:ct(["qc-sidebar-link",{"is-active":t.isActive(p)}]),href:"#"+p.key,"aria-current":t.isActive(p)?"page":null,onClick:Vt(o=>t.navigate(p),["prevent"])},[vt(x,{name:p.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),t.sidebarCollapsed?Be("",!0):(me(),ge("span",sm,Ve(p.name),1)),!t.sidebarCollapsed&&p.badge?(me(),ge("span",nm,Ve(p.badge),1)):Be("",!0)],10,am)]),_:2},1032,["content","disabled"]),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(p)?(me(),ge("button",{key:0,class:ct(["qc-sidebar-chevron",{"is-open":t.expandedMenus[p.key]}]),"aria-expanded":!!t.expandedMenus[p.key],"aria-controls":"submenu-"+p.key,"aria-label":"展开子菜单",onClick:o=>t.toggleSubmenu(p)},[vt(x,{name:"chevron-down",size:14})],10,lm)):Be("",!0)],2),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(p)&&t.expandedMenus[p.key]?(me(),ge("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+p.key},[(me(!0),ge(ut,null,Et(p.subPages,o=>(me(),ge("a",{key:o,class:ct(["qc-sidebar-item qc-sidebar-child",{"is-active":t.isChildActive(p,o)}]),href:"#"+p.key+"-"+o,"aria-current":t.isChildActive(p,o)?"page":null,onClick:Vt(q=>t.navigate(p,o),["prevent"])},[Se("span",rm,Ve(t.subLabel(p,o)),1)],10,om))),128))],8,im)):Be("",!0)],64))),128))])):Be("",!0)],64))),128))]),Se("div",cm,[Se("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!t.sidebarCollapsed,"aria-label":t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:e[0]||(e[0]=(...n)=>t.toggleCollapse&&t.toggleCollapse(...n))},[vt(x,{name:t.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,dm)])],2)}const vm=Ta(Jv,[["render",um]]),mm={name:"qc-header",components:{AppIcon:Ma},setup(){const a=Aa("qcState");if(!a)return{};const e=It(!1),m=it(()=>a.currentUser&&a.currentUser.value||null),t=it(()=>a.navMode&&a.navMode.value||"subnav"),c=it(()=>{const ae=a.currentPage&&a.currentPage.value,ye=(a.menus&&a.menus.value||[]).find(Te=>Te.key===ae);return!!(ye&&ye.subPages&&ye.subPages.length)}),d=it(()=>{const ae=a.currentPage&&a.currentPage.value,ye=a.currentPageName&&a.currentPageName.value;if(ye)return ye;const Te=(a.menus&&a.menus.value||[]).find(ue=>ue.key===ae);return Te&&Te.name||ae||""}),x=it(()=>{const ae=a.currentSubPage&&a.currentSubPage.value;return ae&&a.subPageNames&&a.subPageNames[ae]||ae||""}),r=It(typeof window<"u"?window.innerWidth<768:!1);function n(){r.value=window.innerWidth<768}Ya(()=>window.addEventListener("resize",n)),ms(()=>window.removeEventListener("resize",n));const p=It(!1),o=it(()=>{const ae=a.currentSubPage&&a.currentSubPage.value;return ae&&a.subPageNames&&a.subPageNames[ae]||ae||""}),q=it(()=>{const ae=a.currentPage&&a.currentPage.value,ye=(a.menus&&a.menus.value||[]).find(Te=>Te.key===ae);return(ye&&ye.subPages||[]).map(Te=>({key:Te,label:a.subPageNames&&a.subPageNames[Te]||Te}))});function b(){p.value=!p.value}function _(){p.value=!1}function k(ae){p.value=!1,a.activateTab&&a.activateTab(a.currentPage.value,ae)}const y=it(()=>(a.currentTheme&&a.currentTheme.value)==="dark"),I=It(!1),M=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],u=it(()=>{const ae=M.find(ye=>ye.value===t.value);return ae&&ae.label||t.value});function l(){I.value=!I.value}function g(){I.value=!1}function E(ae){I.value=!1,a.setNavMode&&a.setNavMode(ae)}const O=it({get:()=>a.searchQuery&&a.searchQuery.value||"",set:ae=>{a.searchQuery&&(a.searchQuery.value=ae)}}),w=It(!1),D=It([]),T=It(!1),B=It(!1);function F(){const ae=localStorage.getItem("quant_token")||"";return ae?{Authorization:"Bearer "+ae,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function U(){T.value=!0,B.value=!1;try{const ye=await(await fetch("/api/alerts/history?limit=8",{headers:F()})).json();ye&&ye.success?D.value=ye.history||[]:D.value=[]}catch{B.value=!0,D.value=[]}finally{T.value=!1}}function J(){w.value=!w.value,w.value&&U()}function ee(){w.value=!1}function H(){w.value=!1,a.activateTab&&a.activateTab("system","notification")}const Z=It(!1),z=a.themeHues||[45,220,0,140,270,320,180,25,250,-1],s=it(()=>{const ae=a.themeHue&&a.themeHue.value;return Number.isFinite(ae)?ae:45}),S=it(()=>a.themeMode&&a.themeMode.value||"system"),i=[{k:"compact",n:"紧凑"},{k:"comfortable",n:"标准"},{k:"spacious",n:"宽松"}],h=it(()=>a.density&&a.density.value||"comfortable");function X(ae){a.changeDensity&&a.changeDensity(ae)}function N(ae){return a.hueColor?a.hueColor(ae):"hsl("+ae+", 75%, 42%)"}const C={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色","-1":"中性"};function f(ae){return a.hueName?a.hueName(ae):C[ae]||"自定义 "+ae}function P(){Z.value=!Z.value}function v(){Z.value=!1}function j(ae){a.changeThemeMode&&a.changeThemeMode(ae)}function ne(ae){a.changeThemeHue&&a.changeThemeHue(ae)}function $(){a.changeThemeMode&&a.changeThemeMode(y.value?"light":"dark")}function L(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}a.sidebarCollapsed&&(a.sidebarCollapsed.value=!a.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",a.sidebarCollapsed.value?"1":"0")}catch{}}function Q(){e.value=!e.value}function oe(){e.value=!1}function fe(ae){return()=>{oe(),ae&&ae()}}function Ce(){oe(),a.handleLogout&&a.handleLogout()}const Y=it(()=>a.marketData&&a.marketData.value||{}),de=It(typeof window<"u"&&localStorage.getItem("qc.hideNonTradingBanner")==="1");return{marketData:Y,bannerDismissed:de,dismissBanner:()=>{de.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},state:a,showUserMenu:e,currentUser:m,isDark:y,searchQuery:O,navMode:t,crumbRoot:d,crumbSub:x,hasToptabs:c,toggleThemeQuick:$,toggleSidebar:L,openUserMenu:Q,closeUserMenu:oe,menuItem:fe,handleLogout:Ce,openBellMenu:w,notifItems:D,notifLoading:T,notifError:B,toggleBell:J,closeBell:ee,goNotificationCenter:H,openThemeMenu:Z,themeHues:z,themeHue:s,themeMode:S,hueColor:N,hueName:f,toggleThemeMenu:P,closeThemeMenu:v,pickThemeMode:j,pickThemeHue:ne,DENSITY_MODES:i,density:h,pickDensity:X,openNavModeMenu:I,NAV_MODES:M,navModeLabel:u,toggleNavModeMenu:l,closeNavModeMenu:g,pickNavMode:E,isMobile:r,openSubnavPicker:p,currentSubLabel:o,subnavOptions:q,toggleSubnavPicker:b,closeSubnavPicker:_,pickSubnav:k}}},fm={class:"qc-header-wrap"},pm={key:0,class:"non-trading-banner",role:"status"},gm={class:"qc-header"},hm={class:"visually-hidden"},ym={class:"qc-header-left"},bm=["aria-label"],wm={key:0,class:"qc-header-subnav"},km=["aria-expanded"],_m={class:"qc-subnav-picker-label"},xm={key:0,class:"qc-subnav-picker-menu",role:"menu"},Sm=["onClick"],Cm={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},qm={class:"qc-crumb qc-crumb-root"},Em={class:"qc-crumb qc-crumb-sub"},Mm={key:1,class:"qc-crumb qc-crumb-root"},Tm={class:"qc-header-center"},Pm={key:0,class:"qc-search-sublabel"},Dm={class:"qc-header-right"},Rm={class:"qc-hdr-pop"},zm=["aria-expanded"],Am={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},Lm={key:0,class:"qc-bell-state"},Im={key:1,class:"qc-bell-state"},Nm={key:2,class:"qc-bell-state"},Om={key:3,class:"qc-bell-list"},jm={class:"qc-bell-item-title"},Vm={class:"qc-bell-item-meta"},Fm={key:0},Hm={class:"qc-bell-item-time"},Bm={class:"qc-hdr-pop"},Km=["aria-expanded"],Wm={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},Um={class:"qc-theme-modes"},Gm=["onClick"],Ym={class:"qc-theme-swatches"},Qm=["title","aria-label","onClick"],Jm={key:0,class:"qc-theme-swatch-check"},$m={class:"qc-theme-custom-label"},Xm={class:"qc-theme-modes"},Zm=["onClick"],ef={key:0,class:"qc-navmode-switch"},tf=["aria-label","title","aria-expanded"],af={key:0,class:"qc-navmode-menu",role:"menu"},sf=["onClick","onKeydown"],nf={class:"qc-navmode-item-main"},lf={class:"qc-user-menu"},of=["aria-label","aria-expanded"],rf={key:0,class:"qc-user-dropdown",role:"menu"},cf={class:"qc-user-dropdown-header"},df={class:"qc-user-dropdown-name"},uf={key:0,class:"qc-user-dropdown-chip"};function vf(a,e,m,t,c,d){var q,b,_,k,y,I,M;const x=Qt("AppIcon"),r=Qt("qc-top-tabs"),n=Qt("el-autocomplete"),p=Qt("el-slider"),o=Vd("click-outside");return me(),ge("div",fm,[t.marketData&&t.marketData.is_trading_day===!1&&!t.bannerDismissed?(me(),ge("div",pm,[vt(x,{name:"alert-triangle",size:14}),e[15]||(e[15]=Se("span",null,"今日非交易日 · 当前展示最近交易日历史数据",-1)),Se("button",{class:"non-trading-banner-close",onClick:e[0]||(e[0]=(...u)=>t.dismissBanner&&t.dismissBanner(...u)),"aria-label":"关闭提示"},"×")])):Be("",!0),Se("header",gm,[Se("h1",hm,Ve(t.crumbRoot||"量化日历"),1),Se("div",ym,[Se("button",{class:"qc-icon-btn","aria-label":(q=t.state.sidebarCollapsed)!=null&&q.value?"展开侧边栏":"折叠侧边栏",onClick:e[1]||(e[1]=(...u)=>t.toggleSidebar&&t.toggleSidebar(...u))},[vt(x,{name:"menu",size:20})],8,bm),t.isMobile?Va((me(),ge("div",wm,[Se("button",{class:"qc-subnav-picker","aria-expanded":t.openSubnavPicker,onClick:e[2]||(e[2]=(...u)=>t.toggleSubnavPicker&&t.toggleSubnavPicker(...u))},[Se("span",_m,Ve(t.currentSubLabel||"二级"),1),vt(x,{name:"chevron-down",size:14})],8,km),t.openSubnavPicker?(me(),ge("div",xm,[(me(!0),ge(ut,null,Et(t.subnavOptions,u=>(me(),ge("div",{key:u.key,class:ct(["qc-subnav-picker-item",{"is-active":u.key===(t.state.currentSubPage&&t.state.currentSubPage.value)}]),role:"menuitem",onClick:l=>t.pickSubnav(u.key)},Ve(u.label),11,Sm))),128))])):Be("",!0)])),[[o,t.closeSubnavPicker]]):Be("",!0),t.navMode==="tree"&&!t.isMobile?(me(),ge("div",Cm,[Se("span",qm,Ve(t.crumbRoot),1),t.crumbSub?(me(),ge(ut,{key:0},[e[16]||(e[16]=Se("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),Se("span",Em,Ve(t.crumbSub),1)],64)):Be("",!0)])):Be("",!0),t.navMode==="toptab"&&!t.isMobile?(me(),ge(ut,{key:2},[t.hasToptabs?(me(),ha(r,{key:0})):(me(),ge("span",Mm,Ve(t.crumbRoot),1))],64)):Be("",!0)]),Se("div",Tm,[vt(n,{class:"qc-header-search",modelValue:t.searchQuery,"onUpdate:modelValue":e[3]||(e[3]=u=>t.searchQuery=u),"fetch-suggestions":t.state.searchStocks,placeholder:t.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:t.state.onSearchSelect},{prefix:ga(()=>[vt(x,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:ga(()=>[...e[17]||(e[17]=[Se("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:ga(u=>{var l,g,E,O,w;return[Se("span",null,Ve((l=u==null?void 0:u.item)==null?void 0:l.icon)+" "+Ve(((g=u==null?void 0:u.item)==null?void 0:g.label)||((E=u==null?void 0:u.item)==null?void 0:E.name)),1),(O=u==null?void 0:u.item)!=null&&O.subLabel?(me(),ge("span",Pm,Ve((w=u==null?void 0:u.item)==null?void 0:w.subLabel),1)):Be("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),Se("div",Dm,[Va((me(),ge("div",Rm,[Se("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":t.openBellMenu,onClick:e[4]||(e[4]=(...u)=>t.toggleBell&&t.toggleBell(...u))},[vt(x,{name:"bell",size:20})],8,zm),t.openBellMenu?(me(),ge("div",Am,[e[18]||(e[18]=Se("div",{class:"qc-bell-header"},"通知",-1)),t.notifLoading?(me(),ge("div",Lm,"加载中...")):t.notifError?(me(),ge("div",Im,"加载失败")):t.notifItems.length?(me(),ge("div",Om,[(me(!0),ge(ut,null,Et(t.notifItems,(u,l)=>(me(),ge("div",{key:u.id||l,class:ct(["qc-bell-item",{"is-fail":u.ok===0}])},[Se("div",jm,Ve(u.title||u.event_type||"事件"),1),Se("div",Vm,[Ea(Ve(u.channel||""),1),u.recipient?(me(),ge("span",Fm," · "+Ve(u.recipient),1)):Be("",!0),Se("span",Hm,Ve(u.created_at||""),1)])],2))),128))])):(me(),ge("div",Nm,"暂无通知")),Se("button",{class:"qc-bell-footer",onClick:e[5]||(e[5]=(...u)=>t.goNotificationCenter&&t.goNotificationCenter(...u))},"前往通知中心 →")])):Be("",!0)])),[[o,t.closeBell]]),Va((me(),ge("div",Bm,[Se("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":t.openThemeMenu,onClick:e[6]||(e[6]=(...u)=>t.toggleThemeMenu&&t.toggleThemeMenu(...u))},[vt(x,{name:"palette",size:20})],8,Km),t.openThemeMenu?(me(),ge("div",Wm,[e[19]||(e[19]=Se("div",{class:"qc-theme-section-label"},"外观模式",-1)),Se("div",Um,[(me(),ge(ut,null,Et([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],u=>Se("button",{key:u.k,class:ct(["qc-theme-mode",{"is-active":t.themeMode===u.k}]),onClick:l=>t.pickThemeMode(u.k)},Ve(u.n),11,Gm)),64))]),e[20]||(e[20]=Se("div",{class:"qc-theme-section-label"},"主题色",-1)),Se("div",Ym,[(me(!0),ge(ut,null,Et(t.themeHues,u=>(me(),ge("button",{key:u,class:ct(["qc-theme-swatch",{"is-active":t.themeHue===u}]),style:Fd({background:t.hueColor(u)}),title:t.hueName(u),"aria-label":t.hueName(u),onClick:l=>t.pickThemeHue(u)},[t.themeHue===u?(me(),ge("span",Jm,"✓")):Be("",!0)],14,Qm))),128))]),vt(p,{class:"qc-theme-slider","model-value":t.themeHue,min:0,max:359,step:1,size:"small",onChange:t.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),Se("div",$m,"自定义 "+Ve(t.themeHue)+"°",1),e[21]||(e[21]=Se("div",{class:"qc-theme-section-label"},"信息密度",-1)),Se("div",Xm,[(me(!0),ge(ut,null,Et(t.DENSITY_MODES,u=>(me(),ge("button",{key:u.k,class:ct(["qc-theme-mode",{"is-active":t.density===u.k}]),onClick:l=>t.pickDensity(u.k)},Ve(u.n),11,Zm))),128))])])):Be("",!0)])),[[o,t.closeThemeMenu]]),t.isMobile?Be("",!0):Va((me(),ge("div",ef,[Se("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+t.navModeLabel,title:"导航形态: "+t.navModeLabel,"aria-expanded":t.openNavModeMenu,onClick:e[7]||(e[7]=(...u)=>t.toggleNavModeMenu&&t.toggleNavModeMenu(...u))},[vt(x,{name:"layers",size:20})],8,tf),t.openNavModeMenu?(me(),ge("div",af,[(me(!0),ge(ut,null,Et(t.NAV_MODES,u=>(me(),ge("div",{key:u.value,class:ct(["qc-user-dropdown-item qc-navmode-item",{"is-active":t.navMode===u.value}]),role:"menuitem",tabindex:"0",onClick:l=>t.pickNavMode(u.value),onKeydown:[pa(Vt(l=>t.pickNavMode(u.value),["prevent"]),["enter"]),pa(Vt(l=>t.pickNavMode(u.value),["prevent"]),["space"])]},[Se("div",nf,[Se("span",null,Ve(u.label),1),t.navMode===u.value?(me(),ha(x,{key:0,name:"check",size:14})):Be("",!0)])],42,sf))),128))])):Be("",!0)])),[[o,t.closeNavModeMenu]]),Va((me(),ge("div",lf,[Se("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((b=t.currentUser)==null?void 0:b.username)||""),"aria-haspopup":"menu","aria-expanded":t.showUserMenu,onClick:e[8]||(e[8]=(...u)=>t.openUserMenu&&t.openUserMenu(...u))},Ve((((_=t.currentUser)==null?void 0:_.username)||"A").charAt(0).toUpperCase()),9,of),t.showUserMenu?(me(),ge("div",rf,[Se("div",cf,[Se("span",df,Ve((k=t.currentUser)==null?void 0:k.username),1),((y=t.currentUser)==null?void 0:y.role)==="guest"?(me(),ge("span",uf,"访客")):Be("",!0)]),((I=t.currentUser)==null?void 0:I.role)==="admin"?(me(),ge("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[9]||(e[9]=u=>t.menuItem(t.state.resetSetupWizard)()),onKeydown:e[10]||(e[10]=pa(Vt(u=>t.menuItem(t.state.resetSetupWizard)(),["prevent"]),["enter"]))},[vt(x,{name:"settings",size:16}),e[22]||(e[22]=Ea(" 重新运行初始化向导 ",-1))],32)):Be("",!0),((M=t.currentUser)==null?void 0:M.role)!=="guest"?(me(),ge("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[11]||(e[11]=u=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})()),onKeydown:e[12]||(e[12]=pa(Vt(u=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[vt(x,{name:"lock",size:16}),e[23]||(e[23]=Ea(" 修改密码 ",-1))],32)):Be("",!0),e[25]||(e[25]=Se("div",{class:"qc-user-dropdown-divider"},null,-1)),Se("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:e[13]||(e[13]=(...u)=>t.handleLogout&&t.handleLogout(...u)),onKeydown:e[14]||(e[14]=pa(Vt((...u)=>t.handleLogout&&t.handleLogout(...u),["prevent"]),["enter"]))},[vt(x,{name:"log-out",size:16}),e[24]||(e[24]=Ea(" 退出登录 ",-1))],32)])):Be("",!0)])),[[o,t.closeUserMenu]])])])])}const mf=Ta(mm,[["render",vf]]),ff=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],pf={name:"qc-subnav",components:{AppIcon:Ma},setup(){const a=Aa("qcState");if(!a)return{};const e=it(()=>a.currentPage&&a.currentPage.value||""),m=it(()=>a.currentSubPage&&a.currentSubPage.value||""),t=it(()=>a.navMode&&a.navMode.value||"subnav"),c=It({}),d=it(()=>a.menus&&a.menus.value||[]),x=it(()=>d.value.find(M=>M.key===e.value)||null),r=it(()=>x.value&&x.value.subPages||[]),n=it(()=>a.currentPageName&&a.currentPageName.value||e.value),p=M=>a.subPageNames&&a.subPageNames[M]||M,o=M=>m.value===M;function q(M){a.openTab?a.openTab(e.value,M):a.currentSubPage&&(a.currentSubPage.value=M);try{localStorage.setItem("quant_last_subpage",M)}catch{}}function b(M){a.openTab?a.openTab(e.value,M.key):a.currentSubPage&&(a.currentSubPage.value=M.key);try{localStorage.setItem("quant_last_subpage",M.key)}catch{}}function _(M){c.value[M]=!c.value[M]}const k={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",notification:"bell",about:"info"}};return{state:a,currentPage:e,currentSubPage:m,navMode:t,subPages:r,currentMenu:x,collapsedGroups:c,pageTitle:n,subLabel:p,isSubActive:o,goSub:q,goSystemItem:b,toggleGroup:_,SYSTEM_GROUPS:ff,subIcon:(M,u)=>k[M]&&k[M][u]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},gf={key:0,class:"qc-subnav-column","aria-label":"二级导航"},hf={class:"qc-subnav-column-header"},yf={class:"qc-subnav-current-label"},bf={class:"qc-subnav-column-body"},wf=["onClick"],kf=["href","onClick"],_f={class:"qc-subnav-group-label"},xf=["href","onClick"],Sf=["href","onClick"];function Cf(a,e,m,t,c,d){const x=Qt("AppIcon");return t.navMode==="subnav"?(me(),ge("aside",gf,[Se("div",hf,[Se("span",yf,Ve(t.pageTitle),1)]),Se("div",bf,[t.currentPage==="system"?(me(!0),ge(ut,{key:0},Et(t.SYSTEM_GROUPS,r=>(me(),ge("div",{key:r.label,class:"qc-subnav-group"},[Se("div",{class:"qc-subnav-group-label",onClick:n=>t.toggleGroup(r.label)},[Se("span",null,Ve(r.label),1),vt(x,{name:"chevron-down",size:12,class:ct({"is-open":!t.collapsedGroups[r.label]})},null,8,["class"])],8,wf),t.collapsedGroups[r.label]?Be("",!0):(me(!0),ge(ut,{key:0},Et(r.items,n=>(me(),ge("a",{key:n.key,class:ct(["qc-subnav-item",{"is-active":t.isSubActive(n.key)}]),href:"#"+n.key,onClick:Vt(p=>t.goSystemItem(n),["prevent"])},[vt(x,{name:n.icon,size:16},null,8,["name"]),Se("span",null,Ve(n.label),1)],10,kf))),128))]))),128)):t.currentPage==="shortterm"?(me(!0),ge(ut,{key:1},Et(t.SHORTTERM_GROUPS,r=>(me(),ge("div",{key:r.label,class:"qc-subnav-group"},[Se("div",_f,[Se("span",null,Ve(r.label),1)]),(me(!0),ge(ut,null,Et(r.items,n=>(me(),ge("a",{key:n,class:ct(["qc-subnav-item",{"is-active":t.isSubActive(n)}]),href:"#"+t.currentPage+"/"+n,onClick:Vt(p=>t.goSub(n),["prevent"])},[vt(x,{name:t.subIcon(t.currentPage,n),size:16},null,8,["name"]),Se("span",null,Ve(t.subLabel(n)),1)],10,xf))),128))]))),128)):(me(!0),ge(ut,{key:2},Et(t.subPages,r=>(me(),ge("a",{key:r,class:ct(["qc-subnav-item",{"is-active":t.isSubActive(r)}]),href:"#"+t.currentPage+"/"+r,onClick:Vt(n=>t.goSub(r),["prevent"])},[vt(x,{name:t.subIcon(t.currentPage,r),size:16},null,8,["name"]),Se("span",null,Ve(t.subLabel(r)),1)],10,Sf))),128))])])):Be("",!0)}const qf=Ta(pf,[["render",Cf]]),Ef=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],Mf={name:"qc-mobile-nav",components:{AppIcon:Ma},setup(){const a=Aa("qcState");if(!a)return{};const e=It(!1),m=It(null),t=It({}),c=it(()=>a.menus&&a.menus.value||[]),d=it(()=>a.currentPage&&a.currentPage.value||""),x={research:"量化投研",platform:"平台管理"},r=["research","platform"];function n(u){return Array.isArray(u.subPages)&&u.subPages.length>0}function p(u){n(u)&&(t.value[u.key]=!t.value[u.key])}function o(u,l){return d.value===u.key&&a.currentSubPage&&a.currentSubPage.value===l}function q(u){return a.subPageNames&&a.subPageNames[u]||u}async function b(u){const l=c.value.find(E=>E.key===u.key),g=l&&l.subPages&&l.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(u.key,g):(a.currentPage.value=u.key,a.currentSubPage&&(a.currentSubPage.value=g)),a.navigateTo&&a.navigateTo(u.key,g)}function _(u,l){e.value=!1;const g=l||u.subPages&&u.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(u.key,g):(a.currentPage.value=u.key,a.currentSubPage&&(a.currentSubPage.value=g)),a.navigateTo&&a.navigateTo(u.key,g)}function k(){e.value=!0,t.value.shortterm===void 0&&(t.value.shortterm=!0)}function y(){e.value=!1;const u=document.querySelector(".qc-header .qc-icon-btn");u&&u.focus()}function I(u){u.detail&&u.detail.open&&k()}function M(u){e.value&&u.key==="Escape"&&y()}return Ya(()=>{window.addEventListener("qc:drawer",I),document.addEventListener("keydown",M)}),ms(()=>{window.removeEventListener("qc:drawer",I),document.removeEventListener("keydown",M)}),{state:a,TABS:Ef,menus:c,currentPage:d,drawerOpen:e,drawerFocusRef:m,drawerExpanded:t,GROUP_LABELS:x,GROUPS:r,hasSub:n,toggleDrawerMenu:p,isDrawerSubActive:o,subLabel:q,goTab:b,goMenu:_,openDrawer:k,closeDrawer:y}}},Tf={class:"qc-mobile-nav","aria-label":"移动端底部导航"},Pf=["aria-current","onClick"],Df={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},Rf={class:"qc-drawer-header"},zf={class:"qc-drawer-brand"},Af={class:"qc-drawer-body"},Lf={key:0},If={class:"qc-nav-group-label"},Nf=["href","aria-current","onClick"],Of={class:"qc-sidebar-label"},jf=["aria-expanded","onClick"],Vf={key:0,class:"qc-drawer-children"},Ff=["href","onClick"],Hf={class:"qc-drawer-footer"},Bf=["title"];function Kf(a,e,m,t,c,d){var r,n;const x=Qt("AppIcon");return me(),ge(ut,null,[Se("nav",Tf,[(me(!0),ge(ut,null,Et(t.TABS,p=>(me(),ge("button",{key:p.key,class:ct(["qc-mobile-tab",{"is-active":t.currentPage===p.key}]),"aria-current":t.currentPage===p.key?"page":null,onClick:o=>t.goTab(p)},[vt(x,{name:p.icon,size:22},null,8,["name"]),Se("span",null,Ve(p.label),1)],10,Pf))),128))]),(me(),ha(Hd,{to:"body"},[t.drawerOpen?(me(),ge("div",{key:0,class:"qc-drawer-backdrop",onClick:e[0]||(e[0]=(...p)=>t.closeDrawer&&t.closeDrawer(...p))})):Be("",!0),t.drawerOpen?(me(),ge("div",Df,[Se("div",Rf,[Se("div",zf,[e[4]||(e[4]=Se("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[Se("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),Se("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),Se("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),Se("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),Se("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),Se("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),Se("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),Se("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),Se("span",null,Ve(t.state.t("login.title")),1)]),Se("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:e[1]||(e[1]=(...p)=>t.closeDrawer&&t.closeDrawer(...p))},[vt(x,{name:"x",size:18})])]),Se("div",Af,[(me(!0),ge(ut,null,Et(t.GROUPS,p=>(me(),ge(ut,{key:p},[t.menus.some(o=>o.group===p)?(me(),ge("div",Lf,[Se("div",If,Ve(t.GROUP_LABELS[p]),1),(me(!0),ge(ut,null,Et(t.menus.filter(o=>o.group===p),o=>(me(),ge("div",{key:o.key,class:"qc-drawer-menu"},[Se("div",{class:ct(["qc-drawer-menu-row",{"is-active":t.currentPage===o.key}])},[Se("a",{class:ct(["qc-sidebar-item",{"is-active":t.currentPage===o.key}]),href:"#"+o.key,"aria-current":t.currentPage===o.key?"page":null,onClick:Vt(q=>t.hasSub(o)?t.toggleDrawerMenu(o):t.goMenu(o),["prevent"])},[vt(x,{name:o.iconName||"",size:18},null,8,["name"]),Se("span",Of,Ve(o.name),1)],10,Nf),t.hasSub(o)?(me(),ge("button",{key:0,class:ct(["qc-sidebar-chevron",{"is-open":t.drawerExpanded[o.key]}]),"aria-expanded":!!t.drawerExpanded[o.key],"aria-label":"展开子菜单",onClick:q=>t.toggleDrawerMenu(o)},[vt(x,{name:"chevron-down",size:14})],10,jf)):Be("",!0)],2),t.drawerExpanded[o.key]?(me(),ge("div",Vf,[(me(!0),ge(ut,null,Et(o.subPages,q=>(me(),ge("a",{key:q,class:ct(["qc-subnav-item",{"is-active":t.isDrawerSubActive(o,q)}]),href:"#"+o.key+"/"+q,onClick:Vt(b=>t.goMenu(o,q),["prevent"])},[Se("span",null,Ve(t.subLabel(q)),1)],10,Ff))),128))])):Be("",!0)]))),128))])):Be("",!0)],64))),128))]),Se("div",Hf,[Se("button",{class:"qc-icon-btn",title:((r=t.state.currentTheme)==null?void 0:r.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:e[2]||(e[2]=p=>{var o;return t.state.changeThemeMode&&t.state.changeThemeMode(((o=t.state.currentTheme)==null?void 0:o.value)==="dark"?"light":"dark")})},[vt(x,{name:((n=t.state.currentTheme)==null?void 0:n.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,Bf),Se("button",{class:"qc-icon-btn",title:"退出登录",onClick:e[3]||(e[3]=p=>t.state.handleLogout&&t.state.handleLogout())},[vt(x,{name:"log-out",size:18})])])])):Be("",!0)]))],64)}const Wf=Ta(Mf,[["render",Kf]]),Uf={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(a,{emit:e,slots:m}){const t=Aa("qcState");function c(o){e("select",o)}function d(o){const q=o.strategy_names||o.strategies||[],b=q.slice(0,3),_=q.length>3?q.length-3:0,k=b.map(y=>({text:y,more:!1}));return _&&k.push({text:"+"+_,more:!0}),k}function x(o){const q=Number(o);return isFinite(q)?q.toFixed(2):"—"}function r(o){const q=Number(o);return isFinite(q)?(q>0?"+":"")+q.toFixed(2)+"%":"—"}function n(o){const q=Number(o.consensus_level);return isFinite(q)?Math.round(q*100):0}function p(o){const q=Number(o&&o.consensus_level);return isFinite(q)&&q>0}return{state:t,slots:m,select:c,displayTags:d,fmtPrice:x,fmtChange:r,pctOf:n,hasConsensus:p}}},Gf={class:"qc-stock-list"},Yf=["data-copy-code","aria-label","onClick","onKeydown"],Qf={key:0,class:"qc-stock-rank"},Jf={class:"qc-stock-info"},$f={class:"qc-stock-code"},Xf={class:"qc-stock-code-num"},Zf={key:0,class:"qc-stock-status is-new"},ep={key:1,class:"qc-stock-status is-out"},tp={class:"qc-stock-name"},ap={key:0,class:"qc-stock-consensus"},sp={key:1,class:"qc-stock-tags"},np={key:2,class:"qc-stock-badge"},lp={key:3,class:"qc-stock-data"},ip={class:"qc-stock-price"},op={key:4,class:"qc-stock-extra"},rp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},cp=["data-copy-code","aria-label","onClick","onKeydown"],dp={key:0,class:"qc-stock-rank"},up={class:"qc-stock-info"},vp={class:"qc-stock-code"},mp={class:"qc-stock-code-num"},fp={key:0,class:"qc-stock-status is-new"},pp={key:1,class:"qc-stock-status is-out"},gp={class:"qc-stock-name"},hp={key:0,class:"qc-stock-consensus"},yp={key:1,class:"qc-stock-tags"},bp={key:2,class:"qc-stock-badge"},wp={key:3,class:"qc-stock-data"},kp={class:"qc-stock-price"},_p={key:4,class:"qc-stock-extra"},xp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function Sp(a,e,m,t,c,d){const x=Qt("qc-state-panel"),r=Qt("qc-virtual-list");return me(),ge("div",Gf,[m.loading?(me(),ha(x,{key:0,type:"loading"})):m.items.length?(me(),ge(ut,{key:2},[m.virtual?(me(),ha(r,{key:0,items:m.items,"row-height":m.rowHeight},{default:ga(({item:n,index:p})=>[Se("div",{class:ct(["qc-stock-row",{"is-active":m.activeCode===n.code}]),"data-copy-code":m.copyCode?n.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(n.name||"")+" "+(n.code||""),onClick:o=>t.select(n),onKeydown:[pa(Vt(o=>t.select(n),["prevent"]),["enter"]),pa(Vt(o=>t.select(n),["prevent"]),["space"])]},[m.showRank?(me(),ge("div",Qf,Ve(p+1),1)):Be("",!0),Se("div",Jf,[Se("div",$f,[Se("span",Xf,Ve(n.code),1),n.status==="new"?(me(),ge("span",Zf,Ve(m.statusText.new),1)):n.status==="out"?(me(),ge("span",ep,Ve(m.statusText.out),1)):Be("",!0)]),Se("div",tp,[Ea(Ve(n.name)+" ",1),ca(a.$slots,"name-suffix",{item:n,index:p})]),m.showConsensus&&t.hasConsensus(n)?(me(),ge("span",ap,Ve(t.pctOf(n))+"% 共识",1)):Be("",!0)]),(n.strategy_names||n.strategies)&&(n.strategy_names||n.strategies).length?(me(),ge("div",sp,[(me(!0),ge(ut,null,Et(t.displayTags(n),o=>(me(),ge("span",{key:o.text,class:ct(["qc-stock-tag",{"is-more":o.more}])},Ve(o.text),3))),128))])):Be("",!0),m.showConsensus?(me(),ge("span",np,Ve(n.strategy_count||0)+" 策略",1)):Be("",!0),m.showPrice&&n.price!=null?(me(),ge("div",lp,[Se("span",ip,Ve(t.fmtPrice(n.price)),1),Se("span",{class:ct(["qc-stock-change",n.change_pct>0?"is-up":n.change_pct<0?"is-down":""])},Ve(t.fmtChange(n.change_pct)),3)])):Be("",!0),t.slots.extra?(me(),ge("div",op,[ca(a.$slots,"extra",{item:n,index:p})])):Be("",!0),t.slots.actions?(me(),ge("div",{key:5,class:"qc-stock-actions",onClick:e[0]||(e[0]=Vt(()=>{},["stop"]))},[ca(a.$slots,"actions",{item:n,index:p})])):Be("",!0),t.slots.footer?(me(),ge("div",rp,[ca(a.$slots,"footer",{item:n,index:p})])):Be("",!0)],42,Yf)]),_:3},8,["items","row-height"])):(me(!0),ge(ut,{key:1},Et(m.items,(n,p)=>(me(),ge("div",{key:n.code,class:ct(["qc-stock-row",{"is-active":m.activeCode===n.code}]),"data-copy-code":m.copyCode?n.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(n.name||"")+" "+(n.code||""),onClick:o=>t.select(n),onKeydown:[pa(Vt(o=>t.select(n),["prevent"]),["enter"]),pa(Vt(o=>t.select(n),["prevent"]),["space"])]},[m.showRank?(me(),ge("div",dp,Ve(p+1),1)):Be("",!0),Se("div",up,[Se("div",vp,[Se("span",mp,Ve(n.code),1),n.status==="new"?(me(),ge("span",fp,Ve(m.statusText.new),1)):n.status==="out"?(me(),ge("span",pp,Ve(m.statusText.out),1)):Be("",!0)]),Se("div",gp,[Ea(Ve(n.name)+" ",1),ca(a.$slots,"name-suffix",{item:n,index:p})]),m.showConsensus&&t.hasConsensus(n)?(me(),ge("span",hp,Ve(t.pctOf(n))+"% 共识",1)):Be("",!0)]),(n.strategy_names||n.strategies)&&(n.strategy_names||n.strategies).length?(me(),ge("div",yp,[(me(!0),ge(ut,null,Et(t.displayTags(n),o=>(me(),ge("span",{key:o.text,class:ct(["qc-stock-tag",{"is-more":o.more}])},Ve(o.text),3))),128))])):Be("",!0),m.showConsensus?(me(),ge("span",bp,Ve(n.strategy_count||0)+" 策略",1)):Be("",!0),m.showPrice&&n.price!=null?(me(),ge("div",wp,[Se("span",kp,Ve(t.fmtPrice(n.price)),1),Se("span",{class:ct(["qc-stock-change",n.change_pct>0?"is-up":n.change_pct<0?"is-down":""])},Ve(t.fmtChange(n.change_pct)),3)])):Be("",!0),t.slots.extra?(me(),ge("div",_p,[ca(a.$slots,"extra",{item:n,index:p})])):Be("",!0),t.slots.actions?(me(),ge("div",{key:5,class:"qc-stock-actions",onClick:e[1]||(e[1]=Vt(()=>{},["stop"]))},[ca(a.$slots,"actions",{item:n,index:p})])):Be("",!0),t.slots.footer?(me(),ge("div",xp,[ca(a.$slots,"footer",{item:n,index:p})])):Be("",!0)],42,cp))),128))],64)):(me(),ha(x,{key:1,type:"empty",title:m.emptyText},null,8,["title"]))])}const Cp=Ta(Uf,[["render",Sp]]),qp={name:"qc-detail-split",props:{enabled:{type:Boolean,default:!1},rootClass:{type:String,default:""},listClass:{type:String,default:""},paneClass:{type:String,default:""}}},Ep={key:0,class:"split-divider","data-split-resize":""};function Mp(a,e,m,t,c,d){return me(),ge("div",{class:ct(["detail-split-wrap",[m.rootClass,{"detail-split":m.enabled}]]),"data-split-root":""},[Se("div",{class:ct(["detail-split-list",[m.listClass,{"w-100":!m.enabled}]])},[ca(a.$slots,"list")],2),m.enabled?(me(),ge("div",Ep)):Be("",!0),m.enabled?(me(),ge("div",{key:1,class:ct(["detail-split-pane",m.paneClass])},[ca(a.$slots,"pane")],2)):Be("",!0)],2)}const Tp=Ta(qp,[["render",Mp]]),Sn={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",notification:"bell",about:"info"}},Pp=200,Dp={name:"qc-top-tabs",components:{AppIcon:Ma},setup(){const a=Aa("qcState");if(!a)return{};const e=it(()=>a.currentPage&&a.currentPage.value||""),m=it(()=>a.currentSubPage&&a.currentSubPage.value||""),t=it(()=>a.menus&&a.menus.value||[]),c=it(()=>{const l=t.value.find(g=>g.key===e.value);return l&&l.subPages||[]}),d=it(()=>c.value.map(l=>({key:l,label:a.subPageNames&&a.subPageNames[l]||l,icon:Sn[e.value]&&Sn[e.value][l]||"circle-dot"}))),x=It(null),r=It(!1),n=It(!1),p=It(!1);let o=null,q=null;function b(){const l=x.value;l&&(n.value=l.scrollLeft>2,p.value=l.scrollLeft<l.scrollWidth-l.clientWidth-2)}function _(){const l=x.value;l&&(r.value=l.scrollWidth>l.clientWidth+2,b())}function k(l){const g=x.value;g&&g.scrollBy({left:l*Pp,behavior:"smooth"})}function y(l){a.openTab?a.openTab(e.value,l):a.currentSubPage&&(a.currentSubPage.value=l)}function I(l){y(l),Kd(()=>{const g=x.value;if(!g)return;const E=g.querySelector('[data-tab-key="'+l+'"]');E&&E.scrollIntoView({block:"nearest",inline:"nearest"})})}const M=it(()=>{if(!r.value)return[];const l=x.value;if(!l)return[];const g=l.getBoundingClientRect(),E=new Set;return l.querySelectorAll(".qc-top-tab").forEach(O=>{const w=O.getBoundingClientRect();w.left>=g.left-2&&w.left<g.right-24&&E.add(O.getAttribute("data-tab-key"))}),d.value.filter(O=>!E.has(O.key))});function u(l,g){l.key==="ArrowLeft"?(l.preventDefault(),k(-1)):l.key==="ArrowRight"?(l.preventDefault(),k(1)):(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),y(g.key))}return Ya(()=>{_(),o=new ResizeObserver(()=>{clearTimeout(q),q=setTimeout(_,100)}),x.value&&o.observe(x.value),window.addEventListener("resize",_)}),Bd(()=>{o&&o.disconnect(),window.removeEventListener("resize",_),clearTimeout(q)}),{state:a,tabs:d,currentSubPage:m,go:y,scrollRef:x,hasOverflow:r,canScrollLeft:n,canScrollRight:p,scrollByStep:k,scrollToTab:I,hiddenTabs:M,onTabKeydown:u,updateScrollState:b}}},Rp={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},zp=["disabled"],Ap=["data-tab-key","aria-selected","title","onClick","onKeydown"],Lp={class:"qc-top-tab-label"},Ip=["disabled"];function Np(a,e,m,t,c,d){const x=Qt("AppIcon"),r=Qt("el-dropdown-item"),n=Qt("el-dropdown-menu"),p=Qt("el-dropdown");return t.tabs.length?(me(),ge("div",Rp,[t.hasOverflow?(me(),ge("button",{key:0,class:"qc-top-tabs-btn",disabled:!t.canScrollLeft,"aria-label":"向左滚动",onClick:e[0]||(e[0]=o=>t.scrollByStep(-1))},"‹",8,zp)):Be("",!0),Se("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:e[1]||(e[1]=(...o)=>t.updateScrollState&&t.updateScrollState(...o))},[(me(!0),ge(ut,null,Et(t.tabs,o=>(me(),ge("div",{key:o.key,"data-tab-key":o.key,class:ct(["qc-top-tab",{"is-active":t.currentSubPage===o.key}]),role:"tab",tabindex:"0","aria-selected":t.currentSubPage===o.key?"true":"false",title:o.label,onClick:q=>t.go(o.key),onKeydown:q=>t.onTabKeydown(q,o)},[vt(x,{name:o.icon,size:14},null,8,["name"]),Se("span",Lp,Ve(o.label),1)],42,Ap))),128))],544),t.hasOverflow?(me(),ge("button",{key:1,class:"qc-top-tabs-btn",disabled:!t.canScrollRight,"aria-label":"向右滚动",onClick:e[2]||(e[2]=o=>t.scrollByStep(1))},"›",8,Ip)):Be("",!0),t.hasOverflow&&t.hiddenTabs.length?(me(),ha(p,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:t.scrollToTab},{dropdown:ga(()=>[vt(n,null,{default:ga(()=>[(me(!0),ge(ut,null,Et(t.hiddenTabs,o=>(me(),ha(r,{key:o.key,command:o.key,class:ct({"is-active":t.currentSubPage===o.key})},{default:ga(()=>[vt(x,{name:o.icon,size:14},null,8,["name"]),Ea(" "+Ve(o.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:ga(()=>[e[3]||(e[3]=Se("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):Be("",!0)])):Be("",!0)}const Op=Ta(Dp,[["render",Np]]);(function(){const{ref:a,computed:e,inject:m}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
    `,setup(){const t=m("qcState");if(!t)return{};const c=a(!1),d=a(localStorage.getItem("qc.hideNonTradingBanner")==="1"),x=()=>{d.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},r=e(()=>t.marketData&&t.marketData.value||{}),n=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:t.menus,marketData:r,bannerDismissed:d,dismissBanner:x,goMerrill:n,currentPage:t.currentPage,currentSubPage:t.currentSubPage,currentUser:t.currentUser,currentPageName:t.currentPageName,searchQuery:t.searchQuery,searchStocks:t.searchStocks,onSearchSelect:t.onSearchSelect,selectedDate:t.selectedDate,onDateChange:t.onDateChange,disabledDate:t.disabledDate,refreshCalendarData:t.refreshCalendarData,exportCSV:t.exportCSV,loading:t.loading,lastLoadTime:t.lastLoadTime,showUserMenu:c,resetSetupWizard:t.resetSetupWizard,showChangePassword:t.showChangePassword,themes:t.themes,currentTheme:t.currentTheme,changeTheme:t.changeTheme,handleLogout:t.handleLogout,subPageNames:t.subPageNames,keyClick:t.keyClick,t:t.t,subTabLabel:function(p,o){const q="sub."+p.key+"."+o,b=t.t(q);if(b!==q)return b;const _="sub."+o,k=t.t(_);return k!==_&&k?k:t.subPageNames[o]||o}}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                </div>`,setup(){const e=a("qcState");if(!e)return{};const{ref:m,computed:t}=Vue,c=m(0),d=m(0),x=m(!1),r=t(()=>{const w={day:"date",week:"week",month:"month",year:"year"},D=e.currentView&&e.currentView.value||"day";return w[D]||"date"}),n={day:"日",week:"周",month:"月",year:"年"};function p(w){return e.t&&e.t("view."+w)||n[w]||w}function o(w){e.switchView?e.switchView(w):e.currentView&&(e.currentView.value=w)}let q=null;function b(w){const D=w.touches&&w.touches[0];D&&(c.value=D.clientX,d.value=D.clientY)}async function _(){if(!x.value){x.value=!0;try{await e.refreshCalendarData()}catch{}q&&clearTimeout(q),q=setTimeout(()=>{x.value=!1},500)}}function k(w){if(!(window.innerWidth<=768))return;const D=w.changedTouches&&w.changedTouches[0];if(!D)return;const T=window.__quantModules&&window.__quantModules.gestures||{};if((typeof T.judgePullToRefresh=="function"?T.judgePullToRefresh(d.value,D.clientY):D.clientY-d.value>=60)&&(window.scrollY||0)<=0){w.stopPropagation(),_();return}if(e.currentSubPage.value==="pool")return;const F=D.clientX-c.value,U=D.clientY-d.value;Math.abs(F)>50&&Math.abs(F)>Math.abs(U)*1.2&&(e.navigateDate(F<0?1:-1),w.stopPropagation())}const y=m(!1),I=m(!1),M=m(""),u=m(null),l=m([]);function g(w){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[w]||w}async function E(){if(e.selectedDate.value){y.value=!0,I.value=!0,M.value="",u.value=null,l.value=[];try{const w=await fetch("/api/calendar/"+e.selectedDate.value+"/compare"),D=await w.json();if(!w.ok)throw new Error(D.detail||"HTTP "+w.status);u.value=D;const T=D&&D.comparison||{},B=[];for(const F of Object.keys(T)){if(F==="all_intersection")continue;const U=T[F]||{},J=F.split("_vs_");B.push({label:g(J[0])+" ↔ "+g(J[1]),interCount:U.intersection_count||0,inter:(U.intersection||[]).join(", "),onlyS1Count:U.only_s1_count||0,onlyS1:(U.only_s1||[]).join(", "),onlyS2Count:U.only_s2_count||0,onlyS2:(U.only_s2||[]).join(", ")})}l.value=B}catch(w){M.value=String(w&&w.message?w.message:w)}finally{I.value=!1}}}let O="";return Vue.watch(()=>{const w=e.stockPool,D=w&&w.value||[];return{n:D.length,first:D[0]&&D[0].code,split:!!e.detailSplitEnabled.value}},(w,D)=>{if(!w.split||!w.first||w.n===0)return;const T=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,B=(e.stockPool.value||[]).some(F=>F.code===T);if(!(e.externalStockActive&&(!T&&e.externalStockActive(null)||T&&e.externalStockActive(T)))&&(!T||!B)){if(O===w.first&&T&&B===!1&&w.n>1)return;O=w.first,e.showStockDetail&&e.showStockDetail(w.first)}},{immediate:!0}),{...e,calType:r,pullRefreshing:x,onCalTouchStart:b,onCalTouchEnd:k,viewLabel:p,switchViewLocal:o,compareVisible:y,compareLoading:I,compareError:M,compareData:u,comparePairs:l,openStrategyCompare:E}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.strategiesPage=window.__quantModules.strategiesPage||{};window.__quantModules.strategiesPage.part1=`
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
    `;window.__quantModules=window.__quantModules||{};window.__quantModules.strategiesPage=window.__quantModules.strategiesPage||{};window.__quantModules.strategiesPage.view=window.__quantModules.strategiesPage.part1+window.__quantModules.strategiesPage.part2;(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:window.__quantModules.strategiesPage.view,setup(){const e=a("qcState"),m=Vue.ref(!1);if(!e)return{};const{computed:t}=Vue;let c=0;const d=t(()=>{var A;return((A=e.merrillData)==null?void 0:A.value)||{}}),x=t(()=>{var A;return((A=e.marketData)==null?void 0:A.value)||{}}),r=t(()=>{var A;return((A=e.dashboardData)==null?void 0:A.value)||{}}),n=t(()=>{var A;return((A=e.healthMetrics)==null?void 0:A.value)||[]}),p=t(()=>{var A;return((A=e.filteredConsensusRank)==null?void 0:A.value)||[]}),o=t(()=>{const A={};for(const le of p.value)le.code&&le.name&&(A[le.code]=le.name);return A}),q={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function b(A){return q[A]||A}const _=t(()=>x.value.date||r.value.latest_date||"-"),k=t(()=>{const A=x.value;return!A||Object.keys(A).length===0?"数据加载中...":A.is_trading_day&&A.in_trading_hours?"● 交易中":A.is_trading_day?"已收盘":"○ 非交易日"}),y=t(()=>{const A=d.value.next_stage_prediction;return A&&A.next_stage_name&&A.transition_probability>.2?`→${A.next_stage_name} ${(A.transition_probability*100).toFixed(2)}%`:""}),I=t(()=>{const A=[],le=r.value.pool_changes||{},Ee=le.new_count||0;if(Ee>0){const ft=le.new_stock_names||{},Je=(le.new_stocks||[]).map(Rt=>ft[Rt]||o.value[Rt]||Rt).slice(0,4).join("、");A.push({icon:"sparkles",level:"new",text:`今日新入池 ${Ee} 只${Je?" · "+Je:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(e.currentPage.value="calendar",e.currentSubPage.value="pool"),e.statusFilter.value="new"}})}for(const ft of n.value.filter(Je=>Je.degraded))A.push({icon:"alert-triangle",level:"warn",text:`数据源 ${b(ft.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});const Ae=d.value.timing;Ae&&Ae.progress_percent&&Ae.progress_percent>100?A.push({icon:"clock",level:"warn",text:`美林「${d.value.name}」已超期 ${Ae.progress_percent}%`,action:()=>{e.currentSubPage.value="merrill"}}):Ae&&Ae.maturity&&d.value.name&&A.push({icon:"clock",level:"info",text:`美林「${d.value.name}」阶段成熟度 ${Ae.maturity}`,action:()=>{e.currentSubPage.value="merrill"}});const Ue=x.value;return Ue&&Ue.is_trading_day===!1&&Ue.date&&A.push({icon:"calendar",level:"info",text:`${Ue.date} 非交易日`,action:()=>{e.currentSubPage.value="market"}}),A}),M=t(()=>{const A=[],le=d.value.name||"",Ee=d.value.timing||{},Ae=["复苏","成长","过热"],Ue=["滞胀","衰退"];Ae.some(bt=>le.includes(bt))&&A.push({kind:"opportunity",source:"美林",text:le+" 顺势",action:()=>{e.currentSubPage.value="merrill"}}),Ue.some(bt=>le.includes(bt))&&A.push({kind:"risk",source:"美林",text:le+" 防守",action:()=>{e.currentSubPage.value="merrill"}}),Ee.progress_percent&&Ee.progress_percent>100&&A.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{e.currentSubPage.value="merrill"}});const ft=r.value.pool_changes||{},Je=(ft.new_count||0)-(ft.out_count||0);Je>=3?A.push({kind:"opportunity",source:"池变动",text:"净入池 +"+Je,action:()=>{e.statusFilter.value="new",e.currentPage.value="calendar",e.currentSubPage.value="pool"}}):Je<=-3&&A.push({kind:"risk",source:"池变动",text:"净出池 "+Je,action:()=>{e.currentSubPage.value="consensus"}});const Rt=x.value.market_sentiment,at=Rt&&Rt.text||"";(at.includes("乐观")||at.includes("积极")||at.includes("亢奋"))&&A.push({kind:"opportunity",source:"情绪",text:at,action:()=>{e.currentSubPage.value="market"}}),(at.includes("悲观")||at.includes("恐慌")||at.includes("低迷"))&&A.push({kind:"risk",source:"情绪",text:at,action:()=>{e.currentSubPage.value="market"}});for(const bt of n.value.filter(st=>st.degraded))A.push({kind:"risk",source:"数据",text:b(bt.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});return A}),u=t(()=>{var A;return((A=e.merrillTimeline)==null?void 0:A.value)||e.merrillTimeline||{cycles:[]}}),l=t(()=>{var A;return((A=e.timelineLoading)==null?void 0:A.value)||!1});function g(A){const le=e.showStageDetail;typeof le=="function"&&le(A)}function E(A){const le=e.merrillStagesConfig,Ae=(le&&le.value?le.value:le||{})[A]||{};return Ae.color||Ae.bg_color||"var(--color-primary)"}function O(A){const le=e.merrillStagesConfig,Ee=le&&le.value?le.value:le||{};return Ee[A]&&Ee[A].name||""}function w(){const A=e.merrillStagesConfig;return A&&A.value?A.value:A||{}}function D(A){return w()[A]&&w()[A].description||""}const T=Vue.ref([]),B=Vue.ref(null),F=Vue.ref(!1),U=Vue.ref(!1),J=Vue.ref(7),ee=Vue.ref(""),H=Vue.ref(""),Z=Vue.computed(()=>{const A=new Set;return(T.value||[]).forEach(function(le){le.task&&A.add(le.task)}),Array.from(A).sort()}),z=Vue.computed(function(){const A=B.value&&B.value.success_rate||0;return A>=80?"color-success":A>=50?"color-warning":"color-danger"});function s(A,le){return A>0&&le/A>=.8?"status-ok":A>0&&le/A>=.5?"status-warn":"status-bad"}async function S(){const A=++c;F.value=!0,U.value=!1;try{const le=window.__quantModules&&window.__quantModules.core||{},Ee=typeof le.authHeaders=="function"?le.authHeaders():{},Ae=new URLSearchParams({days:String(J.value)});ee.value&&Ae.set("task",ee.value),H.value&&Ae.set("status",H.value);const[Ue,ft]=await Promise.all([fetch("/api/system/execution-history?"+Ae.toString(),{headers:Ee}).then(function(Je){return Je.json()}),fetch("/api/system/execution-summary?days="+J.value,{headers:Ee}).then(function(Je){return Je.json()})]);if(A!==c)return;T.value=Ue&&Ue.data||[],B.value=ft&&ft.data||null}catch(le){console.error("[execution] 执行数据加载失败:",le),U.value=!0}finally{A===c&&(F.value=!1)}}const i=window.__quantModules&&window.__quantModules.i18n||{},h=typeof i.t=="function"?i.t:function(A){return String(A)},X=Vue.ref([]),N=Vue.ref(null),C=Vue.ref(null),f=Vue.ref(""),P=Vue.ref([]),v=Vue.ref(!1);let j=null;const ne=Vue.computed(function(){const A=C.value&&C.value.dates||[];return A.length&&!f.value&&(f.value=A[A.length-1].date),A}),$=Vue.computed(function(){const A=(X.value||[]).find(function(Ee){return Ee.enabled});if(!A||A.countdown_seconds==null)return"—";const le=A.countdown_seconds;return Math.floor(le/3600)+"h"+String(Math.floor(le%3600/60)).padStart(2,"0")+"m"}),L=Vue.computed(function(){const A=(X.value||[]).find(function(le){return le.enabled});if(!A||A.countdown_seconds==null||A.countdown_seconds<0)return"";try{return new Date(Date.now()+A.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),Q=Vue.computed(function(){const A=N.value;return!A||A.phase==="idle"?h("exec.waiting"):A.phase==="running"?h("exec.running")+(A.current_sid?" · "+A.current_sid:""):A.phase==="done"?h("exec.done"):h("exec.failed")}),oe=Vue.computed(function(){return N.value&&N.value.phase==="running"?"loader":"check-circle-2"}),fe=Vue.computed(function(){const A=C.value&&C.value.dates||[];return A.length?A[A.length-1].date:"—"}),Ce=Vue.computed(function(){const A=C.value&&C.value.dates||[],le=A[A.length-1];return le&&le.visible?"color-success":"color-danger"}),Y=Vue.computed(function(){const A=C.value&&C.value.dates||[],le=A[A.length-1];return le?le.day_view_total:"—"});function de(A){const le=window.__quantModules&&window.__quantModules.core||{},Ee=typeof le.authHeaders=="function"?le.authHeaders():{};return fetch(A,{headers:Ee}).then(function(Ae){return Ae.json()})}async function De(){const A=++c;try{const[le,Ee,Ae]=await Promise.all([de("/api/strategies/execution/plan"),de("/api/strategies/execution/status"),de("/api/strategies/execution/results?days=7")]);if(A!==c)return;X.value=le&&le.data&&le.data.plans||[],N.value=Ee&&Ee.data||null,C.value=Ae&&Ae.data||null,N.value&&N.value.phase==="running"?ae():ye()}catch(le){console.error("[execution-monitor] 监控数据加载失败:",le)}}function ae(){ye(),j=setInterval(function(){de("/api/strategies/execution/status").then(function(A){N.value=A&&A.data||null,N.value&&N.value.phase!=="running"&&(ye(),De())}).catch(function(){})},5e3)}function ye(){j&&(clearInterval(j),j=null)}async function Te(A){if(!A)return;const le=++c;v.value=!0;try{const Ee=await de("/api/strategies/execution/trace/"+encodeURIComponent(A));if(le!==c)return;const Ae=Ee&&Ee.data||null;P.value=Ae&&Ae.steps||[]}catch(Ee){console.error("[execution-trace] 追溯加载失败:",Ee)}finally{le===c&&(v.value=!1)}}Vue.watch(function(){return e.currentSubPage&&e.currentSubPage.value},function(A){A==="execution"?(S(),De()):ye()},{immediate:!0}),Vue.watch(function(){const A=e.currentSubPage&&e.currentSubPage.value,le=e.filteredConsensusRank&&e.filteredConsensusRank.value||[],Ee=e.marketData&&e.marketData.value||{};return{sub:A,split:!!e.detailSplitEnabled.value,top5:le.slice(0,5),rank:le,indices:(Ee.indices||[]).map(function(Ae){return Ae})}},function(A,le){if(A.split){if(A.sub==="overview"){if(!A.top5.length)return;const Ee=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,Ae=A.top5.some(function(Ue){return Ue.code===Ee});(!Ee||!Ae)&&e.showStockDetail&&e.showStockDetail(A.top5[0].code)}else if(A.sub==="consensus"){if(!A.rank.length)return;const Ee=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,Ae=A.rank.some(function(Ue){return Ue.code===Ee});(!Ee||!Ae)&&e.showStockDetail&&e.showStockDetail(A.rank[0].code)}else if(A.sub==="market"){if(!A.indices.length)return;const Ee=e.indexDetail&&e.indexDetail.value&&e.indexDetail.value.code,Ae=A.indices.some(function(Ue){return Ue.code===Ee});(!Ee||!Ae)&&e.showIndexDetail&&e.showIndexDetail(A.indices[0])}}},{immediate:!0});const ue=Vue.ref("band"),be=["recession","recovery","overheating","stagflation"];function ke(A){if(!A)return null;const le=String(A).split("-"),Ee=parseInt(le[0],10),Ae=parseInt(le[1]||"1",10);return isFinite(Ee)?Ee+(Ae-1)/12:null}function re(A){const le=Math.floor(A);let Ee=Math.round((A-le)*12)+1;return Ee>12&&(Ee=12),Ee<1&&(Ee=1),le+"-"+(Ee<10?"0"+Ee:""+Ee)}function te(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.timing||{}}function ve(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.color||"var(--color-success)"}function Le(A,le){const Ee=te(),Ae=Number(Ee.avg_duration_months)||0,Ue=Math.min(100,Number(Ee.progress_percent)||0),ft=ke(Ee.current_stage_start_date),Je=[];let Rt=null;if((A||[]).forEach(function(Ke){const St=ke(Ke.start);Rt==null&&St!=null&&(Rt=St);const Tt=!!(Ke.is_current||ft!=null&&St===ft&&!Ke.duration_months),Ft=Ke.name||O(Ke.stage);if(Tt&&Ae>0){const nt=Ae*Ue/100;nt>.5&&Je.push({stage:Ke.stage,name:Ft,months:nt,live:!0,start:Ke.start});const wt=Ae-nt;wt>.5&&Je.push({stage:Ke.stage,name:"剩余(预测)",months:wt,ghost:!0,start:Ke.start})}else{let nt=Number(Ke.duration_months)||0;if(!nt&&St!=null){const wt=ke(Ke.end);wt!=null&&wt>St&&(nt=Math.max(1,Math.round((wt-St)*12)))}nt||(nt=1),Je.push({stage:Ke.stage,name:Ft,months:nt,live:Tt,start:Ke.start,end:Ke.end})}if(Tt&&le&&Ae>0){const nt=e.merrillData&&e.merrillData.value&&e.merrillData.value.next_stage_prediction;nt&&Je.push({stage:nt.next_stage,name:(nt.next_stage_name||"下一阶段")+" (预测)",months:Ae,ghost:!0,prob:nt.transition_probability})}}),!Je.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};const at=Je.reduce(function(Ke,St){return Ke+St.months},0)||1,bt=Rt??0;let st=0,Nt=0;const xt=Je.map(function(Ke){const St=st;Ke.ghost||(Nt+=Ke.months),st+=Ke.months;const Tt={stage:Ke.stage,name:Ke.name,months:Math.round(Ke.months),ghost:!!Ke.ghost,live:!!Ke.live,prob:Ke.prob,left:St/at*100,width:Math.max(2,Ke.months/at*100)},Ft=ke(Ke.start),nt=ke(Ke.end);return Tt.start=Ft!=null?re(Ft):re(bt+St/12),Tt.end=nt!=null?re(nt):"",Tt.predicted=Ft==null,Tt}),G=Je[Je.length-1],we=Je.some(function(Ke){return Ke.ghost}),Ze=G&&G.end?G.end:re(bt+at/12);return{segs:xt,axisStart:re(bt),axisEnd:Ze,nowPct:we?Nt/at*100:null}}function Fe(A){return(A.stages||[]).some(function(le){return le.is_current})}const He=Vue.computed(function(){const A=e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[];if(!A.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};let le=null;for(let Ee=A.length-1;Ee>=0;Ee--)if(Fe(A[Ee])){le=A[Ee];break}return le||(le=A[A.length-1]),Le(le.stages,!0)});function Mt(A){const le=A&&A.stages?A.stages:[];if(!le.length)return"";const Ee=le[0]&&le[0].start?String(le[0].start).slice(0,4):"",Ae=le[le.length-1]||{},Ue=Ae.end?String(Ae.end).slice(0,4):Ae.start?String(Ae.start).slice(0,4):"";return Ee||Ue?Ee?Ee+"–"+Ue:Ue:""}const mt=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).filter(function(le){return!Fe(le)}).map(function(le){return{label:le.label,years:Mt(le),segs:Le(le.stages,!1).segs}})}),Pt=be,_e=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).map(function(le){const Ee={};be.forEach(function(Ue){Ee[Ue]=0});let Ae=null;return(le.stages||[]).forEach(function(Ue){Ee[Ue.stage]!=null&&(Ee[Ue.stage]+=Number(Ue.duration_months)||0),Ue.is_current&&(Ae=Ue.stage)}),{label:le.label,sum:Ee,cur:Ae}})}),qe=Vue.computed(function(){let A=0;return _e.value.forEach(function(le){be.forEach(function(Ee){le.sum[Ee]>A&&(A=le.sum[Ee])})}),A||1}),Oe=Vue.computed(function(){const A=e.merrillSnapshots&&e.merrillSnapshots.value||[],le=[];return A.forEach(function(Ee){const Ae=le[le.length-1];Ae&&Ae.stage===Ee.stage?(Ae.count++,Ae.last=Ee.timestamp):le.push({stage:Ee.stage,name:Ee.stage_name||O(Ee.stage),count:1,first:Ee.timestamp,last:Ee.timestamp})}),le}),Ie=Vue.computed(function(){return Math.max(100,Math.min(200,Number(te().progress_percent)||0))}),Ye=Vue.computed(function(){const A=Number(te().progress_percent)||0;return{width:Math.max(0,Math.min(100,A/Ie.value*100))+"%",background:A>100?"linear-gradient(90deg, color-mix(in srgb, "+ve()+" var(--bar-mix), var(--surface-card)), var(--bar-fill-warn))":"color-mix(in srgb, "+ve()+" var(--bar-mix), var(--surface-card))"}}),Qe=Vue.computed(function(){return 100/Ie.value*100}),We=Vue.computed(function(){const A=te().predicted_end;if(!A)return"";if(typeof A=="string")return A;const le=A.optimistic||A.earliest||"",Ee=A.pessimistic||A.latest||"";return le&&Ee?le+" ~ "+Ee:A.base||A.mid||le||Ee||""});var ot=22;function gt(A){return"color-mix(in srgb, "+A+" "+ot+"%, var(--surface-card))"}function Dt(A){const le=E(A.stage);return A.ghost?{left:A.left+"%",width:A.width+"%",color:"var(--text-primary)",borderLeft:"3px solid "+le,background:"repeating-linear-gradient(45deg, "+gt(le)+" 0, "+gt(le)+" 5px, var(--surface-card) 5px, var(--surface-card) 10px)"}:{left:A.left+"%",width:A.width+"%",background:gt(le),color:"var(--text-primary)",borderLeft:"3px solid "+le}}function Kt(A){const le=[A.name];return A.start&&le.push((A.predicted?"预计起始 ":"起始 ")+A.start+(A.end?" → "+A.end:"")),A.months&&le.push("约 "+A.months+" 个月"),A.ghost&&le.push("预测(尚未发生)"),A.prob!=null&&le.push("转移概率 "+(A.prob*100).toFixed(0)+"%"),le.join(" · ")}function ea(A,le){const Ee=E(A),Ae=Math.max(.28,le/qe.value),Ue=Math.round(14+30*Ae);return{background:"color-mix(in srgb, "+Ee+" "+Ue+"%, var(--surface-card))",color:"var(--text-primary)"}}const $t=Vue.computed(function(){const A=e.merrillData&&e.merrillData.value||e.merrillData||{},le=A.color||E(A.stage);return{background:"color-mix(in srgb, "+le+" 14%, var(--surface-card))",color:"color-mix(in srgb, "+le+" 48%, var(--text-primary))",borderColor:"color-mix(in srgb, "+le+" 26%, transparent)"}});return{...e,todayText:_,tradingStatus:k,merrillNext:y,todayFocus:I,todaySignals:M,merrillConfigOpen:m,getTimelineStageColor:E,getTimelineStageName:O,getTimelineStageDesc:D,merrillChipStyle:$t,mcHistView:ue,mcCurrentBand:He,mcHistoryBands:mt,mcStageKeys:Pt,mcMatrix:_e,mcTrailRuns:Oe,mcProgStyle:Ye,mcAvgMark:Qe,mcEndRange:We,mcSegStyle:Dt,mcSegTitle:Kt,mcMxCellStyle:ea,merrillTimeline:u,timelineLoading:l,showTimelineStage:g,execHistory:T,execSummary:B,execLoading:F,execError:U,execDays:J,execTaskFilter:ee,execStatusFilter:H,execTaskOptions:Z,execSuccessClass:z,loadExecutionData:S,execRateClass:s,execPlan:X,execStatus:N,execResults:C,execTraceDate:f,execTraceSteps:P,execTraceLoading:v,execResultsDates:ne,execCountdownText:$,execNextRunText:L,execPhaseText:Q,execStatusIcon:oe,execLastDate:fe,execVisibleClass:Ce,execVisibleText:Y,loadExecutionTrace:Te}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.systemPage=window.__quantModules.systemPage||{};window.__quantModules.systemPage.part1=`
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
    `;window.__quantModules=window.__quantModules||{};window.__quantModules.systemPage=window.__quantModules.systemPage||{};window.__quantModules.systemPage.view=window.__quantModules.systemPage.part1+window.__quantModules.systemPage.part2;(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:window.__quantModules.systemPage.view,setup(){const e=a("qcState");if(!e)return{};function m(G){e.currentSubPage.value=G}function t(){te(),ve(),Le()}Vue.watch(()=>e.currentSubPage&&e.currentSubPage.value,G=>{G==="autoeval"&&e.loadAiVendors&&e.loadAiVendors(),G==="datadict"&&$(),G==="health"&&f(),G==="notification"&&t(),G==="datasource"&&I(),G!=="usage"&&s()});const c=e.themeHues||[45,220,0,140,270,320,180,25,250,-1],d=e.themeHueNames||{},x=e.themeMode||Vue.computed(()=>"light"),r=e.themeHue||Vue.ref(45);function n(G){e.changeThemeMode&&e.changeThemeMode(G)}function p(G){e.changeThemeHue&&e.changeThemeHue(parseInt(G,10))}function o(G){return e.hueColor?e.hueColor(G):G<0?"hsl(0, 0%, 46%)":"hsl("+G+", 75%, 42%)"}function q(G){return e.hueName?e.hueName(G):d[G]||"自定义 "+G}function b(G){e.setNavMode&&e.setNavMode(G)}const _=Vue.ref([]),k=Vue.ref([]),y=Vue.ref(!1);async function I(){y.value=!0;try{const we=await(await fetch("/api/meta/freshness")).json();we&&we.success&&(k.value=we.items||[])}catch{}y.value=!1}const M=Vue.ref(""),u=Vue.ref("read"),l=Vue.ref(""),g=Vue.ref(!1),E=()=>window.__quantModules&&window.__quantModules.core||{},O=Vue.ref([]),w=Vue.ref(!1);async function D(){w.value=!0;try{const G=await fetch("/api/audit/logs?limit=20",{headers:E().authHeaders?E().authHeaders():{}}).then(function(we){if(!we.ok)throw new Error("HTTP "+we.status);return we.json()});O.value=G&&G.logs||[]}catch(G){console.error("[system] 审计加载失败:",G),O.value=[]}finally{w.value=!1}}const T=Vue.ref(!1),B=Vue.ref(null),F=Vue.ref(null),U=Vue.ref([]),J=Vue.ref(null);function ee(G){return G==="completed"?"完成":G==="running"?"运行中":G==="pending"?"排队中":G==="cancelled"?"已取消":"失败"}async function H(){try{const we=await(await fetch("/api/jobs?limit=20")).json();we&&we.success&&(U.value=we.data&&we.data.tasks||[])}catch(G){console.warn("[system] 加载任务队列失败:",G)}}async function Z(G){try{await fetch("/api/jobs/"+G+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),H()}catch(we){console.warn("[system] 取消任务失败:",we)}}function z(){H(),J.value=window.setInterval(H,15e3)}function s(){J.value&&(clearInterval(J.value),J.value=null)}Vue.onBeforeUnmount&&Vue.onBeforeUnmount(function(){s()});const S=Vue.ref({items:[]}),i=Vue.ref([]),h=Vue.ref(null),X=Vue.ref({data_sources:[],alerts:[]}),N=function(){return E().authHeaders?E().authHeaders():{}},C=function(G){return fetch(G,{headers:N()}).then(function(we){if(!we.ok)throw new Error("HTTP "+we.status);return we.json()})};async function f(){T.value=!0,B.value=null;try{const[G,we,Ze,Ke]=await Promise.all([C("/api/reliability/freshness"),C("/api/reliability/heal-history?limit=20"),C("/api/reliability/startup-report"),C("/api/reliability/source-health")]);S.value=G&&G.data||{items:[]},i.value=we&&we.data||[],h.value=Ze&&Ze.data||null,X.value=Ke||{data_sources:[],alerts:[]},F.value=new Date().toLocaleTimeString()}catch(G){console.warn("[health] 加载失败:",G),B.value="健康数据加载失败: "+(G.message||""),S.value={items:[]},i.value=[]}finally{T.value=!1}}const P=Vue.ref(!1),v=Vue.ref(""),j=Vue.ref(""),ne=Vue.ref({fields:[]});async function $(){P.value=!0,v.value="";try{const G="/api/data-dict"+(j.value?"?category="+j.value:""),we=await C(G);ne.value=we&&we.data||{fields:[]}}catch(G){console.warn("[dict] 加载失败:",G),v.value="数据字典加载失败: "+(G.message||""),ne.value={fields:[]}}finally{P.value=!1}}function L(G){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[G]||"var(--text-secondary)"}function Q(G){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[G]||G}const oe=Vue.computed(()=>(S.value?S.value.items||[]:[]).filter(we=>we.status==="stale"||we.status==="missing").length),fe=Vue.ref("rules"),Ce=Vue.ref([]),Y=Vue.ref([]),de=Vue.ref([]),De=Vue.ref(!1),ae=Vue.ref(""),ye=Vue.ref("price_above"),Te=Vue.ref(""),ue=Vue.ref(!1),be=Vue.ref(60),ke=Vue.ref("");function re(G){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[G]||G}async function te(){De.value=!0;try{const G=await(await fetch("/api/alerts/rules")).json();Ce.value=G&&G.rules||[]}catch(G){ke.value="规则加载失败: "+G}finally{De.value=!1}}async function ve(){De.value=!0;try{const G=await(await fetch("/api/alerts/history?limit=50")).json();Y.value=G&&G.history||[]}catch(G){ke.value="历史加载失败: "+G}finally{De.value=!1}}async function Le(){De.value=!0;try{const G=await(await fetch("/api/alerts/channels")).json(),we=await(await fetch("/api/alerts/silence")).json();de.value=G&&G.channels||[],ue.value=!!(we&&we.silenced)}catch(G){ke.value="通道状态加载失败: "+G}finally{De.value=!1}}function Fe(G){fe.value=G,G==="rules"?te():G==="history"?ve():Le()}async function He(){const G=ae.value.trim();if(!G){ke.value="请填写股票代码";return}De.value=!0;try{const we={stock_code:G,rule_type:ye.value};if(ye.value!=="new_pool"){const Ke=Number(Te.value);if(isNaN(Ke)){ke.value="阈值必须为数值";return}we.threshold=Ke}const Ze=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(we)})).json();Ze&&Ze.rule?(ke.value="规则已添加",ae.value="",Te.value="",te()):ke.value=Ze&&Ze.detail||"添加失败"}catch(we){ke.value="添加失败: "+we}finally{De.value=!1}}async function Mt(G){try{await fetch("/api/alerts/rules/"+G.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!G.enabled})}),G.enabled=!G.enabled}catch(we){ke.value="切换失败: "+we}}async function mt(G){try{const we=await(await fetch("/api/alerts/rules/"+G.id,{method:"DELETE"})).json();we&&we.success?(ke.value="规则已删除",te()):ke.value="删除失败"}catch(we){ke.value="删除失败: "+we}}async function Pt(){try{const G=ue.value?be.value:0,we=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:G})})).json();ue.value=!!(we&&we.silenced),ke.value=ue.value?"已静默":"已恢复推送"}catch(G){ke.value="静默设置失败: "+G}}async function _e(){ue.value=!1,await Pt()}function qe(G){return!!G&&!G.degraded}const Oe=Vue.computed(()=>(e&&e.analyticsRank&&e.analyticsRank.value||[]).reduce((we,Ze)=>Math.max(we,Ze.views||0),0)||1),Ie=()=>E().OPENAPI_ROUTE_BASE||"/api/openapi";async function Ye(){g.value=!0;try{const G=await E().apiFetch(Ie()+"/keys");_.value=G&&G.data||[]}catch(G){ElementPlus.ElMessage.error("加载 API Key 失败: "+(G.message||""))}finally{g.value=!1}}async function Qe(){try{const G=await E().apiFetch(Ie()+"/keys",{method:"POST",body:JSON.stringify({name:M.value||"未命名",role:u.value||"read",expire_days:365})});G&&G.success?(l.value=G.api_key||"",M.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await Ye()):ElementPlus.ElMessage.error(G&&(G.detail||G.message)||"生成失败")}catch(G){ElementPlus.ElMessage.error("生成失败: "+(G.message||""))}}async function We(){if(l.value)try{await navigator.clipboard.writeText(l.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function ot(G){try{const we=await E().apiFetch(Ie()+"/keys/"+G.id,{method:"DELETE"});we&&we.success?(ElementPlus.ElMessage.success("Key 已吊销"),l.value&&G.prefix&&l.value.includes(G.prefix)&&(l.value=""),await Ye()):ElementPlus.ElMessage.error(we&&(we.detail||we.message)||"吊销失败")}catch(we){ElementPlus.ElMessage.error("吊销失败: "+(we.message||""))}}const gt={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function Dt(G){return gt[G]||G}const Kt=computed(()=>{var G;return(((G=e.healthMetrics)==null?void 0:G.value)||[]).map(we=>({name:Dt(we.name),source:we.name,success_rate:we.success_rate,avg_latency_ms:we.avg_latency_ms,calls:we.calls||0,degraded:!!we.degraded,data_age_hours:we.data_age_hours!=null?we.data_age_hours:null,stale:!!we.stale,last_fetch:we.last_fetch||we.last_success||null}))});function ea(G){return G.degraded?"degraded":G.success_rate==null?"unknown":G.success_rate>=90?"ok":G.success_rate>=60?"warn":"bad"}function $t(G){return G==null?"":G<1?"刚刚":G<24?Math.round(G)+"小时前":Math.floor(G/24)+"天前"}const A=e.aiUsage||Vue.ref({}),le=Vue.computed(()=>{const G=A.value&&A.value.by_model||{};return Object.entries(G).map(([we,Ze])=>({name:we,count:Ze})).sort((we,Ze)=>Ze.count-we.count)}),Ee=Vue.computed(()=>le.value.reduce((G,we)=>Math.max(G,we.count),0)||1),Ae=Vue.computed(()=>le.value.reduce((G,we)=>G+we.count,0)||1),Ue=Vue.computed(()=>ft.value.reduce((G,we)=>Math.max(G,we.count),0)||0),ft=Vue.computed(()=>{const G=A.value&&A.value.by_day||{},we=[],Ze=new Date;for(let Ke=29;Ke>=0;Ke--){const St=new Date(Ze.getFullYear(),Ze.getMonth(),Ze.getDate()-Ke),Tt=St.getFullYear()+"-"+String(St.getMonth()+1).padStart(2,"0")+"-"+String(St.getDate()).padStart(2,"0");we.push({day:Tt,count:G[Tt]||0})}return we}),Je=Vue.computed(()=>ft.value.reduce((G,we)=>Math.max(G,we.count),0)||1),Rt=Vue.computed(()=>{const G=A.value&&A.value.by_day||{},we=new Date,Ze=we.getFullYear()+"-"+String(we.getMonth()+1).padStart(2,"0")+"-"+String(we.getDate()).padStart(2,"0");return G[Ze]||0}),at=Vue.computed(()=>{const G=A.value&&A.value.by_day||{},we=Object.keys(G).filter(Ze=>(G[Ze]||0)>0);return we.length?we[we.length-1]:""});function bt(G){e.analyticsDays&&(e.analyticsDays.value=G),typeof e.loadAnalytics=="function"&&e.loadAnalytics()}const st='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',Nt='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function xt(G){return G?Nt:st}return z(),{...e,themeHues:c,themeHueNames:d,themeMode:x,themeHue:r,onThemeModeChange:n,setThemeHue:p,hueColor:o,hueName:q,onNavModeChange:b,analyticsMaxViews:Oe,aiModelRank:le,aiModelMax:Ee,aiDayTrend:ft,aiDayMax:Je,todayAiCalls:Rt,lastAiCallDay:at,aiTotal:Ae,aiDayPeak:Ue,setAnalyticsDays:bt,viewIcon:xt,openApiKeys:_,openApiKeyName:M,openApiKeyRole:u,newOpenApiKey:l,openApiLoading:g,loadOpenApiKeys:Ye,generateOpenApiKey:Qe,copyOpenApiKey:We,revokeOpenApiKey:ot,healthRows:Kt,healthClass:ea,fmtAge:$t,staleAssetCount:oe,jobQueue:U,loadJobQueue:H,cancelJob:Z,jobStatusText:ee,auditLogs:O,auditLoading:w,loadAuditLogs:D,healthLoading:T,healthError:B,healthUpdatedAt:F,freshnessData:S,healHistory:i,startupReport:h,sourceHealth:X,refreshHealth:f,statusColor:L,statusLabel:Q,sourceOk:qe,dictLoading:P,dictError:v,dictCategory:j,dictData:ne,loadDataDict:$,ncTab:fe,ncRules:Ce,ncHistory:Y,ncChannels:de,ncLoading:De,ncNewCode:ae,ncNewType:ye,ncNewThreshold:Te,ncSilence:ue,ncSilenceMinutes:be,ncMsg:ke,ncTypeLabel:re,onNcTab:Fe,loadAlertRules:te,loadAlertHistory:ve,loadAlertChannels:Le,addAlertRule:He,toggleAlertRule:Mt,removeAlertRule:mt,applySilence:Pt,clearSilence:_e,freshnessItems:k,freshnessLoading:y,loadFreshness:I,goSystemSub:m}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:`
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
                </div>`,setup(){const{ref:e,watch:m,onUnmounted:t}=Vue,c=a("qcState");if(!c)return{};function d(){if(!c.hasMoreAiHistory||!c.loadMoreAiHistory||c.currentPage.value!=="ai"||c.currentSubPage.value!=="history")return;const fe=document.documentElement;fe.scrollTop+window.innerHeight>=fe.scrollHeight-300&&c.loadMoreAiHistory()}window.addEventListener("scroll",d,{passive:!0}),t(()=>window.removeEventListener("scroll",d));const x=e(null),r=e(!1),n=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function p(fe){return!fe||fe.total===0||fe.rate===null||fe.rate===void 0?"--":fe.rate.toFixed(2)+"%"}const o=e(5);function q(fe){o.value=fe}function b(fe,Ce){if(!fe)return"--";if(fe.available===!1)return"— 数据不可达";const Y=fe["hit_n"+Ce];return Y===!0?"✓ 命中":Y===!1?"✗ 未中":"– 中性/待验证"}async function _(){r.value=!0;try{const Ce=await(await fetch("/api/ai/track")).json();x.value=Ce&&Ce.success?Ce.data:null}catch(fe){console.warn("[eval-track] 评估命中率加载失败:",fe),x.value=null}finally{r.value=!1}}m(function(){return c.currentPage.value+"/"+c.currentSubPage.value},function(fe){fe==="ai/evaluation-analysis"&&_()},{immediate:!0});const k=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:y,summary:I,trades:M,loading:u,loadError:l,showAddForm:g,addForm:E,addSaving:O,tradeFormVisible:w,tradeForm:D,tradeSaving:T,portfolioTab:B,equityDays:F,equityLoading:U,equityNote:J,equityHasData:ee,loadPortfolio:H,addPosition:Z,removePosition:z,openTradeForm:s,submitTrade:S,loadTrades:i,loadEquity:h,fmtSigned:X,fmtSignedPct:N,signClass:C,riskTab:f,riskLoading:P,riskNote:v,riskHasData:j,riskData:ne,riskMetricList:$,loadRisk:L}=k;m(y,function(fe){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((fe||[]).map(function(Ce){return{code:Ce.stock_code,name:Ce.stock_name||Ce.stock_code}}))},{deep:!0}),m(function(){return c.currentPage.value+"/"+c.currentSubPage.value},function(fe){fe==="ai/portfolio"?(H(),i(),h(F?F.value:30),typeof L=="function"&&L()):fe==="ai/overview"&&H()},{immediate:!0});let Q="",oe=!1;return m(function(){const fe=c.currentSubPage&&c.currentSubPage.value,Ce=!!(c.detailSplitEnabled&&c.detailSplitEnabled.value),Y={sub:fe,split:Ce,kind:"",view:"",key:"",first:null,expandList:null,expandFn:null};if(fe==="history"){const de=c.aiHistoryView&&c.aiHistoryView.value||"date",De=de==="date"?c.groupedByDate:de==="month"?c.groupedByMonth:c.aiHistoryByStock,ae=De&&De.value||{},ye=Object.keys(ae);Y.kind="history",Y.view=de,Y.key=ye.length?ye[0]:"",Y.first=ye.length&&(ae[ye[0]]||[])[0]||null,Y.expandList=de==="date"?c.expandedDates:de==="month"?c.expandedMonths:c.expandedStocks,Y.expandFn=de==="date"?c.toggleDateExpand:de==="month"?c.toggleMonthExpand:c.toggleStockExpand}else if(fe==="chat_history"){const de=c.chatHistoryView&&c.chatHistoryView.value||"date",De=de==="date"?c.chatGroupedByDate:de==="month"?c.chatGroupedByMonth:c.chatGroupedByStock,ae=De&&De.value||{},ye=Object.keys(ae);Y.kind="chat",Y.view=de,Y.key=ye.length?ye[0]:"",Y.first=ye.length&&(ae[ye[0]]||[])[0]||null,Y.expandList=de==="date"?c.expandedChatDates:de==="month"?c.expandedChatMonths:c.expandedChatStocks,Y.expandFn=de==="date"?c.toggleChatDateExpand:de==="month"?c.toggleChatMonthExpand:c.toggleChatStockExpand}return Y},function(fe){if(!fe.split||!fe.first||!fe.kind)return;const Ce=fe.sub!==Q,Y=c.stockDetail&&c.stockDetail.value,de=!!(Y&&Y.stock);if(!Ce&&de||oe)return;Q=fe.sub,oe=!0;try{fe.key&&fe.expandList&&fe.expandFn&&fe.expandList.value&&fe.expandList.value.indexOf(fe.key)<0&&fe.expandFn(fe.key)}catch{}const De=fe.kind==="history"?c.viewAiResult(fe.first):c.viewChatSession(fe.first);De&&typeof De.finally=="function"?De.finally(function(){oe=!1}):oe=!1},{immediate:!0}),{...c,trackData:x,trackLoading:r,trackWindows:n,fmtTrackRate:p,loadTrack:_,trackWindow:o,setTrackWindow:q,trackHitText:b,positions:y,summary:I,trades:M,loading:u,loadError:l,showAddForm:g,addForm:E,addSaving:O,tradeFormVisible:w,tradeForm:D,tradeSaving:T,portfolioTab:B,equityDays:F,equityLoading:U,equityNote:J,equityHasData:ee,loadPortfolio:H,addPosition:Z,removePosition:z,openTradeForm:s,submitTrade:S,loadTrades:i,loadEquity:h,fmtSigned:X,fmtSignedPct:N,signClass:C,riskTab:f,riskLoading:P,riskNote:v,riskHasData:j,riskData:ne,riskMetricList:$,loadRisk:L}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.marketReview={create:function(a){const{ref:e,seq:m,authHeaders:t}=a,c=e([]),d=e(!1),x=e(!1),r=e(""),n=e(null),p=e(!1),o=e(!1);async function q(){const E=++m.n;d.value=!0,x.value=!1;try{const O=await fetch("/api/market/reviews?limit=30",{headers:_authHeaders()}).then(w=>w.json());if(E!==m.n)return;O&&O.success?c.value=Array.isArray(O.data)?O.data:[]:x.value=!0}catch(O){console.error("[market-review] 复盘列表加载失败:",O),x.value=!0}finally{E===m.n&&(d.value=!1)}}function b(E){r.value=E,M(E)}function _(E){r.value===E?I():b(E)}function k(E){return E==null||isNaN(Number(E))?"—":(Number(E)>=0?"+":"")+Number(E).toFixed(2)+"%"}function y(E){return E==null||isNaN(Number(E))?"—":Number(E).toFixed(2)}function I(){r.value="",n.value=null,o.value=!1}async function M(E){const O=++m.n;p.value=!0,o.value=!1,n.value=null;try{const w=E?"/api/market/review?date="+encodeURIComponent(E):"/api/market/review",D=await fetch(w,{headers:_authHeaders()}).then(T=>T.json());if(O!==m.n)return;D&&D.success?n.value=D.data:o.value=!0}catch(w){console.error("[market-review] 复盘详情加载失败:",w),o.value=!0}finally{O===m.n&&(p.value=!1)}}function u(E){return E>0?"up":E<0?"down":"flat"}function l(E){return E==null||isNaN(Number(E))?"—":(E>0?"+":"")+Number(E).toFixed(2)+"%"}function g(E){const O={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(E||{}).map(function(w){const D=w[0],T=w[1],B=!T||T==="unavailable"||T==="数据不可达";return{label:O[D]||D,value:B?"数据不可达":T,unavailable:B}})}return{marketReviews:c,marketReviewLoading:d,marketReviewError:x,selectedReviewDate:r,marketReviewDetail:n,marketReviewDetailLoading:p,marketReviewDetailError:o,loadMarketReviews:q,openMarketReview:b,toggleMarketReviewDate:_,backToMarketReviewList:I,loadMarketReviewDetail:M,marketReviewChgClass:u,marketReviewChgText:l,marketReviewSrcEntries:g,fmtPct:k,fmtEmotion:y}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.factor={create:function(a){const{ref:e,seq:m,withAuth:t,authHeaders:c,activeStrategyId:d,paramValues:x}=a,r=e("mom20"),n=e(!1),p=e(!1),o=e(null),q=e(null),b=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],_=e('{"top_n":[10,20,30]}'),k=e(null),y=e(""),I=e(!1),M=e(null);async function u(){if(!d.value){ElementPlus.ElMessage.warning("请先选择策略");return}let D;try{D=JSON.parse(_.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!D||Object.keys(D).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}I.value=!0,k.value=null,y.value="";try{const T=await fetch("/api/strategies/"+d.value+"/sweep",{method:"POST",headers:_authHeaders(),body:JSON.stringify({param_grid:D})}).then(function(B){return B.json()});T&&Array.isArray(T.results)?(k.value=T.results,y.value="完成 "+T.count+" 组"+(T.data_degraded?" (数据不可达, 结果降级)":""),M.value=T.param_stability||null):y.value=T&&T.detail||"扫描失败"}catch(T){console.error("[sweep]",T),y.value="扫描失败: "+T.message}finally{I.value=!1}}async function l(){const D=++m.n;n.value=!0;try{const T=await t("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:d.value||"multi_factor",factor_key:r.value,params:x.value||{}})}).then(function(F){return F.json()}),B=T&&T.report?T.report.n1||{}:{};o.value=B}catch(T){console.error("[research] 因子IC分析失败:",T),alert("因子 IC 分析失败: "+T.message)}finally{D===m.n&&(n.value=!1)}}async function g(){const D=++m.n;p.value=!0;try{const T=await t("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:d.value||"multi_factor",factor_key:r.value,params:x.value||{}})}).then(function(B){return B.json()});T&&T.layers?q.value=T:alert("分层回测: "+(T.message||"无数据"))}catch(T){console.error("[research] 分层回测失败:",T),alert("分层回测失败: "+T.message)}finally{D===m.n&&(p.value=!1)}}const E=e(null),O=e(!1);async function w(){const D=++m.n;O.value=!0,E.value=null;try{const T=await t("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:d.value||"multi_factor",factor_key:r.value,params:x.value||{}})}).then(function(B){return B.json()});T&&T.detail?E.value=T.detail:alert("因子详情: "+(T.message||"无数据"))}catch(T){console.error("[research] 因子详情失败:",T),alert("因子详情失败: "+T.message)}finally{D===m.n&&(O.value=!1)}}return{factorKey:r,factorIcLoading:n,factorLayerLoading:p,factorIcReport:o,factorLayerResult:q,factorOptions:b,runFactorIc:l,runFactorLayer:g,factorDetail:E,factorDetailLoading:O,runFactorDetail:w,sweepGrid:_,sweepResult:k,sweepMessage:y,sweepLoading:I,sweepStability:M,runSweep:u}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.history={create:function(a){const{seq:e,state:m}=a,t=Vue.ref([]),c=Vue.ref(!1),d=Vue.ref(!1),x=Vue.ref(""),r=Vue.ref([]),n=Vue.ref(""),p=Vue.ref([]),o=Vue.ref(!1),q=Vue.ref(!1),b={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function _(O){return b[O]||O||"—"}function k(O){m&&m.navigateTo&&m.navigateTo("shortterm",O)}function y(){m.currentSubPage.value="research-history",I()}async function I(){const O=++e.n;c.value=!0,d.value=!1;try{const w=window.__quantModules&&window.__quantModules.core||{},D=typeof w.authHeaders=="function"?w.authHeaders():{},T=x.value?"?type="+encodeURIComponent(x.value):"",B=await fetch("/api/strategies/research-history"+T,{headers:D}).then(function(F){return F.json()});if(O!==e.n)return;t.value=B&&B.items||[]}catch(w){console.error("[research-history] 加载失败:",w),d.value=!0}finally{O===e.n&&(c.value=!1)}}async function M(){const O=++e.n;q.value=!0;try{const w=window.__quantModules&&window.__quantModules.core||{},D=typeof w.authHeaders=="function"?w.authHeaders():{},T=x.value?"?type="+encodeURIComponent(x.value):"",B=await fetch("/api/strategies/research-history/export"+T,{headers:D});if(!B.ok)throw new Error("HTTP "+B.status);const F=await B.blob(),U=URL.createObjectURL(F),J=document.createElement("a");J.href=U,J.download="research_history.csv",document.body.appendChild(J),J.click(),document.body.removeChild(J),URL.revokeObjectURL(U)}catch(w){console.error("[research-history] 导出失败:",w)}finally{O===e.n&&(q.value=!1)}}function u(O){const w=r.value.indexOf(O);w>=0?r.value.splice(w,1):r.value.length<10&&r.value.push(O)}function l(O){n.value=n.value===O?"":O}async function g(){const O=++e.n,w=r.value;if(!(w.length<2)){o.value=!0;try{const D=window.__quantModules&&window.__quantModules.core||{},T=typeof D.authHeaders=="function"?D.authHeaders():{},B=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},T),body:JSON.stringify({ids:w})}).then(function(F){return F.json()});p.value=B&&B.items||[]}catch(D){console.error("[research-history] 对比失败:",D)}finally{O===e.n&&(o.value=!1)}}}async function E(O){try{const w=window.__quantModules&&window.__quantModules.core||{},D=typeof w.authHeaders=="function"?w.authHeaders():{},T=await fetch("/api/strategies/research-history/"+O,{method:"DELETE",headers:D}).then(function(B){return B.json()});if(T&&T.deleted){t.value=t.value.filter(function(F){return F.id!==O});const B=r.value.indexOf(O);B>=0&&r.value.splice(B,1)}}catch(w){console.error("[research-history] 删除失败:",w)}}return{researchHistory:t,researchHistoryLoading:c,researchHistoryError:d,researchHistoryType:x,researchHistorySelected:r,researchDetailId:n,researchCompareRows:p,researchCompareLoading:o,researchExportLoading:q,researchTypeLabel:_,goShortterm:k,openResearchHistory:y,loadResearchHistory:I,exportResearchHistory:M,toggleResearchSelect:u,toggleResearchDetail:l,runResearchCompare:g,deleteResearchHistory:E}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.researchPage=window.__quantModules.researchPage||{};window.__quantModules.researchPage.part1=`
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
                </div>`;window.__quantModules=window.__quantModules||{};window.__quantModules.researchPage=window.__quantModules.researchPage||{};window.__quantModules.researchPage.view=window.__quantModules.researchPage.part1+window.__quantModules.researchPage.part2;(function(){const{ref:a,computed:e,watch:m,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:window.__quantModules.researchPage.view,setup(){const c=t("qcState"),d=Vue.ref(!1),x=Vue.ref(!1),r={n:0};if(!c)return{};const n=a(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function p(W){n.value=W;try{localStorage.setItem("quant_strategy_mode",W)}catch{}c.currentSubPage.value="strategy-manage"}const o=a([]),q=a(!1),b=a(!1),_=a(""),k=a(""),y=a(""),I=a({}),M=a(!1),u=a(""),l=a(""),g=a([]),E=a([]),O=a(""),w=a(""),D=a(!0),T=a(!0),B=a("20:00"),F=a("default"),U=a(!1),J=a(""),ee=e(function(){return o.value.find(function(W){return W.id===y.value})||null});async function H(W,pe){pe=pe||{},pe.headers=Object.assign({},pe.headers||{});const R=localStorage.getItem("quant_token")||"";return R&&(pe.headers.Authorization="Bearer "+R),fetch(W,pe)}async function Z(){const W=++r.n;q.value=!0,b.value=!1,_.value="",k.value="";try{const pe=await H("/api/strategies").then(function(se){return se.json()});if(W!==r.n)return;let R=null;Array.isArray(pe)?R=pe:pe&&Array.isArray(pe.strategies)?(R=pe.strategies,pe.warn&&(k.value=String(pe.warn))):(b.value=!0,_.value=pe&&pe.detail?String(pe.detail):"策略列表加载失败（接口返回异常）"),R!==null&&(o.value=R,o.value.length&&!y.value&&(y.value=o.value[0].id,z()))}catch(pe){console.error("[research] 策略列表加载失败:",pe),b.value=!0,_.value="策略列表加载失败: "+(pe&&pe.message||"网络错误")}finally{W===r.n&&(q.value=!1)}}function z(){const W=ee.value;W&&(I.value={},W.schema.forEach(function(pe){I.value[pe.key]=pe.default}),l.value="",j(),s(),X())}async function s(){if(!y.value){E.value=[];return}try{const W=await H("/api/strategies/"+y.value+"/profiles").then(function(pe){return pe.json()});E.value=W&&W.data&&W.data.profiles||[],O.value=""}catch(W){console.error("[research] 方案列表加载失败:",W),E.value=[]}}async function S(){d.value=!0;const W=(w.value||"").trim();if(!W){window._core&&window._core.showToast("请输入方案名称");return}try{const pe=await H("/api/strategies/"+y.value+"/profiles",{method:"POST",body:JSON.stringify({name:W,params:I.value})}).then(function(R){return R.json()});if(pe&&pe.detail){window._core&&window._core.showToast(String(pe.detail));return}w.value="",await s(),window._core&&window._core.showToast("方案已保存")}catch(pe){console.error("[research] 方案保存失败:",pe),window._core&&window._core.showToast("方案保存失败")}}function i(){const W=E.value.find(function(pe){return pe.id===O.value});W&&(Object.keys(W.params||{}).forEach(function(pe){I.value[pe]=W.params[pe]}),window._core&&window._core.showToast("已应用方案: "+W.name))}async function h(){if(O.value)try{await H("/api/strategies/"+y.value+"/profiles/"+O.value,{method:"DELETE"}).then(function(W){return W.json()}),await s(),window._core&&window._core.showToast("方案已删除")}catch(W){console.error("[research] 方案删除失败:",W)}}async function X(){try{const W=await H("/api/strategies/governance").then(function(se){return se.json()}),R=(W&&W.data&&W.data.strategies||{})[y.value]||{};D.value=R.enabled!==!1,B.value=R.schedule||"20:00",F.value=R.universe==="all"?"all":"default",T.value=R.show_in_calendar!==!1,J.value=R.last_holdings||""}catch(W){console.error("[research] 纳管状态加载失败:",W)}}async function N(){try{await H("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const W={};return W[y.value]={enabled:D.value,schedule:B.value,universe:F.value,show_in_calendar:T.value},W}()})}).then(function(W){return W.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(W){console.error("[research] 纳管更新失败:",W)}}async function C(){if(y.value){U.value=!0;try{const W=await H("/api/strategies/"+y.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:u.value||void 0})}).then(function(pe){return pe.json()});if(W&&W.detail){window._core&&window._core.showToast(String(W.detail));return}window._core&&window._core.showToast("持仓已生成"),await X()}catch(W){console.error("[research] run-once 失败:",W),window._core&&window._core.showToast("持仓生成失败")}finally{U.value=!1}}}function f(){J.value&&window.open(J.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function P(){const W=ee.value;if(!W)return;const pe=(w.value||"").trim()||W.name+"-副本";v(pe,Object.assign({},I.value)),window._core&&window._core.showToast("已复制为副本方案: "+pe)}async function v(W,pe){try{await H("/api/strategies/"+y.value+"/profiles",{method:"POST",body:JSON.stringify({name:W,params:pe})}).then(function(R){return R.json()}),await s()}catch(R){console.error("[research] 副本保存失败:",R)}}async function j(){const W=++r.n;if(y.value)try{const pe=await H("/api/strategies/"+y.value+"/runs?limit=5").then(function(R){return R.json()});if(W!==r.n)return;g.value=Array.isArray(pe)?pe:[]}catch{g.value=[]}}async function ne(){if(y.value){M.value=!0;try{const W=await H("/api/strategies/"+y.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:I.value,as_of:u.value||void 0})}).then(function(pe){return pe.json()});W&&W.status==="success"?j():alert("运行失败: "+(W.detail||JSON.stringify(W)))}catch(W){console.error("[research] 策略运行失败:",W),alert("运行失败: "+W.message)}finally{M.value=!1}}}async function $(){if(y.value)try{const W=Object.keys(I.value).map(function(R){return encodeURIComponent(R)+"="+encodeURIComponent(I.value[R])}).join("&"),pe=await H("/api/strategies/"+y.value+"/ptrade-code?"+W).then(function(R){return R.json()});pe&&pe.code?l.value=pe.code:alert("导出失败: "+(pe.detail||JSON.stringify(pe)))}catch(W){console.error("[research] PTrade 导出失败:",W),alert("导出失败: "+W.message)}}function L(){if(!l.value)return;const W=document.createElement("textarea");W.value=l.value,document.body.appendChild(W),W.select();try{document.execCommand("copy")}catch{}document.body.removeChild(W)}const Q=window.__quantModules.researchPage.marketReview.create({ref:a,seq:r,authHeaders:$e}),{marketReviews:oe,marketReviewLoading:fe,marketReviewError:Ce,selectedReviewDate:Y,marketReviewDetail:de,marketReviewDetailLoading:De}=Q,{marketReviewDetailError:ae,loadMarketReviews:ye,openMarketReview:Te,toggleMarketReviewDate:ue,backToMarketReviewList:be,loadMarketReviewDetail:ke}=Q,{marketReviewChgClass:re,marketReviewChgText:te,marketReviewSrcEntries:ve,fmtPct:Le,fmtEmotion:Fe}=Q,He=window.__quantModules.researchPage.factor.create({ref:a,seq:r,withAuth:H,authHeaders:$e,activeStrategyId:y,paramValues:I}),{factorKey:Mt,factorIcLoading:mt,factorLayerLoading:Pt,factorIcReport:_e,factorLayerResult:qe,factorOptions:Oe}=He,{runFactorIc:Ie,runFactorLayer:Ye,factorDetail:Qe,factorDetailLoading:We,runFactorDetail:ot,sweepGrid:gt}=He,{sweepResult:Dt,sweepMessage:Kt,sweepLoading:ea,sweepStability:$t,runSweep:A}=He,le=window.__quantModules.researchPage.history.create({seq:r,state:c}),{researchHistory:Ee,researchHistoryLoading:Ae,researchHistoryError:Ue,researchHistoryType:ft,researchHistorySelected:Je,researchDetailId:Rt}=le,{researchCompareRows:at,researchCompareLoading:bt,researchExportLoading:st,researchTypeLabel:Nt,goShortterm:xt,openResearchHistory:G}=le,{loadResearchHistory:we,exportResearchHistory:Ze,toggleResearchSelect:Ke,toggleResearchDetail:St,runResearchCompare:Tt,deleteResearchHistory:Ft}=le;m(function(){return c.currentPage.value+"/"+c.currentSubPage.value},function(W){W==="research/research-overview"&&(Z(),ye(),Ut(),na()),(W==="research/market-review"||W==="shortterm/market-review")&&!Y.value&&ye(),W==="research/quant-research"&&Z(),W==="research/backtest-history"&&Da()},{immediate:!0});const nt=a([]),wt=a(null),Wt=a(null),ba=a(null),rt=a(""),Xt=a(!1),Ct=a(!1),ht=a(""),ta=a(""),aa=a("");function $e(){const W=localStorage.getItem("quant_token")||"";return W?{Authorization:"Bearer "+W,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function Ut(){const W=++r.n;try{const pe=await fetch("/api/strategies/variants",{headers:$e()}).then(function(R){return R.json()});if(W!==r.n)return;nt.value=pe&&pe.data&&pe.data.variants||[]}catch(pe){console.error("[i3a] 加载 variants 失败:",pe)}}async function da(){if(!y.value){ht.value="请先在量化研究选择母本策略";return}Ct.value=!0,ht.value="";try{const W=await fetch("/api/strategies/"+y.value+"/clone",{method:"POST",headers:$e(),body:JSON.stringify({name:(w.value||"").trim()||void 0,params:Object.assign({},I.value)})}).then(function(R){return R.json()});if(W&&W.detail){ht.value=String(W.detail);return}const pe=W&&W.data;pe&&pe.sid&&(wt.value=pe.sid,ht.value="已复制为新策略: "+pe.name,await Ut(),await la(pe.sid))}catch(W){console.error("[i3a] 复制失败:",W),ht.value="复制失败: "+W.message}finally{Ct.value=!1}}async function wa(W){wt.value=W,ht.value="",rt.value="",await la(W)}async function la(W){try{const pe=await fetch("/api/strategies/"+W+"/selection-spec",{headers:$e()}).then(function(R){return R.json()});pe&&pe.data&&pe.data.spec&&(Wt.value=Object.assign({},pe.data.spec),ba.value=pe.data.fields,ta.value=(pe.data.spec.industry_scope||[]).join(","),aa.value=(pe.data.spec.market_cap_range||[]).join(","))}catch(pe){console.error("[i3a] 加载 spec 失败:",pe)}}async function ia(){if(x.value=!0,!(!wt.value||!Wt.value))try{Wt.value.industry_scope=ta.value?ta.value.split(/[,，]/).map(function(pe){return pe.trim()}).filter(Boolean):[],Wt.value.market_cap_range=aa.value?aa.value.split(/[,，]/).map(Number).filter(function(pe){return!isNaN(pe)}):[];const W=await fetch("/api/strategies/"+wt.value+"/selection-spec",{method:"PUT",headers:$e(),body:JSON.stringify({spec:Wt.value})}).then(function(pe){return pe.json()});W&&W.data&&W.data.spec&&(Wt.value=W.data.spec,ht.value="SelectionSpec 已保存")}catch(W){console.error("[i3a] 保存 spec 失败:",W),ht.value="保存失败"}}async function K(){if(!wt.value){ht.value="请先选择/创建微调策略";return}Ct.value=!0,ht.value="";try{const W=await fetch("/api/strategies/"+wt.value+"/run-once",{method:"POST",headers:$e(),body:"{}"}).then(function(pe){return pe.json()});ht.value=W&&W.detail?String(W.detail):"持仓已生成: "+(W&&W.data&&W.data.symbols||0)+" 只"}catch(W){console.error("[i3a] run-once 失败:",W),ht.value="生成持仓失败"}finally{Ct.value=!1}}async function xe(){if(!wt.value){ht.value="请先选择/创建微调策略";return}Wt.value||await la(wt.value),Xt.value=!0,ht.value="";try{const W=await fetch("/api/strategies/"+wt.value+"/ai-trade-code",{method:"POST",headers:$e(),body:JSON.stringify({spec:Wt.value})}).then(function(pe){return pe.json()});if(W&&W.detail){ht.value=String(W.detail);return}W&&W.data&&(rt.value=W.data.code||"",W.data.api_errors&&W.data.api_errors.length?ht.value="生成成功(含 API 校验告警 "+W.data.api_errors.length+" 条)":ht.value="AI 交易码已生成, 已通过矩阵内校验")}catch(W){console.error("[i3a] AI 交易码失败:",W),ht.value="AI 生成失败: "+W.message}finally{Xt.value=!1}}function je(){if(rt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(rt.value).then(function(){ht.value="代码已复制"});else{const W=document.createElement("textarea");W.value=rt.value,document.body.appendChild(W),W.select(),document.execCommand("copy"),document.body.removeChild(W),ht.value="代码已复制"}}const ze=a(""),dt=a(""),et=a([]),_t=a(""),Lt=a(""),yt=a(""),Sa=a(null),oa=a(!1),ua=a(!1),sa=a(!1);function va(){const W=localStorage.getItem("quant_token")||"";return W?{Authorization:"Bearer "+W,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function na(){const W=++r.n;try{const pe=await fetch("/api/strategies/custom",{headers:va()}).then(function(R){return R.json()});if(W!==r.n)return;et.value=pe&&pe.data&&pe.data.customs||[]}catch(pe){console.error("[i3b] 加载自定义策略失败:",pe)}}async function La(){if(!dt.value.trim()){yt.value="请描述策略思路";return}oa.value=!0,yt.value="";try{const W=await fetch("/api/strategies/custom",{method:"POST",headers:va(),body:JSON.stringify({name:ze.value.trim()||"自定义策略",prompt:dt.value})}).then(function(pe){return pe.json()});if(W&&W.detail){yt.value=String(W.detail);return}W&&W.data&&(Lt.value=W.data.code||"",yt.value="AI 代写成功: "+W.data.sid+(W.data.api_errors&&W.data.api_errors.length?" (API 告警 "+W.data.api_errors.length+" 条)":" (校验通过)"),await na())}catch(W){console.error("[i3b] AI 代写失败:",W),yt.value="AI 代写失败: "+W.message}finally{oa.value=!1}}async function ma(){if(_t.value)try{const W=await fetch("/api/strategies/custom/"+_t.value+"/code",{headers:va()}).then(function(pe){return pe.json()});W&&W.data&&(Lt.value=W.data.code||"",yt.value="")}catch(W){console.error("[i3b] 读取代码失败:",W)}}async function Ia(){if(!_t.value){yt.value="请先选择自定义策略";return}ua.value=!0,yt.value="";try{const W=await fetch("/api/strategies/custom/"+_t.value+"/backtest",{method:"POST",headers:va(),body:"{}"}).then(function(pe){return pe.json()});if(W&&W.detail){yt.value=String(W.detail);return}W&&W.data&&(Sa.value=W.data,yt.value="回测完成")}catch(W){console.error("[i3b] 回测失败:",W),yt.value="回测失败: "+W.message}finally{ua.value=!1}}async function ka(){if(!_t.value){yt.value="请先选择自定义策略";return}sa.value=!0,yt.value="";try{const W=await fetch("/api/strategies/custom/"+_t.value+"/ai-optimize",{method:"POST",headers:va(),body:JSON.stringify({backtest:Sa.value})}).then(function(pe){return pe.json()});if(W&&W.detail){yt.value=String(W.detail);return}W&&W.data&&(Lt.value=W.data.code||"",yt.value="AI 优化完成"+(W.data.api_errors&&W.data.api_errors.length?" (API 告警 "+W.data.api_errors.length+" 条)":" (校验通过)"))}catch(W){console.error("[i3b] AI 优化失败:",W),yt.value="AI 优化失败: "+W.message}finally{sa.value=!1}}function Na(){if(Lt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Lt.value).then(function(){yt.value="代码已复制"});else{const W=document.createElement("textarea");W.value=Lt.value,document.body.appendChild(W),W.select(),document.execCommand("copy"),document.body.removeChild(W),yt.value="代码已复制"}}const Pa=Vue.ref([]),Bt=Vue.ref(!1),Zt=Vue.ref(!1),Ca=Vue.ref(30);async function Da(){const W=++r.n;Bt.value=!0,Zt.value=!1;try{const pe=window.__quantModules&&window.__quantModules.core||{},R=typeof pe.authHeaders=="function"?pe.authHeaders():{},se=await fetch("/api/backtest/history?days="+Ca.value,{headers:R}).then(function(ce){return ce.json()});if(W!==r.n)return;Pa.value=se&&se.data||[]}catch(pe){console.error("[backtest] 回测历史加载失败:",pe),Zt.value=!0}finally{W===r.n&&(Bt.value=!1)}}return{...c,strategyManageMode:n,openStrategyManage:p,btHistory:Pa,btHistoryLoading:Bt,btHistoryError:Zt,btHistoryDays:Ca,loadBtHistory:Da,researchHistory:Ee,researchHistoryLoading:Ae,researchHistoryError:Ue,researchHistoryType:ft,researchHistorySelected:Je,researchDetailId:Rt,researchCompareRows:at,researchCompareLoading:bt,researchTypeLabel:Nt,goShortterm:xt,openResearchHistory:G,loadResearchHistory:we,researchExportLoading:st,exportResearchHistory:Ze,toggleResearchSelect:Ke,toggleResearchDetail:St,runResearchCompare:Tt,deleteResearchHistory:Ft,marketReviews:oe,marketReviewLoading:fe,marketReviewError:Ce,selectedReviewDate:Y,marketReviewDetail:de,marketReviewDetailLoading:De,marketReviewDetailError:ae,loadMarketReviews:ye,openMarketReview:Te,toggleMarketReviewDate:ue,backToMarketReviewList:be,loadMarketReviewDetail:ke,marketReviewChgClass:re,marketReviewChgText:te,marketReviewSrcEntries:ve,fmtPct:Le,fmtEmotion:Fe,strategies:o,strategiesLoading:q,strategiesError:b,strategiesErrorText:_,strategiesWarn:k,activeStrategyId:y,activeStrategy:ee,paramValues:I,strategyRunning:M,ptradeCode:l,strategyRuns:g,savingProfile:d,variantSaving:x,loadStrategies:Z,onStrategyChange:z,runActiveStrategy:ne,exportActivePtradeCode:$,copyPtradeCode:L,profiles:E,profileSelect:O,profileName:w,loadProfiles:s,saveProfile:S,applyProfile:i,deleteProfile:h,govEnabled:D,govSchedule:B,govUniverse:F,govRunning:U,lastHoldings:J,loadGov:X,updateGov:N,runOnceActive:C,openLastHoldings:f,cloneStrategy:P,govShowCalendar:T,factorKey:Mt,factorIcLoading:mt,factorLayerLoading:Pt,factorIcReport:_e,factorLayerResult:qe,factorOptions:Oe,runFactorIc:Ie,runFactorLayer:Ye,factorDetail:Qe,factorDetailLoading:We,runFactorDetail:ot,variants:nt,variantSelected:wt,variantSpec:Wt,specFields:ba,aiCode:rt,aiCodeLoading:Xt,variantBusy:Ct,variantMsg:ht,loadVariants:Ut,cloneNewStrategy:da,selectVariant:wa,loadVariantSpec:la,saveVariantSpec:ia,runVariantOnce:K,genVariantAiCode:xe,copyVariantCode:je,customName:ze,customPrompt:dt,customs:et,customSelected:_t,customCode:Lt,customMsg:yt,customBtResult:Sa,customGenLoading:oa,customBtLoading:ua,customOptLoading:sa,loadCustoms:na,genCustomCode:La,loadCustomCode:ma,runCustomBacktest:Ia,runCustomOptimize:ka,copyCustomCode:Na,sweepGrid:gt,sweepResult:Dt,sweepMessage:Kt,sweepLoading:ea,sweepStability:$t,runSweep:A}}}})();(function(){const{inject:a,ref:e,onMounted:m,computed:t,nextTick:c}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
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
                </div>`,setup(){const d=a("qcState");if(!d)return{};const x=d.currentPage,r=d.currentSubPage,n=e(""),p=e(null),o=e(!1),q=e(!1),b=e("数据加载失败"),_=e("请检查服务后重试"),k=e(null),y=e(null),I=e(!1),M=e(!1),u=e("数据加载失败"),l=e("请检查服务后重试"),g=e(null),E=e(1),O=50,w=t(function(){const K=y.value||[];if(K.length<=200)return K;const xe=(E.value-1)*O;return K.slice(xe,xe+O)}),D=e(null),T=e(!1),B=e(!1),F=e("数据加载失败"),U=e("请检查服务后重试"),J=e([]),ee=e(!1);async function H(){ee.value=!0;try{const K=await be("/api/shortterm/dates/summary",!1);K&&K.success&&(J.value=K.dates||[])}catch{J.value=[]}finally{ee.value=!1}}function Z(K){K!==n.value&&(n.value=K,G(!0))}const z=e("行业资金流"),s=e("今日"),S=e(""),i=e(null),h=e(1),X=e(!1),N=e(!1),C=e("数据加载失败"),f=e("请检查服务后重试"),P=e(""),v=e(null),j=e(!1),ne=e(null),$=e(!1),L=e(!1),Q=e(""),oe=e(""),fe=e(!1);function Ce(){const K=localStorage.getItem("quant_token")||"";return K?{Authorization:"Bearer "+K,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const Y={},de=[],De=50,ae=60*1e3;let ye=0,Te=0,ue=0;function be(K,xe){const je=Date.now(),ze=Y[K];return!xe&&ze&&je-ze.ts<ae?Promise.resolve(ze.data):fetch(K,{headers:Ce()}).then(function(dt){return dt.json()}).then(function(dt){if(Y[K]||de.push(K),Y[K]={ts:Date.now(),data:dt},de.length>De){const et=de.shift();delete Y[et]}return dt})}async function ke(K){const xe=++ye;o.value=!0,q.value=!1;try{const je="/api/shortterm/pools"+(n.value?"?date="+n.value:""),ze=await be(je,K);if(xe!==ye)return;ze&&ze.success?(p.value=ze,c(st)):ze&&ze.detail?(q.value=!0,b.value=String(ze.detail),_.value="请先登录后再查看"):(q.value=!0,b.value="数据加载失败",_.value="请检查服务后重试")}catch{if(xe!==ye)return;q.value=!0,b.value="数据加载失败",_.value="请检查服务后重试"}finally{xe===ye&&(o.value=!1)}}async function re(K){const xe=++ye;I.value=!0,M.value=!1;try{const je="/api/shortterm/lhb"+(n.value?"?date="+n.value:""),ze=await be(je,K);if(xe!==ye)return;ze&&ze.success?(y.value=Array.isArray(ze.rows)?ze.rows:null,g.value=ze.available===!1&&ze.reason||null,E.value=1):ze&&ze.detail?(M.value=!0,u.value=String(ze.detail),l.value="请先登录后再查看"):(M.value=!0,u.value="数据加载失败",l.value="请检查服务后重试")}catch{if(xe!==ye)return;M.value=!0,u.value="数据加载失败",l.value="请检查服务后重试"}finally{xe===ye&&(I.value=!1)}}const te=t(function(){const K=p.value&&p.value.ladder&&p.value.ladder.tiers;return!K||!Object.keys(K).length?"—":Object.keys(K).sort(function(xe,je){return xe-je}).map(function(xe){return xe+"板:"+K[xe]}).join(" ")}),ve=t(function(){const K=p.value&&p.value.zt||[];return k.value?K.filter(function(xe){return xe.boards===k.value}):K});function Le(){k.value=null}const Fe=t(function(){const K=D.value&&D.value.emotion&&D.value.emotion.money_effect;return!K||!K.available?"—":K.source==="settled"?"定稿记录":K.source==="realtime"?K.partial?"实时(样本不全)":"实时":"—"}),He=t(function(){const K=D.value&&D.value.emotion&&D.value.emotion.promotion&&D.value.emotion.promotion.tiers&&D.value.emotion.promotion.tiers["1进2"];return K?K.rate:null}),Mt=t(function(){const K=D.value&&D.value.emotion&&D.value.emotion.sentiment_cycle;return K&&K.available&&K.current_score!=null?K.current_score.toFixed(2):"—"}),mt=t(function(){const K=D.value&&D.value.emotion&&D.value.emotion.sentiment_cycle;return!K||!K.available?"—":(K.trend||"—")+(K.day_n!=null?" · 距低谷"+K.day_n+"天":"")});t(function(){const K=D.value&&D.value.emotion;if(!K)return"";const xe=[];for(const je of["money_effect","promotion","consec_premium","sentiment_cycle"]){const ze=K[je];ze&&ze.available===!1&&ze.reason&&xe.push(String(ze.reason).replace(/^[[^]]*]s*/,""))}return xe.join("；")}),t(function(){const K=D.value&&D.value.facts;if(!K)return"";const xe=[];for(const je of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const ze=K[je];ze&&ze.available===!1&&ze.reason&&xe.push(String(ze.reason).replace(/^[[^]]*]s*/,""))}return xe.join("；")});function Pt(K){return K==null||isNaN(K)?"—":(K*100).toFixed(0)+"%"}function _e(K,xe){return K==null?"—":(typeof K=="number"?Math.round(K*100)/100:K)+(xe||"")}function qe(K){return"tag-chip mr-4"}function Oe(K){return K==null?"":K>0?"is-rise":K<0?"is-fall":""}function Ie(K){return K==="机构"?"is-institution":K==="游资"?"is-hotmoney":K==="主力"?"is-main":""}const Ye=t(function(){const K=D.value&&D.value.session_status;if(!K)return"—";const xe=D.value.date;return xe===K.latest_session&&K.settled?"已收盘":xe===K.today&&K.is_trade_day&&!K.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),Qe=t(function(){const K=D.value&&D.value.session_status;if(!K)return"";const xe=D.value.date;return xe===K.latest_session&&K.settled?"is-institution":xe===K.today&&K.is_trade_day&&!K.settled?"is-main":""});function We(K){K&&K.ts_code&&d&&d.showStockDetail&&d.showStockDetail(K.ts_code)}const ot=t(function(){return(y.value||[]).filter(function(K){return(K.tags||[]).indexOf("机构")>=0}).reduce(function(K,xe){return K+(xe.net_buy||0)},0)}),gt=t(function(){return(y.value||[]).filter(function(K){return(K.tags||[]).indexOf("游资")>=0}).length}),Dt=t(function(){const K=(i.value||[]).filter(function(xe){return xe.main_net_inflow!=null});return K.length?K.reduce(function(xe,je){return xe.main_net_inflow>=je.main_net_inflow?xe:je}):null}),Kt=t(function(){const K=Dt.value;return K?K.name:"—"}),ea=t(function(){const K=Dt.value;return K?K.main_net_inflow:null}),$t=t(function(){return P.value||"东财"}),A=t(function(){const K=(S.value||"").trim(),xe=i.value||[];return K?xe.filter(function(je){return je.name&&String(je.name).indexOf(K)>=0}):xe});function le(K){S.value=K||"",d&&d.currentSubPage&&(d.currentSubPage.value="sector")}const Ee=t(function(){const K=A.value;if(K.length<=200)return K;const xe=(h.value-1)*O;return K.slice(xe,xe+O)}),Ae=["09:25","09:35","10:00","11:30","14:00","15:00"],Ue=t(function(){const K={};return(ne.value||[]).forEach(function(xe){K[xe.slot]=!0}),K});function ft(K){return Ue.value[K]?"is-done":K===Je.value?"is-current":"is-empty"}const Je=t(function(){const K=new Date,xe=(K.getHours()<10?"0":"")+K.getHours(),je=(K.getMinutes()<10?"0":"")+K.getMinutes(),ze=xe+":"+je;for(var dt=0;dt<Ae.length;dt++)if(ze===Ae[dt])return Ae[dt];for(var et=0;et<Ae.length-1;et++){var _t=Ae[et],Lt=new Date;Lt.setHours(Number(_t.split(":")[0]),Number(_t.split(":")[1]),0,0);var yt=new Date(Lt.getTime()+8*6e4);if(K>=Lt&&K<=yt)return _t}return""}),Rt=t(function(){const K=new Date,xe=Je.value;if(xe)return"当前处于快照窗口 "+xe+" (前后 8 分钟) — 可采集";const je=K.getHours(),ze=K.getMinutes();let dt="";for(let et=0;et<Ae.length;et++){const _t=Ae[et].split(":");if(Number(_t[0])>je||Number(_t[0])===je&&Number(_t[1])>ze){dt=Ae[et];break}}return dt?"下一快照时点 "+dt+" — 非窗口期不可采集":"今日快照时点已全部结束"}),at=e(""),bt=e("info");function st(){const K=p.value&&p.value.ladder&&p.value.ladder.tiers;if(!K||!Object.keys(K).length)return;const xe=window.__quantModules&&window.__quantModules.charts;if(!xe||!xe.renderSimpleChartTo)return;const je=k.value,ze=xe.renderSimpleChartTo("shorttermLadderChart",function(){const dt=Object.keys(K).sort(function(et,_t){return Number(et)-Number(_t)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:dt.map(function(et){return et+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(et){return je&&Number(dt[et.dataIndex])===je?"var(--color-accent)":"var(--chart-split)"}},data:dt.map(function(et){return K[et]})}]}},{key:"shortterm-ladder"});ze&&ze.off&&(ze.off("click"),ze.on("click",function(dt){if(!dt||!dt.name)return;const et=parseInt(dt.name,10);isNaN(et)||(k.value=k.value===et?null:et)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(st);function Nt(K){if(K==null)return"—";const xe=Math.abs(K);return xe>=1e8?(K/1e8).toFixed(2)+"亿":xe>=1e4?(K/1e4).toFixed(0)+"万":K.toFixed(0)}function xt(K){return K==null?"—":(K>=0?"+":"")+K.toFixed(2)+"%"}async function G(K){const xe=++Te;T.value=!0,B.value=!1;try{const je="/api/shortterm/overview"+(n.value?"?date="+n.value:""),ze=await be(je,K);if(xe!==Te)return;ze&&ze.success?D.value=ze:ze&&ze.detail?(B.value=!0,F.value=String(ze.detail),U.value="请先登录后再查看"):(B.value=!0,F.value="数据加载失败",U.value="请检查服务后重试")}catch{if(xe!==Te)return;B.value=!0,F.value="数据加载失败",U.value="请检查服务后重试"}finally{xe===Te&&(T.value=!1)}}async function we(K){const xe=++ye;X.value=!0,N.value=!1;try{const je="/api/shortterm/sector-flow?indicator="+encodeURIComponent(s.value)+"&sector_type="+encodeURIComponent(z.value),ze=await be(je,K);if(xe!==ye)return;ze&&ze.success&&ze.available?(i.value=ze.rows||[],P.value=ze.source||(ze.note?"同花顺":"东财"),h.value=1):ze&&ze.reason?(N.value=!0,C.value="数据加载失败",f.value=String(ze.reason).replace(/^\[[^\]]*\]\s*/,"")):ze&&ze.detail?(N.value=!0,C.value=String(ze.detail),f.value="请先登录后再查看"):(N.value=!0,C.value="数据加载失败",f.value="请检查服务后重试")}catch{if(xe!==ye)return;N.value=!0,C.value="数据加载失败",f.value="请检查服务后重试"}finally{xe===ye&&(X.value=!1)}}async function Ze(K){const xe=++ue;try{const je="/api/shortterm/review"+(n.value?"?date="+n.value:""),ze=await be(je,K);if(xe!==ue)return;ze&&ze.success&&(v.value=ze.review||null)}catch{}}async function Ke(){j.value=!0;try{const K="/api/shortterm/review"+(n.value?"?date="+n.value:""),xe=await fetch(K,{method:"POST",headers:Ce()}).then(function(je){return je.json()});xe&&xe.success&&(v.value=xe,Y[K]={ts:Date.now(),data:xe})}catch{}finally{j.value=!1}}async function St(){const K=Q.value.trim();if(K){fe.value=!0,oe.value="";try{const je=await fetch("/api/shortterm/review/chat",{method:"POST",headers:Ce(),body:JSON.stringify({date:overviewDate.value,question:K})}).then(function(ze){return ze.json()});oe.value=je.answer||"[无回复]"}catch{oe.value="[发送失败]"}finally{fe.value=!1}}}async function Tt(K){const xe=++ye;$.value=!0;try{const je="/api/shortterm/intraday"+(n.value?"?date="+n.value:""),ze=await be(je,K);if(xe!==ye)return;ze&&ze.success&&(ne.value=ze.snapshots||[])}catch{}finally{xe===ye&&($.value=!1)}}async function Ft(){L.value=!0;try{const K="/api/shortterm/intraday/snapshot"+(n.value?"?date="+n.value:""),xe=await fetch(K,{method:"POST",headers:Ce()}).then(function(je){return je.json()});xe&&xe.success?(xe.accepted?(at.value="已采集 "+xe.slot+" 快照"+(xe.pools_available&&!xe.pools_available.zt?" (池源部分不可用)":""),bt.value="ok"):(at.value="⏱ "+(xe.reason||"非快照时点"),bt.value="warn"),Tt()):at.value="采集失败, 请稍后重试"}catch{at.value="采集失败, 请稍后重试"}finally{L.value=!1}}function nt(){return be("/api/shortterm/latest-session",!1).then(function(K){K&&K.date&&(n.value||(n.value=K.date))}).catch(function(){})}function wt(){const K=r.value;K==="ztpool"?ke():K==="lhb"?re():K==="overview"?(G(),Ze()):K==="sector"?we():K==="intraday"&&Tt()}function Wt(){const K=n.value?"?date="+n.value:"";["/api/shortterm/overview"+K,"/api/shortterm/pools"+K,"/api/shortterm/lhb"+K].forEach(function(je){be(je,!1).catch(function(){})})}function ba(){const K=r.value;K==="ztpool"?ke(!0):K==="lhb"?re(!0):K==="overview"?(G(!0),Ze(!0)):K==="sector"?we(!0):K==="intraday"&&Tt(!0)}m(function(){nt(),wt(),Wt(),da(),H()}),Vue.watch(function(){return r.value},function(K){wt(),K==="overview"&&da()});const rt=window.QuantOnboarding,Xt=e(!1),Ct=e(rt?rt.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),ht=t(function(){return rt&&rt.shorttermTourSteps()[Ct.value.stepIndex]||{key:"",title:"",desc:""}}),ta=t(function(){return rt?rt.shorttermTourProgress(Ct.value):{done:0,total:3,pct:0}}),aa=t(function(){return Ct.value.stepIndex>=2});function $e(){if(rt){var K=null;try{K=localStorage.getItem("qc_shortterm_tour")}catch{}if(K){var xe=rt.parseState(K);xe&&(Ct.value=xe)}}}function Ut(){if(rt){var K=JSON.stringify(Ct.value);try{localStorage.setItem("qc_shortterm_tour",K)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:K}})}).catch(function(){})}catch{}}}function da(){window.__quantGuideModalsEnabled===!0&&rt&&r.value==="overview"&&($e(),rt.shorttermTourShouldShow(Ct.value)&&(Xt.value=!0))}function wa(){Ct.value=rt.shorttermTourNext(Ct.value),Ut()}function la(){Ct.value=rt.shorttermTourComplete(Ct.value),Ut(),Xt.value=!1}function ia(){Ct.value=rt.shorttermTourDismiss(Ct.value),Ut(),Xt.value=!1}return{currentPage:x,currentSubPage:r,shortDate:n,pools:p,poolLoading:o,poolError:q,ztBoardFilter:k,filteredZt:ve,clearBoardFilter:Le,lhbRows:y,lhbLoading:I,lhbError:M,lhbReason:g,lhbPageRows:w,lhbPage:E,overview:D,overviewLoading:T,overviewError:B,dateList:J,dateListLoading:ee,loadDateList:H,pickDate:Z,sectorType:z,sectorIndicator:s,sectorKeyword:S,sectorRows:i,filteredSectorRows:A,sectorPageRows:Ee,sectorPage:h,sectorLoading:X,sectorError:N,sectorFlowSource:P,PAGE_SIZE:O,gotoSector:le,review:v,reviewRunning:j,intradaySnapshots:ne,intradayLoading:$,intradayCollecting:L,intradaySlots:Ae,intradayMsg:at,slotClass:ft,intradayStatus:Rt,chatQuestion:Q,chatAnswer:oe,chatLoading:fe,loadPools:ke,loadLhb:re,loadOverview:G,loadSectorFlow:we,loadReview:Ze,runReview:Ke,sendChat:St,loadIntraday:Tt,collectSnapshot:Ft,refreshCurrent:ba,ladderText:te,fmtAmount:Nt,fmtPct:xt,riseFall:Oe,tagClass:Ie,openStock:We,lhbInstitutionNetBuy:ot,lhbHotMoneyCount:gt,sectorTopName:Kt,sectorTopInflow:ea,sectorSource:$t,moneySource:Fe,promotion1to2:He,cycleScore:Mt,cycleTrend:mt,pct:Pt,fmtCond:_e,verdictClass:qe,sessionStatusText:Ye,sessionStatusClass:Qe,shorttermTourVisible:Xt,shorttermTourState:Ct,shorttermTourStep:ht,shorttermTourProg:ta,shorttermTourIsLast:aa,shorttermTourNext:wa,shorttermTourFinish:la,shorttermTourSkip:ia}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantVirtualList=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(r,n,p,o,q){var b=p>0?p:1,_=typeof q=="number"&&q>=0?q:a,k=Math.max(0,o),y=Math.max(0,r),I=Math.max(0,n),M=Math.max(0,Math.floor(y/b)-_),u=Math.min(k,Math.ceil((y+I)/b)+_);return{startIndex:M,endIndex:u}}function m(r,n){return Math.max(0,r||0)*(n>0?n:0)}function t(r,n,p,o,q){var b=r||[],_=e(n,p,o,b.length,q),k=b.slice(_.startIndex,_.endIndex);return{visible:k,startIndex:_.startIndex,endIndex:_.endIndex,offsetY:_.startIndex*(o>0?o:1),totalHeight:m(b.length,o)}}function c(r,n){if(r){if(r.code!=null)return r.code;if(r.id!=null)return r.id;if(r.ts_code!=null)return r.ts_code}return n}function d(r,n,p){var o=r||[];if(!o.length)return n>0?n:1;for(var q=Math.min(p||50,o.length),b=0,_=0,k=0;k<q;k++){var y=o[k]&&o[k].rowHeight;typeof y=="number"&&y>0&&(b+=y,_++)}return _?b/_:n>0?n:1}function x(r,n,p,o,q){var b=e(r,n,p,o,q),_=Math.max(0,o);return _?(b.endIndex-b.startIndex)/_:0}return{DEFAULT_BUFFER:a,computeVisibleRange:e,computeTotalHeight:m,sliceVisible:t,getRowKey:c,estimateDynamicRowHeight:d,renderedRatio:x}});(function(){const{ref:a,computed:e,onMounted:m,onBeforeUnmount:t}=Vue,c=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:c.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(d){const x=a(null),r=a(0),n=a(400),p=e(()=>(c.computeVisibleRange||function(l,g,E,O,w){const D=E>0?E:1,T=w>=0?w:8,B=Math.max(0,O);return{startIndex:Math.max(0,Math.floor(l/D)-T),endIndex:Math.min(B,Math.ceil((l+g)/D)+T)}})(r.value,n.value,d.rowHeight,d.items.length,d.buffer)),o=e(()=>d.items.length*d.rowHeight),q=e(()=>p.value.startIndex),b=e(()=>p.value.endIndex),_=e(()=>d.items.slice(q.value,b.value));function k(){x.value&&(r.value=x.value.scrollTop)}function y(){x.value&&(n.value=x.value.clientHeight||400)}function I(u,l){return c.getRowKey?c.getRowKey(u,l):u&&u.code!=null?u.code:u&&u.id!=null?u.id:l}let M=null;return m(()=>{y(),x.value&&typeof ResizeObserver<"u"&&(M=new ResizeObserver(()=>y()),M.observe(x.value))}),t(()=>{M&&M.disconnect()}),{scrollEl:x,totalHeight:o,startIndex:q,endIndex:b,visibleItems:_,onScroll:k,keyOf:I}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=e())})(typeof self<"u"?self:void 0,function(){var a=40,e=1.2,m=60,t=500,c=10,d=88,x=350;function r(l,g,E,O,w){w=w||{};var D=typeof w.threshold=="number"?w.threshold:a,T=typeof w.bias=="number"?w.bias:e,B=E-l,F=O-g;return Math.abs(B)<D||Math.abs(B)<Math.abs(F)*T?"none":B<0?"left":"right"}function n(l,g,E){E=E||{};var O=typeof E.threshold=="number"?E.threshold:m;return g-l>=O}function p(l,g){g=g||{};var E=typeof g.threshold=="number"?g.threshold:t;return l>=E}var o=!1;function q(l,g){return l&&typeof l.closest=="function"?l.closest(g):null}function b(l){if(!l)return"";var g=l.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(g){var E=g.getAttribute&&g.getAttribute("data-copy-code");if(E)return E.trim();var O=(g.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(O)return O[0]}var w=l.getAttribute&&l.getAttribute("data-copy-code");return w?w.trim():""}function _(l){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(l).then(function(){return!0}).catch(function(){return k(l)}):Promise.resolve(k(l))}function k(l){try{var g=document.createElement("textarea");return g.value=l,g.style.position="fixed",g.style.opacity="0",document.body.appendChild(g),g.select(),document.execCommand("copy"),document.body.removeChild(g),!0}catch{return!1}}function y(l){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(l)}function I(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function M(){var l=null,g=null,E=null;function O(){g&&(g.timer&&clearTimeout(g.timer),g=null)}function w(ee){E={el:ee,until:Date.now()+x}}function D(ee){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(H){H!==ee&&H.classList.remove("swipe-open")}),l&&l.el!==ee&&(l=null)}function T(ee){var H=ee.touches&&ee.touches[0];if(H){var Z=q(ee.target,".swipe-reveal");Z&&(l={el:Z,x:H.clientX,y:H.clientY,moved:!1},ee.stopPropagation());var z=q(ee.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");z&&(O(),g={el:z,x:H.clientX,y:H.clientY,timer:setTimeout(function(){var s=b(z);g=null,s&&(w(z),_(s).then(function(){I(),y("已复制代码 "+s)}))},t)})}}function B(ee){if(l){var H=ee.touches&&ee.touches[0];if(H){var Z=H.clientX-l.x,z=H.clientY-l.y;if(Math.abs(Z)>8&&Math.abs(Z)>Math.abs(z)*1.2){ee.cancelable&&ee.preventDefault(),l.moved=!0;var s=l.el.querySelector(".swipe-reveal-main")||l.el,S=Math.max(-d,Math.min(0,Z));s.style.transition="none",s.style.transform="translateX("+S+"px)",ee.stopPropagation()}if(g){var i=H.clientX-g.x,h=H.clientY-g.y;(Math.abs(i)>c||Math.abs(h)>c)&&O()}}}}function F(ee){if(O(),!!l){var H=l.el,Z=ee.changedTouches&&ee.changedTouches[0],z=l.x,s=l.y,S="none";Z&&(S=r(z,s,Z.clientX,Z.clientY));var i=l.moved;l=null;var h=H.querySelector(".swipe-reveal-main")||H;h.style.transform="",h.style.transition="",S==="left"?(D(H),H.classList.add("swipe-open"),w(H)):(S==="right"||i)&&H.classList.remove("swipe-open"),ee.stopPropagation()}}function U(){O(),l=null}function J(ee){if(E&&Date.now()<E.until){var H=E.el.contains(ee.target)||ee.target===E.el,Z=ee.target.closest&&ee.target.closest(".swipe-reveal-actions");H&&!Z&&(ee.preventDefault(),ee.stopPropagation(),E=null)}}document.addEventListener("touchstart",T,!0),document.addEventListener("touchmove",B,!0),document.addEventListener("touchend",F,!0),document.addEventListener("touchcancel",U,!0),document.addEventListener("click",J,!0)}function u(){o||typeof document>"u"||(o=!0,M())}return{judgeSwipe:r,judgePullToRefresh:n,judgeLongPress:p,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:e,PULL_THRESHOLD:m,LONG_PRESS_MS:t,LONG_PRESS_MOVE_SLOP:c,REVEAL_WIDTH:d,initGestures:u,_codeFromRow:b}});(function(){const a={empty:{icon:"inbox",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"alert-triangle",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"wifi-off",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},e=Object.keys(a);function m(d){return a[d]||a.empty}function t(){const d=[];for(const x of e){const r=a[x];r.title||d.push(x+".title"),x!=="loading"&&!r.icon&&d.push(x+".icon"),typeof r.retry!="boolean"&&d.push(x+".retry"),typeof r.skeleton!="boolean"&&d.push(x+".skeleton")}return{ok:d.length===0,errors:d}}const c={VARIANTS:a,KEYS:e,resolve:m,validate:t};typeof window<"u"&&(window.QuantStatePanel=c),typeof Me<"u"&&Me.exports&&(Me.exports=c)})();(function(){const{computed:a}=Vue,e=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(m){const t=a(()=>typeof e.resolve=="function"?e.resolve(m.type):{}),c=a(()=>m.icon||t.value.icon||""),d=a(()=>m.title||t.value.title||""),x=a(()=>m.desc||t.value.desc||""),r=a(()=>!!t.value.retry),n=a(()=>/^[a-z][a-z0-9-]*$/.test(String(c.value||"")));return{icon:c,title:d,desc:x,retryable:r,isIconName:n}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantCommandPanel=e()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function a(l){return String(l||"").trim().toLowerCase()}function e(l,g){if(!l)return!0;const E=l.split(/\s+/).filter(Boolean);if(!E.length)return!0;const O=String(g||"").toLowerCase();return E.every(function(w){return O.indexOf(w)!==-1})}function m(){return{visible:!1,query:"",activeIndex:0}}function t(l,g){return g===void 0&&(g=!l.visible),l.visible=g,g&&(l.query="",l.activeIndex=0),l.visible}function c(l,g,E){const O=a(l);if(!g||!g.length)return[];const w=[];return g.forEach(function(D){const T=e(O,D.name)||e(O,D.key),B=(D.subPages||[]).filter(function(F){const U=E&&E[F]||F;return e(O,U)||e(O,F)});T&&w.push({type:"menu",menuKey:D.key,subPage:D.subPages&&D.subPages[0]||"",label:D.name,subLabel:"页面",icon:D.icon||"file-text"}),B.forEach(function(F){w.push({type:"menu",menuKey:D.key,subPage:F,label:E&&E[F]||F,subLabel:D.name,icon:D.icon||"file-text"})})}),w.slice(0,8)}function d(l,g){const E=a(l);return!g||!g.length?[]:g.filter(function(O){return!!(!E||e(E,O.label)||e(E,O.key)||O.keywords&&e(E,O.keywords))}).slice(0,8)}function x(l,g){const E=a(l);return!E||!g||!g.length?[]:g.filter(function(O){return e(E,O.code)||e(E,O.name)}).slice(0,8).map(function(O){return{type:"stock",code:O.code,name:O.name,label:O.name,subLabel:O.code,icon:"trending-up"}})}function r(l,g,E){const O=[],w=[];return E&&E.length&&(O.push({key:"stock",label:"股票",items:E}),w.push.apply(w,E)),l&&l.length&&(O.push({key:"menu",label:"菜单",items:l}),w.push.apply(w,l)),g&&g.length&&(O.push({key:"command",label:"指令",items:g}),w.push.apply(w,g)),{groups:O,flat:w}}function n(l,g,E){if(g<=0)return 0;const O=((l||0)+E)%g;return O<0?g-1:O}function p(l,g,E,O){const w=c(l,g,E).map(function(T){return{type:"menu",menuKey:T.menuKey,subPage:T.subPage,label:T.label,subLabel:T.subLabel,icon:T.icon,iconName:T.icon,value:T.icon+" "+T.label+" · "+T.subLabel}}),D=d(l,O||[]).map(function(T){return{type:"command",key:T.key,label:T.label,icon:T.icon,iconName:T.icon,subLabel:"指令",value:T.icon+" "+T.label}});return w.concat(D)}function o(l){return l?l.type==="menu"?{action:"menu",menuKey:l.menuKey,subPage:l.subPage}:l.type==="command"?{action:"command",key:l.key}:l.type==="sector"?{action:"sector",name:l.name}:l.type==="strategy"?{action:"strategy",id:l.id,name:l.name}:l.type==="stock"||l.code&&l.name?{action:"stock",code:l.code,name:l.name}:null:null}const q=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"onboarding",label:"新手引导（重新查看）",icon:"sparkles",keywords:"guide tour onboarding 引导 新手 帮助"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"},{key:"open-watchlist",label:"打开我的自选",icon:"star",keywords:"watchlist 自选 收藏"},{key:"manage-groups",label:"管理自选分组",icon:"folder-open",keywords:"groups 分组 自选 管理 归类"},{key:"open-focus",label:"打开重点跟踪",icon:"target",keywords:"focus 重点 跟踪 盯盘"},{key:"open-portfolio",label:"打开模拟组合",icon:"wallet",keywords:"portfolio 组合 持仓 净值"},{key:"open-backtest",label:"打开回测工作台",icon:"line-chart",keywords:"backtest 回测 净值 收益"},{key:"open-market-review",label:"打开每日复盘",icon:"book-open",keywords:"review 复盘 市场 收盘"},{key:"open-shortterm-sectors",label:"打开板块资金",icon:"pie-chart",keywords:"sector 板块 资金 行业"},{key:"open-shortterm-intraday",label:"打开盘中核验",icon:"clock",keywords:"intraday 盘中 核验 验证"},{key:"open-status",label:"打开系统状态",icon:"activity",keywords:"ops status 状态 运行 健康"},{key:"open-health",label:"打开数据源健康",icon:"database",keywords:"health 数据源 健康 源状态"},{key:"open-schedule",label:"打开调度任务",icon:"clock",keywords:"schedule 调度 任务 定时"},{key:"open-guard",label:"打开AI事实护栏",icon:"shield",keywords:"guard 护栏 事实 校验"},{key:"open-usage",label:"打开用量统计",icon:"bar-chart-3",keywords:"usage 用量 统计 调用量"},{key:"open-datadict",label:"打开数据字典",icon:"book-open",keywords:"datadict 数据字典 字段"},{key:"open-notification",label:"打开通知中心",icon:"bell",keywords:"notification 通知 消息"},{key:"open-users",label:"打开用户与权限",icon:"users",keywords:"users 用户 权限 rbac 角色"},{key:"open-autoeval",label:"打开AI服务配置",icon:"bot",keywords:"autoeval 自动评估 AI 服务 模型"},{key:"open-feature",label:"打开基础配置",icon:"settings",keywords:"feature 基础 配置 功能"},{key:"open-config",label:"打开配置保存",icon:"save",keywords:"config 配置 保存 备份"},{key:"theme-gold",label:"金色主题",icon:"palette",keywords:"theme gold 金色 主题 颜色"},{key:"theme-blue",label:"蓝色主题",icon:"palette",keywords:"theme blue 蓝色 主题"},{key:"theme-red",label:"红色主题",icon:"palette",keywords:"theme red 红色 主题"},{key:"theme-green",label:"绿色主题",icon:"palette",keywords:"theme green 绿色 主题"},{key:"theme-purple",label:"紫色主题",icon:"palette",keywords:"theme purple 紫色 主题"},{key:"theme-pink",label:"粉色主题",icon:"palette",keywords:"theme pink 粉色 主题"},{key:"theme-dark",label:"暗色主题",icon:"moon",keywords:"theme dark 暗色 深色 夜间"},{key:"theme-light",label:"亮色主题",icon:"sun",keywords:"theme light 亮色 浅色 日间"}];var b={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function _(l){if(!l||typeof l!="string")return null;var g=l.split("+").map(function(w){return w.trim()}).filter(Boolean);if(!g.length)return null;var E=g.pop().toLowerCase();if(!E)return null;var O={ctrl:!1,alt:!1,shift:!1,meta:!1};return g.forEach(function(w){var D=w.toLowerCase();b.ctrl.indexOf(D)!==-1?O.ctrl=!0:b.alt.indexOf(D)!==-1?O.alt=!0:b.shift.indexOf(D)!==-1?O.shift=!0:b.meta.indexOf(D)!==-1&&(O.meta=!0)}),{ctrl:O.ctrl,alt:O.alt,shift:O.shift,meta:O.meta,key:E}}function k(l,g){if(!l||!g)return!1;var E=String(g.key||g.code||"").toLowerCase();return l.key!==E?!1:l.ctrl===!!g.ctrlKey&&l.alt===!!g.altKey&&l.shift===!!g.shiftKey&&l.meta===!!g.metaKey}function y(l){if(!l)return"";var g=[];return l.ctrl&&g.push("Ctrl"),l.alt&&g.push("Alt"),l.shift&&g.push("Shift"),l.meta&&g.push("Meta"),g.push(l.key.toUpperCase()),g.join("+")}function I(){var l={};return{register:function(g){if(!g||!g.key)throw new Error("命令 key 必填");if(l[g.key])throw new Error("命令重复注册: "+g.key);return l[g.key]=Object.assign({},g),g.key},list:function(){return Object.keys(l).map(function(g){return l[g]})},get:function(g){return l[g]||null},remove:function(g){delete l[g]},has:function(g){return!!l[g]},count:function(){return Object.keys(l).length}}}function M(){var l={},g={};return{register:function(E,O,w){var D=_(E);if(!D)throw new Error("无效快捷键: "+E);var T=y(D);if(l[T])throw new Error("快捷键冲突: "+E);if(O!=null&&g[O]!==void 0)throw new Error("动作重复绑定: "+O);return l[T]={combo:E,action:O,description:w||"",parsed:D},g[O]=T,T},resolve:function(E){for(var O in l)if(k(l[O].parsed,E))return l[O].action;return null},list:function(){return Object.keys(l).map(function(E){return l[E]})},unregister:function(E){var O=y(_(E));l[O]&&(delete g[l[O].action],delete l[O])},count:function(){return Object.keys(l).length}}}function u(){var l=M();return l.register("Ctrl+K","toggle-palette","打开命令面板"),l.register("F5","refresh","刷新当前页"),l.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),l.register("Ctrl+J","open-ai","打开 AI 问股"),l.register("Ctrl+D","open-today","今日一屏"),l.register("Ctrl+E","batch-eval","批量 AI 评估"),l.register("Ctrl+G","add-portfolio","加入组合"),l.register("Ctrl+H","open-eval-history","打开评估历史"),l.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),l}return{normalize:a,createPaletteState:m,toggleVisible:t,searchMenus:c,searchCommands:d,filterStocksLocal:x,mergeResults:r,moveIndex:n,buildSearchSuggestions:p,dispatchSearchSelection:o,DEFAULT_COMMANDS:q,parseKeyCombo:_,matchShortcut:k,canonicalCombo:y,createCommandRegistry:I,createShortcutRegistry:M,createDefaultShortcuts:u}});(function(a){if(a&&!a.QuantCommandPanel)try{var e=typeof Me<"u"&&Me.exports?Me.exports:null;e&&(a.QuantCommandPanel=e)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(a,e){var m=e();typeof Me=="object"&&Me.exports&&(Me.exports=m),a.QuantOnboarding=m})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var a=[{key:"today",title:"看懂今日一屏",target:"strategies",selector:".today-hero",desc:"先看美林时钟阶段与今日一屏：宏观周期、策略共识、股票池一目了然"},{key:"calendar",title:"量化日历与策略池",target:"calendar",selector:".stock-pool-body",desc:"日/周/月/年切换视图，按全部/新入池/当前持仓/已出池筛选股票"},{key:"evaluate",title:"智能评估一只股票",target:"ai",selector:".qc-work-area",desc:"点击任意股票查看详情：多模型 AI 评估、五维体检、历史趋势"},{key:"watchlist",title:"我的自选与重点跟踪",target:"ai",selector:"",desc:"在智能评估页把心仪股票加入自选，重点跟踪持续盯盘"},{key:"config",title:"系统配置要点",target:"system",selector:".system-page-root",desc:"数据源、AI Key、通知与主题都在系统配置，按需设置"}],e=a.length,m=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],t=m.length;function c(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function d(){return m.slice()}function x(F){return F<0?0:F>=t?t-1:F}function r(F){return{stepIndex:F.stepIndex,completed:!!F.completed,dismissed:!!F.dismissed,updatedAt:F.updatedAt||0}}function n(F){return r(Object.assign({},F,{stepIndex:x((F.stepIndex||0)+1),updatedAt:Date.now()}))}function p(F){return r(Object.assign({},F,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function o(F){return r(Object.assign({},F,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function q(F){var U=Math.min(F&&F.stepIndex||0,t);return{done:U,total:t,pct:Math.round(U/t*100)}}function b(F){return!!(F&&!F.completed&&!F.dismissed)}function _(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function k(){return a.slice()}function y(){return e}function I(F){return F<0?0:F>=e?e-1:F}function M(F){return{stepIndex:F.stepIndex,completed:!!F.completed,dismissed:!!F.dismissed,updatedAt:F.updatedAt||0}}function u(F){return M(Object.assign({},F,{stepIndex:I((F.stepIndex||0)+1),updatedAt:Date.now()}))}function l(F){return M(Object.assign({},F,{stepIndex:I((F.stepIndex||0)-1),updatedAt:Date.now()}))}function g(F,U){return M(Object.assign({},F,{stepIndex:I(U),updatedAt:Date.now()}))}function E(F){return M(Object.assign({},F,{completed:!0,updatedAt:Date.now()}))}function O(F){return M(Object.assign({},F,{dismissed:!0,updatedAt:Date.now()}))}function w(F){return!!(F&&F.completed)}function D(F){var U=Math.min(F&&F.stepIndex||0,e);return{done:U,total:e,pct:Math.round(U/e*100)}}function T(F){var U=F||_();return JSON.stringify({stepIndex:U.stepIndex,completed:!!U.completed,dismissed:!!U.dismissed,updatedAt:U.updatedAt||0})}function B(F){var U=_();if(!F||typeof F!="string")return U;try{var J=JSON.parse(F);if(!J||typeof J!="object")return U;var ee=parseInt(J.stepIndex,10);return isNaN(ee)?U:{stepIndex:I(ee),completed:!!J.completed,dismissed:!!J.dismissed,updatedAt:J.updatedAt||0}}catch{return U}}return{ONBOARDING_STEPS:a,steps:k,stepCount:y,createOnboardingState:_,next:u,prev:l,jumpTo:g,complete:E,dismiss:O,isComplete:w,progress:D,persistState:T,parseState:B,SHORTTERM_TOUR_STEPS:m,shorttermTourSteps:d,createShorttermTourState:c,shorttermTourNext:n,shorttermTourComplete:p,shorttermTourDismiss:o,shorttermTourProgress:q,shorttermTourShouldShow:b}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:e,onMounted:m}=Vue,t=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const c=a(!1),d=a(t.createOnboardingState()),x=e(function(){return t.steps()[d.value.stepIndex]}),r=e(function(){return t.progress(d.value)}),n=e(function(){return d.value.stepIndex>=t.stepCount()-1}),p=e(function(){return"onboarding.step."+x.value.key});function o(){const u=t.persistState(d.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:u}})}).then(function(l){return l.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",u)}catch{}})}function q(u){u&&window.__quantGoPage?window.__quantGoPage(u,""):u&&window.__quantState&&window.__quantState.currentPage&&(window.__quantState.currentPage.value=u,window.__quantState.currentSubPage&&(window.__quantState.currentSubPage.value=""))}function b(){d.value=t.next(d.value);const u=t.steps()[d.value.stepIndex];u&&u.target&&q(u.target)}function _(){d.value=t.prev(d.value);const u=t.steps()[d.value.stepIndex];u&&u.target&&q(u.target)}function k(){d.value=t.complete(d.value),o(),c.value=!1}function y(){d.value=t.dismiss(d.value),o(),c.value=!1}function I(){d.value=t.createOnboardingState(),o(),c.value=!0}function M(){fetch("/api/user_config/preferences").then(function(u){return u.json()}).then(function(u){const l=u&&u.preferences&&u.preferences.onboarding_progress;return l&&(d.value=t.parseState(l)),l}).catch(function(){return null}).then(function(u){if(!u)try{const l=localStorage.getItem("qc_onboarding_progress");l&&(d.value=t.parseState(l))}catch{}!t.isComplete(d.value)&&!d.value.dismissed&&(c.value=!0)}),window.addEventListener("qc:onboarding-replay",I)}return m(M),{visible:c,st:d,step:x,prog:r,isLast:n,stepKey:p,next:b,prev:_,finish:k,skip:y,replay:I}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"inbox"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
      <div class="qc-empty-state" role="status">
        <div class="qc-empty-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-empty-title">{{ title || t('common.emptyTitle') }}</div>
        <div class="qc-empty-desc">{{ desc || t('common.emptyDesc') }}</div>
        <el-button v-if="actionText" size="small" type="primary" @click="$emit('action')">{{ actionText }}</el-button>
      </div>
    `,setup(){function a(e){try{const m=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(m)return m(e)||""}catch{}return e}return{t:a}}},window.__quantComponents.ErrorState={name:"qc-error",props:{icon:{type:String,default:"alert-triangle"},title:{type:String,default:""},desc:{type:String,default:""},retrying:{type:Boolean,default:!1}},emits:["retry"],template:`
      <div class="qc-error-state" role="alert">
        <div class="qc-error-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-error-title">{{ title || t('common.errorTitle') }}</div>
        <div class="qc-error-desc">{{ desc || t('common.errorDesc') }}</div>
        <el-button v-if="!retrying" size="small" @click="$emit('retry')">{{ t('common.retry') }}</el-button>
        <el-button v-else size="small" :loading="retrying">{{ t('common.retry') }}</el-button>
      </div>
    `,setup(){function a(e){try{const m=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(m)return m(e)||""}catch{}return e}return{t:a}}})})();(function(){const{ref:a,computed:e,watch:m,nextTick:t,inject:c,onMounted:d}=Vue,x=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
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
    `,setup(){const r=c("qcState");if(!r)return{};const n=a(""),p=e({get:()=>r.commandPaletteVisible.value,set:z=>{r.commandPaletteVisible.value=z}}),o=a(0),q=a([]),b=a(null),_=e(()=>{const z=(x.DEFAULT_COMMANDS||[]).map(function(S){return Object.assign({},S)});return Object.keys(r.themes.value||{}).forEach(function(S){const i=r.themes.value[S];z.push({key:"theme:"+S,label:"切换主题 · "+(i.name||S),icon:"palette",keywords:"theme 主题"})}),z});function k(z){return typeof z=="string"&&/^[a-z][a-z0-9-]*$/.test(z)}const y=e(()=>r.menus.value||[]);function I(){const z=window.__quantModules&&window.__quantModules.pinyin;if(!z)return[];const s=[];return(r.watchlist&&r.watchlist.value||[]).forEach(function(S){s.push({code:S.code,name:S.name})}),(r.aiHistory&&r.aiHistory.value||[]).forEach(function(S){S&&S.stock_code&&s.push({code:S.stock_code,name:S.stock_name||S.stock_code})}),s.push.apply(s,z.getExtraStocks()),z.buildStockIndex(s)}function M(z){const s=window.__quantModules&&window.__quantModules.pinyin;return s?s.searchStocksByQuery(z,I()).map(function(S){return{type:"stock",code:S.code,name:S.name,label:S.name,subLabel:S.code,icon:"trending-up"}}):[]}function u(){const z=[],s=window.__quantModules&&window.__quantModules.recent;s&&s.getRecentViewed().slice(0,5).forEach(function(i){z.push({type:"stock",code:i.code,name:i.name||i.code,label:i.name||i.code,subLabel:"最近查看 · "+i.code,icon:"trending-up"})});const S=(r.watchlist&&r.watchlist.value||[]).slice(0,8).map(function(i){return{type:"stock",code:i.code,name:i.name||i.code,label:i.name||i.code,subLabel:"我的自选 · "+i.code,icon:"trending-up"}});return z.concat(S)}const l=e(()=>{const z=n.value;if(!z)return x.mergeResults([],[],u());const s=x.searchMenus(z,y.value,r.subPageNames),S=x.searchCommands(z,_.value),i=q.value;return x.mergeResults(s,S,i)}),g=e(()=>l.value);function E(z){return g.value.flat[o.value]===z}function O(z){o.value=g.value.flat.indexOf(z)}function w(z){return(z.type||"")+":"+(z.code||z.menuKey||z.key||z.label)}let D=null;function T(){const z=n.value.trim();if(z.length<1){q.value=[];return}D&&clearTimeout(D),D=setTimeout(function(){const s=M(z);q.value=s,o.value=0,r.searchStocks(z,function(S){if(n.value.trim()!==z)return;const i=(S||[]).filter(function(N){return N&&N.code&&N.name}).map(function(N){return{type:"stock",code:N.code,name:N.name,label:N.name,subLabel:N.code,icon:"trending-up"}}),h={},X=[];s.forEach(function(N){h[N.code]||(h[N.code]=!0,X.push(N))}),i.forEach(function(N){h[N.code]||(h[N.code]=!0,X.push(N))}),q.value=X,o.value=0})},200)}function B(){o.value=x.moveIndex(o.value,g.value.flat.length,1)}function F(){o.value=x.moveIndex(o.value,g.value.flat.length,-1)}function U(){const z=g.value.flat[o.value];z&&J(z)}function J(z){r.commandPaletteVisible.value=!1,z.type==="menu"?r.navigateTo(z.menuKey,z.subPage):z.type==="stock"?r.showStockDetail(z.code,z.name):z.type==="command"&&ee(z.key)}function ee(z){if(z==="refresh"){const s=r.currentPage.value;s==="strategies"?r.loadDashboardData().catch(function(){}):s==="calendar"?r.refreshCalendarData().catch(function(){}):s==="ai"&&r.loadAiHistory().catch(function(){})}else z==="export"?r.exportCSV():z==="batch"?r.showBatchEvaluate.value=!0:z==="ai"?r.openAiFab():z==="sidebar"?r.toggleSidebar():z==="today"?r.navigateTo("strategies","overview"):z==="onboarding"?window.dispatchEvent(new CustomEvent("qc:onboarding-replay")):z==="add-portfolio"?(r.currentPage.value="ai",r.currentSubPage.value="portfolio"):z==="open-system"?r.navigateTo("system","status"):z==="open-shortterm"?r.navigateTo("shortterm","overview"):z==="open-research"?r.navigateTo("research","overview"):z==="open-calendar"?r.navigateTo("calendar",""):z==="refresh-data-source"?r.navigateTo("system","datasource"):z==="open-watchlist"?r.navigateTo("ai","watchlist"):z==="manage-groups"?window.dispatchEvent(new CustomEvent("qc:show-watch-groups")):z==="open-focus"?r.navigateTo("ai","focus"):z==="open-portfolio"?r.navigateTo("ai","portfolio"):z==="open-backtest"?r.navigateTo("research","backtest"):z==="open-market-review"?r.navigateTo("shortterm","market-review"):z==="open-shortterm-sectors"?r.navigateTo("shortterm","sector"):z==="open-shortterm-intraday"?r.navigateTo("shortterm","intraday"):z==="open-status"?r.navigateTo("ops","status"):z==="open-health"?r.navigateTo("ops","health"):z==="open-schedule"?r.navigateTo("ops","schedule"):z==="open-guard"?r.navigateTo("ops","guard"):z==="open-usage"?r.navigateTo("ops","usage"):z==="open-datadict"?r.navigateTo("ops","datadict"):z==="open-notification"?r.navigateTo("system","notification"):z==="open-users"?r.navigateTo("system","user"):z==="open-autoeval"?r.navigateTo("system","autoeval"):z==="open-feature"?r.navigateTo("system","feature"):z==="open-config"?r.navigateTo("system","config"):z==="theme-dark"?r.changeTheme("dark-pro"):z==="theme-light"?r.changeTheme("gold"):z.indexOf("theme:")===0&&r.changeTheme(z.slice(6))}m(p,function(z){z&&(n.value="",q.value=[],o.value=0,t(function(){b.value&&b.value.focus&&b.value.focus()}))}),m(n,T);function H(z){z==="toggle-palette"?r.commandPaletteVisible.value=!r.commandPaletteVisible.value:z==="toggle-sidebar"?r.toggleSidebar():z==="open-ai"?r.openAiFab():z==="refresh"?ee("refresh"):z==="open-today"?ee("today"):z==="batch-eval"?ee("batch"):z==="add-portfolio"&&ee("add-portfolio")}function Z(z){if(!x.createDefaultShortcuts||!x.createShortcutRegistry)return;const S=x.createDefaultShortcuts().resolve({key:z.key,ctrlKey:z.ctrlKey,altKey:z.altKey,shiftKey:z.shiftKey,metaKey:z.metaKey});S&&(z.preventDefault(),H(S))}return d(function(){document.addEventListener("keydown",Z)}),{visible:p,query:n,results:g,inputEl:b,sanitizeHtml:r.sanitizeHtml,isIconName:k,onDown:B,onUp:F,onEnter:U,execute:J,isActive:E,setActive:O,itemKey:w,onGlobalKeydown:Z}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
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
    `,setup(){const e=a("qcState");if(!e)return{};const m=window.QuantFormMemory;function t(){const r=e.currentUser;return r&&r.value&&r.value.username||"guest"}Vue.watch(()=>e.showBatchEvaluate&&e.showBatchEvaluate.value||!1,r=>{if(r&&m){const n=m.loadForm("batch-evaluate",t(),1);n&&n.batchStocks&&!(e.batchStocks&&e.batchStocks.value)&&(e.batchStocks.value=n.batchStocks)}});function c(){return m&&m.saveForm("batch-evaluate",{batchStocks:e.batchStocks&&e.batchStocks.value||""},t(),1),e.doBatchEvaluate()}const d=Vue.ref(0);let x=null;return e.batchRunning&&e.batchRunning.__v_isRef&&Vue.watch(e.batchRunning,r=>{r?(d.value=0,x=setInterval(()=>{d.value++},1e3)):x&&(clearInterval(x),x=null)}),{...e,batchElapsed:d,onBatchEvaluate:c}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
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
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:e,onMounted:m}=Vue;window.__quantComponents=window.__quantComponents||{};const t=["#c49b2e","#2563eb","#dc2626","#16a34a","#7c3aed","#db2777","#64748b","#b45309"];window.__quantComponents.WatchGroupsDialog={name:"qc-watch-groups-dialog",template:`
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
    `,setup(){const c=a(!1),d=a(!1),x=a(!1),r=a([]),n=a({}),p=a(""),o=a(""),q=a("");function b(w,D){D=D||{},D.headers=Object.assign({},D.headers||{});const T=localStorage.getItem("quant_token")||"";return T&&(D.headers.Authorization="Bearer "+T),fetch(w,D)}async function _(){d.value=!0;try{const D=await(await b("/api/watchlist/groups")).json();D&&D.success&&(r.value=D.groups||[],n.value=D.mapping||{})}catch{}d.value=!1}function k(w){return Object.values(n.value).filter(function(D){return D===w}).length}function y(w){const D=r.value[w],T=t.indexOf(D.color);D.color=t[(T+1)%t.length]}function I(w){if(w<=0)return;const D=r.value.slice(),T=D[w-1];D[w-1]=D[w],D[w]=T,r.value=D}function M(w){if(w>=r.value.length-1)return;const D=r.value.slice(),T=D[w+1];D[w+1]=D[w],D[w]=T,r.value=D}function u(){const w=p.value.trim();w&&(r.value.some(function(D){return D.name===w})||(r.value.push({name:w,color:t[r.value.length%t.length],sort_order:r.value.length,expanded:!0}),p.value=""))}function l(w){o.value=w,q.value=w}function g(w){const D=q.value.trim();if(!D||D===w||r.value.some(function(B){return B.name===D})){o.value="";return}r.value=r.value.map(function(B){return B.name===w?Object.assign({},B,{name:D}):B});const T={};Object.keys(n.value).forEach(function(B){T[B]=n.value[B]===w?D:n.value[B]}),n.value=T,o.value=""}function E(w){r.value=r.value.filter(function(T){return T.name!==w});const D={};Object.keys(n.value).forEach(function(T){D[T]=n.value[T]===w?"默认分组":n.value[T]}),n.value=D}async function O(){x.value=!0;try{await b("/api/watchlist/groups",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({groups:r.value,mapping:n.value})}),ElementPlus.ElMessage.success("分组已保存"),c.value=!1}catch{ElementPlus.ElMessage.error("保存失败")}x.value=!1}return m(function(){window.addEventListener("qc:show-watch-groups",function(){c.value=!0,_()})}),{visible:c,loading:d,saving:x,groups:r,mapping:n,newName:p,renaming:o,renameVal:q,load:_,countIn:k,cycleColor:y,moveUp:I,moveDown:M,addGroup:u,startRename:l,commitRename:g,remove:E,save:O}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.IndexDetailDialog={name:"qc-index-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a,computed:e,ref:m,watch:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StockDetailDialog={name:"qc-stock-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
    `,setup(){const c=a("qcState");if(!c)return{};const d={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},x=e(()=>d[c.aiEvalStage.value]||""),r=e(()=>{const U=c.aiResult&&c.aiResult.value&&c.aiResult.value.result&&c.aiResult.value.result.level;return U?U==="强烈推荐"||U==="推荐"?"var(--success-text)":U==="谨慎推荐"?"var(--warning-text)":U==="中性"||U==="观望"?"var(--text-secondary)":U==="评估失败"||U==="无可用模型"?"var(--danger-text)":"var(--color-primary)":"var(--color-primary)"});function n(U){const J=document.createElement("textarea");J.value=U,J.style.position="fixed",J.style.opacity="0",document.body.appendChild(J),J.select(),document.execCommand("copy"),document.body.removeChild(J)}async function p(){const U=c.aiResult&&c.aiResult.value;if(!U||!U.result)return;const J=U.result.dimensions||{},ee=Object.entries(J).map(([Z,z])=>`${Z} ${Math.round(z)}分`).join(`
`),H=`【AI 智能评估】${U.result.level||""} ${U.result.total_score!=null?U.result.total_score:"—"}分
模型：${U.model_used||U.result.provider||"—"}

${U.result.detailed_report||""}

九维度评分：
${ee||"无"}`;try{await navigator.clipboard.writeText(H),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{n(H),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const o=m(!1),q=m(!1),b=m(null),_=m([]),k={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function y(U){return k[U]||"factor-sem-none"}async function I(){const U=c.stockDetail.value&&c.stockDetail.value.stock;if(U){o.value=!0,q.value=!1,_.value=[],b.value=null;try{const J=c.selectedDate.value?`?date=${c.selectedDate.value}`:"",ee=await fetch(`/api/calendar/stock/${U}/factors${J}`).then(s=>s.json()),H=ee&&Array.isArray(ee.factors)?ee.factors:[],Z=[],z={};H.forEach(s=>{z[s.category]||(z[s.category]={category:s.category,items:[]},Z.push(z[s.category])),z[s.category].items.push(s)}),_.value=Z,b.value=ee&&ee.summary||null}catch{q.value=!0}finally{o.value=!1}}}t(c.stockDetailTab,U=>{U==="factor"&&c.stockDetail.value&&c.stockDetailVisible.value&&(I(),u())});const M=m(null);async function u(){try{const U=await fetch("/api/market/factor-ic").then(J=>J.json());M.value=U&&U.success&&U.data?U.data:{}}catch{M.value={}}}function l(U){if(!U||!U.n5)return"—";const J=U.n5.icir!=null?"ICIR "+U.n5.icir:"ICIR —";return U.n5.grade+" ("+J+")"}const g=m(!1),E=m(!1),O=m([]),w=m([]);function D(U){if(U==null)return"—";const J=Number(U);return Number.isNaN(J)?"—":Math.abs(J)>=1e8?(J/1e8).toFixed(2)+"亿":Math.abs(J)>=1e4?(J/1e4).toFixed(1)+"万":String(J)}async function T(){const U=c.stockDetail&&c.stockDetail.value&&c.stockDetail.value.stock;if(U){g.value=!0,E.value=!1;try{const J=await fetch("/api/market/performance/"+encodeURIComponent(U)).then(ee=>ee.json());J&&J.success?(O.value=J.forecast||[],w.value=J.express||[]):E.value=!0}catch{E.value=!0}finally{g.value=!1}}}t(c.stockDetailTab,U=>{U==="performance"&&T()});const B=m(null);async function F(){const U=c.stockDetail&&c.stockDetail.value&&c.stockDetail.value.stock;if(!U){B.value=null;return}try{const J=await fetch("/api/focus/stock/"+encodeURIComponent(U)+"/pool").then(ee=>ee.json());B.value=J&&J.success&&J.data?J.data:null}catch{B.value=null}}return t(()=>c.stockDetail&&c.stockDetail.value&&c.stockDetail.value.stock,U=>{U&&c.stockDetailVisible.value?F():B.value=null}),t(()=>c.stockDetailVisible.value,U=>{U?F():B.value=null}),{...c,aiStageText:x,levelRingColor:r,copyAiReport:p,factorLoading:o,factorError:q,factorSummary:b,factorGroups:_,factorSemClass:y,loadFactorPanel:I,factorIc:M,loadFactorIc:u,factorIcGrade:l,perfLoading:g,perfError:E,perfForecast:O,perfExpress:w,fmtY:D,loadPerformance:T,poolInfo:B,loadPoolInfo:F}}}})();(function(){const{computed:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
    `,setup(m){const t=e("qcState");if(!t)return{};const c=a(()=>m.type==="history"?t.selectedHistoryIds.value.includes(m.item.id):t.selectedChatIds.value.includes(m.item.id)),d=a(()=>{const k=t.watchlistCodes.value.has(m.item.stock_code);return{icon:"star",isWatched:k,label:k?"取消收藏":"加入收藏"}}),x=a(()=>m.type==="history"?"bot":"message-circle"),r=a(()=>{var k;return m.type==="history"?((k=m.item.result)==null?void 0:k.provider)||"":m.item.first_msg||""}),n=a(()=>{var k,y;return`${((y=(k=m.item.result)==null?void 0:k.dimensions)==null?void 0:y.length)||9}维度分析`}),p=a(()=>{var y,I;const k=m.type==="history"?m.item.evaluate_time:m.item.created_at||"";return k?m.timeFormat==="datetime"?m.type==="history"?`${k.split("T")[0]} ${(k.split("T")[1]||"").split(".")[0]}`:`${k.split("T")[0]} ${((y=k.split("T")[1])==null?void 0:y.substring(0,5))||""}`:m.type==="history"?(k.split("T")[1]||"").split(".")[0]||k:((I=k.split("T")[1])==null?void 0:I.substring(0,5))||"":""});function o(){m.type==="history"?t.toggleSelectHistory(m.item.id):t.toggleSelectChat(m.item.id)}function q(){m.type==="history"?t.viewAiResult(m.item):t.viewChatSession(m.item)}async function b(){try{await ElementPlus.ElMessageBox.confirm(m.type==="history"?"确定删除这条评估记录吗？此操作不可恢复。":"确定删除这段对话吗？此操作不可恢复。","删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}m.type==="history"?t.deleteSingleHistory(m.item.id):t.deleteChatSession(m.item.id)}function _(k,y){t.toggleWatchlist(k,y)}return{isSelected:c,watchState:d,providerIcon:x,providerText:r,dimsText:n,timeText:p,toggleSelect:o,view:q,remove:b,toggleWatchlist:_,keyClick:t.keyClick,fmtNum:t.fmtNum,evaluatedCodes:t.evaluatedCodes,klineLoadedCodes:t.klineLoadedCodes,levelColor:t.levelColor,levelBg:t.levelBg}}}})();(function(){const{ref:a,computed:e,onMounted:m,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{};const c=["买入","持有","观望","减仓","卖出"],d={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},x={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},r=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],n={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},p=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function o(b){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(b).then(y=>y.json?y.json():y)}function q(){const b=new Date,_=k=>k<10?"0"+k:""+k;return b.getFullYear()+"-"+_(b.getMonth()+1)+"-"+_(b.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",template:`
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
      </div>`,setup(){const b=t("qcState"),_=a(q()),k=a("after_close"),y=a({rows:[],actions:{},total:0,groups:{}}),I=a({sessions:{},total:0}),M=a(null),u=a(!1),l=a(""),g=a(!1),E=a([]),O=a(""),w=a(null),D={},T=a({});let B=0;const F=a(null),U=e(function(){const L=y.value&&y.value.groups||{};return Object.keys(L).length?L:y.value&&y.value.rows&&y.value.rows.length?{全部:y.value.rows}:{}}),J=e(function(){const L=F.value;return!L||!L.date||L.date!==_.value?"":"已加载最近一次评估: "+L.date+" · "+(n[L.session]||L.session)}),ee=e(function(){const L=y.value&&y.value.base_date;return L?L===_.value?"评分范围: "+L+" 收盘池 + 自选":"评分范围: "+L+" 收盘池(前一交易日算好) + 自选":""});function H(L){if(L==null)return"—";const Q=Number(L);return Q===Math.floor(Q)?String(Q):Q.toFixed(1)}function Z(L){const Q=y.value.total||0,oe=(y.value.actions||{})[L]||0;if(!Q)return"0%";const fe=oe/Q*100;return fe>0&&fe<4?"4%":fe.toFixed(1)+"%"}function z(L){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[L]||"info"}function s(L){const Q=M.value&&M.value.overall&&M.value.overall[L]||null;return!Q||Q.total===0||Q.rate===null||Q.rate===void 0?"info":Q.rate>=60?"success":Q.rate>=40?"warning":"danger"}function S(L){const Q=M.value&&M.value.overall&&M.value.overall[L]||null;return!Q||Q.total===0||Q.rate===null||Q.rate===void 0?"样本不足":Q.rate.toFixed(1)+"% ("+Q.total+" 样本)"}function i(){return n[k.value]||k.value}function h(L){const Q=E.value.indexOf(L);Q>=0?E.value.splice(Q,1):E.value.push(L)}function X(L){if(!L||!L.raw_json)return{};if(D[L.stock_code+L.session+L.trade_date])return D[L.stock_code+L.session+L.trade_date];let Q={};try{Q=JSON.parse(L.raw_json)||{}}catch{Q={}}return D[L.stock_code+L.session+L.trade_date]=Q,Q}async function N(){try{const L=await o("/api/focus/latest"),Q=L&&L.success&&L.data;Q&&Q.date&&(F.value=Q,_.value=Q.date,Q.session&&(k.value=Q.session))}catch(L){console.warn("[focus] 最近一次评估解析失败:",L)}}async function C(){g.value=!0;try{const L=await o("/api/focus/results?date="+_.value+"&session="+k.value);y.value=L&&L.success&&L.data||{rows:[],actions:{},total:0,groups:{}},f((y.value.rows||[]).map(function(Q){return Q.stock_code}))}catch(L){console.warn("[focus] 结果加载失败:",L),y.value={rows:[],actions:{},total:0,groups:{}}}finally{g.value=!1}}async function f(L){const Q=T.value||{},oe=(L||[]).filter(function(Y){return Y&&!Q[Y]});if(!oe.length)return;const fe=++B,Ce=oe.map(function(Y){return o("/api/focus/stock/"+encodeURIComponent(Y)+"/pool?date="+_.value).then(function(de){de&&de.success&&de.data?Q[Y]=de.data:Q[Y]={stock_code:Y,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){Q[Y]={stock_code:Y,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(Ce)}catch{}fe===B&&(T.value=Object.assign({},Q))}function P(L){const Q=b&&b.showStockDetail;if(typeof Q=="function"){Q(L);return}const fe=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;fe&&fe.info("请从其他页面打开股票详情: "+L)}async function v(){try{const L=await o("/api/focus/history?date="+_.value);I.value=L&&L.success&&L.data||{sessions:{},total:0}}catch(L){console.warn("[focus] 历史加载失败:",L),I.value={sessions:{},total:0}}}async function j(){u.value=!0;try{const L=await o("/api/ai/track");L&&L.success&&L.data?(M.value=L.data,l.value=(L.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):M.value=null}catch(L){console.warn("[focus] 效果块加载失败:",L),M.value=null}finally{u.value=!1}}async function ne(){const L=(O.value||"").trim();if(L){w.value=null;try{const Q=await o("/api/focus/stock/"+encodeURIComponent(L));w.value=Q&&Q.success&&Q.data&&Q.data.rows||[]}catch(Q){console.warn("[focus] 单股历史加载失败:",Q),w.value=[]}}}async function $(){await C(),await v(),await j()}return m(async function(){await N(),await $()}),{curDate:_,session:k,results:y,history:I,track:M,trackLoading:u,trackNote:l,detailSplitEnabled:b.detailSplitEnabled,stockDetail:b.stockDetail,loading:g,expanded:E,stockCode:O,stockHistory:w,SESSIONS:r,ACTION_ORDER:c,TRACK_WINDOWS:p,ACTION_DOT:d,TIER_DOT:x,SESSION_LABELS:n,displayGroups:U,latestNote:J,baseNote:ee,sessionLabel:i,fmtScore:H,tagType:z,rateTagType:s,fmtRate:S,toggle:h,detailOf:X,loadResults:C,loadHistory:v,loadTrack:j,loadStockHistory:ne,loadAll:$,poolStatus:T,openStockDetail:P,actionPct:Z}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:e,nextTick:m}=Vue,{currentView:t,statusFilter:c,dashboardData:d,loadHealthMetrics:x,getLoadDashboardData:r,getLastRefreshTime:n,getFetchPoolSignals:p}=a,o=e(!1),q=e(""),b=new Map,_=e([]),k=e(""),y=e(""),I=e([]),M=e(""),u=window.__quantModules.core||{},l=typeof u.createTtlCache=="function"?u.createTtlCache(15e3):null;let g=0;function E(){const J=Date.now();J-g<5e3||(g=J,ElementPlus.ElMessage.success("有新数据，已更新"))}function O(J,ee,H,Z){!l||!ee||typeof u.silentRefresh!="function"||u.silentRefresh({cache:l,key:ee,fetchFn:async()=>{const z=await fetch(J);if(!z.ok)throw new Error("HTTP "+z.status);const s=await z.json();return H?H(s):s},ttl:l.defaultTtl,apply:Z,onChanged:E,onError:()=>{}})}const w=new Set;async function D(){var J;try{const H=await(await fetch("/api/dates")).json();_.value=((J=H.data)==null?void 0:J.dates)||H.dates||[],_.value.length>0&&(k.value=_.value[_.value.length-1]),y.value=new Date().toLocaleTimeString()}catch(ee){console.error(ee)}}async function T(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),y.value="刷新中...",b.clear(),await D(),await F(),y.value=new Date().toLocaleTimeString()}catch(J){console.error("数据刷新失败",J)}}function B(){if(!k.value)return;const ee="/api/view/"+(t.value||"day")+"/"+k.value+"?status="+(c.value||"all")+"&format=csv";window.open(ee,"_blank")}async function F(){if(!k.value)return;const J=`${t.value}_${k.value}`;if(w.has(J))return;w.add(J);const ee=`/api/view/${t.value}/${k.value}?status=all`,H=l&&typeof u.makeCacheKey=="function"?u.makeCacheKey("GET",`/api/view/${t.value}/${k.value}`,{status:"all"}):null,Z=(S,i)=>{I.value=S,M.value=i||"",b.set(J,{stocks:S,note:i||""})},z=S=>{Z(S&&S.stocks||[],S&&S.note||"")};if(b.has(J)){z(b.get(J)),O(ee,H,S=>S,z),w.delete(J);return}const s=H&&l?l.get(H):void 0;if(s!==void 0){z(s),O(ee,H,S=>S,z),w.delete(J);return}o.value=!0,q.value={day:"日",week:"周",month:"月",year:"年"}[t.value]||t.value;try{const i=await(await fetch(ee)).json(),h=i.stocks||[];Z(h,i.note||""),l&&H&&l.set(H,{stocks:h,note:i.note||""})}catch{try{const h=await(await fetch(`/api/calendar/${k.value}/consensus`)).json();I.value=(h.consensus||[]).map(X=>({...X,code:X.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{o.value=!1}p(),w.delete(J)}async function U(){const J=l&&typeof u.makeCacheKey=="function"?u.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(l){const ee=l.get(J);if(ee!==void 0){d.value=ee,x().catch(()=>{}),O("/api/dashboard",J,H=>H.data||H,H=>{d.value=H,n().value=Date.now()});return}}await r()(),x().catch(()=>{}),l&&l.set(J,d.value)}return{loading:o,loadingView:q,viewCache:b,dates:_,selectedDate:k,lastLoadTime:y,consensus:I,viewNote:M,loadDates:D,refreshCalendarData:T,exportCSV:B,loadConsensusData:F,loadDashboardCached:U}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:e}=Vue,{currentKlinePeriod:m,loadIndexKline:t,rememberDialogTrigger:c,menus:d,currentPage:x,currentSubPage:r,stockDetail:n,selectedDate:p}=a,o=ref({indices:[],market_sentiment:null});let q=null;const b=ref(!1),_=ref(null),k=ref(null),y=ref(!1);function I(){window.__quantModules.charts.disposeKline("stockKlineChart")}const M=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{M.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const u=ref(!1),l=ref(null),g=ref(!1),E=ref(0),O=ref(0);async function w(){try{const i=await(await fetch("/api/market/overview")).json();o.value=i,D(i)}catch(S){console.error("获取市场行情失败:",S)}}function D(S){q&&clearInterval(q),S&&S.in_trading_hours&&(q=setInterval(w,6e5))}function T(S){c(),_.value=S,k.value=null,m.value="daily",B(S.code),window.__quantModules.charts.disposeKline("indexKlineChart"),b.value=!0,setTimeout(async()=>{await t("daily")},500)}async function B(S){try{const h=await(await fetch("/api/ai/index-eval/"+S)).json();h.success&&h.data&&(k.value=h.data)}catch(i){console.warn("[getIndexAiScore] cache check failed:",i)}}async function F(){if(_.value){y.value=!0;try{const i=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:_.value.code,index_name:_.value.name,current_price:_.value.close,pct_chg:_.value.pct_chg})})).json();i.success?k.value=i.data:ElementPlus.ElMessage.error(i.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{y.value=!1}}}function U(S){window.__quantModules.charts.zoomKline("stockKlineChart",S)}function J(){g.value=!0,setTimeout(()=>{g.value=!1},600)}function ee(S,i){if(S===i){J();return}const h=800,X=performance.now(),N=i-S;u.value=!0,l.value={value:N,dir:N>0?"up":"down"},g.value=!0,setTimeout(()=>{g.value=!1},600),setTimeout(()=>{l.value=null},2300);function C(f){const P=f-X,v=Math.min(P/h,1),j=1-Math.pow(1-v,3),ne=Math.round(S+N*j);n.value&&n.value.score_data&&(n.value.score_data.score=ne),v<1?requestAnimationFrame(C):(n.value&&n.value.score_data&&(n.value.score_data.score=i),u.value=!1)}requestAnimationFrame(C)}function H(){if(!n.value||!n.value.score_data)return;const S=n.value.score_data.score;if(S==null)return;const i=600,h=performance.now();g.value=!0,setTimeout(()=>{g.value=!1},600);function X(N){const C=Math.min((N-h)/i,1),f=1-Math.pow(1-C,3),P=Math.round(S*f);n.value&&n.value.score_data&&(n.value.score_data.score=P),C<1?requestAnimationFrame(X):n.value&&n.value.score_data&&(n.value.score_data.score=S)}requestAnimationFrame(X)}async function Z(){var h;if(!n.value||!n.value.stock)return;const S=n.value.stock,i=(h=n.value.score_data)==null?void 0:h.score;try{const X=new Date().toISOString().split("T")[0],N=p.value||X,f=await(await fetch(`/api/calendar/stock/${encodeURIComponent(S)}/score?date=${N}`)).json();if(f.success&&f.score_data){const P=f.score_data.score;n.value&&(n.value.score_data=f.score_data),i!=null&&P!==i?ee(i,P):J()}else J()}catch(X){console.warn("[refreshStockScore] failed:",X)}}function z(S){M.value&&(E.value=S.touches[0].clientX,O.value=S.touches[0].clientY)}function s(S){if(!M.value)return;const i=E.value-S.changedTouches[0].clientX,h=O.value-S.changedTouches[0].clientY;if(Math.abs(i)>Math.abs(h)&&Math.abs(i)>80){const X=d.value.map(function(C){return C.key}),N=X.indexOf(x.value);if(i>0&&N<X.length-1){const C=X[N+1],f=window.__quantGoPage;f?f(C,""):(x.value=C,r.value="")}else if(i<0&&N>0){const C=X[N-1],f=window.__quantGoPage;f?f(C,""):(x.value=C,r.value="")}}}return{marketData:o,marketRefreshTimer:q,fetchMarketData:w,indexDetailVisible:b,indexDetail:_,indexAiResult:k,indexAiLoading:y,showIndexDetail:T,loadCachedIndexEval:B,doIndexAiEvaluate:F,disposeStockKline:I,isMobile:M,zoomKlineRange:U,scoreAnimating:u,scoreDelta:l,scorePulse:g,triggerScorePulse:J,animateScoreChange:ee,animateScoreEntrance:H,refreshStockScore:Z,touchStartX:E,touchStartY:O,onTouchStart:z,onTouchEnd:s}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:e,currentPage:m,currentSubPage:t}=a,c=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),d=ref("idle"),x=ref("");async function r(){if(!c.value.webhook_url){x.value="请先输入Webhook地址";return}d.value="testing",x.value="";try{const L=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:c.value.webhook_url})})).json();L.success||L.status==="ok"?(x.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(x.value=L.message||"测试失败",ElementPlus.ElMessage.error(x.value))}catch{x.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}d.value="idle"}const n=Vue.ref(!1);async function p(){n.value=!0;try{const L=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{n.value=!1}}const o=ref(!1);function q(){e("ai","chat_history"),o.value=!0,Vue.nextTick(()=>{const $=document.querySelector('input[placeholder*="输入问题"]');$&&$.focus()})}const b=ref([]),_=ref({});async function k(){try{const L=await(await fetch("/api/ai/recommend-strategies")).json();L.success&&(b.value=L.recommendations||[])}catch($){console.warn("[loadStrategyRecommendations] failed:",$)}}async function y(){try{const L=await(await fetch("/api/ai/usage-stats")).json();L.success&&(_.value=L)}catch($){console.warn("loadAiUsage failed:",$)}}const I=ref({}),M=ref([]),u=ref(7);async function l(){try{const L=await(await fetch("/api/system/monitor")).json();L.success&&(I.value=L)}catch($){console.warn("loadSysMonitor failed:",$)}}const g=ref({});async function E(){try{const L=await(await fetch("/api/system/health-detail")).json();L.success&&(g.value=L)}catch($){console.warn("loadHealthDetail failed:",$)}}async function O(){try{const L=await(await fetch(`/api/analytics/rank?days=${u.value}`)).json();L.success&&(M.value=L.rank||[])}catch($){console.warn("loadAnalytics failed:",$)}}const w=ref(!1);async function D(){if(!w.value){w.value=!0;try{const L=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return L&&L.success?L.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${L.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${L.date}）`):ElementPlus.ElMessage.error(L&&(L.detail||L.message)||"生成复盘失败"),E(),L}catch($){ElementPlus.ElMessage.error("生成复盘失败: "+($.message||""))}finally{w.value=!1}}}const T=ref(null),B=ref(!1);async function F(){try{const L=await(await fetch("/api/ai/fact-check/latest")).json();T.value=L&&L.success&&L.data||null}catch($){console.warn("loadFactCheck failed:",$)}}async function U(){if(!B.value){B.value=!0;try{const L=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return L&&L.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${L.data.pass_rate!=null?L.data.pass_rate+"%":"--"} (${L.data.checked} 个数字)`),F()):ElementPlus.ElMessage.error(L&&(L.detail||L.message)||"事实护栏抽查失败"),L}catch($){ElementPlus.ElMessage.error("事实护栏抽查失败: "+($.message||""))}finally{B.value=!1}}}const J=ref([]),ee=ref(!1);async function H(){try{const L=await(await fetch("/api/backup/list")).json();L.success&&(J.value=L.backups||[])}catch($){console.error("加载备份列表失败",$)}}async function Z(){ee.value=!0;try{const L=await(await fetch("/api/backup/create",{method:"POST"})).json();L.success?(ElementPlus.ElMessage.success(L.message||"备份成功"),H()):ElementPlus.ElMessage.error(L.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{ee.value=!1}}const z=ref(""),s=ref("");async function S($){z.value=$,s.value="";try{const L=window.__quantModules&&window.__quantModules.core||{},Q=typeof L.authHeaders=="function"?L.authHeaders():{},oe=await fetch("/api/reports/export?format="+encodeURIComponent($),{headers:Q});if(!oe.ok)throw new Error("HTTP "+oe.status);const fe=await oe.blob(),Ce=URL.createObjectURL(fe),Y=document.createElement("a");Y.href=Ce;const de=new Date().toISOString().slice(0,10);Y.download="report_"+de+"."+$,document.body.appendChild(Y),Y.click(),document.body.removeChild(Y),URL.revokeObjectURL(Ce),s.value="报表已导出 ("+$.toUpperCase()+")"}catch(L){s.value="报表导出失败: "+(L.message||L)}finally{z.value=""}}async function i($){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${$} 恢复吗？当前数据将被覆盖。`,"恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(L){console.warn("[restoreBackup] confirm cancelled:",L);return}try{const Q=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:$})})).json();Q.success?(ElementPlus.ElMessage.success(Q.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(Q.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const h=ref(!1),X=ref(0),N=[{icon:"calendar",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"bot",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 AI 按钮可随时快速问股。"},{icon:"send",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function C(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{X.value=0,h.value=!0},800)}function f(){h.value=!1,localStorage.setItem("quant_tour_done","1")}function P(){h.value=!1,localStorage.setItem("quant_tour_done","1")}const v=ref(""),j=ref(!1);async function ne(){if(!v.value||!v.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}j.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:v.value.trim(),page:m.value+"/"+t.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(v.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{j.value=!1}}return{feishuConfig:c,feishuTestStatus:d,feishuTestMessage:x,feishuSaving:n,testFeishuWebhook:r,saveFeishuConfig:p,aiFabHidden:o,openAiFab:q,strategyRecommendations:b,aiUsage:_,loadStrategyRecommendations:k,loadAiUsage:y,sysMonitor:I,analyticsRank:M,analyticsDays:u,loadSysMonitor:l,loadAnalytics:O,healthDetail:g,loadHealthDetail:E,reviewTriggering:w,triggerMarketReview:D,factCheck:T,factCheckRunning:B,loadFactCheck:F,triggerFactCheck:U,backups:J,backupCreating:ee,loadBackups:H,createBackup:Z,restoreBackup:i,reportExporting:z,reportExportMsg:s,exportReport:S,tourVisible:h,tourStep:X,tourSteps:N,maybeShowTour:C,skipTour:f,finishTour:P,feedbackText:v,feedbackSubmitting:j,submitFeedback:ne}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:e}=Vue,{currentView:m,selectedDate:t,dates:c,loadConsensusData:d,hapticFeedback:x}=a,r=e(()=>({day:"天",week:"周",month:"月",year:"年"})[m.value]||"天"),n=e(()=>({day:"date",week:"week",month:"month",year:"year"})[m.value]||"date"),p=e(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[m.value]||"YYYY-MM-DD"),o=e(()=>!t.value||!c.value||c.value.length===0?!1:t.value>c.value[0]),q=e(()=>!t.value||!c.value||c.value.length===0?!1:t.value<c.value[c.value.length-1]);function b(I){x("light"),m.value=I;let M=t.value||c.value[c.value.length-1];if(I==="year"){const u=M.substring(0,4),l=c.value.find(g=>g.startsWith(u));t.value=l||M}else if(I==="month"){const u=M.substring(0,7),l=c.value.find(g=>g.startsWith(u));t.value=l||M}setTimeout(d,50)}function _(I){x("light");const M=t.value,u=c.value,l=u.indexOf(M);if(l<0)return;let g=1;m.value==="week"&&(g=5),m.value==="month"&&(g=22),m.value==="year"&&(g=250);const E=l+I*g;if(E>=0&&E<u.length){const O=u[E];if(m.value==="month"){const w=O.substring(0,7),D=u.find(T=>T.startsWith(w));t.value=D||O}else if(m.value==="year"){const w=O.substring(0,4),D=u.find(T=>T.startsWith(w));t.value=D||O}else t.value=O;d()}}function k(I){if(!c.value||c.value.length===0)return!1;const M=I.getFullYear(),u=String(I.getMonth()+1).padStart(2,"0"),l=String(I.getDate()).padStart(2,"0"),g=`${M}-${u}-${l}`;return!c.value.includes(g)}function y(I){I&&I.length>10&&(t.value=I.substring(0,10)),d()}return{viewUnit:r,datePickerType:n,dateFormat:p,canNavPrev:o,canNavNext:q,switchView:b,navigateDate:_,disabledDate:k,onDateChange:y}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:e,subPageNames:m,navigateTo:t,currentPage:c,currentSubPage:d,currentView:x,navigateDate:r,switchView:n,getLoadDashboardData:p,refreshCalendarData:o,getLoadAiHistory:q,exportCSV:b,getShowBatchEvaluate:_,openAiFab:k,toggleSidebar:y,showStockDetail:I,getSelectedDate:M,markExternalStock:u}=a,l=ref("");async function g(H,Z){if(!H||H.trim().length<1){Z([]);return}const z=window.QuantCommandPanel;let s=[];z&&e.value&&(s=z.buildSearchSuggestions(H,e.value,m,z.DEFAULT_COMMANDS));const S=window.__quantModules&&window.__quantModules.pinyin;S&&S.searchCoreStocks(H).forEach(function(i){s.push({value:i.code+" "+i.name,type:"stock",code:i.code,name:i.name,label:i.name,subLabel:i.code,icon:"trending-up",iconName:"trending-up"})});try{const h=await(await fetch("/api/search?q="+encodeURIComponent(H))).json();if(h.success&&h.results){const X=h.results.map(function(C){return{value:C.code+" "+C.name,type:"stock",code:C.code,name:C.name,label:C.name,subLabel:C.code,icon:"trending-up",iconName:"trending-up"}}),N=[];(h.groups||[]).forEach(function(C){(C.items||[]).forEach(function(f){f.type==="sector"?N.push({value:f.name+" · "+f.subLabel,type:"sector",name:f.name,label:f.name,subLabel:"板块",icon:"layers",iconName:"layers"}):f.type==="strategy"?N.push({value:f.name+" · 策略",type:"strategy",id:f.id,name:f.name,label:f.name,subLabel:"策略",icon:"target",iconName:"target"}):f.type==="menu"&&N.push({value:f.name,type:"menu",menuKey:f.menuKey,name:f.name,label:f.name,subLabel:f.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),Z(s.concat(X,N))}else Z(s)}catch(i){console.warn("[searchStocks] fetch failed:",i),Z(s)}}function E(H){return H?H.type==="menu"?{action:"menu",menuKey:H.menuKey,subPage:H.subPage}:H.type==="command"?{action:"command",key:H.key}:H.type==="sector"?{action:"sector",name:H.name}:H.type==="strategy"?{action:"strategy",id:H.id,name:H.name}:H.type==="stock"||H.code&&H.name?{action:"stock",code:H.code,name:H.name}:null:null}function O(H){l.value="";const Z=window.QuantCommandPanel,z=Z?Z.dispatchSearchSelection(H):E(H);if(z){if(z.action==="menu"){t(z.menuKey,z.subPage);return}if(z.action==="command"){T(z.key);return}if(z.action==="sector"){t("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(z.name);return}if(z.action==="strategy"){t("research","overview");return}if(z.action==="stock"){(c.value!=="calendar"||d.value!=="calendar")&&t("calendar","calendar"),typeof u=="function"&&u(z.code),D(z.code,z.name);return}}}let w=null;function D(H,Z){w&&(clearInterval(w),w=null);const z=function(){typeof I=="function"&&I(H,Z)},s=M?M():null;if(s&&s.value){z();return}const S=Date.now();w=setInterval(function(){((M?M().value:!0)||Date.now()-S>4e3)&&(clearInterval(w),w=null,z())},60)}function T(H){if(H==="refresh"){const Z=c.value;Z==="strategies"?p().catch(function(){}):Z==="calendar"?o().catch(function(){}):Z==="ai"&&q().catch(function(){})}else H==="export"?b():H==="batch"?_().value=!0:H==="ai"?k():H==="sidebar"?y():H==="open-eval-history"?t("ai","history"):H==="open-shortterm"&&t("shortterm","overview")}const B=ref(!1),F=ref(!1);function U(H){if(!H)return!1;const Z=H.tagName;return Z==="INPUT"||Z==="TEXTAREA"||Z==="SELECT"||H.isContentEditable}function J(H){if(U(H.target))return;const Z=H.key.toLowerCase();if(H.ctrlKey&&Z==="k"){H.preventDefault(),F.value=!0;return}if(H.ctrlKey&&Z==="/"){H.preventDefault(),B.value=!B.value;return}if(H.ctrlKey&&Z==="h"){H.preventDefault(),t("ai","history");return}if(H.ctrlKey&&H.shiftKey&&Z==="s"){H.preventDefault(),t("shortterm","overview");return}if(!(H.ctrlKey||H.metaKey||H.altKey)){if(Z>="1"&&Z<="5"){const z=parseInt(Z)-1,s=e.value[z];s&&t(s.key,s.subPages[0]||"");return}if(Z==="r"&&ee(),(Z==="arrowleft"||Z==="arrowright"||Z==="arrowup"||Z==="arrowdown")&&c.value==="calendar")if(H.preventDefault(),Z==="arrowleft"||Z==="arrowright")r(Z==="arrowleft"?-1:1);else{const z=["day","week","month","year"].indexOf(x.value),s=["day","week","month","year"][(z+(Z==="arrowup"?-1:1)+4)%4];n(s)}}}function ee(){const H=c.value;H==="strategies"?p().catch(()=>{}):H==="calendar"?o().catch(()=>{}):H==="ai"&&q().catch(()=>{})}return{searchQuery:l,searchStocks:g,onSearchSelect:O,runGlobalCommand:T,shortcutHelpVisible:B,commandPaletteVisible:F,isTypingTarget:U,handleGlobalKeydown:J,refreshCurrentPage:ee}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:e,loadUserConfig:m,loadDates:t,loadDashboardData:c,loadDashboardCached:d,loadHealthMetrics:x,loadConsensusData:r,applyTheme:n,maybeShowTour:p,loadAiVendors:o,loadGroupConfig:q,groupsConfig:b}=a,_=function(Z){const z=window.__quantModules&&window.__quantModules.themes;return z&&z.applyLegacyTheme?z.applyLegacyTheme(Z):n(Z)},k="qc_login_username";let y="";try{y=localStorage.getItem(k)||""}catch{y=""}const I=ref({username:y,password:""}),M=ref(!1),u=ref(!1),l=ref(!1),g=ref({oldPassword:"",newPassword:"",confirmPassword:""}),E=ref(!1),O=ref(!1),w=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),D=ref(1);async function T(){try{(await(await fetch("/api/setup/status")).json()).needed&&(w.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},D.value=1,O.value=!0)}catch(Z){console.warn("[checkSetupWizard] failed:",Z)}}async function B(){try{const Z={new_password:w.value.newPassword,ai_key:w.value.aiKey,ai_provider:w.value.aiProvider,ai_model:w.value.aiModel,ai_endpoint:w.value.aiEndpoint,tushare_token:w.value.tushareToken},s=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Z)})).json();s.success?(O.value=!1,ElementPlus.ElMessage.success("初始化完成"),await m()):ElementPlus.ElMessage.error(s.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function F(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(O.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function U(){if(!I.value.username||!I.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}M.value=!0;try{const z=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(I.value)})).json();if(z.success){e.value=z.user,localStorage.setItem("quant_user",JSON.stringify(z.user)),localStorage.setItem("quant_token",z.data.access_token),_(z.user.theme||"gold");try{localStorage.setItem(k,I.value.username||"")}catch{}typeof q=="function"&&await q().catch(function(){}),typeof o=="function"&&o(),await m(),await t(),await Promise.all([d(),r(),x().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),z.data&&z.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),p(),z.user.role==="admin"&&setTimeout(T,500)}else ElementPlus.ElMessage.error(z.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{M.value=!1}}async function J(){u.value=!0;try{const z=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();z.success?(e.value=z.user,localStorage.setItem("quant_user",JSON.stringify(z.user)),localStorage.setItem("quant_token",z.data.access_token),_(z.user.theme||"gold"),typeof q=="function"&&await q().catch(function(){}),await m(),await t(),await c(),x().catch(()=>{}),await r(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(z.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{u.value=!1}}function ee(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{e.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{b&&(b.value={})}catch{}try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function H(){if(!g.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!g.value.newPassword||g.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(g.value.newPassword!==g.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}E.value=!0;try{const Z=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:g.value.oldPassword,new_password:g.value.newPassword})}),z=await Z.json();Z.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),l.value=!1,g.value={oldPassword:"",newPassword:"",confirmPassword:""},ee()):ElementPlus.ElMessage.error(z.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{E.value=!1}}return{loginForm:I,logining:M,guestLogining:u,showChangePassword:l,changePasswordForm:g,changingPassword:E,showSetupWizard:O,setupForm:w,setupStep:D,checkSetupWizard:T,completeSetupWizard:B,resetSetupWizard:F,handleLogin:U,handleGuestLogin:J,handleLogout:ee,doChangePassword:H}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:e}=Vue;let m=null;const{strategyFilter:t,currentView:c,statusFilter:d,currentPage:x,currentSubPage:r,menus:n,currentUser:p,strategyFilterCounts:o,lazyTick:q,dates:b,selectedDate:_,consensus:k,loadConsensusData:y,fetchMerrillClock:I,fetchMarketData:M,loadWatchlist:u,loadAiHistory:l,preloadWatchlistKline:g,loadChatHistory:E,loadSystemStatus:O,checkTushareConnection:w,loadSysMonitor:D,loadAnalytics:T,loadHealthDetail:B,loadHealthMetrics:F,loadAiUsage:U,loadFactCheck:J,loadAutoEvaluateConfig:ee,loadDatasourceConfig:H,loadFeishuConfig:Z,loadAiConfig:z,loadAiVendors:s,loadRateLimit:S,loadDataRefreshConfig:i,loadBackups:h,loadAllGroups:X,loadUsers:N,stockDetailTab:C,stockDetailVisible:f,stockKlineLoaded:P,loadStockKline:v,currentKlinePeriod:j,showMerrillDetail:ne,indexDetailVisible:$,restoreDialogFocus:L}=a;e(t,Q=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(Q.selected)),localStorage.setItem("quant_strategy_filter_mode",Q.mode)},{deep:!0}),e([c,d],(Q,oe)=>{Q[0]!==oe[0]&&y()}),e([x,r],([Q,oe])=>{var fe;try{const Y=!(Q==="calendar"&&oe==="calendar")&&oe||"",de=Y?"#"+Q+"/"+Y:"#"+Q;window.location.hash!==de&&(window.location.hash=de)}catch{}if(oe&&localStorage.setItem("quant_last_subpage",oe),!oe&&n.value.find(Ce=>Ce.key===Q)){const Ce=n.value.find(Y=>Y.key===Q);Ce&&Ce.subPages.length>0&&(r.value=Ce.subPages[0])}if(Q==="shortterm"&&oe==="market-review"){const Ce=window.__lazyLoaders&&window.__lazyLoaders.research;Ce&&Ce().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function(Y){Y&&Y.name&&!Y.__quantRegistered&&(window.__quantApp.component(Y.name,Y),Y.__quantRegistered=!0)}),q&&q.value++}).catch(function(Y){console.warn("[lazy] research 组件补加载失败",Y)})}Q==="calendar"&&oe==="calendar"&&(!k.value||k.value.length===0)&&(b.value.length>0&&!_.value&&(_.value=b.value[b.value.length-1]||""),setTimeout(y,50)),Q==="calendar"&&oe==="pool"&&(!k.value||k.value.length===0)&&(b.value.length>0&&!_.value&&(_.value=b.value[b.value.length-1]||""),setTimeout(y,50)),Q==="strategies"&&(oe==="merrill"&&I(),oe==="market"&&M(),oe==="consensus"&&(!k.value||k.value.length===0)&&setTimeout(y,50)),Q==="ai"&&(oe==="watchlist"&&(u(),l(),setTimeout(g,500)),oe==="history"&&l(),oe==="overview"&&(l(),u()),oe==="chat_history"&&E()),(Q==="system"||Q==="ops")&&((fe=p.value)==null?void 0:fe.role)==="admin"&&(oe==="status"&&(O(),w()),oe==="health"&&(B(),F()),oe==="schedule"&&B(),oe==="guard"&&J(),oe==="usage"&&(D(),T(),B(),F(),U(),J()),oe==="autoeval"&&(ee(),s()),oe==="datasource"&&H(),oe==="feature"&&(Z(),z(),S(),i(),h()),oe==="user"&&(X(),N())),(Q==="system"||Q==="ops")&&oe==="usage"?m||(m=setInterval(()=>{D(),T(),B(),F(),U()},3e4)):m&&(clearInterval(m),m=null)}),e(C,(Q,oe)=>{Q==="kline"&&oe&&oe!=="kline"&&f.value&&(P.value=!1,setTimeout(async()=>{!await v(j.value)&&f.value&&C.value==="kline"&&setTimeout(()=>v(j.value),800)},50))}),e(ne,Q=>{Q||(document.documentElement.style.overflow="",document.body.style.overflow="")}),e([f,$],([Q,oe])=>{!Q&&!oe&&L()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:e,applyTheme:m,menus:t,currentPage:c,currentSubPage:d,currentView:x,currentKlinePeriod:r,selectedDate:n,dates:p,loadDates:o,loadConsensusData:q,loadDashboardCached:b,appVersion:_,themes:k,fetchMarketData:y,fetchMerrillStages:I,fetchMerrillClock:M,loadAiConfig:u,loadAiVendors:l,loadAiCatalog:g,currentUser:E,loadUserConfig:O,loadAutoEvaluateConfig:w,loadGroupConfig:D,loadUsers:T,loadAllGroups:B,loadAiHistory:F}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",e);function U(N,C){const f={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(N==="calendar"&&f[C])return c.value="calendar",d.value="calendar",f[C]&&(x.value=f[C]),!0;if(N==="research"&&(C==="strategy-write"||C==="custom-write")){c.value="research",d.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",C==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const N=window.location.hash||"";if(!N||N==="#")return;const C=N.replace(/^#\/?/,"").split("/"),f=C[0],P=C[1]||"",v=t.value.find(function(j){return j.key===f});if(v&&!U(f,P)){if(!P)c.value=f,d.value=v.subPages[0]||"";else if(v.subPages.indexOf(P)>=0)c.value=f,d.value=P;else return;window.__lazyLoaders&&window.__lazyLoaders[f]&&window.__quantGoPage&&window.__quantGoPage(f,d.value).catch(function(){})}});const J=(N,C=3e3,f="")=>{const P=new Promise((v,j)=>setTimeout(()=>j(new Error("timeout")),C));return Promise.race([N,P]).catch(v=>{console.warn(`[init] ${f||"task"} failed:`,v.message)})},ee=localStorage.getItem("quant_theme"),H=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const N=window.__quantModules.themes;let C=H.theme||"system",f=H.theme_hue!=null&&H.theme_hue!==""?H.theme_hue:null;const P=typeof N.migrateLegacyTheme=="function"?N.migrateLegacyTheme():null;f==null&&P&&(C=P.mode,f=P.hue),f==null&&(f=45),m(C,f)}else ee&&m(ee);await D().catch(function(){}),function(){var N=window.location.hash||"",C=!1;if(N&&N!=="#"){var f=N.replace(/^#\/?/,"").split("/"),P=f[0],v=f[1]||"",j=t.value.find(function(oe){return oe.key===P});j&&(U(P,v)||(c.value=P,v&&j.subPages.indexOf(v)>=0?d.value=v:v||(d.value=j.subPages[0]||"")),C=!0)}if(!C){var ne=localStorage.getItem("quant_last_page");ne&&t.value.some(function(oe){return oe.key===ne})?c.value=ne:H.default_view&&t.value.some(function(oe){return oe.key===H.default_view})&&(c.value=H.default_view);var $=localStorage.getItem("quant_last_subpage");$&&(d.value=$)}var L=localStorage.getItem("quant_last_date");L&&(n.value=L);var Q=localStorage.getItem("quant_last_view");Q&&(x.value=Q),window.__lazyLoaders&&window.__lazyLoaders[c.value]&&window.__quantGoPage&&window.__quantGoPage(c.value,d.value).catch(function(){})}(),fetch("/api/health").then(N=>N.json()).then(N=>{N.version&&(_.value=N.version)}).catch(()=>{});const Z=localStorage.getItem("quant_user"),z=localStorage.getItem("quant_token"),s=!!(Z&&z),S=Promise.all([Promise.resolve().then(()=>{k.value={light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}}),J(y(),3e3,"marketData"),J(I(),2e3,"merrillStages")]).then(()=>{J(M(),3e3,"merrillClock")});if(u(),g(),s&&E.value&&l(),!s||!E.value){await S;return}let i=!0;try{i=(await fetch("/api/users/me")).ok}catch{i=!1}if(!i){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),E.value=null;return}if(E.value){const N=E.value.theme||"",C=window.__quantModules&&window.__quantModules.themes;let f=H.theme||"system",P=H.theme_hue!=null&&H.theme_hue!==""?H.theme_hue:null;if(P==null&&C&&typeof C.migrateLegacyTheme=="function"){const v=C.migrateLegacyTheme();if(v)f=v.mode,P=v.hue;else if(N&&C.LEGACY_MAP&&C.LEGACY_MAP[N]){const j=C.LEGACY_MAP[N];f=j[0],P=j[1]}}P==null&&(P=45),m(f,P)}if(window.__quantModules&&window.__quantModules.preferences){const C=await window.__quantModules.preferences.loadPreferences();var h=localStorage.getItem("quant_last_page");!h&&C.default_view&&t.value.some(function(f){return f.key===C.default_view})&&(c.value=C.default_view),C.theme&&m(C.theme,C.theme_hue!=null&&C.theme_hue!==""?C.theme_hue:null),r&&(C.chart_period==="weekly"||C.chart_period==="monthly")&&(r.value=C.chart_period)}await Promise.all([J(O(),2e3,"userConfig"),J(o(),2e3,"dates")]),w().catch(()=>{}),D().catch(()=>{});const X=c.value==="strategies"?J(b(),2e3,"dashboard"):J(q(),2e3,"consensus");await Promise.all([X,J(T(),2e3,"users"),J(F(),2e3,"aiHistory")]),B().catch(()=>{})}}}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:e,onMounted:m,onUnmounted:t,watch:c,nextTick:d}=Vue,x=a(!1),r=window.__quantModules&&window.__quantModules.i18n||{},n=r.SUPPORTED_LOCALES||["zh-CN","en"],p=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",o=a(n.indexOf(p)!==-1?p:"zh-CN");typeof r.bindLocale=="function"&&r.bindLocale(o);const q=typeof r.t=="function"?r.t:function(V){return String(V)};function b(V){n.indexOf(V)!==-1&&(o.value=V,typeof r.setLocale=="function"&&r.setLocale(V),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",V))}function _(V,ie){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(V,ie):V==null?"":String(V)}function k(V){(V.key==="Enter"||V.key===" "||V.key==="Spacebar")&&(V.preventDefault(),V.currentTarget&&typeof V.currentTarget.click=="function"&&V.currentTarget.click())}let y=null;function I(){document.activeElement&&document.activeElement!==document.body&&(y=document.activeElement)}function M(){if(y&&y.isConnected)try{y.focus()}catch{}y=null}const u=a(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{u.value=!0}),window.addEventListener("offline",()=>{u.value=!1})),window.addEventListener("beforeunload",V=>{if(x.value)return V.preventDefault(),V.returnValue="您有未保存的配置变更，确定要离开吗？",V.returnValue});function l(V="light"){typeof navigator<"u"&&navigator.vibrate&&(V==="light"?navigator.vibrate(10):V==="medium"?navigator.vibrate(20):V==="heavy"&&navigator.vibrate([10,30,10]))}const g=useMerrillClock(),{merrillData:E,merrillStagesConfig:O,showMerrillDetail:w,merrillDetailData:D,merrillClockConfig:T,merrillClockLastUpdated:B,merrillReevalResult:F,merrillReevalLoading:U,stages:J,indicatorList:ee,dimensionScoreList:H,detailDimensionScoreList:Z,confidenceColor:z,timelineStages:s,clockPosition:S,merrillProgressStyle:i,FULL_CYCLE_MONTHS:h,getStageAngle:X,getCycleProgress:N,getCurrentStageMonths:C,getStageTotalMonths:f,isStageCompleted:P,getCharLabel:v,getAssetName:j,getRankColor:ne,fetchMerrillStages:$,fetchMerrillClock:L,loadMerrillTimeline:Q,showTimelineStage:oe,merrillTimeline:fe,timelineLoading:Ce,showStageDetail:Y,saveMerrillClockConfig:de,doMerrillReevaluate:De,startAutoRefresh:ae,stopAutoRefresh:ye,merrillSnapshots:Te,merrillSnapshotsTotal:ue,fetchMerrillSnapshots:be}=g,ke=a(localStorage.getItem("sidebar_collapsed")==="1");function re(){ke.value=!ke.value,localStorage.setItem("sidebar_collapsed",ke.value?"1":"0")}const te=a(null),ve=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","notification","about"],guestSubPages:["config","about"]}],Le=e(()=>{var Ge,Ht,Yt;const V=((Ge=st.value)==null?void 0:Ge.role)||"guest",ie=((Ht=st.value)==null?void 0:Ht.group)||V,he=((Yt=te.value)==null?void 0:Yt[ie])||null;return ve.map(jt=>{if(he&&he.visible_menus&&jt.key in he.visible_menus&&!he.visible_menus[jt.key])return null;const xa={...jt,name:q("nav."+jt.key)||jt.name};return he!=null&&he.visible_sub_pages&&(xa.subPages=jt.subPages.filter(vs=>{const Ld=jt.key+"."+vs;return he.visible_sub_pages[Ld]!==!1})),jt.key==="system"&&V==="guest"&&jt.guestSubPages&&(xa.subPages=jt.guestSubPages),xa}).filter(Boolean)});async function Fe(){try{if(!localStorage.getItem("quant_token"))return;const ie=await fetch("/api/groups/my");if(ie.ok){const he=await ie.json();te.value={[he.group_id]:he.group}}}catch(V){console.warn("loadGroupConfig:",V)}}const He=a("strategies"),Mt=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},mt=a(Mt.navMode);function Pt(V){const ie=window.__quantModules&&window.__quantModules.navModeCore;mt.value=ie?ie.normalizeNavMode(V):V==="tree"||V==="toptab"?V:"toptab",ie&&ie.writePrefs({navMode:mt.value})}const _e=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function qe(V,ie=""){l("light"),He.value=V,A.value=ie,localStorage.setItem("quant_last_subpage",ie)}function Oe(){const V=Le.value;if(!V||!V.length)return;if(!V.some(function(Ne){return Ne.key===He.value})){const Ne=V[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",Ne.key),He.value=Ne.key,A.value=Ne.subPages&&Ne.subPages[0]||"";return}const he=V.find(function(Ne){return Ne.key===He.value});he&&he.subPages&&he.subPages.length&&!he.subPages.includes(A.value)&&(A.value=he.subPages[0])}const Ie=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],Ye=a("multifactor"),Qe=a(null),We=a(1e5),ot=a(!1),gt=a(null);let Dt=null,Kt=null;async function ea(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const ie={initial_capital:We.value||1e5};Qe.value&&Qe.value.length===2&&(ie.start_date=Qe.value[0],ie.end_date=Qe.value[1]),ot.value=!0,gt.value=null;try{const he=await fetch("/api/strategies/"+Ye.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ie)});if(!he.ok){const Ht=await he.json().catch(()=>({}));throw new Error(Ht.detail||"回测失败")}const Ne=await he.json(),Ge=Ne.result||{};if(!Ge.success)throw new Error(Ge.message||"回测失败");Ne.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),gt.value={total_return_pct:((Ge.total_return??0)*100).toFixed(2),annual_return_pct:((Ge.annual_return??0)*100).toFixed(2),max_drawdown_pct:((Ge.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(Ge.sharpe_ratio??0).toFixed(2),win_rate:((Ge.win_rate??0)*100).toFixed(2),out_sample:Ge.outsample_total_return===void 0?"":((Ge.outsample_total_return??0)*100).toFixed(2),overfit_warning:Ge.overfit_warning||!1,message:Ge.message||""},$t(Ge.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(he){ElementPlus.ElMessage.error(he.message||"回测失败")}finally{ot.value=!1}}function $t(V){const ie=document.getElementById("backtestEquityChart");if(!ie||!V||V.length===0)return;const he=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Ne=()=>{Kt=V,Dt&&(Dt.dispose(),Dt=null),Dt=echarts.init(ie),Dt.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const Ge=V.map(Yt=>Yt.date||Yt[0]),Ht=V.map(Yt=>Yt.value??Yt[1]);Dt.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:Ge,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:Ht,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};he?he().then(Ne).catch(()=>{}):Ne()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){Kt&&$t(Kt)}));const A=a("overview");(function(){const V=window.QuantSessionRestore;if(V){const ie=V.restore();ie&&ie.page&&(He.value=ie.page,ie.sub&&(A.value=ie.sub))}})(),Vue.watch(A,function(){wn()});const le=e(()=>{const V=ve.find(ie=>ie.key===He.value);return V?V.name:He.value}),Ee=a(0),Ae=e(()=>{Ee.value;const V={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},ie=A.value;return He.value==="shortterm"&&ie==="market-review"?"qc-research-page":He.value==="ops"&&ie==="execution"?"qc-strategies-page":V[He.value]||""}),Ue=a(!1),ft=a({}),Je=a([]);a("");const Rt=a([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),at=a("day"),bt=a("all"),st=a(null);c(Le,function(){Oe()}),c([He,A],function(){const V=document.querySelector(".main-content");V&&(V.scrollTop=0)}),function(){if(typeof localStorage>"u")return;const V=localStorage.getItem("quant_user"),ie=localStorage.getItem("quant_token");if(V&&ie)try{st.value=JSON.parse(V)}catch{}}();const Nt=a(!1),xt=a("kline"),G=a(null),we=a(!1),Ze=a(localStorage.getItem("qc_detail_mode")||"split"),Ke=a(window.innerWidth<=1024),St=e(()=>Ze.value==="split"&&!Ke.value);function Tt(V){Ze.value=V;try{localStorage.setItem("qc_detail_mode",V)}catch{}}window.addEventListener("resize",()=>{Ke.value=window.innerWidth<=1024});const Ft=35,nt=a(parseInt(localStorage.getItem("qc_split_width")||"",10)||null);function wt(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",nt.value?nt.value+"px":Ft+"%")}wt();function Wt(V){const ie=Math.max(1,Math.min(V,2e3));nt.value=ie,wt();try{localStorage.setItem("qc_split_width",String(ie))}catch{}}function ba(V){if(nt.value)return nt.value;const ie=V?V.getBoundingClientRect().width:0;return Math.max(200,Math.floor(ie*Ft/100))}let rt=null;function Xt(V,ie){if(!ie||Ke.value)return;V.preventDefault();const he=ie.getBoundingClientRect().width;rt={startX:V.clientX,startW:ba(ie),minW:Math.max(200,Math.floor(he*Ft/100)),maxW:Math.floor(he/2)},document.body.classList.add("qc-split-resizing")}function Ct(V){if(!rt)return;const ie=V.clientX-rt.startX;let he=rt.startW+ie;he=Math.max(rt.minW,Math.min(he,rt.maxW)),nt.value=he,wt();try{localStorage.setItem("qc_split_width",String(he))}catch{}}function ht(){rt&&(rt=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",Ct),document.addEventListener("mouseup",ht));function ta(V){const ie=V.target&&V.target.closest?V.target.closest("[data-split-resize]"):null;if(!ie)return;const he=ie.closest("[data-split-root]");Xt(V,he)}typeof document<"u"&&document.addEventListener("mousedown",ta,!0);const aa={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于"},$e=a({});function Ut(V,ie){return aa[ie]||ie}function da(V){const ie=ve.find(Ne=>Ne.key===V);if(!ie||!ie.subPages||!ie.subPages.length)return;if(!($e.value[V]||[]).length){const Ne=ie.subPages[0];$e.value=Object.assign({},$e.value,{[V]:[{subPage:Ne,title:Ut(V,Ne)}]})}}function wa(V,ie){const he=window.__quantModules&&window.__quantModules.tabsCore,Ne=Ut(V,ie);if(he){const Ge=he.openTab($e.value,V,ie,Ne);$e.value=Ge.groups}else{const Ge=$e.value[V]||[];Ge.some(Ht=>Ht.subPage===ie)||($e.value=Object.assign({},$e.value,{[V]:Ge.concat([{subPage:ie,title:Ne}])}))}qe(V,ie)}function la(V,ie){const he=window.__quantModules&&window.__quantModules.tabsCore,Ne=A.value;let Ge=null;if(he)Ge=he.closeTab($e.value,V,ie,Ne),$e.value=Ge.groups;else{const jt=$e.value[V]||[];$e.value=Object.assign({},$e.value,{[V]:jt.filter(xa=>xa.subPage!==ie)})}if(!($e.value[V]||[]).length){da(V);const jt=ve.find(vs=>vs.key===V),xa=jt&&jt.subPages&&jt.subPages[0];xa&&qe(V,xa);return}const Yt=Ge?Ge.nextActive:null;Yt&&qe(V,Yt)}function ia(V,ie){if(!($e.value[V]||[]).some(Ne=>Ne.subPage===ie)){wa(V,ie);return}qe(V,ie)}c([He,A],([V,ie])=>{da(V);const he=$e.value[V]||[];ie&&!he.some(Ne=>Ne.subPage===ie)&&($e.value=Object.assign({},$e.value,{[V]:he.concat([{subPage:ie,title:Ut(V,ie)}])}))},{immediate:!0});const K=function(V){if(!(V.ctrlKey&&V.key==="Tab"))return;const ie=He.value,he=$e.value[ie]||[];if(he.length<=1)return;V.preventDefault();const Ne=A.value,Ge=Math.max(0,he.findIndex(jt=>jt.subPage===Ne)),Ht=V.shiftKey?(Ge-1+he.length)%he.length:(Ge+1)%he.length,Yt=he[Ht];Yt&&ia(ie,Yt.subPage)};window.addEventListener("keydown",K);const xe=a({light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}),je=a("light"),ze=[45,220,0,140,270,320,180,25,250,-1],dt={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色",180:"青色",25:"橙色",250:"靛蓝","-1":"中性"},et=a(45),_t=a(function(){const V=window.__quantModules&&window.__quantModules.preferences;return V&&V.getPreference&&V.getPreference("theme")||"system"}());(function(){const V=window.__quantModules&&window.__quantModules.preferences,ie=V&&V.getPreference&&V.getPreference("theme_hue");ie!=null&&ie!==""&&(et.value=parseInt(ie,10))})();const Lt=a("comfortable");(function(){const V=window.__quantModules&&window.__quantModules.preferences;V&&V.applyDensity&&(Lt.value=V.applyDensity()||"comfortable")})();function yt(V){return V<0?"hsl(0, 0%, 46%)":"hsl("+V+", 75%, 42%)"}function Sa(V){return dt[V]||"自定义 "+V}const oa=a(""),ua=a([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),sa=a({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),va=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],na=a({day:[],week:[],month:[],year:[]}),La=a({});function ma(V,ie){let he=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(he=window.__quantModules.themes.applyTheme(V,ie)),je.value=he&&he.mode?he.mode:V==="dark"||V==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function Ia(V,ie){const he=window.__quantModules&&window.__quantModules.preferences;if(!(!he||!he.setPreferences))try{he.setPreferences({theme:V}),ie!=null&&ie!==""&&he.setPreferences({theme_hue:parseInt(ie,10)})}catch{}}function ka(V,ie){ma(V,ie),ie!=null&&ie!==""&&(et.value=parseInt(ie,10));const he=window.__quantModules&&window.__quantModules.themes;let Ne=V;he&&he.LEGACY_MAP&&he.LEGACY_MAP[V]&&(Ne=he.LEGACY_MAP[V][0]),Ne==="light"||Ne==="dark"||Ne==="system"?_t.value=Ne:_t.value=je.value,Ne==="system"&&(Ne=je.value),Ia(Ne,ie),st.value&&(fetch(`/api/users/${st.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:Ne})}),st.value.theme=Ne,localStorage.setItem("quant_user",JSON.stringify(st.value)))}function Na(V){const ie=window.__quantModules&&window.__quantModules.preferences,he=ie&&ie.getPreference?ie.getPreference("theme_hue"):null;ka(V,he)}function Pa(V){const ie=window.__quantModules&&window.__quantModules.preferences;!ie||!ie.applyDensity||(Lt.value=ie.applyDensity(V)||"comfortable",ie.setPreference&&ie.setPreference("info_density",Lt.value))}function Bt(V){et.value=parseInt(V,10);const ie=window.__quantModules&&window.__quantModules.preferences,he=ie&&ie.getPreference&&ie.getPreference("theme")||"light";ka(he,et.value)}const Zt=a(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function Ca(V){Zt.value=!!V;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",V?"show":"hide")}catch{}}const Da=e(()=>{const V=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return Zt.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...V]:V}),W=a("daily");(function(){try{const ie=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(ie==="weekly"||ie==="monthly")&&(W.value=ie)}catch{}})();const pe=a(!1),R=a(""),se=a(!1),ce=a(!1),Pe=a({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),Re=["MA5","MA10","MA20","MA60"],zt=a(!1);let lt=0;async function pt(V){if(!G.value)return!1;const ie=++lt;pe.value=!0,W.value=V;try{const Ne=await(await fetch(`/api/market/kline/${G.value.stock}?period=${V}&limit=60`)).json();if(!Ne.success||!Ne.data)throw new Error(Ne.message||"数据获取失败");return R.value=Ne.degraded_from?"分钟数据("+Ne.degraded_from+")暂不可用, 已降级展示日线":"",on(G.value.stock),ie!==lt?!1:(xt.value!=="kline"||(ce.value=!0,await d(),window.__quantModules.charts.renderKlineTo("stockKlineChart",Ne.data,V,!1,{isMobile:ws.value,onLegend:Ge=>{Object.keys(Pe.value).forEach(Ht=>{Ht in Ge&&(Pe.value[Ht]=!!Ge[Ht])})}}),kt()),!0)}catch(he){return console.error("[kline] 加载失败:",G.value&&G.value.stock,V,he),xt.value==="kline"&&(ce.value=!1,R.value="",ElementPlus.ElMessage.error("K线加载失败: "+(he&&he.message?he.message:"数据源不可达，请重试"))),!1}finally{pe.value=!1}}async function Jt(V){if($a.value){se.value=!0,W.value=V;try{const he=await(await fetch(`/api/market/kline/${$a.value.code}?period=${V}&limit=60`)).json();if(!he.success||!he.data)throw new Error(he.message||"数据获取失败");zt.value=!0,await d(),window.__quantModules.charts.renderKlineTo("indexKlineChart",he.data,V,!0,{isMobile:ws.value,onLegend:Ne=>{Object.keys(Pe.value).forEach(Ge=>{Ge in Ne&&(Pe.value[Ge]=!!Ne[Ge])})}}),kt()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{se.value=!1}}}async function At(V){if(!ce.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await pt(V)}async function fa(V){if(!zt.value){ElementPlus.ElMessage.info("请先加载K线");return}await Jt(V)}function ra(V){const ie=(Nt.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(Ja.value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);ie&&ie.dispatchAction({type:"legendToggleSelect",name:V})}function kt(){["K线","MA5","MA10","MA20","MA60"].forEach(V=>{Pe.value[V]=!0})}async function Xe(){const V=await fetch("/api/system/metrics");if(!V.ok)throw new Error("metrics "+V.status);const ie=await V.json(),he=Array.isArray(ie)?ie:ie&&ie.data_sources||[];Je.value=he}const Ot=()=>us,qa=()=>Is,qt=()=>er,Qa=()=>ja,Cn=()=>is,qn=()=>Gt,En=window.__quantAppLogic.data.create({currentView:at,statusFilter:bt,dashboardData:ft,loadHealthMetrics:Xe,getLoadDashboardData:Ot,getLastRefreshTime:qa,getFetchPoolSignals:qt}),{loading:fs,loadingView:Mn,viewCache:Tn,dates:Oa,selectedDate:Gt,lastLoadTime:ps,consensus:_a,viewNote:Pn,loadDates:gs,refreshCalendarData:hs,exportCSV:ys,loadConsensusData:Ra,loadDashboardCached:Fa}=En,Dn=window.__quantAppLogic.market.create({currentKlinePeriod:W,loadIndexKline:Jt,rememberDialogTrigger:I,menus:Le,currentPage:He,currentSubPage:A,stockDetail:G,selectedDate:Gt}),{marketData:Rn,indexDetailVisible:Ja,indexDetail:$a,indexAiResult:zn,indexAiLoading:An,fetchMarketData:Xa,showIndexDetail:Ln,loadCachedIndexEval:In,doIndexAiEvaluate:Nn,disposeStockKline:bs,isMobile:ws,zoomKlineRange:On,scoreAnimating:jn,scoreDelta:Vn,scorePulse:Fn,refreshStockScore:Za,animateScoreEntrance:es,onTouchStart:Hn,onTouchEnd:Bn}=Dn,Kn=window.__quantAppLogic.ops.create({navigateTo:qe,currentPage:He,currentSubPage:A}),{feishuConfig:ks,feishuTestStatus:Wn,feishuTestMessage:Un,testFeishuWebhook:Gn,saveFeishuConfig:Yn,aiFabHidden:Qn,openAiFab:_s,strategyRecommendations:Jn,aiUsage:$n,loadStrategyRecommendations:xs,loadAiUsage:ts,sysMonitor:Xn,analyticsRank:Zn,analyticsDays:el,loadSysMonitor:Ss,loadAnalytics:Cs,healthDetail:tl,loadHealthDetail:qs,reviewTriggering:al,triggerMarketReview:sl,factCheck:nl,factCheckRunning:ll,loadFactCheck:Es,triggerFactCheck:il,backups:ol,backupCreating:rl,loadBackups:Ms,createBackup:cl,restoreBackup:dl,reportExporting:ul,reportExportMsg:vl,exportReport:ml,tourVisible:fl,tourStep:pl,tourSteps:gl,maybeShowTour:hl,skipTour:yl,finishTour:bl,feedbackText:wl,feedbackSubmitting:kl,submitFeedback:_l}=Kn,xl=window.__quantAppLogic.nav.create({currentView:at,selectedDate:Gt,dates:Oa,loadConsensusData:Ra,hapticFeedback:l}),{viewUnit:Sl,datePickerType:Cl,dateFormat:ql,canNavPrev:El,canNavNext:Ml,switchView:Ts,navigateDate:Ps,disabledDate:Tl,onDateChange:Pl}=xl,Dl=window.__quantAppLogic.keys.create({menus:Le,subPageNames:aa,navigateTo:qe,currentPage:He,currentSubPage:A,currentView:at,navigateDate:Ps,switchView:Ts,getLoadDashboardData:Ot,refreshCalendarData:hs,getLoadAiHistory:Qa,exportCSV:ys,getShowBatchEvaluate:Cn,openAiFab:_s,toggleSidebar:re,showStockDetail:As,getSelectedDate:qn,markExternalStock:Ll}),{searchQuery:Rl,searchStocks:zl,onSearchSelect:Al,shortcutHelpVisible:Ds,commandPaletteVisible:Rs,handleGlobalKeydown:zs}=Dl;let Ha=null;function Ll(V){Ha={code:V,ts:Date.now()}}function Il(V){return!!(Ha&&Date.now()-Ha.ts<4e3&&(V==null||Ha.code===V))}let Ba=0;async function As(V){const ie=++Ba;I(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(V,""),ss.value=null,W.value="daily",ce.value=!1,xt.value="kline",G.value=null,we.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),Nt.value=!0,d(()=>es());try{const he=await fetch(`/api/calendar/stock/${V}?date=${Gt.value}`);if(ie!==Ba)return;G.value=await he.json(),G.value&&G.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(V,G.value.name)}catch{if(ie!==Ba)return;ElementPlus.ElMessage.error("加载失败"),G.value={stock:V,name:"",total_days:0}}finally{ie===Ba&&(we.value=!1)}setTimeout(async()=>{await pt("daily"),Za()},500),os(V)}const Nl={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},Ol={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function jl(V){return Nl[V]||"var(--text-tertiary)"}function Vl(V){return Ol[V]||"var(--bg-hover)"}const Fl=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:ce,stockDetailVisible:Nt,stockDetailTab:xt,stockDetail:G,disposeStockKline:bs}):{},{chatSessions:Hl,chatHistoryView:Bl,selectedChatIds:Kl,expandedChatDates:Wl,expandedChatMonths:Ul,expandedChatStocks:Gl,chatHistoryLoading:Yl,chatHistoryError:Ql,allChatSessionsFlat:Jl,chatGroupedByDate:$l,chatGroupedByMonth:Xl,chatGroupedByStock:Zl,toggleSelectChat:ei,toggleSelectChatDate:ti,toggleSelectChatMonth:ai,toggleSelectChatStock:si,toggleChatDateExpand:ni,toggleChatMonthExpand:li,toggleChatStockExpand:ii,selectAllChatSessions:oi,deleteSelectedChatSessions:ri,viewChatSession:ci,loadChatHistory:Ls,deleteChatSession:di,renderMarkdown:ui,stockChatInput:vi,stockChatMessages:mi,stockChatLoading:fi,stockChatError:pi,askStockSend:gi,askStockQuick:hi}=Fl,yi=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:st,applyTheme:ma,allMenuDefs:ve,loadGroupConfig:Fe}):{},{userList:bi,userSearch:wi,groupFilter:ki,userPageTab:_i,expandedGroups:xi,addMemberGroupMap:Si,filteredUsers:Ci,toggleGroupExpand:qi,removeMemberFromGroupInline:Ei,addMemberToGroupInline:Mi,changeUserGroup:Ti,showAddUser:Pi,editingUser:Di,userForm:Ri,savingUser:zi,editingGroup:Ai,menuConfigDialog:Li,memberDialog:Ii,groupEditForm:Ni,subPageCache:Oi,showAddGroup:ji,addGroupForm:Vi,savingGroup:Fi,groupMembers:Hi,addMemberUsername:Bi,selectedMemberGroup:Ki,subPageSectionExpanded:Wi,toggleSubPageSection:Ui,getGroupMemberCount:Gi,getMenuEnabledCount:Yi,groupCount:Qi,openMemberManager:Ji,loadGroupMembers:$i,addMemberToGroup:Xi,removeMemberFromGroup:Zi,availableUsersForGroup:eo,onParentToggle:to,openMenuConfig:ao,saveMenuConfig:so,deleteGroupConfig:no,createGroup:lo,allGroups:io,getGroupName:oo,loadAllGroups:as,loadUsers:Ka,editUser:ro,saveUser:co,deleteUser:uo,toggleUserEnabled:vo,resetUserPassword:mo}=yi,fo=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:_a,currentPage:He,currentSubPage:A,dashboardData:ft,searchKeyword:oa,statusFilter:bt,strategyFilter:sa,strategyFilterCounts:na}):{},{applyStrategyFilter:Vp,statusCounts:po,stockPool:go,strategyDistribution:ho,strategyPreviewCount:yo,saveStrategyFilter:bo,filteredConsensusRank:wo,currentPoolSize:ko,filteredStrategyCounts:_o,poolChangeBadge:xo,timeBarPercent:So,lastRefreshTime:Is,navigateToStrategyFilter:Co}=fo,qo=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:x,consensus:_a}):{},{aiResult:ss,lastEvalTime:Eo,evalHistoryComparison:Mo,checklistItems:To,aiHistory:Ns,selectedHistoryIds:Os,expandedDates:js,expandedMonths:Po,expandedStocks:Vs,poolSignals:Do,toggleMonthExpand:Ro,aiHistoryView:zo,selectedWatchlistCodes:Fs,showAutoEvaluateSettings:Hs,savingConfig:Bs,autoEvaluateScope:Ks,aiVendors:Ao,aiCatalog:Lo,aiModelsError:Io,testingAllModels:No,savingAiModels:Oo,loadAiVendors:Wa,loadAiCatalog:Ws,saveAiVendors:Us,saveAiModels:jo,testVendorModel:Vo,testAllVendorModels:Fo,fetchVendorModels:Ho,addVendorFromCatalog:Bo,addCustomVendor:Ko,addVendorModel:Wo,removeVendorModel:Uo,removeVendor:Go,toggleVendorKeyReveal:Yo,toggleVendorEdit:Qo,autoEvaluateConfig:ns,aiLoading:ls,aiEvalStage:Gs,aiEvalElapsed:Ys,aiEvalError:Qs,showBatchEvaluate:is,batchStocks:Js,batchRunning:$s,batchTotal:Xs,batchCompleted:Zs,batchCurrent:en,batchStatuses:tn,batchResults:an,batchEvalErrors:sn,aiConfig:nn,selectedPreset:Jo,providerInfo:$o,aiPresets:Fp,applyPreset:Xo,onProviderChange:Zo,fetchPoolSignals:er,cancelPoolSignals:ln,loadLastEvaluation:os}=qo,tr=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:st,selectedDate:Gt,stockDetail:G,stockDetailTab:xt,stockDetailVisible:Nt,stockDetailLoading:we,stockKlineLoaded:ce,viewCache:Tn,animateScoreEntrance:es,loadStockKline:pt,refreshStockScore:Za,disposeStockKline:bs,aiHistory:Ns,aiLoading:ls,aiEvalStage:Gs,aiEvalElapsed:Ys,aiEvalError:Qs,aiResult:ss,loadLastEvaluation:os,autoEvaluateConfig:ns,autoEvaluateScope:Ks,batchStocks:Js,batchRunning:$s,batchTotal:Xs,batchCompleted:Zs,batchCurrent:en,batchStatuses:tn,batchResults:an,batchEvalErrors:sn,expandedDates:js,expandedStocks:Vs,savingConfig:Bs,selectedHistoryIds:Os,selectedWatchlistCodes:Fs,showAutoEvaluateSettings:Hs,showBatchEvaluate:is}):{},{quickEvalStock:ar,evalStrategy:sr,watchlistSort:nr,watchlist:lr,watchlistCodes:ir,sortedWatchlist:or,getWatchlistScore:rr,getLatestScore:Hp,addSearchResult:cr,evaluatedCodes:dr,klineLoadedCodes:ur,markKlineLoaded:on,watchlistSearch:vr,watchlistResults:mr,watchlistSearching:fr,dataRefreshConfig:pr,dataRefreshReloading:gr,dataRefreshSaving:hr,aiHistoryLoading:yr,aiHistoryError:br,aiHistoryTotal:wr,aiHistoryLoadingMore:kr,hasMoreAiHistory:_r,loadMoreAiHistory:xr,watchlistLoading:Sr,doAiEvaluate:Cr,loadAiHistory:ja,deleteSingleHistory:qr,toggleSelectHistory:Er,clearSelection:Mr,clearWatchlistSelection:Tr,batchReevaluateHistory:Pr,batchAddToWatchlist:Dr,batchRemoveWatchlist:Rr,toggleSelectWatchlist:zr,selectAllHistory:Ar,selectAllWatchlist:Lr,deleteSelectedHistory:Ir,loadAutoEvaluateConfig:rn,saveAutoEvaluateConfig:Nr,loadWatchlist:cn,addToWatchlist:Or,removeFromWatchlist:jr,clearWatchlist:Vr,toggleWatchlist:Fr,showStockKline:Hr,preloadingKline:Br,preloadWatchlistKline:dn,watchlistEvaluate:Kr,batchEvaluateWatchlist:Wr,batchEvaluateSelected:Ur,searchStockForWatchlist:Gr,loadDataRefreshConfig:un,saveDataRefreshConfig:Yr,triggerDataReload:Qr,triggerDataPull:Jr,dataPullRunning:$r,groupedByDate:Xr,aiHistoryByStock:Zr,groupedByMonth:ec,aiHistoryStockCount:tc,scoreDistribution:ac,quickEvaluate:sc,toggleDateExpand:nc,toggleSelectDate:lc,toggleSelectMonth:ic,toggleStockExpand:oc,toggleSelectStock:rc,registerTrendChart:cc,viewAiResult:dc,doBatchEvaluate:uc,realtimeQuotes:vc,realtimeDegraded:mc,realtimeWsState:fc,connectRealtimeQuotes:pc,disconnectRealtimeQuotes:gc,quoteWarningFor:hc,realtimeQuoteColor:yc,realtimePriceText:bc,realtimePctText:wc,realtimeRatioText:kc,REALTIME_DEGRADED_TEXT:_c,REALTIME_FALLBACK_TEXT:xc}=tr,Sc=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:Ie}):{},{btStrategyOptions:Cc,btSelectedStrategies:qc,toggleBtStrategy:Ec,btDateRange:Mc,btCapital:Tc,btCommissionRate:Pc,btIncludeBenchmark:Dc,btRunning:Rc,btResult:zc,btError:Ac,btMetrics:Lc,btAnnualReturns:Ic,btTrades:Nc,btStrategyMetricsRows:Oc,btDrawdownRegion:jc,runBacktestWorkbench:Vc,exportBacktestCSV:Fc,registerBacktestNavChart:Hc,btFmtNum:Bc}=Sc,Kc=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:x,aiConfig:nn,aiLoading:ls,feishuConfig:ks,currentTheme:je,changeTheme:ka,autoEvaluateConfig:ns,currentUser:st,strategyFilter:sa,applyTheme:ma,dashboardData:ft,lastRefreshTime:Is,saveAiModels:jo}):{},{configSaving:Wc,globalConfigDirty:Uc,lastSavedTime:Gc,feishuConfigOriginal:Bp,aiConfigOriginal:Kp,tushareConfigOriginal:Wp,tushareConfig:Yc,tushareStatus:Qc,datasourceConfig:Jc,datasourceStatus:$c,syncingData:Xc,stockCount:Zc,tradeDateCount:ed,aiStatus:td,appVersion:vn,showImportDialog:ad,rateLimitConfig:sd,rateLimitDirty:nd,rateLimitSaving:ld,loadRateLimit:rs,saveRateLimit:id,saveAiConfig:od,testAiApi:rd,exportConfig:cd,importConfig:dd,saveAllConfig:ud,resetAllConfig:vd,testTushareConnection:md,checkTushareConnection:Ua,syncStockData:fd,loadTushareConfig:mn,loadDatasourceConfig:fn,saveDatasourceConfig:pd,testDatasource:gd,toggleDatasourceKeyReveal:hd,toggleDatasourceEdit:yd,loadFeishuConfig:cs,loadAiConfig:Ga,loadUserConfig:pn,loadSystemStatus:ds,loadDashboardData:us}=Kc,bd=window.__quantAppLogic.auth.create({currentUser:st,loadUserConfig:pn,loadDates:gs,loadDashboardData:us,loadDashboardCached:Fa,loadHealthMetrics:Xe,loadConsensusData:Ra,applyTheme:ma,maybeShowTour:hl,loadAiVendors:Wa,loadGroupConfig:Fe,groupsConfig:te}),{loginForm:gn,logining:hn,guestLogining:yn,showChangePassword:wd,changePasswordForm:kd,changingPassword:_d,showSetupWizard:bn,setupForm:xd,setupStep:Sd,checkSetupWizard:Cd,completeSetupWizard:qd,resetSetupWizard:Ed,handleLogin:Md,handleGuestLogin:Td,handleLogout:Pd,doChangePassword:Dd}=bd;window.__quantAppLogic.watch.register({strategyFilter:sa,currentView:at,statusFilter:bt,currentPage:He,currentSubPage:A,menus:Le,currentUser:st,strategyFilterCounts:na,lazyTick:Ee,dates:Oa,selectedDate:Gt,consensus:_a,loadConsensusData:Ra,fetchMerrillClock:L,fetchMarketData:Xa,loadWatchlist:cn,loadAiHistory:ja,preloadWatchlistKline:dn,loadChatHistory:Ls,loadSystemStatus:ds,checkTushareConnection:Ua,loadSysMonitor:Ss,loadAnalytics:Cs,loadHealthDetail:qs,loadHealthMetrics:Xe,loadAiUsage:ts,loadFactCheck:Es,loadAutoEvaluateConfig:rn,loadDatasourceConfig:fn,loadFeishuConfig:cs,loadAiConfig:Ga,loadAiVendors:Wa,loadRateLimit:rs,loadDataRefreshConfig:un,loadBackups:Ms,loadAllGroups:as,loadUsers:Ka,stockDetailTab:xt,stockDetailVisible:Nt,stockKlineLoaded:ce,loadStockKline:pt,currentKlinePeriod:W,showMerrillDetail:w,indexDetailVisible:Ja,restoreDialogFocus:M});const Rd=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:zs,applyTheme:ma,menus:Le,currentPage:He,currentSubPage:A,currentView:at,currentKlinePeriod:W,selectedDate:Gt,dates:Oa,loadDates:gs,loadConsensusData:Ra,loadDashboardCached:Fa,appVersion:vn,themes:xe,fetchMarketData:Xa,fetchMerrillStages:$,fetchMerrillClock:L,loadMerrillTimeline:Q,showTimelineStage:oe,merrillTimeline:fe,timelineLoading:Ce,loadAiConfig:Ga,loadAiVendors:Wa,loadAiCatalog:Ws,currentUser:st,loadUserConfig:pn,loadAutoEvaluateConfig:rn,loadGroupConfig:Fe,loadUsers:Ka,loadAllGroups:as,loadAiHistory:ja}),{runOnMounted:zd}=Rd;window.__quantGoPage=async(V,ie)=>{try{const he=window.__lazyLoaders&&window.__lazyLoaders[V];he&&await he()}catch(he){console.warn("[lazy] 页面组件加载失败",V,he)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(he=>{he&&he.name&&!he.__quantRegistered&&(window.__quantApp.component(he.name,he),he.__quantRegistered=!0)}),Ee&&Ee.value++,He.value=V,ie&&(A.value=ie)};let za;function wn(){const V=window.QuantSessionRestore;V&&V.save({page:He.value,sub:A.value||""})}c(He,async V=>{var ie;l("light"),wn();try{const he=ve.find(function(Ne){return Ne.key===V});document.title=(he?he.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",V),V!=="calendar"&&typeof ln=="function"&&ln();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:V})}).catch(()=>{})}catch(he){console.warn("pageView track failed:",he)}if(za&&(clearInterval(za),za=null),V==="strategies")await Fa(),za=setInterval(()=>{Fa().catch(()=>{})},5*60*1e3);else if(V==="calendar")Gt.value&&await Ra();else if(V==="ai")xs(),ts(),await ja();else if(V==="system"){if(!Gt.value){const Ne=await(await fetch("/api/dashboard")).json(),Ge=Ne.data||Ne;Ge.latest_date&&(Gt.value=Ge.latest_date)}if(Gt.value){const he=["day","week","month","year"];for(const Ne of he)try{const Ht=await(await fetch(`/api/view/${Ne}/${Gt.value}?status=all`)).json();na.value[Ne]=Ht.stocks||[]}catch(Ge){console.warn("loadConsensusData view load failed:",Ge)}(!_a.value||_a.value.length===0)&&(_a.value=na.value.day||[])}((ie=st.value)==null?void 0:ie.role)==="admin"&&(await Ka(),await cs(),await mn(),await ds(),await Ga(),await rs(),Ua(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(Ua,36e5)))}}),m(async()=>{await zd()}),ae(),Q(),t(()=>{za&&clearInterval(za),window.removeEventListener("keydown",zs),window.removeEventListener("keydown",K)});function Ad(V,ie=2){return V==null||V===""||isNaN(Number(V))?"--":Number(V).toFixed(ie)}const kn={currentPage:He,pageComp:Ae,currentSubPage:A,sidebarCollapsed:ke,menus:Le,navMode:mt,setNavMode:Pt,tabGroups:$e,openTab:wa,closeTab:la,activateTab:ia,fmtNum:Ad,sanitizeHtml:_,keyClick:k,isOnline:u,currentUser:st,allMenuDefs:ve,t:q,locale:o,changeLanguage:b,currentPageName:le,subPageNames:aa,searchQuery:Rl,searchStocks:zl,onSearchSelect:Al,selectedDate:Gt,onDateChange:Pl,disabledDate:Tl,refreshCalendarData:hs,exportCSV:ys,viewNote:Pn,loading:fs,lastLoadTime:ps,resetSetupWizard:Ed,showChangePassword:wd,themes:xe,currentTheme:je,changeTheme:ka,changeThemeMode:Na,changeThemeHue:Bt,handleLogout:Pd,themeHues:ze,themeHueNames:dt,themeHue:et,themeMode:_t,hueColor:yt,hueName:Sa,density:Lt,changeDensity:Pa,marketData:Rn,merrillData:E,merrillTimeline:fe,timelineLoading:Ce,merrillStagesConfig:O,fetchMerrillStages:$,merrillSnapshots:Te,merrillSnapshotsTotal:ue,healthMetrics:Je,feishuConfig:ks,feishuTestStatus:Wn,feishuTestMessage:Un,shortcutHelpVisible:Ds,shortcutHelpItems:_e,commandPaletteVisible:Rs,tourVisible:fl,tourStep:pl,tourSteps:gl,skipTour:yl,finishTour:bl,backups:ol,backupCreating:rl,loadBackups:Ms,createBackup:cl,restoreBackup:dl,reportExporting:ul,reportExportMsg:vl,exportReport:ml,sysMonitor:Xn,analyticsRank:Zn,analyticsDays:el,loadSysMonitor:Ss,loadAnalytics:Cs,healthDetail:tl,loadHealthDetail:qs,reviewTriggering:al,triggerMarketReview:sl,factCheck:nl,factCheckRunning:ll,loadFactCheck:Es,triggerFactCheck:il,strategyRecommendations:Jn,aiUsage:$n,loadStrategyRecommendations:xs,loadAiUsage:ts,aiFabHidden:Qn,openAiFab:_s,feedbackText:wl,feedbackSubmitting:kl,submitFeedback:_l,backtestStrategies:Ie,backtestStrategy:Ye,backtestRange:Qe,backtestCapital:We,backtestRunning:ot,backtestResult:gt,runBacktest:ea,btStrategyOptions:Cc,btSelectedStrategies:qc,toggleBtStrategy:Ec,btDateRange:Mc,btCapital:Tc,btCommissionRate:Pc,btIncludeBenchmark:Dc,btRunning:Rc,btResult:zc,btError:Ac,btMetrics:Lc,btAnnualReturns:Ic,btTrades:Nc,btStrategyMetricsRows:Oc,btDrawdownRegion:jc,runBacktestWorkbench:Vc,exportBacktestCSV:Fc,registerBacktestNavChart:Hc,btFmtNum:Bc,fetchMarketData:Xa,fetchMerrillClock:L,testFeishuWebhook:Gn,saveFeishuConfig:Yn,merrillClockConfig:T,merrillClockLastUpdated:B,merrillReevalResult:F,merrillReevalLoading:U,saveMerrillClockConfig:de,doMerrillReevaluate:De,dataRefreshConfig:pr,dataRefreshReloading:gr,dataRefreshSaving:hr,loadDataRefreshConfig:un,saveDataRefreshConfig:Yr,triggerDataReload:Qr,triggerDataPull:Jr,dataPullRunning:$r,indexDetailVisible:Ja,indexDetail:$a,indexAiResult:zn,indexAiLoading:An,loadCachedIndexEval:In,showIndexDetail:Ln,doIndexAiEvaluate:Nn,klinePeriods:Da,currentKlinePeriod:W,klineLoading:pe,indexKlineLoading:se,stockKlineLoaded:ce,indexKlineLoaded:zt,klineDegradeNote:R,klineShowMinutes:Zt,toggleKlineShowMinutes:Ca,loadStockKline:pt,switchKlinePeriod:At,loadIndexKline:Jt,switchIndexKlinePeriod:fa,zoomKlineRange:On,MA_LINES:Re,klineMaVisible:Pe,toggleKlineMa:ra,scoreAnimating:jn,scoreDelta:Vn,scorePulse:Fn,refreshStockScore:Za,animateScoreEntrance:es,showMerrillDetail:w,merrillDetailData:D,showStageDetail:Y,getCharLabel:v,getAssetName:j,getRankColor:ne,levelColor:jl,levelBg:Vl,timelineStages:s,getStageAngle:X,getCycleProgress:N,getCurrentStageMonths:C,getStageTotalMonths:f,isStageCompleted:P,stages:J,indicatorList:ee,dimensionScoreList:H,confidenceColor:z,views:Rt,currentView:at,statusFilter:bt,loginForm:gn,logining:hn,guestLogining:yn,dashboardData:ft,loadingView:Mn,dates:Oa,consensus:_a,searchKeyword:oa,stockDetailVisible:Nt,stockDetailTab:xt,stockDetail:G,stockDetailLoading:we,detailDisplayMode:Ze,setDetailDisplayMode:Tt,isNarrow:Ke,detailSplitEnabled:St,splitWidth:nt,setSplitWidth:Wt,SPLIT_DEFAULT_PCT:Ft,aiLoading:ls,aiEvalStage:Gs,aiEvalElapsed:Ys,aiEvalError:Qs,showBatchEvaluate:is,batchStocks:Js,batchRunning:$s,batchTotal:Xs,batchCompleted:Zs,batchCurrent:en,batchStatuses:tn,batchResults:an,batchEvalErrors:sn,aiConfig:nn,userList:bi,showAddUser:Pi,editingUser:Di,userForm:Ri,savingUser:zi,userSearch:wi,filteredUsers:Ci,groupFilter:ki,userPageTab:_i,expandedGroups:xi,addMemberGroupMap:Si,toggleGroupExpand:qi,removeMemberFromGroupInline:Ei,addMemberToGroupInline:Mi,changeUserGroup:Ti,statusCounts:po,stockPool:go,poolSignals:Do,aiResult:ss,aiHistory:Ns,groupedByDate:Xr,groupedByMonth:ec,expandedDates:js,expandedMonths:Po,aiHistoryByStock:Zr,aiHistoryStockCount:tc,expandedStocks:Vs,aiHistoryView:zo,aiHistoryLoading:yr,aiHistoryError:br,aiHistoryTotal:wr,aiHistoryLoadingMore:kr,hasMoreAiHistory:_r,loadMoreAiHistory:xr,watchlistLoading:Sr,scoreDistribution:ac,quickEvalStock:ar,evalStrategy:sr,checklistItems:To,evalHistoryComparison:Mo,quickEvaluate:sc,selectedHistoryIds:Os,showAutoEvaluateSettings:Hs,savingConfig:Bs,autoEvaluateConfig:ns,autoEvaluateScope:Ks,strategyList:ua,toggleDateExpand:nc,toggleMonthExpand:Ro,toggleSelectDate:lc,toggleSelectMonth:ic,toggleSelectStock:rc,toggleStockExpand:oc,registerTrendChart:cc,selectedWatchlistCodes:Fs,clearWatchlistSelection:Tr,toggleSelectWatchlist:zr,selectAllHistory:Ar,selectAllWatchlist:Lr,batchRemoveWatchlist:Rr,batchEvaluateSelected:Ur,batchReevaluateHistory:Pr,batchAddToWatchlist:Dr,viewUnit:Sl,datePickerType:Cl,dateFormat:ql,canNavPrev:El,canNavNext:Ml,handleLogin:Md,handleGuestLogin:Td,switchView:Ts,navigateDate:Ps,navigateTo:qe,loadDashboardData:us,loadConsensusData:Ra,showStockDetail:As,externalStockActive:Il,doAiEvaluate:Cr,doBatchEvaluate:uc,loadAiHistory:ja,loadLastEvaluation:os,lastEvalTime:Eo,viewAiResult:dc,saveAiConfig:od,testAiApi:rd,exportConfig:cd,importConfig:dd,configSaving:Wc,configChanged:x,watchlist:lr,watchlistCodes:ir,watchlistSearch:vr,watchlistResults:mr,watchlistSearching:fr,watchlistSort:nr,sortedWatchlist:or,getWatchlistScore:rr,addSearchResult:cr,evaluatedCodes:dr,klineLoadedCodes:ur,markKlineLoaded:on,loadWatchlist:cn,addToWatchlist:Or,removeFromWatchlist:jr,clearWatchlist:Vr,searchStockForWatchlist:Gr,toggleWatchlist:Fr,batchEvaluateWatchlist:Wr,watchlistEvaluate:Kr,showStockKline:Hr,preloadWatchlistKline:dn,preloadingKline:Br,realtimeQuotes:vc,realtimeDegraded:mc,realtimeWsState:fc,connectRealtimeQuotes:pc,disconnectRealtimeQuotes:gc,quoteWarningFor:hc,realtimeQuoteColor:yc,realtimePriceText:bc,realtimePctText:wc,realtimeRatioText:kc,REALTIME_DEGRADED_TEXT:_c,REALTIME_FALLBACK_TEXT:xc,toggleSelectHistory:Er,clearSelection:Mr,deleteSingleHistory:qr,deleteSelectedHistory:Ir,saveAutoEvaluateConfig:Nr,editUser:ro,saveUser:co,deleteUser:uo,loadUsers:Ka,allGroups:io,loadAllGroups:as,getGroupName:oo,toggleUserEnabled:vo,resetUserPassword:mo,selectedPreset:Jo,applyPreset:Xo,onProviderChange:Zo,providerInfo:$o,globalConfigDirty:Uc,lastSavedTime:Gc,tushareConfig:Yc,tushareStatus:Qc,syncingData:Xc,stockCount:Zc,tradeDateCount:ed,aiStatus:td,appVersion:vn,showImportDialog:ad,rateLimitConfig:sd,rateLimitDirty:nd,rateLimitSaving:ld,loadRateLimit:rs,saveRateLimit:id,saveAllConfig:ud,resetAllConfig:vd,testTushareConnection:md,syncStockData:fd,loadTushareConfig:mn,loadFeishuConfig:cs,loadSystemStatus:ds,loadAiConfig:Ga,aiVendors:Ao,aiCatalog:Lo,aiModelsError:Io,testingAllModels:No,savingAiModels:Oo,loadAiVendors:Wa,loadAiCatalog:Ws,saveAiVendors:Us,saveAiModels:Us,testVendorModel:Vo,testAllVendorModels:Fo,fetchVendorModels:Ho,addVendorFromCatalog:Bo,addCustomVendor:Ko,addVendorModel:Wo,removeVendorModel:Uo,removeVendor:Go,toggleVendorKeyReveal:Yo,toggleVendorEdit:Qo,checkTushareConnection:Ua,datasourceConfig:Jc,datasourceStatus:$c,loadDatasourceConfig:fn,saveDatasourceConfig:pd,testDatasource:gd,toggleDatasourceKeyReveal:hd,toggleDatasourceEdit:yd,strategyFilter:sa,strategyFilterOptions:va,strategyFilterCounts:na,strategyPreviewCount:yo,saveStrategyFilter:bo,filteredConsensusRank:wo,currentPoolSize:ko,filteredStrategyCounts:_o,strategyDistribution:ho,expandedStrategies:La,poolChangeBadge:xo,timeBarPercent:So,navigateToStrategyFilter:Co,showUserMenu:Ue,toggleSidebar:re,groupsConfig:te,loadGroupConfig:Fe,editingGroup:Ai,groupEditForm:Ni,showAddGroup:ji,addGroupForm:Vi,savingGroup:Fi,menuConfigDialog:Li,memberDialog:Ii,groupMembers:Hi,addMemberUsername:Bi,selectedMemberGroup:Ki,subPageSectionExpanded:Wi,toggleSubPageSection:Ui,getGroupMemberCount:Gi,getMenuEnabledCount:Yi,groupCount:Qi,openMemberManager:Ji,loadGroupMembers:$i,addMemberToGroup:Xi,removeMemberFromGroup:Zi,availableUsersForGroup:eo,subPageCache:Oi,onParentToggle:to,openMenuConfig:ao,saveMenuConfig:so,deleteGroupConfig:no,createGroup:lo,changePasswordForm:kd,changingPassword:_d,doChangePassword:Dd,showSetupWizard:bn,setupForm:xd,setupStep:Sd,checkSetupWizard:Cd,completeSetupWizard:qd,chatSessions:Hl,chatHistoryView:Bl,selectedChatIds:Kl,expandedChatDates:Wl,expandedChatMonths:Ul,expandedChatStocks:Gl,chatHistoryLoading:Yl,chatHistoryError:Ql,allChatSessionsFlat:Jl,chatGroupedByDate:$l,chatGroupedByMonth:Xl,chatGroupedByStock:Zl,toggleSelectChat:ei,toggleSelectChatDate:ti,toggleSelectChatMonth:ai,toggleSelectChatStock:si,toggleChatDateExpand:ni,toggleChatMonthExpand:li,toggleChatStockExpand:ii,selectAllChatSessions:oi,deleteSelectedChatSessions:ri,viewChatSession:ci,loadChatHistory:Ls,deleteChatSession:di,renderMarkdown:ui,stockChatInput:vi,stockChatMessages:mi,stockChatLoading:fi,stockChatError:pi,askStockSend:gi,askStockQuick:hi,onTouchStart:Hn,onTouchEnd:Bn,hapticFeedback:l};let tt=null;return window.QuantStateRegistry&&window.QuantStateRegistry.createStateRegistry&&(tt=window.QuantStateRegistry.createStateRegistry(),tt.defineDomain("theme",["currentTheme","themeMode","themeHue","density","currentKlinePeriod"]),tt.defineDomain("auth",["currentUser","loginForm","logining","guestLogining","showSetupWizard"]),tt.defineDomain("prefs",["navMode","detailDisplayMode","splitWidth","sidebarCollapsed","klineShowMinutes"]),tt.defineDomain("ui",["currentPage","currentSubPage","currentView","showUserMenu","searchKeyword","shortcutHelpVisible","commandPaletteVisible"]),tt.defineDomain("page",["loading","dates","selectedDate","consensus","dashboardData","lastLoadTime"]),tt.attach("theme","currentTheme",je),tt.attach("theme","themeMode",_t),tt.attach("theme","themeHue",et),tt.attach("theme","density",Lt),tt.attach("theme","currentKlinePeriod",W),tt.attach("auth","currentUser",st),tt.attach("auth","loginForm",gn),tt.attach("auth","logining",hn),tt.attach("auth","guestLogining",yn),tt.attach("auth","showSetupWizard",bn),tt.attach("prefs","navMode",mt),tt.attach("prefs","detailDisplayMode",Ze),tt.attach("prefs","splitWidth",nt),tt.attach("prefs","sidebarCollapsed",ke),tt.attach("prefs","klineShowMinutes",Zt),tt.attach("ui","currentPage",He),tt.attach("ui","currentSubPage",A),tt.attach("ui","currentView",at),tt.attach("ui","showUserMenu",Ue),tt.attach("ui","searchKeyword",oa),tt.attach("ui","shortcutHelpVisible",Ds),tt.attach("ui","commandPaletteVisible",Rs),tt.attach("page","loading",fs),tt.attach("page","dates",Oa),tt.attach("page","selectedDate",Gt),tt.attach("page","consensus",_a),tt.attach("page","dashboardData",ft),tt.attach("page","lastLoadTime",ps),kn.stateRegistry=tt),kn}})();Ma.name="qc-icon";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=vm;window.__quantComponents.Header=mf;window.__quantComponents.SubNav=qf;window.__quantComponents.MobileNav=Wf;window.__quantComponents.StockList=Cp;window.__quantComponents.DetailSplit=Tp;window.__quantComponents.TopTabs=Op;window.__quantComponents.AppIcon=Ma;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default jp();
