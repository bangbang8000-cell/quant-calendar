var Id=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);import{aV as Nd,L as pe,O as na,Z as Od,au as Ft,M as be,P as qe,aW as jd,a0 as Ke,_ as We,F as mt,al as Ct,S as ut,a1 as pt,X as sa,ai as zt,q as ka,o as Ia,a8 as ss,r as Pt,e as ct,av as Vd,Y as Ea,$ as pa,R as Fd,aC as aa,T as Hd,Q as Jt,p as Bd,n as Kd}from"./vendor-vue-DDF9zi1T.js";import{e as Wd,E as Ud,a as Gd,b as Yd,c as Qd,z as Jd}from"./vendor-ep-VOop1zGa.js";import{C as $d,a as Xd,W as Zd,I as eu,S as tu,B as au,F as su,b as nu,c as lu,d as iu,e as ou,f as ru,P as cu,g as du,h as uu,i as vu,T as mu,j as fu,L as pu,k as gu,G as hu,U as yu,l as bu,m as wu,n as ku,D as _u,o as xu,p as Su,M as Cu,q as qu,R as Eu,r as Mu,s as Tu,K as Du,t as Pu,u as Ru,v as zu,w as Au,x as Lu,y as Iu,z as Nu,A as Ou,E as ju,H as Vu,O as Fu,J as Hu,N as Bu,Q as Ku,V as Wu,X as Uu,Y as Gu,Z as Yu,_ as Qu,$ as Ju,a0 as $u,a1 as Xu,a2 as Zu,a3 as ev,a4 as tv,a5 as av,a6 as sv,a7 as nv,a8 as lv,a9 as iv,aa as ov,ab as rv,ac as cv,ad as dv,ae as uv,af as vv,ag as mv,ah as fv,ai as pv,aj as gv,ak as hv,al as yv,am as bv,an as wv,ao as kv,ap as _v,aq as xv,ar as Sv,as as Cv,at as qv,au as Ev,av as Mv,aw as Tv,ax as Dv,ay as Pv,az as Rv,aA as zv,aB as Av,aC as Lv,aD as Iv,aE as Nv,aF as Ov,aG as jv,aH as Vv,aI as Fv,aJ as Hv,aK as Bv,aL as Kv,aM as Wv,aN as Uv,aO as Gv,aP as Yv,aQ as Qv}from"./vendor-lucide-DidEUx9K.js";var jp=Id((Jp,De)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))t(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const w of d.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&t(w)}).observe(document,{childList:!0,subtree:!0});function v(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerPolicy&&(d.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?d.credentials="include":c.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(c){if(c.ep)return;c.ep=!0;const d=v(c);fetch(c.href,d)}})();window.Vue=Nd;const la=Wd||{};window.ElementPlus=la;la.ElMessage=la.ElMessage||Ud;la.ElMessageBox=la.ElMessageBox||Gd;la.ElNotification=la.ElNotification||Yd;la.ElLoading=la.ElLoading||Qd;window.ElementPlusLocaleZhCn={default:Jd};(function(){const a=[45,220,0,140,270,320,180,25,250],e={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},v={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function t(s,S,l){return"hsl("+s+", "+S+"%, "+l+"%)"}function c(s,S,l){S=S/100,l=l/100;const h=function(_){return(_+s/30)%12},te=S*Math.min(l,1-l),I=function(_){return l-te*Math.max(-1,Math.min(h(_)-3,Math.min(9-h(_),1)))};return Math.round(255*I(0))+", "+Math.round(255*I(8))+", "+Math.round(255*I(4))}const d=5;function w(s,S,l){return c(s,S,l).split(",").map(function(h){return parseInt(h,10)})}function r(s){const S=function(l){return l=l/255,l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)};return .2126*S(s[0])+.7152*S(s[1])+.0722*S(s[2])}function i(s,S){const l=r(s),h=r(S),te=Math.max(l,h),I=Math.min(l,h);return(te+.05)/(I+.05)}function p(s,S,l){for(var h=8,te=92,I=0;I<26;I++){var _=(h+te)/2;r(w(s,S,_))<l?h=_:te=_}return Math.round(te*10)/10}function o(s,S,l,h,te){let I=38,_=76;for(let m=0;m<24;m++){const P=(I+_)/2;i(w(s,h,P),w(s,S,l))>=te?_=P:I=P}return Math.round(_*10)/10}function M(s,S){var l={};return S==="light"?(l["--qc-neutral-50"]=t(s,18,98),l["--qc-neutral-100"]=t(s,16,95),l["--qc-neutral-200"]=t(s,14,90),l["--qc-neutral-300"]=t(s,12,83),l["--qc-neutral-400"]=t(s,10,68),l["--qc-neutral-500"]=t(s,10,53),l["--qc-neutral-600"]=t(s,10,40),l["--qc-neutral-700"]=t(s,10,30),l["--qc-neutral-800"]=t(s,10,20),l["--qc-neutral-900"]=t(s,10,12),l["--qc-background"]=t(s,18,98),l["--qc-muted"]=t(s,16,95),l["--qc-border"]=t(s,12,72),l["--chart-axis"]=t(s,12,55),l["--chart-split"]=t(s,10,88),l["--qc-foreground"]=t(s,10,12),l["--qc-muted-foreground"]=t(s,9,38),l["--qc-nav-item-default"]=t(s,9,38),l["--qc-nav-item-hover"]=t(s,10,12),l["--qc-nav-group-label"]=t(s,9,40),l["--qc-nav-bg"]="#ffffff",l["--bg-page"]=t(s,20,97),l["--bg-stripe"]=t(s,20,97),l["--bg-card-header"]=t(s,24,96),l["--card-gradient-header"]="linear-gradient(135deg, "+t(s,24,96)+" 0%, #ffffff 100%)",l["--bg-hover"]=t(s,26,94),l["--bg-tertiary"]=t(s,14,93),l["--badge-gold-bg"]=t(s,26,96),l["--gold-bg"]=t(s,20,97),l["--border-light"]=t(s,22,89),l["--border-base"]=t(s,24,79),l["--border-color"]=t(s,14,88),l["--text-primary"]=t(s,12,12),l["--text-secondary"]=t(s,12,32),l["--text-tertiary"]=t(s,14,40),l["--text-disabled"]=t(s,9,b(s,9,D(s,18,98),25,70,!0,3.2)),l["--qc-card"]="#ffffff",l["--qc-popover"]="#ffffff",l["--qc-nav-border"]=t(s,12,72),l["--qc-nav-item-hover-bg"]=t(s,16,95),l["--qc-overlay"]="rgba(31, 29, 26, 0.5)",l["--bg-card"]="#ffffff",l["--surface"]="#ffffff",l["--border-heavy"]=t(s,22,72),l["--surface-canvas"]=t(s,18,98),l["--surface-card"]="#ffffff",l["--surface-raised"]="#ffffff",l["--surface-sunken"]=t(s,16,96),l["--surface-input"]="#ffffff",l["--surface-hover"]=t(s,26,94),l["--border-strong"]=t(s,22,72),l["--scrollbar-thumb"]="rgba("+c(s,12,72)+", 0.5)",l["--bg-page-rgb"]=c(s,20,97)):(l["--qc-background"]=t(s,10,8),l["--qc-card"]=t(s,11,11),l["--qc-popover"]=t(s,11,11),l["--qc-muted"]=t(s,12,14),l["--qc-border"]=t(s,14,30),l["--chart-axis"]=t(s,16,52),l["--chart-split"]=t(s,14,26),l["--qc-nav-bg"]=t(s,10,9),l["--qc-nav-border"]=t(s,13,22),l["--qc-nav-item-hover-bg"]=t(s,12,14),l["--bg-page"]=t(s,10,8),l["--bg-card"]=t(s,11,11),l["--bg-card-header"]=t(s,12,14),l["--bg-stripe"]=t(s,10,9),l["--bg-hover"]=t(s,12,14),l["--bg-tertiary"]=t(s,12,14),l["--border-light"]=t(s,13,18),l["--border-base"]=t(s,14,26),l["--border-heavy"]=t(s,16,38),l["--border-color"]=t(s,13,22),l["--surface"]=t(s,11,11),l["--surface-canvas"]=t(s,10,8),l["--surface-card"]=t(s,11,11),l["--surface-raised"]=t(s,12,14),l["--surface-sunken"]=t(s,12,9),l["--surface-input"]=t(s,12,9),l["--surface-hover"]=t(s,12,15),l["--border-strong"]=t(s,16,42),l["--scrollbar-thumb"]="rgba("+c(s,16,52)+", 0.5)",l["--bg-page-rgb"]=c(s,10,8),l["--qc-overlay"]="rgba(0, 0, 0, 0.6)"),l}const k=4.6;var C=[255,255,255];function x(s){return c(s,10,8).split(",").map(function(S){return parseInt(S,10)})}function b(s,S,l,h,te,I,_){for(var m=_||k,P=h,y=te,j=0;j<24;j++){var se=(P+y)/2,J=i(w(s,S,se),l)>=m;I?J?P=se:y=se:J?y=se:P=se}return Math.round((I?P:y)*10)/10}function D(s,S,l){return c(s,S,l).split(",").map(function(h){return parseInt(h,10)})}function T(s){const S=p(s,75,.18),l=p(s,75,.26),h=p(s,70,.36),te=p(s,85,.12),I=c(s,75,S),_=b(s,68,C,14,62,!0),m=Math.max(12,_-5),P=Math.max(10,_-11),y=c(s,16,95).split(",").map(function($){return parseInt($,10)}),j=c(s,85,92).split(",").map(function($){return parseInt($,10)}),se=b(s,78,y,10,58,!0,4.6),J=b(s,80,j,10,58,!0,4.6),L=Math.min(32,b(s,80,C,8,60,!0,4.6));return{...M(s,"light"),"--primary-color":t(s,75,S),"--primary-rgb":I,"--color-primary":t(s,75,S),"--qc-primary":t(s,75,S),"--qc-primary-50":t(s,90,96),"--qc-primary-100":t(s,85,92),"--qc-primary-200":t(s,80,84),"--qc-primary-300":t(s,75,72),"--qc-primary-400":t(s,70,h),"--qc-primary-500":t(s,75,l),"--qc-primary-600":t(s,80,S),"--qc-primary-700":t(s,85,te),"--qc-primary-800":t(s,88,28),"--qc-primary-900":t(s,90,20),"--text-link":t(s,78,se),"--secondary-color":t(s,70,55),"--card-border":t(s,22,80),"--bg-selected":"rgba("+I+", 0.08)","--btn-primary-bg":t(s,80,L),"--btn-primary-border":t(s,80,L),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":t(s,82,28),"--btn-primary-hover-border":t(s,82,28),"--btn-primary-active-bg":t(s,85,24),"--btn-primary-active-border":t(s,85,24),"--btn-primary-plain-bg":"rgba("+I+", 0.08)","--btn-primary-plain-border":"rgba("+I+", 0.25)","--btn-primary-plain-color":t(s,80,se),"--btn-primary-plain-hover-bg":"rgba("+I+", 0.15)","--btn-primary-plain-hover-border":t(s,80,32),"--btn-primary-text-color":t(s,80,se),"--gradient-brand":"linear-gradient(135deg, "+t(s,76,m)+" 0%, "+t(s,85,P)+" 100%)","--primary-text":t(s,78,se),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+t(s,62,Math.min(74,o(s,45,14,58,d)+5))+" 0%, "+t(s,58,o(s,45,14,58,d))+" 100%)","--panel-fg":t(s,45,14),"--qc-nav-item-active":t(s,80,J),"--qc-nav-item-active-bg":t(s,85,92),"--qc-nav-item-active-border":t(s,75,48),"--qc-nav-badge-bg":t(s,85,92),"--qc-nav-badge-text":t(s,80,J),"--qc-ring":t(s,75,b(s,75,D(s,18,98),25,70,!0,3.2)),"--brand-soft-text":t(s,80,b(s,80,D(s,80,84),10,58,!0,4.6)),"--border-control":t(s,16,b(s,16,D(s,18,98),30,80,!0,3.2))}}function u(s){const S=p(s,85,.34),l=p(s,85,.46),h=c(s,85,S),te=b(s,80,x(s),30,92,!1),I=Math.min(96,te+16),_=D(s,55,22),m=D(s,10,9),P=h.split(",").map(function($){return parseInt($,10)}),y=[0,1,2].map(function($){return Math.round(P[$]*.12+m[$]*.88)}),j=b(s,85,y,45,96,!1,4.6),se=b(s,85,_,45,96,!1,4.6),J=Math.min(94,b(s,92,_,45,96,!1,4.6)),L=Math.min(96,J+6);return{...M(s,"dark"),"--primary-color":t(s,85,S),"--primary-rgb":h,"--color-primary":t(s,85,S),"--qc-primary":t(s,90,S),"--qc-primary-50":t(s,50,18),"--qc-primary-100":t(s,55,22),"--qc-primary-200":t(s,55,26),"--qc-primary-300":t(s,60,30),"--qc-primary-400":t(s,65,38),"--qc-primary-500":t(s,85,l),"--qc-primary-600":t(s,90,S),"--qc-primary-700":t(s,92,J),"--qc-primary-800":t(s,90,L),"--qc-primary-900":t(s,92,Math.min(98,L+8)),"--text-link":t(s,85,se),"--secondary-color":t(s,70,60),"--card-border":t(s,30,25),"--bg-selected":"rgba("+h+", 0.10)","--btn-primary-bg":t(s,85,65),"--btn-primary-border":t(s,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":t(s,80,72),"--btn-primary-hover-border":t(s,80,72),"--btn-primary-active-bg":t(s,75,80),"--btn-primary-active-border":t(s,75,80),"--btn-primary-plain-bg":"rgba("+h+", 0.08)","--btn-primary-plain-border":"rgba("+h+", 0.25)","--btn-primary-plain-color":t(s,85,se),"--btn-primary-plain-hover-bg":"rgba("+h+", 0.15)","--btn-primary-plain-hover-border":t(s,85,65),"--btn-primary-text-color":t(s,85,se),"--gradient-brand":"linear-gradient(135deg, "+t(s,85,I)+" 0%, "+t(s,80,te)+" 100%)","--primary-text":t(s,85,se),"--primary-solid":"var(--btn-primary-bg)","--gradient-panel":"linear-gradient(135deg, "+t(s,60,Math.min(76,o(s,40,12,55,d)+5))+" 0%, "+t(s,55,o(s,40,12,55,d))+" 100%)","--panel-fg":t(s,40,12),"--qc-nav-item-active":t(s,85,j),"--qc-nav-item-active-bg":"rgba("+h+", 0.10)","--qc-nav-item-active-border":t(s,85,65),"--qc-nav-badge-bg":"rgba("+h+", 0.12)","--qc-nav-badge-text":t(s,85,j),"--border-control":t(s,16,b(s,16,D(s,11,11),25,70,!1,3.2)),"--brand-soft-text":t(s,85,b(s,85,D(s,55,26),45,96,!1,4.6)),"--qc-ring":t(s,85,65)}}var n=[],f={mode:"light",hue:45},E=!1;function N(s,S){try{var l=document.querySelector('meta[name="theme-color"]');if(!l)return;var h=S?s["--surface-canvas"]||s["--qc-background"]:s["--btn-primary-bg"]||s["--qc-primary"];h&&l.setAttribute("content",h)}catch{}}function q(){if(!(E||typeof window>"u"||!window.matchMedia)){var s=window.matchMedia("(prefers-color-scheme: dark)"),S=function(){f.mode==="system"&&Y("system",f.hue)};s.addEventListener?s.addEventListener("change",S):s.addListener&&s.addListener(S),E=!0}}function z(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}var R=-1;function B(s){return s=parseInt(s,10),isNaN(s)?45:s<0?R:Math.max(0,Math.min(359,s))}function W(s){return Object.keys(s).forEach(function(S){var l=s[S];if(typeof l=="string"){l.indexOf("hsl(")>=0&&(l=l.replace(/hsl\((\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?)%/g,function(m,P){return"hsl("+P+", 0%"}));var h=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(,\s*[\d.]+)?\)$/.exec(l);if(h){var te=Math.round(.2126*+h[1]+.7152*+h[2]+.0722*+h[3]);l="rgba("+te+", "+te+", "+te+(h[4]||"")+")"}if(/^\d+,\s*\d+,\s*\d+$/.test(l)){var I=l.split(",").map(function(m){return parseInt(m,10)}),_=Math.round(.2126*I[0]+.7152*I[1]+.0722*I[2]);l=_+", "+_+", "+_}s[S]=l}}),s}function U(s,S){var l=D(45,0,S?22:95),h=D(45,0,S?8:98),te=D(45,0,S?11:100),I=S?b(45,0,l,45,96,!1,4.6):b(45,0,l,10,58,!0,4.6),_=D(45,0,S?22:92),m=S?b(45,0,_,45,96,!1,4.6):b(45,0,_,10,58,!0,4.6),P=S?b(45,0,h,45,96,!1,3.2):b(45,0,h,25,70,!0,3.2),y=S?b(45,0,te,25,70,!1,3.2):b(45,0,h,30,80,!0,3.2),j=S?b(45,0,D(45,0,26),45,96,!1,4.6):b(45,0,D(45,0,84),10,58,!0,4.6);s["--brand-soft-text"]="hsl(45, 0%, "+j+"%)";var se="hsl(45, 0%, "+I+"%)";if(s["--primary-text"]=se,s["--text-link"]=se,s["--btn-primary-text-color"]=se,s["--btn-primary-plain-color"]=se,s["--qc-nav-item-active"]="hsl(45, 0%, "+m+"%)",s["--qc-nav-badge-text"]="hsl(45, 0%, "+m+"%)",s["--qc-ring"]="hsl(45, 0%, "+P+"%)",s["--border-control"]="hsl(45, 0%, "+y+"%)",S){var J=b(45,0,D(45,0,8),30,92,!1,4.6),L=Math.min(96,J+16);s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+L+"%) 0%, hsl(45, 0%, "+J+"%) 100%)"}else{var $=b(45,0,C,14,62,!0,4.6),ie=Math.max(12,$-5),me=Math.max(10,$-11);s["--gradient-brand"]="linear-gradient(135deg, hsl(45, 0%, "+ie+"%) 0%, hsl(45, 0%, "+me+"%) 100%)"}var Te=o(45,0,14,0,d);return s["--gradient-panel"]="linear-gradient(135deg, hsl(45, 0%, "+Math.min(74,Te+5)+"%) 0%, hsl(45, 0%, "+Te+"%) 100%)",s["--panel-fg"]="hsl(45, 0%, 14%)",s}function Y(s,S){let l=s||"light",h=S==null||S===""?null:S;if(e[s]){const j=e[s];l=j[0],h==null&&(h=j[1])}l==="system"&&(l=z()?"dark":"light");const te=l==="dark";h=B(h??45);const I=h===R,_=document.documentElement;_.setAttribute("data-theme",te?"dark-pro":"gold"),_.setAttribute("data-theme-mode",te?"dark":"light"),_.setAttribute("data-theme-neutral",I?"true":"false");let m=te?u(I?45:h):T(I?45:h);I&&(m=U(W(m),te));for(var P=Object.keys(m),y=0;y<n.length;y++)P.indexOf(n[y])===-1&&_.style.removeProperty(n[y]);P.forEach(function(j){_.style.setProperty(j,m[j])}),n=P,f.mode=typeof s=="string"&&s?s:"light",f.hue=h,N(m,te);try{localStorage.setItem("quant_theme_mode",te?"dark":"light"),localStorage.setItem("quant_theme_hue",String(h))}catch{}return{mode:te?"dark":"light",hue:h}}function Z(){try{var s=localStorage.getItem("quant_theme_hue");if(s!==null&&s!=="")return B(s)}catch{}var S=typeof window<"u"&&window.__quantModules?window.__quantModules.preferences:null;if(S&&S.getPreference){var l=S.getPreference("theme_hue");if(l!=null&&l!=="")return B(l)}return null}function F(s){var S=Z();return Y(s,S??void 0)}function ee(){const s=localStorage.getItem("quant_theme");if(!s||!e[s]||localStorage.getItem("quant_theme_hue")!==null)return null;const S=e[s];return{mode:S[0],hue:S[1]}}function A(){const s=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let S=s.theme||"system",l=s.theme_hue!=null&&s.theme_hue!==""?s.theme_hue:null;const h=ee();return l==null&&h&&(S=h.mode,l=h.hue),l==null&&(l=45),q(),Y(S,l)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:a,LEGACY_MAP:e,legacyThemes:v,NEUTRAL_HUE:R,generateLightTokens:T,generateDarkTokens:u,migrateLegacyTheme:ee,persistedHue:Z,applyLegacyTheme:F,applyTheme:Y,init:A},typeof queueMicrotask=="function"?queueMicrotask(A):A()})();(function(a,e){typeof De=="object"&&De.exports?De.exports=e():a.QuantI18n=e()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",e=["zh-CN","en","ja","ko","zh-TW"],v={};let t=a,c=null;function d(){return c&&typeof c=="object"&&"value"in c?c.value||a:t}function w(k,C){return e.indexOf(k)===-1?!1:(v[k]=C&&typeof C=="object"?C:{},!0)}function r(k){const C=e.indexOf(k)!==-1?k:a;return t=C,c&&typeof c=="object"&&"value"in c&&(c.value=C),typeof document<"u"&&document.documentElement.setAttribute("lang",C),t}function i(){return d()}function p(k){if(k&&typeof k=="object"&&"value"in k){c=k;const C=e.indexOf(k.value)!==-1?k.value:a;k.value=C,t=C}return t}function o(k,C){const x=d(),b=v[x]||{};let D=k in b?b[k]:null;if(D==null&&x!=="en"){const T=v.en||{};D=k in T?T[k]:null}return D==null&&(D=String(k)),C&&typeof C=="object"&&Object.keys(C).forEach(function(T){D=D.replace(new RegExp("\\{"+T+"\\}","g"),String(C[T]))}),D}const M={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:e,messages:v,registerLocale:w,setLocale:r,getLocale:i,bindLocale:p,t:o};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=M),M});(function(a,e){typeof De=="object"&&De.exports?De.exports=e():a.QuantZhCN=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.ruleScore":"选股评分","detail.notEvaluated":"未评估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时","glossary.title":"术语表","glossary.search":"搜索术语","glossary.definition":"定义","glossary.calc":"计算口径","glossary.empty":"无匹配术语","glossary.cat.macro":"宏观","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技术","glossary.cat.shortterm":"短线","glossary.cat.datasource":"数据源","glossary.cat.product":"产品","glossary.term.merrill_clock":"美林时钟","glossary.term.recovery":"复苏期","glossary.term.overheat":"过热期","glossary.term.stagflation":"滞胀期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五维评分","glossary.term.momentum":"动量策略","glossary.term.reversal":"反转策略","glossary.term.quality":"质量策略","glossary.term.capital_flow":"资金流策略","glossary.term.consensus":"共识榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰减","glossary.term.zscore":"Z-Score","glossary.term.pe":"市盈率(PE)","glossary.term.pb":"市净率(PB)","glossary.term.roe":"净资产收益率(ROE)","glossary.term.market_cap":"总市值","glossary.term.ma":"均线(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"换手率","glossary.term.zt_pool":"涨停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龙虎榜","glossary.term.ladder":"连板","glossary.term.promote_rate":"晋级率","glossary.term.money_effect":"赚钱效应","glossary.term.sentiment_cycle":"情绪周期","glossary.term.sector_flow":"板块资金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源热备","glossary.term.pit":"PIT(时点数据)","glossary.term.survivorship":"幸存者偏差","glossary.term.ai_eval":"AI评估","glossary.term.ai_chat":"智能问股","glossary.term.backtest":"回测","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"样本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"胜率","glossary.term.portfolio":"模拟组合","glossary.term.data_quality":"数据质量分","glossary.term.rbac":"RBAC权限","glossary.term.sector_rotation":"行业轮动","glossary.term.index_enhance":"指数增强","glossary.term.multifactor":"多因子","glossary.term.volatility":"波动率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林带","glossary.term.dragon_head":"龙头股","glossary.term.data_freshness":"数据新鲜度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,e){typeof De=="object"&&De.exports?De.exports=e():a.QuantEn=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.ruleScore":"Rule score","detail.notEvaluated":"Not scored","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration","glossary.title":"Glossary","glossary.search":"Search terms","glossary.definition":"Definition","glossary.calc":"Calculation","glossary.empty":"No matching terms","glossary.cat.macro":"Macro","glossary.cat.strategy":"Strategy","glossary.cat.factor":"Factor","glossary.cat.tech":"Technical","glossary.cat.shortterm":"Short-term","glossary.cat.datasource":"Data Source","glossary.cat.product":"Product","glossary.term.merrill_clock":"Merrill Clock","glossary.term.recovery":"Recovery","glossary.term.overheat":"Overheat","glossary.term.stagflation":"Stagflation","glossary.term.recession":"Recession","glossary.term.merrill_score":"Five-Dimension Score","glossary.term.momentum":"Momentum","glossary.term.reversal":"Reversal","glossary.term.quality":"Quality","glossary.term.capital_flow":"Capital Flow","glossary.term.consensus":"Consensus Board","glossary.term.in_pool":"In Pool","glossary.term.out_pool":"Out of Pool","glossary.term.factor":"Factor","glossary.term.factor_ic":"Factor IC","glossary.term.ic_decay":"IC Decay","glossary.term.zscore":"Z-Score","glossary.term.pe":"P/E Ratio","glossary.term.pb":"P/B Ratio","glossary.term.roe":"ROE","glossary.term.market_cap":"Market Cap","glossary.term.ma":"Moving Average","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"Volume Ratio","glossary.term.turnover":"Turnover Rate","glossary.term.zt_pool":"Limit-Up Pool","glossary.term.zha_ban":"Failed Limit-Up","glossary.term.dt_pool":"Limit-Down Pool","glossary.term.lhb":"Dragon-Tiger List","glossary.term.ladder":"Consecutive Limit-Ups","glossary.term.promote_rate":"Promotion Rate","glossary.term.money_effect":"Money Effect","glossary.term.sentiment_cycle":"Sentiment Cycle","glossary.term.sector_flow":"Sector Flow","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"Triple-Source Failover","glossary.term.pit":"PIT (Point-in-Time)","glossary.term.survivorship":"Survivorship Bias","glossary.term.ai_eval":"AI Evaluation","glossary.term.ai_chat":"AI Stock Chat","glossary.term.backtest":"Backtest","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"Out-of-Sample","glossary.term.sharpe":"Sharpe Ratio","glossary.term.drawdown":"Drawdown","glossary.term.winrate":"Win Rate","glossary.term.portfolio":"Paper Portfolio","glossary.term.data_quality":"Data Quality Grade","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"Sector Rotation","glossary.term.index_enhance":"Index Enhancement","glossary.term.multifactor":"Multi-Factor","glossary.term.volatility":"Volatility","glossary.term.dividend_yield":"Dividend Yield","glossary.term.bollinger":"Bollinger Bands","glossary.term.dragon_head":"Leading Stock","glossary.term.data_freshness":"Data Freshness"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,e){typeof De=="object"&&De.exports?De.exports=e():a.Quantja=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.ruleScore":"選股スコア","detail.notEvaluated":"未評価","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間","glossary.title":"用語集","glossary.search":"用語検索","glossary.definition":"定義","glossary.calc":"計算方法","glossary.empty":"該当する用語がありません","glossary.cat.macro":"マクロ","glossary.cat.strategy":"戦略","glossary.cat.factor":"ファクター","glossary.cat.tech":"テクニカル","glossary.cat.shortterm":"短期","glossary.cat.datasource":"データソース","glossary.cat.product":"プロダクト","glossary.term.merrill_clock":"メリルクロック","glossary.term.recovery":"回復期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"スタグフレーション","glossary.term.recession":"景気後退","glossary.term.merrill_score":"5次元スコア","glossary.term.momentum":"モメンタム","glossary.term.reversal":"リバーサル","glossary.term.quality":"クオリティ","glossary.term.capital_flow":"資金フロー","glossary.term.consensus":"コンセンサス","glossary.term.in_pool":"新規採用","glossary.term.out_pool":"除外","glossary.term.factor":"ファクター","glossary.term.factor_ic":"ファクターIC","glossary.term.ic_decay":"IC減衰","glossary.term.zscore":"Zスコア","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"時価総額","glossary.term.ma":"移動平均","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"出来高倍率","glossary.term.turnover":"回転率","glossary.term.zt_pool":"ストップ高","glossary.term.zha_ban":"ストップ高失敗","glossary.term.dt_pool":"ストップ安","glossary.term.lhb":"竜虎榜","glossary.term.ladder":"連続ストップ高","glossary.term.promote_rate":"昇格率","glossary.term.money_effect":"マネー効果","glossary.term.sentiment_cycle":"センチメントサイクル","glossary.term.sector_flow":"セクターフロー","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"三重冗長","glossary.term.pit":"PIT","glossary.term.survivorship":"サバイバーシップバイアス","glossary.term.ai_eval":"AI評価","glossary.term.ai_chat":"AI株チャット","glossary.term.backtest":"バックテスト","glossary.term.walkforward":"ウォークフォワード","glossary.term.oos":"サンプル外","glossary.term.sharpe":"シャープレシオ","glossary.term.drawdown":"ドローダウン","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬ポートフォリオ","glossary.term.data_quality":"データ品質","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"セクターローテーション","glossary.term.index_enhance":"インデックス強化","glossary.term.multifactor":"マルチファクター","glossary.term.volatility":"ボラティリティ","glossary.term.dividend_yield":"配当利回り","glossary.term.bollinger":"ボリンジャーバンド","glossary.term.dragon_head":"リーダー株","glossary.term.data_freshness":"データ鮮度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",a),a});(function(a,e){typeof De=="object"&&De.exports?De.exports=e():a.Quantko=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.ruleScore":"종목 점수","detail.notEvaluated":"미평가","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간","glossary.title":"용어집","glossary.search":"용어 검색","glossary.definition":"정의","glossary.calc":"계산 방법","glossary.empty":"일치하는 용어가 없습니다","glossary.cat.macro":"거시","glossary.cat.strategy":"전략","glossary.cat.factor":"팩터","glossary.cat.tech":"기술적","glossary.cat.shortterm":"단기","glossary.cat.datasource":"데이터 소스","glossary.cat.product":"제품","glossary.term.merrill_clock":"메릴 클럭","glossary.term.recovery":"회복기","glossary.term.overheat":"과열기","glossary.term.stagflation":"스태그플레이션","glossary.term.recession":"경기 침체","glossary.term.merrill_score":"5차원 점수","glossary.term.momentum":"모멘텀","glossary.term.reversal":"리버설","glossary.term.quality":"퀄리티","glossary.term.capital_flow":"자금 흐름","glossary.term.consensus":"컨센서스","glossary.term.in_pool":"신규 편입","glossary.term.out_pool":"제외","glossary.term.factor":"팩터","glossary.term.factor_ic":"팩터 IC","glossary.term.ic_decay":"IC 감쇠","glossary.term.zscore":"Z-Score","glossary.term.pe":"PER","glossary.term.pb":"PBR","glossary.term.roe":"ROE","glossary.term.market_cap":"시가총액","glossary.term.ma":"이동평균","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"거래량비","glossary.term.turnover":"회전율","glossary.term.zt_pool":"상한가 풀","glossary.term.zha_ban":"상한가 실패","glossary.term.dt_pool":"하한가 풀","glossary.term.lhb":"용호방","glossary.term.ladder":"연속 상한가","glossary.term.promote_rate":"승격률","glossary.term.money_effect":"돈벌이 효과","glossary.term.sentiment_cycle":"심리 사이클","glossary.term.sector_flow":"섹터 자금","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"SXSC","glossary.term.hot_standby":"삼원 이중화","glossary.term.pit":"PIT","glossary.term.survivorship":"생존자 편향","glossary.term.ai_eval":"AI 평가","glossary.term.ai_chat":"AI 주식 채팅","glossary.term.backtest":"백테스트","glossary.term.walkforward":"워크포워드","glossary.term.oos":"샘플 외","glossary.term.sharpe":"샤프 비율","glossary.term.drawdown":"드로다운","glossary.term.winrate":"승률","glossary.term.portfolio":"모의 포트폴리오","glossary.term.data_quality":"데이터 품질","glossary.term.rbac":"RBAC","glossary.term.sector_rotation":"섹터 로테이션","glossary.term.index_enhance":"지수 강화","glossary.term.multifactor":"멀티팩터","glossary.term.volatility":"변동성","glossary.term.dividend_yield":"배당수익률","glossary.term.bollinger":"볼린저 밴드","glossary.term.dragon_head":"리더주","glossary.term.data_freshness":"데이터 신선도"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",a),a});(function(a,e){typeof De=="object"&&De.exports?De.exports=e():a.QuantzhTW=e()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.ruleScore":"選股評分","detail.notEvaluated":"未評估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時","glossary.title":"術語表","glossary.search":"搜尋術語","glossary.definition":"定義","glossary.calc":"計算口徑","glossary.empty":"無相符術語","glossary.cat.macro":"總體","glossary.cat.strategy":"策略","glossary.cat.factor":"因子","glossary.cat.tech":"技術","glossary.cat.shortterm":"短線","glossary.cat.datasource":"資料源","glossary.cat.product":"產品","glossary.term.merrill_clock":"美林時鐘","glossary.term.recovery":"復甦期","glossary.term.overheat":"過熱期","glossary.term.stagflation":"滯脹期","glossary.term.recession":"衰退期","glossary.term.merrill_score":"五維評分","glossary.term.momentum":"動量策略","glossary.term.reversal":"反轉策略","glossary.term.quality":"質量策略","glossary.term.capital_flow":"資金流策略","glossary.term.consensus":"共識榜","glossary.term.in_pool":"入池","glossary.term.out_pool":"出池","glossary.term.factor":"因子","glossary.term.factor_ic":"因子IC","glossary.term.ic_decay":"IC衰減","glossary.term.zscore":"Z-Score","glossary.term.pe":"本益比(PE)","glossary.term.pb":"股價淨值比(PB)","glossary.term.roe":"股東權益報酬率(ROE)","glossary.term.market_cap":"總市值","glossary.term.ma":"均線(MA)","glossary.term.macd":"MACD","glossary.term.rsi":"RSI","glossary.term.kdj":"KDJ","glossary.term.volume_ratio":"量比","glossary.term.turnover":"換手率","glossary.term.zt_pool":"漲停池","glossary.term.zha_ban":"炸板","glossary.term.dt_pool":"跌停池","glossary.term.lhb":"龍虎榜","glossary.term.ladder":"連板","glossary.term.promote_rate":"晉級率","glossary.term.money_effect":"賺錢效應","glossary.term.sentiment_cycle":"情緒週期","glossary.term.sector_flow":"板塊資金流","glossary.term.tushare":"Tushare","glossary.term.akshare":"AKShare","glossary.term.sxsc":"sxsc","glossary.term.hot_standby":"三源熱備","glossary.term.pit":"PIT(時點資料)","glossary.term.survivorship":"倖存者偏差","glossary.term.ai_eval":"AI評估","glossary.term.ai_chat":"智能問股","glossary.term.backtest":"回測","glossary.term.walkforward":"Walk-Forward","glossary.term.oos":"樣本外(OOS)","glossary.term.sharpe":"夏普比率","glossary.term.drawdown":"回撤","glossary.term.winrate":"勝率","glossary.term.portfolio":"模擬組合","glossary.term.data_quality":"資料品質分","glossary.term.rbac":"RBAC權限","glossary.term.sector_rotation":"產業輪動","glossary.term.index_enhance":"指數增強","glossary.term.multifactor":"多因子","glossary.term.volatility":"波動率","glossary.term.dividend_yield":"股息率","glossary.term.bollinger":"布林帶","glossary.term.dragon_head":"龍頭股","glossary.term.data_freshness":"資料新鮮度"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",a),a});(function(a,e){typeof De=="object"&&De.exports?De.exports=e():a.QuantPinyin=e()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},e=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let v=[];function t(x){const b=String(x||"");let D="";for(const T of b){const u=a[T];u?D+=u.charAt(0):/[a-zA-Z0-9]/.test(T)&&(D+=T.toLowerCase())}return D}function c(x){const b=String(x||"");let D="";for(const T of b){const u=a[T];u?D+=u:/[a-zA-Z0-9]/.test(T)&&(D+=T.toLowerCase())}return D}function d(x){return String(x||"").trim().toLowerCase()}function w(x,b){const D=(b.code||"").toLowerCase();return/^\d+$/.test(x)?D.indexOf(x)!==-1:/[\u4e00-\u9fa5]/.test(x)?(b.name||"").toLowerCase().indexOf(x)!==-1:D.indexOf(x)!==-1||(b.initials||t(b.name)).indexOf(x)!==-1||(b.pinyin||c(b.name)).indexOf(x)!==-1}function r(x){const b={},D=[],T=function(u,n,f){!u||b[u]||(b[u]=!0,D.push({code:u,name:n||u,source:f||"core",initials:t(n||u),pinyin:c(n||u)}))};return e.forEach(function(u){T(u.code,u.name,"core")}),(x||[]).forEach(function(u){T(u.code,u.name,"extra")}),D}function i(x,b){const D=d(x);if(!D||!b||!b.length)return[];const T=D.split(/[\s,，、;；]+/).filter(Boolean);return T.length?b.filter(function(u){return T.every(function(n){return w(n,u)})}).slice(0,20).map(function(u){return{code:u.code,name:u.name,source:u.source||"core"}}):[]}function p(x){Array.isArray(x)&&(v=v.concat(x))}function o(){return v.slice()}function M(){return r(v)}function k(x){return i(x,M())}const C={CHAR_PINYIN:a,CORE_STOCKS:e,toPinyinInitials:t,toPinyin:c,normalizeQuery:d,matchToken:w,buildStockIndex:r,searchStocksByQuery:i,registerExtraStocks:p,getExtraStocks:o,getStockIndex:M,searchCoreStocks:k};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=C),C});(function(a,e){typeof De=="object"&&De.exports?De.exports=e():a.QuantPreferences=e()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",e={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},v=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],t={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function c(n){return n=parseInt(n,10),isNaN(n)?!1:n===-1||n>=0&&n<=360}const d={light:"classic-white",dark:"dark-pro"};function w(){if(typeof localStorage>"u")return{};try{const n=localStorage.getItem(a);if(!n)return{};const f=JSON.parse(n);return f&&typeof f=="object"?f:{}}catch{return{}}}function r(n){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(n))}catch{}}function i(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function p(){const n=Object.assign({},e,w()),f={};return v.forEach(function(E){const N=n[E];f[E]=E==="theme_hue"?c(N)?parseInt(N,10):e[E]:t[E].indexOf(N)!==-1?N:e[E]}),f}function o(n){if(v.indexOf(n)!==-1)return p()[n]}function M(n,f){return v.indexOf(n)===-1?!1:n==="theme_hue"?c(f):t[n].indexOf(f)!==-1}function k(n,f){if(!M(n,f))return!1;const E=w();return E[n]=f,r(E),i()&&x({[n]:f}),!0}function C(n){if(!n||typeof n!="object")return!1;const f={};if(Object.keys(n).forEach(function(N){M(N,n[N])&&(f[N]=n[N])}),!Object.keys(f).length)return!1;const E=Object.assign({},w(),f);return r(E),i()&&x(f),!0}function x(n){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:n})}).catch(function(){})}catch{}}async function b(){const n=p();if(!i()||typeof fetch>"u")return n;try{const f=await fetch("/api/user_config/preferences");if(f.ok){const E=await f.json();if(E.success&&E.preferences){const N=E.preferences;v.forEach(function(q){const z=N[q];if(q==="theme_hue"){c(z)&&(n[q]=parseInt(z,10));return}t[q].indexOf(z)!==-1&&(n[q]=z)}),r(n)}}}catch(f){typeof console<"u"&&console.warn&&console.warn("[preferences] 读取服务端偏好失败, 回退本地偏好:",f&&f.message)}return n}function D(n){const f=n||o("info_density")||"comfortable",E=t.info_density.indexOf(f)!==-1?f:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",E),E}function T(n){const f=n||o("theme")||"system";if(f==="system"){let E=!1;return typeof window<"u"&&window.matchMedia&&(E=window.matchMedia("(prefers-color-scheme: dark)").matches),E?"dark":"light"}return f==="dark"||f==="light"?f:"light"}const u={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:e,PREFERENCE_KEYS:v,PREFERENCE_VALUES:t,THEME_MODE_TO_THEME:d,getLocal:p,getPreference:o,isValidValue:M,setPreference:k,setPreferences:C,saveToBackend:x,loadPreferences:b,resolveTheme:T,applyDensity:D};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=u),u});(function(a,e){typeof De=="object"&&De.exports?De.exports=e():a.QuantRecent=e()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function v(){if(typeof localStorage>"u")return[];try{const p=localStorage.getItem(a);if(!p)return[];const o=JSON.parse(p);return Array.isArray(o)?o:[]}catch{return[]}}function t(p){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(p))}catch{}}function c(p,o){if(!p)return!1;let M=v().filter(function(k){return k.code!==p});return M.unshift({code:p,name:(o||"").toString().slice(0,32),ts:Date.now()}),M.length>10&&(M=M.slice(0,10)),t(M),!0}function d(){return v().slice(0,10)}function w(p){t(v().filter(function(o){return o.code!==p}))}function r(){t([])}const i={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:c,getRecentViewed:d,removeRecent:w,clearRecent:r};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=i),i});(function(){const a=typeof Vue<"u"?Vue:{},{ref:e,computed:v,watch:t,onMounted:c,nextTick:d}=a;function w(m,P={}){if(typeof m=="string"&&m.startsWith("/api/")){const y=localStorage.getItem("quant_token");if(y)return{...P,headers:{...P.headers||{},Authorization:"Bearer "+y}}}return P}async function r(m,P={}){const y=w(m,P),j={"Content-Type":"application/json",...y.headers},se=(P.method||"GET").toUpperCase(),J=se+"|"+m,L=async()=>{const $=await fetch(m,{...y,headers:j});if($.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!$.ok){let ie="";try{const me=await $.json();ie=me&&me.detail||""}catch{}throw Object.assign(new Error(ie||"请求失败（HTTP "+$.status+"）"),{status:$.status})}return await $.json()};try{const $=P.noLoading?L:()=>f(L);return se==="GET"&&!P.noDedupe?await D(J,$):await $()}catch($){throw $.message==="登录已过期"?$:(console.error("[apiFetch] "+m+":",$.message),Object.assign($,{_formatted:E($,$.status)}))}}function i(){return new Date().toISOString().split("T")[0]}function p(m){return m?m.split("T")[0]:""}function o(m,P="info",y=3e3){let j=document.querySelector(".toast-container");j||(j=document.createElement("div"),j.className="toast-container",document.body.appendChild(j));const se=document.createElement("div");se.className=`toast toast-${P}`,se.textContent=m,j.appendChild(se),setTimeout(()=>{se.classList.add("leaving"),setTimeout(()=>se.remove(),300)},y)}function M(m,P=300){let y;return function(...j){clearTimeout(y),y=setTimeout(()=>m.apply(this,j),P)}}function k(m,P=300){let y=!1;return function(...j){y||(m.apply(this,j),y=!0,setTimeout(()=>{y=!1},P))}}async function C(m,P=3e3,y=""){const j=new Promise((se,J)=>setTimeout(()=>J(new Error("timeout")),P));try{return await Promise.race([m,j])}catch(se){console.warn(`[timeout] ${y||"task"} failed:`,se.message)}}const x=new Map;function b(){return x.clear(),!0}function D(m,P){if(!m||typeof P!="function")return Promise.reject(new Error("bad dedupe args"));if(x.has(m))return x.get(m);const y=Promise.resolve().then(P).finally(()=>{x.delete(m)});return x.set(m,y),y}let T=0;function u(){return T=0,!0}function n(){return T}async function f(m){T++;try{return await m()}finally{T--}}function E(m,P){if(!m)return"请求失败";if(m&&typeof m=="object"&&m.detail)return String(m.detail);if(typeof m=="string"&&m)return m;if(m&&m.message){const y=String(m.message);return/Failed to fetch|fetch failed|networkerror/i.test(y)?"网络连接失败，请检查网络后重试":y}return P?"请求失败（HTTP "+P+"）":"请求失败"}function N(m,P){if(m===P)return!0;try{return JSON.stringify(m)===JSON.stringify(P)}catch{return!1}}function q(m,P,y){const j=(m||"GET").toUpperCase();let se="";if(y)try{const J={};Object.keys(y).sort().forEach(L=>{J[L]=y[L]}),se=JSON.stringify(J)}catch{se=""}return j+"|"+P+"|"+se}class z{constructor(){this._map=new Map,this._exp=new Map}get(P){const y=this._exp.get(P);if(y!=null){if(Date.now()>y){this.delete(P);return}return this._map.get(P)}}set(P,y,j){return this._map.set(P,y),this._exp.set(P,Date.now()+(j>0?j:-1)),y}delete(P){this._map.delete(P),this._exp.delete(P)}clear(){this._map.clear(),this._exp.clear()}has(P){return this.get(P)!==void 0}get size(){return this._map.size}}function R(m){const P=new z,y=m!=null&&m>0?m:15e3;return{store:P,defaultTtl:y,get:j=>P.get(j),set:(j,se,J)=>P.set(j,se,J??y),delete:j=>P.delete(j),clear:()=>P.clear(),size:()=>P.size}}const B=new Set;async function W(m){const P=m&&m.cache,y=m&&m.key,j=m&&(m.fetchFn||m.fetcher),se=m&&m.ttl;if(!P||!y||typeof j!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(B.has(y))return{ok:!1,changed:!1,skipped:!0,fresh:null};B.add(y);try{const J=P.get(y);let L;try{L=await j()}catch(ie){return m.onError&&m.onError(ie),{ok:!1,changed:!1,fresh:null}}const $=J!==void 0&&!N(J,L);return P.set(y,L,se),m.apply&&m.apply(L,J),J!==void 0&&($?m.onChanged&&m.onChanged(L,J):m.onUnchanged&&m.onUnchanged(L,J)),{ok:!0,changed:$,fresh:L}}finally{B.delete(y)}}const U=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function Y(m,P={}){if(m==null)return"";const y=P&&P.allow||U,j=new Set(y.map($=>String($).toUpperCase()));let se;try{se=new DOMParser().parseFromString(String(m),"text/html")}catch{return String(m).replace(/[<>&]/g,ie=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[ie])}const J=se.body||se;function L($){Array.from($.childNodes).forEach(ie=>{if(ie.nodeType===1){const me=String(ie.tagName).toUpperCase();if(j.has(me))Array.from(ie.attributes).forEach(Te=>{const X=Te.name.toLowerCase(),oe=(Te.value||"").trim().toLowerCase();(X.startsWith("on")||(X==="href"||X==="src"||X==="xlink:href")&&oe.startsWith("javascript:")||X==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(oe))&&ie.removeAttribute(Te.name),X==="href"&&!/^(https?:|mailto:|#|\/)/.test(oe)&&ie.removeAttribute("href")}),me==="A"&&ie.setAttribute("rel","noopener noreferrer"),L(ie);else{const Te=ie.parentNode;for(;ie.firstChild;)Te.insertBefore(ie.firstChild,ie);Te.removeChild(ie)}}else if(ie.nodeType!==3){if(ie.nodeType===8)ie.parentNode&&ie.parentNode.removeChild(ie);else if(ie.nodeType===4){const me=se.createTextNode(ie.nodeValue||"");ie.parentNode&&ie.parentNode.replaceChild(me,ie)}}})}return L(J),J.innerHTML}const Z="/api/openapi",F="/api/market/ws/quotes",ee=1,A=2.5,s="数据不可达",S="实时不可用，不刷新";function l(){const m=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",P=typeof location<"u"?location.host:"localhost:8001";return m+"//"+P+F}function h(m,P){if(!m)return null;const y=P||{riseSpeed:ee,volumeRatio:A},j=y.riseSpeed!=null?y.riseSpeed:ee,se=y.volumeRatio!=null?y.volumeRatio:A,J=parseFloat(m.rise_speed);if(!isNaN(J)&&Math.abs(J)>j)return J>0?"涨速预警":"跌速预警";const L=parseFloat(m.volume_ratio);return!isNaN(L)&&L>se?"放量预警":null}function te(m){const P=Number(m);return m==null||isNaN(P)?null:P}const _={apiFetch:r,withAuthHeaders:w,getToday:i,formatDate:p,withTimeout:C,showToast:o,debounce:M,throttle:k,resetInFlight:b,dedupeRequest:D,resetLoading:u,loadingCount:n,withLoading:f,formatApiError:E,jsonEquals:N,makeCacheKey:q,CacheStore:z,createTtlCache:R,silentRefresh:W,sanitizeHtml:Y,OPENAPI_ROUTE_BASE:Z,REALTIME_WS_PATH:F,WARN_RISE_SPEED_THRESHOLD:ee,WARN_VOLUME_RATIO_THRESHOLD:A,REALTIME_DEGRADED_TEXT:s,REALTIME_FALLBACK_TEXT:S,buildRealtimeWsUrl:l,checkQuoteWarning:h,quoteFmt:{price:function(m){const P=te(m);return P===null?"--":P.toFixed(2)},pct:function(m){const P=te(m);return P===null?"--":(P>0?"+":"")+P.toFixed(2)+"%"},num:function(m){const P=te(m);return P===null?"--":P.toFixed(2)},color:function(m){const P=m?m.change_pct:null,y=te(P);return y===null?"":y>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=_),typeof De<"u"&&De.exports&&(De.exports=_)})();(function(a,e){typeof De=="object"&&De.exports?De.exports=e():a.QuantTabsCore=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(M,k){return M+"/"+k}function v(M,k,C,x){var b=M[k]||[],D=b.findIndex(function(n){return n.subPage===C});if(D!==-1)return{groups:M,activeKey:e(k,C)};var T=b.concat([{subPage:C,title:x}]);T.length>a&&(T=c(T));var u=Object.assign({},M,t({},k,T));return{groups:u,activeKey:e(k,C)}}function t(M,k,C){return M[k]=C,M}function c(M){if(M.length<=a)return M;var k=M.length>1?1:0;return M.filter(function(C,x){return x!==k})}function d(M,k,C,x){var b=M[k]||[],D=b.findIndex(function(f){return f.subPage===C});if(D===-1)return{groups:M,nextActive:null};var T=b.filter(function(f){return f.subPage!==C}),u=Object.assign({},M,t({},k,T)),n=null;return C===x&&(T[D]?n=T[D].subPage:T[D-1]?n=T[D-1].subPage:n=null),{groups:u,nextActive:n}}function w(M){return M&&M.length?M[0]:""}function r(M,k){return M[k]||[]}function i(M,k,C){var x=M[k]||[],b=x.filter(function(T){return T.subPage===C}),D=Object.assign({},M,t({},k,b));return{groups:D,activeKey:b.length?e(k,b[0].subPage):null}}function p(M,k){var C=Object.assign({},M,t({},k,[]));return{groups:C,activeKey:null}}function o(M,k,C,x){var b=(M[k]||[]).slice();if(C<0||C>=b.length)return{groups:M};var D=b.splice(C,1)[0];return b.splice(Math.max(0,Math.min(x,b.length)),0,D),{groups:Object.assign({},M,t({},k,b))}}return{MAX_TABS:a,openTab:v,closeTab:d,getDefaultTab:w,tabsOf:r,evictOldest:c,closeOthers:i,closeAll:p,reorder:o,keyOf:e}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var pn=typeof De=="object"&&De.exports?De.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;pn&&(window.__quantModules.tabsCore=pn)}(function(a,e){typeof De=="object"&&De.exports?De.exports=e():a.QuantNavModeCore=e()})(typeof self<"u"?self:void 0,function(){var a=["subnav","tree","toptab"],e="toptab",v="nav_mode";function t(o){return a.indexOf(o)!==-1?o:e}function c(o){return t(o)==="subnav"}function d(o){return t(o)==="tree"}function w(o){return t(o)==="toptab"}function r(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function i(){var o=r(),M=e;if(o)try{M=t(o.getItem(v))}catch{}return{navMode:M}}function p(o){var M=r();if(!(!M||!o))try{o.navMode!==void 0&&M.setItem(v,t(o.navMode))}catch{}}return{NAV_MODES:a,DEFAULT_NAV_MODE:e,normalizeNavMode:t,subnavVisible:c,treeChildrenVisible:d,topTabsVisible:w,readPrefs:i,writePrefs:p}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var gn=typeof De=="object"&&De.exports?De.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;gn&&(window.__quantModules.navModeCore=gn)}(function(){function e(l,h){if(!Array.isArray(l)||l.length<=h)return l;const te=[],I=l.length/h*2;for(let _=0;_<l.length;_+=I){const m=Math.floor(_),P=Math.min(l.length,Math.ceil(_+I));let y=1/0,j=-1,se=-1/0,J=-1;for(let L=m;L<P;L++){const $=l[L];if(!$)continue;const ie=$[3]!=null?Number($[3]):1/0,me=$[4]!=null?Number($[4]):-1/0;ie<y&&(y=ie,j=L),me>se&&(se=me,J=L)}j>=0&&te.push(l[j]),J>=0&&J!==j&&te.push(l[J])}return te}let v=null;function t(){return typeof echarts<"u"?Promise.resolve():(v||(v=new Promise(function(l,h){const te=document.createElement("script");te.src="/static/lib/echarts.min.js",te.async=!0,te.onload=function(){typeof echarts<"u"?l():h(new Error("echarts 加载后未定义"))},te.onerror=function(){h(new Error("echarts.min.js 加载失败"))},document.head.appendChild(te)})),v)}function c(){const l=getComputedStyle(document.documentElement);return{primary:l.getPropertyValue("--primary-color").trim()||"#2563eb",up:l.getPropertyValue("--color-up").trim()||"#43e97b",down:l.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:l.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:l.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const d=l=>{try{return typeof getComputedStyle!="function"||typeof document>"u"?"":(getComputedStyle(document.documentElement).getPropertyValue(l)||"").trim()}catch{return""}};function w(){return{up:d("--color-up")||"#E63946",down:d("--color-down")||"#2E7D32",neutral:d("--color-neutral")||"#43a047",accent:d("--color-accent")||"#F59E0B",risk:d("--color-danger")||"#C62828",warn:d("--color-warning")||"#FF9800",success:d("--color-success")||"#4CAF50",primary:d("--qc-primary-600")||"#b8922a",grid:d("--chart-split")||"#e2e8f0",axis:d("--chart-axis")||"#cbd5e1",bg:d("--chart-bg")||"transparent",series:[d("--qc-primary-600")||"#b8922a",d("--qc-primary-500")||"#c49b2e",d("--qc-primary-700")||"#8f6f1f",d("--qc-primary-400")||"#d4b352",d("--color-up")||"#E63946",d("--color-down")||"#2E7D32",d("--color-accent")||"#F59E0B",d("--qc-neutral-400")||"#b8ae9f"]}}function r(l,h,te,I=!1,_=!1){if(!h||h.length===0)return;h.length>2e3&&(h=e(h,2e3));const m=h.map(ne=>typeof ne[0]=="string"&&ne[0].indexOf("-")>=0?ne[0]:ne[0].slice(0,4)+"-"+ne[0].slice(4,6)+"-"+ne[0].slice(6,8)),P=c(),y={ma5:d("--color-accent")||"#F59E0B",ma10:d("--color-primary")||"#3B82F6",ma20:d("--color-warning")||"#8B5CF6",ma60:d("--color-success")||"#10B981"},j=h.map(ne=>[ne[1],ne[2],ne[3],ne[4]]),se=h.map(ne=>ne[5]),J=h.map(ne=>ne[6]),L=h.map(ne=>ne[7]),$=h.map(ne=>ne[8]),ie=h.map(ne=>ne[9]),me=h.map(ne=>ne[10]),X=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",oe=P.borderLight,Pe={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:P.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:X,borderColor:oe,textStyle:{color:P.textSecondary,fontSize:12},formatter:function(ne){if(!ne||!ne.length)return"";const ge=ne[0].dataIndex,Me=h[ge];if(!Me)return"";const ce=l.getOption(),he=ce.legend&&ce.legend[0]&&ce.legend[0].selected||{},xe=ze=>he[ze]!==!1,le=ze=>ze==null||isNaN(ze)?"--":Number(ze).toFixed(2),ae=ze=>ze==null||isNaN(ze)?"--":(Number(ze)/1e4).toFixed(2)+"万手",ve=['<div style="font-weight:600;color:'+P.textSecondary+';">'+m[ge]+"</div>"];return ve.push("开: "+le(Me[1])+"　收: "+le(Me[2])),ve.push("低: "+le(Me[3])+"　高: "+le(Me[4])),ve.push("成交量: "+ae(Me[5])),Me[6]!=null&&xe("MA5")&&ve.push("MA5: "+le(Me[6])),Me[7]!=null&&xe("MA10")&&ve.push("MA10: "+le(Me[7])),Me[8]!=null&&xe("MA20")&&ve.push("MA20: "+le(Me[8])),Me[9]!=null&&xe("MA60")&&ve.push("MA60: "+le(Me[9])),Me[10]!=null&&ve.push("VOL_MA5: "+ae(Me[10])),ve.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:_?0:8,textStyle:{color:P.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:_?30:40,height:_?"48%":"52%"},{left:56,right:16,top:_?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:m,boundaryGap:!0,axisLine:{lineStyle:{color:oe}},axisLabel:{color:P.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:m,axisLabel:{show:!1},axisLine:{lineStyle:{color:oe}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:oe}},axisLabel:{color:P.textSecondary,fontSize:11,formatter:function(ne){const ge=Math.round(ne*100)/100;return ge%1===0?String(Math.round(ge)):ge.toFixed(2)}},splitLine:{lineStyle:{color:oe,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:oe}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,h.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:oe,textStyle:{color:P.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:j,itemStyle:{color:P.up,color0:P.down,borderColor:P.up,borderColor0:P.down}},{name:"MA5",type:"line",data:J,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:y.ma5}},{name:"MA10",type:"line",data:L,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:y.ma10}},{name:"MA20",type:"line",data:$,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:y.ma20}},{name:"MA60",type:"line",data:ie,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:y.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:se,itemStyle:{color:function(ne){const ge=ne.dataIndex;return h[ge][1]>=h[ge][2]?P.up:P.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:me,smooth:!0,symbol:"none",lineStyle:{width:1,color:y.ma5,type:"dashed"}}]};l.setOption(Pe,!0)}const i=new Map;function p(l){return i.has(l)||i.set(l,{chart:null,cache:null}),i.get(l)}async function o(l,h,te,I=!1,_={}){await t();const m=p(l);let P=document.getElementById(l);if(!P)for(let y=0;y<16&&(await new Promise(j=>setTimeout(j,50)),P=document.getElementById(l),!P);y++);if(!P)throw new Error("无法找到图表容器: "+l);if(P.offsetWidth<50&&(P.style.minWidth="600px",P.style.minHeight="300px"),!m.chart||m.chart.isDisposed()||m.chart.getDom()!==P){if(m.chart)try{m.chart.dispose()}catch{}m.chart=echarts.init(P),m.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const y=_.onLegend;typeof y=="function"&&m.chart.on("legendselectchanged",j=>{j&&j.selected&&y(j.selected)})}return r(m.chart,h,te,I,!!_.isMobile),m.cache={data:h,period:te,isIndex:I,isMobile:!!_.isMobile},m.chart}function M(l){const h=i.get(l);h&&h.chart&&(h.chart.dispose(),h.chart=null,h.cache=null)}function k(l){const h=i.get(l);h&&h.chart&&h.chart.resize()}function C(l,h){const te=i.get(l),I=te&&te.chart;if(I)if(h<=0)I.dispatchAction({type:"dataZoom",start:0,end:100});else{const P=Math.max(0,(60-h)/60*100);I.dispatchAction({type:"dataZoom",start:Math.round(P),end:100})}}function x(l){var I,_,m;const h=i.get(l);if(!h||!h.chart||!h.cache||h.chart.isDisposed())return;const te=((m=(_=(I=h.chart.getOption())==null?void 0:I.legend)==null?void 0:_[0])==null?void 0:m.selected)||null;r(h.chart,h.cache.data,h.cache.period,h.cache.isIndex,h.cache.isMobile),te&&h.chart.setOption({legend:{selected:te}})}function b(l){const h=i.get(l);return h&&h.chart}const D=new Map;function T(l){return D.has(l)||D.set(l,{chart:null,cache:null}),D.get(l)}function u(l,h,te={}){return t().then(function(){const I=T(l),_=document.getElementById(l);if(!_)throw new Error("无法找到图表容器: "+l);if(_.offsetWidth<50&&(_.style.minWidth="600px",_.style.minHeight="300px"),I.chart&&I.chart.getDom&&I.chart.getDom()!==_){try{I.chart.dispose()}catch{}I.chart=null}I.chart||(I.chart=echarts.init(_),I.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),I.resizeBound||(I.resizeBound=!0,window.addEventListener("resize",function(){I.chart&&!I.chart.isDisposed()&&I.chart.resize()})));const m=typeof h=="function"?h():h;return I.chart.setOption(m,!0),I.cache={buildOption:h,key:te.key||""},I.chart})}function n(l){var _,m,P;const h=D.get(l);if(!h||!h.chart||!h.cache||h.chart.isDisposed())return;const te=((P=(m=(_=h.chart.getOption())==null?void 0:_.legend)==null?void 0:m[0])==null?void 0:P.selected)||null,I=typeof h.cache.buildOption=="function"?h.cache.buildOption():h.cache.buildOption;h.chart.setOption(I,!0),te&&I&&I.legend&&I.legend.selected&&h.chart.setOption({legend:{selected:te}})}function f(l){const h=D.get(l);h&&h.chart&&(h.chart.dispose(),h.chart=null,h.cache=null)}function E(l){const h=D.get(l);h&&h.chart&&h.chart.resize()}const N=new Map;function q(l){return N.has(l)||N.set(l,{chart:null,cache:null}),N.get(l)}function z(l,h,te={}){return t().then(function(){const I=q(l),_=document.getElementById(l);if(!_)return null;if(_.offsetWidth<50&&(_.style.minWidth="600px",_.style.minHeight="300px"),I.chart&&I.chart.getDom&&I.chart.getDom()!==_){try{I.chart.dispose()}catch{}I.chart=null}I.chart||(I.chart=echarts.init(_),I.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),I.resizeBound||(I.resizeBound=!0,window.addEventListener("resize",function(){I.chart&&!I.chart.isDisposed()&&I.chart.resize()})));const m=typeof h=="function"?h():h;return I.chart.setOption(m,!0),I.cache={buildOption:h,key:te.key||""},I.chart})}function R(l){const h=N.get(l);if(!h||!h.chart||!h.cache||h.chart.isDisposed())return;const te=typeof h.cache.buildOption=="function"?h.cache.buildOption():h.cache.buildOption;h.chart.setOption(te,!0)}function B(l){const h=N.get(l);h&&h.chart&&(h.chart.dispose(),h.chart=null,h.cache=null)}function W(l){const h=N.get(l);h&&h.chart&&h.chart.resize()}const U=z,Y=R,Z=B,F=W;function ee(l,h,te,I){I=I||{};const _=I.drawdownColor||d("--state-danger-solid")||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[I.navLabel||"净值",I.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:te||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:I.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:I.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:I.navLabel||"净值",type:"line",data:l||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:I.ddLabel||"回撤",type:"line",yAxisIndex:1,data:h||[],showSymbol:!1,areaStyle:{opacity:.25,color:_},lineStyle:{color:_,type:"solid",width:1.5}}]}}function A(l,h){h=h||{};const te=h.bandColor||d("--state-info-solid")||"#1976d2",I=l&&l.dates||[],_=l&&l.median||[],m=l&&l.q25||[],P=l&&l.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[h.medianLabel||"中位IC",h.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:I,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:h.medianLabel||"中位IC",type:"line",data:_,showSymbol:!1,lineStyle:{width:2,color:te}},{name:h.bandLabel||"25–75分位",type:"line",data:m,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:te,opacity:.12}},{name:"_bandH",type:"line",data:P.map(function(y,j){return y-(m[j]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:te,opacity:.12}}]}}function s(l,h){h=h||{};const te=h.color||d("--color-ai")||"#7c3aed",I=l&&l.dates||[],_=l&&l.value||[],m=l&&l.upper||[],P=l&&l.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[h.valueLabel||"情绪",h.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:I,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:h.valueLabel||"情绪",type:"line",data:_,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:te}},{name:h.bandLabel||"过热/冰点带",type:"line",data:m,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:te,opacity:.1}},{name:"_bandL",type:"line",data:P.map(function(y,j){return(m[j]||0)-y}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:te,opacity:.1}}]}}const S={renderKlineChart:r,renderKlineTo:o,disposeKline:M,resizeKline:k,zoomKline:C,redrawKline:x,getKlineChart:b,renderBacktestTo:u,redrawBacktest:n,disposeBacktest:f,resizeBacktest:E,renderPortfolioTo:z,redrawPortfolio:R,disposePortfolio:B,resizePortfolio:W,renderSimpleChartTo:U,redrawSimpleChart:Y,disposeSimpleChart:Z,resizeSimpleChart:F,buildNavDrawdownOption:ee,buildIcBandOption:A,buildSentimentBandOption:s,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:w,init(){return{renderKlineChart:r,renderKlineTo:o,disposeKline:M,resizeKline:k,zoomKline:C,redrawKline:x,getKlineChart:b,renderBacktestTo:u,redrawBacktest:n,disposeBacktest:f,resizeBacktest:E,renderPortfolioTo:z,redrawPortfolio:R,disposePortfolio:B,resizePortfolio:W,renderSimpleChartTo:U,redrawSimpleChart:Y,disposeSimpleChart:Z,resizeSimpleChart:F,buildNavDrawdownOption:ee,buildIcBandOption:A,buildSentimentBandOption:s,downsampleSeries:e,ensureEcharts:t,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:w}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=S),typeof De<"u"&&De.exports&&(De.exports={downsampleSeries:e,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:ee,buildIcBandOption:A,buildSentimentBandOption:s})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:e,computed:v}=Vue,{configChanged:t,consensus:c}=a,d=e(null),w=e(""),r=e(null),i=e([]),p=e([]),o=e([]),M=e([]),k=e([]),C=e([]),x=e({});function b(we){const ke=k.value.indexOf(we);ke>=0?k.value.splice(ke,1):k.value.push(we)}const D=e("date"),T=e([]),u=e(!1),n=e(!1),f=e("watchlist"),E=e([]),N=e({vendors:[]}),q=e(""),z=e(!1),R=e(!1);function B(we){if(!we)return"";const ke=String(we),Le=ke.length;if(Le<=4)return ke[0]+"*".repeat(Le-1);const Re=Le<=8?2:4;return ke.slice(0,Re)+"*".repeat(Le-Re-Re)+ke.slice(-Re)}async function W(we){let ke;try{ke=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Re=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:ke,target:we})})).json();if(Re.success)return Re.secret;ElementPlus.ElMessage.error(Re.message||"查看失败")}catch(Le){ElementPlus.ElMessage.error("查看失败: "+Le.message)}return null}async function U(we){if(we._revealed){we._revealed=!1,we._masked=B(we.api_key);return}const ke=await W("ai:"+we.vendor_key);ke!==null&&(we.api_key=ke,we._revealed=!0)}async function Y(we){if(we._editing){we._editing=!1,we._revealed=!1,we.api_key&&(we._masked=B(we.api_key));return}we._editing=!0;try{const Le=await(await fetch("/api/ai/models?full=1")).json();if(Le.success){const Re=(Le.data.vendors||[]).find(Ue=>Ue.vendor_key===we.vendor_key);Re&&(we.api_key=Re.api_key||"")}else Le.message&&ElementPlus.ElMessage.error(String(Le.message))}catch(ke){ElementPlus.ElMessage.error("解锁失败: "+ke.message)}}function Z(we){const{_fetching:ke,_testing:Le,_revealed:Re,_masked:Ue,_editing:Ge,...Qe}=we;return Ge||(Qe.api_key=""),Qe.models=(we.models||[]).map(et=>{const{_testing:lt,testResult:ft,...xt}=et;return xt}),Qe}async function F(){var we;try{q.value="";const ke=await fetch("/api/ai/models");if(ke.status===401){q.value="请先登录后再查看模型配置";return}if(!ke.ok){q.value=`服务器错误 (${ke.status})`;return}const Le=await ke.json();Le.success?(E.value=(((we=Le.data)==null?void 0:we.vendors)||[]).map(Re=>({...Re,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:Re.api_key||"",models:(Re.models||[]).map(Ue=>({...Ue,_testing:!1,testResult:void 0}))})),q.value=""):q.value=Le.message||"加载失败"}catch(ke){q.value="网络错误: "+ke.message}}async function ee(){try{const ke=await(await fetch("/api/ai/catalog")).json();ke.success&&ke.data&&(N.value=ke.data)}catch(we){console.warn("AI 厂商目录加载失败",we)}}async function A(){R.value=!0;try{const Le=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:E.value.map(Z)})})).json();Le.success?(E.value.forEach(Re=>{Re._editing=!1,Re._revealed=!1,Re.api_key&&(Re._masked=B(Re.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(Le.message||"保存失败")}catch(we){ElementPlus.ElMessage.error("保存失败: "+we.message)}R.value=!1}async function s(we,ke){ke._testing=!0;try{const Re=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:we.vendor_key,model:ke.name,base_url:we.base_url,api_key:we.api_key,timeout:we.timeout})});ke.testResult=await Re.json()}catch(Le){ke.testResult={success:!1,message:Le.message}}ke._testing=!1}async function S(){z.value=!0;for(const we of E.value)for(const ke of we.models||[])we.api_key?await s(we,ke):ke.testResult={success:!1,message:"未配置 API Key"};z.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function l(we){we._fetching=!0;try{const Re=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:we.vendor_key,base_url:we.base_url,api_key:we.api_key,timeout:we.timeout})})).json();if(Re.success&&Array.isArray(Re.models)){const Ue=new Set((we.models||[]).map(Ge=>Ge.name));for(const Ge of Re.models)Ue.has(Ge)||we.models.push({name:Ge,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${Re.models.length} 个模型`)}else ElementPlus.ElMessage.error(Re.message||"获取模型列表失败")}catch(ke){ElementPlus.ElMessage.error("获取模型列表失败: "+ke.message)}we._fetching=!1}function h(we){const ke=(N.value.vendors||[]).find(Le=>Le.vendor_key===we);if(ke){if(E.value.some(Le=>Le.vendor_key===we)){ElementPlus.ElMessage.warning("该厂商已存在");return}E.value.push({vendor_key:ke.vendor_key,name:ke.name,kind:ke.kind,base_url:ke.base_url,api_key:"",timeout:60,tier:ke.tier||"",website:ke.website||"",locked:!!ke.locked,models:(ke.models||[]).map(Le=>({name:Le,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${ke.name}」，配置 API Key 后保存生效`)}}function te(){E.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function I(we){we.models||(we.models=[]),we.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function _(we,ke){const Le=we.models[ke];if(!(!Le||Le.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(Le.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}we.models.splice(ke,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function m(we){if(we.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(we.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const ke=E.value.indexOf(we);ke>=0&&E.value.splice(ke,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const P=e({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),y=e(!1),j=e(""),se=e(0),J=e(""),L=e(!1),$=e(""),ie=e(!1),me=e(0),Te=e(0),X=e(""),oe=e({}),Pe=e({}),ne=e({}),ge=e({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),Me=e("manual"),ce=v(()=>{const we={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return we[ge.value.provider]||we.custom}),he={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function xe(we){if(we==="manual")return;const ke=he[we];ke&&(ge.value.endpoint=ke.endpoint,ge.value.model=ke.model,t.value=!0)}function le(){if(t.value=!0,ge.value.provider!=="codingplan"&&ge.value.provider!=="custom"){const we=ce.value;we&&(ge.value.endpoint=we.endpoint,ge.value.model=we.model)}else ge.value.provider==="codingplan"&&(ge.value.endpoint||(ge.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),ge.value.model||(ge.value.model="ark-code-latest"))}let ae=null;const ve=8;async function ze(){ae&&(ae.abort(),ae=null);const ke=(c.value||[]).filter(Qe=>Qe.status==="new"||Qe.status==="out").filter(Qe=>!x.value[Qe.code]);if(ke.length===0)return;const Le=new AbortController;ae=Le;let Re=0;const Ue=async()=>{for(;Re<ke.length;){const Qe=ke[Re++];try{const lt=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:Qe.code,stock_name:Qe.name,event_type:Qe.status==="new"?"enter":"exit"}),signal:Le.signal})).json();lt.success&&lt.signal&&(x.value={...x.value,[Qe.code]:lt.signal})}catch(et){if(et.name==="AbortError")return}}},Ge=Array.from({length:Math.min(ve,ke.length)},()=>Ue());await Promise.all(Ge)}function Ae(){ae&&(ae.abort(),ae=null)}let Ve=0;async function nt(we){const ke=++Ve;try{const Re=await(await fetch(`/api/ai/history/last/${encodeURIComponent(we)}`)).json();if(ke!==Ve)return;Re.success&&Re.data&&(d.value=Re.data,w.value=Re.data.evaluate_time,tt(we,Re.data),at(Re.data))}catch{}}async function tt(we,ke){var Le,Re;try{const Ge=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(we)}&limit=2`)).json();if(Ge.success&&Ge.data&&Ge.data.length>=2){const Qe=Ge.data[1],et=((Le=ke.result)==null?void 0:Le.total_score)||0,lt=((Re=Qe.result)==null?void 0:Re.total_score)||0;et>0&&lt>0&&(r.value={prevScore:lt,currScore:et,diff:et-lt})}}catch(Ue){console.warn("[refreshStrategyData] autoPoll failed:",Ue)}}function at(we){var Ue;const ke=((Ue=we.result)==null?void 0:Ue.dimensions)||{},Le=[],Re=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Ge of Re){const Qe=ke[Ge.key];Qe!==void 0&&Le.push({icon:Qe>=Ge.good?"check-circle-2":Qe>=Ge.warn?"alert-triangle":"x-circle",label:`${Ge.label} ${Math.round(Qe)}分`})}i.value=Le}return{aiResult:d,lastEvalTime:w,evalHistoryComparison:r,checklistItems:i,aiHistory:p,selectedHistoryIds:o,expandedDates:M,expandedMonths:k,expandedStocks:C,poolSignals:x,toggleMonthExpand:b,aiHistoryView:D,selectedWatchlistCodes:T,showAutoEvaluateSettings:u,savingConfig:n,autoEvaluateScope:f,aiVendors:E,aiCatalog:N,aiModelsError:q,testingAllModels:z,savingAiModels:R,loadAiVendors:F,loadAiCatalog:ee,saveAiVendors:A,saveAiModels:A,testVendorModel:s,testAllVendorModels:S,fetchVendorModels:l,addVendorFromCatalog:h,addCustomVendor:te,addVendorModel:I,removeVendorModel:_,removeVendor:m,toggleVendorKeyReveal:U,toggleVendorEdit:Y,autoEvaluateConfig:P,aiLoading:y,aiEvalStage:j,aiEvalElapsed:se,aiEvalError:J,showBatchEvaluate:L,batchStocks:$,batchRunning:ie,batchTotal:me,batchCompleted:Te,batchCurrent:X,batchStatuses:oe,batchResults:Pe,batchEvalErrors:ne,aiConfig:ge,selectedPreset:Me,providerInfo:ce,aiPresets:he,applyPreset:xe,onProviderChange:le,fetchPoolSignals:ze,cancelPoolSignals:Ae,loadLastEvaluation:nt}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:e,computed:v,watch:t}=Vue,{configChanged:c,aiConfig:d,aiLoading:w,feishuConfig:r,currentTheme:i,changeTheme:p,autoEvaluateConfig:o,currentUser:M,strategyFilter:k,applyTheme:C,dashboardData:x,lastRefreshTime:b,saveAiModels:D}=a,T=function(le){const ae=window.__quantModules&&window.__quantModules.themes;return ae&&ae.applyLegacyTheme?ae.applyLegacyTheme(le):C(le)},u=e(!1),n=e(!1),f=e(null),E=e(null),N=e(null),q=e(null),z=e({token:"",endpoint:"http://api.tushare.pro",timeout:30}),R=e("disconnected"),B=e({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),W=e({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),U=e(!1),Y=e(null),Z=e(null),F=e("pending"),ee=e("..."),A=e(!1),s=e({api_limit:600}),S=e(!1),l=e(!1);async function h(){try{const ae=await(await fetch("/api/system/rate-limit")).json();ae.success&&(s.value=ae.data)}catch(le){console.warn("loadRateLimit failed:",le)}}async function te(){l.value=!0;try{const ae=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.value)})).json();ae.success?(S.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(ae.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{l.value=!1}}t(()=>[d.value.provider,d.value.apiKey,d.value.endpoint,d.value.model],()=>{c.value=!0},{deep:!0});async function I(){u.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(d.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d.value)})).json()).success?(c.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(le){localStorage.setItem("quant_ai_config",JSON.stringify(d.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",le)}finally{u.value=!1}}async function _(){w.value=!0;try{const ae=await(await fetch("/api/ai/test")).json();ae.success?ElementPlus.ElMessage.success(ae.message||"API连接正常"):ElementPlus.ElMessage.error(ae.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{w.value=!1}}function m(){const le={ai:d.value,feishu:r.value,theme:i.value,export_time:new Date().toISOString()},ae=new Blob([JSON.stringify(le,null,2)],{type:"application/json"}),ve=URL.createObjectURL(ae),ze=document.createElement("a");ze.href=ve,ze.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,ze.click(),URL.revokeObjectURL(ve),ElementPlus.ElMessage.success("配置已导出")}function P(le){const ae=le.target.files[0];if(!ae)return;const ve=new FileReader;ve.onload=async ze=>{try{const Ae=JSON.parse(ze.target.result);Ae.ai&&(d.value={...d.value,...Ae.ai},await I()),Ae.feishu&&(Object.assign(r.value,Ae.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Ae.feishu)})),Ae.theme&&(i.value=Ae.theme,p(Ae.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},ve.readAsText(ae),le.target.value=""}async function y(){u.value=!0;const le=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:z.value,feishu:r.value,ai:d.value,rate_limit:s.value,auto_evaluate:o.value,theme:i.value}})}).then(Ae=>["userConfig",Ae.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(z.value)}).then(Ae=>["tushare",Ae.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:B.value})}).then(Ae=>["datasource",Ae.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r.value)}).then(Ae=>["feishu",Ae.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d.value)}).then(Ae=>["ai",Ae.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s.value)}).then(Ae=>["rateLimit",Ae.ok]),D().then(()=>["aiModels",!0],()=>["aiModels",!1])],ae=await Promise.allSettled(le),ve=ae.filter(Ae=>Ae.status==="fulfilled"&&Ae.value[1]).length,ze=ae.filter(Ae=>Ae.status==="rejected"||Ae.status==="fulfilled"&&!Ae.value[1]).length;S.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(k.value.selected)),localStorage.setItem("quant_strategy_filter_mode",k.value.mode),M.value&&fetch(`/api/users/${M.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:i.value})}).catch(()=>{}),n.value=!1,f.value=new Date().toLocaleString("zh-CN"),u.value=!1,ze>0&&console.error(`[saveAllConfig] ${ve}/${ve+ze} 项保存成功，${ze} 项失败`)}async function j(){try{const ae=await(await fetch("/api/user_config/config")).json();if(ae.success&&ae.config){const ve=ae.config;ve.tushare&&(z.value={...z.value,...ve.tushare}),ve.feishu&&(r.value={...r.value,...ve.feishu}),ve.ai&&(d.value={...d.value,...ve.ai}),ve.rate_limit&&(s.value={...s.value,...ve.rate_limit}),ve.auto_evaluate&&(o.value={...o.value,...ve.auto_evaluate}),ve.theme&&!localStorage.getItem("quant_theme")&&T(ve.theme)}n.value=!1,S.value=!1}catch(le){console.error("[resetAllConfig] 重新加载配置失败:",le),n.value=!1}}async function se(){R.value="testing";try{const ae=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(R.value=ae.success?"connected":"disconnected",ae.success){const ve=ae.data_count?` (获取到 ${ae.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+ve)}else ElementPlus.ElMessage.error(ae.message||"连接失败")}catch{R.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function J(){try{const ae=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();R.value=ae.success?"connected":"disconnected"}catch{R.value="disconnected"}}async function L(){var le;U.value=!0;try{const ve=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ve.success?(Y.value=parseInt(((le=ve.message.match(/\d+/))==null?void 0:le[0])||"0"),ElementPlus.ElMessage.success(ve.message)):ElementPlus.ElMessage.error(ve.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{U.value=!1}}async function $(){try{const ae=await(await fetch("/api/market/tushare/config")).json();ae.success&&ae.config&&(z.value={...z.value,...ae.config})}catch(le){console.warn("loadTushareConfig failed:",le)}}function ie(le){if(!le)return"";const ae=String(le),ve=ae.length;if(ve<=4)return ae[0]+"*".repeat(ve-1);const ze=ve<=8?2:4;return ae.slice(0,ze)+"*".repeat(ve-ze-ze)+ae.slice(-ze)}async function me(le){let ae;try{ae=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const ze=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:ae,target:le})})).json();if(ze.success)return ze.secret;ElementPlus.ElMessage.error(ze.message||"查看失败")}catch(ve){ElementPlus.ElMessage.error("查看失败: "+ve.message)}return null}async function Te(le){const ae=B.value[le];if(!ae)return;if(ae._revealed){ae._revealed=!1,ae._masked=ie(ae.token);return}const ve=await me(le);ve!==null&&(ae.token=ve,ae._revealed=!0)}async function X(le){const ae=B.value[le];if(ae){if(ae._editing){ae._editing=!1,ae._revealed=!1,ae.token&&(ae._masked=ie(ae.token));return}ae._editing=!0;try{const ve=await me(le);if(ve===null){ae._editing=!1;return}ae.token=ve,ae._revealed=!0}catch(ve){ae._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+ve.message)}}}async function oe(){try{const ae=await(await fetch("/api/market/datasource/config")).json();if(ae.success&&ae.config&&ae.config.sources){const ve=ae.config.sources,ze=Ae=>{const Ve={...B.value[Ae],...ve[Ae]||{}};return Ve._editing=!1,Ve._revealed=!1,Ve._masked=Ve.token||"",Ve.token="",Ve};B.value={sxsc_tushare:ze("sxsc_tushare"),tushare:ze("tushare"),akshare:{...B.value.akshare,...ve.akshare||{}}}}try{const ze=await(await fetch("/api/market/datasource/status")).json();if(ze.success&&ze.status)for(const[Ae,Ve]of Object.entries(ze.status))W.value[Ae]=Ve.connected?"connected":"disconnected"}catch{}}catch(le){console.warn("loadDatasourceConfig failed:",le)}}async function Pe(){try{const le={};for(const[ae,ve]of Object.entries(B.value)){const{_revealed:ze,_masked:Ae,_editing:Ve,...nt}=ve;!Ve&&ae!=="akshare"&&(nt.token=""),le[ae]=nt}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:le})}),n.value=!0}catch(le){console.warn("saveDatasourceConfig failed:",le)}}async function ne(le){W.value[le]="testing";try{const ae=B.value[le];ae&&ae._editing&&await Pe();const ze=await(await fetch(`/api/market/datasource/test/${le}`,{method:"POST"})).json();W.value[le]=ze.success?"connected":"disconnected",ze.success?ElementPlus.ElMessage.success(`${le} 连接成功`):ElementPlus.ElMessage.error(`${le}: ${ze.message}`)}catch{W.value[le]="disconnected",ElementPlus.ElMessage.error(`${le} 连接失败`)}}async function ge(){try{const ae=await(await fetch("/api/feishu/config")).json();ae&&typeof ae=="object"&&(r.value={...r.value,...ae},E.value=JSON.parse(JSON.stringify(r.value)))}catch(le){console.warn("loadFeishuConfig failed:",le)}}async function Me(){try{const ae=await(await fetch("/api/ai/config")).json();if(ae.success&&ae.data)d.value={...d.value,...ae.data};else{const ve=localStorage.getItem("quant_ai_config");ve&&(d.value=JSON.parse(ve))}}catch{const ae=localStorage.getItem("quant_ai_config");ae&&(d.value=JSON.parse(ae))}}async function ce(){try{const ae=await(await fetch("/api/user_config/config")).json();if(ae.success&&ae.config){const ve=ae.config;ve.tushare&&(z.value={...z.value,...ve.tushare}),ve.datasource&&ve.datasource.sources&&(B.value={sxsc_tushare:{...B.value.sxsc_tushare,...ve.datasource.sources.sxsc_tushare||{}},tushare:{...B.value.tushare,...ve.datasource.sources.tushare||{}},akshare:{...B.value.akshare,...ve.datasource.sources.akshare||{}}}),ve.feishu&&(r.value={...r.value,...ve.feishu},E.value=JSON.parse(JSON.stringify(r.value))),ve.ai&&(d.value={...d.value,...ve.ai}),ve.rate_limit&&(s.value={...s.value,...ve.rate_limit}),ve.theme&&!localStorage.getItem("quant_theme")&&T(ve.theme),ve.auto_evaluate&&(o.value={...o.value,...ve.auto_evaluate})}}catch(le){console.warn("加载用户配置失败，使用本地缓存",le)}}async function he(){var le,ae,ve,ze;try{const Ve=await(await fetch("/api/dashboard")).json(),nt=Ve.success?Ve.data:Ve;Y.value=((le=nt==null?void 0:nt.stats)==null?void 0:le.total_stocks_covered)||null;const at=await(await fetch("/api/dates")).json();Z.value=((ae=at==null?void 0:at.data)==null?void 0:ae.total)||((ze=(ve=at==null?void 0:at.data)==null?void 0:ve.dates)==null?void 0:ze.length)||null;const ke=await(await fetch("/api/ai/history")).json();F.value="ok"}catch{F.value="pending"}}async function xe(){try{const ae=await(await fetch("/api/dashboard")).json();x.value=ae.success?ae.data:ae,b.value=Date.now()}catch(le){console.error("加载总览数据失败",le)}}return{configSaving:u,configChanged:c,globalConfigDirty:n,lastSavedTime:f,feishuConfigOriginal:E,aiConfigOriginal:N,tushareConfigOriginal:q,tushareConfig:z,tushareStatus:R,datasourceConfig:B,datasourceStatus:W,syncingData:U,stockCount:Y,tradeDateCount:Z,aiStatus:F,appVersion:ee,showImportDialog:A,rateLimitConfig:s,rateLimitDirty:S,rateLimitSaving:l,loadRateLimit:h,saveRateLimit:te,saveAiConfig:I,testAiApi:_,exportConfig:m,importConfig:P,saveAllConfig:y,resetAllConfig:j,testTushareConnection:se,checkTushareConnection:J,syncStockData:L,loadTushareConfig:$,loadDatasourceConfig:oe,saveDatasourceConfig:Pe,testDatasource:ne,toggleDatasourceKeyReveal:Te,toggleDatasourceEdit:X,loadFeishuConfig:ge,loadAiConfig:Me,loadUserConfig:ce,loadSystemStatus:he,loadDashboardData:xe}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:e,computed:v}=Vue,{currentUser:t,applyTheme:c,allMenuDefs:d,loadGroupConfig:w}=a,r=function(ce){const he=window.__quantModules&&window.__quantModules.themes;return he&&he.applyLegacyTheme?he.applyLegacyTheme(ce):c(ce)},i=e([]),p=e(""),o=e(""),M=e("users"),k=e({}),C=e({}),x=v(()=>{let ce=i.value;if(o.value&&(ce=ce.filter(xe=>(xe.group||xe.role)===o.value)),!p.value)return ce;const he=p.value.toLowerCase();return ce.filter(xe=>xe.username.toLowerCase().includes(he))});function b(ce){k.value={...k.value,[ce]:!k.value[ce]}}async function D(ce,he){try{const le=await(await fetch("/api/groups/"+he+"/members/"+ce,{method:"DELETE"})).json();le.success?(await X(),await me()):ElementPlus.ElMessage.error(le.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function T(ce){const he=C.value[ce];if(he)try{const le=await(await fetch("/api/groups/"+ce+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:he})})).json();le.success?(await X(),await me(),C.value={...C.value,[ce]:""}):ElementPlus.ElMessage.error(le.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function u(ce,he){try{const le=await(await fetch("/api/users/"+ce.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:he})})).json();le.success?await X():ElementPlus.ElMessage.error(le.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const n=e(!1),f=e(null),E=e({username:"",password:"",role:"user",theme:"tech-blue"}),N=e(!1),q=e(null),z=e(!1),R=e(!1),B=e({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),W=e({}),U=e(!1),Y=e({group_id:"",name:"",description:""}),Z=e(!1),F=e([]),ee=e(""),A=e(""),s=e({});function S(ce){s.value={...s.value,[ce]:!s.value[ce]}}function l(ce){return!i.value||!i.value.length?0:i.value.filter(he=>(he.group||he.role)===ce).length}function h(ce){const he=(ce==null?void 0:ce.visible_menus)||{};return Object.values(he).filter(Boolean).length}const te=v(()=>Object.keys(ie.value).length);async function I(ce){A.value=ce,R.value=!0,await _(ce)}async function _(ce){try{const xe=await(await fetch("/api/groups/"+ce+"/members")).json();xe.success&&(F.value=xe.members||[])}catch(he){F.value=[],console.error("[loadGroupMembers]",he)}}async function m(){if(!(!ee.value||!A.value)){Z.value=!0;try{const he=await(await fetch("/api/groups/"+A.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:ee.value})})).json();he.success?(await _(A.value),await X(),ee.value=""):ElementPlus.ElMessage.error(he.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{Z.value=!1}}}async function P(ce){try{const xe=await(await fetch("/api/groups/"+A.value+"/members/"+ce,{method:"DELETE"})).json();xe.success?(await _(A.value),await X()):ElementPlus.ElMessage.error(xe.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const y=v(()=>{if(!i.value)return[];const ce=new Set(F.value.map(he=>he.username));return i.value.filter(he=>he.username!=="admin"&&he.username!=="guest"&&!ce.has(he.username))});function j(ce){const he=B.value.visible_menus[ce],xe=d.find(le=>le.key===ce);if(xe)if(he){const le=W.value[ce]||{};xe.subPages.forEach(ae=>{const ve=ce+"."+ae;B.value.visible_sub_pages[ve]=le[ae]!==void 0?le[ae]:!0})}else{const le={};xe.subPages.forEach(ae=>{const ve=ce+"."+ae;le[ae]=B.value.visible_sub_pages[ve],B.value.visible_sub_pages[ve]=!1}),W.value[ce]=le}}function se(ce){q.value=ce;const he=ie.value[ce]||{};B.value={name:he.name||ce,description:he.description||"",visible_menus:{...he.visible_menus||{}},visible_sub_pages:{...he.visible_sub_pages||{}}},W.value={},d.forEach(xe=>{const le={};xe.subPages.forEach(ae=>{le[ae]=B.value.visible_sub_pages[xe.key+"."+ae]}),W.value[xe.key]=le}),z.value=!0}async function J(){Z.value=!0;try{const he=await(await fetch("/api/groups/"+q.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(B.value)})).json();he.success?(z.value=!1,q.value=null,await me(),await w()):ElementPlus.ElMessage.error(he.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{Z.value=!1}}async function L(ce){var he;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((he=ie.value[ce])==null?void 0:he.name)||ce)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const ae=await(await fetch("/api/groups/"+ce,{method:"DELETE"})).json();ae.success?await me():ElementPlus.ElMessage.error(ae.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function $(){if(Y.value.group_id){Z.value=!0;try{const he=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Y.value)})).json();he.success?(U.value=!1,Y.value={group_id:"",name:"",description:""},await me()):ElementPlus.ElMessage.error(he.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{Z.value=!1}}}const ie=e({});async function me(){try{if(!localStorage.getItem("quant_token"))return;const he=await fetch("/api/groups");if(he.ok){const xe=await he.json();ie.value=xe.groups||{}}}catch(ce){console.warn("loadAllGroups:",ce)}}function Te(ce){var he;return((he=ie.value[ce])==null?void 0:he.name)||ce||"--"}async function X(){try{if(!localStorage.getItem("quant_token")){i.value=[];return}const he=await fetch("/api/users");if(he.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),t.value=null;return}const xe=await he.json();i.value=xe.users||[]}catch(ce){i.value=[],console.error("[loadUsers] error:",ce)}}function oe(ce){f.value=ce,E.value={username:ce.username,password:"",role:ce.role,theme:ce.theme||"tech-blue",group:ce.group||ce.role},n.value=!0}async function Pe(){if(E.value.username){N.value=!0;try{const ce=f.value?"PUT":"POST",he=f.value?`/api/users/${E.value.username}`:"/api/users",le=await(await fetch(he,{method:ce,headers:{"Content-Type":"application/json"},body:JSON.stringify(E.value)})).json();if(le.success){if(ElementPlus.ElMessage.success("保存成功"),t.value&&E.value.username===t.value.username){const ae=E.value.theme;ae&&ae!==t.value.theme&&(t.value.theme=ae,localStorage.setItem("quant_user",JSON.stringify(t.value)),r(ae))}n.value=!1,f.value=null,await X()}else ElementPlus.ElMessage.error(le.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{N.value=!1}}}async function ne(ce){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${ce}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await X())}catch(he){console.error("[deleteUser]",he)}}async function ge(ce){try{const xe=await(await fetch(`/api/users/${ce.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:ce.enabled})})).json();xe.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(xe.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function Me(ce){try{const{value:he}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${ce.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(he){const le=await(await fetch(`/api/users/${ce.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:he})})).json();le.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(le.message||"重置失败")}}catch{}}return{userList:i,userSearch:p,groupFilter:o,userPageTab:M,expandedGroups:k,addMemberGroupMap:C,filteredUsers:x,toggleGroupExpand:b,removeMemberFromGroupInline:D,addMemberToGroupInline:T,changeUserGroup:u,showAddUser:n,editingUser:f,userForm:E,savingUser:N,editingGroup:q,menuConfigDialog:z,memberDialog:R,groupEditForm:B,subPageCache:W,showAddGroup:U,addGroupForm:Y,savingGroup:Z,groupMembers:F,addMemberUsername:ee,selectedMemberGroup:A,subPageSectionExpanded:s,toggleSubPageSection:S,getGroupMemberCount:l,getMenuEnabledCount:h,groupCount:te,openMemberManager:I,loadGroupMembers:_,addMemberToGroup:m,removeMemberFromGroup:P,availableUsersForGroup:y,onParentToggle:j,openMenuConfig:se,saveMenuConfig:J,deleteGroupConfig:L,createGroup:$,allGroups:ie,getGroupName:Te,loadAllGroups:me,loadUsers:X,editUser:oe,saveUser:Pe,deleteUser:ne,toggleUserEnabled:ge,resetUserPassword:Me}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:e,computed:v}=Vue,{stockKlineLoaded:t,stockDetailVisible:c,stockDetailTab:d,stockDetail:w,disposeStockKline:r}=a,i=e([]),p=e(!1),o=e(!1),M=e("date"),k=e([]),C=e([]),x=e([]),b=e([]),D=v(()=>{var m,P;const _=[];for(const y of i.value){if(!y||y.id==null)continue;const j=y.stock_name||y.stock_code||"",se=Array.isArray(y.messages)?y.messages:[];_.push({id:y.id,stock_code:y.stock_code,stock_name:j,first_msg:y.first_msg||((P=(m=se[0])==null?void 0:m.content)==null?void 0:P.substring(0,50))||"",msg_count:y.msg_count||se.length||0,created_at:y.created_at,date:(y.created_at||"").substring(0,10),month:(y.created_at||"").substring(0,7),messages:se})}return _}),T=v(()=>{const _={};for(const P of D.value){const y=P.date||"未知";_[y]||(_[y]=[]),_[y].push(P)}const m={};return Object.keys(_).sort((P,y)=>y.localeCompare(P)).forEach(P=>m[P]=_[P]),m}),u=v(()=>{const _={};for(const P of D.value){const y=P.month||"未知";_[y]||(_[y]=[]),_[y].push(P)}const m={};return Object.keys(_).sort((P,y)=>y.localeCompare(P)).forEach(P=>m[P]=_[P]),m}),n=v(()=>{const _={};for(const m of D.value){const P=`${m.stock_name}(${m.stock_code})`;_[P]||(_[P]=[]),_[P].push(m)}return _});function f(_){const m=k.value.indexOf(_);m>=0?k.value.splice(m,1):k.value.push(_)}function E(_){const m=T.value[_]||[];if(m.every(y=>k.value.includes(y.id)))k.value=k.value.filter(y=>!m.some(j=>j.id===y));else for(const y of m)k.value.includes(y.id)||k.value.push(y.id)}function N(_){const m=u.value[_]||[];if(m.every(y=>k.value.includes(y.id)))k.value=k.value.filter(y=>!m.some(j=>j.id===y));else for(const y of m)k.value.includes(y.id)||k.value.push(y.id)}function q(_){const m=n.value[_]||[];if(m.every(y=>k.value.includes(y.id)))k.value=k.value.filter(y=>!m.some(j=>j.id===y));else for(const y of m)k.value.includes(y.id)||k.value.push(y.id)}function z(_){const m=C.value.indexOf(_);m>=0?C.value.splice(m,1):C.value.push(_)}function R(_){const m=x.value.indexOf(_);m>=0?x.value.splice(m,1):x.value.push(_)}function B(_){const m=b.value.indexOf(_);m>=0?b.value.splice(m,1):b.value.push(_)}function W(){k.value.length===D.value.length?k.value=[]:k.value=D.value.map(_=>_.id)}async function U(){if(k.value.length){try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${k.value.length} 段对话吗？此操作不可恢复。`,"删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}for(const _ of[...k.value])await te(_);k.value=[]}}const Y={};async function Z(_){w.value={stock:_.stock_code,name:_.stock_name},c.value=!0,d.value="chat",t.value=!1,r(),A.value=!0,s.value="",ee.value=[];try{let m=Y[_.id];if(!m){const P=await fetch("/api/ai/chat/history/"+_.id);if(!P.ok)throw new Error("load history failed");m=(await P.json()).messages||[],Y[_.id]=m}ee.value=m.map(P=>({role:P.role,content:P.content}))}catch{s.value="历史消息加载失败，请重试"}finally{A.value=!1}}const F=e(""),ee=e([]),A=e(!1),s=e("");async function S(){var P;const _=F.value.trim();if(!_||A.value)return;s.value="",ee.value.push({role:"user",content:_}),F.value="",A.value=!0;const m=ee.value.length;ee.value.push({role:"assistant",content:""});try{const se=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((P=w.value)==null?void 0:P.stock)||"",message:_})})).body.getReader(),J=new TextDecoder;let L="";for(;;){const{done:$,value:ie}=await se.read();if($)break;L+=J.decode(ie,{stream:!0});const me=L.split(`
`);L=me.pop()||"";for(const Te of me)if(Te.startsWith("data: "))try{const X=JSON.parse(Te.slice(6));X.token?ee.value[m].content+=X.token:X.done?console.log("Stream done:",X.session_id):X.error&&(s.value=X.error)}catch(X){console.warn("SSE parse error:",X)}}}catch(y){ee.value[m].content||(ee.value[m].content="网络错误: "+y.message)}A.value=!1}async function l(_){var P;s.value="",A.value=!0;const m={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};ee.value.push({role:"user",content:m[_]||m.comprehensive});try{const j=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((P=w.value)==null?void 0:P.stock)||"",mode:_})});if(j.ok){const se=await j.json();ee.value.push({role:"assistant",content:se.reply||"无回复"})}}catch(y){s.value="网络错误: "+y.message}A.value=!1}async function h(){p.value=!0,o.value=!1;try{const _=await fetch("/api/ai/chat/history?view=date");if(_.ok){const m=await _.json(),P=[];for(const y of m)for(const j of y.items||[])P.push(j);i.value=P}else o.value=!0}catch(_){console.error(_),o.value=!0}finally{p.value=!1}}async function te(_){try{await fetch("/api/ai/chat/history/"+_,{method:"DELETE"}),i.value=i.value.filter(m=>m.id!==_)}catch(m){console.error("deleteChatSession:",m)}}function I(_){if(!_)return"";const m=String(_).split(`
`),P=[],y=[];let j=0;for(;j<m.length;){if(/^\s*\|.*\|\s*$/.test(m[j])){let J=j;const L=[];for(;J<m.length&&/^\s*\|.*\|\s*$/.test(m[J]);)L.push(m[J]),J++;const $=Te=>Te.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map(X=>X.trim()),ie=L.map($);if(ie.length>1&&ie[1].every(Te=>/^:?-{3,}:?$/.test(Te))){const Te=Math.max(...ie.map(ne=>ne.length)),X=ie[0].slice(0,Te),oe=ie.slice(2);let Pe="<table>";oe.length?(Pe+="<thead><tr>"+X.map(ne=>"<th>"+ne+"</th>").join("")+"</tr></thead>",Pe+="<tbody>"+oe.map(ne=>"<tr>"+ne.slice(0,Te).map(ge=>"<td>"+ge+"</td>").join("")+"</tr>").join("")+"</tbody>"):Pe+="<tbody><tr>"+X.map(ne=>"<td>"+ne+"</td>").join("")+"</tr></tbody>",Pe+="</table>",P.push(Pe),y.push("\0T"+(P.length-1)+"\0"),j=J;continue}for(;j<J;)y.push(m[j]),j++;continue}y.push(m[j]),j++}let se=y.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return P.forEach((J,L)=>{se=se.split("\0T"+L+"\0").join(J)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(se=window.__quantModules.core.sanitizeHtml(se)),se}return{chatSessions:i,chatHistoryView:M,selectedChatIds:k,expandedChatDates:C,expandedChatMonths:x,expandedChatStocks:b,chatHistoryLoading:p,chatHistoryError:o,allChatSessionsFlat:D,chatGroupedByDate:T,chatGroupedByMonth:u,chatGroupedByStock:n,toggleSelectChat:f,toggleSelectChatDate:E,toggleSelectChatMonth:N,toggleSelectChatStock:q,toggleChatDateExpand:z,toggleChatMonthExpand:R,toggleChatStockExpand:B,selectAllChatSessions:W,deleteSelectedChatSessions:U,viewChatSession:Z,loadChatHistory:h,deleteChatSession:te,renderMarkdown:I,stockChatInput:F,stockChatMessages:ee,stockChatLoading:A,stockChatError:s,askStockSend:S,askStockQuick:l}}}})();(function(a,e){typeof De=="object"&&De.exports?De.exports=e():a.QuantUndoCore=e()})(typeof self<"u"?self:void 0,function(){function a(){var e={},v=0;function t(r,i,p){if(typeof r!="function")return"";var o="undo-"+ ++v,M={fn:r,label:i||"",timer:null,active:!0};return e[o]=M,p&&p>0&&(M.timer=setTimeout(function(){d(o)},p)),o}function c(r){var i=e[r];if(!i||!i.active)return!1;i.timer&&clearTimeout(i.timer),delete e[r],i.active=!1;try{i.fn()}catch{}return!0}function d(r){var i=e[r];i&&(i.timer&&clearTimeout(i.timer),delete e[r],i.active=!1)}function w(){var r=0;for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&r++;return r}return{register:t,undo:c,remove:d,activeCount:w}}return{createUndoStack:a}});(function(a,e){typeof De=="object"&&De.exports?De.exports=e():a.QuantFormMemory=e()})(typeof self<"u"?self:void 0,function(){function a(d,w,r){return"qc_fm_"+(d||"guest")+"_"+w+"_v"+(r||1)}function e(){return typeof localStorage<"u"&&localStorage?localStorage:null}function v(d,w,r,i){var p=e();if(!p||!d||w===void 0||w===null)return!1;try{return p.setItem(a(r,d,i),JSON.stringify(w)),!0}catch{return!1}}function t(d,w,r){var i=e();if(!i||!d)return null;try{var p=i.getItem(a(w,d,r));return p?JSON.parse(p):null}catch{return null}}function c(d,w,r){var i=e();if(!(!i||!d))try{i.removeItem(a(w,d,r))}catch{}}return{saveForm:v,loadForm:t,clearForm:c}});(function(a,e){typeof De=="object"&&De.exports?De.exports=e():a.QuantSessionRestore=e()})(typeof self<"u"?self:void 0,function(){var a="qc_session_restore";function e(){return typeof sessionStorage<"u"&&sessionStorage?sessionStorage:null}function v(d){var w=e();if(!w||!d)return!1;try{return w.setItem(a,JSON.stringify(d)),!0}catch{return!1}}function t(){var d=e();if(!d)return null;try{var w=d.getItem(a);return w?JSON.parse(w):null}catch{return null}}function c(){var d=e();if(d)try{d.removeItem(a)}catch{}}return{save:v,restore:t,clear:c,KEY:a}});(function(){if(typeof window>"u")return;let a=null;function e(){try{return!!localStorage.getItem("qc_install_dismissed")}catch{return!1}}function v(){try{localStorage.setItem("qc_install_dismissed","1")}catch{}}function t(){if(!document.getElementById("qc-install-bar")){var c=document.createElement("div");c.id="qc-install-bar",c.className="qc-install-bar",c.setAttribute("role","status");var d=document.createElement("span");d.textContent="安装「量化日历」到桌面，随时查看行情与评估";var w=document.createElement("span");w.className="qc-install-actions";var r=document.createElement("button");r.className="qc-install-btn",r.type="button",r.textContent="安装";var i=document.createElement("button");i.className="qc-install-close",i.type="button",i.setAttribute("aria-label","关闭"),i.textContent="×",w.appendChild(r),w.appendChild(i),c.appendChild(d),c.appendChild(w),document.body.appendChild(c),r.addEventListener("click",function(){a&&(a.prompt(),a=null),c.remove()}),i.addEventListener("click",function(){v(),c.remove()})}}window.addEventListener("beforeinstallprompt",function(c){c.preventDefault(),a=c,e()||t()}),window.addEventListener("appinstalled",function(){a=null;var c=document.getElementById("qc-install-bar");c&&c.remove()})})();(function(a,e){typeof De=="object"&&De.exports?De.exports=e():a.QuantBatchAdd=e()})(typeof self<"u"?self:void 0,function(){function a(v){var t=[];return(v||[]).forEach(function(c){if(c){var d=typeof c=="string"?c:c.code||"",w=typeof c=="object"&&c.name?String(c.name):"";d&&t.push(w&&w!==d?d+" "+w:d)}}),t.join(`
`)}function e(v){if(!v||v.success===!1)return{added:0,existed:0,invalid:0,total:0,failed:0,message:"批量加入失败"};var t=v.added||0,c=v.existed||0,d=v.invalid||0,w=v.total||0;return{added:t,existed:c,invalid:d,total:w,failed:d,message:"已加入 "+t+" 只"+(c?"，"+c+" 只已存在":"")+(d?"，"+d+" 行无效":"")}}return{buildImportText:a,summarize:e}});(function(a,e){typeof De=="object"&&De.exports?De.exports=e():a.QuantContextMenu=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(d,w,r,i,p,o,M){var k=M??a,C=d,x=w;return C+r>p-k&&(C=Math.max(k,p-k-r)),x+i>o-k&&(x=Math.max(k,o-k-i)),{left:Math.round(C),top:Math.round(x)}}var v=[{key:"detail",label:"查看详情"},{key:"add-watch",label:"加入自选"},{key:"copy",label:"复制代码"},{key:"export",label:"导出"},{key:"delete",label:"删除"}];function t(){return v.map(function(d){return{key:d.key,label:d.label}})}function c(d,w,r){var i=r??500;return!d||!w?!1:w-d>=i}return{positionMenu:e,getActions:t,isLongPress:c}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,onMounted:e,onBeforeUnmount:v}=Vue,t=window.QuantContextMenu;window.__quantComponents=window.__quantComponents||{};function c(d){let w=d;for(;w&&w!==document.body;){if(w.hasAttribute&&w.hasAttribute("data-ctx-code"))return w;w=w.parentElement}return null}window.__quantComponents.ContextMenu={name:"qc-context-menu",template:`
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
    `,setup(){const d=a(!1),w=a({left:0,top:0}),r=a(t?t.getActions():[]),i=a({});function p(){d.value=!1}function o(n,f,E){if(i.value=E||{},t){const N=window.innerWidth||document.documentElement.clientWidth,q=window.innerHeight||document.documentElement.clientHeight,z=180,R=r.value.length*32+12;w.value=t.positionMenu(n,f,z,R,N,q)}else w.value={left:n,top:f};d.value=!0}function M(n){p(),window.dispatchEvent(new CustomEvent("qc:context-action",{detail:{action:n.key,payload:i.value}}))}function k(n){const f=c(n.target);f&&(n.preventDefault(),o(n.clientX,n.clientY,{code:f.getAttribute("data-ctx-code")||"",name:f.getAttribute("data-ctx-name")||"",context:f.getAttribute("data-ctx-context")||""}))}let C=null,x=0;function b(n){const f=c(n.target);f&&(x=Date.now(),C=setTimeout(function(){if(t&&t.isLongPress(x,Date.now(),500)){navigator.vibrate&&navigator.vibrate(10);const E=n.touches&&n.touches[0];o(E?E.clientX:0,E?E.clientY:0,{code:f.getAttribute("data-ctx-code")||"",name:f.getAttribute("data-ctx-name")||"",context:f.getAttribute("data-ctx-context")||""})}},520))}function D(){C&&(clearTimeout(C),C=null)}function T(n){if(n.key==="Escape"){p();return}if(n.shiftKey&&n.key==="F10"){const f=c(document.activeElement);if(f){n.preventDefault();const E=f.getBoundingClientRect();o(E.left+E.width/2,E.bottom,{code:f.getAttribute("data-ctx-code")||"",name:f.getAttribute("data-ctx-name")||"",context:f.getAttribute("data-ctx-context")||""})}}}function u(n){d.value&&!(n.target&&n.target.closest&&n.target.closest(".qc-ctx"))&&p()}return e(function(){document.addEventListener("contextmenu",k,!0),document.addEventListener("touchstart",b,{passive:!0}),document.addEventListener("touchend",D,!0),document.addEventListener("keydown",T,!0),document.addEventListener("mousedown",u,!0)}),v(function(){document.removeEventListener("contextmenu",k,!0),document.removeEventListener("touchstart",b,!0),document.removeEventListener("touchend",D,!0),document.removeEventListener("keydown",T,!0),document.removeEventListener("mousedown",u,!0)}),{visible:d,pos:w,actions:r,run:M}}}})();(function(a,e){typeof De=="object"&&De.exports?De.exports=e():a.QuantRequestCore=e()})(typeof self<"u"?self:void 0,function(){function a(){var e=0,v={};function t(i){var p=++e;if(i&&v[i])return{deduped:!0,id:v[i].seq,controller:v[i].controller};var o=typeof AbortController<"u"?new AbortController:null;return v[i]={seq:p,controller:o},{deduped:!1,id:p,controller:o}}function c(i,p){var o=v[i];return!o||o.seq!==p}function d(i){var p=v[i];if(p&&p.controller)try{p.controller.abort()}catch{}}function w(i,p){var o=v[i];o&&o.seq===p&&delete v[i]}function r(){var i=0;for(var p in v)Object.prototype.hasOwnProperty.call(v,p)&&i++;return i}return{begin:t,isStale:c,abort:d,finish:w,activeCount:r}}return{createRequestGuard:a}});(function(a,e){typeof De=="object"&&De.exports?De.exports=e():a.QuantStateRegistry=e()})(typeof self<"u"?self:void 0,function(){function a(){var e=Object.create(null),v=Object.create(null);function t(k,C){if(!k||typeof k!="string")throw new Error("domain name required");if(e[k])throw new Error("duplicate domain: "+k);for(var x=Array.isArray(C)?C:[],b=0;b<x.length;b++){var D=x[b];if(v[D]&&v[D]!==k)throw new Error("duplicate key across domains: "+D);v[D]=k}return e[k]={keys:x.slice(),refs:Object.create(null)},!0}function c(k,C,x){var b=e[k];if(!b)throw new Error("unknown domain: "+k);if(b.keys.indexOf(C)===-1)throw new Error("key not declared in domain: "+k+"."+C);return b.refs[C]=x,!0}function d(k,C){var x=e[k];return!!x&&C in x.refs}function w(k,C){var x=e[k];if(x){var b=x.refs[C];return b&&typeof b=="object"&&"value"in b?b.value:b}}function r(k){var C=e[k];if(!C)return null;for(var x={},b=0;b<C.keys.length;b++){var D=C.keys[b],T=C.refs[D];x[D]=T&&typeof T=="object"&&"value"in T?T.value:T}return x}function i(k,C){var x=e[k];if(!x||!C)return!1;for(var b=0;b<x.keys.length;b++){var D=x.keys[b];if(D in C){var T=x.refs[D];T&&typeof T=="object"&&"value"in T&&(T.value=C[D])}}return!0}function p(){return Object.keys(e)}function o(k){var C=e[k];return C?C.keys.slice():[]}function M(){for(var k=0,C=Object.keys(e),x=0;x<C.length;x++)k+=Object.keys(e[C[x]].refs).length;return k}return{defineDomain:t,attach:c,has:d,get:w,snapshot:r,restore:i,domains:p,keys:o,attachedCount:M}}return{createStateRegistry:a}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:e,computed:v,watch:t}=Vue,{consensus:c,currentPage:d,currentSubPage:w,dashboardData:r,searchKeyword:i,statusFilter:p,strategyFilter:o,strategyFilterCounts:M}=a;function k(R){const B=o.value.selected;if(!B||B.length===0)return R;const W=o.value.mode;return R.filter(U=>{const Y=U.strategy_names||U.strategies||[];return W==="union"?B.some(Z=>Y.includes(Z)):B.every(Z=>Y.includes(Z))})}const C=v(()=>{const R=k(c.value||[]);return{all:R.length,newCount:R.filter(B=>B.status==="new").length,current:R.filter(B=>B.status==="current").length,out:R.filter(B=>B.status==="out").length}}),x=v(()=>{let R=c.value||[];if(p.value!=="all"&&(R=R.filter(B=>B.status===p.value)),R=k(R),i.value){const B=i.value.toLowerCase();R=R.filter(W=>W.code.toLowerCase().includes(B)||W.name&&W.name.toLowerCase().includes(B))}return R}),b=v(()=>{const R=c.value||[],B={},W={};for(const U of R)U.code&&U.name&&(W[U.code]=U.name);for(const U of R){const Y=U.strategy_names||U.strategies||[];for(const Z of Y)B[Z]||(B[Z]={strategy:Z,count:0,codes:[],names:[]}),B[Z].count++,B[Z].codes.includes(U.code)||(B[Z].codes.push(U.code),B[Z].names.push({code:U.code,name:W[U.code]||U.code}))}return Object.values(B).sort((U,Y)=>Y.count-U.count)}),D=v(()=>{const R=o.value.selected,B=o.value.mode,W={};for(const[U,Y]of Object.entries(M.value)){const Z=Y||[];!R||R.length===0?W[U]=Z.length:B==="union"?W[U]=Z.filter(F=>F.strategies&&R.some(ee=>F.strategies.includes(ee))).length:W[U]=Z.filter(F=>F.strategies&&R.every(ee=>F.strategies.includes(ee))).length}return W});function T(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(o.value.selected)),localStorage.setItem("quant_strategy_filter_mode",o.value.mode)}const u=v(()=>{const R=(r.value||{}).consensus_rank||[];return k(R)}),n=v(()=>{const R=c.value||M.value.day||[];return k(R).length}),f=v(()=>{const R=(r.value||{}).strategy_counts||[],B=c.value||M.value.day||[];if(B.length===0)return R;const W=k(B),U={};W.forEach(Z=>{(Z.strategy_names||Z.strategies||[]).forEach(ee=>{U[ee]=(U[ee]||0)+1})});const Y=W.length||1;return R.map(Z=>{const F=Z.strategy_name||Z.strategy_id,ee=U[F]||0;return{...Z,count:ee,percentage:Math.round(ee/Y*1e3)/10}})}),E=v(()=>{const R=(r.value||{}).pool_changes||{},B=(R.new_count||0)-(R.out_count||0);return B>0?{dir:"up",text:"↑"+B}:B<0?{dir:"down",text:"↓"+Math.abs(B)}:{dir:"flat",text:"→0"}}),N=v(()=>{const R=(r.value||{}).time_coverage||{},B=new Date(R.start_date),W=new Date(R.end_date),U=new Date;if(!B.getTime()||!W.getTime()||U>=W)return 100;if(U<=B)return 0;const Y=W-B,Z=U-B;return Math.round(Z/Y*100)}),q=e(null);function z(R){o.value.selected=[R],o.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([R])),localStorage.setItem("quant_strategy_filter_mode","union"),d.value="calendar",w.value="calendar"}return{applyStrategyFilter:k,statusCounts:C,stockPool:x,strategyDistribution:b,strategyPreviewCount:D,saveStrategyFilter:T,filteredConsensusRank:u,currentPoolSize:n,filteredStrategyCounts:f,poolChangeBadge:E,timeBarPercent:N,lastRefreshTime:q,navigateToStrategyFilter:z}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.history={create:function(a){const{ref:e,computed:v,watch:t,currentUser:c,selectedDate:d,stockDetail:w,stockDetailTab:r,stockDetailVisible:i,stockDetailLoading:p,stockKlineLoaded:o,viewCache:M,animateScoreEntrance:k,loadStockKline:C,refreshStockScore:x,disposeStockKline:b,aiHistory:D,aiLoading:T,aiEvalStage:u,aiEvalElapsed:n,aiEvalError:f,aiResult:E,loadLastEvaluation:N,autoEvaluateConfig:q,autoEvaluateScope:z,batchStocks:R,batchRunning:B,batchTotal:W,batchCompleted:U,batchCurrent:Y,batchStatuses:Z,batchResults:F,batchEvalErrors:ee,expandedDates:A,expandedStocks:s,savingConfig:S,selectedHistoryIds:l,selectedWatchlistCodes:h,showAutoEvaluateSettings:te,showBatchEvaluate:I,getCSSVar:_,quickEvalStock:m,evalStrategy:P,watchlistSort:y,watchlist:j,watchlistCodes:se,aiHistoryLoading:J,aiHistoryError:L,sortedWatchlist:$,getWatchlistScore:ie,getLatestScore:me,addSearchResult:Te,evaluatedCodes:X,klineLoadedCodes:oe,markKlineLoaded:Pe,watchlistSearch:ne,watchlistResults:ge,watchlistSearching:Me,dataRefreshConfig:ce,dataRefreshReloading:he,dataRefreshSaving:xe,levelVar:le,levelBgVar:ae,undoStack:ve,showUndoMessage:ze,addToWatchlist:Ae,removeFromWatchlist:Ve}=a;async function nt(){if(!w.value)return;T.value=!0,E.value=null,f.value="",u.value="fetching",n.value=0;const Ee=Date.now(),Se=setInterval(()=>{T.value&&(n.value=Math.round((Date.now()-Ee)/1e3))},500);try{const Ne=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:w.value.stock,stock_name:w.value.name||w.value.stock,strategy:P.value})});u.value="calculating";const Oe=await Ne.json();u.value="analyzing",Oe.success?(await nextTick(),E.value=Oe.data,r.value="ai",Le()):(f.value=Oe.message||"评估失败",ElementPlus.ElMessage.error(f.value))}catch(Ne){f.value=Ne&&Ne.message&&!String(Ne.message).includes("Failed to fetch")?Ne.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(f.value)}finally{clearInterval(Se),T.value=!1,n.value=0,f.value?u.value="":(u.value="done",setTimeout(()=>{u.value==="done"&&(u.value="")},800))}}const tt=50,at=e(0),we=e(!1),ke=v(()=>D.value.length<at.value);async function Le(){J.value=!0,L.value=!1;try{if(!localStorage.getItem("quant_token")){D.value=[];return}const Se=await fetch(`/api/ai/history?limit=${tt}&offset=0`);if(Se.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),c.value=null;return}const Ne=await Se.json();Ne.success?(D.value=Ne.data||[],at.value=Ne.total!=null?Ne.total:D.value.length):L.value=!0}catch(Ee){console.error("[loadAiHistory] error:",Ee),L.value=!0}finally{J.value=!1}}async function Re(){if(!(we.value||!ke.value)){we.value=!0;try{const Se=await(await fetch(`/api/ai/history?limit=${tt}&offset=${D.value.length}`)).json();if(Se.success&&Array.isArray(Se.data)){const Ne=new Set(D.value.map(Fe=>Fe.id)),Oe=Se.data.filter(Fe=>!Ne.has(Fe.id));D.value=D.value.concat(Oe),Se.total!=null&&(at.value=Se.total)}}catch(Ee){console.warn("[loadMoreAiHistory] error:",Ee)}finally{we.value=!1}}}async function Ue(Ee){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const Ne=await(await fetch(`/api/ai/history/${Ee}`,{method:"DELETE"})).json();if(Ne.success){ElementPlus.ElMessage.success("删除成功"),Le();const Oe=l.value.indexOf(Ee);Oe>=0&&l.value.splice(Oe,1)}else ElementPlus.ElMessage.error(Ne.message||"删除失败")}catch{}}function Ge(Ee){const Se=l.value.indexOf(Ee);Se>=0?l.value.splice(Se,1):l.value.push(Ee)}function Qe(){l.value=[]}function et(){h.value=[]}async function lt(){const Ee=l.value;if(Ee.length===0)return;const Se=D.value.filter(Ne=>Ee.includes(Ne.id)).map(Ne=>Ne.stock_code);I.value=!0,R.value=[...new Set(Se)].join(",")}async function ft(){const Ee=l.value;if(Ee.length===0)return;const Se=D.value.filter(Fe=>Ee.includes(Fe.id)),Ne=[...new Map(Se.map(Fe=>[Fe.stock_code,Fe])).values()];let Oe=0;for(const Fe of Ne)se.value.has(Fe.stock_code)||(await Ae(Fe.stock_code,Fe.stock_name||Fe.stock_code),Oe++);Oe>0?ElementPlus.ElMessage.success(`已加入 ${Oe} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function xt(){const Ee=l.value;if(Ee.length===0)return;const Se=D.value.filter(Oe=>Ee.includes(Oe.id)),Ne=[...new Map(Se.map(Oe=>[Oe.stock_code,Oe])).values()];try{const Fe=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:Ne.map(Ye=>({stock_code:Ye.stock_code,stock_name:Ye.stock_name||""}))})})).json();Fe&&Fe.success?ElementPlus.ElMessage.success(`已登记 ${Fe.count||Ne.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(Fe&&Fe.detail||"批量加入组合失败")}catch(Oe){console.warn("batchAddToPortfolio failed:",Oe),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function Tt(){if(h.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${h.value.length} 只股票？`,"提示",{type:"warning"});for(const Ee of h.value)await Ve(Ee);h.value=[],ElementPlus.ElMessage.success("已移除")}catch(Ee){Ee&&Ee.message!=="cancel"&&console.warn("batchRemoveWatchlist:",Ee)}}function qt(Ee){const Se=h.value.indexOf(Ee);Se>=0?h.value.splice(Se,1):h.value.push(Ee)}function g(){l.value.length===D.value.length?l.value=[]:l.value=D.value.map(Ee=>Ee.id)}function O(){h.value.length===j.value.length?h.value=[]:h.value=j.value.map(Ee=>Ee.code)}async function Q(){if(l.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${l.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const Se=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:l.value})})).json();Se.success?(ElementPlus.ElMessage.success(Se.message),l.value=[],Le()):ElementPlus.ElMessage.error(Se.message||"删除失败")}catch{}}async function de(){try{const Se=await(await fetch("/api/ai/auto-config")).json();Se.success&&(q.value=Se.data,Se.data.evaluate_scope&&(z.value=Se.data.evaluate_scope))}catch(Ee){console.warn("loadAutoEvaluateConfig failed:",Ee)}}async function ue(){S.value=!0;try{q.value.evaluate_scope=z.value;const Se=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(q.value)})).json();Se.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),te.value=!1):ElementPlus.ElMessage.error(Se.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{S.value=!1}}return{doAiEvaluate:nt,aiHistoryTotal:at,aiHistoryLoadingMore:we,hasMoreAiHistory:ke,loadAiHistory:Le,loadMoreAiHistory:Re,deleteSingleHistory:Ue,toggleSelectHistory:Ge,clearSelection:Qe,clearWatchlistSelection:et,batchReevaluateHistory:lt,batchAddToWatchlist:ft,batchAddToPortfolio:xt,batchRemoveWatchlist:Tt,toggleSelectWatchlist:qt,selectAllHistory:g,selectAllWatchlist:O,deleteSelectedHistory:Q,loadAutoEvaluateConfig:de,saveAutoEvaluateConfig:ue}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.list={create:function(a){const{ref:e,computed:v,watch:t,currentUser:c,selectedDate:d,stockDetail:w,stockDetailTab:r,stockDetailVisible:i,stockDetailLoading:p,stockKlineLoaded:o,viewCache:M,animateScoreEntrance:k,loadStockKline:C,refreshStockScore:x,disposeStockKline:b,aiHistory:D,aiLoading:T,aiEvalStage:u,aiEvalElapsed:n,aiEvalError:f,aiResult:E,loadLastEvaluation:N,autoEvaluateConfig:q,autoEvaluateScope:z,batchStocks:R,batchRunning:B,batchTotal:W,batchCompleted:U,batchCurrent:Y,batchStatuses:Z,batchResults:F,batchEvalErrors:ee,expandedDates:A,expandedStocks:s,savingConfig:S,selectedHistoryIds:l,selectedWatchlistCodes:h,showAutoEvaluateSettings:te,showBatchEvaluate:I,getCSSVar:_,quickEvalStock:m,evalStrategy:P,watchlistSort:y,watchlist:j,watchlistCodes:se,aiHistoryLoading:J,aiHistoryError:L,sortedWatchlist:$,getWatchlistScore:ie,getLatestScore:me,addSearchResult:Te,evaluatedCodes:X,klineLoadedCodes:oe,markKlineLoaded:Pe,watchlistSearch:ne,watchlistResults:ge,watchlistSearching:Me,dataRefreshConfig:ce,dataRefreshReloading:he,dataRefreshSaving:xe,levelVar:le,levelBgVar:ae,undoStack:ve,showUndoMessage:ze,loadAiHistory:Ae}=a,Ve=e(!1);async function nt(){Ve.value=!0;try{const Q=await(await fetch("/api/watchlist")).json();Q.success&&(j.value=Q.stocks||[])}catch(O){console.warn("loadWatchlist failed:",O)}finally{Ve.value=!1}}async function tt(O,Q){try{const ue=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:O,name:Q})})).json();if(ue.success)return ue.existed||j.value.push({code:O,name:Q,added_at:new Date().toISOString()}),!0}catch(de){console.warn("addToWatchlist failed:",de)}return!1}async function at(O){try{const Q=j.value.find(ue=>ue.code===O),de=Q&&Q.name||"";if(await fetch(`/api/watchlist/${encodeURIComponent(O)}`,{method:"DELETE"}),j.value=j.value.filter(ue=>ue.code!==O),se.value&&se.value.delete&&se.value.delete(O),ve){const ue=ve.register(()=>{tt(O,de)},"移除自选",5e3);ze("已移除自选",ue)}else ElementPlus.ElMessage.info("已移除自选")}catch(Q){console.warn("removeFromWatchlist failed:",Q)}}async function we(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"});const O=j.value.slice();if(await fetch("/api/watchlist",{method:"DELETE"}),j.value=[],se.value&&se.value.clear&&se.value.clear(),ElementPlus.ElMessage.success("自选已清空"),ve&&O.length){const Q=ve.register(()=>{O.forEach(de=>tt(de.code,de.name||""))},"清空自选",5e3);ze("自选已清空",Q)}}catch(O){console.warn("clearWatchlist failed:",O)}}async function ke(O,Q){se.value.has(O)?(await at(O),ElementPlus.ElMessage.info("已移除自选")):await tt(O,Q)&&ElementPlus.ElMessage.success("已加入自选")}async function Le(O,Q){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(O,Q||"");const de=new Date().toISOString().split("T")[0],ue=d.value||de;r.value="kline",E.value=null,f.value="",b("stockKlineChart"),w.value=null,p.value=!0,o.value=!1,i.value=!0,nextTick(()=>k());try{const Ee=await fetch(`/api/calendar/stock/${encodeURIComponent(O)}?date=${ue}`);w.value=await Ee.json()}catch{w.value={stock:O,name:Q,total_days:0}}finally{p.value=!1}await nextTick(),await C("daily"),x(),N(O)}const Re=e(!1);async function Ue(){var O;if(j.value.length!==0){Re.value=!0;try{const de=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();de.success&&de.loaded>0?(((O=de.details)==null?void 0:O.loaded)||[]).forEach(ue=>oe.value.add(ue.code)):de.loaded===0&&de.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(Q){console.error("预加载K线失败:",Q)}finally{Re.value=!1}}}async function Ge(O,Q){T.value=!0,E.value=null,f.value="",u.value="fetching",o.value=!1,b();const de=new Date().toISOString().split("T")[0],ue=d.value||de;try{const Ee=await fetch(`/api/calendar/stock/${encodeURIComponent(O)}?date=${ue}`);w.value=await Ee.json()}catch{w.value={stock:O,name:Q,total_days:0}}r.value="ai",i.value=!0,await nextTick();try{const Se=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:O,stock_name:Q})})).json();Se.success?(E.value=Se.data,Ae()):(f.value=Se.message||"评估失败",ElementPlus.ElMessage.error(f.value))}catch{f.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(f.value)}finally{T.value=!1,u.value=""}}async function Qe(){j.value.length!==0&&(I.value=!0,R.value=j.value.map(O=>O.code).join(","))}async function et(){h.value.length!==0&&(I.value=!0,R.value=h.value.join(","))}async function lt(){if(!ne.value.trim()){ge.value=[];return}Me.value=!0;try{const Q=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(ne.value)}`)).json();ge.value=(Q.results||[]).filter(de=>!se.value.has(de.code))}catch(O){console.warn("searchStockForWatchlist failed:",O)}finally{Me.value=!1}}async function ft(){try{const Q=await(await fetch("/api/data-refresh/config")).json();ce.value=Q}catch(O){console.error("加载数据刷新配置失败:",O)}}async function xt(){xe.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ce.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{xe.value=!1}}async function Tt(){var O;he.value=!0;try{const de=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();de.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((O=de.parser_stats)==null?void 0:O.dates_count)||0}交易日`),M.clear(),await ft()):ElementPlus.ElMessage.error(de.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{he.value=!1}}const qt=e(!1);async function g(){qt.value=!0;try{const Q=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(Q.success){const de=Q.result||{},ue=Q.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${de.pulled||0}/${de.total||0}, 财务 ${ue.pulled||0}/${ue.total||0}`),M.clear(),await ft()}else ElementPlus.ElMessage.error(Q.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{qt.value=!1}}return{watchlistLoading:Ve,loadWatchlist:nt,addToWatchlist:tt,removeFromWatchlist:at,clearWatchlist:we,toggleWatchlist:ke,showStockKline:Le,preloadingKline:Re,preloadWatchlistKline:Ue,watchlistEvaluate:Ge,batchEvaluateWatchlist:Qe,batchEvaluateSelected:et,searchStockForWatchlist:lt,loadDataRefreshConfig:ft,saveDataRefreshConfig:xt,triggerDataReload:Tt,dataPullRunning:qt,triggerDataPull:g}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.analytics={create:function(a){const{ref:e,computed:v,watch:t,currentUser:c,selectedDate:d,stockDetail:w,stockDetailTab:r,stockDetailVisible:i,stockDetailLoading:p,stockKlineLoaded:o,viewCache:M,animateScoreEntrance:k,loadStockKline:C,refreshStockScore:x,disposeStockKline:b,aiHistory:D,aiLoading:T,aiEvalStage:u,aiEvalElapsed:n,aiEvalError:f,aiResult:E,loadLastEvaluation:N,autoEvaluateConfig:q,autoEvaluateScope:z,batchStocks:R,batchRunning:B,batchTotal:W,batchCompleted:U,batchCurrent:Y,batchStatuses:Z,batchResults:F,batchEvalErrors:ee,expandedDates:A,expandedStocks:s,savingConfig:S,selectedHistoryIds:l,selectedWatchlistCodes:h,showAutoEvaluateSettings:te,showBatchEvaluate:I,getCSSVar:_,quickEvalStock:m,evalStrategy:P,watchlistSort:y,watchlist:j,watchlistCodes:se,aiHistoryLoading:J,aiHistoryError:L,sortedWatchlist:$,getWatchlistScore:ie,getLatestScore:me,addSearchResult:Te,evaluatedCodes:X,klineLoadedCodes:oe,markKlineLoaded:Pe,watchlistSearch:ne,watchlistResults:ge,watchlistSearching:Me,dataRefreshConfig:ce,dataRefreshReloading:he,dataRefreshSaving:xe,levelVar:le,levelBgVar:ae,undoStack:ve,showUndoMessage:ze,loadAiHistory:Ae}=a,Ve=v(()=>{const g={};for(const O of D.value){const Q=(O.evaluate_time||"").split("T")[0];g[Q]||(g[Q]=[]),g[Q].push(O)}for(const O in g)g[O].sort((Q,de)=>de.evaluate_time.localeCompare(Q.evaluate_time));return g}),nt=v(()=>{const g={};for(const O of D.value){const Q=O.stock_code;g[Q]||(g[Q]=[]),g[Q].push(O)}for(const O in g)g[O].sort((Q,de)=>de.evaluate_time.localeCompare(Q.evaluate_time));return g}),tt=v(()=>{const g={};for(const O of D.value){const Q=(O.evaluate_time||"").split("T")[0].slice(0,7);g[Q]||(g[Q]=[]),g[Q].push(O)}for(const O in g)g[O].sort((Q,de)=>de.evaluate_time.localeCompare(Q.evaluate_time));return g}),at=v(()=>Object.keys(nt.value).length),we=v(()=>{const g=D.value.length;return g===0?[]:[{label:"90+",min:90,max:100,color:"var(--bar-fill-ok)"},{label:"80-89",min:80,max:89,color:"var(--bar-fill-ok)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--state-success-solid) 42%, var(--surface-card))"},{label:"60-69",min:60,max:69,color:"var(--bar-fill-warn)"},{label:"<60",min:0,max:59,color:"var(--bar-fill-bad)"}].map(Q=>{const de=D.value.filter(ue=>ue.result.total_score>=Q.min&&ue.result.total_score<=Q.max).length;return{...Q,count:de,pct:Math.round(de/g*100)}})});async function ke(){if(!m.value)return;const g=j.value.find(O=>O.code===m.value);if(g){T.value=!0,E.value=null,f.value="",u.value="fetching";try{w.value={stock:g.code,name:g.name,total_days:0},i.value=!0,r.value="ai",await nextTick();const Q=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:g.code,stock_name:g.name,strategy:P.value})})).json();Q.success?(E.value=Q.data,Ae(),m.value=""):(f.value=Q.message||"评估失败",ElementPlus.ElMessage.error(f.value))}catch{f.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(f.value)}finally{T.value=!1,u.value=""}}}function Le(g){const O=A.value.indexOf(g);O>=0?A.value.splice(O,1):A.value.push(g)}function Re(g){const Q=(Ve.value[g]||[]).map(ue=>ue.id);Q.every(ue=>l.value.includes(ue))?l.value=l.value.filter(ue=>!Q.includes(ue)):Q.forEach(ue=>{l.value.includes(ue)||l.value.push(ue)})}function Ue(g){const Q=(tt.value[g]||[]).map(ue=>ue.id);Q.every(ue=>l.value.includes(ue))?l.value=l.value.filter(ue=>!Q.includes(ue)):Q.forEach(ue=>{l.value.includes(ue)||l.value.push(ue)})}function Ge(g){const O=s.value.indexOf(g);O>=0?s.value.splice(O,1):s.value.push(g)}function Qe(g){const Q=(nt.value[g]||[]).map(ue=>ue.id);Q.every(ue=>l.value.includes(ue))?l.value=l.value.filter(ue=>!Q.includes(ue)):Q.forEach(ue=>{l.value.includes(ue)||l.value.push(ue)})}const et={},lt={};function ft(g,O,Q){if(!g||(Q&&(lt[O]={el:g,records:Q}),et[O]===g))return;const de=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,ue=()=>{Object.keys(et).forEach(H=>{if(et[H]&&et[H]!==g){try{et[H].dispose()}catch{}delete et[H]}});const Ee=[...Q].sort((H,fe)=>H.evaluate_time.localeCompare(fe.evaluate_time)),Se=Ee.map(H=>(H.evaluate_time||"").split("T")[0]),Ne=Ee.map(H=>{var fe;return((fe=H.result)==null?void 0:fe.total_score)??null}),Oe=Ee.map(H=>{var fe;return((fe=H.result)==null?void 0:fe.level)??""}),Fe={primary:_("--qc-primary-600")||"#b8922a",textPrimary:_("--text-primary")||"#1f2937",textSecondary:_("--text-secondary")||"#6b7280",border:_("--chart-axis")||"#b9b2a6",axis:_("--chart-axis")||"#b9b2a6",split:_("--chart-split")||"#e7e1d6",up:_("--qc-market-up")||"#e63946",down:_("--qc-market-down")||"#2e7d32"},Ye=[];for(let H=1;H<Ne.length;H++)Ne[H]!=null&&Ne[H-1]!=null&&Math.abs(Ne[H]-Ne[H-1])>=15&&Ye.push({name:"大幅变化",coord:[Se[H],Ne[H]],value:(Ne[H]-Ne[H-1]>0?"↑":"↓")+Math.abs(Ne[H]-Ne[H-1]),symbol:"pin",symbolSize:32,itemStyle:{color:Ne[H]-Ne[H-1]>0?Fe.up:Fe.down}});const ht=echarts.init(g),Xe=window.__quantModules&&window.__quantModules.echartsTheme;Xe&&typeof Xe.getEChartsTheme=="function"&&ht.setOption(Xe.getEChartsTheme()),ht.setOption({tooltip:{trigger:"axis",backgroundColor:_("--bg-card")||"#ffffff",borderColor:Fe.border,textStyle:{color:Fe.textPrimary},formatter:function(H){var je;const fe=(je=H[0])==null?void 0:je.dataIndex,$e=fe!=null?Oe[fe]:"";return Se[fe]+"<br/>得分: "+Ne[fe]+($e?" ("+$e+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:Se,axisLabel:{fontSize:10,rotate:30,color:Fe.textSecondary},axisLine:{lineStyle:{color:Fe.axis}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:Fe.textSecondary},splitLine:{lineStyle:{color:Fe.split}}},series:[{data:Ne,type:"line",smooth:!0,lineStyle:{color:Fe.primary,width:2},itemStyle:{color:Fe.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:_("--primary-rgb")?"rgba("+_("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:_("--primary-rgb")?"rgba("+_("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:Ye.length>0?{data:Ye}:void 0}]}),et[O]=ht};de?de().then(ue).catch(()=>{}):ue()}function xt(){Object.keys(lt).forEach(g=>{const O=lt[g];if(!(!O||!O.el)){if(et[g]){try{et[g].dispose()}catch{}delete et[g]}ft(O.el,g,O.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(xt));async function Tt(g){E.value=g,o.value=!1,b();try{const O=await fetch(`/api/calendar/stock/${g.stock_code}?date=${d.value}`);w.value=await O.json()}catch{w.value={stock:g.stock_code,name:g.stock_name||g.stock_code,total_days:0,history:[]}}i.value=!0,r.value="ai"}async function qt(){if(!R.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const g=R.value.split(/[,，\s]+/).filter(Se=>Se.trim());if(g.length===0)return;B.value=!0,W.value=g.length,U.value=0,Y.value="",Z.value={},F.value={},ee.value={},g.forEach(Se=>{Z.value[Se]="pending",F.value[Se]=null});const O={"Content-Type":"application/json"};let Q=0,de=0,ue=!1;try{const Se=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:O,body:JSON.stringify({stock_codes:g})});if(Se.ok&&Se.body){ue=!0;const Ne=Se.body.getReader(),Oe=new TextDecoder("utf-8");let Fe="",Ye=!1;for(;!Ye;){const{value:ht,done:Xe}=await Ne.read();Ye=Xe,Fe+=Oe.decode(ht||new Uint8Array,{stream:!Ye});let H;for(;(H=Fe.indexOf(`

`))>=0;){const fe=Fe.slice(0,H);Fe=Fe.slice(H+2);const $e=fe.split(`
`).find(wt=>wt.startsWith("data: "));if(!$e)continue;let je;try{je=JSON.parse($e.slice(6))}catch{continue}je.type==="start"?je.total&&(W.value=je.total):je.type==="item"?(U.value++,Y.value=je.stock_code,je.success?(Z.value[je.stock_code]="success",F.value[je.stock_code]=je,Q++):(Z.value[je.stock_code]="error",ee.value[je.stock_code]=je.error||"评估失败",de++)):je.type==="done"&&(typeof je.success=="number"&&(Q=je.success),typeof je.fail=="number"&&(de=je.fail))}}if(Fe.trim()){const ht=Fe.split(`
`).find(Xe=>Xe.startsWith("data: "));if(ht)try{const Xe=JSON.parse(ht.slice(6));Xe.type==="item"?(U.value++,Y.value=Xe.stock_code,Xe.success?(Z.value[Xe.stock_code]="success",F.value[Xe.stock_code]=Xe,Q++):(Z.value[Xe.stock_code]="error",ee.value[Xe.stock_code]=Xe.error||"评估失败",de++)):Xe.type==="done"&&(typeof Xe.success=="number"&&(Q=Xe.success),typeof Xe.fail=="number"&&(de=Xe.fail))}catch{}}}}catch{ue=!1}if(!ue){Q=0,de=0,U.value=0;for(const Se of g){Y.value=Se,Z.value[Se]="running";try{const Oe=await(await fetch("/api/ai/evaluate",{method:"POST",headers:O,body:JSON.stringify({stock_code:Se.trim(),stock_name:Se.trim()})})).json();Oe.success?(Z.value[Se]="success",F.value[Se]=Oe.data,Q++):(Z.value[Se]="error",ee.value[Se]=Oe.message&&Oe.message!=="success"?Oe.message:"评估失败",de++)}catch(Ne){Z.value[Se]="error",ee.value[Se]="网络错误: "+(Ne&&Ne.message?Ne.message:Ne),de++}U.value++}}Y.value="",await Ae();const Ee=g.length;setTimeout(()=>{de===0?ElementPlus.ElMessage.success(`评估完成 成功 ${Q}/${Ee}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${Q}/${Ee} · 失败 ${de}`),B.value=!1},500)}return{groupedByDate:Ve,aiHistoryByStock:nt,groupedByMonth:tt,aiHistoryStockCount:at,scoreDistribution:we,quickEvaluate:ke,toggleDateExpand:Le,toggleSelectDate:Re,toggleSelectMonth:Ue,toggleStockExpand:Ge,toggleSelectStock:Qe,registerTrendChart:ft,viewAiResult:Tt,doBatchEvaluate:qt}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.realtime={create:function(a){const{ref:e,computed:v,watch:t,currentUser:c,selectedDate:d,stockDetail:w,stockDetailTab:r,stockDetailVisible:i,stockDetailLoading:p,stockKlineLoaded:o,viewCache:M,animateScoreEntrance:k,loadStockKline:C,refreshStockScore:x,disposeStockKline:b,aiHistory:D,aiLoading:T,aiEvalStage:u,aiEvalElapsed:n,aiEvalError:f,aiResult:E,loadLastEvaluation:N,autoEvaluateConfig:q,autoEvaluateScope:z,batchStocks:R,batchRunning:B,batchTotal:W,batchCompleted:U,batchCurrent:Y,batchStatuses:Z,batchResults:F,batchEvalErrors:ee,expandedDates:A,expandedStocks:s,savingConfig:S,selectedHistoryIds:l,selectedWatchlistCodes:h,showAutoEvaluateSettings:te,showBatchEvaluate:I,getCSSVar:_,quickEvalStock:m,evalStrategy:P,watchlistSort:y,watchlist:j,watchlistCodes:se,aiHistoryLoading:J,aiHistoryError:L,sortedWatchlist:$,getWatchlistScore:ie,getLatestScore:me,addSearchResult:Te,evaluatedCodes:X,klineLoadedCodes:oe,markKlineLoaded:Pe,watchlistSearch:ne,watchlistResults:ge,watchlistSearching:Me,dataRefreshConfig:ce,dataRefreshReloading:he,dataRefreshSaving:xe,levelVar:le,levelBgVar:ae,undoStack:ve,showUndoMessage:ze}=a,Ae=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};Ae.REALTIME_WS_PATH;const Ve=Ae.REALTIME_DEGRADED_TEXT||"数据不可达",nt=Ae.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";Ae.WARN_RISE_SPEED_THRESHOLD!=null&&Ae.WARN_RISE_SPEED_THRESHOLD,Ae.WARN_VOLUME_RATIO_THRESHOLD!=null&&Ae.WARN_VOLUME_RATIO_THRESHOLD;const tt=Ae.quoteFmt||{price:ue=>ue==null?"--":Number(ue).toFixed(2),pct:ue=>ue==null?"--":Number(ue).toFixed(2)+"%",num:ue=>ue==null?"--":Number(ue).toFixed(2),color:ue=>""},at=3,we=5e3,ke=e({}),Le=e(!1),Re=e("idle");let Ue=null,Ge=null,Qe=0;function et(ue){return Ae.checkQuoteWarning?Ae.checkQuoteWarning(ue):null}function lt(ue){return et(ke.value[ue])}function ft(ue){return tt.color(ke.value[ue])}function xt(ue){return tt.price(ke.value[ue]&&ke.value[ue].price)}function Tt(ue){return tt.pct(ke.value[ue]&&ke.value[ue].change_pct)}function qt(ue,Ee){return tt.num(ke.value[ue]&&ke.value[ue][Ee])}function g(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function O(){if(!Ue||Ue.readyState!==1)return;const ue=(j.value||[]).map(Ee=>Ee.code);ue.length!==0&&Ue.send(JSON.stringify({subscribe:ue}))}function Q(){if(Ge&&(clearTimeout(Ge),Ge=null),Ue){try{Ue.onopen=null,Ue.onmessage=null,Ue.onerror=null,Ue.onclose=null,Ue.close()}catch{}Ue=null}ke.value={},Le.value=!1,Re.value="idle"}function de(){const ue=g();if(!ue||!Ae.buildRealtimeWsUrl||Re.value==="open"||Re.value==="connecting")return;let Ee;try{Ee=Ae.buildRealtimeWsUrl()+"?token="+encodeURIComponent(ue)}catch{Re.value="offline",Le.value=!0;return}Re.value="connecting";let Se=null;try{Se=new WebSocket(Ee)}catch{Re.value="offline",Le.value=!0;return}Ue=Se,Se.onopen=function(){Re.value="open",Qe=0,O()},Se.onmessage=function(Ne){let Oe=null;try{Oe=JSON.parse(Ne.data||"{}")}catch{return}if(!Oe||Oe.type!=="quotes")return;if(Le.value=!!Oe.degraded,Oe.degraded||!Array.isArray(Oe.data)){ke.value={};return}const Fe={};Oe.data.forEach(function(Ye){Ye&&Ye.code&&(Fe[Ye.code]=Ye)}),ke.value=Fe},Se.onerror=function(){Re.value="offline",Le.value=!0},Se.onclose=function(){Re.value="offline",Qe<at?(Qe++,Ge=setTimeout(function(){Re.value!=="open"&&de()},we*Qe)):Le.value=!0}}return t(j,function(){Re.value==="open"&&O()}),g()&&setTimeout(de,500),{REALTIME_DEGRADED_TEXT:Ve,REALTIME_FALLBACK_TEXT:nt,realtimeQuotes:ke,realtimeDegraded:Le,realtimeWsState:Re,quoteWarningFor:lt,realtimeQuoteColor:ft,realtimePriceText:xt,realtimePctText:Tt,realtimeRatioText:qt,disconnectRealtimeQuotes:Q,connectRealtimeQuotes:de}}}})();(function(){window.__quantModules||(window.__quantModules={});const a={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},e={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function v(r){return a[r]||"var(--text-tertiary)"}function t(r){return e[r]||"var(--bg-hover)"}const c=window.QuantUndoCore,d=c?c.createUndoStack():null;function w(r,i){if(!d||!window.Vue||!window.Vue.h)return;const p=window.Vue.h;ElementPlus.ElMessage.success({message:p("span",null,[r,p("a",{style:"margin-left:8px;color:var(--primary-text);cursor:pointer;text-decoration:underline",onClick:()=>{d.undo(i)&&ElementPlus.ElMessage.success("已撤销")}},"撤销")]),duration:5e3})}window.__quantModules.watchlist=window.__quantModules.watchlist||{},window.__quantModules.watchlist.create=function(i){const{ref:p,computed:o,watch:M}=Vue,{currentUser:k,selectedDate:C,stockDetail:x,stockDetailTab:b,stockDetailVisible:D,stockDetailLoading:T,stockKlineLoaded:u,viewCache:n,animateScoreEntrance:f,loadStockKline:E,refreshStockScore:N,disposeStockKline:q,aiHistory:z,aiLoading:R,aiEvalStage:B,aiEvalElapsed:W,aiEvalError:U,aiResult:Y,loadLastEvaluation:Z,autoEvaluateConfig:F,autoEvaluateScope:ee,batchStocks:A,batchRunning:s,batchTotal:S,batchCompleted:l,batchCurrent:h,batchStatuses:te,batchResults:I,batchEvalErrors:_,expandedDates:m,expandedStocks:P,savingConfig:y,selectedHistoryIds:j,selectedWatchlistCodes:se,showAutoEvaluateSettings:J,showBatchEvaluate:L}=i,$=gt=>(getComputedStyle(document.documentElement).getPropertyValue(gt)||"").trim(),ie=p(""),me=p("default"),Te=p("default"),X=p([]),oe=o(()=>new Set(X.value.map(gt=>gt.code))),Pe=p(!1),ne=p(!1),ge=o(()=>{const gt=[...X.value];return Te.value==="name"?gt.sort((Mt,Nt)=>Mt.name.localeCompare(Nt.name,"zh")):Te.value==="added"?gt.sort((Mt,Nt)=>(Nt.added_at||"").localeCompare(Mt.added_at||"")):Te.value==="score"&&gt.sort((Mt,Nt)=>{const Ot=ce(Mt.code);return ce(Nt.code)-Ot}),gt});function Me(gt){const Mt=z.value.filter(Ot=>Ot.stock_code===gt);if(Mt.length===0)return null;const Nt=Mt.reduce((Ot,da)=>Ot.evaluate_time>da.evaluate_time?Ot:da);return{score:Nt.result.total_score,color:v(Nt.result.level),bg:t(Nt.result.level)}}function ce(gt){const Mt=Me(gt);return Mt?Mt.score:0}function he(gt){ht(gt.code,gt.name),ze.value=ze.value.filter(Mt=>Mt.code!==gt.code),ve.value=""}const xe=o(()=>new Set(z.value.map(gt=>gt.stock_code))),le=p(new Set);function ae(gt){le.value.add(gt)}const ve=p(""),ze=p([]),Ae=p(!1),Ve=p({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),nt=p(!1),tt=p(!1),at={v:null},we=window.__quantModules.watchlist.history.create({ref:p,computed:o,watch:M,currentUser:k,selectedDate:C,stockDetail:x,stockDetailTab:b,stockDetailVisible:D,stockDetailLoading:T,stockKlineLoaded:u,viewCache:n,animateScoreEntrance:f,loadStockKline:E,refreshStockScore:N,disposeStockKline:q,aiHistory:z,aiLoading:R,aiEvalStage:B,aiEvalElapsed:W,aiEvalError:U,aiResult:Y,loadLastEvaluation:Z,autoEvaluateConfig:F,autoEvaluateScope:ee,batchStocks:A,batchRunning:s,batchTotal:S,batchCompleted:l,batchCurrent:h,batchStatuses:te,batchResults:I,batchEvalErrors:_,expandedDates:m,expandedStocks:P,savingConfig:y,selectedHistoryIds:j,selectedWatchlistCodes:se,showAutoEvaluateSettings:J,showBatchEvaluate:L,getCSSVar:$,quickEvalStock:ie,evalStrategy:me,watchlistSort:Te,watchlist:X,watchlistCodes:oe,aiHistoryLoading:Pe,aiHistoryError:ne,sortedWatchlist:ge,getWatchlistScore:Me,getLatestScore:ce,addSearchResult:he,evaluatedCodes:xe,klineLoadedCodes:le,markKlineLoaded:ae,watchlistSearch:ve,watchlistResults:ze,watchlistSearching:Ae,dataRefreshConfig:Ve,dataRefreshReloading:nt,dataRefreshSaving:tt,levelVar:v,levelBgVar:t,undoStack:d,showUndoMessage:w,addToWatchlist:function(gt,Mt){return at.v.addToWatchlist(gt,Mt)},removeFromWatchlist:function(gt){return at.v.removeFromWatchlist(gt)}}),{doAiEvaluate:ke,aiHistoryTotal:Le,aiHistoryLoadingMore:Re,hasMoreAiHistory:Ue,loadAiHistory:Ge,loadMoreAiHistory:Qe,deleteSingleHistory:et,toggleSelectHistory:lt,clearSelection:ft,clearWatchlistSelection:xt,batchReevaluateHistory:Tt,batchAddToWatchlist:qt,batchAddToPortfolio:g,batchRemoveWatchlist:O,toggleSelectWatchlist:Q,selectAllHistory:de,selectAllWatchlist:ue,deleteSelectedHistory:Ee,loadAutoEvaluateConfig:Se,saveAutoEvaluateConfig:Ne}=we,Oe=window.__quantModules.watchlist.list.create({ref:p,computed:o,watch:M,currentUser:k,selectedDate:C,stockDetail:x,stockDetailTab:b,stockDetailVisible:D,stockDetailLoading:T,stockKlineLoaded:u,viewCache:n,animateScoreEntrance:f,loadStockKline:E,refreshStockScore:N,disposeStockKline:q,aiHistory:z,aiLoading:R,aiEvalStage:B,aiEvalElapsed:W,aiEvalError:U,aiResult:Y,loadLastEvaluation:Z,autoEvaluateConfig:F,autoEvaluateScope:ee,batchStocks:A,batchRunning:s,batchTotal:S,batchCompleted:l,batchCurrent:h,batchStatuses:te,batchResults:I,batchEvalErrors:_,expandedDates:m,expandedStocks:P,savingConfig:y,selectedHistoryIds:j,selectedWatchlistCodes:se,showAutoEvaluateSettings:J,showBatchEvaluate:L,getCSSVar:$,quickEvalStock:ie,evalStrategy:me,watchlistSort:Te,watchlist:X,watchlistCodes:oe,aiHistoryLoading:Pe,aiHistoryError:ne,sortedWatchlist:ge,getWatchlistScore:Me,getLatestScore:ce,addSearchResult:he,evaluatedCodes:xe,klineLoadedCodes:le,markKlineLoaded:ae,watchlistSearch:ve,watchlistResults:ze,watchlistSearching:Ae,dataRefreshConfig:Ve,dataRefreshReloading:nt,dataRefreshSaving:tt,levelVar:v,levelBgVar:t,undoStack:d,showUndoMessage:w,loadAiHistory:Ge}),{watchlistLoading:Fe,loadWatchlist:Ye,addToWatchlist:ht,removeFromWatchlist:Xe,clearWatchlist:H,toggleWatchlist:fe,showStockKline:$e,preloadingKline:je,preloadWatchlistKline:wt,watchlistEvaluate:Et,batchEvaluateWatchlist:At,batchEvaluateSelected:ot,searchStockForWatchlist:bt,loadDataRefreshConfig:It,saveDataRefreshConfig:ia,triggerDataReload:dt,dataPullRunning:Bt,triggerDataPull:St}=Oe;at.v=Oe;const yt=window.__quantModules.watchlist.analytics.create({ref:p,computed:o,watch:M,currentUser:k,selectedDate:C,stockDetail:x,stockDetailTab:b,stockDetailVisible:D,stockDetailLoading:T,stockKlineLoaded:u,viewCache:n,animateScoreEntrance:f,loadStockKline:E,refreshStockScore:N,disposeStockKline:q,aiHistory:z,aiLoading:R,aiEvalStage:B,aiEvalElapsed:W,aiEvalError:U,aiResult:Y,loadLastEvaluation:Z,autoEvaluateConfig:F,autoEvaluateScope:ee,batchStocks:A,batchRunning:s,batchTotal:S,batchCompleted:l,batchCurrent:h,batchStatuses:te,batchResults:I,batchEvalErrors:_,expandedDates:m,expandedStocks:P,savingConfig:y,selectedHistoryIds:j,selectedWatchlistCodes:se,showAutoEvaluateSettings:J,showBatchEvaluate:L,getCSSVar:$,quickEvalStock:ie,evalStrategy:me,watchlistSort:Te,watchlist:X,watchlistCodes:oe,aiHistoryLoading:Pe,aiHistoryError:ne,sortedWatchlist:ge,getWatchlistScore:Me,getLatestScore:ce,addSearchResult:he,evaluatedCodes:xe,klineLoadedCodes:le,markKlineLoaded:ae,watchlistSearch:ve,watchlistResults:ze,watchlistSearching:Ae,dataRefreshConfig:Ve,dataRefreshReloading:nt,dataRefreshSaving:tt,levelVar:v,levelBgVar:t,undoStack:d,showUndoMessage:w,loadAiHistory:Ge}),{groupedByDate:$t,aiHistoryByStock:Kt,groupedByMonth:rt,aiHistoryStockCount:Ht,scoreDistribution:Xt,quickEvaluate:oa,toggleDateExpand:Ut,toggleSelectDate:ra,toggleSelectMonth:K,toggleStockExpand:Ce,toggleSelectStock:Be,registerTrendChart:Ie,viewAiResult:vt,doBatchEvaluate:it}=yt,_t=window.__quantModules.watchlist.realtime.create({ref:p,computed:o,watch:M,currentUser:k,selectedDate:C,stockDetail:x,stockDetailTab:b,stockDetailVisible:D,stockDetailLoading:T,stockKlineLoaded:u,viewCache:n,animateScoreEntrance:f,loadStockKline:E,refreshStockScore:N,disposeStockKline:q,aiHistory:z,aiLoading:R,aiEvalStage:B,aiEvalElapsed:W,aiEvalError:U,aiResult:Y,loadLastEvaluation:Z,autoEvaluateConfig:F,autoEvaluateScope:ee,batchStocks:A,batchRunning:s,batchTotal:S,batchCompleted:l,batchCurrent:h,batchStatuses:te,batchResults:I,batchEvalErrors:_,expandedDates:m,expandedStocks:P,savingConfig:y,selectedHistoryIds:j,selectedWatchlistCodes:se,showAutoEvaluateSettings:J,showBatchEvaluate:L,getCSSVar:$,quickEvalStock:ie,evalStrategy:me,watchlistSort:Te,watchlist:X,watchlistCodes:oe,aiHistoryLoading:Pe,aiHistoryError:ne,sortedWatchlist:ge,getWatchlistScore:Me,getLatestScore:ce,addSearchResult:he,evaluatedCodes:xe,klineLoadedCodes:le,markKlineLoaded:ae,watchlistSearch:ve,watchlistResults:ze,watchlistSearching:Ae,dataRefreshConfig:Ve,dataRefreshReloading:nt,dataRefreshSaving:tt,levelVar:v,levelBgVar:t,undoStack:d,showUndoMessage:w}),{REALTIME_DEGRADED_TEXT:Dt,REALTIME_FALLBACK_TEXT:kt,realtimeQuotes:ma,realtimeDegraded:Zt,realtimeWsState:fa,quoteWarningFor:Gt,realtimeQuoteColor:ea,realtimePriceText:Wt,realtimePctText:_a,realtimeRatioText:ta,disconnectRealtimeQuotes:xa,connectRealtimeQuotes:ca}=_t;return{quickEvalStock:ie,evalStrategy:me,watchlistSort:Te,watchlist:X,watchlistCodes:oe,sortedWatchlist:ge,getWatchlistScore:Me,getLatestScore:ce,addSearchResult:he,evaluatedCodes:xe,klineLoadedCodes:le,markKlineLoaded:ae,watchlistSearch:ve,watchlistResults:ze,watchlistSearching:Ae,dataRefreshConfig:Ve,dataRefreshReloading:nt,dataRefreshSaving:tt,aiHistoryLoading:Pe,aiHistoryError:ne,aiHistoryTotal:Le,aiHistoryLoadingMore:Re,hasMoreAiHistory:Ue,loadMoreAiHistory:Qe,watchlistLoading:Fe,doAiEvaluate:ke,loadAiHistory:Ge,deleteSingleHistory:et,toggleSelectHistory:lt,clearSelection:ft,clearWatchlistSelection:xt,batchReevaluateHistory:Tt,batchAddToWatchlist:qt,batchAddToPortfolio:g,batchRemoveWatchlist:O,toggleSelectWatchlist:Q,selectAllHistory:de,selectAllWatchlist:ue,deleteSelectedHistory:Ee,loadAutoEvaluateConfig:Se,saveAutoEvaluateConfig:Ne,loadWatchlist:Ye,addToWatchlist:ht,removeFromWatchlist:Xe,clearWatchlist:H,toggleWatchlist:fe,showStockKline:$e,preloadingKline:je,preloadWatchlistKline:wt,watchlistEvaluate:Et,batchEvaluateWatchlist:At,batchEvaluateSelected:ot,searchStockForWatchlist:bt,loadDataRefreshConfig:It,saveDataRefreshConfig:ia,triggerDataReload:dt,triggerDataPull:St,dataPullRunning:Bt,groupedByDate:$t,aiHistoryByStock:Kt,groupedByMonth:rt,aiHistoryStockCount:Ht,scoreDistribution:Xt,quickEvaluate:oa,toggleDateExpand:Ut,toggleSelectDate:ra,toggleSelectMonth:K,toggleStockExpand:Ce,toggleSelectStock:Be,registerTrendChart:Ie,viewAiResult:vt,doBatchEvaluate:it,realtimeQuotes:ma,realtimeDegraded:Zt,realtimeWsState:fa,connectRealtimeQuotes:ca,disconnectRealtimeQuotes:xa,quoteWarningFor:Gt,realtimeQuoteColor:ea,realtimePriceText:Wt,realtimePctText:_a,realtimeRatioText:ta,REALTIME_DEGRADED_TEXT:Dt,REALTIME_FALLBACK_TEXT:kt}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:e,computed:v}=Vue,t=e([]),c=e(null),d=e([]),w=e(!1),r=e(!1),i=e(!1),p=e({stock_code:"",stock_name:"",cost_price:null,quantity:null}),o=e(!1),M=e(!1),k=e({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),C=e(!1),x=e("positions"),b=e(30),D=e(!1),T=e(""),u=e(!1),n=e({dates:[],equity:[],values:[]}),f=v(()=>t.value.length),E=e("metrics"),N=e(!1),q=e(""),z=e(!1),R=e({metrics:null,rules:[],rebalance:null}),B=v(function(){const y=R.value.metrics;if(!y)return[];const j=function(J){return J==null?"--":Number(J).toFixed(2)+"%"},se=function(J){return J==null?"--":Number(J).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:j(y.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:j(y.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:j(y.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:j(y.cvar)},{key:"max_drawdown",label:"最大回撤",value:j(y.max_drawdown)},{key:"annual_return",label:"年化收益",value:j(y.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:se(y.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:se(y.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:se(y.calmar_ratio)},{key:"beta",label:"Beta",value:se(y.beta)}]});async function W(){N.value=!0;try{const y=await(await fetch("/api/portfolio/risk?days=60")).json(),j=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),se=y&&y.success?y.risk:null,J=j&&j.success?j.rules||[]:[],L=j&&j.success?j.rebalance:null;R.value={metrics:se,rules:J,rebalance:L},z.value=!!(se&&Object.keys(se).length>0),q.value=y&&y.note||j&&j.note||""}catch(y){console.warn("[portfolio] 加载风险数据失败:",y),z.value=!1,q.value="风险数据加载失败"}finally{N.value=!1}}async function U(){w.value=!0,r.value=!1;try{const j=await(await fetch("/api/portfolio")).json();j.success?(t.value=j.positions||[],c.value=j.summary||null):r.value=!0}catch(y){console.warn("[portfolio] 加载持仓失败:",y),r.value=!0}finally{w.value=!1}}async function Y(){const y=p.value,j=(y.stock_code||"").trim();if(!j){ElementPlus.ElMessage.warning("请输入股票代码");return}const se=Number(y.cost_price),J=Number(y.quantity);if(!(se>0)||!(J>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}o.value=!0;try{const $=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:j,stock_name:(y.stock_name||"").trim(),cost_price:se,quantity:J})})).json();$.success?(ElementPlus.ElMessage.success($.message||"持仓已更新"),i.value=!1,p.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await U(),I(b.value)):ElementPlus.ElMessage.error($.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{o.value=!1}}async function Z(y){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+y+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const se=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(y),{method:"DELETE"})).json();se.success?(ElementPlus.ElMessage.success("已删除持仓"),await U(),A(),I(b.value)):ElementPlus.ElMessage.error(se.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function F(y,j){k.value={stock_code:y,stock_name:j||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},M.value=!0}async function ee(){const y=k.value;if(!y.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const j=Number(y.price),se=Number(y.quantity);if(!(j>0)||!(se>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}C.value=!0;try{const L=await(await fetch("/api/portfolio/trades",{method:"POST",headers:_authHeaders(),body:JSON.stringify({stock_code:y.stock_code,stock_name:y.stock_name||"",action:y.action,price:j,quantity:se,trade_date:y.trade_date||"",note:(y.note||"").trim()})})).json();L.success?(ElementPlus.ElMessage.success(L.message||"调仓已记录"),M.value=!1,await U(),await A(),I(b.value)):ElementPlus.ElMessage.error(L.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{C.value=!1}}async function A(){try{const j=await(await fetch("/api/portfolio/trades")).json();j.success&&(d.value=j.trades||[])}catch(y){console.warn("[portfolio] 加载调仓记录失败:",y)}}const s=y=>(getComputedStyle(document.documentElement).getPropertyValue(y)||"").trim();function S(y){if(!y||!y.length)return[];let j=y[0]||0;const se=[];for(let J=0;J<y.length;J++){const L=y[J]||0;L>j&&(j=L),se.push(j>0?Math.round((L-j)/j*1e3)/10:0)}return se}function l(){const y={primary:s("--qc-primary-600")||"#b8922a",textPrimary:s("--text-primary")||"#1f2937",textSecondary:s("--text-secondary")||"#6b7280",border:s("--border-light")||"#e5e7eb",up:s("--color-rise")||"#E63946",down:s("--color-fall")||"#2E7D32"},j=n.value;return{tooltip:{trigger:"axis",backgroundColor:s("--bg-card")||"#ffffff",borderColor:y.border,textStyle:{color:y.textPrimary},formatter:function(se){const J=se[0]?se[0].dataIndex:-1,L=j.dates[J]||"",$=j.equity[J],ie=j.values[J];let me=L||"";return $!=null&&(me+="<br/>组合净值: "+$),ie!=null&&(me+="<br/>组合市值: "+ie),me}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:j.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:y.textSecondary},axisLine:{lineStyle:{color:y.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:y.textSecondary},splitLine:{lineStyle:{color:y.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:y.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:j.equity,smooth:!0,showSymbol:!1,lineStyle:{color:y.primary,width:2},itemStyle:{color:y.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:s("--primary-rgb")?"rgba("+s("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:s("--primary-rgb")?"rgba("+s("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:S(j.equity),smooth:!0,showSymbol:!1,lineStyle:{color:y.down,width:1.5},itemStyle:{color:y.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function h(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function te(y,j,se){n.value={dates:y||[],equity:j||[],values:se||[]},u.value=!!y&&y.length>0,u.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",l,{key:"portfolio-equity"}):h()}async function I(y){D.value=!0,T.value="";const j=Number(y)||b.value||30;b.value=j;try{const J=await(await fetch("/api/portfolio/equity_curve?days="+j)).json();J.success?(T.value=J.note||"",te(J.dates||[],J.equity||[],J.values||[])):(T.value="数据暂不可用",h())}catch(se){console.warn("[portfolio] 加载收益曲线失败:",se),T.value="数据暂不可用",h()}finally{D.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function _(y,j){if(y==null||y===""||isNaN(Number(y)))return"--";const se=Number(y),J=j??2;return(se>=0?"+":"")+se.toFixed(J)}function m(y,j){if(y==null||y===""||isNaN(Number(y)))return"--";const se=Number(y),J=j??2;return(se>=0?"+":"")+se.toFixed(J)+"%"}function P(y){if(y==null||y===""||isNaN(Number(y)))return"";const j=Number(y);return j>0?"portfolio-up":j<0?"portfolio-down":""}return{positions:t,summary:c,trades:d,loading:w,loadError:r,showAddForm:i,addForm:p,addSaving:o,tradeFormVisible:M,tradeForm:k,tradeSaving:C,portfolioTab:x,equityDays:b,equityLoading:D,equityNote:T,equityHasData:u,portfolioCount:f,loadPortfolio:U,addPosition:Y,removePosition:Z,openTradeForm:F,submitTrade:ee,loadTrades:A,loadEquity:I,fmtSigned:_,fmtSignedPct:m,signClass:P,riskTab:E,riskLoading:N,riskNote:q,riskHasData:z,riskData:R,riskMetricList:B,loadRisk:W}}}})();(function(a,e){typeof De=="object"&&De.exports?De.exports=e():a.QuantBacktest=e()})(typeof self<"u"?self:void 0,function(){function a(i,p){var o=Number(i);return isFinite(o)?o:typeof p=="number"?p:0}function e(i){var p=Array.isArray(i)?i:[];if(p.length<2)return null;for(var o=-1/0,M=0,k=0,C=0,x=0,b=0;b<p.length;b++){var D=a(p[b].equity!=null?p[b].equity:p[b].value);D>o&&(o=D,M=b);var T=o>0?(o-D)/o*100:0;T>k&&(k=T,C=M,x=b)}function u(n){return p[n]&&p[n].date?p[n].date:""}return{maxDrawdown:Math.round(k*100)/100,peakIndex:C,troughIndex:x,peakDate:u(C),troughDate:u(x)}}function v(i){for(var p=i||{},o={},M=Object.keys(p).sort(),k=0;k<M.length;k++){var C=M[k],x=String(C).slice(0,4);/^\d{4}$/.test(x)&&(o[x]=(o[x]||0)+a(p[C]))}var b=Object.keys(o).sort();return b.map(function(D){return{year:D,return:Math.round(o[D]*100)/100}})}function t(i){var p=Array.isArray(i)?i:[],o={};p.forEach(function(C){(C.points||[]).forEach(function(x){x&&x.date&&(o[x.date]=1)})});var M=Object.keys(o).sort(),k=p.map(function(C){var x={};return(C.points||[]).forEach(function(b){b&&b.date&&(x[b.date]=a(b.value!=null?b.value:b.equity))}),{name:C.name||"",data:M.map(function(b){return b in x?x[b]:null})}});return{dates:M,series:k}}function c(i){var p=i||{},o=function(k){return a(k)},M=function(k,C){var x=o(k);return isFinite(x)?x.toFixed(C):"--"};return[{key:"total_return",label:"总收益",value:M(p.total_return,2),suffix:"%",dir:o(p.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:M(p.annual_return,2),suffix:"%",dir:o(p.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:M(p.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:M(p.sharpe_ratio,2),suffix:"",dir:o(p.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:M(p.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:M(p.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(o(p.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:M(p.volatility,2),suffix:"%",dir:""}]}function d(i){var p=i==null?"":String(i);return/[",\n]/.test(p)?'"'+p.replace(/"/g,'""')+'"':p}function w(i){var p=i||{},o=[];o.push("回测指标"),o.push("指标,数值"),(p.metrics||[]).forEach(function(u){o.push(d(u.label)+","+d((u.value||"")+(u.suffix||"")))}),o.push(""),o.push("净值曲线");var M=["日期"].concat((p.series||[]).map(function(u){return u.name}));o.push(M.map(d).join(","));for(var k=p.dates||[],C=p.series||[],x=0;x<k.length;x++){for(var b=[k[x]],D=0;D<C.length;D++){var T=C[D].data&&C[D].data[x];b.push(T??"")}o.push(b.map(d).join(","))}return o.push(""),o.push("交易明细"),o.push("日期,股票代码,方向,原因"),(p.trades||[]).forEach(function(u){o.push(d(u.date)+","+d(u.stock)+","+d(u.action)+","+d(u.reason))}),o.join(`
`)}function r(i){return i==="buy"?"买入":i==="sell"?"卖出":i||""}return{toNum:a,computeMaxDrawdownRegion:e,buildAnnualReturns:v,buildNavSeries:t,buildMetrics:c,buildBacktestCsv:w,tradeActionText:r}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:e,computed:v}=Vue,t=window.QuantBacktest||{},c=a||{},d=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],r=(Array.isArray(c.backtestStrategies)&&c.backtestStrategies.length?c.backtestStrategies:d).map(s=>({id:s.id,name:s.name})),i=e(r.length?[r[0].id]:[]),p=e(D()),o=e(1e5),M=e(3e-4),k=e(!1),C=e(!1),x=e(null),b=e("");function D(){const s=new Date,S=new Date;S.setFullYear(S.getFullYear()-1);const l=h=>h.getFullYear()+"-"+String(h.getMonth()+1).padStart(2,"0")+"-"+String(h.getDate()).padStart(2,"0");return[l(S),l(s)]}function T(s){const S=i.value.indexOf(s);S>=0?i.value.length>1&&i.value.splice(S,1):i.value.push(s)}function u(s){const S=r.find(l=>l.id===s);return S?S.name:s}function n(s){const S=s.summary||s;return{strategy_id:S.strategy_id,start_date:S.start_date,end_date:S.end_date,total_days:S.total_days,total_return:S.total_return,annual_return:S.annual_return,max_drawdown:S.max_drawdown,volatility:S.volatility,sharpe_ratio:S.sharpe_ratio,sortino_ratio:S.sortino_ratio,win_rate:S.win_rate,profit_loss_ratio:S.profit_loss_ratio,avg_positions:S.avg_positions!=null?S.avg_positions:S.avg_positions_per_day,total_trades:S.total_trades,turnover_rate:S.turnover_rate,success:S.success!==!1,message:S.message||"",insample_total_return:S.insample_total_return!=null?S.insample_total_return:null,outsample_total_return:S.outsample_total_return!=null?S.outsample_total_return:null,out_sample_ratio:S.out_sample_ratio!=null?S.out_sample_ratio:.2,overfit_warning:!!S.overfit_warning,overfit_reason:S.overfit_reason||""}}function f(s){return(Array.isArray(s)?s:[]).map(S=>({date:S.date,value:S.equity!=null?S.equity:S.value}))}function E(s,S){const l=n(S),h=f(S.equity_curve),te=S.monthly_returns||{},I=Array.isArray(S.trade_history)?S.trade_history:[],_={id:s,name:u(s),summary:l,equityCurve:h,monthlyReturns:te,trades:I};let m=null;if(k.value){const P=Number(o.value)||1e5;m={name:"现金基准",points:h.map(y=>({date:y.date,value:P}))}}return{success:!0,mode:"single",strategies:[_],primary:_,benchmark:m,period:(l.start_date||"")+" ~ "+(l.end_date||"")}}function N(s,S){const l=S.strategy_results||{},h=s.map(_=>{const m=l[_];if(!m)return null;const P=n(m);return{id:_,name:u(_),summary:P,equityCurve:f(m.equity_curve),monthlyReturns:m.monthly_returns||{},trades:Array.isArray(m.trade_history)?m.trade_history:[]}}).filter(_=>_&&_.summary.success!==!1),te=h.length?h[0]:null;let I=null;return k.value&&(I={name:"等权组合基准",points:f(S.portfolio_equity)}),{success:h.length>0,mode:"multi",strategies:h,primary:te,benchmark:I,period:te?te.summary.start_date+" ~ "+te.summary.end_date:""}}const q=v(()=>{const s=x.value;return!s||!s.primary?[]:t.buildMetrics?t.buildMetrics(s.primary.summary):[]}),z=v(()=>{const s=x.value;return!s||!s.primary||!s.primary.monthlyReturns?[]:t.buildAnnualReturns?t.buildAnnualReturns(s.primary.monthlyReturns):[]}),R=v(()=>{const s=x.value;return!s||!s.primary?[]:(s.primary.trades||[]).slice().sort((S,l)=>String(l.date||"").localeCompare(String(S.date||"")))}),B=v(()=>{const s=x.value;return!s||!s.strategies||s.strategies.length<2?[]:s.strategies.map(S=>({name:S.name,metrics:t.buildMetrics?t.buildMetrics(S.summary):[]}))}),W=v(()=>{const s=x.value;return!s||!s.primary?null:t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(s.primary.equityCurve):null});async function U(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const S=i.value;if(!S.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const l=p.value,h={start_date:l&&l[0]||void 0,end_date:l&&l[1]||void 0},te={"Content-Type":"application/json"};C.value=!0,x.value=null,b.value="";try{if(S.length===1){const I=Object.assign({},h,{initial_capital:Number(o.value)||1e5,commission_rate:Number(M.value)||3e-4}),_=await fetch("/api/backtest/"+encodeURIComponent(S[0]),{method:"POST",headers:te,body:JSON.stringify(I)});if(!_.ok){const P=await _.json().catch(()=>({}));throw new Error(P.detail||"回测失败")}const m=await _.json();if(!m.success)throw new Error(m.message||"回测失败");x.value=E(S[0],m)}else{const I=await fetch("/api/backtest/multi",{method:"POST",headers:te,body:JSON.stringify(Object.assign({},h,{strategy_ids:S}))});if(!I.ok){const m=await I.json().catch(()=>({}));throw new Error(m.detail||"回测失败")}const _=await I.json();if(!_.success)throw new Error(_.message||"多策略回测失败");if(x.value=N(S,_.data||{}),!x.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(I){b.value=I&&I.message?I.message:"回测失败",ElementPlus.ElMessage.error(b.value)}finally{C.value=!1}}function Y(){const s=x.value,S={dates:[],series:[]};if(!s)return S;const l=s.strategies.map(te=>({name:te.name,points:te.equityCurve}));s.benchmark&&s.benchmark.points&&s.benchmark.points.length&&l.push({name:s.benchmark.name,points:s.benchmark.points});const h=t.buildNavSeries?t.buildNavSeries(l):S;return Z(h,s)}function Z(s,S){const l=j=>(getComputedStyle(document.documentElement).getPropertyValue(j)||"").trim(),h={primary:l("--qc-primary-600")||"#b8922a",success:l("--color-success")||"#4CAF50",accent:l("--color-accent")||"#F59E0B",info:l("--color-info")||"#1976d2",ai:l("--color-ai")||"#6366f1",textPrimary:l("--text-primary")||"#1f2937",textSecondary:l("--text-secondary")||"#6b7280",border:l("--border-light")||"#e5e7eb",up:l("--color-rise")||"#E63946",down:l("--color-fall")||"#2E7D32",bg:l("--bg-card")||"#ffffff"},te=[h.primary,h.success,h.accent,h.info,h.ai],_=h.bg.length===7&&parseInt(h.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",m=t.computeMaxDrawdownRegion?t.computeMaxDrawdownRegion(S.primary?S.primary.equityCurve:[]):null,P=m&&m.peakDate&&m.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:h.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+m.maxDrawdown+"%",xAxis:m.peakDate,itemStyle:{color:h.down}},{xAxis:m.troughDate}]]}:void 0,y=s.series.map((j,se)=>{const J=S.benchmark&&j.name===S.benchmark.name,L=te[se%te.length];return{name:j.name,type:"line",data:j.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:J?2:2.4,type:J?"dashed":"solid",color:L},itemStyle:{color:L},emphasis:{focus:"series"},...se===0&&P?{markArea:P}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:_,borderColor:h.border,textStyle:{color:h.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:h.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:s.dates,boundaryGap:!1,axisLine:{lineStyle:{color:h.border}},axisLabel:{color:h.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:h.textSecondary,fontSize:11},splitLine:{lineStyle:{color:h.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:h.border,textStyle:{color:h.textSecondary,fontSize:10}}],series:y}}function F(s){if(!s){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",Y,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function ee(){const s=x.value;if(!s||!s.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const S=s.strategies.map(y=>({name:y.name,points:y.equityCurve}));s.benchmark&&S.push({name:s.benchmark.name,points:s.benchmark.points});const l=t.buildNavSeries?t.buildNavSeries(S):{dates:[],series:[]},h=t.tradeActionText||(y=>y),te=R.value.map(y=>({date:y.date,stock:y.stock,action:h(y.action),reason:y.reason})),I=t.buildBacktestCsv?t.buildBacktestCsv({metrics:q.value,dates:l.dates,series:l.series,trades:te}):"",_=new Blob(["\uFEFF"+I],{type:"text/csv;charset=utf-8"}),m=URL.createObjectURL(_),P=document.createElement("a");P.href=m,P.download="backtest-"+s.strategies.map(y=>y.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",P.click(),URL.revokeObjectURL(m),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function A(s,S){return s==null||s===""||isNaN(Number(s))?"--":Number(s).toFixed(S??2)}return{btStrategyOptions:r,btSelectedStrategies:i,toggleBtStrategy:T,btDateRange:p,btCapital:o,btCommissionRate:M,btIncludeBenchmark:k,btRunning:C,btResult:x,btError:b,btMetrics:q,btAnnualReturns:z,btTrades:R,btStrategyMetricsRows:B,btDrawdownRegion:W,runBacktestWorkbench:U,exportBacktestCSV:ee,registerBacktestNavChart:F,btFmtNum:A}}}})();(function(){const{ref:a,computed:e,watch:v,onUnmounted:t}=Vue,c=o=>(getComputedStyle(document.documentElement).getPropertyValue(o)||"").trim(),d=72,w={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},r={stock:"股票",bond:"债券",commodity:"大宗商品",cash:"现金"},i={"🌱":"sprout","🔥":"flame","🌾":"wheat","❄️":"snowflake","📈":"trending-up","📉":"trending-down","📊":"bar-chart-3","💹":"line-chart","🏭":"factory","💰":"banknote","🛢":"fuel"},p={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const o=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"sprout",color:"var(--state-success-solid)",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),M=a({}),k=a(!1),C=a({}),x=a({cycles:[]}),b=a([]),D=a(0),T=a(!1),u=a({autoRefresh:!0,refreshInterval:300}),n=a(""),f=a(""),E=a(!1),N=a("");let q=null;const z={x:0,y:0},R=e(()=>{const X=M.value;return["recession","recovery","overheat","stagflation"].map(Pe=>{const ne=X[Pe]||{};return{key:Pe,name:ne.name||Pe,icon:i[ne.icon]||"bar-chart-3",color:ne.color||c("--text-tertiary")||"#888",bg:"color-mix(in srgb, "+(ne.color||"var(--text-tertiary)")+" 14%, var(--bg-card))",textColor:"color-mix(in srgb, "+(ne.color||"var(--text-tertiary)")+" 48%, var(--qc-foreground))",tagline:ne.allocation&&p[Pe]||""}})}),B=e(()=>{var oe,Pe,ne,ge;const X=o.value.indicators||{};return[{key:"pmi",label:"PMI",value:(oe=X.pmi)==null?void 0:oe.toFixed(2),color:X.pmi>=50?c("--color-success")||"#43a047":c("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((Pe=X.gdp_growth)==null?void 0:Pe.toFixed(2))+"%",color:c("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((ne=X.cpi)==null?void 0:ne.toFixed(2))+"%",color:X.cpi>1.2?c("--color-danger")||"#E53935":c("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((ge=X.m2_growth)==null?void 0:ge.toFixed(2))+"%",color:c("--color-success")||"#43a047"}]}),W=X=>{X=X||{};const oe=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],Pe=()=>c("--color-success")||"#43a047",ne=()=>c("--color-danger")||"#E53935",ge=()=>c("--color-warning")||"#FF9800",Me={宽松:Pe(),中位:ge(),偏低:ne(),高增长:Pe(),承压:ne(),不利:ne()};return oe.map(ce=>{const he=X[ce.key]||{},xe=he.score||0,le=Math.min(100,Math.max(5,(xe+2)*25)),ae=xe>=.3?"var(--bar-fill-ok)":xe>=-.3?"var(--bar-fill-warn)":"var(--bar-fill-bad)",ve=xe>=0?"var(--state-success-text)":"var(--state-danger-text)";return{key:ce.key,label:ce.label,scoreStr:xe.toFixed(2),level:he.level||"—",barWidth:le,barColor:ae,scoreColor:ve,color:Me[he.level]||"var(--text-tertiary)"}})},U=e(()=>W(o.value.dimension_scores)),Y=e(()=>W(C.value._dimensions)),Z=e(()=>{var oe;const X=((oe=o.value.confidence)==null?void 0:oe.level)||"";return X==="高"?"var(--state-success-text)":X==="中"?"var(--state-warning-text)":X==="低"?"var(--state-danger-text)":"var(--text-secondary)"}),F=e(()=>{var ne,ge,Me,ce;const X=M.value,oe={recovery:0,overheat:1,stagflation:2,recession:3},Pe={};for(const[he,xe]of Object.entries(X))Pe[he]={name:xe.name,icon:xe.icon,color:xe.color,lightColor:xe.bg_color,duration:"~"+(((ne=xe.historical_stats)==null?void 0:ne.avg_duration_months)||18)+"个月",order:oe[he]||0,period:((Me=(ge=xe.case_studies)==null?void 0:ge[0])==null?void 0:Me.split("：")[0])||"",avgMonths:((ce=xe.historical_stats)==null?void 0:ce.avg_duration_months)||18};return Pe}),ee=e(()=>{var xe,le;const X=o.value.stage,Pe={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[X]||{x:150,y:150},ne=o.value.dimension_scores||{},ge=((xe=ne.growth)==null?void 0:xe.score)||0,Me=((le=ne.inflation)==null?void 0:le.score)||0,ce=Math.max(-30,Math.min(30,ge*15)),he=Math.max(-30,Math.min(30,-Me*15));return{x:Pe.x+ce,y:Pe.y+he,prevX:z.x,prevY:z.y}}),A=e(()=>{var ne;const X=Math.min(100,((ne=o.value.timing)==null?void 0:ne.progress_percent)||0),oe=o.value.color||"var(--state-success-solid)",Pe=X>100?"linear-gradient(90deg, "+oe+", var(--state-warning-solid))":oe;return{width:X+"%",background:Pe}});function s(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[o.value.stage]||0}function S(){var X,oe;return((oe=(X=o.value)==null?void 0:X.timing)==null?void 0:oe.progress_percent)||0}function l(){var X,oe;return((oe=(X=o.value)==null?void 0:X.timing)==null?void 0:oe.duration_months)||0}function h(){var X,oe;return((oe=(X=o.value)==null?void 0:X.timing)==null?void 0:oe.avg_duration_months)||18}function te(X){var ge,Me;const oe=F.value,Pe=((ge=oe[o.value.stage])==null?void 0:ge.order)||0;return(((Me=oe[X])==null?void 0:Me.order)||0)<Pe}function I(X){return w[X]||X}function _(X){return r[X]||X}function m(X){const oe=["var(--state-success-tint)","var(--state-warning-tint)","var(--state-info-tint)","var(--qc-muted)"];return oe[X-1]||oe[3]}async function P(){try{const oe=await(await fetch("/api/market/merrill-clock/stages")).json();oe.success&&oe.data&&(M.value=oe.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function y(){T.value=!0;try{se();const oe=await(await fetch("/api/market/merrill-clock/timeline")).json();if(oe.success&&oe.data){const Pe=Array.isArray(oe.data.cycles)?oe.data.cycles.slice().reverse():[];x.value={cycles:Pe}}}catch{console.warn("获取美林时钟时间轴失败")}finally{T.value=!1}}async function j(X){await L(X)}async function se(){try{const oe=await(await fetch("/api/market/merrill-clock/snapshots?limit=30")).json();oe&&oe.success&&oe.data&&(b.value=oe.data.items||[],D.value=oe.data.total||0)}catch{console.warn("获取美林时钟评估轨迹失败")}}async function J(){var X,oe;try{const ne=await(await fetch("/api/market/merrill-clock")).json(),ge=ne.stage||"recovery",Me=M.value[ge]||{};if(o.value={...Me,...ne,stage_cn:ne.stage_cn||Me.stage_cn||"",stage_name:ne.stage_name||Me.name||"",name:ne.name||Me.name||"复苏期"},n.value=new Date().toLocaleTimeString("zh-CN"),N.value&&N.value!==ge){const ce=M.value,he=((X=ce[N.value])==null?void 0:X.name)||N.value,xe=((oe=ce[ge])==null?void 0:oe.name)||ge;ElementPlus.ElMessage({message:"美林时钟阶段切换："+he+" → "+xe,type:"warning",duration:6e3,showClose:!0})}N.value=ge}catch(Pe){console.error("获取美林时钟失败:",Pe);const ne=M.value.recovery||{};o.value={...ne,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function L(X){var Pe;k.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",C.value=M.value[X]||M.value.recovery||{};const oe=((Pe=o.value)==null?void 0:Pe.stage)===X;C.value._isCurrent=oe,oe&&o.value&&(C.value._nextPrediction=o.value.next_stage_prediction,C.value._confidence=o.value.confidence,C.value._stage=o.value.stage,C.value._dimensions=o.value.dimension_scores);try{const ge=await(await fetch("/api/market/merrill-clock/stage/"+X)).json();if(ge.success&&ge.data){const Me={...M.value[X],...ge.data};Me._is_current!==void 0&&(Me._isCurrent=Me._is_current),Me._current_timing&&(Me._currentTiming=Me._current_timing),Me._last_period&&(Me._lastPeriod=Me._last_period),C.value._nextPrediction&&(Me._nextPrediction=C.value._nextPrediction),C.value._confidence&&(Me._confidence=C.value._confidence),C.value._stage&&(Me._stage=C.value._stage),C.value._dimensions&&(Me._dimensions=C.value._dimensions),Object.assign(C.value,Me)}}catch(ne){console.warn("获取阶段详情失败:",ne)}}function $(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:u.value.autoRefresh,refreshInterval:u.value.refreshInterval})),u.value.autoRefresh?(clearInterval(q),q=setInterval(J,u.value.refreshInterval*1e3)):clearInterval(q),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function ie(){E.value=!0,f.value="";try{const oe=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();oe.success?(f.value="重评估完成："+(oe.stage_name||oe.stage),await J(),ElementPlus.ElMessage.success("重评估完成")):(f.value=oe.message||"重评估失败",ElementPlus.ElMessage.error(oe.message||"重评估失败"))}catch{f.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{E.value=!1}}function me(){const X=localStorage.getItem("merrill_clock_config");if(X)try{const oe=JSON.parse(X);u.value={...u.value,...oe}}catch{}u.value.autoRefresh&&(q=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),J()},u.value.refreshInterval*1e3))}function Te(){q&&clearInterval(q)}return t(()=>{Te()}),{merrillData:o,merrillStagesConfig:M,showMerrillDetail:k,merrillDetailData:C,merrillTimeline:x,merrillSnapshots:b,merrillSnapshotsTotal:D,fetchMerrillSnapshots:se,timelineLoading:T,merrillClockConfig:u,merrillClockLastUpdated:n,merrillReevalResult:f,merrillReevalLoading:E,stages:R,indicatorList:B,dimensionScoreList:U,detailDimensionScoreList:Y,confidenceColor:Z,timelineStages:F,clockPosition:ee,merrillProgressStyle:A,FULL_CYCLE_MONTHS:d,getStageAngle:s,getCycleProgress:S,getCurrentStageMonths:l,getStageTotalMonths:h,isStageCompleted:te,getCharLabel:I,getAssetName:_,getRankColor:m,fetchMerrillStages:P,fetchMerrillClock:J,loadMerrillTimeline:y,showTimelineStage:j,showStageDetail:L,saveMerrillClockConfig:$,doMerrillReevaluate:ie,startAutoRefresh:me,stopAutoRefresh:Te}}})();(function(){function a(r){return getComputedStyle(document.documentElement).getPropertyValue(r).trim()}var e=[210,28,165,290,348,190,52,250];function v(){var r=!1;try{r=document.documentElement.getAttribute("data-theme-mode")==="dark"}catch{}var i=r?62:58,p=r?62:40;return e.map(function(o){return"hsl("+o+", "+i+"%, "+p+"%)"})}function t(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:a("--chart-bg")||"transparent",color:v(),legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const c=[];function d(r){typeof r=="function"&&c.push(r)}function w(){c.slice().forEach(function(r){try{r()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:t,categoricalPalette:v,registerChart:d,refreshAllCharts:w,init(){return{getEChartsTheme:t,registerChart:d,refreshAllCharts:w}}}})();(function(){const{ref:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const v=e("qcState");try{const d=localStorage.getItem("quant_sidebar_collapsed");d!==null&&v.sidebarCollapsed&&(v.sidebarCollapsed.value=d==="1")}catch{}if(!v)return{};const t=async d=>{if(window.__quantGoPage){await window.__quantGoPage(d.key,d.subPages[0]||"");return}v.currentPage.value=d.key,v.currentSubPage.value=d.subPages[0]||""},c=()=>{v.sidebarCollapsed.value=!v.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",v.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:v.menus,currentPage:v.currentPage,sidebarCollapsed:v.sidebarCollapsed,navigate:t,toggle:c,sanitizeHtml:v.sanitizeHtml,keyClick:v.keyClick,t:v.t}}}})();const ga={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(a){const e=a,v={"layout-dashboard":Qv,calendar:Yv,bot:Gv,"flask-conical":Uv,zap:Wv,settings:Kv,"chevron-down":Bv,"chevron-right":Hv,"chevron-left":Fv,menu:Vv,search:jv,bell:Ov,sun:Nv,moon:Iv,user:Lv,"user-round":Av,home:zv,x:Rv,database:Pv,activity:Dv,clock:Tv,"bar-chart-3":Mv,shield:Ev,"hard-drive":qv,"file-text":Cv,users:Sv,cpu:xv,"pie-chart":_v,info:kv,"log-out":wv,palette:bv,languages:yv,refresh:hv,download:gv,"external-link":pv,command:fv,sparkles:mv,"trending-up":vv,"trending-down":uv,"circle-dot":dv,check:cv,"alert-triangle":rv,loader:ov,"arrow-left":iv,"arrow-right":lv,eye:nv,"eye-off":sv,lock:av,"sliders-horizontal":tv,play:ev,history:Zu,layers:Xu,"line-chart":$u,target:Ju,"search-check":Qu,star:Yu,"message-circle":Gu,"calendar-days":Uu,"calendar-range":Wu,"calendar-check":Ku,brain:Bu,lightbulb:Hu,"octagon-x":Fu,flag:Vu,package:ju,"clipboard-list":Ou,pin:Nu,"radio-tower":Iu,gauge:Lu,landmark:Au,"candlestick-chart":zu,wallet:Ru,"badge-check":Pu,key:Du,factory:Tu,trophy:Mu,rocket:Eu,flame:qu,"map-pin":Cu,"scroll-text":Su,"book-open":xu,dna:_u,"bar-chart":ku,plus:wu,"star-off":bu,upload:yu,gem:hu,"folder-open":gu,link:pu,save:fu,"trash-2":mu,pause:vu,"help-circle":uu,"play-circle":du,pencil:cu,folder:ru,code:ou,sprout:iu,wheat:lu,snowflake:nu,fuel:su,banknote:au,send:tu,inbox:eu,"wifi-off":Zd,"check-circle-2":Xd,"x-circle":$d},t=()=>v[e.name]||v["circle-dot"];return(c,d)=>(pe(),na(Od(t()),{size:a.size,"stroke-width":a.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},ha=(a,e)=>{const v=a.__vccOpts||a;for(const[t,c]of e)v[t]=c;return v},Jv={name:"qc-sidebar",components:{AppIcon:ga},setup(){const a=ka("qcState");if(!a)return{};const e=ct(()=>a.menus&&a.menus.value||[]),v=ct(()=>a.currentPage&&a.currentPage.value||""),t=ct(()=>a.navMode&&a.navMode.value||"subnav"),c=ct({get:()=>a.sidebarCollapsed&&a.sidebarCollapsed.value||!1,set:T=>{a.sidebarCollapsed&&(a.sidebarCollapsed.value=T)}}),d=Pt({}),w={research:"量化投研",platform:"平台管理"},r=["research","platform"],i=T=>v.value===T.key,p=(T,u)=>v.value===T.key&&a.currentSubPage&&a.currentSubPage.value===u,o=T=>Array.isArray(T.subPages)&&T.subPages.length>1,M=(T,u)=>a.subPageNames&&a.subPageNames[u]||u;function k(T){!o(T)||c.value||(d.value[T.key]=!d.value[T.key])}function C(){e.value.forEach(T=>{d.value[T.key]===void 0&&(d.value[T.key]=i(T))})}async function x(T,u){const n=u||T.subPages&&T.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(T.key,n):(a.currentPage.value=T.key,a.currentSubPage&&(a.currentSubPage.value=n)),a.navigateTo&&a.navigateTo(T.key,n)}function b(){c.value=!c.value;try{localStorage.setItem("sidebar_collapsed",c.value?"1":"0")}catch{}}function D(T){if(T.ctrlKey&&T.key.toLowerCase()==="b"&&(T.preventDefault(),b()),!T.ctrlKey&&!T.metaKey&&!T.altKey&&(T.key==="ArrowDown"||T.key==="ArrowUp")){const u=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),n=u.indexOf(document.activeElement);if(n>=0){T.preventDefault();const f=u[(n+(T.key==="ArrowDown"?1:u.length-1))%u.length];f&&f.focus()}}}return Ia(()=>{C(),document.addEventListener("keydown",D)}),ss(()=>document.removeEventListener("keydown",D)),{state:a,menus:e,currentPage:v,navMode:t,sidebarCollapsed:c,expandedMenus:d,GROUP_LABELS:w,GROUPS:r,isActive:i,isChildActive:p,hasChildren:o,subLabel:M,toggleSubmenu:k,navigate:x,toggleCollapse:b}}},$v={class:"qc-sidebar-logo"},Xv={key:0,class:"qc-logo-text"},Zv={class:"qc-sidebar-nav"},em={key:0,class:"qc-nav-group"},tm={key:0,class:"qc-nav-group-label"},am=["href","aria-current","onClick"],sm={key:0,class:"qc-sidebar-label"},nm={key:1,class:"qc-nav-badge"},lm=["aria-expanded","aria-controls","onClick"],im=["id"],om=["href","aria-current","onClick"],rm={class:"qc-sidebar-child-label"},cm={class:"qc-sidebar-footer"},dm=["aria-expanded","aria-label","title"];function um(a,e,v,t,c,d){const w=Ft("AppIcon"),r=Ft("el-tooltip");return pe(),be("nav",{class:ut(["qc-sidebar",{"is-collapsed":t.sidebarCollapsed}]),"aria-label":"主导航"},[qe("div",$v,[e[1]||(e[1]=jd('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),t.sidebarCollapsed?We("",!0):(pe(),be("span",Xv,Ke(t.state.t("login.title")),1))]),qe("div",Zv,[(pe(!0),be(mt,null,Ct(t.GROUPS,i=>(pe(),be(mt,{key:i},[t.menus.some(p=>p.group===i)?(pe(),be("div",em,[t.sidebarCollapsed?We("",!0):(pe(),be("span",tm,Ke(t.GROUP_LABELS[i]),1)),(pe(!0),be(mt,null,Ct(t.menus.filter(p=>p.group===i),p=>(pe(),be(mt,{key:p.key},[qe("div",{class:ut(["qc-sidebar-item",{"has-children":t.navMode==="tree"&&t.hasChildren(p),"is-child-open":t.navMode==="tree"&&t.expandedMenus[p.key]}])},[pt(r,{content:p.name,placement:"right","show-after":300,disabled:!t.sidebarCollapsed},{default:sa(()=>[qe("a",{class:ut(["qc-sidebar-link",{"is-active":t.isActive(p)}]),href:"#"+p.key,"aria-current":t.isActive(p)?"page":null,onClick:zt(o=>t.navigate(p),["prevent"])},[pt(w,{name:p.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),t.sidebarCollapsed?We("",!0):(pe(),be("span",sm,Ke(p.name),1)),!t.sidebarCollapsed&&p.badge?(pe(),be("span",nm,Ke(p.badge),1)):We("",!0)],10,am)]),_:2},1032,["content","disabled"]),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(p)?(pe(),be("button",{key:0,class:ut(["qc-sidebar-chevron",{"is-open":t.expandedMenus[p.key]}]),"aria-expanded":!!t.expandedMenus[p.key],"aria-controls":"submenu-"+p.key,"aria-label":"展开子菜单",onClick:o=>t.toggleSubmenu(p)},[pt(w,{name:"chevron-down",size:14})],10,lm)):We("",!0)],2),!t.sidebarCollapsed&&t.navMode==="tree"&&t.hasChildren(p)&&t.expandedMenus[p.key]?(pe(),be("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+p.key},[(pe(!0),be(mt,null,Ct(p.subPages,o=>(pe(),be("a",{key:o,class:ut(["qc-sidebar-item qc-sidebar-child",{"is-active":t.isChildActive(p,o)}]),href:"#"+p.key+"-"+o,"aria-current":t.isChildActive(p,o)?"page":null,onClick:zt(M=>t.navigate(p,o),["prevent"])},[qe("span",rm,Ke(t.subLabel(p,o)),1)],10,om))),128))],8,im)):We("",!0)],64))),128))])):We("",!0)],64))),128))]),qe("div",cm,[qe("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!t.sidebarCollapsed,"aria-label":t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:t.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:e[0]||(e[0]=(...i)=>t.toggleCollapse&&t.toggleCollapse(...i))},[pt(w,{name:t.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,dm)])],2)}const vm=ha(Jv,[["render",um]]),mm={name:"qc-header",components:{AppIcon:ga},setup(){const a=ka("qcState");if(!a)return{};const e=Pt(!1),v=ct(()=>a.currentUser&&a.currentUser.value||null),t=ct(()=>a.navMode&&a.navMode.value||"subnav"),c=ct(()=>{const ne=a.currentPage&&a.currentPage.value,ge=(a.menus&&a.menus.value||[]).find(Me=>Me.key===ne);return!!(ge&&ge.subPages&&ge.subPages.length)}),d=ct(()=>{const ne=a.currentPage&&a.currentPage.value,ge=a.currentPageName&&a.currentPageName.value;if(ge)return ge;const Me=(a.menus&&a.menus.value||[]).find(ce=>ce.key===ne);return Me&&Me.name||ne||""}),w=ct(()=>{const ne=a.currentSubPage&&a.currentSubPage.value;return ne&&a.subPageNames&&a.subPageNames[ne]||ne||""}),r=Pt(typeof window<"u"?window.innerWidth<768:!1);function i(){r.value=window.innerWidth<768}Ia(()=>window.addEventListener("resize",i)),ss(()=>window.removeEventListener("resize",i));const p=Pt(!1),o=ct(()=>{const ne=a.currentSubPage&&a.currentSubPage.value;return ne&&a.subPageNames&&a.subPageNames[ne]||ne||""}),M=ct(()=>{const ne=a.currentPage&&a.currentPage.value,ge=(a.menus&&a.menus.value||[]).find(Me=>Me.key===ne);return(ge&&ge.subPages||[]).map(Me=>({key:Me,label:a.subPageNames&&a.subPageNames[Me]||Me}))});function k(){p.value=!p.value}function C(){p.value=!1}function x(ne){p.value=!1,a.activateTab&&a.activateTab(a.currentPage.value,ne)}const b=ct(()=>(a.currentTheme&&a.currentTheme.value)==="dark"),D=Pt(!1),T=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],u=ct(()=>{const ne=T.find(ge=>ge.value===t.value);return ne&&ne.label||t.value});function n(){D.value=!D.value}function f(){D.value=!1}function E(ne){D.value=!1,a.setNavMode&&a.setNavMode(ne)}const N=ct({get:()=>a.searchQuery&&a.searchQuery.value||"",set:ne=>{a.searchQuery&&(a.searchQuery.value=ne)}}),q=Pt(!1),z=Pt([]),R=Pt(!1),B=Pt(!1);function W(){const ne=localStorage.getItem("quant_token")||"";return ne?{Authorization:"Bearer "+ne,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function U(){R.value=!0,B.value=!1;try{const ge=await(await fetch("/api/alerts/history?limit=8",{headers:W()})).json();ge&&ge.success?z.value=ge.history||[]:z.value=[]}catch{B.value=!0,z.value=[]}finally{R.value=!1}}function Y(){q.value=!q.value,q.value&&U()}function Z(){q.value=!1}function F(){q.value=!1,a.activateTab&&a.activateTab("system","notification")}const ee=Pt(!1),A=a.themeHues||[45,220,0,140,270,320,180,25,250,-1],s=ct(()=>{const ne=a.themeHue&&a.themeHue.value;return Number.isFinite(ne)?ne:45}),S=ct(()=>a.themeMode&&a.themeMode.value||"system"),l=[{k:"compact",n:"紧凑"},{k:"comfortable",n:"标准"},{k:"spacious",n:"宽松"}],h=ct(()=>a.density&&a.density.value||"comfortable");function te(ne){a.changeDensity&&a.changeDensity(ne)}function I(ne){return a.hueColor?a.hueColor(ne):"hsl("+ne+", 75%, 42%)"}const _={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色","-1":"中性"};function m(ne){return a.hueName?a.hueName(ne):_[ne]||"自定义 "+ne}function P(){ee.value=!ee.value}function y(){ee.value=!1}function j(ne){a.changeThemeMode&&a.changeThemeMode(ne)}function se(ne){a.changeThemeHue&&a.changeThemeHue(ne)}function J(){a.changeThemeMode&&a.changeThemeMode(b.value?"light":"dark")}function L(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}a.sidebarCollapsed&&(a.sidebarCollapsed.value=!a.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",a.sidebarCollapsed.value?"1":"0")}catch{}}function $(){e.value=!e.value}function ie(){e.value=!1}function me(ne){return()=>{ie(),ne&&ne()}}function Te(){ie(),a.handleLogout&&a.handleLogout()}const X=ct(()=>a.marketData&&a.marketData.value||{}),oe=Pt(typeof window<"u"&&localStorage.getItem("qc.hideNonTradingBanner")==="1");return{marketData:X,bannerDismissed:oe,dismissBanner:()=>{oe.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},state:a,showUserMenu:e,currentUser:v,isDark:b,searchQuery:N,navMode:t,crumbRoot:d,crumbSub:w,hasToptabs:c,toggleThemeQuick:J,toggleSidebar:L,openUserMenu:$,closeUserMenu:ie,menuItem:me,handleLogout:Te,openBellMenu:q,notifItems:z,notifLoading:R,notifError:B,toggleBell:Y,closeBell:Z,goNotificationCenter:F,openThemeMenu:ee,themeHues:A,themeHue:s,themeMode:S,hueColor:I,hueName:m,toggleThemeMenu:P,closeThemeMenu:y,pickThemeMode:j,pickThemeHue:se,DENSITY_MODES:l,density:h,pickDensity:te,openNavModeMenu:D,NAV_MODES:T,navModeLabel:u,toggleNavModeMenu:n,closeNavModeMenu:f,pickNavMode:E,isMobile:r,openSubnavPicker:p,currentSubLabel:o,subnavOptions:M,toggleSubnavPicker:k,closeSubnavPicker:C,pickSubnav:x}}},fm={class:"qc-header-wrap"},pm={key:0,class:"non-trading-banner",role:"status"},gm={class:"qc-header"},hm={class:"visually-hidden"},ym={class:"qc-header-left"},bm=["aria-label"],wm={key:0,class:"qc-header-subnav"},km=["aria-expanded"],_m={class:"qc-subnav-picker-label"},xm={key:0,class:"qc-subnav-picker-menu",role:"menu"},Sm=["onClick"],Cm={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},qm={class:"qc-crumb qc-crumb-root"},Em={class:"qc-crumb qc-crumb-sub"},Mm={key:1,class:"qc-crumb qc-crumb-root"},Tm={class:"qc-header-center"},Dm={key:0,class:"qc-search-sublabel"},Pm={class:"qc-header-right"},Rm={class:"qc-hdr-pop"},zm=["aria-expanded"],Am={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},Lm={key:0,class:"qc-bell-state"},Im={key:1,class:"qc-bell-state"},Nm={key:2,class:"qc-bell-state"},Om={key:3,class:"qc-bell-list"},jm={class:"qc-bell-item-title"},Vm={class:"qc-bell-item-meta"},Fm={key:0},Hm={class:"qc-bell-item-time"},Bm={class:"qc-hdr-pop"},Km=["aria-expanded"],Wm={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},Um={class:"qc-theme-modes"},Gm=["onClick"],Ym={class:"qc-theme-swatches"},Qm=["title","aria-label","onClick"],Jm={key:0,class:"qc-theme-swatch-check"},$m={class:"qc-theme-custom-label"},Xm={class:"qc-theme-modes"},Zm=["onClick"],ef={key:0,class:"qc-navmode-switch"},tf=["aria-label","title","aria-expanded"],af={key:0,class:"qc-navmode-menu",role:"menu"},sf=["onClick","onKeydown"],nf={class:"qc-navmode-item-main"},lf={class:"qc-user-menu"},of=["aria-label","aria-expanded"],rf={key:0,class:"qc-user-dropdown",role:"menu"},cf={class:"qc-user-dropdown-header"},df={class:"qc-user-dropdown-name"},uf={key:0,class:"qc-user-dropdown-chip"};function vf(a,e,v,t,c,d){var M,k,C,x,b,D,T;const w=Ft("AppIcon"),r=Ft("qc-top-tabs"),i=Ft("el-autocomplete"),p=Ft("el-slider"),o=Vd("click-outside");return pe(),be("div",fm,[t.marketData&&t.marketData.is_trading_day===!1&&!t.bannerDismissed?(pe(),be("div",pm,[pt(w,{name:"alert-triangle",size:14}),e[15]||(e[15]=qe("span",null,"今日非交易日 · 当前展示最近交易日历史数据",-1)),qe("button",{class:"non-trading-banner-close",onClick:e[0]||(e[0]=(...u)=>t.dismissBanner&&t.dismissBanner(...u)),"aria-label":"关闭提示"},"×")])):We("",!0),qe("header",gm,[qe("h1",hm,Ke(t.crumbRoot||"量化日历"),1),qe("div",ym,[qe("button",{class:"qc-icon-btn","aria-label":(M=t.state.sidebarCollapsed)!=null&&M.value?"展开侧边栏":"折叠侧边栏",onClick:e[1]||(e[1]=(...u)=>t.toggleSidebar&&t.toggleSidebar(...u))},[pt(w,{name:"menu",size:20})],8,bm),t.isMobile?Ea((pe(),be("div",wm,[qe("button",{class:"qc-subnav-picker","aria-expanded":t.openSubnavPicker,onClick:e[2]||(e[2]=(...u)=>t.toggleSubnavPicker&&t.toggleSubnavPicker(...u))},[qe("span",_m,Ke(t.currentSubLabel||"二级"),1),pt(w,{name:"chevron-down",size:14})],8,km),t.openSubnavPicker?(pe(),be("div",xm,[(pe(!0),be(mt,null,Ct(t.subnavOptions,u=>(pe(),be("div",{key:u.key,class:ut(["qc-subnav-picker-item",{"is-active":u.key===(t.state.currentSubPage&&t.state.currentSubPage.value)}]),role:"menuitem",onClick:n=>t.pickSubnav(u.key)},Ke(u.label),11,Sm))),128))])):We("",!0)])),[[o,t.closeSubnavPicker]]):We("",!0),t.navMode==="tree"&&!t.isMobile?(pe(),be("div",Cm,[qe("span",qm,Ke(t.crumbRoot),1),t.crumbSub?(pe(),be(mt,{key:0},[e[16]||(e[16]=qe("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),qe("span",Em,Ke(t.crumbSub),1)],64)):We("",!0)])):We("",!0),t.navMode==="toptab"&&!t.isMobile?(pe(),be(mt,{key:2},[t.hasToptabs?(pe(),na(r,{key:0})):(pe(),be("span",Mm,Ke(t.crumbRoot),1))],64)):We("",!0)]),qe("div",Tm,[pt(i,{class:"qc-header-search",modelValue:t.searchQuery,"onUpdate:modelValue":e[3]||(e[3]=u=>t.searchQuery=u),"fetch-suggestions":t.state.searchStocks,placeholder:t.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:t.state.onSearchSelect},{prefix:sa(()=>[pt(w,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:sa(()=>[...e[17]||(e[17]=[qe("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:sa(u=>{var n,f,E,N,q;return[qe("span",null,Ke((n=u==null?void 0:u.item)==null?void 0:n.icon)+" "+Ke(((f=u==null?void 0:u.item)==null?void 0:f.label)||((E=u==null?void 0:u.item)==null?void 0:E.name)),1),(N=u==null?void 0:u.item)!=null&&N.subLabel?(pe(),be("span",Dm,Ke((q=u==null?void 0:u.item)==null?void 0:q.subLabel),1)):We("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),qe("div",Pm,[Ea((pe(),be("div",Rm,[qe("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":t.openBellMenu,onClick:e[4]||(e[4]=(...u)=>t.toggleBell&&t.toggleBell(...u))},[pt(w,{name:"bell",size:20})],8,zm),t.openBellMenu?(pe(),be("div",Am,[e[18]||(e[18]=qe("div",{class:"qc-bell-header"},"通知",-1)),t.notifLoading?(pe(),be("div",Lm,"加载中...")):t.notifError?(pe(),be("div",Im,"加载失败")):t.notifItems.length?(pe(),be("div",Om,[(pe(!0),be(mt,null,Ct(t.notifItems,(u,n)=>(pe(),be("div",{key:u.id||n,class:ut(["qc-bell-item",{"is-fail":u.ok===0}])},[qe("div",jm,Ke(u.title||u.event_type||"事件"),1),qe("div",Vm,[pa(Ke(u.channel||""),1),u.recipient?(pe(),be("span",Fm," · "+Ke(u.recipient),1)):We("",!0),qe("span",Hm,Ke(u.created_at||""),1)])],2))),128))])):(pe(),be("div",Nm,"暂无通知")),qe("button",{class:"qc-bell-footer",onClick:e[5]||(e[5]=(...u)=>t.goNotificationCenter&&t.goNotificationCenter(...u))},"前往通知中心 →")])):We("",!0)])),[[o,t.closeBell]]),Ea((pe(),be("div",Bm,[qe("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":t.openThemeMenu,onClick:e[6]||(e[6]=(...u)=>t.toggleThemeMenu&&t.toggleThemeMenu(...u))},[pt(w,{name:"palette",size:20})],8,Km),t.openThemeMenu?(pe(),be("div",Wm,[e[19]||(e[19]=qe("div",{class:"qc-theme-section-label"},"外观模式",-1)),qe("div",Um,[(pe(),be(mt,null,Ct([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],u=>qe("button",{key:u.k,class:ut(["qc-theme-mode",{"is-active":t.themeMode===u.k}]),onClick:n=>t.pickThemeMode(u.k)},Ke(u.n),11,Gm)),64))]),e[20]||(e[20]=qe("div",{class:"qc-theme-section-label"},"主题色",-1)),qe("div",Ym,[(pe(!0),be(mt,null,Ct(t.themeHues,u=>(pe(),be("button",{key:u,class:ut(["qc-theme-swatch",{"is-active":t.themeHue===u}]),style:Fd({background:t.hueColor(u)}),title:t.hueName(u),"aria-label":t.hueName(u),onClick:n=>t.pickThemeHue(u)},[t.themeHue===u?(pe(),be("span",Jm,"✓")):We("",!0)],14,Qm))),128))]),pt(p,{class:"qc-theme-slider","model-value":t.themeHue,min:0,max:359,step:1,size:"small",onChange:t.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),qe("div",$m,"自定义 "+Ke(t.themeHue)+"°",1),e[21]||(e[21]=qe("div",{class:"qc-theme-section-label"},"信息密度",-1)),qe("div",Xm,[(pe(!0),be(mt,null,Ct(t.DENSITY_MODES,u=>(pe(),be("button",{key:u.k,class:ut(["qc-theme-mode",{"is-active":t.density===u.k}]),onClick:n=>t.pickDensity(u.k)},Ke(u.n),11,Zm))),128))])])):We("",!0)])),[[o,t.closeThemeMenu]]),t.isMobile?We("",!0):Ea((pe(),be("div",ef,[qe("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+t.navModeLabel,title:"导航形态: "+t.navModeLabel,"aria-expanded":t.openNavModeMenu,onClick:e[7]||(e[7]=(...u)=>t.toggleNavModeMenu&&t.toggleNavModeMenu(...u))},[pt(w,{name:"layers",size:20})],8,tf),t.openNavModeMenu?(pe(),be("div",af,[(pe(!0),be(mt,null,Ct(t.NAV_MODES,u=>(pe(),be("div",{key:u.value,class:ut(["qc-user-dropdown-item qc-navmode-item",{"is-active":t.navMode===u.value}]),role:"menuitem",tabindex:"0",onClick:n=>t.pickNavMode(u.value),onKeydown:[aa(zt(n=>t.pickNavMode(u.value),["prevent"]),["enter"]),aa(zt(n=>t.pickNavMode(u.value),["prevent"]),["space"])]},[qe("div",nf,[qe("span",null,Ke(u.label),1),t.navMode===u.value?(pe(),na(w,{key:0,name:"check",size:14})):We("",!0)])],42,sf))),128))])):We("",!0)])),[[o,t.closeNavModeMenu]]),Ea((pe(),be("div",lf,[qe("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((k=t.currentUser)==null?void 0:k.username)||""),"aria-haspopup":"menu","aria-expanded":t.showUserMenu,onClick:e[8]||(e[8]=(...u)=>t.openUserMenu&&t.openUserMenu(...u))},Ke((((C=t.currentUser)==null?void 0:C.username)||"A").charAt(0).toUpperCase()),9,of),t.showUserMenu?(pe(),be("div",rf,[qe("div",cf,[qe("span",df,Ke((x=t.currentUser)==null?void 0:x.username),1),((b=t.currentUser)==null?void 0:b.role)==="guest"?(pe(),be("span",uf,"访客")):We("",!0)]),((D=t.currentUser)==null?void 0:D.role)==="admin"?(pe(),be("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[9]||(e[9]=u=>t.menuItem(t.state.resetSetupWizard)()),onKeydown:e[10]||(e[10]=aa(zt(u=>t.menuItem(t.state.resetSetupWizard)(),["prevent"]),["enter"]))},[pt(w,{name:"settings",size:16}),e[22]||(e[22]=pa(" 重新运行初始化向导 ",-1))],32)):We("",!0),((T=t.currentUser)==null?void 0:T.role)!=="guest"?(pe(),be("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:e[11]||(e[11]=u=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})()),onKeydown:e[12]||(e[12]=aa(zt(u=>t.menuItem(()=>{t.state.showChangePassword&&(t.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[pt(w,{name:"lock",size:16}),e[23]||(e[23]=pa(" 修改密码 ",-1))],32)):We("",!0),e[25]||(e[25]=qe("div",{class:"qc-user-dropdown-divider"},null,-1)),qe("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:e[13]||(e[13]=(...u)=>t.handleLogout&&t.handleLogout(...u)),onKeydown:e[14]||(e[14]=aa(zt((...u)=>t.handleLogout&&t.handleLogout(...u),["prevent"]),["enter"]))},[pt(w,{name:"log-out",size:16}),e[24]||(e[24]=pa(" 退出登录 ",-1))],32)])):We("",!0)])),[[o,t.closeUserMenu]])])])])}const mf=ha(mm,[["render",vf]]),ff=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],pf={name:"qc-subnav",components:{AppIcon:ga},setup(){const a=ka("qcState");if(!a)return{};const e=ct(()=>a.currentPage&&a.currentPage.value||""),v=ct(()=>a.currentSubPage&&a.currentSubPage.value||""),t=ct(()=>a.navMode&&a.navMode.value||"subnav"),c=Pt({}),d=ct(()=>a.menus&&a.menus.value||[]),w=ct(()=>d.value.find(T=>T.key===e.value)||null),r=ct(()=>w.value&&w.value.subPages||[]),i=ct(()=>a.currentPageName&&a.currentPageName.value||e.value),p=T=>a.subPageNames&&a.subPageNames[T]||T,o=T=>v.value===T;function M(T){a.openTab?a.openTab(e.value,T):a.currentSubPage&&(a.currentSubPage.value=T);try{localStorage.setItem("quant_last_subpage",T)}catch{}}function k(T){a.openTab?a.openTab(e.value,T.key):a.currentSubPage&&(a.currentSubPage.value=T.key);try{localStorage.setItem("quant_last_subpage",T.key)}catch{}}function C(T){c.value[T]=!c.value[T]}const x={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",notification:"bell",about:"info"}};return{state:a,currentPage:e,currentSubPage:v,navMode:t,subPages:r,currentMenu:w,collapsedGroups:c,pageTitle:i,subLabel:p,isSubActive:o,goSub:M,goSystemItem:k,toggleGroup:C,SYSTEM_GROUPS:ff,subIcon:(T,u)=>x[T]&&x[T][u]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},gf={key:0,class:"qc-subnav-column","aria-label":"二级导航"},hf={class:"qc-subnav-column-header"},yf={class:"qc-subnav-current-label"},bf={class:"qc-subnav-column-body"},wf=["onClick"],kf=["href","onClick"],_f={class:"qc-subnav-group-label"},xf=["href","onClick"],Sf=["href","onClick"];function Cf(a,e,v,t,c,d){const w=Ft("AppIcon");return t.navMode==="subnav"?(pe(),be("aside",gf,[qe("div",hf,[qe("span",yf,Ke(t.pageTitle),1)]),qe("div",bf,[t.currentPage==="system"?(pe(!0),be(mt,{key:0},Ct(t.SYSTEM_GROUPS,r=>(pe(),be("div",{key:r.label,class:"qc-subnav-group"},[qe("div",{class:"qc-subnav-group-label",onClick:i=>t.toggleGroup(r.label)},[qe("span",null,Ke(r.label),1),pt(w,{name:"chevron-down",size:12,class:ut({"is-open":!t.collapsedGroups[r.label]})},null,8,["class"])],8,wf),t.collapsedGroups[r.label]?We("",!0):(pe(!0),be(mt,{key:0},Ct(r.items,i=>(pe(),be("a",{key:i.key,class:ut(["qc-subnav-item",{"is-active":t.isSubActive(i.key)}]),href:"#"+i.key,onClick:zt(p=>t.goSystemItem(i),["prevent"])},[pt(w,{name:i.icon,size:16},null,8,["name"]),qe("span",null,Ke(i.label),1)],10,kf))),128))]))),128)):t.currentPage==="shortterm"?(pe(!0),be(mt,{key:1},Ct(t.SHORTTERM_GROUPS,r=>(pe(),be("div",{key:r.label,class:"qc-subnav-group"},[qe("div",_f,[qe("span",null,Ke(r.label),1)]),(pe(!0),be(mt,null,Ct(r.items,i=>(pe(),be("a",{key:i,class:ut(["qc-subnav-item",{"is-active":t.isSubActive(i)}]),href:"#"+t.currentPage+"/"+i,onClick:zt(p=>t.goSub(i),["prevent"])},[pt(w,{name:t.subIcon(t.currentPage,i),size:16},null,8,["name"]),qe("span",null,Ke(t.subLabel(i)),1)],10,xf))),128))]))),128)):(pe(!0),be(mt,{key:2},Ct(t.subPages,r=>(pe(),be("a",{key:r,class:ut(["qc-subnav-item",{"is-active":t.isSubActive(r)}]),href:"#"+t.currentPage+"/"+r,onClick:zt(i=>t.goSub(r),["prevent"])},[pt(w,{name:t.subIcon(t.currentPage,r),size:16},null,8,["name"]),qe("span",null,Ke(t.subLabel(r)),1)],10,Sf))),128))])])):We("",!0)}const qf=ha(pf,[["render",Cf]]),Ef=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],Mf={name:"qc-mobile-nav",components:{AppIcon:ga},setup(){const a=ka("qcState");if(!a)return{};const e=Pt(!1),v=Pt(null),t=Pt({}),c=ct(()=>a.menus&&a.menus.value||[]),d=ct(()=>a.currentPage&&a.currentPage.value||""),w={research:"量化投研",platform:"平台管理"},r=["research","platform"];function i(u){return Array.isArray(u.subPages)&&u.subPages.length>0}function p(u){i(u)&&(t.value[u.key]=!t.value[u.key])}function o(u,n){return d.value===u.key&&a.currentSubPage&&a.currentSubPage.value===n}function M(u){return a.subPageNames&&a.subPageNames[u]||u}async function k(u){const n=c.value.find(E=>E.key===u.key),f=n&&n.subPages&&n.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(u.key,f):(a.currentPage.value=u.key,a.currentSubPage&&(a.currentSubPage.value=f)),a.navigateTo&&a.navigateTo(u.key,f)}function C(u,n){e.value=!1;const f=n||u.subPages&&u.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(u.key,f):(a.currentPage.value=u.key,a.currentSubPage&&(a.currentSubPage.value=f)),a.navigateTo&&a.navigateTo(u.key,f)}function x(){e.value=!0,t.value.shortterm===void 0&&(t.value.shortterm=!0)}function b(){e.value=!1;const u=document.querySelector(".qc-header .qc-icon-btn");u&&u.focus()}function D(u){u.detail&&u.detail.open&&x()}function T(u){e.value&&u.key==="Escape"&&b()}return Ia(()=>{window.addEventListener("qc:drawer",D),document.addEventListener("keydown",T)}),ss(()=>{window.removeEventListener("qc:drawer",D),document.removeEventListener("keydown",T)}),{state:a,TABS:Ef,menus:c,currentPage:d,drawerOpen:e,drawerFocusRef:v,drawerExpanded:t,GROUP_LABELS:w,GROUPS:r,hasSub:i,toggleDrawerMenu:p,isDrawerSubActive:o,subLabel:M,goTab:k,goMenu:C,openDrawer:x,closeDrawer:b}}},Tf={class:"qc-mobile-nav","aria-label":"移动端底部导航"},Df=["aria-current","onClick"],Pf={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},Rf={class:"qc-drawer-header"},zf={class:"qc-drawer-brand"},Af={class:"qc-drawer-body"},Lf={key:0},If={class:"qc-nav-group-label"},Nf=["href","aria-current","onClick"],Of={class:"qc-sidebar-label"},jf=["aria-expanded","onClick"],Vf={key:0,class:"qc-drawer-children"},Ff=["href","onClick"],Hf={class:"qc-drawer-footer"},Bf=["title"];function Kf(a,e,v,t,c,d){var r,i;const w=Ft("AppIcon");return pe(),be(mt,null,[qe("nav",Tf,[(pe(!0),be(mt,null,Ct(t.TABS,p=>(pe(),be("button",{key:p.key,class:ut(["qc-mobile-tab",{"is-active":t.currentPage===p.key}]),"aria-current":t.currentPage===p.key?"page":null,onClick:o=>t.goTab(p)},[pt(w,{name:p.icon,size:22},null,8,["name"]),qe("span",null,Ke(p.label),1)],10,Df))),128))]),(pe(),na(Hd,{to:"body"},[t.drawerOpen?(pe(),be("div",{key:0,class:"qc-drawer-backdrop",onClick:e[0]||(e[0]=(...p)=>t.closeDrawer&&t.closeDrawer(...p))})):We("",!0),t.drawerOpen?(pe(),be("div",Pf,[qe("div",Rf,[qe("div",zf,[e[4]||(e[4]=qe("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[qe("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),qe("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),qe("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),qe("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),qe("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),qe("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),qe("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),qe("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),qe("span",null,Ke(t.state.t("login.title")),1)]),qe("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:e[1]||(e[1]=(...p)=>t.closeDrawer&&t.closeDrawer(...p))},[pt(w,{name:"x",size:18})])]),qe("div",Af,[(pe(!0),be(mt,null,Ct(t.GROUPS,p=>(pe(),be(mt,{key:p},[t.menus.some(o=>o.group===p)?(pe(),be("div",Lf,[qe("div",If,Ke(t.GROUP_LABELS[p]),1),(pe(!0),be(mt,null,Ct(t.menus.filter(o=>o.group===p),o=>(pe(),be("div",{key:o.key,class:"qc-drawer-menu"},[qe("div",{class:ut(["qc-drawer-menu-row",{"is-active":t.currentPage===o.key}])},[qe("a",{class:ut(["qc-sidebar-item",{"is-active":t.currentPage===o.key}]),href:"#"+o.key,"aria-current":t.currentPage===o.key?"page":null,onClick:zt(M=>t.hasSub(o)?t.toggleDrawerMenu(o):t.goMenu(o),["prevent"])},[pt(w,{name:o.iconName||"",size:18},null,8,["name"]),qe("span",Of,Ke(o.name),1)],10,Nf),t.hasSub(o)?(pe(),be("button",{key:0,class:ut(["qc-sidebar-chevron",{"is-open":t.drawerExpanded[o.key]}]),"aria-expanded":!!t.drawerExpanded[o.key],"aria-label":"展开子菜单",onClick:M=>t.toggleDrawerMenu(o)},[pt(w,{name:"chevron-down",size:14})],10,jf)):We("",!0)],2),t.drawerExpanded[o.key]?(pe(),be("div",Vf,[(pe(!0),be(mt,null,Ct(o.subPages,M=>(pe(),be("a",{key:M,class:ut(["qc-subnav-item",{"is-active":t.isDrawerSubActive(o,M)}]),href:"#"+o.key+"/"+M,onClick:zt(k=>t.goMenu(o,M),["prevent"])},[qe("span",null,Ke(t.subLabel(M)),1)],10,Ff))),128))])):We("",!0)]))),128))])):We("",!0)],64))),128))]),qe("div",Hf,[qe("button",{class:"qc-icon-btn",title:((r=t.state.currentTheme)==null?void 0:r.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:e[2]||(e[2]=p=>{var o;return t.state.changeThemeMode&&t.state.changeThemeMode(((o=t.state.currentTheme)==null?void 0:o.value)==="dark"?"light":"dark")})},[pt(w,{name:((i=t.state.currentTheme)==null?void 0:i.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,Bf),qe("button",{class:"qc-icon-btn",title:"退出登录",onClick:e[3]||(e[3]=p=>t.state.handleLogout&&t.state.handleLogout())},[pt(w,{name:"log-out",size:18})])])])):We("",!0)]))],64)}const Wf=ha(Mf,[["render",Kf]]),Uf={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(a,{emit:e,slots:v}){const t=ka("qcState");function c(o){e("select",o)}function d(o){const M=o.strategy_names||o.strategies||[],k=M.slice(0,3),C=M.length>3?M.length-3:0,x=k.map(b=>({text:b,more:!1}));return C&&x.push({text:"+"+C,more:!0}),x}function w(o){const M=Number(o);return isFinite(M)?M.toFixed(2):"—"}function r(o){const M=Number(o);return isFinite(M)?(M>0?"+":"")+M.toFixed(2)+"%":"—"}function i(o){const M=Number(o.consensus_level);return isFinite(M)?Math.round(M*100):0}function p(o){const M=Number(o&&o.consensus_level);return isFinite(M)&&M>0}return{state:t,slots:v,select:c,displayTags:d,fmtPrice:w,fmtChange:r,pctOf:i,hasConsensus:p}}},Gf={class:"qc-stock-list"},Yf=["data-copy-code","aria-label","onClick","onKeydown"],Qf={key:0,class:"qc-stock-rank"},Jf={class:"qc-stock-info"},$f={class:"qc-stock-code"},Xf={class:"qc-stock-code-num"},Zf={key:0,class:"qc-stock-status is-new"},ep={key:1,class:"qc-stock-status is-out"},tp={class:"qc-stock-name"},ap={key:0,class:"qc-stock-consensus"},sp={key:1,class:"qc-stock-tags"},np={key:2,class:"qc-stock-badge"},lp={key:3,class:"qc-stock-data"},ip={class:"qc-stock-price"},op={key:4,class:"qc-stock-extra"},rp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},cp=["data-copy-code","aria-label","onClick","onKeydown"],dp={key:0,class:"qc-stock-rank"},up={class:"qc-stock-info"},vp={class:"qc-stock-code"},mp={class:"qc-stock-code-num"},fp={key:0,class:"qc-stock-status is-new"},pp={key:1,class:"qc-stock-status is-out"},gp={class:"qc-stock-name"},hp={key:0,class:"qc-stock-consensus"},yp={key:1,class:"qc-stock-tags"},bp={key:2,class:"qc-stock-badge"},wp={key:3,class:"qc-stock-data"},kp={class:"qc-stock-price"},_p={key:4,class:"qc-stock-extra"},xp={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function Sp(a,e,v,t,c,d){const w=Ft("qc-state-panel"),r=Ft("qc-virtual-list");return pe(),be("div",Gf,[v.loading?(pe(),na(w,{key:0,type:"loading"})):v.items.length?(pe(),be(mt,{key:2},[v.virtual?(pe(),na(r,{key:0,items:v.items,"row-height":v.rowHeight},{default:sa(({item:i,index:p})=>[qe("div",{class:ut(["qc-stock-row",{"is-active":v.activeCode===i.code}]),"data-copy-code":v.copyCode?i.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(i.name||"")+" "+(i.code||""),onClick:o=>t.select(i),onKeydown:[aa(zt(o=>t.select(i),["prevent"]),["enter"]),aa(zt(o=>t.select(i),["prevent"]),["space"])]},[v.showRank?(pe(),be("div",Qf,Ke(p+1),1)):We("",!0),qe("div",Jf,[qe("div",$f,[qe("span",Xf,Ke(i.code),1),i.status==="new"?(pe(),be("span",Zf,Ke(v.statusText.new),1)):i.status==="out"?(pe(),be("span",ep,Ke(v.statusText.out),1)):We("",!0)]),qe("div",tp,[pa(Ke(i.name)+" ",1),Jt(a.$slots,"name-suffix",{item:i,index:p})]),v.showConsensus&&t.hasConsensus(i)?(pe(),be("span",ap,Ke(t.pctOf(i))+"% 共识",1)):We("",!0)]),(i.strategy_names||i.strategies)&&(i.strategy_names||i.strategies).length?(pe(),be("div",sp,[(pe(!0),be(mt,null,Ct(t.displayTags(i),o=>(pe(),be("span",{key:o.text,class:ut(["qc-stock-tag",{"is-more":o.more}])},Ke(o.text),3))),128))])):We("",!0),v.showConsensus?(pe(),be("span",np,Ke(i.strategy_count||0)+" 策略",1)):We("",!0),v.showPrice&&i.price!=null?(pe(),be("div",lp,[qe("span",ip,Ke(t.fmtPrice(i.price)),1),qe("span",{class:ut(["qc-stock-change",i.change_pct>0?"is-up":i.change_pct<0?"is-down":""])},Ke(t.fmtChange(i.change_pct)),3)])):We("",!0),t.slots.extra?(pe(),be("div",op,[Jt(a.$slots,"extra",{item:i,index:p})])):We("",!0),t.slots.actions?(pe(),be("div",{key:5,class:"qc-stock-actions",onClick:e[0]||(e[0]=zt(()=>{},["stop"]))},[Jt(a.$slots,"actions",{item:i,index:p})])):We("",!0),t.slots.footer?(pe(),be("div",rp,[Jt(a.$slots,"footer",{item:i,index:p})])):We("",!0)],42,Yf)]),_:3},8,["items","row-height"])):(pe(!0),be(mt,{key:1},Ct(v.items,(i,p)=>(pe(),be("div",{key:i.code,class:ut(["qc-stock-row",{"is-active":v.activeCode===i.code}]),"data-copy-code":v.copyCode?i.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(i.name||"")+" "+(i.code||""),onClick:o=>t.select(i),onKeydown:[aa(zt(o=>t.select(i),["prevent"]),["enter"]),aa(zt(o=>t.select(i),["prevent"]),["space"])]},[v.showRank?(pe(),be("div",dp,Ke(p+1),1)):We("",!0),qe("div",up,[qe("div",vp,[qe("span",mp,Ke(i.code),1),i.status==="new"?(pe(),be("span",fp,Ke(v.statusText.new),1)):i.status==="out"?(pe(),be("span",pp,Ke(v.statusText.out),1)):We("",!0)]),qe("div",gp,[pa(Ke(i.name)+" ",1),Jt(a.$slots,"name-suffix",{item:i,index:p})]),v.showConsensus&&t.hasConsensus(i)?(pe(),be("span",hp,Ke(t.pctOf(i))+"% 共识",1)):We("",!0)]),(i.strategy_names||i.strategies)&&(i.strategy_names||i.strategies).length?(pe(),be("div",yp,[(pe(!0),be(mt,null,Ct(t.displayTags(i),o=>(pe(),be("span",{key:o.text,class:ut(["qc-stock-tag",{"is-more":o.more}])},Ke(o.text),3))),128))])):We("",!0),v.showConsensus?(pe(),be("span",bp,Ke(i.strategy_count||0)+" 策略",1)):We("",!0),v.showPrice&&i.price!=null?(pe(),be("div",wp,[qe("span",kp,Ke(t.fmtPrice(i.price)),1),qe("span",{class:ut(["qc-stock-change",i.change_pct>0?"is-up":i.change_pct<0?"is-down":""])},Ke(t.fmtChange(i.change_pct)),3)])):We("",!0),t.slots.extra?(pe(),be("div",_p,[Jt(a.$slots,"extra",{item:i,index:p})])):We("",!0),t.slots.actions?(pe(),be("div",{key:5,class:"qc-stock-actions",onClick:e[1]||(e[1]=zt(()=>{},["stop"]))},[Jt(a.$slots,"actions",{item:i,index:p})])):We("",!0),t.slots.footer?(pe(),be("div",xp,[Jt(a.$slots,"footer",{item:i,index:p})])):We("",!0)],42,cp))),128))],64)):(pe(),na(w,{key:1,type:"empty",title:v.emptyText},null,8,["title"]))])}const Cp=ha(Uf,[["render",Sp]]),qp={name:"qc-detail-split",props:{enabled:{type:Boolean,default:!1},rootClass:{type:String,default:""},listClass:{type:String,default:""},paneClass:{type:String,default:""}}},Ep={key:0,class:"split-divider","data-split-resize":""};function Mp(a,e,v,t,c,d){return pe(),be("div",{class:ut(["detail-split-wrap",[v.rootClass,{"detail-split":v.enabled}]]),"data-split-root":""},[qe("div",{class:ut(["detail-split-list",[v.listClass,{"w-100":!v.enabled}]])},[Jt(a.$slots,"list")],2),v.enabled?(pe(),be("div",Ep)):We("",!0),v.enabled?(pe(),be("div",{key:1,class:ut(["detail-split-pane",v.paneClass])},[Jt(a.$slots,"pane")],2)):We("",!0)],2)}const Tp=ha(qp,[["render",Mp]]),hn={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",notification:"bell",about:"info"}},Dp=200,Pp={name:"qc-top-tabs",components:{AppIcon:ga},setup(){const a=ka("qcState");if(!a)return{};const e=ct(()=>a.currentPage&&a.currentPage.value||""),v=ct(()=>a.currentSubPage&&a.currentSubPage.value||""),t=ct(()=>a.menus&&a.menus.value||[]),c=ct(()=>{const n=t.value.find(f=>f.key===e.value);return n&&n.subPages||[]}),d=ct(()=>c.value.map(n=>({key:n,label:a.subPageNames&&a.subPageNames[n]||n,icon:hn[e.value]&&hn[e.value][n]||"circle-dot"}))),w=Pt(null),r=Pt(!1),i=Pt(!1),p=Pt(!1);let o=null,M=null;function k(){const n=w.value;n&&(i.value=n.scrollLeft>2,p.value=n.scrollLeft<n.scrollWidth-n.clientWidth-2)}function C(){const n=w.value;n&&(r.value=n.scrollWidth>n.clientWidth+2,k())}function x(n){const f=w.value;f&&f.scrollBy({left:n*Dp,behavior:"smooth"})}function b(n){a.openTab?a.openTab(e.value,n):a.currentSubPage&&(a.currentSubPage.value=n)}function D(n){b(n),Kd(()=>{const f=w.value;if(!f)return;const E=f.querySelector('[data-tab-key="'+n+'"]');E&&E.scrollIntoView({block:"nearest",inline:"nearest"})})}const T=ct(()=>{if(!r.value)return[];const n=w.value;if(!n)return[];const f=n.getBoundingClientRect(),E=new Set;return n.querySelectorAll(".qc-top-tab").forEach(N=>{const q=N.getBoundingClientRect();q.left>=f.left-2&&q.left<f.right-24&&E.add(N.getAttribute("data-tab-key"))}),d.value.filter(N=>!E.has(N.key))});function u(n,f){n.key==="ArrowLeft"?(n.preventDefault(),x(-1)):n.key==="ArrowRight"?(n.preventDefault(),x(1)):(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),b(f.key))}return Ia(()=>{C(),o=new ResizeObserver(()=>{clearTimeout(M),M=setTimeout(C,100)}),w.value&&o.observe(w.value),window.addEventListener("resize",C)}),Bd(()=>{o&&o.disconnect(),window.removeEventListener("resize",C),clearTimeout(M)}),{state:a,tabs:d,currentSubPage:v,go:b,scrollRef:w,hasOverflow:r,canScrollLeft:i,canScrollRight:p,scrollByStep:x,scrollToTab:D,hiddenTabs:T,onTabKeydown:u,updateScrollState:k}}},Rp={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},zp=["disabled"],Ap=["data-tab-key","aria-selected","title","onClick","onKeydown"],Lp={class:"qc-top-tab-label"},Ip=["disabled"];function Np(a,e,v,t,c,d){const w=Ft("AppIcon"),r=Ft("el-dropdown-item"),i=Ft("el-dropdown-menu"),p=Ft("el-dropdown");return t.tabs.length?(pe(),be("div",Rp,[t.hasOverflow?(pe(),be("button",{key:0,class:"qc-top-tabs-btn",disabled:!t.canScrollLeft,"aria-label":"向左滚动",onClick:e[0]||(e[0]=o=>t.scrollByStep(-1))},"‹",8,zp)):We("",!0),qe("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:e[1]||(e[1]=(...o)=>t.updateScrollState&&t.updateScrollState(...o))},[(pe(!0),be(mt,null,Ct(t.tabs,o=>(pe(),be("div",{key:o.key,"data-tab-key":o.key,class:ut(["qc-top-tab",{"is-active":t.currentSubPage===o.key}]),role:"tab",tabindex:"0","aria-selected":t.currentSubPage===o.key?"true":"false",title:o.label,onClick:M=>t.go(o.key),onKeydown:M=>t.onTabKeydown(M,o)},[pt(w,{name:o.icon,size:14},null,8,["name"]),qe("span",Lp,Ke(o.label),1)],42,Ap))),128))],544),t.hasOverflow?(pe(),be("button",{key:1,class:"qc-top-tabs-btn",disabled:!t.canScrollRight,"aria-label":"向右滚动",onClick:e[2]||(e[2]=o=>t.scrollByStep(1))},"›",8,Ip)):We("",!0),t.hasOverflow&&t.hiddenTabs.length?(pe(),na(p,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:t.scrollToTab},{dropdown:sa(()=>[pt(i,null,{default:sa(()=>[(pe(!0),be(mt,null,Ct(t.hiddenTabs,o=>(pe(),na(r,{key:o.key,command:o.key,class:ut({"is-active":t.currentSubPage===o.key})},{default:sa(()=>[pt(w,{name:o.icon,size:14},null,8,["name"]),pa(" "+Ke(o.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:sa(()=>[e[3]||(e[3]=qe("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):We("",!0)])):We("",!0)}const Op=ha(Pp,[["render",Np]]);(function(){const{ref:a,computed:e,inject:v}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
    `,setup(){const t=v("qcState");if(!t)return{};const c=a(!1),d=a(localStorage.getItem("qc.hideNonTradingBanner")==="1"),w=()=>{d.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},r=e(()=>t.marketData&&t.marketData.value||{}),i=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:t.menus,marketData:r,bannerDismissed:d,dismissBanner:w,goMerrill:i,currentPage:t.currentPage,currentSubPage:t.currentSubPage,currentUser:t.currentUser,currentPageName:t.currentPageName,searchQuery:t.searchQuery,searchStocks:t.searchStocks,onSearchSelect:t.onSearchSelect,selectedDate:t.selectedDate,onDateChange:t.onDateChange,disabledDate:t.disabledDate,refreshCalendarData:t.refreshCalendarData,exportCSV:t.exportCSV,loading:t.loading,lastLoadTime:t.lastLoadTime,showUserMenu:c,resetSetupWizard:t.resetSetupWizard,showChangePassword:t.showChangePassword,themes:t.themes,currentTheme:t.currentTheme,changeTheme:t.changeTheme,handleLogout:t.handleLogout,subPageNames:t.subPageNames,keyClick:t.keyClick,t:t.t,subTabLabel:function(p,o){const M="sub."+p.key+"."+o,k=t.t(M);if(k!==M)return k;const C="sub."+o,x=t.t(C);return x!==C&&x?x:t.subPageNames[o]||o}}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                </div>`,setup(){const e=a("qcState");if(!e)return{};const{ref:v,computed:t}=Vue,c=v(0),d=v(0),w=v(!1),r=t(()=>{const q={day:"date",week:"week",month:"month",year:"year"},z=e.currentView&&e.currentView.value||"day";return q[z]||"date"}),i={day:"日",week:"周",month:"月",year:"年"};function p(q){return e.t&&e.t("view."+q)||i[q]||q}function o(q){e.switchView?e.switchView(q):e.currentView&&(e.currentView.value=q)}let M=null;function k(q){const z=q.touches&&q.touches[0];z&&(c.value=z.clientX,d.value=z.clientY)}async function C(){if(!w.value){w.value=!0;try{await e.refreshCalendarData()}catch{}M&&clearTimeout(M),M=setTimeout(()=>{w.value=!1},500)}}function x(q){if(!(window.innerWidth<=768))return;const z=q.changedTouches&&q.changedTouches[0];if(!z)return;const R=window.__quantModules&&window.__quantModules.gestures||{};if((typeof R.judgePullToRefresh=="function"?R.judgePullToRefresh(d.value,z.clientY):z.clientY-d.value>=60)&&(window.scrollY||0)<=0){q.stopPropagation(),C();return}if(e.currentSubPage.value==="pool")return;const W=z.clientX-c.value,U=z.clientY-d.value;Math.abs(W)>50&&Math.abs(W)>Math.abs(U)*1.2&&(e.navigateDate(W<0?1:-1),q.stopPropagation())}const b=v(!1),D=v(!1),T=v(""),u=v(null),n=v([]);function f(q){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[q]||q}async function E(){if(e.selectedDate.value){b.value=!0,D.value=!0,T.value="",u.value=null,n.value=[];try{const q=await fetch("/api/calendar/"+e.selectedDate.value+"/compare"),z=await q.json();if(!q.ok)throw new Error(z.detail||"HTTP "+q.status);u.value=z;const R=z&&z.comparison||{},B=[];for(const W of Object.keys(R)){if(W==="all_intersection")continue;const U=R[W]||{},Y=W.split("_vs_");B.push({label:f(Y[0])+" ↔ "+f(Y[1]),interCount:U.intersection_count||0,inter:(U.intersection||[]).join(", "),onlyS1Count:U.only_s1_count||0,onlyS1:(U.only_s1||[]).join(", "),onlyS2Count:U.only_s2_count||0,onlyS2:(U.only_s2||[]).join(", ")})}n.value=B}catch(q){T.value=String(q&&q.message?q.message:q)}finally{D.value=!1}}}let N="";return Vue.watch(()=>{const q=e.stockPool,z=q&&q.value||[];return{n:z.length,first:z[0]&&z[0].code,split:!!e.detailSplitEnabled.value}},(q,z)=>{if(!q.split||!q.first||q.n===0)return;const R=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,B=(e.stockPool.value||[]).some(W=>W.code===R);if(!(e.externalStockActive&&(!R&&e.externalStockActive(null)||R&&e.externalStockActive(R)))&&(!R||!B)){if(N===q.first&&R&&B===!1&&q.n>1)return;N=q.first,e.showStockDetail&&e.showStockDetail(q.first)}},{immediate:!0}),{...e,calType:r,pullRefreshing:w,onCalTouchStart:k,onCalTouchEnd:x,viewLabel:p,switchViewLocal:o,compareVisible:b,compareLoading:D,compareError:T,compareData:u,comparePairs:n,openStrategyCompare:E}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.strategiesPage=window.__quantModules.strategiesPage||{};window.__quantModules.strategiesPage.part1=`
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
    `;window.__quantModules=window.__quantModules||{};window.__quantModules.strategiesPage=window.__quantModules.strategiesPage||{};window.__quantModules.strategiesPage.view=window.__quantModules.strategiesPage.part1+window.__quantModules.strategiesPage.part2;(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:window.__quantModules.strategiesPage.view,setup(){const e=a("qcState"),v=Vue.ref(!1);if(!e)return{};const{computed:t}=Vue;let c=0;const d=t(()=>{var g;return((g=e.merrillData)==null?void 0:g.value)||{}}),w=t(()=>{var g;return((g=e.marketData)==null?void 0:g.value)||{}}),r=t(()=>{var g;return((g=e.dashboardData)==null?void 0:g.value)||{}}),i=t(()=>{var g;return((g=e.healthMetrics)==null?void 0:g.value)||[]}),p=t(()=>{var g;return((g=e.filteredConsensusRank)==null?void 0:g.value)||[]}),o=t(()=>{const g={};for(const O of p.value)O.code&&O.name&&(g[O.code]=O.name);return g}),M={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function k(g){return M[g]||g}const C=t(()=>w.value.date||r.value.latest_date||"-"),x=t(()=>{const g=w.value;return!g||Object.keys(g).length===0?"数据加载中...":g.is_trading_day&&g.in_trading_hours?"● 交易中":g.is_trading_day?"已收盘":"○ 非交易日"}),b=t(()=>{const g=d.value.next_stage_prediction;return g&&g.next_stage_name&&g.transition_probability>.2?`→${g.next_stage_name} ${(g.transition_probability*100).toFixed(2)}%`:""}),D=t(()=>{const g=[],O=r.value.pool_changes||{},Q=O.new_count||0;if(Q>0){const Ee=O.new_stock_names||{},Se=(O.new_stocks||[]).map(Ne=>Ee[Ne]||o.value[Ne]||Ne).slice(0,4).join("、");g.push({icon:"sparkles",level:"new",text:`今日新入池 ${Q} 只${Se?" · "+Se:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(e.currentPage.value="calendar",e.currentSubPage.value="pool"),e.statusFilter.value="new"}})}for(const Ee of i.value.filter(Se=>Se.degraded))g.push({icon:"alert-triangle",level:"warn",text:`数据源 ${k(Ee.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});const de=d.value.timing;de&&de.progress_percent&&de.progress_percent>100?g.push({icon:"clock",level:"warn",text:`美林「${d.value.name}」已超期 ${de.progress_percent}%`,action:()=>{e.currentSubPage.value="merrill"}}):de&&de.maturity&&d.value.name&&g.push({icon:"clock",level:"info",text:`美林「${d.value.name}」阶段成熟度 ${de.maturity}`,action:()=>{e.currentSubPage.value="merrill"}});const ue=w.value;return ue&&ue.is_trading_day===!1&&ue.date&&g.push({icon:"calendar",level:"info",text:`${ue.date} 非交易日`,action:()=>{e.currentSubPage.value="market"}}),g}),T=t(()=>{const g=[],O=d.value.name||"",Q=d.value.timing||{},de=["复苏","成长","过热"],ue=["滞胀","衰退"];de.some(Fe=>O.includes(Fe))&&g.push({kind:"opportunity",source:"美林",text:O+" 顺势",action:()=>{e.currentSubPage.value="merrill"}}),ue.some(Fe=>O.includes(Fe))&&g.push({kind:"risk",source:"美林",text:O+" 防守",action:()=>{e.currentSubPage.value="merrill"}}),Q.progress_percent&&Q.progress_percent>100&&g.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{e.currentSubPage.value="merrill"}});const Ee=r.value.pool_changes||{},Se=(Ee.new_count||0)-(Ee.out_count||0);Se>=3?g.push({kind:"opportunity",source:"池变动",text:"净入池 +"+Se,action:()=>{e.statusFilter.value="new",e.currentPage.value="calendar",e.currentSubPage.value="pool"}}):Se<=-3&&g.push({kind:"risk",source:"池变动",text:"净出池 "+Se,action:()=>{e.currentSubPage.value="consensus"}});const Ne=w.value.market_sentiment,Oe=Ne&&Ne.text||"";(Oe.includes("乐观")||Oe.includes("积极")||Oe.includes("亢奋"))&&g.push({kind:"opportunity",source:"情绪",text:Oe,action:()=>{e.currentSubPage.value="market"}}),(Oe.includes("悲观")||Oe.includes("恐慌")||Oe.includes("低迷"))&&g.push({kind:"risk",source:"情绪",text:Oe,action:()=>{e.currentSubPage.value="market"}});for(const Fe of i.value.filter(Ye=>Ye.degraded))g.push({kind:"risk",source:"数据",text:k(Fe.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):e.currentPage.value="system"}});return g}),u=t(()=>{var g;return((g=e.merrillTimeline)==null?void 0:g.value)||e.merrillTimeline||{cycles:[]}}),n=t(()=>{var g;return((g=e.timelineLoading)==null?void 0:g.value)||!1});function f(g){const O=e.showStageDetail;typeof O=="function"&&O(g)}function E(g){const O=e.merrillStagesConfig,de=(O&&O.value?O.value:O||{})[g]||{};return de.color||de.bg_color||"var(--color-primary)"}function N(g){const O=e.merrillStagesConfig,Q=O&&O.value?O.value:O||{};return Q[g]&&Q[g].name||""}function q(){const g=e.merrillStagesConfig;return g&&g.value?g.value:g||{}}function z(g){return q()[g]&&q()[g].description||""}const R=Vue.ref([]),B=Vue.ref(null),W=Vue.ref(!1),U=Vue.ref(!1),Y=Vue.ref(7),Z=Vue.ref(""),F=Vue.ref(""),ee=Vue.computed(()=>{const g=new Set;return(R.value||[]).forEach(function(O){O.task&&g.add(O.task)}),Array.from(g).sort()}),A=Vue.computed(function(){const g=B.value&&B.value.success_rate||0;return g>=80?"color-success":g>=50?"color-warning":"color-danger"});function s(g,O){return g>0&&O/g>=.8?"status-ok":g>0&&O/g>=.5?"status-warn":"status-bad"}async function S(){const g=++c;W.value=!0,U.value=!1;try{const O=window.__quantModules&&window.__quantModules.core||{},Q=typeof O.authHeaders=="function"?O.authHeaders():{},de=new URLSearchParams({days:String(Y.value)});Z.value&&de.set("task",Z.value),F.value&&de.set("status",F.value);const[ue,Ee]=await Promise.all([fetch("/api/system/execution-history?"+de.toString(),{headers:Q}).then(function(Se){return Se.json()}),fetch("/api/system/execution-summary?days="+Y.value,{headers:Q}).then(function(Se){return Se.json()})]);if(g!==c)return;R.value=ue&&ue.data||[],B.value=Ee&&Ee.data||null}catch(O){console.error("[execution] 执行数据加载失败:",O),U.value=!0}finally{g===c&&(W.value=!1)}}const l=window.__quantModules&&window.__quantModules.i18n||{},h=typeof l.t=="function"?l.t:function(g){return String(g)},te=Vue.ref([]),I=Vue.ref(null),_=Vue.ref(null),m=Vue.ref(""),P=Vue.ref([]),y=Vue.ref(!1);let j=null;const se=Vue.computed(function(){const g=_.value&&_.value.dates||[];return g.length&&!m.value&&(m.value=g[g.length-1].date),g}),J=Vue.computed(function(){const g=(te.value||[]).find(function(Q){return Q.enabled});if(!g||g.countdown_seconds==null)return"—";const O=g.countdown_seconds;return Math.floor(O/3600)+"h"+String(Math.floor(O%3600/60)).padStart(2,"0")+"m"}),L=Vue.computed(function(){const g=(te.value||[]).find(function(O){return O.enabled});if(!g||g.countdown_seconds==null||g.countdown_seconds<0)return"";try{return new Date(Date.now()+g.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),$=Vue.computed(function(){const g=I.value;return!g||g.phase==="idle"?h("exec.waiting"):g.phase==="running"?h("exec.running")+(g.current_sid?" · "+g.current_sid:""):g.phase==="done"?h("exec.done"):h("exec.failed")}),ie=Vue.computed(function(){return I.value&&I.value.phase==="running"?"loader":"check-circle-2"}),me=Vue.computed(function(){const g=_.value&&_.value.dates||[];return g.length?g[g.length-1].date:"—"}),Te=Vue.computed(function(){const g=_.value&&_.value.dates||[],O=g[g.length-1];return O&&O.visible?"color-success":"color-danger"}),X=Vue.computed(function(){const g=_.value&&_.value.dates||[],O=g[g.length-1];return O?O.day_view_total:"—"});function oe(g){const O=window.__quantModules&&window.__quantModules.core||{},Q=typeof O.authHeaders=="function"?O.authHeaders():{};return fetch(g,{headers:Q}).then(function(de){return de.json()})}async function Pe(){const g=++c;try{const[O,Q,de]=await Promise.all([oe("/api/strategies/execution/plan"),oe("/api/strategies/execution/status"),oe("/api/strategies/execution/results?days=7")]);if(g!==c)return;te.value=O&&O.data&&O.data.plans||[],I.value=Q&&Q.data||null,_.value=de&&de.data||null,I.value&&I.value.phase==="running"?ne():ge()}catch(O){console.error("[execution-monitor] 监控数据加载失败:",O)}}function ne(){ge(),j=setInterval(function(){oe("/api/strategies/execution/status").then(function(g){I.value=g&&g.data||null,I.value&&I.value.phase!=="running"&&(ge(),Pe())}).catch(function(){})},5e3)}function ge(){j&&(clearInterval(j),j=null)}async function Me(g){if(!g)return;const O=++c;y.value=!0;try{const Q=await oe("/api/strategies/execution/trace/"+encodeURIComponent(g));if(O!==c)return;const de=Q&&Q.data||null;P.value=de&&de.steps||[]}catch(Q){console.error("[execution-trace] 追溯加载失败:",Q)}finally{O===c&&(y.value=!1)}}Vue.watch(function(){return e.currentSubPage&&e.currentSubPage.value},function(g){g==="execution"?(S(),Pe()):ge()},{immediate:!0}),Vue.watch(function(){const g=e.currentSubPage&&e.currentSubPage.value,O=e.filteredConsensusRank&&e.filteredConsensusRank.value||[],Q=e.marketData&&e.marketData.value||{};return{sub:g,split:!!e.detailSplitEnabled.value,top5:O.slice(0,5),rank:O,indices:(Q.indices||[]).map(function(de){return de})}},function(g,O){if(g.split){if(g.sub==="overview"){if(!g.top5.length)return;const Q=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,de=g.top5.some(function(ue){return ue.code===Q});(!Q||!de)&&e.showStockDetail&&e.showStockDetail(g.top5[0].code)}else if(g.sub==="consensus"){if(!g.rank.length)return;const Q=e.stockDetail&&e.stockDetail.value&&e.stockDetail.value.stock,de=g.rank.some(function(ue){return ue.code===Q});(!Q||!de)&&e.showStockDetail&&e.showStockDetail(g.rank[0].code)}else if(g.sub==="market"){if(!g.indices.length)return;const Q=e.indexDetail&&e.indexDetail.value&&e.indexDetail.value.code,de=g.indices.some(function(ue){return ue.code===Q});(!Q||!de)&&e.showIndexDetail&&e.showIndexDetail(g.indices[0])}}},{immediate:!0});const ce=Vue.ref("band"),he=["recession","recovery","overheating","stagflation"];function xe(g){if(!g)return null;const O=String(g).split("-"),Q=parseInt(O[0],10),de=parseInt(O[1]||"1",10);return isFinite(Q)?Q+(de-1)/12:null}function le(g){const O=Math.floor(g);let Q=Math.round((g-O)*12)+1;return Q>12&&(Q=12),Q<1&&(Q=1),O+"-"+(Q<10?"0"+Q:""+Q)}function ae(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.timing||{}}function ve(){return e.merrillData&&e.merrillData.value&&e.merrillData.value.color||"var(--color-success)"}function ze(g,O){const Q=ae(),de=Number(Q.avg_duration_months)||0,ue=Math.min(100,Number(Q.progress_percent)||0),Ee=xe(Q.current_stage_start_date),Se=[];let Ne=null;if((g||[]).forEach(function(je){const wt=xe(je.start);Ne==null&&wt!=null&&(Ne=wt);const Et=!!(je.is_current||Ee!=null&&wt===Ee&&!je.duration_months),At=je.name||N(je.stage);if(Et&&de>0){const ot=de*ue/100;ot>.5&&Se.push({stage:je.stage,name:At,months:ot,live:!0,start:je.start});const bt=de-ot;bt>.5&&Se.push({stage:je.stage,name:"剩余(预测)",months:bt,ghost:!0,start:je.start})}else{let ot=Number(je.duration_months)||0;if(!ot&&wt!=null){const bt=xe(je.end);bt!=null&&bt>wt&&(ot=Math.max(1,Math.round((bt-wt)*12)))}ot||(ot=1),Se.push({stage:je.stage,name:At,months:ot,live:Et,start:je.start,end:je.end})}if(Et&&O&&de>0){const ot=e.merrillData&&e.merrillData.value&&e.merrillData.value.next_stage_prediction;ot&&Se.push({stage:ot.next_stage,name:(ot.next_stage_name||"下一阶段")+" (预测)",months:de,ghost:!0,prob:ot.transition_probability})}}),!Se.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};const Oe=Se.reduce(function(je,wt){return je+wt.months},0)||1,Fe=Ne??0;let Ye=0,ht=0;const Xe=Se.map(function(je){const wt=Ye;je.ghost||(ht+=je.months),Ye+=je.months;const Et={stage:je.stage,name:je.name,months:Math.round(je.months),ghost:!!je.ghost,live:!!je.live,prob:je.prob,left:wt/Oe*100,width:Math.max(2,je.months/Oe*100)},At=xe(je.start),ot=xe(je.end);return Et.start=At!=null?le(At):le(Fe+wt/12),Et.end=ot!=null?le(ot):"",Et.predicted=At==null,Et}),H=Se[Se.length-1],fe=Se.some(function(je){return je.ghost}),$e=H&&H.end?H.end:le(Fe+Oe/12);return{segs:Xe,axisStart:le(Fe),axisEnd:$e,nowPct:fe?ht/Oe*100:null}}function Ae(g){return(g.stages||[]).some(function(O){return O.is_current})}const Ve=Vue.computed(function(){const g=e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[];if(!g.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};let O=null;for(let Q=g.length-1;Q>=0;Q--)if(Ae(g[Q])){O=g[Q];break}return O||(O=g[g.length-1]),ze(O.stages,!0)});function nt(g){const O=g&&g.stages?g.stages:[];if(!O.length)return"";const Q=O[0]&&O[0].start?String(O[0].start).slice(0,4):"",de=O[O.length-1]||{},ue=de.end?String(de.end).slice(0,4):de.start?String(de.start).slice(0,4):"";return Q||ue?Q?Q+"–"+ue:ue:""}const tt=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).filter(function(O){return!Ae(O)}).map(function(O){return{label:O.label,years:nt(O),segs:ze(O.stages,!1).segs}})}),at=he,we=Vue.computed(function(){return(e.merrillTimeline&&e.merrillTimeline.value&&e.merrillTimeline.value.cycles||[]).map(function(O){const Q={};he.forEach(function(ue){Q[ue]=0});let de=null;return(O.stages||[]).forEach(function(ue){Q[ue.stage]!=null&&(Q[ue.stage]+=Number(ue.duration_months)||0),ue.is_current&&(de=ue.stage)}),{label:O.label,sum:Q,cur:de}})}),ke=Vue.computed(function(){let g=0;return we.value.forEach(function(O){he.forEach(function(Q){O.sum[Q]>g&&(g=O.sum[Q])})}),g||1}),Le=Vue.computed(function(){const g=e.merrillSnapshots&&e.merrillSnapshots.value||[],O=[];return g.forEach(function(Q){const de=O[O.length-1];de&&de.stage===Q.stage?(de.count++,de.last=Q.timestamp):O.push({stage:Q.stage,name:Q.stage_name||N(Q.stage),count:1,first:Q.timestamp,last:Q.timestamp})}),O}),Re=Vue.computed(function(){return Math.max(100,Math.min(200,Number(ae().progress_percent)||0))}),Ue=Vue.computed(function(){const g=Number(ae().progress_percent)||0;return{width:Math.max(0,Math.min(100,g/Re.value*100))+"%",background:g>100?"linear-gradient(90deg, color-mix(in srgb, "+ve()+" var(--bar-mix), var(--surface-card)), var(--bar-fill-warn))":"color-mix(in srgb, "+ve()+" var(--bar-mix), var(--surface-card))"}}),Ge=Vue.computed(function(){return 100/Re.value*100}),Qe=Vue.computed(function(){const g=ae().predicted_end;if(!g)return"";if(typeof g=="string")return g;const O=g.optimistic||g.earliest||"",Q=g.pessimistic||g.latest||"";return O&&Q?O+" ~ "+Q:g.base||g.mid||O||Q||""});var et=22;function lt(g){return"color-mix(in srgb, "+g+" "+et+"%, var(--surface-card))"}function ft(g){const O=E(g.stage);return g.ghost?{left:g.left+"%",width:g.width+"%",color:"var(--text-primary)",borderLeft:"3px solid "+O,background:"repeating-linear-gradient(45deg, "+lt(O)+" 0, "+lt(O)+" 5px, var(--surface-card) 5px, var(--surface-card) 10px)"}:{left:g.left+"%",width:g.width+"%",background:lt(O),color:"var(--text-primary)",borderLeft:"3px solid "+O}}function xt(g){const O=[g.name];return g.start&&O.push((g.predicted?"预计起始 ":"起始 ")+g.start+(g.end?" → "+g.end:"")),g.months&&O.push("约 "+g.months+" 个月"),g.ghost&&O.push("预测(尚未发生)"),g.prob!=null&&O.push("转移概率 "+(g.prob*100).toFixed(0)+"%"),O.join(" · ")}function Tt(g,O){const Q=E(g),de=Math.max(.28,O/ke.value),ue=Math.round(14+30*de);return{background:"color-mix(in srgb, "+Q+" "+ue+"%, var(--surface-card))",color:"var(--text-primary)"}}const qt=Vue.computed(function(){const g=e.merrillData&&e.merrillData.value||e.merrillData||{},O=g.color||E(g.stage);return{background:"color-mix(in srgb, "+O+" 14%, var(--surface-card))",color:"color-mix(in srgb, "+O+" 48%, var(--text-primary))",borderColor:"color-mix(in srgb, "+O+" 26%, transparent)"}});return{...e,todayText:C,tradingStatus:x,merrillNext:b,todayFocus:D,todaySignals:T,merrillConfigOpen:v,getTimelineStageColor:E,getTimelineStageName:N,getTimelineStageDesc:z,merrillChipStyle:qt,mcHistView:ce,mcCurrentBand:Ve,mcHistoryBands:tt,mcStageKeys:at,mcMatrix:we,mcTrailRuns:Le,mcProgStyle:Ue,mcAvgMark:Ge,mcEndRange:Qe,mcSegStyle:ft,mcSegTitle:xt,mcMxCellStyle:Tt,merrillTimeline:u,timelineLoading:n,showTimelineStage:f,execHistory:R,execSummary:B,execLoading:W,execError:U,execDays:Y,execTaskFilter:Z,execStatusFilter:F,execTaskOptions:ee,execSuccessClass:A,loadExecutionData:S,execRateClass:s,execPlan:te,execStatus:I,execResults:_,execTraceDate:m,execTraceSteps:P,execTraceLoading:y,execResultsDates:se,execCountdownText:J,execNextRunText:L,execPhaseText:$,execStatusIcon:ie,execLastDate:me,execVisibleClass:Te,execVisibleText:X,loadExecutionTrace:Me}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.systemPage=window.__quantModules.systemPage||{};window.__quantModules.systemPage.part1=`
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
    `;window.__quantModules=window.__quantModules||{};window.__quantModules.systemPage=window.__quantModules.systemPage||{};window.__quantModules.systemPage.view=window.__quantModules.systemPage.part1+window.__quantModules.systemPage.part2;(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:window.__quantModules.systemPage.view,setup(){const e=a("qcState");if(!e)return{};function v(H){e.currentSubPage.value=H}function t(){ae(),ve(),ze()}Vue.watch(()=>e.currentSubPage&&e.currentSubPage.value,H=>{H==="autoeval"&&e.loadAiVendors&&e.loadAiVendors(),H==="datadict"&&J(),H==="health"&&m(),H==="notification"&&t(),H==="datasource"&&D(),H!=="usage"&&s()});const c=e.themeHues||[45,220,0,140,270,320,180,25,250,-1],d=e.themeHueNames||{},w=e.themeMode||Vue.computed(()=>"light"),r=e.themeHue||Vue.ref(45);function i(H){e.changeThemeMode&&e.changeThemeMode(H)}function p(H){e.changeThemeHue&&e.changeThemeHue(parseInt(H,10))}function o(H){return e.hueColor?e.hueColor(H):H<0?"hsl(0, 0%, 46%)":"hsl("+H+", 75%, 42%)"}function M(H){return e.hueName?e.hueName(H):d[H]||"自定义 "+H}function k(H){e.setNavMode&&e.setNavMode(H)}const C=Vue.ref([]),x=Vue.ref([]),b=Vue.ref(!1);async function D(){b.value=!0;try{const fe=await(await fetch("/api/meta/freshness")).json();fe&&fe.success&&(x.value=fe.items||[])}catch{}b.value=!1}const T=Vue.ref(""),u=Vue.ref("read"),n=Vue.ref(""),f=Vue.ref(!1),E=()=>window.__quantModules&&window.__quantModules.core||{},N=Vue.ref([]),q=Vue.ref(!1);async function z(){q.value=!0;try{const H=await fetch("/api/audit/logs?limit=20",{headers:E().authHeaders?E().authHeaders():{}}).then(function(fe){if(!fe.ok)throw new Error("HTTP "+fe.status);return fe.json()});N.value=H&&H.logs||[]}catch(H){console.error("[system] 审计加载失败:",H),N.value=[]}finally{q.value=!1}}const R=Vue.ref(!1),B=Vue.ref(null),W=Vue.ref(null),U=Vue.ref([]),Y=Vue.ref(null);function Z(H){return H==="completed"?"完成":H==="running"?"运行中":H==="pending"?"排队中":H==="cancelled"?"已取消":"失败"}async function F(){try{const fe=await(await fetch("/api/jobs?limit=20")).json();fe&&fe.success&&(U.value=fe.data&&fe.data.tasks||[])}catch(H){console.warn("[system] 加载任务队列失败:",H)}}async function ee(H){try{await fetch("/api/jobs/"+H+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),F()}catch(fe){console.warn("[system] 取消任务失败:",fe)}}function A(){F(),Y.value=window.setInterval(F,15e3)}function s(){Y.value&&(clearInterval(Y.value),Y.value=null)}Vue.onBeforeUnmount&&Vue.onBeforeUnmount(function(){s()});const S=Vue.ref({items:[]}),l=Vue.ref([]),h=Vue.ref(null),te=Vue.ref({data_sources:[],alerts:[]}),I=function(){return E().authHeaders?E().authHeaders():{}},_=function(H){return fetch(H,{headers:I()}).then(function(fe){if(!fe.ok)throw new Error("HTTP "+fe.status);return fe.json()})};async function m(){R.value=!0,B.value=null;try{const[H,fe,$e,je]=await Promise.all([_("/api/reliability/freshness"),_("/api/reliability/heal-history?limit=20"),_("/api/reliability/startup-report"),_("/api/reliability/source-health")]);S.value=H&&H.data||{items:[]},l.value=fe&&fe.data||[],h.value=$e&&$e.data||null,te.value=je||{data_sources:[],alerts:[]},W.value=new Date().toLocaleTimeString()}catch(H){console.warn("[health] 加载失败:",H),B.value="健康数据加载失败: "+(H.message||""),S.value={items:[]},l.value=[]}finally{R.value=!1}}const P=Vue.ref(!1),y=Vue.ref(""),j=Vue.ref(""),se=Vue.ref({fields:[]});async function J(){P.value=!0,y.value="";try{const H="/api/data-dict"+(j.value?"?category="+j.value:""),fe=await _(H);se.value=fe&&fe.data||{fields:[]}}catch(H){console.warn("[dict] 加载失败:",H),y.value="数据字典加载失败: "+(H.message||""),se.value={fields:[]}}finally{P.value=!1}}function L(H){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[H]||"var(--text-secondary)"}function $(H){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[H]||H}const ie=Vue.computed(()=>(S.value?S.value.items||[]:[]).filter(fe=>fe.status==="stale"||fe.status==="missing").length),me=Vue.ref("rules"),Te=Vue.ref([]),X=Vue.ref([]),oe=Vue.ref([]),Pe=Vue.ref(!1),ne=Vue.ref(""),ge=Vue.ref("price_above"),Me=Vue.ref(""),ce=Vue.ref(!1),he=Vue.ref(60),xe=Vue.ref("");function le(H){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[H]||H}async function ae(){Pe.value=!0;try{const H=await(await fetch("/api/alerts/rules")).json();Te.value=H&&H.rules||[]}catch(H){xe.value="规则加载失败: "+H}finally{Pe.value=!1}}async function ve(){Pe.value=!0;try{const H=await(await fetch("/api/alerts/history?limit=50")).json();X.value=H&&H.history||[]}catch(H){xe.value="历史加载失败: "+H}finally{Pe.value=!1}}async function ze(){Pe.value=!0;try{const H=await(await fetch("/api/alerts/channels")).json(),fe=await(await fetch("/api/alerts/silence")).json();oe.value=H&&H.channels||[],ce.value=!!(fe&&fe.silenced)}catch(H){xe.value="通道状态加载失败: "+H}finally{Pe.value=!1}}function Ae(H){me.value=H,H==="rules"?ae():H==="history"?ve():ze()}async function Ve(){const H=ne.value.trim();if(!H){xe.value="请填写股票代码";return}Pe.value=!0;try{const fe={stock_code:H,rule_type:ge.value};if(ge.value!=="new_pool"){const je=Number(Me.value);if(isNaN(je)){xe.value="阈值必须为数值";return}fe.threshold=je}const $e=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(fe)})).json();$e&&$e.rule?(xe.value="规则已添加",ne.value="",Me.value="",ae()):xe.value=$e&&$e.detail||"添加失败"}catch(fe){xe.value="添加失败: "+fe}finally{Pe.value=!1}}async function nt(H){try{await fetch("/api/alerts/rules/"+H.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!H.enabled})}),H.enabled=!H.enabled}catch(fe){xe.value="切换失败: "+fe}}async function tt(H){try{const fe=await(await fetch("/api/alerts/rules/"+H.id,{method:"DELETE"})).json();fe&&fe.success?(xe.value="规则已删除",ae()):xe.value="删除失败"}catch(fe){xe.value="删除失败: "+fe}}async function at(){try{const H=ce.value?he.value:0,fe=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:H})})).json();ce.value=!!(fe&&fe.silenced),xe.value=ce.value?"已静默":"已恢复推送"}catch(H){xe.value="静默设置失败: "+H}}async function we(){ce.value=!1,await at()}function ke(H){return!!H&&!H.degraded}const Le=Vue.computed(()=>(e&&e.analyticsRank&&e.analyticsRank.value||[]).reduce((fe,$e)=>Math.max(fe,$e.views||0),0)||1),Re=()=>E().OPENAPI_ROUTE_BASE||"/api/openapi";async function Ue(){f.value=!0;try{const H=await E().apiFetch(Re()+"/keys");C.value=H&&H.data||[]}catch(H){ElementPlus.ElMessage.error("加载 API Key 失败: "+(H.message||""))}finally{f.value=!1}}async function Ge(){try{const H=await E().apiFetch(Re()+"/keys",{method:"POST",body:JSON.stringify({name:T.value||"未命名",role:u.value||"read",expire_days:365})});H&&H.success?(n.value=H.api_key||"",T.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await Ue()):ElementPlus.ElMessage.error(H&&(H.detail||H.message)||"生成失败")}catch(H){ElementPlus.ElMessage.error("生成失败: "+(H.message||""))}}async function Qe(){if(n.value)try{await navigator.clipboard.writeText(n.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function et(H){try{const fe=await E().apiFetch(Re()+"/keys/"+H.id,{method:"DELETE"});fe&&fe.success?(ElementPlus.ElMessage.success("Key 已吊销"),n.value&&H.prefix&&n.value.includes(H.prefix)&&(n.value=""),await Ue()):ElementPlus.ElMessage.error(fe&&(fe.detail||fe.message)||"吊销失败")}catch(fe){ElementPlus.ElMessage.error("吊销失败: "+(fe.message||""))}}const lt={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function ft(H){return lt[H]||H}const xt=computed(()=>{var H;return(((H=e.healthMetrics)==null?void 0:H.value)||[]).map(fe=>({name:ft(fe.name),source:fe.name,success_rate:fe.success_rate,avg_latency_ms:fe.avg_latency_ms,calls:fe.calls||0,degraded:!!fe.degraded,data_age_hours:fe.data_age_hours!=null?fe.data_age_hours:null,stale:!!fe.stale,last_fetch:fe.last_fetch||fe.last_success||null}))});function Tt(H){return H.degraded?"degraded":H.success_rate==null?"unknown":H.success_rate>=90?"ok":H.success_rate>=60?"warn":"bad"}function qt(H){return H==null?"":H<1?"刚刚":H<24?Math.round(H)+"小时前":Math.floor(H/24)+"天前"}const g=e.aiUsage||Vue.ref({}),O=Vue.computed(()=>{const H=g.value&&g.value.by_model||{};return Object.entries(H).map(([fe,$e])=>({name:fe,count:$e})).sort((fe,$e)=>$e.count-fe.count)}),Q=Vue.computed(()=>O.value.reduce((H,fe)=>Math.max(H,fe.count),0)||1),de=Vue.computed(()=>O.value.reduce((H,fe)=>H+fe.count,0)||1),ue=Vue.computed(()=>Ee.value.reduce((H,fe)=>Math.max(H,fe.count),0)||0),Ee=Vue.computed(()=>{const H=g.value&&g.value.by_day||{},fe=[],$e=new Date;for(let je=29;je>=0;je--){const wt=new Date($e.getFullYear(),$e.getMonth(),$e.getDate()-je),Et=wt.getFullYear()+"-"+String(wt.getMonth()+1).padStart(2,"0")+"-"+String(wt.getDate()).padStart(2,"0");fe.push({day:Et,count:H[Et]||0})}return fe}),Se=Vue.computed(()=>Ee.value.reduce((H,fe)=>Math.max(H,fe.count),0)||1),Ne=Vue.computed(()=>{const H=g.value&&g.value.by_day||{},fe=new Date,$e=fe.getFullYear()+"-"+String(fe.getMonth()+1).padStart(2,"0")+"-"+String(fe.getDate()).padStart(2,"0");return H[$e]||0}),Oe=Vue.computed(()=>{const H=g.value&&g.value.by_day||{},fe=Object.keys(H).filter($e=>(H[$e]||0)>0);return fe.length?fe[fe.length-1]:""});function Fe(H){e.analyticsDays&&(e.analyticsDays.value=H),typeof e.loadAnalytics=="function"&&e.loadAnalytics()}const Ye='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',ht='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function Xe(H){return H?ht:Ye}return A(),{...e,themeHues:c,themeHueNames:d,themeMode:w,themeHue:r,onThemeModeChange:i,setThemeHue:p,hueColor:o,hueName:M,onNavModeChange:k,analyticsMaxViews:Le,aiModelRank:O,aiModelMax:Q,aiDayTrend:Ee,aiDayMax:Se,todayAiCalls:Ne,lastAiCallDay:Oe,aiTotal:de,aiDayPeak:ue,setAnalyticsDays:Fe,viewIcon:Xe,openApiKeys:C,openApiKeyName:T,openApiKeyRole:u,newOpenApiKey:n,openApiLoading:f,loadOpenApiKeys:Ue,generateOpenApiKey:Ge,copyOpenApiKey:Qe,revokeOpenApiKey:et,healthRows:xt,healthClass:Tt,fmtAge:qt,staleAssetCount:ie,jobQueue:U,loadJobQueue:F,cancelJob:ee,jobStatusText:Z,auditLogs:N,auditLoading:q,loadAuditLogs:z,healthLoading:R,healthError:B,healthUpdatedAt:W,freshnessData:S,healHistory:l,startupReport:h,sourceHealth:te,refreshHealth:m,statusColor:L,statusLabel:$,sourceOk:ke,dictLoading:P,dictError:y,dictCategory:j,dictData:se,loadDataDict:J,ncTab:me,ncRules:Te,ncHistory:X,ncChannels:oe,ncLoading:Pe,ncNewCode:ne,ncNewType:ge,ncNewThreshold:Me,ncSilence:ce,ncSilenceMinutes:he,ncMsg:xe,ncTypeLabel:le,onNcTab:Ae,loadAlertRules:ae,loadAlertHistory:ve,loadAlertChannels:ze,addAlertRule:Ve,toggleAlertRule:nt,removeAlertRule:tt,applySilence:at,clearSilence:we,freshnessItems:x,freshnessLoading:b,loadFreshness:D,goSystemSub:v}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:`
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
                </div>`,setup(){const{ref:e,watch:v,onUnmounted:t}=Vue,c=a("qcState");if(!c)return{};function d(){if(!c.hasMoreAiHistory||!c.loadMoreAiHistory||c.currentPage.value!=="ai"||c.currentSubPage.value!=="history")return;const me=document.documentElement;me.scrollTop+window.innerHeight>=me.scrollHeight-300&&c.loadMoreAiHistory()}window.addEventListener("scroll",d,{passive:!0}),t(()=>window.removeEventListener("scroll",d));const w=e(null),r=e(!1),i=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function p(me){return!me||me.total===0||me.rate===null||me.rate===void 0?"--":me.rate.toFixed(2)+"%"}const o=e(5);function M(me){o.value=me}function k(me,Te){if(!me)return"--";if(me.available===!1)return"— 数据不可达";const X=me["hit_n"+Te];return X===!0?"✓ 命中":X===!1?"✗ 未中":"– 中性/待验证"}async function C(){r.value=!0;try{const Te=await(await fetch("/api/ai/track")).json();w.value=Te&&Te.success?Te.data:null}catch(me){console.warn("[eval-track] 评估命中率加载失败:",me),w.value=null}finally{r.value=!1}}v(function(){return c.currentPage.value+"/"+c.currentSubPage.value},function(me){me==="ai/evaluation-analysis"&&C()},{immediate:!0});const x=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:b,summary:D,trades:T,loading:u,loadError:n,showAddForm:f,addForm:E,addSaving:N,tradeFormVisible:q,tradeForm:z,tradeSaving:R,portfolioTab:B,equityDays:W,equityLoading:U,equityNote:Y,equityHasData:Z,loadPortfolio:F,addPosition:ee,removePosition:A,openTradeForm:s,submitTrade:S,loadTrades:l,loadEquity:h,fmtSigned:te,fmtSignedPct:I,signClass:_,riskTab:m,riskLoading:P,riskNote:y,riskHasData:j,riskData:se,riskMetricList:J,loadRisk:L}=x;v(b,function(me){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((me||[]).map(function(Te){return{code:Te.stock_code,name:Te.stock_name||Te.stock_code}}))},{deep:!0}),v(function(){return c.currentPage.value+"/"+c.currentSubPage.value},function(me){me==="ai/portfolio"?(F(),l(),h(W?W.value:30),typeof L=="function"&&L()):me==="ai/overview"&&F()},{immediate:!0});let $="",ie=!1;return v(function(){const me=c.currentSubPage&&c.currentSubPage.value,Te=!!(c.detailSplitEnabled&&c.detailSplitEnabled.value),X={sub:me,split:Te,kind:"",view:"",key:"",first:null,expandList:null,expandFn:null};if(me==="history"){const oe=c.aiHistoryView&&c.aiHistoryView.value||"date",Pe=oe==="date"?c.groupedByDate:oe==="month"?c.groupedByMonth:c.aiHistoryByStock,ne=Pe&&Pe.value||{},ge=Object.keys(ne);X.kind="history",X.view=oe,X.key=ge.length?ge[0]:"",X.first=ge.length&&(ne[ge[0]]||[])[0]||null,X.expandList=oe==="date"?c.expandedDates:oe==="month"?c.expandedMonths:c.expandedStocks,X.expandFn=oe==="date"?c.toggleDateExpand:oe==="month"?c.toggleMonthExpand:c.toggleStockExpand}else if(me==="chat_history"){const oe=c.chatHistoryView&&c.chatHistoryView.value||"date",Pe=oe==="date"?c.chatGroupedByDate:oe==="month"?c.chatGroupedByMonth:c.chatGroupedByStock,ne=Pe&&Pe.value||{},ge=Object.keys(ne);X.kind="chat",X.view=oe,X.key=ge.length?ge[0]:"",X.first=ge.length&&(ne[ge[0]]||[])[0]||null,X.expandList=oe==="date"?c.expandedChatDates:oe==="month"?c.expandedChatMonths:c.expandedChatStocks,X.expandFn=oe==="date"?c.toggleChatDateExpand:oe==="month"?c.toggleChatMonthExpand:c.toggleChatStockExpand}return X},function(me){if(!me.split||!me.first||!me.kind)return;const Te=me.sub!==$,X=c.stockDetail&&c.stockDetail.value,oe=!!(X&&X.stock);if(!Te&&oe||ie)return;$=me.sub,ie=!0;try{me.key&&me.expandList&&me.expandFn&&me.expandList.value&&me.expandList.value.indexOf(me.key)<0&&me.expandFn(me.key)}catch{}const Pe=me.kind==="history"?c.viewAiResult(me.first):c.viewChatSession(me.first);Pe&&typeof Pe.finally=="function"?Pe.finally(function(){ie=!1}):ie=!1},{immediate:!0}),{...c,trackData:w,trackLoading:r,trackWindows:i,fmtTrackRate:p,loadTrack:C,trackWindow:o,setTrackWindow:M,trackHitText:k,positions:b,summary:D,trades:T,loading:u,loadError:n,showAddForm:f,addForm:E,addSaving:N,tradeFormVisible:q,tradeForm:z,tradeSaving:R,portfolioTab:B,equityDays:W,equityLoading:U,equityNote:Y,equityHasData:Z,loadPortfolio:F,addPosition:ee,removePosition:A,openTradeForm:s,submitTrade:S,loadTrades:l,loadEquity:h,fmtSigned:te,fmtSignedPct:I,signClass:_,riskTab:m,riskLoading:P,riskNote:y,riskHasData:j,riskData:se,riskMetricList:J,loadRisk:L}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.marketReview={create:function(a){const{ref:e,seq:v,authHeaders:t}=a,c=e([]),d=e(!1),w=e(!1),r=e(""),i=e(null),p=e(!1),o=e(!1);async function M(){const E=++v.n;d.value=!0,w.value=!1;try{const N=await fetch("/api/market/reviews?limit=30",{headers:_authHeaders()}).then(q=>q.json());if(E!==v.n)return;N&&N.success?c.value=Array.isArray(N.data)?N.data:[]:w.value=!0}catch(N){console.error("[market-review] 复盘列表加载失败:",N),w.value=!0}finally{E===v.n&&(d.value=!1)}}function k(E){r.value=E,T(E)}function C(E){r.value===E?D():k(E)}function x(E){return E==null||isNaN(Number(E))?"—":(Number(E)>=0?"+":"")+Number(E).toFixed(2)+"%"}function b(E){return E==null||isNaN(Number(E))?"—":Number(E).toFixed(2)}function D(){r.value="",i.value=null,o.value=!1}async function T(E){const N=++v.n;p.value=!0,o.value=!1,i.value=null;try{const q=E?"/api/market/review?date="+encodeURIComponent(E):"/api/market/review",z=await fetch(q,{headers:_authHeaders()}).then(R=>R.json());if(N!==v.n)return;z&&z.success?i.value=z.data:o.value=!0}catch(q){console.error("[market-review] 复盘详情加载失败:",q),o.value=!0}finally{N===v.n&&(p.value=!1)}}function u(E){return E>0?"up":E<0?"down":"flat"}function n(E){return E==null||isNaN(Number(E))?"—":(E>0?"+":"")+Number(E).toFixed(2)+"%"}function f(E){const N={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(E||{}).map(function(q){const z=q[0],R=q[1],B=!R||R==="unavailable"||R==="数据不可达";return{label:N[z]||z,value:B?"数据不可达":R,unavailable:B}})}return{marketReviews:c,marketReviewLoading:d,marketReviewError:w,selectedReviewDate:r,marketReviewDetail:i,marketReviewDetailLoading:p,marketReviewDetailError:o,loadMarketReviews:M,openMarketReview:k,toggleMarketReviewDate:C,backToMarketReviewList:D,loadMarketReviewDetail:T,marketReviewChgClass:u,marketReviewChgText:n,marketReviewSrcEntries:f,fmtPct:x,fmtEmotion:b}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.factor={create:function(a){const{ref:e,seq:v,withAuth:t,authHeaders:c,activeStrategyId:d,paramValues:w}=a,r=e("mom20"),i=e(!1),p=e(!1),o=e(null),M=e(null),k=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],C=e('{"top_n":[10,20,30]}'),x=e(null),b=e(""),D=e(!1),T=e(null);async function u(){if(!d.value){ElementPlus.ElMessage.warning("请先选择策略");return}let z;try{z=JSON.parse(C.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!z||Object.keys(z).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}D.value=!0,x.value=null,b.value="";try{const R=await fetch("/api/strategies/"+d.value+"/sweep",{method:"POST",headers:_authHeaders(),body:JSON.stringify({param_grid:z})}).then(function(B){return B.json()});R&&Array.isArray(R.results)?(x.value=R.results,b.value="完成 "+R.count+" 组"+(R.data_degraded?" (数据不可达, 结果降级)":""),T.value=R.param_stability||null):b.value=R&&R.detail||"扫描失败"}catch(R){console.error("[sweep]",R),b.value="扫描失败: "+R.message}finally{D.value=!1}}async function n(){const z=++v.n;i.value=!0;try{const R=await t("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:d.value||"multi_factor",factor_key:r.value,params:w.value||{}})}).then(function(W){return W.json()}),B=R&&R.report?R.report.n1||{}:{};o.value=B}catch(R){console.error("[research] 因子IC分析失败:",R),alert("因子 IC 分析失败: "+R.message)}finally{z===v.n&&(i.value=!1)}}async function f(){const z=++v.n;p.value=!0;try{const R=await t("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:d.value||"multi_factor",factor_key:r.value,params:w.value||{}})}).then(function(B){return B.json()});R&&R.layers?M.value=R:alert("分层回测: "+(R.message||"无数据"))}catch(R){console.error("[research] 分层回测失败:",R),alert("分层回测失败: "+R.message)}finally{z===v.n&&(p.value=!1)}}const E=e(null),N=e(!1);async function q(){const z=++v.n;N.value=!0,E.value=null;try{const R=await t("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:d.value||"multi_factor",factor_key:r.value,params:w.value||{}})}).then(function(B){return B.json()});R&&R.detail?E.value=R.detail:alert("因子详情: "+(R.message||"无数据"))}catch(R){console.error("[research] 因子详情失败:",R),alert("因子详情失败: "+R.message)}finally{z===v.n&&(N.value=!1)}}return{factorKey:r,factorIcLoading:i,factorLayerLoading:p,factorIcReport:o,factorLayerResult:M,factorOptions:k,runFactorIc:n,runFactorLayer:f,factorDetail:E,factorDetailLoading:N,runFactorDetail:q,sweepGrid:C,sweepResult:x,sweepMessage:b,sweepLoading:D,sweepStability:T,runSweep:u}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.researchPage=window.__quantModules.researchPage||{},window.__quantModules.researchPage.history={create:function(a){const{seq:e,state:v}=a,t=Vue.ref([]),c=Vue.ref(!1),d=Vue.ref(!1),w=Vue.ref(""),r=Vue.ref([]),i=Vue.ref(""),p=Vue.ref([]),o=Vue.ref(!1),M=Vue.ref(!1),k={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function C(N){return k[N]||N||"—"}function x(N){v&&v.navigateTo&&v.navigateTo("shortterm",N)}function b(){v.currentSubPage.value="research-history",D()}async function D(){const N=++e.n;c.value=!0,d.value=!1;try{const q=window.__quantModules&&window.__quantModules.core||{},z=typeof q.authHeaders=="function"?q.authHeaders():{},R=w.value?"?type="+encodeURIComponent(w.value):"",B=await fetch("/api/strategies/research-history"+R,{headers:z}).then(function(W){return W.json()});if(N!==e.n)return;t.value=B&&B.items||[]}catch(q){console.error("[research-history] 加载失败:",q),d.value=!0}finally{N===e.n&&(c.value=!1)}}async function T(){const N=++e.n;M.value=!0;try{const q=window.__quantModules&&window.__quantModules.core||{},z=typeof q.authHeaders=="function"?q.authHeaders():{},R=w.value?"?type="+encodeURIComponent(w.value):"",B=await fetch("/api/strategies/research-history/export"+R,{headers:z});if(!B.ok)throw new Error("HTTP "+B.status);const W=await B.blob(),U=URL.createObjectURL(W),Y=document.createElement("a");Y.href=U,Y.download="research_history.csv",document.body.appendChild(Y),Y.click(),document.body.removeChild(Y),URL.revokeObjectURL(U)}catch(q){console.error("[research-history] 导出失败:",q)}finally{N===e.n&&(M.value=!1)}}function u(N){const q=r.value.indexOf(N);q>=0?r.value.splice(q,1):r.value.length<10&&r.value.push(N)}function n(N){i.value=i.value===N?"":N}async function f(){const N=++e.n,q=r.value;if(!(q.length<2)){o.value=!0;try{const z=window.__quantModules&&window.__quantModules.core||{},R=typeof z.authHeaders=="function"?z.authHeaders():{},B=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},R),body:JSON.stringify({ids:q})}).then(function(W){return W.json()});p.value=B&&B.items||[]}catch(z){console.error("[research-history] 对比失败:",z)}finally{N===e.n&&(o.value=!1)}}}async function E(N){try{const q=window.__quantModules&&window.__quantModules.core||{},z=typeof q.authHeaders=="function"?q.authHeaders():{},R=await fetch("/api/strategies/research-history/"+N,{method:"DELETE",headers:z}).then(function(B){return B.json()});if(R&&R.deleted){t.value=t.value.filter(function(W){return W.id!==N});const B=r.value.indexOf(N);B>=0&&r.value.splice(B,1)}}catch(q){console.error("[research-history] 删除失败:",q)}}return{researchHistory:t,researchHistoryLoading:c,researchHistoryError:d,researchHistoryType:w,researchHistorySelected:r,researchDetailId:i,researchCompareRows:p,researchCompareLoading:o,researchExportLoading:M,researchTypeLabel:C,goShortterm:x,openResearchHistory:b,loadResearchHistory:D,exportResearchHistory:T,toggleResearchSelect:u,toggleResearchDetail:n,runResearchCompare:f,deleteResearchHistory:E}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.researchPage=window.__quantModules.researchPage||{};window.__quantModules.researchPage.part1=`
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
                </div>`;window.__quantModules=window.__quantModules||{};window.__quantModules.researchPage=window.__quantModules.researchPage||{};window.__quantModules.researchPage.view=window.__quantModules.researchPage.part1+window.__quantModules.researchPage.part2;(function(){const{ref:a,computed:e,watch:v,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:window.__quantModules.researchPage.view,setup(){const c=t("qcState"),d=Vue.ref(!1),w=Vue.ref(!1),r={n:0};if(!c)return{};const i=a(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function p(G){i.value=G;try{localStorage.setItem("quant_strategy_mode",G)}catch{}c.currentSubPage.value="strategy-manage"}const o=a([]),M=a(!1),k=a(!1),C=a(""),x=a(""),b=a(""),D=a({}),T=a(!1),u=a(""),n=a(""),f=a([]),E=a([]),N=a(""),q=a(""),z=a(!0),R=a(!0),B=a("20:00"),W=a("default"),U=a(!1),Y=a(""),Z=e(function(){return o.value.find(function(G){return G.id===b.value})||null});async function F(G,ye){ye=ye||{},ye.headers=Object.assign({},ye.headers||{});const Ze=localStorage.getItem("quant_token")||"";return Ze&&(ye.headers.Authorization="Bearer "+Ze),fetch(G,ye)}async function ee(){const G=++r.n;M.value=!0,k.value=!1,C.value="",x.value="";try{const ye=await F("/api/strategies").then(function(Yt){return Yt.json()});if(G!==r.n)return;let Ze=null;Array.isArray(ye)?Ze=ye:ye&&Array.isArray(ye.strategies)?(Ze=ye.strategies,ye.warn&&(x.value=String(ye.warn))):(k.value=!0,C.value=ye&&ye.detail?String(ye.detail):"策略列表加载失败（接口返回异常）"),Ze!==null&&(o.value=Ze,o.value.length&&!b.value&&(b.value=o.value[0].id,A()))}catch(ye){console.error("[research] 策略列表加载失败:",ye),k.value=!0,C.value="策略列表加载失败: "+(ye&&ye.message||"网络错误")}finally{G===r.n&&(M.value=!1)}}function A(){const G=Z.value;G&&(D.value={},G.schema.forEach(function(ye){D.value[ye.key]=ye.default}),n.value="",j(),s(),te())}async function s(){if(!b.value){E.value=[];return}try{const G=await F("/api/strategies/"+b.value+"/profiles").then(function(ye){return ye.json()});E.value=G&&G.data&&G.data.profiles||[],N.value=""}catch(G){console.error("[research] 方案列表加载失败:",G),E.value=[]}}async function S(){d.value=!0;const G=(q.value||"").trim();if(!G){window._core&&window._core.showToast("请输入方案名称");return}try{const ye=await F("/api/strategies/"+b.value+"/profiles",{method:"POST",body:JSON.stringify({name:G,params:D.value})}).then(function(Ze){return Ze.json()});if(ye&&ye.detail){window._core&&window._core.showToast(String(ye.detail));return}q.value="",await s(),window._core&&window._core.showToast("方案已保存")}catch(ye){console.error("[research] 方案保存失败:",ye),window._core&&window._core.showToast("方案保存失败")}}function l(){const G=E.value.find(function(ye){return ye.id===N.value});G&&(Object.keys(G.params||{}).forEach(function(ye){D.value[ye]=G.params[ye]}),window._core&&window._core.showToast("已应用方案: "+G.name))}async function h(){if(N.value)try{await F("/api/strategies/"+b.value+"/profiles/"+N.value,{method:"DELETE"}).then(function(G){return G.json()}),await s(),window._core&&window._core.showToast("方案已删除")}catch(G){console.error("[research] 方案删除失败:",G)}}async function te(){try{const G=await F("/api/strategies/governance").then(function(Yt){return Yt.json()}),Ze=(G&&G.data&&G.data.strategies||{})[b.value]||{};z.value=Ze.enabled!==!1,B.value=Ze.schedule||"20:00",W.value=Ze.universe==="all"?"all":"default",R.value=Ze.show_in_calendar!==!1,Y.value=Ze.last_holdings||""}catch(G){console.error("[research] 纳管状态加载失败:",G)}}async function I(){try{await F("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const G={};return G[b.value]={enabled:z.value,schedule:B.value,universe:W.value,show_in_calendar:R.value},G}()})}).then(function(G){return G.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(G){console.error("[research] 纳管更新失败:",G)}}async function _(){if(b.value){U.value=!0;try{const G=await F("/api/strategies/"+b.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:u.value||void 0})}).then(function(ye){return ye.json()});if(G&&G.detail){window._core&&window._core.showToast(String(G.detail));return}window._core&&window._core.showToast("持仓已生成"),await te()}catch(G){console.error("[research] run-once 失败:",G),window._core&&window._core.showToast("持仓生成失败")}finally{U.value=!1}}}function m(){Y.value&&window.open(Y.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function P(){const G=Z.value;if(!G)return;const ye=(q.value||"").trim()||G.name+"-副本";y(ye,Object.assign({},D.value)),window._core&&window._core.showToast("已复制为副本方案: "+ye)}async function y(G,ye){try{await F("/api/strategies/"+b.value+"/profiles",{method:"POST",body:JSON.stringify({name:G,params:ye})}).then(function(Ze){return Ze.json()}),await s()}catch(Ze){console.error("[research] 副本保存失败:",Ze)}}async function j(){const G=++r.n;if(b.value)try{const ye=await F("/api/strategies/"+b.value+"/runs?limit=5").then(function(Ze){return Ze.json()});if(G!==r.n)return;f.value=Array.isArray(ye)?ye:[]}catch{f.value=[]}}async function se(){if(b.value){T.value=!0;try{const G=await F("/api/strategies/"+b.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:D.value,as_of:u.value||void 0})}).then(function(ye){return ye.json()});G&&G.status==="success"?j():alert("运行失败: "+(G.detail||JSON.stringify(G)))}catch(G){console.error("[research] 策略运行失败:",G),alert("运行失败: "+G.message)}finally{T.value=!1}}}async function J(){if(b.value)try{const G=Object.keys(D.value).map(function(Ze){return encodeURIComponent(Ze)+"="+encodeURIComponent(D.value[Ze])}).join("&"),ye=await F("/api/strategies/"+b.value+"/ptrade-code?"+G).then(function(Ze){return Ze.json()});ye&&ye.code?n.value=ye.code:alert("导出失败: "+(ye.detail||JSON.stringify(ye)))}catch(G){console.error("[research] PTrade 导出失败:",G),alert("导出失败: "+G.message)}}function L(){if(!n.value)return;const G=document.createElement("textarea");G.value=n.value,document.body.appendChild(G),G.select();try{document.execCommand("copy")}catch{}document.body.removeChild(G)}const $=window.__quantModules.researchPage.marketReview.create({ref:a,seq:r,authHeaders:rt}),{marketReviews:ie,marketReviewLoading:me,marketReviewError:Te,selectedReviewDate:X,marketReviewDetail:oe,marketReviewDetailLoading:Pe}=$,{marketReviewDetailError:ne,loadMarketReviews:ge,openMarketReview:Me,toggleMarketReviewDate:ce,backToMarketReviewList:he,loadMarketReviewDetail:xe}=$,{marketReviewChgClass:le,marketReviewChgText:ae,marketReviewSrcEntries:ve,fmtPct:ze,fmtEmotion:Ae}=$,Ve=window.__quantModules.researchPage.factor.create({ref:a,seq:r,withAuth:F,authHeaders:rt,activeStrategyId:b,paramValues:D}),{factorKey:nt,factorIcLoading:tt,factorLayerLoading:at,factorIcReport:we,factorLayerResult:ke,factorOptions:Le}=Ve,{runFactorIc:Re,runFactorLayer:Ue,factorDetail:Ge,factorDetailLoading:Qe,runFactorDetail:et,sweepGrid:lt}=Ve,{sweepResult:ft,sweepMessage:xt,sweepLoading:Tt,sweepStability:qt,runSweep:g}=Ve,O=window.__quantModules.researchPage.history.create({seq:r,state:c}),{researchHistory:Q,researchHistoryLoading:de,researchHistoryError:ue,researchHistoryType:Ee,researchHistorySelected:Se,researchDetailId:Ne}=O,{researchCompareRows:Oe,researchCompareLoading:Fe,researchExportLoading:Ye,researchTypeLabel:ht,goShortterm:Xe,openResearchHistory:H}=O,{loadResearchHistory:fe,exportResearchHistory:$e,toggleResearchSelect:je,toggleResearchDetail:wt,runResearchCompare:Et,deleteResearchHistory:At}=O;v(function(){return c.currentPage.value+"/"+c.currentSubPage.value},function(G){G==="research/research-overview"&&(ee(),ge(),Ht(),Wt()),(G==="research/market-review"||G==="shortterm/market-review")&&!X.value&&ge(),G==="research/quant-research"&&ee(),G==="research/backtest-history"&&Ma()},{immediate:!0});const ot=a([]),bt=a(null),It=a(null),ia=a(null),dt=a(""),Bt=a(!1),St=a(!1),yt=a(""),$t=a(""),Kt=a("");function rt(){const G=localStorage.getItem("quant_token")||"";return G?{Authorization:"Bearer "+G,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function Ht(){const G=++r.n;try{const ye=await fetch("/api/strategies/variants",{headers:rt()}).then(function(Ze){return Ze.json()});if(G!==r.n)return;ot.value=ye&&ye.data&&ye.data.variants||[]}catch(ye){console.error("[i3a] 加载 variants 失败:",ye)}}async function Xt(){if(!b.value){yt.value="请先在量化研究选择母本策略";return}St.value=!0,yt.value="";try{const G=await fetch("/api/strategies/"+b.value+"/clone",{method:"POST",headers:rt(),body:JSON.stringify({name:(q.value||"").trim()||void 0,params:Object.assign({},D.value)})}).then(function(Ze){return Ze.json()});if(G&&G.detail){yt.value=String(G.detail);return}const ye=G&&G.data;ye&&ye.sid&&(bt.value=ye.sid,yt.value="已复制为新策略: "+ye.name,await Ht(),await Ut(ye.sid))}catch(G){console.error("[i3a] 复制失败:",G),yt.value="复制失败: "+G.message}finally{St.value=!1}}async function oa(G){bt.value=G,yt.value="",dt.value="",await Ut(G)}async function Ut(G){try{const ye=await fetch("/api/strategies/"+G+"/selection-spec",{headers:rt()}).then(function(Ze){return Ze.json()});ye&&ye.data&&ye.data.spec&&(It.value=Object.assign({},ye.data.spec),ia.value=ye.data.fields,$t.value=(ye.data.spec.industry_scope||[]).join(","),Kt.value=(ye.data.spec.market_cap_range||[]).join(","))}catch(ye){console.error("[i3a] 加载 spec 失败:",ye)}}async function ra(){if(w.value=!0,!(!bt.value||!It.value))try{It.value.industry_scope=$t.value?$t.value.split(/[,，]/).map(function(ye){return ye.trim()}).filter(Boolean):[],It.value.market_cap_range=Kt.value?Kt.value.split(/[,，]/).map(Number).filter(function(ye){return!isNaN(ye)}):[];const G=await fetch("/api/strategies/"+bt.value+"/selection-spec",{method:"PUT",headers:rt(),body:JSON.stringify({spec:It.value})}).then(function(ye){return ye.json()});G&&G.data&&G.data.spec&&(It.value=G.data.spec,yt.value="SelectionSpec 已保存")}catch(G){console.error("[i3a] 保存 spec 失败:",G),yt.value="保存失败"}}async function K(){if(!bt.value){yt.value="请先选择/创建微调策略";return}St.value=!0,yt.value="";try{const G=await fetch("/api/strategies/"+bt.value+"/run-once",{method:"POST",headers:rt(),body:"{}"}).then(function(ye){return ye.json()});yt.value=G&&G.detail?String(G.detail):"持仓已生成: "+(G&&G.data&&G.data.symbols||0)+" 只"}catch(G){console.error("[i3a] run-once 失败:",G),yt.value="生成持仓失败"}finally{St.value=!1}}async function Ce(){if(!bt.value){yt.value="请先选择/创建微调策略";return}It.value||await Ut(bt.value),Bt.value=!0,yt.value="";try{const G=await fetch("/api/strategies/"+bt.value+"/ai-trade-code",{method:"POST",headers:rt(),body:JSON.stringify({spec:It.value})}).then(function(ye){return ye.json()});if(G&&G.detail){yt.value=String(G.detail);return}G&&G.data&&(dt.value=G.data.code||"",G.data.api_errors&&G.data.api_errors.length?yt.value="生成成功(含 API 校验告警 "+G.data.api_errors.length+" 条)":yt.value="AI 交易码已生成, 已通过矩阵内校验")}catch(G){console.error("[i3a] AI 交易码失败:",G),yt.value="AI 生成失败: "+G.message}finally{Bt.value=!1}}function Be(){if(dt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(dt.value).then(function(){yt.value="代码已复制"});else{const G=document.createElement("textarea");G.value=dt.value,document.body.appendChild(G),G.select(),document.execCommand("copy"),document.body.removeChild(G),yt.value="代码已复制"}}const Ie=a(""),vt=a(""),it=a([]),_t=a(""),Dt=a(""),kt=a(""),ma=a(null),Zt=a(!1),fa=a(!1),Gt=a(!1);function ea(){const G=localStorage.getItem("quant_token")||"";return G?{Authorization:"Bearer "+G,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function Wt(){const G=++r.n;try{const ye=await fetch("/api/strategies/custom",{headers:ea()}).then(function(Ze){return Ze.json()});if(G!==r.n)return;it.value=ye&&ye.data&&ye.data.customs||[]}catch(ye){console.error("[i3b] 加载自定义策略失败:",ye)}}async function _a(){if(!vt.value.trim()){kt.value="请描述策略思路";return}Zt.value=!0,kt.value="";try{const G=await fetch("/api/strategies/custom",{method:"POST",headers:ea(),body:JSON.stringify({name:Ie.value.trim()||"自定义策略",prompt:vt.value})}).then(function(ye){return ye.json()});if(G&&G.detail){kt.value=String(G.detail);return}G&&G.data&&(Dt.value=G.data.code||"",kt.value="AI 代写成功: "+G.data.sid+(G.data.api_errors&&G.data.api_errors.length?" (API 告警 "+G.data.api_errors.length+" 条)":" (校验通过)"),await Wt())}catch(G){console.error("[i3b] AI 代写失败:",G),kt.value="AI 代写失败: "+G.message}finally{Zt.value=!1}}async function ta(){if(_t.value)try{const G=await fetch("/api/strategies/custom/"+_t.value+"/code",{headers:ea()}).then(function(ye){return ye.json()});G&&G.data&&(Dt.value=G.data.code||"",kt.value="")}catch(G){console.error("[i3b] 读取代码失败:",G)}}async function xa(){if(!_t.value){kt.value="请先选择自定义策略";return}fa.value=!0,kt.value="";try{const G=await fetch("/api/strategies/custom/"+_t.value+"/backtest",{method:"POST",headers:ea(),body:"{}"}).then(function(ye){return ye.json()});if(G&&G.detail){kt.value=String(G.detail);return}G&&G.data&&(ma.value=G.data,kt.value="回测完成")}catch(G){console.error("[i3b] 回测失败:",G),kt.value="回测失败: "+G.message}finally{fa.value=!1}}async function ca(){if(!_t.value){kt.value="请先选择自定义策略";return}Gt.value=!0,kt.value="";try{const G=await fetch("/api/strategies/custom/"+_t.value+"/ai-optimize",{method:"POST",headers:ea(),body:JSON.stringify({backtest:ma.value})}).then(function(ye){return ye.json()});if(G&&G.detail){kt.value=String(G.detail);return}G&&G.data&&(Dt.value=G.data.code||"",kt.value="AI 优化完成"+(G.data.api_errors&&G.data.api_errors.length?" (API 告警 "+G.data.api_errors.length+" 条)":" (校验通过)"))}catch(G){console.error("[i3b] AI 优化失败:",G),kt.value="AI 优化失败: "+G.message}finally{Gt.value=!1}}function gt(){if(Dt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Dt.value).then(function(){kt.value="代码已复制"});else{const G=document.createElement("textarea");G.value=Dt.value,document.body.appendChild(G),G.select(),document.execCommand("copy"),document.body.removeChild(G),kt.value="代码已复制"}}const Mt=Vue.ref([]),Nt=Vue.ref(!1),Ot=Vue.ref(!1),da=Vue.ref(30);async function Ma(){const G=++r.n;Nt.value=!0,Ot.value=!1;try{const ye=window.__quantModules&&window.__quantModules.core||{},Ze=typeof ye.authHeaders=="function"?ye.authHeaders():{},Yt=await fetch("/api/backtest/history?days="+da.value,{headers:Ze}).then(function(Qt){return Qt.json()});if(G!==r.n)return;Mt.value=Yt&&Yt.data||[]}catch(ye){console.error("[backtest] 回测历史加载失败:",ye),Ot.value=!0}finally{G===r.n&&(Nt.value=!1)}}return{...c,strategyManageMode:i,openStrategyManage:p,btHistory:Mt,btHistoryLoading:Nt,btHistoryError:Ot,btHistoryDays:da,loadBtHistory:Ma,researchHistory:Q,researchHistoryLoading:de,researchHistoryError:ue,researchHistoryType:Ee,researchHistorySelected:Se,researchDetailId:Ne,researchCompareRows:Oe,researchCompareLoading:Fe,researchTypeLabel:ht,goShortterm:Xe,openResearchHistory:H,loadResearchHistory:fe,researchExportLoading:Ye,exportResearchHistory:$e,toggleResearchSelect:je,toggleResearchDetail:wt,runResearchCompare:Et,deleteResearchHistory:At,marketReviews:ie,marketReviewLoading:me,marketReviewError:Te,selectedReviewDate:X,marketReviewDetail:oe,marketReviewDetailLoading:Pe,marketReviewDetailError:ne,loadMarketReviews:ge,openMarketReview:Me,toggleMarketReviewDate:ce,backToMarketReviewList:he,loadMarketReviewDetail:xe,marketReviewChgClass:le,marketReviewChgText:ae,marketReviewSrcEntries:ve,fmtPct:ze,fmtEmotion:Ae,strategies:o,strategiesLoading:M,strategiesError:k,strategiesErrorText:C,strategiesWarn:x,activeStrategyId:b,activeStrategy:Z,paramValues:D,strategyRunning:T,ptradeCode:n,strategyRuns:f,savingProfile:d,variantSaving:w,loadStrategies:ee,onStrategyChange:A,runActiveStrategy:se,exportActivePtradeCode:J,copyPtradeCode:L,profiles:E,profileSelect:N,profileName:q,loadProfiles:s,saveProfile:S,applyProfile:l,deleteProfile:h,govEnabled:z,govSchedule:B,govUniverse:W,govRunning:U,lastHoldings:Y,loadGov:te,updateGov:I,runOnceActive:_,openLastHoldings:m,cloneStrategy:P,govShowCalendar:R,factorKey:nt,factorIcLoading:tt,factorLayerLoading:at,factorIcReport:we,factorLayerResult:ke,factorOptions:Le,runFactorIc:Re,runFactorLayer:Ue,factorDetail:Ge,factorDetailLoading:Qe,runFactorDetail:et,variants:ot,variantSelected:bt,variantSpec:It,specFields:ia,aiCode:dt,aiCodeLoading:Bt,variantBusy:St,variantMsg:yt,loadVariants:Ht,cloneNewStrategy:Xt,selectVariant:oa,loadVariantSpec:Ut,saveVariantSpec:ra,runVariantOnce:K,genVariantAiCode:Ce,copyVariantCode:Be,customName:Ie,customPrompt:vt,customs:it,customSelected:_t,customCode:Dt,customMsg:kt,customBtResult:ma,customGenLoading:Zt,customBtLoading:fa,customOptLoading:Gt,loadCustoms:Wt,genCustomCode:_a,loadCustomCode:ta,runCustomBacktest:xa,runCustomOptimize:ca,copyCustomCode:gt,sweepGrid:lt,sweepResult:ft,sweepMessage:xt,sweepLoading:Tt,sweepStability:qt,runSweep:g}}}})();(function(){const{inject:a,ref:e,onMounted:v,computed:t,nextTick:c}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
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
                </div>`,setup(){const d=a("qcState");if(!d)return{};const w=d.currentPage,r=d.currentSubPage,i=e(""),p=e(null),o=e(!1),M=e(!1),k=e("数据加载失败"),C=e("请检查服务后重试"),x=e(null),b=e(null),D=e(!1),T=e(!1),u=e("数据加载失败"),n=e("请检查服务后重试"),f=e(null),E=e(1),N=50,q=t(function(){const K=b.value||[];if(K.length<=200)return K;const Ce=(E.value-1)*N;return K.slice(Ce,Ce+N)}),z=e(null),R=e(!1),B=e(!1),W=e("数据加载失败"),U=e("请检查服务后重试"),Y=e([]),Z=e(!1);async function F(){Z.value=!0;try{const K=await he("/api/shortterm/dates/summary",!1);K&&K.success&&(Y.value=K.dates||[])}catch{Y.value=[]}finally{Z.value=!1}}function ee(K){K!==i.value&&(i.value=K,H(!0))}const A=e("行业资金流"),s=e("今日"),S=e(""),l=e(null),h=e(1),te=e(!1),I=e(!1),_=e("数据加载失败"),m=e("请检查服务后重试"),P=e(""),y=e(null),j=e(!1),se=e(null),J=e(!1),L=e(!1),$=e(""),ie=e(""),me=e(!1);function Te(){const K=localStorage.getItem("quant_token")||"";return K?{Authorization:"Bearer "+K,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const X={},oe=[],Pe=50,ne=60*1e3;let ge=0,Me=0,ce=0;function he(K,Ce){const Be=Date.now(),Ie=X[K];return!Ce&&Ie&&Be-Ie.ts<ne?Promise.resolve(Ie.data):fetch(K,{headers:Te()}).then(function(vt){return vt.json()}).then(function(vt){if(X[K]||oe.push(K),X[K]={ts:Date.now(),data:vt},oe.length>Pe){const it=oe.shift();delete X[it]}return vt})}async function xe(K){const Ce=++ge;o.value=!0,M.value=!1;try{const Be="/api/shortterm/pools"+(i.value?"?date="+i.value:""),Ie=await he(Be,K);if(Ce!==ge)return;Ie&&Ie.success?(p.value=Ie,c(Ye)):Ie&&Ie.detail?(M.value=!0,k.value=String(Ie.detail),C.value="请先登录后再查看"):(M.value=!0,k.value="数据加载失败",C.value="请检查服务后重试")}catch{if(Ce!==ge)return;M.value=!0,k.value="数据加载失败",C.value="请检查服务后重试"}finally{Ce===ge&&(o.value=!1)}}async function le(K){const Ce=++ge;D.value=!0,T.value=!1;try{const Be="/api/shortterm/lhb"+(i.value?"?date="+i.value:""),Ie=await he(Be,K);if(Ce!==ge)return;Ie&&Ie.success?(b.value=Array.isArray(Ie.rows)?Ie.rows:null,f.value=Ie.available===!1&&Ie.reason||null,E.value=1):Ie&&Ie.detail?(T.value=!0,u.value=String(Ie.detail),n.value="请先登录后再查看"):(T.value=!0,u.value="数据加载失败",n.value="请检查服务后重试")}catch{if(Ce!==ge)return;T.value=!0,u.value="数据加载失败",n.value="请检查服务后重试"}finally{Ce===ge&&(D.value=!1)}}const ae=t(function(){const K=p.value&&p.value.ladder&&p.value.ladder.tiers;return!K||!Object.keys(K).length?"—":Object.keys(K).sort(function(Ce,Be){return Ce-Be}).map(function(Ce){return Ce+"板:"+K[Ce]}).join(" ")}),ve=t(function(){const K=p.value&&p.value.zt||[];return x.value?K.filter(function(Ce){return Ce.boards===x.value}):K});function ze(){x.value=null}const Ae=t(function(){const K=z.value&&z.value.emotion&&z.value.emotion.money_effect;return!K||!K.available?"—":K.source==="settled"?"定稿记录":K.source==="realtime"?K.partial?"实时(样本不全)":"实时":"—"}),Ve=t(function(){const K=z.value&&z.value.emotion&&z.value.emotion.promotion&&z.value.emotion.promotion.tiers&&z.value.emotion.promotion.tiers["1进2"];return K?K.rate:null}),nt=t(function(){const K=z.value&&z.value.emotion&&z.value.emotion.sentiment_cycle;return K&&K.available&&K.current_score!=null?K.current_score.toFixed(2):"—"}),tt=t(function(){const K=z.value&&z.value.emotion&&z.value.emotion.sentiment_cycle;return!K||!K.available?"—":(K.trend||"—")+(K.day_n!=null?" · 距低谷"+K.day_n+"天":"")});t(function(){const K=z.value&&z.value.emotion;if(!K)return"";const Ce=[];for(const Be of["money_effect","promotion","consec_premium","sentiment_cycle"]){const Ie=K[Be];Ie&&Ie.available===!1&&Ie.reason&&Ce.push(String(Ie.reason).replace(/^[[^]]*]s*/,""))}return Ce.join("；")}),t(function(){const K=z.value&&z.value.facts;if(!K)return"";const Ce=[];for(const Be of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const Ie=K[Be];Ie&&Ie.available===!1&&Ie.reason&&Ce.push(String(Ie.reason).replace(/^[[^]]*]s*/,""))}return Ce.join("；")});function at(K){return K==null||isNaN(K)?"—":(K*100).toFixed(0)+"%"}function we(K,Ce){return K==null?"—":(typeof K=="number"?Math.round(K*100)/100:K)+(Ce||"")}function ke(K){return"tag-chip mr-4"}function Le(K){return K==null?"":K>0?"is-rise":K<0?"is-fall":""}function Re(K){return K==="机构"?"is-institution":K==="游资"?"is-hotmoney":K==="主力"?"is-main":""}const Ue=t(function(){const K=z.value&&z.value.session_status;if(!K)return"—";const Ce=z.value.date;return Ce===K.latest_session&&K.settled?"已收盘":Ce===K.today&&K.is_trade_day&&!K.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),Ge=t(function(){const K=z.value&&z.value.session_status;if(!K)return"";const Ce=z.value.date;return Ce===K.latest_session&&K.settled?"is-institution":Ce===K.today&&K.is_trade_day&&!K.settled?"is-main":""});function Qe(K){K&&K.ts_code&&d&&d.showStockDetail&&d.showStockDetail(K.ts_code)}const et=t(function(){return(b.value||[]).filter(function(K){return(K.tags||[]).indexOf("机构")>=0}).reduce(function(K,Ce){return K+(Ce.net_buy||0)},0)}),lt=t(function(){return(b.value||[]).filter(function(K){return(K.tags||[]).indexOf("游资")>=0}).length}),ft=t(function(){const K=(l.value||[]).filter(function(Ce){return Ce.main_net_inflow!=null});return K.length?K.reduce(function(Ce,Be){return Ce.main_net_inflow>=Be.main_net_inflow?Ce:Be}):null}),xt=t(function(){const K=ft.value;return K?K.name:"—"}),Tt=t(function(){const K=ft.value;return K?K.main_net_inflow:null}),qt=t(function(){return P.value||"东财"}),g=t(function(){const K=(S.value||"").trim(),Ce=l.value||[];return K?Ce.filter(function(Be){return Be.name&&String(Be.name).indexOf(K)>=0}):Ce});function O(K){S.value=K||"",d&&d.currentSubPage&&(d.currentSubPage.value="sector")}const Q=t(function(){const K=g.value;if(K.length<=200)return K;const Ce=(h.value-1)*N;return K.slice(Ce,Ce+N)}),de=["09:25","09:35","10:00","11:30","14:00","15:00"],ue=t(function(){const K={};return(se.value||[]).forEach(function(Ce){K[Ce.slot]=!0}),K});function Ee(K){return ue.value[K]?"is-done":K===Se.value?"is-current":"is-empty"}const Se=t(function(){const K=new Date,Ce=(K.getHours()<10?"0":"")+K.getHours(),Be=(K.getMinutes()<10?"0":"")+K.getMinutes(),Ie=Ce+":"+Be;for(var vt=0;vt<de.length;vt++)if(Ie===de[vt])return de[vt];for(var it=0;it<de.length-1;it++){var _t=de[it],Dt=new Date;Dt.setHours(Number(_t.split(":")[0]),Number(_t.split(":")[1]),0,0);var kt=new Date(Dt.getTime()+8*6e4);if(K>=Dt&&K<=kt)return _t}return""}),Ne=t(function(){const K=new Date,Ce=Se.value;if(Ce)return"当前处于快照窗口 "+Ce+" (前后 8 分钟) — 可采集";const Be=K.getHours(),Ie=K.getMinutes();let vt="";for(let it=0;it<de.length;it++){const _t=de[it].split(":");if(Number(_t[0])>Be||Number(_t[0])===Be&&Number(_t[1])>Ie){vt=de[it];break}}return vt?"下一快照时点 "+vt+" — 非窗口期不可采集":"今日快照时点已全部结束"}),Oe=e(""),Fe=e("info");function Ye(){const K=p.value&&p.value.ladder&&p.value.ladder.tiers;if(!K||!Object.keys(K).length)return;const Ce=window.__quantModules&&window.__quantModules.charts;if(!Ce||!Ce.renderSimpleChartTo)return;const Be=x.value,Ie=Ce.renderSimpleChartTo("shorttermLadderChart",function(){const vt=Object.keys(K).sort(function(it,_t){return Number(it)-Number(_t)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:vt.map(function(it){return it+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(it){return Be&&Number(vt[it.dataIndex])===Be?"var(--color-accent)":"var(--chart-split)"}},data:vt.map(function(it){return K[it]})}]}},{key:"shortterm-ladder"});Ie&&Ie.off&&(Ie.off("click"),Ie.on("click",function(vt){if(!vt||!vt.name)return;const it=parseInt(vt.name,10);isNaN(it)||(x.value=x.value===it?null:it)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(Ye);function ht(K){if(K==null)return"—";const Ce=Math.abs(K);return Ce>=1e8?(K/1e8).toFixed(2)+"亿":Ce>=1e4?(K/1e4).toFixed(0)+"万":K.toFixed(0)}function Xe(K){return K==null?"—":(K>=0?"+":"")+K.toFixed(2)+"%"}async function H(K){const Ce=++Me;R.value=!0,B.value=!1;try{const Be="/api/shortterm/overview"+(i.value?"?date="+i.value:""),Ie=await he(Be,K);if(Ce!==Me)return;Ie&&Ie.success?z.value=Ie:Ie&&Ie.detail?(B.value=!0,W.value=String(Ie.detail),U.value="请先登录后再查看"):(B.value=!0,W.value="数据加载失败",U.value="请检查服务后重试")}catch{if(Ce!==Me)return;B.value=!0,W.value="数据加载失败",U.value="请检查服务后重试"}finally{Ce===Me&&(R.value=!1)}}async function fe(K){const Ce=++ge;te.value=!0,I.value=!1;try{const Be="/api/shortterm/sector-flow?indicator="+encodeURIComponent(s.value)+"&sector_type="+encodeURIComponent(A.value),Ie=await he(Be,K);if(Ce!==ge)return;Ie&&Ie.success&&Ie.available?(l.value=Ie.rows||[],P.value=Ie.source||(Ie.note?"同花顺":"东财"),h.value=1):Ie&&Ie.reason?(I.value=!0,_.value="数据加载失败",m.value=String(Ie.reason).replace(/^\[[^\]]*\]\s*/,"")):Ie&&Ie.detail?(I.value=!0,_.value=String(Ie.detail),m.value="请先登录后再查看"):(I.value=!0,_.value="数据加载失败",m.value="请检查服务后重试")}catch{if(Ce!==ge)return;I.value=!0,_.value="数据加载失败",m.value="请检查服务后重试"}finally{Ce===ge&&(te.value=!1)}}async function $e(K){const Ce=++ce;try{const Be="/api/shortterm/review"+(i.value?"?date="+i.value:""),Ie=await he(Be,K);if(Ce!==ce)return;Ie&&Ie.success&&(y.value=Ie.review||null)}catch{}}async function je(){j.value=!0;try{const K="/api/shortterm/review"+(i.value?"?date="+i.value:""),Ce=await fetch(K,{method:"POST",headers:Te()}).then(function(Be){return Be.json()});Ce&&Ce.success&&(y.value=Ce,X[K]={ts:Date.now(),data:Ce})}catch{}finally{j.value=!1}}async function wt(){const K=$.value.trim();if(K){me.value=!0,ie.value="";try{const Be=await fetch("/api/shortterm/review/chat",{method:"POST",headers:Te(),body:JSON.stringify({date:overviewDate.value,question:K})}).then(function(Ie){return Ie.json()});ie.value=Be.answer||"[无回复]"}catch{ie.value="[发送失败]"}finally{me.value=!1}}}async function Et(K){const Ce=++ge;J.value=!0;try{const Be="/api/shortterm/intraday"+(i.value?"?date="+i.value:""),Ie=await he(Be,K);if(Ce!==ge)return;Ie&&Ie.success&&(se.value=Ie.snapshots||[])}catch{}finally{Ce===ge&&(J.value=!1)}}async function At(){L.value=!0;try{const K="/api/shortterm/intraday/snapshot"+(i.value?"?date="+i.value:""),Ce=await fetch(K,{method:"POST",headers:Te()}).then(function(Be){return Be.json()});Ce&&Ce.success?(Ce.accepted?(Oe.value="已采集 "+Ce.slot+" 快照"+(Ce.pools_available&&!Ce.pools_available.zt?" (池源部分不可用)":""),Fe.value="ok"):(Oe.value="⏱ "+(Ce.reason||"非快照时点"),Fe.value="warn"),Et()):Oe.value="采集失败, 请稍后重试"}catch{Oe.value="采集失败, 请稍后重试"}finally{L.value=!1}}function ot(){return he("/api/shortterm/latest-session",!1).then(function(K){K&&K.date&&(i.value||(i.value=K.date))}).catch(function(){})}function bt(){const K=r.value;K==="ztpool"?xe():K==="lhb"?le():K==="overview"?(H(),$e()):K==="sector"?fe():K==="intraday"&&Et()}function It(){const K=i.value?"?date="+i.value:"";["/api/shortterm/overview"+K,"/api/shortterm/pools"+K,"/api/shortterm/lhb"+K].forEach(function(Be){he(Be,!1).catch(function(){})})}function ia(){const K=r.value;K==="ztpool"?xe(!0):K==="lhb"?le(!0):K==="overview"?(H(!0),$e(!0)):K==="sector"?fe(!0):K==="intraday"&&Et(!0)}v(function(){ot(),bt(),It(),Xt(),F()}),Vue.watch(function(){return r.value},function(K){bt(),K==="overview"&&Xt()});const dt=window.QuantOnboarding,Bt=e(!1),St=e(dt?dt.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),yt=t(function(){return dt&&dt.shorttermTourSteps()[St.value.stepIndex]||{key:"",title:"",desc:""}}),$t=t(function(){return dt?dt.shorttermTourProgress(St.value):{done:0,total:3,pct:0}}),Kt=t(function(){return St.value.stepIndex>=2});function rt(){if(dt){var K=null;try{K=localStorage.getItem("qc_shortterm_tour")}catch{}if(K){var Ce=dt.parseState(K);Ce&&(St.value=Ce)}}}function Ht(){if(dt){var K=JSON.stringify(St.value);try{localStorage.setItem("qc_shortterm_tour",K)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:K}})}).catch(function(){})}catch{}}}function Xt(){window.__quantGuideModalsEnabled===!0&&dt&&r.value==="overview"&&(rt(),dt.shorttermTourShouldShow(St.value)&&(Bt.value=!0))}function oa(){St.value=dt.shorttermTourNext(St.value),Ht()}function Ut(){St.value=dt.shorttermTourComplete(St.value),Ht(),Bt.value=!1}function ra(){St.value=dt.shorttermTourDismiss(St.value),Ht(),Bt.value=!1}return{currentPage:w,currentSubPage:r,shortDate:i,pools:p,poolLoading:o,poolError:M,ztBoardFilter:x,filteredZt:ve,clearBoardFilter:ze,lhbRows:b,lhbLoading:D,lhbError:T,lhbReason:f,lhbPageRows:q,lhbPage:E,overview:z,overviewLoading:R,overviewError:B,dateList:Y,dateListLoading:Z,loadDateList:F,pickDate:ee,sectorType:A,sectorIndicator:s,sectorKeyword:S,sectorRows:l,filteredSectorRows:g,sectorPageRows:Q,sectorPage:h,sectorLoading:te,sectorError:I,sectorFlowSource:P,PAGE_SIZE:N,gotoSector:O,review:y,reviewRunning:j,intradaySnapshots:se,intradayLoading:J,intradayCollecting:L,intradaySlots:de,intradayMsg:Oe,slotClass:Ee,intradayStatus:Ne,chatQuestion:$,chatAnswer:ie,chatLoading:me,loadPools:xe,loadLhb:le,loadOverview:H,loadSectorFlow:fe,loadReview:$e,runReview:je,sendChat:wt,loadIntraday:Et,collectSnapshot:At,refreshCurrent:ia,ladderText:ae,fmtAmount:ht,fmtPct:Xe,riseFall:Le,tagClass:Re,openStock:Qe,lhbInstitutionNetBuy:et,lhbHotMoneyCount:lt,sectorTopName:xt,sectorTopInflow:Tt,sectorSource:qt,moneySource:Ae,promotion1to2:Ve,cycleScore:nt,cycleTrend:tt,pct:at,fmtCond:we,verdictClass:ke,sessionStatusText:Ue,sessionStatusClass:Ge,shorttermTourVisible:Bt,shorttermTourState:St,shorttermTourStep:yt,shorttermTourProg:$t,shorttermTourIsLast:Kt,shorttermTourNext:oa,shorttermTourFinish:Ut,shorttermTourSkip:ra}}}})();(function(a,e){typeof De=="object"&&De.exports?De.exports=e():a.QuantVirtualList=e()})(typeof self<"u"?self:void 0,function(){var a=8;function e(r,i,p,o,M){var k=p>0?p:1,C=typeof M=="number"&&M>=0?M:a,x=Math.max(0,o),b=Math.max(0,r),D=Math.max(0,i),T=Math.max(0,Math.floor(b/k)-C),u=Math.min(x,Math.ceil((b+D)/k)+C);return{startIndex:T,endIndex:u}}function v(r,i){return Math.max(0,r||0)*(i>0?i:0)}function t(r,i,p,o,M){var k=r||[],C=e(i,p,o,k.length,M),x=k.slice(C.startIndex,C.endIndex);return{visible:x,startIndex:C.startIndex,endIndex:C.endIndex,offsetY:C.startIndex*(o>0?o:1),totalHeight:v(k.length,o)}}function c(r,i){if(r){if(r.code!=null)return r.code;if(r.id!=null)return r.id;if(r.ts_code!=null)return r.ts_code}return i}function d(r,i,p){var o=r||[];if(!o.length)return i>0?i:1;for(var M=Math.min(p||50,o.length),k=0,C=0,x=0;x<M;x++){var b=o[x]&&o[x].rowHeight;typeof b=="number"&&b>0&&(k+=b,C++)}return C?k/C:i>0?i:1}function w(r,i,p,o,M){var k=e(r,i,p,o,M),C=Math.max(0,o);return C?(k.endIndex-k.startIndex)/C:0}return{DEFAULT_BUFFER:a,computeVisibleRange:e,computeTotalHeight:v,sliceVisible:t,getRowKey:c,estimateDynamicRowHeight:d,renderedRatio:w}});(function(){const{ref:a,computed:e,onMounted:v,onBeforeUnmount:t}=Vue,c=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:c.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(d){const w=a(null),r=a(0),i=a(400),p=e(()=>(c.computeVisibleRange||function(n,f,E,N,q){const z=E>0?E:1,R=q>=0?q:8,B=Math.max(0,N);return{startIndex:Math.max(0,Math.floor(n/z)-R),endIndex:Math.min(B,Math.ceil((n+f)/z)+R)}})(r.value,i.value,d.rowHeight,d.items.length,d.buffer)),o=e(()=>d.items.length*d.rowHeight),M=e(()=>p.value.startIndex),k=e(()=>p.value.endIndex),C=e(()=>d.items.slice(M.value,k.value));function x(){w.value&&(r.value=w.value.scrollTop)}function b(){w.value&&(i.value=w.value.clientHeight||400)}function D(u,n){return c.getRowKey?c.getRowKey(u,n):u&&u.code!=null?u.code:u&&u.id!=null?u.id:n}let T=null;return v(()=>{b(),w.value&&typeof ResizeObserver<"u"&&(T=new ResizeObserver(()=>b()),T.observe(w.value))}),t(()=>{T&&T.disconnect()}),{scrollEl:w,totalHeight:o,startIndex:M,endIndex:k,visibleItems:C,onScroll:x,keyOf:D}}}})();(function(a,e){typeof De=="object"&&De.exports?De.exports=e():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=e())})(typeof self<"u"?self:void 0,function(){var a=40,e=1.2,v=60,t=500,c=10,d=88,w=350;function r(n,f,E,N,q){q=q||{};var z=typeof q.threshold=="number"?q.threshold:a,R=typeof q.bias=="number"?q.bias:e,B=E-n,W=N-f;return Math.abs(B)<z||Math.abs(B)<Math.abs(W)*R?"none":B<0?"left":"right"}function i(n,f,E){E=E||{};var N=typeof E.threshold=="number"?E.threshold:v;return f-n>=N}function p(n,f){f=f||{};var E=typeof f.threshold=="number"?f.threshold:t;return n>=E}var o=!1;function M(n,f){return n&&typeof n.closest=="function"?n.closest(f):null}function k(n){if(!n)return"";var f=n.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(f){var E=f.getAttribute&&f.getAttribute("data-copy-code");if(E)return E.trim();var N=(f.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(N)return N[0]}var q=n.getAttribute&&n.getAttribute("data-copy-code");return q?q.trim():""}function C(n){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(n).then(function(){return!0}).catch(function(){return x(n)}):Promise.resolve(x(n))}function x(n){try{var f=document.createElement("textarea");return f.value=n,f.style.position="fixed",f.style.opacity="0",document.body.appendChild(f),f.select(),document.execCommand("copy"),document.body.removeChild(f),!0}catch{return!1}}function b(n){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(n)}function D(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function T(){var n=null,f=null,E=null;function N(){f&&(f.timer&&clearTimeout(f.timer),f=null)}function q(Z){E={el:Z,until:Date.now()+w}}function z(Z){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(F){F!==Z&&F.classList.remove("swipe-open")}),n&&n.el!==Z&&(n=null)}function R(Z){var F=Z.touches&&Z.touches[0];if(F){var ee=M(Z.target,".swipe-reveal");ee&&(n={el:ee,x:F.clientX,y:F.clientY,moved:!1},Z.stopPropagation());var A=M(Z.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");A&&(N(),f={el:A,x:F.clientX,y:F.clientY,timer:setTimeout(function(){var s=k(A);f=null,s&&(q(A),C(s).then(function(){D(),b("已复制代码 "+s)}))},t)})}}function B(Z){if(n){var F=Z.touches&&Z.touches[0];if(F){var ee=F.clientX-n.x,A=F.clientY-n.y;if(Math.abs(ee)>8&&Math.abs(ee)>Math.abs(A)*1.2){Z.cancelable&&Z.preventDefault(),n.moved=!0;var s=n.el.querySelector(".swipe-reveal-main")||n.el,S=Math.max(-d,Math.min(0,ee));s.style.transition="none",s.style.transform="translateX("+S+"px)",Z.stopPropagation()}if(f){var l=F.clientX-f.x,h=F.clientY-f.y;(Math.abs(l)>c||Math.abs(h)>c)&&N()}}}}function W(Z){if(N(),!!n){var F=n.el,ee=Z.changedTouches&&Z.changedTouches[0],A=n.x,s=n.y,S="none";ee&&(S=r(A,s,ee.clientX,ee.clientY));var l=n.moved;n=null;var h=F.querySelector(".swipe-reveal-main")||F;h.style.transform="",h.style.transition="",S==="left"?(z(F),F.classList.add("swipe-open"),q(F)):(S==="right"||l)&&F.classList.remove("swipe-open"),Z.stopPropagation()}}function U(){N(),n=null}function Y(Z){if(E&&Date.now()<E.until){var F=E.el.contains(Z.target)||Z.target===E.el,ee=Z.target.closest&&Z.target.closest(".swipe-reveal-actions");F&&!ee&&(Z.preventDefault(),Z.stopPropagation(),E=null)}}document.addEventListener("touchstart",R,!0),document.addEventListener("touchmove",B,!0),document.addEventListener("touchend",W,!0),document.addEventListener("touchcancel",U,!0),document.addEventListener("click",Y,!0)}function u(){o||typeof document>"u"||(o=!0,T())}return{judgeSwipe:r,judgePullToRefresh:i,judgeLongPress:p,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:e,PULL_THRESHOLD:v,LONG_PRESS_MS:t,LONG_PRESS_MOVE_SLOP:c,REVEAL_WIDTH:d,initGestures:u,_codeFromRow:k}});(function(){const a={empty:{icon:"inbox",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"alert-triangle",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"wifi-off",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},e=Object.keys(a);function v(d){return a[d]||a.empty}function t(){const d=[];for(const w of e){const r=a[w];r.title||d.push(w+".title"),w!=="loading"&&!r.icon&&d.push(w+".icon"),typeof r.retry!="boolean"&&d.push(w+".retry"),typeof r.skeleton!="boolean"&&d.push(w+".skeleton")}return{ok:d.length===0,errors:d}}const c={VARIANTS:a,KEYS:e,resolve:v,validate:t};typeof window<"u"&&(window.QuantStatePanel=c),typeof De<"u"&&De.exports&&(De.exports=c)})();(function(){const{computed:a}=Vue,e=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(v){const t=a(()=>typeof e.resolve=="function"?e.resolve(v.type):{}),c=a(()=>v.icon||t.value.icon||""),d=a(()=>v.title||t.value.title||""),w=a(()=>v.desc||t.value.desc||""),r=a(()=>!!t.value.retry),i=a(()=>/^[a-z][a-z0-9-]*$/.test(String(c.value||"")));return{icon:c,title:d,desc:w,retryable:r,isIconName:i}}}})();(function(a,e){typeof De=="object"&&De.exports?De.exports=e():a.QuantCommandPanel=e()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function a(n){return String(n||"").trim().toLowerCase()}function e(n,f){if(!n)return!0;const E=n.split(/\s+/).filter(Boolean);if(!E.length)return!0;const N=String(f||"").toLowerCase();return E.every(function(q){return N.indexOf(q)!==-1})}function v(){return{visible:!1,query:"",activeIndex:0}}function t(n,f){return f===void 0&&(f=!n.visible),n.visible=f,f&&(n.query="",n.activeIndex=0),n.visible}function c(n,f,E){const N=a(n);if(!f||!f.length)return[];const q=[];return f.forEach(function(z){const R=e(N,z.name)||e(N,z.key),B=(z.subPages||[]).filter(function(W){const U=E&&E[W]||W;return e(N,U)||e(N,W)});R&&q.push({type:"menu",menuKey:z.key,subPage:z.subPages&&z.subPages[0]||"",label:z.name,subLabel:"页面",icon:z.icon||"file-text"}),B.forEach(function(W){q.push({type:"menu",menuKey:z.key,subPage:W,label:E&&E[W]||W,subLabel:z.name,icon:z.icon||"file-text"})})}),q.slice(0,8)}function d(n,f){const E=a(n);return!f||!f.length?[]:f.filter(function(N){return!!(!E||e(E,N.label)||e(E,N.key)||N.keywords&&e(E,N.keywords))}).slice(0,8)}function w(n,f){const E=a(n);return!E||!f||!f.length?[]:f.filter(function(N){return e(E,N.code)||e(E,N.name)}).slice(0,8).map(function(N){return{type:"stock",code:N.code,name:N.name,label:N.name,subLabel:N.code,icon:"trending-up"}})}function r(n,f,E){const N=[],q=[];return E&&E.length&&(N.push({key:"stock",label:"股票",items:E}),q.push.apply(q,E)),n&&n.length&&(N.push({key:"menu",label:"菜单",items:n}),q.push.apply(q,n)),f&&f.length&&(N.push({key:"command",label:"指令",items:f}),q.push.apply(q,f)),{groups:N,flat:q}}function i(n,f,E){if(f<=0)return 0;const N=((n||0)+E)%f;return N<0?f-1:N}function p(n,f,E,N){const q=c(n,f,E).map(function(R){return{type:"menu",menuKey:R.menuKey,subPage:R.subPage,label:R.label,subLabel:R.subLabel,icon:R.icon,iconName:R.icon,value:R.icon+" "+R.label+" · "+R.subLabel}}),z=d(n,N||[]).map(function(R){return{type:"command",key:R.key,label:R.label,icon:R.icon,iconName:R.icon,subLabel:"指令",value:R.icon+" "+R.label}});return q.concat(z)}function o(n){return n?n.type==="menu"?{action:"menu",menuKey:n.menuKey,subPage:n.subPage}:n.type==="command"?{action:"command",key:n.key}:n.type==="sector"?{action:"sector",name:n.name}:n.type==="strategy"?{action:"strategy",id:n.id,name:n.name}:n.type==="stock"||n.code&&n.name?{action:"stock",code:n.code,name:n.name}:null:null}const M=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"onboarding",label:"新手引导（重新查看）",icon:"sparkles",keywords:"guide tour onboarding 引导 新手 帮助"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"},{key:"open-watchlist",label:"打开我的自选",icon:"star",keywords:"watchlist 自选 收藏"},{key:"manage-groups",label:"管理自选分组",icon:"folder-open",keywords:"groups 分组 自选 管理 归类"},{key:"open-focus",label:"打开重点跟踪",icon:"target",keywords:"focus 重点 跟踪 盯盘"},{key:"open-portfolio",label:"打开模拟组合",icon:"wallet",keywords:"portfolio 组合 持仓 净值"},{key:"open-backtest",label:"打开回测工作台",icon:"line-chart",keywords:"backtest 回测 净值 收益"},{key:"open-market-review",label:"打开每日复盘",icon:"book-open",keywords:"review 复盘 市场 收盘"},{key:"open-shortterm-sectors",label:"打开板块资金",icon:"pie-chart",keywords:"sector 板块 资金 行业"},{key:"open-shortterm-intraday",label:"打开盘中核验",icon:"clock",keywords:"intraday 盘中 核验 验证"},{key:"open-status",label:"打开系统状态",icon:"activity",keywords:"ops status 状态 运行 健康"},{key:"open-health",label:"打开数据源健康",icon:"database",keywords:"health 数据源 健康 源状态"},{key:"open-schedule",label:"打开调度任务",icon:"clock",keywords:"schedule 调度 任务 定时"},{key:"open-guard",label:"打开AI事实护栏",icon:"shield",keywords:"guard 护栏 事实 校验"},{key:"open-usage",label:"打开用量统计",icon:"bar-chart-3",keywords:"usage 用量 统计 调用量"},{key:"open-datadict",label:"打开数据字典",icon:"book-open",keywords:"datadict 数据字典 字段"},{key:"open-notification",label:"打开通知中心",icon:"bell",keywords:"notification 通知 消息"},{key:"open-users",label:"打开用户与权限",icon:"users",keywords:"users 用户 权限 rbac 角色"},{key:"open-autoeval",label:"打开AI服务配置",icon:"bot",keywords:"autoeval 自动评估 AI 服务 模型"},{key:"open-feature",label:"打开基础配置",icon:"settings",keywords:"feature 基础 配置 功能"},{key:"open-config",label:"打开配置保存",icon:"save",keywords:"config 配置 保存 备份"},{key:"theme-gold",label:"金色主题",icon:"palette",keywords:"theme gold 金色 主题 颜色"},{key:"theme-blue",label:"蓝色主题",icon:"palette",keywords:"theme blue 蓝色 主题"},{key:"theme-red",label:"红色主题",icon:"palette",keywords:"theme red 红色 主题"},{key:"theme-green",label:"绿色主题",icon:"palette",keywords:"theme green 绿色 主题"},{key:"theme-purple",label:"紫色主题",icon:"palette",keywords:"theme purple 紫色 主题"},{key:"theme-pink",label:"粉色主题",icon:"palette",keywords:"theme pink 粉色 主题"},{key:"theme-dark",label:"暗色主题",icon:"moon",keywords:"theme dark 暗色 深色 夜间"},{key:"theme-light",label:"亮色主题",icon:"sun",keywords:"theme light 亮色 浅色 日间"}];var k={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function C(n){if(!n||typeof n!="string")return null;var f=n.split("+").map(function(q){return q.trim()}).filter(Boolean);if(!f.length)return null;var E=f.pop().toLowerCase();if(!E)return null;var N={ctrl:!1,alt:!1,shift:!1,meta:!1};return f.forEach(function(q){var z=q.toLowerCase();k.ctrl.indexOf(z)!==-1?N.ctrl=!0:k.alt.indexOf(z)!==-1?N.alt=!0:k.shift.indexOf(z)!==-1?N.shift=!0:k.meta.indexOf(z)!==-1&&(N.meta=!0)}),{ctrl:N.ctrl,alt:N.alt,shift:N.shift,meta:N.meta,key:E}}function x(n,f){if(!n||!f)return!1;var E=String(f.key||f.code||"").toLowerCase();return n.key!==E?!1:n.ctrl===!!f.ctrlKey&&n.alt===!!f.altKey&&n.shift===!!f.shiftKey&&n.meta===!!f.metaKey}function b(n){if(!n)return"";var f=[];return n.ctrl&&f.push("Ctrl"),n.alt&&f.push("Alt"),n.shift&&f.push("Shift"),n.meta&&f.push("Meta"),f.push(n.key.toUpperCase()),f.join("+")}function D(){var n={};return{register:function(f){if(!f||!f.key)throw new Error("命令 key 必填");if(n[f.key])throw new Error("命令重复注册: "+f.key);return n[f.key]=Object.assign({},f),f.key},list:function(){return Object.keys(n).map(function(f){return n[f]})},get:function(f){return n[f]||null},remove:function(f){delete n[f]},has:function(f){return!!n[f]},count:function(){return Object.keys(n).length}}}function T(){var n={},f={};return{register:function(E,N,q){var z=C(E);if(!z)throw new Error("无效快捷键: "+E);var R=b(z);if(n[R])throw new Error("快捷键冲突: "+E);if(N!=null&&f[N]!==void 0)throw new Error("动作重复绑定: "+N);return n[R]={combo:E,action:N,description:q||"",parsed:z},f[N]=R,R},resolve:function(E){for(var N in n)if(x(n[N].parsed,E))return n[N].action;return null},list:function(){return Object.keys(n).map(function(E){return n[E]})},unregister:function(E){var N=b(C(E));n[N]&&(delete f[n[N].action],delete n[N])},count:function(){return Object.keys(n).length}}}function u(){var n=T();return n.register("Ctrl+K","toggle-palette","打开命令面板"),n.register("F5","refresh","刷新当前页"),n.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),n.register("Ctrl+J","open-ai","打开 AI 问股"),n.register("Ctrl+D","open-today","今日一屏"),n.register("Ctrl+E","batch-eval","批量 AI 评估"),n.register("Ctrl+G","add-portfolio","加入组合"),n.register("Ctrl+H","open-eval-history","打开评估历史"),n.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),n}return{normalize:a,createPaletteState:v,toggleVisible:t,searchMenus:c,searchCommands:d,filterStocksLocal:w,mergeResults:r,moveIndex:i,buildSearchSuggestions:p,dispatchSearchSelection:o,DEFAULT_COMMANDS:M,parseKeyCombo:C,matchShortcut:x,canonicalCombo:b,createCommandRegistry:D,createShortcutRegistry:T,createDefaultShortcuts:u}});(function(a){if(a&&!a.QuantCommandPanel)try{var e=typeof De<"u"&&De.exports?De.exports:null;e&&(a.QuantCommandPanel=e)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(a,e){var v=e();typeof De=="object"&&De.exports&&(De.exports=v),a.QuantOnboarding=v})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var a=[{key:"today",title:"看懂今日一屏",target:"strategies",selector:".today-hero",desc:"先看美林时钟阶段与今日一屏：宏观周期、策略共识、股票池一目了然"},{key:"calendar",title:"量化日历与策略池",target:"calendar",selector:".stock-pool-body",desc:"日/周/月/年切换视图，按全部/新入池/当前持仓/已出池筛选股票"},{key:"evaluate",title:"智能评估一只股票",target:"ai",selector:".qc-work-area",desc:"点击任意股票查看详情：多模型 AI 评估、五维体检、历史趋势"},{key:"watchlist",title:"我的自选与重点跟踪",target:"ai",selector:"",desc:"在智能评估页把心仪股票加入自选，重点跟踪持续盯盘"},{key:"config",title:"系统配置要点",target:"system",selector:".system-page-root",desc:"数据源、AI Key、通知与主题都在系统配置，按需设置"}],e=a.length,v=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],t=v.length;function c(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function d(){return v.slice()}function w(W){return W<0?0:W>=t?t-1:W}function r(W){return{stepIndex:W.stepIndex,completed:!!W.completed,dismissed:!!W.dismissed,updatedAt:W.updatedAt||0}}function i(W){return r(Object.assign({},W,{stepIndex:w((W.stepIndex||0)+1),updatedAt:Date.now()}))}function p(W){return r(Object.assign({},W,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function o(W){return r(Object.assign({},W,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function M(W){var U=Math.min(W&&W.stepIndex||0,t);return{done:U,total:t,pct:Math.round(U/t*100)}}function k(W){return!!(W&&!W.completed&&!W.dismissed)}function C(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function x(){return a.slice()}function b(){return e}function D(W){return W<0?0:W>=e?e-1:W}function T(W){return{stepIndex:W.stepIndex,completed:!!W.completed,dismissed:!!W.dismissed,updatedAt:W.updatedAt||0}}function u(W){return T(Object.assign({},W,{stepIndex:D((W.stepIndex||0)+1),updatedAt:Date.now()}))}function n(W){return T(Object.assign({},W,{stepIndex:D((W.stepIndex||0)-1),updatedAt:Date.now()}))}function f(W,U){return T(Object.assign({},W,{stepIndex:D(U),updatedAt:Date.now()}))}function E(W){return T(Object.assign({},W,{completed:!0,updatedAt:Date.now()}))}function N(W){return T(Object.assign({},W,{dismissed:!0,updatedAt:Date.now()}))}function q(W){return!!(W&&W.completed)}function z(W){var U=Math.min(W&&W.stepIndex||0,e);return{done:U,total:e,pct:Math.round(U/e*100)}}function R(W){var U=W||C();return JSON.stringify({stepIndex:U.stepIndex,completed:!!U.completed,dismissed:!!U.dismissed,updatedAt:U.updatedAt||0})}function B(W){var U=C();if(!W||typeof W!="string")return U;try{var Y=JSON.parse(W);if(!Y||typeof Y!="object")return U;var Z=parseInt(Y.stepIndex,10);return isNaN(Z)?U:{stepIndex:D(Z),completed:!!Y.completed,dismissed:!!Y.dismissed,updatedAt:Y.updatedAt||0}}catch{return U}}return{ONBOARDING_STEPS:a,steps:x,stepCount:b,createOnboardingState:C,next:u,prev:n,jumpTo:f,complete:E,dismiss:N,isComplete:q,progress:z,persistState:R,parseState:B,SHORTTERM_TOUR_STEPS:v,shorttermTourSteps:d,createShorttermTourState:c,shorttermTourNext:i,shorttermTourComplete:p,shorttermTourDismiss:o,shorttermTourProgress:M,shorttermTourShouldShow:k}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:e,onMounted:v}=Vue,t=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const c=a(!1),d=a(t.createOnboardingState()),w=e(function(){return t.steps()[d.value.stepIndex]}),r=e(function(){return t.progress(d.value)}),i=e(function(){return d.value.stepIndex>=t.stepCount()-1}),p=e(function(){return"onboarding.step."+w.value.key});function o(){const u=t.persistState(d.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:u}})}).then(function(n){return n.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",u)}catch{}})}function M(u){u&&window.__quantGoPage?window.__quantGoPage(u,""):u&&window.__quantState&&window.__quantState.currentPage&&(window.__quantState.currentPage.value=u,window.__quantState.currentSubPage&&(window.__quantState.currentSubPage.value=""))}function k(){d.value=t.next(d.value);const u=t.steps()[d.value.stepIndex];u&&u.target&&M(u.target)}function C(){d.value=t.prev(d.value);const u=t.steps()[d.value.stepIndex];u&&u.target&&M(u.target)}function x(){d.value=t.complete(d.value),o(),c.value=!1}function b(){d.value=t.dismiss(d.value),o(),c.value=!1}function D(){d.value=t.createOnboardingState(),o(),c.value=!0}function T(){fetch("/api/user_config/preferences").then(function(u){return u.json()}).then(function(u){const n=u&&u.preferences&&u.preferences.onboarding_progress;return n&&(d.value=t.parseState(n)),n}).catch(function(){return null}).then(function(u){if(!u)try{const n=localStorage.getItem("qc_onboarding_progress");n&&(d.value=t.parseState(n))}catch{}!t.isComplete(d.value)&&!d.value.dismissed&&(c.value=!0)}),window.addEventListener("qc:onboarding-replay",D)}return v(T),{visible:c,st:d,step:w,prog:r,isLast:i,stepKey:p,next:k,prev:C,finish:x,skip:b,replay:D}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"inbox"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
      <div class="qc-empty-state" role="status">
        <div class="qc-empty-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-empty-title">{{ title || t('common.emptyTitle') }}</div>
        <div class="qc-empty-desc">{{ desc || t('common.emptyDesc') }}</div>
        <el-button v-if="actionText" size="small" type="primary" @click="$emit('action')">{{ actionText }}</el-button>
      </div>
    `,setup(){function a(e){try{const v=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(v)return v(e)||""}catch{}return e}return{t:a}}},window.__quantComponents.ErrorState={name:"qc-error",props:{icon:{type:String,default:"alert-triangle"},title:{type:String,default:""},desc:{type:String,default:""},retrying:{type:Boolean,default:!1}},emits:["retry"],template:`
      <div class="qc-error-state" role="alert">
        <div class="qc-error-icon" aria-hidden="true"><qc-icon :name="icon" :size="28" /></div>
        <div class="qc-error-title">{{ title || t('common.errorTitle') }}</div>
        <div class="qc-error-desc">{{ desc || t('common.errorDesc') }}</div>
        <el-button v-if="!retrying" size="small" @click="$emit('retry')">{{ t('common.retry') }}</el-button>
        <el-button v-else size="small" :loading="retrying">{{ t('common.retry') }}</el-button>
      </div>
    `,setup(){function a(e){try{const v=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(v)return v(e)||""}catch{}return e}return{t:a}}})})();(function(){const{ref:a,computed:e,watch:v,nextTick:t,inject:c,onMounted:d}=Vue,w=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
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
    `,setup(){const r=c("qcState");if(!r)return{};const i=a(""),p=e({get:()=>r.commandPaletteVisible.value,set:A=>{r.commandPaletteVisible.value=A}}),o=a(0),M=a([]),k=a(null),C=e(()=>{const A=(w.DEFAULT_COMMANDS||[]).map(function(S){return Object.assign({},S)});return Object.keys(r.themes.value||{}).forEach(function(S){const l=r.themes.value[S];A.push({key:"theme:"+S,label:"切换主题 · "+(l.name||S),icon:"palette",keywords:"theme 主题"})}),A});function x(A){return typeof A=="string"&&/^[a-z][a-z0-9-]*$/.test(A)}const b=e(()=>r.menus.value||[]);function D(){const A=window.__quantModules&&window.__quantModules.pinyin;if(!A)return[];const s=[];return(r.watchlist&&r.watchlist.value||[]).forEach(function(S){s.push({code:S.code,name:S.name})}),(r.aiHistory&&r.aiHistory.value||[]).forEach(function(S){S&&S.stock_code&&s.push({code:S.stock_code,name:S.stock_name||S.stock_code})}),s.push.apply(s,A.getExtraStocks()),A.buildStockIndex(s)}function T(A){const s=window.__quantModules&&window.__quantModules.pinyin;return s?s.searchStocksByQuery(A,D()).map(function(S){return{type:"stock",code:S.code,name:S.name,label:S.name,subLabel:S.code,icon:"trending-up"}}):[]}function u(){const A=[],s=window.__quantModules&&window.__quantModules.recent;s&&s.getRecentViewed().slice(0,5).forEach(function(l){A.push({type:"stock",code:l.code,name:l.name||l.code,label:l.name||l.code,subLabel:"最近查看 · "+l.code,icon:"trending-up"})});const S=(r.watchlist&&r.watchlist.value||[]).slice(0,8).map(function(l){return{type:"stock",code:l.code,name:l.name||l.code,label:l.name||l.code,subLabel:"我的自选 · "+l.code,icon:"trending-up"}});return A.concat(S)}const n=e(()=>{const A=i.value;if(!A)return w.mergeResults([],[],u());const s=w.searchMenus(A,b.value,r.subPageNames),S=w.searchCommands(A,C.value),l=M.value;return w.mergeResults(s,S,l)}),f=e(()=>n.value);function E(A){return f.value.flat[o.value]===A}function N(A){o.value=f.value.flat.indexOf(A)}function q(A){return(A.type||"")+":"+(A.code||A.menuKey||A.key||A.label)}let z=null;function R(){const A=i.value.trim();if(A.length<1){M.value=[];return}z&&clearTimeout(z),z=setTimeout(function(){const s=T(A);M.value=s,o.value=0,r.searchStocks(A,function(S){if(i.value.trim()!==A)return;const l=(S||[]).filter(function(I){return I&&I.code&&I.name}).map(function(I){return{type:"stock",code:I.code,name:I.name,label:I.name,subLabel:I.code,icon:"trending-up"}}),h={},te=[];s.forEach(function(I){h[I.code]||(h[I.code]=!0,te.push(I))}),l.forEach(function(I){h[I.code]||(h[I.code]=!0,te.push(I))}),M.value=te,o.value=0})},200)}function B(){o.value=w.moveIndex(o.value,f.value.flat.length,1)}function W(){o.value=w.moveIndex(o.value,f.value.flat.length,-1)}function U(){const A=f.value.flat[o.value];A&&Y(A)}function Y(A){r.commandPaletteVisible.value=!1,A.type==="menu"?r.navigateTo(A.menuKey,A.subPage):A.type==="stock"?r.showStockDetail(A.code,A.name):A.type==="command"&&Z(A.key)}function Z(A){if(A==="refresh"){const s=r.currentPage.value;s==="strategies"?r.loadDashboardData().catch(function(){}):s==="calendar"?r.refreshCalendarData().catch(function(){}):s==="ai"&&r.loadAiHistory().catch(function(){})}else A==="export"?r.exportCSV():A==="batch"?r.showBatchEvaluate.value=!0:A==="ai"?r.openAiFab():A==="sidebar"?r.toggleSidebar():A==="today"?r.navigateTo("strategies","overview"):A==="onboarding"?window.dispatchEvent(new CustomEvent("qc:onboarding-replay")):A==="add-portfolio"?(r.currentPage.value="ai",r.currentSubPage.value="portfolio"):A==="open-system"?r.navigateTo("system","status"):A==="open-shortterm"?r.navigateTo("shortterm","overview"):A==="open-research"?r.navigateTo("research","overview"):A==="open-calendar"?r.navigateTo("calendar",""):A==="refresh-data-source"?r.navigateTo("system","datasource"):A==="open-watchlist"?r.navigateTo("ai","watchlist"):A==="manage-groups"?window.dispatchEvent(new CustomEvent("qc:show-watch-groups")):A==="open-focus"?r.navigateTo("ai","focus"):A==="open-portfolio"?r.navigateTo("ai","portfolio"):A==="open-backtest"?r.navigateTo("research","backtest"):A==="open-market-review"?r.navigateTo("shortterm","market-review"):A==="open-shortterm-sectors"?r.navigateTo("shortterm","sector"):A==="open-shortterm-intraday"?r.navigateTo("shortterm","intraday"):A==="open-status"?r.navigateTo("ops","status"):A==="open-health"?r.navigateTo("ops","health"):A==="open-schedule"?r.navigateTo("ops","schedule"):A==="open-guard"?r.navigateTo("ops","guard"):A==="open-usage"?r.navigateTo("ops","usage"):A==="open-datadict"?r.navigateTo("ops","datadict"):A==="open-notification"?r.navigateTo("system","notification"):A==="open-users"?r.navigateTo("system","user"):A==="open-autoeval"?r.navigateTo("system","autoeval"):A==="open-feature"?r.navigateTo("system","feature"):A==="open-config"?r.navigateTo("system","config"):A==="theme-dark"?r.changeTheme("dark-pro"):A==="theme-light"?r.changeTheme("gold"):A.indexOf("theme:")===0&&r.changeTheme(A.slice(6))}v(p,function(A){A&&(i.value="",M.value=[],o.value=0,t(function(){k.value&&k.value.focus&&k.value.focus()}))}),v(i,R);function F(A){A==="toggle-palette"?r.commandPaletteVisible.value=!r.commandPaletteVisible.value:A==="toggle-sidebar"?r.toggleSidebar():A==="open-ai"?r.openAiFab():A==="refresh"?Z("refresh"):A==="open-today"?Z("today"):A==="batch-eval"?Z("batch"):A==="add-portfolio"&&Z("add-portfolio")}function ee(A){if(!w.createDefaultShortcuts||!w.createShortcutRegistry)return;const S=w.createDefaultShortcuts().resolve({key:A.key,ctrlKey:A.ctrlKey,altKey:A.altKey,shiftKey:A.shiftKey,metaKey:A.metaKey});S&&(A.preventDefault(),F(S))}return d(function(){document.addEventListener("keydown",ee)}),{visible:p,query:i,results:f,inputEl:k,sanitizeHtml:r.sanitizeHtml,isIconName:x,onDown:B,onUp:W,onEnter:U,execute:Y,isActive:E,setActive:N,itemKey:q,onGlobalKeydown:ee}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
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
    `,setup(){const e=a("qcState");if(!e)return{};const v=window.QuantFormMemory;function t(){const r=e.currentUser;return r&&r.value&&r.value.username||"guest"}Vue.watch(()=>e.showBatchEvaluate&&e.showBatchEvaluate.value||!1,r=>{if(r&&v){const i=v.loadForm("batch-evaluate",t(),1);i&&i.batchStocks&&!(e.batchStocks&&e.batchStocks.value)&&(e.batchStocks.value=i.batchStocks)}});function c(){return v&&v.saveForm("batch-evaluate",{batchStocks:e.batchStocks&&e.batchStocks.value||""},t(),1),e.doBatchEvaluate()}const d=Vue.ref(0);let w=null;return e.batchRunning&&e.batchRunning.__v_isRef&&Vue.watch(e.batchRunning,r=>{r?(d.value=0,w=setInterval(()=>{d.value++},1e3)):w&&(clearInterval(w),w=null)}),{...e,batchElapsed:d,onBatchEvaluate:c}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
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
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:e,onMounted:v}=Vue;window.__quantComponents=window.__quantComponents||{};const t=["#c49b2e","#2563eb","#dc2626","#16a34a","#7c3aed","#db2777","#64748b","#b45309"];window.__quantComponents.WatchGroupsDialog={name:"qc-watch-groups-dialog",template:`
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
    `,setup(){const c=a(!1),d=a(!1),w=a(!1),r=a([]),i=a({}),p=a(""),o=a(""),M=a("");function k(q,z){z=z||{},z.headers=Object.assign({},z.headers||{});const R=localStorage.getItem("quant_token")||"";return R&&(z.headers.Authorization="Bearer "+R),fetch(q,z)}async function C(){d.value=!0;try{const z=await(await k("/api/watchlist/groups")).json();z&&z.success&&(r.value=z.groups||[],i.value=z.mapping||{})}catch{}d.value=!1}function x(q){return Object.values(i.value).filter(function(z){return z===q}).length}function b(q){const z=r.value[q],R=t.indexOf(z.color);z.color=t[(R+1)%t.length]}function D(q){if(q<=0)return;const z=r.value.slice(),R=z[q-1];z[q-1]=z[q],z[q]=R,r.value=z}function T(q){if(q>=r.value.length-1)return;const z=r.value.slice(),R=z[q+1];z[q+1]=z[q],z[q]=R,r.value=z}function u(){const q=p.value.trim();q&&(r.value.some(function(z){return z.name===q})||(r.value.push({name:q,color:t[r.value.length%t.length],sort_order:r.value.length,expanded:!0}),p.value=""))}function n(q){o.value=q,M.value=q}function f(q){const z=M.value.trim();if(!z||z===q||r.value.some(function(B){return B.name===z})){o.value="";return}r.value=r.value.map(function(B){return B.name===q?Object.assign({},B,{name:z}):B});const R={};Object.keys(i.value).forEach(function(B){R[B]=i.value[B]===q?z:i.value[B]}),i.value=R,o.value=""}function E(q){r.value=r.value.filter(function(R){return R.name!==q});const z={};Object.keys(i.value).forEach(function(R){z[R]=i.value[R]===q?"默认分组":i.value[R]}),i.value=z}async function N(){w.value=!0;try{await k("/api/watchlist/groups",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({groups:r.value,mapping:i.value})}),ElementPlus.ElMessage.success("分组已保存"),c.value=!1}catch{ElementPlus.ElMessage.error("保存失败")}w.value=!1}return v(function(){window.addEventListener("qc:show-watch-groups",function(){c.value=!0,C()})}),{visible:c,loading:d,saving:w,groups:r,mapping:i,newName:p,renaming:o,renameVal:M,load:C,countIn:x,cycleColor:b,moveUp:D,moveDown:T,addGroup:u,startRename:n,commitRename:f,remove:E,save:N}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.IndexDetailDialog={name:"qc-index-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
    `,setup(){const e=a("qcState");return e?{...e}:{}}}})();(function(){const{inject:a,computed:e,ref:v,watch:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StockDetailDialog={name:"qc-stock-detail-dialog",props:{embedded:{type:Boolean,default:!1}},template:`
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
    `,setup(){const c=a("qcState");if(!c)return{};const d={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},w=e(()=>d[c.aiEvalStage.value]||""),r=e(()=>{const U=c.aiResult&&c.aiResult.value&&c.aiResult.value.result&&c.aiResult.value.result.level;return U?U==="强烈推荐"||U==="推荐"?"var(--success-text)":U==="谨慎推荐"?"var(--warning-text)":U==="中性"||U==="观望"?"var(--text-secondary)":U==="评估失败"||U==="无可用模型"?"var(--danger-text)":"var(--color-primary)":"var(--color-primary)"});function i(U){const Y=document.createElement("textarea");Y.value=U,Y.style.position="fixed",Y.style.opacity="0",document.body.appendChild(Y),Y.select(),document.execCommand("copy"),document.body.removeChild(Y)}async function p(){const U=c.aiResult&&c.aiResult.value;if(!U||!U.result)return;const Y=U.result.dimensions||{},Z=Object.entries(Y).map(([ee,A])=>`${ee} ${Math.round(A)}分`).join(`
`),F=`【AI 智能评估】${U.result.level||""} ${U.result.total_score!=null?U.result.total_score:"—"}分
模型：${U.model_used||U.result.provider||"—"}

${U.result.detailed_report||""}

九维度评分：
${Z||"无"}`;try{await navigator.clipboard.writeText(F),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{i(F),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const o=v(!1),M=v(!1),k=v(null),C=v([]),x={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function b(U){return x[U]||"factor-sem-none"}async function D(){const U=c.stockDetail.value&&c.stockDetail.value.stock;if(U){o.value=!0,M.value=!1,C.value=[],k.value=null;try{const Y=c.selectedDate.value?`?date=${c.selectedDate.value}`:"",Z=await fetch(`/api/calendar/stock/${U}/factors${Y}`).then(s=>s.json()),F=Z&&Array.isArray(Z.factors)?Z.factors:[],ee=[],A={};F.forEach(s=>{A[s.category]||(A[s.category]={category:s.category,items:[]},ee.push(A[s.category])),A[s.category].items.push(s)}),C.value=ee,k.value=Z&&Z.summary||null}catch{M.value=!0}finally{o.value=!1}}}t(c.stockDetailTab,U=>{U==="factor"&&c.stockDetail.value&&c.stockDetailVisible.value&&(D(),u())});const T=v(null);async function u(){try{const U=await fetch("/api/market/factor-ic").then(Y=>Y.json());T.value=U&&U.success&&U.data?U.data:{}}catch{T.value={}}}function n(U){if(!U||!U.n5)return"—";const Y=U.n5.icir!=null?"ICIR "+U.n5.icir:"ICIR —";return U.n5.grade+" ("+Y+")"}const f=v(!1),E=v(!1),N=v([]),q=v([]);function z(U){if(U==null)return"—";const Y=Number(U);return Number.isNaN(Y)?"—":Math.abs(Y)>=1e8?(Y/1e8).toFixed(2)+"亿":Math.abs(Y)>=1e4?(Y/1e4).toFixed(1)+"万":String(Y)}async function R(){const U=c.stockDetail&&c.stockDetail.value&&c.stockDetail.value.stock;if(U){f.value=!0,E.value=!1;try{const Y=await fetch("/api/market/performance/"+encodeURIComponent(U)).then(Z=>Z.json());Y&&Y.success?(N.value=Y.forecast||[],q.value=Y.express||[]):E.value=!0}catch{E.value=!0}finally{f.value=!1}}}t(c.stockDetailTab,U=>{U==="performance"&&R()});const B=v(null);async function W(){const U=c.stockDetail&&c.stockDetail.value&&c.stockDetail.value.stock;if(!U){B.value=null;return}try{const Y=await fetch("/api/focus/stock/"+encodeURIComponent(U)+"/pool").then(Z=>Z.json());B.value=Y&&Y.success&&Y.data?Y.data:null}catch{B.value=null}}return t(()=>c.stockDetail&&c.stockDetail.value&&c.stockDetail.value.stock,U=>{U&&c.stockDetailVisible.value?W():B.value=null}),t(()=>c.stockDetailVisible.value,U=>{U?W():B.value=null}),{...c,aiStageText:w,levelRingColor:r,copyAiReport:p,factorLoading:o,factorError:M,factorSummary:k,factorGroups:C,factorSemClass:b,loadFactorPanel:D,factorIc:T,loadFactorIc:u,factorIcGrade:n,perfLoading:f,perfError:E,perfForecast:N,perfExpress:q,fmtY:z,loadPerformance:R,poolInfo:B,loadPoolInfo:W}}}})();(function(){const{computed:a,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
    `,setup(v){const t=e("qcState");if(!t)return{};const c=a(()=>v.type==="history"?t.selectedHistoryIds.value.includes(v.item.id):t.selectedChatIds.value.includes(v.item.id)),d=a(()=>{const x=t.watchlistCodes.value.has(v.item.stock_code);return{icon:"star",isWatched:x,label:x?"取消收藏":"加入收藏"}}),w=a(()=>v.type==="history"?"bot":"message-circle"),r=a(()=>{var x;return v.type==="history"?((x=v.item.result)==null?void 0:x.provider)||"":v.item.first_msg||""}),i=a(()=>{var x,b;return`${((b=(x=v.item.result)==null?void 0:x.dimensions)==null?void 0:b.length)||9}维度分析`}),p=a(()=>{var b,D;const x=v.type==="history"?v.item.evaluate_time:v.item.created_at||"";return x?v.timeFormat==="datetime"?v.type==="history"?`${x.split("T")[0]} ${(x.split("T")[1]||"").split(".")[0]}`:`${x.split("T")[0]} ${((b=x.split("T")[1])==null?void 0:b.substring(0,5))||""}`:v.type==="history"?(x.split("T")[1]||"").split(".")[0]||x:((D=x.split("T")[1])==null?void 0:D.substring(0,5))||"":""});function o(){v.type==="history"?t.toggleSelectHistory(v.item.id):t.toggleSelectChat(v.item.id)}function M(){v.type==="history"?t.viewAiResult(v.item):t.viewChatSession(v.item)}async function k(){try{await ElementPlus.ElMessageBox.confirm(v.type==="history"?"确定删除这条评估记录吗？此操作不可恢复。":"确定删除这段对话吗？此操作不可恢复。","删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}v.type==="history"?t.deleteSingleHistory(v.item.id):t.deleteChatSession(v.item.id)}function C(x,b){t.toggleWatchlist(x,b)}return{isSelected:c,watchState:d,providerIcon:w,providerText:r,dimsText:i,timeText:p,toggleSelect:o,view:M,remove:k,toggleWatchlist:C,keyClick:t.keyClick,fmtNum:t.fmtNum,evaluatedCodes:t.evaluatedCodes,klineLoadedCodes:t.klineLoadedCodes,levelColor:t.levelColor,levelBg:t.levelBg}}}})();(function(){const{ref:a,computed:e,onMounted:v,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{};const c=["买入","持有","观望","减仓","卖出"],d={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},w={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},r=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],i={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},p=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function o(k){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(k).then(b=>b.json?b.json():b)}function M(){const k=new Date,C=x=>x<10?"0"+x:""+x;return k.getFullYear()+"-"+C(k.getMonth()+1)+"-"+C(k.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",template:`
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
      </div>`,setup(){const k=t("qcState"),C=a(M()),x=a("after_close"),b=a({rows:[],actions:{},total:0,groups:{}}),D=a({sessions:{},total:0}),T=a(null),u=a(!1),n=a(""),f=a(!1),E=a([]),N=a(""),q=a(null),z={},R=a({});let B=0;const W=a(null),U=e(function(){const L=b.value&&b.value.groups||{};return Object.keys(L).length?L:b.value&&b.value.rows&&b.value.rows.length?{全部:b.value.rows}:{}}),Y=e(function(){const L=W.value;return!L||!L.date||L.date!==C.value?"":"已加载最近一次评估: "+L.date+" · "+(i[L.session]||L.session)}),Z=e(function(){const L=b.value&&b.value.base_date;return L?L===C.value?"评分范围: "+L+" 收盘池 + 自选":"评分范围: "+L+" 收盘池(前一交易日算好) + 自选":""});function F(L){if(L==null)return"—";const $=Number(L);return $===Math.floor($)?String($):$.toFixed(1)}function ee(L){const $=b.value.total||0,ie=(b.value.actions||{})[L]||0;if(!$)return"0%";const me=ie/$*100;return me>0&&me<4?"4%":me.toFixed(1)+"%"}function A(L){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[L]||"info"}function s(L){const $=T.value&&T.value.overall&&T.value.overall[L]||null;return!$||$.total===0||$.rate===null||$.rate===void 0?"info":$.rate>=60?"success":$.rate>=40?"warning":"danger"}function S(L){const $=T.value&&T.value.overall&&T.value.overall[L]||null;return!$||$.total===0||$.rate===null||$.rate===void 0?"样本不足":$.rate.toFixed(1)+"% ("+$.total+" 样本)"}function l(){return i[x.value]||x.value}function h(L){const $=E.value.indexOf(L);$>=0?E.value.splice($,1):E.value.push(L)}function te(L){if(!L||!L.raw_json)return{};if(z[L.stock_code+L.session+L.trade_date])return z[L.stock_code+L.session+L.trade_date];let $={};try{$=JSON.parse(L.raw_json)||{}}catch{$={}}return z[L.stock_code+L.session+L.trade_date]=$,$}async function I(){try{const L=await o("/api/focus/latest"),$=L&&L.success&&L.data;$&&$.date&&(W.value=$,C.value=$.date,$.session&&(x.value=$.session))}catch(L){console.warn("[focus] 最近一次评估解析失败:",L)}}async function _(){f.value=!0;try{const L=await o("/api/focus/results?date="+C.value+"&session="+x.value);b.value=L&&L.success&&L.data||{rows:[],actions:{},total:0,groups:{}},m((b.value.rows||[]).map(function($){return $.stock_code}))}catch(L){console.warn("[focus] 结果加载失败:",L),b.value={rows:[],actions:{},total:0,groups:{}}}finally{f.value=!1}}async function m(L){const $=R.value||{},ie=(L||[]).filter(function(X){return X&&!$[X]});if(!ie.length)return;const me=++B,Te=ie.map(function(X){return o("/api/focus/stock/"+encodeURIComponent(X)+"/pool?date="+C.value).then(function(oe){oe&&oe.success&&oe.data?$[X]=oe.data:$[X]={stock_code:X,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){$[X]={stock_code:X,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(Te)}catch{}me===B&&(R.value=Object.assign({},$))}function P(L){const $=k&&k.showStockDetail;if(typeof $=="function"){$(L);return}const me=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;me&&me.info("请从其他页面打开股票详情: "+L)}async function y(){try{const L=await o("/api/focus/history?date="+C.value);D.value=L&&L.success&&L.data||{sessions:{},total:0}}catch(L){console.warn("[focus] 历史加载失败:",L),D.value={sessions:{},total:0}}}async function j(){u.value=!0;try{const L=await o("/api/ai/track");L&&L.success&&L.data?(T.value=L.data,n.value=(L.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):T.value=null}catch(L){console.warn("[focus] 效果块加载失败:",L),T.value=null}finally{u.value=!1}}async function se(){const L=(N.value||"").trim();if(L){q.value=null;try{const $=await o("/api/focus/stock/"+encodeURIComponent(L));q.value=$&&$.success&&$.data&&$.data.rows||[]}catch($){console.warn("[focus] 单股历史加载失败:",$),q.value=[]}}}async function J(){await _(),await y(),await j()}return v(async function(){await I(),await J()}),{curDate:C,session:x,results:b,history:D,track:T,trackLoading:u,trackNote:n,detailSplitEnabled:k.detailSplitEnabled,stockDetail:k.stockDetail,loading:f,expanded:E,stockCode:N,stockHistory:q,SESSIONS:r,ACTION_ORDER:c,TRACK_WINDOWS:p,ACTION_DOT:d,TIER_DOT:w,SESSION_LABELS:i,displayGroups:U,latestNote:Y,baseNote:Z,sessionLabel:l,fmtScore:F,tagType:A,rateTagType:s,fmtRate:S,toggle:h,detailOf:te,loadResults:_,loadHistory:y,loadTrack:j,loadStockHistory:se,loadAll:J,poolStatus:R,openStockDetail:P,actionPct:ee}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:e,nextTick:v}=Vue,{currentView:t,statusFilter:c,dashboardData:d,loadHealthMetrics:w,getLoadDashboardData:r,getLastRefreshTime:i,getFetchPoolSignals:p}=a,o=e(!1),M=e(""),k=new Map,C=e([]),x=e(""),b=e(""),D=e([]),T=e(""),u=window.__quantModules.core||{},n=typeof u.createTtlCache=="function"?u.createTtlCache(15e3):null;let f=0;function E(){const Y=Date.now();Y-f<5e3||(f=Y,ElementPlus.ElMessage.success("有新数据，已更新"))}function N(Y,Z,F,ee){!n||!Z||typeof u.silentRefresh!="function"||u.silentRefresh({cache:n,key:Z,fetchFn:async()=>{const A=await fetch(Y);if(!A.ok)throw new Error("HTTP "+A.status);const s=await A.json();return F?F(s):s},ttl:n.defaultTtl,apply:ee,onChanged:E,onError:()=>{}})}const q=new Set;async function z(){var Y;try{const F=await(await fetch("/api/dates")).json();C.value=((Y=F.data)==null?void 0:Y.dates)||F.dates||[],C.value.length>0&&(x.value=C.value[C.value.length-1]),b.value=new Date().toLocaleTimeString()}catch(Z){console.error(Z)}}async function R(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),b.value="刷新中...",k.clear(),await z(),await W(),b.value=new Date().toLocaleTimeString()}catch(Y){console.error("数据刷新失败",Y)}}function B(){if(!x.value)return;const Z="/api/view/"+(t.value||"day")+"/"+x.value+"?status="+(c.value||"all")+"&format=csv";window.open(Z,"_blank")}async function W(){if(!x.value)return;const Y=`${t.value}_${x.value}`;if(q.has(Y))return;q.add(Y);const Z=`/api/view/${t.value}/${x.value}?status=all`,F=n&&typeof u.makeCacheKey=="function"?u.makeCacheKey("GET",`/api/view/${t.value}/${x.value}`,{status:"all"}):null,ee=(S,l)=>{D.value=S,T.value=l||"",k.set(Y,{stocks:S,note:l||""})},A=S=>{ee(S&&S.stocks||[],S&&S.note||"")};if(k.has(Y)){A(k.get(Y)),N(Z,F,S=>S,A),q.delete(Y);return}const s=F&&n?n.get(F):void 0;if(s!==void 0){A(s),N(Z,F,S=>S,A),q.delete(Y);return}o.value=!0,M.value={day:"日",week:"周",month:"月",year:"年"}[t.value]||t.value;try{const l=await(await fetch(Z)).json(),h=l.stocks||[];ee(h,l.note||""),n&&F&&n.set(F,{stocks:h,note:l.note||""})}catch{try{const h=await(await fetch(`/api/calendar/${x.value}/consensus`)).json();D.value=(h.consensus||[]).map(te=>({...te,code:te.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{o.value=!1}p(),q.delete(Y)}async function U(){const Y=n&&typeof u.makeCacheKey=="function"?u.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(n){const Z=n.get(Y);if(Z!==void 0){d.value=Z,w().catch(()=>{}),N("/api/dashboard",Y,F=>F.data||F,F=>{d.value=F,i().value=Date.now()});return}}await r()(),w().catch(()=>{}),n&&n.set(Y,d.value)}return{loading:o,loadingView:M,viewCache:k,dates:C,selectedDate:x,lastLoadTime:b,consensus:D,viewNote:T,loadDates:z,refreshCalendarData:R,exportCSV:B,loadConsensusData:W,loadDashboardCached:U}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:e}=Vue,{currentKlinePeriod:v,loadIndexKline:t,rememberDialogTrigger:c,menus:d,currentPage:w,currentSubPage:r,stockDetail:i,selectedDate:p}=a,o=ref({indices:[],market_sentiment:null});let M=null;const k=ref(!1),C=ref(null),x=ref(null),b=ref(!1);function D(){window.__quantModules.charts.disposeKline("stockKlineChart")}const T=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{T.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const u=ref(!1),n=ref(null),f=ref(!1),E=ref(0),N=ref(0);async function q(){try{const l=await(await fetch("/api/market/overview")).json();o.value=l,z(l)}catch(S){console.error("获取市场行情失败:",S)}}function z(S){M&&clearInterval(M),S&&S.in_trading_hours&&(M=setInterval(q,6e5))}function R(S){c(),C.value=S,x.value=null,v.value="daily",B(S.code),window.__quantModules.charts.disposeKline("indexKlineChart"),k.value=!0,setTimeout(async()=>{await t("daily")},500)}async function B(S){try{const h=await(await fetch("/api/ai/index-eval/"+S)).json();h.success&&h.data&&(x.value=h.data)}catch(l){console.warn("[getIndexAiScore] cache check failed:",l)}}async function W(){if(C.value){b.value=!0;try{const l=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:C.value.code,index_name:C.value.name,current_price:C.value.close,pct_chg:C.value.pct_chg})})).json();l.success?x.value=l.data:ElementPlus.ElMessage.error(l.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{b.value=!1}}}function U(S){window.__quantModules.charts.zoomKline("stockKlineChart",S)}function Y(){f.value=!0,setTimeout(()=>{f.value=!1},600)}function Z(S,l){if(S===l){Y();return}const h=800,te=performance.now(),I=l-S;u.value=!0,n.value={value:I,dir:I>0?"up":"down"},f.value=!0,setTimeout(()=>{f.value=!1},600),setTimeout(()=>{n.value=null},2300);function _(m){const P=m-te,y=Math.min(P/h,1),j=1-Math.pow(1-y,3),se=Math.round(S+I*j);i.value&&i.value.score_data&&(i.value.score_data.score=se),y<1?requestAnimationFrame(_):(i.value&&i.value.score_data&&(i.value.score_data.score=l),u.value=!1)}requestAnimationFrame(_)}function F(){if(!i.value||!i.value.score_data)return;const S=i.value.score_data.score;if(S==null)return;const l=600,h=performance.now();f.value=!0,setTimeout(()=>{f.value=!1},600);function te(I){const _=Math.min((I-h)/l,1),m=1-Math.pow(1-_,3),P=Math.round(S*m);i.value&&i.value.score_data&&(i.value.score_data.score=P),_<1?requestAnimationFrame(te):i.value&&i.value.score_data&&(i.value.score_data.score=S)}requestAnimationFrame(te)}async function ee(){var h;if(!i.value||!i.value.stock)return;const S=i.value.stock,l=(h=i.value.score_data)==null?void 0:h.score;try{const te=new Date().toISOString().split("T")[0],I=p.value||te,m=await(await fetch(`/api/calendar/stock/${encodeURIComponent(S)}/score?date=${I}`)).json();if(m.success&&m.score_data){const P=m.score_data.score;i.value&&(i.value.score_data=m.score_data),l!=null&&P!==l?Z(l,P):Y()}else Y()}catch(te){console.warn("[refreshStockScore] failed:",te)}}function A(S){T.value&&(E.value=S.touches[0].clientX,N.value=S.touches[0].clientY)}function s(S){if(!T.value)return;const l=E.value-S.changedTouches[0].clientX,h=N.value-S.changedTouches[0].clientY;if(Math.abs(l)>Math.abs(h)&&Math.abs(l)>80){const te=d.value.map(function(_){return _.key}),I=te.indexOf(w.value);if(l>0&&I<te.length-1){const _=te[I+1],m=window.__quantGoPage;m?m(_,""):(w.value=_,r.value="")}else if(l<0&&I>0){const _=te[I-1],m=window.__quantGoPage;m?m(_,""):(w.value=_,r.value="")}}}return{marketData:o,marketRefreshTimer:M,fetchMarketData:q,indexDetailVisible:k,indexDetail:C,indexAiResult:x,indexAiLoading:b,showIndexDetail:R,loadCachedIndexEval:B,doIndexAiEvaluate:W,disposeStockKline:D,isMobile:T,zoomKlineRange:U,scoreAnimating:u,scoreDelta:n,scorePulse:f,triggerScorePulse:Y,animateScoreChange:Z,animateScoreEntrance:F,refreshStockScore:ee,touchStartX:E,touchStartY:N,onTouchStart:A,onTouchEnd:s}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:e,currentPage:v,currentSubPage:t}=a,c=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),d=ref("idle"),w=ref("");async function r(){if(!c.value.webhook_url){w.value="请先输入Webhook地址";return}d.value="testing",w.value="";try{const L=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:c.value.webhook_url})})).json();L.success||L.status==="ok"?(w.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(w.value=L.message||"测试失败",ElementPlus.ElMessage.error(w.value))}catch{w.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}d.value="idle"}const i=Vue.ref(!1);async function p(){i.value=!0;try{const L=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{i.value=!1}}const o=ref(!1);function M(){e("ai","chat_history"),o.value=!0,Vue.nextTick(()=>{const J=document.querySelector('input[placeholder*="输入问题"]');J&&J.focus()})}const k=ref([]),C=ref({});async function x(){try{const L=await(await fetch("/api/ai/recommend-strategies")).json();L.success&&(k.value=L.recommendations||[])}catch(J){console.warn("[loadStrategyRecommendations] failed:",J)}}async function b(){try{const L=await(await fetch("/api/ai/usage-stats")).json();L.success&&(C.value=L)}catch(J){console.warn("loadAiUsage failed:",J)}}const D=ref({}),T=ref([]),u=ref(7);async function n(){try{const L=await(await fetch("/api/system/monitor")).json();L.success&&(D.value=L)}catch(J){console.warn("loadSysMonitor failed:",J)}}const f=ref({});async function E(){try{const L=await(await fetch("/api/system/health-detail")).json();L.success&&(f.value=L)}catch(J){console.warn("loadHealthDetail failed:",J)}}async function N(){try{const L=await(await fetch(`/api/analytics/rank?days=${u.value}`)).json();L.success&&(T.value=L.rank||[])}catch(J){console.warn("loadAnalytics failed:",J)}}const q=ref(!1);async function z(){if(!q.value){q.value=!0;try{const L=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return L&&L.success?L.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${L.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${L.date}）`):ElementPlus.ElMessage.error(L&&(L.detail||L.message)||"生成复盘失败"),E(),L}catch(J){ElementPlus.ElMessage.error("生成复盘失败: "+(J.message||""))}finally{q.value=!1}}}const R=ref(null),B=ref(!1);async function W(){try{const L=await(await fetch("/api/ai/fact-check/latest")).json();R.value=L&&L.success&&L.data||null}catch(J){console.warn("loadFactCheck failed:",J)}}async function U(){if(!B.value){B.value=!0;try{const L=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return L&&L.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${L.data.pass_rate!=null?L.data.pass_rate+"%":"--"} (${L.data.checked} 个数字)`),W()):ElementPlus.ElMessage.error(L&&(L.detail||L.message)||"事实护栏抽查失败"),L}catch(J){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(J.message||""))}finally{B.value=!1}}}const Y=ref([]),Z=ref(!1);async function F(){try{const L=await(await fetch("/api/backup/list")).json();L.success&&(Y.value=L.backups||[])}catch(J){console.error("加载备份列表失败",J)}}async function ee(){Z.value=!0;try{const L=await(await fetch("/api/backup/create",{method:"POST"})).json();L.success?(ElementPlus.ElMessage.success(L.message||"备份成功"),F()):ElementPlus.ElMessage.error(L.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{Z.value=!1}}const A=ref(""),s=ref("");async function S(J){A.value=J,s.value="";try{const L=window.__quantModules&&window.__quantModules.core||{},$=typeof L.authHeaders=="function"?L.authHeaders():{},ie=await fetch("/api/reports/export?format="+encodeURIComponent(J),{headers:$});if(!ie.ok)throw new Error("HTTP "+ie.status);const me=await ie.blob(),Te=URL.createObjectURL(me),X=document.createElement("a");X.href=Te;const oe=new Date().toISOString().slice(0,10);X.download="report_"+oe+"."+J,document.body.appendChild(X),X.click(),document.body.removeChild(X),URL.revokeObjectURL(Te),s.value="报表已导出 ("+J.toUpperCase()+")"}catch(L){s.value="报表导出失败: "+(L.message||L)}finally{A.value=""}}async function l(J){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${J} 恢复吗？当前数据将被覆盖。`,"恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(L){console.warn("[restoreBackup] confirm cancelled:",L);return}try{const $=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:J})})).json();$.success?(ElementPlus.ElMessage.success($.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error($.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const h=ref(!1),te=ref(0),I=[{icon:"calendar",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"bot",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 AI 按钮可随时快速问股。"},{icon:"send",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function _(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{te.value=0,h.value=!0},800)}function m(){h.value=!1,localStorage.setItem("quant_tour_done","1")}function P(){h.value=!1,localStorage.setItem("quant_tour_done","1")}const y=ref(""),j=ref(!1);async function se(){if(!y.value||!y.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}j.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:y.value.trim(),page:v.value+"/"+t.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(y.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{j.value=!1}}return{feishuConfig:c,feishuTestStatus:d,feishuTestMessage:w,feishuSaving:i,testFeishuWebhook:r,saveFeishuConfig:p,aiFabHidden:o,openAiFab:M,strategyRecommendations:k,aiUsage:C,loadStrategyRecommendations:x,loadAiUsage:b,sysMonitor:D,analyticsRank:T,analyticsDays:u,loadSysMonitor:n,loadAnalytics:N,healthDetail:f,loadHealthDetail:E,reviewTriggering:q,triggerMarketReview:z,factCheck:R,factCheckRunning:B,loadFactCheck:W,triggerFactCheck:U,backups:Y,backupCreating:Z,loadBackups:F,createBackup:ee,restoreBackup:l,reportExporting:A,reportExportMsg:s,exportReport:S,tourVisible:h,tourStep:te,tourSteps:I,maybeShowTour:_,skipTour:m,finishTour:P,feedbackText:y,feedbackSubmitting:j,submitFeedback:se}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:e}=Vue,{currentView:v,selectedDate:t,dates:c,loadConsensusData:d,hapticFeedback:w}=a,r=e(()=>({day:"天",week:"周",month:"月",year:"年"})[v.value]||"天"),i=e(()=>({day:"date",week:"week",month:"month",year:"year"})[v.value]||"date"),p=e(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[v.value]||"YYYY-MM-DD"),o=e(()=>!t.value||!c.value||c.value.length===0?!1:t.value>c.value[0]),M=e(()=>!t.value||!c.value||c.value.length===0?!1:t.value<c.value[c.value.length-1]);function k(D){w("light"),v.value=D;let T=t.value||c.value[c.value.length-1];if(D==="year"){const u=T.substring(0,4),n=c.value.find(f=>f.startsWith(u));t.value=n||T}else if(D==="month"){const u=T.substring(0,7),n=c.value.find(f=>f.startsWith(u));t.value=n||T}setTimeout(d,50)}function C(D){w("light");const T=t.value,u=c.value,n=u.indexOf(T);if(n<0)return;let f=1;v.value==="week"&&(f=5),v.value==="month"&&(f=22),v.value==="year"&&(f=250);const E=n+D*f;if(E>=0&&E<u.length){const N=u[E];if(v.value==="month"){const q=N.substring(0,7),z=u.find(R=>R.startsWith(q));t.value=z||N}else if(v.value==="year"){const q=N.substring(0,4),z=u.find(R=>R.startsWith(q));t.value=z||N}else t.value=N;d()}}function x(D){if(!c.value||c.value.length===0)return!1;const T=D.getFullYear(),u=String(D.getMonth()+1).padStart(2,"0"),n=String(D.getDate()).padStart(2,"0"),f=`${T}-${u}-${n}`;return!c.value.includes(f)}function b(D){D&&D.length>10&&(t.value=D.substring(0,10)),d()}return{viewUnit:r,datePickerType:i,dateFormat:p,canNavPrev:o,canNavNext:M,switchView:k,navigateDate:C,disabledDate:x,onDateChange:b}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:e,subPageNames:v,navigateTo:t,currentPage:c,currentSubPage:d,currentView:w,navigateDate:r,switchView:i,getLoadDashboardData:p,refreshCalendarData:o,getLoadAiHistory:M,exportCSV:k,getShowBatchEvaluate:C,openAiFab:x,toggleSidebar:b,showStockDetail:D,getSelectedDate:T,markExternalStock:u}=a,n=ref("");async function f(F,ee){if(!F||F.trim().length<1){ee([]);return}const A=window.QuantCommandPanel;let s=[];A&&e.value&&(s=A.buildSearchSuggestions(F,e.value,v,A.DEFAULT_COMMANDS));const S=window.__quantModules&&window.__quantModules.pinyin;S&&S.searchCoreStocks(F).forEach(function(l){s.push({value:l.code+" "+l.name,type:"stock",code:l.code,name:l.name,label:l.name,subLabel:l.code,icon:"trending-up",iconName:"trending-up"})});try{const h=await(await fetch("/api/search?q="+encodeURIComponent(F))).json();if(h.success&&h.results){const te=h.results.map(function(_){return{value:_.code+" "+_.name,type:"stock",code:_.code,name:_.name,label:_.name,subLabel:_.code,icon:"trending-up",iconName:"trending-up"}}),I=[];(h.groups||[]).forEach(function(_){(_.items||[]).forEach(function(m){m.type==="sector"?I.push({value:m.name+" · "+m.subLabel,type:"sector",name:m.name,label:m.name,subLabel:"板块",icon:"layers",iconName:"layers"}):m.type==="strategy"?I.push({value:m.name+" · 策略",type:"strategy",id:m.id,name:m.name,label:m.name,subLabel:"策略",icon:"target",iconName:"target"}):m.type==="menu"&&I.push({value:m.name,type:"menu",menuKey:m.menuKey,name:m.name,label:m.name,subLabel:m.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),ee(s.concat(te,I))}else ee(s)}catch(l){console.warn("[searchStocks] fetch failed:",l),ee(s)}}function E(F){return F?F.type==="menu"?{action:"menu",menuKey:F.menuKey,subPage:F.subPage}:F.type==="command"?{action:"command",key:F.key}:F.type==="sector"?{action:"sector",name:F.name}:F.type==="strategy"?{action:"strategy",id:F.id,name:F.name}:F.type==="stock"||F.code&&F.name?{action:"stock",code:F.code,name:F.name}:null:null}function N(F){n.value="";const ee=window.QuantCommandPanel,A=ee?ee.dispatchSearchSelection(F):E(F);if(A){if(A.action==="menu"){t(A.menuKey,A.subPage);return}if(A.action==="command"){R(A.key);return}if(A.action==="sector"){t("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(A.name);return}if(A.action==="strategy"){t("research","overview");return}if(A.action==="stock"){(c.value!=="calendar"||d.value!=="calendar")&&t("calendar","calendar"),typeof u=="function"&&u(A.code),z(A.code,A.name);return}}}let q=null;function z(F,ee){q&&(clearInterval(q),q=null);const A=function(){typeof D=="function"&&D(F,ee)},s=T?T():null;if(s&&s.value){A();return}const S=Date.now();q=setInterval(function(){((T?T().value:!0)||Date.now()-S>4e3)&&(clearInterval(q),q=null,A())},60)}function R(F){if(F==="refresh"){const ee=c.value;ee==="strategies"?p().catch(function(){}):ee==="calendar"?o().catch(function(){}):ee==="ai"&&M().catch(function(){})}else F==="export"?k():F==="batch"?C().value=!0:F==="ai"?x():F==="sidebar"?b():F==="open-eval-history"?t("ai","history"):F==="open-shortterm"&&t("shortterm","overview")}const B=ref(!1),W=ref(!1);function U(F){if(!F)return!1;const ee=F.tagName;return ee==="INPUT"||ee==="TEXTAREA"||ee==="SELECT"||F.isContentEditable}function Y(F){if(U(F.target))return;const ee=F.key.toLowerCase();if(F.ctrlKey&&ee==="k"){F.preventDefault(),W.value=!0;return}if(F.ctrlKey&&ee==="/"){F.preventDefault(),B.value=!B.value;return}if(F.ctrlKey&&ee==="h"){F.preventDefault(),t("ai","history");return}if(F.ctrlKey&&F.shiftKey&&ee==="s"){F.preventDefault(),t("shortterm","overview");return}if(!(F.ctrlKey||F.metaKey||F.altKey)){if(ee>="1"&&ee<="5"){const A=parseInt(ee)-1,s=e.value[A];s&&t(s.key,s.subPages[0]||"");return}if(ee==="r"&&Z(),(ee==="arrowleft"||ee==="arrowright"||ee==="arrowup"||ee==="arrowdown")&&c.value==="calendar")if(F.preventDefault(),ee==="arrowleft"||ee==="arrowright")r(ee==="arrowleft"?-1:1);else{const A=["day","week","month","year"].indexOf(w.value),s=["day","week","month","year"][(A+(ee==="arrowup"?-1:1)+4)%4];i(s)}}}function Z(){const F=c.value;F==="strategies"?p().catch(()=>{}):F==="calendar"?o().catch(()=>{}):F==="ai"&&M().catch(()=>{})}return{searchQuery:n,searchStocks:f,onSearchSelect:N,runGlobalCommand:R,shortcutHelpVisible:B,commandPaletteVisible:W,isTypingTarget:U,handleGlobalKeydown:Y,refreshCurrentPage:Z}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:e,loadUserConfig:v,loadDates:t,loadDashboardData:c,loadDashboardCached:d,loadHealthMetrics:w,loadConsensusData:r,applyTheme:i,maybeShowTour:p,loadAiVendors:o,loadGroupConfig:M,groupsConfig:k}=a,C=function(ee){const A=window.__quantModules&&window.__quantModules.themes;return A&&A.applyLegacyTheme?A.applyLegacyTheme(ee):i(ee)},x="qc_login_username";let b="";try{b=localStorage.getItem(x)||""}catch{b=""}const D=ref({username:b,password:""}),T=ref(!1),u=ref(!1),n=ref(!1),f=ref({oldPassword:"",newPassword:"",confirmPassword:""}),E=ref(!1),N=ref(!1),q=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),z=ref(1);async function R(){try{(await(await fetch("/api/setup/status")).json()).needed&&(q.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},z.value=1,N.value=!0)}catch(ee){console.warn("[checkSetupWizard] failed:",ee)}}async function B(){try{const ee={new_password:q.value.newPassword,ai_key:q.value.aiKey,ai_provider:q.value.aiProvider,ai_model:q.value.aiModel,ai_endpoint:q.value.aiEndpoint,tushare_token:q.value.tushareToken},s=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ee)})).json();s.success?(N.value=!1,ElementPlus.ElMessage.success("初始化完成"),await v()):ElementPlus.ElMessage.error(s.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function W(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(N.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function U(){if(!D.value.username||!D.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}T.value=!0;try{const A=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(D.value)})).json();if(A.success){e.value=A.user,localStorage.setItem("quant_user",JSON.stringify(A.user)),localStorage.setItem("quant_token",A.data.access_token),C(A.user.theme||"gold");try{localStorage.setItem(x,D.value.username||"")}catch{}typeof M=="function"&&await M().catch(function(){}),typeof o=="function"&&o(),await v(),await t(),await Promise.all([d(),r(),w().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),A.data&&A.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),p(),A.user.role==="admin"&&setTimeout(R,500)}else ElementPlus.ElMessage.error(A.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{T.value=!1}}async function Y(){u.value=!0;try{const A=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();A.success?(e.value=A.user,localStorage.setItem("quant_user",JSON.stringify(A.user)),localStorage.setItem("quant_token",A.data.access_token),C(A.user.theme||"gold"),typeof M=="function"&&await M().catch(function(){}),await v(),await t(),await c(),w().catch(()=>{}),await r(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error(A.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{u.value=!1}}function Z(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{e.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{k&&(k.value={})}catch{}try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function F(){if(!f.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!f.value.newPassword||f.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(f.value.newPassword!==f.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}E.value=!0;try{const ee=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:f.value.oldPassword,new_password:f.value.newPassword})}),A=await ee.json();ee.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),n.value=!1,f.value={oldPassword:"",newPassword:"",confirmPassword:""},Z()):ElementPlus.ElMessage.error(A.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{E.value=!1}}return{loginForm:D,logining:T,guestLogining:u,showChangePassword:n,changePasswordForm:f,changingPassword:E,showSetupWizard:N,setupForm:q,setupStep:z,checkSetupWizard:R,completeSetupWizard:B,resetSetupWizard:W,handleLogin:U,handleGuestLogin:Y,handleLogout:Z,doChangePassword:F}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:e}=Vue;let v=null;const{strategyFilter:t,currentView:c,statusFilter:d,currentPage:w,currentSubPage:r,menus:i,currentUser:p,strategyFilterCounts:o,lazyTick:M,dates:k,selectedDate:C,consensus:x,loadConsensusData:b,fetchMerrillClock:D,fetchMarketData:T,loadWatchlist:u,loadAiHistory:n,preloadWatchlistKline:f,loadChatHistory:E,loadSystemStatus:N,checkTushareConnection:q,loadSysMonitor:z,loadAnalytics:R,loadHealthDetail:B,loadHealthMetrics:W,loadAiUsage:U,loadFactCheck:Y,loadAutoEvaluateConfig:Z,loadDatasourceConfig:F,loadFeishuConfig:ee,loadAiConfig:A,loadAiVendors:s,loadRateLimit:S,loadDataRefreshConfig:l,loadBackups:h,loadAllGroups:te,loadUsers:I,stockDetailTab:_,stockDetailVisible:m,stockKlineLoaded:P,loadStockKline:y,currentKlinePeriod:j,showMerrillDetail:se,indexDetailVisible:J,restoreDialogFocus:L}=a;e(t,$=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify($.selected)),localStorage.setItem("quant_strategy_filter_mode",$.mode)},{deep:!0}),e([c,d],($,ie)=>{$[0]!==ie[0]&&b()}),e([w,r],([$,ie])=>{var me;try{const X=!($==="calendar"&&ie==="calendar")&&ie||"",oe=X?"#"+$+"/"+X:"#"+$;window.location.hash!==oe&&(window.location.hash=oe)}catch{}if(ie&&localStorage.setItem("quant_last_subpage",ie),!ie&&i.value.find(Te=>Te.key===$)){const Te=i.value.find(X=>X.key===$);Te&&Te.subPages.length>0&&(r.value=Te.subPages[0])}if($==="shortterm"&&ie==="market-review"){const Te=window.__lazyLoaders&&window.__lazyLoaders.research;Te&&Te().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function(X){X&&X.name&&!X.__quantRegistered&&(window.__quantApp.component(X.name,X),X.__quantRegistered=!0)}),M&&M.value++}).catch(function(X){console.warn("[lazy] research 组件补加载失败",X)})}$==="calendar"&&ie==="calendar"&&(!x.value||x.value.length===0)&&(k.value.length>0&&!C.value&&(C.value=k.value[k.value.length-1]||""),setTimeout(b,50)),$==="calendar"&&ie==="pool"&&(!x.value||x.value.length===0)&&(k.value.length>0&&!C.value&&(C.value=k.value[k.value.length-1]||""),setTimeout(b,50)),$==="strategies"&&(ie==="merrill"&&D(),ie==="market"&&T(),ie==="consensus"&&(!x.value||x.value.length===0)&&setTimeout(b,50)),$==="ai"&&(ie==="watchlist"&&(u(),n(),setTimeout(f,500)),ie==="history"&&n(),ie==="overview"&&(n(),u()),ie==="chat_history"&&E()),($==="system"||$==="ops")&&((me=p.value)==null?void 0:me.role)==="admin"&&(ie==="status"&&(N(),q()),ie==="health"&&(B(),W()),ie==="schedule"&&B(),ie==="guard"&&Y(),ie==="usage"&&(z(),R(),B(),W(),U(),Y()),ie==="autoeval"&&(Z(),s()),ie==="datasource"&&F(),ie==="feature"&&(ee(),A(),S(),l(),h()),ie==="user"&&(te(),I())),($==="system"||$==="ops")&&ie==="usage"?v||(v=setInterval(()=>{z(),R(),B(),W(),U()},3e4)):v&&(clearInterval(v),v=null)}),e(_,($,ie)=>{$==="kline"&&ie&&ie!=="kline"&&m.value&&(P.value=!1,setTimeout(async()=>{!await y(j.value)&&m.value&&_.value==="kline"&&setTimeout(()=>y(j.value),800)},50))}),e(se,$=>{$||(document.documentElement.style.overflow="",document.body.style.overflow="")}),e([m,J],([$,ie])=>{!$&&!ie&&L()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:e,applyTheme:v,menus:t,currentPage:c,currentSubPage:d,currentView:w,currentKlinePeriod:r,selectedDate:i,dates:p,loadDates:o,loadConsensusData:M,loadDashboardCached:k,appVersion:C,themes:x,fetchMarketData:b,fetchMerrillStages:D,fetchMerrillClock:T,loadAiConfig:u,loadAiVendors:n,loadAiCatalog:f,currentUser:E,loadUserConfig:N,loadAutoEvaluateConfig:q,loadGroupConfig:z,loadUsers:R,loadAllGroups:B,loadAiHistory:W}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",e);function U(I,_){const m={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(I==="calendar"&&m[_])return c.value="calendar",d.value="calendar",m[_]&&(w.value=m[_]),!0;if(I==="research"&&(_==="strategy-write"||_==="custom-write")){c.value="research",d.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",_==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const I=window.location.hash||"";if(!I||I==="#")return;const _=I.replace(/^#\/?/,"").split("/"),m=_[0],P=_[1]||"",y=t.value.find(function(j){return j.key===m});if(y&&!U(m,P)){if(!P)c.value=m,d.value=y.subPages[0]||"";else if(y.subPages.indexOf(P)>=0)c.value=m,d.value=P;else return;window.__lazyLoaders&&window.__lazyLoaders[m]&&window.__quantGoPage&&window.__quantGoPage(m,d.value).catch(function(){})}});const Y=(I,_=3e3,m="")=>{const P=new Promise((y,j)=>setTimeout(()=>j(new Error("timeout")),_));return Promise.race([I,P]).catch(y=>{console.warn(`[init] ${m||"task"} failed:`,y.message)})},Z=localStorage.getItem("quant_theme"),F=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const I=window.__quantModules.themes;let _=F.theme||"system",m=F.theme_hue!=null&&F.theme_hue!==""?F.theme_hue:null;const P=typeof I.migrateLegacyTheme=="function"?I.migrateLegacyTheme():null;m==null&&P&&(_=P.mode,m=P.hue),m==null&&(m=45),v(_,m)}else Z&&v(Z);await z().catch(function(){}),function(){var I=window.location.hash||"",_=!1;if(I&&I!=="#"){var m=I.replace(/^#\/?/,"").split("/"),P=m[0],y=m[1]||"",j=t.value.find(function(ie){return ie.key===P});j&&(U(P,y)||(c.value=P,y&&j.subPages.indexOf(y)>=0?d.value=y:y||(d.value=j.subPages[0]||"")),_=!0)}if(!_){var se=localStorage.getItem("quant_last_page");se&&t.value.some(function(ie){return ie.key===se})?c.value=se:F.default_view&&t.value.some(function(ie){return ie.key===F.default_view})&&(c.value=F.default_view);var J=localStorage.getItem("quant_last_subpage");J&&(d.value=J)}var L=localStorage.getItem("quant_last_date");L&&(i.value=L);var $=localStorage.getItem("quant_last_view");$&&(w.value=$),window.__lazyLoaders&&window.__lazyLoaders[c.value]&&window.__quantGoPage&&window.__quantGoPage(c.value,d.value).catch(function(){})}(),fetch("/api/health").then(I=>I.json()).then(I=>{I.version&&(C.value=I.version)}).catch(()=>{});const ee=localStorage.getItem("quant_user"),A=localStorage.getItem("quant_token"),s=!!(ee&&A),S=Promise.all([Promise.resolve().then(()=>{x.value={light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}}),Y(b(),3e3,"marketData"),Y(D(),2e3,"merrillStages")]).then(()=>{Y(T(),3e3,"merrillClock")});if(u(),f(),s&&E.value&&n(),!s||!E.value){await S;return}let l=!0;try{l=(await fetch("/api/users/me")).ok}catch{l=!1}if(!l){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),E.value=null;return}if(E.value){const I=E.value.theme||"",_=window.__quantModules&&window.__quantModules.themes;let m=F.theme||"system",P=F.theme_hue!=null&&F.theme_hue!==""?F.theme_hue:null;if(P==null&&_&&typeof _.migrateLegacyTheme=="function"){const y=_.migrateLegacyTheme();if(y)m=y.mode,P=y.hue;else if(I&&_.LEGACY_MAP&&_.LEGACY_MAP[I]){const j=_.LEGACY_MAP[I];m=j[0],P=j[1]}}P==null&&(P=45),v(m,P)}if(window.__quantModules&&window.__quantModules.preferences){const _=await window.__quantModules.preferences.loadPreferences();var h=localStorage.getItem("quant_last_page");!h&&_.default_view&&t.value.some(function(m){return m.key===_.default_view})&&(c.value=_.default_view),_.theme&&v(_.theme,_.theme_hue!=null&&_.theme_hue!==""?_.theme_hue:null),r&&(_.chart_period==="weekly"||_.chart_period==="monthly")&&(r.value=_.chart_period)}await Promise.all([Y(N(),2e3,"userConfig"),Y(o(),2e3,"dates")]),q().catch(()=>{}),z().catch(()=>{});const te=c.value==="strategies"?Y(k(),2e3,"dashboard"):Y(M(),2e3,"consensus");await Promise.all([te,Y(R(),2e3,"users"),Y(W(),2e3,"aiHistory")]),B().catch(()=>{})}}}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:e,onMounted:v,onUnmounted:t,watch:c,nextTick:d}=Vue,w=a(!1),r=window.__quantModules&&window.__quantModules.i18n||{},i=r.SUPPORTED_LOCALES||["zh-CN","en"],p=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",o=a(i.indexOf(p)!==-1?p:"zh-CN");typeof r.bindLocale=="function"&&r.bindLocale(o);const M=typeof r.t=="function"?r.t:function(V){return String(V)};function k(V){i.indexOf(V)!==-1&&(o.value=V,typeof r.setLocale=="function"&&r.setLocale(V),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",V))}function C(V,re){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(V,re):V==null?"":String(V)}function x(V){(V.key==="Enter"||V.key===" "||V.key==="Spacebar")&&(V.preventDefault(),V.currentTarget&&typeof V.currentTarget.click=="function"&&V.currentTarget.click())}let b=null;function D(){document.activeElement&&document.activeElement!==document.body&&(b=document.activeElement)}function T(){if(b&&b.isConnected)try{b.focus()}catch{}b=null}const u=a(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{u.value=!0}),window.addEventListener("offline",()=>{u.value=!1})),window.addEventListener("beforeunload",V=>{if(w.value)return V.preventDefault(),V.returnValue="您有未保存的配置变更，确定要离开吗？",V.returnValue});function n(V="light"){typeof navigator<"u"&&navigator.vibrate&&(V==="light"?navigator.vibrate(10):V==="medium"?navigator.vibrate(20):V==="heavy"&&navigator.vibrate([10,30,10]))}const f=useMerrillClock(),{merrillData:E,merrillStagesConfig:N,showMerrillDetail:q,merrillDetailData:z,merrillClockConfig:R,merrillClockLastUpdated:B,merrillReevalResult:W,merrillReevalLoading:U,stages:Y,indicatorList:Z,dimensionScoreList:F,detailDimensionScoreList:ee,confidenceColor:A,timelineStages:s,clockPosition:S,merrillProgressStyle:l,FULL_CYCLE_MONTHS:h,getStageAngle:te,getCycleProgress:I,getCurrentStageMonths:_,getStageTotalMonths:m,isStageCompleted:P,getCharLabel:y,getAssetName:j,getRankColor:se,fetchMerrillStages:J,fetchMerrillClock:L,loadMerrillTimeline:$,showTimelineStage:ie,merrillTimeline:me,timelineLoading:Te,showStageDetail:X,saveMerrillClockConfig:oe,doMerrillReevaluate:Pe,startAutoRefresh:ne,stopAutoRefresh:ge,merrillSnapshots:Me,merrillSnapshotsTotal:ce,fetchMerrillSnapshots:he}=f,xe=a(localStorage.getItem("sidebar_collapsed")==="1");function le(){xe.value=!xe.value,localStorage.setItem("sidebar_collapsed",xe.value?"1":"0")}const ae=a(null),ve=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","notification","about"],guestSubPages:["config","about"]}],ze=e(()=>{var Je,Lt,Vt;const V=((Je=Ye.value)==null?void 0:Je.role)||"guest",re=((Lt=Ye.value)==null?void 0:Lt.group)||V,_e=((Vt=ae.value)==null?void 0:Vt[re])||null;return ve.map(Rt=>{if(_e&&_e.visible_menus&&Rt.key in _e.visible_menus&&!_e.visible_menus[Rt.key])return null;const va={...Rt,name:M("nav."+Rt.key)||Rt.name};return _e!=null&&_e.visible_sub_pages&&(va.subPages=Rt.subPages.filter(as=>{const Ld=Rt.key+"."+as;return _e.visible_sub_pages[Ld]!==!1})),Rt.key==="system"&&V==="guest"&&Rt.guestSubPages&&(va.subPages=Rt.guestSubPages),va}).filter(Boolean)});async function Ae(){try{if(!localStorage.getItem("quant_token"))return;const re=await fetch("/api/groups/my");if(re.ok){const _e=await re.json();ae.value={[_e.group_id]:_e.group}}}catch(V){console.warn("loadGroupConfig:",V)}}const Ve=a("strategies"),nt=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},tt=a(nt.navMode);function at(V){const re=window.__quantModules&&window.__quantModules.navModeCore;tt.value=re?re.normalizeNavMode(V):V==="tree"||V==="toptab"?V:"toptab",re&&re.writePrefs({navMode:tt.value})}const we=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function ke(V,re=""){n("light"),Ve.value=V,g.value=re,localStorage.setItem("quant_last_subpage",re)}function Le(){const V=ze.value;if(!V||!V.length)return;if(!V.some(function(He){return He.key===Ve.value})){const He=V[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",He.key),Ve.value=He.key,g.value=He.subPages&&He.subPages[0]||"";return}const _e=V.find(function(He){return He.key===Ve.value});_e&&_e.subPages&&_e.subPages.length&&!_e.subPages.includes(g.value)&&(g.value=_e.subPages[0])}const Re=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],Ue=a("multifactor"),Ge=a(null),Qe=a(1e5),et=a(!1),lt=a(null);let ft=null,xt=null;async function Tt(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const re={initial_capital:Qe.value||1e5};Ge.value&&Ge.value.length===2&&(re.start_date=Ge.value[0],re.end_date=Ge.value[1]),et.value=!0,lt.value=null;try{const _e=await fetch("/api/strategies/"+Ue.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(re)});if(!_e.ok){const Lt=await _e.json().catch(()=>({}));throw new Error(Lt.detail||"回测失败")}const He=await _e.json(),Je=He.result||{};if(!Je.success)throw new Error(Je.message||"回测失败");He.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),lt.value={total_return_pct:((Je.total_return??0)*100).toFixed(2),annual_return_pct:((Je.annual_return??0)*100).toFixed(2),max_drawdown_pct:((Je.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(Je.sharpe_ratio??0).toFixed(2),win_rate:((Je.win_rate??0)*100).toFixed(2),out_sample:Je.outsample_total_return===void 0?"":((Je.outsample_total_return??0)*100).toFixed(2),overfit_warning:Je.overfit_warning||!1,message:Je.message||""},qt(Je.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(_e){ElementPlus.ElMessage.error(_e.message||"回测失败")}finally{et.value=!1}}function qt(V){const re=document.getElementById("backtestEquityChart");if(!re||!V||V.length===0)return;const _e=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,He=()=>{xt=V,ft&&(ft.dispose(),ft=null),ft=echarts.init(re),ft.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const Je=V.map(Vt=>Vt.date||Vt[0]),Lt=V.map(Vt=>Vt.value??Vt[1]);ft.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:Je,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:Lt,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};_e?_e().then(He).catch(()=>{}):He()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){xt&&qt(xt)}));const g=a("overview");(function(){const V=window.QuantSessionRestore;if(V){const re=V.restore();re&&re.page&&(Ve.value=re.page,re.sub&&(g.value=re.sub))}})(),Vue.watch(g,function(){mn()});const O=e(()=>{const V=ve.find(re=>re.key===Ve.value);return V?V.name:Ve.value}),Q=a(0),de=e(()=>{Q.value;const V={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},re=g.value;return Ve.value==="shortterm"&&re==="market-review"?"qc-research-page":Ve.value==="ops"&&re==="execution"?"qc-strategies-page":V[Ve.value]||""}),ue=a(!1),Ee=a({}),Se=a([]);a("");const Ne=a([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),Oe=a("day"),Fe=a("all"),Ye=a(null);c(ze,function(){Le()}),c([Ve,g],function(){const V=document.querySelector(".main-content");V&&(V.scrollTop=0)}),function(){if(typeof localStorage>"u")return;const V=localStorage.getItem("quant_user"),re=localStorage.getItem("quant_token");if(V&&re)try{Ye.value=JSON.parse(V)}catch{}}();const ht=a(!1),Xe=a("kline"),H=a(null),fe=a(!1),$e=a(localStorage.getItem("qc_detail_mode")||"split"),je=a(window.innerWidth<=1024),wt=e(()=>$e.value==="split"&&!je.value);function Et(V){$e.value=V;try{localStorage.setItem("qc_detail_mode",V)}catch{}}window.addEventListener("resize",()=>{je.value=window.innerWidth<=1024});const At=35,ot=a(parseInt(localStorage.getItem("qc_split_width")||"",10)||null);function bt(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",ot.value?ot.value+"px":At+"%")}bt();function It(V){const re=Math.max(1,Math.min(V,2e3));ot.value=re,bt();try{localStorage.setItem("qc_split_width",String(re))}catch{}}function ia(V){if(ot.value)return ot.value;const re=V?V.getBoundingClientRect().width:0;return Math.max(200,Math.floor(re*At/100))}let dt=null;function Bt(V,re){if(!re||je.value)return;V.preventDefault();const _e=re.getBoundingClientRect().width;dt={startX:V.clientX,startW:ia(re),minW:Math.max(200,Math.floor(_e*At/100)),maxW:Math.floor(_e/2)},document.body.classList.add("qc-split-resizing")}function St(V){if(!dt)return;const re=V.clientX-dt.startX;let _e=dt.startW+re;_e=Math.max(dt.minW,Math.min(_e,dt.maxW)),ot.value=_e,bt();try{localStorage.setItem("qc_split_width",String(_e))}catch{}}function yt(){dt&&(dt=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",St),document.addEventListener("mouseup",yt));function $t(V){const re=V.target&&V.target.closest?V.target.closest("[data-split-resize]"):null;if(!re)return;const _e=re.closest("[data-split-root]");Bt(V,_e)}typeof document<"u"&&document.addEventListener("mousedown",$t,!0);const Kt={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于"},rt=a({});function Ht(V,re){return Kt[re]||re}function Xt(V){const re=ve.find(He=>He.key===V);if(!re||!re.subPages||!re.subPages.length)return;if(!(rt.value[V]||[]).length){const He=re.subPages[0];rt.value=Object.assign({},rt.value,{[V]:[{subPage:He,title:Ht(V,He)}]})}}function oa(V,re){const _e=window.__quantModules&&window.__quantModules.tabsCore,He=Ht(V,re);if(_e){const Je=_e.openTab(rt.value,V,re,He);rt.value=Je.groups}else{const Je=rt.value[V]||[];Je.some(Lt=>Lt.subPage===re)||(rt.value=Object.assign({},rt.value,{[V]:Je.concat([{subPage:re,title:He}])}))}ke(V,re)}function Ut(V,re){const _e=window.__quantModules&&window.__quantModules.tabsCore,He=g.value;let Je=null;if(_e)Je=_e.closeTab(rt.value,V,re,He),rt.value=Je.groups;else{const Rt=rt.value[V]||[];rt.value=Object.assign({},rt.value,{[V]:Rt.filter(va=>va.subPage!==re)})}if(!(rt.value[V]||[]).length){Xt(V);const Rt=ve.find(as=>as.key===V),va=Rt&&Rt.subPages&&Rt.subPages[0];va&&ke(V,va);return}const Vt=Je?Je.nextActive:null;Vt&&ke(V,Vt)}function ra(V,re){if(!(rt.value[V]||[]).some(He=>He.subPage===re)){oa(V,re);return}ke(V,re)}c([Ve,g],([V,re])=>{Xt(V);const _e=rt.value[V]||[];re&&!_e.some(He=>He.subPage===re)&&(rt.value=Object.assign({},rt.value,{[V]:_e.concat([{subPage:re,title:Ht(V,re)}])}))},{immediate:!0});const K=function(V){if(!(V.ctrlKey&&V.key==="Tab"))return;const re=Ve.value,_e=rt.value[re]||[];if(_e.length<=1)return;V.preventDefault();const He=g.value,Je=Math.max(0,_e.findIndex(Rt=>Rt.subPage===He)),Lt=V.shiftKey?(Je-1+_e.length)%_e.length:(Je+1)%_e.length,Vt=_e[Lt];Vt&&ra(re,Vt.subPage)};window.addEventListener("keydown",K);const Ce=a({light:{name:"浅色",color:"var(--surface-canvas)"},dark:{name:"深色",color:"hsl(45, 10%, 8%)"}}),Be=a("light"),Ie=[45,220,0,140,270,320,180,25,250,-1],vt={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色",180:"青色",25:"橙色",250:"靛蓝","-1":"中性"},it=a(45),_t=a(function(){const V=window.__quantModules&&window.__quantModules.preferences;return V&&V.getPreference&&V.getPreference("theme")||"system"}());(function(){const V=window.__quantModules&&window.__quantModules.preferences,re=V&&V.getPreference&&V.getPreference("theme_hue");re!=null&&re!==""&&(it.value=parseInt(re,10))})();const Dt=a("comfortable");(function(){const V=window.__quantModules&&window.__quantModules.preferences;V&&V.applyDensity&&(Dt.value=V.applyDensity()||"comfortable")})();function kt(V){return V<0?"hsl(0, 0%, 46%)":"hsl("+V+", 75%, 42%)"}function ma(V){return vt[V]||"自定义 "+V}const Zt=a(""),fa=a([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),Gt=a({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),ea=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],Wt=a({day:[],week:[],month:[],year:[]}),_a=a({});function ta(V,re){let _e=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(_e=window.__quantModules.themes.applyTheme(V,re)),Be.value=_e&&_e.mode?_e.mode:V==="dark"||V==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function xa(V,re){const _e=window.__quantModules&&window.__quantModules.preferences;if(!(!_e||!_e.setPreferences))try{_e.setPreferences({theme:V}),re!=null&&re!==""&&_e.setPreferences({theme_hue:parseInt(re,10)})}catch{}}function ca(V,re){ta(V,re),re!=null&&re!==""&&(it.value=parseInt(re,10));const _e=window.__quantModules&&window.__quantModules.themes;let He=V;_e&&_e.LEGACY_MAP&&_e.LEGACY_MAP[V]&&(He=_e.LEGACY_MAP[V][0]),He==="light"||He==="dark"||He==="system"?_t.value=He:_t.value=Be.value,He==="system"&&(He=Be.value),xa(He,re),Ye.value&&(fetch(`/api/users/${Ye.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:He})}),Ye.value.theme=He,localStorage.setItem("quant_user",JSON.stringify(Ye.value)))}function gt(V){const re=window.__quantModules&&window.__quantModules.preferences,_e=re&&re.getPreference?re.getPreference("theme_hue"):null;ca(V,_e)}function Mt(V){const re=window.__quantModules&&window.__quantModules.preferences;!re||!re.applyDensity||(Dt.value=re.applyDensity(V)||"comfortable",re.setPreference&&re.setPreference("info_density",Dt.value))}function Nt(V){it.value=parseInt(V,10);const re=window.__quantModules&&window.__quantModules.preferences,_e=re&&re.getPreference&&re.getPreference("theme")||"light";ca(_e,it.value)}const Ot=a(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function da(V){Ot.value=!!V;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",V?"show":"hide")}catch{}}const Ma=e(()=>{const V=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return Ot.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...V]:V}),G=a("daily");(function(){try{const re=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(re==="weekly"||re==="monthly")&&(G.value=re)}catch{}})();const ye=a(!1),Ze=a(""),Yt=a(!1),Qt=a(!1),ya=a({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),yn=["MA5","MA10","MA20","MA60"],Na=a(!1);let ns=0;async function Sa(V){if(!H.value)return!1;const re=++ns;ye.value=!0,G.value=V;try{const He=await(await fetch(`/api/market/kline/${H.value.stock}?period=${V}&limit=60`)).json();if(!He.success||!He.data)throw new Error(He.message||"数据获取失败");return Ze.value=He.degraded_from?"分钟数据("+He.degraded_from+")暂不可用, 已降级展示日线":"",Zs(H.value.stock),re!==ns?!1:(Xe.value!=="kline"||(Qt.value=!0,await d(),window.__quantModules.charts.renderKlineTo("stockKlineChart",He.data,V,!1,{isMobile:ms.value,onLegend:Je=>{Object.keys(ya.value).forEach(Lt=>{Lt in Je&&(ya.value[Lt]=!!Je[Lt])})}}),ls()),!0)}catch(_e){return console.error("[kline] 加载失败:",H.value&&H.value.stock,V,_e),Xe.value==="kline"&&(Qt.value=!1,Ze.value="",ElementPlus.ElMessage.error("K线加载失败: "+(_e&&_e.message?_e.message:"数据源不可达，请重试"))),!1}finally{ye.value=!1}}async function Oa(V){if(Fa.value){Yt.value=!0,G.value=V;try{const _e=await(await fetch(`/api/market/kline/${Fa.value.code}?period=${V}&limit=60`)).json();if(!_e.success||!_e.data)throw new Error(_e.message||"数据获取失败");Na.value=!0,await d(),window.__quantModules.charts.renderKlineTo("indexKlineChart",_e.data,V,!0,{isMobile:ms.value,onLegend:He=>{Object.keys(ya.value).forEach(Je=>{Je in He&&(ya.value[Je]=!!He[Je])})}}),ls()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{Yt.value=!1}}}async function bn(V){if(!Qt.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await Sa(V)}async function wn(V){if(!Na.value){ElementPlus.ElMessage.info("请先加载K线");return}await Oa(V)}function kn(V){const re=(ht.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(Va.value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);re&&re.dispatchAction({type:"legendToggleSelect",name:V})}function ls(){["K线","MA5","MA10","MA20","MA60"].forEach(V=>{ya.value[V]=!0})}async function ja(){const V=await fetch("/api/system/metrics");if(!V.ok)throw new Error("metrics "+V.status);const re=await V.json(),_e=Array.isArray(re)?re:re&&re.data_sources||[];Se.value=_e}const is=()=>ts,_n=()=>Ts,xn=()=>er,Sn=()=>qa,Cn=()=>Ja,qn=()=>jt,En=window.__quantAppLogic.data.create({currentView:Oe,statusFilter:Fe,dashboardData:Ee,loadHealthMetrics:ja,getLoadDashboardData:is,getLastRefreshTime:_n,getFetchPoolSignals:xn}),{loading:os,loadingView:Mn,viewCache:Tn,dates:Ca,selectedDate:jt,lastLoadTime:rs,consensus:ua,viewNote:Dn,loadDates:cs,refreshCalendarData:ds,exportCSV:us,loadConsensusData:ba,loadDashboardCached:Ta}=En,Pn=window.__quantAppLogic.market.create({currentKlinePeriod:G,loadIndexKline:Oa,rememberDialogTrigger:D,menus:ze,currentPage:Ve,currentSubPage:g,stockDetail:H,selectedDate:jt}),{marketData:Rn,indexDetailVisible:Va,indexDetail:Fa,indexAiResult:zn,indexAiLoading:An,fetchMarketData:Ha,showIndexDetail:Ln,loadCachedIndexEval:In,doIndexAiEvaluate:Nn,disposeStockKline:vs,isMobile:ms,zoomKlineRange:On,scoreAnimating:jn,scoreDelta:Vn,scorePulse:Fn,refreshStockScore:Ba,animateScoreEntrance:Ka,onTouchStart:Hn,onTouchEnd:Bn}=Pn,Kn=window.__quantAppLogic.ops.create({navigateTo:ke,currentPage:Ve,currentSubPage:g}),{feishuConfig:fs,feishuTestStatus:Wn,feishuTestMessage:Un,testFeishuWebhook:Gn,saveFeishuConfig:Yn,aiFabHidden:Qn,openAiFab:ps,strategyRecommendations:Jn,aiUsage:$n,loadStrategyRecommendations:gs,loadAiUsage:Wa,sysMonitor:Xn,analyticsRank:Zn,analyticsDays:el,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:tl,loadHealthDetail:bs,reviewTriggering:al,triggerMarketReview:sl,factCheck:nl,factCheckRunning:ll,loadFactCheck:ws,triggerFactCheck:il,backups:ol,backupCreating:rl,loadBackups:ks,createBackup:cl,restoreBackup:dl,reportExporting:ul,reportExportMsg:vl,exportReport:ml,tourVisible:fl,tourStep:pl,tourSteps:gl,maybeShowTour:hl,skipTour:yl,finishTour:bl,feedbackText:wl,feedbackSubmitting:kl,submitFeedback:_l}=Kn,xl=window.__quantAppLogic.nav.create({currentView:Oe,selectedDate:jt,dates:Ca,loadConsensusData:ba,hapticFeedback:n}),{viewUnit:Sl,datePickerType:Cl,dateFormat:ql,canNavPrev:El,canNavNext:Ml,switchView:_s,navigateDate:xs,disabledDate:Tl,onDateChange:Dl}=xl,Pl=window.__quantAppLogic.keys.create({menus:ze,subPageNames:Kt,navigateTo:ke,currentPage:Ve,currentSubPage:g,currentView:Oe,navigateDate:xs,switchView:_s,getLoadDashboardData:is,refreshCalendarData:ds,getLoadAiHistory:Sn,exportCSV:us,getShowBatchEvaluate:Cn,openAiFab:ps,toggleSidebar:le,showStockDetail:Es,getSelectedDate:qn,markExternalStock:Ll}),{searchQuery:Rl,searchStocks:zl,onSearchSelect:Al,shortcutHelpVisible:Ss,commandPaletteVisible:Cs,handleGlobalKeydown:qs}=Pl;let Da=null;function Ll(V){Da={code:V,ts:Date.now()}}function Il(V){return!!(Da&&Date.now()-Da.ts<4e3&&(V==null||Da.code===V))}let Pa=0;async function Es(V){const re=++Pa;D(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(V,""),Ga.value=null,G.value="daily",Qt.value=!1,Xe.value="kline",H.value=null,fe.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),ht.value=!0,d(()=>Ka());try{const _e=await fetch(`/api/calendar/stock/${V}?date=${jt.value}`);if(re!==Pa)return;H.value=await _e.json(),H.value&&H.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(V,H.value.name)}catch{if(re!==Pa)return;ElementPlus.ElMessage.error("加载失败"),H.value={stock:V,name:"",total_days:0}}finally{re===Pa&&(fe.value=!1)}setTimeout(async()=>{await Sa("daily"),Ba()},500),$a(V)}const Nl={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},Ol={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function jl(V){return Nl[V]||"var(--text-tertiary)"}function Vl(V){return Ol[V]||"var(--bg-hover)"}const Fl=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:Qt,stockDetailVisible:ht,stockDetailTab:Xe,stockDetail:H,disposeStockKline:vs}):{},{chatSessions:Hl,chatHistoryView:Bl,selectedChatIds:Kl,expandedChatDates:Wl,expandedChatMonths:Ul,expandedChatStocks:Gl,chatHistoryLoading:Yl,chatHistoryError:Ql,allChatSessionsFlat:Jl,chatGroupedByDate:$l,chatGroupedByMonth:Xl,chatGroupedByStock:Zl,toggleSelectChat:ei,toggleSelectChatDate:ti,toggleSelectChatMonth:ai,toggleSelectChatStock:si,toggleChatDateExpand:ni,toggleChatMonthExpand:li,toggleChatStockExpand:ii,selectAllChatSessions:oi,deleteSelectedChatSessions:ri,viewChatSession:ci,loadChatHistory:Ms,deleteChatSession:di,renderMarkdown:ui,stockChatInput:vi,stockChatMessages:mi,stockChatLoading:fi,stockChatError:pi,askStockSend:gi,askStockQuick:hi}=Fl,yi=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:Ye,applyTheme:ta,allMenuDefs:ve,loadGroupConfig:Ae}):{},{userList:bi,userSearch:wi,groupFilter:ki,userPageTab:_i,expandedGroups:xi,addMemberGroupMap:Si,filteredUsers:Ci,toggleGroupExpand:qi,removeMemberFromGroupInline:Ei,addMemberToGroupInline:Mi,changeUserGroup:Ti,showAddUser:Di,editingUser:Pi,userForm:Ri,savingUser:zi,editingGroup:Ai,menuConfigDialog:Li,memberDialog:Ii,groupEditForm:Ni,subPageCache:Oi,showAddGroup:ji,addGroupForm:Vi,savingGroup:Fi,groupMembers:Hi,addMemberUsername:Bi,selectedMemberGroup:Ki,subPageSectionExpanded:Wi,toggleSubPageSection:Ui,getGroupMemberCount:Gi,getMenuEnabledCount:Yi,groupCount:Qi,openMemberManager:Ji,loadGroupMembers:$i,addMemberToGroup:Xi,removeMemberFromGroup:Zi,availableUsersForGroup:eo,onParentToggle:to,openMenuConfig:ao,saveMenuConfig:so,deleteGroupConfig:no,createGroup:lo,allGroups:io,getGroupName:oo,loadAllGroups:Ua,loadUsers:Ra,editUser:ro,saveUser:co,deleteUser:uo,toggleUserEnabled:vo,resetUserPassword:mo}=yi,fo=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:ua,currentPage:Ve,currentSubPage:g,dashboardData:Ee,searchKeyword:Zt,statusFilter:Fe,strategyFilter:Gt,strategyFilterCounts:Wt}):{},{applyStrategyFilter:Vp,statusCounts:po,stockPool:go,strategyDistribution:ho,strategyPreviewCount:yo,saveStrategyFilter:bo,filteredConsensusRank:wo,currentPoolSize:ko,filteredStrategyCounts:_o,poolChangeBadge:xo,timeBarPercent:So,lastRefreshTime:Ts,navigateToStrategyFilter:Co}=fo,qo=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:w,consensus:ua}):{},{aiResult:Ga,lastEvalTime:Eo,evalHistoryComparison:Mo,checklistItems:To,aiHistory:Ds,selectedHistoryIds:Ps,expandedDates:Rs,expandedMonths:Do,expandedStocks:zs,poolSignals:Po,toggleMonthExpand:Ro,aiHistoryView:zo,selectedWatchlistCodes:As,showAutoEvaluateSettings:Ls,savingConfig:Is,autoEvaluateScope:Ns,aiVendors:Ao,aiCatalog:Lo,aiModelsError:Io,testingAllModels:No,savingAiModels:Oo,loadAiVendors:za,loadAiCatalog:Os,saveAiVendors:js,saveAiModels:jo,testVendorModel:Vo,testAllVendorModels:Fo,fetchVendorModels:Ho,addVendorFromCatalog:Bo,addCustomVendor:Ko,addVendorModel:Wo,removeVendorModel:Uo,removeVendor:Go,toggleVendorKeyReveal:Yo,toggleVendorEdit:Qo,autoEvaluateConfig:Ya,aiLoading:Qa,aiEvalStage:Vs,aiEvalElapsed:Fs,aiEvalError:Hs,showBatchEvaluate:Ja,batchStocks:Bs,batchRunning:Ks,batchTotal:Ws,batchCompleted:Us,batchCurrent:Gs,batchStatuses:Ys,batchResults:Qs,batchEvalErrors:Js,aiConfig:$s,selectedPreset:Jo,providerInfo:$o,aiPresets:Fp,applyPreset:Xo,onProviderChange:Zo,fetchPoolSignals:er,cancelPoolSignals:Xs,loadLastEvaluation:$a}=qo,tr=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:Ye,selectedDate:jt,stockDetail:H,stockDetailTab:Xe,stockDetailVisible:ht,stockDetailLoading:fe,stockKlineLoaded:Qt,viewCache:Tn,animateScoreEntrance:Ka,loadStockKline:Sa,refreshStockScore:Ba,disposeStockKline:vs,aiHistory:Ds,aiLoading:Qa,aiEvalStage:Vs,aiEvalElapsed:Fs,aiEvalError:Hs,aiResult:Ga,loadLastEvaluation:$a,autoEvaluateConfig:Ya,autoEvaluateScope:Ns,batchStocks:Bs,batchRunning:Ks,batchTotal:Ws,batchCompleted:Us,batchCurrent:Gs,batchStatuses:Ys,batchResults:Qs,batchEvalErrors:Js,expandedDates:Rs,expandedStocks:zs,savingConfig:Is,selectedHistoryIds:Ps,selectedWatchlistCodes:As,showAutoEvaluateSettings:Ls,showBatchEvaluate:Ja}):{},{quickEvalStock:ar,evalStrategy:sr,watchlistSort:nr,watchlist:lr,watchlistCodes:ir,sortedWatchlist:or,getWatchlistScore:rr,getLatestScore:Hp,addSearchResult:cr,evaluatedCodes:dr,klineLoadedCodes:ur,markKlineLoaded:Zs,watchlistSearch:vr,watchlistResults:mr,watchlistSearching:fr,dataRefreshConfig:pr,dataRefreshReloading:gr,dataRefreshSaving:hr,aiHistoryLoading:yr,aiHistoryError:br,aiHistoryTotal:wr,aiHistoryLoadingMore:kr,hasMoreAiHistory:_r,loadMoreAiHistory:xr,watchlistLoading:Sr,doAiEvaluate:Cr,loadAiHistory:qa,deleteSingleHistory:qr,toggleSelectHistory:Er,clearSelection:Mr,clearWatchlistSelection:Tr,batchReevaluateHistory:Dr,batchAddToWatchlist:Pr,batchRemoveWatchlist:Rr,toggleSelectWatchlist:zr,selectAllHistory:Ar,selectAllWatchlist:Lr,deleteSelectedHistory:Ir,loadAutoEvaluateConfig:en,saveAutoEvaluateConfig:Nr,loadWatchlist:tn,addToWatchlist:Or,removeFromWatchlist:jr,clearWatchlist:Vr,toggleWatchlist:Fr,showStockKline:Hr,preloadingKline:Br,preloadWatchlistKline:an,watchlistEvaluate:Kr,batchEvaluateWatchlist:Wr,batchEvaluateSelected:Ur,searchStockForWatchlist:Gr,loadDataRefreshConfig:sn,saveDataRefreshConfig:Yr,triggerDataReload:Qr,triggerDataPull:Jr,dataPullRunning:$r,groupedByDate:Xr,aiHistoryByStock:Zr,groupedByMonth:ec,aiHistoryStockCount:tc,scoreDistribution:ac,quickEvaluate:sc,toggleDateExpand:nc,toggleSelectDate:lc,toggleSelectMonth:ic,toggleStockExpand:oc,toggleSelectStock:rc,registerTrendChart:cc,viewAiResult:dc,doBatchEvaluate:uc,realtimeQuotes:vc,realtimeDegraded:mc,realtimeWsState:fc,connectRealtimeQuotes:pc,disconnectRealtimeQuotes:gc,quoteWarningFor:hc,realtimeQuoteColor:yc,realtimePriceText:bc,realtimePctText:wc,realtimeRatioText:kc,REALTIME_DEGRADED_TEXT:_c,REALTIME_FALLBACK_TEXT:xc}=tr,Sc=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:Re}):{},{btStrategyOptions:Cc,btSelectedStrategies:qc,toggleBtStrategy:Ec,btDateRange:Mc,btCapital:Tc,btCommissionRate:Dc,btIncludeBenchmark:Pc,btRunning:Rc,btResult:zc,btError:Ac,btMetrics:Lc,btAnnualReturns:Ic,btTrades:Nc,btStrategyMetricsRows:Oc,btDrawdownRegion:jc,runBacktestWorkbench:Vc,exportBacktestCSV:Fc,registerBacktestNavChart:Hc,btFmtNum:Bc}=Sc,Kc=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:w,aiConfig:$s,aiLoading:Qa,feishuConfig:fs,currentTheme:Be,changeTheme:ca,autoEvaluateConfig:Ya,currentUser:Ye,strategyFilter:Gt,applyTheme:ta,dashboardData:Ee,lastRefreshTime:Ts,saveAiModels:jo}):{},{configSaving:Wc,globalConfigDirty:Uc,lastSavedTime:Gc,feishuConfigOriginal:Bp,aiConfigOriginal:Kp,tushareConfigOriginal:Wp,tushareConfig:Yc,tushareStatus:Qc,datasourceConfig:Jc,datasourceStatus:$c,syncingData:Xc,stockCount:Zc,tradeDateCount:ed,aiStatus:td,appVersion:nn,showImportDialog:ad,rateLimitConfig:sd,rateLimitDirty:nd,rateLimitSaving:ld,loadRateLimit:Xa,saveRateLimit:id,saveAiConfig:od,testAiApi:rd,exportConfig:cd,importConfig:dd,saveAllConfig:ud,resetAllConfig:vd,testTushareConnection:md,checkTushareConnection:Aa,syncStockData:fd,loadTushareConfig:ln,loadDatasourceConfig:on,saveDatasourceConfig:pd,testDatasource:gd,toggleDatasourceKeyReveal:hd,toggleDatasourceEdit:yd,loadFeishuConfig:Za,loadAiConfig:La,loadUserConfig:rn,loadSystemStatus:es,loadDashboardData:ts}=Kc,bd=window.__quantAppLogic.auth.create({currentUser:Ye,loadUserConfig:rn,loadDates:cs,loadDashboardData:ts,loadDashboardCached:Ta,loadHealthMetrics:ja,loadConsensusData:ba,applyTheme:ta,maybeShowTour:hl,loadAiVendors:za,loadGroupConfig:Ae,groupsConfig:ae}),{loginForm:cn,logining:dn,guestLogining:un,showChangePassword:wd,changePasswordForm:kd,changingPassword:_d,showSetupWizard:vn,setupForm:xd,setupStep:Sd,checkSetupWizard:Cd,completeSetupWizard:qd,resetSetupWizard:Ed,handleLogin:Md,handleGuestLogin:Td,handleLogout:Dd,doChangePassword:Pd}=bd;window.__quantAppLogic.watch.register({strategyFilter:Gt,currentView:Oe,statusFilter:Fe,currentPage:Ve,currentSubPage:g,menus:ze,currentUser:Ye,strategyFilterCounts:Wt,lazyTick:Q,dates:Ca,selectedDate:jt,consensus:ua,loadConsensusData:ba,fetchMerrillClock:L,fetchMarketData:Ha,loadWatchlist:tn,loadAiHistory:qa,preloadWatchlistKline:an,loadChatHistory:Ms,loadSystemStatus:es,checkTushareConnection:Aa,loadSysMonitor:hs,loadAnalytics:ys,loadHealthDetail:bs,loadHealthMetrics:ja,loadAiUsage:Wa,loadFactCheck:ws,loadAutoEvaluateConfig:en,loadDatasourceConfig:on,loadFeishuConfig:Za,loadAiConfig:La,loadAiVendors:za,loadRateLimit:Xa,loadDataRefreshConfig:sn,loadBackups:ks,loadAllGroups:Ua,loadUsers:Ra,stockDetailTab:Xe,stockDetailVisible:ht,stockKlineLoaded:Qt,loadStockKline:Sa,currentKlinePeriod:G,showMerrillDetail:q,indexDetailVisible:Va,restoreDialogFocus:T});const Rd=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:qs,applyTheme:ta,menus:ze,currentPage:Ve,currentSubPage:g,currentView:Oe,currentKlinePeriod:G,selectedDate:jt,dates:Ca,loadDates:cs,loadConsensusData:ba,loadDashboardCached:Ta,appVersion:nn,themes:Ce,fetchMarketData:Ha,fetchMerrillStages:J,fetchMerrillClock:L,loadMerrillTimeline:$,showTimelineStage:ie,merrillTimeline:me,timelineLoading:Te,loadAiConfig:La,loadAiVendors:za,loadAiCatalog:Os,currentUser:Ye,loadUserConfig:rn,loadAutoEvaluateConfig:en,loadGroupConfig:Ae,loadUsers:Ra,loadAllGroups:Ua,loadAiHistory:qa}),{runOnMounted:zd}=Rd;window.__quantGoPage=async(V,re)=>{try{const _e=window.__lazyLoaders&&window.__lazyLoaders[V];_e&&await _e()}catch(_e){console.warn("[lazy] 页面组件加载失败",V,_e)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(_e=>{_e&&_e.name&&!_e.__quantRegistered&&(window.__quantApp.component(_e.name,_e),_e.__quantRegistered=!0)}),Q&&Q.value++,Ve.value=V,re&&(g.value=re)};let wa;function mn(){const V=window.QuantSessionRestore;V&&V.save({page:Ve.value,sub:g.value||""})}c(Ve,async V=>{var re;n("light"),mn();try{const _e=ve.find(function(He){return He.key===V});document.title=(_e?_e.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",V),V!=="calendar"&&typeof Xs=="function"&&Xs();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:V})}).catch(()=>{})}catch(_e){console.warn("pageView track failed:",_e)}if(wa&&(clearInterval(wa),wa=null),V==="strategies")await Ta(),wa=setInterval(()=>{Ta().catch(()=>{})},5*60*1e3);else if(V==="calendar")jt.value&&await ba();else if(V==="ai")gs(),Wa(),await qa();else if(V==="system"){if(!jt.value){const He=await(await fetch("/api/dashboard")).json(),Je=He.data||He;Je.latest_date&&(jt.value=Je.latest_date)}if(jt.value){const _e=["day","week","month","year"];for(const He of _e)try{const Lt=await(await fetch(`/api/view/${He}/${jt.value}?status=all`)).json();Wt.value[He]=Lt.stocks||[]}catch(Je){console.warn("loadConsensusData view load failed:",Je)}(!ua.value||ua.value.length===0)&&(ua.value=Wt.value.day||[])}((re=Ye.value)==null?void 0:re.role)==="admin"&&(await Ra(),await Za(),await ln(),await es(),await La(),await Xa(),Aa(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(Aa,36e5)))}}),v(async()=>{await zd()}),ne(),$(),t(()=>{wa&&clearInterval(wa),window.removeEventListener("keydown",qs),window.removeEventListener("keydown",K)});function Ad(V,re=2){return V==null||V===""||isNaN(Number(V))?"--":Number(V).toFixed(re)}const fn={currentPage:Ve,pageComp:de,currentSubPage:g,sidebarCollapsed:xe,menus:ze,navMode:tt,setNavMode:at,tabGroups:rt,openTab:oa,closeTab:Ut,activateTab:ra,fmtNum:Ad,sanitizeHtml:C,keyClick:x,isOnline:u,currentUser:Ye,allMenuDefs:ve,t:M,locale:o,changeLanguage:k,currentPageName:O,subPageNames:Kt,searchQuery:Rl,searchStocks:zl,onSearchSelect:Al,selectedDate:jt,onDateChange:Dl,disabledDate:Tl,refreshCalendarData:ds,exportCSV:us,viewNote:Dn,loading:os,lastLoadTime:rs,resetSetupWizard:Ed,showChangePassword:wd,themes:Ce,currentTheme:Be,changeTheme:ca,changeThemeMode:gt,changeThemeHue:Nt,handleLogout:Dd,themeHues:Ie,themeHueNames:vt,themeHue:it,themeMode:_t,hueColor:kt,hueName:ma,density:Dt,changeDensity:Mt,marketData:Rn,merrillData:E,merrillTimeline:me,timelineLoading:Te,merrillStagesConfig:N,fetchMerrillStages:J,merrillSnapshots:Me,merrillSnapshotsTotal:ce,healthMetrics:Se,feishuConfig:fs,feishuTestStatus:Wn,feishuTestMessage:Un,shortcutHelpVisible:Ss,shortcutHelpItems:we,commandPaletteVisible:Cs,tourVisible:fl,tourStep:pl,tourSteps:gl,skipTour:yl,finishTour:bl,backups:ol,backupCreating:rl,loadBackups:ks,createBackup:cl,restoreBackup:dl,reportExporting:ul,reportExportMsg:vl,exportReport:ml,sysMonitor:Xn,analyticsRank:Zn,analyticsDays:el,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:tl,loadHealthDetail:bs,reviewTriggering:al,triggerMarketReview:sl,factCheck:nl,factCheckRunning:ll,loadFactCheck:ws,triggerFactCheck:il,strategyRecommendations:Jn,aiUsage:$n,loadStrategyRecommendations:gs,loadAiUsage:Wa,aiFabHidden:Qn,openAiFab:ps,feedbackText:wl,feedbackSubmitting:kl,submitFeedback:_l,backtestStrategies:Re,backtestStrategy:Ue,backtestRange:Ge,backtestCapital:Qe,backtestRunning:et,backtestResult:lt,runBacktest:Tt,btStrategyOptions:Cc,btSelectedStrategies:qc,toggleBtStrategy:Ec,btDateRange:Mc,btCapital:Tc,btCommissionRate:Dc,btIncludeBenchmark:Pc,btRunning:Rc,btResult:zc,btError:Ac,btMetrics:Lc,btAnnualReturns:Ic,btTrades:Nc,btStrategyMetricsRows:Oc,btDrawdownRegion:jc,runBacktestWorkbench:Vc,exportBacktestCSV:Fc,registerBacktestNavChart:Hc,btFmtNum:Bc,fetchMarketData:Ha,fetchMerrillClock:L,testFeishuWebhook:Gn,saveFeishuConfig:Yn,merrillClockConfig:R,merrillClockLastUpdated:B,merrillReevalResult:W,merrillReevalLoading:U,saveMerrillClockConfig:oe,doMerrillReevaluate:Pe,dataRefreshConfig:pr,dataRefreshReloading:gr,dataRefreshSaving:hr,loadDataRefreshConfig:sn,saveDataRefreshConfig:Yr,triggerDataReload:Qr,triggerDataPull:Jr,dataPullRunning:$r,indexDetailVisible:Va,indexDetail:Fa,indexAiResult:zn,indexAiLoading:An,loadCachedIndexEval:In,showIndexDetail:Ln,doIndexAiEvaluate:Nn,klinePeriods:Ma,currentKlinePeriod:G,klineLoading:ye,indexKlineLoading:Yt,stockKlineLoaded:Qt,indexKlineLoaded:Na,klineDegradeNote:Ze,klineShowMinutes:Ot,toggleKlineShowMinutes:da,loadStockKline:Sa,switchKlinePeriod:bn,loadIndexKline:Oa,switchIndexKlinePeriod:wn,zoomKlineRange:On,MA_LINES:yn,klineMaVisible:ya,toggleKlineMa:kn,scoreAnimating:jn,scoreDelta:Vn,scorePulse:Fn,refreshStockScore:Ba,animateScoreEntrance:Ka,showMerrillDetail:q,merrillDetailData:z,showStageDetail:X,getCharLabel:y,getAssetName:j,getRankColor:se,levelColor:jl,levelBg:Vl,timelineStages:s,getStageAngle:te,getCycleProgress:I,getCurrentStageMonths:_,getStageTotalMonths:m,isStageCompleted:P,stages:Y,indicatorList:Z,dimensionScoreList:F,confidenceColor:A,views:Ne,currentView:Oe,statusFilter:Fe,loginForm:cn,logining:dn,guestLogining:un,dashboardData:Ee,loadingView:Mn,dates:Ca,consensus:ua,searchKeyword:Zt,stockDetailVisible:ht,stockDetailTab:Xe,stockDetail:H,stockDetailLoading:fe,detailDisplayMode:$e,setDetailDisplayMode:Et,isNarrow:je,detailSplitEnabled:wt,splitWidth:ot,setSplitWidth:It,SPLIT_DEFAULT_PCT:At,aiLoading:Qa,aiEvalStage:Vs,aiEvalElapsed:Fs,aiEvalError:Hs,showBatchEvaluate:Ja,batchStocks:Bs,batchRunning:Ks,batchTotal:Ws,batchCompleted:Us,batchCurrent:Gs,batchStatuses:Ys,batchResults:Qs,batchEvalErrors:Js,aiConfig:$s,userList:bi,showAddUser:Di,editingUser:Pi,userForm:Ri,savingUser:zi,userSearch:wi,filteredUsers:Ci,groupFilter:ki,userPageTab:_i,expandedGroups:xi,addMemberGroupMap:Si,toggleGroupExpand:qi,removeMemberFromGroupInline:Ei,addMemberToGroupInline:Mi,changeUserGroup:Ti,statusCounts:po,stockPool:go,poolSignals:Po,aiResult:Ga,aiHistory:Ds,groupedByDate:Xr,groupedByMonth:ec,expandedDates:Rs,expandedMonths:Do,aiHistoryByStock:Zr,aiHistoryStockCount:tc,expandedStocks:zs,aiHistoryView:zo,aiHistoryLoading:yr,aiHistoryError:br,aiHistoryTotal:wr,aiHistoryLoadingMore:kr,hasMoreAiHistory:_r,loadMoreAiHistory:xr,watchlistLoading:Sr,scoreDistribution:ac,quickEvalStock:ar,evalStrategy:sr,checklistItems:To,evalHistoryComparison:Mo,quickEvaluate:sc,selectedHistoryIds:Ps,showAutoEvaluateSettings:Ls,savingConfig:Is,autoEvaluateConfig:Ya,autoEvaluateScope:Ns,strategyList:fa,toggleDateExpand:nc,toggleMonthExpand:Ro,toggleSelectDate:lc,toggleSelectMonth:ic,toggleSelectStock:rc,toggleStockExpand:oc,registerTrendChart:cc,selectedWatchlistCodes:As,clearWatchlistSelection:Tr,toggleSelectWatchlist:zr,selectAllHistory:Ar,selectAllWatchlist:Lr,batchRemoveWatchlist:Rr,batchEvaluateSelected:Ur,batchReevaluateHistory:Dr,batchAddToWatchlist:Pr,viewUnit:Sl,datePickerType:Cl,dateFormat:ql,canNavPrev:El,canNavNext:Ml,handleLogin:Md,handleGuestLogin:Td,switchView:_s,navigateDate:xs,navigateTo:ke,loadDashboardData:ts,loadConsensusData:ba,showStockDetail:Es,externalStockActive:Il,doAiEvaluate:Cr,doBatchEvaluate:uc,loadAiHistory:qa,loadLastEvaluation:$a,lastEvalTime:Eo,viewAiResult:dc,saveAiConfig:od,testAiApi:rd,exportConfig:cd,importConfig:dd,configSaving:Wc,configChanged:w,watchlist:lr,watchlistCodes:ir,watchlistSearch:vr,watchlistResults:mr,watchlistSearching:fr,watchlistSort:nr,sortedWatchlist:or,getWatchlistScore:rr,addSearchResult:cr,evaluatedCodes:dr,klineLoadedCodes:ur,markKlineLoaded:Zs,loadWatchlist:tn,addToWatchlist:Or,removeFromWatchlist:jr,clearWatchlist:Vr,searchStockForWatchlist:Gr,toggleWatchlist:Fr,batchEvaluateWatchlist:Wr,watchlistEvaluate:Kr,showStockKline:Hr,preloadWatchlistKline:an,preloadingKline:Br,realtimeQuotes:vc,realtimeDegraded:mc,realtimeWsState:fc,connectRealtimeQuotes:pc,disconnectRealtimeQuotes:gc,quoteWarningFor:hc,realtimeQuoteColor:yc,realtimePriceText:bc,realtimePctText:wc,realtimeRatioText:kc,REALTIME_DEGRADED_TEXT:_c,REALTIME_FALLBACK_TEXT:xc,toggleSelectHistory:Er,clearSelection:Mr,deleteSingleHistory:qr,deleteSelectedHistory:Ir,saveAutoEvaluateConfig:Nr,editUser:ro,saveUser:co,deleteUser:uo,loadUsers:Ra,allGroups:io,loadAllGroups:Ua,getGroupName:oo,toggleUserEnabled:vo,resetUserPassword:mo,selectedPreset:Jo,applyPreset:Xo,onProviderChange:Zo,providerInfo:$o,globalConfigDirty:Uc,lastSavedTime:Gc,tushareConfig:Yc,tushareStatus:Qc,syncingData:Xc,stockCount:Zc,tradeDateCount:ed,aiStatus:td,appVersion:nn,showImportDialog:ad,rateLimitConfig:sd,rateLimitDirty:nd,rateLimitSaving:ld,loadRateLimit:Xa,saveRateLimit:id,saveAllConfig:ud,resetAllConfig:vd,testTushareConnection:md,syncStockData:fd,loadTushareConfig:ln,loadFeishuConfig:Za,loadSystemStatus:es,loadAiConfig:La,aiVendors:Ao,aiCatalog:Lo,aiModelsError:Io,testingAllModels:No,savingAiModels:Oo,loadAiVendors:za,loadAiCatalog:Os,saveAiVendors:js,saveAiModels:js,testVendorModel:Vo,testAllVendorModels:Fo,fetchVendorModels:Ho,addVendorFromCatalog:Bo,addCustomVendor:Ko,addVendorModel:Wo,removeVendorModel:Uo,removeVendor:Go,toggleVendorKeyReveal:Yo,toggleVendorEdit:Qo,checkTushareConnection:Aa,datasourceConfig:Jc,datasourceStatus:$c,loadDatasourceConfig:on,saveDatasourceConfig:pd,testDatasource:gd,toggleDatasourceKeyReveal:hd,toggleDatasourceEdit:yd,strategyFilter:Gt,strategyFilterOptions:ea,strategyFilterCounts:Wt,strategyPreviewCount:yo,saveStrategyFilter:bo,filteredConsensusRank:wo,currentPoolSize:ko,filteredStrategyCounts:_o,strategyDistribution:ho,expandedStrategies:_a,poolChangeBadge:xo,timeBarPercent:So,navigateToStrategyFilter:Co,showUserMenu:ue,toggleSidebar:le,groupsConfig:ae,loadGroupConfig:Ae,editingGroup:Ai,groupEditForm:Ni,showAddGroup:ji,addGroupForm:Vi,savingGroup:Fi,menuConfigDialog:Li,memberDialog:Ii,groupMembers:Hi,addMemberUsername:Bi,selectedMemberGroup:Ki,subPageSectionExpanded:Wi,toggleSubPageSection:Ui,getGroupMemberCount:Gi,getMenuEnabledCount:Yi,groupCount:Qi,openMemberManager:Ji,loadGroupMembers:$i,addMemberToGroup:Xi,removeMemberFromGroup:Zi,availableUsersForGroup:eo,subPageCache:Oi,onParentToggle:to,openMenuConfig:ao,saveMenuConfig:so,deleteGroupConfig:no,createGroup:lo,changePasswordForm:kd,changingPassword:_d,doChangePassword:Pd,showSetupWizard:vn,setupForm:xd,setupStep:Sd,checkSetupWizard:Cd,completeSetupWizard:qd,chatSessions:Hl,chatHistoryView:Bl,selectedChatIds:Kl,expandedChatDates:Wl,expandedChatMonths:Ul,expandedChatStocks:Gl,chatHistoryLoading:Yl,chatHistoryError:Ql,allChatSessionsFlat:Jl,chatGroupedByDate:$l,chatGroupedByMonth:Xl,chatGroupedByStock:Zl,toggleSelectChat:ei,toggleSelectChatDate:ti,toggleSelectChatMonth:ai,toggleSelectChatStock:si,toggleChatDateExpand:ni,toggleChatMonthExpand:li,toggleChatStockExpand:ii,selectAllChatSessions:oi,deleteSelectedChatSessions:ri,viewChatSession:ci,loadChatHistory:Ms,deleteChatSession:di,renderMarkdown:ui,stockChatInput:vi,stockChatMessages:mi,stockChatLoading:fi,stockChatError:pi,askStockSend:gi,askStockQuick:hi,onTouchStart:Hn,onTouchEnd:Bn,hapticFeedback:n};let st=null;return window.QuantStateRegistry&&window.QuantStateRegistry.createStateRegistry&&(st=window.QuantStateRegistry.createStateRegistry(),st.defineDomain("theme",["currentTheme","themeMode","themeHue","density","currentKlinePeriod"]),st.defineDomain("auth",["currentUser","loginForm","logining","guestLogining","showSetupWizard"]),st.defineDomain("prefs",["navMode","detailDisplayMode","splitWidth","sidebarCollapsed","klineShowMinutes"]),st.defineDomain("ui",["currentPage","currentSubPage","currentView","showUserMenu","searchKeyword","shortcutHelpVisible","commandPaletteVisible"]),st.defineDomain("page",["loading","dates","selectedDate","consensus","dashboardData","lastLoadTime"]),st.attach("theme","currentTheme",Be),st.attach("theme","themeMode",_t),st.attach("theme","themeHue",it),st.attach("theme","density",Dt),st.attach("theme","currentKlinePeriod",G),st.attach("auth","currentUser",Ye),st.attach("auth","loginForm",cn),st.attach("auth","logining",dn),st.attach("auth","guestLogining",un),st.attach("auth","showSetupWizard",vn),st.attach("prefs","navMode",tt),st.attach("prefs","detailDisplayMode",$e),st.attach("prefs","splitWidth",ot),st.attach("prefs","sidebarCollapsed",xe),st.attach("prefs","klineShowMinutes",Ot),st.attach("ui","currentPage",Ve),st.attach("ui","currentSubPage",g),st.attach("ui","currentView",Oe),st.attach("ui","showUserMenu",ue),st.attach("ui","searchKeyword",Zt),st.attach("ui","shortcutHelpVisible",Ss),st.attach("ui","commandPaletteVisible",Cs),st.attach("page","loading",os),st.attach("page","dates",Ca),st.attach("page","selectedDate",jt),st.attach("page","consensus",ua),st.attach("page","dashboardData",Ee),st.attach("page","lastLoadTime",rs),fn.stateRegistry=st),fn}})();ga.name="qc-icon";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=vm;window.__quantComponents.Header=mf;window.__quantComponents.SubNav=qf;window.__quantComponents.MobileNav=Wf;window.__quantComponents.StockList=Cp;window.__quantComponents.DetailSplit=Tp;window.__quantComponents.TopTabs=Op;window.__quantComponents.AppIcon=ga;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default jp();
