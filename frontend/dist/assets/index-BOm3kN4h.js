var Dd=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports);import{aV as Rd,L as ve,O as ga,Z as zd,au as Vt,M as fe,P as be,aW as Ad,a0 as Le,_ as Be,F as rt,al as Ct,S as ct,a1 as nt,X as ta,ai as jt,q as Ra,o as za,a8 as us,r as wt,e as at,av as Ld,Y as ja,$ as qa,R as Id,aC as fa,T as Nd,Q as oa,p as Od,n as jd}from"./vendor-vue-DDF9zi1T.js";import{e as Vd,E as Fd,a as Hd,b as Bd,c as Kd,z as Wd}from"./vendor-ep-VOop1zGa.js";import{C as Ud,a as Gd,W as Yd,I as Jd,S as Qd,B as $d,F as Xd,b as Zd,c as eu,d as tu,e as au,f as su,P as lu,g as nu,h as iu,i as ou,T as ru,j as cu,L as du,k as uu,G as vu,U as mu,l as pu,m as fu,n as gu,D as hu,o as yu,p as bu,M as wu,q as ku,R as _u,r as xu,s as Su,K as Cu,t as qu,u as Eu,v as Mu,w as Tu,x as Pu,y as Du,z as Ru,A as zu,E as Au,H as Lu,O as Iu,J as Nu,N as Ou,Q as ju,V as Vu,X as Fu,Y as Hu,Z as Bu,_ as Ku,$ as Wu,a0 as Uu,a1 as Gu,a2 as Yu,a3 as Ju,a4 as Qu,a5 as $u,a6 as Xu,a7 as Zu,a8 as ev,a9 as tv,aa as av,ab as sv,ac as lv,ad as nv,ae as iv,af as ov,ag as rv,ah as cv,ai as dv,aj as uv,ak as vv,al as mv,am as pv,an as fv,ao as gv,ap as hv,aq as yv,ar as bv,as as wv,at as kv,au as _v,av as xv,aw as Sv,ax as Cv,ay as qv,az as Ev,aA as Mv,aB as Tv,aC as Pv,aD as Dv,aE as Rv,aF as zv,aG as Av,aH as Lv,aI as Iv,aJ as Nv,aK as Ov,aL as jv,aM as Vv,aN as Fv,aO as Hv,aP as Bv,aQ as Kv}from"./vendor-lucide-DidEUx9K.js";var ng=Dd((hg,Ae)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))e(v);new MutationObserver(v=>{for(const m of v)if(m.type==="childList")for(const R of m.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&e(R)}).observe(document,{childList:!0,subtree:!0});function g(v){const m={};return v.integrity&&(m.integrity=v.integrity),v.referrerPolicy&&(m.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?m.credentials="include":v.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function e(v){if(v.ep)return;v.ep=!0;const m=g(v);fetch(v.href,m)}})();window.Vue=Rd;const ha=Vd||{};window.ElementPlus=ha;ha.ElMessage=ha.ElMessage||Fd;ha.ElMessageBox=ha.ElMessageBox||Hd;ha.ElNotification=ha.ElNotification||Bd;ha.ElLoading=ha.ElLoading||Kd;window.ElementPlusLocaleZhCn={default:Wd};(function(){const a=[45,220,0,140,270,320],t={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},g={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function e(s,y,n){return"hsl("+s+", "+y+"%, "+n+"%)"}function v(s,y,n){y=y/100,n=n/100;const p=function(b){return(b+s/30)%12},X=y*Math.min(n,1-n),T=function(b){return n-X*Math.max(-1,Math.min(p(b)-3,Math.min(9-p(b),1)))};return Math.round(255*T(0))+", "+Math.round(255*T(8))+", "+Math.round(255*T(4))}const m=5;function R(s,y,n){return v(s,y,n).split(",").map(function(p){return parseInt(p,10)})}function r(s){const y=function(n){return n=n/255,n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)};return .2126*y(s[0])+.7152*y(s[1])+.0722*y(s[2])}function l(s,y){const n=r(s),p=r(y),X=Math.max(n,p),T=Math.min(n,p);return(X+.05)/(T+.05)}function f(s,y,n){for(var p=8,X=92,T=0;T<26;T++){var b=(p+X)/2;r(R(s,y,b))<n?p=b:X=b}return Math.round(X*10)/10}function o(s,y,n,p,X){let T=38,b=76;for(let u=0;u<24;u++){const k=(T+b)/2;l(R(s,p,k),R(s,y,n))>=X?b=k:T=k}return Math.round(b*10)/10}function S(s,y){var n={};return y==="light"?(n["--qc-neutral-50"]=e(s,18,98),n["--qc-neutral-100"]=e(s,16,95),n["--qc-neutral-200"]=e(s,14,90),n["--qc-neutral-300"]=e(s,12,83),n["--qc-neutral-400"]=e(s,10,68),n["--qc-neutral-500"]=e(s,10,53),n["--qc-neutral-600"]=e(s,10,40),n["--qc-neutral-700"]=e(s,10,30),n["--qc-neutral-800"]=e(s,10,20),n["--qc-neutral-900"]=e(s,10,12),n["--qc-background"]=e(s,18,98),n["--qc-muted"]=e(s,16,95),n["--qc-border"]=e(s,12,72),n["--chart-axis"]=e(s,12,55),n["--chart-split"]=e(s,10,88),n["--qc-foreground"]=e(s,10,12),n["--qc-muted-foreground"]=e(s,9,38),n["--qc-nav-item-default"]=e(s,9,38),n["--qc-nav-item-hover"]=e(s,10,12),n["--qc-nav-group-label"]=e(s,9,40),n["--qc-nav-bg"]="#ffffff",n["--bg-page"]=e(s,20,97),n["--bg-stripe"]=e(s,20,97),n["--bg-card-header"]=e(s,24,96),n["--card-gradient-header"]="linear-gradient(135deg, "+e(s,24,96)+" 0%, #ffffff 100%)",n["--bg-hover"]=e(s,26,94),n["--bg-tertiary"]=e(s,14,93),n["--badge-gold-bg"]=e(s,26,96),n["--gold-bg"]=e(s,20,97),n["--border-light"]=e(s,22,89),n["--border-base"]=e(s,24,79),n["--border-color"]=e(s,14,88),n["--text-primary"]=e(s,12,12),n["--text-secondary"]=e(s,12,32),n["--text-tertiary"]=e(s,14,40),n["--text-disabled"]=e(s,9,C(s,9,O(s,18,98),25,70,!0,3.2)),n["--qc-card"]="#ffffff",n["--qc-popover"]="#ffffff",n["--qc-nav-border"]=e(s,12,72),n["--qc-nav-item-hover-bg"]=e(s,16,95),n["--qc-overlay"]="rgba(31, 29, 26, 0.5)",n["--bg-card"]="#ffffff",n["--surface"]="#ffffff",n["--border-heavy"]=e(s,22,72),n["--surface-canvas"]=e(s,18,98),n["--surface-card"]="#ffffff",n["--surface-raised"]="#ffffff",n["--surface-sunken"]=e(s,16,96),n["--surface-input"]="#ffffff",n["--surface-hover"]=e(s,26,94),n["--border-strong"]=e(s,22,72),n["--scrollbar-thumb"]="rgba("+v(s,12,72)+", 0.5)",n["--bg-page-rgb"]=v(s,20,97)):(n["--qc-background"]=e(s,10,8),n["--qc-card"]=e(s,11,11),n["--qc-popover"]=e(s,11,11),n["--qc-muted"]=e(s,12,14),n["--qc-border"]=e(s,14,30),n["--chart-axis"]=e(s,16,52),n["--chart-split"]=e(s,14,26),n["--qc-nav-bg"]=e(s,10,9),n["--qc-nav-border"]=e(s,13,22),n["--qc-nav-item-hover-bg"]=e(s,12,14),n["--bg-page"]=e(s,10,8),n["--bg-card"]=e(s,11,11),n["--bg-card-header"]=e(s,12,14),n["--bg-stripe"]=e(s,10,9),n["--bg-hover"]=e(s,12,14),n["--bg-tertiary"]=e(s,12,14),n["--border-light"]=e(s,13,18),n["--border-base"]=e(s,14,26),n["--border-heavy"]=e(s,16,38),n["--border-color"]=e(s,13,22),n["--surface"]=e(s,11,11),n["--surface-canvas"]=e(s,10,8),n["--surface-card"]=e(s,11,11),n["--surface-raised"]=e(s,12,14),n["--surface-sunken"]=e(s,12,9),n["--surface-input"]=e(s,12,9),n["--surface-hover"]=e(s,12,15),n["--border-strong"]=e(s,16,42),n["--scrollbar-thumb"]="rgba("+v(s,16,52)+", 0.5)",n["--bg-page-rgb"]=v(s,10,8),n["--qc-overlay"]="rgba(0, 0, 0, 0.6)"),n}const w=4.6;var E=[255,255,255];function x(s){return v(s,10,8).split(",").map(function(y){return parseInt(y,10)})}function C(s,y,n,p,X,T,b){for(var u=b||w,k=p,c=X,A=0;A<24;A++){var oe=(k+c)/2,Y=l(R(s,y,oe),n)>=u;T?Y?k=oe:c=oe:Y?c=oe:k=oe}return Math.round((T?k:c)*10)/10}function O(s,y,n){return v(s,y,n).split(",").map(function(p){return parseInt(p,10)})}function D(s){const y=f(s,75,.18),n=f(s,75,.26),p=f(s,70,.36),X=f(s,85,.12),T=v(s,75,y),b=C(s,68,E,14,62,!0),u=Math.max(12,b-5),k=Math.max(10,b-11),c=v(s,16,95).split(",").map(function(K){return parseInt(K,10)}),A=v(s,85,92).split(",").map(function(K){return parseInt(K,10)}),oe=C(s,78,c,10,58,!0,4.6),Y=C(s,80,A,10,58,!0,4.6),q=Math.min(32,C(s,80,E,8,60,!0,4.6));return{...S(s,"light"),"--primary-color":e(s,75,y),"--primary-rgb":T,"--color-primary":e(s,75,y),"--qc-primary":e(s,75,y),"--qc-primary-50":e(s,90,96),"--qc-primary-100":e(s,85,92),"--qc-primary-200":e(s,80,84),"--qc-primary-300":e(s,75,72),"--qc-primary-400":e(s,70,p),"--qc-primary-500":e(s,75,n),"--qc-primary-600":e(s,80,y),"--qc-primary-700":e(s,85,X),"--qc-primary-800":e(s,88,28),"--qc-primary-900":e(s,90,20),"--text-link":e(s,78,oe),"--secondary-color":e(s,70,55),"--card-border":e(s,22,80),"--bg-selected":"rgba("+T+", 0.08)","--btn-primary-bg":e(s,80,q),"--btn-primary-border":e(s,80,q),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":e(s,82,28),"--btn-primary-hover-border":e(s,82,28),"--btn-primary-active-bg":e(s,85,24),"--btn-primary-active-border":e(s,85,24),"--btn-primary-plain-bg":"rgba("+T+", 0.08)","--btn-primary-plain-border":"rgba("+T+", 0.25)","--btn-primary-plain-color":e(s,80,oe),"--btn-primary-plain-hover-bg":"rgba("+T+", 0.15)","--btn-primary-plain-hover-border":e(s,80,32),"--btn-primary-text-color":e(s,80,oe),"--gradient":"linear-gradient(135deg, "+e(s,80,k)+" 0%, "+e(s,76,u)+" 50%, "+e(s,70,b)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+e(s,76,u)+" 0%, "+e(s,85,k)+" 100%)","--primary-text":e(s,78,oe),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+e(s,62,Math.min(74,o(s,45,14,58,m)+5))+" 0%, "+e(s,58,o(s,45,14,58,m))+" 100%)","--panel-fg":e(s,45,14),"--qc-nav-item-active":e(s,80,Y),"--qc-nav-item-active-bg":e(s,85,92),"--qc-nav-item-active-border":e(s,75,48),"--qc-nav-badge-bg":e(s,85,92),"--qc-nav-badge-text":e(s,80,Y),"--qc-ring":e(s,75,C(s,75,O(s,18,98),25,70,!0,3.2)),"--brand-soft-text":e(s,80,C(s,80,O(s,80,84),10,58,!0,4.6)),"--border-control":e(s,16,C(s,16,O(s,18,98),30,80,!0,3.2))}}function d(s){const y=f(s,85,.34),n=f(s,85,.46),p=v(s,85,y),X=C(s,80,x(s),30,92,!1),T=Math.min(94,X+8),b=Math.min(96,X+16),u=O(s,55,22),k=O(s,10,9),c=p.split(",").map(function(ie){return parseInt(ie,10)}),A=[0,1,2].map(function(ie){return Math.round(c[ie]*.12+k[ie]*.88)}),oe=C(s,85,A,45,96,!1,4.6),Y=C(s,85,u,45,96,!1,4.6),q=Math.min(94,C(s,92,u,45,96,!1,4.6)),K=Math.min(96,q+6);return{...S(s,"dark"),"--primary-color":e(s,85,y),"--primary-rgb":p,"--color-primary":e(s,85,y),"--qc-primary":e(s,90,y),"--qc-primary-50":e(s,50,18),"--qc-primary-100":e(s,55,22),"--qc-primary-200":e(s,55,26),"--qc-primary-300":e(s,60,30),"--qc-primary-400":e(s,65,38),"--qc-primary-500":e(s,85,n),"--qc-primary-600":e(s,90,y),"--qc-primary-700":e(s,92,q),"--qc-primary-800":e(s,90,K),"--qc-primary-900":e(s,92,Math.min(98,K+8)),"--text-link":e(s,85,Y),"--secondary-color":e(s,70,60),"--card-border":e(s,30,25),"--bg-selected":"rgba("+p+", 0.10)","--btn-primary-bg":e(s,85,65),"--btn-primary-border":e(s,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":e(s,80,72),"--btn-primary-hover-border":e(s,80,72),"--btn-primary-active-bg":e(s,75,80),"--btn-primary-active-border":e(s,75,80),"--btn-primary-plain-bg":"rgba("+p+", 0.08)","--btn-primary-plain-border":"rgba("+p+", 0.25)","--btn-primary-plain-color":e(s,85,Y),"--btn-primary-plain-hover-bg":"rgba("+p+", 0.15)","--btn-primary-plain-hover-border":e(s,85,65),"--btn-primary-text-color":e(s,85,Y),"--gradient":"linear-gradient(135deg, "+e(s,80,X)+" 0%, "+e(s,85,T)+" 50%, "+e(s,85,b)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+e(s,85,b)+" 0%, "+e(s,80,X)+" 100%)","--primary-text":e(s,85,Y),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+e(s,60,Math.min(76,o(s,40,12,55,m)+5))+" 0%, "+e(s,55,o(s,40,12,55,m))+" 100%)","--panel-fg":e(s,40,12),"--qc-nav-item-active":e(s,85,oe),"--qc-nav-item-active-bg":"rgba("+p+", 0.10)","--qc-nav-item-active-border":e(s,85,65),"--qc-nav-badge-bg":"rgba("+p+", 0.12)","--qc-nav-badge-text":e(s,85,oe),"--border-control":e(s,16,C(s,16,O(s,11,11),25,70,!1,3.2)),"--brand-soft-text":e(s,85,C(s,85,O(s,55,26),45,96,!1,4.6)),"--qc-ring":e(s,85,65)}}var i=[],h={mode:"light",hue:45},F=!1;function B(s,y){try{var n=document.querySelector('meta[name="theme-color"]');if(!n)return;var p=y?s["--surface-canvas"]||s["--qc-background"]:s["--btn-primary-bg"]||s["--qc-primary"];p&&n.setAttribute("content",p)}catch{}}function I(){if(!(F||typeof window>"u"||!window.matchMedia)){var s=window.matchMedia("(prefers-color-scheme: dark)"),y=function(){h.mode==="system"&&$("system",h.hue)};s.addEventListener?s.addEventListener("change",y):s.addListener&&s.addListener(y),F=!0}}function W(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}var J=-1;function N(s){return s=parseInt(s,10),isNaN(s)?45:s<0?J:Math.max(0,Math.min(359,s))}function z(s){return Object.keys(s).forEach(function(y){var n=s[y];if(typeof n=="string"){n.indexOf("hsl(")>=0&&(n=n.replace(/hsl\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)%/g,function(u,k){return"hsl("+k+", 0%"}));var p=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*[\d.]+)?\)$/.exec(n);if(p){var X=Math.round(.2126*+p[1]+.7152*+p[2]+.0722*+p[3]);n="rgba("+X+", "+X+", "+X+(p[4]||"")+")"}if(/^\d+,\s*\d+,\s*\d+$/.test(n)){var T=n.split(",").map(function(u){return parseInt(u,10)}),b=Math.round(.2126*T[0]+.7152*T[1]+.0722*T[2]);n=b+", "+b+", "+b}s[y]=n}}),s}function j(s,y){var n=O(45,0,y?22:95),p=O(45,0,y?8:98),X=O(45,0,y?11:100),T=y?C(45,0,n,45,96,!1,4.6):C(45,0,n,10,58,!0,4.6),b=O(45,0,y?22:92),u=y?C(45,0,b,45,96,!1,4.6):C(45,0,b,10,58,!0,4.6),k=y?C(45,0,p,45,96,!1,3.2):C(45,0,p,25,70,!0,3.2),c=y?C(45,0,X,25,70,!1,3.2):C(45,0,p,30,80,!0,3.2),A=y?C(45,0,O(45,0,26),45,96,!1,4.6):C(45,0,O(45,0,84),10,58,!0,4.6);s["--brand-soft-text"]="hsl(45, 0%, "+A+"%)";var oe="hsl(45, 0%, "+T+"%)";if(s["--primary-text"]=oe,s["--text-link"]=oe,s["--btn-primary-text-color"]=oe,s["--btn-primary-plain-color"]=oe,s["--qc-nav-item-active"]="hsl(45, 0%, "+u+"%)",s["--qc-nav-badge-text"]="hsl(45, 0%, "+u+"%)",s["--qc-ring"]="hsl(45, 0%, "+k+"%)",s["--border-control"]="hsl(45, 0%, "+c+"%)",y){var Y=C(45,0,O(45,0,8),30,92,!1,4.6),q=Math.min(94,Y+8),K=Math.min(96,Y+16);s["--gradient"]="linear-gradient(135deg, hsl(45, 0%, "+Y+"%) 0%, hsl(45, 0%, "+q+"%) 50%, hsl(45, 0%, "+K+"%) 100%)",s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+K+"%) 0%, hsl(45, 0%, "+Y+"%) 100%)"}else{var ie=C(45,0,E,14,62,!0,4.6),me=Math.max(12,ie-5),Ce=Math.max(10,ie-11);s["--gradient"]="linear-gradient(135deg, hsl(45, 0%, "+Ce+"%) 0%, hsl(45, 0%, "+me+"%) 50%, hsl(45, 0%, "+ie+"%) 100%)",s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+me+"%) 0%, hsl(45, 0%, "+Ce+"%) 100%)"}var U=o(45,0,14,0,m);return s["--gradient-panel"]="linear-gradient(135deg, hsl(45, 0%, "+Math.min(74,U+5)+"%) 0%, hsl(45, 0%, "+U+"%) 100%)",s["--panel-fg"]="hsl(45, 0%, 14%)",s}function $(s,y){let n=s||"light",p=y==null||y===""?null:y;if(t[s]){const A=t[s];n=A[0],p==null&&(p=A[1])}n==="system"&&(n=W()?"dark":"light");const X=n==="dark";p=N(p??45);const T=p===J,b=document.documentElement;b.setAttribute("data-theme",X?"dark-pro":"gold"),b.setAttribute("data-theme-mode",X?"dark":"light"),b.setAttribute("data-theme-neutral",T?"true":"false");let u=X?d(T?45:p):D(T?45:p);T&&(u=j(z(u),X));for(var k=Object.keys(u),c=0;c<i.length;c++)k.indexOf(i[c])===-1&&b.style.removeProperty(i[c]);k.forEach(function(A){b.style.setProperty(A,u[A])}),i=k,h.mode=typeof s=="string"&&s?s:"light",h.hue=p,B(u,X);try{localStorage.setItem("quant_theme_mode",X?"dark":"light"),localStorage.setItem("quant_theme_hue",String(p))}catch{}return{mode:X?"dark":"light",hue:p}}function Z(){try{var s=localStorage.getItem("quant_theme_hue");if(s!==null&&s!=="")return N(s)}catch{}var y=typeof window<"u"&&window.__quantModules?window.__quantModules.preferences:null;if(y&&y.getPreference){var n=y.getPreference("theme_hue");if(n!=null&&n!=="")return N(n)}return null}function ne(s){var y=Z();return $(s,y??void 0)}function ee(){const s=localStorage.getItem("quant_theme");if(!s||!t[s]||localStorage.getItem("quant_theme_hue")!==null)return null;const y=t[s];return{mode:y[0],hue:y[1]}}function M(){const s=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let y=s.theme||"system",n=s.theme_hue!=null&&s.theme_hue!==""?s.theme_hue:null;const p=ee();return n==null&&p&&(y=p.mode,n=p.hue),n==null&&(n=45),I(),$(y,n)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:a,LEGACY_MAP:t,legacyThemes:g,NEUTRAL_HUE:J,generateLightTokens:D,generateDarkTokens:d,migrateLegacyTheme:ee,persistedHue:Z,applyLegacyTheme:ne,applyTheme:$,init:M},typeof queueMicrotask=="function"?queueMicrotask(M):M()})();(function(a,t){typeof Ae=="object"&&Ae.exports?Ae.exports=t():a.QuantI18n=t()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",t=["zh-CN","en","ja","ko","zh-TW"],g={};let e=a,v=null;function m(){return v&&typeof v=="object"&&"value"in v?v.value||a:e}function R(w,E){return t.indexOf(w)===-1?!1:(g[w]=E&&typeof E=="object"?E:{},!0)}function r(w){const E=t.indexOf(w)!==-1?w:a;return e=E,v&&typeof v=="object"&&"value"in v&&(v.value=E),typeof document<"u"&&document.documentElement.setAttribute("lang",E),e}function l(){return m()}function f(w){if(w&&typeof w=="object"&&"value"in w){v=w;const E=t.indexOf(w.value)!==-1?w.value:a;w.value=E,e=E}return e}function o(w,E){const x=m(),C=g[x]||{};let O=w in C?C[w]:null;if(O==null&&x!=="en"){const D=g.en||{};O=w in D?D[w]:null}return O==null&&(O=String(w)),E&&typeof E=="object"&&Object.keys(E).forEach(function(D){O=O.replace(new RegExp("\\{"+D+"\\}","g"),String(E[D]))}),O}const S={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:t,messages:g,registerLocale:R,setLocale:r,getLocale:l,bindLocale:f,t:o};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=S),S});(function(a,t){typeof Ae=="object"&&Ae.exports?Ae.exports=t():a.QuantZhCN=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.ruleScore":"选股评分","detail.notEvaluated":"未评估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时","glossary.title":"术语表","glossary.search":"搜索术语","glossary.definition":"定义","glossary.calc":"计算口径","glossary.empty":"无匹配术语","glossary.cat.macro":"宏观","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技术","glossary.cat.shortterm":"短线","glossary.cat.datasource":"数据源","glossary.cat.product":"产品","glossary.term.merrill_clock":"美林时钟","glossary.term.recovery":"复苏期","glossary.term.overheat":"过热期","glossary.term.stagflation":"滞胀期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五维评分","glossary.term.momentum":"动量策略","glossary.term.reversal":"反转策略","glossary.term.quality":"质量策略","glossary.term.capital_flow":"资金流策略","glossary.term.consensus":"共识榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰减","glossary.term.zscore":"Z-Score","glossary.term.pe":"市盈率(PE)","glossary.term.pb":"市净率(PB)","glossary.term.roe":"净资产收益率(ROE)","glossary.term.market_cap":"总市值","glossary.term.ma":"均线(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"换手率","glossary.term.zt_pool":"涨停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龙虎榜","glossary.term.ladder":"连板","glossary.term.promote_rate":"晋级率","glossary.term.money_effect":"赚钱效应","glossary.term.sentiment_cycle":"情绪周期","glossary.term.sector_flow":"板块资金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源热备","glossary.term.pit":"PIT(时点数据)","glossary.term.survivorship":"幸存者偏差","glossary.term.ai_eval":"AI评估","glossary.term.ai_chat":"智能问股","glossary.term.backtest":"回测","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"样本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"胜率","glossary.term.portfolio":"模拟组合","glossary.term.data_quality":"数据质量分","glossary.term.rbac":"RBAC权限","glossary.term.sector_rotation":"行业轮动","glossary.term.index_enhance":"指数增强","glossary.term.multifactor":"多因子","glossary.term.volatility":"波动率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林带","glossary.term.dragon_head":"龙头股","glossary.term.data_freshness":"数据新鲜度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,t){typeof Ae=="object"&&Ae.exports?Ae.exports=t():a.QuantEn=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.ruleScore":"Rule score","detail.notEvaluated":"Not scored","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration","glossary.title":"Glossary","glossary.search":"Search terms","glossary.definition":"Definition","glossary.calc":"Calculation","glossary.empty":"No matching terms","glossary.cat.macro":"Macro","glossary.cat.strategy":"Strategy","glossary.cat.factor":"Factor","glossary.cat.tech":"Technical","glossary.cat.shortterm":"Short-term","glossary.cat.datasource":"Data Source","glossary.cat.product":"Product","glossary.term.merrill_clock":"Merrill Clock","glossary.term.recovery":"Recovery","glossary.term.overheat":"Overheat","glossary.term.stagflation":"Stagflation","glossary.term.recession":"Recession","glossary.term.merrill_score":"Five-Dimension Score","glossary.term.momentum":"Momentum","glossary.term.reversal":"Reversal","glossary.term.quality":"Quality","glossary.term.capital_flow":"Capital Flow","glossary.term.consensus":"Consensus Board","glossary.term.in_pool":"In Pool","glossary.term.out_pool":"Out of Pool","glossary.term.factor":"Factor","glossary.term.factor_ic":"Factor IC","glossary.term.ic_decay":"IC Decay","glossary.term.zscore":"Z-Score","glossary.term.pe":"P/E Ratio","glossary.term.pb":"P/B Ratio","glossary.term.roe":"ROE","glossary.term.market_cap":"Market Cap","glossary.term.ma":"Moving Average","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"Volume Ratio","glossary.term.turnover":"Turnover Rate","glossary.term.zt_pool":"Limit-Up Pool","glossary.term.zha_ban":"Failed Limit-Up","glossary.term.dt_pool":"Limit-Down Pool","glossary.term.lhb":"Dragon-Tiger List","glossary.term.ladder":"Consecutive Limit-Ups","glossary.term.promote_rate":"Promotion Rate","glossary.term.money_effect":"Money Effect","glossary.term.sentiment_cycle":"Sentiment Cycle","glossary.term.sector_flow":"Sector Flow","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"Triple-Source Failover","glossary.term.pit":"PIT (Point-in-Time)","glossary.term.survivorship":"Survivorship Bias","glossary.term.ai_eval":"AI Evaluation","glossary.term.ai_chat":"AI Stock Chat","glossary.term.backtest":"Backtest","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"Out-of-Sample","glossary.term.sharpe":"Sharpe Ratio","glossary.term.drawdown":"Drawdown","glossary.term.winrate":"Win Rate","glossary.term.portfolio":"Paper Portfolio","glossary.term.data_quality":"Data Quality Grade","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"Sector Rotation","glossary.term.index_enhance":"Index Enhancement","glossary.term.multifactor":"Multi-Factor","glossary.term.volatility":"Volatility","glossary.term.dividend_yield":"Dividend Yield","glossary.term.bollinger":"Bollinger Bands","glossary.term.dragon_head":"Leading Stock","glossary.term.data_freshness":"Data Freshness"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,t){typeof Ae=="object"&&Ae.exports?Ae.exports=t():a.Quantja=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.ruleScore":"選股スコア","detail.notEvaluated":"未評価","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間","glossary.title":"用語集","glossary.search":"用語検索","glossary.definition":"定義","glossary.calc":"計算方法","glossary.empty":"該当する用語がありません","glossary.cat.macro":"マクロ","glossary.cat.strategy":"戦略","glossary.cat.factor":"ファクター","glossary.cat.tech":"テクニカル","glossary.cat.shortterm":"短期","glossary.cat.datasource":"データソース","glossary.cat.product":"プロダクト","glossary.term.merrill_clock":"メリルクロック","glossary.term.recovery":"回復期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"スタグフレーション","glossary.term.recession":"景気後退","glossary.term.merrill_score":"5次元スコア","glossary.term.momentum":"モメンタム","glossary.term.reversal":"リバーサル","glossary.term.quality":"クオリティ","glossary.term.capital_flow":"資金フロー","glossary.term.consensus":"コンセンサス","glossary.term.in_pool":"新規採用","glossary.term.out_pool":"除外","glossary.term.factor":"ファクター","glossary.term.factor_ic":"ファクターIC","glossary.term.ic_decay":"IC減衰","glossary.term.zscore":"Zスコア","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"時価総額","glossary.term.ma":"移動平均","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"出来高倍率","glossary.term.turnover":"回転率","glossary.term.zt_pool":"ストップ高","glossary.term.zha_ban":"ストップ高失敗","glossary.term.dt_pool":"ストップ安","glossary.term.lhb":"竜虎榜","glossary.term.ladder":"連続ストップ高","glossary.term.promote_rate":"昇格率","glossary.term.money_effect":"マネー効果","glossary.term.sentiment_cycle":"センチメントサイクル","glossary.term.sector_flow":"セクターフロー","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"三重冗長","glossary.term.pit":"PIT","glossary.term.survivorship":"サバイバーシップバイアス","glossary.term.ai_eval":"AI評価","glossary.term.ai_chat":"AI株チャット","glossary.term.backtest":"バックテスト","glossary.term.walkforward":"ウォークフォワード","glossary.term.oos":"サンプル外","glossary.term.sharpe":"シャープレシオ","glossary.term.drawdown":"ドローダウン","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬ポートフォリオ","glossary.term.data_quality":"データ品質","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"セクターローテーション","glossary.term.index_enhance":"インデックス強化","glossary.term.multifactor":"マルチファクター","glossary.term.volatility":"ボラティリティ","glossary.term.dividend_yield":"配当利回り","glossary.term.bollinger":"ボリンジャーバンド","glossary.term.dragon_head":"リーダー株","glossary.term.data_freshness":"データ鮮度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",a),a});(function(a,t){typeof Ae=="object"&&Ae.exports?Ae.exports=t():a.Quantko=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.ruleScore":"종목 점수","detail.notEvaluated":"미평가","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간","glossary.title":"용어집","glossary.search":"용어 검색","glossary.definition":"정의","glossary.calc":"계산 방법","glossary.empty":"일치하는 용어가 없습니다","glossary.cat.macro":"거시","glossary.cat.strategy":"전략","glossary.cat.factor":"팩터","glossary.cat.tech":"기술적","glossary.cat.shortterm":"단기","glossary.cat.datasource":"데이터 소스","glossary.cat.product":"제품","glossary.term.merrill_clock":"메릴 클럭","glossary.term.recovery":"회복기","glossary.term.overheat":"과열기","glossary.term.stagflation":"스태그플레이션","glossary.term.recession":"경기 침체","glossary.term.merrill_score":"5차원 점수","glossary.term.momentum":"모멘텀","glossary.term.reversal":"리버설","glossary.term.quality":"퀄리티","glossary.term.capital_flow":"자금 흐름","glossary.term.consensus":"컨센서스","glossary.term.in_pool":"신규 편입","glossary.term.out_pool":"제외","glossary.term.factor":"팩터","glossary.term.factor_ic":"팩터 IC","glossary.term.ic_decay":"IC 감쇠","glossary.term.zscore":"Z-Score","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"시가총액","glossary.term.ma":"이동평균","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"거래량비","glossary.term.turnover":"회전율","glossary.term.zt_pool":"상한가 풀","glossary.term.zha_ban":"상한가 실패","glossary.term.dt_pool":"하한가 풀","glossary.term.lhb":"용호방","glossary.term.ladder":"연속 상한가","glossary.term.promote_rate":"승격률","glossary.term.money_effect":"돈벌이 효과","glossary.term.sentiment_cycle":"심리 사이클","glossary.term.sector_flow":"섹터 자금","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"삼원 이중화","glossary.term.pit":"PIT","glossary.term.survivorship":"생존자 편향","glossary.term.ai_eval":"AI 평가","glossary.term.ai_chat":"AI 주식 채팅","glossary.term.backtest":"백테스트","glossary.term.walkforward":"워크포워드","glossary.term.oos":"샘플 외","glossary.term.sharpe":"샤프 비율","glossary.term.drawdown":"드로다운","glossary.term.winrate":"승률","glossary.term.portfolio":"모의 포트폴리오","glossary.term.data_quality":"데이터 품질","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"섹터 로테이션","glossary.term.index_enhance":"지수 강화","glossary.term.multifactor":"멀티팩터","glossary.term.volatility":"변동성","glossary.term.dividend_yield":"배당수익률","glossary.term.bollinger":"볼린저 밴드","glossary.term.dragon_head":"리더주","glossary.term.data_freshness":"데이터 신선도"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",a),a});(function(a,t){typeof Ae=="object"&&Ae.exports?Ae.exports=t():a.QuantzhTW=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.ruleScore":"選股評分","detail.notEvaluated":"未評估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時","glossary.title":"術語表","glossary.search":"搜尋術語","glossary.definition":"定義","glossary.calc":"計算口徑","glossary.empty":"無相符術語","glossary.cat.macro":"總體","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技術","glossary.cat.shortterm":"短線","glossary.cat.datasource":"資料源","glossary.cat.product":"產品","glossary.term.merrill_clock":"美林時鐘","glossary.term.recovery":"復甦期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"滯脹期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五維評分","glossary.term.momentum":"動量策略","glossary.term.reversal":"反轉策略","glossary.term.quality":"質量策略","glossary.term.capital_flow":"資金流策略","glossary.term.consensus":"共識榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰減","glossary.term.zscore":"Z-Score","glossary.term.pe":"本益比(PE)","glossary.term.pb":"股價淨值比(PB)","glossary.term.roe":"股東權益報酬率(ROE)","glossary.term.market_cap":"總市值","glossary.term.ma":"均線(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"換手率","glossary.term.zt_pool":"漲停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龍虎榜","glossary.term.ladder":"連板","glossary.term.promote_rate":"晉級率","glossary.term.money_effect":"賺錢效應","glossary.term.sentiment_cycle":"情緒週期","glossary.term.sector_flow":"板塊資金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源熱備","glossary.term.pit":"PIT(時點資料)","glossary.term.survivorship":"倖存者偏差","glossary.term.ai_eval":"AI評估","glossary.term.ai_chat":"智能問股","glossary.term.backtest":"回測","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"樣本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬組合","glossary.term.data_quality":"資料品質分","glossary.term.rbac":"RBAC權限","glossary.term.sector_rotation":"產業輪動","glossary.term.index_enhance":"指數增強","glossary.term.multifactor":"多因子","glossary.term.volatility":"波動率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林帶","glossary.term.dragon_head":"龍頭股","glossary.term.data_freshness":"資料新鮮度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",a),a});(function(a,t){typeof Ae=="object"&&Ae.exports?Ae.exports=t():a.QuantPinyin=t()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},t=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let g=[];function e(x){const C=String(x||"");let O="";for(const D of C){const d=a[D];d?O+=d.charAt(0):/[a-zA-Z0-9]/.test(D)&&(O+=D.toLowerCase())}return O}function v(x){const C=String(x||"");let O="";for(const D of C){const d=a[D];d?O+=d:/[a-zA-Z0-9]/.test(D)&&(O+=D.toLowerCase())}return O}function m(x){return String(x||"").trim().toLowerCase()}function R(x,C){const O=(C.code||"").toLowerCase();return/^\d+$/.test(x)?O.indexOf(x)!==-1:/[\u4e00-\u9fa5]/.test(x)?(C.name||"").toLowerCase().indexOf(x)!==-1:O.indexOf(x)!==-1||(C.initials||e(C.name)).indexOf(x)!==-1||(C.pinyin||v(C.name)).indexOf(x)!==-1}function r(x){const C={},O=[],D=function(d,i,h){!d||C[d]||(C[d]=!0,O.push({code:d,name:i||d,source:h||"core",initials:e(i||d),pinyin:v(i||d)}))};return t.forEach(function(d){D(d.code,d.name,"core")}),(x||[]).forEach(function(d){D(d.code,d.name,"extra")}),O}function l(x,C){const O=m(x);if(!O||!C||!C.length)return[];const D=O.split(/[\s,，、;；]+/).filter(Boolean);return D.length?C.filter(function(d){return D.every(function(i){return R(i,d)})}).slice(0,20).map(function(d){return{code:d.code,name:d.name,source:d.source||"core"}}):[]}function f(x){Array.isArray(x)&&(g=g.concat(x))}function o(){return g.slice()}function S(){return r(g)}function w(x){return l(x,S())}const E={CHAR_PINYIN:a,CORE_STOCKS:t,toPinyinInitials:e,toPinyin:v,normalizeQuery:m,matchToken:R,buildStockIndex:r,searchStocksByQuery:l,registerExtraStocks:f,getExtraStocks:o,getStockIndex:S,searchCoreStocks:w};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=E),E});(function(a,t){typeof Ae=="object"&&Ae.exports?Ae.exports=t():a.QuantPreferences=t()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",t={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},g=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],e={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function v(i){return i=parseInt(i,10),isNaN(i)?!1:i===-1||i>=0&&i<=360}const m={light:"classic-white",dark:"dark-pro"};function R(){if(typeof localStorage>"u")return{};try{const i=localStorage.getItem(a);if(!i)return{};const h=JSON.parse(i);return h&&typeof h=="object"?h:{}}catch{return{}}}function r(i){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(i))}catch{}}function l(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function f(){const i=Object.assign({},t,R()),h={};return g.forEach(function(F){const B=i[F];h[F]=F==="theme_hue"?v(B)?parseInt(B,10):t[F]:e[F].indexOf(B)!==-1?B:t[F]}),h}function o(i){if(g.indexOf(i)!==-1)return f()[i]}function S(i,h){return g.indexOf(i)===-1?!1:i==="theme_hue"?v(h):e[i].indexOf(h)!==-1}function w(i,h){if(!S(i,h))return!1;const F=R();return F[i]=h,r(F),l()&&x({[i]:h}),!0}function E(i){if(!i||typeof i!="object")return!1;const h={};if(Object.keys(i).forEach(function(B){S(B,i[B])&&(h[B]=i[B])}),!Object.keys(h).length)return!1;const F=Object.assign({},R(),h);return r(F),l()&&x(h),!0}function x(i){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:i})}).catch(function(){})}catch{}}async function C(){const i=f();if(!l()||typeof fetch>"u")return i;try{const h=await fetch("/api/user_config/preferences");if(h.ok){const F=await h.json();if(F.success&&F.preferences){const B=F.preferences;g.forEach(function(I){const W=B[I];if(I==="theme_hue"){v(W)&&(i[I]=parseInt(W,10));return}e[I].indexOf(W)!==-1&&(i[I]=W)}),r(i)}}}catch(h){typeof console<"u"&&console.warn&&console.warn("[preferences] 读取服务端偏好失败, 回退本地偏好:",h&&h.message)}return i}function O(i){const h=i||o("info_density")||"comfortable",F=e.info_density.indexOf(h)!==-1?h:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",F),F}function D(i){const h=i||o("theme")||"system";if(h==="system"){let F=!1;return typeof window<"u"&&window.matchMedia&&(F=window.matchMedia("(prefers-color-scheme: dark)").matches),F?"dark":"light"}return h==="dark"||h==="light"?h:"light"}const d={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:t,PREFERENCE_KEYS:g,PREFERENCE_VALUES:e,THEME_MODE_TO_THEME:m,getLocal:f,getPreference:o,isValidValue:S,setPreference:w,setPreferences:E,saveToBackend:x,loadPreferences:C,resolveTheme:D,applyDensity:O};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=d),d});(function(a,t){typeof Ae=="object"&&Ae.exports?Ae.exports=t():a.QuantRecent=t()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function g(){if(typeof localStorage>"u")return[];try{const f=localStorage.getItem(a);if(!f)return[];const o=JSON.parse(f);return Array.isArray(o)?o:[]}catch{return[]}}function e(f){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(f))}catch{}}function v(f,o){if(!f)return!1;let S=g().filter(function(w){return w.code!==f});return S.unshift({code:f,name:(o||"").toString().slice(0,32),ts:Date.now()}),S.length>10&&(S=S.slice(0,10)),e(S),!0}function m(){return g().slice(0,10)}function R(f){e(g().filter(function(o){return o.code!==f}))}function r(){e([])}const l={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:v,getRecentViewed:m,removeRecent:R,clearRecent:r};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=l),l});(function(){const a=typeof Vue<"u"?Vue:{},{ref:t,computed:g,watch:e,onMounted:v,nextTick:m}=a;function R(u,k={}){if(typeof u=="string"&&u.startsWith("/api/")){const c=localStorage.getItem("quant_token");if(c)return{...k,headers:{...k.headers||{},Authorization:"Bearer "+c}}}return k}async function r(u,k={}){const c=R(u,k),A={"Content-Type":"application/json",...c.headers},oe=(k.method||"GET").toUpperCase(),Y=oe+"|"+u,q=async()=>{const K=await fetch(u,{...c,headers:A});if(K.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!K.ok){let ie="";try{const me=await K.json();ie=me&&me.detail||""}catch{}throw Object.assign(new Error(ie||"请求失败（HTTP "+K.status+"）"),{status:K.status})}return await K.json()};try{const K=k.noLoading?q:()=>h(q);return oe==="GET"&&!k.noDedupe?await O(Y,K):await K()}catch(K){throw K.message==="登录已过期"?K:(console.error("[apiFetch] "+u+":",K.message),Object.assign(K,{_formatted:F(K,K.status)}))}}function l(){return new Date().toISOString().split("T")[0]}function f(u){return u?u.split("T")[0]:""}function o(u,k="info",c=3e3){let A=document.querySelector(".toast-container");A||(A=document.createElement("div"),A.className="toast-container",document.body.appendChild(A));const oe=document.createElement("div");oe.className=`toast toast-${k}`,oe.textContent=u,A.appendChild(oe),setTimeout(()=>{oe.classList.add("leaving"),setTimeout(()=>oe.remove(),300)},c)}function S(u,k=300){let c;return function(...A){clearTimeout(c),c=setTimeout(()=>u.apply(this,A),k)}}function w(u,k=300){let c=!1;return function(...A){c||(u.apply(this,A),c=!0,setTimeout(()=>{c=!1},k))}}async function E(u,k=3e3,c=""){const A=new Promise((oe,Y)=>setTimeout(()=>Y(new Error("timeout")),k));try{return await Promise.race([u,A])}catch(oe){console.warn(`[timeout] ${c||"task"} failed:`,oe.message)}}const x=new Map;function C(){return x.clear(),!0}function O(u,k){if(!u||typeof k!="function")return Promise.reject(new Error("bad dedupe args"));if(x.has(u))return x.get(u);const c=Promise.resolve().then(k).finally(()=>{x.delete(u)});return x.set(u,c),c}let D=0;function d(){return D=0,!0}function i(){return D}async function h(u){D++;try{return await u()}finally{D--}}function F(u,k){if(!u)return"请求失败";if(u&&typeof u=="object"&&u.detail)return String(u.detail);if(typeof u=="string"&&u)return u;if(u&&u.message){const c=String(u.message);return/Failed to fetch|fetch failed|networkerror/i.test(c)?"网络连接失败，请检查网络后重试":c}return k?"请求失败（HTTP "+k+"）":"请求失败"}function B(u,k){if(u===k)return!0;try{return JSON.stringify(u)===JSON.stringify(k)}catch{return!1}}function I(u,k,c){const A=(u||"GET").toUpperCase();let oe="";if(c)try{const Y={};Object.keys(c).sort().forEach(q=>{Y[q]=c[q]}),oe=JSON.stringify(Y)}catch{oe=""}return A+"|"+k+"|"+oe}class W{constructor(){this._map=new Map,this._exp=new Map}get(k){const c=this._exp.get(k);if(c!=null){if(Date.now()>c){this.delete(k);return}return this._map.get(k)}}set(k,c,A){return this._map.set(k,c),this._exp.set(k,Date.now()+(A>0?A:-1)),c}delete(k){this._map.delete(k),this._exp.delete(k)}clear(){this._map.clear(),this._exp.clear()}has(k){return this.get(k)!==void 0}get size(){return this._map.size}}function J(u){const k=new W,c=u!=null&&u>0?u:15e3;return{store:k,defaultTtl:c,get:A=>k.get(A),set:(A,oe,Y)=>k.set(A,oe,Y??c),delete:A=>k.delete(A),clear:()=>k.clear(),size:()=>k.size}}const N=new Set;async function z(u){const k=u&&u.cache,c=u&&u.key,A=u&&(u.fetchFn||u.fetcher),oe=u&&u.ttl;if(!k||!c||typeof A!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(N.has(c))return{ok:!1,changed:!1,skipped:!0,fresh:null};N.add(c);try{const Y=k.get(c);let q;try{q=await A()}catch(ie){return u.onError&&u.onError(ie),{ok:!1,changed:!1,fresh:null}}const K=Y!==void 0&&!B(Y,q);return k.set(c,q,oe),u.apply&&u.apply(q,Y),Y!==void 0&&(K?u.onChanged&&u.onChanged(q,Y):u.onUnchanged&&u.onUnchanged(q,Y)),{ok:!0,changed:K,fresh:q}}finally{N.delete(c)}}const j=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function $(u,k={}){if(u==null)return"";const c=k&&k.allow||j,A=new Set(c.map(K=>String(K).toUpperCase()));let oe;try{oe=new DOMParser().parseFromString(String(u),"text/html")}catch{return String(u).replace(/[<>&]/g,ie=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[ie])}const Y=oe.body||oe;function q(K){Array.from(K.childNodes).forEach(ie=>{if(ie.nodeType===1){const me=String(ie.tagName).toUpperCase();if(A.has(me))Array.from(ie.attributes).forEach(Ce=>{const U=Ce.name.toLowerCase(),de=(Ce.value||"").trim().toLowerCase();(U.startsWith("on")||(U==="href"||U==="src"||U==="xlink:href")&&de.startsWith("javascript:")||U==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(de))&&ie.removeAttribute(Ce.name),U==="href"&&!/^(https?:|mailto:|#|\/)/.test(de)&&ie.removeAttribute("href")}),me==="A"&&ie.setAttribute("rel","noopener noreferrer"),q(ie);else{const Ce=ie.parentNode;for(;ie.firstChild;)Ce.insertBefore(ie.firstChild,ie);Ce.removeChild(ie)}}else if(ie.nodeType!==3){if(ie.nodeType===8)ie.parentNode&&ie.parentNode.removeChild(ie);else if(ie.nodeType===4){const me=oe.createTextNode(ie.nodeValue||"");ie.parentNode&&ie.parentNode.replaceChild(me,ie)}}})}return q(Y),Y.innerHTML}const Z="/api/openapi",ne="/api/market/ws/quotes",ee=1,M=2.5,s="数据不可达",y="实时不可用，不刷新";function n(){const u=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",k=typeof location<"u"?location.host:"localhost:8001";return u+"//"+k+ne}function p(u,k){if(!u)return null;const c=k||{riseSpeed:ee,volumeRatio:M},A=c.riseSpeed!=null?c.riseSpeed:ee,oe=c.volumeRatio!=null?c.volumeRatio:M,Y=parseFloat(u.rise_speed);if(!isNaN(Y)&&Math.abs(Y)>A)return Y>0?"涨速预警":"跌速预警";const q=parseFloat(u.volume_ratio);return!isNaN(q)&&q>oe?"放量预警":null}function X(u){const k=Number(u);return u==null||isNaN(k)?null:k}const b={apiFetch:r,withAuthHeaders:R,getToday:l,formatDate:f,withTimeout:E,showToast:o,debounce:S,throttle:w,resetInFlight:C,dedupeRequest:O,resetLoading:d,loadingCount:i,withLoading:h,formatApiError:F,jsonEquals:B,makeCacheKey:I,CacheStore:W,createTtlCache:J,silentRefresh:z,sanitizeHtml:$,OPENAPI_ROUTE_BASE:Z,REALTIME_WS_PATH:ne,WARN_RISE_SPEED_THRESHOLD:ee,WARN_VOLUME_RATIO_THRESHOLD:M,REALTIME_DEGRADED_TEXT:s,REALTIME_FALLBACK_TEXT:y,buildRealtimeWsUrl:n,checkQuoteWarning:p,quoteFmt:{price:function(u){const k=X(u);return k===null?"--":k.toFixed(2)},pct:function(u){const k=X(u);return k===null?"--":(k>0?"+":"")+k.toFixed(2)+"%"},num:function(u){const k=X(u);return k===null?"--":k.toFixed(2)},color:function(u){const k=u?u.change_pct:null,c=X(k);return c===null?"":c>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=b),typeof Ae<"u"&&Ae.exports&&(Ae.exports=b)})();(function(a,t){typeof Ae=="object"&&Ae.exports?Ae.exports=t():a.QuantTabsCore=t()})(typeof self<"u"?self:void 0,function(){var a=8;function t(S,w){return S+"/"+w}function g(S,w,E,x){var C=S[w]||[],O=C.findIndex(function(i){return i.subPage===E});if(O!==-1)return{groups:S,activeKey:t(w,E)};var D=C.concat([{subPage:E,title:x}]);D.length>a&&(D=v(D));var d=Object.assign({},S,e({},w,D));return{groups:d,activeKey:t(w,E)}}function e(S,w,E){return S[w]=E,S}function v(S){if(S.length<=a)return S;var w=S.length>1?1:0;return S.filter(function(E,x){return x!==w})}function m(S,w,E,x){var C=S[w]||[],O=C.findIndex(function(h){return h.subPage===E});if(O===-1)return{groups:S,nextActive:null};var D=C.filter(function(h){return h.subPage!==E}),d=Object.assign({},S,e({},w,D)),i=null;return E===x&&(D[O]?i=D[O].subPage:D[O-1]?i=D[O-1].subPage:i=null),{groups:d,nextActive:i}}function R(S){return S&&S.length?S[0]:""}function r(S,w){return S[w]||[]}function l(S,w,E){var x=S[w]||[],C=x.filter(function(D){return D.subPage===E}),O=Object.assign({},S,e({},w,C));return{groups:O,activeKey:C.length?t(w,C[0].subPage):null}}function f(S,w){var E=Object.assign({},S,e({},w,[]));return{groups:E,activeKey:null}}function o(S,w,E,x){var C=(S[w]||[]).slice();if(E<0||E>=C.length)return{groups:S};var O=C.splice(E,1)[0];return C.splice(Math.max(0,Math.min(x,C.length)),0,O),{groups:Object.assign({},S,e({},w,C))}}return{MAX_TABS:a,openTab:g,closeTab:m,getDefaultTab:R,tabsOf:r,evictOldest:v,closeOthers:l,closeAll:f,reorder:o,keyOf:t}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var cl=typeof Ae=="object"&&Ae.exports?Ae.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;cl&&(window.__quantModules.tabsCore=cl)}(function(a,t){typeof Ae=="object"&&Ae.exports?Ae.exports=t():a.QuantNavModeCore=t()})(typeof self<"u"?self:void 0,function(){var a=["subnav","tree","toptab"],t="toptab",g="nav_mode";function e(o){return a.indexOf(o)!==-1?o:t}function v(o){return e(o)==="subnav"}function m(o){return e(o)==="tree"}function R(o){return e(o)==="toptab"}function r(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function l(){var o=r(),S=t;if(o)try{S=e(o.getItem(g))}catch{}return{navMode:S}}function f(o){var S=r();if(!(!S||!o))try{o.navMode!==void 0&&S.setItem(g,e(o.navMode))}catch{}}return{NAV_MODES:a,DEFAULT_NAV_MODE:t,normalizeNavMode:e,subnavVisible:v,treeChildrenVisible:m,topTabsVisible:R,readPrefs:l,writePrefs:f}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var dl=typeof Ae=="object"&&Ae.exports?Ae.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;dl&&(window.__quantModules.navModeCore=dl)}(function(){function t(n,p){if(!Array.isArray(n)||n.length<=p)return n;const X=[],T=n.length/p*2;for(let b=0;b<n.length;b+=T){const u=Math.floor(b),k=Math.min(n.length,Math.ceil(b+T));let c=1/0,A=-1,oe=-1/0,Y=-1;for(let q=u;q<k;q++){const K=n[q];if(!K)continue;const ie=K[3]!=null?Number(K[3]):1/0,me=K[4]!=null?Number(K[4]):-1/0;ie<c&&(c=ie,A=q),me>oe&&(oe=me,Y=q)}A>=0&&X.push(n[A]),Y>=0&&Y!==A&&X.push(n[Y])}return X}let g=null;function e(){return typeof echarts<"u"?Promise.resolve():(g||(g=new Promise(function(n,p){const X=document.createElement("script");X.src="/static/lib/echarts.min.js",X.async=!0,X.onload=function(){typeof echarts<"u"?n():p(new Error("echarts 加载后未定义"))},X.onerror=function(){p(new Error("echarts.min.js 加载失败"))},document.head.appendChild(X)})),g)}function v(){const n=getComputedStyle(document.documentElement);return{primary:n.getPropertyValue("--primary-color").trim()||"#2563eb",up:n.getPropertyValue("--color-up").trim()||"#43e97b",down:n.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:n.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:n.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const m=n=>{try{return typeof getComputedStyle!="function"||typeof document>"u"?"":(getComputedStyle(document.documentElement).getPropertyValue(n)||"").trim()}catch{return""}};function R(){return{up:m("--color-up")||"#E63946",down:m("--color-down")||"#2E7D32",neutral:m("--color-neutral")||"#43a047",accent:m("--color-accent")||"#F59E0B",risk:m("--color-danger")||"#C62828",warn:m("--color-warning")||"#FF9800",success:m("--color-success")||"#4CAF50",primary:m("--qc-primary-600")||"#b8922a",grid:m("--chart-split")||"#e2e8f0",axis:m("--chart-axis")||"#cbd5e1",bg:m("--chart-bg")||"transparent",series:[m("--qc-primary-600")||"#b8922a",m("--qc-primary-500")||"#c49b2e",m("--qc-primary-700")||"#8f6f1f",m("--qc-primary-400")||"#d4b352",m("--color-up")||"#E63946",m("--color-down")||"#2E7D32",m("--color-accent")||"#F59E0B",m("--qc-neutral-400")||"#b8ae9f"]}}function r(n,p,X,T=!1,b=!1){if(!p||p.length===0)return;p.length>2e3&&(p=t(p,2e3));const u=p.map(se=>typeof se[0]=="string"&&se[0].indexOf("-")>=0?se[0]:se[0].slice(0,4)+"-"+se[0].slice(4,6)+"-"+se[0].slice(6,8)),k=v(),c={ma5:m("--color-accent")||"#F59E0B",ma10:m("--color-primary")||"#3B82F6",ma20:m("--color-warning")||"#8B5CF6",ma60:m("--color-success")||"#10B981"},A=p.map(se=>[se[1],se[2],se[3],se[4]]),oe=p.map(se=>se[5]),Y=p.map(se=>se[6]),q=p.map(se=>se[7]),K=p.map(se=>se[8]),ie=p.map(se=>se[9]),me=p.map(se=>se[10]),U=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",de=k.borderLight,Re={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:k.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:U,borderColor:de,textStyle:{color:k.textSecondary,fontSize:12},formatter:function(se){if(!se||!se.length)return"";const ge=se[0].dataIndex,Te=p[ge];if(!Te)return"";const pe=n.getOption(),ke=pe.legend&&pe.legend[0]&&pe.legend[0].selected||{},Ee=Ne=>ke[Ne]!==!1,re=Ne=>Ne==null||isNaN(Ne)?"--":Number(Ne).toFixed(2),ae=Ne=>Ne==null||isNaN(Ne)?"--":(Number(Ne)/1e4).toFixed(2)+"万手",he=['<div style="font-weight:600;color:'+k.textSecondary+';">'+u[ge]+"</div>"];return he.push("开: "+re(Te[1])+"　收: "+re(Te[2])),he.push("低: "+re(Te[3])+"　高: "+re(Te[4])),he.push("成交量: "+ae(Te[5])),Te[6]!=null&&Ee("MA5")&&he.push("MA5: "+re(Te[6])),Te[7]!=null&&Ee("MA10")&&he.push("MA10: "+re(Te[7])),Te[8]!=null&&Ee("MA20")&&he.push("MA20: "+re(Te[8])),Te[9]!=null&&Ee("MA60")&&he.push("MA60: "+re(Te[9])),Te[10]!=null&&he.push("VOL_MA5: "+ae(Te[10])),he.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:b?0:8,textStyle:{color:k.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:b?30:40,height:b?"48%":"52%"},{left:56,right:16,top:b?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:u,boundaryGap:!0,axisLine:{lineStyle:{color:de}},axisLabel:{color:k.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:u,axisLabel:{show:!1},axisLine:{lineStyle:{color:de}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:de}},axisLabel:{color:k.textSecondary,fontSize:11,formatter:function(se){const ge=Math.round(se*100)/100;return ge%1===0?String(Math.round(ge)):ge.toFixed(2)}},splitLine:{lineStyle:{color:de,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:de}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,p.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:de,textStyle:{color:k.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:A,itemStyle:{color:k.up,color0:k.down,borderColor:k.up,borderColor0:k.down}},{name:"MA5",type:"line",data:Y,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:c.ma5}},{name:"MA10",type:"line",data:q,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:c.ma10}},{name:"MA20",type:"line",data:K,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:c.ma20}},{name:"MA60",type:"line",data:ie,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:c.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:oe,itemStyle:{color:function(se){const ge=se.dataIndex;return p[ge][1]>=p[ge][2]?k.up:k.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:me,smooth:!0,symbol:"none",lineStyle:{width:1,color:c.ma5,type:"dashed"}}]};n.setOption(Re,!0)}const l=new Map;function f(n){return l.has(n)||l.set(n,{chart:null,cache:null}),l.get(n)}async function o(n,p,X,T=!1,b={}){await e();const u=f(n);let k=document.getElementById(n);if(!k)for(let c=0;c<16&&(await new Promise(A=>setTimeout(A,50)),k=document.getElementById(n),!k);c++);if(!k)throw new Error("无法找到图表容器: "+n);if(k.offsetWidth<50&&(k.style.minWidth="600px",k.style.minHeight="300px"),!u.chart||u.chart.isDisposed()||u.chart.getDom()!==k){if(u.chart)try{u.chart.dispose()}catch{}u.chart=echarts.init(k),u.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const c=b.onLegend;typeof c=="function"&&u.chart.on("legendselectchanged",A=>{A&&A.selected&&c(A.selected)})}return r(u.chart,p,X,T,!!b.isMobile),u.cache={data:p,period:X,isIndex:T,isMobile:!!b.isMobile},u.chart}function S(n){const p=l.get(n);p&&p.chart&&(p.chart.dispose(),p.chart=null,p.cache=null)}function w(n){const p=l.get(n);p&&p.chart&&p.chart.resize()}function E(n,p){const X=l.get(n),T=X&&X.chart;if(T)if(p<=0)T.dispatchAction({type:"dataZoom",start:0,end:100});else{const k=Math.max(0,(60-p)/60*100);T.dispatchAction({type:"dataZoom",start:Math.round(k),end:100})}}function x(n){var T,b,u;const p=l.get(n);if(!p||!p.chart||!p.cache||p.chart.isDisposed())return;const X=((u=(b=(T=p.chart.getOption())==null?void 0:T.legend)==null?void 0:b[0])==null?void 0:u.selected)||null;r(p.chart,p.cache.data,p.cache.period,p.cache.isIndex,p.cache.isMobile),X&&p.chart.setOption({legend:{selected:X}})}function C(n){const p=l.get(n);return p&&p.chart}const O=new Map;function D(n){return O.has(n)||O.set(n,{chart:null,cache:null}),O.get(n)}function d(n,p,X={}){return e().then(function(){const T=D(n),b=document.getElementById(n);if(!b)throw new Error("无法找到图表容器: "+n);if(b.offsetWidth<50&&(b.style.minWidth="600px",b.style.minHeight="300px"),T.chart&&T.chart.getDom&&T.chart.getDom()!==b){try{T.chart.dispose()}catch{}T.chart=null}T.chart||(T.chart=echarts.init(b),T.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),T.resizeBound||(T.resizeBound=!0,window.addEventListener("resize",function(){T.chart&&!T.chart.isDisposed()&&T.chart.resize()})));const u=typeof p=="function"?p():p;return T.chart.setOption(u,!0),T.cache={buildOption:p,key:X.key||""},T.chart})}function i(n){var b,u,k;const p=O.get(n);if(!p||!p.chart||!p.cache||p.chart.isDisposed())return;const X=((k=(u=(b=p.chart.getOption())==null?void 0:b.legend)==null?void 0:u[0])==null?void 0:k.selected)||null,T=typeof p.cache.buildOption=="function"?p.cache.buildOption():p.cache.buildOption;p.chart.setOption(T,!0),X&&T&&T.legend&&T.legend.selected&&p.chart.setOption({legend:{selected:X}})}function h(n){const p=O.get(n);p&&p.chart&&(p.chart.dispose(),p.chart=null,p.cache=null)}function F(n){const p=O.get(n);p&&p.chart&&p.chart.resize()}const B=new Map;function I(n){return B.has(n)||B.set(n,{chart:null,cache:null}),B.get(n)}function W(n,p,X={}){return e().then(function(){const T=I(n),b=document.getElementById(n);if(!b)return null;if(b.offsetWidth<50&&(b.style.minWidth="600px",b.style.minHeight="300px"),T.chart&&T.chart.getDom&&T.chart.getDom()!==b){try{T.chart.dispose()}catch{}T.chart=null}T.chart||(T.chart=echarts.init(b),T.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),T.resizeBound||(T.resizeBound=!0,window.addEventListener("resize",function(){T.chart&&!T.chart.isDisposed()&&T.chart.resize()})));const u=typeof p=="function"?p():p;return T.chart.setOption(u,!0),T.cache={buildOption:p,key:X.key||""},T.chart})}function J(n){const p=B.get(n);if(!p||!p.chart||!p.cache||p.chart.isDisposed())return;const X=typeof p.cache.buildOption=="function"?p.cache.buildOption():p.cache.buildOption;p.chart.setOption(X,!0)}function N(n){const p=B.get(n);p&&p.chart&&(p.chart.dispose(),p.chart=null,p.cache=null)}function z(n){const p=B.get(n);p&&p.chart&&p.chart.resize()}const j=W,$=J,Z=N,ne=z;function ee(n,p,X,T){T=T||{};const b=T.drawdownColor||m("--state-danger-solid")||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[T.navLabel||"净值",T.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:X||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:T.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:T.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:T.navLabel||"净值",type:"line",data:n||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:T.ddLabel||"回撤",type:"line",yAxisIndex:1,data:p||[],showSymbol:!1,areaStyle:{opacity:.25,color:b},lineStyle:{color:b,type:"solid",width:1.5}}]}}function M(n,p){p=p||{};const X=p.bandColor||m("--state-info-solid")||"#1976d2",T=n&&n.dates||[],b=n&&n.median||[],u=n&&n.q25||[],k=n&&n.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[p.medianLabel||"中位IC",p.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:T,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:p.medianLabel||"中位IC",type:"line",data:b,showSymbol:!1,lineStyle:{width:2,color:X}},{name:p.bandLabel||"25–75分位",type:"line",data:u,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:X,opacity:.12}},{name:"_bandH",type:"line",data:k.map(function(c,A){return c-(u[A]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:X,opacity:.12}}]}}function s(n,p){p=p||{};const X=p.color||m("--color-ai")||"#7c3aed",T=n&&n.dates||[],b=n&&n.value||[],u=n&&n.upper||[],k=n&&n.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[p.valueLabel||"情绪",p.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:T,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:p.valueLabel||"情绪",type:"line",data:b,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:X}},{name:p.bandLabel||"过热/冰点带",type:"line",data:u,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:X,opacity:.1}},{name:"_bandL",type:"line",data:k.map(function(c,A){return(u[A]||0)-c}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:X,opacity:.1}}]}}const y={renderKlineChart:r,renderKlineTo:o,disposeKline:S,resizeKline:w,zoomKline:E,redrawKline:x,getKlineChart:C,renderBacktestTo:d,redrawBacktest:i,disposeBacktest:h,resizeBacktest:F,renderPortfolioTo:W,redrawPortfolio:J,disposePortfolio:N,resizePortfolio:z,renderSimpleChartTo:j,redrawSimpleChart:$,disposeSimpleChart:Z,resizeSimpleChart:ne,buildNavDrawdownOption:ee,buildIcBandOption:M,buildSentimentBandOption:s,downsampleSeries:t,ensureEcharts:e,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:R,init(){return{renderKlineChart:r,renderKlineTo:o,disposeKline:S,resizeKline:w,zoomKline:E,redrawKline:x,getKlineChart:C,renderBacktestTo:d,redrawBacktest:i,disposeBacktest:h,resizeBacktest:F,renderPortfolioTo:W,redrawPortfolio:J,disposePortfolio:N,resizePortfolio:z,renderSimpleChartTo:j,redrawSimpleChart:$,disposeSimpleChart:Z,resizeSimpleChart:ne,buildNavDrawdownOption:ee,buildIcBandOption:M,buildSentimentBandOption:s,downsampleSeries:t,ensureEcharts:e,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:R}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=y),typeof Ae<"u"&&Ae.exports&&(Ae.exports={downsampleSeries:t,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:ee,buildIcBandOption:M,buildSentimentBandOption:s})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:t,computed:g}=Vue,{configChanged:e,consensus:v}=a,m=t(null),R=t(""),r=t(null),l=t([]),f=t([]),o=t([]),S=t([]),w=t([]),E=t([]),x=t({});function C(_e){const qe=w.value.indexOf(_e);qe>=0?w.value.splice(qe,1):w.value.push(_e)}const O=t("date"),D=t([]),d=t(!1),i=t(!1),h=t("watchlist"),F=t([]),B=t({vendors:[]}),I=t(""),W=t(!1),J=t(!1);function N(_e){if(!_e)return"";const qe=String(_e),je=qe.length;if(je<=4)return qe[0]+"*".repeat(je-1);const Oe=je<=8?2:4;return qe.slice(0,Oe)+"*".repeat(je-Oe-Oe)+qe.slice(-Oe)}async function z(_e){let qe;try{qe=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Oe=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:qe,target:_e})})).json();if(Oe.success)return Oe.secret;ElementPlus.ElMessage.error(Oe.message||"查看失败")}catch(je){ElementPlus.ElMessage.error("查看失败: "+je.message)}return null}async function j(_e){if(_e._revealed){_e._revealed=!1,_e._masked=N(_e.api_key);return}const qe=await z("ai:"+_e.vendor_key);qe!==null&&(_e.api_key=qe,_e._revealed=!0)}async function $(_e){if(_e._editing){_e._editing=!1,_e._revealed=!1,_e.api_key&&(_e._masked=N(_e.api_key));return}_e._editing=!0;try{const je=await(await fetch("/api/ai/models?full=1")).json();if(je.success){const Oe=(je.data.vendors||[]).find(Xe=>Xe.vendor_key===_e.vendor_key);Oe&&(_e.api_key=Oe.api_key||"")}else je.message&&ElementPlus.ElMessage.error(String(je.message))}catch(qe){ElementPlus.ElMessage.error("解锁失败: "+qe.message)}}function Z(_e){const{_fetching:qe,_testing:je,_revealed:Oe,_masked:Xe,_editing:Qe,...Ge}=_e;return Qe||(Ge.api_key=""),Ge.models=(_e.models||[]).map(it=>{const{_testing:bt,testResult:mt,...At}=it;return At}),Ge}async function ne(){var _e;try{I.value="";const qe=await fetch("/api/ai/models");if(qe.status===401){I.value="请先登录后再查看模型配置";return}if(!qe.ok){I.value=`服务器错误 (${qe.status})`;return}const je=await qe.json();je.success?(F.value=(((_e=je.data)==null?void 0:_e.vendors)||[]).map(Oe=>({...Oe,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:Oe.api_key||"",models:(Oe.models||[]).map(Xe=>({...Xe,_testing:!1,testResult:void 0}))})),I.value=""):I.value=je.message||"加载失败"}catch(qe){I.value="网络错误: "+qe.message}}async function ee(){try{const qe=await(await fetch("/api/ai/catalog")).json();qe.success&&qe.data&&(B.value=qe.data)}catch(_e){console.warn("AI 厂商目录加载失败",_e)}}async function M(){J.value=!0;try{const je=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:F.value.map(Z)})})).json();je.success?(F.value.forEach(Oe=>{Oe._editing=!1,Oe._revealed=!1,Oe.api_key&&(Oe._masked=N(Oe.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(je.message||"保存失败")}catch(_e){ElementPlus.ElMessage.error("保存失败: "+_e.message)}J.value=!1}async function s(_e,qe){qe._testing=!0;try{const Oe=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:_e.vendor_key,model:qe.name,base_url:_e.base_url,api_key:_e.api_key,timeout:_e.timeout})});qe.testResult=await Oe.json()}catch(je){qe.testResult={success:!1,message:je.message}}qe._testing=!1}async function y(){W.value=!0;for(const _e of F.value)for(const qe of _e.models||[])_e.api_key?await s(_e,qe):qe.testResult={success:!1,message:"未配置 API Key"};W.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function n(_e){_e._fetching=!0;try{const Oe=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:_e.vendor_key,base_url:_e.base_url,api_key:_e.api_key,timeout:_e.timeout})})).json();if(Oe.success&&Array.isArray(Oe.models)){const Xe=new Set((_e.models||[]).map(Qe=>Qe.name));for(const Qe of Oe.models)Xe.has(Qe)||_e.models.push({name:Qe,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${Oe.models.length} 个模型`)}else ElementPlus.ElMessage.error(Oe.message||"获取模型列表失败")}catch(qe){ElementPlus.ElMessage.error("获取模型列表失败: "+qe.message)}_e._fetching=!1}function p(_e){const qe=(B.value.vendors||[]).find(je=>je.vendor_key===_e);if(qe){if(F.value.some(je=>je.vendor_key===_e)){ElementPlus.ElMessage.warning("该厂商已存在");return}F.value.push({vendor_key:qe.vendor_key,name:qe.name,kind:qe.kind,base_url:qe.base_url,api_key:"",timeout:60,tier:qe.tier||"",website:qe.website||"",locked:!!qe.locked,models:(qe.models||[]).map(je=>({name:je,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${qe.name}」，配置 API Key 后保存生效`)}}function X(){F.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function T(_e){_e.models||(_e.models=[]),_e.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function b(_e,qe){const je=_e.models[qe];if(!(!je||je.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(je.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}_e.models.splice(qe,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function u(_e){if(_e.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(_e.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const qe=F.value.indexOf(_e);qe>=0&&F.value.splice(qe,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const k=t({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),c=t(!1),A=t(""),oe=t(0),Y=t(""),q=t(!1),K=t(""),ie=t(!1),me=t(0),Ce=t(0),U=t(""),de=t({}),Re=t({}),se=t({}),ge=t({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),Te=t("manual"),pe=g(()=>{const _e={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return _e[ge.value.provider]||_e.custom}),ke={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function Ee(_e){if(_e==="manual")return;const qe=ke[_e];qe&&(ge.value.endpoint=qe.endpoint,ge.value.model=qe.model,e.value=!0)}function re(){if(e.value=!0,ge.value.provider!=="codingplan"&&ge.value.provider!=="custom"){const _e=pe.value;_e&&(ge.value.endpoint=_e.endpoint,ge.value.model=_e.model)}else ge.value.provider==="codingplan"&&(ge.value.endpoint||(ge.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),ge.value.model||(ge.value.model="ark-code-latest"))}let ae=null;const he=8;async function Ne(){ae&&(ae.abort(),ae=null);const qe=(v.value||[]).filter(Ge=>Ge.status==="new"||Ge.status==="out").filter(Ge=>!x.value[Ge.code]);if(qe.length===0)return;const je=new AbortController;ae=je;let Oe=0;const Xe=async()=>{for(;Oe<qe.length;){const Ge=qe[Oe++];try{const bt=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:Ge.code,stock_name:Ge.name,event_type:Ge.status==="new"?"enter":"exit"}),signal:je.signal})).json();bt.success&&bt.signal&&(x.value={...x.value,[Ge.code]:bt.signal})}catch(it){if(it.name==="AbortError")return}}},Qe=Array.from({length:Math.min(he,qe.length)},()=>Xe());await Promise.all(Qe)}function Fe(){ae&&(ae.abort(),ae=null)}let We=0;async function qt(_e){const qe=++We;try{const Oe=await(await fetch(`/api/ai/history/last/${encodeURIComponent(_e)}`)).json();if(qe!==We)return;Oe.success&&Oe.data&&(m.value=Oe.data,R.value=Oe.data.evaluate_time,ht(_e,Oe.data),Et(Oe.data))}catch{}}async function ht(_e,qe){var je,Oe;try{const Qe=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(_e)}&limit=2`)).json();if(Qe.success&&Qe.data&&Qe.data.length>=2){const Ge=Qe.data[1],it=((je=qe.result)==null?void 0:je.total_score)||0,bt=((Oe=Ge.result)==null?void 0:Oe.total_score)||0;it>0&&bt>0&&(r.value={prevScore:bt,currScore:it,diff:it-bt})}}catch(Xe){console.warn("[refreshStrategyData] autoPoll failed:",Xe)}}function Et(_e){var Xe;const qe=((Xe=_e.result)==null?void 0:Xe.dimensions)||{},je=[],Oe=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Qe of Oe){const Ge=qe[Qe.key];Ge!==void 0&&je.push({icon:Ge>=Qe.good?"check-circle-2":Ge>=Qe.warn?"alert-triangle":"x-circle",label:`${Qe.label} ${Math.round(Ge)}分`})}l.value=je}return{aiResult:m,lastEvalTime:R,evalHistoryComparison:r,checklistItems:l,aiHistory:f,selectedHistoryIds:o,expandedDates:S,expandedMonths:w,expandedStocks:E,poolSignals:x,toggleMonthExpand:C,aiHistoryView:O,selectedWatchlistCodes:D,showAutoEvaluateSettings:d,savingConfig:i,autoEvaluateScope:h,aiVendors:F,aiCatalog:B,aiModelsError:I,testingAllModels:W,savingAiModels:J,loadAiVendors:ne,loadAiCatalog:ee,saveAiVendors:M,saveAiModels:M,testVendorModel:s,testAllVendorModels:y,fetchVendorModels:n,addVendorFromCatalog:p,addCustomVendor:X,addVendorModel:T,removeVendorModel:b,removeVendor:u,toggleVendorKeyReveal:j,toggleVendorEdit:$,autoEvaluateConfig:k,aiLoading:c,aiEvalStage:A,aiEvalElapsed:oe,aiEvalError:Y,showBatchEvaluate:q,batchStocks:K,batchRunning:ie,batchTotal:me,batchCompleted:Ce,batchCurrent:U,batchStatuses:de,batchResults:Re,batchEvalErrors:se,aiConfig:ge,selectedPreset:Te,providerInfo:pe,aiPresets:ke,applyPreset:Ee,onProviderChange:re,fetchPoolSignals:Ne,cancelPoolSignals:Fe,loadLastEvaluation:qt}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:t,computed:g,watch:e}=Vue,{configChanged:v,aiConfig:m,aiLoading:R,feishuConfig:r,currentTheme:l,changeTheme:f,autoEvaluateConfig:o,currentUser:S,strategyFilter:w,applyTheme:E,dashboardData:x,lastRefreshTime:C,saveAiModels:O}=a,D=function(re){const ae=window.__quantModules&&window.__quantModules.themes;return ae&&ae.applyLegacyTheme?ae.applyLegacyTheme(re):E(re)},d=t(!1),i=t(!1),h=t(null),F=t(null),B=t(null),I=t(null),W=t({token:"",endpoint:"http://api.tushare.pro",timeout:30}),J=t("disconnected"),N=t({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),z=t({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),j=t(!1),$=t(null),Z=t(null),ne=t("pending"),ee=t("..."),M=t(!1),s=t({api_limit:600}),y=t(!1),n=t(!1);async function p(){try{const ae=await(await fetch("/api/system/rate-limit")).json();ae.success&&(s.value=ae.data)}catch(re){console.warn("loadRateLimit failed:",re)}}async function X(){n.value=!0;try{const ae=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.value)})).json();ae.success?(y.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(ae.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{n.value=!1}}e(()=>[m.value.provider,m.value.apiKey,m.value.endpoint,m.value.model],()=>{v.value=!0},{deep:!0});async function T(){d.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(m.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m.value)})).json()).success?(v.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(re){localStorage.setItem("quant_ai_config",JSON.stringify(m.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",re)}finally{d.value=!1}}async function b(){R.value=!0;try{const ae=await(await fetch("/api/ai/test")).json();ae.success?ElementPlus.ElMessage.success(ae.message||"API连接正常"):ElementPlus.ElMessage.error(ae.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{R.value=!1}}function u(){const re={ai:m.value,feishu:r.value,theme:l.value,export_time:new Date().toISOString()},ae=new Blob([JSON.stringify(re,null,2)],{type:"application/json"}),he=URL.createObjectURL(ae),Ne=document.createElement("a");Ne.href=he,Ne.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Ne.click(),URL.revokeObjectURL(he),ElementPlus.ElMessage.success("配置已导出")}function k(re){const ae=re.target.files[0];if(!ae)return;const he=new FileReader;he.onload=async Ne=>{try{const Fe=JSON.parse(Ne.target.result);Fe.ai&&(m.value={...m.value,...Fe.ai},await T()),Fe.feishu&&(Object.assign(r.value,Fe.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Fe.feishu)})),Fe.theme&&(l.value=Fe.theme,f(Fe.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},he.readAsText(ae),re.target.value=""}async function c(){d.value=!0;const re=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:W.value,feishu:r.value,ai:m.value,rate_limit:s.value,auto_evaluate:o.value,theme:l.value}})}).then(Fe=>["userConfig",Fe.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(W.value)}).then(Fe=>["tushare",Fe.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:N.value})}).then(Fe=>["datasource",Fe.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r.value)}).then(Fe=>["feishu",Fe.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(m.value)}).then(Fe=>["ai",Fe.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.value)}).then(Fe=>["rateLimit",Fe.ok]),O().then(()=>["aiModels",!0],()=>["aiModels",!1])],ae=await Promise.allSettled(re),he=ae.filter(Fe=>Fe.status==="fulfilled"&&Fe.value[1]).length,Ne=ae.filter(Fe=>Fe.status==="rejected"||Fe.status==="fulfilled"&&!Fe.value[1]).length;y.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(w.value.selected)),localStorage.setItem("quant_strategy_filter_mode",w.value.mode),S.value&&fetch(`/api/users/${S.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:l.value})}).catch(()=>{}),i.value=!1,h.value=new Date().toLocaleString("zh-CN"),d.value=!1,Ne>0&&console.error(`[saveAllConfig] ${he}/${he+Ne} 项保存成功，${Ne} 项失败`)}async function A(){try{const ae=await(await fetch("/api/user_config/config")).json();if(ae.success&&ae.config){const he=ae.config;he.tushare&&(W.value={...W.value,...he.tushare}),he.feishu&&(r.value={...r.value,...he.feishu}),he.ai&&(m.value={...m.value,...he.ai}),he.rate_limit&&(s.value={...s.value,...he.rate_limit}),he.auto_evaluate&&(o.value={...o.value,...he.auto_evaluate}),he.theme&&!localStorage.getItem("quant_theme")&&D(he.theme)}i.value=!1,y.value=!1}catch(re){console.error("[resetAllConfig] 重新加载配置失败:",re),i.value=!1}}async function oe(){J.value="testing";try{const ae=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(J.value=ae.success?"connected":"disconnected",ae.success){const he=ae.data_count?` (获取到 ${ae.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+he)}else ElementPlus.ElMessage.error(ae.message||"连接失败")}catch{J.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function Y(){try{const ae=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();J.value=ae.success?"connected":"disconnected"}catch{J.value="disconnected"}}async function q(){var re;j.value=!0;try{const he=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();he.success?($.value=parseInt(((re=he.message.match(/\d+/))==null?void 0:re[0])||"0"),ElementPlus.ElMessage.success(he.message)):ElementPlus.ElMessage.error(he.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{j.value=!1}}async function K(){try{const ae=await(await fetch("/api/market/tushare/config")).json();ae.success&&ae.config&&(W.value={...W.value,...ae.config})}catch(re){console.warn("loadTushareConfig failed:",re)}}function ie(re){if(!re)return"";const ae=String(re),he=ae.length;if(he<=4)return ae[0]+"*".repeat(he-1);const Ne=he<=8?2:4;return ae.slice(0,Ne)+"*".repeat(he-Ne-Ne)+ae.slice(-Ne)}async function me(re){let ae;try{ae=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ne=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:ae,target:re})})).json();if(Ne.success)return Ne.secret;ElementPlus.ElMessage.error(Ne.message||"查看失败")}catch(he){ElementPlus.ElMessage.error("查看失败: "+he.message)}return null}async function Ce(re){const ae=N.value[re];if(!ae)return;if(ae._revealed){ae._revealed=!1,ae._masked=ie(ae.token);return}const he=await me(re);he!==null&&(ae.token=he,ae._revealed=!0)}async function U(re){const ae=N.value[re];if(ae){if(ae._editing){ae._editing=!1,ae._revealed=!1,ae.token&&(ae._masked=ie(ae.token));return}ae._editing=!0;try{const he=await me(re);if(he===null){ae._editing=!1;return}ae.token=he,ae._revealed=!0}catch(he){ae._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+he.message)}}}async function de(){try{const ae=await(await fetch("/api/market/datasource/config")).json();if(ae.success&&ae.config&&ae.config.sources){const he=ae.config.sources,Ne=Fe=>{const We={...N.value[Fe],...he[Fe]||{}};return We._editing=!1,We._revealed=!1,We._masked=We.token||"",We.token="",We};N.value={sxsc_tushare:Ne("sxsc_tushare"),tushare:Ne("tushare"),akshare:{...N.value.akshare,...he.akshare||{}}}}try{const Ne=await(await fetch("/api/market/datasource/status")).json();if(Ne.success&&Ne.status)for(const[Fe,We]of Object.entries(Ne.status))z.value[Fe]=We.connected?"connected":"disconnected"}catch{}}catch(re){console.warn("loadDatasourceConfig failed:",re)}}async function Re(){try{const re={};for(const[ae,he]of Object.entries(N.value)){const{_revealed:Ne,_masked:Fe,_editing:We,...qt}=he;!We&&ae!=="akshare"&&(qt.token=""),re[ae]=qt}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:re})}),i.value=!0}catch(re){console.warn("saveDatasourceConfig failed:",re)}}async function se(re){z.value[re]="testing";try{const ae=N.value[re];ae&&ae._editing&&await Re();const Ne=await(await fetch(`/api/market/datasource/test/${re}`,{method:"POST"})).json();z.value[re]=Ne.success?"connected":"disconnected",Ne.success?ElementPlus.ElMessage.success(`${re} 连接成功`):ElementPlus.ElMessage.error(`${re}: ${Ne.message}`)}catch{z.value[re]="disconnected",ElementPlus.ElMessage.error(`${re} 连接失败`)}}async function ge(){try{const ae=await(await fetch("/api/feishu/config")).json();ae&&typeof ae=="object"&&(r.value={...r.value,...ae},F.value=JSON.parse(JSON.stringify(r.value)))}catch(re){console.warn("loadFeishuConfig failed:",re)}}async function Te(){try{const ae=await(await fetch("/api/ai/config")).json();if(ae.success&&ae.data)m.value={...m.value,...ae.data};else{const he=localStorage.getItem("quant_ai_config");he&&(m.value=JSON.parse(he))}}catch{const ae=localStorage.getItem("quant_ai_config");ae&&(m.value=JSON.parse(ae))}}async function pe(){try{const ae=await(await fetch("/api/user_config/config")).json();if(ae.success&&ae.config){const he=ae.config;he.tushare&&(W.value={...W.value,...he.tushare}),he.datasource&&he.datasource.sources&&(N.value={sxsc_tushare:{...N.value.sxsc_tushare,...he.datasource.sources.sxsc_tushare||{}},tushare:{...N.value.tushare,...he.datasource.sources.tushare||{}},akshare:{...N.value.akshare,...he.datasource.sources.akshare||{}}}),he.feishu&&(r.value={...r.value,...he.feishu},F.value=JSON.parse(JSON.stringify(r.value))),he.ai&&(m.value={...m.value,...he.ai}),he.rate_limit&&(s.value={...s.value,...he.rate_limit}),he.theme&&!localStorage.getItem("quant_theme")&&D(he.theme),he.auto_evaluate&&(o.value={...o.value,...he.auto_evaluate})}}catch(re){console.warn("加载用户配置失败，使用本地缓存",re)}}async function ke(){var re,ae,he,Ne;try{const We=await(await fetch("/api/dashboard")).json(),qt=We.success?We.data:We;$.value=((re=qt==null?void 0:qt.stats)==null?void 0:re.total_stocks_covered)||null;const Et=await(await fetch("/api/dates")).json();Z.value=((ae=Et==null?void 0:Et.data)==null?void 0:ae.total)||((Ne=(he=Et==null?void 0:Et.data)==null?void 0:he.dates)==null?void 0:Ne.length)||null;const qe=await(await fetch("/api/ai/history")).json();ne.value="ok"}catch{ne.value="pending"}}async function Ee(){try{const ae=await(await fetch("/api/dashboard")).json();x.value=ae.success?ae.data:ae,C.value=Date.now()}catch(re){console.error("加载总览数据失败",re)}}return{configSaving:d,configChanged:v,globalConfigDirty:i,lastSavedTime:h,feishuConfigOriginal:F,aiConfigOriginal:B,tushareConfigOriginal:I,tushareConfig:W,tushareStatus:J,datasourceConfig:N,datasourceStatus:z,syncingData:j,stockCount:$,tradeDateCount:Z,aiStatus:ne,appVersion:ee,showImportDialog:M,rateLimitConfig:s,rateLimitDirty:y,rateLimitSaving:n,loadRateLimit:p,saveRateLimit:X,saveAiConfig:T,testAiApi:b,exportConfig:u,importConfig:k,saveAllConfig:c,resetAllConfig:A,testTushareConnection:oe,checkTushareConnection:Y,syncStockData:q,loadTushareConfig:K,loadDatasourceConfig:de,saveDatasourceConfig:Re,testDatasource:se,toggleDatasourceKeyReveal:Ce,toggleDatasourceEdit:U,loadFeishuConfig:ge,loadAiConfig:Te,loadUserConfig:pe,loadSystemStatus:ke,loadDashboardData:Ee}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:t,computed:g}=Vue,{currentUser:e,applyTheme:v,allMenuDefs:m,loadGroupConfig:R}=a,r=function(pe){const ke=window.__quantModules&&window.__quantModules.themes;return ke&&ke.applyLegacyTheme?ke.applyLegacyTheme(pe):v(pe)},l=t([]),f=t(""),o=t(""),S=t("users"),w=t({}),E=t({}),x=g(()=>{let pe=l.value;if(o.value&&(pe=pe.filter(Ee=>(Ee.group||Ee.role)===o.value)),!f.value)return pe;const ke=f.value.toLowerCase();return pe.filter(Ee=>Ee.username.toLowerCase().includes(ke))});function C(pe){w.value={...w.value,[pe]:!w.value[pe]}}async function O(pe,ke){try{const re=await(await fetch("/api/groups/"+ke+"/members/"+pe,{method:"DELETE"})).json();re.success?(await U(),await me()):ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function D(pe){const ke=E.value[pe];if(ke)try{const re=await(await fetch("/api/groups/"+pe+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:ke})})).json();re.success?(await U(),await me(),E.value={...E.value,[pe]:""}):ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function d(pe,ke){try{const re=await(await fetch("/api/users/"+pe.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:ke})})).json();re.success?await U():ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const i=t(!1),h=t(null),F=t({username:"",password:"",role:"user",theme:"tech-blue"}),B=t(!1),I=t(null),W=t(!1),J=t(!1),N=t({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),z=t({}),j=t(!1),$=t({group_id:"",name:"",description:""}),Z=t(!1),ne=t([]),ee=t(""),M=t(""),s=t({});function y(pe){s.value={...s.value,[pe]:!s.value[pe]}}function n(pe){return!l.value||!l.value.length?0:l.value.filter(ke=>(ke.group||ke.role)===pe).length}function p(pe){const ke=(pe==null?void 0:pe.visible_menus)||{};return Object.values(ke).filter(Boolean).length}const X=g(()=>Object.keys(ie.value).length);async function T(pe){M.value=pe,J.value=!0,await b(pe)}async function b(pe){try{const Ee=await(await fetch("/api/groups/"+pe+"/members")).json();Ee.success&&(ne.value=Ee.members||[])}catch(ke){ne.value=[],console.error("[loadGroupMembers]",ke)}}async function u(){if(!(!ee.value||!M.value)){Z.value=!0;try{const ke=await(await fetch("/api/groups/"+M.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:ee.value})})).json();ke.success?(await b(M.value),await U(),ee.value=""):ElementPlus.ElMessage.error(ke.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{Z.value=!1}}}async function k(pe){try{const Ee=await(await fetch("/api/groups/"+M.value+"/members/"+pe,{method:"DELETE"})).json();Ee.success?(await b(M.value),await U()):ElementPlus.ElMessage.error(Ee.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const c=g(()=>{if(!l.value)return[];const pe=new Set(ne.value.map(ke=>ke.username));return l.value.filter(ke=>ke.username!=="admin"&&ke.username!=="guest"&&!pe.has(ke.username))});function A(pe){const ke=N.value.visible_menus[pe],Ee=m.find(re=>re.key===pe);if(Ee)if(ke){const re=z.value[pe]||{};Ee.subPages.forEach(ae=>{const he=pe+"."+ae;N.value.visible_sub_pages[he]=re[ae]!==void 0?re[ae]:!0})}else{const re={};Ee.subPages.forEach(ae=>{const he=pe+"."+ae;re[ae]=N.value.visible_sub_pages[he],N.value.visible_sub_pages[he]=!1}),z.value[pe]=re}}function oe(pe){I.value=pe;const ke=ie.value[pe]||{};N.value={name:ke.name||pe,description:ke.description||"",visible_menus:{...ke.visible_menus||{}},visible_sub_pages:{...ke.visible_sub_pages||{}}},z.value={},m.forEach(Ee=>{const re={};Ee.subPages.forEach(ae=>{re[ae]=N.value.visible_sub_pages[Ee.key+"."+ae]}),z.value[Ee.key]=re}),W.value=!0}async function Y(){Z.value=!0;try{const ke=await(await fetch("/api/groups/"+I.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(N.value)})).json();ke.success?(W.value=!1,I.value=null,await me(),await R()):ElementPlus.ElMessage.error(ke.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{Z.value=!1}}async function q(pe){var ke;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((ke=ie.value[pe])==null?void 0:ke.name)||pe)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const ae=await(await fetch("/api/groups/"+pe,{method:"DELETE"})).json();ae.success?await me():ElementPlus.ElMessage.error(ae.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function K(){if($.value.group_id){Z.value=!0;try{const ke=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify($.value)})).json();ke.success?(j.value=!1,$.value={group_id:"",name:"",description:""},await me()):ElementPlus.ElMessage.error(ke.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{Z.value=!1}}}const ie=t({});async function me(){try{if(!localStorage.getItem("quant_token"))return;const ke=await fetch("/api/groups");if(ke.ok){const Ee=await ke.json();ie.value=Ee.groups||{}}}catch(pe){console.warn("loadAllGroups:",pe)}}function Ce(pe){var ke;return((ke=ie.value[pe])==null?void 0:ke.name)||pe||"--"}async function U(){try{if(!localStorage.getItem("quant_token")){l.value=[];return}const ke=await fetch("/api/users");if(ke.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),e.value=null;return}const Ee=await ke.json();l.value=Ee.users||[]}catch(pe){l.value=[],console.error("[loadUsers] error:",pe)}}function de(pe){h.value=pe,F.value={username:pe.username,password:"",role:pe.role,theme:pe.theme||"tech-blue",group:pe.group||pe.role},i.value=!0}async function Re(){if(F.value.username){B.value=!0;try{const pe=h.value?"PUT":"POST",ke=h.value?`/api/users/${F.value.username}`:"/api/users",re=await(await fetch(ke,{method:pe,headers:{"Content-Type":"application/json"},body:JSON.stringify(F.value)})).json();if(re.success){if(ElementPlus.ElMessage.success("保存成功"),e.value&&F.value.username===e.value.username){const ae=F.value.theme;ae&&ae!==e.value.theme&&(e.value.theme=ae,localStorage.setItem("quant_user",JSON.stringify(e.value)),r(ae))}i.value=!1,h.value=null,await U()}else ElementPlus.ElMessage.error(re.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{B.value=!1}}}async function se(pe){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${pe}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await U())}catch(ke){console.error("[deleteUser]",ke)}}async function ge(pe){try{const Ee=await(await fetch(`/api/users/${pe.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:pe.enabled})})).json();Ee.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(Ee.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function Te(pe){try{const{value:ke}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${pe.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(ke){const re=await(await fetch(`/api/users/${pe.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:ke})})).json();re.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(re.message||"重置失败")}}catch{}}return{userList:l,userSearch:f,groupFilter:o,userPageTab:S,expandedGroups:w,addMemberGroupMap:E,filteredUsers:x,toggleGroupExpand:C,removeMemberFromGroupInline:O,addMemberToGroupInline:D,changeUserGroup:d,showAddUser:i,editingUser:h,userForm:F,savingUser:B,editingGroup:I,menuConfigDialog:W,memberDialog:J,groupEditForm:N,subPageCache:z,showAddGroup:j,addGroupForm:$,savingGroup:Z,groupMembers:ne,addMemberUsername:ee,selectedMemberGroup:M,subPageSectionExpanded:s,toggleSubPageSection:y,getGroupMemberCount:n,getMenuEnabledCount:p,groupCount:X,openMemberManager:T,loadGroupMembers:b,addMemberToGroup:u,removeMemberFromGroup:k,availableUsersForGroup:c,onParentToggle:A,openMenuConfig:oe,saveMenuConfig:Y,deleteGroupConfig:q,createGroup:K,allGroups:ie,getGroupName:Ce,loadAllGroups:me,loadUsers:U,editUser:de,saveUser:Re,deleteUser:se,toggleUserEnabled:ge,resetUserPassword:Te}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:t,computed:g}=Vue,{stockKlineLoaded:e,stockDetailVisible:v,stockDetailTab:m,stockDetail:R,disposeStockKline:r}=a,l=t([]),f=t(!1),o=t(!1),S=t("date"),w=t([]),E=t([]),x=t([]),C=t([]),O=g(()=>{var u,k;const b=[];for(const c of l.value){if(!c||c.id==null)continue;const A=c.stock_name||c.stock_code||"",oe=Array.isArray(c.messages)?c.messages:[];b.push({id:c.id,stock_code:c.stock_code,stock_name:A,first_msg:c.first_msg||((k=(u=oe[0])==null?void 0:u.content)==null?void 0:k.substring(0,50))||"",msg_count:c.msg_count||oe.length||0,created_at:c.created_at,date:(c.created_at||"").substring(0,10),month:(c.created_at||"").substring(0,7),messages:oe})}return b}),D=g(()=>{const b={};for(const k of O.value){const c=k.date||"未知";b[c]||(b[c]=[]),b[c].push(k)}const u={};return Object.keys(b).sort((k,c)=>c.localeCompare(k)).forEach(k=>u[k]=b[k]),u}),d=g(()=>{const b={};for(const k of O.value){const c=k.month||"未知";b[c]||(b[c]=[]),b[c].push(k)}const u={};return Object.keys(b).sort((k,c)=>c.localeCompare(k)).forEach(k=>u[k]=b[k]),u}),i=g(()=>{const b={};for(const u of O.value){const k=`${u.stock_name}(${u.stock_code})`;b[k]||(b[k]=[]),b[k].push(u)}return b});function h(b){const u=w.value.indexOf(b);u>=0?w.value.splice(u,1):w.value.push(b)}function F(b){const u=D.value[b]||[];if(u.every(c=>w.value.includes(c.id)))w.value=w.value.filter(c=>!u.some(A=>A.id===c));else for(const c of u)w.value.includes(c.id)||w.value.push(c.id)}function B(b){const u=d.value[b]||[];if(u.every(c=>w.value.includes(c.id)))w.value=w.value.filter(c=>!u.some(A=>A.id===c));else for(const c of u)w.value.includes(c.id)||w.value.push(c.id)}function I(b){const u=i.value[b]||[];if(u.every(c=>w.value.includes(c.id)))w.value=w.value.filter(c=>!u.some(A=>A.id===c));else for(const c of u)w.value.includes(c.id)||w.value.push(c.id)}function W(b){const u=E.value.indexOf(b);u>=0?E.value.splice(u,1):E.value.push(b)}function J(b){const u=x.value.indexOf(b);u>=0?x.value.splice(u,1):x.value.push(b)}function N(b){const u=C.value.indexOf(b);u>=0?C.value.splice(u,1):C.value.push(b)}function z(){w.value.length===O.value.length?w.value=[]:w.value=O.value.map(b=>b.id)}async function j(){if(w.value.length){try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${w.value.length} 段对话吗？此操作不可恢复。`,"删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}for(const b of[...w.value])await X(b);w.value=[]}}const $={};async function Z(b){R.value={stock:b.stock_code,name:b.stock_name},v.value=!0,m.value="chat",e.value=!1,r(),M.value=!0,s.value="",ee.value=[];try{let u=$[b.id];if(!u){const k=await fetch("/api/ai/chat/history/"+b.id);if(!k.ok)throw new Error("load history failed");u=(await k.json()).messages||[],$[b.id]=u}ee.value=u.map(k=>({role:k.role,content:k.content}))}catch{s.value="历史消息加载失败，请重试"}finally{M.value=!1}}const ne=t(""),ee=t([]),M=t(!1),s=t("");async function y(){var k;const b=ne.value.trim();if(!b||M.value)return;s.value="",ee.value.push({role:"user",content:b}),ne.value="",M.value=!0;const u=ee.value.length;ee.value.push({role:"assistant",content:""});try{const oe=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((k=R.value)==null?void 0:k.stock)||"",message:b})})).body.getReader(),Y=new TextDecoder;let q="";for(;;){const{done:K,value:ie}=await oe.read();if(K)break;q+=Y.decode(ie,{stream:!0});const me=q.split(`
`);q=me.pop()||"";for(const Ce of me)if(Ce.startsWith("data: "))try{const U=JSON.parse(Ce.slice(6));U.token?ee.value[u].content+=U.token:U.done?console.log("Stream done:",U.session_id):U.error&&(s.value=U.error)}catch(U){console.warn("SSE parse error:",U)}}}catch(c){ee.value[u].content||(ee.value[u].content="网络错误: "+c.message)}M.value=!1}async function n(b){var k;s.value="",M.value=!0;const u={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};ee.value.push({role:"user",content:u[b]||u.comprehensive});try{const A=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((k=R.value)==null?void 0:k.stock)||"",mode:b})});if(A.ok){const oe=await A.json();ee.value.push({role:"assistant",content:oe.reply||"无回复"})}}catch(c){s.value="网络错误: "+c.message}M.value=!1}async function p(){f.value=!0,o.value=!1;try{const b=await fetch("/api/ai/chat/history?view=date");if(b.ok){const u=await b.json(),k=[];for(const c of u)for(const A of c.items||[])k.push(A);l.value=k}else o.value=!0}catch(b){console.error(b),o.value=!0}finally{f.value=!1}}async function X(b){try{await fetch("/api/ai/chat/history/"+b,{method:"DELETE"}),l.value=l.value.filter(u=>u.id!==b)}catch(u){console.error("deleteChatSession:",u)}}function T(b){if(!b)return"";const u=String(b).split(`
`),k=[],c=[];let A=0;for(;A<u.length;){if(/^\s*\|.*\|\s*$/.test(u[A])){let Y=A;const q=[];for(;Y<u.length&&/^\s*\|.*\|\s*$/.test(u[Y]);)q.push(u[Y]),Y++;const K=Ce=>Ce.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map(U=>U.trim()),ie=q.map(K);if(ie.length>1&&ie[1].every(Ce=>/^:?-{3,}:?$/.test(Ce))){const Ce=Math.max(...ie.map(se=>se.length)),U=ie[0].slice(0,Ce),de=ie.slice(2);let Re="<table>";de.length?(Re+="<thead><tr>"+U.map(se=>"<th>"+se+"</th>").join("")+"</tr></thead>",Re+="<tbody>"+de.map(se=>"<tr>"+se.slice(0,Ce).map(ge=>"<td>"+ge+"</td>").join("")+"</tr>").join("")+"</tbody>"):Re+="<tbody><tr>"+U.map(se=>"<td>"+se+"</td>").join("")+"</tr></tbody>",Re+="</table>",k.push(Re),c.push("\0T"+(k.length-1)+"\0"),A=Y;continue}for(;A<Y;)c.push(u[A]),A++;continue}c.push(u[A]),A++}let oe=c.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return k.forEach((Y,q)=>{oe=oe.split("\0T"+q+"\0").join(Y)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(oe=window.__quantModules.core.sanitizeHtml(oe)),oe}return{chatSessions:l,chatHistoryView:S,selectedChatIds:w,expandedChatDates:E,expandedChatMonths:x,expandedChatStocks:C,chatHistoryLoading:f,chatHistoryError:o,allChatSessionsFlat:O,chatGroupedByDate:D,chatGroupedByMonth:d,chatGroupedByStock:i,toggleSelectChat:h,toggleSelectChatDate:F,toggleSelectChatMonth:B,toggleSelectChatStock:I,toggleChatDateExpand:W,toggleChatMonthExpand:J,toggleChatStockExpand:N,selectAllChatSessions:z,deleteSelectedChatSessions:j,viewChatSession:Z,loadChatHistory:p,deleteChatSession:X,renderMarkdown:T,stockChatInput:ne,stockChatMessages:ee,stockChatLoading:M,stockChatError:s,askStockSend:y,askStockQuick:n}}}})();(function(a,t){typeof Ae=="object"&&Ae.exports?Ae.exports=t():a.QuantUndoCore=t()})(typeof self<"u"?self:void 0,function(){function a(){var t={},g=0;function e(r,l,f){if(typeof r!="function")return"";var o="undo-"+ ++g,S={fn:r,label:l||"",timer:null,active:!0};return t[o]=S,f&&f>0&&(S.timer=setTimeout(function(){m(o)},f)),o}function v(r){var l=t[r];if(!l||!l.active)return!1;l.timer&&clearTimeout(l.timer),delete t[r],l.active=!1;try{l.fn()}catch{}return!0}function m(r){var l=t[r];l&&(l.timer&&clearTimeout(l.timer),delete t[r],l.active=!1)}function R(){var r=0;for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&r++;return r}return{register:e,undo:v,remove:m,activeCount:R}}return{createUndoStack:a}});(function(a,t){typeof Ae=="object"&&Ae.exports?Ae.exports=t():a.QuantFormMemory=t()})(typeof self<"u"?self:void 0,function(){function a(m,R,r){return"qc_fm_"+(m||"guest")+"_"+R+"_v"+(r||1)}function t(){return typeof localStorage<"u"&&localStorage?localStorage:null}function g(m,R,r,l){var f=t();if(!f||!m||R===void 0||R===null)return!1;try{return f.setItem(a(r,m,l),JSON.stringify(R)),!0}catch{return!1}}function e(m,R,r){var l=t();if(!l||!m)return null;try{var f=l.getItem(a(R,m,r));return f?JSON.parse(f):null}catch{return null}}function v(m,R,r){var l=t();if(!(!l||!m))try{l.removeItem(a(R,m,r))}catch{}}return{saveForm:g,loadForm:e,clearForm:v}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:t,computed:g,watch:e}=Vue,{consensus:v,currentPage:m,currentSubPage:R,dashboardData:r,searchKeyword:l,statusFilter:f,strategyFilter:o,strategyFilterCounts:S}=a;function w(J){const N=o.value.selected;if(!N||N.length===0)return J;const z=o.value.mode;return J.filter(j=>{const $=j.strategy_names||j.strategies||[];return z==="union"?N.some(Z=>$.includes(Z)):N.every(Z=>$.includes(Z))})}const E=g(()=>{const J=w(v.value||[]);return{all:J.length,newCount:J.filter(N=>N.status==="new").length,current:J.filter(N=>N.status==="current").length,out:J.filter(N=>N.status==="out").length}}),x=g(()=>{let J=v.value||[];if(f.value!=="all"&&(J=J.filter(N=>N.status===f.value)),J=w(J),l.value){const N=l.value.toLowerCase();J=J.filter(z=>z.code.toLowerCase().includes(N)||z.name&&z.name.toLowerCase().includes(N))}return J}),C=g(()=>{const J=v.value||[],N={},z={};for(const j of J)j.code&&j.name&&(z[j.code]=j.name);for(const j of J){const $=j.strategy_names||j.strategies||[];for(const Z of $)N[Z]||(N[Z]={strategy:Z,count:0,codes:[],names:[]}),N[Z].count++,N[Z].codes.includes(j.code)||(N[Z].codes.push(j.code),N[Z].names.push({code:j.code,name:z[j.code]||j.code}))}return Object.values(N).sort((j,$)=>$.count-j.count)}),O=g(()=>{const J=o.value.selected,N=o.value.mode,z={};for(const[j,$]of Object.entries(S.value)){const Z=$||[];!J||J.length===0?z[j]=Z.length:N==="union"?z[j]=Z.filter(ne=>ne.strategies&&J.some(ee=>ne.strategies.includes(ee))).length:z[j]=Z.filter(ne=>ne.strategies&&J.every(ee=>ne.strategies.includes(ee))).length}return z});function D(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(o.value.selected)),localStorage.setItem("quant_strategy_filter_mode",o.value.mode)}const d=g(()=>{const J=(r.value||{}).consensus_rank||[];return w(J)}),i=g(()=>{const J=v.value||S.value.day||[];return w(J).length}),h=g(()=>{const J=(r.value||{}).strategy_counts||[],N=v.value||S.value.day||[];if(N.length===0)return J;const z=w(N),j={};z.forEach(Z=>{(Z.strategy_names||Z.strategies||[]).forEach(ee=>{j[ee]=(j[ee]||0)+1})});const $=z.length||1;return J.map(Z=>{const ne=Z.strategy_name||Z.strategy_id,ee=j[ne]||0;return{...Z,count:ee,percentage:Math.round(ee/$*1e3)/10}})}),F=g(()=>{const J=(r.value||{}).pool_changes||{},N=(J.new_count||0)-(J.out_count||0);return N>0?{dir:"up",text:"↑"+N}:N<0?{dir:"down",text:"↓"+Math.abs(N)}:{dir:"flat",text:"→0"}}),B=g(()=>{const J=(r.value||{}).time_coverage||{},N=new Date(J.start_date),z=new Date(J.end_date),j=new Date;if(!N.getTime()||!z.getTime()||j>=z)return 100;if(j<=N)return 0;const $=z-N,Z=j-N;return Math.round(Z/$*100)}),I=t(null);function W(J){o.value.selected=[J],o.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([J])),localStorage.setItem("quant_strategy_filter_mode","union"),m.value="calendar",R.value="calendar"}return{applyStrategyFilter:w,statusCounts:E,stockPool:x,strategyDistribution:C,strategyPreviewCount:O,saveStrategyFilter:D,filteredConsensusRank:d,currentPoolSize:i,filteredStrategyCounts:h,poolChangeBadge:F,timeBarPercent:B,lastRefreshTime:I,navigateToStrategyFilter:W}}}})();(function(){window.__quantModules||(window.__quantModules={});const a={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},t={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function g(r){return a[r]||"var(--text-tertiary)"}function e(r){return t[r]||"var(--bg-hover)"}const v=window.QuantUndoCore,m=v?v.createUndoStack():null;function R(r,l){if(!m||!window.Vue||!window.Vue.h)return;const f=window.Vue.h;ElementPlus.ElMessage.success({message:f("span",null,[r,f("a",{style:"margin-left:8px;color:var(--primary-text);cursor:pointer;text-decoration:underline",onClick:()=>{m.undo(l)&&ElementPlus.ElMessage.success("已撤销")}},"撤销")]),duration:5e3})}window.__quantModules.watchlist={create(r){const{ref:l,computed:f,watch:o}=Vue,{currentUser:S,selectedDate:w,stockDetail:E,stockDetailTab:x,stockDetailVisible:C,stockDetailLoading:O,stockKlineLoaded:D,viewCache:d,animateScoreEntrance:i,loadStockKline:h,refreshStockScore:F,disposeStockKline:B,aiHistory:I,aiLoading:W,aiEvalStage:J,aiEvalElapsed:N,aiEvalError:z,aiResult:j,loadLastEvaluation:$,autoEvaluateConfig:Z,autoEvaluateScope:ne,batchStocks:ee,batchRunning:M,batchTotal:s,batchCompleted:y,batchCurrent:n,batchStatuses:p,batchResults:X,batchEvalErrors:T,expandedDates:b,expandedStocks:u,savingConfig:k,selectedHistoryIds:c,selectedWatchlistCodes:A,showAutoEvaluateSettings:oe,showBatchEvaluate:Y}=r,q=P=>(getComputedStyle(document.documentElement).getPropertyValue(P)||"").trim(),K=l(""),ie=l("default"),me=l("default"),Ce=l([]),U=f(()=>new Set(Ce.value.map(P=>P.code))),de=l(!1),Re=l(!1),se=f(()=>{const P=[...Ce.value];return me.value==="name"?P.sort((le,ce)=>le.name.localeCompare(ce.name,"zh")):me.value==="added"?P.sort((le,ce)=>(ce.added_at||"").localeCompare(le.added_at||"")):me.value==="score"&&P.sort((le,ce)=>{const Me=Te(le.code);return Te(ce.code)-Me}),P});function ge(P){const le=I.value.filter(Me=>Me.stock_code===P);if(le.length===0)return null;const ce=le.reduce((Me,Pe)=>Me.evaluate_time>Pe.evaluate_time?Me:Pe);return{score:ce.result.total_score,color:g(ce.result.level),bg:e(ce.result.level)}}function Te(P){const le=ge(P);return le?le.score:0}function pe(P){ut(P.code,P.name),he.value=he.value.filter(le=>le.code!==P.code),ae.value=""}const ke=f(()=>new Set(I.value.map(P=>P.stock_code))),Ee=l(new Set);function re(P){Ee.value.add(P)}const ae=l(""),he=l([]),Ne=l(!1),Fe=l({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),We=l(!1),qt=l(!1),ht=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};ht.REALTIME_WS_PATH;const Et=ht.REALTIME_DEGRADED_TEXT||"数据不可达",_e=ht.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";ht.WARN_RISE_SPEED_THRESHOLD!=null&&ht.WARN_RISE_SPEED_THRESHOLD,ht.WARN_VOLUME_RATIO_THRESHOLD!=null&&ht.WARN_VOLUME_RATIO_THRESHOLD;const qe=ht.quoteFmt||{price:P=>P==null?"--":Number(P).toFixed(2),pct:P=>P==null?"--":Number(P).toFixed(2)+"%",num:P=>P==null?"--":Number(P).toFixed(2),color:P=>""},je=3,Oe=5e3,Xe=l({}),Qe=l(!1),Ge=l("idle");let it=null,bt=null,mt=0;function At(P){return ht.checkQuoteWarning?ht.checkQuoteWarning(P):null}function aa(P){return At(Xe.value[P])}function L(P){return qe.color(Xe.value[P])}function te(P){return qe.price(Xe.value[P]&&Xe.value[P].price)}function Se(P){return qe.pct(Xe.value[P]&&Xe.value[P].change_pct)}function Ie(P,le){return qe.num(Xe.value[P]&&Xe.value[P][le])}function Ke(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function kt(){if(!it||it.readyState!==1)return;const P=(Ce.value||[]).map(le=>le.code);P.length!==0&&it.send(JSON.stringify({subscribe:P}))}function $e(){if(bt&&(clearTimeout(bt),bt=null),it){try{it.onopen=null,it.onmessage=null,it.onerror=null,it.onclose=null,it.close()}catch{}it=null}Xe.value={},Qe.value=!1,Ge.value="idle"}function Ue(){const P=Ke();if(!P||!ht.buildRealtimeWsUrl||Ge.value==="open"||Ge.value==="connecting")return;let le;try{le=ht.buildRealtimeWsUrl()+"?token="+encodeURIComponent(P)}catch{Ge.value="offline",Qe.value=!0;return}Ge.value="connecting";let ce=null;try{ce=new WebSocket(le)}catch{Ge.value="offline",Qe.value=!0;return}it=ce,ce.onopen=function(){Ge.value="open",mt=0,kt()},ce.onmessage=function(Me){let Pe=null;try{Pe=JSON.parse(Me.data||"{}")}catch{return}if(!Pe||Pe.type!=="quotes")return;if(Qe.value=!!Pe.degraded,Pe.degraded||!Array.isArray(Pe.data)){Xe.value={};return}const Rt={};Pe.data.forEach(function(lt){lt&&lt.code&&(Rt[lt.code]=lt)}),Xe.value=Rt},ce.onerror=function(){Ge.value="offline",Qe.value=!0},ce.onclose=function(){Ge.value="offline",mt<je?(mt++,bt=setTimeout(function(){Ge.value!=="open"&&Ue()},Oe*mt)):Qe.value=!0}}o(Ce,function(){Ge.value==="open"&&kt()}),Ke()&&setTimeout(Ue,500);async function _t(){if(!E.value)return;W.value=!0,j.value=null,z.value="",J.value="fetching",N.value=0;const P=Date.now(),le=setInterval(()=>{W.value&&(N.value=Math.round((Date.now()-P)/1e3))},500);try{const ce=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:E.value.stock,stock_name:E.value.name||E.value.stock,strategy:ie.value})});J.value="calculating";const Me=await ce.json();J.value="analyzing",Me.success?(await nextTick(),j.value=Me.data,x.value="ai",ot()):(z.value=Me.message||"评估失败",ElementPlus.ElMessage.error(z.value))}catch(ce){z.value=ce&&ce.message&&!String(ce.message).includes("Failed to fetch")?ce.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(z.value)}finally{clearInterval(le),W.value=!1,N.value=0,z.value?J.value="":(J.value="done",setTimeout(()=>{J.value==="done"&&(J.value="")},800))}}const dt=50,Q=l(0),ye=l(!1),Ze=f(()=>I.value.length<Q.value);async function ot(){de.value=!0,Re.value=!1;try{if(!localStorage.getItem("quant_token")){I.value=[];return}const le=await fetch(`/api/ai/history?limit=${dt}&offset=0`);if(le.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),S.value=null;return}const ce=await le.json();ce.success?(I.value=ce.data||[],Q.value=ce.total!=null?ce.total:I.value.length):Re.value=!0}catch(P){console.error("[loadAiHistory] error:",P),Re.value=!0}finally{de.value=!1}}async function st(){if(!(ye.value||!Ze.value)){ye.value=!0;try{const le=await(await fetch(`/api/ai/history?limit=${dt}&offset=${I.value.length}`)).json();if(le.success&&Array.isArray(le.data)){const ce=new Set(I.value.map(Pe=>Pe.id)),Me=le.data.filter(Pe=>!ce.has(Pe.id));I.value=I.value.concat(Me),le.total!=null&&(Q.value=le.total)}}catch(P){console.warn("[loadMoreAiHistory] error:",P)}finally{ye.value=!1}}}async function Ft(P){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const ce=await(await fetch(`/api/ai/history/${P}`,{method:"DELETE"})).json();if(ce.success){ElementPlus.ElMessage.success("删除成功"),ot();const Me=c.value.indexOf(P);Me>=0&&c.value.splice(Me,1)}else ElementPlus.ElMessage.error(ce.message||"删除失败")}catch{}}function Ye(P){const le=c.value.indexOf(P);le>=0?c.value.splice(le,1):c.value.push(P)}function Tt(){c.value=[]}function Bt(){A.value=[]}async function It(){const P=c.value;if(P.length===0)return;const le=I.value.filter(ce=>P.includes(ce.id)).map(ce=>ce.stock_code);Y.value=!0,ee.value=[...new Set(le)].join(",")}async function pt(){const P=c.value;if(P.length===0)return;const le=I.value.filter(Pe=>P.includes(Pe.id)),ce=[...new Map(le.map(Pe=>[Pe.stock_code,Pe])).values()];let Me=0;for(const Pe of ce)U.value.has(Pe.stock_code)||(await ut(Pe.stock_code,Pe.stock_name||Pe.stock_code),Me++);Me>0?ElementPlus.ElMessage.success(`已加入 ${Me} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function Pt(){const P=c.value;if(P.length===0)return;const le=I.value.filter(Me=>P.includes(Me.id)),ce=[...new Map(le.map(Me=>[Me.stock_code,Me])).values()];try{const Pe=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:ce.map(Rt=>({stock_code:Rt.stock_code,stock_name:Rt.stock_name||""}))})})).json();Pe&&Pe.success?ElementPlus.ElMessage.success(`已登记 ${Pe.count||ce.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(Pe&&Pe.detail||"批量加入组合失败")}catch(Me){console.warn("batchAddToPortfolio failed:",Me),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function Kt(){if(A.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${A.value.length} 只股票？`,"提示",{type:"warning"});for(const P of A.value)await $t(P);A.value=[],ElementPlus.ElMessage.success("已移除")}catch(P){P&&P.message!=="cancel"&&console.warn("batchRemoveWatchlist:",P)}}function Jt(P){const le=A.value.indexOf(P);le>=0?A.value.splice(le,1):A.value.push(P)}function xt(){c.value.length===I.value.length?c.value=[]:c.value=I.value.map(P=>P.id)}function gt(){A.value.length===Ce.value.length?A.value=[]:A.value=Ce.value.map(P=>P.code)}async function Zt(){if(c.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${c.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const le=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:c.value})})).json();le.success?(ElementPlus.ElMessage.success(le.message),c.value=[],ot()):ElementPlus.ElMessage.error(le.message||"删除失败")}catch{}}async function Dt(){try{const le=await(await fetch("/api/ai/auto-config")).json();le.success&&(Z.value=le.data,le.data.evaluate_scope&&(ne.value=le.data.evaluate_scope))}catch(P){console.warn("loadAutoEvaluateConfig failed:",P)}}async function ra(){k.value=!0;try{Z.value.evaluate_scope=ne.value;const le=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Z.value)})).json();le.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),oe.value=!1):ElementPlus.ElMessage.error(le.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{k.value=!1}}const Qt=l(!1);async function sa(){Qt.value=!0;try{const le=await(await fetch("/api/watchlist")).json();le.success&&(Ce.value=le.stocks||[])}catch(P){console.warn("loadWatchlist failed:",P)}finally{Qt.value=!1}}async function ut(P,le){try{const Me=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:P,name:le})})).json();if(Me.success)return Me.existed||Ce.value.push({code:P,name:le,added_at:new Date().toISOString()}),!0}catch(ce){console.warn("addToWatchlist failed:",ce)}return!1}async function $t(P){try{const le=Ce.value.find(Me=>Me.code===P),ce=le&&le.name||"";if(await fetch(`/api/watchlist/${encodeURIComponent(P)}`,{method:"DELETE"}),Ce.value=Ce.value.filter(Me=>Me.code!==P),U.value&&U.value.delete&&U.value.delete(P),m){const Me=m.register(()=>{ut(P,ce)},"移除自选",5e3);R("已移除自选",Me)}else ElementPlus.ElMessage.info("已移除自选")}catch(le){console.warn("removeFromWatchlist failed:",le)}}async function ca(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"});const P=Ce.value.slice();if(await fetch("/api/watchlist",{method:"DELETE"}),Ce.value=[],U.value&&U.value.clear&&U.value.clear(),ElementPlus.ElMessage.success("自选已清空"),m&&P.length){const le=m.register(()=>{P.forEach(ce=>ut(ce.code,ce.name||""))},"清空自选",5e3);R("自选已清空",le)}}catch(P){console.warn("clearWatchlist failed:",P)}}async function ya(P,le){U.value.has(P)?(await $t(P),ElementPlus.ElMessage.info("已移除自选")):await ut(P,le)&&ElementPlus.ElMessage.success("已加入自选")}async function _a(P,le){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(P,le||"");const ce=new Date().toISOString().split("T")[0],Me=w.value||ce;x.value="kline",j.value=null,z.value="",B("stockKlineChart"),E.value=null,O.value=!0,D.value=!1,C.value=!0,nextTick(()=>i());try{const Pe=await fetch(`/api/calendar/stock/${encodeURIComponent(P)}?date=${Me}`);E.value=await Pe.json()}catch{E.value={stock:P,name:le,total_days:0}}finally{O.value=!1}await nextTick(),await h("daily"),F(),$(P)}const la=l(!1);async function H(){var P;if(Ce.value.length!==0){la.value=!0;try{const ce=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ce.success&&ce.loaded>0?(((P=ce.details)==null?void 0:P.loaded)||[]).forEach(Me=>Ee.value.add(Me.code)):ce.loaded===0&&ce.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(le){console.error("预加载K线失败:",le)}finally{la.value=!1}}}async function xe(P,le){W.value=!0,j.value=null,z.value="",J.value="fetching",D.value=!1,B();const ce=new Date().toISOString().split("T")[0],Me=w.value||ce;try{const Pe=await fetch(`/api/calendar/stock/${encodeURIComponent(P)}?date=${Me}`);E.value=await Pe.json()}catch{E.value={stock:P,name:le,total_days:0}}x.value="ai",C.value=!0,await nextTick();try{const Rt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:P,stock_name:le})})).json();Rt.success?(j.value=Rt.data,ot()):(z.value=Rt.message||"评估失败",ElementPlus.ElMessage.error(z.value))}catch{z.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(z.value)}finally{W.value=!1,J.value=""}}async function He(){Ce.value.length!==0&&(Y.value=!0,ee.value=Ce.value.map(P=>P.code).join(","))}async function De(){A.value.length!==0&&(Y.value=!0,ee.value=A.value.join(","))}async function vt(){if(!ae.value.trim()){he.value=[];return}Ne.value=!0;try{const le=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(ae.value)}`)).json();he.value=(le.results||[]).filter(ce=>!U.value.has(ce.code))}catch(P){console.warn("searchStockForWatchlist failed:",P)}finally{Ne.value=!1}}async function tt(){try{const le=await(await fetch("/api/data-refresh/config")).json();Fe.value=le}catch(P){console.error("加载数据刷新配置失败:",P)}}async function Lt(){qt.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Fe.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{qt.value=!1}}async function Wt(){var P;We.value=!0;try{const ce=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();ce.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((P=ce.parser_stats)==null?void 0:P.dates_count)||0}交易日`),d.clear(),await tt()):ElementPlus.ElMessage.error(ce.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{We.value=!1}}const Ut=l(!1);async function xa(){Ut.value=!0;try{const le=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(le.success){const ce=le.result||{},Me=le.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${ce.pulled||0}/${ce.total||0}, 财务 ${Me.pulled||0}/${Me.total||0}`),d.clear(),await tt()}else ElementPlus.ElMessage.error(le.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{Ut.value=!1}}const ba=f(()=>{const P={};for(const le of I.value){const ce=(le.evaluate_time||"").split("T")[0];P[ce]||(P[ce]=[]),P[ce].push(le)}for(const le in P)P[le].sort((ce,Me)=>Me.evaluate_time.localeCompare(ce.evaluate_time));return P}),da=f(()=>{const P={};for(const le of I.value){const ce=le.stock_code;P[ce]||(P[ce]=[]),P[ce].push(le)}for(const le in P)P[le].sort((ce,Me)=>Me.evaluate_time.localeCompare(ce.evaluate_time));return P}),na=f(()=>{const P={};for(const le of I.value){const ce=(le.evaluate_time||"").split("T")[0].slice(0,7);P[ce]||(P[ce]=[]),P[ce].push(le)}for(const le in P)P[le].sort((ce,Me)=>Me.evaluate_time.localeCompare(ce.evaluate_time));return P}),Aa=f(()=>Object.keys(da.value).length),ua=f(()=>{const P=I.value.length;return P===0?[]:[{label:"90+",min:90,max:100,color:"var(--success-text)"},{label:"80-89",min:80,max:89,color:"var(--success-text)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--success-text) 55%, var(--bg-card))"},{label:"60-69",min:60,max:69,color:"var(--warning-text)"},{label:"<60",min:0,max:59,color:"var(--danger-text)"}].map(ce=>{const Me=I.value.filter(Pe=>Pe.result.total_score>=ce.min&&Pe.result.total_score<=ce.max).length;return{...ce,count:Me,pct:Math.round(Me/P*100)}})});async function La(){if(!K.value)return;const P=Ce.value.find(le=>le.code===K.value);if(P){W.value=!0,j.value=null,z.value="",J.value="fetching";try{E.value={stock:P.code,name:P.name,total_days:0},C.value=!0,x.value="ai",await nextTick();const ce=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:P.code,stock_name:P.name,strategy:ie.value})})).json();ce.success?(j.value=ce.data,ot(),K.value=""):(z.value=ce.message||"评估失败",ElementPlus.ElMessage.error(z.value))}catch{z.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(z.value)}finally{W.value=!1,J.value=""}}}function va(P){const le=b.value.indexOf(P);le>=0?b.value.splice(le,1):b.value.push(P)}function Ta(P){const ce=(ba.value[P]||[]).map(Pe=>Pe.id);ce.every(Pe=>c.value.includes(Pe))?c.value=c.value.filter(Pe=>!ce.includes(Pe)):ce.forEach(Pe=>{c.value.includes(Pe)||c.value.push(Pe)})}function wa(P){const ce=(na.value[P]||[]).map(Pe=>Pe.id);ce.every(Pe=>c.value.includes(Pe))?c.value=c.value.filter(Pe=>!ce.includes(Pe)):ce.forEach(Pe=>{c.value.includes(Pe)||c.value.push(Pe)})}function Ia(P){const le=u.value.indexOf(P);le>=0?u.value.splice(le,1):u.value.push(P)}function Na(P){const ce=(da.value[P]||[]).map(Pe=>Pe.id);ce.every(Pe=>c.value.includes(Pe))?c.value=c.value.filter(Pe=>!ce.includes(Pe)):ce.forEach(Pe=>{c.value.includes(Pe)||c.value.push(Pe)})}const Gt={},ma={};function _(P,le,ce){if(!P||(ce&&(ma[le]={el:P,records:ce}),Gt[le]===P))return;const Me=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Pe=()=>{Object.keys(Gt).forEach(et=>{if(Gt[et]&&Gt[et]!==P){try{Gt[et].dispose()}catch{}delete Gt[et]}});const Rt=[...ce].sort((et,Nt)=>et.evaluate_time.localeCompare(Nt.evaluate_time)),lt=Rt.map(et=>(et.evaluate_time||"").split("T")[0]),yt=Rt.map(et=>{var Nt;return((Nt=et.result)==null?void 0:Nt.total_score)??null}),Xt=Rt.map(et=>{var Nt;return((Nt=et.result)==null?void 0:Nt.level)??""}),zt={primary:q("--qc-primary-600")||"#b8922a",textPrimary:q("--text-primary")||"#1f2937",textSecondary:q("--text-secondary")||"#6b7280",border:q("--chart-axis")||"#b9b2a6",axis:q("--chart-axis")||"#b9b2a6",split:q("--chart-split")||"#e7e1d6",up:q("--qc-market-up")||"#e63946",down:q("--qc-market-down")||"#2e7d32"},pa=[];for(let et=1;et<yt.length;et++)yt[et]!=null&&yt[et-1]!=null&&Math.abs(yt[et]-yt[et-1])>=15&&pa.push({name:"大幅变化",coord:[lt[et],yt[et]],value:(yt[et]-yt[et-1]>0?"↑":"↓")+Math.abs(yt[et]-yt[et-1]),symbol:"pin",symbolSize:32,itemStyle:{color:yt[et]-yt[et-1]>0?zt.up:zt.down}});const ia=echarts.init(P),St=window.__quantModules&&window.__quantModules.echartsTheme;St&&typeof St.getEChartsTheme=="function"&&ia.setOption(St.getEChartsTheme()),ia.setOption({tooltip:{trigger:"axis",backgroundColor:q("--bg-card")||"#ffffff",borderColor:zt.border,textStyle:{color:zt.textPrimary},formatter:function(et){var Mt;const Nt=(Mt=et[0])==null?void 0:Mt.dataIndex,Sa=Nt!=null?Xt[Nt]:"";return lt[Nt]+"<br/>得分: "+yt[Nt]+(Sa?" ("+Sa+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:lt,axisLabel:{fontSize:10,rotate:30,color:zt.textSecondary},axisLine:{lineStyle:{color:zt.axis}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:zt.textSecondary},splitLine:{lineStyle:{color:zt.split}}},series:[{data:yt,type:"line",smooth:!0,lineStyle:{color:zt.primary,width:2},itemStyle:{color:zt.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:q("--primary-rgb")?"rgba("+q("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:q("--primary-rgb")?"rgba("+q("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:pa.length>0?{data:pa}:void 0}]}),Gt[le]=ia};Me?Me().then(Pe).catch(()=>{}):Pe()}function G(){Object.keys(ma).forEach(P=>{const le=ma[P];if(!(!le||!le.el)){if(Gt[P]){try{Gt[P].dispose()}catch{}delete Gt[P]}_(le.el,P,le.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(G));async function ze(P){j.value=P,D.value=!1,B();try{const le=await fetch(`/api/calendar/stock/${P.stock_code}?date=${w.value}`);E.value=await le.json()}catch{E.value={stock:P.stock_code,name:P.stock_name||P.stock_code,total_days:0,history:[]}}C.value=!0,x.value="ai"}async function ft(){if(!ee.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const P=ee.value.split(/[,，\s]+/).filter(lt=>lt.trim());if(P.length===0)return;M.value=!0,s.value=P.length,y.value=0,n.value="",p.value={},X.value={},T.value={},P.forEach(lt=>{p.value[lt]="pending",X.value[lt]=null});const le={"Content-Type":"application/json"};let ce=0,Me=0,Pe=!1;try{const lt=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:le,body:JSON.stringify({stock_codes:P})});if(lt.ok&&lt.body){Pe=!0;const yt=lt.body.getReader(),Xt=new TextDecoder("utf-8");let zt="",pa=!1;for(;!pa;){const{value:ia,done:St}=await yt.read();pa=St,zt+=Xt.decode(ia||new Uint8Array,{stream:!pa});let et;for(;(et=zt.indexOf(`

`))>=0;){const Nt=zt.slice(0,et);zt=zt.slice(et+2);const Sa=Nt.split(`
`).find(Ga=>Ga.startsWith("data: "));if(!Sa)continue;let Mt;try{Mt=JSON.parse(Sa.slice(6))}catch{continue}Mt.type==="start"?Mt.total&&(s.value=Mt.total):Mt.type==="item"?(y.value++,n.value=Mt.stock_code,Mt.success?(p.value[Mt.stock_code]="success",X.value[Mt.stock_code]=Mt,ce++):(p.value[Mt.stock_code]="error",T.value[Mt.stock_code]=Mt.error||"评估失败",Me++)):Mt.type==="done"&&(typeof Mt.success=="number"&&(ce=Mt.success),typeof Mt.fail=="number"&&(Me=Mt.fail))}}if(zt.trim()){const ia=zt.split(`
`).find(St=>St.startsWith("data: "));if(ia)try{const St=JSON.parse(ia.slice(6));St.type==="item"?(y.value++,n.value=St.stock_code,St.success?(p.value[St.stock_code]="success",X.value[St.stock_code]=St,ce++):(p.value[St.stock_code]="error",T.value[St.stock_code]=St.error||"评估失败",Me++)):St.type==="done"&&(typeof St.success=="number"&&(ce=St.success),typeof St.fail=="number"&&(Me=St.fail))}catch{}}}}catch{Pe=!1}if(!Pe){ce=0,Me=0,y.value=0;for(const lt of P){n.value=lt,p.value[lt]="running";try{const Xt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:le,body:JSON.stringify({stock_code:lt.trim(),stock_name:lt.trim()})})).json();Xt.success?(p.value[lt]="success",X.value[lt]=Xt.data,ce++):(p.value[lt]="error",T.value[lt]=Xt.message&&Xt.message!=="success"?Xt.message:"评估失败",Me++)}catch(yt){p.value[lt]="error",T.value[lt]="网络错误: "+(yt&&yt.message?yt.message:yt),Me++}y.value++}}n.value="",await ot();const Rt=P.length;setTimeout(()=>{Me===0?ElementPlus.ElMessage.success(`评估完成 成功 ${ce}/${Rt}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${ce}/${Rt} · 失败 ${Me}`),M.value=!1},500)}return{quickEvalStock:K,evalStrategy:ie,watchlistSort:me,watchlist:Ce,watchlistCodes:U,sortedWatchlist:se,getWatchlistScore:ge,getLatestScore:Te,addSearchResult:pe,evaluatedCodes:ke,klineLoadedCodes:Ee,markKlineLoaded:re,watchlistSearch:ae,watchlistResults:he,watchlistSearching:Ne,dataRefreshConfig:Fe,dataRefreshReloading:We,dataRefreshSaving:qt,aiHistoryLoading:de,aiHistoryError:Re,aiHistoryTotal:Q,aiHistoryLoadingMore:ye,hasMoreAiHistory:Ze,loadMoreAiHistory:st,watchlistLoading:Qt,doAiEvaluate:_t,loadAiHistory:ot,deleteSingleHistory:Ft,toggleSelectHistory:Ye,clearSelection:Tt,clearWatchlistSelection:Bt,batchReevaluateHistory:It,batchAddToWatchlist:pt,batchAddToPortfolio:Pt,batchRemoveWatchlist:Kt,toggleSelectWatchlist:Jt,selectAllHistory:xt,selectAllWatchlist:gt,deleteSelectedHistory:Zt,loadAutoEvaluateConfig:Dt,saveAutoEvaluateConfig:ra,loadWatchlist:sa,addToWatchlist:ut,removeFromWatchlist:$t,clearWatchlist:ca,toggleWatchlist:ya,showStockKline:_a,preloadingKline:la,preloadWatchlistKline:H,watchlistEvaluate:xe,batchEvaluateWatchlist:He,batchEvaluateSelected:De,searchStockForWatchlist:vt,loadDataRefreshConfig:tt,saveDataRefreshConfig:Lt,triggerDataReload:Wt,triggerDataPull:xa,dataPullRunning:Ut,groupedByDate:ba,aiHistoryByStock:da,groupedByMonth:na,aiHistoryStockCount:Aa,scoreDistribution:ua,quickEvaluate:La,toggleDateExpand:va,toggleSelectDate:Ta,toggleSelectMonth:wa,toggleStockExpand:Ia,toggleSelectStock:Na,registerTrendChart:_,viewAiResult:ze,doBatchEvaluate:ft,realtimeQuotes:Xe,realtimeDegraded:Qe,realtimeWsState:Ge,connectRealtimeQuotes:Ue,disconnectRealtimeQuotes:$e,quoteWarningFor:aa,realtimeQuoteColor:L,realtimePriceText:te,realtimePctText:Se,realtimeRatioText:Ie,REALTIME_DEGRADED_TEXT:Et,REALTIME_FALLBACK_TEXT:_e}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:t,computed:g}=Vue,e=t([]),v=t(null),m=t([]),R=t(!1),r=t(!1),l=t(!1),f=t({stock_code:"",stock_name:"",cost_price:null,quantity:null}),o=t(!1),S=t(!1),w=t({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),E=t(!1),x=t("positions"),C=t(30),O=t(!1),D=t(""),d=t(!1),i=t({dates:[],equity:[],values:[]}),h=g(()=>e.value.length),F=t("metrics"),B=t(!1),I=t(""),W=t(!1),J=t({metrics:null,rules:[],rebalance:null}),N=g(function(){const c=J.value.metrics;if(!c)return[];const A=function(Y){return Y==null?"--":Number(Y).toFixed(2)+"%"},oe=function(Y){return Y==null?"--":Number(Y).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:A(c.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:A(c.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:A(c.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:A(c.cvar)},{key:"max_drawdown",label:"最大回撤",value:A(c.max_drawdown)},{key:"annual_return",label:"年化收益",value:A(c.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:oe(c.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:oe(c.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:oe(c.calmar_ratio)},{key:"beta",label:"Beta",value:oe(c.beta)}]});async function z(){B.value=!0;try{const c=await(await fetch("/api/portfolio/risk?days=60")).json(),A=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),oe=c&&c.success?c.risk:null,Y=A&&A.success?A.rules||[]:[],q=A&&A.success?A.rebalance:null;J.value={metrics:oe,rules:Y,rebalance:q},W.value=!!(oe&&Object.keys(oe).length>0),I.value=c&&c.note||A&&A.note||""}catch(c){console.warn("[portfolio] 加载风险数据失败:",c),W.value=!1,I.value="风险数据加载失败"}finally{B.value=!1}}async function j(){R.value=!0,r.value=!1;try{const A=await(await fetch("/api/portfolio")).json();A.success?(e.value=A.positions||[],v.value=A.summary||null):r.value=!0}catch(c){console.warn("[portfolio] 加载持仓失败:",c),r.value=!0}finally{R.value=!1}}async function $(){const c=f.value,A=(c.stock_code||"").trim();if(!A){ElementPlus.ElMessage.warning("请输入股票代码");return}const oe=Number(c.cost_price),Y=Number(c.quantity);if(!(oe>0)||!(Y>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}o.value=!0;try{const K=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:A,stock_name:(c.stock_name||"").trim(),cost_price:oe,quantity:Y})})).json();K.success?(ElementPlus.ElMessage.success(K.message||"持仓已更新"),l.value=!1,f.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await j(),T(C.value)):ElementPlus.ElMessage.error(K.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{o.value=!1}}async function Z(c){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+c+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const oe=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(c),{method:"DELETE"})).json();oe.success?(ElementPlus.ElMessage.success("已删除持仓"),await j(),M(),T(C.value)):ElementPlus.ElMessage.error(oe.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function ne(c,A){w.value={stock_code:c,stock_name:A||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},S.value=!0}async function ee(){const c=w.value;if(!c.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const A=Number(c.price),oe=Number(c.quantity);if(!(A>0)||!(oe>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}E.value=!0;try{const q=await(await fetch("/api/portfolio/trades",{method:"POST",headers:_authHeaders(),body:JSON.stringify({stock_code:c.stock_code,stock_name:c.stock_name||"",action:c.action,price:A,quantity:oe,trade_date:c.trade_date||"",note:(c.note||"").trim()})})).json();q.success?(ElementPlus.ElMessage.success(q.message||"调仓已记录"),S.value=!1,await j(),await M(),T(C.value)):ElementPlus.ElMessage.error(q.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{E.value=!1}}async function M(){try{const A=await(await fetch("/api/portfolio/trades")).json();A.success&&(m.value=A.trades||[])}catch(c){console.warn("[portfolio] 加载调仓记录失败:",c)}}const s=c=>(getComputedStyle(document.documentElement).getPropertyValue(c)||"").trim();function y(c){if(!c||!c.length)return[];let A=c[0]||0;const oe=[];for(let Y=0;Y<c.length;Y++){const q=c[Y]||0;q>A&&(A=q),oe.push(A>0?Math.round((q-A)/A*1e3)/10:0)}return oe}function n(){const c={primary:s("--qc-primary-600")||"#b8922a",textPrimary:s("--text-primary")||"#1f2937",textSecondary:s("--text-secondary")||"#6b7280",border:s("--border-light")||"#e5e7eb",up:s("--color-rise")||"#E63946",down:s("--color-fall")||"#2E7D32"},A=i.value;return{tooltip:{trigger:"axis",backgroundColor:s("--bg-card")||"#ffffff",borderColor:c.border,textStyle:{color:c.textPrimary},formatter:function(oe){const Y=oe[0]?oe[0].dataIndex:-1,q=A.dates[Y]||"",K=A.equity[Y],ie=A.values[Y];let me=q||"";return K!=null&&(me+="<br/>组合净值: "+K),ie!=null&&(me+="<br/>组合市值: "+ie),me}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:A.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:c.textSecondary},axisLine:{lineStyle:{color:c.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:c.textSecondary},splitLine:{lineStyle:{color:c.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:c.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:A.equity,smooth:!0,showSymbol:!1,lineStyle:{color:c.primary,width:2},itemStyle:{color:c.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:s("--primary-rgb")?"rgba("+s("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:s("--primary-rgb")?"rgba("+s("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:y(A.equity),smooth:!0,showSymbol:!1,lineStyle:{color:c.down,width:1.5},itemStyle:{color:c.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function p(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function X(c,A,oe){i.value={dates:c||[],equity:A||[],values:oe||[]},d.value=!!c&&c.length>0,d.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",n,{key:"portfolio-equity"}):p()}async function T(c){O.value=!0,D.value="";const A=Number(c)||C.value||30;C.value=A;try{const Y=await(await fetch("/api/portfolio/equity_curve?days="+A)).json();Y.success?(D.value=Y.note||"",X(Y.dates||[],Y.equity||[],Y.values||[])):(D.value="数据暂不可用",p())}catch(oe){console.warn("[portfolio] 加载收益曲线失败:",oe),D.value="数据暂不可用",p()}finally{O.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function b(c,A){if(c==null||c===""||isNaN(Number(c)))return"--";const oe=Number(c),Y=A??2;return(oe>=0?"+":"")+oe.toFixed(Y)}function u(c,A){if(c==null||c===""||isNaN(Number(c)))return"--";const oe=Number(c),Y=A??2;return(oe>=0?"+":"")+oe.toFixed(Y)+"%"}function k(c){if(c==null||c===""||isNaN(Number(c)))return"";const A=Number(c);return A>0?"portfolio-up":A<0?"portfolio-down":""}return{positions:e,summary:v,trades:m,loading:R,loadError:r,showAddForm:l,addForm:f,addSaving:o,tradeFormVisible:S,tradeForm:w,tradeSaving:E,portfolioTab:x,equityDays:C,equityLoading:O,equityNote:D,equityHasData:d,portfolioCount:h,loadPortfolio:j,addPosition:$,removePosition:Z,openTradeForm:ne,submitTrade:ee,loadTrades:M,loadEquity:T,fmtSigned:b,fmtSignedPct:u,signClass:k,riskTab:F,riskLoading:B,riskNote:I,riskHasData:W,riskData:J,riskMetricList:N,loadRisk:z}}}})();(function(a,t){typeof Ae=="object"&&Ae.exports?Ae.exports=t():a.QuantBacktest=t()})(typeof self<"u"?self:void 0,function(){function a(l,f){var o=Number(l);return isFinite(o)?o:typeof f=="number"?f:0}function t(l){var f=Array.isArray(l)?l:[];if(f.length<2)return null;for(var o=-1/0,S=0,w=0,E=0,x=0,C=0;C<f.length;C++){var O=a(f[C].equity!=null?f[C].equity:f[C].value);O>o&&(o=O,S=C);var D=o>0?(o-O)/o*100:0;D>w&&(w=D,E=S,x=C)}function d(i){return f[i]&&f[i].date?f[i].date:""}return{maxDrawdown:Math.round(w*100)/100,peakIndex:E,troughIndex:x,peakDate:d(E),troughDate:d(x)}}function g(l){for(var f=l||{},o={},S=Object.keys(f).sort(),w=0;w<S.length;w++){var E=S[w],x=String(E).slice(0,4);/^\d{4}$/.test(x)&&(o[x]=(o[x]||0)+a(f[E]))}var C=Object.keys(o).sort();return C.map(function(O){return{year:O,return:Math.round(o[O]*100)/100}})}function e(l){var f=Array.isArray(l)?l:[],o={};f.forEach(function(E){(E.points||[]).forEach(function(x){x&&x.date&&(o[x.date]=1)})});var S=Object.keys(o).sort(),w=f.map(function(E){var x={};return(E.points||[]).forEach(function(C){C&&C.date&&(x[C.date]=a(C.value!=null?C.value:C.equity))}),{name:E.name||"",data:S.map(function(C){return C in x?x[C]:null})}});return{dates:S,series:w}}function v(l){var f=l||{},o=function(w){return a(w)},S=function(w,E){var x=o(w);return isFinite(x)?x.toFixed(E):"--"};return[{key:"total_return",label:"总收益",value:S(f.total_return,2),suffix:"%",dir:o(f.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:S(f.annual_return,2),suffix:"%",dir:o(f.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:S(f.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:S(f.sharpe_ratio,2),suffix:"",dir:o(f.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:S(f.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:S(f.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(o(f.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:S(f.volatility,2),suffix:"%",dir:""}]}function m(l){var f=l==null?"":String(l);return/[",\n]/.test(f)?'"'+f.replace(/"/g,'""')+'"':f}function R(l){var f=l||{},o=[];o.push("回测指标"),o.push("指标,数值"),(f.metrics||[]).forEach(function(d){o.push(m(d.label)+","+m((d.value||"")+(d.suffix||"")))}),o.push(""),o.push("净值曲线");var S=["日期"].concat((f.series||[]).map(function(d){return d.name}));o.push(S.map(m).join(","));for(var w=f.dates||[],E=f.series||[],x=0;x<w.length;x++){for(var C=[w[x]],O=0;O<E.length;O++){var D=E[O].data&&E[O].data[x];C.push(D??"")}o.push(C.map(m).join(","))}return o.push(""),o.push("交易明细"),o.push("日期,股票代码,方向,原因"),(f.trades||[]).forEach(function(d){o.push(m(d.date)+","+m(d.stock)+","+m(d.action)+","+m(d.reason))}),o.join(`
`)}function r(l){return l==="buy"?"买入":l==="sell"?"卖出":l||""}return{toNum:a,computeMaxDrawdownRegion:t,buildAnnualReturns:g,buildNavSeries:e,buildMetrics:v,buildBacktestCsv:R,tradeActionText:r}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:t,computed:g}=Vue,e=window.QuantBacktest||{},v=a||{},m=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],r=(Array.isArray(v.backtestStrategies)&&v.backtestStrategies.length?v.backtestStrategies:m).map(s=>({id:s.id,name:s.name})),l=t(r.length?[r[0].id]:[]),f=t(O()),o=t(1e5),S=t(3e-4),w=t(!1),E=t(!1),x=t(null),C=t("");function O(){const s=new Date,y=new Date;y.setFullYear(y.getFullYear()-1);const n=p=>p.getFullYear()+"-"+String(p.getMonth()+1).padStart(2,"0")+"-"+String(p.getDate()).padStart(2,"0");return[n(y),n(s)]}function D(s){const y=l.value.indexOf(s);y>=0?l.value.length>1&&l.value.splice(y,1):l.value.push(s)}function d(s){const y=r.find(n=>n.id===s);return y?y.name:s}function i(s){const y=s.summary||s;return{strategy_id:y.strategy_id,start_date:y.start_date,end_date:y.end_date,total_days:y.total_days,total_return:y.total_return,annual_return:y.annual_return,max_drawdown:y.max_drawdown,volatility:y.volatility,sharpe_ratio:y.sharpe_ratio,sortino_ratio:y.sortino_ratio,win_rate:y.win_rate,profit_loss_ratio:y.profit_loss_ratio,avg_positions:y.avg_positions!=null?y.avg_positions:y.avg_positions_per_day,total_trades:y.total_trades,turnover_rate:y.turnover_rate,success:y.success!==!1,message:y.message||"",insample_total_return:y.insample_total_return!=null?y.insample_total_return:null,outsample_total_return:y.outsample_total_return!=null?y.outsample_total_return:null,out_sample_ratio:y.out_sample_ratio!=null?y.out_sample_ratio:.2,overfit_warning:!!y.overfit_warning,overfit_reason:y.overfit_reason||""}}function h(s){return(Array.isArray(s)?s:[]).map(y=>({date:y.date,value:y.equity!=null?y.equity:y.value}))}function F(s,y){const n=i(y),p=h(y.equity_curve),X=y.monthly_returns||{},T=Array.isArray(y.trade_history)?y.trade_history:[],b={id:s,name:d(s),summary:n,equityCurve:p,monthlyReturns:X,trades:T};let u=null;if(w.value){const k=Number(o.value)||1e5;u={name:"现金基准",points:p.map(c=>({date:c.date,value:k}))}}return{success:!0,mode:"single",strategies:[b],primary:b,benchmark:u,period:(n.start_date||"")+" ~ "+(n.end_date||"")}}function B(s,y){const n=y.strategy_results||{},p=s.map(b=>{const u=n[b];if(!u)return null;const k=i(u);return{id:b,name:d(b),summary:k,equityCurve:h(u.equity_curve),monthlyReturns:u.monthly_returns||{},trades:Array.isArray(u.trade_history)?u.trade_history:[]}}).filter(b=>b&&b.summary.success!==!1),X=p.length?p[0]:null;let T=null;return w.value&&(T={name:"等权组合基准",points:h(y.portfolio_equity)}),{success:p.length>0,mode:"multi",strategies:p,primary:X,benchmark:T,period:X?X.summary.start_date+" ~ "+X.summary.end_date:""}}const I=g(()=>{const s=x.value;return!s||!s.primary?[]:e.buildMetrics?e.buildMetrics(s.primary.summary):[]}),W=g(()=>{const s=x.value;return!s||!s.primary||!s.primary.monthlyReturns?[]:e.buildAnnualReturns?e.buildAnnualReturns(s.primary.monthlyReturns):[]}),J=g(()=>{const s=x.value;return!s||!s.primary?[]:(s.primary.trades||[]).slice().sort((y,n)=>String(n.date||"").localeCompare(String(y.date||"")))}),N=g(()=>{const s=x.value;return!s||!s.strategies||s.strategies.length<2?[]:s.strategies.map(y=>({name:y.name,metrics:e.buildMetrics?e.buildMetrics(y.summary):[]}))}),z=g(()=>{const s=x.value;return!s||!s.primary?null:e.computeMaxDrawdownRegion?e.computeMaxDrawdownRegion(s.primary.equityCurve):null});async function j(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const y=l.value;if(!y.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const n=f.value,p={start_date:n&&n[0]||void 0,end_date:n&&n[1]||void 0},X={"Content-Type":"application/json"};E.value=!0,x.value=null,C.value="";try{if(y.length===1){const T=Object.assign({},p,{initial_capital:Number(o.value)||1e5,commission_rate:Number(S.value)||3e-4}),b=await fetch("/api/backtest/"+encodeURIComponent(y[0]),{method:"POST",headers:X,body:JSON.stringify(T)});if(!b.ok){const k=await b.json().catch(()=>({}));throw new Error(k.detail||"回测失败")}const u=await b.json();if(!u.success)throw new Error(u.message||"回测失败");x.value=F(y[0],u)}else{const T=await fetch("/api/backtest/multi",{method:"POST",headers:X,body:JSON.stringify(Object.assign({},p,{strategy_ids:y}))});if(!T.ok){const u=await T.json().catch(()=>({}));throw new Error(u.detail||"回测失败")}const b=await T.json();if(!b.success)throw new Error(b.message||"多策略回测失败");if(x.value=B(y,b.data||{}),!x.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(T){C.value=T&&T.message?T.message:"回测失败",ElementPlus.ElMessage.error(C.value)}finally{E.value=!1}}function $(){const s=x.value,y={dates:[],series:[]};if(!s)return y;const n=s.strategies.map(X=>({name:X.name,points:X.equityCurve}));s.benchmark&&s.benchmark.points&&s.benchmark.points.length&&n.push({name:s.benchmark.name,points:s.benchmark.points});const p=e.buildNavSeries?e.buildNavSeries(n):y;return Z(p,s)}function Z(s,y){const n=A=>(getComputedStyle(document.documentElement).getPropertyValue(A)||"").trim(),p={primary:n("--qc-primary-600")||"#b8922a",success:n("--color-success")||"#4CAF50",accent:n("--color-accent")||"#F59E0B",info:n("--color-info")||"#1976d2",ai:n("--color-ai")||"#6366f1",textPrimary:n("--text-primary")||"#1f2937",textSecondary:n("--text-secondary")||"#6b7280",border:n("--border-light")||"#e5e7eb",up:n("--color-rise")||"#E63946",down:n("--color-fall")||"#2E7D32",bg:n("--bg-card")||"#ffffff"},X=[p.primary,p.success,p.accent,p.info,p.ai],b=p.bg.length===7&&parseInt(p.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",u=e.computeMaxDrawdownRegion?e.computeMaxDrawdownRegion(y.primary?y.primary.equityCurve:[]):null,k=u&&u.peakDate&&u.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:p.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+u.maxDrawdown+"%",xAxis:u.peakDate,itemStyle:{color:p.down}},{xAxis:u.troughDate}]]}:void 0,c=s.series.map((A,oe)=>{const Y=y.benchmark&&A.name===y.benchmark.name,q=X[oe%X.length];return{name:A.name,type:"line",data:A.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:Y?2:2.4,type:Y?"dashed":"solid",color:q},itemStyle:{color:q},emphasis:{focus:"series"},...oe===0&&k?{markArea:k}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:b,borderColor:p.border,textStyle:{color:p.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:p.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:s.dates,boundaryGap:!1,axisLine:{lineStyle:{color:p.border}},axisLabel:{color:p.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:p.textSecondary,fontSize:11},splitLine:{lineStyle:{color:p.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:p.border,textStyle:{color:p.textSecondary,fontSize:10}}],series:c}}function ne(s){if(!s){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",$,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function ee(){const s=x.value;if(!s||!s.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const y=s.strategies.map(c=>({name:c.name,points:c.equityCurve}));s.benchmark&&y.push({name:s.benchmark.name,points:s.benchmark.points});const n=e.buildNavSeries?e.buildNavSeries(y):{dates:[],series:[]},p=e.tradeActionText||(c=>c),X=J.value.map(c=>({date:c.date,stock:c.stock,action:p(c.action),reason:c.reason})),T=e.buildBacktestCsv?e.buildBacktestCsv({metrics:I.value,dates:n.dates,series:n.series,trades:X}):"",b=new Blob(["\uFEFF"+T],{type:"text/csv;charset=utf-8"}),u=URL.createObjectURL(b),k=document.createElement("a");k.href=u,k.download="backtest-"+s.strategies.map(c=>c.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",k.click(),URL.revokeObjectURL(u),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function M(s,y){return s==null||s===""||isNaN(Number(s))?"--":Number(s).toFixed(y??2)}return{btStrategyOptions:r,btSelectedStrategies:l,toggleBtStrategy:D,btDateRange:f,btCapital:o,btCommissionRate:S,btIncludeBenchmark:w,btRunning:E,btResult:x,btError:C,btMetrics:I,btAnnualReturns:W,btTrades:J,btStrategyMetricsRows:N,btDrawdownRegion:z,runBacktestWorkbench:j,exportBacktestCSV:ee,registerBacktestNavChart:ne,btFmtNum:M}}}})();(function(){const{ref:a,computed:t,watch:g,onUnmounted:e}=Vue,v=o=>(getComputedStyle(document.documentElement).getPropertyValue(o)||"").trim(),m=72,R={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},r={stock:"股票",bond:"债券",commodity:"大宗商品",cash:"现金"},l={"🌱":"sprout","🔥":"flame","🌾":"wheat","❄️":"snowflake","📈":"trending-up","📉":"trending-down","📊":"bar-chart-3","💹":"line-chart","🏭":"factory","💰":"banknote","🛢":"fuel"},f={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const o=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"sprout",color:"var(--state-success-solid)",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),S=a({}),w=a(!1),E=a({}),x=a({cycles:[]}),C=a([]),O=a(0),D=a(!1),d=a({autoRefresh:!0,refreshInterval:300}),i=a(""),h=a(""),F=a(!1),B=a("");let I=null;const W={x:0,y:0},J=t(()=>{const U=S.value;return["recession","recovery","overheat","stagflation"].map(Re=>{const se=U[Re]||{};return{key:Re,name:se.name||Re,icon:l[se.icon]||"bar-chart-3",color:se.color||v("--text-tertiary")||"#888",bg:"color-mix(in srgb, "+(se.color||"var(--text-tertiary)")+" 14%, var(--bg-card))",textColor:"color-mix(in srgb, "+(se.color||"var(--text-tertiary)")+" 48%, var(--qc-foreground))",tagline:se.allocation&&f[Re]||""}})}),N=t(()=>{var de,Re,se,ge;const U=o.value.indicators||{};return[{key:"pmi",label:"PMI",value:(de=U.pmi)==null?void 0:de.toFixed(2),color:U.pmi>=50?v("--color-success")||"#43a047":v("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((Re=U.gdp_growth)==null?void 0:Re.toFixed(2))+"%",color:v("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((se=U.cpi)==null?void 0:se.toFixed(2))+"%",color:U.cpi>1.2?v("--color-danger")||"#E53935":v("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((ge=U.m2_growth)==null?void 0:ge.toFixed(2))+"%",color:v("--color-success")||"#43a047"}]}),z=U=>{U=U||{};const de=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],Re=()=>v("--color-success")||"#43a047",se=()=>v("--color-danger")||"#E53935",ge=()=>v("--color-warning")||"#FF9800",Te={宽松:Re(),中位:ge(),偏低:se(),高增长:Re(),承压:se(),不利:se()};return de.map(pe=>{const ke=U[pe.key]||{},Ee=ke.score||0,re=Math.min(100,Math.max(5,(Ee+2)*25)),ae=Ee>=.3?"var(--state-success-solid)":Ee>=-.3?"var(--state-warning-solid)":"var(--state-danger-solid)",he=Ee>=0?"var(--state-success-text)":"var(--state-danger-text)";return{key:pe.key,label:pe.label,scoreStr:Ee.toFixed(2),level:ke.level||"—",barWidth:re,barColor:ae,scoreColor:he,color:Te[ke.level]||"var(--text-tertiary)"}})},j=t(()=>z(o.value.dimension_scores)),$=t(()=>z(E.value._dimensions)),Z=t(()=>{var de;const U=((de=o.value.confidence)==null?void 0:de.level)||"";return U==="高"?"var(--state-success-text)":U==="中"?"var(--state-warning-text)":U==="低"?"var(--state-danger-text)":"var(--text-secondary)"}),ne=t(()=>{var se,ge,Te,pe;const U=S.value,de={recovery:0,overheat:1,stagflation:2,recession:3},Re={};for(const[ke,Ee]of Object.entries(U))Re[ke]={name:Ee.name,icon:Ee.icon,color:Ee.color,lightColor:Ee.bg_color,duration:"~"+(((se=Ee.historical_stats)==null?void 0:se.avg_duration_months)||18)+"个月",order:de[ke]||0,period:((Te=(ge=Ee.case_studies)==null?void 0:ge[0])==null?void 0:Te.split("：")[0])||"",avgMonths:((pe=Ee.historical_stats)==null?void 0:pe.avg_duration_months)||18};return Re}),ee=t(()=>{var Ee,re;const U=o.value.stage,Re={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[U]||{x:150,y:150},se=o.value.dimension_scores||{},ge=((Ee=se.growth)==null?void 0:Ee.score)||0,Te=((re=se.inflation)==null?void 0:re.score)||0,pe=Math.max(-30,Math.min(30,ge*15)),ke=Math.max(-30,Math.min(30,-Te*15));return{x:Re.x+pe,y:Re.y+ke,prevX:W.x,prevY:W.y}}),M=t(()=>{var se;const U=Math.min(100,((se=o.value.timing)==null?void 0:se.progress_percent)||0),de=o.value.color||"var(--state-success-solid)",Re=U>100?"linear-gradient(90deg, "+de+", var(--state-warning-solid))":de;return{width:U+"%",background:Re}});function s(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[o.value.stage]||0}function y(){var U,de;return((de=(U=o.value)==null?void 0:U.timing)==null?void 0:de.progress_percent)||0}function n(){var U,de;return((de=(U=o.value)==null?void 0:U.timing)==null?void 0:de.duration_months)||0}function p(){var U,de;return((de=(U=o.value)==null?void 0:U.timing)==null?void 0:de.avg_duration_months)||18}function X(U){var ge,Te;const de=ne.value,Re=((ge=de[o.value.stage])==null?void 0:ge.order)||0;return(((Te=de[U])==null?void 0:Te.order)||0)<Re}function T(U){return R[U]||U}function b(U){return r[U]||U}function u(U){const de=["var(--state-success-solid)","var(--state-warning-solid)","var(--state-info-solid)","var(--text-tertiary)"];return de[U-1]||de[3]}async function k(){try{const de=await(await fetch("/api/market/merrill-clock/stages")).json();de.success&&de.data&&(S.value=de.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function c(){D.value=!0;try{oe();const de=await(await fetch("/api/market/merrill-clock/timeline")).json();if(de.success&&de.data){const Re=Array.isArray(de.data.cycles)?de.data.cycles.slice().reverse():[];x.value={cycles:Re}}}catch{console.warn("获取美林时钟时间轴失败")}finally{D.value=!1}}async function A(U){await q(U)}async function oe(){try{const de=await(await fetch("/api/market/merrill-clock/snapshots?limit=30")).json();de&&de.success&&de.data&&(C.value=de.data.items||[],O.value=de.data.total||0)}catch{console.warn("获取美林时钟评估轨迹失败")}}async function Y(){var U,de;try{const se=await(await fetch("/api/market/merrill-clock")).json(),ge=se.stage||"recovery",Te=S.value[ge]||{};if(o.value={...Te,...se,stage_cn:se.stage_cn||Te.stage_cn||"",stage_name:se.stage_name||Te.name||"",name:se.name||Te.name||"复苏期"},i.value=new Date().toLocaleTimeString("zh-CN"),B.value&&B.value!==ge){const pe=S.value,ke=((U=pe[B.value])==null?void 0:U.name)||B.value,Ee=((de=pe[ge])==null?void 0:de.name)||ge;ElementPlus.ElMessage({message:"美林时钟阶段切换："+ke+" → "+Ee,type:"warning",duration:6e3,showClose:!0})}B.value=ge}catch(Re){console.error("获取美林时钟失败:",Re);const se=S.value.recovery||{};o.value={...se,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function q(U){var Re;w.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",E.value=S.value[U]||S.value.recovery||{};const de=((Re=o.value)==null?void 0:Re.stage)===U;E.value._isCurrent=de,de&&o.value&&(E.value._nextPrediction=o.value.next_stage_prediction,E.value._confidence=o.value.confidence,E.value._stage=o.value.stage,E.value._dimensions=o.value.dimension_scores);try{const ge=await(await fetch("/api/market/merrill-clock/stage/"+U)).json();if(ge.success&&ge.data){const Te={...S.value[U],...ge.data};Te._is_current!==void 0&&(Te._isCurrent=Te._is_current),Te._current_timing&&(Te._currentTiming=Te._current_timing),Te._last_period&&(Te._lastPeriod=Te._last_period),E.value._nextPrediction&&(Te._nextPrediction=E.value._nextPrediction),E.value._confidence&&(Te._confidence=E.value._confidence),E.value._stage&&(Te._stage=E.value._stage),E.value._dimensions&&(Te._dimensions=E.value._dimensions),Object.assign(E.value,Te)}}catch(se){console.warn("获取阶段详情失败:",se)}}function K(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:d.value.autoRefresh,refreshInterval:d.value.refreshInterval})),d.value.autoRefresh?(clearInterval(I),I=setInterval(Y,d.value.refreshInterval*1e3)):clearInterval(I),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function ie(){F.value=!0,h.value="";try{const de=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();de.success?(h.value="重评估完成："+(de.stage_name||de.stage),await Y(),ElementPlus.ElMessage.success("重评估完成")):(h.value=de.message||"重评估失败",ElementPlus.ElMessage.error(de.message||"重评估失败"))}catch{h.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{F.value=!1}}function me(){const U=localStorage.getItem("merrill_clock_config");if(U)try{const de=JSON.parse(U);d.value={...d.value,...de}}catch{}d.value.autoRefresh&&(I=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),Y()},d.value.refreshInterval*1e3))}function Ce(){I&&clearInterval(I)}return e(()=>{Ce()}),{merrillData:o,merrillStagesConfig:S,showMerrillDetail:w,merrillDetailData:E,merrillTimeline:x,merrillSnapshots:C,merrillSnapshotsTotal:O,fetchMerrillSnapshots:oe,timelineLoading:D,merrillClockConfig:d,merrillClockLastUpdated:i,merrillReevalResult:h,merrillReevalLoading:F,stages:J,indicatorList:N,dimensionScoreList:j,detailDimensionScoreList:$,confidenceColor:Z,timelineStages:ne,clockPosition:ee,merrillProgressStyle:M,FULL_CYCLE_MONTHS:m,getStageAngle:s,getCycleProgress:y,getCurrentStageMonths:n,getStageTotalMonths:p,isStageCompleted:X,getCharLabel:T,getAssetName:b,getRankColor:u,fetchMerrillStages:k,fetchMerrillClock:Y,loadMerrillTimeline:c,showTimelineStage:A,showStageDetail:q,saveMerrillClockConfig:K,doMerrillReevaluate:ie,startAutoRefresh:me,stopAutoRefresh:Ce}}})();(function(){function a(r){return getComputedStyle(document.documentElement).getPropertyValue(r).trim()}var t=[210,28,165,290,348,190,52,250];function g(){var r=!1;try{r=document.documentElement.getAttribute("data-theme-mode")==="dark"}catch{}var l=r?62:58,f=r?62:40;return t.map(function(o){return"hsl("+o+", "+l+"%, "+f+"%)"})}function e(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:a("--chart-bg")||"transparent",color:g(),legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const v=[];function m(r){typeof r=="function"&&v.push(r)}function R(){v.slice().forEach(function(r){try{r()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:e,categoricalPalette:g,registerChart:m,refreshAllCharts:R,init(){return{getEChartsTheme:e,registerChart:m,refreshAllCharts:R}}}})();(function(){const{ref:a,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const g=t("qcState");try{const m=localStorage.getItem("quant_sidebar_collapsed");m!==null&&g.sidebarCollapsed&&(g.sidebarCollapsed.value=m==="1")}catch{}if(!g)return{};const e=async m=>{if(window.__quantGoPage){await window.__quantGoPage(m.key,m.subPages[0]||"");return}g.currentPage.value=m.key,g.currentSubPage.value=m.subPages[0]||""},v=()=>{g.sidebarCollapsed.value=!g.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",g.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:g.menus,currentPage:g.currentPage,sidebarCollapsed:g.sidebarCollapsed,navigate:e,toggle:v,sanitizeHtml:g.sanitizeHtml,keyClick:g.keyClick,t:g.t}}}})();const Ea={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(a){const t=a,g={"layout-dashboard":Kv,calendar:Bv,bot:Hv,"flask-conical":Fv,zap:Vv,settings:jv,"chevron-down":Ov,"chevron-right":Nv,"chevron-left":Iv,menu:Lv,search:Av,bell:zv,sun:Rv,moon:Dv,user:Pv,"user-round":Tv,home:Mv,x:Ev,database:qv,activity:Cv,clock:Sv,"bar-chart-3":xv,shield:_v,"hard-drive":kv,"file-text":wv,users:bv,cpu:yv,"pie-chart":hv,info:gv,"log-out":fv,palette:pv,languages:mv,refresh:vv,download:uv,"external-link":dv,command:cv,sparkles:rv,"trending-up":ov,"trending-down":iv,"circle-dot":nv,check:lv,"alert-triangle":sv,loader:av,"arrow-left":tv,"arrow-right":ev,eye:Zu,"eye-off":Xu,lock:$u,"sliders-horizontal":Qu,play:Ju,history:Yu,layers:Gu,"line-chart":Uu,target:Wu,"search-check":Ku,star:Bu,"message-circle":Hu,"calendar-days":Fu,"calendar-range":Vu,"calendar-check":ju,brain:Ou,lightbulb:Nu,"octagon-x":Iu,flag:Lu,package:Au,"clipboard-list":zu,pin:Ru,"radio-tower":Du,gauge:Pu,landmark:Tu,"candlestick-chart":Mu,wallet:Eu,"badge-check":qu,key:Cu,factory:Su,trophy:xu,rocket:_u,flame:ku,"map-pin":wu,"scroll-text":bu,"book-open":yu,dna:hu,"bar-chart":gu,plus:fu,"star-off":pu,upload:mu,gem:vu,"folder-open":uu,link:du,save:cu,"trash-2":ru,pause:ou,"help-circle":iu,"play-circle":nu,pencil:lu,folder:su,code:au,sprout:tu,wheat:eu,snowflake:Zd,fuel:Xd,banknote:$d,send:Qd,inbox:Jd,"wifi-off":Yd,"check-circle-2":Gd,"x-circle":Ud},e=()=>g[t.name]||g["circle-dot"];return(v,m)=>(ve(),ga(zd(e()),{size:a.size,"stroke-width":a.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},Ma=(a,t)=>{const g=a.__vccOpts||a;for(const[e,v]of t)g[e]=v;return g},Wv={name:"qc-sidebar",components:{AppIcon:Ea},setup(){const a=Ra("qcState");if(!a)return{};const t=at(()=>a.menus&&a.menus.value||[]),g=at(()=>a.currentPage&&a.currentPage.value||""),e=at(()=>a.navMode&&a.navMode.value||"subnav"),v=at({get:()=>a.sidebarCollapsed&&a.sidebarCollapsed.value||!1,set:D=>{a.sidebarCollapsed&&(a.sidebarCollapsed.value=D)}}),m=wt({}),R={research:"量化投研",platform:"平台管理"},r=["research","platform"],l=D=>g.value===D.key,f=(D,d)=>g.value===D.key&&a.currentSubPage&&a.currentSubPage.value===d,o=D=>Array.isArray(D.subPages)&&D.subPages.length>1,S=(D,d)=>a.subPageNames&&a.subPageNames[d]||d;function w(D){!o(D)||v.value||(m.value[D.key]=!m.value[D.key])}function E(){t.value.forEach(D=>{m.value[D.key]===void 0&&(m.value[D.key]=l(D))})}async function x(D,d){const i=d||D.subPages&&D.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(D.key,i):(a.currentPage.value=D.key,a.currentSubPage&&(a.currentSubPage.value=i)),a.navigateTo&&a.navigateTo(D.key,i)}function C(){v.value=!v.value;try{localStorage.setItem("sidebar_collapsed",v.value?"1":"0")}catch{}}function O(D){if(D.ctrlKey&&D.key.toLowerCase()==="b"&&(D.preventDefault(),C()),!D.ctrlKey&&!D.metaKey&&!D.altKey&&(D.key==="ArrowDown"||D.key==="ArrowUp")){const d=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),i=d.indexOf(document.activeElement);if(i>=0){D.preventDefault();const h=d[(i+(D.key==="ArrowDown"?1:d.length-1))%d.length];h&&h.focus()}}}return za(()=>{E(),document.addEventListener("keydown",O)}),us(()=>document.removeEventListener("keydown",O)),{state:a,menus:t,currentPage:g,navMode:e,sidebarCollapsed:v,expandedMenus:m,GROUP_LABELS:R,GROUPS:r,isActive:l,isChildActive:f,hasChildren:o,subLabel:S,toggleSubmenu:w,navigate:x,toggleCollapse:C}}},Uv={class:"qc-sidebar-logo"},Gv={key:0,class:"qc-logo-text"},Yv={class:"qc-sidebar-nav"},Jv={key:0,class:"qc-nav-group"},Qv={key:0,class:"qc-nav-group-label"},$v=["href","aria-current","onClick"],Xv={key:0,class:"qc-sidebar-label"},Zv={key:1,class:"qc-nav-badge"},em=["aria-expanded","aria-controls","onClick"],tm=["id"],am=["href","aria-current","onClick"],sm={class:"qc-sidebar-child-label"},lm={class:"qc-sidebar-footer"},nm=["aria-expanded","aria-label","title"];function im(a,t,g,e,v,m){const R=Vt("AppIcon"),r=Vt("el-tooltip");return ve(),fe("nav",{class:ct(["qc-sidebar",{"is-collapsed":e.sidebarCollapsed}]),"aria-label":"主导航"},[be("div",Uv,[t[1]||(t[1]=Ad('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),e.sidebarCollapsed?Be("",!0):(ve(),fe("span",Gv,Le(e.state.t("login.title")),1))]),be("div",Yv,[(ve(!0),fe(rt,null,Ct(e.GROUPS,l=>(ve(),fe(rt,{key:l},[e.menus.some(f=>f.group===l)?(ve(),fe("div",Jv,[e.sidebarCollapsed?Be("",!0):(ve(),fe("span",Qv,Le(e.GROUP_LABELS[l]),1)),(ve(!0),fe(rt,null,Ct(e.menus.filter(f=>f.group===l),f=>(ve(),fe(rt,{key:f.key},[be("div",{class:ct(["qc-sidebar-item",{"has-children":e.navMode==="tree"&&e.hasChildren(f),"is-child-open":e.navMode==="tree"&&e.expandedMenus[f.key]}])},[nt(r,{content:f.name,placement:"right","show-after":300,disabled:!e.sidebarCollapsed},{default:ta(()=>[be("a",{class:ct(["qc-sidebar-link",{"is-active":e.isActive(f)}]),href:"#"+f.key,"aria-current":e.isActive(f)?"page":null,onClick:jt(o=>e.navigate(f),["prevent"])},[nt(R,{name:f.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),e.sidebarCollapsed?Be("",!0):(ve(),fe("span",Xv,Le(f.name),1)),!e.sidebarCollapsed&&f.badge?(ve(),fe("span",Zv,Le(f.badge),1)):Be("",!0)],10,$v)]),_:2},1032,["content","disabled"]),!e.sidebarCollapsed&&e.navMode==="tree"&&e.hasChildren(f)?(ve(),fe("button",{key:0,class:ct(["qc-sidebar-chevron",{"is-open":e.expandedMenus[f.key]}]),"aria-expanded":!!e.expandedMenus[f.key],"aria-controls":"submenu-"+f.key,"aria-label":"展开子菜单",onClick:o=>e.toggleSubmenu(f)},[nt(R,{name:"chevron-down",size:14})],10,em)):Be("",!0)],2),!e.sidebarCollapsed&&e.navMode==="tree"&&e.hasChildren(f)&&e.expandedMenus[f.key]?(ve(),fe("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+f.key},[(ve(!0),fe(rt,null,Ct(f.subPages,o=>(ve(),fe("a",{key:o,class:ct(["qc-sidebar-item qc-sidebar-child",{"is-active":e.isChildActive(f,o)}]),href:"#"+f.key+"-"+o,"aria-current":e.isChildActive(f,o)?"page":null,onClick:jt(S=>e.navigate(f,o),["prevent"])},[be("span",sm,Le(e.subLabel(f,o)),1)],10,am))),128))],8,tm)):Be("",!0)],64))),128))])):Be("",!0)],64))),128))]),be("div",lm,[be("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!e.sidebarCollapsed,"aria-label":e.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:e.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:t[0]||(t[0]=(...l)=>e.toggleCollapse&&e.toggleCollapse(...l))},[nt(R,{name:e.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,nm)])],2)}const om=Ma(Wv,[["render",im]]),rm={name:"qc-header",components:{AppIcon:Ea},setup(){const a=Ra("qcState");if(!a)return{};const t=wt(!1),g=at(()=>a.currentUser&&a.currentUser.value||null),e=at(()=>a.navMode&&a.navMode.value||"subnav"),v=at(()=>{const se=a.currentPage&&a.currentPage.value,ge=(a.menus&&a.menus.value||[]).find(Te=>Te.key===se);return!!(ge&&ge.subPages&&ge.subPages.length)}),m=at(()=>{const se=a.currentPage&&a.currentPage.value,ge=a.currentPageName&&a.currentPageName.value;if(ge)return ge;const Te=(a.menus&&a.menus.value||[]).find(pe=>pe.key===se);return Te&&Te.name||se||""}),R=at(()=>{const se=a.currentSubPage&&a.currentSubPage.value;return se&&a.subPageNames&&a.subPageNames[se]||se||""}),r=wt(typeof window<"u"?window.innerWidth<768:!1);function l(){r.value=window.innerWidth<768}za(()=>window.addEventListener("resize",l)),us(()=>window.removeEventListener("resize",l));const f=wt(!1),o=at(()=>{const se=a.currentSubPage&&a.currentSubPage.value;return se&&a.subPageNames&&a.subPageNames[se]||se||""}),S=at(()=>{const se=a.currentPage&&a.currentPage.value,ge=(a.menus&&a.menus.value||[]).find(Te=>Te.key===se);return(ge&&ge.subPages||[]).map(Te=>({key:Te,label:a.subPageNames&&a.subPageNames[Te]||Te}))});function w(){f.value=!f.value}function E(){f.value=!1}function x(se){f.value=!1,a.activateTab&&a.activateTab(a.currentPage.value,se)}const C=at(()=>(a.currentTheme&&a.currentTheme.value)==="dark"),O=wt(!1),D=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],d=at(()=>{const se=D.find(ge=>ge.value===e.value);return se&&se.label||e.value});function i(){O.value=!O.value}function h(){O.value=!1}function F(se){O.value=!1,a.setNavMode&&a.setNavMode(se)}const B=at({get:()=>a.searchQuery&&a.searchQuery.value||"",set:se=>{a.searchQuery&&(a.searchQuery.value=se)}}),I=wt(!1),W=wt([]),J=wt(!1),N=wt(!1);function z(){const se=localStorage.getItem("quant_token")||"";return se?{Authorization:"Bearer "+se,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function j(){J.value=!0,N.value=!1;try{const ge=await(await fetch("/api/alerts/history?limit=8",{headers:z()})).json();ge&&ge.success?W.value=ge.history||[]:W.value=[]}catch{N.value=!0,W.value=[]}finally{J.value=!1}}function $(){I.value=!I.value,I.value&&j()}function Z(){I.value=!1}function ne(){I.value=!1,a.activateTab&&a.activateTab("system","notification")}const ee=wt(!1),M=a.themeHues||[45,220,0,140,270,320,-1],s=at(()=>{const se=a.themeHue&&a.themeHue.value;return Number.isFinite(se)?se:45}),y=at(()=>a.themeMode&&a.themeMode.value||"system"),n=[{k:"compact",n:"紧凑"},{k:"comfortable",n:"标准"},{k:"spacious",n:"宽松"}],p=at(()=>a.density&&a.density.value||"comfortable");function X(se){a.changeDensity&&a.changeDensity(se)}function T(se){return a.hueColor?a.hueColor(se):"hsl("+se+", 75%, 42%)"}const b={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色","-1":"中性"};function u(se){return a.hueName?a.hueName(se):b[se]||"自定义 "+se}function k(){ee.value=!ee.value}function c(){ee.value=!1}function A(se){a.changeThemeMode&&a.changeThemeMode(se)}function oe(se){a.changeThemeHue&&a.changeThemeHue(se)}function Y(){a.changeThemeMode&&a.changeThemeMode(C.value?"light":"dark")}function q(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}a.sidebarCollapsed&&(a.sidebarCollapsed.value=!a.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",a.sidebarCollapsed.value?"1":"0")}catch{}}function K(){t.value=!t.value}function ie(){t.value=!1}function me(se){return()=>{ie(),se&&se()}}function Ce(){ie(),a.handleLogout&&a.handleLogout()}const U=at(()=>a.marketData&&a.marketData.value||{}),de=wt(typeof window<"u"&&localStorage.getItem("qc.hideNonTradingBanner")==="1");return{marketData:U,bannerDismissed:de,dismissBanner:()=>{de.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},state:a,showUserMenu:t,currentUser:g,isDark:C,searchQuery:B,navMode:e,crumbRoot:m,crumbSub:R,hasToptabs:v,toggleThemeQuick:Y,toggleSidebar:q,openUserMenu:K,closeUserMenu:ie,menuItem:me,handleLogout:Ce,openBellMenu:I,notifItems:W,notifLoading:J,notifError:N,toggleBell:$,closeBell:Z,goNotificationCenter:ne,openThemeMenu:ee,themeHues:M,themeHue:s,themeMode:y,hueColor:T,hueName:u,toggleThemeMenu:k,closeThemeMenu:c,pickThemeMode:A,pickThemeHue:oe,DENSITY_MODES:n,density:p,pickDensity:X,openNavModeMenu:O,NAV_MODES:D,navModeLabel:d,toggleNavModeMenu:i,closeNavModeMenu:h,pickNavMode:F,isMobile:r,openSubnavPicker:f,currentSubLabel:o,subnavOptions:S,toggleSubnavPicker:w,closeSubnavPicker:E,pickSubnav:x}}},cm={class:"qc-header-wrap"},dm={key:0,class:"non-trading-banner",role:"status"},um={class:"qc-header"},vm={class:"qc-header-left"},mm=["aria-label"],pm={key:0,class:"qc-header-subnav"},fm=["aria-expanded"],gm={class:"qc-subnav-picker-label"},hm={key:0,class:"qc-subnav-picker-menu",role:"menu"},ym=["onClick"],bm={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},wm={class:"qc-crumb qc-crumb-root"},km={class:"qc-crumb qc-crumb-sub"},_m={key:1,class:"qc-crumb qc-crumb-root"},xm={class:"qc-header-center"},Sm={key:0,class:"qc-search-sublabel"},Cm={class:"qc-header-right"},qm={class:"qc-hdr-pop"},Em=["aria-expanded"],Mm={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},Tm={key:0,class:"qc-bell-state"},Pm={key:1,class:"qc-bell-state"},Dm={key:2,class:"qc-bell-state"},Rm={key:3,class:"qc-bell-list"},zm={class:"qc-bell-item-title"},Am={class:"qc-bell-item-meta"},Lm={key:0},Im={class:"qc-bell-item-time"},Nm={class:"qc-hdr-pop"},Om=["aria-expanded"],jm={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},Vm={class:"qc-theme-modes"},Fm=["onClick"],Hm={class:"qc-theme-swatches"},Bm=["title","aria-label","onClick"],Km={key:0,class:"qc-theme-swatch-check"},Wm={class:"qc-theme-custom-label"},Um={class:"qc-theme-modes"},Gm=["onClick"],Ym={key:0,class:"qc-navmode-switch"},Jm=["aria-label","title","aria-expanded"],Qm={key:0,class:"qc-navmode-menu",role:"menu"},$m=["onClick","onKeydown"],Xm={class:"qc-navmode-item-main"},Zm={class:"qc-user-menu"},ep=["aria-label","aria-expanded"],tp={key:0,class:"qc-user-dropdown",role:"menu"},ap={class:"qc-user-dropdown-header"},sp={class:"qc-user-dropdown-name"},lp={key:0,class:"qc-user-dropdown-chip"};function np(a,t,g,e,v,m){var S,w,E,x,C,O,D;const R=Vt("AppIcon"),r=Vt("qc-top-tabs"),l=Vt("el-autocomplete"),f=Vt("el-slider"),o=Ld("click-outside");return ve(),fe("div",cm,[e.marketData&&e.marketData.is_trading_day===!1&&!e.bannerDismissed?(ve(),fe("div",dm,[nt(R,{name:"alert-triangle",size:14}),t[15]||(t[15]=be("span",null,"今日非交易日 · 当前展示最近交易日历史数据",-1)),be("button",{class:"non-trading-banner-close",onClick:t[0]||(t[0]=(...d)=>e.dismissBanner&&e.dismissBanner(...d)),"aria-label":"关闭提示"},"×")])):Be("",!0),be("header",um,[be("div",vm,[be("button",{class:"qc-icon-btn","aria-label":(S=e.state.sidebarCollapsed)!=null&&S.value?"展开侧边栏":"折叠侧边栏",onClick:t[1]||(t[1]=(...d)=>e.toggleSidebar&&e.toggleSidebar(...d))},[nt(R,{name:"menu",size:20})],8,mm),e.isMobile?ja((ve(),fe("div",pm,[be("button",{class:"qc-subnav-picker","aria-expanded":e.openSubnavPicker,onClick:t[2]||(t[2]=(...d)=>e.toggleSubnavPicker&&e.toggleSubnavPicker(...d))},[be("span",gm,Le(e.currentSubLabel||"二级"),1),nt(R,{name:"chevron-down",size:14})],8,fm),e.openSubnavPicker?(ve(),fe("div",hm,[(ve(!0),fe(rt,null,Ct(e.subnavOptions,d=>(ve(),fe("div",{key:d.key,class:ct(["qc-subnav-picker-item",{"is-active":d.key===(e.state.currentSubPage&&e.state.currentSubPage.value)}]),role:"menuitem",onClick:i=>e.pickSubnav(d.key)},Le(d.label),11,ym))),128))])):Be("",!0)])),[[o,e.closeSubnavPicker]]):Be("",!0),e.navMode==="tree"&&!e.isMobile?(ve(),fe("div",bm,[be("span",wm,Le(e.crumbRoot),1),e.crumbSub?(ve(),fe(rt,{key:0},[t[16]||(t[16]=be("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),be("span",km,Le(e.crumbSub),1)],64)):Be("",!0)])):Be("",!0),e.navMode==="toptab"&&!e.isMobile?(ve(),fe(rt,{key:2},[e.hasToptabs?(ve(),ga(r,{key:0})):(ve(),fe("span",_m,Le(e.crumbRoot),1))],64)):Be("",!0)]),be("div",xm,[nt(l,{class:"qc-header-search",modelValue:e.searchQuery,"onUpdate:modelValue":t[3]||(t[3]=d=>e.searchQuery=d),"fetch-suggestions":e.state.searchStocks,placeholder:e.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:e.state.onSearchSelect},{prefix:ta(()=>[nt(R,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:ta(()=>[...t[17]||(t[17]=[be("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:ta(d=>{var i,h,F,B,I;return[be("span",null,Le((i=d==null?void 0:d.item)==null?void 0:i.icon)+" "+Le(((h=d==null?void 0:d.item)==null?void 0:h.label)||((F=d==null?void 0:d.item)==null?void 0:F.name)),1),(B=d==null?void 0:d.item)!=null&&B.subLabel?(ve(),fe("span",Sm,Le((I=d==null?void 0:d.item)==null?void 0:I.subLabel),1)):Be("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),be("div",Cm,[ja((ve(),fe("div",qm,[be("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":e.openBellMenu,onClick:t[4]||(t[4]=(...d)=>e.toggleBell&&e.toggleBell(...d))},[nt(R,{name:"bell",size:20})],8,Em),e.openBellMenu?(ve(),fe("div",Mm,[t[18]||(t[18]=be("div",{class:"qc-bell-header"},"通知",-1)),e.notifLoading?(ve(),fe("div",Tm,"加载中...")):e.notifError?(ve(),fe("div",Pm,"加载失败")):e.notifItems.length?(ve(),fe("div",Rm,[(ve(!0),fe(rt,null,Ct(e.notifItems,(d,i)=>(ve(),fe("div",{key:d.id||i,class:ct(["qc-bell-item",{"is-fail":d.ok===0}])},[be("div",zm,Le(d.title||d.event_type||"事件"),1),be("div",Am,[qa(Le(d.channel||""),1),d.recipient?(ve(),fe("span",Lm," · "+Le(d.recipient),1)):Be("",!0),be("span",Im,Le(d.created_at||""),1)])],2))),128))])):(ve(),fe("div",Dm,"暂无通知")),be("button",{class:"qc-bell-footer",onClick:t[5]||(t[5]=(...d)=>e.goNotificationCenter&&e.goNotificationCenter(...d))},"前往通知中心 →")])):Be("",!0)])),[[o,e.closeBell]]),ja((ve(),fe("div",Nm,[be("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":e.openThemeMenu,onClick:t[6]||(t[6]=(...d)=>e.toggleThemeMenu&&e.toggleThemeMenu(...d))},[nt(R,{name:"palette",size:20})],8,Om),e.openThemeMenu?(ve(),fe("div",jm,[t[19]||(t[19]=be("div",{class:"qc-theme-section-label"},"外观模式",-1)),be("div",Vm,[(ve(),fe(rt,null,Ct([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],d=>be("button",{key:d.k,class:ct(["qc-theme-mode",{"is-active":e.themeMode===d.k}]),onClick:i=>e.pickThemeMode(d.k)},Le(d.n),11,Fm)),64))]),t[20]||(t[20]=be("div",{class:"qc-theme-section-label"},"主题色",-1)),be("div",Hm,[(ve(!0),fe(rt,null,Ct(e.themeHues,d=>(ve(),fe("button",{key:d,class:ct(["qc-theme-swatch",{"is-active":e.themeHue===d}]),style:Id({background:e.hueColor(d)}),title:e.hueName(d),"aria-label":e.hueName(d),onClick:i=>e.pickThemeHue(d)},[e.themeHue===d?(ve(),fe("span",Km,"✓")):Be("",!0)],14,Bm))),128))]),nt(f,{class:"qc-theme-slider","model-value":e.themeHue,min:0,max:359,step:1,size:"small",onChange:e.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),be("div",Wm,"自定义 "+Le(e.themeHue)+"°",1),t[21]||(t[21]=be("div",{class:"qc-theme-section-label"},"信息密度",-1)),be("div",Um,[(ve(!0),fe(rt,null,Ct(e.DENSITY_MODES,d=>(ve(),fe("button",{key:d.k,class:ct(["qc-theme-mode",{"is-active":e.density===d.k}]),onClick:i=>e.pickDensity(d.k)},Le(d.n),11,Gm))),128))])])):Be("",!0)])),[[o,e.closeThemeMenu]]),e.isMobile?Be("",!0):ja((ve(),fe("div",Ym,[be("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+e.navModeLabel,title:"导航形态: "+e.navModeLabel,"aria-expanded":e.openNavModeMenu,onClick:t[7]||(t[7]=(...d)=>e.toggleNavModeMenu&&e.toggleNavModeMenu(...d))},[nt(R,{name:"layers",size:20})],8,Jm),e.openNavModeMenu?(ve(),fe("div",Qm,[(ve(!0),fe(rt,null,Ct(e.NAV_MODES,d=>(ve(),fe("div",{key:d.value,class:ct(["qc-user-dropdown-item qc-navmode-item",{"is-active":e.navMode===d.value}]),role:"menuitem",tabindex:"0",onClick:i=>e.pickNavMode(d.value),onKeydown:[fa(jt(i=>e.pickNavMode(d.value),["prevent"]),["enter"]),fa(jt(i=>e.pickNavMode(d.value),["prevent"]),["space"])]},[be("div",Xm,[be("span",null,Le(d.label),1),e.navMode===d.value?(ve(),ga(R,{key:0,name:"check",size:14})):Be("",!0)])],42,$m))),128))])):Be("",!0)])),[[o,e.closeNavModeMenu]]),ja((ve(),fe("div",Zm,[be("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((w=e.currentUser)==null?void 0:w.username)||""),"aria-haspopup":"menu","aria-expanded":e.showUserMenu,onClick:t[8]||(t[8]=(...d)=>e.openUserMenu&&e.openUserMenu(...d))},Le((((E=e.currentUser)==null?void 0:E.username)||"A").charAt(0).toUpperCase()),9,ep),e.showUserMenu?(ve(),fe("div",tp,[be("div",ap,[be("span",sp,Le((x=e.currentUser)==null?void 0:x.username),1),((C=e.currentUser)==null?void 0:C.role)==="guest"?(ve(),fe("span",lp,"访客")):Be("",!0)]),((O=e.currentUser)==null?void 0:O.role)==="admin"?(ve(),fe("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:t[9]||(t[9]=d=>e.menuItem(e.state.resetSetupWizard)()),onKeydown:t[10]||(t[10]=fa(jt(d=>e.menuItem(e.state.resetSetupWizard)(),["prevent"]),["enter"]))},[nt(R,{name:"settings",size:16}),t[22]||(t[22]=qa(" 重新运行初始化向导 ",-1))],32)):Be("",!0),((D=e.currentUser)==null?void 0:D.role)!=="guest"?(ve(),fe("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:t[11]||(t[11]=d=>e.menuItem(()=>{e.state.showChangePassword&&(e.state.showChangePassword.value=!0)})()),onKeydown:t[12]||(t[12]=fa(jt(d=>e.menuItem(()=>{e.state.showChangePassword&&(e.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[nt(R,{name:"lock",size:16}),t[23]||(t[23]=qa(" 修改密码 ",-1))],32)):Be("",!0),t[25]||(t[25]=be("div",{class:"qc-user-dropdown-divider"},null,-1)),be("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:t[13]||(t[13]=(...d)=>e.handleLogout&&e.handleLogout(...d)),onKeydown:t[14]||(t[14]=fa(jt((...d)=>e.handleLogout&&e.handleLogout(...d),["prevent"]),["enter"]))},[nt(R,{name:"log-out",size:16}),t[24]||(t[24]=qa(" 退出登录 ",-1))],32)])):Be("",!0)])),[[o,e.closeUserMenu]])])])])}const ip=Ma(rm,[["render",np]]),op=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],rp={name:"qc-subnav",components:{AppIcon:Ea},setup(){const a=Ra("qcState");if(!a)return{};const t=at(()=>a.currentPage&&a.currentPage.value||""),g=at(()=>a.currentSubPage&&a.currentSubPage.value||""),e=at(()=>a.navMode&&a.navMode.value||"subnav"),v=wt({}),m=at(()=>a.menus&&a.menus.value||[]),R=at(()=>m.value.find(D=>D.key===t.value)||null),r=at(()=>R.value&&R.value.subPages||[]),l=at(()=>a.currentPageName&&a.currentPageName.value||t.value),f=D=>a.subPageNames&&a.subPageNames[D]||D,o=D=>g.value===D;function S(D){a.openTab?a.openTab(t.value,D):a.currentSubPage&&(a.currentSubPage.value=D);try{localStorage.setItem("quant_last_subpage",D)}catch{}}function w(D){a.openTab?a.openTab(t.value,D.key):a.currentSubPage&&(a.currentSubPage.value=D.key);try{localStorage.setItem("quant_last_subpage",D.key)}catch{}}function E(D){v.value[D]=!v.value[D]}const x={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}};return{state:a,currentPage:t,currentSubPage:g,navMode:e,subPages:r,currentMenu:R,collapsedGroups:v,pageTitle:l,subLabel:f,isSubActive:o,goSub:S,goSystemItem:w,toggleGroup:E,SYSTEM_GROUPS:op,subIcon:(D,d)=>x[D]&&x[D][d]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},cp={key:0,class:"qc-subnav-column","aria-label":"二级导航"},dp={class:"qc-subnav-column-header"},up={class:"qc-subnav-current-label"},vp={class:"qc-subnav-column-body"},mp=["onClick"],pp=["href","onClick"],fp={class:"qc-subnav-group-label"},gp=["href","onClick"],hp=["href","onClick"];function yp(a,t,g,e,v,m){const R=Vt("AppIcon");return e.navMode==="subnav"?(ve(),fe("aside",cp,[be("div",dp,[be("span",up,Le(e.pageTitle),1)]),be("div",vp,[e.currentPage==="system"?(ve(!0),fe(rt,{key:0},Ct(e.SYSTEM_GROUPS,r=>(ve(),fe("div",{key:r.label,class:"qc-subnav-group"},[be("div",{class:"qc-subnav-group-label",onClick:l=>e.toggleGroup(r.label)},[be("span",null,Le(r.label),1),nt(R,{name:"chevron-down",size:12,class:ct({"is-open":!e.collapsedGroups[r.label]})},null,8,["class"])],8,mp),e.collapsedGroups[r.label]?Be("",!0):(ve(!0),fe(rt,{key:0},Ct(r.items,l=>(ve(),fe("a",{key:l.key,class:ct(["qc-subnav-item",{"is-active":e.isSubActive(l.key)}]),href:"#"+l.key,onClick:jt(f=>e.goSystemItem(l),["prevent"])},[nt(R,{name:l.icon,size:16},null,8,["name"]),be("span",null,Le(l.label),1)],10,pp))),128))]))),128)):e.currentPage==="shortterm"?(ve(!0),fe(rt,{key:1},Ct(e.SHORTTERM_GROUPS,r=>(ve(),fe("div",{key:r.label,class:"qc-subnav-group"},[be("div",fp,[be("span",null,Le(r.label),1)]),(ve(!0),fe(rt,null,Ct(r.items,l=>(ve(),fe("a",{key:l,class:ct(["qc-subnav-item",{"is-active":e.isSubActive(l)}]),href:"#"+e.currentPage+"/"+l,onClick:jt(f=>e.goSub(l),["prevent"])},[nt(R,{name:e.subIcon(e.currentPage,l),size:16},null,8,["name"]),be("span",null,Le(e.subLabel(l)),1)],10,gp))),128))]))),128)):(ve(!0),fe(rt,{key:2},Ct(e.subPages,r=>(ve(),fe("a",{key:r,class:ct(["qc-subnav-item",{"is-active":e.isSubActive(r)}]),href:"#"+e.currentPage+"/"+r,onClick:jt(l=>e.goSub(r),["prevent"])},[nt(R,{name:e.subIcon(e.currentPage,r),size:16},null,8,["name"]),be("span",null,Le(e.subLabel(r)),1)],10,hp))),128))])])):Be("",!0)}const bp=Ma(rp,[["render",yp]]),wp=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],kp={name:"qc-mobile-nav",components:{AppIcon:Ea},setup(){const a=Ra("qcState");if(!a)return{};const t=wt(!1),g=wt(null),e=wt({}),v=at(()=>a.menus&&a.menus.value||[]),m=at(()=>a.currentPage&&a.currentPage.value||""),R={research:"量化投研",platform:"平台管理"},r=["research","platform"];function l(d){return Array.isArray(d.subPages)&&d.subPages.length>0}function f(d){l(d)&&(e.value[d.key]=!e.value[d.key])}function o(d,i){return m.value===d.key&&a.currentSubPage&&a.currentSubPage.value===i}function S(d){return a.subPageNames&&a.subPageNames[d]||d}async function w(d){const i=v.value.find(F=>F.key===d.key),h=i&&i.subPages&&i.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(d.key,h):(a.currentPage.value=d.key,a.currentSubPage&&(a.currentSubPage.value=h)),a.navigateTo&&a.navigateTo(d.key,h)}function E(d,i){t.value=!1;const h=i||d.subPages&&d.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(d.key,h):(a.currentPage.value=d.key,a.currentSubPage&&(a.currentSubPage.value=h)),a.navigateTo&&a.navigateTo(d.key,h)}function x(){t.value=!0,e.value.shortterm===void 0&&(e.value.shortterm=!0)}function C(){t.value=!1;const d=document.querySelector(".qc-header .qc-icon-btn");d&&d.focus()}function O(d){d.detail&&d.detail.open&&x()}function D(d){t.value&&d.key==="Escape"&&C()}return za(()=>{window.addEventListener("qc:drawer",O),document.addEventListener("keydown",D)}),us(()=>{window.removeEventListener("qc:drawer",O),document.removeEventListener("keydown",D)}),{state:a,TABS:wp,menus:v,currentPage:m,drawerOpen:t,drawerFocusRef:g,drawerExpanded:e,GROUP_LABELS:R,GROUPS:r,hasSub:l,toggleDrawerMenu:f,isDrawerSubActive:o,subLabel:S,goTab:w,goMenu:E,openDrawer:x,closeDrawer:C}}},_p={class:"qc-mobile-nav","aria-label":"移动端底部导航"},xp=["aria-current","onClick"],Sp={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},Cp={class:"qc-drawer-header"},qp={class:"qc-drawer-brand"},Ep={class:"qc-drawer-body"},Mp={key:0},Tp={class:"qc-nav-group-label"},Pp=["href","aria-current","onClick"],Dp={class:"qc-sidebar-label"},Rp=["aria-expanded","onClick"],zp={key:0,class:"qc-drawer-children"},Ap=["href","onClick"],Lp={class:"qc-drawer-footer"},Ip=["title"];function Np(a,t,g,e,v,m){var r,l;const R=Vt("AppIcon");return ve(),fe(rt,null,[be("nav",_p,[(ve(!0),fe(rt,null,Ct(e.TABS,f=>(ve(),fe("button",{key:f.key,class:ct(["qc-mobile-tab",{"is-active":e.currentPage===f.key}]),"aria-current":e.currentPage===f.key?"page":null,onClick:o=>e.goTab(f)},[nt(R,{name:f.icon,size:22},null,8,["name"]),be("span",null,Le(f.label),1)],10,xp))),128))]),(ve(),ga(Nd,{to:"body"},[e.drawerOpen?(ve(),fe("div",{key:0,class:"qc-drawer-backdrop",onClick:t[0]||(t[0]=(...f)=>e.closeDrawer&&e.closeDrawer(...f))})):Be("",!0),e.drawerOpen?(ve(),fe("div",Sp,[be("div",Cp,[be("div",qp,[t[4]||(t[4]=be("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[be("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),be("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),be("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),be("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),be("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),be("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),be("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),be("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),be("span",null,Le(e.state.t("login.title")),1)]),be("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:t[1]||(t[1]=(...f)=>e.closeDrawer&&e.closeDrawer(...f))},[nt(R,{name:"x",size:18})])]),be("div",Ep,[(ve(!0),fe(rt,null,Ct(e.GROUPS,f=>(ve(),fe(rt,{key:f},[e.menus.some(o=>o.group===f)?(ve(),fe("div",Mp,[be("div",Tp,Le(e.GROUP_LABELS[f]),1),(ve(!0),fe(rt,null,Ct(e.menus.filter(o=>o.group===f),o=>(ve(),fe("div",{key:o.key,class:"qc-drawer-menu"},[be("div",{class:ct(["qc-drawer-menu-row",{"is-active":e.currentPage===o.key}])},[be("a",{class:ct(["qc-sidebar-item",{"is-active":e.currentPage===o.key}]),href:"#"+o.key,"aria-current":e.currentPage===o.key?"page":null,onClick:jt(S=>e.hasSub(o)?e.toggleDrawerMenu(o):e.goMenu(o),["prevent"])},[nt(R,{name:o.iconName||"",size:18},null,8,["name"]),be("span",Dp,Le(o.name),1)],10,Pp),e.hasSub(o)?(ve(),fe("button",{key:0,class:ct(["qc-sidebar-chevron",{"is-open":e.drawerExpanded[o.key]}]),"aria-expanded":!!e.drawerExpanded[o.key],"aria-label":"展开子菜单",onClick:S=>e.toggleDrawerMenu(o)},[nt(R,{name:"chevron-down",size:14})],10,Rp)):Be("",!0)],2),e.drawerExpanded[o.key]?(ve(),fe("div",zp,[(ve(!0),fe(rt,null,Ct(o.subPages,S=>(ve(),fe("a",{key:S,class:ct(["qc-subnav-item",{"is-active":e.isDrawerSubActive(o,S)}]),href:"#"+o.key+"/"+S,onClick:jt(w=>e.goMenu(o,S),["prevent"])},[be("span",null,Le(e.subLabel(S)),1)],10,Ap))),128))])):Be("",!0)]))),128))])):Be("",!0)],64))),128))]),be("div",Lp,[be("button",{class:"qc-icon-btn",title:((r=e.state.currentTheme)==null?void 0:r.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:t[2]||(t[2]=f=>{var o;return e.state.changeThemeMode&&e.state.changeThemeMode(((o=e.state.currentTheme)==null?void 0:o.value)==="dark"?"light":"dark")})},[nt(R,{name:((l=e.state.currentTheme)==null?void 0:l.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,Ip),be("button",{class:"qc-icon-btn",title:"退出登录",onClick:t[3]||(t[3]=f=>e.state.handleLogout&&e.state.handleLogout())},[nt(R,{name:"log-out",size:18})])])])):Be("",!0)]))],64)}const Op=Ma(kp,[["render",Np]]),jp={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(a,{emit:t,slots:g}){const e=Ra("qcState");function v(o){t("select",o)}function m(o){const S=o.strategy_names||o.strategies||[],w=S.slice(0,3),E=S.length>3?S.length-3:0,x=w.map(C=>({text:C,more:!1}));return E&&x.push({text:"+"+E,more:!0}),x}function R(o){const S=Number(o);return isFinite(S)?S.toFixed(2):"—"}function r(o){const S=Number(o);return isFinite(S)?(S>0?"+":"")+S.toFixed(2)+"%":"—"}function l(o){const S=Number(o.consensus_level);return isFinite(S)?Math.round(S*100):0}function f(o){const S=Number(o&&o.consensus_level);return isFinite(S)&&S>0}return{state:e,slots:g,select:v,displayTags:m,fmtPrice:R,fmtChange:r,pctOf:l,hasConsensus:f}}},Vp={class:"qc-stock-list"},Fp=["data-copy-code","aria-label","onClick","onKeydown"],Hp={key:0,class:"qc-stock-rank"},Bp={class:"qc-stock-info"},Kp={class:"qc-stock-code"},Wp={class:"qc-stock-code-num"},Up={key:0,class:"qc-stock-status is-new"},Gp={key:1,class:"qc-stock-status is-out"},Yp={class:"qc-stock-name"},Jp={key:0,class:"qc-stock-consensus"},Qp={key:1,class:"qc-stock-tags"},$p={key:2,class:"qc-stock-badge"},Xp={key:3,class:"qc-stock-data"},Zp={class:"qc-stock-price"},ef={key:4,class:"qc-stock-extra"},tf={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},af=["data-copy-code","aria-label","onClick","onKeydown"],sf={key:0,class:"qc-stock-rank"},lf={class:"qc-stock-info"},nf={class:"qc-stock-code"},of={class:"qc-stock-code-num"},rf={key:0,class:"qc-stock-status is-new"},cf={key:1,class:"qc-stock-status is-out"},df={class:"qc-stock-name"},uf={key:0,class:"qc-stock-consensus"},vf={key:1,class:"qc-stock-tags"},mf={key:2,class:"qc-stock-badge"},pf={key:3,class:"qc-stock-data"},ff={class:"qc-stock-price"},gf={key:4,class:"qc-stock-extra"},hf={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function yf(a,t,g,e,v,m){const R=Vt("qc-state-panel"),r=Vt("qc-virtual-list");return ve(),fe("div",Vp,[g.loading?(ve(),ga(R,{key:0,type:"loading"})):g.items.length?(ve(),fe(rt,{key:2},[g.virtual?(ve(),ga(r,{key:0,items:g.items,"row-height":g.rowHeight},{default:ta(({item:l,index:f})=>[be("div",{class:ct(["qc-stock-row",{"is-active":g.activeCode===l.code}]),"data-copy-code":g.copyCode?l.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(l.name||"")+" "+(l.code||""),onClick:o=>e.select(l),onKeydown:[fa(jt(o=>e.select(l),["prevent"]),["enter"]),fa(jt(o=>e.select(l),["prevent"]),["space"])]},[g.showRank?(ve(),fe("div",Hp,Le(f+1),1)):Be("",!0),be("div",Bp,[be("div",Kp,[be("span",Wp,Le(l.code),1),l.status==="new"?(ve(),fe("span",Up,Le(g.statusText.new),1)):l.status==="out"?(ve(),fe("span",Gp,Le(g.statusText.out),1)):Be("",!0)]),be("div",Yp,[qa(Le(l.name)+" ",1),oa(a.$slots,"name-suffix",{item:l,index:f})]),g.showConsensus&&e.hasConsensus(l)?(ve(),fe("span",Jp,Le(e.pctOf(l))+"% 共识",1)):Be("",!0)]),(l.strategy_names||l.strategies)&&(l.strategy_names||l.strategies).length?(ve(),fe("div",Qp,[(ve(!0),fe(rt,null,Ct(e.displayTags(l),o=>(ve(),fe("span",{key:o.text,class:ct(["qc-stock-tag",{"is-more":o.more}])},Le(o.text),3))),128))])):Be("",!0),g.showConsensus?(ve(),fe("span",$p,Le(l.strategy_count||0)+" 策略",1)):Be("",!0),g.showPrice&&l.price!=null?(ve(),fe("div",Xp,[be("span",Zp,Le(e.fmtPrice(l.price)),1),be("span",{class:ct(["qc-stock-change",l.change_pct>0?"is-up":l.change_pct<0?"is-down":""])},Le(e.fmtChange(l.change_pct)),3)])):Be("",!0),e.slots.extra?(ve(),fe("div",ef,[oa(a.$slots,"extra",{item:l,index:f})])):Be("",!0),e.slots.actions?(ve(),fe("div",{key:5,class:"qc-stock-actions",onClick:t[0]||(t[0]=jt(()=>{},["stop"]))},[oa(a.$slots,"actions",{item:l,index:f})])):Be("",!0),e.slots.footer?(ve(),fe("div",tf,[oa(a.$slots,"footer",{item:l,index:f})])):Be("",!0)],42,Fp)]),_:3},8,["items","row-height"])):(ve(!0),fe(rt,{key:1},Ct(g.items,(l,f)=>(ve(),fe("div",{key:l.code,class:ct(["qc-stock-row",{"is-active":g.activeCode===l.code}]),"data-copy-code":g.copyCode?l.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(l.name||"")+" "+(l.code||""),onClick:o=>e.select(l),onKeydown:[fa(jt(o=>e.select(l),["prevent"]),["enter"]),fa(jt(o=>e.select(l),["prevent"]),["space"])]},[g.showRank?(ve(),fe("div",sf,Le(f+1),1)):Be("",!0),be("div",lf,[be("div",nf,[be("span",of,Le(l.code),1),l.status==="new"?(ve(),fe("span",rf,Le(g.statusText.new),1)):l.status==="out"?(ve(),fe("span",cf,Le(g.statusText.out),1)):Be("",!0)]),be("div",df,[qa(Le(l.name)+" ",1),oa(a.$slots,"name-suffix",{item:l,index:f})]),g.showConsensus&&e.hasConsensus(l)?(ve(),fe("span",uf,Le(e.pctOf(l))+"% 共识",1)):Be("",!0)]),(l.strategy_names||l.strategies)&&(l.strategy_names||l.strategies).length?(ve(),fe("div",vf,[(ve(!0),fe(rt,null,Ct(e.displayTags(l),o=>(ve(),fe("span",{key:o.text,class:ct(["qc-stock-tag",{"is-more":o.more}])},Le(o.text),3))),128))])):Be("",!0),g.showConsensus?(ve(),fe("span",mf,Le(l.strategy_count||0)+" 策略",1)):Be("",!0),g.showPrice&&l.price!=null?(ve(),fe("div",pf,[be("span",ff,Le(e.fmtPrice(l.price)),1),be("span",{class:ct(["qc-stock-change",l.change_pct>0?"is-up":l.change_pct<0?"is-down":""])},Le(e.fmtChange(l.change_pct)),3)])):Be("",!0),e.slots.extra?(ve(),fe("div",gf,[oa(a.$slots,"extra",{item:l,index:f})])):Be("",!0),e.slots.actions?(ve(),fe("div",{key:5,class:"qc-stock-actions",onClick:t[1]||(t[1]=jt(()=>{},["stop"]))},[oa(a.$slots,"actions",{item:l,index:f})])):Be("",!0),e.slots.footer?(ve(),fe("div",hf,[oa(a.$slots,"footer",{item:l,index:f})])):Be("",!0)],42,af))),128))],64)):(ve(),ga(R,{key:1,type:"empty",title:g.emptyText},null,8,["title"]))])}const bf=Ma(jp,[["render",yf]]),wf={name:"qc-detail-split",props:{enabled:{type:Boolean,default:!1},rootClass:{type:String,default:""},listClass:{type:String,default:""},paneClass:{type:String,default:""}}},kf={key:0,class:"split-divider","data-split-resize":""};function _f(a,t,g,e,v,m){return ve(),fe("div",{class:ct(["detail-split-wrap",[g.rootClass,{"detail-split":g.enabled}]]),"data-split-root":""},[be("div",{class:ct(["detail-split-list",[g.listClass,{"w-100":!g.enabled}]])},[oa(a.$slots,"list")],2),g.enabled?(ve(),fe("div",kf)):Be("",!0),g.enabled?(ve(),fe("div",{key:1,class:ct(["detail-split-pane",g.paneClass])},[oa(a.$slots,"pane")],2)):Be("",!0)],2)}const xf=Ma(wf,[["render",_f]]),ul={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}},Sf=200,Cf={name:"qc-top-tabs",components:{AppIcon:Ea},setup(){const a=Ra("qcState");if(!a)return{};const t=at(()=>a.currentPage&&a.currentPage.value||""),g=at(()=>a.currentSubPage&&a.currentSubPage.value||""),e=at(()=>a.menus&&a.menus.value||[]),v=at(()=>{const i=e.value.find(h=>h.key===t.value);return i&&i.subPages||[]}),m=at(()=>v.value.map(i=>({key:i,label:a.subPageNames&&a.subPageNames[i]||i,icon:ul[t.value]&&ul[t.value][i]||"circle-dot"}))),R=wt(null),r=wt(!1),l=wt(!1),f=wt(!1);let o=null,S=null;function w(){const i=R.value;i&&(l.value=i.scrollLeft>2,f.value=i.scrollLeft<i.scrollWidth-i.clientWidth-2)}function E(){const i=R.value;i&&(r.value=i.scrollWidth>i.clientWidth+2,w())}function x(i){const h=R.value;h&&h.scrollBy({left:i*Sf,behavior:"smooth"})}function C(i){a.openTab?a.openTab(t.value,i):a.currentSubPage&&(a.currentSubPage.value=i)}function O(i){C(i),jd(()=>{const h=R.value;if(!h)return;const F=h.querySelector('[data-tab-key="'+i+'"]');F&&F.scrollIntoView({block:"nearest",inline:"nearest"})})}const D=at(()=>{if(!r.value)return[];const i=R.value;if(!i)return[];const h=i.getBoundingClientRect(),F=new Set;return i.querySelectorAll(".qc-top-tab").forEach(B=>{const I=B.getBoundingClientRect();I.left>=h.left-2&&I.left<h.right-24&&F.add(B.getAttribute("data-tab-key"))}),m.value.filter(B=>!F.has(B.key))});function d(i,h){i.key==="ArrowLeft"?(i.preventDefault(),x(-1)):i.key==="ArrowRight"?(i.preventDefault(),x(1)):(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),C(h.key))}return za(()=>{E(),o=new ResizeObserver(()=>{clearTimeout(S),S=setTimeout(E,100)}),R.value&&o.observe(R.value),window.addEventListener("resize",E)}),Od(()=>{o&&o.disconnect(),window.removeEventListener("resize",E),clearTimeout(S)}),{state:a,tabs:m,currentSubPage:g,go:C,scrollRef:R,hasOverflow:r,canScrollLeft:l,canScrollRight:f,scrollByStep:x,scrollToTab:O,hiddenTabs:D,onTabKeydown:d,updateScrollState:w}}},qf={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},Ef=["disabled"],Mf=["data-tab-key","aria-selected","title","onClick","onKeydown"],Tf={class:"qc-top-tab-label"},Pf=["disabled"];function Df(a,t,g,e,v,m){const R=Vt("AppIcon"),r=Vt("el-dropdown-item"),l=Vt("el-dropdown-menu"),f=Vt("el-dropdown");return e.tabs.length?(ve(),fe("div",qf,[e.hasOverflow?(ve(),fe("button",{key:0,class:"qc-top-tabs-btn",disabled:!e.canScrollLeft,"aria-label":"向左滚动",onClick:t[0]||(t[0]=o=>e.scrollByStep(-1))},"‹",8,Ef)):Be("",!0),be("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:t[1]||(t[1]=(...o)=>e.updateScrollState&&e.updateScrollState(...o))},[(ve(!0),fe(rt,null,Ct(e.tabs,o=>(ve(),fe("div",{key:o.key,"data-tab-key":o.key,class:ct(["qc-top-tab",{"is-active":e.currentSubPage===o.key}]),role:"tab",tabindex:"0","aria-selected":e.currentSubPage===o.key?"true":"false",title:o.label,onClick:S=>e.go(o.key),onKeydown:S=>e.onTabKeydown(S,o)},[nt(R,{name:o.icon,size:14},null,8,["name"]),be("span",Tf,Le(o.label),1)],42,Mf))),128))],544),e.hasOverflow?(ve(),fe("button",{key:1,class:"qc-top-tabs-btn",disabled:!e.canScrollRight,"aria-label":"向右滚动",onClick:t[2]||(t[2]=o=>e.scrollByStep(1))},"›",8,Pf)):Be("",!0),e.hasOverflow&&e.hiddenTabs.length?(ve(),ga(f,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:e.scrollToTab},{dropdown:ta(()=>[nt(l,null,{default:ta(()=>[(ve(!0),fe(rt,null,Ct(e.hiddenTabs,o=>(ve(),ga(r,{key:o.key,command:o.key,class:ct({"is-active":e.currentSubPage===o.key})},{default:ta(()=>[nt(R,{name:o.icon,size:14},null,8,["name"]),qa(" "+Le(o.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:ta(()=>[t[3]||(t[3]=be("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):Be("",!0)])):Be("",!0)}const Rf=Ma(Cf,[["render",Df]]),zf=["title"],Af={class:"qc-glossary-trigger",role:"button",tabindex:"0","aria-label":"术语解释"},Lf={class:"qc-glossary-card"},If={class:"qc-glossary-head"},Nf={class:"qc-glossary-term"},Of={class:"qc-glossary-cat"},jf={class:"qc-glossary-row"},Vf={class:"qc-glossary-label"},Ff={class:"qc-glossary-text"},Hf={class:"qc-glossary-row"},Bf={class:"qc-glossary-label"},Kf={class:"qc-glossary-text"},Wf={class:"qc-glossary-foot"},vl={__name:"GlossaryHint",props:{gkey:{type:String,required:!0},size:{type:[Number,String],default:14}},setup(a){const t=a;let g=null;function e(){return g||(g=fetch("/api/meta/glossary").then(l=>l.ok?l.json():null).then(l=>l&&l.success?l.items:null).catch(()=>null)),g}const v=wt(!0),m=wt(null);za(async()=>{const l=await e();if(l){const f=l.find(o=>o.key===t.gkey);f&&(m.value=f,v.value=!1)}});function R(){window.__quantGoPage?window.__quantGoPage("system","glossary"):window.__quantState&&window.__quantState.currentPage&&(window.__quantState.currentPage.value="system",window.__quantState.currentSubPage.value="glossary")}const r=at(()=>!v.value&&!!m.value);return(l,f)=>{const o=Vt("qc-icon"),S=Vt("el-popover");return r.value?(ve(),fe("span",{key:0,class:"qc-glossary-hint",title:m.value.term},[nt(S,{placement:"bottom-start",width:340,trigger:"hover","popper-class":"qc-glossary-pop"},{reference:ta(()=>[be("span",Af,[nt(o,{name:"help-circle",size:a.size},null,8,["size"])])]),default:ta(()=>[be("div",Lf,[be("div",If,[be("span",Nf,Le(l.t("glossary.term."+m.value.key)),1),be("span",Of,Le(l.t("glossary.cat."+m.value.category)),1)]),be("div",jf,[be("span",Vf,Le(l.t("glossary.definition")),1),be("span",Ff,Le(m.value.definition),1)]),be("div",Hf,[be("span",Bf,Le(l.t("glossary.calc")),1),be("span",Kf,Le(m.value.calc),1)]),be("div",Wf,[be("span",{class:"qc-glossary-link",onClick:R},Le(l.t("glossary.title"))+" →",1)])])]),_:1})],8,zf)):Be("",!0)}}},Uf={class:"card qc-glossary-page"},Gf={class:"card-title flex-between"},Yf={class:"qc-glossary-tabs",role:"tablist"},Jf=["onClick"],Qf={key:0,class:"qc-glossary-loading"},$f={key:1,class:"qc-glossary-empty"},Xf={key:2,class:"qc-glossary-list"},Zf={class:"qc-glossary-item-head"},eg={class:"qc-glossary-term"},tg={class:"qc-glossary-cat"},ag={class:"qc-glossary-item-def"},sg={class:"qc-glossary-item-calc"},lg={class:"qc-glossary-label"},ml={__name:"GlossaryPage",setup(a){const t=wt([]),g=wt([]),e=wt("all"),v=wt(""),m=wt(!0);za(async()=>{try{const f=await(await fetch("/api/meta/glossary")).json();f&&f.success&&(t.value=f.items||[],g.value=f.categories||[])}catch{}finally{m.value=!1}});const R=at(()=>{let l=t.value;e.value!=="all"&&(l=l.filter(o=>o.category===e.value));const f=(v.value||"").trim().toLowerCase();return f&&(l=l.filter(o=>(o.term||"").toLowerCase().includes(f)||(o.definition||"").toLowerCase().includes(f))),l}),r=["宏观","策略","因子","技术","短线","数据源","产品"];return(l,f)=>{const o=Vt("qc-icon"),S=Vt("el-input");return ve(),fe("div",Uf,[be("div",Gf,[be("span",null,Le(l.t("glossary.title")),1),nt(S,{modelValue:v.value,"onUpdate:modelValue":f[0]||(f[0]=w=>v.value=w),class:"qc-glossary-search",placeholder:l.t("glossary.search"),clearable:"",size:"small"},{prefix:ta(()=>[nt(o,{name:"search",size:14})]),_:1},8,["modelValue","placeholder"])]),be("div",Yf,[(ve(!0),fe(rt,null,Ct(["all"].concat(r),w=>(ve(),fe("span",{key:w,class:ct(["qc-glossary-tab",{"is-active":e.value===w}]),role:"tab",onClick:E=>e.value=w},Le(w==="all"?l.t("glossary.title"):l.t("glossary.cat."+w)),11,Jf))),128))]),m.value?(ve(),fe("div",Qf,Le(l.t("common.loading")),1)):R.value.length?(ve(),fe("div",Xf,[(ve(!0),fe(rt,null,Ct(R.value,w=>(ve(),fe("div",{key:w.key,class:"qc-glossary-item"},[be("div",Zf,[be("span",eg,Le(l.t("glossary.term."+w.key)),1),be("span",tg,Le(l.t("glossary.cat."+w.category)),1)]),be("div",ag,Le(w.definition),1),be("div",sg,[be("span",lg,Le(l.t("glossary.calc"))+":",1),be("span",null,Le(w.calc),1)])]))),128))])):(ve(),fe("div",$f,Le(l.t("glossary.empty")),1))])}}};(function(){const{ref:a,computed:t,inject:g}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
    `,setup(){const e=g("qcState");if(!e)return{};const v=a(!1),m=a(localStorage.getItem("qc.hideNonTradingBanner")==="1"),R=()=>{m.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},r=t(()=>e.marketData&&e.marketData.value||{}),l=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:e.menus,marketData:r,bannerDismissed:m,dismissBanner:R,goMerrill:l,currentPage:e.currentPage,currentSubPage:e.currentSubPage,currentUser:e.currentUser,currentPageName:e.currentPageName,searchQuery:e.searchQuery,searchStocks:e.searchStocks,onSearchSelect:e.onSearchSelect,selectedDate:e.selectedDate,onDateChange:e.onDateChange,disabledDate:e.disabledDate,refreshCalendarData:e.refreshCalendarData,exportCSV:e.exportCSV,loading:e.loading,lastLoadTime:e.lastLoadTime,showUserMenu:v,resetSetupWizard:e.resetSetupWizard,showChangePassword:e.showChangePassword,themes:e.themes,currentTheme:e.currentTheme,changeTheme:e.changeTheme,handleLogout:e.handleLogout,subPageNames:e.subPageNames,keyClick:e.keyClick,t:e.t,subTabLabel:function(f,o){const S="sub."+f.key+"."+o,w=e.t(S);if(w!==S)return w;const E="sub."+o,x=e.t(E);return x!==E&&x?x:e.subPageNames[o]||o}}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                </div>`,setup(){const t=a("qcState");if(!t)return{};const{ref:g,computed:e}=Vue,v=g(0),m=g(0),R=g(!1),r=e(()=>{const I={day:"date",week:"week",month:"month",year:"year"},W=t.currentView&&t.currentView.value||"day";return I[W]||"date"}),l={day:"日",week:"周",month:"月",year:"年"};function f(I){return t.t&&t.t("view."+I)||l[I]||I}function o(I){t.switchView?t.switchView(I):t.currentView&&(t.currentView.value=I)}let S=null;function w(I){const W=I.touches&&I.touches[0];W&&(v.value=W.clientX,m.value=W.clientY)}async function E(){if(!R.value){R.value=!0;try{await t.refreshCalendarData()}catch{}S&&clearTimeout(S),S=setTimeout(()=>{R.value=!1},500)}}function x(I){if(!(window.innerWidth<=768))return;const W=I.changedTouches&&I.changedTouches[0];if(!W)return;const J=window.__quantModules&&window.__quantModules.gestures||{};if((typeof J.judgePullToRefresh=="function"?J.judgePullToRefresh(m.value,W.clientY):W.clientY-m.value>=60)&&(window.scrollY||0)<=0){I.stopPropagation(),E();return}if(t.currentSubPage.value==="pool")return;const z=W.clientX-v.value,j=W.clientY-m.value;Math.abs(z)>50&&Math.abs(z)>Math.abs(j)*1.2&&(t.navigateDate(z<0?1:-1),I.stopPropagation())}const C=g(!1),O=g(!1),D=g(""),d=g(null),i=g([]);function h(I){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[I]||I}async function F(){if(t.selectedDate.value){C.value=!0,O.value=!0,D.value="",d.value=null,i.value=[];try{const I=await fetch("/api/calendar/"+t.selectedDate.value+"/compare"),W=await I.json();if(!I.ok)throw new Error(W.detail||"HTTP "+I.status);d.value=W;const J=W&&W.comparison||{},N=[];for(const z of Object.keys(J)){if(z==="all_intersection")continue;const j=J[z]||{},$=z.split("_vs_");N.push({label:h($[0])+" ↔ "+h($[1]),interCount:j.intersection_count||0,inter:(j.intersection||[]).join(", "),onlyS1Count:j.only_s1_count||0,onlyS1:(j.only_s1||[]).join(", "),onlyS2Count:j.only_s2_count||0,onlyS2:(j.only_s2||[]).join(", ")})}i.value=N}catch(I){D.value=String(I&&I.message?I.message:I)}finally{O.value=!1}}}let B="";return Vue.watch(()=>{const I=t.stockPool,W=I&&I.value||[];return{n:W.length,first:W[0]&&W[0].code,split:!!t.detailSplitEnabled.value}},(I,W)=>{if(!I.split||!I.first||I.n===0)return;const J=t.stockDetail&&t.stockDetail.value&&t.stockDetail.value.stock,N=(t.stockPool.value||[]).some(z=>z.code===J);if(!J||!N){if(B===I.first&&J&&N===!1&&I.n>1)return;B=I.first,t.showStockDetail&&t.showStockDetail(I.first)}},{immediate:!0}),{...t,calType:r,pullRefreshing:R,onCalTouchStart:w,onCalTouchEnd:x,viewLabel:f,switchViewLocal:o,compareVisible:C,compareLoading:O,compareError:D,compareData:d,comparePairs:i,openStrategyCompare:F}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:`
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
    `,setup(){const t=a("qcState"),g=Vue.ref(!1);if(!t)return{};const{computed:e}=Vue;let v=0;const m=e(()=>{var L;return((L=t.merrillData)==null?void 0:L.value)||{}}),R=e(()=>{var L;return((L=t.marketData)==null?void 0:L.value)||{}}),r=e(()=>{var L;return((L=t.dashboardData)==null?void 0:L.value)||{}}),l=e(()=>{var L;return((L=t.healthMetrics)==null?void 0:L.value)||[]}),f=e(()=>{var L;return((L=t.filteredConsensusRank)==null?void 0:L.value)||[]}),o=e(()=>{const L={};for(const te of f.value)te.code&&te.name&&(L[te.code]=te.name);return L}),S={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function w(L){return S[L]||L}const E=e(()=>R.value.date||r.value.latest_date||"-"),x=e(()=>{const L=R.value;return!L||Object.keys(L).length===0?"数据加载中...":L.is_trading_day&&L.in_trading_hours?"● 交易中":L.is_trading_day?"已收盘":"○ 非交易日"}),C=e(()=>{const L=m.value.next_stage_prediction;return L&&L.next_stage_name&&L.transition_probability>.2?`→${L.next_stage_name} ${(L.transition_probability*100).toFixed(2)}%`:""}),O=e(()=>{const L=[],te=r.value.pool_changes||{},Se=te.new_count||0;if(Se>0){const kt=te.new_stock_names||{},$e=(te.new_stocks||[]).map(Ue=>kt[Ue]||o.value[Ue]||Ue).slice(0,4).join("、");L.push({icon:"sparkles",level:"new",text:`今日新入池 ${Se} 只${$e?" · "+$e:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(t.currentPage.value="calendar",t.currentSubPage.value="pool"),t.statusFilter.value="new"}})}for(const kt of l.value.filter($e=>$e.degraded))L.push({icon:"alert-triangle",level:"warn",text:`数据源 ${w(kt.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):t.currentPage.value="system"}});const Ie=m.value.timing;Ie&&Ie.progress_percent&&Ie.progress_percent>100?L.push({icon:"clock",level:"warn",text:`美林「${m.value.name}」已超期 ${Ie.progress_percent}%`,action:()=>{t.currentSubPage.value="merrill"}}):Ie&&Ie.maturity&&m.value.name&&L.push({icon:"clock",level:"info",text:`美林「${m.value.name}」阶段成熟度 ${Ie.maturity}`,action:()=>{t.currentSubPage.value="merrill"}});const Ke=R.value;return Ke&&Ke.is_trading_day===!1&&Ke.date&&L.push({icon:"calendar",level:"info",text:`${Ke.date} 非交易日`,action:()=>{t.currentSubPage.value="market"}}),L}),D=e(()=>{const L=[],te=m.value.name||"",Se=m.value.timing||{},Ie=["复苏","成长","过热"],Ke=["滞胀","衰退"];Ie.some(dt=>te.includes(dt))&&L.push({kind:"opportunity",source:"美林",text:te+" 顺势",action:()=>{t.currentSubPage.value="merrill"}}),Ke.some(dt=>te.includes(dt))&&L.push({kind:"risk",source:"美林",text:te+" 防守",action:()=>{t.currentSubPage.value="merrill"}}),Se.progress_percent&&Se.progress_percent>100&&L.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{t.currentSubPage.value="merrill"}});const kt=r.value.pool_changes||{},$e=(kt.new_count||0)-(kt.out_count||0);$e>=3?L.push({kind:"opportunity",source:"池变动",text:"净入池 +"+$e,action:()=>{t.statusFilter.value="new",t.currentPage.value="calendar",t.currentSubPage.value="pool"}}):$e<=-3&&L.push({kind:"risk",source:"池变动",text:"净出池 "+$e,action:()=>{t.currentSubPage.value="consensus"}});const Ue=R.value.market_sentiment,_t=Ue&&Ue.text||"";(_t.includes("乐观")||_t.includes("积极")||_t.includes("亢奋"))&&L.push({kind:"opportunity",source:"情绪",text:_t,action:()=>{t.currentSubPage.value="market"}}),(_t.includes("悲观")||_t.includes("恐慌")||_t.includes("低迷"))&&L.push({kind:"risk",source:"情绪",text:_t,action:()=>{t.currentSubPage.value="market"}});for(const dt of l.value.filter(Q=>Q.degraded))L.push({kind:"risk",source:"数据",text:w(dt.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):t.currentPage.value="system"}});return L}),d=e(()=>{var L;return((L=t.merrillTimeline)==null?void 0:L.value)||t.merrillTimeline||{cycles:[]}}),i=e(()=>{var L;return((L=t.timelineLoading)==null?void 0:L.value)||!1});function h(L){const te=t.showStageDetail;typeof te=="function"&&te(L)}function F(L){const te=t.merrillStagesConfig,Ie=(te&&te.value?te.value:te||{})[L]||{};return Ie.color||Ie.bg_color||"var(--color-primary)"}function B(L){const te=t.merrillStagesConfig,Se=te&&te.value?te.value:te||{};return Se[L]&&Se[L].name||""}function I(){const L=t.merrillStagesConfig;return L&&L.value?L.value:L||{}}function W(L){return I()[L]&&I()[L].description||""}const J=Vue.ref([]),N=Vue.ref(null),z=Vue.ref(!1),j=Vue.ref(!1),$=Vue.ref(7),Z=Vue.ref(""),ne=Vue.ref(""),ee=Vue.computed(()=>{const L=new Set;return(J.value||[]).forEach(function(te){te.task&&L.add(te.task)}),Array.from(L).sort()}),M=Vue.computed(function(){const L=N.value&&N.value.success_rate||0;return L>=80?"color-success":L>=50?"color-warning":"color-danger"});function s(L,te){return L>0&&te/L>=.8?"status-ok":L>0&&te/L>=.5?"status-warn":"status-bad"}async function y(){const L=++v;z.value=!0,j.value=!1;try{const te=window.__quantModules&&window.__quantModules.core||{},Se=typeof te.authHeaders=="function"?te.authHeaders():{},Ie=new URLSearchParams({days:String($.value)});Z.value&&Ie.set("task",Z.value),ne.value&&Ie.set("status",ne.value);const[Ke,kt]=await Promise.all([fetch("/api/system/execution-history?"+Ie.toString(),{headers:Se}).then(function($e){return $e.json()}),fetch("/api/system/execution-summary?days="+$.value,{headers:Se}).then(function($e){return $e.json()})]);if(L!==v)return;J.value=Ke&&Ke.data||[],N.value=kt&&kt.data||null}catch(te){console.error("[execution] 执行数据加载失败:",te),j.value=!0}finally{L===v&&(z.value=!1)}}const n=window.__quantModules&&window.__quantModules.i18n||{},p=typeof n.t=="function"?n.t:function(L){return String(L)},X=Vue.ref([]),T=Vue.ref(null),b=Vue.ref(null),u=Vue.ref(""),k=Vue.ref([]),c=Vue.ref(!1);let A=null;const oe=Vue.computed(function(){const L=b.value&&b.value.dates||[];return L.length&&!u.value&&(u.value=L[L.length-1].date),L}),Y=Vue.computed(function(){const L=(X.value||[]).find(function(Se){return Se.enabled});if(!L||L.countdown_seconds==null)return"—";const te=L.countdown_seconds;return Math.floor(te/3600)+"h"+String(Math.floor(te%3600/60)).padStart(2,"0")+"m"}),q=Vue.computed(function(){const L=(X.value||[]).find(function(te){return te.enabled});if(!L||L.countdown_seconds==null||L.countdown_seconds<0)return"";try{return new Date(Date.now()+L.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),K=Vue.computed(function(){const L=T.value;return!L||L.phase==="idle"?p("exec.waiting"):L.phase==="running"?p("exec.running")+(L.current_sid?" · "+L.current_sid:""):L.phase==="done"?p("exec.done"):p("exec.failed")}),ie=Vue.computed(function(){return T.value&&T.value.phase==="running"?"loader":"check-circle-2"}),me=Vue.computed(function(){const L=b.value&&b.value.dates||[];return L.length?L[L.length-1].date:"—"}),Ce=Vue.computed(function(){const L=b.value&&b.value.dates||[],te=L[L.length-1];return te&&te.visible?"color-success":"color-danger"}),U=Vue.computed(function(){const L=b.value&&b.value.dates||[],te=L[L.length-1];return te?te.day_view_total:"—"});function de(L){const te=window.__quantModules&&window.__quantModules.core||{},Se=typeof te.authHeaders=="function"?te.authHeaders():{};return fetch(L,{headers:Se}).then(function(Ie){return Ie.json()})}async function Re(){const L=++v;try{const[te,Se,Ie]=await Promise.all([de("/api/strategies/execution/plan"),de("/api/strategies/execution/status"),de("/api/strategies/execution/results?days=7")]);if(L!==v)return;X.value=te&&te.data&&te.data.plans||[],T.value=Se&&Se.data||null,b.value=Ie&&Ie.data||null,T.value&&T.value.phase==="running"?se():ge()}catch(te){console.error("[execution-monitor] 监控数据加载失败:",te)}}function se(){ge(),A=setInterval(function(){de("/api/strategies/execution/status").then(function(L){T.value=L&&L.data||null,T.value&&T.value.phase!=="running"&&(ge(),Re())}).catch(function(){})},5e3)}function ge(){A&&(clearInterval(A),A=null)}async function Te(L){if(!L)return;const te=++v;c.value=!0;try{const Se=await de("/api/strategies/execution/trace/"+encodeURIComponent(L));if(te!==v)return;const Ie=Se&&Se.data||null;k.value=Ie&&Ie.steps||[]}catch(Se){console.error("[execution-trace] 追溯加载失败:",Se)}finally{te===v&&(c.value=!1)}}Vue.watch(function(){return t.currentSubPage&&t.currentSubPage.value},function(L){L==="execution"?(y(),Re()):ge()},{immediate:!0}),Vue.watch(function(){const L=t.currentSubPage&&t.currentSubPage.value,te=t.filteredConsensusRank&&t.filteredConsensusRank.value||[],Se=t.marketData&&t.marketData.value||{};return{sub:L,split:!!t.detailSplitEnabled.value,top5:te.slice(0,5),rank:te,indices:(Se.indices||[]).map(function(Ie){return Ie})}},function(L,te){if(L.split){if(L.sub==="overview"){if(!L.top5.length)return;const Se=t.stockDetail&&t.stockDetail.value&&t.stockDetail.value.stock,Ie=L.top5.some(function(Ke){return Ke.code===Se});(!Se||!Ie)&&t.showStockDetail&&t.showStockDetail(L.top5[0].code)}else if(L.sub==="consensus"){if(!L.rank.length)return;const Se=t.stockDetail&&t.stockDetail.value&&t.stockDetail.value.stock,Ie=L.rank.some(function(Ke){return Ke.code===Se});(!Se||!Ie)&&t.showStockDetail&&t.showStockDetail(L.rank[0].code)}else if(L.sub==="market"){if(!L.indices.length)return;const Se=t.indexDetail&&t.indexDetail.value&&t.indexDetail.value.code,Ie=L.indices.some(function(Ke){return Ke.code===Se});(!Se||!Ie)&&t.showIndexDetail&&t.showIndexDetail(L.indices[0])}}},{immediate:!0});const pe=Vue.ref("band"),ke=["recession","recovery","overheating","stagflation"];function Ee(L){if(!L)return null;const te=String(L).split("-"),Se=parseInt(te[0],10),Ie=parseInt(te[1]||"1",10);return isFinite(Se)?Se+(Ie-1)/12:null}function re(L){const te=Math.floor(L);let Se=Math.round((L-te)*12)+1;return Se>12&&(Se=12),Se<1&&(Se=1),te+"-"+(Se<10?"0"+Se:""+Se)}function ae(){return t.merrillData&&t.merrillData.value&&t.merrillData.value.timing||{}}function he(){return t.merrillData&&t.merrillData.value&&t.merrillData.value.color||"var(--color-success)"}function Ne(L,te){const Se=ae(),Ie=Number(Se.avg_duration_months)||0,Ke=Math.min(100,Number(Se.progress_percent)||0),kt=Ee(Se.current_stage_start_date),$e=[];let Ue=null;if((L||[]).forEach(function(Ye){const Tt=Ee(Ye.start);Ue==null&&Tt!=null&&(Ue=Tt);const Bt=!!(Ye.is_current||kt!=null&&Tt===kt&&!Ye.duration_months),It=Ye.name||B(Ye.stage);if(Bt&&Ie>0){const pt=Ie*Ke/100;pt>.5&&$e.push({stage:Ye.stage,name:It,months:pt,live:!0,start:Ye.start});const Pt=Ie-pt;Pt>.5&&$e.push({stage:Ye.stage,name:"剩余(预测)",months:Pt,ghost:!0,start:Ye.start})}else{let pt=Number(Ye.duration_months)||0;if(!pt&&Tt!=null){const Pt=Ee(Ye.end);Pt!=null&&Pt>Tt&&(pt=Math.max(1,Math.round((Pt-Tt)*12)))}pt||(pt=1),$e.push({stage:Ye.stage,name:It,months:pt,live:Bt,start:Ye.start,end:Ye.end})}if(Bt&&te&&Ie>0){const pt=t.merrillData&&t.merrillData.value&&t.merrillData.value.next_stage_prediction;pt&&$e.push({stage:pt.next_stage,name:(pt.next_stage_name||"下一阶段")+" (预测)",months:Ie,ghost:!0,prob:pt.transition_probability})}}),!$e.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};const _t=$e.reduce(function(Ye,Tt){return Ye+Tt.months},0)||1,dt=Ue??0;let Q=0,ye=0;const Ze=$e.map(function(Ye){const Tt=Q;Ye.ghost||(ye+=Ye.months),Q+=Ye.months;const Bt={stage:Ye.stage,name:Ye.name,months:Math.round(Ye.months),ghost:!!Ye.ghost,live:!!Ye.live,prob:Ye.prob,left:Tt/_t*100,width:Math.max(2,Ye.months/_t*100)},It=Ee(Ye.start),pt=Ee(Ye.end);return Bt.start=It!=null?re(It):re(dt+Tt/12),Bt.end=pt!=null?re(pt):"",Bt.predicted=It==null,Bt}),ot=$e[$e.length-1],st=$e.some(function(Ye){return Ye.ghost}),Ft=ot&&ot.end?ot.end:re(dt+_t/12);return{segs:Ze,axisStart:re(dt),axisEnd:Ft,nowPct:st?ye/_t*100:null}}function Fe(L){return(L.stages||[]).some(function(te){return te.is_current})}const We=Vue.computed(function(){const L=t.merrillTimeline&&t.merrillTimeline.value&&t.merrillTimeline.value.cycles||[];if(!L.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};let te=null;for(let Se=L.length-1;Se>=0;Se--)if(Fe(L[Se])){te=L[Se];break}return te||(te=L[L.length-1]),Ne(te.stages,!0)});function qt(L){const te=L&&L.stages?L.stages:[];if(!te.length)return"";const Se=te[0]&&te[0].start?String(te[0].start).slice(0,4):"",Ie=te[te.length-1]||{},Ke=Ie.end?String(Ie.end).slice(0,4):Ie.start?String(Ie.start).slice(0,4):"";return Se||Ke?Se?Se+"–"+Ke:Ke:""}const ht=Vue.computed(function(){return(t.merrillTimeline&&t.merrillTimeline.value&&t.merrillTimeline.value.cycles||[]).filter(function(te){return!Fe(te)}).map(function(te){return{label:te.label,years:qt(te),segs:Ne(te.stages,!1).segs}})}),Et=ke,_e=Vue.computed(function(){return(t.merrillTimeline&&t.merrillTimeline.value&&t.merrillTimeline.value.cycles||[]).map(function(te){const Se={};ke.forEach(function(Ke){Se[Ke]=0});let Ie=null;return(te.stages||[]).forEach(function(Ke){Se[Ke.stage]!=null&&(Se[Ke.stage]+=Number(Ke.duration_months)||0),Ke.is_current&&(Ie=Ke.stage)}),{label:te.label,sum:Se,cur:Ie}})}),qe=Vue.computed(function(){let L=0;return _e.value.forEach(function(te){ke.forEach(function(Se){te.sum[Se]>L&&(L=te.sum[Se])})}),L||1}),je=Vue.computed(function(){const L=t.merrillSnapshots&&t.merrillSnapshots.value||[],te=[];return L.forEach(function(Se){const Ie=te[te.length-1];Ie&&Ie.stage===Se.stage?(Ie.count++,Ie.last=Se.timestamp):te.push({stage:Se.stage,name:Se.stage_name||B(Se.stage),count:1,first:Se.timestamp,last:Se.timestamp})}),te}),Oe=Vue.computed(function(){return Math.max(100,Math.min(200,Number(ae().progress_percent)||0))}),Xe=Vue.computed(function(){const L=Number(ae().progress_percent)||0;return{width:Math.max(0,Math.min(100,L/Oe.value*100))+"%",background:L>100?"linear-gradient(90deg, "+he()+", var(--color-warning))":he()}}),Qe=Vue.computed(function(){return 100/Oe.value*100}),Ge=Vue.computed(function(){const L=ae().predicted_end;if(!L)return"";if(typeof L=="string")return L;const te=L.optimistic||L.earliest||"",Se=L.pessimistic||L.latest||"";return te&&Se?te+" ~ "+Se:L.base||L.mid||te||Se||""});var it=22;function bt(L){return"color-mix(in srgb, "+L+" "+it+"%, var(--surface-card))"}function mt(L){const te=F(L.stage);return L.ghost?{left:L.left+"%",width:L.width+"%",color:"var(--text-primary)",borderLeft:"3px solid "+te,background:"repeating-linear-gradient(45deg, "+bt(te)+" 0, "+bt(te)+" 5px, var(--surface-card) 5px, var(--surface-card) 10px)"}:{left:L.left+"%",width:L.width+"%",background:bt(te),color:"var(--text-primary)",borderLeft:"3px solid "+te}}function At(L){const te=[L.name];return L.start&&te.push((L.predicted?"预计起始 ":"起始 ")+L.start+(L.end?" → "+L.end:"")),L.months&&te.push("约 "+L.months+" 个月"),L.ghost&&te.push("预测(尚未发生)"),L.prob!=null&&te.push("转移概率 "+(L.prob*100).toFixed(0)+"%"),te.join(" · ")}function aa(L,te){const Se=F(L),Ie=Math.max(.28,te/qe.value),Ke=Math.round(14+30*Ie);return{background:"color-mix(in srgb, "+Se+" "+Ke+"%, var(--surface-card))",color:"var(--text-primary)"}}return{...t,todayText:E,tradingStatus:x,merrillNext:C,todayFocus:O,todaySignals:D,merrillConfigOpen:g,getTimelineStageColor:F,getTimelineStageName:B,getTimelineStageDesc:W,mcHistView:pe,mcCurrentBand:We,mcHistoryBands:ht,mcStageKeys:Et,mcMatrix:_e,mcTrailRuns:je,mcProgStyle:Xe,mcAvgMark:Qe,mcEndRange:Ge,mcSegStyle:mt,mcSegTitle:At,mcMxCellStyle:aa,merrillTimeline:d,timelineLoading:i,showTimelineStage:h,execHistory:J,execSummary:N,execLoading:z,execError:j,execDays:$,execTaskFilter:Z,execStatusFilter:ne,execTaskOptions:ee,execSuccessClass:M,loadExecutionData:y,execRateClass:s,execPlan:X,execStatus:T,execResults:b,execTraceDate:u,execTraceSteps:k,execTraceLoading:c,execResultsDates:oe,execCountdownText:Y,execNextRunText:q,execPhaseText:K,execStatusIcon:ie,execLastDate:me,execVisibleClass:Ce,execVisibleText:U,loadExecutionTrace:Te}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:`
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
    `,setup(){const t=a("qcState");if(!t)return{};function g(Q){t.currentSubPage.value=Q}function e(){pe(),ke(),Ee()}Vue.watch(()=>t.currentSubPage&&t.currentSubPage.value,Q=>{Q==="autoeval"&&t.loadAiVendors&&t.loadAiVendors(),Q==="datadict"&&k(),Q==="health"&&p(),Q==="notification"&&e()});const v=t.themeHues||[45,220,0,140,270,320,-1],m=t.themeHueNames||{},R=t.themeMode||Vue.computed(()=>"light"),r=t.themeHue||Vue.ref(45);function l(Q){t.changeThemeMode&&t.changeThemeMode(Q)}function f(Q){t.changeThemeHue&&t.changeThemeHue(parseInt(Q,10))}function o(Q){return t.hueColor?t.hueColor(Q):Q<0?"hsl(0, 0%, 46%)":"hsl("+Q+", 75%, 42%)"}function S(Q){return t.hueName?t.hueName(Q):m[Q]||"自定义 "+Q}function w(Q){t.setNavMode&&t.setNavMode(Q)}const E=Vue.ref([]),x=Vue.ref(""),C=Vue.ref("read"),O=Vue.ref(""),D=Vue.ref(!1),d=()=>window.__quantModules&&window.__quantModules.core||{},i=Vue.ref([]),h=Vue.ref(!1);async function F(){h.value=!0;try{const Q=await fetch("/api/audit/logs?limit=20",{headers:d().authHeaders?d().authHeaders():{}}).then(function(ye){if(!ye.ok)throw new Error("HTTP "+ye.status);return ye.json()});i.value=Q&&Q.logs||[]}catch(Q){console.error("[system] 审计加载失败:",Q),i.value=[]}finally{h.value=!1}}const B=Vue.ref(!1),I=Vue.ref(null),W=Vue.ref(null),J=Vue.ref([]),N=Vue.ref(null);function z(Q){return Q==="completed"?"完成":Q==="running"?"运行中":Q==="pending"?"排队中":Q==="cancelled"?"已取消":"失败"}async function j(){try{const ye=await(await fetch("/api/jobs?limit=20")).json();ye&&ye.success&&(J.value=ye.data&&ye.data.tasks||[])}catch(Q){console.warn("[system] 加载任务队列失败:",Q)}}async function $(Q){try{await fetch("/api/jobs/"+Q+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),j()}catch(ye){console.warn("[system] 取消任务失败:",ye)}}function Z(){j(),N.value=window.setInterval(j,15e3)}const ne=Vue.ref({items:[]}),ee=Vue.ref([]),M=Vue.ref(null),s=Vue.ref({data_sources:[],alerts:[]}),y=function(){return d().authHeaders?d().authHeaders():{}},n=function(Q){return fetch(Q,{headers:y()}).then(function(ye){if(!ye.ok)throw new Error("HTTP "+ye.status);return ye.json()})};async function p(){B.value=!0,I.value=null;try{const[Q,ye,Ze,ot]=await Promise.all([n("/api/reliability/freshness"),n("/api/reliability/heal-history?limit=20"),n("/api/reliability/startup-report"),n("/api/reliability/source-health")]);ne.value=Q&&Q.data||{items:[]},ee.value=ye&&ye.data||[],M.value=Ze&&Ze.data||null,s.value=ot||{data_sources:[],alerts:[]},W.value=new Date().toLocaleTimeString()}catch(Q){console.warn("[health] 加载失败:",Q),I.value="健康数据加载失败: "+(Q.message||""),ne.value={items:[]},ee.value=[]}finally{B.value=!1}}const X=Vue.ref(!1),T=Vue.ref(""),b=Vue.ref(""),u=Vue.ref({fields:[]});async function k(){X.value=!0,T.value="";try{const Q="/api/data-dict"+(b.value?"?category="+b.value:""),ye=await n(Q);u.value=ye&&ye.data||{fields:[]}}catch(Q){console.warn("[dict] 加载失败:",Q),T.value="数据字典加载失败: "+(Q.message||""),u.value={fields:[]}}finally{X.value=!1}}function c(Q){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[Q]||"var(--text-secondary)"}function A(Q){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[Q]||Q}const oe=Vue.computed(()=>(ne.value?ne.value.items||[]:[]).filter(ye=>ye.status==="stale"||ye.status==="missing").length),Y=Vue.ref("rules"),q=Vue.ref([]),K=Vue.ref([]),ie=Vue.ref([]),me=Vue.ref(!1),Ce=Vue.ref(""),U=Vue.ref("price_above"),de=Vue.ref(""),Re=Vue.ref(!1),se=Vue.ref(60),ge=Vue.ref("");function Te(Q){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[Q]||Q}async function pe(){me.value=!0;try{const Q=await(await fetch("/api/alerts/rules")).json();q.value=Q&&Q.rules||[]}catch(Q){ge.value="规则加载失败: "+Q}finally{me.value=!1}}async function ke(){me.value=!0;try{const Q=await(await fetch("/api/alerts/history?limit=50")).json();K.value=Q&&Q.history||[]}catch(Q){ge.value="历史加载失败: "+Q}finally{me.value=!1}}async function Ee(){me.value=!0;try{const Q=await(await fetch("/api/alerts/channels")).json(),ye=await(await fetch("/api/alerts/silence")).json();ie.value=Q&&Q.channels||[],Re.value=!!(ye&&ye.silenced)}catch(Q){ge.value="通道状态加载失败: "+Q}finally{me.value=!1}}function re(Q){Y.value=Q,Q==="rules"?pe():Q==="history"?ke():Ee()}async function ae(){const Q=Ce.value.trim();if(!Q){ge.value="请填写股票代码";return}me.value=!0;try{const ye={stock_code:Q,rule_type:U.value};if(U.value!=="new_pool"){const ot=Number(de.value);if(isNaN(ot)){ge.value="阈值必须为数值";return}ye.threshold=ot}const Ze=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ye)})).json();Ze&&Ze.rule?(ge.value="规则已添加",Ce.value="",de.value="",pe()):ge.value=Ze&&Ze.detail||"添加失败"}catch(ye){ge.value="添加失败: "+ye}finally{me.value=!1}}async function he(Q){try{await fetch("/api/alerts/rules/"+Q.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!Q.enabled})}),Q.enabled=!Q.enabled}catch(ye){ge.value="切换失败: "+ye}}async function Ne(Q){try{const ye=await(await fetch("/api/alerts/rules/"+Q.id,{method:"DELETE"})).json();ye&&ye.success?(ge.value="规则已删除",pe()):ge.value="删除失败"}catch(ye){ge.value="删除失败: "+ye}}async function Fe(){try{const Q=Re.value?se.value:0,ye=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:Q})})).json();Re.value=!!(ye&&ye.silenced),ge.value=Re.value?"已静默":"已恢复推送"}catch(Q){ge.value="静默设置失败: "+Q}}async function We(){Re.value=!1,await Fe()}function qt(Q){return!!Q&&!Q.degraded}const ht=Vue.computed(()=>(t&&t.analyticsRank&&t.analyticsRank.value||[]).reduce((ye,Ze)=>Math.max(ye,Ze.views||0),0)||1),Et=()=>d().OPENAPI_ROUTE_BASE||"/api/openapi";async function _e(){D.value=!0;try{const Q=await d().apiFetch(Et()+"/keys");E.value=Q&&Q.data||[]}catch(Q){ElementPlus.ElMessage.error("加载 API Key 失败: "+(Q.message||""))}finally{D.value=!1}}async function qe(){try{const Q=await d().apiFetch(Et()+"/keys",{method:"POST",body:JSON.stringify({name:x.value||"未命名",role:C.value||"read",expire_days:365})});Q&&Q.success?(O.value=Q.api_key||"",x.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await _e()):ElementPlus.ElMessage.error(Q&&(Q.detail||Q.message)||"生成失败")}catch(Q){ElementPlus.ElMessage.error("生成失败: "+(Q.message||""))}}async function je(){if(O.value)try{await navigator.clipboard.writeText(O.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function Oe(Q){try{const ye=await d().apiFetch(Et()+"/keys/"+Q.id,{method:"DELETE"});ye&&ye.success?(ElementPlus.ElMessage.success("Key 已吊销"),O.value&&Q.prefix&&O.value.includes(Q.prefix)&&(O.value=""),await _e()):ElementPlus.ElMessage.error(ye&&(ye.detail||ye.message)||"吊销失败")}catch(ye){ElementPlus.ElMessage.error("吊销失败: "+(ye.message||""))}}const Xe={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function Qe(Q){return Xe[Q]||Q}const Ge=computed(()=>{var Q;return(((Q=t.healthMetrics)==null?void 0:Q.value)||[]).map(ye=>({name:Qe(ye.name),source:ye.name,success_rate:ye.success_rate,avg_latency_ms:ye.avg_latency_ms,calls:ye.calls||0,degraded:!!ye.degraded,data_age_hours:ye.data_age_hours!=null?ye.data_age_hours:null,stale:!!ye.stale,last_fetch:ye.last_fetch||ye.last_success||null}))});function it(Q){return Q.degraded?"degraded":Q.success_rate==null?"unknown":Q.success_rate>=90?"ok":Q.success_rate>=60?"warn":"bad"}function bt(Q){return Q==null?"":Q<1?"刚刚":Q<24?Math.round(Q)+"小时前":Math.floor(Q/24)+"天前"}const mt=t.aiUsage||Vue.ref({}),At=Vue.computed(()=>{const Q=mt.value&&mt.value.by_model||{};return Object.entries(Q).map(([ye,Ze])=>({name:ye,count:Ze})).sort((ye,Ze)=>Ze.count-ye.count)}),aa=Vue.computed(()=>At.value.reduce((Q,ye)=>Math.max(Q,ye.count),0)||1),L=Vue.computed(()=>At.value.reduce((Q,ye)=>Q+ye.count,0)||1),te=Vue.computed(()=>Se.value.reduce((Q,ye)=>Math.max(Q,ye.count),0)||0),Se=Vue.computed(()=>{const Q=mt.value&&mt.value.by_day||{},ye=[],Ze=new Date;for(let ot=29;ot>=0;ot--){const st=new Date(Ze.getFullYear(),Ze.getMonth(),Ze.getDate()-ot),Ft=st.getFullYear()+"-"+String(st.getMonth()+1).padStart(2,"0")+"-"+String(st.getDate()).padStart(2,"0");ye.push({day:Ft,count:Q[Ft]||0})}return ye}),Ie=Vue.computed(()=>Se.value.reduce((Q,ye)=>Math.max(Q,ye.count),0)||1),Ke=Vue.computed(()=>{const Q=mt.value&&mt.value.by_day||{},ye=new Date,Ze=ye.getFullYear()+"-"+String(ye.getMonth()+1).padStart(2,"0")+"-"+String(ye.getDate()).padStart(2,"0");return Q[Ze]||0}),kt=Vue.computed(()=>{const Q=mt.value&&mt.value.by_day||{},ye=Object.keys(Q).filter(Ze=>(Q[Ze]||0)>0);return ye.length?ye[ye.length-1]:""});function $e(Q){t.analyticsDays&&(t.analyticsDays.value=Q),typeof t.loadAnalytics=="function"&&t.loadAnalytics()}const Ue='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',_t='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function dt(Q){return Q?_t:Ue}return Z(),{...t,themeHues:v,themeHueNames:m,themeMode:R,themeHue:r,onThemeModeChange:l,setThemeHue:f,hueColor:o,hueName:S,onNavModeChange:w,analyticsMaxViews:ht,aiModelRank:At,aiModelMax:aa,aiDayTrend:Se,aiDayMax:Ie,todayAiCalls:Ke,lastAiCallDay:kt,aiTotal:L,aiDayPeak:te,setAnalyticsDays:$e,viewIcon:dt,openApiKeys:E,openApiKeyName:x,openApiKeyRole:C,newOpenApiKey:O,openApiLoading:D,loadOpenApiKeys:_e,generateOpenApiKey:qe,copyOpenApiKey:je,revokeOpenApiKey:Oe,healthRows:Ge,healthClass:it,fmtAge:bt,staleAssetCount:oe,jobQueue:J,loadJobQueue:j,cancelJob:$,jobStatusText:z,auditLogs:i,auditLoading:h,loadAuditLogs:F,healthLoading:B,healthError:I,healthUpdatedAt:W,freshnessData:ne,healHistory:ee,startupReport:M,sourceHealth:s,refreshHealth:p,statusColor:c,statusLabel:A,sourceOk:qt,dictLoading:X,dictError:T,dictCategory:b,dictData:u,loadDataDict:k,ncTab:Y,ncRules:q,ncHistory:K,ncChannels:ie,ncLoading:me,ncNewCode:Ce,ncNewType:U,ncNewThreshold:de,ncSilence:Re,ncSilenceMinutes:se,ncMsg:ge,ncTypeLabel:Te,onNcTab:re,loadAlertRules:pe,loadAlertHistory:ke,loadAlertChannels:Ee,addAlertRule:ae,toggleAlertRule:he,removeAlertRule:Ne,applySilence:Fe,clearSilence:We,goSystemSub:g}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:`
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
                </div>`,setup(){const{ref:t,watch:g,onUnmounted:e}=Vue,v=a("qcState");if(!v)return{};function m(){if(!v.hasMoreAiHistory||!v.loadMoreAiHistory||v.currentPage.value!=="ai"||v.currentSubPage.value!=="history")return;const me=document.documentElement;me.scrollTop+window.innerHeight>=me.scrollHeight-300&&v.loadMoreAiHistory()}window.addEventListener("scroll",m,{passive:!0}),e(()=>window.removeEventListener("scroll",m));const R=t(null),r=t(!1),l=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function f(me){return!me||me.total===0||me.rate===null||me.rate===void 0?"--":me.rate.toFixed(2)+"%"}const o=t(5);function S(me){o.value=me}function w(me,Ce){if(!me)return"--";if(me.available===!1)return"— 数据不可达";const U=me["hit_n"+Ce];return U===!0?"✓ 命中":U===!1?"✗ 未中":"– 中性/待验证"}async function E(){r.value=!0;try{const Ce=await(await fetch("/api/ai/track")).json();R.value=Ce&&Ce.success?Ce.data:null}catch(me){console.warn("[eval-track] 评估命中率加载失败:",me),R.value=null}finally{r.value=!1}}g(function(){return v.currentPage.value+"/"+v.currentSubPage.value},function(me){me==="ai/evaluation-analysis"&&E()},{immediate:!0});const x=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:C,summary:O,trades:D,loading:d,loadError:i,showAddForm:h,addForm:F,addSaving:B,tradeFormVisible:I,tradeForm:W,tradeSaving:J,portfolioTab:N,equityDays:z,equityLoading:j,equityNote:$,equityHasData:Z,loadPortfolio:ne,addPosition:ee,removePosition:M,openTradeForm:s,submitTrade:y,loadTrades:n,loadEquity:p,fmtSigned:X,fmtSignedPct:T,signClass:b,riskTab:u,riskLoading:k,riskNote:c,riskHasData:A,riskData:oe,riskMetricList:Y,loadRisk:q}=x;g(C,function(me){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((me||[]).map(function(Ce){return{code:Ce.stock_code,name:Ce.stock_name||Ce.stock_code}}))},{deep:!0}),g(function(){return v.currentPage.value+"/"+v.currentSubPage.value},function(me){me==="ai/portfolio"?(ne(),n(),p(z?z.value:30),typeof q=="function"&&q()):me==="ai/overview"&&ne()},{immediate:!0});let K="",ie=!1;return g(function(){const me=v.currentSubPage&&v.currentSubPage.value,Ce=!!(v.detailSplitEnabled&&v.detailSplitEnabled.value),U={sub:me,split:Ce,kind:"",view:"",key:"",first:null,expandList:null,expandFn:null};if(me==="history"){const de=v.aiHistoryView&&v.aiHistoryView.value||"date",Re=de==="date"?v.groupedByDate:de==="month"?v.groupedByMonth:v.aiHistoryByStock,se=Re&&Re.value||{},ge=Object.keys(se);U.kind="history",U.view=de,U.key=ge.length?ge[0]:"",U.first=ge.length&&(se[ge[0]]||[])[0]||null,U.expandList=de==="date"?v.expandedDates:de==="month"?v.expandedMonths:v.expandedStocks,U.expandFn=de==="date"?v.toggleDateExpand:de==="month"?v.toggleMonthExpand:v.toggleStockExpand}else if(me==="chat_history"){const de=v.chatHistoryView&&v.chatHistoryView.value||"date",Re=de==="date"?v.chatGroupedByDate:de==="month"?v.chatGroupedByMonth:v.chatGroupedByStock,se=Re&&Re.value||{},ge=Object.keys(se);U.kind="chat",U.view=de,U.key=ge.length?ge[0]:"",U.first=ge.length&&(se[ge[0]]||[])[0]||null,U.expandList=de==="date"?v.expandedChatDates:de==="month"?v.expandedChatMonths:v.expandedChatStocks,U.expandFn=de==="date"?v.toggleChatDateExpand:de==="month"?v.toggleChatMonthExpand:v.toggleChatStockExpand}return U},function(me){if(!me.split||!me.first||!me.kind)return;const Ce=me.sub!==K,U=v.stockDetail&&v.stockDetail.value,de=!!(U&&U.stock);if(!Ce&&de||ie)return;K=me.sub,ie=!0;try{me.key&&me.expandList&&me.expandFn&&me.expandList.value&&me.expandList.value.indexOf(me.key)<0&&me.expandFn(me.key)}catch{}const Re=me.kind==="history"?v.viewAiResult(me.first):v.viewChatSession(me.first);Re&&typeof Re.finally=="function"?Re.finally(function(){ie=!1}):ie=!1},{immediate:!0}),{...v,trackData:R,trackLoading:r,trackWindows:l,fmtTrackRate:f,loadTrack:E,trackWindow:o,setTrackWindow:S,trackHitText:w,positions:C,summary:O,trades:D,loading:d,loadError:i,showAddForm:h,addForm:F,addSaving:B,tradeFormVisible:I,tradeForm:W,tradeSaving:J,portfolioTab:N,equityDays:z,equityLoading:j,equityNote:$,equityHasData:Z,loadPortfolio:ne,addPosition:ee,removePosition:M,openTradeForm:s,submitTrade:y,loadTrades:n,loadEquity:p,fmtSigned:X,fmtSignedPct:T,signClass:b,riskTab:u,riskLoading:k,riskNote:c,riskHasData:A,riskData:oe,riskMetricList:Y,loadRisk:q}}}})();(function(){const{ref:a,computed:t,watch:g,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:`
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
                </div>`,setup(){const v=e("qcState"),m=Vue.ref(!1),R=Vue.ref(!1);let r=0;if(!v)return{};const l=a(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function f(_){l.value=_;try{localStorage.setItem("quant_strategy_mode",_)}catch{}v.currentSubPage.value="strategy-manage"}const o=a([]),S=a(!1),w=a(!1),E=a(""),x=a(null),C=a(!1),O=a(!1);async function D(){const _=++r;S.value=!0,w.value=!1;try{const G=await fetch("/api/market/reviews?limit=30",{headers:Q()}).then(ze=>ze.json());if(_!==r)return;G&&G.success?o.value=Array.isArray(G.data)?G.data:[]:w.value=!0}catch(G){console.error("[market-review] 复盘列表加载失败:",G),w.value=!0}finally{_===r&&(S.value=!1)}}function d(_){E.value=_,I(_)}function i(_){E.value===_?B():d(_)}function h(_){return _==null||isNaN(Number(_))?"—":(Number(_)>=0?"+":"")+Number(_).toFixed(2)+"%"}function F(_){return _==null||isNaN(Number(_))?"—":Number(_).toFixed(2)}function B(){E.value="",x.value=null,O.value=!1}async function I(_){const G=++r;C.value=!0,O.value=!1,x.value=null;try{const ze=_?"/api/market/review?date="+encodeURIComponent(_):"/api/market/review",ft=await fetch(ze,{headers:Q()}).then(P=>P.json());if(G!==r)return;ft&&ft.success?x.value=ft.data:O.value=!0}catch(ze){console.error("[market-review] 复盘详情加载失败:",ze),O.value=!0}finally{G===r&&(C.value=!1)}}function W(_){return _>0?"up":_<0?"down":"flat"}function J(_){return _==null||isNaN(Number(_))?"—":(_>0?"+":"")+Number(_).toFixed(2)+"%"}function N(_){const G={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(_||{}).map(function(ze){const ft=ze[0],P=ze[1],le=!P||P==="unavailable"||P==="数据不可达";return{label:G[ft]||ft,value:le?"数据不可达":P,unavailable:le}})}const z=a([]),j=a(!1),$=a(!1),Z=a(""),ne=a(""),ee=a(""),M=a({}),s=a(!1),y=a(""),n=a(""),p=a([]),X=a([]),T=a(""),b=a(""),u=a(!0),k=a(!0),c=a("20:00"),A=a("default"),oe=a(!1),Y=a(""),q=t(function(){return z.value.find(function(_){return _.id===ee.value})||null});async function K(_,G){G=G||{},G.headers=Object.assign({},G.headers||{});const ze=localStorage.getItem("quant_token")||"";return ze&&(G.headers.Authorization="Bearer "+ze),fetch(_,G)}async function ie(){const _=++r;j.value=!0,$.value=!1,Z.value="",ne.value="";try{const G=await K("/api/strategies").then(function(ft){return ft.json()});if(_!==r)return;let ze=null;Array.isArray(G)?ze=G:G&&Array.isArray(G.strategies)?(ze=G.strategies,G.warn&&(ne.value=String(G.warn))):($.value=!0,Z.value=G&&G.detail?String(G.detail):"策略列表加载失败（接口返回异常）"),ze!==null&&(z.value=ze,z.value.length&&!ee.value&&(ee.value=z.value[0].id,me()))}catch(G){console.error("[research] 策略列表加载失败:",G),$.value=!0,Z.value="策略列表加载失败: "+(G&&G.message||"网络错误")}finally{_===r&&(j.value=!1)}}function me(){const _=q.value;_&&(M.value={},_.schema.forEach(function(G){M.value[G.key]=G.default}),n.value="",re(),Ce(),se())}async function Ce(){if(!ee.value){X.value=[];return}try{const _=await K("/api/strategies/"+ee.value+"/profiles").then(function(G){return G.json()});X.value=_&&_.data&&_.data.profiles||[],T.value=""}catch(_){console.error("[research] 方案列表加载失败:",_),X.value=[]}}async function U(){m.value=!0;const _=(b.value||"").trim();if(!_){window._core&&window._core.showToast("请输入方案名称");return}try{const G=await K("/api/strategies/"+ee.value+"/profiles",{method:"POST",body:JSON.stringify({name:_,params:M.value})}).then(function(ze){return ze.json()});if(G&&G.detail){window._core&&window._core.showToast(String(G.detail));return}b.value="",await Ce(),window._core&&window._core.showToast("方案已保存")}catch(G){console.error("[research] 方案保存失败:",G),window._core&&window._core.showToast("方案保存失败")}}function de(){const _=X.value.find(function(G){return G.id===T.value});_&&(Object.keys(_.params||{}).forEach(function(G){M.value[G]=_.params[G]}),window._core&&window._core.showToast("已应用方案: "+_.name))}async function Re(){if(T.value)try{await K("/api/strategies/"+ee.value+"/profiles/"+T.value,{method:"DELETE"}).then(function(_){return _.json()}),await Ce(),window._core&&window._core.showToast("方案已删除")}catch(_){console.error("[research] 方案删除失败:",_)}}async function se(){try{const _=await K("/api/strategies/governance").then(function(ft){return ft.json()}),ze=(_&&_.data&&_.data.strategies||{})[ee.value]||{};u.value=ze.enabled!==!1,c.value=ze.schedule||"20:00",A.value=ze.universe==="all"?"all":"default",k.value=ze.show_in_calendar!==!1,Y.value=ze.last_holdings||""}catch(_){console.error("[research] 纳管状态加载失败:",_)}}async function ge(){try{await K("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const _={};return _[ee.value]={enabled:u.value,schedule:c.value,universe:A.value,show_in_calendar:k.value},_}()})}).then(function(_){return _.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(_){console.error("[research] 纳管更新失败:",_)}}async function Te(){if(ee.value){oe.value=!0;try{const _=await K("/api/strategies/"+ee.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:y.value||void 0})}).then(function(G){return G.json()});if(_&&_.detail){window._core&&window._core.showToast(String(_.detail));return}window._core&&window._core.showToast("持仓已生成"),await se()}catch(_){console.error("[research] run-once 失败:",_),window._core&&window._core.showToast("持仓生成失败")}finally{oe.value=!1}}}function pe(){Y.value&&window.open(Y.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function ke(){const _=q.value;if(!_)return;const G=(b.value||"").trim()||_.name+"-副本";Ee(G,Object.assign({},M.value)),window._core&&window._core.showToast("已复制为副本方案: "+G)}async function Ee(_,G){try{await K("/api/strategies/"+ee.value+"/profiles",{method:"POST",body:JSON.stringify({name:_,params:G})}).then(function(ze){return ze.json()}),await Ce()}catch(ze){console.error("[research] 副本保存失败:",ze)}}async function re(){const _=++r;if(ee.value)try{const G=await K("/api/strategies/"+ee.value+"/runs?limit=5").then(function(ze){return ze.json()});if(_!==r)return;p.value=Array.isArray(G)?G:[]}catch{p.value=[]}}async function ae(){if(ee.value){s.value=!0;try{const _=await K("/api/strategies/"+ee.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:M.value,as_of:y.value||void 0})}).then(function(G){return G.json()});_&&_.status==="success"?re():alert("运行失败: "+(_.detail||JSON.stringify(_)))}catch(_){console.error("[research] 策略运行失败:",_),alert("运行失败: "+_.message)}finally{s.value=!1}}}async function he(){if(ee.value)try{const _=Object.keys(M.value).map(function(ze){return encodeURIComponent(ze)+"="+encodeURIComponent(M.value[ze])}).join("&"),G=await K("/api/strategies/"+ee.value+"/ptrade-code?"+_).then(function(ze){return ze.json()});G&&G.code?n.value=G.code:alert("导出失败: "+(G.detail||JSON.stringify(G)))}catch(_){console.error("[research] PTrade 导出失败:",_),alert("导出失败: "+_.message)}}function Ne(){if(!n.value)return;const _=document.createElement("textarea");_.value=n.value,document.body.appendChild(_),_.select();try{document.execCommand("copy")}catch{}document.body.removeChild(_)}g(function(){return v.currentPage.value+"/"+v.currentSubPage.value},function(_){_==="research/research-overview"&&(ie(),D(),ye(),sa()),(_==="research/market-review"||_==="shortterm/market-review")&&!E.value&&D(),_==="research/quant-research"&&ie(),_==="research/backtest-history"&&De()},{immediate:!0});const Fe=a("mom20"),We=a(!1),qt=a(!1),ht=a(null),Et=a(null),_e=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],qe=a('{"top_n":[10,20,30]}'),je=a(null),Oe=a(""),Xe=a(!1),Qe=a(null);async function Ge(){if(!ee.value){ElementPlus.ElMessage.warning("请先选择策略");return}let _;try{_=JSON.parse(qe.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!_||Object.keys(_).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}Xe.value=!0,je.value=null,Oe.value="";try{const G=await fetch("/api/strategies/"+ee.value+"/sweep",{method:"POST",headers:Q(),body:JSON.stringify({param_grid:_})}).then(function(ze){return ze.json()});G&&Array.isArray(G.results)?(je.value=G.results,Oe.value="完成 "+G.count+" 组"+(G.data_degraded?" (数据不可达, 结果降级)":""),Qe.value=G.param_stability||null):Oe.value=G&&G.detail||"扫描失败"}catch(G){console.error("[sweep]",G),Oe.value="扫描失败: "+G.message}finally{Xe.value=!1}}async function it(){const _=++r;We.value=!0;try{const G=await K("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:ee.value||"multi_factor",factor_key:Fe.value,params:M.value||{}})}).then(function(ft){return ft.json()}),ze=G&&G.report?G.report.n1||{}:{};ht.value=ze}catch(G){console.error("[research] 因子IC分析失败:",G),alert("因子 IC 分析失败: "+G.message)}finally{_===r&&(We.value=!1)}}async function bt(){const _=++r;qt.value=!0;try{const G=await K("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:ee.value||"multi_factor",factor_key:Fe.value,params:M.value||{}})}).then(function(ze){return ze.json()});G&&G.layers?Et.value=G:alert("分层回测: "+(G.message||"无数据"))}catch(G){console.error("[research] 分层回测失败:",G),alert("分层回测失败: "+G.message)}finally{_===r&&(qt.value=!1)}}const mt=a(null),At=a(!1);async function aa(){const _=++r;At.value=!0,mt.value=null;try{const G=await K("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:ee.value||"multi_factor",factor_key:Fe.value,params:M.value||{}})}).then(function(ze){return ze.json()});G&&G.detail?mt.value=G.detail:alert("因子详情: "+(G.message||"无数据"))}catch(G){console.error("[research] 因子详情失败:",G),alert("因子详情失败: "+G.message)}finally{_===r&&(At.value=!1)}}const L=a([]),te=a(null),Se=a(null),Ie=a(null),Ke=a(""),kt=a(!1),$e=a(!1),Ue=a(""),_t=a(""),dt=a("");function Q(){const _=localStorage.getItem("quant_token")||"";return _?{Authorization:"Bearer "+_,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function ye(){const _=++r;try{const G=await fetch("/api/strategies/variants",{headers:Q()}).then(function(ze){return ze.json()});if(_!==r)return;L.value=G&&G.data&&G.data.variants||[]}catch(G){console.error("[i3a] 加载 variants 失败:",G)}}async function Ze(){if(!ee.value){Ue.value="请先在量化研究选择母本策略";return}$e.value=!0,Ue.value="";try{const _=await fetch("/api/strategies/"+ee.value+"/clone",{method:"POST",headers:Q(),body:JSON.stringify({name:(b.value||"").trim()||void 0,params:Object.assign({},M.value)})}).then(function(ze){return ze.json()});if(_&&_.detail){Ue.value=String(_.detail);return}const G=_&&_.data;G&&G.sid&&(te.value=G.sid,Ue.value="已复制为新策略: "+G.name,await ye(),await st(G.sid))}catch(_){console.error("[i3a] 复制失败:",_),Ue.value="复制失败: "+_.message}finally{$e.value=!1}}async function ot(_){te.value=_,Ue.value="",Ke.value="",await st(_)}async function st(_){try{const G=await fetch("/api/strategies/"+_+"/selection-spec",{headers:Q()}).then(function(ze){return ze.json()});G&&G.data&&G.data.spec&&(Se.value=Object.assign({},G.data.spec),Ie.value=G.data.fields,_t.value=(G.data.spec.industry_scope||[]).join(","),dt.value=(G.data.spec.market_cap_range||[]).join(","))}catch(G){console.error("[i3a] 加载 spec 失败:",G)}}async function Ft(){if(R.value=!0,!(!te.value||!Se.value))try{Se.value.industry_scope=_t.value?_t.value.split(/[,，]/).map(function(G){return G.trim()}).filter(Boolean):[],Se.value.market_cap_range=dt.value?dt.value.split(/[,，]/).map(Number).filter(function(G){return!isNaN(G)}):[];const _=await fetch("/api/strategies/"+te.value+"/selection-spec",{method:"PUT",headers:Q(),body:JSON.stringify({spec:Se.value})}).then(function(G){return G.json()});_&&_.data&&_.data.spec&&(Se.value=_.data.spec,Ue.value="SelectionSpec 已保存")}catch(_){console.error("[i3a] 保存 spec 失败:",_),Ue.value="保存失败"}}async function Ye(){if(!te.value){Ue.value="请先选择/创建微调策略";return}$e.value=!0,Ue.value="";try{const _=await fetch("/api/strategies/"+te.value+"/run-once",{method:"POST",headers:Q(),body:"{}"}).then(function(G){return G.json()});Ue.value=_&&_.detail?String(_.detail):"持仓已生成: "+(_&&_.data&&_.data.symbols||0)+" 只"}catch(_){console.error("[i3a] run-once 失败:",_),Ue.value="生成持仓失败"}finally{$e.value=!1}}async function Tt(){if(!te.value){Ue.value="请先选择/创建微调策略";return}Se.value||await st(te.value),kt.value=!0,Ue.value="";try{const _=await fetch("/api/strategies/"+te.value+"/ai-trade-code",{method:"POST",headers:Q(),body:JSON.stringify({spec:Se.value})}).then(function(G){return G.json()});if(_&&_.detail){Ue.value=String(_.detail);return}_&&_.data&&(Ke.value=_.data.code||"",_.data.api_errors&&_.data.api_errors.length?Ue.value="生成成功(含 API 校验告警 "+_.data.api_errors.length+" 条)":Ue.value="AI 交易码已生成, 已通过矩阵内校验")}catch(_){console.error("[i3a] AI 交易码失败:",_),Ue.value="AI 生成失败: "+_.message}finally{kt.value=!1}}function Bt(){if(Ke.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Ke.value).then(function(){Ue.value="代码已复制"});else{const _=document.createElement("textarea");_.value=Ke.value,document.body.appendChild(_),_.select(),document.execCommand("copy"),document.body.removeChild(_),Ue.value="代码已复制"}}const It=a(""),pt=a(""),Pt=a([]),Kt=a(""),Jt=a(""),xt=a(""),gt=a(null),Zt=a(!1),Dt=a(!1),ra=a(!1);function Qt(){const _=localStorage.getItem("quant_token")||"";return _?{Authorization:"Bearer "+_,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function sa(){const _=++r;try{const G=await fetch("/api/strategies/custom",{headers:Qt()}).then(function(ze){return ze.json()});if(_!==r)return;Pt.value=G&&G.data&&G.data.customs||[]}catch(G){console.error("[i3b] 加载自定义策略失败:",G)}}async function ut(){if(!pt.value.trim()){xt.value="请描述策略思路";return}Zt.value=!0,xt.value="";try{const _=await fetch("/api/strategies/custom",{method:"POST",headers:Qt(),body:JSON.stringify({name:It.value.trim()||"自定义策略",prompt:pt.value})}).then(function(G){return G.json()});if(_&&_.detail){xt.value=String(_.detail);return}_&&_.data&&(Jt.value=_.data.code||"",xt.value="AI 代写成功: "+_.data.sid+(_.data.api_errors&&_.data.api_errors.length?" (API 告警 "+_.data.api_errors.length+" 条)":" (校验通过)"),await sa())}catch(_){console.error("[i3b] AI 代写失败:",_),xt.value="AI 代写失败: "+_.message}finally{Zt.value=!1}}async function $t(){if(Kt.value)try{const _=await fetch("/api/strategies/custom/"+Kt.value+"/code",{headers:Qt()}).then(function(G){return G.json()});_&&_.data&&(Jt.value=_.data.code||"",xt.value="")}catch(_){console.error("[i3b] 读取代码失败:",_)}}async function ca(){if(!Kt.value){xt.value="请先选择自定义策略";return}Dt.value=!0,xt.value="";try{const _=await fetch("/api/strategies/custom/"+Kt.value+"/backtest",{method:"POST",headers:Qt(),body:"{}"}).then(function(G){return G.json()});if(_&&_.detail){xt.value=String(_.detail);return}_&&_.data&&(gt.value=_.data,xt.value="回测完成")}catch(_){console.error("[i3b] 回测失败:",_),xt.value="回测失败: "+_.message}finally{Dt.value=!1}}async function ya(){if(!Kt.value){xt.value="请先选择自定义策略";return}ra.value=!0,xt.value="";try{const _=await fetch("/api/strategies/custom/"+Kt.value+"/ai-optimize",{method:"POST",headers:Qt(),body:JSON.stringify({backtest:gt.value})}).then(function(G){return G.json()});if(_&&_.detail){xt.value=String(_.detail);return}_&&_.data&&(Jt.value=_.data.code||"",xt.value="AI 优化完成"+(_.data.api_errors&&_.data.api_errors.length?" (API 告警 "+_.data.api_errors.length+" 条)":" (校验通过)"))}catch(_){console.error("[i3b] AI 优化失败:",_),xt.value="AI 优化失败: "+_.message}finally{ra.value=!1}}function _a(){if(Jt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Jt.value).then(function(){xt.value="代码已复制"});else{const _=document.createElement("textarea");_.value=Jt.value,document.body.appendChild(_),_.select(),document.execCommand("copy"),document.body.removeChild(_),xt.value="代码已复制"}}const la=Vue.ref([]),H=Vue.ref(!1),xe=Vue.ref(!1),He=Vue.ref(30);async function De(){const _=++r;H.value=!0,xe.value=!1;try{const G=window.__quantModules&&window.__quantModules.core||{},ze=typeof G.authHeaders=="function"?G.authHeaders():{},ft=await fetch("/api/backtest/history?days="+He.value,{headers:ze}).then(function(P){return P.json()});if(_!==r)return;la.value=ft&&ft.data||[]}catch(G){console.error("[backtest] 回测历史加载失败:",G),xe.value=!0}finally{_===r&&(H.value=!1)}}const vt=Vue.ref([]),tt=Vue.ref(!1),Lt=Vue.ref(!1),Wt=Vue.ref(""),Ut=Vue.ref([]),xa=Vue.ref(""),ba=Vue.ref([]),da=Vue.ref(!1),na=Vue.ref(!1),Aa={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function ua(_){return Aa[_]||_||"—"}function La(_){v&&v.navigateTo&&v.navigateTo("shortterm",_)}function va(){v.currentSubPage.value="research-history",Ta()}async function Ta(){const _=++r;tt.value=!0,Lt.value=!1;try{const G=window.__quantModules&&window.__quantModules.core||{},ze=typeof G.authHeaders=="function"?G.authHeaders():{},ft=Wt.value?"?type="+encodeURIComponent(Wt.value):"",P=await fetch("/api/strategies/research-history"+ft,{headers:ze}).then(function(le){return le.json()});if(_!==r)return;vt.value=P&&P.items||[]}catch(G){console.error("[research-history] 加载失败:",G),Lt.value=!0}finally{_===r&&(tt.value=!1)}}async function wa(){const _=++r;na.value=!0;try{const G=window.__quantModules&&window.__quantModules.core||{},ze=typeof G.authHeaders=="function"?G.authHeaders():{},ft=Wt.value?"?type="+encodeURIComponent(Wt.value):"",P=await fetch("/api/strategies/research-history/export"+ft,{headers:ze});if(!P.ok)throw new Error("HTTP "+P.status);const le=await P.blob(),ce=URL.createObjectURL(le),Me=document.createElement("a");Me.href=ce,Me.download="research_history.csv",document.body.appendChild(Me),Me.click(),document.body.removeChild(Me),URL.revokeObjectURL(ce)}catch(G){console.error("[research-history] 导出失败:",G)}finally{_===r&&(na.value=!1)}}function Ia(_){const G=Ut.value.indexOf(_);G>=0?Ut.value.splice(G,1):Ut.value.length<10&&Ut.value.push(_)}function Na(_){xa.value=xa.value===_?"":_}async function Gt(){const _=++r,G=Ut.value;if(!(G.length<2)){da.value=!0;try{const ze=window.__quantModules&&window.__quantModules.core||{},ft=typeof ze.authHeaders=="function"?ze.authHeaders():{},P=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},ft),body:JSON.stringify({ids:G})}).then(function(le){return le.json()});ba.value=P&&P.items||[]}catch(ze){console.error("[research-history] 对比失败:",ze)}finally{_===r&&(da.value=!1)}}}async function ma(_){try{const G=window.__quantModules&&window.__quantModules.core||{},ze=typeof G.authHeaders=="function"?G.authHeaders():{},ft=await fetch("/api/strategies/research-history/"+_,{method:"DELETE",headers:ze}).then(function(P){return P.json()});if(ft&&ft.deleted){vt.value=vt.value.filter(function(le){return le.id!==_});const P=Ut.value.indexOf(_);P>=0&&Ut.value.splice(P,1)}}catch(G){console.error("[research-history] 删除失败:",G)}}return{...v,strategyManageMode:l,openStrategyManage:f,btHistory:la,btHistoryLoading:H,btHistoryError:xe,btHistoryDays:He,loadBtHistory:De,researchHistory:vt,researchHistoryLoading:tt,researchHistoryError:Lt,researchHistoryType:Wt,researchHistorySelected:Ut,researchDetailId:xa,researchCompareRows:ba,researchCompareLoading:da,researchTypeLabel:ua,goShortterm:La,openResearchHistory:va,loadResearchHistory:Ta,researchExportLoading:na,exportResearchHistory:wa,toggleResearchSelect:Ia,toggleResearchDetail:Na,runResearchCompare:Gt,deleteResearchHistory:ma,marketReviews:o,marketReviewLoading:S,marketReviewError:w,selectedReviewDate:E,marketReviewDetail:x,marketReviewDetailLoading:C,marketReviewDetailError:O,loadMarketReviews:D,openMarketReview:d,toggleMarketReviewDate:i,backToMarketReviewList:B,loadMarketReviewDetail:I,marketReviewChgClass:W,marketReviewChgText:J,marketReviewSrcEntries:N,fmtPct:h,fmtEmotion:F,strategies:z,strategiesLoading:j,strategiesError:$,strategiesErrorText:Z,strategiesWarn:ne,activeStrategyId:ee,activeStrategy:q,paramValues:M,strategyRunning:s,ptradeCode:n,strategyRuns:p,savingProfile:m,variantSaving:R,loadStrategies:ie,onStrategyChange:me,runActiveStrategy:ae,exportActivePtradeCode:he,copyPtradeCode:Ne,profiles:X,profileSelect:T,profileName:b,loadProfiles:Ce,saveProfile:U,applyProfile:de,deleteProfile:Re,govEnabled:u,govSchedule:c,govUniverse:A,govRunning:oe,lastHoldings:Y,loadGov:se,updateGov:ge,runOnceActive:Te,openLastHoldings:pe,cloneStrategy:ke,govShowCalendar:k,factorKey:Fe,factorIcLoading:We,factorLayerLoading:qt,factorIcReport:ht,factorLayerResult:Et,factorOptions:_e,runFactorIc:it,runFactorLayer:bt,factorDetail:mt,factorDetailLoading:At,runFactorDetail:aa,variants:L,variantSelected:te,variantSpec:Se,specFields:Ie,aiCode:Ke,aiCodeLoading:kt,variantBusy:$e,variantMsg:Ue,loadVariants:ye,cloneNewStrategy:Ze,selectVariant:ot,loadVariantSpec:st,saveVariantSpec:Ft,runVariantOnce:Ye,genVariantAiCode:Tt,copyVariantCode:Bt,customName:It,customPrompt:pt,customs:Pt,customSelected:Kt,customCode:Jt,customMsg:xt,customBtResult:gt,customGenLoading:Zt,customBtLoading:Dt,customOptLoading:ra,loadCustoms:sa,genCustomCode:ut,loadCustomCode:$t,runCustomBacktest:ca,runCustomOptimize:ya,copyCustomCode:_a,sweepGrid:qe,sweepResult:je,sweepMessage:Oe,sweepLoading:Xe,sweepStability:Qe,runSweep:Ge}}}})();(function(){const{inject:a,ref:t,onMounted:g,computed:e,nextTick:v}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
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
                </div>`,setup(){const m=a("qcState");if(!m)return{};const R=m.currentPage,r=m.currentSubPage,l=t(""),f=t(null),o=t(!1),S=t(!1),w=t("数据加载失败"),E=t("请检查服务后重试"),x=t(null),C=t(null),O=t(!1),D=t(!1),d=t("数据加载失败"),i=t("请检查服务后重试"),h=t(null),F=t(1),B=50,I=e(function(){const H=C.value||[];if(H.length<=200)return H;const xe=(F.value-1)*B;return H.slice(xe,xe+B)}),W=t(null),J=t(!1),N=t(!1),z=t("数据加载失败"),j=t("请检查服务后重试"),$=t([]),Z=t(!1);async function ne(){Z.value=!0;try{const H=await ke("/api/shortterm/dates/summary",!1);H&&H.success&&($.value=H.dates||[])}catch{$.value=[]}finally{Z.value=!1}}function ee(H){H!==l.value&&(l.value=H,st(!0))}const M=t("行业资金流"),s=t("今日"),y=t(""),n=t(null),p=t(1),X=t(!1),T=t(!1),b=t("数据加载失败"),u=t("请检查服务后重试"),k=t(""),c=t(null),A=t(!1),oe=t(null),Y=t(!1),q=t(!1),K=t(""),ie=t(""),me=t(!1);function Ce(){const H=localStorage.getItem("quant_token")||"";return H?{Authorization:"Bearer "+H,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const U={},de=[],Re=50,se=60*1e3;let ge=0,Te=0,pe=0;function ke(H,xe){const He=Date.now(),De=U[H];return!xe&&De&&He-De.ts<se?Promise.resolve(De.data):fetch(H,{headers:Ce()}).then(function(vt){return vt.json()}).then(function(vt){if(U[H]||de.push(H),U[H]={ts:Date.now(),data:vt},de.length>Re){const tt=de.shift();delete U[tt]}return vt})}async function Ee(H){const xe=++ge;o.value=!0,S.value=!1;try{const He="/api/shortterm/pools"+(l.value?"?date="+l.value:""),De=await ke(He,H);if(xe!==ge)return;De&&De.success?(f.value=De,v(ye)):De&&De.detail?(S.value=!0,w.value=String(De.detail),E.value="请先登录后再查看"):(S.value=!0,w.value="数据加载失败",E.value="请检查服务后重试")}catch{if(xe!==ge)return;S.value=!0,w.value="数据加载失败",E.value="请检查服务后重试"}finally{xe===ge&&(o.value=!1)}}async function re(H){const xe=++ge;O.value=!0,D.value=!1;try{const He="/api/shortterm/lhb"+(l.value?"?date="+l.value:""),De=await ke(He,H);if(xe!==ge)return;De&&De.success?(C.value=Array.isArray(De.rows)?De.rows:null,h.value=De.available===!1&&De.reason||null,F.value=1):De&&De.detail?(D.value=!0,d.value=String(De.detail),i.value="请先登录后再查看"):(D.value=!0,d.value="数据加载失败",i.value="请检查服务后重试")}catch{if(xe!==ge)return;D.value=!0,d.value="数据加载失败",i.value="请检查服务后重试"}finally{xe===ge&&(O.value=!1)}}const ae=e(function(){const H=f.value&&f.value.ladder&&f.value.ladder.tiers;return!H||!Object.keys(H).length?"—":Object.keys(H).sort(function(xe,He){return xe-He}).map(function(xe){return xe+"板:"+H[xe]}).join(" ")}),he=e(function(){const H=f.value&&f.value.zt||[];return x.value?H.filter(function(xe){return xe.boards===x.value}):H});function Ne(){x.value=null}const Fe=e(function(){const H=W.value&&W.value.emotion&&W.value.emotion.money_effect;return!H||!H.available?"—":H.source==="settled"?"定稿记录":H.source==="realtime"?H.partial?"实时(样本不全)":"实时":"—"}),We=e(function(){const H=W.value&&W.value.emotion&&W.value.emotion.promotion&&W.value.emotion.promotion.tiers&&W.value.emotion.promotion.tiers["1进2"];return H?H.rate:null}),qt=e(function(){const H=W.value&&W.value.emotion&&W.value.emotion.sentiment_cycle;return H&&H.available&&H.current_score!=null?H.current_score.toFixed(2):"—"}),ht=e(function(){const H=W.value&&W.value.emotion&&W.value.emotion.sentiment_cycle;return!H||!H.available?"—":(H.trend||"—")+(H.day_n!=null?" · 距低谷"+H.day_n+"天":"")});e(function(){const H=W.value&&W.value.emotion;if(!H)return"";const xe=[];for(const He of["money_effect","promotion","consec_premium","sentiment_cycle"]){const De=H[He];De&&De.available===!1&&De.reason&&xe.push(String(De.reason).replace(/^[[^]]*]s*/,""))}return xe.join("；")}),e(function(){const H=W.value&&W.value.facts;if(!H)return"";const xe=[];for(const He of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const De=H[He];De&&De.available===!1&&De.reason&&xe.push(String(De.reason).replace(/^[[^]]*]s*/,""))}return xe.join("；")});function Et(H){return H==null||isNaN(H)?"—":(H*100).toFixed(0)+"%"}function _e(H,xe){return H==null?"—":(typeof H=="number"?Math.round(H*100)/100:H)+(xe||"")}function qe(H){return"tag-chip mr-4"}function je(H){return H==null?"":H>0?"is-rise":H<0?"is-fall":""}function Oe(H){return H==="机构"?"is-institution":H==="游资"?"is-hotmoney":H==="主力"?"is-main":""}const Xe=e(function(){const H=W.value&&W.value.session_status;if(!H)return"—";const xe=W.value.date;return xe===H.latest_session&&H.settled?"已收盘":xe===H.today&&H.is_trade_day&&!H.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),Qe=e(function(){const H=W.value&&W.value.session_status;if(!H)return"";const xe=W.value.date;return xe===H.latest_session&&H.settled?"is-institution":xe===H.today&&H.is_trade_day&&!H.settled?"is-main":""});function Ge(H){H&&H.ts_code&&m&&m.showStockDetail&&m.showStockDetail(H.ts_code)}const it=e(function(){return(C.value||[]).filter(function(H){return(H.tags||[]).indexOf("机构")>=0}).reduce(function(H,xe){return H+(xe.net_buy||0)},0)}),bt=e(function(){return(C.value||[]).filter(function(H){return(H.tags||[]).indexOf("游资")>=0}).length}),mt=e(function(){const H=(n.value||[]).filter(function(xe){return xe.main_net_inflow!=null});return H.length?H.reduce(function(xe,He){return xe.main_net_inflow>=He.main_net_inflow?xe:He}):null}),At=e(function(){const H=mt.value;return H?H.name:"—"}),aa=e(function(){const H=mt.value;return H?H.main_net_inflow:null}),L=e(function(){return k.value||"东财"}),te=e(function(){const H=(y.value||"").trim(),xe=n.value||[];return H?xe.filter(function(He){return He.name&&String(He.name).indexOf(H)>=0}):xe});function Se(H){y.value=H||"",m&&m.currentSubPage&&(m.currentSubPage.value="sector")}const Ie=e(function(){const H=te.value;if(H.length<=200)return H;const xe=(p.value-1)*B;return H.slice(xe,xe+B)}),Ke=["09:25","09:35","10:00","11:30","14:00","15:00"],kt=e(function(){const H={};return(oe.value||[]).forEach(function(xe){H[xe.slot]=!0}),H});function $e(H){return kt.value[H]?"is-done":H===Ue.value?"is-current":"is-empty"}const Ue=e(function(){const H=new Date,xe=(H.getHours()<10?"0":"")+H.getHours(),He=(H.getMinutes()<10?"0":"")+H.getMinutes(),De=xe+":"+He;for(var vt=0;vt<Ke.length;vt++)if(De===Ke[vt])return Ke[vt];for(var tt=0;tt<Ke.length-1;tt++){var Lt=Ke[tt],Wt=new Date;Wt.setHours(Number(Lt.split(":")[0]),Number(Lt.split(":")[1]),0,0);var Ut=new Date(Wt.getTime()+8*6e4);if(H>=Wt&&H<=Ut)return Lt}return""}),_t=e(function(){const H=new Date,xe=Ue.value;if(xe)return"当前处于快照窗口 "+xe+" (前后 8 分钟) — 可采集";const He=H.getHours(),De=H.getMinutes();let vt="";for(let tt=0;tt<Ke.length;tt++){const Lt=Ke[tt].split(":");if(Number(Lt[0])>He||Number(Lt[0])===He&&Number(Lt[1])>De){vt=Ke[tt];break}}return vt?"下一快照时点 "+vt+" — 非窗口期不可采集":"今日快照时点已全部结束"}),dt=t(""),Q=t("info");function ye(){const H=f.value&&f.value.ladder&&f.value.ladder.tiers;if(!H||!Object.keys(H).length)return;const xe=window.__quantModules&&window.__quantModules.charts;if(!xe||!xe.renderSimpleChartTo)return;const He=x.value,De=xe.renderSimpleChartTo("shorttermLadderChart",function(){const vt=Object.keys(H).sort(function(tt,Lt){return Number(tt)-Number(Lt)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:vt.map(function(tt){return tt+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(tt){return He&&Number(vt[tt.dataIndex])===He?"var(--color-accent)":"var(--chart-split)"}},data:vt.map(function(tt){return H[tt]})}]}},{key:"shortterm-ladder"});De&&De.off&&(De.off("click"),De.on("click",function(vt){if(!vt||!vt.name)return;const tt=parseInt(vt.name,10);isNaN(tt)||(x.value=x.value===tt?null:tt)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(ye);function Ze(H){if(H==null)return"—";const xe=Math.abs(H);return xe>=1e8?(H/1e8).toFixed(2)+"亿":xe>=1e4?(H/1e4).toFixed(0)+"万":H.toFixed(0)}function ot(H){return H==null?"—":(H>=0?"+":"")+H.toFixed(2)+"%"}async function st(H){const xe=++Te;J.value=!0,N.value=!1;try{const He="/api/shortterm/overview"+(l.value?"?date="+l.value:""),De=await ke(He,H);if(xe!==Te)return;De&&De.success?W.value=De:De&&De.detail?(N.value=!0,z.value=String(De.detail),j.value="请先登录后再查看"):(N.value=!0,z.value="数据加载失败",j.value="请检查服务后重试")}catch{if(xe!==Te)return;N.value=!0,z.value="数据加载失败",j.value="请检查服务后重试"}finally{xe===Te&&(J.value=!1)}}async function Ft(H){const xe=++ge;X.value=!0,T.value=!1;try{const He="/api/shortterm/sector-flow?indicator="+encodeURIComponent(s.value)+"&sector_type="+encodeURIComponent(M.value),De=await ke(He,H);if(xe!==ge)return;De&&De.success&&De.available?(n.value=De.rows||[],k.value=De.source||(De.note?"同花顺":"东财"),p.value=1):De&&De.reason?(T.value=!0,b.value="数据加载失败",u.value=String(De.reason).replace(/^\[[^\]]*\]\s*/,"")):De&&De.detail?(T.value=!0,b.value=String(De.detail),u.value="请先登录后再查看"):(T.value=!0,b.value="数据加载失败",u.value="请检查服务后重试")}catch{if(xe!==ge)return;T.value=!0,b.value="数据加载失败",u.value="请检查服务后重试"}finally{xe===ge&&(X.value=!1)}}async function Ye(H){const xe=++pe;try{const He="/api/shortterm/review"+(l.value?"?date="+l.value:""),De=await ke(He,H);if(xe!==pe)return;De&&De.success&&(c.value=De.review||null)}catch{}}async function Tt(){A.value=!0;try{const H="/api/shortterm/review"+(l.value?"?date="+l.value:""),xe=await fetch(H,{method:"POST",headers:Ce()}).then(function(He){return He.json()});xe&&xe.success&&(c.value=xe,U[H]={ts:Date.now(),data:xe})}catch{}finally{A.value=!1}}async function Bt(){const H=K.value.trim();if(H){me.value=!0,ie.value="";try{const He=await fetch("/api/shortterm/review/chat",{method:"POST",headers:Ce(),body:JSON.stringify({date:overviewDate.value,question:H})}).then(function(De){return De.json()});ie.value=He.answer||"[无回复]"}catch{ie.value="[发送失败]"}finally{me.value=!1}}}async function It(H){const xe=++ge;Y.value=!0;try{const He="/api/shortterm/intraday"+(l.value?"?date="+l.value:""),De=await ke(He,H);if(xe!==ge)return;De&&De.success&&(oe.value=De.snapshots||[])}catch{}finally{xe===ge&&(Y.value=!1)}}async function pt(){q.value=!0;try{const H="/api/shortterm/intraday/snapshot"+(l.value?"?date="+l.value:""),xe=await fetch(H,{method:"POST",headers:Ce()}).then(function(He){return He.json()});xe&&xe.success?(xe.accepted?(dt.value="已采集 "+xe.slot+" 快照"+(xe.pools_available&&!xe.pools_available.zt?" (池源部分不可用)":""),Q.value="ok"):(dt.value="⏱ "+(xe.reason||"非快照时点"),Q.value="warn"),It()):dt.value="采集失败, 请稍后重试"}catch{dt.value="采集失败, 请稍后重试"}finally{q.value=!1}}function Pt(){return ke("/api/shortterm/latest-session",!1).then(function(H){H&&H.date&&(l.value||(l.value=H.date))}).catch(function(){})}function Kt(){const H=r.value;H==="ztpool"?Ee():H==="lhb"?re():H==="overview"?(st(),Ye()):H==="sector"?Ft():H==="intraday"&&It()}function Jt(){const H=l.value?"?date="+l.value:"";["/api/shortterm/overview"+H,"/api/shortterm/pools"+H,"/api/shortterm/lhb"+H].forEach(function(He){ke(He,!1).catch(function(){})})}function xt(){const H=r.value;H==="ztpool"?Ee(!0):H==="lhb"?re(!0):H==="overview"?(st(!0),Ye(!0)):H==="sector"?Ft(!0):H==="intraday"&&It(!0)}g(function(){Pt(),Kt(),Jt(),ca(),ne()}),Vue.watch(function(){return r.value},function(H){Kt(),H==="overview"&&ca()});const gt=window.QuantOnboarding,Zt=t(!1),Dt=t(gt?gt.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),ra=e(function(){return gt&&gt.shorttermTourSteps()[Dt.value.stepIndex]||{key:"",title:"",desc:""}}),Qt=e(function(){return gt?gt.shorttermTourProgress(Dt.value):{done:0,total:3,pct:0}}),sa=e(function(){return Dt.value.stepIndex>=2});function ut(){if(gt){var H=null;try{H=localStorage.getItem("qc_shortterm_tour")}catch{}if(H){var xe=gt.parseState(H);xe&&(Dt.value=xe)}}}function $t(){if(gt){var H=JSON.stringify(Dt.value);try{localStorage.setItem("qc_shortterm_tour",H)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:H}})}).catch(function(){})}catch{}}}function ca(){window.__quantGuideModalsEnabled===!0&&gt&&r.value==="overview"&&(ut(),gt.shorttermTourShouldShow(Dt.value)&&(Zt.value=!0))}function ya(){Dt.value=gt.shorttermTourNext(Dt.value),$t()}function _a(){Dt.value=gt.shorttermTourComplete(Dt.value),$t(),Zt.value=!1}function la(){Dt.value=gt.shorttermTourDismiss(Dt.value),$t(),Zt.value=!1}return{currentPage:R,currentSubPage:r,shortDate:l,pools:f,poolLoading:o,poolError:S,ztBoardFilter:x,filteredZt:he,clearBoardFilter:Ne,lhbRows:C,lhbLoading:O,lhbError:D,lhbReason:h,lhbPageRows:I,lhbPage:F,overview:W,overviewLoading:J,overviewError:N,dateList:$,dateListLoading:Z,loadDateList:ne,pickDate:ee,sectorType:M,sectorIndicator:s,sectorKeyword:y,sectorRows:n,filteredSectorRows:te,sectorPageRows:Ie,sectorPage:p,sectorLoading:X,sectorError:T,sectorFlowSource:k,PAGE_SIZE:B,gotoSector:Se,review:c,reviewRunning:A,intradaySnapshots:oe,intradayLoading:Y,intradayCollecting:q,intradaySlots:Ke,intradayMsg:dt,slotClass:$e,intradayStatus:_t,chatQuestion:K,chatAnswer:ie,chatLoading:me,loadPools:Ee,loadLhb:re,loadOverview:st,loadSectorFlow:Ft,loadReview:Ye,runReview:Tt,sendChat:Bt,loadIntraday:It,collectSnapshot:pt,refreshCurrent:xt,ladderText:ae,fmtAmount:Ze,fmtPct:ot,riseFall:je,tagClass:Oe,openStock:Ge,lhbInstitutionNetBuy:it,lhbHotMoneyCount:bt,sectorTopName:At,sectorTopInflow:aa,sectorSource:L,moneySource:Fe,promotion1to2:We,cycleScore:qt,cycleTrend:ht,pct:Et,fmtCond:_e,verdictClass:qe,sessionStatusText:Xe,sessionStatusClass:Qe,shorttermTourVisible:Zt,shorttermTourState:Dt,shorttermTourStep:ra,shorttermTourProg:Qt,shorttermTourIsLast:sa,shorttermTourNext:ya,shorttermTourFinish:_a,shorttermTourSkip:la}}}})();(function(a,t){typeof Ae=="object"&&Ae.exports?Ae.exports=t():a.QuantVirtualList=t()})(typeof self<"u"?self:void 0,function(){var a=8;function t(r,l,f,o,S){var w=f>0?f:1,E=typeof S=="number"&&S>=0?S:a,x=Math.max(0,o),C=Math.max(0,r),O=Math.max(0,l),D=Math.max(0,Math.floor(C/w)-E),d=Math.min(x,Math.ceil((C+O)/w)+E);return{startIndex:D,endIndex:d}}function g(r,l){return Math.max(0,r||0)*(l>0?l:0)}function e(r,l,f,o,S){var w=r||[],E=t(l,f,o,w.length,S),x=w.slice(E.startIndex,E.endIndex);return{visible:x,startIndex:E.startIndex,endIndex:E.endIndex,offsetY:E.startIndex*(o>0?o:1),totalHeight:g(w.length,o)}}function v(r,l){if(r){if(r.code!=null)return r.code;if(r.id!=null)return r.id;if(r.ts_code!=null)return r.ts_code}return l}function m(r,l,f){var o=r||[];if(!o.length)return l>0?l:1;for(var S=Math.min(f||50,o.length),w=0,E=0,x=0;x<S;x++){var C=o[x]&&o[x].rowHeight;typeof C=="number"&&C>0&&(w+=C,E++)}return E?w/E:l>0?l:1}function R(r,l,f,o,S){var w=t(r,l,f,o,S),E=Math.max(0,o);return E?(w.endIndex-w.startIndex)/E:0}return{DEFAULT_BUFFER:a,computeVisibleRange:t,computeTotalHeight:g,sliceVisible:e,getRowKey:v,estimateDynamicRowHeight:m,renderedRatio:R}});(function(){const{ref:a,computed:t,onMounted:g,onBeforeUnmount:e}=Vue,v=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:v.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(m){const R=a(null),r=a(0),l=a(400),f=t(()=>(v.computeVisibleRange||function(i,h,F,B,I){const W=F>0?F:1,J=I>=0?I:8,N=Math.max(0,B);return{startIndex:Math.max(0,Math.floor(i/W)-J),endIndex:Math.min(N,Math.ceil((i+h)/W)+J)}})(r.value,l.value,m.rowHeight,m.items.length,m.buffer)),o=t(()=>m.items.length*m.rowHeight),S=t(()=>f.value.startIndex),w=t(()=>f.value.endIndex),E=t(()=>m.items.slice(S.value,w.value));function x(){R.value&&(r.value=R.value.scrollTop)}function C(){R.value&&(l.value=R.value.clientHeight||400)}function O(d,i){return v.getRowKey?v.getRowKey(d,i):d&&d.code!=null?d.code:d&&d.id!=null?d.id:i}let D=null;return g(()=>{C(),R.value&&typeof ResizeObserver<"u"&&(D=new ResizeObserver(()=>C()),D.observe(R.value))}),e(()=>{D&&D.disconnect()}),{scrollEl:R,totalHeight:o,startIndex:S,endIndex:w,visibleItems:E,onScroll:x,keyOf:O}}}})();(function(a,t){typeof Ae=="object"&&Ae.exports?Ae.exports=t():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=t())})(typeof self<"u"?self:void 0,function(){var a=40,t=1.2,g=60,e=500,v=10,m=88,R=350;function r(i,h,F,B,I){I=I||{};var W=typeof I.threshold=="number"?I.threshold:a,J=typeof I.bias=="number"?I.bias:t,N=F-i,z=B-h;return Math.abs(N)<W||Math.abs(N)<Math.abs(z)*J?"none":N<0?"left":"right"}function l(i,h,F){F=F||{};var B=typeof F.threshold=="number"?F.threshold:g;return h-i>=B}function f(i,h){h=h||{};var F=typeof h.threshold=="number"?h.threshold:e;return i>=F}var o=!1;function S(i,h){return i&&typeof i.closest=="function"?i.closest(h):null}function w(i){if(!i)return"";var h=i.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(h){var F=h.getAttribute&&h.getAttribute("data-copy-code");if(F)return F.trim();var B=(h.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(B)return B[0]}var I=i.getAttribute&&i.getAttribute("data-copy-code");return I?I.trim():""}function E(i){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(i).then(function(){return!0}).catch(function(){return x(i)}):Promise.resolve(x(i))}function x(i){try{var h=document.createElement("textarea");return h.value=i,h.style.position="fixed",h.style.opacity="0",document.body.appendChild(h),h.select(),document.execCommand("copy"),document.body.removeChild(h),!0}catch{return!1}}function C(i){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(i)}function O(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function D(){var i=null,h=null,F=null;function B(){h&&(h.timer&&clearTimeout(h.timer),h=null)}function I(Z){F={el:Z,until:Date.now()+R}}function W(Z){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(ne){ne!==Z&&ne.classList.remove("swipe-open")}),i&&i.el!==Z&&(i=null)}function J(Z){var ne=Z.touches&&Z.touches[0];if(ne){var ee=S(Z.target,".swipe-reveal");ee&&(i={el:ee,x:ne.clientX,y:ne.clientY,moved:!1},Z.stopPropagation());var M=S(Z.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");M&&(B(),h={el:M,x:ne.clientX,y:ne.clientY,timer:setTimeout(function(){var s=w(M);h=null,s&&(I(M),E(s).then(function(){O(),C("已复制代码 "+s)}))},e)})}}function N(Z){if(i){var ne=Z.touches&&Z.touches[0];if(ne){var ee=ne.clientX-i.x,M=ne.clientY-i.y;if(Math.abs(ee)>8&&Math.abs(ee)>Math.abs(M)*1.2){Z.cancelable&&Z.preventDefault(),i.moved=!0;var s=i.el.querySelector(".swipe-reveal-main")||i.el,y=Math.max(-m,Math.min(0,ee));s.style.transition="none",s.style.transform="translateX("+y+"px)",Z.stopPropagation()}if(h){var n=ne.clientX-h.x,p=ne.clientY-h.y;(Math.abs(n)>v||Math.abs(p)>v)&&B()}}}}function z(Z){if(B(),!!i){var ne=i.el,ee=Z.changedTouches&&Z.changedTouches[0],M=i.x,s=i.y,y="none";ee&&(y=r(M,s,ee.clientX,ee.clientY));var n=i.moved;i=null;var p=ne.querySelector(".swipe-reveal-main")||ne;p.style.transform="",p.style.transition="",y==="left"?(W(ne),ne.classList.add("swipe-open"),I(ne)):(y==="right"||n)&&ne.classList.remove("swipe-open"),Z.stopPropagation()}}function j(){B(),i=null}function $(Z){if(F&&Date.now()<F.until){var ne=F.el.contains(Z.target)||Z.target===F.el,ee=Z.target.closest&&Z.target.closest(".swipe-reveal-actions");ne&&!ee&&(Z.preventDefault(),Z.stopPropagation(),F=null)}}document.addEventListener("touchstart",J,!0),document.addEventListener("touchmove",N,!0),document.addEventListener("touchend",z,!0),document.addEventListener("touchcancel",j,!0),document.addEventListener("click",$,!0)}function d(){o||typeof document>"u"||(o=!0,D())}return{judgeSwipe:r,judgePullToRefresh:l,judgeLongPress:f,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:t,PULL_THRESHOLD:g,LONG_PRESS_MS:e,LONG_PRESS_MOVE_SLOP:v,REVEAL_WIDTH:m,initGestures:d,_codeFromRow:w}});(function(){const a={empty:{icon:"inbox",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"alert-triangle",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"wifi-off",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},t=Object.keys(a);function g(m){return a[m]||a.empty}function e(){const m=[];for(const R of t){const r=a[R];r.title||m.push(R+".title"),R!=="loading"&&!r.icon&&m.push(R+".icon"),typeof r.retry!="boolean"&&m.push(R+".retry"),typeof r.skeleton!="boolean"&&m.push(R+".skeleton")}return{ok:m.length===0,errors:m}}const v={VARIANTS:a,KEYS:t,resolve:g,validate:e};typeof window<"u"&&(window.QuantStatePanel=v),typeof Ae<"u"&&Ae.exports&&(Ae.exports=v)})();(function(){const{computed:a}=Vue,t=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(g){const e=a(()=>typeof t.resolve=="function"?t.resolve(g.type):{}),v=a(()=>g.icon||e.value.icon||""),m=a(()=>g.title||e.value.title||""),R=a(()=>g.desc||e.value.desc||""),r=a(()=>!!e.value.retry),l=a(()=>/^[a-z][a-z0-9-]*$/.test(String(v.value||"")));return{icon:v,title:m,desc:R,retryable:r,isIconName:l}}}})();(function(a,t){typeof Ae=="object"&&Ae.exports?Ae.exports=t():a.QuantCommandPanel=t()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function a(i){return String(i||"").trim().toLowerCase()}function t(i,h){if(!i)return!0;const F=i.split(/\s+/).filter(Boolean);if(!F.length)return!0;const B=String(h||"").toLowerCase();return F.every(function(I){return B.indexOf(I)!==-1})}function g(){return{visible:!1,query:"",activeIndex:0}}function e(i,h){return h===void 0&&(h=!i.visible),i.visible=h,h&&(i.query="",i.activeIndex=0),i.visible}function v(i,h,F){const B=a(i);if(!h||!h.length)return[];const I=[];return h.forEach(function(W){const J=t(B,W.name)||t(B,W.key),N=(W.subPages||[]).filter(function(z){const j=F&&F[z]||z;return t(B,j)||t(B,z)});J&&I.push({type:"menu",menuKey:W.key,subPage:W.subPages&&W.subPages[0]||"",label:W.name,subLabel:"页面",icon:W.icon||"file-text"}),N.forEach(function(z){I.push({type:"menu",menuKey:W.key,subPage:z,label:F&&F[z]||z,subLabel:W.name,icon:W.icon||"file-text"})})}),I.slice(0,8)}function m(i,h){const F=a(i);return!h||!h.length?[]:h.filter(function(B){return!!(!F||t(F,B.label)||t(F,B.key)||B.keywords&&t(F,B.keywords))}).slice(0,8)}function R(i,h){const F=a(i);return!F||!h||!h.length?[]:h.filter(function(B){return t(F,B.code)||t(F,B.name)}).slice(0,8).map(function(B){return{type:"stock",code:B.code,name:B.name,label:B.name,subLabel:B.code,icon:"trending-up"}})}function r(i,h,F){const B=[],I=[];return F&&F.length&&(B.push({key:"stock",label:"股票",items:F}),I.push.apply(I,F)),i&&i.length&&(B.push({key:"menu",label:"菜单",items:i}),I.push.apply(I,i)),h&&h.length&&(B.push({key:"command",label:"指令",items:h}),I.push.apply(I,h)),{groups:B,flat:I}}function l(i,h,F){if(h<=0)return 0;const B=((i||0)+F)%h;return B<0?h-1:B}function f(i,h,F,B){const I=v(i,h,F).map(function(J){return{type:"menu",menuKey:J.menuKey,subPage:J.subPage,label:J.label,subLabel:J.subLabel,icon:J.icon,iconName:J.icon,value:J.icon+" "+J.label+" · "+J.subLabel}}),W=m(i,B||[]).map(function(J){return{type:"command",key:J.key,label:J.label,icon:J.icon,iconName:J.icon,subLabel:"指令",value:J.icon+" "+J.label}});return I.concat(W)}function o(i){return i?i.type==="menu"?{action:"menu",menuKey:i.menuKey,subPage:i.subPage}:i.type==="command"?{action:"command",key:i.key}:i.type==="sector"?{action:"sector",name:i.name}:i.type==="strategy"?{action:"strategy",id:i.id,name:i.name}:i.type==="stock"||i.code&&i.name?{action:"stock",code:i.code,name:i.name}:null:null}const S=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"onboarding",label:"新手引导（重新查看）",icon:"sparkles",keywords:"guide tour onboarding 引导 新手 帮助"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"},{key:"open-watchlist",label:"打开我的自选",icon:"star",keywords:"watchlist 自选 收藏"},{key:"open-focus",label:"打开重点跟踪",icon:"target",keywords:"focus 重点 跟踪 盯盘"},{key:"open-portfolio",label:"打开模拟组合",icon:"wallet",keywords:"portfolio 组合 持仓 净值"},{key:"open-backtest",label:"打开回测工作台",icon:"line-chart",keywords:"backtest 回测 净值 收益"},{key:"open-market-review",label:"打开每日复盘",icon:"book-open",keywords:"review 复盘 市场 收盘"},{key:"open-shortterm-sectors",label:"打开板块资金",icon:"pie-chart",keywords:"sector 板块 资金 行业"},{key:"open-shortterm-intraday",label:"打开盘中核验",icon:"clock",keywords:"intraday 盘中 核验 验证"},{key:"open-status",label:"打开系统状态",icon:"activity",keywords:"ops status 状态 运行 健康"},{key:"open-health",label:"打开数据源健康",icon:"database",keywords:"health 数据源 健康 源状态"},{key:"open-schedule",label:"打开调度任务",icon:"clock",keywords:"schedule 调度 任务 定时"},{key:"open-guard",label:"打开AI事实护栏",icon:"shield",keywords:"guard 护栏 事实 校验"},{key:"open-usage",label:"打开用量统计",icon:"bar-chart-3",keywords:"usage 用量 统计 调用量"},{key:"open-datadict",label:"打开数据字典",icon:"book-open",keywords:"datadict 数据字典 字段"},{key:"open-notification",label:"打开通知中心",icon:"bell",keywords:"notification 通知 消息"},{key:"open-users",label:"打开用户与权限",icon:"users",keywords:"users 用户 权限 rbac 角色"},{key:"open-autoeval",label:"打开AI服务配置",icon:"bot",keywords:"autoeval 自动评估 AI 服务 模型"},{key:"open-feature",label:"打开基础配置",icon:"settings",keywords:"feature 基础 配置 功能"},{key:"open-config",label:"打开配置保存",icon:"save",keywords:"config 配置 保存 备份"},{key:"open-glossary",label:"打开术语表",icon:"help-circle",keywords:"glossary 术语 词条 解释"},{key:"theme-gold",label:"金色主题",icon:"palette",keywords:"theme gold 金色 主题 颜色"},{key:"theme-blue",label:"蓝色主题",icon:"palette",keywords:"theme blue 蓝色 主题"},{key:"theme-red",label:"红色主题",icon:"palette",keywords:"theme red 红色 主题"},{key:"theme-green",label:"绿色主题",icon:"palette",keywords:"theme green 绿色 主题"},{key:"theme-purple",label:"紫色主题",icon:"palette",keywords:"theme purple 紫色 主题"},{key:"theme-pink",label:"粉色主题",icon:"palette",keywords:"theme pink 粉色 主题"},{key:"theme-dark",label:"暗色主题",icon:"moon",keywords:"theme dark 暗色 深色 夜间"},{key:"theme-light",label:"亮色主题",icon:"sun",keywords:"theme light 亮色 浅色 日间"}];var w={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function E(i){if(!i||typeof i!="string")return null;var h=i.split("+").map(function(I){return I.trim()}).filter(Boolean);if(!h.length)return null;var F=h.pop().toLowerCase();if(!F)return null;var B={ctrl:!1,alt:!1,shift:!1,meta:!1};return h.forEach(function(I){var W=I.toLowerCase();w.ctrl.indexOf(W)!==-1?B.ctrl=!0:w.alt.indexOf(W)!==-1?B.alt=!0:w.shift.indexOf(W)!==-1?B.shift=!0:w.meta.indexOf(W)!==-1&&(B.meta=!0)}),{ctrl:B.ctrl,alt:B.alt,shift:B.shift,meta:B.meta,key:F}}function x(i,h){if(!i||!h)return!1;var F=String(h.key||h.code||"").toLowerCase();return i.key!==F?!1:i.ctrl===!!h.ctrlKey&&i.alt===!!h.altKey&&i.shift===!!h.shiftKey&&i.meta===!!h.metaKey}function C(i){if(!i)return"";var h=[];return i.ctrl&&h.push("Ctrl"),i.alt&&h.push("Alt"),i.shift&&h.push("Shift"),i.meta&&h.push("Meta"),h.push(i.key.toUpperCase()),h.join("+")}function O(){var i={};return{register:function(h){if(!h||!h.key)throw new Error("命令 key 必填");if(i[h.key])throw new Error("命令重复注册: "+h.key);return i[h.key]=Object.assign({},h),h.key},list:function(){return Object.keys(i).map(function(h){return i[h]})},get:function(h){return i[h]||null},remove:function(h){delete i[h]},has:function(h){return!!i[h]},count:function(){return Object.keys(i).length}}}function D(){var i={},h={};return{register:function(F,B,I){var W=E(F);if(!W)throw new Error("无效快捷键: "+F);var J=C(W);if(i[J])throw new Error("快捷键冲突: "+F);if(B!=null&&h[B]!==void 0)throw new Error("动作重复绑定: "+B);return i[J]={combo:F,action:B,description:I||"",parsed:W},h[B]=J,J},resolve:function(F){for(var B in i)if(x(i[B].parsed,F))return i[B].action;return null},list:function(){return Object.keys(i).map(function(F){return i[F]})},unregister:function(F){var B=C(E(F));i[B]&&(delete h[i[B].action],delete i[B])},count:function(){return Object.keys(i).length}}}function d(){var i=D();return i.register("Ctrl+K","toggle-palette","打开命令面板"),i.register("F5","refresh","刷新当前页"),i.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),i.register("Ctrl+J","open-ai","打开 AI 问股"),i.register("Ctrl+D","open-today","今日一屏"),i.register("Ctrl+E","batch-eval","批量 AI 评估"),i.register("Ctrl+G","add-portfolio","加入组合"),i.register("Ctrl+H","open-eval-history","打开评估历史"),i.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),i}return{normalize:a,createPaletteState:g,toggleVisible:e,searchMenus:v,searchCommands:m,filterStocksLocal:R,mergeResults:r,moveIndex:l,buildSearchSuggestions:f,dispatchSearchSelection:o,DEFAULT_COMMANDS:S,parseKeyCombo:E,matchShortcut:x,canonicalCombo:C,createCommandRegistry:O,createShortcutRegistry:D,createDefaultShortcuts:d}});(function(a){if(a&&!a.QuantCommandPanel)try{var t=typeof Ae<"u"&&Ae.exports?Ae.exports:null;t&&(a.QuantCommandPanel=t)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(a,t){var g=t();typeof Ae=="object"&&Ae.exports&&(Ae.exports=g),a.QuantOnboarding=g})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var a=[{key:"today",title:"看懂今日一屏",target:"strategies",selector:".today-hero",desc:"先看美林时钟阶段与今日一屏：宏观周期、策略共识、股票池一目了然"},{key:"calendar",title:"量化日历与策略池",target:"calendar",selector:".stock-pool-body",desc:"日/周/月/年切换视图，按全部/新入池/当前持仓/已出池筛选股票"},{key:"evaluate",title:"智能评估一只股票",target:"ai",selector:".qc-work-area",desc:"点击任意股票查看详情：多模型 AI 评估、五维体检、历史趋势"},{key:"watchlist",title:"我的自选与重点跟踪",target:"ai",selector:"",desc:"在智能评估页把心仪股票加入自选，重点跟踪持续盯盘"},{key:"config",title:"系统配置要点",target:"system",selector:".system-page-root",desc:"数据源、AI Key、通知与主题都在系统配置，按需设置"}],t=a.length,g=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],e=g.length;function v(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function m(){return g.slice()}function R(z){return z<0?0:z>=e?e-1:z}function r(z){return{stepIndex:z.stepIndex,completed:!!z.completed,dismissed:!!z.dismissed,updatedAt:z.updatedAt||0}}function l(z){return r(Object.assign({},z,{stepIndex:R((z.stepIndex||0)+1),updatedAt:Date.now()}))}function f(z){return r(Object.assign({},z,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function o(z){return r(Object.assign({},z,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function S(z){var j=Math.min(z&&z.stepIndex||0,e);return{done:j,total:e,pct:Math.round(j/e*100)}}function w(z){return!!(z&&!z.completed&&!z.dismissed)}function E(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function x(){return a.slice()}function C(){return t}function O(z){return z<0?0:z>=t?t-1:z}function D(z){return{stepIndex:z.stepIndex,completed:!!z.completed,dismissed:!!z.dismissed,updatedAt:z.updatedAt||0}}function d(z){return D(Object.assign({},z,{stepIndex:O((z.stepIndex||0)+1),updatedAt:Date.now()}))}function i(z){return D(Object.assign({},z,{stepIndex:O((z.stepIndex||0)-1),updatedAt:Date.now()}))}function h(z,j){return D(Object.assign({},z,{stepIndex:O(j),updatedAt:Date.now()}))}function F(z){return D(Object.assign({},z,{completed:!0,updatedAt:Date.now()}))}function B(z){return D(Object.assign({},z,{dismissed:!0,updatedAt:Date.now()}))}function I(z){return!!(z&&z.completed)}function W(z){var j=Math.min(z&&z.stepIndex||0,t);return{done:j,total:t,pct:Math.round(j/t*100)}}function J(z){var j=z||E();return JSON.stringify({stepIndex:j.stepIndex,completed:!!j.completed,dismissed:!!j.dismissed,updatedAt:j.updatedAt||0})}function N(z){var j=E();if(!z||typeof z!="string")return j;try{var $=JSON.parse(z);if(!$||typeof $!="object")return j;var Z=parseInt($.stepIndex,10);return isNaN(Z)?j:{stepIndex:O(Z),completed:!!$.completed,dismissed:!!$.dismissed,updatedAt:$.updatedAt||0}}catch{return j}}return{ONBOARDING_STEPS:a,steps:x,stepCount:C,createOnboardingState:E,next:d,prev:i,jumpTo:h,complete:F,dismiss:B,isComplete:I,progress:W,persistState:J,parseState:N,SHORTTERM_TOUR_STEPS:g,shorttermTourSteps:m,createShorttermTourState:v,shorttermTourNext:l,shorttermTourComplete:f,shorttermTourDismiss:o,shorttermTourProgress:S,shorttermTourShouldShow:w}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:t,onMounted:g}=Vue,e=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const v=a(!1),m=a(e.createOnboardingState()),R=t(function(){return e.steps()[m.value.stepIndex]}),r=t(function(){return e.progress(m.value)}),l=t(function(){return m.value.stepIndex>=e.stepCount()-1}),f=t(function(){return"onboarding.step."+R.value.key});function o(){const d=e.persistState(m.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:d}})}).then(function(i){return i.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",d)}catch{}})}function S(d){d&&window.__quantGoPage?window.__quantGoPage(d,""):d&&window.__quantState&&window.__quantState.currentPage&&(window.__quantState.currentPage.value=d,window.__quantState.currentSubPage&&(window.__quantState.currentSubPage.value=""))}function w(){m.value=e.next(m.value);const d=e.steps()[m.value.stepIndex];d&&d.target&&S(d.target)}function E(){m.value=e.prev(m.value);const d=e.steps()[m.value.stepIndex];d&&d.target&&S(d.target)}function x(){m.value=e.complete(m.value),o(),v.value=!1}function C(){m.value=e.dismiss(m.value),o(),v.value=!1}function O(){m.value=e.createOnboardingState(),o(),v.value=!0}function D(){fetch("/api/user_config/preferences").then(function(d){return d.json()}).then(function(d){const i=d&&d.preferences&&d.preferences.onboarding_progress;return i&&(m.value=e.parseState(i)),i}).catch(function(){return null}).then(function(d){if(!d)try{const i=localStorage.getItem("qc_onboarding_progress");i&&(m.value=e.parseState(i))}catch{}!e.isComplete(m.value)&&!m.value.dismissed&&(v.value=!0)}),window.addEventListener("qc:onboarding-replay",O)}return g(D),{visible:v,st:m,step:R,prog:r,isLast:l,stepKey:f,next:w,prev:E,finish:x,skip:C,replay:O}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"inbox"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
      <div class="qc-empty-state" role="status">
        <div class="qc-empty-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-empty-title">{{ title || t('common.emptyTitle') }}</div>
        <div class="qc-empty-desc">{{ desc || t('common.emptyDesc') }}</div>
        <el-button v-if="actionText" size="small" type="primary" @click="$emit('action')">{{ actionText }}</el-button>
      </div>
    `,setup(){function a(t){try{const g=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(g)return g(t)||""}catch{}return t}return{t:a}}},window.__quantComponents.ErrorState={name:"qc-error",props:{icon:{type:String,default:"alert-triangle"},title:{type:String,default:""},desc:{type:String,default:""},retrying:{type:Boolean,default:!1}},emits:["retry"],template:`
      <div class="qc-error-state" role="alert">
        <div class="qc-error-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-error-title">{{ title || t('common.errorTitle') }}</div>
        <div class="qc-error-desc">{{ desc || t('common.errorDesc') }}</div>
        <el-button v-if="!retrying" size="small" @click="$emit('retry')">{{ t('common.retry') }}</el-button>
        <el-button v-else size="small" :loading="retrying">{{ t('common.retry') }}</el-button>
      </div>
    `,setup(){function a(t){try{const g=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(g)return g(t)||""}catch{}return t}return{t:a}}})})();(function(){const{ref:a,computed:t,watch:g,nextTick:e,inject:v,onMounted:m}=Vue,R=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
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
    `,setup(){const r=v("qcState");if(!r)return{};const l=a(""),f=t({get:()=>r.commandPaletteVisible.value,set:M=>{r.commandPaletteVisible.value=M}}),o=a(0),S=a([]),w=a(null),E=t(()=>{const M=(R.DEFAULT_COMMANDS||[]).map(function(y){return Object.assign({},y)});return Object.keys(r.themes.value||{}).forEach(function(y){const n=r.themes.value[y];M.push({key:"theme:"+y,label:"切换主题 · "+(n.name||y),icon:"palette",keywords:"theme 主题"})}),M});function x(M){return typeof M=="string"&&/^[a-z][a-z0-9-]*$/.test(M)}const C=t(()=>r.menus.value||[]);function O(){const M=window.__quantModules&&window.__quantModules.pinyin;if(!M)return[];const s=[];return(r.watchlist&&r.watchlist.value||[]).forEach(function(y){s.push({code:y.code,name:y.name})}),(r.aiHistory&&r.aiHistory.value||[]).forEach(function(y){y&&y.stock_code&&s.push({code:y.stock_code,name:y.stock_name||y.stock_code})}),s.push.apply(s,M.getExtraStocks()),M.buildStockIndex(s)}function D(M){const s=window.__quantModules&&window.__quantModules.pinyin;return s?s.searchStocksByQuery(M,O()).map(function(y){return{type:"stock",code:y.code,name:y.name,label:y.name,subLabel:y.code,icon:"trending-up"}}):[]}function d(){const M=[],s=window.__quantModules&&window.__quantModules.recent;s&&s.getRecentViewed().slice(0,5).forEach(function(n){M.push({type:"stock",code:n.code,name:n.name||n.code,label:n.name||n.code,subLabel:"最近查看 · "+n.code,icon:"trending-up"})});const y=(r.watchlist&&r.watchlist.value||[]).slice(0,8).map(function(n){return{type:"stock",code:n.code,name:n.name||n.code,label:n.name||n.code,subLabel:"我的自选 · "+n.code,icon:"trending-up"}});return M.concat(y)}const i=t(()=>{const M=l.value;if(!M)return R.mergeResults([],[],d());const s=R.searchMenus(M,C.value,r.subPageNames),y=R.searchCommands(M,E.value),n=S.value;return R.mergeResults(s,y,n)}),h=t(()=>i.value);function F(M){return h.value.flat[o.value]===M}function B(M){o.value=h.value.flat.indexOf(M)}function I(M){return(M.type||"")+":"+(M.code||M.menuKey||M.key||M.label)}let W=null;function J(){const M=l.value.trim();if(M.length<1){S.value=[];return}W&&clearTimeout(W),W=setTimeout(function(){const s=D(M);S.value=s,o.value=0,r.searchStocks(M,function(y){if(l.value.trim()!==M)return;const n=(y||[]).filter(function(T){return T&&T.code&&T.name}).map(function(T){return{type:"stock",code:T.code,name:T.name,label:T.name,subLabel:T.code,icon:"trending-up"}}),p={},X=[];s.forEach(function(T){p[T.code]||(p[T.code]=!0,X.push(T))}),n.forEach(function(T){p[T.code]||(p[T.code]=!0,X.push(T))}),S.value=X,o.value=0})},200)}function N(){o.value=R.moveIndex(o.value,h.value.flat.length,1)}function z(){o.value=R.moveIndex(o.value,h.value.flat.length,-1)}function j(){const M=h.value.flat[o.value];M&&$(M)}function $(M){r.commandPaletteVisible.value=!1,M.type==="menu"?r.navigateTo(M.menuKey,M.subPage):M.type==="stock"?r.showStockDetail(M.code,M.name):M.type==="command"&&Z(M.key)}function Z(M){if(M==="refresh"){const s=r.currentPage.value;s==="strategies"?r.loadDashboardData().catch(function(){}):s==="calendar"?r.refreshCalendarData().catch(function(){}):s==="ai"&&r.loadAiHistory().catch(function(){})}else M==="export"?r.exportCSV():M==="batch"?r.showBatchEvaluate.value=!0:M==="ai"?r.openAiFab():M==="sidebar"?r.toggleSidebar():M==="today"?r.navigateTo("strategies","overview"):M==="onboarding"?window.dispatchEvent(new CustomEvent("qc:onboarding-replay")):M==="add-portfolio"?(r.currentPage.value="ai",r.currentSubPage.value="portfolio"):M==="open-system"?r.navigateTo("system","status"):M==="open-shortterm"?r.navigateTo("shortterm","overview"):M==="open-research"?r.navigateTo("research","overview"):M==="open-calendar"?r.navigateTo("calendar",""):M==="refresh-data-source"?r.navigateTo("system","datasource"):M==="open-watchlist"?r.navigateTo("ai","watchlist"):M==="open-focus"?r.navigateTo("ai","focus"):M==="open-portfolio"?r.navigateTo("ai","portfolio"):M==="open-backtest"?r.navigateTo("research","backtest"):M==="open-market-review"?r.navigateTo("shortterm","market-review"):M==="open-shortterm-sectors"?r.navigateTo("shortterm","sector"):M==="open-shortterm-intraday"?r.navigateTo("shortterm","intraday"):M==="open-status"?r.navigateTo("ops","status"):M==="open-health"?r.navigateTo("ops","health"):M==="open-schedule"?r.navigateTo("ops","schedule"):M==="open-guard"?r.navigateTo("ops","guard"):M==="open-usage"?r.navigateTo("ops","usage"):M==="open-datadict"?r.navigateTo("ops","datadict"):M==="open-notification"?r.navigateTo("system","notification"):M==="open-users"?r.navigateTo("system","user"):M==="open-autoeval"?r.navigateTo("system","autoeval"):M==="open-feature"?r.navigateTo("system","feature"):M==="open-config"?r.navigateTo("system","config"):M==="open-glossary"?r.navigateTo("system","glossary"):M==="theme-dark"?r.changeTheme("dark-pro"):M==="theme-light"?r.changeTheme("gold"):M.indexOf("theme:")===0&&r.changeTheme(M.slice(6))}g(f,function(M){M&&(l.value="",S.value=[],o.value=0,e(function(){w.value&&w.value.focus&&w.value.focus()}))}),g(l,J);function ne(M){M==="toggle-palette"?r.commandPaletteVisible.value=!r.commandPaletteVisible.value:M==="toggle-sidebar"?r.toggleSidebar():M==="open-ai"?r.openAiFab():M==="refresh"?Z("refresh"):M==="open-today"?Z("today"):M==="batch-eval"?Z("batch"):M==="add-portfolio"&&Z("add-portfolio")}function ee(M){if(!R.createDefaultShortcuts||!R.createShortcutRegistry)return;const y=R.createDefaultShortcuts().resolve({key:M.key,ctrlKey:M.ctrlKey,altKey:M.altKey,shiftKey:M.shiftKey,metaKey:M.metaKey});y&&(M.preventDefault(),ne(y))}return m(function(){document.addEventListener("keydown",ee)}),{visible:f,query:l,results:h,inputEl:w,sanitizeHtml:r.sanitizeHtml,isIconName:x,onDown:N,onUp:z,onEnter:j,execute:$,isActive:F,setActive:B,itemKey:I,onGlobalKeydown:ee}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
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
    `,setup(){const t=a("qcState");if(!t)return{};const g=window.QuantFormMemory;function e(){const r=t.currentUser;return r&&r.value&&r.value.username||"guest"}Vue.watch(()=>t.showBatchEvaluate&&t.showBatchEvaluate.value||!1,r=>{if(r&&g){const l=g.loadForm("batch-evaluate",e(),1);l&&l.batchStocks&&!(t.batchStocks&&t.batchStocks.value)&&(t.batchStocks.value=l.batchStocks)}});function v(){return g&&g.saveForm("batch-evaluate",{batchStocks:t.batchStocks&&t.batchStocks.value||""},e(),1),t.doBatchEvaluate()}const m=Vue.ref(0);let R=null;return t.batchRunning&&t.batchRunning.__v_isRef&&Vue.watch(t.batchRunning,r=>{r?(m.value=0,R=setInterval(()=>{m.value++},1e3)):R&&(clearInterval(R),R=null)}),{...t,batchElapsed:m,onBatchEvaluate:v}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
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
    `,setup(){const t=a("qcState");return t?{...t}:{}}}})();(function(){const{inject:a,computed:t,ref:g,watch:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StockDetailDialog={name:"qc-stock-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
    `,setup(){const v=a("qcState");if(!v)return{};const m={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},R=t(()=>m[v.aiEvalStage.value]||""),r=t(()=>{const j=v.aiResult&&v.aiResult.value&&v.aiResult.value.result&&v.aiResult.value.result.level;return j?j==="强烈推荐"||j==="推荐"?"var(--success-text)":j==="谨慎推荐"?"var(--warning-text)":j==="中性"||j==="观望"?"var(--text-secondary)":j==="评估失败"||j==="无可用模型"?"var(--danger-text)":"var(--color-primary)":"var(--color-primary)"});function l(j){const $=document.createElement("textarea");$.value=j,$.style.position="fixed",$.style.opacity="0",document.body.appendChild($),$.select(),document.execCommand("copy"),document.body.removeChild($)}async function f(){const j=v.aiResult&&v.aiResult.value;if(!j||!j.result)return;const $=j.result.dimensions||{},Z=Object.entries($).map(([ee,M])=>`${ee} ${Math.round(M)}分`).join(`
`),ne=`【AI 智能评估】${j.result.level||""} ${j.result.total_score!=null?j.result.total_score:"—"}分
模型：${j.model_used||j.result.provider||"—"}

${j.result.detailed_report||""}

九维度评分：
${Z||"无"}`;try{await navigator.clipboard.writeText(ne),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{l(ne),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const o=g(!1),S=g(!1),w=g(null),E=g([]),x={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function C(j){return x[j]||"factor-sem-none"}async function O(){const j=v.stockDetail.value&&v.stockDetail.value.stock;if(j){o.value=!0,S.value=!1,E.value=[],w.value=null;try{const $=v.selectedDate.value?`?date=${v.selectedDate.value}`:"",Z=await fetch(`/api/calendar/stock/${j}/factors${$}`).then(s=>s.json()),ne=Z&&Array.isArray(Z.factors)?Z.factors:[],ee=[],M={};ne.forEach(s=>{M[s.category]||(M[s.category]={category:s.category,items:[]},ee.push(M[s.category])),M[s.category].items.push(s)}),E.value=ee,w.value=Z&&Z.summary||null}catch{S.value=!0}finally{o.value=!1}}}e(v.stockDetailTab,j=>{j==="factor"&&v.stockDetail.value&&v.stockDetailVisible.value&&(O(),d())});const D=g(null);async function d(){try{const j=await fetch("/api/market/factor-ic").then($=>$.json());D.value=j&&j.success&&j.data?j.data:{}}catch{D.value={}}}function i(j){if(!j||!j.n5)return"—";const $=j.n5.icir!=null?"ICIR "+j.n5.icir:"ICIR —";return j.n5.grade+" ("+$+")"}const h=g(!1),F=g(!1),B=g([]),I=g([]);function W(j){if(j==null)return"—";const $=Number(j);return Number.isNaN($)?"—":Math.abs($)>=1e8?($/1e8).toFixed(2)+"亿":Math.abs($)>=1e4?($/1e4).toFixed(1)+"万":String($)}async function J(){const j=v.stockDetail&&v.stockDetail.value&&v.stockDetail.value.stock;if(j){h.value=!0,F.value=!1;try{const $=await fetch("/api/market/performance/"+encodeURIComponent(j)).then(Z=>Z.json());$&&$.success?(B.value=$.forecast||[],I.value=$.express||[]):F.value=!0}catch{F.value=!0}finally{h.value=!1}}}e(v.stockDetailTab,j=>{j==="performance"&&J()});const N=g(null);async function z(){const j=v.stockDetail&&v.stockDetail.value&&v.stockDetail.value.stock;if(!j){N.value=null;return}try{const $=await fetch("/api/focus/stock/"+encodeURIComponent(j)+"/pool").then(Z=>Z.json());N.value=$&&$.success&&$.data?$.data:null}catch{N.value=null}}return e(()=>v.stockDetail&&v.stockDetail.value&&v.stockDetail.value.stock,j=>{j&&v.stockDetailVisible.value?z():N.value=null}),e(()=>v.stockDetailVisible.value,j=>{j?z():N.value=null}),{...v,aiStageText:R,levelRingColor:r,copyAiReport:f,factorLoading:o,factorError:S,factorSummary:w,factorGroups:E,factorSemClass:C,loadFactorPanel:O,factorIc:D,loadFactorIc:d,factorIcGrade:i,perfLoading:h,perfError:F,perfForecast:B,perfExpress:I,fmtY:W,loadPerformance:J,poolInfo:N,loadPoolInfo:z}}}})();(function(){const{computed:a,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
    `,setup(g){const e=t("qcState");if(!e)return{};const v=a(()=>g.type==="history"?e.selectedHistoryIds.value.includes(g.item.id):e.selectedChatIds.value.includes(g.item.id)),m=a(()=>{const x=e.watchlistCodes.value.has(g.item.stock_code);return{icon:"star",isWatched:x,label:x?"取消收藏":"加入收藏"}}),R=a(()=>g.type==="history"?"bot":"message-circle"),r=a(()=>{var x;return g.type==="history"?((x=g.item.result)==null?void 0:x.provider)||"":g.item.first_msg||""}),l=a(()=>{var x,C;return`${((C=(x=g.item.result)==null?void 0:x.dimensions)==null?void 0:C.length)||9}维度分析`}),f=a(()=>{var C,O;const x=g.type==="history"?g.item.evaluate_time:g.item.created_at||"";return x?g.timeFormat==="datetime"?g.type==="history"?`${x.split("T")[0]} ${(x.split("T")[1]||"").split(".")[0]}`:`${x.split("T")[0]} ${((C=x.split("T")[1])==null?void 0:C.substring(0,5))||""}`:g.type==="history"?(x.split("T")[1]||"").split(".")[0]||x:((O=x.split("T")[1])==null?void 0:O.substring(0,5))||"":""});function o(){g.type==="history"?e.toggleSelectHistory(g.item.id):e.toggleSelectChat(g.item.id)}function S(){g.type==="history"?e.viewAiResult(g.item):e.viewChatSession(g.item)}async function w(){try{await ElementPlus.ElMessageBox.confirm(g.type==="history"?"确定删除这条评估记录吗？此操作不可恢复。":"确定删除这段对话吗？此操作不可恢复。","删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}g.type==="history"?e.deleteSingleHistory(g.item.id):e.deleteChatSession(g.item.id)}function E(x,C){e.toggleWatchlist(x,C)}return{isSelected:v,watchState:m,providerIcon:R,providerText:r,dimsText:l,timeText:f,toggleSelect:o,view:S,remove:w,toggleWatchlist:E,keyClick:e.keyClick,fmtNum:e.fmtNum,evaluatedCodes:e.evaluatedCodes,klineLoadedCodes:e.klineLoadedCodes,levelColor:e.levelColor,levelBg:e.levelBg}}}})();(function(){const{ref:a,computed:t,onMounted:g,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{};const v=["买入","持有","观望","减仓","卖出"],m={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},R={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},r=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],l={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},f=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function o(w){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(w).then(C=>C.json?C.json():C)}function S(){const w=new Date,E=x=>x<10?"0"+x:""+x;return w.getFullYear()+"-"+E(w.getMonth()+1)+"-"+E(w.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",template:`
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
      </div>`,setup(){const w=e("qcState"),E=a(S()),x=a("after_close"),C=a({rows:[],actions:{},total:0,groups:{}}),O=a({sessions:{},total:0}),D=a(null),d=a(!1),i=a(""),h=a(!1),F=a([]),B=a(""),I=a(null),W={},J=a({});let N=0;const z=a(null),j=t(function(){const q=C.value&&C.value.groups||{};return Object.keys(q).length?q:C.value&&C.value.rows&&C.value.rows.length?{全部:C.value.rows}:{}}),$=t(function(){const q=z.value;return!q||!q.date||q.date!==E.value?"":"已加载最近一次评估: "+q.date+" · "+(l[q.session]||q.session)}),Z=t(function(){const q=C.value&&C.value.base_date;return q?q===E.value?"评分范围: "+q+" 收盘池 + 自选":"评分范围: "+q+" 收盘池(前一交易日算好) + 自选":""});function ne(q){if(q==null)return"—";const K=Number(q);return K===Math.floor(K)?String(K):K.toFixed(1)}function ee(q){const K=C.value.total||0,ie=(C.value.actions||{})[q]||0;if(!K)return"0%";const me=ie/K*100;return me>0&&me<4?"4%":me.toFixed(1)+"%"}function M(q){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[q]||"info"}function s(q){const K=D.value&&D.value.overall&&D.value.overall[q]||null;return!K||K.total===0||K.rate===null||K.rate===void 0?"info":K.rate>=60?"success":K.rate>=40?"warning":"danger"}function y(q){const K=D.value&&D.value.overall&&D.value.overall[q]||null;return!K||K.total===0||K.rate===null||K.rate===void 0?"样本不足":K.rate.toFixed(1)+"% ("+K.total+" 样本)"}function n(){return l[x.value]||x.value}function p(q){const K=F.value.indexOf(q);K>=0?F.value.splice(K,1):F.value.push(q)}function X(q){if(!q||!q.raw_json)return{};if(W[q.stock_code+q.session+q.trade_date])return W[q.stock_code+q.session+q.trade_date];let K={};try{K=JSON.parse(q.raw_json)||{}}catch{K={}}return W[q.stock_code+q.session+q.trade_date]=K,K}async function T(){try{const q=await o("/api/focus/latest"),K=q&&q.success&&q.data;K&&K.date&&(z.value=K,E.value=K.date,K.session&&(x.value=K.session))}catch(q){console.warn("[focus] 最近一次评估解析失败:",q)}}async function b(){h.value=!0;try{const q=await o("/api/focus/results?date="+E.value+"&session="+x.value);C.value=q&&q.success&&q.data||{rows:[],actions:{},total:0,groups:{}},u((C.value.rows||[]).map(function(K){return K.stock_code}))}catch(q){console.warn("[focus] 结果加载失败:",q),C.value={rows:[],actions:{},total:0,groups:{}}}finally{h.value=!1}}async function u(q){const K=J.value||{},ie=(q||[]).filter(function(U){return U&&!K[U]});if(!ie.length)return;const me=++N,Ce=ie.map(function(U){return o("/api/focus/stock/"+encodeURIComponent(U)+"/pool?date="+E.value).then(function(de){de&&de.success&&de.data?K[U]=de.data:K[U]={stock_code:U,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){K[U]={stock_code:U,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(Ce)}catch{}me===N&&(J.value=Object.assign({},K))}function k(q){const K=w&&w.showStockDetail;if(typeof K=="function"){K(q);return}const me=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;me&&me.info("请从其他页面打开股票详情: "+q)}async function c(){try{const q=await o("/api/focus/history?date="+E.value);O.value=q&&q.success&&q.data||{sessions:{},total:0}}catch(q){console.warn("[focus] 历史加载失败:",q),O.value={sessions:{},total:0}}}async function A(){d.value=!0;try{const q=await o("/api/ai/track");q&&q.success&&q.data?(D.value=q.data,i.value=(q.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):D.value=null}catch(q){console.warn("[focus] 效果块加载失败:",q),D.value=null}finally{d.value=!1}}async function oe(){const q=(B.value||"").trim();if(q){I.value=null;try{const K=await o("/api/focus/stock/"+encodeURIComponent(q));I.value=K&&K.success&&K.data&&K.data.rows||[]}catch(K){console.warn("[focus] 单股历史加载失败:",K),I.value=[]}}}async function Y(){await b(),await c(),await A()}return g(async function(){await T(),await Y()}),{curDate:E,session:x,results:C,history:O,track:D,trackLoading:d,trackNote:i,detailSplitEnabled:w.detailSplitEnabled,stockDetail:w.stockDetail,loading:h,expanded:F,stockCode:B,stockHistory:I,SESSIONS:r,ACTION_ORDER:v,TRACK_WINDOWS:f,ACTION_DOT:m,TIER_DOT:R,SESSION_LABELS:l,displayGroups:j,latestNote:$,baseNote:Z,sessionLabel:n,fmtScore:ne,tagType:M,rateTagType:s,fmtRate:y,toggle:p,detailOf:X,loadResults:b,loadHistory:c,loadTrack:A,loadStockHistory:oe,loadAll:Y,poolStatus:J,openStockDetail:k,actionPct:ee}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:t,nextTick:g}=Vue,{currentView:e,statusFilter:v,dashboardData:m,loadHealthMetrics:R,getLoadDashboardData:r,getLastRefreshTime:l,getFetchPoolSignals:f}=a,o=t(!1),S=t(""),w=new Map,E=t([]),x=t(""),C=t(""),O=t([]),D=t(""),d=window.__quantModules.core||{},i=typeof d.createTtlCache=="function"?d.createTtlCache(15e3):null;let h=0;function F(){const $=Date.now();$-h<5e3||(h=$,ElementPlus.ElMessage.success("有新数据，已更新"))}function B($,Z,ne,ee){!i||!Z||typeof d.silentRefresh!="function"||d.silentRefresh({cache:i,key:Z,fetchFn:async()=>{const M=await fetch($);if(!M.ok)throw new Error("HTTP "+M.status);const s=await M.json();return ne?ne(s):s},ttl:i.defaultTtl,apply:ee,onChanged:F,onError:()=>{}})}const I=new Set;async function W(){var $;try{const ne=await(await fetch("/api/dates")).json();E.value=(($=ne.data)==null?void 0:$.dates)||ne.dates||[],E.value.length>0&&(x.value=E.value[E.value.length-1]),C.value=new Date().toLocaleTimeString()}catch(Z){console.error(Z)}}async function J(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),C.value="刷新中...",w.clear(),await W(),await z(),C.value=new Date().toLocaleTimeString()}catch($){console.error("数据刷新失败",$)}}function N(){if(!x.value)return;const Z="/api/view/"+(e.value||"day")+"/"+x.value+"?status="+(v.value||"all")+"&format=csv";window.open(Z,"_blank")}async function z(){if(!x.value)return;const $=`${e.value}_${x.value}`;if(I.has($))return;I.add($);const Z=`/api/view/${e.value}/${x.value}?status=all`,ne=i&&typeof d.makeCacheKey=="function"?d.makeCacheKey("GET",`/api/view/${e.value}/${x.value}`,{status:"all"}):null,ee=(y,n)=>{O.value=y,D.value=n||"",w.set($,{stocks:y,note:n||""})},M=y=>{ee(y&&y.stocks||[],y&&y.note||"")};if(w.has($)){M(w.get($)),B(Z,ne,y=>y,M),I.delete($);return}const s=ne&&i?i.get(ne):void 0;if(s!==void 0){M(s),B(Z,ne,y=>y,M),I.delete($);return}o.value=!0,S.value={day:"日",week:"周",month:"月",year:"年"}[e.value]||e.value;try{const n=await(await fetch(Z)).json(),p=n.stocks||[];ee(p,n.note||""),i&&ne&&i.set(ne,{stocks:p,note:n.note||""})}catch{try{const p=await(await fetch(`/api/calendar/${x.value}/consensus`)).json();O.value=(p.consensus||[]).map(X=>({...X,code:X.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{o.value=!1}f(),I.delete($)}async function j(){const $=i&&typeof d.makeCacheKey=="function"?d.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(i){const Z=i.get($);if(Z!==void 0){m.value=Z,R().catch(()=>{}),B("/api/dashboard",$,ne=>ne.data||ne,ne=>{m.value=ne,l().value=Date.now()});return}}await r()(),R().catch(()=>{}),i&&i.set($,m.value)}return{loading:o,loadingView:S,viewCache:w,dates:E,selectedDate:x,lastLoadTime:C,consensus:O,viewNote:D,loadDates:W,refreshCalendarData:J,exportCSV:N,loadConsensusData:z,loadDashboardCached:j}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:t}=Vue,{currentKlinePeriod:g,loadIndexKline:e,rememberDialogTrigger:v,menus:m,currentPage:R,currentSubPage:r,stockDetail:l,selectedDate:f}=a,o=ref({indices:[],market_sentiment:null});let S=null;const w=ref(!1),E=ref(null),x=ref(null),C=ref(!1);function O(){window.__quantModules.charts.disposeKline("stockKlineChart")}const D=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{D.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const d=ref(!1),i=ref(null),h=ref(!1),F=ref(0),B=ref(0);async function I(){try{const n=await(await fetch("/api/market/overview")).json();o.value=n,W(n)}catch(y){console.error("获取市场行情失败:",y)}}function W(y){S&&clearInterval(S),y&&y.in_trading_hours&&(S=setInterval(I,6e5))}function J(y){v(),E.value=y,x.value=null,g.value="daily",N(y.code),window.__quantModules.charts.disposeKline("indexKlineChart"),w.value=!0,setTimeout(async()=>{await e("daily")},500)}async function N(y){try{const p=await(await fetch("/api/ai/index-eval/"+y)).json();p.success&&p.data&&(x.value=p.data)}catch(n){console.warn("[getIndexAiScore] cache check failed:",n)}}async function z(){if(E.value){C.value=!0;try{const n=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:E.value.code,index_name:E.value.name,current_price:E.value.close,pct_chg:E.value.pct_chg})})).json();n.success?x.value=n.data:ElementPlus.ElMessage.error(n.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{C.value=!1}}}function j(y){window.__quantModules.charts.zoomKline("stockKlineChart",y)}function $(){h.value=!0,setTimeout(()=>{h.value=!1},600)}function Z(y,n){if(y===n){$();return}const p=800,X=performance.now(),T=n-y;d.value=!0,i.value={value:T,dir:T>0?"up":"down"},h.value=!0,setTimeout(()=>{h.value=!1},600),setTimeout(()=>{i.value=null},2300);function b(u){const k=u-X,c=Math.min(k/p,1),A=1-Math.pow(1-c,3),oe=Math.round(y+T*A);l.value&&l.value.score_data&&(l.value.score_data.score=oe),c<1?requestAnimationFrame(b):(l.value&&l.value.score_data&&(l.value.score_data.score=n),d.value=!1)}requestAnimationFrame(b)}function ne(){if(!l.value||!l.value.score_data)return;const y=l.value.score_data.score;if(y==null)return;const n=600,p=performance.now();h.value=!0,setTimeout(()=>{h.value=!1},600);function X(T){const b=Math.min((T-p)/n,1),u=1-Math.pow(1-b,3),k=Math.round(y*u);l.value&&l.value.score_data&&(l.value.score_data.score=k),b<1?requestAnimationFrame(X):l.value&&l.value.score_data&&(l.value.score_data.score=y)}requestAnimationFrame(X)}async function ee(){var p;if(!l.value||!l.value.stock)return;const y=l.value.stock,n=(p=l.value.score_data)==null?void 0:p.score;try{const X=new Date().toISOString().split("T")[0],T=f.value||X,u=await(await fetch(`/api/calendar/stock/${encodeURIComponent(y)}/score?date=${T}`)).json();if(u.success&&u.score_data){const k=u.score_data.score;l.value&&(l.value.score_data=u.score_data),n!=null&&k!==n?Z(n,k):$()}else $()}catch(X){console.warn("[refreshStockScore] failed:",X)}}function M(y){D.value&&(F.value=y.touches[0].clientX,B.value=y.touches[0].clientY)}function s(y){if(!D.value)return;const n=F.value-y.changedTouches[0].clientX,p=B.value-y.changedTouches[0].clientY;if(Math.abs(n)>Math.abs(p)&&Math.abs(n)>80){const X=m.value.map(function(b){return b.key}),T=X.indexOf(R.value);if(n>0&&T<X.length-1){const b=X[T+1],u=window.__quantGoPage;u?u(b,""):(R.value=b,r.value="")}else if(n<0&&T>0){const b=X[T-1],u=window.__quantGoPage;u?u(b,""):(R.value=b,r.value="")}}}return{marketData:o,marketRefreshTimer:S,fetchMarketData:I,indexDetailVisible:w,indexDetail:E,indexAiResult:x,indexAiLoading:C,showIndexDetail:J,loadCachedIndexEval:N,doIndexAiEvaluate:z,disposeStockKline:O,isMobile:D,zoomKlineRange:j,scoreAnimating:d,scoreDelta:i,scorePulse:h,triggerScorePulse:$,animateScoreChange:Z,animateScoreEntrance:ne,refreshStockScore:ee,touchStartX:F,touchStartY:B,onTouchStart:M,onTouchEnd:s}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:t,currentPage:g,currentSubPage:e}=a,v=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),m=ref("idle"),R=ref("");async function r(){if(!v.value.webhook_url){R.value="请先输入Webhook地址";return}m.value="testing",R.value="";try{const q=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:v.value.webhook_url})})).json();q.success||q.status==="ok"?(R.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(R.value=q.message||"测试失败",ElementPlus.ElMessage.error(R.value))}catch{R.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}m.value="idle"}const l=Vue.ref(!1);async function f(){l.value=!0;try{const q=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{l.value=!1}}const o=ref(!1);function S(){t("ai","chat_history"),o.value=!0,Vue.nextTick(()=>{const Y=document.querySelector('input[placeholder*="输入问题"]');Y&&Y.focus()})}const w=ref([]),E=ref({});async function x(){try{const q=await(await fetch("/api/ai/recommend-strategies")).json();q.success&&(w.value=q.recommendations||[])}catch(Y){console.warn("[loadStrategyRecommendations] failed:",Y)}}async function C(){try{const q=await(await fetch("/api/ai/usage-stats")).json();q.success&&(E.value=q)}catch(Y){console.warn("loadAiUsage failed:",Y)}}const O=ref({}),D=ref([]),d=ref(7);async function i(){try{const q=await(await fetch("/api/system/monitor")).json();q.success&&(O.value=q)}catch(Y){console.warn("loadSysMonitor failed:",Y)}}const h=ref({});async function F(){try{const q=await(await fetch("/api/system/health-detail")).json();q.success&&(h.value=q)}catch(Y){console.warn("loadHealthDetail failed:",Y)}}async function B(){try{const q=await(await fetch(`/api/analytics/rank?days=${d.value}`)).json();q.success&&(D.value=q.rank||[])}catch(Y){console.warn("loadAnalytics failed:",Y)}}const I=ref(!1);async function W(){if(!I.value){I.value=!0;try{const q=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return q&&q.success?q.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${q.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${q.date}）`):ElementPlus.ElMessage.error(q&&(q.detail||q.message)||"生成复盘失败"),F(),q}catch(Y){ElementPlus.ElMessage.error("生成复盘失败: "+(Y.message||""))}finally{I.value=!1}}}const J=ref(null),N=ref(!1);async function z(){try{const q=await(await fetch("/api/ai/fact-check/latest")).json();J.value=q&&q.success&&q.data||null}catch(Y){console.warn("loadFactCheck failed:",Y)}}async function j(){if(!N.value){N.value=!0;try{const q=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return q&&q.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${q.data.pass_rate!=null?q.data.pass_rate+"%":"--"} (${q.data.checked} 个数字)`),z()):ElementPlus.ElMessage.error(q&&(q.detail||q.message)||"事实护栏抽查失败"),q}catch(Y){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(Y.message||""))}finally{N.value=!1}}}const $=ref([]),Z=ref(!1);async function ne(){try{const q=await(await fetch("/api/backup/list")).json();q.success&&($.value=q.backups||[])}catch(Y){console.error("加载备份列表失败",Y)}}async function ee(){Z.value=!0;try{const q=await(await fetch("/api/backup/create",{method:"POST"})).json();q.success?(ElementPlus.ElMessage.success(q.message||"备份成功"),ne()):ElementPlus.ElMessage.error(q.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{Z.value=!1}}const M=ref(""),s=ref("");async function y(Y){M.value=Y,s.value="";try{const q=window.__quantModules&&window.__quantModules.core||{},K=typeof q.authHeaders=="function"?q.authHeaders():{},ie=await fetch("/api/reports/export?format="+encodeURIComponent(Y),{headers:K});if(!ie.ok)throw new Error("HTTP "+ie.status);const me=await ie.blob(),Ce=URL.createObjectURL(me),U=document.createElement("a");U.href=Ce;const de=new Date().toISOString().slice(0,10);U.download="report_"+de+"."+Y,document.body.appendChild(U),U.click(),document.body.removeChild(U),URL.revokeObjectURL(Ce),s.value="报表已导出 ("+Y.toUpperCase()+")"}catch(q){s.value="报表导出失败: "+(q.message||q)}finally{M.value=""}}async function n(Y){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${Y} 恢复吗？当前数据将被覆盖。`,"恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(q){console.warn("[restoreBackup] confirm cancelled:",q);return}try{const K=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:Y})})).json();K.success?(ElementPlus.ElMessage.success(K.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(K.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const p=ref(!1),X=ref(0),T=[{icon:"calendar",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"bot",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 AI 按钮可随时快速问股。"},{icon:"send",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function b(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{X.value=0,p.value=!0},800)}function u(){p.value=!1,localStorage.setItem("quant_tour_done","1")}function k(){p.value=!1,localStorage.setItem("quant_tour_done","1")}const c=ref(""),A=ref(!1);async function oe(){if(!c.value||!c.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}A.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:c.value.trim(),page:g.value+"/"+e.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(c.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{A.value=!1}}return{feishuConfig:v,feishuTestStatus:m,feishuTestMessage:R,feishuSaving:l,testFeishuWebhook:r,saveFeishuConfig:f,aiFabHidden:o,openAiFab:S,strategyRecommendations:w,aiUsage:E,loadStrategyRecommendations:x,loadAiUsage:C,sysMonitor:O,analyticsRank:D,analyticsDays:d,loadSysMonitor:i,loadAnalytics:B,healthDetail:h,loadHealthDetail:F,reviewTriggering:I,triggerMarketReview:W,factCheck:J,factCheckRunning:N,loadFactCheck:z,triggerFactCheck:j,backups:$,backupCreating:Z,loadBackups:ne,createBackup:ee,restoreBackup:n,reportExporting:M,reportExportMsg:s,exportReport:y,tourVisible:p,tourStep:X,tourSteps:T,maybeShowTour:b,skipTour:u,finishTour:k,feedbackText:c,feedbackSubmitting:A,submitFeedback:oe}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:t}=Vue,{currentView:g,selectedDate:e,dates:v,loadConsensusData:m,hapticFeedback:R}=a,r=t(()=>({day:"天",week:"周",month:"月",year:"年"})[g.value]||"天"),l=t(()=>({day:"date",week:"week",month:"month",year:"year"})[g.value]||"date"),f=t(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[g.value]||"YYYY-MM-DD"),o=t(()=>!e.value||!v.value||v.value.length===0?!1:e.value>v.value[0]),S=t(()=>!e.value||!v.value||v.value.length===0?!1:e.value<v.value[v.value.length-1]);function w(O){R("light"),g.value=O;let D=e.value||v.value[v.value.length-1];if(O==="year"){const d=D.substring(0,4),i=v.value.find(h=>h.startsWith(d));e.value=i||D}else if(O==="month"){const d=D.substring(0,7),i=v.value.find(h=>h.startsWith(d));e.value=i||D}setTimeout(m,50)}function E(O){R("light");const D=e.value,d=v.value,i=d.indexOf(D);if(i<0)return;let h=1;g.value==="week"&&(h=5),g.value==="month"&&(h=22),g.value==="year"&&(h=250);const F=i+O*h;if(F>=0&&F<d.length){const B=d[F];if(g.value==="month"){const I=B.substring(0,7),W=d.find(J=>J.startsWith(I));e.value=W||B}else if(g.value==="year"){const I=B.substring(0,4),W=d.find(J=>J.startsWith(I));e.value=W||B}else e.value=B;m()}}function x(O){if(!v.value||v.value.length===0)return!1;const D=O.getFullYear(),d=String(O.getMonth()+1).padStart(2,"0"),i=String(O.getDate()).padStart(2,"0"),h=`${D}-${d}-${i}`;return!v.value.includes(h)}function C(O){O&&O.length>10&&(e.value=O.substring(0,10)),m()}return{viewUnit:r,datePickerType:l,dateFormat:f,canNavPrev:o,canNavNext:S,switchView:w,navigateDate:E,disabledDate:x,onDateChange:C}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:t,subPageNames:g,navigateTo:e,currentPage:v,currentView:m,navigateDate:R,switchView:r,getLoadDashboardData:l,refreshCalendarData:f,getLoadAiHistory:o,exportCSV:S,getShowBatchEvaluate:w,openAiFab:E,toggleSidebar:x,showStockDetail:C}=a,O=ref("");async function D(N,z){if(!N||N.trim().length<1){z([]);return}const j=window.QuantCommandPanel;let $=[];j&&t.value&&($=j.buildSearchSuggestions(N,t.value,g,j.DEFAULT_COMMANDS));const Z=window.__quantModules&&window.__quantModules.pinyin;Z&&Z.searchCoreStocks(N).forEach(function(ne){$.push({value:ne.code+" "+ne.name,type:"stock",code:ne.code,name:ne.name,label:ne.name,subLabel:ne.code,icon:"trending-up",iconName:"trending-up"})});try{const ee=await(await fetch("/api/search?q="+encodeURIComponent(N))).json();if(ee.success&&ee.results){const M=ee.results.map(function(y){return{value:y.code+" "+y.name,type:"stock",code:y.code,name:y.name,label:y.name,subLabel:y.code,icon:"trending-up",iconName:"trending-up"}}),s=[];(ee.groups||[]).forEach(function(y){(y.items||[]).forEach(function(n){n.type==="sector"?s.push({value:n.name+" · "+n.subLabel,type:"sector",name:n.name,label:n.name,subLabel:"板块",icon:"layers",iconName:"layers"}):n.type==="strategy"?s.push({value:n.name+" · 策略",type:"strategy",id:n.id,name:n.name,label:n.name,subLabel:"策略",icon:"target",iconName:"target"}):n.type==="menu"&&s.push({value:n.name,type:"menu",menuKey:n.menuKey,name:n.name,label:n.name,subLabel:n.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),z($.concat(M,s))}else z($)}catch(ne){console.warn("[searchStocks] fetch failed:",ne),z($)}}function d(N){return N?N.type==="menu"?{action:"menu",menuKey:N.menuKey,subPage:N.subPage}:N.type==="command"?{action:"command",key:N.key}:N.type==="sector"?{action:"sector",name:N.name}:N.type==="strategy"?{action:"strategy",id:N.id,name:N.name}:N.type==="stock"||N.code&&N.name?{action:"stock",code:N.code,name:N.name}:null:null}function i(N){O.value="";const z=window.QuantCommandPanel,j=z?z.dispatchSearchSelection(N):d(N);if(j){if(j.action==="menu"){e(j.menuKey,j.subPage);return}if(j.action==="command"){h(j.key);return}if(j.action==="sector"){e("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(j.name);return}if(j.action==="strategy"){e("research","overview");return}j.action==="stock"&&typeof C=="function"&&C(j.code,j.name)}}function h(N){if(N==="refresh"){const z=v.value;z==="strategies"?l().catch(function(){}):z==="calendar"?f().catch(function(){}):z==="ai"&&o().catch(function(){})}else N==="export"?S():N==="batch"?w().value=!0:N==="ai"?E():N==="sidebar"?x():N==="open-eval-history"?e("ai","history"):N==="open-shortterm"&&e("shortterm","overview")}const F=ref(!1),B=ref(!1);function I(N){if(!N)return!1;const z=N.tagName;return z==="INPUT"||z==="TEXTAREA"||z==="SELECT"||N.isContentEditable}function W(N){if(I(N.target))return;const z=N.key.toLowerCase();if(N.ctrlKey&&z==="k"){N.preventDefault(),B.value=!0;return}if(N.ctrlKey&&z==="/"){N.preventDefault(),F.value=!F.value;return}if(N.ctrlKey&&z==="h"){N.preventDefault(),e("ai","history");return}if(N.ctrlKey&&N.shiftKey&&z==="s"){N.preventDefault(),e("shortterm","overview");return}if(!(N.ctrlKey||N.metaKey||N.altKey)){if(z>="1"&&z<="5"){const j=parseInt(z)-1,$=t.value[j];$&&e($.key,$.subPages[0]||"");return}if(z==="r"&&J(),(z==="arrowleft"||z==="arrowright"||z==="arrowup"||z==="arrowdown")&&v.value==="calendar")if(N.preventDefault(),z==="arrowleft"||z==="arrowright")R(z==="arrowleft"?-1:1);else{const j=["day","week","month","year"].indexOf(m.value),$=["day","week","month","year"][(j+(z==="arrowup"?-1:1)+4)%4];r($)}}}function J(){const N=v.value;N==="strategies"?l().catch(()=>{}):N==="calendar"?f().catch(()=>{}):N==="ai"&&o().catch(()=>{})}return{searchQuery:O,searchStocks:D,onSearchSelect:i,runGlobalCommand:h,shortcutHelpVisible:F,commandPaletteVisible:B,isTypingTarget:I,handleGlobalKeydown:W,refreshCurrentPage:J}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:t,loadUserConfig:g,loadDates:e,loadDashboardData:v,loadDashboardCached:m,loadHealthMetrics:R,loadConsensusData:r,applyTheme:l,maybeShowTour:f,loadAiVendors:o,loadGroupConfig:S,groupsConfig:w}=a,E=function(ee){const M=window.__quantModules&&window.__quantModules.themes;return M&&M.applyLegacyTheme?M.applyLegacyTheme(ee):l(ee)},x="qc_login_username";let C="";try{C=localStorage.getItem(x)||""}catch{C=""}const O=ref({username:C,password:""}),D=ref(!1),d=ref(!1),i=ref(!1),h=ref({oldPassword:"",newPassword:"",confirmPassword:""}),F=ref(!1),B=ref(!1),I=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),W=ref(1);async function J(){try{(await(await fetch("/api/setup/status")).json()).needed&&(I.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},W.value=1,B.value=!0)}catch(ee){console.warn("[checkSetupWizard] failed:",ee)}}async function N(){try{const ee={new_password:I.value.newPassword,ai_key:I.value.aiKey,ai_provider:I.value.aiProvider,ai_model:I.value.aiModel,ai_endpoint:I.value.aiEndpoint,tushare_token:I.value.tushareToken},s=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ee)})).json();s.success?(B.value=!1,ElementPlus.ElMessage.success("初始化完成"),await g()):ElementPlus.ElMessage.error(s.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function z(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(B.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function j(){if(!O.value.username||!O.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}D.value=!0;try{const M=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O.value)})).json();if(M.success){t.value=M.user,localStorage.setItem("quant_user",JSON.stringify(M.user)),localStorage.setItem("quant_token",M.data.access_token),E(M.user.theme||"gold");try{localStorage.setItem(x,O.value.username||"")}catch{}typeof S=="function"&&await S().catch(function(){}),typeof o=="function"&&o(),await g(),await e(),await Promise.all([m(),r(),R().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),M.data&&M.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),f(),M.user.role==="admin"&&setTimeout(J,500)}else ElementPlus.ElMessage.error(M.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{D.value=!1}}async function $(){d.value=!0;try{const M=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();M.success?(t.value=M.user,localStorage.setItem("quant_user",JSON.stringify(M.user)),localStorage.setItem("quant_token",M.data.access_token),E(M.user.theme||"gold"),typeof S=="function"&&await S().catch(function(){}),await g(),await e(),await v(),R().catch(()=>{}),await r(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(M.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{d.value=!1}}function Z(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{t.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{w&&(w.value={})}catch{}try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function ne(){if(!h.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!h.value.newPassword||h.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(h.value.newPassword!==h.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}F.value=!0;try{const ee=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:h.value.oldPassword,new_password:h.value.newPassword})}),M=await ee.json();ee.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),i.value=!1,h.value={oldPassword:"",newPassword:"",confirmPassword:""},Z()):ElementPlus.ElMessage.error(M.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{F.value=!1}}return{loginForm:O,logining:D,guestLogining:d,showChangePassword:i,changePasswordForm:h,changingPassword:F,showSetupWizard:B,setupForm:I,setupStep:W,checkSetupWizard:J,completeSetupWizard:N,resetSetupWizard:z,handleLogin:j,handleGuestLogin:$,handleLogout:Z,doChangePassword:ne}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:t}=Vue;let g=null;const{strategyFilter:e,currentView:v,statusFilter:m,currentPage:R,currentSubPage:r,menus:l,currentUser:f,strategyFilterCounts:o,lazyTick:S,dates:w,selectedDate:E,consensus:x,loadConsensusData:C,fetchMerrillClock:O,fetchMarketData:D,loadWatchlist:d,loadAiHistory:i,preloadWatchlistKline:h,loadChatHistory:F,loadSystemStatus:B,checkTushareConnection:I,loadSysMonitor:W,loadAnalytics:J,loadHealthDetail:N,loadHealthMetrics:z,loadAiUsage:j,loadFactCheck:$,loadAutoEvaluateConfig:Z,loadDatasourceConfig:ne,loadFeishuConfig:ee,loadAiConfig:M,loadAiVendors:s,loadRateLimit:y,loadDataRefreshConfig:n,loadBackups:p,loadAllGroups:X,loadUsers:T,stockDetailTab:b,stockDetailVisible:u,stockKlineLoaded:k,loadStockKline:c,currentKlinePeriod:A,showMerrillDetail:oe,indexDetailVisible:Y,restoreDialogFocus:q}=a;t(e,K=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(K.selected)),localStorage.setItem("quant_strategy_filter_mode",K.mode)},{deep:!0}),t([v,m],(K,ie)=>{K[0]!==ie[0]&&C()}),t([R,r],([K,ie])=>{var me;try{const U=!(K==="calendar"&&ie==="calendar")&&ie||"",de=U?"#"+K+"/"+U:"#"+K;window.location.hash!==de&&(window.location.hash=de)}catch{}if(ie&&localStorage.setItem("quant_last_subpage",ie),!ie&&l.value.find(Ce=>Ce.key===K)){const Ce=l.value.find(U=>U.key===K);Ce&&Ce.subPages.length>0&&(r.value=Ce.subPages[0])}if(K==="shortterm"&&ie==="market-review"){const Ce=window.__lazyLoaders&&window.__lazyLoaders.research;Ce&&Ce().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function(U){U&&U.name&&!U.__quantRegistered&&(window.__quantApp.component(U.name,U),U.__quantRegistered=!0)}),S&&S.value++}).catch(function(U){console.warn("[lazy] research 组件补加载失败",U)})}K==="calendar"&&ie==="calendar"&&(!x.value||x.value.length===0)&&(w.value.length>0&&!E.value&&(E.value=w.value[w.value.length-1]||""),setTimeout(C,50)),K==="calendar"&&ie==="pool"&&(!x.value||x.value.length===0)&&(w.value.length>0&&!E.value&&(E.value=w.value[w.value.length-1]||""),setTimeout(C,50)),K==="strategies"&&(ie==="merrill"&&O(),ie==="market"&&D(),ie==="consensus"&&(!x.value||x.value.length===0)&&setTimeout(C,50)),K==="ai"&&(ie==="watchlist"&&(d(),i(),setTimeout(h,500)),ie==="history"&&i(),ie==="overview"&&(i(),d()),ie==="chat_history"&&F()),(K==="system"||K==="ops")&&((me=f.value)==null?void 0:me.role)==="admin"&&(ie==="status"&&(B(),I()),ie==="health"&&(N(),z()),ie==="schedule"&&N(),ie==="guard"&&$(),ie==="usage"&&(W(),J(),N(),z(),j(),$()),ie==="autoeval"&&(Z(),s()),ie==="datasource"&&ne(),ie==="feature"&&(ee(),M(),y(),n(),p()),ie==="user"&&(X(),T())),(K==="system"||K==="ops")&&ie==="usage"?g||(g=setInterval(()=>{W(),J(),N(),z(),j()},3e4)):g&&(clearInterval(g),g=null)}),t(b,(K,ie)=>{K==="kline"&&ie&&ie!=="kline"&&u.value&&(k.value=!1,setTimeout(async()=>{!await c(A.value)&&u.value&&b.value==="kline"&&setTimeout(()=>c(A.value),800)},50))}),t(oe,K=>{K||(document.documentElement.style.overflow="",document.body.style.overflow="")}),t([u,Y],([K,ie])=>{!K&&!ie&&q()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:t,applyTheme:g,menus:e,currentPage:v,currentSubPage:m,currentView:R,currentKlinePeriod:r,selectedDate:l,dates:f,loadDates:o,loadConsensusData:S,loadDashboardCached:w,appVersion:E,themes:x,fetchMarketData:C,fetchMerrillStages:O,fetchMerrillClock:D,loadAiConfig:d,loadAiVendors:i,loadAiCatalog:h,currentUser:F,loadUserConfig:B,loadAutoEvaluateConfig:I,loadGroupConfig:W,loadUsers:J,loadAllGroups:N,loadAiHistory:z}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",t);function j(T,b){const u={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(T==="calendar"&&u[b])return v.value="calendar",m.value="calendar",u[b]&&(R.value=u[b]),!0;if(T==="research"&&(b==="strategy-write"||b==="custom-write")){v.value="research",m.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",b==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const T=window.location.hash||"";if(!T||T==="#")return;const b=T.replace(/^#\/?/,"").split("/"),u=b[0],k=b[1]||"",c=e.value.find(function(A){return A.key===u});if(c&&!j(u,k)){if(!k)v.value=u,m.value=c.subPages[0]||"";else if(c.subPages.indexOf(k)>=0)v.value=u,m.value=k;else return;window.__lazyLoaders&&window.__lazyLoaders[u]&&window.__quantGoPage&&window.__quantGoPage(u,m.value).catch(function(){})}});const $=(T,b=3e3,u="")=>{const k=new Promise((c,A)=>setTimeout(()=>A(new Error("timeout")),b));return Promise.race([T,k]).catch(c=>{console.warn(`[init] ${u||"task"} failed:`,c.message)})},Z=localStorage.getItem("quant_theme"),ne=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const T=window.__quantModules.themes;let b=ne.theme||"system",u=ne.theme_hue!=null&&ne.theme_hue!==""?ne.theme_hue:null;const k=typeof T.migrateLegacyTheme=="function"?T.migrateLegacyTheme():null;u==null&&k&&(b=k.mode,u=k.hue),u==null&&(u=45),g(b,u)}else Z&&g(Z);await W().catch(function(){}),function(){var T=window.location.hash||"",b=!1;if(T&&T!=="#"){var u=T.replace(/^#\/?/,"").split("/"),k=u[0],c=u[1]||"",A=e.value.find(function(ie){return ie.key===k});A&&(j(k,c)||(v.value=k,c&&A.subPages.indexOf(c)>=0?m.value=c:c||(m.value=A.subPages[0]||"")),b=!0)}if(!b){var oe=localStorage.getItem("quant_last_page");oe&&e.value.some(function(ie){return ie.key===oe})?v.value=oe:ne.default_view&&e.value.some(function(ie){return ie.key===ne.default_view})&&(v.value=ne.default_view);var Y=localStorage.getItem("quant_last_subpage");Y&&(m.value=Y)}var q=localStorage.getItem("quant_last_date");q&&(l.value=q);var K=localStorage.getItem("quant_last_view");K&&(R.value=K),window.__lazyLoaders&&window.__lazyLoaders[v.value]&&window.__quantGoPage&&window.__quantGoPage(v.value,m.value).catch(function(){})}(),fetch("/api/health").then(T=>T.json()).then(T=>{T.version&&(E.value=T.version)}).catch(()=>{});const ee=localStorage.getItem("quant_user"),M=localStorage.getItem("quant_token"),s=!!(ee&&M),y=Promise.all([Promise.resolve().then(()=>{x.value={light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}}),$(C(),3e3,"marketData"),$(O(),2e3,"merrillStages")]).then(()=>{$(D(),3e3,"merrillClock")});if(d(),h(),s&&F.value&&i(),!s||!F.value){await y;return}let n=!0;try{n=(await fetch("/api/users/me")).ok}catch{n=!1}if(!n){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),F.value=null;return}if(F.value){const T=F.value.theme||"",b=window.__quantModules&&window.__quantModules.themes;let u=ne.theme||"system",k=ne.theme_hue!=null&&ne.theme_hue!==""?ne.theme_hue:null;if(k==null&&b&&typeof b.migrateLegacyTheme=="function"){const c=b.migrateLegacyTheme();if(c)u=c.mode,k=c.hue;else if(T&&b.LEGACY_MAP&&b.LEGACY_MAP[T]){const A=b.LEGACY_MAP[T];u=A[0],k=A[1]}}k==null&&(k=45),g(u,k)}if(window.__quantModules&&window.__quantModules.preferences){const b=await window.__quantModules.preferences.loadPreferences();var p=localStorage.getItem("quant_last_page");!p&&b.default_view&&e.value.some(function(u){return u.key===b.default_view})&&(v.value=b.default_view),b.theme&&g(b.theme,b.theme_hue!=null&&b.theme_hue!==""?b.theme_hue:null),r&&(b.chart_period==="weekly"||b.chart_period==="monthly")&&(r.value=b.chart_period)}await Promise.all([$(B(),2e3,"userConfig"),$(o(),2e3,"dates")]),I().catch(()=>{}),W().catch(()=>{});const X=v.value==="strategies"?$(w(),2e3,"dashboard"):$(S(),2e3,"consensus");await Promise.all([X,$(J(),2e3,"users"),$(z(),2e3,"aiHistory")]),N().catch(()=>{})}}}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:t,onMounted:g,onUnmounted:e,watch:v,nextTick:m}=Vue,R=a(!1),r=window.__quantModules&&window.__quantModules.i18n||{},l=r.SUPPORTED_LOCALES||["zh-CN","en"],f=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",o=a(l.indexOf(f)!==-1?f:"zh-CN");typeof r.bindLocale=="function"&&r.bindLocale(o);const S=typeof r.t=="function"?r.t:function(V){return String(V)};function w(V){l.indexOf(V)!==-1&&(o.value=V,typeof r.setLocale=="function"&&r.setLocale(V),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",V))}function E(V,ue){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(V,ue):V==null?"":String(V)}function x(V){(V.key==="Enter"||V.key===" "||V.key==="Spacebar")&&(V.preventDefault(),V.currentTarget&&typeof V.currentTarget.click=="function"&&V.currentTarget.click())}let C=null;function O(){document.activeElement&&document.activeElement!==document.body&&(C=document.activeElement)}function D(){if(C&&C.isConnected)try{C.focus()}catch{}C=null}const d=a(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{d.value=!0}),window.addEventListener("offline",()=>{d.value=!1})),window.addEventListener("beforeunload",V=>{if(R.value)return V.preventDefault(),V.returnValue="您有未保存的配置变更，确定要离开吗？",V.returnValue});function i(V="light"){typeof navigator<"u"&&navigator.vibrate&&(V==="light"?navigator.vibrate(10):V==="medium"?navigator.vibrate(20):V==="heavy"&&navigator.vibrate([10,30,10]))}const h=useMerrillClock(),{merrillData:F,merrillStagesConfig:B,showMerrillDetail:I,merrillDetailData:W,merrillClockConfig:J,merrillClockLastUpdated:N,merrillReevalResult:z,merrillReevalLoading:j,stages:$,indicatorList:Z,dimensionScoreList:ne,detailDimensionScoreList:ee,confidenceColor:M,timelineStages:s,clockPosition:y,merrillProgressStyle:n,FULL_CYCLE_MONTHS:p,getStageAngle:X,getCycleProgress:T,getCurrentStageMonths:b,getStageTotalMonths:u,isStageCompleted:k,getCharLabel:c,getAssetName:A,getRankColor:oe,fetchMerrillStages:Y,fetchMerrillClock:q,loadMerrillTimeline:K,showTimelineStage:ie,merrillTimeline:me,timelineLoading:Ce,showStageDetail:U,saveMerrillClockConfig:de,doMerrillReevaluate:Re,startAutoRefresh:se,stopAutoRefresh:ge,merrillSnapshots:Te,merrillSnapshotsTotal:pe,fetchMerrillSnapshots:ke}=h,Ee=a(localStorage.getItem("sidebar_collapsed")==="1");function re(){Ee.value=!Ee.value,localStorage.setItem("sidebar_collapsed",Ee.value?"1":"0")}const ae=a(null),he=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","about","glossary","notification"],guestSubPages:["config","about"]}],Ne=t(()=>{var Je,Ht,Yt;const V=((Je=ye.value)==null?void 0:Je.role)||"guest",ue=((Ht=ye.value)==null?void 0:Ht.group)||V,we=((Yt=ae.value)==null?void 0:Yt[ue])||null;return he.map(Ot=>{if(we&&we.visible_menus&&Ot.key in we.visible_menus&&!we.visible_menus[Ot.key])return null;const ka={...Ot,name:S("nav."+Ot.key)||Ot.name};return we!=null&&we.visible_sub_pages&&(ka.subPages=Ot.subPages.filter(ds=>{const Pd=Ot.key+"."+ds;return we.visible_sub_pages[Pd]!==!1})),Ot.key==="system"&&V==="guest"&&Ot.guestSubPages&&(ka.subPages=Ot.guestSubPages),ka}).filter(Boolean)});async function Fe(){try{if(!localStorage.getItem("quant_token"))return;const ue=await fetch("/api/groups/my");if(ue.ok){const we=await ue.json();ae.value={[we.group_id]:we.group}}}catch(V){console.warn("loadGroupConfig:",V)}}const We=a("strategies"),qt=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},ht=a(qt.navMode);function Et(V){const ue=window.__quantModules&&window.__quantModules.navModeCore;ht.value=ue?ue.normalizeNavMode(V):V==="tree"||V==="toptab"?V:"toptab",ue&&ue.writePrefs({navMode:ht.value})}const _e=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function qe(V,ue=""){i("light"),We.value=V,te.value=ue,localStorage.setItem("quant_last_subpage",ue)}function je(){const V=Ne.value;if(!V||!V.length)return;if(!V.some(function(Ve){return Ve.key===We.value})){const Ve=V[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",Ve.key),We.value=Ve.key,te.value=Ve.subPages&&Ve.subPages[0]||"";return}const we=V.find(function(Ve){return Ve.key===We.value});we&&we.subPages&&we.subPages.length&&!we.subPages.includes(te.value)&&(te.value=we.subPages[0])}const Oe=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],Xe=a("multifactor"),Qe=a(null),Ge=a(1e5),it=a(!1),bt=a(null);let mt=null,At=null;async function aa(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const ue={initial_capital:Ge.value||1e5};Qe.value&&Qe.value.length===2&&(ue.start_date=Qe.value[0],ue.end_date=Qe.value[1]),it.value=!0,bt.value=null;try{const we=await fetch("/api/strategies/"+Xe.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ue)});if(!we.ok){const Ht=await we.json().catch(()=>({}));throw new Error(Ht.detail||"回测失败")}const Ve=await we.json(),Je=Ve.result||{};if(!Je.success)throw new Error(Je.message||"回测失败");Ve.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),bt.value={total_return_pct:((Je.total_return??0)*100).toFixed(2),annual_return_pct:((Je.annual_return??0)*100).toFixed(2),max_drawdown_pct:((Je.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(Je.sharpe_ratio??0).toFixed(2),win_rate:((Je.win_rate??0)*100).toFixed(2),out_sample:Je.outsample_total_return===void 0?"":((Je.outsample_total_return??0)*100).toFixed(2),overfit_warning:Je.overfit_warning||!1,message:Je.message||""},L(Je.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(we){ElementPlus.ElMessage.error(we.message||"回测失败")}finally{it.value=!1}}function L(V){const ue=document.getElementById("backtestEquityChart");if(!ue||!V||V.length===0)return;const we=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Ve=()=>{At=V,mt&&(mt.dispose(),mt=null),mt=echarts.init(ue),mt.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const Je=V.map(Yt=>Yt.date||Yt[0]),Ht=V.map(Yt=>Yt.value??Yt[1]);mt.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:Je,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:Ht,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};we?we().then(Ve).catch(()=>{}):Ve()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){At&&L(At)}));const te=a("overview"),Se=t(()=>{const V=he.find(ue=>ue.key===We.value);return V?V.name:We.value}),Ie=a(0),Ke=t(()=>{Ie.value;const V={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},ue=te.value;return We.value==="shortterm"&&ue==="market-review"?"qc-research-page":We.value==="ops"&&ue==="execution"?"qc-strategies-page":V[We.value]||""}),kt=a(!1),$e=a({}),Ue=a([]);a("");const _t=a([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),dt=a("day"),Q=a("all"),ye=a(null);v(Ne,function(){je()}),v([We,te],function(){const V=document.querySelector(".main-content");V&&(V.scrollTop=0)}),function(){if(typeof localStorage>"u")return;const V=localStorage.getItem("quant_user"),ue=localStorage.getItem("quant_token");if(V&&ue)try{ye.value=JSON.parse(V)}catch{}}();const Ze=a(!1),ot=a("kline"),st=a(null),Ft=a(!1),Ye=a(localStorage.getItem("qc_detail_mode")||"split"),Tt=a(window.innerWidth<=1024),Bt=t(()=>Ye.value==="split"&&!Tt.value);function It(V){Ye.value=V;try{localStorage.setItem("qc_detail_mode",V)}catch{}}window.addEventListener("resize",()=>{Tt.value=window.innerWidth<=1024});const pt=35,Pt=a(parseInt(localStorage.getItem("qc_split_width")||"",10)||null);function Kt(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",Pt.value?Pt.value+"px":pt+"%")}Kt();function Jt(V){const ue=Math.max(1,Math.min(V,2e3));Pt.value=ue,Kt();try{localStorage.setItem("qc_split_width",String(ue))}catch{}}function xt(V){if(Pt.value)return Pt.value;const ue=V?V.getBoundingClientRect().width:0;return Math.max(200,Math.floor(ue*pt/100))}let gt=null;function Zt(V,ue){if(!ue||Tt.value)return;V.preventDefault();const we=ue.getBoundingClientRect().width;gt={startX:V.clientX,startW:xt(ue),minW:Math.max(200,Math.floor(we*pt/100)),maxW:Math.floor(we/2)},document.body.classList.add("qc-split-resizing")}function Dt(V){if(!gt)return;const ue=V.clientX-gt.startX;let we=gt.startW+ue;we=Math.max(gt.minW,Math.min(we,gt.maxW)),Pt.value=we,Kt();try{localStorage.setItem("qc_split_width",String(we))}catch{}}function ra(){gt&&(gt=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",Dt),document.addEventListener("mouseup",ra));function Qt(V){const ue=V.target&&V.target.closest?V.target.closest("[data-split-resize]"):null;if(!ue)return;const we=ue.closest("[data-split-root]");Zt(V,we)}typeof document<"u"&&document.addEventListener("mousedown",Qt,!0);const sa={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于",glossary:"术语表"},ut=a({});function $t(V,ue){return sa[ue]||ue}function ca(V){const ue=he.find(Ve=>Ve.key===V);if(!ue||!ue.subPages||!ue.subPages.length)return;if(!(ut.value[V]||[]).length){const Ve=ue.subPages[0];ut.value=Object.assign({},ut.value,{[V]:[{subPage:Ve,title:$t(V,Ve)}]})}}function ya(V,ue){const we=window.__quantModules&&window.__quantModules.tabsCore,Ve=$t(V,ue);if(we){const Je=we.openTab(ut.value,V,ue,Ve);ut.value=Je.groups}else{const Je=ut.value[V]||[];Je.some(Ht=>Ht.subPage===ue)||(ut.value=Object.assign({},ut.value,{[V]:Je.concat([{subPage:ue,title:Ve}])}))}qe(V,ue)}function _a(V,ue){const we=window.__quantModules&&window.__quantModules.tabsCore,Ve=te.value;let Je=null;if(we)Je=we.closeTab(ut.value,V,ue,Ve),ut.value=Je.groups;else{const Ot=ut.value[V]||[];ut.value=Object.assign({},ut.value,{[V]:Ot.filter(ka=>ka.subPage!==ue)})}if(!(ut.value[V]||[]).length){ca(V);const Ot=he.find(ds=>ds.key===V),ka=Ot&&Ot.subPages&&Ot.subPages[0];ka&&qe(V,ka);return}const Yt=Je?Je.nextActive:null;Yt&&qe(V,Yt)}function la(V,ue){if(!(ut.value[V]||[]).some(Ve=>Ve.subPage===ue)){ya(V,ue);return}qe(V,ue)}v([We,te],([V,ue])=>{ca(V);const we=ut.value[V]||[];ue&&!we.some(Ve=>Ve.subPage===ue)&&(ut.value=Object.assign({},ut.value,{[V]:we.concat([{subPage:ue,title:$t(V,ue)}])}))},{immediate:!0});const H=function(V){if(!(V.ctrlKey&&V.key==="Tab"))return;const ue=We.value,we=ut.value[ue]||[];if(we.length<=1)return;V.preventDefault();const Ve=te.value,Je=Math.max(0,we.findIndex(Ot=>Ot.subPage===Ve)),Ht=V.shiftKey?(Je-1+we.length)%we.length:(Je+1)%we.length,Yt=we[Ht];Yt&&la(ue,Yt.subPage)};window.addEventListener("keydown",H);const xe=a({light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}),He=a("light"),De=[45,220,0,140,270,320,-1],vt={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色","-1":"中性"},tt=a(45),Lt=a(function(){const V=window.__quantModules&&window.__quantModules.preferences;return V&&V.getPreference&&V.getPreference("theme")||"system"}());(function(){const V=window.__quantModules&&window.__quantModules.preferences,ue=V&&V.getPreference&&V.getPreference("theme_hue");ue!=null&&ue!==""&&(tt.value=parseInt(ue,10))})();const Wt=a("comfortable");(function(){const V=window.__quantModules&&window.__quantModules.preferences;V&&V.applyDensity&&(Wt.value=V.applyDensity()||"comfortable")})();function Ut(V){return V<0?"hsl(0, 0%, 46%)":"hsl("+V+", 75%, 42%)"}function xa(V){return vt[V]||"自定义 "+V}const ba=a(""),da=a([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),na=a({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),Aa=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],ua=a({day:[],week:[],month:[],year:[]}),La=a({});function va(V,ue){let we=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(we=window.__quantModules.themes.applyTheme(V,ue)),He.value=we&&we.mode?we.mode:V==="dark"||V==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function Ta(V,ue){const we=window.__quantModules&&window.__quantModules.preferences;if(!(!we||!we.setPreferences))try{we.setPreferences({theme:V}),ue!=null&&ue!==""&&we.setPreferences({theme_hue:parseInt(ue,10)})}catch{}}function wa(V,ue){va(V,ue),ue!=null&&ue!==""&&(tt.value=parseInt(ue,10));const we=window.__quantModules&&window.__quantModules.themes;let Ve=V;we&&we.LEGACY_MAP&&we.LEGACY_MAP[V]&&(Ve=we.LEGACY_MAP[V][0]),Ve==="light"||Ve==="dark"||Ve==="system"?Lt.value=Ve:Lt.value=He.value,Ve==="system"&&(Ve=He.value),Ta(Ve,ue),ye.value&&(fetch(`/api/users/${ye.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:Ve})}),ye.value.theme=Ve,localStorage.setItem("quant_user",JSON.stringify(ye.value)))}function Ia(V){const ue=window.__quantModules&&window.__quantModules.preferences,we=ue&&ue.getPreference?ue.getPreference("theme_hue"):null;wa(V,we)}function Na(V){const ue=window.__quantModules&&window.__quantModules.preferences;!ue||!ue.applyDensity||(Wt.value=ue.applyDensity(V)||"comfortable",ue.setPreference&&ue.setPreference("info_density",Wt.value))}function Gt(V){tt.value=parseInt(V,10);const ue=window.__quantModules&&window.__quantModules.preferences,we=ue&&ue.getPreference&&ue.getPreference("theme")||"light";wa(we,tt.value)}const ma=a(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function _(V){ma.value=!!V;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",V?"show":"hide")}catch{}}const G=t(()=>{const V=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return ma.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...V]:V}),ze=a("daily");(function(){try{const ue=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(ue==="weekly"||ue==="monthly")&&(ze.value=ue)}catch{}})();const ft=a(!1),P=a(""),le=a(!1),ce=a(!1),Me=a({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),Pe=["MA5","MA10","MA20","MA60"],Rt=a(!1);let lt=0;async function yt(V){if(!st.value)return!1;const ue=++lt;ft.value=!0,ze.value=V;try{const Ve=await(await fetch(`/api/market/kline/${st.value.stock}?period=${V}&limit=60`)).json();if(!Ve.success||!Ve.data)throw new Error(Ve.message||"数据获取失败");return P.value=Ve.degraded_from?"分钟数据("+Ve.degraded_from+")暂不可用, 已降级展示日线":"",el(st.value.stock),ue!==lt?!1:(ot.value!=="kline"||(ce.value=!0,await m(),window.__quantModules.charts.renderKlineTo("stockKlineChart",Ve.data,V,!1,{isMobile:gs.value,onLegend:Je=>{Object.keys(Me.value).forEach(Ht=>{Ht in Je&&(Me.value[Ht]=!!Je[Ht])})}}),St()),!0)}catch(we){return console.error("[kline] 加载失败:",st.value&&st.value.stock,V,we),ot.value==="kline"&&(ce.value=!1,P.value="",ElementPlus.ElMessage.error("K线加载失败: "+(we&&we.message?we.message:"数据源不可达，请重试"))),!1}finally{ft.value=!1}}async function Xt(V){if(Ja.value){le.value=!0,ze.value=V;try{const we=await(await fetch(`/api/market/kline/${Ja.value.code}?period=${V}&limit=60`)).json();if(!we.success||!we.data)throw new Error(we.message||"数据获取失败");Rt.value=!0,await m(),window.__quantModules.charts.renderKlineTo("indexKlineChart",we.data,V,!0,{isMobile:gs.value,onLegend:Ve=>{Object.keys(Me.value).forEach(Je=>{Je in Ve&&(Me.value[Je]=!!Ve[Je])})}}),St()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{le.value=!1}}}async function zt(V){if(!ce.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await yt(V)}async function pa(V){if(!Rt.value){ElementPlus.ElMessage.info("请先加载K线");return}await Xt(V)}function ia(V){const ue=(Ze.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(Ya.value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);ue&&ue.dispatchAction({type:"legendToggleSelect",name:V})}function St(){["K线","MA5","MA10","MA20","MA60"].forEach(V=>{Me.value[V]=!0})}async function et(){const V=await fetch("/api/system/metrics");if(!V.ok)throw new Error("metrics "+V.status);const ue=await V.json(),we=Array.isArray(ue)?ue:ue&&ue.data_sources||[];Ue.value=we}const Nt=()=>cs,Sa=()=>Ps,Mt=()=>Wo,Ga=()=>Oa,pl=()=>ls,fl=window.__quantAppLogic.data.create({currentView:dt,statusFilter:Q,dashboardData:$e,loadHealthMetrics:et,getLoadDashboardData:Nt,getLastRefreshTime:Sa,getFetchPoolSignals:Mt}),{loading:gl,loadingView:hl,viewCache:yl,dates:Va,selectedDate:ea,lastLoadTime:bl,consensus:Ca,viewNote:wl,loadDates:vs,refreshCalendarData:ms,exportCSV:ps,loadConsensusData:Pa,loadDashboardCached:Fa}=fl,kl=window.__quantAppLogic.market.create({currentKlinePeriod:ze,loadIndexKline:Xt,rememberDialogTrigger:O,menus:Ne,currentPage:We,currentSubPage:te,stockDetail:st,selectedDate:ea}),{marketData:_l,indexDetailVisible:Ya,indexDetail:Ja,indexAiResult:xl,indexAiLoading:Sl,fetchMarketData:Qa,showIndexDetail:Cl,loadCachedIndexEval:ql,doIndexAiEvaluate:El,disposeStockKline:fs,isMobile:gs,zoomKlineRange:Ml,scoreAnimating:Tl,scoreDelta:Pl,scorePulse:Dl,refreshStockScore:$a,animateScoreEntrance:Xa,onTouchStart:Rl,onTouchEnd:zl}=kl,Al=window.__quantAppLogic.ops.create({navigateTo:qe,currentPage:We,currentSubPage:te}),{feishuConfig:hs,feishuTestStatus:Ll,feishuTestMessage:Il,testFeishuWebhook:Nl,saveFeishuConfig:Ol,aiFabHidden:jl,openAiFab:ys,strategyRecommendations:Vl,aiUsage:Fl,loadStrategyRecommendations:bs,loadAiUsage:Za,sysMonitor:Hl,analyticsRank:Bl,analyticsDays:Kl,loadSysMonitor:ws,loadAnalytics:ks,healthDetail:Wl,loadHealthDetail:_s,reviewTriggering:Ul,triggerMarketReview:Gl,factCheck:Yl,factCheckRunning:Jl,loadFactCheck:xs,triggerFactCheck:Ql,backups:$l,backupCreating:Xl,loadBackups:Ss,createBackup:Zl,restoreBackup:en,reportExporting:tn,reportExportMsg:an,exportReport:sn,tourVisible:ln,tourStep:nn,tourSteps:on,maybeShowTour:rn,skipTour:cn,finishTour:dn,feedbackText:un,feedbackSubmitting:vn,submitFeedback:mn}=Al,pn=window.__quantAppLogic.nav.create({currentView:dt,selectedDate:ea,dates:Va,loadConsensusData:Pa,hapticFeedback:i}),{viewUnit:fn,datePickerType:gn,dateFormat:hn,canNavPrev:yn,canNavNext:bn,switchView:Cs,navigateDate:qs,disabledDate:wn,onDateChange:kn}=pn,_n=window.__quantAppLogic.keys.create({menus:Ne,subPageNames:sa,navigateTo:qe,currentPage:We,currentView:dt,navigateDate:qs,switchView:Cs,getLoadDashboardData:Nt,refreshCalendarData:ms,getLoadAiHistory:Ga,exportCSV:ps,getShowBatchEvaluate:pl,openAiFab:ys,toggleSidebar:re,showStockDetail:Ms}),{searchQuery:xn,searchStocks:Sn,onSearchSelect:Cn,shortcutHelpVisible:qn,commandPaletteVisible:En,handleGlobalKeydown:Es}=_n;let Ha=0;async function Ms(V){const ue=++Ha;O(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(V,""),ts.value=null,ze.value="daily",ce.value=!1,ot.value="kline",st.value=null,Ft.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),Ze.value=!0,m(()=>Xa());try{const we=await fetch(`/api/calendar/stock/${V}?date=${ea.value}`);if(ue!==Ha)return;st.value=await we.json(),st.value&&st.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(V,st.value.name)}catch{if(ue!==Ha)return;ElementPlus.ElMessage.error("加载失败"),st.value={stock:V,name:"",total_days:0}}finally{ue===Ha&&(Ft.value=!1)}setTimeout(async()=>{await yt("daily"),$a()},500),ns(V)}const Mn={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},Tn={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function Pn(V){return Mn[V]||"var(--text-tertiary)"}function Dn(V){return Tn[V]||"var(--bg-hover)"}const Rn=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:ce,stockDetailVisible:Ze,stockDetailTab:ot,stockDetail:st,disposeStockKline:fs}):{},{chatSessions:zn,chatHistoryView:An,selectedChatIds:Ln,expandedChatDates:In,expandedChatMonths:Nn,expandedChatStocks:On,chatHistoryLoading:jn,chatHistoryError:Vn,allChatSessionsFlat:Fn,chatGroupedByDate:Hn,chatGroupedByMonth:Bn,chatGroupedByStock:Kn,toggleSelectChat:Wn,toggleSelectChatDate:Un,toggleSelectChatMonth:Gn,toggleSelectChatStock:Yn,toggleChatDateExpand:Jn,toggleChatMonthExpand:Qn,toggleChatStockExpand:$n,selectAllChatSessions:Xn,deleteSelectedChatSessions:Zn,viewChatSession:ei,loadChatHistory:Ts,deleteChatSession:ti,renderMarkdown:ai,stockChatInput:si,stockChatMessages:li,stockChatLoading:ni,stockChatError:ii,askStockSend:oi,askStockQuick:ri}=Rn,ci=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:ye,applyTheme:va,allMenuDefs:he,loadGroupConfig:Fe}):{},{userList:di,userSearch:ui,groupFilter:vi,userPageTab:mi,expandedGroups:pi,addMemberGroupMap:fi,filteredUsers:gi,toggleGroupExpand:hi,removeMemberFromGroupInline:yi,addMemberToGroupInline:bi,changeUserGroup:wi,showAddUser:ki,editingUser:_i,userForm:xi,savingUser:Si,editingGroup:Ci,menuConfigDialog:qi,memberDialog:Ei,groupEditForm:Mi,subPageCache:Ti,showAddGroup:Pi,addGroupForm:Di,savingGroup:Ri,groupMembers:zi,addMemberUsername:Ai,selectedMemberGroup:Li,subPageSectionExpanded:Ii,toggleSubPageSection:Ni,getGroupMemberCount:Oi,getMenuEnabledCount:ji,groupCount:Vi,openMemberManager:Fi,loadGroupMembers:Hi,addMemberToGroup:Bi,removeMemberFromGroup:Ki,availableUsersForGroup:Wi,onParentToggle:Ui,openMenuConfig:Gi,saveMenuConfig:Yi,deleteGroupConfig:Ji,createGroup:Qi,allGroups:$i,getGroupName:Xi,loadAllGroups:es,loadUsers:Ba,editUser:Zi,saveUser:eo,deleteUser:to,toggleUserEnabled:ao,resetUserPassword:so}=ci,lo=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:Ca,currentPage:We,currentSubPage:te,dashboardData:$e,searchKeyword:ba,statusFilter:Q,strategyFilter:na,strategyFilterCounts:ua}):{},{applyStrategyFilter:ig,statusCounts:no,stockPool:io,strategyDistribution:oo,strategyPreviewCount:ro,saveStrategyFilter:co,filteredConsensusRank:uo,currentPoolSize:vo,filteredStrategyCounts:mo,poolChangeBadge:po,timeBarPercent:fo,lastRefreshTime:Ps,navigateToStrategyFilter:go}=lo,ho=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:R,consensus:Ca}):{},{aiResult:ts,lastEvalTime:yo,evalHistoryComparison:bo,checklistItems:wo,aiHistory:Ds,selectedHistoryIds:Rs,expandedDates:zs,expandedMonths:ko,expandedStocks:As,poolSignals:_o,toggleMonthExpand:xo,aiHistoryView:So,selectedWatchlistCodes:Ls,showAutoEvaluateSettings:Is,savingConfig:Ns,autoEvaluateScope:Os,aiVendors:Co,aiCatalog:qo,aiModelsError:Eo,testingAllModels:Mo,savingAiModels:To,loadAiVendors:Ka,loadAiCatalog:js,saveAiVendors:Vs,saveAiModels:Po,testVendorModel:Do,testAllVendorModels:Ro,fetchVendorModels:zo,addVendorFromCatalog:Ao,addCustomVendor:Lo,addVendorModel:Io,removeVendorModel:No,removeVendor:Oo,toggleVendorKeyReveal:jo,toggleVendorEdit:Vo,autoEvaluateConfig:as,aiLoading:ss,aiEvalStage:Fs,aiEvalElapsed:Hs,aiEvalError:Bs,showBatchEvaluate:ls,batchStocks:Ks,batchRunning:Ws,batchTotal:Us,batchCompleted:Gs,batchCurrent:Ys,batchStatuses:Js,batchResults:Qs,batchEvalErrors:$s,aiConfig:Xs,selectedPreset:Fo,providerInfo:Ho,aiPresets:og,applyPreset:Bo,onProviderChange:Ko,fetchPoolSignals:Wo,cancelPoolSignals:Zs,loadLastEvaluation:ns}=ho,Uo=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:ye,selectedDate:ea,stockDetail:st,stockDetailTab:ot,stockDetailVisible:Ze,stockDetailLoading:Ft,stockKlineLoaded:ce,viewCache:yl,animateScoreEntrance:Xa,loadStockKline:yt,refreshStockScore:$a,disposeStockKline:fs,aiHistory:Ds,aiLoading:ss,aiEvalStage:Fs,aiEvalElapsed:Hs,aiEvalError:Bs,aiResult:ts,loadLastEvaluation:ns,autoEvaluateConfig:as,autoEvaluateScope:Os,batchStocks:Ks,batchRunning:Ws,batchTotal:Us,batchCompleted:Gs,batchCurrent:Ys,batchStatuses:Js,batchResults:Qs,batchEvalErrors:$s,expandedDates:zs,expandedStocks:As,savingConfig:Ns,selectedHistoryIds:Rs,selectedWatchlistCodes:Ls,showAutoEvaluateSettings:Is,showBatchEvaluate:ls}):{},{quickEvalStock:Go,evalStrategy:Yo,watchlistSort:Jo,watchlist:Qo,watchlistCodes:$o,sortedWatchlist:Xo,getWatchlistScore:Zo,getLatestScore:rg,addSearchResult:er,evaluatedCodes:tr,klineLoadedCodes:ar,markKlineLoaded:el,watchlistSearch:sr,watchlistResults:lr,watchlistSearching:nr,dataRefreshConfig:ir,dataRefreshReloading:or,dataRefreshSaving:rr,aiHistoryLoading:cr,aiHistoryError:dr,aiHistoryTotal:ur,aiHistoryLoadingMore:vr,hasMoreAiHistory:mr,loadMoreAiHistory:pr,watchlistLoading:fr,doAiEvaluate:gr,loadAiHistory:Oa,deleteSingleHistory:hr,toggleSelectHistory:yr,clearSelection:br,clearWatchlistSelection:wr,batchReevaluateHistory:kr,batchAddToWatchlist:_r,batchRemoveWatchlist:xr,toggleSelectWatchlist:Sr,selectAllHistory:Cr,selectAllWatchlist:qr,deleteSelectedHistory:Er,loadAutoEvaluateConfig:tl,saveAutoEvaluateConfig:Mr,loadWatchlist:al,addToWatchlist:Tr,removeFromWatchlist:Pr,clearWatchlist:Dr,toggleWatchlist:Rr,showStockKline:zr,preloadingKline:Ar,preloadWatchlistKline:sl,watchlistEvaluate:Lr,batchEvaluateWatchlist:Ir,batchEvaluateSelected:Nr,searchStockForWatchlist:Or,loadDataRefreshConfig:ll,saveDataRefreshConfig:jr,triggerDataReload:Vr,triggerDataPull:Fr,dataPullRunning:Hr,groupedByDate:Br,aiHistoryByStock:Kr,groupedByMonth:Wr,aiHistoryStockCount:Ur,scoreDistribution:Gr,quickEvaluate:Yr,toggleDateExpand:Jr,toggleSelectDate:Qr,toggleSelectMonth:$r,toggleStockExpand:Xr,toggleSelectStock:Zr,registerTrendChart:ec,viewAiResult:tc,doBatchEvaluate:ac,realtimeQuotes:sc,realtimeDegraded:lc,realtimeWsState:nc,connectRealtimeQuotes:ic,disconnectRealtimeQuotes:oc,quoteWarningFor:rc,realtimeQuoteColor:cc,realtimePriceText:dc,realtimePctText:uc,realtimeRatioText:vc,REALTIME_DEGRADED_TEXT:mc,REALTIME_FALLBACK_TEXT:pc}=Uo,fc=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:Oe}):{},{btStrategyOptions:gc,btSelectedStrategies:hc,toggleBtStrategy:yc,btDateRange:bc,btCapital:wc,btCommissionRate:kc,btIncludeBenchmark:_c,btRunning:xc,btResult:Sc,btError:Cc,btMetrics:qc,btAnnualReturns:Ec,btTrades:Mc,btStrategyMetricsRows:Tc,btDrawdownRegion:Pc,runBacktestWorkbench:Dc,exportBacktestCSV:Rc,registerBacktestNavChart:zc,btFmtNum:Ac}=fc,Lc=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:R,aiConfig:Xs,aiLoading:ss,feishuConfig:hs,currentTheme:He,changeTheme:wa,autoEvaluateConfig:as,currentUser:ye,strategyFilter:na,applyTheme:va,dashboardData:$e,lastRefreshTime:Ps,saveAiModels:Po}):{},{configSaving:Ic,globalConfigDirty:Nc,lastSavedTime:Oc,feishuConfigOriginal:cg,aiConfigOriginal:dg,tushareConfigOriginal:ug,tushareConfig:jc,tushareStatus:Vc,datasourceConfig:Fc,datasourceStatus:Hc,syncingData:Bc,stockCount:Kc,tradeDateCount:Wc,aiStatus:Uc,appVersion:nl,showImportDialog:Gc,rateLimitConfig:Yc,rateLimitDirty:Jc,rateLimitSaving:Qc,loadRateLimit:is,saveRateLimit:$c,saveAiConfig:Xc,testAiApi:Zc,exportConfig:ed,importConfig:td,saveAllConfig:ad,resetAllConfig:sd,testTushareConnection:ld,checkTushareConnection:Wa,syncStockData:nd,loadTushareConfig:il,loadDatasourceConfig:ol,saveDatasourceConfig:id,testDatasource:od,toggleDatasourceKeyReveal:rd,toggleDatasourceEdit:cd,loadFeishuConfig:os,loadAiConfig:Ua,loadUserConfig:rl,loadSystemStatus:rs,loadDashboardData:cs}=Lc,dd=window.__quantAppLogic.auth.create({currentUser:ye,loadUserConfig:rl,loadDates:vs,loadDashboardData:cs,loadDashboardCached:Fa,loadHealthMetrics:et,loadConsensusData:Pa,applyTheme:va,maybeShowTour:rn,loadAiVendors:Ka,loadGroupConfig:Fe,groupsConfig:ae}),{loginForm:ud,logining:vd,guestLogining:md,showChangePassword:pd,changePasswordForm:fd,changingPassword:gd,showSetupWizard:hd,setupForm:yd,setupStep:bd,checkSetupWizard:wd,completeSetupWizard:kd,resetSetupWizard:_d,handleLogin:xd,handleGuestLogin:Sd,handleLogout:Cd,doChangePassword:qd}=dd;window.__quantAppLogic.watch.register({strategyFilter:na,currentView:dt,statusFilter:Q,currentPage:We,currentSubPage:te,menus:Ne,currentUser:ye,strategyFilterCounts:ua,lazyTick:Ie,dates:Va,selectedDate:ea,consensus:Ca,loadConsensusData:Pa,fetchMerrillClock:q,fetchMarketData:Qa,loadWatchlist:al,loadAiHistory:Oa,preloadWatchlistKline:sl,loadChatHistory:Ts,loadSystemStatus:rs,checkTushareConnection:Wa,loadSysMonitor:ws,loadAnalytics:ks,loadHealthDetail:_s,loadHealthMetrics:et,loadAiUsage:Za,loadFactCheck:xs,loadAutoEvaluateConfig:tl,loadDatasourceConfig:ol,loadFeishuConfig:os,loadAiConfig:Ua,loadAiVendors:Ka,loadRateLimit:is,loadDataRefreshConfig:ll,loadBackups:Ss,loadAllGroups:es,loadUsers:Ba,stockDetailTab:ot,stockDetailVisible:Ze,stockKlineLoaded:ce,loadStockKline:yt,currentKlinePeriod:ze,showMerrillDetail:I,indexDetailVisible:Ya,restoreDialogFocus:D});const Ed=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:Es,applyTheme:va,menus:Ne,currentPage:We,currentSubPage:te,currentView:dt,currentKlinePeriod:ze,selectedDate:ea,dates:Va,loadDates:vs,loadConsensusData:Pa,loadDashboardCached:Fa,appVersion:nl,themes:xe,fetchMarketData:Qa,fetchMerrillStages:Y,fetchMerrillClock:q,loadMerrillTimeline:K,showTimelineStage:ie,merrillTimeline:me,timelineLoading:Ce,loadAiConfig:Ua,loadAiVendors:Ka,loadAiCatalog:js,currentUser:ye,loadUserConfig:rl,loadAutoEvaluateConfig:tl,loadGroupConfig:Fe,loadUsers:Ba,loadAllGroups:es,loadAiHistory:Oa}),{runOnMounted:Md}=Ed;window.__quantGoPage=async(V,ue)=>{try{const we=window.__lazyLoaders&&window.__lazyLoaders[V];we&&await we()}catch(we){console.warn("[lazy] 页面组件加载失败",V,we)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(we=>{we&&we.name&&!we.__quantRegistered&&(window.__quantApp.component(we.name,we),we.__quantRegistered=!0)}),Ie&&Ie.value++,We.value=V,ue&&(te.value=ue)};let Da;v(We,async V=>{var ue;i("light");try{const we=he.find(function(Ve){return Ve.key===V});document.title=(we?we.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",V),V!=="calendar"&&typeof Zs=="function"&&Zs();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:V})}).catch(()=>{})}catch(we){console.warn("pageView track failed:",we)}if(Da&&(clearInterval(Da),Da=null),V==="strategies")await Fa(),Da=setInterval(()=>{Fa().catch(()=>{})},5*60*1e3);else if(V==="calendar")ea.value&&await Pa();else if(V==="ai")bs(),Za(),await Oa();else if(V==="system"){if(!ea.value){const Ve=await(await fetch("/api/dashboard")).json(),Je=Ve.data||Ve;Je.latest_date&&(ea.value=Je.latest_date)}if(ea.value){const we=["day","week","month","year"];for(const Ve of we)try{const Ht=await(await fetch(`/api/view/${Ve}/${ea.value}?status=all`)).json();ua.value[Ve]=Ht.stocks||[]}catch(Je){console.warn("loadConsensusData view load failed:",Je)}(!Ca.value||Ca.value.length===0)&&(Ca.value=ua.value.day||[])}((ue=ye.value)==null?void 0:ue.role)==="admin"&&(await Ba(),await os(),await il(),await rs(),await Ua(),await is(),Wa(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(Wa,36e5)))}}),g(async()=>{await Md()}),se(),K(),e(()=>{Da&&clearInterval(Da),window.removeEventListener("keydown",Es),window.removeEventListener("keydown",H)});function Td(V,ue=2){return V==null||V===""||isNaN(Number(V))?"--":Number(V).toFixed(ue)}return{currentPage:We,pageComp:Ke,currentSubPage:te,sidebarCollapsed:Ee,menus:Ne,navMode:ht,setNavMode:Et,tabGroups:ut,openTab:ya,closeTab:_a,activateTab:la,fmtNum:Td,sanitizeHtml:E,keyClick:x,isOnline:d,currentUser:ye,allMenuDefs:he,t:S,locale:o,changeLanguage:w,currentPageName:Se,subPageNames:sa,searchQuery:xn,searchStocks:Sn,onSearchSelect:Cn,selectedDate:ea,onDateChange:kn,disabledDate:wn,refreshCalendarData:ms,exportCSV:ps,viewNote:wl,loading:gl,lastLoadTime:bl,resetSetupWizard:_d,showChangePassword:pd,themes:xe,currentTheme:He,changeTheme:wa,changeThemeMode:Ia,changeThemeHue:Gt,handleLogout:Cd,themeHues:De,themeHueNames:vt,themeHue:tt,themeMode:Lt,hueColor:Ut,hueName:xa,density:Wt,changeDensity:Na,marketData:_l,merrillData:F,merrillTimeline:me,timelineLoading:Ce,merrillStagesConfig:B,fetchMerrillStages:Y,merrillSnapshots:Te,merrillSnapshotsTotal:pe,healthMetrics:Ue,feishuConfig:hs,feishuTestStatus:Ll,feishuTestMessage:Il,shortcutHelpVisible:qn,shortcutHelpItems:_e,commandPaletteVisible:En,tourVisible:ln,tourStep:nn,tourSteps:on,skipTour:cn,finishTour:dn,backups:$l,backupCreating:Xl,loadBackups:Ss,createBackup:Zl,restoreBackup:en,reportExporting:tn,reportExportMsg:an,exportReport:sn,sysMonitor:Hl,analyticsRank:Bl,analyticsDays:Kl,loadSysMonitor:ws,loadAnalytics:ks,healthDetail:Wl,loadHealthDetail:_s,reviewTriggering:Ul,triggerMarketReview:Gl,factCheck:Yl,factCheckRunning:Jl,loadFactCheck:xs,triggerFactCheck:Ql,strategyRecommendations:Vl,aiUsage:Fl,loadStrategyRecommendations:bs,loadAiUsage:Za,aiFabHidden:jl,openAiFab:ys,feedbackText:un,feedbackSubmitting:vn,submitFeedback:mn,backtestStrategies:Oe,backtestStrategy:Xe,backtestRange:Qe,backtestCapital:Ge,backtestRunning:it,backtestResult:bt,runBacktest:aa,btStrategyOptions:gc,btSelectedStrategies:hc,toggleBtStrategy:yc,btDateRange:bc,btCapital:wc,btCommissionRate:kc,btIncludeBenchmark:_c,btRunning:xc,btResult:Sc,btError:Cc,btMetrics:qc,btAnnualReturns:Ec,btTrades:Mc,btStrategyMetricsRows:Tc,btDrawdownRegion:Pc,runBacktestWorkbench:Dc,exportBacktestCSV:Rc,registerBacktestNavChart:zc,btFmtNum:Ac,fetchMarketData:Qa,fetchMerrillClock:q,testFeishuWebhook:Nl,saveFeishuConfig:Ol,merrillClockConfig:J,merrillClockLastUpdated:N,merrillReevalResult:z,merrillReevalLoading:j,saveMerrillClockConfig:de,doMerrillReevaluate:Re,dataRefreshConfig:ir,dataRefreshReloading:or,dataRefreshSaving:rr,loadDataRefreshConfig:ll,saveDataRefreshConfig:jr,triggerDataReload:Vr,triggerDataPull:Fr,dataPullRunning:Hr,indexDetailVisible:Ya,indexDetail:Ja,indexAiResult:xl,indexAiLoading:Sl,loadCachedIndexEval:ql,showIndexDetail:Cl,doIndexAiEvaluate:El,klinePeriods:G,currentKlinePeriod:ze,klineLoading:ft,indexKlineLoading:le,stockKlineLoaded:ce,indexKlineLoaded:Rt,klineDegradeNote:P,klineShowMinutes:ma,toggleKlineShowMinutes:_,loadStockKline:yt,switchKlinePeriod:zt,loadIndexKline:Xt,switchIndexKlinePeriod:pa,zoomKlineRange:Ml,MA_LINES:Pe,klineMaVisible:Me,toggleKlineMa:ia,scoreAnimating:Tl,scoreDelta:Pl,scorePulse:Dl,refreshStockScore:$a,animateScoreEntrance:Xa,showMerrillDetail:I,merrillDetailData:W,showStageDetail:U,getCharLabel:c,getAssetName:A,getRankColor:oe,levelColor:Pn,levelBg:Dn,timelineStages:s,getStageAngle:X,getCycleProgress:T,getCurrentStageMonths:b,getStageTotalMonths:u,isStageCompleted:k,stages:$,indicatorList:Z,dimensionScoreList:ne,confidenceColor:M,views:_t,currentView:dt,statusFilter:Q,loginForm:ud,logining:vd,guestLogining:md,dashboardData:$e,loadingView:hl,dates:Va,consensus:Ca,searchKeyword:ba,stockDetailVisible:Ze,stockDetailTab:ot,stockDetail:st,stockDetailLoading:Ft,detailDisplayMode:Ye,setDetailDisplayMode:It,isNarrow:Tt,detailSplitEnabled:Bt,splitWidth:Pt,setSplitWidth:Jt,SPLIT_DEFAULT_PCT:pt,aiLoading:ss,aiEvalStage:Fs,aiEvalElapsed:Hs,aiEvalError:Bs,showBatchEvaluate:ls,batchStocks:Ks,batchRunning:Ws,batchTotal:Us,batchCompleted:Gs,batchCurrent:Ys,batchStatuses:Js,batchResults:Qs,batchEvalErrors:$s,aiConfig:Xs,userList:di,showAddUser:ki,editingUser:_i,userForm:xi,savingUser:Si,userSearch:ui,filteredUsers:gi,groupFilter:vi,userPageTab:mi,expandedGroups:pi,addMemberGroupMap:fi,toggleGroupExpand:hi,removeMemberFromGroupInline:yi,addMemberToGroupInline:bi,changeUserGroup:wi,statusCounts:no,stockPool:io,poolSignals:_o,aiResult:ts,aiHistory:Ds,groupedByDate:Br,groupedByMonth:Wr,expandedDates:zs,expandedMonths:ko,aiHistoryByStock:Kr,aiHistoryStockCount:Ur,expandedStocks:As,aiHistoryView:So,aiHistoryLoading:cr,aiHistoryError:dr,aiHistoryTotal:ur,aiHistoryLoadingMore:vr,hasMoreAiHistory:mr,loadMoreAiHistory:pr,watchlistLoading:fr,scoreDistribution:Gr,quickEvalStock:Go,evalStrategy:Yo,checklistItems:wo,evalHistoryComparison:bo,quickEvaluate:Yr,selectedHistoryIds:Rs,showAutoEvaluateSettings:Is,savingConfig:Ns,autoEvaluateConfig:as,autoEvaluateScope:Os,strategyList:da,toggleDateExpand:Jr,toggleMonthExpand:xo,toggleSelectDate:Qr,toggleSelectMonth:$r,toggleSelectStock:Zr,toggleStockExpand:Xr,registerTrendChart:ec,selectedWatchlistCodes:Ls,clearWatchlistSelection:wr,toggleSelectWatchlist:Sr,selectAllHistory:Cr,selectAllWatchlist:qr,batchRemoveWatchlist:xr,batchEvaluateSelected:Nr,batchReevaluateHistory:kr,batchAddToWatchlist:_r,viewUnit:fn,datePickerType:gn,dateFormat:hn,canNavPrev:yn,canNavNext:bn,handleLogin:xd,handleGuestLogin:Sd,switchView:Cs,navigateDate:qs,navigateTo:qe,loadDashboardData:cs,loadConsensusData:Pa,showStockDetail:Ms,doAiEvaluate:gr,doBatchEvaluate:ac,loadAiHistory:Oa,loadLastEvaluation:ns,lastEvalTime:yo,viewAiResult:tc,saveAiConfig:Xc,testAiApi:Zc,exportConfig:ed,importConfig:td,configSaving:Ic,configChanged:R,watchlist:Qo,watchlistCodes:$o,watchlistSearch:sr,watchlistResults:lr,watchlistSearching:nr,watchlistSort:Jo,sortedWatchlist:Xo,getWatchlistScore:Zo,addSearchResult:er,evaluatedCodes:tr,klineLoadedCodes:ar,markKlineLoaded:el,loadWatchlist:al,addToWatchlist:Tr,removeFromWatchlist:Pr,clearWatchlist:Dr,searchStockForWatchlist:Or,toggleWatchlist:Rr,batchEvaluateWatchlist:Ir,watchlistEvaluate:Lr,showStockKline:zr,preloadWatchlistKline:sl,preloadingKline:Ar,realtimeQuotes:sc,realtimeDegraded:lc,realtimeWsState:nc,connectRealtimeQuotes:ic,disconnectRealtimeQuotes:oc,quoteWarningFor:rc,realtimeQuoteColor:cc,realtimePriceText:dc,realtimePctText:uc,realtimeRatioText:vc,REALTIME_DEGRADED_TEXT:mc,REALTIME_FALLBACK_TEXT:pc,toggleSelectHistory:yr,clearSelection:br,deleteSingleHistory:hr,deleteSelectedHistory:Er,saveAutoEvaluateConfig:Mr,editUser:Zi,saveUser:eo,deleteUser:to,loadUsers:Ba,allGroups:$i,loadAllGroups:es,getGroupName:Xi,toggleUserEnabled:ao,resetUserPassword:so,selectedPreset:Fo,applyPreset:Bo,onProviderChange:Ko,providerInfo:Ho,globalConfigDirty:Nc,lastSavedTime:Oc,tushareConfig:jc,tushareStatus:Vc,syncingData:Bc,stockCount:Kc,tradeDateCount:Wc,aiStatus:Uc,appVersion:nl,showImportDialog:Gc,rateLimitConfig:Yc,rateLimitDirty:Jc,rateLimitSaving:Qc,loadRateLimit:is,saveRateLimit:$c,saveAllConfig:ad,resetAllConfig:sd,testTushareConnection:ld,syncStockData:nd,loadTushareConfig:il,loadFeishuConfig:os,loadSystemStatus:rs,loadAiConfig:Ua,aiVendors:Co,aiCatalog:qo,aiModelsError:Eo,testingAllModels:Mo,savingAiModels:To,loadAiVendors:Ka,loadAiCatalog:js,saveAiVendors:Vs,saveAiModels:Vs,testVendorModel:Do,testAllVendorModels:Ro,fetchVendorModels:zo,addVendorFromCatalog:Ao,addCustomVendor:Lo,addVendorModel:Io,removeVendorModel:No,removeVendor:Oo,toggleVendorKeyReveal:jo,toggleVendorEdit:Vo,checkTushareConnection:Wa,datasourceConfig:Fc,datasourceStatus:Hc,loadDatasourceConfig:ol,saveDatasourceConfig:id,testDatasource:od,toggleDatasourceKeyReveal:rd,toggleDatasourceEdit:cd,strategyFilter:na,strategyFilterOptions:Aa,strategyFilterCounts:ua,strategyPreviewCount:ro,saveStrategyFilter:co,filteredConsensusRank:uo,currentPoolSize:vo,filteredStrategyCounts:mo,strategyDistribution:oo,expandedStrategies:La,poolChangeBadge:po,timeBarPercent:fo,navigateToStrategyFilter:go,showUserMenu:kt,toggleSidebar:re,groupsConfig:ae,loadGroupConfig:Fe,editingGroup:Ci,groupEditForm:Mi,showAddGroup:Pi,addGroupForm:Di,savingGroup:Ri,menuConfigDialog:qi,memberDialog:Ei,groupMembers:zi,addMemberUsername:Ai,selectedMemberGroup:Li,subPageSectionExpanded:Ii,toggleSubPageSection:Ni,getGroupMemberCount:Oi,getMenuEnabledCount:ji,groupCount:Vi,openMemberManager:Fi,loadGroupMembers:Hi,addMemberToGroup:Bi,removeMemberFromGroup:Ki,availableUsersForGroup:Wi,subPageCache:Ti,onParentToggle:Ui,openMenuConfig:Gi,saveMenuConfig:Yi,deleteGroupConfig:Ji,createGroup:Qi,changePasswordForm:fd,changingPassword:gd,doChangePassword:qd,showSetupWizard:hd,setupForm:yd,setupStep:bd,checkSetupWizard:wd,completeSetupWizard:kd,chatSessions:zn,chatHistoryView:An,selectedChatIds:Ln,expandedChatDates:In,expandedChatMonths:Nn,expandedChatStocks:On,chatHistoryLoading:jn,chatHistoryError:Vn,allChatSessionsFlat:Fn,chatGroupedByDate:Hn,chatGroupedByMonth:Bn,chatGroupedByStock:Kn,toggleSelectChat:Wn,toggleSelectChatDate:Un,toggleSelectChatMonth:Gn,toggleSelectChatStock:Yn,toggleChatDateExpand:Jn,toggleChatMonthExpand:Qn,toggleChatStockExpand:$n,selectAllChatSessions:Xn,deleteSelectedChatSessions:Zn,viewChatSession:ei,loadChatHistory:Ts,deleteChatSession:ti,renderMarkdown:ai,stockChatInput:si,stockChatMessages:li,stockChatLoading:ni,stockChatError:ii,askStockSend:oi,askStockQuick:ri,onTouchStart:Rl,onTouchEnd:zl,hapticFeedback:i}}})();Ea.name="qc-icon";vl.name="qc-glossary-hint";ml.name="qc-glossary-page";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=om;window.__quantComponents.Header=ip;window.__quantComponents.SubNav=bp;window.__quantComponents.MobileNav=Op;window.__quantComponents.StockList=bf;window.__quantComponents.DetailSplit=xf;window.__quantComponents.TopTabs=Rf;window.__quantComponents.AppIcon=Ea;window.__quantComponents.GlossaryHint=vl;window.__quantComponents.GlossaryPage=ml;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default ng();
