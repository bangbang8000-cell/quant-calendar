var Dd=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports);import{aV as Pd,L as ve,O as pa,Z as Rd,au as Zt,M as we,P as qe,aW as zd,a0 as Be,_ as Ke,F as ut,al as Et,S as dt,a1 as vt,X as ma,ai as Vt,q as Da,o as Ka,a8 as rs,r as Lt,e as ot,av as Ad,Y as La,$ as xa,R as Ld,aC as va,T as Id,Q as ca,p as Nd,n as Od}from"./vendor-vue-DDF9zi1T.js";import{e as jd,E as Vd,a as Fd,b as Hd,c as Bd,z as Kd}from"./vendor-ep-VOop1zGa.js";import{C as Wd,a as Ud,W as Gd,I as Yd,S as Jd,B as Qd,F as $d,b as Xd,c as Zd,d as eu,e as tu,f as au,P as su,g as nu,h as iu,i as lu,T as ou,j as ru,L as cu,k as du,G as uu,U as vu,l as mu,m as pu,n as fu,D as gu,o as hu,p as yu,M as bu,q as wu,R as ku,r as _u,s as xu,K as Su,t as Cu,u as qu,v as Eu,w as Mu,x as Tu,y as Du,z as Pu,A as Ru,E as zu,H as Au,O as Lu,J as Iu,N as Nu,Q as Ou,V as ju,X as Vu,Y as Fu,Z as Hu,_ as Bu,$ as Ku,a0 as Wu,a1 as Uu,a2 as Gu,a3 as Yu,a4 as Ju,a5 as Qu,a6 as $u,a7 as Xu,a8 as Zu,a9 as ev,aa as tv,ab as av,ac as sv,ad as nv,ae as iv,af as lv,ag as ov,ah as rv,ai as cv,aj as dv,ak as uv,al as vv,am as mv,an as pv,ao as fv,ap as gv,aq as hv,ar as yv,as as bv,at as wv,au as kv,av as _v,aw as xv,ax as Sv,ay as Cv,az as qv,aA as Ev,aB as Mv,aC as Tv,aD as Dv,aE as Pv,aF as Rv,aG as zv,aH as Av,aI as Lv,aJ as Iv,aK as Nv,aL as Ov,aM as jv,aN as Vv,aO as Fv,aP as Hv,aQ as Bv}from"./vendor-lucide-DidEUx9K.js";var Rf=Dd((Kf,je)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))e(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const I of f.addedNodes)I.tagName==="LINK"&&I.rel==="modulepreload"&&e(I)}).observe(document,{childList:!0,subtree:!0});function g(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function e(u){if(u.ep)return;u.ep=!0;const f=g(u);fetch(u.href,f)}})();window.Vue=Pd;const fa=jd||{};window.ElementPlus=fa;fa.ElMessage=fa.ElMessage||Vd;fa.ElMessageBox=fa.ElMessageBox||Fd;fa.ElNotification=fa.ElNotification||Hd;fa.ElLoading=fa.ElLoading||Bd;window.ElementPlusLocaleZhCn={default:Kd};(function(){const a=[45,220,0,140,270,320],t={"tech-blue":["light",220],"rose-red":["light",0],"vibrant-orange":["light",45],"classic-white":["light",220],"classic-red":["light",0],"classic-gold":["light",45],"dark-pro":["dark",165],gold:["light",45]},g={"tech-blue":{name:"科技蓝",color:"#1d4ed8"},"rose-red":{name:"玫瑰红",color:"#E63946"},"vibrant-orange":{name:"活力金",color:"#D4A843"},"classic-white":{name:"经典白",color:"#2563eb"},"classic-red":{name:"经典红",color:"#dc2626"},"classic-gold":{name:"经典金",color:"#b8922a"},"dark-pro":{name:"暗色专业",color:"#64ffda"},gold:{name:"金色",color:"#b8922a"}};function e(s,J,o){return"hsl("+s+", "+J+"%, "+o+"%)"}function u(s,J,o){J=J/100,o=o/100;const y=function(ee){return(ee+s/30)%12},L=J*Math.min(o,1-o),z=function(ee){return o-L*Math.max(-1,Math.min(y(ee)-3,Math.min(9-y(ee),1)))};return Math.round(255*z(0))+", "+Math.round(255*z(8))+", "+Math.round(255*z(4))}const f=5;function I(s,J,o){return u(s,J,o).split(",").map(function(y){return parseInt(y,10)})}function h(s){const J=function(o){return o=o/255,o<=.04045?o/12.92:Math.pow((o+.055)/1.055,2.4)};return .2126*J(s[0])+.7152*J(s[1])+.0722*J(s[2])}function d(s,J){const o=h(s),y=h(J),L=Math.max(o,y),z=Math.min(o,y);return(L+.05)/(z+.05)}function k(s,J,o){for(var y=8,L=92,z=0;z<26;z++){var ee=(y+L)/2;h(I(s,J,ee))<o?y=ee:L=ee}return Math.round(L*10)/10}function l(s,J,o,y,L){let z=38,ee=76;for(let Y=0;Y<24;Y++){const $=(z+ee)/2;d(I(s,y,$),I(s,J,o))>=L?ee=$:z=$}return Math.round(ee*10)/10}function C(s,J){var o={};return J==="light"?(o["--qc-neutral-50"]=e(s,18,98),o["--qc-neutral-100"]=e(s,16,95),o["--qc-neutral-200"]=e(s,14,90),o["--qc-neutral-300"]=e(s,12,83),o["--qc-neutral-400"]=e(s,10,68),o["--qc-neutral-500"]=e(s,10,53),o["--qc-neutral-600"]=e(s,10,40),o["--qc-neutral-700"]=e(s,10,30),o["--qc-neutral-800"]=e(s,10,20),o["--qc-neutral-900"]=e(s,10,12),o["--qc-background"]=e(s,18,98),o["--qc-muted"]=e(s,16,95),o["--qc-border"]=e(s,12,72),o["--qc-input"]=e(s,12,72),o["--chart-axis"]=e(s,12,55),o["--chart-split"]=e(s,10,88),o["--qc-foreground"]=e(s,10,12),o["--qc-muted-foreground"]=e(s,9,38),o["--qc-nav-item-default"]=e(s,9,38),o["--qc-nav-item-hover"]=e(s,10,12),o["--qc-nav-group-label"]=e(s,9,40),o["--qc-nav-bg"]="#ffffff",o["--bg-page"]=e(s,20,97),o["--bg-stripe"]=e(s,20,97),o["--bg-card-header"]=e(s,24,96),o["--card-gradient-header"]="linear-gradient(135deg, "+e(s,24,96)+" 0%, #ffffff 100%)",o["--bg-dialog-header"]="linear-gradient(135deg, "+e(s,24,96)+" 0%, #ffffff 100%)",o["--bg-hover"]=e(s,26,94),o["--bg-tertiary"]=e(s,14,93),o["--badge-gold-bg"]=e(s,26,96),o["--gold-bg"]=e(s,20,97),o["--border-light"]=e(s,22,89),o["--border-base"]=e(s,24,79),o["--border-color"]=e(s,14,88),o["--text-primary"]=e(s,12,12),o["--text-secondary"]=e(s,12,32),o["--text-tertiary"]=e(s,14,40),o["--text-disabled"]=e(s,9,58),o["--qc-card"]="#ffffff",o["--qc-popover"]="#ffffff",o["--qc-card-foreground"]=e(s,10,12),o["--qc-popover-foreground"]=e(s,10,12),o["--qc-nav-border"]=e(s,12,72),o["--qc-nav-item-hover-bg"]=e(s,16,95),o["--qc-overlay"]="rgba(31, 29, 26, 0.5)",o["--bg-card"]="#ffffff",o["--bg-sidebar"]="#ffffff",o["--surface"]="#ffffff",o["--border-heavy"]=e(s,22,72),o["--surface-canvas"]=e(s,18,98),o["--surface-card"]="#ffffff",o["--surface-raised"]="#ffffff",o["--surface-sunken"]=e(s,16,96),o["--surface-input"]="#ffffff",o["--surface-hover"]=e(s,26,94),o["--border-strong"]=e(s,22,72),o["--scrollbar-thumb"]="rgba("+u(s,12,72)+", 0.5)",o["--bg-page-rgb"]=u(s,20,97)):(o["--qc-background"]=e(s,10,8),o["--qc-card"]=e(s,11,11),o["--qc-popover"]=e(s,11,11),o["--qc-muted"]=e(s,12,14),o["--qc-border"]=e(s,14,30),o["--qc-input"]=e(s,14,30),o["--chart-axis"]=e(s,16,52),o["--chart-split"]=e(s,14,26),o["--qc-nav-bg"]=e(s,10,9),o["--qc-nav-border"]=e(s,13,22),o["--qc-nav-item-hover-bg"]=e(s,12,14),o["--bg-page"]=e(s,10,8),o["--bg-card"]=e(s,11,11),o["--bg-card-header"]=e(s,12,14),o["--bg-stripe"]=e(s,10,9),o["--bg-hover"]=e(s,12,14),o["--bg-tertiary"]=e(s,12,14),o["--bg-sidebar"]=e(s,10,8),o["--border-light"]=e(s,13,18),o["--border-base"]=e(s,14,26),o["--border-heavy"]=e(s,16,38),o["--border-color"]=e(s,13,22),o["--surface"]=e(s,11,11),o["--surface-canvas"]=e(s,10,8),o["--surface-card"]=e(s,11,11),o["--surface-raised"]=e(s,12,14),o["--surface-sunken"]=e(s,12,9),o["--surface-input"]=e(s,12,9),o["--surface-hover"]=e(s,12,15),o["--border-strong"]=e(s,16,42),o["--scrollbar-thumb"]="rgba("+u(s,16,52)+", 0.5)",o["--bg-page-rgb"]=u(s,10,8),o["--qc-overlay"]="rgba(0, 0, 0, 0.6)"),o}const x=4.6;var D=[255,255,255],S=[11,18,32];function P(s,J,o,y,L,z,ee){for(var Y=ee||x,$=y,R=L,j=0;j<24;j++){var A=($+R)/2,w=d(I(s,J,A),o)>=Y;z?w?$=A:R=A:w?R=A:$=A}return Math.round((z?$:R)*10)/10}function F(s){const J=k(s,75,.18),o=k(s,75,.26),y=k(s,70,.36),L=k(s,85,.12),z=u(s,75,J),ee=P(s,68,D,14,62,!0),Y=Math.max(12,ee-5),$=Math.max(10,ee-11),R=u(s,16,95).split(",").map(function(oe){return parseInt(oe,10)}),j=u(s,85,92).split(",").map(function(oe){return parseInt(oe,10)}),A=P(s,78,R,10,58,!0,4.6),w=P(s,80,j,10,58,!0,4.6),E=Math.min(32,P(s,80,D,8,60,!0,4.6));return{...C(s,"light"),"--primary-color":e(s,75,J),"--primary-rgb":z,"--color-primary":e(s,75,J),"--qc-primary":e(s,75,J),"--qc-primary-50":e(s,90,96),"--qc-primary-100":e(s,85,92),"--qc-primary-200":e(s,80,84),"--qc-primary-300":e(s,75,72),"--qc-primary-400":e(s,70,y),"--qc-primary-500":e(s,75,o),"--qc-primary-600":e(s,80,J),"--qc-primary-700":e(s,85,L),"--qc-primary-800":e(s,88,28),"--qc-primary-900":e(s,90,20),"--qc-primary-foreground":"#ffffff","--text-link":e(s,70,40),"--secondary-color":e(s,70,55),"--card-border":e(s,22,80),"--bg-selected":"rgba("+z+", 0.08)","--btn-primary-bg":e(s,80,E),"--btn-primary-border":e(s,80,E),"--btn-primary-color":"#ffffff","--btn-primary-hover-bg":e(s,82,28),"--btn-primary-hover-border":e(s,82,28),"--btn-primary-active-bg":e(s,85,24),"--btn-primary-active-border":e(s,85,24),"--btn-primary-plain-bg":"rgba("+z+", 0.08)","--btn-primary-plain-border":"rgba("+z+", 0.25)","--btn-primary-plain-color":e(s,80,A),"--btn-primary-plain-hover-bg":"rgba("+z+", 0.15)","--btn-primary-plain-hover-border":e(s,80,32),"--btn-primary-text-color":e(s,80,A),"--gradient":"linear-gradient(135deg, "+e(s,80,$)+" 0%, "+e(s,76,Y)+" 50%, "+e(s,70,ee)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+e(s,76,Y)+" 0%, "+e(s,85,$)+" 100%)","--primary-text":e(s,78,A),"--primary-solid":"var(--btn-primary-bg)","--primary-on-solid":"var(--btn-primary-color)","--gradient-panel":"linear-gradient(135deg, "+e(s,62,Math.min(74,l(s,45,14,58,f)+5))+" 0%, "+e(s,58,l(s,45,14,58,f))+" 100%)","--panel-fg":e(s,45,14),"--qc-nav-item-active":e(s,80,w),"--qc-nav-item-active-bg":e(s,85,92),"--qc-nav-item-active-border":e(s,75,48),"--qc-nav-badge-bg":e(s,85,92),"--qc-nav-badge-text":e(s,80,35),"--qc-ring":e(s,70,58)}}function q(s){const J=k(s,85,.34),o=k(s,85,.46),y=u(s,85,J),L=P(s,80,S,30,92,!1),z=Math.min(94,L+8),ee=Math.min(96,L+16),Y=[22,35,59],$=P(s,85,Y,45,96,!1,4.6),R=P(s,85,Y,45,96,!1,4.6);return{...C(s,"dark"),"--primary-color":e(s,85,J),"--primary-rgb":y,"--color-primary":e(s,85,J),"--qc-primary":e(s,90,J),"--qc-primary-50":e(s,50,18),"--qc-primary-100":e(s,55,22),"--qc-primary-200":e(s,55,26),"--qc-primary-300":e(s,60,30),"--qc-primary-400":e(s,65,38),"--qc-primary-500":e(s,85,o),"--qc-primary-600":e(s,90,J),"--qc-primary-700":e(s,92,72),"--qc-primary-800":e(s,90,80),"--qc-primary-900":e(s,92,88),"--qc-primary-foreground":"#101014","--text-link":e(s,85,65),"--secondary-color":e(s,70,60),"--card-border":e(s,30,25),"--bg-selected":"rgba("+y+", 0.10)","--btn-primary-bg":e(s,85,65),"--btn-primary-border":e(s,85,65),"--btn-primary-color":"#101014","--btn-primary-hover-bg":e(s,80,72),"--btn-primary-hover-border":e(s,80,72),"--btn-primary-active-bg":e(s,75,80),"--btn-primary-active-border":e(s,75,80),"--btn-primary-plain-bg":"rgba("+y+", 0.08)","--btn-primary-plain-border":"rgba("+y+", 0.25)","--btn-primary-plain-color":e(s,85,65),"--btn-primary-plain-hover-bg":"rgba("+y+", 0.15)","--btn-primary-plain-hover-border":e(s,85,65),"--btn-primary-text-color":e(s,85,65),"--gradient":"linear-gradient(135deg, "+e(s,80,L)+" 0%, "+e(s,85,z)+" 50%, "+e(s,85,ee)+" 100%)","--gradient-brand":"linear-gradient(135deg, "+e(s,85,ee)+" 0%, "+e(s,80,L)+" 100%)","--primary-text":e(s,85,R),"--primary-solid":"var(--btn-primary-bg)","--primary-on-solid":"var(--btn-primary-color)","--gradient-panel":"linear-gradient(135deg, "+e(s,60,Math.min(76,l(s,40,12,55,f)+5))+" 0%, "+e(s,55,l(s,40,12,55,f))+" 100%)","--panel-fg":e(s,40,12),"--qc-nav-item-active":e(s,85,$),"--qc-nav-item-active-bg":"rgba("+y+", 0.10)","--qc-nav-item-active-border":e(s,85,65),"--qc-nav-badge-bg":"rgba("+y+", 0.12)","--qc-nav-badge-text":e(s,85,65),"--qc-ring":e(s,85,65)}}var r=[];function i(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}function m(s){return s=parseInt(s,10),isNaN(s)?45:Math.max(0,Math.min(359,s))}function H(s,J){let o=s||"light",y=J==null||J===""?null:J;if(t[s]){const R=t[s];o=R[0],y==null&&(y=R[1])}o==="system"&&(o=i()?"dark":"light");const L=o==="dark";y=m(y??45);const z=document.documentElement;z.setAttribute("data-theme",L?"dark-pro":"gold"),z.setAttribute("data-theme-mode",L?"dark":"light");const ee=L?q(y):F(y);for(var Y=Object.keys(ee),$=0;$<r.length;$++)Y.indexOf(r[$])===-1&&z.style.removeProperty(r[$]);Y.forEach(function(R){z.style.setProperty(R,ee[R])}),r=Y;try{localStorage.setItem("quant_theme_mode",L?"dark":"light"),localStorage.setItem("quant_theme_hue",String(y))}catch{}return{mode:L?"dark":"light",hue:y}}function O(){const s=localStorage.getItem("quant_theme");if(!s||!t[s]||localStorage.getItem("quant_theme_hue")!==null)return null;const J=t[s];return{mode:J[0],hue:J[1]}}function K(){const s=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};let J=s.theme||"system",o=s.theme_hue!=null&&s.theme_hue!==""?s.theme_hue:null;const y=O();return o==null&&y&&(J=y.mode,o=y.hue),o==null&&(o=45),H(J,o)}window.__quantModules||(window.__quantModules={}),window.__quantModules.themes={HUES:a,LEGACY_MAP:t,legacyThemes:g,generateLightTokens:F,generateDarkTokens:q,migrateLegacyTheme:O,applyTheme:H,init:K},K()})();(function(a,t){typeof je=="object"&&je.exports?je.exports=t():a.QuantI18n=t()})(typeof self<"u"?self:void 0,function(){const a="zh-CN",t=["zh-CN","en","ja","ko","zh-TW"],g={};let e=a,u=null;function f(){return u&&typeof u=="object"&&"value"in u?u.value||a:e}function I(x,D){return t.indexOf(x)===-1?!1:(g[x]=D&&typeof D=="object"?D:{},!0)}function h(x){const D=t.indexOf(x)!==-1?x:a;return e=D,u&&typeof u=="object"&&"value"in u&&(u.value=D),typeof document<"u"&&document.documentElement.setAttribute("lang",D),e}function d(){return f()}function k(x){if(x&&typeof x=="object"&&"value"in x){u=x;const D=t.indexOf(x.value)!==-1?x.value:a;x.value=D,e=D}return e}function l(x,D){const S=f(),P=g[S]||{};let F=x in P?P[x]:null;if(F==null&&S!=="en"){const q=g.en||{};F=x in q?q[x]:null}return F==null&&(F=String(x)),D&&typeof D=="object"&&Object.keys(D).forEach(function(q){F=F.replace(new RegExp("\\{"+q+"\\}","g"),String(D[q]))}),F}const C={DEFAULT_LOCALE:a,SUPPORTED_LOCALES:t,messages:g,registerLocale:I,setLocale:h,getLocale:d,bindLocale:k,t:l};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.i18n=C),C});(function(a,t){typeof je=="object"&&je.exports?je.exports=t():a.QuantZhCN=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略总览","nav.calendar":"量化日历","nav.ai":"智能评估","nav.research":"策略研究","nav.ops":"系统状态","nav.system":"系统配置","nav.shortterm":"短线复盘","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"评估概览","sub.research.research-overview":"研究概览","sub.execution":"执行看板","sub.merrill":"美林时钟","sub.market":"大盘行情","sub.consensus":"策略共识榜","sub.daily":"日视图","sub.weekly":"周视图","sub.monthly":"月视图","sub.yearly":"年视图","sub.pool":"股票池","sub.calendar":"量化日历","sub.watchlist":"我的自选","sub.history":"评估历史","sub.evaluation-analysis":"评估分析","sub.focus":"重点跟踪","sub.datadict":"数据字典","sub.notification":"通知中心","sub.chat_history":"问股历史","sub.portfolio":"组合持仓","sub.research-overview":"研究概览","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回测","sub.backtest-history":"回测记录","sub.market-review":"每日复盘","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"涨停复盘","sub.lhb":"龙虎榜","sub.shortterm.overview":"复盘看板","sub.shortterm.sector":"板块资金","sub.sector":"板块资金","sub.shortterm.intraday":"盘中核验","sub.intraday":"盘中核验","sub.status":"系统状态","sub.autoeval":"AI 服务","sub.datasource":"数据源","sub.feature":"基础配置","sub.user":"用户与权限","sub.usage":"用量统计","sub.about":"关于","navMode.subnav":"中栏二级","navMode.tree":"侧栏树状","navMode.toptab":"顶部二级标签（默认）","view.day":"日视图","view.week":"周视图","view.month":"月视图","view.year":"年视图","login.title":"量化日历","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平台","login.desc":"策略共识 · AI 评估 · 每日量化日历，一键掌握","login.username":"用户名","login.password":"密码","login.submit":"登 录","login.guest":"访客登录","login.footer":"量化选股 · 智能决策 · 让数据说话","common.loading":"加载中...","common.dataUnavailable":"数据不可达","common.confirm":"确认","common.cancel":"取消","common.save":"保存","common.close":"关闭","common.search":"搜索","common.empty":"暂无数据","common.retry":"重试","common.emptyTitle":"暂无数据","common.emptyDesc":"当前没有可展示的内容","common.errorTitle":"加载失败","common.errorDesc":"发生错误，请重试或稍后再试","common.refresh":"刷新","common.refreshing":"正在刷新数据...","common.export":"导出","common.searchPlaceholder":"搜索股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共识度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票数","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加载最新持仓数据","calendar.exportCsv":"导出为CSV","calendar.strategyCompare":"策略对比","calendar.allIntersection":"全量交集","calendar.noCommon":"无共同持仓","calendar.pair":"策略对","calendar.intersection":"交集数","calendar.intersectionCodes":"交集代码","calendar.onlyFirst":"仅前者","calendar.onlyFirstCodes":"仅前者代码","calendar.onlySecond":"仅后者","calendar.onlySecondCodes":"仅后者代码","calendar.noCompareData":"暂无对比数据","calendar.selectDate":"选择日期","calendar.selectWeek":"选择周","calendar.selectMonth":"选择月份","calendar.selectYear":"选择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI评估","calendar.klineLoaded":"已加载K线","calendar.expand":"展开","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加载股票详情...","detail.loadingHint":"行情数据拉取中，请稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K线图表","detail.tabEval":"评估结果","detail.tabChat":"AI 问股","detail.tabFactor":"多因子体检","detail.tabPerformance":"业绩","detail.perfForecast":"业绩预告","detail.perfExpress":"业绩快报","detail.perfAnnDate":"公告日","detail.perfEndDate":"报告期","detail.perfType":"类型","detail.perfChange":"净利变动","detail.perfNetProfit":"净利润(万)","detail.perfRevenue":"营收","detail.perfIncome":"净利润","detail.perfEmpty":"暂无业绩数据","detail.evaluate":"智能评估","detail.reevaluate":"重新评估","detail.addWatch":"加入自选","detail.inWatch":"已自选","detail.retry":"重试","detail.factorTitle":"多因子体检","detail.factorLoading":"正在加载体检数据…","detail.factorEmpty":"暂无可用因子数据，请稍后重试","detail.factorNoData":"无数据","detail.factorCount":"共 {count} 项因子","detail.factorPercentile":"历史分位 {pct}%","detail.evalTitle":"AI 智能评估","detail.copyReport":"复制报告","detail.cachedResult":"缓存结果","detail.noEvalYet":"点击 AI 评估按钮获取分析结果","detail.scoreUnit":"分","detail.ruleScore":"选股评分","detail.notEvaluated":"未评估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加载K线","detail.loadingKline":"加载K线数据中...","detail.clickToLoadKline":"点击加载K线查看","detail.maLabel":"均线","detail.crosshairHint":"十字线读价：悬停或点击图表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记录","detail.holdDays":"{days} 天","detail.close":"收盘价","detail.pctChg":"涨跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情与均线","detail.sectionKline":"K线图与均线","ai.title":"智能评估","ai.subtitle":"多模型串行评估，技术指标自动注入","ai.manageWatchlist":"管理自选股","ai.batchEval":"批量评估","ai.batchEvalInput":"批量评估（输入代码）","ai.autoEval":"自动评估","ai.totalEval":"总评估数","ai.coveredStocks":"覆盖股票","ai.watchlist":"自选股","ai.portfolio":"组合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近评估","ai.viewAll":"查看全部 →","ai.scoreDist":"评分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速评估","ai.noWatchlist":"还没有自选股","ai.goAddWatchlist":"去添加自选 →","ai.chooseFromWatchlist":"从自选中选择股票快速评估：","ai.strategyLabel":"策略:","ai.evalHitRate":"评估命中率","ai.insufficientSamples":"暂无足够评估样本","ai.hitRateLoading":"正在计算命中率统计中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分评级","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"评估历史记录","ai.noEvalRecord":"暂无评估记录","ai.evalHint":"点击股票详情页的「智能评估」按钮开始分析股票","ai.myWatchlist":"我的自选","ai.portfolioSummary":"组合汇总","ai.portfolioCurve":"组合收益曲线","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"数据概览","strategies.tradingDays":"交易日总数","strategies.coveredStocks":"覆盖股票数","strategies.strategyCount":"选股策略数","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共识度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日变动","strategies.weekChanges":"本周累计","strategies.monthChanges":"本月累计","strategies.merrillLabel":"美林时钟","strategies.marketSentiment":"市场情绪","strategies.poolChanges":"池变动","strategies.todayFocus":"今日重点","strategies.noAlert":"无预警 · 一切正常","strategies.health":"数据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次数","strategies.noSourceCall":"今日暂无数据源调用记录","strategies.computing":"计算中...","research.marketReview":"市场复盘","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回测","research.backtestHistory":"回测记录","system.title":"系统状态","system.resourceMonitor":"资源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"导出配置","system.importConfig":"导入配置","system.language":"语言","system.languageDesc":"界面语言，切换后立即生效并自动保存","system.stockData":"股票数据","system.strategyData":"选股策略","system.aiService":"AI服务","system.feishuPush":"飞书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日历","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"内存","system.disk":"磁盘","system.uptime":"运行时长","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日执行计划","exec.statusTitle":"实时进展","exec.resultTitle":"执行结果","exec.traceTitle":"执行追溯","exec.strategy":"策略","exec.schedule":"调度","exec.countdown":"距下次运行","exec.lastRun":"上次运行","exec.waiting":"等待调度","exec.running":"运行中","exec.done":"已完成","exec.failed":"失败","exec.visible":"日视图已可见","exec.invisible":"日视图未可见","exec.holdings":"持仓","exec.union":"池内并集","exec.dayTotal":"日视图股票数","exec.date":"日期","exec.phase":"阶段","exec.duration":"耗时"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-CN",a),a});(function(a,t){typeof je=="object"&&je.exports?je.exports=t():a.QuantEn=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"Strategy Overview","nav.calendar":"Quant Calendar","nav.ai":"AI Evaluation","nav.research":"Strategy Research","nav.ops":"System Status","nav.system":"System Settings","nav.shortterm":"Short-term Review","sub.overview":"Overview","sub.strategies.overview":"Strategy Overview","sub.ai.overview":"Eval Overview","sub.research.research-overview":"Research Overview","sub.execution":"Execution Dashboard","sub.merrill":"Merrill Clock","sub.market":"Index Market","sub.consensus":"Consensus Ranking","sub.daily":"Daily","sub.weekly":"Weekly","sub.monthly":"Monthly","sub.yearly":"Yearly","sub.pool":"Stock Pool","sub.calendar":"Calendar","sub.watchlist":"My Watchlist","sub.history":"Eval History","sub.evaluation-analysis":"Evaluation Analysis","sub.focus":"Focus Tracking","sub.datadict":"Data Dictionary","sub.notification":"Notification Center","sub.chat_history":"Chat History","sub.portfolio":"Portfolio","sub.research-overview":"Research Overview","sub.quant-research":"Quant Research","sub.strategy-write":"Strategy Builder","sub.backtest":"Backtest","sub.backtest-history":"Backtest History","sub.market-review":"Daily Review","sub.custom-write":"New Strategy","sub.strategy-manage":"Strategy Manager","sub.ztpool":"Limit-up Review","sub.lhb":"Dragon-Tiger List","sub.shortterm.overview":"Review Dashboard","sub.shortterm.sector":"Sector Flow","sub.sector":"Sector Flow","sub.shortterm.intraday":"Intraday Check","sub.intraday":"Intraday Check","sub.status":"System Status","sub.autoeval":"AI Services","sub.datasource":"Data Source","sub.feature":"Basic","sub.user":"Users & Permissions","sub.usage":"Usage Stats","sub.about":"About","navMode.subnav":"Sidebar + sub-nav column","navMode.tree":"Tree in sidebar","navMode.toptab":"Top secondary tabs (default)","view.day":"Daily","view.week":"Weekly","view.month":"Monthly","view.year":"Yearly","login.title":"Quant Calendar","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"Username","login.password":"Password","login.submit":"Log In","login.guest":"Guest Login","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"Data unavailable","common.confirm":"Confirm","common.cancel":"Cancel","common.save":"Save","common.close":"Close","common.search":"Search","common.empty":"No data","common.retry":"Retry","common.emptyTitle":"No data","common.emptyDesc":"Nothing to show here yet","common.errorTitle":"Load failed","common.errorDesc":"Something went wrong, please retry","common.refresh":"Refresh","common.refreshing":"Refreshing data...","common.export":"Export","common.searchPlaceholder":"Search stocks…","common.view":"View","common.unitStock":" stocks","calendar.poolTitle":"Consensus Stock Pool","calendar.poolManage":"Stock Pool Management","calendar.all":"All","calendar.newPool":"Newly Added","calendar.currentHold":"Current Holdings","calendar.outPool":"Exited","calendar.totalStocks":"Total Stocks","calendar.strategyDist":"Distribution by Strategy","calendar.prev":"Prev","calendar.next":"Next","calendar.refreshData":"Reload latest holdings","calendar.exportCsv":"Export CSV","calendar.strategyCompare":"Strategy Compare","calendar.allIntersection":"All-strategy Intersection","calendar.noCommon":"No common holdings","calendar.pair":"Pair","calendar.intersection":"Inter Count","calendar.intersectionCodes":"Intersection","calendar.onlyFirst":"Only 1st","calendar.onlyFirstCodes":"Only 1st Codes","calendar.onlySecond":"Only 2nd","calendar.onlySecondCodes":"Only 2nd Codes","calendar.noCompareData":"No comparison data","calendar.selectDate":"Select date","calendar.selectWeek":"Select week","calendar.selectMonth":"Select month","calendar.selectYear":"Select year","calendar.inPool":"Newly Added","calendar.outPooled":"Exited","calendar.unwatch":"Remove from watchlist","calendar.watch":"Add to watchlist","calendar.aiEvaluated":"AI evaluated","calendar.klineLoaded":"K-line loaded","calendar.expand":"Expand","calendar.collapse":"Collapse","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"Factor Checkup","detail.tabPerformance":"Performance","detail.perfForecast":"Forecast","detail.perfExpress":"Express","detail.perfAnnDate":"Ann Date","detail.perfEndDate":"Period","detail.perfType":"Type","detail.perfChange":"NP Change","detail.perfNetProfit":"Net Profit","detail.perfRevenue":"Revenue","detail.perfIncome":"Net Income","detail.perfEmpty":"No performance data","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"Multi-Factor Checkup","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"No data","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"Click Evaluate to get the analysis","detail.scoreUnit":"pts","detail.ruleScore":"Rule score","detail.notEvaluated":"Not scored","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"Click to load K-line","detail.maLabel":"MA","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1M","detail.range3M":"3M","detail.range6M":"6M","detail.rangeAll":"All","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"Close","detail.pctChg":"Change","detail.highLow":"High/Low","detail.volume":"Volume","detail.turnover":"Turnover","detail.amplitude":"Amplitude","detail.ma20Dev":"MA20 Dev","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"AI Evaluation","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"Batch Evaluate","ai.batchEvalInput":"Batch Evaluate (enter codes)","ai.autoEval":"Auto Evaluation","ai.totalEval":"Total Evaluations","ai.coveredStocks":"Covered Stocks","ai.watchlist":"Watchlist","ai.portfolio":"Portfolio","ai.running":"Running","ai.paused":"Paused","ai.aiCalls":"AI Calls","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"No watchlist yet","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"Evaluation Hit Rate","ai.insufficientSamples":"Not enough evaluation samples","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"By Model","ai.hitRateByLevel":"By Rating","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"No evaluation records","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"Portfolio Summary","ai.portfolioCurve":"Portfolio Return Curve","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"Trading Days","strategies.coveredStocks":"Stocks Covered","strategies.strategyCount":"Strategies","strategies.currentPool":"Stocks in Pool","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"View all","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"Today","strategies.weekChanges":"This Week","strategies.monthChanges":"This Month","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"Success rate / Latency / Freshness / Calls","strategies.noSourceCall":"No data source calls today","strategies.computing":"Computing...","research.marketReview":"Market Review","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI language, applies immediately and auto-saved","system.stockData":"Stock Data","system.strategyData":"Strategies","system.aiService":"AI Service","system.feishuPush":"Feishu Push","system.tushare":"Tushare","system.tradeCalendar":"Trading Calendar","system.poolStocks":"Pooled Stocks","system.ok":"OK","system.needsConfig":"Needs config","system.configured":"Configured","system.notConfigured":"Not configured","system.connected":"Connected","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"Uptime","system.avgLatency":"Avg Latency","system.errorRate":"Error Rate","system.lastSaved":"Last saved: ","system.unitDays":"days","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"Today's Plan","exec.statusTitle":"Live Progress","exec.resultTitle":"Execution Results","exec.traceTitle":"Execution Trace","exec.strategy":"Strategy","exec.schedule":"Schedule","exec.countdown":"Time to Next Run","exec.lastRun":"Last Run","exec.waiting":"Waiting","exec.running":"Running","exec.done":"Done","exec.failed":"Failed","exec.visible":"Visible in Day View","exec.invisible":"Not Visible in Day View","exec.holdings":"Holdings","exec.union":"In-pool Union","exec.dayTotal":"Day View Stocks","exec.date":"Date","exec.phase":"Phase","exec.duration":"Duration"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("en",a),a});(function(a,t){typeof je=="object"&&je.exports?je.exports=t():a.Quantja=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"戦略総覧","nav.calendar":"量化カレンダー","nav.ai":"スマート評価","nav.research":"戦略リサーチ","nav.ops":"システム状態","nav.system":"システム設定","nav.shortterm":"短期振り返り","sub.overview":"概要","sub.strategies.overview":"戦略概要","sub.ai.overview":"評価概要","sub.research.research-overview":"研究概要","sub.execution":"実行ダッシュボード","sub.merrill":"メリルクロック","sub.market":"市場概況","sub.consensus":"戦略コンセンサス","sub.daily":"日ビュー","sub.weekly":"週ビュー","sub.monthly":"月ビュー","sub.yearly":"年ビュー","sub.pool":"株プール","sub.calendar":"カレンダー","sub.watchlist":"マイ自選","sub.history":"評価履歴","sub.evaluation-analysis":"評価分析","sub.focus":"重点追跡","sub.datadict":"データ辞書","sub.notification":"通知センター","sub.chat_history":"質問履歴","sub.portfolio":"ポートフォリオ","sub.research-overview":"研究概要","sub.quant-research":"クオンツ研究","sub.strategy-write":"戦略作成","sub.backtest":"戦略バックテスト","sub.backtest-history":"バックテスト履歴","sub.market-review":"日次レビュー","sub.custom-write":"新規戦略","sub.strategy-manage":"戦略管理","sub.ztpool":"ストップ高レビュー","sub.lhb":"竜虎榜","sub.shortterm.overview":"振り返りダッシュボード","sub.shortterm.sector":"セクター資金流","sub.sector":"セクター資金流","sub.shortterm.intraday":"日中検証","sub.intraday":"日中検証","sub.status":"システム状態","sub.autoeval":"AI サービス","sub.datasource":"データソース","sub.feature":"機能設定","sub.user":"ユーザーと権限","sub.usage":"利用統計","sub.about":"情報","navMode.subnav":"サイドバー + サブナビ","navMode.tree":"サイドバーツリー","navMode.toptab":"上部セカンダリタブ（既定）","view.day":"日ビュー","view.week":"週ビュー","view.month":"月ビュー","view.year":"年ビュー","login.title":"量化カレンダー","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"ユーザー名","login.password":"パスワード","login.submit":"Log In","login.guest":"ゲストログイン","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"データ到達不能","common.confirm":"確認","common.cancel":"キャンセル","common.save":"保存","common.close":"閉じる","common.search":"検索","common.empty":"データなし","common.retry":"再試行","common.emptyTitle":"データなし","common.emptyDesc":"表示できる内容がありません","common.errorTitle":"読み込み失敗","common.errorDesc":"エラーが発生しました。再試行してください","common.refresh":"更新","common.refreshing":"Refreshing data...","common.export":"エクスポート","common.searchPlaceholder":"株を検索…","common.view":"表示","common.unitStock":"件","calendar.poolTitle":"戦略コンセンサス株プール","calendar.poolManage":"株プール管理","calendar.all":"すべて","calendar.newPool":"新規入プール","calendar.currentHold":"現在保有","calendar.outPool":"プール外","calendar.totalStocks":"総株数","calendar.strategyDist":"戦略別株分布","calendar.prev":"前へ","calendar.next":"次へ","calendar.refreshData":"最新保有データを再読み込み","calendar.exportCsv":"CSVエクスポート","calendar.strategyCompare":"戦略比較","calendar.allIntersection":"全戦略共通","calendar.noCommon":"共通保有なし","calendar.pair":"戦略ペア","calendar.intersection":"共通数","calendar.intersectionCodes":"共通コード","calendar.onlyFirst":"前者のみ","calendar.onlyFirstCodes":"前者のみコード","calendar.onlySecond":"後者のみ","calendar.onlySecondCodes":"後者のみコード","calendar.noCompareData":"比較データなし","calendar.selectDate":"日付を選択","calendar.selectWeek":"週を選択","calendar.selectMonth":"月を選択","calendar.selectYear":"年を選択","calendar.inPool":"新規入プール","calendar.outPooled":"プール外","calendar.unwatch":"お気に入り解除","calendar.watch":"お気に入り追加","calendar.aiEvaluated":"AI評価済み","calendar.klineLoaded":"K線ロード済み","calendar.expand":"展開","calendar.collapse":"折りたたむ","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"マルチ因子診断","detail.tabPerformance":"業績","detail.perfForecast":"業績予想","detail.perfExpress":"業績速報","detail.perfAnnDate":"発表日","detail.perfEndDate":"期間","detail.perfType":"種別","detail.perfChange":"純利益変動","detail.perfNetProfit":"純利益","detail.perfRevenue":"売上","detail.perfIncome":"純利益","detail.perfEmpty":"業績データなし","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"マルチ因子診断","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"データなし","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI評価ボタンをクリックして分析結果を取得","detail.scoreUnit":"点","detail.ruleScore":"選股スコア","detail.notEvaluated":"未評価","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"クリックしてK線を表示","detail.maLabel":"移動平均","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1ヶ月","detail.range3M":"3ヶ月","detail.range6M":"半年","detail.rangeAll":"すべて","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"終値","detail.pctChg":"騰落率","detail.highLow":"高値/安値","detail.volume":"出来高","detail.turnover":"回転率","detail.amplitude":"振幅","detail.ma20Dev":"MA20乖離","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"スマート評価","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"一括評価","ai.batchEvalInput":"一括評価（コード入力）","ai.autoEval":"自動評価","ai.totalEval":"総評価数","ai.coveredStocks":"カバー株","ai.watchlist":"自選株","ai.portfolio":"ポートフォリオ","ai.running":"実行中","ai.paused":"一時停止中","ai.aiCalls":"AI呼び出し量","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"自選株がありません","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"評価命中率","ai.insufficientSamples":"評価サンプル不足","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"モデル別","ai.hitRateByLevel":"評価別","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"評価記録なし","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"ポートフォリオ概要","ai.portfolioCurve":"ポートフォリオ収益曲線","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"取引日総数","strategies.coveredStocks":"カバー株数","strategies.strategyCount":"選股戦略数","strategies.currentPool":"現在プール内銘柄","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"すべて表示","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"本日の変動","strategies.weekChanges":"今週累計","strategies.monthChanges":"今月累計","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"成功率/遅延/鮮度/回数","strategies.noSourceCall":"本日データソース呼び出しなし","strategies.computing":"Computing...","research.marketReview":"市場レビュー","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI言語、切替後すぐに反映され自動保存","system.stockData":"株式データ","system.strategyData":"選股戦略","system.aiService":"AIサービス","system.feishuPush":"飛書プッシュ","system.tushare":"Tushare","system.tradeCalendar":"取引カレンダー","system.poolStocks":"プール内銘柄","system.ok":"正常","system.needsConfig":"Needs config","system.configured":"設定済み","system.notConfigured":"Not configured","system.connected":"接続済み","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"稼働時間","system.avgLatency":"平均遅延","system.errorRate":"エラー率","system.lastSaved":"Last saved: ","system.unitDays":"日","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"本日の実行計画","exec.statusTitle":"リアルタイム進捗","exec.resultTitle":"実行結果","exec.traceTitle":"実行トレース","exec.strategy":"戦略","exec.schedule":"スケジュール","exec.countdown":"次回実行まで","exec.lastRun":"前回実行","exec.waiting":"待機中","exec.running":"実行中","exec.done":"完了","exec.failed":"失敗","exec.visible":"日ビュー表示済み","exec.invisible":"日ビュー未表示","exec.holdings":"保有数","exec.union":"プール合計","exec.dayTotal":"日ビュー銘柄数","exec.date":"日付","exec.phase":"段階","exec.duration":"所要時間"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ja",a),a});(function(a,t){typeof je=="object"&&je.exports?je.exports=t():a.Quantko=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"전략 개요","nav.calendar":"퀀트 캘린더","nav.ai":"스마트 평가","nav.research":"전략 연구","nav.ops":"시스템 상태","nav.system":"시스템 설정","nav.shortterm":"단기 리뷰","sub.overview":"개요","sub.strategies.overview":"전략 개요","sub.ai.overview":"평가 개요","sub.research.research-overview":"연구 개요","sub.execution":"실행 대시보드","sub.merrill":"메릴 클록","sub.market":"지수 현황","sub.consensus":"전략 컨센서스","sub.daily":"일별 보기","sub.weekly":"주별 보기","sub.monthly":"월별 보기","sub.yearly":"연별 보기","sub.pool":"종목 풀","sub.calendar":"캘린더","sub.watchlist":"내 관심목록","sub.history":"평가 이력","sub.evaluation-analysis":"평가 분석","sub.focus":"중점 추적","sub.datadict":"데이터 사전","sub.notification":"알림 센터","sub.chat_history":"문의 이력","sub.portfolio":"포트폴리오","sub.research-overview":"연구 개요","sub.quant-research":"퀀트 연구","sub.strategy-write":"전략 작성","sub.backtest":"전략 백테스트","sub.backtest-history":"백테스트 이력","sub.market-review":"일일 리뷰","sub.custom-write":"새 전략","sub.strategy-manage":"전략 관리","sub.ztpool":"상한가 리뷰","sub.lhb":"용호방","sub.shortterm.overview":"복기 대시보드","sub.shortterm.sector":"섹터 자금흐름","sub.sector":"섹터 자금흐름","sub.shortterm.intraday":"장중 검증","sub.intraday":"장중 검증","sub.status":"시스템 상태","sub.autoeval":"AI 서비스","sub.datasource":"데이터 소스","sub.feature":"기능 설정","sub.user":"사용자 및 권한","sub.usage":"사용량 통계","sub.about":"정보","navMode.subnav":"사이드바 + 보조 내비게이션","navMode.tree":"사이드바 트리","navMode.toptab":"상단 보조 탭 (기본)","view.day":"일별 보기","view.week":"주별 보기","view.month":"월별 보기","view.year":"연별 보기","login.title":"퀀트 캘린더","login.subtitle":"QuantCalendar · All-A-Share Smart Quant Research Platform","login.desc":"Strategy consensus · AI evaluation · Daily quant calendar at a glance","login.username":"사용자명","login.password":"비밀번호","login.submit":"Log In","login.guest":"게스트 로그인","login.footer":"Quant stock picking · Smart decisions · Let data speak","common.loading":"Loading...","common.dataUnavailable":"데이터 접근 불가","common.confirm":"확인","common.cancel":"취소","common.save":"저장","common.close":"닫기","common.search":"검색","common.empty":"데이터 없음","common.retry":"재시도","common.emptyTitle":"데이터 없음","common.emptyDesc":"표시할 내용이 없습니다","common.errorTitle":"로드 실패","common.errorDesc":"오류가 발생했습니다. 다시 시도해 주세요","common.refresh":"새로고침","common.refreshing":"Refreshing data...","common.export":"내보내기","common.searchPlaceholder":"종목 검색…","common.view":"보기","common.unitStock":"개","calendar.poolTitle":"전략 컨센서스 종목 풀","calendar.poolManage":"종목 풀 관리","calendar.all":"전체","calendar.newPool":"신규 풀입","calendar.currentHold":"현재 보유","calendar.outPool":"풀아웃","calendar.totalStocks":"총 종목 수","calendar.strategyDist":"전략별 종목 분포","calendar.prev":"이전","calendar.next":"다음","calendar.refreshData":"최신 보유 데이터 다시 로드","calendar.exportCsv":"CSV 내보내기","calendar.strategyCompare":"전략 비교","calendar.allIntersection":"전체 교집합","calendar.noCommon":"공통 보유 없음","calendar.pair":"전략 쌍","calendar.intersection":"교집합 수","calendar.intersectionCodes":"교집합 코드","calendar.onlyFirst":"전자만","calendar.onlyFirstCodes":"전자만 코드","calendar.onlySecond":"후자만","calendar.onlySecondCodes":"후자만 코드","calendar.noCompareData":"비교 데이터 없음","calendar.selectDate":"날짜 선택","calendar.selectWeek":"주 선택","calendar.selectMonth":"월 선택","calendar.selectYear":"연 선택","calendar.inPool":"신규 풀입","calendar.outPooled":"풀아웃","calendar.unwatch":"관심 해제","calendar.watch":"관심 추가","calendar.aiEvaluated":"AI 평가 완료","calendar.klineLoaded":"K라인 로드 완료","calendar.expand":"펼치기","calendar.collapse":"접기","detail.title":"Stock Detail Analysis","detail.loading":"Loading stock details...","detail.loadingHint":"Fetching market data, please wait","detail.subtitle":"Held for {days} days","detail.tabKline":"K-line Chart","detail.tabEval":"Evaluation Result","detail.tabChat":"AI Ask","detail.tabFactor":"멀티팩터 점검","detail.tabPerformance":"실적","detail.perfForecast":"실적 예고","detail.perfExpress":"실적 속보","detail.perfAnnDate":"공시일","detail.perfEndDate":"기간","detail.perfType":"유형","detail.perfChange":"순익 변동","detail.perfNetProfit":"순이익","detail.perfRevenue":"매출","detail.perfIncome":"순이익","detail.perfEmpty":"실적 데이터 없음","detail.evaluate":"Evaluate","detail.reevaluate":"Re-evaluate","detail.addWatch":"Add to Watchlist","detail.inWatch":"In Watchlist","detail.retry":"Retry","detail.factorTitle":"멀티팩터 점검","detail.factorLoading":"Loading factor data…","detail.factorEmpty":"No factor data available, retry later","detail.factorNoData":"데이터 없음","detail.factorCount":"{count} factors in total","detail.factorPercentile":"Historical percentile {pct}%","detail.evalTitle":"AI Evaluation","detail.copyReport":"Copy Report","detail.cachedResult":"Cached result","detail.noEvalYet":"AI 평가 버튼을 클릭하여 분석 결과 확인","detail.scoreUnit":"점","detail.ruleScore":"종목 점수","detail.notEvaluated":"미평가","detail.lastScore":"Last {score} pts → This {score2} pts","detail.loadKline":"Load K-line","detail.loadingKline":"Loading K-line data...","detail.clickToLoadKline":"클릭하여 K라인 보기","detail.maLabel":"이동평균","detail.crosshairHint":"Hover or click chart to read prices","detail.range1M":"1개월","detail.range3M":"3개월","detail.range6M":"6개월","detail.rangeAll":"전체","detail.strategyHoldings":"Strategy Holdings","detail.holdDays":"{days} days","detail.close":"종가","detail.pctChg":"등락률","detail.highLow":"최고/최저","detail.volume":"거래량","detail.turnover":"회전율","detail.amplitude":"진폭","detail.ma20Dev":"MA20 이탈","detail.sectionQuote":"Quote & MA","detail.sectionKline":"K-line & MA","ai.title":"스마트 평가","ai.subtitle":"Multi-model serial evaluation with auto technical indicators","ai.manageWatchlist":"Manage Watchlist","ai.batchEval":"일괄 평가","ai.batchEvalInput":"일괄 평가 (코드 입력)","ai.autoEval":"자동 평가","ai.totalEval":"총 평가 수","ai.coveredStocks":"커버 종목","ai.watchlist":"관심종목","ai.portfolio":"포트폴리오","ai.running":"실행 중","ai.paused":"일시정지","ai.aiCalls":"AI 호출량","ai.strategyRecommend":"Strategy Recommendations","ai.recentEval":"Recent Evaluations","ai.viewAll":"View all →","ai.scoreDist":"Score Distribution","ai.quickOps":"Quick Actions","ai.quickEval":"Quick Evaluate","ai.noWatchlist":"관심종목이 없습니다","ai.goAddWatchlist":"Add watchlist →","ai.chooseFromWatchlist":"Pick a stock from watchlist:","ai.strategyLabel":"Strategy:","ai.evalHitRate":"평가 적중률","ai.insufficientSamples":"평가 샘플 부족","ai.hitRateLoading":"Calculating hit rate...","ai.hitRateByModel":"모델별","ai.hitRateByLevel":"등급별","ai.hitRateSample":"{rate} samples","ai.byDate":"By Date","ai.byMonth":"By Month","ai.byStock":"By Stock","ai.historyTitle":"Evaluation History","ai.noEvalRecord":"평가 기록 없음","ai.evalHint":'Click "Evaluate" in the stock detail page to start analysis',"ai.myWatchlist":"My Watchlist","ai.portfolioSummary":"포트폴리오 요약","ai.portfolioCurve":"포트폴리오 수익 곡선","strategies.title":"Strategy Overview","strategies.todayScreen":"Today at a Glance","strategies.dataOverview":"Data Overview","strategies.tradingDays":"거래일 총수","strategies.coveredStocks":"커버 종목 수","strategies.strategyCount":"선종 전략 수","strategies.currentPool":"현재 풀 내 종목","strategies.consensusTop5":"Consensus TOP5","strategies.viewAll":"전체 보기","strategies.latestTradeDay":"Latest trading day: ","strategies.todayChanges":"오늘 변동","strategies.weekChanges":"이번 주 누적","strategies.monthChanges":"이번 달 누적","strategies.merrillLabel":"Merrill Clock","strategies.marketSentiment":"Market Sentiment","strategies.poolChanges":"Pool Changes","strategies.todayFocus":"Today's Focus","strategies.noAlert":"No alerts · All good","strategies.health":"Data Health","strategies.healthHint":"성공률/지연/신선도/횟수","strategies.noSourceCall":"오늘 데이터 소스 호출 없음","strategies.computing":"Computing...","research.marketReview":"시장 리뷰","research.title":"Strategy Research","research.quantResearch":"Quant Research","research.backtest":"Backtest","research.backtestHistory":"Backtest History","system.title":"System Status","system.resourceMonitor":"Resource Monitor","system.configManage":"Configuration","system.saveAll":"Save All Config","system.reset":"Reset","system.exportConfig":"Export","system.importConfig":"Import","system.language":"Language","system.languageDesc":"UI 언어, 전환 즉시 적용 및 자동 저장","system.stockData":"주식 데이터","system.strategyData":"선종 전략","system.aiService":"AI 서비스","system.feishuPush":"Feishu 푸시","system.tushare":"Tushare","system.tradeCalendar":"거래 캘린더","system.poolStocks":"풀 내 종목","system.ok":"정상","system.needsConfig":"Needs config","system.configured":"설정됨","system.notConfigured":"Not configured","system.connected":"연결됨","system.notConnected":"Not connected","system.cpu":"CPU","system.memory":"Memory","system.disk":"Disk","system.uptime":"실행 시간","system.avgLatency":"평균 지연","system.errorRate":"오류율","system.lastSaved":"Last saved: ","system.unitDays":"일","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"오늘 실행 계획","exec.statusTitle":"실시간 진행","exec.resultTitle":"실행 결과","exec.traceTitle":"실행 추적","exec.strategy":"전략","exec.schedule":"일정","exec.countdown":"다음 실행까지","exec.lastRun":"마지막 실행","exec.waiting":"대기 중","exec.running":"실행 중","exec.done":"완료","exec.failed":"실패","exec.visible":"일뷰 표시됨","exec.invisible":"일뷰 미표시","exec.holdings":"보유","exec.union":"풀 합집합","exec.dayTotal":"일뷰 종목 수","exec.date":"날짜","exec.phase":"단계","exec.duration":"소요 시간"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("ko",a),a});(function(a,t){typeof je=="object"&&je.exports?je.exports=t():a.QuantzhTW=t()})(typeof self<"u"?self:void 0,function(){const a={"nav.strategies":"策略總覽","nav.calendar":"量化日歷","nav.ai":"智能評估","nav.research":"策略研究","nav.ops":"系統狀態","nav.system":"系統配置","nav.shortterm":"短線復盤","sub.overview":"概览","sub.strategies.overview":"策略概览","sub.ai.overview":"評估概覽","sub.research.research-overview":"研究概覽","sub.execution":"執行看板","sub.merrill":"美林時钟","sub.market":"大盤行情","sub.consensus":"策略共識榜","sub.daily":"日視圖","sub.weekly":"周視圖","sub.monthly":"月視圖","sub.yearly":"年視圖","sub.pool":"股票池","sub.calendar":"量化日曆","sub.watchlist":"我的自選","sub.history":"評估歷史","sub.evaluation-analysis":"評估分析","sub.focus":"重點追蹤","sub.datadict":"數據字典","sub.notification":"通知中心","sub.chat_history":"問股歷史","sub.portfolio":"組合持仓","sub.research-overview":"研究概覽","sub.quant-research":"量化研究","sub.strategy-write":"策略编写","sub.backtest":"策略回測","sub.backtest-history":"回測记錄","sub.market-review":"每日複盤","sub.custom-write":"全新策略","sub.strategy-manage":"策略管理","sub.ztpool":"漲停復盤","sub.lhb":"龍虎榜","sub.shortterm.overview":"復盤看板","sub.shortterm.sector":"板塊資金","sub.sector":"板塊資金","sub.shortterm.intraday":"盤中核驗","sub.intraday":"盤中核驗","sub.status":"系統状态","sub.autoeval":"AI 服務","sub.datasource":"數据源","sub.feature":"基礎配置","sub.user":"用户與權限","sub.usage":"用量統計","sub.about":"關于","navMode.subnav":"中欄二級","navMode.tree":"側欄樹狀","navMode.toptab":"頂部二級標籤（預設）","view.day":"日視圖","view.week":"周視圖","view.month":"月視圖","view.year":"年視圖","login.title":"量化日曆","login.subtitle":"QuantCalendar · 全 A 股智能量化研究平臺","login.desc":"策略共識 · AI 評估 · 每日量化日歷，一键掌握","login.username":"用户名","login.password":"密碼","login.submit":"登 錄","login.guest":"访客登錄","login.footer":"量化選股 · 智能决策 · 让數据說话","common.loading":"加載中...","common.dataUnavailable":"數据不可达","common.confirm":"確認","common.cancel":"取消","common.save":"保存","common.close":"關闭","common.search":"搜索","common.empty":"暂無數据","common.retry":"重試","common.emptyTitle":"暂無數据","common.emptyDesc":"目前沒有可顯示的內容","common.errorTitle":"載入失敗","common.errorDesc":"發生錯誤，請重試或稍後再試","common.refresh":"刷新","common.refreshing":"正在刷新數据...","common.export":"導出","common.searchPlaceholder":"搜尋股票、策略…","common.view":"查看","common.unitStock":"只","calendar.poolTitle":"策略共識度股票池","calendar.poolManage":"股票池管理","calendar.all":"全部","calendar.newPool":"新入池","calendar.currentHold":"当前持仓","calendar.outPool":"已出池","calendar.totalStocks":"总股票數","calendar.strategyDist":"各策略股票分布","calendar.prev":"上一","calendar.next":"下一","calendar.refreshData":"重新加載最新持仓數据","calendar.exportCsv":"導出為CSV","calendar.strategyCompare":"策略對比","calendar.allIntersection":"全量交集","calendar.noCommon":"無共同持倉","calendar.pair":"策略對","calendar.intersection":"交集數","calendar.intersectionCodes":"交集代碼","calendar.onlyFirst":"僅前者","calendar.onlyFirstCodes":"僅前者代碼","calendar.onlySecond":"僅後者","calendar.onlySecondCodes":"僅後者代碼","calendar.noCompareData":"暫無對比數據","calendar.selectDate":"選择日期","calendar.selectWeek":"選择周","calendar.selectMonth":"選择月份","calendar.selectYear":"選择年份","calendar.inPool":"新入池","calendar.outPooled":"已出池","calendar.unwatch":"取消收藏","calendar.watch":"加入收藏","calendar.aiEvaluated":"已AI評估","calendar.klineLoaded":"已加載K線","calendar.expand":"展開","calendar.collapse":"收起","detail.title":"股票详情分析","detail.loading":"正在加載股票详情...","detail.loadingHint":"行情數据拉取中，請稍候","detail.subtitle":"策略持仓 {days} 天","detail.tabKline":"K線圖表","detail.tabEval":"評估结果","detail.tabChat":"AI 問股","detail.tabFactor":"多因子体檢","detail.tabPerformance":"業績","detail.perfForecast":"業績預告","detail.perfExpress":"業績快報","detail.perfAnnDate":"公告日","detail.perfEndDate":"報告期","detail.perfType":"類型","detail.perfChange":"淨利變動","detail.perfNetProfit":"淨利潤","detail.perfRevenue":"營收","detail.perfIncome":"淨利潤","detail.perfEmpty":"暫無業績數據","detail.evaluate":"智能評估","detail.reevaluate":"重新評估","detail.addWatch":"加入自選","detail.inWatch":"已自選","detail.retry":"重試","detail.factorTitle":"多因子体檢","detail.factorLoading":"正在加載体檢數据…","detail.factorEmpty":"暂無可用因子數据，請稍后重試","detail.factorNoData":"無數据","detail.factorCount":"共 {count} 項因子","detail.factorPercentile":"歷史分位 {pct}%","detail.evalTitle":"AI 智能評估","detail.copyReport":"複制報告","detail.cachedResult":"缓存结果","detail.noEvalYet":"點击 AI 評估按钮獲取分析结果","detail.scoreUnit":"分","detail.ruleScore":"選股評分","detail.notEvaluated":"未評估","detail.lastScore":"上次 {score} 分 → 本次 {score2} 分","detail.loadKline":"加載K線","detail.loadingKline":"加載K線數据中...","detail.clickToLoadKline":"點击加載K線查看","detail.maLabel":"均線","detail.crosshairHint":"十字線讀價：悬停或點击圖表","detail.range1M":"近1月","detail.range3M":"近3月","detail.range6M":"近半年","detail.rangeAll":"全部","detail.strategyHoldings":"策略持仓记錄","detail.holdDays":"{days} 天","detail.close":"收盤價","detail.pctChg":"漲跌幅","detail.highLow":"最高/最低","detail.volume":"成交量","detail.turnover":"换手率","detail.amplitude":"振幅","detail.ma20Dev":"MA20偏离","detail.sectionQuote":"今日行情與均線","detail.sectionKline":"K線圖與均線","ai.title":"智能評估","ai.subtitle":"多模型串行評估，技术指标自動注入","ai.manageWatchlist":"管理自選股","ai.batchEval":"批量評估","ai.batchEvalInput":"批量評估（输入代碼）","ai.autoEval":"自動評估","ai.totalEval":"总評估數","ai.coveredStocks":"覆盖股票","ai.watchlist":"自選股","ai.portfolio":"組合持仓","ai.running":"运行中","ai.paused":"已暂停","ai.aiCalls":"AI 调用量","ai.strategyRecommend":"策略推荐","ai.recentEval":"最近評估","ai.viewAll":"查看全部 →","ai.scoreDist":"評分分布","ai.quickOps":"快捷操作","ai.quickEval":"快速評估","ai.noWatchlist":"還没有自選股","ai.goAddWatchlist":"去添加自選 →","ai.chooseFromWatchlist":"从自選中選择股票快速評估：","ai.strategyLabel":"策略:","ai.evalHitRate":"評估命中率","ai.insufficientSamples":"暂無足够評估样本","ai.hitRateLoading":"正在計算命中率統計中...","ai.hitRateByModel":"分模型","ai.hitRateByLevel":"分評級","ai.hitRateSample":"{rate}样本","ai.byDate":"按日期","ai.byMonth":"按月","ai.byStock":"按股票","ai.historyTitle":"評估歷史记錄","ai.noEvalRecord":"暂無評估记錄","ai.evalHint":"點击股票详情页的「智能評估」按钮開始分析股票","ai.myWatchlist":"我的自選","ai.portfolioSummary":"組合匯总","ai.portfolioCurve":"組合收益曲線","strategies.title":"策略总览","strategies.todayScreen":"今日一屏","strategies.dataOverview":"數据概览","strategies.tradingDays":"交易日总數","strategies.coveredStocks":"覆盖股票數","strategies.strategyCount":"選股策略數","strategies.currentPool":"当前在池股票","strategies.consensusTop5":"策略共識度 TOP5","strategies.viewAll":"查看全部","strategies.latestTradeDay":"最新交易日: ","strategies.todayChanges":"今日變動","strategies.weekChanges":"本周累計","strategies.monthChanges":"本月累計","strategies.merrillLabel":"美林時钟","strategies.marketSentiment":"市場情绪","strategies.poolChanges":"池變動","strategies.todayFocus":"今日重點","strategies.noAlert":"無預警 · 一切正常","strategies.health":"數据健康度","strategies.healthHint":"成功率 / 延迟 / 新鲜度 / 次數","strategies.noSourceCall":"今日暂無數据源调用记錄","strategies.computing":"計算中...","research.marketReview":"市場複盤","research.title":"策略研究","research.quantResearch":"量化研究","research.backtest":"策略回測","research.backtestHistory":"回測记錄","system.title":"系統状态","system.resourceMonitor":"資源监控","system.configManage":"配置管理","system.saveAll":"保存全部配置","system.reset":"重置配置","system.exportConfig":"導出配置","system.importConfig":"導入配置","system.language":"語言","system.languageDesc":"界面語言，切换后立即生效并自動保存","system.stockData":"股票數据","system.strategyData":"選股策略","system.aiService":"AI服務","system.feishuPush":"飛书推送","system.tushare":"Tushare","system.tradeCalendar":"交易日歷","system.poolStocks":"在池股票","system.ok":"正常","system.needsConfig":"需配置","system.configured":"已配置","system.notConfigured":"未配置","system.connected":"已连接","system.notConnected":"未连接","system.cpu":"CPU","system.memory":"內存","system.disk":"磁盤","system.uptime":"运行時長","system.avgLatency":"平均延迟","system.errorRate":"错误率","system.lastSaved":"上次保存: ","system.unitDays":"天","lang.zh-CN":"简体中文","lang.en":"English","lang.ja":"日本語","lang.ko":"한국어","lang.zh-TW":"繁體中文","exec.planTitle":"今日執行計畫","exec.statusTitle":"即時進度","exec.resultTitle":"執行結果","exec.traceTitle":"執行追蹤","exec.strategy":"策略","exec.schedule":"排程","exec.countdown":"距下次執行","exec.lastRun":"上次執行","exec.waiting":"等待排程","exec.running":"執行中","exec.done":"已完成","exec.failed":"失敗","exec.visible":"日視圖已可見","exec.invisible":"日視圖未可見","exec.holdings":"持倉","exec.union":"池內聯集","exec.dayTotal":"日視圖股票數","exec.date":"日期","exec.phase":"階段","exec.duration":"耗時"};return typeof window<"u"&&window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.registerLocale("zh-TW",a),a});(function(a,t){typeof je=="object"&&je.exports?je.exports=t():a.QuantPinyin=t()})(typeof self<"u"?self:void 0,function(){const a={贵:"gui",州:"zhou",茅:"mao",台:"tai",平:"ping",安:"an",银:"yin",行:"hang",招:"zhao",商:"shang",五:"wu",粮:"liang",液:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",格:"ge",力:"li",电:"dian",器:"qi",长:"chang",江:"jiang",美:"mei",的:"di",集:"ji",团:"tuan",信:"xin",证:"zheng",券:"quan",宁:"ning",德:"de",时:"shi",代:"dai",恒:"heng",瑞:"rui",医:"yi",药:"yao",隆:"long",基:"ji",绿:"lv",能:"neng",伊:"yi",利:"li",股:"gu",份:"fen",京:"jing",东:"dong",方:"fang",工:"gong",石:"shi",化:"hua",油:"you",保:"bao",发:"fa",展:"zhan",比:"bi",亚:"ya",迪:"di",浦:"pu",万:"wan",科:"ke",大:"da",农:"nong",业:"ye",民:"min",光:"guang",明:"ming",海:"hai",天:"tian",建:"jian",设:"she",交:"jiao",通:"tong",上:"shang",海:"hai",证:"zheng",兴:"xing",业:"ye",紫:"zi",金:"jin",矿:"kuang",潍:"wei",柴:"chai",动:"dong",福:"fu",耀:"yao",玻:"bo",璃:"li",三:"san",重:"zhong",工:"gong",中:"zhong",兴:"xing",顺:"shun",丰:"feng",控:"kong",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",海:"hai",天:"tian",威:"wei",视:"shi",京:"jing",东:"dong",斯:"si",达:"da",半:"ban",导:"dao",体:"ti",韦:"wei",尔:"er",兆:"zhao",易:"yi",创:"chuang",新:"xin",汇:"hui",川:"chuan",技:"ji",术:"shu",复:"fu",星:"xing",医:"yi",智:"zhi",飞:"fei",机:"ji",航:"hang",空:"kong",动:"dong",力:"li",中:"zhong",航:"hang",宝:"bao",钢:"gang",股:"gu",山:"shan",西:"xi",煤:"mei",业:"ye",神:"shen",火:"huo",华:"hua",能:"neng",电:"dian",特:"te",变:"bian",压:"ya",器:"qi",许:"xu",继:"ji",电:"dian",气:"qi",正:"zheng",泰:"tai",电:"dian",气:"qi",先:"xian",导:"dao",智:"zhi",能:"neng",深:"shen",南:"nan",电:"dian",康:"kang",得:"de",新:"xin",沃:"wo",森:"sen",生:"sheng",物:"wu",华:"hua",兰:"lan",生:"sheng",智:"zhi",飞:"fei",大:"da",北:"bei",农:"nong",新:"xin",希:"xi",望:"wang",通:"tong",策:"ce",沙:"sha",河:"he",白:"bai",云:"yun",万:"wan",华:"hua",南:"nan",京:"jing",证:"zheng",广:"guang",发:"fa",浦:"pu",发:"fa",兴:"xing",业:"ye",民:"min",生:"sheng",光:"guang",大:"da",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",邮:"you",储:"chu",银:"yin",行:"hang",建:"jian",设:"she",银:"yin",行:"hang",农:"nong",业:"ye",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",国:"guo",人:"ren",寿:"shou",新:"xin",华:"hua",保:"bao",险:"xian",中:"zhong",国:"guo",太:"tai",保:"bao",人:"ren",保:"bao",中:"zhong",国:"guo",建:"jian",筑:"zhu",中:"zhong",国:"guo",铁:"tie",建:"jian",中:"zhong",国:"guo",交:"jiao",建:"jian",中:"zhong",国:"guo",中:"zhong",铁:"tie",中:"zhong",国:"guo",电:"dian",建:"jian",中:"zhong",国:"guo",石:"shi",油:"you",中:"zhong",国:"guo",石:"shi",化:"hua",万:"wan",科:"ke",A:"a",招:"zhao",商:"shang",蛇:"she",口:"kou",万:"wan",达:"da",保:"bao",利:"li",地:"di",产:"chan",万:"wan",科:"ke",金:"jin",地:"di",华:"hua",夏:"xia",幸:"xing",福:"fu",阳:"yang",光:"guang",城:"cheng",华:"hua",侨:"qiao",城:"cheng",A:"a",浙:"zhe",江:"jiang",证:"zheng",券:"quan",国:"guo",泰:"tai",君:"jun",安:"an",广:"guang",发:"fa",证:"zheng",券:"quan",海:"hai",通:"tong",证:"zheng",券:"quan",华:"hua",泰:"tai",证:"zheng",券:"quan",申:"shen",万:"wan",宏:"hong",源:"yuan",东:"dong",方:"fang",证:"zheng",券:"quan",长:"chang",城:"cheng",证:"zheng",券:"quan",西:"xi",南:"nan",证:"zheng",券:"quan",中:"zhong",信:"xin",建:"jian",投:"tou",国:"guo",信:"xin",证:"zheng",券:"quan",兴:"xing",业:"ye",证:"zheng",券:"quan",东:"dong",吴:"wu",证:"zheng",券:"quan",财:"cai",通:"tong",证:"zheng",券:"quan",华:"hua",安:"an",证:"zheng",券:"quan",长:"chang",江:"jiang",证:"zheng",券:"quan",国:"guo",元:"yuan",证:"zheng",券:"quan",中:"zhong",泰:"tai",证:"zheng",券:"quan",太:"tai",平:"ping",洋:"yang",中:"zhong",国:"guo",太:"tai",保:"bao",险:"xian",新:"xin",华:"hua",保:"bao",险:"xian",平:"ping",安:"an",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",上:"shang",海:"hai",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",浙:"zhe",江:"jiang",美:"mei",大:"da",中:"zhong",国:"guo",移:"yi",动:"dong",中:"zhong",国:"guo",电:"dian",信:"xin",中:"zhong",国:"guo",联:"lian",通:"tong",中:"zhong",国:"guo",中:"zhong",冶:"ye",中:"zhong",国:"guo",宝:"bao",武:"wu",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",南:"nan",车:"che",中:"zhong",国:"guo",长:"chang",安:"an",上:"shang",汽:"qi",集:"ji",团:"tuan",广:"guang",汽:"qi",集:"ji",团:"tuan",福:"fu",田:"tian",汽:"qi",车:"che",长:"chang",安:"an",汽:"qi",车:"che",比:"bi",亚:"ya",迪:"di",长:"chang",城:"cheng",汽:"qi",车:"che",小:"xiao",鹏:"peng",汽:"qi",车:"che",理:"li",想:"xiang",汽:"qi",车:"che",蔚:"wei",来:"lai",比:"bi",亚:"ya",迪:"di",电:"dian",子:"zi",宁:"ning",德:"de",时:"shi",代:"dai",亿:"yi",纬:"wei",锂:"li",能:"neng",赣:"gan",锋:"feng",锂:"li",业:"ye",恩:"en",捷:"jie",股:"gu",份:"fen",天:"tian",齐:"qi",锂:"li",业:"ye",国:"guo",轩:"xuan",高:"gao",科:"ke",晶:"jing",澳:"ao",科:"ke",技:"ji",隆:"long",基:"ji",绿:"lv",能:"neng",通:"tong",威:"wei",股:"gu",份:"fen",阳:"yang",光:"guang",电:"dian",源:"yuan",天:"tian",合:"he",光:"guang",能:"neng",晶:"jing",科:"ke",能:"neng",源:"yuan",福:"fu",斯:"si",特:"te",玻:"bo",璃:"li",旗:"qi",滨:"bin",集:"ji",团:"tuan",锦:"jin",浪:"lang",科:"ke",技:"ji",三:"san",安:"an",光:"guang",电:"dian",捷:"jie",佳:"jia",伟:"wei",创:"chuang",新:"xin",立:"li",讯:"xun",精:"jing",密:"mi",歌:"ge",尔:"er",股:"gu",份:"fen",海:"hai",康:"kang",威:"wei",视:"shi",京:"jing",东:"dong",方:"fang",A:"a",T:"t",C:"c",L:"l",科:"ke",技:"ji",汇:"hui",顶:"ding",科:"ke",技:"ji",中:"zhong",际:"ji",控:"kong",股:"gu",复:"fu",星:"xing",医:"yi",药:"yao",恒:"heng",瑞:"rui",医:"yi",药:"yao",华:"hua",东:"dong",医:"yi",药:"yao",康:"kang",泰:"tai",医:"yi",药:"yao",同:"tong",仁:"ren",堂:"tang",云:"yun",南:"nan",白:"bai",药:"yao",我:"wo",的:"di",家:"jia",居:"ju",顾:"gu",家:"jia",家:"jia",居:"ju",索:"suo",菲:"fei",亚:"ya",格:"ge",力:"li",电:"dian",器:"qi",美:"mei",的:"di",集:"ji",团:"tuan",海:"hai",尔:"er",智:"zhi",家:"jia",苏:"su",泊:"po",尔:"er",老:"lao",板:"ban",电:"dian",器:"qi",万:"wan",和:"he",电:"dian",气:"qi",华:"hua",帝:"di",证:"zheng",券:"quan",华:"hua",兰:"lan",医:"yi",药:"yao",康:"kang",恩:"en",贝:"bei",九:"jiu",州:"zhou",药:"yao",业:"ye",人:"ren",福:"fu",医:"yi",药:"yao",丽:"li",珠:"zhu",集:"ji",团:"tuan",五:"wu",粮:"liang",液:"ye",泸:"lu",州:"zhou",老:"lao",窖:"jiao",茅:"mao",台:"tai",山:"shan",西:"xi",汾:"fen",酒:"jiu",洋:"yang",河:"he",股:"gu",份:"fen",古:"gu",井:"jing",贡:"gong",酒:"jiu",青:"qing",岛:"dao",啤:"pi",酒:"jiu",重:"chong",庆:"qing",啤:"pi",酒:"jiu",燕:"yan",京:"jing",啤:"pi",酒:"jiu",贵:"gui",州:"zhou",茅:"mao",台:"tai",海:"hai",天:"tian",味:"wei",业:"ye",中:"zhong",炬:"ju",高:"gao",新:"xin",宝:"bao",信:"xin",软:"ruan",件:"jian",卫:"wei",士:"shi",通:"tong",信:"xin",中:"zhong",兴:"xing",通:"tong",讯:"xun",烽:"feng",火:"huo",通:"tong",信:"xin",紫:"zi",光:"guang",股:"gu",份:"fen",用:"yong",友:"you",网:"wang",络:"luo",金:"jin",山:"shan",办:"ban",公:"gong",三:"san",六:"liu",零:"ling",金:"jin",蝶:"die",软:"ruan",件:"jian",中:"zhong",软:"ruan",件:"jian",国:"guo",际:"ji",金:"jin",证:"zheng",股:"gu",份:"fen",南:"nan",方:"fang",传:"chuan",媒:"mei",万:"wan",达:"da",电:"dian",影:"ying",华:"hua",策:"ce",影:"ying",视:"shi",光:"guang",线:"xian",传:"chuan",媒:"mei",分:"fen",众:"zhong",传:"chuan",媒:"mei",东:"dong",方:"fang",财:"cai",富:"fu",同:"tong",花:"hua",顺:"shun",恒:"heng",生:"sheng",电:"dian",子:"zi",生:"sheng",益:"yi",科:"ke",技:"ji",瑞:"rui",芯:"xin",微:"wei",电:"dian",子:"zi",兆:"zhao",易:"yi",创:"chuang",新:"xin",士:"shi",兰:"lan",微:"wei",华:"hua",虹:"hong",股:"gu",份:"fen",中:"zhong",环:"huan",装:"zhuang",备:"bei",晶:"jing",方:"fang",科:"ke",技:"ji",蓝:"lan",思:"si",科:"ke",技:"ji",欧:"ou",菲:"fei",光:"guang",电:"dian",汇:"hui",顶:"ding",科:"ke",技:"ji",闻:"wen",泰:"tai",科:"ke",技:"ji",韦:"wei",尔:"er",股:"gu",份:"fen",汇:"hui",顶:"ding",中:"zhong",际:"ji",控:"kong",华:"hua",天:"tian",科:"ke",技:"ji",华:"hua",工:"gong",科:"ke",技:"ji",航:"hang",天:"tian",科:"ke",技:"ji",中:"zhong",国:"guo",卫:"wei",星:"xing",中:"zhong",国:"guo",动:"dong",力:"li",中:"zhong",国:"guo",航:"hang",天:"tian",航:"hang",发:"fa",动:"dong",力:"li",洪:"hong",都:"du",航:"hang",空:"kong",中:"zhong",直:"zhi",股:"gu",份:"fen",中:"zhong",国:"guo",船:"chuan",舶:"bo",中:"zhong",国:"guo",重:"zhong",工:"gong",中:"zhong",国:"guo",中:"zhong",车:"che",郑:"zheng",州:"zhou",煤:"mei",业:"ye",平:"ping",煤:"mei",股:"gu",份:"fen",潞:"lu",安:"an",环:"huan",能:"neng",淮:"huai",北:"bei",矿:"kuang",业:"ye",中:"zhong",国:"guo",神:"shen",华:"hua",兖:"yan",矿:"kuang",能:"neng",源:"yuan",山:"shan",西:"xi",焦:"jiao",化:"hua",宝:"bao",钢:"gang",股:"gu",份:"fen",鞍:"an",钢:"gang",股:"gu",份:"fen",山:"shan",东:"dong",钢:"gang",铁:"tie",包:"bao",钢:"gang",股:"gu",份:"fen",马:"ma",钢:"gang",股:"gu",份:"fen",新:"xin",钢:"gang",钒:"fan",钛:"tai",西:"xi",宁:"ning",特:"te",钢:"gang",河:"he",钢:"gang",股:"gu",份:"fen",太:"tai",钢:"gang",不:"bu",锈:"xiu",方:"fang",大:"da",特:"te",钢:"gang",南:"nan",钢:"gang",股:"gu",份:"fen",华:"hua",菱:"ling",钢:"gang",管:"guan",中:"zhong",国:"guo",石:"shi",油:"you",股:"gu",份:"fen",中:"zhong",国:"guo",石:"shi",化:"hua",股:"gu",份:"fen",中:"zhong",国:"guo",海:"hai",油:"you",服:"fu",中:"zhong",国:"guo",石:"shi",油:"you",工:"gong",程:"cheng",海:"hai",油:"you",工:"gong",程:"cheng",荣:"rong",盛:"sheng",石:"shi",化:"hua",恒:"heng",逸:"yi",石:"shi",化:"hua",广:"guang",汇:"hui",能:"neng",源:"yuan",长:"chang",春:"chun",高:"gao",新:"xin",赣:"gan",锋:"feng",稀:"xi",土:"tu",北:"bei",方:"fang",稀:"xi",土:"tu",盛:"sheng",和:"he",资:"zi",源:"yuan",中:"zhong",国:"guo",稀:"xi",土:"tu",山:"shan",东:"dong",黄:"huang",金:"jin",中:"zhong",金:"jin",黄:"huang",金:"jin",招:"zhao",商:"shang",银:"yin",行:"hang",兴:"xing",业:"ye",银:"yin",行:"hang",浦:"pu",发:"fa",银:"yin",行:"hang",平:"ping",安:"an",银:"yin",行:"hang",民:"min",生:"sheng",银:"yin",行:"hang",华:"hua",夏:"xia",银:"yin",行:"hang",中:"zhong",国:"guo",银:"yin",行:"hang",中:"zhong",信:"xin",银:"yin",行:"hang",交:"jiao",通:"tong",银:"yin",行:"hang",北:"bei",京:"jing",银:"yin",行:"hang",宁:"ning",波:"bo",银:"yin",行:"hang",苏:"su",州:"zhou",银:"yin",行:"hang",南:"nan",京:"jing",银:"yin",行:"hang",青:"qing",岛:"dao",银:"yin",行:"hang",杭:"hang",州:"zhou",银:"yin",行:"hang",重:"chong",庆:"qing",银:"yin",行:"hang",成:"cheng",都:"du",银:"yin",行:"hang",贵:"gui",阳:"yang",银:"yin",行:"hang",长:"chang",沙:"sha",银:"yin",行:"hang",浙:"zhe",江:"jiang",银:"yin",行:"hang",东:"dong",方:"fang",财:"cai",富:"fu",民:"min",生:"sheng",银:"yin",行:"hang"},t=[{code:"600519.SH",name:"贵州茅台"},{code:"000001.SZ",name:"平安银行"},{code:"600036.SH",name:"招商银行"},{code:"000858.SZ",name:"五粮液"},{code:"601088.SH",name:"中国神华"},{code:"601318.SH",name:"中国平安"},{code:"000651.SZ",name:"格力电器"},{code:"600900.SH",name:"长江电力"},{code:"000333.SZ",name:"美的集团"},{code:"600030.SH",name:"中信证券"},{code:"300750.SZ",name:"宁德时代"},{code:"600276.SH",name:"恒瑞医药"},{code:"601012.SH",name:"隆基绿能"},{code:"600887.SH",name:"伊利股份"},{code:"000725.SZ",name:"京东方A"},{code:"601398.SH",name:"工商银行"},{code:"600028.SH",name:"中国石化"},{code:"601857.SH",name:"中国石油"},{code:"600048.SH",name:"保利发展"},{code:"002594.SZ",name:"比亚迪"}];let g=[];function e(S){const P=String(S||"");let F="";for(const q of P){const r=a[q];r?F+=r.charAt(0):/[a-zA-Z0-9]/.test(q)&&(F+=q.toLowerCase())}return F}function u(S){const P=String(S||"");let F="";for(const q of P){const r=a[q];r?F+=r:/[a-zA-Z0-9]/.test(q)&&(F+=q.toLowerCase())}return F}function f(S){return String(S||"").trim().toLowerCase()}function I(S,P){const F=(P.code||"").toLowerCase();return/^\d+$/.test(S)?F.indexOf(S)!==-1:/[\u4e00-\u9fa5]/.test(S)?(P.name||"").toLowerCase().indexOf(S)!==-1:F.indexOf(S)!==-1||(P.initials||e(P.name)).indexOf(S)!==-1||(P.pinyin||u(P.name)).indexOf(S)!==-1}function h(S){const P={},F=[],q=function(r,i,m){!r||P[r]||(P[r]=!0,F.push({code:r,name:i||r,source:m||"core",initials:e(i||r),pinyin:u(i||r)}))};return t.forEach(function(r){q(r.code,r.name,"core")}),(S||[]).forEach(function(r){q(r.code,r.name,"extra")}),F}function d(S,P){const F=f(S);if(!F||!P||!P.length)return[];const q=F.split(/[\s,，、;；]+/).filter(Boolean);return q.length?P.filter(function(r){return q.every(function(i){return I(i,r)})}).slice(0,20).map(function(r){return{code:r.code,name:r.name,source:r.source||"core"}}):[]}function k(S){Array.isArray(S)&&(g=g.concat(S))}function l(){return g.slice()}function C(){return h(g)}function x(S){return d(S,C())}const D={CHAR_PINYIN:a,CORE_STOCKS:t,toPinyinInitials:e,toPinyin:u,normalizeQuery:f,matchToken:I,buildStockIndex:h,searchStocksByQuery:d,registerExtraStocks:k,getExtraStocks:l,getStockIndex:C,searchCoreStocks:x};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.pinyin=D),D});(function(a,t){typeof je=="object"&&je.exports?je.exports=t():a.QuantPreferences=t()})(typeof self<"u"?self:void 0,function(){const a="quant_preferences",t={default_view:"strategies",theme:"system",theme_hue:45,chart_period:"daily",language:"zh-CN",info_density:"comfortable",kline_show_minutes:"hide"},g=["default_view","theme","theme_hue","chart_period","language","info_density","kline_show_minutes"],e={default_view:["strategies","calendar","ai","research","system"],theme:["light","dark","system"],chart_period:["daily","weekly","monthly"],language:["zh-CN","en","ja","ko","zh-TW"],info_density:["comfortable","compact","spacious"],kline_show_minutes:["hide","show"]};function u(i){return i=parseInt(i,10),!isNaN(i)&&i>=0&&i<=360}const f={light:"classic-white",dark:"dark-pro"};function I(){if(typeof localStorage>"u")return{};try{const i=localStorage.getItem(a);if(!i)return{};const m=JSON.parse(i);return m&&typeof m=="object"?m:{}}catch{return{}}}function h(i){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(i))}catch{}}function d(){return typeof localStorage>"u"?!1:!!localStorage.getItem("quant_token")}function k(){const i=Object.assign({},t,I()),m={};return g.forEach(function(H){const O=i[H];m[H]=H==="theme_hue"?u(O)?parseInt(O,10):t[H]:e[H].indexOf(O)!==-1?O:t[H]}),m}function l(i){if(g.indexOf(i)!==-1)return k()[i]}function C(i,m){return g.indexOf(i)===-1?!1:i==="theme_hue"?u(m):e[i].indexOf(m)!==-1}function x(i,m){if(!C(i,m))return!1;const H=I();return H[i]=m,h(H),d()&&S({[i]:m}),!0}function D(i){if(!i||typeof i!="object")return!1;const m={};if(Object.keys(i).forEach(function(O){C(O,i[O])&&(m[O]=i[O])}),!Object.keys(m).length)return!1;const H=Object.assign({},I(),m);return h(H),d()&&S(m),!0}function S(i){if(!(typeof fetch>"u"))try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:i})}).catch(function(){})}catch{}}async function P(){const i=k();if(!d()||typeof fetch>"u")return i;try{const m=await fetch("/api/user_config/preferences");if(m.ok){const H=await m.json();if(H.success&&H.preferences){const O=H.preferences;g.forEach(function(K){e[K].indexOf(O[K])!==-1&&(i[K]=O[K])}),h(i)}}}catch{}return i}function F(i){const m=i||l("info_density")||"comfortable",H=e.info_density.indexOf(m)!==-1?m:"comfortable";return typeof document>"u"||document.documentElement.setAttribute("data-density",H),H}function q(i){const m=i||l("theme")||"system";if(m==="system"){let H=!1;return typeof window<"u"&&window.matchMedia&&(H=window.matchMedia("(prefers-color-scheme: dark)").matches),H?"dark":"light"}return m==="dark"||m==="light"?m:"light"}const r={PREFERENCES_KEY:a,PREFERENCE_DEFAULTS:t,PREFERENCE_KEYS:g,PREFERENCE_VALUES:e,THEME_MODE_TO_THEME:f,getLocal:k,getPreference:l,isValidValue:C,setPreference:x,setPreferences:D,saveToBackend:S,loadPreferences:P,resolveTheme:q,applyDensity:F};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.preferences=r),r});(function(a,t){typeof je=="object"&&je.exports?je.exports=t():a.QuantRecent=t()})(typeof self<"u"?self:void 0,function(){const a="quant_recent_viewed";function g(){if(typeof localStorage>"u")return[];try{const k=localStorage.getItem(a);if(!k)return[];const l=JSON.parse(k);return Array.isArray(l)?l:[]}catch{return[]}}function e(k){if(!(typeof localStorage>"u"))try{localStorage.setItem(a,JSON.stringify(k))}catch{}}function u(k,l){if(!k)return!1;let C=g().filter(function(x){return x.code!==k});return C.unshift({code:k,name:(l||"").toString().slice(0,32),ts:Date.now()}),C.length>10&&(C=C.slice(0,10)),e(C),!0}function f(){return g().slice(0,10)}function I(k){e(g().filter(function(l){return l.code!==k}))}function h(){e([])}const d={RECENT_VIEWED_KEY:a,RECENT_MAX:10,recordViewed:u,getRecentViewed:f,removeRecent:I,clearRecent:h};return typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.recent=d),d});(function(){const a=typeof Vue<"u"?Vue:{},{ref:t,computed:g,watch:e,onMounted:u,nextTick:f}=a;function I(c,M={}){if(typeof c=="string"&&c.startsWith("/api/")){const p=localStorage.getItem("quant_token");if(p)return{...M,headers:{...M.headers||{},Authorization:"Bearer "+p}}}return M}async function h(c,M={}){const p=I(c,M),W={"Content-Type":"application/json",...p.headers},ue=(M.method||"GET").toUpperCase(),te=ue+"|"+c,T=async()=>{const G=await fetch(c,{...p,headers:W});if(G.status===401)throw localStorage.removeItem("quant_token"),localStorage.removeItem("quant_user"),window.location.reload(),new Error("登录已过期");if(!G.ok){let re="";try{const fe=await G.json();re=fe&&fe.detail||""}catch{}throw Object.assign(new Error(re||"请求失败（HTTP "+G.status+"）"),{status:G.status})}return await G.json()};try{const G=M.noLoading?T:()=>m(T);return ue==="GET"&&!M.noDedupe?await F(te,G):await G()}catch(G){throw G.message==="登录已过期"?G:(console.error("[apiFetch] "+c+":",G.message),Object.assign(G,{_formatted:H(G,G.status)}))}}function d(){return new Date().toISOString().split("T")[0]}function k(c){return c?c.split("T")[0]:""}function l(c,M="info",p=3e3){let W=document.querySelector(".toast-container");W||(W=document.createElement("div"),W.className="toast-container",document.body.appendChild(W));const ue=document.createElement("div");ue.className=`toast toast-${M}`,ue.textContent=c,W.appendChild(ue),setTimeout(()=>{ue.classList.add("leaving"),setTimeout(()=>ue.remove(),300)},p)}function C(c,M=300){let p;return function(...W){clearTimeout(p),p=setTimeout(()=>c.apply(this,W),M)}}function x(c,M=300){let p=!1;return function(...W){p||(c.apply(this,W),p=!0,setTimeout(()=>{p=!1},M))}}async function D(c,M=3e3,p=""){const W=new Promise((ue,te)=>setTimeout(()=>te(new Error("timeout")),M));try{return await Promise.race([c,W])}catch(ue){console.warn(`[timeout] ${p||"task"} failed:`,ue.message)}}const S=new Map;function P(){return S.clear(),!0}function F(c,M){if(!c||typeof M!="function")return Promise.reject(new Error("bad dedupe args"));if(S.has(c))return S.get(c);const p=Promise.resolve().then(M).finally(()=>{S.delete(c)});return S.set(c,p),p}let q=0;function r(){return q=0,!0}function i(){return q}async function m(c){q++;try{return await c()}finally{q--}}function H(c,M){if(!c)return"请求失败";if(c&&typeof c=="object"&&c.detail)return String(c.detail);if(typeof c=="string"&&c)return c;if(c&&c.message){const p=String(c.message);return/Failed to fetch|fetch failed|networkerror/i.test(p)?"网络连接失败，请检查网络后重试":p}return M?"请求失败（HTTP "+M+"）":"请求失败"}function O(c,M){if(c===M)return!0;try{return JSON.stringify(c)===JSON.stringify(M)}catch{return!1}}function K(c,M,p){const W=(c||"GET").toUpperCase();let ue="";if(p)try{const te={};Object.keys(p).sort().forEach(T=>{te[T]=p[T]}),ue=JSON.stringify(te)}catch{ue=""}return W+"|"+M+"|"+ue}class s{constructor(){this._map=new Map,this._exp=new Map}get(M){const p=this._exp.get(M);if(p!=null){if(Date.now()>p){this.delete(M);return}return this._map.get(M)}}set(M,p,W){return this._map.set(M,p),this._exp.set(M,Date.now()+(W>0?W:-1)),p}delete(M){this._map.delete(M),this._exp.delete(M)}clear(){this._map.clear(),this._exp.clear()}has(M){return this.get(M)!==void 0}get size(){return this._map.size}}function J(c){const M=new s,p=c!=null&&c>0?c:15e3;return{store:M,defaultTtl:p,get:W=>M.get(W),set:(W,ue,te)=>M.set(W,ue,te??p),delete:W=>M.delete(W),clear:()=>M.clear(),size:()=>M.size}}const o=new Set;async function y(c){const M=c&&c.cache,p=c&&c.key,W=c&&(c.fetchFn||c.fetcher),ue=c&&c.ttl;if(!M||!p||typeof W!="function")return{ok:!1,changed:!1,skipped:!0,fresh:null};if(o.has(p))return{ok:!1,changed:!1,skipped:!0,fresh:null};o.add(p);try{const te=M.get(p);let T;try{T=await W()}catch(re){return c.onError&&c.onError(re),{ok:!1,changed:!1,fresh:null}}const G=te!==void 0&&!O(te,T);return M.set(p,T,ue),c.apply&&c.apply(T,te),te!==void 0&&(G?c.onChanged&&c.onChanged(T,te):c.onUnchanged&&c.onUnchanged(T,te)),{ok:!0,changed:G,fresh:T}}finally{o.delete(p)}}const L=["B","STRONG","EM","I","CODE","PRE","P","UL","OL","LI","H2","H3","H4","A","BR","TABLE","THEAD","TBODY","TR","TH","TD","SPAN","DIV","BLOCKQUOTE","HR","SVG","G","PATH","RECT","CIRCLE","POLYGON","POLYLINE","LINE","ELLIPSE","TEXT","TSPAN","DEFS","USE","MARKER","SYMBOL"];function z(c,M={}){if(c==null)return"";const p=M&&M.allow||L,W=new Set(p.map(G=>String(G).toUpperCase()));let ue;try{ue=new DOMParser().parseFromString(String(c),"text/html")}catch{return String(c).replace(/[<>&]/g,re=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[re])}const te=ue.body||ue;function T(G){Array.from(G.childNodes).forEach(re=>{if(re.nodeType===1){const fe=String(re.tagName).toUpperCase();if(W.has(fe))Array.from(re.attributes).forEach(Te=>{const Z=Te.name.toLowerCase(),de=(Te.value||"").trim().toLowerCase();(Z.startsWith("on")||(Z==="href"||Z==="src"||Z==="xlink:href")&&de.startsWith("javascript:")||Z==="style"&&/(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(de))&&re.removeAttribute(Te.name),Z==="href"&&!/^(https?:|mailto:|#|\/)/.test(de)&&re.removeAttribute("href")}),fe==="A"&&re.setAttribute("rel","noopener noreferrer"),T(re);else{const Te=re.parentNode;for(;re.firstChild;)Te.insertBefore(re.firstChild,re);Te.removeChild(re)}}else if(re.nodeType!==3){if(re.nodeType===8)re.parentNode&&re.parentNode.removeChild(re);else if(re.nodeType===4){const fe=ue.createTextNode(re.nodeValue||"");re.parentNode&&re.parentNode.replaceChild(fe,re)}}})}return T(te),te.innerHTML}const ee="/api/openapi",Y="/api/market/ws/quotes",$=1,R=2.5,j="数据不可达",A="实时不可用，不刷新";function w(){const c=typeof location<"u"&&location.protocol==="https:"?"wss:":"ws:",M=typeof location<"u"?location.host:"localhost:8001";return c+"//"+M+Y}function E(c,M){if(!c)return null;const p=M||{riseSpeed:$,volumeRatio:R},W=p.riseSpeed!=null?p.riseSpeed:$,ue=p.volumeRatio!=null?p.volumeRatio:R,te=parseFloat(c.rise_speed);if(!isNaN(te)&&Math.abs(te)>W)return te>0?"涨速预警":"跌速预警";const T=parseFloat(c.volume_ratio);return!isNaN(T)&&T>ue?"放量预警":null}function oe(c){const M=Number(c);return c==null||isNaN(M)?null:M}const b={apiFetch:h,withAuthHeaders:I,getToday:d,formatDate:k,withTimeout:D,showToast:l,debounce:C,throttle:x,resetInFlight:P,dedupeRequest:F,resetLoading:r,loadingCount:i,withLoading:m,formatApiError:H,jsonEquals:O,makeCacheKey:K,CacheStore:s,createTtlCache:J,silentRefresh:y,sanitizeHtml:z,OPENAPI_ROUTE_BASE:ee,REALTIME_WS_PATH:Y,WARN_RISE_SPEED_THRESHOLD:$,WARN_VOLUME_RATIO_THRESHOLD:R,REALTIME_DEGRADED_TEXT:j,REALTIME_FALLBACK_TEXT:A,buildRealtimeWsUrl:w,checkQuoteWarning:E,quoteFmt:{price:function(c){const M=oe(c);return M===null?"--":M.toFixed(2)},pct:function(c){const M=oe(c);return M===null?"--":(M>0?"+":"")+M.toFixed(2)+"%"},num:function(c){const M=oe(c);return M===null?"--":M.toFixed(2)},color:function(c){const M=c?c.change_pct:null,p=oe(M);return p===null?"":p>=0?"var(--color-rise)":"var(--color-fall)"}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.core=b),typeof je<"u"&&je.exports&&(je.exports=b)})();(function(a,t){typeof je=="object"&&je.exports?je.exports=t():a.QuantTabsCore=t()})(typeof self<"u"?self:void 0,function(){var a=8;function t(C,x){return C+"/"+x}function g(C,x,D,S){var P=C[x]||[],F=P.findIndex(function(i){return i.subPage===D});if(F!==-1)return{groups:C,activeKey:t(x,D)};var q=P.concat([{subPage:D,title:S}]);q.length>a&&(q=u(q));var r=Object.assign({},C,e({},x,q));return{groups:r,activeKey:t(x,D)}}function e(C,x,D){return C[x]=D,C}function u(C){if(C.length<=a)return C;var x=C.length>1?1:0;return C.filter(function(D,S){return S!==x})}function f(C,x,D,S){var P=C[x]||[],F=P.findIndex(function(m){return m.subPage===D});if(F===-1)return{groups:C,nextActive:null};var q=P.filter(function(m){return m.subPage!==D}),r=Object.assign({},C,e({},x,q)),i=null;return D===S&&(q[F]?i=q[F].subPage:q[F-1]?i=q[F-1].subPage:i=null),{groups:r,nextActive:i}}function I(C){return C&&C.length?C[0]:""}function h(C,x){return C[x]||[]}function d(C,x,D){var S=C[x]||[],P=S.filter(function(q){return q.subPage===D}),F=Object.assign({},C,e({},x,P));return{groups:F,activeKey:P.length?t(x,P[0].subPage):null}}function k(C,x){var D=Object.assign({},C,e({},x,[]));return{groups:D,activeKey:null}}function l(C,x,D,S){var P=(C[x]||[]).slice();if(D<0||D>=P.length)return{groups:C};var F=P.splice(D,1)[0];return P.splice(Math.max(0,Math.min(S,P.length)),0,F),{groups:Object.assign({},C,e({},x,P))}}return{MAX_TABS:a,openTab:g,closeTab:f,getDefaultTab:I,tabsOf:h,evictOldest:u,closeOthers:d,closeAll:k,reorder:l,keyOf:t}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var on=typeof je=="object"&&je.exports?je.exports:typeof self<"u"&&self.QuantTabsCore?self.QuantTabsCore:window.QuantTabsCore||null;on&&(window.__quantModules.tabsCore=on)}(function(a,t){typeof je=="object"&&je.exports?je.exports=t():a.QuantNavModeCore=t()})(typeof self<"u"?self:void 0,function(){var a=["subnav","tree","toptab"],t="toptab",g="nav_mode";function e(l){return a.indexOf(l)!==-1?l:t}function u(l){return e(l)==="subnav"}function f(l){return e(l)==="tree"}function I(l){return e(l)==="toptab"}function h(){return typeof window<"u"&&window.localStorage?window.localStorage:null}function d(){var l=h(),C=t;if(l)try{C=e(l.getItem(g))}catch{}return{navMode:C}}function k(l){var C=h();if(!(!C||!l))try{l.navMode!==void 0&&C.setItem(g,e(l.navMode))}catch{}}return{NAV_MODES:a,DEFAULT_NAV_MODE:t,normalizeNavMode:e,subnavVisible:u,treeChildrenVisible:f,topTabsVisible:I,readPrefs:d,writePrefs:k}});if(typeof window<"u"){window.__quantModules||(window.__quantModules={});var rn=typeof je=="object"&&je.exports?je.exports:typeof self<"u"&&self.QuantNavModeCore?self.QuantNavModeCore:window.QuantNavModeCore||null;rn&&(window.__quantModules.navModeCore=rn)}(function(){function t(w,E){if(!Array.isArray(w)||w.length<=E)return w;const oe=[],U=w.length/E*2;for(let b=0;b<w.length;b+=U){const c=Math.floor(b),M=Math.min(w.length,Math.ceil(b+U));let p=1/0,W=-1,ue=-1/0,te=-1;for(let T=c;T<M;T++){const G=w[T];if(!G)continue;const re=G[3]!=null?Number(G[3]):1/0,fe=G[4]!=null?Number(G[4]):-1/0;re<p&&(p=re,W=T),fe>ue&&(ue=fe,te=T)}W>=0&&oe.push(w[W]),te>=0&&te!==W&&oe.push(w[te])}return oe}let g=null;function e(){return typeof echarts<"u"?Promise.resolve():(g||(g=new Promise(function(w,E){const oe=document.createElement("script");oe.src="/static/lib/echarts.min.js",oe.async=!0,oe.onload=function(){typeof echarts<"u"?w():E(new Error("echarts 加载后未定义"))},oe.onerror=function(){E(new Error("echarts.min.js 加载失败"))},document.head.appendChild(oe)})),g)}function u(){const w=getComputedStyle(document.documentElement);return{primary:w.getPropertyValue("--primary-color").trim()||"#2563eb",up:w.getPropertyValue("--color-up").trim()||"#43e97b",down:w.getPropertyValue("--color-down").trim()||"#fa709a",textSecondary:w.getPropertyValue("--text-secondary").trim()||"#6b7280",borderLight:w.getPropertyValue("--border-light").trim()||"#e5e7eb"}}const f=w=>(getComputedStyle(document.documentElement).getPropertyValue(w)||"").trim();function I(){return{up:f("--color-up")||"#E63946",down:f("--color-down")||"#2E7D32",neutral:f("--color-neutral")||"#43a047",accent:f("--color-accent")||"#F59E0B",risk:f("--color-danger")||"#C62828",warn:f("--color-warning")||"#FF9800",success:f("--color-success")||"#4CAF50",primary:f("--qc-primary-600")||"#b8922a",grid:f("--chart-split")||"#e2e8f0",axis:f("--chart-axis")||"#cbd5e1",bg:f("--chart-bg")||"transparent",series:[f("--qc-primary-600")||"#b8922a",f("--qc-primary-500")||"#c49b2e",f("--qc-primary-700")||"#8f6f1f",f("--qc-primary-400")||"#d4b352",f("--color-up")||"#E63946",f("--color-down")||"#2E7D32",f("--color-accent")||"#F59E0B",f("--qc-neutral-400")||"#b8ae9f"]}}function h(w,E,oe,U=!1,b=!1){if(!E||E.length===0)return;E.length>2e3&&(E=t(E,2e3));const c=E.map(pe=>typeof pe[0]=="string"&&pe[0].indexOf("-")>=0?pe[0]:pe[0].slice(0,4)+"-"+pe[0].slice(4,6)+"-"+pe[0].slice(6,8)),M=u(),p={ma5:f("--color-accent")||"#F59E0B",ma10:f("--color-primary")||"#3B82F6",ma20:f("--color-warning")||"#8B5CF6",ma60:f("--color-success")||"#10B981"},W=E.map(pe=>[pe[1],pe[2],pe[3],pe[4]]),ue=E.map(pe=>pe[5]),te=E.map(pe=>pe[6]),T=E.map(pe=>pe[7]),G=E.map(pe=>pe[8]),re=E.map(pe=>pe[9]),fe=E.map(pe=>pe[10]),Z=(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().match(/^#[0-9a-fA-F]{6}$/)?parseInt(getComputedStyle(document.documentElement).getPropertyValue("--bg-card").trim().slice(1,3),16)<80:!1)?"rgba(30,41,59,0.96)":"rgba(255,255,255,0.96)",de=M.borderLight,me={backgroundColor:"transparent",tooltip:{trigger:"axis",triggerOn:"mousemove|click",confine:!0,axisPointer:{type:"cross",snap:!0,z:100,link:[{xAxisIndex:"all"}],label:{backgroundColor:M.primary,color:"#ffffff",fontWeight:600,fontSize:11}},backgroundColor:Z,borderColor:de,textStyle:{color:M.textSecondary,fontSize:12},formatter:function(pe){if(!pe||!pe.length)return"";const ye=pe[0].dataIndex,ae=E[ye];if(!ae)return"";const xe=w.getOption(),Pe=xe.legend&&xe.legend[0]&&xe.legend[0].selected||{},ne=Ie=>Pe[Ie]!==!1,se=Ie=>Ie==null||isNaN(Ie)?"--":Number(Ie).toFixed(2),be=Ie=>Ie==null||isNaN(Ie)?"--":(Number(Ie)/1e4).toFixed(2)+"万手",Ne=['<div style="font-weight:600;color:'+M.textSecondary+';">'+c[ye]+"</div>"];return Ne.push("开: "+se(ae[1])+"　收: "+se(ae[2])),Ne.push("低: "+se(ae[3])+"　高: "+se(ae[4])),Ne.push("成交量: "+be(ae[5])),ae[6]!=null&&ne("MA5")&&Ne.push("MA5: "+se(ae[6])),ae[7]!=null&&ne("MA10")&&Ne.push("MA10: "+se(ae[7])),ae[8]!=null&&ne("MA20")&&Ne.push("MA20: "+se(ae[8])),ae[9]!=null&&ne("MA60")&&Ne.push("MA60: "+se(ae[9])),ae[10]!=null&&Ne.push("VOL_MA5: "+be(ae[10])),Ne.join("<br/>")}},legend:{data:["K线","MA5","MA10","MA20","MA60"],type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,selected:{K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0},top:b?0:8,textStyle:{color:M.textSecondary,fontSize:11}},grid:[{left:56,right:16,top:b?30:40,height:b?"48%":"52%"},{left:56,right:16,top:b?"62%":"68%",height:"18%"}],xAxis:[{type:"category",data:c,boundaryGap:!0,axisLine:{lineStyle:{color:de}},axisLabel:{color:M.textSecondary,fontSize:11},splitLine:{show:!1}},{type:"category",gridIndex:1,data:c,axisLabel:{show:!1},axisLine:{lineStyle:{color:de}}}],yAxis:[{scale:!0,axisLine:{lineStyle:{color:de}},axisLabel:{color:M.textSecondary,fontSize:11,formatter:function(pe){const ye=Math.round(pe*100)/100;return ye%1===0?String(Math.round(ye)):ye.toFixed(2)}},splitLine:{lineStyle:{color:de,type:"dashed"}}},{gridIndex:1,axisLabel:{show:!1},splitLine:{show:!1},axisLine:{lineStyle:{color:de}}}],dataZoom:[{type:"inside",xAxisIndex:[0,1],start:Math.max(0,100-Math.min(120,E.length)*3),end:100},{type:"slider",xAxisIndex:[0,1],bottom:0,height:18,borderColor:de,textStyle:{color:M.textSecondary,fontSize:10}}],series:[{name:"K线",type:"candlestick",data:W,itemStyle:{color:M.up,color0:M.down,borderColor:M.up,borderColor0:M.down}},{name:"MA5",type:"line",data:te,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:p.ma5}},{name:"MA10",type:"line",data:T,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:p.ma10}},{name:"MA20",type:"line",data:G,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:p.ma20}},{name:"MA60",type:"line",data:re,smooth:!0,symbol:"none",lineStyle:{width:1.2,color:p.ma60}},{name:"成交量",type:"bar",xAxisIndex:1,yAxisIndex:1,data:ue,itemStyle:{color:function(pe){const ye=pe.dataIndex;return E[ye][1]>=E[ye][2]?M.up:M.down}}},{name:"VOL_MA5",type:"line",xAxisIndex:1,yAxisIndex:1,data:fe,smooth:!0,symbol:"none",lineStyle:{width:1,color:p.ma5,type:"dashed"}}]};w.setOption(me,!0)}const d=new Map;function k(w){return d.has(w)||d.set(w,{chart:null,cache:null}),d.get(w)}async function l(w,E,oe,U=!1,b={}){await e();const c=k(w);let M=document.getElementById(w);if(!M)for(let p=0;p<16&&(await new Promise(W=>setTimeout(W,50)),M=document.getElementById(w),!M);p++);if(!M)throw new Error("无法找到图表容器: "+w);if(M.offsetWidth<50&&(M.style.minWidth="600px",M.style.minHeight="300px"),!c.chart||c.chart.isDisposed()||c.chart.getDom()!==M){if(c.chart)try{c.chart.dispose()}catch{}c.chart=echarts.init(M),c.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const p=b.onLegend;typeof p=="function"&&c.chart.on("legendselectchanged",W=>{W&&W.selected&&p(W.selected)})}return h(c.chart,E,oe,U,!!b.isMobile),c.cache={data:E,period:oe,isIndex:U,isMobile:!!b.isMobile},c.chart}function C(w){const E=d.get(w);E&&E.chart&&(E.chart.dispose(),E.chart=null,E.cache=null)}function x(w){const E=d.get(w);E&&E.chart&&E.chart.resize()}function D(w,E){const oe=d.get(w),U=oe&&oe.chart;if(U)if(E<=0)U.dispatchAction({type:"dataZoom",start:0,end:100});else{const M=Math.max(0,(60-E)/60*100);U.dispatchAction({type:"dataZoom",start:Math.round(M),end:100})}}function S(w){var U,b,c;const E=d.get(w);if(!E||!E.chart||!E.cache||E.chart.isDisposed())return;const oe=((c=(b=(U=E.chart.getOption())==null?void 0:U.legend)==null?void 0:b[0])==null?void 0:c.selected)||null;h(E.chart,E.cache.data,E.cache.period,E.cache.isIndex,E.cache.isMobile),oe&&E.chart.setOption({legend:{selected:oe}})}function P(w){const E=d.get(w);return E&&E.chart}const F=new Map;function q(w){return F.has(w)||F.set(w,{chart:null,cache:null}),F.get(w)}function r(w,E,oe={}){return e().then(function(){const U=q(w),b=document.getElementById(w);if(!b)throw new Error("无法找到图表容器: "+w);if(b.offsetWidth<50&&(b.style.minWidth="600px",b.style.minHeight="300px"),U.chart&&U.chart.getDom&&U.chart.getDom()!==b){try{U.chart.dispose()}catch{}U.chart=null}U.chart||(U.chart=echarts.init(b),U.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),U.resizeBound||(U.resizeBound=!0,window.addEventListener("resize",function(){U.chart&&!U.chart.isDisposed()&&U.chart.resize()})));const c=typeof E=="function"?E():E;return U.chart.setOption(c,!0),U.cache={buildOption:E,key:oe.key||""},U.chart})}function i(w){var b,c,M;const E=F.get(w);if(!E||!E.chart||!E.cache||E.chart.isDisposed())return;const oe=((M=(c=(b=E.chart.getOption())==null?void 0:b.legend)==null?void 0:c[0])==null?void 0:M.selected)||null,U=typeof E.cache.buildOption=="function"?E.cache.buildOption():E.cache.buildOption;E.chart.setOption(U,!0),oe&&U&&U.legend&&U.legend.selected&&E.chart.setOption({legend:{selected:oe}})}function m(w){const E=F.get(w);E&&E.chart&&(E.chart.dispose(),E.chart=null,E.cache=null)}function H(w){const E=F.get(w);E&&E.chart&&E.chart.resize()}const O=new Map;function K(w){return O.has(w)||O.set(w,{chart:null,cache:null}),O.get(w)}function s(w,E,oe={}){return e().then(function(){const U=K(w),b=document.getElementById(w);if(!b)return null;if(b.offsetWidth<50&&(b.style.minWidth="600px",b.style.minHeight="300px"),U.chart&&U.chart.getDom&&U.chart.getDom()!==b){try{U.chart.dispose()}catch{}U.chart=null}U.chart||(U.chart=echarts.init(b),U.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme()),U.resizeBound||(U.resizeBound=!0,window.addEventListener("resize",function(){U.chart&&!U.chart.isDisposed()&&U.chart.resize()})));const c=typeof E=="function"?E():E;return U.chart.setOption(c,!0),U.cache={buildOption:E,key:oe.key||""},U.chart})}function J(w){const E=O.get(w);if(!E||!E.chart||!E.cache||E.chart.isDisposed())return;const oe=typeof E.cache.buildOption=="function"?E.cache.buildOption():E.cache.buildOption;E.chart.setOption(oe,!0)}function o(w){const E=O.get(w);E&&E.chart&&(E.chart.dispose(),E.chart=null,E.cache=null)}function y(w){const E=O.get(w);E&&E.chart&&E.chart.resize()}const L=s,z=J,ee=o,Y=y;function $(w,E,oe,U){U=U||{};const b=U.drawdownColor||"#C62828";return{tooltip:{trigger:"axis"},legend:{data:[U.navLabel||"净值",U.ddLabel||"回撤"]},grid:{left:48,right:48,top:32,bottom:28},xAxis:{type:"category",data:oe||[],boundaryGap:!1},yAxis:[{type:"value",scale:!0,name:U.navName||"净值",axisLabel:{formatter:"{value}"}},{type:"value",name:U.ddName||"回撤%",axisLabel:{formatter:"{value}%"}}],series:[{name:U.navLabel||"净值",type:"line",data:w||[],showSymbol:!1,smooth:!0,lineStyle:{width:2}},{name:U.ddLabel||"回撤",type:"line",yAxisIndex:1,data:E||[],showSymbol:!1,areaStyle:{opacity:.25,color:b},lineStyle:{color:b,type:"solid",width:1.5}}]}}function R(w,E){E=E||{};const oe=E.bandColor||"#1976d2",U=w&&w.dates||[],b=w&&w.median||[],c=w&&w.q25||[],M=w&&w.q75||[];return{tooltip:{trigger:"axis"},legend:{data:[E.medianLabel||"中位IC",E.bandLabel||"25–75分位"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:U,boundaryGap:!1},yAxis:{type:"value",name:"IC",axisLabel:{formatter:"{value}"}},series:[{name:E.medianLabel||"中位IC",type:"line",data:b,showSymbol:!1,lineStyle:{width:2,color:oe}},{name:E.bandLabel||"25–75分位",type:"line",data:c,showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:oe,opacity:.12}},{name:"_bandH",type:"line",data:M.map(function(p,W){return p-(c[W]||0)}),showSymbol:!1,lineStyle:{opacity:0},stack:"ic-band",areaStyle:{color:oe,opacity:.12}}]}}function j(w,E){E=E||{};const oe=E.color||"#7c3aed",U=w&&w.dates||[],b=w&&w.value||[],c=w&&w.upper||[],M=w&&w.lower||[];return{tooltip:{trigger:"axis"},legend:{data:[E.valueLabel||"情绪",E.bandLabel||"过热/冰点带"]},grid:{left:48,right:32,top:32,bottom:28},xAxis:{type:"category",data:U,boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{formatter:"{value}"}},series:[{name:E.valueLabel||"情绪",type:"line",data:b,showSymbol:!1,smooth:!0,lineStyle:{width:2.5,color:oe}},{name:E.bandLabel||"过热/冰点带",type:"line",data:c,showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:oe,opacity:.1}},{name:"_bandL",type:"line",data:M.map(function(p,W){return(c[W]||0)-p}),showSymbol:!1,lineStyle:{opacity:0},stack:"senti-band",areaStyle:{color:oe,opacity:.1}}]}}const A={renderKlineChart:h,renderKlineTo:l,disposeKline:C,resizeKline:x,zoomKline:D,redrawKline:S,getKlineChart:P,renderBacktestTo:r,redrawBacktest:i,disposeBacktest:m,resizeBacktest:H,renderPortfolioTo:s,redrawPortfolio:J,disposePortfolio:o,resizePortfolio:y,renderSimpleChartTo:L,redrawSimpleChart:z,disposeSimpleChart:ee,resizeSimpleChart:Y,buildNavDrawdownOption:$,buildIcBandOption:R,buildSentimentBandOption:j,downsampleSeries:t,ensureEcharts:e,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:I,init(){return{renderKlineChart:h,renderKlineTo:l,disposeKline:C,resizeKline:x,zoomKline:D,redrawKline:S,getKlineChart:P,renderBacktestTo:r,redrawBacktest:i,disposeBacktest:m,resizeBacktest:H,renderPortfolioTo:s,redrawPortfolio:J,disposePortfolio:o,resizePortfolio:y,renderSimpleChartTo:L,redrawSimpleChart:z,disposeSimpleChart:ee,resizeSimpleChart:Y,buildNavDrawdownOption:$,buildIcBandOption:R,buildSentimentBandOption:j,downsampleSeries:t,ensureEcharts:e,KLINE_MAX_RENDER_POINTS:2e3,chartPalette:I}}};typeof window<"u"&&(window.__quantModules||(window.__quantModules={}),window.__quantModules.charts=A),typeof je<"u"&&je.exports&&(je.exports={downsampleSeries:t,KLINE_MAX_RENDER_POINTS:2e3,buildNavDrawdownOption:$,buildIcBandOption:R,buildSentimentBandOption:j})})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.ai={create(a){const{ref:t,computed:g}=Vue,{configChanged:e,consensus:u}=a,f=t(null),I=t(""),h=t(null),d=t([]),k=t([]),l=t([]),C=t([]),x=t([]),D=t([]),S=t({});function P(Se){const _e=x.value.indexOf(Se);_e>=0?x.value.splice(_e,1):x.value.push(Se)}const F=t("date"),q=t([]),r=t(!1),i=t(!1),m=t("watchlist"),H=t([]),O=t({vendors:[]}),K=t(""),s=t(!1),J=t(!1);function o(Se){if(!Se)return"";const _e=String(Se),Ae=_e.length;if(Ae<=4)return _e[0]+"*".repeat(Ae-1);const Re=Ae<=8?2:4;return _e.slice(0,Re)+"*".repeat(Ae-Re-Re)+_e.slice(-Re)}async function y(Se){let _e;try{_e=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Re=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:_e,target:Se})})).json();if(Re.success)return Re.secret;ElementPlus.ElMessage.error(Re.message||"查看失败")}catch(Ae){ElementPlus.ElMessage.error("查看失败: "+Ae.message)}return null}async function L(Se){if(Se._revealed){Se._revealed=!1,Se._masked=o(Se.api_key);return}const _e=await y("ai:"+Se.vendor_key);_e!==null&&(Se.api_key=_e,Se._revealed=!0)}async function z(Se){if(Se._editing){Se._editing=!1,Se._revealed=!1,Se.api_key&&(Se._masked=o(Se.api_key));return}Se._editing=!0;try{const Ae=await(await fetch("/api/ai/models?full=1")).json();if(Ae.success){const Re=(Ae.data.vendors||[]).find($e=>$e.vendor_key===Se.vendor_key);Re&&(Se.api_key=Re.api_key||"")}else Ae.message&&ElementPlus.ElMessage.error(String(Ae.message))}catch(_e){ElementPlus.ElMessage.error("解锁失败: "+_e.message)}}function ee(Se){const{_fetching:_e,_testing:Ae,_revealed:Re,_masked:$e,_editing:Xe,...et}=Se;return Xe||(et.api_key=""),et.models=(Se.models||[]).map(Mt=>{const{_testing:Tt,testResult:ft,...zt}=Mt;return zt}),et}async function Y(){var Se;try{K.value="";const _e=await fetch("/api/ai/models");if(_e.status===401){K.value="请先登录后再查看模型配置";return}if(!_e.ok){K.value=`服务器错误 (${_e.status})`;return}const Ae=await _e.json();Ae.success?(H.value=(((Se=Ae.data)==null?void 0:Se.vendors)||[]).map(Re=>({...Re,_fetching:!1,_testing:!1,_revealed:!1,_editing:!1,_masked:Re.api_key||"",models:(Re.models||[]).map($e=>({...$e,_testing:!1,testResult:void 0}))})),K.value=""):K.value=Ae.message||"加载失败"}catch(_e){K.value="网络错误: "+_e.message}}async function $(){try{const _e=await(await fetch("/api/ai/catalog")).json();_e.success&&_e.data&&(O.value=_e.data)}catch(Se){console.warn("AI 厂商目录加载失败",Se)}}async function R(){J.value=!0;try{const Ae=await(await fetch("/api/ai/models",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendors:H.value.map(ee)})})).json();Ae.success?(H.value.forEach(Re=>{Re._editing=!1,Re._revealed=!1,Re.api_key&&(Re._masked=o(Re.api_key))}),ElementPlus.ElMessage.success("模型配置已保存")):ElementPlus.ElMessage.error(Ae.message||"保存失败")}catch(Se){ElementPlus.ElMessage.error("保存失败: "+Se.message)}J.value=!1}async function j(Se,_e){_e._testing=!0;try{const Re=await fetch("/api/ai/models/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:Se.vendor_key,model:_e.name,base_url:Se.base_url,api_key:Se.api_key,timeout:Se.timeout})});_e.testResult=await Re.json()}catch(Ae){_e.testResult={success:!1,message:Ae.message}}_e._testing=!1}async function A(){s.value=!0;for(const Se of H.value)for(const _e of Se.models||[])Se.api_key?await j(Se,_e):_e.testResult={success:!1,message:"未配置 API Key"};s.value=!1,ElementPlus.ElMessage.success("全部探测完成")}async function w(Se){Se._fetching=!0;try{const Re=await(await fetch("/api/ai/models/list",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({vendor_key:Se.vendor_key,base_url:Se.base_url,api_key:Se.api_key,timeout:Se.timeout})})).json();if(Re.success&&Array.isArray(Re.models)){const $e=new Set((Se.models||[]).map(Xe=>Xe.name));for(const Xe of Re.models)$e.has(Xe)||Se.models.push({name:Xe,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0});ElementPlus.ElMessage.success(`已获取 ${Re.models.length} 个模型`)}else ElementPlus.ElMessage.error(Re.message||"获取模型列表失败")}catch(_e){ElementPlus.ElMessage.error("获取模型列表失败: "+_e.message)}Se._fetching=!1}function E(Se){const _e=(O.value.vendors||[]).find(Ae=>Ae.vendor_key===Se);if(_e){if(H.value.some(Ae=>Ae.vendor_key===Se)){ElementPlus.ElMessage.warning("该厂商已存在");return}H.value.push({vendor_key:_e.vendor_key,name:_e.name,kind:_e.kind,base_url:_e.base_url,api_key:"",timeout:60,tier:_e.tier||"",website:_e.website||"",locked:!!_e.locked,models:(_e.models||[]).map(Ae=>({name:Ae,enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})),_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success(`已添加厂商「${_e.name}」，配置 API Key 后保存生效`)}}function oe(){H.value.push({vendor_key:"custom-"+Date.now(),name:"自定义厂商",kind:"自定义",base_url:"",api_key:"",timeout:60,tier:"",website:"",locked:!1,models:[],_fetching:!1,_testing:!1,_revealed:!1,_masked:""}),ElementPlus.ElMessage.success("已添加自定义厂商")}function U(Se){Se.models||(Se.models=[]),Se.models.push({name:"",enabled:!1,locked:!1,max_tokens:4096,_testing:!1,testResult:void 0})}async function b(Se,_e){const Ae=Se.models[_e];if(!(!Ae||Ae.locked)){try{await ElementPlus.ElMessageBox.confirm('确定删除模型 "'+(Ae.name||"未命名")+'"？',"删除模型",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}Se.models.splice(_e,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}}async function c(Se){if(Se.locked)return;try{await ElementPlus.ElMessageBox.confirm('确定删除厂商 "'+(Se.name||"未命名")+'"？',"删除厂商",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}const _e=H.value.indexOf(Se);_e>=0&&H.value.splice(_e,1),ElementPlus.ElMessage.success("已删除，请点击保存生效")}const M=t({enabled:!1,schedule_type:"daily",schedule_time:"09:00",selected_strategies:[],selected_stocks:[],push_to_feishu:!0,feishu_webhook:""}),p=t(!1),W=t(""),ue=t(0),te=t(""),T=t(!1),G=t(""),re=t(!1),fe=t(0),Te=t(0),Z=t(""),de=t({}),me=t({}),pe=t({}),ye=t({provider:"codingplan",apiKey:"",endpoint:"",model:"gpt-3.5-turbo"}),ae=t("manual"),xe=g(()=>{const Se={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash",website:"https://platform.deepseek.com"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus",website:"https://help.aliyun.com/zh/dashscope"},glm:{name:"智谱 GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus",website:"https://open.bigmodel.cn"},ernie:{name:"百度文心 ERNIE",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0-8k-latest",website:"https://yiyan.baidu.com"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct",website:"https://siliconflow.cn"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx",website:"https://console.volcengine.com/ark"},custom:{name:"自定义 API",endpoint:"",model:"",website:""}};return Se[ye.value.provider]||Se.custom}),Pe={deepseek:{name:"DeepSeek",endpoint:"https://api.deepseek.com/v1",model:"deepseek-v4-flash"},qwen:{name:"通义千问",endpoint:"https://dashscope.aliyuncs.com/compatible-mode/v1",model:"qwen-plus"},glm:{name:"智谱GLM",endpoint:"https://open.bigmodel.cn/api/paas/v4",model:"glm-4-plus"},ernie:{name:"百度文心",endpoint:"https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat",model:"ernie-4.0"},siliconflow:{name:"硅基流动",endpoint:"https://api.siliconflow.cn/v1",model:"Qwen/Qwen2.5-72B-Instruct"},volcengine:{name:"火山引擎",endpoint:"https://ark.cn-beijing.volces.com/api/v3",model:"ep-20250101000000-xxxxx"}};function ne(Se){if(Se==="manual")return;const _e=Pe[Se];_e&&(ye.value.endpoint=_e.endpoint,ye.value.model=_e.model,e.value=!0)}function se(){if(e.value=!0,ye.value.provider!=="codingplan"&&ye.value.provider!=="custom"){const Se=xe.value;Se&&(ye.value.endpoint=Se.endpoint,ye.value.model=Se.model)}else ye.value.provider==="codingplan"&&(ye.value.endpoint||(ye.value.endpoint="https://ark.cn-beijing.volces.com/api/coding/v3"),ye.value.model||(ye.value.model="ark-code-latest"))}let be=null;const Ne=8;async function Ie(){be&&(be.abort(),be=null);const _e=(u.value||[]).filter(et=>et.status==="new"||et.status==="out").filter(et=>!S.value[et.code]);if(_e.length===0)return;const Ae=new AbortController;be=Ae;let Re=0;const $e=async()=>{for(;Re<_e.length;){const et=_e[Re++];try{const Tt=await(await fetch("/api/calendar/pool-signal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:et.code,stock_name:et.name,event_type:et.status==="new"?"enter":"exit"}),signal:Ae.signal})).json();Tt.success&&Tt.signal&&(S.value={...S.value,[et.code]:Tt.signal})}catch(Mt){if(Mt.name==="AbortError")return}}},Xe=Array.from({length:Math.min(Ne,_e.length)},()=>$e());await Promise.all(Xe)}function We(){be&&(be.abort(),be=null)}let Ue=0;async function yt(Se){const _e=++Ue;try{const Re=await(await fetch(`/api/ai/history/last/${encodeURIComponent(Se)}`)).json();if(_e!==Ue)return;Re.success&&Re.data&&(f.value=Re.data,I.value=Re.data.evaluate_time,at(Se,Re.data),Rt(Re.data))}catch{}}async function at(Se,_e){var Ae,Re;try{const Xe=await(await fetch(`/api/ai/history?stock=${encodeURIComponent(Se)}&limit=2`)).json();if(Xe.success&&Xe.data&&Xe.data.length>=2){const et=Xe.data[1],Mt=((Ae=_e.result)==null?void 0:Ae.total_score)||0,Tt=((Re=et.result)==null?void 0:Re.total_score)||0;Mt>0&&Tt>0&&(h.value={prevScore:Tt,currScore:Mt,diff:Mt-Tt})}}catch($e){console.warn("[refreshStrategyData] autoPoll failed:",$e)}}function Rt(Se){var $e;const _e=(($e=Se.result)==null?void 0:$e.dimensions)||{},Ae=[],Re=[{key:"趋势强度",label:"趋势强度",good:70,warn:50},{key:"均线排列",label:"均线排列",good:70,warn:50},{key:"成交量",label:"量能配合",good:70,warn:50},{key:"动能风险",label:"动能风险",good:70,warn:40},{key:"指标共振",label:"指标共振",good:70,warn:50},{key:"稳定性",label:"持仓稳定",good:70,warn:50}];for(const Xe of Re){const et=_e[Xe.key];et!==void 0&&Ae.push({icon:et>=Xe.good?"check-circle-2":et>=Xe.warn?"alert-triangle":"x-circle",label:`${Xe.label} ${Math.round(et)}分`})}d.value=Ae}return{aiResult:f,lastEvalTime:I,evalHistoryComparison:h,checklistItems:d,aiHistory:k,selectedHistoryIds:l,expandedDates:C,expandedMonths:x,expandedStocks:D,poolSignals:S,toggleMonthExpand:P,aiHistoryView:F,selectedWatchlistCodes:q,showAutoEvaluateSettings:r,savingConfig:i,autoEvaluateScope:m,aiVendors:H,aiCatalog:O,aiModelsError:K,testingAllModels:s,savingAiModels:J,loadAiVendors:Y,loadAiCatalog:$,saveAiVendors:R,saveAiModels:R,testVendorModel:j,testAllVendorModels:A,fetchVendorModels:w,addVendorFromCatalog:E,addCustomVendor:oe,addVendorModel:U,removeVendorModel:b,removeVendor:c,toggleVendorKeyReveal:L,toggleVendorEdit:z,autoEvaluateConfig:M,aiLoading:p,aiEvalStage:W,aiEvalElapsed:ue,aiEvalError:te,showBatchEvaluate:T,batchStocks:G,batchRunning:re,batchTotal:fe,batchCompleted:Te,batchCurrent:Z,batchStatuses:de,batchResults:me,batchEvalErrors:pe,aiConfig:ye,selectedPreset:ae,providerInfo:xe,aiPresets:Pe,applyPreset:ne,onProviderChange:se,fetchPoolSignals:Ie,cancelPoolSignals:We,loadLastEvaluation:yt}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.system={create(a){const{ref:t,computed:g,watch:e}=Vue,{configChanged:u,aiConfig:f,aiLoading:I,feishuConfig:h,currentTheme:d,changeTheme:k,autoEvaluateConfig:l,currentUser:C,strategyFilter:x,applyTheme:D,dashboardData:S,lastRefreshTime:P,saveAiModels:F}=a,q=t(!1),r=t(!1),i=t(null),m=t(null),H=t(null),O=t(null),K=t({token:"",endpoint:"http://api.tushare.pro",timeout:30}),s=t("disconnected"),J=t({sxsc_tushare:{enabled:!0,token:"",timeout:30},tushare:{enabled:!0,token:"",endpoint:"http://api.tushare.pro",timeout:30},akshare:{enabled:!0}}),o=t({sxsc_tushare:"unknown",tushare:"unknown",akshare:"unknown"}),y=t(!1),L=t(null),z=t(null),ee=t("pending"),Y=t("..."),$=t(!1),R=t({api_limit:600}),j=t(!1),A=t(!1);async function w(){try{const se=await(await fetch("/api/system/rate-limit")).json();se.success&&(R.value=se.data)}catch(ne){console.warn("loadRateLimit failed:",ne)}}async function E(){A.value=!0;try{const se=await(await fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(R.value)})).json();se.success?(j.value=!1,ElementPlus.ElMessage.success("限流配置已更新")):ElementPlus.ElMessage.error(se.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{A.value=!1}}e(()=>[f.value.provider,f.value.apiKey,f.value.endpoint,f.value.model],()=>{u.value=!0},{deep:!0});async function oe(){q.value=!0;try{localStorage.setItem("quant_ai_config",JSON.stringify(f.value)),(await(await fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f.value)})).json()).success?(u.value=!1,ElementPlus.ElMessage.success("AI配置已保存")):ElementPlus.ElMessage.warning("已保存到本地，同步失败")}catch(ne){localStorage.setItem("quant_ai_config",JSON.stringify(f.value)),ElementPlus.ElMessage.warning("已保存到本地（离线）"),console.error("保存配置失败:",ne)}finally{q.value=!1}}async function U(){I.value=!0;try{const se=await(await fetch("/api/ai/test")).json();se.success?ElementPlus.ElMessage.success(se.message||"API连接正常"):ElementPlus.ElMessage.error(se.message||"测试失败")}catch{ElementPlus.ElMessage.error("连接失败")}finally{I.value=!1}}function b(){const ne={ai:f.value,feishu:h.value,theme:d.value,export_time:new Date().toISOString()},se=new Blob([JSON.stringify(ne,null,2)],{type:"application/json"}),be=URL.createObjectURL(se),Ne=document.createElement("a");Ne.href=be,Ne.download=`quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`,Ne.click(),URL.revokeObjectURL(be),ElementPlus.ElMessage.success("配置已导出")}function c(ne){const se=ne.target.files[0];if(!se)return;const be=new FileReader;be.onload=async Ne=>{try{const Ie=JSON.parse(Ne.target.result);Ie.ai&&(f.value={...f.value,...Ie.ai},await oe()),Ie.feishu&&(Object.assign(h.value,Ie.feishu),await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Ie.feishu)})),Ie.theme&&(d.value=Ie.theme,k(Ie.theme)),ElementPlus.ElMessage.success("配置已导入")}catch{ElementPlus.ElMessage.error("导入失败：格式错误")}},be.readAsText(se),ne.target.value=""}async function M(){q.value=!0;const ne=[fetch("/api/user_config/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:{tushare:K.value,feishu:h.value,ai:f.value,rate_limit:R.value,auto_evaluate:l.value,theme:d.value}})}).then(Ie=>["userConfig",Ie.ok]),fetch("/api/market/tushare/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(K.value)}).then(Ie=>["tushare",Ie.ok]),fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:J.value})}).then(Ie=>["datasource",Ie.ok]),fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h.value)}).then(Ie=>["feishu",Ie.ok]),fetch("/api/ai/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f.value)}).then(Ie=>["ai",Ie.ok]),fetch("/api/system/rate-limit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(R.value)}).then(Ie=>["rateLimit",Ie.ok]),F().then(()=>["aiModels",!0],()=>["aiModels",!1])],se=await Promise.allSettled(ne),be=se.filter(Ie=>Ie.status==="fulfilled"&&Ie.value[1]).length,Ne=se.filter(Ie=>Ie.status==="rejected"||Ie.status==="fulfilled"&&!Ie.value[1]).length;j.value=!1,localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(x.value.selected)),localStorage.setItem("quant_strategy_filter_mode",x.value.mode),C.value&&fetch(`/api/users/${C.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:d.value})}).catch(()=>{}),r.value=!1,i.value=new Date().toLocaleString("zh-CN"),q.value=!1,Ne>0&&console.error(`[saveAllConfig] ${be}/${be+Ne} 项保存成功，${Ne} 项失败`)}async function p(){try{const se=await(await fetch("/api/user_config/config")).json();if(se.success&&se.config){const be=se.config;be.tushare&&(K.value={...K.value,...be.tushare}),be.feishu&&(h.value={...h.value,...be.feishu}),be.ai&&(f.value={...f.value,...be.ai}),be.rate_limit&&(R.value={...R.value,...be.rate_limit}),be.auto_evaluate&&(l.value={...l.value,...be.auto_evaluate}),be.theme&&!localStorage.getItem("quant_theme")&&D(be.theme)}r.value=!1,j.value=!1}catch(ne){console.error("[resetAllConfig] 重新加载配置失败:",ne),r.value=!1}}async function W(){s.value="testing";try{const se=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();if(s.value=se.success?"connected":"disconnected",se.success){const be=se.data_count?` (获取到 ${se.data_count} 条数据)`:"";ElementPlus.ElMessage.success("Tushare 连接成功"+be)}else ElementPlus.ElMessage.error(se.message||"连接失败")}catch{s.value="disconnected",ElementPlus.ElMessage.error("连接失败")}}async function ue(){try{const se=await(await fetch("/api/market/tushare/test",{method:"POST"})).json();s.value=se.success?"connected":"disconnected"}catch{s.value="disconnected"}}async function te(){var ne;y.value=!0;try{const be=await(await fetch("/api/market/tushare/sync",{method:"POST",headers:{"Content-Type":"application/json"}})).json();be.success?(L.value=parseInt(((ne=be.message.match(/\d+/))==null?void 0:ne[0])||"0"),ElementPlus.ElMessage.success(be.message)):ElementPlus.ElMessage.error(be.message||"同步失败")}catch{ElementPlus.ElMessage.error("同步失败")}finally{y.value=!1}}async function T(){try{const se=await(await fetch("/api/market/tushare/config")).json();se.success&&se.config&&(K.value={...K.value,...se.config})}catch(ne){console.warn("loadTushareConfig failed:",ne)}}function G(ne){if(!ne)return"";const se=String(ne),be=se.length;if(be<=4)return se[0]+"*".repeat(be-1);const Ne=be<=8?2:4;return se.slice(0,Ne)+"*".repeat(be-Ne-Ne)+se.slice(-Ne)}async function re(ne){let se;try{se=(await ElementPlus.ElMessageBox.prompt("请输入查看密码（默认密码见项目 README「密钥查看」说明）","查看完整密钥",{inputType:"password",inputPattern:/^.+$/,inputErrorMessage:"密码不能为空",confirmButtonText:"查看",cancelButtonText:"取消"})).value}catch{return null}try{const Ne=await(await fetch("/api/system/reveal-secret",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:se,target:ne})})).json();if(Ne.success)return Ne.secret;ElementPlus.ElMessage.error(Ne.message||"查看失败")}catch(be){ElementPlus.ElMessage.error("查看失败: "+be.message)}return null}async function fe(ne){const se=J.value[ne];if(!se)return;if(se._revealed){se._revealed=!1,se._masked=G(se.token);return}const be=await re(ne);be!==null&&(se.token=be,se._revealed=!0)}async function Te(ne){const se=J.value[ne];if(se){if(se._editing){se._editing=!1,se._revealed=!1,se.token&&(se._masked=G(se.token));return}se._editing=!0;try{const be=await re(ne);if(be===null){se._editing=!1;return}se.token=be,se._revealed=!0}catch(be){se._editing=!1,ElementPlus.ElMessage.error("解锁失败: "+be.message)}}}async function Z(){try{const se=await(await fetch("/api/market/datasource/config")).json();if(se.success&&se.config&&se.config.sources){const be=se.config.sources,Ne=Ie=>{const We={...J.value[Ie],...be[Ie]||{}};return We._editing=!1,We._revealed=!1,We._masked=We.token||"",We.token="",We};J.value={sxsc_tushare:Ne("sxsc_tushare"),tushare:Ne("tushare"),akshare:{...J.value.akshare,...be.akshare||{}}}}try{const Ne=await(await fetch("/api/market/datasource/status")).json();if(Ne.success&&Ne.status)for(const[Ie,We]of Object.entries(Ne.status))o.value[Ie]=We.connected?"connected":"disconnected"}catch{}}catch(ne){console.warn("loadDatasourceConfig failed:",ne)}}async function de(){try{const ne={};for(const[se,be]of Object.entries(J.value)){const{_revealed:Ne,_masked:Ie,_editing:We,...Ue}=be;!We&&se!=="akshare"&&(Ue.token=""),ne[se]=Ue}await fetch("/api/market/datasource/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sources:ne})}),r.value=!0}catch(ne){console.warn("saveDatasourceConfig failed:",ne)}}async function me(ne){o.value[ne]="testing";try{const se=J.value[ne];se&&se._editing&&await de();const Ne=await(await fetch(`/api/market/datasource/test/${ne}`,{method:"POST"})).json();o.value[ne]=Ne.success?"connected":"disconnected",Ne.success?ElementPlus.ElMessage.success(`${ne} 连接成功`):ElementPlus.ElMessage.error(`${ne}: ${Ne.message}`)}catch{o.value[ne]="disconnected",ElementPlus.ElMessage.error(`${ne} 连接失败`)}}async function pe(){try{const se=await(await fetch("/api/feishu/config")).json();se&&typeof se=="object"&&(h.value={...h.value,...se},m.value=JSON.parse(JSON.stringify(h.value)))}catch(ne){console.warn("loadFeishuConfig failed:",ne)}}async function ye(){try{const se=await(await fetch("/api/ai/config")).json();if(se.success&&se.data)f.value={...f.value,...se.data};else{const be=localStorage.getItem("quant_ai_config");be&&(f.value=JSON.parse(be))}}catch{const se=localStorage.getItem("quant_ai_config");se&&(f.value=JSON.parse(se))}}async function ae(){try{const se=await(await fetch("/api/user_config/config")).json();if(se.success&&se.config){const be=se.config;be.tushare&&(K.value={...K.value,...be.tushare}),be.datasource&&be.datasource.sources&&(J.value={sxsc_tushare:{...J.value.sxsc_tushare,...be.datasource.sources.sxsc_tushare||{}},tushare:{...J.value.tushare,...be.datasource.sources.tushare||{}},akshare:{...J.value.akshare,...be.datasource.sources.akshare||{}}}),be.feishu&&(h.value={...h.value,...be.feishu},m.value=JSON.parse(JSON.stringify(h.value))),be.ai&&(f.value={...f.value,...be.ai}),be.rate_limit&&(R.value={...R.value,...be.rate_limit}),be.theme&&!localStorage.getItem("quant_theme")&&D(be.theme),be.auto_evaluate&&(l.value={...l.value,...be.auto_evaluate})}}catch(ne){console.warn("加载用户配置失败，使用本地缓存",ne)}}async function xe(){var ne,se,be,Ne;try{const We=await(await fetch("/api/dashboard")).json(),Ue=We.success?We.data:We;L.value=((ne=Ue==null?void 0:Ue.stats)==null?void 0:ne.total_stocks_covered)||null;const at=await(await fetch("/api/dates")).json();z.value=((se=at==null?void 0:at.data)==null?void 0:se.total)||((Ne=(be=at==null?void 0:at.data)==null?void 0:be.dates)==null?void 0:Ne.length)||null;const Se=await(await fetch("/api/ai/history")).json();ee.value="ok"}catch{ee.value="pending"}}async function Pe(){try{const se=await(await fetch("/api/dashboard")).json();S.value=se.success?se.data:se,P.value=Date.now()}catch(ne){console.error("加载总览数据失败",ne)}}return{configSaving:q,configChanged:u,globalConfigDirty:r,lastSavedTime:i,feishuConfigOriginal:m,aiConfigOriginal:H,tushareConfigOriginal:O,tushareConfig:K,tushareStatus:s,datasourceConfig:J,datasourceStatus:o,syncingData:y,stockCount:L,tradeDateCount:z,aiStatus:ee,appVersion:Y,showImportDialog:$,rateLimitConfig:R,rateLimitDirty:j,rateLimitSaving:A,loadRateLimit:w,saveRateLimit:E,saveAiConfig:oe,testAiApi:U,exportConfig:b,importConfig:c,saveAllConfig:M,resetAllConfig:p,testTushareConnection:W,checkTushareConnection:ue,syncStockData:te,loadTushareConfig:T,loadDatasourceConfig:Z,saveDatasourceConfig:de,testDatasource:me,toggleDatasourceKeyReveal:fe,toggleDatasourceEdit:Te,loadFeishuConfig:pe,loadAiConfig:ye,loadUserConfig:ae,loadSystemStatus:xe,loadDashboardData:Pe}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.users={create(a){const{ref:t,computed:g}=Vue,{currentUser:e,applyTheme:u,allMenuDefs:f,loadGroupConfig:I}=a,h=t([]),d=t(""),k=t(""),l=t("users"),C=t({}),x=t({}),D=g(()=>{let ae=h.value;if(k.value&&(ae=ae.filter(Pe=>(Pe.group||Pe.role)===k.value)),!d.value)return ae;const xe=d.value.toLowerCase();return ae.filter(Pe=>Pe.username.toLowerCase().includes(xe))});function S(ae){C.value={...C.value,[ae]:!C.value[ae]}}async function P(ae,xe){try{const ne=await(await fetch("/api/groups/"+xe+"/members/"+ae,{method:"DELETE"})).json();ne.success?(await Te(),await re()):ElementPlus.ElMessage.error(ne.message)}catch{ElementPlus.ElMessage.error("移除失败")}}async function F(ae){const xe=x.value[ae];if(xe)try{const ne=await(await fetch("/api/groups/"+ae+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:xe})})).json();ne.success?(await Te(),await re(),x.value={...x.value,[ae]:""}):ElementPlus.ElMessage.error(ne.message)}catch{ElementPlus.ElMessage.error("添加失败")}}async function q(ae,xe){try{const ne=await(await fetch("/api/users/"+ae.username,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({group:xe})})).json();ne.success?await Te():ElementPlus.ElMessage.error(ne.message)}catch{ElementPlus.ElMessage.error("分组变更失败")}}const r=t(!1),i=t(null),m=t({username:"",password:"",role:"user",theme:"tech-blue"}),H=t(!1),O=t(null),K=t(!1),s=t(!1),J=t({name:"",description:"",visible_menus:{},visible_sub_pages:{}}),o=t({}),y=t(!1),L=t({group_id:"",name:"",description:""}),z=t(!1),ee=t([]),Y=t(""),$=t(""),R=t({});function j(ae){R.value={...R.value,[ae]:!R.value[ae]}}function A(ae){return!h.value||!h.value.length?0:h.value.filter(xe=>(xe.group||xe.role)===ae).length}function w(ae){const xe=(ae==null?void 0:ae.visible_menus)||{};return Object.values(xe).filter(Boolean).length}const E=g(()=>Object.keys(G.value).length);async function oe(ae){$.value=ae,s.value=!0,await U(ae)}async function U(ae){try{const Pe=await(await fetch("/api/groups/"+ae+"/members")).json();Pe.success&&(ee.value=Pe.members||[])}catch(xe){ee.value=[],console.error("[loadGroupMembers]",xe)}}async function b(){if(!(!Y.value||!$.value)){z.value=!0;try{const xe=await(await fetch("/api/groups/"+$.value+"/members",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:Y.value})})).json();xe.success?(await U($.value),await Te(),Y.value=""):ElementPlus.ElMessage.error(xe.message)}catch{ElementPlus.ElMessage.error("添加失败")}finally{z.value=!1}}}async function c(ae){try{const Pe=await(await fetch("/api/groups/"+$.value+"/members/"+ae,{method:"DELETE"})).json();Pe.success?(await U($.value),await Te()):ElementPlus.ElMessage.error(Pe.message)}catch{ElementPlus.ElMessage.error("移除失败")}}const M=g(()=>{if(!h.value)return[];const ae=new Set(ee.value.map(xe=>xe.username));return h.value.filter(xe=>xe.username!=="admin"&&xe.username!=="guest"&&!ae.has(xe.username))});function p(ae){const xe=J.value.visible_menus[ae],Pe=f.find(ne=>ne.key===ae);if(Pe)if(xe){const ne=o.value[ae]||{};Pe.subPages.forEach(se=>{const be=ae+"."+se;J.value.visible_sub_pages[be]=ne[se]!==void 0?ne[se]:!0})}else{const ne={};Pe.subPages.forEach(se=>{const be=ae+"."+se;ne[se]=J.value.visible_sub_pages[be],J.value.visible_sub_pages[be]=!1}),o.value[ae]=ne}}function W(ae){O.value=ae;const xe=G.value[ae]||{};J.value={name:xe.name||ae,description:xe.description||"",visible_menus:{...xe.visible_menus||{}},visible_sub_pages:{...xe.visible_sub_pages||{}}},o.value={},f.forEach(Pe=>{const ne={};Pe.subPages.forEach(se=>{ne[se]=J.value.visible_sub_pages[Pe.key+"."+se]}),o.value[Pe.key]=ne}),K.value=!0}async function ue(){z.value=!0;try{const xe=await(await fetch("/api/groups/"+O.value,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(J.value)})).json();xe.success?(K.value=!1,O.value=null,await re(),await I()):ElementPlus.ElMessage.error(xe.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{z.value=!1}}async function te(ae){var xe;try{if(!await ElementPlus.ElMessageBox.confirm("确定删除分组「"+(((xe=G.value[ae])==null?void 0:xe.name)||ae)+"」吗？","删除分组",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"}).then(()=>!0).catch(()=>!1))return;const se=await(await fetch("/api/groups/"+ae,{method:"DELETE"})).json();se.success?await re():ElementPlus.ElMessage.error(se.message)}catch{ElementPlus.ElMessage.error("删除失败")}}async function T(){if(L.value.group_id){z.value=!0;try{const xe=await(await fetch("/api/groups",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(L.value)})).json();xe.success?(y.value=!1,L.value={group_id:"",name:"",description:""},await re()):ElementPlus.ElMessage.error(xe.message)}catch{ElementPlus.ElMessage.error("创建失败")}finally{z.value=!1}}}const G=t({});async function re(){try{if(!localStorage.getItem("quant_token"))return;const xe=await fetch("/api/groups");if(xe.ok){const Pe=await xe.json();G.value=Pe.groups||{}}}catch(ae){console.warn("loadAllGroups:",ae)}}function fe(ae){var xe;return((xe=G.value[ae])==null?void 0:xe.name)||ae||"--"}async function Te(){try{if(!localStorage.getItem("quant_token")){h.value=[];return}const xe=await fetch("/api/users");if(xe.status===401){console.warn("[loadUsers] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),e.value=null;return}const Pe=await xe.json();h.value=Pe.users||[]}catch(ae){h.value=[],console.error("[loadUsers] error:",ae)}}function Z(ae){i.value=ae,m.value={username:ae.username,password:"",role:ae.role,theme:ae.theme||"tech-blue",group:ae.group||ae.role},r.value=!0}async function de(){if(m.value.username){H.value=!0;try{const ae=i.value?"PUT":"POST",xe=i.value?`/api/users/${m.value.username}`:"/api/users",ne=await(await fetch(xe,{method:ae,headers:{"Content-Type":"application/json"},body:JSON.stringify(m.value)})).json();if(ne.success){if(ElementPlus.ElMessage.success("保存成功"),e.value&&m.value.username===e.value.username){const se=m.value.theme;se&&se!==e.value.theme&&(e.value.theme=se,localStorage.setItem("quant_user",JSON.stringify(e.value)),u(se))}r.value=!1,i.value=null,await Te()}else ElementPlus.ElMessage.error(ne.message)}catch{ElementPlus.ElMessage.error("操作失败")}finally{H.value=!1}}}async function me(ae){try{await ElementPlus.ElMessageBox.confirm("确定删除该用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),(await(await fetch(`/api/users/${ae}`,{method:"DELETE"})).json()).success&&(ElementPlus.ElMessage.success("删除成功"),await Te())}catch(xe){console.error("[deleteUser]",xe)}}async function pe(ae){try{const Pe=await(await fetch(`/api/users/${ae.username}/toggle-enabled`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:ae.enabled})})).json();Pe.success?ElementPlus.ElMessage.success("状态已更新"):ElementPlus.ElMessage.error(Pe.message||"操作失败")}catch{ElementPlus.ElMessage.error("操作失败")}}async function ye(ae){try{const{value:xe}=await ElementPlus.ElMessageBox.prompt(`请输入用户 "${ae.username}" 的新密码`,"重置密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"});if(xe){const ne=await(await fetch(`/api/users/${ae.username}/reset-password`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({new_password:xe})})).json();ne.success?ElementPlus.ElMessage.success("密码已重置"):ElementPlus.ElMessage.error(ne.message||"重置失败")}}catch{}}return{userList:h,userSearch:d,groupFilter:k,userPageTab:l,expandedGroups:C,addMemberGroupMap:x,filteredUsers:D,toggleGroupExpand:S,removeMemberFromGroupInline:P,addMemberToGroupInline:F,changeUserGroup:q,showAddUser:r,editingUser:i,userForm:m,savingUser:H,editingGroup:O,menuConfigDialog:K,memberDialog:s,groupEditForm:J,subPageCache:o,showAddGroup:y,addGroupForm:L,savingGroup:z,groupMembers:ee,addMemberUsername:Y,selectedMemberGroup:$,subPageSectionExpanded:R,toggleSubPageSection:j,getGroupMemberCount:A,getMenuEnabledCount:w,groupCount:E,openMemberManager:oe,loadGroupMembers:U,addMemberToGroup:b,removeMemberFromGroup:c,availableUsersForGroup:M,onParentToggle:p,openMenuConfig:W,saveMenuConfig:ue,deleteGroupConfig:te,createGroup:T,allGroups:G,getGroupName:fe,loadAllGroups:re,loadUsers:Te,editUser:Z,saveUser:de,deleteUser:me,toggleUserEnabled:pe,resetUserPassword:ye}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["ai-chat"]={create(a){const{ref:t,computed:g}=Vue,{stockKlineLoaded:e,stockDetailVisible:u,stockDetailTab:f,stockDetail:I,disposeStockKline:h}=a,d=t([]),k=t(!1),l=t(!1),C=t("date"),x=t([]),D=t([]),S=t([]),P=t([]),F=g(()=>{var c,M;const b=[];for(const p of d.value){if(!p||p.id==null)continue;const W=p.stock_name||p.stock_code||"",ue=Array.isArray(p.messages)?p.messages:[];b.push({id:p.id,stock_code:p.stock_code,stock_name:W,first_msg:p.first_msg||((M=(c=ue[0])==null?void 0:c.content)==null?void 0:M.substring(0,50))||"",msg_count:p.msg_count||ue.length||0,created_at:p.created_at,date:(p.created_at||"").substring(0,10),month:(p.created_at||"").substring(0,7),messages:ue})}return b}),q=g(()=>{const b={};for(const M of F.value){const p=M.date||"未知";b[p]||(b[p]=[]),b[p].push(M)}const c={};return Object.keys(b).sort((M,p)=>p.localeCompare(M)).forEach(M=>c[M]=b[M]),c}),r=g(()=>{const b={};for(const M of F.value){const p=M.month||"未知";b[p]||(b[p]=[]),b[p].push(M)}const c={};return Object.keys(b).sort((M,p)=>p.localeCompare(M)).forEach(M=>c[M]=b[M]),c}),i=g(()=>{const b={};for(const c of F.value){const M=`${c.stock_name}(${c.stock_code})`;b[M]||(b[M]=[]),b[M].push(c)}return b});function m(b){const c=x.value.indexOf(b);c>=0?x.value.splice(c,1):x.value.push(b)}function H(b){const c=q.value[b]||[];if(c.every(p=>x.value.includes(p.id)))x.value=x.value.filter(p=>!c.some(W=>W.id===p));else for(const p of c)x.value.includes(p.id)||x.value.push(p.id)}function O(b){const c=r.value[b]||[];if(c.every(p=>x.value.includes(p.id)))x.value=x.value.filter(p=>!c.some(W=>W.id===p));else for(const p of c)x.value.includes(p.id)||x.value.push(p.id)}function K(b){const c=i.value[b]||[];if(c.every(p=>x.value.includes(p.id)))x.value=x.value.filter(p=>!c.some(W=>W.id===p));else for(const p of c)x.value.includes(p.id)||x.value.push(p.id)}function s(b){const c=D.value.indexOf(b);c>=0?D.value.splice(c,1):D.value.push(b)}function J(b){const c=S.value.indexOf(b);c>=0?S.value.splice(c,1):S.value.push(b)}function o(b){const c=P.value.indexOf(b);c>=0?P.value.splice(c,1):P.value.push(b)}function y(){x.value.length===F.value.length?x.value=[]:x.value=F.value.map(b=>b.id)}async function L(){if(x.value.length){try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${x.value.length} 段对话吗？此操作不可恢复。`,"删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}for(const b of[...x.value])await oe(b);x.value=[]}}const z={};async function ee(b){I.value={stock:b.stock_code,name:b.stock_name},u.value=!0,f.value="chat",e.value=!1,h(),R.value=!0,j.value="",$.value=[];try{let c=z[b.id];if(!c){const M=await fetch("/api/ai/chat/history/"+b.id);if(!M.ok)throw new Error("load history failed");c=(await M.json()).messages||[],z[b.id]=c}$.value=c.map(M=>({role:M.role,content:M.content}))}catch{j.value="历史消息加载失败，请重试"}finally{R.value=!1}}const Y=t(""),$=t([]),R=t(!1),j=t("");async function A(){var M;const b=Y.value.trim();if(!b||R.value)return;j.value="",$.value.push({role:"user",content:b}),Y.value="",R.value=!0;const c=$.value.length;$.value.push({role:"assistant",content:""});try{const ue=(await fetch("/api/ai/chat/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((M=I.value)==null?void 0:M.stock)||"",message:b})})).body.getReader(),te=new TextDecoder;let T="";for(;;){const{done:G,value:re}=await ue.read();if(G)break;T+=te.decode(re,{stream:!0});const fe=T.split(`
`);T=fe.pop()||"";for(const Te of fe)if(Te.startsWith("data: "))try{const Z=JSON.parse(Te.slice(6));Z.token?$.value[c].content+=Z.token:Z.done?console.log("Stream done:",Z.session_id):Z.error&&(j.value=Z.error)}catch(Z){console.warn("SSE parse error:",Z)}}}catch(p){$.value[c].content||($.value[c].content="网络错误: "+p.message)}R.value=!1}async function w(b){var M;j.value="",R.value=!0;const c={trend:"帮我做一下技术趋势分析",fundamental:"帮我看看基本面情况",comprehensive:"帮我做个综合分析"};$.value.push({role:"user",content:c[b]||c.comprehensive});try{const W=await fetch("/api/ai/chat/quick",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:((M=I.value)==null?void 0:M.stock)||"",mode:b})});if(W.ok){const ue=await W.json();$.value.push({role:"assistant",content:ue.reply||"无回复"})}}catch(p){j.value="网络错误: "+p.message}R.value=!1}async function E(){k.value=!0,l.value=!1;try{const b=await fetch("/api/ai/chat/history?view=date");if(b.ok){const c=await b.json(),M=[];for(const p of c)for(const W of p.items||[])M.push(W);d.value=M}else l.value=!0}catch(b){console.error(b),l.value=!0}finally{k.value=!1}}async function oe(b){try{await fetch("/api/ai/chat/history/"+b,{method:"DELETE"}),d.value=d.value.filter(c=>c.id!==b)}catch(c){console.error("deleteChatSession:",c)}}function U(b){if(!b)return"";const c=String(b).split(`
`),M=[],p=[];let W=0;for(;W<c.length;){if(/^\s*\|.*\|\s*$/.test(c[W])){let te=W;const T=[];for(;te<c.length&&/^\s*\|.*\|\s*$/.test(c[te]);)T.push(c[te]),te++;const G=Te=>Te.trim().replace(/^\|/,"").replace(/\|\s*$/,"").split("|").map(Z=>Z.trim()),re=T.map(G);if(re.length>1&&re[1].every(Te=>/^:?-{3,}:?$/.test(Te))){const Te=Math.max(...re.map(pe=>pe.length)),Z=re[0].slice(0,Te),de=re.slice(2);let me="<table>";de.length?(me+="<thead><tr>"+Z.map(pe=>"<th>"+pe+"</th>").join("")+"</tr></thead>",me+="<tbody>"+de.map(pe=>"<tr>"+pe.slice(0,Te).map(ye=>"<td>"+ye+"</td>").join("")+"</tr>").join("")+"</tbody>"):me+="<tbody><tr>"+Z.map(pe=>"<td>"+pe+"</td>").join("")+"</tr></tbody>",me+="</table>",M.push(me),p.push("\0T"+(M.length-1)+"\0"),W=te;continue}for(;W<te;)p.push(c[W]),W++;continue}p.push(c[W]),W++}let ue=p.join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^### (.+)$/gm,"<h4>$1</h4>").replace(/^## (.+)$/gm,"<h3>$1</h3>").replace(/^# (.+)$/gm,"<h2>$1</h2>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/\*(.+?)\*/g,"<em>$1</em>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.+)$/gm,"<li>$1</li>").replace(/(<li>.*<\/li>\n?)+/g,"<ul>$&</ul>").replace(/\n/g,"<br>");return M.forEach((te,T)=>{ue=ue.split("\0T"+T+"\0").join(te)}),window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml&&(ue=window.__quantModules.core.sanitizeHtml(ue)),ue}return{chatSessions:d,chatHistoryView:C,selectedChatIds:x,expandedChatDates:D,expandedChatMonths:S,expandedChatStocks:P,chatHistoryLoading:k,chatHistoryError:l,allChatSessionsFlat:F,chatGroupedByDate:q,chatGroupedByMonth:r,chatGroupedByStock:i,toggleSelectChat:m,toggleSelectChatDate:H,toggleSelectChatMonth:O,toggleSelectChatStock:K,toggleChatDateExpand:s,toggleChatMonthExpand:J,toggleChatStockExpand:o,selectAllChatSessions:y,deleteSelectedChatSessions:L,viewChatSession:ee,loadChatHistory:E,deleteChatSession:oe,renderMarkdown:U,stockChatInput:Y,stockChatMessages:$,stockChatLoading:R,stockChatError:j,askStockSend:A,askStockQuick:w}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules["stock-pool"]={create(a){const{ref:t,computed:g,watch:e}=Vue,{consensus:u,currentPage:f,currentSubPage:I,dashboardData:h,searchKeyword:d,statusFilter:k,strategyFilter:l,strategyFilterCounts:C}=a;function x(o){const y=l.value.selected;if(!y||y.length===0)return o;const L=l.value.mode;return o.filter(z=>{const ee=z.strategy_names||z.strategies||[];return L==="union"?y.some(Y=>ee.includes(Y)):y.every(Y=>ee.includes(Y))})}const D=g(()=>{const o=x(u.value||[]);return{all:o.length,newCount:o.filter(y=>y.status==="new").length,current:o.filter(y=>y.status==="current").length,out:o.filter(y=>y.status==="out").length}}),S=g(()=>{let o=u.value||[];if(k.value!=="all"&&(o=o.filter(y=>y.status===k.value)),o=x(o),d.value){const y=d.value.toLowerCase();o=o.filter(L=>L.code.toLowerCase().includes(y)||L.name&&L.name.toLowerCase().includes(y))}return o}),P=g(()=>{const o=u.value||[],y={},L={};for(const z of o)z.code&&z.name&&(L[z.code]=z.name);for(const z of o){const ee=z.strategy_names||z.strategies||[];for(const Y of ee)y[Y]||(y[Y]={strategy:Y,count:0,codes:[],names:[]}),y[Y].count++,y[Y].codes.includes(z.code)||(y[Y].codes.push(z.code),y[Y].names.push({code:z.code,name:L[z.code]||z.code}))}return Object.values(y).sort((z,ee)=>ee.count-z.count)}),F=g(()=>{const o=l.value.selected,y=l.value.mode,L={};for(const[z,ee]of Object.entries(C.value)){const Y=ee||[];!o||o.length===0?L[z]=Y.length:y==="union"?L[z]=Y.filter($=>$.strategies&&o.some(R=>$.strategies.includes(R))).length:L[z]=Y.filter($=>$.strategies&&o.every(R=>$.strategies.includes(R))).length}return L});function q(){localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(l.value.selected)),localStorage.setItem("quant_strategy_filter_mode",l.value.mode)}const r=g(()=>{const o=(h.value||{}).consensus_rank||[];return x(o)}),i=g(()=>{const o=u.value||C.value.day||[];return x(o).length}),m=g(()=>{const o=(h.value||{}).strategy_counts||[],y=u.value||C.value.day||[];if(y.length===0)return o;const L=x(y),z={};L.forEach(Y=>{(Y.strategy_names||Y.strategies||[]).forEach(R=>{z[R]=(z[R]||0)+1})});const ee=L.length||1;return o.map(Y=>{const $=Y.strategy_name||Y.strategy_id,R=z[$]||0;return{...Y,count:R,percentage:Math.round(R/ee*1e3)/10}})}),H=g(()=>{const o=(h.value||{}).pool_changes||{},y=(o.new_count||0)-(o.out_count||0);return y>0?{dir:"up",text:"↑"+y}:y<0?{dir:"down",text:"↓"+Math.abs(y)}:{dir:"flat",text:"→0"}}),O=g(()=>{const o=(h.value||{}).time_coverage||{},y=new Date(o.start_date),L=new Date(o.end_date),z=new Date;if(!y.getTime()||!L.getTime()||z>=L)return 100;if(z<=y)return 0;const ee=L-y,Y=z-y;return Math.round(Y/ee*100)}),K=t(null),s=g(()=>{if(!K.value)return"";const o=Math.floor((Date.now()-K.value)/1e3);return o<60?o+"秒前刷新":o<3600?Math.floor(o/60)+"分钟前刷新":Math.floor(o/3600)+"小时前刷新"});function J(o){l.value.selected=[o],l.value.mode="union",localStorage.setItem("quant_strategy_filter_selected",JSON.stringify([o])),localStorage.setItem("quant_strategy_filter_mode","union"),f.value="calendar",I.value="calendar"}return{applyStrategyFilter:x,statusCounts:D,stockPool:S,strategyDistribution:P,strategyPreviewCount:F,saveStrategyFilter:q,filteredConsensusRank:r,currentPoolSize:i,filteredStrategyCounts:m,poolChangeBadge:H,timeBarPercent:O,lastRefreshTime:K,timeSinceRefresh:s,navigateToStrategyFilter:J}}}})();(function(){window.__quantModules||(window.__quantModules={});const a={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},t={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function g(u){return a[u]||"var(--text-tertiary)"}function e(u){return t[u]||"var(--bg-hover)"}window.__quantModules.watchlist={create(u){const{ref:f,computed:I,watch:h}=Vue,{currentUser:d,selectedDate:k,stockDetail:l,stockDetailTab:C,stockDetailVisible:x,stockDetailLoading:D,stockKlineLoaded:S,viewCache:P,animateScoreEntrance:F,loadStockKline:q,refreshStockScore:r,disposeStockKline:i,aiHistory:m,aiLoading:H,aiEvalStage:O,aiEvalElapsed:K,aiEvalError:s,aiResult:J,loadLastEvaluation:o,autoEvaluateConfig:y,autoEvaluateScope:L,batchStocks:z,batchRunning:ee,batchTotal:Y,batchCompleted:$,batchCurrent:R,batchStatuses:j,batchResults:A,batchEvalErrors:w,expandedDates:E,expandedStocks:oe,savingConfig:U,selectedHistoryIds:b,selectedWatchlistCodes:c,showAutoEvaluateSettings:M,showBatchEvaluate:p}=u,W=n=>(getComputedStyle(document.documentElement).getPropertyValue(n)||"").trim(),ue=f(""),te=f("default"),T=f("default"),G=f([]),re=I(()=>new Set(G.value.map(n=>n.code))),fe=f(!1),Te=f(!1),Z=I(()=>{const n=[...G.value];return T.value==="name"?n.sort((B,ie)=>B.name.localeCompare(ie.name,"zh")):T.value==="added"?n.sort((B,ie)=>(ie.added_at||"").localeCompare(B.added_at||"")):T.value==="score"&&n.sort((B,ie)=>{const Ce=me(B.code);return me(ie.code)-Ce}),n});function de(n){const B=m.value.filter(Ce=>Ce.stock_code===n);if(B.length===0)return null;const ie=B.reduce((Ce,Me)=>Ce.evaluate_time>Me.evaluate_time?Ce:Me);return{score:ie.result.total_score,color:g(ie.result.level),bg:e(ie.result.level)}}function me(n){const B=de(n);return B?B.score:0}function pe(n){De(n.code,n.name),ne.value=ne.value.filter(B=>B.code!==n.code),Pe.value=""}const ye=I(()=>new Set(m.value.map(n=>n.stock_code))),ae=f(new Set);function xe(n){ae.value.add(n)}const Pe=f(""),ne=f([]),se=f(!1),be=f({scheduled_enabled:!1,scheduled_time:"22:00",watch_enabled:!1,last_refresh:null,last_refresh_status:null,pull_enabled:!1,pull_time:"22:30",pull_frequency:"daily",pull_weekday:"0",stock_pool:[]}),Ne=f(!1),Ie=f(!1),We=window.__quantModules&&window.__quantModules.core?window.__quantModules.core:{};We.REALTIME_WS_PATH;const Ue=We.REALTIME_DEGRADED_TEXT||"数据不可达",yt=We.REALTIME_FALLBACK_TEXT||"实时不可用，不刷新";We.WARN_RISE_SPEED_THRESHOLD!=null&&We.WARN_RISE_SPEED_THRESHOLD,We.WARN_VOLUME_RATIO_THRESHOLD!=null&&We.WARN_VOLUME_RATIO_THRESHOLD;const at=We.quoteFmt||{price:n=>n==null?"--":Number(n).toFixed(2),pct:n=>n==null?"--":Number(n).toFixed(2)+"%",num:n=>n==null?"--":Number(n).toFixed(2),color:n=>""},Rt=3,Se=5e3,_e=f({}),Ae=f(!1),Re=f("idle");let $e=null,Xe=null,et=0;function Mt(n){return We.checkQuoteWarning?We.checkQuoteWarning(n):null}function Tt(n){return Mt(_e.value[n])}function ft(n){return at.color(_e.value[n])}function zt(n){return at.price(_e.value[n]&&_e.value[n].price)}function Wt(n){return at.pct(_e.value[n]&&_e.value[n].change_pct)}function Qt(n,B){return at.num(_e.value[n]&&_e.value[n][B])}function Ze(){try{return localStorage.getItem("quant_token")||""}catch{return""}}function bt(){if(!$e||$e.readyState!==1)return;const n=(G.value||[]).map(B=>B.code);n.length!==0&&$e.send(JSON.stringify({subscribe:n}))}function Ut(){if(Xe&&(clearTimeout(Xe),Xe=null),$e){try{$e.onopen=null,$e.onmessage=null,$e.onerror=null,$e.onclose=null,$e.close()}catch{}$e=null}_e.value={},Ae.value=!1,Re.value="idle"}function ht(){const n=Ze();if(!n||!We.buildRealtimeWsUrl||Re.value==="open"||Re.value==="connecting")return;let B;try{B=We.buildRealtimeWsUrl()+"?token="+encodeURIComponent(n)}catch{Re.value="offline",Ae.value=!0;return}Re.value="connecting";let ie=null;try{ie=new WebSocket(B)}catch{Re.value="offline",Ae.value=!0;return}$e=ie,ie.onopen=function(){Re.value="open",et=0,bt()},ie.onmessage=function(Ce){let Me=null;try{Me=JSON.parse(Ce.data||"{}")}catch{return}if(!Me||Me.type!=="quotes")return;if(Ae.value=!!Me.degraded,Me.degraded||!Array.isArray(Me.data)){_e.value={};return}const pt={};Me.data.forEach(function(Ge){Ge&&Ge.code&&(pt[Ge.code]=Ge)}),_e.value=pt},ie.onerror=function(){Re.value="offline",Ae.value=!0},ie.onclose=function(){Re.value="offline",et<Rt?(et++,Xe=setTimeout(function(){Re.value!=="open"&&ht()},Se*et)):Ae.value=!0}}h(G,function(){Re.value==="open"&&bt()}),Ze()&&setTimeout(ht,500);async function Gt(){if(!l.value)return;H.value=!0,J.value=null,s.value="",O.value="fetching",K.value=0;const n=Date.now(),B=setInterval(()=>{H.value&&(K.value=Math.round((Date.now()-n)/1e3))},500);try{const ie=await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:l.value.stock,stock_name:l.value.name||l.value.stock,strategy:te.value})});O.value="calculating";const Ce=await ie.json();O.value="analyzing",Ce.success?(await nextTick(),J.value=Ce.data,C.value="ai",Q()):(s.value=Ce.message||"评估失败",ElementPlus.ElMessage.error(s.value))}catch(ie){s.value=ie&&ie.message&&!String(ie.message).includes("Failed to fetch")?ie.message:"网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(s.value)}finally{clearInterval(B),H.value=!1,K.value=0,s.value?O.value="":(O.value="done",setTimeout(()=>{O.value==="done"&&(O.value="")},800))}}const qt=50,Je=f(0),At=f(!1),kt=I(()=>m.value.length<Je.value);async function Q(){fe.value=!0,Te.value=!1;try{if(!localStorage.getItem("quant_token")){m.value=[];return}const B=await fetch(`/api/ai/history?limit=${qt}&offset=0`);if(B.status===401){console.warn("[loadAiHistory] 401, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),d.value=null;return}const ie=await B.json();ie.success?(m.value=ie.data||[],Je.value=ie.total!=null?ie.total:m.value.length):Te.value=!0}catch(n){console.error("[loadAiHistory] error:",n),Te.value=!0}finally{fe.value=!1}}async function he(){if(!(At.value||!kt.value)){At.value=!0;try{const B=await(await fetch(`/api/ai/history?limit=${qt}&offset=${m.value.length}`)).json();if(B.success&&Array.isArray(B.data)){const ie=new Set(m.value.map(Me=>Me.id)),Ce=B.data.filter(Me=>!ie.has(Me.id));m.value=m.value.concat(Ce),B.total!=null&&(Je.value=B.total)}}catch(n){console.warn("[loadMoreAiHistory] error:",n)}finally{At.value=!1}}}async function tt(n){try{await ElementPlus.ElMessageBox.confirm("确定要删除这条评估记录吗？","确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});const ie=await(await fetch(`/api/ai/history/${n}`,{method:"DELETE"})).json();if(ie.success){ElementPlus.ElMessage.success("删除成功"),Q();const Ce=b.value.indexOf(n);Ce>=0&&b.value.splice(Ce,1)}else ElementPlus.ElMessage.error(ie.message||"删除失败")}catch{}}function _t(n){const B=b.value.indexOf(n);B>=0?b.value.splice(B,1):b.value.push(n)}function lt(){b.value=[]}function It(){c.value=[]}async function ea(){const n=b.value;if(n.length===0)return;const B=m.value.filter(ie=>n.includes(ie.id)).map(ie=>ie.stock_code);p.value=!0,z.value=[...new Set(B)].join(",")}async function na(){const n=b.value;if(n.length===0)return;const B=m.value.filter(Me=>n.includes(Me.id)),ie=[...new Map(B.map(Me=>[Me.stock_code,Me])).values()];let Ce=0;for(const Me of ie)re.value.has(Me.stock_code)||(await De(Me.stock_code,Me.stock_name||Me.stock_code),Ce++);Ce>0?ElementPlus.ElMessage.success(`已加入 ${Ce} 只股票到自选`):ElementPlus.ElMessage.info("所选股票已在自选中")}async function oa(){const n=b.value;if(n.length===0)return;const B=m.value.filter(Ce=>n.includes(Ce.id)),ie=[...new Map(B.map(Ce=>[Ce.stock_code,Ce])).values()];try{const Me=await(await fetch("/api/portfolio/positions/batch",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stocks:ie.map(pt=>({stock_code:pt.stock_code,stock_name:pt.stock_name||""}))})})).json();Me&&Me.success?ElementPlus.ElMessage.success(`已登记 ${Me.count||ie.length} 只到组合，请在组合页补充成本与数量`):ElementPlus.ElMessage.error(Me&&Me.detail||"批量加入组合失败")}catch(Ce){console.warn("batchAddToPortfolio failed:",Ce),ElementPlus.ElMessage.error("批量加入组合失败，请稍后重试")}typeof loadPortfolio=="function"&&loadPortfolio()}async function ta(){if(c.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定移除选中的 ${c.value.length} 只股票？`,"提示",{type:"warning"});for(const n of c.value)await Ve(n);c.value=[],ElementPlus.ElMessage.success("已移除")}catch(n){n&&n.message!=="cancel"&&console.warn("batchRemoveWatchlist:",n)}}function $t(n){const B=c.value.indexOf(n);B>=0?c.value.splice(B,1):c.value.push(n)}function Kt(){b.value.length===m.value.length?b.value=[]:b.value=m.value.map(n=>n.id)}function Nt(){c.value.length===G.value.length?c.value=[]:c.value=G.value.map(n=>n.code)}async function Yt(){if(b.value.length!==0)try{await ElementPlus.ElMessageBox.confirm(`确定要删除选中的 ${b.value.length} 条记录吗？`,"确认批量删除",{confirmButtonText:"确定删除",cancelButtonText:"取消",type:"warning"});const B=await(await fetch("/api/ai/history/batch-delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:b.value})})).json();B.success?(ElementPlus.ElMessage.success(B.message),b.value=[],Q()):ElementPlus.ElMessage.error(B.message||"删除失败")}catch{}}async function gt(){try{const B=await(await fetch("/api/ai/auto-config")).json();B.success&&(y.value=B.data,B.data.evaluate_scope&&(L.value=B.data.evaluate_scope))}catch(n){console.warn("loadAutoEvaluateConfig failed:",n)}}async function v(){U.value=!0;try{y.value.evaluate_scope=L.value;const B=await(await fetch("/api/ai/auto-config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y.value)})).json();B.success?(ElementPlus.ElMessage.success("自动评估配置已保存"),M.value=!1):ElementPlus.ElMessage.error(B.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{U.value=!1}}const X=f(!1);async function le(){X.value=!0;try{const B=await(await fetch("/api/watchlist")).json();B.success&&(G.value=B.stocks||[])}catch(n){console.warn("loadWatchlist failed:",n)}finally{X.value=!1}}async function De(n,B){try{const Ce=await(await fetch("/api/watchlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n,name:B})})).json();if(Ce.success)return Ce.existed||G.value.push({code:n,name:B,added_at:new Date().toISOString()}),!0}catch(ie){console.warn("addToWatchlist failed:",ie)}return!1}async function Ve(n){try{await fetch(`/api/watchlist/${encodeURIComponent(n)}`,{method:"DELETE"}),G.value=G.value.filter(B=>B.code!==n)}catch(B){console.warn("removeFromWatchlist failed:",B)}}async function Qe(){try{await ElementPlus.ElMessageBox.confirm("确定清空所有自选股？","提示",{type:"warning"}),await fetch("/api/watchlist",{method:"DELETE"}),G.value=[],ElementPlus.ElMessage.success("自选已清空")}catch(n){console.warn("clearWatchlist failed:",n)}}async function Oe(n,B){re.value.has(n)?(await Ve(n),ElementPlus.ElMessage.info("已移除自选")):await De(n,B)&&ElementPlus.ElMessage.success("已加入自选")}async function rt(n,B){window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(n,B||"");const ie=new Date().toISOString().split("T")[0],Ce=k.value||ie;C.value="kline",J.value=null,s.value="",i("stockKlineChart"),l.value=null,D.value=!0,S.value=!1,x.value=!0,nextTick(()=>F());try{const Me=await fetch(`/api/calendar/stock/${encodeURIComponent(n)}?date=${Ce}`);l.value=await Me.json()}catch{l.value={stock:n,name:B,total_days:0}}finally{D.value=!1}await nextTick(),await q("daily"),r(),o(n)}const st=f(!1);async function ct(){var n;if(G.value.length!==0){st.value=!0;try{const ie=await(await fetch("/api/watchlist/kline/preload",{method:"POST",headers:{"Content-Type":"application/json"}})).json();ie.success&&ie.loaded>0?(((n=ie.details)==null?void 0:n.loaded)||[]).forEach(Ce=>ae.value.add(Ce.code)):ie.loaded===0&&ie.total>0&&ElementPlus.ElMessage.warning("K线预加载: 全部失败, 请检查数据源")}catch(B){console.error("预加载K线失败:",B)}finally{st.value=!1}}}async function Ot(n,B){H.value=!0,J.value=null,s.value="",O.value="fetching",S.value=!1,i();const ie=new Date().toISOString().split("T")[0],Ce=k.value||ie;try{const Me=await fetch(`/api/calendar/stock/${encodeURIComponent(n)}?date=${Ce}`);l.value=await Me.json()}catch{l.value={stock:n,name:B,total_days:0}}C.value="ai",x.value=!0,await nextTick();try{const pt=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:n,stock_name:B})})).json();pt.success?(J.value=pt.data,Q()):(s.value=pt.message||"评估失败",ElementPlus.ElMessage.error(s.value))}catch{s.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(s.value)}finally{H.value=!1,O.value=""}}async function Dt(){G.value.length!==0&&(p.value=!0,z.value=G.value.map(n=>n.code).join(","))}async function N(){c.value.length!==0&&(p.value=!0,z.value=c.value.join(","))}async function ge(){if(!Pe.value.trim()){ne.value=[];return}se.value=!0;try{const B=await(await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(Pe.value)}`)).json();ne.value=(B.results||[]).filter(ie=>!re.value.has(ie.code))}catch(n){console.warn("searchStockForWatchlist failed:",n)}finally{se.value=!1}}async function Le(){try{const B=await(await fetch("/api/data-refresh/config")).json();be.value=B}catch(n){console.error("加载数据刷新配置失败:",n)}}async function Ee(){Ie.value=!0;try{(await(await fetch("/api/data-refresh/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(be.value)})).json()).success?ElementPlus.ElMessage.success("数据刷新配置已保存"):ElementPlus.ElMessage.error("保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}finally{Ie.value=!1}}async function ze(){var n;Ne.value=!0;try{const ie=await(await fetch("/api/data-refresh/reload",{method:"POST"})).json();ie.success?(ElementPlus.ElMessage.success(`数据刷新成功: ${((n=ie.parser_stats)==null?void 0:n.dates_count)||0}交易日`),P.clear(),await Le()):ElementPlus.ElMessage.error(ie.error||"刷新失败")}catch{ElementPlus.ElMessage.error("刷新请求失败")}finally{Ne.value=!1}}const He=f(!1);async function mt(){He.value=!0;try{const B=await(await fetch("/api/data-refresh/pull",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_pool:[]})})).json();if(B.success){const ie=B.result||{},Ce=B.financial||{};ElementPlus.ElMessage.success(`拉取完成: 日线 ${ie.pulled||0}/${ie.total||0}, 财务 ${Ce.pulled||0}/${Ce.total||0}`),P.clear(),await Le()}else ElementPlus.ElMessage.error(B.error||"拉取失败")}catch{ElementPlus.ElMessage.error("拉取请求失败")}finally{He.value=!1}}const xt=I(()=>{const n={};for(const B of m.value){const ie=(B.evaluate_time||"").split("T")[0];n[ie]||(n[ie]=[]),n[ie].push(B)}for(const B in n)n[B].sort((ie,Ce)=>Ce.evaluate_time.localeCompare(ie.evaluate_time));return n}),it=I(()=>{const n={};for(const B of m.value){const ie=B.stock_code;n[ie]||(n[ie]=[]),n[ie].push(B)}for(const B in n)n[B].sort((ie,Ce)=>Ce.evaluate_time.localeCompare(ie.evaluate_time));return n}),Jt=I(()=>{const n={};for(const B of m.value){const ie=(B.evaluate_time||"").split("T")[0].slice(0,7);n[ie]||(n[ie]=[]),n[ie].push(B)}for(const B in n)n[B].sort((ie,Ce)=>Ce.evaluate_time.localeCompare(ie.evaluate_time));return n}),ya=I(()=>Object.keys(it.value).length),ba=I(()=>{const n=m.value.length;return n===0?[]:[{label:"90+",min:90,max:100,color:"var(--success-text)"},{label:"80-89",min:80,max:89,color:"var(--success-text)"},{label:"70-79",min:70,max:79,color:"color-mix(in srgb, var(--success-text) 55%, var(--bg-card))"},{label:"60-69",min:60,max:69,color:"var(--warning-text)"},{label:"<60",min:0,max:59,color:"var(--danger-text)"}].map(ie=>{const Ce=m.value.filter(Me=>Me.result.total_score>=ie.min&&Me.result.total_score<=ie.max).length;return{...ie,count:Ce,pct:Math.round(Ce/n*100)}})});async function ra(){if(!ue.value)return;const n=G.value.find(B=>B.code===ue.value);if(n){H.value=!0,J.value=null,s.value="",O.value="fetching";try{l.value={stock:n.code,name:n.name,total_days:0},x.value=!0,C.value="ai",await nextTick();const ie=await(await fetch("/api/ai/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:n.code,stock_name:n.name,strategy:te.value})})).json();ie.success?(J.value=ie.data,Q(),ue.value=""):(s.value=ie.message||"评估失败",ElementPlus.ElMessage.error(s.value))}catch{s.value="网络异常或后端不可用，评估失败",ElementPlus.ElMessage.error(s.value)}finally{H.value=!1,O.value=""}}}function Pa(n){const B=E.value.indexOf(n);B>=0?E.value.splice(B,1):E.value.push(n)}function da(n){const ie=(xt.value[n]||[]).map(Me=>Me.id);ie.every(Me=>b.value.includes(Me))?b.value=b.value.filter(Me=>!ie.includes(Me)):ie.forEach(Me=>{b.value.includes(Me)||b.value.push(Me)})}function Ra(n){const ie=(Jt.value[n]||[]).map(Me=>Me.id);ie.every(Me=>b.value.includes(Me))?b.value=b.value.filter(Me=>!ie.includes(Me)):ie.forEach(Me=>{b.value.includes(Me)||b.value.push(Me)})}function ua(n){const B=oe.value.indexOf(n);B>=0?oe.value.splice(B,1):oe.value.push(n)}function qa(n){const ie=(it.value[n]||[]).map(Me=>Me.id);ie.every(Me=>b.value.includes(Me))?b.value=b.value.filter(Me=>!ie.includes(Me)):ie.forEach(Me=>{b.value.includes(Me)||b.value.push(Me)})}const Ft={},wa={};function Ea(n,B,ie){if(!n||(ie&&(wa[B]={el:n,records:ie}),Ft[B]===n))return;const Ce=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Me=()=>{Object.keys(Ft).forEach(nt=>{if(Ft[nt]&&Ft[nt]!==n){try{Ft[nt].dispose()}catch{}delete Ft[nt]}});const pt=[...ie].sort((nt,Ht)=>nt.evaluate_time.localeCompare(Ht.evaluate_time)),Ge=pt.map(nt=>(nt.evaluate_time||"").split("T")[0]),St=pt.map(nt=>{var Ht;return((Ht=nt.result)==null?void 0:Ht.total_score)??null}),aa=pt.map(nt=>{var Ht;return((Ht=nt.result)==null?void 0:Ht.level)??""}),Pt={primary:W("--qc-primary-600")||"#b8922a",textPrimary:W("--text-primary")||"#1f2937",textSecondary:W("--text-secondary")||"#6b7280",border:W("--chart-axis")||"#b9b2a6",axis:W("--chart-axis")||"#b9b2a6",split:W("--chart-split")||"#e7e1d6",up:W("--qc-market-up")||"#e63946",down:W("--qc-market-down")||"#2e7d32"},sa=[];for(let nt=1;nt<St.length;nt++)St[nt]!=null&&St[nt-1]!=null&&Math.abs(St[nt]-St[nt-1])>=15&&sa.push({name:"大幅变化",coord:[Ge[nt],St[nt]],value:(St[nt]-St[nt-1]>0?"↑":"↓")+Math.abs(St[nt]-St[nt-1]),symbol:"pin",symbolSize:32,itemStyle:{color:St[nt]-St[nt-1]>0?Pt.up:Pt.down}});const ia=echarts.init(n),Ct=window.__quantModules&&window.__quantModules.echartsTheme;Ct&&typeof Ct.getEChartsTheme=="function"&&ia.setOption(Ct.getEChartsTheme()),ia.setOption({tooltip:{trigger:"axis",backgroundColor:W("--bg-card")||"#ffffff",borderColor:Pt.border,textStyle:{color:Pt.textPrimary},formatter:function(nt){var wt;const Ht=(wt=nt[0])==null?void 0:wt.dataIndex,ga=Ht!=null?aa[Ht]:"";return Ge[Ht]+"<br/>得分: "+St[Ht]+(ga?" ("+ga+")":"")}},grid:{left:40,right:16,top:16,bottom:24},xAxis:{type:"category",data:Ge,axisLabel:{fontSize:10,rotate:30,color:Pt.textSecondary},axisLine:{lineStyle:{color:Pt.axis}},boundaryGap:!1},yAxis:{type:"value",min:0,max:100,axisLabel:{fontSize:10,color:Pt.textSecondary},splitLine:{lineStyle:{color:Pt.split}}},series:[{data:St,type:"line",smooth:!0,lineStyle:{color:Pt.primary,width:2},itemStyle:{color:Pt.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:W("--primary-rgb")?"rgba("+W("--primary-rgb")+",0.3)":"rgba(64,158,255,0.3)"},{offset:1,color:W("--primary-rgb")?"rgba("+W("--primary-rgb")+",0.02)":"rgba(64,158,255,0.02)"}])},markPoint:sa.length>0?{data:sa}:void 0}]}),Ft[B]=ia};Ce?Ce().then(Me).catch(()=>{}):Me()}function za(){Object.keys(wa).forEach(n=>{const B=wa[n];if(!(!B||!B.el)){if(Ft[n]){try{Ft[n].dispose()}catch{}delete Ft[n]}Ea(B.el,n,B.records)}})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__watchlistTrendRegistered&&(window.__quantModules.echartsTheme.__watchlistTrendRegistered=!0,window.__quantModules.echartsTheme.registerChart(za));async function ka(n){J.value=n,S.value=!1,i();try{const B=await fetch(`/api/calendar/stock/${n.stock_code}?date=${k.value}`);l.value=await B.json()}catch{l.value={stock:n.stock_code,name:n.stock_name||n.stock_code,total_days:0,history:[]}}x.value=!0,C.value="ai"}async function _(){if(!z.value.trim()){ElementPlus.ElMessage.warning("请输入股票代码");return}const n=z.value.split(/[,，\s]+/).filter(Ge=>Ge.trim());if(n.length===0)return;ee.value=!0,Y.value=n.length,$.value=0,R.value="",j.value={},A.value={},w.value={},n.forEach(Ge=>{j.value[Ge]="pending",A.value[Ge]=null});const B={"Content-Type":"application/json"};let ie=0,Ce=0,Me=!1;try{const Ge=await fetch("/api/ai/batch-evaluate/stream",{method:"POST",headers:B,body:JSON.stringify({stock_codes:n})});if(Ge.ok&&Ge.body){Me=!0;const St=Ge.body.getReader(),aa=new TextDecoder("utf-8");let Pt="",sa=!1;for(;!sa;){const{value:ia,done:Ct}=await St.read();sa=Ct,Pt+=aa.decode(ia||new Uint8Array,{stream:!sa});let nt;for(;(nt=Pt.indexOf(`

`))>=0;){const Ht=Pt.slice(0,nt);Pt=Pt.slice(nt+2);const ga=Ht.split(`
`).find(Ia=>Ia.startsWith("data: "));if(!ga)continue;let wt;try{wt=JSON.parse(ga.slice(6))}catch{continue}wt.type==="start"?wt.total&&(Y.value=wt.total):wt.type==="item"?($.value++,R.value=wt.stock_code,wt.success?(j.value[wt.stock_code]="success",A.value[wt.stock_code]=wt,ie++):(j.value[wt.stock_code]="error",w.value[wt.stock_code]=wt.error||"评估失败",Ce++)):wt.type==="done"&&(typeof wt.success=="number"&&(ie=wt.success),typeof wt.fail=="number"&&(Ce=wt.fail))}}if(Pt.trim()){const ia=Pt.split(`
`).find(Ct=>Ct.startsWith("data: "));if(ia)try{const Ct=JSON.parse(ia.slice(6));Ct.type==="item"?($.value++,R.value=Ct.stock_code,Ct.success?(j.value[Ct.stock_code]="success",A.value[Ct.stock_code]=Ct,ie++):(j.value[Ct.stock_code]="error",w.value[Ct.stock_code]=Ct.error||"评估失败",Ce++)):Ct.type==="done"&&(typeof Ct.success=="number"&&(ie=Ct.success),typeof Ct.fail=="number"&&(Ce=Ct.fail))}catch{}}}}catch{Me=!1}if(!Me){ie=0,Ce=0,$.value=0;for(const Ge of n){R.value=Ge,j.value[Ge]="running";try{const aa=await(await fetch("/api/ai/evaluate",{method:"POST",headers:B,body:JSON.stringify({stock_code:Ge.trim(),stock_name:Ge.trim()})})).json();aa.success?(j.value[Ge]="success",A.value[Ge]=aa.data,ie++):(j.value[Ge]="error",w.value[Ge]=aa.message&&aa.message!=="success"?aa.message:"评估失败",Ce++)}catch(St){j.value[Ge]="error",w.value[Ge]="网络错误: "+(St&&St.message?St.message:St),Ce++}$.value++}}R.value="",await Q();const pt=n.length;setTimeout(()=>{Ce===0?ElementPlus.ElMessage.success(`评估完成 成功 ${ie}/${pt}`):ElementPlus.ElMessage.warning(`评估完成 成功 ${ie}/${pt} · 失败 ${Ce}`),ee.value=!1},500)}return{quickEvalStock:ue,evalStrategy:te,watchlistSort:T,watchlist:G,watchlistCodes:re,sortedWatchlist:Z,getWatchlistScore:de,getLatestScore:me,addSearchResult:pe,evaluatedCodes:ye,klineLoadedCodes:ae,markKlineLoaded:xe,watchlistSearch:Pe,watchlistResults:ne,watchlistSearching:se,dataRefreshConfig:be,dataRefreshReloading:Ne,dataRefreshSaving:Ie,aiHistoryLoading:fe,aiHistoryError:Te,aiHistoryTotal:Je,aiHistoryLoadingMore:At,hasMoreAiHistory:kt,loadMoreAiHistory:he,watchlistLoading:X,doAiEvaluate:Gt,loadAiHistory:Q,deleteSingleHistory:tt,toggleSelectHistory:_t,clearSelection:lt,clearWatchlistSelection:It,batchReevaluateHistory:ea,batchAddToWatchlist:na,batchAddToPortfolio:oa,batchRemoveWatchlist:ta,toggleSelectWatchlist:$t,selectAllHistory:Kt,selectAllWatchlist:Nt,deleteSelectedHistory:Yt,loadAutoEvaluateConfig:gt,saveAutoEvaluateConfig:v,loadWatchlist:le,addToWatchlist:De,removeFromWatchlist:Ve,clearWatchlist:Qe,toggleWatchlist:Oe,showStockKline:rt,preloadingKline:st,preloadWatchlistKline:ct,watchlistEvaluate:Ot,batchEvaluateWatchlist:Dt,batchEvaluateSelected:N,searchStockForWatchlist:ge,loadDataRefreshConfig:Le,saveDataRefreshConfig:Ee,triggerDataReload:ze,triggerDataPull:mt,dataPullRunning:He,groupedByDate:xt,aiHistoryByStock:it,groupedByMonth:Jt,aiHistoryStockCount:ya,scoreDistribution:ba,quickEvaluate:ra,toggleDateExpand:Pa,toggleSelectDate:da,toggleSelectMonth:Ra,toggleStockExpand:ua,toggleSelectStock:qa,registerTrendChart:Ea,viewAiResult:ka,doBatchEvaluate:_,realtimeQuotes:_e,realtimeDegraded:Ae,realtimeWsState:Re,connectRealtimeQuotes:ht,disconnectRealtimeQuotes:Ut,quoteWarningFor:Tt,realtimeQuoteColor:ft,realtimePriceText:zt,realtimePctText:Wt,realtimeRatioText:Qt,REALTIME_DEGRADED_TEXT:Ue,REALTIME_FALLBACK_TEXT:yt}}}})();(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.portfolio={create(a){const{ref:t,computed:g}=Vue,e=t([]),u=t(null),f=t([]),I=t(!1),h=t(!1),d=t(!1),k=t({stock_code:"",stock_name:"",cost_price:null,quantity:null}),l=t(!1),C=t(!1),x=t({stock_code:"",stock_name:"",action:"buy",price:null,quantity:null,trade_date:"",note:""}),D=t(!1),S=t("positions"),P=t(30),F=t(!1),q=t(""),r=t(!1),i=t({dates:[],equity:[],values:[]}),m=g(()=>e.value.length),H=t("metrics"),O=t(!1),K=t(""),s=t(!1),J=t({metrics:null,rules:[],rebalance:null}),o=g(function(){const p=J.value.metrics;if(!p)return[];const W=function(te){return te==null?"--":Number(te).toFixed(2)+"%"},ue=function(te){return te==null?"--":Number(te).toFixed(2)};return[{key:"volatility",label:"年化波动率",value:W(p.volatility)},{key:"var_historical",label:"VaR(95% 历史)",value:W(p.var_historical)},{key:"var_parametric",label:"VaR(95% 参数)",value:W(p.var_parametric)},{key:"cvar",label:"CVaR(95%)",value:W(p.cvar)},{key:"max_drawdown",label:"最大回撤",value:W(p.max_drawdown)},{key:"annual_return",label:"年化收益",value:W(p.annual_return)},{key:"sharpe_ratio",label:"夏普比率",value:ue(p.sharpe_ratio)},{key:"sortino_ratio",label:"Sortino",value:ue(p.sortino_ratio)},{key:"calmar_ratio",label:"Calmar",value:ue(p.calmar_ratio)},{key:"beta",label:"Beta",value:ue(p.beta)}]});async function y(){O.value=!0;try{const p=await(await fetch("/api/portfolio/risk?days=60")).json(),W=await(await fetch("/api/portfolio/risk-rules?days=60")).json(),ue=p&&p.success?p.risk:null,te=W&&W.success?W.rules||[]:[],T=W&&W.success?W.rebalance:null;J.value={metrics:ue,rules:te,rebalance:T},s.value=!!(ue&&Object.keys(ue).length>0),K.value=p&&p.note||W&&W.note||""}catch(p){console.warn("[portfolio] 加载风险数据失败:",p),s.value=!1,K.value="风险数据加载失败"}finally{O.value=!1}}async function L(){I.value=!0,h.value=!1;try{const W=await(await fetch("/api/portfolio")).json();W.success?(e.value=W.positions||[],u.value=W.summary||null):h.value=!0}catch(p){console.warn("[portfolio] 加载持仓失败:",p),h.value=!0}finally{I.value=!1}}async function z(){const p=k.value,W=(p.stock_code||"").trim();if(!W){ElementPlus.ElMessage.warning("请输入股票代码");return}const ue=Number(p.cost_price),te=Number(p.quantity);if(!(ue>0)||!(te>0)){ElementPlus.ElMessage.warning("成本价与数量须为正数");return}l.value=!0;try{const G=await(await fetch("/api/portfolio/positions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({stock_code:W,stock_name:(p.stock_name||"").trim(),cost_price:ue,quantity:te})})).json();G.success?(ElementPlus.ElMessage.success(G.message||"持仓已更新"),d.value=!1,k.value={stock_code:"",stock_name:"",cost_price:null,quantity:null},await L(),U(P.value)):ElementPlus.ElMessage.error(G.message||"添加失败")}catch{ElementPlus.ElMessage.error("网络异常，添加失败")}finally{l.value=!1}}async function ee(p){try{await ElementPlus.ElMessageBox.confirm("确定删除持仓 "+p+" ？","删除持仓",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"})}catch{return}try{const ue=await(await fetch("/api/portfolio/positions/"+encodeURIComponent(p),{method:"DELETE"})).json();ue.success?(ElementPlus.ElMessage.success("已删除持仓"),await L(),R(),U(P.value)):ElementPlus.ElMessage.error(ue.message||"删除失败")}catch{ElementPlus.ElMessage.error("网络异常，删除失败")}}function Y(p,W){x.value={stock_code:p,stock_name:W||"",action:"buy",price:null,quantity:null,trade_date:"",note:""},C.value=!0}async function $(){const p=x.value;if(!p.stock_code){ElementPlus.ElMessage.warning("请选择持仓股票");return}const W=Number(p.price),ue=Number(p.quantity);if(!(W>0)||!(ue>0)){ElementPlus.ElMessage.warning("价格与数量须为正数");return}D.value=!0;try{const T=await(await fetch("/api/portfolio/trades",{method:"POST",headers:_authHeaders(),body:JSON.stringify({stock_code:p.stock_code,stock_name:p.stock_name||"",action:p.action,price:W,quantity:ue,trade_date:p.trade_date||"",note:(p.note||"").trim()})})).json();T.success?(ElementPlus.ElMessage.success(T.message||"调仓已记录"),C.value=!1,await L(),await R(),U(P.value)):ElementPlus.ElMessage.error(T.message||"记录失败")}catch{ElementPlus.ElMessage.error("网络异常，记录失败")}finally{D.value=!1}}async function R(){try{const W=await(await fetch("/api/portfolio/trades")).json();W.success&&(f.value=W.trades||[])}catch(p){console.warn("[portfolio] 加载调仓记录失败:",p)}}const j=p=>(getComputedStyle(document.documentElement).getPropertyValue(p)||"").trim();function A(p){if(!p||!p.length)return[];let W=p[0]||0;const ue=[];for(let te=0;te<p.length;te++){const T=p[te]||0;T>W&&(W=T),ue.push(W>0?Math.round((T-W)/W*1e3)/10:0)}return ue}function w(){const p={primary:j("--qc-primary-600")||"#b8922a",textPrimary:j("--text-primary")||"#1f2937",textSecondary:j("--text-secondary")||"#6b7280",border:j("--border-light")||"#e5e7eb",up:j("--color-rise")||"#E63946",down:j("--color-fall")||"#2E7D32"},W=i.value;return{tooltip:{trigger:"axis",backgroundColor:j("--bg-card")||"#ffffff",borderColor:p.border,textStyle:{color:p.textPrimary},formatter:function(ue){const te=ue[0]?ue[0].dataIndex:-1,T=W.dates[te]||"",G=W.equity[te],re=W.values[te];let fe=T||"";return G!=null&&(fe+="<br/>组合净值: "+G),re!=null&&(fe+="<br/>组合市值: "+re),fe}},grid:{left:48,right:48,top:20,bottom:30},xAxis:{type:"category",data:W.dates,boundaryGap:!1,axisLabel:{fontSize:10,color:p.textSecondary},axisLine:{lineStyle:{color:p.border}}},yAxis:[{type:"value",scale:!0,name:"净值",axisLabel:{fontSize:10,color:p.textSecondary},splitLine:{lineStyle:{color:p.border,type:"dashed"}}},{type:"value",name:"回撤%",axisLabel:{fontSize:10,color:p.down,formatter:"{value}%"},splitLine:{show:!1}}],series:[{name:"组合净值",type:"line",data:W.equity,smooth:!0,showSymbol:!1,lineStyle:{color:p.primary,width:2},itemStyle:{color:p.primary},areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:j("--primary-rgb")?"rgba("+j("--primary-rgb")+",0.25)":"rgba(37,99,235,0.25)"},{offset:1,color:j("--primary-rgb")?"rgba("+j("--primary-rgb")+",0.02)":"rgba(37,99,235,0.02)"}])}},{name:"回撤",type:"line",yAxisIndex:1,data:A(W.equity),smooth:!0,showSymbol:!1,lineStyle:{color:p.down,width:1.5},itemStyle:{color:p.down},areaStyle:{color:"rgba(46,125,50,0.15)"}}]}}function E(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposePortfolio&&window.__quantModules.charts.disposePortfolio("portfolioEquityChart")}function oe(p,W,ue){i.value={dates:p||[],equity:W||[],values:ue||[]},r.value=!!p&&p.length>0,r.value&&window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderPortfolioTo?window.__quantModules.charts.renderPortfolioTo("portfolioEquityChart",w,{key:"portfolio-equity"}):E()}async function U(p){F.value=!0,q.value="";const W=Number(p)||P.value||30;P.value=W;try{const te=await(await fetch("/api/portfolio/equity_curve?days="+W)).json();te.success?(q.value=te.note||"",oe(te.dates||[],te.equity||[],te.values||[])):(q.value="数据暂不可用",E())}catch(ue){console.warn("[portfolio] 加载收益曲线失败:",ue),q.value="数据暂不可用",E()}finally{F.value=!1}}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__portfolioChartRegistered&&(window.__quantModules.echartsTheme.__portfolioChartRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawPortfolio&&window.__quantModules.charts.redrawPortfolio("portfolioEquityChart")}));function b(p,W){if(p==null||p===""||isNaN(Number(p)))return"--";const ue=Number(p),te=W??2;return(ue>=0?"+":"")+ue.toFixed(te)}function c(p,W){if(p==null||p===""||isNaN(Number(p)))return"--";const ue=Number(p),te=W??2;return(ue>=0?"+":"")+ue.toFixed(te)+"%"}function M(p){if(p==null||p===""||isNaN(Number(p)))return"";const W=Number(p);return W>0?"portfolio-up":W<0?"portfolio-down":""}return{positions:e,summary:u,trades:f,loading:I,loadError:h,showAddForm:d,addForm:k,addSaving:l,tradeFormVisible:C,tradeForm:x,tradeSaving:D,portfolioTab:S,equityDays:P,equityLoading:F,equityNote:q,equityHasData:r,portfolioCount:m,loadPortfolio:L,addPosition:z,removePosition:ee,openTradeForm:Y,submitTrade:$,loadTrades:R,loadEquity:U,fmtSigned:b,fmtSignedPct:c,signClass:M,riskTab:H,riskLoading:O,riskNote:K,riskHasData:s,riskData:J,riskMetricList:o,loadRisk:y}}}})();(function(a,t){typeof je=="object"&&je.exports?je.exports=t():a.QuantBacktest=t()})(typeof self<"u"?self:void 0,function(){function a(d,k){var l=Number(d);return isFinite(l)?l:typeof k=="number"?k:0}function t(d){var k=Array.isArray(d)?d:[];if(k.length<2)return null;for(var l=-1/0,C=0,x=0,D=0,S=0,P=0;P<k.length;P++){var F=a(k[P].equity!=null?k[P].equity:k[P].value);F>l&&(l=F,C=P);var q=l>0?(l-F)/l*100:0;q>x&&(x=q,D=C,S=P)}function r(i){return k[i]&&k[i].date?k[i].date:""}return{maxDrawdown:Math.round(x*100)/100,peakIndex:D,troughIndex:S,peakDate:r(D),troughDate:r(S)}}function g(d){for(var k=d||{},l={},C=Object.keys(k).sort(),x=0;x<C.length;x++){var D=C[x],S=String(D).slice(0,4);/^\d{4}$/.test(S)&&(l[S]=(l[S]||0)+a(k[D]))}var P=Object.keys(l).sort();return P.map(function(F){return{year:F,return:Math.round(l[F]*100)/100}})}function e(d){var k=Array.isArray(d)?d:[],l={};k.forEach(function(D){(D.points||[]).forEach(function(S){S&&S.date&&(l[S.date]=1)})});var C=Object.keys(l).sort(),x=k.map(function(D){var S={};return(D.points||[]).forEach(function(P){P&&P.date&&(S[P.date]=a(P.value!=null?P.value:P.equity))}),{name:D.name||"",data:C.map(function(P){return P in S?S[P]:null})}});return{dates:C,series:x}}function u(d){var k=d||{},l=function(x){return a(x)},C=function(x,D){var S=l(x);return isFinite(S)?S.toFixed(D):"--"};return[{key:"total_return",label:"总收益",value:C(k.total_return,2),suffix:"%",dir:l(k.total_return)>=0?"up":"down"},{key:"annual_return",label:"年化收益",value:C(k.annual_return,2),suffix:"%",dir:l(k.annual_return)>=0?"up":"down"},{key:"max_drawdown",label:"最大回撤",value:C(k.max_drawdown,2),suffix:"%",dir:"down"},{key:"sharpe_ratio",label:"夏普比率",value:C(k.sharpe_ratio,2),suffix:"",dir:l(k.sharpe_ratio)>=0?"up":"down"},{key:"win_rate",label:"胜率",value:C(k.win_rate,1),suffix:"%",dir:""},{key:"profit_loss_ratio",label:"盈亏比",value:C(k.profit_loss_ratio,2),suffix:"",dir:""},{key:"total_trades",label:"交易次数",value:String(l(k.total_trades)),suffix:"次",dir:""},{key:"volatility",label:"波动率",value:C(k.volatility,2),suffix:"%",dir:""}]}function f(d){var k=d==null?"":String(d);return/[",\n]/.test(k)?'"'+k.replace(/"/g,'""')+'"':k}function I(d){var k=d||{},l=[];l.push("回测指标"),l.push("指标,数值"),(k.metrics||[]).forEach(function(r){l.push(f(r.label)+","+f((r.value||"")+(r.suffix||"")))}),l.push(""),l.push("净值曲线");var C=["日期"].concat((k.series||[]).map(function(r){return r.name}));l.push(C.map(f).join(","));for(var x=k.dates||[],D=k.series||[],S=0;S<x.length;S++){for(var P=[x[S]],F=0;F<D.length;F++){var q=D[F].data&&D[F].data[S];P.push(q??"")}l.push(P.map(f).join(","))}return l.push(""),l.push("交易明细"),l.push("日期,股票代码,方向,原因"),(k.trades||[]).forEach(function(r){l.push(f(r.date)+","+f(r.stock)+","+f(r.action)+","+f(r.reason))}),l.join(`
`)}function h(d){return d==="buy"?"买入":d==="sell"?"卖出":d||""}return{toNum:a,computeMaxDrawdownRegion:t,buildAnnualReturns:g,buildNavSeries:e,buildMetrics:u,buildBacktestCsv:I,tradeActionText:h}});(function(){window.__quantModules||(window.__quantModules={}),window.__quantModules.backtest={create(a){const{ref:t,computed:g}=Vue,e=window.QuantBacktest||{},u=a||{},f=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动策略"},{id:"index_enhance",name:"指数增强策略"},{id:"money_flow",name:"资金流策略"}],h=(Array.isArray(u.backtestStrategies)&&u.backtestStrategies.length?u.backtestStrategies:f).map(j=>({id:j.id,name:j.name})),d=t(h.length?[h[0].id]:[]),k=t(F()),l=t(1e5),C=t(3e-4),x=t(!1),D=t(!1),S=t(null),P=t("");function F(){const j=new Date,A=new Date;A.setFullYear(A.getFullYear()-1);const w=E=>E.getFullYear()+"-"+String(E.getMonth()+1).padStart(2,"0")+"-"+String(E.getDate()).padStart(2,"0");return[w(A),w(j)]}function q(j){const A=d.value.indexOf(j);A>=0?d.value.length>1&&d.value.splice(A,1):d.value.push(j)}function r(j){const A=h.find(w=>w.id===j);return A?A.name:j}function i(j){const A=j.summary||j;return{strategy_id:A.strategy_id,start_date:A.start_date,end_date:A.end_date,total_days:A.total_days,total_return:A.total_return,annual_return:A.annual_return,max_drawdown:A.max_drawdown,volatility:A.volatility,sharpe_ratio:A.sharpe_ratio,sortino_ratio:A.sortino_ratio,win_rate:A.win_rate,profit_loss_ratio:A.profit_loss_ratio,avg_positions:A.avg_positions!=null?A.avg_positions:A.avg_positions_per_day,total_trades:A.total_trades,turnover_rate:A.turnover_rate,success:A.success!==!1,message:A.message||"",insample_total_return:A.insample_total_return!=null?A.insample_total_return:null,outsample_total_return:A.outsample_total_return!=null?A.outsample_total_return:null,out_sample_ratio:A.out_sample_ratio!=null?A.out_sample_ratio:.2,overfit_warning:!!A.overfit_warning,overfit_reason:A.overfit_reason||""}}function m(j){return(Array.isArray(j)?j:[]).map(A=>({date:A.date,value:A.equity!=null?A.equity:A.value}))}function H(j,A){const w=i(A),E=m(A.equity_curve),oe=A.monthly_returns||{},U=Array.isArray(A.trade_history)?A.trade_history:[],b={id:j,name:r(j),summary:w,equityCurve:E,monthlyReturns:oe,trades:U};let c=null;if(x.value){const M=Number(l.value)||1e5;c={name:"现金基准",points:E.map(p=>({date:p.date,value:M}))}}return{success:!0,mode:"single",strategies:[b],primary:b,benchmark:c,period:(w.start_date||"")+" ~ "+(w.end_date||"")}}function O(j,A){const w=A.strategy_results||{},E=j.map(b=>{const c=w[b];if(!c)return null;const M=i(c);return{id:b,name:r(b),summary:M,equityCurve:m(c.equity_curve),monthlyReturns:c.monthly_returns||{},trades:Array.isArray(c.trade_history)?c.trade_history:[]}}).filter(b=>b&&b.summary.success!==!1),oe=E.length?E[0]:null;let U=null;return x.value&&(U={name:"等权组合基准",points:m(A.portfolio_equity)}),{success:E.length>0,mode:"multi",strategies:E,primary:oe,benchmark:U,period:oe?oe.summary.start_date+" ~ "+oe.summary.end_date:""}}const K=g(()=>{const j=S.value;return!j||!j.primary?[]:e.buildMetrics?e.buildMetrics(j.primary.summary):[]}),s=g(()=>{const j=S.value;return!j||!j.primary||!j.primary.monthlyReturns?[]:e.buildAnnualReturns?e.buildAnnualReturns(j.primary.monthlyReturns):[]}),J=g(()=>{const j=S.value;return!j||!j.primary?[]:(j.primary.trades||[]).slice().sort((A,w)=>String(w.date||"").localeCompare(String(A.date||"")))}),o=g(()=>{const j=S.value;return!j||!j.strategies||j.strategies.length<2?[]:j.strategies.map(A=>({name:A.name,metrics:e.buildMetrics?e.buildMetrics(A.summary):[]}))}),y=g(()=>{const j=S.value;return!j||!j.primary?null:e.computeMaxDrawdownRegion?e.computeMaxDrawdownRegion(j.primary.equityCurve):null});async function L(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const A=d.value;if(!A.length){ElementPlus.ElMessage.warning("请至少选择一个策略");return}const w=k.value,E={start_date:w&&w[0]||void 0,end_date:w&&w[1]||void 0},oe={"Content-Type":"application/json"};D.value=!0,S.value=null,P.value="";try{if(A.length===1){const U=Object.assign({},E,{initial_capital:Number(l.value)||1e5,commission_rate:Number(C.value)||3e-4}),b=await fetch("/api/backtest/"+encodeURIComponent(A[0]),{method:"POST",headers:oe,body:JSON.stringify(U)});if(!b.ok){const M=await b.json().catch(()=>({}));throw new Error(M.detail||"回测失败")}const c=await b.json();if(!c.success)throw new Error(c.message||"回测失败");S.value=H(A[0],c)}else{const U=await fetch("/api/backtest/multi",{method:"POST",headers:oe,body:JSON.stringify(Object.assign({},E,{strategy_ids:A}))});if(!U.ok){const c=await U.json().catch(()=>({}));throw new Error(c.detail||"回测失败")}const b=await U.json();if(!b.success)throw new Error(b.message||"多策略回测失败");if(S.value=O(A,b.data||{}),!S.value.success)throw new Error("所选策略回测均失败，请检查策略与数据")}ElementPlus.ElMessage.success("回测完成")}catch(U){P.value=U&&U.message?U.message:"回测失败",ElementPlus.ElMessage.error(P.value)}finally{D.value=!1}}function z(){const j=S.value,A={dates:[],series:[]};if(!j)return A;const w=j.strategies.map(oe=>({name:oe.name,points:oe.equityCurve}));j.benchmark&&j.benchmark.points&&j.benchmark.points.length&&w.push({name:j.benchmark.name,points:j.benchmark.points});const E=e.buildNavSeries?e.buildNavSeries(w):A;return ee(E,j)}function ee(j,A){const w=W=>(getComputedStyle(document.documentElement).getPropertyValue(W)||"").trim(),E={primary:w("--qc-primary-600")||"#b8922a",success:w("--color-success")||"#4CAF50",accent:w("--color-accent")||"#F59E0B",info:w("--color-info")||"#1976d2",ai:w("--color-ai")||"#6366f1",textPrimary:w("--text-primary")||"#1f2937",textSecondary:w("--text-secondary")||"#6b7280",border:w("--border-light")||"#e5e7eb",up:w("--color-rise")||"#E63946",down:w("--color-fall")||"#2E7D32",bg:w("--bg-card")||"#ffffff"},oe=[E.primary,E.success,E.accent,E.info,E.ai],b=E.bg.length===7&&parseInt(E.bg.slice(1,3),16)<80?"rgba(15,23,42,0.94)":"rgba(255,255,255,0.94)",c=e.computeMaxDrawdownRegion?e.computeMaxDrawdownRegion(A.primary?A.primary.equityCurve:[]):null,M=c&&c.peakDate&&c.troughDate?{silent:!0,label:{show:!0,position:"insideTop",color:E.textPrimary,fontSize:11},data:[[{name:"最大回撤 "+c.maxDrawdown+"%",xAxis:c.peakDate,itemStyle:{color:E.down}},{xAxis:c.troughDate}]]}:void 0,p=j.series.map((W,ue)=>{const te=A.benchmark&&W.name===A.benchmark.name,T=oe[ue%oe.length];return{name:W.name,type:"line",data:W.data,smooth:!0,symbol:"none",connectNulls:!1,lineStyle:{width:te?2:2.4,type:te?"dashed":"solid",color:T},itemStyle:{color:T},emphasis:{focus:"series"},...ue===0&&M?{markArea:M}:{}}});return{tooltip:{trigger:"axis",confine:!0,backgroundColor:b,borderColor:E.border,textStyle:{color:E.textPrimary,fontSize:12}},legend:{type:"scroll",selectedMode:"multiple",icon:"roundRect",itemWidth:14,itemHeight:8,textStyle:{color:E.textSecondary,fontSize:11}},grid:{left:56,right:20,top:36,bottom:48},xAxis:{type:"category",data:j.dates,boundaryGap:!1,axisLine:{lineStyle:{color:E.border}},axisLabel:{color:E.textSecondary,fontSize:11}},yAxis:{type:"value",scale:!0,axisLabel:{color:E.textSecondary,fontSize:11},splitLine:{lineStyle:{color:E.border,type:"dashed"}}},dataZoom:[{type:"inside"},{type:"slider",height:18,bottom:8,borderColor:E.border,textStyle:{color:E.textSecondary,fontSize:10}}],series:p}}function Y(j){if(!j){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.disposeBacktest&&window.__quantModules.charts.disposeBacktest("backtestNavChart");return}window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.renderBacktestTo&&window.__quantModules.charts.renderBacktestTo("backtestNavChart",z,{key:"bt-nav"})}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__backtestWorkbenchRegistered&&(window.__quantModules.echartsTheme.__backtestWorkbenchRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules&&window.__quantModules.charts&&window.__quantModules.charts.redrawBacktest&&window.__quantModules.charts.redrawBacktest("backtestNavChart")}));function $(){const j=S.value;if(!j||!j.primary){ElementPlus.ElMessage.warning("暂无回测结果可导出");return}const A=j.strategies.map(p=>({name:p.name,points:p.equityCurve}));j.benchmark&&A.push({name:j.benchmark.name,points:j.benchmark.points});const w=e.buildNavSeries?e.buildNavSeries(A):{dates:[],series:[]},E=e.tradeActionText||(p=>p),oe=J.value.map(p=>({date:p.date,stock:p.stock,action:E(p.action),reason:p.reason})),U=e.buildBacktestCsv?e.buildBacktestCsv({metrics:K.value,dates:w.dates,series:w.series,trades:oe}):"",b=new Blob(["\uFEFF"+U],{type:"text/csv;charset=utf-8"}),c=URL.createObjectURL(b),M=document.createElement("a");M.href=c,M.download="backtest-"+j.strategies.map(p=>p.id).join("_")+"-"+new Date().toISOString().slice(0,10)+".csv",M.click(),URL.revokeObjectURL(c),ElementPlus.ElMessage.success("回测结果已导出 CSV")}function R(j,A){return j==null||j===""||isNaN(Number(j))?"--":Number(j).toFixed(A??2)}return{btStrategyOptions:h,btSelectedStrategies:d,toggleBtStrategy:q,btDateRange:k,btCapital:l,btCommissionRate:C,btIncludeBenchmark:x,btRunning:D,btResult:S,btError:P,btMetrics:K,btAnnualReturns:s,btTrades:J,btStrategyMetricsRows:o,btDrawdownRegion:y,runBacktestWorkbench:L,exportBacktestCSV:$,registerBacktestNavChart:Y,btFmtNum:R}}}})();(function(){const{ref:a,computed:t,watch:g,onUnmounted:e}=Vue,u=l=>(getComputedStyle(document.documentElement).getPropertyValue(l)||"").trim(),f=72,I={gdp:"GDP增长",corporate:"企业盈利",inventory:"库存周期",employment:"就业市场",policy:"货币政策"},h={stock:"股票",bond:"债券",commodity:"大宗商品",cash:"现金"},d={"🌱":"sprout","🔥":"flame","🌾":"wheat","❄️":"snowflake","📈":"trending-up","📉":"trending-down","📊":"bar-chart-3","💹":"line-chart","🏭":"factory","💰":"banknote","🛢":"fuel"},k={recovery:"股票为王 · 现金贬值",overheat:"商品为王 · 债券贬值",stagflation:"现金为王 · 商品次之",recession:"债券为王 · 现金次之"};window.useMerrillClock=function(){const l=a({stage:"recovery",stage_cn:"复苏",stage_name:"复苏期",name:"复苏期",icon:"sprout",color:"#27AE60",description:"2025年开启新一轮复苏周期，政策发力，经济触底回升",timing:{current_stage_start_date:"2025年初",duration_days:500,avg_duration_months:18,progress_percent:72},indicators:{pmi:50.8,gdp_growth:5.3,cpi:.8,m2_growth:9.8}}),C=a({}),x=a(!1),D=a({}),S=a({cycles:[]}),P=a([]),F=a(0),q=a(!1),r=a({autoRefresh:!0,refreshInterval:300}),i=a(""),m=a(""),H=a(!1),O=a("");let K=null;const s={x:0,y:0},J=t(()=>{const Z=C.value;return["recession","recovery","overheat","stagflation"].map(me=>{const pe=Z[me]||{};return{key:me,name:pe.name||me,icon:d[pe.icon]||"bar-chart-3",color:pe.color||u("--text-tertiary")||"#888",bg:"color-mix(in srgb, "+(pe.color||"#888")+" 14%, var(--bg-card))",textColor:"color-mix(in srgb, "+(pe.color||"#888")+" 48%, var(--qc-foreground))",tagline:pe.allocation&&k[me]||""}})}),o=t(()=>{var de,me,pe,ye;const Z=l.value.indicators||{};return[{key:"pmi",label:"PMI",value:(de=Z.pmi)==null?void 0:de.toFixed(2),color:Z.pmi>=50?u("--color-success")||"#43a047":u("--color-danger")||"#E53935"},{key:"gdp",label:"GDP增速",value:((me=Z.gdp_growth)==null?void 0:me.toFixed(2))+"%",color:u("--color-success")||"#43a047"},{key:"cpi",label:"CPI同比",value:((pe=Z.cpi)==null?void 0:pe.toFixed(2))+"%",color:Z.cpi>1.2?u("--color-danger")||"#E53935":u("--color-success")||"#43a047"},{key:"m2",label:"M2增速",value:((ye=Z.m2_growth)==null?void 0:ye.toFixed(2))+"%",color:u("--color-success")||"#43a047"}]}),y=Z=>{Z=Z||{};const de=[{key:"growth",label:"增长"},{key:"inflation",label:"通胀"},{key:"liquidity",label:"流动性"},{key:"employment",label:"就业"},{key:"external",label:"外部"}],me=()=>u("--color-success")||"#43a047",pe=()=>u("--color-danger")||"#E53935",ye=()=>u("--color-warning")||"#FF9800",ae={宽松:me(),中位:ye(),偏低:pe(),高增长:me(),承压:pe(),不利:pe()};return de.map(xe=>{const Pe=Z[xe.key]||{},ne=Pe.score||0,se=Math.min(100,Math.max(5,(ne+2)*25)),be=ne>=.3?"#66BB6A":ne>=-.3?"#FFB74D":"#EF5350",Ne=ne>=0?"#66BB6A":"#EF5350";return{key:xe.key,label:xe.label,scoreStr:ne.toFixed(2),level:Pe.level||"—",barWidth:se,barColor:be,scoreColor:Ne,color:ae[Pe.level]||"#888888"}})},L=t(()=>y(l.value.dimension_scores)),z=t(()=>y(D.value._dimensions)),ee=t(()=>{var de;const Z=((de=l.value.confidence)==null?void 0:de.level)||"";return Z==="高"?"#43a047":Z==="中"?"#FF9800":Z==="低"?"#E53935":"var(--text-secondary)"}),Y=t(()=>{var pe,ye,ae,xe;const Z=C.value,de={recovery:0,overheat:1,stagflation:2,recession:3},me={};for(const[Pe,ne]of Object.entries(Z))me[Pe]={name:ne.name,icon:ne.icon,color:ne.color,lightColor:ne.bg_color,duration:"~"+(((pe=ne.historical_stats)==null?void 0:pe.avg_duration_months)||18)+"个月",order:de[Pe]||0,period:((ae=(ye=ne.case_studies)==null?void 0:ye[0])==null?void 0:ae.split("：")[0])||"",avgMonths:((xe=ne.historical_stats)==null?void 0:xe.avg_duration_months)||18};return me}),$=t(()=>{var ne,se;const Z=l.value.stage,me={recovery:{x:150,y:150},overheat:{x:150,y:50},stagflation:{x:50,y:50},recession:{x:50,y:150}}[Z]||{x:150,y:150},pe=l.value.dimension_scores||{},ye=((ne=pe.growth)==null?void 0:ne.score)||0,ae=((se=pe.inflation)==null?void 0:se.score)||0,xe=Math.max(-30,Math.min(30,ye*15)),Pe=Math.max(-30,Math.min(30,-ae*15));return{x:me.x+xe,y:me.y+Pe,prevX:s.x,prevY:s.y}}),R=t(()=>{var pe;const Z=Math.min(100,((pe=l.value.timing)==null?void 0:pe.progress_percent)||0),de=l.value.color||"#4CAF50",me=Z>100?"linear-gradient(90deg, "+de+", #FF9800)":de;return{width:Z+"%",background:me}});function j(){return{recovery:Math.PI/4,overheat:3*Math.PI/4,stagflation:5*Math.PI/4,recession:7*Math.PI/4}[l.value.stage]||0}function A(){var Z,de;return((de=(Z=l.value)==null?void 0:Z.timing)==null?void 0:de.progress_percent)||0}function w(){var Z,de;return((de=(Z=l.value)==null?void 0:Z.timing)==null?void 0:de.duration_months)||0}function E(){var Z,de;return((de=(Z=l.value)==null?void 0:Z.timing)==null?void 0:de.avg_duration_months)||18}function oe(Z){var ye,ae;const de=Y.value,me=((ye=de[l.value.stage])==null?void 0:ye.order)||0;return(((ae=de[Z])==null?void 0:ae.order)||0)<me}function U(Z){return I[Z]||Z}function b(Z){return h[Z]||Z}function c(Z){const de=["#43a047","#f57c00","#1976d2","#757575"];return de[Z-1]||de[3]}async function M(){try{const de=await(await fetch("/api/market/merrill-clock/stages")).json();de.success&&de.data&&(C.value=de.data)}catch{console.warn("获取美林时钟阶段配置失败")}}async function p(){q.value=!0;try{ue();const de=await(await fetch("/api/market/merrill-clock/timeline")).json();if(de.success&&de.data){const me=Array.isArray(de.data.cycles)?de.data.cycles.slice().reverse():[];S.value={cycles:me}}}catch{console.warn("获取美林时钟时间轴失败")}finally{q.value=!1}}async function W(Z){await T(Z)}async function ue(){try{const de=await(await fetch("/api/market/merrill-clock/snapshots?limit=30")).json();de&&de.success&&de.data&&(P.value=de.data.items||[],F.value=de.data.total||0)}catch{console.warn("获取美林时钟评估轨迹失败")}}async function te(){var Z,de;try{const pe=await(await fetch("/api/market/merrill-clock")).json(),ye=pe.stage||"recovery",ae=C.value[ye]||{};if(l.value={...ae,...pe,stage_cn:pe.stage_cn||ae.stage_cn||"",stage_name:pe.stage_name||ae.name||"",name:pe.name||ae.name||"复苏期"},i.value=new Date().toLocaleTimeString("zh-CN"),O.value&&O.value!==ye){const xe=C.value,Pe=((Z=xe[O.value])==null?void 0:Z.name)||O.value,ne=((de=xe[ye])==null?void 0:de.name)||ye;ElementPlus.ElMessage({message:"美林时钟阶段切换："+Pe+" → "+ne,type:"warning",duration:6e3,showClose:!0})}O.value=ye}catch(me){console.error("获取美林时钟失败:",me);const pe=C.value.recovery||{};l.value={...pe,indicators:{pmi:51.2,gdp_growth:5.2,cpi:.8,m2_growth:10.5}}}}async function T(Z){var me;x.value=!0,document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",D.value=C.value[Z]||C.value.recovery||{};const de=((me=l.value)==null?void 0:me.stage)===Z;D.value._isCurrent=de,de&&l.value&&(D.value._nextPrediction=l.value.next_stage_prediction,D.value._confidence=l.value.confidence,D.value._stage=l.value.stage,D.value._dimensions=l.value.dimension_scores);try{const ye=await(await fetch("/api/market/merrill-clock/stage/"+Z)).json();if(ye.success&&ye.data){const ae={...C.value[Z],...ye.data};ae._is_current!==void 0&&(ae._isCurrent=ae._is_current),ae._current_timing&&(ae._currentTiming=ae._current_timing),ae._last_period&&(ae._lastPeriod=ae._last_period),D.value._nextPrediction&&(ae._nextPrediction=D.value._nextPrediction),D.value._confidence&&(ae._confidence=D.value._confidence),D.value._stage&&(ae._stage=D.value._stage),D.value._dimensions&&(ae._dimensions=D.value._dimensions),Object.assign(D.value,ae)}}catch(pe){console.warn("获取阶段详情失败:",pe)}}function G(){localStorage.setItem("merrill_clock_config",JSON.stringify({autoRefresh:r.value.autoRefresh,refreshInterval:r.value.refreshInterval})),r.value.autoRefresh?(clearInterval(K),K=setInterval(te,r.value.refreshInterval*1e3)):clearInterval(K),ElementPlus.ElMessage.success("美林时钟配置已保存")}async function re(){H.value=!0,m.value="";try{const de=await(await fetch("/api/market/merrill-clock/reevaluate",{method:"POST"})).json();de.success?(m.value="重评估完成："+(de.stage_name||de.stage),await te(),ElementPlus.ElMessage.success("重评估完成")):(m.value=de.message||"重评估失败",ElementPlus.ElMessage.error(de.message||"重评估失败"))}catch{m.value="请求失败",ElementPlus.ElMessage.error("重评估请求失败")}finally{H.value=!1}}function fe(){const Z=localStorage.getItem("merrill_clock_config");if(Z)try{const de=JSON.parse(Z);r.value={...r.value,...de}}catch{}r.value.autoRefresh&&(K=setInterval(()=>{console.log("[美林时钟] 定时刷新..."),te()},r.value.refreshInterval*1e3))}function Te(){K&&clearInterval(K)}return e(()=>{Te()}),{merrillData:l,merrillStagesConfig:C,showMerrillDetail:x,merrillDetailData:D,merrillTimeline:S,merrillSnapshots:P,merrillSnapshotsTotal:F,fetchMerrillSnapshots:ue,timelineLoading:q,merrillClockConfig:r,merrillClockLastUpdated:i,merrillReevalResult:m,merrillReevalLoading:H,stages:J,indicatorList:o,dimensionScoreList:L,detailDimensionScoreList:z,confidenceColor:ee,timelineStages:Y,clockPosition:$,merrillProgressStyle:R,FULL_CYCLE_MONTHS:f,getStageAngle:j,getCycleProgress:A,getCurrentStageMonths:w,getStageTotalMonths:E,isStageCompleted:oe,getCharLabel:U,getAssetName:b,getRankColor:c,fetchMerrillStages:M,fetchMerrillClock:te,loadMerrillTimeline:p,showTimelineStage:W,showStageDetail:T,saveMerrillClockConfig:G,doMerrillReevaluate:re,startAutoRefresh:fe,stopAutoRefresh:Te}}})();(function(){function a(f){return getComputedStyle(document.documentElement).getPropertyValue(f).trim()}function t(){return{textStyle:{color:a("--text-primary")||"#1f2937"},backgroundColor:a("--chart-bg")||"transparent",color:[a("--qc-primary-600")||"#b8922a",a("--qc-primary-500")||"#c49b2e",a("--qc-primary-700")||"#8f6f1f",a("--qc-primary-400")||"#d4b352",a("--qc-neutral-400")||"#b8ae9f",a("--qc-neutral-500")||"#8f8679"],legend:{textStyle:{color:a("--text-secondary")||"#6b7280"}},categoryAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},valueAxis:{axisLine:{lineStyle:{color:a("--chart-axis")||"#cbd5e1"}},axisLabel:{color:a("--text-secondary")||"#6b7280"},splitLine:{lineStyle:{color:a("--chart-split")||"#e2e8f0"}}},tooltip:{backgroundColor:a("--bg-card")||"#ffffff",borderColor:a("--border-light")||"#e5e7eb",textStyle:{color:a("--text-primary")||"#1f2937"}}}}const g=[];function e(f){typeof f=="function"&&g.push(f)}function u(){g.slice().forEach(function(f){try{f()}catch{}})}window.__quantModules||(window.__quantModules={}),window.__quantModules.echartsTheme={getEChartsTheme:t,registerChart:e,refreshAllCharts:u,init(){return{getEChartsTheme:t,registerChart:e,refreshAllCharts:u}}}})();(function(){const{ref:a,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Sidebar={name:"qc-sidebar",template:`
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
    `,setup(){const g=t("qcState");try{const f=localStorage.getItem("quant_sidebar_collapsed");f!==null&&g.sidebarCollapsed&&(g.sidebarCollapsed.value=f==="1")}catch{}if(!g)return{};const e=async f=>{if(window.__quantGoPage){await window.__quantGoPage(f.key,f.subPages[0]||"");return}g.currentPage.value=f.key,g.currentSubPage.value=f.subPages[0]||""},u=()=>{g.sidebarCollapsed.value=!g.sidebarCollapsed.value;try{localStorage.setItem("quant_sidebar_collapsed",g.sidebarCollapsed.value?"1":"0")}catch{}};return{menus:g.menus,currentPage:g.currentPage,sidebarCollapsed:g.sidebarCollapsed,navigate:e,toggle:u,sanitizeHtml:g.sanitizeHtml,keyClick:g.keyClick,t:g.t}}}})();const Sa={__name:"AppIcon",props:{name:{type:String,default:""},size:{type:[Number,String],default:18},strokeWidth:{type:[Number,String],default:2}},setup(a){const t=a,g={"layout-dashboard":Bv,calendar:Hv,bot:Fv,"flask-conical":Vv,zap:jv,settings:Ov,"chevron-down":Nv,"chevron-right":Iv,"chevron-left":Lv,menu:Av,search:zv,bell:Rv,sun:Pv,moon:Dv,user:Tv,"user-round":Mv,home:Ev,x:qv,database:Cv,activity:Sv,clock:xv,"bar-chart-3":_v,shield:kv,"hard-drive":wv,"file-text":bv,users:yv,cpu:hv,"pie-chart":gv,info:fv,"log-out":pv,palette:mv,languages:vv,refresh:uv,download:dv,"external-link":cv,command:rv,sparkles:ov,"trending-up":lv,"trending-down":iv,"circle-dot":nv,check:sv,"alert-triangle":av,loader:tv,"arrow-left":ev,"arrow-right":Zu,eye:Xu,"eye-off":$u,lock:Qu,"sliders-horizontal":Ju,play:Yu,history:Gu,layers:Uu,"line-chart":Wu,target:Ku,"search-check":Bu,star:Hu,"message-circle":Fu,"calendar-days":Vu,"calendar-range":ju,"calendar-check":Ou,brain:Nu,lightbulb:Iu,"octagon-x":Lu,flag:Au,package:zu,"clipboard-list":Ru,pin:Pu,"radio-tower":Du,gauge:Tu,landmark:Mu,"candlestick-chart":Eu,wallet:qu,"badge-check":Cu,key:Su,factory:xu,trophy:_u,rocket:ku,flame:wu,"map-pin":bu,"scroll-text":yu,"book-open":hu,dna:gu,"bar-chart":fu,plus:pu,"star-off":mu,upload:vu,gem:uu,"folder-open":du,link:cu,save:ru,"trash-2":ou,pause:lu,"help-circle":iu,"play-circle":nu,pencil:su,folder:au,code:tu,sprout:eu,wheat:Zd,snowflake:Xd,fuel:$d,banknote:Qd,send:Jd,inbox:Yd,"wifi-off":Gd,"check-circle-2":Ud,"x-circle":Wd},e=()=>g[t.name]||g["circle-dot"];return(u,f)=>(ve(),pa(Rd(e()),{size:a.size,"stroke-width":a.strokeWidth,"aria-hidden":"true",class:"qc-icon"},null,8,["size","stroke-width"]))}},Ca=(a,t)=>{const g=a.__vccOpts||a;for(const[e,u]of t)g[e]=u;return g},Kv={name:"qc-sidebar",components:{AppIcon:Sa},setup(){const a=Da("qcState");if(!a)return{};const t=ot(()=>a.menus&&a.menus.value||[]),g=ot(()=>a.currentPage&&a.currentPage.value||""),e=ot(()=>a.navMode&&a.navMode.value||"subnav"),u=ot({get:()=>a.sidebarCollapsed&&a.sidebarCollapsed.value||!1,set:q=>{a.sidebarCollapsed&&(a.sidebarCollapsed.value=q)}}),f=Lt({}),I={research:"量化投研",platform:"平台管理"},h=["research","platform"],d=q=>g.value===q.key,k=(q,r)=>g.value===q.key&&a.currentSubPage&&a.currentSubPage.value===r,l=q=>Array.isArray(q.subPages)&&q.subPages.length>1,C=(q,r)=>a.subPageNames&&a.subPageNames[r]||r;function x(q){!l(q)||u.value||(f.value[q.key]=!f.value[q.key])}function D(){t.value.forEach(q=>{f.value[q.key]===void 0&&(f.value[q.key]=d(q))})}async function S(q,r){const i=r||q.subPages&&q.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(q.key,i):(a.currentPage.value=q.key,a.currentSubPage&&(a.currentSubPage.value=i)),a.navigateTo&&a.navigateTo(q.key,i)}function P(){u.value=!u.value;try{localStorage.setItem("sidebar_collapsed",u.value?"1":"0")}catch{}}function F(q){if(q.ctrlKey&&q.key.toLowerCase()==="b"&&(q.preventDefault(),P()),!q.ctrlKey&&!q.metaKey&&!q.altKey&&(q.key==="ArrowDown"||q.key==="ArrowUp")){const r=Array.prototype.slice.call(document.querySelectorAll(".qc-sidebar a.qc-sidebar-link, .qc-sidebar a.qc-sidebar-child")),i=r.indexOf(document.activeElement);if(i>=0){q.preventDefault();const m=r[(i+(q.key==="ArrowDown"?1:r.length-1))%r.length];m&&m.focus()}}}return Ka(()=>{D(),document.addEventListener("keydown",F)}),rs(()=>document.removeEventListener("keydown",F)),{state:a,menus:t,currentPage:g,navMode:e,sidebarCollapsed:u,expandedMenus:f,GROUP_LABELS:I,GROUPS:h,isActive:d,isChildActive:k,hasChildren:l,subLabel:C,toggleSubmenu:x,navigate:S,toggleCollapse:P}}},Wv={class:"qc-sidebar-logo"},Uv={key:0,class:"qc-logo-text"},Gv={class:"qc-sidebar-nav"},Yv={key:0,class:"qc-nav-group"},Jv={key:0,class:"qc-nav-group-label"},Qv=["href","aria-current","onClick"],$v={key:0,class:"qc-sidebar-label"},Xv={key:1,class:"qc-nav-badge"},Zv=["aria-expanded","aria-controls","onClick"],em=["id"],tm=["href","aria-current","onClick"],am={class:"qc-sidebar-child-label"},sm={class:"qc-sidebar-footer"},nm=["aria-expanded","aria-label","title"];function im(a,t,g,e,u,f){const I=Zt("AppIcon"),h=Zt("el-tooltip");return ve(),we("nav",{class:dt(["qc-sidebar",{"is-collapsed":e.sidebarCollapsed}]),"aria-label":"主导航"},[qe("div",Wv,[t[1]||(t[1]=zd('<svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo"><rect width="100" height="100" rx="20" fill="var(--logo-bg)"></rect><rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"></rect><line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"></line><rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"></rect><rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"></rect><rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"></rect><rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"></rect><path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"></path></svg>',1)),e.sidebarCollapsed?Ke("",!0):(ve(),we("span",Uv,Be(e.state.t("login.title")),1))]),qe("div",Gv,[(ve(!0),we(ut,null,Et(e.GROUPS,d=>(ve(),we(ut,{key:d},[e.menus.some(k=>k.group===d)?(ve(),we("div",Yv,[e.sidebarCollapsed?Ke("",!0):(ve(),we("span",Jv,Be(e.GROUP_LABELS[d]),1)),(ve(!0),we(ut,null,Et(e.menus.filter(k=>k.group===d),k=>(ve(),we(ut,{key:k.key},[qe("div",{class:dt(["qc-sidebar-item",{"has-children":e.navMode==="tree"&&e.hasChildren(k),"is-child-open":e.navMode==="tree"&&e.expandedMenus[k.key]}])},[vt(h,{content:k.name,placement:"right","show-after":300,disabled:!e.sidebarCollapsed},{default:ma(()=>[qe("a",{class:dt(["qc-sidebar-link",{"is-active":e.isActive(k)}]),href:"#"+k.key,"aria-current":e.isActive(k)?"page":null,onClick:Vt(l=>e.navigate(k),["prevent"])},[vt(I,{name:k.iconName||"",size:18,class:"qc-sidebar-icon"},null,8,["name"]),e.sidebarCollapsed?Ke("",!0):(ve(),we("span",$v,Be(k.name),1)),!e.sidebarCollapsed&&k.badge?(ve(),we("span",Xv,Be(k.badge),1)):Ke("",!0)],10,Qv)]),_:2},1032,["content","disabled"]),!e.sidebarCollapsed&&e.navMode==="tree"&&e.hasChildren(k)?(ve(),we("button",{key:0,class:dt(["qc-sidebar-chevron",{"is-open":e.expandedMenus[k.key]}]),"aria-expanded":!!e.expandedMenus[k.key],"aria-controls":"submenu-"+k.key,"aria-label":"展开子菜单",onClick:l=>e.toggleSubmenu(k)},[vt(I,{name:"chevron-down",size:14})],10,Zv)):Ke("",!0)],2),!e.sidebarCollapsed&&e.navMode==="tree"&&e.hasChildren(k)&&e.expandedMenus[k.key]?(ve(),we("div",{key:0,class:"qc-sidebar-children",id:"submenu-"+k.key},[(ve(!0),we(ut,null,Et(k.subPages,l=>(ve(),we("a",{key:l,class:dt(["qc-sidebar-item qc-sidebar-child",{"is-active":e.isChildActive(k,l)}]),href:"#"+k.key+"-"+l,"aria-current":e.isChildActive(k,l)?"page":null,onClick:Vt(C=>e.navigate(k,l),["prevent"])},[qe("span",am,Be(e.subLabel(k,l)),1)],10,tm))),128))],8,em)):Ke("",!0)],64))),128))])):Ke("",!0)],64))),128))]),qe("div",sm,[qe("button",{class:"qc-sidebar-collapse-btn","aria-expanded":!e.sidebarCollapsed,"aria-label":e.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",title:e.sidebarCollapsed?"展开侧边栏":"折叠侧边栏",onClick:t[0]||(t[0]=(...d)=>e.toggleCollapse&&e.toggleCollapse(...d))},[vt(I,{name:e.sidebarCollapsed?"chevron-right":"chevron-left",size:18},null,8,["name"])],8,nm)])],2)}const lm=Ca(Kv,[["render",im]]),om={name:"qc-header",components:{AppIcon:Sa},setup(){const a=Da("qcState");if(!a)return{};const t=Lt(!1),g=ot(()=>a.currentUser&&a.currentUser.value||null),e=ot(()=>a.navMode&&a.navMode.value||"subnav"),u=ot(()=>{const me=a.currentPage&&a.currentPage.value,pe=(a.menus&&a.menus.value||[]).find(ye=>ye.key===me);return!!(pe&&pe.subPages&&pe.subPages.length)}),f=ot(()=>{const me=a.currentPage&&a.currentPage.value,pe=a.currentPageName&&a.currentPageName.value;if(pe)return pe;const ye=(a.menus&&a.menus.value||[]).find(ae=>ae.key===me);return ye&&ye.name||me||""}),I=ot(()=>{const me=a.currentSubPage&&a.currentSubPage.value;return me&&a.subPageNames&&a.subPageNames[me]||me||""}),h=Lt(typeof window<"u"?window.innerWidth<768:!1);function d(){h.value=window.innerWidth<768}Ka(()=>window.addEventListener("resize",d)),rs(()=>window.removeEventListener("resize",d));const k=Lt(!1),l=ot(()=>{const me=a.currentSubPage&&a.currentSubPage.value;return me&&a.subPageNames&&a.subPageNames[me]||me||""}),C=ot(()=>{const me=a.currentPage&&a.currentPage.value,pe=(a.menus&&a.menus.value||[]).find(ye=>ye.key===me);return(pe&&pe.subPages||[]).map(ye=>({key:ye,label:a.subPageNames&&a.subPageNames[ye]||ye}))});function x(){k.value=!k.value}function D(){k.value=!1}function S(me){k.value=!1,a.activateTab&&a.activateTab(a.currentPage.value,me)}const P=ot(()=>(a.currentTheme&&a.currentTheme.value)==="dark"),F=Lt(!1),q=[{value:"subnav",label:"中栏二级",desc:"左侧一级 + 中栏常驻二级"},{value:"tree",label:"侧栏树状",desc:"二级直接展开在侧栏内"},{value:"toptab",label:"顶部二级标签",desc:"二级以横排标签置于头部"}],r=ot(()=>{const me=q.find(pe=>pe.value===e.value);return me&&me.label||e.value});function i(){F.value=!F.value}function m(){F.value=!1}function H(me){F.value=!1,a.setNavMode&&a.setNavMode(me)}const O=ot({get:()=>a.searchQuery&&a.searchQuery.value||"",set:me=>{a.searchQuery&&(a.searchQuery.value=me)}}),K=Lt(!1),s=Lt([]),J=Lt(!1),o=Lt(!1);function y(){const me=localStorage.getItem("quant_token")||"";return me?{Authorization:"Bearer "+me,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function L(){J.value=!0,o.value=!1;try{const pe=await(await fetch("/api/alerts/history?limit=8",{headers:y()})).json();pe&&pe.success?s.value=pe.history||[]:s.value=[]}catch{o.value=!0,s.value=[]}finally{J.value=!1}}function z(){K.value=!K.value,K.value&&L()}function ee(){K.value=!1}function Y(){K.value=!1,a.activateTab&&a.activateTab("system","notification")}const $=Lt(!1),R=a.themeHues||[45,220,0,140,270,320],j=ot(()=>a.themeHue&&a.themeHue.value||45),A=ot(()=>a.themeMode&&a.themeMode.value||"system"),w=[{k:"compact",n:"紧凑"},{k:"comfortable",n:"标准"},{k:"spacious",n:"宽松"}],E=ot(()=>a.density&&a.density.value||"comfortable");function oe(me){a.changeDensity&&a.changeDensity(me)}function U(me){return a.hueColor?a.hueColor(me):"hsl("+me+", 75%, 42%)"}function b(me){return a.hueName?a.hueName(me):String(me)}function c(){$.value=!$.value}function M(){$.value=!1}function p(me){a.changeThemeMode&&a.changeThemeMode(me)}function W(me){a.changeThemeHue&&a.changeThemeHue(me)}function ue(){a.changeThemeMode&&a.changeThemeMode(P.value?"light":"dark")}function te(){if(window.innerWidth<768){window.dispatchEvent(new CustomEvent("qc:drawer",{detail:{open:!0}}));return}a.sidebarCollapsed&&(a.sidebarCollapsed.value=!a.sidebarCollapsed.value);try{localStorage.setItem("sidebar_collapsed",a.sidebarCollapsed.value?"1":"0")}catch{}}function T(){t.value=!t.value}function G(){t.value=!1}function re(me){return()=>{G(),me&&me()}}function fe(){G(),a.handleLogout&&a.handleLogout()}const Te=ot(()=>a.marketData&&a.marketData.value||{}),Z=Lt(typeof window<"u"&&localStorage.getItem("qc.hideNonTradingBanner")==="1");return{marketData:Te,bannerDismissed:Z,dismissBanner:()=>{Z.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},state:a,showUserMenu:t,currentUser:g,isDark:P,searchQuery:O,navMode:e,crumbRoot:f,crumbSub:I,hasToptabs:u,toggleThemeQuick:ue,toggleSidebar:te,openUserMenu:T,closeUserMenu:G,menuItem:re,handleLogout:fe,openBellMenu:K,notifItems:s,notifLoading:J,notifError:o,toggleBell:z,closeBell:ee,goNotificationCenter:Y,openThemeMenu:$,themeHues:R,themeHue:j,themeMode:A,hueColor:U,hueName:b,toggleThemeMenu:c,closeThemeMenu:M,pickThemeMode:p,pickThemeHue:W,DENSITY_MODES:w,density:E,pickDensity:oe,openNavModeMenu:F,NAV_MODES:q,navModeLabel:r,toggleNavModeMenu:i,closeNavModeMenu:m,pickNavMode:H,isMobile:h,openSubnavPicker:k,currentSubLabel:l,subnavOptions:C,toggleSubnavPicker:x,closeSubnavPicker:D,pickSubnav:S}}},rm={class:"qc-header-wrap"},cm={key:0,class:"non-trading-banner",role:"status"},dm={class:"qc-header"},um={class:"qc-header-left"},vm=["aria-label"],mm={key:0,class:"qc-header-subnav"},pm=["aria-expanded"],fm={class:"qc-subnav-picker-label"},gm={key:0,class:"qc-subnav-picker-menu",role:"menu"},hm=["onClick"],ym={key:1,class:"qc-header-crumbs","aria-label":"面包屑"},bm={class:"qc-crumb qc-crumb-root"},wm={class:"qc-crumb qc-crumb-sub"},km={key:1,class:"qc-crumb qc-crumb-root"},_m={class:"qc-header-center"},xm={key:0,class:"qc-search-sublabel"},Sm={class:"qc-header-right"},Cm={class:"qc-hdr-pop"},qm=["aria-expanded"],Em={key:0,class:"qc-header-popover qc-bell-panel",role:"dialog","aria-label":"通知面板"},Mm={key:0,class:"qc-bell-state"},Tm={key:1,class:"qc-bell-state"},Dm={key:2,class:"qc-bell-state"},Pm={key:3,class:"qc-bell-list"},Rm={class:"qc-bell-item-title"},zm={class:"qc-bell-item-meta"},Am={key:0},Lm={class:"qc-bell-item-time"},Im={class:"qc-hdr-pop"},Nm=["aria-expanded"],Om={key:0,class:"qc-header-popover qc-theme-panel",role:"dialog","aria-label":"主题面板"},jm={class:"qc-theme-modes"},Vm=["onClick"],Fm={class:"qc-theme-swatches"},Hm=["title","aria-label","onClick"],Bm={key:0,class:"qc-theme-swatch-check"},Km={class:"qc-theme-custom-label"},Wm={class:"qc-theme-modes"},Um=["onClick"],Gm={key:0,class:"qc-navmode-switch"},Ym=["aria-label","title","aria-expanded"],Jm={key:0,class:"qc-navmode-menu",role:"menu"},Qm=["onClick","onKeydown"],$m={class:"qc-navmode-item-main"},Xm={class:"qc-user-menu"},Zm=["aria-label","aria-expanded"],ep={key:0,class:"qc-user-dropdown",role:"menu"},tp={class:"qc-user-dropdown-header"},ap={class:"qc-user-dropdown-name"},sp={key:0,class:"qc-user-dropdown-chip"};function np(a,t,g,e,u,f){var C,x,D,S,P,F,q;const I=Zt("AppIcon"),h=Zt("qc-top-tabs"),d=Zt("el-autocomplete"),k=Zt("el-slider"),l=Ad("click-outside");return ve(),we("div",rm,[e.marketData&&e.marketData.is_trading_day===!1&&!e.bannerDismissed?(ve(),we("div",cm,[vt(I,{name:"alert-triangle",size:14}),t[15]||(t[15]=qe("span",null,"今日非交易日 · 当前展示最近交易日历史数据",-1)),qe("button",{class:"non-trading-banner-close",onClick:t[0]||(t[0]=(...r)=>e.dismissBanner&&e.dismissBanner(...r)),"aria-label":"关闭提示"},"×")])):Ke("",!0),qe("header",dm,[qe("div",um,[qe("button",{class:"qc-icon-btn","aria-label":(C=e.state.sidebarCollapsed)!=null&&C.value?"展开侧边栏":"折叠侧边栏",onClick:t[1]||(t[1]=(...r)=>e.toggleSidebar&&e.toggleSidebar(...r))},[vt(I,{name:"menu",size:20})],8,vm),e.isMobile?La((ve(),we("div",mm,[qe("button",{class:"qc-subnav-picker","aria-expanded":e.openSubnavPicker,onClick:t[2]||(t[2]=(...r)=>e.toggleSubnavPicker&&e.toggleSubnavPicker(...r))},[qe("span",fm,Be(e.currentSubLabel||"二级"),1),vt(I,{name:"chevron-down",size:14})],8,pm),e.openSubnavPicker?(ve(),we("div",gm,[(ve(!0),we(ut,null,Et(e.subnavOptions,r=>(ve(),we("div",{key:r.key,class:dt(["qc-subnav-picker-item",{"is-active":r.key===(e.state.currentSubPage&&e.state.currentSubPage.value)}]),role:"menuitem",onClick:i=>e.pickSubnav(r.key)},Be(r.label),11,hm))),128))])):Ke("",!0)])),[[l,e.closeSubnavPicker]]):Ke("",!0),e.navMode==="tree"&&!e.isMobile?(ve(),we("div",ym,[qe("span",bm,Be(e.crumbRoot),1),e.crumbSub?(ve(),we(ut,{key:0},[t[16]||(t[16]=qe("span",{class:"qc-crumb-sep","aria-hidden":"true"},"/",-1)),qe("span",wm,Be(e.crumbSub),1)],64)):Ke("",!0)])):Ke("",!0),e.navMode==="toptab"&&!e.isMobile?(ve(),we(ut,{key:2},[e.hasToptabs?(ve(),pa(h,{key:0})):(ve(),we("span",km,Be(e.crumbRoot),1))],64)):Ke("",!0)]),qe("div",_m,[vt(d,{class:"qc-header-search",modelValue:e.searchQuery,"onUpdate:modelValue":t[3]||(t[3]=r=>e.searchQuery=r),"fetch-suggestions":e.state.searchStocks,placeholder:e.state.t("common.searchPlaceholder"),"trigger-on-focus":!1,clearable:"",size:"small",onSelect:e.state.onSearchSelect},{prefix:ma(()=>[vt(I,{name:"search",size:16,class:"qc-header-search-icon"})]),suffix:ma(()=>[...t[17]||(t[17]=[qe("span",{class:"qc-header-search-kbd"},"Ctrl+K",-1)])]),default:ma(r=>{var i,m,H,O,K;return[qe("span",null,Be((i=r==null?void 0:r.item)==null?void 0:i.icon)+" "+Be(((m=r==null?void 0:r.item)==null?void 0:m.label)||((H=r==null?void 0:r.item)==null?void 0:H.name)),1),(O=r==null?void 0:r.item)!=null&&O.subLabel?(ve(),we("span",xm,Be((K=r==null?void 0:r.item)==null?void 0:K.subLabel),1)):Ke("",!0)]}),_:1},8,["modelValue","fetch-suggestions","placeholder","onSelect"])]),qe("div",Sm,[La((ve(),we("div",Cm,[qe("button",{class:"qc-icon-btn qc-has-dot","aria-label":"通知","aria-expanded":e.openBellMenu,onClick:t[4]||(t[4]=(...r)=>e.toggleBell&&e.toggleBell(...r))},[vt(I,{name:"bell",size:20})],8,qm),e.openBellMenu?(ve(),we("div",Em,[t[18]||(t[18]=qe("div",{class:"qc-bell-header"},"通知",-1)),e.notifLoading?(ve(),we("div",Mm,"加载中...")):e.notifError?(ve(),we("div",Tm,"加载失败")):e.notifItems.length?(ve(),we("div",Pm,[(ve(!0),we(ut,null,Et(e.notifItems,(r,i)=>(ve(),we("div",{key:r.id||i,class:dt(["qc-bell-item",{"is-fail":r.ok===0}])},[qe("div",Rm,Be(r.title||r.event_type||"事件"),1),qe("div",zm,[xa(Be(r.channel||""),1),r.recipient?(ve(),we("span",Am," · "+Be(r.recipient),1)):Ke("",!0),qe("span",Lm,Be(r.created_at||""),1)])],2))),128))])):(ve(),we("div",Dm,"暂无通知")),qe("button",{class:"qc-bell-footer",onClick:t[5]||(t[5]=(...r)=>e.goNotificationCenter&&e.goNotificationCenter(...r))},"前往通知中心 →")])):Ke("",!0)])),[[l,e.closeBell]]),La((ve(),we("div",Im,[qe("button",{class:"qc-icon-btn","aria-label":"主题设置",title:"主题设置","aria-expanded":e.openThemeMenu,onClick:t[6]||(t[6]=(...r)=>e.toggleThemeMenu&&e.toggleThemeMenu(...r))},[vt(I,{name:"palette",size:20})],8,Nm),e.openThemeMenu?(ve(),we("div",Om,[t[19]||(t[19]=qe("div",{class:"qc-theme-section-label"},"外观模式",-1)),qe("div",jm,[(ve(),we(ut,null,Et([{k:"light",n:"浅色"},{k:"dark",n:"深色"},{k:"system",n:"跟随"}],r=>qe("button",{key:r.k,class:dt(["qc-theme-mode",{"is-active":e.themeMode===r.k}]),onClick:i=>e.pickThemeMode(r.k)},Be(r.n),11,Vm)),64))]),t[20]||(t[20]=qe("div",{class:"qc-theme-section-label"},"主题色",-1)),qe("div",Fm,[(ve(!0),we(ut,null,Et(e.themeHues,r=>(ve(),we("button",{key:r,class:dt(["qc-theme-swatch",{"is-active":e.themeHue===r}]),style:Ld({background:e.hueColor(r)}),title:e.hueName(r),"aria-label":e.hueName(r),onClick:i=>e.pickThemeHue(r)},[e.themeHue===r?(ve(),we("span",Bm,"✓")):Ke("",!0)],14,Hm))),128))]),vt(k,{class:"qc-theme-slider","model-value":e.themeHue,min:0,max:359,step:1,size:"small",onChange:e.pickThemeHue,"aria-label":"自定义主题色相"},null,8,["model-value","onChange"]),qe("div",Km,"自定义 "+Be(e.themeHue)+"°",1),t[21]||(t[21]=qe("div",{class:"qc-theme-section-label"},"信息密度",-1)),qe("div",Wm,[(ve(!0),we(ut,null,Et(e.DENSITY_MODES,r=>(ve(),we("button",{key:r.k,class:dt(["qc-theme-mode",{"is-active":e.density===r.k}]),onClick:i=>e.pickDensity(r.k)},Be(r.n),11,Um))),128))])])):Ke("",!0)])),[[l,e.closeThemeMenu]]),e.isMobile?Ke("",!0):La((ve(),we("div",Gm,[qe("button",{class:"qc-icon-btn","aria-label":"切换导航形态: "+e.navModeLabel,title:"导航形态: "+e.navModeLabel,"aria-expanded":e.openNavModeMenu,onClick:t[7]||(t[7]=(...r)=>e.toggleNavModeMenu&&e.toggleNavModeMenu(...r))},[vt(I,{name:"layers",size:20})],8,Ym),e.openNavModeMenu?(ve(),we("div",Jm,[(ve(!0),we(ut,null,Et(e.NAV_MODES,r=>(ve(),we("div",{key:r.value,class:dt(["qc-user-dropdown-item qc-navmode-item",{"is-active":e.navMode===r.value}]),role:"menuitem",tabindex:"0",onClick:i=>e.pickNavMode(r.value),onKeydown:[va(Vt(i=>e.pickNavMode(r.value),["prevent"]),["enter"]),va(Vt(i=>e.pickNavMode(r.value),["prevent"]),["space"])]},[qe("div",$m,[qe("span",null,Be(r.label),1),e.navMode===r.value?(ve(),pa(I,{key:0,name:"check",size:14})):Ke("",!0)])],42,Qm))),128))])):Ke("",!0)])),[[l,e.closeNavModeMenu]]),La((ve(),we("div",Xm,[qe("button",{class:"qc-user-avatar","aria-label":"用户菜单 "+(((x=e.currentUser)==null?void 0:x.username)||""),"aria-haspopup":"menu","aria-expanded":e.showUserMenu,onClick:t[8]||(t[8]=(...r)=>e.openUserMenu&&e.openUserMenu(...r))},Be((((D=e.currentUser)==null?void 0:D.username)||"A").charAt(0).toUpperCase()),9,Zm),e.showUserMenu?(ve(),we("div",ep,[qe("div",tp,[qe("span",ap,Be((S=e.currentUser)==null?void 0:S.username),1),((P=e.currentUser)==null?void 0:P.role)==="guest"?(ve(),we("span",sp,"访客")):Ke("",!0)]),((F=e.currentUser)==null?void 0:F.role)==="admin"?(ve(),we("div",{key:0,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:t[9]||(t[9]=r=>e.menuItem(e.state.resetSetupWizard)()),onKeydown:t[10]||(t[10]=va(Vt(r=>e.menuItem(e.state.resetSetupWizard)(),["prevent"]),["enter"]))},[vt(I,{name:"settings",size:16}),t[22]||(t[22]=xa(" 重新运行初始化向导 ",-1))],32)):Ke("",!0),((q=e.currentUser)==null?void 0:q.role)!=="guest"?(ve(),we("div",{key:1,class:"qc-user-dropdown-item",role:"menuitem",tabindex:"0",onClick:t[11]||(t[11]=r=>e.menuItem(()=>{e.state.showChangePassword&&(e.state.showChangePassword.value=!0)})()),onKeydown:t[12]||(t[12]=va(Vt(r=>e.menuItem(()=>{e.state.showChangePassword&&(e.state.showChangePassword.value=!0)})(),["prevent"]),["enter"]))},[vt(I,{name:"lock",size:16}),t[23]||(t[23]=xa(" 修改密码 ",-1))],32)):Ke("",!0),t[25]||(t[25]=qe("div",{class:"qc-user-dropdown-divider"},null,-1)),qe("div",{class:"qc-user-dropdown-item is-danger",role:"menuitem",tabindex:"0",onClick:t[13]||(t[13]=(...r)=>e.handleLogout&&e.handleLogout(...r)),onKeydown:t[14]||(t[14]=va(Vt((...r)=>e.handleLogout&&e.handleLogout(...r),["prevent"]),["enter"]))},[vt(I,{name:"log-out",size:16}),t[24]||(t[24]=xa(" 退出登录 ",-1))],32)])):Ke("",!0)])),[[l,e.closeUserMenu]])])])])}const ip=Ca(om,[["render",np]]),lp=[{label:"运行监控",items:[{key:"status",label:"系统状态",icon:"activity"},{key:"health",label:"数据源健康",icon:"database"},{key:"schedule",label:"调度任务",icon:"clock"},{key:"guard",label:"AI 事实护栏",icon:"shield"},{key:"execution",label:"执行看板",icon:"cpu"}]},{label:"智能服务",items:[{key:"autoeval",label:"AI 服务",icon:"bot"},{key:"usage",label:"用量统计",icon:"bar-chart-3"}]},{label:"平台设置",items:[{key:"datasource",label:"数据源",icon:"hard-drive"},{key:"feature",label:"基础配置",icon:"sliders-horizontal"},{key:"datadict",label:"数据字典",icon:"file-text"},{key:"notification",label:"通知中心",icon:"bell"}]},{label:"组织管理",items:[{key:"user",label:"用户与权限",icon:"users"},{key:"about",label:"关于",icon:"info"}]}],op={name:"qc-subnav",components:{AppIcon:Sa},setup(){const a=Da("qcState");if(!a)return{};const t=ot(()=>a.currentPage&&a.currentPage.value||""),g=ot(()=>a.currentSubPage&&a.currentSubPage.value||""),e=ot(()=>a.navMode&&a.navMode.value||"subnav"),u=Lt({}),f=ot(()=>a.menus&&a.menus.value||[]),I=ot(()=>f.value.find(q=>q.key===t.value)||null),h=ot(()=>I.value&&I.value.subPages||[]),d=ot(()=>a.currentPageName&&a.currentPageName.value||t.value),k=q=>a.subPageNames&&a.subPageNames[q]||q,l=q=>g.value===q;function C(q){a.openTab?a.openTab(t.value,q):a.currentSubPage&&(a.currentSubPage.value=q);try{localStorage.setItem("quant_last_subpage",q)}catch{}}function x(q){a.openTab?a.openTab(t.value,q.key):a.currentSubPage&&(a.currentSubPage.value=q.key);try{localStorage.setItem("quant_last_subpage",q.key)}catch{}}function D(q){u.value[q]=!u.value[q]}const S={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}};return{state:a,currentPage:t,currentSubPage:g,navMode:e,subPages:h,currentMenu:I,collapsedGroups:u,pageTitle:d,subLabel:k,isSubActive:l,goSub:C,goSystemItem:x,toggleGroup:D,SYSTEM_GROUPS:lp,subIcon:(q,r)=>S[q]&&S[q][r]||"circle-dot",SHORTTERM_GROUPS:[{label:"复盘",items:["overview","market-review","ztpool"]},{label:"数据",items:["lhb","sector"]},{label:"盘后核验",items:["intraday","scan"]}]}}},rp={key:0,class:"qc-subnav-column","aria-label":"二级导航"},cp={class:"qc-subnav-column-header"},dp={class:"qc-subnav-current-label"},up={class:"qc-subnav-column-body"},vp=["onClick"],mp=["href","onClick"],pp={class:"qc-subnav-group-label"},fp=["href","onClick"],gp=["href","onClick"];function hp(a,t,g,e,u,f){const I=Zt("AppIcon");return e.navMode==="subnav"?(ve(),we("aside",rp,[qe("div",cp,[qe("span",dp,Be(e.pageTitle),1)]),qe("div",up,[e.currentPage==="system"?(ve(!0),we(ut,{key:0},Et(e.SYSTEM_GROUPS,h=>(ve(),we("div",{key:h.label,class:"qc-subnav-group"},[qe("div",{class:"qc-subnav-group-label",onClick:d=>e.toggleGroup(h.label)},[qe("span",null,Be(h.label),1),vt(I,{name:"chevron-down",size:12,class:dt({"is-open":!e.collapsedGroups[h.label]})},null,8,["class"])],8,vp),e.collapsedGroups[h.label]?Ke("",!0):(ve(!0),we(ut,{key:0},Et(h.items,d=>(ve(),we("a",{key:d.key,class:dt(["qc-subnav-item",{"is-active":e.isSubActive(d.key)}]),href:"#"+d.key,onClick:Vt(k=>e.goSystemItem(d),["prevent"])},[vt(I,{name:d.icon,size:16},null,8,["name"]),qe("span",null,Be(d.label),1)],10,mp))),128))]))),128)):e.currentPage==="shortterm"?(ve(!0),we(ut,{key:1},Et(e.SHORTTERM_GROUPS,h=>(ve(),we("div",{key:h.label,class:"qc-subnav-group"},[qe("div",pp,[qe("span",null,Be(h.label),1)]),(ve(!0),we(ut,null,Et(h.items,d=>(ve(),we("a",{key:d,class:dt(["qc-subnav-item",{"is-active":e.isSubActive(d)}]),href:"#"+e.currentPage+"/"+d,onClick:Vt(k=>e.goSub(d),["prevent"])},[vt(I,{name:e.subIcon(e.currentPage,d),size:16},null,8,["name"]),qe("span",null,Be(e.subLabel(d)),1)],10,fp))),128))]))),128)):(ve(!0),we(ut,{key:2},Et(e.subPages,h=>(ve(),we("a",{key:h,class:dt(["qc-subnav-item",{"is-active":e.isSubActive(h)}]),href:"#"+e.currentPage+"/"+h,onClick:Vt(d=>e.goSub(h),["prevent"])},[vt(I,{name:e.subIcon(e.currentPage,h),size:16},null,8,["name"]),qe("span",null,Be(e.subLabel(h)),1)],10,gp))),128))])])):Ke("",!0)}const yp=Ca(op,[["render",hp]]),bp=[{key:"strategies",label:"首页",icon:"home"},{key:"calendar",label:"日历",icon:"calendar"},{key:"ai",label:"AI",icon:"bot"},{key:"research",label:"研究",icon:"flask-conical"},{key:"system",label:"设置",icon:"settings"}],wp={name:"qc-mobile-nav",components:{AppIcon:Sa},setup(){const a=Da("qcState");if(!a)return{};const t=Lt(!1),g=Lt(null),e=Lt({}),u=ot(()=>a.menus&&a.menus.value||[]),f=ot(()=>a.currentPage&&a.currentPage.value||""),I={research:"量化投研",platform:"平台管理"},h=["research","platform"];function d(r){return Array.isArray(r.subPages)&&r.subPages.length>0}function k(r){d(r)&&(e.value[r.key]=!e.value[r.key])}function l(r,i){return f.value===r.key&&a.currentSubPage&&a.currentSubPage.value===i}function C(r){return a.subPageNames&&a.subPageNames[r]||r}async function x(r){const i=u.value.find(H=>H.key===r.key),m=i&&i.subPages&&i.subPages[0]||"";window.__quantGoPage?await window.__quantGoPage(r.key,m):(a.currentPage.value=r.key,a.currentSubPage&&(a.currentSubPage.value=m)),a.navigateTo&&a.navigateTo(r.key,m)}function D(r,i){t.value=!1;const m=i||r.subPages&&r.subPages[0]||"";window.__quantGoPage?window.__quantGoPage(r.key,m):(a.currentPage.value=r.key,a.currentSubPage&&(a.currentSubPage.value=m)),a.navigateTo&&a.navigateTo(r.key,m)}function S(){t.value=!0,e.value.shortterm===void 0&&(e.value.shortterm=!0)}function P(){t.value=!1;const r=document.querySelector(".qc-header .qc-icon-btn");r&&r.focus()}function F(r){r.detail&&r.detail.open&&S()}function q(r){t.value&&r.key==="Escape"&&P()}return Ka(()=>{window.addEventListener("qc:drawer",F),document.addEventListener("keydown",q)}),rs(()=>{window.removeEventListener("qc:drawer",F),document.removeEventListener("keydown",q)}),{state:a,TABS:bp,menus:u,currentPage:f,drawerOpen:t,drawerFocusRef:g,drawerExpanded:e,GROUP_LABELS:I,GROUPS:h,hasSub:d,toggleDrawerMenu:k,isDrawerSubActive:l,subLabel:C,goTab:x,goMenu:D,openDrawer:S,closeDrawer:P}}},kp={class:"qc-mobile-nav","aria-label":"移动端底部导航"},_p=["aria-current","onClick"],xp={key:1,class:"qc-drawer",role:"dialog","aria-modal":"true","aria-label":"导航抽屉"},Sp={class:"qc-drawer-header"},Cp={class:"qc-drawer-brand"},qp={class:"qc-drawer-body"},Ep={key:0},Mp={class:"qc-nav-group-label"},Tp=["href","aria-current","onClick"],Dp={class:"qc-sidebar-label"},Pp=["aria-expanded","onClick"],Rp={key:0,class:"qc-drawer-children"},zp=["href","onClick"],Ap={class:"qc-drawer-footer"},Lp=["title"];function Ip(a,t,g,e,u,f){var h,d;const I=Zt("AppIcon");return ve(),we(ut,null,[qe("nav",kp,[(ve(!0),we(ut,null,Et(e.TABS,k=>(ve(),we("button",{key:k.key,class:dt(["qc-mobile-tab",{"is-active":e.currentPage===k.key}]),"aria-current":e.currentPage===k.key?"page":null,onClick:l=>e.goTab(k)},[vt(I,{name:k.icon,size:22},null,8,["name"]),qe("span",null,Be(k.label),1)],10,_p))),128))]),(ve(),pa(Id,{to:"body"},[e.drawerOpen?(ve(),we("div",{key:0,class:"qc-drawer-backdrop",onClick:t[0]||(t[0]=(...k)=>e.closeDrawer&&e.closeDrawer(...k))})):Ke("",!0),e.drawerOpen?(ve(),we("div",xp,[qe("div",Sp,[qe("div",Cp,[t[4]||(t[4]=qe("svg",{class:"qc-logo-mark",viewBox:"0 0 100 100",width:"26",height:"26","aria-label":"量化日历 logo"},[qe("rect",{width:"100",height:"100",rx:"20",fill:"var(--logo-bg)"}),qe("rect",{x:"2",y:"2",width:"96",height:"96",rx:"18",fill:"none",stroke:"var(--logo-border)","stroke-width":"3",opacity:"0.85"}),qe("line",{x1:"20",y1:"78",x2:"82",y2:"78",stroke:"var(--logo-border)","stroke-width":"3.5","stroke-linecap":"round",opacity:"0.55"}),qe("rect",{x:"22",y:"58",width:"15",height:"20",rx:"3.5",fill:"var(--logo-blue)",opacity:"0.95"}),qe("rect",{x:"42.5",y:"42",width:"15",height:"36",rx:"3.5",fill:"var(--logo-yellow)",opacity:"0.95"}),qe("rect",{x:"63",y:"26",width:"15",height:"52",rx:"3.5",fill:"var(--logo-red)"}),qe("rect",{x:"63",y:"26",width:"15",height:"14",rx:"3.5",fill:"var(--logo-white)",opacity:"0.35"}),qe("path",{d:"M24 70 L42 56 L58 46 L74 34",fill:"none",stroke:"var(--logo-border)","stroke-width":"2.4","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.5"})],-1)),qe("span",null,Be(e.state.t("login.title")),1)]),qe("button",{class:"qc-drawer-close","aria-label":"关闭抽屉",onClick:t[1]||(t[1]=(...k)=>e.closeDrawer&&e.closeDrawer(...k))},[vt(I,{name:"x",size:18})])]),qe("div",qp,[(ve(!0),we(ut,null,Et(e.GROUPS,k=>(ve(),we(ut,{key:k},[e.menus.some(l=>l.group===k)?(ve(),we("div",Ep,[qe("div",Mp,Be(e.GROUP_LABELS[k]),1),(ve(!0),we(ut,null,Et(e.menus.filter(l=>l.group===k),l=>(ve(),we("div",{key:l.key,class:"qc-drawer-menu"},[qe("div",{class:dt(["qc-drawer-menu-row",{"is-active":e.currentPage===l.key}])},[qe("a",{class:dt(["qc-sidebar-item",{"is-active":e.currentPage===l.key}]),href:"#"+l.key,"aria-current":e.currentPage===l.key?"page":null,onClick:Vt(C=>e.hasSub(l)?e.toggleDrawerMenu(l):e.goMenu(l),["prevent"])},[vt(I,{name:l.iconName||"",size:18},null,8,["name"]),qe("span",Dp,Be(l.name),1)],10,Tp),e.hasSub(l)?(ve(),we("button",{key:0,class:dt(["qc-sidebar-chevron",{"is-open":e.drawerExpanded[l.key]}]),"aria-expanded":!!e.drawerExpanded[l.key],"aria-label":"展开子菜单",onClick:C=>e.toggleDrawerMenu(l)},[vt(I,{name:"chevron-down",size:14})],10,Pp)):Ke("",!0)],2),e.drawerExpanded[l.key]?(ve(),we("div",Rp,[(ve(!0),we(ut,null,Et(l.subPages,C=>(ve(),we("a",{key:C,class:dt(["qc-subnav-item",{"is-active":e.isDrawerSubActive(l,C)}]),href:"#"+l.key+"/"+C,onClick:Vt(x=>e.goMenu(l,C),["prevent"])},[qe("span",null,Be(e.subLabel(C)),1)],10,zp))),128))])):Ke("",!0)]))),128))])):Ke("",!0)],64))),128))]),qe("div",Ap,[qe("button",{class:"qc-icon-btn",title:((h=e.state.currentTheme)==null?void 0:h.value)==="dark"?"切换亮色主题":"切换暗色主题",onClick:t[2]||(t[2]=k=>{var l;return e.state.changeThemeMode&&e.state.changeThemeMode(((l=e.state.currentTheme)==null?void 0:l.value)==="dark"?"light":"dark")})},[vt(I,{name:((d=e.state.currentTheme)==null?void 0:d.value)==="dark"?"sun":"moon",size:18},null,8,["name"])],8,Lp),qe("button",{class:"qc-icon-btn",title:"退出登录",onClick:t[3]||(t[3]=k=>e.state.handleLogout&&e.state.handleLogout())},[vt(I,{name:"log-out",size:18})])])])):Ke("",!0)]))],64)}const Np=Ca(wp,[["render",Ip]]),Op={name:"qc-stock-list",props:{items:{type:Array,default:()=>[]},showRank:{type:Boolean,default:!1},activeCode:{type:String,default:""},emptyText:{type:String,default:"暂无数据"},loading:{type:Boolean,default:!1},statusText:{type:Object,default:()=>({new:"新增",out:"调出"})},showConsensus:{type:Boolean,default:!1},showPrice:{type:Boolean,default:!1},virtual:{type:Boolean,default:!1},rowHeight:{type:Number,default:78},copyCode:{type:Boolean,default:!1}},emits:["select"],setup(a,{emit:t,slots:g}){const e=Da("qcState");function u(l){t("select",l)}function f(l){const C=l.strategy_names||l.strategies||[],x=C.slice(0,3),D=C.length>3?C.length-3:0,S=x.map(P=>({text:P,more:!1}));return D&&S.push({text:"+"+D,more:!0}),S}function I(l){const C=Number(l);return isFinite(C)?C.toFixed(2):"—"}function h(l){const C=Number(l);return isFinite(C)?(C>0?"+":"")+C.toFixed(2)+"%":"—"}function d(l){const C=Number(l.consensus_level);return isFinite(C)?Math.round(C*100):0}function k(l){const C=Number(l&&l.consensus_level);return isFinite(C)&&C>0}return{state:e,slots:g,select:u,displayTags:f,fmtPrice:I,fmtChange:h,pctOf:d,hasConsensus:k}}},jp={class:"qc-stock-list"},Vp=["data-copy-code","aria-label","onClick","onKeydown"],Fp={key:0,class:"qc-stock-rank"},Hp={class:"qc-stock-info"},Bp={class:"qc-stock-code"},Kp={class:"qc-stock-code-num"},Wp={key:0,class:"qc-stock-status is-new"},Up={key:1,class:"qc-stock-status is-out"},Gp={class:"qc-stock-name"},Yp={key:0,class:"qc-stock-consensus"},Jp={key:1,class:"qc-stock-tags"},Qp={key:2,class:"qc-stock-badge"},$p={key:3,class:"qc-stock-data"},Xp={class:"qc-stock-price"},Zp={key:4,class:"qc-stock-extra"},ef={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}},tf=["data-copy-code","aria-label","onClick","onKeydown"],af={key:0,class:"qc-stock-rank"},sf={class:"qc-stock-info"},nf={class:"qc-stock-code"},lf={class:"qc-stock-code-num"},of={key:0,class:"qc-stock-status is-new"},rf={key:1,class:"qc-stock-status is-out"},cf={class:"qc-stock-name"},df={key:0,class:"qc-stock-consensus"},uf={key:1,class:"qc-stock-tags"},vf={key:2,class:"qc-stock-badge"},mf={key:3,class:"qc-stock-data"},pf={class:"qc-stock-price"},ff={key:4,class:"qc-stock-extra"},gf={key:6,class:"cal-subtitle-ellipsis",style:{"grid-column":"1 / -1"}};function hf(a,t,g,e,u,f){const I=Zt("qc-state-panel"),h=Zt("qc-virtual-list");return ve(),we("div",jp,[g.loading?(ve(),pa(I,{key:0,type:"loading"})):g.items.length?(ve(),we(ut,{key:2},[g.virtual?(ve(),pa(h,{key:0,items:g.items,"row-height":g.rowHeight},{default:ma(({item:d,index:k})=>[qe("div",{class:dt(["qc-stock-row",{"is-active":g.activeCode===d.code}]),"data-copy-code":g.copyCode?d.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(d.name||"")+" "+(d.code||""),onClick:l=>e.select(d),onKeydown:[va(Vt(l=>e.select(d),["prevent"]),["enter"]),va(Vt(l=>e.select(d),["prevent"]),["space"])]},[g.showRank?(ve(),we("div",Fp,Be(k+1),1)):Ke("",!0),qe("div",Hp,[qe("div",Bp,[qe("span",Kp,Be(d.code),1),d.status==="new"?(ve(),we("span",Wp,Be(g.statusText.new),1)):d.status==="out"?(ve(),we("span",Up,Be(g.statusText.out),1)):Ke("",!0)]),qe("div",Gp,[xa(Be(d.name)+" ",1),ca(a.$slots,"name-suffix",{item:d,index:k})]),g.showConsensus&&e.hasConsensus(d)?(ve(),we("span",Yp,Be(e.pctOf(d))+"% 共识",1)):Ke("",!0)]),(d.strategy_names||d.strategies)&&(d.strategy_names||d.strategies).length?(ve(),we("div",Jp,[(ve(!0),we(ut,null,Et(e.displayTags(d),l=>(ve(),we("span",{key:l.text,class:dt(["qc-stock-tag",{"is-more":l.more}])},Be(l.text),3))),128))])):Ke("",!0),g.showConsensus?(ve(),we("span",Qp,Be(d.strategy_count||0)+" 策略",1)):Ke("",!0),g.showPrice&&d.price!=null?(ve(),we("div",$p,[qe("span",Xp,Be(e.fmtPrice(d.price)),1),qe("span",{class:dt(["qc-stock-change",d.change_pct>0?"is-up":d.change_pct<0?"is-down":""])},Be(e.fmtChange(d.change_pct)),3)])):Ke("",!0),e.slots.extra?(ve(),we("div",Zp,[ca(a.$slots,"extra",{item:d,index:k})])):Ke("",!0),e.slots.actions?(ve(),we("div",{key:5,class:"qc-stock-actions",onClick:t[0]||(t[0]=Vt(()=>{},["stop"]))},[ca(a.$slots,"actions",{item:d,index:k})])):Ke("",!0),e.slots.footer?(ve(),we("div",ef,[ca(a.$slots,"footer",{item:d,index:k})])):Ke("",!0)],42,Vp)]),_:3},8,["items","row-height"])):(ve(!0),we(ut,{key:1},Et(g.items,(d,k)=>(ve(),we("div",{key:d.code,class:dt(["qc-stock-row",{"is-active":g.activeCode===d.code}]),"data-copy-code":g.copyCode?d.code:void 0,tabindex:"0",role:"button","aria-label":"查看 "+(d.name||"")+" "+(d.code||""),onClick:l=>e.select(d),onKeydown:[va(Vt(l=>e.select(d),["prevent"]),["enter"]),va(Vt(l=>e.select(d),["prevent"]),["space"])]},[g.showRank?(ve(),we("div",af,Be(k+1),1)):Ke("",!0),qe("div",sf,[qe("div",nf,[qe("span",lf,Be(d.code),1),d.status==="new"?(ve(),we("span",of,Be(g.statusText.new),1)):d.status==="out"?(ve(),we("span",rf,Be(g.statusText.out),1)):Ke("",!0)]),qe("div",cf,[xa(Be(d.name)+" ",1),ca(a.$slots,"name-suffix",{item:d,index:k})]),g.showConsensus&&e.hasConsensus(d)?(ve(),we("span",df,Be(e.pctOf(d))+"% 共识",1)):Ke("",!0)]),(d.strategy_names||d.strategies)&&(d.strategy_names||d.strategies).length?(ve(),we("div",uf,[(ve(!0),we(ut,null,Et(e.displayTags(d),l=>(ve(),we("span",{key:l.text,class:dt(["qc-stock-tag",{"is-more":l.more}])},Be(l.text),3))),128))])):Ke("",!0),g.showConsensus?(ve(),we("span",vf,Be(d.strategy_count||0)+" 策略",1)):Ke("",!0),g.showPrice&&d.price!=null?(ve(),we("div",mf,[qe("span",pf,Be(e.fmtPrice(d.price)),1),qe("span",{class:dt(["qc-stock-change",d.change_pct>0?"is-up":d.change_pct<0?"is-down":""])},Be(e.fmtChange(d.change_pct)),3)])):Ke("",!0),e.slots.extra?(ve(),we("div",ff,[ca(a.$slots,"extra",{item:d,index:k})])):Ke("",!0),e.slots.actions?(ve(),we("div",{key:5,class:"qc-stock-actions",onClick:t[1]||(t[1]=Vt(()=>{},["stop"]))},[ca(a.$slots,"actions",{item:d,index:k})])):Ke("",!0),e.slots.footer?(ve(),we("div",gf,[ca(a.$slots,"footer",{item:d,index:k})])):Ke("",!0)],42,tf))),128))],64)):(ve(),pa(I,{key:1,type:"empty",title:g.emptyText},null,8,["title"]))])}const yf=Ca(Op,[["render",hf]]),bf={name:"qc-detail-split",props:{enabled:{type:Boolean,default:!1},rootClass:{type:String,default:""},listClass:{type:String,default:""},paneClass:{type:String,default:""}}},wf={key:0,class:"split-divider","data-split-resize":""};function kf(a,t,g,e,u,f){return ve(),we("div",{class:dt(["detail-split-wrap",[g.rootClass,{"detail-split":g.enabled}]]),"data-split-root":""},[qe("div",{class:dt(["detail-split-list",[g.listClass,{"w-100":!g.enabled}]])},[ca(a.$slots,"list")],2),g.enabled?(ve(),we("div",wf)):Ke("",!0),g.enabled?(ve(),we("div",{key:1,class:dt(["detail-split-pane",g.paneClass])},[ca(a.$slots,"pane")],2)):Ke("",!0)],2)}const _f=Ca(bf,[["render",kf]]),cn={strategies:{overview:"pie-chart",merrill:"clock",market:"trending-up",consensus:"target"},calendar:{calendar:"calendar",pool:"database"},ai:{overview:"activity",focus:"target",watchlist:"star",history:"history","evaluation-analysis":"bar-chart-3",portfolio:"bar-chart-3",chat_history:"message-circle"},research:{"research-overview":"search-check","quant-research":"line-chart","strategy-manage":"layers",backtest:"play","backtest-history":"history"},shortterm:{overview:"layout-dashboard","market-review":"line-chart",ztpool:"trending-up",lhb:"users",sector:"layers",intraday:"clock",scan:"search-check"},ops:{status:"activity",health:"gauge",schedule:"clock",usage:"bar-chart-3",guard:"shield",datadict:"book-open",execution:"clipboard-list"},system:{config:"save",feature:"sliders-horizontal",autoeval:"bot",datasource:"database",user:"users",about:"info",notification:"bell"}},xf=200,Sf={name:"qc-top-tabs",components:{AppIcon:Sa},setup(){const a=Da("qcState");if(!a)return{};const t=ot(()=>a.currentPage&&a.currentPage.value||""),g=ot(()=>a.currentSubPage&&a.currentSubPage.value||""),e=ot(()=>a.menus&&a.menus.value||[]),u=ot(()=>{const i=e.value.find(m=>m.key===t.value);return i&&i.subPages||[]}),f=ot(()=>u.value.map(i=>({key:i,label:a.subPageNames&&a.subPageNames[i]||i,icon:cn[t.value]&&cn[t.value][i]||"circle-dot"}))),I=Lt(null),h=Lt(!1),d=Lt(!1),k=Lt(!1);let l=null,C=null;function x(){const i=I.value;i&&(d.value=i.scrollLeft>2,k.value=i.scrollLeft<i.scrollWidth-i.clientWidth-2)}function D(){const i=I.value;i&&(h.value=i.scrollWidth>i.clientWidth+2,x())}function S(i){const m=I.value;m&&m.scrollBy({left:i*xf,behavior:"smooth"})}function P(i){a.openTab?a.openTab(t.value,i):a.currentSubPage&&(a.currentSubPage.value=i)}function F(i){P(i),Od(()=>{const m=I.value;if(!m)return;const H=m.querySelector('[data-tab-key="'+i+'"]');H&&H.scrollIntoView({block:"nearest",inline:"nearest"})})}const q=ot(()=>{if(!h.value)return[];const i=I.value;if(!i)return[];const m=i.getBoundingClientRect(),H=new Set;return i.querySelectorAll(".qc-top-tab").forEach(O=>{const K=O.getBoundingClientRect();K.left>=m.left-2&&K.left<m.right-24&&H.add(O.getAttribute("data-tab-key"))}),f.value.filter(O=>!H.has(O.key))});function r(i,m){i.key==="ArrowLeft"?(i.preventDefault(),S(-1)):i.key==="ArrowRight"?(i.preventDefault(),S(1)):(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),P(m.key))}return Ka(()=>{D(),l=new ResizeObserver(()=>{clearTimeout(C),C=setTimeout(D,100)}),I.value&&l.observe(I.value),window.addEventListener("resize",D)}),Nd(()=>{l&&l.disconnect(),window.removeEventListener("resize",D),clearTimeout(C)}),{state:a,tabs:f,currentSubPage:g,go:P,scrollRef:I,hasOverflow:h,canScrollLeft:d,canScrollRight:k,scrollByStep:S,scrollToTab:F,hiddenTabs:q,onTabKeydown:r,updateScrollState:x}}},Cf={key:0,class:"qc-top-tabs-bar",role:"tablist","aria-label":"二级页面"},qf=["disabled"],Ef=["data-tab-key","aria-selected","title","onClick","onKeydown"],Mf={class:"qc-top-tab-label"},Tf=["disabled"];function Df(a,t,g,e,u,f){const I=Zt("AppIcon"),h=Zt("el-dropdown-item"),d=Zt("el-dropdown-menu"),k=Zt("el-dropdown");return e.tabs.length?(ve(),we("div",Cf,[e.hasOverflow?(ve(),we("button",{key:0,class:"qc-top-tabs-btn",disabled:!e.canScrollLeft,"aria-label":"向左滚动",onClick:t[0]||(t[0]=l=>e.scrollByStep(-1))},"‹",8,qf)):Ke("",!0),qe("div",{ref:"scrollRef",class:"qc-header-tabs qc-top-tabs-scroll",onScrollPassive:t[1]||(t[1]=(...l)=>e.updateScrollState&&e.updateScrollState(...l))},[(ve(!0),we(ut,null,Et(e.tabs,l=>(ve(),we("div",{key:l.key,"data-tab-key":l.key,class:dt(["qc-top-tab",{"is-active":e.currentSubPage===l.key}]),role:"tab",tabindex:"0","aria-selected":e.currentSubPage===l.key?"true":"false",title:l.label,onClick:C=>e.go(l.key),onKeydown:C=>e.onTabKeydown(C,l)},[vt(I,{name:l.icon,size:14},null,8,["name"]),qe("span",Mf,Be(l.label),1)],42,Ef))),128))],544),e.hasOverflow?(ve(),we("button",{key:1,class:"qc-top-tabs-btn",disabled:!e.canScrollRight,"aria-label":"向右滚动",onClick:t[2]||(t[2]=l=>e.scrollByStep(1))},"›",8,Tf)):Ke("",!0),e.hasOverflow&&e.hiddenTabs.length?(ve(),pa(k,{key:2,class:"qc-top-tabs-more",trigger:"click",onCommand:e.scrollToTab},{dropdown:ma(()=>[vt(d,null,{default:ma(()=>[(ve(!0),we(ut,null,Et(e.hiddenTabs,l=>(ve(),pa(h,{key:l.key,command:l.key,class:dt({"is-active":e.currentSubPage===l.key})},{default:ma(()=>[vt(I,{name:l.icon,size:14},null,8,["name"]),xa(" "+Be(l.label),1)]),_:2},1032,["command","class"]))),128))]),_:1})]),default:ma(()=>[t[3]||(t[3]=qe("button",{class:"qc-top-tabs-btn qc-top-tabs-more-btn","aria-label":"更多页面"},"更多 ▾",-1))]),_:1},8,["onCommand"])):Ke("",!0)])):Ke("",!0)}const Pf=Ca(Sf,[["render",Df]]);(function(){const{ref:a,computed:t,inject:g}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.GlobalHeader={name:"qc-global-header",template:`
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
    `,setup(){const e=g("qcState");if(!e)return{};const u=a(!1),f=a(localStorage.getItem("qc.hideNonTradingBanner")==="1"),I=()=>{f.value=!0;try{localStorage.setItem("qc.hideNonTradingBanner","1")}catch{}},h=t(()=>e.marketData&&e.marketData.value||{}),d=()=>{window.__quantGoPage&&window.__quantGoPage("strategies","merrill")};return{menus:e.menus,marketData:h,bannerDismissed:f,dismissBanner:I,goMerrill:d,currentPage:e.currentPage,currentSubPage:e.currentSubPage,currentUser:e.currentUser,currentPageName:e.currentPageName,searchQuery:e.searchQuery,searchStocks:e.searchStocks,onSearchSelect:e.onSearchSelect,selectedDate:e.selectedDate,onDateChange:e.onDateChange,disabledDate:e.disabledDate,refreshCalendarData:e.refreshCalendarData,exportCSV:e.exportCSV,loading:e.loading,lastLoadTime:e.lastLoadTime,showUserMenu:u,resetSetupWizard:e.resetSetupWizard,showChangePassword:e.showChangePassword,themes:e.themes,currentTheme:e.currentTheme,changeTheme:e.changeTheme,handleLogout:e.handleLogout,subPageNames:e.subPageNames,keyClick:e.keyClick,t:e.t,subTabLabel:function(k,l){const C="sub."+k.key+"."+l,x=e.t(C);if(x!==C)return x;const D="sub."+l,S=e.t(D);return S!==D&&S?S:e.subPageNames[l]||l}}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CalendarPage={name:"qc-calendar-page",template:`
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
                </div>`,setup(){const t=a("qcState");if(!t)return{};const{ref:g,computed:e}=Vue,u=g(0),f=g(0),I=g(!1),h=e(()=>{const K={day:"date",week:"week",month:"month",year:"year"},s=t.currentView&&t.currentView.value||"day";return K[s]||"date"}),d={day:"日",week:"周",month:"月",year:"年"};function k(K){return t.t&&t.t("view."+K)||d[K]||K}function l(K){t.switchView?t.switchView(K):t.currentView&&(t.currentView.value=K)}let C=null;function x(K){const s=K.touches&&K.touches[0];s&&(u.value=s.clientX,f.value=s.clientY)}async function D(){if(!I.value){I.value=!0;try{await t.refreshCalendarData()}catch{}C&&clearTimeout(C),C=setTimeout(()=>{I.value=!1},500)}}function S(K){if(!(window.innerWidth<=768))return;const s=K.changedTouches&&K.changedTouches[0];if(!s)return;const J=window.__quantModules&&window.__quantModules.gestures||{};if((typeof J.judgePullToRefresh=="function"?J.judgePullToRefresh(f.value,s.clientY):s.clientY-f.value>=60)&&(window.scrollY||0)<=0){K.stopPropagation(),D();return}if(t.currentSubPage.value==="pool")return;const y=s.clientX-u.value,L=s.clientY-f.value;Math.abs(y)>50&&Math.abs(y)>Math.abs(L)*1.2&&(t.navigateDate(y<0?1:-1),K.stopPropagation())}const P=g(!1),F=g(!1),q=g(""),r=g(null),i=g([]);function m(K){return{multifactor:"多因子",industry_rotation:"行业轮动",index_enhance:"指数增强",money_flow:"资金流"}[K]||K}async function H(){if(t.selectedDate.value){P.value=!0,F.value=!0,q.value="",r.value=null,i.value=[];try{const K=await fetch("/api/calendar/"+t.selectedDate.value+"/compare"),s=await K.json();if(!K.ok)throw new Error(s.detail||"HTTP "+K.status);r.value=s;const J=s&&s.comparison||{},o=[];for(const y of Object.keys(J)){if(y==="all_intersection")continue;const L=J[y]||{},z=y.split("_vs_");o.push({label:m(z[0])+" ↔ "+m(z[1]),interCount:L.intersection_count||0,inter:(L.intersection||[]).join(", "),onlyS1Count:L.only_s1_count||0,onlyS1:(L.only_s1||[]).join(", "),onlyS2Count:L.only_s2_count||0,onlyS2:(L.only_s2||[]).join(", ")})}i.value=o}catch(K){q.value=String(K&&K.message?K.message:K)}finally{F.value=!1}}}let O="";return Vue.watch(()=>{const K=t.stockPool,s=K&&K.value||[];return{n:s.length,first:s[0]&&s[0].code,split:!!t.detailSplitEnabled.value}},(K,s)=>{if(!K.split||!K.first||K.n===0)return;const J=t.stockDetail&&t.stockDetail.value&&t.stockDetail.value.stock,o=(t.stockPool.value||[]).some(y=>y.code===J);if(!J||!o){if(O===K.first&&J&&o===!1&&K.n>1)return;O=K.first,t.showStockDetail&&t.showStockDetail(K.first)}},{immediate:!0}),{...t,calType:h,pullRefreshing:I,onCalTouchStart:x,onCalTouchEnd:S,viewLabel:k,switchViewLocal:l,compareVisible:P,compareLoading:F,compareError:q,compareData:r,comparePairs:i,openStrategyCompare:H}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:`
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
    `,setup(){const t=a("qcState"),g=Vue.ref(!1);if(!t)return{};const{computed:e}=Vue;let u=0;const f=e(()=>{var v;return((v=t.merrillData)==null?void 0:v.value)||{}}),I=e(()=>{var v;return((v=t.marketData)==null?void 0:v.value)||{}}),h=e(()=>{var v;return((v=t.dashboardData)==null?void 0:v.value)||{}}),d=e(()=>{var v;return((v=t.healthMetrics)==null?void 0:v.value)||[]}),k=e(()=>{var v;return((v=t.filteredConsensusRank)==null?void 0:v.value)||[]}),l=e(()=>{const v={};for(const X of k.value)X.code&&X.name&&(v[X.code]=X.name);return v}),C={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function x(v){return C[v]||v}const D=e(()=>I.value.date||h.value.latest_date||"-"),S=e(()=>{const v=I.value;return!v||Object.keys(v).length===0?"数据加载中...":v.is_trading_day&&v.in_trading_hours?"● 交易中":v.is_trading_day?"已收盘":"○ 非交易日"}),P=e(()=>{const v=f.value.next_stage_prediction;return v&&v.next_stage_name&&v.transition_probability>.2?`→${v.next_stage_name} ${(v.transition_probability*100).toFixed(2)}%`:""}),F=e(()=>{const v=[],X=h.value.pool_changes||{},le=X.new_count||0;if(le>0){const Qe=X.new_stock_names||{},Oe=(X.new_stocks||[]).map(rt=>Qe[rt]||l.value[rt]||rt).slice(0,4).join("、");v.push({icon:"sparkles",level:"new",text:`今日新入池 ${le} 只${Oe?" · "+Oe:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(t.currentPage.value="calendar",t.currentSubPage.value="pool"),t.statusFilter.value="new"}})}for(const Qe of d.value.filter(Oe=>Oe.degraded))v.push({icon:"alert-triangle",level:"warn",text:`数据源 ${x(Qe.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):t.currentPage.value="system"}});const De=f.value.timing;De&&De.progress_percent&&De.progress_percent>100?v.push({icon:"clock",level:"warn",text:`美林「${f.value.name}」已超期 ${De.progress_percent}%`,action:()=>{t.currentSubPage.value="merrill"}}):De&&De.maturity&&f.value.name&&v.push({icon:"clock",level:"info",text:`美林「${f.value.name}」阶段成熟度 ${De.maturity}`,action:()=>{t.currentSubPage.value="merrill"}});const Ve=I.value;return Ve&&Ve.is_trading_day===!1&&Ve.date&&v.push({icon:"calendar",level:"info",text:`${Ve.date} 非交易日`,action:()=>{t.currentSubPage.value="market"}}),v}),q=e(()=>{const v=[],X=f.value.name||"",le=f.value.timing||{},De=["复苏","成长","过热"],Ve=["滞胀","衰退"];De.some(ct=>X.includes(ct))&&v.push({kind:"opportunity",source:"美林",text:X+" 顺势",action:()=>{t.currentSubPage.value="merrill"}}),Ve.some(ct=>X.includes(ct))&&v.push({kind:"risk",source:"美林",text:X+" 防守",action:()=>{t.currentSubPage.value="merrill"}}),le.progress_percent&&le.progress_percent>100&&v.push({kind:"risk",source:"美林",text:"阶段超期",action:()=>{t.currentSubPage.value="merrill"}});const Qe=h.value.pool_changes||{},Oe=(Qe.new_count||0)-(Qe.out_count||0);Oe>=3?v.push({kind:"opportunity",source:"池变动",text:"净入池 +"+Oe,action:()=>{t.statusFilter.value="new",t.currentPage.value="calendar",t.currentSubPage.value="pool"}}):Oe<=-3&&v.push({kind:"risk",source:"池变动",text:"净出池 "+Oe,action:()=>{t.currentSubPage.value="consensus"}});const rt=I.value.market_sentiment,st=rt&&rt.text||"";(st.includes("乐观")||st.includes("积极")||st.includes("亢奋"))&&v.push({kind:"opportunity",source:"情绪",text:st,action:()=>{t.currentSubPage.value="market"}}),(st.includes("悲观")||st.includes("恐慌")||st.includes("低迷"))&&v.push({kind:"risk",source:"情绪",text:st,action:()=>{t.currentSubPage.value="market"}});for(const ct of d.value.filter(Ot=>Ot.degraded))v.push({kind:"risk",source:"数据",text:x(ct.name)+" 降级",action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):t.currentPage.value="system"}});return v}),r=e(()=>{var v;return((v=t.merrillTimeline)==null?void 0:v.value)||t.merrillTimeline||{cycles:[]}}),i=e(()=>{var v;return((v=t.timelineLoading)==null?void 0:v.value)||!1}),m=Vue.ref(null),H=Vue.ref(!1),O=Vue.reactive({top:0,left:0,right:null,bottom:null,maxWidth:460});function K(v){const X=v&&v.currentTarget,le=document.querySelector(".tl-click-pop");if(!X||!le)return;const De=X.getBoundingClientRect(),Ve=le.offsetWidth||340,Qe=le.offsetHeight||220,Oe=10,rt=X.closest(".merrill-timeline-block"),st=rt?rt.getBoundingClientRect():De,ct=De.left-st.left,Ot=De.top-st.top,Dt=De.width,N=De.height,ge=st.width,Le=st.height;let Ee=null;ct+Dt+Oe+Ve<=ge?Ee=ct+Dt+Oe:ct-Oe-Ve>=0?Ee=ct-Oe-Ve:Ee=Math.max(8,Math.min(ct,ge-Ve-8));const ze=Ot+N/2-Qe/2,He=Math.max(8,Math.min(ze,Le-Qe-8));O.top=He,O.left=Ee,O.right=null,O.bottom=null}const s=Vue.computed(function(){const v={};return O.top!=null&&(v.top=O.top+"px"),O.left!=null&&(v.left=O.left+"px"),O.right!=null&&(v.right=O.right+"px"),v});function J(v,X){let le=null;const De=r.value&&r.value.cycles||[];for(const Ve of De){const Qe=(Ve.stages||[]).find(Oe=>Oe.stage===v&&Oe.is_current);if(Qe){le=Qe;break}}if(!le)for(const Ve of De){const Qe=(Ve.stages||[]).find(Oe=>Oe.stage===v);if(Qe){le=Qe;break}}le&&(m.value=le,H.value=!0,Vue.nextTick(function(){K(X)}))}function o(){H.value=!1,m.value=null}function y(v){const X=t.merrillStagesConfig,De=(X&&X.value?X.value:X||{})[v]||{};return De.color||De.bg_color||"var(--color-primary)"}function L(v){const X=t.merrillStagesConfig,le=X&&X.value?X.value:X||{};return le[v]&&le[v].name||""}function z(){const v=t.merrillStagesConfig;return v&&v.value?v.value:v||{}}function ee(v){return z()[v]&&z()[v].description||""}function Y(v){const X=v&&v.stages?v.stages:[];if(!X.length)return"";const le=X[0]&&X[0].start?String(X[0].start).slice(0,4):"",De=X[X.length-1]||{},Ve=De.end?String(De.end).slice(0,4):De.start?String(De.start).slice(0,4):"";return le||Ve?le?le+"–"+Ve:Ve:""}function $(v){const X=v.start?String(v.start).slice(0,4):"",le=v.end?String(v.end).slice(0,4):X?"至今":"";return X?le?X+"–"+le:X:""}function R(v){const X=v.essence||v.trigger||ee(v.stage)||"";return v.highlight?X?X+" · "+v.highlight:v.highlight:X}function j(){const v=f.value.indicators||{},X=f.value.stage||"",le={recovery:[["PMI",v.pmi],["GDP",v.gdp_growth],["M2",v.m2_growth]],overheat:[["PPI",v.ppi],["CPI",v.cpi],["PMI",v.pmi]],stagflation:[["CPI",v.cpi],["PPI",v.ppi],["GDP",v.gdp_growth]],recession:[["PMI",v.pmi],["GDP",v.gdp_growth],["CPI",v.cpi]]},De=(le[X]||le.recession).filter(Ve=>Ve[1]!=null&&Ve[1]!==0);return De.length?"实时 · "+De.map(Ve=>Ve[0]+" "+Ve[1]+"%").join(" ｜ "):""}function A(v,X,le){const Ve=(z()[v.stage]||{}).color||"var(--color-primary)",Qe=X||[],Oe=Qe.map(Dt=>Dt.duration_months||0),rt=Oe.reduce((Dt,N)=>Dt+N,0),st=rt>0?Oe[le]/rt*100:100/Math.max(1,Qe.length),ct=le===0,Ot=le===Qe.length-1;return{flex:"0 0 "+st+"%",background:Ve,borderRadius:ct?"6px 0 0 6px":Ot?"0 6px 6px 0":"0"}}function w(v){const X=v.length;if(X<=4)return[v];const le=Math.ceil(X/2);return[v.slice(0,le),v.slice(le).reverse()]}function E(v){const X=z()[v]||{},le=X.color||"var(--color-primary)";return{background:X.bg_color||"var(--bg-card)",borderColor:le,color:"var(--text-on-chip)",boxShadow:"inset 0 0 0 1px rgba(var(--primary-rgb, 37 99 235), 0.06)"}}const oe=Vue.reactive({}),U=Vue.ref(null);let b=null,c=null,M=null;function p(){if(document.querySelector(".merrill-timeline-block"))try{document.querySelectorAll(".merrill-timeline .tl-cycle").forEach((X,le)=>{const De=X.querySelector(".tl-stage-rows"),Ve=X.querySelector(".tl-row-top"),Qe=X.querySelector(".tl-row-bottom"),Oe=Ve?Array.from(Ve.querySelectorAll(".merrill-stage-chip")):[],rt=Qe?Array.from(Qe.querySelectorAll(".merrill-stage-chip")).reverse():[],st=Oe.concat(rt);if(!De||st.length<2){oe[le]={d:"",vb:"0 0 1 1"};return}const ct=De.getBoundingClientRect(),Ot=Math.max(1,ct.width),Dt=Math.max(1,ct.height),N=Oe.length,ge=st.map(Ee=>{const ze=Ee.getBoundingClientRect();return{x:ze.left+ze.width/2-ct.left,y:ze.top+ze.height/2-ct.top}});let Le="M "+ge[0].x.toFixed(1)+" "+ge[0].y.toFixed(1);for(let Ee=1;Ee<ge.length;Ee++){const ze=ge[Ee-1],He=ge[Ee];Ee===N&&(Le+=" L "+ze.x.toFixed(1)+" "+He.y.toFixed(1)),Le+=" L "+He.x.toFixed(1)+" "+He.y.toFixed(1)}oe[le]={d:Le,vb:"0 0 "+Ot.toFixed(1)+" "+Dt.toFixed(1)}})}catch(v){console.error("[tl] buildTlPaths error",v)}}function W(v){return oe[v]||{d:"",vb:"0 0 1 1"}}function ue(v){U.value=v}function te(){U.value=null}const T=Vue.ref([]);function G(v){return T.value.indexOf(v)!==-1}function re(v){const X=T.value.slice(),le=X.indexOf(v);le!==-1?X.splice(le,1):X.push(v),T.value=X,Vue.nextTick(function(){p&&p()})}function fe(){const v=document.querySelector(".merrill-timeline-block");if(!v)return;const X=v.querySelector(".tl-spine");X?X.scrollIntoView({behavior:"smooth",block:"end"}):v.scrollIntoView({behavior:"smooth",block:"end"})}const Te=Vue.computed(function(){const v=z();return["recovery","overheat","stagflation","recession","default"].filter(function(le){return v[le]&&v[le].name}).map(function(le){return{key:le,name:v[le].name,color:v[le].color||"var(--color-primary)"}})});function Z(v){c&&clearTimeout(c),c=setTimeout(()=>{c=null,Vue.nextTick(p)},v||120)}Vue.onMounted(()=>{document.querySelector(".merrill-timeline-block")&&(Z(0),Z(800),b=()=>Z(150),window.addEventListener("resize",b),M=new MutationObserver(()=>Z(120)),M.observe(document.body||document.documentElement,{childList:!0,subtree:!0}))}),Vue.onBeforeUnmount(()=>{b&&window.removeEventListener("resize",b),c&&clearTimeout(c),M&&(M.disconnect(),M=null)});const de=Vue.ref([]),me=Vue.ref(null),pe=Vue.ref(!1),ye=Vue.ref(!1),ae=Vue.ref(7),xe=Vue.ref(""),Pe=Vue.ref(""),ne=Vue.computed(()=>{const v=new Set;return(de.value||[]).forEach(function(X){X.task&&v.add(X.task)}),Array.from(v).sort()}),se=Vue.computed(function(){const v=me.value&&me.value.success_rate||0;return v>=80?"color-success":v>=50?"color-warning":"color-danger"});function be(v,X){return v>0&&X/v>=.8?"status-ok":v>0&&X/v>=.5?"status-warn":"status-bad"}async function Ne(){const v=++u;pe.value=!0,ye.value=!1;try{const X=window.__quantModules&&window.__quantModules.core||{},le=typeof X.authHeaders=="function"?X.authHeaders():{},De=new URLSearchParams({days:String(ae.value)});xe.value&&De.set("task",xe.value),Pe.value&&De.set("status",Pe.value);const[Ve,Qe]=await Promise.all([fetch("/api/system/execution-history?"+De.toString(),{headers:le}).then(function(Oe){return Oe.json()}),fetch("/api/system/execution-summary?days="+ae.value,{headers:le}).then(function(Oe){return Oe.json()})]);if(v!==u)return;de.value=Ve&&Ve.data||[],me.value=Qe&&Qe.data||null}catch(X){console.error("[execution] 执行数据加载失败:",X),ye.value=!0}finally{v===u&&(pe.value=!1)}}const Ie=window.__quantModules&&window.__quantModules.i18n||{},We=typeof Ie.t=="function"?Ie.t:function(v){return String(v)},Ue=Vue.ref([]),yt=Vue.ref(null),at=Vue.ref(null),Rt=Vue.ref(""),Se=Vue.ref([]),_e=Vue.ref(!1);let Ae=null;const Re=Vue.computed(function(){const v=at.value&&at.value.dates||[];return v.length&&!Rt.value&&(Rt.value=v[v.length-1].date),v}),$e=Vue.computed(function(){const v=(Ue.value||[]).find(function(le){return le.enabled});if(!v||v.countdown_seconds==null)return"—";const X=v.countdown_seconds;return Math.floor(X/3600)+"h"+String(Math.floor(X%3600/60)).padStart(2,"0")+"m"}),Xe=Vue.computed(function(){const v=(Ue.value||[]).find(function(X){return X.enabled});if(!v||v.countdown_seconds==null||v.countdown_seconds<0)return"";try{return new Date(Date.now()+v.countdown_seconds*1e3).toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",hour12:!1})}catch{return""}}),et=Vue.computed(function(){const v=yt.value;return!v||v.phase==="idle"?We("exec.waiting"):v.phase==="running"?We("exec.running")+(v.current_sid?" · "+v.current_sid:""):v.phase==="done"?We("exec.done"):We("exec.failed")}),Mt=Vue.computed(function(){return yt.value&&yt.value.phase==="running"?"loader":"check-circle-2"}),Tt=Vue.computed(function(){const v=at.value&&at.value.dates||[];return v.length?v[v.length-1].date:"—"}),ft=Vue.computed(function(){const v=at.value&&at.value.dates||[],X=v[v.length-1];return X&&X.visible?"color-success":"color-danger"}),zt=Vue.computed(function(){const v=at.value&&at.value.dates||[],X=v[v.length-1];return X?X.day_view_total:"—"});function Wt(v){const X=window.__quantModules&&window.__quantModules.core||{},le=typeof X.authHeaders=="function"?X.authHeaders():{};return fetch(v,{headers:le}).then(function(De){return De.json()})}async function Qt(){const v=++u;try{const[X,le,De]=await Promise.all([Wt("/api/strategies/execution/plan"),Wt("/api/strategies/execution/status"),Wt("/api/strategies/execution/results?days=7")]);if(v!==u)return;Ue.value=X&&X.data&&X.data.plans||[],yt.value=le&&le.data||null,at.value=De&&De.data||null,yt.value&&yt.value.phase==="running"?Ze():bt()}catch(X){console.error("[execution-monitor] 监控数据加载失败:",X)}}function Ze(){bt(),Ae=setInterval(function(){Wt("/api/strategies/execution/status").then(function(v){yt.value=v&&v.data||null,yt.value&&yt.value.phase!=="running"&&(bt(),Qt())}).catch(function(){})},5e3)}function bt(){Ae&&(clearInterval(Ae),Ae=null)}async function Ut(v){if(!v)return;const X=++u;_e.value=!0;try{const le=await Wt("/api/strategies/execution/trace/"+encodeURIComponent(v));if(X!==u)return;const De=le&&le.data||null;Se.value=De&&De.steps||[]}catch(le){console.error("[execution-trace] 追溯加载失败:",le)}finally{X===u&&(_e.value=!1)}}Vue.watch(function(){return t.currentSubPage&&t.currentSubPage.value},function(v){v==="execution"?(Ne(),Qt()):bt()},{immediate:!0}),Vue.watch(function(){const v=t.currentSubPage&&t.currentSubPage.value,X=t.filteredConsensusRank&&t.filteredConsensusRank.value||[],le=t.marketData&&t.marketData.value||{};return{sub:v,split:!!t.detailSplitEnabled.value,top5:X.slice(0,5),rank:X,indices:(le.indices||[]).map(function(De){return De})}},function(v,X){if(v.split){if(v.sub==="overview"){if(!v.top5.length)return;const le=t.stockDetail&&t.stockDetail.value&&t.stockDetail.value.stock,De=v.top5.some(function(Ve){return Ve.code===le});(!le||!De)&&t.showStockDetail&&t.showStockDetail(v.top5[0].code)}else if(v.sub==="consensus"){if(!v.rank.length)return;const le=t.stockDetail&&t.stockDetail.value&&t.stockDetail.value.stock,De=v.rank.some(function(Ve){return Ve.code===le});(!le||!De)&&t.showStockDetail&&t.showStockDetail(v.rank[0].code)}else if(v.sub==="market"){if(!v.indices.length)return;const le=t.indexDetail&&t.indexDetail.value&&t.indexDetail.value.code,De=v.indices.some(function(Ve){return Ve.code===le});(!le||!De)&&t.showIndexDetail&&t.showIndexDetail(v.indices[0])}}},{immediate:!0});const ht=Vue.ref("band"),Gt=["recession","recovery","overheating","stagflation"];function qt(v){if(!v)return null;const X=String(v).split("-"),le=parseInt(X[0],10),De=parseInt(X[1]||"1",10);return isFinite(le)?le+(De-1)/12:null}function Je(v){const X=Math.floor(v);let le=Math.round((v-X)*12)+1;return le>12&&(le=12),le<1&&(le=1),X+"-"+(le<10?"0"+le:""+le)}function At(){return t.merrillData&&t.merrillData.value&&t.merrillData.value.timing||{}}function kt(){return t.merrillData&&t.merrillData.value&&t.merrillData.value.color||"var(--color-success)"}function Q(v,X){const le=At(),De=Number(le.avg_duration_months)||0,Ve=Math.min(100,Number(le.progress_percent)||0),Qe=qt(le.current_stage_start_date),Oe=[];let rt=null;if((v||[]).forEach(function(ze){const He=qt(ze.start);rt==null&&He!=null&&(rt=He);const mt=!!(ze.is_current||Qe!=null&&He===Qe&&!ze.duration_months),xt=ze.name||L(ze.stage);if(mt&&De>0){const it=De*Ve/100;it>.5&&Oe.push({stage:ze.stage,name:xt,months:it,live:!0,start:ze.start});const Jt=De-it;Jt>.5&&Oe.push({stage:ze.stage,name:"剩余(预测)",months:Jt,ghost:!0,start:ze.start})}else{let it=Number(ze.duration_months)||0;if(!it&&He!=null){const Jt=qt(ze.end);Jt!=null&&Jt>He&&(it=Math.max(1,Math.round((Jt-He)*12)))}it||(it=1),Oe.push({stage:ze.stage,name:xt,months:it,live:mt,start:ze.start,end:ze.end})}if(mt&&X&&De>0){const it=t.merrillData&&t.merrillData.value&&t.merrillData.value.next_stage_prediction;it&&Oe.push({stage:it.next_stage,name:(it.next_stage_name||"下一阶段")+" (预测)",months:De,ghost:!0,prob:it.transition_probability})}}),!Oe.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};const st=Oe.reduce(function(ze,He){return ze+He.months},0)||1,ct=rt??0;let Ot=0,Dt=0;const N=Oe.map(function(ze){const He=Ot;ze.ghost||(Dt+=ze.months),Ot+=ze.months;const mt={stage:ze.stage,name:ze.name,months:Math.round(ze.months),ghost:!!ze.ghost,live:!!ze.live,prob:ze.prob,left:He/st*100,width:Math.max(2,ze.months/st*100)},xt=qt(ze.start),it=qt(ze.end);return mt.start=xt!=null?Je(xt):Je(ct+He/12),mt.end=it!=null?Je(it):"",mt.predicted=xt==null,mt}),ge=Oe[Oe.length-1],Le=Oe.some(function(ze){return ze.ghost}),Ee=ge&&ge.end?ge.end:Je(ct+st/12);return{segs:N,axisStart:Je(ct),axisEnd:Ee,nowPct:Le?Dt/st*100:null}}function he(v){return(v.stages||[]).some(function(X){return X.is_current})}const tt=Vue.computed(function(){const v=t.merrillTimeline&&t.merrillTimeline.value&&t.merrillTimeline.value.cycles||[];if(!v.length)return{segs:[],axisStart:"",axisEnd:"",nowPct:null};let X=null;for(let le=v.length-1;le>=0;le--)if(he(v[le])){X=v[le];break}return X||(X=v[v.length-1]),Q(X.stages,!0)}),_t=Vue.computed(function(){return(t.merrillTimeline&&t.merrillTimeline.value&&t.merrillTimeline.value.cycles||[]).filter(function(X){return!he(X)}).map(function(X){return{label:X.label,years:Y(X),segs:Q(X.stages,!1).segs}})}),lt=Gt,It=Vue.computed(function(){return(t.merrillTimeline&&t.merrillTimeline.value&&t.merrillTimeline.value.cycles||[]).map(function(X){const le={};Gt.forEach(function(Ve){le[Ve]=0});let De=null;return(X.stages||[]).forEach(function(Ve){le[Ve.stage]!=null&&(le[Ve.stage]+=Number(Ve.duration_months)||0),Ve.is_current&&(De=Ve.stage)}),{label:X.label,sum:le,cur:De}})}),ea=Vue.computed(function(){let v=0;return It.value.forEach(function(X){Gt.forEach(function(le){X.sum[le]>v&&(v=X.sum[le])})}),v||1}),na=Vue.computed(function(){const v=t.merrillSnapshots&&t.merrillSnapshots.value||[],X=[];return v.forEach(function(le){const De=X[X.length-1];De&&De.stage===le.stage?(De.count++,De.last=le.timestamp):X.push({stage:le.stage,name:le.stage_name||L(le.stage),count:1,first:le.timestamp,last:le.timestamp})}),X}),oa=Vue.computed(function(){return Math.max(100,Math.min(200,Number(At().progress_percent)||0))}),ta=Vue.computed(function(){const v=Number(At().progress_percent)||0;return{width:Math.max(0,Math.min(100,v/oa.value*100))+"%",background:v>100?"linear-gradient(90deg, "+kt()+", var(--color-warning))":kt()}}),$t=Vue.computed(function(){return 100/oa.value*100}),Kt=Vue.computed(function(){const v=At().predicted_end;if(!v)return"";if(typeof v=="string")return v;const X=v.optimistic||v.earliest||"",le=v.pessimistic||v.latest||"";return X&&le?X+" ~ "+le:v.base||v.mid||X||le||""});function Nt(v){const X=y(v.stage);return v.ghost?{left:v.left+"%",width:v.width+"%",borderColor:X,color:"var(--text-secondary)",background:"repeating-linear-gradient(45deg, "+X+"44, "+X+"44 5px, transparent 5px, transparent 10px)"}:{left:v.left+"%",width:v.width+"%",background:X}}function Yt(v){const X=[v.name];return v.start&&X.push((v.predicted?"预计起始 ":"起始 ")+v.start+(v.end?" → "+v.end:"")),v.months&&X.push("约 "+v.months+" 个月"),v.ghost&&X.push("预测(尚未发生)"),v.prob!=null&&X.push("转移概率 "+(v.prob*100).toFixed(0)+"%"),X.join(" · ")}function gt(v,X){const le=y(v),De=Math.max(.28,X/ea.value);return{background:le,opacity:(.45+.55*De).toFixed(2)}}return{...t,todayText:D,tradingStatus:S,merrillNext:P,todayFocus:F,todaySignals:q,merrillConfigOpen:g,getTimelineStageColor:y,getTimelineStageName:L,getTimelineStageDesc:ee,timelineRows:w,tlChipStyle:E,tlPathFor:W,tlCycleYears:Y,tlGanttStyle:A,tlTipYears:$,tlTipBrief:R,tlCurrentBrief:j,tlHoverKey:U,setTlHover:ue,clearTlHover:te,collapsedCycles:T,isCycleCollapsed:G,toggleCycle:re,scrollToLatest:fe,tlLegendStages:Te,mcHistView:ht,mcCurrentBand:tt,mcHistoryBands:_t,mcStageKeys:lt,mcMatrix:It,mcTrailRuns:na,mcProgStyle:ta,mcAvgMark:$t,mcEndRange:Kt,mcSegStyle:Nt,mcSegTitle:Yt,mcMxCellStyle:gt,tlClickStage:m,tlClickVisible:H,closeTlClick:o,tlClickPosStyle:s,merrillTimeline:r,timelineLoading:i,showTimelineStage:J,execHistory:de,execSummary:me,execLoading:pe,execError:ye,execDays:ae,execTaskFilter:xe,execStatusFilter:Pe,execTaskOptions:ne,execSuccessClass:se,loadExecutionData:Ne,execRateClass:be,execPlan:Ue,execStatus:yt,execResults:at,execTraceDate:Rt,execTraceSteps:Se,execTraceLoading:_e,execResultsDates:Re,execCountdownText:$e,execNextRunText:Xe,execPhaseText:et,execStatusIcon:Mt,execLastDate:Tt,execVisibleClass:ft,execVisibleText:zt,loadExecutionTrace:Ut}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.SystemPage={name:"qc-system-page",template:`
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
    `,setup(){const t=a("qcState");if(!t)return{};function g(Q){t.currentSubPage.value=Q}function e(){xe(),Pe(),ne()}Vue.watch(()=>t.currentSubPage&&t.currentSubPage.value,Q=>{Q==="autoeval"&&t.loadAiVendors&&t.loadAiVendors(),Q==="datadict"&&M(),Q==="health"&&E(),Q==="notification"&&e()});const u=t.themeHues||[45,220,0,140,270,320],f=t.themeHueNames||{},I=t.themeMode||Vue.computed(()=>"light"),h=t.themeHue||Vue.ref(45);function d(Q){t.changeThemeMode&&t.changeThemeMode(Q)}function k(Q){t.changeThemeHue&&t.changeThemeHue(parseInt(Q,10))}function l(Q){return t.hueColor?t.hueColor(Q):"hsl("+Q+", 75%, 42%)"}function C(Q){return t.hueName?t.hueName(Q):f[Q]||"自定义 "+Q}function x(Q){t.setNavMode&&t.setNavMode(Q)}const D=Vue.ref([]),S=Vue.ref(""),P=Vue.ref("read"),F=Vue.ref(""),q=Vue.ref(!1),r=()=>window.__quantModules&&window.__quantModules.core||{},i=Vue.ref([]),m=Vue.ref(!1);async function H(){m.value=!0;try{const Q=await fetch("/api/audit/logs?limit=20",{headers:r().authHeaders?r().authHeaders():{}}).then(function(he){if(!he.ok)throw new Error("HTTP "+he.status);return he.json()});i.value=Q&&Q.logs||[]}catch(Q){console.error("[system] 审计加载失败:",Q),i.value=[]}finally{m.value=!1}}const O=Vue.ref(!1),K=Vue.ref(null),s=Vue.ref(null),J=Vue.ref([]),o=Vue.ref(null);function y(Q){return Q==="completed"?"完成":Q==="running"?"运行中":Q==="pending"?"排队中":Q==="cancelled"?"已取消":"失败"}async function L(){try{const he=await(await fetch("/api/jobs?limit=20")).json();he&&he.success&&(J.value=he.data&&he.data.tasks||[])}catch(Q){console.warn("[system] 加载任务队列失败:",Q)}}async function z(Q){try{await fetch("/api/jobs/"+Q+"/cancel",{method:"POST"}),ElementPlus.ElMessage.success("已请求取消任务"),L()}catch(he){console.warn("[system] 取消任务失败:",he)}}function ee(){L(),o.value=window.setInterval(L,15e3)}const Y=Vue.ref({items:[]}),$=Vue.ref([]),R=Vue.ref(null),j=Vue.ref({data_sources:[],alerts:[]}),A=function(){return r().authHeaders?r().authHeaders():{}},w=function(Q){return fetch(Q,{headers:A()}).then(function(he){if(!he.ok)throw new Error("HTTP "+he.status);return he.json()})};async function E(){O.value=!0,K.value=null;try{const[Q,he,tt,_t]=await Promise.all([w("/api/reliability/freshness"),w("/api/reliability/heal-history?limit=20"),w("/api/reliability/startup-report"),w("/api/reliability/source-health")]);Y.value=Q&&Q.data||{items:[]},$.value=he&&he.data||[],R.value=tt&&tt.data||null,j.value=_t||{data_sources:[],alerts:[]},s.value=new Date().toLocaleTimeString()}catch(Q){console.warn("[health] 加载失败:",Q),K.value="健康数据加载失败: "+(Q.message||""),Y.value={items:[]},$.value=[]}finally{O.value=!1}}const oe=Vue.ref(!1),U=Vue.ref(""),b=Vue.ref(""),c=Vue.ref({fields:[]});async function M(){oe.value=!0,U.value="";try{const Q="/api/data-dict"+(b.value?"?category="+b.value:""),he=await w(Q);c.value=he&&he.data||{fields:[]}}catch(Q){console.warn("[dict] 加载失败:",Q),U.value="数据字典加载失败: "+(Q.message||""),c.value={fields:[]}}finally{oe.value=!1}}function p(Q){return{fresh:"var(--color-success)",stale:"var(--color-danger)",missing:"var(--text-tertiary)",unknown:"var(--color-warning)"}[Q]||"var(--text-secondary)"}function W(Q){return{fresh:"正常",stale:"过期",missing:"缺失",unknown:"未知"}[Q]||Q}const ue=Vue.computed(()=>(Y.value?Y.value.items||[]:[]).filter(he=>he.status==="stale"||he.status==="missing").length),te=Vue.ref("rules"),T=Vue.ref([]),G=Vue.ref([]),re=Vue.ref([]),fe=Vue.ref(!1),Te=Vue.ref(""),Z=Vue.ref("price_above"),de=Vue.ref(""),me=Vue.ref(!1),pe=Vue.ref(60),ye=Vue.ref("");function ae(Q){return{price_above:"价格突破",price_below:"价格跌破",pct_change:"涨跌幅超",volume_surge:"量比异动",new_pool:"入池"}[Q]||Q}async function xe(){fe.value=!0;try{const Q=await(await fetch("/api/alerts/rules")).json();T.value=Q&&Q.rules||[]}catch(Q){ye.value="规则加载失败: "+Q}finally{fe.value=!1}}async function Pe(){fe.value=!0;try{const Q=await(await fetch("/api/alerts/history?limit=50")).json();G.value=Q&&Q.history||[]}catch(Q){ye.value="历史加载失败: "+Q}finally{fe.value=!1}}async function ne(){fe.value=!0;try{const Q=await(await fetch("/api/alerts/channels")).json(),he=await(await fetch("/api/alerts/silence")).json();re.value=Q&&Q.channels||[],me.value=!!(he&&he.silenced)}catch(Q){ye.value="通道状态加载失败: "+Q}finally{fe.value=!1}}function se(Q){te.value=Q,Q==="rules"?xe():Q==="history"?Pe():ne()}async function be(){const Q=Te.value.trim();if(!Q){ye.value="请填写股票代码";return}fe.value=!0;try{const he={stock_code:Q,rule_type:Z.value};if(Z.value!=="new_pool"){const _t=Number(de.value);if(isNaN(_t)){ye.value="阈值必须为数值";return}he.threshold=_t}const tt=await(await fetch("/api/alerts/rules",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(he)})).json();tt&&tt.rule?(ye.value="规则已添加",Te.value="",de.value="",xe()):ye.value=tt&&tt.detail||"添加失败"}catch(he){ye.value="添加失败: "+he}finally{fe.value=!1}}async function Ne(Q){try{await fetch("/api/alerts/rules/"+Q.id,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({enabled:!Q.enabled})}),Q.enabled=!Q.enabled}catch(he){ye.value="切换失败: "+he}}async function Ie(Q){try{const he=await(await fetch("/api/alerts/rules/"+Q.id,{method:"DELETE"})).json();he&&he.success?(ye.value="规则已删除",xe()):ye.value="删除失败"}catch(he){ye.value="删除失败: "+he}}async function We(){try{const Q=me.value?pe.value:0,he=await(await fetch("/api/alerts/silence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({minutes:Q})})).json();me.value=!!(he&&he.silenced),ye.value=me.value?"已静默":"已恢复推送"}catch(Q){ye.value="静默设置失败: "+Q}}async function Ue(){me.value=!1,await We()}function yt(Q){return!!Q&&!Q.degraded}const at=Vue.computed(()=>(t&&t.analyticsRank&&t.analyticsRank.value||[]).reduce((he,tt)=>Math.max(he,tt.views||0),0)||1),Rt=()=>r().OPENAPI_ROUTE_BASE||"/api/openapi";async function Se(){q.value=!0;try{const Q=await r().apiFetch(Rt()+"/keys");D.value=Q&&Q.data||[]}catch(Q){ElementPlus.ElMessage.error("加载 API Key 失败: "+(Q.message||""))}finally{q.value=!1}}async function _e(){try{const Q=await r().apiFetch(Rt()+"/keys",{method:"POST",body:JSON.stringify({name:S.value||"未命名",role:P.value||"read",expire_days:365})});Q&&Q.success?(F.value=Q.api_key||"",S.value="",ElementPlus.ElMessage.success("API Key 已生成（明文仅展示一次）"),await Se()):ElementPlus.ElMessage.error(Q&&(Q.detail||Q.message)||"生成失败")}catch(Q){ElementPlus.ElMessage.error("生成失败: "+(Q.message||""))}}async function Ae(){if(F.value)try{await navigator.clipboard.writeText(F.value),ElementPlus.ElMessage.success("已复制")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}async function Re(Q){try{const he=await r().apiFetch(Rt()+"/keys/"+Q.id,{method:"DELETE"});he&&he.success?(ElementPlus.ElMessage.success("Key 已吊销"),F.value&&Q.prefix&&F.value.includes(Q.prefix)&&(F.value=""),await Se()):ElementPlus.ElMessage.error(he&&(he.detail||he.message)||"吊销失败")}catch(he){ElementPlus.ElMessage.error("吊销失败: "+(he.message||""))}}const $e={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function Xe(Q){return $e[Q]||Q}const et=computed(()=>{var Q;return(((Q=t.healthMetrics)==null?void 0:Q.value)||[]).map(he=>({name:Xe(he.name),source:he.name,success_rate:he.success_rate,avg_latency_ms:he.avg_latency_ms,calls:he.calls||0,degraded:!!he.degraded,data_age_hours:he.data_age_hours!=null?he.data_age_hours:null,stale:!!he.stale,last_fetch:he.last_fetch||he.last_success||null}))});function Mt(Q){return Q.degraded?"degraded":Q.success_rate==null?"unknown":Q.success_rate>=90?"ok":Q.success_rate>=60?"warn":"bad"}function Tt(Q){return Q==null?"":Q<1?"刚刚":Q<24?Math.round(Q)+"小时前":Math.floor(Q/24)+"天前"}const ft=t.aiUsage||Vue.ref({}),zt=Vue.computed(()=>{const Q=ft.value&&ft.value.by_model||{};return Object.entries(Q).map(([he,tt])=>({name:he,count:tt})).sort((he,tt)=>tt.count-he.count)}),Wt=Vue.computed(()=>zt.value.reduce((Q,he)=>Math.max(Q,he.count),0)||1),Qt=Vue.computed(()=>zt.value.reduce((Q,he)=>Q+he.count,0)||1),Ze=Vue.computed(()=>bt.value.reduce((Q,he)=>Math.max(Q,he.count),0)||0),bt=Vue.computed(()=>{const Q=ft.value&&ft.value.by_day||{},he=[],tt=new Date;for(let _t=29;_t>=0;_t--){const lt=new Date(tt.getFullYear(),tt.getMonth(),tt.getDate()-_t),It=lt.getFullYear()+"-"+String(lt.getMonth()+1).padStart(2,"0")+"-"+String(lt.getDate()).padStart(2,"0");he.push({day:It,count:Q[It]||0})}return he}),Ut=Vue.computed(()=>bt.value.reduce((Q,he)=>Math.max(Q,he.count),0)||1),ht=Vue.computed(()=>{const Q=ft.value&&ft.value.by_day||{},he=new Date,tt=he.getFullYear()+"-"+String(he.getMonth()+1).padStart(2,"0")+"-"+String(he.getDate()).padStart(2,"0");return Q[tt]||0}),Gt=Vue.computed(()=>{const Q=ft.value&&ft.value.by_day||{},he=Object.keys(Q).filter(tt=>(Q[tt]||0)>0);return he.length?he[he.length-1]:""});function qt(Q){t.analyticsDays&&(t.analyticsDays.value=Q),typeof t.loadAnalytics=="function"&&t.loadAnalytics()}const Je='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',At='<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';function kt(Q){return Q?At:Je}return ee(),{...t,themeHues:u,themeHueNames:f,themeMode:I,themeHue:h,onThemeModeChange:d,setThemeHue:k,hueColor:l,hueName:C,onNavModeChange:x,analyticsMaxViews:at,aiModelRank:zt,aiModelMax:Wt,aiDayTrend:bt,aiDayMax:Ut,todayAiCalls:ht,lastAiCallDay:Gt,aiTotal:Qt,aiDayPeak:Ze,setAnalyticsDays:qt,viewIcon:kt,openApiKeys:D,openApiKeyName:S,openApiKeyRole:P,newOpenApiKey:F,openApiLoading:q,loadOpenApiKeys:Se,generateOpenApiKey:_e,copyOpenApiKey:Ae,revokeOpenApiKey:Re,healthRows:et,healthClass:Mt,fmtAge:Tt,staleAssetCount:ue,jobQueue:J,loadJobQueue:L,cancelJob:z,jobStatusText:y,auditLogs:i,auditLoading:m,loadAuditLogs:H,healthLoading:O,healthError:K,healthUpdatedAt:s,freshnessData:Y,healHistory:$,startupReport:R,sourceHealth:j,refreshHealth:E,statusColor:p,statusLabel:W,sourceOk:yt,dictLoading:oe,dictError:U,dictCategory:b,dictData:c,loadDataDict:M,ncTab:te,ncRules:T,ncHistory:G,ncChannels:re,ncLoading:fe,ncNewCode:Te,ncNewType:Z,ncNewThreshold:de,ncSilence:me,ncSilenceMinutes:pe,ncMsg:ye,ncTypeLabel:ae,onNcTab:se,loadAlertRules:xe,loadAlertHistory:Pe,loadAlertChannels:ne,addAlertRule:be,toggleAlertRule:Ne,removeAlertRule:Ie,applySilence:We,clearSilence:Ue,goSystemSub:g}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AiPage={name:"qc-ai-page",template:`
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
                </div>`,setup(){const{ref:t,watch:g,onUnmounted:e}=Vue,u=a("qcState");if(!u)return{};function f(){if(!u.hasMoreAiHistory||!u.loadMoreAiHistory||u.currentPage.value!=="ai"||u.currentSubPage.value!=="history")return;const fe=document.documentElement;fe.scrollTop+window.innerHeight>=fe.scrollHeight-300&&u.loadMoreAiHistory()}window.addEventListener("scroll",f,{passive:!0}),e(()=>window.removeEventListener("scroll",f));const I=t(null),h=t(!1),d=[{key:"n5",label:"5 日"},{key:"n10",label:"10 日"},{key:"n20",label:"20 日"}];function k(fe){return!fe||fe.total===0||fe.rate===null||fe.rate===void 0?"--":fe.rate.toFixed(2)+"%"}const l=t(5);function C(fe){l.value=fe}function x(fe,Te){if(!fe)return"--";if(fe.available===!1)return"— 数据不可达";const Z=fe["hit_n"+Te];return Z===!0?"✓ 命中":Z===!1?"✗ 未中":"– 中性/待验证"}async function D(){h.value=!0;try{const Te=await(await fetch("/api/ai/track")).json();I.value=Te&&Te.success?Te.data:null}catch(fe){console.warn("[eval-track] 评估命中率加载失败:",fe),I.value=null}finally{h.value=!1}}g(function(){return u.currentPage.value+"/"+u.currentSubPage.value},function(fe){fe==="ai/evaluation-analysis"&&D()},{immediate:!0});const S=window.__quantModules&&window.__quantModules.portfolio?window.__quantModules.portfolio.create({}):{},{positions:P,summary:F,trades:q,loading:r,loadError:i,showAddForm:m,addForm:H,addSaving:O,tradeFormVisible:K,tradeForm:s,tradeSaving:J,portfolioTab:o,equityDays:y,equityLoading:L,equityNote:z,equityHasData:ee,loadPortfolio:Y,addPosition:$,removePosition:R,openTradeForm:j,submitTrade:A,loadTrades:w,loadEquity:E,fmtSigned:oe,fmtSignedPct:U,signClass:b,riskTab:c,riskLoading:M,riskNote:p,riskHasData:W,riskData:ue,riskMetricList:te,loadRisk:T}=S;g(P,function(fe){window.__quantModules&&window.__quantModules.pinyin&&window.__quantModules.pinyin.registerExtraStocks((fe||[]).map(function(Te){return{code:Te.stock_code,name:Te.stock_name||Te.stock_code}}))},{deep:!0}),g(function(){return u.currentPage.value+"/"+u.currentSubPage.value},function(fe){fe==="ai/portfolio"?(Y(),w(),E(y?y.value:30),typeof T=="function"&&T()):fe==="ai/overview"&&Y()},{immediate:!0});let G="",re=!1;return g(function(){const fe=u.currentSubPage&&u.currentSubPage.value,Te=!!(u.detailSplitEnabled&&u.detailSplitEnabled.value),Z={sub:fe,split:Te,kind:"",view:"",key:"",first:null,expandList:null,expandFn:null};if(fe==="history"){const de=u.aiHistoryView&&u.aiHistoryView.value||"date",me=de==="date"?u.groupedByDate:de==="month"?u.groupedByMonth:u.aiHistoryByStock,pe=me&&me.value||{},ye=Object.keys(pe);Z.kind="history",Z.view=de,Z.key=ye.length?ye[0]:"",Z.first=ye.length&&(pe[ye[0]]||[])[0]||null,Z.expandList=de==="date"?u.expandedDates:de==="month"?u.expandedMonths:u.expandedStocks,Z.expandFn=de==="date"?u.toggleDateExpand:de==="month"?u.toggleMonthExpand:u.toggleStockExpand}else if(fe==="chat_history"){const de=u.chatHistoryView&&u.chatHistoryView.value||"date",me=de==="date"?u.chatGroupedByDate:de==="month"?u.chatGroupedByMonth:u.chatGroupedByStock,pe=me&&me.value||{},ye=Object.keys(pe);Z.kind="chat",Z.view=de,Z.key=ye.length?ye[0]:"",Z.first=ye.length&&(pe[ye[0]]||[])[0]||null,Z.expandList=de==="date"?u.expandedChatDates:de==="month"?u.expandedChatMonths:u.expandedChatStocks,Z.expandFn=de==="date"?u.toggleChatDateExpand:de==="month"?u.toggleChatMonthExpand:u.toggleChatStockExpand}return Z},function(fe){if(!fe.split||!fe.first||!fe.kind)return;const Te=fe.sub!==G,Z=u.stockDetail&&u.stockDetail.value,de=!!(Z&&Z.stock);if(!Te&&de||re)return;G=fe.sub,re=!0;try{fe.key&&fe.expandList&&fe.expandFn&&fe.expandList.value&&fe.expandList.value.indexOf(fe.key)<0&&fe.expandFn(fe.key)}catch{}const me=fe.kind==="history"?u.viewAiResult(fe.first):u.viewChatSession(fe.first);me&&typeof me.finally=="function"?me.finally(function(){re=!1}):re=!1},{immediate:!0}),{...u,trackData:I,trackLoading:h,trackWindows:d,fmtTrackRate:k,loadTrack:D,trackWindow:l,setTrackWindow:C,trackHitText:x,positions:P,summary:F,trades:q,loading:r,loadError:i,showAddForm:m,addForm:H,addSaving:O,tradeFormVisible:K,tradeForm:s,tradeSaving:J,portfolioTab:o,equityDays:y,equityLoading:L,equityNote:z,equityHasData:ee,loadPortfolio:Y,addPosition:$,removePosition:R,openTradeForm:j,submitTrade:A,loadTrades:w,loadEquity:E,fmtSigned:oe,fmtSignedPct:U,signClass:b,riskTab:c,riskLoading:M,riskNote:p,riskHasData:W,riskData:ue,riskMetricList:te,loadRisk:T}}}})();(function(){const{ref:a,computed:t,watch:g,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:`
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
                </div>`,setup(){const u=e("qcState"),f=Vue.ref(!1),I=Vue.ref(!1);let h=0;if(!u)return{};const d=a(localStorage.getItem("quant_strategy_mode")==="custom"?"custom":"template");function k(_){d.value=_;try{localStorage.setItem("quant_strategy_mode",_)}catch{}u.currentSubPage.value="strategy-manage"}const l=a([]),C=a(!1),x=a(!1),D=a(""),S=a(null),P=a(!1),F=a(!1);async function q(){const _=++h;C.value=!0,x.value=!1;try{const n=await fetch("/api/market/reviews?limit=30",{headers:Q()}).then(B=>B.json());if(_!==h)return;n&&n.success?l.value=Array.isArray(n.data)?n.data:[]:x.value=!0}catch(n){console.error("[market-review] 复盘列表加载失败:",n),x.value=!0}finally{_===h&&(C.value=!1)}}function r(_){D.value=_,K(_)}function i(_){D.value===_?O():r(_)}function m(_){return _==null||isNaN(Number(_))?"—":(Number(_)>=0?"+":"")+Number(_).toFixed(2)+"%"}function H(_){return _==null||isNaN(Number(_))?"—":Number(_).toFixed(2)}function O(){D.value="",S.value=null,F.value=!1}async function K(_){const n=++h;P.value=!0,F.value=!1,S.value=null;try{const B=_?"/api/market/review?date="+encodeURIComponent(_):"/api/market/review",ie=await fetch(B,{headers:Q()}).then(Ce=>Ce.json());if(n!==h)return;ie&&ie.success?S.value=ie.data:F.value=!0}catch(B){console.error("[market-review] 复盘详情加载失败:",B),F.value=!0}finally{n===h&&(P.value=!1)}}function s(_){return _>0?"up":_<0?"down":"flat"}function J(_){return _==null||isNaN(Number(_))?"—":(_>0?"+":"")+Number(_).toFixed(2)+"%"}function o(_){const n={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(_||{}).map(function(B){const ie=B[0],Ce=B[1],Me=!Ce||Ce==="unavailable"||Ce==="数据不可达";return{label:n[ie]||ie,value:Me?"数据不可达":Ce,unavailable:Me}})}const y=a([]),L=a(!1),z=a(!1),ee=a(""),Y=a(""),$=a(""),R=a({}),j=a(!1),A=a(""),w=a(""),E=a([]),oe=a([]),U=a(""),b=a(""),c=a(!0),M=a(!0),p=a("20:00"),W=a("default"),ue=a(!1),te=a(""),T=t(function(){return y.value.find(function(_){return _.id===$.value})||null});async function G(_,n){n=n||{},n.headers=Object.assign({},n.headers||{});const B=localStorage.getItem("quant_token")||"";return B&&(n.headers.Authorization="Bearer "+B),fetch(_,n)}async function re(){const _=++h;L.value=!0,z.value=!1,ee.value="",Y.value="";try{const n=await G("/api/strategies").then(function(ie){return ie.json()});if(_!==h)return;let B=null;Array.isArray(n)?B=n:n&&Array.isArray(n.strategies)?(B=n.strategies,n.warn&&(Y.value=String(n.warn))):(z.value=!0,ee.value=n&&n.detail?String(n.detail):"策略列表加载失败（接口返回异常）"),B!==null&&(y.value=B,y.value.length&&!$.value&&($.value=y.value[0].id,fe()))}catch(n){console.error("[research] 策略列表加载失败:",n),z.value=!0,ee.value="策略列表加载失败: "+(n&&n.message||"网络错误")}finally{_===h&&(L.value=!1)}}function fe(){const _=T.value;_&&(R.value={},_.schema.forEach(function(n){R.value[n.key]=n.default}),w.value="",se(),Te(),pe())}async function Te(){if(!$.value){oe.value=[];return}try{const _=await G("/api/strategies/"+$.value+"/profiles").then(function(n){return n.json()});oe.value=_&&_.data&&_.data.profiles||[],U.value=""}catch(_){console.error("[research] 方案列表加载失败:",_),oe.value=[]}}async function Z(){f.value=!0;const _=(b.value||"").trim();if(!_){window._core&&window._core.showToast("请输入方案名称");return}try{const n=await G("/api/strategies/"+$.value+"/profiles",{method:"POST",body:JSON.stringify({name:_,params:R.value})}).then(function(B){return B.json()});if(n&&n.detail){window._core&&window._core.showToast(String(n.detail));return}b.value="",await Te(),window._core&&window._core.showToast("方案已保存")}catch(n){console.error("[research] 方案保存失败:",n),window._core&&window._core.showToast("方案保存失败")}}function de(){const _=oe.value.find(function(n){return n.id===U.value});_&&(Object.keys(_.params||{}).forEach(function(n){R.value[n]=_.params[n]}),window._core&&window._core.showToast("已应用方案: "+_.name))}async function me(){if(U.value)try{await G("/api/strategies/"+$.value+"/profiles/"+U.value,{method:"DELETE"}).then(function(_){return _.json()}),await Te(),window._core&&window._core.showToast("方案已删除")}catch(_){console.error("[research] 方案删除失败:",_)}}async function pe(){try{const _=await G("/api/strategies/governance").then(function(ie){return ie.json()}),B=(_&&_.data&&_.data.strategies||{})[$.value]||{};c.value=B.enabled!==!1,p.value=B.schedule||"20:00",W.value=B.universe==="all"?"all":"default",M.value=B.show_in_calendar!==!1,te.value=B.last_holdings||""}catch(_){console.error("[research] 纳管状态加载失败:",_)}}async function ye(){try{await G("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const _={};return _[$.value]={enabled:c.value,schedule:p.value,universe:W.value,show_in_calendar:M.value},_}()})}).then(function(_){return _.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(_){console.error("[research] 纳管更新失败:",_)}}async function ae(){if($.value){ue.value=!0;try{const _=await G("/api/strategies/"+$.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:A.value||void 0})}).then(function(n){return n.json()});if(_&&_.detail){window._core&&window._core.showToast(String(_.detail));return}window._core&&window._core.showToast("持仓已生成"),await pe()}catch(_){console.error("[research] run-once 失败:",_),window._core&&window._core.showToast("持仓生成失败")}finally{ue.value=!1}}}function xe(){te.value&&window.open(te.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function Pe(){const _=T.value;if(!_)return;const n=(b.value||"").trim()||_.name+"-副本";ne(n,Object.assign({},R.value)),window._core&&window._core.showToast("已复制为副本方案: "+n)}async function ne(_,n){try{await G("/api/strategies/"+$.value+"/profiles",{method:"POST",body:JSON.stringify({name:_,params:n})}).then(function(B){return B.json()}),await Te()}catch(B){console.error("[research] 副本保存失败:",B)}}async function se(){const _=++h;if($.value)try{const n=await G("/api/strategies/"+$.value+"/runs?limit=5").then(function(B){return B.json()});if(_!==h)return;E.value=Array.isArray(n)?n:[]}catch{E.value=[]}}async function be(){if($.value){j.value=!0;try{const _=await G("/api/strategies/"+$.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:R.value,as_of:A.value||void 0})}).then(function(n){return n.json()});_&&_.status==="success"?se():alert("运行失败: "+(_.detail||JSON.stringify(_)))}catch(_){console.error("[research] 策略运行失败:",_),alert("运行失败: "+_.message)}finally{j.value=!1}}}async function Ne(){if($.value)try{const _=Object.keys(R.value).map(function(B){return encodeURIComponent(B)+"="+encodeURIComponent(R.value[B])}).join("&"),n=await G("/api/strategies/"+$.value+"/ptrade-code?"+_).then(function(B){return B.json()});n&&n.code?w.value=n.code:alert("导出失败: "+(n.detail||JSON.stringify(n)))}catch(_){console.error("[research] PTrade 导出失败:",_),alert("导出失败: "+_.message)}}function Ie(){if(!w.value)return;const _=document.createElement("textarea");_.value=w.value,document.body.appendChild(_),_.select();try{document.execCommand("copy")}catch{}document.body.removeChild(_)}g(function(){return u.currentPage.value+"/"+u.currentSubPage.value},function(_){_==="research/research-overview"&&(re(),q(),he(),Qe()),(_==="research/market-review"||_==="shortterm/market-review")&&!D.value&&q(),_==="research/quant-research"&&re(),_==="research/backtest-history"&&Ee()},{immediate:!0});const We=a("mom20"),Ue=a(!1),yt=a(!1),at=a(null),Rt=a(null),Se=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],_e=a('{"top_n":[10,20,30]}'),Ae=a(null),Re=a(""),$e=a(!1),Xe=a(null);async function et(){if(!$.value){ElementPlus.ElMessage.warning("请先选择策略");return}let _;try{_=JSON.parse(_e.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!_||Object.keys(_).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}$e.value=!0,Ae.value=null,Re.value="";try{const n=await fetch("/api/strategies/"+$.value+"/sweep",{method:"POST",headers:Q(),body:JSON.stringify({param_grid:_})}).then(function(B){return B.json()});n&&Array.isArray(n.results)?(Ae.value=n.results,Re.value="完成 "+n.count+" 组"+(n.data_degraded?" (数据不可达, 结果降级)":""),Xe.value=n.param_stability||null):Re.value=n&&n.detail||"扫描失败"}catch(n){console.error("[sweep]",n),Re.value="扫描失败: "+n.message}finally{$e.value=!1}}async function Mt(){const _=++h;Ue.value=!0;try{const n=await G("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:$.value||"multi_factor",factor_key:We.value,params:R.value||{}})}).then(function(ie){return ie.json()}),B=n&&n.report?n.report.n1||{}:{};at.value=B}catch(n){console.error("[research] 因子IC分析失败:",n),alert("因子 IC 分析失败: "+n.message)}finally{_===h&&(Ue.value=!1)}}async function Tt(){const _=++h;yt.value=!0;try{const n=await G("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:$.value||"multi_factor",factor_key:We.value,params:R.value||{}})}).then(function(B){return B.json()});n&&n.layers?Rt.value=n:alert("分层回测: "+(n.message||"无数据"))}catch(n){console.error("[research] 分层回测失败:",n),alert("分层回测失败: "+n.message)}finally{_===h&&(yt.value=!1)}}const ft=a(null),zt=a(!1);async function Wt(){const _=++h;zt.value=!0,ft.value=null;try{const n=await G("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:$.value||"multi_factor",factor_key:We.value,params:R.value||{}})}).then(function(B){return B.json()});n&&n.detail?ft.value=n.detail:alert("因子详情: "+(n.message||"无数据"))}catch(n){console.error("[research] 因子详情失败:",n),alert("因子详情失败: "+n.message)}finally{_===h&&(zt.value=!1)}}const Qt=a([]),Ze=a(null),bt=a(null),Ut=a(null),ht=a(""),Gt=a(!1),qt=a(!1),Je=a(""),At=a(""),kt=a("");function Q(){const _=localStorage.getItem("quant_token")||"";return _?{Authorization:"Bearer "+_,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function he(){const _=++h;try{const n=await fetch("/api/strategies/variants",{headers:Q()}).then(function(B){return B.json()});if(_!==h)return;Qt.value=n&&n.data&&n.data.variants||[]}catch(n){console.error("[i3a] 加载 variants 失败:",n)}}async function tt(){if(!$.value){Je.value="请先在量化研究选择母本策略";return}qt.value=!0,Je.value="";try{const _=await fetch("/api/strategies/"+$.value+"/clone",{method:"POST",headers:Q(),body:JSON.stringify({name:(b.value||"").trim()||void 0,params:Object.assign({},R.value)})}).then(function(B){return B.json()});if(_&&_.detail){Je.value=String(_.detail);return}const n=_&&_.data;n&&n.sid&&(Ze.value=n.sid,Je.value="已复制为新策略: "+n.name,await he(),await lt(n.sid))}catch(_){console.error("[i3a] 复制失败:",_),Je.value="复制失败: "+_.message}finally{qt.value=!1}}async function _t(_){Ze.value=_,Je.value="",ht.value="",await lt(_)}async function lt(_){try{const n=await fetch("/api/strategies/"+_+"/selection-spec",{headers:Q()}).then(function(B){return B.json()});n&&n.data&&n.data.spec&&(bt.value=Object.assign({},n.data.spec),Ut.value=n.data.fields,At.value=(n.data.spec.industry_scope||[]).join(","),kt.value=(n.data.spec.market_cap_range||[]).join(","))}catch(n){console.error("[i3a] 加载 spec 失败:",n)}}async function It(){if(I.value=!0,!(!Ze.value||!bt.value))try{bt.value.industry_scope=At.value?At.value.split(/[,，]/).map(function(n){return n.trim()}).filter(Boolean):[],bt.value.market_cap_range=kt.value?kt.value.split(/[,，]/).map(Number).filter(function(n){return!isNaN(n)}):[];const _=await fetch("/api/strategies/"+Ze.value+"/selection-spec",{method:"PUT",headers:Q(),body:JSON.stringify({spec:bt.value})}).then(function(n){return n.json()});_&&_.data&&_.data.spec&&(bt.value=_.data.spec,Je.value="SelectionSpec 已保存")}catch(_){console.error("[i3a] 保存 spec 失败:",_),Je.value="保存失败"}}async function ea(){if(!Ze.value){Je.value="请先选择/创建微调策略";return}qt.value=!0,Je.value="";try{const _=await fetch("/api/strategies/"+Ze.value+"/run-once",{method:"POST",headers:Q(),body:"{}"}).then(function(n){return n.json()});Je.value=_&&_.detail?String(_.detail):"持仓已生成: "+(_&&_.data&&_.data.symbols||0)+" 只"}catch(_){console.error("[i3a] run-once 失败:",_),Je.value="生成持仓失败"}finally{qt.value=!1}}async function na(){if(!Ze.value){Je.value="请先选择/创建微调策略";return}bt.value||await lt(Ze.value),Gt.value=!0,Je.value="";try{const _=await fetch("/api/strategies/"+Ze.value+"/ai-trade-code",{method:"POST",headers:Q(),body:JSON.stringify({spec:bt.value})}).then(function(n){return n.json()});if(_&&_.detail){Je.value=String(_.detail);return}_&&_.data&&(ht.value=_.data.code||"",_.data.api_errors&&_.data.api_errors.length?Je.value="生成成功(含 API 校验告警 "+_.data.api_errors.length+" 条)":Je.value="AI 交易码已生成, 已通过矩阵内校验")}catch(_){console.error("[i3a] AI 交易码失败:",_),Je.value="AI 生成失败: "+_.message}finally{Gt.value=!1}}function oa(){if(ht.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(ht.value).then(function(){Je.value="代码已复制"});else{const _=document.createElement("textarea");_.value=ht.value,document.body.appendChild(_),_.select(),document.execCommand("copy"),document.body.removeChild(_),Je.value="代码已复制"}}const ta=a(""),$t=a(""),Kt=a([]),Nt=a(""),Yt=a(""),gt=a(""),v=a(null),X=a(!1),le=a(!1),De=a(!1);function Ve(){const _=localStorage.getItem("quant_token")||"";return _?{Authorization:"Bearer "+_,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function Qe(){const _=++h;try{const n=await fetch("/api/strategies/custom",{headers:Ve()}).then(function(B){return B.json()});if(_!==h)return;Kt.value=n&&n.data&&n.data.customs||[]}catch(n){console.error("[i3b] 加载自定义策略失败:",n)}}async function Oe(){if(!$t.value.trim()){gt.value="请描述策略思路";return}X.value=!0,gt.value="";try{const _=await fetch("/api/strategies/custom",{method:"POST",headers:Ve(),body:JSON.stringify({name:ta.value.trim()||"自定义策略",prompt:$t.value})}).then(function(n){return n.json()});if(_&&_.detail){gt.value=String(_.detail);return}_&&_.data&&(Yt.value=_.data.code||"",gt.value="AI 代写成功: "+_.data.sid+(_.data.api_errors&&_.data.api_errors.length?" (API 告警 "+_.data.api_errors.length+" 条)":" (校验通过)"),await Qe())}catch(_){console.error("[i3b] AI 代写失败:",_),gt.value="AI 代写失败: "+_.message}finally{X.value=!1}}async function rt(){if(Nt.value)try{const _=await fetch("/api/strategies/custom/"+Nt.value+"/code",{headers:Ve()}).then(function(n){return n.json()});_&&_.data&&(Yt.value=_.data.code||"",gt.value="")}catch(_){console.error("[i3b] 读取代码失败:",_)}}async function st(){if(!Nt.value){gt.value="请先选择自定义策略";return}le.value=!0,gt.value="";try{const _=await fetch("/api/strategies/custom/"+Nt.value+"/backtest",{method:"POST",headers:Ve(),body:"{}"}).then(function(n){return n.json()});if(_&&_.detail){gt.value=String(_.detail);return}_&&_.data&&(v.value=_.data,gt.value="回测完成")}catch(_){console.error("[i3b] 回测失败:",_),gt.value="回测失败: "+_.message}finally{le.value=!1}}async function ct(){if(!Nt.value){gt.value="请先选择自定义策略";return}De.value=!0,gt.value="";try{const _=await fetch("/api/strategies/custom/"+Nt.value+"/ai-optimize",{method:"POST",headers:Ve(),body:JSON.stringify({backtest:v.value})}).then(function(n){return n.json()});if(_&&_.detail){gt.value=String(_.detail);return}_&&_.data&&(Yt.value=_.data.code||"",gt.value="AI 优化完成"+(_.data.api_errors&&_.data.api_errors.length?" (API 告警 "+_.data.api_errors.length+" 条)":" (校验通过)"))}catch(_){console.error("[i3b] AI 优化失败:",_),gt.value="AI 优化失败: "+_.message}finally{De.value=!1}}function Ot(){if(Yt.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(Yt.value).then(function(){gt.value="代码已复制"});else{const _=document.createElement("textarea");_.value=Yt.value,document.body.appendChild(_),_.select(),document.execCommand("copy"),document.body.removeChild(_),gt.value="代码已复制"}}const Dt=Vue.ref([]),N=Vue.ref(!1),ge=Vue.ref(!1),Le=Vue.ref(30);async function Ee(){const _=++h;N.value=!0,ge.value=!1;try{const n=window.__quantModules&&window.__quantModules.core||{},B=typeof n.authHeaders=="function"?n.authHeaders():{},ie=await fetch("/api/backtest/history?days="+Le.value,{headers:B}).then(function(Ce){return Ce.json()});if(_!==h)return;Dt.value=ie&&ie.data||[]}catch(n){console.error("[backtest] 回测历史加载失败:",n),ge.value=!0}finally{_===h&&(N.value=!1)}}const ze=Vue.ref([]),He=Vue.ref(!1),mt=Vue.ref(!1),xt=Vue.ref(""),it=Vue.ref([]),Jt=Vue.ref(""),ya=Vue.ref([]),ba=Vue.ref(!1),ra=Vue.ref(!1),Pa={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function da(_){return Pa[_]||_||"—"}function Ra(_){u&&u.navigateTo&&u.navigateTo("shortterm",_)}function ua(){u.currentSubPage.value="research-history",qa()}async function qa(){const _=++h;He.value=!0,mt.value=!1;try{const n=window.__quantModules&&window.__quantModules.core||{},B=typeof n.authHeaders=="function"?n.authHeaders():{},ie=xt.value?"?type="+encodeURIComponent(xt.value):"",Ce=await fetch("/api/strategies/research-history"+ie,{headers:B}).then(function(Me){return Me.json()});if(_!==h)return;ze.value=Ce&&Ce.items||[]}catch(n){console.error("[research-history] 加载失败:",n),mt.value=!0}finally{_===h&&(He.value=!1)}}async function Ft(){const _=++h;ra.value=!0;try{const n=window.__quantModules&&window.__quantModules.core||{},B=typeof n.authHeaders=="function"?n.authHeaders():{},ie=xt.value?"?type="+encodeURIComponent(xt.value):"",Ce=await fetch("/api/strategies/research-history/export"+ie,{headers:B});if(!Ce.ok)throw new Error("HTTP "+Ce.status);const Me=await Ce.blob(),pt=URL.createObjectURL(Me),Ge=document.createElement("a");Ge.href=pt,Ge.download="research_history.csv",document.body.appendChild(Ge),Ge.click(),document.body.removeChild(Ge),URL.revokeObjectURL(pt)}catch(n){console.error("[research-history] 导出失败:",n)}finally{_===h&&(ra.value=!1)}}function wa(_){const n=it.value.indexOf(_);n>=0?it.value.splice(n,1):it.value.length<10&&it.value.push(_)}function Ea(_){Jt.value=Jt.value===_?"":_}async function za(){const _=++h,n=it.value;if(!(n.length<2)){ba.value=!0;try{const B=window.__quantModules&&window.__quantModules.core||{},ie=typeof B.authHeaders=="function"?B.authHeaders():{},Ce=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},ie),body:JSON.stringify({ids:n})}).then(function(Me){return Me.json()});ya.value=Ce&&Ce.items||[]}catch(B){console.error("[research-history] 对比失败:",B)}finally{_===h&&(ba.value=!1)}}}async function ka(_){try{const n=window.__quantModules&&window.__quantModules.core||{},B=typeof n.authHeaders=="function"?n.authHeaders():{},ie=await fetch("/api/strategies/research-history/"+_,{method:"DELETE",headers:B}).then(function(Ce){return Ce.json()});if(ie&&ie.deleted){ze.value=ze.value.filter(function(Me){return Me.id!==_});const Ce=it.value.indexOf(_);Ce>=0&&it.value.splice(Ce,1)}}catch(n){console.error("[research-history] 删除失败:",n)}}return{...u,strategyManageMode:d,openStrategyManage:k,btHistory:Dt,btHistoryLoading:N,btHistoryError:ge,btHistoryDays:Le,loadBtHistory:Ee,researchHistory:ze,researchHistoryLoading:He,researchHistoryError:mt,researchHistoryType:xt,researchHistorySelected:it,researchDetailId:Jt,researchCompareRows:ya,researchCompareLoading:ba,researchTypeLabel:da,goShortterm:Ra,openResearchHistory:ua,loadResearchHistory:qa,researchExportLoading:ra,exportResearchHistory:Ft,toggleResearchSelect:wa,toggleResearchDetail:Ea,runResearchCompare:za,deleteResearchHistory:ka,marketReviews:l,marketReviewLoading:C,marketReviewError:x,selectedReviewDate:D,marketReviewDetail:S,marketReviewDetailLoading:P,marketReviewDetailError:F,loadMarketReviews:q,openMarketReview:r,toggleMarketReviewDate:i,backToMarketReviewList:O,loadMarketReviewDetail:K,marketReviewChgClass:s,marketReviewChgText:J,marketReviewSrcEntries:o,fmtPct:m,fmtEmotion:H,strategies:y,strategiesLoading:L,strategiesError:z,strategiesErrorText:ee,strategiesWarn:Y,activeStrategyId:$,activeStrategy:T,paramValues:R,strategyRunning:j,ptradeCode:w,strategyRuns:E,savingProfile:f,variantSaving:I,loadStrategies:re,onStrategyChange:fe,runActiveStrategy:be,exportActivePtradeCode:Ne,copyPtradeCode:Ie,profiles:oe,profileSelect:U,profileName:b,loadProfiles:Te,saveProfile:Z,applyProfile:de,deleteProfile:me,govEnabled:c,govSchedule:p,govUniverse:W,govRunning:ue,lastHoldings:te,loadGov:pe,updateGov:ye,runOnceActive:ae,openLastHoldings:xe,cloneStrategy:Pe,govShowCalendar:M,factorKey:We,factorIcLoading:Ue,factorLayerLoading:yt,factorIcReport:at,factorLayerResult:Rt,factorOptions:Se,runFactorIc:Mt,runFactorLayer:Tt,factorDetail:ft,factorDetailLoading:zt,runFactorDetail:Wt,variants:Qt,variantSelected:Ze,variantSpec:bt,specFields:Ut,aiCode:ht,aiCodeLoading:Gt,variantBusy:qt,variantMsg:Je,loadVariants:he,cloneNewStrategy:tt,selectVariant:_t,loadVariantSpec:lt,saveVariantSpec:It,runVariantOnce:ea,genVariantAiCode:na,copyVariantCode:oa,customName:ta,customPrompt:$t,customs:Kt,customSelected:Nt,customCode:Yt,customMsg:gt,customBtResult:v,customGenLoading:X,customBtLoading:le,customOptLoading:De,loadCustoms:Qe,genCustomCode:Oe,loadCustomCode:rt,runCustomBacktest:st,runCustomOptimize:ct,copyCustomCode:Ot,sweepGrid:_e,sweepResult:Ae,sweepMessage:Re,sweepLoading:$e,sweepStability:Xe,runSweep:et}}}})();(function(){const{inject:a,ref:t,onMounted:g,computed:e,nextTick:u}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
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
                </div>`,setup(){const f=a("qcState");if(!f)return{};const I=f.currentPage,h=f.currentSubPage,d=t(""),k=t(null),l=t(!1),C=t(!1),x=t("数据加载失败"),D=t("请检查服务后重试"),S=t(null),P=t(null),F=t(!1),q=t(!1),r=t("数据加载失败"),i=t("请检查服务后重试"),m=t(null),H=t(1),O=50,K=e(function(){const N=P.value||[];if(N.length<=200)return N;const ge=(H.value-1)*O;return N.slice(ge,ge+O)}),s=t(null),J=t(!1),o=t(!1),y=t("数据加载失败"),L=t("请检查服务后重试"),z=t([]),ee=t(!1);async function Y(){ee.value=!0;try{const N=await Pe("/api/shortterm/dates/summary",!1);N&&N.success&&(z.value=N.dates||[])}catch{z.value=[]}finally{ee.value=!1}}function $(N){N!==d.value&&(d.value=N,lt(!0))}const R=t("行业资金流"),j=t("今日"),A=t(""),w=t(null),E=t(1),oe=t(!1),U=t(!1),b=t("数据加载失败"),c=t("请检查服务后重试"),M=t(""),p=t(null),W=t(!1),ue=t(null),te=t(!1),T=t(!1),G=t(""),re=t(""),fe=t(!1);function Te(){const N=localStorage.getItem("quant_token")||"";return N?{Authorization:"Bearer "+N,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const Z={},de=[],me=50,pe=60*1e3;let ye=0,ae=0,xe=0;function Pe(N,ge){const Le=Date.now(),Ee=Z[N];return!ge&&Ee&&Le-Ee.ts<pe?Promise.resolve(Ee.data):fetch(N,{headers:Te()}).then(function(ze){return ze.json()}).then(function(ze){if(Z[N]||de.push(N),Z[N]={ts:Date.now(),data:ze},de.length>me){const He=de.shift();delete Z[He]}return ze})}async function ne(N){const ge=++ye;l.value=!0,C.value=!1;try{const Le="/api/shortterm/pools"+(d.value?"?date="+d.value:""),Ee=await Pe(Le,N);if(ge!==ye)return;Ee&&Ee.success?(k.value=Ee,u(he)):Ee&&Ee.detail?(C.value=!0,x.value=String(Ee.detail),D.value="请先登录后再查看"):(C.value=!0,x.value="数据加载失败",D.value="请检查服务后重试")}catch{if(ge!==ye)return;C.value=!0,x.value="数据加载失败",D.value="请检查服务后重试"}finally{ge===ye&&(l.value=!1)}}async function se(N){const ge=++ye;F.value=!0,q.value=!1;try{const Le="/api/shortterm/lhb"+(d.value?"?date="+d.value:""),Ee=await Pe(Le,N);if(ge!==ye)return;Ee&&Ee.success?(P.value=Array.isArray(Ee.rows)?Ee.rows:null,m.value=Ee.available===!1&&Ee.reason||null,H.value=1):Ee&&Ee.detail?(q.value=!0,r.value=String(Ee.detail),i.value="请先登录后再查看"):(q.value=!0,r.value="数据加载失败",i.value="请检查服务后重试")}catch{if(ge!==ye)return;q.value=!0,r.value="数据加载失败",i.value="请检查服务后重试"}finally{ge===ye&&(F.value=!1)}}const be=e(function(){const N=k.value&&k.value.ladder&&k.value.ladder.tiers;return!N||!Object.keys(N).length?"—":Object.keys(N).sort(function(ge,Le){return ge-Le}).map(function(ge){return ge+"板:"+N[ge]}).join(" ")}),Ne=e(function(){const N=k.value&&k.value.zt||[];return S.value?N.filter(function(ge){return ge.boards===S.value}):N});function Ie(){S.value=null}const We=e(function(){const N=s.value&&s.value.emotion&&s.value.emotion.money_effect;return!N||!N.available?"—":N.source==="settled"?"定稿记录":N.source==="realtime"?N.partial?"实时(样本不全)":"实时":"—"}),Ue=e(function(){const N=s.value&&s.value.emotion&&s.value.emotion.promotion&&s.value.emotion.promotion.tiers&&s.value.emotion.promotion.tiers["1进2"];return N?N.rate:null}),yt=e(function(){const N=s.value&&s.value.emotion&&s.value.emotion.sentiment_cycle;return N&&N.available&&N.current_score!=null?N.current_score.toFixed(2):"—"}),at=e(function(){const N=s.value&&s.value.emotion&&s.value.emotion.sentiment_cycle;return!N||!N.available?"—":(N.trend||"—")+(N.day_n!=null?" · 距低谷"+N.day_n+"天":"")});e(function(){const N=s.value&&s.value.emotion;if(!N)return"";const ge=[];for(const Le of["money_effect","promotion","consec_premium","sentiment_cycle"]){const Ee=N[Le];Ee&&Ee.available===!1&&Ee.reason&&ge.push(String(Ee.reason).replace(/^[[^]]*]s*/,""))}return ge.join("；")}),e(function(){const N=s.value&&s.value.facts;if(!N)return"";const ge=[];for(const Le of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const Ee=N[Le];Ee&&Ee.available===!1&&Ee.reason&&ge.push(String(Ee.reason).replace(/^[[^]]*]s*/,""))}return ge.join("；")});function Rt(N){return N==null||isNaN(N)?"—":(N*100).toFixed(0)+"%"}function Se(N,ge){return N==null?"—":(typeof N=="number"?Math.round(N*100)/100:N)+(ge||"")}function _e(N){return"tag-chip mr-4"}function Ae(N){return N==null?"":N>0?"is-rise":N<0?"is-fall":""}function Re(N){return N==="机构"?"is-institution":N==="游资"?"is-hotmoney":N==="主力"?"is-main":""}const $e=e(function(){const N=s.value&&s.value.session_status;if(!N)return"—";const ge=s.value.date;return ge===N.latest_session&&N.settled?"已收盘":ge===N.today&&N.is_trade_day&&!N.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),Xe=e(function(){const N=s.value&&s.value.session_status;if(!N)return"";const ge=s.value.date;return ge===N.latest_session&&N.settled?"is-institution":ge===N.today&&N.is_trade_day&&!N.settled?"is-main":""});function et(N){N&&N.ts_code&&f&&f.showStockDetail&&f.showStockDetail(N.ts_code)}const Mt=e(function(){return(P.value||[]).filter(function(N){return(N.tags||[]).indexOf("机构")>=0}).reduce(function(N,ge){return N+(ge.net_buy||0)},0)}),Tt=e(function(){return(P.value||[]).filter(function(N){return(N.tags||[]).indexOf("游资")>=0}).length}),ft=e(function(){const N=(w.value||[]).filter(function(ge){return ge.main_net_inflow!=null});return N.length?N.reduce(function(ge,Le){return ge.main_net_inflow>=Le.main_net_inflow?ge:Le}):null}),zt=e(function(){const N=ft.value;return N?N.name:"—"}),Wt=e(function(){const N=ft.value;return N?N.main_net_inflow:null}),Qt=e(function(){return M.value||"东财"}),Ze=e(function(){const N=(A.value||"").trim(),ge=w.value||[];return N?ge.filter(function(Le){return Le.name&&String(Le.name).indexOf(N)>=0}):ge});function bt(N){A.value=N||"",f&&f.currentSubPage&&(f.currentSubPage.value="sector")}const Ut=e(function(){const N=Ze.value;if(N.length<=200)return N;const ge=(E.value-1)*O;return N.slice(ge,ge+O)}),ht=["09:25","09:35","10:00","11:30","14:00","15:00"],Gt=e(function(){const N={};return(ue.value||[]).forEach(function(ge){N[ge.slot]=!0}),N});function qt(N){return Gt.value[N]?"is-done":N===Je.value?"is-current":"is-empty"}const Je=e(function(){const N=new Date,ge=(N.getHours()<10?"0":"")+N.getHours(),Le=(N.getMinutes()<10?"0":"")+N.getMinutes(),Ee=ge+":"+Le;for(var ze=0;ze<ht.length;ze++)if(Ee===ht[ze])return ht[ze];for(var He=0;He<ht.length-1;He++){var mt=ht[He],xt=new Date;xt.setHours(Number(mt.split(":")[0]),Number(mt.split(":")[1]),0,0);var it=new Date(xt.getTime()+8*6e4);if(N>=xt&&N<=it)return mt}return""}),At=e(function(){const N=new Date,ge=Je.value;if(ge)return"当前处于快照窗口 "+ge+" (前后 8 分钟) — 可采集";const Le=N.getHours(),Ee=N.getMinutes();let ze="";for(let He=0;He<ht.length;He++){const mt=ht[He].split(":");if(Number(mt[0])>Le||Number(mt[0])===Le&&Number(mt[1])>Ee){ze=ht[He];break}}return ze?"下一快照时点 "+ze+" — 非窗口期不可采集":"今日快照时点已全部结束"}),kt=t(""),Q=t("info");function he(){const N=k.value&&k.value.ladder&&k.value.ladder.tiers;if(!N||!Object.keys(N).length)return;const ge=window.__quantModules&&window.__quantModules.charts;if(!ge||!ge.renderSimpleChartTo)return;const Le=S.value,Ee=ge.renderSimpleChartTo("shorttermLadderChart",function(){const ze=Object.keys(N).sort(function(He,mt){return Number(He)-Number(mt)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:ze.map(function(He){return He+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(He){return Le&&Number(ze[He.dataIndex])===Le?"var(--color-accent)":"var(--chart-split)"}},data:ze.map(function(He){return N[He]})}]}},{key:"shortterm-ladder"});Ee&&Ee.off&&(Ee.off("click"),Ee.on("click",function(ze){if(!ze||!ze.name)return;const He=parseInt(ze.name,10);isNaN(He)||(S.value=S.value===He?null:He)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(he);function tt(N){if(N==null)return"—";const ge=Math.abs(N);return ge>=1e8?(N/1e8).toFixed(2)+"亿":ge>=1e4?(N/1e4).toFixed(0)+"万":N.toFixed(0)}function _t(N){return N==null?"—":(N>=0?"+":"")+N.toFixed(2)+"%"}async function lt(N){const ge=++ae;J.value=!0,o.value=!1;try{const Le="/api/shortterm/overview"+(d.value?"?date="+d.value:""),Ee=await Pe(Le,N);if(ge!==ae)return;Ee&&Ee.success?s.value=Ee:Ee&&Ee.detail?(o.value=!0,y.value=String(Ee.detail),L.value="请先登录后再查看"):(o.value=!0,y.value="数据加载失败",L.value="请检查服务后重试")}catch{if(ge!==ae)return;o.value=!0,y.value="数据加载失败",L.value="请检查服务后重试"}finally{ge===ae&&(J.value=!1)}}async function It(N){const ge=++ye;oe.value=!0,U.value=!1;try{const Le="/api/shortterm/sector-flow?indicator="+encodeURIComponent(j.value)+"&sector_type="+encodeURIComponent(R.value),Ee=await Pe(Le,N);if(ge!==ye)return;Ee&&Ee.success&&Ee.available?(w.value=Ee.rows||[],M.value=Ee.source||(Ee.note?"同花顺":"东财"),E.value=1):Ee&&Ee.reason?(U.value=!0,b.value="数据加载失败",c.value=String(Ee.reason).replace(/^\[[^\]]*\]\s*/,"")):Ee&&Ee.detail?(U.value=!0,b.value=String(Ee.detail),c.value="请先登录后再查看"):(U.value=!0,b.value="数据加载失败",c.value="请检查服务后重试")}catch{if(ge!==ye)return;U.value=!0,b.value="数据加载失败",c.value="请检查服务后重试"}finally{ge===ye&&(oe.value=!1)}}async function ea(N){const ge=++xe;try{const Le="/api/shortterm/review"+(d.value?"?date="+d.value:""),Ee=await Pe(Le,N);if(ge!==xe)return;Ee&&Ee.success&&(p.value=Ee.review||null)}catch{}}async function na(){W.value=!0;try{const N="/api/shortterm/review"+(d.value?"?date="+d.value:""),ge=await fetch(N,{method:"POST",headers:Te()}).then(function(Le){return Le.json()});ge&&ge.success&&(p.value=ge,Z[N]={ts:Date.now(),data:ge})}catch{}finally{W.value=!1}}async function oa(){const N=G.value.trim();if(N){fe.value=!0,re.value="";try{const Le=await fetch("/api/shortterm/review/chat",{method:"POST",headers:Te(),body:JSON.stringify({date:overviewDate.value,question:N})}).then(function(Ee){return Ee.json()});re.value=Le.answer||"[无回复]"}catch{re.value="[发送失败]"}finally{fe.value=!1}}}async function ta(N){const ge=++ye;te.value=!0;try{const Le="/api/shortterm/intraday"+(d.value?"?date="+d.value:""),Ee=await Pe(Le,N);if(ge!==ye)return;Ee&&Ee.success&&(ue.value=Ee.snapshots||[])}catch{}finally{ge===ye&&(te.value=!1)}}async function $t(){T.value=!0;try{const N="/api/shortterm/intraday/snapshot"+(d.value?"?date="+d.value:""),ge=await fetch(N,{method:"POST",headers:Te()}).then(function(Le){return Le.json()});ge&&ge.success?(ge.accepted?(kt.value="已采集 "+ge.slot+" 快照"+(ge.pools_available&&!ge.pools_available.zt?" (池源部分不可用)":""),Q.value="ok"):(kt.value="⏱ "+(ge.reason||"非快照时点"),Q.value="warn"),ta()):kt.value="采集失败, 请稍后重试"}catch{kt.value="采集失败, 请稍后重试"}finally{T.value=!1}}function Kt(){return Pe("/api/shortterm/latest-session",!1).then(function(N){N&&N.date&&(d.value||(d.value=N.date))}).catch(function(){})}function Nt(){const N=h.value;N==="ztpool"?ne():N==="lhb"?se():N==="overview"?(lt(),ea()):N==="sector"?It():N==="intraday"&&ta()}function Yt(){const N=d.value?"?date="+d.value:"";["/api/shortterm/overview"+N,"/api/shortterm/pools"+N,"/api/shortterm/lhb"+N].forEach(function(Le){Pe(Le,!1).catch(function(){})})}function gt(){const N=h.value;N==="ztpool"?ne(!0):N==="lhb"?se(!0):N==="overview"?(lt(!0),ea(!0)):N==="sector"?It(!0):N==="intraday"&&ta(!0)}g(function(){Kt(),Nt(),Yt(),st(),Y()}),Vue.watch(function(){return h.value},function(N){Nt(),N==="overview"&&st()});const v=window.QuantOnboarding,X=t(!1),le=t(v?v.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),De=e(function(){return v&&v.shorttermTourSteps()[le.value.stepIndex]||{key:"",title:"",desc:""}}),Ve=e(function(){return v?v.shorttermTourProgress(le.value):{done:0,total:3,pct:0}}),Qe=e(function(){return le.value.stepIndex>=2});function Oe(){if(v){var N=null;try{N=localStorage.getItem("qc_shortterm_tour")}catch{}if(N){var ge=v.parseState(N);ge&&(le.value=ge)}}}function rt(){if(v){var N=JSON.stringify(le.value);try{localStorage.setItem("qc_shortterm_tour",N)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:N}})}).catch(function(){})}catch{}}}function st(){window.__quantGuideModalsEnabled===!0&&v&&h.value==="overview"&&(Oe(),v.shorttermTourShouldShow(le.value)&&(X.value=!0))}function ct(){le.value=v.shorttermTourNext(le.value),rt()}function Ot(){le.value=v.shorttermTourComplete(le.value),rt(),X.value=!1}function Dt(){le.value=v.shorttermTourDismiss(le.value),rt(),X.value=!1}return{currentPage:I,currentSubPage:h,shortDate:d,pools:k,poolLoading:l,poolError:C,ztBoardFilter:S,filteredZt:Ne,clearBoardFilter:Ie,lhbRows:P,lhbLoading:F,lhbError:q,lhbReason:m,lhbPageRows:K,lhbPage:H,overview:s,overviewLoading:J,overviewError:o,dateList:z,dateListLoading:ee,loadDateList:Y,pickDate:$,sectorType:R,sectorIndicator:j,sectorKeyword:A,sectorRows:w,filteredSectorRows:Ze,sectorPageRows:Ut,sectorPage:E,sectorLoading:oe,sectorError:U,sectorFlowSource:M,PAGE_SIZE:O,gotoSector:bt,review:p,reviewRunning:W,intradaySnapshots:ue,intradayLoading:te,intradayCollecting:T,intradaySlots:ht,intradayMsg:kt,slotClass:qt,intradayStatus:At,chatQuestion:G,chatAnswer:re,chatLoading:fe,loadPools:ne,loadLhb:se,loadOverview:lt,loadSectorFlow:It,loadReview:ea,runReview:na,sendChat:oa,loadIntraday:ta,collectSnapshot:$t,refreshCurrent:gt,ladderText:be,fmtAmount:tt,fmtPct:_t,riseFall:Ae,tagClass:Re,openStock:et,lhbInstitutionNetBuy:Mt,lhbHotMoneyCount:Tt,sectorTopName:zt,sectorTopInflow:Wt,sectorSource:Qt,moneySource:We,promotion1to2:Ue,cycleScore:yt,cycleTrend:at,pct:Rt,fmtCond:Se,verdictClass:_e,sessionStatusText:$e,sessionStatusClass:Xe,shorttermTourVisible:X,shorttermTourState:le,shorttermTourStep:De,shorttermTourProg:Ve,shorttermTourIsLast:Qe,shorttermTourNext:ct,shorttermTourFinish:Ot,shorttermTourSkip:Dt}}}})();(function(a,t){typeof je=="object"&&je.exports?je.exports=t():a.QuantVirtualList=t()})(typeof self<"u"?self:void 0,function(){var a=8;function t(h,d,k,l,C){var x=k>0?k:1,D=typeof C=="number"&&C>=0?C:a,S=Math.max(0,l),P=Math.max(0,h),F=Math.max(0,d),q=Math.max(0,Math.floor(P/x)-D),r=Math.min(S,Math.ceil((P+F)/x)+D);return{startIndex:q,endIndex:r}}function g(h,d){return Math.max(0,h||0)*(d>0?d:0)}function e(h,d,k,l,C){var x=h||[],D=t(d,k,l,x.length,C),S=x.slice(D.startIndex,D.endIndex);return{visible:S,startIndex:D.startIndex,endIndex:D.endIndex,offsetY:D.startIndex*(l>0?l:1),totalHeight:g(x.length,l)}}function u(h,d){if(h){if(h.code!=null)return h.code;if(h.id!=null)return h.id;if(h.ts_code!=null)return h.ts_code}return d}function f(h,d,k){var l=h||[];if(!l.length)return d>0?d:1;for(var C=Math.min(k||50,l.length),x=0,D=0,S=0;S<C;S++){var P=l[S]&&l[S].rowHeight;typeof P=="number"&&P>0&&(x+=P,D++)}return D?x/D:d>0?d:1}function I(h,d,k,l,C){var x=t(h,d,k,l,C),D=Math.max(0,l);return D?(x.endIndex-x.startIndex)/D:0}return{DEFAULT_BUFFER:a,computeVisibleRange:t,computeTotalHeight:g,sliceVisible:e,getRowKey:u,estimateDynamicRowHeight:f,renderedRatio:I}});(function(){const{ref:a,computed:t,onMounted:g,onBeforeUnmount:e}=Vue,u=window.QuantVirtualList||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.VirtualList={name:"qc-virtual-list",props:{items:{type:Array,default:()=>[]},rowHeight:{type:Number,default:56},buffer:{type:Number,default:u.DEFAULT_BUFFER||8}},template:`
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,setup(f){const I=a(null),h=a(0),d=a(400),k=t(()=>(u.computeVisibleRange||function(i,m,H,O,K){const s=H>0?H:1,J=K>=0?K:8,o=Math.max(0,O);return{startIndex:Math.max(0,Math.floor(i/s)-J),endIndex:Math.min(o,Math.ceil((i+m)/s)+J)}})(h.value,d.value,f.rowHeight,f.items.length,f.buffer)),l=t(()=>f.items.length*f.rowHeight),C=t(()=>k.value.startIndex),x=t(()=>k.value.endIndex),D=t(()=>f.items.slice(C.value,x.value));function S(){I.value&&(h.value=I.value.scrollTop)}function P(){I.value&&(d.value=I.value.clientHeight||400)}function F(r,i){return u.getRowKey?u.getRowKey(r,i):r&&r.code!=null?r.code:r&&r.id!=null?r.id:i}let q=null;return g(()=>{P(),I.value&&typeof ResizeObserver<"u"&&(q=new ResizeObserver(()=>P()),q.observe(I.value))}),e(()=>{q&&q.disconnect()}),{scrollEl:I,totalHeight:l,startIndex:C,endIndex:x,visibleItems:D,onScroll:S,keyOf:F}}}})();(function(a,t){typeof je=="object"&&je.exports?je.exports=t():(a.__quantModules=a.__quantModules||{},a.__quantModules.gestures=t())})(typeof self<"u"?self:void 0,function(){var a=40,t=1.2,g=60,e=500,u=10,f=88,I=350;function h(i,m,H,O,K){K=K||{};var s=typeof K.threshold=="number"?K.threshold:a,J=typeof K.bias=="number"?K.bias:t,o=H-i,y=O-m;return Math.abs(o)<s||Math.abs(o)<Math.abs(y)*J?"none":o<0?"left":"right"}function d(i,m,H){H=H||{};var O=typeof H.threshold=="number"?H.threshold:g;return m-i>=O}function k(i,m){m=m||{};var H=typeof m.threshold=="number"?m.threshold:e;return i>=H}var l=!1;function C(i,m){return i&&typeof i.closest=="function"?i.closest(m):null}function x(i){if(!i)return"";var m=i.querySelector(".consensus-code, .watchlist-code, [data-copy-code]");if(m){var H=m.getAttribute&&m.getAttribute("data-copy-code");if(H)return H.trim();var O=(m.textContent||"").match(/\d{6}(?:\.(?:SH|SZ))?/);if(O)return O[0]}var K=i.getAttribute&&i.getAttribute("data-copy-code");return K?K.trim():""}function D(i){return navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(i).then(function(){return!0}).catch(function(){return S(i)}):Promise.resolve(S(i))}function S(i){try{var m=document.createElement("textarea");return m.value=i,m.style.position="fixed",m.style.opacity="0",document.body.appendChild(m),m.select(),document.execCommand("copy"),document.body.removeChild(m),!0}catch{return!1}}function P(i){typeof ElementPlus<"u"&&ElementPlus.ElMessage&&ElementPlus.ElMessage.success(i)}function F(){if(navigator.vibrate)try{navigator.vibrate(15)}catch{}}function q(){var i=null,m=null,H=null;function O(){m&&(m.timer&&clearTimeout(m.timer),m=null)}function K(ee){H={el:ee,until:Date.now()+I}}function s(ee){document.querySelectorAll(".swipe-reveal.swipe-open").forEach(function(Y){Y!==ee&&Y.classList.remove("swipe-open")}),i&&i.el!==ee&&(i=null)}function J(ee){var Y=ee.touches&&ee.touches[0];if(Y){var $=C(ee.target,".swipe-reveal");$&&(i={el:$,x:Y.clientX,y:Y.clientY,moved:!1},ee.stopPropagation());var R=C(ee.target,".consensus-item, .watchlist-item, .market-review-row, [data-copy-code]");R&&(O(),m={el:R,x:Y.clientX,y:Y.clientY,timer:setTimeout(function(){var j=x(R);m=null,j&&(K(R),D(j).then(function(){F(),P("已复制代码 "+j)}))},e)})}}function o(ee){if(i){var Y=ee.touches&&ee.touches[0];if(Y){var $=Y.clientX-i.x,R=Y.clientY-i.y;if(Math.abs($)>8&&Math.abs($)>Math.abs(R)*1.2){ee.cancelable&&ee.preventDefault(),i.moved=!0;var j=i.el.querySelector(".swipe-reveal-main")||i.el,A=Math.max(-f,Math.min(0,$));j.style.transition="none",j.style.transform="translateX("+A+"px)",ee.stopPropagation()}if(m){var w=Y.clientX-m.x,E=Y.clientY-m.y;(Math.abs(w)>u||Math.abs(E)>u)&&O()}}}}function y(ee){if(O(),!!i){var Y=i.el,$=ee.changedTouches&&ee.changedTouches[0],R=i.x,j=i.y,A="none";$&&(A=h(R,j,$.clientX,$.clientY));var w=i.moved;i=null;var E=Y.querySelector(".swipe-reveal-main")||Y;E.style.transform="",E.style.transition="",A==="left"?(s(Y),Y.classList.add("swipe-open"),K(Y)):(A==="right"||w)&&Y.classList.remove("swipe-open"),ee.stopPropagation()}}function L(){O(),i=null}function z(ee){if(H&&Date.now()<H.until){var Y=H.el.contains(ee.target)||ee.target===H.el,$=ee.target.closest&&ee.target.closest(".swipe-reveal-actions");Y&&!$&&(ee.preventDefault(),ee.stopPropagation(),H=null)}}document.addEventListener("touchstart",J,!0),document.addEventListener("touchmove",o,!0),document.addEventListener("touchend",y,!0),document.addEventListener("touchcancel",L,!0),document.addEventListener("click",z,!0)}function r(){l||typeof document>"u"||(l=!0,q())}return{judgeSwipe:h,judgePullToRefresh:d,judgeLongPress:k,SWIPE_THRESHOLD:a,SWIPE_DIRECTION_BIAS:t,PULL_THRESHOLD:g,LONG_PRESS_MS:e,LONG_PRESS_MOVE_SLOP:u,REVEAL_WIDTH:f,initGestures:r,_codeFromRow:x}});(function(){const a={empty:{icon:"inbox",title:"暂无数据",desc:"当前没有可展示的内容",tone:"neutral",retry:!1,skeleton:!1},loading:{icon:"",title:"加载中",desc:"",tone:"neutral",retry:!1,skeleton:!0},error:{icon:"alert-triangle",title:"加载失败",desc:"数据获取出错，请稍后重试",tone:"danger",retry:!0,skeleton:!1},offline:{icon:"wifi-off",title:"网络不可用",desc:"请检查网络连接后重试",tone:"danger",retry:!0,skeleton:!1}},t=Object.keys(a);function g(f){return a[f]||a.empty}function e(){const f=[];for(const I of t){const h=a[I];h.title||f.push(I+".title"),I!=="loading"&&!h.icon&&f.push(I+".icon"),typeof h.retry!="boolean"&&f.push(I+".retry"),typeof h.skeleton!="boolean"&&f.push(I+".skeleton")}return{ok:f.length===0,errors:f}}const u={VARIANTS:a,KEYS:t,resolve:g,validate:e};typeof window<"u"&&(window.QuantStatePanel=u),typeof je<"u"&&je.exports&&(je.exports=u)})();(function(){const{computed:a}=Vue,t=window.QuantStatePanel||{};window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StatePanel={name:"qc-state-panel",props:{type:{type:String,default:"empty"},title:{type:String,default:""},desc:{type:String,default:""},icon:{type:String,default:""}},emits:["retry"],template:`
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
    `,setup(g){const e=a(()=>typeof t.resolve=="function"?t.resolve(g.type):{}),u=a(()=>g.icon||e.value.icon||""),f=a(()=>g.title||e.value.title||""),I=a(()=>g.desc||e.value.desc||""),h=a(()=>!!e.value.retry),d=a(()=>/^[a-z][a-z0-9-]*$/.test(String(u.value||"")));return{icon:u,title:f,desc:I,retryable:h,isIconName:d}}}})();(function(a,t){typeof je=="object"&&je.exports?je.exports=t():a.QuantCommandPanel=t()})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){function a(i){return String(i||"").trim().toLowerCase()}function t(i,m){if(!i)return!0;const H=i.split(/\s+/).filter(Boolean);if(!H.length)return!0;const O=String(m||"").toLowerCase();return H.every(function(K){return O.indexOf(K)!==-1})}function g(){return{visible:!1,query:"",activeIndex:0}}function e(i,m){return m===void 0&&(m=!i.visible),i.visible=m,m&&(i.query="",i.activeIndex=0),i.visible}function u(i,m,H){const O=a(i);if(!m||!m.length)return[];const K=[];return m.forEach(function(s){const J=t(O,s.name)||t(O,s.key),o=(s.subPages||[]).filter(function(y){const L=H&&H[y]||y;return t(O,L)||t(O,y)});J&&K.push({type:"menu",menuKey:s.key,subPage:s.subPages&&s.subPages[0]||"",label:s.name,subLabel:"页面",icon:s.icon||"file-text"}),o.forEach(function(y){K.push({type:"menu",menuKey:s.key,subPage:y,label:H&&H[y]||y,subLabel:s.name,icon:s.icon||"file-text"})})}),K.slice(0,8)}function f(i,m){const H=a(i);return!m||!m.length?[]:m.filter(function(O){return!!(!H||t(H,O.label)||t(H,O.key)||O.keywords&&t(H,O.keywords))}).slice(0,8)}function I(i,m){const H=a(i);return!H||!m||!m.length?[]:m.filter(function(O){return t(H,O.code)||t(H,O.name)}).slice(0,8).map(function(O){return{type:"stock",code:O.code,name:O.name,label:O.name,subLabel:O.code,icon:"trending-up"}})}function h(i,m,H){const O=[],K=[];return H&&H.length&&(O.push({key:"stock",label:"股票",items:H}),K.push.apply(K,H)),i&&i.length&&(O.push({key:"menu",label:"菜单",items:i}),K.push.apply(K,i)),m&&m.length&&(O.push({key:"command",label:"指令",items:m}),K.push.apply(K,m)),{groups:O,flat:K}}function d(i,m,H){if(m<=0)return 0;const O=((i||0)+H)%m;return O<0?m-1:O}function k(i,m,H,O){const K=u(i,m,H).map(function(J){return{type:"menu",menuKey:J.menuKey,subPage:J.subPage,label:J.label,subLabel:J.subLabel,icon:J.icon,iconName:J.icon,value:J.icon+" "+J.label+" · "+J.subLabel}}),s=f(i,O||[]).map(function(J){return{type:"command",key:J.key,label:J.label,icon:J.icon,iconName:J.icon,subLabel:"指令",value:J.icon+" "+J.label}});return K.concat(s)}function l(i){return i?i.type==="menu"?{action:"menu",menuKey:i.menuKey,subPage:i.subPage}:i.type==="command"?{action:"command",key:i.key}:i.type==="sector"?{action:"sector",name:i.name}:i.type==="strategy"?{action:"strategy",id:i.id,name:i.name}:i.type==="stock"||i.code&&i.name?{action:"stock",code:i.code,name:i.name}:null:null}const C=[{key:"refresh",label:"刷新当前页数据",icon:"refresh",keywords:"reload refresh 刷新"},{key:"export",label:"导出当前 CSV",icon:"download",keywords:"csv export 导出"},{key:"batch",label:"批量 AI 评估",icon:"bot",keywords:"batch eval 批量 评估"},{key:"ai",label:"打开 AI 问股",icon:"message-circle",keywords:"chat ask 问股"},{key:"sidebar",label:"折叠/展开侧边栏",icon:"folder",keywords:"sidebar nav 侧边栏"},{key:"today",label:"今日一屏",icon:"calendar",keywords:"today 今日 一屏 看板"},{key:"add-portfolio",label:"加入组合",icon:"bar-chart-3",keywords:"portfolio 组合 加入 持仓"},{key:"open-system",label:"打开系统设置",icon:"cpu",keywords:"system 系统 设置 配置"},{key:"refresh-data-source",label:"刷新数据源",icon:"radio-tower",keywords:"datasource 数据源 刷新 tushare akshare"},{key:"open-shortterm",label:"打开短线复盘",icon:"zap",keywords:"shortterm 短线 复盘 涨停"},{key:"open-eval-history",label:"打开评估历史",icon:"history",keywords:"history 评估历史 历史 命中率"},{key:"open-research",label:"打开策略研究",icon:"flask-conical",keywords:"research 策略 研究 回测"},{key:"open-calendar",label:"打开量化日历",icon:"calendar-days",keywords:"calendar 日历 股票池"}];var x={ctrl:["ctrl","control","⌃"],alt:["alt","option","⌥"],shift:["shift","⇧"],meta:["meta","cmd","command","win","⌘","⊞"]};function D(i){if(!i||typeof i!="string")return null;var m=i.split("+").map(function(K){return K.trim()}).filter(Boolean);if(!m.length)return null;var H=m.pop().toLowerCase();if(!H)return null;var O={ctrl:!1,alt:!1,shift:!1,meta:!1};return m.forEach(function(K){var s=K.toLowerCase();x.ctrl.indexOf(s)!==-1?O.ctrl=!0:x.alt.indexOf(s)!==-1?O.alt=!0:x.shift.indexOf(s)!==-1?O.shift=!0:x.meta.indexOf(s)!==-1&&(O.meta=!0)}),{ctrl:O.ctrl,alt:O.alt,shift:O.shift,meta:O.meta,key:H}}function S(i,m){if(!i||!m)return!1;var H=String(m.key||m.code||"").toLowerCase();return i.key!==H?!1:i.ctrl===!!m.ctrlKey&&i.alt===!!m.altKey&&i.shift===!!m.shiftKey&&i.meta===!!m.metaKey}function P(i){if(!i)return"";var m=[];return i.ctrl&&m.push("Ctrl"),i.alt&&m.push("Alt"),i.shift&&m.push("Shift"),i.meta&&m.push("Meta"),m.push(i.key.toUpperCase()),m.join("+")}function F(){var i={};return{register:function(m){if(!m||!m.key)throw new Error("命令 key 必填");if(i[m.key])throw new Error("命令重复注册: "+m.key);return i[m.key]=Object.assign({},m),m.key},list:function(){return Object.keys(i).map(function(m){return i[m]})},get:function(m){return i[m]||null},remove:function(m){delete i[m]},has:function(m){return!!i[m]},count:function(){return Object.keys(i).length}}}function q(){var i={},m={};return{register:function(H,O,K){var s=D(H);if(!s)throw new Error("无效快捷键: "+H);var J=P(s);if(i[J])throw new Error("快捷键冲突: "+H);if(O!=null&&m[O]!==void 0)throw new Error("动作重复绑定: "+O);return i[J]={combo:H,action:O,description:K||"",parsed:s},m[O]=J,J},resolve:function(H){for(var O in i)if(S(i[O].parsed,H))return i[O].action;return null},list:function(){return Object.keys(i).map(function(H){return i[H]})},unregister:function(H){var O=P(D(H));i[O]&&(delete m[i[O].action],delete i[O])},count:function(){return Object.keys(i).length}}}function r(){var i=q();return i.register("Ctrl+K","toggle-palette","打开命令面板"),i.register("F5","refresh","刷新当前页"),i.register("Ctrl+B","toggle-sidebar","折叠/展开侧边栏"),i.register("Ctrl+J","open-ai","打开 AI 问股"),i.register("Ctrl+D","open-today","今日一屏"),i.register("Ctrl+E","batch-eval","批量 AI 评估"),i.register("Ctrl+G","add-portfolio","加入组合"),i.register("Ctrl+H","open-eval-history","打开评估历史"),i.register("Ctrl+Shift+S","open-shortterm","打开短线复盘"),i}return{normalize:a,createPaletteState:g,toggleVisible:e,searchMenus:u,searchCommands:f,filterStocksLocal:I,mergeResults:h,moveIndex:d,buildSearchSuggestions:k,dispatchSearchSelection:l,DEFAULT_COMMANDS:C,parseKeyCombo:D,matchShortcut:S,canonicalCombo:P,createCommandRegistry:F,createShortcutRegistry:q,createDefaultShortcuts:r}});(function(a){if(a&&!a.QuantCommandPanel)try{var t=typeof je<"u"&&je.exports?je.exports:null;t&&(a.QuantCommandPanel=t)}catch{}})(typeof window<"u"?window:typeof globalThis<"u"?globalThis:null);(function(a,t){var g=t();typeof je=="object"&&je.exports&&(je.exports=g),a.QuantOnboarding=g})(typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof self<"u"?self:void 0,function(){var a=[{key:"welcome",title:"欢迎使用量化日历",target:""},{key:"pool",title:"认识今日股票池",target:"strategies"},{key:"calendar",title:"日历视图",target:"calendar"},{key:"ai",title:"AI 评估",target:"ai"},{key:"finish",title:"完成",target:"research"}],t=a.length,g=[{key:"hard_metric",title:"看硬指标",target:"overview-metrics",desc:"先看涨停/连板/炸板/晋级率等硬指标, 把握当日情绪与强度"},{key:"ai_read",title:"读 AI 研判",target:"overview-ai",desc:"再看多视角 AI 复盘, 了解题材、龙头与潜在风险"},{key:"verify",title:"核验验证条件",target:"overview-verify",desc:"最后核验验证条件是否成立, 确认你的观察得到印证"}],e=g.length;function u(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function f(){return g.slice()}function I(y){return y<0?0:y>=e?e-1:y}function h(y){return{stepIndex:y.stepIndex,completed:!!y.completed,dismissed:!!y.dismissed,updatedAt:y.updatedAt||0}}function d(y){return h(Object.assign({},y,{stepIndex:I((y.stepIndex||0)+1),updatedAt:Date.now()}))}function k(y){return h(Object.assign({},y,{completed:!0,dismissed:!1,updatedAt:Date.now()}))}function l(y){return h(Object.assign({},y,{dismissed:!0,completed:!1,updatedAt:Date.now()}))}function C(y){var L=Math.min(y&&y.stepIndex||0,e);return{done:L,total:e,pct:Math.round(L/e*100)}}function x(y){return!!(y&&!y.completed&&!y.dismissed)}function D(){return{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}}function S(){return a.slice()}function P(){return t}function F(y){return y<0?0:y>=t?t-1:y}function q(y){return{stepIndex:y.stepIndex,completed:!!y.completed,dismissed:!!y.dismissed,updatedAt:y.updatedAt||0}}function r(y){return q(Object.assign({},y,{stepIndex:F((y.stepIndex||0)+1),updatedAt:Date.now()}))}function i(y){return q(Object.assign({},y,{stepIndex:F((y.stepIndex||0)-1),updatedAt:Date.now()}))}function m(y,L){return q(Object.assign({},y,{stepIndex:F(L),updatedAt:Date.now()}))}function H(y){return q(Object.assign({},y,{completed:!0,updatedAt:Date.now()}))}function O(y){return q(Object.assign({},y,{dismissed:!0,updatedAt:Date.now()}))}function K(y){return!!(y&&y.completed)}function s(y){var L=Math.min(y&&y.stepIndex||0,t);return{done:L,total:t,pct:Math.round(L/t*100)}}function J(y){var L=y||D();return JSON.stringify({stepIndex:L.stepIndex,completed:!!L.completed,dismissed:!!L.dismissed,updatedAt:L.updatedAt||0})}function o(y){var L=D();if(!y||typeof y!="string")return L;try{var z=JSON.parse(y);if(!z||typeof z!="object")return L;var ee=parseInt(z.stepIndex,10);return isNaN(ee)?L:{stepIndex:F(ee),completed:!!z.completed,dismissed:!!z.dismissed,updatedAt:z.updatedAt||0}}catch{return L}}return{ONBOARDING_STEPS:a,steps:S,stepCount:P,createOnboardingState:D,next:r,prev:i,jumpTo:m,complete:H,dismiss:O,isComplete:K,progress:s,persistState:J,parseState:o,SHORTTERM_TOUR_STEPS:g,shorttermTourSteps:f,createShorttermTourState:u,shorttermTourNext:d,shorttermTourComplete:k,shorttermTourDismiss:l,shorttermTourProgress:C,shorttermTourShouldShow:x}});(function(){if(typeof window>"u"||!window.Vue)return;const{ref:a,computed:t,onMounted:g}=Vue,e=window.QuantOnboarding;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.Onboarding={name:"qc-onboarding",template:`
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
    `,setup(){const u=a(!1),f=a(e.createOnboardingState()),I=t(function(){return e.steps()[f.value.stepIndex]}),h=t(function(){return e.progress(f.value)}),d=t(function(){return f.value.stepIndex>=e.stepCount()-1}),k=t(function(){return"onboarding.step."+I.value.key});function l(){const F=e.persistState(f.value);fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{onboarding_progress:F}})}).then(function(q){return q.json()}).catch(function(){try{localStorage.setItem("qc_onboarding_progress",F)}catch{}})}function C(){f.value=e.next(f.value)}function x(){f.value=e.prev(f.value)}function D(){f.value=e.complete(f.value),l(),u.value=!1}function S(){f.value=e.dismiss(f.value),l(),u.value=!1}function P(){fetch("/api/user_config/preferences").then(function(F){return F.json()}).then(function(F){const q=F&&F.preferences&&F.preferences.onboarding_progress;return q&&(f.value=e.parseState(q)),q}).catch(function(){return null}).then(function(F){if(!F)try{const q=localStorage.getItem("qc_onboarding_progress");q&&(f.value=e.parseState(q))}catch{}!e.isComplete(f.value)&&!f.value.dismissed&&(u.value=!0)})}return g(P),{visible:u,st:f,step:I,prog:h,isLast:d,stepKey:k,next:C,prev:x,finish:D,skip:S}}}})();(function(){typeof window>"u"||!window.Vue||(window.__quantComponents=window.__quantComponents||{},window.__quantComponents.EmptyState={name:"qc-empty",props:{icon:{type:String,default:"inbox"},title:{type:String,default:""},desc:{type:String,default:""},actionText:{type:String,default:""}},emits:["action"],template:`
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
    `,setup(){function a(t){try{const g=window.__quantModules&&window.__quantModules.i18n&&window.__quantModules.i18n.t;if(g)return g(t)||""}catch{}return t}return{t:a}}})})();(function(){const{ref:a,computed:t,watch:g,nextTick:e,inject:u,onMounted:f}=Vue,I=window.QuantCommandPanel;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.CommandPanel={name:"qc-command-panel",template:`
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
    `,setup(){const h=u("qcState");if(!h)return{};const d=a(""),k=t({get:()=>h.commandPaletteVisible.value,set:R=>{h.commandPaletteVisible.value=R}}),l=a(0),C=a([]),x=a(null),D=t(()=>{const R=(I.DEFAULT_COMMANDS||[]).map(function(A){return Object.assign({},A)});return Object.keys(h.themes.value||{}).forEach(function(A){const w=h.themes.value[A];R.push({key:"theme:"+A,label:"切换主题 · "+(w.name||A),icon:"palette",keywords:"theme 主题"})}),R});function S(R){return typeof R=="string"&&/^[a-z][a-z0-9-]*$/.test(R)}const P=t(()=>h.menus.value||[]);function F(){const R=window.__quantModules&&window.__quantModules.pinyin;if(!R)return[];const j=[];return(h.watchlist&&h.watchlist.value||[]).forEach(function(A){j.push({code:A.code,name:A.name})}),(h.aiHistory&&h.aiHistory.value||[]).forEach(function(A){A&&A.stock_code&&j.push({code:A.stock_code,name:A.stock_name||A.stock_code})}),j.push.apply(j,R.getExtraStocks()),R.buildStockIndex(j)}function q(R){const j=window.__quantModules&&window.__quantModules.pinyin;return j?j.searchStocksByQuery(R,F()).map(function(A){return{type:"stock",code:A.code,name:A.name,label:A.name,subLabel:A.code,icon:"trending-up"}}):[]}function r(){const R=[],j=window.__quantModules&&window.__quantModules.recent;j&&j.getRecentViewed().slice(0,5).forEach(function(w){R.push({type:"stock",code:w.code,name:w.name||w.code,label:w.name||w.code,subLabel:"最近查看 · "+w.code,icon:"trending-up"})});const A=(h.watchlist&&h.watchlist.value||[]).slice(0,8).map(function(w){return{type:"stock",code:w.code,name:w.name||w.code,label:w.name||w.code,subLabel:"我的自选 · "+w.code,icon:"trending-up"}});return R.concat(A)}const i=t(()=>{const R=d.value;if(!R)return I.mergeResults([],[],r());const j=I.searchMenus(R,P.value,h.subPageNames),A=I.searchCommands(R,D.value),w=C.value;return I.mergeResults(j,A,w)}),m=t(()=>i.value);function H(R){return m.value.flat[l.value]===R}function O(R){l.value=m.value.flat.indexOf(R)}function K(R){return(R.type||"")+":"+(R.code||R.menuKey||R.key||R.label)}let s=null;function J(){const R=d.value.trim();if(R.length<1){C.value=[];return}s&&clearTimeout(s),s=setTimeout(function(){const j=q(R);C.value=j,l.value=0,h.searchStocks(R,function(A){if(d.value.trim()!==R)return;const w=(A||[]).filter(function(U){return U&&U.code&&U.name}).map(function(U){return{type:"stock",code:U.code,name:U.name,label:U.name,subLabel:U.code,icon:"trending-up"}}),E={},oe=[];j.forEach(function(U){E[U.code]||(E[U.code]=!0,oe.push(U))}),w.forEach(function(U){E[U.code]||(E[U.code]=!0,oe.push(U))}),C.value=oe,l.value=0})},200)}function o(){l.value=I.moveIndex(l.value,m.value.flat.length,1)}function y(){l.value=I.moveIndex(l.value,m.value.flat.length,-1)}function L(){const R=m.value.flat[l.value];R&&z(R)}function z(R){h.commandPaletteVisible.value=!1,R.type==="menu"?h.navigateTo(R.menuKey,R.subPage):R.type==="stock"?h.showStockDetail(R.code,R.name):R.type==="command"&&ee(R.key)}function ee(R){if(R==="refresh"){const j=h.currentPage.value;j==="strategies"?h.loadDashboardData().catch(function(){}):j==="calendar"?h.refreshCalendarData().catch(function(){}):j==="ai"&&h.loadAiHistory().catch(function(){})}else R==="export"?h.exportCSV():R==="batch"?h.showBatchEvaluate.value=!0:R==="ai"?h.openAiFab():R==="sidebar"?h.toggleSidebar():R==="today"?h.navigateTo("strategies","overview"):R==="add-portfolio"?(h.currentPage.value="ai",h.currentSubPage.value="portfolio"):R==="open-system"?h.navigateTo("system","status"):R==="open-shortterm"?h.navigateTo("shortterm","overview"):R==="open-research"?h.navigateTo("research","overview"):R==="open-calendar"?h.navigateTo("calendar",""):R==="refresh-data-source"?h.navigateTo("system","datasource"):R.indexOf("theme:")===0&&h.changeTheme(R.slice(6))}g(k,function(R){R&&(d.value="",C.value=[],l.value=0,e(function(){x.value&&x.value.focus&&x.value.focus()}))}),g(d,J);function Y(R){R==="toggle-palette"?h.commandPaletteVisible.value=!h.commandPaletteVisible.value:R==="toggle-sidebar"?h.toggleSidebar():R==="open-ai"?h.openAiFab():R==="refresh"?ee("refresh"):R==="open-today"?ee("today"):R==="batch-eval"?ee("batch"):R==="add-portfolio"&&ee("add-portfolio")}function $(R){if(!I.createDefaultShortcuts||!I.createShortcutRegistry)return;const A=I.createDefaultShortcuts().resolve({key:R.key,ctrlKey:R.ctrlKey,altKey:R.altKey,shiftKey:R.shiftKey,metaKey:R.metaKey});A&&(R.preventDefault(),Y(A))}return f(function(){document.addEventListener("keydown",$)}),{visible:k,query:d,results:m,inputEl:x,sanitizeHtml:h.sanitizeHtml,isIconName:S,onDown:o,onUp:y,onEnter:L,execute:z,isActive:H,setActive:O,itemKey:K,onGlobalKeydown:$}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ChangePasswordDialog={name:"qc-change-password-dialog",template:`
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
    `,setup(){const t=a("qcState");if(!t)return{};const g=Vue.ref(0);let e=null;return t.batchRunning&&t.batchRunning.__v_isRef&&Vue.watch(t.batchRunning,u=>{u?(g.value=0,e=setInterval(()=>{g.value++},1e3)):e&&(clearInterval(e),e=null)}),{...t,batchElapsed:g}}}})();(function(){const{inject:a}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.AutoEvaluateDialog={name:"qc-auto-evaluate-dialog",template:`
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
    `,setup(){const u=a("qcState");if(!u)return{};const f={fetching:"正在获取行情数据",calculating:"正在计算评分",analyzing:"正在生成分析报告",done:"评估完成"},I=t(()=>f[u.aiEvalStage.value]||""),h=t(()=>{const L=u.aiResult&&u.aiResult.value&&u.aiResult.value.result&&u.aiResult.value.result.level;return L?L==="强烈推荐"||L==="推荐"?"var(--success-text)":L==="谨慎推荐"?"var(--warning-text)":L==="中性"||L==="观望"?"var(--text-secondary)":L==="评估失败"||L==="无可用模型"?"var(--danger-text)":"var(--color-primary)":"var(--color-primary)"});function d(L){const z=document.createElement("textarea");z.value=L,z.style.position="fixed",z.style.opacity="0",document.body.appendChild(z),z.select(),document.execCommand("copy"),document.body.removeChild(z)}async function k(){const L=u.aiResult&&u.aiResult.value;if(!L||!L.result)return;const z=L.result.dimensions||{},ee=Object.entries(z).map(([$,R])=>`${$} ${Math.round(R)}分`).join(`
`),Y=`【AI 智能评估】${L.result.level||""} ${L.result.total_score!=null?L.result.total_score:"—"}分
模型：${L.model_used||L.result.provider||"—"}

${L.result.detailed_report||""}

九维度评分：
${ee||"无"}`;try{await navigator.clipboard.writeText(Y),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{try{d(Y),ElementPlus.ElMessage.success("报告已复制到剪贴板")}catch{ElementPlus.ElMessage.error("复制失败，请手动复制")}}}const l=g(!1),C=g(!1),x=g(null),D=g([]),S={偏低:"factor-sem-low",中性:"factor-sem-mid",偏高:"factor-sem-high"};function P(L){return S[L]||"factor-sem-none"}async function F(){const L=u.stockDetail.value&&u.stockDetail.value.stock;if(L){l.value=!0,C.value=!1,D.value=[],x.value=null;try{const z=u.selectedDate.value?`?date=${u.selectedDate.value}`:"",ee=await fetch(`/api/calendar/stock/${L}/factors${z}`).then(j=>j.json()),Y=ee&&Array.isArray(ee.factors)?ee.factors:[],$=[],R={};Y.forEach(j=>{R[j.category]||(R[j.category]={category:j.category,items:[]},$.push(R[j.category])),R[j.category].items.push(j)}),D.value=$,x.value=ee&&ee.summary||null}catch{C.value=!0}finally{l.value=!1}}}e(u.stockDetailTab,L=>{L==="factor"&&u.stockDetail.value&&u.stockDetailVisible.value&&(F(),r())});const q=g(null);async function r(){try{const L=await fetch("/api/market/factor-ic").then(z=>z.json());q.value=L&&L.success&&L.data?L.data:{}}catch{q.value={}}}function i(L){if(!L||!L.n5)return"—";const z=L.n5.icir!=null?"ICIR "+L.n5.icir:"ICIR —";return L.n5.grade+" ("+z+")"}const m=g(!1),H=g(!1),O=g([]),K=g([]);function s(L){if(L==null)return"—";const z=Number(L);return Number.isNaN(z)?"—":Math.abs(z)>=1e8?(z/1e8).toFixed(2)+"亿":Math.abs(z)>=1e4?(z/1e4).toFixed(1)+"万":String(z)}async function J(){const L=u.stockDetail&&u.stockDetail.value&&u.stockDetail.value.stock;if(L){m.value=!0,H.value=!1;try{const z=await fetch("/api/market/performance/"+encodeURIComponent(L)).then(ee=>ee.json());z&&z.success?(O.value=z.forecast||[],K.value=z.express||[]):H.value=!0}catch{H.value=!0}finally{m.value=!1}}}e(u.stockDetailTab,L=>{L==="performance"&&J()});const o=g(null);async function y(){const L=u.stockDetail&&u.stockDetail.value&&u.stockDetail.value.stock;if(!L){o.value=null;return}try{const z=await fetch("/api/focus/stock/"+encodeURIComponent(L)+"/pool").then(ee=>ee.json());o.value=z&&z.success&&z.data?z.data:null}catch{o.value=null}}return e(()=>u.stockDetail&&u.stockDetail.value&&u.stockDetail.value.stock,L=>{L&&u.stockDetailVisible.value?y():o.value=null}),e(()=>u.stockDetailVisible.value,L=>{L?y():o.value=null}),{...u,aiStageText:I,levelRingColor:h,copyAiReport:k,factorLoading:l,factorError:C,factorSummary:x,factorGroups:D,factorSemClass:P,loadFactorPanel:F,factorIc:q,loadFactorIc:r,factorIcGrade:i,perfLoading:m,perfError:H,perfForecast:O,perfExpress:K,fmtY:s,loadPerformance:J,poolInfo:o,loadPoolInfo:y}}}})();(function(){const{computed:a,inject:t}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.HistoryRecord={name:"qc-history-record",props:{item:{type:Object,required:!0},type:{type:String,default:"history"},showDims:{type:Boolean,default:!1},timeFormat:{type:String,default:"time"}},template:`
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
    `,setup(g){const e=t("qcState");if(!e)return{};const u=a(()=>g.type==="history"?e.selectedHistoryIds.value.includes(g.item.id):e.selectedChatIds.value.includes(g.item.id)),f=a(()=>{const S=e.watchlistCodes.value.has(g.item.stock_code);return{icon:"star",isWatched:S,label:S?"取消收藏":"加入收藏"}}),I=a(()=>g.type==="history"?"bot":"message-circle"),h=a(()=>{var S;return g.type==="history"?((S=g.item.result)==null?void 0:S.provider)||"":g.item.first_msg||""}),d=a(()=>{var S,P;return`${((P=(S=g.item.result)==null?void 0:S.dimensions)==null?void 0:P.length)||9}维度分析`}),k=a(()=>{var P,F;const S=g.type==="history"?g.item.evaluate_time:g.item.created_at||"";return S?g.timeFormat==="datetime"?g.type==="history"?`${S.split("T")[0]} ${(S.split("T")[1]||"").split(".")[0]}`:`${S.split("T")[0]} ${((P=S.split("T")[1])==null?void 0:P.substring(0,5))||""}`:g.type==="history"?(S.split("T")[1]||"").split(".")[0]||S:((F=S.split("T")[1])==null?void 0:F.substring(0,5))||"":""});function l(){g.type==="history"?e.toggleSelectHistory(g.item.id):e.toggleSelectChat(g.item.id)}function C(){g.type==="history"?e.viewAiResult(g.item):e.viewChatSession(g.item)}async function x(){try{await ElementPlus.ElMessageBox.confirm(g.type==="history"?"确定删除这条评估记录吗？此操作不可恢复。":"确定删除这段对话吗？此操作不可恢复。","删除确认",{type:"warning",confirmButtonText:"删除",cancelButtonText:"取消"})}catch{return}g.type==="history"?e.deleteSingleHistory(g.item.id):e.deleteChatSession(g.item.id)}function D(S,P){e.toggleWatchlist(S,P)}return{isSelected:u,watchState:f,providerIcon:I,providerText:h,dimsText:d,timeText:k,toggleSelect:l,view:C,remove:x,toggleWatchlist:D,keyClick:e.keyClick,fmtNum:e.fmtNum,evaluatedCodes:e.evaluatedCodes,klineLoadedCodes:e.klineLoadedCodes,levelColor:e.levelColor,levelBg:e.levelBg}}}})();(function(){const{ref:a,computed:t,onMounted:g,inject:e}=Vue;window.__quantComponents=window.__quantComponents||{};const u=["买入","持有","观望","减仓","卖出"],f={买入:"is-success",持有:"is-warning",观望:"is-info",减仓:"is-danger",卖出:"is-danger"},I={强烈推荐:"is-danger",推荐:"is-success",谨慎推荐:"is-warning",中性:"is-info",观望:"is-running"},h=[{v:"pre_open",l:"盘前 09:00"},{v:"intraday_1",l:"盘中 10:30"},{v:"intraday_2",l:"盘中 14:00"},{v:"after_close",l:"盘后 20:00"}],d={pre_open:"盘前",intraday_1:"盘中",intraday_2:"盘中",after_close:"盘后"},k=[{key:"n5",label:"5 日命中"},{key:"n10",label:"10 日命中"},{key:"n20",label:"20 日命中"}];function l(x){return((window.__quantModules&&window.__quantModules.core||{}).apiFetch||window.fetch)(x).then(P=>P.json?P.json():P)}function C(){const x=new Date,D=S=>S<10?"0"+S:""+S;return x.getFullYear()+"-"+D(x.getMonth()+1)+"-"+D(x.getDate())}window.__quantComponents.FocusView={name:"qc-focus-view",template:`
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
      </div>`,setup(){const x=e("qcState"),D=a(C()),S=a("after_close"),P=a({rows:[],actions:{},total:0,groups:{}}),F=a({sessions:{},total:0}),q=a(null),r=a(!1),i=a(""),m=a(!1),H=a([]),O=a(""),K=a(null),s={},J=a({});let o=0;const y=a(null),L=t(function(){const T=P.value&&P.value.groups||{};return Object.keys(T).length?T:P.value&&P.value.rows&&P.value.rows.length?{全部:P.value.rows}:{}}),z=t(function(){const T=y.value;return!T||!T.date||T.date!==D.value?"":"已加载最近一次评估: "+T.date+" · "+(d[T.session]||T.session)}),ee=t(function(){const T=P.value&&P.value.base_date;return T?T===D.value?"评分范围: "+T+" 收盘池 + 自选":"评分范围: "+T+" 收盘池(前一交易日算好) + 自选":""});function Y(T){if(T==null)return"—";const G=Number(T);return G===Math.floor(G)?String(G):G.toFixed(1)}function $(T){const G=P.value.total||0,re=(P.value.actions||{})[T]||0;if(!G)return"0%";const fe=re/G*100;return fe>0&&fe<4?"4%":fe.toFixed(1)+"%"}function R(T){return{买入:"success",持有:"warning",观望:"info",减仓:"danger",卖出:"danger"}[T]||"info"}function j(T){const G=q.value&&q.value.overall&&q.value.overall[T]||null;return!G||G.total===0||G.rate===null||G.rate===void 0?"info":G.rate>=60?"success":G.rate>=40?"warning":"danger"}function A(T){const G=q.value&&q.value.overall&&q.value.overall[T]||null;return!G||G.total===0||G.rate===null||G.rate===void 0?"样本不足":G.rate.toFixed(1)+"% ("+G.total+" 样本)"}function w(){return d[S.value]||S.value}function E(T){const G=H.value.indexOf(T);G>=0?H.value.splice(G,1):H.value.push(T)}function oe(T){if(!T||!T.raw_json)return{};if(s[T.stock_code+T.session+T.trade_date])return s[T.stock_code+T.session+T.trade_date];let G={};try{G=JSON.parse(T.raw_json)||{}}catch{G={}}return s[T.stock_code+T.session+T.trade_date]=G,G}async function U(){try{const T=await l("/api/focus/latest"),G=T&&T.success&&T.data;G&&G.date&&(y.value=G,D.value=G.date,G.session&&(S.value=G.session))}catch(T){console.warn("[focus] 最近一次评估解析失败:",T)}}async function b(){m.value=!0;try{const T=await l("/api/focus/results?date="+D.value+"&session="+S.value);P.value=T&&T.success&&T.data||{rows:[],actions:{},total:0,groups:{}},c((P.value.rows||[]).map(function(G){return G.stock_code}))}catch(T){console.warn("[focus] 结果加载失败:",T),P.value={rows:[],actions:{},total:0,groups:{}}}finally{m.value=!1}}async function c(T){const G=J.value||{},re=(T||[]).filter(function(Z){return Z&&!G[Z]});if(!re.length)return;const fe=++o,Te=re.map(function(Z){return l("/api/focus/stock/"+encodeURIComponent(Z)+"/pool?date="+D.value).then(function(de){de&&de.success&&de.data?G[Z]=de.data:G[Z]={stock_code:Z,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}}).catch(function(){G[Z]={stock_code:Z,source:"none",sources:[],holding:!1,pool_state:"never",pool_history:null}})});try{await Promise.all(Te)}catch{}fe===o&&(J.value=Object.assign({},G))}function M(T){const G=x&&x.showStockDetail;if(typeof G=="function"){G(T);return}const fe=(window.__quantModules&&window.__quantModules.element||{}).Message||window.ElementPlus&&window.ElementPlus.ElMessage;fe&&fe.info("请从其他页面打开股票详情: "+T)}async function p(){try{const T=await l("/api/focus/history?date="+D.value);F.value=T&&T.success&&T.data||{sessions:{},total:0}}catch(T){console.warn("[focus] 历史加载失败:",T),F.value={sessions:{},total:0}}}async function W(){r.value=!0;try{const T=await l("/api/ai/track");T&&T.success&&T.data?(q.value=T.data,i.value=(T.data.note||"").replace(/^免责声明[:：]?\s*/i,"")):q.value=null}catch(T){console.warn("[focus] 效果块加载失败:",T),q.value=null}finally{r.value=!1}}async function ue(){const T=(O.value||"").trim();if(T){K.value=null;try{const G=await l("/api/focus/stock/"+encodeURIComponent(T));K.value=G&&G.success&&G.data&&G.data.rows||[]}catch(G){console.warn("[focus] 单股历史加载失败:",G),K.value=[]}}}async function te(){await b(),await p(),await W()}return g(async function(){await U(),await te()}),{curDate:D,session:S,results:P,history:F,track:q,trackLoading:r,trackNote:i,detailSplitEnabled:x.detailSplitEnabled,stockDetail:x.stockDetail,loading:m,expanded:H,stockCode:O,stockHistory:K,SESSIONS:h,ACTION_ORDER:u,TRACK_WINDOWS:k,ACTION_DOT:f,TIER_DOT:I,SESSION_LABELS:d,displayGroups:L,latestNote:z,baseNote:ee,sessionLabel:w,fmtScore:Y,tagType:R,rateTagType:j,fmtRate:A,toggle:E,detailOf:oe,loadResults:b,loadHistory:p,loadTrack:W,loadStockHistory:ue,loadAll:te,poolStatus:J,openStockDetail:M,actionPct:$}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.data={create:function(a){const{ref:t,nextTick:g}=Vue,{currentView:e,statusFilter:u,dashboardData:f,loadHealthMetrics:I,getLoadDashboardData:h,getLastRefreshTime:d,getFetchPoolSignals:k}=a,l=t(!1),C=t(""),x=new Map,D=t([]),S=t(""),P=t(""),F=t([]),q=t(""),r=window.__quantModules.core||{},i=typeof r.createTtlCache=="function"?r.createTtlCache(15e3):null;let m=0;function H(){const z=Date.now();z-m<5e3||(m=z,ElementPlus.ElMessage.success("有新数据，已更新"))}function O(z,ee,Y,$){!i||!ee||typeof r.silentRefresh!="function"||r.silentRefresh({cache:i,key:ee,fetchFn:async()=>{const R=await fetch(z);if(!R.ok)throw new Error("HTTP "+R.status);const j=await R.json();return Y?Y(j):j},ttl:i.defaultTtl,apply:$,onChanged:H,onError:()=>{}})}const K=new Set;async function s(){var z;try{const Y=await(await fetch("/api/dates")).json();D.value=((z=Y.data)==null?void 0:z.dates)||Y.dates||[],D.value.length>0&&(S.value=D.value[D.value.length-1]),P.value=new Date().toLocaleTimeString()}catch(ee){console.error(ee)}}async function J(){try{await fetch("/api/data-refresh/reload",{method:"POST"}),P.value="刷新中...",x.clear(),await s(),await y(),P.value=new Date().toLocaleTimeString()}catch(z){console.error("数据刷新失败",z)}}function o(){if(!S.value)return;const ee="/api/view/"+(e.value||"day")+"/"+S.value+"?status="+(u.value||"all")+"&format=csv";window.open(ee,"_blank")}async function y(){if(!S.value)return;const z=`${e.value}_${S.value}`;if(K.has(z))return;K.add(z);const ee=`/api/view/${e.value}/${S.value}?status=all`,Y=i&&typeof r.makeCacheKey=="function"?r.makeCacheKey("GET",`/api/view/${e.value}/${S.value}`,{status:"all"}):null,$=(A,w)=>{F.value=A,q.value=w||"",x.set(z,{stocks:A,note:w||""})},R=A=>{$(A&&A.stocks||[],A&&A.note||"")};if(x.has(z)){R(x.get(z)),O(ee,Y,A=>A,R),K.delete(z);return}const j=Y&&i?i.get(Y):void 0;if(j!==void 0){R(j),O(ee,Y,A=>A,R),K.delete(z);return}l.value=!0,C.value={day:"日",week:"周",month:"月",year:"年"}[e.value]||e.value;try{const w=await(await fetch(ee)).json(),E=w.stocks||[];$(E,w.note||""),i&&Y&&i.set(Y,{stocks:E,note:w.note||""})}catch{try{const E=await(await fetch(`/api/calendar/${S.value}/consensus`)).json();F.value=(E.consensus||[]).map(oe=>({...oe,code:oe.stock,status:"current"}))}catch{ElementPlus.ElMessage.error("数据加载失败")}}finally{l.value=!1}k(),K.delete(z)}async function L(){const z=i&&typeof r.makeCacheKey=="function"?r.makeCacheKey("GET","/api/dashboard",null):"/api/dashboard";if(i){const ee=i.get(z);if(ee!==void 0){f.value=ee,I().catch(()=>{}),O("/api/dashboard",z,Y=>Y.data||Y,Y=>{f.value=Y,d().value=Date.now()});return}}await h()(),I().catch(()=>{}),i&&i.set(z,f.value)}return{loading:l,loadingView:C,viewCache:x,dates:D,selectedDate:S,lastLoadTime:P,consensus:F,viewNote:q,loadDates:s,refreshCalendarData:J,exportCSV:o,loadConsensusData:y,loadDashboardCached:L}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.market={create:function(a){const{nextTick:t}=Vue,{currentKlinePeriod:g,loadIndexKline:e,rememberDialogTrigger:u,menus:f,currentPage:I,currentSubPage:h,stockDetail:d,selectedDate:k}=a,l=ref({indices:[],market_sentiment:null});let C=null;const x=ref(!1),D=ref(null),S=ref(null),P=ref(!1);function F(){window.__quantModules.charts.disposeKline("stockKlineChart")}const q=ref(window.innerWidth<=768);window.addEventListener("resize",()=>{q.value=window.innerWidth<=768,window.__quantModules.charts.resizeKline("stockKlineChart"),window.__quantModules.charts.resizeKline("indexKlineChart")});const r=ref(!1),i=ref(null),m=ref(!1),H=ref(0),O=ref(0);async function K(){try{const w=await(await fetch("/api/market/overview")).json();l.value=w,s(w)}catch(A){console.error("获取市场行情失败:",A)}}function s(A){C&&clearInterval(C),A&&A.in_trading_hours&&(C=setInterval(K,6e5))}function J(A){u(),D.value=A,S.value=null,g.value="daily",o(A.code),window.__quantModules.charts.disposeKline("indexKlineChart"),x.value=!0,setTimeout(async()=>{await e("daily")},500)}async function o(A){try{const E=await(await fetch("/api/ai/index-eval/"+A)).json();E.success&&E.data&&(S.value=E.data)}catch(w){console.warn("[getIndexAiScore] cache check failed:",w)}}async function y(){if(D.value){P.value=!0;try{const w=await(await fetch("/api/ai/evaluate-index",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({index_code:D.value.code,index_name:D.value.name,current_price:D.value.close,pct_chg:D.value.pct_chg})})).json();w.success?S.value=w.data:ElementPlus.ElMessage.error(w.message||"评估失败")}catch{ElementPlus.ElMessage.error("评估失败，请稍后重试")}finally{P.value=!1}}}function L(A){window.__quantModules.charts.zoomKline("stockKlineChart",A)}function z(){m.value=!0,setTimeout(()=>{m.value=!1},600)}function ee(A,w){if(A===w){z();return}const E=800,oe=performance.now(),U=w-A;r.value=!0,i.value={value:U,dir:U>0?"up":"down"},m.value=!0,setTimeout(()=>{m.value=!1},600),setTimeout(()=>{i.value=null},2300);function b(c){const M=c-oe,p=Math.min(M/E,1),W=1-Math.pow(1-p,3),ue=Math.round(A+U*W);d.value&&d.value.score_data&&(d.value.score_data.score=ue),p<1?requestAnimationFrame(b):(d.value&&d.value.score_data&&(d.value.score_data.score=w),r.value=!1)}requestAnimationFrame(b)}function Y(){if(!d.value||!d.value.score_data)return;const A=d.value.score_data.score;if(A==null)return;const w=600,E=performance.now();m.value=!0,setTimeout(()=>{m.value=!1},600);function oe(U){const b=Math.min((U-E)/w,1),c=1-Math.pow(1-b,3),M=Math.round(A*c);d.value&&d.value.score_data&&(d.value.score_data.score=M),b<1?requestAnimationFrame(oe):d.value&&d.value.score_data&&(d.value.score_data.score=A)}requestAnimationFrame(oe)}async function $(){var E;if(!d.value||!d.value.stock)return;const A=d.value.stock,w=(E=d.value.score_data)==null?void 0:E.score;try{const oe=new Date().toISOString().split("T")[0],U=k.value||oe,c=await(await fetch(`/api/calendar/stock/${encodeURIComponent(A)}/score?date=${U}`)).json();if(c.success&&c.score_data){const M=c.score_data.score;d.value&&(d.value.score_data=c.score_data),w!=null&&M!==w?ee(w,M):z()}else z()}catch(oe){console.warn("[refreshStockScore] failed:",oe)}}function R(A){q.value&&(H.value=A.touches[0].clientX,O.value=A.touches[0].clientY)}function j(A){if(!q.value)return;const w=H.value-A.changedTouches[0].clientX,E=O.value-A.changedTouches[0].clientY;if(Math.abs(w)>Math.abs(E)&&Math.abs(w)>80){const oe=f.value.map(function(b){return b.key}),U=oe.indexOf(I.value);if(w>0&&U<oe.length-1){const b=oe[U+1],c=window.__quantGoPage;c?c(b,""):(I.value=b,h.value="")}else if(w<0&&U>0){const b=oe[U-1],c=window.__quantGoPage;c?c(b,""):(I.value=b,h.value="")}}}return{marketData:l,marketRefreshTimer:C,fetchMarketData:K,indexDetailVisible:x,indexDetail:D,indexAiResult:S,indexAiLoading:P,showIndexDetail:J,loadCachedIndexEval:o,doIndexAiEvaluate:y,disposeStockKline:F,isMobile:q,zoomKlineRange:L,scoreAnimating:r,scoreDelta:i,scorePulse:m,triggerScorePulse:z,animateScoreChange:ee,animateScoreEntrance:Y,refreshStockScore:$,touchStartX:H,touchStartY:O,onTouchStart:R,onTouchEnd:j}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.ops={create:function(a){const{navigateTo:t,currentPage:g,currentSubPage:e}=a,u=ref({webhook_url:"",notify_type:"webhook",format:"card",enabled:!1,daily_push:!1,view_change_push:!1,ai_evaluate_push:!1}),f=ref("idle"),I=ref("");async function h(){if(!u.value.webhook_url){I.value="请先输入Webhook地址";return}f.value="testing",I.value="";try{const T=await(await fetch("/api/feishu/test",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({webhook_url:u.value.webhook_url})})).json();T.success||T.status==="ok"?(I.value="测试消息已发送，请查看飞书",ElementPlus.ElMessage.success("测试消息已发送")):(I.value=T.message||"测试失败",ElementPlus.ElMessage.error(I.value))}catch{I.value="连接失败",ElementPlus.ElMessage.error("飞书连接失败")}f.value="idle"}const d=Vue.ref(!1);async function k(){d.value=!0;try{const T=await(await fetch("/api/feishu/config",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u.value)})).json()}catch{ElementPlus.ElMessage.error("保存失败")}finally{d.value=!1}}const l=ref(!1);function C(){t("ai","chat_history"),l.value=!0,Vue.nextTick(()=>{const te=document.querySelector('input[placeholder*="输入问题"]');te&&te.focus()})}const x=ref([]),D=ref({});async function S(){try{const T=await(await fetch("/api/ai/recommend-strategies")).json();T.success&&(x.value=T.recommendations||[])}catch(te){console.warn("[loadStrategyRecommendations] failed:",te)}}async function P(){try{const T=await(await fetch("/api/ai/usage-stats")).json();T.success&&(D.value=T)}catch(te){console.warn("loadAiUsage failed:",te)}}const F=ref({}),q=ref([]),r=ref(7);async function i(){try{const T=await(await fetch("/api/system/monitor")).json();T.success&&(F.value=T)}catch(te){console.warn("loadSysMonitor failed:",te)}}const m=ref({});async function H(){try{const T=await(await fetch("/api/system/health-detail")).json();T.success&&(m.value=T)}catch(te){console.warn("loadHealthDetail failed:",te)}}async function O(){try{const T=await(await fetch(`/api/analytics/rank?days=${r.value}`)).json();T.success&&(q.value=T.rank||[])}catch(te){console.warn("loadAnalytics failed:",te)}}const K=ref(!1);async function s(){if(!K.value){K.value=!0;try{const T=await(await fetch("/api/system/review/trigger",{method:"POST"})).json();return T&&T.success?T.degraded?ElementPlus.ElMessage.warning(`复盘已生成但数据不可达（${T.reason||""}）`):ElementPlus.ElMessage.success(`复盘已生成（${T.date}）`):ElementPlus.ElMessage.error(T&&(T.detail||T.message)||"生成复盘失败"),H(),T}catch(te){ElementPlus.ElMessage.error("生成复盘失败: "+(te.message||""))}finally{K.value=!1}}}const J=ref(null),o=ref(!1);async function y(){try{const T=await(await fetch("/api/ai/fact-check/latest")).json();J.value=T&&T.success&&T.data||null}catch(te){console.warn("loadFactCheck failed:",te)}}async function L(){if(!o.value){o.value=!0;try{const T=await(await fetch("/api/ai/fact-check/audit",{method:"POST"})).json();return T&&T.success?(ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${T.data.pass_rate!=null?T.data.pass_rate+"%":"--"} (${T.data.checked} 个数字)`),y()):ElementPlus.ElMessage.error(T&&(T.detail||T.message)||"事实护栏抽查失败"),T}catch(te){ElementPlus.ElMessage.error("事实护栏抽查失败: "+(te.message||""))}finally{o.value=!1}}}const z=ref([]),ee=ref(!1);async function Y(){try{const T=await(await fetch("/api/backup/list")).json();T.success&&(z.value=T.backups||[])}catch(te){console.error("加载备份列表失败",te)}}async function $(){ee.value=!0;try{const T=await(await fetch("/api/backup/create",{method:"POST"})).json();T.success?(ElementPlus.ElMessage.success(T.message||"备份成功"),Y()):ElementPlus.ElMessage.error(T.message||"备份失败")}catch{ElementPlus.ElMessage.error("备份失败")}finally{ee.value=!1}}const R=ref(""),j=ref("");async function A(te){R.value=te,j.value="";try{const T=window.__quantModules&&window.__quantModules.core||{},G=typeof T.authHeaders=="function"?T.authHeaders():{},re=await fetch("/api/reports/export?format="+encodeURIComponent(te),{headers:G});if(!re.ok)throw new Error("HTTP "+re.status);const fe=await re.blob(),Te=URL.createObjectURL(fe),Z=document.createElement("a");Z.href=Te;const de=new Date().toISOString().slice(0,10);Z.download="report_"+de+"."+te,document.body.appendChild(Z),Z.click(),document.body.removeChild(Z),URL.revokeObjectURL(Te),j.value="报表已导出 ("+te.toUpperCase()+")"}catch(T){j.value="报表导出失败: "+(T.message||T)}finally{R.value=""}}async function w(te){try{await ElementPlus.ElMessageBox.confirm(`确定要从备份 ${te} 恢复吗？当前数据将被覆盖。`,"恢复确认",{type:"warning",confirmButtonText:"恢复",cancelButtonText:"取消"})}catch(T){console.warn("[restoreBackup] confirm cancelled:",T);return}try{const G=await(await fetch("/api/backup/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:te})})).json();G.success?(ElementPlus.ElMessage.success(G.message||"恢复成功"),setTimeout(()=>location.reload(),1e3)):ElementPlus.ElMessage.error(G.message||"恢复失败")}catch{ElementPlus.ElMessage.error("恢复失败")}}const E=ref(!1),oe=ref(0),U=[{icon:"calendar",title:"认识量化日历",desc:"日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。"},{icon:"bot",title:"AI 智能评估",desc:"在智能评估页可对股票发起多模型 AI 评估；点击右下角 AI 按钮可随时快速问股。"},{icon:"send",title:"设置推送与反馈",desc:"在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。"}];function b(){window.__quantGuideModalsEnabled===!0&&localStorage.getItem("quant_tour_done")!=="1"&&setTimeout(()=>{oe.value=0,E.value=!0},800)}function c(){E.value=!1,localStorage.setItem("quant_tour_done","1")}function M(){E.value=!1,localStorage.setItem("quant_tour_done","1")}const p=ref(""),W=ref(!1);async function ue(){if(!p.value||!p.value.trim()){ElementPlus.ElMessage.warning("请输入反馈内容");return}W.value=!0;try{(await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:p.value.trim(),page:g.value+"/"+e.value,user_agent:navigator.userAgent.slice(0,200),app_version:"v"+(window.__appVersion||"3.2.0")})})).ok?(p.value="",ElementPlus.ElMessage.success("反馈已提交，感谢你的支持！")):ElementPlus.ElMessage.error("提交失败，请稍后重试")}catch{ElementPlus.ElMessage.error("提交失败，请稍后重试")}finally{W.value=!1}}return{feishuConfig:u,feishuTestStatus:f,feishuTestMessage:I,feishuSaving:d,testFeishuWebhook:h,saveFeishuConfig:k,aiFabHidden:l,openAiFab:C,strategyRecommendations:x,aiUsage:D,loadStrategyRecommendations:S,loadAiUsage:P,sysMonitor:F,analyticsRank:q,analyticsDays:r,loadSysMonitor:i,loadAnalytics:O,healthDetail:m,loadHealthDetail:H,reviewTriggering:K,triggerMarketReview:s,factCheck:J,factCheckRunning:o,loadFactCheck:y,triggerFactCheck:L,backups:z,backupCreating:ee,loadBackups:Y,createBackup:$,restoreBackup:w,reportExporting:R,reportExportMsg:j,exportReport:A,tourVisible:E,tourStep:oe,tourSteps:U,maybeShowTour:b,skipTour:c,finishTour:M,feedbackText:p,feedbackSubmitting:W,submitFeedback:ue}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.nav={create:function(a){const{computed:t}=Vue,{currentView:g,selectedDate:e,dates:u,loadConsensusData:f,hapticFeedback:I}=a,h=t(()=>({day:"天",week:"周",month:"月",year:"年"})[g.value]||"天"),d=t(()=>({day:"date",week:"week",month:"month",year:"year"})[g.value]||"date"),k=t(()=>({day:"YYYY-MM-DD",week:"YYYY 第w周",month:"YYYY-MM",year:"YYYY"})[g.value]||"YYYY-MM-DD"),l=t(()=>!e.value||!u.value||u.value.length===0?!1:e.value>u.value[0]),C=t(()=>!e.value||!u.value||u.value.length===0?!1:e.value<u.value[u.value.length-1]);function x(F){I("light"),g.value=F;let q=e.value||u.value[u.value.length-1];if(F==="year"){const r=q.substring(0,4),i=u.value.find(m=>m.startsWith(r));e.value=i||q}else if(F==="month"){const r=q.substring(0,7),i=u.value.find(m=>m.startsWith(r));e.value=i||q}setTimeout(f,50)}function D(F){I("light");const q=e.value,r=u.value,i=r.indexOf(q);if(i<0)return;let m=1;g.value==="week"&&(m=5),g.value==="month"&&(m=22),g.value==="year"&&(m=250);const H=i+F*m;if(H>=0&&H<r.length){const O=r[H];if(g.value==="month"){const K=O.substring(0,7),s=r.find(J=>J.startsWith(K));e.value=s||O}else if(g.value==="year"){const K=O.substring(0,4),s=r.find(J=>J.startsWith(K));e.value=s||O}else e.value=O;f()}}function S(F){if(!u.value||u.value.length===0)return!1;const q=F.getFullYear(),r=String(F.getMonth()+1).padStart(2,"0"),i=String(F.getDate()).padStart(2,"0"),m=`${q}-${r}-${i}`;return!u.value.includes(m)}function P(F){F&&F.length>10&&(e.value=F.substring(0,10)),f()}return{viewUnit:h,datePickerType:d,dateFormat:k,canNavPrev:l,canNavNext:C,switchView:x,navigateDate:D,disabledDate:S,onDateChange:P}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.keys={create:function(a){const{menus:t,subPageNames:g,navigateTo:e,currentPage:u,currentView:f,navigateDate:I,switchView:h,getLoadDashboardData:d,refreshCalendarData:k,getLoadAiHistory:l,exportCSV:C,getShowBatchEvaluate:x,openAiFab:D,toggleSidebar:S,showStockDetail:P}=a,F=ref("");async function q(o,y){if(!o||o.trim().length<1){y([]);return}const L=window.QuantCommandPanel;let z=[];L&&t.value&&(z=L.buildSearchSuggestions(o,t.value,g,L.DEFAULT_COMMANDS));const ee=window.__quantModules&&window.__quantModules.pinyin;ee&&ee.searchCoreStocks(o).forEach(function(Y){z.push({value:Y.code+" "+Y.name,type:"stock",code:Y.code,name:Y.name,label:Y.name,subLabel:Y.code,icon:"trending-up",iconName:"trending-up"})});try{const $=await(await fetch("/api/search?q="+encodeURIComponent(o))).json();if($.success&&$.results){const R=$.results.map(function(A){return{value:A.code+" "+A.name,type:"stock",code:A.code,name:A.name,label:A.name,subLabel:A.code,icon:"trending-up",iconName:"trending-up"}}),j=[];($.groups||[]).forEach(function(A){(A.items||[]).forEach(function(w){w.type==="sector"?j.push({value:w.name+" · "+w.subLabel,type:"sector",name:w.name,label:w.name,subLabel:"板块",icon:"layers",iconName:"layers"}):w.type==="strategy"?j.push({value:w.name+" · 策略",type:"strategy",id:w.id,name:w.name,label:w.name,subLabel:"策略",icon:"target",iconName:"target"}):w.type==="menu"&&j.push({value:w.name,type:"menu",menuKey:w.menuKey,name:w.name,label:w.name,subLabel:w.subLabel||"页面",icon:"file-text",iconName:"file-text"})})}),y(z.concat(R,j))}else y(z)}catch(Y){console.warn("[searchStocks] fetch failed:",Y),y(z)}}function r(o){return o?o.type==="menu"?{action:"menu",menuKey:o.menuKey,subPage:o.subPage}:o.type==="command"?{action:"command",key:o.key}:o.type==="sector"?{action:"sector",name:o.name}:o.type==="strategy"?{action:"strategy",id:o.id,name:o.name}:o.type==="stock"||o.code&&o.name?{action:"stock",code:o.code,name:o.name}:null:null}function i(o){F.value="";const y=window.QuantCommandPanel,L=y?y.dispatchSearchSelection(o):r(o);if(L){if(L.action==="menu"){e(L.menuKey,L.subPage);return}if(L.action==="command"){m(L.key);return}if(L.action==="sector"){e("shortterm","overview"),typeof showSectorDetail=="function"&&showSectorDetail(L.name);return}if(L.action==="strategy"){e("research","overview");return}L.action==="stock"&&typeof P=="function"&&P(L.code,L.name)}}function m(o){if(o==="refresh"){const y=u.value;y==="strategies"?d().catch(function(){}):y==="calendar"?k().catch(function(){}):y==="ai"&&l().catch(function(){})}else o==="export"?C():o==="batch"?x().value=!0:o==="ai"?D():o==="sidebar"?S():o==="open-eval-history"?e("ai","history"):o==="open-shortterm"&&e("shortterm","overview")}const H=ref(!1),O=ref(!1);function K(o){if(!o)return!1;const y=o.tagName;return y==="INPUT"||y==="TEXTAREA"||y==="SELECT"||o.isContentEditable}function s(o){if(K(o.target))return;const y=o.key.toLowerCase();if(o.ctrlKey&&y==="k"){o.preventDefault(),O.value=!0;return}if(o.ctrlKey&&y==="/"){o.preventDefault(),H.value=!H.value;return}if(o.ctrlKey&&y==="h"){o.preventDefault(),e("ai","history");return}if(o.ctrlKey&&o.shiftKey&&y==="s"){o.preventDefault(),e("shortterm","overview");return}if(!(o.ctrlKey||o.metaKey||o.altKey)){if(y>="1"&&y<="5"){const L=parseInt(y)-1,z=t.value[L];z&&e(z.key,z.subPages[0]||"");return}if(y==="r"&&J(),(y==="arrowleft"||y==="arrowright"||y==="arrowup"||y==="arrowdown")&&u.value==="calendar")if(o.preventDefault(),y==="arrowleft"||y==="arrowright")I(y==="arrowleft"?-1:1);else{const L=["day","week","month","year"].indexOf(f.value),z=["day","week","month","year"][(L+(y==="arrowup"?-1:1)+4)%4];h(z)}}}function J(){const o=u.value;o==="strategies"?d().catch(()=>{}):o==="calendar"?k().catch(()=>{}):o==="ai"&&l().catch(()=>{})}return{searchQuery:F,searchStocks:q,onSearchSelect:i,runGlobalCommand:m,shortcutHelpVisible:H,commandPaletteVisible:O,isTypingTarget:K,handleGlobalKeydown:s,refreshCurrentPage:J}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.auth={create:function(a){const{currentUser:t,loadUserConfig:g,loadDates:e,loadDashboardData:u,loadDashboardCached:f,loadHealthMetrics:I,loadConsensusData:h,applyTheme:d,maybeShowTour:k,loadAiVendors:l,loadGroupConfig:C,groupsConfig:x}=a,D="qc_login_username";let S="";try{S=localStorage.getItem(D)||""}catch{S=""}const P=ref({username:S,password:""}),F=ref(!1),q=ref(!1),r=ref(!1),i=ref({oldPassword:"",newPassword:"",confirmPassword:""}),m=ref(!1),H=ref(!1),O=ref({newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""}),K=ref(1);async function s(){try{(await(await fetch("/api/setup/status")).json()).needed&&(O.value={newPassword:"",aiKey:"",aiProvider:"deepseek",aiModel:"deepseek-v4-flash",aiEndpoint:"https://api.deepseek.com/v1",tushareToken:""},K.value=1,H.value=!0)}catch(Y){console.warn("[checkSetupWizard] failed:",Y)}}async function J(){try{const Y={new_password:O.value.newPassword,ai_key:O.value.aiKey,ai_provider:O.value.aiProvider,ai_model:O.value.aiModel,ai_endpoint:O.value.aiEndpoint,tushare_token:O.value.tushareToken},R=await(await fetch("/api/setup/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Y)})).json();R.success?(H.value=!1,ElementPlus.ElMessage.success("初始化完成"),await g()):ElementPlus.ElMessage.error(R.message||"保存失败")}catch{ElementPlus.ElMessage.error("保存失败")}}async function o(){try{(await(await fetch("/api/setup/reset",{method:"POST"})).json()).success&&(H.value=!0)}catch{ElementPlus.ElMessage.error("重置失败")}}async function y(){if(!P.value.username||!P.value.password){ElementPlus.ElMessage.warning("请输入用户名和密码");return}F.value=!0;try{const $=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P.value)})).json();if($.success){t.value=$.user,localStorage.setItem("quant_user",JSON.stringify($.user)),localStorage.setItem("quant_token",$.data.access_token),d($.user.theme||"gold");try{localStorage.setItem(D,P.value.username||"")}catch{}typeof C=="function"&&await C().catch(function(){}),typeof l=="function"&&l(),await g(),await e(),await Promise.all([f(),h(),I().catch(()=>{})]),ElementPlus.ElMessage.success("登录成功"),$.data&&$.data.must_change_password&&ElementPlus.ElMessage.warning("检测到默认口令，请立即在「系统」页修改管理员密码"),k(),$.user.role==="admin"&&setTimeout(s,500)}else ElementPlus.ElMessage.error($.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{F.value=!1}}async function L(){q.value=!0;try{const $=await(await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:"guest",password:"guest"})})).json();$.success?(t.value=$.user,localStorage.setItem("quant_user",JSON.stringify($.user)),localStorage.setItem("quant_token",$.data.access_token),d($.user.theme||"gold"),typeof C=="function"&&await C().catch(function(){}),await g(),await e(),await u(),I().catch(()=>{}),await h(),ElementPlus.ElMessage.success("访客登录成功")):ElementPlus.ElMessage.error($.message||"登录失败")}catch{ElementPlus.ElMessage.error("登录失败")}finally{q.value=!1}}function z(){ElementPlus.ElMessageBox.confirm("确定要退出登录吗？","确认退出",{confirmButtonText:"退出",cancelButtonText:"取消",type:"warning"}).then(()=>{t.value=null,localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token");try{x&&(x.value={})}catch{}try{window.__quantWs&&window.__quantWs.close&&window.__quantWs.close()}catch{}}).catch(()=>{})}async function ee(){if(!i.value.oldPassword){ElementPlus.ElMessage.warning("请输入当前密码");return}if(!i.value.newPassword||i.value.newPassword.length<6){ElementPlus.ElMessage.warning("新密码至少6位");return}if(i.value.newPassword!==i.value.confirmPassword){ElementPlus.ElMessage.warning("两次输入的新密码不一致");return}m.value=!0;try{const Y=await fetch("/api/auth/change-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({old_password:i.value.oldPassword,new_password:i.value.newPassword})}),$=await Y.json();Y.ok?(ElementPlus.ElMessage.success("密码修改成功，请重新登录"),r.value=!1,i.value={oldPassword:"",newPassword:"",confirmPassword:""},z()):ElementPlus.ElMessage.error($.detail||"修改失败")}catch{ElementPlus.ElMessage.error("修改失败，请检查网络连接")}finally{m.value=!1}}return{loginForm:P,logining:F,guestLogining:q,showChangePassword:r,changePasswordForm:i,changingPassword:m,showSetupWizard:H,setupForm:O,setupStep:K,checkSetupWizard:s,completeSetupWizard:J,resetSetupWizard:o,handleLogin:y,handleGuestLogin:L,handleLogout:z,doChangePassword:ee}}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.watch={register:function(a){const{watch:t}=Vue;let g=null;const{strategyFilter:e,currentView:u,statusFilter:f,currentPage:I,currentSubPage:h,menus:d,currentUser:k,strategyFilterCounts:l,lazyTick:C,dates:x,selectedDate:D,consensus:S,loadConsensusData:P,fetchMerrillClock:F,fetchMarketData:q,loadWatchlist:r,loadAiHistory:i,preloadWatchlistKline:m,loadChatHistory:H,loadSystemStatus:O,checkTushareConnection:K,loadSysMonitor:s,loadAnalytics:J,loadHealthDetail:o,loadHealthMetrics:y,loadAiUsage:L,loadFactCheck:z,loadAutoEvaluateConfig:ee,loadDatasourceConfig:Y,loadFeishuConfig:$,loadAiConfig:R,loadAiVendors:j,loadRateLimit:A,loadDataRefreshConfig:w,loadBackups:E,loadAllGroups:oe,loadUsers:U,stockDetailTab:b,stockDetailVisible:c,stockKlineLoaded:M,loadStockKline:p,currentKlinePeriod:W,showMerrillDetail:ue,indexDetailVisible:te,restoreDialogFocus:T}=a;t(e,G=>{localStorage.setItem("quant_strategy_filter_selected",JSON.stringify(G.selected)),localStorage.setItem("quant_strategy_filter_mode",G.mode)},{deep:!0}),t([u,f],(G,re)=>{G[0]!==re[0]&&P()}),t([I,h],([G,re])=>{var fe;try{const Z=!(G==="calendar"&&re==="calendar")&&re||"",de=Z?"#"+G+"/"+Z:"#"+G;window.location.hash!==de&&(window.location.hash=de)}catch{}if(re&&localStorage.setItem("quant_last_subpage",re),!re&&d.value.find(Te=>Te.key===G)){const Te=d.value.find(Z=>Z.key===G);Te&&Te.subPages.length>0&&(h.value=Te.subPages[0])}if(G==="shortterm"&&re==="market-review"){const Te=window.__lazyLoaders&&window.__lazyLoaders.research;Te&&Te().then(function(){window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(function(Z){Z&&Z.name&&!Z.__quantRegistered&&(window.__quantApp.component(Z.name,Z),Z.__quantRegistered=!0)}),C&&C.value++}).catch(function(Z){console.warn("[lazy] research 组件补加载失败",Z)})}G==="calendar"&&re==="calendar"&&(!S.value||S.value.length===0)&&(x.value.length>0&&!D.value&&(D.value=x.value[x.value.length-1]||""),setTimeout(P,50)),G==="calendar"&&re==="pool"&&(!S.value||S.value.length===0)&&(x.value.length>0&&!D.value&&(D.value=x.value[x.value.length-1]||""),setTimeout(P,50)),G==="strategies"&&(re==="merrill"&&F(),re==="market"&&q(),re==="consensus"&&(!S.value||S.value.length===0)&&setTimeout(P,50)),G==="ai"&&(re==="watchlist"&&(r(),i(),setTimeout(m,500)),re==="history"&&i(),re==="overview"&&(i(),r()),re==="chat_history"&&H()),(G==="system"||G==="ops")&&((fe=k.value)==null?void 0:fe.role)==="admin"&&(re==="status"&&(O(),K()),re==="health"&&(o(),y()),re==="schedule"&&o(),re==="guard"&&z(),re==="usage"&&(s(),J(),o(),y(),L(),z()),re==="autoeval"&&(ee(),j()),re==="datasource"&&Y(),re==="feature"&&($(),R(),A(),w(),E()),re==="user"&&(oe(),U())),(G==="system"||G==="ops")&&re==="usage"?g||(g=setInterval(()=>{s(),J(),o(),y(),L()},3e4)):g&&(clearInterval(g),g=null)}),t(b,(G,re)=>{G==="kline"&&re&&re!=="kline"&&c.value&&(M.value=!1,setTimeout(async()=>{!await p(W.value)&&c.value&&b.value==="kline"&&setTimeout(()=>p(W.value),800)},50))}),t(ue,G=>{G||(document.documentElement.style.overflow="",document.body.style.overflow="")}),t([c,te],([G,re])=>{!G&&!re&&T()})}}})();(function(){window.__quantAppLogic=window.__quantAppLogic||{},window.__quantAppLogic.lifecycle={create:function(a){const{handleGlobalKeydown:t,applyTheme:g,menus:e,currentPage:u,currentSubPage:f,currentView:I,currentKlinePeriod:h,selectedDate:d,dates:k,loadDates:l,loadConsensusData:C,loadDashboardCached:x,appVersion:D,themes:S,fetchMarketData:P,fetchMerrillStages:F,fetchMerrillClock:q,loadAiConfig:r,loadAiVendors:i,loadAiCatalog:m,currentUser:H,loadUserConfig:O,loadAutoEvaluateConfig:K,loadGroupConfig:s,loadUsers:J,loadAllGroups:o,loadAiHistory:y}=a;return{runOnMounted:async()=>{window.addEventListener("keydown",t);function L(U,b){const c={daily:"day",weekly:"week",monthly:"month",yearly:"year"};if(U==="calendar"&&c[b])return u.value="calendar",f.value="calendar",c[b]&&(I.value=c[b]),!0;if(U==="research"&&(b==="strategy-write"||b==="custom-write")){u.value="research",f.value="strategy-manage";try{localStorage.setItem("quant_strategy_mode",b==="custom-write"?"custom":"template")}catch{}return!0}return!1}window.addEventListener("hashchange",function(){const U=window.location.hash||"";if(!U||U==="#")return;const b=U.replace(/^#\/?/,"").split("/"),c=b[0],M=b[1]||"",p=e.value.find(function(W){return W.key===c});if(p&&!L(c,M)){if(!M)u.value=c,f.value=p.subPages[0]||"";else if(p.subPages.indexOf(M)>=0)u.value=c,f.value=M;else return;window.__lazyLoaders&&window.__lazyLoaders[c]&&window.__quantGoPage&&window.__quantGoPage(c,f.value).catch(function(){})}});const z=(U,b=3e3,c="")=>{const M=new Promise((p,W)=>setTimeout(()=>W(new Error("timeout")),b));return Promise.race([U,M]).catch(p=>{console.warn(`[init] ${c||"task"} failed:`,p.message)})},ee=localStorage.getItem("quant_theme"),Y=window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{};if(window.__quantModules&&window.__quantModules.themes){const U=window.__quantModules.themes;let b=Y.theme||"system",c=Y.theme_hue!=null&&Y.theme_hue!==""?Y.theme_hue:null;const M=typeof U.migrateLegacyTheme=="function"?U.migrateLegacyTheme():null;c==null&&M&&(b=M.mode,c=M.hue),c==null&&(c=45),g(b,c)}else ee&&g(ee);await s().catch(function(){}),function(){var U=window.location.hash||"",b=!1;if(U&&U!=="#"){var c=U.replace(/^#\/?/,"").split("/"),M=c[0],p=c[1]||"",W=e.value.find(function(re){return re.key===M});W&&(L(M,p)||(u.value=M,p&&W.subPages.indexOf(p)>=0?f.value=p:p||(f.value=W.subPages[0]||"")),b=!0)}if(!b){var ue=localStorage.getItem("quant_last_page");ue&&e.value.some(function(re){return re.key===ue})?u.value=ue:Y.default_view&&e.value.some(function(re){return re.key===Y.default_view})&&(u.value=Y.default_view);var te=localStorage.getItem("quant_last_subpage");te&&(f.value=te)}var T=localStorage.getItem("quant_last_date");T&&(d.value=T);var G=localStorage.getItem("quant_last_view");G&&(I.value=G),window.__lazyLoaders&&window.__lazyLoaders[u.value]&&window.__quantGoPage&&window.__quantGoPage(u.value,f.value).catch(function(){})}(),fetch("/api/health").then(U=>U.json()).then(U=>{U.version&&(D.value=U.version)}).catch(()=>{});const $=localStorage.getItem("quant_user"),R=localStorage.getItem("quant_token"),j=!!($&&R),A=Promise.all([Promise.resolve().then(()=>{S.value={light:{name:"浅色",color:"#f5f3ea"},dark:{name:"深色",color:"#0f0f23"}}}),z(P(),3e3,"marketData"),z(F(),2e3,"merrillStages")]).then(()=>{z(q(),3e3,"merrillClock")});if(r(),m(),j&&H.value&&i(),!j||!H.value){await A;return}let w=!0;try{w=(await fetch("/api/users/me")).ok}catch{w=!1}if(!w){console.warn("[init] token expired, clearing session"),localStorage.removeItem("quant_user"),localStorage.removeItem("quant_token"),H.value=null;return}if(H.value){const U=H.value.theme||"",b=window.__quantModules&&window.__quantModules.themes;let c=Y.theme||"system",M=Y.theme_hue!=null&&Y.theme_hue!==""?Y.theme_hue:null;if(M==null&&b&&typeof b.migrateLegacyTheme=="function"){const p=b.migrateLegacyTheme();if(p)c=p.mode,M=p.hue;else if(U&&b.LEGACY_MAP&&b.LEGACY_MAP[U]){const W=b.LEGACY_MAP[U];c=W[0],M=W[1]}}M==null&&(M=45),g(c,M)}if(window.__quantModules&&window.__quantModules.preferences){const b=await window.__quantModules.preferences.loadPreferences();var E=localStorage.getItem("quant_last_page");!E&&b.default_view&&e.value.some(function(c){return c.key===b.default_view})&&(u.value=b.default_view),b.theme&&g(b.theme,b.theme_hue!=null&&b.theme_hue!==""?b.theme_hue:null),h&&(b.chart_period==="weekly"||b.chart_period==="monthly")&&(h.value=b.chart_period)}await Promise.all([z(O(),2e3,"userConfig"),z(l(),2e3,"dates")]),K().catch(()=>{}),s().catch(()=>{});const oe=u.value==="strategies"?z(x(),2e3,"dashboard"):z(C(),2e3,"consensus");await Promise.all([oe,z(J(),2e3,"users"),z(y(),2e3,"aiHistory")]),o().catch(()=>{})}}}}})();(function(){window.createAppLogic=function(){const{ref:a,computed:t,onMounted:g,onUnmounted:e,watch:u,nextTick:f}=Vue,I=a(!1),h=window.__quantModules&&window.__quantModules.i18n||{},d=h.SUPPORTED_LOCALES||["zh-CN","en"],k=window.__quantModules&&window.__quantModules.preferences&&(window.__quantModules.preferences.getLocal()||{}).language||"zh-CN",l=a(d.indexOf(k)!==-1?k:"zh-CN");typeof h.bindLocale=="function"&&h.bindLocale(l);const C=typeof h.t=="function"?h.t:function(V){return String(V)};function x(V){d.indexOf(V)!==-1&&(l.value=V,typeof h.setLocale=="function"&&h.setLocale(V),window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("language",V))}function D(V,ce){return window.__quantModules&&window.__quantModules.core&&window.__quantModules.core.sanitizeHtml?window.__quantModules.core.sanitizeHtml(V,ce):V==null?"":String(V)}function S(V){(V.key==="Enter"||V.key===" "||V.key==="Spacebar")&&(V.preventDefault(),V.currentTarget&&typeof V.currentTarget.click=="function"&&V.currentTarget.click())}let P=null;function F(){document.activeElement&&document.activeElement!==document.body&&(P=document.activeElement)}function q(){if(P&&P.isConnected)try{P.focus()}catch{}P=null}const r=a(typeof navigator<"u"?navigator.onLine:!0);typeof window<"u"&&(window.addEventListener("online",()=>{r.value=!0}),window.addEventListener("offline",()=>{r.value=!1})),window.addEventListener("beforeunload",V=>{if(I.value)return V.preventDefault(),V.returnValue="您有未保存的配置变更，确定要离开吗？",V.returnValue});function i(V="light"){typeof navigator<"u"&&navigator.vibrate&&(V==="light"?navigator.vibrate(10):V==="medium"?navigator.vibrate(20):V==="heavy"&&navigator.vibrate([10,30,10]))}const m=useMerrillClock(),{merrillData:H,merrillStagesConfig:O,showMerrillDetail:K,merrillDetailData:s,merrillClockConfig:J,merrillClockLastUpdated:o,merrillReevalResult:y,merrillReevalLoading:L,stages:z,indicatorList:ee,dimensionScoreList:Y,detailDimensionScoreList:$,confidenceColor:R,timelineStages:j,clockPosition:A,merrillProgressStyle:w,FULL_CYCLE_MONTHS:E,getStageAngle:oe,getCycleProgress:U,getCurrentStageMonths:b,getStageTotalMonths:c,isStageCompleted:M,getCharLabel:p,getAssetName:W,getRankColor:ue,fetchMerrillStages:te,fetchMerrillClock:T,loadMerrillTimeline:G,showTimelineStage:re,merrillTimeline:fe,timelineLoading:Te,showStageDetail:Z,saveMerrillClockConfig:de,doMerrillReevaluate:me,startAutoRefresh:pe,stopAutoRefresh:ye,merrillSnapshots:ae,merrillSnapshotsTotal:xe,fetchMerrillSnapshots:Pe}=m,ne=a(localStorage.getItem("sidebar_collapsed")==="1");function se(){ne.value=!ne.value,localStorage.setItem("sidebar_collapsed",ne.value?"1":"0")}const be=a(null),Ne=[{key:"strategies",name:"策略总览",iconName:"layout-dashboard",group:"research",subPages:["overview","merrill","market","consensus"]},{key:"calendar",name:"量化日历",iconName:"calendar",group:"research",subPages:["calendar","pool"]},{key:"ai",name:"智能评估",iconName:"bot",group:"research",subPages:["overview","focus","watchlist","history","evaluation-analysis","portfolio","chat_history"]},{key:"research",name:"策略研究",iconName:"flask-conical",group:"research",subPages:["research-overview","quant-research","strategy-manage","backtest","backtest-history"]},{key:"shortterm",name:"短线复盘",iconName:"zap",group:"research",subPages:["overview","market-review","ztpool","lhb","sector","intraday"]},{key:"ops",name:"系统状态",iconName:"activity",group:"platform",subPages:["status","health","schedule","usage","guard","datadict","execution"]},{key:"system",name:"系统配置",iconName:"settings",group:"platform",subPages:["config","feature","autoeval","datasource","user","about","notification"],guestSubPages:["config","about"]}],Ie=t(()=>{var Ye,Bt,Xt;const V=((Ye=he.value)==null?void 0:Ye.role)||"guest",ce=((Bt=he.value)==null?void 0:Bt.group)||V,ke=((Xt=be.value)==null?void 0:Xt[ce])||null;return Ne.map(jt=>{if(ke&&ke.visible_menus&&jt.key in ke.visible_menus&&!ke.visible_menus[jt.key])return null;const ha={...jt,name:C("nav."+jt.key)||jt.name};return ke!=null&&ke.visible_sub_pages&&(ha.subPages=jt.subPages.filter(os=>{const Td=jt.key+"."+os;return ke.visible_sub_pages[Td]!==!1})),jt.key==="system"&&V==="guest"&&jt.guestSubPages&&(ha.subPages=jt.guestSubPages),ha}).filter(Boolean)});async function We(){try{if(!localStorage.getItem("quant_token"))return;const ce=await fetch("/api/groups/my");if(ce.ok){const ke=await ce.json();be.value={[ke.group_id]:ke.group}}}catch(V){console.warn("loadGroupConfig:",V)}}const Ue=a("strategies"),yt=window.__quantModules&&window.__quantModules.navModeCore?window.__quantModules.navModeCore.readPrefs():{navMode:"toptab"},at=a(yt.navMode);function Rt(V){const ce=window.__quantModules&&window.__quantModules.navModeCore;at.value=ce?ce.normalizeNavMode(V):V==="tree"||V==="toptab"?V:"toptab",ce&&ce.writePrefs({navMode:at.value})}const Se=[{keys:"Ctrl+K",desc:"打开命令面板 (股票搜索/菜单/指令)"},{keys:"Ctrl+/",desc:"显示/隐藏快捷键帮助"},{keys:"1-5",desc:"切换导航页面 (非输入态)"},{keys:"R",desc:"刷新当前页 (策略/日历/AI, 非输入态)"},{keys:"← / →",desc:"日历页：上一 / 下一交易日"},{keys:"↑ / ↓",desc:"日历页：切换 日/周/月/年 视图"},{keys:"Ctrl+D",desc:"今日一屏 (直接跳转)"},{keys:"Ctrl+E",desc:"批量 AI 评估"},{keys:"Ctrl+G",desc:"加入组合 (跳转组合持仓)"},{keys:"Ctrl+H",desc:"打开评估历史"},{keys:"Ctrl+Shift+S",desc:"打开短线复盘"},{keys:"F5",desc:"刷新当前页 (同 R)"},{keys:"Ctrl+B",desc:"折叠/展开侧边栏"},{keys:"Ctrl+J",desc:"打开 AI 问股"}];function _e(V,ce=""){i("light"),Ue.value=V,Ze.value=ce,localStorage.setItem("quant_last_subpage",ce)}function Ae(){const V=Ie.value;if(!V||!V.length)return;if(!V.some(function(Fe){return Fe.key===Ue.value})){const Fe=V[0];console.info("[nav] 当前页已被用户组隐藏, 跳转至",Fe.key),Ue.value=Fe.key,Ze.value=Fe.subPages&&Fe.subPages[0]||"";return}const ke=V.find(function(Fe){return Fe.key===Ue.value});ke&&ke.subPages&&ke.subPages.length&&!ke.subPages.includes(Ze.value)&&(Ze.value=ke.subPages[0])}const Re=[{id:"multifactor",name:"多因子策略"},{id:"industry_rotation",name:"行业轮动"},{id:"index_enhance",name:"指数增强"},{id:"money_flow",name:"资金流策略"}],$e=a("multifactor"),Xe=a(null),et=a(1e5),Mt=a(!1),Tt=a(null);let ft=null,zt=null;async function Wt(){if(!localStorage.getItem("quant_token")){ElementPlus.ElMessage.warning("请先登录");return}const ce={initial_capital:et.value||1e5};Xe.value&&Xe.value.length===2&&(ce.start_date=Xe.value[0],ce.end_date=Xe.value[1]),Mt.value=!0,Tt.value=null;try{const ke=await fetch("/api/strategies/"+$e.value+"/backtest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ce)});if(!ke.ok){const Bt=await ke.json().catch(()=>({}));throw new Error(Bt.detail||"回测失败")}const Fe=await ke.json(),Ye=Fe.result||{};if(!Ye.success)throw new Error(Ye.message||"回测失败");Fe.data_degraded&&ElementPlus.ElMessage.warning("数据不可达, 结果基于降级数据"),Tt.value={total_return_pct:((Ye.total_return??0)*100).toFixed(2),annual_return_pct:((Ye.annual_return??0)*100).toFixed(2),max_drawdown_pct:((Ye.max_drawdown??0)*100).toFixed(2),sharpe_ratio:(Ye.sharpe_ratio??0).toFixed(2),win_rate:((Ye.win_rate??0)*100).toFixed(2),out_sample:Ye.outsample_total_return===void 0?"":((Ye.outsample_total_return??0)*100).toFixed(2),overfit_warning:Ye.overfit_warning||!1,message:Ye.message||""},Qt(Ye.equity_curve),ElementPlus.ElMessage.success("回测完成")}catch(ke){ElementPlus.ElMessage.error(ke.message||"回测失败")}finally{Mt.value=!1}}function Qt(V){const ce=document.getElementById("backtestEquityChart");if(!ce||!V||V.length===0)return;const ke=window.__quantModules&&window.__quantModules.charts&&typeof window.__quantModules.charts.ensureEcharts=="function"?window.__quantModules.charts.ensureEcharts:null,Fe=()=>{zt=V,ft&&(ft.dispose(),ft=null),ft=echarts.init(ce),ft.setOption(window.__quantModules.echartsTheme.getEChartsTheme());const Ye=V.map(Xt=>Xt.date||Xt[0]),Bt=V.map(Xt=>Xt.value??Xt[1]);ft.setOption({tooltip:{trigger:"axis"},grid:{left:56,right:16,top:24,bottom:40},xAxis:{type:"category",data:Ye,boundaryGap:!1},yAxis:{type:"value",scale:!0},dataZoom:[{type:"inside"}],series:[{name:"净值",type:"line",data:Bt,smooth:!0,symbol:"none",lineStyle:{width:2,color:getComputedStyle(document.documentElement).getPropertyValue("--primary-color").trim()||getComputedStyle(document.documentElement).getPropertyValue("--color-ai").trim()||"#6366f1"},areaStyle:{opacity:.1}}]})};ke?ke().then(Fe).catch(()=>{}):Fe()}window.__quantModules&&window.__quantModules.echartsTheme&&!window.__quantModules.echartsTheme.__appChartsRegistered&&(window.__quantModules.echartsTheme.__appChartsRegistered=!0,window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("stockKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){window.__quantModules.charts.redrawKline("indexKlineChart")}),window.__quantModules.echartsTheme.registerChart(function(){zt&&Qt(zt)}));const Ze=a("overview"),bt=t(()=>{const V=Ne.find(ce=>ce.key===Ue.value);return V?V.name:Ue.value}),Ut=a(0),ht=t(()=>{Ut.value;const V={strategies:"qc-strategies-page",calendar:"qc-calendar-page",ai:"qc-ai-page",research:"qc-research-page",shortterm:"qc-shortterm-page",ops:"qc-system-page",system:"qc-system-page"},ce=Ze.value;return Ue.value==="shortterm"&&ce==="market-review"?"qc-research-page":Ue.value==="ops"&&ce==="execution"?"qc-strategies-page":V[Ue.value]||""}),Gt=a(!1),qt=a({}),Je=a([]);a("");const At=a([{key:"day",name:"日视图"},{key:"week",name:"周视图"},{key:"month",name:"月视图"},{key:"year",name:"年视图"}]),kt=a("day"),Q=a("all"),he=a(null);u(Ie,function(){Ae()}),u([Ue,Ze],function(){const V=document.querySelector(".main-content");V&&(V.scrollTop=0)}),function(){if(typeof localStorage>"u")return;const V=localStorage.getItem("quant_user"),ce=localStorage.getItem("quant_token");if(V&&ce)try{he.value=JSON.parse(V)}catch{}}();const tt=a(!1),_t=a("kline"),lt=a(null),It=a(!1),ea=a(localStorage.getItem("qc_detail_mode")||"split"),na=a(window.innerWidth<=1024),oa=t(()=>ea.value==="split"&&!na.value);function ta(V){ea.value=V;try{localStorage.setItem("qc_detail_mode",V)}catch{}}window.addEventListener("resize",()=>{na.value=window.innerWidth<=1024});const $t=35,Kt=a(parseInt(localStorage.getItem("qc_split_width")||"",10)||null);function Nt(){typeof document<"u"&&document.documentElement.style.setProperty("--split-w",Kt.value?Kt.value+"px":$t+"%")}Nt();function Yt(V){const ce=Math.max(1,Math.min(V,2e3));Kt.value=ce,Nt();try{localStorage.setItem("qc_split_width",String(ce))}catch{}}function gt(V){if(Kt.value)return Kt.value;const ce=V?V.getBoundingClientRect().width:0;return Math.max(200,Math.floor(ce*$t/100))}let v=null;function X(V,ce){if(!ce||na.value)return;V.preventDefault();const ke=ce.getBoundingClientRect().width;v={startX:V.clientX,startW:gt(ce),minW:Math.max(200,Math.floor(ke*$t/100)),maxW:Math.floor(ke/2)},document.body.classList.add("qc-split-resizing")}function le(V){if(!v)return;const ce=V.clientX-v.startX;let ke=v.startW+ce;ke=Math.max(v.minW,Math.min(ke,v.maxW)),Kt.value=ke,Nt();try{localStorage.setItem("qc_split_width",String(ke))}catch{}}function De(){v&&(v=null,document.body.classList.remove("qc-split-resizing"))}typeof document<"u"&&(document.addEventListener("mousemove",le),document.addEventListener("mouseup",De));function Ve(V){const ce=V.target&&V.target.closest?V.target.closest("[data-split-resize]"):null;if(!ce)return;const ke=ce.closest("[data-split-root]");X(V,ke)}typeof document<"u"&&document.addEventListener("mousedown",Ve,!0);const Qe={overview:"概览","strategies.overview":"策略概览","ai.overview":"评估概览","research.research-overview":"研究概览",merrill:"美林时钟",market:"大盘行情",consensus:"策略共识榜",calendar:"量化日历",daily:"日视图",weekly:"周视图",monthly:"月视图",yearly:"年视图",pool:"股票池",watchlist:"我的自选",history:"评估历史",chat_history:"问股历史",focus:"重点跟踪","evaluation-analysis":"评估分析",portfolio:"组合持仓",execution:"执行看板","research-overview":"研究概览","quant-research":"量化研究","strategy-write":"策略编写","custom-write":"全新策略","strategy-manage":"策略管理",backtest:"策略回测","backtest-history":"回测记录","market-review":"每日复盘","shortterm.ztpool":"涨停复盘","shortterm.lhb":"龙虎榜",ztpool:"涨停复盘",lhb:"龙虎榜","shortterm.overview":"复盘看板",overview:"概览","shortterm.sector":"板块资金",sector:"板块资金","shortterm.intraday":"盘中核验",intraday:"盘中核验",status:"状态概览",config:"配置保存",health:"数据源健康",schedule:"调度任务",autoeval:"AI 服务",usage:"用量统计",guard:"AI 事实护栏",datasource:"数据源",feature:"基础配置",datadict:"数据字典",notification:"通知中心",user:"用户与权限",about:"关于"},Oe=a({});function rt(V,ce){return Qe[ce]||ce}function st(V){const ce=Ne.find(Fe=>Fe.key===V);if(!ce||!ce.subPages||!ce.subPages.length)return;if(!(Oe.value[V]||[]).length){const Fe=ce.subPages[0];Oe.value=Object.assign({},Oe.value,{[V]:[{subPage:Fe,title:rt(V,Fe)}]})}}function ct(V,ce){const ke=window.__quantModules&&window.__quantModules.tabsCore,Fe=rt(V,ce);if(ke){const Ye=ke.openTab(Oe.value,V,ce,Fe);Oe.value=Ye.groups}else{const Ye=Oe.value[V]||[];Ye.some(Bt=>Bt.subPage===ce)||(Oe.value=Object.assign({},Oe.value,{[V]:Ye.concat([{subPage:ce,title:Fe}])}))}_e(V,ce)}function Ot(V,ce){const ke=window.__quantModules&&window.__quantModules.tabsCore,Fe=Ze.value;let Ye=null;if(ke)Ye=ke.closeTab(Oe.value,V,ce,Fe),Oe.value=Ye.groups;else{const jt=Oe.value[V]||[];Oe.value=Object.assign({},Oe.value,{[V]:jt.filter(ha=>ha.subPage!==ce)})}if(!(Oe.value[V]||[]).length){st(V);const jt=Ne.find(os=>os.key===V),ha=jt&&jt.subPages&&jt.subPages[0];ha&&_e(V,ha);return}const Xt=Ye?Ye.nextActive:null;Xt&&_e(V,Xt)}function Dt(V,ce){if(!(Oe.value[V]||[]).some(Fe=>Fe.subPage===ce)){ct(V,ce);return}_e(V,ce)}u([Ue,Ze],([V,ce])=>{st(V);const ke=Oe.value[V]||[];ce&&!ke.some(Fe=>Fe.subPage===ce)&&(Oe.value=Object.assign({},Oe.value,{[V]:ke.concat([{subPage:ce,title:rt(V,ce)}])}))},{immediate:!0});const N=function(V){if(!(V.ctrlKey&&V.key==="Tab"))return;const ce=Ue.value,ke=Oe.value[ce]||[];if(ke.length<=1)return;V.preventDefault();const Fe=Ze.value,Ye=Math.max(0,ke.findIndex(jt=>jt.subPage===Fe)),Bt=V.shiftKey?(Ye-1+ke.length)%ke.length:(Ye+1)%ke.length,Xt=ke[Bt];Xt&&Dt(ce,Xt.subPage)};window.addEventListener("keydown",N);const ge=a({light:{name:"浅色",color:"#f5f3ea"},dark:{name:"深色",color:"#0f0f23"}}),Le=a("light"),Ee=[45,220,0,140,270,320],ze={45:"金色",220:"蓝色",0:"红色",140:"绿色",270:"紫色",320:"粉色"},He=a(45),mt=a(function(){const V=window.__quantModules&&window.__quantModules.preferences;return V&&V.getPreference&&V.getPreference("theme")||"system"}());(function(){const V=window.__quantModules&&window.__quantModules.preferences,ce=V&&V.getPreference&&V.getPreference("theme_hue");ce!=null&&ce!==""&&(He.value=parseInt(ce,10))})();const xt=a("comfortable");(function(){const V=window.__quantModules&&window.__quantModules.preferences;V&&V.applyDensity&&(xt.value=V.applyDensity()||"comfortable")})();function it(V){return"hsl("+V+", 75%, 42%)"}function Jt(V){return ze[V]||"自定义 "+V}const ya=a(""),ba=a([{key:"multifactor",name:"多因子策略"},{key:"smartbeta",name:"SmartBeta"},{key:"momentum",name:"动量策略"},{key:"meanreversion",name:"均值回归"},{key:"technical",name:"技术指标"},{key:"value",name:"价值投资"}]),ra=a({selected:JSON.parse(localStorage.getItem("quant_strategy_filter_selected")||'["多因子策略","行业轮动策略","指数增强策略","资金流策略"]'),mode:localStorage.getItem("quant_strategy_filter_mode")||"union"}),Pa=["多因子策略","行业轮动策略","指数增强策略","资金流策略"],da=a({day:[],week:[],month:[],year:[]}),Ra=a({});function ua(V,ce){let ke=null;window.__quantModules&&window.__quantModules.themes&&typeof window.__quantModules.themes.applyTheme=="function"&&(ke=window.__quantModules.themes.applyTheme(V,ce)),Le.value=ke&&ke.mode?ke.mode:V==="dark"||V==="dark-pro"?"dark":"light",Vue.nextTick(()=>{window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.refreshAllCharts&&window.__quantModules.echartsTheme.refreshAllCharts()})}function qa(V,ce){const ke=window.__quantModules&&window.__quantModules.preferences;if(!(!ke||!ke.setPreferences))try{ke.setPreferences({theme:V}),ce!=null&&ce!==""&&ke.setPreferences({theme_hue:parseInt(ce,10)})}catch{}}function Ft(V,ce){ua(V,ce),ce!=null&&ce!==""&&(He.value=parseInt(ce,10));const ke=window.__quantModules&&window.__quantModules.themes;let Fe=V;ke&&ke.LEGACY_MAP&&ke.LEGACY_MAP[V]&&(Fe=ke.LEGACY_MAP[V][0]),Fe==="light"||Fe==="dark"||Fe==="system"?mt.value=Fe:mt.value=Le.value,Fe==="system"&&(Fe=Le.value),qa(Fe,ce),he.value&&(fetch(`/api/users/${he.value.username}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({theme:Fe})}),he.value.theme=Fe,localStorage.setItem("quant_user",JSON.stringify(he.value)))}function wa(V){const ce=window.__quantModules&&window.__quantModules.preferences,ke=ce&&ce.getPreference?ce.getPreference("theme_hue"):null;Ft(V,ke)}function Ea(V){const ce=window.__quantModules&&window.__quantModules.preferences;!ce||!ce.applyDensity||(xt.value=ce.applyDensity(V)||"comfortable",ce.setPreference&&ce.setPreference("info_density",xt.value))}function za(V){He.value=parseInt(V,10);const ce=window.__quantModules&&window.__quantModules.preferences,ke=ce&&ce.getPreference&&ce.getPreference("theme")||"light";Ft(ke,He.value)}const ka=a(function(){try{return(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).kline_show_minutes==="show"}catch{return!1}}());function _(V){ka.value=!!V;try{window.__quantModules&&window.__quantModules.preferences&&window.__quantModules.preferences.setPreference("kline_show_minutes",V?"show":"hide")}catch{}}const n=t(()=>{const V=[{label:"日线",value:"daily"},{label:"周线",value:"weekly"},{label:"月线",value:"monthly"},{label:"季线",value:"quarterly"},{label:"年线",value:"yearly"}];return ka.value?[{label:"60分钟",value:"60min"},{label:"30分钟",value:"30min"},{label:"15分钟",value:"15min"},...V]:V}),B=a("daily");(function(){try{const ce=(window.__quantModules&&window.__quantModules.preferences?window.__quantModules.preferences.getLocal():{}).chart_period;(ce==="weekly"||ce==="monthly")&&(B.value=ce)}catch{}})();const ie=a(!1),Ce=a(""),Me=a(!1),pt=a(!1),Ge=a({K线:!0,MA5:!0,MA10:!0,MA20:!0,MA60:!0}),St=["MA5","MA10","MA20","MA60"],aa=a(!1);let Pt=0;async function sa(V){if(!lt.value)return!1;const ce=++Pt;ie.value=!0,B.value=V;try{const Fe=await(await fetch(`/api/market/kline/${lt.value.stock}?period=${V}&limit=60`)).json();if(!Fe.success||!Fe.data)throw new Error(Fe.message||"数据获取失败");return Ce.value=Fe.degraded_from?"分钟数据("+Fe.degraded_from+")暂不可用, 已降级展示日线":"",$s(lt.value.stock),ce!==Pt?!1:(_t.value!=="kline"||(pt.value=!0,await f(),window.__quantModules.charts.renderKlineTo("stockKlineChart",Fe.data,V,!1,{isMobile:ms.value,onLegend:Ye=>{Object.keys(Ge.value).forEach(Bt=>{Bt in Ye&&(Ge.value[Bt]=!!Ye[Bt])})}}),ga()),!0)}catch(ke){return console.error("[kline] 加载失败:",lt.value&&lt.value.stock,V,ke),_t.value==="kline"&&(pt.value=!1,Ce.value="",ElementPlus.ElMessage.error("K线加载失败: "+(ke&&ke.message?ke.message:"数据源不可达，请重试"))),!1}finally{ie.value=!1}}async function ia(V){if(Ua.value){Me.value=!0,B.value=V;try{const ke=await(await fetch(`/api/market/kline/${Ua.value.code}?period=${V}&limit=60`)).json();if(!ke.success||!ke.data)throw new Error(ke.message||"数据获取失败");aa.value=!0,await f(),window.__quantModules.charts.renderKlineTo("indexKlineChart",ke.data,V,!0,{isMobile:ms.value,onLegend:Fe=>{Object.keys(Ge.value).forEach(Ye=>{Ye in Fe&&(Ge.value[Ye]=!!Fe[Ye])})}}),ga()}catch{ElementPlus.ElMessage.error("指数K线加载失败")}finally{Me.value=!1}}}async function Ct(V){if(!pt.value){ElementPlus.ElMessage.info('请先点击"加载K线"按钮');return}await sa(V)}async function nt(V){if(!aa.value){ElementPlus.ElMessage.info("请先加载K线");return}await ia(V)}function Ht(V){const ce=(tt.value?window.__quantModules.charts.getKlineChart("stockKlineChart"):null)||(Wa.value?window.__quantModules.charts.getKlineChart("indexKlineChart"):null);ce&&ce.dispatchAction({type:"legendToggleSelect",name:V})}function ga(){["K线","MA5","MA10","MA20","MA60"].forEach(V=>{Ge.value[V]=!0})}async function wt(){const V=await fetch("/api/system/metrics");if(!V.ok)throw new Error("metrics "+V.status);const ce=await V.json(),ke=Array.isArray(ce)?ce:ce&&ce.data_sources||[];Je.value=ke}const Ia=()=>ls,dn=()=>Es,un=()=>Ko,vn=()=>Aa,mn=()=>ts,pn=window.__quantAppLogic.data.create({currentView:kt,statusFilter:Q,dashboardData:qt,loadHealthMetrics:wt,getLoadDashboardData:Ia,getLastRefreshTime:dn,getFetchPoolSignals:un}),{loading:fn,loadingView:gn,viewCache:hn,dates:Na,selectedDate:la,lastLoadTime:yn,consensus:_a,viewNote:bn,loadDates:cs,refreshCalendarData:ds,exportCSV:us,loadConsensusData:Ma,loadDashboardCached:Oa}=pn,wn=window.__quantAppLogic.market.create({currentKlinePeriod:B,loadIndexKline:ia,rememberDialogTrigger:F,menus:Ie,currentPage:Ue,currentSubPage:Ze,stockDetail:lt,selectedDate:la}),{marketData:kn,indexDetailVisible:Wa,indexDetail:Ua,indexAiResult:_n,indexAiLoading:xn,fetchMarketData:Ga,showIndexDetail:Sn,loadCachedIndexEval:Cn,doIndexAiEvaluate:qn,disposeStockKline:vs,isMobile:ms,zoomKlineRange:En,scoreAnimating:Mn,scoreDelta:Tn,scorePulse:Dn,refreshStockScore:Ya,animateScoreEntrance:Ja,onTouchStart:Pn,onTouchEnd:Rn}=wn,zn=window.__quantAppLogic.ops.create({navigateTo:_e,currentPage:Ue,currentSubPage:Ze}),{feishuConfig:ps,feishuTestStatus:An,feishuTestMessage:Ln,testFeishuWebhook:In,saveFeishuConfig:Nn,aiFabHidden:On,openAiFab:fs,strategyRecommendations:jn,aiUsage:Vn,loadStrategyRecommendations:gs,loadAiUsage:Qa,sysMonitor:Fn,analyticsRank:Hn,analyticsDays:Bn,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:Kn,loadHealthDetail:bs,reviewTriggering:Wn,triggerMarketReview:Un,factCheck:Gn,factCheckRunning:Yn,loadFactCheck:ws,triggerFactCheck:Jn,backups:Qn,backupCreating:$n,loadBackups:ks,createBackup:Xn,restoreBackup:Zn,reportExporting:ei,reportExportMsg:ti,exportReport:ai,tourVisible:si,tourStep:ni,tourSteps:ii,maybeShowTour:li,skipTour:oi,finishTour:ri,feedbackText:ci,feedbackSubmitting:di,submitFeedback:ui}=zn,vi=window.__quantAppLogic.nav.create({currentView:kt,selectedDate:la,dates:Na,loadConsensusData:Ma,hapticFeedback:i}),{viewUnit:mi,datePickerType:pi,dateFormat:fi,canNavPrev:gi,canNavNext:hi,switchView:_s,navigateDate:xs,disabledDate:yi,onDateChange:bi}=vi,wi=window.__quantAppLogic.keys.create({menus:Ie,subPageNames:Qe,navigateTo:_e,currentPage:Ue,currentView:kt,navigateDate:xs,switchView:_s,getLoadDashboardData:Ia,refreshCalendarData:ds,getLoadAiHistory:vn,exportCSV:us,getShowBatchEvaluate:mn,openAiFab:fs,toggleSidebar:se,showStockDetail:Cs}),{searchQuery:ki,searchStocks:_i,onSearchSelect:xi,shortcutHelpVisible:Si,commandPaletteVisible:Ci,handleGlobalKeydown:Ss}=wi;let ja=0;async function Cs(V){const ce=++ja;F(),window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(V,""),Xa.value=null,B.value="daily",pt.value=!1,_t.value="kline",lt.value=null,It.value=!0,window.__quantModules.charts.disposeKline("stockKlineChart"),tt.value=!0,f(()=>Ja());try{const ke=await fetch(`/api/calendar/stock/${V}?date=${la.value}`);if(ce!==ja)return;lt.value=await ke.json(),lt.value&&lt.value.name&&window.__quantModules&&window.__quantModules.recent&&window.__quantModules.recent.recordViewed(V,lt.value.name)}catch{if(ce!==ja)return;ElementPlus.ElMessage.error("加载失败"),lt.value={stock:V,name:"",total_days:0}}finally{ce===ja&&(It.value=!1)}setTimeout(async()=>{await sa("daily"),Ya()},500),as(V)}const qi={强烈推荐:"var(--danger-text)",推荐:"var(--success-text)",谨慎推荐:"var(--warning-text)",中性:"var(--info-text)",观望:"var(--text-tertiary)",买入:"var(--success-text)",持有:"var(--warning-text)",减仓:"var(--danger-text)",卖出:"var(--danger-text)"},Ei={强烈推荐:"var(--badge-danger-bg)",推荐:"var(--badge-success-bg)",谨慎推荐:"var(--badge-warning-bg)",中性:"var(--badge-info-bg)",观望:"var(--bg-hover)",买入:"var(--badge-success-bg)",持有:"var(--badge-warning-bg)",减仓:"var(--badge-danger-bg)",卖出:"var(--badge-danger-bg)"};function Mi(V){return qi[V]||"var(--text-tertiary)"}function Ti(V){return Ei[V]||"var(--bg-hover)"}const Di=window.__quantModules&&window.__quantModules["ai-chat"]?window.__quantModules["ai-chat"].create({stockKlineLoaded:pt,stockDetailVisible:tt,stockDetailTab:_t,stockDetail:lt,disposeStockKline:vs}):{},{chatSessions:Pi,chatHistoryView:Ri,selectedChatIds:zi,expandedChatDates:Ai,expandedChatMonths:Li,expandedChatStocks:Ii,chatHistoryLoading:Ni,chatHistoryError:Oi,allChatSessionsFlat:ji,chatGroupedByDate:Vi,chatGroupedByMonth:Fi,chatGroupedByStock:Hi,toggleSelectChat:Bi,toggleSelectChatDate:Ki,toggleSelectChatMonth:Wi,toggleSelectChatStock:Ui,toggleChatDateExpand:Gi,toggleChatMonthExpand:Yi,toggleChatStockExpand:Ji,selectAllChatSessions:Qi,deleteSelectedChatSessions:$i,viewChatSession:Xi,loadChatHistory:qs,deleteChatSession:Zi,renderMarkdown:el,stockChatInput:tl,stockChatMessages:al,stockChatLoading:sl,stockChatError:nl,askStockSend:il,askStockQuick:ll}=Di,ol=window.__quantModules&&window.__quantModules.users?window.__quantModules.users.create({currentUser:he,applyTheme:ua,allMenuDefs:Ne,loadGroupConfig:We}):{},{userList:rl,userSearch:cl,groupFilter:dl,userPageTab:ul,expandedGroups:vl,addMemberGroupMap:ml,filteredUsers:pl,toggleGroupExpand:fl,removeMemberFromGroupInline:gl,addMemberToGroupInline:hl,changeUserGroup:yl,showAddUser:bl,editingUser:wl,userForm:kl,savingUser:_l,editingGroup:xl,menuConfigDialog:Sl,memberDialog:Cl,groupEditForm:ql,subPageCache:El,showAddGroup:Ml,addGroupForm:Tl,savingGroup:Dl,groupMembers:Pl,addMemberUsername:Rl,selectedMemberGroup:zl,subPageSectionExpanded:Al,toggleSubPageSection:Ll,getGroupMemberCount:Il,getMenuEnabledCount:Nl,groupCount:Ol,openMemberManager:jl,loadGroupMembers:Vl,addMemberToGroup:Fl,removeMemberFromGroup:Hl,availableUsersForGroup:Bl,onParentToggle:Kl,openMenuConfig:Wl,saveMenuConfig:Ul,deleteGroupConfig:Gl,createGroup:Yl,allGroups:Jl,getGroupName:Ql,loadAllGroups:$a,loadUsers:Va,editUser:$l,saveUser:Xl,deleteUser:Zl,toggleUserEnabled:eo,resetUserPassword:to}=ol,ao=window.__quantModules&&window.__quantModules["stock-pool"]?window.__quantModules["stock-pool"].create({consensus:_a,currentPage:Ue,currentSubPage:Ze,dashboardData:qt,searchKeyword:ya,statusFilter:Q,strategyFilter:ra,strategyFilterCounts:da}):{},{applyStrategyFilter:zf,statusCounts:so,stockPool:no,strategyDistribution:io,strategyPreviewCount:lo,saveStrategyFilter:oo,filteredConsensusRank:ro,currentPoolSize:co,filteredStrategyCounts:uo,poolChangeBadge:vo,timeBarPercent:mo,lastRefreshTime:Es,timeSinceRefresh:po,navigateToStrategyFilter:fo}=ao,go=window.__quantModules&&window.__quantModules.ai?window.__quantModules.ai.create({configChanged:I,consensus:_a}):{},{aiResult:Xa,lastEvalTime:ho,evalHistoryComparison:yo,checklistItems:bo,aiHistory:Ms,selectedHistoryIds:Ts,expandedDates:Ds,expandedMonths:wo,expandedStocks:Ps,poolSignals:ko,toggleMonthExpand:_o,aiHistoryView:xo,selectedWatchlistCodes:Rs,showAutoEvaluateSettings:zs,savingConfig:As,autoEvaluateScope:Ls,aiVendors:So,aiCatalog:Co,aiModelsError:qo,testingAllModels:Eo,savingAiModels:Mo,loadAiVendors:Fa,loadAiCatalog:Is,saveAiVendors:Ns,saveAiModels:To,testVendorModel:Do,testAllVendorModels:Po,fetchVendorModels:Ro,addVendorFromCatalog:zo,addCustomVendor:Ao,addVendorModel:Lo,removeVendorModel:Io,removeVendor:No,toggleVendorKeyReveal:Oo,toggleVendorEdit:jo,autoEvaluateConfig:Za,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,showBatchEvaluate:ts,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,aiConfig:Js,selectedPreset:Vo,providerInfo:Fo,aiPresets:Af,applyPreset:Ho,onProviderChange:Bo,fetchPoolSignals:Ko,cancelPoolSignals:Qs,loadLastEvaluation:as}=go,Wo=window.__quantModules&&window.__quantModules.watchlist?window.__quantModules.watchlist.create({currentUser:he,selectedDate:la,stockDetail:lt,stockDetailTab:_t,stockDetailVisible:tt,stockDetailLoading:It,stockKlineLoaded:pt,viewCache:hn,animateScoreEntrance:Ja,loadStockKline:sa,refreshStockScore:Ya,disposeStockKline:vs,aiHistory:Ms,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,aiResult:Xa,loadLastEvaluation:as,autoEvaluateConfig:Za,autoEvaluateScope:Ls,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,expandedDates:Ds,expandedStocks:Ps,savingConfig:As,selectedHistoryIds:Ts,selectedWatchlistCodes:Rs,showAutoEvaluateSettings:zs,showBatchEvaluate:ts}):{},{quickEvalStock:Uo,evalStrategy:Go,watchlistSort:Yo,watchlist:Jo,watchlistCodes:Qo,sortedWatchlist:$o,getWatchlistScore:Xo,getLatestScore:Lf,addSearchResult:Zo,evaluatedCodes:er,klineLoadedCodes:tr,markKlineLoaded:$s,watchlistSearch:ar,watchlistResults:sr,watchlistSearching:nr,dataRefreshConfig:ir,dataRefreshReloading:lr,dataRefreshSaving:or,aiHistoryLoading:rr,aiHistoryError:cr,aiHistoryTotal:dr,aiHistoryLoadingMore:ur,hasMoreAiHistory:vr,loadMoreAiHistory:mr,watchlistLoading:pr,doAiEvaluate:fr,loadAiHistory:Aa,deleteSingleHistory:gr,toggleSelectHistory:hr,clearSelection:yr,clearWatchlistSelection:br,batchReevaluateHistory:wr,batchAddToWatchlist:kr,batchRemoveWatchlist:_r,toggleSelectWatchlist:xr,selectAllHistory:Sr,selectAllWatchlist:Cr,deleteSelectedHistory:qr,loadAutoEvaluateConfig:Xs,saveAutoEvaluateConfig:Er,loadWatchlist:Zs,addToWatchlist:Mr,removeFromWatchlist:Tr,clearWatchlist:Dr,toggleWatchlist:Pr,showStockKline:Rr,preloadingKline:zr,preloadWatchlistKline:en,watchlistEvaluate:Ar,batchEvaluateWatchlist:Lr,batchEvaluateSelected:Ir,searchStockForWatchlist:Nr,loadDataRefreshConfig:tn,saveDataRefreshConfig:Or,triggerDataReload:jr,triggerDataPull:Vr,dataPullRunning:Fr,groupedByDate:Hr,aiHistoryByStock:Br,groupedByMonth:Kr,aiHistoryStockCount:Wr,scoreDistribution:Ur,quickEvaluate:Gr,toggleDateExpand:Yr,toggleSelectDate:Jr,toggleSelectMonth:Qr,toggleStockExpand:$r,toggleSelectStock:Xr,registerTrendChart:Zr,viewAiResult:ec,doBatchEvaluate:tc,realtimeQuotes:ac,realtimeDegraded:sc,realtimeWsState:nc,connectRealtimeQuotes:ic,disconnectRealtimeQuotes:lc,quoteWarningFor:oc,realtimeQuoteColor:rc,realtimePriceText:cc,realtimePctText:dc,realtimeRatioText:uc,REALTIME_DEGRADED_TEXT:vc,REALTIME_FALLBACK_TEXT:mc}=Wo,pc=window.__quantModules&&window.__quantModules.backtest?window.__quantModules.backtest.create({backtestStrategies:Re}):{},{btStrategyOptions:fc,btSelectedStrategies:gc,toggleBtStrategy:hc,btDateRange:yc,btCapital:bc,btCommissionRate:wc,btIncludeBenchmark:kc,btRunning:_c,btResult:xc,btError:Sc,btMetrics:Cc,btAnnualReturns:qc,btTrades:Ec,btStrategyMetricsRows:Mc,btDrawdownRegion:Tc,runBacktestWorkbench:Dc,exportBacktestCSV:Pc,registerBacktestNavChart:Rc,btFmtNum:zc}=pc,Ac=window.__quantModules&&window.__quantModules.system?window.__quantModules.system.create({configChanged:I,aiConfig:Js,aiLoading:es,feishuConfig:ps,currentTheme:Le,changeTheme:Ft,autoEvaluateConfig:Za,currentUser:he,strategyFilter:ra,applyTheme:ua,dashboardData:qt,lastRefreshTime:Es,saveAiModels:To}):{},{configSaving:Lc,globalConfigDirty:Ic,lastSavedTime:Nc,feishuConfigOriginal:If,aiConfigOriginal:Nf,tushareConfigOriginal:Of,tushareConfig:Oc,tushareStatus:jc,datasourceConfig:Vc,datasourceStatus:Fc,syncingData:Hc,stockCount:Bc,tradeDateCount:Kc,aiStatus:Wc,appVersion:an,showImportDialog:Uc,rateLimitConfig:Gc,rateLimitDirty:Yc,rateLimitSaving:Jc,loadRateLimit:ss,saveRateLimit:Qc,saveAiConfig:$c,testAiApi:Xc,exportConfig:Zc,importConfig:ed,saveAllConfig:td,resetAllConfig:ad,testTushareConnection:sd,checkTushareConnection:Ha,syncStockData:nd,loadTushareConfig:sn,loadDatasourceConfig:nn,saveDatasourceConfig:id,testDatasource:ld,toggleDatasourceKeyReveal:od,toggleDatasourceEdit:rd,loadFeishuConfig:ns,loadAiConfig:Ba,loadUserConfig:ln,loadSystemStatus:is,loadDashboardData:ls}=Ac,cd=window.__quantAppLogic.auth.create({currentUser:he,loadUserConfig:ln,loadDates:cs,loadDashboardData:ls,loadDashboardCached:Oa,loadHealthMetrics:wt,loadConsensusData:Ma,applyTheme:ua,maybeShowTour:li,loadAiVendors:Fa,loadGroupConfig:We,groupsConfig:be}),{loginForm:dd,logining:ud,guestLogining:vd,showChangePassword:md,changePasswordForm:pd,changingPassword:fd,showSetupWizard:gd,setupForm:hd,setupStep:yd,checkSetupWizard:bd,completeSetupWizard:wd,resetSetupWizard:kd,handleLogin:_d,handleGuestLogin:xd,handleLogout:Sd,doChangePassword:Cd}=cd;window.__quantAppLogic.watch.register({strategyFilter:ra,currentView:kt,statusFilter:Q,currentPage:Ue,currentSubPage:Ze,menus:Ie,currentUser:he,strategyFilterCounts:da,lazyTick:Ut,dates:Na,selectedDate:la,consensus:_a,loadConsensusData:Ma,fetchMerrillClock:T,fetchMarketData:Ga,loadWatchlist:Zs,loadAiHistory:Aa,preloadWatchlistKline:en,loadChatHistory:qs,loadSystemStatus:is,checkTushareConnection:Ha,loadSysMonitor:hs,loadAnalytics:ys,loadHealthDetail:bs,loadHealthMetrics:wt,loadAiUsage:Qa,loadFactCheck:ws,loadAutoEvaluateConfig:Xs,loadDatasourceConfig:nn,loadFeishuConfig:ns,loadAiConfig:Ba,loadAiVendors:Fa,loadRateLimit:ss,loadDataRefreshConfig:tn,loadBackups:ks,loadAllGroups:$a,loadUsers:Va,stockDetailTab:_t,stockDetailVisible:tt,stockKlineLoaded:pt,loadStockKline:sa,currentKlinePeriod:B,showMerrillDetail:K,indexDetailVisible:Wa,restoreDialogFocus:q});const qd=window.__quantAppLogic.lifecycle.create({handleGlobalKeydown:Ss,applyTheme:ua,menus:Ie,currentPage:Ue,currentSubPage:Ze,currentView:kt,currentKlinePeriod:B,selectedDate:la,dates:Na,loadDates:cs,loadConsensusData:Ma,loadDashboardCached:Oa,appVersion:an,themes:ge,fetchMarketData:Ga,fetchMerrillStages:te,fetchMerrillClock:T,loadMerrillTimeline:G,showTimelineStage:re,merrillTimeline:fe,timelineLoading:Te,loadAiConfig:Ba,loadAiVendors:Fa,loadAiCatalog:Is,currentUser:he,loadUserConfig:ln,loadAutoEvaluateConfig:Xs,loadGroupConfig:We,loadUsers:Va,loadAllGroups:$a,loadAiHistory:Aa}),{runOnMounted:Ed}=qd;window.__quantGoPage=async(V,ce)=>{try{const ke=window.__lazyLoaders&&window.__lazyLoaders[V];ke&&await ke()}catch(ke){console.warn("[lazy] 页面组件加载失败",V,ke)}window.__quantApp&&window.__quantComponents&&Object.values(window.__quantComponents).forEach(ke=>{ke&&ke.name&&!ke.__quantRegistered&&(window.__quantApp.component(ke.name,ke),ke.__quantRegistered=!0)}),Ut&&Ut.value++,Ue.value=V,ce&&(Ze.value=ce)};let Ta;u(Ue,async V=>{var ce;i("light");try{const ke=Ne.find(function(Fe){return Fe.key===V});document.title=(ke?ke.name+" - ":"")+"量化日历"}catch{}localStorage.setItem("quant_last_page",V),V!=="calendar"&&typeof Qs=="function"&&Qs();try{fetch("/api/analytics/page",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page:V})}).catch(()=>{})}catch(ke){console.warn("pageView track failed:",ke)}if(Ta&&(clearInterval(Ta),Ta=null),V==="strategies")await Oa(),Ta=setInterval(()=>{Oa().catch(()=>{})},5*60*1e3);else if(V==="calendar")la.value&&await Ma();else if(V==="ai")gs(),Qa(),await Aa();else if(V==="system"){if(!la.value){const Fe=await(await fetch("/api/dashboard")).json(),Ye=Fe.data||Fe;Ye.latest_date&&(la.value=Ye.latest_date)}if(la.value){const ke=["day","week","month","year"];for(const Fe of ke)try{const Bt=await(await fetch(`/api/view/${Fe}/${la.value}?status=all`)).json();da.value[Fe]=Bt.stocks||[]}catch(Ye){console.warn("loadConsensusData view load failed:",Ye)}(!_a.value||_a.value.length===0)&&(_a.value=da.value.day||[])}((ce=he.value)==null?void 0:ce.role)==="admin"&&(await Va(),await ns(),await sn(),await is(),await Ba(),await ss(),Ha(),window._tushareCheckTimer||(window._tushareCheckTimer=setInterval(Ha,36e5)))}}),g(async()=>{await Ed()}),pe(),G(),e(()=>{Ta&&clearInterval(Ta),window.removeEventListener("keydown",Ss),window.removeEventListener("keydown",N)});function Md(V,ce=2){return V==null||V===""||isNaN(Number(V))?"--":Number(V).toFixed(ce)}return{currentPage:Ue,pageComp:ht,currentSubPage:Ze,sidebarCollapsed:ne,menus:Ie,navMode:at,setNavMode:Rt,tabGroups:Oe,openTab:ct,closeTab:Ot,activateTab:Dt,fmtNum:Md,sanitizeHtml:D,keyClick:S,isOnline:r,currentUser:he,allMenuDefs:Ne,t:C,locale:l,changeLanguage:x,currentPageName:bt,subPageNames:Qe,searchQuery:ki,searchStocks:_i,onSearchSelect:xi,selectedDate:la,onDateChange:bi,disabledDate:yi,refreshCalendarData:ds,exportCSV:us,viewNote:bn,loading:fn,lastLoadTime:yn,resetSetupWizard:kd,showChangePassword:md,themes:ge,currentTheme:Le,changeTheme:Ft,changeThemeMode:wa,changeThemeHue:za,handleLogout:Sd,themeHues:Ee,themeHueNames:ze,themeHue:He,themeMode:mt,hueColor:it,hueName:Jt,density:xt,changeDensity:Ea,marketData:kn,merrillData:H,merrillTimeline:fe,timelineLoading:Te,merrillStagesConfig:O,fetchMerrillStages:te,merrillSnapshots:ae,merrillSnapshotsTotal:xe,healthMetrics:Je,feishuConfig:ps,feishuTestStatus:An,feishuTestMessage:Ln,shortcutHelpVisible:Si,shortcutHelpItems:Se,commandPaletteVisible:Ci,tourVisible:si,tourStep:ni,tourSteps:ii,skipTour:oi,finishTour:ri,backups:Qn,backupCreating:$n,loadBackups:ks,createBackup:Xn,restoreBackup:Zn,reportExporting:ei,reportExportMsg:ti,exportReport:ai,sysMonitor:Fn,analyticsRank:Hn,analyticsDays:Bn,loadSysMonitor:hs,loadAnalytics:ys,healthDetail:Kn,loadHealthDetail:bs,reviewTriggering:Wn,triggerMarketReview:Un,factCheck:Gn,factCheckRunning:Yn,loadFactCheck:ws,triggerFactCheck:Jn,strategyRecommendations:jn,aiUsage:Vn,loadStrategyRecommendations:gs,loadAiUsage:Qa,aiFabHidden:On,openAiFab:fs,feedbackText:ci,feedbackSubmitting:di,submitFeedback:ui,backtestStrategies:Re,backtestStrategy:$e,backtestRange:Xe,backtestCapital:et,backtestRunning:Mt,backtestResult:Tt,runBacktest:Wt,btStrategyOptions:fc,btSelectedStrategies:gc,toggleBtStrategy:hc,btDateRange:yc,btCapital:bc,btCommissionRate:wc,btIncludeBenchmark:kc,btRunning:_c,btResult:xc,btError:Sc,btMetrics:Cc,btAnnualReturns:qc,btTrades:Ec,btStrategyMetricsRows:Mc,btDrawdownRegion:Tc,runBacktestWorkbench:Dc,exportBacktestCSV:Pc,registerBacktestNavChart:Rc,btFmtNum:zc,fetchMarketData:Ga,fetchMerrillClock:T,testFeishuWebhook:In,saveFeishuConfig:Nn,merrillClockConfig:J,merrillClockLastUpdated:o,merrillReevalResult:y,merrillReevalLoading:L,saveMerrillClockConfig:de,doMerrillReevaluate:me,dataRefreshConfig:ir,dataRefreshReloading:lr,dataRefreshSaving:or,loadDataRefreshConfig:tn,saveDataRefreshConfig:Or,triggerDataReload:jr,triggerDataPull:Vr,dataPullRunning:Fr,indexDetailVisible:Wa,indexDetail:Ua,indexAiResult:_n,indexAiLoading:xn,loadCachedIndexEval:Cn,showIndexDetail:Sn,doIndexAiEvaluate:qn,klinePeriods:n,currentKlinePeriod:B,klineLoading:ie,indexKlineLoading:Me,stockKlineLoaded:pt,indexKlineLoaded:aa,klineDegradeNote:Ce,klineShowMinutes:ka,toggleKlineShowMinutes:_,loadStockKline:sa,switchKlinePeriod:Ct,loadIndexKline:ia,switchIndexKlinePeriod:nt,zoomKlineRange:En,MA_LINES:St,klineMaVisible:Ge,toggleKlineMa:Ht,scoreAnimating:Mn,scoreDelta:Tn,scorePulse:Dn,refreshStockScore:Ya,animateScoreEntrance:Ja,showMerrillDetail:K,merrillDetailData:s,showStageDetail:Z,getCharLabel:p,getAssetName:W,getRankColor:ue,levelColor:Mi,levelBg:Ti,timelineStages:j,getStageAngle:oe,getCycleProgress:U,getCurrentStageMonths:b,getStageTotalMonths:c,isStageCompleted:M,stages:z,indicatorList:ee,dimensionScoreList:Y,confidenceColor:R,views:At,currentView:kt,statusFilter:Q,loginForm:dd,logining:ud,guestLogining:vd,dashboardData:qt,loadingView:gn,dates:Na,consensus:_a,searchKeyword:ya,stockDetailVisible:tt,stockDetailTab:_t,stockDetail:lt,stockDetailLoading:It,detailDisplayMode:ea,setDetailDisplayMode:ta,isNarrow:na,detailSplitEnabled:oa,splitWidth:Kt,setSplitWidth:Yt,SPLIT_DEFAULT_PCT:$t,aiLoading:es,aiEvalStage:Os,aiEvalElapsed:js,aiEvalError:Vs,showBatchEvaluate:ts,batchStocks:Fs,batchRunning:Hs,batchTotal:Bs,batchCompleted:Ks,batchCurrent:Ws,batchStatuses:Us,batchResults:Gs,batchEvalErrors:Ys,aiConfig:Js,userList:rl,showAddUser:bl,editingUser:wl,userForm:kl,savingUser:_l,userSearch:cl,filteredUsers:pl,groupFilter:dl,userPageTab:ul,expandedGroups:vl,addMemberGroupMap:ml,toggleGroupExpand:fl,removeMemberFromGroupInline:gl,addMemberToGroupInline:hl,changeUserGroup:yl,statusCounts:so,stockPool:no,poolSignals:ko,aiResult:Xa,aiHistory:Ms,groupedByDate:Hr,groupedByMonth:Kr,expandedDates:Ds,expandedMonths:wo,aiHistoryByStock:Br,aiHistoryStockCount:Wr,expandedStocks:Ps,aiHistoryView:xo,aiHistoryLoading:rr,aiHistoryError:cr,aiHistoryTotal:dr,aiHistoryLoadingMore:ur,hasMoreAiHistory:vr,loadMoreAiHistory:mr,watchlistLoading:pr,scoreDistribution:Ur,quickEvalStock:Uo,evalStrategy:Go,checklistItems:bo,evalHistoryComparison:yo,quickEvaluate:Gr,selectedHistoryIds:Ts,showAutoEvaluateSettings:zs,savingConfig:As,autoEvaluateConfig:Za,autoEvaluateScope:Ls,strategyList:ba,toggleDateExpand:Yr,toggleMonthExpand:_o,toggleSelectDate:Jr,toggleSelectMonth:Qr,toggleSelectStock:Xr,toggleStockExpand:$r,registerTrendChart:Zr,selectedWatchlistCodes:Rs,clearWatchlistSelection:br,toggleSelectWatchlist:xr,selectAllHistory:Sr,selectAllWatchlist:Cr,batchRemoveWatchlist:_r,batchEvaluateSelected:Ir,batchReevaluateHistory:wr,batchAddToWatchlist:kr,viewUnit:mi,datePickerType:pi,dateFormat:fi,canNavPrev:gi,canNavNext:hi,handleLogin:_d,handleGuestLogin:xd,switchView:_s,navigateDate:xs,navigateTo:_e,loadDashboardData:ls,loadConsensusData:Ma,showStockDetail:Cs,doAiEvaluate:fr,doBatchEvaluate:tc,loadAiHistory:Aa,loadLastEvaluation:as,lastEvalTime:ho,viewAiResult:ec,saveAiConfig:$c,testAiApi:Xc,exportConfig:Zc,importConfig:ed,configSaving:Lc,configChanged:I,watchlist:Jo,watchlistCodes:Qo,watchlistSearch:ar,watchlistResults:sr,watchlistSearching:nr,watchlistSort:Yo,sortedWatchlist:$o,getWatchlistScore:Xo,addSearchResult:Zo,evaluatedCodes:er,klineLoadedCodes:tr,markKlineLoaded:$s,loadWatchlist:Zs,addToWatchlist:Mr,removeFromWatchlist:Tr,clearWatchlist:Dr,searchStockForWatchlist:Nr,toggleWatchlist:Pr,batchEvaluateWatchlist:Lr,watchlistEvaluate:Ar,showStockKline:Rr,preloadWatchlistKline:en,preloadingKline:zr,realtimeQuotes:ac,realtimeDegraded:sc,realtimeWsState:nc,connectRealtimeQuotes:ic,disconnectRealtimeQuotes:lc,quoteWarningFor:oc,realtimeQuoteColor:rc,realtimePriceText:cc,realtimePctText:dc,realtimeRatioText:uc,REALTIME_DEGRADED_TEXT:vc,REALTIME_FALLBACK_TEXT:mc,toggleSelectHistory:hr,clearSelection:yr,deleteSingleHistory:gr,deleteSelectedHistory:qr,saveAutoEvaluateConfig:Er,editUser:$l,saveUser:Xl,deleteUser:Zl,loadUsers:Va,allGroups:Jl,loadAllGroups:$a,getGroupName:Ql,toggleUserEnabled:eo,resetUserPassword:to,selectedPreset:Vo,applyPreset:Ho,onProviderChange:Bo,providerInfo:Fo,globalConfigDirty:Ic,lastSavedTime:Nc,tushareConfig:Oc,tushareStatus:jc,syncingData:Hc,stockCount:Bc,tradeDateCount:Kc,aiStatus:Wc,appVersion:an,showImportDialog:Uc,rateLimitConfig:Gc,rateLimitDirty:Yc,rateLimitSaving:Jc,loadRateLimit:ss,saveRateLimit:Qc,saveAllConfig:td,resetAllConfig:ad,testTushareConnection:sd,syncStockData:nd,loadTushareConfig:sn,loadFeishuConfig:ns,loadSystemStatus:is,loadAiConfig:Ba,aiVendors:So,aiCatalog:Co,aiModelsError:qo,testingAllModels:Eo,savingAiModels:Mo,loadAiVendors:Fa,loadAiCatalog:Is,saveAiVendors:Ns,saveAiModels:Ns,testVendorModel:Do,testAllVendorModels:Po,fetchVendorModels:Ro,addVendorFromCatalog:zo,addCustomVendor:Ao,addVendorModel:Lo,removeVendorModel:Io,removeVendor:No,toggleVendorKeyReveal:Oo,toggleVendorEdit:jo,checkTushareConnection:Ha,datasourceConfig:Vc,datasourceStatus:Fc,loadDatasourceConfig:nn,saveDatasourceConfig:id,testDatasource:ld,toggleDatasourceKeyReveal:od,toggleDatasourceEdit:rd,strategyFilter:ra,strategyFilterOptions:Pa,strategyFilterCounts:da,strategyPreviewCount:lo,saveStrategyFilter:oo,filteredConsensusRank:ro,currentPoolSize:co,filteredStrategyCounts:uo,strategyDistribution:io,expandedStrategies:Ra,poolChangeBadge:vo,timeBarPercent:mo,timeSinceRefresh:po,navigateToStrategyFilter:fo,showUserMenu:Gt,toggleSidebar:se,groupsConfig:be,loadGroupConfig:We,editingGroup:xl,groupEditForm:ql,showAddGroup:Ml,addGroupForm:Tl,savingGroup:Dl,menuConfigDialog:Sl,memberDialog:Cl,groupMembers:Pl,addMemberUsername:Rl,selectedMemberGroup:zl,subPageSectionExpanded:Al,toggleSubPageSection:Ll,getGroupMemberCount:Il,getMenuEnabledCount:Nl,groupCount:Ol,openMemberManager:jl,loadGroupMembers:Vl,addMemberToGroup:Fl,removeMemberFromGroup:Hl,availableUsersForGroup:Bl,subPageCache:El,onParentToggle:Kl,openMenuConfig:Wl,saveMenuConfig:Ul,deleteGroupConfig:Gl,createGroup:Yl,changePasswordForm:pd,changingPassword:fd,doChangePassword:Cd,showSetupWizard:gd,setupForm:hd,setupStep:yd,checkSetupWizard:bd,completeSetupWizard:wd,chatSessions:Pi,chatHistoryView:Ri,selectedChatIds:zi,expandedChatDates:Ai,expandedChatMonths:Li,expandedChatStocks:Ii,chatHistoryLoading:Ni,chatHistoryError:Oi,allChatSessionsFlat:ji,chatGroupedByDate:Vi,chatGroupedByMonth:Fi,chatGroupedByStock:Hi,toggleSelectChat:Bi,toggleSelectChatDate:Ki,toggleSelectChatMonth:Wi,toggleSelectChatStock:Ui,toggleChatDateExpand:Gi,toggleChatMonthExpand:Yi,toggleChatStockExpand:Ji,selectAllChatSessions:Qi,deleteSelectedChatSessions:$i,viewChatSession:Xi,loadChatHistory:qs,deleteChatSession:Zi,renderMarkdown:el,stockChatInput:tl,stockChatMessages:al,stockChatLoading:sl,stockChatError:nl,askStockSend:il,askStockQuick:ll,onTouchStart:Pn,onTouchEnd:Rn,hapticFeedback:i}}})();Sa.name="qc-icon";window.__quantComponents||(window.__quantComponents={});window.__quantComponents.Sidebar=lm;window.__quantComponents.Header=ip;window.__quantComponents.SubNav=yp;window.__quantComponents.MobileNav=Np;window.__quantComponents.StockList=yf;window.__quantComponents.DetailSplit=_f;window.__quantComponents.TopTabs=Pf;window.__quantComponents.AppIcon=Sa;window.__lazyLoaders={system:()=>Promise.resolve(),ops:()=>Promise.resolve(),ai:()=>Promise.resolve(),research:()=>Promise.resolve(),shortterm:()=>Promise.resolve()}});export default Rf();
