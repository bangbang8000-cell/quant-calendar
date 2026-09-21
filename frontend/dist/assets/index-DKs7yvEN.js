var Dd=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports);import{aV as Pd,L as ve,O as fa,Z as Rd,au as ea,M as be,P as qe,aW as zd,a0 as He,_ as Be,F as vt,al as Tt,S as dt,a1 as mt,X as pa,ai as Ft,q as Da,o as Ka,a8 as rs,r as Nt,e as lt,av as Ad,Y as La,$ as xa,R as Ld,aC as ma,T as Id,Q as da,p as Nd,n as Od}from"./vendor-vue-DDF9zi1T.js";import{e as jd,E as Vd,a as Fd,b as Hd,c as Bd,z as Kd}from"./vendor-ep-VOop1zGa.js";import{C as Wd,a as Ud,W as Gd,I as Yd,S as Jd,B as Qd,F as $d,b as Xd,c as Zd,d as eu,e as tu,f as au,P as su,g as nu,h as iu,i as lu,T as ou,j as ru,L as cu,k as du,G as uu,U as vu,l as mu,m as pu,n as fu,D as gu,o as hu,p as yu,M as bu,q as wu,R as ku,r as _u,s as xu,K as Su,t as Cu,u as qu,v as Eu,w as Mu,x as Tu,y as Du,z as Pu,A as Ru,E as zu,H as Au,O as Lu,J as Iu,N as Nu,Q as Ou,V as ju,X as Vu,Y as Fu,Z as Hu,_ as Bu,$ as Ku,a0 as Wu,a1 as Uu,a2 as Gu,a3 as Yu,a4 as Ju,a5 as Qu,a6 as $u,a7 as Xu,a8 as Zu,a9 as ev,aa as tv,ab as av,ac as sv,ad as nv,ae as iv,af as lv,ag as ov,ah as rv,ai as cv,aj as dv,ak as uv,al as vv,am as mv,an as pv,ao as fv,ap as gv,aq as hv,ar as yv,as as bv,at as wv,au as kv,av as _v,aw as xv,ax as Sv,ay as Cv,az as qv,aA as Ev,aB as Mv,aC as Tv,aD as Dv,aE as Pv,aF as Rv,aG as zv,aH as Av,aI as Lv,aJ as Iv,aK as Nv,aL as Ov,aM as jv,aN as Vv,aO as Fv,aP as Hv,aQ as Bv}from"./vendor-lucide-DidEUx9K.js";var Rf=Dd((Kf,Oe)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))e(v);new MutationObserver(v=>{for(const f of v)if(f.type==="childList")for(const A of f.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&e(A)}).observe(document,{childList:!0,subtree:!0});function y(v){const f={};return v.integrity&&(f.integrity=v.integrity),v.referrerPolicy&&(f.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?f.credentials="include":v.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function e(v){if(v.ep)return;v.ep=!0;const f=y(v);fetch(v.href,f)}})();window.Vue=Pd;const ga=jd||{};window.ElementPlus=ga;ga.ElMessage=ga.ElMessage||Vd;ga.ElMessageBox=ga.ElMessageBox||Fd;ga.ElNotification=ga.ElNotification||Hd;ga.ElLoading=ga.ElLoading||Bd;window.ElementPlusLocaleZhCn={default:Kd};(function(){const a=[45,220,0,140,270,320],t={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},y={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function e(s,w,l){return"hsl("+s+", "+w+"%, "+l+"%)"}function v(s,w,l){w=w/100,l=l/100;const _=function(Z){return(Z+s/30)%12},h=w*Math.min(l,1-l),k=function(Z){return l-h*Math.max(-1,Math.min(_(Z)-3,Math.min(9-_(Z),1)))};return Math.round(255*k(0))+", "+Math.round(255*k(8))+", "+Math.round(255*k(4))}const f=5;function A(s,w,l){return v(s,w,l).split(",").map(function(_){return parseInt(_,10)})}function p(s){const w=function(l){return l=l/255,l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)};return .2126*w(s[0])+.7152*w(s[1])+.0722*w(s[2])}function d(s,w){const l=p(s),_=p(w),h=Math.max(l,_),k=Math.min(l,_);return(h+.05)/(k+.05)}function x(s,w,l){for(var _=8,h=92,k=0;k<26;k++){var Z=(_+h)/2;p(A(s,w,Z))<l?_=Z:h=Z}return Math.round(h*10)/10}function o(s,w,l,_,h){let k=38,Z=76;for(let L=0;L<24;L++){const b=(k+Z)/2;d(A(s,_,b),A(s,w,l))>=h?Z=b:k=b}return Math.round(Z*10)/10}function M(s,w){var l={};return w==="light"?(l["--qc-neutral-50"]=e(s,18,98),l["--qc-neutral-100"]=e(s,16,95),l["--qc-neutral-200"]=e(s,14,90),l["--qc-neutral-300"]=e(s,12,83),l["--qc-neutral-400"]=e(s,10,68),l["--qc-neutral-500"]=e(s,10,53),l["--qc-neutral-600"]=e(s,10,40),l["--qc-neutral-700"]=e(s,10,30),l["--qc-neutral-800"]=e(s,10,20),l["--qc-neutral-900"]=e(s,10,12),l["--qc-background"]=e(s,18,98),l["--qc-muted"]=e(s,16,95),l["--qc-border"]=e(s,12,72),l["--qc-input"]=e(s,12,72),l["--chart-axis"]=e(s,12,55),l["--chart-split"]=e(s,10,88),l["--qc-foreground"]=e(s,10,12),l["--qc-muted-foreground"]=e(s,9,38),l["--qc-nav-item-default"]=e(s,9,38),l["--qc-nav-item-hover"]=e(s,10,12),l["--qc-nav-group-label"]=e(s,9,40),l["--qc-nav-bg"]="#ffffff",l["--bg-page"]=e(s,20,97),l["--bg-stripe"]=e(s,20,97),l["--bg-card-header"]=e(s,24,96),l["--card-gradient-header"]="linear-gradient(135deg, "+e(s,24,96)+" 0%, #ffffff 100%)",l["--bg-dialog-header"]="linear-gradient(135deg, "+e(s,24,96)+" 0%, #ffffff 100%)",l["--bg-hover"]=e(s,26,94),l["--bg-tertiary"]=e(s,14,93),l["--badge-gold-bg"]=e(s,26,96),l["--gold-bg"]=e(s,20,97),l["--border-light"]=e(s,22,89),l["--border-base"]=e(s,24,79),l["--border-color"]=e(s,14,88),l["--text-primary"]=e(s,12,12),l["--text-secondary"]=e(s,12,32),l["--text-tertiary"]=e(s,14,40),l["--text-disabled"]=e(s,9,58),l["--qc-card"]="#ffffff",l["--qc-popover"]="#ffffff",l["--qc-card-foreground"]=e(s,10,12),l["--qc-popover-foreground"]=e(s,10,12),l["--qc-nav-border"]=e(s,12,72),l["--qc-nav-item-hover-bg"]=e(s,16,95),l["--qc-overlay"]="rgba(31, 29, 26, 0.5)",l["--bg-card"]="#ffffff",l["--bg-sidebar"]="#ffffff",l["--surface"]="#ffffff",l["--border-heavy"]=e(s,22,72),l["--surface-canvas"]=e(s,18,98),l["--surface-card"]="#ffffff",l["--surface-raised"]="#ffffff",l["--surface-sunken"]=e(s,16,96),l["--surface-input"]="#ffffff",l["--surface-hover"]=e(s,26,94),l["--border-strong"]=e(s,22,72),l["--scrollbar-thumb"]="rgba("+v(s,12,72)+", 0.5)",l["--bg-page-rgb"]=v(s,20,97)):(l["--qc-background"]=e(s,10,8),l["--qc-card"]=e(s,11,11),l["--qc-popover"]=e(s,11,11),l["--qc-muted"]=e(s,12,14),l["--qc-border"]=e(s,14,30),l["--qc-input"]=e(s,14,30),l["--chart-axis"]=e(s,16,52),l["--chart-split"]=e(s,14,26),l["--qc-nav-bg"]=e(s,10,9),l["--qc-nav-border"]=e(s,13,22),l["--qc-nav-item-hover-bg"]=e(s,12,14),l["--bg-page"]=e(s,10,8),l["--bg-card"]=e(s,11,11),l["--bg-card-header"]=e(s,12,14),l["--bg-stripe"]=e(s,10,9),l["--bg-hover"]=e(s,12,14),l["--bg-tertiary"]=e(s,12,14),l["--bg-sidebar"]=e(s,10,8),l["--border-light"]=e(s,13,18),l["--border-base"]=e(s,14,26),l["--border-heavy"]=e(s,16,38),l["--border-color"]=e(s,13,22),l["--surface"]=e(s,11,11),l["--surface-canvas"]=e(s,10,8),l["--surface-card"]=e(s,11,11),l["--surface-raised"]=e(s,12,14),l["--surface-sunken"]=e(s,12,9),l["--surface-input"]=e(s,12,9),l["--surface-hover"]=e(s,12,15),l["--border-strong"]=e(s,16,42),l["--scrollbar-thumb"]="rgba("+v(s,16,52)+", 0.5)",l["--bg-page-rgb"]=v(s,10,8),l["--qc-overlay"]="rgba(0, 0, 0, 0.6)"),l}const q=4.6;var R=[255,255,255];function E(s){return v(s,10,8).split(",").map(function(w){return parseInt(w,10)})}function D(s,w,l,_,h,k,Z){for(var L=Z||q,b=_,r=h,S=0;S<24;S++){var c=(b+r)/2,O=d(A(s,w,c),l)>=L;k?O?b=c:r=c:O?r=c:b=c}return Math.round((k?b:r)*10)/10}function N(s,w,l){return v(s,w,l).split(",").map(function(_){return parseInt(_,10)})}function T(s){const w=x(s,75,.18),l=x(s,75,.26),_=x(s,70,.36),h=x(s,85,.12),k=v(s,75,w),Z=D(s,68,R,14,62,!0),L=Math.max(12,Z-5),b=Math.max(10,Z-11),r=v(s,16,95).split(",").map(function(X){return parseInt(X,10)}),S=v(s,85,92).split(",").map(function(X){return parseInt(X,10)}),c=D(s,78,r,10,58,!0,4.6),O=D(s,80,S,10,58,!0,4.6),re=Math.min(32,D(s,80,R,8,60,!0,4.6));return{...M(s,"light"),"--primary-color":e(s,75,w),"--primary-rgb":k,"--color-primary":e(s,75,w),"--qc-primary":e(s,75,w),"--qc-primary-50":e(s,90,96),"--qc-primary-100":e(s,85,92),"--qc-primary-200":e(s,80,84),"--qc-primary-300":e(s,75,72),"--qc-primary-400":e(s,70,_),"--qc-primary-500":e(s,75,l),"--qc-primary-600":e(s,80,w),"--qc-primary-700":e(s,85,h),"--qc-primary-800":e(s,88,28),"--qc-primary-900":e(s,90,20),"--qc-primary-foreground":"#ffffff","--text-link":e(s,78,c),"--secondary-color":e(s,70,55),"--card-border":e(s,22,80),"--bg-selected":"rgba("+k+", 0.08)","--btn-primary-bg":e(s,80,re),"--btn-primary-border":e(s,80,re),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":e(s,82,28),"--btn-primary-hover-border":e(s,82,28),"--btn-primary-active-bg":e(s,85,24),"--btn-primary-active-border":e(s,85,24),"--btn-primary-plain-bg":"rgba("+k+", 0.08)","--btn-primary-plain-border":"rgba("+k+", 0.25)","--btn-primary-plain-color":e(s,80,c),"--btn-primary-plain-hover-bg":"rgba("+k+", 0.15)","--btn-primary-plain-hover-border":e(s,80,32),"--btn-primary-text-color":e(s,80,c),"--gradient":"linear-gradient(135deg, "+e(s,80,b)+" 0%, "+e(s,76,L)+" 50%, "+e(s,70,Z)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+e(s,76,L)+" 0%, "+e(s,85,b)+" 100%)","--primary-text":e(s,78,c),"--primary-solid":"var(--btn-primary-bg)","--primary-on-solid":"var(--btn-primary-color)","--gradient-panel":"linear-gradient(135deg, "+e(s,62,Math.min(74,o(s,45,14,58,f)+5))+" 0%, "+e(s,58,o(s,45,14,58,f))+" 100%)","--panel-fg":e(s,45,14),"--qc-nav-item-active":e(s,80,O),"--qc-nav-item-active-bg":e(s,85,92),"--qc-nav-item-active-border":e(s,75,48),"--qc-nav-badge-bg":e(s,85,92),"--qc-nav-badge-text":e(s,80,O),"--qc-ring":e(s,75,D(s,75,N(s,18,98),25,70,!0,3.2)),"--border-control":e(s,16,D(s,16,N(s,18,98),30,80,!0,3.2))}}function u(s){const w=x(s,85,.34),l=x(s,85,.46),_=v(s,85,w),h=D(s,80,E(s),30,92,!1),k=Math.min(94,h+8),Z=Math.min(96,h+16),L=N(s,55,22),b=N(s,10,9),r=_.split(",").map(function(P){return parseInt(P,10)}),S=[0,1,2].map(function(P){return Math.round(r[P]*.12+b[P]*.88)}),c=D(s,85,S,45,96,!1,4.6),O=D(s,85,L,45,96,!1,4.6),re=Math.min(94,D(s,92,L,45,96,!1,4.6)),X=Math.min(96,re+6);return{...M(s,"dark"),"--primary-color":e(s,85,w),"--primary-rgb":_,"--color-primary":e(s,85,w),"--qc-primary":e(s,90,w),"--qc-primary-50":e(s,50,18),"--qc-primary-100":e(s,55,22),"--qc-primary-200":e(s,55,26),"--qc-primary-300":e(s,60,30),"--qc-primary-400":e(s,65,38),"--qc-primary-500":e(s,85,l),"--qc-primary-600":e(s,90,w),"--qc-primary-700":e(s,92,re),"--qc-primary-800":e(s,90,X),"--qc-primary-900":e(s,92,Math.min(98,X+8)),"--qc-primary-foreground":"#101014","--text-link":e(s,85,O),"--secondary-color":e(s,70,60),"--card-border":e(s,30,25),"--bg-selected":"rgba("+_+", 0.10)","--btn-primary-bg":e(s,85,65),"--btn-primary-border":e(s,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":e(s,80,72),"--btn-primary-hover-border":e(s,80,72),"--btn-primary-active-bg":e(s,75,80),"--btn-primary-active-border":e(s,75,80),"--btn-primary-plain-bg":"rgba("+_+", 0.08)","--btn-primary-plain-border":"rgba("+_+", 0.25)","--btn-primary-plain-color":e(s,85,O),"--btn-primary-plain-hover-bg":"rgba("+_+", 0.15)","--btn-primary-plain-hover-border":e(s,85,65),"--btn-primary-text-color":e(s,85,O),"--gradient":"linear-gradient(135deg, "+e(s,80,h)+" 0%, "+e(s,85,k)+" 50%, "+e(s,85,Z)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+e(s,85,Z)+" 0%, "+e(s,80,h)+" 100%)","--primary-text":e(s,85,O),"--primary-solid":"var(--btn-primary-bg)","--primary-on-solid":"var(--btn-primary-color)","--gradient-panel":"linear-gradient(135deg, "+e(s,60,Math.min(76,o(s,40,12,55,f)+5))+" 0%, "+e(s,55,o(s,40,12,55,f))+" 100%)","--panel-fg":e(s,40,12),"--qc-nav-item-active":e(s,85,c),"--qc-nav-item-active-bg":"rgba("+_+", 0.10)","--qc-nav-item-active-border":e(s,85,65),"--qc-nav-badge-bg":"rgba("+_+", 0.12)","--qc-nav-badge-text":e(s,85,c),"--border-control":e(s,16,D(s,16,N(s,11,11),25,70,!1,3.2)),"--qc-ring":e(s,85,65)}}var i=[],m={mode:"light",hue:45},H=!1;function j(s,w){try{var l=document.querySelector('meta[name="theme-color"]');if(!l)return;var _=w?s["--surface-canvas"]||s["--qc-background"]:s["--btn-primary-bg"]||s["--qc-primary"];_&&l.setAttribute("content",_)}catch{}}function K(){if(!(H||typeof window>"u"||!window.matchMedia)){var s=window.matchMedia("(prefers-color-scheme: dark)"),w=function(){m.mode==="system"&&W("system",m.hue)};s.addEventListener?s.addEventListener("change",w):s.addListener&&s.addListener(w),H=!0}}function Y(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}var se=-1;function F(s){return s=parseInt(s,10),isNaN(s)?45:s<0?se:Math.max(0,Math.min(359,s))}function z(s){return Object.keys(s).forEach(function(w){var l=s[w];if(typeof l=="string"){l.indexOf("hsl(")>=0&&(l=l.replace(/hsl\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)%/g,function(L,b){return"hsl("+b+", 0%"}));var _=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*[\d.]+)?\)$/.exec(l);if(_){var h=Math.round(.2126*+_[1]+.7152*+_[2]+.0722*+_[3]);l="rgba("+h+", "+h+", "+h+(_[4]||"")+")"}if(/^\d+,\s*\d+,\s*\d+$/.test(l)){var k=l.split(",").map(function(L){return parseInt(L,10)}),Z=Math.round(.2126*k[0]+.7152*k[1]+.0722*k[2]);l=Z+", "+Z+", "+Z}s[w]=l}}),s}function U(s,w){var l=N(45,0,w?22:95),_=N(45,0,w?8:98),h=N(45,0,w?11:100),k=w?D(45,0,l,45,96,!1,4.6):D(45,0,l,10,58,!0,4.6),Z=N(45,0,w?22:92),L=w?D(45,0,Z,45,96,!1,4.6):D(45,0,Z,10,58,!0,4.6),b=w?D(45,0,_,45,96,!1,3.2):D(45,0,_,25,70,!0,3.2),r=w?D(45,0,h,25,70,!1,3.2):D(45,0,_,30,80,!0,3.2),S="hsl(45, 0%, "+k+"%)";if(s["--primary-text"]=S,s["--text-link"]=S,s["--btn-primary-text-color"]=S,s["--btn-primary-plain-color"]=S,s["--qc-nav-item-active"]="hsl(45, 0%, "+L+"%)",s["--qc-nav-badge-text"]="hsl(45, 0%, "+L+"%)",s["--qc-ring"]="hsl(45, 0%, "+b+"%)",s["--border-control"]="hsl(45, 0%, "+r+"%)",w){var c=D(45,0,N(45,0,8),30,92,!1,4.6),O=Math.min(94,c+8),re=Math.min(96,c+16);s["--gradient"]="linear-gradient(135deg, hsl(45, 0%, "+c+"%) 0%, hsl(45, 0%, "+O+"%) 50%, hsl(45, 0%, "+re+"%) 100%)",s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+re+"%) 0%, hsl(45, 0%, "+c+"%) 100%)"}else{var X=D(45,0,R,14,62,!0,4.6),P=Math.max(12,X-5),G=Math.max(10,X-11);s["--gradient"]="linear-gradient(135deg, hsl(45, 0%, "+G+"%) 0%, hsl(45, 0%, "+P+"%) 50%, hsl(45, 0%, "+X+"%) 100%)",s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+P+"%) 0%, hsl(45, 0%, "+G+"%) 100%)"}var oe=o(45,0,14,0,f);return s["--gradient-panel"]="linear-gradient(135deg, hsl(45, 0%, "+Math.min(74,oe+5)+"%) 0%, hsl(45, 0%, "+oe+"%) 100%)",s["--panel-fg"]="hsl(45, 0%, 14%)",s}function W(s,w){let l=s||"light",_=w==null||w===""?null:w;if(t[s]){const S=t[s];l=S[0],_==null&&(_=S[1])}l==="system"&&(l=Y()?"dark":"light");const h=l==="dark";_=F(_??45);const k=_===se,Z=document.documentElement;Z.setAttribute("data-theme",h?"dark-pro":"gold"),Z.setAttribute("data-theme-mode",h?"dark":"light"),Z.setAttribute("data-theme-neutral",k?"true":"false");let L=h?u(k?45:_):T(k?45:_);k&&(L=U(z(L),h));for(var b=Object.keys(L),r=0;r<i.length;r++)b.indexOf(i[r])===-1&&Z.style.removeProperty(i[r]);b.forEach(function(S){Z.style.setProperty(S,L[S])}),i=b,m.mode=typeof s=="string"&&s?s:"light",m.hue=_,j(L,h);try{localStorage.setItem("quant_theme_mode",h?"dark":"light"),localStorage.setItem("quant_theme_hue",String(_))}catch{}return{mode:h?"dark":"light",hue:_}}function le(){const s=localStorage.getItem("quant_theme");if(!s||!t[s]||localStorage.getItem("quant_theme_hue")!==null)return null;const w=t[s];return{mode:w[0],hue:w[1]}}function Q(){const s=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let w=s.theme||"system",l=s.theme_hue!=null&&s.theme_hue!==""?s.theme_hue:null;const _=le();return l==null&&_&&(w=_.mode,l=_.hue),l==null&&(l=45),K(),W(w,l)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:a,LEGACY_MAP:t,legacyThemes:y,NEUTRAL_HUE:se,generateLightTokens:T,generateDarkTokens:u,migrateLegacyTheme:le,applyTheme:W,init:Q},Q()})();(function(a,t){typeof Oe=="object"&&Oe.exports?Oe.exports=t():a.QuantI18n=t()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",t=["zh-CN","en","ja","ko","zh-TW"],y={};let e=a,v=null;function f(){return v&&typeof v=="object"&&"value"in v?v.value||a:e}function A(q,R){return t.indexOf(q)===-1?!1:(y[q]=R&&typeof R=="object"?R:{},!0)}function p(q){const R=t.indexOf(q)!==-1?q:a;return e=R,v&&typeof v=="object"&&"value"in v&&(v.value=R),typeof document<"u"&&document.documentElement.setAttribute("lang",R),e}function d(){return f()}function x(q){if(q&&typeof q=="object"&&"value"in q){v=q;const R=t.indexOf(q.value)!==-1?q.value:a;q.value=R,e=R}return e}function o(q,R){const E=f(),D=y[E]||{};let N=q in D?D[q]:null;if(N==null&&E!=="en"){const T=y.en||{};N=q in T?T[q]:null}return N==null&&(N=String(q)),R&&typeof R=="object"&&Object.keys(R).forEach(function(T){N=N.replace(new RegExp("\\{"+T+"\\}","g"),String(R[T]))}),N}const M={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:t,messages:y,registerLocale:A,setLocale:p,getLocale:d,bindLocale:x,t:o};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=M),M});(function(a,t){typeof Oe=="object"&&Oe.exports?Oe.exports=t():a.QuantZhCN=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.ruleScore":"选股评分","detail.notEvaluated":"未评估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,t){typeof Oe=="object"&&Oe.exports?Oe.exports=t():a.QuantEn=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.ruleScore":"Rule score","detail.notEvaluated":"Not scored","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,t){typeof Oe=="object"&&Oe.exports?Oe.exports=t():a.Quantja=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.ruleScore":"選股スコア","detail.notEvaluated":"未評価","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",a),a});(function(a,t){typeof Oe=="object"&&Oe.exports?Oe.exports=t():a.Quantko=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.ruleScore":"종목 점수","detail.notEvaluated":"미평가","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",a),a});(function(a,t){typeof Oe=="object"&&Oe.exports?Oe.exports=t():a.QuantzhTW=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.ruleScore":"選股評分","detail.notEvaluated":"未評估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",a),a});(function(a,t){typeof Oe=="object"&&Oe.exports?Oe.exports=t():a.QuantPinyin=t()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},t=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let y=[];function e(E){const D=String(E||"");let N="";for(const T of D){const u=a[T];u?N+=u.charAt(0):/[a-zA-Z0-9]/.test(T)&&(N+=T.toLowerCase())}return N}function v(E){const D=String(E||"");let N="";for(const T of D){const u=a[T];u?N+=u:/[a-zA-Z0-9]/.test(T)&&(N+=T.toLowerCase())}return N}function f(E){return String(E||"").trim().toLowerCase()}function A(E,D){const N=(D.code||"").toLowerCase();return/^\d+$/.test(E)?N.indexOf(E)!==-1:/[\u4e00-\u9fa5]/.test(E)?(D.name||"").toLowerCase().indexOf(E)!==-1:N.indexOf(E)!==-1||(D.initials||e(D.name)).indexOf(E)!==-1||(D.pinyin||v(D.name)).indexOf(E)!==-1}function p(E){const D={},N=[],T=function(u,i,m){!u||D[u]||(D[u]=!0,N.push({code:u,name:i||u,source:m||"core",initials:e(i||u),pinyin:v(i||u)}))};return t.forEach(function(u){T(u.code,u.name,"core")}),(E||[]).forEach(function(u){T(u.code,u.name,"extra")}),N}function d(E,D){const N=f(E);if(!N||!D||!D.length)return[];const T=N.split(/[\s,，、;；]+/).filter(Boolean);return T.length?D.filter(function(u){return T.every(function(i){return A(i,u)})}).slice(0,20).map(function(u){return{code:u.code,name:u.name,source:u.source||"core"}}):[]}function x(E){Array.isArray(E)&&(y=y.concat(E))}function o(){return y.slice()}function M(){return p(y)}function q(E){return d(E,M())}const R={CHAR_PINYIN:a,CORE_STOCKS:t,toPinyinInitials:e,toPinyin:v,normalizeQuery:f,matchToken:A,buildStockIndex:p,searchStocksByQuery:d,registerExtraStocks:x,getExtraStocks:o,getStockIndex:M,searchCoreStocks:q};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=R),R});(function(a,t){typeof Oe=="object"&&Oe.exports?Oe.exports=t():a.QuantPreferences=t()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",t={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},y=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],e={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function v(i){return i=parseInt(i,10),!isNaN(i)&&i>=0&&i<=360}const f={light:"classic-white",dark:"dark-pro"};function A(){if(typeof localStorage>"u")return{};try{const i=localStorage.getItem(a);if(!i)return{};const m=JSON.parse(i);return m&&typeof m=="object"?m:{}}catch{return{}}}function p(i){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(i))}catch{}}function d(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function x(){const i=Object.assign({},t,A()),m={};return y.forEach(function(H){const j=i[H];m[H]=H==="theme_hue"?v(j)?parseInt(j,10):t[H]:e[H].indexOf(j)!==-1?j:t[H]}),m}function o(i){if(y.indexOf(i)!==-1)return x()[i]}function M(i,m){return y.indexOf(i)===-1?!1:i==="theme_hue"?v(m):e[i].indexOf(m)!==-1}function q(i,m){if(!M(i,m))return!1;const H=A();return H[i]=m,p(H),d()&&E({[i]:m}),!0}function R(i){if(!i||typeof i!="object")return!1;const m={};if(Object.keys(i).forEach(function(j){M(j,i[j])&&(m[j]=i[j])}),!Object.keys(m).length)return!1;const H=Object.assign({},A(),m);return p(H),d()&&E(m),!0}function E(i){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:i})}).catch(function(){})}catch{}}async function D(){const i=x();if(!d()||typeof fetch>"u")return i;try{const m=await fetch("/api/user_config/preferences");if(m.ok){const H=await m.json();if(H.success&&H.preferences){const j=H.preferences;y.forEach(function(K){e[K].indexOf(j[K])!==-1&&(i[K]=j[K])}),p(i)}}}catch{}return i}function N(i){const m=i||o("info_density")||"comfortable",H=e.info_density.indexOf(m)!==-1?m:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",H),H}function T(i){const m=i||o("theme")||"system";if(m==="system"){let H=!1;return typeof window<"u"&&window.matchMedia&&(H=window.matchMedia("(prefers-color-scheme: dark)").matches),H?"dark":"light"}return m==="dark"||m==="light"?m:"light"}const u={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:t,PREFERENCE_KEYS:y,PREFERENCE_VALUES:e,THEME_MODE_TO_THEME:f,getLocal:x,getPreference:o,isValidValue:M,setPreference:q,setPreferences:R,saveToBackend:E,loadPreferences:D,resolveTheme:T,applyDensity:N};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=u),u});(function(a,t){typeof Oe=="object"&&Oe.exports?Oe.exports=t():a.QuantRecent=t()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function y(){if(typeof localStorage>"u")return[];try{const x=localStorage.getItem(a);if(!x)return[];const o=JSON.parse(x);return Array.isArray(o)?o:[]}catch{return[]}}function e(x){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(x))}catch{}}function v(x,o){if(!x)return!1;let M=y().filter(function(q){return q.code!==x});return M.unshift({code:x,name:(o||"").toString().slice(0,32),ts:Date.now()}),M.length>10&&(M=M.slice(0,10)),e(M),!0}function f(){return y().slice(0,10)}function A(x){e(y().filter(function(o){return o.code!==x}))}function p(){e([])}const d={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:v,getRecentViewed:f,removeRecent:A,clearRecent:p};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=d),d});(function(){const a=typeof Vue<"u"?Vue:{},{ref:t,computed:y,watch:e,onMounted:v,nextTick:f}=a;function A(r,S={}){if(typeof r=="string"&&r.startsWith("/api/")){const c=localStorage.getItem("quant_token");if(c)return{...S,headers:{...S.headers||{},Authorization:"Bearer "+c}}}return S}async function p(r,S={}){const c=A(r,S),O={"Content-Type":"application/json",...c.headers},re=(S.method||"GET").toUpperCase(),X=re+"|"+r,P=async()=>{const G=await fetch(r,{...c,headers:O});if(G.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!G.ok){let oe="";try{const fe=await G.json();oe=fe&&fe.detail||""}catch{}throw Object.assign(new Error(oe||"请求失败（HTTP "+G.status+"）"),{status:G.status})}return await G.json()};try{const G=S.noLoading?P:()=>m(P);return re==="GET"&&!S.noDedupe?await N(X,G):await G()}catch(G){throw G.message==="登录已过期"?G:(console.error("[apiFetch] "+r+":",G.message),Object.assign(G,{_formatted:H(G,G.status)}))}}function d(){return new Date().toISOString().split("T")[0]}function x(r){return r?r.split("T")[0]:""}function o(r,S="info",c=3e3){let O=document.querySelector(".toast-container");O||(O=document.createElement("div"),O.className="toast-container",document.body.appendChild(O));const re=document.createElement("div");re.className=`toast toast-${S}`,re.textContent=r,O.appendChild(re),setTimeout(()=>{re.classList.add("leaving"),setTimeout(()=>re.remove(),300)},c)}function M(r,S=300){let c;return function(...O){clearTimeout(c),c=setTimeout(()=>r.apply(this,O),S)}}function q(r,S=300){let c=!1;return function(...O){c||(r.apply(this,O),c=!0,setTimeout(()=>{c=!1},S))}}async function R(r,S=3e3,c=""){const O=new Promise((re,X)=>setTimeout(()=>X(new Error("timeout")),S));try{return await Promise.race([r,O])}catch(re){console.warn(`[timeout] ${c||"task"} failed:`,re.message)}}const E=new Map;function D(){return E.clear(),!0}function N(r,S){if(!r||typeof S!="function")return Promise.reject(new Error("bad dedupe args"));if(E.has(r))return E.get(r);const c=Promise.resolve().then(S).finally(()=>{E.delete(r)});return E.set(r,c),c}let T=0;function u(){return T=0,!0}function i(){return T}async function m(r){T++;try{return await r()}finally{T--}}function H(r,S){if(!r)return"请求失败";if(r&&typeof r=="object"&&r.detail)return String(r.detail);if(typeof r=="string"&&r)return r;if(r&&r.message){const c=String(r.message);return/Failed to fetch|fetch failed|networkerror/i.test(c)?"网络连接失败，请检查网络后重试":c}return S?"请求失败（HTTP "+S+"）":"请求失败"}function j(r,S){if(r===S)return!0;try{return JSON.stringify(r)===JSON.stringify(S)}catch{return!1}}function K(r,S,c){const O=(r||"GET").toUpperCase();let re="";if(c)try{const X={};Object.keys(c).sort().forEach(P=>{X[P]=c[P]}),re=JSON.stringify(X)}catch{re=""}return O+"|"+S+"|"+re}class Y{constructor(){this._map=new Map,this._exp=new Map}get(S){const c=this._exp.get(S);if(c!=null){if(Date.now()>c){this.delete(S);return}return this._map.get(S)}}set(S,c,O){return this._map.set(S,c),this._exp.set(S,Date.now()+(O>0?O:-1)),c}delete(S){this._map.delete(S),this._exp.delete(S)}clear(){this._map.clear(),this._exp.clear()}has(S){return this.get(S)!==void 0}get size(){return this._map.size}}function se(r){const S=new Y,c=r!=null&&r>0?r:15e3;return{store:S,defaultTtl:c,get:O=>S.get(O),set:(O,re,X)=>S.set(O,re,X??c),delete:O=>S.delete(O),clear:()=>S.clear(),size:()=>S.size}}const F=new Set;async function z(r){const S=r&&r.cache,c=r&&r.key,O=r&&(r.fetchFn||r.fetcher),re=r&&r.ttl;if(!S||!c||typeof O!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(F.has(c))return{ok:!1,changed:!1,skipped:!0,fresh:null};F.add(c);try{const X=S.get(c);let P;try{P=await O()}catch(oe){return r.onError&&r.onError(oe),{ok:!1,changed:!1,fresh:null}}const G=X!==void 0&&!j(X,P);return S.set(c,P,re),r.apply&&r.apply(P,X),X!==void 0&&(G?r.onChanged&&r.onChanged(P,X):r.onUnchanged&&r.onUnchanged(P,X)),{ok:!0,changed:G,fresh:P}}finally{F.delete(c)}}const U=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function W(r,S={}){if(r==null)return"";const c=S&&S.allow||U,O=new Set(c.map(G=>String(G).toUpperCase()));let re;try{re=new DOMParser().parseFromString(String(r),"text/html")}catch{return String(r).replace(/[<>&]/g,oe=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[oe])}const X=re.body||re;function P(G){Array.from(G.childNodes).forEach(oe=>{if(oe.nodeType===1){const fe=String(oe.tagName).toUpperCase();if(O.has(fe))Array.from(oe.attributes).forEach(Me=>{const ee=Me.name.toLowerCase(),ue=(Me.value||"").trim().toLowerCase();(ee.startsWith("on")||(ee==="href"||ee==="src"||ee==="xlink:href")&&ue.startsWith("javascript:")||ee==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(ue))&&oe.removeAttribute(Me.name),ee==="href"&&!/^(https?:|mailto:|#|\/)/.test(ue)&&oe.removeAttribute("href")}),fe==="A"&&oe.setAttribute("rel","noopener noreferrer"),P(oe);else{const Me=oe.parentNode;for(;oe.firstChild;)Me.insertBefore(oe.firstChild,oe);Me.removeChild(oe)}}else if(oe.nodeType!==3){if(oe.nodeType===8)oe.parentNode&&oe.parentNode.removeChild(oe);else if(oe.nodeType===4){const fe=re.createTextNode(oe.nodeValue||"");oe.parentNode&&oe.parentNode.replaceChild(fe,oe)}}})}return P(X),X.innerHTML}const le="/api/openapi",Q="/api/market/ws/quotes",s=1,w=2.5,l="数据不可达",_="实时不可用，不刷新";function h(){const r=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",S=typeof location<"u"?location.host:"localhost:8001";return r+"//"+S+Q}function k(r,S){if(!r)return null;const c=S||{riseSpeed:s,volumeRatio:w},O=c.riseSpeed!=null?c.riseSpeed:s,re=c.volumeRatio!=null?c.volumeRatio:w,X=parseFloat(r.rise_speed);if(!isNaN(X)&&Math.abs(X)>O)return X>0?"涨速预警":"跌速预警";const P=parseFloat(r.volume_ratio);return!isNaN(P)&&P>re?"放量预警":null}function Z(r){const S=Number(r);return r==null||isNaN(S)?null:S}const b={apiFetch:p,withAuthHeaders:A,getToday:d,formatDate:x,withTimeout:R,showToast:o,debounce:M,throttle:q,resetInFlight:D,dedupeRequest:N,resetLoading:u,loadingCount:i,withLoading:m,formatApiError:H,jsonEquals:j,makeCacheKey:K,CacheStore:Y,createTtlCache:se,silentRefresh:z,sanitizeHtml:W,OPENAPI_ROUTE_BASE:le,REALTIME_WS_PATH:Q,WARN_RISE_SPEED_THRESHOLD:s,WARN_VOLUME_RATIO_THRESHOLD:w,REALTIME_DEGRADED_TEXT:l,REALTIME_FALLBACK_TEXT:_,buildRealtimeWsUrl:h,checkQuoteWarning:k,quoteFmt:{price:function(r){const S=Z(r);return S===null?"--":S.toFixed(2)},pct:function(r){const S=Z(r);return S===null?"--":(S>0?"+":"")+S.toFixed(2)+"%"},num:function(r){const S=Z(r);return S===null?"--":S.toFixed(2)},color:function(r){const S=r?r.change_pct:null,c=Z(S);return c===null?"":c>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=b),typeof Oe<"u"&&Oe.exports&&(Oe.exports=b)})();(function(a,t){typeof Oe=="object"&&Oe.exports?Oe.exports=t():a.QuantTabsCore=t()})(typeof self<"u"?self:void 0,function(){var a=8;function t(M,q){return M+"/"+q}function y(M,q,R,E){var D=M[q]||[],N=D.findIndex(function(i){return i.subPage===R});if(N!==-1)return{groups:M,activeKey:t(q,R)};var T=D.concat([{subPage:R,title:E}]);T.length>a&&(T=v(T));var u=Object.assign({},M,e({},q,T));return{groups:u,activeKey:t(q,R)}}function e(M,q,R){return M[q]=R,M}function v(M){if(M.length<=a)return M;var q=M.length>1?1:0;return M.filter(function(R,E){return E!==q})}function f(M,q,R,E){var D=M[q]||[],N=D.findIndex(function(m){return m.subPage===R});if(N===-1)return{groups:M,nextActive:null};var T=D.filter(function(m){return m.subPage!==R}),u=Object.assign({},M,e({},q,T)),i=null;return R===E&&(T[N]?i=T[N].subPage:T[N-1]?i=T[N-1].subPage:i=null),{groups:u,nextActive:i}}function A(M){return M&&M.length?M[0]:""}function p(M,q){return M[q]||[]}function d(M,q,R){var E=M[q]||[],D=E.filter(function(T){return T.subPage===R}),N=Object.assign({},M,e({},q,D));return{groups:N,activeKey:D.length?t(q,D[0].subPage):null}}function x(M,q){var R=Object.assign({},M,e({},q,[]));return{groups:R,activeKey:null}}function o(M,q,R,E){var D=(M[q]||[]).slice();if(R<0||R>=D.length)return{groups:M};var N=D.splice(R,1)[0];return D.splice(Math.max(0,Math.min(E,D.length)),0,N),{groups:Object.assign({},M,e({},q,D))}}return{MAX_TABS:a,openTab:y,closeTab:f,getDefaultTab:A,tabsOf:p,evictOldest:v,closeOthers:d,closeAll:x,reorder:o,keyOf:t}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var on=typeof Oe=="object"&&Oe.exports?Oe.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;on&&(window.__quantModules.tabsCore=on)}(function(a,t){typeof Oe=="object"&&Oe.exports?Oe.exports=t():a.QuantNavModeCore=t()})(typeof self<"u"?self:void 0,function(){var a=["subnav","tree","toptab"],t="toptab",y="nav_mode";function e(o){return a.indexOf(o)!==-1?o:t}function v(o){return e(o)==="subnav"}function f(o){return e(o)==="tree"}function A(o){return e(o)==="toptab"}function p(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function d(){var o=p(),M=t;if(o)try{M=e(o.getItem(y))}catch{}return{navMode:M}}function x(o){var M=p();if(!(!M||!o))try{o.navMode!==void 0&&M.setItem(y,e(o.navMode))}catch{}}return{NAV_MODES:a,DEFAULT_NAV_MODE:t,normalizeNavMode:e,subnavVisible:v,treeChildrenVisible:f,topTabsVisible:A,readPrefs:d,writePrefs:x}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var rn=typeof Oe=="object"&&Oe.exports?Oe.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;rn&&(window.__quantModules.navModeCore=rn)}(function(){function t(h,k){if(!Array.isArray(h)||h.length<=k)return h;const Z=[],L=h.length/k*2;for(let b=0;b<h.length;b+=L){const r=Math.floor(b),S=Math.min(h.length,Math.ceil(b+L));let c=1/0,O=-1,re=-1/0,X=-1;for(let P=r;P<S;P++){const G=h[P];if(!G)continue;const oe=G[3]!=null?Number(G[3]):1/0,fe=G[4]!=null?Number(G[4]):-1/0;oe<c&&(c=oe,O=P),fe>re&&(re=fe,X=P)}O>=0&&Z.push(h[O]),X>=0&&X!==O&&Z.push(h[X])}return Z}let y=null;function e(){return typeof echarts<"u"?Promise.resolve():(y||(y=new Promise(function(h,k){const Z=document.createElement("script");Z.src="/static/lib/echarts.min.js",Z.async=!0,Z.onload=function(){typeof echarts<"u"?h():k(new Error("echarts 加载后未定义"))},Z.onerror=function(){k(new Error("echarts.min.js 加载失败"))},document.head.appendChild(Z)})),y)}function v(){const h=getComputedStyle(document.documentElement);return{primary:h.getPropertyValue("--primary-color").trim()||"#2563eb",up:h.getPropertyValue("--color-up").trim()||"#43e97b",down:h.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:h.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:h.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const f=h=>(getComputedStyle(document.documentElement).getPropertyValue(h)||"").trim();function A(){return{up:f("--color-up")||"#E63946",down:f("--color-down")||"#2E7D32",neutral:f("--color-neutral")||"#43a047",accent:f("--color-accent")||"#F59E0B",risk:f("--color-danger")||"#C62828",warn:f("--color-warning")||"#FF9800",success:f("--color-success")||"#4CAF50",primary:f("--qc-primary-600")||"#b8922a",grid:f("--chart-split")||"#e2e8f0",axis:f("--chart-axis")||"#cbd5e1",bg:f("--chart-bg")||"transparent",series:[f("--qc-primary-600")||"#b8922a",f("--qc-primary-500")||"#c49b2e",f("--qc-primary-700")||"#8f6f1f",f("--qc-primary-400")||"#d4b352",f("--color-up")||"#E63946",f("--color-down")||"#2E7D32",f("--color-accent")||"#F59E0B",f("--qc-neutral-400")||"#b8ae9f"]}}function p(h,k,Z,L=!1,b=!1){if(!k||k.length===0)return;k.length>2e3&&(k=t(k,2e3));const r=k.map(pe=>typeof pe[0]=="string"&&pe[0].indexOf("-")>=0?pe[0]:pe[0].slice(0,4)+"-"+pe[0].slice(4,6)+"-"+pe[0].slice(6,8)),S=v(),c={ma5:f("--color-accent")||"#F59E0B",ma10:f("--color-primary")||"#3B82F6",ma20:f("--color-warning")||"#8B5CF6",ma60:f("--color-success")||"#10B981"},O=k.map(pe=>[pe[1],pe[2],pe[3],pe[4]]),re=k.map(pe=>pe[5]),X=k.map(pe=>pe[6]),P=k.map(pe=>pe[7]),G=k.map(pe=>pe[8]),oe=k.map(pe=>pe[9]),fe=k.map(pe=>pe[10]),ee=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",ue=S.borderLight,me={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:S.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:ee,borderColor:ue,textStyle:{color:S.textSecondary,fontSize:12},formatter:function(pe){if(!pe||!pe.length)return"";const he=pe[0].dataIndex,te=k[he];if(!te)return"";const xe=h.getOption(),Pe=xe.legend&&xe.legend[0]&&xe.legend[0].selected||{},ne=Ie=>Pe[Ie]!==!1,ae=Ie=>Ie==null||isNaN(Ie)?"--":Number(Ie).toFixed(2),ye=Ie=>Ie==null||isNaN(Ie)?"--":(Number(Ie)/1e4).toFixed(2)+"万手",Ne=['<div style="font-weight:600;color:'+S.textSecondary+';">'+r[he]+"</div>"];return Ne.push("开: "+ae(te[1])+"　收: "+ae(te[2])),Ne.push("低: "+ae(te[3])+"　高: "+ae(te[4])),Ne.push("成交量: "+ye(te[5])),te[6]!=null&&ne("MA5")&&Ne.push("MA5: "+ae(te[6])),te[7]!=null&&ne("MA10")&&Ne.push("MA10: "+ae(te[7])),te[8]!=null&&ne("MA20")&&Ne.push("MA20: "+ae(te[8])),te[9]!=null&&ne("MA60")&&Ne.push("MA60: "+ae(te[9])),te[10]!=null&&Ne.push("VOL_MA5: "+ye(te[10])),Ne.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:b?0:8,textStyle:{color:S.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:b?30:40,height:b?"48%":"52%"},{left:56,right:16,top:b?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:r,boundaryGap:!0,axisLine:{lineStyle:{color:ue}},axisLabel:{color:S.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:r,axisLabel:{show:!1},axisLine:{lineStyle:{color:ue}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:ue}},axisLabel:{color:S.textSecondary,fontSize:11,formatter:function(pe){const he=Math.round(pe*100)/100;return he%1===0?String(Math.round(he)):he.toFixed(2)}},splitLine:{lineStyle:{color:ue,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:ue}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,k.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:ue,textStyle:{color:S.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:O,itemStyle:{color:S.up,color0:S.down,borderColor:S.up,borderColor0:S.down}},{name:"MA5",type:"line",data:X,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:c.ma5}},{name:"MA10",type:"line",data:P,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:c.ma10}},{name:"MA20",type:"line",data:G,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:c.ma20}},{name:"MA60",type:"line",data:oe,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:c.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:re,itemStyle:{color:function(pe){const he=pe.dataIndex;return k[he][1]>=k[he][2]?S.up:S.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:fe,smooth:!0,symbol:"none",lineStyle:{width:1,color:c.ma5,type:"dashed"}}]};h.setOption(me,!0)}const d=new Map;function x(h){return d.has(h)||d.set(h,{chart:null,cache:null}),d.get(h)}async function o(h,k,Z,L=!1,b={}){await e();const r=x(h);let S=document.getElementById(h);if(!S)for(let c=0;c<16&&(await new Promise(O=>setTimeout(O,50)),S=document.getElementById(h),!S);c++);if(!S)throw new Error("无法找到图表容器: "+h);if(S.offsetWidth<50&&(S.style.minWidth="600px",S.style.minHeight="300px"),!r.chart||r.chart.isDisposed()||r.chart.getDom()!==S){if(r.chart)try{r.chart.dispose()}catch{}r.chart=echarts.init(S),r.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const c=b.onLegend;typeof c=="function"&&r.chart.on("legendselectchanged",O=>{O&&O.selected&&c(O.selected)})}return p(r.chart,k,Z,L,!!b.isMobile),r.cache={data:k,period:Z,isIndex:L,isMobile:!!b.isMobile},r.chart}function M(h){const k=d.get(h);k&&k.chart&&(k.chart.dispose(),k.chart=null,k.cache=null)}function q(h){const k=d.get(h);k&&k.chart&&k.chart.resize()}function R(h,k){const Z=d.get(h),L=Z&&Z.chart;if(L)if(k<=0)L.dispatchAction({type:"dataZoom",start:0,end:100});else{const S=Math.max(0,(60-k)/60*100);L.dispatchAction({type:"dataZoom",start:Math.round(S),end:100})}}function E(h){var L,b,r;const k=d.get(h);if(!k||!k.chart||!k.cache||k.chart.isDisposed())return;const Z=((r=(b=(L=k.chart.getOption())==null?void 0:L.legend)==null?void 0:b[0])==null?void 0:r.selected)||null;p(k.chart,k.cache.data,k.cache.period,k.cache.isIndex,k.cache.isMobile),Z&&k.chart.setOption({legend:{selected:Z}})}function D(h){const k=d.get(h);return k&&k.chart}const N=new Map;function T(h){return N.has(h)||N.set(h,{chart:null,cache:null}),N.get(h)}function u(h,k,Z={}){return e().then(function(){const L=T(h),b=document.getElementById(h);if(!b)throw new Error("无法找到图表容器: "+h);if(b.offsetWidth<50&&(b.style.minWidth="600px",b.style.minHeight="300px"),L.chart&&L.chart.getDom&&L.chart.getDom()!==b){try{L.chart.dispose()}catch{}L.chart=null}L.chart||(L.chart=echarts.init(b),L.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),L.resizeBound||(L.resizeBound=!0,window.addEventListener("resize",function(){L.chart&&!L.chart.isDisposed()&&L.chart.resize()})));const r=typeof k=="function"?k():k;return L.chart.setOption(r,!0),L.cache={buildOption:k,key:Z.key||""},L.chart})}function i(h){var b,r,S;const k=N.get(h);if(!k||!k.chart||!k.cache||k.chart.isDisposed())return;const Z=((S=(r=(b=k.chart.getOption())==null?void 0:b.legend)==null?void 0:r[0])==null?void 0:S.selected)||null,L=typeof k.cache.buildOption=="function"?k.cache.buildOption():k.cache.buildOption;k.chart.setOption(L,!0),Z&&L&&L.legend&&L.legend.selected&&k.chart.setOption({legend:{selected:Z}})}function m(h){const k=N.get(h);k&&k.chart&&(k.chart.dispose(),k.chart=null,k.cache=null)}function H(h){const k=N.get(h);k&&k.chart&&k.chart.resize()}const j=new Map;function K(h){return j.has(h)||j.set(h,{chart:null,cache:null}),j.get(h)}function Y(h,k,Z={}){return e().then(function(){const L=K(h),b=document.getElementById(h);if(!b)return null;if(b.offsetWidth<50&&(b.style.minWidth="600px",b.style.minHeight="300px"),L.chart&&L.chart.getDom&&L.chart.getDom()!==b){try{L.chart.dispose()}catch{}L.chart=null}L.chart||(L.chart=echarts.init(b),L.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),L.resizeBound||(L.resizeBound=!0,window.addEventListener("resize",function(){L.chart&&!L.chart.isDisposed()&&L.chart.resize()})));const r=typeof k=="function"?k():k;return L.chart.setOption(r,!0),L.cache={buildOption:k,key:Z.key||""},L.chart})}function se(h){const k=j.get(h);if(!k||!k.chart||!k.cache||k.chart.isDisposed())return;const Z=typeof k.cache.buildOption=="function"?k.cache.buildOption():k.cache.buildOption;k.chart.setOption(Z,!0)}function F(h){const k=j.get(h);k&&k.chart&&(k.chart.dispose(),k.chart=null,k.cache=null)}function z(h){const k=j.get(h);k&&k.chart&&k.chart.resize()}const U=Y,W=se,le=F,Q=z;function s(h,k,Z,L){L=L||{};const b=L.drawdownColor||f("--state-danger-solid");return{tooltip:{trigger:"axis"},legend:{data:[L.navLabel||"净值",L.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:Z||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:L.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:L.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:L.navLabel||"净值",type:"line",data:h||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:L.ddLabel||"回撤",type:"line",yAxisIndex:1,data:k||[],showSymbol:!1,areaStyle:{opacity:.25,color:b},lineStyle:{color:b,type:"solid",width:1.5}}]}}function w(h,k){k=k||{};const Z=k.bandColor||f("--state-info-solid"),L=h&&h.dates||[],b=h&&h.median||[],r=h&&h.q25||[],S=h&&h.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[k.medianLabel||"中位IC",k.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:L,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:k.medianLabel||"中位IC",type:"line",data:b,showSymbol:!1,lineStyle:{width:2,color:Z}},{name:k.bandLabel||"25–75分位",type:"line",data:r,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:Z,opacity:.12}},{name:"_bandH",type:"line",data:S.map(function(c,O){return c-(r[O]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:Z,opacity:.12}}]}}function l(h,k){k=k||{};const Z=k.color||f("--color-ai"),L=h&&h.dates||[],b=h&&h.value||[],r=h&&h.upper||[],S=h&&h.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[k.valueLabel||"情绪",k.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:L,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:k.valueLabel||"情绪",type:"line",data:b,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:Z}},{name:k.bandLabel||"过热/冰点带",type:"line",data:r,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:Z,opacity:.1}},{name:"_bandL",type:"line",data:S.map(function(c,O){return(r[O]||0)-c}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:Z,opacity:.1}}]}}const _={renderKlineChart:p,renderKlineTo:o,disposeKline:M,resizeKline:q,zoomKline:R,redrawKline:E,getKlineChart:D,renderBacktestTo:u,redrawBacktest:i,disposeBacktest:m,resizeBacktest:H,renderPortfolioTo:Y,redrawPortfolio:se,disposePortfolio:F,resizePortfolio:z,renderSimpleChartTo:U,redrawSimpleChart:W,disposeSimpleChart:le,resizeSimpleChart:Q,buildNavDrawdownOption:s,buildIcBandOption:w,buildSentimentBandOption:l,downsampleSeries:t,ensureEcharts:e,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:A,init(){return{renderKlineChart:p,renderKlineTo:o,disposeKline:M,resizeKline:q,zoomKline:R,redrawKline:E,getKlineChart:D,renderBacktestTo:u,redrawBacktest:i,disposeBacktest:m,resizeBacktest:H,renderPortfolioTo:Y,redrawPortfolio:se,disposePortfolio:F,resizePortfolio:z,renderSimpleChartTo:U,redrawSimpleChart:W,disposeSimpleChart:le,resizeSimpleChart:Q,buildNavDrawdownOption:s,buildIcBandOption:w,buildSentimentBandOption:l,downsampleSeries:t,ensureEcharts:e,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:A}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=_),typeof Oe<"u"&&Oe.exports&&(Oe.exports={downsampleSeries:t,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:s,buildIcBandOption:w,buildSentimentBandOption:l})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:t,computed:y}=Vue,{configChanged:e,consensus:v}=a,f=t(null),A=t(""),p=t(null),d=t([]),x=t([]),o=t([]),M=t([]),q=t([]),R=t([]),E=t({});function D(Se){const _e=q.value.indexOf(Se);_e>=0?q.value.splice(_e,1):q.value.push(Se)}const N=t("date"),T=t([]),u=t(!1),i=t(!1),m=t("watchlist"),H=t([]),j=t({vendors:[]}),K=t(""),Y=t(!1),se=t(!1);function F(Se){if(!Se)return"";const _e=String(Se),Le=_e.length;if(Le<=4)return _e[0]+"*".repeat(Le-1);const Ae=Le<=8?2:4;return _e.slice(0,Ae)+"*".repeat(Le-Ae-Ae)+_e.slice(-Ae)}async function z(Se){let _e;try{_e=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ae=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:_e,target:Se})})).json();if(Ae.success)return Ae.secret;ElementPlus.ElMessage.error(Ae.message||"查看失败")}catch(Le){ElementPlus.ElMessage.error("查看失败: "+Le.message)}return null}async function U(Se){if(Se._revealed){Se._revealed=!1,Se._masked=F(Se.api_key);return}const _e=await z("ai:"+Se.vendor_key);_e!==null&&(Se.api_key=_e,Se._revealed=!0)}async function W(Se){if(Se._editing){Se._editing=!1,Se._revealed=!1,Se.api_key&&(Se._masked=F(Se.api_key));return}Se._editing=!0;try{const Le=await(await fetch("/api/ai/models?full=1")).json();if(Le.success){const Ae=(Le.data.vendors||[]).find($e=>$e.vendor_key===Se.vendor_key);Ae&&(Se.api_key=Ae.api_key||"")}else Le.message&&ElementPlus.ElMessage.error(String(Le.message))}catch(_e){ElementPlus.ElMessage.error("解锁失败: "+_e.message)}}function le(Se){const{_fetching:_e,_testing:Le,_revealed:Ae,_masked:$e,_editing:Ze,...tt}=Se;return Ze||(tt.api_key=""),tt.models=(Se.models||[]).map(Dt=>{const{_testing:Pt,testResult:ft,...Lt}=Dt;return Lt}),tt}async function Q(){var Se;try{K.value="";const _e=await fetch("/api/ai/models");if(_e.status===401){K.value="请先登录后再查看模型配置";return}if(!_e.ok){K.value=`服务器错误 (${_e.status})`;return}const Le=await _e.json();Le.success?(H.value=(((Se=Le.data)==null?void 0:Se.vendors)||[]).map(Ae=>({...Ae,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:Ae.api_key||"",models:(Ae.models||[]).map($e=>({...$e,_testing:!1,testResult:void 0}))})),K.value=""):K.value=Le.message||"加载失败"}catch(_e){K.value="网络错误: "+_e.message}}async function s(){try{const _e=await(await fetch("/api/ai/catalog")).json();_e.success&&_e.data&&(j.value=_e.data)}catch(Se){console.warn("AI 厂商目录加载失败",Se)}}async function w(){se.value=!0;try{const Le=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:H.value.map(le)})})).json();Le.success?(H.value.forEach(Ae=>{Ae._editing=!1,Ae._revealed=!1,Ae.api_key&&(Ae._masked=F(Ae.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(Le.message||"保存失败")}catch(Se){ElementPlus.ElMessage.error("保存失败: "+Se.message)}se.value=!1}async function l(Se,_e){_e._testing=!0;try{const Ae=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:Se.vendor_key,model:_e.name,base_url:Se.base_url,api_key:Se.api_key,timeout:Se.timeout})});_e.testResult=await Ae.json()}catch(Le){_e.testResult={success:!1,message:Le.message}}_e._testing=!1}async function _(){Y.value=!0;for(const Se of H.value)for(const _e of Se.models||[])Se.api_key?await l(Se,_e):_e.testResult={success:!1,message:"未配置 API Key"};Y.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function h(Se){Se._fetching=!0;try{const Ae=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:Se.vendor_key,base_url:Se.base_url,api_key:Se.api_key,timeout:Se.timeout})})).json();if(Ae.success&&Array.isArray(Ae.models)){const $e=new Set((Se.models||[]).map(Ze=>Ze.name));for(const Ze of Ae.models)$e.has(Ze)||Se.models.push({name:Ze,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${Ae.models.length} 个模型`)}else ElementPlus.ElMessage.error(Ae.message||"获取模型列表失败")}catch(_e){ElementPlus.ElMessage.error("获取模型列表失败: "+_e.message)}Se._fetching=!1}function k(Se){const _e=(j.value.vendors||[]).find(Le=>Le.vendor_key===Se);if(_e){if(H.value.some(Le=>Le.vendor_key===Se)){ElementPlus.ElMessage.warning("该厂商已存在");return}H.value.push({vendor_key:_e.vendor_key,name:_e.name,kind:_e.kind,base_url:_e.base_url,api_key:"",timeout:60,tier:_e.tier||"",website:_e.website||"",locked:!!_e.locked,models:(_e.models||[]).map(Le=>({name:Le,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${_e.name}」，配置 API Key 后保存生效`)}}function Z(){H.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function L(Se){Se.models||(Se.models=[]),Se.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function b(Se,_e){const Le=Se.models[_e];if(!(!Le||Le.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(Le.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}Se.models.splice(_e,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function r(Se){if(Se.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(Se.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const _e=H.value.indexOf(Se);_e>=0&&H.value.splice(_e,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const S=t({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),c=t(!1),O=t(""),re=t(0),X=t(""),P=t(!1),G=t(""),oe=t(!1),fe=t(0),Me=t(0),ee=t(""),ue=t({}),me=t({}),pe=t({}),he=t({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),te=t("manual"),xe=y(()=>{const Se={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return Se[he.value.provider]||Se.custom}),Pe={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function ne(Se){if(Se==="manual")return;const _e=Pe[Se];_e&&(he.value.endpoint=_e.endpoint,he.value.model=_e.model,e.value=!0)}function ae(){if(e.value=!0,he.value.provider!=="codingplan"&&he.value.provider!=="custom"){const Se=xe.value;Se&&(he.value.endpoint=Se.endpoint,he.value.model=Se.model)}else he.value.provider==="codingplan"&&(he.value.endpoint||(he.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),he.value.model||(he.value.model="ark-code-latest"))}let ye=null;const Ne=8;async function Ie(){ye&&(ye.abort(),ye=null);const _e=(v.value||[]).filter(tt=>tt.status==="new"||tt.status==="out").filter(tt=>!E.value[tt.code]);if(_e.length===0)return;const Le=new AbortController;ye=Le;let Ae=0;const $e=async()=>{for(;Ae<_e.length;){const tt=_e[Ae++];try{const Pt=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:tt.code,stock_name:tt.name,event_type:tt.status==="new"?"enter":"exit"}),signal:Le.signal})).json();Pt.success&&Pt.signal&&(E.value={...E.value,[tt.code]:Pt.signal})}catch(Dt){if(Dt.name==="AbortError")return}}},Ze=Array.from({length:Math.min(Ne,_e.length)},()=>$e());await Promise.all(Ze)}function We(){ye&&(ye.abort(),ye=null)}let Ue=0;async function wt(Se){const _e=++Ue;try{const Ae=await(await fetch(`/api/ai/history/last/${encodeURIComponent(Se)}`)).json();if(_e!==Ue)return;Ae.success&&Ae.data&&(f.value=Ae.data,A.value=Ae.data.evaluate_time,st(Se,Ae.data),At(Ae.data))}catch{}}async function st(Se,_e){var Le,Ae;try{const Ze=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(Se)}&limit=2`)).json();if(Ze.success&&Ze.data&&Ze.data.length>=2){const tt=Ze.data[1],Dt=((Le=_e.result)==null?void 0:Le.total_score)||0,Pt=((Ae=tt.result)==null?void 0:Ae.total_score)||0;Dt>0&&Pt>0&&(p.value={prevScore:Pt,currScore:Dt,diff:Dt-Pt})}}catch($e){console.warn("[refreshStrategyData] autoPoll failed:",$e)}}function At(Se){var $e;const _e=(($e=Se.result)==null?void 0:$e.dimensions)||{},Le=[],Ae=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Ze of Ae){const tt=_e[Ze.key];tt!==void 0&&Le.push({icon:tt>=Ze.good?"check-circle-2":tt>=Ze.warn?"alert-triangle":"x-circle",label:`${Ze.label} ${Math.round(tt)}分`})}d.value=Le}return{aiResult:f,lastEvalTime:A,evalHistoryComparison:p,checklistItems:d,aiHistory:x,selectedHistoryIds:o,expandedDates:M,expandedMonths:q,expandedStocks:R,poolSignals:E,toggleMonthExpand:D,aiHistoryView:N,selectedWatchlistCodes:T,showAutoEvaluateSettings:u,savingConfig:i,autoEvaluateScope:m,aiVendors:H,aiCatalog:j,aiModelsError:K,testingAllModels:Y,savingAiModels:se,loadAiVendors:Q,loadAiCatalog:s,saveAiVendors:w,saveAiModels:w,testVendorModel:l,testAllVendorModels:_,fetchVendorModels:h,addVendorFromCatalog:k,addCustomVendor:Z,addVendorModel:L,removeVendorModel:b,removeVendor:r,toggleVendorKeyReveal:U,toggleVendorEdit:W,autoEvaluateConfig:S,aiLoading:c,aiEvalStage:O,aiEvalElapsed:re,aiEvalError:X,showBatchEvaluate:P,batchStocks:G,batchRunning:oe,batchTotal:fe,batchCompleted:Me,batchCurrent:ee,batchStatuses:ue,batchResults:me,batchEvalErrors:pe,aiConfig:he,selectedPreset:te,providerInfo:xe,aiPresets:Pe,applyPreset:ne,onProviderChange:ae,fetchPoolSignals:Ie,cancelPoolSignals:We,loadLastEvaluation:wt}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:t,computed:y,watch:e}=Vue,{configChanged:v,aiConfig:f,aiLoading:A,feishuConfig:p,currentTheme:d,changeTheme:x,autoEvaluateConfig:o,currentUser:M,strategyFilter:q,applyTheme:R,dashboardData:E,lastRefreshTime:D,saveAiModels:N}=a,T=t(!1),u=t(!1),i=t(null),m=t(null),H=t(null),j=t(null),K=t({token:"",endpoint:"http://api.tushare.pro",timeout:30}),Y=t("disconnected"),se=t({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),F=t({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),z=t(!1),U=t(null),W=t(null),le=t("pending"),Q=t("..."),s=t(!1),w=t({api_limit:600}),l=t(!1),_=t(!1);async function h(){try{const ae=await(await fetch("/api/system/rate-limit")).json();ae.success&&(w.value=ae.data)}catch(ne){console.warn("loadRateLimit failed:",ne)}}async function k(){_.value=!0;try{const ae=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w.value)})).json();ae.success?(l.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(ae.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{_.value=!1}}e(()=>[f.value.provider,f.value.apiKey,f.value.endpoint,f.value.model],()=>{v.value=!0},{deep:!0});async function Z(){T.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(f.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f.value)})).json()).success?(v.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(ne){localStorage.setItem("quant_ai_config",JSON.stringify(f.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",ne)}finally{T.value=!1}}async function L(){A.value=!0;try{const ae=await(await fetch("/api/ai/test")).json();ae.success?ElementPlus.ElMessage.success(ae.message||"API连接正常"):ElementPlus.ElMessage.error(ae.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{A.value=!1}}function b(){const ne={ai:f.value,feishu:p.value,theme:d.value,export_time:new Date().toISOString()},ae=new Blob([JSON.stringify(ne,null,2)],{type:"application/json"}),ye=URL.createObjectURL(ae),Ne=document.createElement("a");Ne.href=ye,Ne.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Ne.click(),URL.revokeObjectURL(ye),ElementPlus.ElMessage.success("配置已导出")}function r(ne){const ae=ne.target.files[0];if(!ae)return;const ye=new FileReader;ye.onload=async Ne=>{try{const Ie=JSON.parse(Ne.target.result);Ie.ai&&(f.value={...f.value,...Ie.ai},await Z()),Ie.feishu&&(Object.assign(p.value,Ie.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Ie.feishu)})),Ie.theme&&(d.value=Ie.theme,x(Ie.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},ye.readAsText(ae),ne.target.value=""}async function S(){T.value=!0;const ne=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:K.value,feishu:p.value,ai:f.value,rate_limit:w.value,auto_evaluate:o.value,theme:d.value}})}).then(Ie=>["userConfig",Ie.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(K.value)}).then(Ie=>["tushare",Ie.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:se.value})}).then(Ie=>["datasource",Ie.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p.value)}).then(Ie=>["feishu",Ie.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f.value)}).then(Ie=>["ai",Ie.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(w.value)}).then(Ie=>["rateLimit",Ie.ok]),N().then(()=>["aiModels",!0],()=>["aiModels",!1])],ae=await Promise.allSettled(ne),ye=ae.filter(Ie=>Ie.status==="fulfilled"&&Ie.value[1]).length,Ne=ae.filter(Ie=>Ie.status==="rejected"||Ie.status==="fulfilled"&&!Ie.value[1]).length;l.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(q.value.selected)),localStorage.setItem("quant_strategy_filter_mode",q.value.mode),M.value&&fetch(`/api/users/${M.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:d.value})}).catch(()=>{}),u.value=!1,i.value=new Date().toLocaleString("zh-CN"),T.value=!1,Ne>0&&console.error(`[saveAllConfig] ${ye}/${ye+Ne} 项保存成功，${Ne} 项失败`)}async function c(){try{const ae=await(await fetch("/api/user_config/config")).json();if(ae.success&&ae.config){const ye=ae.config;ye.tushare&&(K.value={...K.value,...ye.tushare}),ye.feishu&&(p.value={...p.value,...ye.feishu}),ye.ai&&(f.value={...f.value,...ye.ai}),ye.rate_limit&&(w.value={...w.value,...ye.rate_limit}),ye.auto_evaluate&&(o.value={...o.value,...ye.auto_evaluate}),ye.theme&&!localStorage.getItem("quant_theme")&&R(ye.theme)}u.value=!1,l.value=!1}catch(ne){console.error("[resetAllConfig] 重新加载配置失败:",ne),u.value=!1}}async function O(){Y.value="testing";try{const ae=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(Y.value=ae.success?"connected":"disconnected",ae.success){const ye=ae.data_count?` (获取到 ${ae.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+ye)}else ElementPlus.ElMessage.error(ae.message||"连接失败")}catch{Y.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function re(){try{const ae=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();Y.value=ae.success?"connected":"disconnected"}catch{Y.value="disconnected"}}async function X(){var ne;z.value=!0;try{const ye=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ye.success?(U.value=parseInt(((ne=ye.message.match(/\d+/))==null?void 0:ne[0])||"0"),ElementPlus.ElMessage.success(ye.message)):ElementPlus.ElMessage.error(ye.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{z.value=!1}}async function P(){try{const ae=await(await fetch("/api/market/tushare/config")).json();ae.success&&ae.config&&(K.value={...K.value,...ae.config})}catch(ne){console.warn("loadTushareConfig failed:",ne)}}function G(ne){if(!ne)return"";const ae=String(ne),ye=ae.length;if(ye<=4)return ae[0]+"*".repeat(ye-1);const Ne=ye<=8?2:4;return ae.slice(0,Ne)+"*".repeat(ye-Ne-Ne)+ae.slice(-Ne)}async function oe(ne){let ae;try{ae=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ne=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:ae,target:ne})})).json();if(Ne.success)return Ne.secret;ElementPlus.ElMessage.error(Ne.message||"查看失败")}catch(ye){ElementPlus.ElMessage.error("查看失败: "+ye.message)}return null}async function fe(ne){const ae=se.value[ne];if(!ae)return;if(ae._revealed){ae._revealed=!1,ae._masked=G(ae.token);return}const ye=await oe(ne);ye!==null&&(ae.token=ye,ae._revealed=!0)}async function Me(ne){const ae=se.value[ne];if(ae){if(ae._editing){ae._editing=!1,ae._revealed=!1,ae.token&&(ae._masked=G(ae.token));return}ae._editing=!0;try{const ye=await oe(ne);if(ye===null){ae._editing=!1;return}ae.token=ye,ae._revealed=!0}catch(ye){ae._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+ye.message)}}}async function ee(){try{const ae=await(await fetch("/api/market/datasource/config")).json();if(ae.success&&ae.config&&ae.config.sources){const ye=ae.config.sources,Ne=Ie=>{const We={...se.value[Ie],...ye[Ie]||{}};return We._editing=!1,We._revealed=!1,We._masked=We.token||"",We.token="",We};se.value={sxsc_tushare:Ne("sxsc_tushare"),tushare:Ne("tushare"),akshare:{...se.value.akshare,...ye.akshare||{}}}}try{const Ne=await(await fetch("/api/market/datasource/status")).json();if(Ne.success&&Ne.status)for(const[Ie,We]of Object.entries(Ne.status))F.value[Ie]=We.connected?"connected":"disconnected"}catch{}}catch(ne){console.warn("loadDatasourceConfig failed:",ne)}}async function ue(){try{const ne={};for(const[ae,ye]of Object.entries(se.value)){const{_revealed:Ne,_masked:Ie,_editing:We,...Ue}=ye;!We&&ae!=="akshare"&&(Ue.token=""),ne[ae]=Ue}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:ne})}),u.value=!0}catch(ne){console.warn("saveDatasourceConfig failed:",ne)}}async function me(ne){F.value[ne]="testing";try{const ae=se.value[ne];ae&&ae._editing&&await ue();const Ne=await(await fetch(`/api/market/datasource/test/${ne}`,{method:"POST"})).json();F.value[ne]=Ne.success?"connected":"disconnected",Ne.success?ElementPlus.ElMessage.success(`${ne} 连接成功`):ElementPlus.ElMessage.error(`${ne}: ${Ne.message}`)}catch{F.value[ne]="disconnected",ElementPlus.ElMessage.error(`${ne} 连接失败`)}}async function pe(){try{const ae=await(await fetch("/api/feishu/config")).json();ae&&typeof ae=="object"&&(p.value={...p.value,...ae},m.value=JSON.parse(JSON.stringify(p.value)))}catch(ne){console.warn("loadFeishuConfig failed:",ne)}}async function he(){try{const ae=await(await fetch("/api/ai/config")).json();if(ae.success&&ae.data)f.value={...f.value,...ae.data};else{const ye=localStorage.getItem("quant_ai_config");ye&&(f.value=JSON.parse(ye))}}catch{const ae=localStorage.getItem("quant_ai_config");ae&&(f.value=JSON.parse(ae))}}async function te(){try{const ae=await(await fetch("/api/user_config/config")).json();if(ae.success&&ae.config){const ye=ae.config;ye.tushare&&(K.value={...K.value,...ye.tushare}),ye.datasource&&ye.datasource.sources&&(se.value={sxsc_tushare:{...se.value.sxsc_tushare,...ye.datasource.sources.sxsc_tushare||{}},tushare:{...se.value.tushare,...ye.datasource.sources.tushare||{}},akshare:{...se.value.akshare,...ye.datasource.sources.akshare||{}}}),ye.feishu&&(p.value={...p.value,...ye.feishu},m.value=JSON.parse(JSON.stringify(p.value))),ye.ai&&(f.value={...f.value,...ye.ai}),ye.rate_limit&&(w.value={...w.value,...ye.rate_limit}),ye.theme&&!localStorage.getItem("quant_theme")&&R(ye.theme),ye.auto_evaluate&&(o.value={...o.value,...ye.auto_evaluate})}}catch(ne){console.warn("加载用户配置失败，使用本地缓存",ne)}}async function xe(){var ne,ae,ye,Ne;try{const We=await(await fetch("/api/dashboard")).json(),Ue=We.success?We.data:We;U.value=((ne=Ue==null?void 0:Ue.stats)==null?void 0:ne.total_stocks_covered)||null;const st=await(await fetch("/api/dates")).json();W.value=((ae=st==null?void 0:st.data)==null?void 0:ae.total)||((Ne=(ye=st==null?void 0:st.data)==null?void 0:ye.dates)==null?void 0:Ne.length)||null;const Se=await(await fetch("/api/ai/history")).json();le.value="ok"}catch{le.value="pending"}}async function Pe(){try{const ae=await(await fetch("/api/dashboard")).json();E.value=ae.success?ae.data:ae,D.value=Date.now()}catch(ne){console.error("加载总览数据失败",ne)}}return{configSaving:T,configChanged:v,globalConfigDirty:u,lastSavedTime:i,feishuConfigOriginal:m,aiConfigOriginal:H,tushareConfigOriginal:j,tushareConfig:K,tushareStatus:Y,datasourceConfig:se,datasourceStatus:F,syncingData:z,stockCount:U,tradeDateCount:W,aiStatus:le,appVersion:Q,showImportDialog:s,rateLimitConfig:w,rateLimitDirty:l,rateLimitSaving:_,loadRateLimit:h,saveRateLimit:k,saveAiConfig:Z,testAiApi:L,exportConfig:b,importConfig:r,saveAllConfig:S,resetAllConfig:c,testTushareConnection:O,checkTushareConnection:re,syncStockData:X,loadTushareConfig:P,loadDatasourceConfig:ee,saveDatasourceConfig:ue,testDatasource:me,toggleDatasourceKeyReveal:fe,toggleDatasourceEdit:Me,loadFeishuConfig:pe,loadAiConfig:he,loadUserConfig:te,loadSystemStatus:xe,loadDashboardData:Pe}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:t,computed:y}=Vue,{currentUser:e,applyTheme:v,allMenuDefs:f,loadGroupConfig:A}=a,p=t([]),d=t(""),x=t(""),o=t("users"),M=t({}),q=t({}),R=y(()=>{let te=p.value;if(x.value&&(te=te.filter(Pe=>(Pe.group||Pe.role)===x.value)),!d.value)return te;const xe=d.value.toLowerCase();return te.filter(Pe=>Pe.username.toLowerCase().includes(xe))});function E(te){M.value={...M.value,[te]:!M.value[te]}}async function D(te,xe){try{const ne=await(await fetch("/api/groups/"+xe+"/members/"+te,{method:"DELETE"})).json();ne.success?(await Me(),await oe()):ElementPlus.ElMessage.error(ne.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function N(te){const xe=q.value[te];if(xe)try{const ne=await(await fetch("/api/groups/"+te+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:xe})})).json();ne.success?(await Me(),await oe(),q.value={...q.value,[te]:""}):ElementPlus.ElMessage.error(ne.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function T(te,xe){try{const ne=await(await fetch("/api/users/"+te.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:xe})})).json();ne.success?await Me():ElementPlus.ElMessage.error(ne.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const u=t(!1),i=t(null),m=t({username:"",password:"",role:"user",theme:"tech-blue"}),H=t(!1),j=t(null),K=t(!1),Y=t(!1),se=t({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),F=t({}),z=t(!1),U=t({group_id:"",name:"",description:""}),W=t(!1),le=t([]),Q=t(""),s=t(""),w=t({});function l(te){w.value={...w.value,[te]:!w.value[te]}}function _(te){return!p.value||!p.value.length?0:p.value.filter(xe=>(xe.group||xe.role)===te).length}function h(te){const xe=(te==null?void 0:te.visible_menus)||{};return Object.values(xe).filter(Boolean).length}const k=y(()=>Object.keys(G.value).length);async function Z(te){s.value=te,Y.value=!0,await L(te)}async function L(te){try{const Pe=await(await fetch("/api/groups/"+te+"/members")).json();Pe.success&&(le.value=Pe.members||[])}catch(xe){le.value=[],console.error("[loadGroupMembers]",xe)}}async function b(){if(!(!Q.value||!s.value)){W.value=!0;try{const xe=await(await fetch("/api/groups/"+s.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:Q.value})})).json();xe.success?(await L(s.value),await Me(),Q.value=""):ElementPlus.ElMessage.error(xe.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{W.value=!1}}}async function r(te){try{const Pe=await(await fetch("/api/groups/"+s.value+"/members/"+te,{method:"DELETE"})).json();Pe.success?(await L(s.value),await Me()):ElementPlus.ElMessage.error(Pe.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const S=y(()=>{if(!p.value)return[];const te=new Set(le.value.map(xe=>xe.username));return p.value.filter(xe=>xe.username!=="admin"&&xe.username!=="guest"&&!te.has(xe.username))});function c(te){const xe=se.value.visible_menus[te],Pe=f.find(ne=>ne.key===te);if(Pe)if(xe){const ne=F.value[te]||{};Pe.subPages.forEach(ae=>{const ye=te+"."+ae;se.value.visible_sub_pages[ye]=ne[ae]!==void 0?ne[ae]:!0})}else{const ne={};Pe.subPages.forEach(ae=>{const ye=te+"."+ae;ne[ae]=se.value.visible_sub_pages[ye],se.value.visible_sub_pages[ye]=!1}),F.value[te]=ne}}function O(te){j.value=te;const xe=G.value[te]||{};se.value={name:xe.name||te,description:xe.description||"",visible_menus:{...xe.visible_menus||{}},visible_sub_pages:{...xe.visible_sub_pages||{}}},F.value={},f.forEach(Pe=>{const ne={};Pe.subPages.forEach(ae=>{ne[ae]=se.value.visible_sub_pages[Pe.key+"."+ae]}),F.value[Pe.key]=ne}),K.value=!0}async function re(){W.value=!0;try{const xe=await(await fetch("/api/groups/"+j.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(se.value)})).json();xe.success?(K.value=!1,j.value=null,await oe(),await A()):ElementPlus.ElMessage.error(xe.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{W.value=!1}}async function X(te){var xe;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((xe=G.value[te])==null?void 0:xe.name)||te)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const ae=await(await fetch("/api/groups/"+te,{method:"DELETE"})).json();ae.success?await oe():ElementPlus.ElMessage.error(ae.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function P(){if(U.value.group_id){W.value=!0;try{const xe=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(U.value)})).json();xe.success?(z.value=!1,U.value={group_id:"",name:"",description:""},await oe()):ElementPlus.ElMessage.error(xe.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{W.value=!1}}}const G=t({});async function oe(){try{if(!localStorage.getItem("quant_token"))return;const xe=await fetch("/api/groups");if(xe.ok){const Pe=await xe.json();G.value=Pe.groups||{}}}catch(te){console.warn("loadAllGroups:",te)}}function fe(te){var xe;return((xe=G.value[te])==null?void 0:xe.name)||te||"--"}async function Me(){try{if(!localStorage.getItem("quant_token")){p.value=[];return}const xe=await fetch("/api/users");if(xe.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),e.value=null;return}const Pe=await xe.json();p.value=Pe.users||[]}catch(te){p.value=[],console.error("[loadUsers] error:",te)}}function ee(te){i.value=te,m.value={username:te.username,password:"",role:te.role,theme:te.theme||"tech-blue",group:te.group||te.role},u.value=!0}async function ue(){if(m.value.username){H.value=!0;try{const te=i.value?"PUT":"POST",xe=i.value?`/api/users/${m.value.username}`:"/api/users",ne=await(await fetch(xe,{method:te,headers:{"Content-Type":"application/json"},body:JSON.stringify(m.value)})).json();if(ne.success){if(ElementPlus.ElMessage.success("保存成功"),e.value&&m.value.username===e.value.username){const ae=m.value.theme;ae&&ae!==e.value.theme&&(e.value.theme=ae,localStorage.setItem("quant_user",JSON.stringify(e.value)),v(ae))}u.value=!1,i.value=null,await Me()}else ElementPlus.ElMessage.error(ne.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{H.value=!1}}}async function me(te){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${te}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await Me())}catch(xe){console.error("[deleteUser]",xe)}}async function pe(te){try{const Pe=await(await fetch(`/api/users/${te.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:te.enabled})})).json();Pe.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(Pe.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function he(te){try{const{value:xe}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${te.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(xe){const ne=await(await fetch(`/api/users/${te.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:xe})})).json();ne.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(ne.message||"重置失败")}}catch{}}return{userList:p,userSearch:d,groupFilter:x,userPageTab:o,expandedGroups:M,addMemberGroupMap:q,filteredUsers:R,toggleGroupExpand:E,removeMemberFromGroupInline:D,addMemberToGroupInline:N,changeUserGroup:T,showAddUser:u,editingUser:i,userForm:m,savingUser:H,editingGroup:j,menuConfigDialog:K,memberDialog:Y,groupEditForm:se,subPageCache:F,showAddGroup:z,addGroupForm:U,savingGroup:W,groupMembers:le,addMemberUsername:Q,selectedMemberGroup:s,subPageSectionExpanded:w,toggleSubPageSection:l,getGroupMemberCount:_,getMenuEnabledCount:h,groupCount:k,openMemberManager:Z,loadGroupMembers:L,addMemberToGroup:b,removeMemberFromGroup:r,availableUsersForGroup:S,onParentToggle:c,openMenuConfig:O,saveMenuConfig:re,deleteGroupConfig:X,createGroup:P,allGroups:G,getGroupName:fe,loadAllGroups:oe,loadUsers:Me,editUser:ee,saveUser:ue,deleteUser:me,toggleUserEnabled:pe,resetUserPassword:he}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:t,computed:y}=Vue,{stockKlineLoaded:e,stockDetailVisible:v,stockDetailTab:f,stockDetail:A,disposeStockKline:p}=a,d=t([]),x=t(!1),o=t(!1),M=t("date"),q=t([]),R=t([]),E=t([]),D=t([]),N=y(()=>{var r,S;const b=[];for(const c of d.value){if(!c||c.id==null)continue;const O=c.stock_name||c.stock_code||"",re=Array.isArray(c.messages)?c.messages:[];b.push({id:c.id,stock_code:c.stock_code,stock_name:O,first_msg:c.first_msg||((S=(r=re[0])==null?void 0:r.content)==null?void 0:S.substring(0,50))||"",msg_count:c.msg_count||re.length||0,created_at:c.created_at,date:(c.created_at||"").substring(0,10),month:(c.created_at||"").substring(0,7),messages:re})}return b}),T=y(()=>{const b={};for(const S of N.value){const c=S.date||"未知";b[c]||(b[c]=[]),b[c].push(S)}const r={};return Object.keys(b).sort((S,c)=>c.localeCompare(S)).forEach(S=>r[S]=b[S]),r}),u=y(()=>{const b={};for(const S of N.value){const c=S.month||"未知";b[c]||(b[c]=[]),b[c].push(S)}const r={};return Object.keys(b).sort((S,c)=>c.localeCompare(S)).forEach(S=>r[S]=b[S]),r}),i=y(()=>{const b={};for(const r of N.value){const S=`${r.stock_name}(${r.stock_code})`;b[S]||(b[S]=[]),b[S].push(r)}return b});function m(b){const r=q.value.indexOf(b);r>=0?q.value.splice(r,1):q.value.push(b)}function H(b){const r=T.value[b]||[];if(r.every(c=>q.value.includes(c.id)))q.value=q.value.filter(c=>!r.some(O=>O.id===c));else for(const c of r)q.value.includes(c.id)||q.value.push(c.id)}function j(b){const r=u.value[b]||[];if(r.every(c=>q.value.includes(c.id)))q.value=q.value.filter(c=>!r.some(O=>O.id===c));else for(const c of r)q.value.includes(c.id)||q.value.push(c.id)}function K(b){const r=i.value[b]||[];if(r.every(c=>q.value.includes(c.id)))q.value=q.value.filter(c=>!r.some(O=>O.id===c));else for(const c of r)q.value.includes(c.id)||q.value.push(c.id)}function Y(b){const r=R.value.indexOf(b);r>=0?R.value.splice(r,1):R.value.push(b)}function se(b){const r=E.value.indexOf(b);r>=0?E.value.splice(r,1):E.value.push(b)}function F(b){const r=D.value.indexOf(b);r>=0?D.value.splice(r,1):D.value.push(b)}function z(){q.value.length===N.value.length?q.value=[]:q.value=N.value.map(b=>b.id)}async function U(){if(q.value.length){try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${q.value.length} 段对话吗？此操作不可恢复。`,"删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}for(const b of[...q.value])await Z(b);q.value=[]}}const W={};async function le(b){A.value={stock:b.stock_code,name:b.stock_name},v.value=!0,f.value="chat",e.value=!1,p(),w.value=!0,l.value="",s.value=[];try{let r=W[b.id];if(!r){const S=await fetch("/api/ai/chat/history/"+b.id);if(!S.ok)throw new Error("load history failed");r=(await S.json()).messages||[],W[b.id]=r}s.value=r.map(S=>({role:S.role,content:S.content}))}catch{l.value="历史消息加载失败，请重试"}finally{w.value=!1}}const Q=t(""),s=t([]),w=t(!1),l=t("");async function _(){var S;const b=Q.value.trim();if(!b||w.value)return;l.value="",s.value.push({role:"user",content:b}),Q.value="",w.value=!0;const r=s.value.length;s.value.push({role:"assistant",content:""});try{const re=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((S=A.value)==null?void 0:S.stock)||"",message:b})})).body.getReader(),X=new TextDecoder;let P="";for(;;){const{done:G,value:oe}=await re.read();if(G)break;P+=X.decode(oe,{stream:!0});const fe=P.split(`
`);P=fe.pop()||"";for(const Me of fe)if(Me.startsWith("data: "))try{const ee=JSON.parse(Me.slice(6));ee.token?s.value[r].content+=ee.token:ee.done?console.log("Stream done:",ee.session_id):ee.error&&(l.value=ee.error)}catch(ee){console.warn("SSE parse error:",ee)}}}catch(c){s.value[r].content||(s.value[r].content="网络错误: "+c.message)}w.value=!1}async function h(b){var S;l.value="",w.value=!0;const r={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};s.value.push({role:"user",content:r[b]||r.comprehensive});try{const O=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((S=A.value)==null?void 0:S.stock)||"",mode:b})});if(O.ok){const re=await O.json();s.value.push({role:"assistant",content:re.reply||"无回复"})}}catch(c){l.value="网络错误: "+c.message}w.value=!1}async function k(){x.value=!0,o.value=!1;try{const b=await fetch("/api/ai/chat/history?view=date");if(b.ok){const r=await b.json(),S=[];for(const c of r)for(const O of c.items||[])S.push(O);d.value=S}else o.value=!0}catch(b){console.error(b),o.value=!0}finally{x.value=!1}}async function Z(b){try{await fetch("/api/ai/chat/history/"+b,{method:"DELETE"}),d.value=d.value.filter(r=>r.id!==b)}catch(r){console.error("deleteChatSession:",r)}}function L(b){if(!b)return"";const r=String(b).split(`
`),S=[],c=[];let O=0;for(;O<r.length;){if(/^\s*\|.*\|\s*$/.test(r[O])){let X=O;const P=[];for(;X<r.length&&/^\s*\|.*\|\s*$/.test(r[X]);)P.push(r[X]),X++;const G=Me=>Me.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map(ee=>ee.trim()),oe=P.map(G);if(oe.length>1&&oe[1].every(Me=>/^:?-{3,}:?$/.test(Me))){const Me=Math.max(...oe.map(pe=>pe.length)),ee=oe[0].slice(0,Me),ue=oe.slice(2);let me="<table>";ue.length?(me+="<thead><tr>"+ee.map(pe=>"<th>"+pe+"</th>").join("")+"</tr></thead>",me+="<tbody>"+ue.map(pe=>"<tr>"+pe.slice(0,Me).map(he=>"<td>"+he+"</td>").join("")+"</tr>").join("")+"</tbody>"):me+="<tbody><tr>"+ee.map(pe=>"<td>"+pe+"</td>").join("")+"</tr></tbody>",me+="</table>",S.push(me),c.push("\0T"+(S.length-1)+"\0"),O=X;continue}for(;O<X;)c.push(r[O]),O++;continue}c.push(r[O]),O++}let re=c.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return S.forEach((X,P)=>{re=re.split("\0T"+P+"\0").join(X)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(re=window.__quantModules.core.sanitizeHtml(re)),re}return{chatSessions:d,chatHistoryView:M,selectedChatIds:q,expandedChatDates:R,expandedChatMonths:E,expandedChatStocks:D,chatHistoryLoading:x,chatHistoryError:o,allChatSessionsFlat:N,chatGroupedByDate:T,chatGroupedByMonth:u,chatGroupedByStock:i,toggleSelectChat:m,toggleSelectChatDate:H,toggleSelectChatMonth:j,toggleSelectChatStock:K,toggleChatDateExpand:Y,toggleChatMonthExpand:se,toggleChatStockExpand:F,selectAllChatSessions:z,deleteSelectedChatSessions:U,viewChatSession:le,loadChatHistory:k,deleteChatSession:Z,renderMarkdown:L,stockChatInput:Q,stockChatMessages:s,stockChatLoading:w,stockChatError:l,askStockSend:_,askStockQuick:h}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:t,computed:y,watch:e}=Vue,{consensus:v,currentPage:f,currentSubPage:A,dashboardData:p,searchKeyword:d,statusFilter:x,strategyFilter:o,strategyFilterCounts:M}=a;function q(F){const z=o.value.selected;if(!z||z.length===0)return F;const U=o.value.mode;return F.filter(W=>{const le=W.strategy_names||W.strategies||[];return U==="union"?z.some(Q=>le.includes(Q)):z.every(Q=>le.includes(Q))})}const R=y(()=>{const F=q(v.value||[]);return{all:F.length,newCount:F.filter(z=>z.status==="new").length,current:F.filter(z=>z.status==="current").length,out:F.filter(z=>z.status==="out").length}}),E=y(()=>{let F=v.value||[];if(x.value!=="all"&&(F=F.filter(z=>z.status===x.value)),F=q(F),d.value){const z=d.value.toLowerCase();F=F.filter(U=>U.code.toLowerCase().includes(z)||U.name&&U.name.toLowerCase().includes(z))}return F}),D=y(()=>{const F=v.value||[],z={},U={};for(const W of F)W.code&&W.name&&(U[W.code]=W.name);for(const W of F){const le=W.strategy_names||W.strategies||[];for(const Q of le)z[Q]||(z[Q]={strategy:Q,count:0,codes:[],names:[]}),z[Q].count++,z[Q].codes.includes(W.code)||(z[Q].codes.push(W.code),z[Q].names.push({code:W.code,name:U[W.code]||W.code}))}return Object.values(z).sort((W,le)=>le.count-W.count)}),N=y(()=>{const F=o.value.selected,z=o.value.mode,U={};for(const[W,le]of Object.entries(M.value)){const Q=le||[];!F||F.length===0?U[W]=Q.length:z==="union"?U[W]=Q.filter(s=>s.strategies&&F.some(w=>s.strategies.includes(w))).length:U[W]=Q.filter(s=>s.strategies&&F.every(w=>s.strategies.includes(w))).length}return U});function T(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(o.value.selected)),localStorage.setItem("quant_strategy_filter_mode",o.value.mode)}const u=y(()=>{const F=(p.value||{}).consensus_rank||[];return q(F)}),i=y(()=>{const F=v.value||M.value.day||[];return q(F).length}),m=y(()=>{const F=(p.value||{}).strategy_counts||[],z=v.value||M.value.day||[];if(z.length===0)return F;const U=q(z),W={};U.forEach(Q=>{(Q.strategy_names||Q.strategies||[]).forEach(w=>{W[w]=(W[w]||0)+1})});const le=U.length||1;return F.map(Q=>{const s=Q.strategy_name||Q.strategy_id,w=W[s]||0;return{...Q,count:w,percentage:Math.round(w/le*1e3)/10}})}),H=y(()=>{const F=(p.value||{}).pool_changes||{},z=(F.new_count||0)-(F.out_count||0);return z>0?{dir:"up",text:"↑"+z}:z<0?{dir:"down",text:"↓"+Math.abs(z)}:{dir:"flat",text:"→0"}}),j=y(()=>{const F=(p.value||{}).time_coverage||{},z=new Date(F.start_date),U=new Date(F.end_date),W=new Date;if(!z.getTime()||!U.getTime()||W>=U)return 100;if(W<=z)return 0;const le=U-z,Q=W-z;return Math.round(Q/le*100)}),K=t(null),Y=y(()=>{if(!K.value)return"";const F=Math.floor((Date.now()-K.value)/1e3);return F<60?F+"秒前刷新":F<3600?Math.floor(F/60)+"分钟前刷新":Math.floor(F/3600)+"小时前刷新"});function se(F){o.value.selected=[F],o.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([F])),localStorage.setItem("quant_strategy_filter_mode","union"),f.value="calendar",A.value="calendar"}return{applyStrategyFilter:q,statusCounts:R,stockPool:E,strategyDistribution:D,strategyPreviewCount:N,saveStrategyFilter:T,filteredConsensusRank:u,currentPoolSize:i,filteredStrategyCounts:m,poolChangeBadge:H,timeBarPercent:j,lastRefreshTime:K,timeSinceRefresh:Y,navigateToStrategyFilter:se}}}})();(function(){window.__quantModules||(window.__quantModules={});const a={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},t={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function y(v){return a[v]||"var(--text-tertiary)"}function e(v){return t[v]||"var(--bg-hover)"}window.__quantModules.watchlist={create(v){const{ref:f,computed:A,watch:p}=Vue,{currentUser:d,selectedDate:x,stockDetail:o,stockDetailTab:M,stockDetailVisible:q,stockDetailLoading:R,stockKlineLoaded:E,viewCache:D,animateScoreEntrance:N,loadStockKline:T,refreshStockScore:u,disposeStockKline:i,aiHistory:m,aiLoading:H,aiEvalStage:j,aiEvalElapsed:K,aiEvalError:Y,aiResult:se,loadLastEvaluation:F,autoEvaluateConfig:z,autoEvaluateScope:U,batchStocks:W,batchRunning:le,batchTotal:Q,batchCompleted:s,batchCurrent:w,batchStatuses:l,batchResults:_,batchEvalErrors:h,expandedDates:k,expandedStocks:Z,savingConfig:L,selectedHistoryIds:b,selectedWatchlistCodes:r,showAutoEvaluateSettings:S,showBatchEvaluate:c}=v,O=n=>(getComputedStyle(document.documentElement).getPropertyValue(n)||"").trim(),re=f(""),X=f("default"),P=f("default"),G=f([]),oe=A(()=>new Set(G.value.map(n=>n.code))),fe=f(!1),Me=f(!1),ee=A(()=>{const n=[...G.value];return P.value==="name"?n.sort((B,ie)=>B.name.localeCompare(ie.name,"zh")):P.value==="added"?n.sort((B,ie)=>(ie.added_at||"").localeCompare(B.added_at||"")):P.value==="score"&&n.sort((B,ie)=>{const Ce=me(B.code);return me(ie.code)-Ce}),n});function ue(n){const B=m.value.filter(Ce=>Ce.stock_code===n);if(B.length===0)return null;const ie=B.reduce((Ce,Ee)=>Ce.evaluate_time>Ee.evaluate_time?Ce:Ee);return{score:ie.result.total_score,color:y(ie.result.level),bg:e(ie.result.level)}}function me(n){const B=ue(n);return B?B.score:0}function pe(n){ce(n.code,n.name),ne.value=ne.value.filter(B=>B.code!==n.code),Pe.value=""}const he=A(()=>new Set(m.value.map(n=>n.stock_code))),te=f(new Set);function xe(n){te.value.add(n)}const Pe=f(""),ne=f([]),ae=f(!1),ye=f({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),Ne=f(!1),Ie=f(!1),We=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};We.REALTIME_WS_PATH;const Ue=We.REALTIME_DEGRADED_TEXT||"数据不可达",wt=We.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";We.WARN_RISE_SPEED_THRESHOLD!=null&&We.WARN_RISE_SPEED_THRESHOLD,We.WARN_VOLUME_RATIO_THRESHOLD!=null&&We.WARN_VOLUME_RATIO_THRESHOLD;const st=We.quoteFmt||{price:n=>n==null?"--":Number(n).toFixed(2),pct:n=>n==null?"--":Number(n).toFixed(2)+"%",num:n=>n==null?"--":Number(n).toFixed(2),color:n=>""},At=3,Se=5e3,_e=f({}),Le=f(!1),Ae=f("idle");let $e=null,Ze=null,tt=0;function Dt(n){return We.checkQuoteWarning?We.checkQuoteWarning(n):null}function Pt(n){return Dt(_e.value[n])}function ft(n){return st.color(_e.value[n])}function Lt(n){return st.price(_e.value[n]&&_e.value[n].price)}function Ut(n){return st.pct(_e.value[n]&&_e.value[n].change_pct)}function Qt(n,B){return st.num(_e.value[n]&&_e.value[n][B])}function et(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function kt(){if(!$e||$e.readyState!==1)return;const n=(G.value||[]).map(B=>B.code);n.length!==0&&$e.send(JSON.stringify({subscribe:n}))}function Gt(){if(Ze&&(clearTimeout(Ze),Ze=null),$e){try{$e.onopen=null,$e.onmessage=null,$e.onerror=null,$e.onclose=null,$e.close()}catch{}$e=null}_e.value={},Le.value=!1,Ae.value="idle"}function ht(){const n=et();if(!n||!We.buildRealtimeWsUrl||Ae.value==="open"||Ae.value==="connecting")return;let B;try{B=We.buildRealtimeWsUrl()+"?token="+encodeURIComponent(n)}catch{Ae.value="offline",Le.value=!0;return}Ae.value="connecting";let ie=null;try{ie=new WebSocket(B)}catch{Ae.value="offline",Le.value=!0;return}$e=ie,ie.onopen=function(){Ae.value="open",tt=0,kt()},ie.onmessage=function(Ce){let Ee=null;try{Ee=JSON.parse(Ce.data||"{}")}catch{return}if(!Ee||Ee.type!=="quotes")return;if(Le.value=!!Ee.degraded,Ee.degraded||!Array.isArray(Ee.data)){_e.value={};return}const pt={};Ee.data.forEach(function(Ye){Ye&&Ye.code&&(pt[Ye.code]=Ye)}),_e.value=pt},ie.onerror=function(){Ae.value="offline",Le.value=!0},ie.onclose=function(){Ae.value="offline",tt<At?(tt++,Ze=setTimeout(function(){Ae.value!=="open"&&ht()},Se*tt)):Le.value=!0}}p(G,function(){Ae.value==="open"&&kt()}),et()&&setTimeout(ht,500);async function Yt(){if(!o.value)return;H.value=!0,se.value=null,Y.value="",j.value="fetching",K.value=0;const n=Date.now(),B=setInterval(()=>{H.value&&(K.value=Math.round((Date.now()-n)/1e3))},500);try{const ie=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:o.value.stock,stock_name:o.value.name||o.value.stock,strategy:X.value})});j.value="calculating";const Ce=await ie.json();j.value="analyzing",Ce.success?(await nextTick(),se.value=Ce.data,M.value="ai",$()):(Y.value=Ce.message||"评估失败",ElementPlus.ElMessage.error(Y.value))}catch(ie){Y.value=ie&&ie.message&&!String(ie.message).includes("Failed to fetch")?ie.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(Y.value)}finally{clearInterval(B),H.value=!1,K.value=0,Y.value?j.value="":(j.value="done",setTimeout(()=>{j.value==="done"&&(j.value="")},800))}}const Et=50,Qe=f(0),It=f(!1),xt=A(()=>m.value.length<Qe.value);async function $(){fe.value=!0,Me.value=!1;try{if(!localStorage.getItem("quant_token")){m.value=[];return}const B=await fetch(`/api/ai/history?limit=${Et}&offset=0`);if(B.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),d.value=null;return}const ie=await B.json();ie.success?(m.value=ie.data||[],Qe.value=ie.total!=null?ie.total:m.value.length):Me.value=!0}catch(n){console.error("[loadAiHistory] error:",n),Me.value=!0}finally{fe.value=!1}}async function ge(){if(!(It.value||!xt.value)){It.value=!0;try{const B=await(await fetch(`/api/ai/history?limit=${Et}&offset=${m.value.length}`)).json();if(B.success&&Array.isArray(B.data)){const ie=new Set(m.value.map(Ee=>Ee.id)),Ce=B.data.filter(Ee=>!ie.has(Ee.id));m.value=m.value.concat(Ce),B.total!=null&&(Qe.value=B.total)}}catch(n){console.warn("[loadMoreAiHistory] error:",n)}finally{It.value=!1}}}async function at(n){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const ie=await(await fetch(`/api/ai/history/${n}`,{method:"DELETE"})).json();if(ie.success){ElementPlus.ElMessage.success("删除成功"),$();const Ce=b.value.indexOf(n);Ce>=0&&b.value.splice(Ce,1)}else ElementPlus.ElMessage.error(ie.message||"删除失败")}catch{}}function St(n){const B=b.value.indexOf(n);B>=0?b.value.splice(B,1):b.value.push(n)}function it(){b.value=[]}function Ot(){r.value=[]}async function ta(){const n=b.value;if(n.length===0)return;const B=m.value.filter(ie=>n.includes(ie.id)).map(ie=>ie.stock_code);c.value=!0,W.value=[...new Set(B)].join(",")}async function ia(){const n=b.value;if(n.length===0)return;const B=m.value.filter(Ee=>n.includes(Ee.id)),ie=[...new Map(B.map(Ee=>[Ee.stock_code,Ee])).values()];let Ce=0;for(const Ee of ie)oe.value.has(Ee.stock_code)||(await ce(Ee.stock_code,Ee.stock_name||Ee.stock_code),Ce++);Ce>0?ElementPlus.ElMessage.success(`已加入 ${Ce} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function ra(){const n=b.value;if(n.length===0)return;const B=m.value.filter(Ce=>n.includes(Ce.id)),ie=[...new Map(B.map(Ce=>[Ce.stock_code,Ce])).values()];try{const Ee=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:ie.map(pt=>({stock_code:pt.stock_code,stock_name:pt.stock_name||""}))})})).json();Ee&&Ee.success?ElementPlus.ElMessage.success(`已登记 ${Ee.count||ie.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(Ee&&Ee.detail||"批量加入组合失败")}catch(Ce){console.warn("batchAddToPortfolio failed:",Ce),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function aa(){if(r.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${r.value.length} 只股票？`,"提示",{type:"warning"});for(const n of r.value)await Te(n);r.value=[],ElementPlus.ElMessage.success("已移除")}catch(n){n&&n.message!=="cancel"&&console.warn("batchRemoveWatchlist:",n)}}function $t(n){const B=r.value.indexOf(n);B>=0?r.value.splice(B,1):r.value.push(n)}function Wt(){b.value.length===m.value.length?b.value=[]:b.value=m.value.map(n=>n.id)}function jt(){r.value.length===G.value.length?r.value=[]:r.value=G.value.map(n=>n.code)}async function Jt(){if(b.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${b.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const B=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:b.value})})).json();B.success?(ElementPlus.ElMessage.success(B.message),b.value=[],$()):ElementPlus.ElMessage.error(B.message||"删除失败")}catch{}}async function gt(){try{const B=await(await fetch("/api/ai/auto-config")).json();B.success&&(z.value=B.data,B.data.evaluate_scope&&(U.value=B.data.evaluate_scope))}catch(n){console.warn("loadAutoEvaluateConfig failed:",n)}}async function rt(){L.value=!0;try{z.value.evaluate_scope=U.value;const B=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(z.value)})).json();B.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),S.value=!1):ElementPlus.ElMessage.error(B.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{L.value=!1}}const g=f(!1);async function J(){g.value=!0;try{const B=await(await fetch("/api/watchlist")).json();B.success&&(G.value=B.stocks||[])}catch(n){console.warn("loadWatchlist failed:",n)}finally{g.value=!1}}async function ce(n,B){try{const Ce=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n,name:B})})).json();if(Ce.success)return Ce.existed||G.value.push({code:n,name:B,added_at:new Date().toISOString()}),!0}catch(ie){console.warn("addToWatchlist failed:",ie)}return!1}async function Te(n){try{await fetch(`/api/watchlist/${encodeURIComponent(n)}`,{method:"DELETE"}),G.value=G.value.filter(B=>B.code!==n)}catch(B){console.warn("removeFromWatchlist failed:",B)}}async function je(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"}),await fetch("/api/watchlist",{method:"DELETE"}),G.value=[],ElementPlus.ElMessage.success("自选已清空")}catch(n){console.warn("clearWatchlist failed:",n)}}async function Fe(n,B){oe.value.has(n)?(await Te(n),ElementPlus.ElMessage.info("已移除自选")):await ce(n,B)&&ElementPlus.ElMessage.success("已加入自选")}async function Ke(n,B){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(n,B||"");const ie=new Date().toISOString().split("T")[0],Ce=x.value||ie;M.value="kline",se.value=null,Y.value="",i("stockKlineChart"),o.value=null,R.value=!0,E.value=!1,q.value=!0,nextTick(()=>N());try{const Ee=await fetch(`/api/calendar/stock/${encodeURIComponent(n)}?date=${Ce}`);o.value=await Ee.json()}catch{o.value={stock:n,name:B,total_days:0}}finally{R.value=!1}await nextTick(),await T("daily"),u(),F(n)}const ct=f(!1);async function ot(){var n;if(G.value.length!==0){ct.value=!0;try{const ie=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ie.success&&ie.loaded>0?(((n=ie.details)==null?void 0:n.loaded)||[]).forEach(Ce=>te.value.add(Ce.code)):ie.loaded===0&&ie.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(B){console.error("预加载K线失败:",B)}finally{ct.value=!1}}}async function ut(n,B){H.value=!0,se.value=null,Y.value="",j.value="fetching",E.value=!1,i();const ie=new Date().toISOString().split("T")[0],Ce=x.value||ie;try{const Ee=await fetch(`/api/calendar/stock/${encodeURIComponent(n)}?date=${Ce}`);o.value=await Ee.json()}catch{o.value={stock:n,name:B,total_days:0}}M.value="ai",q.value=!0,await nextTick();try{const pt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:n,stock_name:B})})).json();pt.success?(se.value=pt.data,$()):(Y.value=pt.message||"评估失败",ElementPlus.ElMessage.error(Y.value))}catch{Y.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(Y.value)}finally{H.value=!1,j.value=""}}async function zt(){G.value.length!==0&&(c.value=!0,W.value=G.value.map(n=>n.code).join(","))}async function I(){r.value.length!==0&&(c.value=!0,W.value=r.value.join(","))}async function ke(){if(!Pe.value.trim()){ne.value=[];return}ae.value=!0;try{const B=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(Pe.value)}`)).json();ne.value=(B.results||[]).filter(ie=>!oe.value.has(ie.code))}catch(n){console.warn("searchStockForWatchlist failed:",n)}finally{ae.value=!1}}async function ze(){try{const B=await(await fetch("/api/data-refresh/config")).json();ye.value=B}catch(n){console.error("加载数据刷新配置失败:",n)}}async function De(){Ie.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ye.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{Ie.value=!1}}async function Ge(){var n;Ne.value=!0;try{const ie=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();ie.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((n=ie.parser_stats)==null?void 0:n.dates_count)||0}交易日`),D.clear(),await ze()):ElementPlus.ElMessage.error(ie.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{Ne.value=!1}}const Re=f(!1);async function Xe(){Re.value=!0;try{const B=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(B.success){const ie=B.result||{},Ce=B.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${ie.pulled||0}/${ie.total||0}, 财务 ${Ce.pulled||0}/${Ce.total||0}`),D.clear(),await ze()}else ElementPlus.ElMessage.error(B.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{Re.value=!1}}const yt=A(()=>{const n={};for(const B of m.value){const ie=(B.evaluate_time||"").split("T")[0];n[ie]||(n[ie]=[]),n[ie].push(B)}for(const B in n)n[B].sort((ie,Ce)=>Ce.evaluate_time.localeCompare(ie.evaluate_time));return n}),Mt=A(()=>{const n={};for(const B of m.value){const ie=B.stock_code;n[ie]||(n[ie]=[]),n[ie].push(B)}for(const B in n)n[B].sort((ie,Ce)=>Ce.evaluate_time.localeCompare(ie.evaluate_time));return n}),bt=A(()=>{const n={};for(const B of m.value){const ie=(B.evaluate_time||"").split("T")[0].slice(0,7);n[ie]||(n[ie]=[]),n[ie].push(B)}for(const B in n)n[B].sort((ie,Ce)=>Ce.evaluate_time.localeCompare(ie.evaluate_time));return n}),Xt=A(()=>Object.keys(Mt.value).length),ba=A(()=>{const n=m.value.length;return n===0?[]:[{label:"90+",min:90,max:100,color:"var(--success-text)"},{label:"80-89",min:80,max:89,color:"var(--success-text)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--success-text) 55%, var(--bg-card))"},{label:"60-69",min:60,max:69,color:"var(--warning-text)"},{label:"<60",min:0,max:59,color:"var(--danger-text)"}].map(ie=>{const Ce=m.value.filter(Ee=>Ee.result.total_score>=ie.min&&Ee.result.total_score<=ie.max).length;return{...ie,count:Ce,pct:Math.round(Ce/n*100)}})});async function ca(){if(!re.value)return;const n=G.value.find(B=>B.code===re.value);if(n){H.value=!0,se.value=null,Y.value="",j.value="fetching";try{o.value={stock:n.code,name:n.name,total_days:0},q.value=!0,M.value="ai",await nextTick();const ie=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:n.code,stock_name:n.name,strategy:X.value})})).json();ie.success?(se.value=ie.data,$(),re.value=""):(Y.value=ie.message||"评估失败",ElementPlus.ElMessage.error(Y.value))}catch{Y.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(Y.value)}finally{H.value=!1,j.value=""}}}function Pa(n){const B=k.value.indexOf(n);B>=0?k.value.splice(B,1):k.value.push(n)}function ua(n){const ie=(yt.value[n]||[]).map(Ee=>Ee.id);ie.every(Ee=>b.value.includes(Ee))?b.value=b.value.filter(Ee=>!ie.includes(Ee)):ie.forEach(Ee=>{b.value.includes(Ee)||b.value.push(Ee)})}function Ra(n){const ie=(bt.value[n]||[]).map(Ee=>Ee.id);ie.every(Ee=>b.value.includes(Ee))?b.value=b.value.filter(Ee=>!ie.includes(Ee)):ie.forEach(Ee=>{b.value.includes(Ee)||b.value.push(Ee)})}function va(n){const B=Z.value.indexOf(n);B>=0?Z.value.splice(B,1):Z.value.push(n)}function qa(n){const ie=(Mt.value[n]||[]).map(Ee=>Ee.id);ie.every(Ee=>b.value.includes(Ee))?b.value=b.value.filter(Ee=>!ie.includes(Ee)):ie.forEach(Ee=>{b.value.includes(Ee)||b.value.push(Ee)})}const Ht={},wa={};function Ea(n,B,ie){if(!n||(ie&&(wa[B]={el:n,records:ie}),Ht[B]===n))return;const Ce=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Ee=()=>{Object.keys(Ht).forEach(nt=>{if(Ht[nt]&&Ht[nt]!==n){try{Ht[nt].dispose()}catch{}delete Ht[nt]}});const pt=[...ie].sort((nt,Bt)=>nt.evaluate_time.localeCompare(Bt.evaluate_time)),Ye=pt.map(nt=>(nt.evaluate_time||"").split("T")[0]),Ct=pt.map(nt=>{var Bt;return((Bt=nt.result)==null?void 0:Bt.total_score)??null}),sa=pt.map(nt=>{var Bt;return((Bt=nt.result)==null?void 0:Bt.level)??""}),Rt={primary:O("--qc-primary-600")||"#b8922a",textPrimary:O("--text-primary")||"#1f2937",textSecondary:O("--text-secondary")||"#6b7280",border:O("--chart-axis")||"#b9b2a6",axis:O("--chart-axis")||"#b9b2a6",split:O("--chart-split")||"#e7e1d6",up:O("--qc-market-up")||"#e63946",down:O("--qc-market-down")||"#2e7d32"},na=[];for(let nt=1;nt<Ct.length;nt++)Ct[nt]!=null&&Ct[nt-1]!=null&&Math.abs(Ct[nt]-Ct[nt-1])>=15&&na.push({name:"大幅变化",coord:[Ye[nt],Ct[nt]],value:(Ct[nt]-Ct[nt-1]>0?"↑":"↓")+Math.abs(Ct[nt]-Ct[nt-1]),symbol:"pin",symbolSize:32,itemStyle:{color:Ct[nt]-Ct[nt-1]>0?Rt.up:Rt.down}});const la=echarts.init(n),qt=window.__quantModules&&window.__quantModules.echartsTheme;qt&&typeof qt.getEChartsTheme=="function"&&la.setOption(qt.getEChartsTheme()),la.setOption({tooltip:{trigger:"axis",backgroundColor:O("--bg-card")||"#ffffff",borderColor:Rt.border,textStyle:{color:Rt.textPrimary},formatter:function(nt){var _t;const Bt=(_t=nt[0])==null?void 0:_t.dataIndex,ha=Bt!=null?sa[Bt]:"";return Ye[Bt]+"<br/>得分: "+Ct[Bt]+(ha?" ("+ha+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:Ye,axisLabel:{fontSize:10,rotate:30,color:Rt.textSecondary},axisLine:{lineStyle:{color:Rt.axis}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:Rt.textSecondary},splitLine:{lineStyle:{color:Rt.split}}},series:[{data:Ct,type:"line",smooth:!0,lineStyle:{color:Rt.primary,width:2},itemStyle:{color:Rt.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:O("--primary-rgb")?"rgba("+O("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:O("--primary-rgb")?"rgba("+O("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:na.length>0?{data:na}:void 0}]}),Ht[B]=la};Ce?Ce().then(Ee).catch(()=>{}):Ee()}function za(){Object.keys(wa).forEach(n=>{const B=wa[n];if(!(!B||!B.el)){if(Ht[n]){try{Ht[n].dispose()}catch{}delete Ht[n]}Ea(B.el,n,B.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(za));async function ka(n){se.value=n,E.value=!1,i();try{const B=await fetch(`/api/calendar/stock/${n.stock_code}?date=${x.value}`);o.value=await B.json()}catch{o.value={stock:n.stock_code,name:n.stock_name||n.stock_code,total_days:0,history:[]}}q.value=!0,M.value="ai"}async function C(){if(!W.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const n=W.value.split(/[,，\s]+/).filter(Ye=>Ye.trim());if(n.length===0)return;le.value=!0,Q.value=n.length,s.value=0,w.value="",l.value={},_.value={},h.value={},n.forEach(Ye=>{l.value[Ye]="pending",_.value[Ye]=null});const B={"Content-Type":"application/json"};let ie=0,Ce=0,Ee=!1;try{const Ye=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:B,body:JSON.stringify({stock_codes:n})});if(Ye.ok&&Ye.body){Ee=!0;const Ct=Ye.body.getReader(),sa=new TextDecoder("utf-8");let Rt="",na=!1;for(;!na;){const{value:la,done:qt}=await Ct.read();na=qt,Rt+=sa.decode(la||new Uint8Array,{stream:!na});let nt;for(;(nt=Rt.indexOf(`

`))>=0;){const Bt=Rt.slice(0,nt);Rt=Rt.slice(nt+2);const ha=Bt.split(`
`).find(Ia=>Ia.startsWith("data: "));if(!ha)continue;let _t;try{_t=JSON.parse(ha.slice(6))}catch{continue}_t.type==="start"?_t.total&&(Q.value=_t.total):_t.type==="item"?(s.value++,w.value=_t.stock_code,_t.success?(l.value[_t.stock_code]="success",_.value[_t.stock_code]=_t,ie++):(l.value[_t.stock_code]="error",h.value[_t.stock_code]=_t.error||"评估失败",Ce++)):_t.type==="done"&&(typeof _t.success=="number"&&(ie=_t.success),typeof _t.fail=="number"&&(Ce=_t.fail))}}if(Rt.trim()){const la=Rt.split(`
`).find(qt=>qt.startsWith("data: "));if(la)try{const qt=JSON.parse(la.slice(6));qt.type==="item"?(s.value++,w.value=qt.stock_code,qt.success?(l.value[qt.stock_code]="success",_.value[qt.stock_code]=qt,ie++):(l.value[qt.stock_code]="error",h.value[qt.stock_code]=qt.error||"评估失败",Ce++)):qt.type==="done"&&(typeof qt.success=="number"&&(ie=qt.success),typeof qt.fail=="number"&&(Ce=qt.fail))}catch{}}}}catch{Ee=!1}if(!Ee){ie=0,Ce=0,s.value=0;for(const Ye of n){w.value=Ye,l.value[Ye]="running";try{const sa=await(await fetch("/api/ai/evaluate",{method:"POST",headers:B,body:JSON.stringify({stock_code:Ye.trim(),stock_name:Ye.trim()})})).json();sa.success?(l.value[Ye]="success",_.value[Ye]=sa.data,ie++):(l.value[Ye]="error",h.value[Ye]=sa.message&&sa.message!=="success"?sa.message:"评估失败",Ce++)}catch(Ct){l.value[Ye]="error",h.value[Ye]="网络错误: "+(Ct&&Ct.message?Ct.message:Ct),Ce++}s.value++}}w.value="",await $();const pt=n.length;setTimeout(()=>{Ce===0?ElementPlus.ElMessage.success(`评估完成 成功 ${ie}/${pt}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${ie}/${pt} · 失败 ${Ce}`),le.value=!1},500)}return{quickEvalStock:re,evalStrategy:X,watchlistSort:P,watchlist:G,watchlistCodes:oe,sortedWatchlist:ee,getWatchlistScore:ue,getLatestScore:me,addSearchResult:pe,evaluatedCodes:he,klineLoadedCodes:te,markKlineLoaded:xe,watchlistSearch:Pe,watchlistResults:ne,watchlistSearching:ae,dataRefreshConfig:ye,dataRefreshReloading:Ne,dataRefreshSaving:Ie,aiHistoryLoading:fe,aiHistoryError:Me,aiHistoryTotal:Qe,aiHistoryLoadingMore:It,hasMoreAiHistory:xt,loadMoreAiHistory:ge,watchlistLoading:g,doAiEvaluate:Yt,loadAiHistory:$,deleteSingleHistory:at,toggleSelectHistory:St,clearSelection:it,clearWatchlistSelection:Ot,batchReevaluateHistory:ta,batchAddToWatchlist:ia,batchAddToPortfolio:ra,batchRemoveWatchlist:aa,toggleSelectWatchlist:$t,selectAllHistory:Wt,selectAllWatchlist:jt,deleteSelectedHistory:Jt,loadAutoEvaluateConfig:gt,saveAutoEvaluateConfig:rt,loadWatchlist:J,addToWatchlist:ce,removeFromWatchlist:Te,clearWatchlist:je,toggleWatchlist:Fe,showStockKline:Ke,preloadingKline:ct,preloadWatchlistKline:ot,watchlistEvaluate:ut,batchEvaluateWatchlist:zt,batchEvaluateSelected:I,searchStockForWatchlist:ke,loadDataRefreshConfig:ze,saveDataRefreshConfig:De,triggerDataReload:Ge,triggerDataPull:Xe,dataPullRunning:Re,groupedByDate:yt,aiHistoryByStock:Mt,groupedByMonth:bt,aiHistoryStockCount:Xt,scoreDistribution:ba,quickEvaluate:ca,toggleDateExpand:Pa,toggleSelectDate:ua,toggleSelectMonth:Ra,toggleStockExpand:va,toggleSelectStock:qa,registerTrendChart:Ea,viewAiResult:ka,doBatchEvaluate:C,realtimeQuotes:_e,realtimeDegraded:Le,realtimeWsState:Ae,connectRealtimeQuotes:ht,disconnectRealtimeQuotes:Gt,quoteWarningFor:Pt,realtimeQuoteColor:ft,realtimePriceText:Lt,realtimePctText:Ut,realtimeRatioText:Qt,REALTIME_DEGRADED_TEXT:Ue,REALTIME_FALLBACK_TEXT:wt}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:t,computed:y}=Vue,e=t([]),v=t(null),f=t([]),A=t(!1),p=t(!1),d=t(!1),x=t({stock_code:"",stock_name:"",cost_price:null,quantity:null}),o=t(!1),M=t(!1),q=t({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),R=t(!1),E=t("positions"),D=t(30),N=t(!1),T=t(""),u=t(!1),i=t({dates:[],equity:[],values:[]}),m=y(()=>e.value.length),H=t("metrics"),j=t(!1),K=t(""),Y=t(!1),se=t({metrics:null,rules:[],rebalance:null}),F=y(function(){const c=se.value.metrics;if(!c)return[];const O=function(X){return X==null?"--":Number(X).toFixed(2)+"%"},re=function(X){return X==null?"--":Number(X).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:O(c.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:O(c.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:O(c.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:O(c.cvar)},{key:"max_drawdown",label:"最大回撤",value:O(c.max_drawdown)},{key:"annual_return",label:"年化收益",value:O(c.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:re(c.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:re(c.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:re(c.calmar_ratio)},{key:"beta",label:"Beta",value:re(c.beta)}]});async function z(){j.value=!0;try{const c=await(await fetch("/api/portfolio/risk?days=60")).json(),O=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),re=c&&c.success?c.risk:null,X=O&&O.success?O.rules||[]:[],P=O&&O.success?O.rebalance:null;se.value={metrics:re,rules:X,rebalance:P},Y.value=!!(re&&Object.keys(re).length>0),K.value=c&&c.note||O&&O.note||""}catch(c){console.warn("[portfolio] 加载风险数据失败:",c),Y.value=!1,K.value="风险数据加载失败"}finally{j.value=!1}}async function U(){A.value=!0,p.value=!1;try{const O=await(await fetch("/api/portfolio")).json();O.success?(e.value=O.positions||[],v.value=O.summary||null):p.value=!0}catch(c){console.warn("[portfolio] 加载持仓失败:",c),p.value=!0}finally{A.value=!1}}async function W(){const c=x.value,O=(c.stock_code||"").trim();if(!O){ElementPlus.ElMessage.warning("请输入股票代码");return}const re=Number(c.cost_price),X=Number(c.quantity);if(!(re>0)||!(X>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}o.value=!0;try{const G=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:O,stock_name:(c.stock_name||"").trim(),cost_price:re,quantity:X})})).json();G.success?(ElementPlus.ElMessage.success(G.message||"持仓已更新"),d.value=!1,x.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await U(),L(D.value)):ElementPlus.ElMessage.error(G.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{o.value=!1}}async function le(c){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+c+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const re=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(c),{method:"DELETE"})).json();re.success?(ElementPlus.ElMessage.success("已删除持仓"),await U(),w(),L(D.value)):ElementPlus.ElMessage.error(re.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function Q(c,O){q.value={stock_code:c,stock_name:O||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},M.value=!0}async function s(){const c=q.value;if(!c.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const O=Number(c.price),re=Number(c.quantity);if(!(O>0)||!(re>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}R.value=!0;try{const P=await(await fetch("/api/portfolio/trades",{method:"POST",headers:_authHeaders(),body:JSON.stringify({stock_code:c.stock_code,stock_name:c.stock_name||"",action:c.action,price:O,quantity:re,trade_date:c.trade_date||"",note:(c.note||"").trim()})})).json();P.success?(ElementPlus.ElMessage.success(P.message||"调仓已记录"),M.value=!1,await U(),await w(),L(D.value)):ElementPlus.ElMessage.error(P.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{R.value=!1}}async function w(){try{const O=await(await fetch("/api/portfolio/trades")).json();O.success&&(f.value=O.trades||[])}catch(c){console.warn("[portfolio] 加载调仓记录失败:",c)}}const l=c=>(getComputedStyle(document.documentElement).getPropertyValue(c)||"").trim();function _(c){if(!c||!c.length)return[];let O=c[0]||0;const re=[];for(let X=0;X<c.length;X++){const P=c[X]||0;P>O&&(O=P),re.push(O>0?Math.round((P-O)/O*1e3)/10:0)}return re}function h(){const c={primary:l("--qc-primary-600")||"#b8922a",textPrimary:l("--text-primary")||"#1f2937",textSecondary:l("--text-secondary")||"#6b7280",border:l("--border-light")||"#e5e7eb",up:l("--color-rise")||"#E63946",down:l("--color-fall")||"#2E7D32"},O=i.value;return{tooltip:{trigger:"axis",backgroundColor:l("--bg-card")||"#ffffff",borderColor:c.border,textStyle:{color:c.textPrimary},formatter:function(re){const X=re[0]?re[0].dataIndex:-1,P=O.dates[X]||"",G=O.equity[X],oe=O.values[X];let fe=P||"";return G!=null&&(fe+="<br/>组合净值: "+G),oe!=null&&(fe+="<br/>组合市值: "+oe),fe}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:O.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:c.textSecondary},axisLine:{lineStyle:{color:c.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:c.textSecondary},splitLine:{lineStyle:{color:c.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:c.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:O.equity,smooth:!0,showSymbol:!1,lineStyle:{color:c.primary,width:2},itemStyle:{color:c.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:l("--primary-rgb")?"rgba("+l("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:l("--primary-rgb")?"rgba("+l("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:_(O.equity),smooth:!0,showSymbol:!1,lineStyle:{color:c.down,width:1.5},itemStyle:{color:c.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function k(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function Z(c,O,re){i.value={dates:c||[],equity:O||[],values:re||[]},u.value=!!c&&c.length>0,u.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",h,{key:"portfolio-equity"}):k()}async function L(c){N.value=!0,T.value="";const O=Number(c)||D.value||30;D.value=O;try{const X=await(await fetch("/api/portfolio/equity_curve?days="+O)).json();X.success?(T.value=X.note||"",Z(X.dates||[],X.equity||[],X.values||[])):(T.value="数据暂不可用",k())}catch(re){console.warn("[portfolio] 加载收益曲线失败:",re),T.value="数据暂不可用",k()}finally{N.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function b(c,O){if(c==null||c===""||isNaN(Number(c)))return"--";const re=Number(c),X=O??2;return(re>=0?"+":"")+re.toFixed(X)}function r(c,O){if(c==null||c===""||isNaN(Number(c)))return"--";const re=Number(c),X=O??2;return(re>=0?"+":"")+re.toFixed(X)+"%"}function S(c){if(c==null||c===""||isNaN(Number(c)))return"";const O=Number(c);return O>0?"portfolio-up":O<0?"portfolio-down":""}return{positions:e,summary:v,trades:f,loading:A,loadError:p,showAddForm:d,addForm:x,addSaving:o,tradeFormVisible:M,tradeForm:q,tradeSaving:R,portfolioTab:E,equityDays:D,equityLoading:N,equityNote:T,equityHasData:u,portfolioCount:m,loadPortfolio:U,addPosition:W,removePosition:le,openTradeForm:Q,submitTrade:s,loadTrades:w,loadEquity:L,fmtSigned:b,fmtSignedPct:r,signClass:S,riskTab:H,riskLoading:j,riskNote:K,riskHasData:Y,riskData:se,riskMetricList:F,loadRisk:z}}}})();(function(a,t){typeof Oe=="object"&&Oe.exports?Oe.exports=t():a.QuantBacktest=t()})(typeof self<"u"?self:void 0,function(){function a(d,x){var o=Number(d);return isFinite(o)?o:typeof x=="number"?x:0}function t(d){var x=Array.isArray(d)?d:[];if(x.length<2)return null;for(var o=-1/0,M=0,q=0,R=0,E=0,D=0;D<x.length;D++){var N=a(x[D].equity!=null?x[D].equity:x[D].value);N>o&&(o=N,M=D);var T=o>0?(o-N)/o*100:0;T>q&&(q=T,R=M,E=D)}function u(i){return x[i]&&x[i].date?x[i].date:""}return{maxDrawdown:Math.round(q*100)/100,peakIndex:R,troughIndex:E,peakDate:u(R),troughDate:u(E)}}function y(d){for(var x=d||{},o={},M=Object.keys(x).sort(),q=0;q<M.length;q++){var R=M[q],E=String(R).slice(0,4);/^\d{4}$/.test(E)&&(o[E]=(o[E]||0)+a(x[R]))}var D=Object.keys(o).sort();return D.map(function(N){return{year:N,return:Math.round(o[N]*100)/100}})}function e(d){var x=Array.isArray(d)?d:[],o={};x.forEach(function(R){(R.points||[]).forEach(function(E){E&&E.date&&(o[E.date]=1)})});var M=Object.keys(o).sort(),q=x.map(function(R){var E={};return(R.points||[]).forEach(function(D){D&&D.date&&(E[D.date]=a(D.value!=null?D.value:D.equity))}),{name:R.name||"",data:M.map(function(D){return D in E?E[D]:null})}});return{dates:M,series:q}}function v(d){var x=d||{},o=function(q){return a(q)},M=function(q,R){var E=o(q);return isFinite(E)?E.toFixed(R):"--"};return[{key:"total_return",label:"总收益",value:M(x.total_return,2),suffix:"%",dir:o(x.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:M(x.annual_return,2),suffix:"%",dir:o(x.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:M(x.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:M(x.sharpe_ratio,2),suffix:"",dir:o(x.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:M(x.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:M(x.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(o(x.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:M(x.volatility,2),suffix:"%",dir:""}]}function f(d){var x=d==null?"":String(d);return/[",\n]/.test(x)?'"'+x.replace(/"/g,'""')+'"':x}function A(d){var x=d||{},o=[];o.push("回测指标"),o.push("指标,数值"),(x.metrics||[]).forEach(function(u){o.push(f(u.label)+","+f((u.value||"")+(u.suffix||"")))}),o.push(""),o.push("净值曲线");var M=["日期"].concat((x.series||[]).map(function(u){return u.name}));o.push(M.map(f).join(","));for(var q=x.dates||[],R=x.series||[],E=0;E<q.length;E++){for(var D=[q[E]],N=0;N<R.length;N++){var T=R[N].data&&R[N].data[E];D.push(T??"")}o.push(D.map(f).join(","))}return o.push(""),o.push("交易明细"),o.push("日期,股票代码,方向,原因"),(x.trades||[]).forEach(function(u){o.push(f(u.date)+","+f(u.stock)+","+f(u.action)+","+f(u.reason))}),o.join(`
`)}function p(d){return d==="buy"?"买入":d==="sell"?"卖出":d||""}return{toNum:a,computeMaxDrawdownRegion:t,buildAnnualReturns:y,buildNavSeries:e,buildMetrics:v,buildBacktestCsv:A,tradeActionText:p}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:t,computed:y}=Vue,e=window.QuantBacktest||{},v=a||{},f=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],p=(Array.isArray(v.backtestStrategies)&&v.backtestStrategies.length?v.backtestStrategies:f).map(l=>({id:l.id,name:l.name})),d=t(p.length?[p[0].id]:[]),x=t(N()),o=t(1e5),M=t(3e-4),q=t(!1),R=t(!1),E=t(null),D=t("");function N(){const l=new Date,_=new Date;_.setFullYear(_.getFullYear()-1);const h=k=>k.getFullYear()+"-"+String(k.getMonth()+1).padStart(2,"0")+"-"+String(k.getDate()).padStart(2,"0");return[h(_),h(l)]}function T(l){const _=d.value.indexOf(l);_>=0?d.value.length>1&&d.value.splice(_,1):d.value.push(l)}function u(l){const _=p.find(h=>h.id===l);return _?_.name:l}function i(l){const _=l.summary||l;return{strategy_id:_.strategy_id,start_date:_.start_date,end_date:_.end_date,total_days:_.total_days,total_return:_.total_return,annual_return:_.annual_return,max_drawdown:_.max_drawdown,volatility:_.volatility,sharpe_ratio:_.sharpe_ratio,sortino_ratio:_.sortino_ratio,win_rate:_.win_rate,profit_loss_ratio:_.profit_loss_ratio,avg_positions:_.avg_positions!=null?_.avg_positions:_.avg_positions_per_day,total_trades:_.total_trades,turnover_rate:_.turnover_rate,success:_.success!==!1,message:_.message||"",insample_total_return:_.insample_total_return!=null?_.insample_total_return:null,outsample_total_return:_.outsample_total_return!=null?_.outsample_total_return:null,out_sample_ratio:_.out_sample_ratio!=null?_.out_sample_ratio:.2,overfit_warning:!!_.overfit_warning,overfit_reason:_.overfit_reason||""}}function m(l){return(Array.isArray(l)?l:[]).map(_=>({date:_.date,value:_.equity!=null?_.equity:_.value}))}function H(l,_){const h=i(_),k=m(_.equity_curve),Z=_.monthly_returns||{},L=Array.isArray(_.trade_history)?_.trade_history:[],b={id:l,name:u(l),summary:h,equityCurve:k,monthlyReturns:Z,trades:L};let r=null;if(q.value){const S=Number(o.value)||1e5;r={name:"现金基准",points:k.map(c=>({date:c.date,value:S}))}}return{success:!0,mode:"single",strategies:[b],primary:b,benchmark:r,period:(h.start_date||"")+" ~ "+(h.end_date||"")}}function j(l,_){const h=_.strategy_results||{},k=l.map(b=>{const r=h[b];if(!r)return null;const S=i(r);return{id:b,name:u(b),summary:S,equityCurve:m(r.equity_curve),monthlyReturns:r.monthly_returns||{},trades:Array.isArray(r.trade_history)?r.trade_history:[]}}).filter(b=>b&&b.summary.success!==!1),Z=k.length?k[0]:null;let L=null;return q.value&&(L={name:"等权组合基准",points:m(_.portfolio_equity)}),{success:k.length>0,mode:"multi",strategies:k,primary:Z,benchmark:L,period:Z?Z.summary.start_date+" ~ "+Z.summary.end_date:""}}const K=y(()=>{const l=E.value;return!l||!l.primary?[]:e.buildMetrics?e.buildMetrics(l.primary.summary):[]}),Y=y(()=>{const l=E.value;return!l||!l.primary||!l.primary.monthlyReturns?[]:e.buildAnnualReturns?e.buildAnnualReturns(l.primary.monthlyReturns):[]}),se=y(()=>{const l=E.value;return!l||!l.primary?[]:(l.primary.trades||[]).slice().sort((_,h)=>String(h.date||"").localeCompare(String(_.date||"")))}),F=y(()=>{const l=E.value;return!l||!l.strategies||l.strategies.length<2?[]:l.strategies.map(_=>({name:_.name,metrics:e.buildMetrics?e.buildMetrics(_.summary):[]}))}),z=y(()=>{const l=E.value;return!l||!l.primary?null:e.computeMaxDrawdownRegion?e.computeMaxDrawdownRegion(l.primary.equityCurve):null});async function U(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const _=d.value;if(!_.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const h=x.value,k={start_date:h&&h[0]||void 0,end_date:h&&h[1]||void 0},Z={"Content-Type":"application/json"};R.value=!0,E.value=null,D.value="";try{if(_.length===1){const L=Object.assign({},k,{initial_capital:Number(o.value)||1e5,commission_rate:Number(M.value)||3e-4}),b=await fetch("/api/backtest/"+encodeURIComponent(_[0]),{method:"POST",headers:Z,body:JSON.stringify(L)});if(!b.ok){const S=await b.json().catch(()=>({}));throw new Error(S.detail||"回测失败")}const r=await b.json();if(!r.success)throw new Error(r.message||"回测失败");E.value=H(_[0],r)}else{const L=await fetch("/api/backtest/multi",{method:"POST",headers:Z,body:JSON.stringify(Object.assign({},k,{strategy_ids:_}))});if(!L.ok){const r=await L.json().catch(()=>({}));throw new Error(r.detail||"回测失败")}const b=await L.json();if(!b.success)throw new Error(b.message||"多策略回测失败");if(E.value=j(_,b.data||{}),!E.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(L){D.value=L&&L.message?L.message:"回测失败",ElementPlus.ElMessage.error(D.value)}finally{R.value=!1}}function W(){const l=E.value,_={dates:[],series:[]};if(!l)return _;const h=l.strategies.map(Z=>({name:Z.name,points:Z.equityCurve}));l.benchmark&&l.benchmark.points&&l.benchmark.points.length&&h.push({name:l.benchmark.name,points:l.benchmark.points});const k=e.buildNavSeries?e.buildNavSeries(h):_;return le(k,l)}function le(l,_){const h=O=>(getComputedStyle(document.documentElement).getPropertyValue(O)||"").trim(),k={primary:h("--qc-primary-600")||"#b8922a",success:h("--color-success")||"#4CAF50",accent:h("--color-accent")||"#F59E0B",info:h("--color-info")||"#1976d2",ai:h("--color-ai")||"#6366f1",textPrimary:h("--text-primary")||"#1f2937",textSecondary:h("--text-secondary")||"#6b7280",border:h("--border-light")||"#e5e7eb",up:h("--color-rise")||"#E63946",down:h("--color-fall")||"#2E7D32",bg:h("--bg-card")||"#ffffff"},Z=[k.primary,k.success,k.accent,k.info,k.ai],b=k.bg.length===7&&parseInt(k.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",r=e.computeMaxDrawdownRegion?e.computeMaxDrawdownRegion(_.primary?_.primary.equityCurve:[]):null,S=r&&r.peakDate&&r.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:k.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+r.maxDrawdown+"%",xAxis:r.peakDate,itemStyle:{color:k.down}},{xAxis:r.troughDate}]]}:void 0,c=l.series.map((O,re)=>{const X=_.benchmark&&O.name===_.benchmark.name,P=Z[re%Z.length];return{name:O.name,type:"line",data:O.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:X?2:2.4,type:X?"dashed":"solid",color:P},itemStyle:{color:P},emphasis:{focus:"series"},...re===0&&S?{markArea:S}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:b,borderColor:k.border,textStyle:{color:k.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:k.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:l.dates,boundaryGap:!1,axisLine:{lineStyle:{color:k.border}},axisLabel:{color:k.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:k.textSecondary,fontSize:11},splitLine:{lineStyle:{color:k.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:k.border,textStyle:{color:k.textSecondary,fontSize:10}}],series:c}}function Q(l){if(!l){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",W,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function s(){const l=E.value;if(!l||!l.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const _=l.strategies.map(c=>({name:c.name,points:c.equityCurve}));l.benchmark&&_.push({name:l.benchmark.name,points:l.benchmark.points});const h=e.buildNavSeries?e.buildNavSeries(_):{dates:[],series:[]},k=e.tradeActionText||(c=>c),Z=se.value.map(c=>({date:c.date,stock:c.stock,action:k(c.action),reason:c.reason})),L=e.buildBacktestCsv?e.buildBacktestCsv({metrics:K.value,dates:h.dates,series:h.series,trades:Z}):"",b=new Blob(["\uFEFF"+L],{type:"text/csv;charset=utf-8"}),r=URL.createObjectURL(b),S=document.createElement("a");S.href=r,S.download="backtest-"+l.strategies.map(c=>c.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",S.click(),URL.revokeObjectURL(r),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function w(l,_){return l==null||l===""||isNaN(Number(l))?"--":Number(l).toFixed(_??2)}return{btStrategyOptions:p,btSelectedStrategies:d,toggleBtStrategy:T,btDateRange:x,btCapital:o,btCommissionRate:M,btIncludeBenchmark:q,btRunning:R,btResult:E,btError:D,btMetrics:K,btAnnualReturns:Y,btTrades:se,btStrategyMetricsRows:F,btDrawdownRegion:z,runBacktestWorkbench:U,exportBacktestCSV:s,registerBacktestNavChart:Q,btFmtNum:w}}}})();(function(){const{ref:a,computed:t,watch:y,onUnmounted:e}=Vue,v=o=>(getComputedStyle(document.documentElement).getPropertyValue(o)||"").trim(),f=72,A={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},p={stock:"股票",bond:"债券",commodity:"大宗商品",cash:"现金"},d={"🌱":"sprout","🔥":"flame","🌾":"wheat","❄️":"snowflake","📈":"trending-up","📉":"trending-down","📊":"bar-chart-3","💹":"line-chart","🏭":"factory","💰":"banknote","🛢":"fuel"},x={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const o=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"sprout",color:"var(--state-success-solid)",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),M=a({}),q=a(!1),R=a({}),E=a({cycles:[]}),D=a([]),N=a(0),T=a(!1),u=a({autoRefresh:!0,refreshInterval:300}),i=a(""),m=a(""),H=a(!1),j=a("");let K=null;const Y={x:0,y:0},se=t(()=>{const ee=M.value;return["recession","recovery","overheat","stagflation"].map(me=>{const pe=ee[me]||{};return{key:me,name:pe.name||me,icon:d[pe.icon]||"bar-chart-3",color:pe.color||v("--text-tertiary")||"#888",bg:"color-mix(in srgb, "+(pe.color||"#888")+" 14%, var(--bg-card))",textColor:"color-mix(in srgb, "+(pe.color||"#888")+" 48%, var(--qc-foreground))",tagline:pe.allocation&&x[me]||""}})}),F=t(()=>{var ue,me,pe,he;const ee=o.value.indicators||{};return[{key:"pmi",label:"PMI",value:(ue=ee.pmi)==null?void 0:ue.toFixed(2),color:ee.pmi>=50?v("--color-success")||"#43a047":v("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((me=ee.gdp_growth)==null?void 0:me.toFixed(2))+"%",color:v("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((pe=ee.cpi)==null?void 0:pe.toFixed(2))+"%",color:ee.cpi>1.2?v("--color-danger")||"#E53935":v("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((he=ee.m2_growth)==null?void 0:he.toFixed(2))+"%",color:v("--color-success")||"#43a047"}]}),z=ee=>{ee=ee||{};const ue=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],me=()=>v("--color-success")||"#43a047",pe=()=>v("--color-danger")||"#E53935",he=()=>v("--color-warning")||"#FF9800",te={宽松:me(),中位:he(),偏低:pe(),高增长:me(),承压:pe(),不利:pe()};return ue.map(xe=>{const Pe=ee[xe.key]||{},ne=Pe.score||0,ae=Math.min(100,Math.max(5,(ne+2)*25)),ye=ne>=.3?"var(--state-success-solid)":ne>=-.3?"var(--state-warning-solid)":"var(--state-danger-solid)",Ne=ne>=0?"var(--state-success-text)":"var(--state-danger-text)";return{key:xe.key,label:xe.label,scoreStr:ne.toFixed(2),level:Pe.level||"—",barWidth:ae,barColor:ye,scoreColor:Ne,color:te[Pe.level]||"var(--text-tertiary)"}})},U=t(()=>z(o.value.dimension_scores)),W=t(()=>z(R.value._dimensions)),le=t(()=>{var ue;const ee=((ue=o.value.confidence)==null?void 0:ue.level)||"";return ee==="高"?"#43a047":ee==="中"?"#FF9800":ee==="低"?"#E53935":"var(--text-secondary)"}),Q=t(()=>{var pe,he,te,xe;const ee=M.value,ue={recovery:0,overheat:1,stagflation:2,recession:3},me={};for(const[Pe,ne]of Object.entries(ee))me[Pe]={name:ne.name,icon:ne.icon,color:ne.color,lightColor:ne.bg_color,duration:"~"+(((pe=ne.historical_stats)==null?void 0:pe.avg_duration_months)||18)+"个月",order:ue[Pe]||0,period:((te=(he=ne.case_studies)==null?void 0:he[0])==null?void 0:te.split("：")[0])||"",avgMonths:((xe=ne.historical_stats)==null?void 0:xe.avg_duration_months)||18};return me}),s=t(()=>{var ne,ae;const ee=o.value.stage,me={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[ee]||{x:150,y:150},pe=o.value.dimension_scores||{},he=((ne=pe.growth)==null?void 0:ne.score)||0,te=((ae=pe.inflation)==null?void 0:ae.score)||0,xe=Math.max(-30,Math.min(30,he*15)),Pe=Math.max(-30,Math.min(30,-te*15));return{x:me.x+xe,y:me.y+Pe,prevX:Y.x,prevY:Y.y}}),w=t(()=>{var pe;const ee=Math.min(100,((pe=o.value.timing)==null?void 0:pe.progress_percent)||0),ue=o.value.color||"var(--state-success-solid)",me=ee>100?"linear-gradient(90deg, "+ue+", var(--state-warning-solid))":ue;return{width:ee+"%",background:me}});function l(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[o.value.stage]||0}function _(){var ee,ue;return((ue=(ee=o.value)==null?void 0:ee.timing)==null?void 0:ue.progress_percent)||0}function h(){var ee,ue;return((ue=(ee=o.value)==null?void 0:ee.timing)==null?void 0:ue.duration_months)||0}function k(){var ee,ue;return((ue=(ee=o.value)==null?void 0:ee.timing)==null?void 0:ue.avg_duration_months)||18}function Z(ee){var he,te;const ue=Q.value,me=((he=ue[o.value.stage])==null?void 0:he.order)||0;return(((te=ue[ee])==null?void 0:te.order)||0)<me}function L(ee){return A[ee]||ee}function b(ee){return p[ee]||ee}function r(ee){const ue=["var(--state-success-solid)","var(--state-warning-solid)","var(--state-info-solid)","var(--text-tertiary)"];return ue[ee-1]||ue[3]}async function S(){try{const ue=await(await fetch("/api/market/merrill-clock/stages")).json();ue.success&&ue.data&&(M.value=ue.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function c(){T.value=!0;try{re();const ue=await(await fetch("/api/market/merrill-clock/timeline")).json();if(ue.success&&ue.data){const me=Array.isArray(ue.data.cycles)?ue.data.cycles.slice().reverse():[];E.value={cycles:me}}}catch{console.warn("获取美林时钟时间轴失败")}finally{T.value=!1}}async function O(ee){await P(ee)}async function re(){try{const ue=await(await fetch("/api/market/merrill-clock/snapshots?limit=30")).json();ue&&ue.success&&ue.data&&(D.value=ue.data.items||[],N.value=ue.data.total||0)}catch{console.warn("获取美林时钟评估轨迹失败")}}async function X(){var ee,ue;try{const pe=await(await fetch("/api/market/merrill-clock")).json(),he=pe.stage||"recovery",te=M.value[he]||{};if(o.value={...te,...pe,stage_cn:pe.stage_cn||te.stage_cn||"",stage_name:pe.stage_name||te.name||"",name:pe.name||te.name||"复苏期"},i.value=new Date().toLocaleTimeString("zh-CN"),j.value&&j.value!==he){const xe=M.value,Pe=((ee=xe[j.value])==null?void 0:ee.name)||j.value,ne=((ue=xe[he])==null?void 0:ue.name)||he;ElementPlus.ElMessage({message:"美林时钟阶段切换："+Pe+" → "+ne,type:"warning",duration:6e3,showClose:!0})}j.value=he}catch(me){console.error("获取美林时钟失败:",me);const pe=M.value.recovery||{};o.value={...pe,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function P(ee){var me;q.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",R.value=M.value[ee]||M.value.recovery||{};const ue=((me=o.value)==null?void 0:me.stage)===ee;R.value._isCurrent=ue,ue&&o.value&&(R.value._nextPrediction=o.value.next_stage_prediction,R.value._confidence=o.value.confidence,R.value._stage=o.value.stage,R.value._dimensions=o.value.dimension_scores);try{const he=await(await fetch("/api/market/merrill-clock/stage/"+ee)).json();if(he.success&&he.data){const te={...M.value[ee],...he.data};te._is_current!==void 0&&(te._isCurrent=te._is_current),te._current_timing&&(te._currentTiming=te._current_timing),te._last_period&&(te._lastPeriod=te._last_period),R.value._nextPrediction&&(te._nextPrediction=R.value._nextPrediction),R.value._confidence&&(te._confidence=R.value._confidence),R.value._stage&&(te._stage=R.value._stage),R.value._dimensions&&(te._dimensions=R.value._dimensions),Object.assign(R.value,te)}}catch(pe){console.warn("获取阶段详情失败:",pe)}}function G(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:u.value.autoRefresh,refreshInterval:u.value.refreshInterval})),u.value.autoRefresh?(clearInterval(K),K=setInterval(X,u.value.refreshInterval*1e3)):clearInterval(K),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function oe(){H.value=!0,m.value="";try{const ue=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();ue.success?(m.value="重评估完成："+(ue.stage_name||ue.stage),await X(),ElementPlus.ElMessage.success("重评估完成")):(m.value=ue.message||"重评估失败",ElementPlus.ElMessage.error(ue.message||"重评估失败"))}catch{m.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{H.value=!1}}function fe(){const ee=localStorage.getItem("merrill_clock_config");if(ee)try{const ue=JSON.parse(ee);u.value={...u.value,...ue}}catch{}u.value.autoRefresh&&(K=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),X()},u.value.refreshInterval*1e3))}function Me(){K&&clearInterval(K)}return e(()=>{Me()}),{merrillData:o,merrillStagesConfig:M,showMerrillDetail:q,merrillDetailData:R,merrillTimeline:E,merrillSnapshots:D,merrillSnapshotsTotal:N,fetchMerrillSnapshots:re,timelineLoading:T,merrillClockConfig:u,merrillClockLastUpdated:i,merrillReevalResult:m,merrillReevalLoading:H,stages:se,indicatorList:F,dimensionScoreList:U,detailDimensionScoreList:W,confidenceColor:le,timelineStages:Q,clockPosition:s,merrillProgressStyle:w,FULL_CYCLE_MONTHS:f,getStageAngle:l,getCycleProgress:_,getCurrentStageMonths:h,getStageTotalMonths:k,isStageCompleted:Z,getCharLabel:L,getAssetName:b,getRankColor:r,fetchMerrillStages:S,fetchMerrillClock:X,loadMerrillTimeline:c,showTimelineStage:O,showStageDetail:P,saveMerrillClockConfig:G,doMerrillReevaluate:oe,startAutoRefresh:fe,stopAutoRefresh:Me}}})();(function(){function a(p){return getComputedStyle(document.documentElement).getPropertyValue(p).trim()}var t=[210,28,165,290,348,190,52,250];function y(){var p=!1;try{p=document.documentElement.getAttribute("data-theme-mode")==="dark"}catch{}var d=p?62:58,x=p?62:40;return t.map(function(o){return"hsl("+o+", "+d+"%, "+x+"%)"})}function e(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:a("--chart-bg")||"transparent",color:y(),legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const v=[];function f(p){typeof p=="function"&&v.push(p)}function A(){v.slice().forEach(function(p){try{p()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:e,categoricalPalette:y,registerChart:f,refreshAllCharts:A,init(){return{getEChartsTheme:e,registerChart:f,refreshAllCharts:A}}}})();(function(){const{ref:a,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const y=t("qcState");try{const f=localStorage.getItem("quant_sidebar_collapsed");f!==null&&y.sidebarCollapsed&&(y.sidebarCollapsed.value=f==="1")}catch{}if(!y)return{};const e=async f=>{if(window.__quantGoPage){await window.__quantGoPage(f.key,f.subPages[0]||"");return}y.currentPage.value=f.key,y.currentSubPage.value=f.subPages[0]||""},v=()=>{y.sidebarCollapsed.value=!y.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",y.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:y.menus,currentPage:y.currentPage,sidebarCollapsed:y.sidebarCollapsed,navigate:e,toggle:v,sanitizeHtml:y.sanitizeHtml,keyClick:y.keyClick,t:y.t}}}})();const Sa={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(a){const t=a,y={"layout-dashboard":Bv,calendar:Hv,bot:Fv,"flask-conical":Vv,zap:jv,settings:Ov,"chevron-down":Nv,"chevron-right":Iv,"chevron-left":Lv,menu:Av,search:zv,bell:Rv,sun:Pv,moon:Dv,user:Tv,"user-round":Mv,home:Ev,x:qv,database:Cv,activity:Sv,clock:xv,"bar-chart-3":_v,shield:kv,"hard-drive":wv,"file-text":bv,users:yv,cpu:hv,"pie-chart":gv,info:fv,"log-out":pv,palette:mv,languages:vv,refresh:uv,download:dv,"external-link":cv,command:rv,sparkles:ov,"trending-up":lv,"trending-down":iv,"circle-dot":nv,check:sv,"alert-triangle":av,loader:tv,"arrow-left":ev,"arrow-right":Zu,eye:Xu,"eye-off":$u,lock:Qu,"sliders-horizontal":Ju,play:Yu,history:Gu,layers:Uu,"line-chart":Wu,target:Ku,"search-check":Bu,star:Hu,"message-circle":Fu,"calendar-days":Vu,"calendar-range":ju,"calendar-check":Ou,brain:Nu,lightbulb:Iu,"octagon-x":Lu,flag:Au,package:zu,"clipboard-list":Ru,pin:Pu,"radio-tower":Du,gauge:Tu,landmark:Mu,"candlestick-chart":Eu,wallet:qu,"badge-check":Cu,key:Su,factory:xu,trophy:_u,rocket:ku,flame:wu,"map-pin":bu,"scroll-text":yu,"book-open":hu,dna:gu,"bar-chart":fu,plus:pu,"star-off":mu,upload:vu,gem:uu,"folder-open":du,link:cu,save:ru,"trash-2":ou,pause:lu,"help-circle":iu,"play-circle":nu,pencil:su,folder:au,code:tu,sprout:eu,wheat:Zd,snowflake:Xd,fuel:$d,banknote:Qd,send:Jd,inbox:Yd,"wifi-off":Gd,"check-circle-2":Ud,"x-circle":Wd},e=()=>y[t.name]||y["circle-dot"];return(v,f)=>(ve(),fa(Rd(e()),{size:a.size,"stroke-width":a.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},Ca=(a,t)=>{const y=a.__vccOpts||a;for(const[e,v]of t)y[e]=v;return y},Kv={name:"qc-sidebar",components:{AppIcon:Sa},setup(){const a=Da("qcState");if(!a)return{};const t=lt(()=>a.menus&&a.menus.value||[]),y=lt(()=>a.currentPage&&a.currentPage.value||""),e=lt(()=>a.navMode&&a.navMode.value||"subnav"),v=lt({get:()=>a.sidebarCollapsed&&a.sidebarCollapsed.value||!1,set:T=>{a.sidebarCollapsed&&(a.sidebarCollapsed.value=T)}}),f=Nt({}),A={research:"量化投研",platform:"平台管理"},p=["research","platform"],d=T=>y.value===T.key,x=(T,u)=>y.value===T.key&&a.currentSubPage&&a.currentSubPage.value===u,o=T=>Array.isArray(T.subPages)&&T.subPages.length>1,M=(T,u)=>a.subPageNames&&a.subPageNames[u]||u;function q(T){!o(T)||v.value||(f.value[T.key]=!f.value[T.key])}function R(){t.value.forEach(T=>{f.value[T.key]===void 0&&(f.value[T.key]=d(T))})}async function E(T,u){const i=u||T.subPages&&T.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(T.key,i):(a.currentPage.value=T.key,a.currentSubPage&&(a.currentSubPage.value=i)),a.navigateTo&&a.navigateTo(T.key,i)}function D(){v.value=!v.value;try{localStorage.setItem("sidebar_collapsed",v.value?"1":"0")}catch{}}function N(T){if(T.ctrlKey&&T.key.toLowerCase()==="b"&&(T.preventDefault(),D()),!T.ctrlKey&&!T.metaKey&&!T.altKey&&(T.key==="ArrowDown"||T.key==="ArrowUp")){const u=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),i=u.indexOf(document.activeElement);if(i>=0){T.preventDefault();const m=u[(i+(T.key==="ArrowDown"?1:u.length-1))%u.length];m&&m.focus()}}}return Ka(()=>{R(),document.addEventListener("keydown",N)}),rs(()=>document.removeEventListener("keydown",N)),{state:a,menus:t,currentPage:y,navMode:e,sidebarCollapsed:v,expandedMenus:f,GROUP_LABELS:A,GROUPS:p,isActive:d,isChildActive:x,hasChildren:o,subLabel:M,toggleSubmenu:q,navigate:E,toggleCollapse:D}}},Wv={class:"qc-sidebar-logo"},Uv={key:0,class:"qc-logo-text"},Gv={class:"qc-sidebar-nav"},Yv={key:0,class:"qc-nav-group"},Jv={key:0,class:"qc-nav-group-label"},Qv=["href","aria-current","onClick"],$v={key:0,class:"qc-sidebar-label"},Xv={key:1,class:"qc-nav-badge"},Zv=["aria-expanded","aria-controls","onClick"],em=["id"],tm=["href","aria-current","onClick"],am={class:"qc-sidebar-child-label"},sm={class:"qc-sidebar-footer"},nm=["aria-expanded","aria-label","title"];function im(a,t,y,e,v,f){const A=ea("AppIcon"),p=ea("el-tooltip");return ve(),be("nav",{class:dt(["qc-sidebar",{"is-collapsed":e.sidebarCollapsed}]),"aria-label":"主导航"},[qe("div",Wv,[t[1]||(t[1]=zd('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),e.sidebarCollapsed?Be("",!0):(ve(),be("span",Uv,He(e.state.t("login.title")),1))]),qe("div",Gv,[(ve(!0),be(vt,null,Tt(e.GROUPS,d=>(ve(),be(vt,{key:d},[e.menus.some(x=>x.group===d)?(ve(),be("div",Yv,[e.sidebarCollapsed?Be("",!0):(ve(),be("span",Jv,He(e.GROUP_LABELS[d]),1)),(ve(!0),be(vt,null,Tt(e.menus.filter(x=>x.group===d),x=>(ve(),be(vt,{key:x.key},[qe("div",{class:dt(["qc-sidebar-item",{"has-children":e.navMode==="tree"&&e.hasChildren(x),"is-child-open":e.navMode==="tree"&&e.expandedMenus[x.key]}])},[mt(p,{content:x.name,placement:"right","show-after":300,disabled:!e.sidebarCollapsed},{default:pa(()=>[qe("a",{class:dt(["qc-sidebar-link",{"is-active":e.isActive(x)}]),href:"#"+x.key,"aria-current":e.isActive(x)?"page":null,onClick:Ft(o=>e.navigate(x),["prevent"])},[mt(A,{name:x.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),e.sidebarCollapsed?Be("",!0):(ve(),be("span",$v,He(x.name),1)),!e.sidebarCollapsed&&x.badge?(ve(),be("span",Xv,He(x.badge),1)):Be("",!0)],10,Qv)]),_:2},1032,["content","disabled"]),!e.sidebarCollapsed&&e.navMode==="tree"&&e.hasChildren(x)?(ve(),be("button",{key:0,class:dt(["qc-sidebar-chevron",{"is-open":e.expandedMenus[x.key]}]),"aria-expanded":!!e.expandedMenus[x.key],"aria-controls":"submenu-"+x.key,"aria-label":"展开子菜单",onClick:o=>e.toggleSubmenu(x)},[mt(A,{name:"chevron-down",size:14})],10,Zv)):Be("",!0)],2),!e.sidebarCollapsed&&e.navMode==="tree"&&e.hasChildren(x)&&e.expandedMenus[x.key]?(ve(),be("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+x.key},[(ve(!0),be(vt,null,Tt(x.subPages,o=>(ve(),be("a",{key:o,class:dt(["qc-sidebar-item qc-sidebar-child",{"is-active":e.isChildActive(x,o)}]),href:"#"+x.key+"-"+o,"aria-current":e.isChildActive(x,o)?"page":null,onClick:Ft(M=>e.navigate(x,o),["prevent"])},[qe("span",am,He(e.subLabel(x,o)),1)],10,tm))),128))],8,em)):Be("",!0)],64))),128))])):Be("",!0)],64))),128))]),qe("div",sm,[qe("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!e.sidebarCollapsed,"aria-label":e.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:e.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:t[0]||(t[0]=(...d)=>e.toggleCollapse&&e.toggleCollapse(...d))},[mt(A,{name:e.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,nm)])],2)}const lm=Ca(Kv,[["render",im]]),om={name:"qc-header",components:{AppIcon:Sa},setup(){const a=Da("qcState");if(!a)return{};const t=Nt(!1),y=lt(()=>a.currentUser&&a.currentUser.value||null),e=lt(()=>a.navMode&&a.navMode.value||"subnav"),v=lt(()=>{const me=a.currentPage&&a.currentPage.value,pe=(a.menus&&a.menus.value||[]).find(he=>he.key===me);return!!(pe&&pe.subPages&&pe.subPages.length)}),f=lt(()=>{const me=a.currentPage&&a.currentPage.value,pe=a.currentPageName&&a.currentPageName.value;if(pe)return pe;const he=(a.menus&&a.menus.value||[]).find(te=>te.key===me);return he&&he.name||me||""}),A=lt(()=>{const me=a.currentSubPage&&a.currentSubPage.value;return me&&a.subPageNames&&a.subPageNames[me]||me||""}),p=Nt(typeof window<"u"?window.innerWidth<768:!1);function d(){p.value=window.innerWidth<768}Ka(()=>window.addEventListener("resize",d)),rs(()=>window.removeEventListener("resize",d));const x=Nt(!1),o=lt(()=>{const me=a.currentSubPage&&a.currentSubPage.value;return me&&a.subPageNames&&a.subPageNames[me]||me||""}),M=lt(()=>{const me=a.currentPage&&a.currentPage.value,pe=(a.menus&&a.menus.value||[]).find(he=>he.key===me);return(pe&&pe.subPages||[]).map(he=>({key:he,label:a.subPageNames&&a.subPageNames[he]||he}))});function q(){x.value=!x.value}function R(){x.value=!1}function E(me){x.value=!1,a.activateTab&&a.activateTab(a.currentPage.value,me)}const D=lt(()=>(a.currentTheme&&a.currentTheme.value)==="dark"),N=Nt(!1),T=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],u=lt(()=>{const me=T.find(pe=>pe.value===e.value);return me&&me.label||e.value});function i(){N.value=!N.value}function m(){N.value=!1}function H(me){N.value=!1,a.setNavMode&&a.setNavMode(me)}const j=lt({get:()=>a.searchQuery&&a.searchQuery.value||"",set:me=>{a.searchQuery&&(a.searchQuery.value=me)}}),K=Nt(!1),Y=Nt([]),se=Nt(!1),F=Nt(!1);function z(){const me=localStorage.getItem("quant_token")||"";return me?{Authorization:"Bearer "+me,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function U(){se.value=!0,F.value=!1;try{const pe=await(await fetch("/api/alerts/history?limit=8",{headers:z()})).json();pe&&pe.success?Y.value=pe.history||[]:Y.value=[]}catch{F.value=!0,Y.value=[]}finally{se.value=!1}}function W(){K.value=!K.value,K.value&&U()}function le(){K.value=!1}function Q(){K.value=!1,a.activateTab&&a.activateTab("system","notification")}const s=Nt(!1),w=a.themeHues||[45,220,0,140,270,320],l=lt(()=>a.themeHue&&a.themeHue.value||45),_=lt(()=>a.themeMode&&a.themeMode.value||"system"),h=[{k:"compact",n:"紧凑"},{k:"comfortable",n:"标准"},{k:"spacious",n:"宽松"}],k=lt(()=>a.density&&a.density.value||"comfortable");function Z(me){a.changeDensity&&a.changeDensity(me)}function L(me){return a.hueColor?a.hueColor(me):"hsl("+me+", 75%, 42%)"}function b(me){return a.hueName?a.hueName(me):String(me)}function r(){s.value=!s.value}function S(){s.value=!1}function c(me){a.changeThemeMode&&a.changeThemeMode(me)}function O(me){a.changeThemeHue&&a.changeThemeHue(me)}function re(){a.changeThemeMode&&a.changeThemeMode(D.value?"light":"dark")}function X(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}a.sidebarCollapsed&&(a.sidebarCollapsed.value=!a.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",a.sidebarCollapsed.value?"1":"0")}catch{}}function P(){t.value=!t.value}function G(){t.value=!1}function oe(me){return()=>{G(),me&&me()}}function fe(){G(),a.handleLogout&&a.handleLogout()}const Me=lt(()=>a.marketData&&a.marketData.value||{}),ee=Nt(typeof window<"u"&&localStorage.getItem("qc.hideNonTradingBanner")==="1");return{marketData:Me,bannerDismissed:ee,dismissBanner:()=>{ee.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},state:a,showUserMenu:t,currentUser:y,isDark:D,searchQuery:j,navMode:e,crumbRoot:f,crumbSub:A,hasToptabs:v,toggleThemeQuick:re,toggleSidebar:X,openUserMenu:P,closeUserMenu:G,menuItem:oe,handleLogout:fe,openBellMenu:K,notifItems:Y,notifLoading:se,notifError:F,toggleBell:W,closeBell:le,goNotificationCenter:Q,openThemeMenu:s,themeHues:w,themeHue:l,themeMode:_,hueColor:L,hueName:b,toggleThemeMenu:r,closeThemeMenu:S,pickThemeMode:c,pickThemeHue:O,DENSITY_MODES:h,density:k,pickDensity:Z,openNavModeMenu:N,NAV_MODES:T,navModeLabel:u,toggleNavModeMenu:i,closeNavModeMenu:m,pickNavMode:H,isMobile:p,openSubnavPicker:x,currentSubLabel:o,subnavOptions:M,toggleSubnavPicker:q,closeSubnavPicker:R,pickSubnav:E}}},rm={class:"qc-header-wrap"},cm={key:0,class:"non-trading-banner",role:"status"},dm={class:"qc-header"},um={class:"qc-header-left"},vm=["aria-label"],mm={key:0,class:"qc-header-subnav"},pm=["aria-expanded"],fm={class:"qc-subnav-picker-label"},gm={key:0,class:"qc-subnav-picker-menu",role:"menu"},hm=["onClick"],ym={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},bm={class:"qc-crumb qc-crumb-root"},wm={class:"qc-crumb qc-crumb-sub"},km={key:1,class:"qc-crumb qc-crumb-root"},_m={class:"qc-header-center"},xm={key:0,class:"qc-search-sublabel"},Sm={class:"qc-header-right"},Cm={class:"qc-hdr-pop"},qm=["aria-expanded"],Em={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},Mm={key:0,class:"qc-bell-state"},Tm={key:1,class:"qc-bell-state"},Dm={key:2,class:"qc-bell-state"},Pm={key:3,class:"qc-bell-list"},Rm={class:"qc-bell-item-title"},zm={class:"qc-bell-item-meta"},Am={key:0},Lm={class:"qc-bell-item-time"},Im={class:"qc-hdr-pop"},Nm=["aria-expanded"],Om={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},jm={class:"qc-theme-modes"},Vm=["onClick"],Fm={class:"qc-theme-swatches"},Hm=["title","aria-label","onClick"],Bm={key:0,class:"qc-theme-swatch-check"},Km={class:"qc-theme-custom-label"},Wm={class:"qc-theme-modes"},Um=["onClick"],Gm={key:0,class:"qc-navmode-switch"},Ym=["aria-label","title","aria-expanded"],Jm={key:0,class:"qc-navmode-menu",role:"menu"},Qm=["onClick","onKeydown"],$m={class:"qc-navmode-item-main"},Xm={class:"qc-user-menu"},Zm=["aria-label","aria-expanded"],ep={key:0,class:"qc-user-dropdown",role:"menu"},tp={class:"qc-user-dropdown-header"},ap={class:"qc-user-dropdown-name"},sp={key:0,class:"qc-user-dropdown-chip"};function np(a,t,y,e,v,f){var M,q,R,E,D,N,T;const A=ea("AppIcon"),p=ea("qc-top-tabs"),d=ea("el-autocomplete"),x=ea("el-slider"),o=Ad("click-outside");return ve(),be("div",rm,[e.marketData&&e.marketData.is_trading_day===!1&&!e.bannerDismissed?(ve(),be("div",cm,[mt(A,{name:"alert-triangle",size:14}),t[15]||(t[15]=qe("span",null,"今日非交易日 · 当前展示最近交易日历史数据",-1)),qe("button",{class:"non-trading-banner-close",onClick:t[0]||(t[0]=(...u)=>e.dismissBanner&&e.dismissBanner(...u)),"aria-label":"关闭提示"},"×")])):Be("",!0),qe("header",dm,[qe("div",um,[qe("button",{class:"qc-icon-btn","aria-label":(M=e.state.sidebarCollapsed)!=null&&M.value?"展开侧边栏":"折叠侧边栏",onClick:t[1]||(t[1]=(...u)=>e.toggleSidebar&&e.toggleSidebar(...u))},[mt(A,{name:"menu",size:20})],8,vm),e.isMobile?La((ve(),be("div",mm,[qe("button",{class:"qc-subnav-picker","aria-expanded":e.openSubnavPicker,onClick:t[2]||(t[2]=(...u)=>e.toggleSubnavPicker&&e.toggleSubnavPicker(...u))},[qe("span",fm,He(e.currentSubLabel||"二级"),1),mt(A,{name:"chevron-down",size:14})],8,pm),e.openSubnavPicker?(ve(),be("div",gm,[(ve(!0),be(vt,null,Tt(e.subnavOptions,u=>(ve(),be("div",{key:u.key,class:dt(["qc-subnav-picker-item",{"is-active":u.key===(e.state.currentSubPage&&e.state.currentSubPage.value)}]),role:"menuitem",onClick:i=>e.pickSubnav(u.key)},He(u.label),11,hm))),128))])):Be("",!0)])),[[o,e.closeSubnavPicker]]):Be("",!0),e.navMode==="tree"&&!e.isMobile?(ve(),be("div",ym,[qe("span",bm,He(e.crumbRoot),1),e.crumbSub?(ve(),be(vt,{key:0},[t[16]||(t[16]=qe("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),qe("span",wm,He(e.crumbSub),1)],64)):Be("",!0)])):Be("",!0),e.navMode==="toptab"&&!e.isMobile?(ve(),be(vt,{key:2},[e.hasToptabs?(ve(),fa(p,{key:0})):(ve(),be("span",km,He(e.crumbRoot),1))],64)):Be("",!0)]),qe("div",_m,[mt(d,{class:"qc-header-search",modelValue:e.searchQuery,"onUpdate:modelValue":t[3]||(t[3]=u=>e.searchQuery=u),"fetch-suggestions":e.state.searchStocks,placeholder:e.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:e.state.onSearchSelect},{prefix:pa(()=>[mt(A,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:pa(()=>[...t[17]||(t[17]=[qe("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:pa(u=>{var i,m,H,j,K;return[qe("span",null,He((i=u==null?void 0:u.item)==null?void 0:i.icon)+" "+He(((m=u==null?void 0:u.item)==null?void 0:m.label)||((H=u==null?void 0:u.item)==null?void 0:H.name)),1),(j=u==null?void 0:u.item)!=null&&j.subLabel?(ve(),be("span",xm,He((K=u==null?void 0:u.item)==null?void 0:K.subLabel),1)):Be("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),qe("div",Sm,[La((ve(),be("div",Cm,[qe("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":e.openBellMenu,onClick:t[4]||(t[4]=(...u)=>e.toggleBell&&e.toggleBell(...u))},[mt(A,{name:"bell",size:20})],8,qm),e.openBellMenu?(ve(),be("div",Em,[t[18]||(t[18]=qe("div",{class:"qc-bell-header"},"通知",-1)),e.notifLoading?(ve(),be("div",Mm,"加载中...")):e.notifError?(ve(),be("div",Tm,"加载失败")):e.notifItems.length?(ve(),be("div",Pm,[(ve(!0),be(vt,null,Tt(e.notifItems,(u,i)=>(ve(),be("div",{key:u.id||i,class:dt(["qc-bell-item",{"is-fail":u.ok===0}])},[qe("div",Rm,He(u.title||u.event_type||"事件"),1),qe("div",zm,[xa(He(u.channel||""),1),u.recipient?(ve(),be("span",Am," · "+He(u.recipient),1)):Be("",!0),qe("span",Lm,He(u.created_at||""),1)])],2))),128))])):(ve(),be("div",Dm,"暂无通知")),qe("button",{class:"qc-bell-footer",onClick:t[5]||(t[5]=(...u)=>e.goNotificationCenter&&e.goNotificationCenter(...u))},"前往通知中心 →")])):Be("",!0)])),[[o,e.closeBell]]),La((ve(),be("div",Im,[qe("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":e.openThemeMenu,onClick:t[6]||(t[6]=(...u)=>e.toggleThemeMenu&&e.toggleThemeMenu(...u))},[mt(A,{name:"palette",size:20})],8,Nm),e.openThemeMenu?(ve(),be("div",Om,[t[19]||(t[19]=qe("div",{class:"qc-theme-section-label"},"外观模式",-1)),qe("div",jm,[(ve(),be(vt,null,Tt([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],u=>qe("button",{key:u.k,class:dt(["qc-theme-mode",{"is-active":e.themeMode===u.k}]),onClick:i=>e.pickThemeMode(u.k)},He(u.n),11,Vm)),64))]),t[20]||(t[20]=qe("div",{class:"qc-theme-section-label"},"主题色",-1)),qe("div",Fm,[(ve(!0),be(vt,null,Tt(e.themeHues,u=>(ve(),be("button",{key:u,class:dt(["qc-theme-swatch",{"is-active":e.themeHue===u}]),style:Ld({background:e.hueColor(u)}),title:e.hueName(u),"aria-label":e.hueName(u),onClick:i=>e.pickThemeHue(u)},[e.themeHue===u?(ve(),be("span",Bm,"✓")):Be("",!0)],14,Hm))),128))]),mt(x,{class:"qc-theme-slider","model-value":e.themeHue,min:0,max:359,step:1,size:"small",onChange:e.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),qe("div",Km,"自定义 "+He(e.themeHue)+"°",1),t[21]||(t[21]=qe("div",{class:"qc-theme-section-label"},"信息密度",-1)),qe("div",Wm,[(ve(!0),be(vt,null,Tt(e.DENSITY_MODES,u=>(ve(),be("button",{key:u.k,class:dt(["qc-theme-mode",{"is-active":e.density===u.k}]),onClick:i=>e.pickDensity(u.k)},He(u.n),11,Um))),128))])])):Be("",!0)])),[[o,e.closeThemeMenu]]),e.isMobile?Be("",!0):La((ve(),be("div",Gm,[qe("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+e.navModeLabel,title:"导航形态: "+e.navModeLabel,"aria-expanded":e.openNavModeMenu,onClick:t[7]||(t[7]=(...u)=>e.toggleNavModeMenu&&e.toggleNavModeMenu(...u))},[mt(A,{name:"layers",size:20})],8,Ym),e.openNavModeMenu?(ve(),be("div",Jm,[(ve(!0),be(vt,null,Tt(e.NAV_MODES,u=>(ve(),be("div",{key:u.value,class:dt(["qc-user-dropdown-item qc-navmode-item",{"is-active":e.navMode===u.value}]),role:"menuitem",tabindex:"0",onClick:i=>e.pickNavMode(u.value),onKeydown:[ma(Ft(i=>e.pickNavMode(u.value),["prevent"]),["enter"]),ma(Ft(i=>e.pickNavMode(u.value),["prevent"]),["space"])]},[qe("div",$m,[qe("span",null,He(u.label),1),e.navMode===u.value?(ve(),fa(A,{key:0,name:"check",size:14})):Be("",!0)])],42,Qm))),128))])):Be("",!0)])),[[o,e.closeNavModeMenu]]),La((ve(),be("div",Xm,[qe("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((q=e.currentUser)==null?void 0:q.username)||""),"aria-haspopup":"menu","aria-expanded":e.showUserMenu,onClick:t[8]||(t[8]=(...u)=>e.openUserMenu&&e.openUserMenu(...u))},He((((R=e.currentUser)==null?void 0:R.username)||"A").charAt(0).toUpperCase()),9,Zm),e.showUserMenu?(ve(),be("div",ep,[qe("div",tp,[qe("span",ap,He((E=e.currentUser)==null?void 0:E.username),1),((D=e.currentUser)==null?void 0:D.role)==="guest"?(ve(),be("span",sp,"访客")):Be("",!0)]),((N=e.currentUser)==null?void 0:N.role)==="admin"?(ve(),be("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:t[9]||(t[9]=u=>e.menuItem(e.state.resetSetupWizard)()),onKeydown:t[10]||(t[10]=ma(Ft(u=>e.menuItem(e.state.resetSetupWizard)(),["prevent"]),["enter"]))},[mt(A,{name:"settings",size:16}),t[22]||(t[22]=xa(" 重新运行初始化向导 ",-1))],32)):Be("",!0),((T=e.currentUser)==null?void 0:T.role)!=="guest"?(ve(),be("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:t[11]||(t[11]=u=>e.menuItem(()=>{e.state.showChangePassword&&(e.state.showChangePassword.value=!0)})()),onKeydown:t[12]||(t[12]=ma(Ft(u=>e.menuItem(()=>{e.state.showChangePassword&&(e.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[mt(A,{name:"lock",size:16}),t[23]||(t[23]=xa(" 修改密码 ",-1))],32)):Be("",!0),t[25]||(t[25]=qe("div",{class:"qc-user-dropdown-divider"},null,-1)),qe("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:t[13]||(t[13]=(...u)=>e.handleLogout&&e.handleLogout(...u)),onKeydown:t[14]||(t[14]=ma(Ft((...u)=>e.handleLogout&&e.handleLogout(...u),["prevent"]),["enter"]))},[mt(A,{name:"log-out",size:16}),t[24]||(t[24]=xa(" 退出登录 ",-1))],32)])):Be("",!0)])),[[o,e.closeUserMenu]])])])])}const ip=Ca(om,[["render",np]]),lp=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],op={name:"qc-subnav",components:{AppIcon:Sa},setup(){const a=Da("qcState");if(!a)return{};const t=lt(()=>a.currentPage&&a.currentPage.value||""),y=lt(()=>a.currentSubPage&&a.currentSubPage.value||""),e=lt(()=>a.navMode&&a.navMode.value||"subnav"),v=Nt({}),f=lt(()=>a.menus&&a.menus.value||[]),A=lt(()=>f.value.find(T=>T.key===t.value)||null),p=lt(()=>A.value&&A.value.subPages||[]),d=lt(()=>a.currentPageName&&a.currentPageName.value||t.value),x=T=>a.subPageNames&&a.subPageNames[T]||T,o=T=>y.value===T;function M(T){a.openTab?a.openTab(t.value,T):a.currentSubPage&&(a.currentSubPage.value=T);try{localStorage.setItem("quant_last_subpage",T)}catch{}}function q(T){a.openTab?a.openTab(t.value,T.key):a.currentSubPage&&(a.currentSubPage.value=T.key);try{localStorage.setItem("quant_last_subpage",T.key)}catch{}}function R(T){v.value[T]=!v.value[T]}const E={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}};return{state:a,currentPage:t,currentSubPage:y,navMode:e,subPages:p,currentMenu:A,collapsedGroups:v,pageTitle:d,subLabel:x,isSubActive:o,goSub:M,goSystemItem:q,toggleGroup:R,SYSTEM_GROUPS:lp,subIcon:(T,u)=>E[T]&&E[T][u]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},rp={key:0,class:"qc-subnav-column","aria-label":"二级导航"},cp={class:"qc-subnav-column-header"},dp={class:"qc-subnav-current-label"},up={class:"qc-subnav-column-body"},vp=["onClick"],mp=["href","onClick"],pp={class:"qc-subnav-group-label"},fp=["href","onClick"],gp=["href","onClick"];function hp(a,t,y,e,v,f){const A=ea("AppIcon");return e.navMode==="subnav"?(ve(),be("aside",rp,[qe("div",cp,[qe("span",dp,He(e.pageTitle),1)]),qe("div",up,[e.currentPage==="system"?(ve(!0),be(vt,{key:0},Tt(e.SYSTEM_GROUPS,p=>(ve(),be("div",{key:p.label,class:"qc-subnav-group"},[qe("div",{class:"qc-subnav-group-label",onClick:d=>e.toggleGroup(p.label)},[qe("span",null,He(p.label),1),mt(A,{name:"chevron-down",size:12,class:dt({"is-open":!e.collapsedGroups[p.label]})},null,8,["class"])],8,vp),e.collapsedGroups[p.label]?Be("",!0):(ve(!0),be(vt,{key:0},Tt(p.items,d=>(ve(),be("a",{key:d.key,class:dt(["qc-subnav-item",{"is-active":e.isSubActive(d.key)}]),href:"#"+d.key,onClick:Ft(x=>e.goSystemItem(d),["prevent"])},[mt(A,{name:d.icon,size:16},null,8,["name"]),qe("span",null,He(d.label),1)],10,mp))),128))]))),128)):e.currentPage==="shortterm"?(ve(!0),be(vt,{key:1},Tt(e.SHORTTERM_GROUPS,p=>(ve(),be("div",{key:p.label,class:"qc-subnav-group"},[qe("div",pp,[qe("span",null,He(p.label),1)]),(ve(!0),be(vt,null,Tt(p.items,d=>(ve(),be("a",{key:d,class:dt(["qc-subnav-item",{"is-active":e.isSubActive(d)}]),href:"#"+e.currentPage+"/"+d,onClick:Ft(x=>e.goSub(d),["prevent"])},[mt(A,{name:e.subIcon(e.currentPage,d),size:16},null,8,["name"]),qe("span",null,He(e.subLabel(d)),1)],10,fp))),128))]))),128)):(ve(!0),be(vt,{key:2},Tt(e.subPages,p=>(ve(),be("a",{key:p,class:dt(["qc-subnav-item",{"is-active":e.isSubActive(p)}]),href:"#"+e.currentPage+"/"+p,onClick:Ft(d=>e.goSub(p),["prevent"])},[mt(A,{name:e.subIcon(e.currentPage,p),size:16},null,8,["name"]),qe("span",null,He(e.subLabel(p)),1)],10,gp))),128))])])):Be("",!0)}const yp=Ca(op,[["render",hp]]),bp=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],wp={name:"qc-mobile-nav",components:{AppIcon:Sa},setup(){const a=Da("qcState");if(!a)return{};const t=Nt(!1),y=Nt(null),e=Nt({}),v=lt(()=>a.menus&&a.menus.value||[]),f=lt(()=>a.currentPage&&a.currentPage.value||""),A={research:"量化投研",platform:"平台管理"},p=["research","platform"];function d(u){return Array.isArray(u.subPages)&&u.subPages.length>0}function x(u){d(u)&&(e.value[u.key]=!e.value[u.key])}function o(u,i){return f.value===u.key&&a.currentSubPage&&a.currentSubPage.value===i}function M(u){return a.subPageNames&&a.subPageNames[u]||u}async function q(u){const i=v.value.find(H=>H.key===u.key),m=i&&i.subPages&&i.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(u.key,m):(a.currentPage.value=u.key,a.currentSubPage&&(a.currentSubPage.value=m)),a.navigateTo&&a.navigateTo(u.key,m)}function R(u,i){t.value=!1;const m=i||u.subPages&&u.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(u.key,m):(a.currentPage.value=u.key,a.currentSubPage&&(a.currentSubPage.value=m)),a.navigateTo&&a.navigateTo(u.key,m)}function E(){t.value=!0,e.value.shortterm===void 0&&(e.value.shortterm=!0)}function D(){t.value=!1;const u=document.querySelector(".qc-header .qc-icon-btn");u&&u.focus()}function N(u){u.detail&&u.detail.open&&E()}function T(u){t.value&&u.key==="Escape"&&D()}return Ka(()=>{window.addEventListener("qc:drawer",N),document.addEventListener("keydown",T)}),rs(()=>{window.removeEventListener("qc:drawer",N),document.removeEventListener("keydown",T)}),{state:a,TABS:bp,menus:v,currentPage:f,drawerOpen:t,drawerFocusRef:y,drawerExpanded:e,GROUP_LABELS:A,GROUPS:p,hasSub:d,toggleDrawerMenu:x,isDrawerSubActive:o,subLabel:M,goTab:q,goMenu:R,openDrawer:E,closeDrawer:D}}},kp={class:"qc-mobile-nav","aria-label":"移动端底部导航"},_p=["aria-current","onClick"],xp={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},Sp={class:"qc-drawer-header"},Cp={class:"qc-drawer-brand"},qp={class:"qc-drawer-body"},Ep={key:0},Mp={class:"qc-nav-group-label"},Tp=["href","aria-current","onClick"],Dp={class:"qc-sidebar-label"},Pp=["aria-expanded","onClick"],Rp={key:0,class:"qc-drawer-children"},zp=["href","onClick"],Ap={class:"qc-drawer-footer"},Lp=["title"];function Ip(a,t,y,e,v,f){var p,d;const A=ea("AppIcon");return ve(),be(vt,null,[qe("nav",kp,[(ve(!0),be(vt,null,Tt(e.TABS,x=>(ve(),be("button",{key:x.key,class:dt(["qc-mobile-tab",{"is-active":e.currentPage===x.key}]),"aria-current":e.currentPage===x.key?"page":null,onClick:o=>e.goTab(x)},[mt(A,{name:x.icon,size:22},null,8,["name"]),qe("span",null,He(x.label),1)],10,_p))),128))]),(ve(),fa(Id,{to:"body"},[e.drawerOpen?(ve(),be("div",{key:0,class:"qc-drawer-backdrop",onClick:t[0]||(t[0]=(...x)=>e.closeDrawer&&e.closeDrawer(...x))})):Be("",!0),e.drawerOpen?(ve(),be("div",xp,[qe("div",Sp,[qe("div",Cp,[t[4]||(t[4]=qe("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[qe("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),qe("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),qe("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),qe("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),qe("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),qe("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),qe("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),qe("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),qe("span",null,He(e.state.t("login.title")),1)]),qe("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:t[1]||(t[1]=(...x)=>e.closeDrawer&&e.closeDrawer(...x))},[mt(A,{name:"x",size:18})])]),qe("div",qp,[(ve(!0),be(vt,null,Tt(e.GROUPS,x=>(ve(),be(vt,{key:x},[e.menus.some(o=>o.group===x)?(ve(),be("div",Ep,[qe("div",Mp,He(e.GROUP_LABELS[x]),1),(ve(!0),be(vt,null,Tt(e.menus.filter(o=>o.group===x),o=>(ve(),be("div",{key:o.key,class:"qc-drawer-menu"},[qe("div",{class:dt(["qc-drawer-menu-row",{"is-active":e.currentPage===o.key}])},[qe("a",{class:dt(["qc-sidebar-item",{"is-active":e.currentPage===o.key}]),href:"#"+o.key,"aria-current":e.currentPage===o.key?"page":null,onClick:Ft(M=>e.hasSub(o)?e.toggleDrawerMenu(o):e.goMenu(o),["prevent"])},[mt(A,{name:o.iconName||"",size:18},null,8,["name"]),qe("span",Dp,He(o.name),1)],10,Tp),e.hasSub(o)?(ve(),be("button",{key:0,class:dt(["qc-sidebar-chevron",{"is-open":e.drawerExpanded[o.key]}]),"aria-expanded":!!e.drawerExpanded[o.key],"aria-label":"展开子菜单",onClick:M=>e.toggleDrawerMenu(o)},[mt(A,{name:"chevron-down",size:14})],10,Pp)):Be("",!0)],2),e.drawerExpanded[o.key]?(ve(),be("div",Rp,[(ve(!0),be(vt,null,Tt(o.subPages,M=>(ve(),be("a",{key:M,class:dt(["qc-subnav-item",{"is-active":e.isDrawerSubActive(o,M)}]),href:"#"+o.key+"/"+M,onClick:Ft(q=>e.goMenu(o,M),["prevent"])},[qe("span",null,He(e.subLabel(M)),1)],10,zp))),128))])):Be("",!0)]))),128))])):Be("",!0)],64))),128))]),qe("div",Ap,[qe("button",{class:"qc-icon-btn",title:((p=e.state.currentTheme)==null?void 0:p.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:t[2]||(t[2]=x=>{var o;return e.state.changeThemeMode&&e.state.changeThemeMode(((o=e.state.currentTheme)==null?void 0:o.value)==="dark"?"light":"dark")})},[mt(A,{name:((d=e.state.currentTheme)==null?void 0:d.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,Lp),qe("button",{class:"qc-icon-btn",title:"退出登录",onClick:t[3]||(t[3]=x=>e.state.handleLogout&&e.state.handleLogout())},[mt(A,{name:"log-out",size:18})])])])):Be("",!0)]))],64)}const Np=Ca(wp,[["render",Ip]]),Op={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(a,{emit:t,slots:y}){const e=Da("qcState");function v(o){t("select",o)}function f(o){const M=o.strategy_names||o.strategies||[],q=M.slice(0,3),R=M.length>3?M.length-3:0,E=q.map(D=>({text:D,more:!1}));return R&&E.push({text:"+"+R,more:!0}),E}function A(o){const M=Number(o);return isFinite(M)?M.toFixed(2):"—"}function p(o){const M=Number(o);return isFinite(M)?(M>0?"+":"")+M.toFixed(2)+"%":"—"}function d(o){const M=Number(o.consensus_level);return isFinite(M)?Math.round(M*100):0}function x(o){const M=Number(o&&o.consensus_level);return isFinite(M)&&M>0}return{state:e,slots:y,select:v,displayTags:f,fmtPrice:A,fmtChange:p,pctOf:d,hasConsensus:x}}},jp={class:"qc-stock-list"},Vp=["data-copy-code","aria-label","onClick","onKeydown"],Fp={key:0,class:"qc-stock-rank"},Hp={class:"qc-stock-info"},Bp={class:"qc-stock-code"},Kp={class:"qc-stock-code-num"},Wp={key:0,class:"qc-stock-status is-new"},Up={key:1,class:"qc-stock-status is-out"},Gp={class:"qc-stock-name"},Yp={key:0,class:"qc-stock-consensus"},Jp={key:1,class:"qc-stock-tags"},Qp={key:2,class:"qc-stock-badge"},$p={key:3,class:"qc-stock-data"},Xp={class:"qc-stock-price"},Zp={key:4,class:"qc-stock-extra"},ef={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},tf=["data-copy-code","aria-label","onClick","onKeydown"],af={key:0,class:"qc-stock-rank"},sf={class:"qc-stock-info"},nf={class:"qc-stock-code"},lf={class:"qc-stock-code-num"},of={key:0,class:"qc-stock-status is-new"},rf={key:1,class:"qc-stock-status is-out"},cf={class:"qc-stock-name"},df={key:0,class:"qc-stock-consensus"},uf={key:1,class:"qc-stock-tags"},vf={key:2,class:"qc-stock-badge"},mf={key:3,class:"qc-stock-data"},pf={class:"qc-stock-price"},ff={key:4,class:"qc-stock-extra"},gf={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function hf(a,t,y,e,v,f){const A=ea("qc-state-panel"),p=ea("qc-virtual-list");return ve(),be("div",jp,[y.loading?(ve(),fa(A,{key:0,type:"loading"})):y.items.length?(ve(),be(vt,{key:2},[y.virtual?(ve(),fa(p,{key:0,items:y.items,"row-height":y.rowHeight},{default:pa(({item:d,index:x})=>[qe("div",{class:dt(["qc-stock-row",{"is-active":y.activeCode===d.code}]),"data-copy-code":y.copyCode?d.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(d.name||"")+" "+(d.code||""),onClick:o=>e.select(d),onKeydown:[ma(Ft(o=>e.select(d),["prevent"]),["enter"]),ma(Ft(o=>e.select(d),["prevent"]),["space"])]},[y.showRank?(ve(),be("div",Fp,He(x+1),1)):Be("",!0),qe("div",Hp,[qe("div",Bp,[qe("span",Kp,He(d.code),1),d.status==="new"?(ve(),be("span",Wp,He(y.statusText.new),1)):d.status==="out"?(ve(),be("span",Up,He(y.statusText.out),1)):Be("",!0)]),qe("div",Gp,[xa(He(d.name)+" ",1),da(a.$slots,"name-suffix",{item:d,index:x})]),y.showConsensus&&e.hasConsensus(d)?(ve(),be("span",Yp,He(e.pctOf(d))+"% 共识",1)):Be("",!0)]),(d.strategy_names||d.strategies)&&(d.strategy_names||d.strategies).length?(ve(),be("div",Jp,[(ve(!0),be(vt,null,Tt(e.displayTags(d),o=>(ve(),be("span",{key:o.text,class:dt(["qc-stock-tag",{"is-more":o.more}])},He(o.text),3))),128))])):Be("",!0),y.showConsensus?(ve(),be("span",Qp,He(d.strategy_count||0)+" 策略",1)):Be("",!0),y.showPrice&&d.price!=null?(ve(),be("div",$p,[qe("span",Xp,He(e.fmtPrice(d.price)),1),qe("span",{class:dt(["qc-stock-change",d.change_pct>0?"is-up":d.change_pct<0?"is-down":""])},He(e.fmtChange(d.change_pct)),3)])):Be("",!0),e.slots.extra?(ve(),be("div",Zp,[da(a.$slots,"extra",{item:d,index:x})])):Be("",!0),e.slots.actions?(ve(),be("div",{key:5,class:"qc-stock-actions",onClick:t[0]||(t[0]=Ft(()=>{},["stop"]))},[da(a.$slots,"actions",{item:d,index:x})])):Be("",!0),e.slots.footer?(ve(),be("div",ef,[da(a.$slots,"footer",{item:d,index:x})])):Be("",!0)],42,Vp)]),_:3},8,["items","row-height"])):(ve(!0),be(vt,{key:1},Tt(y.items,(d,x)=>(ve(),be("div",{key:d.code,class:dt(["qc-stock-row",{"is-active":y.activeCode===d.code}]),"data-copy-code":y.copyCode?d.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(d.name||"")+" "+(d.code||""),onClick:o=>e.select(d),onKeydown:[ma(Ft(o=>e.select(d),["prevent"]),["enter"]),ma(Ft(o=>e.select(d),["prevent"]),["space"])]},[y.showRank?(ve(),be("div",af,He(x+1),1)):Be("",!0),qe("div",sf,[qe("div",nf,[qe("span",lf,He(d.code),1),d.status==="new"?(ve(),be("span",of,He(y.statusText.new),1)):d.status==="out"?(ve(),be("span",rf,He(y.statusText.out),1)):Be("",!0)]),qe("div",cf,[xa(He(d.name)+" ",1),da(a.$slots,"name-suffix",{item:d,index:x})]),y.showConsensus&&e.hasConsensus(d)?(ve(),be("span",df,He(e.pctOf(d))+"% 共识",1)):Be("",!0)]),(d.strategy_names||d.strategies)&&(d.strategy_names||d.strategies).length?(ve(),be("div",uf,[(ve(!0),be(vt,null,Tt(e.displayTags(d),o=>(ve(),be("span",{key:o.text,class:dt(["qc-stock-tag",{"is-more":o.more}])},He(o.text),3))),128))])):Be("",!0),y.showConsensus?(ve(),be("span",vf,He(d.strategy_count||0)+" 策略",1)):Be("",!0),y.showPrice&&d.price!=null?(ve(),be("div",mf,[qe("span",pf,He(e.fmtPrice(d.price)),1),qe("span",{class:dt(["qc-stock-change",d.change_pct>0?"is-up":d.change_pct<0?"is-down":""])},He(e.fmtChange(d.change_pct)),3)])):Be("",!0),e.slots.extra?(ve(),be("div",ff,[da(a.$slots,"extra",{item:d,index:x})])):Be("",!0),e.slots.actions?(ve(),be("div",{key:5,class:"qc-stock-actions",onClick:t[1]||(t[1]=Ft(()=>{},["stop"]))},[da(a.$slots,"actions",{item:d,index:x})])):Be("",!0),e.slots.footer?(ve(),be("div",gf,[da(a.$slots,"footer",{item:d,index:x})])):Be("",!0)],42,tf))),128))],64)):(ve(),fa(A,{key:1,type:"empty",title:y.emptyText},null,8,["title"]))])}const yf=Ca(Op,[["render",hf]]),bf={name:"qc-detail-split",props:{enabled:{type:Boolean,default:!1},rootClass:{type:String,default:""},listClass:{type:String,default:""},paneClass:{type:String,default:""}}},wf={key:0,class:"split-divider","data-split-resize":""};function kf(a,t,y,e,v,f){return ve(),be("div",{class:dt(["detail-split-wrap",[y.rootClass,{"detail-split":y.enabled}]]),"data-split-root":""},[qe("div",{class:dt(["detail-split-list",[y.listClass,{"w-100":!y.enabled}]])},[da(a.$slots,"list")],2),y.enabled?(ve(),be("div",wf)):Be("",!0),y.enabled?(ve(),be("div",{key:1,class:dt(["detail-split-pane",y.paneClass])},[da(a.$slots,"pane")],2)):Be("",!0)],2)}const _f=Ca(bf,[["render",kf]]),cn={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}},xf=200,Sf={name:"qc-top-tabs",components:{AppIcon:Sa},setup(){const a=Da("qcState");if(!a)return{};const t=lt(()=>a.currentPage&&a.currentPage.value||""),y=lt(()=>a.currentSubPage&&a.currentSubPage.value||""),e=lt(()=>a.menus&&a.menus.value||[]),v=lt(()=>{const i=e.value.find(m=>m.key===t.value);return i&&i.subPages||[]}),f=lt(()=>v.value.map(i=>({key:i,label:a.subPageNames&&a.subPageNames[i]||i,icon:cn[t.value]&&cn[t.value][i]||"circle-dot"}))),A=Nt(null),p=Nt(!1),d=Nt(!1),x=Nt(!1);let o=null,M=null;function q(){const i=A.value;i&&(d.value=i.scrollLeft>2,x.value=i.scrollLeft<i.scrollWidth-i.clientWidth-2)}function R(){const i=A.value;i&&(p.value=i.scrollWidth>i.clientWidth+2,q())}function E(i){const m=A.value;m&&m.scrollBy({left:i*xf,behavior:"smooth"})}function D(i){a.openTab?a.openTab(t.value,i):a.currentSubPage&&(a.currentSubPage.value=i)}function N(i){D(i),Od(()=>{const m=A.value;if(!m)return;const H=m.querySelector('[data-tab-key="'+i+'"]');H&&H.scrollIntoView({block:"nearest",inline:"nearest"})})}const T=lt(()=>{if(!p.value)return[];const i=A.value;if(!i)return[];const m=i.getBoundingClientRect(),H=new Set;return i.querySelectorAll(".qc-top-tab").forEach(j=>{const K=j.getBoundingClientRect();K.left>=m.left-2&&K.left<m.right-24&&H.add(j.getAttribute("data-tab-key"))}),f.value.filter(j=>!H.has(j.key))});function u(i,m){i.key==="ArrowLeft"?(i.preventDefault(),E(-1)):i.key==="ArrowRight"?(i.preventDefault(),E(1)):(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),D(m.key))}return Ka(()=>{R(),o=new ResizeObserver(()=>{clearTimeout(M),M=setTimeout(R,100)}),A.value&&o.observe(A.value),window.addEventListener("resize",R)}),Nd(()=>{o&&o.disconnect(),window.removeEventListener("resize",R),clearTimeout(M)}),{state:a,tabs:f,currentSubPage:y,go:D,scrollRef:A,hasOverflow:p,canScrollLeft:d,canScrollRight:x,scrollByStep:E,scrollToTab:N,hiddenTabs:T,onTabKeydown:u,updateScrollState:q}}},Cf={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},qf=["disabled"],Ef=["data-tab-key","aria-selected","title","onClick","onKeydown"],Mf={class:"qc-top-tab-label"},Tf=["disabled"];function Df(a,t,y,e,v,f){const A=ea("AppIcon"),p=ea("el-dropdown-item"),d=ea("el-dropdown-menu"),x=ea("el-dropdown");return e.tabs.length?(ve(),be("div",Cf,[e.hasOverflow?(ve(),be("button",{key:0,class:"qc-top-tabs-btn",disabled:!e.canScrollLeft,"aria-label":"向左滚动",onClick:t[0]||(t[0]=o=>e.scrollByStep(-1))},"‹",8,qf)):Be("",!0),qe("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:t[1]||(t[1]=(...o)=>e.updateScrollState&&e.updateScrollState(...o))},[(ve(!0),be(vt,null,Tt(e.tabs,o=>(ve(),be("div",{key:o.key,"data-tab-key":o.key,class:dt(["qc-top-tab",{"is-active":e.currentSubPage===o.key}]),role:"tab",tabindex:"0","aria-selected":e.currentSubPage===o.key?"true":"false",title:o.label,onClick:M=>e.go(o.key),onKeydown:M=>e.onTabKeydown(M,o)},[mt(A,{name:o.icon,size:14},null,8,["name"]),qe("span",Mf,He(o.label),1)],42,Ef))),128))],544),e.hasOverflow?(ve(),be("button",{key:1,class:"qc-top-tabs-btn",disabled:!e.canScrollRight,"aria-label":"向右滚动",onClick:t[2]||(t[2]=o=>e.scrollByStep(1))},"›",8,Tf)):Be("",!0),e.hasOverflow&&e.hiddenTabs.length?(ve(),fa(x,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:e.scrollToTab},{dropdown:pa(()=>[mt(d,null,{default:pa(()=>[(ve(!0),be(vt,null,Tt(e.hiddenTabs,o=>(ve(),fa(p,{key:o.key,command:o.key,class:dt({"is-active":e.currentSubPage===o.key})},{default:pa(()=>[mt(A,{name:o.icon,size:14},null,8,["name"]),xa(" "+He(o.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:pa(()=>[t[3]||(t[3]=qe("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):Be("",!0)])):Be("",!0)}const Pf=Ca(Sf,[["render",Df]]);(function(){const{ref:a,computed:t,inject:y}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
    `,setup(){const e=y("qcState");if(!e)return{};const v=a(!1),f=a(localStorage.getItem("qc.hideNonTradingBanner")==="1"),A=()=>{f.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},p=t(()=>e.marketData&&e.marketData.value||{}),d=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:e.menus,marketData:p,bannerDismissed:f,dismissBanner:A,goMerrill:d,currentPage:e.currentPage,currentSubPage:e.currentSubPage,currentUser:e.currentUser,currentPageName:e.currentPageName,searchQuery:e.searchQuery,searchStocks:e.searchStocks,onSearchSelect:e.onSearchSelect,selectedDate:e.selectedDate,onDateChange:e.onDateChange,disabledDate:e.disabledDate,refreshCalendarData:e.refreshCalendarData,exportCSV:e.exportCSV,loading:e.loading,lastLoadTime:e.lastLoadTime,showUserMenu:v,resetSetupWizard:e.resetSetupWizard,showChangePassword:e.showChangePassword,themes:e.themes,currentTheme:e.currentTheme,changeTheme:e.changeTheme,handleLogout:e.handleLogout,subPageNames:e.subPageNames,keyClick:e.keyClick,t:e.t,subTabLabel:function(x,o){const M="sub."+x.key+"."+o,q=e.t(M);if(q!==M)return q;const R="sub."+o,E=e.t(R);return E!==R&&E?E:e.subPageNames[o]||o}}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                </div>`,setup(){const t=a("qcState");if(!t)return{};const{ref:y,computed:e}=Vue,v=y(0),f=y(0),A=y(!1),p=e(()=>{const K={day:"date",week:"week",month:"month",year:"year"},Y=t.currentView&&t.currentView.value||"day";return K[Y]||"date"}),d={day:"日",week:"周",month:"月",year:"年"};function x(K){return t.t&&t.t("view."+K)||d[K]||K}function o(K){t.switchView?t.switchView(K):t.currentView&&(t.currentView.value=K)}let M=null;function q(K){const Y=K.touches&&K.touches[0];Y&&(v.value=Y.clientX,f.value=Y.clientY)}async function R(){if(!A.value){A.value=!0;try{await t.refreshCalendarData()}catch{}M&&clearTimeout(M),M=setTimeout(()=>{A.value=!1},500)}}function E(K){if(!(window.innerWidth<=768))return;const Y=K.changedTouches&&K.changedTouches[0];if(!Y)return;const se=window.__quantModules&&window.__quantModules.gestures||{};if((typeof se.judgePullToRefresh=="function"?se.judgePullToRefresh(f.value,Y.clientY):Y.clientY-f.value>=60)&&(window.scrollY||0)<=0){K.stopPropagation(),R();return}if(t.currentSubPage.value==="pool")return;const z=Y.clientX-v.value,U=Y.clientY-f.value;Math.abs(z)>50&&Math.abs(z)>Math.abs(U)*1.2&&(t.navigateDate(z<0?1:-1),K.stopPropagation())}const D=y(!1),N=y(!1),T=y(""),u=y(null),i=y([]);function m(K){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[K]||K}async function H(){if(t.selectedDate.value){D.value=!0,N.value=!0,T.value="",u.value=null,i.value=[];try{const K=await fetch("/api/calendar/"+t.selectedDate.value+"/compare"),Y=await K.json();if(!K.ok)throw new Error(Y.detail||"HTTP "+K.status);u.value=Y;const se=Y&&Y.comparison||{},F=[];for(const z of Object.keys(se)){if(z==="all_intersection")continue;const U=se[z]||{},W=z.split("_vs_");F.push({label:m(W[0])+" ↔ "+m(W[1]),interCount:U.intersection_count||0,inter:(U.intersection||[]).join(", "),onlyS1Count:U.only_s1_count||0,onlyS1:(U.only_s1||[]).join(", "),onlyS2Count:U.only_s2_count||0,onlyS2:(U.only_s2||[]).join(", ")})}i.value=F}catch(K){T.value=String(K&&K.message?K.message:K)}finally{N.value=!1}}}let j="";return Vue.watch(()=>{const K=t.stockPool,Y=K&&K.value||[];return{n:Y.length,first:Y[0]&&Y[0].code,split:!!t.detailSplitEnabled.value}},(K,Y)=>{if(!K.split||!K.first||K.n===0)return;const se=t.stockDetail&&t.stockDetail.value&&t.stockDetail.value.stock,F=(t.stockPool.value||[]).some(z=>z.code===se);if(!se||!F){if(j===K.first&&se&&F===!1&&K.n>1)return;j=K.first,t.showStockDetail&&t.showStockDetail(K.first)}},{immediate:!0}),{...t,calType:p,pullRefreshing:A,onCalTouchStart:q,onCalTouchEnd:E,viewLabel:x,switchViewLocal:o,compareVisible:D,compareLoading:N,compareError:T,compareData:u,comparePairs:i,openStrategyCompare:H}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:`
                <!-- V5.2.3: 执行看板移入系统配置 → 本组件在 system/ops+execution 下也渲染 (V6.9.1-fix2: ops 菜单也含 execution) -->
                <div v-if="currentPage === 'strategies' || ((currentPage === 'system' || currentPage === 'ops') && currentSubPage === 'execution')" key="strategies">
                    <div v-if="currentSubPage === 'overview'">
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留操作区 (回测入口 + 交易日信息) -->
                        <div class="qc-page-tools">
                            <!-- v3.17.4 (FR-3.17.4): 回测工作台入口 -->
                            <button type="button" class="bt-entry-btn" @click="navigateTo('research', 'backtest')">回测工作台</button> <!-- V5.0.11: 回测移入策略研究, 入口跳转 -->
                            <div class="flex-c-gap-12">
                                <span class="text-base-secondary">{{ t('strategies.latestTradeDay') }}{{ dashboardData.latest_date || '-' }}</span>
                                <span class="text-xs-tertiary" v-if="timeSinceRefresh">{{ timeSinceRefresh }}</span>
                            </div>
                        </div>

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
                                                    <span class="mc-seg-name" v-if="g.width > 12">{{ g.name }}</span>
                                                </div>
                                            </div>
                                            <div class="mc-times">
                                                <span v-for="(g, j) in cyc.segs" :key="'t' + j" class="mc-time-chip"
                                                      @click.prevent="g.stage && showTimelineStage(g.stage)" :title="mcSegTitle(g)">
                                                    <span class="mc-time-dot" :style="{background: getTimelineStageColor(g.stage)}"></span>
                                                    <b>{{ g.name }}</b>
                                                    <span class="mc-time-range" v-if="g.start">{{ g.start }}<template v-if="g.end"> → {{ g.end }}</template></span>
                                                    <span class="mc-time-months" v-if="g.months">{{ g.months }} 月</span>
                                                </span>
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
    `,setup(){const t=a("qcState"),y=Vue.ref(!1);if(!t)return{};const{computed:e}=Vue;let v=0;const f=e(()=>{var g;return((g=t.merrillData)==null?void 0:g.value)||{}}),A=e(()=>{var g;return((g=t.marketData)==null?void 0:g.value)||{}}),p=e(()=>{var g;return((g=t.dashboardData)==null?void 0:g.value)||{}}),d=e(()=>{var g;return((g=t.healthMetrics)==null?void 0:g.value)||[]}),x=e(()=>{var g;return((g=t.filteredConsensusRank)==null?void 0:g.value)||[]}),o=e(()=>{const g={};for(const J of x.value)J.code&&J.name&&(g[J.code]=J.name);return g}),M={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function q(g){return M[g]||g}const R=e(()=>A.value.date||p.value.latest_date||"-"),E=e(()=>{const g=A.value;return!g||Object.keys(g).length===0?"数据加载中...":g.is_trading_day&&g.in_trading_hours?"● 交易中":g.is_trading_day?"已收盘":"○ 非交易日"}),D=e(()=>{const g=f.value.next_stage_prediction;return g&&g.next_stage_name&&g.transition_probability>.2?`→${g.next_stage_name} ${(g.transition_probability*100).toFixed(2)}%`:""}),N=e(()=>{const g=[],J=p.value.pool_changes||{},ce=J.new_count||0;if(ce>0){const Fe=J.new_stock_names||{},Ke=(J.new_stocks||[]).map(ct=>Fe[ct]||o.value[ct]||ct).slice(0,4).join("、");g.push({icon:"sparkles",level:"new",text:`今日新入池 ${ce} 只${Ke?" · "+Ke:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(t.currentPage.value="calendar",t.currentSubPage.value="pool"),t.statusFilter.value="new"}})}for(const Fe of d.value.filter(Ke=>Ke.degraded))g.push({icon:"alert-triangle",level:"warn",text:`数据源 ${q(Fe.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):t.currentPage.value="system"}});const Te=f.value.timing;Te&&Te.progress_percent&&Te.progress_percent>100?g.push({icon:"clock",level:"warn",text:`美林「${f.value.name}」已超期 ${Te.progress_percent}%`,action:()=>{t.currentSubPage.value="merrill"}}):Te&&Te.maturity&&f.value.name&&g.push({icon:"clock",level:"info",text:`美林「${f.value.name}」阶段成熟度 ${Te.maturity}`,action:()=>{t.currentSubPage.value="merrill"}});const je=A.value;return je&&je.is_trading_day===!1&&je.date&&g.push({icon:"calendar",level:"info",text:`${je.date} 非交易日`,action:()=>{t.currentSubPage.value="market"}}),g}),T=e(()=>{const g=[],J=f.value.name||"",ce=f.value.timing||{},Te=["复苏","成长","过热"],je=["滞胀","衰退"];Te.some(ut=>J.includes(ut))&&g.push({kind:"opportunity",source:"美林",text:J+" 顺势",action:()=>{t.currentSubPage.value="merrill"}}),je.some(ut=>J.includes(ut))&&g.push({kind:"risk",source:"美林",text:J+" 防守",action:()=>{t.currentSubPage.value="merrill"}}),ce.progress_percent&&ce.progress_percent>100&&g.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{t.currentSubPage.value="merrill"}});const Fe=p.value.pool_changes||{},Ke=(Fe.new_count||0)-(Fe.out_count||0);Ke>=3?g.push({kind:"opportunity",source:"池变动",text:"净入池 +"+Ke,action:()=>{t.statusFilter.value="new",t.currentPage.value="calendar",t.currentSubPage.value="pool"}}):Ke<=-3&&g.push({kind:"risk",source:"池变动",text:"净出池 "+Ke,action:()=>{t.currentSubPage.value="consensus"}});const ct=A.value.market_sentiment,ot=ct&&ct.text||"";(ot.includes("乐观")||ot.includes("积极")||ot.includes("亢奋"))&&g.push({kind:"opportunity",source:"情绪",text:ot,action:()=>{t.currentSubPage.value="market"}}),(ot.includes("悲观")||ot.includes("恐慌")||ot.includes("低迷"))&&g.push({kind:"risk",source:"情绪",text:ot,action:()=>{t.currentSubPage.value="market"}});for(const ut of d.value.filter(zt=>zt.degraded))g.push({kind:"risk",source:"数据",text:q(ut.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):t.currentPage.value="system"}});return g}),u=e(()=>{var g;return((g=t.merrillTimeline)==null?void 0:g.value)||t.merrillTimeline||{cycles:[]}}),i=e(()=>{var g;return((g=t.timelineLoading)==null?void 0:g.value)||!1}),m=Vue.ref(null),H=Vue.ref(!1),j=Vue.reactive({top:0,left:0,right:null,bottom:null,maxWidth:460});function K(g){const J=g&&g.currentTarget,ce=document.querySelector(".tl-click-pop");if(!J||!ce)return;const Te=J.getBoundingClientRect(),je=ce.offsetWidth||340,Fe=ce.offsetHeight||220,Ke=10,ct=J.closest(".merrill-timeline-block"),ot=ct?ct.getBoundingClientRect():Te,ut=Te.left-ot.left,zt=Te.top-ot.top,I=Te.width,ke=Te.height,ze=ot.width,De=ot.height;let Ge=null;ut+I+Ke+je<=ze?Ge=ut+I+Ke:ut-Ke-je>=0?Ge=ut-Ke-je:Ge=Math.max(8,Math.min(ut,ze-je-8));const Re=zt+ke/2-Fe/2,Xe=Math.max(8,Math.min(Re,De-Fe-8));j.top=Xe,j.left=Ge,j.right=null,j.bottom=null}const Y=Vue.computed(function(){const g={};return j.top!=null&&(g.top=j.top+"px"),j.left!=null&&(g.left=j.left+"px"),j.right!=null&&(g.right=j.right+"px"),g});function se(g,J){let ce=null;const Te=u.value&&u.value.cycles||[];for(const je of Te){const Fe=(je.stages||[]).find(Ke=>Ke.stage===g&&Ke.is_current);if(Fe){ce=Fe;break}}if(!ce)for(const je of Te){const Fe=(je.stages||[]).find(Ke=>Ke.stage===g);if(Fe){ce=Fe;break}}ce&&(m.value=ce,H.value=!0,Vue.nextTick(function(){K(J)}))}function F(){H.value=!1,m.value=null}function z(g){const J=t.merrillStagesConfig,Te=(J&&J.value?J.value:J||{})[g]||{};return Te.color||Te.bg_color||"var(--color-primary)"}function U(g){const J=t.merrillStagesConfig,ce=J&&J.value?J.value:J||{};return ce[g]&&ce[g].name||""}function W(){const g=t.merrillStagesConfig;return g&&g.value?g.value:g||{}}function le(g){return W()[g]&&W()[g].description||""}function Q(g){const J=g&&g.stages?g.stages:[];if(!J.length)return"";const ce=J[0]&&J[0].start?String(J[0].start).slice(0,4):"",Te=J[J.length-1]||{},je=Te.end?String(Te.end).slice(0,4):Te.start?String(Te.start).slice(0,4):"";return ce||je?ce?ce+"–"+je:je:""}function s(g){const J=g.start?String(g.start).slice(0,4):"",ce=g.end?String(g.end).slice(0,4):J?"至今":"";return J?ce?J+"–"+ce:J:""}function w(g){const J=g.essence||g.trigger||le(g.stage)||"";return g.highlight?J?J+" · "+g.highlight:g.highlight:J}function l(){const g=f.value.indicators||{},J=f.value.stage||"",ce={recovery:[["PMI",g.pmi],["GDP",g.gdp_growth],["M2",g.m2_growth]],overheat:[["PPI",g.ppi],["CPI",g.cpi],["PMI",g.pmi]],stagflation:[["CPI",g.cpi],["PPI",g.ppi],["GDP",g.gdp_growth]],recession:[["PMI",g.pmi],["GDP",g.gdp_growth],["CPI",g.cpi]]},Te=(ce[J]||ce.recession).filter(je=>je[1]!=null&&je[1]!==0);return Te.length?"实时 · "+Te.map(je=>je[0]+" "+je[1]+"%").join(" ｜ "):""}function _(g,J,ce){const je=(W()[g.stage]||{}).color||"var(--color-primary)",Fe=J||[],Ke=Fe.map(I=>I.duration_months||0),ct=Ke.reduce((I,ke)=>I+ke,0),ot=ct>0?Ke[ce]/ct*100:100/Math.max(1,Fe.length),ut=ce===0,zt=ce===Fe.length-1;return{flex:"0 0 "+ot+"%",background:je,borderRadius:ut?"6px 0 0 6px":zt?"0 6px 6px 0":"0"}}function h(g){const J=g.length;if(J<=4)return[g];const ce=Math.ceil(J/2);return[g.slice(0,ce),g.slice(ce).reverse()]}function k(g){const J=W()[g]||{},ce=J.color||"var(--color-primary)";return{background:J.bg_color||"var(--bg-card)",borderColor:ce,color:"var(--text-on-chip)",boxShadow:"inset 0 0 0 1px rgba(var(--primary-rgb, 37 99 235), 0.06)"}}const Z=Vue.reactive({}),L=Vue.ref(null);let b=null,r=null,S=null;function c(){if(document.querySelector(".merrill-timeline-block"))try{document.querySelectorAll(".merrill-timeline .tl-cycle").forEach((J,ce)=>{const Te=J.querySelector(".tl-stage-rows"),je=J.querySelector(".tl-row-top"),Fe=J.querySelector(".tl-row-bottom"),Ke=je?Array.from(je.querySelectorAll(".merrill-stage-chip")):[],ct=Fe?Array.from(Fe.querySelectorAll(".merrill-stage-chip")).reverse():[],ot=Ke.concat(ct);if(!Te||ot.length<2){Z[ce]={d:"",vb:"0 0 1 1"};return}const ut=Te.getBoundingClientRect(),zt=Math.max(1,ut.width),I=Math.max(1,ut.height),ke=Ke.length,ze=ot.map(Ge=>{const Re=Ge.getBoundingClientRect();return{x:Re.left+Re.width/2-ut.left,y:Re.top+Re.height/2-ut.top}});let De="M "+ze[0].x.toFixed(1)+" "+ze[0].y.toFixed(1);for(let Ge=1;Ge<ze.length;Ge++){const Re=ze[Ge-1],Xe=ze[Ge];Ge===ke&&(De+=" L "+Re.x.toFixed(1)+" "+Xe.y.toFixed(1)),De+=" L "+Xe.x.toFixed(1)+" "+Xe.y.toFixed(1)}Z[ce]={d:De,vb:"0 0 "+zt.toFixed(1)+" "+I.toFixed(1)}})}catch(g){console.error("[tl] buildTlPaths error",g)}}function O(g){return Z[g]||{d:"",vb:"0 0 1 1"}}function re(g){L.value=g}function X(){L.value=null}const P=Vue.ref([]);function G(g){return P.value.indexOf(g)!==-1}function oe(g){const J=P.value.slice(),ce=J.indexOf(g);ce!==-1?J.splice(ce,1):J.push(g),P.value=J,Vue.nextTick(function(){c&&c()})}function fe(){const g=document.querySelector(".merrill-timeline-block");if(!g)return;const J=g.querySelector(".tl-spine");J?J.scrollIntoView({behavior:"smooth",block:"end"}):g.scrollIntoView({behavior:"smooth",block:"end"})}const Me=Vue.computed(function(){const g=W();return["recovery","overheat","stagflation","recession","default"].filter(function(ce){return g[ce]&&g[ce].name}).map(function(ce){return{key:ce,name:g[ce].name,color:g[ce].color||"var(--color-primary)"}})});function ee(g){r&&clearTimeout(r),r=setTimeout(()=>{r=null,Vue.nextTick(c)},g||120)}Vue.onMounted(()=>{document.querySelector(".merrill-timeline-block")&&(ee(0),ee(800),b=()=>ee(150),window.addEventListener("resize",b),S=new MutationObserver(()=>ee(120)),S.observe(document.body||document.documentElement,{childList:!0,subtree:!0}))}),Vue.onBeforeUnmount(()=>{b&&window.removeEventListener("resize",b),r&&clearTimeout(r),S&&(S.disconnect(),S=null)});const ue=Vue.ref([]),me=Vue.ref(null),pe=Vue.ref(!1),he=Vue.ref(!1),te=Vue.ref(7),xe=Vue.ref(""),Pe=Vue.ref(""),ne=Vue.computed(()=>{const g=new Set;return(ue.value||[]).forEach(function(J){J.task&&g.add(J.task)}),Array.from(g).sort()}),ae=Vue.computed(function(){const g=me.value&&me.value.success_rate||0;return g>=80?"color-success":g>=50?"color-warning":"color-danger"});function ye(g,J){return g>0&&J/g>=.8?"status-ok":g>0&&J/g>=.5?"status-warn":"status-bad"}async function Ne(){const g=++v;pe.value=!0,he.value=!1;try{const J=window.__quantModules&&window.__quantModules.core||{},ce=typeof J.authHeaders=="function"?J.authHeaders():{},Te=new URLSearchParams({days:String(te.value)});xe.value&&Te.set("task",xe.value),Pe.value&&Te.set("status",Pe.value);const[je,Fe]=await Promise.all([fetch("/api/system/execution-history?"+Te.toString(),{headers:ce}).then(function(Ke){return Ke.json()}),fetch("/api/system/execution-summary?days="+te.value,{headers:ce}).then(function(Ke){return Ke.json()})]);if(g!==v)return;ue.value=je&&je.data||[],me.value=Fe&&Fe.data||null}catch(J){console.error("[execution] 执行数据加载失败:",J),he.value=!0}finally{g===v&&(pe.value=!1)}}const Ie=window.__quantModules&&window.__quantModules.i18n||{},We=typeof Ie.t=="function"?Ie.t:function(g){return String(g)},Ue=Vue.ref([]),wt=Vue.ref(null),st=Vue.ref(null),At=Vue.ref(""),Se=Vue.ref([]),_e=Vue.ref(!1);let Le=null;const Ae=Vue.computed(function(){const g=st.value&&st.value.dates||[];return g.length&&!At.value&&(At.value=g[g.length-1].date),g}),$e=Vue.computed(function(){const g=(Ue.value||[]).find(function(ce){return ce.enabled});if(!g||g.countdown_seconds==null)return"—";const J=g.countdown_seconds;return Math.floor(J/3600)+"h"+String(Math.floor(J%3600/60)).padStart(2,"0")+"m"}),Ze=Vue.computed(function(){const g=(Ue.value||[]).find(function(J){return J.enabled});if(!g||g.countdown_seconds==null||g.countdown_seconds<0)return"";try{return new Date(Date.now()+g.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),tt=Vue.computed(function(){const g=wt.value;return!g||g.phase==="idle"?We("exec.waiting"):g.phase==="running"?We("exec.running")+(g.current_sid?" · "+g.current_sid:""):g.phase==="done"?We("exec.done"):We("exec.failed")}),Dt=Vue.computed(function(){return wt.value&&wt.value.phase==="running"?"loader":"check-circle-2"}),Pt=Vue.computed(function(){const g=st.value&&st.value.dates||[];return g.length?g[g.length-1].date:"—"}),ft=Vue.computed(function(){const g=st.value&&st.value.dates||[],J=g[g.length-1];return J&&J.visible?"color-success":"color-danger"}),Lt=Vue.computed(function(){const g=st.value&&st.value.dates||[],J=g[g.length-1];return J?J.day_view_total:"—"});function Ut(g){const J=window.__quantModules&&window.__quantModules.core||{},ce=typeof J.authHeaders=="function"?J.authHeaders():{};return fetch(g,{headers:ce}).then(function(Te){return Te.json()})}async function Qt(){const g=++v;try{const[J,ce,Te]=await Promise.all([Ut("/api/strategies/execution/plan"),Ut("/api/strategies/execution/status"),Ut("/api/strategies/execution/results?days=7")]);if(g!==v)return;Ue.value=J&&J.data&&J.data.plans||[],wt.value=ce&&ce.data||null,st.value=Te&&Te.data||null,wt.value&&wt.value.phase==="running"?et():kt()}catch(J){console.error("[execution-monitor] 监控数据加载失败:",J)}}function et(){kt(),Le=setInterval(function(){Ut("/api/strategies/execution/status").then(function(g){wt.value=g&&g.data||null,wt.value&&wt.value.phase!=="running"&&(kt(),Qt())}).catch(function(){})},5e3)}function kt(){Le&&(clearInterval(Le),Le=null)}async function Gt(g){if(!g)return;const J=++v;_e.value=!0;try{const ce=await Ut("/api/strategies/execution/trace/"+encodeURIComponent(g));if(J!==v)return;const Te=ce&&ce.data||null;Se.value=Te&&Te.steps||[]}catch(ce){console.error("[execution-trace] 追溯加载失败:",ce)}finally{J===v&&(_e.value=!1)}}Vue.watch(function(){return t.currentSubPage&&t.currentSubPage.value},function(g){g==="execution"?(Ne(),Qt()):kt()},{immediate:!0}),Vue.watch(function(){const g=t.currentSubPage&&t.currentSubPage.value,J=t.filteredConsensusRank&&t.filteredConsensusRank.value||[],ce=t.marketData&&t.marketData.value||{};return{sub:g,split:!!t.detailSplitEnabled.value,top5:J.slice(0,5),rank:J,indices:(ce.indices||[]).map(function(Te){return Te})}},function(g,J){if(g.split){if(g.sub==="overview"){if(!g.top5.length)return;const ce=t.stockDetail&&t.stockDetail.value&&t.stockDetail.value.stock,Te=g.top5.some(function(je){return je.code===ce});(!ce||!Te)&&t.showStockDetail&&t.showStockDetail(g.top5[0].code)}else if(g.sub==="consensus"){if(!g.rank.length)return;const ce=t.stockDetail&&t.stockDetail.value&&t.stockDetail.value.stock,Te=g.rank.some(function(je){return je.code===ce});(!ce||!Te)&&t.showStockDetail&&t.showStockDetail(g.rank[0].code)}else if(g.sub==="market"){if(!g.indices.length)return;const ce=t.indexDetail&&t.indexDetail.value&&t.indexDetail.value.code,Te=g.indices.some(function(je){return je.code===ce});(!ce||!Te)&&t.showIndexDetail&&t.showIndexDetail(g.indices[0])}}},{immediate:!0});const ht=Vue.ref("band"),Yt=["recession","recovery","overheating","stagflation"];function Et(g){if(!g)return null;const J=String(g).split("-"),ce=parseInt(J[0],10),Te=parseInt(J[1]||"1",10);return isFinite(ce)?ce+(Te-1)/12:null}function Qe(g){const J=Math.floor(g);let ce=Math.round((g-J)*12)+1;return ce>12&&(ce=12),ce<1&&(ce=1),J+"-"+(ce<10?"0"+ce:""+ce)}function It(){return t.merrillData&&t.merrillData.value&&t.merrillData.value.timing||{}}function xt(){return t.merrillData&&t.merrillData.value&&t.merrillData.value.color||"var(--color-success)"}function $(g,J){const ce=It(),Te=Number(ce.avg_duration_months)||0,je=Math.min(100,Number(ce.progress_percent)||0),Fe=Et(ce.current_stage_start_date),Ke=[];let ct=null;if((g||[]).forEach(function(Re){const Xe=Et(Re.start);ct==null&&Xe!=null&&(ct=Xe);const yt=!!(Re.is_current||Fe!=null&&Xe===Fe&&!Re.duration_months),Mt=Re.name||U(Re.stage);if(yt&&Te>0){const bt=Te*je/100;bt>.5&&Ke.push({stage:Re.stage,name:Mt,months:bt,live:!0,start:Re.start});const Xt=Te-bt;Xt>.5&&Ke.push({stage:Re.stage,name:"剩余(预测)",months:Xt,ghost:!0,start:Re.start})}else{let bt=Number(Re.duration_months)||0;if(!bt&&Xe!=null){const Xt=Et(Re.end);Xt!=null&&Xt>Xe&&(bt=Math.max(1,Math.round((Xt-Xe)*12)))}bt||(bt=1),Ke.push({stage:Re.stage,name:Mt,months:bt,live:yt,start:Re.start,end:Re.end})}if(yt&&J&&Te>0){const bt=t.merrillData&&t.merrillData.value&&t.merrillData.value.next_stage_prediction;bt&&Ke.push({stage:bt.next_stage,name:(bt.next_stage_name||"下一阶段")+" (预测)",months:Te,ghost:!0,prob:bt.transition_probability})}}),!Ke.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};const ot=Ke.reduce(function(Re,Xe){return Re+Xe.months},0)||1,ut=ct??0;let zt=0,I=0;const ke=Ke.map(function(Re){const Xe=zt;Re.ghost||(I+=Re.months),zt+=Re.months;const yt={stage:Re.stage,name:Re.name,months:Math.round(Re.months),ghost:!!Re.ghost,live:!!Re.live,prob:Re.prob,left:Xe/ot*100,width:Math.max(2,Re.months/ot*100)},Mt=Et(Re.start),bt=Et(Re.end);return yt.start=Mt!=null?Qe(Mt):Qe(ut+Xe/12),yt.end=bt!=null?Qe(bt):"",yt.predicted=Mt==null,yt}),ze=Ke[Ke.length-1],De=Ke.some(function(Re){return Re.ghost}),Ge=ze&&ze.end?ze.end:Qe(ut+ot/12);return{segs:ke,axisStart:Qe(ut),axisEnd:Ge,nowPct:De?I/ot*100:null}}function ge(g){return(g.stages||[]).some(function(J){return J.is_current})}const at=Vue.computed(function(){const g=t.merrillTimeline&&t.merrillTimeline.value&&t.merrillTimeline.value.cycles||[];if(!g.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};let J=null;for(let ce=g.length-1;ce>=0;ce--)if(ge(g[ce])){J=g[ce];break}return J||(J=g[g.length-1]),$(J.stages,!0)}),St=Vue.computed(function(){return(t.merrillTimeline&&t.merrillTimeline.value&&t.merrillTimeline.value.cycles||[]).filter(function(J){return!ge(J)}).map(function(J){return{label:J.label,years:Q(J),segs:$(J.stages,!1).segs}})}),it=Yt,Ot=Vue.computed(function(){return(t.merrillTimeline&&t.merrillTimeline.value&&t.merrillTimeline.value.cycles||[]).map(function(J){const ce={};Yt.forEach(function(je){ce[je]=0});let Te=null;return(J.stages||[]).forEach(function(je){ce[je.stage]!=null&&(ce[je.stage]+=Number(je.duration_months)||0),je.is_current&&(Te=je.stage)}),{label:J.label,sum:ce,cur:Te}})}),ta=Vue.computed(function(){let g=0;return Ot.value.forEach(function(J){Yt.forEach(function(ce){J.sum[ce]>g&&(g=J.sum[ce])})}),g||1}),ia=Vue.computed(function(){const g=t.merrillSnapshots&&t.merrillSnapshots.value||[],J=[];return g.forEach(function(ce){const Te=J[J.length-1];Te&&Te.stage===ce.stage?(Te.count++,Te.last=ce.timestamp):J.push({stage:ce.stage,name:ce.stage_name||U(ce.stage),count:1,first:ce.timestamp,last:ce.timestamp})}),J}),ra=Vue.computed(function(){return Math.max(100,Math.min(200,Number(It().progress_percent)||0))}),aa=Vue.computed(function(){const g=Number(It().progress_percent)||0;return{width:Math.max(0,Math.min(100,g/ra.value*100))+"%",background:g>100?"linear-gradient(90deg, "+xt()+", var(--color-warning))":xt()}}),$t=Vue.computed(function(){return 100/ra.value*100}),Wt=Vue.computed(function(){const g=It().predicted_end;if(!g)return"";if(typeof g=="string")return g;const J=g.optimistic||g.earliest||"",ce=g.pessimistic||g.latest||"";return J&&ce?J+" ~ "+ce:g.base||g.mid||J||ce||""});function jt(g){const J=/^#([0-9a-f]{6})$/i.exec(String(g).trim());if(!J)return"var(--merrill-chip-text)";const ce=parseInt(J[1],16),Te=Fe=>(Fe/=255,Fe<=.04045?Fe/12.92:Math.pow((Fe+.055)/1.055,2.4));return .2126*Te(ce>>16&255)+.7152*Te(ce>>8&255)+.0722*Te(ce&255)>.42?"var(--merrill-chip-text)":"var(--merrill-chip-text-invert)"}function Jt(g){const J=z(g.stage);return g.ghost?{left:g.left+"%",width:g.width+"%",borderColor:J,color:"var(--text-primary)",background:"repeating-linear-gradient(45deg, color-mix(in srgb, "+J+" 27%, transparent) 0, color-mix(in srgb, "+J+" 27%, transparent) 5px, transparent 5px, transparent 10px)"}:{left:g.left+"%",width:g.width+"%",background:J,color:jt(J)}}function gt(g){const J=[g.name];return g.start&&J.push((g.predicted?"预计起始 ":"起始 ")+g.start+(g.end?" → "+g.end:"")),g.months&&J.push("约 "+g.months+" 个月"),g.ghost&&J.push("预测(尚未发生)"),g.prob!=null&&J.push("转移概率 "+(g.prob*100).toFixed(0)+"%"),J.join(" · ")}function rt(g,J){const ce=z(g),Te=Math.max(.28,J/ta.value);return{background:ce,opacity:(.45+.55*Te).toFixed(2)}}return{...t,todayText:R,tradingStatus:E,merrillNext:D,todayFocus:N,todaySignals:T,merrillConfigOpen:y,getTimelineStageColor:z,getTimelineStageName:U,getTimelineStageDesc:le,timelineRows:h,tlChipStyle:k,tlPathFor:O,tlCycleYears:Q,tlGanttStyle:_,tlTipYears:s,tlTipBrief:w,tlCurrentBrief:l,tlHoverKey:L,setTlHover:re,clearTlHover:X,collapsedCycles:P,isCycleCollapsed:G,toggleCycle:oe,scrollToLatest:fe,tlLegendStages:Me,mcHistView:ht,mcCurrentBand:at,mcHistoryBands:St,mcStageKeys:it,mcMatrix:Ot,mcTrailRuns:ia,mcProgStyle:aa,mcAvgMark:$t,mcEndRange:Wt,mcSegStyle:Jt,mcSegTitle:gt,mcMxCellStyle:rt,tlClickStage:m,tlClickVisible:H,closeTlClick:F,tlClickPosStyle:Y,merrillTimeline:u,timelineLoading:i,showTimelineStage:se,execHistory:ue,execSummary:me,execLoading:pe,execError:he,execDays:te,execTaskFilter:xe,execStatusFilter:Pe,execTaskOptions:ne,execSuccessClass:ae,loadExecutionData:Ne,execRateClass:ye,execPlan:Ue,execStatus:wt,execResults:st,execTraceDate:At,execTraceSteps:Se,execTraceLoading:_e,execResultsDates:Ae,execCountdownText:$e,execNextRunText:Ze,execPhaseText:tt,execStatusIcon:Dt,execLastDate:Pt,execVisibleClass:ft,execVisibleText:Lt,loadExecutionTrace:Gt}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:`
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
    `,setup(){const t=a("qcState");if(!t)return{};function y($){t.currentSubPage.value=$}function e(){xe(),Pe(),ne()}Vue.watch(()=>t.currentSubPage&&t.currentSubPage.value,$=>{$==="autoeval"&&t.loadAiVendors&&t.loadAiVendors(),$==="datadict"&&S(),$==="health"&&k(),$==="notification"&&e()});const v=t.themeHues||[45,220,0,140,270,320,-1],f=t.themeHueNames||{},A=t.themeMode||Vue.computed(()=>"light"),p=t.themeHue||Vue.ref(45);function d($){t.changeThemeMode&&t.changeThemeMode($)}function x($){t.changeThemeHue&&t.changeThemeHue(parseInt($,10))}function o($){return t.hueColor?t.hueColor($):$<0?"hsl(0, 0%, 46%)":"hsl("+$+", 75%, 42%)"}function M($){return t.hueName?t.hueName($):f[$]||"自定义 "+$}function q($){t.setNavMode&&t.setNavMode($)}const R=Vue.ref([]),E=Vue.ref(""),D=Vue.ref("read"),N=Vue.ref(""),T=Vue.ref(!1),u=()=>window.__quantModules&&window.__quantModules.core||{},i=Vue.ref([]),m=Vue.ref(!1);async function H(){m.value=!0;try{const $=await fetch("/api/audit/logs?limit=20",{headers:u().authHeaders?u().authHeaders():{}}).then(function(ge){if(!ge.ok)throw new Error("HTTP "+ge.status);return ge.json()});i.value=$&&$.logs||[]}catch($){console.error("[system] 审计加载失败:",$),i.value=[]}finally{m.value=!1}}const j=Vue.ref(!1),K=Vue.ref(null),Y=Vue.ref(null),se=Vue.ref([]),F=Vue.ref(null);function z($){return $==="completed"?"完成":$==="running"?"运行中":$==="pending"?"排队中":$==="cancelled"?"已取消":"失败"}async function U(){try{const ge=await(await fetch("/api/jobs?limit=20")).json();ge&&ge.success&&(se.value=ge.data&&ge.data.tasks||[])}catch($){console.warn("[system] 加载任务队列失败:",$)}}async function W($){try{await fetch("/api/jobs/"+$+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),U()}catch(ge){console.warn("[system] 取消任务失败:",ge)}}function le(){U(),F.value=window.setInterval(U,15e3)}const Q=Vue.ref({items:[]}),s=Vue.ref([]),w=Vue.ref(null),l=Vue.ref({data_sources:[],alerts:[]}),_=function(){return u().authHeaders?u().authHeaders():{}},h=function($){return fetch($,{headers:_()}).then(function(ge){if(!ge.ok)throw new Error("HTTP "+ge.status);return ge.json()})};async function k(){j.value=!0,K.value=null;try{const[$,ge,at,St]=await Promise.all([h("/api/reliability/freshness"),h("/api/reliability/heal-history?limit=20"),h("/api/reliability/startup-report"),h("/api/reliability/source-health")]);Q.value=$&&$.data||{items:[]},s.value=ge&&ge.data||[],w.value=at&&at.data||null,l.value=St||{data_sources:[],alerts:[]},Y.value=new Date().toLocaleTimeString()}catch($){console.warn("[health] 加载失败:",$),K.value="健康数据加载失败: "+($.message||""),Q.value={items:[]},s.value=[]}finally{j.value=!1}}const Z=Vue.ref(!1),L=Vue.ref(""),b=Vue.ref(""),r=Vue.ref({fields:[]});async function S(){Z.value=!0,L.value="";try{const $="/api/data-dict"+(b.value?"?category="+b.value:""),ge=await h($);r.value=ge&&ge.data||{fields:[]}}catch($){console.warn("[dict] 加载失败:",$),L.value="数据字典加载失败: "+($.message||""),r.value={fields:[]}}finally{Z.value=!1}}function c($){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[$]||"var(--text-secondary)"}function O($){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[$]||$}const re=Vue.computed(()=>(Q.value?Q.value.items||[]:[]).filter(ge=>ge.status==="stale"||ge.status==="missing").length),X=Vue.ref("rules"),P=Vue.ref([]),G=Vue.ref([]),oe=Vue.ref([]),fe=Vue.ref(!1),Me=Vue.ref(""),ee=Vue.ref("price_above"),ue=Vue.ref(""),me=Vue.ref(!1),pe=Vue.ref(60),he=Vue.ref("");function te($){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[$]||$}async function xe(){fe.value=!0;try{const $=await(await fetch("/api/alerts/rules")).json();P.value=$&&$.rules||[]}catch($){he.value="规则加载失败: "+$}finally{fe.value=!1}}async function Pe(){fe.value=!0;try{const $=await(await fetch("/api/alerts/history?limit=50")).json();G.value=$&&$.history||[]}catch($){he.value="历史加载失败: "+$}finally{fe.value=!1}}async function ne(){fe.value=!0;try{const $=await(await fetch("/api/alerts/channels")).json(),ge=await(await fetch("/api/alerts/silence")).json();oe.value=$&&$.channels||[],me.value=!!(ge&&ge.silenced)}catch($){he.value="通道状态加载失败: "+$}finally{fe.value=!1}}function ae($){X.value=$,$==="rules"?xe():$==="history"?Pe():ne()}async function ye(){const $=Me.value.trim();if(!$){he.value="请填写股票代码";return}fe.value=!0;try{const ge={stock_code:$,rule_type:ee.value};if(ee.value!=="new_pool"){const St=Number(ue.value);if(isNaN(St)){he.value="阈值必须为数值";return}ge.threshold=St}const at=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ge)})).json();at&&at.rule?(he.value="规则已添加",Me.value="",ue.value="",xe()):he.value=at&&at.detail||"添加失败"}catch(ge){he.value="添加失败: "+ge}finally{fe.value=!1}}async function Ne($){try{await fetch("/api/alerts/rules/"+$.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!$.enabled})}),$.enabled=!$.enabled}catch(ge){he.value="切换失败: "+ge}}async function Ie($){try{const ge=await(await fetch("/api/alerts/rules/"+$.id,{method:"DELETE"})).json();ge&&ge.success?(he.value="规则已删除",xe()):he.value="删除失败"}catch(ge){he.value="删除失败: "+ge}}async function We(){try{const $=me.value?pe.value:0,ge=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:$})})).json();me.value=!!(ge&&ge.silenced),he.value=me.value?"已静默":"已恢复推送"}catch($){he.value="静默设置失败: "+$}}async function Ue(){me.value=!1,await We()}function wt($){return!!$&&!$.degraded}const st=Vue.computed(()=>(t&&t.analyticsRank&&t.analyticsRank.value||[]).reduce((ge,at)=>Math.max(ge,at.views||0),0)||1),At=()=>u().OPENAPI_ROUTE_BASE||"/api/openapi";async function Se(){T.value=!0;try{const $=await u().apiFetch(At()+"/keys");R.value=$&&$.data||[]}catch($){ElementPlus.ElMessage.error("加载 API Key 失败: "+($.message||""))}finally{T.value=!1}}async function _e(){try{const $=await u().apiFetch(At()+"/keys",{method:"POST",body:JSON.stringify({name:E.value||"未命名",role:D.value||"read",expire_days:365})});$&&$.success?(N.value=$.api_key||"",E.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await Se()):ElementPlus.ElMessage.error($&&($.detail||$.message)||"生成失败")}catch($){ElementPlus.ElMessage.error("生成失败: "+($.message||""))}}async function Le(){if(N.value)try{await navigator.clipboard.writeText(N.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function Ae($){try{const ge=await u().apiFetch(At()+"/keys/"+$.id,{method:"DELETE"});ge&&ge.success?(ElementPlus.ElMessage.success("Key 已吊销"),N.value&&$.prefix&&N.value.includes($.prefix)&&(N.value=""),await Se()):ElementPlus.ElMessage.error(ge&&(ge.detail||ge.message)||"吊销失败")}catch(ge){ElementPlus.ElMessage.error("吊销失败: "+(ge.message||""))}}const $e={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function Ze($){return $e[$]||$}const tt=computed(()=>{var $;return((($=t.healthMetrics)==null?void 0:$.value)||[]).map(ge=>({name:Ze(ge.name),source:ge.name,success_rate:ge.success_rate,avg_latency_ms:ge.avg_latency_ms,calls:ge.calls||0,degraded:!!ge.degraded,data_age_hours:ge.data_age_hours!=null?ge.data_age_hours:null,stale:!!ge.stale,last_fetch:ge.last_fetch||ge.last_success||null}))});function Dt($){return $.degraded?"degraded":$.success_rate==null?"unknown":$.success_rate>=90?"ok":$.success_rate>=60?"warn":"bad"}function Pt($){return $==null?"":$<1?"刚刚":$<24?Math.round($)+"小时前":Math.floor($/24)+"天前"}const ft=t.aiUsage||Vue.ref({}),Lt=Vue.computed(()=>{const $=ft.value&&ft.value.by_model||{};return Object.entries($).map(([ge,at])=>({name:ge,count:at})).sort((ge,at)=>at.count-ge.count)}),Ut=Vue.computed(()=>Lt.value.reduce(($,ge)=>Math.max($,ge.count),0)||1),Qt=Vue.computed(()=>Lt.value.reduce(($,ge)=>$+ge.count,0)||1),et=Vue.computed(()=>kt.value.reduce(($,ge)=>Math.max($,ge.count),0)||0),kt=Vue.computed(()=>{const $=ft.value&&ft.value.by_day||{},ge=[],at=new Date;for(let St=29;St>=0;St--){const it=new Date(at.getFullYear(),at.getMonth(),at.getDate()-St),Ot=it.getFullYear()+"-"+String(it.getMonth()+1).padStart(2,"0")+"-"+String(it.getDate()).padStart(2,"0");ge.push({day:Ot,count:$[Ot]||0})}return ge}),Gt=Vue.computed(()=>kt.value.reduce(($,ge)=>Math.max($,ge.count),0)||1),ht=Vue.computed(()=>{const $=ft.value&&ft.value.by_day||{},ge=new Date,at=ge.getFullYear()+"-"+String(ge.getMonth()+1).padStart(2,"0")+"-"+String(ge.getDate()).padStart(2,"0");return $[at]||0}),Yt=Vue.computed(()=>{const $=ft.value&&ft.value.by_day||{},ge=Object.keys($).filter(at=>($[at]||0)>0);return ge.length?ge[ge.length-1]:""});function Et($){t.analyticsDays&&(t.analyticsDays.value=$),typeof t.loadAnalytics=="function"&&t.loadAnalytics()}const Qe='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',It='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function xt($){return $?It:Qe}return le(),{...t,themeHues:v,themeHueNames:f,themeMode:A,themeHue:p,onThemeModeChange:d,setThemeHue:x,hueColor:o,hueName:M,onNavModeChange:q,analyticsMaxViews:st,aiModelRank:Lt,aiModelMax:Ut,aiDayTrend:kt,aiDayMax:Gt,todayAiCalls:ht,lastAiCallDay:Yt,aiTotal:Qt,aiDayPeak:et,setAnalyticsDays:Et,viewIcon:xt,openApiKeys:R,openApiKeyName:E,openApiKeyRole:D,newOpenApiKey:N,openApiLoading:T,loadOpenApiKeys:Se,generateOpenApiKey:_e,copyOpenApiKey:Le,revokeOpenApiKey:Ae,healthRows:tt,healthClass:Dt,fmtAge:Pt,staleAssetCount:re,jobQueue:se,loadJobQueue:U,cancelJob:W,jobStatusText:z,auditLogs:i,auditLoading:m,loadAuditLogs:H,healthLoading:j,healthError:K,healthUpdatedAt:Y,freshnessData:Q,healHistory:s,startupReport:w,sourceHealth:l,refreshHealth:k,statusColor:c,statusLabel:O,sourceOk:wt,dictLoading:Z,dictError:L,dictCategory:b,dictData:r,loadDataDict:S,ncTab:X,ncRules:P,ncHistory:G,ncChannels:oe,ncLoading:fe,ncNewCode:Me,ncNewType:ee,ncNewThreshold:ue,ncSilence:me,ncSilenceMinutes:pe,ncMsg:he,ncTypeLabel:te,onNcTab:ae,loadAlertRules:xe,loadAlertHistory:Pe,loadAlertChannels:ne,addAlertRule:ye,toggleAlertRule:Ne,removeAlertRule:Ie,applySilence:We,clearSilence:Ue,goSystemSub:y}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:`
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
                </div>`,setup(){const{ref:t,watch:y,onUnmounted:e}=Vue,v=a("qcState");if(!v)return{};function f(){if(!v.hasMoreAiHistory||!v.loadMoreAiHistory||v.currentPage.value!=="ai"||v.currentSubPage.value!=="history")return;const fe=document.documentElement;fe.scrollTop+window.innerHeight>=fe.scrollHeight-300&&v.loadMoreAiHistory()}window.addEventListener("scroll",f,{passive:!0}),e(()=>window.removeEventListener("scroll",f));const A=t(null),p=t(!1),d=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function x(fe){return!fe||fe.total===0||fe.rate===null||fe.rate===void 0?"--":fe.rate.toFixed(2)+"%"}const o=t(5);function M(fe){o.value=fe}function q(fe,Me){if(!fe)return"--";if(fe.available===!1)return"— 数据不可达";const ee=fe["hit_n"+Me];return ee===!0?"✓ 命中":ee===!1?"✗ 未中":"– 中性/待验证"}async function R(){p.value=!0;try{const Me=await(await fetch("/api/ai/track")).json();A.value=Me&&Me.success?Me.data:null}catch(fe){console.warn("[eval-track] 评估命中率加载失败:",fe),A.value=null}finally{p.value=!1}}y(function(){return v.currentPage.value+"/"+v.currentSubPage.value},function(fe){fe==="ai/evaluation-analysis"&&R()},{immediate:!0});const E=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:D,summary:N,trades:T,loading:u,loadError:i,showAddForm:m,addForm:H,addSaving:j,tradeFormVisible:K,tradeForm:Y,tradeSaving:se,portfolioTab:F,equityDays:z,equityLoading:U,equityNote:W,equityHasData:le,loadPortfolio:Q,addPosition:s,removePosition:w,openTradeForm:l,submitTrade:_,loadTrades:h,loadEquity:k,fmtSigned:Z,fmtSignedPct:L,signClass:b,riskTab:r,riskLoading:S,riskNote:c,riskHasData:O,riskData:re,riskMetricList:X,loadRisk:P}=E;y(D,function(fe){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((fe||[]).map(function(Me){return{code:Me.stock_code,name:Me.stock_name||Me.stock_code}}))},{deep:!0}),y(function(){return v.currentPage.value+"/"+v.currentSubPage.value},function(fe){fe==="ai/portfolio"?(Q(),h(),k(z?z.value:30),typeof P=="function"&&P()):fe==="ai/overview"&&Q()},{immediate:!0});let G="",oe=!1;return y(function(){const fe=v.currentSubPage&&v.currentSubPage.value,Me=!!(v.detailSplitEnabled&&v.detailSplitEnabled.value),ee={sub:fe,split:Me,kind:"",view:"",key:"",first:null,expandList:null,expandFn:null};if(fe==="history"){const ue=v.aiHistoryView&&v.aiHistoryView.value||"date",me=ue==="date"?v.groupedByDate:ue==="month"?v.groupedByMonth:v.aiHistoryByStock,pe=me&&me.value||{},he=Object.keys(pe);ee.kind="history",ee.view=ue,ee.key=he.length?he[0]:"",ee.first=he.length&&(pe[he[0]]||[])[0]||null,ee.expandList=ue==="date"?v.expandedDates:ue==="month"?v.expandedMonths:v.expandedStocks,ee.expandFn=ue==="date"?v.toggleDateExpand:ue==="month"?v.toggleMonthExpand:v.toggleStockExpand}else if(fe==="chat_history"){const ue=v.chatHistoryView&&v.chatHistoryView.value||"date",me=ue==="date"?v.chatGroupedByDate:ue==="month"?v.chatGroupedByMonth:v.chatGroupedByStock,pe=me&&me.value||{},he=Object.keys(pe);ee.kind="chat",ee.view=ue,ee.key=he.length?he[0]:"",ee.first=he.length&&(pe[he[0]]||[])[0]||null,ee.expandList=ue==="date"?v.expandedChatDates:ue==="month"?v.expandedChatMonths:v.expandedChatStocks,ee.expandFn=ue==="date"?v.toggleChatDateExpand:ue==="month"?v.toggleChatMonthExpand:v.toggleChatStockExpand}return ee},function(fe){if(!fe.split||!fe.first||!fe.kind)return;const Me=fe.sub!==G,ee=v.stockDetail&&v.stockDetail.value,ue=!!(ee&&ee.stock);if(!Me&&ue||oe)return;G=fe.sub,oe=!0;try{fe.key&&fe.expandList&&fe.expandFn&&fe.expandList.value&&fe.expandList.value.indexOf(fe.key)<0&&fe.expandFn(fe.key)}catch{}const me=fe.kind==="history"?v.viewAiResult(fe.first):v.viewChatSession(fe.first);me&&typeof me.finally=="function"?me.finally(function(){oe=!1}):oe=!1},{immediate:!0}),{...v,trackData:A,trackLoading:p,trackWindows:d,fmtTrackRate:x,loadTrack:R,trackWindow:o,setTrackWindow:M,trackHitText:q,positions:D,summary:N,trades:T,loading:u,loadError:i,showAddForm:m,addForm:H,addSaving:j,tradeFormVisible:K,tradeForm:Y,tradeSaving:se,portfolioTab:F,equityDays:z,equityLoading:U,equityNote:W,equityHasData:le,loadPortfolio:Q,addPosition:s,removePosition:w,openTradeForm:l,submitTrade:_,loadTrades:h,loadEquity:k,fmtSigned:Z,fmtSignedPct:L,signClass:b,riskTab:r,riskLoading:S,riskNote:c,riskHasData:O,riskData:re,riskMetricList:X,loadRisk:P}}}})();(function(){const{ref:a,computed:t,watch:y,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:`
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
                </div>`,setup(){const v=e("qcState"),f=Vue.ref(!1),A=Vue.ref(!1);let p=0;if(!v)return{};const d=a(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function x(C){d.value=C;try{localStorage.setItem("quant_strategy_mode",C)}catch{}v.currentSubPage.value="strategy-manage"}const o=a([]),M=a(!1),q=a(!1),R=a(""),E=a(null),D=a(!1),N=a(!1);async function T(){const C=++p;M.value=!0,q.value=!1;try{const n=await fetch("/api/market/reviews?limit=30",{headers:$()}).then(B=>B.json());if(C!==p)return;n&&n.success?o.value=Array.isArray(n.data)?n.data:[]:q.value=!0}catch(n){console.error("[market-review] 复盘列表加载失败:",n),q.value=!0}finally{C===p&&(M.value=!1)}}function u(C){R.value=C,K(C)}function i(C){R.value===C?j():u(C)}function m(C){return C==null||isNaN(Number(C))?"—":(Number(C)>=0?"+":"")+Number(C).toFixed(2)+"%"}function H(C){return C==null||isNaN(Number(C))?"—":Number(C).toFixed(2)}function j(){R.value="",E.value=null,N.value=!1}async function K(C){const n=++p;D.value=!0,N.value=!1,E.value=null;try{const B=C?"/api/market/review?date="+encodeURIComponent(C):"/api/market/review",ie=await fetch(B,{headers:$()}).then(Ce=>Ce.json());if(n!==p)return;ie&&ie.success?E.value=ie.data:N.value=!0}catch(B){console.error("[market-review] 复盘详情加载失败:",B),N.value=!0}finally{n===p&&(D.value=!1)}}function Y(C){return C>0?"up":C<0?"down":"flat"}function se(C){return C==null||isNaN(Number(C))?"—":(C>0?"+":"")+Number(C).toFixed(2)+"%"}function F(C){const n={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(C||{}).map(function(B){const ie=B[0],Ce=B[1],Ee=!Ce||Ce==="unavailable"||Ce==="数据不可达";return{label:n[ie]||ie,value:Ee?"数据不可达":Ce,unavailable:Ee}})}const z=a([]),U=a(!1),W=a(!1),le=a(""),Q=a(""),s=a(""),w=a({}),l=a(!1),_=a(""),h=a(""),k=a([]),Z=a([]),L=a(""),b=a(""),r=a(!0),S=a(!0),c=a("20:00"),O=a("default"),re=a(!1),X=a(""),P=t(function(){return z.value.find(function(C){return C.id===s.value})||null});async function G(C,n){n=n||{},n.headers=Object.assign({},n.headers||{});const B=localStorage.getItem("quant_token")||"";return B&&(n.headers.Authorization="Bearer "+B),fetch(C,n)}async function oe(){const C=++p;U.value=!0,W.value=!1,le.value="",Q.value="";try{const n=await G("/api/strategies").then(function(ie){return ie.json()});if(C!==p)return;let B=null;Array.isArray(n)?B=n:n&&Array.isArray(n.strategies)?(B=n.strategies,n.warn&&(Q.value=String(n.warn))):(W.value=!0,le.value=n&&n.detail?String(n.detail):"策略列表加载失败（接口返回异常）"),B!==null&&(z.value=B,z.value.length&&!s.value&&(s.value=z.value[0].id,fe()))}catch(n){console.error("[research] 策略列表加载失败:",n),W.value=!0,le.value="策略列表加载失败: "+(n&&n.message||"网络错误")}finally{C===p&&(U.value=!1)}}function fe(){const C=P.value;C&&(w.value={},C.schema.forEach(function(n){w.value[n.key]=n.default}),h.value="",ae(),Me(),pe())}async function Me(){if(!s.value){Z.value=[];return}try{const C=await G("/api/strategies/"+s.value+"/profiles").then(function(n){return n.json()});Z.value=C&&C.data&&C.data.profiles||[],L.value=""}catch(C){console.error("[research] 方案列表加载失败:",C),Z.value=[]}}async function ee(){f.value=!0;const C=(b.value||"").trim();if(!C){window._core&&window._core.showToast("请输入方案名称");return}try{const n=await G("/api/strategies/"+s.value+"/profiles",{method:"POST",body:JSON.stringify({name:C,params:w.value})}).then(function(B){return B.json()});if(n&&n.detail){window._core&&window._core.showToast(String(n.detail));return}b.value="",await Me(),window._core&&window._core.showToast("方案已保存")}catch(n){console.error("[research] 方案保存失败:",n),window._core&&window._core.showToast("方案保存失败")}}function ue(){const C=Z.value.find(function(n){return n.id===L.value});C&&(Object.keys(C.params||{}).forEach(function(n){w.value[n]=C.params[n]}),window._core&&window._core.showToast("已应用方案: "+C.name))}async function me(){if(L.value)try{await G("/api/strategies/"+s.value+"/profiles/"+L.value,{method:"DELETE"}).then(function(C){return C.json()}),await Me(),window._core&&window._core.showToast("方案已删除")}catch(C){console.error("[research] 方案删除失败:",C)}}async function pe(){try{const C=await G("/api/strategies/governance").then(function(ie){return ie.json()}),B=(C&&C.data&&C.data.strategies||{})[s.value]||{};r.value=B.enabled!==!1,c.value=B.schedule||"20:00",O.value=B.universe==="all"?"all":"default",S.value=B.show_in_calendar!==!1,X.value=B.last_holdings||""}catch(C){console.error("[research] 纳管状态加载失败:",C)}}async function he(){try{await G("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const C={};return C[s.value]={enabled:r.value,schedule:c.value,universe:O.value,show_in_calendar:S.value},C}()})}).then(function(C){return C.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(C){console.error("[research] 纳管更新失败:",C)}}async function te(){if(s.value){re.value=!0;try{const C=await G("/api/strategies/"+s.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:_.value||void 0})}).then(function(n){return n.json()});if(C&&C.detail){window._core&&window._core.showToast(String(C.detail));return}window._core&&window._core.showToast("持仓已生成"),await pe()}catch(C){console.error("[research] run-once 失败:",C),window._core&&window._core.showToast("持仓生成失败")}finally{re.value=!1}}}function xe(){X.value&&window.open(X.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function Pe(){const C=P.value;if(!C)return;const n=(b.value||"").trim()||C.name+"-副本";ne(n,Object.assign({},w.value)),window._core&&window._core.showToast("已复制为副本方案: "+n)}async function ne(C,n){try{await G("/api/strategies/"+s.value+"/profiles",{method:"POST",body:JSON.stringify({name:C,params:n})}).then(function(B){return B.json()}),await Me()}catch(B){console.error("[research] 副本保存失败:",B)}}async function ae(){const C=++p;if(s.value)try{const n=await G("/api/strategies/"+s.value+"/runs?limit=5").then(function(B){return B.json()});if(C!==p)return;k.value=Array.isArray(n)?n:[]}catch{k.value=[]}}async function ye(){if(s.value){l.value=!0;try{const C=await G("/api/strategies/"+s.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:w.value,as_of:_.value||void 0})}).then(function(n){return n.json()});C&&C.status==="success"?ae():alert("运行失败: "+(C.detail||JSON.stringify(C)))}catch(C){console.error("[research] 策略运行失败:",C),alert("运行失败: "+C.message)}finally{l.value=!1}}}async function Ne(){if(s.value)try{const C=Object.keys(w.value).map(function(B){return encodeURIComponent(B)+"="+encodeURIComponent(w.value[B])}).join("&"),n=await G("/api/strategies/"+s.value+"/ptrade-code?"+C).then(function(B){return B.json()});n&&n.code?h.value=n.code:alert("导出失败: "+(n.detail||JSON.stringify(n)))}catch(C){console.error("[research] PTrade 导出失败:",C),alert("导出失败: "+C.message)}}function Ie(){if(!h.value)return;const C=document.createElement("textarea");C.value=h.value,document.body.appendChild(C),C.select();try{document.execCommand("copy")}catch{}document.body.removeChild(C)}y(function(){return v.currentPage.value+"/"+v.currentSubPage.value},function(C){C==="research/research-overview"&&(oe(),T(),ge(),je()),(C==="research/market-review"||C==="shortterm/market-review")&&!R.value&&T(),C==="research/quant-research"&&oe(),C==="research/backtest-history"&&De()},{immediate:!0});const We=a("mom20"),Ue=a(!1),wt=a(!1),st=a(null),At=a(null),Se=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],_e=a('{"top_n":[10,20,30]}'),Le=a(null),Ae=a(""),$e=a(!1),Ze=a(null);async function tt(){if(!s.value){ElementPlus.ElMessage.warning("请先选择策略");return}let C;try{C=JSON.parse(_e.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!C||Object.keys(C).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}$e.value=!0,Le.value=null,Ae.value="";try{const n=await fetch("/api/strategies/"+s.value+"/sweep",{method:"POST",headers:$(),body:JSON.stringify({param_grid:C})}).then(function(B){return B.json()});n&&Array.isArray(n.results)?(Le.value=n.results,Ae.value="完成 "+n.count+" 组"+(n.data_degraded?" (数据不可达, 结果降级)":""),Ze.value=n.param_stability||null):Ae.value=n&&n.detail||"扫描失败"}catch(n){console.error("[sweep]",n),Ae.value="扫描失败: "+n.message}finally{$e.value=!1}}async function Dt(){const C=++p;Ue.value=!0;try{const n=await G("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:s.value||"multi_factor",factor_key:We.value,params:w.value||{}})}).then(function(ie){return ie.json()}),B=n&&n.report?n.report.n1||{}:{};st.value=B}catch(n){console.error("[research] 因子IC分析失败:",n),alert("因子 IC 分析失败: "+n.message)}finally{C===p&&(Ue.value=!1)}}async function Pt(){const C=++p;wt.value=!0;try{const n=await G("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:s.value||"multi_factor",factor_key:We.value,params:w.value||{}})}).then(function(B){return B.json()});n&&n.layers?At.value=n:alert("分层回测: "+(n.message||"无数据"))}catch(n){console.error("[research] 分层回测失败:",n),alert("分层回测失败: "+n.message)}finally{C===p&&(wt.value=!1)}}const ft=a(null),Lt=a(!1);async function Ut(){const C=++p;Lt.value=!0,ft.value=null;try{const n=await G("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:s.value||"multi_factor",factor_key:We.value,params:w.value||{}})}).then(function(B){return B.json()});n&&n.detail?ft.value=n.detail:alert("因子详情: "+(n.message||"无数据"))}catch(n){console.error("[research] 因子详情失败:",n),alert("因子详情失败: "+n.message)}finally{C===p&&(Lt.value=!1)}}const Qt=a([]),et=a(null),kt=a(null),Gt=a(null),ht=a(""),Yt=a(!1),Et=a(!1),Qe=a(""),It=a(""),xt=a("");function $(){const C=localStorage.getItem("quant_token")||"";return C?{Authorization:"Bearer "+C,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function ge(){const C=++p;try{const n=await fetch("/api/strategies/variants",{headers:$()}).then(function(B){return B.json()});if(C!==p)return;Qt.value=n&&n.data&&n.data.variants||[]}catch(n){console.error("[i3a] 加载 variants 失败:",n)}}async function at(){if(!s.value){Qe.value="请先在量化研究选择母本策略";return}Et.value=!0,Qe.value="";try{const C=await fetch("/api/strategies/"+s.value+"/clone",{method:"POST",headers:$(),body:JSON.stringify({name:(b.value||"").trim()||void 0,params:Object.assign({},w.value)})}).then(function(B){return B.json()});if(C&&C.detail){Qe.value=String(C.detail);return}const n=C&&C.data;n&&n.sid&&(et.value=n.sid,Qe.value="已复制为新策略: "+n.name,await ge(),await it(n.sid))}catch(C){console.error("[i3a] 复制失败:",C),Qe.value="复制失败: "+C.message}finally{Et.value=!1}}async function St(C){et.value=C,Qe.value="",ht.value="",await it(C)}async function it(C){try{const n=await fetch("/api/strategies/"+C+"/selection-spec",{headers:$()}).then(function(B){return B.json()});n&&n.data&&n.data.spec&&(kt.value=Object.assign({},n.data.spec),Gt.value=n.data.fields,It.value=(n.data.spec.industry_scope||[]).join(","),xt.value=(n.data.spec.market_cap_range||[]).join(","))}catch(n){console.error("[i3a] 加载 spec 失败:",n)}}async function Ot(){if(A.value=!0,!(!et.value||!kt.value))try{kt.value.industry_scope=It.value?It.value.split(/[,，]/).map(function(n){return n.trim()}).filter(Boolean):[],kt.value.market_cap_range=xt.value?xt.value.split(/[,，]/).map(Number).filter(function(n){return!isNaN(n)}):[];const C=await fetch("/api/strategies/"+et.value+"/selection-spec",{method:"PUT",headers:$(),body:JSON.stringify({spec:kt.value})}).then(function(n){return n.json()});C&&C.data&&C.data.spec&&(kt.value=C.data.spec,Qe.value="SelectionSpec 已保存")}catch(C){console.error("[i3a] 保存 spec 失败:",C),Qe.value="保存失败"}}async function ta(){if(!et.value){Qe.value="请先选择/创建微调策略";return}Et.value=!0,Qe.value="";try{const C=await fetch("/api/strategies/"+et.value+"/run-once",{method:"POST",headers:$(),body:"{}"}).then(function(n){return n.json()});Qe.value=C&&C.detail?String(C.detail):"持仓已生成: "+(C&&C.data&&C.data.symbols||0)+" 只"}catch(C){console.error("[i3a] run-once 失败:",C),Qe.value="生成持仓失败"}finally{Et.value=!1}}async function ia(){if(!et.value){Qe.value="请先选择/创建微调策略";return}kt.value||await it(et.value),Yt.value=!0,Qe.value="";try{const C=await fetch("/api/strategies/"+et.value+"/ai-trade-code",{method:"POST",headers:$(),body:JSON.stringify({spec:kt.value})}).then(function(n){return n.json()});if(C&&C.detail){Qe.value=String(C.detail);return}C&&C.data&&(ht.value=C.data.code||"",C.data.api_errors&&C.data.api_errors.length?Qe.value="生成成功(含 API 校验告警 "+C.data.api_errors.length+" 条)":Qe.value="AI 交易码已生成, 已通过矩阵内校验")}catch(C){console.error("[i3a] AI 交易码失败:",C),Qe.value="AI 生成失败: "+C.message}finally{Yt.value=!1}}function ra(){if(ht.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(ht.value).then(function(){Qe.value="代码已复制"});else{const C=document.createElement("textarea");C.value=ht.value,document.body.appendChild(C),C.select(),document.execCommand("copy"),document.body.removeChild(C),Qe.value="代码已复制"}}const aa=a(""),$t=a(""),Wt=a([]),jt=a(""),Jt=a(""),gt=a(""),rt=a(null),g=a(!1),J=a(!1),ce=a(!1);function Te(){const C=localStorage.getItem("quant_token")||"";return C?{Authorization:"Bearer "+C,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function je(){const C=++p;try{const n=await fetch("/api/strategies/custom",{headers:Te()}).then(function(B){return B.json()});if(C!==p)return;Wt.value=n&&n.data&&n.data.customs||[]}catch(n){console.error("[i3b] 加载自定义策略失败:",n)}}async function Fe(){if(!$t.value.trim()){gt.value="请描述策略思路";return}g.value=!0,gt.value="";try{const C=await fetch("/api/strategies/custom",{method:"POST",headers:Te(),body:JSON.stringify({name:aa.value.trim()||"自定义策略",prompt:$t.value})}).then(function(n){return n.json()});if(C&&C.detail){gt.value=String(C.detail);return}C&&C.data&&(Jt.value=C.data.code||"",gt.value="AI 代写成功: "+C.data.sid+(C.data.api_errors&&C.data.api_errors.length?" (API 告警 "+C.data.api_errors.length+" 条)":" (校验通过)"),await je())}catch(C){console.error("[i3b] AI 代写失败:",C),gt.value="AI 代写失败: "+C.message}finally{g.value=!1}}async function Ke(){if(jt.value)try{const C=await fetch("/api/strategies/custom/"+jt.value+"/code",{headers:Te()}).then(function(n){return n.json()});C&&C.data&&(Jt.value=C.data.code||"",gt.value="")}catch(C){console.error("[i3b] 读取代码失败:",C)}}async function ct(){if(!jt.value){gt.value="请先选择自定义策略";return}J.value=!0,gt.value="";try{const C=await fetch("/api/strategies/custom/"+jt.value+"/backtest",{method:"POST",headers:Te(),body:"{}"}).then(function(n){return n.json()});if(C&&C.detail){gt.value=String(C.detail);return}C&&C.data&&(rt.value=C.data,gt.value="回测完成")}catch(C){console.error("[i3b] 回测失败:",C),gt.value="回测失败: "+C.message}finally{J.value=!1}}async function ot(){if(!jt.value){gt.value="请先选择自定义策略";return}ce.value=!0,gt.value="";try{const C=await fetch("/api/strategies/custom/"+jt.value+"/ai-optimize",{method:"POST",headers:Te(),body:JSON.stringify({backtest:rt.value})}).then(function(n){return n.json()});if(C&&C.detail){gt.value=String(C.detail);return}C&&C.data&&(Jt.value=C.data.code||"",gt.value="AI 优化完成"+(C.data.api_errors&&C.data.api_errors.length?" (API 告警 "+C.data.api_errors.length+" 条)":" (校验通过)"))}catch(C){console.error("[i3b] AI 优化失败:",C),gt.value="AI 优化失败: "+C.message}finally{ce.value=!1}}function ut(){if(Jt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Jt.value).then(function(){gt.value="代码已复制"});else{const C=document.createElement("textarea");C.value=Jt.value,document.body.appendChild(C),C.select(),document.execCommand("copy"),document.body.removeChild(C),gt.value="代码已复制"}}const zt=Vue.ref([]),I=Vue.ref(!1),ke=Vue.ref(!1),ze=Vue.ref(30);async function De(){const C=++p;I.value=!0,ke.value=!1;try{const n=window.__quantModules&&window.__quantModules.core||{},B=typeof n.authHeaders=="function"?n.authHeaders():{},ie=await fetch("/api/backtest/history?days="+ze.value,{headers:B}).then(function(Ce){return Ce.json()});if(C!==p)return;zt.value=ie&&ie.data||[]}catch(n){console.error("[backtest] 回测历史加载失败:",n),ke.value=!0}finally{C===p&&(I.value=!1)}}const Ge=Vue.ref([]),Re=Vue.ref(!1),Xe=Vue.ref(!1),yt=Vue.ref(""),Mt=Vue.ref([]),bt=Vue.ref(""),Xt=Vue.ref([]),ba=Vue.ref(!1),ca=Vue.ref(!1),Pa={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function ua(C){return Pa[C]||C||"—"}function Ra(C){v&&v.navigateTo&&v.navigateTo("shortterm",C)}function va(){v.currentSubPage.value="research-history",qa()}async function qa(){const C=++p;Re.value=!0,Xe.value=!1;try{const n=window.__quantModules&&window.__quantModules.core||{},B=typeof n.authHeaders=="function"?n.authHeaders():{},ie=yt.value?"?type="+encodeURIComponent(yt.value):"",Ce=await fetch("/api/strategies/research-history"+ie,{headers:B}).then(function(Ee){return Ee.json()});if(C!==p)return;Ge.value=Ce&&Ce.items||[]}catch(n){console.error("[research-history] 加载失败:",n),Xe.value=!0}finally{C===p&&(Re.value=!1)}}async function Ht(){const C=++p;ca.value=!0;try{const n=window.__quantModules&&window.__quantModules.core||{},B=typeof n.authHeaders=="function"?n.authHeaders():{},ie=yt.value?"?type="+encodeURIComponent(yt.value):"",Ce=await fetch("/api/strategies/research-history/export"+ie,{headers:B});if(!Ce.ok)throw new Error("HTTP "+Ce.status);const Ee=await Ce.blob(),pt=URL.createObjectURL(Ee),Ye=document.createElement("a");Ye.href=pt,Ye.download="research_history.csv",document.body.appendChild(Ye),Ye.click(),document.body.removeChild(Ye),URL.revokeObjectURL(pt)}catch(n){console.error("[research-history] 导出失败:",n)}finally{C===p&&(ca.value=!1)}}function wa(C){const n=Mt.value.indexOf(C);n>=0?Mt.value.splice(n,1):Mt.value.length<10&&Mt.value.push(C)}function Ea(C){bt.value=bt.value===C?"":C}async function za(){const C=++p,n=Mt.value;if(!(n.length<2)){ba.value=!0;try{const B=window.__quantModules&&window.__quantModules.core||{},ie=typeof B.authHeaders=="function"?B.authHeaders():{},Ce=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},ie),body:JSON.stringify({ids:n})}).then(function(Ee){return Ee.json()});Xt.value=Ce&&Ce.items||[]}catch(B){console.error("[research-history] 对比失败:",B)}finally{C===p&&(ba.value=!1)}}}async function ka(C){try{const n=window.__quantModules&&window.__quantModules.core||{},B=typeof n.authHeaders=="function"?n.authHeaders():{},ie=await fetch("/api/strategies/research-history/"+C,{method:"DELETE",headers:B}).then(function(Ce){return Ce.json()});if(ie&&ie.deleted){Ge.value=Ge.value.filter(function(Ee){return Ee.id!==C});const Ce=Mt.value.indexOf(C);Ce>=0&&Mt.value.splice(Ce,1)}}catch(n){console.error("[research-history] 删除失败:",n)}}return{...v,strategyManageMode:d,openStrategyManage:x,btHistory:zt,btHistoryLoading:I,btHistoryError:ke,btHistoryDays:ze,loadBtHistory:De,researchHistory:Ge,researchHistoryLoading:Re,researchHistoryError:Xe,researchHistoryType:yt,researchHistorySelected:Mt,researchDetailId:bt,researchCompareRows:Xt,researchCompareLoading:ba,researchTypeLabel:ua,goShortterm:Ra,openResearchHistory:va,loadResearchHistory:qa,researchExportLoading:ca,exportResearchHistory:Ht,toggleResearchSelect:wa,toggleResearchDetail:Ea,runResearchCompare:za,deleteResearchHistory:ka,marketReviews:o,marketReviewLoading:M,marketReviewError:q,selectedReviewDate:R,marketReviewDetail:E,marketReviewDetailLoading:D,marketReviewDetailError:N,loadMarketReviews:T,openMarketReview:u,toggleMarketReviewDate:i,backToMarketReviewList:j,loadMarketReviewDetail:K,marketReviewChgClass:Y,marketReviewChgText:se,marketReviewSrcEntries:F,fmtPct:m,fmtEmotion:H,strategies:z,strategiesLoading:U,strategiesError:W,strategiesErrorText:le,strategiesWarn:Q,activeStrategyId:s,activeStrategy:P,paramValues:w,strategyRunning:l,ptradeCode:h,strategyRuns:k,savingProfile:f,variantSaving:A,loadStrategies:oe,onStrategyChange:fe,runActiveStrategy:ye,exportActivePtradeCode:Ne,copyPtradeCode:Ie,profiles:Z,profileSelect:L,profileName:b,loadProfiles:Me,saveProfile:ee,applyProfile:ue,deleteProfile:me,govEnabled:r,govSchedule:c,govUniverse:O,govRunning:re,lastHoldings:X,loadGov:pe,updateGov:he,runOnceActive:te,openLastHoldings:xe,cloneStrategy:Pe,govShowCalendar:S,factorKey:We,factorIcLoading:Ue,factorLayerLoading:wt,factorIcReport:st,factorLayerResult:At,factorOptions:Se,runFactorIc:Dt,runFactorLayer:Pt,factorDetail:ft,factorDetailLoading:Lt,runFactorDetail:Ut,variants:Qt,variantSelected:et,variantSpec:kt,specFields:Gt,aiCode:ht,aiCodeLoading:Yt,variantBusy:Et,variantMsg:Qe,loadVariants:ge,cloneNewStrategy:at,selectVariant:St,loadVariantSpec:it,saveVariantSpec:Ot,runVariantOnce:ta,genVariantAiCode:ia,copyVariantCode:ra,customName:aa,customPrompt:$t,customs:Wt,customSelected:jt,customCode:Jt,customMsg:gt,customBtResult:rt,customGenLoading:g,customBtLoading:J,customOptLoading:ce,loadCustoms:je,genCustomCode:Fe,loadCustomCode:Ke,runCustomBacktest:ct,runCustomOptimize:ot,copyCustomCode:ut,sweepGrid:_e,sweepResult:Le,sweepMessage:Ae,sweepLoading:$e,sweepStability:Ze,runSweep:tt}}}})();(function(){const{inject:a,ref:t,onMounted:y,computed:e,nextTick:v}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
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
                </div>`,setup(){const f=a("qcState");if(!f)return{};const A=f.currentPage,p=f.currentSubPage,d=t(""),x=t(null),o=t(!1),M=t(!1),q=t("数据加载失败"),R=t("请检查服务后重试"),E=t(null),D=t(null),N=t(!1),T=t(!1),u=t("数据加载失败"),i=t("请检查服务后重试"),m=t(null),H=t(1),j=50,K=e(function(){const I=D.value||[];if(I.length<=200)return I;const ke=(H.value-1)*j;return I.slice(ke,ke+j)}),Y=t(null),se=t(!1),F=t(!1),z=t("数据加载失败"),U=t("请检查服务后重试"),W=t([]),le=t(!1);async function Q(){le.value=!0;try{const I=await Pe("/api/shortterm/dates/summary",!1);I&&I.success&&(W.value=I.dates||[])}catch{W.value=[]}finally{le.value=!1}}function s(I){I!==d.value&&(d.value=I,it(!0))}const w=t("行业资金流"),l=t("今日"),_=t(""),h=t(null),k=t(1),Z=t(!1),L=t(!1),b=t("数据加载失败"),r=t("请检查服务后重试"),S=t(""),c=t(null),O=t(!1),re=t(null),X=t(!1),P=t(!1),G=t(""),oe=t(""),fe=t(!1);function Me(){const I=localStorage.getItem("quant_token")||"";return I?{Authorization:"Bearer "+I,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const ee={},ue=[],me=50,pe=60*1e3;let he=0,te=0,xe=0;function Pe(I,ke){const ze=Date.now(),De=ee[I];return!ke&&De&&ze-De.ts<pe?Promise.resolve(De.data):fetch(I,{headers:Me()}).then(function(Ge){return Ge.json()}).then(function(Ge){if(ee[I]||ue.push(I),ee[I]={ts:Date.now(),data:Ge},ue.length>me){const Re=ue.shift();delete ee[Re]}return Ge})}async function ne(I){const ke=++he;o.value=!0,M.value=!1;try{const ze="/api/shortterm/pools"+(d.value?"?date="+d.value:""),De=await Pe(ze,I);if(ke!==he)return;De&&De.success?(x.value=De,v(ge)):De&&De.detail?(M.value=!0,q.value=String(De.detail),R.value="请先登录后再查看"):(M.value=!0,q.value="数据加载失败",R.value="请检查服务后重试")}catch{if(ke!==he)return;M.value=!0,q.value="数据加载失败",R.value="请检查服务后重试"}finally{ke===he&&(o.value=!1)}}async function ae(I){const ke=++he;N.value=!0,T.value=!1;try{const ze="/api/shortterm/lhb"+(d.value?"?date="+d.value:""),De=await Pe(ze,I);if(ke!==he)return;De&&De.success?(D.value=Array.isArray(De.rows)?De.rows:null,m.value=De.available===!1&&De.reason||null,H.value=1):De&&De.detail?(T.value=!0,u.value=String(De.detail),i.value="请先登录后再查看"):(T.value=!0,u.value="数据加载失败",i.value="请检查服务后重试")}catch{if(ke!==he)return;T.value=!0,u.value="数据加载失败",i.value="请检查服务后重试"}finally{ke===he&&(N.value=!1)}}const ye=e(function(){const I=x.value&&x.value.ladder&&x.value.ladder.tiers;return!I||!Object.keys(I).length?"—":Object.keys(I).sort(function(ke,ze){return ke-ze}).map(function(ke){return ke+"板:"+I[ke]}).join(" ")}),Ne=e(function(){const I=x.value&&x.value.zt||[];return E.value?I.filter(function(ke){return ke.boards===E.value}):I});function Ie(){E.value=null}const We=e(function(){const I=Y.value&&Y.value.emotion&&Y.value.emotion.money_effect;return!I||!I.available?"—":I.source==="settled"?"定稿记录":I.source==="realtime"?I.partial?"实时(样本不全)":"实时":"—"}),Ue=e(function(){const I=Y.value&&Y.value.emotion&&Y.value.emotion.promotion&&Y.value.emotion.promotion.tiers&&Y.value.emotion.promotion.tiers["1进2"];return I?I.rate:null}),wt=e(function(){const I=Y.value&&Y.value.emotion&&Y.value.emotion.sentiment_cycle;return I&&I.available&&I.current_score!=null?I.current_score.toFixed(2):"—"}),st=e(function(){const I=Y.value&&Y.value.emotion&&Y.value.emotion.sentiment_cycle;return!I||!I.available?"—":(I.trend||"—")+(I.day_n!=null?" · 距低谷"+I.day_n+"天":"")});e(function(){const I=Y.value&&Y.value.emotion;if(!I)return"";const ke=[];for(const ze of["money_effect","promotion","consec_premium","sentiment_cycle"]){const De=I[ze];De&&De.available===!1&&De.reason&&ke.push(String(De.reason).replace(/^[[^]]*]s*/,""))}return ke.join("；")}),e(function(){const I=Y.value&&Y.value.facts;if(!I)return"";const ke=[];for(const ze of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const De=I[ze];De&&De.available===!1&&De.reason&&ke.push(String(De.reason).replace(/^[[^]]*]s*/,""))}return ke.join("；")});function At(I){return I==null||isNaN(I)?"—":(I*100).toFixed(0)+"%"}function Se(I,ke){return I==null?"—":(typeof I=="number"?Math.round(I*100)/100:I)+(ke||"")}function _e(I){return"tag-chip mr-4"}function Le(I){return I==null?"":I>0?"is-rise":I<0?"is-fall":""}function Ae(I){return I==="机构"?"is-institution":I==="游资"?"is-hotmoney":I==="主力"?"is-main":""}const $e=e(function(){const I=Y.value&&Y.value.session_status;if(!I)return"—";const ke=Y.value.date;return ke===I.latest_session&&I.settled?"已收盘":ke===I.today&&I.is_trade_day&&!I.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),Ze=e(function(){const I=Y.value&&Y.value.session_status;if(!I)return"";const ke=Y.value.date;return ke===I.latest_session&&I.settled?"is-institution":ke===I.today&&I.is_trade_day&&!I.settled?"is-main":""});function tt(I){I&&I.ts_code&&f&&f.showStockDetail&&f.showStockDetail(I.ts_code)}const Dt=e(function(){return(D.value||[]).filter(function(I){return(I.tags||[]).indexOf("机构")>=0}).reduce(function(I,ke){return I+(ke.net_buy||0)},0)}),Pt=e(function(){return(D.value||[]).filter(function(I){return(I.tags||[]).indexOf("游资")>=0}).length}),ft=e(function(){const I=(h.value||[]).filter(function(ke){return ke.main_net_inflow!=null});return I.length?I.reduce(function(ke,ze){return ke.main_net_inflow>=ze.main_net_inflow?ke:ze}):null}),Lt=e(function(){const I=ft.value;return I?I.name:"—"}),Ut=e(function(){const I=ft.value;return I?I.main_net_inflow:null}),Qt=e(function(){return S.value||"东财"}),et=e(function(){const I=(_.value||"").trim(),ke=h.value||[];return I?ke.filter(function(ze){return ze.name&&String(ze.name).indexOf(I)>=0}):ke});function kt(I){_.value=I||"",f&&f.currentSubPage&&(f.currentSubPage.value="sector")}const Gt=e(function(){const I=et.value;if(I.length<=200)return I;const ke=(k.value-1)*j;return I.slice(ke,ke+j)}),ht=["09:25","09:35","10:00","11:30","14:00","15:00"],Yt=e(function(){const I={};return(re.value||[]).forEach(function(ke){I[ke.slot]=!0}),I});function Et(I){return Yt.value[I]?"is-done":I===Qe.value?"is-current":"is-empty"}const Qe=e(function(){const I=new Date,ke=(I.getHours()<10?"0":"")+I.getHours(),ze=(I.getMinutes()<10?"0":"")+I.getMinutes(),De=ke+":"+ze;for(var Ge=0;Ge<ht.length;Ge++)if(De===ht[Ge])return ht[Ge];for(var Re=0;Re<ht.length-1;Re++){var Xe=ht[Re],yt=new Date;yt.setHours(Number(Xe.split(":")[0]),Number(Xe.split(":")[1]),0,0);var Mt=new Date(yt.getTime()+8*6e4);if(I>=yt&&I<=Mt)return Xe}return""}),It=e(function(){const I=new Date,ke=Qe.value;if(ke)return"当前处于快照窗口 "+ke+" (前后 8 分钟) — 可采集";const ze=I.getHours(),De=I.getMinutes();let Ge="";for(let Re=0;Re<ht.length;Re++){const Xe=ht[Re].split(":");if(Number(Xe[0])>ze||Number(Xe[0])===ze&&Number(Xe[1])>De){Ge=ht[Re];break}}return Ge?"下一快照时点 "+Ge+" — 非窗口期不可采集":"今日快照时点已全部结束"}),xt=t(""),$=t("info");function ge(){const I=x.value&&x.value.ladder&&x.value.ladder.tiers;if(!I||!Object.keys(I).length)return;const ke=window.__quantModules&&window.__quantModules.charts;if(!ke||!ke.renderSimpleChartTo)return;const ze=E.value,De=ke.renderSimpleChartTo("shorttermLadderChart",function(){const Ge=Object.keys(I).sort(function(Re,Xe){return Number(Re)-Number(Xe)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:Ge.map(function(Re){return Re+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(Re){return ze&&Number(Ge[Re.dataIndex])===ze?"var(--color-accent)":"var(--chart-split)"}},data:Ge.map(function(Re){return I[Re]})}]}},{key:"shortterm-ladder"});De&&De.off&&(De.off("click"),De.on("click",function(Ge){if(!Ge||!Ge.name)return;const Re=parseInt(Ge.name,10);isNaN(Re)||(E.value=E.value===Re?null:Re)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(ge);function at(I){if(I==null)return"—";const ke=Math.abs(I);return ke>=1e8?(I/1e8).toFixed(2)+"亿":ke>=1e4?(I/1e4).toFixed(0)+"万":I.toFixed(0)}function St(I){return I==null?"—":(I>=0?"+":"")+I.toFixed(2)+"%"}async function it(I){const ke=++te;se.value=!0,F.value=!1;try{const ze="/api/shortterm/overview"+(d.value?"?date="+d.value:""),De=await Pe(ze,I);if(ke!==te)return;De&&De.success?Y.value=De:De&&De.detail?(F.value=!0,z.value=String(De.detail),U.value="请先登录后再查看"):(F.value=!0,z.value="数据加载失败",U.value="请检查服务后重试")}catch{if(ke!==te)return;F.value=!0,z.value="数据加载失败",U.value="请检查服务后重试"}finally{ke===te&&(se.value=!1)}}async function Ot(I){const ke=++he;Z.value=!0,L.value=!1;try{const ze="/api/shortterm/sector-flow?indicator="+encodeURIComponent(l.value)+"&sector_type="+encodeURIComponent(w.value),De=await Pe(ze,I);if(ke!==he)return;De&&De.success&&De.available?(h.value=De.rows||[],S.value=De.source||(De.note?"同花顺":"东财"),k.value=1):De&&De.reason?(L.value=!0,b.value="数据加载失败",r.value=String(De.reason).replace(/^\[[^\]]*\]\s*/,"")):De&&De.detail?(L.value=!0,b.value=String(De.detail),r.value="请先登录后再查看"):(L.value=!0,b.value="数据加载失败",r.value="请检查服务后重试")}catch{if(ke!==he)return;L.value=!0,b.value="数据加载失败",r.value="请检查服务后重试"}finally{ke===he&&(Z.value=!1)}}async function ta(I){const ke=++xe;try{const ze="/api/shortterm/review"+(d.value?"?date="+d.value:""),De=await Pe(ze,I);if(ke!==xe)return;De&&De.success&&(c.value=De.review||null)}catch{}}async function ia(){O.value=!0;try{const I="/api/shortterm/review"+(d.value?"?date="+d.value:""),ke=await fetch(I,{method:"POST",headers:Me()}).then(function(ze){return ze.json()});ke&&ke.success&&(c.value=ke,ee[I]={ts:Date.now(),data:ke})}catch{}finally{O.value=!1}}async function ra(){const I=G.value.trim();if(I){fe.value=!0,oe.value="";try{const ze=await fetch("/api/shortterm/review/chat",{method:"POST",headers:Me(),body:JSON.stringify({date:overviewDate.value,question:I})}).then(function(De){return De.json()});oe.value=ze.answer||"[无回复]"}catch{oe.value="[发送失败]"}finally{fe.value=!1}}}async function aa(I){const ke=++he;X.value=!0;try{const ze="/api/shortterm/intraday"+(d.value?"?date="+d.value:""),De=await Pe(ze,I);if(ke!==he)return;De&&De.success&&(re.value=De.snapshots||[])}catch{}finally{ke===he&&(X.value=!1)}}async function $t(){P.value=!0;try{const I="/api/shortterm/intraday/snapshot"+(d.value?"?date="+d.value:""),ke=await fetch(I,{method:"POST",headers:Me()}).then(function(ze){return ze.json()});ke&&ke.success?(ke.accepted?(xt.value="已采集 "+ke.slot+" 快照"+(ke.pools_available&&!ke.pools_available.zt?" (池源部分不可用)":""),$.value="ok"):(xt.value="⏱ "+(ke.reason||"非快照时点"),$.value="warn"),aa()):xt.value="采集失败, 请稍后重试"}catch{xt.value="采集失败, 请稍后重试"}finally{P.value=!1}}function Wt(){return Pe("/api/shortterm/latest-session",!1).then(function(I){I&&I.date&&(d.value||(d.value=I.date))}).catch(function(){})}function jt(){const I=p.value;I==="ztpool"?ne():I==="lhb"?ae():I==="overview"?(it(),ta()):I==="sector"?Ot():I==="intraday"&&aa()}function Jt(){const I=d.value?"?date="+d.value:"";["/api/shortterm/overview"+I,"/api/shortterm/pools"+I,"/api/shortterm/lhb"+I].forEach(function(ze){Pe(ze,!1).catch(function(){})})}function gt(){const I=p.value;I==="ztpool"?ne(!0):I==="lhb"?ae(!0):I==="overview"?(it(!0),ta(!0)):I==="sector"?Ot(!0):I==="intraday"&&aa(!0)}y(function(){Wt(),jt(),Jt(),ct(),Q()}),Vue.watch(function(){return p.value},function(I){jt(),I==="overview"&&ct()});const rt=window.QuantOnboarding,g=t(!1),J=t(rt?rt.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),ce=e(function(){return rt&&rt.shorttermTourSteps()[J.value.stepIndex]||{key:"",title:"",desc:""}}),Te=e(function(){return rt?rt.shorttermTourProgress(J.value):{done:0,total:3,pct:0}}),je=e(function(){return J.value.stepIndex>=2});function Fe(){if(rt){var I=null;try{I=localStorage.getItem("qc_shortterm_tour")}catch{}if(I){var ke=rt.parseState(I);ke&&(J.value=ke)}}}function Ke(){if(rt){var I=JSON.stringify(J.value);try{localStorage.setItem("qc_shortterm_tour",I)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:I}})}).catch(function(){})}catch{}}}function ct(){window.__quantGuideModalsEnabled===!0&&rt&&p.value==="overview"&&(Fe(),rt.shorttermTourShouldShow(J.value)&&(g.value=!0))}function ot(){J.value=rt.shorttermTourNext(J.value),Ke()}function ut(){J.value=rt.shorttermTourComplete(J.value),Ke(),g.value=!1}function zt(){J.value=rt.shorttermTourDismiss(J.value),Ke(),g.value=!1}return{currentPage:A,currentSubPage:p,shortDate:d,pools:x,poolLoading:o,poolError:M,ztBoardFilter:E,filteredZt:Ne,clearBoardFilter:Ie,lhbRows:D,lhbLoading:N,lhbError:T,lhbReason:m,lhbPageRows:K,lhbPage:H,overview:Y,overviewLoading:se,overviewError:F,dateList:W,dateListLoading:le,loadDateList:Q,pickDate:s,sectorType:w,sectorIndicator:l,sectorKeyword:_,sectorRows:h,filteredSectorRows:et,sectorPageRows:Gt,sectorPage:k,sectorLoading:Z,sectorError:L,sectorFlowSource:S,PAGE_SIZE:j,gotoSector:kt,review:c,reviewRunning:O,intradaySnapshots:re,intradayLoading:X,intradayCollecting:P,intradaySlots:ht,intradayMsg:xt,slotClass:Et,intradayStatus:It,chatQuestion:G,chatAnswer:oe,chatLoading:fe,loadPools:ne,loadLhb:ae,loadOverview:it,loadSectorFlow:Ot,loadReview:ta,runReview:ia,sendChat:ra,loadIntraday:aa,collectSnapshot:$t,refreshCurrent:gt,ladderText:ye,fmtAmount:at,fmtPct:St,riseFall:Le,tagClass:Ae,openStock:tt,lhbInstitutionNetBuy:Dt,lhbHotMoneyCount:Pt,sectorTopName:Lt,sectorTopInflow:Ut,sectorSource:Qt,moneySource:We,promotion1to2:Ue,cycleScore:wt,cycleTrend:st,pct:At,fmtCond:Se,verdictClass:_e,sessionStatusText:$e,sessionStatusClass:Ze,shorttermTourVisible:g,shorttermTourState:J,shorttermTourStep:ce,shorttermTourProg:Te,shorttermTourIsLast:je,shorttermTourNext:ot,shorttermTourFinish:ut,shorttermTourSkip:zt}}}})();(function(a,t){typeof Oe=="object"&&Oe.exports?Oe.exports=t():a.QuantVirtualList=t()})(typeof self<"u"?self:void 0,function(){var a=8;function t(p,d,x,o,M){var q=x>0?x:1,R=typeof M=="number"&&M>=0?M:a,E=Math.max(0,o),D=Math.max(0,p),N=Math.max(0,d),T=Math.max(0,Math.floor(D/q)-R),u=Math.min(E,Math.ceil((D+N)/q)+R);return{startIndex:T,endIndex:u}}function y(p,d){return Math.max(0,p||0)*(d>0?d:0)}function e(p,d,x,o,M){var q=p||[],R=t(d,x,o,q.length,M),E=q.slice(R.startIndex,R.endIndex);return{visible:E,startIndex:R.startIndex,endIndex:R.endIndex,offsetY:R.startIndex*(o>0?o:1),totalHeight:y(q.length,o)}}function v(p,d){if(p){if(p.code!=null)return p.code;if(p.id!=null)return p.id;if(p.ts_code!=null)return p.ts_code}return d}function f(p,d,x){var o=p||[];if(!o.length)return d>0?d:1;for(var M=Math.min(x||50,o.length),q=0,R=0,E=0;E<M;E++){var D=o[E]&&o[E].rowHeight;typeof D=="number"&&D>0&&(q+=D,R++)}return R?q/R:d>0?d:1}function A(p,d,x,o,M){var q=t(p,d,x,o,M),R=Math.max(0,o);return R?(q.endIndex-q.startIndex)/R:0}return{DEFAULT_BUFFER:a,computeVisibleRange:t,computeTotalHeight:y,sliceVisible:e,getRowKey:v,estimateDynamicRowHeight:f,renderedRatio:A}});(function(){const{ref:a,computed:t,onMounted:y,onBeforeUnmount:e}=Vue,v=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:v.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(f){const A=a(null),p=a(0),d=a(400),x=t(()=>(v.computeVisibleRange||function(i,m,H,j,K){const Y=H>0?H:1,se=K>=0?K:8,F=Math.max(0,j);return{startIndex:Math.max(0,Math.floor(i/Y)-se),endIndex:Math.min(F,Math.ceil((i+m)/Y)+se)}})(p.value,d.value,f.rowHeight,f.items.length,f.buffer)),o=t(()=>f.items.length*f.rowHeight),M=t(()=>x.value.startIndex),q=t(()=>x.value.endIndex),R=t(()=>f.items.slice(M.value,q.value));function E(){A.value&&(p.value=A.value.scrollTop)}function D(){A.value&&(d.value=A.value.clientHeight||400)}function N(u,i){return v.getRowKey?v.getRowKey(u,i):u&&u.code!=null?u.code:u&&u.id!=null?u.id:i}let T=null;return y(()=>{D(),A.value&&typeof ResizeObserver<"u"&&(T=new ResizeObserver(()=>D()),T.observe(A.value))}),e(()=>{T&&T.disconnect()}),{scrollEl:A,totalHeight:o,startIndex:M,endIndex:q,visibleItems:R,onScroll:E,keyOf:N}}}})();(function(a,t){typeof Oe=="object"&&Oe.exports?Oe.exports=t():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=t())})(typeof self<"u"?self:void 0,function(){var a=40,t=1.2,y=60,e=500,v=10,f=88,A=350;function p(i,m,H,j,K){K=K||{};var Y=typeof K.threshold=="number"?K.threshold:a,se=typeof K.bias=="number"?K.bias:t,F=H-i,z=j-m;return Math.abs(F)<Y||Math.abs(F)<Math.abs(z)*se?"none":F<0?"left":"right"}function d(i,m,H){H=H||{};var j=typeof H.threshold=="number"?H.threshold:y;return m-i>=j}function x(i,m){m=m||{};var H=typeof m.threshold=="number"?m.threshold:e;return i>=H}var o=!1;function M(i,m){return i&&typeof i.closest=="function"?i.closest(m):null}function q(i){if(!i)return"";var m=i.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(m){var H=m.getAttribute&&m.getAttribute("data-copy-code");if(H)return H.trim();var j=(m.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(j)return j[0]}var K=i.getAttribute&&i.getAttribute("data-copy-code");return K?K.trim():""}function R(i){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(i).then(function(){return!0}).catch(function(){return E(i)}):Promise.resolve(E(i))}function E(i){try{var m=document.createElement("textarea");return m.value=i,m.style.position="fixed",m.style.opacity="0",document.body.appendChild(m),m.select(),document.execCommand("copy"),document.body.removeChild(m),!0}catch{return!1}}function D(i){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(i)}function N(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function T(){var i=null,m=null,H=null;function j(){m&&(m.timer&&clearTimeout(m.timer),m=null)}function K(le){H={el:le,until:Date.now()+A}}function Y(le){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(Q){Q!==le&&Q.classList.remove("swipe-open")}),i&&i.el!==le&&(i=null)}function se(le){var Q=le.touches&&le.touches[0];if(Q){var s=M(le.target,".swipe-reveal");s&&(i={el:s,x:Q.clientX,y:Q.clientY,moved:!1},le.stopPropagation());var w=M(le.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");w&&(j(),m={el:w,x:Q.clientX,y:Q.clientY,timer:setTimeout(function(){var l=q(w);m=null,l&&(K(w),R(l).then(function(){N(),D("已复制代码 "+l)}))},e)})}}function F(le){if(i){var Q=le.touches&&le.touches[0];if(Q){var s=Q.clientX-i.x,w=Q.clientY-i.y;if(Math.abs(s)>8&&Math.abs(s)>Math.abs(w)*1.2){le.cancelable&&le.preventDefault(),i.moved=!0;var l=i.el.querySelector(".swipe-reveal-main")||i.el,_=Math.max(-f,Math.min(0,s));l.style.transition="none",l.style.transform="translateX("+_+"px)",le.stopPropagation()}if(m){var h=Q.clientX-m.x,k=Q.clientY-m.y;(Math.abs(h)>v||Math.abs(k)>v)&&j()}}}}function z(le){if(j(),!!i){var Q=i.el,s=le.changedTouches&&le.changedTouches[0],w=i.x,l=i.y,_="none";s&&(_=p(w,l,s.clientX,s.clientY));var h=i.moved;i=null;var k=Q.querySelector(".swipe-reveal-main")||Q;k.style.transform="",k.style.transition="",_==="left"?(Y(Q),Q.classList.add("swipe-open"),K(Q)):(_==="right"||h)&&Q.classList.remove("swipe-open"),le.stopPropagation()}}function U(){j(),i=null}function W(le){if(H&&Date.now()<H.until){var Q=H.el.contains(le.target)||le.target===H.el,s=le.target.closest&&le.target.closest(".swipe-reveal-actions");Q&&!s&&(le.preventDefault(),le.stopPropagation(),H=null)}}document.addEventListener("touchstart",se,!0),document.addEventListener("touchmove",F,!0),document.addEventListener("touchend",z,!0),document.addEventListener("touchcancel",U,!0),document.addEventListener("click",W,!0)}function u(){o||typeof document>"u"||(o=!0,T())}return{judgeSwipe:p,judgePullToRefresh:d,judgeLongPress:x,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:t,PULL_THRESHOLD:y,LONG_PRESS_MS:e,LONG_PRESS_MOVE_SLOP:v,REVEAL_WIDTH:f,initGestures:u,_codeFromRow:q}});(function(){const a={empty:{icon:"inbox",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"alert-triangle",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"wifi-off",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},t=Object.keys(a);function y(f){return a[f]||a.empty}function e(){const f=[];for(const A of t){const p=a[A];p.title||f.push(A+".title"),A!=="loading"&&!p.icon&&f.push(A+".icon"),typeof p.retry!="boolean"&&f.push(A+".retry"),typeof p.skeleton!="boolean"&&f.push(A+".skeleton")}return{ok:f.length===0,errors:f}}const v={VARIANTS:a,KEYS:t,resolve:y,validate:e};typeof window<"u"&&(window.QuantStatePanel=v),typeof Oe<"u"&&Oe.exports&&(Oe.exports=v)})();(function(){const{computed:a}=Vue,t=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(y){const e=a(()=>typeof t.resolve=="function"?t.resolve(y.type):{}),v=a(()=>y.icon||e.value.icon||""),f=a(()=>y.title||e.value.title||""),A=a(()=>y.desc||e.value.desc||""),p=a(()=>!!e.value.retry),d=a(()=>/^[a-z][a-z0-9-]*$/.test(String(v.value||"")));return{icon:v,title:f,desc:A,retryable:p,isIconName:d}}}})();(function(a,t){typeof Oe=="object"&&Oe.exports?Oe.exports=t():a.QuantCommandPanel=t()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function a(i){return String(i||"").trim().toLowerCase()}function t(i,m){if(!i)return!0;const H=i.split(/\s+/).filter(Boolean);if(!H.length)return!0;const j=String(m||"").toLowerCase();return H.every(function(K){return j.indexOf(K)!==-1})}function y(){return{visible:!1,query:"",activeIndex:0}}function e(i,m){return m===void 0&&(m=!i.visible),i.visible=m,m&&(i.query="",i.activeIndex=0),i.visible}function v(i,m,H){const j=a(i);if(!m||!m.length)return[];const K=[];return m.forEach(function(Y){const se=t(j,Y.name)||t(j,Y.key),F=(Y.subPages||[]).filter(function(z){const U=H&&H[z]||z;return t(j,U)||t(j,z)});se&&K.push({type:"menu",menuKey:Y.key,subPage:Y.subPages&&Y.subPages[0]||"",label:Y.name,subLabel:"页面",icon:Y.icon||"file-text"}),F.forEach(function(z){K.push({type:"menu",menuKey:Y.key,subPage:z,label:H&&H[z]||z,subLabel:Y.name,icon:Y.icon||"file-text"})})}),K.slice(0,8)}function f(i,m){const H=a(i);return!m||!m.length?[]:m.filter(function(j){return!!(!H||t(H,j.label)||t(H,j.key)||j.keywords&&t(H,j.keywords))}).slice(0,8)}function A(i,m){const H=a(i);return!H||!m||!m.length?[]:m.filter(function(j){return t(H,j.code)||t(H,j.name)}).slice(0,8).map(function(j){return{type:"stock",code:j.code,name:j.name,label:j.name,subLabel:j.code,icon:"trending-up"}})}function p(i,m,H){const j=[],K=[];return H&&H.length&&(j.push({key:"stock",label:"股票",items:H}),K.push.apply(K,H)),i&&i.length&&(j.push({key:"menu",label:"菜单",items:i}),K.push.apply(K,i)),m&&m.length&&(j.push({key:"command",label:"指令",items:m}),K.push.apply(K,m)),{groups:j,flat:K}}function d(i,m,H){if(m<=0)return 0;const j=((i||0)+H)%m;return j<0?m-1:j}function x(i,m,H,j){const K=v(i,m,H).map(function(se){return{type:"menu",menuKey:se.menuKey,subPage:se.subPage,label:se.label,subLabel:se.subLabel,icon:se.icon,iconName:se.icon,value:se.icon+" "+se.label+" · "+se.subLabel}}),Y=f(i,j||[]).map(function(se){return{type:"command",key:se.key,label:se.label,icon:se.icon,iconName:se.icon,subLabel:"指令",value:se.icon+" "+se.label}});return K.concat(Y)}function o(i){return i?i.type==="menu"?{action:"menu",menuKey:i.menuKey,subPage:i.subPage}:i.type==="command"?{action:"command",key:i.key}:i.type==="sector"?{action:"sector",name:i.name}:i.type==="strategy"?{action:"strategy",id:i.id,name:i.name}:i.type==="stock"||i.code&&i.name?{action:"stock",code:i.code,name:i.name}:null:null}const M=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"}];var q={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function R(i){if(!i||typeof i!="string")return null;var m=i.split("+").map(function(K){return K.trim()}).filter(Boolean);if(!m.length)return null;var H=m.pop().toLowerCase();if(!H)return null;var j={ctrl:!1,alt:!1,shift:!1,meta:!1};return m.forEach(function(K){var Y=K.toLowerCase();q.ctrl.indexOf(Y)!==-1?j.ctrl=!0:q.alt.indexOf(Y)!==-1?j.alt=!0:q.shift.indexOf(Y)!==-1?j.shift=!0:q.meta.indexOf(Y)!==-1&&(j.meta=!0)}),{ctrl:j.ctrl,alt:j.alt,shift:j.shift,meta:j.meta,key:H}}function E(i,m){if(!i||!m)return!1;var H=String(m.key||m.code||"").toLowerCase();return i.key!==H?!1:i.ctrl===!!m.ctrlKey&&i.alt===!!m.altKey&&i.shift===!!m.shiftKey&&i.meta===!!m.metaKey}function D(i){if(!i)return"";var m=[];return i.ctrl&&m.push("Ctrl"),i.alt&&m.push("Alt"),i.shift&&m.push("Shift"),i.meta&&m.push("Meta"),m.push(i.key.toUpperCase()),m.join("+")}function N(){var i={};return{register:function(m){if(!m||!m.key)throw new Error("命令 key 必填");if(i[m.key])throw new Error("命令重复注册: "+m.key);return i[m.key]=Object.assign({},m),m.key},list:function(){return Object.keys(i).map(function(m){return i[m]})},get:function(m){return i[m]||null},remove:function(m){delete i[m]},has:function(m){return!!i[m]},count:function(){return Object.keys(i).length}}}function T(){var i={},m={};return{register:function(H,j,K){var Y=R(H);if(!Y)throw new Error("无效快捷键: "+H);var se=D(Y);if(i[se])throw new Error("快捷键冲突: "+H);if(j!=null&&m[j]!==void 0)throw new Error("动作重复绑定: "+j);return i[se]={combo:H,action:j,description:K||"",parsed:Y},m[j]=se,se},resolve:function(H){for(var j in i)if(E(i[j].parsed,H))return i[j].action;return null},list:function(){return Object.keys(i).map(function(H){return i[H]})},unregister:function(H){var j=D(R(H));i[j]&&(delete m[i[j].action],delete i[j])},count:function(){return Object.keys(i).length}}}function u(){var i=T();return i.register("Ctrl+K","toggle-palette","打开命令面板"),i.register("F5","refresh","刷新当前页"),i.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),i.register("Ctrl+J","open-ai","打开 AI 问股"),i.register("Ctrl+D","open-today","今日一屏"),i.register("Ctrl+E","batch-eval","批量 AI 评估"),i.register("Ctrl+G","add-portfolio","加入组合"),i.register("Ctrl+H","open-eval-history","打开评估历史"),i.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),i}return{normalize:a,createPaletteState:y,toggleVisible:e,searchMenus:v,searchCommands:f,filterStocksLocal:A,mergeResults:p,moveIndex:d,buildSearchSuggestions:x,dispatchSearchSelection:o,DEFAULT_COMMANDS:M,parseKeyCombo:R,matchShortcut:E,canonicalCombo:D,createCommandRegistry:N,createShortcutRegistry:T,createDefaultShortcuts:u}});(function(a){if(a&&!a.QuantCommandPanel)try{var t=typeof Oe<"u"&&Oe.exports?Oe.exports:null;t&&(a.QuantCommandPanel=t)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(a,t){var y=t();typeof Oe=="object"&&Oe.exports&&(Oe.exports=y),a.QuantOnboarding=y})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var a=[{key:"welcome",title:"欢迎使用量化日历",target:""},{key:"pool",title:"认识今日股票池",target:"strategies"},{key:"calendar",title:"日历视图",target:"calendar"},{key:"ai",title:"AI 评估",target:"ai"},{key:"finish",title:"完成",target:"research"}],t=a.length,y=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],e=y.length;function v(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function f(){return y.slice()}function A(z){return z<0?0:z>=e?e-1:z}function p(z){return{stepIndex:z.stepIndex,completed:!!z.completed,dismissed:!!z.dismissed,updatedAt:z.updatedAt||0}}function d(z){return p(Object.assign({},z,{stepIndex:A((z.stepIndex||0)+1),updatedAt:Date.now()}))}function x(z){return p(Object.assign({},z,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function o(z){return p(Object.assign({},z,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function M(z){var U=Math.min(z&&z.stepIndex||0,e);return{done:U,total:e,pct:Math.round(U/e*100)}}function q(z){return!!(z&&!z.completed&&!z.dismissed)}function R(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function E(){return a.slice()}function D(){return t}function N(z){return z<0?0:z>=t?t-1:z}function T(z){return{stepIndex:z.stepIndex,completed:!!z.completed,dismissed:!!z.dismissed,updatedAt:z.updatedAt||0}}function u(z){return T(Object.assign({},z,{stepIndex:N((z.stepIndex||0)+1),updatedAt:Date.now()}))}function i(z){return T(Object.assign({},z,{stepIndex:N((z.stepIndex||0)-1),updatedAt:Date.now()}))}function m(z,U){return T(Object.assign({},z,{stepIndex:N(U),updatedAt:Date.now()}))}function H(z){return T(Object.assign({},z,{completed:!0,updatedAt:Date.now()}))}function j(z){return T(Object.assign({},z,{dismissed:!0,updatedAt:Date.now()}))}function K(z){return!!(z&&z.completed)}function Y(z){var U=Math.min(z&&z.stepIndex||0,t);return{done:U,total:t,pct:Math.round(U/t*100)}}function se(z){var U=z||R();return JSON.stringify({stepIndex:U.stepIndex,completed:!!U.completed,dismissed:!!U.dismissed,updatedAt:U.updatedAt||0})}function F(z){var U=R();if(!z||typeof z!="string")return U;try{var W=JSON.parse(z);if(!W||typeof W!="object")return U;var le=parseInt(W.stepIndex,10);return isNaN(le)?U:{stepIndex:N(le),completed:!!W.completed,dismissed:!!W.dismissed,updatedAt:W.updatedAt||0}}catch{return U}}return{ONBOARDING_STEPS:a,steps:E,stepCount:D,createOnboardingState:R,next:u,prev:i,jumpTo:m,complete:H,dismiss:j,isComplete:K,progress:Y,persistState:se,parseState:F,SHORTTERM_TOUR_STEPS:y,shorttermTourSteps:f,createShorttermTourState:v,shorttermTourNext:d,shorttermTourComplete:x,shorttermTourDismiss:o,shorttermTourProgress:M,shorttermTourShouldShow:q}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:t,onMounted:y}=Vue,e=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const v=a(!1),f=a(e.createOnboardingState()),A=t(function(){return e.steps()[f.value.stepIndex]}),p=t(function(){return e.progress(f.value)}),d=t(function(){return f.value.stepIndex>=e.stepCount()-1}),x=t(function(){return"onboarding.step."+A.value.key});function o(){const N=e.persistState(f.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:N}})}).then(function(T){return T.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",N)}catch{}})}function M(){f.value=e.next(f.value)}function q(){f.value=e.prev(f.value)}function R(){f.value=e.complete(f.value),o(),v.value=!1}function E(){f.value=e.dismiss(f.value),o(),v.value=!1}function D(){fetch("/api/user_config/preferences").then(function(N){return N.json()}).then(function(N){const T=N&&N.preferences&&N.preferences.onboarding_progress;return T&&(f.value=e.parseState(T)),T}).catch(function(){return null}).then(function(N){if(!N)try{const T=localStorage.getItem("qc_onboarding_progress");T&&(f.value=e.parseState(T))}catch{}!e.isComplete(f.value)&&!f.value.dismissed&&(v.value=!0)})}return y(D),{visible:v,st:f,step:A,prog:p,isLast:d,stepKey:x,next:M,prev:q,finish:R,skip:E}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"inbox"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
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
    `,setup(){function a(t){try{const y=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(y)return y(t)||""}catch{}return t}return{t:a}}})})();(function(){const{ref:a,computed:t,watch:y,nextTick:e,inject:v,onMounted:f}=Vue,A=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
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
    `,setup(){const p=v("qcState");if(!p)return{};const d=a(""),x=t({get:()=>p.commandPaletteVisible.value,set:w=>{p.commandPaletteVisible.value=w}}),o=a(0),M=a([]),q=a(null),R=t(()=>{const w=(A.DEFAULT_COMMANDS||[]).map(function(_){return Object.assign({},_)});return Object.keys(p.themes.value||{}).forEach(function(_){const h=p.themes.value[_];w.push({key:"theme:"+_,label:"切换主题 · "+(h.name||_),icon:"palette",keywords:"theme 主题"})}),w});function E(w){return typeof w=="string"&&/^[a-z][a-z0-9-]*$/.test(w)}const D=t(()=>p.menus.value||[]);function N(){const w=window.__quantModules&&window.__quantModules.pinyin;if(!w)return[];const l=[];return(p.watchlist&&p.watchlist.value||[]).forEach(function(_){l.push({code:_.code,name:_.name})}),(p.aiHistory&&p.aiHistory.value||[]).forEach(function(_){_&&_.stock_code&&l.push({code:_.stock_code,name:_.stock_name||_.stock_code})}),l.push.apply(l,w.getExtraStocks()),w.buildStockIndex(l)}function T(w){const l=window.__quantModules&&window.__quantModules.pinyin;return l?l.searchStocksByQuery(w,N()).map(function(_){return{type:"stock",code:_.code,name:_.name,label:_.name,subLabel:_.code,icon:"trending-up"}}):[]}function u(){const w=[],l=window.__quantModules&&window.__quantModules.recent;l&&l.getRecentViewed().slice(0,5).forEach(function(h){w.push({type:"stock",code:h.code,name:h.name||h.code,label:h.name||h.code,subLabel:"最近查看 · "+h.code,icon:"trending-up"})});const _=(p.watchlist&&p.watchlist.value||[]).slice(0,8).map(function(h){return{type:"stock",code:h.code,name:h.name||h.code,label:h.name||h.code,subLabel:"我的自选 · "+h.code,icon:"trending-up"}});return w.concat(_)}const i=t(()=>{const w=d.value;if(!w)return A.mergeResults([],[],u());const l=A.searchMenus(w,D.value,p.subPageNames),_=A.searchCommands(w,R.value),h=M.value;return A.mergeResults(l,_,h)}),m=t(()=>i.value);function H(w){return m.value.flat[o.value]===w}function j(w){o.value=m.value.flat.indexOf(w)}function K(w){return(w.type||"")+":"+(w.code||w.menuKey||w.key||w.label)}let Y=null;function se(){const w=d.value.trim();if(w.length<1){M.value=[];return}Y&&clearTimeout(Y),Y=setTimeout(function(){const l=T(w);M.value=l,o.value=0,p.searchStocks(w,function(_){if(d.value.trim()!==w)return;const h=(_||[]).filter(function(L){return L&&L.code&&L.name}).map(function(L){return{type:"stock",code:L.code,name:L.name,label:L.name,subLabel:L.code,icon:"trending-up"}}),k={},Z=[];l.forEach(function(L){k[L.code]||(k[L.code]=!0,Z.push(L))}),h.forEach(function(L){k[L.code]||(k[L.code]=!0,Z.push(L))}),M.value=Z,o.value=0})},200)}function F(){o.value=A.moveIndex(o.value,m.value.flat.length,1)}function z(){o.value=A.moveIndex(o.value,m.value.flat.length,-1)}function U(){const w=m.value.flat[o.value];w&&W(w)}function W(w){p.commandPaletteVisible.value=!1,w.type==="menu"?p.navigateTo(w.menuKey,w.subPage):w.type==="stock"?p.showStockDetail(w.code,w.name):w.type==="command"&&le(w.key)}function le(w){if(w==="refresh"){const l=p.currentPage.value;l==="strategies"?p.loadDashboardData().catch(function(){}):l==="calendar"?p.refreshCalendarData().catch(function(){}):l==="ai"&&p.loadAiHistory().catch(function(){})}else w==="export"?p.exportCSV():w==="batch"?p.showBatchEvaluate.value=!0:w==="ai"?p.openAiFab():w==="sidebar"?p.toggleSidebar():w==="today"?p.navigateTo("strategies","overview"):w==="add-portfolio"?(p.currentPage.value="ai",p.currentSubPage.value="portfolio"):w==="open-system"?p.navigateTo("system","status"):w==="open-shortterm"?p.navigateTo("shortterm","overview"):w==="open-research"?p.navigateTo("research","overview"):w==="open-calendar"?p.navigateTo("calendar",""):w==="refresh-data-source"?p.navigateTo("system","datasource"):w.indexOf("theme:")===0&&p.changeTheme(w.slice(6))}y(x,function(w){w&&(d.value="",M.value=[],o.value=0,e(function(){q.value&&q.value.focus&&q.value.focus()}))}),y(d,se);function Q(w){w==="toggle-palette"?p.commandPaletteVisible.value=!p.commandPaletteVisible.value:w==="toggle-sidebar"?p.toggleSidebar():w==="open-ai"?p.openAiFab():w==="refresh"?le("refresh"):w==="open-today"?le("today"):w==="batch-eval"?le("batch"):w==="add-portfolio"&&le("add-portfolio")}function s(w){if(!A.createDefaultShortcuts||!A.createShortcutRegistry)return;const _=A.createDefaultShortcuts().resolve({key:w.key,ctrlKey:w.ctrlKey,altKey:w.altKey,shiftKey:w.shiftKey,metaKey:w.metaKey});_&&(w.preventDefault(),Q(_))}return f(function(){document.addEventListener("keydown",s)}),{visible:x,query:d,results:m,inputEl:q,sanitizeHtml:p.sanitizeHtml,isIconName:E,onDown:F,onUp:z,onEnter:U,execute:W,isActive:H,setActive:j,itemKey:K,onGlobalKeydown:s}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
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
    `,setup(){const t=a("qcState");if(!t)return{};const y=Vue.ref(0);let e=null;return t.batchRunning&&t.batchRunning.__v_isRef&&Vue.watch(t.batchRunning,v=>{v?(y.value=0,e=setInterval(()=>{y.value++},1e3)):e&&(clearInterval(e),e=null)}),{...t,batchElapsed:y}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
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
    `,setup(){const v=a("qcState");if(!v)return{};const f={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},A=t(()=>f[v.aiEvalStage.value]||""),p=t(()=>{const U=v.aiResult&&v.aiResult.value&&v.aiResult.value.result&&v.aiResult.value.result.level;return U?U==="强烈推荐"||U==="推荐"?"var(--success-text)":U==="谨慎推荐"?"var(--warning-text)":U==="中性"||U==="观望"?"var(--text-secondary)":U==="评估失败"||U==="无可用模型"?"var(--danger-text)":"var(--color-primary)":"var(--color-primary)"});function d(U){const W=document.createElement("textarea");W.value=U,W.style.position="fixed",W.style.opacity="0",document.body.appendChild(W),W.select(),document.execCommand("copy"),document.body.removeChild(W)}async function x(){const U=v.aiResult&&v.aiResult.value;if(!U||!U.result)return;const W=U.result.dimensions||{},le=Object.entries(W).map(([s,w])=>`${s} ${Math.round(w)}分`).join(`
`),Q=`【AI 智能评估】${U.result.level||""} ${U.result.total_score!=null?U.result.total_score:"—"}分
模型：${U.model_used||U.result.provider||"—"}

${U.result.detailed_report||""}

九维度评分：
${le||"无"}`;try{await navigator.clipboard.writeText(Q),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{d(Q),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const o=y(!1),M=y(!1),q=y(null),R=y([]),E={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function D(U){return E[U]||"factor-sem-none"}async function N(){const U=v.stockDetail.value&&v.stockDetail.value.stock;if(U){o.value=!0,M.value=!1,R.value=[],q.value=null;try{const W=v.selectedDate.value?`?date=${v.selectedDate.value}`:"",le=await fetch(`/api/calendar/stock/${U}/factors${W}`).then(l=>l.json()),Q=le&&Array.isArray(le.factors)?le.factors:[],s=[],w={};Q.forEach(l=>{w[l.category]||(w[l.category]={category:l.category,items:[]},s.push(w[l.category])),w[l.category].items.push(l)}),R.value=s,q.value=le&&le.summary||null}catch{M.value=!0}finally{o.value=!1}}}e(v.stockDetailTab,U=>{U==="factor"&&v.stockDetail.value&&v.stockDetailVisible.value&&(N(),u())});const T=y(null);async function u(){try{const U=await fetch("/api/market/factor-ic").then(W=>W.json());T.value=U&&U.success&&U.data?U.data:{}}catch{T.value={}}}function i(U){if(!U||!U.n5)return"—";const W=U.n5.icir!=null?"ICIR "+U.n5.icir:"ICIR —";return U.n5.grade+" ("+W+")"}const m=y(!1),H=y(!1),j=y([]),K=y([]);function Y(U){if(U==null)return"—";const W=Number(U);return Number.isNaN(W)?"—":Math.abs(W)>=1e8?(W/1e8).toFixed(2)+"亿":Math.abs(W)>=1e4?(W/1e4).toFixed(1)+"万":String(W)}async function se(){const U=v.stockDetail&&v.stockDetail.value&&v.stockDetail.value.stock;if(U){m.value=!0,H.value=!1;try{const W=await fetch("/api/market/performance/"+encodeURIComponent(U)).then(le=>le.json());W&&W.success?(j.value=W.forecast||[],K.value=W.express||[]):H.value=!0}catch{H.value=!0}finally{m.value=!1}}}e(v.stockDetailTab,U=>{U==="performance"&&se()});const F=y(null);async function z(){const U=v.stockDetail&&v.stockDetail.value&&v.stockDetail.value.stock;if(!U){F.value=null;return}try{const W=await fetch("/api/focus/stock/"+encodeURIComponent(U)+"/pool").then(le=>le.json());F.value=W&&W.success&&W.data?W.data:null}catch{F.value=null}}return e(()=>v.stockDetail&&v.stockDetail.value&&v.stockDetail.value.stock,U=>{U&&v.stockDetailVisible.value?z():F.value=null}),e(()=>v.stockDetailVisible.value,U=>{U?z():F.value=null}),{...v,aiStageText:A,levelRingColor:p,copyAiReport:x,factorLoading:o,factorError:M,factorSummary:q,factorGroups:R,factorSemClass:D,loadFactorPanel:N,factorIc:T,loadFactorIc:u,factorIcGrade:i,perfLoading:m,perfError:H,perfForecast:j,perfExpress:K,fmtY:Y,loadPerformance:se,poolInfo:F,loadPoolInfo:z}}}})();(function(){const{computed:a,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
    `,setup(y){const e=t("qcState");if(!e)return{};const v=a(()=>y.type==="history"?e.selectedHistoryIds.value.includes(y.item.id):e.selectedChatIds.value.includes(y.item.id)),f=a(()=>{const E=e.watchlistCodes.value.has(y.item.stock_code);return{icon:"star",isWatched:E,label:E?"取消收藏":"加入收藏"}}),A=a(()=>y.type==="history"?"bot":"message-circle"),p=a(()=>{var E;return y.type==="history"?((E=y.item.result)==null?void 0:E.provider)||"":y.item.first_msg||""}),d=a(()=>{var E,D;return`${((D=(E=y.item.result)==null?void 0:E.dimensions)==null?void 0:D.length)||9}维度分析`}),x=a(()=>{var D,N;const E=y.type==="history"?y.item.evaluate_time:y.item.created_at||"";return E?y.timeFormat==="datetime"?y.type==="history"?`${E.split("T")[0]} ${(E.split("T")[1]||"").split(".")[0]}`:`${E.split("T")[0]} ${((D=E.split("T")[1])==null?void 0:D.substring(0,5))||""}`:y.type==="history"?(E.split("T")[1]||"").split(".")[0]||E:((N=E.split("T")[1])==null?void 0:N.substring(0,5))||"":""});function o(){y.type==="history"?e.toggleSelectHistory(y.item.id):e.toggleSelectChat(y.item.id)}function M(){y.type==="history"?e.viewAiResult(y.item):e.viewChatSession(y.item)}async function q(){try{await ElementPlus.ElMessageBox.confirm(y.type==="history"?"确定删除这条评估记录吗？此操作不可恢复。":"确定删除这段对话吗？此操作不可恢复。","删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}y.type==="history"?e.deleteSingleHistory(y.item.id):e.deleteChatSession(y.item.id)}function R(E,D){e.toggleWatchlist(E,D)}return{isSelected:v,watchState:f,providerIcon:A,providerText:p,dimsText:d,timeText:x,toggleSelect:o,view:M,remove:q,toggleWatchlist:R,keyClick:e.keyClick,fmtNum:e.fmtNum,evaluatedCodes:e.evaluatedCodes,klineLoadedCodes:e.klineLoadedCodes,levelColor:e.levelColor,levelBg:e.levelBg}}}})();(function(){const{ref:a,computed:t,onMounted:y,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{};const v=["买入","持有","观望","减仓","卖出"],f={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},A={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},p=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],d={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},x=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function o(q){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(q).then(D=>D.json?D.json():D)}function M(){const q=new Date,R=E=>E<10?"0"+E:""+E;return q.getFullYear()+"-"+R(q.getMonth()+1)+"-"+R(q.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",template:`
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
      </div>`,setup(){const q=e("qcState"),R=a(M()),E=a("after_close"),D=a({rows:[],actions:{},total:0,groups:{}}),N=a({sessions:{},total:0}),T=a(null),u=a(!1),i=a(""),m=a(!1),H=a([]),j=a(""),K=a(null),Y={},se=a({});let F=0;const z=a(null),U=t(function(){const P=D.value&&D.value.groups||{};return Object.keys(P).length?P:D.value&&D.value.rows&&D.value.rows.length?{全部:D.value.rows}:{}}),W=t(function(){const P=z.value;return!P||!P.date||P.date!==R.value?"":"已加载最近一次评估: "+P.date+" · "+(d[P.session]||P.session)}),le=t(function(){const P=D.value&&D.value.base_date;return P?P===R.value?"评分范围: "+P+" 收盘池 + 自选":"评分范围: "+P+" 收盘池(前一交易日算好) + 自选":""});function Q(P){if(P==null)return"—";const G=Number(P);return G===Math.floor(G)?String(G):G.toFixed(1)}function s(P){const G=D.value.total||0,oe=(D.value.actions||{})[P]||0;if(!G)return"0%";const fe=oe/G*100;return fe>0&&fe<4?"4%":fe.toFixed(1)+"%"}function w(P){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[P]||"info"}function l(P){const G=T.value&&T.value.overall&&T.value.overall[P]||null;return!G||G.total===0||G.rate===null||G.rate===void 0?"info":G.rate>=60?"success":G.rate>=40?"warning":"danger"}function _(P){const G=T.value&&T.value.overall&&T.value.overall[P]||null;return!G||G.total===0||G.rate===null||G.rate===void 0?"样本不足":G.rate.toFixed(1)+"% ("+G.total+" 样本)"}function h(){return d[E.value]||E.value}function k(P){const G=H.value.indexOf(P);G>=0?H.value.splice(G,1):H.value.push(P)}function Z(P){if(!P||!P.raw_json)return{};if(Y[P.stock_code+P.session+P.trade_date])return Y[P.stock_code+P.session+P.trade_date];let G={};try{G=JSON.parse(P.raw_json)||{}}catch{G={}}return Y[P.stock_code+P.session+P.trade_date]=G,G}async function L(){try{const P=await o("/api/focus/latest"),G=P&&P.success&&P.data;G&&G.date&&(z.value=G,R.value=G.date,G.session&&(E.value=G.session))}catch(P){console.warn("[focus] 最近一次评估解析失败:",P)}}async function b(){m.value=!0;try{const P=await o("/api/focus/results?date="+R.value+"&session="+E.value);D.value=P&&P.success&&P.data||{rows:[],actions:{},total:0,groups:{}},r((D.value.rows||[]).map(function(G){return G.stock_code}))}catch(P){console.warn("[focus] 结果加载失败:",P),D.value={rows:[],actions:{},total:0,groups:{}}}finally{m.value=!1}}async function r(P){const G=se.value||{},oe=(P||[]).filter(function(ee){return ee&&!G[ee]});if(!oe.length)return;const fe=++F,Me=oe.map(function(ee){return o("/api/focus/stock/"+encodeURIComponent(ee)+"/pool?date="+R.value).then(function(ue){ue&&ue.success&&ue.data?G[ee]=ue.data:G[ee]={stock_code:ee,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){G[ee]={stock_code:ee,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(Me)}catch{}fe===F&&(se.value=Object.assign({},G))}function S(P){const G=q&&q.showStockDetail;if(typeof G=="function"){G(P);return}const fe=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;fe&&fe.info("请从其他页面打开股票详情: "+P)}async function c(){try{const P=await o("/api/focus/history?date="+R.value);N.value=P&&P.success&&P.data||{sessions:{},total:0}}catch(P){console.warn("[focus] 历史加载失败:",P),N.value={sessions:{},total:0}}}async function O(){u.value=!0;try{const P=await o("/api/ai/track");P&&P.success&&P.data?(T.value=P.data,i.value=(P.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):T.value=null}catch(P){console.warn("[focus] 效果块加载失败:",P),T.value=null}finally{u.value=!1}}async function re(){const P=(j.value||"").trim();if(P){K.value=null;try{const G=await o("/api/focus/stock/"+encodeURIComponent(P));K.value=G&&G.success&&G.data&&G.data.rows||[]}catch(G){console.warn("[focus] 单股历史加载失败:",G),K.value=[]}}}async function X(){await b(),await c(),await O()}return y(async function(){await L(),await X()}),{curDate:R,session:E,results:D,history:N,track:T,trackLoading:u,trackNote:i,detailSplitEnabled:q.detailSplitEnabled,stockDetail:q.stockDetail,loading:m,expanded:H,stockCode:j,stockHistory:K,SESSIONS:p,ACTION_ORDER:v,TRACK_WINDOWS:x,ACTION_DOT:f,TIER_DOT:A,SESSION_LABELS:d,displayGroups:U,latestNote:W,baseNote:le,sessionLabel:h,fmtScore:Q,tagType:w,rateTagType:l,fmtRate:_,toggle:k,detailOf:Z,loadResults:b,loadHistory:c,loadTrack:O,loadStockHistory:re,loadAll:X,poolStatus:se,openStockDetail:S,actionPct:s}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:t,nextTick:y}=Vue,{currentView:e,statusFilter:v,dashboardData:f,loadHealthMetrics:A,getLoadDashboardData:p,getLastRefreshTime:d,getFetchPoolSignals:x}=a,o=t(!1),M=t(""),q=new Map,R=t([]),E=t(""),D=t(""),N=t([]),T=t(""),u=window.__quantModules.core||{},i=typeof u.createTtlCache=="function"?u.createTtlCache(15e3):null;let m=0;function H(){const W=Date.now();W-m<5e3||(m=W,ElementPlus.ElMessage.success("有新数据，已更新"))}function j(W,le,Q,s){!i||!le||typeof u.silentRefresh!="function"||u.silentRefresh({cache:i,key:le,fetchFn:async()=>{const w=await fetch(W);if(!w.ok)throw new Error("HTTP "+w.status);const l=await w.json();return Q?Q(l):l},ttl:i.defaultTtl,apply:s,onChanged:H,onError:()=>{}})}const K=new Set;async function Y(){var W;try{const Q=await(await fetch("/api/dates")).json();R.value=((W=Q.data)==null?void 0:W.dates)||Q.dates||[],R.value.length>0&&(E.value=R.value[R.value.length-1]),D.value=new Date().toLocaleTimeString()}catch(le){console.error(le)}}async function se(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),D.value="刷新中...",q.clear(),await Y(),await z(),D.value=new Date().toLocaleTimeString()}catch(W){console.error("数据刷新失败",W)}}function F(){if(!E.value)return;const le="/api/view/"+(e.value||"day")+"/"+E.value+"?status="+(v.value||"all")+"&format=csv";window.open(le,"_blank")}async function z(){if(!E.value)return;const W=`${e.value}_${E.value}`;if(K.has(W))return;K.add(W);const le=`/api/view/${e.value}/${E.value}?status=all`,Q=i&&typeof u.makeCacheKey=="function"?u.makeCacheKey("GET",`/api/view/${e.value}/${E.value}`,{status:"all"}):null,s=(_,h)=>{N.value=_,T.value=h||"",q.set(W,{stocks:_,note:h||""})},w=_=>{s(_&&_.stocks||[],_&&_.note||"")};if(q.has(W)){w(q.get(W)),j(le,Q,_=>_,w),K.delete(W);return}const l=Q&&i?i.get(Q):void 0;if(l!==void 0){w(l),j(le,Q,_=>_,w),K.delete(W);return}o.value=!0,M.value={day:"日",week:"周",month:"月",year:"年"}[e.value]||e.value;try{const h=await(await fetch(le)).json(),k=h.stocks||[];s(k,h.note||""),i&&Q&&i.set(Q,{stocks:k,note:h.note||""})}catch{try{const k=await(await fetch(`/api/calendar/${E.value}/consensus`)).json();N.value=(k.consensus||[]).map(Z=>({...Z,code:Z.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{o.value=!1}x(),K.delete(W)}async function U(){const W=i&&typeof u.makeCacheKey=="function"?u.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(i){const le=i.get(W);if(le!==void 0){f.value=le,A().catch(()=>{}),j("/api/dashboard",W,Q=>Q.data||Q,Q=>{f.value=Q,d().value=Date.now()});return}}await p()(),A().catch(()=>{}),i&&i.set(W,f.value)}return{loading:o,loadingView:M,viewCache:q,dates:R,selectedDate:E,lastLoadTime:D,consensus:N,viewNote:T,loadDates:Y,refreshCalendarData:se,exportCSV:F,loadConsensusData:z,loadDashboardCached:U}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:t}=Vue,{currentKlinePeriod:y,loadIndexKline:e,rememberDialogTrigger:v,menus:f,currentPage:A,currentSubPage:p,stockDetail:d,selectedDate:x}=a,o=ref({indices:[],market_sentiment:null});let M=null;const q=ref(!1),R=ref(null),E=ref(null),D=ref(!1);function N(){window.__quantModules.charts.disposeKline("stockKlineChart")}const T=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{T.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const u=ref(!1),i=ref(null),m=ref(!1),H=ref(0),j=ref(0);async function K(){try{const h=await(await fetch("/api/market/overview")).json();o.value=h,Y(h)}catch(_){console.error("获取市场行情失败:",_)}}function Y(_){M&&clearInterval(M),_&&_.in_trading_hours&&(M=setInterval(K,6e5))}function se(_){v(),R.value=_,E.value=null,y.value="daily",F(_.code),window.__quantModules.charts.disposeKline("indexKlineChart"),q.value=!0,setTimeout(async()=>{await e("daily")},500)}async function F(_){try{const k=await(await fetch("/api/ai/index-eval/"+_)).json();k.success&&k.data&&(E.value=k.data)}catch(h){console.warn("[getIndexAiScore] cache check failed:",h)}}async function z(){if(R.value){D.value=!0;try{const h=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:R.value.code,index_name:R.value.name,current_price:R.value.close,pct_chg:R.value.pct_chg})})).json();h.success?E.value=h.data:ElementPlus.ElMessage.error(h.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{D.value=!1}}}function U(_){window.__quantModules.charts.zoomKline("stockKlineChart",_)}function W(){m.value=!0,setTimeout(()=>{m.value=!1},600)}function le(_,h){if(_===h){W();return}const k=800,Z=performance.now(),L=h-_;u.value=!0,i.value={value:L,dir:L>0?"up":"down"},m.value=!0,setTimeout(()=>{m.value=!1},600),setTimeout(()=>{i.value=null},2300);function b(r){const S=r-Z,c=Math.min(S/k,1),O=1-Math.pow(1-c,3),re=Math.round(_+L*O);d.value&&d.value.score_data&&(d.value.score_data.score=re),c<1?requestAnimationFrame(b):(d.value&&d.value.score_data&&(d.value.score_data.score=h),u.value=!1)}requestAnimationFrame(b)}function Q(){if(!d.value||!d.value.score_data)return;const _=d.value.score_data.score;if(_==null)return;const h=600,k=performance.now();m.value=!0,setTimeout(()=>{m.value=!1},600);function Z(L){const b=Math.min((L-k)/h,1),r=1-Math.pow(1-b,3),S=Math.round(_*r);d.value&&d.value.score_data&&(d.value.score_data.score=S),b<1?requestAnimationFrame(Z):d.value&&d.value.score_data&&(d.value.score_data.score=_)}requestAnimationFrame(Z)}async function s(){var k;if(!d.value||!d.value.stock)return;const _=d.value.stock,h=(k=d.value.score_data)==null?void 0:k.score;try{const Z=new Date().toISOString().split("T")[0],L=x.value||Z,r=await(await fetch(`/api/calendar/stock/${encodeURIComponent(_)}/score?date=${L}`)).json();if(r.success&&r.score_data){const S=r.score_data.score;d.value&&(d.value.score_data=r.score_data),h!=null&&S!==h?le(h,S):W()}else W()}catch(Z){console.warn("[refreshStockScore] failed:",Z)}}function w(_){T.value&&(H.value=_.touches[0].clientX,j.value=_.touches[0].clientY)}function l(_){if(!T.value)return;const h=H.value-_.changedTouches[0].clientX,k=j.value-_.changedTouches[0].clientY;if(Math.abs(h)>Math.abs(k)&&Math.abs(h)>80){const Z=f.value.map(function(b){return b.key}),L=Z.indexOf(A.value);if(h>0&&L<Z.length-1){const b=Z[L+1],r=window.__quantGoPage;r?r(b,""):(A.value=b,p.value="")}else if(h<0&&L>0){const b=Z[L-1],r=window.__quantGoPage;r?r(b,""):(A.value=b,p.value="")}}}return{marketData:o,marketRefreshTimer:M,fetchMarketData:K,indexDetailVisible:q,indexDetail:R,indexAiResult:E,indexAiLoading:D,showIndexDetail:se,loadCachedIndexEval:F,doIndexAiEvaluate:z,disposeStockKline:N,isMobile:T,zoomKlineRange:U,scoreAnimating:u,scoreDelta:i,scorePulse:m,triggerScorePulse:W,animateScoreChange:le,animateScoreEntrance:Q,refreshStockScore:s,touchStartX:H,touchStartY:j,onTouchStart:w,onTouchEnd:l}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:t,currentPage:y,currentSubPage:e}=a,v=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),f=ref("idle"),A=ref("");async function p(){if(!v.value.webhook_url){A.value="请先输入Webhook地址";return}f.value="testing",A.value="";try{const P=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:v.value.webhook_url})})).json();P.success||P.status==="ok"?(A.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(A.value=P.message||"测试失败",ElementPlus.ElMessage.error(A.value))}catch{A.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}f.value="idle"}const d=Vue.ref(!1);async function x(){d.value=!0;try{const P=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{d.value=!1}}const o=ref(!1);function M(){t("ai","chat_history"),o.value=!0,Vue.nextTick(()=>{const X=document.querySelector('input[placeholder*="输入问题"]');X&&X.focus()})}const q=ref([]),R=ref({});async function E(){try{const P=await(await fetch("/api/ai/recommend-strategies")).json();P.success&&(q.value=P.recommendations||[])}catch(X){console.warn("[loadStrategyRecommendations] failed:",X)}}async function D(){try{const P=await(await fetch("/api/ai/usage-stats")).json();P.success&&(R.value=P)}catch(X){console.warn("loadAiUsage failed:",X)}}const N=ref({}),T=ref([]),u=ref(7);async function i(){try{const P=await(await fetch("/api/system/monitor")).json();P.success&&(N.value=P)}catch(X){console.warn("loadSysMonitor failed:",X)}}const m=ref({});async function H(){try{const P=await(await fetch("/api/system/health-detail")).json();P.success&&(m.value=P)}catch(X){console.warn("loadHealthDetail failed:",X)}}async function j(){try{const P=await(await fetch(`/api/analytics/rank?days=${u.value}`)).json();P.success&&(T.value=P.rank||[])}catch(X){console.warn("loadAnalytics failed:",X)}}const K=ref(!1);async function Y(){if(!K.value){K.value=!0;try{const P=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return P&&P.success?P.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${P.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${P.date}）`):ElementPlus.ElMessage.error(P&&(P.detail||P.message)||"生成复盘失败"),H(),P}catch(X){ElementPlus.ElMessage.error("生成复盘失败: "+(X.message||""))}finally{K.value=!1}}}const se=ref(null),F=ref(!1);async function z(){try{const P=await(await fetch("/api/ai/fact-check/latest")).json();se.value=P&&P.success&&P.data||null}catch(X){console.warn("loadFactCheck failed:",X)}}async function U(){if(!F.value){F.value=!0;try{const P=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return P&&P.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${P.data.pass_rate!=null?P.data.pass_rate+"%":"--"} (${P.data.checked} 个数字)`),z()):ElementPlus.ElMessage.error(P&&(P.detail||P.message)||"事实护栏抽查失败"),P}catch(X){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(X.message||""))}finally{F.value=!1}}}const W=ref([]),le=ref(!1);async function Q(){try{const P=await(await fetch("/api/backup/list")).json();P.success&&(W.value=P.backups||[])}catch(X){console.error("加载备份列表失败",X)}}async function s(){le.value=!0;try{const P=await(await fetch("/api/backup/create",{method:"POST"})).json();P.success?(ElementPlus.ElMessage.success(P.message||"备份成功"),Q()):ElementPlus.ElMessage.error(P.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{le.value=!1}}const w=ref(""),l=ref("");async function _(X){w.value=X,l.value="";try{const P=window.__quantModules&&window.__quantModules.core||{},G=typeof P.authHeaders=="function"?P.authHeaders():{},oe=await fetch("/api/reports/export?format="+encodeURIComponent(X),{headers:G});if(!oe.ok)throw new Error("HTTP "+oe.status);const fe=await oe.blob(),Me=URL.createObjectURL(fe),ee=document.createElement("a");ee.href=Me;const ue=new Date().toISOString().slice(0,10);ee.download="report_"+ue+"."+X,document.body.appendChild(ee),ee.click(),document.body.removeChild(ee),URL.revokeObjectURL(Me),l.value="报表已导出 ("+X.toUpperCase()+")"}catch(P){l.value="报表导出失败: "+(P.message||P)}finally{w.value=""}}async function h(X){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${X} 恢复吗？当前数据将被覆盖。`,"恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(P){console.warn("[restoreBackup] confirm cancelled:",P);return}try{const G=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:X})})).json();G.success?(ElementPlus.ElMessage.success(G.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(G.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const k=ref(!1),Z=ref(0),L=[{icon:"calendar",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"bot",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 AI 按钮可随时快速问股。"},{icon:"send",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function b(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{Z.value=0,k.value=!0},800)}function r(){k.value=!1,localStorage.setItem("quant_tour_done","1")}function S(){k.value=!1,localStorage.setItem("quant_tour_done","1")}const c=ref(""),O=ref(!1);async function re(){if(!c.value||!c.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}O.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:c.value.trim(),page:y.value+"/"+e.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(c.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{O.value=!1}}return{feishuConfig:v,feishuTestStatus:f,feishuTestMessage:A,feishuSaving:d,testFeishuWebhook:p,saveFeishuConfig:x,aiFabHidden:o,openAiFab:M,strategyRecommendations:q,aiUsage:R,loadStrategyRecommendations:E,loadAiUsage:D,sysMonitor:N,analyticsRank:T,analyticsDays:u,loadSysMonitor:i,loadAnalytics:j,healthDetail:m,loadHealthDetail:H,reviewTriggering:K,triggerMarketReview:Y,factCheck:se,factCheckRunning:F,loadFactCheck:z,triggerFactCheck:U,backups:W,backupCreating:le,loadBackups:Q,createBackup:s,restoreBackup:h,reportExporting:w,reportExportMsg:l,exportReport:_,tourVisible:k,tourStep:Z,tourSteps:L,maybeShowTour:b,skipTour:r,finishTour:S,feedbackText:c,feedbackSubmitting:O,submitFeedback:re}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:t}=Vue,{currentView:y,selectedDate:e,dates:v,loadConsensusData:f,hapticFeedback:A}=a,p=t(()=>({day:"天",week:"周",month:"月",year:"年"})[y.value]||"天"),d=t(()=>({day:"date",week:"week",month:"month",year:"year"})[y.value]||"date"),x=t(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[y.value]||"YYYY-MM-DD"),o=t(()=>!e.value||!v.value||v.value.length===0?!1:e.value>v.value[0]),M=t(()=>!e.value||!v.value||v.value.length===0?!1:e.value<v.value[v.value.length-1]);function q(N){A("light"),y.value=N;let T=e.value||v.value[v.value.length-1];if(N==="year"){const u=T.substring(0,4),i=v.value.find(m=>m.startsWith(u));e.value=i||T}else if(N==="month"){const u=T.substring(0,7),i=v.value.find(m=>m.startsWith(u));e.value=i||T}setTimeout(f,50)}function R(N){A("light");const T=e.value,u=v.value,i=u.indexOf(T);if(i<0)return;let m=1;y.value==="week"&&(m=5),y.value==="month"&&(m=22),y.value==="year"&&(m=250);const H=i+N*m;if(H>=0&&H<u.length){const j=u[H];if(y.value==="month"){const K=j.substring(0,7),Y=u.find(se=>se.startsWith(K));e.value=Y||j}else if(y.value==="year"){const K=j.substring(0,4),Y=u.find(se=>se.startsWith(K));e.value=Y||j}else e.value=j;f()}}function E(N){if(!v.value||v.value.length===0)return!1;const T=N.getFullYear(),u=String(N.getMonth()+1).padStart(2,"0"),i=String(N.getDate()).padStart(2,"0"),m=`${T}-${u}-${i}`;return!v.value.includes(m)}function D(N){N&&N.length>10&&(e.value=N.substring(0,10)),f()}return{viewUnit:p,datePickerType:d,dateFormat:x,canNavPrev:o,canNavNext:M,switchView:q,navigateDate:R,disabledDate:E,onDateChange:D}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:t,subPageNames:y,navigateTo:e,currentPage:v,currentView:f,navigateDate:A,switchView:p,getLoadDashboardData:d,refreshCalendarData:x,getLoadAiHistory:o,exportCSV:M,getShowBatchEvaluate:q,openAiFab:R,toggleSidebar:E,showStockDetail:D}=a,N=ref("");async function T(F,z){if(!F||F.trim().length<1){z([]);return}const U=window.QuantCommandPanel;let W=[];U&&t.value&&(W=U.buildSearchSuggestions(F,t.value,y,U.DEFAULT_COMMANDS));const le=window.__quantModules&&window.__quantModules.pinyin;le&&le.searchCoreStocks(F).forEach(function(Q){W.push({value:Q.code+" "+Q.name,type:"stock",code:Q.code,name:Q.name,label:Q.name,subLabel:Q.code,icon:"trending-up",iconName:"trending-up"})});try{const s=await(await fetch("/api/search?q="+encodeURIComponent(F))).json();if(s.success&&s.results){const w=s.results.map(function(_){return{value:_.code+" "+_.name,type:"stock",code:_.code,name:_.name,label:_.name,subLabel:_.code,icon:"trending-up",iconName:"trending-up"}}),l=[];(s.groups||[]).forEach(function(_){(_.items||[]).forEach(function(h){h.type==="sector"?l.push({value:h.name+" · "+h.subLabel,type:"sector",name:h.name,label:h.name,subLabel:"板块",icon:"layers",iconName:"layers"}):h.type==="strategy"?l.push({value:h.name+" · 策略",type:"strategy",id:h.id,name:h.name,label:h.name,subLabel:"策略",icon:"target",iconName:"target"}):h.type==="menu"&&l.push({value:h.name,type:"menu",menuKey:h.menuKey,name:h.name,label:h.name,subLabel:h.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),z(W.concat(w,l))}else z(W)}catch(Q){console.warn("[searchStocks] fetch failed:",Q),z(W)}}function u(F){return F?F.type==="menu"?{action:"menu",menuKey:F.menuKey,subPage:F.subPage}:F.type==="command"?{action:"command",key:F.key}:F.type==="sector"?{action:"sector",name:F.name}:F.type==="strategy"?{action:"strategy",id:F.id,name:F.name}:F.type==="stock"||F.code&&F.name?{action:"stock",code:F.code,name:F.name}:null:null}function i(F){N.value="";const z=window.QuantCommandPanel,U=z?z.dispatchSearchSelection(F):u(F);if(U){if(U.action==="menu"){e(U.menuKey,U.subPage);return}if(U.action==="command"){m(U.key);return}if(U.action==="sector"){e("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(U.name);return}if(U.action==="strategy"){e("research","overview");return}U.action==="stock"&&typeof D=="function"&&D(U.code,U.name)}}function m(F){if(F==="refresh"){const z=v.value;z==="strategies"?d().catch(function(){}):z==="calendar"?x().catch(function(){}):z==="ai"&&o().catch(function(){})}else F==="export"?M():F==="batch"?q().value=!0:F==="ai"?R():F==="sidebar"?E():F==="open-eval-history"?e("ai","history"):F==="open-shortterm"&&e("shortterm","overview")}const H=ref(!1),j=ref(!1);function K(F){if(!F)return!1;const z=F.tagName;return z==="INPUT"||z==="TEXTAREA"||z==="SELECT"||F.isContentEditable}function Y(F){if(K(F.target))return;const z=F.key.toLowerCase();if(F.ctrlKey&&z==="k"){F.preventDefault(),j.value=!0;return}if(F.ctrlKey&&z==="/"){F.preventDefault(),H.value=!H.value;return}if(F.ctrlKey&&z==="h"){F.preventDefault(),e("ai","history");return}if(F.ctrlKey&&F.shiftKey&&z==="s"){F.preventDefault(),e("shortterm","overview");return}if(!(F.ctrlKey||F.metaKey||F.altKey)){if(z>="1"&&z<="5"){const U=parseInt(z)-1,W=t.value[U];W&&e(W.key,W.subPages[0]||"");return}if(z==="r"&&se(),(z==="arrowleft"||z==="arrowright"||z==="arrowup"||z==="arrowdown")&&v.value==="calendar")if(F.preventDefault(),z==="arrowleft"||z==="arrowright")A(z==="arrowleft"?-1:1);else{const U=["day","week","month","year"].indexOf(f.value),W=["day","week","month","year"][(U+(z==="arrowup"?-1:1)+4)%4];p(W)}}}function se(){const F=v.value;F==="strategies"?d().catch(()=>{}):F==="calendar"?x().catch(()=>{}):F==="ai"&&o().catch(()=>{})}return{searchQuery:N,searchStocks:T,onSearchSelect:i,runGlobalCommand:m,shortcutHelpVisible:H,commandPaletteVisible:j,isTypingTarget:K,handleGlobalKeydown:Y,refreshCurrentPage:se}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:t,loadUserConfig:y,loadDates:e,loadDashboardData:v,loadDashboardCached:f,loadHealthMetrics:A,loadConsensusData:p,applyTheme:d,maybeShowTour:x,loadAiVendors:o,loadGroupConfig:M,groupsConfig:q}=a,R="qc_login_username";let E="";try{E=localStorage.getItem(R)||""}catch{E=""}const D=ref({username:E,password:""}),N=ref(!1),T=ref(!1),u=ref(!1),i=ref({oldPassword:"",newPassword:"",confirmPassword:""}),m=ref(!1),H=ref(!1),j=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),K=ref(1);async function Y(){try{(await(await fetch("/api/setup/status")).json()).needed&&(j.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},K.value=1,H.value=!0)}catch(Q){console.warn("[checkSetupWizard] failed:",Q)}}async function se(){try{const Q={new_password:j.value.newPassword,ai_key:j.value.aiKey,ai_provider:j.value.aiProvider,ai_model:j.value.aiModel,ai_endpoint:j.value.aiEndpoint,tushare_token:j.value.tushareToken},w=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Q)})).json();w.success?(H.value=!1,ElementPlus.ElMessage.success("初始化完成"),await y()):ElementPlus.ElMessage.error(w.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function F(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(H.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function z(){if(!D.value.username||!D.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}N.value=!0;try{const s=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(D.value)})).json();if(s.success){t.value=s.user,localStorage.setItem("quant_user",JSON.stringify(s.user)),localStorage.setItem("quant_token",s.data.access_token),d(s.user.theme||"gold");try{localStorage.setItem(R,D.value.username||"")}catch{}typeof M=="function"&&await M().catch(function(){}),typeof o=="function"&&o(),await y(),await e(),await Promise.all([f(),p(),A().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),s.data&&s.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),x(),s.user.role==="admin"&&setTimeout(Y,500)}else ElementPlus.ElMessage.error(s.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{N.value=!1}}async function U(){T.value=!0;try{const s=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();s.success?(t.value=s.user,localStorage.setItem("quant_user",JSON.stringify(s.user)),localStorage.setItem("quant_token",s.data.access_token),d(s.user.theme||"gold"),typeof M=="function"&&await M().catch(function(){}),await y(),await e(),await v(),A().catch(()=>{}),await p(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(s.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{T.value=!1}}function W(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{t.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{q&&(q.value={})}catch{}try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function le(){if(!i.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!i.value.newPassword||i.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(i.value.newPassword!==i.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}m.value=!0;try{const Q=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:i.value.oldPassword,new_password:i.value.newPassword})}),s=await Q.json();Q.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),u.value=!1,i.value={oldPassword:"",newPassword:"",confirmPassword:""},W()):ElementPlus.ElMessage.error(s.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{m.value=!1}}return{loginForm:D,logining:N,guestLogining:T,showChangePassword:u,changePasswordForm:i,changingPassword:m,showSetupWizard:H,setupForm:j,setupStep:K,checkSetupWizard:Y,completeSetupWizard:se,resetSetupWizard:F,handleLogin:z,handleGuestLogin:U,handleLogout:W,doChangePassword:le}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:t}=Vue;let y=null;const{strategyFilter:e,currentView:v,statusFilter:f,currentPage:A,currentSubPage:p,menus:d,currentUser:x,strategyFilterCounts:o,lazyTick:M,dates:q,selectedDate:R,consensus:E,loadConsensusData:D,fetchMerrillClock:N,fetchMarketData:T,loadWatchlist:u,loadAiHistory:i,preloadWatchlistKline:m,loadChatHistory:H,loadSystemStatus:j,checkTushareConnection:K,loadSysMonitor:Y,loadAnalytics:se,loadHealthDetail:F,loadHealthMetrics:z,loadAiUsage:U,loadFactCheck:W,loadAutoEvaluateConfig:le,loadDatasourceConfig:Q,loadFeishuConfig:s,loadAiConfig:w,loadAiVendors:l,loadRateLimit:_,loadDataRefreshConfig:h,loadBackups:k,loadAllGroups:Z,loadUsers:L,stockDetailTab:b,stockDetailVisible:r,stockKlineLoaded:S,loadStockKline:c,currentKlinePeriod:O,showMerrillDetail:re,indexDetailVisible:X,restoreDialogFocus:P}=a;t(e,G=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(G.selected)),localStorage.setItem("quant_strategy_filter_mode",G.mode)},{deep:!0}),t([v,f],(G,oe)=>{G[0]!==oe[0]&&D()}),t([A,p],([G,oe])=>{var fe;try{const ee=!(G==="calendar"&&oe==="calendar")&&oe||"",ue=ee?"#"+G+"/"+ee:"#"+G;window.location.hash!==ue&&(window.location.hash=ue)}catch{}if(oe&&localStorage.setItem("quant_last_subpage",oe),!oe&&d.value.find(Me=>Me.key===G)){const Me=d.value.find(ee=>ee.key===G);Me&&Me.subPages.length>0&&(p.value=Me.subPages[0])}if(G==="shortterm"&&oe==="market-review"){const Me=window.__lazyLoaders&&window.__lazyLoaders.research;Me&&Me().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function(ee){ee&&ee.name&&!ee.__quantRegistered&&(window.__quantApp.component(ee.name,ee),ee.__quantRegistered=!0)}),M&&M.value++}).catch(function(ee){console.warn("[lazy] research 组件补加载失败",ee)})}G==="calendar"&&oe==="calendar"&&(!E.value||E.value.length===0)&&(q.value.length>0&&!R.value&&(R.value=q.value[q.value.length-1]||""),setTimeout(D,50)),G==="calendar"&&oe==="pool"&&(!E.value||E.value.length===0)&&(q.value.length>0&&!R.value&&(R.value=q.value[q.value.length-1]||""),setTimeout(D,50)),G==="strategies"&&(oe==="merrill"&&N(),oe==="market"&&T(),oe==="consensus"&&(!E.value||E.value.length===0)&&setTimeout(D,50)),G==="ai"&&(oe==="watchlist"&&(u(),i(),setTimeout(m,500)),oe==="history"&&i(),oe==="overview"&&(i(),u()),oe==="chat_history"&&H()),(G==="system"||G==="ops")&&((fe=x.value)==null?void 0:fe.role)==="admin"&&(oe==="status"&&(j(),K()),oe==="health"&&(F(),z()),oe==="schedule"&&F(),oe==="guard"&&W(),oe==="usage"&&(Y(),se(),F(),z(),U(),W()),oe==="autoeval"&&(le(),l()),oe==="datasource"&&Q(),oe==="feature"&&(s(),w(),_(),h(),k()),oe==="user"&&(Z(),L())),(G==="system"||G==="ops")&&oe==="usage"?y||(y=setInterval(()=>{Y(),se(),F(),z(),U()},3e4)):y&&(clearInterval(y),y=null)}),t(b,(G,oe)=>{G==="kline"&&oe&&oe!=="kline"&&r.value&&(S.value=!1,setTimeout(async()=>{!await c(O.value)&&r.value&&b.value==="kline"&&setTimeout(()=>c(O.value),800)},50))}),t(re,G=>{G||(document.documentElement.style.overflow="",document.body.style.overflow="")}),t([r,X],([G,oe])=>{!G&&!oe&&P()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:t,applyTheme:y,menus:e,currentPage:v,currentSubPage:f,currentView:A,currentKlinePeriod:p,selectedDate:d,dates:x,loadDates:o,loadConsensusData:M,loadDashboardCached:q,appVersion:R,themes:E,fetchMarketData:D,fetchMerrillStages:N,fetchMerrillClock:T,loadAiConfig:u,loadAiVendors:i,loadAiCatalog:m,currentUser:H,loadUserConfig:j,loadAutoEvaluateConfig:K,loadGroupConfig:Y,loadUsers:se,loadAllGroups:F,loadAiHistory:z}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",t);function U(L,b){const r={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(L==="calendar"&&r[b])return v.value="calendar",f.value="calendar",r[b]&&(A.value=r[b]),!0;if(L==="research"&&(b==="strategy-write"||b==="custom-write")){v.value="research",f.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",b==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const L=window.location.hash||"";if(!L||L==="#")return;const b=L.replace(/^#\/?/,"").split("/"),r=b[0],S=b[1]||"",c=e.value.find(function(O){return O.key===r});if(c&&!U(r,S)){if(!S)v.value=r,f.value=c.subPages[0]||"";else if(c.subPages.indexOf(S)>=0)v.value=r,f.value=S;else return;window.__lazyLoaders&&window.__lazyLoaders[r]&&window.__quantGoPage&&window.__quantGoPage(r,f.value).catch(function(){})}});const W=(L,b=3e3,r="")=>{const S=new Promise((c,O)=>setTimeout(()=>O(new Error("timeout")),b));return Promise.race([L,S]).catch(c=>{console.warn(`[init] ${r||"task"} failed:`,c.message)})},le=localStorage.getItem("quant_theme"),Q=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const L=window.__quantModules.themes;let b=Q.theme||"system",r=Q.theme_hue!=null&&Q.theme_hue!==""?Q.theme_hue:null;const S=typeof L.migrateLegacyTheme=="function"?L.migrateLegacyTheme():null;r==null&&S&&(b=S.mode,r=S.hue),r==null&&(r=45),y(b,r)}else le&&y(le);await Y().catch(function(){}),function(){var L=window.location.hash||"",b=!1;if(L&&L!=="#"){var r=L.replace(/^#\/?/,"").split("/"),S=r[0],c=r[1]||"",O=e.value.find(function(oe){return oe.key===S});O&&(U(S,c)||(v.value=S,c&&O.subPages.indexOf(c)>=0?f.value=c:c||(f.value=O.subPages[0]||"")),b=!0)}if(!b){var re=localStorage.getItem("quant_last_page");re&&e.value.some(function(oe){return oe.key===re})?v.value=re:Q.default_view&&e.value.some(function(oe){return oe.key===Q.default_view})&&(v.value=Q.default_view);var X=localStorage.getItem("quant_last_subpage");X&&(f.value=X)}var P=localStorage.getItem("quant_last_date");P&&(d.value=P);var G=localStorage.getItem("quant_last_view");G&&(A.value=G),window.__lazyLoaders&&window.__lazyLoaders[v.value]&&window.__quantGoPage&&window.__quantGoPage(v.value,f.value).catch(function(){})}(),fetch("/api/health").then(L=>L.json()).then(L=>{L.version&&(R.value=L.version)}).catch(()=>{});const s=localStorage.getItem("quant_user"),w=localStorage.getItem("quant_token"),l=!!(s&&w),_=Promise.all([Promise.resolve().then(()=>{E.value={light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}}),W(D(),3e3,"marketData"),W(N(),2e3,"merrillStages")]).then(()=>{W(T(),3e3,"merrillClock")});if(u(),m(),l&&H.value&&i(),!l||!H.value){await _;return}let h=!0;try{h=(await fetch("/api/users/me")).ok}catch{h=!1}if(!h){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),H.value=null;return}if(H.value){const L=H.value.theme||"",b=window.__quantModules&&window.__quantModules.themes;let r=Q.theme||"system",S=Q.theme_hue!=null&&Q.theme_hue!==""?Q.theme_hue:null;if(S==null&&b&&typeof b.migrateLegacyTheme=="function"){const c=b.migrateLegacyTheme();if(c)r=c.mode,S=c.hue;else if(L&&b.LEGACY_MAP&&b.LEGACY_MAP[L]){const O=b.LEGACY_MAP[L];r=O[0],S=O[1]}}S==null&&(S=45),y(r,S)}if(window.__quantModules&&window.__quantModules.preferences){const b=await window.__quantModules.preferences.loadPreferences();var k=localStorage.getItem("quant_last_page");!k&&b.default_view&&e.value.some(function(r){return r.key===b.default_view})&&(v.value=b.default_view),b.theme&&y(b.theme,b.theme_hue!=null&&b.theme_hue!==""?b.theme_hue:null),p&&(b.chart_period==="weekly"||b.chart_period==="monthly")&&(p.value=b.chart_period)}await Promise.all([W(j(),2e3,"userConfig"),W(o(),2e3,"dates")]),K().catch(()=>{}),Y().catch(()=>{});const Z=v.value==="strategies"?W(q(),2e3,"dashboard"):W(M(),2e3,"consensus");await Promise.all([Z,W(se(),2e3,"users"),W(z(),2e3,"aiHistory")]),F().catch(()=>{})}}}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:t,onMounted:y,onUnmounted:e,watch:v,nextTick:f}=Vue,A=a(!1),p=window.__quantModules&&window.__quantModules.i18n||{},d=p.SUPPORTED_LOCALES||["zh-CN","en"],x=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",o=a(d.indexOf(x)!==-1?x:"zh-CN");typeof p.bindLocale=="function"&&p.bindLocale(o);const M=typeof p.t=="function"?p.t:function(V){return String(V)};function q(V){d.indexOf(V)!==-1&&(o.value=V,typeof p.setLocale=="function"&&p.setLocale(V),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",V))}function R(V,de){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(V,de):V==null?"":String(V)}function E(V){(V.key==="Enter"||V.key===" "||V.key==="Spacebar")&&(V.preventDefault(),V.currentTarget&&typeof V.currentTarget.click=="function"&&V.currentTarget.click())}let D=null;function N(){document.activeElement&&document.activeElement!==document.body&&(D=document.activeElement)}function T(){if(D&&D.isConnected)try{D.focus()}catch{}D=null}const u=a(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{u.value=!0}),window.addEventListener("offline",()=>{u.value=!1})),window.addEventListener("beforeunload",V=>{if(A.value)return V.preventDefault(),V.returnValue="您有未保存的配置变更，确定要离开吗？",V.returnValue});function i(V="light"){typeof navigator<"u"&&navigator.vibrate&&(V==="light"?navigator.vibrate(10):V==="medium"?navigator.vibrate(20):V==="heavy"&&navigator.vibrate([10,30,10]))}const m=useMerrillClock(),{merrillData:H,merrillStagesConfig:j,showMerrillDetail:K,merrillDetailData:Y,merrillClockConfig:se,merrillClockLastUpdated:F,merrillReevalResult:z,merrillReevalLoading:U,stages:W,indicatorList:le,dimensionScoreList:Q,detailDimensionScoreList:s,confidenceColor:w,timelineStages:l,clockPosition:_,merrillProgressStyle:h,FULL_CYCLE_MONTHS:k,getStageAngle:Z,getCycleProgress:L,getCurrentStageMonths:b,getStageTotalMonths:r,isStageCompleted:S,getCharLabel:c,getAssetName:O,getRankColor:re,fetchMerrillStages:X,fetchMerrillClock:P,loadMerrillTimeline:G,showTimelineStage:oe,merrillTimeline:fe,timelineLoading:Me,showStageDetail:ee,saveMerrillClockConfig:ue,doMerrillReevaluate:me,startAutoRefresh:pe,stopAutoRefresh:he,merrillSnapshots:te,merrillSnapshotsTotal:xe,fetchMerrillSnapshots:Pe}=m,ne=a(localStorage.getItem("sidebar_collapsed")==="1");function ae(){ne.value=!ne.value,localStorage.setItem("sidebar_collapsed",ne.value?"1":"0")}const ye=a(null),Ne=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","about","notification"],guestSubPages:["config","about"]}],Ie=t(()=>{var Je,Kt,Zt;const V=((Je=ge.value)==null?void 0:Je.role)||"guest",de=((Kt=ge.value)==null?void 0:Kt.group)||V,we=((Zt=ye.value)==null?void 0:Zt[de])||null;return Ne.map(Vt=>{if(we&&we.visible_menus&&Vt.key in we.visible_menus&&!we.visible_menus[Vt.key])return null;const ya={...Vt,name:M("nav."+Vt.key)||Vt.name};return we!=null&&we.visible_sub_pages&&(ya.subPages=Vt.subPages.filter(os=>{const Td=Vt.key+"."+os;return we.visible_sub_pages[Td]!==!1})),Vt.key==="system"&&V==="guest"&&Vt.guestSubPages&&(ya.subPages=Vt.guestSubPages),ya}).filter(Boolean)});async function We(){try{if(!localStorage.getItem("quant_token"))return;const de=await fetch("/api/groups/my");if(de.ok){const we=await de.json();ye.value={[we.group_id]:we.group}}}catch(V){console.warn("loadGroupConfig:",V)}}const Ue=a("strategies"),wt=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},st=a(wt.navMode);function At(V){const de=window.__quantModules&&window.__quantModules.navModeCore;st.value=de?de.normalizeNavMode(V):V==="tree"||V==="toptab"?V:"toptab",de&&de.writePrefs({navMode:st.value})}const Se=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function _e(V,de=""){i("light"),Ue.value=V,et.value=de,localStorage.setItem("quant_last_subpage",de)}function Le(){const V=Ie.value;if(!V||!V.length)return;if(!V.some(function(Ve){return Ve.key===Ue.value})){const Ve=V[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",Ve.key),Ue.value=Ve.key,et.value=Ve.subPages&&Ve.subPages[0]||"";return}const we=V.find(function(Ve){return Ve.key===Ue.value});we&&we.subPages&&we.subPages.length&&!we.subPages.includes(et.value)&&(et.value=we.subPages[0])}const Ae=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],$e=a("multifactor"),Ze=a(null),tt=a(1e5),Dt=a(!1),Pt=a(null);let ft=null,Lt=null;async function Ut(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const de={initial_capital:tt.value||1e5};Ze.value&&Ze.value.length===2&&(de.start_date=Ze.value[0],de.end_date=Ze.value[1]),Dt.value=!0,Pt.value=null;try{const we=await fetch("/api/strategies/"+$e.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(de)});if(!we.ok){const Kt=await we.json().catch(()=>({}));throw new Error(Kt.detail||"回测失败")}const Ve=await we.json(),Je=Ve.result||{};if(!Je.success)throw new Error(Je.message||"回测失败");Ve.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),Pt.value={total_return_pct:((Je.total_return??0)*100).toFixed(2),annual_return_pct:((Je.annual_return??0)*100).toFixed(2),max_drawdown_pct:((Je.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(Je.sharpe_ratio??0).toFixed(2),win_rate:((Je.win_rate??0)*100).toFixed(2),out_sample:Je.outsample_total_return===void 0?"":((Je.outsample_total_return??0)*100).toFixed(2),overfit_warning:Je.overfit_warning||!1,message:Je.message||""},Qt(Je.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(we){ElementPlus.ElMessage.error(we.message||"回测失败")}finally{Dt.value=!1}}function Qt(V){const de=document.getElementById("backtestEquityChart");if(!de||!V||V.length===0)return;const we=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Ve=()=>{Lt=V,ft&&(ft.dispose(),ft=null),ft=echarts.init(de),ft.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const Je=V.map(Zt=>Zt.date||Zt[0]),Kt=V.map(Zt=>Zt.value??Zt[1]);ft.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:Je,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:Kt,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};we?we().then(Ve).catch(()=>{}):Ve()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){Lt&&Qt(Lt)}));const et=a("overview"),kt=t(()=>{const V=Ne.find(de=>de.key===Ue.value);return V?V.name:Ue.value}),Gt=a(0),ht=t(()=>{Gt.value;const V={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},de=et.value;return Ue.value==="shortterm"&&de==="market-review"?"qc-research-page":Ue.value==="ops"&&de==="execution"?"qc-strategies-page":V[Ue.value]||""}),Yt=a(!1),Et=a({}),Qe=a([]);a("");const It=a([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),xt=a("day"),$=a("all"),ge=a(null);v(Ie,function(){Le()}),v([Ue,et],function(){const V=document.querySelector(".main-content");V&&(V.scrollTop=0)}),function(){if(typeof localStorage>"u")return;const V=localStorage.getItem("quant_user"),de=localStorage.getItem("quant_token");if(V&&de)try{ge.value=JSON.parse(V)}catch{}}();const at=a(!1),St=a("kline"),it=a(null),Ot=a(!1),ta=a(localStorage.getItem("qc_detail_mode")||"split"),ia=a(window.innerWidth<=1024),ra=t(()=>ta.value==="split"&&!ia.value);function aa(V){ta.value=V;try{localStorage.setItem("qc_detail_mode",V)}catch{}}window.addEventListener("resize",()=>{ia.value=window.innerWidth<=1024});const $t=35,Wt=a(parseInt(localStorage.getItem("qc_split_width")||"",10)||null);function jt(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",Wt.value?Wt.value+"px":$t+"%")}jt();function Jt(V){const de=Math.max(1,Math.min(V,2e3));Wt.value=de,jt();try{localStorage.setItem("qc_split_width",String(de))}catch{}}function gt(V){if(Wt.value)return Wt.value;const de=V?V.getBoundingClientRect().width:0;return Math.max(200,Math.floor(de*$t/100))}let rt=null;function g(V,de){if(!de||ia.value)return;V.preventDefault();const we=de.getBoundingClientRect().width;rt={startX:V.clientX,startW:gt(de),minW:Math.max(200,Math.floor(we*$t/100)),maxW:Math.floor(we/2)},document.body.classList.add("qc-split-resizing")}function J(V){if(!rt)return;const de=V.clientX-rt.startX;let we=rt.startW+de;we=Math.max(rt.minW,Math.min(we,rt.maxW)),Wt.value=we,jt();try{localStorage.setItem("qc_split_width",String(we))}catch{}}function ce(){rt&&(rt=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",J),document.addEventListener("mouseup",ce));function Te(V){const de=V.target&&V.target.closest?V.target.closest("[data-split-resize]"):null;if(!de)return;const we=de.closest("[data-split-root]");g(V,we)}typeof document<"u"&&document.addEventListener("mousedown",Te,!0);const je={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于"},Fe=a({});function Ke(V,de){return je[de]||de}function ct(V){const de=Ne.find(Ve=>Ve.key===V);if(!de||!de.subPages||!de.subPages.length)return;if(!(Fe.value[V]||[]).length){const Ve=de.subPages[0];Fe.value=Object.assign({},Fe.value,{[V]:[{subPage:Ve,title:Ke(V,Ve)}]})}}function ot(V,de){const we=window.__quantModules&&window.__quantModules.tabsCore,Ve=Ke(V,de);if(we){const Je=we.openTab(Fe.value,V,de,Ve);Fe.value=Je.groups}else{const Je=Fe.value[V]||[];Je.some(Kt=>Kt.subPage===de)||(Fe.value=Object.assign({},Fe.value,{[V]:Je.concat([{subPage:de,title:Ve}])}))}_e(V,de)}function ut(V,de){const we=window.__quantModules&&window.__quantModules.tabsCore,Ve=et.value;let Je=null;if(we)Je=we.closeTab(Fe.value,V,de,Ve),Fe.value=Je.groups;else{const Vt=Fe.value[V]||[];Fe.value=Object.assign({},Fe.value,{[V]:Vt.filter(ya=>ya.subPage!==de)})}if(!(Fe.value[V]||[]).length){ct(V);const Vt=Ne.find(os=>os.key===V),ya=Vt&&Vt.subPages&&Vt.subPages[0];ya&&_e(V,ya);return}const Zt=Je?Je.nextActive:null;Zt&&_e(V,Zt)}function zt(V,de){if(!(Fe.value[V]||[]).some(Ve=>Ve.subPage===de)){ot(V,de);return}_e(V,de)}v([Ue,et],([V,de])=>{ct(V);const we=Fe.value[V]||[];de&&!we.some(Ve=>Ve.subPage===de)&&(Fe.value=Object.assign({},Fe.value,{[V]:we.concat([{subPage:de,title:Ke(V,de)}])}))},{immediate:!0});const I=function(V){if(!(V.ctrlKey&&V.key==="Tab"))return;const de=Ue.value,we=Fe.value[de]||[];if(we.length<=1)return;V.preventDefault();const Ve=et.value,Je=Math.max(0,we.findIndex(Vt=>Vt.subPage===Ve)),Kt=V.shiftKey?(Je-1+we.length)%we.length:(Je+1)%we.length,Zt=we[Kt];Zt&&zt(de,Zt.subPage)};window.addEventListener("keydown",I);const ke=a({light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}),ze=a("light"),De=[45,220,0,140,270,320,-1],Ge={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色","-1":"中性"},Re=a(45),Xe=a(function(){const V=window.__quantModules&&window.__quantModules.preferences;return V&&V.getPreference&&V.getPreference("theme")||"system"}());(function(){const V=window.__quantModules&&window.__quantModules.preferences,de=V&&V.getPreference&&V.getPreference("theme_hue");de!=null&&de!==""&&(Re.value=parseInt(de,10))})();const yt=a("comfortable");(function(){const V=window.__quantModules&&window.__quantModules.preferences;V&&V.applyDensity&&(yt.value=V.applyDensity()||"comfortable")})();function Mt(V){return V<0?"hsl(0, 0%, 46%)":"hsl("+V+", 75%, 42%)"}function bt(V){return Ge[V]||"自定义 "+V}const Xt=a(""),ba=a([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),ca=a({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),Pa=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],ua=a({day:[],week:[],month:[],year:[]}),Ra=a({});function va(V,de){let we=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(we=window.__quantModules.themes.applyTheme(V,de)),ze.value=we&&we.mode?we.mode:V==="dark"||V==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function qa(V,de){const we=window.__quantModules&&window.__quantModules.preferences;if(!(!we||!we.setPreferences))try{we.setPreferences({theme:V}),de!=null&&de!==""&&we.setPreferences({theme_hue:parseInt(de,10)})}catch{}}function Ht(V,de){va(V,de),de!=null&&de!==""&&(Re.value=parseInt(de,10));const we=window.__quantModules&&window.__quantModules.themes;let Ve=V;we&&we.LEGACY_MAP&&we.LEGACY_MAP[V]&&(Ve=we.LEGACY_MAP[V][0]),Ve==="light"||Ve==="dark"||Ve==="system"?Xe.value=Ve:Xe.value=ze.value,Ve==="system"&&(Ve=ze.value),qa(Ve,de),ge.value&&(fetch(`/api/users/${ge.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:Ve})}),ge.value.theme=Ve,localStorage.setItem("quant_user",JSON.stringify(ge.value)))}function wa(V){const de=window.__quantModules&&window.__quantModules.preferences,we=de&&de.getPreference?de.getPreference("theme_hue"):null;Ht(V,we)}function Ea(V){const de=window.__quantModules&&window.__quantModules.preferences;!de||!de.applyDensity||(yt.value=de.applyDensity(V)||"comfortable",de.setPreference&&de.setPreference("info_density",yt.value))}function za(V){Re.value=parseInt(V,10);const de=window.__quantModules&&window.__quantModules.preferences,we=de&&de.getPreference&&de.getPreference("theme")||"light";Ht(we,Re.value)}const ka=a(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function C(V){ka.value=!!V;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",V?"show":"hide")}catch{}}const n=t(()=>{const V=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return ka.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...V]:V}),B=a("daily");(function(){try{const de=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(de==="weekly"||de==="monthly")&&(B.value=de)}catch{}})();const ie=a(!1),Ce=a(""),Ee=a(!1),pt=a(!1),Ye=a({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),Ct=["MA5","MA10","MA20","MA60"],sa=a(!1);let Rt=0;async function na(V){if(!it.value)return!1;const de=++Rt;ie.value=!0,B.value=V;try{const Ve=await(await fetch(`/api/market/kline/${it.value.stock}?period=${V}&limit=60`)).json();if(!Ve.success||!Ve.data)throw new Error(Ve.message||"数据获取失败");return Ce.value=Ve.degraded_from?"分钟数据("+Ve.degraded_from+")暂不可用, 已降级展示日线":"",$s(it.value.stock),de!==Rt?!1:(St.value!=="kline"||(pt.value=!0,await f(),window.__quantModules.charts.renderKlineTo("stockKlineChart",Ve.data,V,!1,{isMobile:ms.value,onLegend:Je=>{Object.keys(Ye.value).forEach(Kt=>{Kt in Je&&(Ye.value[Kt]=!!Je[Kt])})}}),ha()),!0)}catch(we){return console.error("[kline] 加载失败:",it.value&&it.value.stock,V,we),St.value==="kline"&&(pt.value=!1,Ce.value="",ElementPlus.ElMessage.error("K线加载失败: "+(we&&we.message?we.message:"数据源不可达，请重试"))),!1}finally{ie.value=!1}}async function la(V){if(Ua.value){Ee.value=!0,B.value=V;try{const we=await(await fetch(`/api/market/kline/${Ua.value.code}?period=${V}&limit=60`)).json();if(!we.success||!we.data)throw new Error(we.message||"数据获取失败");sa.value=!0,await f(),window.__quantModules.charts.renderKlineTo("indexKlineChart",we.data,V,!0,{isMobile:ms.value,onLegend:Ve=>{Object.keys(Ye.value).forEach(Je=>{Je in Ve&&(Ye.value[Je]=!!Ve[Je])})}}),ha()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{Ee.value=!1}}}async function qt(V){if(!pt.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await na(V)}async function nt(V){if(!sa.value){ElementPlus.ElMessage.info("请先加载K线");return}await la(V)}function Bt(V){const de=(at.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(Wa.value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);de&&de.dispatchAction({type:"legendToggleSelect",name:V})}function ha(){["K线","MA5","MA10","MA20","MA60"].forEach(V=>{Ye.value[V]=!0})}async function _t(){const V=await fetch("/api/system/metrics");if(!V.ok)throw new Error("metrics "+V.status);const de=await V.json(),we=Array.isArray(de)?de:de&&de.data_sources||[];Qe.value=we}const Ia=()=>ls,dn=()=>Es,un=()=>Ko,vn=()=>Aa,mn=()=>ts,pn=window.__quantAppLogic.data.create({currentView:xt,statusFilter:$,dashboardData:Et,loadHealthMetrics:_t,getLoadDashboardData:Ia,getLastRefreshTime:dn,getFetchPoolSignals:un}),{loading:fn,loadingView:gn,viewCache:hn,dates:Na,selectedDate:oa,lastLoadTime:yn,consensus:_a,viewNote:bn,loadDates:cs,refreshCalendarData:ds,exportCSV:us,loadConsensusData:Ma,loadDashboardCached:Oa}=pn,wn=window.__quantAppLogic.market.create({currentKlinePeriod:B,loadIndexKline:la,rememberDialogTrigger:N,menus:Ie,currentPage:Ue,currentSubPage:et,stockDetail:it,selectedDate:oa}),{marketData:kn,indexDetailVisible:Wa,indexDetail:Ua,indexAiResult:_n,indexAiLoading:xn,fetchMarketData:Ga,showIndexDetail:Sn,loadCachedIndexEval:Cn,doIndexAiEvaluate:qn,disposeStockKline:vs,isMobile:ms,zoomKlineRange:En,scoreAnimating:Mn,scoreDelta:Tn,scorePulse:Dn,refreshStockScore:Ya,animateScoreEntrance:Ja,onTouchStart:Pn,onTouchEnd:Rn}=wn,zn=window.__quantAppLogic.ops.create({navigateTo:_e,currentPage:Ue,currentSubPage:et}),{feishuConfig:ps,feishuTestStatus:An,feishuTestMessage:Ln,testFeishuWebhook:In,saveFeishuConfig:Nn,aiFabHidden:On,openAiFab:fs,strategyRecommendations:jn,aiUsage:Vn,loadStrategyRecommendations:gs,loadAiUsage:Qa,sysMonitor:Fn,analyticsRank:Hn,analyticsDays:Bn,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:Kn,loadHealthDetail:bs,reviewTriggering:Wn,triggerMarketReview:Un,factCheck:Gn,factCheckRunning:Yn,loadFactCheck:ws,triggerFactCheck:Jn,backups:Qn,backupCreating:$n,loadBackups:ks,createBackup:Xn,restoreBackup:Zn,reportExporting:ei,reportExportMsg:ti,exportReport:ai,tourVisible:si,tourStep:ni,tourSteps:ii,maybeShowTour:li,skipTour:oi,finishTour:ri,feedbackText:ci,feedbackSubmitting:di,submitFeedback:ui}=zn,vi=window.__quantAppLogic.nav.create({currentView:xt,selectedDate:oa,dates:Na,loadConsensusData:Ma,hapticFeedback:i}),{viewUnit:mi,datePickerType:pi,dateFormat:fi,canNavPrev:gi,canNavNext:hi,switchView:_s,navigateDate:xs,disabledDate:yi,onDateChange:bi}=vi,wi=window.__quantAppLogic.keys.create({menus:Ie,subPageNames:je,navigateTo:_e,currentPage:Ue,currentView:xt,navigateDate:xs,switchView:_s,getLoadDashboardData:Ia,refreshCalendarData:ds,getLoadAiHistory:vn,exportCSV:us,getShowBatchEvaluate:mn,openAiFab:fs,toggleSidebar:ae,showStockDetail:Cs}),{searchQuery:ki,searchStocks:_i,onSearchSelect:xi,shortcutHelpVisible:Si,commandPaletteVisible:Ci,handleGlobalKeydown:Ss}=wi;let ja=0;async function Cs(V){const de=++ja;N(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(V,""),Xa.value=null,B.value="daily",pt.value=!1,St.value="kline",it.value=null,Ot.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),at.value=!0,f(()=>Ja());try{const we=await fetch(`/api/calendar/stock/${V}?date=${oa.value}`);if(de!==ja)return;it.value=await we.json(),it.value&&it.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(V,it.value.name)}catch{if(de!==ja)return;ElementPlus.ElMessage.error("加载失败"),it.value={stock:V,name:"",total_days:0}}finally{de===ja&&(Ot.value=!1)}setTimeout(async()=>{await na("daily"),Ya()},500),as(V)}const qi={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},Ei={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function Mi(V){return qi[V]||"var(--text-tertiary)"}function Ti(V){return Ei[V]||"var(--bg-hover)"}const Di=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:pt,stockDetailVisible:at,stockDetailTab:St,stockDetail:it,disposeStockKline:vs}):{},{chatSessions:Pi,chatHistoryView:Ri,selectedChatIds:zi,expandedChatDates:Ai,expandedChatMonths:Li,expandedChatStocks:Ii,chatHistoryLoading:Ni,chatHistoryError:Oi,allChatSessionsFlat:ji,chatGroupedByDate:Vi,chatGroupedByMonth:Fi,chatGroupedByStock:Hi,toggleSelectChat:Bi,toggleSelectChatDate:Ki,toggleSelectChatMonth:Wi,toggleSelectChatStock:Ui,toggleChatDateExpand:Gi,toggleChatMonthExpand:Yi,toggleChatStockExpand:Ji,selectAllChatSessions:Qi,deleteSelectedChatSessions:$i,viewChatSession:Xi,loadChatHistory:qs,deleteChatSession:Zi,renderMarkdown:el,stockChatInput:tl,stockChatMessages:al,stockChatLoading:sl,stockChatError:nl,askStockSend:il,askStockQuick:ll}=Di,ol=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:ge,applyTheme:va,allMenuDefs:Ne,loadGroupConfig:We}):{},{userList:rl,userSearch:cl,groupFilter:dl,userPageTab:ul,expandedGroups:vl,addMemberGroupMap:ml,filteredUsers:pl,toggleGroupExpand:fl,removeMemberFromGroupInline:gl,addMemberToGroupInline:hl,changeUserGroup:yl,showAddUser:bl,editingUser:wl,userForm:kl,savingUser:_l,editingGroup:xl,menuConfigDialog:Sl,memberDialog:Cl,groupEditForm:ql,subPageCache:El,showAddGroup:Ml,addGroupForm:Tl,savingGroup:Dl,groupMembers:Pl,addMemberUsername:Rl,selectedMemberGroup:zl,subPageSectionExpanded:Al,toggleSubPageSection:Ll,getGroupMemberCount:Il,getMenuEnabledCount:Nl,groupCount:Ol,openMemberManager:jl,loadGroupMembers:Vl,addMemberToGroup:Fl,removeMemberFromGroup:Hl,availableUsersForGroup:Bl,onParentToggle:Kl,openMenuConfig:Wl,saveMenuConfig:Ul,deleteGroupConfig:Gl,createGroup:Yl,allGroups:Jl,getGroupName:Ql,loadAllGroups:$a,loadUsers:Va,editUser:$l,saveUser:Xl,deleteUser:Zl,toggleUserEnabled:eo,resetUserPassword:to}=ol,ao=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:_a,currentPage:Ue,currentSubPage:et,dashboardData:Et,searchKeyword:Xt,statusFilter:$,strategyFilter:ca,strategyFilterCounts:ua}):{},{applyStrategyFilter:zf,statusCounts:so,stockPool:no,strategyDistribution:io,strategyPreviewCount:lo,saveStrategyFilter:oo,filteredConsensusRank:ro,currentPoolSize:co,filteredStrategyCounts:uo,poolChangeBadge:vo,timeBarPercent:mo,lastRefreshTime:Es,timeSinceRefresh:po,navigateToStrategyFilter:fo}=ao,go=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:A,consensus:_a}):{},{aiResult:Xa,lastEvalTime:ho,evalHistoryComparison:yo,checklistItems:bo,aiHistory:Ms,selectedHistoryIds:Ts,expandedDates:Ds,expandedMonths:wo,expandedStocks:Ps,poolSignals:ko,toggleMonthExpand:_o,aiHistoryView:xo,selectedWatchlistCodes:Rs,showAutoEvaluateSettings:zs,savingConfig:As,autoEvaluateScope:Ls,aiVendors:So,aiCatalog:Co,aiModelsError:qo,testingAllModels:Eo,savingAiModels:Mo,loadAiVendors:Fa,loadAiCatalog:Is,saveAiVendors:Ns,saveAiModels:To,testVendorModel:Do,testAllVendorModels:Po,fetchVendorModels:Ro,addVendorFromCatalog:zo,addCustomVendor:Ao,addVendorModel:Lo,removeVendorModel:Io,removeVendor:No,toggleVendorKeyReveal:Oo,toggleVendorEdit:jo,autoEvaluateConfig:Za,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,showBatchEvaluate:ts,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,aiConfig:Js,selectedPreset:Vo,providerInfo:Fo,aiPresets:Af,applyPreset:Ho,onProviderChange:Bo,fetchPoolSignals:Ko,cancelPoolSignals:Qs,loadLastEvaluation:as}=go,Wo=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:ge,selectedDate:oa,stockDetail:it,stockDetailTab:St,stockDetailVisible:at,stockDetailLoading:Ot,stockKlineLoaded:pt,viewCache:hn,animateScoreEntrance:Ja,loadStockKline:na,refreshStockScore:Ya,disposeStockKline:vs,aiHistory:Ms,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,aiResult:Xa,loadLastEvaluation:as,autoEvaluateConfig:Za,autoEvaluateScope:Ls,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,expandedDates:Ds,expandedStocks:Ps,savingConfig:As,selectedHistoryIds:Ts,selectedWatchlistCodes:Rs,showAutoEvaluateSettings:zs,showBatchEvaluate:ts}):{},{quickEvalStock:Uo,evalStrategy:Go,watchlistSort:Yo,watchlist:Jo,watchlistCodes:Qo,sortedWatchlist:$o,getWatchlistScore:Xo,getLatestScore:Lf,addSearchResult:Zo,evaluatedCodes:er,klineLoadedCodes:tr,markKlineLoaded:$s,watchlistSearch:ar,watchlistResults:sr,watchlistSearching:nr,dataRefreshConfig:ir,dataRefreshReloading:lr,dataRefreshSaving:or,aiHistoryLoading:rr,aiHistoryError:cr,aiHistoryTotal:dr,aiHistoryLoadingMore:ur,hasMoreAiHistory:vr,loadMoreAiHistory:mr,watchlistLoading:pr,doAiEvaluate:fr,loadAiHistory:Aa,deleteSingleHistory:gr,toggleSelectHistory:hr,clearSelection:yr,clearWatchlistSelection:br,batchReevaluateHistory:wr,batchAddToWatchlist:kr,batchRemoveWatchlist:_r,toggleSelectWatchlist:xr,selectAllHistory:Sr,selectAllWatchlist:Cr,deleteSelectedHistory:qr,loadAutoEvaluateConfig:Xs,saveAutoEvaluateConfig:Er,loadWatchlist:Zs,addToWatchlist:Mr,removeFromWatchlist:Tr,clearWatchlist:Dr,toggleWatchlist:Pr,showStockKline:Rr,preloadingKline:zr,preloadWatchlistKline:en,watchlistEvaluate:Ar,batchEvaluateWatchlist:Lr,batchEvaluateSelected:Ir,searchStockForWatchlist:Nr,loadDataRefreshConfig:tn,saveDataRefreshConfig:Or,triggerDataReload:jr,triggerDataPull:Vr,dataPullRunning:Fr,groupedByDate:Hr,aiHistoryByStock:Br,groupedByMonth:Kr,aiHistoryStockCount:Wr,scoreDistribution:Ur,quickEvaluate:Gr,toggleDateExpand:Yr,toggleSelectDate:Jr,toggleSelectMonth:Qr,toggleStockExpand:$r,toggleSelectStock:Xr,registerTrendChart:Zr,viewAiResult:ec,doBatchEvaluate:tc,realtimeQuotes:ac,realtimeDegraded:sc,realtimeWsState:nc,connectRealtimeQuotes:ic,disconnectRealtimeQuotes:lc,quoteWarningFor:oc,realtimeQuoteColor:rc,realtimePriceText:cc,realtimePctText:dc,realtimeRatioText:uc,REALTIME_DEGRADED_TEXT:vc,REALTIME_FALLBACK_TEXT:mc}=Wo,pc=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:Ae}):{},{btStrategyOptions:fc,btSelectedStrategies:gc,toggleBtStrategy:hc,btDateRange:yc,btCapital:bc,btCommissionRate:wc,btIncludeBenchmark:kc,btRunning:_c,btResult:xc,btError:Sc,btMetrics:Cc,btAnnualReturns:qc,btTrades:Ec,btStrategyMetricsRows:Mc,btDrawdownRegion:Tc,runBacktestWorkbench:Dc,exportBacktestCSV:Pc,registerBacktestNavChart:Rc,btFmtNum:zc}=pc,Ac=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:A,aiConfig:Js,aiLoading:es,feishuConfig:ps,currentTheme:ze,changeTheme:Ht,autoEvaluateConfig:Za,currentUser:ge,strategyFilter:ca,applyTheme:va,dashboardData:Et,lastRefreshTime:Es,saveAiModels:To}):{},{configSaving:Lc,globalConfigDirty:Ic,lastSavedTime:Nc,feishuConfigOriginal:If,aiConfigOriginal:Nf,tushareConfigOriginal:Of,tushareConfig:Oc,tushareStatus:jc,datasourceConfig:Vc,datasourceStatus:Fc,syncingData:Hc,stockCount:Bc,tradeDateCount:Kc,aiStatus:Wc,appVersion:an,showImportDialog:Uc,rateLimitConfig:Gc,rateLimitDirty:Yc,rateLimitSaving:Jc,loadRateLimit:ss,saveRateLimit:Qc,saveAiConfig:$c,testAiApi:Xc,exportConfig:Zc,importConfig:ed,saveAllConfig:td,resetAllConfig:ad,testTushareConnection:sd,checkTushareConnection:Ha,syncStockData:nd,loadTushareConfig:sn,loadDatasourceConfig:nn,saveDatasourceConfig:id,testDatasource:ld,toggleDatasourceKeyReveal:od,toggleDatasourceEdit:rd,loadFeishuConfig:ns,loadAiConfig:Ba,loadUserConfig:ln,loadSystemStatus:is,loadDashboardData:ls}=Ac,cd=window.__quantAppLogic.auth.create({currentUser:ge,loadUserConfig:ln,loadDates:cs,loadDashboardData:ls,loadDashboardCached:Oa,loadHealthMetrics:_t,loadConsensusData:Ma,applyTheme:va,maybeShowTour:li,loadAiVendors:Fa,loadGroupConfig:We,groupsConfig:ye}),{loginForm:dd,logining:ud,guestLogining:vd,showChangePassword:md,changePasswordForm:pd,changingPassword:fd,showSetupWizard:gd,setupForm:hd,setupStep:yd,checkSetupWizard:bd,completeSetupWizard:wd,resetSetupWizard:kd,handleLogin:_d,handleGuestLogin:xd,handleLogout:Sd,doChangePassword:Cd}=cd;window.__quantAppLogic.watch.register({strategyFilter:ca,currentView:xt,statusFilter:$,currentPage:Ue,currentSubPage:et,menus:Ie,currentUser:ge,strategyFilterCounts:ua,lazyTick:Gt,dates:Na,selectedDate:oa,consensus:_a,loadConsensusData:Ma,fetchMerrillClock:P,fetchMarketData:Ga,loadWatchlist:Zs,loadAiHistory:Aa,preloadWatchlistKline:en,loadChatHistory:qs,loadSystemStatus:is,checkTushareConnection:Ha,loadSysMonitor:hs,loadAnalytics:ys,loadHealthDetail:bs,loadHealthMetrics:_t,loadAiUsage:Qa,loadFactCheck:ws,loadAutoEvaluateConfig:Xs,loadDatasourceConfig:nn,loadFeishuConfig:ns,loadAiConfig:Ba,loadAiVendors:Fa,loadRateLimit:ss,loadDataRefreshConfig:tn,loadBackups:ks,loadAllGroups:$a,loadUsers:Va,stockDetailTab:St,stockDetailVisible:at,stockKlineLoaded:pt,loadStockKline:na,currentKlinePeriod:B,showMerrillDetail:K,indexDetailVisible:Wa,restoreDialogFocus:T});const qd=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:Ss,applyTheme:va,menus:Ie,currentPage:Ue,currentSubPage:et,currentView:xt,currentKlinePeriod:B,selectedDate:oa,dates:Na,loadDates:cs,loadConsensusData:Ma,loadDashboardCached:Oa,appVersion:an,themes:ke,fetchMarketData:Ga,fetchMerrillStages:X,fetchMerrillClock:P,loadMerrillTimeline:G,showTimelineStage:oe,merrillTimeline:fe,timelineLoading:Me,loadAiConfig:Ba,loadAiVendors:Fa,loadAiCatalog:Is,currentUser:ge,loadUserConfig:ln,loadAutoEvaluateConfig:Xs,loadGroupConfig:We,loadUsers:Va,loadAllGroups:$a,loadAiHistory:Aa}),{runOnMounted:Ed}=qd;window.__quantGoPage=async(V,de)=>{try{const we=window.__lazyLoaders&&window.__lazyLoaders[V];we&&await we()}catch(we){console.warn("[lazy] 页面组件加载失败",V,we)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(we=>{we&&we.name&&!we.__quantRegistered&&(window.__quantApp.component(we.name,we),we.__quantRegistered=!0)}),Gt&&Gt.value++,Ue.value=V,de&&(et.value=de)};let Ta;v(Ue,async V=>{var de;i("light");try{const we=Ne.find(function(Ve){return Ve.key===V});document.title=(we?we.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",V),V!=="calendar"&&typeof Qs=="function"&&Qs();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:V})}).catch(()=>{})}catch(we){console.warn("pageView track failed:",we)}if(Ta&&(clearInterval(Ta),Ta=null),V==="strategies")await Oa(),Ta=setInterval(()=>{Oa().catch(()=>{})},5*60*1e3);else if(V==="calendar")oa.value&&await Ma();else if(V==="ai")gs(),Qa(),await Aa();else if(V==="system"){if(!oa.value){const Ve=await(await fetch("/api/dashboard")).json(),Je=Ve.data||Ve;Je.latest_date&&(oa.value=Je.latest_date)}if(oa.value){const we=["day","week","month","year"];for(const Ve of we)try{const Kt=await(await fetch(`/api/view/${Ve}/${oa.value}?status=all`)).json();ua.value[Ve]=Kt.stocks||[]}catch(Je){console.warn("loadConsensusData view load failed:",Je)}(!_a.value||_a.value.length===0)&&(_a.value=ua.value.day||[])}((de=ge.value)==null?void 0:de.role)==="admin"&&(await Va(),await ns(),await sn(),await is(),await Ba(),await ss(),Ha(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(Ha,36e5)))}}),y(async()=>{await Ed()}),pe(),G(),e(()=>{Ta&&clearInterval(Ta),window.removeEventListener("keydown",Ss),window.removeEventListener("keydown",I)});function Md(V,de=2){return V==null||V===""||isNaN(Number(V))?"--":Number(V).toFixed(de)}return{currentPage:Ue,pageComp:ht,currentSubPage:et,sidebarCollapsed:ne,menus:Ie,navMode:st,setNavMode:At,tabGroups:Fe,openTab:ot,closeTab:ut,activateTab:zt,fmtNum:Md,sanitizeHtml:R,keyClick:E,isOnline:u,currentUser:ge,allMenuDefs:Ne,t:M,locale:o,changeLanguage:q,currentPageName:kt,subPageNames:je,searchQuery:ki,searchStocks:_i,onSearchSelect:xi,selectedDate:oa,onDateChange:bi,disabledDate:yi,refreshCalendarData:ds,exportCSV:us,viewNote:bn,loading:fn,lastLoadTime:yn,resetSetupWizard:kd,showChangePassword:md,themes:ke,currentTheme:ze,changeTheme:Ht,changeThemeMode:wa,changeThemeHue:za,handleLogout:Sd,themeHues:De,themeHueNames:Ge,themeHue:Re,themeMode:Xe,hueColor:Mt,hueName:bt,density:yt,changeDensity:Ea,marketData:kn,merrillData:H,merrillTimeline:fe,timelineLoading:Me,merrillStagesConfig:j,fetchMerrillStages:X,merrillSnapshots:te,merrillSnapshotsTotal:xe,healthMetrics:Qe,feishuConfig:ps,feishuTestStatus:An,feishuTestMessage:Ln,shortcutHelpVisible:Si,shortcutHelpItems:Se,commandPaletteVisible:Ci,tourVisible:si,tourStep:ni,tourSteps:ii,skipTour:oi,finishTour:ri,backups:Qn,backupCreating:$n,loadBackups:ks,createBackup:Xn,restoreBackup:Zn,reportExporting:ei,reportExportMsg:ti,exportReport:ai,sysMonitor:Fn,analyticsRank:Hn,analyticsDays:Bn,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:Kn,loadHealthDetail:bs,reviewTriggering:Wn,triggerMarketReview:Un,factCheck:Gn,factCheckRunning:Yn,loadFactCheck:ws,triggerFactCheck:Jn,strategyRecommendations:jn,aiUsage:Vn,loadStrategyRecommendations:gs,loadAiUsage:Qa,aiFabHidden:On,openAiFab:fs,feedbackText:ci,feedbackSubmitting:di,submitFeedback:ui,backtestStrategies:Ae,backtestStrategy:$e,backtestRange:Ze,backtestCapital:tt,backtestRunning:Dt,backtestResult:Pt,runBacktest:Ut,btStrategyOptions:fc,btSelectedStrategies:gc,toggleBtStrategy:hc,btDateRange:yc,btCapital:bc,btCommissionRate:wc,btIncludeBenchmark:kc,btRunning:_c,btResult:xc,btError:Sc,btMetrics:Cc,btAnnualReturns:qc,btTrades:Ec,btStrategyMetricsRows:Mc,btDrawdownRegion:Tc,runBacktestWorkbench:Dc,exportBacktestCSV:Pc,registerBacktestNavChart:Rc,btFmtNum:zc,fetchMarketData:Ga,fetchMerrillClock:P,testFeishuWebhook:In,saveFeishuConfig:Nn,merrillClockConfig:se,merrillClockLastUpdated:F,merrillReevalResult:z,merrillReevalLoading:U,saveMerrillClockConfig:ue,doMerrillReevaluate:me,dataRefreshConfig:ir,dataRefreshReloading:lr,dataRefreshSaving:or,loadDataRefreshConfig:tn,saveDataRefreshConfig:Or,triggerDataReload:jr,triggerDataPull:Vr,dataPullRunning:Fr,indexDetailVisible:Wa,indexDetail:Ua,indexAiResult:_n,indexAiLoading:xn,loadCachedIndexEval:Cn,showIndexDetail:Sn,doIndexAiEvaluate:qn,klinePeriods:n,currentKlinePeriod:B,klineLoading:ie,indexKlineLoading:Ee,stockKlineLoaded:pt,indexKlineLoaded:sa,klineDegradeNote:Ce,klineShowMinutes:ka,toggleKlineShowMinutes:C,loadStockKline:na,switchKlinePeriod:qt,loadIndexKline:la,switchIndexKlinePeriod:nt,zoomKlineRange:En,MA_LINES:Ct,klineMaVisible:Ye,toggleKlineMa:Bt,scoreAnimating:Mn,scoreDelta:Tn,scorePulse:Dn,refreshStockScore:Ya,animateScoreEntrance:Ja,showMerrillDetail:K,merrillDetailData:Y,showStageDetail:ee,getCharLabel:c,getAssetName:O,getRankColor:re,levelColor:Mi,levelBg:Ti,timelineStages:l,getStageAngle:Z,getCycleProgress:L,getCurrentStageMonths:b,getStageTotalMonths:r,isStageCompleted:S,stages:W,indicatorList:le,dimensionScoreList:Q,confidenceColor:w,views:It,currentView:xt,statusFilter:$,loginForm:dd,logining:ud,guestLogining:vd,dashboardData:Et,loadingView:gn,dates:Na,consensus:_a,searchKeyword:Xt,stockDetailVisible:at,stockDetailTab:St,stockDetail:it,stockDetailLoading:Ot,detailDisplayMode:ta,setDetailDisplayMode:aa,isNarrow:ia,detailSplitEnabled:ra,splitWidth:Wt,setSplitWidth:Jt,SPLIT_DEFAULT_PCT:$t,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,showBatchEvaluate:ts,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,aiConfig:Js,userList:rl,showAddUser:bl,editingUser:wl,userForm:kl,savingUser:_l,userSearch:cl,filteredUsers:pl,groupFilter:dl,userPageTab:ul,expandedGroups:vl,addMemberGroupMap:ml,toggleGroupExpand:fl,removeMemberFromGroupInline:gl,addMemberToGroupInline:hl,changeUserGroup:yl,statusCounts:so,stockPool:no,poolSignals:ko,aiResult:Xa,aiHistory:Ms,groupedByDate:Hr,groupedByMonth:Kr,expandedDates:Ds,expandedMonths:wo,aiHistoryByStock:Br,aiHistoryStockCount:Wr,expandedStocks:Ps,aiHistoryView:xo,aiHistoryLoading:rr,aiHistoryError:cr,aiHistoryTotal:dr,aiHistoryLoadingMore:ur,hasMoreAiHistory:vr,loadMoreAiHistory:mr,watchlistLoading:pr,scoreDistribution:Ur,quickEvalStock:Uo,evalStrategy:Go,checklistItems:bo,evalHistoryComparison:yo,quickEvaluate:Gr,selectedHistoryIds:Ts,showAutoEvaluateSettings:zs,savingConfig:As,autoEvaluateConfig:Za,autoEvaluateScope:Ls,strategyList:ba,toggleDateExpand:Yr,toggleMonthExpand:_o,toggleSelectDate:Jr,toggleSelectMonth:Qr,toggleSelectStock:Xr,toggleStockExpand:$r,registerTrendChart:Zr,selectedWatchlistCodes:Rs,clearWatchlistSelection:br,toggleSelectWatchlist:xr,selectAllHistory:Sr,selectAllWatchlist:Cr,batchRemoveWatchlist:_r,batchEvaluateSelected:Ir,batchReevaluateHistory:wr,batchAddToWatchlist:kr,viewUnit:mi,datePickerType:pi,dateFormat:fi,canNavPrev:gi,canNavNext:hi,handleLogin:_d,handleGuestLogin:xd,switchView:_s,navigateDate:xs,navigateTo:_e,loadDashboardData:ls,loadConsensusData:Ma,showStockDetail:Cs,doAiEvaluate:fr,doBatchEvaluate:tc,loadAiHistory:Aa,loadLastEvaluation:as,lastEvalTime:ho,viewAiResult:ec,saveAiConfig:$c,testAiApi:Xc,exportConfig:Zc,importConfig:ed,configSaving:Lc,configChanged:A,watchlist:Jo,watchlistCodes:Qo,watchlistSearch:ar,watchlistResults:sr,watchlistSearching:nr,watchlistSort:Yo,sortedWatchlist:$o,getWatchlistScore:Xo,addSearchResult:Zo,evaluatedCodes:er,klineLoadedCodes:tr,markKlineLoaded:$s,loadWatchlist:Zs,addToWatchlist:Mr,removeFromWatchlist:Tr,clearWatchlist:Dr,searchStockForWatchlist:Nr,toggleWatchlist:Pr,batchEvaluateWatchlist:Lr,watchlistEvaluate:Ar,showStockKline:Rr,preloadWatchlistKline:en,preloadingKline:zr,realtimeQuotes:ac,realtimeDegraded:sc,realtimeWsState:nc,connectRealtimeQuotes:ic,disconnectRealtimeQuotes:lc,quoteWarningFor:oc,realtimeQuoteColor:rc,realtimePriceText:cc,realtimePctText:dc,realtimeRatioText:uc,REALTIME_DEGRADED_TEXT:vc,REALTIME_FALLBACK_TEXT:mc,toggleSelectHistory:hr,clearSelection:yr,deleteSingleHistory:gr,deleteSelectedHistory:qr,saveAutoEvaluateConfig:Er,editUser:$l,saveUser:Xl,deleteUser:Zl,loadUsers:Va,allGroups:Jl,loadAllGroups:$a,getGroupName:Ql,toggleUserEnabled:eo,resetUserPassword:to,selectedPreset:Vo,applyPreset:Ho,onProviderChange:Bo,providerInfo:Fo,globalConfigDirty:Ic,lastSavedTime:Nc,tushareConfig:Oc,tushareStatus:jc,syncingData:Hc,stockCount:Bc,tradeDateCount:Kc,aiStatus:Wc,appVersion:an,showImportDialog:Uc,rateLimitConfig:Gc,rateLimitDirty:Yc,rateLimitSaving:Jc,loadRateLimit:ss,saveRateLimit:Qc,saveAllConfig:td,resetAllConfig:ad,testTushareConnection:sd,syncStockData:nd,loadTushareConfig:sn,loadFeishuConfig:ns,loadSystemStatus:is,loadAiConfig:Ba,aiVendors:So,aiCatalog:Co,aiModelsError:qo,testingAllModels:Eo,savingAiModels:Mo,loadAiVendors:Fa,loadAiCatalog:Is,saveAiVendors:Ns,saveAiModels:Ns,testVendorModel:Do,testAllVendorModels:Po,fetchVendorModels:Ro,addVendorFromCatalog:zo,addCustomVendor:Ao,addVendorModel:Lo,removeVendorModel:Io,removeVendor:No,toggleVendorKeyReveal:Oo,toggleVendorEdit:jo,checkTushareConnection:Ha,datasourceConfig:Vc,datasourceStatus:Fc,loadDatasourceConfig:nn,saveDatasourceConfig:id,testDatasource:ld,toggleDatasourceKeyReveal:od,toggleDatasourceEdit:rd,strategyFilter:ca,strategyFilterOptions:Pa,strategyFilterCounts:ua,strategyPreviewCount:lo,saveStrategyFilter:oo,filteredConsensusRank:ro,currentPoolSize:co,filteredStrategyCounts:uo,strategyDistribution:io,expandedStrategies:Ra,poolChangeBadge:vo,timeBarPercent:mo,timeSinceRefresh:po,navigateToStrategyFilter:fo,showUserMenu:Yt,toggleSidebar:ae,groupsConfig:ye,loadGroupConfig:We,editingGroup:xl,groupEditForm:ql,showAddGroup:Ml,addGroupForm:Tl,savingGroup:Dl,menuConfigDialog:Sl,memberDialog:Cl,groupMembers:Pl,addMemberUsername:Rl,selectedMemberGroup:zl,subPageSectionExpanded:Al,toggleSubPageSection:Ll,getGroupMemberCount:Il,getMenuEnabledCount:Nl,groupCount:Ol,openMemberManager:jl,loadGroupMembers:Vl,addMemberToGroup:Fl,removeMemberFromGroup:Hl,availableUsersForGroup:Bl,subPageCache:El,onParentToggle:Kl,openMenuConfig:Wl,saveMenuConfig:Ul,deleteGroupConfig:Gl,createGroup:Yl,changePasswordForm:pd,changingPassword:fd,doChangePassword:Cd,showSetupWizard:gd,setupForm:hd,setupStep:yd,checkSetupWizard:bd,completeSetupWizard:wd,chatSessions:Pi,chatHistoryView:Ri,selectedChatIds:zi,expandedChatDates:Ai,expandedChatMonths:Li,expandedChatStocks:Ii,chatHistoryLoading:Ni,chatHistoryError:Oi,allChatSessionsFlat:ji,chatGroupedByDate:Vi,chatGroupedByMonth:Fi,chatGroupedByStock:Hi,toggleSelectChat:Bi,toggleSelectChatDate:Ki,toggleSelectChatMonth:Wi,toggleSelectChatStock:Ui,toggleChatDateExpand:Gi,toggleChatMonthExpand:Yi,toggleChatStockExpand:Ji,selectAllChatSessions:Qi,deleteSelectedChatSessions:$i,viewChatSession:Xi,loadChatHistory:qs,deleteChatSession:Zi,renderMarkdown:el,stockChatInput:tl,stockChatMessages:al,stockChatLoading:sl,stockChatError:nl,askStockSend:il,askStockQuick:ll,onTouchStart:Pn,onTouchEnd:Rn,hapticFeedback:i}}})();Sa.name="qc-icon";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=lm;window.__quantComponents.Header=ip;window.__quantComponents.SubNav=yp;window.__quantComponents.MobileNav=Np;window.__quantComponents.StockList=yf;window.__quantComponents.DetailSplit=_f;window.__quantComponents.TopTabs=Pf;window.__quantComponents.AppIcon=Sa;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default Rf();
