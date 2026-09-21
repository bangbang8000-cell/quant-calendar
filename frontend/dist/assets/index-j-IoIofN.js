var Id=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);import{aV as Nd,L as fe,O as ya,Z as Od,au as Qt,M as ge,P as qe,aW as jd,a0 as Be,_ as We,F as ft,al as Dt,S as vt,a1 as ht,X as ha,ai as Ft,q as za,o as Ya,a8 as ms,r as Nt,e as ot,av as Vd,Y as Va,$ as Ea,R as Fd,aC as ga,T as Hd,Q as ra,p as Bd,n as Kd}from"./vendor-vue-DDF9zi1T.js";import{e as Wd,E as Ud,a as Gd,b as Yd,c as Qd,z as Jd}from"./vendor-ep-VOop1zGa.js";import{C as $d,a as Xd,W as Zd,I as eu,S as tu,B as au,F as su,b as nu,c as lu,d as iu,e as ou,f as ru,P as cu,g as du,h as uu,i as vu,T as mu,j as fu,L as pu,k as gu,G as hu,U as yu,l as bu,m as wu,n as ku,D as _u,o as xu,p as Su,M as Cu,q as qu,R as Eu,r as Mu,s as Tu,K as Du,t as Pu,u as Ru,v as zu,w as Au,x as Lu,y as Iu,z as Nu,A as Ou,E as ju,H as Vu,O as Fu,J as Hu,N as Bu,Q as Ku,V as Wu,X as Uu,Y as Gu,Z as Yu,_ as Qu,$ as Ju,a0 as $u,a1 as Xu,a2 as Zu,a3 as ev,a4 as tv,a5 as av,a6 as sv,a7 as nv,a8 as lv,a9 as iv,aa as ov,ab as rv,ac as cv,ad as dv,ae as uv,af as vv,ag as mv,ah as fv,ai as pv,aj as gv,ak as hv,al as yv,am as bv,an as wv,ao as kv,ap as _v,aq as xv,ar as Sv,as as Cv,at as qv,au as Ev,av as Mv,aw as Tv,ax as Dv,ay as Pv,az as Rv,aA as zv,aB as Av,aC as Lv,aD as Iv,aE as Nv,aF as Ov,aG as jv,aH as Vv,aI as Fv,aJ as Hv,aK as Bv,aL as Kv,aM as Wv,aN as Uv,aO as Gv,aP as Yv,aQ as Qv}from"./vendor-lucide-DidEUx9K.js";var jp=Id((Jp,Me)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))t(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const S of u.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&t(S)}).observe(document,{childList:!0,subtree:!0});function f(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function t(c){if(c.ep)return;c.ep=!0;const u=f(c);fetch(c.href,u)}})();window.Vue=Nd;const ba=Wd||{};window.ElementPlus=ba;ba.ElMessage=ba.ElMessage||Ud;ba.ElMessageBox=ba.ElMessageBox||Gd;ba.ElNotification=ba.ElNotification||Yd;ba.ElLoading=ba.ElLoading||Qd;window.ElementPlusLocaleZhCn={default:Jd};(function(){const a=[45,220,0,140,270,320,180,25,250],e={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},f={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function t(s,b,i){return"hsl("+s+", "+b+"%, "+i+"%)"}function c(s,b,i){b=b/100,i=i/100;const p=function(w){return(w+s/30)%12},ee=b*Math.min(i,1-i),z=function(w){return i-ee*Math.max(-1,Math.min(p(w)-3,Math.min(9-p(w),1)))};return Math.round(255*z(0))+", "+Math.round(255*z(8))+", "+Math.round(255*z(4))}const u=5;function S(s,b,i){return c(s,b,i).split(",").map(function(p){return parseInt(p,10)})}function o(s){const b=function(i){return i=i/255,i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4)};return .2126*b(s[0])+.7152*b(s[1])+.0722*b(s[2])}function l(s,b){const i=o(s),p=o(b),ee=Math.max(i,p),z=Math.min(i,p);return(ee+.05)/(z+.05)}function h(s,b,i){for(var p=8,ee=92,z=0;z<26;z++){var w=(p+ee)/2;o(S(s,b,w))<i?p=w:ee=w}return Math.round(ee*10)/10}function r(s,b,i,p,ee){let z=38,w=76;for(let m=0;m<24;m++){const T=(z+w)/2;l(S(s,p,T),S(s,b,i))>=ee?w=T:z=T}return Math.round(w*10)/10}function E(s,b){var i={};return b==="light"?(i["--qc-neutral-50"]=t(s,18,98),i["--qc-neutral-100"]=t(s,16,95),i["--qc-neutral-200"]=t(s,14,90),i["--qc-neutral-300"]=t(s,12,83),i["--qc-neutral-400"]=t(s,10,68),i["--qc-neutral-500"]=t(s,10,53),i["--qc-neutral-600"]=t(s,10,40),i["--qc-neutral-700"]=t(s,10,30),i["--qc-neutral-800"]=t(s,10,20),i["--qc-neutral-900"]=t(s,10,12),i["--qc-background"]=t(s,18,98),i["--qc-muted"]=t(s,16,95),i["--qc-border"]=t(s,12,72),i["--chart-axis"]=t(s,12,55),i["--chart-split"]=t(s,10,88),i["--qc-foreground"]=t(s,10,12),i["--qc-muted-foreground"]=t(s,9,38),i["--qc-nav-item-default"]=t(s,9,38),i["--qc-nav-item-hover"]=t(s,10,12),i["--qc-nav-group-label"]=t(s,9,40),i["--qc-nav-bg"]="#ffffff",i["--bg-page"]=t(s,20,97),i["--bg-stripe"]=t(s,20,97),i["--bg-card-header"]=t(s,24,96),i["--card-gradient-header"]="linear-gradient(135deg, "+t(s,24,96)+" 0%, #ffffff 100%)",i["--bg-hover"]=t(s,26,94),i["--bg-tertiary"]=t(s,14,93),i["--badge-gold-bg"]=t(s,26,96),i["--gold-bg"]=t(s,20,97),i["--border-light"]=t(s,22,89),i["--border-base"]=t(s,24,79),i["--border-color"]=t(s,14,88),i["--text-primary"]=t(s,12,12),i["--text-secondary"]=t(s,12,32),i["--text-tertiary"]=t(s,14,40),i["--text-disabled"]=t(s,9,x(s,9,L(s,18,98),25,70,!0,3.2)),i["--qc-card"]="#ffffff",i["--qc-popover"]="#ffffff",i["--qc-nav-border"]=t(s,12,72),i["--qc-nav-item-hover-bg"]=t(s,16,95),i["--qc-overlay"]="rgba(31, 29, 26, 0.5)",i["--bg-card"]="#ffffff",i["--surface"]="#ffffff",i["--border-heavy"]=t(s,22,72),i["--surface-canvas"]=t(s,18,98),i["--surface-card"]="#ffffff",i["--surface-raised"]="#ffffff",i["--surface-sunken"]=t(s,16,96),i["--surface-input"]="#ffffff",i["--surface-hover"]=t(s,26,94),i["--border-strong"]=t(s,22,72),i["--scrollbar-thumb"]="rgba("+c(s,12,72)+", 0.5)",i["--bg-page-rgb"]=c(s,20,97)):(i["--qc-background"]=t(s,10,8),i["--qc-card"]=t(s,11,11),i["--qc-popover"]=t(s,11,11),i["--qc-muted"]=t(s,12,14),i["--qc-border"]=t(s,14,30),i["--chart-axis"]=t(s,16,52),i["--chart-split"]=t(s,14,26),i["--qc-nav-bg"]=t(s,10,9),i["--qc-nav-border"]=t(s,13,22),i["--qc-nav-item-hover-bg"]=t(s,12,14),i["--bg-page"]=t(s,10,8),i["--bg-card"]=t(s,11,11),i["--bg-card-header"]=t(s,12,14),i["--bg-stripe"]=t(s,10,9),i["--bg-hover"]=t(s,12,14),i["--bg-tertiary"]=t(s,12,14),i["--border-light"]=t(s,13,18),i["--border-base"]=t(s,14,26),i["--border-heavy"]=t(s,16,38),i["--border-color"]=t(s,13,22),i["--surface"]=t(s,11,11),i["--surface-canvas"]=t(s,10,8),i["--surface-card"]=t(s,11,11),i["--surface-raised"]=t(s,12,14),i["--surface-sunken"]=t(s,12,9),i["--surface-input"]=t(s,12,9),i["--surface-hover"]=t(s,12,15),i["--border-strong"]=t(s,16,42),i["--scrollbar-thumb"]="rgba("+c(s,16,52)+", 0.5)",i["--bg-page-rgb"]=c(s,10,8),i["--qc-overlay"]="rgba(0, 0, 0, 0.6)"),i}const y=4.6;var k=[255,255,255];function _(s){return c(s,10,8).split(",").map(function(b){return parseInt(b,10)})}function x(s,b,i,p,ee,z,w){for(var m=w||y,T=p,d=ee,N=0;N<24;N++){var le=(T+d)/2,X=l(S(s,b,le),i)>=m;z?X?T=le:d=le:X?d=le:T=le}return Math.round((z?T:d)*10)/10}function L(s,b,i){return c(s,b,i).split(",").map(function(p){return parseInt(p,10)})}function P(s){const b=h(s,75,.18),i=h(s,75,.26),p=h(s,70,.36),ee=h(s,85,.12),z=c(s,75,b),w=x(s,68,k,14,62,!0),m=Math.max(12,w-5),T=Math.max(10,w-11),d=c(s,16,95).split(",").map(function(G){return parseInt(G,10)}),N=c(s,85,92).split(",").map(function(G){return parseInt(G,10)}),le=x(s,78,d,10,58,!0,4.6),X=x(s,80,N,10,58,!0,4.6),R=Math.min(32,x(s,80,k,8,60,!0,4.6));return{...E(s,"light"),"--primary-color":t(s,75,b),"--primary-rgb":z,"--color-primary":t(s,75,b),"--qc-primary":t(s,75,b),"--qc-primary-50":t(s,90,96),"--qc-primary-100":t(s,85,92),"--qc-primary-200":t(s,80,84),"--qc-primary-300":t(s,75,72),"--qc-primary-400":t(s,70,p),"--qc-primary-500":t(s,75,i),"--qc-primary-600":t(s,80,b),"--qc-primary-700":t(s,85,ee),"--qc-primary-800":t(s,88,28),"--qc-primary-900":t(s,90,20),"--text-link":t(s,78,le),"--secondary-color":t(s,70,55),"--card-border":t(s,22,80),"--bg-selected":"rgba("+z+", 0.08)","--btn-primary-bg":t(s,80,R),"--btn-primary-border":t(s,80,R),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":t(s,82,28),"--btn-primary-hover-border":t(s,82,28),"--btn-primary-active-bg":t(s,85,24),"--btn-primary-active-border":t(s,85,24),"--btn-primary-plain-bg":"rgba("+z+", 0.08)","--btn-primary-plain-border":"rgba("+z+", 0.25)","--btn-primary-plain-color":t(s,80,le),"--btn-primary-plain-hover-bg":"rgba("+z+", 0.15)","--btn-primary-plain-hover-border":t(s,80,32),"--btn-primary-text-color":t(s,80,le),"--gradient-brand":"linear-gradient(135deg, "+t(s,76,m)+" 0%, "+t(s,85,T)+" 100%)","--primary-text":t(s,78,le),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+t(s,62,Math.min(74,r(s,45,14,58,u)+5))+" 0%, "+t(s,58,r(s,45,14,58,u))+" 100%)","--panel-fg":t(s,45,14),"--qc-nav-item-active":t(s,80,X),"--qc-nav-item-active-bg":t(s,85,92),"--qc-nav-item-active-border":t(s,75,48),"--qc-nav-badge-bg":t(s,85,92),"--qc-nav-badge-text":t(s,80,X),"--qc-ring":t(s,75,x(s,75,L(s,18,98),25,70,!0,3.2)),"--brand-soft-text":t(s,80,x(s,80,L(s,80,84),10,58,!0,4.6)),"--border-control":t(s,16,x(s,16,L(s,18,98),30,80,!0,3.2))}}function v(s){const b=h(s,85,.34),i=h(s,85,.46),p=c(s,85,b),ee=x(s,80,_(s),30,92,!1),z=Math.min(96,ee+16),w=L(s,55,22),m=L(s,10,9),T=p.split(",").map(function(G){return parseInt(G,10)}),d=[0,1,2].map(function(G){return Math.round(T[G]*.12+m[G]*.88)}),N=x(s,85,d,45,96,!1,4.6),le=x(s,85,w,45,96,!1,4.6),X=Math.min(94,x(s,92,w,45,96,!1,4.6)),R=Math.min(96,X+6);return{...E(s,"dark"),"--primary-color":t(s,85,b),"--primary-rgb":p,"--color-primary":t(s,85,b),"--qc-primary":t(s,90,b),"--qc-primary-50":t(s,50,18),"--qc-primary-100":t(s,55,22),"--qc-primary-200":t(s,55,26),"--qc-primary-300":t(s,60,30),"--qc-primary-400":t(s,65,38),"--qc-primary-500":t(s,85,i),"--qc-primary-600":t(s,90,b),"--qc-primary-700":t(s,92,X),"--qc-primary-800":t(s,90,R),"--qc-primary-900":t(s,92,Math.min(98,R+8)),"--text-link":t(s,85,le),"--secondary-color":t(s,70,60),"--card-border":t(s,30,25),"--bg-selected":"rgba("+p+", 0.10)","--btn-primary-bg":t(s,85,65),"--btn-primary-border":t(s,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":t(s,80,72),"--btn-primary-hover-border":t(s,80,72),"--btn-primary-active-bg":t(s,75,80),"--btn-primary-active-border":t(s,75,80),"--btn-primary-plain-bg":"rgba("+p+", 0.08)","--btn-primary-plain-border":"rgba("+p+", 0.25)","--btn-primary-plain-color":t(s,85,le),"--btn-primary-plain-hover-bg":"rgba("+p+", 0.15)","--btn-primary-plain-hover-border":t(s,85,65),"--btn-primary-text-color":t(s,85,le),"--gradient-brand":"linear-gradient(135deg, "+t(s,85,z)+" 0%, "+t(s,80,ee)+" 100%)","--primary-text":t(s,85,le),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+t(s,60,Math.min(76,r(s,40,12,55,u)+5))+" 0%, "+t(s,55,r(s,40,12,55,u))+" 100%)","--panel-fg":t(s,40,12),"--qc-nav-item-active":t(s,85,N),"--qc-nav-item-active-bg":"rgba("+p+", 0.10)","--qc-nav-item-active-border":t(s,85,65),"--qc-nav-badge-bg":"rgba("+p+", 0.12)","--qc-nav-badge-text":t(s,85,N),"--border-control":t(s,16,x(s,16,L(s,11,11),25,70,!1,3.2)),"--brand-soft-text":t(s,85,x(s,85,L(s,55,26),45,96,!1,4.6)),"--qc-ring":t(s,85,65)}}var n=[],g={mode:"light",hue:45},I=!1;function K(s,b){try{var i=document.querySelector('meta[name="theme-color"]');if(!i)return;var p=b?s["--surface-canvas"]||s["--qc-background"]:s["--btn-primary-bg"]||s["--qc-primary"];p&&i.setAttribute("content",p)}catch{}}function q(){if(!(I||typeof window>"u"||!window.matchMedia)){var s=window.matchMedia("(prefers-color-scheme: dark)"),b=function(){g.mode==="system"&&Z("system",g.hue)};s.addEventListener?s.addEventListener("change",b):s.addListener&&s.addListener(b),I=!0}}function O(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}var F=-1;function $(s){return s=parseInt(s,10),isNaN(s)?45:s<0?F:Math.max(0,Math.min(359,s))}function H(s){return Object.keys(s).forEach(function(b){var i=s[b];if(typeof i=="string"){i.indexOf("hsl(")>=0&&(i=i.replace(/hsl\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)%/g,function(m,T){return"hsl("+T+", 0%"}));var p=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*[\d.]+)?\)$/.exec(i);if(p){var ee=Math.round(.2126*+p[1]+.7152*+p[2]+.0722*+p[3]);i="rgba("+ee+", "+ee+", "+ee+(p[4]||"")+")"}if(/^\d+,\s*\d+,\s*\d+$/.test(i)){var z=i.split(",").map(function(m){return parseInt(m,10)}),w=Math.round(.2126*z[0]+.7152*z[1]+.0722*z[2]);i=w+", "+w+", "+w}s[b]=i}}),s}function W(s,b){var i=L(45,0,b?22:95),p=L(45,0,b?8:98),ee=L(45,0,b?11:100),z=b?x(45,0,i,45,96,!1,4.6):x(45,0,i,10,58,!0,4.6),w=L(45,0,b?22:92),m=b?x(45,0,w,45,96,!1,4.6):x(45,0,w,10,58,!0,4.6),T=b?x(45,0,p,45,96,!1,3.2):x(45,0,p,25,70,!0,3.2),d=b?x(45,0,ee,25,70,!1,3.2):x(45,0,p,30,80,!0,3.2),N=b?x(45,0,L(45,0,26),45,96,!1,4.6):x(45,0,L(45,0,84),10,58,!0,4.6);s["--brand-soft-text"]="hsl(45, 0%, "+N+"%)";var le="hsl(45, 0%, "+z+"%)";if(s["--primary-text"]=le,s["--text-link"]=le,s["--btn-primary-text-color"]=le,s["--btn-primary-plain-color"]=le,s["--qc-nav-item-active"]="hsl(45, 0%, "+m+"%)",s["--qc-nav-badge-text"]="hsl(45, 0%, "+m+"%)",s["--qc-ring"]="hsl(45, 0%, "+T+"%)",s["--border-control"]="hsl(45, 0%, "+d+"%)",b){var X=x(45,0,L(45,0,8),30,92,!1,4.6),R=Math.min(96,X+16);s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+R+"%) 0%, hsl(45, 0%, "+X+"%) 100%)"}else{var G=x(45,0,k,14,62,!0,4.6),oe=Math.max(12,G-5),pe=Math.max(10,G-11);s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+oe+"%) 0%, hsl(45, 0%, "+pe+"%) 100%)"}var Se=r(45,0,14,0,u);return s["--gradient-panel"]="linear-gradient(135deg, hsl(45, 0%, "+Math.min(74,Se+5)+"%) 0%, hsl(45, 0%, "+Se+"%) 100%)",s["--panel-fg"]="hsl(45, 0%, 14%)",s}function Z(s,b){let i=s||"light",p=b==null||b===""?null:b;if(e[s]){const N=e[s];i=N[0],p==null&&(p=N[1])}i==="system"&&(i=O()?"dark":"light");const ee=i==="dark";p=$(p??45);const z=p===F,w=document.documentElement;w.setAttribute("data-theme",ee?"dark-pro":"gold"),w.setAttribute("data-theme-mode",ee?"dark":"light"),w.setAttribute("data-theme-neutral",z?"true":"false");let m=ee?v(z?45:p):P(z?45:p);z&&(m=W(H(m),ee));for(var T=Object.keys(m),d=0;d<n.length;d++)T.indexOf(n[d])===-1&&w.style.removeProperty(n[d]);T.forEach(function(N){w.style.setProperty(N,m[N])}),n=T,g.mode=typeof s=="string"&&s?s:"light",g.hue=p,K(m,ee);try{localStorage.setItem("quant_theme_mode",ee?"dark":"light"),localStorage.setItem("quant_theme_hue",String(p))}catch{}return{mode:ee?"dark":"light",hue:p}}function te(){try{var s=localStorage.getItem("quant_theme_hue");if(s!==null&&s!=="")return $(s)}catch{}var b=typeof window<"u"&&window.__quantModules?window.__quantModules.preferences:null;if(b&&b.getPreference){var i=b.getPreference("theme_hue");if(i!=null&&i!=="")return $(i)}return null}function B(s){var b=te();return Z(s,b??void 0)}function U(){const s=localStorage.getItem("quant_theme");if(!s||!e[s]||localStorage.getItem("quant_theme_hue")!==null)return null;const b=e[s];return{mode:b[0],hue:b[1]}}function C(){const s=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let b=s.theme||"system",i=s.theme_hue!=null&&s.theme_hue!==""?s.theme_hue:null;const p=U();return i==null&&p&&(b=p.mode,i=p.hue),i==null&&(i=45),q(),Z(b,i)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:a,LEGACY_MAP:e,legacyThemes:f,NEUTRAL_HUE:F,generateLightTokens:P,generateDarkTokens:v,migrateLegacyTheme:U,persistedHue:te,applyLegacyTheme:B,applyTheme:Z,init:C},typeof queueMicrotask=="function"?queueMicrotask(C):C()})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantI18n=e()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",e=["zh-CN","en","ja","ko","zh-TW"],f={};let t=a,c=null;function u(){return c&&typeof c=="object"&&"value"in c?c.value||a:t}function S(y,k){return e.indexOf(y)===-1?!1:(f[y]=k&&typeof k=="object"?k:{},!0)}function o(y){const k=e.indexOf(y)!==-1?y:a;return t=k,c&&typeof c=="object"&&"value"in c&&(c.value=k),typeof document<"u"&&document.documentElement.setAttribute("lang",k),t}function l(){return u()}function h(y){if(y&&typeof y=="object"&&"value"in y){c=y;const k=e.indexOf(y.value)!==-1?y.value:a;y.value=k,t=k}return t}function r(y,k){const _=u(),x=f[_]||{};let L=y in x?x[y]:null;if(L==null&&_!=="en"){const P=f.en||{};L=y in P?P[y]:null}return L==null&&(L=String(y)),k&&typeof k=="object"&&Object.keys(k).forEach(function(P){L=L.replace(new RegExp("\\{"+P+"\\}","g"),String(k[P]))}),L}const E={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:e,messages:f,registerLocale:S,setLocale:o,getLocale:l,bindLocale:h,t:r};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=E),E});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantZhCN=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.ruleScore":"选股评分","detail.notEvaluated":"未评估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时","glossary.title":"术语表","glossary.search":"搜索术语","glossary.definition":"定义","glossary.calc":"计算口径","glossary.empty":"无匹配术语","glossary.cat.macro":"宏观","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技术","glossary.cat.shortterm":"短线","glossary.cat.datasource":"数据源","glossary.cat.product":"产品","glossary.term.merrill_clock":"美林时钟","glossary.term.recovery":"复苏期","glossary.term.overheat":"过热期","glossary.term.stagflation":"滞胀期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五维评分","glossary.term.momentum":"动量策略","glossary.term.reversal":"反转策略","glossary.term.quality":"质量策略","glossary.term.capital_flow":"资金流策略","glossary.term.consensus":"共识榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰减","glossary.term.zscore":"Z-Score","glossary.term.pe":"市盈率(PE)","glossary.term.pb":"市净率(PB)","glossary.term.roe":"净资产收益率(ROE)","glossary.term.market_cap":"总市值","glossary.term.ma":"均线(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"换手率","glossary.term.zt_pool":"涨停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龙虎榜","glossary.term.ladder":"连板","glossary.term.promote_rate":"晋级率","glossary.term.money_effect":"赚钱效应","glossary.term.sentiment_cycle":"情绪周期","glossary.term.sector_flow":"板块资金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源热备","glossary.term.pit":"PIT(时点数据)","glossary.term.survivorship":"幸存者偏差","glossary.term.ai_eval":"AI评估","glossary.term.ai_chat":"智能问股","glossary.term.backtest":"回测","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"样本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"胜率","glossary.term.portfolio":"模拟组合","glossary.term.data_quality":"数据质量分","glossary.term.rbac":"RBAC权限","glossary.term.sector_rotation":"行业轮动","glossary.term.index_enhance":"指数增强","glossary.term.multifactor":"多因子","glossary.term.volatility":"波动率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林带","glossary.term.dragon_head":"龙头股","glossary.term.data_freshness":"数据新鲜度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantEn=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.ruleScore":"Rule score","detail.notEvaluated":"Not scored","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration","glossary.title":"Glossary","glossary.search":"Search terms","glossary.definition":"Definition","glossary.calc":"Calculation","glossary.empty":"No matching terms","glossary.cat.macro":"Macro","glossary.cat.strategy":"Strategy","glossary.cat.factor":"Factor","glossary.cat.tech":"Technical","glossary.cat.shortterm":"Short-term","glossary.cat.datasource":"Data Source","glossary.cat.product":"Product","glossary.term.merrill_clock":"Merrill Clock","glossary.term.recovery":"Recovery","glossary.term.overheat":"Overheat","glossary.term.stagflation":"Stagflation","glossary.term.recession":"Recession","glossary.term.merrill_score":"Five-Dimension Score","glossary.term.momentum":"Momentum","glossary.term.reversal":"Reversal","glossary.term.quality":"Quality","glossary.term.capital_flow":"Capital Flow","glossary.term.consensus":"Consensus Board","glossary.term.in_pool":"In Pool","glossary.term.out_pool":"Out of Pool","glossary.term.factor":"Factor","glossary.term.factor_ic":"Factor IC","glossary.term.ic_decay":"IC Decay","glossary.term.zscore":"Z-Score","glossary.term.pe":"P/E Ratio","glossary.term.pb":"P/B Ratio","glossary.term.roe":"ROE","glossary.term.market_cap":"Market Cap","glossary.term.ma":"Moving Average","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"Volume Ratio","glossary.term.turnover":"Turnover Rate","glossary.term.zt_pool":"Limit-Up Pool","glossary.term.zha_ban":"Failed Limit-Up","glossary.term.dt_pool":"Limit-Down Pool","glossary.term.lhb":"Dragon-Tiger List","glossary.term.ladder":"Consecutive Limit-Ups","glossary.term.promote_rate":"Promotion Rate","glossary.term.money_effect":"Money Effect","glossary.term.sentiment_cycle":"Sentiment Cycle","glossary.term.sector_flow":"Sector Flow","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"Triple-Source Failover","glossary.term.pit":"PIT (Point-in-Time)","glossary.term.survivorship":"Survivorship Bias","glossary.term.ai_eval":"AI Evaluation","glossary.term.ai_chat":"AI Stock Chat","glossary.term.backtest":"Backtest","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"Out-of-Sample","glossary.term.sharpe":"Sharpe Ratio","glossary.term.drawdown":"Drawdown","glossary.term.winrate":"Win Rate","glossary.term.portfolio":"Paper Portfolio","glossary.term.data_quality":"Data Quality Grade","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"Sector Rotation","glossary.term.index_enhance":"Index Enhancement","glossary.term.multifactor":"Multi-Factor","glossary.term.volatility":"Volatility","glossary.term.dividend_yield":"Dividend Yield","glossary.term.bollinger":"Bollinger Bands","glossary.term.dragon_head":"Leading Stock","glossary.term.data_freshness":"Data Freshness"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.Quantja=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.ruleScore":"選股スコア","detail.notEvaluated":"未評価","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間","glossary.title":"用語集","glossary.search":"用語検索","glossary.definition":"定義","glossary.calc":"計算方法","glossary.empty":"該当する用語がありません","glossary.cat.macro":"マクロ","glossary.cat.strategy":"戦略","glossary.cat.factor":"ファクター","glossary.cat.tech":"テクニカル","glossary.cat.shortterm":"短期","glossary.cat.datasource":"データソース","glossary.cat.product":"プロダクト","glossary.term.merrill_clock":"メリルクロック","glossary.term.recovery":"回復期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"スタグフレーション","glossary.term.recession":"景気後退","glossary.term.merrill_score":"5次元スコア","glossary.term.momentum":"モメンタム","glossary.term.reversal":"リバーサル","glossary.term.quality":"クオリティ","glossary.term.capital_flow":"資金フロー","glossary.term.consensus":"コンセンサス","glossary.term.in_pool":"新規採用","glossary.term.out_pool":"除外","glossary.term.factor":"ファクター","glossary.term.factor_ic":"ファクターIC","glossary.term.ic_decay":"IC減衰","glossary.term.zscore":"Zスコア","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"時価総額","glossary.term.ma":"移動平均","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"出来高倍率","glossary.term.turnover":"回転率","glossary.term.zt_pool":"ストップ高","glossary.term.zha_ban":"ストップ高失敗","glossary.term.dt_pool":"ストップ安","glossary.term.lhb":"竜虎榜","glossary.term.ladder":"連続ストップ高","glossary.term.promote_rate":"昇格率","glossary.term.money_effect":"マネー効果","glossary.term.sentiment_cycle":"センチメントサイクル","glossary.term.sector_flow":"セクターフロー","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"三重冗長","glossary.term.pit":"PIT","glossary.term.survivorship":"サバイバーシップバイアス","glossary.term.ai_eval":"AI評価","glossary.term.ai_chat":"AI株チャット","glossary.term.backtest":"バックテスト","glossary.term.walkforward":"ウォークフォワード","glossary.term.oos":"サンプル外","glossary.term.sharpe":"シャープレシオ","glossary.term.drawdown":"ドローダウン","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬ポートフォリオ","glossary.term.data_quality":"データ品質","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"セクターローテーション","glossary.term.index_enhance":"インデックス強化","glossary.term.multifactor":"マルチファクター","glossary.term.volatility":"ボラティリティ","glossary.term.dividend_yield":"配当利回り","glossary.term.bollinger":"ボリンジャーバンド","glossary.term.dragon_head":"リーダー株","glossary.term.data_freshness":"データ鮮度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",a),a});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.Quantko=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.ruleScore":"종목 점수","detail.notEvaluated":"미평가","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간","glossary.title":"용어집","glossary.search":"용어 검색","glossary.definition":"정의","glossary.calc":"계산 방법","glossary.empty":"일치하는 용어가 없습니다","glossary.cat.macro":"거시","glossary.cat.strategy":"전략","glossary.cat.factor":"팩터","glossary.cat.tech":"기술적","glossary.cat.shortterm":"단기","glossary.cat.datasource":"데이터 소스","glossary.cat.product":"제품","glossary.term.merrill_clock":"메릴 클럭","glossary.term.recovery":"회복기","glossary.term.overheat":"과열기","glossary.term.stagflation":"스태그플레이션","glossary.term.recession":"경기 침체","glossary.term.merrill_score":"5차원 점수","glossary.term.momentum":"모멘텀","glossary.term.reversal":"리버설","glossary.term.quality":"퀄리티","glossary.term.capital_flow":"자금 흐름","glossary.term.consensus":"컨센서스","glossary.term.in_pool":"신규 편입","glossary.term.out_pool":"제외","glossary.term.factor":"팩터","glossary.term.factor_ic":"팩터 IC","glossary.term.ic_decay":"IC 감쇠","glossary.term.zscore":"Z-Score","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"시가총액","glossary.term.ma":"이동평균","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"거래량비","glossary.term.turnover":"회전율","glossary.term.zt_pool":"상한가 풀","glossary.term.zha_ban":"상한가 실패","glossary.term.dt_pool":"하한가 풀","glossary.term.lhb":"용호방","glossary.term.ladder":"연속 상한가","glossary.term.promote_rate":"승격률","glossary.term.money_effect":"돈벌이 효과","glossary.term.sentiment_cycle":"심리 사이클","glossary.term.sector_flow":"섹터 자금","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"삼원 이중화","glossary.term.pit":"PIT","glossary.term.survivorship":"생존자 편향","glossary.term.ai_eval":"AI 평가","glossary.term.ai_chat":"AI 주식 채팅","glossary.term.backtest":"백테스트","glossary.term.walkforward":"워크포워드","glossary.term.oos":"샘플 외","glossary.term.sharpe":"샤프 비율","glossary.term.drawdown":"드로다운","glossary.term.winrate":"승률","glossary.term.portfolio":"모의 포트폴리오","glossary.term.data_quality":"데이터 품질","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"섹터 로테이션","glossary.term.index_enhance":"지수 강화","glossary.term.multifactor":"멀티팩터","glossary.term.volatility":"변동성","glossary.term.dividend_yield":"배당수익률","glossary.term.bollinger":"볼린저 밴드","glossary.term.dragon_head":"리더주","glossary.term.data_freshness":"데이터 신선도"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",a),a});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantzhTW=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.ruleScore":"選股評分","detail.notEvaluated":"未評估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時","glossary.title":"術語表","glossary.search":"搜尋術語","glossary.definition":"定義","glossary.calc":"計算口徑","glossary.empty":"無相符術語","glossary.cat.macro":"總體","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技術","glossary.cat.shortterm":"短線","glossary.cat.datasource":"資料源","glossary.cat.product":"產品","glossary.term.merrill_clock":"美林時鐘","glossary.term.recovery":"復甦期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"滯脹期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五維評分","glossary.term.momentum":"動量策略","glossary.term.reversal":"反轉策略","glossary.term.quality":"質量策略","glossary.term.capital_flow":"資金流策略","glossary.term.consensus":"共識榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰減","glossary.term.zscore":"Z-Score","glossary.term.pe":"本益比(PE)","glossary.term.pb":"股價淨值比(PB)","glossary.term.roe":"股東權益報酬率(ROE)","glossary.term.market_cap":"總市值","glossary.term.ma":"均線(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"換手率","glossary.term.zt_pool":"漲停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龍虎榜","glossary.term.ladder":"連板","glossary.term.promote_rate":"晉級率","glossary.term.money_effect":"賺錢效應","glossary.term.sentiment_cycle":"情緒週期","glossary.term.sector_flow":"板塊資金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源熱備","glossary.term.pit":"PIT(時點資料)","glossary.term.survivorship":"倖存者偏差","glossary.term.ai_eval":"AI評估","glossary.term.ai_chat":"智能問股","glossary.term.backtest":"回測","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"樣本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬組合","glossary.term.data_quality":"資料品質分","glossary.term.rbac":"RBAC權限","glossary.term.sector_rotation":"產業輪動","glossary.term.index_enhance":"指數增強","glossary.term.multifactor":"多因子","glossary.term.volatility":"波動率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林帶","glossary.term.dragon_head":"龍頭股","glossary.term.data_freshness":"資料新鮮度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",a),a});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantPinyin=e()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},e=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let f=[];function t(_){const x=String(_||"");let L="";for(const P of x){const v=a[P];v?L+=v.charAt(0):/[a-zA-Z0-9]/.test(P)&&(L+=P.toLowerCase())}return L}function c(_){const x=String(_||"");let L="";for(const P of x){const v=a[P];v?L+=v:/[a-zA-Z0-9]/.test(P)&&(L+=P.toLowerCase())}return L}function u(_){return String(_||"").trim().toLowerCase()}function S(_,x){const L=(x.code||"").toLowerCase();return/^\d+$/.test(_)?L.indexOf(_)!==-1:/[\u4e00-\u9fa5]/.test(_)?(x.name||"").toLowerCase().indexOf(_)!==-1:L.indexOf(_)!==-1||(x.initials||t(x.name)).indexOf(_)!==-1||(x.pinyin||c(x.name)).indexOf(_)!==-1}function o(_){const x={},L=[],P=function(v,n,g){!v||x[v]||(x[v]=!0,L.push({code:v,name:n||v,source:g||"core",initials:t(n||v),pinyin:c(n||v)}))};return e.forEach(function(v){P(v.code,v.name,"core")}),(_||[]).forEach(function(v){P(v.code,v.name,"extra")}),L}function l(_,x){const L=u(_);if(!L||!x||!x.length)return[];const P=L.split(/[\s,，、;；]+/).filter(Boolean);return P.length?x.filter(function(v){return P.every(function(n){return S(n,v)})}).slice(0,20).map(function(v){return{code:v.code,name:v.name,source:v.source||"core"}}):[]}function h(_){Array.isArray(_)&&(f=f.concat(_))}function r(){return f.slice()}function E(){return o(f)}function y(_){return l(_,E())}const k={CHAR_PINYIN:a,CORE_STOCKS:e,toPinyinInitials:t,toPinyin:c,normalizeQuery:u,matchToken:S,buildStockIndex:o,searchStocksByQuery:l,registerExtraStocks:h,getExtraStocks:r,getStockIndex:E,searchCoreStocks:y};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=k),k});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantPreferences=e()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",e={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},f=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],t={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function c(n){return n=parseInt(n,10),isNaN(n)?!1:n===-1||n>=0&&n<=360}const u={light:"classic-white",dark:"dark-pro"};function S(){if(typeof localStorage>"u")return{};try{const n=localStorage.getItem(a);if(!n)return{};const g=JSON.parse(n);return g&&typeof g=="object"?g:{}}catch{return{}}}function o(n){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(n))}catch{}}function l(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function h(){const n=Object.assign({},e,S()),g={};return f.forEach(function(I){const K=n[I];g[I]=I==="theme_hue"?c(K)?parseInt(K,10):e[I]:t[I].indexOf(K)!==-1?K:e[I]}),g}function r(n){if(f.indexOf(n)!==-1)return h()[n]}function E(n,g){return f.indexOf(n)===-1?!1:n==="theme_hue"?c(g):t[n].indexOf(g)!==-1}function y(n,g){if(!E(n,g))return!1;const I=S();return I[n]=g,o(I),l()&&_({[n]:g}),!0}function k(n){if(!n||typeof n!="object")return!1;const g={};if(Object.keys(n).forEach(function(K){E(K,n[K])&&(g[K]=n[K])}),!Object.keys(g).length)return!1;const I=Object.assign({},S(),g);return o(I),l()&&_(g),!0}function _(n){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:n})}).catch(function(){})}catch{}}async function x(){const n=h();if(!l()||typeof fetch>"u")return n;try{const g=await fetch("/api/user_config/preferences");if(g.ok){const I=await g.json();if(I.success&&I.preferences){const K=I.preferences;f.forEach(function(q){const O=K[q];if(q==="theme_hue"){c(O)&&(n[q]=parseInt(O,10));return}t[q].indexOf(O)!==-1&&(n[q]=O)}),o(n)}}}catch(g){typeof console<"u"&&console.warn&&console.warn("[preferences] 读取服务端偏好失败, 回退本地偏好:",g&&g.message)}return n}function L(n){const g=n||r("info_density")||"comfortable",I=t.info_density.indexOf(g)!==-1?g:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",I),I}function P(n){const g=n||r("theme")||"system";if(g==="system"){let I=!1;return typeof window<"u"&&window.matchMedia&&(I=window.matchMedia("(prefers-color-scheme: dark)").matches),I?"dark":"light"}return g==="dark"||g==="light"?g:"light"}const v={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:e,PREFERENCE_KEYS:f,PREFERENCE_VALUES:t,THEME_MODE_TO_THEME:u,getLocal:h,getPreference:r,isValidValue:E,setPreference:y,setPreferences:k,saveToBackend:_,loadPreferences:x,resolveTheme:P,applyDensity:L};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=v),v});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantRecent=e()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function f(){if(typeof localStorage>"u")return[];try{const h=localStorage.getItem(a);if(!h)return[];const r=JSON.parse(h);return Array.isArray(r)?r:[]}catch{return[]}}function t(h){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(h))}catch{}}function c(h,r){if(!h)return!1;let E=f().filter(function(y){return y.code!==h});return E.unshift({code:h,name:(r||"").toString().slice(0,32),ts:Date.now()}),E.length>10&&(E=E.slice(0,10)),t(E),!0}function u(){return f().slice(0,10)}function S(h){t(f().filter(function(r){return r.code!==h}))}function o(){t([])}const l={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:c,getRecentViewed:u,removeRecent:S,clearRecent:o};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=l),l});(function(){const a=typeof Vue<"u"?Vue:{},{ref:e,computed:f,watch:t,onMounted:c,nextTick:u}=a;function S(m,T={}){if(typeof m=="string"&&m.startsWith("/api/")){const d=localStorage.getItem("quant_token");if(d)return{...T,headers:{...T.headers||{},Authorization:"Bearer "+d}}}return T}async function o(m,T={}){const d=S(m,T),N={"Content-Type":"application/json",...d.headers},le=(T.method||"GET").toUpperCase(),X=le+"|"+m,R=async()=>{const G=await fetch(m,{...d,headers:N});if(G.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!G.ok){let oe="";try{const pe=await G.json();oe=pe&&pe.detail||""}catch{}throw Object.assign(new Error(oe||"请求失败（HTTP "+G.status+"）"),{status:G.status})}return await G.json()};try{const G=T.noLoading?R:()=>g(R);return le==="GET"&&!T.noDedupe?await L(X,G):await G()}catch(G){throw G.message==="登录已过期"?G:(console.error("[apiFetch] "+m+":",G.message),Object.assign(G,{_formatted:I(G,G.status)}))}}function l(){return new Date().toISOString().split("T")[0]}function h(m){return m?m.split("T")[0]:""}function r(m,T="info",d=3e3){let N=document.querySelector(".toast-container");N||(N=document.createElement("div"),N.className="toast-container",document.body.appendChild(N));const le=document.createElement("div");le.className=`toast toast-${T}`,le.textContent=m,N.appendChild(le),setTimeout(()=>{le.classList.add("leaving"),setTimeout(()=>le.remove(),300)},d)}function E(m,T=300){let d;return function(...N){clearTimeout(d),d=setTimeout(()=>m.apply(this,N),T)}}function y(m,T=300){let d=!1;return function(...N){d||(m.apply(this,N),d=!0,setTimeout(()=>{d=!1},T))}}async function k(m,T=3e3,d=""){const N=new Promise((le,X)=>setTimeout(()=>X(new Error("timeout")),T));try{return await Promise.race([m,N])}catch(le){console.warn(`[timeout] ${d||"task"} failed:`,le.message)}}const _=new Map;function x(){return _.clear(),!0}function L(m,T){if(!m||typeof T!="function")return Promise.reject(new Error("bad dedupe args"));if(_.has(m))return _.get(m);const d=Promise.resolve().then(T).finally(()=>{_.delete(m)});return _.set(m,d),d}let P=0;function v(){return P=0,!0}function n(){return P}async function g(m){P++;try{return await m()}finally{P--}}function I(m,T){if(!m)return"请求失败";if(m&&typeof m=="object"&&m.detail)return String(m.detail);if(typeof m=="string"&&m)return m;if(m&&m.message){const d=String(m.message);return/Failed to fetch|fetch failed|networkerror/i.test(d)?"网络连接失败，请检查网络后重试":d}return T?"请求失败（HTTP "+T+"）":"请求失败"}function K(m,T){if(m===T)return!0;try{return JSON.stringify(m)===JSON.stringify(T)}catch{return!1}}function q(m,T,d){const N=(m||"GET").toUpperCase();let le="";if(d)try{const X={};Object.keys(d).sort().forEach(R=>{X[R]=d[R]}),le=JSON.stringify(X)}catch{le=""}return N+"|"+T+"|"+le}class O{constructor(){this._map=new Map,this._exp=new Map}get(T){const d=this._exp.get(T);if(d!=null){if(Date.now()>d){this.delete(T);return}return this._map.get(T)}}set(T,d,N){return this._map.set(T,d),this._exp.set(T,Date.now()+(N>0?N:-1)),d}delete(T){this._map.delete(T),this._exp.delete(T)}clear(){this._map.clear(),this._exp.clear()}has(T){return this.get(T)!==void 0}get size(){return this._map.size}}function F(m){const T=new O,d=m!=null&&m>0?m:15e3;return{store:T,defaultTtl:d,get:N=>T.get(N),set:(N,le,X)=>T.set(N,le,X??d),delete:N=>T.delete(N),clear:()=>T.clear(),size:()=>T.size}}const $=new Set;async function H(m){const T=m&&m.cache,d=m&&m.key,N=m&&(m.fetchFn||m.fetcher),le=m&&m.ttl;if(!T||!d||typeof N!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if($.has(d))return{ok:!1,changed:!1,skipped:!0,fresh:null};$.add(d);try{const X=T.get(d);let R;try{R=await N()}catch(oe){return m.onError&&m.onError(oe),{ok:!1,changed:!1,fresh:null}}const G=X!==void 0&&!K(X,R);return T.set(d,R,le),m.apply&&m.apply(R,X),X!==void 0&&(G?m.onChanged&&m.onChanged(R,X):m.onUnchanged&&m.onUnchanged(R,X)),{ok:!0,changed:G,fresh:R}}finally{$.delete(d)}}const W=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function Z(m,T={}){if(m==null)return"";const d=T&&T.allow||W,N=new Set(d.map(G=>String(G).toUpperCase()));let le;try{le=new DOMParser().parseFromString(String(m),"text/html")}catch{return String(m).replace(/[<>&]/g,oe=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[oe])}const X=le.body||le;function R(G){Array.from(G.childNodes).forEach(oe=>{if(oe.nodeType===1){const pe=String(oe.tagName).toUpperCase();if(N.has(pe))Array.from(oe.attributes).forEach(Se=>{const J=Se.name.toLowerCase(),ue=(Se.value||"").trim().toLowerCase();(J.startsWith("on")||(J==="href"||J==="src"||J==="xlink:href")&&ue.startsWith("javascript:")||J==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(ue))&&oe.removeAttribute(Se.name),J==="href"&&!/^(https?:|mailto:|#|\/)/.test(ue)&&oe.removeAttribute("href")}),pe==="A"&&oe.setAttribute("rel","noopener noreferrer"),R(oe);else{const Se=oe.parentNode;for(;oe.firstChild;)Se.insertBefore(oe.firstChild,oe);Se.removeChild(oe)}}else if(oe.nodeType!==3){if(oe.nodeType===8)oe.parentNode&&oe.parentNode.removeChild(oe);else if(oe.nodeType===4){const pe=le.createTextNode(oe.nodeValue||"");oe.parentNode&&oe.parentNode.replaceChild(pe,oe)}}})}return R(X),X.innerHTML}const te="/api/openapi",B="/api/market/ws/quotes",U=1,C=2.5,s="数据不可达",b="实时不可用，不刷新";function i(){const m=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",T=typeof location<"u"?location.host:"localhost:8001";return m+"//"+T+B}function p(m,T){if(!m)return null;const d=T||{riseSpeed:U,volumeRatio:C},N=d.riseSpeed!=null?d.riseSpeed:U,le=d.volumeRatio!=null?d.volumeRatio:C,X=parseFloat(m.rise_speed);if(!isNaN(X)&&Math.abs(X)>N)return X>0?"涨速预警":"跌速预警";const R=parseFloat(m.volume_ratio);return!isNaN(R)&&R>le?"放量预警":null}function ee(m){const T=Number(m);return m==null||isNaN(T)?null:T}const w={apiFetch:o,withAuthHeaders:S,getToday:l,formatDate:h,withTimeout:k,showToast:r,debounce:E,throttle:y,resetInFlight:x,dedupeRequest:L,resetLoading:v,loadingCount:n,withLoading:g,formatApiError:I,jsonEquals:K,makeCacheKey:q,CacheStore:O,createTtlCache:F,silentRefresh:H,sanitizeHtml:Z,OPENAPI_ROUTE_BASE:te,REALTIME_WS_PATH:B,WARN_RISE_SPEED_THRESHOLD:U,WARN_VOLUME_RATIO_THRESHOLD:C,REALTIME_DEGRADED_TEXT:s,REALTIME_FALLBACK_TEXT:b,buildRealtimeWsUrl:i,checkQuoteWarning:p,quoteFmt:{price:function(m){const T=ee(m);return T===null?"--":T.toFixed(2)},pct:function(m){const T=ee(m);return T===null?"--":(T>0?"+":"")+T.toFixed(2)+"%"},num:function(m){const T=ee(m);return T===null?"--":T.toFixed(2)},color:function(m){const T=m?m.change_pct:null,d=ee(T);return d===null?"":d>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=w),typeof Me<"u"&&Me.exports&&(Me.exports=w)})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantTabsCore=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(E,y){return E+"/"+y}function f(E,y,k,_){var x=E[y]||[],L=x.findIndex(function(n){return n.subPage===k});if(L!==-1)return{groups:E,activeKey:e(y,k)};var P=x.concat([{subPage:k,title:_}]);P.length>a&&(P=c(P));var v=Object.assign({},E,t({},y,P));return{groups:v,activeKey:e(y,k)}}function t(E,y,k){return E[y]=k,E}function c(E){if(E.length<=a)return E;var y=E.length>1?1:0;return E.filter(function(k,_){return _!==y})}function u(E,y,k,_){var x=E[y]||[],L=x.findIndex(function(g){return g.subPage===k});if(L===-1)return{groups:E,nextActive:null};var P=x.filter(function(g){return g.subPage!==k}),v=Object.assign({},E,t({},y,P)),n=null;return k===_&&(P[L]?n=P[L].subPage:P[L-1]?n=P[L-1].subPage:n=null),{groups:v,nextActive:n}}function S(E){return E&&E.length?E[0]:""}function o(E,y){return E[y]||[]}function l(E,y,k){var _=E[y]||[],x=_.filter(function(P){return P.subPage===k}),L=Object.assign({},E,t({},y,x));return{groups:L,activeKey:x.length?e(y,x[0].subPage):null}}function h(E,y){var k=Object.assign({},E,t({},y,[]));return{groups:k,activeKey:null}}function r(E,y,k,_){var x=(E[y]||[]).slice();if(k<0||k>=x.length)return{groups:E};var L=x.splice(k,1)[0];return x.splice(Math.max(0,Math.min(_,x.length)),0,L),{groups:Object.assign({},E,t({},y,x))}}return{MAX_TABS:a,openTab:f,closeTab:u,getDefaultTab:S,tabsOf:o,evictOldest:c,closeOthers:l,closeAll:h,reorder:r,keyOf:e}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var _n=typeof Me=="object"&&Me.exports?Me.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;_n&&(window.__quantModules.tabsCore=_n)}(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantNavModeCore=e()})(typeof self<"u"?self:void 0,function(){var a=["subnav","tree","toptab"],e="toptab",f="nav_mode";function t(r){return a.indexOf(r)!==-1?r:e}function c(r){return t(r)==="subnav"}function u(r){return t(r)==="tree"}function S(r){return t(r)==="toptab"}function o(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function l(){var r=o(),E=e;if(r)try{E=t(r.getItem(f))}catch{}return{navMode:E}}function h(r){var E=o();if(!(!E||!r))try{r.navMode!==void 0&&E.setItem(f,t(r.navMode))}catch{}}return{NAV_MODES:a,DEFAULT_NAV_MODE:e,normalizeNavMode:t,subnavVisible:c,treeChildrenVisible:u,topTabsVisible:S,readPrefs:l,writePrefs:h}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var xn=typeof Me=="object"&&Me.exports?Me.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;xn&&(window.__quantModules.navModeCore=xn)}(function(){function e(i,p){if(!Array.isArray(i)||i.length<=p)return i;const ee=[],z=i.length/p*2;for(let w=0;w<i.length;w+=z){const m=Math.floor(w),T=Math.min(i.length,Math.ceil(w+z));let d=1/0,N=-1,le=-1/0,X=-1;for(let R=m;R<T;R++){const G=i[R];if(!G)continue;const oe=G[3]!=null?Number(G[3]):1/0,pe=G[4]!=null?Number(G[4]):-1/0;oe<d&&(d=oe,N=R),pe>le&&(le=pe,X=R)}N>=0&&ee.push(i[N]),X>=0&&X!==N&&ee.push(i[X])}return ee}let f=null;function t(){return typeof echarts<"u"?Promise.resolve():(f||(f=new Promise(function(i,p){const ee=document.createElement("script");ee.src="/static/lib/echarts.min.js",ee.async=!0,ee.onload=function(){typeof echarts<"u"?i():p(new Error("echarts 加载后未定义"))},ee.onerror=function(){p(new Error("echarts.min.js 加载失败"))},document.head.appendChild(ee)})),f)}function c(){const i=getComputedStyle(document.documentElement);return{primary:i.getPropertyValue("--primary-color").trim()||"#2563eb",up:i.getPropertyValue("--color-up").trim()||"#43e97b",down:i.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:i.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:i.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const u=i=>{try{return typeof getComputedStyle!="function"||typeof document>"u"?"":(getComputedStyle(document.documentElement).getPropertyValue(i)||"").trim()}catch{return""}};function S(){return{up:u("--color-up")||"#E63946",down:u("--color-down")||"#2E7D32",neutral:u("--color-neutral")||"#43a047",accent:u("--color-accent")||"#F59E0B",risk:u("--color-danger")||"#C62828",warn:u("--color-warning")||"#FF9800",success:u("--color-success")||"#4CAF50",primary:u("--qc-primary-600")||"#b8922a",grid:u("--chart-split")||"#e2e8f0",axis:u("--chart-axis")||"#cbd5e1",bg:u("--chart-bg")||"transparent",series:[u("--qc-primary-600")||"#b8922a",u("--qc-primary-500")||"#c49b2e",u("--qc-primary-700")||"#8f6f1f",u("--qc-primary-400")||"#d4b352",u("--color-up")||"#E63946",u("--color-down")||"#2E7D32",u("--color-accent")||"#F59E0B",u("--qc-neutral-400")||"#b8ae9f"]}}function o(i,p,ee,z=!1,w=!1){if(!p||p.length===0)return;p.length>2e3&&(p=e(p,2e3));const m=p.map(se=>typeof se[0]=="string"&&se[0].indexOf("-")>=0?se[0]:se[0].slice(0,4)+"-"+se[0].slice(4,6)+"-"+se[0].slice(6,8)),T=c(),d={ma5:u("--color-accent")||"#F59E0B",ma10:u("--color-primary")||"#3B82F6",ma20:u("--color-warning")||"#8B5CF6",ma60:u("--color-success")||"#10B981"},N=p.map(se=>[se[1],se[2],se[3],se[4]]),le=p.map(se=>se[5]),X=p.map(se=>se[6]),R=p.map(se=>se[7]),G=p.map(se=>se[8]),oe=p.map(se=>se[9]),pe=p.map(se=>se[10]),J=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",ue=T.borderLight,Re={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:T.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:J,borderColor:ue,textStyle:{color:T.textSecondary,fontSize:12},formatter:function(se){if(!se||!se.length)return"";const ye=se[0].dataIndex,De=p[ye];if(!De)return"";const ve=i.getOption(),be=ve.legend&&ve.legend[0]&&ve.legend[0].selected||{},_e=Ie=>be[Ie]!==!1,ce=Ie=>Ie==null||isNaN(Ie)?"--":Number(Ie).toFixed(2),ae=Ie=>Ie==null||isNaN(Ie)?"--":(Number(Ie)/1e4).toFixed(2)+"万手",me=['<div style="font-weight:600;color:'+T.textSecondary+';">'+m[ye]+"</div>"];return me.push("开: "+ce(De[1])+"　收: "+ce(De[2])),me.push("低: "+ce(De[3])+"　高: "+ce(De[4])),me.push("成交量: "+ae(De[5])),De[6]!=null&&_e("MA5")&&me.push("MA5: "+ce(De[6])),De[7]!=null&&_e("MA10")&&me.push("MA10: "+ce(De[7])),De[8]!=null&&_e("MA20")&&me.push("MA20: "+ce(De[8])),De[9]!=null&&_e("MA60")&&me.push("MA60: "+ce(De[9])),De[10]!=null&&me.push("VOL_MA5: "+ae(De[10])),me.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:w?0:8,textStyle:{color:T.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:w?30:40,height:w?"48%":"52%"},{left:56,right:16,top:w?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:m,boundaryGap:!0,axisLine:{lineStyle:{color:ue}},axisLabel:{color:T.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:m,axisLabel:{show:!1},axisLine:{lineStyle:{color:ue}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:ue}},axisLabel:{color:T.textSecondary,fontSize:11,formatter:function(se){const ye=Math.round(se*100)/100;return ye%1===0?String(Math.round(ye)):ye.toFixed(2)}},splitLine:{lineStyle:{color:ue,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:ue}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,p.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:ue,textStyle:{color:T.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:N,itemStyle:{color:T.up,color0:T.down,borderColor:T.up,borderColor0:T.down}},{name:"MA5",type:"line",data:X,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:d.ma5}},{name:"MA10",type:"line",data:R,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:d.ma10}},{name:"MA20",type:"line",data:G,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:d.ma20}},{name:"MA60",type:"line",data:oe,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:d.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:le,itemStyle:{color:function(se){const ye=se.dataIndex;return p[ye][1]>=p[ye][2]?T.up:T.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:pe,smooth:!0,symbol:"none",lineStyle:{width:1,color:d.ma5,type:"dashed"}}]};i.setOption(Re,!0)}const l=new Map;function h(i){return l.has(i)||l.set(i,{chart:null,cache:null}),l.get(i)}async function r(i,p,ee,z=!1,w={}){await t();const m=h(i);let T=document.getElementById(i);if(!T)for(let d=0;d<16&&(await new Promise(N=>setTimeout(N,50)),T=document.getElementById(i),!T);d++);if(!T)throw new Error("无法找到图表容器: "+i);if(T.offsetWidth<50&&(T.style.minWidth="600px",T.style.minHeight="300px"),!m.chart||m.chart.isDisposed()||m.chart.getDom()!==T){if(m.chart)try{m.chart.dispose()}catch{}m.chart=echarts.init(T),m.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const d=w.onLegend;typeof d=="function"&&m.chart.on("legendselectchanged",N=>{N&&N.selected&&d(N.selected)})}return o(m.chart,p,ee,z,!!w.isMobile),m.cache={data:p,period:ee,isIndex:z,isMobile:!!w.isMobile},m.chart}function E(i){const p=l.get(i);p&&p.chart&&(p.chart.dispose(),p.chart=null,p.cache=null)}function y(i){const p=l.get(i);p&&p.chart&&p.chart.resize()}function k(i,p){const ee=l.get(i),z=ee&&ee.chart;if(z)if(p<=0)z.dispatchAction({type:"dataZoom",start:0,end:100});else{const T=Math.max(0,(60-p)/60*100);z.dispatchAction({type:"dataZoom",start:Math.round(T),end:100})}}function _(i){var z,w,m;const p=l.get(i);if(!p||!p.chart||!p.cache||p.chart.isDisposed())return;const ee=((m=(w=(z=p.chart.getOption())==null?void 0:z.legend)==null?void 0:w[0])==null?void 0:m.selected)||null;o(p.chart,p.cache.data,p.cache.period,p.cache.isIndex,p.cache.isMobile),ee&&p.chart.setOption({legend:{selected:ee}})}function x(i){const p=l.get(i);return p&&p.chart}const L=new Map;function P(i){return L.has(i)||L.set(i,{chart:null,cache:null}),L.get(i)}function v(i,p,ee={}){return t().then(function(){const z=P(i),w=document.getElementById(i);if(!w)throw new Error("无法找到图表容器: "+i);if(w.offsetWidth<50&&(w.style.minWidth="600px",w.style.minHeight="300px"),z.chart&&z.chart.getDom&&z.chart.getDom()!==w){try{z.chart.dispose()}catch{}z.chart=null}z.chart||(z.chart=echarts.init(w),z.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),z.resizeBound||(z.resizeBound=!0,window.addEventListener("resize",function(){z.chart&&!z.chart.isDisposed()&&z.chart.resize()})));const m=typeof p=="function"?p():p;return z.chart.setOption(m,!0),z.cache={buildOption:p,key:ee.key||""},z.chart})}function n(i){var w,m,T;const p=L.get(i);if(!p||!p.chart||!p.cache||p.chart.isDisposed())return;const ee=((T=(m=(w=p.chart.getOption())==null?void 0:w.legend)==null?void 0:m[0])==null?void 0:T.selected)||null,z=typeof p.cache.buildOption=="function"?p.cache.buildOption():p.cache.buildOption;p.chart.setOption(z,!0),ee&&z&&z.legend&&z.legend.selected&&p.chart.setOption({legend:{selected:ee}})}function g(i){const p=L.get(i);p&&p.chart&&(p.chart.dispose(),p.chart=null,p.cache=null)}function I(i){const p=L.get(i);p&&p.chart&&p.chart.resize()}const K=new Map;function q(i){return K.has(i)||K.set(i,{chart:null,cache:null}),K.get(i)}function O(i,p,ee={}){return t().then(function(){const z=q(i),w=document.getElementById(i);if(!w)return null;if(w.offsetWidth<50&&(w.style.minWidth="600px",w.style.minHeight="300px"),z.chart&&z.chart.getDom&&z.chart.getDom()!==w){try{z.chart.dispose()}catch{}z.chart=null}z.chart||(z.chart=echarts.init(w),z.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),z.resizeBound||(z.resizeBound=!0,window.addEventListener("resize",function(){z.chart&&!z.chart.isDisposed()&&z.chart.resize()})));const m=typeof p=="function"?p():p;return z.chart.setOption(m,!0),z.cache={buildOption:p,key:ee.key||""},z.chart})}function F(i){const p=K.get(i);if(!p||!p.chart||!p.cache||p.chart.isDisposed())return;const ee=typeof p.cache.buildOption=="function"?p.cache.buildOption():p.cache.buildOption;p.chart.setOption(ee,!0)}function $(i){const p=K.get(i);p&&p.chart&&(p.chart.dispose(),p.chart=null,p.cache=null)}function H(i){const p=K.get(i);p&&p.chart&&p.chart.resize()}const W=O,Z=F,te=$,B=H;function U(i,p,ee,z){z=z||{};const w=z.drawdownColor||u("--state-danger-solid")||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[z.navLabel||"净值",z.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:ee||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:z.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:z.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:z.navLabel||"净值",type:"line",data:i||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:z.ddLabel||"回撤",type:"line",yAxisIndex:1,data:p||[],showSymbol:!1,areaStyle:{opacity:.25,color:w},lineStyle:{color:w,type:"solid",width:1.5}}]}}function C(i,p){p=p||{};const ee=p.bandColor||u("--state-info-solid")||"#1976d2",z=i&&i.dates||[],w=i&&i.median||[],m=i&&i.q25||[],T=i&&i.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[p.medianLabel||"中位IC",p.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:z,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:p.medianLabel||"中位IC",type:"line",data:w,showSymbol:!1,lineStyle:{width:2,color:ee}},{name:p.bandLabel||"25–75分位",type:"line",data:m,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:ee,opacity:.12}},{name:"_bandH",type:"line",data:T.map(function(d,N){return d-(m[N]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:ee,opacity:.12}}]}}function s(i,p){p=p||{};const ee=p.color||u("--color-ai")||"#7c3aed",z=i&&i.dates||[],w=i&&i.value||[],m=i&&i.upper||[],T=i&&i.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[p.valueLabel||"情绪",p.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:z,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:p.valueLabel||"情绪",type:"line",data:w,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:ee}},{name:p.bandLabel||"过热/冰点带",type:"line",data:m,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:ee,opacity:.1}},{name:"_bandL",type:"line",data:T.map(function(d,N){return(m[N]||0)-d}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:ee,opacity:.1}}]}}const b={renderKlineChart:o,renderKlineTo:r,disposeKline:E,resizeKline:y,zoomKline:k,redrawKline:_,getKlineChart:x,renderBacktestTo:v,redrawBacktest:n,disposeBacktest:g,resizeBacktest:I,renderPortfolioTo:O,redrawPortfolio:F,disposePortfolio:$,resizePortfolio:H,renderSimpleChartTo:W,redrawSimpleChart:Z,disposeSimpleChart:te,resizeSimpleChart:B,buildNavDrawdownOption:U,buildIcBandOption:C,buildSentimentBandOption:s,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:S,init(){return{renderKlineChart:o,renderKlineTo:r,disposeKline:E,resizeKline:y,zoomKline:k,redrawKline:_,getKlineChart:x,renderBacktestTo:v,redrawBacktest:n,disposeBacktest:g,resizeBacktest:I,renderPortfolioTo:O,redrawPortfolio:F,disposePortfolio:$,resizePortfolio:H,renderSimpleChartTo:W,redrawSimpleChart:Z,disposeSimpleChart:te,resizeSimpleChart:B,buildNavDrawdownOption:U,buildIcBandOption:C,buildSentimentBandOption:s,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:S}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=b),typeof Me<"u"&&Me.exports&&(Me.exports={downsampleSeries:e,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:U,buildIcBandOption:C,buildSentimentBandOption:s})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:e,computed:f}=Vue,{configChanged:t,consensus:c}=a,u=e(null),S=e(""),o=e(null),l=e([]),h=e([]),r=e([]),E=e([]),y=e([]),k=e([]),_=e({});function x(xe){const Ce=y.value.indexOf(xe);Ce>=0?y.value.splice(Ce,1):y.value.push(xe)}const L=e("date"),P=e([]),v=e(!1),n=e(!1),g=e("watchlist"),I=e([]),K=e({vendors:[]}),q=e(""),O=e(!1),F=e(!1);function $(xe){if(!xe)return"";const Ce=String(xe),Oe=Ce.length;if(Oe<=4)return Ce[0]+"*".repeat(Oe-1);const Ne=Oe<=8?2:4;return Ce.slice(0,Ne)+"*".repeat(Oe-Ne-Ne)+Ce.slice(-Ne)}async function H(xe){let Ce;try{Ce=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ne=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:Ce,target:xe})})).json();if(Ne.success)return Ne.secret;ElementPlus.ElMessage.error(Ne.message||"查看失败")}catch(Oe){ElementPlus.ElMessage.error("查看失败: "+Oe.message)}return null}async function W(xe){if(xe._revealed){xe._revealed=!1,xe._masked=$(xe.api_key);return}const Ce=await H("ai:"+xe.vendor_key);Ce!==null&&(xe.api_key=Ce,xe._revealed=!0)}async function Z(xe){if(xe._editing){xe._editing=!1,xe._revealed=!1,xe.api_key&&(xe._masked=$(xe.api_key));return}xe._editing=!0;try{const Oe=await(await fetch("/api/ai/models?full=1")).json();if(Oe.success){const Ne=(Oe.data.vendors||[]).find(Je=>Je.vendor_key===xe.vendor_key);Ne&&(xe.api_key=Ne.api_key||"")}else Oe.message&&ElementPlus.ElMessage.error(String(Oe.message))}catch(Ce){ElementPlus.ElMessage.error("解锁失败: "+Ce.message)}}function te(xe){const{_fetching:Ce,_testing:Oe,_revealed:Ne,_masked:Je,_editing:$e,...Ye}=xe;return $e||(Ye.api_key=""),Ye.models=(xe.models||[]).map(rt=>{const{_testing:bt,testResult:xt,...Ht}=rt;return Ht}),Ye}async function B(){var xe;try{q.value="";const Ce=await fetch("/api/ai/models");if(Ce.status===401){q.value="请先登录后再查看模型配置";return}if(!Ce.ok){q.value=`服务器错误 (${Ce.status})`;return}const Oe=await Ce.json();Oe.success?(I.value=(((xe=Oe.data)==null?void 0:xe.vendors)||[]).map(Ne=>({...Ne,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:Ne.api_key||"",models:(Ne.models||[]).map(Je=>({...Je,_testing:!1,testResult:void 0}))})),q.value=""):q.value=Oe.message||"加载失败"}catch(Ce){q.value="网络错误: "+Ce.message}}async function U(){try{const Ce=await(await fetch("/api/ai/catalog")).json();Ce.success&&Ce.data&&(K.value=Ce.data)}catch(xe){console.warn("AI 厂商目录加载失败",xe)}}async function C(){F.value=!0;try{const Oe=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:I.value.map(te)})})).json();Oe.success?(I.value.forEach(Ne=>{Ne._editing=!1,Ne._revealed=!1,Ne.api_key&&(Ne._masked=$(Ne.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(Oe.message||"保存失败")}catch(xe){ElementPlus.ElMessage.error("保存失败: "+xe.message)}F.value=!1}async function s(xe,Ce){Ce._testing=!0;try{const Ne=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:xe.vendor_key,model:Ce.name,base_url:xe.base_url,api_key:xe.api_key,timeout:xe.timeout})});Ce.testResult=await Ne.json()}catch(Oe){Ce.testResult={success:!1,message:Oe.message}}Ce._testing=!1}async function b(){O.value=!0;for(const xe of I.value)for(const Ce of xe.models||[])xe.api_key?await s(xe,Ce):Ce.testResult={success:!1,message:"未配置 API Key"};O.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function i(xe){xe._fetching=!0;try{const Ne=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:xe.vendor_key,base_url:xe.base_url,api_key:xe.api_key,timeout:xe.timeout})})).json();if(Ne.success&&Array.isArray(Ne.models)){const Je=new Set((xe.models||[]).map($e=>$e.name));for(const $e of Ne.models)Je.has($e)||xe.models.push({name:$e,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${Ne.models.length} 个模型`)}else ElementPlus.ElMessage.error(Ne.message||"获取模型列表失败")}catch(Ce){ElementPlus.ElMessage.error("获取模型列表失败: "+Ce.message)}xe._fetching=!1}function p(xe){const Ce=(K.value.vendors||[]).find(Oe=>Oe.vendor_key===xe);if(Ce){if(I.value.some(Oe=>Oe.vendor_key===xe)){ElementPlus.ElMessage.warning("该厂商已存在");return}I.value.push({vendor_key:Ce.vendor_key,name:Ce.name,kind:Ce.kind,base_url:Ce.base_url,api_key:"",timeout:60,tier:Ce.tier||"",website:Ce.website||"",locked:!!Ce.locked,models:(Ce.models||[]).map(Oe=>({name:Oe,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${Ce.name}」，配置 API Key 后保存生效`)}}function ee(){I.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function z(xe){xe.models||(xe.models=[]),xe.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function w(xe,Ce){const Oe=xe.models[Ce];if(!(!Oe||Oe.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(Oe.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}xe.models.splice(Ce,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function m(xe){if(xe.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(xe.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const Ce=I.value.indexOf(xe);Ce>=0&&I.value.splice(Ce,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const T=e({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),d=e(!1),N=e(""),le=e(0),X=e(""),R=e(!1),G=e(""),oe=e(!1),pe=e(0),Se=e(0),J=e(""),ue=e({}),Re=e({}),se=e({}),ye=e({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),De=e("manual"),ve=f(()=>{const xe={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return xe[ye.value.provider]||xe.custom}),be={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function _e(xe){if(xe==="manual")return;const Ce=be[xe];Ce&&(ye.value.endpoint=Ce.endpoint,ye.value.model=Ce.model,t.value=!0)}function ce(){if(t.value=!0,ye.value.provider!=="codingplan"&&ye.value.provider!=="custom"){const xe=ve.value;xe&&(ye.value.endpoint=xe.endpoint,ye.value.model=xe.model)}else ye.value.provider==="codingplan"&&(ye.value.endpoint||(ye.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),ye.value.model||(ye.value.model="ark-code-latest"))}let ae=null;const me=8;async function Ie(){ae&&(ae.abort(),ae=null);const Ce=(c.value||[]).filter(Ye=>Ye.status==="new"||Ye.status==="out").filter(Ye=>!_.value[Ye.code]);if(Ce.length===0)return;const Oe=new AbortController;ae=Oe;let Ne=0;const Je=async()=>{for(;Ne<Ce.length;){const Ye=Ce[Ne++];try{const bt=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:Ye.code,stock_name:Ye.name,event_type:Ye.status==="new"?"enter":"exit"}),signal:Oe.signal})).json();bt.success&&bt.signal&&(_.value={..._.value,[Ye.code]:bt.signal})}catch(rt){if(rt.name==="AbortError")return}}},$e=Array.from({length:Math.min(me,Ce.length)},()=>Je());await Promise.all($e)}function Fe(){ae&&(ae.abort(),ae=null)}let Ke=0;async function _t(xe){const Ce=++Ke;try{const Ne=await(await fetch(`/api/ai/history/last/${encodeURIComponent(xe)}`)).json();if(Ce!==Ke)return;Ne.success&&Ne.data&&(u.value=Ne.data,S.value=Ne.data.evaluate_time,pt(xe,Ne.data),Pt(Ne.data))}catch{}}async function pt(xe,Ce){var Oe,Ne;try{const $e=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(xe)}&limit=2`)).json();if($e.success&&$e.data&&$e.data.length>=2){const Ye=$e.data[1],rt=((Oe=Ce.result)==null?void 0:Oe.total_score)||0,bt=((Ne=Ye.result)==null?void 0:Ne.total_score)||0;rt>0&&bt>0&&(o.value={prevScore:bt,currScore:rt,diff:rt-bt})}}catch(Je){console.warn("[refreshStrategyData] autoPoll failed:",Je)}}function Pt(xe){var Je;const Ce=((Je=xe.result)==null?void 0:Je.dimensions)||{},Oe=[],Ne=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const $e of Ne){const Ye=Ce[$e.key];Ye!==void 0&&Oe.push({icon:Ye>=$e.good?"check-circle-2":Ye>=$e.warn?"alert-triangle":"x-circle",label:`${$e.label} ${Math.round(Ye)}分`})}l.value=Oe}return{aiResult:u,lastEvalTime:S,evalHistoryComparison:o,checklistItems:l,aiHistory:h,selectedHistoryIds:r,expandedDates:E,expandedMonths:y,expandedStocks:k,poolSignals:_,toggleMonthExpand:x,aiHistoryView:L,selectedWatchlistCodes:P,showAutoEvaluateSettings:v,savingConfig:n,autoEvaluateScope:g,aiVendors:I,aiCatalog:K,aiModelsError:q,testingAllModels:O,savingAiModels:F,loadAiVendors:B,loadAiCatalog:U,saveAiVendors:C,saveAiModels:C,testVendorModel:s,testAllVendorModels:b,fetchVendorModels:i,addVendorFromCatalog:p,addCustomVendor:ee,addVendorModel:z,removeVendorModel:w,removeVendor:m,toggleVendorKeyReveal:W,toggleVendorEdit:Z,autoEvaluateConfig:T,aiLoading:d,aiEvalStage:N,aiEvalElapsed:le,aiEvalError:X,showBatchEvaluate:R,batchStocks:G,batchRunning:oe,batchTotal:pe,batchCompleted:Se,batchCurrent:J,batchStatuses:ue,batchResults:Re,batchEvalErrors:se,aiConfig:ye,selectedPreset:De,providerInfo:ve,aiPresets:be,applyPreset:_e,onProviderChange:ce,fetchPoolSignals:Ie,cancelPoolSignals:Fe,loadLastEvaluation:_t}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:e,computed:f,watch:t}=Vue,{configChanged:c,aiConfig:u,aiLoading:S,feishuConfig:o,currentTheme:l,changeTheme:h,autoEvaluateConfig:r,currentUser:E,strategyFilter:y,applyTheme:k,dashboardData:_,lastRefreshTime:x,saveAiModels:L}=a,P=function(ce){const ae=window.__quantModules&&window.__quantModules.themes;return ae&&ae.applyLegacyTheme?ae.applyLegacyTheme(ce):k(ce)},v=e(!1),n=e(!1),g=e(null),I=e(null),K=e(null),q=e(null),O=e({token:"",endpoint:"http://api.tushare.pro",timeout:30}),F=e("disconnected"),$=e({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),H=e({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),W=e(!1),Z=e(null),te=e(null),B=e("pending"),U=e("..."),C=e(!1),s=e({api_limit:600}),b=e(!1),i=e(!1);async function p(){try{const ae=await(await fetch("/api/system/rate-limit")).json();ae.success&&(s.value=ae.data)}catch(ce){console.warn("loadRateLimit failed:",ce)}}async function ee(){i.value=!0;try{const ae=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.value)})).json();ae.success?(b.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(ae.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{i.value=!1}}t(()=>[u.value.provider,u.value.apiKey,u.value.endpoint,u.value.model],()=>{c.value=!0},{deep:!0});async function z(){v.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(u.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u.value)})).json()).success?(c.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(ce){localStorage.setItem("quant_ai_config",JSON.stringify(u.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",ce)}finally{v.value=!1}}async function w(){S.value=!0;try{const ae=await(await fetch("/api/ai/test")).json();ae.success?ElementPlus.ElMessage.success(ae.message||"API连接正常"):ElementPlus.ElMessage.error(ae.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{S.value=!1}}function m(){const ce={ai:u.value,feishu:o.value,theme:l.value,export_time:new Date().toISOString()},ae=new Blob([JSON.stringify(ce,null,2)],{type:"application/json"}),me=URL.createObjectURL(ae),Ie=document.createElement("a");Ie.href=me,Ie.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Ie.click(),URL.revokeObjectURL(me),ElementPlus.ElMessage.success("配置已导出")}function T(ce){const ae=ce.target.files[0];if(!ae)return;const me=new FileReader;me.onload=async Ie=>{try{const Fe=JSON.parse(Ie.target.result);Fe.ai&&(u.value={...u.value,...Fe.ai},await z()),Fe.feishu&&(Object.assign(o.value,Fe.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Fe.feishu)})),Fe.theme&&(l.value=Fe.theme,h(Fe.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},me.readAsText(ae),ce.target.value=""}async function d(){v.value=!0;const ce=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:O.value,feishu:o.value,ai:u.value,rate_limit:s.value,auto_evaluate:r.value,theme:l.value}})}).then(Fe=>["userConfig",Fe.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O.value)}).then(Fe=>["tushare",Fe.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:$.value})}).then(Fe=>["datasource",Fe.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o.value)}).then(Fe=>["feishu",Fe.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u.value)}).then(Fe=>["ai",Fe.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.value)}).then(Fe=>["rateLimit",Fe.ok]),L().then(()=>["aiModels",!0],()=>["aiModels",!1])],ae=await Promise.allSettled(ce),me=ae.filter(Fe=>Fe.status==="fulfilled"&&Fe.value[1]).length,Ie=ae.filter(Fe=>Fe.status==="rejected"||Fe.status==="fulfilled"&&!Fe.value[1]).length;b.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(y.value.selected)),localStorage.setItem("quant_strategy_filter_mode",y.value.mode),E.value&&fetch(`/api/users/${E.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:l.value})}).catch(()=>{}),n.value=!1,g.value=new Date().toLocaleString("zh-CN"),v.value=!1,Ie>0&&console.error(`[saveAllConfig] ${me}/${me+Ie} 项保存成功，${Ie} 项失败`)}async function N(){try{const ae=await(await fetch("/api/user_config/config")).json();if(ae.success&&ae.config){const me=ae.config;me.tushare&&(O.value={...O.value,...me.tushare}),me.feishu&&(o.value={...o.value,...me.feishu}),me.ai&&(u.value={...u.value,...me.ai}),me.rate_limit&&(s.value={...s.value,...me.rate_limit}),me.auto_evaluate&&(r.value={...r.value,...me.auto_evaluate}),me.theme&&!localStorage.getItem("quant_theme")&&P(me.theme)}n.value=!1,b.value=!1}catch(ce){console.error("[resetAllConfig] 重新加载配置失败:",ce),n.value=!1}}async function le(){F.value="testing";try{const ae=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(F.value=ae.success?"connected":"disconnected",ae.success){const me=ae.data_count?` (获取到 ${ae.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+me)}else ElementPlus.ElMessage.error(ae.message||"连接失败")}catch{F.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function X(){try{const ae=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();F.value=ae.success?"connected":"disconnected"}catch{F.value="disconnected"}}async function R(){var ce;W.value=!0;try{const me=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();me.success?(Z.value=parseInt(((ce=me.message.match(/\d+/))==null?void 0:ce[0])||"0"),ElementPlus.ElMessage.success(me.message)):ElementPlus.ElMessage.error(me.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{W.value=!1}}async function G(){try{const ae=await(await fetch("/api/market/tushare/config")).json();ae.success&&ae.config&&(O.value={...O.value,...ae.config})}catch(ce){console.warn("loadTushareConfig failed:",ce)}}function oe(ce){if(!ce)return"";const ae=String(ce),me=ae.length;if(me<=4)return ae[0]+"*".repeat(me-1);const Ie=me<=8?2:4;return ae.slice(0,Ie)+"*".repeat(me-Ie-Ie)+ae.slice(-Ie)}async function pe(ce){let ae;try{ae=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ie=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:ae,target:ce})})).json();if(Ie.success)return Ie.secret;ElementPlus.ElMessage.error(Ie.message||"查看失败")}catch(me){ElementPlus.ElMessage.error("查看失败: "+me.message)}return null}async function Se(ce){const ae=$.value[ce];if(!ae)return;if(ae._revealed){ae._revealed=!1,ae._masked=oe(ae.token);return}const me=await pe(ce);me!==null&&(ae.token=me,ae._revealed=!0)}async function J(ce){const ae=$.value[ce];if(ae){if(ae._editing){ae._editing=!1,ae._revealed=!1,ae.token&&(ae._masked=oe(ae.token));return}ae._editing=!0;try{const me=await pe(ce);if(me===null){ae._editing=!1;return}ae.token=me,ae._revealed=!0}catch(me){ae._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+me.message)}}}async function ue(){try{const ae=await(await fetch("/api/market/datasource/config")).json();if(ae.success&&ae.config&&ae.config.sources){const me=ae.config.sources,Ie=Fe=>{const Ke={...$.value[Fe],...me[Fe]||{}};return Ke._editing=!1,Ke._revealed=!1,Ke._masked=Ke.token||"",Ke.token="",Ke};$.value={sxsc_tushare:Ie("sxsc_tushare"),tushare:Ie("tushare"),akshare:{...$.value.akshare,...me.akshare||{}}}}try{const Ie=await(await fetch("/api/market/datasource/status")).json();if(Ie.success&&Ie.status)for(const[Fe,Ke]of Object.entries(Ie.status))H.value[Fe]=Ke.connected?"connected":"disconnected"}catch{}}catch(ce){console.warn("loadDatasourceConfig failed:",ce)}}async function Re(){try{const ce={};for(const[ae,me]of Object.entries($.value)){const{_revealed:Ie,_masked:Fe,_editing:Ke,..._t}=me;!Ke&&ae!=="akshare"&&(_t.token=""),ce[ae]=_t}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:ce})}),n.value=!0}catch(ce){console.warn("saveDatasourceConfig failed:",ce)}}async function se(ce){H.value[ce]="testing";try{const ae=$.value[ce];ae&&ae._editing&&await Re();const Ie=await(await fetch(`/api/market/datasource/test/${ce}`,{method:"POST"})).json();H.value[ce]=Ie.success?"connected":"disconnected",Ie.success?ElementPlus.ElMessage.success(`${ce} 连接成功`):ElementPlus.ElMessage.error(`${ce}: ${Ie.message}`)}catch{H.value[ce]="disconnected",ElementPlus.ElMessage.error(`${ce} 连接失败`)}}async function ye(){try{const ae=await(await fetch("/api/feishu/config")).json();ae&&typeof ae=="object"&&(o.value={...o.value,...ae},I.value=JSON.parse(JSON.stringify(o.value)))}catch(ce){console.warn("loadFeishuConfig failed:",ce)}}async function De(){try{const ae=await(await fetch("/api/ai/config")).json();if(ae.success&&ae.data)u.value={...u.value,...ae.data};else{const me=localStorage.getItem("quant_ai_config");me&&(u.value=JSON.parse(me))}}catch{const ae=localStorage.getItem("quant_ai_config");ae&&(u.value=JSON.parse(ae))}}async function ve(){try{const ae=await(await fetch("/api/user_config/config")).json();if(ae.success&&ae.config){const me=ae.config;me.tushare&&(O.value={...O.value,...me.tushare}),me.datasource&&me.datasource.sources&&($.value={sxsc_tushare:{...$.value.sxsc_tushare,...me.datasource.sources.sxsc_tushare||{}},tushare:{...$.value.tushare,...me.datasource.sources.tushare||{}},akshare:{...$.value.akshare,...me.datasource.sources.akshare||{}}}),me.feishu&&(o.value={...o.value,...me.feishu},I.value=JSON.parse(JSON.stringify(o.value))),me.ai&&(u.value={...u.value,...me.ai}),me.rate_limit&&(s.value={...s.value,...me.rate_limit}),me.theme&&!localStorage.getItem("quant_theme")&&P(me.theme),me.auto_evaluate&&(r.value={...r.value,...me.auto_evaluate})}}catch(ce){console.warn("加载用户配置失败，使用本地缓存",ce)}}async function be(){var ce,ae,me,Ie;try{const Ke=await(await fetch("/api/dashboard")).json(),_t=Ke.success?Ke.data:Ke;Z.value=((ce=_t==null?void 0:_t.stats)==null?void 0:ce.total_stocks_covered)||null;const Pt=await(await fetch("/api/dates")).json();te.value=((ae=Pt==null?void 0:Pt.data)==null?void 0:ae.total)||((Ie=(me=Pt==null?void 0:Pt.data)==null?void 0:me.dates)==null?void 0:Ie.length)||null;const Ce=await(await fetch("/api/ai/history")).json();B.value="ok"}catch{B.value="pending"}}async function _e(){try{const ae=await(await fetch("/api/dashboard")).json();_.value=ae.success?ae.data:ae,x.value=Date.now()}catch(ce){console.error("加载总览数据失败",ce)}}return{configSaving:v,configChanged:c,globalConfigDirty:n,lastSavedTime:g,feishuConfigOriginal:I,aiConfigOriginal:K,tushareConfigOriginal:q,tushareConfig:O,tushareStatus:F,datasourceConfig:$,datasourceStatus:H,syncingData:W,stockCount:Z,tradeDateCount:te,aiStatus:B,appVersion:U,showImportDialog:C,rateLimitConfig:s,rateLimitDirty:b,rateLimitSaving:i,loadRateLimit:p,saveRateLimit:ee,saveAiConfig:z,testAiApi:w,exportConfig:m,importConfig:T,saveAllConfig:d,resetAllConfig:N,testTushareConnection:le,checkTushareConnection:X,syncStockData:R,loadTushareConfig:G,loadDatasourceConfig:ue,saveDatasourceConfig:Re,testDatasource:se,toggleDatasourceKeyReveal:Se,toggleDatasourceEdit:J,loadFeishuConfig:ye,loadAiConfig:De,loadUserConfig:ve,loadSystemStatus:be,loadDashboardData:_e}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:e,computed:f}=Vue,{currentUser:t,applyTheme:c,allMenuDefs:u,loadGroupConfig:S}=a,o=function(ve){const be=window.__quantModules&&window.__quantModules.themes;return be&&be.applyLegacyTheme?be.applyLegacyTheme(ve):c(ve)},l=e([]),h=e(""),r=e(""),E=e("users"),y=e({}),k=e({}),_=f(()=>{let ve=l.value;if(r.value&&(ve=ve.filter(_e=>(_e.group||_e.role)===r.value)),!h.value)return ve;const be=h.value.toLowerCase();return ve.filter(_e=>_e.username.toLowerCase().includes(be))});function x(ve){y.value={...y.value,[ve]:!y.value[ve]}}async function L(ve,be){try{const ce=await(await fetch("/api/groups/"+be+"/members/"+ve,{method:"DELETE"})).json();ce.success?(await J(),await pe()):ElementPlus.ElMessage.error(ce.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function P(ve){const be=k.value[ve];if(be)try{const ce=await(await fetch("/api/groups/"+ve+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:be})})).json();ce.success?(await J(),await pe(),k.value={...k.value,[ve]:""}):ElementPlus.ElMessage.error(ce.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function v(ve,be){try{const ce=await(await fetch("/api/users/"+ve.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:be})})).json();ce.success?await J():ElementPlus.ElMessage.error(ce.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const n=e(!1),g=e(null),I=e({username:"",password:"",role:"user",theme:"tech-blue"}),K=e(!1),q=e(null),O=e(!1),F=e(!1),$=e({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),H=e({}),W=e(!1),Z=e({group_id:"",name:"",description:""}),te=e(!1),B=e([]),U=e(""),C=e(""),s=e({});function b(ve){s.value={...s.value,[ve]:!s.value[ve]}}function i(ve){return!l.value||!l.value.length?0:l.value.filter(be=>(be.group||be.role)===ve).length}function p(ve){const be=(ve==null?void 0:ve.visible_menus)||{};return Object.values(be).filter(Boolean).length}const ee=f(()=>Object.keys(oe.value).length);async function z(ve){C.value=ve,F.value=!0,await w(ve)}async function w(ve){try{const _e=await(await fetch("/api/groups/"+ve+"/members")).json();_e.success&&(B.value=_e.members||[])}catch(be){B.value=[],console.error("[loadGroupMembers]",be)}}async function m(){if(!(!U.value||!C.value)){te.value=!0;try{const be=await(await fetch("/api/groups/"+C.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:U.value})})).json();be.success?(await w(C.value),await J(),U.value=""):ElementPlus.ElMessage.error(be.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{te.value=!1}}}async function T(ve){try{const _e=await(await fetch("/api/groups/"+C.value+"/members/"+ve,{method:"DELETE"})).json();_e.success?(await w(C.value),await J()):ElementPlus.ElMessage.error(_e.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const d=f(()=>{if(!l.value)return[];const ve=new Set(B.value.map(be=>be.username));return l.value.filter(be=>be.username!=="admin"&&be.username!=="guest"&&!ve.has(be.username))});function N(ve){const be=$.value.visible_menus[ve],_e=u.find(ce=>ce.key===ve);if(_e)if(be){const ce=H.value[ve]||{};_e.subPages.forEach(ae=>{const me=ve+"."+ae;$.value.visible_sub_pages[me]=ce[ae]!==void 0?ce[ae]:!0})}else{const ce={};_e.subPages.forEach(ae=>{const me=ve+"."+ae;ce[ae]=$.value.visible_sub_pages[me],$.value.visible_sub_pages[me]=!1}),H.value[ve]=ce}}function le(ve){q.value=ve;const be=oe.value[ve]||{};$.value={name:be.name||ve,description:be.description||"",visible_menus:{...be.visible_menus||{}},visible_sub_pages:{...be.visible_sub_pages||{}}},H.value={},u.forEach(_e=>{const ce={};_e.subPages.forEach(ae=>{ce[ae]=$.value.visible_sub_pages[_e.key+"."+ae]}),H.value[_e.key]=ce}),O.value=!0}async function X(){te.value=!0;try{const be=await(await fetch("/api/groups/"+q.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify($.value)})).json();be.success?(O.value=!1,q.value=null,await pe(),await S()):ElementPlus.ElMessage.error(be.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{te.value=!1}}async function R(ve){var be;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((be=oe.value[ve])==null?void 0:be.name)||ve)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const ae=await(await fetch("/api/groups/"+ve,{method:"DELETE"})).json();ae.success?await pe():ElementPlus.ElMessage.error(ae.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function G(){if(Z.value.group_id){te.value=!0;try{const be=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Z.value)})).json();be.success?(W.value=!1,Z.value={group_id:"",name:"",description:""},await pe()):ElementPlus.ElMessage.error(be.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{te.value=!1}}}const oe=e({});async function pe(){try{if(!localStorage.getItem("quant_token"))return;const be=await fetch("/api/groups");if(be.ok){const _e=await be.json();oe.value=_e.groups||{}}}catch(ve){console.warn("loadAllGroups:",ve)}}function Se(ve){var be;return((be=oe.value[ve])==null?void 0:be.name)||ve||"--"}async function J(){try{if(!localStorage.getItem("quant_token")){l.value=[];return}const be=await fetch("/api/users");if(be.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),t.value=null;return}const _e=await be.json();l.value=_e.users||[]}catch(ve){l.value=[],console.error("[loadUsers] error:",ve)}}function ue(ve){g.value=ve,I.value={username:ve.username,password:"",role:ve.role,theme:ve.theme||"tech-blue",group:ve.group||ve.role},n.value=!0}async function Re(){if(I.value.username){K.value=!0;try{const ve=g.value?"PUT":"POST",be=g.value?`/api/users/${I.value.username}`:"/api/users",ce=await(await fetch(be,{method:ve,headers:{"Content-Type":"application/json"},body:JSON.stringify(I.value)})).json();if(ce.success){if(ElementPlus.ElMessage.success("保存成功"),t.value&&I.value.username===t.value.username){const ae=I.value.theme;ae&&ae!==t.value.theme&&(t.value.theme=ae,localStorage.setItem("quant_user",JSON.stringify(t.value)),o(ae))}n.value=!1,g.value=null,await J()}else ElementPlus.ElMessage.error(ce.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{K.value=!1}}}async function se(ve){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${ve}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await J())}catch(be){console.error("[deleteUser]",be)}}async function ye(ve){try{const _e=await(await fetch(`/api/users/${ve.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:ve.enabled})})).json();_e.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(_e.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function De(ve){try{const{value:be}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${ve.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(be){const ce=await(await fetch(`/api/users/${ve.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:be})})).json();ce.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(ce.message||"重置失败")}}catch{}}return{userList:l,userSearch:h,groupFilter:r,userPageTab:E,expandedGroups:y,addMemberGroupMap:k,filteredUsers:_,toggleGroupExpand:x,removeMemberFromGroupInline:L,addMemberToGroupInline:P,changeUserGroup:v,showAddUser:n,editingUser:g,userForm:I,savingUser:K,editingGroup:q,menuConfigDialog:O,memberDialog:F,groupEditForm:$,subPageCache:H,showAddGroup:W,addGroupForm:Z,savingGroup:te,groupMembers:B,addMemberUsername:U,selectedMemberGroup:C,subPageSectionExpanded:s,toggleSubPageSection:b,getGroupMemberCount:i,getMenuEnabledCount:p,groupCount:ee,openMemberManager:z,loadGroupMembers:w,addMemberToGroup:m,removeMemberFromGroup:T,availableUsersForGroup:d,onParentToggle:N,openMenuConfig:le,saveMenuConfig:X,deleteGroupConfig:R,createGroup:G,allGroups:oe,getGroupName:Se,loadAllGroups:pe,loadUsers:J,editUser:ue,saveUser:Re,deleteUser:se,toggleUserEnabled:ye,resetUserPassword:De}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:e,computed:f}=Vue,{stockKlineLoaded:t,stockDetailVisible:c,stockDetailTab:u,stockDetail:S,disposeStockKline:o}=a,l=e([]),h=e(!1),r=e(!1),E=e("date"),y=e([]),k=e([]),_=e([]),x=e([]),L=f(()=>{var m,T;const w=[];for(const d of l.value){if(!d||d.id==null)continue;const N=d.stock_name||d.stock_code||"",le=Array.isArray(d.messages)?d.messages:[];w.push({id:d.id,stock_code:d.stock_code,stock_name:N,first_msg:d.first_msg||((T=(m=le[0])==null?void 0:m.content)==null?void 0:T.substring(0,50))||"",msg_count:d.msg_count||le.length||0,created_at:d.created_at,date:(d.created_at||"").substring(0,10),month:(d.created_at||"").substring(0,7),messages:le})}return w}),P=f(()=>{const w={};for(const T of L.value){const d=T.date||"未知";w[d]||(w[d]=[]),w[d].push(T)}const m={};return Object.keys(w).sort((T,d)=>d.localeCompare(T)).forEach(T=>m[T]=w[T]),m}),v=f(()=>{const w={};for(const T of L.value){const d=T.month||"未知";w[d]||(w[d]=[]),w[d].push(T)}const m={};return Object.keys(w).sort((T,d)=>d.localeCompare(T)).forEach(T=>m[T]=w[T]),m}),n=f(()=>{const w={};for(const m of L.value){const T=`${m.stock_name}(${m.stock_code})`;w[T]||(w[T]=[]),w[T].push(m)}return w});function g(w){const m=y.value.indexOf(w);m>=0?y.value.splice(m,1):y.value.push(w)}function I(w){const m=P.value[w]||[];if(m.every(d=>y.value.includes(d.id)))y.value=y.value.filter(d=>!m.some(N=>N.id===d));else for(const d of m)y.value.includes(d.id)||y.value.push(d.id)}function K(w){const m=v.value[w]||[];if(m.every(d=>y.value.includes(d.id)))y.value=y.value.filter(d=>!m.some(N=>N.id===d));else for(const d of m)y.value.includes(d.id)||y.value.push(d.id)}function q(w){const m=n.value[w]||[];if(m.every(d=>y.value.includes(d.id)))y.value=y.value.filter(d=>!m.some(N=>N.id===d));else for(const d of m)y.value.includes(d.id)||y.value.push(d.id)}function O(w){const m=k.value.indexOf(w);m>=0?k.value.splice(m,1):k.value.push(w)}function F(w){const m=_.value.indexOf(w);m>=0?_.value.splice(m,1):_.value.push(w)}function $(w){const m=x.value.indexOf(w);m>=0?x.value.splice(m,1):x.value.push(w)}function H(){y.value.length===L.value.length?y.value=[]:y.value=L.value.map(w=>w.id)}async function W(){if(y.value.length){try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${y.value.length} 段对话吗？此操作不可恢复。`,"删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}for(const w of[...y.value])await ee(w);y.value=[]}}const Z={};async function te(w){S.value={stock:w.stock_code,name:w.stock_name},c.value=!0,u.value="chat",t.value=!1,o(),C.value=!0,s.value="",U.value=[];try{let m=Z[w.id];if(!m){const T=await fetch("/api/ai/chat/history/"+w.id);if(!T.ok)throw new Error("load history failed");m=(await T.json()).messages||[],Z[w.id]=m}U.value=m.map(T=>({role:T.role,content:T.content}))}catch{s.value="历史消息加载失败，请重试"}finally{C.value=!1}}const B=e(""),U=e([]),C=e(!1),s=e("");async function b(){var T;const w=B.value.trim();if(!w||C.value)return;s.value="",U.value.push({role:"user",content:w}),B.value="",C.value=!0;const m=U.value.length;U.value.push({role:"assistant",content:""});try{const le=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((T=S.value)==null?void 0:T.stock)||"",message:w})})).body.getReader(),X=new TextDecoder;let R="";for(;;){const{done:G,value:oe}=await le.read();if(G)break;R+=X.decode(oe,{stream:!0});const pe=R.split(`
`);R=pe.pop()||"";for(const Se of pe)if(Se.startsWith("data: "))try{const J=JSON.parse(Se.slice(6));J.token?U.value[m].content+=J.token:J.done?console.log("Stream done:",J.session_id):J.error&&(s.value=J.error)}catch(J){console.warn("SSE parse error:",J)}}}catch(d){U.value[m].content||(U.value[m].content="网络错误: "+d.message)}C.value=!1}async function i(w){var T;s.value="",C.value=!0;const m={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};U.value.push({role:"user",content:m[w]||m.comprehensive});try{const N=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((T=S.value)==null?void 0:T.stock)||"",mode:w})});if(N.ok){const le=await N.json();U.value.push({role:"assistant",content:le.reply||"无回复"})}}catch(d){s.value="网络错误: "+d.message}C.value=!1}async function p(){h.value=!0,r.value=!1;try{const w=await fetch("/api/ai/chat/history?view=date");if(w.ok){const m=await w.json(),T=[];for(const d of m)for(const N of d.items||[])T.push(N);l.value=T}else r.value=!0}catch(w){console.error(w),r.value=!0}finally{h.value=!1}}async function ee(w){try{await fetch("/api/ai/chat/history/"+w,{method:"DELETE"}),l.value=l.value.filter(m=>m.id!==w)}catch(m){console.error("deleteChatSession:",m)}}function z(w){if(!w)return"";const m=String(w).split(`
`),T=[],d=[];let N=0;for(;N<m.length;){if(/^\s*\|.*\|\s*$/.test(m[N])){let X=N;const R=[];for(;X<m.length&&/^\s*\|.*\|\s*$/.test(m[X]);)R.push(m[X]),X++;const G=Se=>Se.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map(J=>J.trim()),oe=R.map(G);if(oe.length>1&&oe[1].every(Se=>/^:?-{3,}:?$/.test(Se))){const Se=Math.max(...oe.map(se=>se.length)),J=oe[0].slice(0,Se),ue=oe.slice(2);let Re="<table>";ue.length?(Re+="<thead><tr>"+J.map(se=>"<th>"+se+"</th>").join("")+"</tr></thead>",Re+="<tbody>"+ue.map(se=>"<tr>"+se.slice(0,Se).map(ye=>"<td>"+ye+"</td>").join("")+"</tr>").join("")+"</tbody>"):Re+="<tbody><tr>"+J.map(se=>"<td>"+se+"</td>").join("")+"</tr></tbody>",Re+="</table>",T.push(Re),d.push("\0T"+(T.length-1)+"\0"),N=X;continue}for(;N<X;)d.push(m[N]),N++;continue}d.push(m[N]),N++}let le=d.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return T.forEach((X,R)=>{le=le.split("\0T"+R+"\0").join(X)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(le=window.__quantModules.core.sanitizeHtml(le)),le}return{chatSessions:l,chatHistoryView:E,selectedChatIds:y,expandedChatDates:k,expandedChatMonths:_,expandedChatStocks:x,chatHistoryLoading:h,chatHistoryError:r,allChatSessionsFlat:L,chatGroupedByDate:P,chatGroupedByMonth:v,chatGroupedByStock:n,toggleSelectChat:g,toggleSelectChatDate:I,toggleSelectChatMonth:K,toggleSelectChatStock:q,toggleChatDateExpand:O,toggleChatMonthExpand:F,toggleChatStockExpand:$,selectAllChatSessions:H,deleteSelectedChatSessions:W,viewChatSession:te,loadChatHistory:p,deleteChatSession:ee,renderMarkdown:z,stockChatInput:B,stockChatMessages:U,stockChatLoading:C,stockChatError:s,askStockSend:b,askStockQuick:i}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantUndoCore=e()})(typeof self<"u"?self:void 0,function(){function a(){var e={},f=0;function t(o,l,h){if(typeof o!="function")return"";var r="undo-"+ ++f,E={fn:o,label:l||"",timer:null,active:!0};return e[r]=E,h&&h>0&&(E.timer=setTimeout(function(){u(r)},h)),r}function c(o){var l=e[o];if(!l||!l.active)return!1;l.timer&&clearTimeout(l.timer),delete e[o],l.active=!1;try{l.fn()}catch{}return!0}function u(o){var l=e[o];l&&(l.timer&&clearTimeout(l.timer),delete e[o],l.active=!1)}function S(){var o=0;for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&o++;return o}return{register:t,undo:c,remove:u,activeCount:S}}return{createUndoStack:a}});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantFormMemory=e()})(typeof self<"u"?self:void 0,function(){function a(u,S,o){return"qc_fm_"+(u||"guest")+"_"+S+"_v"+(o||1)}function e(){return typeof localStorage<"u"&&localStorage?localStorage:null}function f(u,S,o,l){var h=e();if(!h||!u||S===void 0||S===null)return!1;try{return h.setItem(a(o,u,l),JSON.stringify(S)),!0}catch{return!1}}function t(u,S,o){var l=e();if(!l||!u)return null;try{var h=l.getItem(a(S,u,o));return h?JSON.parse(h):null}catch{return null}}function c(u,S,o){var l=e();if(!(!l||!u))try{l.removeItem(a(S,u,o))}catch{}}return{saveForm:f,loadForm:t,clearForm:c}});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantSessionRestore=e()})(typeof self<"u"?self:void 0,function(){var a="qc_session_restore";function e(){return typeof sessionStorage<"u"&&sessionStorage?sessionStorage:null}function f(u){var S=e();if(!S||!u)return!1;try{return S.setItem(a,JSON.stringify(u)),!0}catch{return!1}}function t(){var u=e();if(!u)return null;try{var S=u.getItem(a);return S?JSON.parse(S):null}catch{return null}}function c(){var u=e();if(u)try{u.removeItem(a)}catch{}}return{save:f,restore:t,clear:c,KEY:a}});(function(){if(typeof window>"u")return;let a=null;function e(){try{return!!localStorage.getItem("qc_install_dismissed")}catch{return!1}}function f(){try{localStorage.setItem("qc_install_dismissed","1")}catch{}}function t(){if(!document.getElementById("qc-install-bar")){var c=document.createElement("div");c.id="qc-install-bar",c.className="qc-install-bar",c.setAttribute("role","status");var u=document.createElement("span");u.textContent="安装「量化日历」到桌面，随时查看行情与评估";var S=document.createElement("span");S.className="qc-install-actions";var o=document.createElement("button");o.className="qc-install-btn",o.type="button",o.textContent="安装";var l=document.createElement("button");l.className="qc-install-close",l.type="button",l.setAttribute("aria-label","关闭"),l.textContent="×",S.appendChild(o),S.appendChild(l),c.appendChild(u),c.appendChild(S),document.body.appendChild(c),o.addEventListener("click",function(){a&&(a.prompt(),a=null),c.remove()}),l.addEventListener("click",function(){f(),c.remove()})}}window.addEventListener("beforeinstallprompt",function(c){c.preventDefault(),a=c,e()||t()}),window.addEventListener("appinstalled",function(){a=null;var c=document.getElementById("qc-install-bar");c&&c.remove()})})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantBatchAdd=e()})(typeof self<"u"?self:void 0,function(){function a(f){var t=[];return(f||[]).forEach(function(c){if(c){var u=typeof c=="string"?c:c.code||"",S=typeof c=="object"&&c.name?String(c.name):"";u&&t.push(S&&S!==u?u+" "+S:u)}}),t.join(`
`)}function e(f){if(!f||f.success===!1)return{added:0,existed:0,invalid:0,total:0,failed:0,message:"批量加入失败"};var t=f.added||0,c=f.existed||0,u=f.invalid||0,S=f.total||0;return{added:t,existed:c,invalid:u,total:S,failed:u,message:"已加入 "+t+" 只"+(c?"，"+c+" 只已存在":"")+(u?"，"+u+" 行无效":"")}}return{buildImportText:a,summarize:e}});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantContextMenu=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(u,S,o,l,h,r,E){var y=E??a,k=u,_=S;return k+o>h-y&&(k=Math.max(y,h-y-o)),_+l>r-y&&(_=Math.max(y,r-y-l)),{left:Math.round(k),top:Math.round(_)}}var f=[{key:"detail",label:"查看详情"},{key:"add-watch",label:"加入自选"},{key:"copy",label:"复制代码"},{key:"export",label:"导出"},{key:"delete",label:"删除"}];function t(){return f.map(function(u){return{key:u.key,label:u.label}})}function c(u,S,o){var l=o??500;return!u||!S?!1:S-u>=l}return{positionMenu:e,getActions:t,isLongPress:c}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,onMounted:e,onBeforeUnmount:f}=Vue,t=window.QuantContextMenu;window.__quantComponents=window.__quantComponents||{};function c(u){let S=u;for(;S&&S!==document.body;){if(S.hasAttribute&&S.hasAttribute("data-ctx-code"))return S;S=S.parentElement}return null}window.__quantComponents.ContextMenu={name:"qc-context-menu",template:`
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
    `,setup(){const u=a(!1),S=a({left:0,top:0}),o=a(t?t.getActions():[]),l=a({});function h(){u.value=!1}function r(n,g,I){if(l.value=I||{},t){const K=window.innerWidth||document.documentElement.clientWidth,q=window.innerHeight||document.documentElement.clientHeight,O=180,F=o.value.length*32+12;S.value=t.positionMenu(n,g,O,F,K,q)}else S.value={left:n,top:g};u.value=!0}function E(n){h(),window.dispatchEvent(new CustomEvent("qc:context-action",{detail:{action:n.key,payload:l.value}}))}function y(n){const g=c(n.target);g&&(n.preventDefault(),r(n.clientX,n.clientY,{code:g.getAttribute("data-ctx-code")||"",name:g.getAttribute("data-ctx-name")||"",context:g.getAttribute("data-ctx-context")||""}))}let k=null,_=0;function x(n){const g=c(n.target);g&&(_=Date.now(),k=setTimeout(function(){if(t&&t.isLongPress(_,Date.now(),500)){navigator.vibrate&&navigator.vibrate(10);const I=n.touches&&n.touches[0];r(I?I.clientX:0,I?I.clientY:0,{code:g.getAttribute("data-ctx-code")||"",name:g.getAttribute("data-ctx-name")||"",context:g.getAttribute("data-ctx-context")||""})}},520))}function L(){k&&(clearTimeout(k),k=null)}function P(n){if(n.key==="Escape"){h();return}if(n.shiftKey&&n.key==="F10"){const g=c(document.activeElement);if(g){n.preventDefault();const I=g.getBoundingClientRect();r(I.left+I.width/2,I.bottom,{code:g.getAttribute("data-ctx-code")||"",name:g.getAttribute("data-ctx-name")||"",context:g.getAttribute("data-ctx-context")||""})}}}function v(n){u.value&&!(n.target&&n.target.closest&&n.target.closest(".qc-ctx"))&&h()}return e(function(){document.addEventListener("contextmenu",y,!0),document.addEventListener("touchstart",x,{passive:!0}),document.addEventListener("touchend",L,!0),document.addEventListener("keydown",P,!0),document.addEventListener("mousedown",v,!0)}),f(function(){document.removeEventListener("contextmenu",y,!0),document.removeEventListener("touchstart",x,!0),document.removeEventListener("touchend",L,!0),document.removeEventListener("keydown",P,!0),document.removeEventListener("mousedown",v,!0)}),{visible:u,pos:S,actions:o,run:E}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantRequestCore=e()})(typeof self<"u"?self:void 0,function(){function a(){var e=0,f={};function t(l){var h=++e;if(l&&f[l])return{deduped:!0,id:f[l].seq,controller:f[l].controller};var r=typeof AbortController<"u"?new AbortController:null;return f[l]={seq:h,controller:r},{deduped:!1,id:h,controller:r}}function c(l,h){var r=f[l];return!r||r.seq!==h}function u(l){var h=f[l];if(h&&h.controller)try{h.controller.abort()}catch{}}function S(l,h){var r=f[l];r&&r.seq===h&&delete f[l]}function o(){var l=0;for(var h in f)Object.prototype.hasOwnProperty.call(f,h)&&l++;return l}return{begin:t,isStale:c,abort:u,finish:S,activeCount:o}}return{createRequestGuard:a}});(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantStateRegistry=e()})(typeof self<"u"?self:void 0,function(){function a(){var e=Object.create(null),f=Object.create(null);function t(y,k){if(!y||typeof y!="string")throw new Error("domain name required");if(e[y])throw new Error("duplicate domain: "+y);for(var _=Array.isArray(k)?k:[],x=0;x<_.length;x++){var L=_[x];if(f[L]&&f[L]!==y)throw new Error("duplicate key across domains: "+L);f[L]=y}return e[y]={keys:_.slice(),refs:Object.create(null)},!0}function c(y,k,_){var x=e[y];if(!x)throw new Error("unknown domain: "+y);if(x.keys.indexOf(k)===-1)throw new Error("key not declared in domain: "+y+"."+k);return x.refs[k]=_,!0}function u(y,k){var _=e[y];return!!_&&k in _.refs}function S(y,k){var _=e[y];if(_){var x=_.refs[k];return x&&typeof x=="object"&&"value"in x?x.value:x}}function o(y){var k=e[y];if(!k)return null;for(var _={},x=0;x<k.keys.length;x++){var L=k.keys[x],P=k.refs[L];_[L]=P&&typeof P=="object"&&"value"in P?P.value:P}return _}function l(y,k){var _=e[y];if(!_||!k)return!1;for(var x=0;x<_.keys.length;x++){var L=_.keys[x];if(L in k){var P=_.refs[L];P&&typeof P=="object"&&"value"in P&&(P.value=k[L])}}return!0}function h(){return Object.keys(e)}function r(y){var k=e[y];return k?k.keys.slice():[]}function E(){for(var y=0,k=Object.keys(e),_=0;_<k.length;_++)y+=Object.keys(e[k[_]].refs).length;return y}return{defineDomain:t,attach:c,has:u,get:S,snapshot:o,restore:l,domains:h,keys:r,attachedCount:E}}return{createStateRegistry:a}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:e,computed:f,watch:t}=Vue,{consensus:c,currentPage:u,currentSubPage:S,dashboardData:o,searchKeyword:l,statusFilter:h,strategyFilter:r,strategyFilterCounts:E}=a;function y(F){const $=r.value.selected;if(!$||$.length===0)return F;const H=r.value.mode;return F.filter(W=>{const Z=W.strategy_names||W.strategies||[];return H==="union"?$.some(te=>Z.includes(te)):$.every(te=>Z.includes(te))})}const k=f(()=>{const F=y(c.value||[]);return{all:F.length,newCount:F.filter($=>$.status==="new").length,current:F.filter($=>$.status==="current").length,out:F.filter($=>$.status==="out").length}}),_=f(()=>{let F=c.value||[];if(h.value!=="all"&&(F=F.filter($=>$.status===h.value)),F=y(F),l.value){const $=l.value.toLowerCase();F=F.filter(H=>H.code.toLowerCase().includes($)||H.name&&H.name.toLowerCase().includes($))}return F}),x=f(()=>{const F=c.value||[],$={},H={};for(const W of F)W.code&&W.name&&(H[W.code]=W.name);for(const W of F){const Z=W.strategy_names||W.strategies||[];for(const te of Z)$[te]||($[te]={strategy:te,count:0,codes:[],names:[]}),$[te].count++,$[te].codes.includes(W.code)||($[te].codes.push(W.code),$[te].names.push({code:W.code,name:H[W.code]||W.code}))}return Object.values($).sort((W,Z)=>Z.count-W.count)}),L=f(()=>{const F=r.value.selected,$=r.value.mode,H={};for(const[W,Z]of Object.entries(E.value)){const te=Z||[];!F||F.length===0?H[W]=te.length:$==="union"?H[W]=te.filter(B=>B.strategies&&F.some(U=>B.strategies.includes(U))).length:H[W]=te.filter(B=>B.strategies&&F.every(U=>B.strategies.includes(U))).length}return H});function P(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(r.value.selected)),localStorage.setItem("quant_strategy_filter_mode",r.value.mode)}const v=f(()=>{const F=(o.value||{}).consensus_rank||[];return y(F)}),n=f(()=>{const F=c.value||E.value.day||[];return y(F).length}),g=f(()=>{const F=(o.value||{}).strategy_counts||[],$=c.value||E.value.day||[];if($.length===0)return F;const H=y($),W={};H.forEach(te=>{(te.strategy_names||te.strategies||[]).forEach(U=>{W[U]=(W[U]||0)+1})});const Z=H.length||1;return F.map(te=>{const B=te.strategy_name||te.strategy_id,U=W[B]||0;return{...te,count:U,percentage:Math.round(U/Z*1e3)/10}})}),I=f(()=>{const F=(o.value||{}).pool_changes||{},$=(F.new_count||0)-(F.out_count||0);return $>0?{dir:"up",text:"↑"+$}:$<0?{dir:"down",text:"↓"+Math.abs($)}:{dir:"flat",text:"→0"}}),K=f(()=>{const F=(o.value||{}).time_coverage||{},$=new Date(F.start_date),H=new Date(F.end_date),W=new Date;if(!$.getTime()||!H.getTime()||W>=H)return 100;if(W<=$)return 0;const Z=H-$,te=W-$;return Math.round(te/Z*100)}),q=e(null);function O(F){r.value.selected=[F],r.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([F])),localStorage.setItem("quant_strategy_filter_mode","union"),u.value="calendar",S.value="calendar"}return{applyStrategyFilter:y,statusCounts:k,stockPool:_,strategyDistribution:x,strategyPreviewCount:L,saveStrategyFilter:P,filteredConsensusRank:v,currentPoolSize:n,filteredStrategyCounts:g,poolChangeBadge:I,timeBarPercent:K,lastRefreshTime:q,navigateToStrategyFilter:O}}}})();(function(){window.__quantModules||(window.__quantModules={});const a={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},e={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function f(o){return a[o]||"var(--text-tertiary)"}function t(o){return e[o]||"var(--bg-hover)"}const c=window.QuantUndoCore,u=c?c.createUndoStack():null;function S(o,l){if(!u||!window.Vue||!window.Vue.h)return;const h=window.Vue.h;ElementPlus.ElMessage.success({message:h("span",null,[o,h("a",{style:"margin-left:8px;color:var(--primary-text);cursor:pointer;text-decoration:underline",onClick:()=>{u.undo(l)&&ElementPlus.ElMessage.success("已撤销")}},"撤销")]),duration:5e3})}window.__quantModules.watchlist={create(o){const{ref:l,computed:h,watch:r}=Vue,{currentUser:E,selectedDate:y,stockDetail:k,stockDetailTab:_,stockDetailVisible:x,stockDetailLoading:L,stockKlineLoaded:P,viewCache:v,animateScoreEntrance:n,loadStockKline:g,refreshStockScore:I,disposeStockKline:K,aiHistory:q,aiLoading:O,aiEvalStage:F,aiEvalElapsed:$,aiEvalError:H,aiResult:W,loadLastEvaluation:Z,autoEvaluateConfig:te,autoEvaluateScope:B,batchStocks:U,batchRunning:C,batchTotal:s,batchCompleted:b,batchCurrent:i,batchStatuses:p,batchResults:ee,batchEvalErrors:z,expandedDates:w,expandedStocks:m,savingConfig:T,selectedHistoryIds:d,selectedWatchlistCodes:N,showAutoEvaluateSettings:le,showBatchEvaluate:X}=o,R=A=>(getComputedStyle(document.documentElement).getPropertyValue(A)||"").trim(),G=l(""),oe=l("default"),pe=l("default"),Se=l([]),J=h(()=>new Set(Se.value.map(A=>A.code))),ue=l(!1),Re=l(!1),se=h(()=>{const A=[...Se.value];return pe.value==="name"?A.sort((ne,de)=>ne.name.localeCompare(de.name,"zh")):pe.value==="added"?A.sort((ne,de)=>(de.added_at||"").localeCompare(ne.added_at||"")):pe.value==="score"&&A.sort((ne,de)=>{const Te=De(ne.code);return De(de.code)-Te}),A});function ye(A){const ne=q.value.filter(Te=>Te.stock_code===A);if(ne.length===0)return null;const de=ne.reduce((Te,ze)=>Te.evaluate_time>ze.evaluate_time?Te:ze);return{score:de.result.total_score,color:f(de.result.level),bg:t(de.result.level)}}function De(A){const ne=ye(A);return ne?ne.score:0}function ve(A){dt(A.code,A.name),me.value=me.value.filter(ne=>ne.code!==A.code),ae.value=""}const be=h(()=>new Set(q.value.map(A=>A.stock_code))),_e=l(new Set);function ce(A){_e.value.add(A)}const ae=l(""),me=l([]),Ie=l(!1),Fe=l({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),Ke=l(!1),_t=l(!1),pt=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};pt.REALTIME_WS_PATH;const Pt=pt.REALTIME_DEGRADED_TEXT||"数据不可达",xe=pt.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";pt.WARN_RISE_SPEED_THRESHOLD!=null&&pt.WARN_RISE_SPEED_THRESHOLD,pt.WARN_VOLUME_RATIO_THRESHOLD!=null&&pt.WARN_VOLUME_RATIO_THRESHOLD;const Ce=pt.quoteFmt||{price:A=>A==null?"--":Number(A).toFixed(2),pct:A=>A==null?"--":Number(A).toFixed(2)+"%",num:A=>A==null?"--":Number(A).toFixed(2),color:A=>""},Oe=3,Ne=5e3,Je=l({}),$e=l(!1),Ye=l("idle");let rt=null,bt=null,xt=0;function Ht(A){return pt.checkQuoteWarning?pt.checkQuoteWarning(A):null}function aa(A){return Ht(Je.value[A])}function Jt(A){return Ce.color(Je.value[A])}function M(A){return Ce.price(Je.value[A]&&Je.value[A].price)}function ie(A){return Ce.pct(Je.value[A]&&Je.value[A].change_pct)}function Ee(A,ne){return Ce.num(Je.value[A]&&Je.value[A][ne])}function Pe(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function Ge(){if(!rt||rt.readyState!==1)return;const A=(Se.value||[]).map(ne=>ne.code);A.length!==0&&rt.send(JSON.stringify({subscribe:A}))}function ct(){if(bt&&(clearTimeout(bt),bt=null),rt){try{rt.onopen=null,rt.onmessage=null,rt.onerror=null,rt.onclose=null,rt.close()}catch{}rt=null}Je.value={},$e.value=!1,Ye.value="idle"}function He(){const A=Pe();if(!A||!pt.buildRealtimeWsUrl||Ye.value==="open"||Ye.value==="connecting")return;let ne;try{ne=pt.buildRealtimeWsUrl()+"?token="+encodeURIComponent(A)}catch{Ye.value="offline",$e.value=!0;return}Ye.value="connecting";let de=null;try{de=new WebSocket(ne)}catch{Ye.value="offline",$e.value=!0;return}rt=de,de.onopen=function(){Ye.value="open",xt=0,Ge()},de.onmessage=function(Te){let ze=null;try{ze=JSON.parse(Te.data||"{}")}catch{return}if(!ze||ze.type!=="quotes")return;if($e.value=!!ze.degraded,ze.degraded||!Array.isArray(ze.data)){Je.value={};return}const At={};ze.data.forEach(function(it){it&&it.code&&(At[it.code]=it)}),Je.value=At},de.onerror=function(){Ye.value="offline",$e.value=!0},de.onclose=function(){Ye.value="offline",xt<Oe?(xt++,bt=setTimeout(function(){Ye.value!=="open"&&He()},Ne*xt)):$e.value=!0}}r(Se,function(){Ye.value==="open"&&Ge()}),Pe()&&setTimeout(He,500);async function St(){if(!k.value)return;O.value=!0,W.value=null,H.value="",F.value="fetching",$.value=0;const A=Date.now(),ne=setInterval(()=>{O.value&&($.value=Math.round((Date.now()-A)/1e3))},500);try{const de=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:k.value.stock,stock_name:k.value.name||k.value.stock,strategy:oe.value})});F.value="calculating";const Te=await de.json();F.value="analyzing",Te.success?(await nextTick(),W.value=Te.data,_.value="ai",Ct()):(H.value=Te.message||"评估失败",ElementPlus.ElMessage.error(H.value))}catch(de){H.value=de&&de.message&&!String(de.message).includes("Failed to fetch")?de.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(H.value)}finally{clearInterval(ne),O.value=!1,$.value=0,H.value?F.value="":(F.value="done",setTimeout(()=>{F.value==="done"&&(F.value="")},800))}}const et=50,nt=l(0),at=l(!1),Ot=h(()=>q.value.length<nt.value);async function Ct(){ue.value=!0,Re.value=!1;try{if(!localStorage.getItem("quant_token")){q.value=[];return}const ne=await fetch(`/api/ai/history?limit=${et}&offset=0`);if(ne.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),E.value=null;return}const de=await ne.json();de.success?(q.value=de.data||[],nt.value=de.total!=null?de.total:q.value.length):Re.value=!0}catch(A){console.error("[loadAiHistory] error:",A),Re.value=!0}finally{ue.value=!1}}async function Y(){if(!(at.value||!Ot.value)){at.value=!0;try{const ne=await(await fetch(`/api/ai/history?limit=${et}&offset=${q.value.length}`)).json();if(ne.success&&Array.isArray(ne.data)){const de=new Set(q.value.map(ze=>ze.id)),Te=ne.data.filter(ze=>!de.has(ze.id));q.value=q.value.concat(Te),ne.total!=null&&(nt.value=ne.total)}}catch(A){console.warn("[loadMoreAiHistory] error:",A)}finally{at.value=!1}}}async function we(A){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const de=await(await fetch(`/api/ai/history/${A}`,{method:"DELETE"})).json();if(de.success){ElementPlus.ElMessage.success("删除成功"),Ct();const Te=d.value.indexOf(A);Te>=0&&d.value.splice(Te,1)}else ElementPlus.ElMessage.error(de.message||"删除失败")}catch{}}function tt(A){const ne=d.value.indexOf(A);ne>=0?d.value.splice(ne,1):d.value.push(A)}function Ue(){d.value=[]}function qt(){N.value=[]}async function Et(){const A=d.value;if(A.length===0)return;const ne=q.value.filter(de=>A.includes(de.id)).map(de=>de.stock_code);X.value=!0,U.value=[...new Set(ne)].join(",")}async function It(){const A=d.value;if(A.length===0)return;const ne=q.value.filter(ze=>A.includes(ze.id)),de=[...new Map(ne.map(ze=>[ze.stock_code,ze])).values()];let Te=0;for(const ze of de)J.value.has(ze.stock_code)||(await dt(ze.stock_code,ze.stock_name||ze.stock_code),Te++);Te>0?ElementPlus.ElMessage.success(`已加入 ${Te} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function lt(){const A=d.value;if(A.length===0)return;const ne=q.value.filter(Te=>A.includes(Te.id)),de=[...new Map(ne.map(Te=>[Te.stock_code,Te])).values()];try{const ze=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:de.map(At=>({stock_code:At.stock_code,stock_name:At.stock_name||""}))})})).json();ze&&ze.success?ElementPlus.ElMessage.success(`已登记 ${ze.count||de.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(ze&&ze.detail||"批量加入组合失败")}catch(Te){console.warn("batchAddToPortfolio failed:",Te),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function Mt(){if(N.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${N.value.length} 只股票？`,"提示",{type:"warning"});for(const A of N.value)await Zt(A);N.value=[],ElementPlus.ElMessage.success("已移除")}catch(A){A&&A.message!=="cancel"&&console.warn("batchRemoveWatchlist:",A)}}function $t(A){const ne=N.value.indexOf(A);ne>=0?N.value.splice(ne,1):N.value.push(A)}function wt(){d.value.length===q.value.length?d.value=[]:d.value=q.value.map(A=>A.id)}function gt(){N.value.length===Se.value.length?N.value=[]:N.value=Se.value.map(A=>A.code)}async function ta(){if(d.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${d.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const ne=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:d.value})})).json();ne.success?(ElementPlus.ElMessage.success(ne.message),d.value=[],Ct()):ElementPlus.ElMessage.error(ne.message||"删除失败")}catch{}}async function Rt(){try{const ne=await(await fetch("/api/ai/auto-config")).json();ne.success&&(te.value=ne.data,ne.data.evaluate_scope&&(B.value=ne.data.evaluate_scope))}catch(A){console.warn("loadAutoEvaluateConfig failed:",A)}}async function ca(){T.value=!0;try{te.value.evaluate_scope=B.value;const ne=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(te.value)})).json();ne.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),le.value=!1):ElementPlus.ElMessage.error(ne.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{T.value=!1}}const Xt=l(!1);async function sa(){Xt.value=!0;try{const ne=await(await fetch("/api/watchlist")).json();ne.success&&(Se.value=ne.stocks||[])}catch(A){console.warn("loadWatchlist failed:",A)}finally{Xt.value=!1}}async function dt(A,ne){try{const Te=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:A,name:ne})})).json();if(Te.success)return Te.existed||Se.value.push({code:A,name:ne,added_at:new Date().toISOString()}),!0}catch(de){console.warn("addToWatchlist failed:",de)}return!1}async function Zt(A){try{const ne=Se.value.find(Te=>Te.code===A),de=ne&&ne.name||"";if(await fetch(`/api/watchlist/${encodeURIComponent(A)}`,{method:"DELETE"}),Se.value=Se.value.filter(Te=>Te.code!==A),J.value&&J.value.delete&&J.value.delete(A),u){const Te=u.register(()=>{dt(A,de)},"移除自选",5e3);S("已移除自选",Te)}else ElementPlus.ElMessage.info("已移除自选")}catch(ne){console.warn("removeFromWatchlist failed:",ne)}}async function da(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"});const A=Se.value.slice();if(await fetch("/api/watchlist",{method:"DELETE"}),Se.value=[],J.value&&J.value.clear&&J.value.clear(),ElementPlus.ElMessage.success("自选已清空"),u&&A.length){const ne=u.register(()=>{A.forEach(de=>dt(de.code,de.name||""))},"清空自选",5e3);S("自选已清空",ne)}}catch(A){console.warn("clearWatchlist failed:",A)}}async function wa(A,ne){J.value.has(A)?(await Zt(A),ElementPlus.ElMessage.info("已移除自选")):await dt(A,ne)&&ElementPlus.ElMessage.success("已加入自选")}async function Sa(A,ne){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(A,ne||"");const de=new Date().toISOString().split("T")[0],Te=y.value||de;_.value="kline",W.value=null,H.value="",K("stockKlineChart"),k.value=null,L.value=!0,P.value=!1,x.value=!0,nextTick(()=>n());try{const ze=await fetch(`/api/calendar/stock/${encodeURIComponent(A)}?date=${Te}`);k.value=await ze.json()}catch{k.value={stock:A,name:ne,total_days:0}}finally{L.value=!1}await nextTick(),await g("daily"),I(),Z(A)}const na=l(!1);async function V(){var A;if(Se.value.length!==0){na.value=!0;try{const de=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();de.success&&de.loaded>0?(((A=de.details)==null?void 0:A.loaded)||[]).forEach(Te=>_e.value.add(Te.code)):de.loaded===0&&de.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(ne){console.error("预加载K线失败:",ne)}finally{na.value=!1}}}async function ke(A,ne){O.value=!0,W.value=null,H.value="",F.value="fetching",P.value=!1,K();const de=new Date().toISOString().split("T")[0],Te=y.value||de;try{const ze=await fetch(`/api/calendar/stock/${encodeURIComponent(A)}?date=${Te}`);k.value=await ze.json()}catch{k.value={stock:A,name:ne,total_days:0}}_.value="ai",x.value=!0,await nextTick();try{const At=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:A,stock_name:ne})})).json();At.success?(W.value=At.data,Ct()):(H.value=At.message||"评估失败",ElementPlus.ElMessage.error(H.value))}catch{H.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(H.value)}finally{O.value=!1,F.value=""}}async function Ve(){Se.value.length!==0&&(X.value=!0,U.value=Se.value.map(A=>A.code).join(","))}async function Ae(){N.value.length!==0&&(X.value=!0,U.value=N.value.join(","))}async function ut(){if(!ae.value.trim()){me.value=[];return}Ie.value=!0;try{const ne=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(ae.value)}`)).json();me.value=(ne.results||[]).filter(de=>!J.value.has(de.code))}catch(A){console.warn("searchStockForWatchlist failed:",A)}finally{Ie.value=!1}}async function Xe(){try{const ne=await(await fetch("/api/data-refresh/config")).json();Fe.value=ne}catch(A){console.error("加载数据刷新配置失败:",A)}}async function zt(){_t.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Fe.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{_t.value=!1}}async function Bt(){var A;Ke.value=!0;try{const de=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();de.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((A=de.parser_stats)==null?void 0:A.dates_count)||0}交易日`),v.clear(),await Xe()):ElementPlus.ElMessage.error(de.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{Ke.value=!1}}const Wt=l(!1);async function Ca(){Wt.value=!0;try{const ne=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(ne.success){const de=ne.result||{},Te=ne.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${de.pulled||0}/${de.total||0}, 财务 ${Te.pulled||0}/${Te.total||0}`),v.clear(),await Xe()}else ElementPlus.ElMessage.error(ne.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{Wt.value=!1}}const ua=h(()=>{const A={};for(const ne of q.value){const de=(ne.evaluate_time||"").split("T")[0];A[de]||(A[de]=[]),A[de].push(ne)}for(const ne in A)A[ne].sort((de,Te)=>Te.evaluate_time.localeCompare(de.evaluate_time));return A}),va=h(()=>{const A={};for(const ne of q.value){const de=ne.stock_code;A[de]||(A[de]=[]),A[de].push(ne)}for(const ne in A)A[ne].sort((de,Te)=>Te.evaluate_time.localeCompare(de.evaluate_time));return A}),la=h(()=>{const A={};for(const ne of q.value){const de=(ne.evaluate_time||"").split("T")[0].slice(0,7);A[de]||(A[de]=[]),A[de].push(ne)}for(const ne in A)A[ne].sort((de,Te)=>Te.evaluate_time.localeCompare(de.evaluate_time));return A}),Aa=h(()=>Object.keys(va.value).length),ma=h(()=>{const A=q.value.length;return A===0?[]:[{label:"90+",min:90,max:100,color:"var(--bar-fill-ok)"},{label:"80-89",min:80,max:89,color:"var(--bar-fill-ok)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--state-success-solid) 42%, var(--surface-card))"},{label:"60-69",min:60,max:69,color:"var(--bar-fill-warn)"},{label:"<60",min:0,max:59,color:"var(--bar-fill-bad)"}].map(de=>{const Te=q.value.filter(ze=>ze.result.total_score>=de.min&&ze.result.total_score<=de.max).length;return{...de,count:Te,pct:Math.round(Te/A*100)}})});async function La(){if(!G.value)return;const A=Se.value.find(ne=>ne.code===G.value);if(A){O.value=!0,W.value=null,H.value="",F.value="fetching";try{k.value={stock:A.code,name:A.name,total_days:0},x.value=!0,_.value="ai",await nextTick();const de=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:A.code,stock_name:A.name,strategy:oe.value})})).json();de.success?(W.value=de.data,Ct(),G.value=""):(H.value=de.message||"评估失败",ElementPlus.ElMessage.error(H.value))}catch{H.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(H.value)}finally{O.value=!1,F.value=""}}}function fa(A){const ne=w.value.indexOf(A);ne>=0?w.value.splice(ne,1):w.value.push(A)}function Da(A){const de=(ua.value[A]||[]).map(ze=>ze.id);de.every(ze=>d.value.includes(ze))?d.value=d.value.filter(ze=>!de.includes(ze)):de.forEach(ze=>{d.value.includes(ze)||d.value.push(ze)})}function ka(A){const de=(la.value[A]||[]).map(ze=>ze.id);de.every(ze=>d.value.includes(ze))?d.value=d.value.filter(ze=>!de.includes(ze)):de.forEach(ze=>{d.value.includes(ze)||d.value.push(ze)})}function Ia(A){const ne=m.value.indexOf(A);ne>=0?m.value.splice(ne,1):m.value.push(A)}function Na(A){const de=(va.value[A]||[]).map(ze=>ze.id);de.every(ze=>d.value.includes(ze))?d.value=d.value.filter(ze=>!de.includes(ze)):de.forEach(ze=>{d.value.includes(ze)||d.value.push(ze)})}const Ut={},ia={};function D(A,ne,de){if(!A||(de&&(ia[ne]={el:A,records:de}),Ut[ne]===A))return;const Te=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,ze=()=>{Object.keys(Ut).forEach(Ze=>{if(Ut[Ze]&&Ut[Ze]!==A){try{Ut[Ze].dispose()}catch{}delete Ut[Ze]}});const At=[...de].sort((Ze,jt)=>Ze.evaluate_time.localeCompare(jt.evaluate_time)),it=At.map(Ze=>(Ze.evaluate_time||"").split("T")[0]),yt=At.map(Ze=>{var jt;return((jt=Ze.result)==null?void 0:jt.total_score)??null}),ea=At.map(Ze=>{var jt;return((jt=Ze.result)==null?void 0:jt.level)??""}),Lt={primary:R("--qc-primary-600")||"#b8922a",textPrimary:R("--text-primary")||"#1f2937",textSecondary:R("--text-secondary")||"#6b7280",border:R("--chart-axis")||"#b9b2a6",axis:R("--chart-axis")||"#b9b2a6",split:R("--chart-split")||"#e7e1d6",up:R("--qc-market-up")||"#e63946",down:R("--qc-market-down")||"#2e7d32"},pa=[];for(let Ze=1;Ze<yt.length;Ze++)yt[Ze]!=null&&yt[Ze-1]!=null&&Math.abs(yt[Ze]-yt[Ze-1])>=15&&pa.push({name:"大幅变化",coord:[it[Ze],yt[Ze]],value:(yt[Ze]-yt[Ze-1]>0?"↑":"↓")+Math.abs(yt[Ze]-yt[Ze-1]),symbol:"pin",symbolSize:32,itemStyle:{color:yt[Ze]-yt[Ze-1]>0?Lt.up:Lt.down}});const oa=echarts.init(A),kt=window.__quantModules&&window.__quantModules.echartsTheme;kt&&typeof kt.getEChartsTheme=="function"&&oa.setOption(kt.getEChartsTheme()),oa.setOption({tooltip:{trigger:"axis",backgroundColor:R("--bg-card")||"#ffffff",borderColor:Lt.border,textStyle:{color:Lt.textPrimary},formatter:function(Ze){var Tt;const jt=(Tt=Ze[0])==null?void 0:Tt.dataIndex,qa=jt!=null?ea[jt]:"";return it[jt]+"<br/>得分: "+yt[jt]+(qa?" ("+qa+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:it,axisLabel:{fontSize:10,rotate:30,color:Lt.textSecondary},axisLine:{lineStyle:{color:Lt.axis}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:Lt.textSecondary},splitLine:{lineStyle:{color:Lt.split}}},series:[{data:yt,type:"line",smooth:!0,lineStyle:{color:Lt.primary,width:2},itemStyle:{color:Lt.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:R("--primary-rgb")?"rgba("+R("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:R("--primary-rgb")?"rgba("+R("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:pa.length>0?{data:pa}:void 0}]}),Ut[ne]=oa};Te?Te().then(ze).catch(()=>{}):ze()}function Q(){Object.keys(ia).forEach(A=>{const ne=ia[A];if(!(!ne||!ne.el)){if(Ut[A]){try{Ut[A].dispose()}catch{}delete Ut[A]}D(ne.el,A,ne.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(Q));async function Le(A){W.value=A,P.value=!1,K();try{const ne=await fetch(`/api/calendar/stock/${A.stock_code}?date=${y.value}`);k.value=await ne.json()}catch{k.value={stock:A.stock_code,name:A.stock_name||A.stock_code,total_days:0,history:[]}}x.value=!0,_.value="ai"}async function mt(){if(!U.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const A=U.value.split(/[,，\s]+/).filter(it=>it.trim());if(A.length===0)return;C.value=!0,s.value=A.length,b.value=0,i.value="",p.value={},ee.value={},z.value={},A.forEach(it=>{p.value[it]="pending",ee.value[it]=null});const ne={"Content-Type":"application/json"};let de=0,Te=0,ze=!1;try{const it=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:ne,body:JSON.stringify({stock_codes:A})});if(it.ok&&it.body){ze=!0;const yt=it.body.getReader(),ea=new TextDecoder("utf-8");let Lt="",pa=!1;for(;!pa;){const{value:oa,done:kt}=await yt.read();pa=kt,Lt+=ea.decode(oa||new Uint8Array,{stream:!pa});let Ze;for(;(Ze=Lt.indexOf(`

`))>=0;){const jt=Lt.slice(0,Ze);Lt=Lt.slice(Ze+2);const qa=jt.split(`
`).find(Qa=>Qa.startsWith("data: "));if(!qa)continue;let Tt;try{Tt=JSON.parse(qa.slice(6))}catch{continue}Tt.type==="start"?Tt.total&&(s.value=Tt.total):Tt.type==="item"?(b.value++,i.value=Tt.stock_code,Tt.success?(p.value[Tt.stock_code]="success",ee.value[Tt.stock_code]=Tt,de++):(p.value[Tt.stock_code]="error",z.value[Tt.stock_code]=Tt.error||"评估失败",Te++)):Tt.type==="done"&&(typeof Tt.success=="number"&&(de=Tt.success),typeof Tt.fail=="number"&&(Te=Tt.fail))}}if(Lt.trim()){const oa=Lt.split(`
`).find(kt=>kt.startsWith("data: "));if(oa)try{const kt=JSON.parse(oa.slice(6));kt.type==="item"?(b.value++,i.value=kt.stock_code,kt.success?(p.value[kt.stock_code]="success",ee.value[kt.stock_code]=kt,de++):(p.value[kt.stock_code]="error",z.value[kt.stock_code]=kt.error||"评估失败",Te++)):kt.type==="done"&&(typeof kt.success=="number"&&(de=kt.success),typeof kt.fail=="number"&&(Te=kt.fail))}catch{}}}}catch{ze=!1}if(!ze){de=0,Te=0,b.value=0;for(const it of A){i.value=it,p.value[it]="running";try{const ea=await(await fetch("/api/ai/evaluate",{method:"POST",headers:ne,body:JSON.stringify({stock_code:it.trim(),stock_name:it.trim()})})).json();ea.success?(p.value[it]="success",ee.value[it]=ea.data,de++):(p.value[it]="error",z.value[it]=ea.message&&ea.message!=="success"?ea.message:"评估失败",Te++)}catch(yt){p.value[it]="error",z.value[it]="网络错误: "+(yt&&yt.message?yt.message:yt),Te++}b.value++}}i.value="",await Ct();const At=A.length;setTimeout(()=>{Te===0?ElementPlus.ElMessage.success(`评估完成 成功 ${de}/${At}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${de}/${At} · 失败 ${Te}`),C.value=!1},500)}return{quickEvalStock:G,evalStrategy:oe,watchlistSort:pe,watchlist:Se,watchlistCodes:J,sortedWatchlist:se,getWatchlistScore:ye,getLatestScore:De,addSearchResult:ve,evaluatedCodes:be,klineLoadedCodes:_e,markKlineLoaded:ce,watchlistSearch:ae,watchlistResults:me,watchlistSearching:Ie,dataRefreshConfig:Fe,dataRefreshReloading:Ke,dataRefreshSaving:_t,aiHistoryLoading:ue,aiHistoryError:Re,aiHistoryTotal:nt,aiHistoryLoadingMore:at,hasMoreAiHistory:Ot,loadMoreAiHistory:Y,watchlistLoading:Xt,doAiEvaluate:St,loadAiHistory:Ct,deleteSingleHistory:we,toggleSelectHistory:tt,clearSelection:Ue,clearWatchlistSelection:qt,batchReevaluateHistory:Et,batchAddToWatchlist:It,batchAddToPortfolio:lt,batchRemoveWatchlist:Mt,toggleSelectWatchlist:$t,selectAllHistory:wt,selectAllWatchlist:gt,deleteSelectedHistory:ta,loadAutoEvaluateConfig:Rt,saveAutoEvaluateConfig:ca,loadWatchlist:sa,addToWatchlist:dt,removeFromWatchlist:Zt,clearWatchlist:da,toggleWatchlist:wa,showStockKline:Sa,preloadingKline:na,preloadWatchlistKline:V,watchlistEvaluate:ke,batchEvaluateWatchlist:Ve,batchEvaluateSelected:Ae,searchStockForWatchlist:ut,loadDataRefreshConfig:Xe,saveDataRefreshConfig:zt,triggerDataReload:Bt,triggerDataPull:Ca,dataPullRunning:Wt,groupedByDate:ua,aiHistoryByStock:va,groupedByMonth:la,aiHistoryStockCount:Aa,scoreDistribution:ma,quickEvaluate:La,toggleDateExpand:fa,toggleSelectDate:Da,toggleSelectMonth:ka,toggleStockExpand:Ia,toggleSelectStock:Na,registerTrendChart:D,viewAiResult:Le,doBatchEvaluate:mt,realtimeQuotes:Je,realtimeDegraded:$e,realtimeWsState:Ye,connectRealtimeQuotes:He,disconnectRealtimeQuotes:ct,quoteWarningFor:aa,realtimeQuoteColor:Jt,realtimePriceText:M,realtimePctText:ie,realtimeRatioText:Ee,REALTIME_DEGRADED_TEXT:Pt,REALTIME_FALLBACK_TEXT:xe}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:e,computed:f}=Vue,t=e([]),c=e(null),u=e([]),S=e(!1),o=e(!1),l=e(!1),h=e({stock_code:"",stock_name:"",cost_price:null,quantity:null}),r=e(!1),E=e(!1),y=e({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),k=e(!1),_=e("positions"),x=e(30),L=e(!1),P=e(""),v=e(!1),n=e({dates:[],equity:[],values:[]}),g=f(()=>t.value.length),I=e("metrics"),K=e(!1),q=e(""),O=e(!1),F=e({metrics:null,rules:[],rebalance:null}),$=f(function(){const d=F.value.metrics;if(!d)return[];const N=function(X){return X==null?"--":Number(X).toFixed(2)+"%"},le=function(X){return X==null?"--":Number(X).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:N(d.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:N(d.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:N(d.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:N(d.cvar)},{key:"max_drawdown",label:"最大回撤",value:N(d.max_drawdown)},{key:"annual_return",label:"年化收益",value:N(d.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:le(d.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:le(d.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:le(d.calmar_ratio)},{key:"beta",label:"Beta",value:le(d.beta)}]});async function H(){K.value=!0;try{const d=await(await fetch("/api/portfolio/risk?days=60")).json(),N=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),le=d&&d.success?d.risk:null,X=N&&N.success?N.rules||[]:[],R=N&&N.success?N.rebalance:null;F.value={metrics:le,rules:X,rebalance:R},O.value=!!(le&&Object.keys(le).length>0),q.value=d&&d.note||N&&N.note||""}catch(d){console.warn("[portfolio] 加载风险数据失败:",d),O.value=!1,q.value="风险数据加载失败"}finally{K.value=!1}}async function W(){S.value=!0,o.value=!1;try{const N=await(await fetch("/api/portfolio")).json();N.success?(t.value=N.positions||[],c.value=N.summary||null):o.value=!0}catch(d){console.warn("[portfolio] 加载持仓失败:",d),o.value=!0}finally{S.value=!1}}async function Z(){const d=h.value,N=(d.stock_code||"").trim();if(!N){ElementPlus.ElMessage.warning("请输入股票代码");return}const le=Number(d.cost_price),X=Number(d.quantity);if(!(le>0)||!(X>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}r.value=!0;try{const G=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:N,stock_name:(d.stock_name||"").trim(),cost_price:le,quantity:X})})).json();G.success?(ElementPlus.ElMessage.success(G.message||"持仓已更新"),l.value=!1,h.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await W(),z(x.value)):ElementPlus.ElMessage.error(G.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{r.value=!1}}async function te(d){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+d+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const le=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(d),{method:"DELETE"})).json();le.success?(ElementPlus.ElMessage.success("已删除持仓"),await W(),C(),z(x.value)):ElementPlus.ElMessage.error(le.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function B(d,N){y.value={stock_code:d,stock_name:N||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},E.value=!0}async function U(){const d=y.value;if(!d.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const N=Number(d.price),le=Number(d.quantity);if(!(N>0)||!(le>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}k.value=!0;try{const R=await(await fetch("/api/portfolio/trades",{method:"POST",headers:_authHeaders(),body:JSON.stringify({stock_code:d.stock_code,stock_name:d.stock_name||"",action:d.action,price:N,quantity:le,trade_date:d.trade_date||"",note:(d.note||"").trim()})})).json();R.success?(ElementPlus.ElMessage.success(R.message||"调仓已记录"),E.value=!1,await W(),await C(),z(x.value)):ElementPlus.ElMessage.error(R.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{k.value=!1}}async function C(){try{const N=await(await fetch("/api/portfolio/trades")).json();N.success&&(u.value=N.trades||[])}catch(d){console.warn("[portfolio] 加载调仓记录失败:",d)}}const s=d=>(getComputedStyle(document.documentElement).getPropertyValue(d)||"").trim();function b(d){if(!d||!d.length)return[];let N=d[0]||0;const le=[];for(let X=0;X<d.length;X++){const R=d[X]||0;R>N&&(N=R),le.push(N>0?Math.round((R-N)/N*1e3)/10:0)}return le}function i(){const d={primary:s("--qc-primary-600")||"#b8922a",textPrimary:s("--text-primary")||"#1f2937",textSecondary:s("--text-secondary")||"#6b7280",border:s("--border-light")||"#e5e7eb",up:s("--color-rise")||"#E63946",down:s("--color-fall")||"#2E7D32"},N=n.value;return{tooltip:{trigger:"axis",backgroundColor:s("--bg-card")||"#ffffff",borderColor:d.border,textStyle:{color:d.textPrimary},formatter:function(le){const X=le[0]?le[0].dataIndex:-1,R=N.dates[X]||"",G=N.equity[X],oe=N.values[X];let pe=R||"";return G!=null&&(pe+="<br/>组合净值: "+G),oe!=null&&(pe+="<br/>组合市值: "+oe),pe}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:N.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:d.textSecondary},axisLine:{lineStyle:{color:d.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:d.textSecondary},splitLine:{lineStyle:{color:d.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:d.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:N.equity,smooth:!0,showSymbol:!1,lineStyle:{color:d.primary,width:2},itemStyle:{color:d.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:s("--primary-rgb")?"rgba("+s("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:s("--primary-rgb")?"rgba("+s("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:b(N.equity),smooth:!0,showSymbol:!1,lineStyle:{color:d.down,width:1.5},itemStyle:{color:d.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function p(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function ee(d,N,le){n.value={dates:d||[],equity:N||[],values:le||[]},v.value=!!d&&d.length>0,v.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",i,{key:"portfolio-equity"}):p()}async function z(d){L.value=!0,P.value="";const N=Number(d)||x.value||30;x.value=N;try{const X=await(await fetch("/api/portfolio/equity_curve?days="+N)).json();X.success?(P.value=X.note||"",ee(X.dates||[],X.equity||[],X.values||[])):(P.value="数据暂不可用",p())}catch(le){console.warn("[portfolio] 加载收益曲线失败:",le),P.value="数据暂不可用",p()}finally{L.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function w(d,N){if(d==null||d===""||isNaN(Number(d)))return"--";const le=Number(d),X=N??2;return(le>=0?"+":"")+le.toFixed(X)}function m(d,N){if(d==null||d===""||isNaN(Number(d)))return"--";const le=Number(d),X=N??2;return(le>=0?"+":"")+le.toFixed(X)+"%"}function T(d){if(d==null||d===""||isNaN(Number(d)))return"";const N=Number(d);return N>0?"portfolio-up":N<0?"portfolio-down":""}return{positions:t,summary:c,trades:u,loading:S,loadError:o,showAddForm:l,addForm:h,addSaving:r,tradeFormVisible:E,tradeForm:y,tradeSaving:k,portfolioTab:_,equityDays:x,equityLoading:L,equityNote:P,equityHasData:v,portfolioCount:g,loadPortfolio:W,addPosition:Z,removePosition:te,openTradeForm:B,submitTrade:U,loadTrades:C,loadEquity:z,fmtSigned:w,fmtSignedPct:m,signClass:T,riskTab:I,riskLoading:K,riskNote:q,riskHasData:O,riskData:F,riskMetricList:$,loadRisk:H}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantBacktest=e()})(typeof self<"u"?self:void 0,function(){function a(l,h){var r=Number(l);return isFinite(r)?r:typeof h=="number"?h:0}function e(l){var h=Array.isArray(l)?l:[];if(h.length<2)return null;for(var r=-1/0,E=0,y=0,k=0,_=0,x=0;x<h.length;x++){var L=a(h[x].equity!=null?h[x].equity:h[x].value);L>r&&(r=L,E=x);var P=r>0?(r-L)/r*100:0;P>y&&(y=P,k=E,_=x)}function v(n){return h[n]&&h[n].date?h[n].date:""}return{maxDrawdown:Math.round(y*100)/100,peakIndex:k,troughIndex:_,peakDate:v(k),troughDate:v(_)}}function f(l){for(var h=l||{},r={},E=Object.keys(h).sort(),y=0;y<E.length;y++){var k=E[y],_=String(k).slice(0,4);/^\d{4}$/.test(_)&&(r[_]=(r[_]||0)+a(h[k]))}var x=Object.keys(r).sort();return x.map(function(L){return{year:L,return:Math.round(r[L]*100)/100}})}function t(l){var h=Array.isArray(l)?l:[],r={};h.forEach(function(k){(k.points||[]).forEach(function(_){_&&_.date&&(r[_.date]=1)})});var E=Object.keys(r).sort(),y=h.map(function(k){var _={};return(k.points||[]).forEach(function(x){x&&x.date&&(_[x.date]=a(x.value!=null?x.value:x.equity))}),{name:k.name||"",data:E.map(function(x){return x in _?_[x]:null})}});return{dates:E,series:y}}function c(l){var h=l||{},r=function(y){return a(y)},E=function(y,k){var _=r(y);return isFinite(_)?_.toFixed(k):"--"};return[{key:"total_return",label:"总收益",value:E(h.total_return,2),suffix:"%",dir:r(h.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:E(h.annual_return,2),suffix:"%",dir:r(h.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:E(h.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:E(h.sharpe_ratio,2),suffix:"",dir:r(h.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:E(h.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:E(h.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(r(h.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:E(h.volatility,2),suffix:"%",dir:""}]}function u(l){var h=l==null?"":String(l);return/[",\n]/.test(h)?'"'+h.replace(/"/g,'""')+'"':h}function S(l){var h=l||{},r=[];r.push("回测指标"),r.push("指标,数值"),(h.metrics||[]).forEach(function(v){r.push(u(v.label)+","+u((v.value||"")+(v.suffix||"")))}),r.push(""),r.push("净值曲线");var E=["日期"].concat((h.series||[]).map(function(v){return v.name}));r.push(E.map(u).join(","));for(var y=h.dates||[],k=h.series||[],_=0;_<y.length;_++){for(var x=[y[_]],L=0;L<k.length;L++){var P=k[L].data&&k[L].data[_];x.push(P??"")}r.push(x.map(u).join(","))}return r.push(""),r.push("交易明细"),r.push("日期,股票代码,方向,原因"),(h.trades||[]).forEach(function(v){r.push(u(v.date)+","+u(v.stock)+","+u(v.action)+","+u(v.reason))}),r.join(`
`)}function o(l){return l==="buy"?"买入":l==="sell"?"卖出":l||""}return{toNum:a,computeMaxDrawdownRegion:e,buildAnnualReturns:f,buildNavSeries:t,buildMetrics:c,buildBacktestCsv:S,tradeActionText:o}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:e,computed:f}=Vue,t=window.QuantBacktest||{},c=a||{},u=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],o=(Array.isArray(c.backtestStrategies)&&c.backtestStrategies.length?c.backtestStrategies:u).map(s=>({id:s.id,name:s.name})),l=e(o.length?[o[0].id]:[]),h=e(L()),r=e(1e5),E=e(3e-4),y=e(!1),k=e(!1),_=e(null),x=e("");function L(){const s=new Date,b=new Date;b.setFullYear(b.getFullYear()-1);const i=p=>p.getFullYear()+"-"+String(p.getMonth()+1).padStart(2,"0")+"-"+String(p.getDate()).padStart(2,"0");return[i(b),i(s)]}function P(s){const b=l.value.indexOf(s);b>=0?l.value.length>1&&l.value.splice(b,1):l.value.push(s)}function v(s){const b=o.find(i=>i.id===s);return b?b.name:s}function n(s){const b=s.summary||s;return{strategy_id:b.strategy_id,start_date:b.start_date,end_date:b.end_date,total_days:b.total_days,total_return:b.total_return,annual_return:b.annual_return,max_drawdown:b.max_drawdown,volatility:b.volatility,sharpe_ratio:b.sharpe_ratio,sortino_ratio:b.sortino_ratio,win_rate:b.win_rate,profit_loss_ratio:b.profit_loss_ratio,avg_positions:b.avg_positions!=null?b.avg_positions:b.avg_positions_per_day,total_trades:b.total_trades,turnover_rate:b.turnover_rate,success:b.success!==!1,message:b.message||"",insample_total_return:b.insample_total_return!=null?b.insample_total_return:null,outsample_total_return:b.outsample_total_return!=null?b.outsample_total_return:null,out_sample_ratio:b.out_sample_ratio!=null?b.out_sample_ratio:.2,overfit_warning:!!b.overfit_warning,overfit_reason:b.overfit_reason||""}}function g(s){return(Array.isArray(s)?s:[]).map(b=>({date:b.date,value:b.equity!=null?b.equity:b.value}))}function I(s,b){const i=n(b),p=g(b.equity_curve),ee=b.monthly_returns||{},z=Array.isArray(b.trade_history)?b.trade_history:[],w={id:s,name:v(s),summary:i,equityCurve:p,monthlyReturns:ee,trades:z};let m=null;if(y.value){const T=Number(r.value)||1e5;m={name:"现金基准",points:p.map(d=>({date:d.date,value:T}))}}return{success:!0,mode:"single",strategies:[w],primary:w,benchmark:m,period:(i.start_date||"")+" ~ "+(i.end_date||"")}}function K(s,b){const i=b.strategy_results||{},p=s.map(w=>{const m=i[w];if(!m)return null;const T=n(m);return{id:w,name:v(w),summary:T,equityCurve:g(m.equity_curve),monthlyReturns:m.monthly_returns||{},trades:Array.isArray(m.trade_history)?m.trade_history:[]}}).filter(w=>w&&w.summary.success!==!1),ee=p.length?p[0]:null;let z=null;return y.value&&(z={name:"等权组合基准",points:g(b.portfolio_equity)}),{success:p.length>0,mode:"multi",strategies:p,primary:ee,benchmark:z,period:ee?ee.summary.start_date+" ~ "+ee.summary.end_date:""}}const q=f(()=>{const s=_.value;return!s||!s.primary?[]:t.buildMetrics?t.buildMetrics(s.primary.summary):[]}),O=f(()=>{const s=_.value;return!s||!s.primary||!s.primary.monthlyReturns?[]:t.buildAnnualReturns?t.buildAnnualReturns(s.primary.monthlyReturns):[]}),F=f(()=>{const s=_.value;return!s||!s.primary?[]:(s.primary.trades||[]).slice().sort((b,i)=>String(i.date||"").localeCompare(String(b.date||"")))}),$=f(()=>{const s=_.value;return!s||!s.strategies||s.strategies.length<2?[]:s.strategies.map(b=>({name:b.name,metrics:t.buildMetrics?t.buildMetrics(b.summary):[]}))}),H=f(()=>{const s=_.value;return!s||!s.primary?null:t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(s.primary.equityCurve):null});async function W(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const b=l.value;if(!b.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const i=h.value,p={start_date:i&&i[0]||void 0,end_date:i&&i[1]||void 0},ee={"Content-Type":"application/json"};k.value=!0,_.value=null,x.value="";try{if(b.length===1){const z=Object.assign({},p,{initial_capital:Number(r.value)||1e5,commission_rate:Number(E.value)||3e-4}),w=await fetch("/api/backtest/"+encodeURIComponent(b[0]),{method:"POST",headers:ee,body:JSON.stringify(z)});if(!w.ok){const T=await w.json().catch(()=>({}));throw new Error(T.detail||"回测失败")}const m=await w.json();if(!m.success)throw new Error(m.message||"回测失败");_.value=I(b[0],m)}else{const z=await fetch("/api/backtest/multi",{method:"POST",headers:ee,body:JSON.stringify(Object.assign({},p,{strategy_ids:b}))});if(!z.ok){const m=await z.json().catch(()=>({}));throw new Error(m.detail||"回测失败")}const w=await z.json();if(!w.success)throw new Error(w.message||"多策略回测失败");if(_.value=K(b,w.data||{}),!_.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(z){x.value=z&&z.message?z.message:"回测失败",ElementPlus.ElMessage.error(x.value)}finally{k.value=!1}}function Z(){const s=_.value,b={dates:[],series:[]};if(!s)return b;const i=s.strategies.map(ee=>({name:ee.name,points:ee.equityCurve}));s.benchmark&&s.benchmark.points&&s.benchmark.points.length&&i.push({name:s.benchmark.name,points:s.benchmark.points});const p=t.buildNavSeries?t.buildNavSeries(i):b;return te(p,s)}function te(s,b){const i=N=>(getComputedStyle(document.documentElement).getPropertyValue(N)||"").trim(),p={primary:i("--qc-primary-600")||"#b8922a",success:i("--color-success")||"#4CAF50",accent:i("--color-accent")||"#F59E0B",info:i("--color-info")||"#1976d2",ai:i("--color-ai")||"#6366f1",textPrimary:i("--text-primary")||"#1f2937",textSecondary:i("--text-secondary")||"#6b7280",border:i("--border-light")||"#e5e7eb",up:i("--color-rise")||"#E63946",down:i("--color-fall")||"#2E7D32",bg:i("--bg-card")||"#ffffff"},ee=[p.primary,p.success,p.accent,p.info,p.ai],w=p.bg.length===7&&parseInt(p.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",m=t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(b.primary?b.primary.equityCurve:[]):null,T=m&&m.peakDate&&m.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:p.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+m.maxDrawdown+"%",xAxis:m.peakDate,itemStyle:{color:p.down}},{xAxis:m.troughDate}]]}:void 0,d=s.series.map((N,le)=>{const X=b.benchmark&&N.name===b.benchmark.name,R=ee[le%ee.length];return{name:N.name,type:"line",data:N.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:X?2:2.4,type:X?"dashed":"solid",color:R},itemStyle:{color:R},emphasis:{focus:"series"},...le===0&&T?{markArea:T}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:w,borderColor:p.border,textStyle:{color:p.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:p.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:s.dates,boundaryGap:!1,axisLine:{lineStyle:{color:p.border}},axisLabel:{color:p.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:p.textSecondary,fontSize:11},splitLine:{lineStyle:{color:p.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:p.border,textStyle:{color:p.textSecondary,fontSize:10}}],series:d}}function B(s){if(!s){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",Z,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function U(){const s=_.value;if(!s||!s.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const b=s.strategies.map(d=>({name:d.name,points:d.equityCurve}));s.benchmark&&b.push({name:s.benchmark.name,points:s.benchmark.points});const i=t.buildNavSeries?t.buildNavSeries(b):{dates:[],series:[]},p=t.tradeActionText||(d=>d),ee=F.value.map(d=>({date:d.date,stock:d.stock,action:p(d.action),reason:d.reason})),z=t.buildBacktestCsv?t.buildBacktestCsv({metrics:q.value,dates:i.dates,series:i.series,trades:ee}):"",w=new Blob(["\uFEFF"+z],{type:"text/csv;charset=utf-8"}),m=URL.createObjectURL(w),T=document.createElement("a");T.href=m,T.download="backtest-"+s.strategies.map(d=>d.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",T.click(),URL.revokeObjectURL(m),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function C(s,b){return s==null||s===""||isNaN(Number(s))?"--":Number(s).toFixed(b??2)}return{btStrategyOptions:o,btSelectedStrategies:l,toggleBtStrategy:P,btDateRange:h,btCapital:r,btCommissionRate:E,btIncludeBenchmark:y,btRunning:k,btResult:_,btError:x,btMetrics:q,btAnnualReturns:O,btTrades:F,btStrategyMetricsRows:$,btDrawdownRegion:H,runBacktestWorkbench:W,exportBacktestCSV:U,registerBacktestNavChart:B,btFmtNum:C}}}})();(function(){const{ref:a,computed:e,watch:f,onUnmounted:t}=Vue,c=r=>(getComputedStyle(document.documentElement).getPropertyValue(r)||"").trim(),u=72,S={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},o={stock:"股票",bond:"债券",commodity:"大宗商品",cash:"现金"},l={"🌱":"sprout","🔥":"flame","🌾":"wheat","❄️":"snowflake","📈":"trending-up","📉":"trending-down","📊":"bar-chart-3","💹":"line-chart","🏭":"factory","💰":"banknote","🛢":"fuel"},h={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const r=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"sprout",color:"var(--state-success-solid)",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),E=a({}),y=a(!1),k=a({}),_=a({cycles:[]}),x=a([]),L=a(0),P=a(!1),v=a({autoRefresh:!0,refreshInterval:300}),n=a(""),g=a(""),I=a(!1),K=a("");let q=null;const O={x:0,y:0},F=e(()=>{const J=E.value;return["recession","recovery","overheat","stagflation"].map(Re=>{const se=J[Re]||{};return{key:Re,name:se.name||Re,icon:l[se.icon]||"bar-chart-3",color:se.color||c("--text-tertiary")||"#888",bg:"color-mix(in srgb, "+(se.color||"var(--text-tertiary)")+" 14%, var(--bg-card))",textColor:"color-mix(in srgb, "+(se.color||"var(--text-tertiary)")+" 48%, var(--qc-foreground))",tagline:se.allocation&&h[Re]||""}})}),$=e(()=>{var ue,Re,se,ye;const J=r.value.indicators||{};return[{key:"pmi",label:"PMI",value:(ue=J.pmi)==null?void 0:ue.toFixed(2),color:J.pmi>=50?c("--color-success")||"#43a047":c("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((Re=J.gdp_growth)==null?void 0:Re.toFixed(2))+"%",color:c("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((se=J.cpi)==null?void 0:se.toFixed(2))+"%",color:J.cpi>1.2?c("--color-danger")||"#E53935":c("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((ye=J.m2_growth)==null?void 0:ye.toFixed(2))+"%",color:c("--color-success")||"#43a047"}]}),H=J=>{J=J||{};const ue=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],Re=()=>c("--color-success")||"#43a047",se=()=>c("--color-danger")||"#E53935",ye=()=>c("--color-warning")||"#FF9800",De={宽松:Re(),中位:ye(),偏低:se(),高增长:Re(),承压:se(),不利:se()};return ue.map(ve=>{const be=J[ve.key]||{},_e=be.score||0,ce=Math.min(100,Math.max(5,(_e+2)*25)),ae=_e>=.3?"var(--bar-fill-ok)":_e>=-.3?"var(--bar-fill-warn)":"var(--bar-fill-bad)",me=_e>=0?"var(--state-success-text)":"var(--state-danger-text)";return{key:ve.key,label:ve.label,scoreStr:_e.toFixed(2),level:be.level||"—",barWidth:ce,barColor:ae,scoreColor:me,color:De[be.level]||"var(--text-tertiary)"}})},W=e(()=>H(r.value.dimension_scores)),Z=e(()=>H(k.value._dimensions)),te=e(()=>{var ue;const J=((ue=r.value.confidence)==null?void 0:ue.level)||"";return J==="高"?"var(--state-success-text)":J==="中"?"var(--state-warning-text)":J==="低"?"var(--state-danger-text)":"var(--text-secondary)"}),B=e(()=>{var se,ye,De,ve;const J=E.value,ue={recovery:0,overheat:1,stagflation:2,recession:3},Re={};for(const[be,_e]of Object.entries(J))Re[be]={name:_e.name,icon:_e.icon,color:_e.color,lightColor:_e.bg_color,duration:"~"+(((se=_e.historical_stats)==null?void 0:se.avg_duration_months)||18)+"个月",order:ue[be]||0,period:((De=(ye=_e.case_studies)==null?void 0:ye[0])==null?void 0:De.split("：")[0])||"",avgMonths:((ve=_e.historical_stats)==null?void 0:ve.avg_duration_months)||18};return Re}),U=e(()=>{var _e,ce;const J=r.value.stage,Re={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[J]||{x:150,y:150},se=r.value.dimension_scores||{},ye=((_e=se.growth)==null?void 0:_e.score)||0,De=((ce=se.inflation)==null?void 0:ce.score)||0,ve=Math.max(-30,Math.min(30,ye*15)),be=Math.max(-30,Math.min(30,-De*15));return{x:Re.x+ve,y:Re.y+be,prevX:O.x,prevY:O.y}}),C=e(()=>{var se;const J=Math.min(100,((se=r.value.timing)==null?void 0:se.progress_percent)||0),ue=r.value.color||"var(--state-success-solid)",Re=J>100?"linear-gradient(90deg, "+ue+", var(--state-warning-solid))":ue;return{width:J+"%",background:Re}});function s(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[r.value.stage]||0}function b(){var J,ue;return((ue=(J=r.value)==null?void 0:J.timing)==null?void 0:ue.progress_percent)||0}function i(){var J,ue;return((ue=(J=r.value)==null?void 0:J.timing)==null?void 0:ue.duration_months)||0}function p(){var J,ue;return((ue=(J=r.value)==null?void 0:J.timing)==null?void 0:ue.avg_duration_months)||18}function ee(J){var ye,De;const ue=B.value,Re=((ye=ue[r.value.stage])==null?void 0:ye.order)||0;return(((De=ue[J])==null?void 0:De.order)||0)<Re}function z(J){return S[J]||J}function w(J){return o[J]||J}function m(J){const ue=["var(--state-success-tint)","var(--state-warning-tint)","var(--state-info-tint)","var(--qc-muted)"];return ue[J-1]||ue[3]}async function T(){try{const ue=await(await fetch("/api/market/merrill-clock/stages")).json();ue.success&&ue.data&&(E.value=ue.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function d(){P.value=!0;try{le();const ue=await(await fetch("/api/market/merrill-clock/timeline")).json();if(ue.success&&ue.data){const Re=Array.isArray(ue.data.cycles)?ue.data.cycles.slice().reverse():[];_.value={cycles:Re}}}catch{console.warn("获取美林时钟时间轴失败")}finally{P.value=!1}}async function N(J){await R(J)}async function le(){try{const ue=await(await fetch("/api/market/merrill-clock/snapshots?limit=30")).json();ue&&ue.success&&ue.data&&(x.value=ue.data.items||[],L.value=ue.data.total||0)}catch{console.warn("获取美林时钟评估轨迹失败")}}async function X(){var J,ue;try{const se=await(await fetch("/api/market/merrill-clock")).json(),ye=se.stage||"recovery",De=E.value[ye]||{};if(r.value={...De,...se,stage_cn:se.stage_cn||De.stage_cn||"",stage_name:se.stage_name||De.name||"",name:se.name||De.name||"复苏期"},n.value=new Date().toLocaleTimeString("zh-CN"),K.value&&K.value!==ye){const ve=E.value,be=((J=ve[K.value])==null?void 0:J.name)||K.value,_e=((ue=ve[ye])==null?void 0:ue.name)||ye;ElementPlus.ElMessage({message:"美林时钟阶段切换："+be+" → "+_e,type:"warning",duration:6e3,showClose:!0})}K.value=ye}catch(Re){console.error("获取美林时钟失败:",Re);const se=E.value.recovery||{};r.value={...se,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function R(J){var Re;y.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",k.value=E.value[J]||E.value.recovery||{};const ue=((Re=r.value)==null?void 0:Re.stage)===J;k.value._isCurrent=ue,ue&&r.value&&(k.value._nextPrediction=r.value.next_stage_prediction,k.value._confidence=r.value.confidence,k.value._stage=r.value.stage,k.value._dimensions=r.value.dimension_scores);try{const ye=await(await fetch("/api/market/merrill-clock/stage/"+J)).json();if(ye.success&&ye.data){const De={...E.value[J],...ye.data};De._is_current!==void 0&&(De._isCurrent=De._is_current),De._current_timing&&(De._currentTiming=De._current_timing),De._last_period&&(De._lastPeriod=De._last_period),k.value._nextPrediction&&(De._nextPrediction=k.value._nextPrediction),k.value._confidence&&(De._confidence=k.value._confidence),k.value._stage&&(De._stage=k.value._stage),k.value._dimensions&&(De._dimensions=k.value._dimensions),Object.assign(k.value,De)}}catch(se){console.warn("获取阶段详情失败:",se)}}function G(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:v.value.autoRefresh,refreshInterval:v.value.refreshInterval})),v.value.autoRefresh?(clearInterval(q),q=setInterval(X,v.value.refreshInterval*1e3)):clearInterval(q),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function oe(){I.value=!0,g.value="";try{const ue=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();ue.success?(g.value="重评估完成："+(ue.stage_name||ue.stage),await X(),ElementPlus.ElMessage.success("重评估完成")):(g.value=ue.message||"重评估失败",ElementPlus.ElMessage.error(ue.message||"重评估失败"))}catch{g.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{I.value=!1}}function pe(){const J=localStorage.getItem("merrill_clock_config");if(J)try{const ue=JSON.parse(J);v.value={...v.value,...ue}}catch{}v.value.autoRefresh&&(q=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),X()},v.value.refreshInterval*1e3))}function Se(){q&&clearInterval(q)}return t(()=>{Se()}),{merrillData:r,merrillStagesConfig:E,showMerrillDetail:y,merrillDetailData:k,merrillTimeline:_,merrillSnapshots:x,merrillSnapshotsTotal:L,fetchMerrillSnapshots:le,timelineLoading:P,merrillClockConfig:v,merrillClockLastUpdated:n,merrillReevalResult:g,merrillReevalLoading:I,stages:F,indicatorList:$,dimensionScoreList:W,detailDimensionScoreList:Z,confidenceColor:te,timelineStages:B,clockPosition:U,merrillProgressStyle:C,FULL_CYCLE_MONTHS:u,getStageAngle:s,getCycleProgress:b,getCurrentStageMonths:i,getStageTotalMonths:p,isStageCompleted:ee,getCharLabel:z,getAssetName:w,getRankColor:m,fetchMerrillStages:T,fetchMerrillClock:X,loadMerrillTimeline:d,showTimelineStage:N,showStageDetail:R,saveMerrillClockConfig:G,doMerrillReevaluate:oe,startAutoRefresh:pe,stopAutoRefresh:Se}}})();(function(){function a(o){return getComputedStyle(document.documentElement).getPropertyValue(o).trim()}var e=[210,28,165,290,348,190,52,250];function f(){var o=!1;try{o=document.documentElement.getAttribute("data-theme-mode")==="dark"}catch{}var l=o?62:58,h=o?62:40;return e.map(function(r){return"hsl("+r+", "+l+"%, "+h+"%)"})}function t(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:a("--chart-bg")||"transparent",color:f(),legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const c=[];function u(o){typeof o=="function"&&c.push(o)}function S(){c.slice().forEach(function(o){try{o()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:t,categoricalPalette:f,registerChart:u,refreshAllCharts:S,init(){return{getEChartsTheme:t,registerChart:u,refreshAllCharts:S}}}})();(function(){const{ref:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const f=e("qcState");try{const u=localStorage.getItem("quant_sidebar_collapsed");u!==null&&f.sidebarCollapsed&&(f.sidebarCollapsed.value=u==="1")}catch{}if(!f)return{};const t=async u=>{if(window.__quantGoPage){await window.__quantGoPage(u.key,u.subPages[0]||"");return}f.currentPage.value=u.key,f.currentSubPage.value=u.subPages[0]||""},c=()=>{f.sidebarCollapsed.value=!f.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",f.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:f.menus,currentPage:f.currentPage,sidebarCollapsed:f.sidebarCollapsed,navigate:t,toggle:c,sanitizeHtml:f.sanitizeHtml,keyClick:f.keyClick,t:f.t}}}})();const Ma={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(a){const e=a,f={"layout-dashboard":Qv,calendar:Yv,bot:Gv,"flask-conical":Uv,zap:Wv,settings:Kv,"chevron-down":Bv,"chevron-right":Hv,"chevron-left":Fv,menu:Vv,search:jv,bell:Ov,sun:Nv,moon:Iv,user:Lv,"user-round":Av,home:zv,x:Rv,database:Pv,activity:Dv,clock:Tv,"bar-chart-3":Mv,shield:Ev,"hard-drive":qv,"file-text":Cv,users:Sv,cpu:xv,"pie-chart":_v,info:kv,"log-out":wv,palette:bv,languages:yv,refresh:hv,download:gv,"external-link":pv,command:fv,sparkles:mv,"trending-up":vv,"trending-down":uv,"circle-dot":dv,check:cv,"alert-triangle":rv,loader:ov,"arrow-left":iv,"arrow-right":lv,eye:nv,"eye-off":sv,lock:av,"sliders-horizontal":tv,play:ev,history:Zu,layers:Xu,"line-chart":$u,target:Ju,"search-check":Qu,star:Yu,"message-circle":Gu,"calendar-days":Uu,"calendar-range":Wu,"calendar-check":Ku,brain:Bu,lightbulb:Hu,"octagon-x":Fu,flag:Vu,package:ju,"clipboard-list":Ou,pin:Nu,"radio-tower":Iu,gauge:Lu,landmark:Au,"candlestick-chart":zu,wallet:Ru,"badge-check":Pu,key:Du,factory:Tu,trophy:Mu,rocket:Eu,flame:qu,"map-pin":Cu,"scroll-text":Su,"book-open":xu,dna:_u,"bar-chart":ku,plus:wu,"star-off":bu,upload:yu,gem:hu,"folder-open":gu,link:pu,save:fu,"trash-2":mu,pause:vu,"help-circle":uu,"play-circle":du,pencil:cu,folder:ru,code:ou,sprout:iu,wheat:lu,snowflake:nu,fuel:su,banknote:au,send:tu,inbox:eu,"wifi-off":Zd,"check-circle-2":Xd,"x-circle":$d},t=()=>f[e.name]||f["circle-dot"];return(c,u)=>(fe(),ya(Od(t()),{size:a.size,"stroke-width":a.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},Ta=(a,e)=>{const f=a.__vccOpts||a;for(const[t,c]of e)f[t]=c;return f},Jv={name:"qc-sidebar",components:{AppIcon:Ma},setup(){const a=za("qcState");if(!a)return{};const e=ot(()=>a.menus&&a.menus.value||[]),f=ot(()=>a.currentPage&&a.currentPage.value||""),t=ot(()=>a.navMode&&a.navMode.value||"subnav"),c=ot({get:()=>a.sidebarCollapsed&&a.sidebarCollapsed.value||!1,set:P=>{a.sidebarCollapsed&&(a.sidebarCollapsed.value=P)}}),u=Nt({}),S={research:"量化投研",platform:"平台管理"},o=["research","platform"],l=P=>f.value===P.key,h=(P,v)=>f.value===P.key&&a.currentSubPage&&a.currentSubPage.value===v,r=P=>Array.isArray(P.subPages)&&P.subPages.length>1,E=(P,v)=>a.subPageNames&&a.subPageNames[v]||v;function y(P){!r(P)||c.value||(u.value[P.key]=!u.value[P.key])}function k(){e.value.forEach(P=>{u.value[P.key]===void 0&&(u.value[P.key]=l(P))})}async function _(P,v){const n=v||P.subPages&&P.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(P.key,n):(a.currentPage.value=P.key,a.currentSubPage&&(a.currentSubPage.value=n)),a.navigateTo&&a.navigateTo(P.key,n)}function x(){c.value=!c.value;try{localStorage.setItem("sidebar_collapsed",c.value?"1":"0")}catch{}}function L(P){if(P.ctrlKey&&P.key.toLowerCase()==="b"&&(P.preventDefault(),x()),!P.ctrlKey&&!P.metaKey&&!P.altKey&&(P.key==="ArrowDown"||P.key==="ArrowUp")){const v=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),n=v.indexOf(document.activeElement);if(n>=0){P.preventDefault();const g=v[(n+(P.key==="ArrowDown"?1:v.length-1))%v.length];g&&g.focus()}}}return Ya(()=>{k(),document.addEventListener("keydown",L)}),ms(()=>document.removeEventListener("keydown",L)),{state:a,menus:e,currentPage:f,navMode:t,sidebarCollapsed:c,expandedMenus:u,GROUP_LABELS:S,GROUPS:o,isActive:l,isChildActive:h,hasChildren:r,subLabel:E,toggleSubmenu:y,navigate:_,toggleCollapse:x}}},$v={class:"qc-sidebar-logo"},Xv={key:0,class:"qc-logo-text"},Zv={class:"qc-sidebar-nav"},em={key:0,class:"qc-nav-group"},tm={key:0,class:"qc-nav-group-label"},am=["href","aria-current","onClick"],sm={key:0,class:"qc-sidebar-label"},nm={key:1,class:"qc-nav-badge"},lm=["aria-expanded","aria-controls","onClick"],im=["id"],om=["href","aria-current","onClick"],rm={class:"qc-sidebar-child-label"},cm={class:"qc-sidebar-footer"},dm=["aria-expanded","aria-label","title"];function um(a,e,f,t,c,u){const S=Qt("AppIcon"),o=Qt("el-tooltip");return fe(),ge("nav",{class:vt(["qc-sidebar",{"is-collapsed":t.sidebarCollapsed}]),"aria-label":"主导航"},[qe("div",$v,[e[1]||(e[1]=jd('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),t.sidebarCollapsed?We("",!0):(fe(),ge("span",Xv,Be(t.state.t("login.title")),1))]),qe("div",Zv,[(fe(!0),ge(ft,null,Dt(t.GROUPS,l=>(fe(),ge(ft,{key:l},[t.menus.some(h=>h.group===l)?(fe(),ge("div",em,[t.sidebarCollapsed?We("",!0):(fe(),ge("span",tm,Be(t.GROUP_LABELS[l]),1)),(fe(!0),ge(ft,null,Dt(t.menus.filter(h=>h.group===l),h=>(fe(),ge(ft,{key:h.key},[qe("div",{class:vt(["qc-sidebar-item",{"has-children":t.navMode==="tree"&&t.hasChildren(h),"is-child-open":t.navMode==="tree"&&t.expandedMenus[h.key]}])},[ht(o,{content:h.name,placement:"right","show-after":300,disabled:!t.sidebarCollapsed},{default:ha(()=>[qe("a",{class:vt(["qc-sidebar-link",{"is-active":t.isActive(h)}]),href:"#"+h.key,"aria-current":t.isActive(h)?"page":null,onClick:Ft(r=>t.navigate(h),["prevent"])},[ht(S,{name:h.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),t.sidebarCollapsed?We("",!0):(fe(),ge("span",sm,Be(h.name),1)),!t.sidebarCollapsed&&h.badge?(fe(),ge("span",nm,Be(h.badge),1)):We("",!0)],10,am)]),_:2},1032,["content","disabled"]),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(h)?(fe(),ge("button",{key:0,class:vt(["qc-sidebar-chevron",{"is-open":t.expandedMenus[h.key]}]),"aria-expanded":!!t.expandedMenus[h.key],"aria-controls":"submenu-"+h.key,"aria-label":"展开子菜单",onClick:r=>t.toggleSubmenu(h)},[ht(S,{name:"chevron-down",size:14})],10,lm)):We("",!0)],2),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(h)&&t.expandedMenus[h.key]?(fe(),ge("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+h.key},[(fe(!0),ge(ft,null,Dt(h.subPages,r=>(fe(),ge("a",{key:r,class:vt(["qc-sidebar-item qc-sidebar-child",{"is-active":t.isChildActive(h,r)}]),href:"#"+h.key+"-"+r,"aria-current":t.isChildActive(h,r)?"page":null,onClick:Ft(E=>t.navigate(h,r),["prevent"])},[qe("span",rm,Be(t.subLabel(h,r)),1)],10,om))),128))],8,im)):We("",!0)],64))),128))])):We("",!0)],64))),128))]),qe("div",cm,[qe("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!t.sidebarCollapsed,"aria-label":t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:e[0]||(e[0]=(...l)=>t.toggleCollapse&&t.toggleCollapse(...l))},[ht(S,{name:t.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,dm)])],2)}const vm=Ta(Jv,[["render",um]]),mm={name:"qc-header",components:{AppIcon:Ma},setup(){const a=za("qcState");if(!a)return{};const e=Nt(!1),f=ot(()=>a.currentUser&&a.currentUser.value||null),t=ot(()=>a.navMode&&a.navMode.value||"subnav"),c=ot(()=>{const se=a.currentPage&&a.currentPage.value,ye=(a.menus&&a.menus.value||[]).find(De=>De.key===se);return!!(ye&&ye.subPages&&ye.subPages.length)}),u=ot(()=>{const se=a.currentPage&&a.currentPage.value,ye=a.currentPageName&&a.currentPageName.value;if(ye)return ye;const De=(a.menus&&a.menus.value||[]).find(ve=>ve.key===se);return De&&De.name||se||""}),S=ot(()=>{const se=a.currentSubPage&&a.currentSubPage.value;return se&&a.subPageNames&&a.subPageNames[se]||se||""}),o=Nt(typeof window<"u"?window.innerWidth<768:!1);function l(){o.value=window.innerWidth<768}Ya(()=>window.addEventListener("resize",l)),ms(()=>window.removeEventListener("resize",l));const h=Nt(!1),r=ot(()=>{const se=a.currentSubPage&&a.currentSubPage.value;return se&&a.subPageNames&&a.subPageNames[se]||se||""}),E=ot(()=>{const se=a.currentPage&&a.currentPage.value,ye=(a.menus&&a.menus.value||[]).find(De=>De.key===se);return(ye&&ye.subPages||[]).map(De=>({key:De,label:a.subPageNames&&a.subPageNames[De]||De}))});function y(){h.value=!h.value}function k(){h.value=!1}function _(se){h.value=!1,a.activateTab&&a.activateTab(a.currentPage.value,se)}const x=ot(()=>(a.currentTheme&&a.currentTheme.value)==="dark"),L=Nt(!1),P=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],v=ot(()=>{const se=P.find(ye=>ye.value===t.value);return se&&se.label||t.value});function n(){L.value=!L.value}function g(){L.value=!1}function I(se){L.value=!1,a.setNavMode&&a.setNavMode(se)}const K=ot({get:()=>a.searchQuery&&a.searchQuery.value||"",set:se=>{a.searchQuery&&(a.searchQuery.value=se)}}),q=Nt(!1),O=Nt([]),F=Nt(!1),$=Nt(!1);function H(){const se=localStorage.getItem("quant_token")||"";return se?{Authorization:"Bearer "+se,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function W(){F.value=!0,$.value=!1;try{const ye=await(await fetch("/api/alerts/history?limit=8",{headers:H()})).json();ye&&ye.success?O.value=ye.history||[]:O.value=[]}catch{$.value=!0,O.value=[]}finally{F.value=!1}}function Z(){q.value=!q.value,q.value&&W()}function te(){q.value=!1}function B(){q.value=!1,a.activateTab&&a.activateTab("system","notification")}const U=Nt(!1),C=a.themeHues||[45,220,0,140,270,320,180,25,250,-1],s=ot(()=>{const se=a.themeHue&&a.themeHue.value;return Number.isFinite(se)?se:45}),b=ot(()=>a.themeMode&&a.themeMode.value||"system"),i=[{k:"compact",n:"紧凑"},{k:"comfortable",n:"标准"},{k:"spacious",n:"宽松"}],p=ot(()=>a.density&&a.density.value||"comfortable");function ee(se){a.changeDensity&&a.changeDensity(se)}function z(se){return a.hueColor?a.hueColor(se):"hsl("+se+", 75%, 42%)"}const w={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色","-1":"中性"};function m(se){return a.hueName?a.hueName(se):w[se]||"自定义 "+se}function T(){U.value=!U.value}function d(){U.value=!1}function N(se){a.changeThemeMode&&a.changeThemeMode(se)}function le(se){a.changeThemeHue&&a.changeThemeHue(se)}function X(){a.changeThemeMode&&a.changeThemeMode(x.value?"light":"dark")}function R(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}a.sidebarCollapsed&&(a.sidebarCollapsed.value=!a.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",a.sidebarCollapsed.value?"1":"0")}catch{}}function G(){e.value=!e.value}function oe(){e.value=!1}function pe(se){return()=>{oe(),se&&se()}}function Se(){oe(),a.handleLogout&&a.handleLogout()}const J=ot(()=>a.marketData&&a.marketData.value||{}),ue=Nt(typeof window<"u"&&localStorage.getItem("qc.hideNonTradingBanner")==="1");return{marketData:J,bannerDismissed:ue,dismissBanner:()=>{ue.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},state:a,showUserMenu:e,currentUser:f,isDark:x,searchQuery:K,navMode:t,crumbRoot:u,crumbSub:S,hasToptabs:c,toggleThemeQuick:X,toggleSidebar:R,openUserMenu:G,closeUserMenu:oe,menuItem:pe,handleLogout:Se,openBellMenu:q,notifItems:O,notifLoading:F,notifError:$,toggleBell:Z,closeBell:te,goNotificationCenter:B,openThemeMenu:U,themeHues:C,themeHue:s,themeMode:b,hueColor:z,hueName:m,toggleThemeMenu:T,closeThemeMenu:d,pickThemeMode:N,pickThemeHue:le,DENSITY_MODES:i,density:p,pickDensity:ee,openNavModeMenu:L,NAV_MODES:P,navModeLabel:v,toggleNavModeMenu:n,closeNavModeMenu:g,pickNavMode:I,isMobile:o,openSubnavPicker:h,currentSubLabel:r,subnavOptions:E,toggleSubnavPicker:y,closeSubnavPicker:k,pickSubnav:_}}},fm={class:"qc-header-wrap"},pm={key:0,class:"non-trading-banner",role:"status"},gm={class:"qc-header"},hm={class:"visually-hidden"},ym={class:"qc-header-left"},bm=["aria-label"],wm={key:0,class:"qc-header-subnav"},km=["aria-expanded"],_m={class:"qc-subnav-picker-label"},xm={key:0,class:"qc-subnav-picker-menu",role:"menu"},Sm=["onClick"],Cm={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},qm={class:"qc-crumb qc-crumb-root"},Em={class:"qc-crumb qc-crumb-sub"},Mm={key:1,class:"qc-crumb qc-crumb-root"},Tm={class:"qc-header-center"},Dm={key:0,class:"qc-search-sublabel"},Pm={class:"qc-header-right"},Rm={class:"qc-hdr-pop"},zm=["aria-expanded"],Am={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},Lm={key:0,class:"qc-bell-state"},Im={key:1,class:"qc-bell-state"},Nm={key:2,class:"qc-bell-state"},Om={key:3,class:"qc-bell-list"},jm={class:"qc-bell-item-title"},Vm={class:"qc-bell-item-meta"},Fm={key:0},Hm={class:"qc-bell-item-time"},Bm={class:"qc-hdr-pop"},Km=["aria-expanded"],Wm={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},Um={class:"qc-theme-modes"},Gm=["onClick"],Ym={class:"qc-theme-swatches"},Qm=["title","aria-label","onClick"],Jm={key:0,class:"qc-theme-swatch-check"},$m={class:"qc-theme-custom-label"},Xm={class:"qc-theme-modes"},Zm=["onClick"],ef={key:0,class:"qc-navmode-switch"},tf=["aria-label","title","aria-expanded"],af={key:0,class:"qc-navmode-menu",role:"menu"},sf=["onClick","onKeydown"],nf={class:"qc-navmode-item-main"},lf={class:"qc-user-menu"},of=["aria-label","aria-expanded"],rf={key:0,class:"qc-user-dropdown",role:"menu"},cf={class:"qc-user-dropdown-header"},df={class:"qc-user-dropdown-name"},uf={key:0,class:"qc-user-dropdown-chip"};function vf(a,e,f,t,c,u){var E,y,k,_,x,L,P;const S=Qt("AppIcon"),o=Qt("qc-top-tabs"),l=Qt("el-autocomplete"),h=Qt("el-slider"),r=Vd("click-outside");return fe(),ge("div",fm,[t.marketData&&t.marketData.is_trading_day===!1&&!t.bannerDismissed?(fe(),ge("div",pm,[ht(S,{name:"alert-triangle",size:14}),e[15]||(e[15]=qe("span",null,"今日非交易日 · 当前展示最近交易日历史数据",-1)),qe("button",{class:"non-trading-banner-close",onClick:e[0]||(e[0]=(...v)=>t.dismissBanner&&t.dismissBanner(...v)),"aria-label":"关闭提示"},"×")])):We("",!0),qe("header",gm,[qe("h1",hm,Be(t.crumbRoot||"量化日历"),1),qe("div",ym,[qe("button",{class:"qc-icon-btn","aria-label":(E=t.state.sidebarCollapsed)!=null&&E.value?"展开侧边栏":"折叠侧边栏",onClick:e[1]||(e[1]=(...v)=>t.toggleSidebar&&t.toggleSidebar(...v))},[ht(S,{name:"menu",size:20})],8,bm),t.isMobile?Va((fe(),ge("div",wm,[qe("button",{class:"qc-subnav-picker","aria-expanded":t.openSubnavPicker,onClick:e[2]||(e[2]=(...v)=>t.toggleSubnavPicker&&t.toggleSubnavPicker(...v))},[qe("span",_m,Be(t.currentSubLabel||"二级"),1),ht(S,{name:"chevron-down",size:14})],8,km),t.openSubnavPicker?(fe(),ge("div",xm,[(fe(!0),ge(ft,null,Dt(t.subnavOptions,v=>(fe(),ge("div",{key:v.key,class:vt(["qc-subnav-picker-item",{"is-active":v.key===(t.state.currentSubPage&&t.state.currentSubPage.value)}]),role:"menuitem",onClick:n=>t.pickSubnav(v.key)},Be(v.label),11,Sm))),128))])):We("",!0)])),[[r,t.closeSubnavPicker]]):We("",!0),t.navMode==="tree"&&!t.isMobile?(fe(),ge("div",Cm,[qe("span",qm,Be(t.crumbRoot),1),t.crumbSub?(fe(),ge(ft,{key:0},[e[16]||(e[16]=qe("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),qe("span",Em,Be(t.crumbSub),1)],64)):We("",!0)])):We("",!0),t.navMode==="toptab"&&!t.isMobile?(fe(),ge(ft,{key:2},[t.hasToptabs?(fe(),ya(o,{key:0})):(fe(),ge("span",Mm,Be(t.crumbRoot),1))],64)):We("",!0)]),qe("div",Tm,[ht(l,{class:"qc-header-search",modelValue:t.searchQuery,"onUpdate:modelValue":e[3]||(e[3]=v=>t.searchQuery=v),"fetch-suggestions":t.state.searchStocks,placeholder:t.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:t.state.onSearchSelect},{prefix:ha(()=>[ht(S,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:ha(()=>[...e[17]||(e[17]=[qe("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:ha(v=>{var n,g,I,K,q;return[qe("span",null,Be((n=v==null?void 0:v.item)==null?void 0:n.icon)+" "+Be(((g=v==null?void 0:v.item)==null?void 0:g.label)||((I=v==null?void 0:v.item)==null?void 0:I.name)),1),(K=v==null?void 0:v.item)!=null&&K.subLabel?(fe(),ge("span",Dm,Be((q=v==null?void 0:v.item)==null?void 0:q.subLabel),1)):We("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),qe("div",Pm,[Va((fe(),ge("div",Rm,[qe("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":t.openBellMenu,onClick:e[4]||(e[4]=(...v)=>t.toggleBell&&t.toggleBell(...v))},[ht(S,{name:"bell",size:20})],8,zm),t.openBellMenu?(fe(),ge("div",Am,[e[18]||(e[18]=qe("div",{class:"qc-bell-header"},"通知",-1)),t.notifLoading?(fe(),ge("div",Lm,"加载中...")):t.notifError?(fe(),ge("div",Im,"加载失败")):t.notifItems.length?(fe(),ge("div",Om,[(fe(!0),ge(ft,null,Dt(t.notifItems,(v,n)=>(fe(),ge("div",{key:v.id||n,class:vt(["qc-bell-item",{"is-fail":v.ok===0}])},[qe("div",jm,Be(v.title||v.event_type||"事件"),1),qe("div",Vm,[Ea(Be(v.channel||""),1),v.recipient?(fe(),ge("span",Fm," · "+Be(v.recipient),1)):We("",!0),qe("span",Hm,Be(v.created_at||""),1)])],2))),128))])):(fe(),ge("div",Nm,"暂无通知")),qe("button",{class:"qc-bell-footer",onClick:e[5]||(e[5]=(...v)=>t.goNotificationCenter&&t.goNotificationCenter(...v))},"前往通知中心 →")])):We("",!0)])),[[r,t.closeBell]]),Va((fe(),ge("div",Bm,[qe("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":t.openThemeMenu,onClick:e[6]||(e[6]=(...v)=>t.toggleThemeMenu&&t.toggleThemeMenu(...v))},[ht(S,{name:"palette",size:20})],8,Km),t.openThemeMenu?(fe(),ge("div",Wm,[e[19]||(e[19]=qe("div",{class:"qc-theme-section-label"},"外观模式",-1)),qe("div",Um,[(fe(),ge(ft,null,Dt([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],v=>qe("button",{key:v.k,class:vt(["qc-theme-mode",{"is-active":t.themeMode===v.k}]),onClick:n=>t.pickThemeMode(v.k)},Be(v.n),11,Gm)),64))]),e[20]||(e[20]=qe("div",{class:"qc-theme-section-label"},"主题色",-1)),qe("div",Ym,[(fe(!0),ge(ft,null,Dt(t.themeHues,v=>(fe(),ge("button",{key:v,class:vt(["qc-theme-swatch",{"is-active":t.themeHue===v}]),style:Fd({background:t.hueColor(v)}),title:t.hueName(v),"aria-label":t.hueName(v),onClick:n=>t.pickThemeHue(v)},[t.themeHue===v?(fe(),ge("span",Jm,"✓")):We("",!0)],14,Qm))),128))]),ht(h,{class:"qc-theme-slider","model-value":t.themeHue,min:0,max:359,step:1,size:"small",onChange:t.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),qe("div",$m,"自定义 "+Be(t.themeHue)+"°",1),e[21]||(e[21]=qe("div",{class:"qc-theme-section-label"},"信息密度",-1)),qe("div",Xm,[(fe(!0),ge(ft,null,Dt(t.DENSITY_MODES,v=>(fe(),ge("button",{key:v.k,class:vt(["qc-theme-mode",{"is-active":t.density===v.k}]),onClick:n=>t.pickDensity(v.k)},Be(v.n),11,Zm))),128))])])):We("",!0)])),[[r,t.closeThemeMenu]]),t.isMobile?We("",!0):Va((fe(),ge("div",ef,[qe("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+t.navModeLabel,title:"导航形态: "+t.navModeLabel,"aria-expanded":t.openNavModeMenu,onClick:e[7]||(e[7]=(...v)=>t.toggleNavModeMenu&&t.toggleNavModeMenu(...v))},[ht(S,{name:"layers",size:20})],8,tf),t.openNavModeMenu?(fe(),ge("div",af,[(fe(!0),ge(ft,null,Dt(t.NAV_MODES,v=>(fe(),ge("div",{key:v.value,class:vt(["qc-user-dropdown-item qc-navmode-item",{"is-active":t.navMode===v.value}]),role:"menuitem",tabindex:"0",onClick:n=>t.pickNavMode(v.value),onKeydown:[ga(Ft(n=>t.pickNavMode(v.value),["prevent"]),["enter"]),ga(Ft(n=>t.pickNavMode(v.value),["prevent"]),["space"])]},[qe("div",nf,[qe("span",null,Be(v.label),1),t.navMode===v.value?(fe(),ya(S,{key:0,name:"check",size:14})):We("",!0)])],42,sf))),128))])):We("",!0)])),[[r,t.closeNavModeMenu]]),Va((fe(),ge("div",lf,[qe("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((y=t.currentUser)==null?void 0:y.username)||""),"aria-haspopup":"menu","aria-expanded":t.showUserMenu,onClick:e[8]||(e[8]=(...v)=>t.openUserMenu&&t.openUserMenu(...v))},Be((((k=t.currentUser)==null?void 0:k.username)||"A").charAt(0).toUpperCase()),9,of),t.showUserMenu?(fe(),ge("div",rf,[qe("div",cf,[qe("span",df,Be((_=t.currentUser)==null?void 0:_.username),1),((x=t.currentUser)==null?void 0:x.role)==="guest"?(fe(),ge("span",uf,"访客")):We("",!0)]),((L=t.currentUser)==null?void 0:L.role)==="admin"?(fe(),ge("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[9]||(e[9]=v=>t.menuItem(t.state.resetSetupWizard)()),onKeydown:e[10]||(e[10]=ga(Ft(v=>t.menuItem(t.state.resetSetupWizard)(),["prevent"]),["enter"]))},[ht(S,{name:"settings",size:16}),e[22]||(e[22]=Ea(" 重新运行初始化向导 ",-1))],32)):We("",!0),((P=t.currentUser)==null?void 0:P.role)!=="guest"?(fe(),ge("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[11]||(e[11]=v=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})()),onKeydown:e[12]||(e[12]=ga(Ft(v=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[ht(S,{name:"lock",size:16}),e[23]||(e[23]=Ea(" 修改密码 ",-1))],32)):We("",!0),e[25]||(e[25]=qe("div",{class:"qc-user-dropdown-divider"},null,-1)),qe("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:e[13]||(e[13]=(...v)=>t.handleLogout&&t.handleLogout(...v)),onKeydown:e[14]||(e[14]=ga(Ft((...v)=>t.handleLogout&&t.handleLogout(...v),["prevent"]),["enter"]))},[ht(S,{name:"log-out",size:16}),e[24]||(e[24]=Ea(" 退出登录 ",-1))],32)])):We("",!0)])),[[r,t.closeUserMenu]])])])])}const mf=Ta(mm,[["render",vf]]),ff=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],pf={name:"qc-subnav",components:{AppIcon:Ma},setup(){const a=za("qcState");if(!a)return{};const e=ot(()=>a.currentPage&&a.currentPage.value||""),f=ot(()=>a.currentSubPage&&a.currentSubPage.value||""),t=ot(()=>a.navMode&&a.navMode.value||"subnav"),c=Nt({}),u=ot(()=>a.menus&&a.menus.value||[]),S=ot(()=>u.value.find(P=>P.key===e.value)||null),o=ot(()=>S.value&&S.value.subPages||[]),l=ot(()=>a.currentPageName&&a.currentPageName.value||e.value),h=P=>a.subPageNames&&a.subPageNames[P]||P,r=P=>f.value===P;function E(P){a.openTab?a.openTab(e.value,P):a.currentSubPage&&(a.currentSubPage.value=P);try{localStorage.setItem("quant_last_subpage",P)}catch{}}function y(P){a.openTab?a.openTab(e.value,P.key):a.currentSubPage&&(a.currentSubPage.value=P.key);try{localStorage.setItem("quant_last_subpage",P.key)}catch{}}function k(P){c.value[P]=!c.value[P]}const _={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",notification:"bell",about:"info"}};return{state:a,currentPage:e,currentSubPage:f,navMode:t,subPages:o,currentMenu:S,collapsedGroups:c,pageTitle:l,subLabel:h,isSubActive:r,goSub:E,goSystemItem:y,toggleGroup:k,SYSTEM_GROUPS:ff,subIcon:(P,v)=>_[P]&&_[P][v]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},gf={key:0,class:"qc-subnav-column","aria-label":"二级导航"},hf={class:"qc-subnav-column-header"},yf={class:"qc-subnav-current-label"},bf={class:"qc-subnav-column-body"},wf=["onClick"],kf=["href","onClick"],_f={class:"qc-subnav-group-label"},xf=["href","onClick"],Sf=["href","onClick"];function Cf(a,e,f,t,c,u){const S=Qt("AppIcon");return t.navMode==="subnav"?(fe(),ge("aside",gf,[qe("div",hf,[qe("span",yf,Be(t.pageTitle),1)]),qe("div",bf,[t.currentPage==="system"?(fe(!0),ge(ft,{key:0},Dt(t.SYSTEM_GROUPS,o=>(fe(),ge("div",{key:o.label,class:"qc-subnav-group"},[qe("div",{class:"qc-subnav-group-label",onClick:l=>t.toggleGroup(o.label)},[qe("span",null,Be(o.label),1),ht(S,{name:"chevron-down",size:12,class:vt({"is-open":!t.collapsedGroups[o.label]})},null,8,["class"])],8,wf),t.collapsedGroups[o.label]?We("",!0):(fe(!0),ge(ft,{key:0},Dt(o.items,l=>(fe(),ge("a",{key:l.key,class:vt(["qc-subnav-item",{"is-active":t.isSubActive(l.key)}]),href:"#"+l.key,onClick:Ft(h=>t.goSystemItem(l),["prevent"])},[ht(S,{name:l.icon,size:16},null,8,["name"]),qe("span",null,Be(l.label),1)],10,kf))),128))]))),128)):t.currentPage==="shortterm"?(fe(!0),ge(ft,{key:1},Dt(t.SHORTTERM_GROUPS,o=>(fe(),ge("div",{key:o.label,class:"qc-subnav-group"},[qe("div",_f,[qe("span",null,Be(o.label),1)]),(fe(!0),ge(ft,null,Dt(o.items,l=>(fe(),ge("a",{key:l,class:vt(["qc-subnav-item",{"is-active":t.isSubActive(l)}]),href:"#"+t.currentPage+"/"+l,onClick:Ft(h=>t.goSub(l),["prevent"])},[ht(S,{name:t.subIcon(t.currentPage,l),size:16},null,8,["name"]),qe("span",null,Be(t.subLabel(l)),1)],10,xf))),128))]))),128)):(fe(!0),ge(ft,{key:2},Dt(t.subPages,o=>(fe(),ge("a",{key:o,class:vt(["qc-subnav-item",{"is-active":t.isSubActive(o)}]),href:"#"+t.currentPage+"/"+o,onClick:Ft(l=>t.goSub(o),["prevent"])},[ht(S,{name:t.subIcon(t.currentPage,o),size:16},null,8,["name"]),qe("span",null,Be(t.subLabel(o)),1)],10,Sf))),128))])])):We("",!0)}const qf=Ta(pf,[["render",Cf]]),Ef=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],Mf={name:"qc-mobile-nav",components:{AppIcon:Ma},setup(){const a=za("qcState");if(!a)return{};const e=Nt(!1),f=Nt(null),t=Nt({}),c=ot(()=>a.menus&&a.menus.value||[]),u=ot(()=>a.currentPage&&a.currentPage.value||""),S={research:"量化投研",platform:"平台管理"},o=["research","platform"];function l(v){return Array.isArray(v.subPages)&&v.subPages.length>0}function h(v){l(v)&&(t.value[v.key]=!t.value[v.key])}function r(v,n){return u.value===v.key&&a.currentSubPage&&a.currentSubPage.value===n}function E(v){return a.subPageNames&&a.subPageNames[v]||v}async function y(v){const n=c.value.find(I=>I.key===v.key),g=n&&n.subPages&&n.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(v.key,g):(a.currentPage.value=v.key,a.currentSubPage&&(a.currentSubPage.value=g)),a.navigateTo&&a.navigateTo(v.key,g)}function k(v,n){e.value=!1;const g=n||v.subPages&&v.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(v.key,g):(a.currentPage.value=v.key,a.currentSubPage&&(a.currentSubPage.value=g)),a.navigateTo&&a.navigateTo(v.key,g)}function _(){e.value=!0,t.value.shortterm===void 0&&(t.value.shortterm=!0)}function x(){e.value=!1;const v=document.querySelector(".qc-header .qc-icon-btn");v&&v.focus()}function L(v){v.detail&&v.detail.open&&_()}function P(v){e.value&&v.key==="Escape"&&x()}return Ya(()=>{window.addEventListener("qc:drawer",L),document.addEventListener("keydown",P)}),ms(()=>{window.removeEventListener("qc:drawer",L),document.removeEventListener("keydown",P)}),{state:a,TABS:Ef,menus:c,currentPage:u,drawerOpen:e,drawerFocusRef:f,drawerExpanded:t,GROUP_LABELS:S,GROUPS:o,hasSub:l,toggleDrawerMenu:h,isDrawerSubActive:r,subLabel:E,goTab:y,goMenu:k,openDrawer:_,closeDrawer:x}}},Tf={class:"qc-mobile-nav","aria-label":"移动端底部导航"},Df=["aria-current","onClick"],Pf={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},Rf={class:"qc-drawer-header"},zf={class:"qc-drawer-brand"},Af={class:"qc-drawer-body"},Lf={key:0},If={class:"qc-nav-group-label"},Nf=["href","aria-current","onClick"],Of={class:"qc-sidebar-label"},jf=["aria-expanded","onClick"],Vf={key:0,class:"qc-drawer-children"},Ff=["href","onClick"],Hf={class:"qc-drawer-footer"},Bf=["title"];function Kf(a,e,f,t,c,u){var o,l;const S=Qt("AppIcon");return fe(),ge(ft,null,[qe("nav",Tf,[(fe(!0),ge(ft,null,Dt(t.TABS,h=>(fe(),ge("button",{key:h.key,class:vt(["qc-mobile-tab",{"is-active":t.currentPage===h.key}]),"aria-current":t.currentPage===h.key?"page":null,onClick:r=>t.goTab(h)},[ht(S,{name:h.icon,size:22},null,8,["name"]),qe("span",null,Be(h.label),1)],10,Df))),128))]),(fe(),ya(Hd,{to:"body"},[t.drawerOpen?(fe(),ge("div",{key:0,class:"qc-drawer-backdrop",onClick:e[0]||(e[0]=(...h)=>t.closeDrawer&&t.closeDrawer(...h))})):We("",!0),t.drawerOpen?(fe(),ge("div",Pf,[qe("div",Rf,[qe("div",zf,[e[4]||(e[4]=qe("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[qe("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),qe("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),qe("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),qe("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),qe("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),qe("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),qe("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),qe("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),qe("span",null,Be(t.state.t("login.title")),1)]),qe("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:e[1]||(e[1]=(...h)=>t.closeDrawer&&t.closeDrawer(...h))},[ht(S,{name:"x",size:18})])]),qe("div",Af,[(fe(!0),ge(ft,null,Dt(t.GROUPS,h=>(fe(),ge(ft,{key:h},[t.menus.some(r=>r.group===h)?(fe(),ge("div",Lf,[qe("div",If,Be(t.GROUP_LABELS[h]),1),(fe(!0),ge(ft,null,Dt(t.menus.filter(r=>r.group===h),r=>(fe(),ge("div",{key:r.key,class:"qc-drawer-menu"},[qe("div",{class:vt(["qc-drawer-menu-row",{"is-active":t.currentPage===r.key}])},[qe("a",{class:vt(["qc-sidebar-item",{"is-active":t.currentPage===r.key}]),href:"#"+r.key,"aria-current":t.currentPage===r.key?"page":null,onClick:Ft(E=>t.hasSub(r)?t.toggleDrawerMenu(r):t.goMenu(r),["prevent"])},[ht(S,{name:r.iconName||"",size:18},null,8,["name"]),qe("span",Of,Be(r.name),1)],10,Nf),t.hasSub(r)?(fe(),ge("button",{key:0,class:vt(["qc-sidebar-chevron",{"is-open":t.drawerExpanded[r.key]}]),"aria-expanded":!!t.drawerExpanded[r.key],"aria-label":"展开子菜单",onClick:E=>t.toggleDrawerMenu(r)},[ht(S,{name:"chevron-down",size:14})],10,jf)):We("",!0)],2),t.drawerExpanded[r.key]?(fe(),ge("div",Vf,[(fe(!0),ge(ft,null,Dt(r.subPages,E=>(fe(),ge("a",{key:E,class:vt(["qc-subnav-item",{"is-active":t.isDrawerSubActive(r,E)}]),href:"#"+r.key+"/"+E,onClick:Ft(y=>t.goMenu(r,E),["prevent"])},[qe("span",null,Be(t.subLabel(E)),1)],10,Ff))),128))])):We("",!0)]))),128))])):We("",!0)],64))),128))]),qe("div",Hf,[qe("button",{class:"qc-icon-btn",title:((o=t.state.currentTheme)==null?void 0:o.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:e[2]||(e[2]=h=>{var r;return t.state.changeThemeMode&&t.state.changeThemeMode(((r=t.state.currentTheme)==null?void 0:r.value)==="dark"?"light":"dark")})},[ht(S,{name:((l=t.state.currentTheme)==null?void 0:l.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,Bf),qe("button",{class:"qc-icon-btn",title:"退出登录",onClick:e[3]||(e[3]=h=>t.state.handleLogout&&t.state.handleLogout())},[ht(S,{name:"log-out",size:18})])])])):We("",!0)]))],64)}const Wf=Ta(Mf,[["render",Kf]]),Uf={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(a,{emit:e,slots:f}){const t=za("qcState");function c(r){e("select",r)}function u(r){const E=r.strategy_names||r.strategies||[],y=E.slice(0,3),k=E.length>3?E.length-3:0,_=y.map(x=>({text:x,more:!1}));return k&&_.push({text:"+"+k,more:!0}),_}function S(r){const E=Number(r);return isFinite(E)?E.toFixed(2):"—"}function o(r){const E=Number(r);return isFinite(E)?(E>0?"+":"")+E.toFixed(2)+"%":"—"}function l(r){const E=Number(r.consensus_level);return isFinite(E)?Math.round(E*100):0}function h(r){const E=Number(r&&r.consensus_level);return isFinite(E)&&E>0}return{state:t,slots:f,select:c,displayTags:u,fmtPrice:S,fmtChange:o,pctOf:l,hasConsensus:h}}},Gf={class:"qc-stock-list"},Yf=["data-copy-code","aria-label","onClick","onKeydown"],Qf={key:0,class:"qc-stock-rank"},Jf={class:"qc-stock-info"},$f={class:"qc-stock-code"},Xf={class:"qc-stock-code-num"},Zf={key:0,class:"qc-stock-status is-new"},ep={key:1,class:"qc-stock-status is-out"},tp={class:"qc-stock-name"},ap={key:0,class:"qc-stock-consensus"},sp={key:1,class:"qc-stock-tags"},np={key:2,class:"qc-stock-badge"},lp={key:3,class:"qc-stock-data"},ip={class:"qc-stock-price"},op={key:4,class:"qc-stock-extra"},rp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},cp=["data-copy-code","aria-label","onClick","onKeydown"],dp={key:0,class:"qc-stock-rank"},up={class:"qc-stock-info"},vp={class:"qc-stock-code"},mp={class:"qc-stock-code-num"},fp={key:0,class:"qc-stock-status is-new"},pp={key:1,class:"qc-stock-status is-out"},gp={class:"qc-stock-name"},hp={key:0,class:"qc-stock-consensus"},yp={key:1,class:"qc-stock-tags"},bp={key:2,class:"qc-stock-badge"},wp={key:3,class:"qc-stock-data"},kp={class:"qc-stock-price"},_p={key:4,class:"qc-stock-extra"},xp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function Sp(a,e,f,t,c,u){const S=Qt("qc-state-panel"),o=Qt("qc-virtual-list");return fe(),ge("div",Gf,[f.loading?(fe(),ya(S,{key:0,type:"loading"})):f.items.length?(fe(),ge(ft,{key:2},[f.virtual?(fe(),ya(o,{key:0,items:f.items,"row-height":f.rowHeight},{default:ha(({item:l,index:h})=>[qe("div",{class:vt(["qc-stock-row",{"is-active":f.activeCode===l.code}]),"data-copy-code":f.copyCode?l.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(l.name||"")+" "+(l.code||""),onClick:r=>t.select(l),onKeydown:[ga(Ft(r=>t.select(l),["prevent"]),["enter"]),ga(Ft(r=>t.select(l),["prevent"]),["space"])]},[f.showRank?(fe(),ge("div",Qf,Be(h+1),1)):We("",!0),qe("div",Jf,[qe("div",$f,[qe("span",Xf,Be(l.code),1),l.status==="new"?(fe(),ge("span",Zf,Be(f.statusText.new),1)):l.status==="out"?(fe(),ge("span",ep,Be(f.statusText.out),1)):We("",!0)]),qe("div",tp,[Ea(Be(l.name)+" ",1),ra(a.$slots,"name-suffix",{item:l,index:h})]),f.showConsensus&&t.hasConsensus(l)?(fe(),ge("span",ap,Be(t.pctOf(l))+"% 共识",1)):We("",!0)]),(l.strategy_names||l.strategies)&&(l.strategy_names||l.strategies).length?(fe(),ge("div",sp,[(fe(!0),ge(ft,null,Dt(t.displayTags(l),r=>(fe(),ge("span",{key:r.text,class:vt(["qc-stock-tag",{"is-more":r.more}])},Be(r.text),3))),128))])):We("",!0),f.showConsensus?(fe(),ge("span",np,Be(l.strategy_count||0)+" 策略",1)):We("",!0),f.showPrice&&l.price!=null?(fe(),ge("div",lp,[qe("span",ip,Be(t.fmtPrice(l.price)),1),qe("span",{class:vt(["qc-stock-change",l.change_pct>0?"is-up":l.change_pct<0?"is-down":""])},Be(t.fmtChange(l.change_pct)),3)])):We("",!0),t.slots.extra?(fe(),ge("div",op,[ra(a.$slots,"extra",{item:l,index:h})])):We("",!0),t.slots.actions?(fe(),ge("div",{key:5,class:"qc-stock-actions",onClick:e[0]||(e[0]=Ft(()=>{},["stop"]))},[ra(a.$slots,"actions",{item:l,index:h})])):We("",!0),t.slots.footer?(fe(),ge("div",rp,[ra(a.$slots,"footer",{item:l,index:h})])):We("",!0)],42,Yf)]),_:3},8,["items","row-height"])):(fe(!0),ge(ft,{key:1},Dt(f.items,(l,h)=>(fe(),ge("div",{key:l.code,class:vt(["qc-stock-row",{"is-active":f.activeCode===l.code}]),"data-copy-code":f.copyCode?l.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(l.name||"")+" "+(l.code||""),onClick:r=>t.select(l),onKeydown:[ga(Ft(r=>t.select(l),["prevent"]),["enter"]),ga(Ft(r=>t.select(l),["prevent"]),["space"])]},[f.showRank?(fe(),ge("div",dp,Be(h+1),1)):We("",!0),qe("div",up,[qe("div",vp,[qe("span",mp,Be(l.code),1),l.status==="new"?(fe(),ge("span",fp,Be(f.statusText.new),1)):l.status==="out"?(fe(),ge("span",pp,Be(f.statusText.out),1)):We("",!0)]),qe("div",gp,[Ea(Be(l.name)+" ",1),ra(a.$slots,"name-suffix",{item:l,index:h})]),f.showConsensus&&t.hasConsensus(l)?(fe(),ge("span",hp,Be(t.pctOf(l))+"% 共识",1)):We("",!0)]),(l.strategy_names||l.strategies)&&(l.strategy_names||l.strategies).length?(fe(),ge("div",yp,[(fe(!0),ge(ft,null,Dt(t.displayTags(l),r=>(fe(),ge("span",{key:r.text,class:vt(["qc-stock-tag",{"is-more":r.more}])},Be(r.text),3))),128))])):We("",!0),f.showConsensus?(fe(),ge("span",bp,Be(l.strategy_count||0)+" 策略",1)):We("",!0),f.showPrice&&l.price!=null?(fe(),ge("div",wp,[qe("span",kp,Be(t.fmtPrice(l.price)),1),qe("span",{class:vt(["qc-stock-change",l.change_pct>0?"is-up":l.change_pct<0?"is-down":""])},Be(t.fmtChange(l.change_pct)),3)])):We("",!0),t.slots.extra?(fe(),ge("div",_p,[ra(a.$slots,"extra",{item:l,index:h})])):We("",!0),t.slots.actions?(fe(),ge("div",{key:5,class:"qc-stock-actions",onClick:e[1]||(e[1]=Ft(()=>{},["stop"]))},[ra(a.$slots,"actions",{item:l,index:h})])):We("",!0),t.slots.footer?(fe(),ge("div",xp,[ra(a.$slots,"footer",{item:l,index:h})])):We("",!0)],42,cp))),128))],64)):(fe(),ya(S,{key:1,type:"empty",title:f.emptyText},null,8,["title"]))])}const Cp=Ta(Uf,[["render",Sp]]),qp={name:"qc-detail-split",props:{enabled:{type:Boolean,default:!1},rootClass:{type:String,default:""},listClass:{type:String,default:""},paneClass:{type:String,default:""}}},Ep={key:0,class:"split-divider","data-split-resize":""};function Mp(a,e,f,t,c,u){return fe(),ge("div",{class:vt(["detail-split-wrap",[f.rootClass,{"detail-split":f.enabled}]]),"data-split-root":""},[qe("div",{class:vt(["detail-split-list",[f.listClass,{"w-100":!f.enabled}]])},[ra(a.$slots,"list")],2),f.enabled?(fe(),ge("div",Ep)):We("",!0),f.enabled?(fe(),ge("div",{key:1,class:vt(["detail-split-pane",f.paneClass])},[ra(a.$slots,"pane")],2)):We("",!0)],2)}const Tp=Ta(qp,[["render",Mp]]),Sn={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",notification:"bell",about:"info"}},Dp=200,Pp={name:"qc-top-tabs",components:{AppIcon:Ma},setup(){const a=za("qcState");if(!a)return{};const e=ot(()=>a.currentPage&&a.currentPage.value||""),f=ot(()=>a.currentSubPage&&a.currentSubPage.value||""),t=ot(()=>a.menus&&a.menus.value||[]),c=ot(()=>{const n=t.value.find(g=>g.key===e.value);return n&&n.subPages||[]}),u=ot(()=>c.value.map(n=>({key:n,label:a.subPageNames&&a.subPageNames[n]||n,icon:Sn[e.value]&&Sn[e.value][n]||"circle-dot"}))),S=Nt(null),o=Nt(!1),l=Nt(!1),h=Nt(!1);let r=null,E=null;function y(){const n=S.value;n&&(l.value=n.scrollLeft>2,h.value=n.scrollLeft<n.scrollWidth-n.clientWidth-2)}function k(){const n=S.value;n&&(o.value=n.scrollWidth>n.clientWidth+2,y())}function _(n){const g=S.value;g&&g.scrollBy({left:n*Dp,behavior:"smooth"})}function x(n){a.openTab?a.openTab(e.value,n):a.currentSubPage&&(a.currentSubPage.value=n)}function L(n){x(n),Kd(()=>{const g=S.value;if(!g)return;const I=g.querySelector('[data-tab-key="'+n+'"]');I&&I.scrollIntoView({block:"nearest",inline:"nearest"})})}const P=ot(()=>{if(!o.value)return[];const n=S.value;if(!n)return[];const g=n.getBoundingClientRect(),I=new Set;return n.querySelectorAll(".qc-top-tab").forEach(K=>{const q=K.getBoundingClientRect();q.left>=g.left-2&&q.left<g.right-24&&I.add(K.getAttribute("data-tab-key"))}),u.value.filter(K=>!I.has(K.key))});function v(n,g){n.key==="ArrowLeft"?(n.preventDefault(),_(-1)):n.key==="ArrowRight"?(n.preventDefault(),_(1)):(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),x(g.key))}return Ya(()=>{k(),r=new ResizeObserver(()=>{clearTimeout(E),E=setTimeout(k,100)}),S.value&&r.observe(S.value),window.addEventListener("resize",k)}),Bd(()=>{r&&r.disconnect(),window.removeEventListener("resize",k),clearTimeout(E)}),{state:a,tabs:u,currentSubPage:f,go:x,scrollRef:S,hasOverflow:o,canScrollLeft:l,canScrollRight:h,scrollByStep:_,scrollToTab:L,hiddenTabs:P,onTabKeydown:v,updateScrollState:y}}},Rp={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},zp=["disabled"],Ap=["data-tab-key","aria-selected","title","onClick","onKeydown"],Lp={class:"qc-top-tab-label"},Ip=["disabled"];function Np(a,e,f,t,c,u){const S=Qt("AppIcon"),o=Qt("el-dropdown-item"),l=Qt("el-dropdown-menu"),h=Qt("el-dropdown");return t.tabs.length?(fe(),ge("div",Rp,[t.hasOverflow?(fe(),ge("button",{key:0,class:"qc-top-tabs-btn",disabled:!t.canScrollLeft,"aria-label":"向左滚动",onClick:e[0]||(e[0]=r=>t.scrollByStep(-1))},"‹",8,zp)):We("",!0),qe("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:e[1]||(e[1]=(...r)=>t.updateScrollState&&t.updateScrollState(...r))},[(fe(!0),ge(ft,null,Dt(t.tabs,r=>(fe(),ge("div",{key:r.key,"data-tab-key":r.key,class:vt(["qc-top-tab",{"is-active":t.currentSubPage===r.key}]),role:"tab",tabindex:"0","aria-selected":t.currentSubPage===r.key?"true":"false",title:r.label,onClick:E=>t.go(r.key),onKeydown:E=>t.onTabKeydown(E,r)},[ht(S,{name:r.icon,size:14},null,8,["name"]),qe("span",Lp,Be(r.label),1)],42,Ap))),128))],544),t.hasOverflow?(fe(),ge("button",{key:1,class:"qc-top-tabs-btn",disabled:!t.canScrollRight,"aria-label":"向右滚动",onClick:e[2]||(e[2]=r=>t.scrollByStep(1))},"›",8,Ip)):We("",!0),t.hasOverflow&&t.hiddenTabs.length?(fe(),ya(h,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:t.scrollToTab},{dropdown:ha(()=>[ht(l,null,{default:ha(()=>[(fe(!0),ge(ft,null,Dt(t.hiddenTabs,r=>(fe(),ya(o,{key:r.key,command:r.key,class:vt({"is-active":t.currentSubPage===r.key})},{default:ha(()=>[ht(S,{name:r.icon,size:14},null,8,["name"]),Ea(" "+Be(r.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:ha(()=>[e[3]||(e[3]=qe("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):We("",!0)])):We("",!0)}const Op=Ta(Pp,[["render",Np]]);(function(){const{ref:a,computed:e,inject:f}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
    `,setup(){const t=f("qcState");if(!t)return{};const c=a(!1),u=a(localStorage.getItem("qc.hideNonTradingBanner")==="1"),S=()=>{u.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},o=e(()=>t.marketData&&t.marketData.value||{}),l=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:t.menus,marketData:o,bannerDismissed:u,dismissBanner:S,goMerrill:l,currentPage:t.currentPage,currentSubPage:t.currentSubPage,currentUser:t.currentUser,currentPageName:t.currentPageName,searchQuery:t.searchQuery,searchStocks:t.searchStocks,onSearchSelect:t.onSearchSelect,selectedDate:t.selectedDate,onDateChange:t.onDateChange,disabledDate:t.disabledDate,refreshCalendarData:t.refreshCalendarData,exportCSV:t.exportCSV,loading:t.loading,lastLoadTime:t.lastLoadTime,showUserMenu:c,resetSetupWizard:t.resetSetupWizard,showChangePassword:t.showChangePassword,themes:t.themes,currentTheme:t.currentTheme,changeTheme:t.changeTheme,handleLogout:t.handleLogout,subPageNames:t.subPageNames,keyClick:t.keyClick,t:t.t,subTabLabel:function(h,r){const E="sub."+h.key+"."+r,y=t.t(E);if(y!==E)return y;const k="sub."+r,_=t.t(k);return _!==k&&_?_:t.subPageNames[r]||r}}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                </div>`,setup(){const e=a("qcState");if(!e)return{};const{ref:f,computed:t}=Vue,c=f(0),u=f(0),S=f(!1),o=t(()=>{const q={day:"date",week:"week",month:"month",year:"year"},O=e.currentView&&e.currentView.value||"day";return q[O]||"date"}),l={day:"日",week:"周",month:"月",year:"年"};function h(q){return e.t&&e.t("view."+q)||l[q]||q}function r(q){e.switchView?e.switchView(q):e.currentView&&(e.currentView.value=q)}let E=null;function y(q){const O=q.touches&&q.touches[0];O&&(c.value=O.clientX,u.value=O.clientY)}async function k(){if(!S.value){S.value=!0;try{await e.refreshCalendarData()}catch{}E&&clearTimeout(E),E=setTimeout(()=>{S.value=!1},500)}}function _(q){if(!(window.innerWidth<=768))return;const O=q.changedTouches&&q.changedTouches[0];if(!O)return;const F=window.__quantModules&&window.__quantModules.gestures||{};if((typeof F.judgePullToRefresh=="function"?F.judgePullToRefresh(u.value,O.clientY):O.clientY-u.value>=60)&&(window.scrollY||0)<=0){q.stopPropagation(),k();return}if(e.currentSubPage.value==="pool")return;const H=O.clientX-c.value,W=O.clientY-u.value;Math.abs(H)>50&&Math.abs(H)>Math.abs(W)*1.2&&(e.navigateDate(H<0?1:-1),q.stopPropagation())}const x=f(!1),L=f(!1),P=f(""),v=f(null),n=f([]);function g(q){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[q]||q}async function I(){if(e.selectedDate.value){x.value=!0,L.value=!0,P.value="",v.value=null,n.value=[];try{const q=await fetch("/api/calendar/"+e.selectedDate.value+"/compare"),O=await q.json();if(!q.ok)throw new Error(O.detail||"HTTP "+q.status);v.value=O;const F=O&&O.comparison||{},$=[];for(const H of Object.keys(F)){if(H==="all_intersection")continue;const W=F[H]||{},Z=H.split("_vs_");$.push({label:g(Z[0])+" ↔ "+g(Z[1]),interCount:W.intersection_count||0,inter:(W.intersection||[]).join(", "),onlyS1Count:W.only_s1_count||0,onlyS1:(W.only_s1||[]).join(", "),onlyS2Count:W.only_s2_count||0,onlyS2:(W.only_s2||[]).join(", ")})}n.value=$}catch(q){P.value=String(q&&q.message?q.message:q)}finally{L.value=!1}}}let K="";return Vue.watch(()=>{const q=e.stockPool,O=q&&q.value||[];return{n:O.length,first:O[0]&&O[0].code,split:!!e.detailSplitEnabled.value}},(q,O)=>{if(!q.split||!q.first||q.n===0)return;const F=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,$=(e.stockPool.value||[]).some(H=>H.code===F);if(!(e.externalStockActive&&(!F&&e.externalStockActive(null)||F&&e.externalStockActive(F)))&&(!F||!$)){if(K===q.first&&F&&$===!1&&q.n>1)return;K=q.first,e.showStockDetail&&e.showStockDetail(q.first)}},{immediate:!0}),{...e,calType:o,pullRefreshing:S,onCalTouchStart:y,onCalTouchEnd:_,viewLabel:h,switchViewLocal:r,compareVisible:x,compareLoading:L,compareError:P,compareData:v,comparePairs:n,openStrategyCompare:I}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:`
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
                                <span class="color-primary-semibold-600" v-if="marketData.is_trading_day">● 交易日</span>
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
    `,setup(){const e=a("qcState"),f=Vue.ref(!1);if(!e)return{};const{computed:t}=Vue;let c=0;const u=t(()=>{var M;return((M=e.merrillData)==null?void 0:M.value)||{}}),S=t(()=>{var M;return((M=e.marketData)==null?void 0:M.value)||{}}),o=t(()=>{var M;return((M=e.dashboardData)==null?void 0:M.value)||{}}),l=t(()=>{var M;return((M=e.healthMetrics)==null?void 0:M.value)||[]}),h=t(()=>{var M;return((M=e.filteredConsensusRank)==null?void 0:M.value)||[]}),r=t(()=>{const M={};for(const ie of h.value)ie.code&&ie.name&&(M[ie.code]=ie.name);return M}),E={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function y(M){return E[M]||M}const k=t(()=>S.value.date||o.value.latest_date||"-"),_=t(()=>{const M=S.value;return!M||Object.keys(M).length===0?"数据加载中...":M.is_trading_day&&M.in_trading_hours?"● 交易中":M.is_trading_day?"已收盘":"○ 非交易日"}),x=t(()=>{const M=u.value.next_stage_prediction;return M&&M.next_stage_name&&M.transition_probability>.2?`→${M.next_stage_name} ${(M.transition_probability*100).toFixed(2)}%`:""}),L=t(()=>{const M=[],ie=o.value.pool_changes||{},Ee=ie.new_count||0;if(Ee>0){const ct=ie.new_stock_names||{},He=(ie.new_stocks||[]).map(St=>ct[St]||r.value[St]||St).slice(0,4).join("、");M.push({icon:"sparkles",level:"new",text:`今日新入池 ${Ee} 只${He?" · "+He:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(e.currentPage.value="calendar",e.currentSubPage.value="pool"),e.statusFilter.value="new"}})}for(const ct of l.value.filter(He=>He.degraded))M.push({icon:"alert-triangle",level:"warn",text:`数据源 ${y(ct.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});const Pe=u.value.timing;Pe&&Pe.progress_percent&&Pe.progress_percent>100?M.push({icon:"clock",level:"warn",text:`美林「${u.value.name}」已超期 ${Pe.progress_percent}%`,action:()=>{e.currentSubPage.value="merrill"}}):Pe&&Pe.maturity&&u.value.name&&M.push({icon:"clock",level:"info",text:`美林「${u.value.name}」阶段成熟度 ${Pe.maturity}`,action:()=>{e.currentSubPage.value="merrill"}});const Ge=S.value;return Ge&&Ge.is_trading_day===!1&&Ge.date&&M.push({icon:"calendar",level:"info",text:`${Ge.date} 非交易日`,action:()=>{e.currentSubPage.value="market"}}),M}),P=t(()=>{const M=[],ie=u.value.name||"",Ee=u.value.timing||{},Pe=["复苏","成长","过热"],Ge=["滞胀","衰退"];Pe.some(nt=>ie.includes(nt))&&M.push({kind:"opportunity",source:"美林",text:ie+" 顺势",action:()=>{e.currentSubPage.value="merrill"}}),Ge.some(nt=>ie.includes(nt))&&M.push({kind:"risk",source:"美林",text:ie+" 防守",action:()=>{e.currentSubPage.value="merrill"}}),Ee.progress_percent&&Ee.progress_percent>100&&M.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{e.currentSubPage.value="merrill"}});const ct=o.value.pool_changes||{},He=(ct.new_count||0)-(ct.out_count||0);He>=3?M.push({kind:"opportunity",source:"池变动",text:"净入池 +"+He,action:()=>{e.statusFilter.value="new",e.currentPage.value="calendar",e.currentSubPage.value="pool"}}):He<=-3&&M.push({kind:"risk",source:"池变动",text:"净出池 "+He,action:()=>{e.currentSubPage.value="consensus"}});const St=S.value.market_sentiment,et=St&&St.text||"";(et.includes("乐观")||et.includes("积极")||et.includes("亢奋"))&&M.push({kind:"opportunity",source:"情绪",text:et,action:()=>{e.currentSubPage.value="market"}}),(et.includes("悲观")||et.includes("恐慌")||et.includes("低迷"))&&M.push({kind:"risk",source:"情绪",text:et,action:()=>{e.currentSubPage.value="market"}});for(const nt of l.value.filter(at=>at.degraded))M.push({kind:"risk",source:"数据",text:y(nt.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});return M}),v=t(()=>{var M;return((M=e.merrillTimeline)==null?void 0:M.value)||e.merrillTimeline||{cycles:[]}}),n=t(()=>{var M;return((M=e.timelineLoading)==null?void 0:M.value)||!1});function g(M){const ie=e.showStageDetail;typeof ie=="function"&&ie(M)}function I(M){const ie=e.merrillStagesConfig,Pe=(ie&&ie.value?ie.value:ie||{})[M]||{};return Pe.color||Pe.bg_color||"var(--color-primary)"}function K(M){const ie=e.merrillStagesConfig,Ee=ie&&ie.value?ie.value:ie||{};return Ee[M]&&Ee[M].name||""}function q(){const M=e.merrillStagesConfig;return M&&M.value?M.value:M||{}}function O(M){return q()[M]&&q()[M].description||""}const F=Vue.ref([]),$=Vue.ref(null),H=Vue.ref(!1),W=Vue.ref(!1),Z=Vue.ref(7),te=Vue.ref(""),B=Vue.ref(""),U=Vue.computed(()=>{const M=new Set;return(F.value||[]).forEach(function(ie){ie.task&&M.add(ie.task)}),Array.from(M).sort()}),C=Vue.computed(function(){const M=$.value&&$.value.success_rate||0;return M>=80?"color-success":M>=50?"color-warning":"color-danger"});function s(M,ie){return M>0&&ie/M>=.8?"status-ok":M>0&&ie/M>=.5?"status-warn":"status-bad"}async function b(){const M=++c;H.value=!0,W.value=!1;try{const ie=window.__quantModules&&window.__quantModules.core||{},Ee=typeof ie.authHeaders=="function"?ie.authHeaders():{},Pe=new URLSearchParams({days:String(Z.value)});te.value&&Pe.set("task",te.value),B.value&&Pe.set("status",B.value);const[Ge,ct]=await Promise.all([fetch("/api/system/execution-history?"+Pe.toString(),{headers:Ee}).then(function(He){return He.json()}),fetch("/api/system/execution-summary?days="+Z.value,{headers:Ee}).then(function(He){return He.json()})]);if(M!==c)return;F.value=Ge&&Ge.data||[],$.value=ct&&ct.data||null}catch(ie){console.error("[execution] 执行数据加载失败:",ie),W.value=!0}finally{M===c&&(H.value=!1)}}const i=window.__quantModules&&window.__quantModules.i18n||{},p=typeof i.t=="function"?i.t:function(M){return String(M)},ee=Vue.ref([]),z=Vue.ref(null),w=Vue.ref(null),m=Vue.ref(""),T=Vue.ref([]),d=Vue.ref(!1);let N=null;const le=Vue.computed(function(){const M=w.value&&w.value.dates||[];return M.length&&!m.value&&(m.value=M[M.length-1].date),M}),X=Vue.computed(function(){const M=(ee.value||[]).find(function(Ee){return Ee.enabled});if(!M||M.countdown_seconds==null)return"—";const ie=M.countdown_seconds;return Math.floor(ie/3600)+"h"+String(Math.floor(ie%3600/60)).padStart(2,"0")+"m"}),R=Vue.computed(function(){const M=(ee.value||[]).find(function(ie){return ie.enabled});if(!M||M.countdown_seconds==null||M.countdown_seconds<0)return"";try{return new Date(Date.now()+M.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),G=Vue.computed(function(){const M=z.value;return!M||M.phase==="idle"?p("exec.waiting"):M.phase==="running"?p("exec.running")+(M.current_sid?" · "+M.current_sid:""):M.phase==="done"?p("exec.done"):p("exec.failed")}),oe=Vue.computed(function(){return z.value&&z.value.phase==="running"?"loader":"check-circle-2"}),pe=Vue.computed(function(){const M=w.value&&w.value.dates||[];return M.length?M[M.length-1].date:"—"}),Se=Vue.computed(function(){const M=w.value&&w.value.dates||[],ie=M[M.length-1];return ie&&ie.visible?"color-success":"color-danger"}),J=Vue.computed(function(){const M=w.value&&w.value.dates||[],ie=M[M.length-1];return ie?ie.day_view_total:"—"});function ue(M){const ie=window.__quantModules&&window.__quantModules.core||{},Ee=typeof ie.authHeaders=="function"?ie.authHeaders():{};return fetch(M,{headers:Ee}).then(function(Pe){return Pe.json()})}async function Re(){const M=++c;try{const[ie,Ee,Pe]=await Promise.all([ue("/api/strategies/execution/plan"),ue("/api/strategies/execution/status"),ue("/api/strategies/execution/results?days=7")]);if(M!==c)return;ee.value=ie&&ie.data&&ie.data.plans||[],z.value=Ee&&Ee.data||null,w.value=Pe&&Pe.data||null,z.value&&z.value.phase==="running"?se():ye()}catch(ie){console.error("[execution-monitor] 监控数据加载失败:",ie)}}function se(){ye(),N=setInterval(function(){ue("/api/strategies/execution/status").then(function(M){z.value=M&&M.data||null,z.value&&z.value.phase!=="running"&&(ye(),Re())}).catch(function(){})},5e3)}function ye(){N&&(clearInterval(N),N=null)}async function De(M){if(!M)return;const ie=++c;d.value=!0;try{const Ee=await ue("/api/strategies/execution/trace/"+encodeURIComponent(M));if(ie!==c)return;const Pe=Ee&&Ee.data||null;T.value=Pe&&Pe.steps||[]}catch(Ee){console.error("[execution-trace] 追溯加载失败:",Ee)}finally{ie===c&&(d.value=!1)}}Vue.watch(function(){return e.currentSubPage&&e.currentSubPage.value},function(M){M==="execution"?(b(),Re()):ye()},{immediate:!0}),Vue.watch(function(){const M=e.currentSubPage&&e.currentSubPage.value,ie=e.filteredConsensusRank&&e.filteredConsensusRank.value||[],Ee=e.marketData&&e.marketData.value||{};return{sub:M,split:!!e.detailSplitEnabled.value,top5:ie.slice(0,5),rank:ie,indices:(Ee.indices||[]).map(function(Pe){return Pe})}},function(M,ie){if(M.split){if(M.sub==="overview"){if(!M.top5.length)return;const Ee=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,Pe=M.top5.some(function(Ge){return Ge.code===Ee});(!Ee||!Pe)&&e.showStockDetail&&e.showStockDetail(M.top5[0].code)}else if(M.sub==="consensus"){if(!M.rank.length)return;const Ee=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,Pe=M.rank.some(function(Ge){return Ge.code===Ee});(!Ee||!Pe)&&e.showStockDetail&&e.showStockDetail(M.rank[0].code)}else if(M.sub==="market"){if(!M.indices.length)return;const Ee=e.indexDetail&&e.indexDetail.value&&e.indexDetail.value.code,Pe=M.indices.some(function(Ge){return Ge.code===Ee});(!Ee||!Pe)&&e.showIndexDetail&&e.showIndexDetail(M.indices[0])}}},{immediate:!0});const ve=Vue.ref("band"),be=["recession","recovery","overheating","stagflation"];function _e(M){if(!M)return null;const ie=String(M).split("-"),Ee=parseInt(ie[0],10),Pe=parseInt(ie[1]||"1",10);return isFinite(Ee)?Ee+(Pe-1)/12:null}function ce(M){const ie=Math.floor(M);let Ee=Math.round((M-ie)*12)+1;return Ee>12&&(Ee=12),Ee<1&&(Ee=1),ie+"-"+(Ee<10?"0"+Ee:""+Ee)}function ae(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.timing||{}}function me(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.color||"var(--color-success)"}function Ie(M,ie){const Ee=ae(),Pe=Number(Ee.avg_duration_months)||0,Ge=Math.min(100,Number(Ee.progress_percent)||0),ct=_e(Ee.current_stage_start_date),He=[];let St=null;if((M||[]).forEach(function(Ue){const qt=_e(Ue.start);St==null&&qt!=null&&(St=qt);const Et=!!(Ue.is_current||ct!=null&&qt===ct&&!Ue.duration_months),It=Ue.name||K(Ue.stage);if(Et&&Pe>0){const lt=Pe*Ge/100;lt>.5&&He.push({stage:Ue.stage,name:It,months:lt,live:!0,start:Ue.start});const Mt=Pe-lt;Mt>.5&&He.push({stage:Ue.stage,name:"剩余(预测)",months:Mt,ghost:!0,start:Ue.start})}else{let lt=Number(Ue.duration_months)||0;if(!lt&&qt!=null){const Mt=_e(Ue.end);Mt!=null&&Mt>qt&&(lt=Math.max(1,Math.round((Mt-qt)*12)))}lt||(lt=1),He.push({stage:Ue.stage,name:It,months:lt,live:Et,start:Ue.start,end:Ue.end})}if(Et&&ie&&Pe>0){const lt=e.merrillData&&e.merrillData.value&&e.merrillData.value.next_stage_prediction;lt&&He.push({stage:lt.next_stage,name:(lt.next_stage_name||"下一阶段")+" (预测)",months:Pe,ghost:!0,prob:lt.transition_probability})}}),!He.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};const et=He.reduce(function(Ue,qt){return Ue+qt.months},0)||1,nt=St??0;let at=0,Ot=0;const Ct=He.map(function(Ue){const qt=at;Ue.ghost||(Ot+=Ue.months),at+=Ue.months;const Et={stage:Ue.stage,name:Ue.name,months:Math.round(Ue.months),ghost:!!Ue.ghost,live:!!Ue.live,prob:Ue.prob,left:qt/et*100,width:Math.max(2,Ue.months/et*100)},It=_e(Ue.start),lt=_e(Ue.end);return Et.start=It!=null?ce(It):ce(nt+qt/12),Et.end=lt!=null?ce(lt):"",Et.predicted=It==null,Et}),Y=He[He.length-1],we=He.some(function(Ue){return Ue.ghost}),tt=Y&&Y.end?Y.end:ce(nt+et/12);return{segs:Ct,axisStart:ce(nt),axisEnd:tt,nowPct:we?Ot/et*100:null}}function Fe(M){return(M.stages||[]).some(function(ie){return ie.is_current})}const Ke=Vue.computed(function(){const M=e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[];if(!M.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};let ie=null;for(let Ee=M.length-1;Ee>=0;Ee--)if(Fe(M[Ee])){ie=M[Ee];break}return ie||(ie=M[M.length-1]),Ie(ie.stages,!0)});function _t(M){const ie=M&&M.stages?M.stages:[];if(!ie.length)return"";const Ee=ie[0]&&ie[0].start?String(ie[0].start).slice(0,4):"",Pe=ie[ie.length-1]||{},Ge=Pe.end?String(Pe.end).slice(0,4):Pe.start?String(Pe.start).slice(0,4):"";return Ee||Ge?Ee?Ee+"–"+Ge:Ge:""}const pt=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).filter(function(ie){return!Fe(ie)}).map(function(ie){return{label:ie.label,years:_t(ie),segs:Ie(ie.stages,!1).segs}})}),Pt=be,xe=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).map(function(ie){const Ee={};be.forEach(function(Ge){Ee[Ge]=0});let Pe=null;return(ie.stages||[]).forEach(function(Ge){Ee[Ge.stage]!=null&&(Ee[Ge.stage]+=Number(Ge.duration_months)||0),Ge.is_current&&(Pe=Ge.stage)}),{label:ie.label,sum:Ee,cur:Pe}})}),Ce=Vue.computed(function(){let M=0;return xe.value.forEach(function(ie){be.forEach(function(Ee){ie.sum[Ee]>M&&(M=ie.sum[Ee])})}),M||1}),Oe=Vue.computed(function(){const M=e.merrillSnapshots&&e.merrillSnapshots.value||[],ie=[];return M.forEach(function(Ee){const Pe=ie[ie.length-1];Pe&&Pe.stage===Ee.stage?(Pe.count++,Pe.last=Ee.timestamp):ie.push({stage:Ee.stage,name:Ee.stage_name||K(Ee.stage),count:1,first:Ee.timestamp,last:Ee.timestamp})}),ie}),Ne=Vue.computed(function(){return Math.max(100,Math.min(200,Number(ae().progress_percent)||0))}),Je=Vue.computed(function(){const M=Number(ae().progress_percent)||0;return{width:Math.max(0,Math.min(100,M/Ne.value*100))+"%",background:M>100?"linear-gradient(90deg, color-mix(in srgb, "+me()+" var(--bar-mix), var(--surface-card)), var(--bar-fill-warn))":"color-mix(in srgb, "+me()+" var(--bar-mix), var(--surface-card))"}}),$e=Vue.computed(function(){return 100/Ne.value*100}),Ye=Vue.computed(function(){const M=ae().predicted_end;if(!M)return"";if(typeof M=="string")return M;const ie=M.optimistic||M.earliest||"",Ee=M.pessimistic||M.latest||"";return ie&&Ee?ie+" ~ "+Ee:M.base||M.mid||ie||Ee||""});var rt=22;function bt(M){return"color-mix(in srgb, "+M+" "+rt+"%, var(--surface-card))"}function xt(M){const ie=I(M.stage);return M.ghost?{left:M.left+"%",width:M.width+"%",color:"var(--text-primary)",borderLeft:"3px solid "+ie,background:"repeating-linear-gradient(45deg, "+bt(ie)+" 0, "+bt(ie)+" 5px, var(--surface-card) 5px, var(--surface-card) 10px)"}:{left:M.left+"%",width:M.width+"%",background:bt(ie),color:"var(--text-primary)",borderLeft:"3px solid "+ie}}function Ht(M){const ie=[M.name];return M.start&&ie.push((M.predicted?"预计起始 ":"起始 ")+M.start+(M.end?" → "+M.end:"")),M.months&&ie.push("约 "+M.months+" 个月"),M.ghost&&ie.push("预测(尚未发生)"),M.prob!=null&&ie.push("转移概率 "+(M.prob*100).toFixed(0)+"%"),ie.join(" · ")}function aa(M,ie){const Ee=I(M),Pe=Math.max(.28,ie/Ce.value),Ge=Math.round(14+30*Pe);return{background:"color-mix(in srgb, "+Ee+" "+Ge+"%, var(--surface-card))",color:"var(--text-primary)"}}const Jt=Vue.computed(function(){const M=e.merrillData&&e.merrillData.value||e.merrillData||{},ie=M.color||I(M.stage);return{background:"color-mix(in srgb, "+ie+" 14%, var(--surface-card))",color:"color-mix(in srgb, "+ie+" 48%, var(--text-primary))",borderColor:"color-mix(in srgb, "+ie+" 26%, transparent)"}});return{...e,todayText:k,tradingStatus:_,merrillNext:x,todayFocus:L,todaySignals:P,merrillConfigOpen:f,getTimelineStageColor:I,getTimelineStageName:K,getTimelineStageDesc:O,merrillChipStyle:Jt,mcHistView:ve,mcCurrentBand:Ke,mcHistoryBands:pt,mcStageKeys:Pt,mcMatrix:xe,mcTrailRuns:Oe,mcProgStyle:Je,mcAvgMark:$e,mcEndRange:Ye,mcSegStyle:xt,mcSegTitle:Ht,mcMxCellStyle:aa,merrillTimeline:v,timelineLoading:n,showTimelineStage:g,execHistory:F,execSummary:$,execLoading:H,execError:W,execDays:Z,execTaskFilter:te,execStatusFilter:B,execTaskOptions:U,execSuccessClass:C,loadExecutionData:b,execRateClass:s,execPlan:ee,execStatus:z,execResults:w,execTraceDate:m,execTraceSteps:T,execTraceLoading:d,execResultsDates:le,execCountdownText:X,execNextRunText:R,execPhaseText:G,execStatusIcon:oe,execLastDate:pe,execVisibleClass:Se,execVisibleText:J,loadExecutionTrace:De}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:`
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
                    </div>
    `,setup(){const e=a("qcState");if(!e)return{};function f(Y){e.currentSubPage.value=Y}function t(){ae(),me(),Ie()}Vue.watch(()=>e.currentSubPage&&e.currentSubPage.value,Y=>{Y==="autoeval"&&e.loadAiVendors&&e.loadAiVendors(),Y==="datadict"&&X(),Y==="health"&&m(),Y==="notification"&&t(),Y==="datasource"&&L(),Y!=="usage"&&s()});const c=e.themeHues||[45,220,0,140,270,320,180,25,250,-1],u=e.themeHueNames||{},S=e.themeMode||Vue.computed(()=>"light"),o=e.themeHue||Vue.ref(45);function l(Y){e.changeThemeMode&&e.changeThemeMode(Y)}function h(Y){e.changeThemeHue&&e.changeThemeHue(parseInt(Y,10))}function r(Y){return e.hueColor?e.hueColor(Y):Y<0?"hsl(0, 0%, 46%)":"hsl("+Y+", 75%, 42%)"}function E(Y){return e.hueName?e.hueName(Y):u[Y]||"自定义 "+Y}function y(Y){e.setNavMode&&e.setNavMode(Y)}const k=Vue.ref([]),_=Vue.ref([]),x=Vue.ref(!1);async function L(){x.value=!0;try{const we=await(await fetch("/api/meta/freshness")).json();we&&we.success&&(_.value=we.items||[])}catch{}x.value=!1}const P=Vue.ref(""),v=Vue.ref("read"),n=Vue.ref(""),g=Vue.ref(!1),I=()=>window.__quantModules&&window.__quantModules.core||{},K=Vue.ref([]),q=Vue.ref(!1);async function O(){q.value=!0;try{const Y=await fetch("/api/audit/logs?limit=20",{headers:I().authHeaders?I().authHeaders():{}}).then(function(we){if(!we.ok)throw new Error("HTTP "+we.status);return we.json()});K.value=Y&&Y.logs||[]}catch(Y){console.error("[system] 审计加载失败:",Y),K.value=[]}finally{q.value=!1}}const F=Vue.ref(!1),$=Vue.ref(null),H=Vue.ref(null),W=Vue.ref([]),Z=Vue.ref(null);function te(Y){return Y==="completed"?"完成":Y==="running"?"运行中":Y==="pending"?"排队中":Y==="cancelled"?"已取消":"失败"}async function B(){try{const we=await(await fetch("/api/jobs?limit=20")).json();we&&we.success&&(W.value=we.data&&we.data.tasks||[])}catch(Y){console.warn("[system] 加载任务队列失败:",Y)}}async function U(Y){try{await fetch("/api/jobs/"+Y+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),B()}catch(we){console.warn("[system] 取消任务失败:",we)}}function C(){B(),Z.value=window.setInterval(B,15e3)}function s(){Z.value&&(clearInterval(Z.value),Z.value=null)}Vue.onBeforeUnmount&&Vue.onBeforeUnmount(function(){s()});const b=Vue.ref({items:[]}),i=Vue.ref([]),p=Vue.ref(null),ee=Vue.ref({data_sources:[],alerts:[]}),z=function(){return I().authHeaders?I().authHeaders():{}},w=function(Y){return fetch(Y,{headers:z()}).then(function(we){if(!we.ok)throw new Error("HTTP "+we.status);return we.json()})};async function m(){F.value=!0,$.value=null;try{const[Y,we,tt,Ue]=await Promise.all([w("/api/reliability/freshness"),w("/api/reliability/heal-history?limit=20"),w("/api/reliability/startup-report"),w("/api/reliability/source-health")]);b.value=Y&&Y.data||{items:[]},i.value=we&&we.data||[],p.value=tt&&tt.data||null,ee.value=Ue||{data_sources:[],alerts:[]},H.value=new Date().toLocaleTimeString()}catch(Y){console.warn("[health] 加载失败:",Y),$.value="健康数据加载失败: "+(Y.message||""),b.value={items:[]},i.value=[]}finally{F.value=!1}}const T=Vue.ref(!1),d=Vue.ref(""),N=Vue.ref(""),le=Vue.ref({fields:[]});async function X(){T.value=!0,d.value="";try{const Y="/api/data-dict"+(N.value?"?category="+N.value:""),we=await w(Y);le.value=we&&we.data||{fields:[]}}catch(Y){console.warn("[dict] 加载失败:",Y),d.value="数据字典加载失败: "+(Y.message||""),le.value={fields:[]}}finally{T.value=!1}}function R(Y){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[Y]||"var(--text-secondary)"}function G(Y){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[Y]||Y}const oe=Vue.computed(()=>(b.value?b.value.items||[]:[]).filter(we=>we.status==="stale"||we.status==="missing").length),pe=Vue.ref("rules"),Se=Vue.ref([]),J=Vue.ref([]),ue=Vue.ref([]),Re=Vue.ref(!1),se=Vue.ref(""),ye=Vue.ref("price_above"),De=Vue.ref(""),ve=Vue.ref(!1),be=Vue.ref(60),_e=Vue.ref("");function ce(Y){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[Y]||Y}async function ae(){Re.value=!0;try{const Y=await(await fetch("/api/alerts/rules")).json();Se.value=Y&&Y.rules||[]}catch(Y){_e.value="规则加载失败: "+Y}finally{Re.value=!1}}async function me(){Re.value=!0;try{const Y=await(await fetch("/api/alerts/history?limit=50")).json();J.value=Y&&Y.history||[]}catch(Y){_e.value="历史加载失败: "+Y}finally{Re.value=!1}}async function Ie(){Re.value=!0;try{const Y=await(await fetch("/api/alerts/channels")).json(),we=await(await fetch("/api/alerts/silence")).json();ue.value=Y&&Y.channels||[],ve.value=!!(we&&we.silenced)}catch(Y){_e.value="通道状态加载失败: "+Y}finally{Re.value=!1}}function Fe(Y){pe.value=Y,Y==="rules"?ae():Y==="history"?me():Ie()}async function Ke(){const Y=se.value.trim();if(!Y){_e.value="请填写股票代码";return}Re.value=!0;try{const we={stock_code:Y,rule_type:ye.value};if(ye.value!=="new_pool"){const Ue=Number(De.value);if(isNaN(Ue)){_e.value="阈值必须为数值";return}we.threshold=Ue}const tt=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(we)})).json();tt&&tt.rule?(_e.value="规则已添加",se.value="",De.value="",ae()):_e.value=tt&&tt.detail||"添加失败"}catch(we){_e.value="添加失败: "+we}finally{Re.value=!1}}async function _t(Y){try{await fetch("/api/alerts/rules/"+Y.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!Y.enabled})}),Y.enabled=!Y.enabled}catch(we){_e.value="切换失败: "+we}}async function pt(Y){try{const we=await(await fetch("/api/alerts/rules/"+Y.id,{method:"DELETE"})).json();we&&we.success?(_e.value="规则已删除",ae()):_e.value="删除失败"}catch(we){_e.value="删除失败: "+we}}async function Pt(){try{const Y=ve.value?be.value:0,we=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:Y})})).json();ve.value=!!(we&&we.silenced),_e.value=ve.value?"已静默":"已恢复推送"}catch(Y){_e.value="静默设置失败: "+Y}}async function xe(){ve.value=!1,await Pt()}function Ce(Y){return!!Y&&!Y.degraded}const Oe=Vue.computed(()=>(e&&e.analyticsRank&&e.analyticsRank.value||[]).reduce((we,tt)=>Math.max(we,tt.views||0),0)||1),Ne=()=>I().OPENAPI_ROUTE_BASE||"/api/openapi";async function Je(){g.value=!0;try{const Y=await I().apiFetch(Ne()+"/keys");k.value=Y&&Y.data||[]}catch(Y){ElementPlus.ElMessage.error("加载 API Key 失败: "+(Y.message||""))}finally{g.value=!1}}async function $e(){try{const Y=await I().apiFetch(Ne()+"/keys",{method:"POST",body:JSON.stringify({name:P.value||"未命名",role:v.value||"read",expire_days:365})});Y&&Y.success?(n.value=Y.api_key||"",P.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await Je()):ElementPlus.ElMessage.error(Y&&(Y.detail||Y.message)||"生成失败")}catch(Y){ElementPlus.ElMessage.error("生成失败: "+(Y.message||""))}}async function Ye(){if(n.value)try{await navigator.clipboard.writeText(n.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function rt(Y){try{const we=await I().apiFetch(Ne()+"/keys/"+Y.id,{method:"DELETE"});we&&we.success?(ElementPlus.ElMessage.success("Key 已吊销"),n.value&&Y.prefix&&n.value.includes(Y.prefix)&&(n.value=""),await Je()):ElementPlus.ElMessage.error(we&&(we.detail||we.message)||"吊销失败")}catch(we){ElementPlus.ElMessage.error("吊销失败: "+(we.message||""))}}const bt={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function xt(Y){return bt[Y]||Y}const Ht=computed(()=>{var Y;return(((Y=e.healthMetrics)==null?void 0:Y.value)||[]).map(we=>({name:xt(we.name),source:we.name,success_rate:we.success_rate,avg_latency_ms:we.avg_latency_ms,calls:we.calls||0,degraded:!!we.degraded,data_age_hours:we.data_age_hours!=null?we.data_age_hours:null,stale:!!we.stale,last_fetch:we.last_fetch||we.last_success||null}))});function aa(Y){return Y.degraded?"degraded":Y.success_rate==null?"unknown":Y.success_rate>=90?"ok":Y.success_rate>=60?"warn":"bad"}function Jt(Y){return Y==null?"":Y<1?"刚刚":Y<24?Math.round(Y)+"小时前":Math.floor(Y/24)+"天前"}const M=e.aiUsage||Vue.ref({}),ie=Vue.computed(()=>{const Y=M.value&&M.value.by_model||{};return Object.entries(Y).map(([we,tt])=>({name:we,count:tt})).sort((we,tt)=>tt.count-we.count)}),Ee=Vue.computed(()=>ie.value.reduce((Y,we)=>Math.max(Y,we.count),0)||1),Pe=Vue.computed(()=>ie.value.reduce((Y,we)=>Y+we.count,0)||1),Ge=Vue.computed(()=>ct.value.reduce((Y,we)=>Math.max(Y,we.count),0)||0),ct=Vue.computed(()=>{const Y=M.value&&M.value.by_day||{},we=[],tt=new Date;for(let Ue=29;Ue>=0;Ue--){const qt=new Date(tt.getFullYear(),tt.getMonth(),tt.getDate()-Ue),Et=qt.getFullYear()+"-"+String(qt.getMonth()+1).padStart(2,"0")+"-"+String(qt.getDate()).padStart(2,"0");we.push({day:Et,count:Y[Et]||0})}return we}),He=Vue.computed(()=>ct.value.reduce((Y,we)=>Math.max(Y,we.count),0)||1),St=Vue.computed(()=>{const Y=M.value&&M.value.by_day||{},we=new Date,tt=we.getFullYear()+"-"+String(we.getMonth()+1).padStart(2,"0")+"-"+String(we.getDate()).padStart(2,"0");return Y[tt]||0}),et=Vue.computed(()=>{const Y=M.value&&M.value.by_day||{},we=Object.keys(Y).filter(tt=>(Y[tt]||0)>0);return we.length?we[we.length-1]:""});function nt(Y){e.analyticsDays&&(e.analyticsDays.value=Y),typeof e.loadAnalytics=="function"&&e.loadAnalytics()}const at='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',Ot='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function Ct(Y){return Y?Ot:at}return C(),{...e,themeHues:c,themeHueNames:u,themeMode:S,themeHue:o,onThemeModeChange:l,setThemeHue:h,hueColor:r,hueName:E,onNavModeChange:y,analyticsMaxViews:Oe,aiModelRank:ie,aiModelMax:Ee,aiDayTrend:ct,aiDayMax:He,todayAiCalls:St,lastAiCallDay:et,aiTotal:Pe,aiDayPeak:Ge,setAnalyticsDays:nt,viewIcon:Ct,openApiKeys:k,openApiKeyName:P,openApiKeyRole:v,newOpenApiKey:n,openApiLoading:g,loadOpenApiKeys:Je,generateOpenApiKey:$e,copyOpenApiKey:Ye,revokeOpenApiKey:rt,healthRows:Ht,healthClass:aa,fmtAge:Jt,staleAssetCount:oe,jobQueue:W,loadJobQueue:B,cancelJob:U,jobStatusText:te,auditLogs:K,auditLoading:q,loadAuditLogs:O,healthLoading:F,healthError:$,healthUpdatedAt:H,freshnessData:b,healHistory:i,startupReport:p,sourceHealth:ee,refreshHealth:m,statusColor:R,statusLabel:G,sourceOk:Ce,dictLoading:T,dictError:d,dictCategory:N,dictData:le,loadDataDict:X,ncTab:pe,ncRules:Se,ncHistory:J,ncChannels:ue,ncLoading:Re,ncNewCode:se,ncNewType:ye,ncNewThreshold:De,ncSilence:ve,ncSilenceMinutes:be,ncMsg:_e,ncTypeLabel:ce,onNcTab:Fe,loadAlertRules:ae,loadAlertHistory:me,loadAlertChannels:Ie,addAlertRule:Ke,toggleAlertRule:_t,removeAlertRule:pt,applySilence:Pt,clearSilence:xe,freshnessItems:_,freshnessLoading:x,loadFreshness:L,goSystemSub:f}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:`
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
                </div>`,setup(){const{ref:e,watch:f,onUnmounted:t}=Vue,c=a("qcState");if(!c)return{};function u(){if(!c.hasMoreAiHistory||!c.loadMoreAiHistory||c.currentPage.value!=="ai"||c.currentSubPage.value!=="history")return;const pe=document.documentElement;pe.scrollTop+window.innerHeight>=pe.scrollHeight-300&&c.loadMoreAiHistory()}window.addEventListener("scroll",u,{passive:!0}),t(()=>window.removeEventListener("scroll",u));const S=e(null),o=e(!1),l=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function h(pe){return!pe||pe.total===0||pe.rate===null||pe.rate===void 0?"--":pe.rate.toFixed(2)+"%"}const r=e(5);function E(pe){r.value=pe}function y(pe,Se){if(!pe)return"--";if(pe.available===!1)return"— 数据不可达";const J=pe["hit_n"+Se];return J===!0?"✓ 命中":J===!1?"✗ 未中":"– 中性/待验证"}async function k(){o.value=!0;try{const Se=await(await fetch("/api/ai/track")).json();S.value=Se&&Se.success?Se.data:null}catch(pe){console.warn("[eval-track] 评估命中率加载失败:",pe),S.value=null}finally{o.value=!1}}f(function(){return c.currentPage.value+"/"+c.currentSubPage.value},function(pe){pe==="ai/evaluation-analysis"&&k()},{immediate:!0});const _=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:x,summary:L,trades:P,loading:v,loadError:n,showAddForm:g,addForm:I,addSaving:K,tradeFormVisible:q,tradeForm:O,tradeSaving:F,portfolioTab:$,equityDays:H,equityLoading:W,equityNote:Z,equityHasData:te,loadPortfolio:B,addPosition:U,removePosition:C,openTradeForm:s,submitTrade:b,loadTrades:i,loadEquity:p,fmtSigned:ee,fmtSignedPct:z,signClass:w,riskTab:m,riskLoading:T,riskNote:d,riskHasData:N,riskData:le,riskMetricList:X,loadRisk:R}=_;f(x,function(pe){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((pe||[]).map(function(Se){return{code:Se.stock_code,name:Se.stock_name||Se.stock_code}}))},{deep:!0}),f(function(){return c.currentPage.value+"/"+c.currentSubPage.value},function(pe){pe==="ai/portfolio"?(B(),i(),p(H?H.value:30),typeof R=="function"&&R()):pe==="ai/overview"&&B()},{immediate:!0});let G="",oe=!1;return f(function(){const pe=c.currentSubPage&&c.currentSubPage.value,Se=!!(c.detailSplitEnabled&&c.detailSplitEnabled.value),J={sub:pe,split:Se,kind:"",view:"",key:"",first:null,expandList:null,expandFn:null};if(pe==="history"){const ue=c.aiHistoryView&&c.aiHistoryView.value||"date",Re=ue==="date"?c.groupedByDate:ue==="month"?c.groupedByMonth:c.aiHistoryByStock,se=Re&&Re.value||{},ye=Object.keys(se);J.kind="history",J.view=ue,J.key=ye.length?ye[0]:"",J.first=ye.length&&(se[ye[0]]||[])[0]||null,J.expandList=ue==="date"?c.expandedDates:ue==="month"?c.expandedMonths:c.expandedStocks,J.expandFn=ue==="date"?c.toggleDateExpand:ue==="month"?c.toggleMonthExpand:c.toggleStockExpand}else if(pe==="chat_history"){const ue=c.chatHistoryView&&c.chatHistoryView.value||"date",Re=ue==="date"?c.chatGroupedByDate:ue==="month"?c.chatGroupedByMonth:c.chatGroupedByStock,se=Re&&Re.value||{},ye=Object.keys(se);J.kind="chat",J.view=ue,J.key=ye.length?ye[0]:"",J.first=ye.length&&(se[ye[0]]||[])[0]||null,J.expandList=ue==="date"?c.expandedChatDates:ue==="month"?c.expandedChatMonths:c.expandedChatStocks,J.expandFn=ue==="date"?c.toggleChatDateExpand:ue==="month"?c.toggleChatMonthExpand:c.toggleChatStockExpand}return J},function(pe){if(!pe.split||!pe.first||!pe.kind)return;const Se=pe.sub!==G,J=c.stockDetail&&c.stockDetail.value,ue=!!(J&&J.stock);if(!Se&&ue||oe)return;G=pe.sub,oe=!0;try{pe.key&&pe.expandList&&pe.expandFn&&pe.expandList.value&&pe.expandList.value.indexOf(pe.key)<0&&pe.expandFn(pe.key)}catch{}const Re=pe.kind==="history"?c.viewAiResult(pe.first):c.viewChatSession(pe.first);Re&&typeof Re.finally=="function"?Re.finally(function(){oe=!1}):oe=!1},{immediate:!0}),{...c,trackData:S,trackLoading:o,trackWindows:l,fmtTrackRate:h,loadTrack:k,trackWindow:r,setTrackWindow:E,trackHitText:y,positions:x,summary:L,trades:P,loading:v,loadError:n,showAddForm:g,addForm:I,addSaving:K,tradeFormVisible:q,tradeForm:O,tradeSaving:F,portfolioTab:$,equityDays:H,equityLoading:W,equityNote:Z,equityHasData:te,loadPortfolio:B,addPosition:U,removePosition:C,openTradeForm:s,submitTrade:b,loadTrades:i,loadEquity:p,fmtSigned:ee,fmtSignedPct:z,signClass:w,riskTab:m,riskLoading:T,riskNote:d,riskHasData:N,riskData:le,riskMetricList:X,loadRisk:R}}}})();(function(){const{ref:a,computed:e,watch:f,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:`
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
                </div>`,setup(){const c=t("qcState"),u=Vue.ref(!1),S=Vue.ref(!1);let o=0;if(!c)return{};const l=a(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function h(D){l.value=D;try{localStorage.setItem("quant_strategy_mode",D)}catch{}c.currentSubPage.value="strategy-manage"}const r=a([]),E=a(!1),y=a(!1),k=a(""),_=a(null),x=a(!1),L=a(!1);async function P(){const D=++o;E.value=!0,y.value=!1;try{const Q=await fetch("/api/market/reviews?limit=30",{headers:nt()}).then(Le=>Le.json());if(D!==o)return;Q&&Q.success?r.value=Array.isArray(Q.data)?Q.data:[]:y.value=!0}catch(Q){console.error("[market-review] 复盘列表加载失败:",Q),y.value=!0}finally{D===o&&(E.value=!1)}}function v(D){k.value=D,q(D)}function n(D){k.value===D?K():v(D)}function g(D){return D==null||isNaN(Number(D))?"—":(Number(D)>=0?"+":"")+Number(D).toFixed(2)+"%"}function I(D){return D==null||isNaN(Number(D))?"—":Number(D).toFixed(2)}function K(){k.value="",_.value=null,L.value=!1}async function q(D){const Q=++o;x.value=!0,L.value=!1,_.value=null;try{const Le=D?"/api/market/review?date="+encodeURIComponent(D):"/api/market/review",mt=await fetch(Le,{headers:nt()}).then(A=>A.json());if(Q!==o)return;mt&&mt.success?_.value=mt.data:L.value=!0}catch(Le){console.error("[market-review] 复盘详情加载失败:",Le),L.value=!0}finally{Q===o&&(x.value=!1)}}function O(D){return D>0?"up":D<0?"down":"flat"}function F(D){return D==null||isNaN(Number(D))?"—":(D>0?"+":"")+Number(D).toFixed(2)+"%"}function $(D){const Q={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(D||{}).map(function(Le){const mt=Le[0],A=Le[1],ne=!A||A==="unavailable"||A==="数据不可达";return{label:Q[mt]||mt,value:ne?"数据不可达":A,unavailable:ne}})}const H=a([]),W=a(!1),Z=a(!1),te=a(""),B=a(""),U=a(""),C=a({}),s=a(!1),b=a(""),i=a(""),p=a([]),ee=a([]),z=a(""),w=a(""),m=a(!0),T=a(!0),d=a("20:00"),N=a("default"),le=a(!1),X=a(""),R=e(function(){return H.value.find(function(D){return D.id===U.value})||null});async function G(D,Q){Q=Q||{},Q.headers=Object.assign({},Q.headers||{});const Le=localStorage.getItem("quant_token")||"";return Le&&(Q.headers.Authorization="Bearer "+Le),fetch(D,Q)}async function oe(){const D=++o;W.value=!0,Z.value=!1,te.value="",B.value="";try{const Q=await G("/api/strategies").then(function(mt){return mt.json()});if(D!==o)return;let Le=null;Array.isArray(Q)?Le=Q:Q&&Array.isArray(Q.strategies)?(Le=Q.strategies,Q.warn&&(B.value=String(Q.warn))):(Z.value=!0,te.value=Q&&Q.detail?String(Q.detail):"策略列表加载失败（接口返回异常）"),Le!==null&&(H.value=Le,H.value.length&&!U.value&&(U.value=H.value[0].id,pe()))}catch(Q){console.error("[research] 策略列表加载失败:",Q),Z.value=!0,te.value="策略列表加载失败: "+(Q&&Q.message||"网络错误")}finally{D===o&&(W.value=!1)}}function pe(){const D=R.value;D&&(C.value={},D.schema.forEach(function(Q){C.value[Q.key]=Q.default}),i.value="",ce(),Se(),se())}async function Se(){if(!U.value){ee.value=[];return}try{const D=await G("/api/strategies/"+U.value+"/profiles").then(function(Q){return Q.json()});ee.value=D&&D.data&&D.data.profiles||[],z.value=""}catch(D){console.error("[research] 方案列表加载失败:",D),ee.value=[]}}async function J(){u.value=!0;const D=(w.value||"").trim();if(!D){window._core&&window._core.showToast("请输入方案名称");return}try{const Q=await G("/api/strategies/"+U.value+"/profiles",{method:"POST",body:JSON.stringify({name:D,params:C.value})}).then(function(Le){return Le.json()});if(Q&&Q.detail){window._core&&window._core.showToast(String(Q.detail));return}w.value="",await Se(),window._core&&window._core.showToast("方案已保存")}catch(Q){console.error("[research] 方案保存失败:",Q),window._core&&window._core.showToast("方案保存失败")}}function ue(){const D=ee.value.find(function(Q){return Q.id===z.value});D&&(Object.keys(D.params||{}).forEach(function(Q){C.value[Q]=D.params[Q]}),window._core&&window._core.showToast("已应用方案: "+D.name))}async function Re(){if(z.value)try{await G("/api/strategies/"+U.value+"/profiles/"+z.value,{method:"DELETE"}).then(function(D){return D.json()}),await Se(),window._core&&window._core.showToast("方案已删除")}catch(D){console.error("[research] 方案删除失败:",D)}}async function se(){try{const D=await G("/api/strategies/governance").then(function(mt){return mt.json()}),Le=(D&&D.data&&D.data.strategies||{})[U.value]||{};m.value=Le.enabled!==!1,d.value=Le.schedule||"20:00",N.value=Le.universe==="all"?"all":"default",T.value=Le.show_in_calendar!==!1,X.value=Le.last_holdings||""}catch(D){console.error("[research] 纳管状态加载失败:",D)}}async function ye(){try{await G("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const D={};return D[U.value]={enabled:m.value,schedule:d.value,universe:N.value,show_in_calendar:T.value},D}()})}).then(function(D){return D.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(D){console.error("[research] 纳管更新失败:",D)}}async function De(){if(U.value){le.value=!0;try{const D=await G("/api/strategies/"+U.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:b.value||void 0})}).then(function(Q){return Q.json()});if(D&&D.detail){window._core&&window._core.showToast(String(D.detail));return}window._core&&window._core.showToast("持仓已生成"),await se()}catch(D){console.error("[research] run-once 失败:",D),window._core&&window._core.showToast("持仓生成失败")}finally{le.value=!1}}}function ve(){X.value&&window.open(X.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function be(){const D=R.value;if(!D)return;const Q=(w.value||"").trim()||D.name+"-副本";_e(Q,Object.assign({},C.value)),window._core&&window._core.showToast("已复制为副本方案: "+Q)}async function _e(D,Q){try{await G("/api/strategies/"+U.value+"/profiles",{method:"POST",body:JSON.stringify({name:D,params:Q})}).then(function(Le){return Le.json()}),await Se()}catch(Le){console.error("[research] 副本保存失败:",Le)}}async function ce(){const D=++o;if(U.value)try{const Q=await G("/api/strategies/"+U.value+"/runs?limit=5").then(function(Le){return Le.json()});if(D!==o)return;p.value=Array.isArray(Q)?Q:[]}catch{p.value=[]}}async function ae(){if(U.value){s.value=!0;try{const D=await G("/api/strategies/"+U.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:C.value,as_of:b.value||void 0})}).then(function(Q){return Q.json()});D&&D.status==="success"?ce():alert("运行失败: "+(D.detail||JSON.stringify(D)))}catch(D){console.error("[research] 策略运行失败:",D),alert("运行失败: "+D.message)}finally{s.value=!1}}}async function me(){if(U.value)try{const D=Object.keys(C.value).map(function(Le){return encodeURIComponent(Le)+"="+encodeURIComponent(C.value[Le])}).join("&"),Q=await G("/api/strategies/"+U.value+"/ptrade-code?"+D).then(function(Le){return Le.json()});Q&&Q.code?i.value=Q.code:alert("导出失败: "+(Q.detail||JSON.stringify(Q)))}catch(D){console.error("[research] PTrade 导出失败:",D),alert("导出失败: "+D.message)}}function Ie(){if(!i.value)return;const D=document.createElement("textarea");D.value=i.value,document.body.appendChild(D),D.select();try{document.execCommand("copy")}catch{}document.body.removeChild(D)}f(function(){return c.currentPage.value+"/"+c.currentSubPage.value},function(D){D==="research/research-overview"&&(oe(),P(),at(),sa()),(D==="research/market-review"||D==="shortterm/market-review")&&!k.value&&P(),D==="research/quant-research"&&oe(),D==="research/backtest-history"&&Ae()},{immediate:!0});const Fe=a("mom20"),Ke=a(!1),_t=a(!1),pt=a(null),Pt=a(null),xe=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],Ce=a('{"top_n":[10,20,30]}'),Oe=a(null),Ne=a(""),Je=a(!1),$e=a(null);async function Ye(){if(!U.value){ElementPlus.ElMessage.warning("请先选择策略");return}let D;try{D=JSON.parse(Ce.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!D||Object.keys(D).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}Je.value=!0,Oe.value=null,Ne.value="";try{const Q=await fetch("/api/strategies/"+U.value+"/sweep",{method:"POST",headers:nt(),body:JSON.stringify({param_grid:D})}).then(function(Le){return Le.json()});Q&&Array.isArray(Q.results)?(Oe.value=Q.results,Ne.value="完成 "+Q.count+" 组"+(Q.data_degraded?" (数据不可达, 结果降级)":""),$e.value=Q.param_stability||null):Ne.value=Q&&Q.detail||"扫描失败"}catch(Q){console.error("[sweep]",Q),Ne.value="扫描失败: "+Q.message}finally{Je.value=!1}}async function rt(){const D=++o;Ke.value=!0;try{const Q=await G("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:U.value||"multi_factor",factor_key:Fe.value,params:C.value||{}})}).then(function(mt){return mt.json()}),Le=Q&&Q.report?Q.report.n1||{}:{};pt.value=Le}catch(Q){console.error("[research] 因子IC分析失败:",Q),alert("因子 IC 分析失败: "+Q.message)}finally{D===o&&(Ke.value=!1)}}async function bt(){const D=++o;_t.value=!0;try{const Q=await G("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:U.value||"multi_factor",factor_key:Fe.value,params:C.value||{}})}).then(function(Le){return Le.json()});Q&&Q.layers?Pt.value=Q:alert("分层回测: "+(Q.message||"无数据"))}catch(Q){console.error("[research] 分层回测失败:",Q),alert("分层回测失败: "+Q.message)}finally{D===o&&(_t.value=!1)}}const xt=a(null),Ht=a(!1);async function aa(){const D=++o;Ht.value=!0,xt.value=null;try{const Q=await G("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:U.value||"multi_factor",factor_key:Fe.value,params:C.value||{}})}).then(function(Le){return Le.json()});Q&&Q.detail?xt.value=Q.detail:alert("因子详情: "+(Q.message||"无数据"))}catch(Q){console.error("[research] 因子详情失败:",Q),alert("因子详情失败: "+Q.message)}finally{D===o&&(Ht.value=!1)}}const Jt=a([]),M=a(null),ie=a(null),Ee=a(null),Pe=a(""),Ge=a(!1),ct=a(!1),He=a(""),St=a(""),et=a("");function nt(){const D=localStorage.getItem("quant_token")||"";return D?{Authorization:"Bearer "+D,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function at(){const D=++o;try{const Q=await fetch("/api/strategies/variants",{headers:nt()}).then(function(Le){return Le.json()});if(D!==o)return;Jt.value=Q&&Q.data&&Q.data.variants||[]}catch(Q){console.error("[i3a] 加载 variants 失败:",Q)}}async function Ot(){if(!U.value){He.value="请先在量化研究选择母本策略";return}ct.value=!0,He.value="";try{const D=await fetch("/api/strategies/"+U.value+"/clone",{method:"POST",headers:nt(),body:JSON.stringify({name:(w.value||"").trim()||void 0,params:Object.assign({},C.value)})}).then(function(Le){return Le.json()});if(D&&D.detail){He.value=String(D.detail);return}const Q=D&&D.data;Q&&Q.sid&&(M.value=Q.sid,He.value="已复制为新策略: "+Q.name,await at(),await Y(Q.sid))}catch(D){console.error("[i3a] 复制失败:",D),He.value="复制失败: "+D.message}finally{ct.value=!1}}async function Ct(D){M.value=D,He.value="",Pe.value="",await Y(D)}async function Y(D){try{const Q=await fetch("/api/strategies/"+D+"/selection-spec",{headers:nt()}).then(function(Le){return Le.json()});Q&&Q.data&&Q.data.spec&&(ie.value=Object.assign({},Q.data.spec),Ee.value=Q.data.fields,St.value=(Q.data.spec.industry_scope||[]).join(","),et.value=(Q.data.spec.market_cap_range||[]).join(","))}catch(Q){console.error("[i3a] 加载 spec 失败:",Q)}}async function we(){if(S.value=!0,!(!M.value||!ie.value))try{ie.value.industry_scope=St.value?St.value.split(/[,，]/).map(function(Q){return Q.trim()}).filter(Boolean):[],ie.value.market_cap_range=et.value?et.value.split(/[,，]/).map(Number).filter(function(Q){return!isNaN(Q)}):[];const D=await fetch("/api/strategies/"+M.value+"/selection-spec",{method:"PUT",headers:nt(),body:JSON.stringify({spec:ie.value})}).then(function(Q){return Q.json()});D&&D.data&&D.data.spec&&(ie.value=D.data.spec,He.value="SelectionSpec 已保存")}catch(D){console.error("[i3a] 保存 spec 失败:",D),He.value="保存失败"}}async function tt(){if(!M.value){He.value="请先选择/创建微调策略";return}ct.value=!0,He.value="";try{const D=await fetch("/api/strategies/"+M.value+"/run-once",{method:"POST",headers:nt(),body:"{}"}).then(function(Q){return Q.json()});He.value=D&&D.detail?String(D.detail):"持仓已生成: "+(D&&D.data&&D.data.symbols||0)+" 只"}catch(D){console.error("[i3a] run-once 失败:",D),He.value="生成持仓失败"}finally{ct.value=!1}}async function Ue(){if(!M.value){He.value="请先选择/创建微调策略";return}ie.value||await Y(M.value),Ge.value=!0,He.value="";try{const D=await fetch("/api/strategies/"+M.value+"/ai-trade-code",{method:"POST",headers:nt(),body:JSON.stringify({spec:ie.value})}).then(function(Q){return Q.json()});if(D&&D.detail){He.value=String(D.detail);return}D&&D.data&&(Pe.value=D.data.code||"",D.data.api_errors&&D.data.api_errors.length?He.value="生成成功(含 API 校验告警 "+D.data.api_errors.length+" 条)":He.value="AI 交易码已生成, 已通过矩阵内校验")}catch(D){console.error("[i3a] AI 交易码失败:",D),He.value="AI 生成失败: "+D.message}finally{Ge.value=!1}}function qt(){if(Pe.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Pe.value).then(function(){He.value="代码已复制"});else{const D=document.createElement("textarea");D.value=Pe.value,document.body.appendChild(D),D.select(),document.execCommand("copy"),document.body.removeChild(D),He.value="代码已复制"}}const Et=a(""),It=a(""),lt=a([]),Mt=a(""),$t=a(""),wt=a(""),gt=a(null),ta=a(!1),Rt=a(!1),ca=a(!1);function Xt(){const D=localStorage.getItem("quant_token")||"";return D?{Authorization:"Bearer "+D,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function sa(){const D=++o;try{const Q=await fetch("/api/strategies/custom",{headers:Xt()}).then(function(Le){return Le.json()});if(D!==o)return;lt.value=Q&&Q.data&&Q.data.customs||[]}catch(Q){console.error("[i3b] 加载自定义策略失败:",Q)}}async function dt(){if(!It.value.trim()){wt.value="请描述策略思路";return}ta.value=!0,wt.value="";try{const D=await fetch("/api/strategies/custom",{method:"POST",headers:Xt(),body:JSON.stringify({name:Et.value.trim()||"自定义策略",prompt:It.value})}).then(function(Q){return Q.json()});if(D&&D.detail){wt.value=String(D.detail);return}D&&D.data&&($t.value=D.data.code||"",wt.value="AI 代写成功: "+D.data.sid+(D.data.api_errors&&D.data.api_errors.length?" (API 告警 "+D.data.api_errors.length+" 条)":" (校验通过)"),await sa())}catch(D){console.error("[i3b] AI 代写失败:",D),wt.value="AI 代写失败: "+D.message}finally{ta.value=!1}}async function Zt(){if(Mt.value)try{const D=await fetch("/api/strategies/custom/"+Mt.value+"/code",{headers:Xt()}).then(function(Q){return Q.json()});D&&D.data&&($t.value=D.data.code||"",wt.value="")}catch(D){console.error("[i3b] 读取代码失败:",D)}}async function da(){if(!Mt.value){wt.value="请先选择自定义策略";return}Rt.value=!0,wt.value="";try{const D=await fetch("/api/strategies/custom/"+Mt.value+"/backtest",{method:"POST",headers:Xt(),body:"{}"}).then(function(Q){return Q.json()});if(D&&D.detail){wt.value=String(D.detail);return}D&&D.data&&(gt.value=D.data,wt.value="回测完成")}catch(D){console.error("[i3b] 回测失败:",D),wt.value="回测失败: "+D.message}finally{Rt.value=!1}}async function wa(){if(!Mt.value){wt.value="请先选择自定义策略";return}ca.value=!0,wt.value="";try{const D=await fetch("/api/strategies/custom/"+Mt.value+"/ai-optimize",{method:"POST",headers:Xt(),body:JSON.stringify({backtest:gt.value})}).then(function(Q){return Q.json()});if(D&&D.detail){wt.value=String(D.detail);return}D&&D.data&&($t.value=D.data.code||"",wt.value="AI 优化完成"+(D.data.api_errors&&D.data.api_errors.length?" (API 告警 "+D.data.api_errors.length+" 条)":" (校验通过)"))}catch(D){console.error("[i3b] AI 优化失败:",D),wt.value="AI 优化失败: "+D.message}finally{ca.value=!1}}function Sa(){if($t.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText($t.value).then(function(){wt.value="代码已复制"});else{const D=document.createElement("textarea");D.value=$t.value,document.body.appendChild(D),D.select(),document.execCommand("copy"),document.body.removeChild(D),wt.value="代码已复制"}}const na=Vue.ref([]),V=Vue.ref(!1),ke=Vue.ref(!1),Ve=Vue.ref(30);async function Ae(){const D=++o;V.value=!0,ke.value=!1;try{const Q=window.__quantModules&&window.__quantModules.core||{},Le=typeof Q.authHeaders=="function"?Q.authHeaders():{},mt=await fetch("/api/backtest/history?days="+Ve.value,{headers:Le}).then(function(A){return A.json()});if(D!==o)return;na.value=mt&&mt.data||[]}catch(Q){console.error("[backtest] 回测历史加载失败:",Q),ke.value=!0}finally{D===o&&(V.value=!1)}}const ut=Vue.ref([]),Xe=Vue.ref(!1),zt=Vue.ref(!1),Bt=Vue.ref(""),Wt=Vue.ref([]),Ca=Vue.ref(""),ua=Vue.ref([]),va=Vue.ref(!1),la=Vue.ref(!1),Aa={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function ma(D){return Aa[D]||D||"—"}function La(D){c&&c.navigateTo&&c.navigateTo("shortterm",D)}function fa(){c.currentSubPage.value="research-history",Da()}async function Da(){const D=++o;Xe.value=!0,zt.value=!1;try{const Q=window.__quantModules&&window.__quantModules.core||{},Le=typeof Q.authHeaders=="function"?Q.authHeaders():{},mt=Bt.value?"?type="+encodeURIComponent(Bt.value):"",A=await fetch("/api/strategies/research-history"+mt,{headers:Le}).then(function(ne){return ne.json()});if(D!==o)return;ut.value=A&&A.items||[]}catch(Q){console.error("[research-history] 加载失败:",Q),zt.value=!0}finally{D===o&&(Xe.value=!1)}}async function ka(){const D=++o;la.value=!0;try{const Q=window.__quantModules&&window.__quantModules.core||{},Le=typeof Q.authHeaders=="function"?Q.authHeaders():{},mt=Bt.value?"?type="+encodeURIComponent(Bt.value):"",A=await fetch("/api/strategies/research-history/export"+mt,{headers:Le});if(!A.ok)throw new Error("HTTP "+A.status);const ne=await A.blob(),de=URL.createObjectURL(ne),Te=document.createElement("a");Te.href=de,Te.download="research_history.csv",document.body.appendChild(Te),Te.click(),document.body.removeChild(Te),URL.revokeObjectURL(de)}catch(Q){console.error("[research-history] 导出失败:",Q)}finally{D===o&&(la.value=!1)}}function Ia(D){const Q=Wt.value.indexOf(D);Q>=0?Wt.value.splice(Q,1):Wt.value.length<10&&Wt.value.push(D)}function Na(D){Ca.value=Ca.value===D?"":D}async function Ut(){const D=++o,Q=Wt.value;if(!(Q.length<2)){va.value=!0;try{const Le=window.__quantModules&&window.__quantModules.core||{},mt=typeof Le.authHeaders=="function"?Le.authHeaders():{},A=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},mt),body:JSON.stringify({ids:Q})}).then(function(ne){return ne.json()});ua.value=A&&A.items||[]}catch(Le){console.error("[research-history] 对比失败:",Le)}finally{D===o&&(va.value=!1)}}}async function ia(D){try{const Q=window.__quantModules&&window.__quantModules.core||{},Le=typeof Q.authHeaders=="function"?Q.authHeaders():{},mt=await fetch("/api/strategies/research-history/"+D,{method:"DELETE",headers:Le}).then(function(A){return A.json()});if(mt&&mt.deleted){ut.value=ut.value.filter(function(ne){return ne.id!==D});const A=Wt.value.indexOf(D);A>=0&&Wt.value.splice(A,1)}}catch(Q){console.error("[research-history] 删除失败:",Q)}}return{...c,strategyManageMode:l,openStrategyManage:h,btHistory:na,btHistoryLoading:V,btHistoryError:ke,btHistoryDays:Ve,loadBtHistory:Ae,researchHistory:ut,researchHistoryLoading:Xe,researchHistoryError:zt,researchHistoryType:Bt,researchHistorySelected:Wt,researchDetailId:Ca,researchCompareRows:ua,researchCompareLoading:va,researchTypeLabel:ma,goShortterm:La,openResearchHistory:fa,loadResearchHistory:Da,researchExportLoading:la,exportResearchHistory:ka,toggleResearchSelect:Ia,toggleResearchDetail:Na,runResearchCompare:Ut,deleteResearchHistory:ia,marketReviews:r,marketReviewLoading:E,marketReviewError:y,selectedReviewDate:k,marketReviewDetail:_,marketReviewDetailLoading:x,marketReviewDetailError:L,loadMarketReviews:P,openMarketReview:v,toggleMarketReviewDate:n,backToMarketReviewList:K,loadMarketReviewDetail:q,marketReviewChgClass:O,marketReviewChgText:F,marketReviewSrcEntries:$,fmtPct:g,fmtEmotion:I,strategies:H,strategiesLoading:W,strategiesError:Z,strategiesErrorText:te,strategiesWarn:B,activeStrategyId:U,activeStrategy:R,paramValues:C,strategyRunning:s,ptradeCode:i,strategyRuns:p,savingProfile:u,variantSaving:S,loadStrategies:oe,onStrategyChange:pe,runActiveStrategy:ae,exportActivePtradeCode:me,copyPtradeCode:Ie,profiles:ee,profileSelect:z,profileName:w,loadProfiles:Se,saveProfile:J,applyProfile:ue,deleteProfile:Re,govEnabled:m,govSchedule:d,govUniverse:N,govRunning:le,lastHoldings:X,loadGov:se,updateGov:ye,runOnceActive:De,openLastHoldings:ve,cloneStrategy:be,govShowCalendar:T,factorKey:Fe,factorIcLoading:Ke,factorLayerLoading:_t,factorIcReport:pt,factorLayerResult:Pt,factorOptions:xe,runFactorIc:rt,runFactorLayer:bt,factorDetail:xt,factorDetailLoading:Ht,runFactorDetail:aa,variants:Jt,variantSelected:M,variantSpec:ie,specFields:Ee,aiCode:Pe,aiCodeLoading:Ge,variantBusy:ct,variantMsg:He,loadVariants:at,cloneNewStrategy:Ot,selectVariant:Ct,loadVariantSpec:Y,saveVariantSpec:we,runVariantOnce:tt,genVariantAiCode:Ue,copyVariantCode:qt,customName:Et,customPrompt:It,customs:lt,customSelected:Mt,customCode:$t,customMsg:wt,customBtResult:gt,customGenLoading:ta,customBtLoading:Rt,customOptLoading:ca,loadCustoms:sa,genCustomCode:dt,loadCustomCode:Zt,runCustomBacktest:da,runCustomOptimize:wa,copyCustomCode:Sa,sweepGrid:Ce,sweepResult:Oe,sweepMessage:Ne,sweepLoading:Je,sweepStability:$e,runSweep:Ye}}}})();(function(){const{inject:a,ref:e,onMounted:f,computed:t,nextTick:c}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
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
                </div>`,setup(){const u=a("qcState");if(!u)return{};const S=u.currentPage,o=u.currentSubPage,l=e(""),h=e(null),r=e(!1),E=e(!1),y=e("数据加载失败"),k=e("请检查服务后重试"),_=e(null),x=e(null),L=e(!1),P=e(!1),v=e("数据加载失败"),n=e("请检查服务后重试"),g=e(null),I=e(1),K=50,q=t(function(){const V=x.value||[];if(V.length<=200)return V;const ke=(I.value-1)*K;return V.slice(ke,ke+K)}),O=e(null),F=e(!1),$=e(!1),H=e("数据加载失败"),W=e("请检查服务后重试"),Z=e([]),te=e(!1);async function B(){te.value=!0;try{const V=await be("/api/shortterm/dates/summary",!1);V&&V.success&&(Z.value=V.dates||[])}catch{Z.value=[]}finally{te.value=!1}}function U(V){V!==l.value&&(l.value=V,Y(!0))}const C=e("行业资金流"),s=e("今日"),b=e(""),i=e(null),p=e(1),ee=e(!1),z=e(!1),w=e("数据加载失败"),m=e("请检查服务后重试"),T=e(""),d=e(null),N=e(!1),le=e(null),X=e(!1),R=e(!1),G=e(""),oe=e(""),pe=e(!1);function Se(){const V=localStorage.getItem("quant_token")||"";return V?{Authorization:"Bearer "+V,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const J={},ue=[],Re=50,se=60*1e3;let ye=0,De=0,ve=0;function be(V,ke){const Ve=Date.now(),Ae=J[V];return!ke&&Ae&&Ve-Ae.ts<se?Promise.resolve(Ae.data):fetch(V,{headers:Se()}).then(function(ut){return ut.json()}).then(function(ut){if(J[V]||ue.push(V),J[V]={ts:Date.now(),data:ut},ue.length>Re){const Xe=ue.shift();delete J[Xe]}return ut})}async function _e(V){const ke=++ye;r.value=!0,E.value=!1;try{const Ve="/api/shortterm/pools"+(l.value?"?date="+l.value:""),Ae=await be(Ve,V);if(ke!==ye)return;Ae&&Ae.success?(h.value=Ae,c(at)):Ae&&Ae.detail?(E.value=!0,y.value=String(Ae.detail),k.value="请先登录后再查看"):(E.value=!0,y.value="数据加载失败",k.value="请检查服务后重试")}catch{if(ke!==ye)return;E.value=!0,y.value="数据加载失败",k.value="请检查服务后重试"}finally{ke===ye&&(r.value=!1)}}async function ce(V){const ke=++ye;L.value=!0,P.value=!1;try{const Ve="/api/shortterm/lhb"+(l.value?"?date="+l.value:""),Ae=await be(Ve,V);if(ke!==ye)return;Ae&&Ae.success?(x.value=Array.isArray(Ae.rows)?Ae.rows:null,g.value=Ae.available===!1&&Ae.reason||null,I.value=1):Ae&&Ae.detail?(P.value=!0,v.value=String(Ae.detail),n.value="请先登录后再查看"):(P.value=!0,v.value="数据加载失败",n.value="请检查服务后重试")}catch{if(ke!==ye)return;P.value=!0,v.value="数据加载失败",n.value="请检查服务后重试"}finally{ke===ye&&(L.value=!1)}}const ae=t(function(){const V=h.value&&h.value.ladder&&h.value.ladder.tiers;return!V||!Object.keys(V).length?"—":Object.keys(V).sort(function(ke,Ve){return ke-Ve}).map(function(ke){return ke+"板:"+V[ke]}).join(" ")}),me=t(function(){const V=h.value&&h.value.zt||[];return _.value?V.filter(function(ke){return ke.boards===_.value}):V});function Ie(){_.value=null}const Fe=t(function(){const V=O.value&&O.value.emotion&&O.value.emotion.money_effect;return!V||!V.available?"—":V.source==="settled"?"定稿记录":V.source==="realtime"?V.partial?"实时(样本不全)":"实时":"—"}),Ke=t(function(){const V=O.value&&O.value.emotion&&O.value.emotion.promotion&&O.value.emotion.promotion.tiers&&O.value.emotion.promotion.tiers["1进2"];return V?V.rate:null}),_t=t(function(){const V=O.value&&O.value.emotion&&O.value.emotion.sentiment_cycle;return V&&V.available&&V.current_score!=null?V.current_score.toFixed(2):"—"}),pt=t(function(){const V=O.value&&O.value.emotion&&O.value.emotion.sentiment_cycle;return!V||!V.available?"—":(V.trend||"—")+(V.day_n!=null?" · 距低谷"+V.day_n+"天":"")});t(function(){const V=O.value&&O.value.emotion;if(!V)return"";const ke=[];for(const Ve of["money_effect","promotion","consec_premium","sentiment_cycle"]){const Ae=V[Ve];Ae&&Ae.available===!1&&Ae.reason&&ke.push(String(Ae.reason).replace(/^[[^]]*]s*/,""))}return ke.join("；")}),t(function(){const V=O.value&&O.value.facts;if(!V)return"";const ke=[];for(const Ve of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const Ae=V[Ve];Ae&&Ae.available===!1&&Ae.reason&&ke.push(String(Ae.reason).replace(/^[[^]]*]s*/,""))}return ke.join("；")});function Pt(V){return V==null||isNaN(V)?"—":(V*100).toFixed(0)+"%"}function xe(V,ke){return V==null?"—":(typeof V=="number"?Math.round(V*100)/100:V)+(ke||"")}function Ce(V){return"tag-chip mr-4"}function Oe(V){return V==null?"":V>0?"is-rise":V<0?"is-fall":""}function Ne(V){return V==="机构"?"is-institution":V==="游资"?"is-hotmoney":V==="主力"?"is-main":""}const Je=t(function(){const V=O.value&&O.value.session_status;if(!V)return"—";const ke=O.value.date;return ke===V.latest_session&&V.settled?"已收盘":ke===V.today&&V.is_trade_day&&!V.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),$e=t(function(){const V=O.value&&O.value.session_status;if(!V)return"";const ke=O.value.date;return ke===V.latest_session&&V.settled?"is-institution":ke===V.today&&V.is_trade_day&&!V.settled?"is-main":""});function Ye(V){V&&V.ts_code&&u&&u.showStockDetail&&u.showStockDetail(V.ts_code)}const rt=t(function(){return(x.value||[]).filter(function(V){return(V.tags||[]).indexOf("机构")>=0}).reduce(function(V,ke){return V+(ke.net_buy||0)},0)}),bt=t(function(){return(x.value||[]).filter(function(V){return(V.tags||[]).indexOf("游资")>=0}).length}),xt=t(function(){const V=(i.value||[]).filter(function(ke){return ke.main_net_inflow!=null});return V.length?V.reduce(function(ke,Ve){return ke.main_net_inflow>=Ve.main_net_inflow?ke:Ve}):null}),Ht=t(function(){const V=xt.value;return V?V.name:"—"}),aa=t(function(){const V=xt.value;return V?V.main_net_inflow:null}),Jt=t(function(){return T.value||"东财"}),M=t(function(){const V=(b.value||"").trim(),ke=i.value||[];return V?ke.filter(function(Ve){return Ve.name&&String(Ve.name).indexOf(V)>=0}):ke});function ie(V){b.value=V||"",u&&u.currentSubPage&&(u.currentSubPage.value="sector")}const Ee=t(function(){const V=M.value;if(V.length<=200)return V;const ke=(p.value-1)*K;return V.slice(ke,ke+K)}),Pe=["09:25","09:35","10:00","11:30","14:00","15:00"],Ge=t(function(){const V={};return(le.value||[]).forEach(function(ke){V[ke.slot]=!0}),V});function ct(V){return Ge.value[V]?"is-done":V===He.value?"is-current":"is-empty"}const He=t(function(){const V=new Date,ke=(V.getHours()<10?"0":"")+V.getHours(),Ve=(V.getMinutes()<10?"0":"")+V.getMinutes(),Ae=ke+":"+Ve;for(var ut=0;ut<Pe.length;ut++)if(Ae===Pe[ut])return Pe[ut];for(var Xe=0;Xe<Pe.length-1;Xe++){var zt=Pe[Xe],Bt=new Date;Bt.setHours(Number(zt.split(":")[0]),Number(zt.split(":")[1]),0,0);var Wt=new Date(Bt.getTime()+8*6e4);if(V>=Bt&&V<=Wt)return zt}return""}),St=t(function(){const V=new Date,ke=He.value;if(ke)return"当前处于快照窗口 "+ke+" (前后 8 分钟) — 可采集";const Ve=V.getHours(),Ae=V.getMinutes();let ut="";for(let Xe=0;Xe<Pe.length;Xe++){const zt=Pe[Xe].split(":");if(Number(zt[0])>Ve||Number(zt[0])===Ve&&Number(zt[1])>Ae){ut=Pe[Xe];break}}return ut?"下一快照时点 "+ut+" — 非窗口期不可采集":"今日快照时点已全部结束"}),et=e(""),nt=e("info");function at(){const V=h.value&&h.value.ladder&&h.value.ladder.tiers;if(!V||!Object.keys(V).length)return;const ke=window.__quantModules&&window.__quantModules.charts;if(!ke||!ke.renderSimpleChartTo)return;const Ve=_.value,Ae=ke.renderSimpleChartTo("shorttermLadderChart",function(){const ut=Object.keys(V).sort(function(Xe,zt){return Number(Xe)-Number(zt)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:ut.map(function(Xe){return Xe+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(Xe){return Ve&&Number(ut[Xe.dataIndex])===Ve?"var(--color-accent)":"var(--chart-split)"}},data:ut.map(function(Xe){return V[Xe]})}]}},{key:"shortterm-ladder"});Ae&&Ae.off&&(Ae.off("click"),Ae.on("click",function(ut){if(!ut||!ut.name)return;const Xe=parseInt(ut.name,10);isNaN(Xe)||(_.value=_.value===Xe?null:Xe)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(at);function Ot(V){if(V==null)return"—";const ke=Math.abs(V);return ke>=1e8?(V/1e8).toFixed(2)+"亿":ke>=1e4?(V/1e4).toFixed(0)+"万":V.toFixed(0)}function Ct(V){return V==null?"—":(V>=0?"+":"")+V.toFixed(2)+"%"}async function Y(V){const ke=++De;F.value=!0,$.value=!1;try{const Ve="/api/shortterm/overview"+(l.value?"?date="+l.value:""),Ae=await be(Ve,V);if(ke!==De)return;Ae&&Ae.success?O.value=Ae:Ae&&Ae.detail?($.value=!0,H.value=String(Ae.detail),W.value="请先登录后再查看"):($.value=!0,H.value="数据加载失败",W.value="请检查服务后重试")}catch{if(ke!==De)return;$.value=!0,H.value="数据加载失败",W.value="请检查服务后重试"}finally{ke===De&&(F.value=!1)}}async function we(V){const ke=++ye;ee.value=!0,z.value=!1;try{const Ve="/api/shortterm/sector-flow?indicator="+encodeURIComponent(s.value)+"&sector_type="+encodeURIComponent(C.value),Ae=await be(Ve,V);if(ke!==ye)return;Ae&&Ae.success&&Ae.available?(i.value=Ae.rows||[],T.value=Ae.source||(Ae.note?"同花顺":"东财"),p.value=1):Ae&&Ae.reason?(z.value=!0,w.value="数据加载失败",m.value=String(Ae.reason).replace(/^\[[^\]]*\]\s*/,"")):Ae&&Ae.detail?(z.value=!0,w.value=String(Ae.detail),m.value="请先登录后再查看"):(z.value=!0,w.value="数据加载失败",m.value="请检查服务后重试")}catch{if(ke!==ye)return;z.value=!0,w.value="数据加载失败",m.value="请检查服务后重试"}finally{ke===ye&&(ee.value=!1)}}async function tt(V){const ke=++ve;try{const Ve="/api/shortterm/review"+(l.value?"?date="+l.value:""),Ae=await be(Ve,V);if(ke!==ve)return;Ae&&Ae.success&&(d.value=Ae.review||null)}catch{}}async function Ue(){N.value=!0;try{const V="/api/shortterm/review"+(l.value?"?date="+l.value:""),ke=await fetch(V,{method:"POST",headers:Se()}).then(function(Ve){return Ve.json()});ke&&ke.success&&(d.value=ke,J[V]={ts:Date.now(),data:ke})}catch{}finally{N.value=!1}}async function qt(){const V=G.value.trim();if(V){pe.value=!0,oe.value="";try{const Ve=await fetch("/api/shortterm/review/chat",{method:"POST",headers:Se(),body:JSON.stringify({date:overviewDate.value,question:V})}).then(function(Ae){return Ae.json()});oe.value=Ve.answer||"[无回复]"}catch{oe.value="[发送失败]"}finally{pe.value=!1}}}async function Et(V){const ke=++ye;X.value=!0;try{const Ve="/api/shortterm/intraday"+(l.value?"?date="+l.value:""),Ae=await be(Ve,V);if(ke!==ye)return;Ae&&Ae.success&&(le.value=Ae.snapshots||[])}catch{}finally{ke===ye&&(X.value=!1)}}async function It(){R.value=!0;try{const V="/api/shortterm/intraday/snapshot"+(l.value?"?date="+l.value:""),ke=await fetch(V,{method:"POST",headers:Se()}).then(function(Ve){return Ve.json()});ke&&ke.success?(ke.accepted?(et.value="已采集 "+ke.slot+" 快照"+(ke.pools_available&&!ke.pools_available.zt?" (池源部分不可用)":""),nt.value="ok"):(et.value="⏱ "+(ke.reason||"非快照时点"),nt.value="warn"),Et()):et.value="采集失败, 请稍后重试"}catch{et.value="采集失败, 请稍后重试"}finally{R.value=!1}}function lt(){return be("/api/shortterm/latest-session",!1).then(function(V){V&&V.date&&(l.value||(l.value=V.date))}).catch(function(){})}function Mt(){const V=o.value;V==="ztpool"?_e():V==="lhb"?ce():V==="overview"?(Y(),tt()):V==="sector"?we():V==="intraday"&&Et()}function $t(){const V=l.value?"?date="+l.value:"";["/api/shortterm/overview"+V,"/api/shortterm/pools"+V,"/api/shortterm/lhb"+V].forEach(function(Ve){be(Ve,!1).catch(function(){})})}function wt(){const V=o.value;V==="ztpool"?_e(!0):V==="lhb"?ce(!0):V==="overview"?(Y(!0),tt(!0)):V==="sector"?we(!0):V==="intraday"&&Et(!0)}f(function(){lt(),Mt(),$t(),da(),B()}),Vue.watch(function(){return o.value},function(V){Mt(),V==="overview"&&da()});const gt=window.QuantOnboarding,ta=e(!1),Rt=e(gt?gt.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),ca=t(function(){return gt&&gt.shorttermTourSteps()[Rt.value.stepIndex]||{key:"",title:"",desc:""}}),Xt=t(function(){return gt?gt.shorttermTourProgress(Rt.value):{done:0,total:3,pct:0}}),sa=t(function(){return Rt.value.stepIndex>=2});function dt(){if(gt){var V=null;try{V=localStorage.getItem("qc_shortterm_tour")}catch{}if(V){var ke=gt.parseState(V);ke&&(Rt.value=ke)}}}function Zt(){if(gt){var V=JSON.stringify(Rt.value);try{localStorage.setItem("qc_shortterm_tour",V)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:V}})}).catch(function(){})}catch{}}}function da(){window.__quantGuideModalsEnabled===!0&&gt&&o.value==="overview"&&(dt(),gt.shorttermTourShouldShow(Rt.value)&&(ta.value=!0))}function wa(){Rt.value=gt.shorttermTourNext(Rt.value),Zt()}function Sa(){Rt.value=gt.shorttermTourComplete(Rt.value),Zt(),ta.value=!1}function na(){Rt.value=gt.shorttermTourDismiss(Rt.value),Zt(),ta.value=!1}return{currentPage:S,currentSubPage:o,shortDate:l,pools:h,poolLoading:r,poolError:E,ztBoardFilter:_,filteredZt:me,clearBoardFilter:Ie,lhbRows:x,lhbLoading:L,lhbError:P,lhbReason:g,lhbPageRows:q,lhbPage:I,overview:O,overviewLoading:F,overviewError:$,dateList:Z,dateListLoading:te,loadDateList:B,pickDate:U,sectorType:C,sectorIndicator:s,sectorKeyword:b,sectorRows:i,filteredSectorRows:M,sectorPageRows:Ee,sectorPage:p,sectorLoading:ee,sectorError:z,sectorFlowSource:T,PAGE_SIZE:K,gotoSector:ie,review:d,reviewRunning:N,intradaySnapshots:le,intradayLoading:X,intradayCollecting:R,intradaySlots:Pe,intradayMsg:et,slotClass:ct,intradayStatus:St,chatQuestion:G,chatAnswer:oe,chatLoading:pe,loadPools:_e,loadLhb:ce,loadOverview:Y,loadSectorFlow:we,loadReview:tt,runReview:Ue,sendChat:qt,loadIntraday:Et,collectSnapshot:It,refreshCurrent:wt,ladderText:ae,fmtAmount:Ot,fmtPct:Ct,riseFall:Oe,tagClass:Ne,openStock:Ye,lhbInstitutionNetBuy:rt,lhbHotMoneyCount:bt,sectorTopName:Ht,sectorTopInflow:aa,sectorSource:Jt,moneySource:Fe,promotion1to2:Ke,cycleScore:_t,cycleTrend:pt,pct:Pt,fmtCond:xe,verdictClass:Ce,sessionStatusText:Je,sessionStatusClass:$e,shorttermTourVisible:ta,shorttermTourState:Rt,shorttermTourStep:ca,shorttermTourProg:Xt,shorttermTourIsLast:sa,shorttermTourNext:wa,shorttermTourFinish:Sa,shorttermTourSkip:na}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantVirtualList=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(o,l,h,r,E){var y=h>0?h:1,k=typeof E=="number"&&E>=0?E:a,_=Math.max(0,r),x=Math.max(0,o),L=Math.max(0,l),P=Math.max(0,Math.floor(x/y)-k),v=Math.min(_,Math.ceil((x+L)/y)+k);return{startIndex:P,endIndex:v}}function f(o,l){return Math.max(0,o||0)*(l>0?l:0)}function t(o,l,h,r,E){var y=o||[],k=e(l,h,r,y.length,E),_=y.slice(k.startIndex,k.endIndex);return{visible:_,startIndex:k.startIndex,endIndex:k.endIndex,offsetY:k.startIndex*(r>0?r:1),totalHeight:f(y.length,r)}}function c(o,l){if(o){if(o.code!=null)return o.code;if(o.id!=null)return o.id;if(o.ts_code!=null)return o.ts_code}return l}function u(o,l,h){var r=o||[];if(!r.length)return l>0?l:1;for(var E=Math.min(h||50,r.length),y=0,k=0,_=0;_<E;_++){var x=r[_]&&r[_].rowHeight;typeof x=="number"&&x>0&&(y+=x,k++)}return k?y/k:l>0?l:1}function S(o,l,h,r,E){var y=e(o,l,h,r,E),k=Math.max(0,r);return k?(y.endIndex-y.startIndex)/k:0}return{DEFAULT_BUFFER:a,computeVisibleRange:e,computeTotalHeight:f,sliceVisible:t,getRowKey:c,estimateDynamicRowHeight:u,renderedRatio:S}});(function(){const{ref:a,computed:e,onMounted:f,onBeforeUnmount:t}=Vue,c=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:c.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(u){const S=a(null),o=a(0),l=a(400),h=e(()=>(c.computeVisibleRange||function(n,g,I,K,q){const O=I>0?I:1,F=q>=0?q:8,$=Math.max(0,K);return{startIndex:Math.max(0,Math.floor(n/O)-F),endIndex:Math.min($,Math.ceil((n+g)/O)+F)}})(o.value,l.value,u.rowHeight,u.items.length,u.buffer)),r=e(()=>u.items.length*u.rowHeight),E=e(()=>h.value.startIndex),y=e(()=>h.value.endIndex),k=e(()=>u.items.slice(E.value,y.value));function _(){S.value&&(o.value=S.value.scrollTop)}function x(){S.value&&(l.value=S.value.clientHeight||400)}function L(v,n){return c.getRowKey?c.getRowKey(v,n):v&&v.code!=null?v.code:v&&v.id!=null?v.id:n}let P=null;return f(()=>{x(),S.value&&typeof ResizeObserver<"u"&&(P=new ResizeObserver(()=>x()),P.observe(S.value))}),t(()=>{P&&P.disconnect()}),{scrollEl:S,totalHeight:r,startIndex:E,endIndex:y,visibleItems:k,onScroll:_,keyOf:L}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=e())})(typeof self<"u"?self:void 0,function(){var a=40,e=1.2,f=60,t=500,c=10,u=88,S=350;function o(n,g,I,K,q){q=q||{};var O=typeof q.threshold=="number"?q.threshold:a,F=typeof q.bias=="number"?q.bias:e,$=I-n,H=K-g;return Math.abs($)<O||Math.abs($)<Math.abs(H)*F?"none":$<0?"left":"right"}function l(n,g,I){I=I||{};var K=typeof I.threshold=="number"?I.threshold:f;return g-n>=K}function h(n,g){g=g||{};var I=typeof g.threshold=="number"?g.threshold:t;return n>=I}var r=!1;function E(n,g){return n&&typeof n.closest=="function"?n.closest(g):null}function y(n){if(!n)return"";var g=n.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(g){var I=g.getAttribute&&g.getAttribute("data-copy-code");if(I)return I.trim();var K=(g.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(K)return K[0]}var q=n.getAttribute&&n.getAttribute("data-copy-code");return q?q.trim():""}function k(n){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(n).then(function(){return!0}).catch(function(){return _(n)}):Promise.resolve(_(n))}function _(n){try{var g=document.createElement("textarea");return g.value=n,g.style.position="fixed",g.style.opacity="0",document.body.appendChild(g),g.select(),document.execCommand("copy"),document.body.removeChild(g),!0}catch{return!1}}function x(n){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(n)}function L(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function P(){var n=null,g=null,I=null;function K(){g&&(g.timer&&clearTimeout(g.timer),g=null)}function q(te){I={el:te,until:Date.now()+S}}function O(te){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(B){B!==te&&B.classList.remove("swipe-open")}),n&&n.el!==te&&(n=null)}function F(te){var B=te.touches&&te.touches[0];if(B){var U=E(te.target,".swipe-reveal");U&&(n={el:U,x:B.clientX,y:B.clientY,moved:!1},te.stopPropagation());var C=E(te.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");C&&(K(),g={el:C,x:B.clientX,y:B.clientY,timer:setTimeout(function(){var s=y(C);g=null,s&&(q(C),k(s).then(function(){L(),x("已复制代码 "+s)}))},t)})}}function $(te){if(n){var B=te.touches&&te.touches[0];if(B){var U=B.clientX-n.x,C=B.clientY-n.y;if(Math.abs(U)>8&&Math.abs(U)>Math.abs(C)*1.2){te.cancelable&&te.preventDefault(),n.moved=!0;var s=n.el.querySelector(".swipe-reveal-main")||n.el,b=Math.max(-u,Math.min(0,U));s.style.transition="none",s.style.transform="translateX("+b+"px)",te.stopPropagation()}if(g){var i=B.clientX-g.x,p=B.clientY-g.y;(Math.abs(i)>c||Math.abs(p)>c)&&K()}}}}function H(te){if(K(),!!n){var B=n.el,U=te.changedTouches&&te.changedTouches[0],C=n.x,s=n.y,b="none";U&&(b=o(C,s,U.clientX,U.clientY));var i=n.moved;n=null;var p=B.querySelector(".swipe-reveal-main")||B;p.style.transform="",p.style.transition="",b==="left"?(O(B),B.classList.add("swipe-open"),q(B)):(b==="right"||i)&&B.classList.remove("swipe-open"),te.stopPropagation()}}function W(){K(),n=null}function Z(te){if(I&&Date.now()<I.until){var B=I.el.contains(te.target)||te.target===I.el,U=te.target.closest&&te.target.closest(".swipe-reveal-actions");B&&!U&&(te.preventDefault(),te.stopPropagation(),I=null)}}document.addEventListener("touchstart",F,!0),document.addEventListener("touchmove",$,!0),document.addEventListener("touchend",H,!0),document.addEventListener("touchcancel",W,!0),document.addEventListener("click",Z,!0)}function v(){r||typeof document>"u"||(r=!0,P())}return{judgeSwipe:o,judgePullToRefresh:l,judgeLongPress:h,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:e,PULL_THRESHOLD:f,LONG_PRESS_MS:t,LONG_PRESS_MOVE_SLOP:c,REVEAL_WIDTH:u,initGestures:v,_codeFromRow:y}});(function(){const a={empty:{icon:"inbox",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"alert-triangle",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"wifi-off",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},e=Object.keys(a);function f(u){return a[u]||a.empty}function t(){const u=[];for(const S of e){const o=a[S];o.title||u.push(S+".title"),S!=="loading"&&!o.icon&&u.push(S+".icon"),typeof o.retry!="boolean"&&u.push(S+".retry"),typeof o.skeleton!="boolean"&&u.push(S+".skeleton")}return{ok:u.length===0,errors:u}}const c={VARIANTS:a,KEYS:e,resolve:f,validate:t};typeof window<"u"&&(window.QuantStatePanel=c),typeof Me<"u"&&Me.exports&&(Me.exports=c)})();(function(){const{computed:a}=Vue,e=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(f){const t=a(()=>typeof e.resolve=="function"?e.resolve(f.type):{}),c=a(()=>f.icon||t.value.icon||""),u=a(()=>f.title||t.value.title||""),S=a(()=>f.desc||t.value.desc||""),o=a(()=>!!t.value.retry),l=a(()=>/^[a-z][a-z0-9-]*$/.test(String(c.value||"")));return{icon:c,title:u,desc:S,retryable:o,isIconName:l}}}})();(function(a,e){typeof Me=="object"&&Me.exports?Me.exports=e():a.QuantCommandPanel=e()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function a(n){return String(n||"").trim().toLowerCase()}function e(n,g){if(!n)return!0;const I=n.split(/\s+/).filter(Boolean);if(!I.length)return!0;const K=String(g||"").toLowerCase();return I.every(function(q){return K.indexOf(q)!==-1})}function f(){return{visible:!1,query:"",activeIndex:0}}function t(n,g){return g===void 0&&(g=!n.visible),n.visible=g,g&&(n.query="",n.activeIndex=0),n.visible}function c(n,g,I){const K=a(n);if(!g||!g.length)return[];const q=[];return g.forEach(function(O){const F=e(K,O.name)||e(K,O.key),$=(O.subPages||[]).filter(function(H){const W=I&&I[H]||H;return e(K,W)||e(K,H)});F&&q.push({type:"menu",menuKey:O.key,subPage:O.subPages&&O.subPages[0]||"",label:O.name,subLabel:"页面",icon:O.icon||"file-text"}),$.forEach(function(H){q.push({type:"menu",menuKey:O.key,subPage:H,label:I&&I[H]||H,subLabel:O.name,icon:O.icon||"file-text"})})}),q.slice(0,8)}function u(n,g){const I=a(n);return!g||!g.length?[]:g.filter(function(K){return!!(!I||e(I,K.label)||e(I,K.key)||K.keywords&&e(I,K.keywords))}).slice(0,8)}function S(n,g){const I=a(n);return!I||!g||!g.length?[]:g.filter(function(K){return e(I,K.code)||e(I,K.name)}).slice(0,8).map(function(K){return{type:"stock",code:K.code,name:K.name,label:K.name,subLabel:K.code,icon:"trending-up"}})}function o(n,g,I){const K=[],q=[];return I&&I.length&&(K.push({key:"stock",label:"股票",items:I}),q.push.apply(q,I)),n&&n.length&&(K.push({key:"menu",label:"菜单",items:n}),q.push.apply(q,n)),g&&g.length&&(K.push({key:"command",label:"指令",items:g}),q.push.apply(q,g)),{groups:K,flat:q}}function l(n,g,I){if(g<=0)return 0;const K=((n||0)+I)%g;return K<0?g-1:K}function h(n,g,I,K){const q=c(n,g,I).map(function(F){return{type:"menu",menuKey:F.menuKey,subPage:F.subPage,label:F.label,subLabel:F.subLabel,icon:F.icon,iconName:F.icon,value:F.icon+" "+F.label+" · "+F.subLabel}}),O=u(n,K||[]).map(function(F){return{type:"command",key:F.key,label:F.label,icon:F.icon,iconName:F.icon,subLabel:"指令",value:F.icon+" "+F.label}});return q.concat(O)}function r(n){return n?n.type==="menu"?{action:"menu",menuKey:n.menuKey,subPage:n.subPage}:n.type==="command"?{action:"command",key:n.key}:n.type==="sector"?{action:"sector",name:n.name}:n.type==="strategy"?{action:"strategy",id:n.id,name:n.name}:n.type==="stock"||n.code&&n.name?{action:"stock",code:n.code,name:n.name}:null:null}const E=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"onboarding",label:"新手引导（重新查看）",icon:"sparkles",keywords:"guide tour onboarding 引导 新手 帮助"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"},{key:"open-watchlist",label:"打开我的自选",icon:"star",keywords:"watchlist 自选 收藏"},{key:"manage-groups",label:"管理自选分组",icon:"folder-open",keywords:"groups 分组 自选 管理 归类"},{key:"open-focus",label:"打开重点跟踪",icon:"target",keywords:"focus 重点 跟踪 盯盘"},{key:"open-portfolio",label:"打开模拟组合",icon:"wallet",keywords:"portfolio 组合 持仓 净值"},{key:"open-backtest",label:"打开回测工作台",icon:"line-chart",keywords:"backtest 回测 净值 收益"},{key:"open-market-review",label:"打开每日复盘",icon:"book-open",keywords:"review 复盘 市场 收盘"},{key:"open-shortterm-sectors",label:"打开板块资金",icon:"pie-chart",keywords:"sector 板块 资金 行业"},{key:"open-shortterm-intraday",label:"打开盘中核验",icon:"clock",keywords:"intraday 盘中 核验 验证"},{key:"open-status",label:"打开系统状态",icon:"activity",keywords:"ops status 状态 运行 健康"},{key:"open-health",label:"打开数据源健康",icon:"database",keywords:"health 数据源 健康 源状态"},{key:"open-schedule",label:"打开调度任务",icon:"clock",keywords:"schedule 调度 任务 定时"},{key:"open-guard",label:"打开AI事实护栏",icon:"shield",keywords:"guard 护栏 事实 校验"},{key:"open-usage",label:"打开用量统计",icon:"bar-chart-3",keywords:"usage 用量 统计 调用量"},{key:"open-datadict",label:"打开数据字典",icon:"book-open",keywords:"datadict 数据字典 字段"},{key:"open-notification",label:"打开通知中心",icon:"bell",keywords:"notification 通知 消息"},{key:"open-users",label:"打开用户与权限",icon:"users",keywords:"users 用户 权限 rbac 角色"},{key:"open-autoeval",label:"打开AI服务配置",icon:"bot",keywords:"autoeval 自动评估 AI 服务 模型"},{key:"open-feature",label:"打开基础配置",icon:"settings",keywords:"feature 基础 配置 功能"},{key:"open-config",label:"打开配置保存",icon:"save",keywords:"config 配置 保存 备份"},{key:"theme-gold",label:"金色主题",icon:"palette",keywords:"theme gold 金色 主题 颜色"},{key:"theme-blue",label:"蓝色主题",icon:"palette",keywords:"theme blue 蓝色 主题"},{key:"theme-red",label:"红色主题",icon:"palette",keywords:"theme red 红色 主题"},{key:"theme-green",label:"绿色主题",icon:"palette",keywords:"theme green 绿色 主题"},{key:"theme-purple",label:"紫色主题",icon:"palette",keywords:"theme purple 紫色 主题"},{key:"theme-pink",label:"粉色主题",icon:"palette",keywords:"theme pink 粉色 主题"},{key:"theme-dark",label:"暗色主题",icon:"moon",keywords:"theme dark 暗色 深色 夜间"},{key:"theme-light",label:"亮色主题",icon:"sun",keywords:"theme light 亮色 浅色 日间"}];var y={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function k(n){if(!n||typeof n!="string")return null;var g=n.split("+").map(function(q){return q.trim()}).filter(Boolean);if(!g.length)return null;var I=g.pop().toLowerCase();if(!I)return null;var K={ctrl:!1,alt:!1,shift:!1,meta:!1};return g.forEach(function(q){var O=q.toLowerCase();y.ctrl.indexOf(O)!==-1?K.ctrl=!0:y.alt.indexOf(O)!==-1?K.alt=!0:y.shift.indexOf(O)!==-1?K.shift=!0:y.meta.indexOf(O)!==-1&&(K.meta=!0)}),{ctrl:K.ctrl,alt:K.alt,shift:K.shift,meta:K.meta,key:I}}function _(n,g){if(!n||!g)return!1;var I=String(g.key||g.code||"").toLowerCase();return n.key!==I?!1:n.ctrl===!!g.ctrlKey&&n.alt===!!g.altKey&&n.shift===!!g.shiftKey&&n.meta===!!g.metaKey}function x(n){if(!n)return"";var g=[];return n.ctrl&&g.push("Ctrl"),n.alt&&g.push("Alt"),n.shift&&g.push("Shift"),n.meta&&g.push("Meta"),g.push(n.key.toUpperCase()),g.join("+")}function L(){var n={};return{register:function(g){if(!g||!g.key)throw new Error("命令 key 必填");if(n[g.key])throw new Error("命令重复注册: "+g.key);return n[g.key]=Object.assign({},g),g.key},list:function(){return Object.keys(n).map(function(g){return n[g]})},get:function(g){return n[g]||null},remove:function(g){delete n[g]},has:function(g){return!!n[g]},count:function(){return Object.keys(n).length}}}function P(){var n={},g={};return{register:function(I,K,q){var O=k(I);if(!O)throw new Error("无效快捷键: "+I);var F=x(O);if(n[F])throw new Error("快捷键冲突: "+I);if(K!=null&&g[K]!==void 0)throw new Error("动作重复绑定: "+K);return n[F]={combo:I,action:K,description:q||"",parsed:O},g[K]=F,F},resolve:function(I){for(var K in n)if(_(n[K].parsed,I))return n[K].action;return null},list:function(){return Object.keys(n).map(function(I){return n[I]})},unregister:function(I){var K=x(k(I));n[K]&&(delete g[n[K].action],delete n[K])},count:function(){return Object.keys(n).length}}}function v(){var n=P();return n.register("Ctrl+K","toggle-palette","打开命令面板"),n.register("F5","refresh","刷新当前页"),n.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),n.register("Ctrl+J","open-ai","打开 AI 问股"),n.register("Ctrl+D","open-today","今日一屏"),n.register("Ctrl+E","batch-eval","批量 AI 评估"),n.register("Ctrl+G","add-portfolio","加入组合"),n.register("Ctrl+H","open-eval-history","打开评估历史"),n.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),n}return{normalize:a,createPaletteState:f,toggleVisible:t,searchMenus:c,searchCommands:u,filterStocksLocal:S,mergeResults:o,moveIndex:l,buildSearchSuggestions:h,dispatchSearchSelection:r,DEFAULT_COMMANDS:E,parseKeyCombo:k,matchShortcut:_,canonicalCombo:x,createCommandRegistry:L,createShortcutRegistry:P,createDefaultShortcuts:v}});(function(a){if(a&&!a.QuantCommandPanel)try{var e=typeof Me<"u"&&Me.exports?Me.exports:null;e&&(a.QuantCommandPanel=e)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(a,e){var f=e();typeof Me=="object"&&Me.exports&&(Me.exports=f),a.QuantOnboarding=f})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var a=[{key:"today",title:"看懂今日一屏",target:"strategies",selector:".today-hero",desc:"先看美林时钟阶段与今日一屏：宏观周期、策略共识、股票池一目了然"},{key:"calendar",title:"量化日历与策略池",target:"calendar",selector:".stock-pool-body",desc:"日/周/月/年切换视图，按全部/新入池/当前持仓/已出池筛选股票"},{key:"evaluate",title:"智能评估一只股票",target:"ai",selector:".qc-work-area",desc:"点击任意股票查看详情：多模型 AI 评估、五维体检、历史趋势"},{key:"watchlist",title:"我的自选与重点跟踪",target:"ai",selector:"",desc:"在智能评估页把心仪股票加入自选，重点跟踪持续盯盘"},{key:"config",title:"系统配置要点",target:"system",selector:".system-page-root",desc:"数据源、AI Key、通知与主题都在系统配置，按需设置"}],e=a.length,f=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],t=f.length;function c(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function u(){return f.slice()}function S(H){return H<0?0:H>=t?t-1:H}function o(H){return{stepIndex:H.stepIndex,completed:!!H.completed,dismissed:!!H.dismissed,updatedAt:H.updatedAt||0}}function l(H){return o(Object.assign({},H,{stepIndex:S((H.stepIndex||0)+1),updatedAt:Date.now()}))}function h(H){return o(Object.assign({},H,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function r(H){return o(Object.assign({},H,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function E(H){var W=Math.min(H&&H.stepIndex||0,t);return{done:W,total:t,pct:Math.round(W/t*100)}}function y(H){return!!(H&&!H.completed&&!H.dismissed)}function k(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function _(){return a.slice()}function x(){return e}function L(H){return H<0?0:H>=e?e-1:H}function P(H){return{stepIndex:H.stepIndex,completed:!!H.completed,dismissed:!!H.dismissed,updatedAt:H.updatedAt||0}}function v(H){return P(Object.assign({},H,{stepIndex:L((H.stepIndex||0)+1),updatedAt:Date.now()}))}function n(H){return P(Object.assign({},H,{stepIndex:L((H.stepIndex||0)-1),updatedAt:Date.now()}))}function g(H,W){return P(Object.assign({},H,{stepIndex:L(W),updatedAt:Date.now()}))}function I(H){return P(Object.assign({},H,{completed:!0,updatedAt:Date.now()}))}function K(H){return P(Object.assign({},H,{dismissed:!0,updatedAt:Date.now()}))}function q(H){return!!(H&&H.completed)}function O(H){var W=Math.min(H&&H.stepIndex||0,e);return{done:W,total:e,pct:Math.round(W/e*100)}}function F(H){var W=H||k();return JSON.stringify({stepIndex:W.stepIndex,completed:!!W.completed,dismissed:!!W.dismissed,updatedAt:W.updatedAt||0})}function $(H){var W=k();if(!H||typeof H!="string")return W;try{var Z=JSON.parse(H);if(!Z||typeof Z!="object")return W;var te=parseInt(Z.stepIndex,10);return isNaN(te)?W:{stepIndex:L(te),completed:!!Z.completed,dismissed:!!Z.dismissed,updatedAt:Z.updatedAt||0}}catch{return W}}return{ONBOARDING_STEPS:a,steps:_,stepCount:x,createOnboardingState:k,next:v,prev:n,jumpTo:g,complete:I,dismiss:K,isComplete:q,progress:O,persistState:F,parseState:$,SHORTTERM_TOUR_STEPS:f,shorttermTourSteps:u,createShorttermTourState:c,shorttermTourNext:l,shorttermTourComplete:h,shorttermTourDismiss:r,shorttermTourProgress:E,shorttermTourShouldShow:y}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:e,onMounted:f}=Vue,t=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const c=a(!1),u=a(t.createOnboardingState()),S=e(function(){return t.steps()[u.value.stepIndex]}),o=e(function(){return t.progress(u.value)}),l=e(function(){return u.value.stepIndex>=t.stepCount()-1}),h=e(function(){return"onboarding.step."+S.value.key});function r(){const v=t.persistState(u.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:v}})}).then(function(n){return n.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",v)}catch{}})}function E(v){v&&window.__quantGoPage?window.__quantGoPage(v,""):v&&window.__quantState&&window.__quantState.currentPage&&(window.__quantState.currentPage.value=v,window.__quantState.currentSubPage&&(window.__quantState.currentSubPage.value=""))}function y(){u.value=t.next(u.value);const v=t.steps()[u.value.stepIndex];v&&v.target&&E(v.target)}function k(){u.value=t.prev(u.value);const v=t.steps()[u.value.stepIndex];v&&v.target&&E(v.target)}function _(){u.value=t.complete(u.value),r(),c.value=!1}function x(){u.value=t.dismiss(u.value),r(),c.value=!1}function L(){u.value=t.createOnboardingState(),r(),c.value=!0}function P(){fetch("/api/user_config/preferences").then(function(v){return v.json()}).then(function(v){const n=v&&v.preferences&&v.preferences.onboarding_progress;return n&&(u.value=t.parseState(n)),n}).catch(function(){return null}).then(function(v){if(!v)try{const n=localStorage.getItem("qc_onboarding_progress");n&&(u.value=t.parseState(n))}catch{}!t.isComplete(u.value)&&!u.value.dismissed&&(c.value=!0)}),window.addEventListener("qc:onboarding-replay",L)}return f(P),{visible:c,st:u,step:S,prog:o,isLast:l,stepKey:h,next:y,prev:k,finish:_,skip:x,replay:L}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"inbox"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
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
    `,setup(){function a(e){try{const f=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(f)return f(e)||""}catch{}return e}return{t:a}}})})();(function(){const{ref:a,computed:e,watch:f,nextTick:t,inject:c,onMounted:u}=Vue,S=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
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
    `,setup(){const o=c("qcState");if(!o)return{};const l=a(""),h=e({get:()=>o.commandPaletteVisible.value,set:C=>{o.commandPaletteVisible.value=C}}),r=a(0),E=a([]),y=a(null),k=e(()=>{const C=(S.DEFAULT_COMMANDS||[]).map(function(b){return Object.assign({},b)});return Object.keys(o.themes.value||{}).forEach(function(b){const i=o.themes.value[b];C.push({key:"theme:"+b,label:"切换主题 · "+(i.name||b),icon:"palette",keywords:"theme 主题"})}),C});function _(C){return typeof C=="string"&&/^[a-z][a-z0-9-]*$/.test(C)}const x=e(()=>o.menus.value||[]);function L(){const C=window.__quantModules&&window.__quantModules.pinyin;if(!C)return[];const s=[];return(o.watchlist&&o.watchlist.value||[]).forEach(function(b){s.push({code:b.code,name:b.name})}),(o.aiHistory&&o.aiHistory.value||[]).forEach(function(b){b&&b.stock_code&&s.push({code:b.stock_code,name:b.stock_name||b.stock_code})}),s.push.apply(s,C.getExtraStocks()),C.buildStockIndex(s)}function P(C){const s=window.__quantModules&&window.__quantModules.pinyin;return s?s.searchStocksByQuery(C,L()).map(function(b){return{type:"stock",code:b.code,name:b.name,label:b.name,subLabel:b.code,icon:"trending-up"}}):[]}function v(){const C=[],s=window.__quantModules&&window.__quantModules.recent;s&&s.getRecentViewed().slice(0,5).forEach(function(i){C.push({type:"stock",code:i.code,name:i.name||i.code,label:i.name||i.code,subLabel:"最近查看 · "+i.code,icon:"trending-up"})});const b=(o.watchlist&&o.watchlist.value||[]).slice(0,8).map(function(i){return{type:"stock",code:i.code,name:i.name||i.code,label:i.name||i.code,subLabel:"我的自选 · "+i.code,icon:"trending-up"}});return C.concat(b)}const n=e(()=>{const C=l.value;if(!C)return S.mergeResults([],[],v());const s=S.searchMenus(C,x.value,o.subPageNames),b=S.searchCommands(C,k.value),i=E.value;return S.mergeResults(s,b,i)}),g=e(()=>n.value);function I(C){return g.value.flat[r.value]===C}function K(C){r.value=g.value.flat.indexOf(C)}function q(C){return(C.type||"")+":"+(C.code||C.menuKey||C.key||C.label)}let O=null;function F(){const C=l.value.trim();if(C.length<1){E.value=[];return}O&&clearTimeout(O),O=setTimeout(function(){const s=P(C);E.value=s,r.value=0,o.searchStocks(C,function(b){if(l.value.trim()!==C)return;const i=(b||[]).filter(function(z){return z&&z.code&&z.name}).map(function(z){return{type:"stock",code:z.code,name:z.name,label:z.name,subLabel:z.code,icon:"trending-up"}}),p={},ee=[];s.forEach(function(z){p[z.code]||(p[z.code]=!0,ee.push(z))}),i.forEach(function(z){p[z.code]||(p[z.code]=!0,ee.push(z))}),E.value=ee,r.value=0})},200)}function $(){r.value=S.moveIndex(r.value,g.value.flat.length,1)}function H(){r.value=S.moveIndex(r.value,g.value.flat.length,-1)}function W(){const C=g.value.flat[r.value];C&&Z(C)}function Z(C){o.commandPaletteVisible.value=!1,C.type==="menu"?o.navigateTo(C.menuKey,C.subPage):C.type==="stock"?o.showStockDetail(C.code,C.name):C.type==="command"&&te(C.key)}function te(C){if(C==="refresh"){const s=o.currentPage.value;s==="strategies"?o.loadDashboardData().catch(function(){}):s==="calendar"?o.refreshCalendarData().catch(function(){}):s==="ai"&&o.loadAiHistory().catch(function(){})}else C==="export"?o.exportCSV():C==="batch"?o.showBatchEvaluate.value=!0:C==="ai"?o.openAiFab():C==="sidebar"?o.toggleSidebar():C==="today"?o.navigateTo("strategies","overview"):C==="onboarding"?window.dispatchEvent(new CustomEvent("qc:onboarding-replay")):C==="add-portfolio"?(o.currentPage.value="ai",o.currentSubPage.value="portfolio"):C==="open-system"?o.navigateTo("system","status"):C==="open-shortterm"?o.navigateTo("shortterm","overview"):C==="open-research"?o.navigateTo("research","overview"):C==="open-calendar"?o.navigateTo("calendar",""):C==="refresh-data-source"?o.navigateTo("system","datasource"):C==="open-watchlist"?o.navigateTo("ai","watchlist"):C==="manage-groups"?window.dispatchEvent(new CustomEvent("qc:show-watch-groups")):C==="open-focus"?o.navigateTo("ai","focus"):C==="open-portfolio"?o.navigateTo("ai","portfolio"):C==="open-backtest"?o.navigateTo("research","backtest"):C==="open-market-review"?o.navigateTo("shortterm","market-review"):C==="open-shortterm-sectors"?o.navigateTo("shortterm","sector"):C==="open-shortterm-intraday"?o.navigateTo("shortterm","intraday"):C==="open-status"?o.navigateTo("ops","status"):C==="open-health"?o.navigateTo("ops","health"):C==="open-schedule"?o.navigateTo("ops","schedule"):C==="open-guard"?o.navigateTo("ops","guard"):C==="open-usage"?o.navigateTo("ops","usage"):C==="open-datadict"?o.navigateTo("ops","datadict"):C==="open-notification"?o.navigateTo("system","notification"):C==="open-users"?o.navigateTo("system","user"):C==="open-autoeval"?o.navigateTo("system","autoeval"):C==="open-feature"?o.navigateTo("system","feature"):C==="open-config"?o.navigateTo("system","config"):C==="theme-dark"?o.changeTheme("dark-pro"):C==="theme-light"?o.changeTheme("gold"):C.indexOf("theme:")===0&&o.changeTheme(C.slice(6))}f(h,function(C){C&&(l.value="",E.value=[],r.value=0,t(function(){y.value&&y.value.focus&&y.value.focus()}))}),f(l,F);function B(C){C==="toggle-palette"?o.commandPaletteVisible.value=!o.commandPaletteVisible.value:C==="toggle-sidebar"?o.toggleSidebar():C==="open-ai"?o.openAiFab():C==="refresh"?te("refresh"):C==="open-today"?te("today"):C==="batch-eval"?te("batch"):C==="add-portfolio"&&te("add-portfolio")}function U(C){if(!S.createDefaultShortcuts||!S.createShortcutRegistry)return;const b=S.createDefaultShortcuts().resolve({key:C.key,ctrlKey:C.ctrlKey,altKey:C.altKey,shiftKey:C.shiftKey,metaKey:C.metaKey});b&&(C.preventDefault(),B(b))}return u(function(){document.addEventListener("keydown",U)}),{visible:h,query:l,results:g,inputEl:y,sanitizeHtml:o.sanitizeHtml,isIconName:_,onDown:$,onUp:H,onEnter:W,execute:Z,isActive:I,setActive:K,itemKey:q,onGlobalKeydown:U}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
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
    `,setup(){const e=a("qcState");if(!e)return{};const f=window.QuantFormMemory;function t(){const o=e.currentUser;return o&&o.value&&o.value.username||"guest"}Vue.watch(()=>e.showBatchEvaluate&&e.showBatchEvaluate.value||!1,o=>{if(o&&f){const l=f.loadForm("batch-evaluate",t(),1);l&&l.batchStocks&&!(e.batchStocks&&e.batchStocks.value)&&(e.batchStocks.value=l.batchStocks)}});function c(){return f&&f.saveForm("batch-evaluate",{batchStocks:e.batchStocks&&e.batchStocks.value||""},t(),1),e.doBatchEvaluate()}const u=Vue.ref(0);let S=null;return e.batchRunning&&e.batchRunning.__v_isRef&&Vue.watch(e.batchRunning,o=>{o?(u.value=0,S=setInterval(()=>{u.value++},1e3)):S&&(clearInterval(S),S=null)}),{...e,batchElapsed:u,onBatchEvaluate:c}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
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
    `,setup(){const c=a(!1),u=a(!1),S=a(!1),o=a([]),l=a({}),h=a(""),r=a(""),E=a("");function y(q,O){O=O||{},O.headers=Object.assign({},O.headers||{});const F=localStorage.getItem("quant_token")||"";return F&&(O.headers.Authorization="Bearer "+F),fetch(q,O)}async function k(){u.value=!0;try{const O=await(await y("/api/watchlist/groups")).json();O&&O.success&&(o.value=O.groups||[],l.value=O.mapping||{})}catch{}u.value=!1}function _(q){return Object.values(l.value).filter(function(O){return O===q}).length}function x(q){const O=o.value[q],F=t.indexOf(O.color);O.color=t[(F+1)%t.length]}function L(q){if(q<=0)return;const O=o.value.slice(),F=O[q-1];O[q-1]=O[q],O[q]=F,o.value=O}function P(q){if(q>=o.value.length-1)return;const O=o.value.slice(),F=O[q+1];O[q+1]=O[q],O[q]=F,o.value=O}function v(){const q=h.value.trim();q&&(o.value.some(function(O){return O.name===q})||(o.value.push({name:q,color:t[o.value.length%t.length],sort_order:o.value.length,expanded:!0}),h.value=""))}function n(q){r.value=q,E.value=q}function g(q){const O=E.value.trim();if(!O||O===q||o.value.some(function($){return $.name===O})){r.value="";return}o.value=o.value.map(function($){return $.name===q?Object.assign({},$,{name:O}):$});const F={};Object.keys(l.value).forEach(function($){F[$]=l.value[$]===q?O:l.value[$]}),l.value=F,r.value=""}function I(q){o.value=o.value.filter(function(F){return F.name!==q});const O={};Object.keys(l.value).forEach(function(F){O[F]=l.value[F]===q?"默认分组":l.value[F]}),l.value=O}async function K(){S.value=!0;try{await y("/api/watchlist/groups",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({groups:o.value,mapping:l.value})}),ElementPlus.ElMessage.success("分组已保存"),c.value=!1}catch{ElementPlus.ElMessage.error("保存失败")}S.value=!1}return f(function(){window.addEventListener("qc:show-watch-groups",function(){c.value=!0,k()})}),{visible:c,loading:u,saving:S,groups:o,mapping:l,newName:h,renaming:r,renameVal:E,load:k,countIn:_,cycleColor:x,moveUp:L,moveDown:P,addGroup:v,startRename:n,commitRename:g,remove:I,save:K}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.IndexDetailDialog={name:"qc-index-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
    `,setup(){const c=a("qcState");if(!c)return{};const u={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},S=e(()=>u[c.aiEvalStage.value]||""),o=e(()=>{const W=c.aiResult&&c.aiResult.value&&c.aiResult.value.result&&c.aiResult.value.result.level;return W?W==="强烈推荐"||W==="推荐"?"var(--success-text)":W==="谨慎推荐"?"var(--warning-text)":W==="中性"||W==="观望"?"var(--text-secondary)":W==="评估失败"||W==="无可用模型"?"var(--danger-text)":"var(--color-primary)":"var(--color-primary)"});function l(W){const Z=document.createElement("textarea");Z.value=W,Z.style.position="fixed",Z.style.opacity="0",document.body.appendChild(Z),Z.select(),document.execCommand("copy"),document.body.removeChild(Z)}async function h(){const W=c.aiResult&&c.aiResult.value;if(!W||!W.result)return;const Z=W.result.dimensions||{},te=Object.entries(Z).map(([U,C])=>`${U} ${Math.round(C)}分`).join(`
`),B=`【AI 智能评估】${W.result.level||""} ${W.result.total_score!=null?W.result.total_score:"—"}分
模型：${W.model_used||W.result.provider||"—"}

${W.result.detailed_report||""}

九维度评分：
${te||"无"}`;try{await navigator.clipboard.writeText(B),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{l(B),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const r=f(!1),E=f(!1),y=f(null),k=f([]),_={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function x(W){return _[W]||"factor-sem-none"}async function L(){const W=c.stockDetail.value&&c.stockDetail.value.stock;if(W){r.value=!0,E.value=!1,k.value=[],y.value=null;try{const Z=c.selectedDate.value?`?date=${c.selectedDate.value}`:"",te=await fetch(`/api/calendar/stock/${W}/factors${Z}`).then(s=>s.json()),B=te&&Array.isArray(te.factors)?te.factors:[],U=[],C={};B.forEach(s=>{C[s.category]||(C[s.category]={category:s.category,items:[]},U.push(C[s.category])),C[s.category].items.push(s)}),k.value=U,y.value=te&&te.summary||null}catch{E.value=!0}finally{r.value=!1}}}t(c.stockDetailTab,W=>{W==="factor"&&c.stockDetail.value&&c.stockDetailVisible.value&&(L(),v())});const P=f(null);async function v(){try{const W=await fetch("/api/market/factor-ic").then(Z=>Z.json());P.value=W&&W.success&&W.data?W.data:{}}catch{P.value={}}}function n(W){if(!W||!W.n5)return"—";const Z=W.n5.icir!=null?"ICIR "+W.n5.icir:"ICIR —";return W.n5.grade+" ("+Z+")"}const g=f(!1),I=f(!1),K=f([]),q=f([]);function O(W){if(W==null)return"—";const Z=Number(W);return Number.isNaN(Z)?"—":Math.abs(Z)>=1e8?(Z/1e8).toFixed(2)+"亿":Math.abs(Z)>=1e4?(Z/1e4).toFixed(1)+"万":String(Z)}async function F(){const W=c.stockDetail&&c.stockDetail.value&&c.stockDetail.value.stock;if(W){g.value=!0,I.value=!1;try{const Z=await fetch("/api/market/performance/"+encodeURIComponent(W)).then(te=>te.json());Z&&Z.success?(K.value=Z.forecast||[],q.value=Z.express||[]):I.value=!0}catch{I.value=!0}finally{g.value=!1}}}t(c.stockDetailTab,W=>{W==="performance"&&F()});const $=f(null);async function H(){const W=c.stockDetail&&c.stockDetail.value&&c.stockDetail.value.stock;if(!W){$.value=null;return}try{const Z=await fetch("/api/focus/stock/"+encodeURIComponent(W)+"/pool").then(te=>te.json());$.value=Z&&Z.success&&Z.data?Z.data:null}catch{$.value=null}}return t(()=>c.stockDetail&&c.stockDetail.value&&c.stockDetail.value.stock,W=>{W&&c.stockDetailVisible.value?H():$.value=null}),t(()=>c.stockDetailVisible.value,W=>{W?H():$.value=null}),{...c,aiStageText:S,levelRingColor:o,copyAiReport:h,factorLoading:r,factorError:E,factorSummary:y,factorGroups:k,factorSemClass:x,loadFactorPanel:L,factorIc:P,loadFactorIc:v,factorIcGrade:n,perfLoading:g,perfError:I,perfForecast:K,perfExpress:q,fmtY:O,loadPerformance:F,poolInfo:$,loadPoolInfo:H}}}})();(function(){const{computed:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
    `,setup(f){const t=e("qcState");if(!t)return{};const c=a(()=>f.type==="history"?t.selectedHistoryIds.value.includes(f.item.id):t.selectedChatIds.value.includes(f.item.id)),u=a(()=>{const _=t.watchlistCodes.value.has(f.item.stock_code);return{icon:"star",isWatched:_,label:_?"取消收藏":"加入收藏"}}),S=a(()=>f.type==="history"?"bot":"message-circle"),o=a(()=>{var _;return f.type==="history"?((_=f.item.result)==null?void 0:_.provider)||"":f.item.first_msg||""}),l=a(()=>{var _,x;return`${((x=(_=f.item.result)==null?void 0:_.dimensions)==null?void 0:x.length)||9}维度分析`}),h=a(()=>{var x,L;const _=f.type==="history"?f.item.evaluate_time:f.item.created_at||"";return _?f.timeFormat==="datetime"?f.type==="history"?`${_.split("T")[0]} ${(_.split("T")[1]||"").split(".")[0]}`:`${_.split("T")[0]} ${((x=_.split("T")[1])==null?void 0:x.substring(0,5))||""}`:f.type==="history"?(_.split("T")[1]||"").split(".")[0]||_:((L=_.split("T")[1])==null?void 0:L.substring(0,5))||"":""});function r(){f.type==="history"?t.toggleSelectHistory(f.item.id):t.toggleSelectChat(f.item.id)}function E(){f.type==="history"?t.viewAiResult(f.item):t.viewChatSession(f.item)}async function y(){try{await ElementPlus.ElMessageBox.confirm(f.type==="history"?"确定删除这条评估记录吗？此操作不可恢复。":"确定删除这段对话吗？此操作不可恢复。","删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}f.type==="history"?t.deleteSingleHistory(f.item.id):t.deleteChatSession(f.item.id)}function k(_,x){t.toggleWatchlist(_,x)}return{isSelected:c,watchState:u,providerIcon:S,providerText:o,dimsText:l,timeText:h,toggleSelect:r,view:E,remove:y,toggleWatchlist:k,keyClick:t.keyClick,fmtNum:t.fmtNum,evaluatedCodes:t.evaluatedCodes,klineLoadedCodes:t.klineLoadedCodes,levelColor:t.levelColor,levelBg:t.levelBg}}}})();(function(){const{ref:a,computed:e,onMounted:f,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{};const c=["买入","持有","观望","减仓","卖出"],u={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},S={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},o=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],l={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},h=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function r(y){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(y).then(x=>x.json?x.json():x)}function E(){const y=new Date,k=_=>_<10?"0"+_:""+_;return y.getFullYear()+"-"+k(y.getMonth()+1)+"-"+k(y.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",template:`
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
      </div>`,setup(){const y=t("qcState"),k=a(E()),_=a("after_close"),x=a({rows:[],actions:{},total:0,groups:{}}),L=a({sessions:{},total:0}),P=a(null),v=a(!1),n=a(""),g=a(!1),I=a([]),K=a(""),q=a(null),O={},F=a({});let $=0;const H=a(null),W=e(function(){const R=x.value&&x.value.groups||{};return Object.keys(R).length?R:x.value&&x.value.rows&&x.value.rows.length?{全部:x.value.rows}:{}}),Z=e(function(){const R=H.value;return!R||!R.date||R.date!==k.value?"":"已加载最近一次评估: "+R.date+" · "+(l[R.session]||R.session)}),te=e(function(){const R=x.value&&x.value.base_date;return R?R===k.value?"评分范围: "+R+" 收盘池 + 自选":"评分范围: "+R+" 收盘池(前一交易日算好) + 自选":""});function B(R){if(R==null)return"—";const G=Number(R);return G===Math.floor(G)?String(G):G.toFixed(1)}function U(R){const G=x.value.total||0,oe=(x.value.actions||{})[R]||0;if(!G)return"0%";const pe=oe/G*100;return pe>0&&pe<4?"4%":pe.toFixed(1)+"%"}function C(R){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[R]||"info"}function s(R){const G=P.value&&P.value.overall&&P.value.overall[R]||null;return!G||G.total===0||G.rate===null||G.rate===void 0?"info":G.rate>=60?"success":G.rate>=40?"warning":"danger"}function b(R){const G=P.value&&P.value.overall&&P.value.overall[R]||null;return!G||G.total===0||G.rate===null||G.rate===void 0?"样本不足":G.rate.toFixed(1)+"% ("+G.total+" 样本)"}function i(){return l[_.value]||_.value}function p(R){const G=I.value.indexOf(R);G>=0?I.value.splice(G,1):I.value.push(R)}function ee(R){if(!R||!R.raw_json)return{};if(O[R.stock_code+R.session+R.trade_date])return O[R.stock_code+R.session+R.trade_date];let G={};try{G=JSON.parse(R.raw_json)||{}}catch{G={}}return O[R.stock_code+R.session+R.trade_date]=G,G}async function z(){try{const R=await r("/api/focus/latest"),G=R&&R.success&&R.data;G&&G.date&&(H.value=G,k.value=G.date,G.session&&(_.value=G.session))}catch(R){console.warn("[focus] 最近一次评估解析失败:",R)}}async function w(){g.value=!0;try{const R=await r("/api/focus/results?date="+k.value+"&session="+_.value);x.value=R&&R.success&&R.data||{rows:[],actions:{},total:0,groups:{}},m((x.value.rows||[]).map(function(G){return G.stock_code}))}catch(R){console.warn("[focus] 结果加载失败:",R),x.value={rows:[],actions:{},total:0,groups:{}}}finally{g.value=!1}}async function m(R){const G=F.value||{},oe=(R||[]).filter(function(J){return J&&!G[J]});if(!oe.length)return;const pe=++$,Se=oe.map(function(J){return r("/api/focus/stock/"+encodeURIComponent(J)+"/pool?date="+k.value).then(function(ue){ue&&ue.success&&ue.data?G[J]=ue.data:G[J]={stock_code:J,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){G[J]={stock_code:J,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(Se)}catch{}pe===$&&(F.value=Object.assign({},G))}function T(R){const G=y&&y.showStockDetail;if(typeof G=="function"){G(R);return}const pe=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;pe&&pe.info("请从其他页面打开股票详情: "+R)}async function d(){try{const R=await r("/api/focus/history?date="+k.value);L.value=R&&R.success&&R.data||{sessions:{},total:0}}catch(R){console.warn("[focus] 历史加载失败:",R),L.value={sessions:{},total:0}}}async function N(){v.value=!0;try{const R=await r("/api/ai/track");R&&R.success&&R.data?(P.value=R.data,n.value=(R.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):P.value=null}catch(R){console.warn("[focus] 效果块加载失败:",R),P.value=null}finally{v.value=!1}}async function le(){const R=(K.value||"").trim();if(R){q.value=null;try{const G=await r("/api/focus/stock/"+encodeURIComponent(R));q.value=G&&G.success&&G.data&&G.data.rows||[]}catch(G){console.warn("[focus] 单股历史加载失败:",G),q.value=[]}}}async function X(){await w(),await d(),await N()}return f(async function(){await z(),await X()}),{curDate:k,session:_,results:x,history:L,track:P,trackLoading:v,trackNote:n,detailSplitEnabled:y.detailSplitEnabled,stockDetail:y.stockDetail,loading:g,expanded:I,stockCode:K,stockHistory:q,SESSIONS:o,ACTION_ORDER:c,TRACK_WINDOWS:h,ACTION_DOT:u,TIER_DOT:S,SESSION_LABELS:l,displayGroups:W,latestNote:Z,baseNote:te,sessionLabel:i,fmtScore:B,tagType:C,rateTagType:s,fmtRate:b,toggle:p,detailOf:ee,loadResults:w,loadHistory:d,loadTrack:N,loadStockHistory:le,loadAll:X,poolStatus:F,openStockDetail:T,actionPct:U}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:e,nextTick:f}=Vue,{currentView:t,statusFilter:c,dashboardData:u,loadHealthMetrics:S,getLoadDashboardData:o,getLastRefreshTime:l,getFetchPoolSignals:h}=a,r=e(!1),E=e(""),y=new Map,k=e([]),_=e(""),x=e(""),L=e([]),P=e(""),v=window.__quantModules.core||{},n=typeof v.createTtlCache=="function"?v.createTtlCache(15e3):null;let g=0;function I(){const Z=Date.now();Z-g<5e3||(g=Z,ElementPlus.ElMessage.success("有新数据，已更新"))}function K(Z,te,B,U){!n||!te||typeof v.silentRefresh!="function"||v.silentRefresh({cache:n,key:te,fetchFn:async()=>{const C=await fetch(Z);if(!C.ok)throw new Error("HTTP "+C.status);const s=await C.json();return B?B(s):s},ttl:n.defaultTtl,apply:U,onChanged:I,onError:()=>{}})}const q=new Set;async function O(){var Z;try{const B=await(await fetch("/api/dates")).json();k.value=((Z=B.data)==null?void 0:Z.dates)||B.dates||[],k.value.length>0&&(_.value=k.value[k.value.length-1]),x.value=new Date().toLocaleTimeString()}catch(te){console.error(te)}}async function F(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),x.value="刷新中...",y.clear(),await O(),await H(),x.value=new Date().toLocaleTimeString()}catch(Z){console.error("数据刷新失败",Z)}}function $(){if(!_.value)return;const te="/api/view/"+(t.value||"day")+"/"+_.value+"?status="+(c.value||"all")+"&format=csv";window.open(te,"_blank")}async function H(){if(!_.value)return;const Z=`${t.value}_${_.value}`;if(q.has(Z))return;q.add(Z);const te=`/api/view/${t.value}/${_.value}?status=all`,B=n&&typeof v.makeCacheKey=="function"?v.makeCacheKey("GET",`/api/view/${t.value}/${_.value}`,{status:"all"}):null,U=(b,i)=>{L.value=b,P.value=i||"",y.set(Z,{stocks:b,note:i||""})},C=b=>{U(b&&b.stocks||[],b&&b.note||"")};if(y.has(Z)){C(y.get(Z)),K(te,B,b=>b,C),q.delete(Z);return}const s=B&&n?n.get(B):void 0;if(s!==void 0){C(s),K(te,B,b=>b,C),q.delete(Z);return}r.value=!0,E.value={day:"日",week:"周",month:"月",year:"年"}[t.value]||t.value;try{const i=await(await fetch(te)).json(),p=i.stocks||[];U(p,i.note||""),n&&B&&n.set(B,{stocks:p,note:i.note||""})}catch{try{const p=await(await fetch(`/api/calendar/${_.value}/consensus`)).json();L.value=(p.consensus||[]).map(ee=>({...ee,code:ee.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{r.value=!1}h(),q.delete(Z)}async function W(){const Z=n&&typeof v.makeCacheKey=="function"?v.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(n){const te=n.get(Z);if(te!==void 0){u.value=te,S().catch(()=>{}),K("/api/dashboard",Z,B=>B.data||B,B=>{u.value=B,l().value=Date.now()});return}}await o()(),S().catch(()=>{}),n&&n.set(Z,u.value)}return{loading:r,loadingView:E,viewCache:y,dates:k,selectedDate:_,lastLoadTime:x,consensus:L,viewNote:P,loadDates:O,refreshCalendarData:F,exportCSV:$,loadConsensusData:H,loadDashboardCached:W}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:e}=Vue,{currentKlinePeriod:f,loadIndexKline:t,rememberDialogTrigger:c,menus:u,currentPage:S,currentSubPage:o,stockDetail:l,selectedDate:h}=a,r=ref({indices:[],market_sentiment:null});let E=null;const y=ref(!1),k=ref(null),_=ref(null),x=ref(!1);function L(){window.__quantModules.charts.disposeKline("stockKlineChart")}const P=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{P.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const v=ref(!1),n=ref(null),g=ref(!1),I=ref(0),K=ref(0);async function q(){try{const i=await(await fetch("/api/market/overview")).json();r.value=i,O(i)}catch(b){console.error("获取市场行情失败:",b)}}function O(b){E&&clearInterval(E),b&&b.in_trading_hours&&(E=setInterval(q,6e5))}function F(b){c(),k.value=b,_.value=null,f.value="daily",$(b.code),window.__quantModules.charts.disposeKline("indexKlineChart"),y.value=!0,setTimeout(async()=>{await t("daily")},500)}async function $(b){try{const p=await(await fetch("/api/ai/index-eval/"+b)).json();p.success&&p.data&&(_.value=p.data)}catch(i){console.warn("[getIndexAiScore] cache check failed:",i)}}async function H(){if(k.value){x.value=!0;try{const i=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:k.value.code,index_name:k.value.name,current_price:k.value.close,pct_chg:k.value.pct_chg})})).json();i.success?_.value=i.data:ElementPlus.ElMessage.error(i.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{x.value=!1}}}function W(b){window.__quantModules.charts.zoomKline("stockKlineChart",b)}function Z(){g.value=!0,setTimeout(()=>{g.value=!1},600)}function te(b,i){if(b===i){Z();return}const p=800,ee=performance.now(),z=i-b;v.value=!0,n.value={value:z,dir:z>0?"up":"down"},g.value=!0,setTimeout(()=>{g.value=!1},600),setTimeout(()=>{n.value=null},2300);function w(m){const T=m-ee,d=Math.min(T/p,1),N=1-Math.pow(1-d,3),le=Math.round(b+z*N);l.value&&l.value.score_data&&(l.value.score_data.score=le),d<1?requestAnimationFrame(w):(l.value&&l.value.score_data&&(l.value.score_data.score=i),v.value=!1)}requestAnimationFrame(w)}function B(){if(!l.value||!l.value.score_data)return;const b=l.value.score_data.score;if(b==null)return;const i=600,p=performance.now();g.value=!0,setTimeout(()=>{g.value=!1},600);function ee(z){const w=Math.min((z-p)/i,1),m=1-Math.pow(1-w,3),T=Math.round(b*m);l.value&&l.value.score_data&&(l.value.score_data.score=T),w<1?requestAnimationFrame(ee):l.value&&l.value.score_data&&(l.value.score_data.score=b)}requestAnimationFrame(ee)}async function U(){var p;if(!l.value||!l.value.stock)return;const b=l.value.stock,i=(p=l.value.score_data)==null?void 0:p.score;try{const ee=new Date().toISOString().split("T")[0],z=h.value||ee,m=await(await fetch(`/api/calendar/stock/${encodeURIComponent(b)}/score?date=${z}`)).json();if(m.success&&m.score_data){const T=m.score_data.score;l.value&&(l.value.score_data=m.score_data),i!=null&&T!==i?te(i,T):Z()}else Z()}catch(ee){console.warn("[refreshStockScore] failed:",ee)}}function C(b){P.value&&(I.value=b.touches[0].clientX,K.value=b.touches[0].clientY)}function s(b){if(!P.value)return;const i=I.value-b.changedTouches[0].clientX,p=K.value-b.changedTouches[0].clientY;if(Math.abs(i)>Math.abs(p)&&Math.abs(i)>80){const ee=u.value.map(function(w){return w.key}),z=ee.indexOf(S.value);if(i>0&&z<ee.length-1){const w=ee[z+1],m=window.__quantGoPage;m?m(w,""):(S.value=w,o.value="")}else if(i<0&&z>0){const w=ee[z-1],m=window.__quantGoPage;m?m(w,""):(S.value=w,o.value="")}}}return{marketData:r,marketRefreshTimer:E,fetchMarketData:q,indexDetailVisible:y,indexDetail:k,indexAiResult:_,indexAiLoading:x,showIndexDetail:F,loadCachedIndexEval:$,doIndexAiEvaluate:H,disposeStockKline:L,isMobile:P,zoomKlineRange:W,scoreAnimating:v,scoreDelta:n,scorePulse:g,triggerScorePulse:Z,animateScoreChange:te,animateScoreEntrance:B,refreshStockScore:U,touchStartX:I,touchStartY:K,onTouchStart:C,onTouchEnd:s}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:e,currentPage:f,currentSubPage:t}=a,c=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),u=ref("idle"),S=ref("");async function o(){if(!c.value.webhook_url){S.value="请先输入Webhook地址";return}u.value="testing",S.value="";try{const R=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:c.value.webhook_url})})).json();R.success||R.status==="ok"?(S.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(S.value=R.message||"测试失败",ElementPlus.ElMessage.error(S.value))}catch{S.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}u.value="idle"}const l=Vue.ref(!1);async function h(){l.value=!0;try{const R=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{l.value=!1}}const r=ref(!1);function E(){e("ai","chat_history"),r.value=!0,Vue.nextTick(()=>{const X=document.querySelector('input[placeholder*="输入问题"]');X&&X.focus()})}const y=ref([]),k=ref({});async function _(){try{const R=await(await fetch("/api/ai/recommend-strategies")).json();R.success&&(y.value=R.recommendations||[])}catch(X){console.warn("[loadStrategyRecommendations] failed:",X)}}async function x(){try{const R=await(await fetch("/api/ai/usage-stats")).json();R.success&&(k.value=R)}catch(X){console.warn("loadAiUsage failed:",X)}}const L=ref({}),P=ref([]),v=ref(7);async function n(){try{const R=await(await fetch("/api/system/monitor")).json();R.success&&(L.value=R)}catch(X){console.warn("loadSysMonitor failed:",X)}}const g=ref({});async function I(){try{const R=await(await fetch("/api/system/health-detail")).json();R.success&&(g.value=R)}catch(X){console.warn("loadHealthDetail failed:",X)}}async function K(){try{const R=await(await fetch(`/api/analytics/rank?days=${v.value}`)).json();R.success&&(P.value=R.rank||[])}catch(X){console.warn("loadAnalytics failed:",X)}}const q=ref(!1);async function O(){if(!q.value){q.value=!0;try{const R=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return R&&R.success?R.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${R.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${R.date}）`):ElementPlus.ElMessage.error(R&&(R.detail||R.message)||"生成复盘失败"),I(),R}catch(X){ElementPlus.ElMessage.error("生成复盘失败: "+(X.message||""))}finally{q.value=!1}}}const F=ref(null),$=ref(!1);async function H(){try{const R=await(await fetch("/api/ai/fact-check/latest")).json();F.value=R&&R.success&&R.data||null}catch(X){console.warn("loadFactCheck failed:",X)}}async function W(){if(!$.value){$.value=!0;try{const R=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return R&&R.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${R.data.pass_rate!=null?R.data.pass_rate+"%":"--"} (${R.data.checked} 个数字)`),H()):ElementPlus.ElMessage.error(R&&(R.detail||R.message)||"事实护栏抽查失败"),R}catch(X){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(X.message||""))}finally{$.value=!1}}}const Z=ref([]),te=ref(!1);async function B(){try{const R=await(await fetch("/api/backup/list")).json();R.success&&(Z.value=R.backups||[])}catch(X){console.error("加载备份列表失败",X)}}async function U(){te.value=!0;try{const R=await(await fetch("/api/backup/create",{method:"POST"})).json();R.success?(ElementPlus.ElMessage.success(R.message||"备份成功"),B()):ElementPlus.ElMessage.error(R.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{te.value=!1}}const C=ref(""),s=ref("");async function b(X){C.value=X,s.value="";try{const R=window.__quantModules&&window.__quantModules.core||{},G=typeof R.authHeaders=="function"?R.authHeaders():{},oe=await fetch("/api/reports/export?format="+encodeURIComponent(X),{headers:G});if(!oe.ok)throw new Error("HTTP "+oe.status);const pe=await oe.blob(),Se=URL.createObjectURL(pe),J=document.createElement("a");J.href=Se;const ue=new Date().toISOString().slice(0,10);J.download="report_"+ue+"."+X,document.body.appendChild(J),J.click(),document.body.removeChild(J),URL.revokeObjectURL(Se),s.value="报表已导出 ("+X.toUpperCase()+")"}catch(R){s.value="报表导出失败: "+(R.message||R)}finally{C.value=""}}async function i(X){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${X} 恢复吗？当前数据将被覆盖。`,"恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(R){console.warn("[restoreBackup] confirm cancelled:",R);return}try{const G=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:X})})).json();G.success?(ElementPlus.ElMessage.success(G.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(G.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const p=ref(!1),ee=ref(0),z=[{icon:"calendar",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"bot",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 AI 按钮可随时快速问股。"},{icon:"send",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function w(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{ee.value=0,p.value=!0},800)}function m(){p.value=!1,localStorage.setItem("quant_tour_done","1")}function T(){p.value=!1,localStorage.setItem("quant_tour_done","1")}const d=ref(""),N=ref(!1);async function le(){if(!d.value||!d.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}N.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:d.value.trim(),page:f.value+"/"+t.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(d.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{N.value=!1}}return{feishuConfig:c,feishuTestStatus:u,feishuTestMessage:S,feishuSaving:l,testFeishuWebhook:o,saveFeishuConfig:h,aiFabHidden:r,openAiFab:E,strategyRecommendations:y,aiUsage:k,loadStrategyRecommendations:_,loadAiUsage:x,sysMonitor:L,analyticsRank:P,analyticsDays:v,loadSysMonitor:n,loadAnalytics:K,healthDetail:g,loadHealthDetail:I,reviewTriggering:q,triggerMarketReview:O,factCheck:F,factCheckRunning:$,loadFactCheck:H,triggerFactCheck:W,backups:Z,backupCreating:te,loadBackups:B,createBackup:U,restoreBackup:i,reportExporting:C,reportExportMsg:s,exportReport:b,tourVisible:p,tourStep:ee,tourSteps:z,maybeShowTour:w,skipTour:m,finishTour:T,feedbackText:d,feedbackSubmitting:N,submitFeedback:le}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:e}=Vue,{currentView:f,selectedDate:t,dates:c,loadConsensusData:u,hapticFeedback:S}=a,o=e(()=>({day:"天",week:"周",month:"月",year:"年"})[f.value]||"天"),l=e(()=>({day:"date",week:"week",month:"month",year:"year"})[f.value]||"date"),h=e(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[f.value]||"YYYY-MM-DD"),r=e(()=>!t.value||!c.value||c.value.length===0?!1:t.value>c.value[0]),E=e(()=>!t.value||!c.value||c.value.length===0?!1:t.value<c.value[c.value.length-1]);function y(L){S("light"),f.value=L;let P=t.value||c.value[c.value.length-1];if(L==="year"){const v=P.substring(0,4),n=c.value.find(g=>g.startsWith(v));t.value=n||P}else if(L==="month"){const v=P.substring(0,7),n=c.value.find(g=>g.startsWith(v));t.value=n||P}setTimeout(u,50)}function k(L){S("light");const P=t.value,v=c.value,n=v.indexOf(P);if(n<0)return;let g=1;f.value==="week"&&(g=5),f.value==="month"&&(g=22),f.value==="year"&&(g=250);const I=n+L*g;if(I>=0&&I<v.length){const K=v[I];if(f.value==="month"){const q=K.substring(0,7),O=v.find(F=>F.startsWith(q));t.value=O||K}else if(f.value==="year"){const q=K.substring(0,4),O=v.find(F=>F.startsWith(q));t.value=O||K}else t.value=K;u()}}function _(L){if(!c.value||c.value.length===0)return!1;const P=L.getFullYear(),v=String(L.getMonth()+1).padStart(2,"0"),n=String(L.getDate()).padStart(2,"0"),g=`${P}-${v}-${n}`;return!c.value.includes(g)}function x(L){L&&L.length>10&&(t.value=L.substring(0,10)),u()}return{viewUnit:o,datePickerType:l,dateFormat:h,canNavPrev:r,canNavNext:E,switchView:y,navigateDate:k,disabledDate:_,onDateChange:x}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:e,subPageNames:f,navigateTo:t,currentPage:c,currentSubPage:u,currentView:S,navigateDate:o,switchView:l,getLoadDashboardData:h,refreshCalendarData:r,getLoadAiHistory:E,exportCSV:y,getShowBatchEvaluate:k,openAiFab:_,toggleSidebar:x,showStockDetail:L,getSelectedDate:P,markExternalStock:v}=a,n=ref("");async function g(B,U){if(!B||B.trim().length<1){U([]);return}const C=window.QuantCommandPanel;let s=[];C&&e.value&&(s=C.buildSearchSuggestions(B,e.value,f,C.DEFAULT_COMMANDS));const b=window.__quantModules&&window.__quantModules.pinyin;b&&b.searchCoreStocks(B).forEach(function(i){s.push({value:i.code+" "+i.name,type:"stock",code:i.code,name:i.name,label:i.name,subLabel:i.code,icon:"trending-up",iconName:"trending-up"})});try{const p=await(await fetch("/api/search?q="+encodeURIComponent(B))).json();if(p.success&&p.results){const ee=p.results.map(function(w){return{value:w.code+" "+w.name,type:"stock",code:w.code,name:w.name,label:w.name,subLabel:w.code,icon:"trending-up",iconName:"trending-up"}}),z=[];(p.groups||[]).forEach(function(w){(w.items||[]).forEach(function(m){m.type==="sector"?z.push({value:m.name+" · "+m.subLabel,type:"sector",name:m.name,label:m.name,subLabel:"板块",icon:"layers",iconName:"layers"}):m.type==="strategy"?z.push({value:m.name+" · 策略",type:"strategy",id:m.id,name:m.name,label:m.name,subLabel:"策略",icon:"target",iconName:"target"}):m.type==="menu"&&z.push({value:m.name,type:"menu",menuKey:m.menuKey,name:m.name,label:m.name,subLabel:m.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),U(s.concat(ee,z))}else U(s)}catch(i){console.warn("[searchStocks] fetch failed:",i),U(s)}}function I(B){return B?B.type==="menu"?{action:"menu",menuKey:B.menuKey,subPage:B.subPage}:B.type==="command"?{action:"command",key:B.key}:B.type==="sector"?{action:"sector",name:B.name}:B.type==="strategy"?{action:"strategy",id:B.id,name:B.name}:B.type==="stock"||B.code&&B.name?{action:"stock",code:B.code,name:B.name}:null:null}function K(B){n.value="";const U=window.QuantCommandPanel,C=U?U.dispatchSearchSelection(B):I(B);if(C){if(C.action==="menu"){t(C.menuKey,C.subPage);return}if(C.action==="command"){F(C.key);return}if(C.action==="sector"){t("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(C.name);return}if(C.action==="strategy"){t("research","overview");return}if(C.action==="stock"){(c.value!=="calendar"||u.value!=="calendar")&&t("calendar","calendar"),typeof v=="function"&&v(C.code),O(C.code,C.name);return}}}let q=null;function O(B,U){q&&(clearInterval(q),q=null);const C=function(){typeof L=="function"&&L(B,U)},s=P?P():null;if(s&&s.value){C();return}const b=Date.now();q=setInterval(function(){((P?P().value:!0)||Date.now()-b>4e3)&&(clearInterval(q),q=null,C())},60)}function F(B){if(B==="refresh"){const U=c.value;U==="strategies"?h().catch(function(){}):U==="calendar"?r().catch(function(){}):U==="ai"&&E().catch(function(){})}else B==="export"?y():B==="batch"?k().value=!0:B==="ai"?_():B==="sidebar"?x():B==="open-eval-history"?t("ai","history"):B==="open-shortterm"&&t("shortterm","overview")}const $=ref(!1),H=ref(!1);function W(B){if(!B)return!1;const U=B.tagName;return U==="INPUT"||U==="TEXTAREA"||U==="SELECT"||B.isContentEditable}function Z(B){if(W(B.target))return;const U=B.key.toLowerCase();if(B.ctrlKey&&U==="k"){B.preventDefault(),H.value=!0;return}if(B.ctrlKey&&U==="/"){B.preventDefault(),$.value=!$.value;return}if(B.ctrlKey&&U==="h"){B.preventDefault(),t("ai","history");return}if(B.ctrlKey&&B.shiftKey&&U==="s"){B.preventDefault(),t("shortterm","overview");return}if(!(B.ctrlKey||B.metaKey||B.altKey)){if(U>="1"&&U<="5"){const C=parseInt(U)-1,s=e.value[C];s&&t(s.key,s.subPages[0]||"");return}if(U==="r"&&te(),(U==="arrowleft"||U==="arrowright"||U==="arrowup"||U==="arrowdown")&&c.value==="calendar")if(B.preventDefault(),U==="arrowleft"||U==="arrowright")o(U==="arrowleft"?-1:1);else{const C=["day","week","month","year"].indexOf(S.value),s=["day","week","month","year"][(C+(U==="arrowup"?-1:1)+4)%4];l(s)}}}function te(){const B=c.value;B==="strategies"?h().catch(()=>{}):B==="calendar"?r().catch(()=>{}):B==="ai"&&E().catch(()=>{})}return{searchQuery:n,searchStocks:g,onSearchSelect:K,runGlobalCommand:F,shortcutHelpVisible:$,commandPaletteVisible:H,isTypingTarget:W,handleGlobalKeydown:Z,refreshCurrentPage:te}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:e,loadUserConfig:f,loadDates:t,loadDashboardData:c,loadDashboardCached:u,loadHealthMetrics:S,loadConsensusData:o,applyTheme:l,maybeShowTour:h,loadAiVendors:r,loadGroupConfig:E,groupsConfig:y}=a,k=function(U){const C=window.__quantModules&&window.__quantModules.themes;return C&&C.applyLegacyTheme?C.applyLegacyTheme(U):l(U)},_="qc_login_username";let x="";try{x=localStorage.getItem(_)||""}catch{x=""}const L=ref({username:x,password:""}),P=ref(!1),v=ref(!1),n=ref(!1),g=ref({oldPassword:"",newPassword:"",confirmPassword:""}),I=ref(!1),K=ref(!1),q=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),O=ref(1);async function F(){try{(await(await fetch("/api/setup/status")).json()).needed&&(q.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},O.value=1,K.value=!0)}catch(U){console.warn("[checkSetupWizard] failed:",U)}}async function $(){try{const U={new_password:q.value.newPassword,ai_key:q.value.aiKey,ai_provider:q.value.aiProvider,ai_model:q.value.aiModel,ai_endpoint:q.value.aiEndpoint,tushare_token:q.value.tushareToken},s=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(U)})).json();s.success?(K.value=!1,ElementPlus.ElMessage.success("初始化完成"),await f()):ElementPlus.ElMessage.error(s.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function H(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(K.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function W(){if(!L.value.username||!L.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}P.value=!0;try{const C=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(L.value)})).json();if(C.success){e.value=C.user,localStorage.setItem("quant_user",JSON.stringify(C.user)),localStorage.setItem("quant_token",C.data.access_token),k(C.user.theme||"gold");try{localStorage.setItem(_,L.value.username||"")}catch{}typeof E=="function"&&await E().catch(function(){}),typeof r=="function"&&r(),await f(),await t(),await Promise.all([u(),o(),S().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),C.data&&C.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),h(),C.user.role==="admin"&&setTimeout(F,500)}else ElementPlus.ElMessage.error(C.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{P.value=!1}}async function Z(){v.value=!0;try{const C=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();C.success?(e.value=C.user,localStorage.setItem("quant_user",JSON.stringify(C.user)),localStorage.setItem("quant_token",C.data.access_token),k(C.user.theme||"gold"),typeof E=="function"&&await E().catch(function(){}),await f(),await t(),await c(),S().catch(()=>{}),await o(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(C.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{v.value=!1}}function te(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{e.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{y&&(y.value={})}catch{}try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function B(){if(!g.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!g.value.newPassword||g.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(g.value.newPassword!==g.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}I.value=!0;try{const U=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:g.value.oldPassword,new_password:g.value.newPassword})}),C=await U.json();U.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),n.value=!1,g.value={oldPassword:"",newPassword:"",confirmPassword:""},te()):ElementPlus.ElMessage.error(C.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{I.value=!1}}return{loginForm:L,logining:P,guestLogining:v,showChangePassword:n,changePasswordForm:g,changingPassword:I,showSetupWizard:K,setupForm:q,setupStep:O,checkSetupWizard:F,completeSetupWizard:$,resetSetupWizard:H,handleLogin:W,handleGuestLogin:Z,handleLogout:te,doChangePassword:B}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:e}=Vue;let f=null;const{strategyFilter:t,currentView:c,statusFilter:u,currentPage:S,currentSubPage:o,menus:l,currentUser:h,strategyFilterCounts:r,lazyTick:E,dates:y,selectedDate:k,consensus:_,loadConsensusData:x,fetchMerrillClock:L,fetchMarketData:P,loadWatchlist:v,loadAiHistory:n,preloadWatchlistKline:g,loadChatHistory:I,loadSystemStatus:K,checkTushareConnection:q,loadSysMonitor:O,loadAnalytics:F,loadHealthDetail:$,loadHealthMetrics:H,loadAiUsage:W,loadFactCheck:Z,loadAutoEvaluateConfig:te,loadDatasourceConfig:B,loadFeishuConfig:U,loadAiConfig:C,loadAiVendors:s,loadRateLimit:b,loadDataRefreshConfig:i,loadBackups:p,loadAllGroups:ee,loadUsers:z,stockDetailTab:w,stockDetailVisible:m,stockKlineLoaded:T,loadStockKline:d,currentKlinePeriod:N,showMerrillDetail:le,indexDetailVisible:X,restoreDialogFocus:R}=a;e(t,G=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(G.selected)),localStorage.setItem("quant_strategy_filter_mode",G.mode)},{deep:!0}),e([c,u],(G,oe)=>{G[0]!==oe[0]&&x()}),e([S,o],([G,oe])=>{var pe;try{const J=!(G==="calendar"&&oe==="calendar")&&oe||"",ue=J?"#"+G+"/"+J:"#"+G;window.location.hash!==ue&&(window.location.hash=ue)}catch{}if(oe&&localStorage.setItem("quant_last_subpage",oe),!oe&&l.value.find(Se=>Se.key===G)){const Se=l.value.find(J=>J.key===G);Se&&Se.subPages.length>0&&(o.value=Se.subPages[0])}if(G==="shortterm"&&oe==="market-review"){const Se=window.__lazyLoaders&&window.__lazyLoaders.research;Se&&Se().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function(J){J&&J.name&&!J.__quantRegistered&&(window.__quantApp.component(J.name,J),J.__quantRegistered=!0)}),E&&E.value++}).catch(function(J){console.warn("[lazy] research 组件补加载失败",J)})}G==="calendar"&&oe==="calendar"&&(!_.value||_.value.length===0)&&(y.value.length>0&&!k.value&&(k.value=y.value[y.value.length-1]||""),setTimeout(x,50)),G==="calendar"&&oe==="pool"&&(!_.value||_.value.length===0)&&(y.value.length>0&&!k.value&&(k.value=y.value[y.value.length-1]||""),setTimeout(x,50)),G==="strategies"&&(oe==="merrill"&&L(),oe==="market"&&P(),oe==="consensus"&&(!_.value||_.value.length===0)&&setTimeout(x,50)),G==="ai"&&(oe==="watchlist"&&(v(),n(),setTimeout(g,500)),oe==="history"&&n(),oe==="overview"&&(n(),v()),oe==="chat_history"&&I()),(G==="system"||G==="ops")&&((pe=h.value)==null?void 0:pe.role)==="admin"&&(oe==="status"&&(K(),q()),oe==="health"&&($(),H()),oe==="schedule"&&$(),oe==="guard"&&Z(),oe==="usage"&&(O(),F(),$(),H(),W(),Z()),oe==="autoeval"&&(te(),s()),oe==="datasource"&&B(),oe==="feature"&&(U(),C(),b(),i(),p()),oe==="user"&&(ee(),z())),(G==="system"||G==="ops")&&oe==="usage"?f||(f=setInterval(()=>{O(),F(),$(),H(),W()},3e4)):f&&(clearInterval(f),f=null)}),e(w,(G,oe)=>{G==="kline"&&oe&&oe!=="kline"&&m.value&&(T.value=!1,setTimeout(async()=>{!await d(N.value)&&m.value&&w.value==="kline"&&setTimeout(()=>d(N.value),800)},50))}),e(le,G=>{G||(document.documentElement.style.overflow="",document.body.style.overflow="")}),e([m,X],([G,oe])=>{!G&&!oe&&R()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:e,applyTheme:f,menus:t,currentPage:c,currentSubPage:u,currentView:S,currentKlinePeriod:o,selectedDate:l,dates:h,loadDates:r,loadConsensusData:E,loadDashboardCached:y,appVersion:k,themes:_,fetchMarketData:x,fetchMerrillStages:L,fetchMerrillClock:P,loadAiConfig:v,loadAiVendors:n,loadAiCatalog:g,currentUser:I,loadUserConfig:K,loadAutoEvaluateConfig:q,loadGroupConfig:O,loadUsers:F,loadAllGroups:$,loadAiHistory:H}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",e);function W(z,w){const m={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(z==="calendar"&&m[w])return c.value="calendar",u.value="calendar",m[w]&&(S.value=m[w]),!0;if(z==="research"&&(w==="strategy-write"||w==="custom-write")){c.value="research",u.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",w==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const z=window.location.hash||"";if(!z||z==="#")return;const w=z.replace(/^#\/?/,"").split("/"),m=w[0],T=w[1]||"",d=t.value.find(function(N){return N.key===m});if(d&&!W(m,T)){if(!T)c.value=m,u.value=d.subPages[0]||"";else if(d.subPages.indexOf(T)>=0)c.value=m,u.value=T;else return;window.__lazyLoaders&&window.__lazyLoaders[m]&&window.__quantGoPage&&window.__quantGoPage(m,u.value).catch(function(){})}});const Z=(z,w=3e3,m="")=>{const T=new Promise((d,N)=>setTimeout(()=>N(new Error("timeout")),w));return Promise.race([z,T]).catch(d=>{console.warn(`[init] ${m||"task"} failed:`,d.message)})},te=localStorage.getItem("quant_theme"),B=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const z=window.__quantModules.themes;let w=B.theme||"system",m=B.theme_hue!=null&&B.theme_hue!==""?B.theme_hue:null;const T=typeof z.migrateLegacyTheme=="function"?z.migrateLegacyTheme():null;m==null&&T&&(w=T.mode,m=T.hue),m==null&&(m=45),f(w,m)}else te&&f(te);await O().catch(function(){}),function(){var z=window.location.hash||"",w=!1;if(z&&z!=="#"){var m=z.replace(/^#\/?/,"").split("/"),T=m[0],d=m[1]||"",N=t.value.find(function(oe){return oe.key===T});N&&(W(T,d)||(c.value=T,d&&N.subPages.indexOf(d)>=0?u.value=d:d||(u.value=N.subPages[0]||"")),w=!0)}if(!w){var le=localStorage.getItem("quant_last_page");le&&t.value.some(function(oe){return oe.key===le})?c.value=le:B.default_view&&t.value.some(function(oe){return oe.key===B.default_view})&&(c.value=B.default_view);var X=localStorage.getItem("quant_last_subpage");X&&(u.value=X)}var R=localStorage.getItem("quant_last_date");R&&(l.value=R);var G=localStorage.getItem("quant_last_view");G&&(S.value=G),window.__lazyLoaders&&window.__lazyLoaders[c.value]&&window.__quantGoPage&&window.__quantGoPage(c.value,u.value).catch(function(){})}(),fetch("/api/health").then(z=>z.json()).then(z=>{z.version&&(k.value=z.version)}).catch(()=>{});const U=localStorage.getItem("quant_user"),C=localStorage.getItem("quant_token"),s=!!(U&&C),b=Promise.all([Promise.resolve().then(()=>{_.value={light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}}),Z(x(),3e3,"marketData"),Z(L(),2e3,"merrillStages")]).then(()=>{Z(P(),3e3,"merrillClock")});if(v(),g(),s&&I.value&&n(),!s||!I.value){await b;return}let i=!0;try{i=(await fetch("/api/users/me")).ok}catch{i=!1}if(!i){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),I.value=null;return}if(I.value){const z=I.value.theme||"",w=window.__quantModules&&window.__quantModules.themes;let m=B.theme||"system",T=B.theme_hue!=null&&B.theme_hue!==""?B.theme_hue:null;if(T==null&&w&&typeof w.migrateLegacyTheme=="function"){const d=w.migrateLegacyTheme();if(d)m=d.mode,T=d.hue;else if(z&&w.LEGACY_MAP&&w.LEGACY_MAP[z]){const N=w.LEGACY_MAP[z];m=N[0],T=N[1]}}T==null&&(T=45),f(m,T)}if(window.__quantModules&&window.__quantModules.preferences){const w=await window.__quantModules.preferences.loadPreferences();var p=localStorage.getItem("quant_last_page");!p&&w.default_view&&t.value.some(function(m){return m.key===w.default_view})&&(c.value=w.default_view),w.theme&&f(w.theme,w.theme_hue!=null&&w.theme_hue!==""?w.theme_hue:null),o&&(w.chart_period==="weekly"||w.chart_period==="monthly")&&(o.value=w.chart_period)}await Promise.all([Z(K(),2e3,"userConfig"),Z(r(),2e3,"dates")]),q().catch(()=>{}),O().catch(()=>{});const ee=c.value==="strategies"?Z(y(),2e3,"dashboard"):Z(E(),2e3,"consensus");await Promise.all([ee,Z(F(),2e3,"users"),Z(H(),2e3,"aiHistory")]),$().catch(()=>{})}}}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:e,onMounted:f,onUnmounted:t,watch:c,nextTick:u}=Vue,S=a(!1),o=window.__quantModules&&window.__quantModules.i18n||{},l=o.SUPPORTED_LOCALES||["zh-CN","en"],h=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",r=a(l.indexOf(h)!==-1?h:"zh-CN");typeof o.bindLocale=="function"&&o.bindLocale(r);const E=typeof o.t=="function"?o.t:function(j){return String(j)};function y(j){l.indexOf(j)!==-1&&(r.value=j,typeof o.setLocale=="function"&&o.setLocale(j),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",j))}function k(j,re){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(j,re):j==null?"":String(j)}function _(j){(j.key==="Enter"||j.key===" "||j.key==="Spacebar")&&(j.preventDefault(),j.currentTarget&&typeof j.currentTarget.click=="function"&&j.currentTarget.click())}let x=null;function L(){document.activeElement&&document.activeElement!==document.body&&(x=document.activeElement)}function P(){if(x&&x.isConnected)try{x.focus()}catch{}x=null}const v=a(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{v.value=!0}),window.addEventListener("offline",()=>{v.value=!1})),window.addEventListener("beforeunload",j=>{if(S.value)return j.preventDefault(),j.returnValue="您有未保存的配置变更，确定要离开吗？",j.returnValue});function n(j="light"){typeof navigator<"u"&&navigator.vibrate&&(j==="light"?navigator.vibrate(10):j==="medium"?navigator.vibrate(20):j==="heavy"&&navigator.vibrate([10,30,10]))}const g=useMerrillClock(),{merrillData:I,merrillStagesConfig:K,showMerrillDetail:q,merrillDetailData:O,merrillClockConfig:F,merrillClockLastUpdated:$,merrillReevalResult:H,merrillReevalLoading:W,stages:Z,indicatorList:te,dimensionScoreList:B,detailDimensionScoreList:U,confidenceColor:C,timelineStages:s,clockPosition:b,merrillProgressStyle:i,FULL_CYCLE_MONTHS:p,getStageAngle:ee,getCycleProgress:z,getCurrentStageMonths:w,getStageTotalMonths:m,isStageCompleted:T,getCharLabel:d,getAssetName:N,getRankColor:le,fetchMerrillStages:X,fetchMerrillClock:R,loadMerrillTimeline:G,showTimelineStage:oe,merrillTimeline:pe,timelineLoading:Se,showStageDetail:J,saveMerrillClockConfig:ue,doMerrillReevaluate:Re,startAutoRefresh:se,stopAutoRefresh:ye,merrillSnapshots:De,merrillSnapshotsTotal:ve,fetchMerrillSnapshots:be}=g,_e=a(localStorage.getItem("sidebar_collapsed")==="1");function ce(){_e.value=!_e.value,localStorage.setItem("sidebar_collapsed",_e.value?"1":"0")}const ae=a(null),me=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","notification","about"],guestSubPages:["config","about"]}],Ie=e(()=>{var Qe,Kt,Yt;const j=((Qe=at.value)==null?void 0:Qe.role)||"guest",re=((Kt=at.value)==null?void 0:Kt.group)||j,he=((Yt=ae.value)==null?void 0:Yt[re])||null;return me.map(Vt=>{if(he&&he.visible_menus&&Vt.key in he.visible_menus&&!he.visible_menus[Vt.key])return null;const xa={...Vt,name:E("nav."+Vt.key)||Vt.name};return he!=null&&he.visible_sub_pages&&(xa.subPages=Vt.subPages.filter(vs=>{const Ld=Vt.key+"."+vs;return he.visible_sub_pages[Ld]!==!1})),Vt.key==="system"&&j==="guest"&&Vt.guestSubPages&&(xa.subPages=Vt.guestSubPages),xa}).filter(Boolean)});async function Fe(){try{if(!localStorage.getItem("quant_token"))return;const re=await fetch("/api/groups/my");if(re.ok){const he=await re.json();ae.value={[he.group_id]:he.group}}}catch(j){console.warn("loadGroupConfig:",j)}}const Ke=a("strategies"),_t=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},pt=a(_t.navMode);function Pt(j){const re=window.__quantModules&&window.__quantModules.navModeCore;pt.value=re?re.normalizeNavMode(j):j==="tree"||j==="toptab"?j:"toptab",re&&re.writePrefs({navMode:pt.value})}const xe=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function Ce(j,re=""){n("light"),Ke.value=j,M.value=re,localStorage.setItem("quant_last_subpage",re)}function Oe(){const j=Ie.value;if(!j||!j.length)return;if(!j.some(function(je){return je.key===Ke.value})){const je=j[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",je.key),Ke.value=je.key,M.value=je.subPages&&je.subPages[0]||"";return}const he=j.find(function(je){return je.key===Ke.value});he&&he.subPages&&he.subPages.length&&!he.subPages.includes(M.value)&&(M.value=he.subPages[0])}const Ne=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],Je=a("multifactor"),$e=a(null),Ye=a(1e5),rt=a(!1),bt=a(null);let xt=null,Ht=null;async function aa(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const re={initial_capital:Ye.value||1e5};$e.value&&$e.value.length===2&&(re.start_date=$e.value[0],re.end_date=$e.value[1]),rt.value=!0,bt.value=null;try{const he=await fetch("/api/strategies/"+Je.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(re)});if(!he.ok){const Kt=await he.json().catch(()=>({}));throw new Error(Kt.detail||"回测失败")}const je=await he.json(),Qe=je.result||{};if(!Qe.success)throw new Error(Qe.message||"回测失败");je.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),bt.value={total_return_pct:((Qe.total_return??0)*100).toFixed(2),annual_return_pct:((Qe.annual_return??0)*100).toFixed(2),max_drawdown_pct:((Qe.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(Qe.sharpe_ratio??0).toFixed(2),win_rate:((Qe.win_rate??0)*100).toFixed(2),out_sample:Qe.outsample_total_return===void 0?"":((Qe.outsample_total_return??0)*100).toFixed(2),overfit_warning:Qe.overfit_warning||!1,message:Qe.message||""},Jt(Qe.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(he){ElementPlus.ElMessage.error(he.message||"回测失败")}finally{rt.value=!1}}function Jt(j){const re=document.getElementById("backtestEquityChart");if(!re||!j||j.length===0)return;const he=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,je=()=>{Ht=j,xt&&(xt.dispose(),xt=null),xt=echarts.init(re),xt.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const Qe=j.map(Yt=>Yt.date||Yt[0]),Kt=j.map(Yt=>Yt.value??Yt[1]);xt.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:Qe,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:Kt,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};he?he().then(je).catch(()=>{}):je()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){Ht&&Jt(Ht)}));const M=a("overview");(function(){const j=window.QuantSessionRestore;if(j){const re=j.restore();re&&re.page&&(Ke.value=re.page,re.sub&&(M.value=re.sub))}})(),Vue.watch(M,function(){wn()});const ie=e(()=>{const j=me.find(re=>re.key===Ke.value);return j?j.name:Ke.value}),Ee=a(0),Pe=e(()=>{Ee.value;const j={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},re=M.value;return Ke.value==="shortterm"&&re==="market-review"?"qc-research-page":Ke.value==="ops"&&re==="execution"?"qc-strategies-page":j[Ke.value]||""}),Ge=a(!1),ct=a({}),He=a([]);a("");const St=a([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),et=a("day"),nt=a("all"),at=a(null);c(Ie,function(){Oe()}),c([Ke,M],function(){const j=document.querySelector(".main-content");j&&(j.scrollTop=0)}),function(){if(typeof localStorage>"u")return;const j=localStorage.getItem("quant_user"),re=localStorage.getItem("quant_token");if(j&&re)try{at.value=JSON.parse(j)}catch{}}();const Ot=a(!1),Ct=a("kline"),Y=a(null),we=a(!1),tt=a(localStorage.getItem("qc_detail_mode")||"split"),Ue=a(window.innerWidth<=1024),qt=e(()=>tt.value==="split"&&!Ue.value);function Et(j){tt.value=j;try{localStorage.setItem("qc_detail_mode",j)}catch{}}window.addEventListener("resize",()=>{Ue.value=window.innerWidth<=1024});const It=35,lt=a(parseInt(localStorage.getItem("qc_split_width")||"",10)||null);function Mt(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",lt.value?lt.value+"px":It+"%")}Mt();function $t(j){const re=Math.max(1,Math.min(j,2e3));lt.value=re,Mt();try{localStorage.setItem("qc_split_width",String(re))}catch{}}function wt(j){if(lt.value)return lt.value;const re=j?j.getBoundingClientRect().width:0;return Math.max(200,Math.floor(re*It/100))}let gt=null;function ta(j,re){if(!re||Ue.value)return;j.preventDefault();const he=re.getBoundingClientRect().width;gt={startX:j.clientX,startW:wt(re),minW:Math.max(200,Math.floor(he*It/100)),maxW:Math.floor(he/2)},document.body.classList.add("qc-split-resizing")}function Rt(j){if(!gt)return;const re=j.clientX-gt.startX;let he=gt.startW+re;he=Math.max(gt.minW,Math.min(he,gt.maxW)),lt.value=he,Mt();try{localStorage.setItem("qc_split_width",String(he))}catch{}}function ca(){gt&&(gt=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",Rt),document.addEventListener("mouseup",ca));function Xt(j){const re=j.target&&j.target.closest?j.target.closest("[data-split-resize]"):null;if(!re)return;const he=re.closest("[data-split-root]");ta(j,he)}typeof document<"u"&&document.addEventListener("mousedown",Xt,!0);const sa={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于"},dt=a({});function Zt(j,re){return sa[re]||re}function da(j){const re=me.find(je=>je.key===j);if(!re||!re.subPages||!re.subPages.length)return;if(!(dt.value[j]||[]).length){const je=re.subPages[0];dt.value=Object.assign({},dt.value,{[j]:[{subPage:je,title:Zt(j,je)}]})}}function wa(j,re){const he=window.__quantModules&&window.__quantModules.tabsCore,je=Zt(j,re);if(he){const Qe=he.openTab(dt.value,j,re,je);dt.value=Qe.groups}else{const Qe=dt.value[j]||[];Qe.some(Kt=>Kt.subPage===re)||(dt.value=Object.assign({},dt.value,{[j]:Qe.concat([{subPage:re,title:je}])}))}Ce(j,re)}function Sa(j,re){const he=window.__quantModules&&window.__quantModules.tabsCore,je=M.value;let Qe=null;if(he)Qe=he.closeTab(dt.value,j,re,je),dt.value=Qe.groups;else{const Vt=dt.value[j]||[];dt.value=Object.assign({},dt.value,{[j]:Vt.filter(xa=>xa.subPage!==re)})}if(!(dt.value[j]||[]).length){da(j);const Vt=me.find(vs=>vs.key===j),xa=Vt&&Vt.subPages&&Vt.subPages[0];xa&&Ce(j,xa);return}const Yt=Qe?Qe.nextActive:null;Yt&&Ce(j,Yt)}function na(j,re){if(!(dt.value[j]||[]).some(je=>je.subPage===re)){wa(j,re);return}Ce(j,re)}c([Ke,M],([j,re])=>{da(j);const he=dt.value[j]||[];re&&!he.some(je=>je.subPage===re)&&(dt.value=Object.assign({},dt.value,{[j]:he.concat([{subPage:re,title:Zt(j,re)}])}))},{immediate:!0});const V=function(j){if(!(j.ctrlKey&&j.key==="Tab"))return;const re=Ke.value,he=dt.value[re]||[];if(he.length<=1)return;j.preventDefault();const je=M.value,Qe=Math.max(0,he.findIndex(Vt=>Vt.subPage===je)),Kt=j.shiftKey?(Qe-1+he.length)%he.length:(Qe+1)%he.length,Yt=he[Kt];Yt&&na(re,Yt.subPage)};window.addEventListener("keydown",V);const ke=a({light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}),Ve=a("light"),Ae=[45,220,0,140,270,320,180,25,250,-1],ut={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色",180:"青色",25:"橙色",250:"靛蓝","-1":"中性"},Xe=a(45),zt=a(function(){const j=window.__quantModules&&window.__quantModules.preferences;return j&&j.getPreference&&j.getPreference("theme")||"system"}());(function(){const j=window.__quantModules&&window.__quantModules.preferences,re=j&&j.getPreference&&j.getPreference("theme_hue");re!=null&&re!==""&&(Xe.value=parseInt(re,10))})();const Bt=a("comfortable");(function(){const j=window.__quantModules&&window.__quantModules.preferences;j&&j.applyDensity&&(Bt.value=j.applyDensity()||"comfortable")})();function Wt(j){return j<0?"hsl(0, 0%, 46%)":"hsl("+j+", 75%, 42%)"}function Ca(j){return ut[j]||"自定义 "+j}const ua=a(""),va=a([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),la=a({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),Aa=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],ma=a({day:[],week:[],month:[],year:[]}),La=a({});function fa(j,re){let he=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(he=window.__quantModules.themes.applyTheme(j,re)),Ve.value=he&&he.mode?he.mode:j==="dark"||j==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function Da(j,re){const he=window.__quantModules&&window.__quantModules.preferences;if(!(!he||!he.setPreferences))try{he.setPreferences({theme:j}),re!=null&&re!==""&&he.setPreferences({theme_hue:parseInt(re,10)})}catch{}}function ka(j,re){fa(j,re),re!=null&&re!==""&&(Xe.value=parseInt(re,10));const he=window.__quantModules&&window.__quantModules.themes;let je=j;he&&he.LEGACY_MAP&&he.LEGACY_MAP[j]&&(je=he.LEGACY_MAP[j][0]),je==="light"||je==="dark"||je==="system"?zt.value=je:zt.value=Ve.value,je==="system"&&(je=Ve.value),Da(je,re),at.value&&(fetch(`/api/users/${at.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:je})}),at.value.theme=je,localStorage.setItem("quant_user",JSON.stringify(at.value)))}function Ia(j){const re=window.__quantModules&&window.__quantModules.preferences,he=re&&re.getPreference?re.getPreference("theme_hue"):null;ka(j,he)}function Na(j){const re=window.__quantModules&&window.__quantModules.preferences;!re||!re.applyDensity||(Bt.value=re.applyDensity(j)||"comfortable",re.setPreference&&re.setPreference("info_density",Bt.value))}function Ut(j){Xe.value=parseInt(j,10);const re=window.__quantModules&&window.__quantModules.preferences,he=re&&re.getPreference&&re.getPreference("theme")||"light";ka(he,Xe.value)}const ia=a(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function D(j){ia.value=!!j;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",j?"show":"hide")}catch{}}const Q=e(()=>{const j=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return ia.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...j]:j}),Le=a("daily");(function(){try{const re=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(re==="weekly"||re==="monthly")&&(Le.value=re)}catch{}})();const mt=a(!1),A=a(""),ne=a(!1),de=a(!1),Te=a({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),ze=["MA5","MA10","MA20","MA60"],At=a(!1);let it=0;async function yt(j){if(!Y.value)return!1;const re=++it;mt.value=!0,Le.value=j;try{const je=await(await fetch(`/api/market/kline/${Y.value.stock}?period=${j}&limit=60`)).json();if(!je.success||!je.data)throw new Error(je.message||"数据获取失败");return A.value=je.degraded_from?"分钟数据("+je.degraded_from+")暂不可用, 已降级展示日线":"",on(Y.value.stock),re!==it?!1:(Ct.value!=="kline"||(de.value=!0,await u(),window.__quantModules.charts.renderKlineTo("stockKlineChart",je.data,j,!1,{isMobile:ws.value,onLegend:Qe=>{Object.keys(Te.value).forEach(Kt=>{Kt in Qe&&(Te.value[Kt]=!!Qe[Kt])})}}),kt()),!0)}catch(he){return console.error("[kline] 加载失败:",Y.value&&Y.value.stock,j,he),Ct.value==="kline"&&(de.value=!1,A.value="",ElementPlus.ElMessage.error("K线加载失败: "+(he&&he.message?he.message:"数据源不可达，请重试"))),!1}finally{mt.value=!1}}async function ea(j){if($a.value){ne.value=!0,Le.value=j;try{const he=await(await fetch(`/api/market/kline/${$a.value.code}?period=${j}&limit=60`)).json();if(!he.success||!he.data)throw new Error(he.message||"数据获取失败");At.value=!0,await u(),window.__quantModules.charts.renderKlineTo("indexKlineChart",he.data,j,!0,{isMobile:ws.value,onLegend:je=>{Object.keys(Te.value).forEach(Qe=>{Qe in je&&(Te.value[Qe]=!!je[Qe])})}}),kt()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{ne.value=!1}}}async function Lt(j){if(!de.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await yt(j)}async function pa(j){if(!At.value){ElementPlus.ElMessage.info("请先加载K线");return}await ea(j)}function oa(j){const re=(Ot.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(Ja.value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);re&&re.dispatchAction({type:"legendToggleSelect",name:j})}function kt(){["K线","MA5","MA10","MA20","MA60"].forEach(j=>{Te.value[j]=!0})}async function Ze(){const j=await fetch("/api/system/metrics");if(!j.ok)throw new Error("metrics "+j.status);const re=await j.json(),he=Array.isArray(re)?re:re&&re.data_sources||[];He.value=he}const jt=()=>us,qa=()=>Is,Tt=()=>er,Qa=()=>ja,Cn=()=>is,qn=()=>Gt,En=window.__quantAppLogic.data.create({currentView:et,statusFilter:nt,dashboardData:ct,loadHealthMetrics:Ze,getLoadDashboardData:jt,getLastRefreshTime:qa,getFetchPoolSignals:Tt}),{loading:fs,loadingView:Mn,viewCache:Tn,dates:Oa,selectedDate:Gt,lastLoadTime:ps,consensus:_a,viewNote:Dn,loadDates:gs,refreshCalendarData:hs,exportCSV:ys,loadConsensusData:Pa,loadDashboardCached:Fa}=En,Pn=window.__quantAppLogic.market.create({currentKlinePeriod:Le,loadIndexKline:ea,rememberDialogTrigger:L,menus:Ie,currentPage:Ke,currentSubPage:M,stockDetail:Y,selectedDate:Gt}),{marketData:Rn,indexDetailVisible:Ja,indexDetail:$a,indexAiResult:zn,indexAiLoading:An,fetchMarketData:Xa,showIndexDetail:Ln,loadCachedIndexEval:In,doIndexAiEvaluate:Nn,disposeStockKline:bs,isMobile:ws,zoomKlineRange:On,scoreAnimating:jn,scoreDelta:Vn,scorePulse:Fn,refreshStockScore:Za,animateScoreEntrance:es,onTouchStart:Hn,onTouchEnd:Bn}=Pn,Kn=window.__quantAppLogic.ops.create({navigateTo:Ce,currentPage:Ke,currentSubPage:M}),{feishuConfig:ks,feishuTestStatus:Wn,feishuTestMessage:Un,testFeishuWebhook:Gn,saveFeishuConfig:Yn,aiFabHidden:Qn,openAiFab:_s,strategyRecommendations:Jn,aiUsage:$n,loadStrategyRecommendations:xs,loadAiUsage:ts,sysMonitor:Xn,analyticsRank:Zn,analyticsDays:el,loadSysMonitor:Ss,loadAnalytics:Cs,healthDetail:tl,loadHealthDetail:qs,reviewTriggering:al,triggerMarketReview:sl,factCheck:nl,factCheckRunning:ll,loadFactCheck:Es,triggerFactCheck:il,backups:ol,backupCreating:rl,loadBackups:Ms,createBackup:cl,restoreBackup:dl,reportExporting:ul,reportExportMsg:vl,exportReport:ml,tourVisible:fl,tourStep:pl,tourSteps:gl,maybeShowTour:hl,skipTour:yl,finishTour:bl,feedbackText:wl,feedbackSubmitting:kl,submitFeedback:_l}=Kn,xl=window.__quantAppLogic.nav.create({currentView:et,selectedDate:Gt,dates:Oa,loadConsensusData:Pa,hapticFeedback:n}),{viewUnit:Sl,datePickerType:Cl,dateFormat:ql,canNavPrev:El,canNavNext:Ml,switchView:Ts,navigateDate:Ds,disabledDate:Tl,onDateChange:Dl}=xl,Pl=window.__quantAppLogic.keys.create({menus:Ie,subPageNames:sa,navigateTo:Ce,currentPage:Ke,currentSubPage:M,currentView:et,navigateDate:Ds,switchView:Ts,getLoadDashboardData:jt,refreshCalendarData:hs,getLoadAiHistory:Qa,exportCSV:ys,getShowBatchEvaluate:Cn,openAiFab:_s,toggleSidebar:ce,showStockDetail:As,getSelectedDate:qn,markExternalStock:Ll}),{searchQuery:Rl,searchStocks:zl,onSearchSelect:Al,shortcutHelpVisible:Ps,commandPaletteVisible:Rs,handleGlobalKeydown:zs}=Pl;let Ha=null;function Ll(j){Ha={code:j,ts:Date.now()}}function Il(j){return!!(Ha&&Date.now()-Ha.ts<4e3&&(j==null||Ha.code===j))}let Ba=0;async function As(j){const re=++Ba;L(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(j,""),ss.value=null,Le.value="daily",de.value=!1,Ct.value="kline",Y.value=null,we.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),Ot.value=!0,u(()=>es());try{const he=await fetch(`/api/calendar/stock/${j}?date=${Gt.value}`);if(re!==Ba)return;Y.value=await he.json(),Y.value&&Y.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(j,Y.value.name)}catch{if(re!==Ba)return;ElementPlus.ElMessage.error("加载失败"),Y.value={stock:j,name:"",total_days:0}}finally{re===Ba&&(we.value=!1)}setTimeout(async()=>{await yt("daily"),Za()},500),os(j)}const Nl={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},Ol={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function jl(j){return Nl[j]||"var(--text-tertiary)"}function Vl(j){return Ol[j]||"var(--bg-hover)"}const Fl=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:de,stockDetailVisible:Ot,stockDetailTab:Ct,stockDetail:Y,disposeStockKline:bs}):{},{chatSessions:Hl,chatHistoryView:Bl,selectedChatIds:Kl,expandedChatDates:Wl,expandedChatMonths:Ul,expandedChatStocks:Gl,chatHistoryLoading:Yl,chatHistoryError:Ql,allChatSessionsFlat:Jl,chatGroupedByDate:$l,chatGroupedByMonth:Xl,chatGroupedByStock:Zl,toggleSelectChat:ei,toggleSelectChatDate:ti,toggleSelectChatMonth:ai,toggleSelectChatStock:si,toggleChatDateExpand:ni,toggleChatMonthExpand:li,toggleChatStockExpand:ii,selectAllChatSessions:oi,deleteSelectedChatSessions:ri,viewChatSession:ci,loadChatHistory:Ls,deleteChatSession:di,renderMarkdown:ui,stockChatInput:vi,stockChatMessages:mi,stockChatLoading:fi,stockChatError:pi,askStockSend:gi,askStockQuick:hi}=Fl,yi=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:at,applyTheme:fa,allMenuDefs:me,loadGroupConfig:Fe}):{},{userList:bi,userSearch:wi,groupFilter:ki,userPageTab:_i,expandedGroups:xi,addMemberGroupMap:Si,filteredUsers:Ci,toggleGroupExpand:qi,removeMemberFromGroupInline:Ei,addMemberToGroupInline:Mi,changeUserGroup:Ti,showAddUser:Di,editingUser:Pi,userForm:Ri,savingUser:zi,editingGroup:Ai,menuConfigDialog:Li,memberDialog:Ii,groupEditForm:Ni,subPageCache:Oi,showAddGroup:ji,addGroupForm:Vi,savingGroup:Fi,groupMembers:Hi,addMemberUsername:Bi,selectedMemberGroup:Ki,subPageSectionExpanded:Wi,toggleSubPageSection:Ui,getGroupMemberCount:Gi,getMenuEnabledCount:Yi,groupCount:Qi,openMemberManager:Ji,loadGroupMembers:$i,addMemberToGroup:Xi,removeMemberFromGroup:Zi,availableUsersForGroup:eo,onParentToggle:to,openMenuConfig:ao,saveMenuConfig:so,deleteGroupConfig:no,createGroup:lo,allGroups:io,getGroupName:oo,loadAllGroups:as,loadUsers:Ka,editUser:ro,saveUser:co,deleteUser:uo,toggleUserEnabled:vo,resetUserPassword:mo}=yi,fo=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:_a,currentPage:Ke,currentSubPage:M,dashboardData:ct,searchKeyword:ua,statusFilter:nt,strategyFilter:la,strategyFilterCounts:ma}):{},{applyStrategyFilter:Vp,statusCounts:po,stockPool:go,strategyDistribution:ho,strategyPreviewCount:yo,saveStrategyFilter:bo,filteredConsensusRank:wo,currentPoolSize:ko,filteredStrategyCounts:_o,poolChangeBadge:xo,timeBarPercent:So,lastRefreshTime:Is,navigateToStrategyFilter:Co}=fo,qo=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:S,consensus:_a}):{},{aiResult:ss,lastEvalTime:Eo,evalHistoryComparison:Mo,checklistItems:To,aiHistory:Ns,selectedHistoryIds:Os,expandedDates:js,expandedMonths:Do,expandedStocks:Vs,poolSignals:Po,toggleMonthExpand:Ro,aiHistoryView:zo,selectedWatchlistCodes:Fs,showAutoEvaluateSettings:Hs,savingConfig:Bs,autoEvaluateScope:Ks,aiVendors:Ao,aiCatalog:Lo,aiModelsError:Io,testingAllModels:No,savingAiModels:Oo,loadAiVendors:Wa,loadAiCatalog:Ws,saveAiVendors:Us,saveAiModels:jo,testVendorModel:Vo,testAllVendorModels:Fo,fetchVendorModels:Ho,addVendorFromCatalog:Bo,addCustomVendor:Ko,addVendorModel:Wo,removeVendorModel:Uo,removeVendor:Go,toggleVendorKeyReveal:Yo,toggleVendorEdit:Qo,autoEvaluateConfig:ns,aiLoading:ls,aiEvalStage:Gs,aiEvalElapsed:Ys,aiEvalError:Qs,showBatchEvaluate:is,batchStocks:Js,batchRunning:$s,batchTotal:Xs,batchCompleted:Zs,batchCurrent:en,batchStatuses:tn,batchResults:an,batchEvalErrors:sn,aiConfig:nn,selectedPreset:Jo,providerInfo:$o,aiPresets:Fp,applyPreset:Xo,onProviderChange:Zo,fetchPoolSignals:er,cancelPoolSignals:ln,loadLastEvaluation:os}=qo,tr=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:at,selectedDate:Gt,stockDetail:Y,stockDetailTab:Ct,stockDetailVisible:Ot,stockDetailLoading:we,stockKlineLoaded:de,viewCache:Tn,animateScoreEntrance:es,loadStockKline:yt,refreshStockScore:Za,disposeStockKline:bs,aiHistory:Ns,aiLoading:ls,aiEvalStage:Gs,aiEvalElapsed:Ys,aiEvalError:Qs,aiResult:ss,loadLastEvaluation:os,autoEvaluateConfig:ns,autoEvaluateScope:Ks,batchStocks:Js,batchRunning:$s,batchTotal:Xs,batchCompleted:Zs,batchCurrent:en,batchStatuses:tn,batchResults:an,batchEvalErrors:sn,expandedDates:js,expandedStocks:Vs,savingConfig:Bs,selectedHistoryIds:Os,selectedWatchlistCodes:Fs,showAutoEvaluateSettings:Hs,showBatchEvaluate:is}):{},{quickEvalStock:ar,evalStrategy:sr,watchlistSort:nr,watchlist:lr,watchlistCodes:ir,sortedWatchlist:or,getWatchlistScore:rr,getLatestScore:Hp,addSearchResult:cr,evaluatedCodes:dr,klineLoadedCodes:ur,markKlineLoaded:on,watchlistSearch:vr,watchlistResults:mr,watchlistSearching:fr,dataRefreshConfig:pr,dataRefreshReloading:gr,dataRefreshSaving:hr,aiHistoryLoading:yr,aiHistoryError:br,aiHistoryTotal:wr,aiHistoryLoadingMore:kr,hasMoreAiHistory:_r,loadMoreAiHistory:xr,watchlistLoading:Sr,doAiEvaluate:Cr,loadAiHistory:ja,deleteSingleHistory:qr,toggleSelectHistory:Er,clearSelection:Mr,clearWatchlistSelection:Tr,batchReevaluateHistory:Dr,batchAddToWatchlist:Pr,batchRemoveWatchlist:Rr,toggleSelectWatchlist:zr,selectAllHistory:Ar,selectAllWatchlist:Lr,deleteSelectedHistory:Ir,loadAutoEvaluateConfig:rn,saveAutoEvaluateConfig:Nr,loadWatchlist:cn,addToWatchlist:Or,removeFromWatchlist:jr,clearWatchlist:Vr,toggleWatchlist:Fr,showStockKline:Hr,preloadingKline:Br,preloadWatchlistKline:dn,watchlistEvaluate:Kr,batchEvaluateWatchlist:Wr,batchEvaluateSelected:Ur,searchStockForWatchlist:Gr,loadDataRefreshConfig:un,saveDataRefreshConfig:Yr,triggerDataReload:Qr,triggerDataPull:Jr,dataPullRunning:$r,groupedByDate:Xr,aiHistoryByStock:Zr,groupedByMonth:ec,aiHistoryStockCount:tc,scoreDistribution:ac,quickEvaluate:sc,toggleDateExpand:nc,toggleSelectDate:lc,toggleSelectMonth:ic,toggleStockExpand:oc,toggleSelectStock:rc,registerTrendChart:cc,viewAiResult:dc,doBatchEvaluate:uc,realtimeQuotes:vc,realtimeDegraded:mc,realtimeWsState:fc,connectRealtimeQuotes:pc,disconnectRealtimeQuotes:gc,quoteWarningFor:hc,realtimeQuoteColor:yc,realtimePriceText:bc,realtimePctText:wc,realtimeRatioText:kc,REALTIME_DEGRADED_TEXT:_c,REALTIME_FALLBACK_TEXT:xc}=tr,Sc=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:Ne}):{},{btStrategyOptions:Cc,btSelectedStrategies:qc,toggleBtStrategy:Ec,btDateRange:Mc,btCapital:Tc,btCommissionRate:Dc,btIncludeBenchmark:Pc,btRunning:Rc,btResult:zc,btError:Ac,btMetrics:Lc,btAnnualReturns:Ic,btTrades:Nc,btStrategyMetricsRows:Oc,btDrawdownRegion:jc,runBacktestWorkbench:Vc,exportBacktestCSV:Fc,registerBacktestNavChart:Hc,btFmtNum:Bc}=Sc,Kc=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:S,aiConfig:nn,aiLoading:ls,feishuConfig:ks,currentTheme:Ve,changeTheme:ka,autoEvaluateConfig:ns,currentUser:at,strategyFilter:la,applyTheme:fa,dashboardData:ct,lastRefreshTime:Is,saveAiModels:jo}):{},{configSaving:Wc,globalConfigDirty:Uc,lastSavedTime:Gc,feishuConfigOriginal:Bp,aiConfigOriginal:Kp,tushareConfigOriginal:Wp,tushareConfig:Yc,tushareStatus:Qc,datasourceConfig:Jc,datasourceStatus:$c,syncingData:Xc,stockCount:Zc,tradeDateCount:ed,aiStatus:td,appVersion:vn,showImportDialog:ad,rateLimitConfig:sd,rateLimitDirty:nd,rateLimitSaving:ld,loadRateLimit:rs,saveRateLimit:id,saveAiConfig:od,testAiApi:rd,exportConfig:cd,importConfig:dd,saveAllConfig:ud,resetAllConfig:vd,testTushareConnection:md,checkTushareConnection:Ua,syncStockData:fd,loadTushareConfig:mn,loadDatasourceConfig:fn,saveDatasourceConfig:pd,testDatasource:gd,toggleDatasourceKeyReveal:hd,toggleDatasourceEdit:yd,loadFeishuConfig:cs,loadAiConfig:Ga,loadUserConfig:pn,loadSystemStatus:ds,loadDashboardData:us}=Kc,bd=window.__quantAppLogic.auth.create({currentUser:at,loadUserConfig:pn,loadDates:gs,loadDashboardData:us,loadDashboardCached:Fa,loadHealthMetrics:Ze,loadConsensusData:Pa,applyTheme:fa,maybeShowTour:hl,loadAiVendors:Wa,loadGroupConfig:Fe,groupsConfig:ae}),{loginForm:gn,logining:hn,guestLogining:yn,showChangePassword:wd,changePasswordForm:kd,changingPassword:_d,showSetupWizard:bn,setupForm:xd,setupStep:Sd,checkSetupWizard:Cd,completeSetupWizard:qd,resetSetupWizard:Ed,handleLogin:Md,handleGuestLogin:Td,handleLogout:Dd,doChangePassword:Pd}=bd;window.__quantAppLogic.watch.register({strategyFilter:la,currentView:et,statusFilter:nt,currentPage:Ke,currentSubPage:M,menus:Ie,currentUser:at,strategyFilterCounts:ma,lazyTick:Ee,dates:Oa,selectedDate:Gt,consensus:_a,loadConsensusData:Pa,fetchMerrillClock:R,fetchMarketData:Xa,loadWatchlist:cn,loadAiHistory:ja,preloadWatchlistKline:dn,loadChatHistory:Ls,loadSystemStatus:ds,checkTushareConnection:Ua,loadSysMonitor:Ss,loadAnalytics:Cs,loadHealthDetail:qs,loadHealthMetrics:Ze,loadAiUsage:ts,loadFactCheck:Es,loadAutoEvaluateConfig:rn,loadDatasourceConfig:fn,loadFeishuConfig:cs,loadAiConfig:Ga,loadAiVendors:Wa,loadRateLimit:rs,loadDataRefreshConfig:un,loadBackups:Ms,loadAllGroups:as,loadUsers:Ka,stockDetailTab:Ct,stockDetailVisible:Ot,stockKlineLoaded:de,loadStockKline:yt,currentKlinePeriod:Le,showMerrillDetail:q,indexDetailVisible:Ja,restoreDialogFocus:P});const Rd=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:zs,applyTheme:fa,menus:Ie,currentPage:Ke,currentSubPage:M,currentView:et,currentKlinePeriod:Le,selectedDate:Gt,dates:Oa,loadDates:gs,loadConsensusData:Pa,loadDashboardCached:Fa,appVersion:vn,themes:ke,fetchMarketData:Xa,fetchMerrillStages:X,fetchMerrillClock:R,loadMerrillTimeline:G,showTimelineStage:oe,merrillTimeline:pe,timelineLoading:Se,loadAiConfig:Ga,loadAiVendors:Wa,loadAiCatalog:Ws,currentUser:at,loadUserConfig:pn,loadAutoEvaluateConfig:rn,loadGroupConfig:Fe,loadUsers:Ka,loadAllGroups:as,loadAiHistory:ja}),{runOnMounted:zd}=Rd;window.__quantGoPage=async(j,re)=>{try{const he=window.__lazyLoaders&&window.__lazyLoaders[j];he&&await he()}catch(he){console.warn("[lazy] 页面组件加载失败",j,he)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(he=>{he&&he.name&&!he.__quantRegistered&&(window.__quantApp.component(he.name,he),he.__quantRegistered=!0)}),Ee&&Ee.value++,Ke.value=j,re&&(M.value=re)};let Ra;function wn(){const j=window.QuantSessionRestore;j&&j.save({page:Ke.value,sub:M.value||""})}c(Ke,async j=>{var re;n("light"),wn();try{const he=me.find(function(je){return je.key===j});document.title=(he?he.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",j),j!=="calendar"&&typeof ln=="function"&&ln();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:j})}).catch(()=>{})}catch(he){console.warn("pageView track failed:",he)}if(Ra&&(clearInterval(Ra),Ra=null),j==="strategies")await Fa(),Ra=setInterval(()=>{Fa().catch(()=>{})},5*60*1e3);else if(j==="calendar")Gt.value&&await Pa();else if(j==="ai")xs(),ts(),await ja();else if(j==="system"){if(!Gt.value){const je=await(await fetch("/api/dashboard")).json(),Qe=je.data||je;Qe.latest_date&&(Gt.value=Qe.latest_date)}if(Gt.value){const he=["day","week","month","year"];for(const je of he)try{const Kt=await(await fetch(`/api/view/${je}/${Gt.value}?status=all`)).json();ma.value[je]=Kt.stocks||[]}catch(Qe){console.warn("loadConsensusData view load failed:",Qe)}(!_a.value||_a.value.length===0)&&(_a.value=ma.value.day||[])}((re=at.value)==null?void 0:re.role)==="admin"&&(await Ka(),await cs(),await mn(),await ds(),await Ga(),await rs(),Ua(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(Ua,36e5)))}}),f(async()=>{await zd()}),se(),G(),t(()=>{Ra&&clearInterval(Ra),window.removeEventListener("keydown",zs),window.removeEventListener("keydown",V)});function Ad(j,re=2){return j==null||j===""||isNaN(Number(j))?"--":Number(j).toFixed(re)}const kn={currentPage:Ke,pageComp:Pe,currentSubPage:M,sidebarCollapsed:_e,menus:Ie,navMode:pt,setNavMode:Pt,tabGroups:dt,openTab:wa,closeTab:Sa,activateTab:na,fmtNum:Ad,sanitizeHtml:k,keyClick:_,isOnline:v,currentUser:at,allMenuDefs:me,t:E,locale:r,changeLanguage:y,currentPageName:ie,subPageNames:sa,searchQuery:Rl,searchStocks:zl,onSearchSelect:Al,selectedDate:Gt,onDateChange:Dl,disabledDate:Tl,refreshCalendarData:hs,exportCSV:ys,viewNote:Dn,loading:fs,lastLoadTime:ps,resetSetupWizard:Ed,showChangePassword:wd,themes:ke,currentTheme:Ve,changeTheme:ka,changeThemeMode:Ia,changeThemeHue:Ut,handleLogout:Dd,themeHues:Ae,themeHueNames:ut,themeHue:Xe,themeMode:zt,hueColor:Wt,hueName:Ca,density:Bt,changeDensity:Na,marketData:Rn,merrillData:I,merrillTimeline:pe,timelineLoading:Se,merrillStagesConfig:K,fetchMerrillStages:X,merrillSnapshots:De,merrillSnapshotsTotal:ve,healthMetrics:He,feishuConfig:ks,feishuTestStatus:Wn,feishuTestMessage:Un,shortcutHelpVisible:Ps,shortcutHelpItems:xe,commandPaletteVisible:Rs,tourVisible:fl,tourStep:pl,tourSteps:gl,skipTour:yl,finishTour:bl,backups:ol,backupCreating:rl,loadBackups:Ms,createBackup:cl,restoreBackup:dl,reportExporting:ul,reportExportMsg:vl,exportReport:ml,sysMonitor:Xn,analyticsRank:Zn,analyticsDays:el,loadSysMonitor:Ss,loadAnalytics:Cs,healthDetail:tl,loadHealthDetail:qs,reviewTriggering:al,triggerMarketReview:sl,factCheck:nl,factCheckRunning:ll,loadFactCheck:Es,triggerFactCheck:il,strategyRecommendations:Jn,aiUsage:$n,loadStrategyRecommendations:xs,loadAiUsage:ts,aiFabHidden:Qn,openAiFab:_s,feedbackText:wl,feedbackSubmitting:kl,submitFeedback:_l,backtestStrategies:Ne,backtestStrategy:Je,backtestRange:$e,backtestCapital:Ye,backtestRunning:rt,backtestResult:bt,runBacktest:aa,btStrategyOptions:Cc,btSelectedStrategies:qc,toggleBtStrategy:Ec,btDateRange:Mc,btCapital:Tc,btCommissionRate:Dc,btIncludeBenchmark:Pc,btRunning:Rc,btResult:zc,btError:Ac,btMetrics:Lc,btAnnualReturns:Ic,btTrades:Nc,btStrategyMetricsRows:Oc,btDrawdownRegion:jc,runBacktestWorkbench:Vc,exportBacktestCSV:Fc,registerBacktestNavChart:Hc,btFmtNum:Bc,fetchMarketData:Xa,fetchMerrillClock:R,testFeishuWebhook:Gn,saveFeishuConfig:Yn,merrillClockConfig:F,merrillClockLastUpdated:$,merrillReevalResult:H,merrillReevalLoading:W,saveMerrillClockConfig:ue,doMerrillReevaluate:Re,dataRefreshConfig:pr,dataRefreshReloading:gr,dataRefreshSaving:hr,loadDataRefreshConfig:un,saveDataRefreshConfig:Yr,triggerDataReload:Qr,triggerDataPull:Jr,dataPullRunning:$r,indexDetailVisible:Ja,indexDetail:$a,indexAiResult:zn,indexAiLoading:An,loadCachedIndexEval:In,showIndexDetail:Ln,doIndexAiEvaluate:Nn,klinePeriods:Q,currentKlinePeriod:Le,klineLoading:mt,indexKlineLoading:ne,stockKlineLoaded:de,indexKlineLoaded:At,klineDegradeNote:A,klineShowMinutes:ia,toggleKlineShowMinutes:D,loadStockKline:yt,switchKlinePeriod:Lt,loadIndexKline:ea,switchIndexKlinePeriod:pa,zoomKlineRange:On,MA_LINES:ze,klineMaVisible:Te,toggleKlineMa:oa,scoreAnimating:jn,scoreDelta:Vn,scorePulse:Fn,refreshStockScore:Za,animateScoreEntrance:es,showMerrillDetail:q,merrillDetailData:O,showStageDetail:J,getCharLabel:d,getAssetName:N,getRankColor:le,levelColor:jl,levelBg:Vl,timelineStages:s,getStageAngle:ee,getCycleProgress:z,getCurrentStageMonths:w,getStageTotalMonths:m,isStageCompleted:T,stages:Z,indicatorList:te,dimensionScoreList:B,confidenceColor:C,views:St,currentView:et,statusFilter:nt,loginForm:gn,logining:hn,guestLogining:yn,dashboardData:ct,loadingView:Mn,dates:Oa,consensus:_a,searchKeyword:ua,stockDetailVisible:Ot,stockDetailTab:Ct,stockDetail:Y,stockDetailLoading:we,detailDisplayMode:tt,setDetailDisplayMode:Et,isNarrow:Ue,detailSplitEnabled:qt,splitWidth:lt,setSplitWidth:$t,SPLIT_DEFAULT_PCT:It,aiLoading:ls,aiEvalStage:Gs,aiEvalElapsed:Ys,aiEvalError:Qs,showBatchEvaluate:is,batchStocks:Js,batchRunning:$s,batchTotal:Xs,batchCompleted:Zs,batchCurrent:en,batchStatuses:tn,batchResults:an,batchEvalErrors:sn,aiConfig:nn,userList:bi,showAddUser:Di,editingUser:Pi,userForm:Ri,savingUser:zi,userSearch:wi,filteredUsers:Ci,groupFilter:ki,userPageTab:_i,expandedGroups:xi,addMemberGroupMap:Si,toggleGroupExpand:qi,removeMemberFromGroupInline:Ei,addMemberToGroupInline:Mi,changeUserGroup:Ti,statusCounts:po,stockPool:go,poolSignals:Po,aiResult:ss,aiHistory:Ns,groupedByDate:Xr,groupedByMonth:ec,expandedDates:js,expandedMonths:Do,aiHistoryByStock:Zr,aiHistoryStockCount:tc,expandedStocks:Vs,aiHistoryView:zo,aiHistoryLoading:yr,aiHistoryError:br,aiHistoryTotal:wr,aiHistoryLoadingMore:kr,hasMoreAiHistory:_r,loadMoreAiHistory:xr,watchlistLoading:Sr,scoreDistribution:ac,quickEvalStock:ar,evalStrategy:sr,checklistItems:To,evalHistoryComparison:Mo,quickEvaluate:sc,selectedHistoryIds:Os,showAutoEvaluateSettings:Hs,savingConfig:Bs,autoEvaluateConfig:ns,autoEvaluateScope:Ks,strategyList:va,toggleDateExpand:nc,toggleMonthExpand:Ro,toggleSelectDate:lc,toggleSelectMonth:ic,toggleSelectStock:rc,toggleStockExpand:oc,registerTrendChart:cc,selectedWatchlistCodes:Fs,clearWatchlistSelection:Tr,toggleSelectWatchlist:zr,selectAllHistory:Ar,selectAllWatchlist:Lr,batchRemoveWatchlist:Rr,batchEvaluateSelected:Ur,batchReevaluateHistory:Dr,batchAddToWatchlist:Pr,viewUnit:Sl,datePickerType:Cl,dateFormat:ql,canNavPrev:El,canNavNext:Ml,handleLogin:Md,handleGuestLogin:Td,switchView:Ts,navigateDate:Ds,navigateTo:Ce,loadDashboardData:us,loadConsensusData:Pa,showStockDetail:As,externalStockActive:Il,doAiEvaluate:Cr,doBatchEvaluate:uc,loadAiHistory:ja,loadLastEvaluation:os,lastEvalTime:Eo,viewAiResult:dc,saveAiConfig:od,testAiApi:rd,exportConfig:cd,importConfig:dd,configSaving:Wc,configChanged:S,watchlist:lr,watchlistCodes:ir,watchlistSearch:vr,watchlistResults:mr,watchlistSearching:fr,watchlistSort:nr,sortedWatchlist:or,getWatchlistScore:rr,addSearchResult:cr,evaluatedCodes:dr,klineLoadedCodes:ur,markKlineLoaded:on,loadWatchlist:cn,addToWatchlist:Or,removeFromWatchlist:jr,clearWatchlist:Vr,searchStockForWatchlist:Gr,toggleWatchlist:Fr,batchEvaluateWatchlist:Wr,watchlistEvaluate:Kr,showStockKline:Hr,preloadWatchlistKline:dn,preloadingKline:Br,realtimeQuotes:vc,realtimeDegraded:mc,realtimeWsState:fc,connectRealtimeQuotes:pc,disconnectRealtimeQuotes:gc,quoteWarningFor:hc,realtimeQuoteColor:yc,realtimePriceText:bc,realtimePctText:wc,realtimeRatioText:kc,REALTIME_DEGRADED_TEXT:_c,REALTIME_FALLBACK_TEXT:xc,toggleSelectHistory:Er,clearSelection:Mr,deleteSingleHistory:qr,deleteSelectedHistory:Ir,saveAutoEvaluateConfig:Nr,editUser:ro,saveUser:co,deleteUser:uo,loadUsers:Ka,allGroups:io,loadAllGroups:as,getGroupName:oo,toggleUserEnabled:vo,resetUserPassword:mo,selectedPreset:Jo,applyPreset:Xo,onProviderChange:Zo,providerInfo:$o,globalConfigDirty:Uc,lastSavedTime:Gc,tushareConfig:Yc,tushareStatus:Qc,syncingData:Xc,stockCount:Zc,tradeDateCount:ed,aiStatus:td,appVersion:vn,showImportDialog:ad,rateLimitConfig:sd,rateLimitDirty:nd,rateLimitSaving:ld,loadRateLimit:rs,saveRateLimit:id,saveAllConfig:ud,resetAllConfig:vd,testTushareConnection:md,syncStockData:fd,loadTushareConfig:mn,loadFeishuConfig:cs,loadSystemStatus:ds,loadAiConfig:Ga,aiVendors:Ao,aiCatalog:Lo,aiModelsError:Io,testingAllModels:No,savingAiModels:Oo,loadAiVendors:Wa,loadAiCatalog:Ws,saveAiVendors:Us,saveAiModels:Us,testVendorModel:Vo,testAllVendorModels:Fo,fetchVendorModels:Ho,addVendorFromCatalog:Bo,addCustomVendor:Ko,addVendorModel:Wo,removeVendorModel:Uo,removeVendor:Go,toggleVendorKeyReveal:Yo,toggleVendorEdit:Qo,checkTushareConnection:Ua,datasourceConfig:Jc,datasourceStatus:$c,loadDatasourceConfig:fn,saveDatasourceConfig:pd,testDatasource:gd,toggleDatasourceKeyReveal:hd,toggleDatasourceEdit:yd,strategyFilter:la,strategyFilterOptions:Aa,strategyFilterCounts:ma,strategyPreviewCount:yo,saveStrategyFilter:bo,filteredConsensusRank:wo,currentPoolSize:ko,filteredStrategyCounts:_o,strategyDistribution:ho,expandedStrategies:La,poolChangeBadge:xo,timeBarPercent:So,navigateToStrategyFilter:Co,showUserMenu:Ge,toggleSidebar:ce,groupsConfig:ae,loadGroupConfig:Fe,editingGroup:Ai,groupEditForm:Ni,showAddGroup:ji,addGroupForm:Vi,savingGroup:Fi,menuConfigDialog:Li,memberDialog:Ii,groupMembers:Hi,addMemberUsername:Bi,selectedMemberGroup:Ki,subPageSectionExpanded:Wi,toggleSubPageSection:Ui,getGroupMemberCount:Gi,getMenuEnabledCount:Yi,groupCount:Qi,openMemberManager:Ji,loadGroupMembers:$i,addMemberToGroup:Xi,removeMemberFromGroup:Zi,availableUsersForGroup:eo,subPageCache:Oi,onParentToggle:to,openMenuConfig:ao,saveMenuConfig:so,deleteGroupConfig:no,createGroup:lo,changePasswordForm:kd,changingPassword:_d,doChangePassword:Pd,showSetupWizard:bn,setupForm:xd,setupStep:Sd,checkSetupWizard:Cd,completeSetupWizard:qd,chatSessions:Hl,chatHistoryView:Bl,selectedChatIds:Kl,expandedChatDates:Wl,expandedChatMonths:Ul,expandedChatStocks:Gl,chatHistoryLoading:Yl,chatHistoryError:Ql,allChatSessionsFlat:Jl,chatGroupedByDate:$l,chatGroupedByMonth:Xl,chatGroupedByStock:Zl,toggleSelectChat:ei,toggleSelectChatDate:ti,toggleSelectChatMonth:ai,toggleSelectChatStock:si,toggleChatDateExpand:ni,toggleChatMonthExpand:li,toggleChatStockExpand:ii,selectAllChatSessions:oi,deleteSelectedChatSessions:ri,viewChatSession:ci,loadChatHistory:Ls,deleteChatSession:di,renderMarkdown:ui,stockChatInput:vi,stockChatMessages:mi,stockChatLoading:fi,stockChatError:pi,askStockSend:gi,askStockQuick:hi,onTouchStart:Hn,onTouchEnd:Bn,hapticFeedback:n};let st=null;return window.QuantStateRegistry&&window.QuantStateRegistry.createStateRegistry&&(st=window.QuantStateRegistry.createStateRegistry(),st.defineDomain("theme",["currentTheme","themeMode","themeHue","density","currentKlinePeriod"]),st.defineDomain("auth",["currentUser","loginForm","logining","guestLogining","showSetupWizard"]),st.defineDomain("prefs",["navMode","detailDisplayMode","splitWidth","sidebarCollapsed","klineShowMinutes"]),st.defineDomain("ui",["currentPage","currentSubPage","currentView","showUserMenu","searchKeyword","shortcutHelpVisible","commandPaletteVisible"]),st.defineDomain("page",["loading","dates","selectedDate","consensus","dashboardData","lastLoadTime"]),st.attach("theme","currentTheme",Ve),st.attach("theme","themeMode",zt),st.attach("theme","themeHue",Xe),st.attach("theme","density",Bt),st.attach("theme","currentKlinePeriod",Le),st.attach("auth","currentUser",at),st.attach("auth","loginForm",gn),st.attach("auth","logining",hn),st.attach("auth","guestLogining",yn),st.attach("auth","showSetupWizard",bn),st.attach("prefs","navMode",pt),st.attach("prefs","detailDisplayMode",tt),st.attach("prefs","splitWidth",lt),st.attach("prefs","sidebarCollapsed",_e),st.attach("prefs","klineShowMinutes",ia),st.attach("ui","currentPage",Ke),st.attach("ui","currentSubPage",M),st.attach("ui","currentView",et),st.attach("ui","showUserMenu",Ge),st.attach("ui","searchKeyword",ua),st.attach("ui","shortcutHelpVisible",Ps),st.attach("ui","commandPaletteVisible",Rs),st.attach("page","loading",fs),st.attach("page","dates",Oa),st.attach("page","selectedDate",Gt),st.attach("page","consensus",_a),st.attach("page","dashboardData",ct),st.attach("page","lastLoadTime",ps),kn.stateRegistry=st),kn}})();Ma.name="qc-icon";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=vm;window.__quantComponents.Header=mf;window.__quantComponents.SubNav=qf;window.__quantComponents.MobileNav=Wf;window.__quantComponents.StockList=Cp;window.__quantComponents.DetailSplit=Tp;window.__quantComponents.TopTabs=Op;window.__quantComponents.AppIcon=Ma;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default jp();
