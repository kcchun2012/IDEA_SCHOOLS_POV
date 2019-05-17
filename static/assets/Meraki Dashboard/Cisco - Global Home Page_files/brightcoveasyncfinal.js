AdwaysInteractiveBrightcoveAsyncFinalPlugin = function() {
    "use strict";

    var experience = null;
    var autoLoad = false;
    var currentMediaID = '';

    if (arguments.length < 2)
        return -1;

    if (typeof arguments[1] != "object")
        return -2;

    var that = arguments[1];

    if ((typeof adways != "undefined" && typeof adways.interactive == "undefined") || typeof adways == "undefined") {
    !function(t){"use strict";"undefined"==typeof t.adways&&(t.adways=new Object);var e=t.adways;"undefined"==typeof e.tweaks&&(e.tweaks=new Object);var n=t.console;if(("undefined"==typeof n||null==n)&&(t.console=new Object,n=t.console),"function"!=typeof n.log)if("undefined"==typeof n.log||null==n.log)n.log=function(){};else if("object"!=typeof n.log)throw"console.log is not a function";if("function"!=typeof n.warn)if("undefined"==typeof n.warn||null==n.warn)n.warn=function(){};else if("object"!=typeof n.warn)throw"console.warn is not a function";if("indexOf"in Array.prototype||(Array.prototype.indexOf=function(t,e){void 0===e&&(e=0),0>e&&(e+=this.length),0>e&&(e=0);for(var n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1}),"undefined"==typeof e&&(e=new Object),"undefined"==typeof e.g8){e.g8=new Object,e.g8.JP=0,e.g8.Oe=document.createElement("div"),e.g8.Oe.style.display="block",e.g8.Oe.style.position="fixed",e.g8.Oe.style.bottom="0%",e.g8.Oe.style.width="100%",e.g8.Oe.style.height="70px",e.g8.us=document.createElement("div"),e.g8.us.id="adways-tracer-resize-div",e.g8.us.style.position="absolute",e.g8.us.style.top="0px",e.g8.us.style.height="5px",e.g8.us.style.left="0px",e.g8.us.style.width="100%",e.g8.us.style.overflow="hidden",e.g8.us.style.backgroundColor="rgb(0,255,0)";var r="#adways-tracer-resize-div:hover{cursor:ns-resize;}",s=document.createElement("style");s.setAttribute("type","text/css"),s.styleSheet?s.styleSheet.cssText=r:s.appendChild(document.createTextNode(r)),document.getElementsByTagName("head")[0].appendChild(s),e.g8.xL=document.createElement("div"),e.g8.xL.style.position="absolute",e.g8.xL.style.top="5px",e.g8.xL.style.bottom="0px",e.g8.xL.style.left="0px",e.g8.xL.style.width="100%",e.g8.xL.style.overflow="scroll",e.g8.xL.style.color="rgb(0,255,0)",e.g8.xL.style.fontSize="12px";var a=document.createElement("div");a.innerHTML="<!--[if lt IE 9]><i></i><![endif]-->",a.getElementsByTagName("i").length>0?(e.g8.xL.style.backgroundColor="black",e.g8.xL.style.opacity=.8,e.g8.xL.style.uc="progid:DXImageTransform.Microsoft.Alpha(Opacity=80)",e.g8.xL.style.filter="alpha(opacity=80)"):e.g8.xL.style.backgroundColor="rgba(0,0,0,0.8)",e.g8.Oe.appendChild(e.g8.us),e.g8.Oe.appendChild(e.g8.xL),e.g8.p2=document.createElement("div"),e.g8.p2.style.display="block",e.g8.p2.style.position="fixed",e.g8.p2.style.top="0%",e.g8.p2.style.left="0%",e.g8.p2.style.width="100%",e.g8.p2.style.height="100%",e.g8.p2.style.cursor="ns-resize",e.g8.MK=function(n){n.stopPropagation(),n.preventDefault(),e.g8.oD=n.screenY,e.g8.sR=e.g8.Oe.offsetHeight,t.addEventListener?(t.addEventListener("mousemove",e.g8.Hx,!0),t.addEventListener("mouseup",e.g8.Cw,!0)):(t.attachEvent("onmousemove",e.g8.Hx,!0),t.attachEvent("onmouseup",e.g8.Cw,!0)),document.getElementsByTagName("body")[0].appendChild(e.g8.p2)},e.g8.Hx=function(t){t.stopPropagation(),t.preventDefault();var n=t.screenY-e.g8.oD;e.g8.Oe.style.height=e.g8.sR-n+"px"},e.g8.Cw=function(n){n.stopPropagation(),n.preventDefault(),document.getElementsByTagName("body")[0].removeChild(e.g8.p2),t.removeEventListener?(t.removeEventListener("mousemove",e.g8.Hx,!0),t.removeEventListener("mouseup",e.g8.Cw,!0)):(t.detachEvent("onmousemove",e.g8.Hx,!0),t.detachEvent("onmouseup",e.g8.Cw,!0))},t.addEventListener?e.g8.us.addEventListener("mousedown",e.g8.MK,!0):e.g8.us.attachEvent("onmousedown",e.g8.MK,!0),e.trace=function(t){var r=++e.g8.JP+" - ",s="<pre>"+r+t.replace("\n","<br>")+"</pre>",a=r+t;"undefined"!=typeof n&&n.log(a),e.g8.xL.innerHTML=s+"<br>"+e.g8.xL.innerHTML},e.M8=function(){e.g8.xL.innerHTML=""}}e.lib=new Object,e.lib.ready=!1,e.lib.error=null,e.lib.version=2;try{"undefined"==typeof e.wM&&(e.wM=!1,t.addEventListener?t.addEventListener("load",function(){e.wM=!0}):t.attachEvent("onload",function(){e.wM=!0}),e.isPageLoaded=function(){return e.wM}),"undefined"==typeof e.construct&&(e.construct=function(t,e){function n(){return t.apply(this,e)}return n.prototype=t.prototype,new n}),"undefined"==typeof e.destruct&&(e.destruct=function(){if(arguments[0]){var t=1;return"function"==typeof arguments[0].qo?arguments[0].qo():"function"==typeof arguments[0].oq&&arguments[0].oq(),"function"==typeof arguments[0].destroy&&(t=arguments[0].destroy()),t}return 0});var i=(new Object,new Object);i.Nn=function(){var t=arguments[0];t._ti_=new Array;for(var e=0,n=0;e<arguments.length;++e)null!=arguments[e]&&(t._ti_[n++]=arguments[e]);if(arguments.length>1&&null!=arguments[1]){var r=function(){};r.prototype=arguments[1].prototype,t.prototype=new r}if(arguments.length>2){for(var s=new Array,a=new Array(arguments.length-2),e=2;e<arguments.length;++e){var u=new Object;u.jH=arguments[e],u.hh=!1,a[e-2]=u}for(;a.length>0;){var o=a[a.length-1];if(o.hh){for(var e=0;e<s.length&&s[e]!==o.jH;)++e;if(e>=s.length){for(var e in o.jH)"_ti_"!=e&&(t.prototype[e]=o.jH[e]);s.push(o.jH)}a.pop()}else{o.hh=!0;for(var e=1;e<o.jH._ti_.length;++e){var u=new Object;u.jH=o.jH._ti_[e],u.hh=!1,a.push(u)}}}}"function"!=typeof t.prototype.c3&&(t.prototype.c3=i.c3),"function"!=typeof t.prototype.destroy&&(t.prototype.destroy=i.destroy),"function"!=typeof t.prototype.oq&&(t.prototype.oq=i.oq),t.prototype.uB=t},i.a2=function(){var t=arguments[0];t._ti_=new Array;for(var e=0,n=0;e<arguments.length;++e)null!=arguments[e]&&(t._ti_[n++]=arguments[e])},i.sm=function(){for(var t=1,e=arguments[0]._ti_.length;t<arguments.length;++t)null!=arguments[t]&&(arguments[0]._ti_[e++]=arguments[t])},i.c3=function(t){return"function"==typeof t&&this instanceof t?!0:i.Wq(this.uB,t)},i.destroy=function(){return 2},i.oq=function(){return 1},i.Wq=function(t,e){if(t._ti_ instanceof Array){for(var n=1;n<t._ti_.length&&t._ti_[n]!==e&&!i.Wq(t._ti_[n],e);)++n;return n<t._ti_.length}return!1},i.P=function(t,e){return"function"==typeof e&&t instanceof e?!0:"undefined"!=typeof t&&null!=t?"undefined"!=typeof t.uB&&null!=t.uB?i.Wq(t.uB,e):t===e||i.Wq(t,e):!1};var u=new Object;u.x7="exception.UNKNOWN",u.EF="exception.ASSERT",u.uV="exception.obf_MODULE_MISSING",u.lA="exception.BAD_ARGS",u.jf=new Object,i.a2(u.jf);var o=new Object;o.xR=function(t,e){this.kind=arguments.length>0?arguments[0]:u.x7,this.mk=arguments.length>1?arguments[1]:"";var n=new Error;this.stack=n.stack},i.Nn(o.xR,null,u.jf),o.xR.prototype.dz=function(){return"Exception: "+this.mk+"\nKind: "+this.f0()},o.xR.prototype.f0=function(){return this.kind},o.xR.prototype.MZ=function(){return this.mk},o.xR.prototype.J9=function(){return this.stack};var l=new Object;l.zm=new Object,l.zm.aG="flag.MAX_FLAG_NUMBER_REACHED";var p=new Object;p.V7=function(){"undefined"!=typeof arguments[0]?i.P(arguments[0],p.V7)?this.me=arguments[0].rX():"number"==typeof arguments[0]?this.me=2*arguments[0]:this.me=1:this.me=1},i.Nn(p.V7),p.V7.A7=4294967295,p.V7.hx=function(){throw new o.xR(l.zm.aG)},p.V7.prototype.rX=function(){var t=this.me;return this.me*=2,this.me>p.V7.A7&&p.V7.hx(this),t};var h=new Object;h.OE=0,h.B_=++h.OE,h.m2=new Object,h.m2.OQ=1,h.m2.OX=2,h.CH=new Object,i.a2(h.CH),h.C_=new Object,i.a2(h.C_,h.CH),h.BD=new Object,i.a2(h.BD,h.CH),h.vS=new Object,i.a2(h.vS,h.CH),h.LU=new Object,i.a2(h.LU,h.C_),h.Ix=new Object,i.a2(h.Ix);var g=new Object;g.zzM=new Object,i.a2(g.zzM,h.CH),g.Za=function(t){this.kind=t,this.Y=null},i.Nn(g.Za,null,g.zzM),g.Za.prototype.d_=function(){return this.Y},g.Za.prototype.f0=function(){return this.kind},g.Za.prototype.zzK=function(t){return this.Y=t,1},g.J5=function(t,e){g.Za.call(this,t),this.oldValue=e},i.Nn(g.J5,g.Za,h.C_),g.J5.prototype.Gi=function(){return this.oldValue},h.Cz=++h.OE,g.rM=function(t,e){g.Za.call(this,h.Cz),this.errorCode=t,this.errorMessage=e},i.Nn(g.rM,g.Za,h.vS),g.rM.prototype.zkp=function(){return this.errorCode},g.rM.prototype.zxw=function(){return this.errorMessage},g.ks=function(t,e){g.Za.call(this,t),this.data=e},i.Nn(g.ks,g.Za,h.BD),g.ks.prototype.Br=function(){return this.data},g.cF=function(t,e,n){g.J5.call(this,t,n),this.key=e},i.Nn(g.cF,g.J5,h.LU),g.cF.prototype.zcz=function(){return this.key},g.cT=function(){this.zzG=new Array,this.zzZ=h.m2.OQ,this.zg=!0},i.Nn(g.cT,null,h.Ix),g.cT.prototype.oq=function(){return this._(new g.Za(h.B_)),2},g.cT.prototype.destroy=function(){return this.zzP(),2},g.cT.prototype.YB=function(){var t=arguments[0],e=arguments[1].valueOf(),n=null,r=0,s=!1;switch(arguments.length){case 5:s=arguments[4];case 4:r=arguments[3];case 3:n=arguments[2]}switch(this.zzm(t,e,n)){case-2:this.zzG[t]=new Array;case-1:var a=new Object;return a.listener=e,a.zzk=n,a.zzW=r,this.zzG[t].push(a),this.zzG[t].sort(function(t,e){return e.zzW-t.zzW}),1;default:return 0}},g.cT.prototype.t=function(){var t=arguments[0],e=arguments[1],n=null;arguments.length>=3&&(n=arguments[2]);var r=this.zzm(t,e,n);return r>=0?(this.zzG[t].splice(r,1),1):0},g.cT.prototype.zzP=function(){return this.zzG=new Array,1},g.cT.prototype.zzj=function(){return"undefined"==typeof this.zzG[arguments[0]]?0:this.zzG[arguments[0]].length},g.cT.prototype.zzV=function(){var t=null;return arguments.length>=3&&(t=arguments[2]),this.zzm(arguments[0],arguments[1],t)>-1},g.cT.prototype.zAk=function(){throw"not implemented yet"},g.cT.prototype.zgg=function(){throw"not implemented yet"},g.cT.prototype.zVR=function(){return this.zg},g.cT.prototype.zhW=function(){var t=arguments[0].valueOf();return t!==this.zg?(this.zg=t,1):0},g.cT.prototype.fg=function(){return this.zzZ},g.cT.prototype.zxZ=function(){return arguments[0]!=this.zzZ?(this.zzZ=arguments[0],1):0},g.cT.prototype._=function(){var t=arguments[0].f0();if(this.zzj(t)>0){for(var e=new Array(this.zzG[t].length),n=0;n<this.zzG[t].length;++n)e[n]=this.zzG[t][n];if(arguments.length<=1||!this.zg)if(this.zzZ==h.m2.OQ)arguments[0].zzK(this),g.cT.zN(e,arguments[0]);else{var r=arguments[0];r.zzK(this),setTimeout(function(){g.cT.zN(e,r)},0)}else if(arguments[1]==h.m2.OQ)arguments[0].zzK(this),g.cT.zN(e,arguments[0]);else{var r=arguments[0];r.zzK(this),setTimeout(function(){g.cT.zN(e,r)},0)}return 2}return 1},g.cT.zN=function(t,e){for(var r=0;r<t.length;++r)try{t[r].listener.call(t[r].zzk,e)}catch(s){"undefined"!=typeof n&&(n.log("error(s) in a listener: "+s),n.log(s),"undefined"!=typeof s.stack&&n.log(s.stack))}},g.cT.prototype.zzm=function(){if("undefined"==typeof this.zzG[arguments[0]])return-2;for(var t=0;t<this.zzG[arguments[0]].length&&(this.zzG[arguments[0]][t].listener!=arguments[1]||this.zzG[arguments[0]][t].zzk!==arguments[2]);)++t;return t==this.zzG[arguments[0]].length?-1:t};var f=new Object;f.wG=new Object,f.wG.fk=function(){var t={};t.j6=function(){var e=t.gF,n=t.kT;return n(e(32),8)+"-"+n(e(16),4)+"-"+n(16384|e(12),4)+"-"+n(32768|e(14),4)+"-"+n(e(48),12)},t.gF=function(t){return 0>t?NaN:30>=t?0|Math.random()*(1<<t):53>=t?(0|Math.random()*(1<<30))+(0|Math.random()*(1<<t-30))*(1<<30):NaN},t.kT=function(t,e){for(var n=t.toString(16),r=e-n.length,s="0";r>0;r>>>=1,s+=s)1&r&&(n=s+n);return n};var e=t.j6();return f.wG.dL(e)},f.wG.dL=function(){if(arguments.length>0)return f.wG.jx(arguments[0])?f.wG.lY(arguments[0]):(f.wG.eM.push(arguments[0]),arguments[0]);var t=f.wG.fk();return t},f.wG.lY=function(){return f.wG.dL()},f.wG.eM=new Array,f.wG.jx=function(){for(var t=0;t<f.wG.eM.length&&f.wG.eM[t]!==arguments[0];)++t;return t<f.wG.eM.length},f.mg=function(){return arguments[0]instanceof Array||("function"==typeof Array.isArray?Array.isArray(arguments[0]):!1)},f.pa=new Object,f.pa.AM=function(t,e){if("number"==typeof e){var n=new Object;return isNaN(e)?n.isNN="n":e==Number.NEGATIVE_INFINITY?n.isNN="-":e==Number.POSITIVE_INFINITY?n.isNN="+":(n.isNN="y",n.val=e.toString()),n}return e},f.pa.ms=function(t,e){if("object"!=typeof e||null===e||"string"!=typeof e.isNN)return e;switch(e.isNN){case"n":return Number.NaN;case"-":return Number.NEGATIVE_INFINITY;case"+":return Number.POSITIVE_INFINITY;case"y":default:return parseFloat(e.val)}};var c=new Object;c.TY=new Object,i.a2(c.TY);var m=new Object;m.Z6=function(t,e,r,s,a){return"undefined"==typeof t||"undefined"==typeof e?(n.warn("Adways Button Helpe: no base or target container given."),0):(this.hZ=new Array,this.hZ.position="position",this.hZ.display="display",this.hZ.margin="margin",this.hZ.marginLeft="margin-left",this.hZ.marginRight="margin-right",this.hZ.marginTop="margin-top",this.hZ.marginBottom="margin-bottom",this.hZ.padding="padding",this.hZ.paddingLeft="padding-left",this.hZ.paddingRight="padding-right",this.hZ.paddingTop="padding-top",this.hZ.paddingBottom="padding-bottom",this.hZ.width="width",this.hZ.height="height",this.hZ.top="top",this.hZ.bottom="bottom",this.hZ.left="left",this.hZ.right="right",this.hZ.zIndex="z-index",this.hZ.cursor="cursor",this.hZ.backgroundColor="background-color",this.hZ.backgroundImage="background-image",this.hZ.backgroundRepeat="background-repeat",this.YH="string"==typeof a?a:"adways-custom-button",this.base=t,this.target=e,this.button=document.createElement("div"),this.button.className=this.YH,this.base.appendChild(this.button),this.Oq={mode:"css-like",reference:new Array(1,1),bottom:"10px",right:"10px",width:"30px",height:"30px"},this.Bb={zIndex:"90000",display:"block",cursor:"pointer",position:"absolute",backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=)",backgroundColor:"transparent",backgroundRepeat:"repeat"},this.dq(r),void this.JV(s))},i.Nn(m.Z6,null,c.TY),m.Z6.prototype.destroy=function(){return this.base.removeChild(this.button),delete this.button,1},m.Z6.prototype.qc=function(){return this.button},m.Z6.prototype.uK=function(){return this.Oq},m.Z6.prototype.fU=function(){return this.Bb},m.Z6.prototype.ob=function(t){for(var e in t)"display"!=e&&"position"!=e&&(this.Bb[e]=t[e]);return 1},m.Z6.prototype.jP=function(t,e){if(null!=e&&"object"==typeof e){for(var n in e)"undefined"!=typeof this.hZ[n]&&(t.style[n]=e[n]);return 1}return 0},m.Z6.prototype.tj=function(t){switch(t.mode){case"css-like":default:this.jP(this.button,this.Sr(t))}},m.Z6.prototype.L8=function(t){if(!t)return Number.NaN;var e=t.indexOf("px");return-1==e?(e=t.indexOf("%"),-1==e?n.warn("Button Helper: no units for button size or position"):n.warn("Button Helper: % on button size not yet supported"),0):0==e?(n.warn("Button Helper: no value for button position or button size"),0):parseFloat(t)},m.Z6.prototype.Sr=function(t){var e=new Object;e.left=this.L8(t.left),e.top=this.L8(t.top),e.right=this.L8(t.right),e.bottom=this.L8(t.bottom),e.width=this.L8(t.width),e.height=this.L8(t.height);var n=new Object,r=this.target.offsetTop,s=this.target.offsetLeft,a=this.target.offsetWidth,i=this.target.offsetHeight;return this.target!==this.base||"static"==this.base.style&&""==this.base.style||(r=0,s=0),isNaN(e.left)?n.left=s+t.zzzv[0]*a-e.right-e.width:n.left=s+t.zzzv[0]*a+e.left,isNaN(e.top)?n.top=r+t.zzzv[1]*i-e.bottom-e.height:n.top=r+t.zzzv[1]*i+e.top,n.width=e.width+"px",n.height=e.height+"px",n.left+="px",n.top+="px",n},m.Z6.prototype.dq=function(t){return"undefined"!=typeof t&&null!=t&&(t.zzzv&&(this.Oq.zzzv=t.zzzv),t.left&&(this.Oq.left=t.left,delete this.Oq.right),t.right&&(this.Oq.right=t.right,delete this.Oq.left),t.top&&(this.Oq.top=t.top,delete this.Oq.bottom),t.bottom&&(this.Oq.bottom=t.bottom,delete this.Oq.top),t.width&&(this.Oq.width=t.width),t.height&&(this.Oq.height=t.height),isNaN(this.L8(this.Oq.left))&&isNaN(this.L8(this.Oq.right))||isNaN(this.L8(this.Oq.top))&&isNaN(this.L8(this.Oq.bottom))||isNaN(this.L8(this.Oq.width))&&isNaN(this.L8(this.Oq.height)))?(n.warn("Button position invalid!"),null):(this.tj(this.Oq),1)},m.Z6.prototype.JV=function(t){if("undefined"!=typeof t&&null!=t)for(var e in t)this.Bb[e]=t[e];return this.jP(this.button,this.Bb),1},m.wJ=new Object,m.wJ.x7=0,m.wJ.ZK=1,m.wJ.kL=2,m.wJ.Fi=3,m.wJ.gA=4,m.wJ.a1=5,m.wJ.qq=6,m.wJ.uW=7,m.wJ.oF=8,m.wJ.zL=9,m.wJ.Ug=10,m.wJ.Dn=11,m.wJ.mO=12,m.wJ.Rs=13,m.wJ.Oz=14,m.wJ.yb=15,m.wJ.rV=16,m.wJ.XH=17,m.wJ.AK=18,m.wJ.rE=19,m.wJ.GM=20,m.wJ.kp=function(){try{var e=navigator.userAgent,n=new Array(1);n[0]=new Object;var r=new RegExp("opera","i");if(e.match(r)){n[0].name="Opera",n[0].identifier=m.wJ.qq,r.compile("version/[0-9.]+","i");var s=r.exec(e);if(null!=s&&s.length>0){s=s[0].split("/");var a=s[1].split(".");n[0].version=new Array(a.length+1),n[0].version[0]=s[1];for(var i=0;i<a.length;++i)n[0].version[i+1]=a[i]}else n[0].version=new Array(1),n[0].version[0]="unknown";r.compile("opera mobi/[0-9a-zA-Z._-]*","i");var u=r.exec(e);null!=u&&u.length>0?(n[1]=new Object,n[1].name="Opera Mobile",n[1].identifier=m.wJ.Dn,u=u[0].split("/"),n[1].version=new Array(1),n[1].version[0]=u[1]):(r.compile("opera mini/[0-9a-zA-Z._-]*/[0-9a-zA-Z._-]*","i"),u=r.exec(e),null!=u&&u.length>0&&(n[1].name="Opera Mini",n[1].identifier=m.wJ.Ug,u=u[0].split("/"),n[1].version=new Array(1),n[1].version[0]=u[1]))}else{r.compile("MSIE [0-9a-zA-Z.]+","i");var o=r.exec(e);if(null!=o&&o.length>0){n[0].name="Internet Explorer",n[0].identifier=m.wJ.uW;var s=o[0].split(" "),a=s[1].split(".");n[0].version=new Array(a.length+1),n[0].version[0]=s[1];for(var i=0;i<a.length;++i)n[0].version[i+1]=a[i]}else{r.compile("chrome/[0-9a-zA-Z.]+","i");var o=r.exec(e);if(null!=o&&o.length>0){n[0].name="Chrome",n[0].identifier=m.wJ.oF;var s=o[0].split("/"),a=s[1].split(".");n[0].version=new Array(a.length+1),n[0].version[0]=s[1];for(var i=0;i<a.length;++i)n[0].version[i+1]=a[i]}else if(r.compile("safari","i"),e.match(r)){n[0].name="Safari",n[0].identifier=m.wJ.gA,r.compile("version/[0-9.]+","i");var s=r.exec(e);if(null!=s&&s.length>0){s=s[0].split("/");var a=s[1].split(".");n[0].version=new Array(a.length+1),n[0].version[0]=s[1];for(var i=0;i<a.length;++i)n[0].version[i+1]=a[i]}else n[0].version=new Array(1),n[0].version[0]="unknown"}else{r.compile("firefox/[0-9a-zA-Z.]+","i");var o=r.exec(e);if(null!=o&&o.length>0){n[0].name="Firefox",n[0].identifier=m.wJ.a1;var s=o[0].split("/"),a=s[1].split(".");n[0].version=new Array(a.length+1),n[0].version[0]=s[1];for(var i=0;i<a.length;++i)n[0].version[i+1]=a[i];r.compile("fennec/[0-9a-zA-Z.]+","i");var o=r.exec(e);if(null!=o&&o.length>0){n[1]=new Object,n[1].name="Fennec",n[1].identifier=m.wJ.zL;var s=o[0].split("/"),a=s[1].split(".");n[1].version=new Array(a.length+1),n[1].version[0]=s[1];for(var i=0;i<a.length;++i)n[1].version[i+1]=a[i]}}else n[0].name="unknown",n[0].identifier=m.wJ.x7,n[0].version=new Array(1),n[0].version[0]="unknown"}}}var l=new Array;if(l[0]=new Object,r.compile("applewebkit","i"),e.match(r)){l[0].name="AppleWebkit",l[0].identifier=m.wJ.mO,r.compile("applewebkit/[0-9a-zA-Z.]+","i");var p=r.exec(e);if(null!=p&&p.length>0){p=p[0].split("/");var a=p[1].split(".");l[0].version=new Array(a.length+1),l[0].version[0]=p[1];for(var i=0;i<a.length;++i)l[0].version[i+1]=a[i]}else l[0].version=new Array(1),l[0].version[0]="unknown"}else if(r.compile("presto","i"),e.match(r)){l[0].name="Presto",l[0].identifier=m.wJ.Rs,r.compile("presto/[0-9a-zA-Z.]+","i");var p=r.exec(e);if(null!=p&&p.length>0){p=p[0].split("/");var a=p[1].split(".");l[0].version=new Array(a.length+1),l[0].version[0]=p[1];for(var i=0;i<a.length;++i)l[0].version[i+1]=a[i]}else l[0].version=new Array(1),l[0].version[0]="unknown"}else if(r.compile("trident","i"),e.match(r)){l[0].name="Trident",l[0].identifier=m.wJ.yb,r.compile("trident/[0-9a-zA-Z.]+","i");var p=r.exec(e);if(null!=p&&p.length>0){p=p[0].split("/");var a=p[1].split(".");l[0].version=new Array(a.length+1),l[0].version[0]=p[1];for(var i=0;i<a.length;++i)l[0].version[i+1]=a[i]}else l[0].version=new Array(1),l[0].version[0]="unknown"}else if(r.compile("gecko","i"),e.match(r)){l[0].name="Gecko",l[0].identifier=m.wJ.Oz,r.compile("rv:[0-9a-zA-Z.]+","i");var p=r.exec(e);if(null!=p&&p.length>0){p=p[0].split(":");var a=p[1].split(".");l[0].version=new Array(a.length+1),l[0].version[0]=p[1];for(var i=0;i<a.length;++i)l[0].version[i+1]=a[i]}else l[0].version=new Array(1),l[0].version[0]="unknown"}else l[0].name="unknown",l[0].identifier=m.wJ.x7,l[0].version=new Array(1),l[0].version[0]="unknown";var h=new Array;if(h[0]=new Object,r.compile("ipad","i"),e.match(r)){h[0].name="iPad",h[0].identifier=m.wJ.rV,r.compile("mobile/[0-9a-zA-Z]+","i");var g=r.exec(e);null!=g&&g.length>0&&(g=g[0].split("/"),h[0].Bw=g[1]),h[0].version=new Array(1),h[0].version[0]="unknown"}else if(/iPhone/.test(e)&&!t.MSStream){h[0].name="iPhone",h[0].identifier=m.wJ.XH,r.compile("mobile/[0-9a-zA-Z]+","i");var g=r.exec(e);null!=g&&g.length>0&&(g=g[0].split("/"),h[0].Bw=g[1]),h[0].version=new Array(1),h[0].version[0]="unknown"}else if(r.compile("ipod","i"),e.match(r)){h[0].name="iPod",h[0].identifier=m.wJ.AK,r.compile("mobile/[0-9a-zA-Z]+","i");var g=r.exec(e);null!=g&&g.length>0&&(g=g[0].split("/"),h[0].Bw=g[1]),h[0].version=new Array(1),h[0].version[0]="unknown"}else r.compile("macintosh","i"),e.match(r)?(h[0].name="Macintosh",h[0].identifier=m.wJ.rE,h[0].version=new Array(1),h[0].version[0]="unknown"):(h[0].name="unknown",h[0].identifier=m.wJ.x7,h[0].version=new Array(1),h[0].version[0]="unknown");var f=new Array;switch(f[0]=new Object,h[0].name){case"iPhone":case"iPad":case"iPod":f[0].name="iOS",f[0].identifier=m.wJ.ZK,r.compile("CPU[ a-zA-Z]*OS[ ][0-9_]*","i");var p=r.exec(e);if(null!=p&&p.length>0){r.compile("[0-9_]+","i"),p=r.exec(p[0]);var a=p[0].split("_");f[0].version=new Array(a.length+1),f[0].version[0]=p[0];for(var i=0;i<a.length;++i)f[0].version[i+1]=a[i]}else f[0].version=new Array(1),f[0].version[0]="unknown";break;default:r.compile("windows","i"),e.match(r)?(f[0].name="Windows",f[0].identifier=m.wJ.kL):(r.compile("android","i"),e.match(r)?(f[0].name="Android",f[0].identifier=m.wJ.GM):(r.compile("mac os x","i"),e.match(r)?(f[0].name="MacOSX",f[0].identifier=m.wJ.Fi):(f[0].name="unknown",f[0].identifier=m.wJ.x7))),f[0].version=new Array(1),f[0].version[0]="unknown"}var c=new Object;return c.Mp=1,c.mU=1,c.browser=n,c.renderer=l,c.device=h,c.os=f,c}catch(y){var c=new Object;return c.Mp=1,c.mU=0,c.browser=new Array(1),c.browser[0]=new Object,c.browser[0].name="unknown",c.browser[0].identifier=m.wJ.x7,c.browser[0].version=new Array,c.browser[0].version[0]="unknown",c.renderer=new Array(1),c.renderer[0]=new Object,c.renderer[0].name="unknown",c.renderer[0].identifier=m.wJ.x7,c.renderer[0].version=new Array,c.renderer[0].version[0]="unknown",c.device=new Array(1),c.device[0]=new Object,c.device[0].name="unknown",c.device[0].identifier=m.wJ.x7,c.device[0].version=new Array,c.device[0].version[0]="unknown",c.os=new Array(1),c.os[0]=new Object,c.os[0].name="unknown",c.os[0].identifier=m.wJ.x7,c.os[0].version=new Array,c.os[0].version[0]="unknown",c}},m.wJ.Xo=m.wJ.kp(),"number"!=typeof e.tweaks.zzA&&m.wJ.Xo.browser[0].identifier==m.wJ.uW&&(e.tweaks.zzA=parseInt(m.wJ.Xo.browser[0].version[1])),m.Xl=function(){var t=document.defaultView.getComputedStyle(arguments[0],null).getPropertyValue("z-index");if("auto"!=t)return parseInt(t);for(var e=arguments[0].parentNode,n=0;n<e.children.length&&tz[n]!==arguments[0];)++n},m.rs=function(){var t=document.defaultView.getComputedStyle(arguments[0],null).getPropertyValue("z-index");return t},m.C6=function(){for(var t=Number.NEGATIVE_INFINITY,e=0;e<arguments[0].children.length;++e){var n=document.defaultView.getComputedStyle(arguments[0].children[e],null).getPropertyValue("z-index");n>t&&"auto"!=n&&(t=parseInt(n))}return t==Number.NEGATIVE_INFINITY?0:t},m.YB=function(t,e,n,r){if(arguments.length<4&&(r=!1),"load"==e&&"undefined"==typeof t.onload){var s=function(e){("loaded"==t.readyState||"complete"==t.readyState)&&(n.call(),t.removeEventListener?t.removeEventListener("readystatechange",s):t.detachEvent?t.detachEvent("onreadystatechange",s):t.onreadystatechange=null)};t.addEventListener?t.addEventListener("readystatechange",s):t.attachEvent?t.attachEvent("onreadystatechange",s):t.onreadystatechange=s}else t.addEventListener?t.addEventListener(e,n,r):t.attachEvent&&t.attachEvent("on"+e,n,r)},m.t=function(t,e,n,r){arguments.length<4&&(r=!1),t.removeEventListener?t.removeEventListener(e,n,r):t.detachEvent&&t.detachEvent("on"+e,n,r)},m.W8=function(t){var e=new Object;return t.offsetX?(e.x=t.offsetX,e.y=t.offsetY):t.layerX?(e.x=t.layerX,e.y=t.layerY):(e.x=Number.NaN,e.y=Number.NaN),e},m.Th=function(){return"ontouchstart"in t},m.PV=m.Th(),m.gD=function(t,e,n){return m.PV?m.YB(t,"touchend",e,n):m.YB(t,"mouseup",e,n)},m.OD=function(t,e,n){return m.PV?m.t(t,"touchend",e,n):m.t(t,"mouseup",e,n)},m.B6=function(t,e,n){return m.PV?m.YB(t,"touchstart",e,n):m.YB(t,"mousedown",e,n)},m.QA=function(t,e,n){return m.PV?m.t(t,"touchstart",e,n):m.t(t,"mousedown",e,n)},m.n4=function(t,e,n){return m.PV?m.YB(t,"touchmove",e,n):m.YB(t,"mousemove",e,n)},m.wh=function(t,e,n){return m.PV?m.t(t,"touchmove",e,n):m.t(t,"mousemove",e,n)},m.tk=function(t,e,n){return m.PV?m.YB(t,"click",e,n):m.YB(t,"click",e,n)},m.FF=function(t,e,n){return m.PV?m.t(t,"click",e,n):m.t(t,"click",e,n)},m.Tj=function(t){return m.PV?t.touches&&t.touches.length>0?[t.touches[0].screenX,t.touches[0].screenY]:[Number.NaN,Number.NaN]:[t.screenX,t.screenY]},m.dR=function(t,e){m.pE(t,e)||(t.className+=" "+e)},m.KR=function(t,e){if(m.pE(t,e)){var n=arguments.length>2?arguments[2]:!1,r=new RegExp("(?:^|\\s)"+e+"(?!\\S)");n&&(r=new RegExp("(?:^|\\s)"+e+"(?!\\S)","g")),t.className=t.className.replace(r,"")}},m.pE=function(t,e){var n=new RegExp("(?:^|\\s)"+e+"(?!\\S)");return t.className.match(n)},m.wX=function(e){var n=t.getComputedStyle(e,null);if(null===n)return new Array(1,0,0,1,0,0);var r=n.getPropertyValue("-webkit-transform")||n.getPropertyValue("-moz-transform")||n.getPropertyValue("-ms-transform")||n.getPropertyValue("-o-transform")||n.getPropertyValue("transform")||"";return""==r||"none"==r?new Array(1,0,0,1,0,0):m.gM(r)},m.N9=function(e){var n=t.getComputedStyle(e,null),r=n.getPropertyValue("-webkit-transform-origin")||n.getPropertyValue("-moz-transform-origin")||n.getPropertyValue("-ms-transform-origin")||n.getPropertyValue("-o-transform-origin")||n.getPropertyValue("transform-origin")||"";if(""==r)return new Array(0,0);var s=r.split(" ");return new Array(parseFloat(s[0].substr(0,s[0].indexOf("px"))),parseFloat(s[1].substr(0,s[1].indexOf("px"))))},m.X9=function(){var t=arguments.length>1?arguments[1]:new Array(6),e=m.wX(arguments[0]),n=m.N9(arguments[0]);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=-e[0]*n[0]-e[1]*n[1]+e[2]+n[0],t[5]=-e[3]*n[0]-e[4]*n[1]+e[5]+n[1],t},m.gM=function(t){var e=t.split("(")[1];e=e.split(")")[0],e=e.split(",");var n=arguments.length>1?arguments[1]:new Array(6);return n[0]=parseFloat(e[0]),n[1]=parseFloat(e[2]),n[2]=parseFloat(e[1]),n[3]=parseFloat(e[3]),n[4]=parseFloat(e[4]),n[5]=parseFloat(e[5]),n},m.P0=function(){var t,e,n,r,s,a;if(f.mg(arguments[0])){var i=arguments.length>1?arguments[1]:3;t=arguments[0][0].valueOf().toFixed(i),e=arguments[0][1].valueOf().toFixed(i),n=arguments[0][2].valueOf().toFixed(i),r=arguments[0][3].valueOf().toFixed(i),s=arguments[0][4].valueOf().toFixed(i),a=arguments[0][5].valueOf().toFixed(i)}else{var i=arguments.length>6?arguments[6]:3;t=arguments[0].valueOf().toFixed(i),e=arguments[1].valueOf().toFixed(i),n=arguments[2].valueOf().toFixed(i),r=arguments[3].valueOf().toFixed(i),s=arguments[4].valueOf().toFixed(i),a=arguments[5].valueOf().toFixed(i)}return"matrix("+t+","+n+","+e+","+r+","+s+","+a+")"},m.Zg=function(){var t,e,n,r;if(f.mg(arguments[0])){var s=arguments.length>1?arguments[1]:3;t=arguments[0][0].valueOf().toFixed(s),e=arguments[0][1].valueOf().toFixed(s),n=arguments[0][2].valueOf().toFixed(s),r=arguments[0][3].valueOf().toFixed(s)}else{var s=arguments.length>6?arguments[6]:3;t=arguments[0].valueOf().toFixed(s),e=arguments[1].valueOf().toFixed(s),n=arguments[2].valueOf().toFixed(s),r=arguments[3].valueOf().toFixed(s)}return"progid:DXImageTransform.Microsoft.Matrix(M11="+t+", M12="+e+", M21="+n+", M22="+r+", SizingMethod = 'auto expand')"},m.kD=function(){var e=t.getComputedStyle(arguments[0],null),n=arguments.length>1?arguments[1]:new Array(2);return n[0]=e.getPropertyValue("width"),n[1]=e.getPropertyValue("height"),n[0]=parseFloat(n[0].substr(0,n[0].indexOf("px"))),n[1]=parseFloat(n[1].substr(0,n[1].indexOf("px"))),n},m.b6=function(){var e=t.getComputedStyle(arguments[0],null),n=arguments.length>1?arguments[1]:new Array(2);return n[0]=e.getPropertyValue("left"),n[1]=e.getPropertyValue("top"),n[0]=parseFloat(n[0].substr(0,n[0].indexOf("px"))),n[1]=parseFloat(n[1].substr(0,n[1].indexOf("px"))),n},m.IZ=function(){var e=t.getComputedStyle(arguments[0],null),n=arguments.length>1?arguments[1]:new Object;return n.top=e.getPropertyValue("border-top-width"),n.left=e.getPropertyValue("border-left-width"),n.right=e.getPropertyValue("border-right-width"),n.bottom=e.getPropertyValue("border-bottom-width"),n.top=parseFloat(n.top.substr(0,n.top.indexOf("px"))),n.left=parseFloat(n.left.substr(0,n.left.indexOf("px"))),n.right=parseFloat(n.right.substr(0,n.right.indexOf("px"))),n.bottom=parseFloat(n.bottom.substr(0,n.bottom.indexOf("px"))),n},m.Qd=function(){var e=t.getComputedStyle(arguments[0],null),n=arguments.length>1?arguments[1]:new Object;return n.top=e.getPropertyValue("padding-top"),n.left=e.getPropertyValue("padding-left"),n.right=e.getPropertyValue("padding-right"),n.bottom=e.getPropertyValue("padding-bottom"),n.top=parseFloat(n.top.substr(0,n.top.indexOf("px"))),n.left=parseFloat(n.left.substr(0,n.left.indexOf("px"))),n.right=parseFloat(n.right.substr(0,n.right.indexOf("px"))),n.bottom=parseFloat(n.bottom.substr(0,n.bottom.indexOf("px"))),n},m.Ia=function(t){var e={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",
tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};return"undefined"!=typeof e[t.toLowerCase()]?e[t.toLowerCase()]:!1};var y=new Object;y.g=new Object,y.g.sw=++h.OE,y.g.N5=++h.OE,y.g.tg=++h.OE,y.g.nc=++h.OE,y.hk=new Object,y.hk.Bn=1,y.hk.EI=2,y.w3=new Object,i.a2(y.w3,h.Ix),y.rC=new Object,i.a2(y.rC,h.Ix);var v=new Object;v.aJ=function(){g.cT.call(this);var t=this;this.hY=new Array,this.Tk=new Array,this.pr=null,this.Ly=null,this.ZB={padding:0,top:0,position:"absolute",left:0,right:"inherit",width:"100%",height:"100%",margin:0},this.vM={padding:0,top:0,position:"fixed",left:0,right:"inherit",width:"100%",height:"100%",margin:0},this.hZ=new Array,this.hZ.position="position",this.hZ.display="display",this.hZ.margin="margin",this.hZ.marginLeft="margin-left",this.hZ.marginRight="margin-right",this.hZ.marginTop="margin-top",this.hZ.marginBottom="margin-bottom",this.hZ.padding="padding",this.hZ.paddingLeft="padding-left",this.hZ.paddingRight="padding-right",this.hZ.paddingTop="padding-top",this.hZ.paddingBottom="padding-bottom",this.hZ.width="width",this.hZ.height="height",this.hZ.top="top",this.hZ.bottom="bottom",this.hZ.left="left",this.hZ.right="right",this.hZ.zIndex="z-index",this.hZ.cursor="cursor",this.hZ.backgroundColor="background-color",this.hZ.backgroundImage="background-image",this.hZ.backgroundRepeat="background-repeat",this.f2=function(){t.ld=null;for(var e=null,n=0;n<t.hY.length;n++)if(e=t.hY[n].fullscreenElement||t.hY[n].mozFullScreenElement||t.hY[n].webkitFullscreenElement||t.hY[n].msFullscreenElement,null!=e){t.ld=e;break}null!=t.ld?t._(new g.Za(y.g.tg)):(t.Rl=null,t._(new g.Za(y.g.nc)))},this.ld=null,this.Rl=null,this.G8()===y.hk.Bn&&this.WR(document)},i.Nn(v.aJ,g.cT,y.w3),v.aJ.prototype.destroy=function(){var t=null;return t="function"==typeof g.cT.prototype.destroy?g.cT.prototype.destroy.apply(this,arguments):g.cT.prototype.destroy.apply(this,arguments),t+1},v.aJ.prototype.Z2=function(t){return this.Tk.push(t),this.G8()===y.hk.Bn&&this.WR(t.sp().ownerDocument),1},v.aJ.prototype.xW=function(t){for(var e=new Array,n=null,r=0;r<this.Tk.length;r++)this.G8()===y.hk.Bn&&(n=this.Tk[r].sp().ownerDocument,e.indexOf(n)>-1?e[e.indexOf(n)].u8+=1:(e.push(n),e[e.length-1].u8=1)),this.Tk[r]===t&&this.Tk.splice(r,1);if(this.G8()===y.hk.Bn)for(var r=0;r<this.hY.length;r++)e.indexOf(this.hY[r])>-1&&1==e[e.indexOf(this.hY[r])].u8&&e[e.indexOf(this.hY[r])]!==document&&(this.hY[r].removeEventListener("MSFullscreenChange",this.f2,!1),this.hY[r].removeEventListener("webkitfullscreenchange",this.f2,!1),this.hY[r].removeEventListener("mozfullscreenchange",this.f2,!1),this.hY[r].removeEventListener("fullscreenchange",this.f2,!1),this.hY.splice(r,1));return 1},v.aJ.prototype.WR=function(t){return-1==this.hY.indexOf(t)?(this.f2(),this.hY.push(t),t.addEventListener("MSFullscreenChange",this.f2,!1),t.addEventListener("webkitfullscreenchange",this.f2,!1),t.addEventListener("mozfullscreenchange",this.f2,!1),t.addEventListener("fullscreenchange",this.f2,!1),1):0},v.aJ.prototype.en=function(){return this.hZ},v.aJ.prototype.jP=function(t,e){if(null!=e&&"object"==typeof e){for(var n in e)"undefined"!=typeof this.hZ[n]&&(t.style[n]=e[n]);return 1}return 0},v.aJ.prototype._2=function(t){return this.iJ=t,this.getPropertyValue=function(e){var n=/(\-([a-z]){1})/g;return"float"==e&&(e="styleFloat"),n.test(e)&&(e=e.replace(n,function(){return arguments[2].toUpperCase()})),t.currentStyle[e]?t.currentStyle[e]:null},this},v.aJ.prototype.Ik=function(t){var n=new Object;for(var r in this.hZ)if(null==String(t.style[r]).match(/%/))if("number"==typeof e.tweaks.zzA&&e.tweaks.zzA<=8){var s=this._2(t,null);n[r]=s.getPropertyValue(this.hZ[r])}else{var a=t.ownerDocument,i=a.defaultView||a.parentWindow;n[r]=i.getComputedStyle(t,null).getPropertyValue(this.hZ[r])}return n},v.aJ.prototype.wI=function(t){return this.pr=this.Ik(t),1},v.aJ.prototype.pv=function(e){if(""==this.pr.position||"static"==this.pr.position?this.ZB.position="absolute":"relative"==this.pr.position&&(this.ZB.position=this.pr.position),this.jP(e,this.ZB),this.zzC()===y.hk.EI){e.style.top=-e.offsetParent.offsetTop+"px",e.style.left=-e.offsetParent.offsetLeft+"px";var n=t.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,r=t.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;e.style.width=n+"px",e.style.height=r+"px"}return 1},v.aJ.prototype.qp=function(){return 1},v.aJ.prototype.ZH=function(t){return this.jP(t,this.pr),1},v.aJ.prototype.G8=function(){var t=document;return null!==this.ld&&(t=this.ld.ownerDocument),t.fullscreenEnabled||t.webkitFullscreenEnabled||t.mozFullScreenEnabled||t.msFullscreenEnabled?y.hk.Bn:y.hk.EI},v.aJ.prototype.sF=function(){return null!=this.ld},v.aJ.prototype.bh=function(){if(this.sF()){if(this._(new g.Za(y.g.N5)),this.zzC()===y.hk.Bn)return document.cancelFullScreen?document.cancelFullScreen():document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen(),1;this.jP(this.ld,this.Ly),this.ld=null,this.Rl=null,this._(new g.Za(y.g.nc))}return 0},v.aJ.prototype.sp=function(){return this.ld},v.aJ.prototype.ny=function(){return this.Rl},v.aJ.prototype.wC=function(t){return null!=this.ld?0:(this.Rl=t,this._(new g.Za(y.g.sw)),this.zzC()===y.hk.Bn?this.Rl.ld.requestFullscreen?this.Rl.ld.requestFullscreen():this.Rl.ld.mozRequestFullScreen?this.Rl.ld.mozRequestFullScreen():this.Rl.ld.webkitRequestFullscreen?(this.Rl.ld.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT),document.webkitCurrentFullScreenElement||this.Rl.ld.webkitRequestFullScreen()):this.Rl.ld.msRequestFullscreen&&this.Rl.ld.msRequestFullscreen():(this.ld=this.Rl.ld,this.Ly=this.Ik(this.ld),this.jP(this.ld,this.vM),this._(new g.Za(y.g.tg))),1)},v.ti=function(t){return g.cT.call(this),"undefined"==typeof arguments[0]?void n.warn("Adways Fullscreen Helper: no container DOM Element given"):(this.ld=t,void e.zzY.zzzM(this))},i.Nn(v.ti,g.cT,y.rC),v.ti.prototype.destroy=function(){e.zzY.xW(this);var t=null;return t="function"==typeof g.cT.prototype.destroy?g.cT.prototype.destroy.apply(this,arguments):g.cT.prototype.destroy.apply(this,arguments),t+1},v.ti.prototype.sF=function(){return e.zzY.Rl===this},v.ti.prototype.wC=function(){return e.zzY.wC(this)},v.ti.prototype.sp=function(){return this.ld};var d=new Object;d._r=new Array,d._r.push({macro:"%%timestamp%%",value:function(){return(new Date).getTime()}}),d._r.push({macro:"%%random%%",value:function(){return Math.floor(1e8*Math.random())}}),d.DY=function(){for(var t=arguments[0],e=arguments.length>1?arguments[1]:d._r,n=0;n<e.length;n++)for(var r=e[n].macro,s=e[n].value;t.indexOf(r)>-1;)t=t.replace(r,s.call(r).toString());return t};var w=new Object;w.fs=Math.log(10),w.Lz=function(){var t=1;do t/=2;while(1+t/2!=1);return t},w.w_=1e-6,w.ie=Math.abs(Math.floor(Math.log(w.w_)/w.fs)),w.F5=Math.pow(10,w.ie),w.RM=function(){return Math.round(arguments[0]*w.F5)/w.F5},w.qr=function(){var t=arguments.length>2?arguments[2]:w.w_;return arguments[0]<arguments[1]-t?-1:arguments[0]>arguments[1]+t?1:0},w.jy=function(){return 0==w.qr.apply(null,arguments)},w.WL=function(t,e,n){return e+t*(n-e)},w.t4=function(t,e,n,r){var s=1-t;return s*s*e+2*t*s*n+t*t*r},w.Zs=function(t,e,n,r,s){var a=1-t;return a*a*a*e+3*t*a*a*n+3*t*t*a*r+t*t*t*s},w.XQ=function(){for(var t=0,e=0,n=arguments[0].length-1;n>-1;--n)e=arguments[0][n],t+=e*e;return Math.sqrt(t)},w.u1=function(){var t=arguments[0][0],e=arguments[0][1];return Math.sqrt(t*t+e*e)},w.QZ=function(){var t=arguments.length>2?arguments[2]:new Array(2);return t[0]=arguments[0][0]*arguments[1][0]+arguments[0][1]*arguments[1][1],t[1]=arguments[0][2]*arguments[1][0]+arguments[0][3]*arguments[1][1],t},w.G0=function(){var t=arguments.length>2?arguments[2]:new Array(4);return t[0]=arguments[0][0]*arguments[1][0]+arguments[0][1]*arguments[1][2],t[1]=arguments[0][0]*arguments[1][1]+arguments[0][1]*arguments[1][3],t[2]=arguments[0][2]*arguments[1][0]+arguments[0][3]*arguments[1][2],t[3]=arguments[0][2]*arguments[1][1]+arguments[0][3]*arguments[1][3],t},w.eQ=function(){return arguments[0][0]*arguments[0][3]-arguments[0][1]*arguments[0][2]},w.Eo=function(){var t=arguments.length>2?arguments[2]:w.eQ(arguments[0]);if(0==w.qr(t,0))return null;var e=arguments.length>1?arguments[1]:new Array(4);return e[0]=arguments[0][3]/t,e[1]=-arguments[0][1]/t,e[2]=-arguments[0][2]/t,e[3]=arguments[0][0]/t,e};var b=new Object;b.zm=new Object,b.zm.tM="type.exceptions.ENUM",b.tV=new Object,i.a2(b.tV),b.I5=new Object,i.a2(b.I5,b.tV),b.ui=new Object,i.a2(b.ui),b.NR=new Object,i.a2(b.NR,b.ui),b.FM=new Object,i.a2(b.FM),b.Av=new Object,i.a2(b.Av,b.FM),b.VQ=new Object,i.a2(b.VQ),b.wB=new Object,i.a2(b.wB,b.VQ),b.Uc=new Object,i.a2(b.Uc),b.GH=new Object,i.a2(b.GH,b.Uc);var E=new Object;E.Ah=function(){var t,e="";return t="object"==typeof arguments[0]&&"value"in arguments[0]?arguments[0].value.valueOf():arguments[0].valueOf(),e=t.toString()},E.B8=function(){var t,e=Number.NaN;switch(t="object"==typeof arguments[0]&&"value"in arguments[0]?arguments[0].value.valueOf():arguments[0].valueOf(),typeof t){case"boolean":e=t?1:0;break;case"number":e=t;break;case"string":switch(t.toLowerCase()){case"true":e=1;break;case"false":e=0;break;case"inf":case"+inf":case"infinity":case"+infinity":e=Number.POSITIVE_INFINITY;break;case"-inf":case"-infinity":e=Number.NEGATIVE_INFINITY;break;case"nan":e=Number.NaN;break;default:e=parseFloat(t)}}return e},E.iG=function(t){var e=new Object;return e.isSpecial=0,e.value=-1,isNaN(t)?e.isSpecial=3:t.valueOf()==Number.POSITIVE_INFINITY?e.isSpecial=2:t.valueOf()==Number.NEGATIVE_INFINITY&&(e.isSpecial=1),e.value=t.valueOf(),e},E.ep=function(t){return"undefined"==typeof t.isSpecial||"undefined"==typeof t.value?Number.NaN:3==t.isSpecial?Number.NaN:2==t.isSpecial?Number.POSITIVE_INFINITY:1==t.isSpecial?Number.NEGATIVE_INFINITY:0==t.isSpecial?t.value:void 0},E.Iq=function(){var t,e=!1;switch(t="object"==typeof arguments[0]&&"value"in arguments[0]?arguments[0].value.valueOf():arguments[0].valueOf(),typeof t){case"boolean":e=t;break;case"number":e=isNaN(t)||0==t?!1:!0;break;case"string":switch(t.toLowerCase()){case"true":e=!0;break;case"false":e=!1;break;default:t=parseFloat(t),e=isNaN(t)||0==t?!1:!0}}return e},E.tT=function(){for(var t=arguments.length>1?arguments[1]:0,e=new Array(arguments[0].length),n=0;t>n;++n)e[n]=arguments[0][n];e[t]=E.Ah(arguments[0][t]);for(var n=t+1;n<arguments[0].length;++n)e[n]=arguments[0][n];return e},E.iu=function(){for(var t=arguments.length>1?arguments[1]:0,e=new Array(arguments[0].length),n=0;t>n;++n)e[n]=arguments[0][n];e[t]=E.B8(arguments[0][t]);for(var n=t+1;n<arguments[0].length;++n)e[n]=arguments[0][n];return e},E.SX=function(){for(var t=arguments.length>1?arguments[1]:0,e=new Array(arguments[0].length),n=0;t>n;++n)e[n]=arguments[0][n];e[t]=E.Iq(arguments[0][t]);for(var n=t+1;n<arguments[0].length;++n)e[n]=arguments[0][n];return e},E.mi=function(){var t,e=new Array;if(t="object"==typeof arguments[0][0]&&"value"in arguments[0][0]?arguments[0][0].value.valueOf():arguments[0][0].valueOf(),f.mg(t)&&t.length>1){e.push(new Array(E.B8(t[0]),E.B8(t[1])));for(var n=1;n<arguments[0].length;++n)e.push(arguments[0][n])}else if("object"==typeof t&&"x"in t&&"y"in t){e.push(new Array(E.B8(t.x),E.B8(t.y)));for(var n=1;n<arguments[0].length;++n)e.push(arguments[0][n])}else if(arguments[0].length>1){e.push(new Array(E.B8(arguments[0][0]),E.B8(arguments[0][1])));for(var n=2;n<arguments[0].length;++n)e.push(arguments[0][n])}else e.push(new Array(Number.NaN,Number.NaN));return e},E.t0=function(){var t,e=new Array;if(t="object"==typeof arguments[0][0]&&"value"in arguments[0][0]?arguments[0][0].value.valueOf():arguments[0][0].valueOf(),f.mg(t)&&t.length>2){e.push(new Array(E.B8(t[0]),E.B8(t[1]),E.B8(t[2])));for(var n=1;n<arguments[0].length;++n)e.push(arguments[0][n])}else if("object"==typeof t&&"x"in t&&"y"in t&&"z"in t){e.push(new Array(E.B8(t.x),E.B8(t.y),E.B8(t.z)));for(var n=1;n<arguments[0].length;++n)e.push(arguments[0][n])}else if(arguments[0].length>2){e.push(new Array(E.B8(arguments[0][0]),E.B8(arguments[0][1]),E.B8(arguments[0][2])));for(var n=3;n<arguments[0].length;++n)e.push(arguments[0][n])}else e.push(new Array(Number.NaN,Number.NaN,Number.NaN));return e},E.qb=function(){var t,e=new Array;if(t="object"==typeof arguments[0][0]&&"value"in arguments[0][0]?arguments[0][0].value.valueOf():arguments[0][0].valueOf(),f.mg(t)&&t.length>3){e.push(new Array(E.B8(t[0]),E.B8(t[1]),E.B8(t[2]),E.B8(t[3])));for(var n=1;n<arguments[0].length;++n)e.push(arguments[0][n])}else if("object"==typeof t&&"x"in t&&"y"in t&&"z"in t&&"w"in t){e.push(new Array(E.B8(t.x),E.B8(t.y),E.B8(t.z),E.B8(t.VF)));for(var n=1;n<arguments[0].length;++n)e.push(arguments[0][n])}else if("object"==typeof t&&"a"in t&&"b"in t&&"c"in t&&"d"in t){e.push(new Array(E.B8(t.a),E.B8(t.b),E.B8(t.c),E.B8(t.d)));for(var n=1;n<arguments[0].length;++n)e.push(arguments[0][n])}else if(arguments[0].length>3){e.push(new Array(E.B8(arguments[0][0]),E.B8(arguments[0][1]),E.B8(arguments[0][2]),E.B8(arguments[0][3])));for(var n=4;n<arguments[0].length;++n)e.push(arguments[0][n])}else e.push(new Array(Number.NaN,Number.NaN,Number.NaN,Number.NaN));return e},E.ru=function(){var t,e=new Array;if(t="object"==typeof arguments[0][0]&&"value"in arguments[0][0]?arguments[0][0].value.valueOf():arguments[0][0].valueOf(),f.mg(t)&&t.length>5){e.push(new Array(E.B8(t[0]),E.B8(t[1]),E.B8(t[2]),E.B8(t[3]),E.B8(t[4]),E.B8(t[5])));for(var n=1;n<arguments[0].length;++n)e.push(arguments[0][n])}else if("object"==typeof t&&"a"in t&&"b"in t&&"c"in t&&"d"in t&&"x"in t&&"y"in t){e.push(new Array(E.B8(t.a),E.B8(t.b),E.B8(t.c),E.B8(t.d),E.B8(t.x),E.B8(t.y)));for(var n=1;n<arguments[0].length;++n)e.push(arguments[0][n])}else if(arguments[0].length>5){e.push(new Array(E.B8(arguments[0][0]),E.B8(arguments[0][1]),E.B8(arguments[0][2]),E.B8(arguments[0][3]),E.B8(arguments[0][4]),E.B8(arguments[0][5])));for(var n=6;n<arguments[0].length;++n)e.push(arguments[0][n])}else e.push(new Array(Number.NaN,Number.NaN,Number.NaN,Number.NaN,Number.NaN,Number.NaN));return e};var O=new Object;O.Np=++h.OE,O.Qr=++h.OE,O.tM=++h.OE,O.JM=++h.OE,O.pi=++h.OE,O.tV=new Object,i.a2(O.tV,b.tV),O.I5=new Object,i.a2(O.I5,O.tV,b.I5),O.ui=new Object,i.a2(O.ui,b.ui),O.NR=new Object,i.a2(O.NR,O.ui,b.NR),O.FM=new Object,i.a2(O.FM,b.FM),O.Av=new Object,i.a2(O.Av,O.FM,b.Av),O.VQ=new Object,i.a2(O.VQ,b.VQ),O.wB=new Object,i.a2(O.wB,O.VQ,b.wB),O.Uc=new Object,i.a2(O.Uc,b.Uc),O.GH=new Object,i.a2(O.GH,O.Uc,b.GH);var N=new Object;N.qB=function(){g.cT.call(this),this.zD=null,this.Xg=!1,this.value=arguments.length>0?E.SX(arguments)[0]:!1},i.Nn(N.qB,g.cT,O.ui),N.qB.prototype.valueOf=function(){return this.value},N.qB.prototype.LR=function(){return this.fF.apply(this,E.SX(arguments))},N.qB.prototype.fF=function(){if(this.value!=arguments[0]){var t=this.value;return this.value=arguments[0],null==this.zD&&this._(new g.J5(O.Qr,t,arguments.length>1?arguments[1]:null)),1}return 0},N.qB.prototype.Ns=function(){return this.Ke.apply(this,E.SX(arguments))},N.qB.prototype.Ke=function(){var t=new Array(arguments.length);t[0]=this.value&&arguments[0];for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.qB.prototype.SV=function(){return this.XT.apply(this,E.SX(arguments))},N.qB.prototype.XT=function(){var t=new Array(arguments.length);t[0]=this.value||arguments[0];for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.qB.prototype.xe=function(){return this.Wt.apply(this,E.SX(arguments))},N.qB.prototype.Wt=function(){var t=new Array(arguments.length);t[0]=this.value?!arguments[0]:arguments[0];for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.qB.prototype.FW=function(){var t=new Array;t.push(!this.value);for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.qB.prototype.pt=function(){return null==this.zD?(this.Xg=arguments.length>0?arguments[0].valueOf():!1,this.zD=new g.J5(O.Qr,this.valueOf()),1):0},N.qB.prototype.hS=function(){if(null!=this.zD){var t=this.zD;return(arguments.length<=2||arguments[2])&&this.Ti(),this.Xg||this.value!=t.Gi()||arguments.length>1&&arguments[1]?(this._(t,arguments.length>0?arguments[0]:this.fg()),1):0}return-1},N.qB.prototype.Ti=function(){return null!=this.zD?(this.zD=null,1):0},N.qB.prototype.CI=function(){return this.zD},N.qB.prototype.gi=function(){return null!=this.zD?Xg||this.value!=this.zD.Gi():!1},N.VG=function(){g.cT.call(this),this.zD=null,this.Xg=!1,this.value=arguments.length>0?E.SX(arguments)[0]:!1},i.Nn(N.VG,g.cT,O.NR),N.VG.prototype.valueOf=function(){return this.value},N.VG.prototype.LR=function(){return this.fF.apply(this,E.SX(arguments))},N.VG.prototype.fF=function(){if(this.value!=arguments[0]){var t=this.value;return this.value=arguments[0],null==this.zD&&this._(new g.J5(O.Qr,t,arguments.length>1?arguments[1]:null)),1}return 0},N.VG.prototype.Ns=function(){return this.Ke.apply(this,E.SX(arguments))},N.VG.prototype.Ke=function(){var t=new Array(arguments.length);t[0]=this.value&&arguments[0];for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.VG.prototype.SV=function(){return this.XT.apply(this,E.SX(arguments))},N.VG.prototype.XT=function(){var t=new Array(arguments.length);t[0]=this.value||arguments[0];for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.VG.prototype.xe=function(){return this.Wt.apply(this,E.SX(arguments))},N.VG.prototype.Wt=function(){var t=new Array(arguments.length);t[0]=this.value?!arguments[0]:arguments[0];for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.VG.prototype.FW=function(){var t=new Array;t.push(!this.value);for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.VG.prototype.pt=function(){return null==this.zD?(this.Xg=arguments.length>0?arguments[0].valueOf():!1,this.zD=new g.J5(O.Qr,this.valueOf()),1):0},N.VG.prototype.hS=function(){if(null!=this.zD){var t=this.zD;return(arguments.length<=2||arguments[2])&&this.Ti(),this.Xg||this.value!=t.Gi()||arguments.length>1&&arguments[1]?(this._(t,arguments.length>0?arguments[0]:this.fg()),1):0}return-1},N.VG.prototype.Ti=function(){return null!=this.zD?(this.zD=null,1):0},N.VG.prototype.CI=function(){return this.zD},N.VG.prototype.gi=function(){return null!=this.zD?Xg||this.value!=this.zD.Gi():!1},N.DT=function(){g.cT.call(this),this.Qv=null,this.G9=!1,this.value=arguments.length>0?E.iu(arguments)[0]:0},i.Nn(N.DT,g.cT,O.tV),N.DT.prototype.valueOf=function(){return this.value},N.DT.prototype.LR=function(){return this.fF.apply(this,E.iu(arguments))},N.DT.prototype.fF=function(){if(isNaN(arguments[0])&&isNaN(this.value))return 0;if(isNaN(arguments[0])||isNaN(this.value)||0!=w.qr(this.value,arguments[0])){var t=this.value;return this.value=arguments[0],null==this.Qv&&this._(new g.J5(O.Np,t,arguments.length>1?arguments[1]:null)),1}return 0},N.DT.prototype.TX=function(){return this.gy.apply(this,E.iu(arguments))},N.DT.prototype.gy=function(){var t=new Array(arguments.length);t[0]=this.value+arguments[0];for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.DT.prototype.oP=function(){return this.nG.apply(this,E.iu(arguments))},N.DT.prototype.nG=function(){var t=new Array(arguments.length);t[0]=this.value-arguments[0];for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.DT.prototype.An=function(){return this.El.apply(this,E.iu(arguments))},N.DT.prototype.El=function(){var t=new Array(arguments.length);t[0]=this.value*arguments[0];for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.DT.prototype.q4=function(){return this.Wm.apply(this,E.iu(arguments))},N.DT.prototype.Wm=function(){var t=new Array(arguments.length);t[0]=this.value/arguments[0];for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.DT.prototype.Xw=function(){return this.Cs.apply(this,E.iu(arguments))},N.DT.prototype.Cs=function(){var t=new Array(arguments.length);t[0]=Math.min(this.value,arguments[0]);for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.DT.prototype.JF=function(){return this.fj.apply(this,E.iu(arguments))},N.DT.prototype.fj=function(){var t=new Array(arguments.length);t[0]=Math.max(this.value,arguments[0]);for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.DT.prototype._C=function(){return this.Rt.apply(this,E.iu(arguments))},N.DT.prototype.Rt=function(){var t=new Array(arguments.length);t[0]=this.value%arguments[0];for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.DT.prototype.p6=function(){return this.Ib.apply(this,E.iu(arguments))},N.DT.prototype.Ib=function(){var t=new Array(arguments.length);t[0]=Math.pow(this.value,arguments[0]);for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.DT.prototype.ZV=function(){var t=new Array;t.push(Math.round(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.DT.prototype.Ma=function(){var t=new Array;t.push(Math.ceil(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.DT.prototype.tc=function(){var t=new Array;t.push(Math.floor(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.DT.prototype.Jt=function(){var t=new Array;t.push(Math.abs(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.DT.prototype.oE=function(){var t=new Array;t.push(Math.exp(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.DT.prototype.pu=function(){var t=new Array;t.push(Math.acos(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.DT.prototype.fu=function(){var t=new Array;t.push(Math.asin(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.DT.prototype.Vd=function(){var t=new Array;t.push(Math.atan(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.DT.prototype.JB=function(){var t=new Array;t.push(Math.cos(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.DT.prototype.b7=function(){var t=new Array;t.push(Math.sin(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.DT.prototype.xC=function(){var t=new Array;t.push(Math.tan(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.DT.prototype.gS=function(){var t=new Array;t.push(Math.sqrt(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.DT.prototype.sk=function(){var t=new Array;t.push(Math.log(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.DT.prototype.Ci=function(){var t=new Array(arguments.length+1);t[0]=this.value*Math.random();for(var e=0;e<arguments.length;++e)t[e+1]=arguments[e];return this.fF.apply(this,t),this},N.DT.prototype.SS=function(){return null==this.Qv?(this.G9=arguments.length>0?arguments[0].valueOf():!1,this.Qv=new g.J5(O.Np,this.valueOf()),1):0},N.DT.prototype.Ho=function(){if(null!=this.Qv){var t=this.Qv;(arguments.length<=2||arguments[2])&&this.sI();var e=t.Gi(),n=isNaN(e),r=isNaN(this.value);return this.G9||n&&!r||!n&&r||!n&&!r&&0!=w.qr(this.value,e)||arguments.length>1&&arguments[1]?(this._(t,arguments.length>0?arguments[0]:this.fg()),1):0}return-1},N.DT.prototype.sI=function(){return null!=this.Qv?(this.Qv=null,1):0},N.DT.prototype.oR=function(){return this.Qv},N.DT.prototype.Du=function(){if(null!=this.Qv){var t=this.Qv.Gi(),e=isNaN(t),n=isNaN(this.value);return this.G9||e&&!n||!e&&n||!e&&!n&&0!=w.qr(this.value,t)}return!1},N.eY=function(){g.cT.call(this),this.Qv=null,this.G9=!1,this.value=arguments.length>0?E.iu(arguments)[0]:0},i.Nn(N.eY,g.cT,O.I5),N.eY.prototype.valueOf=function(){return this.value},N.eY.prototype.LR=function(){return this.fF.apply(this,E.iu(arguments))},N.eY.prototype.fF=function(){if(isNaN(arguments[0])&&isNaN(this.value))return 0;if(isNaN(arguments[0])||isNaN(this.value)||0!=w.qr(this.value,arguments[0])){var t=this.value;return this.value=arguments[0],null==this.Qv&&this._(new g.J5(O.Np,t,arguments.length>1?arguments[1]:null)),1}return 0},N.eY.prototype.TX=function(){return this.gy.apply(this,E.iu(arguments))},N.eY.prototype.gy=function(){var t=new Array(arguments.length);t[0]=this.value+arguments[0];for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.eY.prototype.oP=function(){return this.nG.apply(this,E.iu(arguments))},N.eY.prototype.nG=function(){var t=new Array(arguments.length);t[0]=this.value-arguments[0];for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.eY.prototype.An=function(){return this.El.apply(this,E.iu(arguments))},N.eY.prototype.El=function(){var t=new Array(arguments.length);t[0]=this.value*arguments[0];for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.eY.prototype.q4=function(){return this.Wm.apply(this,E.iu(arguments))},N.eY.prototype.Wm=function(){var t=new Array(arguments.length);t[0]=this.value/arguments[0];for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.eY.prototype.Xw=function(){return this.Cs.apply(this,E.iu(arguments))},N.eY.prototype.Cs=function(){var t=new Array(arguments.length);t[0]=Math.min(this.value,arguments[0]);for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.eY.prototype.JF=function(){return this.fj.apply(this,E.iu(arguments))},N.eY.prototype.fj=function(){var t=new Array(arguments.length);t[0]=Math.max(this.value,arguments[0]);for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.eY.prototype._C=function(){return this.Rt.apply(this,E.iu(arguments))},N.eY.prototype.Rt=function(){var t=new Array(arguments.length);t[0]=this.value%arguments[0];for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.eY.prototype.p6=function(){return this.Ib.apply(this,E.iu(arguments))},N.eY.prototype.Ib=function(){var t=new Array(arguments.length);t[0]=Math.pow(this.value,arguments[0]);for(var e=1;e<arguments.length;++e)t[e]=arguments[e];return this.fF.apply(this,t),this},N.eY.prototype.ZV=function(){var t=new Array;t.push(Math.round(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.eY.prototype.Ma=function(){var t=new Array;t.push(Math.ceil(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.eY.prototype.tc=function(){var t=new Array;t.push(Math.floor(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.eY.prototype.Jt=function(){var t=new Array;t.push(Math.abs(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.eY.prototype.oE=function(){var t=new Array;t.push(Math.exp(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.eY.prototype.pu=function(){var t=new Array;t.push(Math.acos(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.eY.prototype.fu=function(){var t=new Array;t.push(Math.asin(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.eY.prototype.Vd=function(){var t=new Array;t.push(Math.atan(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.eY.prototype.JB=function(){var t=new Array;t.push(Math.cos(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.eY.prototype.b7=function(){var t=new Array;t.push(Math.sin(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.eY.prototype.xC=function(){var t=new Array;t.push(Math.tan(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.eY.prototype.gS=function(){var t=new Array;t.push(Math.sqrt(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.eY.prototype.sk=function(){var t=new Array;t.push(Math.log(this.value));for(var e=0;e<arguments.length;++e)t.push(arguments[e]);return this.fF.apply(this,t),this},N.eY.prototype.Ci=function(){var t=new Array(arguments.length+1);t[0]=this.value*Math.random();for(var e=0;e<arguments.length;++e)t[e+1]=arguments[e];return this.fF.apply(this,t),this},N.eY.prototype.SS=function(){return null==this.Qv?(this.G9=arguments.length>0?arguments[0].valueOf():!1,this.Qv=new g.J5(O.Np,this.valueOf()),1):0},N.eY.prototype.Ho=function(){if(null!=this.Qv){var t=this.Qv;(arguments.length<=2||arguments[2])&&this.sI();var e=t.Gi(),n=isNaN(e),r=isNaN(this.value);return this.G9||n&&!r||!n&&r||!n&&!r&&0!=w.qr(this.value,e)||arguments.length>1&&arguments[1]?(this._(t,arguments.length>0?arguments[0]:this.fg()),1):0}return-1},N.eY.prototype.sI=function(){return null!=this.Qv?(this.Qv=null,1):0},N.eY.prototype.oR=function(){return this.Qv},N.eY.prototype.Du=function(){if(null!=this.Qv){var t=this.Qv.Gi(),e=isNaN(t),n=isNaN(this.value);return this.G9||e&&!n||!e&&n||!e&&!n&&0!=w.qr(this.value,t)}return!1},N.aK=function(){if(g.cT.call(this),this.BZ=null,this.GX=arguments[0],!this.xd(arguments[1]))throw new o.xR(b.zm,"enum state not in enum values");this.value=arguments[1]},i.Nn(N.aK,g.cT,O.FM),N.aK.prototype.xd=function(){if(f.mg(this.GX))return this.GX.indexOf(arguments[0])>=0;var t=!1;for(var e in this.GX)t=t||this.GX[e]===arguments[0];return t},N.aK.prototype.valueOf=function(){return this.value},N.aK.prototype.PW=function(){return this.GX},N.aK.prototype.gr=function(){if(this.GX=arguments[0],f.mg(this.GX))this.value=this.GX[this.GX.length-1];else{var t=null;for(var e in this.GX)t=e;this.value=this.GX[e]}return 1},N.aK.prototype.LR=function(){return this.fF.apply(this,arguments)},N.aK.prototype.fF=function(){if(!this.xd(arguments[0]))return 0;if(this.value!==arguments[0]){var t=this.value;return this.value=arguments[0],null==this.BZ&&this._(new g.J5(O.tM,t,arguments.length>1?arguments[1]:null)),1}return 0},N.aK.prototype.ur=function(){return null==this.BZ?(this.BZ=new g.J5(O.tM,this.valueOf(),arguments.length>0?arguments[0]:null),1):0},N.aK.prototype.Fp=function(){if(null!=this.BZ){var t=this.BZ;return(arguments.length<=2||arguments[2])&&this.Xk(),this.value!==t.Gi()||arguments.length>1&&arguments[1]?(this._(t,arguments.length>0?arguments[0]:this.fg()),1):0}return-1},N.aK.prototype.Xk=function(){return null!=this.BZ?(this.BZ=null,1):0},N.aK.prototype.hK=function(){return this.BZ},N.aK.prototype.NP=function(){return null!=this.BZ?this.value!==this.BZ.Gi():!1},N.Wd=function(){if(g.cT.call(this),this.BZ=null,this.GX=arguments[0],!this.xd(arguments[1]))throw new o.xR(b.zm,"enum state not in enum values");this.value=arguments[1]},i.Nn(N.Wd,g.cT,O.Av),N.Wd.prototype.xd=function(){if(f.mg(this.GX))return this.GX.indexOf(arguments[0])>=0;var t=!1;for(var e in this.GX)t=t||this.GX[e]===arguments[0];return t},N.Wd.prototype.valueOf=function(){return this.value;
},N.Wd.prototype.PW=function(){return this.GX},N.Wd.prototype.gr=function(){if(this.GX=arguments[0],f.mg(this.GX))this.value=this.GX[this.GX.length-1];else{var t=null;for(var e in this.GX)t=e;this.value=this.GX[e]}return 1},N.Wd.prototype.LR=function(){return this.fF.apply(this,arguments)},N.Wd.prototype.fF=function(){if(!this.xd(arguments[0]))return 0;if(this.value!==arguments[0]){var t=this.value;return this.value=arguments[0],null==this.BZ&&this._(new g.J5(O.tM,t,arguments.length>1?arguments[1]:null)),1}return 0},N.Wd.prototype.ur=function(){return null==this.BZ?(this.BZ=new g.J5(O.tM,this.valueOf(),arguments.length>0?arguments[0]:null),1):0},N.Wd.prototype.Fp=function(){if(null!=this.BZ){var t=this.BZ;return(arguments.length<=2||arguments[2])&&this.Xk(),this.value!==t.Gi()||arguments.length>1&&arguments[1]?(this._(t,arguments.length>0?arguments[0]:this.fg()),1):0}return-1},N.Wd.prototype.Xk=function(){return null!=this.BZ?(this.BZ=null,1):0},N.Wd.prototype.hK=function(){return this.BZ},N.Wd.prototype.NP=function(){return null!=this.BZ?this.value!==this.BZ.Gi():!1},N.rz=function(){g.cT.call(this),this.Qq=null,this.value=arguments.length>0?E.tT(arguments)[0]:0},i.Nn(N.rz,g.cT,O.Uc),N.rz.prototype.valueOf=function(){return this.value},N.rz.prototype.LR=function(){return this.fF.apply(this,E.tT(arguments))},N.rz.prototype.fF=function(){if(0!=this.value.localeCompare(arguments[0])){var t=this.value;return this.value=arguments[0],null==this.Qq&&this._(new g.J5(O.pi,t,arguments.length>1?arguments[1]:null)),1}return 0},N.rz.prototype.Gf=function(){return null==this.Qq?(this.Qq=new g.J5(O.pi,this.valueOf(),arguments.length>0?arguments[0]:null),1):0},N.rz.prototype.vf=function(){if(null!=this.Qq){var t=this.Qq;return(arguments.length<=2||arguments[2])&&this.ey(),0!=this.value.localeCompare(t.Gi())||arguments.length>1&&arguments[1]?(this._(t,arguments.length>0?arguments[0]:this.fg()),1):0}return-1},N.rz.prototype.ey=function(){return null!=this.Qq?(this.Qq=null,1):0},N.xt=function(){g.cT.call(this),this.Qq=null,this.value=arguments.length>0?E.tT(arguments)[0]:0},i.Nn(N.xt,g.cT,O.GH),N.xt.prototype.valueOf=function(){return this.value},N.xt.prototype.LR=function(){return this.fF.apply(this,E.tT(arguments))},N.xt.prototype.fF=function(){if(0!=this.value.localeCompare(arguments[0])){var t=this.value;return this.value=arguments[0],null==this.Qq&&this._(new g.J5(O.pi,t,arguments.length>1?arguments[1]:null)),1}return 0},N.xt.prototype.Gf=function(){return null==this.Qq?(this.Qq=new g.J5(O.pi,this.valueOf(),arguments.length>0?arguments[0]:null),1):0},N.xt.prototype.vf=function(){if(null!=this.Qq){var t=this.Qq;return(arguments.length<=2||arguments[2])&&this.ey(),0!=this.value.localeCompare(t.Gi())||arguments.length>1&&arguments[1]?(this._(t,arguments.length>0?arguments[0]:this.fg()),1):0}return-1},N.xt.prototype.ey=function(){return null!=this.Qq?(this.Qq=null,1):0};var A=new Object;A.Ep=new Object,A.Ep.w8=0,A.Ep.rU=1,A.Ep.QR=2,A.Ep.jk=3,A.Ep.K4=4,A.Ep.kR=5,A.Ep.FQ=6,A.Ep.ff=7,A.zm=new Object,A.zm.H5="time.BAD_UNIT";var x=new Object;x.ag=function(){var t,e=new Object;if(2==arguments.length)e.oo=arguments[0][A.Ep.rU].valueOf(),e.O5=arguments[0][A.Ep.QR].valueOf(),e.MU=arguments[0][A.Ep.jk].valueOf(),e.Hy=arguments[0][A.Ep.K4].valueOf(),e.KI=arguments[0][A.Ep.kR].valueOf(),t=arguments[1].valueOf();else{var n=arguments[0].valueOf(),r=arguments[1].valueOf();if(t=arguments[2].valueOf(),r==t)return arguments[0].valueOf();switch(r){case A.Ep.rU:e=x.zQ(n);break;case A.Ep.QR:e=x.PC(n);break;case A.Ep.jk:e=x.vr(n);break;case A.Ep.K4:e=x.k7(n);break;case A.Ep.kR:e=x.uo(n);break;default:throw"not implemented yet"}}switch(t){case A.Ep.rU:return e.oo+1e3*e.O5+6e4*e.MU+36e5*e.Hy+864e5*e.KI;case A.Ep.QR:return e.oo/1e3+e.O5+60*e.MU+3600*e.Hy+86400*e.KI;case A.Ep.jk:return e.oo/6e4+e.O5/60+e.MU+60*e.Hy+1440*e.KI;case A.Ep.K4:return e.oo/36e5+e.O5/3600+e.MU/60+e.Hy+24*e.KI;case A.Ep.kR:return e.oo/864e5+e.O5/86400+e.MU/1440+e.Hy/24+e.KI;default:throw"not implemented yet"}},x.zQ=function(t){var e=arguments.length>1?arguments[1]:Number.NEGATIVE_INFINITY,n=arguments.length>2?arguments[2]:Number.POSITIVE_INFINITY;e>n&&(n=e);var r=new Object;return isNaN(t)?null:(e<=A.Ep.rU&&(r.oo=Math.floor(t)),n>A.Ep.rU&&("undefined"!=typeof r.oo&&(r.oo%=1e3),e<=A.Ep.QR&&(r.O5=Math.floor(t/1e3)),n>A.Ep.QR&&("undefined"!=typeof r.O5&&(r.O5%=60),e<=A.Ep.jk&&(r.MU=Math.floor(t/6e4)),n>A.Ep.jk&&("undefined"!=typeof r.MU&&(r.MU%=60),e<=A.Ep.K4&&(r.Hy=Math.floor(t/36e5)),n>A.Ep.K4&&("undefined"!=typeof r.Hy&&(r.Hy%=24),r.KI=Math.floor(t/864e5))))),r)},x.PC=function(t){var e=arguments.length>1?arguments[1]:Number.NEGATIVE_INFINITY,n=arguments.length>2?arguments[2]:Number.POSITIVE_INFINITY;e>n&&(n=e);var r=new Object;return isNaN(t)?null:(e<=A.Ep.rU&&(r.oo=Math.floor(1e3*t)),n>A.Ep.rU&&("undefined"!=typeof r.oo&&(r.oo%=1e3),e<=A.Ep.QR&&(r.O5=Math.floor(t)),n>A.Ep.QR&&("undefined"!=typeof r.O5&&(r.O5%=60),e<=A.Ep.jk&&(r.MU=Math.floor(t/60)),n>A.Ep.jk&&("undefined"!=typeof r.MU&&(r.MU%=60),e<=A.Ep.K4&&(r.Hy=Math.floor(t/3600)),n>A.Ep.K4&&("undefined"!=typeof r.Hy&&(r.Hy%=24),r.KI=Math.floor(t/86400))))),r)},x.vr=function(t){var e=arguments.length>1?arguments[1]:Number.NEGATIVE_INFINITY,n=arguments.length>2?arguments[2]:Number.POSITIVE_INFINITY;e>n&&(n=e);var r=new Object;return isNaN(t)?null:(e<=A.Ep.rU&&(r.oo=Math.floor(6e4*t)),n>A.Ep.rU&&("undefined"!=typeof r.oo&&(r.oo%=1e3),e<=A.Ep.QR&&(r.O5=Math.floor(60*t)),n>A.Ep.QR&&("undefined"!=typeof r.O5&&(r.O5%=60),e<=A.Ep.jk&&(r.MU=Math.floor(t)),n>A.Ep.jk&&("undefined"!=typeof r.MU&&(r.MU%=60),e<=A.Ep.K4&&(r.Hy=Math.floor(t/60)),n>A.Ep.K4&&("undefined"!=typeof r.Hy&&(r.Hy%=24),r.KI=Math.floor(t/1440))))),r)},x.k7=function(t){var e=arguments.length>1?arguments[1]:Number.NEGATIVE_INFINITY,n=arguments.length>2?arguments[2]:Number.POSITIVE_INFINITY;e>n&&(n=e);var r=new Object;return isNaN(t)?null:(e<=A.Ep.rU&&(r.oo=Math.floor(36e5*t)),n>A.Ep.rU&&("undefined"!=typeof r.oo&&(r.oo%=1e3),e<=A.Ep.QR&&(r.O5=Math.floor(3600*t)),n>A.Ep.QR&&("undefined"!=typeof r.O5&&(r.O5%=60),e<=A.Ep.jk&&(r.MU=Math.floor(60*t)),n>A.Ep.jk&&("undefined"!=typeof r.MU&&(r.MU%=60),e<=A.Ep.K4&&(r.Hy=Math.floor(t)),n>A.Ep.K4&&("undefined"!=typeof r.Hy&&(r.Hy%=24),r.KI=Math.floor(t/24))))),r)},x.uo=function(t){var e=arguments.length>1?arguments[1]:Number.NEGATIVE_INFINITY,n=arguments.length>2?arguments[2]:Number.POSITIVE_INFINITY;e>n&&(n=e);var r=new Object;return isNaN(t)?null:(e<=A.Ep.rU&&(r.oo=Math.floor(864e5*t)),n>A.Ep.rU&&("undefined"!=typeof r.oo&&(r.oo%=1e3),e<=A.Ep.QR&&(r.O5=Math.floor(86400*t)),n>A.Ep.QR&&("undefined"!=typeof r.O5&&(r.O5%=60),e<=A.Ep.jk&&(r.MU=Math.floor(1440*t)),n>A.Ep.jk&&("undefined"!=typeof r.MU&&(r.MU%=60),e<=A.Ep.K4&&(r.Hy=Math.floor(24*t)),n>A.Ep.K4&&("undefined"!=typeof r.Hy&&(r.Hy%=24),r.KI=Math.floor(t))))),r)},x.ya=function(t){var e=arguments.length>1?arguments[1]:A.Ep.QR,n="d",r="h",s="m",a="s",i="ms",u=Number.NEGATIVE_INFINITY,l=Number.POSITIVE_INFINITY,p=Number.POSITIVE_INFINITY,h=Number.NEGATIVE_INFINITY,g=!1,f=!1,c=!1,m=!1,y=!1,v=!1,d=!1,w=!1,b=!1,E=!1,O="";if(arguments.length>2&&null!=arguments[2]){"string"==typeof arguments[2].dSym&&(n=arguments[2].dSym),"string"==typeof arguments[2].hSym&&(r=arguments[2].hSym),"string"==typeof arguments[2].mSym&&(s=arguments[2].mSym),"string"==typeof arguments[2].sSym&&(a=arguments[2].sSym),"string"==typeof arguments[2].msSym&&(i=arguments[2].msSym),"boolean"==typeof arguments[2].forceDisplayDay&&(y=arguments[2].forceDisplayDay),"boolean"==typeof arguments[2].forceDisplayHour&&(m=arguments[2].forceDisplayHour),"boolean"==typeof arguments[2].forceDisplayMinute&&(c=arguments[2].forceDisplayMinute),"boolean"==typeof arguments[2].forceDisplaySecond&&(f=arguments[2].forceDisplaySecond),"boolean"==typeof arguments[2].forceDisplayMillisecond&&(g=arguments[2].forceDisplayMillisecond),"boolean"==typeof arguments[2].allDigitsDay&&(E=arguments[2].allDigitsDay),"boolean"==typeof arguments[2].allDigitsHour&&(b=arguments[2].allDigitsHour),"boolean"==typeof arguments[2].allDigitsMinute&&(w=arguments[2].allDigitsMinute),"boolean"==typeof arguments[2].allDigitsSecond&&(d=arguments[2].allDigitsSecond),"boolean"==typeof arguments[2].allDigitsMillisecond&&(v=arguments[2].allDigitsMillisecond),"string"==typeof arguments[2].spacer&&(O=arguments[2].spacer);var N=arguments[2].cutFrom;if("number"==typeof N)switch(N){case A.Ep.kR:case A.Ep.K4:case A.Ep.jk:case A.Ep.QR:case A.Ep.rU:p=N}if(N=arguments[2].cutTo,"number"==typeof N)switch(N){case A.Ep.kR:case A.Ep.K4:case A.Ep.jk:case A.Ep.QR:case A.Ep.rU:h=N}if(N=arguments[2].low,"number"==typeof N)switch(N){case A.Ep.kR:case A.Ep.K4:case A.Ep.jk:case A.Ep.QR:case A.Ep.rU:u=N}if(N=arguments[2].high,"number"==typeof N)switch(N){case A.Ep.kR:case A.Ep.K4:case A.Ep.jk:case A.Ep.QR:case A.Ep.rU:l=N}}h>p&&(h=p);var z;switch(e){case A.Ep.rU:z=x.zQ(t,u,l);break;case A.Ep.QR:z=x.PC(t,u,l);break;case A.Ep.jk:z=x.vr(t,u,l);break;case A.Ep.K4:z=x.k7(t,u,l);break;case A.Ep.kR:z=x.uo(t,u,l);break;default:throw new o.xR(A.zm.H5)}if(null!=z){var I="",T=!1,j=!1;"undefined"==typeof z.KI||!y&&0==z.KI||(T||(T=p==A.Ep.kR),I+=z.KI,I+=n,j=!0);var k=!1;if(T&&(k=h>A.Ep.K4),k||("undefined"==typeof z.Hy||!m&&0==z.Hy||(T||(T=p==A.Ep.K4),j&&(I+=O),b&&z.Hy<10&&(I+="0"),I+=z.Hy,I+=r,j=!0),k=!1,T&&(k=h>A.Ep.jk),k||("undefined"==typeof z.MU||!c&&0==z.MU||(T||(T=p==A.Ep.jk),j&&(I+=O),w&&z.MU<10&&(I+="0"),I+=z.MU,I+=s,j=!0),k=!1,T&&(k=h>A.Ep.QR),k||("undefined"==typeof z.O5||!f&&0==z.O5||(T||(T=p==A.Ep.QR),j&&(I+=O),d&&z.O5<10&&(I+="0"),I+=z.O5,I+=a,j=!0),k=!1,T&&(k=h>A.Ep.rU),k||"undefined"==typeof z.oo||!g&&0==z.oo||(j&&(I+=O),v&&z.oo<100&&(I+="0",z.oo<10&&(I+="0")),I+=z.oo,I+=i)))),""==I)switch(u){case A.Ep.rU:I="0"+i;break;case A.Ep.QR:I="0"+a;break;case A.Ep.jk:I="0"+s;break;case A.Ep.K4:I="0"+r;break;case A.Ep.kR:I="0"+n;break;default:I="00"}return I}return"??"};var z=new Object;z.g=new Object,z.g.Uv=++h.OE,z.cZ=new Object,z.cZ.Qt=0,z.cZ.Dw=1,z.cZ.l1=2,z.cZ.u5=3,z.cZ.TA=4,z.cZ.X0=5,("undefined"==typeof JSON||null==JSON)&&n.warn('"JSON" object unavailable, some operations will fail...');var I=new Object;I.fH=function(){g.cT.call(this),this.url=null,this.method="GET",this.headers=new Object,this.data=null,this.responseText="",this.contentType="text/html",this.ec=null,this.ra=0,this.YM=!0,this.Cv=new XMLHttpRequest,"withCredentials"in this.Cv||("undefined"!=typeof XDomainRequest?(this.YM=!1,this.Cv=new XDomainRequest):this.Cv=null),null!=this.Cv?this.state=z.cZ.Dw:this.state=z.cZ.Qt;var t=this;this.jR=function(){t.YM?m.wJ.Xo.browser[0].identifier==m.wJ.gA?t.Cv.onload=null:m.t(t.Cv,"loadend",t.jR):t.Cv.onload=null,t.responseText=t.Cv.responseText,t.ra=new Date-t.ec,t.state=z.cZ.X0,t._(new g.Za(z.g.Uv))}},i.Nn(I.fH,g.cT),I.fH.N4=function(t,e){return null!=t&&(t+=t.indexOf("?")>-1?"&"+e:"?"+e),t},I.fH.UM=function(t,e){return"number"==typeof e?e==Number.POSITIVE_INFINITY?"Infinity":e==Number.NEGATIVE_INFINITY?"-Infinity":isNaN(e)?"NaN":e:e},I.fH.Bd=function(t,e){return"string"==typeof e?"Infinity"===e?Number.POSITIVE_INFINITY:"-Infinity"===e?Number.NEGATIVE_INFINITY:"NaN"===e?Number.NaN:"obf_+inf"===e?Number.POSITIVE_INFINITY:"obf_-inf"===e?Number.NEGATIVE_INFINITY:"obf_nan"===e?Number.NaN:e:e},I.fH.prototype.destroy=function(){var t=null;return t="function"==typeof g.cT.prototype.destroy?g.cT.prototype.destroy.apply(this,arguments):g.cT.prototype.destroy.apply(this,arguments),this.YM?m.wJ.Xo.browser[0].identifier==m.wJ.gA?this.Cv.onload=null:m.t(this.Cv,"loadend",this.jR):this.Cv.onload=null,t+1},I.fH.prototype.TT=function(t){return this.url=t,1},I.fH.prototype.eG=function(){return this.contentType=arguments[0],1},I.fH.prototype.Ha=function(t){return this.method=t,1},I.fH.prototype.ON=function(t){return this.headers=t,1},I.fH.prototype.bX=function(t,e){return this.headers[t]=e,1},I.fH.prototype.Se=function(t){this.data=JSON.stringify(t,I.fH.UM)},I.fH.prototype.IY=function(t){this.data=t},I.fH.prototype.JL=function(){return this.responseText},I.fH.prototype.Zc=function(){return this.state},I.fH.prototype.ew=function(){return"undefined"!=typeof this.responseText&&null!=this.responseText&&""!=this.responseText?JSON.parse(this.responseText,I.fH.Bd):null},I.fH.prototype.gl=function(){return this.ra},I.fH.prototype.y4=function(){return this.Cv},I.fH.prototype.Os=function(t){var e=t.split("?");return"undefined"!=typeof e[1]},I.fH.prototype.Au=function(){return this.state==z.cZ.Dw?(this.state=z.cZ.l1,this._(new g.Za(z.g.Uv)),this.ec=new Date,this.MX(),1):0},I.fH.prototype.MX=function(){this.state=z.cZ.u5,this._(new g.Za(z.g.Uv)),this.V9()},I.fH.prototype.V9=function(){var t=this.url;if(this.YM){this.Cv.open(this.method,t,!0);for(var e in this.headers)this.Cv.setRequestHeader(e,this.headers[e]);null!=this.contentType&&this.Cv.setRequestHeader("Content-Type",this.contentType),m.wJ.Xo.browser[0].identifier==m.wJ.gA?this.Cv.onload=this.jR:m.YB(this.Cv,"loadend",this.jR)}else this.Cv.onload=this.jR,this.Cv.open(this.method,t);var n=this,r=function(){n.Cv.send(n.data),n.state=z.cZ.TA,n._(new g.Za(z.g.Uv))};this.YM?r():setTimeout(function(){r()},0)};var T=new Object;T.WU=new Object,T.WU.FC="adways";var j=new Object;j.jI=function(){this.WI=null,this.GD=arguments[0],this.Hb=T.WU.FC,this.my=null},i.Nn(j.jI,null),j.jI.prototype.destroy=function(){return null!=this.my&&clearTimeout(this.my),1},j.jI.prototype.Zx=function(){return this.GD},j.jI.prototype.qF=function(t){this.WI=t;var e=this;null!=this.my&&clearTimeout(this.my),this.my=setTimeout(function(){e.WI=null,e.my=null},3e4)},j.jI.prototype.Z5=function(t){this.Hb=t},j.jI.prototype.IX=function(){return this.WI},j.jI.prototype.yO=function(){return this.Hb},j.fH=function(){I.fH.call(this),this.contentType="application/json"},i.Nn(j.fH,I.fH),j.fH.prototype.destroy=function(){var t=null;return t="function"==typeof I.fH.prototype.destroy?I.fH.prototype.destroy.apply(this,arguments):I.fH.prototype.destroy.apply(this,arguments),t+1},j.fH.prototype.MX=function(){if(this.state=z.cZ.u5,this._(new g.Za(z.g.Uv)),null==e.currentCredential.IX()||null==e.currentCredential.yO()){var t=new I.fH;if(t.Ha("GET"),this.YM){var n=t.y4();null!=n&&(n.withCredentials=!0)}t.TT(e.currentCredential.Zx());var r=this;t.YB(z.g.Uv,function(n){if(t.Zc()==z.cZ.X0){var s=n.d_().ew();"undefined"!=typeof s.access_token&&"undefined"!=typeof s.token_provider&&(e.currentCredential.qF(s.access_token),e.currentCredential.Z5(s.token_provider),r.bX("Authorization","Bearer "+e.currentCredential.IX()),r.bX("X-Token-Provider",e.currentCredential.yO()),r.V9())}},this),t.Au()}else this.bX("Authorization","Bearer "+e.currentCredential.IX()),this.bX("X-Token-Provider",e.currentCredential.yO()),this.V9()},e.lib.ready=!0}catch(k){e.lib.ready=!1,e.lib.error=k}e.experience=new Object,e.experience.ready=!1,e.experience.error=null,e.experience.version=1;try{if(e.lib.ready){var F=new Object;F.zzzj=new Object,i.a2(F.zzzj),F.a3=new Object,i.a2(F.a3),F.UK=new Object,i.a2(F.UK),e.oop=new Object,e.oop.createClass=i.Nn,e.oop.createInterface=i.a2,e.oop.instanceOf=i.P,e.event=new Object,e.event.kindCounter=h.OE,e.event.IEventR=h.CH,e.event.IValueEventR=h.C_,e.event.IErrorEventR=h.vS,e.event.IEventDispatcherR=h.Ix,e.event.EventDispatcher=g.cT,e.event.EventDispatcher.prototype.dispatchEvent=g.cT.prototype._,e.event.EventDispatcher.prototype._=function(){return this.dispatchEvent.apply(this,arguments)},e.event.EventDispatcher.prototype.isInstanceOf=g.cT.prototype.c3,e.event.EventDispatcher.prototype.c3=function(){return this.isInstanceOf.apply(this,arguments)},e.event.EventDispatcher.prototype.addEventListener=g.cT.prototype.YB,e.event.EventDispatcher.prototype.YB=function(){return this.addEventListener.apply(this,arguments)},e.event.EventDispatcher.prototype.removeEventListener=g.cT.prototype.t,e.event.EventDispatcher.prototype.t=function(){return this.removeEventListener.apply(this,arguments)},e.event.EventDispatcher.prototype.zzz_=g.cT.prototype.zzP,e.event.EventDispatcher.prototype.zzP=function(){return this.zzz_.apply(this,arguments)},e.event.EventDispatcher.prototype.nbEventListeners=g.cT.prototype.zzj,e.event.EventDispatcher.prototype.zzj=function(){return this.nbEventListeners.apply(this,arguments)},e.event.EventDispatcher.prototype.hasEventListener=g.cT.prototype.zzV,e.event.EventDispatcher.prototype.zzV=function(){return this.hasEventListener.apply(this,arguments)},e.event.EventDispatcher.prototype.willTriggerEvent=g.cT.prototype.zAk,e.event.EventDispatcher.prototype.zAk=function(){return this.willTriggerEvent.apply(this,arguments)},e.event.EventDispatcher.prototype.isRegisteredEvent=g.cT.prototype.zgg,e.event.EventDispatcher.prototype.zgg=function(){return this.isRegisteredEvent.apply(this,arguments)},e.event.Event=g.Za,e.event.Event.prototype.isInstanceOf=g.Za.prototype.c3,e.event.Event.prototype.c3=function(){return this.isInstanceOf.apply(this,arguments)},e.event.Event.prototype.getDispatcher=g.Za.prototype.d_,e.event.Event.prototype.d_=function(){return this.getDispatcher.apply(this,arguments)},e.event.Event.prototype.getKind=g.Za.prototype.f0,e.event.Event.prototype.f0=function(){return this.getKind.apply(this,arguments)},e.event.ValueEvent=g.J5,e.event.ValueEvent.prototype.getOldValue=g.J5.prototype.Gi,e.event.ValueEvent.prototype.Gi=function(){return this.getOldValue.apply(this,arguments)},e.event.KeyValueEvent=g.cF,e.event.KeyValueEvent.prototype.getKey=g.cF.prototype.zcz,e.event.KeyValueEvent.prototype.zcz=function(){return this.getKey.apply(this,arguments)},e.event.DataEvent=g.ks,e.event.DataEvent.prototype.getData=g.ks.prototype.Br,e.event.DataEvent.prototype.Br=function(){return this.getData.apply(this,arguments)},e.event.ERROR_EVENT=h.Cz,e.event.ErrorEvent=g.rM,e.event.ErrorEvent.prototype.getErrorCode=g.rM.prototype.zkp,e.event.ErrorEvent.prototype.zkp=function(){return this.getErrorCode.apply(this,arguments)},e.event.ErrorEvent.prototype.getErrorMessage=g.rM.prototype.zxw,e.event.ErrorEvent.prototype.zxw=function(){return this.getErrorMessage.apply(this,arguments)},e.event.kindCounter=h.OE,e.misc=new Object,e.misc.html=new Object,e.misc.html.userAgent=new Object,e.misc.html.userAgent.UNKNOWN=m.wJ.x7,e.misc.html.userAgent.IOS=m.wJ.ZK,e.misc.html.userAgent.WINDOWS=m.wJ.kL,e.misc.html.userAgent.MACOSX=m.wJ.Fi,e.misc.html.userAgent.SAFARI=m.wJ.gA,e.misc.html.userAgent.FIREFOX=m.wJ.a1,e.misc.html.userAgent.OPERA=m.wJ.qq,e.misc.html.userAgent.IE=m.wJ.uW,e.misc.html.userAgent.CHROME=m.wJ.oF,e.misc.html.userAgent.FENNEC=m.wJ.zL,e.misc.html.userAgent.OPERA_MINI=m.wJ.Ug,e.misc.html.userAgent.OPERA_MOBILE=m.wJ.Dn,e.misc.html.userAgent.APPLE_WEBKIT=m.wJ.mO,e.misc.html.userAgent.PRESTO=m.wJ.Rs,e.misc.html.userAgent.GECKO=m.wJ.Oz,e.misc.html.userAgent.TRIDENT=m.wJ.yb,e.misc.html.userAgent.IPAD=m.wJ.rV,e.misc.html.userAgent.IPHONE=m.wJ.XH,e.misc.html.userAgent.IPOD=m.wJ.AK,e.misc.html.userAgent.MAC=m.wJ.rE,e.misc.html.userAgent.ANDROID=m.wJ.GM,e.misc.html.userAgent.UA=m.wJ.Xo,e.misc.idTool=f.wG,e.misc.idTool.getUID=f.wG.dL,e.misc.html.addEventListener=m.YB,e.misc.html.removeEventListener=m.t,e.misc.html.addCSSClass=m.dR,e.misc.html.removeCSSClass=m.KR,e.misc.html.checkCSSClass=m.pE,e.misc.string=new Object,e.misc.string.defaultMacroList=d._r,e.misc.string.macroReplacer=d.DY,e.type=new Object,e.type.evt=new Object,e.type.evt.ENUM=O.tM,e.type.evt.BOOLEAN=O.Qr,e.type.evt.IEnumR=O.FM,e.type.evt.Enum=N.Wd,e.type.evt.Enum.prototype.setV=N.Wd.prototype.fF,e.type.evt.Enum.prototype.fF=function(){return this.setV.apply(this,arguments)},e.type.evt.Enum.prototype.set=N.Wd.prototype.LR,e.type.evt.Enum.prototype.LR=function(){return this.set.apply(this,arguments)},e.time=new Object,e.time.units=new Object,e.time.units.DEFAULT=A.Ep.w8,e.time.units.MILLISECOND=A.Ep.rU,e.time.units.SECOND=A.Ep.QR,e.time.units.MINUTE=A.Ep.jk,e.time.units.HOUR=A.Ep.K4,e.time.units.DAY=A.Ep.kR,e.time.units.MONTH=A.Ep.FQ,e.time.units.YEAR=A.Ep.ff,e.time.time2String=x.ya,e.experience.IInfoCollector=F.zzzj,e.experience.IInfoCollector.un=function(){return this.contentClicked.apply(this,arguments)},e.experience.IInfoCollector.gC=function(){return this.started.apply(this,arguments)},e.experience.IInfoCollector.CK=function(){return this.loaded.apply(this,arguments)},e.experience.IInfoCollector.JS=function(){return this.ended.apply(this,arguments)},e.experience.IInfoCollector.xn=function(){return this.enrichmentDisplay.apply(this,arguments)},e.experience.IInfoCollector.BQ=function(){return this.percentConsumed.apply(this,arguments)},e.experience.IInfoCollector.oC=function(){return this.actionExecuted.apply(this,arguments)},e.experience.IInfoCollector.zv=function(){return this.sendStat.apply(this,arguments)},e.experience.ISceneControllerWrapper=F.a3,e.experience.IURLOpener=F.UK,e.ajax=new Object,e.ajax.states=new Object,e.ajax.states.INVALID=z.cZ.Qt,e.ajax.states.READY=z.cZ.Dw,e.ajax.states.STARTED=z.cZ.l1,e.ajax.states.INITIALIZING=z.cZ.u5,e.ajax.states.DOING=z.cZ.TA,e.ajax.states.DONE=z.cZ.X0,e.ajax.events=new Object,e.ajax.events.STATE_CHANGED=z.g.Uv,e.ajax.Request=I.fH,e.ajax.Request.prototype.setURL=I.fH.prototype.TT,e.ajax.Request.prototype.TT=function(){return this.setURL.apply(this,arguments)},e.ajax.Request.prototype.setContentType=I.fH.prototype.eG,e.ajax.Request.prototype.eG=function(){return this.setContentType.apply(this,arguments)},e.ajax.Request.prototype.setMethod=I.fH.prototype.Ha,e.ajax.Request.prototype.Ha=function(){return this.setMethod.apply(this,arguments)},e.ajax.Request.prototype.setHeaders=I.fH.prototype.ON,e.ajax.Request.prototype.ON=function(){return this.setHeaders.apply(this,arguments)},e.ajax.Request.prototype.addHeader=I.fH.prototype.bX,e.ajax.Request.prototype.bX=function(){return this.addHeader.apply(this,arguments)},e.ajax.Request.prototype.setDataObject=I.fH.prototype.Se,e.ajax.Request.prototype.Se=function(){return this.setDataObject.apply(this,arguments)},e.ajax.Request.prototype.setDataText=I.fH.prototype.IY,e.ajax.Request.prototype.IY=function(){return this.setDataText.apply(this,arguments)},e.ajax.Request.prototype.getResponseText=I.fH.prototype.JL,e.ajax.Request.prototype.JL=function(){return this.getResponseText.apply(this,arguments)},e.ajax.Request.prototype.getState=I.fH.prototype.Zc,e.ajax.Request.prototype.Zc=function(){return this.getState.apply(this,arguments)},e.ajax.Request.prototype.getResponseObject=I.fH.prototype.ew,e.ajax.Request.prototype.ew=function(){return this.getResponseObject.apply(this,arguments)},e.ajax.Request.prototype.getRequestDuration=I.fH.prototype.gl,e.ajax.Request.prototype.gl=function(){return this.getRequestDuration.apply(this,arguments)},e.ajax.Request.prototype.getXHR=I.fH.prototype.y4,e.ajax.Request.prototype.y4=function(){return this.getXHR.apply(this,arguments)},e.ajax.Request.prototype.load=I.fH.prototype.Au,e.ajax.Request.prototype.Au=function(){return this.load.apply(this,arguments)},e.bo=new Object,e.bo.providers=new Object,e.bo.providers.ADWAYS=T.WU.FC,e.bo.Credential=j.jI,e.bo.Credential.prototype.getCredentialUpdateScriptURL=j.jI.prototype.Zx,e.bo.Credential.prototype.Zx=function(){return this.getCredentialUpdateScriptURL.apply(this,arguments)},e.bo.Credential.prototype.getProvider=j.jI.prototype.yO,e.bo.Credential.prototype.yO=function(){return this.getProvider.apply(this,arguments)},e.bo.Credential.prototype.getAccessToken=j.jI.prototype.IX,e.bo.Credential.prototype.IX=function(){return this.getAccessToken.apply(this,arguments)},e.bo.Credential.prototype.setProvider=j.jI.prototype.Z5,e.bo.Credential.prototype.Z5=function(){return this.setProvider.apply(this,arguments)},e.bo.Credential.prototype.setAccessToken=j.jI.prototype.qF,e.bo.Credential.prototype.qF=function(){return this.setAccessToken.apply(this,arguments)},e.bo.Request=j.fH}else e.experience.ready=!1,e.experience.error="lib error"}catch(k){e.experience.ready=!1,e.experience.error=k}}(window);(function(window) {
    "use strict";

    //console.warn("l'objet console n'est pas supporte par tout les navigateurs");
    //console.warn("TODO: gestion des erreurs!");

    var adways = window.adways;

    if (typeof (adways) === "undefined") {
        console.warn("\"adways\" is undefined");
        return;
    }

    if (typeof (adways.interactive) === "undefined") {
//        console.warn("\"adways.interactive\" is undefined");
        adways.interactive = new Object();
    } else if (typeof (adways.interactive) !== "object") {
        console.warn("\"adways.interactive\" is already defined and is not an object");
        return;
    }

    if (typeof (adways.event) !== "object") {
        console.warn("\"adways.event\" is undefined");
        return;
    }
    if (typeof (adways.event.EventDispatcher) !== "function") {
        console.warn("\"adways.event.EventDispatcher\" is undefined");
        return;
    }
    if (typeof (adways.misc) !== "object") {
        console.warn("\"adways.misc\" is undefined");
        return;
    }
    if (typeof (adways.misc.idTool) !== "object") {
        console.warn("\"adways.misc.idTool\" is undefined");
        return;
    }
    if (typeof (adways.misc.idTool.getUID) !== "function") {
        console.warn("\"adways.misc.idTool.getUID\" is undefined");
        return;
    }

    /*##################################################################################################################################################*/
    /*
     * Deprecated but still there for retrocompatibility
     * note: the plugins also have the same objects (experienceEvents and Experience), do not forget to update them!
     */

    if (typeof (adways.interactive.experienceEvents) !== "undefined") {
        if (typeof (adways.interactive.experienceEvents) !== "object") {
            console.warn("\"adways.interactive.experienceEvents\" is not an object");
            return;
        }
    }
    else
        adways.interactive.experienceEvents = new Object();
//
//    if (typeof (adways.interactive.experienceEvents.PUBLICATION_ID_CHANGED) !== "undefined") {
//        if (typeof (adways.interactive.experienceEvents.PUBLICATION_ID_CHANGED) !== "number") {
//            console.warn("\"adways.interactive.experienceEvents.PUBLICATION_ID_CHANGED\" is not a number");
//            return;
//        }
//    }
//    else
//        adways.interactive.experienceEvents.PUBLICATION_ID_CHANGED = ++adways.event.kindCounter;
//
//    if (typeof (adways.interactive.experienceEvents.PUBLICATION_JSON_CHANGED) !== "undefined") {
//        if (typeof (adways.interactive.experienceEvents.PUBLICATION_JSON_CHANGED) !== "number") {
//            console.warn("\"adways.interactive.experienceEvents.PUBLICATION_JSON_CHANGED\" is not a number");
//            return;
//        }
//    }
//    else
//        adways.interactive.experienceEvents.PUBLICATION_JSON_CHANGED = ++adways.event.kindCounter;
//    
//    if (typeof (adways.interactive.experienceEvents.SCENE_CHANGED) !== "undefined") {
//        if (typeof (adways.interactive.experienceEvents.SCENE_CHANGED) !== "number") {
//            console.warn("\"adways.interactive.experienceEvents.SCENE_CHANGED\" is not a number");
//            return;
//        }
//    }
//    else
//        adways.interactive.experienceEvents.SCENE_CHANGED = ++adways.event.kindCounter;
//    
//    // deprecated event
//    if (typeof (adways.interactive.experienceEvents.PUBLICATION_LOADED) !== "undefined") {
//        if (typeof (adways.interactive.experienceEvents.PUBLICATION_LOADED) !== "number") {
//            console.warn("\"adways.interactive.experienceEvents.PUBLICATION_LOADED\" is not a number");
//            return;
//        }
//    }
//    else
//        adways.interactive.experienceEvents.PUBLICATION_LOADED = ++adways.event.kindCounter;
//    //////////////////////
//    
//    
//    
//    
//    
//    
//    if (typeof (adways.interactive.experienceEvents.PLAYER_BUILT) !== "undefined") {
//        if (typeof (adways.interactive.experienceEvents.PLAYER_BUILT) !== "number") {
//            console.warn("\"adways.interactive.experienceEvents.PLAYER_BUILT\" is not a number");
//            return;
//        }
//    }
//    else
//        adways.interactive.experienceEvents.PLAYER_BUILT = ++adways.event.kindCounter;
//
    if (typeof (adways.interactive.experienceEvents.DELEGATE_BUILT) !== "undefined") {
        if (typeof (adways.interactive.experienceEvents.DELEGATE_BUILT) !== "number") {
            console.warn("\"adways.interactive.experienceEvents.DELEGATE_BUILT\" is not a number");
            return;
        }
    }
    else
        adways.interactive.experienceEvents.DELEGATE_BUILT = ++adways.event.kindCounter;
//
//    if (typeof (adways.interactive.experienceEvents.SCENE_BUILT) !== "undefined") {
//        if (typeof (adways.interactive.experienceEvents.SCENE_BUILT) !== "number") {
//            console.warn("\"adways.interactive.experienceEvents.SCENE_BUILT\" is not a number");
//            return;
//        }
//    }
//    else
//        adways.interactive.experienceEvents.SCENE_BUILT = ++adways.event.kindCounter;

    if (typeof (adways.interactive.experienceEvents.READY) !== "undefined") {
        if (typeof (adways.interactive.experienceEvents.READY) !== "number") {
            console.warn("\"adways.interactive.experienceEvents.READY\" is not a number");
            return;
        }
    }
    else
        adways.interactive.experienceEvents.READY = ++adways.event.kindCounter;
//
//
//
//
//
//
//    if (typeof (adways.interactive.experienceEvents.PUBLICATION_ID_EXISTS) !== "undefined") {
//        if (typeof (adways.interactive.experienceEvents.PUBLICATION_ID_EXISTS) !== "number") {
//            console.warn("\"adways.interactive.experienceEvents.PUBLICATION_ID_EXISTS\" is not a number");
//            return;
//        }
//    }
//    else
//        adways.interactive.experienceEvents.PUBLICATION_ID_EXISTS = ++adways.event.kindCounter;
//    if (typeof (adways.interactive.experienceEvents.LOAD_CALLED) !== "undefined") {
//        if (typeof (adways.interactive.experienceEvents.LOAD_CALLED) !== "number") {
//            console.warn("\"adways.interactive.experienceEvents.LOAD_CALLED\" is not a number");
//            return;
//        }
//    }
//    else
//        adways.interactive.experienceEvents.LOAD_CALLED = ++adways.event.kindCounter;


    if (typeof (adways.interactive.experiences) !== "undefined") {
        if (!(adways.interactive.experiences instanceof Array)) {
            console.warn("\"adways.interactive.experiences\" is not an array");
            return;
        }
    }
    else
        adways.interactive.experiences = new Array();

    if (typeof (adways.env) !== "undefined")
        console.warn("\"adways.env\" is already defined");
    else
        adways.env = new Object();

    if (typeof (adways.env.tools) !== "undefined")
        console.warn("\"adways.env.tools\" is already defined");
    else
        adways.env.tools = new Object();

    if (typeof (adways.env.tools.fullscreenHelper) !== "undefined")
        console.warn("\"adways.env.tools.fullscreenHelper\" is already defined");
    else
        adways.env.tools.fullscreenHelper = new Object();

    if (typeof (adways.env.tools.fullscreenHelper.url) !== "undefined")
        console.warn("\"adways.env.tools.fullscreenHelper.url\" is already defined");
    else
        adways.env.tools.fullscreenHelper.url = "//dj5ag5n6bpdxo.cloudfront.net/libs/tools/FullscreenHelper.js";

    if (typeof (adways.playerHelpers) !== "undefined")
        console.warn("\"adways.playerHelpers\" is already defined");
    else
        adways.playerHelpers = new Object();

    // adways.playerHelpers declarations to allow the retrocompatibility to prevent errors
    // we get playerBuilderClassname, playerBuilderUrl, delegateBuilderClassname, delegateBuilderUrl from the js_constant
    // so we don t need to redeclare it
    adways.playerHelpers.BRIGHTCOVE = "brightcove";
    adways.playerHelpers.DAILYMOTION = "DAILYMOTION";
    adways.playerHelpers.DUMMY = "DUMMY";
    adways.playerHelpers.FRANCETV = "FRANCETV";
    adways.playerHelpers.HTML5 = "HTML5";
    adways.playerHelpers.JWP6ARTE = "JWP6ARTE";
    adways.playerHelpers.JWPLAYER6 = "JWPLAYER6";
    adways.playerHelpers.KALTURA = "KALTURA";
    adways.playerHelpers.M6VIDEOJS4 = "M6VIDEOJS4";
    adways.playerHelpers.OOYALA = "OOYALA";
    adways.playerHelpers.VIDEOJS = "VIDEOJS";
    adways.playerHelpers.VIMEO = "VIMEO";
    adways.playerHelpers.YOUTUBE = "YOUTUBE";
    adways.playerHelpers.THEPLATFORM = "THEPLATFORM";

    adways.interactive.PlayerJSAdapter = function () {
    this.experience = arguments[0];
    this.receiver = null;
    this.fakeLoop = false;
    var playerJSScriptTag = document.createElement('script');
    playerJSScriptTag.type = 'text/javascript';
    var aaScriptTagSrc = "https://cdn.embed.ly/player-0.1.0.min.js";
//    if (typeof (adways.tweaks) !== "undefined" && typeof (adways.tweaks.forceProtocol) !== "undefined") {
//        if (aaScriptTagSrc.search(/^http[s]?\:\/\//) === -1) {
//            aaScriptTagSrc = adways.tweaks.forceProtocol + ":" + aaScriptTagSrc;
//        }
//    }
    playerJSScriptTag.src = aaScriptTagSrc;

    var playerJSScriptLoadedCb = function () {
        adways.misc.html.removeEventListener(playerJSScriptTag, "load", playerJSScriptLoadedCb);
        if(typeof(playerjs) === "undefined")
            return;
        this.receiver = new playerjs.Receiver();

        /* Methods */
        this.receiver.on('play', function () {
            var s2p = this.experience.getS2P();
            if (s2p) {
                s2p.play(true);
                var p2s = this.experience.getP2S();
                if (p2s && p2s.getPlayState().valueOf() === adways.resource.playStates.PLAYING) {
                    this.receiver.emit('play');
                }
            }
        }.bind(this));

        this.receiver.on('pause', function () {
            var s2p = this.experience.getS2P();
            if (s2p) {
                s2p.pause(true);
                var p2s = this.experience.getP2S();
                if (p2s && p2s.getPlayState().valueOf() === adways.resource.playStates.PAUSED) {
                    this.receiver.emit('pause');
                }
            }
        }.bind(this));

        this.receiver.on('getPaused', function (callback) {
            var p2s = this.experience.getP2S();
            var paused = false;
            if (p2s) {
                paused = (p2s.getPlayState().valueOf() === adways.resource.playStates.PAUSED);
            }
            callback(paused);
        }.bind(this));

        this.receiver.on('getCurrentTime', function (callback) {
            var p2s = this.experience.getP2S();
            var currentTime = 0;
            if (p2s) {
                currentTime = p2s.getCurrentTime().valueOf();
            }
            callback(currentTime);
        }.bind(this));

        this.receiver.on('setCurrentTime', function (value) {
            var s2p = this.experience.getS2P();
            if (s2p) {
                s2p.setCurrentTime(value, true);
            }
        }.bind(this));

        this.receiver.on('getDuration', function (callback) {
            var p2s = this.experience.getP2S();
            var duration = 0;
            if (p2s) {
                duration = p2s.getDuration().valueOf();
            }
            callback(duration);
        }.bind(this));

        this.receiver.on('getVolume', function (callback) {
            var p2s = this.experience.getP2S();
            var volume = 0;
            if (p2s) {
                volume = p2s.getVolume().valueOf();
            }
            callback(volume * 100);
        }.bind(this));

        this.receiver.on('setVolume', function (value) {
            var s2p = this.experience.getS2P();
            if (s2p) {
                s2p.setVolume(value / 100, true);
            }
        }.bind(this));

        this.receiver.on('mute', function () {
            var s2p = this.experience.getS2P();
            if (s2p) {
                s2p.mute(true);
            }
        }.bind(this));

        this.receiver.on('unmute', function () {
            var s2p = this.experience.getS2P();
            if (s2p) {
                s2p.unmute(true);
            }
        }.bind(this));

        this.receiver.on('getMuted', function (callback) {
            var p2s = this.experience.getP2S();
            var muted = 0;
            if (p2s) {
                muted = p2s.getMuted().valueOf();
            }
            callback(muted);
        }.bind(this));


        this.receiver.on('getLoop', function (callback) {
            var that = this;
            callback(that.fakeLoop);
        }.bind(this));

        this.receiver.on('setLoop', function (value) {
            this.fakeLoop = value;
            //video.loop = value;
        }.bind(this));

        if (this.experience.getSceneState().valueOf() === adways.interactive.Experience.sceneStates.BUILT) {
            this.addListenerOnScene(this.experience.getScene());
        }
        this.experience.addEventListener(adways.interactive.Experience.Event.SCENE_STATE_CHANGED, this.sceneStateChangedCB, this);

        this.experience.addEventListener(adways.interactive.Experience.Event.READY, this.experienceReadyCb, this);
    }.bind(this);
    adways.misc.html.addEventListener(playerJSScriptTag, "load", playerJSScriptLoadedCb);
    document.getElementsByTagName('head')[0].appendChild(playerJSScriptTag);
};

adways.oop.createClass(adways.interactive.PlayerJSAdapter);

adways.interactive.PlayerJSAdapter.prototype.destroy = function () {
    if (this.receiver !== null) {
        this.experience.removeEventListener(adways.interactive.Experience.Event.READY, this.experienceReadyCb, this);
        this.experience.removeEventListener(adways.interactive.Experience.Event.SCENE_STATE_CHANGED, this.sceneStateChangedCB, this);
        if (this.experience.getSceneState().valueOf() === adways.interactive.Experience.sceneStates.BUILT) {
            this.removeListenerOnScene(this.experience.getScene());
        }
        delete this.receiver;
        this.receiver = null;
    }
    return 1;
};

adways.interactive.PlayerJSAdapter.prototype.experienceReadyCb = function () {
    this.receiver.ready();
};

adways.interactive.PlayerJSAdapter.prototype.sceneStateChangedCB = function () {
    switch (this.experience.getSceneState().valueOf()) {
        case adways.interactive.Experience.sceneStates.EMPTY:
            this.removeListenerOnScene(this.experience.getScene());
            break;
        case adways.interactive.Experience.sceneStates.BUILT:
            this.addListenerOnScene(this.experience.getScene());
            break;
    }
};

adways.interactive.PlayerJSAdapter.prototype.addListenerOnScene = function () {
    var p2s = this.experience.getP2S();
    if (p2s !== null) {
        p2s.addEventListener(adways.resource.events.CURRENT_TIME_CHANGED, this.p2sCurrentTimeChangedListener, this);
        p2s.addEventListener(adways.resource.events.ENDED_CHANGED, this.p2sEndedEventListener, this);
        p2s.addEventListener(adways.resource.events.PLAY_STATE_CHANGED, this.p2sPlayStateChangedListener, this);
    }
    this.experience.getScene().addEventListener(adways.hv.events.P2S_CONTROLLER_CHANGED, this.p2sChangedCB, this);
};

adways.interactive.PlayerJSAdapter.prototype.removeListenerOnScene = function () {
    if (this.experience.getScene() !== null) {
        this.experience.getScene().removeEventListener(adways.hv.events.P2S_CONTROLLER_CHANGED, this.p2sChangedCB, this);
        var p2s = this.experience.getP2S();
        if (p2s !== null) {
            p2s.removeEventListener(adways.resource.events.CURRENT_TIME_CHANGED, this.p2sCurrentTimeChangedListener, this);
            p2s.removeEventListener(adways.resource.events.ENDED_CHANGED, this.p2sEndedEventListener, this);
            p2s.removeEventListener(adways.resource.events.PLAY_STATE_CHANGED, this.p2sPlayStateChangedListener, this);
        }
    }
};

adways.interactive.PlayerJSAdapter.prototype.p2sChangedCB = function () {
    var oldValue = arguments[0].getOldValue();
    if (oldValue !== null) {
        oldValue.removeEventListener(adways.resource.events.CURRENT_TIME_CHANGED, this.p2sCurrentTimeChangedListener, this);
        oldValue.removeEventListener(adways.resource.events.ENDED_CHANGED, this.p2sEndedEventListener, this);
        oldValue.removeEventListener(adways.resource.events.PLAY_STATE_CHANGED, this.p2sPlayStateChangedListener, this);
    }
    var p2s = this.experience.getP2S();
    if (p2s !== null) {
        p2s.addEventListener(adways.resource.events.CURRENT_TIME_CHANGED, this.p2sCurrentTimeChangedListener, this);
        p2s.addEventListener(adways.resource.events.ENDED_CHANGED, this.p2sEndedEventListener, this);
        p2s.addEventListener(adways.resource.events.PLAY_STATE_CHANGED, this.p2sPlayStateChangedListener, this);
    }
};

adways.interactive.PlayerJSAdapter.prototype.p2sCurrentTimeChangedListener = function () {
    var p2sCurrentTime = this.experience.getP2S().getCurrentTime();
    var p2sDuration = this.experience.getP2S().getDuration();
//    console.log('timeupdate', {
//          seconds: p2sCurrentTime,
//          duration: p2sDuration
//    });
    this.receiver.emit('timeupdate', {
        seconds: p2sCurrentTime,
        duration: p2sDuration
    });
};

adways.interactive.PlayerJSAdapter.prototype.p2sEndedEventListener = function () {
    this.receiver.emit('ended');
};

adways.interactive.PlayerJSAdapter.prototype.p2sPlayStateChangedListener = function (e) {
    if (this.experience.getP2S().getPlayState().valueOf() === adways.resource.playStates.PLAYING) {
        this.receiver.emit('play');
    } else {
        this.receiver.emit('pause');
    }
};/* global adways */
var AAAEventTypes = new Object();
AAAEventTypes.INTERACTIVITY = "interactivity";
AAAEventTypes.ENRICHMENT = "enrichment";
AAAEventTypes.USER_CUSTOM = "user_custom";
AAAEventTypes.VIDEO = "video";

adways.interactive.AAACollector = function () {
    this.experience = arguments[0];
    
    this.tracker = null;
    this.trackerPendingQueue = new Array();
    
    this.interactivity_length = null;
    this.interactivity_time_reference = null;
    
    var aaScriptTag = document.createElement('script'); 
    aaScriptTag.type = 'text/javascript'; 
    var aaScriptTagSrc= '//www.adwstats.com/sdk.js';        
    if(typeof(adways.tweaks)!=="undefined" && typeof(adways.tweaks.forceProtocol)!=="undefined") {
        if (aaScriptTagSrc.search(/^http[s]?\:\/\//) === -1) {
            aaScriptTagSrc = adways.tweaks.forceProtocol+":"+aaScriptTagSrc;
        }
    }
    aaScriptTag.src = aaScriptTagSrc;      
            
    var aaScriptLoadedCb = function() {
        adways.misc.html.removeEventListener(aaScriptTag, "load", aaScriptLoadedCb);
        this.tracker = new adways.analytics.Tracker({
            record_interface : 'interactive',
            creative_format : 'interactive',
            creative_id : this.experience.getPublicationID().valueOf(),
            video_mime : this.experience.ownPlayer ? this.experience.getPublicationJSON().project.media.mime : null,
//            video_code : this.experience.ownPlayer ? this.experience.getPublicationJSON().project.media.assets[0].location : null,
            video_code : this.experience.ownPlayer ? 
            (this.experience.getPublicationJSON().project.media.xkey!==null ?
                this.experience.getPublicationJSON().project.media.xkey
                :(this.experience.getPublicationJSON().project.media.assets.length>0?
                    this.experience.getPublicationJSON().project.media.assets[0].location
                    :null))
            :null,
            video_state : function() { return this.experience.getP2S().getPlayState(); }.bind(this),
            video_current_time : function() { return this.experience.getP2S().getCurrentTime(); }.bind(this),
            video_is_live : null, // Not defined for VI
            video_is_fullscreen : function() { return this.experience.getP2S().getFullscreen(); }.bind(this),
            video_volume : function() { return this.experience.getP2S().getVolume(); }.bind(this),
            video_muted : function() { return this.experience.getP2S().getMuted(); }.bind(this),
            video_displayed_stream_width : function() { return this.experience.getP2S().getStreamSize()[0]; }.bind(this),
            video_displayed_stream_height : function() { return this.experience.getP2S().getStreamSize()[1]; }.bind(this),
            video_player_width : function() { return this.experience.getP2S().getRenderSize()[0]; }.bind(this),
            video_player_height : function() { return this.experience.getP2S().getRenderSize()[1]; }.bind(this),
            video_controls_enabled : null, // Not defined for VI

            interactivity_length : function () {
                if (this.interactivity_length === null && this.experience.getScene())
                    this.interactivity_length = this.experience.getScene().getInteractivityLength();
                if(this.interactivity_length !== Number.POSITIVE_INFINITY && this.interactivity_length !== Number.NEGATIVE_INFINITY)
                    return this.interactivity_length;
                else return 0;
            }.bind(this),
            interactivity_content_id : null,
            interactivity_enrichment_id : null,
            interactivity_time_reference : function() { 
                if (this.interactivity_time_reference === null && this.experience.getScene())
                    this.interactivity_time_reference = this.experience.getScene().getTimeReference().valueOf();
                return this.interactivity_time_reference;
            }.bind(this)
        });
        
        while (this.trackerPendingQueue.length > 0) {
            var args = this.trackerPendingQueue.shift();
//            console.log(args);
            this.sendData(args);
        }
        
    }.bind(this);
    adways.misc.html.addEventListener(aaScriptTag, "load", aaScriptLoadedCb);
    document.getElementsByTagName('head')[0].appendChild(aaScriptTag);
    
    this.percentConsumed = null;
    this.impression = false;
    this.trueView = 0;

    if (this.experience.getSceneState().valueOf() === adways.interactive.Experience.sceneStates.BUILT) {
        this.addListenerOnScene(this.experience.getScene());
    }
    this.experience.addEventListener(adways.interactive.Experience.Event.SCENE_STATE_CHANGED, this.sceneStateChangedCB, this);
    
    this.experience.addEventListener(adways.interactive.Experience.Event.READY, this.experienceReadyCb, this);
};
adways.oop.createClass(adways.interactive.AAACollector, null, adways.experience.IURLOpener);

adways.interactive.AAACollector.prototype.destroy = function () {
    
    this.experience.removeEventListener(adways.interactive.Experience.Event.READY, this.experienceReadyCb, this);

    this.experience.removeEventListener(adways.interactive.Experience.Event.SCENE_STATE_CHANGED, this.sceneStateChangedCB, this);

    if (this.experience.getSceneState().valueOf() === adways.interactive.Experience.sceneStates.BUILT) {
        this.removeListenerOnScene(this.experience.getScene());
    }
    
    return 1;
};

adways.interactive.AAACollector.prototype.sendData = function (data) {
    if (this.experience.getPublicationID() !== "preview") { 
        if (this.tracker !== null) {
            this.tracker.sendData(data);
        }
        else {
            this.trackerPendingQueue.push(data);
        }
    }
};

/**
 * Implements URLOpener redirection
 */
adways.interactive.AAACollector.prototype.exec = function () {
    var url = adways.misc.string.macroReplacer(arguments[0].valueOf());
    var targetMode = (arguments.length>1?arguments[1].valueOf():adways.hv.targetURLModes.BLANK);

    var target = "";
    if(targetMode===adways.hv.targetURLModes.BLANK) {
        target = "_blank";
    } else {
        target = "_self";
    }
    if (url.search(/^\.\//) > -1) {
        target = "_parent";
    }    
    var completionValue = Math.round((this.experience.getP2S().getCurrentTime().valueOf()/this.experience.getP2S().getDuration().valueOf())*10)*10;

    var mailtoPos = url.valueOf().indexOf("mailto:");
    if(mailtoPos===0) {
        return location.href=url.valueOf(); 
    }
    
    var teltoPose = url.valueOf().indexOf("tel:");
    if(teltoPose===0) {
        return location.href=url.valueOf(); 
    }
    
    this.tracker.redirect(
        { 
            event_type: 'redirect',
            event_name: encodeURI(url.valueOf()).substr(0, 500),
            completion_value: completionValue, 
            completion_ref: this.experience.getPublicationID().valueOf()
        }, null, null, null, url.valueOf(), target);
};

adways.interactive.AAACollector.prototype.sceneStateChangedCB = function () {
    switch (this.experience.getSceneState().valueOf()) {
        case adways.interactive.Experience.sceneStates.EMPTY:
            this.removeListenerOnScene(this.experience.getScene());
            break;
        case adways.interactive.Experience.sceneStates.BUILT:
            this.addListenerOnScene(this.experience.getScene());
            break;
    }
};

adways.interactive.AAACollector.prototype.experienceReadyCb = function () {
    this.sendData({
        event_type: "state",
        event_name: "init"
    });
};

adways.interactive.AAACollector.prototype.addListenerOnScene = function () {
    // this.experience.getScene().addEventListener(adways.interactive.events.ACTION_EXECUTED, this.actionExecutedCB, this);
    if (this.experience.getScene().getPublicationId() !== "") {
        this.sendData({
            event_type: "state",
            event_name: "loaded"
        });
    }
    this.experience.getScene().addEventListener(adways.hv.events.NAME_CHANGED, this.publicationIDChangedCb, this);

    var enrichments = this.experience.getScene().getEnrichments().toArray();
    for (var i = 0; i < enrichments.length; ++i) {
        this.addListenerOnEnrichment(enrichments[i]);
    }
    this.experience.getScene().getEnrichments().addEventListener(adways.collection.evt.COLLECTION, this.enrichmentsCollectionCb, this);

    // var cuePoints = this.experience.getScene().getCuePoints().AMEToArray();
    // for (var i = 0; i < cuePoints.length; ++i) {
    //     this.addListenerOnCuePoints(cuePoints[i]);
    // }
    // this.experience.getScene().getCuePoints().addEventListener(adways.anim.evt.MAP, this.cuePointsCollectionCb, this);

    var p2s = this.experience.getP2S();
    if (p2s !== null) {
        p2s.addEventListener(adways.resource.events.CURRENT_TIME_CHANGED, this.p2sCurrentTimeChangedListener, this);
        p2s.addEventListener(adways.resource.events.ENDED_CHANGED, this.p2sEndedEventListener, this);
        p2s.addEventListener(adways.resource.events.PLAY_STATE_CHANGED, this.p2sPlayStateChangedListener, this);
    }
    this.experience.getScene().addEventListener(adways.hv.events.P2S_CONTROLLER_CHANGED, this.p2sChangedCB, this);
};

adways.interactive.AAACollector.prototype.removeListenerOnScene = function () {
    if(this.experience.getScene()!==null) {
        this.experience.getScene().removeEventListener(adways.hv.events.P2S_CONTROLLER_CHANGED, this.p2sChangedCB, this);
        var p2s = this.experience.getP2S();
        if (p2s !== null) {
            p2s.removeEventListener(adways.resource.events.CURRENT_TIME_CHANGED, this.p2sCurrentTimeChangedListener, this);
            p2s.removeEventListener(adways.resource.events.ENDED_CHANGED, this.p2sEndedEventListener, this);
            p2s.removeEventListener(adways.resource.events.PLAY_STATE_CHANGED, this.p2sPlayStateChangedListener, this);
        }
        // this.experience.getScene().getCuePoints().removeEventListener(adways.anim.evt.MAP, this.cuePointsCollectionCb, this);
        // var cuePoints = this.experience.getScene().getCuePoints().AMEToArray();
        // for (var i = 0; i < cuePoints.length; ++i) {
        //     this.removeListenerOnCuePoints(cuePoints[i]);
        // }

        this.experience.getScene().getEnrichments().removeEventListener(adways.collection.evt.COLLECTION, this.enrichmentsCollectionCb, this);
        var enrichments = this.experience.getScene().getEnrichments().toArray();
        for (var i = 0; i < enrichments.length; ++i) {
            this.removeListenerOnEnrichment(enrichments[i]);
        }
        this.experience.getScene().removeEventListener(adways.hv.events.NAME_CHANGED, this.publicationIDChangedCb, this);
        // this.experience.getScene().removeListenerOnEnrichment(adways.interactive.events.ACTION_EXECUTED, this.actionExecutedCB, this);
    }
};


adways.interactive.AAACollector.prototype.p2sChangedCB = function () {
    var oldValue = arguments[0].getOldValue();
    if (oldValue !== null) {
        oldValue.removeEventListener(adways.resource.events.CURRENT_TIME_CHANGED, this.p2sCurrentTimeChangedListener, this);
        oldValue.removeEventListener(adways.resource.events.ENDED_CHANGED, this.p2sEndedEventListener, this);
        oldValue.removeEventListener(adways.resource.events.PLAY_STATE_CHANGED, this.p2sPlayStateChangedListener, this);
    }
    var p2s = this.experience.getP2S();
    if (p2s !== null) {
        p2s.addEventListener(adways.resource.events.CURRENT_TIME_CHANGED, this.p2sCurrentTimeChangedListener, this);
        p2s.addEventListener(adways.resource.events.ENDED_CHANGED, this.p2sEndedEventListener, this);
        p2s.addEventListener(adways.resource.events.PLAY_STATE_CHANGED, this.p2sPlayStateChangedListener, this);
    }
};

adways.interactive.AAACollector.prototype.p2sCurrentTimeChangedListener = function () {
    var p2sCurrentTime = this.experience.getP2S().getCurrentTime();
    var p2sDuration = this.experience.getP2S().getDuration();
    if (!isNaN(p2sCurrentTime) && !isNaN(p2sDuration) && p2sCurrentTime >= 0.1 && p2sDuration !== null && p2sDuration !==0 && this.experience.getP2S().getPlayState() === adways.resource.playStates.PLAYING) {
        var percentCaclulate = p2sCurrentTime * 100 / p2sDuration;
        var stepCalculate = Math.floor(percentCaclulate / 10);
        if (this.percentConsumed === null) {
            this.percentConsumed = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            this.sendData({
                event_type: "state", 
                event_name: "impression"
            });
        }
        if (this.percentConsumed[stepCalculate] === 0) {
            this.percentConsumed[stepCalculate] = 1;
            this.sendData(
                {
                    event_type: 'completion',
                    event_name: this.experience.getPublicationID().valueOf(), 
                    event_data: stepCalculate * 10,
                    event_unit: '%'
                });
            if(this.trueView<2) {
                this.trueView++;
                if(this.trueView === 2) {
                    this.sendData(
                        {event_type: 'state', event_name: 'trueview', event_data: 10, event_unit: '%', completion_ref: this.experience.getPublicationID().valueOf()});
                }
            }
        }
    }
};

adways.interactive.AAACollector.prototype.p2sEndedEventListener = function () {
    this.sendData({
        event_type: "state", 
        event_name: "end"
    });
};

adways.interactive.AAACollector.prototype.p2sPlayStateChangedListener = function (e) {
    if(e.getDispatcher().getPlayState().valueOf() === adways.resource.playStates.PLAYING){        
        this.sendData({
            event_type: "state", 
            event_name: "play"
        });        
    } else {
        this.sendData({
            event_type: "state", 
            event_name: "pause"
        });        
    }
};

adways.interactive.AAACollector.prototype.publicationIDChangedCb = function () {
    if (this.experience.getScene().getPublicationId() !== "") {
        this.sendData({
            event_type: "state", 
            event_name: "loaded"
        });
    }
};

adways.interactive.AAACollector.prototype.enrichmentsCollectionCb = function (e) {
    var enrichments = e.getRemovedElements();
    for (var i = 0; i < enrichments.length; ++i) {
        this.removeListenerOnEnrichment(enrichments[i]);
    }
    enrichments = e.getAddedElements();
    for (var i = 0; i < enrichments.length; ++i) {
        this.addListenerOnEnrichment(enrichments[i]);
    }
};

adways.interactive.AAACollector.prototype.addListenerOnEnrichment = function (enrichment) {
    var layout = enrichment.getLayout();
    if (layout !== null) {
        this.addListenerOnLayout(layout);
    }
    enrichment.addEventListener(adways.hv.events.LAYOUT_CHANGED, this.enrichmentsLayoutCb, this);
    // enrichment.addEventListener(adways.interactive.events.ACTION_EXECUTED, this.actionExecutedCB, this);
    enrichment.addEventListener(adways.hv.events.ACTIVATED_STATE_CHANGED, this.enrichmentActivatedChangedCB, this);
    enrichment.addEventListener(adways.hv.events.START_USER_MOVE, this.startUserMoveCB, this);
    enrichment.addEventListener(adways.hv.events.START_USER_RESIZE, this.startUserResizeCB, this);

    if(enrichment.getActivated().valueOf()) {
        var completionValue = Math.round((this.experience.getP2S().getCurrentTime().valueOf()/this.experience.getP2S().getDuration().valueOf())*10)*10;
        var content = enrichment.getLayout().getContent();
        this.sendData({
            event_type: AAAEventTypes.ENRICHMENT,
            event_name: "activated",
            interactivity_enrichment_id : enrichment.getEnrichmentId().valueOf(),
            interactivity_content_id : content.getContentId() !== null ? content.getContentId().valueOf() : null,
            completion_value: completionValue, 
            completion_ref: this.experience.getPublicationID().valueOf()
        });
        
        if(!this.impression) {
            this.impression = true;
//        console.log("impression");
            
            this.sendData({
                event_type: "state",
                event_name: "enrichment_first_impression",
                interactivity_enrichment_id : enrichment.getEnrichmentId().valueOf(),
                interactivity_content_id : content.getContentId() !== null ? content.getContentId().valueOf() : null,
                completion_value: completionValue, 
                completion_ref: this.experience.getPublicationID().valueOf()
            });
        }  
    }

};

adways.interactive.AAACollector.prototype.removeListenerOnEnrichment = function (enrichment) {
    var layout = enrichment.getLayout();
    if (layout !== null) {
        this.removeListenerOnLayout(layout);
    }
    enrichment.removeEventListener(adways.hv.events.LAYOUT_CHANGED, this.enrichmentsLayoutCb, this);
    // enrichment.removeEventListener(adways.interactive.events.ACTION_EXECUTED, this.actionExecutedCB, this);
    enrichment.removeEventListener(adways.hv.events.ACTIVATED_STATE_CHANGED, this.enrichmentActivatedChangedCB, this);
    enrichment.removeEventListener(adways.hv.events.START_USER_MOVE, this.startUserMoveCB, this);
    enrichment.removeEventListener(adways.hv.events.START_USER_RESIZE, this.startUserResizeCB, this);
};

adways.interactive.AAACollector.prototype.enrichmentActivatedChangedCB = function (valueEvent) {    
    var enrichment = valueEvent.getDispatcher();
    var content = enrichment.getLayout().getContent();
    var completionValue = Math.round((this.experience.getP2S().getCurrentTime().valueOf()/this.experience.getP2S().getDuration().valueOf())*10)*10;

    var eventName = enrichment.getActivated().valueOf() ? "activated" : "deactivated";
    this.sendData({
        event_type: AAAEventTypes.ENRICHMENT,
        event_name: eventName,
        interactivity_enrichment_id : enrichment.getEnrichmentId().valueOf(),
        interactivity_content_id : content.getContentId() !== null ? content.getContentId().valueOf() : null,
        completion_value: completionValue, 
        completion_ref: this.experience.getPublicationID().valueOf()
    });
        
    if(!this.impression && enrichment.getActivated().valueOf()) {
        this.impression = true;
//        console.log("impression");
        this.sendData({
            event_type: "state",
            event_name: "enrichment_first_impression",
            interactivity_enrichment_id : enrichment.getEnrichmentId().valueOf(),
            interactivity_content_id : content.getContentId() !== null ? content.getContentId().valueOf() : null,
            completion_value: completionValue, 
            completion_ref: this.experience.getPublicationID().valueOf()
        });
    }
};

adways.interactive.AAACollector.prototype.enrichmentsLayoutCb = function () {
    var oldValue = arguments[0].getOldValue();
    if (oldValue !== null) {
        this.removeListenerOnLayout(oldValue);
    }
    var layout = arguments[0].getLayout();
    if (layout !== null) {
        this.addListenerOnLayout(layout);
    }
};

adways.interactive.AAACollector.prototype.addListenerOnLayout = function () {
    var content = arguments[0].getContent();
    if (content !== null) {
        this.addListenerOnContent(content);
    }
    arguments[0].addEventListener(adways.layout.events.CONTENT_CHANGED, this.contentChangedCb, this);
};

adways.interactive.AAACollector.prototype.removeListenerOnLayout = function () {
    var content = arguments[0].getContent();
    if (content !== null) {
        this.removeListenerOnContent(content);
    }
    arguments[0].removeEventListener(adways.layout.events.CONTENT_CHANGED, this.contentChangedCb, this);
};

adways.interactive.AAACollector.prototype.contentChangedCb = function () {
    var oldValue = arguments[0].getOldValue();
    if (oldValue !== null) {
        this.removeListenerOnContent(oldValue);
    }
    var content = arguments[0].getContent();
    if (content !== null) {
        this.addListenerOnContent(layout);
    }
};


adways.interactive.AAACollector.prototype.addListenerOnContent = function () {
    arguments[0].addEventListener(adways.interactive.events.USER_ACTION_EXECUTED, this.userActionExecutedCb, this);
    arguments[0].addEventListener(adways.interactive.events.STAT_SEND, this.statSendCb, this);
};

adways.interactive.AAACollector.prototype.removeListenerOnContent = function () {
    arguments[0].removeEventListener(adways.interactive.events.USER_ACTION_EXECUTED, this.userActionExecutedCb, this);
    arguments[0].removeEventListener(adways.interactive.events.STAT_SEND, this.statSendCb, this);
};

adways.interactive.AAACollector.prototype.userActionExecutedCb = function (event) {
    var content = event.getDispatcher();
    var enrichment = content.getEnrichment();
    var completionValue = Math.round((this.experience.getP2S().getCurrentTime().valueOf()/this.experience.getP2S().getDuration().valueOf())*10)*10;
    this.sendData(
        {
            event_type: 'interaction',
            event_name: 'enrichment_user_action',
            completion_value: completionValue, 
            completion_ref: this.experience.getPublicationID().valueOf(),
            interactivity_enrichment_id : enrichment.getEnrichmentId().valueOf(),
            interactivity_content_id : content.getContentId() !== null ? content.getContentId().valueOf() : null
        }/*,
        {
            event_type: AAAEventTypes.ENRICHMENT,
            event_name: 'enrichment_user_action',
            completion_value: completionValue, 
            completion_ref: this.experience.getPublicationID().valueOf(),
            interactivity_enrichment_id : enrichment.getEnrichmentId().valueOf(),
            interactivity_content_id : content.getContentId() !== null ? content.getContentId().valueOf() : null
        }*/);
};

adways.interactive.AAACollector.prototype.startUserMoveCB = function (event) {
    var enrichment = event.getDispatcher();
    var content = enrichment.getLayout().getContent();

    var completionValue = Math.round((this.experience.getP2S().getCurrentTime().valueOf()/this.experience.getP2S().getDuration().valueOf())*10)*10;
    this.sendData({
        event_type: AAAEventTypes.ENRICHMENT,
        event_name: "move",
        interactivity_enrichment_id : enrichment.getEnrichmentId().valueOf(),
        interactivity_content_id : content.getContentId() !== null ? content.getContentId().valueOf() : null,
        completion_value: completionValue, 
        completion_ref: this.experience.getPublicationID().valueOf()
    });
};
adways.interactive.AAACollector.prototype.startUserResizeCB = function (event) {
    var enrichment = event.getDispatcher();
    var content = enrichment.getLayout().getContent();

    var completionValue = Math.round((this.experience.getP2S().getCurrentTime().valueOf()/this.experience.getP2S().getDuration().valueOf())*10)*10;
    this.sendData({
        event_type: AAAEventTypes.ENRICHMENT,
        event_name: "resize",
        interactivity_enrichment_id : enrichment.getEnrichmentId().valueOf(),
        interactivity_content_id : content.getContentId() !== null ? content.getContentId().valueOf() : null,
        completion_value: completionValue, 
        completion_ref: this.experience.getPublicationID().valueOf()
    });
};

adways.interactive.AAACollector.prototype.statSendCb = function (event) {
    var content = event.getDispatcher();
    var enrichment = content.getEnrichment();
    var statKey = event.getData()[0];
    var statValue = event.getData()[1];

    var completionValue = Math.round((this.experience.getP2S().getCurrentTime().valueOf()/this.experience.getP2S().getDuration().valueOf())*10)*10;
    var data = {
        event_type: AAAEventTypes.ENRICHMENT,
        event_name: statKey,
        interactivity_enrichment_id : enrichment.getEnrichmentId().valueOf(),
        interactivity_content_id : content.getContentId() !== null ? content.getContentId().valueOf() : null,
        completion_value: completionValue, 
        completion_ref: this.experience.getPublicationID().valueOf()
    };
    
    if(statValue !== null && statValue !== '') data.event_data = statValue;
    
    this.sendData(data);
};/* global adways */

(function() {

    var MEDIA_PARAMS = 1;
    var PLAYER_PARAMS = 2;
    var DELEGATE_PARAMS = 3;
    var PLAYER_OPTION_PARAMS = 4;
    var SCENE_PARAMS = 5;
    var EXPERIENCE_PARAMS = 6;

                        
    window.adwMobilecheck = function() {
        var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
      };
    window.adwMobileAndTabletcheck = function() {
        var check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };
      
    adways.interactive.Experience = function() {

        adways.event.EventDispatcher.call(this);    // super class constructor call

//    this.buildExp = new adways.interactive.Experience.BuilderExperience(this);

        this.jsonRequest = null;
        this.playerClassRequest = null;

        this.s2p = null;
        this.p2s = null;
        this.aaaCollector = null;
        this.playerJSAdapter = null;
        
        this.intervalTimesheet = null;
        
        this.experienceID = adways.misc.idTool.getUID();

        this.autoBuildScene = false;
        this.asyncBuildScene = false;
        this.scene = null;
        this.sceneState = new adways.type.evt.Enum(adways.interactive.Experience.sceneStates, adways.interactive.Experience.sceneStates.EMPTY);
        this.sceneTimeReference = false;

        this.publicationID = "";
        this.publicationJSON = null;
        this.clearSceneShouldResetPublicationID = true;

        this.clearingPlayer = false;
        this.params = new Object();
        this.params[PLAYER_PARAMS] = new Object();
        this.params[MEDIA_PARAMS] = new Object();
        this.params[PLAYER_OPTION_PARAMS] = new Object();
        this.params[SCENE_PARAMS] = new Object();
        this.params[EXPERIENCE_PARAMS] = new Object();
        this.playerBuilderURL = null;
        this.playerBuilderClassname = null;
        this.autoBuildPlayer = false;       // automatically build the player on json reception
        this.playerState = new adways.type.evt.Enum(adways.interactive.Experience.playerStates, adways.interactive.Experience.playerStates.EMPTY);
        this.playerContainer = null;
        this.playerAPI = null;
        this.playerClassJSConstant = "";
        // Only the setPlayerAPI should force ownPlayer to false
        // this.ownPlayer = false;
        this.ownPlayer = true;
        this.playerBuilder = null;
        this.playerScriptTag = null;

        this._redirectionAlreadyCreated = false;
        this._redirectToIOSApp = false;
//        this._iphoneBehavior = adways.interactive.Experience.IPhoneBehaviors.OPEN_CURRENT_PAGE_IN_ADWAYS_PLAYER;
        this._iphoneBehavior = adways.interactive.Experience.IPhoneBehaviors.DEFAULT;
        if (adways.misc.html.userAgent.UA.device[0].identifier === adways.misc.html.userAgent.IPHONE && adways.misc.html.userAgent.UA.os[0].version[1] < 10 &&
                !(window.navigator.standalone) &&
                adways.misc.html.userAgent.UA.browser[0].identifier !== adways.misc.html.userAgent.UNKNOWN) {
            this._redirectToIOSApp = true;
        }

        var that = this;
        this.playerScriptTagErrorCB = function() {

            that.playerState.setV(adways.interactive.Experience.playerStates.ERROR);
            that.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.PLAYER_STATE_CHANGED));
        };
        this.playerScriptTagLoadCB = function() {
            try {
                eval('that.playerBuilder = new ' + that.playerBuilderClassname + '(that.playerContainer, that)');
            }
            catch (e) {
                console.warn(e);
                that.playerState.setV(adways.interactive.Experience.playerStates.ERROR);
                that.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.PLAYER_STATE_CHANGED));
            }
            //document.getElementsByTagName("head")[0].removeChild(that.playerScriptTag);
            that.playerScriptTag = null;
        };

        this.params[DELEGATE_PARAMS] = new Object();
        this.delegateBuilderURL = null;
        this.delegateBuilderClassname = null;
        this.autoBuildDelegate = false;     // automatically build the delegate on "playerReady"
        this.delegateState = new adways.type.evt.Enum(adways.interactive.Experience.delegateStates, adways.interactive.Experience.delegateStates.EMPTY);
        this.delegate = null;
        this.delegateBuilder = null;
        this.delegateScriptTag = null;
        this.delegateScriptTagErrorCB = function() {
            that.delegateState.setV(adways.interactive.Experience.delegateStates.ERROR);
            that.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.DELEGATE_STATE_CHANGED));
        };
        this.delegateScriptTagLoadCB = function() {
            try {
                eval('that.delegateBuilder = new ' + that.delegateBuilderClassname + '(that)');
            }
            catch (e) {
                console.warn(e);
                that.delegateState.setV(adways.interactive.Experience.delegateStates.ERROR);
                that.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.DELEGATE_STATE_CHANGED));
            }
            //document.getElementsByTagName("head")[0].removeChild(that.delegateScriptTag);
            that.delegateScriptTag = null;
        };

        this.forceBuildInteractivity = false;
        this.clearingPlater = false;

        this.interactiveLibScriptTag = null;
        this.libLoadedCb = function() {
            if(that.aaaCollector===null) {
                that.aaaCollector = new adways.interactive.AAACollector(that);
                adways.interactive.tools.urlOpener = that.aaaCollector;
            }
            if(that.playerJSAdapter===null) {
                that.playerJSAdapter = new adways.interactive.PlayerJSAdapter(that);
            }
            
            // lmasclaux 03.30.2016, this condition prevents errors if the lib is already loaded, to verify
            if (that.interactiveLibScriptTag !== null) {
                adways.misc.html.removeEventListener(that.interactiveLibScriptTag, "load", that.libLoadedCb);
                adways.misc.html.removeEventListener(that.interactiveLibScriptTag, "error", that.libLoadedErrorCb);
                adways.interactive.Experience.interactiveLibState.setV(adways.interactive.Experience.interactiveLibStates.LOADED);
                that.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.INTERACTIVE_LIB_STATE_CHANGED));
            }

            if (typeof (that.publicationJSON.publication.id) === "string" && that.publicationJSON.publication.id !== "" && that.publicationID !== that.publicationJSON.publication.id) {
                that.publicationID = that.publicationJSON.publication.id;
                that.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.PUBLICATION_ID_CHANGED));
            }

            /*var res = 0;*/

            //    if (/*opt param autoInterpretJSON*/(typeof (arguments[1]) === "boolean") ? arguments[1] : true) {

            if (that.autoBuildScene && that.asyncBuildScene && that.shouldBuildInteractivity()) {
                /*res +=*/ that.buildScene();
            }

            if (that.getPlayerState().valueOf() === adways.interactive.Experience.playerStates.EMPTY) {
                // now add the params found in the that.publicationJSON but without overriding those already set

                for (var k in that.publicationJSON["project"]["player_class"]["player_params"]) {
                    if (typeof (that.getPlayerParam(k)) === "undefined") {
                        that.setPlayerParam(k, that.publicationJSON["project"]["player_class"]["player_params"][k]);
                    }
                }

                if (that.playerBuilderURL === null && that.publicationJSON["project"]["player_class"]["player_builder_url"])
                    that.setPlayerBuilderURL(that.publicationJSON["project"]["player_class"]["player_builder_url"]);

                if (that.playerBuilderClassname === null && that.publicationJSON["project"]["player_class"]["player_builder_classname"])
                    that.setPlayerBuilderClassname(that.publicationJSON["project"]["player_class"]["player_builder_classname"]);

                if (that.delegateBuilderURL === null && that.publicationJSON["project"]["player_class"]["delegate_builder_url"])
                    that.setDelegateBuilderURL(that.publicationJSON["project"]["player_class"]["delegate_builder_url"]);

                if (that.delegateBuilderClassname === null && that.publicationJSON["project"]["player_class"]["delegate_builder_classname"])
                    that.setDelegateBuilderClassname(that.publicationJSON["project"]["player_class"]["delegate_builder_classname"]);

                // retro compatibility with adways.playerHelpers to get the delegate_url from the publication
                //if (typeof adways.playerHelpers != "undefined"
                //        && typeof adways.playerHelpers[that.publicationJSON["project"]["player_class"]["js_constant"]] != "undefined"
                //        && typeof adways.playerHelpers[that.publicationJSON["project"]["player_class"]["js_constant"]].delegate_url == "undefined"
                //        && that.publicationJSON["project"]["player_class"]["delegate_url"])
                //    adways.playerHelpers[that.publicationJSON["project"]["player_class"]["js_constant"]].delegate_url = that.publicationJSON["project"]["player_class"]["delegate_url"];
                // end retro compatibility

                for (var k in that.publicationJSON["project"]["media"]) {
                    if (typeof (that.getMediaParam(k)) === "undefined") {
                        that.setMediaParam(k, that.publicationJSON["project"]["media"][k]);
                    }
                }

                for (var k in that.publicationJSON["project"]["options"]) {
                    if (typeof (that.getOption(k)) === "undefined") {
                        that.setOption(k, that.publicationJSON["project"]["options"][k]);
                    }
                }

                // cannot be factorized outside the "if" because must be called after all the previous "setters"
                that.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.PUBLICATION_JSON_CHANGED));

                if (that.autoBuildPlayer) {
                    that.buildPlayer();
//                res += (10 * that.buildPlayer());
//                res += 100;
                }
                else {
//                res += 200;
                }
            }

            else {
                that.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.PUBLICATION_JSON_CHANGED));
                /* Does the delegate need to be constructed ?
                 * If the player is:
                 * .EMPTY, then the delegate cannot be constructed
                 *  => NO DELEGATE CONSTRUCTION
                 *
                 * .ERROR, then the delegate cannot be constructed
                 *  => NO DELEGATE CONSTRUCTION
                 *
                 * .BUILDING, the end of the process will be in charge of dealing with "autoBuildDelegate"
                 *  => NO DELEGATE CONSTRUCTION
                 *
                 * .BUILT, then the building process is already ended, so it is up to the current method to deal with "autoBuildDelegate"
                 *  => DELEGATE MAY BE CONSTRUCTED:
                 *     the delegate can be built only when delegateState is "EMPTY" (not already "BUILT" or in a "BUILDING" process) and of
                 *     course, when "autoBuildDelegate" is true.
                 */
                if (that.getPlayerState().valueOf() === adways.interactive.Experience.playerStates.BUILT &&
                        that.getDelegateState().valueOf() === adways.interactive.Experience.delegateStates.EMPTY &&
                        that.autoBuildDelegate) {
                    that.buildDelegate();
//                res += (10 * that.buildDelegate());
//                res += 300;
                }
                else {
//                res += 400;
                    /*
                     * ????
                     * remark: the day "buildScene" becomes really asynchronous (done in a jsworker as an exemple, so parallel execution)
                     * testing for dispatchgin the deprecated event "READY" here is required
                     * ????
                     * probably no...
                     */
                    that.buildScene();
                }
            }
            //    }
            //    else that.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.PUBLICATION_JSON_CHANGED));

            //    return res;
            // setting the "publicationJSON" member is done, so return 1.
            // the logic around the "res" value is wrong, since "buildPlayer" or "buildDelegate" can return a negative value, res can become negative
            // while it must not since the execution is still "normal".
//        return res;

        };
        this.libLoadedErrorCb = function() {
            // dthibault 03.31.2016, this condition prevents errors if the lib is already loaded, to verify
            if (that.interactiveLibScriptTag !== null) {
                adways.misc.html.removeEventListener(that.interactiveLibScriptTag, "load", that.libLoadedCb);
                adways.misc.html.removeEventListener(that.interactiveLibScriptTag, "error", that.libLoadedErrorCb);
                adways.interactive.Experience.interactiveLibState.setV(adways.interactive.Experience.interactiveLibStates.ERROR);
                that.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.INTERACTIVE_LIB_STATE_CHANGED));
            }
        };

    };

//----------------------------------------------------------------------------------------------------------------------------------------------------

// Experience extends EventDispatcher, implements IInfoCollector
// note: implementing IInfoCollector will be removed in a near future.
    adways.oop.createClass(adways.interactive.Experience, adways.event.EventDispatcher, adways.experience.IInfoCollector);

//####################################################################################################################################################
    adways.interactive.Experience.timesheetPresets = new Object();
    
//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.sceneStates = new Object();
    adways.interactive.Experience.sceneStates.EMPTY = 1;
    adways.interactive.Experience.sceneStates.BUILDING = 2;
    adways.interactive.Experience.sceneStates.BUILT = 3;
    adways.interactive.Experience.sceneStates.ERROR = 4;

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.playerStates = new Object();
    adways.interactive.Experience.playerStates.EMPTY = 1;
    adways.interactive.Experience.playerStates.BUILDING = 2;
    adways.interactive.Experience.playerStates.BUILT = 3;
    adways.interactive.Experience.playerStates.ERROR = 4;

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.delegateStates = new Object();
    adways.interactive.Experience.delegateStates.EMPTY = 1;
    adways.interactive.Experience.delegateStates.BUILDING = 2;
    adways.interactive.Experience.delegateStates.BUILT = 3;
    adways.interactive.Experience.delegateStates.ERROR = 4;

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.interactiveLibStates = new Object();
    adways.interactive.Experience.interactiveLibStates.EMPTY = 1;
    adways.interactive.Experience.interactiveLibStates.LOADING = 2;
    adways.interactive.Experience.interactiveLibStates.LOADED = 3;
    adways.interactive.Experience.interactiveLibStates.ERROR = 4;

    adways.interactive.Experience.interactiveLibState = new adways.type.evt.Enum(adways.interactive.Experience.interactiveLibStates, adways.interactive.Experience.interactiveLibStates.EMPTY);

//####################################################################################################################################################

    adways.interactive.Experience.IPhoneBehaviors = new Object();
    adways.interactive.Experience.IPhoneBehaviors.DEFAULT = 132;
    adways.interactive.Experience.IPhoneBehaviors.OPEN_CURRENT_PAGE_IN_ADWAYS_PLAYER = 133;
    adways.interactive.Experience.IPhoneBehaviors.OPEN_PUBLICATION_URL_IN_ADWAYS_PLAYER = 134;

//----------------------------------------------------------------------------------------------------------------------------------------------------
    /*
     Détruit l'experience
     */
    adways.interactive.Experience.prototype.destroy = function() {
        this.clearAll();
        adways.destruct(this.aaaCollector);
        adways.destruct(this.playerJSAdapter);
        adways.destruct(this.playerState);
        adways.destruct(this.delegateState);
        adways.destruct(this.sceneState);
        adways.event.EventDispatcher.prototype.destroy.call(this);
        
//    adways.destruct(this.buildExp);
        return 1;
    };

//####################################################################################################################################################

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.clearAll = function() {
        this.clearScene();
        adways.destruct(this.s2p);
        this.s2p = null;
        adways.destruct(this.p2s);
        this.p2s = null;
        this.clearPlayer(true);
        return 1;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.clearScene = function() {
        
        clearInterval(this.intervalTimesheet);
        this.intervalTimesheet = null;
        
        // cancel the json request if any
        // remember that destructing a adways.ajax.Request object also remove all its listeners, so the result is similar to cancelling the request...
        adways.destruct(this.jsonRequest);
        this.jsonRequest = null;

        if (this.clearSceneShouldResetPublicationID && this.publicationID !== "") {
            this.publicationID = "";
            this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.PUBLICATION_ID_CHANGED));
        }
        this.clearSceneShouldResetPublicationID = true;

        if (this.publicationJSON !== null) {
            this.publicationJSON = null;
            this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.PUBLICATION_JSON_CHANGED));
        }

        // destruct the scene if any
        if (this.scene !== null) {
            if (this.s2p != null)
                this.scene.setP2SController(null);
            if (this.p2s != null)
                this.scene.setS2PController(null);
            if (this.aaaCollector != null)
                this.aaaCollector.removeListenerOnScene();
            if (this.playerJSAdapter != null)
                this.playerJSAdapter.removeListenerOnScene();

            this.scene.getInfoCollector().removeInfoCollector(this);
            adways.interactive.io.unloadPublication(this.scene);
            adways.destruct(this.scene);
            this.scene = null;
        }

//    adways.destruct(this.s2p);
//    this.s2p = null;
//    adways.destruct(this.p2s);
//    this.p2s = null;
      if(!(arguments.length > 0 && !arguments[0])){
        if (this.s2p != null)
            this.s2p.pause();
        if (this.p2s != null)
            this.p2s.pause();
      }

        if (this.sceneState.valueOf() !== adways.interactive.Experience.sceneStates.EMPTY) {
            this.sceneState.setV(adways.interactive.Experience.sceneStates.EMPTY);
            this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.SCENE_STATE_CHANGED));
        }


        return 1;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    /*
     Ne détruit que le player et le delegate, pas la scène, pas les SceneControllerWrapper
     */
    adways.interactive.Experience.prototype.clearPlayer = function() {
        this.clearingPlayer = true;

        var full = (arguments.length > 0 && typeof (arguments[0]) === "boolean" ? arguments[0] : false);

        if (full) {
            if (this.delegateScriptTag !== null) {
                adways.misc.html.removeEventListener(this.delegateScriptTag, "load", this.delegateScriptTagLoadCB);
                adways.misc.html.removeEventListener(this.delegateScriptTag, "error", this.delegateScriptTagErrorCB);
                this.delegateScriptTag = null;
            }
            this.params[DELEGATE_PARAMS] = new Object();
            this.delegateBuilderURL = null;
            this.delegateBuilderClassname = null;
        }
        this.autoBuildDelegate = false;
        adways.destruct(this.delegate);
        this.delegate = null;
        adways.destruct(this.delegateBuilder);
        this.delegateBuilder = null;

        if (full) {
            if (this.playerScriptTag !== null) {
                adways.misc.html.removeEventListener(this.playerScriptTag, "load", this.playerScriptTagLoadCB);
                adways.misc.html.removeEventListener(this.playerScriptTag, "error", this.playerScriptTagErrorCB);
                this.playerScriptTag = null;
            }
            if (this.playerClassRequest !== null) {
                adways.misc.html.removeEventListener(this.playerClassRequest, "load", this.playerScriptTagLoadCB);
                adways.misc.html.removeEventListener(this.playerClassRequest, "error", this.playerScriptTagErrorCB);
                this.playerClassRequest = null;
            }
        }

        if (this.ownPlayer) {
            this.playerBuilder.destructPlayer();
        }
        adways.destruct(this.playerBuilder);
        this.playerBuilder = null;

        if (full) {
            this.params[PLAYER_PARAMS] = new Object();
            this.params[MEDIA_PARAMS] = new Object();
            this.params[PLAYER_OPTION_PARAMS] = new Object();
            this.params[SCENE_PARAMS] = new Object();
            this.params[EXPERIENCE_PARAMS] = new Object();
            this.playerBuilderURL = null;
            this.playerBuilderClassname = null;
            this.playerContainer = null;
        }

        this.autoBuildPlayer = false;
        this.playerAPI = null;
        this.ownPlayer = false;
        this.playerClassJSConstant = "";

        this.clearingPlayer = false;

        var dispatchDelegate = false;
        var dispatchPlayer = false;

        if (this.delegateState.valueOf() !== adways.interactive.Experience.delegateStates.EMPTY) {
            this.delegateState.setV(adways.interactive.Experience.delegateStates.EMPTY);
            dispatchDelegate = true;
        }

        if (this.playerState.valueOf() !== adways.interactive.Experience.playerStates.EMPTY) {
            this.playerState.setV(adways.interactive.Experience.playerStates.EMPTY);
            dispatchPlayer = true;
        }

        if (dispatchDelegate)
            this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.DELEGATE_STATE_CHANGED));
        if (dispatchPlayer)
            this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.PLAYER_STATE_CHANGED));

        return 1;
    };

//####################################################################################################################################################
    adways.interactive.Experience.prototype.setTimesheetPreset = function() {
        if (arguments.length < 1) {
            return -1;
        }
        if (typeof arguments[0] !== "number") {
            return -2;
        }
        var timesheetURL = "//d3iuja8fgpny0q.cloudfront.net/timesheets/presets/" + arguments[0]+".json"; 
        return this.setTimesheetURL(timesheetURL);
    };
    
    adways.interactive.Experience.prototype.setTimesheetJSON = function() {
        
        if (arguments.length < 1) {
            return -1;
        }
        if (typeof arguments[0] !== "string") {
            return -2;
        }
        var responseParsed = JSON.parse(arguments[0]);
//        console.log("responseParsed ", responseParsed);
        
        if (typeof responseParsed !== "object") {
           return -3;
        }
        var timesheet = responseParsed["timesheet"];
        if (typeof timesheet === "undefined") {
           return -4;
        }
        var enrichmentsDesc = timesheet["enrichments"];
        if (typeof enrichmentsDesc !== "object") {
           return -5;
        }
        
        var that = this;
        
        var processTimesheet = function() {
            var enrichments = that.getScene().getEnrichments().toArray();
            var hotspots = new Array();
            for(var i=0;i<enrichments.length;i++) {
                if (enrichments[i].getEnrichmentKind() === window.adways.hv.enrichmentKinds.HOTSPOT) {
                    hotspots.push(enrichments[i]);
                }                
            }
            
            for(var i=0;i<enrichmentsDesc.length;i++) {
//                        var enrichmentDesc = enrichmentsDesc[i];
                if(hotspots.length>i) {
                    hotspots[i].setBotActivation(new adways.type.evt.Boolean(false));
                }
            }
            
            var s2pCurrentTimeChangedTimesheetListener = function() {
                if(that.getP2S().getPlayState() === adways.resource.playStates.PLAYING) {
    //                var currentTime = that.getP2S().getCurrentTime();
                    var currentTime = that.getScene().getTime().valueOf();
    //                console.log(currentTime);
                    for(var i=0;i<enrichmentsDesc.length;i++) {
                        var enrichmentDesc = enrichmentsDesc[i];
                        var tInitObject = enrichmentDesc["tInit"];
                        var tInitValue = tInitObject["value"];
                        var tInitUnit = tInitObject["unit"];
                        var tInit = tInitValue;
                        if(tInitUnit === "millisecond") {
                            tInit/=1000;
                        }
                        if(tInitUnit === "minute") {
                            tInit*=60;
                        }
                        if(tInitUnit === "hour") {
                            tInit*=3600;
                        }
                        var durationObject = enrichmentDesc["duration"];
                        var durationValue = durationObject["value"];
                        var durationUnit = durationObject["unit"];
                        var duration = durationValue;
                        if(durationUnit === "millisecond") {
                            duration/=1000;
                        }
                        if(durationUnit === "minute") {
                            duration*=60;
                        }
                        if(durationUnit === "hour") {
                            duration*=3600;
                        }
                        var frequencyObject = enrichmentDesc["frequency"];
                        var frequencyValue = frequencyObject["value"];
                        var frequencyUnit = frequencyObject["unit"];
                        var frequency = frequencyValue;
                        if(frequencyUnit === "millisecond") {
                            frequency/=1000;
                        }
                        if(frequencyUnit === "minute") {
                            frequency*=60;
                        }
                        if(frequencyUnit === "hour") {
                            frequency*=3600;
                        }
    //                    console.log("enrichment ",i, tInit, duration, frequency);
                        if(hotspots.length>i) {
                            var enrichment = hotspots[i];
                            var relativeTime = (currentTime-tInit)%frequency;
//                            if (i==0) console.log(currentTime, "relativeTime 0", " <= ", relativeTime," < ", duration);
                            if((0<=relativeTime) && (relativeTime<(duration))) {
//                                console.log("enrichement ",i, currentTime);
//                                if(!enrichment.getActivated().valueOf()) {
                                if(!enrichment.getBotActivation().valueOf()) {
//                                    enrichment.open();
                                      enrichment.getBotActivation().setV(true);
                                }
                            } else {                            
//                                if(enrichment.getActivated().valueOf()) {
                                if(enrichment.getBotActivation().valueOf()) {
//                                    enrichment.close();
                                      enrichment.getBotActivation().setV(false);
                                }
                            }
                        }
                    }      
                }
            }
//            that.getP2S().addEventListener(adways.resource.events.CURRENT_TIME_CHANGED, s2pCurrentTimeChangedTimesheetListener, that);
            that.intervalTimesheet = setInterval(s2pCurrentTimeChangedTimesheetListener, 40);

            return 1;
        };
        
        var sceneStateChangedTimesheetCB = function () {
            switch (this.getSceneState().valueOf()) {
                case adways.interactive.Experience.sceneStates.BUILT:
                    that.removeEventListener(adways.interactive.Experience.Event.SCENE_STATE_CHANGED, sceneStateChangedTimesheetCB, this);   
                    processTimesheet(responseParsed);
                    break;
            }
        };
    
        if (this.getSceneState().valueOf() === adways.interactive.Experience.sceneStates.BUILT) {
            processTimesheet(responseParsed);
        }
        else 
            this.addEventListener(adways.interactive.Experience.Event.SCENE_STATE_CHANGED, sceneStateChangedTimesheetCB, this);    
    
        return 1;
    };
    
    adways.interactive.Experience.prototype.setTimesheetURL = function() {
        
        if (arguments.length < 1) {
            return -1;
        }
        if (typeof arguments[0] !== "string" && typeof arguments[0] !== "number" ) {
            return -2;
        }

        var timesheetURL = arguments[0];

        if(typeof(adways.tweaks.forceProtocol)!=="undefined") {
            if (timesheetURL.search(/^http[s]?\:\/\//) === -1) {
                timesheetURL = adways.tweaks.forceProtocol+":"+timesheetURL;
            }
        }  
        
        var timesheetRequest = new adways.ajax.Request();
        timesheetRequest.setURL(timesheetURL);
        timesheetRequest.setMethod("GET");
        timesheetRequest.addHeader("Accept", "application/json");
        timesheetRequest.setContentType("application/json");

        var that = this;

        var requestDoneListener = function(evt) {
            if (timesheetRequest != null && timesheetRequest.getState() === adways.ajax.states.DONE) {
                timesheetRequest.removeEventListener(adways.ajax.events.STATE_CHANGED, requestDoneListener);
                var responseText = timesheetRequest.getResponseText();
                timesheetRequest = null;
//                console.log("responseText ", responseText);
                that.setTimesheetJSON(responseText);
            }
        };

        timesheetRequest.addEventListener(adways.ajax.events.STATE_CHANGED, requestDoneListener);

        timesheetRequest.load();
        return 1;
    };  

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.setPlayerClass = function(helper) {
        if (arguments.length < 1) {
            return -1;
        }
        if (typeof helper !== "object" && typeof helper !== "string") {
            return -2;
        }

        if (typeof helper === "string") {

            this.playerClassJSConstant = helper.toUpperCase();

        } else if (typeof helper === "object") {
            /*
             * les 4 paramètres sont obligatoires, car setPlayerClass est un shortcut pour setuper les 4 paramètres d'un coup. Il se trouve par
             * ailleurs qu'il existe une entité spécifique à Adways qui contient ces 4 valeurs.
             * Pour n'en setuper qu'une, alors il faut appeler la methode correspondante et oublier l'existence de setPlayerClass.
             */
            if (!(helper["player_builder_url"] && helper["player_builder_classname"] && helper["delegate_builder_url"] && helper["delegate_builder_classname"]))
                return -3;

//        if (helper["player_builder_url"] && helper["player_builder_classname"]) {
            this.setPlayerBuilderURL(helper["player_builder_url"]);
            this.setPlayerBuilderClassname(helper["player_builder_classname"]);
//        }

//        if (helper["delegate_builder_url"] && helper["delegate_builder_classname"]) {
            this.setDelegateBuilderURL(helper["delegate_builder_url"]);
            this.setDelegateBuilderClassname(helper["delegate_builder_classname"]);
//        }

        }

        return 1;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    /*
     * pour rendre exploitable cette methode, il faut que le dev tiers puisse ecrire un delegate, or pour cela il a besoin de la lib !
     * Malheureusement, tant que "load" ou "loadLib" n'est pas appelé, la lib n'est pas disponible donc les checking realisés avant la declaration
     * du delegate lancent des erreurs (du coup, impossible d'instancier le delegate a donner en 2e parametre de cette methode).
     
     adways.interactive.Experience.prototype.setPlayerAPIAndDelegate = function(playerAPI, delegate) {
     if (arguments.length < 2) {
     return -1;
     }
     if (typeof playerAPI !== "object") {
     return -2;
     }
     if (typeof delegate !== "object") {
     return -3;
     }
     
     if (!this.clearingPlayer) {
     var setPlayerAPIRes = this.setPlayerAPI(playerAPI);
     if (setPlayerAPIRes > 0) {
     // assert (delegateState===EMPTY); due to setPlayerAPIRes>0
     this.delegateState.setV(adways.interactive.Experience.delegateStates.BUILDING);
     this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.DELEGATE_STATE_CHANGED));
     var delegateReadyRes = this.delegateReady(delegate);
     //assert (delegateReadyRes>0);
     return delegateReadyRes;
     }
     else {
     // the call to setPlayerAPI fails
     switch (setPlayerAPIRes) {
     case -1:
     return -5;
     case -3:
     return -6;
     case -4:
     return -7;
     default:
     return -8; // should never happen
     }
     }
     }
     else {
     return -4;
     }
     };
     */

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype._requestPlayerClassFromJSConstant = function() {

        if (this.playerClassJSConstant === "")
            return -1;

        var playerClassGetURL = "//d1afeohcmx2qm4.cloudfront.net/player-class?filter-js_constant=" + this.playerClassJSConstant;

        if(typeof(adways.tweaks.forceProtocol)!=="undefined") {
            if (playerClassGetURL.search(/^http[s]?\:\/\//) === -1) {
                playerClassGetURL = adways.tweaks.forceProtocol+":"+playerClassGetURL;
            }
        }  
        
        this.playerClassRequest = new adways.ajax.Request();
        this.playerClassRequest.setURL(playerClassGetURL);
        this.playerClassRequest.setMethod("GET");
        this.playerClassRequest.addHeader("Accept", "application/json");
        this.playerClassRequest.setContentType("application/json");

        var that = this;

        var requestDoneListener = function(evt) {
            if (that.playerClassRequest != null && that.playerClassRequest.getState() === adways.ajax.states.DONE) {
                that.playerClassRequest.removeEventListener(adways.ajax.events.STATE_CHANGED, requestDoneListener);
                var responseText = that.playerClassRequest.getResponseText();
                that.playerClassRequest = null;
                var responseParsed = null;
//            try {
                responseParsed = JSON.parse(responseText);
//            } catch (e) {
//                console.warn(e);
//            }
                if (responseParsed['_embedded'] && responseParsed['_embedded']['collection']
                        && responseParsed['_embedded']['collection'][0]) {
                    that.setPlayerBuilderURL(responseParsed['_embedded']['collection'][0]["player_builder_url"]);
                    that.setPlayerBuilderClassname(responseParsed['_embedded']['collection'][0]["player_builder_classname"]);

                    var url = responseParsed['_embedded']['collection'][0]["delegate_builder_url"];
                    if (typeof (that.getExperienceParam("playUrlSubstitution")) != "undefined") {
                        var playUrlSubstitution = that.getExperienceParam("playUrlSubstitution");
                        url = url.replace(playUrlSubstitution[0], playUrlSubstitution[1]);
                    }

                    that.setDelegateBuilderURL(url);
                    that.setDelegateBuilderClassname(responseParsed['_embedded']['collection'][0]["delegate_builder_classname"]);

                    // debug
//                if (that.playerState.valueOf()===adways.interactive.Experience.playerStates.ERROR) throw "should not happen!!!";
//                if (that.delegateState.valueOf()===adways.interactive.Experience.delegateStates.ERROR) throw "should not happen!!!";
                    //

                    // pourquoi tester sur delegateState et non pas playerState ???
                    // car il y a un sous entendu: on arrive jamais ici:
                    // - si on n'est pas ownPlayer
                    // - ?
                    // bref ca marche
                    if (that.delegateState.valueOf() === adways.interactive.Experience.delegateStates.EMPTY)
                        that._buildPlayer();
                    else
                        that._buildDelegate();

                } else {
                    if (that.delegateState.valueOf() === adways.interactive.Experience.delegateStates.EMPTY) {
                        that.playerState.setV(adways.interactive.Experience.playerStates.ERROR);
                        that.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.PLAYER_STATE_CHANGED));
                    }
                    else {
                        that.delegateState.setV(adways.interactive.Experience.delegateStates.ERROR);
                        that.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.DELEGATE_STATE_CHANGED));
                    }
                }
            }
        };

        this.playerClassRequest.addEventListener(adways.ajax.events.STATE_CHANGED, requestDoneListener);

        this.playerClassRequest.load();

        return 1;
    };

//####################################################################################################################################################

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.setPlayerBuilderURL = function() {
        if (arguments.length < 1)
            return -1;
        if (typeof (arguments[0]) !== "string")
            return -2;
        if (this.getPlayerState().valueOf() !== adways.interactive.Experience.playerStates.EMPTY && !arguments[0])
            return -3;

        if (arguments[0] !== this.playerBuilderURL) {
            
            this.playerBuilderURL = arguments[0];
            
            if(typeof(adways.tweaks.forceProtocol)!=="undefined") {
                if (this.playerBuilderURL.search(/^http[s]?\:\/\//) === -1) {
                    this.playerBuilderURL = adways.tweaks.forceProtocol+":"+this.playerBuilderURL;
                }
            }
            
            return 1;
        }
        else
            return 0;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getPlayerBuilderURL = function() {
        return this.playerBuilderURL;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.setPlayerBuilderClassname = function() {
        if (arguments.length < 1)
            return -1;
        if (typeof (arguments[0]) !== "string")
            return -2;
        if (this.getPlayerState().valueOf() !== adways.interactive.Experience.playerStates.EMPTY && !arguments[0]) //2016.07.25, dthibault, why !arguments[0]
            return -3;

        if (arguments[0] !== this.playerBuilderClassname) {
            this.playerBuilderClassname = arguments[0];
            return 1;
        }
        else
            return 0;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getPlayerBuilderClassname = function() {
        return this.playerBuilderClassname;
    };

//####################################################################################################################################################

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.setDelegateBuilderURL = function() {
        if (arguments.length < 1)
            return -1;
        if (typeof (arguments[0]) !== "string")
            return -2;
        if (this.getDelegateState().valueOf() !== adways.interactive.Experience.delegateStates.EMPTY && !arguments[0])
            return -3;

        if (arguments[0] !== this.delegateBuilderURL) {
            this.delegateBuilderURL = arguments[0];
            
            if(typeof(adways.tweaks.forceProtocol)!=="undefined") {
                if (this.delegateBuilderURL.search(/^http[s]?\:\/\//) === -1) {
                    this.delegateBuilderURL = adways.tweaks.forceProtocol+":"+this.delegateBuilderURL;
                }
            }
            return 1;
        }
        else
            return 0;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getDelegateBuilderURL = function() {
        return this.delegateBuilderURL;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.setDelegateBuilderClassname = function() {
        if (arguments.length < 1)
            return -1;
        if (typeof (arguments[0]) !== "string")
            return -2;
        if (this.getDelegateState().valueOf() !== adways.interactive.Experience.delegateStates.EMPTY && !arguments[0])
            return -3;

        if (arguments[0] !== this.delegateBuilderClassname) {
            this.delegateBuilderClassname = arguments[0];
            return 1;
        }
        else
            return 0;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getDelegateBuilderClassname = function() {
        return this.delegateBuilderClassname;
    };

//####################################################################################################################################################

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype._setParams = function() {
        // arguments[0]: object
        // arguments[1]: params entity enum
        if (typeof (arguments[0]) !== "object" || arguments[0] === null)
            return -1;

        this.params[arguments[1]] = arguments[0];
        return 1;

    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype._setParam = function() {
        // arguments[0]: key
        // arguments[1]: value
        // arguments[2]: params entity enum
        if (typeof (arguments[0]) !== "string" || arguments[0].length === 0)
            return -1;
        if (typeof (arguments[1]) === "undefined")
            return -2;

        if (typeof (this.params[arguments[2]][arguments[0]]) === "undefined") {
            this.params[arguments[2]][arguments[0]] = arguments[1];
        } else
        if (this.params[arguments[2]][arguments[0]] !== arguments[1]) {
            this.params[arguments[2]][arguments[0]] = arguments[1];
        }
        else
            return 0;


        return 1;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype._unsetParams = function() {
        this.params[arguments[0]] = new Object();
        return 1;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype._unsetParam = function() {
        if (typeof (arguments[0]) !== "string" || arguments[0].length === 0)
            return -1;
        if (typeof (this.params[arguments[1]][arguments[0]]) !== "undefined") {
            delete this.params[arguments[1]][arguments[0]];
            return 1;
        }
        else
            return 0;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype._getParams = function() {
        return this.params[arguments[0]];
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype._getParam = function() {
        if (typeof arguments[0] !== "string" || arguments[0].length < 1)
            return -1;
        else {
            return this.params[arguments[1]][arguments[0]];
        }
    };

//####################################################################################################################################################

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.setPlayerParams = function() {
        if (this.getPlayerState().valueOf() !== adways.interactive.Experience.playerStates.EMPTY)
            return -10;
        else {
            return this._setParams(arguments[0], PLAYER_PARAMS);
        }
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.setPlayerParam = function() {
        if (this.getPlayerState().valueOf() !== adways.interactive.Experience.playerStates.EMPTY)
            return -10;
        else {
            return this._setParam(arguments[0], arguments[1], PLAYER_PARAMS);
        }
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.unsetPlayerParams = function() {
        if (this.getPlayerState().valueOf() !== adways.interactive.Experience.playerStates.EMPTY)
            return -10;
        else {
            return this._unsetParams(PLAYER_PARAMS);
        }
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.unsetPlayerParam = function() {
        if (this.getPlayerState().valueOf() !== adways.interactive.Experience.playerStates.EMPTY)
            return -10;
        else {
            return this._unsetParam(arguments[0], PLAYER_PARAMS);
        }
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getPlayerParams = function() {
        return this._getParams(PLAYER_PARAMS);
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getPlayerParam = function() {
        return this._getParam(arguments[0], PLAYER_PARAMS);
    };

//####################################################################################################################################################

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.setMediaParams = function() {
        if (this.getPlayerState().valueOf() !== adways.interactive.Experience.playerStates.EMPTY)
            return -10;
        else {
            return this._setParams(arguments[0], MEDIA_PARAMS);
        }
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.setMediaParam = function() {
        if (this.getPlayerState().valueOf() !== adways.interactive.Experience.playerStates.EMPTY)
            return -10;
        else {
            return this._setParam(arguments[0], arguments[1], MEDIA_PARAMS);
        }
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.unsetMediaParams = function() {
        if (this.getPlayerState().valueOf() !== adways.interactive.Experience.playerStates.EMPTY)
            return -10;
        else {
            return this._unsetParams(MEDIA_PARAMS);
        }
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.unsetMediaParam = function() {
        if (this.getPlayerState().valueOf() !== adways.interactive.Experience.playerStates.EMPTY)
            return -10;
        else {
            return this._unsetParam(arguments[0], MEDIA_PARAMS);
        }
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getMediaParams = function() {
        return this._getParams(MEDIA_PARAMS);
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getMediaParam = function() {
        return this._getParam(arguments[0], MEDIA_PARAMS);
    };

//####################################################################################################################################################

//----------------------------------------------------------------------------------------------------------------------------------------------------
// deprecated, replaced by setPlayerOptions
    adways.interactive.Experience.prototype.setOptions = function() {
        if (this.getPlayerState().valueOf() !== adways.interactive.Experience.playerStates.EMPTY)
            return -10;
        else {
            return this._setParams(arguments[0], PLAYER_OPTION_PARAMS);
        }
    };
    adways.interactive.Experience.prototype.setPlayerOptions = adways.interactive.Experience.prototype.setOptions;

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.setOption = function() {
        if (this.getPlayerState().valueOf() !== adways.interactive.Experience.playerStates.EMPTY)
            return -10;
        else {
            return this._setParam(arguments[0], arguments[1], PLAYER_OPTION_PARAMS);
        }
    };
    adways.interactive.Experience.prototype.setPlayerOption = adways.interactive.Experience.prototype.setOption;

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.unsetOptions = function() {
        if (this.getPlayerState().valueOf() !== adways.interactive.Experience.playerStates.EMPTY)
            return -10;
        else {
            return this._unsetParams(PLAYER_OPTION_PARAMS);
        }
    };
    adways.interactive.Experience.prototype.unsetPlayerOptions = adways.interactive.Experience.prototype.unsetOptions;

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.unsetOption = function() {
        if (this.getPlayerState().valueOf() !== adways.interactive.Experience.playerStates.EMPTY)
            return -10;
        else {
            return this._unsetParam(arguments[0], PLAYER_OPTION_PARAMS);
        }
    };
    adways.interactive.Experience.prototype.unsetPlayerOption = adways.interactive.Experience.prototype.unsetOption;

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getOptions = function() {
        return this._getParams(PLAYER_OPTION_PARAMS);
    };
    adways.interactive.Experience.prototype.getPlayerOptions = adways.interactive.Experience.prototype.getOptions;

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getOption = function() {
        return this._getParam(arguments[0], PLAYER_OPTION_PARAMS);
    };
    adways.interactive.Experience.prototype.getPlayerOption = adways.interactive.Experience.prototype.getOption;
//####################################################################################################################################################

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.setSceneParams = function() {
        if (this.getSceneState().valueOf() !== adways.interactive.Experience.sceneStates.EMPTY)
            return -10;
        else {
            return this._setParams(arguments[0], SCENE_PARAMS);
        }
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.setSceneParam = function() {
        if (this.getSceneState().valueOf() !== adways.interactive.Experience.sceneStates.EMPTY)
            return -10;
        else {
            return this._setParam(arguments[0], arguments[1], SCENE_PARAMS);
        }
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.unsetSceneParams = function() {
        if (this.getSceneState().valueOf() !== adways.interactive.Experience.sceneStates.EMPTY)
            return -10;
        else {
            return this._unsetParams(SCENE_PARAMS);
        }
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.unsetSceneParam = function() {
        if (this.getSceneState().valueOf() !== adways.interactive.Experience.sceneStates.EMPTY)
            return -10;
        else {
            return this._unsetParam(arguments[0], SCENE_PARAMS);
        }
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getSceneParams = function() {
        return this._getParams(SCENE_PARAMS);
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getSceneParam = function() {
        return this._getParam(arguments[0], SCENE_PARAMS);
    };

//####################################################################################################################################################
//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.setExperienceParams = function() {
        return this._setParams(arguments[0], EXPERIENCE_PARAMS);
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.setExperienceParam = function() {
        return this._setParam(arguments[0], arguments[1], EXPERIENCE_PARAMS);
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.unsetExperienceParams = function() {
        return this._unsetParams(EXPERIENCE_PARAMS);
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.unsetExperienceParam = function() {
        return this._unsetParam(arguments[0], EXPERIENCE_PARAMS);
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getExperienceParams = function() {
        return this._getParams(EXPERIENCE_PARAMS);
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getExperienceParam = function() {
        return this._getParam(arguments[0], EXPERIENCE_PARAMS);
    };

//####################################################################################################################################################

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.setDelegateParams = function() {
        if (this.getDelegateState().valueOf() !== adways.interactive.Experience.delegateStates.EMPTY)
            return -10;
        else {
            return this._setParams(arguments[0], DELEGATE_PARAMS);
        }
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.setDelegateParam = function() {
        if (this.getDelegateState().valueOf() !== adways.interactive.Experience.delegateStates.EMPTY)
            return -10;
        else {
            return this._setParam(arguments[0], arguments[1], DELEGATE_PARAMS);
        }
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.unsetDelegateParams = function() {
        if (this.getDelegateState().valueOf() !== adways.interactive.Experience.delegateStates.EMPTY)
            return -10;
        else {
            return this._unsetParams(DELEGATE_PARAMS);
        }
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.unsetDelegateParam = function() {
        if (this.getDelegateState().valueOf() !== adways.interactive.Experience.delegateStates.EMPTY)
            return -10;
        else {
            return this._unsetParam(arguments[0], DELEGATE_PARAMS);
        }
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getDelegateParams = function() {
        return this._getParams(DELEGATE_PARAMS);
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getDelegateParam = function() {
        return this._getParam(arguments[0], DELEGATE_PARAMS);
    };

//####################################################################################################################################################

    adways.interactive.Experience.prototype.interactiveLibStateChangedCb = function() {
        adways.interactive.Experience.interactiveLibState.removeEventListener(adways.type.evt.ENUM, this.interactiveLibStateChangedCb, this);
        if (adways.interactive.Experience.interactiveLibState.valueOf() === adways.interactive.Experience.interactiveLibStates.LOADED) {
            this.libLoadedCb();
        }
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.loadInteractiveLib = function() {

        if (adways.interactive.Experience.interactiveLibState.valueOf() === adways.interactive.Experience.interactiveLibStates.EMPTY
                || adways.interactive.Experience.interactiveLibState.valueOf() === adways.interactive.Experience.interactiveLibStates.ERROR) {

            adways.interactive.Experience.interactiveLibState.setV(adways.interactive.Experience.interactiveLibStates.LOADING);
            this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.INTERACTIVE_LIB_STATE_CHANGED));

            this.interactiveLibScriptTag = document.createElement("script");
            if (typeof (adways.tweaks.isIE) == "number" && adways.tweaks.isIE <= 8)
                this.interactiveLibScriptTag.type = "text/javascript";
            else
                this.interactiveLibScriptTag.type = "application/javascript";
            var interactiveLibScriptTagSrc = "//dj5ag5n6bpdxo.cloudfront.net/libs/interactive/release.min.js";
            
            if(typeof(adways.tweaks.forceProtocol)!=="undefined") {
                if (interactiveLibScriptTagSrc.search(/^http[s]?\:\/\//) === -1) {
                    interactiveLibScriptTagSrc = adways.tweaks.forceProtocol+":"+interactiveLibScriptTagSrc;
                }
            }
            
            this.interactiveLibScriptTag.src = interactiveLibScriptTagSrc;
            
            if (typeof (this.getExperienceParam("playUrlSubstitution")) != "undefined") {
                var playUrlSubstitution = this.getExperienceParam("playUrlSubstitution");
                this.interactiveLibScriptTag.src = this.interactiveLibScriptTag.src.replace(playUrlSubstitution[0], playUrlSubstitution[1]);
            }

            adways.misc.html.addEventListener(this.interactiveLibScriptTag, "load", this.libLoadedCb);
            adways.misc.html.addEventListener(this.interactiveLibScriptTag, "error", this.libLoadedErrorCb);

            document.getElementsByTagName("head")[0].appendChild(this.interactiveLibScriptTag);
        } else if (adways.interactive.Experience.interactiveLibState.valueOf() === adways.interactive.Experience.interactiveLibStates.LOADED) {
            this.libLoadedCb();
        } else /*if(adways.interactive.Experience.interactiveLibState.valueOf() === adways.interactive.Experience.interactiveLibStates.LOADING)*/ {
            adways.interactive.Experience.interactiveLibState.addEventListener(adways.type.evt.ENUM, this.interactiveLibStateChangedCb, this);
        }
    };
//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getSceneTimeReference = function() {
        return this.sceneTimeReference;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.setSceneTimeReference = function(sceneTimeReference) {

        if (arguments.length < 1)
            return -1;
        if (typeof (arguments[0]) !== "boolean")
            return -2;

        // may never happen since building the scene is synchron
        if (this.sceneState.valueOf() !== adways.interactive.Experience.sceneStates.EMPTY)
            return -3;

        if (this.sceneTimeReference !== sceneTimeReference) {
            this.sceneTimeReference = sceneTimeReference;
            if (this.scene != null) {
                this.scene.getSendStreamSizeToPlayer().setV(this.ownPlayer && !this.sceneTimeReference);
            }
            return 1;
        }
        else
            return 0;
    };
//####################################################################################################################################################

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.setPublicationJSON = function(publicationJSON) {

        if (arguments.length < 1) {
            return -1;
        }
        if (typeof (publicationJSON) !== "object" || publicationJSON === null || typeof (publicationJSON.publication) !== "object") {
            console.warn("Adways Loader: the publication JSON is not valid or does not exist.");
            return -2;
        }
        // may never happen since building the scene is synchron
//    if (this.getSceneState().valueOf()===adways.interactive.Experience.sceneStates.BUILDING) return -3;

        this.clearScene();

        this.publicationJSON = publicationJSON;
        if (/*opt param autoLoadLib*/(typeof (arguments[1]) === "boolean") ? arguments[1] : false) {
            if (this.ownPlayer &&
                    this._redirectToIOSApp &&
                    this._iphoneBehavior !== adways.interactive.Experience.IPhoneBehaviors.DEFAULT) {
                this._buildRedirectionPreview();
            } else {
                this.loadInteractiveLib();
            }
        }
        return 1;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------

    adways.interactive.Experience.prototype._buildRedirectionPreview = function() {
        if (this._redirectionAlreadyCreated) {
            return -1;
        }
        var that = this;

        var customCss = '\
        @import "https://fonts.googleapis.com/css?family=Work+Sans";\
        .adways-iphone-embed-preview{position:relative;width:100%;height:100%;font-family:"Work Sans",Arial;}\
        .adways-iphone-embed-thumbnail{position:absolute;top:0;left:0;width:100%;height:100%;}\
        .adways-iphone-embed-shadow{\
            position: absolute;\
            top:0;\
            left:0;\
            width: 100%;\
            height: 100%;\
            background: rgb(0,0,0);\
            background: rgba(0,0,0,0.8);\
        }\
        .adways-iphone-embed-buttons{\
            font-family:"Work Sans",Arial;\
            text-decoration:none;\
            background:rgb(40,191,200);\
            background:rgba(40,191,200,0.28);\
            display:inline-block;\
            color: #fff;\
            min-width:290px;\
            font-size:20px;\
            text-transform: uppercase;\
            border:3px solid #28bfc8;\
            padding:18px 10px;\
            vertical-align:middle;\
            text-align:center;\
        }\
        .adways-iphone-embed-buttons:hover{color: #fff;text-decoration:none;}\
        table.adways-iphone-embed-table{width:100%;height:80%;border:0;margin-top:5%}\
        table.adways-iphone-embed-table tr, table.adways-iphone-embed-table tr td{vertical-align:middle;text-align:center;}\
        \\';
        var styleTag = document.createElement("style");
        styleTag.styleSheet ? styleTag.styleSheet.cssText = customCss : styleTag.appendChild(document.createTextNode(customCss)), styleTag.type = "text/css", document.getElementsByTagName("head")[0].appendChild(styleTag);


        var previewDiv = document.createElement("div");
        previewDiv.className = 'adways-iphone-embed-preview';
        this.getPlayerContainer().appendChild(previewDiv);

        var previewThumbnail = new Image();
        previewThumbnail.className = 'adways-iphone-embed-thumbnail';

        var previewShadow = document.createElement('div');
        previewShadow.className = 'adways-iphone-embed-shadow';
        previewShadow.innerHTML = '<table border=0 width="100%" height="100%" class="adways-iphone-embed-table" border="0"><tr>\
                                    <td><a href="//www.adways.com" target="_blank"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAAkCAYAAAAkXsBMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NzFFRkFENjY4ODQxMUU2QkQ0NjkxQkQ2QzcyREI5RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NzFFRkFENzY4ODQxMUU2QkQ0NjkxQkQ2QzcyREI5RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU3MUVGQUQ0Njg4NDExRTZCRDQ2OTFCRDZDNzJEQjlEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU3MUVGQUQ1Njg4NDExRTZCRDQ2OTFCRDZDNzJEQjlEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DfZ51QAACm1JREFUeNrsXAlwFVUWffmRJRAiAoKiKCgjAi6MgwqIwiACJe6F2yjqqDgiDItacUNFBh3XiCKu6KDigjoFjLiMuIQRVBQNLqwFuCAaERAjIBLC917+6fLmTv/u9/q3ELRP1anql3/f0q9vv+W+08lLp9NmB0IhsbVIryF+YRIkUNhpB2tvR+IbIv0o8bzkMSbQSCVdkCBx7AQJEsdOkCBx7AQJEsdOkCAMNSEq0ojYi3g4sQWxMXG9yYTyPiH+jzibmE4e1+8WDYmV8IucHbs58UxiT+KBSOcRfySuJM4hvkZ8glhB/CdxoMh/HHFmQPm7E/9BPIdYK6SdC4m3ET8LsfsTsb9Ic5u+seyLg4jni/TdxGUxPZihxFa4LiVOschTgL7vSuxAbEPchViE3zcTy4mfEstMJgw6XT18+UyuIt6Xpa6Tid1wPZk4I8f7LUDdBv5ylWU+9q/OxBOIXXDPTZXN97jnxcRZxOeRrg4+oFFsQBxH3JS2w3riaOJ96u/dfcr22If4Xdody1R6giq3DnGB+P2JgDZo7kQsE3lfcsgbxE6izI3EViH2zYglxLUR+mct8jZBWWPEb8MC6rS1s2VD1SabPKcRF6Wj4XXiobI8PWLzqd5LpvrpXhjqEa9xWCocixHLb5ReCdYn7kGsrX5vFVL2T8SLsHxh/IX4CGaWMGxG3new9+hD7Ed8LoeRi0egMSJ9p+/o8gsuIJaIUdlgCv6Q+BFGaB6x6qCPWhLbYkblunYmDieeq2afmgxu9/3oe4lVxPeIS4mr8bf6mLX2wezs9dOfiW8TBxEf0CP27sTlPm/DauIk4o3EK4m3EKcRK0LeIr8Re1/iOmXH6euJLZVtbWI34pSAOiZkefvHC5uFGMltR5s7Rd7lmMGijlxnirK+CigrD7Oknp3+RtzFop5msF0i8m8hLt0BRuzB6r5fxnNPWcywxxDfUvn7bJWJCMNXlAFPm5cRC7IUXEi8Gna2jj1N2XxJbGPRUWcQqxwcm53hG2E3wuGh8H19LvLeEfHhcr99Ico5L8B2tLDj+xzp+DLKh11M3OzTVzXVseXy8taI9/xvUQYvRfO8H3urTuCO6WlZcK8sTqcdu61PHZ0dbmCEg2Pr0fJHzBa2dfVV7TwoQodfJ8p4F6Oyn11HjK4ezorBsU70eSY10bELVBsbRayvKbFSlHOgF8ceqNY3txBftVwjvQL7MJym0k9jXWSLW7HGtMVTxP/iui7xHoe8LxAn4Tof0YQ8h/wcQSpWUZFse5ARouwSRJlyxVSs52s6NoIe9o9YDu/LPhDprY7NG8hjxB83oYNdwPZVITadVXq8Yx3crmcc81yCcJMRm0Fb1BXXXRw3Yzdho8N4MuAFLsJm2nvIN8boNDdjQ1yTkTbV1ZocuhtgMvJkV/Am/QZwcQqRhnrC4D2xC7XFKsS1g9BCpWdHaLxrHo5Dj1Q338AiX3fiiT6zWGOLvB0Rm2dsUCO3xiEiOlSKQ6m4sMpxRtxeGI62eod1DxK/Jb5FHEccjJe/nRps/GbokeAcduwmymBRxAYuDfld1rNWjKQu+DZCnhKEygxCiKNC7FNqGvcOPBpjFLSpL0+MmisCbPcS1/N+BadZtAM4NrfxMOLLarbsjBl3LJaG8+Az5TiY4TDuMIT9Un4HNMVqAf9hxAX8gpDNSpUKRUWpQ28gl1jm+6vKd2qA7SPCjjckZ6u8AwLylqi8YZshGZYsjelASFIeOE2Owc6We0d81vxcZvmEhMPAG/zp2ERuLSvls0mMOnIsVum5Kr1ABeXrR9wkSMy0zPcvtXm81PgLwAqxFvfAkoKJau07OIsUoQ6Opj2cZbG0mJ6lf+LCEnEddEw+w9LOFnI2rnDI9yzxCDwHPpxrj+P1SzD7TcSSTX8OmA/5wWwsWbY+3C+V0WERbiSFBgVBn7h1iVBPrxw6+xqxLOhEvNDH5gqT0bB4a17v1HG0WGqxpuTvPnmH4SSQ8ablRne+uO4Us1PbPJNfC7tZ2LTB4DcXkTWNSvTP84hKsd6kP04Z98ay8gyT0bZ4ESfu/2k8aKYwCn4uCtzXZJR2LjjdYmNVqtIXOtbBx/wn5dDZFcoheQTYVW1uL8d1lbLliMXFIj0KHeuhGV4cb6c/xLJN80QIswM2k3HhdPGShmGLGv1yxR8tbHjvcjDYzYQL4TS+Qkj2FOKRxB/wdw6G9EuJHaXeANlWxJ13u4XdMyokyHHt3pZ18LT0eAydPhkxXgZrDm5Tju7tunmE+ETlfRVTobdkkRqQ0SLaMt5nGRbkUA+J9L3m//UxUbCXap/LEq9FDPUPsLBZIZZqtRGJiopZKnzc3lu0N4dKT+IpYt2QxX5r4nyHI/XxyuZ7Yo+QOngD9qKjViSILZTO5Sji4SK9KkCfsSu0Mx5641SyStxPU8f2FKmj9ykBMgYbcns+dTxS7ynsVuRY/0AfxWE224eF3Uxifg71ThRl3RAkRkmjwwfhODpPSEO7Eu/CUbWLCKoxOk7jOeLJxD3RqewcRxBvDpFvTojYCUNEGfOVkObikLznq6hMqUhfFrE9fKz+gxJuHedYRhNEZTYq3YmNY+crARU7SS3H+lm0NNznKD/Isf+g2jsZYjzX/uun9DHdtMG4ACfa4hiGyabHPoS4Jh0Pojp2PvQbGmUWowa/4DN88i6GIjHqiHMoRGFpJehhzcnRPjMBDwAHI5TJIqCfVN5nifc7aEB6KA3+HGhOwmbtQojUygI04kH5+yv7DQi5cpnts8wejdBfg3yexVSt7vMeWrESlNhgJfFthw8NWBA1z7GOTRjZ43BsZgcfFdyRlnnb+jhS3xjiv/zAHsiizpPLt6CPQFjVeEFEcVNflK8dbRY+2hiDWWEs0h/4qDvZfqjjhwbHE8sD7qkK5azNIriTH5bU83NsjywlfSxkqeHJTq/DmnSMg2N7euuhagr0A7fhceL+KDMuxzaQSco9hUveUUpDHOfBCh9wXEv82OGAYgY02YWOqj1eVp4Ect498HKtdxx4KtGHrbGPkTp0W7kwL+XmOtZbge8Fusry8kL+d18Bjjbb4UicowbfYRfNwfCFIlTUyFT/8qPcVFduBaEd4ud7IuKwDjtm/nLkfVFOXRUjXSd0BlHAu/HmIjKwwSFvLRHyWy3CTXGjCUKB+5nMFzJFiPFyn3yNg7G5xv9DV/lM1mQ5LPkP8Xhc9yW+iOuGODc42mRUd/sg8tMA/c71LUfIcibixyvFeYOnrCyLEMbk7xwPgF80Q51F8LV1kFZwVOVjyCUqdQFhjp3gtw8WDV2P60k49MgVU3FiaKD1GLKtbyr5vyIJJqlDnX45lneFcGoeNR/eHjeVOHaCBcr52NFvMnYSXQlesr5gqisgx2I5uc2RLEUSeHspXmv3VDICPtFjTfcyrJ/Xi70Or3lbmsxX8j1MdQkuY4LJyCaqEsdOsD3Bm2HWyhRj4xgVrCi81mQ+/dtuSBw7gQZHpThKwl8QcaQq7H+5cDSIPxZ43WQiKm+a6qKqxLET1Eiwbp6FUayEzMe+jJcpHBotN24fWG8z/CzAAKf6X/1vJTVuAAAAAElFTkSuQmCC" alt="Adways Logo" /></a></td></tr>\
                                    <tr><td><a href="' + this._getIOSRedirectionFallbackURL() + '" target="_blank" class="adways-iphone-embed-buttons">Download App</a></td></tr>\
                                    <tr><td><a href="' + this._getIOSRedirectionURL() + '" class="adways-iphone-embed-buttons">Open in Adways Player</a></td></tr></table>';

        previewDiv.appendChild(previewThumbnail);
        previewDiv.appendChild(previewShadow);

        if (this.publicationJSON.project.media.thumbnails &&
                this.publicationJSON.project.media.thumbnails[0] &&
                typeof (this.publicationJSON.project.media.thumbnails[0].location) === "string" &&
                this.publicationJSON.project.media.thumbnails[0].location !== "") {
            previewThumbnail.src = this.publicationJSON.project.media.thumbnails[0].location;
        }
        this._redirectionAlreadyCreated = true;
        return 1;
    };
//----------------------------------------------------------------------------------------------------------------------------------------------------

    adways.interactive.Experience.prototype._getIOSRedirectionURL = function() {
        if (this._iphoneBehavior === adways.interactive.Experience.IPhoneBehaviors.OPEN_CURRENT_PAGE_IN_ADWAYS_PLAYER) {
            return "adw://" + window.location;
        } else if (this._iphoneBehavior === adways.interactive.Experience.IPhoneBehaviors.OPEN_PUBLICATION_URL_IN_ADWAYS_PLAYER &&
                this.publicationJSON.publication &&
                this.publicationJSON.publication.id &&
                this.publicationJSON.publication.id != "") {
            return "adw://http:" + "//play.adways.com/experience/" + this.publicationJSON.publication.id;
        }
        return "";
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------

    adways.interactive.Experience.prototype._getIOSRedirectionFallbackURL = function() {
        return "https://itunes.apple.com/fr/app/adways-interactive-video-player/id1094348745?mt=8";
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getPublicationJSON = function() {
        return this.publicationJSON;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.setPublicationID = function(publicationID) {

        if (arguments.length < 1)
            return -1;
        if (typeof (arguments[0]) !== "string")
            return -2;

        // may never happen since building the scene is synchron
        if (this.getSceneState().valueOf() === adways.interactive.Experience.sceneStates.BUILDING)
            return -3;

        if (this.publicationID !== publicationID) {

            this.clearScene();

            this.publicationID = publicationID;
            this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.PUBLICATION_ID_CHANGED));
            this.clearSceneShouldResetPublicationID = false;

            if (/*opt param autoRequest*/(typeof (arguments[1]) === "boolean") ? arguments[1] : false) {
                this.requestPublicationJSON();
            }

            return 1;
        }
        else
            return 0;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.requestPublicationJSON = function(publicationURL, givenPass) {

        var givenPublicationURL = publicationURL;
    
        if (this.publicationID === "" && typeof publicationURL != "string")
            return -1;
        if(typeof(adways.tweaks)!=="undefined" && typeof(adways.tweaks.currentPublication)!=="undefined" && adways.tweaks.currentPublication!==null) {
            if (this.setPublicationJSON(adways.tweaks.currentPublication, true) < 0) {
                this.sceneState.setV(adways.interactive.Experience.sceneStates.ERROR);
                this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.SCENE_STATE_CHANGED));
                delete adways.tweaks.currentPublication;
            }
            return 1;
        }

        var publicationLoadURL = "";

        if (typeof publicationURL == "string") {
            publicationLoadURL = publicationURL;
        } else {
            publicationLoadURL = "//d1afeohcmx2qm4.cloudfront.net/load-publication/" + this.publicationID;
        }

        if(typeof(adways.tweaks.forceProtocol)!=="undefined") {
            if (publicationLoadURL.search(/^http[s]?\:\/\//) === -1) {
                publicationLoadURL = adways.tweaks.forceProtocol+":"+publicationLoadURL;
            }
        }
     
        this.jsonRequest = new adways.ajax.Request();
        this.jsonRequest.setURL(publicationLoadURL);
        this.jsonRequest.setMethod("GET");
        this.jsonRequest.addHeader("Accept", "application/json");
        
        if (typeof givenPass == "string" && givenPass != "") {
            this.jsonRequest.addHeader("X-Adways-Password", givenPass);
        }
        
        this.jsonRequest.setContentType("application/json");

        var that = this;

        var requestDoneListener = function(evt) {
            if (that.jsonRequest != null && that.jsonRequest.getState() === adways.ajax.states.DONE) {
                
                that.jsonRequest.removeEventListener(adways.ajax.events.STATE_CHANGED, requestDoneListener);
                var responseText = that.jsonRequest.getResponseText();
                var reqStatus = that.jsonRequest.getXHR().status;
                that.jsonRequest = null;
                
                if(responseText=="" && reqStatus == 403) {
                    if(that.getPlayerContainer() != null) {

                        var inputWidth = 200;
                        var inputPadding = 2;
                        var boxPadding = 15;
                        var buttonStyle = {
                            "padding": "3px 20px", 
                            "backgroundColor": "#e1e1e1", 
                            "border": "1px solid #adadad",
                            "marginTop": "14px",
                            "cursor": "pointer"
                        };
                        var mouseOverButtonStyle = {
                            "backgroundColor": "#e5f1fb", 
                            "border": "1px solid #0078d7"
                        };
                        
                        var inputContainer = document.createElement('div');
                        inputContainer.style.position = "absolute";
                        inputContainer.style.top = "25%";
                        inputContainer.style.left = "50%";
                        inputContainer.style.marginLeft = "-"+((inputWidth/2)+boxPadding)+"px";
                        inputContainer.style.width = inputWidth+(2*boxPadding) + "px";
                        inputContainer.style.border = "1px solid #696969";
                        inputContainer.style.backgroundColor = "white";
                        inputContainer.style.fontSize = "12px"; 
                        inputContainer.style.fontFamily = "Arial,sans-serif"; 

                        var topContainer = document.createElement('div');
                        topContainer.style.margin = boxPadding + "px";
                        topContainer.style.textAlign = "center";
                        
                        var boxDescription = document.createElement('div');
                        boxDescription.innerHTML = "Enter password";
                        topContainer.appendChild(boxDescription);
                        
                        
                        
                        var inputPassword = document.createElement('input');
                        inputPassword.type = "password";
                        inputPassword.autocomplete="off";
                        inputPassword.style.marginTop = "10px";
                        inputPassword.style.width = (inputWidth-(2*inputPadding)) + "px";
                        inputPassword.style.padding = inputPadding + "px";
                        topContainer.appendChild(inputPassword);

                        var bottomContainer = document.createElement('div');
                        bottomContainer.style.paddingRight = boxPadding + "px";
                        bottomContainer.style.height = "55px";
                        bottomContainer.style.borderTop = "1px solid #e6e6e6";
                        bottomContainer.style.backgroundColor = "#f2f2f2";
                        
                        var submitButton = document.createElement('div');
                        submitButton.innerHTML = 'OK';
                        submitButton.style.cssFloat = "right";
                        
                        for(var styleName in buttonStyle) submitButton.style[styleName] = buttonStyle[styleName];
                        
                        adways.misc.html.addEventListener(submitButton, "mouseout", function() {
                            for(var styleName in buttonStyle) submitButton.style[styleName] = buttonStyle[styleName];
                        });
                        
                        adways.misc.html.addEventListener(submitButton, "mouseover", function() {
                            for(var styleName in mouseOverButtonStyle) submitButton.style[styleName] = mouseOverButtonStyle[styleName];
                        });
                       
                        
                        var cancelButton = document.createElement('div');
                        cancelButton.innerHTML = 'Cancel';
                        cancelButton.style.cssFloat = "right";
                        cancelButton.style.marginLeft = "10px";
                        
                        for(var styleName in buttonStyle) cancelButton.style[styleName] = buttonStyle[styleName];
                        
                        adways.misc.html.addEventListener(cancelButton, "mouseout", function() {
                            for(var styleName in buttonStyle) cancelButton.style[styleName] = buttonStyle[styleName];
                        });
                        
                        adways.misc.html.addEventListener(cancelButton, "mouseover", function() {   
                            for(var styleName in mouseOverButtonStyle) cancelButton.style[styleName] = mouseOverButtonStyle[styleName];
                        });
                        
                        
                        bottomContainer.appendChild(cancelButton);
                        bottomContainer.appendChild(submitButton);
                        
                        inputContainer.appendChild(topContainer);
                        inputContainer.appendChild(bottomContainer);
                        
                        that.getPlayerContainer().appendChild(inputContainer);
                        
                        var removePrompt = function() {
                            that.getPlayerContainer().removeChild(inputContainer);                        
                        }
                        
                        adways.misc.html.addEventListener(submitButton, "click", function() {
                            removePrompt();
                            that.requestPublicationJSON(givenPublicationURL , inputPassword.value);
                        });
                        
                        adways.misc.html.addEventListener(cancelButton, "click", function() {
                            removePrompt();
                            that.requestPublicationJSON(givenPublicationURL , "");
                        });
                    }
                } else if (that.setPublicationJSON(JSON.parse(responseText), true) < 0) {
                    that.sceneState.setV(adways.interactive.Experience.sceneStates.ERROR);
                    that.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.SCENE_STATE_CHANGED));
                }
            }
        };

        this.jsonRequest.addEventListener(adways.ajax.events.STATE_CHANGED, requestDoneListener);

        this.jsonRequest.load();

        return 1;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getPublicationID = function() {
        return this.publicationID;
    };

//####################################################################################################################################################

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getSceneState = function() {
        return this.sceneState;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getScene = function() {
        return this.scene;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.buildScene = function() {

        if (this.sceneState.valueOf() !== adways.interactive.Experience.sceneStates.EMPTY)
            return -1;
        if (this.publicationJSON === null)
            return -2;
        if (this._redirectToIOSApp &&
                this._iphoneBehavior !== adways.interactive.Experience.IPhoneBehaviors.DEFAULT) {
            return -3;
        }

        this.sceneState.setV(adways.interactive.Experience.sceneStates.BUILDING);
        this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.SCENE_STATE_CHANGED));

//    this.scene = new adways.interactive.Scene();
        this.scene = new adways.interactive.Scene(this.sceneTimeReference ? adways.interactive.sceneTimeReferences.SELF_WITH_PLAY_STATE : adways.interactive.sceneTimeReferences.SCW);
//    this.scene = new adways.interactive.Scene(adways.interactive.sceneTimeReferences.SELF_WITH_PLAY_STATE);
        this.scene.getSendStreamSizeToPlayer().setV(this.ownPlayer && !this.sceneTimeReference);
        this.scene.getInfoCollector().addInfoCollector(this);


        this.scene.setP2SController(this.getP2S());
        this.scene.setS2PController(this.getS2P());
        
        var options = this.getOptions();
        if (typeof(options)!=="undefined" && (typeof(options.autoplay) === "boolean" || typeof(options.autoplay) === "number" )) {
            if(this.ownPlayer && options.autoplay) {
                if(window.adwMobileAndTabletcheck() || adways.misc.html.userAgent.UA.browser[0].identifier === adways.misc.html.userAgent.SAFARI) {
                    this.getS2P().mute(true);   
                }
            }            
        }

        if (typeof (this.getSceneParam("contentUrlSubstitution")) != "undefined") {
            if (typeof (adways.tweaks.contentUrlSubstitution) == "undefined") {
                adways.tweaks.contentUrlSubstitution = new Object();
            }
            adways.tweaks.contentUrlSubstitution = this.getSceneParam("contentUrlSubstitution");
        }
        if (typeof (this.getSceneParam("analyticsUrlSubstitution")) != "undefined") {
            if (typeof (adways.tweaks.analyticsUrlSubstitution) == "undefined") {
                adways.tweaks.analyticsUrlSubstitution = new Object();
            }
            adways.tweaks.analyticsUrlSubstitution = this.getSceneParam("analyticsUrlSubstitution");
        }
        adways.interactive.io.loadPublication(this.scene, this.publicationJSON);
        delete adways.tweaks.contentUrlSubstitution;
        delete adways.tweaks.analyticsUrlSubstitution;

        this.sceneState.setV(adways.interactive.Experience.sceneStates.BUILT);
        this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.SCENE_STATE_CHANGED));

        ////// deprecated event
        if (this.getDelegateState().valueOf() === adways.interactive.Experience.delegateStates.BUILT) {
            this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.READY));
        }
        ////////////////////

        return 1;
    };

//####################################################################################################################################################

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getS2P = function() {
        if (adways.interactive.Experience.interactiveLibState.valueOf() === adways.interactive.Experience.interactiveLibStates.LOADED) {
            if (this.s2p === null)
                this.s2p = new adways.interactive.SceneControllerWrapper();
            return this.s2p;
        } else {
            return null;
        }
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getP2S = function() {
        if (adways.interactive.Experience.interactiveLibState.valueOf() === adways.interactive.Experience.interactiveLibStates.LOADED) {
            if (this.p2s === null)
                this.p2s = new adways.interactive.SceneControllerWrapper();
            return this.p2s;
        } else {
            return null;
        }
    };

//####################################################################################################################################################

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.setPlayerContainer = function() {
        var container = arguments[0];
        if (arguments.length < 1)
            return -1;
        if (typeof (arguments[0]) === "string")
            container = document.getElementById(arguments[0]);
        if (typeof (container) !== "object")
            return -2;
        if (this.playerContainer !== container) {
            this.playerContainer = container;
            return 1;
        }
        else
            return 0;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getPlayerContainer = function() {
        return this.playerContainer;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.setPlayerAPI = function() {
        if (this.getPlayerState().valueOf() !== adways.interactive.Experience.playerStates.EMPTY)
            return -1;
        else {
            this.ownPlayer = (arguments.length > 1 && typeof (arguments[1]) === "boolean" ? arguments[1] : false);
            this.playerState.setV(adways.interactive.Experience.playerStates.BUILDING);
            this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.PLAYER_STATE_CHANGED));
            return this.playerReady.apply(this, arguments);
        }
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getPlayer = function() {
        console.warn("Adways Loader: Experience.prototype.getPlayer is deprecated. Use Experience.prototype.getPlayerAPI instead.");
        return this.getPlayerAPI();
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getPlayerAPI = function() {
        return this.playerAPI;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getOwnPlayer = function() {
        return this.ownPlayer;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getPlayerState = function() {
        return this.playerState;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.buildPlayer = function() {

        if (this.playerState.valueOf() !== adways.interactive.Experience.playerStates.EMPTY)
            return -4;

        if (this.playerClassJSConstant == "") {
            if (typeof (this.playerBuilderClassname) !== "string") {
                if (typeof (this.playerBuilderURL) !== "string")
                    return -3;
                else
                    return -2;
            }
            this.ownPlayer = true;

            this.playerState.setV(adways.interactive.Experience.playerStates.BUILDING);
            this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.PLAYER_STATE_CHANGED));
            return this._buildPlayer();
        } else {

            this.ownPlayer = true;

            this.playerState.setV(adways.interactive.Experience.playerStates.BUILDING);
            this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.PLAYER_STATE_CHANGED));

            if (!this.playerBuilderClassname || !this.playerBuilderURL) {
                if (this._requestPlayerClassFromJSConstant() > 0)
                    return 2;
                else {
                    this.playerState.setV(adways.interactive.Experience.playerStates.ERROR);
                    this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.PLAYER_STATE_CHANGED));
                    return -5;
                }
            }
            return this._buildPlayer();
        }

    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype._buildPlayer = function() {
        var that = this;
        var evalResult = true;
        try {
            evalResult = eval('(typeof (' + that.playerBuilderClassname + '))');
            evalResult = (evalResult === "undefined");
        }
        catch (e) {
        }

        if (evalResult) {
            // assert(playerScriptTag===null)

            this.playerScriptTag = document.createElement("script");
            if (typeof (adways.tweaks.isIE) === "number" && adways.tweaks.isIE <= 8)
                this.playerScriptTag.type = "text/javascript";
            else
                this.playerScriptTag.type = "application/javascript";

//            this.playerScriptTag.src = this.playerBuilderURL;
            var playerScriptTagSrc = this.playerBuilderURL;
            if (typeof (this.getExperienceParam("playUrlSubstitution")) != "undefined") {
                var playUrlSubstitution = this.getExperienceParam("playUrlSubstitution");
                playerScriptTagSrc = playerScriptTagSrc.replace(playUrlSubstitution[0], playUrlSubstitution[1]);
            }
            if(typeof(adways.tweaks.forceProtocol)!=="undefined") {
                if (playerScriptTagSrc.search(/^http[s]?\:\/\//) === -1) {
                    playerScriptTagSrc = adways.tweaks.forceProtocol+":"+playerScriptTagSrc;
                }
            }
            this.playerScriptTag.src = playerScriptTagSrc;

//        this.playerScriptTag.async = false;
            adways.misc.html.addEventListener(this.playerScriptTag, "load", this.playerScriptTagLoadCB);
            adways.misc.html.addEventListener(this.playerScriptTag, "error", this.playerScriptTagErrorCB);
            document.getElementsByTagName("head")[0].appendChild(this.playerScriptTag);
        } else {
            this.playerScriptTagLoadCB();
        }

        return 1;
    };

//####################################################################################################################################################

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getDelegate = function() {
        return this.delegate;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getDelegateState = function() {
        return this.delegateState;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.buildDelegate = function() {
        if (typeof (this.playerAPI) !== "object" || this.playerAPI === null ||
                this.getPlayerState().valueOf() !== adways.interactive.Experience.playerStates.BUILT)
            return -1;

        if (adways.interactive.Experience.interactiveLibState.valueOf() !== adways.interactive.Experience.interactiveLibStates.LOADED)
            return -1;

        if (this.delegateState.valueOf() !== adways.interactive.Experience.delegateStates.EMPTY)
            return -4;

        if (this._redirectToIOSApp &&
                this._iphoneBehavior !== adways.interactive.Experience.IPhoneBehaviors.DEFAULT) {
            return -6;
        }

        if (this.playerClassJSConstant == "") {
            if (typeof (this.delegateBuilderClassname) !== "string") {
                if (typeof (this.delegateBuilderURL) !== "string")
                    return -3;
                else
                    return -2;
            }
            this.delegateState.setV(adways.interactive.Experience.delegateStates.BUILDING);
            this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.DELEGATE_STATE_CHANGED));
            return this._buildDelegate();
        } else {

            this.delegateState.setV(adways.interactive.Experience.delegateStates.BUILDING);
            this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.DELEGATE_STATE_CHANGED));

            if (!this.delegateBuilderClassname || !this.delegateBuilderURL) {
                if (this._requestPlayerClassFromJSConstant() > 0)
                    return 2;
                else {
                    this.delegateState.setV(adways.interactive.Experience.delegateStates.ERROR);
                    this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.DELEGATE_STATE_CHANGED));
                    return -5;
                }
            }
            return this._buildDelegate();
        }

    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype._buildDelegate = function() {

        var that = this;
        var evalResult = true;
        try {
            evalResult = eval('(typeof (' + that.delegateBuilderClassname + '))');
            evalResult = (evalResult === "undefined");
        }
        catch (e) {
        }

        if (evalResult) {
            // assert(delegateScriptTag===null)

            this.delegateScriptTag = document.createElement("script");
            if (typeof (adways.tweaks.isIE) === "number" && adways.tweaks.isIE <= 8)
                this.delegateScriptTag.type = "text/javascript";
            else
                this.delegateScriptTag.type = "application/javascript";

//            this.delegateScriptTag.src = this.delegateBuilderURL;
            var delegateScriptTagSrc = this.delegateBuilderURL;
            if (typeof (this.getExperienceParam("playUrlSubstitution")) != "undefined") {
                var playUrlSubstitution = this.getExperienceParam("playUrlSubstitution");
                delegateScriptTagSrc = delegateScriptTagSrc.replace(playUrlSubstitution[0], playUrlSubstitution[1]);
            }
            if(typeof(adways.tweaks.forceProtocol)!=="undefined") {
                if (delegateScriptTagSrc.search(/^http[s]?\:\/\//) === -1) {
                    delegateScriptTagSrc = adways.tweaks.forceProtocol+":"+delegateScriptTagSrc;
                }
            }
            this.delegateScriptTag.src = delegateScriptTagSrc;

//        this.delegateScriptTag.async = false;
            adways.misc.html.addEventListener(this.delegateScriptTag, "load", this.delegateScriptTagLoadCB);
            adways.misc.html.addEventListener(this.delegateScriptTag, "error", this.delegateScriptTagErrorCB);
            document.getElementsByTagName("head")[0].appendChild(this.delegateScriptTag);
        }
        else {
            this.delegateScriptTagLoadCB();
        }

        return 1;
    };

//####################################################################################################################################################

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.shouldBuildInteractivity = function() {
        return ((typeof (this.forceBuildInteractivity) === "boolean" && this.forceBuildInteractivity)
                ||
                (
                // interactivity is not supported on IE<=7
                !(adways.misc.html.userAgent.UA.browser[0].identifier === adways.misc.html.userAgent.IE &&
                    adways.misc.html.userAgent.UA.browser[0].version[1] <= 7)
                &&
                // on iphone with ios < 10, in a browser, do not build the interactivity, because it may be built inside the adways interactive player app.
                !(adways.misc.html.userAgent.UA.device[0].identifier === adways.misc.html.userAgent.IPHONE && adways.misc.html.userAgent.UA.os[0].version[1] < 10 &&
                    adways.misc.html.userAgent.UA.browser[0].identifier !== adways.misc.html.userAgent.UNKNOWN && !(window.navigator.standalone))   // not in the Adways interactive player ios app
                )
        );
    };

//####################################################################################################################################################

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.load = function() {
        this.autoBuildScene = true;
        this.autoBuildPlayer = true;
        this.autoBuildDelegate = true;
        var that = this;
        var CB = function() {
            that.autoBuildScene = false;
            that.autoBuildPlayer = false;
            that.autoBuildDelegate = false;
            that.removeEventListener(adways.interactive.Experience.Event.READY, CB);
        };
        this.addEventListener(adways.interactive.Experience.Event.READY, CB);
        // the publicationJSON is already defined so we don't need to request via the publicationID
        if (this.publicationJSON !== null) {
            return this.setPublicationJSON(this.publicationJSON, true);
        } else {
            return this.requestPublicationJSON();
        }
    };

//####################################################################################################################################################

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.getExperienceID = function() {
        return this.experienceID;
    };

//####################################################################################################################################################

//----------------------------------------------------------------------------------------------------------------------------------------------------

    adways.interactive.Experience.prototype.getIPhoneBehavior = function() {
        return this._iphoneBehavior;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------

    adways.interactive.Experience.prototype.setIPhoneBehavior = function(iphoneBehavior) {
        this._iphoneBehavior = iphoneBehavior;
    };

//####################################################################################################################################################

//----------------------------------------------------------------------------------------------------------------------------------------------------
    /*
     destinée aux developpeurs des "playerBuilder"
     */
    adways.interactive.Experience.prototype.playerReady = function(playerAPI) {

        if (!this.clearingPlayer) {
            /*
             * Que se passe t il si le player existe deja ? Doit on detruire nous meme le delegate ou bien dire a l'appelant qu'il ne peut pas
             * appeler "playerReady" et qu'il doit au préalable detruire les delegates (via clearPlayer) ?
             * => il doit appeler "clearPlayer"
             */
            if (this.getPlayerState().valueOf() === adways.interactive.Experience.playerStates.BUILDING) {

                this.playerAPI = playerAPI;
                this.playerState.setV(adways.interactive.Experience.playerStates.BUILT);
                this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.PLAYER_STATE_CHANGED));

                // assert(this.mainExp.getDelegateState().valueOf()===adways.interactive.Experience.delegateStates.EMPTY)
                // should be always true, otherwise, there is a pb: playerReady with a delegateState!=EMPTY ???

                if ((this.autoBuildDelegate /*|| opt param autoBuildDelegate typeof(arguments[1])==="boolean"?arguments[1]:false*/) &&
                        this.shouldBuildInteractivity()) {
                    this.buildDelegate();
                    return 2;
                }
                else
                    return 1;
            }
            else
                return -3;
        }
        else
            return -4;
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    /*
     destinée aux developpeurs des "delegateBuilder"
     */
    adways.interactive.Experience.prototype.delegateReady = function(delegate) {

        if (!this.clearingPlayer) {
            if (this.getDelegateState().valueOf() === adways.interactive.Experience.delegateStates.BUILDING) {

                this.delegate = delegate;
                this.delegateState.setV(adways.interactive.Experience.delegateStates.BUILT);
                this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.DELEGATE_STATE_CHANGED));

                // Must disapear but stay for retrocompatibility
                this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.experienceEvents.DELEGATE_BUILT));
                
                if (this.getSceneState().valueOf() === adways.interactive.Experience.sceneStates.EMPTY &&
                        (this.autoBuildScene /*|| opt param autoBuildScene typeof(arguments[1])==="boolean"?arguments[1]:false*/) &&
                        !this.asyncLoadScene &&
                        this.shouldBuildInteractivity()) {
                    this.buildScene();
                    return 2;
                }
                else {
                    ////// deprecated event
                    if (this.getSceneState().valueOf() === adways.interactive.Experience.sceneStates.BUILT) {
                        this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.READY));
                    }
                    ////////////////////
                    return 1;
                }
            }
            else
                return -3;
        }
        else {
            return -4;
        }
    };

//####################################################################################################################################################
    /*
     * Deprecated
     * IInfoCollector implementation
     */
//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.actionExecuted = function() {
        this.dispatchEvent(new adways.interactive.Experience.ActionEvent(arguments[0]));
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.contentClicked = function() {
        this.dispatchEvent(new adways.interactive.Experience.ContentEvent(arguments[0]));
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.started = function() {
        this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.INTERACTIVITY_STARTED));
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.loaded = function() {
        /* 2016.01.21, dthibault, since adways.interactive.Experience implements adways.interactive.IInfoCollector it must implements loaded */
//    this.dispatchEvent(new adways.interactive.Experience.Event(adways.interactive.Experience.Event.INTERACTIVITY_LOADED));
        /* fin 2016.01.21, dthibault */
    };
// no longer required since equal to SCENE_STATE_CHANGED to BUILT

////----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.ended = function() {
        /* 2016.02.02, dthibault, since adways.interactive.Experience implements adways.interactive.IInfoCollector it must implements ended */
//    throw "the player reaches the stream's end. And the video is interactive, the event is not INTERACTIVITY_ENDED but VIDEO_ENDED but should be tracked in a different manner.";
        /* fin 2016.02.02, dthibault */
    };

////----------------------------------------------------------------------------------------------------------------------------------------------------
//adways.interactive.Experience.prototype.enrichmentClick = function() {
//    throw "GNEUUU ???";
//};

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.enrichmentDisplay = function() {
        this.dispatchEvent(new adways.interactive.Experience.EnrichmentEvent(arguments[0]));
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.percentConsumed = function() {
        this.dispatchEvent(new adways.interactive.Experience.PercentConsumedEvent(arguments[0].valueOf()));
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.prototype.sendStat = function() {
        this.dispatchEvent(new adways.interactive.Experience.ContentStatEvent(arguments[0], arguments[1], arguments[2]));
    };




//####################################################################################################################################################
//####################################################################################################################################################
//####################################################################################################################################################
//####################################################################################################################################################
    /*****************************************************************************************************************************************************
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     ****************************************************************************************************************************************************/



//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.Event = function() {
        adways.event.Event.apply(this, arguments);
    };
    adways.oop.createClass(adways.interactive.Experience.Event, adways.event.Event);

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.Event.INTERACTIVE_LIB_STATE_CHANGED = ++adways.event.kindCounter;

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.Event.SCENE_STATE_CHANGED = ++adways.event.kindCounter;

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.Event.PUBLICATION_ID_CHANGED = ++adways.event.kindCounter;

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.Event.PUBLICATION_JSON_CHANGED = ++adways.event.kindCounter;

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.Event.PLAYER_STATE_CHANGED = ++adways.event.kindCounter;

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.Event.DELEGATE_STATE_CHANGED = ++adways.event.kindCounter;

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.Event.INTERACTIVITY_STARTED = ++adways.event.kindCounter;
    adways.interactive.Experience.Event.INTERACTIVITY_ENDED = ++adways.event.kindCounter;

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.Event.ENRICHMENT_ACTIVATION_CHANGED = ++adways.event.kindCounter;

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.Event.CONTENT_CLICKED = ++adways.event.kindCounter;

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.Event.VIDEO_STARTED = ++adways.event.kindCounter;
    adways.interactive.Experience.Event.VIDEO_ENDED = ++adways.event.kindCounter;

//----------------------------------------------------------------------------------------------------------------------------------------------------
    /*
     * aujourd'hui un event batard car envoyé lorsque l'interactivite est started mais c'est le percentConsumed de la video...
     * En gros faudrait que ce soit un VIDEO_PERCENT_CONSUMED mais il n'est envoyé que si par ailleurs l'interactivité est activée...
     */
    adways.interactive.Experience.Event.PERCENT_CONSUMED = ++adways.event.kindCounter;

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.Event.READY = adways.interactive.experienceEvents.READY;

//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.Event.ACTION_EXECUTED = ++adways.event.kindCounter;
//----------------------------------------------------------------------------------------------------------------------------------------------------
    adways.interactive.Experience.Event.CONTENT_STAT = ++adways.event.kindCounter;


//####################################################################################################################################################

    adways.interactive.Experience.PercentConsumedEvent = function(decile) {
        adways.interactive.Experience.Event.call(this, adways.interactive.Experience.Event.PERCENT_CONSUMED);
        this.decile = arguments[0];
    };
    adways.oop.createClass(adways.interactive.Experience.PercentConsumedEvent, adways.interactive.Experience.Event);

    adways.interactive.Experience.PercentConsumedEvent.prototype.getDecile = function() {
        return this.decile;
    };

//####################################################################################################################################################

    adways.interactive.Experience.ActionEvent = function(action) {
        adways.interactive.Experience.Event.call(this, adways.interactive.Experience.Event.ACTION_EXECUTED);
        this.action = arguments[0];
    };
    adways.oop.createClass(adways.interactive.Experience.ActionEvent, adways.interactive.Experience.Event);

    adways.interactive.Experience.ActionEvent.prototype.getAction = function() {
        return this.action;
    };

//####################################################################################################################################################

    adways.interactive.Experience.ContentEvent = function(content) {
        adways.interactive.Experience.Event.call(this, (arguments.length > 1 ? arguments[1] : adways.interactive.Experience.Event.CONTENT_CLICKED));
        this.content = arguments[0];
    };
    adways.oop.createClass(adways.interactive.Experience.ContentEvent, adways.interactive.Experience.Event);

    adways.interactive.Experience.ContentEvent.prototype.getContent = function() {
        return this.content;
    };

//####################################################################################################################################################

    adways.interactive.Experience.EnrichmentEvent = function(enrichment) {
        adways.interactive.Experience.Event.call(this, adways.interactive.Experience.Event.ENRICHMENT_ACTIVATION_CHANGED);
        this.enrichment = arguments[0];
    };
    adways.oop.createClass(adways.interactive.Experience.EnrichmentEvent, adways.interactive.Experience.Event);

    adways.interactive.Experience.EnrichmentEvent.prototype.getEnrichment = function() {
        return this.enrichment;
    };

//####################################################################################################################################################

    adways.interactive.Experience.ContentStatEvent = function(content, key, value) {
        adways.interactive.Experience.ContentEvent.call(this, arguments[0], adways.interactive.Experience.Event.CONTENT_STAT);
        this.key = arguments[1];
        this.value = arguments[2];
    };
    adways.oop.createClass(adways.interactive.Experience.ContentStatEvent, adways.interactive.Experience.ContentEvent);

    adways.interactive.Experience.ContentStatEvent.prototype.getKey = function() {
        return this.key;
    };
    adways.interactive.Experience.ContentStatEvent.prototype.getValue = function() {
        return this.value;
    };
    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 */


}());

    /*##################################################################################################################################################*/

    if (typeof (adways.interactive.load) !== "undefined") {
        console.warn("\"adways.interactive.load\" is already defined");
        return;
    }
    /*
     * load (json): Experience
     * json.playerType: Constant
     * json.player: domID | ptr
     * json.publicationID: string
     * json.container: domID | ptr (si player present, alors container est ignoré)
     */
    adways.interactive.load = function() {
        var experience = adways.interactive.createExperience.apply(null, arguments);
        experience.load();
        return experience;
    };
    adways.interactive.createExperience = function() {

        // experience
        // lmasclaux, 2016.01.22, the experience constructor sets the experienceID
        var experience = new adways.interactive.Experience();
        adways.interactive.experiences[experience.getExperienceID()] = experience;
//             adways.debugExperience =    adways.interactive.experiences[experienceID];    

//experienceID,
//                publication,
//                arguments[0].playerParams ? arguments[0].playerParams : new Object(),
//                arguments[0].delegateParams ? arguments[0].delegateParams : new Object(),
//                arguments[0].mediaParams ? arguments[0].mediaParams : new Object(),
//                arguments[0].options ? arguments[0].options : new Object(),
//                arguments[0].asyncLoadScene ? arguments[0].asyncLoadScene : false,
//                playerHelper,
//                player,
//                container

        var publication = null;
        if (arguments.length > 0 && typeof (arguments[0]) == "object") {
            if (typeof arguments[0].publication !== "undefined") {
                publication = arguments[0].publication;
                if (!(
                        typeof (publication) === "string" ||
                        (typeof (publication) === "object" && typeof (publication.publication) === "object" && typeof (publication.publication.id) === "string")
                        )) {
                    console.warn("Adways Loader: the publication param is not valid");
                }
            }
        }

        // player type
        // retrocompatibilité de playerClass avec playerHelper avec playerType
        var playerClass = null;
        if (arguments.length > 0 && typeof (arguments[0].playerHelper) !== "undefined" && typeof (arguments[0].playerClass) == "undefined") {
            arguments[0].playerClass = arguments[0].playerHelper;
        }
        if (arguments.length > 0 && typeof (arguments[0].playerType) !== "undefined" && typeof (arguments[0].playerClass) == "undefined") {
            arguments[0].playerClass = arguments[0].playerType;
        }
        if (arguments.length > 0 && typeof (arguments[0].playerClass) !== "undefined") {
            if (typeof (arguments[0].playerClass) !== "string") {
                // the playerClass given is a custom helper, not referenced in adways
                playerClass = arguments[0].playerClass;
                playerClass.js_constant = "CUSTOM";
            } else {
                playerClass = arguments[0].playerClass;
            }
        }

        // player or container
        var player = null;
        var container = null;
        if (arguments.length > 0 && typeof (arguments[0].player) !== "undefined" && playerClass != null) {
            if (typeof (arguments[0].player) === "string") {
                switch (playerClass.js_constant) {
                    default:
                        player = document.getElementById(arguments[0].player);
                        break;
                }
            }
            else {
                switch (playerClass.js_constant) {
                    default:
                        player = arguments[0].player;
                        break;
                }
            }
        }

        if (player === null && arguments.length > 0 && typeof (arguments[0].container) !== "undefined") {
            container = arguments[0].container;
            if (typeof (container) !== "undefined") {
                if (typeof (container) === "string") {
                    container = document.getElementById(container);
                }
                else if (typeof (container) !== "object") {
                    console.warn("Adways Loader: container is not an object so cannot be a valid DOM element");
                }
//                var tmp = document.createElement("div");
//                tmp.style.position = "relative";
//                tmp.style.width = "100%";
//                tmp.style.height = "100%";
//                container.appendChild(tmp);
//                container = tmp;
            }
            else {
                console.warn("Adways Loader: unable to find the player");
            }
        }

        if (arguments.length > 0) {

            if (playerClass !== null)
                experience.setPlayerClass(playerClass);

            if (arguments[0].playerParams)
                experience.setPlayerParams(arguments[0].playerParams);

            if (arguments[0].mediaParams)
                experience.setMediaParams(arguments[0].mediaParams);

            if (arguments[0].delegateParams)
                experience.setDelegateParams(arguments[0].delegateParams);

            if (arguments[0].options)
                experience.setPlayerOptions(arguments[0].options);
            
            if (arguments[0].playerOptions)
                experience.setPlayerOptions(arguments[0].playerOptions);
        }

        if (player != null)
            experience.setPlayerAPI(player);
        else if (container != null)
            experience.setPlayerContainer(container);

        if (typeof (publication) === "string")
            experience.setPublicationID(publication);
        else if (typeof (publication) === "object" && publication != null && typeof (publication.publication) === "object" /*&& typeof (publication.publication.id) === "string"*/)
        {
            experience.setPublicationJSON(publication);
        }

        return experience;
    };

    /*##################################################################################################################################################*/

    if (typeof (adways.interactive.unload) !== "undefined") {
        console.warn("\"adways.interactive.unload\" is already defined");
    }
    /*
     * unload (experience: Experience): number
     */
    adways.interactive.unload = function(experience) {
        for (var exp in adways.interactive.experiences) {
            if (experience === adways.interactive.experiences[exp])
                delete adways.interactive.experiences[exp];
        }
        //////////////////////////////////////////////////////////////
        // lmasclaux: to verif
        experience.clearAll();
        //////////////////////////////////////////////////////////////
        adways.destruct(experience);
    };

}(window));
    }

    experience = new adways.interactive.Experience();
    experience.setPlayerClass("brightcove");
    experience.setPlayerAPI(that);

    if (typeof arguments[0] == "undefined")
        arguments[0] = new Object();

    if (typeof arguments[0].experienceCreatedCBs == "object") {
        for (var expCreated = 0; expCreated < arguments[0].experienceCreatedCBs.length; expCreated++) {
            if (typeof arguments[0].experienceCreatedCBs[expCreated] == "string" && typeof that[arguments[0].experienceCreatedCBs[expCreated]] == "function")
                that[arguments[0].experienceCreatedCBs[expCreated]]({"adwaysExperience": experience});
        }
    }

    autoLoad = typeof (arguments[0].autoLoad) !== "undefined" ? Boolean(arguments[0].autoLoad) : false;

    var checkMetadataTimeout = 5000;
    if (typeof (arguments[0].checkMetadataTimeout_flash) === "number") {
        checkMetadataTimeout = arguments[0].checkMetadataTimeout_flash;
    }

    var customMetadatasWatcherTimer = null;

    var getCustomMetadatas = function() {

        if (typeof that.mediainfo != "undefined" && customMetadatasWatcherTimer !== null) {
            window.clearInterval(customMetadatasWatcherTimer);
            customMetadatasWatcherTimer = null;
        } else if (typeof that.mediainfo != "undefined" && customMetadatasWatcherTimer === null) {
            // hum I dunno what happens here yet
        } else
            return 0;

        if (currentMediaID != "" && currentMediaID != that.mediainfo && experience.getSceneState().valueOf() !== adways.interactive.Experience.sceneStates.EMPTY) {
            experience.clearScene();
        }

        currentMediaID = that.mediainfo.id;

        if (that.mediainfo && that.mediainfo.custom_fields
                && that.mediainfo.custom_fields.adways_scene_time_reference
                && (typeof (that.mediainfo.custom_fields.adways_scene_time_reference) == "string"
                        || typeof (that.mediainfo.custom_fields.adways_scene_time_reference) == "boolean")) {
            // default value: false
            if (experience.getSceneTimeReference() == false)
                experience.setSceneTimeReference(Boolean(that.mediainfo.custom_fields.adways_scene_time_reference));
        }

        // Warning: "publicationID" is deprecated
        if (that.mediainfo && that.mediainfo.custom_fields && that.mediainfo.custom_fields.adways_publication_id) {
            if (typeof (that.mediainfo.custom_fields.adways_publication_id) !== "string") {
                console.warn("The Adways Publication ID custom field has to be a string.");
            } else {
                if (experience.getPublicationID() == "") {
                    experience.setPublicationID(that.mediainfo.custom_fields.adways_publication_id);
                }
            }
        }

        if (autoLoad && experience.getPublicationID() != "")
        {
            experience.load();
        }
    };

    if (typeof (arguments[0].publicationID) == "string") {
        experience.setPublicationID(arguments[0].publicationID);
    }
    else if (typeof (arguments[0].publication) == "string") {
        experience.setPublicationID(arguments[0].publication);
    }
    else if (typeof (arguments[0].publication) == "object") {
        experience.setPublicationJSON(arguments[0].publication);
    }

    // live mode
    if (typeof arguments[0].sceneTimeReference == "boolean" || typeof arguments[0].sceneTimeReference == "string") {
        experience.setSceneTimeReference(Boolean(arguments[0].sceneTimeReference));
    }

    customMetadatasWatcherTimer = setInterval(getCustomMetadatas, 250);
    setTimeout(function() {
        if (customMetadatasWatcherTimer !== null)
            clearInterval(customMetadatasWatcherTimer);
    }, checkMetadataTimeout);

    that.on("loadedmetadata", getCustomMetadatas);

    return experience;

};