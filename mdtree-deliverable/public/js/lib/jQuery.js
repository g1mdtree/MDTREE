/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);


// /*! jQuery UI - v1.9.0 - 2012-10-17
// * http://jqueryui.com
// * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.datepicker.js
// * Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT */

// (function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return!e(t).parents().andSelf().filter(function(){return e.css(this,"visibility")==="hidden"||e.expr.filters.hidden(this)}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.9.0",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e(function(){var t=document.body,n=t.appendChild(n=document.createElement("div"));n.offsetHeight,e.extend(n.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=n.offsetHeight===100,e.support.selectstart="onselectstart"in n,t.removeChild(n).style.display="none"}),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},contains:e.contains,hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)},isOverAxis:function(e,t,n){return e>t&&e<t+n},isOver:function(t,n,r,i,s,o){return e.ui.isOverAxis(t,r,s)&&e.ui.isOverAxis(n,i,o)}})})(jQuery);(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a=t.split(".")[0];t=t.split(".")[1],i=a+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[a]=e[a]||{},s=e[a][t],o=e[a][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,i){e.isFunction(i)&&(r[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},r=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=r,s=i.apply(this,arguments),this._super=t,this._superApply=n,s}}())}),o.prototype=e.widget.extend(u,{widgetEventPrefix:t},r,{constructor:o,namespace:a,widgetName:t,widgetBaseClass:i,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(n[u]=e.isPlainObject(a)?e.widget.extend({},n[u],a):a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():new i(o,this)}),f}},e.Widget=function(e,t){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetName,this),e.data(r,this.widgetFullName,this),this._on({remove:"destroy"}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n){n?(t=e(t),this.bindings=this.bindings.add(t)):(n=t,t=this.element);var r=this;e.each(n,function(n,i){function s(){if(r.options.disabled===!0||e(this).hasClass("ui-state-disabled"))return;return(typeof i=="string"?r[i]:i).apply(r,arguments)}typeof i!="string"&&(s.guid=i.guid=i.guid||s.guid||e.guid++);var o=n.match(/^(\w+)\s*(.*)$/),u=o[1]+r.eventNamespace,a=o[2];a?r.widget().delegate(a,u,s):t.bind(u,s)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&(e.effects.effect[u]||e.uiBackCompat!==!1&&e.effects[u])?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}}),e.uiBackCompat!==!1&&(e.Widget.prototype._getCreateOptions=function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]})})(jQuery);(function(e,t){var n=!1;e(document).mouseup(function(e){n=!1}),e.widget("ui.mouse",{version:"1.9.0",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(t){return!e.browser.msie||document.documentMode>=9||!!t.button?this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted):this._mouseUp(t)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(e){return this.mouseDelayMet},_mouseStart:function(e){},_mouseDrag:function(e){},_mouseStop:function(e){},_mouseCapture:function(e){return!0}})})(jQuery);(function(e,t){function h(e,t,n){return[parseInt(e[0],10)*(l.test(e[0])?t/100:1),parseInt(e[1],10)*(l.test(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}e.ui=e.ui||{};var n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/,a=/[\+\-]\d+%?/,f=/^\w+/,l=/%$/,c=e.fn.position;e.position={scrollbarWidth:function(){if(n!==t)return n;var r,i,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return e("body").append(s),r=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,r===i&&(i=s[0].clientWidth),s.remove(),n=r-i},getScrollInfo:function(t){var n=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:i?e.position.scrollbarWidth():0,height:s?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]);return{element:n,isWindow:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r?n.width():n.outerWidth(),height:r?n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return c.apply(this,arguments);t=e.extend({},t);var n,l,d,v,m,g=e(t.of),y=e.position.getWithinInfo(t.within),b=e.position.getScrollInfo(y),w=g[0],E=(t.collision||"flip").split(" "),S={};return w.nodeType===9?(l=g.width(),d=g.height(),v={top:0,left:0}):e.isWindow(w)?(l=g.width(),d=g.height(),v={top:g.scrollTop(),left:g.scrollLeft()}):w.preventDefault?(t.at="left top",l=d=0,v={top:w.pageY,left:w.pageX}):(l=g.outerWidth(),d=g.outerHeight(),v=g.offset()),m=e.extend({},v),e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,r;e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center",n=a.exec(e[0]),r=a.exec(e[1]),S[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]}),E.length===1&&(E[1]=E[0]),t.at[0]==="right"?m.left+=l:t.at[0]==="center"&&(m.left+=l/2),t.at[1]==="bottom"?m.top+=d:t.at[1]==="center"&&(m.top+=d/2),n=h(S.at,l,d),m.left+=n[0],m.top+=n[1],this.each(function(){var o,u,a=e(this),f=a.outerWidth(),c=a.outerHeight(),w=p(this,"marginLeft"),x=p(this,"marginTop"),T=f+w+p(this,"marginRight")+b.width,N=c+x+p(this,"marginBottom")+b.height,C=e.extend({},m),k=h(S.my,a.outerWidth(),a.outerHeight());t.my[0]==="right"?C.left-=f:t.my[0]==="center"&&(C.left-=f/2),t.my[1]==="bottom"?C.top-=c:t.my[1]==="center"&&(C.top-=c/2),C.left+=k[0],C.top+=k[1],e.support.offsetFractions||(C.left=s(C.left),C.top=s(C.top)),o={marginLeft:w,marginTop:x},e.each(["left","top"],function(r,i){e.ui.position[E[r]]&&e.ui.position[E[r]][i](C,{targetWidth:l,targetHeight:d,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:T,collisionHeight:N,offset:[n[0]+k[0],n[1]+k[1]],my:t.my,at:t.at,within:y,elem:a})}),e.fn.bgiframe&&a.bgiframe(),t.using&&(u=function(e){var n=v.left-C.left,s=n+l-f,o=v.top-C.top,u=o+d-c,h={target:{element:g,left:v.left,top:v.top,width:l,height:d},element:{element:a,left:C.left,top:C.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};l<f&&i(n+s)<l&&(h.horizontal="center"),d<c&&i(o+u)<d&&(h.vertical="middle"),r(i(n),i(s))>r(i(o),i(u))?h.important="horizontal":h.important="vertical",t.using.call(this,e,h)}),a.offset(e.extend(C,{using:u}))})},e.ui.position={fit:{left:function(e,t){var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;t.collisionWidth>s?u>0&&a<=0?(f=e.left+u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)},top:function(e,t){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;t.collisionHeight>s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top)}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],p,d;if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a))e.left+=l+c+h}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||i(d)<f)e.left+=l+c+h}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,p=-2*t.offset[1],d,v;a<0?(v=e.top+c+h+p+t.collisionHeight-s-r,e.top+c+h+p>a&&(v<0||v<i(a))&&(e.top+=c+h+p)):f>0&&(d=e.top-t.collisionPosition.marginTop+c+h+p-o,e.top+c+h+p>f&&(d>0||i(d)<f)&&(e.top+=c+h+p))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,r,i,s,o=document.getElementsByTagName("body")[0],u=document.createElement("div");t=document.createElement(o?"div":"body"),r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&e.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in r)t.style[s]=r[s];t.appendChild(u),n=o||document.documentElement,n.insertBefore(t,n.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",i=e(u).offset().left,e.support.offsetFractions=i>10&&i<11,t.innerHTML="",n.removeChild(t)}(),e.uiBackCompat!==!1&&function(e){var n=e.fn.position;e.fn.position=function(r){if(!r||!r.offset)return n.call(this,r);var i=r.offset.split(" "),s=r.at.split(" ");return i.length===1&&(i[1]=i[0]),/^\d/.test(i[0])&&(i[0]="+"+i[0]),/^\d/.test(i[1])&&(i[1]="+"+i[1]),s.length===1&&(/left|center|right/.test(s[0])?s[1]="center":(s[1]=s[0],s[0]="center")),n.call(this,e.extend(r,{at:s[0]+i[0]+" "+s[1]+i[1],offset:t}))}}(jQuery)})(jQuery);(function($,undefined){function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function bindHover(e){var t="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(t,"mouseout",function(){$(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!=-1&&$(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!=-1&&$(this).removeClass("ui-datepicker-next-hover")}).delegate(t,"mouseover",function(){$.datepicker._isDisabledDatepicker(instActive.inline?e.parent()[0]:instActive.input[0])||($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),$(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!=-1&&$(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!=-1&&$(this).addClass("ui-datepicker-next-hover"))})}function extendRemove(e,t){$.extend(e,t);for(var n in t)if(t[n]==null||t[n]==undefined)e[n]=t[n];return e}$.extend($.ui,{datepicker:{version:"1.9.0"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return extendRemove(this._defaults,e||{}),this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline=nodeName=="div"||nodeName=="span";target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(e,t){var n=e[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:t,dpDiv:t?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(e,t){var n=$(e);t.append=$([]),t.trigger=$([]);if(n.hasClass(this.markerClassName))return;this._attachments(n,t),n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(e,n,r){t.settings[n]=r}).bind("getData.datepicker",function(e,n){return this._get(t,n)}),this._autoSize(t),$.data(e,PROP_NAME,t),t.settings.disabled&&this._disableDatepicker(e)},_attachments:function(e,t){var n=this._get(t,"appendText"),r=this._get(t,"isRTL");t.append&&t.append.remove(),n&&(t.append=$('<span class="'+this._appendClass+'">'+n+"</span>"),e[r?"before":"after"](t.append)),e.unbind("focus",this._showDatepicker),t.trigger&&t.trigger.remove();var i=this._get(t,"showOn");(i=="focus"||i=="both")&&e.focus(this._showDatepicker);if(i=="button"||i=="both"){var s=this._get(t,"buttonText"),o=this._get(t,"buttonImage");t.trigger=$(this._get(t,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:o,alt:s,title:s}):$('<button type="button"></button>').addClass(this._triggerClass).html(o==""?s:$("<img/>").attr({src:o,alt:s,title:s}))),e[r?"before":"after"](t.trigger),t.trigger.click(function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput==e[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=e[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(e[0])):$.datepicker._showDatepicker(e[0]),!1})}},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t=new Date(2009,11,20),n=this._get(e,"dateFormat");if(n.match(/[DM]/)){var r=function(e){var t=0,n=0;for(var r=0;r<e.length;r++)e[r].length>t&&(t=e[r].length,n=r);return n};t.setMonth(r(this._get(e,n.match(/MM/)?"monthNames":"monthNamesShort"))),t.setDate(r(this._get(e,n.match(/DD/)?"dayNames":"dayNamesShort"))+20-t.getDay())}e.input.attr("size",this._formatDate(e,t).length)}},_inlineDatepicker:function(e,t){var n=$(e);if(n.hasClass(this.markerClassName))return;n.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker",function(e,n,r){t.settings[n]=r}).bind("getData.datepicker",function(e,n){return this._get(t,n)}),$.data(e,PROP_NAME,t),this._setDate(t,this._getDefaultDate(t),!0),this._updateDatepicker(t),this._updateAlternate(t),t.settings.disabled&&this._disableDatepicker(e),t.dpDiv.css("display","block")},_dialogDatepicker:function(e,t,n,r,i){var s=this._dialogInst;if(!s){this.uuid+=1;var o="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+o+'" style="position: absolute; top: -100px; width: 0px;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),s=this._dialogInst=this._newInst(this._dialogInput,!1),s.settings={},$.data(this._dialogInput[0],PROP_NAME,s)}extendRemove(s.settings,r||{}),t=t&&t.constructor==Date?this._formatDate(s,t):t,this._dialogInput.val(t),this._pos=i?i.length?i:[i.pageX,i.pageY]:null;if(!this._pos){var u=document.documentElement.clientWidth,a=document.documentElement.clientHeight,f=document.documentElement.scrollLeft||document.body.scrollLeft,l=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[u/2-100+f,a/2-150+l]}return this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),s.settings.onSelect=n,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,s),this},_destroyDatepicker:function(e){var t=$(e),n=$.data(e,PROP_NAME);if(!t.hasClass(this.markerClassName))return;var r=e.nodeName.toLowerCase();$.removeData(e,PROP_NAME),r=="input"?(n.append.remove(),n.trigger.remove(),t.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(r=="div"||r=="span")&&t.removeClass(this.markerClassName).empty()},_enableDatepicker:function(e){var t=$(e),n=$.data(e,PROP_NAME);if(!t.hasClass(this.markerClassName))return;var r=e.nodeName.toLowerCase();if(r=="input")e.disabled=!1,n.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(r=="div"||r=="span"){var i=t.children("."+this._inlineClass);i.children().removeClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)}this._disabledInputs=$.map(this._disabledInputs,function(t){return t==e?null:t})},_disableDatepicker:function(e){var t=$(e),n=$.data(e,PROP_NAME);if(!t.hasClass(this.markerClassName))return;var r=e.nodeName.toLowerCase();if(r=="input")e.disabled=!0,n.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(r=="div"||r=="span"){var i=t.children("."+this._inlineClass);i.children().addClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)}this._disabledInputs=$.map(this._disabledInputs,function(t){return t==e?null:t}),this._disabledInputs[this._disabledInputs.length]=e},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;t<this._disabledInputs.length;t++)if(this._disabledInputs[t]==e)return!0;return!1},_getInst:function(e){try{return $.data(e,PROP_NAME)}catch(t){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,t,n){var r=this._getInst(e);if(arguments.length==2&&typeof t=="string")return t=="defaults"?$.extend({},$.datepicker._defaults):r?t=="all"?$.extend({},r.settings):this._get(r,t):null;var i=t||{};typeof t=="string"&&(i={},i[t]=n);if(r){this._curInst==r&&this._hideDatepicker();var s=this._getDateDatepicker(e,!0),o=this._getMinMaxDate(r,"min"),u=this._getMinMaxDate(r,"max");extendRemove(r.settings,i),o!==null&&i.dateFormat!==undefined&&i.minDate===undefined&&(r.settings.minDate=this._formatDate(r,o)),u!==null&&i.dateFormat!==undefined&&i.maxDate===undefined&&(r.settings.maxDate=this._formatDate(r,u)),this._attachments($(e),r),this._autoSize(r),this._setDate(r,s),this._updateAlternate(r),this._updateDatepicker(r)}},_changeDatepicker:function(e,t,n){this._optionDatepicker(e,t,n)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var n=this._getInst(e);n&&(this._setDate(n,t),this._updateDatepicker(n),this._updateAlternate(n))},_getDateDatepicker:function(e,t){var n=this._getInst(e);return n&&!n.inline&&this._setDateFromField(n,t),n?this._getDate(n):null},_doKeyDown:function(e){var t=$.datepicker._getInst(e.target),n=!0,r=t.dpDiv.is(".ui-datepicker-rtl");t._keyEvent=!0;if($.datepicker._datepickerShowing)switch(e.keyCode){case 9:$.datepicker._hideDatepicker(),n=!1;break;case 13:var i=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",t.dpDiv);i[0]&&$.datepicker._selectDay(e.target,t.selectedMonth,t.selectedYear,i[0]);var s=$.datepicker._get(t,"onSelect");if(s){var o=$.datepicker._formatDate(t);s.apply(t.input?t.input[0]:null,[o,t])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(e.target,e.ctrlKey?-$.datepicker._get(t,"stepBigMonths"):-$.datepicker._get(t,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(e.target,e.ctrlKey?+$.datepicker._get(t,"stepBigMonths"):+$.datepicker._get(t,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&$.datepicker._clearDate(e.target),n=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&$.datepicker._gotoToday(e.target),n=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,r?1:-1,"D"),n=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&$.datepicker._adjustDate(e.target,e.ctrlKey?-$.datepicker._get(t,"stepBigMonths"):-$.datepicker._get(t,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,-7,"D"),n=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,r?-1:1,"D"),n=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&$.datepicker._adjustDate(e.target,e.ctrlKey?+$.datepicker._get(t,"stepBigMonths"):+$.datepicker._get(t,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,7,"D"),n=e.ctrlKey||e.metaKey;break;default:n=!1}else e.keyCode==36&&e.ctrlKey?$.datepicker._showDatepicker(this):n=!1;n&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var t=$.datepicker._getInst(e.target);if($.datepicker._get(t,"constrainInput")){var n=$.datepicker._possibleChars($.datepicker._get(t,"dateFormat")),r=String.fromCharCode(e.charCode==undefined?e.keyCode:e.charCode);return e.ctrlKey||e.metaKey||r<" "||!n||n.indexOf(r)>-1}},_doKeyUp:function(e){var t=$.datepicker._getInst(e.target);if(t.input.val()!=t.lastVal)try{var n=$.datepicker.parseDate($.datepicker._get(t,"dateFormat"),t.input?t.input.val():null,$.datepicker._getFormatConfig(t));n&&($.datepicker._setDateFromField(t),$.datepicker._updateAlternate(t),$.datepicker._updateDatepicker(t))}catch(r){$.datepicker.log(r)}return!0},_showDatepicker:function(e){e=e.target||e,e.nodeName.toLowerCase()!="input"&&(e=$("input",e.parentNode)[0]);if($.datepicker._isDisabledDatepicker(e)||$.datepicker._lastInput==e)return;var t=$.datepicker._getInst(e);$.datepicker._curInst&&$.datepicker._curInst!=t&&($.datepicker._curInst.dpDiv.stop(!0,!0),t&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var n=$.datepicker._get(t,"beforeShow"),r=n?n.apply(e,[e,t]):{};if(r===!1)return;extendRemove(t.settings,r),t.lastVal=null,$.datepicker._lastInput=e,$.datepicker._setDateFromField(t),$.datepicker._inDialog&&(e.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(e),$.datepicker._pos[1]+=e.offsetHeight);var i=!1;$(e).parents().each(function(){return i|=$(this).css("position")=="fixed",!i});var s={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null,t.dpDiv.empty(),t.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(t),s=$.datepicker._checkOffset(t,s,i),t.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":i?"fixed":"absolute",display:"none",left:s.left+"px",top:s.top+"px"});if(!t.inline){var o=$.datepicker._get(t,"showAnim"),u=$.datepicker._get(t,"duration"),a=function(){var e=t.dpDiv.find("iframe.ui-datepicker-cover");if(!!e.length){var n=$.datepicker._getBorders(t.dpDiv);e.css({left:-n[0],top:-n[1],width:t.dpDiv.outerWidth(),height:t.dpDiv.outerHeight()})}};t.dpDiv.zIndex($(e).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&($.effects.effect[o]||$.effects[o])?t.dpDiv.show(o,$.datepicker._get(t,"showOptions"),u,a):t.dpDiv[o||"show"](o?u:null,a),(!o||!u)&&a(),t.input.is(":visible")&&!t.input.is(":disabled")&&t.input.focus(),$.datepicker._curInst=t}},_updateDatepicker:function(e){this.maxRows=4;var t=$.datepicker._getBorders(e.dpDiv);instActive=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var n=e.dpDiv.find("iframe.ui-datepicker-cover");!n.length||n.css({left:-t[0],top:-t[1],width:e.dpDiv.outerWidth(),height:e.dpDiv.outerHeight()}),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();var r=this._getNumberOfMonths(e),i=r[1],s=17;e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),i>1&&e.dpDiv.addClass("ui-datepicker-multi-"+i).css("width",s*i+"em"),e.dpDiv[(r[0]!=1||r[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e==$.datepicker._curInst&&$.datepicker._datepickerShowing&&e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&e.input[0]!=document.activeElement&&e.input.focus();if(e.yearshtml){var o=e.yearshtml;setTimeout(function(){o===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),o=e.yearshtml=null},0)}},_getBorders:function(e){var t=function(e){return{thin:1,medium:2,thick:3}[e]||e};return[parseFloat(t(e.css("border-left-width"))),parseFloat(t(e.css("border-top-width")))]},_checkOffset:function(e,t,n){var r=e.dpDiv.outerWidth(),i=e.dpDiv.outerHeight(),s=e.input?e.input.outerWidth():0,o=e.input?e.input.outerHeight():0,u=document.documentElement.clientWidth+(n?0:$(document).scrollLeft()),a=document.documentElement.clientHeight+(n?0:$(document).scrollTop());return t.left-=this._get(e,"isRTL")?r-s:0,t.left-=n&&t.left==e.input.offset().left?$(document).scrollLeft():0,t.top-=n&&t.top==e.input.offset().top+o?$(document).scrollTop():0,t.left-=Math.min(t.left,t.left+r>u&&u>r?Math.abs(t.left+r-u):0),t.top-=Math.min(t.top,t.top+i>a&&a>i?Math.abs(i+o):0),t},_findPos:function(e){var t=this._getInst(e),n=this._get(t,"isRTL");while(e&&(e.type=="hidden"||e.nodeType!=1||$.expr.filters.hidden(e)))e=e[n?"previousSibling":"nextSibling"];var r=$(e).offset();return[r.left,r.top]},_hideDatepicker:function(e){var t=this._curInst;if(!t||e&&t!=$.data(e,PROP_NAME))return;if(this._datepickerShowing){var n=this._get(t,"showAnim"),r=this._get(t,"duration"),i=function(){$.datepicker._tidyDialog(t)};$.effects&&($.effects.effect[n]||$.effects[n])?t.dpDiv.hide(n,$.datepicker._get(t,"showOptions"),r,i):t.dpDiv[n=="slideDown"?"slideUp":n=="fadeIn"?"fadeOut":"hide"](n?r:null,i),n||i(),this._datepickerShowing=!1;var s=this._get(t,"onClose");s&&s.apply(t.input?t.input[0]:null,[t.input?t.input.val():"",t]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(!$.datepicker._curInst)return;var t=$(e.target),n=$.datepicker._getInst(t[0]);(t[0].id!=$.datepicker._mainDivId&&t.parents("#"+$.datepicker._mainDivId).length==0&&!t.hasClass($.datepicker.markerClassName)&&!t.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||t.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=n)&&$.datepicker._hideDatepicker()},_adjustDate:function(e,t,n){var r=$(e),i=this._getInst(r[0]);if(this._isDisabledDatepicker(r[0]))return;this._adjustInstDate(i,t+(n=="M"?this._get(i,"showCurrentAtPos"):0),n),this._updateDatepicker(i)},_gotoToday:function(e){var t=$(e),n=this._getInst(t[0]);if(this._get(n,"gotoCurrent")&&n.currentDay)n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear;else{var r=new Date;n.selectedDay=r.getDate(),n.drawMonth=n.selectedMonth=r.getMonth(),n.drawYear=n.selectedYear=r.getFullYear()}this._notifyChange(n),this._adjustDate(t)},_selectMonthYear:function(e,t,n){var r=$(e),i=this._getInst(r[0]);i["selected"+(n=="M"?"Month":"Year")]=i["draw"+(n=="M"?"Month":"Year")]=parseInt(t.options[t.selectedIndex].value,10),this._notifyChange(i),this._adjustDate(r)},_selectDay:function(e,t,n,r){var i=$(e);if($(r).hasClass(this._unselectableClass)||this._isDisabledDatepicker(i[0]))return;var s=this._getInst(i[0]);s.selectedDay=s.currentDay=$("a",r).html(),s.selectedMonth=s.currentMonth=t,s.selectedYear=s.currentYear=n,this._selectDate(e,this._formatDate(s,s.currentDay,s.currentMonth,s.currentYear))},_clearDate:function(e){var t=$(e),n=this._getInst(t[0]);this._selectDate(t,"")},_selectDate:function(e,t){var n=$(e),r=this._getInst(n[0]);t=t!=null?t:this._formatDate(r),r.input&&r.input.val(t),this._updateAlternate(r);var i=this._get(r,"onSelect");i?i.apply(r.input?r.input[0]:null,[t,r]):r.input&&r.input.trigger("change"),r.inline?this._updateDatepicker(r):(this._hideDatepicker(),this._lastInput=r.input[0],typeof r.input[0]!="object"&&r.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var t=this._get(e,"altField");if(t){var n=this._get(e,"altFormat")||this._get(e,"dateFormat"),r=this._getDate(e),i=this.formatDate(n,r,this._getFormatConfig(e));$(t).each(function(){$(this).val(i)})}},noWeekends:function(e){var t=e.getDay();return[t>0&&t<6,""]},iso8601Week:function(e){var t=new Date(e.getTime());t.setDate(t.getDate()+4-(t.getDay()||7));var n=t.getTime();return t.setMonth(0),t.setDate(1),Math.floor(Math.round((n-t)/864e5)/7)+1},parseDate:function(e,t,n){if(e==null||t==null)throw"Invalid arguments";t=typeof t=="object"?t.toString():t+"";if(t=="")return null;var r=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff;r=typeof r!="string"?r:(new Date).getFullYear()%100+parseInt(r,10);var i=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,s=(n?n.dayNames:null)||this._defaults.dayNames,o=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,u=(n?n.monthNames:null)||this._defaults.monthNames,a=-1,f=-1,l=-1,c=-1,h=!1,p=function(t){var n=y+1<e.length&&e.charAt(y+1)==t;return n&&y++,n},d=function(e){var n=p(e),r=e=="@"?14:e=="!"?20:e=="y"&&n?4:e=="o"?3:2,i=new RegExp("^\\d{1,"+r+"}"),s=t.substring(g).match(i);if(!s)throw"Missing number at position "+g;return g+=s[0].length,parseInt(s[0],10)},v=function(e,n,r){var i=$.map(p(e)?r:n,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)}),s=-1;$.each(i,function(e,n){var r=n[1];if(t.substr(g,r.length).toLowerCase()==r.toLowerCase())return s=n[0],g+=r.length,!1});if(s!=-1)return s+1;throw"Unknown name at position "+g},m=function(){if(t.charAt(g)!=e.charAt(y))throw"Unexpected literal at position "+g;g++},g=0;for(var y=0;y<e.length;y++)if(h)e.charAt(y)=="'"&&!p("'")?h=!1:m();else switch(e.charAt(y)){case"d":l=d("d");break;case"D":v("D",i,s);break;case"o":c=d("o");break;case"m":f=d("m");break;case"M":f=v("M",o,u);break;case"y":a=d("y");break;case"@":var b=new Date(d("@"));a=b.getFullYear(),f=b.getMonth()+1,l=b.getDate();break;case"!":var b=new Date((d("!")-this._ticksTo1970)/1e4);a=b.getFullYear(),f=b.getMonth()+1,l=b.getDate();break;case"'":p("'")?m():h=!0;break;default:m()}if(g<t.length){var w=t.substr(g);if(!/^\s+/.test(w))throw"Extra/unparsed characters found in date: "+w}a==-1?a=(new Date).getFullYear():a<100&&(a+=(new Date).getFullYear()-(new Date).getFullYear()%100+(a<=r?0:-100));if(c>-1){f=1,l=c;do{var E=this._getDaysInMonth(a,f-1);if(l<=E)break;f++,l-=E}while(!0)}var b=this._daylightSavingAdjust(new Date(a,f-1,l));if(b.getFullYear()!=a||b.getMonth()+1!=f||b.getDate()!=l)throw"Invalid date";return b},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(e,t,n){if(!t)return"";var r=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,i=(n?n.dayNames:null)||this._defaults.dayNames,s=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,o=(n?n.monthNames:null)||this._defaults.monthNames,u=function(t){var n=h+1<e.length&&e.charAt(h+1)==t;return n&&h++,n},a=function(e,t,n){var r=""+t;if(u(e))while(r.length<n)r="0"+r;return r},f=function(e,t,n,r){return u(e)?r[t]:n[t]},l="",c=!1;if(t)for(var h=0;h<e.length;h++)if(c)e.charAt(h)=="'"&&!u("'")?c=!1:l+=e.charAt(h);else switch(e.charAt(h)){case"d":l+=a("d",t.getDate(),2);break;case"D":l+=f("D",t.getDay(),r,i);break;case"o":l+=a("o",Math.round(((new Date(t.getFullYear(),t.getMonth(),t.getDate())).getTime()-(new Date(t.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":l+=a("m",t.getMonth()+1,2);break;case"M":l+=f("M",t.getMonth(),s,o);break;case"y":l+=u("y")?t.getFullYear():(t.getYear()%100<10?"0":"")+t.getYear()%100;break;case"@":l+=t.getTime();break;case"!":l+=t.getTime()*1e4+this._ticksTo1970;break;case"'":u("'")?l+="'":c=!0;break;default:l+=e.charAt(h)}return l},_possibleChars:function(e){var t="",n=!1,r=function(t){var n=i+1<e.length&&e.charAt(i+1)==t;return n&&i++,n};for(var i=0;i<e.length;i++)if(n)e.charAt(i)=="'"&&!r("'")?n=!1:t+=e.charAt(i);else switch(e.charAt(i)){case"d":case"m":case"y":case"@":t+="0123456789";break;case"D":case"M":return null;case"'":r("'")?t+="'":n=!0;break;default:t+=e.charAt(i)}return t},_get:function(e,t){return e.settings[t]!==undefined?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()==e.lastVal)return;var n=this._get(e,"dateFormat"),r=e.lastVal=e.input?e.input.val():null,i,s;i=s=this._getDefaultDate(e);var o=this._getFormatConfig(e);try{i=this.parseDate(n,r,o)||s}catch(u){this.log(u),r=t?"":r}e.selectedDay=i.getDate(),e.drawMonth=e.selectedMonth=i.getMonth(),e.drawYear=e.selectedYear=i.getFullYear(),e.currentDay=r?i.getDate():0,e.currentMonth=r?i.getMonth():0,e.currentYear=r?i.getFullYear():0,this._adjustInstDate(e)},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(e,t,n){var r=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},i=function(t){try{return $.datepicker.parseDate($.datepicker._get(e,"dateFormat"),t,$.datepicker._getFormatConfig(e))}catch(n){}var r=(t.toLowerCase().match(/^c/)?$.datepicker._getDate(e):null)||new Date,i=r.getFullYear(),s=r.getMonth(),o=r.getDate(),u=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,a=u.exec(t);while(a){switch(a[2]||"d"){case"d":case"D":o+=parseInt(a[1],10);break;case"w":case"W":o+=parseInt(a[1],10)*7;break;case"m":case"M":s+=parseInt(a[1],10),o=Math.min(o,$.datepicker._getDaysInMonth(i,s));break;case"y":case"Y":i+=parseInt(a[1],10),o=Math.min(o,$.datepicker._getDaysInMonth(i,s))}a=u.exec(t)}return new Date(i,s,o)},s=t==null||t===""?n:typeof t=="string"?i(t):typeof t=="number"?isNaN(t)?n:r(t):new Date(t.getTime());return s=s&&s.toString()=="Invalid Date"?n:s,s&&(s.setHours(0),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0)),this._daylightSavingAdjust(s)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,n){var r=!t,i=e.selectedMonth,s=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),(i!=e.selectedMonth||s!=e.selectedYear)&&!n&&this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(r?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&e.input.val()==""?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(e){var t=this._get(e,"stepMonths"),n="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(n,-t,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(n,+t,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(n)},selectDay:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectDay(n,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(n,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(n,this,"Y"),!1}};$(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t=new Date;t=this._daylightSavingAdjust(new Date(t.getFullYear(),t.getMonth(),t.getDate()));var n=this._get(e,"isRTL"),r=this._get(e,"showButtonPanel"),i=this._get(e,"hideIfNoPrevNext"),s=this._get(e,"navigationAsDateFormat"),o=this._getNumberOfMonths(e),u=this._get(e,"showCurrentAtPos"),a=this._get(e,"stepMonths"),f=o[0]!=1||o[1]!=1,l=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),c=this._getMinMaxDate(e,"min"),h=this._getMinMaxDate(e,"max"),p=e.drawMonth-u,d=e.drawYear;p<0&&(p+=12,d--);if(h){var v=this._daylightSavingAdjust(new Date(h.getFullYear(),h.getMonth()-o[0]*o[1]+1,h.getDate()));v=c&&v<c?c:v;while(this._daylightSavingAdjust(new Date(d,p,1))>v)p--,p<0&&(p=11,d--)}e.drawMonth=p,e.drawYear=d;var m=this._get(e,"prevText");m=s?this.formatDate(m,this._daylightSavingAdjust(new Date(d,p-a,1)),this._getFormatConfig(e)):m;var g=this._canAdjustMonth(e,-1,d,p)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+m+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"e":"w")+'">'+m+"</span></a>":i?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+m+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"e":"w")+'">'+m+"</span></a>",y=this._get(e,"nextText");y=s?this.formatDate(y,this._daylightSavingAdjust(new Date(d,p+a,1)),this._getFormatConfig(e)):y;var b=this._canAdjustMonth(e,1,d,p)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+y+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"w":"e")+'">'+y+"</span></a>":i?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+y+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"w":"e")+'">'+y+"</span></a>",w=this._get(e,"currentText"),E=this._get(e,"gotoCurrent")&&e.currentDay?l:t;w=s?this.formatDate(w,E,this._getFormatConfig(e)):w;var S=e.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(e,"closeText")+"</button>",x=r?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(n?S:"")+(this._isInRange(e,E)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+w+"</button>":"")+(n?"":S)+"</div>":"",T=parseInt(this._get(e,"firstDay"),10);T=isNaN(T)?0:T;var N=this._get(e,"showWeek"),C=this._get(e,"dayNames"),k=this._get(e,"dayNamesShort"),L=this._get(e,"dayNamesMin"),A=this._get(e,"monthNames"),O=this._get(e,"monthNamesShort"),M=this._get(e,"beforeShowDay"),_=this._get(e,"showOtherMonths"),D=this._get(e,"selectOtherMonths"),P=this._get(e,"calculateWeek")||this.iso8601Week,H=this._getDefaultDate(e),B="";for(var j=0;j<o[0];j++){var F="";this.maxRows=4;for(var I=0;I<o[1];I++){var q=this._daylightSavingAdjust(new Date(d,p,e.selectedDay)),R=" ui-corner-all",U="";if(f){U+='<div class="ui-datepicker-group';if(o[1]>1)switch(I){case 0:U+=" ui-datepicker-group-first",R=" ui-corner-"+(n?"right":"left");break;case o[1]-1:U+=" ui-datepicker-group-last",R=" ui-corner-"+(n?"left":"right");break;default:U+=" ui-datepicker-group-middle",R=""}U+='">'}U+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+R+'">'+(/all|left/.test(R)&&j==0?n?b:g:"")+(/all|right/.test(R)&&j==0?n?g:b:"")+this._generateMonthYearHeader(e,p,d,c,h,j>0||I>0,A,O)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var z=N?'<th class="ui-datepicker-week-col">'+this._get(e,"weekHeader")+"</th>":"";for(var W=0;W<7;W++){var X=(W+T)%7;z+="<th"+((W+T+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+C[X]+'">'+L[X]+"</span></th>"}U+=z+"</tr></thead><tbody>";var V=this._getDaysInMonth(d,p);d==e.selectedYear&&p==e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,V));var J=(this._getFirstDayOfMonth(d,p)-T+7)%7,K=Math.ceil((J+V)/7),Q=f?this.maxRows>K?this.maxRows:K:K;this.maxRows=Q;var G=this._daylightSavingAdjust(new Date(d,p,1-J));for(var Y=0;Y<Q;Y++){U+="<tr>";var Z=N?'<td class="ui-datepicker-week-col">'+this._get(e,"calculateWeek")(G)+"</td>":"";for(var W=0;W<7;W++){var et=M?M.apply(e.input?e.input[0]:null,[G]):[!0,""],tt=G.getMonth()!=p,nt=tt&&!D||!et[0]||c&&G<c||h&&G>h;Z+='<td class="'+((W+T+6)%7>=5?" ui-datepicker-week-end":"")+(tt?" ui-datepicker-other-month":"")+(G.getTime()==q.getTime()&&p==e.selectedMonth&&e._keyEvent||H.getTime()==G.getTime()&&H.getTime()==q.getTime()?" "+this._dayOverClass:"")+(nt?" "+this._unselectableClass+" ui-state-disabled":"")+(tt&&!_?"":" "+et[1]+(G.getTime()==l.getTime()?" "+this._currentClass:"")+(G.getTime()==t.getTime()?" ui-datepicker-today":""))+'"'+((!tt||_)&&et[2]?' title="'+et[2]+'"':"")+(nt?"":' data-handler="selectDay" data-event="click" data-month="'+G.getMonth()+'" data-year="'+G.getFullYear()+'"')+">"+(tt&&!_?"&#xa0;":nt?'<span class="ui-state-default">'+G.getDate()+"</span>":'<a class="ui-state-default'+(G.getTime()==t.getTime()?" ui-state-highlight":"")+(G.getTime()==l.getTime()?" ui-state-active":"")+(tt?" ui-priority-secondary":"")+'" href="#">'+G.getDate()+"</a>")+"</td>",G.setDate(G.getDate()+1),G=this._daylightSavingAdjust(G)}U+=Z+"</tr>"}p++,p>11&&(p=0,d++),U+="</tbody></table>"+(f?"</div>"+(o[0]>0&&I==o[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),F+=U}B+=F}return B+=x+($.browser.msie&&parseInt($.browser.version,10)<7&&!e.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),e._keyEvent=!1,B},_generateMonthYearHeader:function(e,t,n,r,i,s,o,u){var a=this._get(e,"changeMonth"),f=this._get(e,"changeYear"),l=this._get(e,"showMonthAfterYear"),c='<div class="ui-datepicker-title">',h="";if(s||!a)h+='<span class="ui-datepicker-month">'+o[t]+"</span>";else{var p=r&&r.getFullYear()==n,d=i&&i.getFullYear()==n;h+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var v=0;v<12;v++)(!p||v>=r.getMonth())&&(!d||v<=i.getMonth())&&(h+='<option value="'+v+'"'+(v==t?' selected="selected"':"")+">"+u[v]+"</option>");h+="</select>"}l||(c+=h+(s||!a||!f?"&#xa0;":""));if(!e.yearshtml){e.yearshtml="";if(s||!f)c+='<span class="ui-datepicker-year">'+n+"</span>";else{var m=this._get(e,"yearRange").split(":"),g=(new Date).getFullYear(),y=function(e){var t=e.match(/c[+-].*/)?n+parseInt(e.substring(1),10):e.match(/[+-].*/)?g+parseInt(e,10):parseInt(e,10);return isNaN(t)?g:t},b=y(m[0]),w=Math.max(b,y(m[1]||""));b=r?Math.max(b,r.getFullYear()):b,w=i?Math.min(w,i.getFullYear()):w,e.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';for(;b<=w;b++)e.yearshtml+='<option value="'+b+'"'+(b==n?' selected="selected"':"")+">"+b+"</option>";e.yearshtml+="</select>",c+=e.yearshtml,e.yearshtml=null}}return c+=this._get(e,"yearSuffix"),l&&(c+=(s||!a||!f?"&#xa0;":"")+h),c+="</div>",c},_adjustInstDate:function(e,t,n){var r=e.drawYear+(n=="Y"?t:0),i=e.drawMonth+(n=="M"?t:0),s=Math.min(e.selectedDay,this._getDaysInMonth(r,i))+(n=="D"?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(r,i,s)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),(n=="M"||n=="Y")&&this._notifyChange(e)},_restrictMinMax:function(e,t){var n=this._getMinMaxDate(e,"min"),r=this._getMinMaxDate(e,"max"),i=n&&t<n?n:t;return i=r&&i>r?r:i,i},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return t==null?[1,1]:typeof t=="number"?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return(new Date(e,t,1)).getDay()},_canAdjustMonth:function(e,t,n,r){var i=this._getNumberOfMonths(e),s=this._daylightSavingAdjust(new Date(n,r+(t<0?t:i[0]*i[1]),1));return t<0&&s.setDate(this._getDaysInMonth(s.getFullYear(),s.getMonth())),this._isInRange(e,s)},_isInRange:function(e,t){var n=this._getMinMaxDate(e,"min"),r=this._getMinMaxDate(e,"max");return(!n||t.getTime()>=n.getTime())&&(!r||t.getTime()<=r.getTime())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t=typeof t!="string"?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,n,r){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var i=t?typeof t=="object"?t:this._daylightSavingAdjust(new Date(r,n,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),i,this._getFormatConfig(e))}}),$.fn.datepicker=function(e){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv),$.datepicker.initialized=!0);var t=Array.prototype.slice.call(arguments,1);return typeof e!="string"||e!="isDisabled"&&e!="getDate"&&e!="widget"?e=="option"&&arguments.length==2&&typeof arguments[1]=="string"?$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this[0]].concat(t)):this.each(function(){typeof e=="string"?$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this].concat(t)):$.datepicker._attachDatepicker(this,e)}):$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this[0]].concat(t))},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.9.0",window["DP_jQuery_"+dpuuid]=$})(jQuery);


// /*! jQuery UI - v1.9.0 - 2012-10-08
// * http://jqueryui.com
// * Includes: jquery.ui.datepicker.js
// * Copyright 2012 jQuery Foundation and other contributors; Licensed MIT */
// (function($,undefined){function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function bindHover(e){var t="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(t,"mouseout",function(){$(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!=-1&&$(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!=-1&&$(this).removeClass("ui-datepicker-next-hover")}).delegate(t,"mouseover",function(){$.datepicker._isDisabledDatepicker(instActive.inline?e.parent()[0]:instActive.input[0])||($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),$(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!=-1&&$(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!=-1&&$(this).addClass("ui-datepicker-next-hover"))})}function extendRemove(e,t){$.extend(e,t);for(var n in t)if(t[n]==null||t[n]==undefined)e[n]=t[n];return e}$.extend($.ui,{datepicker:{version:"1.9.0"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return extendRemove(this._defaults,e||{}),this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline=nodeName=="div"||nodeName=="span";target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),nodeName=="input"?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(e,t){var n=e[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:t,dpDiv:t?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(e,t){var n=$(e);t.append=$([]),t.trigger=$([]);if(n.hasClass(this.markerClassName))return;this._attachments(n,t),n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(e,n,r){t.settings[n]=r}).bind("getData.datepicker",function(e,n){return this._get(t,n)}),this._autoSize(t),$.data(e,PROP_NAME,t),t.settings.disabled&&this._disableDatepicker(e)},_attachments:function(e,t){var n=this._get(t,"appendText"),r=this._get(t,"isRTL");t.append&&t.append.remove(),n&&(t.append=$('<span class="'+this._appendClass+'">'+n+"</span>"),e[r?"before":"after"](t.append)),e.unbind("focus",this._showDatepicker),t.trigger&&t.trigger.remove();var i=this._get(t,"showOn");(i=="focus"||i=="both")&&e.focus(this._showDatepicker);if(i=="button"||i=="both"){var s=this._get(t,"buttonText"),o=this._get(t,"buttonImage");t.trigger=$(this._get(t,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:o,alt:s,title:s}):$('<button type="button"></button>').addClass(this._triggerClass).html(o==""?s:$("<img/>").attr({src:o,alt:s,title:s}))),e[r?"before":"after"](t.trigger),t.trigger.click(function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput==e[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=e[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(e[0])):$.datepicker._showDatepicker(e[0]),!1})}},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t=new Date(2009,11,20),n=this._get(e,"dateFormat");if(n.match(/[DM]/)){var r=function(e){var t=0,n=0;for(var r=0;r<e.length;r++)e[r].length>t&&(t=e[r].length,n=r);return n};t.setMonth(r(this._get(e,n.match(/MM/)?"monthNames":"monthNamesShort"))),t.setDate(r(this._get(e,n.match(/DD/)?"dayNames":"dayNamesShort"))+20-t.getDay())}e.input.attr("size",this._formatDate(e,t).length)}},_inlineDatepicker:function(e,t){var n=$(e);if(n.hasClass(this.markerClassName))return;n.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker",function(e,n,r){t.settings[n]=r}).bind("getData.datepicker",function(e,n){return this._get(t,n)}),$.data(e,PROP_NAME,t),this._setDate(t,this._getDefaultDate(t),!0),this._updateDatepicker(t),this._updateAlternate(t),t.settings.disabled&&this._disableDatepicker(e),t.dpDiv.css("display","block")},_dialogDatepicker:function(e,t,n,r,i){var s=this._dialogInst;if(!s){this.uuid+=1;var o="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+o+'" style="position: absolute; top: -100px; width: 0px;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),s=this._dialogInst=this._newInst(this._dialogInput,!1),s.settings={},$.data(this._dialogInput[0],PROP_NAME,s)}extendRemove(s.settings,r||{}),t=t&&t.constructor==Date?this._formatDate(s,t):t,this._dialogInput.val(t),this._pos=i?i.length?i:[i.pageX,i.pageY]:null;if(!this._pos){var u=document.documentElement.clientWidth,a=document.documentElement.clientHeight,f=document.documentElement.scrollLeft||document.body.scrollLeft,l=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[u/2-100+f,a/2-150+l]}return this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),s.settings.onSelect=n,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,s),this},_destroyDatepicker:function(e){var t=$(e),n=$.data(e,PROP_NAME);if(!t.hasClass(this.markerClassName))return;var r=e.nodeName.toLowerCase();$.removeData(e,PROP_NAME),r=="input"?(n.append.remove(),n.trigger.remove(),t.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(r=="div"||r=="span")&&t.removeClass(this.markerClassName).empty()},_enableDatepicker:function(e){var t=$(e),n=$.data(e,PROP_NAME);if(!t.hasClass(this.markerClassName))return;var r=e.nodeName.toLowerCase();if(r=="input")e.disabled=!1,n.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(r=="div"||r=="span"){var i=t.children("."+this._inlineClass);i.children().removeClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)}this._disabledInputs=$.map(this._disabledInputs,function(t){return t==e?null:t})},_disableDatepicker:function(e){var t=$(e),n=$.data(e,PROP_NAME);if(!t.hasClass(this.markerClassName))return;var r=e.nodeName.toLowerCase();if(r=="input")e.disabled=!0,n.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(r=="div"||r=="span"){var i=t.children("."+this._inlineClass);i.children().addClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)}this._disabledInputs=$.map(this._disabledInputs,function(t){return t==e?null:t}),this._disabledInputs[this._disabledInputs.length]=e},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;t<this._disabledInputs.length;t++)if(this._disabledInputs[t]==e)return!0;return!1},_getInst:function(e){try{return $.data(e,PROP_NAME)}catch(t){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,t,n){var r=this._getInst(e);if(arguments.length==2&&typeof t=="string")return t=="defaults"?$.extend({},$.datepicker._defaults):r?t=="all"?$.extend({},r.settings):this._get(r,t):null;var i=t||{};typeof t=="string"&&(i={},i[t]=n);if(r){this._curInst==r&&this._hideDatepicker();var s=this._getDateDatepicker(e,!0),o=this._getMinMaxDate(r,"min"),u=this._getMinMaxDate(r,"max");extendRemove(r.settings,i),o!==null&&i.dateFormat!==undefined&&i.minDate===undefined&&(r.settings.minDate=this._formatDate(r,o)),u!==null&&i.dateFormat!==undefined&&i.maxDate===undefined&&(r.settings.maxDate=this._formatDate(r,u)),this._attachments($(e),r),this._autoSize(r),this._setDate(r,s),this._updateAlternate(r),this._updateDatepicker(r)}},_changeDatepicker:function(e,t,n){this._optionDatepicker(e,t,n)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var n=this._getInst(e);n&&(this._setDate(n,t),this._updateDatepicker(n),this._updateAlternate(n))},_getDateDatepicker:function(e,t){var n=this._getInst(e);return n&&!n.inline&&this._setDateFromField(n,t),n?this._getDate(n):null},_doKeyDown:function(e){var t=$.datepicker._getInst(e.target),n=!0,r=t.dpDiv.is(".ui-datepicker-rtl");t._keyEvent=!0;if($.datepicker._datepickerShowing)switch(e.keyCode){case 9:$.datepicker._hideDatepicker(),n=!1;break;case 13:var i=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",t.dpDiv);i[0]&&$.datepicker._selectDay(e.target,t.selectedMonth,t.selectedYear,i[0]);var s=$.datepicker._get(t,"onSelect");if(s){var o=$.datepicker._formatDate(t);s.apply(t.input?t.input[0]:null,[o,t])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(e.target,e.ctrlKey?-$.datepicker._get(t,"stepBigMonths"):-$.datepicker._get(t,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(e.target,e.ctrlKey?+$.datepicker._get(t,"stepBigMonths"):+$.datepicker._get(t,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&$.datepicker._clearDate(e.target),n=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&$.datepicker._gotoToday(e.target),n=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,r?1:-1,"D"),n=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&$.datepicker._adjustDate(e.target,e.ctrlKey?-$.datepicker._get(t,"stepBigMonths"):-$.datepicker._get(t,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,-7,"D"),n=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,r?-1:1,"D"),n=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&$.datepicker._adjustDate(e.target,e.ctrlKey?+$.datepicker._get(t,"stepBigMonths"):+$.datepicker._get(t,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,7,"D"),n=e.ctrlKey||e.metaKey;break;default:n=!1}else e.keyCode==36&&e.ctrlKey?$.datepicker._showDatepicker(this):n=!1;n&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var t=$.datepicker._getInst(e.target);if($.datepicker._get(t,"constrainInput")){var n=$.datepicker._possibleChars($.datepicker._get(t,"dateFormat")),r=String.fromCharCode(e.charCode==undefined?e.keyCode:e.charCode);return e.ctrlKey||e.metaKey||r<" "||!n||n.indexOf(r)>-1}},_doKeyUp:function(e){var t=$.datepicker._getInst(e.target);if(t.input.val()!=t.lastVal)try{var n=$.datepicker.parseDate($.datepicker._get(t,"dateFormat"),t.input?t.input.val():null,$.datepicker._getFormatConfig(t));n&&($.datepicker._setDateFromField(t),$.datepicker._updateAlternate(t),$.datepicker._updateDatepicker(t))}catch(r){$.datepicker.log(r)}return!0},_showDatepicker:function(e){e=e.target||e,e.nodeName.toLowerCase()!="input"&&(e=$("input",e.parentNode)[0]);if($.datepicker._isDisabledDatepicker(e)||$.datepicker._lastInput==e)return;var t=$.datepicker._getInst(e);$.datepicker._curInst&&$.datepicker._curInst!=t&&($.datepicker._curInst.dpDiv.stop(!0,!0),t&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var n=$.datepicker._get(t,"beforeShow"),r=n?n.apply(e,[e,t]):{};if(r===!1)return;extendRemove(t.settings,r),t.lastVal=null,$.datepicker._lastInput=e,$.datepicker._setDateFromField(t),$.datepicker._inDialog&&(e.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(e),$.datepicker._pos[1]+=e.offsetHeight);var i=!1;$(e).parents().each(function(){return i|=$(this).css("position")=="fixed",!i});var s={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};$.datepicker._pos=null,t.dpDiv.empty(),t.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(t),s=$.datepicker._checkOffset(t,s,i),t.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":i?"fixed":"absolute",display:"none",left:s.left+"px",top:s.top+"px"});if(!t.inline){var o=$.datepicker._get(t,"showAnim"),u=$.datepicker._get(t,"duration"),a=function(){var e=t.dpDiv.find("iframe.ui-datepicker-cover");if(!!e.length){var n=$.datepicker._getBorders(t.dpDiv);e.css({left:-n[0],top:-n[1],width:t.dpDiv.outerWidth(),height:t.dpDiv.outerHeight()})}};t.dpDiv.zIndex($(e).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&($.effects.effect[o]||$.effects[o])?t.dpDiv.show(o,$.datepicker._get(t,"showOptions"),u,a):t.dpDiv[o||"show"](o?u:null,a),(!o||!u)&&a(),t.input.is(":visible")&&!t.input.is(":disabled")&&t.input.focus(),$.datepicker._curInst=t}},_updateDatepicker:function(e){this.maxRows=4;var t=$.datepicker._getBorders(e.dpDiv);instActive=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var n=e.dpDiv.find("iframe.ui-datepicker-cover");!n.length||n.css({left:-t[0],top:-t[1],width:e.dpDiv.outerWidth(),height:e.dpDiv.outerHeight()}),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();var r=this._getNumberOfMonths(e),i=r[1],s=17;e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),i>1&&e.dpDiv.addClass("ui-datepicker-multi-"+i).css("width",s*i+"em"),e.dpDiv[(r[0]!=1||r[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e==$.datepicker._curInst&&$.datepicker._datepickerShowing&&e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&e.input[0]!=document.activeElement&&e.input.focus();if(e.yearshtml){var o=e.yearshtml;setTimeout(function(){o===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),o=e.yearshtml=null},0)}},_getBorders:function(e){var t=function(e){return{thin:1,medium:2,thick:3}[e]||e};return[parseFloat(t(e.css("border-left-width"))),parseFloat(t(e.css("border-top-width")))]},_checkOffset:function(e,t,n){var r=e.dpDiv.outerWidth(),i=e.dpDiv.outerHeight(),s=e.input?e.input.outerWidth():0,o=e.input?e.input.outerHeight():0,u=document.documentElement.clientWidth+(n?0:$(document).scrollLeft()),a=document.documentElement.clientHeight+(n?0:$(document).scrollTop());return t.left-=this._get(e,"isRTL")?r-s:0,t.left-=n&&t.left==e.input.offset().left?$(document).scrollLeft():0,t.top-=n&&t.top==e.input.offset().top+o?$(document).scrollTop():0,t.left-=Math.min(t.left,t.left+r>u&&u>r?Math.abs(t.left+r-u):0),t.top-=Math.min(t.top,t.top+i>a&&a>i?Math.abs(i+o):0),t},_findPos:function(e){var t=this._getInst(e),n=this._get(t,"isRTL");while(e&&(e.type=="hidden"||e.nodeType!=1||$.expr.filters.hidden(e)))e=e[n?"previousSibling":"nextSibling"];var r=$(e).offset();return[r.left,r.top]},_hideDatepicker:function(e){var t=this._curInst;if(!t||e&&t!=$.data(e,PROP_NAME))return;if(this._datepickerShowing){var n=this._get(t,"showAnim"),r=this._get(t,"duration"),i=function(){$.datepicker._tidyDialog(t)};$.effects&&($.effects.effect[n]||$.effects[n])?t.dpDiv.hide(n,$.datepicker._get(t,"showOptions"),r,i):t.dpDiv[n=="slideDown"?"slideUp":n=="fadeIn"?"fadeOut":"hide"](n?r:null,i),n||i(),this._datepickerShowing=!1;var s=this._get(t,"onClose");s&&s.apply(t.input?t.input[0]:null,[t.input?t.input.val():"",t]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(!$.datepicker._curInst)return;var t=$(e.target),n=$.datepicker._getInst(t[0]);(t[0].id!=$.datepicker._mainDivId&&t.parents("#"+$.datepicker._mainDivId).length==0&&!t.hasClass($.datepicker.markerClassName)&&!t.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||t.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=n)&&$.datepicker._hideDatepicker()},_adjustDate:function(e,t,n){var r=$(e),i=this._getInst(r[0]);if(this._isDisabledDatepicker(r[0]))return;this._adjustInstDate(i,t+(n=="M"?this._get(i,"showCurrentAtPos"):0),n),this._updateDatepicker(i)},_gotoToday:function(e){var t=$(e),n=this._getInst(t[0]);if(this._get(n,"gotoCurrent")&&n.currentDay)n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear;else{var r=new Date;n.selectedDay=r.getDate(),n.drawMonth=n.selectedMonth=r.getMonth(),n.drawYear=n.selectedYear=r.getFullYear()}this._notifyChange(n),this._adjustDate(t)},_selectMonthYear:function(e,t,n){var r=$(e),i=this._getInst(r[0]);i["selected"+(n=="M"?"Month":"Year")]=i["draw"+(n=="M"?"Month":"Year")]=parseInt(t.options[t.selectedIndex].value,10),this._notifyChange(i),this._adjustDate(r)},_selectDay:function(e,t,n,r){var i=$(e);if($(r).hasClass(this._unselectableClass)||this._isDisabledDatepicker(i[0]))return;var s=this._getInst(i[0]);s.selectedDay=s.currentDay=$("a",r).html(),s.selectedMonth=s.currentMonth=t,s.selectedYear=s.currentYear=n,this._selectDate(e,this._formatDate(s,s.currentDay,s.currentMonth,s.currentYear))},_clearDate:function(e){var t=$(e),n=this._getInst(t[0]);this._selectDate(t,"")},_selectDate:function(e,t){var n=$(e),r=this._getInst(n[0]);t=t!=null?t:this._formatDate(r),r.input&&r.input.val(t),this._updateAlternate(r);var i=this._get(r,"onSelect");i?i.apply(r.input?r.input[0]:null,[t,r]):r.input&&r.input.trigger("change"),r.inline?this._updateDatepicker(r):(this._hideDatepicker(),this._lastInput=r.input[0],typeof r.input[0]!="object"&&r.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var t=this._get(e,"altField");if(t){var n=this._get(e,"altFormat")||this._get(e,"dateFormat"),r=this._getDate(e),i=this.formatDate(n,r,this._getFormatConfig(e));$(t).each(function(){$(this).val(i)})}},noWeekends:function(e){var t=e.getDay();return[t>0&&t<6,""]},iso8601Week:function(e){var t=new Date(e.getTime());t.setDate(t.getDate()+4-(t.getDay()||7));var n=t.getTime();return t.setMonth(0),t.setDate(1),Math.floor(Math.round((n-t)/864e5)/7)+1},parseDate:function(e,t,n){if(e==null||t==null)throw"Invalid arguments";t=typeof t=="object"?t.toString():t+"";if(t=="")return null;var r=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff;r=typeof r!="string"?r:(new Date).getFullYear()%100+parseInt(r,10);var i=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,s=(n?n.dayNames:null)||this._defaults.dayNames,o=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,u=(n?n.monthNames:null)||this._defaults.monthNames,a=-1,f=-1,l=-1,c=-1,h=!1,p=function(t){var n=y+1<e.length&&e.charAt(y+1)==t;return n&&y++,n},d=function(e){var n=p(e),r=e=="@"?14:e=="!"?20:e=="y"&&n?4:e=="o"?3:2,i=new RegExp("^\\d{1,"+r+"}"),s=t.substring(g).match(i);if(!s)throw"Missing number at position "+g;return g+=s[0].length,parseInt(s[0],10)},v=function(e,n,r){var i=$.map(p(e)?r:n,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)}),s=-1;$.each(i,function(e,n){var r=n[1];if(t.substr(g,r.length).toLowerCase()==r.toLowerCase())return s=n[0],g+=r.length,!1});if(s!=-1)return s+1;throw"Unknown name at position "+g},m=function(){if(t.charAt(g)!=e.charAt(y))throw"Unexpected literal at position "+g;g++},g=0;for(var y=0;y<e.length;y++)if(h)e.charAt(y)=="'"&&!p("'")?h=!1:m();else switch(e.charAt(y)){case"d":l=d("d");break;case"D":v("D",i,s);break;case"o":c=d("o");break;case"m":f=d("m");break;case"M":f=v("M",o,u);break;case"y":a=d("y");break;case"@":var b=new Date(d("@"));a=b.getFullYear(),f=b.getMonth()+1,l=b.getDate();break;case"!":var b=new Date((d("!")-this._ticksTo1970)/1e4);a=b.getFullYear(),f=b.getMonth()+1,l=b.getDate();break;case"'":p("'")?m():h=!0;break;default:m()}if(g<t.length){var w=t.substr(g);if(!/^\s+/.test(w))throw"Extra/unparsed characters found in date: "+w}a==-1?a=(new Date).getFullYear():a<100&&(a+=(new Date).getFullYear()-(new Date).getFullYear()%100+(a<=r?0:-100));if(c>-1){f=1,l=c;do{var E=this._getDaysInMonth(a,f-1);if(l<=E)break;f++,l-=E}while(!0)}var b=this._daylightSavingAdjust(new Date(a,f-1,l));if(b.getFullYear()!=a||b.getMonth()+1!=f||b.getDate()!=l)throw"Invalid date";return b},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(e,t,n){if(!t)return"";var r=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,i=(n?n.dayNames:null)||this._defaults.dayNames,s=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,o=(n?n.monthNames:null)||this._defaults.monthNames,u=function(t){var n=h+1<e.length&&e.charAt(h+1)==t;return n&&h++,n},a=function(e,t,n){var r=""+t;if(u(e))while(r.length<n)r="0"+r;return r},f=function(e,t,n,r){return u(e)?r[t]:n[t]},l="",c=!1;if(t)for(var h=0;h<e.length;h++)if(c)e.charAt(h)=="'"&&!u("'")?c=!1:l+=e.charAt(h);else switch(e.charAt(h)){case"d":l+=a("d",t.getDate(),2);break;case"D":l+=f("D",t.getDay(),r,i);break;case"o":l+=a("o",Math.round(((new Date(t.getFullYear(),t.getMonth(),t.getDate())).getTime()-(new Date(t.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":l+=a("m",t.getMonth()+1,2);break;case"M":l+=f("M",t.getMonth(),s,o);break;case"y":l+=u("y")?t.getFullYear():(t.getYear()%100<10?"0":"")+t.getYear()%100;break;case"@":l+=t.getTime();break;case"!":l+=t.getTime()*1e4+this._ticksTo1970;break;case"'":u("'")?l+="'":c=!0;break;default:l+=e.charAt(h)}return l},_possibleChars:function(e){var t="",n=!1,r=function(t){var n=i+1<e.length&&e.charAt(i+1)==t;return n&&i++,n};for(var i=0;i<e.length;i++)if(n)e.charAt(i)=="'"&&!r("'")?n=!1:t+=e.charAt(i);else switch(e.charAt(i)){case"d":case"m":case"y":case"@":t+="0123456789";break;case"D":case"M":return null;case"'":r("'")?t+="'":n=!0;break;default:t+=e.charAt(i)}return t},_get:function(e,t){return e.settings[t]!==undefined?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()==e.lastVal)return;var n=this._get(e,"dateFormat"),r=e.lastVal=e.input?e.input.val():null,i,s;i=s=this._getDefaultDate(e);var o=this._getFormatConfig(e);try{i=this.parseDate(n,r,o)||s}catch(u){this.log(u),r=t?"":r}e.selectedDay=i.getDate(),e.drawMonth=e.selectedMonth=i.getMonth(),e.drawYear=e.selectedYear=i.getFullYear(),e.currentDay=r?i.getDate():0,e.currentMonth=r?i.getMonth():0,e.currentYear=r?i.getFullYear():0,this._adjustInstDate(e)},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(e,t,n){var r=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},i=function(t){try{return $.datepicker.parseDate($.datepicker._get(e,"dateFormat"),t,$.datepicker._getFormatConfig(e))}catch(n){}var r=(t.toLowerCase().match(/^c/)?$.datepicker._getDate(e):null)||new Date,i=r.getFullYear(),s=r.getMonth(),o=r.getDate(),u=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,a=u.exec(t);while(a){switch(a[2]||"d"){case"d":case"D":o+=parseInt(a[1],10);break;case"w":case"W":o+=parseInt(a[1],10)*7;break;case"m":case"M":s+=parseInt(a[1],10),o=Math.min(o,$.datepicker._getDaysInMonth(i,s));break;case"y":case"Y":i+=parseInt(a[1],10),o=Math.min(o,$.datepicker._getDaysInMonth(i,s))}a=u.exec(t)}return new Date(i,s,o)},s=t==null||t===""?n:typeof t=="string"?i(t):typeof t=="number"?isNaN(t)?n:r(t):new Date(t.getTime());return s=s&&s.toString()=="Invalid Date"?n:s,s&&(s.setHours(0),s.setMinutes(0),s.setSeconds(0),s.setMilliseconds(0)),this._daylightSavingAdjust(s)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,n){var r=!t,i=e.selectedMonth,s=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),(i!=e.selectedMonth||s!=e.selectedYear)&&!n&&this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(r?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&e.input.val()==""?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(e){var t=this._get(e,"stepMonths"),n="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(n,-t,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(n,+t,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(n)},selectDay:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectDay(n,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(n,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(n,this,"Y"),!1}};$(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t=new Date;t=this._daylightSavingAdjust(new Date(t.getFullYear(),t.getMonth(),t.getDate()));var n=this._get(e,"isRTL"),r=this._get(e,"showButtonPanel"),i=this._get(e,"hideIfNoPrevNext"),s=this._get(e,"navigationAsDateFormat"),o=this._getNumberOfMonths(e),u=this._get(e,"showCurrentAtPos"),a=this._get(e,"stepMonths"),f=o[0]!=1||o[1]!=1,l=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),c=this._getMinMaxDate(e,"min"),h=this._getMinMaxDate(e,"max"),p=e.drawMonth-u,d=e.drawYear;p<0&&(p+=12,d--);if(h){var v=this._daylightSavingAdjust(new Date(h.getFullYear(),h.getMonth()-o[0]*o[1]+1,h.getDate()));v=c&&v<c?c:v;while(this._daylightSavingAdjust(new Date(d,p,1))>v)p--,p<0&&(p=11,d--)}e.drawMonth=p,e.drawYear=d;var m=this._get(e,"prevText");m=s?this.formatDate(m,this._daylightSavingAdjust(new Date(d,p-a,1)),this._getFormatConfig(e)):m;var g=this._canAdjustMonth(e,-1,d,p)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+m+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"e":"w")+'">'+m+"</span></a>":i?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+m+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"e":"w")+'">'+m+"</span></a>",y=this._get(e,"nextText");y=s?this.formatDate(y,this._daylightSavingAdjust(new Date(d,p+a,1)),this._getFormatConfig(e)):y;var b=this._canAdjustMonth(e,1,d,p)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+y+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"w":"e")+'">'+y+"</span></a>":i?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+y+'"><span class="ui-icon ui-icon-circle-triangle-'+(n?"w":"e")+'">'+y+"</span></a>",w=this._get(e,"currentText"),E=this._get(e,"gotoCurrent")&&e.currentDay?l:t;w=s?this.formatDate(w,E,this._getFormatConfig(e)):w;var S=e.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(e,"closeText")+"</button>",x=r?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(n?S:"")+(this._isInRange(e,E)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+w+"</button>":"")+(n?"":S)+"</div>":"",T=parseInt(this._get(e,"firstDay"),10);T=isNaN(T)?0:T;var N=this._get(e,"showWeek"),C=this._get(e,"dayNames"),k=this._get(e,"dayNamesShort"),L=this._get(e,"dayNamesMin"),A=this._get(e,"monthNames"),O=this._get(e,"monthNamesShort"),M=this._get(e,"beforeShowDay"),_=this._get(e,"showOtherMonths"),D=this._get(e,"selectOtherMonths"),P=this._get(e,"calculateWeek")||this.iso8601Week,H=this._getDefaultDate(e),B="";for(var j=0;j<o[0];j++){var F="";this.maxRows=4;for(var I=0;I<o[1];I++){var q=this._daylightSavingAdjust(new Date(d,p,e.selectedDay)),R=" ui-corner-all",U="";if(f){U+='<div class="ui-datepicker-group';if(o[1]>1)switch(I){case 0:U+=" ui-datepicker-group-first",R=" ui-corner-"+(n?"right":"left");break;case o[1]-1:U+=" ui-datepicker-group-last",R=" ui-corner-"+(n?"left":"right");break;default:U+=" ui-datepicker-group-middle",R=""}U+='">'}U+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+R+'">'+(/all|left/.test(R)&&j==0?n?b:g:"")+(/all|right/.test(R)&&j==0?n?g:b:"")+this._generateMonthYearHeader(e,p,d,c,h,j>0||I>0,A,O)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";var z=N?'<th class="ui-datepicker-week-col">'+this._get(e,"weekHeader")+"</th>":"";for(var W=0;W<7;W++){var X=(W+T)%7;z+="<th"+((W+T+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+C[X]+'">'+L[X]+"</span></th>"}U+=z+"</tr></thead><tbody>";var V=this._getDaysInMonth(d,p);d==e.selectedYear&&p==e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,V));var J=(this._getFirstDayOfMonth(d,p)-T+7)%7,K=Math.ceil((J+V)/7),Q=f?this.maxRows>K?this.maxRows:K:K;this.maxRows=Q;var G=this._daylightSavingAdjust(new Date(d,p,1-J));for(var Y=0;Y<Q;Y++){U+="<tr>";var Z=N?'<td class="ui-datepicker-week-col">'+this._get(e,"calculateWeek")(G)+"</td>":"";for(var W=0;W<7;W++){var et=M?M.apply(e.input?e.input[0]:null,[G]):[!0,""],tt=G.getMonth()!=p,nt=tt&&!D||!et[0]||c&&G<c||h&&G>h;Z+='<td class="'+((W+T+6)%7>=5?" ui-datepicker-week-end":"")+(tt?" ui-datepicker-other-month":"")+(G.getTime()==q.getTime()&&p==e.selectedMonth&&e._keyEvent||H.getTime()==G.getTime()&&H.getTime()==q.getTime()?" "+this._dayOverClass:"")+(nt?" "+this._unselectableClass+" ui-state-disabled":"")+(tt&&!_?"":" "+et[1]+(G.getTime()==l.getTime()?" "+this._currentClass:"")+(G.getTime()==t.getTime()?" ui-datepicker-today":""))+'"'+((!tt||_)&&et[2]?' title="'+et[2]+'"':"")+(nt?"":' data-handler="selectDay" data-event="click" data-month="'+G.getMonth()+'" data-year="'+G.getFullYear()+'"')+">"+(tt&&!_?"&#xa0;":nt?'<span class="ui-state-default">'+G.getDate()+"</span>":'<a class="ui-state-default'+(G.getTime()==t.getTime()?" ui-state-highlight":"")+(G.getTime()==l.getTime()?" ui-state-active":"")+(tt?" ui-priority-secondary":"")+'" href="#">'+G.getDate()+"</a>")+"</td>",G.setDate(G.getDate()+1),G=this._daylightSavingAdjust(G)}U+=Z+"</tr>"}p++,p>11&&(p=0,d++),U+="</tbody></table>"+(f?"</div>"+(o[0]>0&&I==o[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),F+=U}B+=F}return B+=x+($.browser.msie&&parseInt($.browser.version,10)<7&&!e.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),e._keyEvent=!1,B},_generateMonthYearHeader:function(e,t,n,r,i,s,o,u){var a=this._get(e,"changeMonth"),f=this._get(e,"changeYear"),l=this._get(e,"showMonthAfterYear"),c='<div class="ui-datepicker-title">',h="";if(s||!a)h+='<span class="ui-datepicker-month">'+o[t]+"</span>";else{var p=r&&r.getFullYear()==n,d=i&&i.getFullYear()==n;h+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var v=0;v<12;v++)(!p||v>=r.getMonth())&&(!d||v<=i.getMonth())&&(h+='<option value="'+v+'"'+(v==t?' selected="selected"':"")+">"+u[v]+"</option>");h+="</select>"}l||(c+=h+(s||!a||!f?"&#xa0;":""));if(!e.yearshtml){e.yearshtml="";if(s||!f)c+='<span class="ui-datepicker-year">'+n+"</span>";else{var m=this._get(e,"yearRange").split(":"),g=(new Date).getFullYear(),y=function(e){var t=e.match(/c[+-].*/)?n+parseInt(e.substring(1),10):e.match(/[+-].*/)?g+parseInt(e,10):parseInt(e,10);return isNaN(t)?g:t},b=y(m[0]),w=Math.max(b,y(m[1]||""));b=r?Math.max(b,r.getFullYear()):b,w=i?Math.min(w,i.getFullYear()):w,e.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';for(;b<=w;b++)e.yearshtml+='<option value="'+b+'"'+(b==n?' selected="selected"':"")+">"+b+"</option>";e.yearshtml+="</select>",c+=e.yearshtml,e.yearshtml=null}}return c+=this._get(e,"yearSuffix"),l&&(c+=(s||!a||!f?"&#xa0;":"")+h),c+="</div>",c},_adjustInstDate:function(e,t,n){var r=e.drawYear+(n=="Y"?t:0),i=e.drawMonth+(n=="M"?t:0),s=Math.min(e.selectedDay,this._getDaysInMonth(r,i))+(n=="D"?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(r,i,s)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),(n=="M"||n=="Y")&&this._notifyChange(e)},_restrictMinMax:function(e,t){var n=this._getMinMaxDate(e,"min"),r=this._getMinMaxDate(e,"max"),i=n&&t<n?n:t;return i=r&&i>r?r:i,i},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return t==null?[1,1]:typeof t=="number"?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return(new Date(e,t,1)).getDay()},_canAdjustMonth:function(e,t,n,r){var i=this._getNumberOfMonths(e),s=this._daylightSavingAdjust(new Date(n,r+(t<0?t:i[0]*i[1]),1));return t<0&&s.setDate(this._getDaysInMonth(s.getFullYear(),s.getMonth())),this._isInRange(e,s)},_isInRange:function(e,t){var n=this._getMinMaxDate(e,"min"),r=this._getMinMaxDate(e,"max");return(!n||t.getTime()>=n.getTime())&&(!r||t.getTime()<=r.getTime())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t=typeof t!="string"?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,n,r){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var i=t?typeof t=="object"?t:this._daylightSavingAdjust(new Date(r,n,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),i,this._getFormatConfig(e))}}),$.fn.datepicker=function(e){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv),$.datepicker.initialized=!0);var t=Array.prototype.slice.call(arguments,1);return typeof e!="string"||e!="isDisabled"&&e!="getDate"&&e!="widget"?e=="option"&&arguments.length==2&&typeof arguments[1]=="string"?$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this[0]].concat(t)):this.each(function(){typeof e=="string"?$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this].concat(t)):$.datepicker._attachDatepicker(this,e)}):$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this[0]].concat(t))},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.9.0",window["DP_jQuery_"+dpuuid]=$})(jQuery);


// /*! jQuery UI - v1.9.0 - 2012-10-17
// * http://jqueryui.com
// * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.datepicker.js
// * Copyright (c) 2012 jQuery Foundation and other contributors Licensed MIT */

// (function( $, undefined ) {

// var uuid = 0,
// 	runiqueId = /^ui-id-\d+$/;

// // prevent duplicate loading
// // this is only a problem because we proxy existing functions
// // and we don't want to double proxy them
// $.ui = $.ui || {};
// if ( $.ui.version ) {
// 	return;
// }

// $.extend( $.ui, {
// 	version: "1.9.0",

// 	keyCode: {
// 		BACKSPACE: 8,
// 		COMMA: 188,
// 		DELETE: 46,
// 		DOWN: 40,
// 		END: 35,
// 		ENTER: 13,
// 		ESCAPE: 27,
// 		HOME: 36,
// 		LEFT: 37,
// 		NUMPAD_ADD: 107,
// 		NUMPAD_DECIMAL: 110,
// 		NUMPAD_DIVIDE: 111,
// 		NUMPAD_ENTER: 108,
// 		NUMPAD_MULTIPLY: 106,
// 		NUMPAD_SUBTRACT: 109,
// 		PAGE_DOWN: 34,
// 		PAGE_UP: 33,
// 		PERIOD: 190,
// 		RIGHT: 39,
// 		SPACE: 32,
// 		TAB: 9,
// 		UP: 38
// 	}
// });

// // plugins
// $.fn.extend({
// 	_focus: $.fn.focus,
// 	focus: function( delay, fn ) {
// 		return typeof delay === "number" ?
// 			this.each(function() {
// 				var elem = this;
// 				setTimeout(function() {
// 					$( elem ).focus();
// 					if ( fn ) {
// 						fn.call( elem );
// 					}
// 				}, delay );
// 			}) :
// 			this._focus.apply( this, arguments );
// 	},

// 	scrollParent: function() {
// 		var scrollParent;
// 		if (($.browser.msie && (/(static|relative)/).test(this.css('position'))) || (/absolute/).test(this.css('position'))) {
// 			scrollParent = this.parents().filter(function() {
// 				return (/(relative|absolute|fixed)/).test($.css(this,'position')) && (/(auto|scroll)/).test($.css(this,'overflow')+$.css(this,'overflow-y')+$.css(this,'overflow-x'));
// 			}).eq(0);
// 		} else {
// 			scrollParent = this.parents().filter(function() {
// 				return (/(auto|scroll)/).test($.css(this,'overflow')+$.css(this,'overflow-y')+$.css(this,'overflow-x'));
// 			}).eq(0);
// 		}

// 		return (/fixed/).test(this.css('position')) || !scrollParent.length ? $(document) : scrollParent;
// 	},

// 	zIndex: function( zIndex ) {
// 		if ( zIndex !== undefined ) {
// 			return this.css( "zIndex", zIndex );
// 		}

// 		if ( this.length ) {
// 			var elem = $( this[ 0 ] ), position, value;
// 			while ( elem.length && elem[ 0 ] !== document ) {
// 				// Ignore z-index if position is set to a value where z-index is ignored by the browser
// 				// This makes behavior of this function consistent across browsers
// 				// WebKit always returns auto if the element is positioned
// 				position = elem.css( "position" );
// 				if ( position === "absolute" || position === "relative" || position === "fixed" ) {
// 					// IE returns 0 when zIndex is not specified
// 					// other browsers return a string
// 					// we ignore the case of nested elements with an explicit value of 0
// 					// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
// 					value = parseInt( elem.css( "zIndex" ), 10 );
// 					if ( !isNaN( value ) && value !== 0 ) {
// 						return value;
// 					}
// 				}
// 				elem = elem.parent();
// 			}
// 		}

// 		return 0;
// 	},

// 	uniqueId: function() {
// 		return this.each(function() {
// 			if ( !this.id ) {
// 				this.id = "ui-id-" + (++uuid);
// 			}
// 		});
// 	},

// 	removeUniqueId: function() {
// 		return this.each(function() {
// 			if ( runiqueId.test( this.id ) ) {
// 				$( this ).removeAttr( "id" );
// 			}
// 		});
// 	}
// });

// // support: jQuery <1.8
// if ( !$( "<a>" ).outerWidth( 1 ).jquery ) {
// 	$.each( [ "Width", "Height" ], function( i, name ) {
// 		var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
// 			type = name.toLowerCase(),
// 			orig = {
// 				innerWidth: $.fn.innerWidth,
// 				innerHeight: $.fn.innerHeight,
// 				outerWidth: $.fn.outerWidth,
// 				outerHeight: $.fn.outerHeight
// 			};

// 		function reduce( elem, size, border, margin ) {
// 			$.each( side, function() {
// 				size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
// 				if ( border ) {
// 					size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
// 				}
// 				if ( margin ) {
// 					size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
// 				}
// 			});
// 			return size;
// 		}

// 		$.fn[ "inner" + name ] = function( size ) {
// 			if ( size === undefined ) {
// 				return orig[ "inner" + name ].call( this );
// 			}

// 			return this.each(function() {
// 				$( this ).css( type, reduce( this, size ) + "px" );
// 			});
// 		};

// 		$.fn[ "outer" + name] = function( size, margin ) {
// 			if ( typeof size !== "number" ) {
// 				return orig[ "outer" + name ].call( this, size );
// 			}

// 			return this.each(function() {
// 				$( this).css( type, reduce( this, size, true, margin ) + "px" );
// 			});
// 		};
// 	});
// }

// // selectors
// function focusable( element, isTabIndexNotNaN ) {
// 	var map, mapName, img,
// 		nodeName = element.nodeName.toLowerCase();
// 	if ( "area" === nodeName ) {
// 		map = element.parentNode;
// 		mapName = map.name;
// 		if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
// 			return false;
// 		}
// 		img = $( "img[usemap=#" + mapName + "]" )[0];
// 		return !!img && visible( img );
// 	}
// 	return ( /input|select|textarea|button|object/.test( nodeName ) ?
// 		!element.disabled :
// 		"a" === nodeName ?
// 			element.href || isTabIndexNotNaN :
// 			isTabIndexNotNaN) &&
// 		// the element and all of its ancestors must be visible
// 		visible( element );
// }

// function visible( element ) {
// 	return !$( element ).parents().andSelf().filter(function() {
// 		return $.css( this, "visibility" ) === "hidden" ||
// 			$.expr.filters.hidden( this );
// 	}).length;
// }

// $.extend( $.expr[ ":" ], {
// 	data: $.expr.createPseudo ?
// 		$.expr.createPseudo(function( dataName ) {
// 			return function( elem ) {
// 				return !!$.data( elem, dataName );
// 			};
// 		}) :
// 		// support: jQuery <1.8
// 		function( elem, i, match ) {
// 			return !!$.data( elem, match[ 3 ] );
// 		},

// 	focusable: function( element ) {
// 		return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
// 	},

// 	tabbable: function( element ) {
// 		var tabIndex = $.attr( element, "tabindex" ),
// 			isTabIndexNaN = isNaN( tabIndex );
// 		return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
// 	}
// });

// // support
// $(function() {
// 	var body = document.body,
// 		div = body.appendChild( div = document.createElement( "div" ) );

// 	// access offsetHeight before setting the style to prevent a layout bug
// 	// in IE 9 which causes the element to continue to take up space even
// 	// after it is removed from the DOM (#8026)
// 	div.offsetHeight;

// 	$.extend( div.style, {
// 		minHeight: "100px",
// 		height: "auto",
// 		padding: 0,
// 		borderWidth: 0
// 	});

// 	$.support.minHeight = div.offsetHeight === 100;
// 	$.support.selectstart = "onselectstart" in div;

// 	// set display to none to avoid a layout bug in IE
// 	// http://dev.jquery.com/ticket/4014
// 	body.removeChild( div ).style.display = "none";
// });





// // deprecated

// $.fn.extend({
// 	disableSelection: function() {
// 		return this.bind( ( $.support.selectstart ? "selectstart" : "mousedown" ) +
// 			".ui-disableSelection", function( event ) {
// 				event.preventDefault();
// 			});
// 	},

// 	enableSelection: function() {
// 		return this.unbind( ".ui-disableSelection" );
// 	}
// });

// $.extend( $.ui, {
// 	// $.ui.plugin is deprecated.  Use the proxy pattern instead.
// 	plugin: {
// 		add: function( module, option, set ) {
// 			var i,
// 				proto = $.ui[ module ].prototype;
// 			for ( i in set ) {
// 				proto.plugins[ i ] = proto.plugins[ i ] || [];
// 				proto.plugins[ i ].push( [ option, set[ i ] ] );
// 			}
// 		},
// 		call: function( instance, name, args ) {
// 			var i,
// 				set = instance.plugins[ name ];
// 			if ( !set || !instance.element[ 0 ].parentNode || instance.element[ 0 ].parentNode.nodeType === 11 ) {
// 				return;
// 			}

// 			for ( i = 0; i < set.length; i++ ) {
// 				if ( instance.options[ set[ i ][ 0 ] ] ) {
// 					set[ i ][ 1 ].apply( instance.element, args );
// 				}
// 			}
// 		}
// 	},

// 	contains: $.contains,

// 	// only used by resizable
// 	hasScroll: function( el, a ) {

// 		//If overflow is hidden, the element might have extra content, but the user wants to hide it
// 		if ( $( el ).css( "overflow" ) === "hidden") {
// 			return false;
// 		}

// 		var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
// 			has = false;

// 		if ( el[ scroll ] > 0 ) {
// 			return true;
// 		}

// 		// TODO: determine which cases actually cause this to happen
// 		// if the element doesn't have the scroll set, see if it's possible to
// 		// set the scroll
// 		el[ scroll ] = 1;
// 		has = ( el[ scroll ] > 0 );
// 		el[ scroll ] = 0;
// 		return has;
// 	},

// 	// these are odd functions, fix the API or move into individual plugins
// 	isOverAxis: function( x, reference, size ) {
// 		//Determines when x coordinate is over "b" element axis
// 		return ( x > reference ) && ( x < ( reference + size ) );
// 	},
// 	isOver: function( y, x, top, left, height, width ) {
// 		//Determines when x, y coordinates is over "b" element
// 		return $.ui.isOverAxis( y, top, height ) && $.ui.isOverAxis( x, left, width );
// 	}
// });

// })( jQuery );
// (function( $, undefined ) {

// var uuid = 0,
// 	slice = Array.prototype.slice,
// 	_cleanData = $.cleanData;
// $.cleanData = function( elems ) {
// 	for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
// 		try {
// 			$( elem ).triggerHandler( "remove" );
// 		// http://bugs.jquery.com/ticket/8235
// 		} catch( e ) {}
// 	}
// 	_cleanData( elems );
// };

// $.widget = function( name, base, prototype ) {
// 	var fullName, existingConstructor, constructor, basePrototype,
// 		namespace = name.split( "." )[ 0 ];

// 	name = name.split( "." )[ 1 ];
// 	fullName = namespace + "-" + name;

// 	if ( !prototype ) {
// 		prototype = base;
// 		base = $.Widget;
// 	}

// 	// create selector for plugin
// 	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
// 		return !!$.data( elem, fullName );
// 	};

// 	$[ namespace ] = $[ namespace ] || {};
// 	existingConstructor = $[ namespace ][ name ];
// 	constructor = $[ namespace ][ name ] = function( options, element ) {
// 		// allow instantiation without "new" keyword
// 		if ( !this._createWidget ) {
// 			return new constructor( options, element );
// 		}

// 		// allow instantiation without initializing for simple inheritance
// 		// must use "new" keyword (the code above always passes args)
// 		if ( arguments.length ) {
// 			this._createWidget( options, element );
// 		}
// 	};
// 	// extend with the existing constructor to carry over any static properties
// 	$.extend( constructor, existingConstructor, {
// 		version: prototype.version,
// 		// copy the object used to create the prototype in case we need to
// 		// redefine the widget later
// 		_proto: $.extend( {}, prototype ),
// 		// track widgets that inherit from this widget in case this widget is
// 		// redefined after a widget inherits from it
// 		_childConstructors: []
// 	});

// 	basePrototype = new base();
// 	// we need to make the options hash a property directly on the new instance
// 	// otherwise we'll modify the options hash on the prototype that we're
// 	// inheriting from
// 	basePrototype.options = $.widget.extend( {}, basePrototype.options );
// 	$.each( prototype, function( prop, value ) {
// 		if ( $.isFunction( value ) ) {
// 			prototype[ prop ] = (function() {
// 				var _super = function() {
// 						return base.prototype[ prop ].apply( this, arguments );
// 					},
// 					_superApply = function( args ) {
// 						return base.prototype[ prop ].apply( this, args );
// 					};
// 				return function() {
// 					var __super = this._super,
// 						__superApply = this._superApply,
// 						returnValue;

// 					this._super = _super;
// 					this._superApply = _superApply;

// 					returnValue = value.apply( this, arguments );

// 					this._super = __super;
// 					this._superApply = __superApply;

// 					return returnValue;
// 				};
// 			})();
// 		}
// 	});
// 	constructor.prototype = $.widget.extend( basePrototype, {
// 		// TODO: remove support for widgetEventPrefix
// 		// always use the name + a colon as the prefix, e.g., draggable:start
// 		// don't prefix for widgets that aren't DOM-based
// 		widgetEventPrefix: name
// 	}, prototype, {
// 		constructor: constructor,
// 		namespace: namespace,
// 		widgetName: name,
// 		// TODO remove widgetBaseClass, see #8155
// 		widgetBaseClass: fullName,
// 		widgetFullName: fullName
// 	});

// 	// If this widget is being redefined then we need to find all widgets that
// 	// are inheriting from it and redefine all of them so that they inherit from
// 	// the new version of this widget. We're essentially trying to replace one
// 	// level in the prototype chain.
// 	if ( existingConstructor ) {
// 		$.each( existingConstructor._childConstructors, function( i, child ) {
// 			var childPrototype = child.prototype;

// 			// redefine the child widget using the same prototype that was
// 			// originally used, but inherit from the new version of the base
// 			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
// 		});
// 		// remove the list of existing child constructors from the old constructor
// 		// so the old child constructors can be garbage collected
// 		delete existingConstructor._childConstructors;
// 	} else {
// 		base._childConstructors.push( constructor );
// 	}

// 	$.widget.bridge( name, constructor );
// };

// $.widget.extend = function( target ) {
// 	var input = slice.call( arguments, 1 ),
// 		inputIndex = 0,
// 		inputLength = input.length,
// 		key,
// 		value;
// 	for ( ; inputIndex < inputLength; inputIndex++ ) {
// 		for ( key in input[ inputIndex ] ) {
// 			value = input[ inputIndex ][ key ];
// 			if (input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
// 				target[ key ] = $.isPlainObject( value ) ? $.widget.extend( {}, target[ key ], value ) : value;
// 			}
// 		}
// 	}
// 	return target;
// };

// $.widget.bridge = function( name, object ) {
// 	var fullName = object.prototype.widgetFullName;
// 	$.fn[ name ] = function( options ) {
// 		var isMethodCall = typeof options === "string",
// 			args = slice.call( arguments, 1 ),
// 			returnValue = this;

// 		// allow multiple hashes to be passed on init
// 		options = !isMethodCall && args.length ?
// 			$.widget.extend.apply( null, [ options ].concat(args) ) :
// 			options;

// 		if ( isMethodCall ) {
// 			this.each(function() {
// 				var methodValue,
// 					instance = $.data( this, fullName );
// 				if ( !instance ) {
// 					return $.error( "cannot call methods on " + name + " prior to initialization; " +
// 						"attempted to call method '" + options + "'" );
// 				}
// 				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
// 					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
// 				}
// 				methodValue = instance[ options ].apply( instance, args );
// 				if ( methodValue !== instance && methodValue !== undefined ) {
// 					returnValue = methodValue && methodValue.jquery ?
// 						returnValue.pushStack( methodValue.get() ) :
// 						methodValue;
// 					return false;
// 				}
// 			});
// 		} else {
// 			this.each(function() {
// 				var instance = $.data( this, fullName );
// 				if ( instance ) {
// 					instance.option( options || {} )._init();
// 				} else {
// 					new object( options, this );
// 				}
// 			});
// 		}

// 		return returnValue;
// 	};
// };

// $.Widget = function( options, element ) {};
// $.Widget._childConstructors = [];

// $.Widget.prototype = {
// 	widgetName: "widget",
// 	widgetEventPrefix: "",
// 	defaultElement: "<div>",
// 	options: {
// 		disabled: false,

// 		// callbacks
// 		create: null
// 	},
// 	_createWidget: function( options, element ) {
// 		element = $( element || this.defaultElement || this )[ 0 ];
// 		this.element = $( element );
// 		this.uuid = uuid++;
// 		this.eventNamespace = "." + this.widgetName + this.uuid;
// 		this.options = $.widget.extend( {},
// 			this.options,
// 			this._getCreateOptions(),
// 			options );

// 		this.bindings = $();
// 		this.hoverable = $();
// 		this.focusable = $();

// 		if ( element !== this ) {
// 			// 1.9 BC for #7810
// 			// TODO remove dual storage
// 			$.data( element, this.widgetName, this );
// 			$.data( element, this.widgetFullName, this );
// 			this._on({ remove: "destroy" });
// 			this.document = $( element.style ?
// 				// element within the document
// 				element.ownerDocument :
// 				// element is window or document
// 				element.document || element );
// 			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
// 		}

// 		this._create();
// 		this._trigger( "create", null, this._getCreateEventData() );
// 		this._init();
// 	},
// 	_getCreateOptions: $.noop,
// 	_getCreateEventData: $.noop,
// 	_create: $.noop,
// 	_init: $.noop,

// 	destroy: function() {
// 		this._destroy();
// 		// we can probably remove the unbind calls in 2.0
// 		// all event bindings should go through this._on()
// 		this.element
// 			.unbind( this.eventNamespace )
// 			// 1.9 BC for #7810
// 			// TODO remove dual storage
// 			.removeData( this.widgetName )
// 			.removeData( this.widgetFullName )
// 			// support: jquery <1.6.3
// 			// http://bugs.jquery.com/ticket/9413
// 			.removeData( $.camelCase( this.widgetFullName ) );
// 		this.widget()
// 			.unbind( this.eventNamespace )
// 			.removeAttr( "aria-disabled" )
// 			.removeClass(
// 				this.widgetFullName + "-disabled " +
// 				"ui-state-disabled" );

// 		// clean up events and states
// 		this.bindings.unbind( this.eventNamespace );
// 		this.hoverable.removeClass( "ui-state-hover" );
// 		this.focusable.removeClass( "ui-state-focus" );
// 	},
// 	_destroy: $.noop,

// 	widget: function() {
// 		return this.element;
// 	},

// 	option: function( key, value ) {
// 		var options = key,
// 			parts,
// 			curOption,
// 			i;

// 		if ( arguments.length === 0 ) {
// 			// don't return a reference to the internal hash
// 			return $.widget.extend( {}, this.options );
// 		}

// 		if ( typeof key === "string" ) {
// 			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
// 			options = {};
// 			parts = key.split( "." );
// 			key = parts.shift();
// 			if ( parts.length ) {
// 				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
// 				for ( i = 0; i < parts.length - 1; i++ ) {
// 					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
// 					curOption = curOption[ parts[ i ] ];
// 				}
// 				key = parts.pop();
// 				if ( value === undefined ) {
// 					return curOption[ key ] === undefined ? null : curOption[ key ];
// 				}
// 				curOption[ key ] = value;
// 			} else {
// 				if ( value === undefined ) {
// 					return this.options[ key ] === undefined ? null : this.options[ key ];
// 				}
// 				options[ key ] = value;
// 			}
// 		}

// 		this._setOptions( options );

// 		return this;
// 	},
// 	_setOptions: function( options ) {
// 		var key;

// 		for ( key in options ) {
// 			this._setOption( key, options[ key ] );
// 		}

// 		return this;
// 	},
// 	_setOption: function( key, value ) {
// 		this.options[ key ] = value;

// 		if ( key === "disabled" ) {
// 			this.widget()
// 				.toggleClass( this.widgetFullName + "-disabled ui-state-disabled", !!value )
// 				.attr( "aria-disabled", value );
// 			this.hoverable.removeClass( "ui-state-hover" );
// 			this.focusable.removeClass( "ui-state-focus" );
// 		}

// 		return this;
// 	},

// 	enable: function() {
// 		return this._setOption( "disabled", false );
// 	},
// 	disable: function() {
// 		return this._setOption( "disabled", true );
// 	},

// 	_on: function( element, handlers ) {
// 		// no element argument, shuffle and use this.element
// 		if ( !handlers ) {
// 			handlers = element;
// 			element = this.element;
// 		} else {
// 			// accept selectors, DOM elements
// 			element = $( element );
// 			this.bindings = this.bindings.add( element );
// 		}

// 		var instance = this;
// 		$.each( handlers, function( event, handler ) {
// 			function handlerProxy() {
// 				// allow widgets to customize the disabled handling
// 				// - disabled as an array instead of boolean
// 				// - disabled class as method for disabling individual parts
// 				if ( instance.options.disabled === true ||
// 						$( this ).hasClass( "ui-state-disabled" ) ) {
// 					return;
// 				}
// 				return ( typeof handler === "string" ? instance[ handler ] : handler )
// 					.apply( instance, arguments );
// 			}

// 			// copy the guid so direct unbinding works
// 			if ( typeof handler !== "string" ) {
// 				handlerProxy.guid = handler.guid =
// 					handler.guid || handlerProxy.guid || $.guid++;
// 			}

// 			var match = event.match( /^(\w+)\s*(.*)$/ ),
// 				eventName = match[1] + instance.eventNamespace,
// 				selector = match[2];
// 			if ( selector ) {
// 				instance.widget().delegate( selector, eventName, handlerProxy );
// 			} else {
// 				element.bind( eventName, handlerProxy );
// 			}
// 		});
// 	},

// 	_off: function( element, eventName ) {
// 		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) + this.eventNamespace;
// 		element.unbind( eventName ).undelegate( eventName );
// 	},

// 	_delay: function( handler, delay ) {
// 		function handlerProxy() {
// 			return ( typeof handler === "string" ? instance[ handler ] : handler )
// 				.apply( instance, arguments );
// 		}
// 		var instance = this;
// 		return setTimeout( handlerProxy, delay || 0 );
// 	},

// 	_hoverable: function( element ) {
// 		this.hoverable = this.hoverable.add( element );
// 		this._on( element, {
// 			mouseenter: function( event ) {
// 				$( event.currentTarget ).addClass( "ui-state-hover" );
// 			},
// 			mouseleave: function( event ) {
// 				$( event.currentTarget ).removeClass( "ui-state-hover" );
// 			}
// 		});
// 	},

// 	_focusable: function( element ) {
// 		this.focusable = this.focusable.add( element );
// 		this._on( element, {
// 			focusin: function( event ) {
// 				$( event.currentTarget ).addClass( "ui-state-focus" );
// 			},
// 			focusout: function( event ) {
// 				$( event.currentTarget ).removeClass( "ui-state-focus" );
// 			}
// 		});
// 	},

// 	_trigger: function( type, event, data ) {
// 		var prop, orig,
// 			callback = this.options[ type ];

// 		data = data || {};
// 		event = $.Event( event );
// 		event.type = ( type === this.widgetEventPrefix ?
// 			type :
// 			this.widgetEventPrefix + type ).toLowerCase();
// 		// the original event may come from any element
// 		// so we need to reset the target on the new event
// 		event.target = this.element[ 0 ];

// 		// copy original event properties over to the new event
// 		orig = event.originalEvent;
// 		if ( orig ) {
// 			for ( prop in orig ) {
// 				if ( !( prop in event ) ) {
// 					event[ prop ] = orig[ prop ];
// 				}
// 			}
// 		}

// 		this.element.trigger( event, data );
// 		return !( $.isFunction( callback ) &&
// 			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
// 			event.isDefaultPrevented() );
// 	}
// };

// $.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
// 	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
// 		if ( typeof options === "string" ) {
// 			options = { effect: options };
// 		}
// 		var hasOptions,
// 			effectName = !options ?
// 				method :
// 				options === true || typeof options === "number" ?
// 					defaultEffect :
// 					options.effect || defaultEffect;
// 		options = options || {};
// 		if ( typeof options === "number" ) {
// 			options = { duration: options };
// 		}
// 		hasOptions = !$.isEmptyObject( options );
// 		options.complete = callback;
// 		if ( options.delay ) {
// 			element.delay( options.delay );
// 		}
// 		if ( hasOptions && $.effects && ( $.effects.effect[ effectName ] || $.uiBackCompat !== false && $.effects[ effectName ] ) ) {
// 			element[ method ]( options );
// 		} else if ( effectName !== method && element[ effectName ] ) {
// 			element[ effectName ]( options.duration, options.easing, callback );
// 		} else {
// 			element.queue(function( next ) {
// 				$( this )[ method ]();
// 				if ( callback ) {
// 					callback.call( element[ 0 ] );
// 				}
// 				next();
// 			});
// 		}
// 	};
// });

// // DEPRECATED
// if ( $.uiBackCompat !== false ) {
// 	$.Widget.prototype._getCreateOptions = function() {
// 		return $.metadata && $.metadata.get( this.element[0] )[ this.widgetName ];
// 	};
// }

// })( jQuery );
// (function( $, undefined ) {

// var mouseHandled = false;
// $( document ).mouseup( function( e ) {
// 	mouseHandled = false;
// });

// $.widget("ui.mouse", {
// 	version: "1.9.0",
// 	options: {
// 		cancel: 'input,textarea,button,select,option',
// 		distance: 1,
// 		delay: 0
// 	},
// 	_mouseInit: function() {
// 		var that = this;

// 		this.element
// 			.bind('mousedown.'+this.widgetName, function(event) {
// 				return that._mouseDown(event);
// 			})
// 			.bind('click.'+this.widgetName, function(event) {
// 				if (true === $.data(event.target, that.widgetName + '.preventClickEvent')) {
// 					$.removeData(event.target, that.widgetName + '.preventClickEvent');
// 					event.stopImmediatePropagation();
// 					return false;
// 				}
// 			});

// 		this.started = false;
// 	},

// 	// TODO: make sure destroying one instance of mouse doesn't mess with
// 	// other instances of mouse
// 	_mouseDestroy: function() {
// 		this.element.unbind('.'+this.widgetName);
// 		if ( this._mouseMoveDelegate ) {
// 			$(document)
// 				.unbind('mousemove.'+this.widgetName, this._mouseMoveDelegate)
// 				.unbind('mouseup.'+this.widgetName, this._mouseUpDelegate);
// 		}
// 	},

// 	_mouseDown: function(event) {
// 		// don't let more than one widget handle mouseStart
// 		if( mouseHandled ) { return; }

// 		// we may have missed mouseup (out of window)
// 		(this._mouseStarted && this._mouseUp(event));

// 		this._mouseDownEvent = event;

// 		var that = this,
// 			btnIsLeft = (event.which === 1),
// 			// event.target.nodeName works around a bug in IE 8 with
// 			// disabled inputs (#7620)
// 			elIsCancel = (typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false);
// 		if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
// 			return true;
// 		}

// 		this.mouseDelayMet = !this.options.delay;
// 		if (!this.mouseDelayMet) {
// 			this._mouseDelayTimer = setTimeout(function() {
// 				that.mouseDelayMet = true;
// 			}, this.options.delay);
// 		}

// 		if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
// 			this._mouseStarted = (this._mouseStart(event) !== false);
// 			if (!this._mouseStarted) {
// 				event.preventDefault();
// 				return true;
// 			}
// 		}

// 		// Click event may never have fired (Gecko & Opera)
// 		if (true === $.data(event.target, this.widgetName + '.preventClickEvent')) {
// 			$.removeData(event.target, this.widgetName + '.preventClickEvent');
// 		}

// 		// these delegates are required to keep context
// 		this._mouseMoveDelegate = function(event) {
// 			return that._mouseMove(event);
// 		};
// 		this._mouseUpDelegate = function(event) {
// 			return that._mouseUp(event);
// 		};
// 		$(document)
// 			.bind('mousemove.'+this.widgetName, this._mouseMoveDelegate)
// 			.bind('mouseup.'+this.widgetName, this._mouseUpDelegate);

// 		event.preventDefault();
		
// 		mouseHandled = true;
// 		return true;
// 	},

// 	_mouseMove: function(event) {
// 		// IE mouseup check - mouseup happened when mouse was out of window
// 		if ($.browser.msie && !(document.documentMode >= 9) && !event.button) {
// 			return this._mouseUp(event);
// 		}

// 		if (this._mouseStarted) {
// 			this._mouseDrag(event);
// 			return event.preventDefault();
// 		}

// 		if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
// 			this._mouseStarted =
// 				(this._mouseStart(this._mouseDownEvent, event) !== false);
// 			(this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
// 		}

// 		return !this._mouseStarted;
// 	},

// 	_mouseUp: function(event) {
// 		$(document)
// 			.unbind('mousemove.'+this.widgetName, this._mouseMoveDelegate)
// 			.unbind('mouseup.'+this.widgetName, this._mouseUpDelegate);

// 		if (this._mouseStarted) {
// 			this._mouseStarted = false;

// 			if (event.target === this._mouseDownEvent.target) {
// 				$.data(event.target, this.widgetName + '.preventClickEvent', true);
// 			}

// 			this._mouseStop(event);
// 		}

// 		return false;
// 	},

// 	_mouseDistanceMet: function(event) {
// 		return (Math.max(
// 				Math.abs(this._mouseDownEvent.pageX - event.pageX),
// 				Math.abs(this._mouseDownEvent.pageY - event.pageY)
// 			) >= this.options.distance
// 		);
// 	},

// 	_mouseDelayMet: function(event) {
// 		return this.mouseDelayMet;
// 	},

// 	// These are placeholder methods, to be overriden by extending plugin
// 	_mouseStart: function(event) {},
// 	_mouseDrag: function(event) {},
// 	_mouseStop: function(event) {},
// 	_mouseCapture: function(event) { return true; }
// });

// })(jQuery);
// (function( $, undefined ) {

// $.ui = $.ui || {};

// var cachedScrollbarWidth,
// 	max = Math.max,
// 	abs = Math.abs,
// 	round = Math.round,
// 	rhorizontal = /left|center|right/,
// 	rvertical = /top|center|bottom/,
// 	roffset = /[\+\-]\d+%?/,
// 	rposition = /^\w+/,
// 	rpercent = /%$/,
// 	_position = $.fn.position;

// function getOffsets( offsets, width, height ) {
// 	return [
// 		parseInt( offsets[ 0 ], 10 ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
// 		parseInt( offsets[ 1 ], 10 ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
// 	];
// }
// function parseCss( element, property ) {
// 	return parseInt( $.css( element, property ), 10 ) || 0;
// }

// $.position = {
// 	scrollbarWidth: function() {
// 		if ( cachedScrollbarWidth !== undefined ) {
// 			return cachedScrollbarWidth;
// 		}
// 		var w1, w2,
// 			div = $( "<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>" ),
// 			innerDiv = div.children()[0];

// 		$( "body" ).append( div );
// 		w1 = innerDiv.offsetWidth;
// 		div.css( "overflow", "scroll" );

// 		w2 = innerDiv.offsetWidth;

// 		if ( w1 === w2 ) {
// 			w2 = div[0].clientWidth;
// 		}

// 		div.remove();

// 		return (cachedScrollbarWidth = w1 - w2);
// 	},
// 	getScrollInfo: function( within ) {
// 		var overflowX = within.isWindow ? "" : within.element.css( "overflow-x" ),
// 			overflowY = within.isWindow ? "" : within.element.css( "overflow-y" ),
// 			hasOverflowX = overflowX === "scroll" ||
// 				( overflowX === "auto" && within.width < within.element[0].scrollWidth ),
// 			hasOverflowY = overflowY === "scroll" ||
// 				( overflowY === "auto" && within.height < within.element[0].scrollHeight );
// 		return {
// 			width: hasOverflowX ? $.position.scrollbarWidth() : 0,
// 			height: hasOverflowY ? $.position.scrollbarWidth() : 0
// 		};
// 	},
// 	getWithinInfo: function( element ) {
// 		var withinElement = $( element || window ),
// 			isWindow = $.isWindow( withinElement[0] );
// 		return {
// 			element: withinElement,
// 			isWindow: isWindow,
// 			offset: withinElement.offset() || { left: 0, top: 0 },
// 			scrollLeft: withinElement.scrollLeft(),
// 			scrollTop: withinElement.scrollTop(),
// 			width: isWindow ? withinElement.width() : withinElement.outerWidth(),
// 			height: isWindow ? withinElement.height() : withinElement.outerHeight()
// 		};
// 	}
// };

// $.fn.position = function( options ) {
// 	if ( !options || !options.of ) {
// 		return _position.apply( this, arguments );
// 	}

// 	// make a copy, we don't want to modify arguments
// 	options = $.extend( {}, options );

// 	var atOffset, targetWidth, targetHeight, targetOffset, basePosition,
// 		target = $( options.of ),
// 		within = $.position.getWithinInfo( options.within ),
// 		scrollInfo = $.position.getScrollInfo( within ),
// 		targetElem = target[0],
// 		collision = ( options.collision || "flip" ).split( " " ),
// 		offsets = {};

// 	if ( targetElem.nodeType === 9 ) {
// 		targetWidth = target.width();
// 		targetHeight = target.height();
// 		targetOffset = { top: 0, left: 0 };
// 	} else if ( $.isWindow( targetElem ) ) {
// 		targetWidth = target.width();
// 		targetHeight = target.height();
// 		targetOffset = { top: target.scrollTop(), left: target.scrollLeft() };
// 	} else if ( targetElem.preventDefault ) {
// 		// force left top to allow flipping
// 		options.at = "left top";
// 		targetWidth = targetHeight = 0;
// 		targetOffset = { top: targetElem.pageY, left: targetElem.pageX };
// 	} else {
// 		targetWidth = target.outerWidth();
// 		targetHeight = target.outerHeight();
// 		targetOffset = target.offset();
// 	}
// 	// clone to reuse original targetOffset later
// 	basePosition = $.extend( {}, targetOffset );

// 	// force my and at to have valid horizontal and vertical positions
// 	// if a value is missing or invalid, it will be converted to center
// 	$.each( [ "my", "at" ], function() {
// 		var pos = ( options[ this ] || "" ).split( " " ),
// 			horizontalOffset,
// 			verticalOffset;

// 		if ( pos.length === 1) {
// 			pos = rhorizontal.test( pos[ 0 ] ) ?
// 				pos.concat( [ "center" ] ) :
// 				rvertical.test( pos[ 0 ] ) ?
// 					[ "center" ].concat( pos ) :
// 					[ "center", "center" ];
// 		}
// 		pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
// 		pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

// 		// calculate offsets
// 		horizontalOffset = roffset.exec( pos[ 0 ] );
// 		verticalOffset = roffset.exec( pos[ 1 ] );
// 		offsets[ this ] = [
// 			horizontalOffset ? horizontalOffset[ 0 ] : 0,
// 			verticalOffset ? verticalOffset[ 0 ] : 0
// 		];

// 		// reduce to just the positions without the offsets
// 		options[ this ] = [
// 			rposition.exec( pos[ 0 ] )[ 0 ],
// 			rposition.exec( pos[ 1 ] )[ 0 ]
// 		];
// 	});

// 	// normalize collision option
// 	if ( collision.length === 1 ) {
// 		collision[ 1 ] = collision[ 0 ];
// 	}

// 	if ( options.at[ 0 ] === "right" ) {
// 		basePosition.left += targetWidth;
// 	} else if ( options.at[ 0 ] === "center" ) {
// 		basePosition.left += targetWidth / 2;
// 	}

// 	if ( options.at[ 1 ] === "bottom" ) {
// 		basePosition.top += targetHeight;
// 	} else if ( options.at[ 1 ] === "center" ) {
// 		basePosition.top += targetHeight / 2;
// 	}

// 	atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
// 	basePosition.left += atOffset[ 0 ];
// 	basePosition.top += atOffset[ 1 ];

// 	return this.each(function() {
// 		var collisionPosition, using,
// 			elem = $( this ),
// 			elemWidth = elem.outerWidth(),
// 			elemHeight = elem.outerHeight(),
// 			marginLeft = parseCss( this, "marginLeft" ),
// 			marginTop = parseCss( this, "marginTop" ),
// 			collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) + scrollInfo.width,
// 			collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) + scrollInfo.height,
// 			position = $.extend( {}, basePosition ),
// 			myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

// 		if ( options.my[ 0 ] === "right" ) {
// 			position.left -= elemWidth;
// 		} else if ( options.my[ 0 ] === "center" ) {
// 			position.left -= elemWidth / 2;
// 		}

// 		if ( options.my[ 1 ] === "bottom" ) {
// 			position.top -= elemHeight;
// 		} else if ( options.my[ 1 ] === "center" ) {
// 			position.top -= elemHeight / 2;
// 		}

// 		position.left += myOffset[ 0 ];
// 		position.top += myOffset[ 1 ];

// 		// if the browser doesn't support fractions, then round for consistent results
// 		if ( !$.support.offsetFractions ) {
// 			position.left = round( position.left );
// 			position.top = round( position.top );
// 		}

// 		collisionPosition = {
// 			marginLeft: marginLeft,
// 			marginTop: marginTop
// 		};

// 		$.each( [ "left", "top" ], function( i, dir ) {
// 			if ( $.ui.position[ collision[ i ] ] ) {
// 				$.ui.position[ collision[ i ] ][ dir ]( position, {
// 					targetWidth: targetWidth,
// 					targetHeight: targetHeight,
// 					elemWidth: elemWidth,
// 					elemHeight: elemHeight,
// 					collisionPosition: collisionPosition,
// 					collisionWidth: collisionWidth,
// 					collisionHeight: collisionHeight,
// 					offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
// 					my: options.my,
// 					at: options.at,
// 					within: within,
// 					elem : elem
// 				});
// 			}
// 		});

// 		if ( $.fn.bgiframe ) {
// 			elem.bgiframe();
// 		}

// 		if ( options.using ) {
// 			// adds feedback as second argument to using callback, if present
// 			using = function( props ) {
// 				var left = targetOffset.left - position.left,
// 					right = left + targetWidth - elemWidth,
// 					top = targetOffset.top - position.top,
// 					bottom = top + targetHeight - elemHeight,
// 					feedback = {
// 						target: {
// 							element: target,
// 							left: targetOffset.left,
// 							top: targetOffset.top,
// 							width: targetWidth,
// 							height: targetHeight
// 						},
// 						element: {
// 							element: elem,
// 							left: position.left,
// 							top: position.top,
// 							width: elemWidth,
// 							height: elemHeight
// 						},
// 						horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
// 						vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
// 					};
// 				if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
// 					feedback.horizontal = "center";
// 				}
// 				if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
// 					feedback.vertical = "middle";
// 				}
// 				if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
// 					feedback.important = "horizontal";
// 				} else {
// 					feedback.important = "vertical";
// 				}
// 				options.using.call( this, props, feedback );
// 			};
// 		}

// 		elem.offset( $.extend( position, { using: using } ) );
// 	});
// };

// $.ui.position = {
// 	fit: {
// 		left: function( position, data ) {
// 			var within = data.within,
// 				withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
// 				outerWidth = within.width,
// 				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
// 				overLeft = withinOffset - collisionPosLeft,
// 				overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
// 				newOverRight;

// 			// element is wider than within
// 			if ( data.collisionWidth > outerWidth ) {
// 				// element is initially over the left side of within
// 				if ( overLeft > 0 && overRight <= 0 ) {
// 					newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
// 					position.left += overLeft - newOverRight;
// 				// element is initially over right side of within
// 				} else if ( overRight > 0 && overLeft <= 0 ) {
// 					position.left = withinOffset;
// 				// element is initially over both left and right sides of within
// 				} else {
// 					if ( overLeft > overRight ) {
// 						position.left = withinOffset + outerWidth - data.collisionWidth;
// 					} else {
// 						position.left = withinOffset;
// 					}
// 				}
// 			// too far left -> align with left edge
// 			} else if ( overLeft > 0 ) {
// 				position.left += overLeft;
// 			// too far right -> align with right edge
// 			} else if ( overRight > 0 ) {
// 				position.left -= overRight;
// 			// adjust based on position and margin
// 			} else {
// 				position.left = max( position.left - collisionPosLeft, position.left );
// 			}
// 		},
// 		top: function( position, data ) {
// 			var within = data.within,
// 				withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
// 				outerHeight = data.within.height,
// 				collisionPosTop = position.top - data.collisionPosition.marginTop,
// 				overTop = withinOffset - collisionPosTop,
// 				overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
// 				newOverBottom;

// 			// element is taller than within
// 			if ( data.collisionHeight > outerHeight ) {
// 				// element is initially over the top of within
// 				if ( overTop > 0 && overBottom <= 0 ) {
// 					newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
// 					position.top += overTop - newOverBottom;
// 				// element is initially over bottom of within
// 				} else if ( overBottom > 0 && overTop <= 0 ) {
// 					position.top = withinOffset;
// 				// element is initially over both top and bottom of within
// 				} else {
// 					if ( overTop > overBottom ) {
// 						position.top = withinOffset + outerHeight - data.collisionHeight;
// 					} else {
// 						position.top = withinOffset;
// 					}
// 				}
// 			// too far up -> align with top
// 			} else if ( overTop > 0 ) {
// 				position.top += overTop;
// 			// too far down -> align with bottom edge
// 			} else if ( overBottom > 0 ) {
// 				position.top -= overBottom;
// 			// adjust based on position and margin
// 			} else {
// 				position.top = max( position.top - collisionPosTop, position.top );
// 			}
// 		}
// 	},
// 	flip: {
// 		left: function( position, data ) {
// 			var within = data.within,
// 				withinOffset = within.offset.left + within.scrollLeft,
// 				outerWidth = within.width,
// 				offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
// 				collisionPosLeft = position.left - data.collisionPosition.marginLeft,
// 				overLeft = collisionPosLeft - offsetLeft,
// 				overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
// 				myOffset = data.my[ 0 ] === "left" ?
// 					-data.elemWidth :
// 					data.my[ 0 ] === "right" ?
// 						data.elemWidth :
// 						0,
// 				atOffset = data.at[ 0 ] === "left" ?
// 					data.targetWidth :
// 					data.at[ 0 ] === "right" ?
// 						-data.targetWidth :
// 						0,
// 				offset = -2 * data.offset[ 0 ],
// 				newOverRight,
// 				newOverLeft;

// 			if ( overLeft < 0 ) {
// 				newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
// 				if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
// 					position.left += myOffset + atOffset + offset;
// 				}
// 			}
// 			else if ( overRight > 0 ) {
// 				newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
// 				if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
// 					position.left += myOffset + atOffset + offset;
// 				}
// 			}
// 		},
// 		top: function( position, data ) {
// 			var within = data.within,
// 				withinOffset = within.offset.top + within.scrollTop,
// 				outerHeight = within.height,
// 				offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
// 				collisionPosTop = position.top - data.collisionPosition.marginTop,
// 				overTop = collisionPosTop - offsetTop,
// 				overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
// 				top = data.my[ 1 ] === "top",
// 				myOffset = top ?
// 					-data.elemHeight :
// 					data.my[ 1 ] === "bottom" ?
// 						data.elemHeight :
// 						0,
// 				atOffset = data.at[ 1 ] === "top" ?
// 					data.targetHeight :
// 					data.at[ 1 ] === "bottom" ?
// 						-data.targetHeight :
// 						0,
// 				offset = -2 * data.offset[ 1 ],
// 				newOverTop,
// 				newOverBottom;
// 			if ( overTop < 0 ) {
// 				newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
// 				if ( ( position.top + myOffset + atOffset + offset) > overTop && ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) ) {
// 					position.top += myOffset + atOffset + offset;
// 				}
// 			}
// 			else if ( overBottom > 0 ) {
// 				newOverTop = position.top -  data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
// 				if ( ( position.top + myOffset + atOffset + offset) > overBottom && ( newOverTop > 0 || abs( newOverTop ) < overBottom ) ) {
// 					position.top += myOffset + atOffset + offset;
// 				}
// 			}
// 		}
// 	},
// 	flipfit: {
// 		left: function() {
// 			$.ui.position.flip.left.apply( this, arguments );
// 			$.ui.position.fit.left.apply( this, arguments );
// 		},
// 		top: function() {
// 			$.ui.position.flip.top.apply( this, arguments );
// 			$.ui.position.fit.top.apply( this, arguments );
// 		}
// 	}
// };

// // fraction support test
// (function () {
// 	var testElement, testElementParent, testElementStyle, offsetLeft, i,
// 		body = document.getElementsByTagName( "body" )[ 0 ],
// 		div = document.createElement( "div" );

// 	//Create a "fake body" for testing based on method used in jQuery.support
// 	testElement = document.createElement( body ? "div" : "body" );
// 	testElementStyle = {
// 		visibility: "hidden",
// 		width: 0,
// 		height: 0,
// 		border: 0,
// 		margin: 0,
// 		background: "none"
// 	};
// 	if ( body ) {
// 		$.extend( testElementStyle, {
// 			position: "absolute",
// 			left: "-1000px",
// 			top: "-1000px"
// 		});
// 	}
// 	for ( i in testElementStyle ) {
// 		testElement.style[ i ] = testElementStyle[ i ];
// 	}
// 	testElement.appendChild( div );
// 	testElementParent = body || document.documentElement;
// 	testElementParent.insertBefore( testElement, testElementParent.firstChild );

// 	div.style.cssText = "position: absolute; left: 10.7432222px;";

// 	offsetLeft = $( div ).offset().left;
// 	$.support.offsetFractions = offsetLeft > 10 && offsetLeft < 11;

// 	testElement.innerHTML = "";
// 	testElementParent.removeChild( testElement );
// })();

// // DEPRECATED
// if ( $.uiBackCompat !== false ) {
// 	// offset option
// 	(function( $ ) {
// 		var _position = $.fn.position;
// 		$.fn.position = function( options ) {
// 			if ( !options || !options.offset ) {
// 				return _position.call( this, options );
// 			}
// 			var offset = options.offset.split( " " ),
// 				at = options.at.split( " " );
// 			if ( offset.length === 1 ) {
// 				offset[ 1 ] = offset[ 0 ];
// 			}
// 			if ( /^\d/.test( offset[ 0 ] ) ) {
// 				offset[ 0 ] = "+" + offset[ 0 ];
// 			}
// 			if ( /^\d/.test( offset[ 1 ] ) ) {
// 				offset[ 1 ] = "+" + offset[ 1 ];
// 			}
// 			if ( at.length === 1 ) {
// 				if ( /left|center|right/.test( at[ 0 ] ) ) {
// 					at[ 1 ] = "center";
// 				} else {
// 					at[ 1 ] = at[ 0 ];
// 					at[ 0 ] = "center";
// 				}
// 			}
// 			return _position.call( this, $.extend( options, {
// 				at: at[ 0 ] + offset[ 0 ] + " " + at[ 1 ] + offset[ 1 ],
// 				offset: undefined
// 			} ) );
// 		};
// 	}( jQuery ) );
// }

// }( jQuery ) );
// (function( $, undefined ) {

// $.extend($.ui, { datepicker: { version: "1.9.0" } });

// var PROP_NAME = 'datepicker';
// var dpuuid = new Date().getTime();
// var instActive;

// /* Date picker manager.
//    Use the singleton instance of this class, $.datepicker, to interact with the date picker.
//    Settings for (groups of) date pickers are maintained in an instance object,
//    allowing multiple different settings on the same page. */

// function Datepicker() {
// 	this.debug = false; // Change this to true to start debugging
// 	this._curInst = null; // The current instance in use
// 	this._keyEvent = false; // If the last event was a key event
// 	this._disabledInputs = []; // List of date picker inputs that have been disabled
// 	this._datepickerShowing = false; // True if the popup picker is showing , false if not
// 	this._inDialog = false; // True if showing within a "dialog", false if not
// 	this._mainDivId = 'ui-datepicker-div'; // The ID of the main datepicker division
// 	this._inlineClass = 'ui-datepicker-inline'; // The name of the inline marker class
// 	this._appendClass = 'ui-datepicker-append'; // The name of the append marker class
// 	this._triggerClass = 'ui-datepicker-trigger'; // The name of the trigger marker class
// 	this._dialogClass = 'ui-datepicker-dialog'; // The name of the dialog marker class
// 	this._disableClass = 'ui-datepicker-disabled'; // The name of the disabled covering marker class
// 	this._unselectableClass = 'ui-datepicker-unselectable'; // The name of the unselectable cell marker class
// 	this._currentClass = 'ui-datepicker-current-day'; // The name of the current day marker class
// 	this._dayOverClass = 'ui-datepicker-days-cell-over'; // The name of the day hover marker class
// 	this.regional = []; // Available regional settings, indexed by language code
// 	this.regional[''] = { // Default regional settings
// 		closeText: 'Done', // Display text for close link
// 		prevText: 'Prev', // Display text for previous month link
// 		nextText: 'Next', // Display text for next month link
// 		currentText: 'Today', // Display text for current month link
// 		monthNames: ['January','February','March','April','May','June',
// 			'July','August','September','October','November','December'], // Names of months for drop-down and formatting
// 		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // For formatting
// 		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], // For formatting
// 		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // For formatting
// 		dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'], // Column headings for days starting at Sunday
// 		weekHeader: 'Wk', // Column header for week of the year
// 		dateFormat: 'mm/dd/yy', // See format options on parseDate
// 		firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
// 		isRTL: false, // True if right-to-left language, false if left-to-right
// 		showMonthAfterYear: false, // True if the year select precedes month, false for month then year
// 		yearSuffix: '' // Additional text to append to the year in the month headers
// 	};
// 	this._defaults = { // Global defaults for all the date picker instances
// 		showOn: 'focus', // 'focus' for popup on focus,
// 			// 'button' for trigger button, or 'both' for either
// 		showAnim: 'fadeIn', // Name of jQuery animation for popup
// 		showOptions: {}, // Options for enhanced animations
// 		defaultDate: null, // Used when field is blank: actual date,
// 			// +/-number for offset from today, null for today
// 		appendText: '', // Display text following the input box, e.g. showing the format
// 		buttonText: '...', // Text for trigger button
// 		buttonImage: '', // URL for trigger button image
// 		buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
// 		hideIfNoPrevNext: false, // True to hide next/previous month links
// 			// if not applicable, false to just disable them
// 		navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
// 		gotoCurrent: false, // True if today link goes back to current selection instead
// 		changeMonth: false, // True if month can be selected directly, false if only prev/next
// 		changeYear: false, // True if year can be selected directly, false if only prev/next
// 		yearRange: 'c-10:c+10', // Range of years to display in drop-down,
// 			// either relative to today's year (-nn:+nn), relative to currently displayed year
// 			// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
// 		showOtherMonths: false, // True to show dates in other months, false to leave blank
// 		selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
// 		showWeek: false, // True to show week of the year, false to not show it
// 		calculateWeek: this.iso8601Week, // How to calculate the week of the year,
// 			// takes a Date and returns the number of the week for it
// 		shortYearCutoff: '+10', // Short year values < this are in the current century,
// 			// > this are in the previous century,
// 			// string value starting with '+' for current year + value
// 		minDate: null, // The earliest selectable date, or null for no limit
// 		maxDate: null, // The latest selectable date, or null for no limit
// 		duration: 'fast', // Duration of display/closure
// 		beforeShowDay: null, // Function that takes a date and returns an array with
// 			// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or '',
// 			// [2] = cell title (optional), e.g. $.datepicker.noWeekends
// 		beforeShow: null, // Function that takes an input field and
// 			// returns a set of custom settings for the date picker
// 		onSelect: null, // Define a callback function when a date is selected
// 		onChangeMonthYear: null, // Define a callback function when the month or year is changed
// 		onClose: null, // Define a callback function when the datepicker is closed
// 		numberOfMonths: 1, // Number of months to show at a time
// 		showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
// 		stepMonths: 1, // Number of months to step back/forward
// 		stepBigMonths: 12, // Number of months to step back/forward for the big links
// 		altField: '', // Selector for an alternate field to store selected dates into
// 		altFormat: '', // The date format to use for the alternate field
// 		constrainInput: true, // The input is constrained by the current date format
// 		showButtonPanel: false, // True to show button panel, false to not show it
// 		autoSize: false, // True to size the input for the date format, false to leave as is
// 		disabled: false // The initial disabled state
// 	};
// 	$.extend(this._defaults, this.regional['']);
// 	this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'));
// }

// $.extend(Datepicker.prototype, {
// 	/* Class name added to elements to indicate already configured with a date picker. */
// 	markerClassName: 'hasDatepicker',
	
// 	//Keep track of the maximum number of rows displayed (see #7043)
// 	maxRows: 4,

// 	/* Debug logging (if enabled). */
// 	log: function () {
// 		if (this.debug)
// 			console.log.apply('', arguments);
// 	},
	
// 	// TODO rename to "widget" when switching to widget factory
// 	_widgetDatepicker: function() {
// 		return this.dpDiv;
// 	},

// 	/* Override the default settings for all instances of the date picker.
// 	   @param  settings  object - the new settings to use as defaults (anonymous object)
// 	   @return the manager object */
// 	setDefaults: function(settings) {
// 		extendRemove(this._defaults, settings || {});
// 		return this;
// 	},

// 	/* Attach the date picker to a jQuery selection.
// 	   @param  target    element - the target input field or division or span
// 	   @param  settings  object - the new settings to use for this date picker instance (anonymous) */
// 	_attachDatepicker: function(target, settings) {
// 		// check for settings on the control itself - in namespace 'date:'
// 		var inlineSettings = null;
// 		for (var attrName in this._defaults) {
// 			var attrValue = target.getAttribute('date:' + attrName);
// 			if (attrValue) {
// 				inlineSettings = inlineSettings || {};
// 				try {
// 					inlineSettings[attrName] = eval(attrValue);
// 				} catch (err) {
// 					inlineSettings[attrName] = attrValue;
// 				}
// 			}
// 		}
// 		var nodeName = target.nodeName.toLowerCase();
// 		var inline = (nodeName == 'div' || nodeName == 'span');
// 		if (!target.id) {
// 			this.uuid += 1;
// 			target.id = 'dp' + this.uuid;
// 		}
// 		var inst = this._newInst($(target), inline);
// 		inst.settings = $.extend({}, settings || {}, inlineSettings || {});
// 		if (nodeName == 'input') {
// 			this._connectDatepicker(target, inst);
// 		} else if (inline) {
// 			this._inlineDatepicker(target, inst);
// 		}
// 	},

// 	/* Create a new instance object. */
// 	_newInst: function(target, inline) {
// 		var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1'); // escape jQuery meta chars
// 		return {id: id, input: target, // associated target
// 			selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
// 			drawMonth: 0, drawYear: 0, // month being drawn
// 			inline: inline, // is datepicker inline or not
// 			dpDiv: (!inline ? this.dpDiv : // presentation div
// 			bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))};
// 	},

// 	/* Attach the date picker to an input field. */
// 	_connectDatepicker: function(target, inst) {
// 		var input = $(target);
// 		inst.append = $([]);
// 		inst.trigger = $([]);
// 		if (input.hasClass(this.markerClassName))
// 			return;
// 		this._attachments(input, inst);
// 		input.addClass(this.markerClassName).keydown(this._doKeyDown).
// 			keypress(this._doKeyPress).keyup(this._doKeyUp).
// 			bind("setData.datepicker", function(event, key, value) {
// 				inst.settings[key] = value;
// 			}).bind("getData.datepicker", function(event, key) {
// 				return this._get(inst, key);
// 			});
// 		this._autoSize(inst);
// 		$.data(target, PROP_NAME, inst);
// 		//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
// 		if( inst.settings.disabled ) {
// 			this._disableDatepicker( target );
// 		}
// 	},

// 	/* Make attachments based on settings. */
// 	_attachments: function(input, inst) {
// 		var appendText = this._get(inst, 'appendText');
// 		var isRTL = this._get(inst, 'isRTL');
// 		if (inst.append)
// 			inst.append.remove();
// 		if (appendText) {
// 			inst.append = $('<span class="' + this._appendClass + '">' + appendText + '</span>');
// 			input[isRTL ? 'before' : 'after'](inst.append);
// 		}
// 		input.unbind('focus', this._showDatepicker);
// 		if (inst.trigger)
// 			inst.trigger.remove();
// 		var showOn = this._get(inst, 'showOn');
// 		if (showOn == 'focus' || showOn == 'both') // pop-up date picker when in the marked field
// 			input.focus(this._showDatepicker);
// 		if (showOn == 'button' || showOn == 'both') { // pop-up date picker when button clicked
// 			var buttonText = this._get(inst, 'buttonText');
// 			var buttonImage = this._get(inst, 'buttonImage');
// 			inst.trigger = $(this._get(inst, 'buttonImageOnly') ?
// 				$('<img/>').addClass(this._triggerClass).
// 					attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
// 				$('<button type="button"></button>').addClass(this._triggerClass).
// 					html(buttonImage == '' ? buttonText : $('<img/>').attr(
// 					{ src:buttonImage, alt:buttonText, title:buttonText })));
// 			input[isRTL ? 'before' : 'after'](inst.trigger);
// 			inst.trigger.click(function() {
// 				if ($.datepicker._datepickerShowing && $.datepicker._lastInput == input[0])
// 					$.datepicker._hideDatepicker();
// 				else if ($.datepicker._datepickerShowing && $.datepicker._lastInput != input[0]) {
// 					$.datepicker._hideDatepicker(); 
// 					$.datepicker._showDatepicker(input[0]);
// 				} else
// 					$.datepicker._showDatepicker(input[0]);
// 				return false;
// 			});
// 		}
// 	},

// 	/* Apply the maximum length for the date format. */
// 	_autoSize: function(inst) {
// 		if (this._get(inst, 'autoSize') && !inst.inline) {
// 			var date = new Date(2009, 12 - 1, 20); // Ensure double digits
// 			var dateFormat = this._get(inst, 'dateFormat');
// 			if (dateFormat.match(/[DM]/)) {
// 				var findMax = function(names) {
// 					var max = 0;
// 					var maxI = 0;
// 					for (var i = 0; i < names.length; i++) {
// 						if (names[i].length > max) {
// 							max = names[i].length;
// 							maxI = i;
// 						}
// 					}
// 					return maxI;
// 				};
// 				date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
// 					'monthNames' : 'monthNamesShort'))));
// 				date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
// 					'dayNames' : 'dayNamesShort'))) + 20 - date.getDay());
// 			}
// 			inst.input.attr('size', this._formatDate(inst, date).length);
// 		}
// 	},

// 	/* Attach an inline date picker to a div. */
// 	_inlineDatepicker: function(target, inst) {
// 		var divSpan = $(target);
// 		if (divSpan.hasClass(this.markerClassName))
// 			return;
// 		divSpan.addClass(this.markerClassName).append(inst.dpDiv).
// 			bind("setData.datepicker", function(event, key, value){
// 				inst.settings[key] = value;
// 			}).bind("getData.datepicker", function(event, key){
// 				return this._get(inst, key);
// 			});
// 		$.data(target, PROP_NAME, inst);
// 		this._setDate(inst, this._getDefaultDate(inst), true);
// 		this._updateDatepicker(inst);
// 		this._updateAlternate(inst);
// 		//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
// 		if( inst.settings.disabled ) {
// 			this._disableDatepicker( target );
// 		}
// 		// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
// 		// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
// 		inst.dpDiv.css( "display", "block" );
// 	},

// 	/* Pop-up the date picker in a "dialog" box.
// 	   @param  input     element - ignored
// 	   @param  date      string or Date - the initial date to display
// 	   @param  onSelect  function - the function to call when a date is selected
// 	   @param  settings  object - update the dialog date picker instance's settings (anonymous object)
// 	   @param  pos       int[2] - coordinates for the dialog's position within the screen or
// 	                     event - with x/y coordinates or
// 	                     leave empty for default (screen centre)
// 	   @return the manager object */
// 	_dialogDatepicker: function(input, date, onSelect, settings, pos) {
// 		var inst = this._dialogInst; // internal instance
// 		if (!inst) {
// 			this.uuid += 1;
// 			var id = 'dp' + this.uuid;
// 			this._dialogInput = $('<input type="text" id="' + id +
// 				'" style="position: absolute; top: -100px; width: 0px;"/>');
// 			this._dialogInput.keydown(this._doKeyDown);
// 			$('body').append(this._dialogInput);
// 			inst = this._dialogInst = this._newInst(this._dialogInput, false);
// 			inst.settings = {};
// 			$.data(this._dialogInput[0], PROP_NAME, inst);
// 		}
// 		extendRemove(inst.settings, settings || {});
// 		date = (date && date.constructor == Date ? this._formatDate(inst, date) : date);
// 		this._dialogInput.val(date);

// 		this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
// 		if (!this._pos) {
// 			var browserWidth = document.documentElement.clientWidth;
// 			var browserHeight = document.documentElement.clientHeight;
// 			var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
// 			var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
// 			this._pos = // should use actual width/height below
// 				[(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
// 		}

// 		// move input on screen for focus, but hidden behind dialog
// 		this._dialogInput.css('left', (this._pos[0] + 20) + 'px').css('top', this._pos[1] + 'px');
// 		inst.settings.onSelect = onSelect;
// 		this._inDialog = true;
// 		this.dpDiv.addClass(this._dialogClass);
// 		this._showDatepicker(this._dialogInput[0]);
// 		if ($.blockUI)
// 			$.blockUI(this.dpDiv);
// 		$.data(this._dialogInput[0], PROP_NAME, inst);
// 		return this;
// 	},

// 	/* Detach a datepicker from its control.
// 	   @param  target    element - the target input field or division or span */
// 	_destroyDatepicker: function(target) {
// 		var $target = $(target);
// 		var inst = $.data(target, PROP_NAME);
// 		if (!$target.hasClass(this.markerClassName)) {
// 			return;
// 		}
// 		var nodeName = target.nodeName.toLowerCase();
// 		$.removeData(target, PROP_NAME);
// 		if (nodeName == 'input') {
// 			inst.append.remove();
// 			inst.trigger.remove();
// 			$target.removeClass(this.markerClassName).
// 				unbind('focus', this._showDatepicker).
// 				unbind('keydown', this._doKeyDown).
// 				unbind('keypress', this._doKeyPress).
// 				unbind('keyup', this._doKeyUp);
// 		} else if (nodeName == 'div' || nodeName == 'span')
// 			$target.removeClass(this.markerClassName).empty();
// 	},

// 	/* Enable the date picker to a jQuery selection.
// 	   @param  target    element - the target input field or division or span */
// 	_enableDatepicker: function(target) {
// 		var $target = $(target);
// 		var inst = $.data(target, PROP_NAME);
// 		if (!$target.hasClass(this.markerClassName)) {
// 			return;
// 		}
// 		var nodeName = target.nodeName.toLowerCase();
// 		if (nodeName == 'input') {
// 			target.disabled = false;
// 			inst.trigger.filter('button').
// 				each(function() { this.disabled = false; }).end().
// 				filter('img').css({opacity: '1.0', cursor: ''});
// 		}
// 		else if (nodeName == 'div' || nodeName == 'span') {
// 			var inline = $target.children('.' + this._inlineClass);
// 			inline.children().removeClass('ui-state-disabled');
// 			inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
// 				prop("disabled", false);
// 		}
// 		this._disabledInputs = $.map(this._disabledInputs,
// 			function(value) { return (value == target ? null : value); }); // delete entry
// 	},

// 	/* Disable the date picker to a jQuery selection.
// 	   @param  target    element - the target input field or division or span */
// 	_disableDatepicker: function(target) {
// 		var $target = $(target);
// 		var inst = $.data(target, PROP_NAME);
// 		if (!$target.hasClass(this.markerClassName)) {
// 			return;
// 		}
// 		var nodeName = target.nodeName.toLowerCase();
// 		if (nodeName == 'input') {
// 			target.disabled = true;
// 			inst.trigger.filter('button').
// 				each(function() { this.disabled = true; }).end().
// 				filter('img').css({opacity: '0.5', cursor: 'default'});
// 		}
// 		else if (nodeName == 'div' || nodeName == 'span') {
// 			var inline = $target.children('.' + this._inlineClass);
// 			inline.children().addClass('ui-state-disabled');
// 			inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
// 				prop("disabled", true);
// 		}
// 		this._disabledInputs = $.map(this._disabledInputs,
// 			function(value) { return (value == target ? null : value); }); // delete entry
// 		this._disabledInputs[this._disabledInputs.length] = target;
// 	},

// 	/* Is the first field in a jQuery collection disabled as a datepicker?
// 	   @param  target    element - the target input field or division or span
// 	   @return boolean - true if disabled, false if enabled */
// 	_isDisabledDatepicker: function(target) {
// 		if (!target) {
// 			return false;
// 		}
// 		for (var i = 0; i < this._disabledInputs.length; i++) {
// 			if (this._disabledInputs[i] == target)
// 				return true;
// 		}
// 		return false;
// 	},

// 	/* Retrieve the instance data for the target control.
// 	   @param  target  element - the target input field or division or span
// 	   @return  object - the associated instance data
// 	   @throws  error if a jQuery problem getting data */
// 	_getInst: function(target) {
// 		try {
// 			return $.data(target, PROP_NAME);
// 		}
// 		catch (err) {
// 			throw 'Missing instance data for this datepicker';
// 		}
// 	},

// 	/* Update or retrieve the settings for a date picker attached to an input field or division.
// 	   @param  target  element - the target input field or division or span
// 	   @param  name    object - the new settings to update or
// 	                   string - the name of the setting to change or retrieve,
// 	                   when retrieving also 'all' for all instance settings or
// 	                   'defaults' for all global defaults
// 	   @param  value   any - the new value for the setting
// 	                   (omit if above is an object or to retrieve a value) */
// 	_optionDatepicker: function(target, name, value) {
// 		var inst = this._getInst(target);
// 		if (arguments.length == 2 && typeof name == 'string') {
// 			return (name == 'defaults' ? $.extend({}, $.datepicker._defaults) :
// 				(inst ? (name == 'all' ? $.extend({}, inst.settings) :
// 				this._get(inst, name)) : null));
// 		}
// 		var settings = name || {};
// 		if (typeof name == 'string') {
// 			settings = {};
// 			settings[name] = value;
// 		}
// 		if (inst) {
// 			if (this._curInst == inst) {
// 				this._hideDatepicker();
// 			}
// 			var date = this._getDateDatepicker(target, true);
// 			var minDate = this._getMinMaxDate(inst, 'min');
// 			var maxDate = this._getMinMaxDate(inst, 'max');
// 			extendRemove(inst.settings, settings);
// 			// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
// 			if (minDate !== null && settings['dateFormat'] !== undefined && settings['minDate'] === undefined)
// 				inst.settings.minDate = this._formatDate(inst, minDate);
// 			if (maxDate !== null && settings['dateFormat'] !== undefined && settings['maxDate'] === undefined)
// 				inst.settings.maxDate = this._formatDate(inst, maxDate);
// 			this._attachments($(target), inst);
// 			this._autoSize(inst);
// 			this._setDate(inst, date);
// 			this._updateAlternate(inst);
// 			this._updateDatepicker(inst);
// 		}
// 	},

// 	// change method deprecated
// 	_changeDatepicker: function(target, name, value) {
// 		this._optionDatepicker(target, name, value);
// 	},

// 	/* Redraw the date picker attached to an input field or division.
// 	   @param  target  element - the target input field or division or span */
// 	_refreshDatepicker: function(target) {
// 		var inst = this._getInst(target);
// 		if (inst) {
// 			this._updateDatepicker(inst);
// 		}
// 	},

// 	/* Set the dates for a jQuery selection.
// 	   @param  target   element - the target input field or division or span
// 	   @param  date     Date - the new date */
// 	_setDateDatepicker: function(target, date) {
// 		var inst = this._getInst(target);
// 		if (inst) {
// 			this._setDate(inst, date);
// 			this._updateDatepicker(inst);
// 			this._updateAlternate(inst);
// 		}
// 	},

// 	/* Get the date(s) for the first entry in a jQuery selection.
// 	   @param  target     element - the target input field or division or span
// 	   @param  noDefault  boolean - true if no default date is to be used
// 	   @return Date - the current date */
// 	_getDateDatepicker: function(target, noDefault) {
// 		var inst = this._getInst(target);
// 		if (inst && !inst.inline)
// 			this._setDateFromField(inst, noDefault);
// 		return (inst ? this._getDate(inst) : null);
// 	},

// 	/* Handle keystrokes. */
// 	_doKeyDown: function(event) {
// 		var inst = $.datepicker._getInst(event.target);
// 		var handled = true;
// 		var isRTL = inst.dpDiv.is('.ui-datepicker-rtl');
// 		inst._keyEvent = true;
// 		if ($.datepicker._datepickerShowing)
// 			switch (event.keyCode) {
// 				case 9: $.datepicker._hideDatepicker();
// 						handled = false;
// 						break; // hide on tab out
// 				case 13: var sel = $('td.' + $.datepicker._dayOverClass + ':not(.' + 
// 									$.datepicker._currentClass + ')', inst.dpDiv);
// 						if (sel[0])
// 							$.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
// 							var onSelect = $.datepicker._get(inst, 'onSelect');
// 							if (onSelect) {
// 								var dateStr = $.datepicker._formatDate(inst);

// 								// trigger custom callback
// 								onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
// 							}
// 						else
// 							$.datepicker._hideDatepicker();
// 						return false; // don't submit the form
// 						break; // select the value on enter
// 				case 27: $.datepicker._hideDatepicker();
// 						break; // hide on escape
// 				case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
// 							-$.datepicker._get(inst, 'stepBigMonths') :
// 							-$.datepicker._get(inst, 'stepMonths')), 'M');
// 						break; // previous month/year on page up/+ ctrl
// 				case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
// 							+$.datepicker._get(inst, 'stepBigMonths') :
// 							+$.datepicker._get(inst, 'stepMonths')), 'M');
// 						break; // next month/year on page down/+ ctrl
// 				case 35: if (event.ctrlKey || event.metaKey) $.datepicker._clearDate(event.target);
// 						handled = event.ctrlKey || event.metaKey;
// 						break; // clear on ctrl or command +end
// 				case 36: if (event.ctrlKey || event.metaKey) $.datepicker._gotoToday(event.target);
// 						handled = event.ctrlKey || event.metaKey;
// 						break; // current on ctrl or command +home
// 				case 37: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), 'D');
// 						handled = event.ctrlKey || event.metaKey;
// 						// -1 day on ctrl or command +left
// 						if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
// 									-$.datepicker._get(inst, 'stepBigMonths') :
// 									-$.datepicker._get(inst, 'stepMonths')), 'M');
// 						// next month/year on alt +left on Mac
// 						break;
// 				case 38: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, -7, 'D');
// 						handled = event.ctrlKey || event.metaKey;
// 						break; // -1 week on ctrl or command +up
// 				case 39: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), 'D');
// 						handled = event.ctrlKey || event.metaKey;
// 						// +1 day on ctrl or command +right
// 						if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
// 									+$.datepicker._get(inst, 'stepBigMonths') :
// 									+$.datepicker._get(inst, 'stepMonths')), 'M');
// 						// next month/year on alt +right
// 						break;
// 				case 40: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, +7, 'D');
// 						handled = event.ctrlKey || event.metaKey;
// 						break; // +1 week on ctrl or command +down
// 				default: handled = false;
// 			}
// 		else if (event.keyCode == 36 && event.ctrlKey) // display the date picker on ctrl+home
// 			$.datepicker._showDatepicker(this);
// 		else {
// 			handled = false;
// 		}
// 		if (handled) {
// 			event.preventDefault();
// 			event.stopPropagation();
// 		}
// 	},

// 	/* Filter entered characters - based on date format. */
// 	_doKeyPress: function(event) {
// 		var inst = $.datepicker._getInst(event.target);
// 		if ($.datepicker._get(inst, 'constrainInput')) {
// 			var chars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat'));
// 			var chr = String.fromCharCode(event.charCode == undefined ? event.keyCode : event.charCode);
// 			return event.ctrlKey || event.metaKey || (chr < ' ' || !chars || chars.indexOf(chr) > -1);
// 		}
// 	},

// 	/* Synchronise manual entry and field/alternate field. */
// 	_doKeyUp: function(event) {
// 		var inst = $.datepicker._getInst(event.target);
// 		if (inst.input.val() != inst.lastVal) {
// 			try {
// 				var date = $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'),
// 					(inst.input ? inst.input.val() : null),
// 					$.datepicker._getFormatConfig(inst));
// 				if (date) { // only if valid
// 					$.datepicker._setDateFromField(inst);
// 					$.datepicker._updateAlternate(inst);
// 					$.datepicker._updateDatepicker(inst);
// 				}
// 			}
// 			catch (err) {
// 				$.datepicker.log(err);
// 			}
// 		}
// 		return true;
// 	},

// 	/* Pop-up the date picker for a given input field.
// 	   If false returned from beforeShow event handler do not show. 
// 	   @param  input  element - the input field attached to the date picker or
// 	                  event - if triggered by focus */
// 	_showDatepicker: function(input) {
// 		input = input.target || input;
// 		if (input.nodeName.toLowerCase() != 'input') // find from button/image trigger
// 			input = $('input', input.parentNode)[0];
// 		if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput == input) // already here
// 			return;
// 		var inst = $.datepicker._getInst(input);
// 		if ($.datepicker._curInst && $.datepicker._curInst != inst) {
// 			$.datepicker._curInst.dpDiv.stop(true, true);
// 			if ( inst && $.datepicker._datepickerShowing ) {
// 				$.datepicker._hideDatepicker( $.datepicker._curInst.input[0] );
// 			}
// 		}
// 		var beforeShow = $.datepicker._get(inst, 'beforeShow');
// 		var beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
// 		if(beforeShowSettings === false){
// 			//false
// 			return;
// 		}
// 		extendRemove(inst.settings, beforeShowSettings);
// 		inst.lastVal = null;
// 		$.datepicker._lastInput = input;
// 		$.datepicker._setDateFromField(inst);
// 		if ($.datepicker._inDialog) // hide cursor
// 			input.value = '';
// 		if (!$.datepicker._pos) { // position below input
// 			$.datepicker._pos = $.datepicker._findPos(input);
// 			$.datepicker._pos[1] += input.offsetHeight; // add the height
// 		}
// 		var isFixed = false;
// 		$(input).parents().each(function() {
// 			isFixed |= $(this).css('position') == 'fixed';
// 			return !isFixed;
// 		});
// 		var offset = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
// 		$.datepicker._pos = null;
// 		//to avoid flashes on Firefox
// 		inst.dpDiv.empty();
// 		// determine sizing offscreen
// 		inst.dpDiv.css({position: 'absolute', display: 'block', top: '-1000px'});
// 		$.datepicker._updateDatepicker(inst);
// 		// fix width for dynamic number of date pickers
// 		// and adjust position before showing
// 		offset = $.datepicker._checkOffset(inst, offset, isFixed);
// 		inst.dpDiv.css({position: ($.datepicker._inDialog && $.blockUI ?
// 			'static' : (isFixed ? 'fixed' : 'absolute')), display: 'none',
// 			left: offset.left + 'px', top: offset.top + 'px'});
// 		if (!inst.inline) {
// 			var showAnim = $.datepicker._get(inst, 'showAnim');
// 			var duration = $.datepicker._get(inst, 'duration');
// 			var postProcess = function() {
// 				var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
// 				if( !! cover.length ){
// 					var borders = $.datepicker._getBorders(inst.dpDiv);
// 					cover.css({left: -borders[0], top: -borders[1],
// 						width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()});
// 				}
// 			};
// 			inst.dpDiv.zIndex($(input).zIndex()+1);
// 			$.datepicker._datepickerShowing = true;

// 			// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
// 			if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) )
// 				inst.dpDiv.show(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
// 			else
// 				inst.dpDiv[showAnim || 'show']((showAnim ? duration : null), postProcess);
// 			if (!showAnim || !duration)
// 				postProcess();
// 			if (inst.input.is(':visible') && !inst.input.is(':disabled'))
// 				inst.input.focus();
// 			$.datepicker._curInst = inst;
// 		}
// 	},

// 	/* Generate the date picker content. */
// 	_updateDatepicker: function(inst) {
// 		this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
// 		var borders = $.datepicker._getBorders(inst.dpDiv);
// 		instActive = inst; // for delegate hover events
// 		inst.dpDiv.empty().append(this._generateHTML(inst));
// 		this._attachHandlers(inst);
// 		var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
// 		if( !!cover.length ){ //avoid call to outerXXXX() when not in IE6
// 			cover.css({left: -borders[0], top: -borders[1], width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()})
// 		}
// 		inst.dpDiv.find('.' + this._dayOverClass + ' a').mouseover();
// 		var numMonths = this._getNumberOfMonths(inst);
// 		var cols = numMonths[1];
// 		var width = 17;
// 		inst.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width('');
// 		if (cols > 1)
// 			inst.dpDiv.addClass('ui-datepicker-multi-' + cols).css('width', (width * cols) + 'em');
// 		inst.dpDiv[(numMonths[0] != 1 || numMonths[1] != 1 ? 'add' : 'remove') +
// 			'Class']('ui-datepicker-multi');
// 		inst.dpDiv[(this._get(inst, 'isRTL') ? 'add' : 'remove') +
// 			'Class']('ui-datepicker-rtl');
// 		if (inst == $.datepicker._curInst && $.datepicker._datepickerShowing && inst.input &&
// 				// #6694 - don't focus the input if it's already focused
// 				// this breaks the change event in IE
// 				inst.input.is(':visible') && !inst.input.is(':disabled') && inst.input[0] != document.activeElement)
// 			inst.input.focus();
// 		// deffered render of the years select (to avoid flashes on Firefox) 
// 		if( inst.yearshtml ){
// 			var origyearshtml = inst.yearshtml;
// 			setTimeout(function(){
// 				//assure that inst.yearshtml didn't change.
// 				if( origyearshtml === inst.yearshtml && inst.yearshtml ){
// 					inst.dpDiv.find('select.ui-datepicker-year:first').replaceWith(inst.yearshtml);
// 				}
// 				origyearshtml = inst.yearshtml = null;
// 			}, 0);
// 		}
// 	},

// 	/* Retrieve the size of left and top borders for an element.
// 	   @param  elem  (jQuery object) the element of interest
// 	   @return  (number[2]) the left and top borders */
// 	_getBorders: function(elem) {
// 		var convert = function(value) {
// 			return {thin: 1, medium: 2, thick: 3}[value] || value;
// 		};
// 		return [parseFloat(convert(elem.css('border-left-width'))),
// 			parseFloat(convert(elem.css('border-top-width')))];
// 	},

// 	/* Check positioning to remain on screen. */
// 	_checkOffset: function(inst, offset, isFixed) {
// 		var dpWidth = inst.dpDiv.outerWidth();
// 		var dpHeight = inst.dpDiv.outerHeight();
// 		var inputWidth = inst.input ? inst.input.outerWidth() : 0;
// 		var inputHeight = inst.input ? inst.input.outerHeight() : 0;
// 		var viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft());
// 		var viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());

// 		offset.left -= (this._get(inst, 'isRTL') ? (dpWidth - inputWidth) : 0);
// 		offset.left -= (isFixed && offset.left == inst.input.offset().left) ? $(document).scrollLeft() : 0;
// 		offset.top -= (isFixed && offset.top == (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

// 		// now check if datepicker is showing outside window viewport - move to a better place if so.
// 		offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
// 			Math.abs(offset.left + dpWidth - viewWidth) : 0);
// 		offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
// 			Math.abs(dpHeight + inputHeight) : 0);

// 		return offset;
// 	},

// 	/* Find an object's position on the screen. */
// 	_findPos: function(obj) {
// 		var inst = this._getInst(obj);
// 		var isRTL = this._get(inst, 'isRTL');
// 		while (obj && (obj.type == 'hidden' || obj.nodeType != 1 || $.expr.filters.hidden(obj))) {
// 			obj = obj[isRTL ? 'previousSibling' : 'nextSibling'];
// 		}
// 		var position = $(obj).offset();
// 		return [position.left, position.top];
// 	},

// 	/* Hide the date picker from view.
// 	   @param  input  element - the input field attached to the date picker */
// 	_hideDatepicker: function(input) {
// 		var inst = this._curInst;
// 		if (!inst || (input && inst != $.data(input, PROP_NAME)))
// 			return;
// 		if (this._datepickerShowing) {
// 			var showAnim = this._get(inst, 'showAnim');
// 			var duration = this._get(inst, 'duration');
// 			var postProcess = function() {
// 				$.datepicker._tidyDialog(inst);
// 			};

// 			// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
// 			if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) )
// 				inst.dpDiv.hide(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
// 			else
// 				inst.dpDiv[(showAnim == 'slideDown' ? 'slideUp' :
// 					(showAnim == 'fadeIn' ? 'fadeOut' : 'hide'))]((showAnim ? duration : null), postProcess);
// 			if (!showAnim)
// 				postProcess();
// 			this._datepickerShowing = false;
// 			var onClose = this._get(inst, 'onClose');
// 			if (onClose)
// 				onClose.apply((inst.input ? inst.input[0] : null),
// 					[(inst.input ? inst.input.val() : ''), inst]);
// 			this._lastInput = null;
// 			if (this._inDialog) {
// 				this._dialogInput.css({ position: 'absolute', left: '0', top: '-100px' });
// 				if ($.blockUI) {
// 					$.unblockUI();
// 					$('body').append(this.dpDiv);
// 				}
// 			}
// 			this._inDialog = false;
// 		}
// 	},

// 	/* Tidy up after a dialog display. */
// 	_tidyDialog: function(inst) {
// 		inst.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar');
// 	},

// 	/* Close date picker if clicked elsewhere. */
// 	_checkExternalClick: function(event) {
// 		if (!$.datepicker._curInst)
// 			return;

// 		var $target = $(event.target),
// 			inst = $.datepicker._getInst($target[0]);

// 		if ( ( ( $target[0].id != $.datepicker._mainDivId &&
// 				$target.parents('#' + $.datepicker._mainDivId).length == 0 &&
// 				!$target.hasClass($.datepicker.markerClassName) &&
// 				!$target.closest("." + $.datepicker._triggerClass).length &&
// 				$.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI) ) ) ||
// 			( $target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != inst ) )
// 			$.datepicker._hideDatepicker();
// 	},

// 	/* Adjust one of the date sub-fields. */
// 	_adjustDate: function(id, offset, period) {
// 		var target = $(id);
// 		var inst = this._getInst(target[0]);
// 		if (this._isDisabledDatepicker(target[0])) {
// 			return;
// 		}
// 		this._adjustInstDate(inst, offset +
// 			(period == 'M' ? this._get(inst, 'showCurrentAtPos') : 0), // undo positioning
// 			period);
// 		this._updateDatepicker(inst);
// 	},

// 	/* Action for current link. */
// 	_gotoToday: function(id) {
// 		var target = $(id);
// 		var inst = this._getInst(target[0]);
// 		if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
// 			inst.selectedDay = inst.currentDay;
// 			inst.drawMonth = inst.selectedMonth = inst.currentMonth;
// 			inst.drawYear = inst.selectedYear = inst.currentYear;
// 		}
// 		else {
// 			var date = new Date();
// 			inst.selectedDay = date.getDate();
// 			inst.drawMonth = inst.selectedMonth = date.getMonth();
// 			inst.drawYear = inst.selectedYear = date.getFullYear();
// 		}
// 		this._notifyChange(inst);
// 		this._adjustDate(target);
// 	},

// 	/* Action for selecting a new month/year. */
// 	_selectMonthYear: function(id, select, period) {
// 		var target = $(id);
// 		var inst = this._getInst(target[0]);
// 		inst['selected' + (period == 'M' ? 'Month' : 'Year')] =
// 		inst['draw' + (period == 'M' ? 'Month' : 'Year')] =
// 			parseInt(select.options[select.selectedIndex].value,10);
// 		this._notifyChange(inst);
// 		this._adjustDate(target);
// 	},

// 	/* Action for selecting a day. */
// 	_selectDay: function(id, month, year, td) {
// 		var target = $(id);
// 		if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
// 			return;
// 		}
// 		var inst = this._getInst(target[0]);
// 		inst.selectedDay = inst.currentDay = $('a', td).html();
// 		inst.selectedMonth = inst.currentMonth = month;
// 		inst.selectedYear = inst.currentYear = year;
// 		this._selectDate(id, this._formatDate(inst,
// 			inst.currentDay, inst.currentMonth, inst.currentYear));
// 	},

// 	/* Erase the input field and hide the date picker. */
// 	_clearDate: function(id) {
// 		var target = $(id);
// 		var inst = this._getInst(target[0]);
// 		this._selectDate(target, '');
// 	},

// 	/* Update the input field with the selected date. */
// 	_selectDate: function(id, dateStr) {
// 		var target = $(id);
// 		var inst = this._getInst(target[0]);
// 		dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
// 		if (inst.input)
// 			inst.input.val(dateStr);
// 		this._updateAlternate(inst);
// 		var onSelect = this._get(inst, 'onSelect');
// 		if (onSelect)
// 			onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);  // trigger custom callback
// 		else if (inst.input)
// 			inst.input.trigger('change'); // fire the change event
// 		if (inst.inline)
// 			this._updateDatepicker(inst);
// 		else {
// 			this._hideDatepicker();
// 			this._lastInput = inst.input[0];
// 			if (typeof(inst.input[0]) != 'object')
// 				inst.input.focus(); // restore focus
// 			this._lastInput = null;
// 		}
// 	},

// 	/* Update any alternate field to synchronise with the main field. */
// 	_updateAlternate: function(inst) {
// 		var altField = this._get(inst, 'altField');
// 		if (altField) { // update alternate field too
// 			var altFormat = this._get(inst, 'altFormat') || this._get(inst, 'dateFormat');
// 			var date = this._getDate(inst);
// 			var dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
// 			$(altField).each(function() { $(this).val(dateStr); });
// 		}
// 	},

// 	/* Set as beforeShowDay function to prevent selection of weekends.
// 	   @param  date  Date - the date to customise
// 	   @return [boolean, string] - is this date selectable?, what is its CSS class? */
// 	noWeekends: function(date) {
// 		var day = date.getDay();
// 		return [(day > 0 && day < 6), ''];
// 	},

// 	/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
// 	   @param  date  Date - the date to get the week for
// 	   @return  number - the number of the week within the year that contains this date */
// 	iso8601Week: function(date) {
// 		var checkDate = new Date(date.getTime());
// 		// Find Thursday of this week starting on Monday
// 		checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
// 		var time = checkDate.getTime();
// 		checkDate.setMonth(0); // Compare with Jan 1
// 		checkDate.setDate(1);
// 		return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
// 	},

// 	/* Parse a string value into a date object.
// 	   See formatDate below for the possible formats.

// 	   @param  format    string - the expected format of the date
// 	   @param  value     string - the date in the above format
// 	   @param  settings  Object - attributes include:
// 	                     shortYearCutoff  number - the cutoff year for determining the century (optional)
// 	                     dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
// 	                     dayNames         string[7] - names of the days from Sunday (optional)
// 	                     monthNamesShort  string[12] - abbreviated names of the months (optional)
// 	                     monthNames       string[12] - names of the months (optional)
// 	   @return  Date - the extracted date value or null if value is blank */
// 	parseDate: function (format, value, settings) {
// 		if (format == null || value == null)
// 			throw 'Invalid arguments';
// 		value = (typeof value == 'object' ? value.toString() : value + '');
// 		if (value == '')
// 			return null;
// 		var shortYearCutoff = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff;
// 		shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
// 				new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
// 		var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
// 		var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
// 		var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
// 		var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
// 		var year = -1;
// 		var month = -1;
// 		var day = -1;
// 		var doy = -1;
// 		var literal = false;
// 		// Check whether a format character is doubled
// 		var lookAhead = function(match) {
// 			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
// 			if (matches)
// 				iFormat++;
// 			return matches;
// 		};
// 		// Extract a number from the string value
// 		var getNumber = function(match) {
// 			var isDoubled = lookAhead(match);
// 			var size = (match == '@' ? 14 : (match == '!' ? 20 :
// 				(match == 'y' && isDoubled ? 4 : (match == 'o' ? 3 : 2))));
// 			var digits = new RegExp('^\\d{1,' + size + '}');
// 			var num = value.substring(iValue).match(digits);
// 			if (!num)
// 				throw 'Missing number at position ' + iValue;
// 			iValue += num[0].length;
// 			return parseInt(num[0], 10);
// 		};
// 		// Extract a name from the string value and convert to an index
// 		var getName = function(match, shortNames, longNames) {
// 			var names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
// 				return [ [k, v] ];
// 			}).sort(function (a, b) {
// 				return -(a[1].length - b[1].length);
// 			});
// 			var index = -1;
// 			$.each(names, function (i, pair) {
// 				var name = pair[1];
// 				if (value.substr(iValue, name.length).toLowerCase() == name.toLowerCase()) {
// 					index = pair[0];
// 					iValue += name.length;
// 					return false;
// 				}
// 			});
// 			if (index != -1)
// 				return index + 1;
// 			else
// 				throw 'Unknown name at position ' + iValue;
// 		};
// 		// Confirm that a literal character matches the string value
// 		var checkLiteral = function() {
// 			if (value.charAt(iValue) != format.charAt(iFormat))
// 				throw 'Unexpected literal at position ' + iValue;
// 			iValue++;
// 		};
// 		var iValue = 0;
// 		for (var iFormat = 0; iFormat < format.length; iFormat++) {
// 			if (literal)
// 				if (format.charAt(iFormat) == "'" && !lookAhead("'"))
// 					literal = false;
// 				else
// 					checkLiteral();
// 			else
// 				switch (format.charAt(iFormat)) {
// 					case 'd':
// 						day = getNumber('d');
// 						break;
// 					case 'D':
// 						getName('D', dayNamesShort, dayNames);
// 						break;
// 					case 'o':
// 						doy = getNumber('o');
// 						break;
// 					case 'm':
// 						month = getNumber('m');
// 						break;
// 					case 'M':
// 						month = getName('M', monthNamesShort, monthNames);
// 						break;
// 					case 'y':
// 						year = getNumber('y');
// 						break;
// 					case '@':
// 						var date = new Date(getNumber('@'));
// 						year = date.getFullYear();
// 						month = date.getMonth() + 1;
// 						day = date.getDate();
// 						break;
// 					case '!':
// 						var date = new Date((getNumber('!') - this._ticksTo1970) / 10000);
// 						year = date.getFullYear();
// 						month = date.getMonth() + 1;
// 						day = date.getDate();
// 						break;
// 					case "'":
// 						if (lookAhead("'"))
// 							checkLiteral();
// 						else
// 							literal = true;
// 						break;
// 					default:
// 						checkLiteral();
// 				}
// 		}
// 		if (iValue < value.length){
// 			var extra = value.substr(iValue);
// 			if (!/^\s+/.test(extra)) {
// 				throw "Extra/unparsed characters found in date: " + extra;
// 			}
// 		}
// 		if (year == -1)
// 			year = new Date().getFullYear();
// 		else if (year < 100)
// 			year += new Date().getFullYear() - new Date().getFullYear() % 100 +
// 				(year <= shortYearCutoff ? 0 : -100);
// 		if (doy > -1) {
// 			month = 1;
// 			day = doy;
// 			do {
// 				var dim = this._getDaysInMonth(year, month - 1);
// 				if (day <= dim)
// 					break;
// 				month++;
// 				day -= dim;
// 			} while (true);
// 		}
// 		var date = this._daylightSavingAdjust(new Date(year, month - 1, day));
// 		if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day)
// 			throw 'Invalid date'; // E.g. 31/02/00
// 		return date;
// 	},

// 	/* Standard date formats. */
// 	ATOM: 'yy-mm-dd', // RFC 3339 (ISO 8601)
// 	COOKIE: 'D, dd M yy',
// 	ISO_8601: 'yy-mm-dd',
// 	RFC_822: 'D, d M y',
// 	RFC_850: 'DD, dd-M-y',
// 	RFC_1036: 'D, d M y',
// 	RFC_1123: 'D, d M yy',
// 	RFC_2822: 'D, d M yy',
// 	RSS: 'D, d M y', // RFC 822
// 	TICKS: '!',
// 	TIMESTAMP: '@',
// 	W3C: 'yy-mm-dd', // ISO 8601

// 	_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
// 		Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

// 	/* Format a date object into a string value.
// 	   The format can be combinations of the following:
// 	   d  - day of month (no leading zero)
// 	   dd - day of month (two digit)
// 	   o  - day of year (no leading zeros)
// 	   oo - day of year (three digit)
// 	   D  - day name short
// 	   DD - day name long
// 	   m  - month of year (no leading zero)
// 	   mm - month of year (two digit)
// 	   M  - month name short
// 	   MM - month name long
// 	   y  - year (two digit)
// 	   yy - year (four digit)
// 	   @ - Unix timestamp (ms since 01/01/1970)
// 	   ! - Windows ticks (100ns since 01/01/0001)
// 	   '...' - literal text
// 	   '' - single quote

// 	   @param  format    string - the desired format of the date
// 	   @param  date      Date - the date value to format
// 	   @param  settings  Object - attributes include:
// 	                     dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
// 	                     dayNames         string[7] - names of the days from Sunday (optional)
// 	                     monthNamesShort  string[12] - abbreviated names of the months (optional)
// 	                     monthNames       string[12] - names of the months (optional)
// 	   @return  string - the date in the above format */
// 	formatDate: function (format, date, settings) {
// 		if (!date)
// 			return '';
// 		var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
// 		var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
// 		var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
// 		var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
// 		// Check whether a format character is doubled
// 		var lookAhead = function(match) {
// 			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
// 			if (matches)
// 				iFormat++;
// 			return matches;
// 		};
// 		// Format a number, with leading zero if necessary
// 		var formatNumber = function(match, value, len) {
// 			var num = '' + value;
// 			if (lookAhead(match))
// 				while (num.length < len)
// 					num = '0' + num;
// 			return num;
// 		};
// 		// Format a name, short or long as requested
// 		var formatName = function(match, value, shortNames, longNames) {
// 			return (lookAhead(match) ? longNames[value] : shortNames[value]);
// 		};
// 		var output = '';
// 		var literal = false;
// 		if (date)
// 			for (var iFormat = 0; iFormat < format.length; iFormat++) {
// 				if (literal)
// 					if (format.charAt(iFormat) == "'" && !lookAhead("'"))
// 						literal = false;
// 					else
// 						output += format.charAt(iFormat);
// 				else
// 					switch (format.charAt(iFormat)) {
// 						case 'd':
// 							output += formatNumber('d', date.getDate(), 2);
// 							break;
// 						case 'D':
// 							output += formatName('D', date.getDay(), dayNamesShort, dayNames);
// 							break;
// 						case 'o':
// 							output += formatNumber('o',
// 								Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
// 							break;
// 						case 'm':
// 							output += formatNumber('m', date.getMonth() + 1, 2);
// 							break;
// 						case 'M':
// 							output += formatName('M', date.getMonth(), monthNamesShort, monthNames);
// 							break;
// 						case 'y':
// 							output += (lookAhead('y') ? date.getFullYear() :
// 								(date.getYear() % 100 < 10 ? '0' : '') + date.getYear() % 100);
// 							break;
// 						case '@':
// 							output += date.getTime();
// 							break;
// 						case '!':
// 							output += date.getTime() * 10000 + this._ticksTo1970;
// 							break;
// 						case "'":
// 							if (lookAhead("'"))
// 								output += "'";
// 							else
// 								literal = true;
// 							break;
// 						default:
// 							output += format.charAt(iFormat);
// 					}
// 			}
// 		return output;
// 	},

// 	/* Extract all possible characters from the date format. */
// 	_possibleChars: function (format) {
// 		var chars = '';
// 		var literal = false;
// 		// Check whether a format character is doubled
// 		var lookAhead = function(match) {
// 			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
// 			if (matches)
// 				iFormat++;
// 			return matches;
// 		};
// 		for (var iFormat = 0; iFormat < format.length; iFormat++)
// 			if (literal)
// 				if (format.charAt(iFormat) == "'" && !lookAhead("'"))
// 					literal = false;
// 				else
// 					chars += format.charAt(iFormat);
// 			else
// 				switch (format.charAt(iFormat)) {
// 					case 'd': case 'm': case 'y': case '@':
// 						chars += '0123456789';
// 						break;
// 					case 'D': case 'M':
// 						return null; // Accept anything
// 					case "'":
// 						if (lookAhead("'"))
// 							chars += "'";
// 						else
// 							literal = true;
// 						break;
// 					default:
// 						chars += format.charAt(iFormat);
// 				}
// 		return chars;
// 	},

// 	/* Get a setting value, defaulting if necessary. */
// 	_get: function(inst, name) {
// 		return inst.settings[name] !== undefined ?
// 			inst.settings[name] : this._defaults[name];
// 	},

// 	/* Parse existing date and initialise date picker. */
// 	_setDateFromField: function(inst, noDefault) {
// 		if (inst.input.val() == inst.lastVal) {
// 			return;
// 		}
// 		var dateFormat = this._get(inst, 'dateFormat');
// 		var dates = inst.lastVal = inst.input ? inst.input.val() : null;
// 		var date, defaultDate;
// 		date = defaultDate = this._getDefaultDate(inst);
// 		var settings = this._getFormatConfig(inst);
// 		try {
// 			date = this.parseDate(dateFormat, dates, settings) || defaultDate;
// 		} catch (event) {
// 			this.log(event);
// 			dates = (noDefault ? '' : dates);
// 		}
// 		inst.selectedDay = date.getDate();
// 		inst.drawMonth = inst.selectedMonth = date.getMonth();
// 		inst.drawYear = inst.selectedYear = date.getFullYear();
// 		inst.currentDay = (dates ? date.getDate() : 0);
// 		inst.currentMonth = (dates ? date.getMonth() : 0);
// 		inst.currentYear = (dates ? date.getFullYear() : 0);
// 		this._adjustInstDate(inst);
// 	},

// 	/* Retrieve the default date shown on opening. */
// 	_getDefaultDate: function(inst) {
// 		return this._restrictMinMax(inst,
// 			this._determineDate(inst, this._get(inst, 'defaultDate'), new Date()));
// 	},

// 	/* A date may be specified as an exact value or a relative one. */
// 	_determineDate: function(inst, date, defaultDate) {
// 		var offsetNumeric = function(offset) {
// 			var date = new Date();
// 			date.setDate(date.getDate() + offset);
// 			return date;
// 		};
// 		var offsetString = function(offset) {
// 			try {
// 				return $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'),
// 					offset, $.datepicker._getFormatConfig(inst));
// 			}
// 			catch (e) {
// 				// Ignore
// 			}
// 			var date = (offset.toLowerCase().match(/^c/) ?
// 				$.datepicker._getDate(inst) : null) || new Date();
// 			var year = date.getFullYear();
// 			var month = date.getMonth();
// 			var day = date.getDate();
// 			var pattern = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
// 			var matches = pattern.exec(offset);
// 			while (matches) {
// 				switch (matches[2] || 'd') {
// 					case 'd' : case 'D' :
// 						day += parseInt(matches[1],10); break;
// 					case 'w' : case 'W' :
// 						day += parseInt(matches[1],10) * 7; break;
// 					case 'm' : case 'M' :
// 						month += parseInt(matches[1],10);
// 						day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
// 						break;
// 					case 'y': case 'Y' :
// 						year += parseInt(matches[1],10);
// 						day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
// 						break;
// 				}
// 				matches = pattern.exec(offset);
// 			}
// 			return new Date(year, month, day);
// 		};
// 		var newDate = (date == null || date === '' ? defaultDate : (typeof date == 'string' ? offsetString(date) :
// 			(typeof date == 'number' ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));
// 		newDate = (newDate && newDate.toString() == 'Invalid Date' ? defaultDate : newDate);
// 		if (newDate) {
// 			newDate.setHours(0);
// 			newDate.setMinutes(0);
// 			newDate.setSeconds(0);
// 			newDate.setMilliseconds(0);
// 		}
// 		return this._daylightSavingAdjust(newDate);
// 	},

// 	/* Handle switch to/from daylight saving.
// 	   Hours may be non-zero on daylight saving cut-over:
// 	   > 12 when midnight changeover, but then cannot generate
// 	   midnight datetime, so jump to 1AM, otherwise reset.
// 	   @param  date  (Date) the date to check
// 	   @return  (Date) the corrected date */
// 	_daylightSavingAdjust: function(date) {
// 		if (!date) return null;
// 		date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
// 		return date;
// 	},

// 	/* Set the date(s) directly. */
// 	_setDate: function(inst, date, noChange) {
// 		var clear = !date;
// 		var origMonth = inst.selectedMonth;
// 		var origYear = inst.selectedYear;
// 		var newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
// 		inst.selectedDay = inst.currentDay = newDate.getDate();
// 		inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
// 		inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
// 		if ((origMonth != inst.selectedMonth || origYear != inst.selectedYear) && !noChange)
// 			this._notifyChange(inst);
// 		this._adjustInstDate(inst);
// 		if (inst.input) {
// 			inst.input.val(clear ? '' : this._formatDate(inst));
// 		}
// 	},

// 	/* Retrieve the date(s) directly. */
// 	_getDate: function(inst) {
// 		var startDate = (!inst.currentYear || (inst.input && inst.input.val() == '') ? null :
// 			this._daylightSavingAdjust(new Date(
// 			inst.currentYear, inst.currentMonth, inst.currentDay)));
// 			return startDate;
// 	},

// 	/* Attach the onxxx handlers.  These are declared statically so
// 	 * they work with static code transformers like Caja.
// 	 */
// 	_attachHandlers: function(inst) {
// 		var stepMonths = this._get(inst, 'stepMonths');
// 		var id = '#' + inst.id.replace( /\\\\/g, "\\" );
// 		inst.dpDiv.find('[data-handler]').map(function () {
// 			var handler = {
// 				prev: function () {
// 					window['DP_jQuery_' + dpuuid].datepicker._adjustDate(id, -stepMonths, 'M');
// 				},
// 				next: function () {
// 					window['DP_jQuery_' + dpuuid].datepicker._adjustDate(id, +stepMonths, 'M');
// 				},
// 				hide: function () {
// 					window['DP_jQuery_' + dpuuid].datepicker._hideDatepicker();
// 				},
// 				today: function () {
// 					window['DP_jQuery_' + dpuuid].datepicker._gotoToday(id);
// 				},
// 				selectDay: function () {
// 					window['DP_jQuery_' + dpuuid].datepicker._selectDay(id, +this.getAttribute('data-month'), +this.getAttribute('data-year'), this);
// 					return false;
// 				},
// 				selectMonth: function () {
// 					window['DP_jQuery_' + dpuuid].datepicker._selectMonthYear(id, this, 'M');
// 					return false;
// 				},
// 				selectYear: function () {
// 					window['DP_jQuery_' + dpuuid].datepicker._selectMonthYear(id, this, 'Y');
// 					return false;
// 				}
// 			};
// 			$(this).bind(this.getAttribute('data-event'), handler[this.getAttribute('data-handler')]);
// 		});
// 	},
	
// 	/* Generate the HTML for the current state of the date picker. */
// 	_generateHTML: function(inst) {
// 		var today = new Date();
// 		today = this._daylightSavingAdjust(
// 			new Date(today.getFullYear(), today.getMonth(), today.getDate())); // clear time
// 		var isRTL = this._get(inst, 'isRTL');
// 		var showButtonPanel = this._get(inst, 'showButtonPanel');
// 		var hideIfNoPrevNext = this._get(inst, 'hideIfNoPrevNext');
// 		var navigationAsDateFormat = this._get(inst, 'navigationAsDateFormat');
// 		var numMonths = this._getNumberOfMonths(inst);
// 		var showCurrentAtPos = this._get(inst, 'showCurrentAtPos');
// 		var stepMonths = this._get(inst, 'stepMonths');
// 		var isMultiMonth = (numMonths[0] != 1 || numMonths[1] != 1);
// 		var currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) :
// 			new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
// 		var minDate = this._getMinMaxDate(inst, 'min');
// 		var maxDate = this._getMinMaxDate(inst, 'max');
// 		var drawMonth = inst.drawMonth - showCurrentAtPos;
// 		var drawYear = inst.drawYear;
// 		if (drawMonth < 0) {
// 			drawMonth += 12;
// 			drawYear--;
// 		}
// 		if (maxDate) {
// 			var maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
// 				maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
// 			maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
// 			while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
// 				drawMonth--;
// 				if (drawMonth < 0) {
// 					drawMonth = 11;
// 					drawYear--;
// 				}
// 			}
// 		}
// 		inst.drawMonth = drawMonth;
// 		inst.drawYear = drawYear;
// 		var prevText = this._get(inst, 'prevText');
// 		prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
// 			this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
// 			this._getFormatConfig(inst)));
// 		var prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
// 			'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click"' +
// 			' title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>' :
// 			(hideIfNoPrevNext ? '' : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+ prevText +'"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>'));
// 		var nextText = this._get(inst, 'nextText');
// 		nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
// 			this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
// 			this._getFormatConfig(inst)));
// 		var next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
// 			'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click"' +
// 			' title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>' :
// 			(hideIfNoPrevNext ? '' : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+ nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>'));
// 		var currentText = this._get(inst, 'currentText');
// 		var gotoDate = (this._get(inst, 'gotoCurrent') && inst.currentDay ? currentDate : today);
// 		currentText = (!navigationAsDateFormat ? currentText :
// 			this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));
// 		var controls = (!inst.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' +
// 			this._get(inst, 'closeText') + '</button>' : '');
// 		var buttonPanel = (showButtonPanel) ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (isRTL ? controls : '') +
// 			(this._isInRange(inst, gotoDate) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click"' +
// 			'>' + currentText + '</button>' : '') + (isRTL ? '' : controls) + '</div>' : '';
// 		var firstDay = parseInt(this._get(inst, 'firstDay'),10);
// 		firstDay = (isNaN(firstDay) ? 0 : firstDay);
// 		var showWeek = this._get(inst, 'showWeek');
// 		var dayNames = this._get(inst, 'dayNames');
// 		var dayNamesShort = this._get(inst, 'dayNamesShort');
// 		var dayNamesMin = this._get(inst, 'dayNamesMin');
// 		var monthNames = this._get(inst, 'monthNames');
// 		var monthNamesShort = this._get(inst, 'monthNamesShort');
// 		var beforeShowDay = this._get(inst, 'beforeShowDay');
// 		var showOtherMonths = this._get(inst, 'showOtherMonths');
// 		var selectOtherMonths = this._get(inst, 'selectOtherMonths');
// 		var calculateWeek = this._get(inst, 'calculateWeek') || this.iso8601Week;
// 		var defaultDate = this._getDefaultDate(inst);
// 		var html = '';
// 		for (var row = 0; row < numMonths[0]; row++) {
// 			var group = '';
// 			this.maxRows = 4;
// 			for (var col = 0; col < numMonths[1]; col++) {
// 				var selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
// 				var cornerClass = ' ui-corner-all';
// 				var calender = '';
// 				if (isMultiMonth) {
// 					calender += '<div class="ui-datepicker-group';
// 					if (numMonths[1] > 1)
// 						switch (col) {
// 							case 0: calender += ' ui-datepicker-group-first';
// 								cornerClass = ' ui-corner-' + (isRTL ? 'right' : 'left'); break;
// 							case numMonths[1]-1: calender += ' ui-datepicker-group-last';
// 								cornerClass = ' ui-corner-' + (isRTL ? 'left' : 'right'); break;
// 							default: calender += ' ui-datepicker-group-middle'; cornerClass = ''; break;
// 						}
// 					calender += '">';
// 				}
// 				calender += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + cornerClass + '">' +
// 					(/all|left/.test(cornerClass) && row == 0 ? (isRTL ? next : prev) : '') +
// 					(/all|right/.test(cornerClass) && row == 0 ? (isRTL ? prev : next) : '') +
// 					this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
// 					row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
// 					'</div><table class="ui-datepicker-calendar"><thead>' +
// 					'<tr>';
// 				var thead = (showWeek ? '<th class="ui-datepicker-week-col">' + this._get(inst, 'weekHeader') + '</th>' : '');
// 				for (var dow = 0; dow < 7; dow++) { // days of the week
// 					var day = (dow + firstDay) % 7;
// 					thead += '<th' + ((dow + firstDay + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : '') + '>' +
// 						'<span title="' + dayNames[day] + '">' + dayNamesMin[day] + '</span></th>';
// 				}
// 				calender += thead + '</tr></thead><tbody>';
// 				var daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
// 				if (drawYear == inst.selectedYear && drawMonth == inst.selectedMonth)
// 					inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
// 				var leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
// 				var curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate
// 				var numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows); //If multiple months, use the higher number of rows (see #7043)
// 				this.maxRows = numRows;
// 				var printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
// 				for (var dRow = 0; dRow < numRows; dRow++) { // create date picker rows
// 					calender += '<tr>';
// 					var tbody = (!showWeek ? '' : '<td class="ui-datepicker-week-col">' +
// 						this._get(inst, 'calculateWeek')(printDate) + '</td>');
// 					for (var dow = 0; dow < 7; dow++) { // create date picker days
// 						var daySettings = (beforeShowDay ?
// 							beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, '']);
// 						var otherMonth = (printDate.getMonth() != drawMonth);
// 						var unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
// 							(minDate && printDate < minDate) || (maxDate && printDate > maxDate);
// 						tbody += '<td class="' +
// 							((dow + firstDay + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') + // highlight weekends
// 							(otherMonth ? ' ui-datepicker-other-month' : '') + // highlight days from other months
// 							((printDate.getTime() == selectedDate.getTime() && drawMonth == inst.selectedMonth && inst._keyEvent) || // user pressed key
// 							(defaultDate.getTime() == printDate.getTime() && defaultDate.getTime() == selectedDate.getTime()) ?
// 							// or defaultDate is current printedDate and defaultDate is selectedDate
// 							' ' + this._dayOverClass : '') + // highlight selected day
// 							(unselectable ? ' ' + this._unselectableClass + ' ui-state-disabled': '') +  // highlight unselectable days
// 							(otherMonth && !showOtherMonths ? '' : ' ' + daySettings[1] + // highlight custom dates
// 							(printDate.getTime() == currentDate.getTime() ? ' ' + this._currentClass : '') + // highlight selected day
// 							(printDate.getTime() == today.getTime() ? ' ui-datepicker-today' : '')) + '"' + // highlight today (if different)
// 							((!otherMonth || showOtherMonths) && daySettings[2] ? ' title="' + daySettings[2] + '"' : '') + // cell title
// 							(unselectable ? '' : ' data-handler="selectDay" data-event="click" data-month="' + printDate.getMonth() + '" data-year="' + printDate.getFullYear() + '"') + '>' + // actions
// 							(otherMonth && !showOtherMonths ? '&#xa0;' : // display for other months
// 							(unselectable ? '<span class="ui-state-default">' + printDate.getDate() + '</span>' : '<a class="ui-state-default' +
// 							(printDate.getTime() == today.getTime() ? ' ui-state-highlight' : '') +
// 							(printDate.getTime() == currentDate.getTime() ? ' ui-state-active' : '') + // highlight selected day
// 							(otherMonth ? ' ui-priority-secondary' : '') + // distinguish dates from other months
// 							'" href="#">' + printDate.getDate() + '</a>')) + '</td>'; // display selectable date
// 						printDate.setDate(printDate.getDate() + 1);
// 						printDate = this._daylightSavingAdjust(printDate);
// 					}
// 					calender += tbody + '</tr>';
// 				}
// 				drawMonth++;
// 				if (drawMonth > 11) {
// 					drawMonth = 0;
// 					drawYear++;
// 				}
// 				calender += '</tbody></table>' + (isMultiMonth ? '</div>' + 
// 							((numMonths[0] > 0 && col == numMonths[1]-1) ? '<div class="ui-datepicker-row-break"></div>' : '') : '');
// 				group += calender;
// 			}
// 			html += group;
// 		}
// 		html += buttonPanel + ($.browser.msie && parseInt($.browser.version,10) < 7 && !inst.inline ?
// 			'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : '');
// 		inst._keyEvent = false;
// 		return html;
// 	},

// 	/* Generate the month and year header. */
// 	_generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
// 			secondary, monthNames, monthNamesShort) {
// 		var changeMonth = this._get(inst, 'changeMonth');
// 		var changeYear = this._get(inst, 'changeYear');
// 		var showMonthAfterYear = this._get(inst, 'showMonthAfterYear');
// 		var html = '<div class="ui-datepicker-title">';
// 		var monthHtml = '';
// 		// month selection
// 		if (secondary || !changeMonth)
// 			monthHtml += '<span class="ui-datepicker-month">' + monthNames[drawMonth] + '</span>';
// 		else {
// 			var inMinYear = (minDate && minDate.getFullYear() == drawYear);
// 			var inMaxYear = (maxDate && maxDate.getFullYear() == drawYear);
// 			monthHtml += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
// 			for (var month = 0; month < 12; month++) {
// 				if ((!inMinYear || month >= minDate.getMonth()) &&
// 						(!inMaxYear || month <= maxDate.getMonth()))
// 					monthHtml += '<option value="' + month + '"' +
// 						(month == drawMonth ? ' selected="selected"' : '') +
// 						'>' + monthNamesShort[month] + '</option>';
// 			}
// 			monthHtml += '</select>';
// 		}
// 		if (!showMonthAfterYear)
// 			html += monthHtml + (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '');
// 		// year selection
// 		if ( !inst.yearshtml ) {
// 			inst.yearshtml = '';
// 			if (secondary || !changeYear)
// 				html += '<span class="ui-datepicker-year">' + drawYear + '</span>';
// 			else {
// 				// determine range of years to display
// 				var years = this._get(inst, 'yearRange').split(':');
// 				var thisYear = new Date().getFullYear();
// 				var determineYear = function(value) {
// 					var year = (value.match(/c[+-].*/) ? drawYear + parseInt(value.substring(1), 10) :
// 						(value.match(/[+-].*/) ? thisYear + parseInt(value, 10) :
// 						parseInt(value, 10)));
// 					return (isNaN(year) ? thisYear : year);
// 				};
// 				var year = determineYear(years[0]);
// 				var endYear = Math.max(year, determineYear(years[1] || ''));
// 				year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
// 				endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
// 				inst.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
// 				for (; year <= endYear; year++) {
// 					inst.yearshtml += '<option value="' + year + '"' +
// 						(year == drawYear ? ' selected="selected"' : '') +
// 						'>' + year + '</option>';
// 				}
// 				inst.yearshtml += '</select>';
				
// 				html += inst.yearshtml;
// 				inst.yearshtml = null;
// 			}
// 		}
// 		html += this._get(inst, 'yearSuffix');
// 		if (showMonthAfterYear)
// 			html += (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '') + monthHtml;
// 		html += '</div>'; // Close datepicker_header
// 		return html;
// 	},

// 	/* Adjust one of the date sub-fields. */
// 	_adjustInstDate: function(inst, offset, period) {
// 		var year = inst.drawYear + (period == 'Y' ? offset : 0);
// 		var month = inst.drawMonth + (period == 'M' ? offset : 0);
// 		var day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) +
// 			(period == 'D' ? offset : 0);
// 		var date = this._restrictMinMax(inst,
// 			this._daylightSavingAdjust(new Date(year, month, day)));
// 		inst.selectedDay = date.getDate();
// 		inst.drawMonth = inst.selectedMonth = date.getMonth();
// 		inst.drawYear = inst.selectedYear = date.getFullYear();
// 		if (period == 'M' || period == 'Y')
// 			this._notifyChange(inst);
// 	},

// 	/* Ensure a date is within any min/max bounds. */
// 	_restrictMinMax: function(inst, date) {
// 		var minDate = this._getMinMaxDate(inst, 'min');
// 		var maxDate = this._getMinMaxDate(inst, 'max');
// 		var newDate = (minDate && date < minDate ? minDate : date);
// 		newDate = (maxDate && newDate > maxDate ? maxDate : newDate);
// 		return newDate;
// 	},

// 	/* Notify change of month/year. */
// 	_notifyChange: function(inst) {
// 		var onChange = this._get(inst, 'onChangeMonthYear');
// 		if (onChange)
// 			onChange.apply((inst.input ? inst.input[0] : null),
// 				[inst.selectedYear, inst.selectedMonth + 1, inst]);
// 	},

// 	/* Determine the number of months to show. */
// 	_getNumberOfMonths: function(inst) {
// 		var numMonths = this._get(inst, 'numberOfMonths');
// 		return (numMonths == null ? [1, 1] : (typeof numMonths == 'number' ? [1, numMonths] : numMonths));
// 	},

// 	/* Determine the current maximum date - ensure no time components are set. */
// 	_getMinMaxDate: function(inst, minMax) {
// 		return this._determineDate(inst, this._get(inst, minMax + 'Date'), null);
// 	},

// 	/* Find the number of days in a given month. */
// 	_getDaysInMonth: function(year, month) {
// 		return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
// 	},

// 	/* Find the day of the week of the first of a month. */
// 	_getFirstDayOfMonth: function(year, month) {
// 		return new Date(year, month, 1).getDay();
// 	},

// 	/* Determines if we should allow a "next/prev" month display change. */
// 	_canAdjustMonth: function(inst, offset, curYear, curMonth) {
// 		var numMonths = this._getNumberOfMonths(inst);
// 		var date = this._daylightSavingAdjust(new Date(curYear,
// 			curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
// 		if (offset < 0)
// 			date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
// 		return this._isInRange(inst, date);
// 	},

// 	/* Is the given date in the accepted range? */
// 	_isInRange: function(inst, date) {
// 		var minDate = this._getMinMaxDate(inst, 'min');
// 		var maxDate = this._getMinMaxDate(inst, 'max');
// 		return ((!minDate || date.getTime() >= minDate.getTime()) &&
// 			(!maxDate || date.getTime() <= maxDate.getTime()));
// 	},

// 	/* Provide the configuration settings for formatting/parsing. */
// 	_getFormatConfig: function(inst) {
// 		var shortYearCutoff = this._get(inst, 'shortYearCutoff');
// 		shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
// 			new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
// 		return {shortYearCutoff: shortYearCutoff,
// 			dayNamesShort: this._get(inst, 'dayNamesShort'), dayNames: this._get(inst, 'dayNames'),
// 			monthNamesShort: this._get(inst, 'monthNamesShort'), monthNames: this._get(inst, 'monthNames')};
// 	},

// 	/* Format the given date for display. */
// 	_formatDate: function(inst, day, month, year) {
// 		if (!day) {
// 			inst.currentDay = inst.selectedDay;
// 			inst.currentMonth = inst.selectedMonth;
// 			inst.currentYear = inst.selectedYear;
// 		}
// 		var date = (day ? (typeof day == 'object' ? day :
// 			this._daylightSavingAdjust(new Date(year, month, day))) :
// 			this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
// 		return this.formatDate(this._get(inst, 'dateFormat'), date, this._getFormatConfig(inst));
// 	}
// });

// /*
//  * Bind hover events for datepicker elements.
//  * Done via delegate so the binding only occurs once in the lifetime of the parent div.
//  * Global instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
//  */ 
// function bindHover(dpDiv) {
// 	var selector = 'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
// 	return dpDiv.delegate(selector, 'mouseout', function() {
// 			$(this).removeClass('ui-state-hover');
// 			if (this.className.indexOf('ui-datepicker-prev') != -1) $(this).removeClass('ui-datepicker-prev-hover');
// 			if (this.className.indexOf('ui-datepicker-next') != -1) $(this).removeClass('ui-datepicker-next-hover');
// 		})
// 		.delegate(selector, 'mouseover', function(){
// 			if (!$.datepicker._isDisabledDatepicker( instActive.inline ? dpDiv.parent()[0] : instActive.input[0])) {
// 				$(this).parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover');
// 				$(this).addClass('ui-state-hover');
// 				if (this.className.indexOf('ui-datepicker-prev') != -1) $(this).addClass('ui-datepicker-prev-hover');
// 				if (this.className.indexOf('ui-datepicker-next') != -1) $(this).addClass('ui-datepicker-next-hover');
// 			}
// 		});
// }

// /* jQuery extend now ignores nulls! */
// function extendRemove(target, props) {
// 	$.extend(target, props);
// 	for (var name in props)
// 		if (props[name] == null || props[name] == undefined)
// 			target[name] = props[name];
// 	return target;
// };

// /* Invoke the datepicker functionality.
//    @param  options  string - a command, optionally followed by additional parameters or
// 	                Object - settings for attaching new datepicker functionality
//    @return  jQuery object */
// $.fn.datepicker = function(options){
	
// 	/* Verify an empty collection wasn't passed - Fixes #6976 */
// 	if ( !this.length ) {
// 		return this;
// 	}
	
// 	/* Initialise the date picker. */
// 	if (!$.datepicker.initialized) {
// 		$(document).mousedown($.datepicker._checkExternalClick).
// 			find(document.body).append($.datepicker.dpDiv);
// 		$.datepicker.initialized = true;
// 	}

// 	var otherArgs = Array.prototype.slice.call(arguments, 1);
// 	if (typeof options == 'string' && (options == 'isDisabled' || options == 'getDate' || options == 'widget'))
// 		return $.datepicker['_' + options + 'Datepicker'].
// 			apply($.datepicker, [this[0]].concat(otherArgs));
// 	if (options == 'option' && arguments.length == 2 && typeof arguments[1] == 'string')
// 		return $.datepicker['_' + options + 'Datepicker'].
// 			apply($.datepicker, [this[0]].concat(otherArgs));
// 	return this.each(function() {
// 		typeof options == 'string' ?
// 			$.datepicker['_' + options + 'Datepicker'].
// 				apply($.datepicker, [this].concat(otherArgs)) :
// 			$.datepicker._attachDatepicker(this, options);
// 	});
// };

// $.datepicker = new Datepicker(); // singleton instance
// $.datepicker.initialized = false;
// $.datepicker.uuid = new Date().getTime();
// $.datepicker.version = "1.9.0";

// // Workaround for #4055
// // Add another global to avoid noConflict issues with inline event handlers
// window['DP_jQuery_' + dpuuid] = $;

// })(jQuery);



// /*!
//  * jQuery UI Datepicker 1.9.0
//  * http://jqueryui.com
//  *
//  * Copyright 2012 jQuery Foundation and other contributors
//  * Released under the MIT license.
//  * http://jquery.org/license
//  *
//  * http://api.jqueryui.com/datepicker/
//  *
//  * Depends:
//  *	jquery.ui.core.js
//  */
// (function( $, undefined ) {

// $.extend($.ui, { datepicker: { version: "1.9.0" } });

// var PROP_NAME = 'datepicker';
// var dpuuid = new Date().getTime();
// var instActive;

// /* Date picker manager.
//    Use the singleton instance of this class, $.datepicker, to interact with the date picker.
//    Settings for (groups of) date pickers are maintained in an instance object,
//    allowing multiple different settings on the same page. */

// function Datepicker() {
// 	this.debug = false; // Change this to true to start debugging
// 	this._curInst = null; // The current instance in use
// 	this._keyEvent = false; // If the last event was a key event
// 	this._disabledInputs = []; // List of date picker inputs that have been disabled
// 	this._datepickerShowing = false; // True if the popup picker is showing , false if not
// 	this._inDialog = false; // True if showing within a "dialog", false if not
// 	this._mainDivId = 'ui-datepicker-div'; // The ID of the main datepicker division
// 	this._inlineClass = 'ui-datepicker-inline'; // The name of the inline marker class
// 	this._appendClass = 'ui-datepicker-append'; // The name of the append marker class
// 	this._triggerClass = 'ui-datepicker-trigger'; // The name of the trigger marker class
// 	this._dialogClass = 'ui-datepicker-dialog'; // The name of the dialog marker class
// 	this._disableClass = 'ui-datepicker-disabled'; // The name of the disabled covering marker class
// 	this._unselectableClass = 'ui-datepicker-unselectable'; // The name of the unselectable cell marker class
// 	this._currentClass = 'ui-datepicker-current-day'; // The name of the current day marker class
// 	this._dayOverClass = 'ui-datepicker-days-cell-over'; // The name of the day hover marker class
// 	this.regional = []; // Available regional settings, indexed by language code
// 	this.regional[''] = { // Default regional settings
// 		closeText: 'Done', // Display text for close link
// 		prevText: 'Prev', // Display text for previous month link
// 		nextText: 'Next', // Display text for next month link
// 		currentText: 'Today', // Display text for current month link
// 		monthNames: ['January','February','March','April','May','June',
// 			'July','August','September','October','November','December'], // Names of months for drop-down and formatting
// 		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // For formatting
// 		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], // For formatting
// 		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // For formatting
// 		dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'], // Column headings for days starting at Sunday
// 		weekHeader: 'Wk', // Column header for week of the year
// 		dateFormat: 'mm/dd/yy', // See format options on parseDate
// 		firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
// 		isRTL: false, // True if right-to-left language, false if left-to-right
// 		showMonthAfterYear: false, // True if the year select precedes month, false for month then year
// 		yearSuffix: '' // Additional text to append to the year in the month headers
// 	};
// 	this._defaults = { // Global defaults for all the date picker instances
// 		showOn: 'focus', // 'focus' for popup on focus,
// 			// 'button' for trigger button, or 'both' for either
// 		showAnim: 'fadeIn', // Name of jQuery animation for popup
// 		showOptions: {}, // Options for enhanced animations
// 		defaultDate: null, // Used when field is blank: actual date,
// 			// +/-number for offset from today, null for today
// 		appendText: '', // Display text following the input box, e.g. showing the format
// 		buttonText: '...', // Text for trigger button
// 		buttonImage: '', // URL for trigger button image
// 		buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
// 		hideIfNoPrevNext: false, // True to hide next/previous month links
// 			// if not applicable, false to just disable them
// 		navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
// 		gotoCurrent: false, // True if today link goes back to current selection instead
// 		changeMonth: false, // True if month can be selected directly, false if only prev/next
// 		changeYear: false, // True if year can be selected directly, false if only prev/next
// 		yearRange: 'c-10:c+10', // Range of years to display in drop-down,
// 			// either relative to today's year (-nn:+nn), relative to currently displayed year
// 			// (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
// 		showOtherMonths: false, // True to show dates in other months, false to leave blank
// 		selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
// 		showWeek: false, // True to show week of the year, false to not show it
// 		calculateWeek: this.iso8601Week, // How to calculate the week of the year,
// 			// takes a Date and returns the number of the week for it
// 		shortYearCutoff: '+10', // Short year values < this are in the current century,
// 			// > this are in the previous century,
// 			// string value starting with '+' for current year + value
// 		minDate: null, // The earliest selectable date, or null for no limit
// 		maxDate: null, // The latest selectable date, or null for no limit
// 		duration: 'fast', // Duration of display/closure
// 		beforeShowDay: null, // Function that takes a date and returns an array with
// 			// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or '',
// 			// [2] = cell title (optional), e.g. $.datepicker.noWeekends
// 		beforeShow: null, // Function that takes an input field and
// 			// returns a set of custom settings for the date picker
// 		onSelect: null, // Define a callback function when a date is selected
// 		onChangeMonthYear: null, // Define a callback function when the month or year is changed
// 		onClose: null, // Define a callback function when the datepicker is closed
// 		numberOfMonths: 1, // Number of months to show at a time
// 		showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
// 		stepMonths: 1, // Number of months to step back/forward
// 		stepBigMonths: 12, // Number of months to step back/forward for the big links
// 		altField: '', // Selector for an alternate field to store selected dates into
// 		altFormat: '', // The date format to use for the alternate field
// 		constrainInput: true, // The input is constrained by the current date format
// 		showButtonPanel: false, // True to show button panel, false to not show it
// 		autoSize: false, // True to size the input for the date format, false to leave as is
// 		disabled: false // The initial disabled state
// 	};
// 	$.extend(this._defaults, this.regional['']);
// 	this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'));
// }

// $.extend(Datepicker.prototype, {
// 	/* Class name added to elements to indicate already configured with a date picker. */
// 	markerClassName: 'hasDatepicker',
	
// 	//Keep track of the maximum number of rows displayed (see #7043)
// 	maxRows: 4,

// 	/* Debug logging (if enabled). */
// 	log: function () {
// 		if (this.debug)
// 			console.log.apply('', arguments);
// 	},
	
// 	// TODO rename to "widget" when switching to widget factory
// 	_widgetDatepicker: function() {
// 		return this.dpDiv;
// 	},

// 	/* Override the default settings for all instances of the date picker.
// 	   @param  settings  object - the new settings to use as defaults (anonymous object)
// 	   @return the manager object */
// 	setDefaults: function(settings) {
// 		extendRemove(this._defaults, settings || {});
// 		return this;
// 	},

// 	/* Attach the date picker to a jQuery selection.
// 	   @param  target    element - the target input field or division or span
// 	   @param  settings  object - the new settings to use for this date picker instance (anonymous) */
// 	_attachDatepicker: function(target, settings) {
// 		// check for settings on the control itself - in namespace 'date:'
// 		var inlineSettings = null;
// 		for (var attrName in this._defaults) {
// 			var attrValue = target.getAttribute('date:' + attrName);
// 			if (attrValue) {
// 				inlineSettings = inlineSettings || {};
// 				try {
// 					inlineSettings[attrName] = eval(attrValue);
// 				} catch (err) {
// 					inlineSettings[attrName] = attrValue;
// 				}
// 			}
// 		}
// 		var nodeName = target.nodeName.toLowerCase();
// 		var inline = (nodeName == 'div' || nodeName == 'span');
// 		if (!target.id) {
// 			this.uuid += 1;
// 			target.id = 'dp' + this.uuid;
// 		}
// 		var inst = this._newInst($(target), inline);
// 		inst.settings = $.extend({}, settings || {}, inlineSettings || {});
// 		if (nodeName == 'input') {
// 			this._connectDatepicker(target, inst);
// 		} else if (inline) {
// 			this._inlineDatepicker(target, inst);
// 		}
// 	},

// 	/* Create a new instance object. */
// 	_newInst: function(target, inline) {
// 		var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1'); // escape jQuery meta chars
// 		return {id: id, input: target, // associated target
// 			selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
// 			drawMonth: 0, drawYear: 0, // month being drawn
// 			inline: inline, // is datepicker inline or not
// 			dpDiv: (!inline ? this.dpDiv : // presentation div
// 			bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')))};
// 	},

// 	/* Attach the date picker to an input field. */
// 	_connectDatepicker: function(target, inst) {
// 		var input = $(target);
// 		inst.append = $([]);
// 		inst.trigger = $([]);
// 		if (input.hasClass(this.markerClassName))
// 			return;
// 		this._attachments(input, inst);
// 		input.addClass(this.markerClassName).keydown(this._doKeyDown).
// 			keypress(this._doKeyPress).keyup(this._doKeyUp).
// 			bind("setData.datepicker", function(event, key, value) {
// 				inst.settings[key] = value;
// 			}).bind("getData.datepicker", function(event, key) {
// 				return this._get(inst, key);
// 			});
// 		this._autoSize(inst);
// 		$.data(target, PROP_NAME, inst);
// 		//If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
// 		if( inst.settings.disabled ) {
// 			this._disableDatepicker( target );
// 		}
// 	},

// 	/* Make attachments based on settings. */
// 	_attachments: function(input, inst) {
// 		var appendText = this._get(inst, 'appendText');
// 		var isRTL = this._get(inst, 'isRTL');
// 		if (inst.append)
// 			inst.append.remove();
// 		if (appendText) {
// 			inst.append = $('<span class="' + this._appendClass + '">' + appendText + '</span>');
// 			input[isRTL ? 'before' : 'after'](inst.append);
// 		}
// 		input.unbind('focus', this._showDatepicker);
// 		if (inst.trigger)
// 			inst.trigger.remove();
// 		var showOn = this._get(inst, 'showOn');
// 		if (showOn == 'focus' || showOn == 'both') // pop-up date picker when in the marked field
// 			input.focus(this._showDatepicker);
// 		if (showOn == 'button' || showOn == 'both') { // pop-up date picker when button clicked
// 			var buttonText = this._get(inst, 'buttonText');
// 			var buttonImage = this._get(inst, 'buttonImage');
// 			inst.trigger = $(this._get(inst, 'buttonImageOnly') ?
// 				$('<img/>').addClass(this._triggerClass).
// 					attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
// 				$('<button type="button"></button>').addClass(this._triggerClass).
// 					html(buttonImage == '' ? buttonText : $('<img/>').attr(
// 					{ src:buttonImage, alt:buttonText, title:buttonText })));
// 			input[isRTL ? 'before' : 'after'](inst.trigger);
// 			inst.trigger.click(function() {
// 				if ($.datepicker._datepickerShowing && $.datepicker._lastInput == input[0])
// 					$.datepicker._hideDatepicker();
// 				else if ($.datepicker._datepickerShowing && $.datepicker._lastInput != input[0]) {
// 					$.datepicker._hideDatepicker(); 
// 					$.datepicker._showDatepicker(input[0]);
// 				} else
// 					$.datepicker._showDatepicker(input[0]);
// 				return false;
// 			});
// 		}
// 	},

// 	/* Apply the maximum length for the date format. */
// 	_autoSize: function(inst) {
// 		if (this._get(inst, 'autoSize') && !inst.inline) {
// 			var date = new Date(2009, 12 - 1, 20); // Ensure double digits
// 			var dateFormat = this._get(inst, 'dateFormat');
// 			if (dateFormat.match(/[DM]/)) {
// 				var findMax = function(names) {
// 					var max = 0;
// 					var maxI = 0;
// 					for (var i = 0; i < names.length; i++) {
// 						if (names[i].length > max) {
// 							max = names[i].length;
// 							maxI = i;
// 						}
// 					}
// 					return maxI;
// 				};
// 				date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
// 					'monthNames' : 'monthNamesShort'))));
// 				date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
// 					'dayNames' : 'dayNamesShort'))) + 20 - date.getDay());
// 			}
// 			inst.input.attr('size', this._formatDate(inst, date).length);
// 		}
// 	},

// 	/* Attach an inline date picker to a div. */
// 	_inlineDatepicker: function(target, inst) {
// 		var divSpan = $(target);
// 		if (divSpan.hasClass(this.markerClassName))
// 			return;
// 		divSpan.addClass(this.markerClassName).append(inst.dpDiv).
// 			bind("setData.datepicker", function(event, key, value){
// 				inst.settings[key] = value;
// 			}).bind("getData.datepicker", function(event, key){
// 				return this._get(inst, key);
// 			});
// 		$.data(target, PROP_NAME, inst);
// 		this._setDate(inst, this._getDefaultDate(inst), true);
// 		this._updateDatepicker(inst);
// 		this._updateAlternate(inst);
// 		//If disabled option is true, disable the datepicker before showing it (see ticket #5665)
// 		if( inst.settings.disabled ) {
// 			this._disableDatepicker( target );
// 		}
// 		// Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
// 		// http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
// 		inst.dpDiv.css( "display", "block" );
// 	},

// 	/* Pop-up the date picker in a "dialog" box.
// 	   @param  input     element - ignored
// 	   @param  date      string or Date - the initial date to display
// 	   @param  onSelect  function - the function to call when a date is selected
// 	   @param  settings  object - update the dialog date picker instance's settings (anonymous object)
// 	   @param  pos       int[2] - coordinates for the dialog's position within the screen or
// 	                     event - with x/y coordinates or
// 	                     leave empty for default (screen centre)
// 	   @return the manager object */
// 	_dialogDatepicker: function(input, date, onSelect, settings, pos) {
// 		var inst = this._dialogInst; // internal instance
// 		if (!inst) {
// 			this.uuid += 1;
// 			var id = 'dp' + this.uuid;
// 			this._dialogInput = $('<input type="text" id="' + id +
// 				'" style="position: absolute; top: -100px; width: 0px;"/>');
// 			this._dialogInput.keydown(this._doKeyDown);
// 			$('body').append(this._dialogInput);
// 			inst = this._dialogInst = this._newInst(this._dialogInput, false);
// 			inst.settings = {};
// 			$.data(this._dialogInput[0], PROP_NAME, inst);
// 		}
// 		extendRemove(inst.settings, settings || {});
// 		date = (date && date.constructor == Date ? this._formatDate(inst, date) : date);
// 		this._dialogInput.val(date);

// 		this._pos = (pos ? (pos.length ? pos : [pos.pageX, pos.pageY]) : null);
// 		if (!this._pos) {
// 			var browserWidth = document.documentElement.clientWidth;
// 			var browserHeight = document.documentElement.clientHeight;
// 			var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
// 			var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
// 			this._pos = // should use actual width/height below
// 				[(browserWidth / 2) - 100 + scrollX, (browserHeight / 2) - 150 + scrollY];
// 		}

// 		// move input on screen for focus, but hidden behind dialog
// 		this._dialogInput.css('left', (this._pos[0] + 20) + 'px').css('top', this._pos[1] + 'px');
// 		inst.settings.onSelect = onSelect;
// 		this._inDialog = true;
// 		this.dpDiv.addClass(this._dialogClass);
// 		this._showDatepicker(this._dialogInput[0]);
// 		if ($.blockUI)
// 			$.blockUI(this.dpDiv);
// 		$.data(this._dialogInput[0], PROP_NAME, inst);
// 		return this;
// 	},

// 	/* Detach a datepicker from its control.
// 	   @param  target    element - the target input field or division or span */
// 	_destroyDatepicker: function(target) {
// 		var $target = $(target);
// 		var inst = $.data(target, PROP_NAME);
// 		if (!$target.hasClass(this.markerClassName)) {
// 			return;
// 		}
// 		var nodeName = target.nodeName.toLowerCase();
// 		$.removeData(target, PROP_NAME);
// 		if (nodeName == 'input') {
// 			inst.append.remove();
// 			inst.trigger.remove();
// 			$target.removeClass(this.markerClassName).
// 				unbind('focus', this._showDatepicker).
// 				unbind('keydown', this._doKeyDown).
// 				unbind('keypress', this._doKeyPress).
// 				unbind('keyup', this._doKeyUp);
// 		} else if (nodeName == 'div' || nodeName == 'span')
// 			$target.removeClass(this.markerClassName).empty();
// 	},

// 	/* Enable the date picker to a jQuery selection.
// 	   @param  target    element - the target input field or division or span */
// 	_enableDatepicker: function(target) {
// 		var $target = $(target);
// 		var inst = $.data(target, PROP_NAME);
// 		if (!$target.hasClass(this.markerClassName)) {
// 			return;
// 		}
// 		var nodeName = target.nodeName.toLowerCase();
// 		if (nodeName == 'input') {
// 			target.disabled = false;
// 			inst.trigger.filter('button').
// 				each(function() { this.disabled = false; }).end().
// 				filter('img').css({opacity: '1.0', cursor: ''});
// 		}
// 		else if (nodeName == 'div' || nodeName == 'span') {
// 			var inline = $target.children('.' + this._inlineClass);
// 			inline.children().removeClass('ui-state-disabled');
// 			inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
// 				prop("disabled", false);
// 		}
// 		this._disabledInputs = $.map(this._disabledInputs,
// 			function(value) { return (value == target ? null : value); }); // delete entry
// 	},

// 	/* Disable the date picker to a jQuery selection.
// 	   @param  target    element - the target input field or division or span */
// 	_disableDatepicker: function(target) {
// 		var $target = $(target);
// 		var inst = $.data(target, PROP_NAME);
// 		if (!$target.hasClass(this.markerClassName)) {
// 			return;
// 		}
// 		var nodeName = target.nodeName.toLowerCase();
// 		if (nodeName == 'input') {
// 			target.disabled = true;
// 			inst.trigger.filter('button').
// 				each(function() { this.disabled = true; }).end().
// 				filter('img').css({opacity: '0.5', cursor: 'default'});
// 		}
// 		else if (nodeName == 'div' || nodeName == 'span') {
// 			var inline = $target.children('.' + this._inlineClass);
// 			inline.children().addClass('ui-state-disabled');
// 			inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
// 				prop("disabled", true);
// 		}
// 		this._disabledInputs = $.map(this._disabledInputs,
// 			function(value) { return (value == target ? null : value); }); // delete entry
// 		this._disabledInputs[this._disabledInputs.length] = target;
// 	},

// 	/* Is the first field in a jQuery collection disabled as a datepicker?
// 	   @param  target    element - the target input field or division or span
// 	   @return boolean - true if disabled, false if enabled */
// 	_isDisabledDatepicker: function(target) {
// 		if (!target) {
// 			return false;
// 		}
// 		for (var i = 0; i < this._disabledInputs.length; i++) {
// 			if (this._disabledInputs[i] == target)
// 				return true;
// 		}
// 		return false;
// 	},

// 	/* Retrieve the instance data for the target control.
// 	   @param  target  element - the target input field or division or span
// 	   @return  object - the associated instance data
// 	   @throws  error if a jQuery problem getting data */
// 	_getInst: function(target) {
// 		try {
// 			return $.data(target, PROP_NAME);
// 		}
// 		catch (err) {
// 			throw 'Missing instance data for this datepicker';
// 		}
// 	},

// 	/* Update or retrieve the settings for a date picker attached to an input field or division.
// 	   @param  target  element - the target input field or division or span
// 	   @param  name    object - the new settings to update or
// 	                   string - the name of the setting to change or retrieve,
// 	                   when retrieving also 'all' for all instance settings or
// 	                   'defaults' for all global defaults
// 	   @param  value   any - the new value for the setting
// 	                   (omit if above is an object or to retrieve a value) */
// 	_optionDatepicker: function(target, name, value) {
// 		var inst = this._getInst(target);
// 		if (arguments.length == 2 && typeof name == 'string') {
// 			return (name == 'defaults' ? $.extend({}, $.datepicker._defaults) :
// 				(inst ? (name == 'all' ? $.extend({}, inst.settings) :
// 				this._get(inst, name)) : null));
// 		}
// 		var settings = name || {};
// 		if (typeof name == 'string') {
// 			settings = {};
// 			settings[name] = value;
// 		}
// 		if (inst) {
// 			if (this._curInst == inst) {
// 				this._hideDatepicker();
// 			}
// 			var date = this._getDateDatepicker(target, true);
// 			var minDate = this._getMinMaxDate(inst, 'min');
// 			var maxDate = this._getMinMaxDate(inst, 'max');
// 			extendRemove(inst.settings, settings);
// 			// reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
// 			if (minDate !== null && settings['dateFormat'] !== undefined && settings['minDate'] === undefined)
// 				inst.settings.minDate = this._formatDate(inst, minDate);
// 			if (maxDate !== null && settings['dateFormat'] !== undefined && settings['maxDate'] === undefined)
// 				inst.settings.maxDate = this._formatDate(inst, maxDate);
// 			this._attachments($(target), inst);
// 			this._autoSize(inst);
// 			this._setDate(inst, date);
// 			this._updateAlternate(inst);
// 			this._updateDatepicker(inst);
// 		}
// 	},

// 	// change method deprecated
// 	_changeDatepicker: function(target, name, value) {
// 		this._optionDatepicker(target, name, value);
// 	},

// 	/* Redraw the date picker attached to an input field or division.
// 	   @param  target  element - the target input field or division or span */
// 	_refreshDatepicker: function(target) {
// 		var inst = this._getInst(target);
// 		if (inst) {
// 			this._updateDatepicker(inst);
// 		}
// 	},

// 	/* Set the dates for a jQuery selection.
// 	   @param  target   element - the target input field or division or span
// 	   @param  date     Date - the new date */
// 	_setDateDatepicker: function(target, date) {
// 		var inst = this._getInst(target);
// 		if (inst) {
// 			this._setDate(inst, date);
// 			this._updateDatepicker(inst);
// 			this._updateAlternate(inst);
// 		}
// 	},

// 	/* Get the date(s) for the first entry in a jQuery selection.
// 	   @param  target     element - the target input field or division or span
// 	   @param  noDefault  boolean - true if no default date is to be used
// 	   @return Date - the current date */
// 	_getDateDatepicker: function(target, noDefault) {
// 		var inst = this._getInst(target);
// 		if (inst && !inst.inline)
// 			this._setDateFromField(inst, noDefault);
// 		return (inst ? this._getDate(inst) : null);
// 	},

// 	/* Handle keystrokes. */
// 	_doKeyDown: function(event) {
// 		var inst = $.datepicker._getInst(event.target);
// 		var handled = true;
// 		var isRTL = inst.dpDiv.is('.ui-datepicker-rtl');
// 		inst._keyEvent = true;
// 		if ($.datepicker._datepickerShowing)
// 			switch (event.keyCode) {
// 				case 9: $.datepicker._hideDatepicker();
// 						handled = false;
// 						break; // hide on tab out
// 				case 13: var sel = $('td.' + $.datepicker._dayOverClass + ':not(.' + 
// 									$.datepicker._currentClass + ')', inst.dpDiv);
// 						if (sel[0])
// 							$.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
// 							var onSelect = $.datepicker._get(inst, 'onSelect');
// 							if (onSelect) {
// 								var dateStr = $.datepicker._formatDate(inst);

// 								// trigger custom callback
// 								onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);
// 							}
// 						else
// 							$.datepicker._hideDatepicker();
// 						return false; // don't submit the form
// 						break; // select the value on enter
// 				case 27: $.datepicker._hideDatepicker();
// 						break; // hide on escape
// 				case 33: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
// 							-$.datepicker._get(inst, 'stepBigMonths') :
// 							-$.datepicker._get(inst, 'stepMonths')), 'M');
// 						break; // previous month/year on page up/+ ctrl
// 				case 34: $.datepicker._adjustDate(event.target, (event.ctrlKey ?
// 							+$.datepicker._get(inst, 'stepBigMonths') :
// 							+$.datepicker._get(inst, 'stepMonths')), 'M');
// 						break; // next month/year on page down/+ ctrl
// 				case 35: if (event.ctrlKey || event.metaKey) $.datepicker._clearDate(event.target);
// 						handled = event.ctrlKey || event.metaKey;
// 						break; // clear on ctrl or command +end
// 				case 36: if (event.ctrlKey || event.metaKey) $.datepicker._gotoToday(event.target);
// 						handled = event.ctrlKey || event.metaKey;
// 						break; // current on ctrl or command +home
// 				case 37: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? +1 : -1), 'D');
// 						handled = event.ctrlKey || event.metaKey;
// 						// -1 day on ctrl or command +left
// 						if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
// 									-$.datepicker._get(inst, 'stepBigMonths') :
// 									-$.datepicker._get(inst, 'stepMonths')), 'M');
// 						// next month/year on alt +left on Mac
// 						break;
// 				case 38: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, -7, 'D');
// 						handled = event.ctrlKey || event.metaKey;
// 						break; // -1 week on ctrl or command +up
// 				case 39: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, (isRTL ? -1 : +1), 'D');
// 						handled = event.ctrlKey || event.metaKey;
// 						// +1 day on ctrl or command +right
// 						if (event.originalEvent.altKey) $.datepicker._adjustDate(event.target, (event.ctrlKey ?
// 									+$.datepicker._get(inst, 'stepBigMonths') :
// 									+$.datepicker._get(inst, 'stepMonths')), 'M');
// 						// next month/year on alt +right
// 						break;
// 				case 40: if (event.ctrlKey || event.metaKey) $.datepicker._adjustDate(event.target, +7, 'D');
// 						handled = event.ctrlKey || event.metaKey;
// 						break; // +1 week on ctrl or command +down
// 				default: handled = false;
// 			}
// 		else if (event.keyCode == 36 && event.ctrlKey) // display the date picker on ctrl+home
// 			$.datepicker._showDatepicker(this);
// 		else {
// 			handled = false;
// 		}
// 		if (handled) {
// 			event.preventDefault();
// 			event.stopPropagation();
// 		}
// 	},

// 	/* Filter entered characters - based on date format. */
// 	_doKeyPress: function(event) {
// 		var inst = $.datepicker._getInst(event.target);
// 		if ($.datepicker._get(inst, 'constrainInput')) {
// 			var chars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat'));
// 			var chr = String.fromCharCode(event.charCode == undefined ? event.keyCode : event.charCode);
// 			return event.ctrlKey || event.metaKey || (chr < ' ' || !chars || chars.indexOf(chr) > -1);
// 		}
// 	},

// 	/* Synchronise manual entry and field/alternate field. */
// 	_doKeyUp: function(event) {
// 		var inst = $.datepicker._getInst(event.target);
// 		if (inst.input.val() != inst.lastVal) {
// 			try {
// 				var date = $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'),
// 					(inst.input ? inst.input.val() : null),
// 					$.datepicker._getFormatConfig(inst));
// 				if (date) { // only if valid
// 					$.datepicker._setDateFromField(inst);
// 					$.datepicker._updateAlternate(inst);
// 					$.datepicker._updateDatepicker(inst);
// 				}
// 			}
// 			catch (err) {
// 				$.datepicker.log(err);
// 			}
// 		}
// 		return true;
// 	},

// 	/* Pop-up the date picker for a given input field.
// 	   If false returned from beforeShow event handler do not show. 
// 	   @param  input  element - the input field attached to the date picker or
// 	                  event - if triggered by focus */
// 	_showDatepicker: function(input) {
// 		input = input.target || input;
// 		if (input.nodeName.toLowerCase() != 'input') // find from button/image trigger
// 			input = $('input', input.parentNode)[0];
// 		if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput == input) // already here
// 			return;
// 		var inst = $.datepicker._getInst(input);
// 		if ($.datepicker._curInst && $.datepicker._curInst != inst) {
// 			$.datepicker._curInst.dpDiv.stop(true, true);
// 			if ( inst && $.datepicker._datepickerShowing ) {
// 				$.datepicker._hideDatepicker( $.datepicker._curInst.input[0] );
// 			}
// 		}
// 		var beforeShow = $.datepicker._get(inst, 'beforeShow');
// 		var beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
// 		if(beforeShowSettings === false){
// 			//false
// 			return;
// 		}
// 		extendRemove(inst.settings, beforeShowSettings);
// 		inst.lastVal = null;
// 		$.datepicker._lastInput = input;
// 		$.datepicker._setDateFromField(inst);
// 		if ($.datepicker._inDialog) // hide cursor
// 			input.value = '';
// 		if (!$.datepicker._pos) { // position below input
// 			$.datepicker._pos = $.datepicker._findPos(input);
// 			$.datepicker._pos[1] += input.offsetHeight; // add the height
// 		}
// 		var isFixed = false;
// 		$(input).parents().each(function() {
// 			isFixed |= $(this).css('position') == 'fixed';
// 			return !isFixed;
// 		});
// 		var offset = {left: $.datepicker._pos[0], top: $.datepicker._pos[1]};
// 		$.datepicker._pos = null;
// 		//to avoid flashes on Firefox
// 		inst.dpDiv.empty();
// 		// determine sizing offscreen
// 		inst.dpDiv.css({position: 'absolute', display: 'block', top: '-1000px'});
// 		$.datepicker._updateDatepicker(inst);
// 		// fix width for dynamic number of date pickers
// 		// and adjust position before showing
// 		offset = $.datepicker._checkOffset(inst, offset, isFixed);
// 		inst.dpDiv.css({position: ($.datepicker._inDialog && $.blockUI ?
// 			'static' : (isFixed ? 'fixed' : 'absolute')), display: 'none',
// 			left: offset.left + 'px', top: offset.top + 'px'});
// 		if (!inst.inline) {
// 			var showAnim = $.datepicker._get(inst, 'showAnim');
// 			var duration = $.datepicker._get(inst, 'duration');
// 			var postProcess = function() {
// 				var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
// 				if( !! cover.length ){
// 					var borders = $.datepicker._getBorders(inst.dpDiv);
// 					cover.css({left: -borders[0], top: -borders[1],
// 						width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()});
// 				}
// 			};
// 			inst.dpDiv.zIndex($(input).zIndex()+1);
// 			$.datepicker._datepickerShowing = true;

// 			// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
// 			if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) )
// 				inst.dpDiv.show(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
// 			else
// 				inst.dpDiv[showAnim || 'show']((showAnim ? duration : null), postProcess);
// 			if (!showAnim || !duration)
// 				postProcess();
// 			if (inst.input.is(':visible') && !inst.input.is(':disabled'))
// 				inst.input.focus();
// 			$.datepicker._curInst = inst;
// 		}
// 	},

// 	/* Generate the date picker content. */
// 	_updateDatepicker: function(inst) {
// 		this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
// 		var borders = $.datepicker._getBorders(inst.dpDiv);
// 		instActive = inst; // for delegate hover events
// 		inst.dpDiv.empty().append(this._generateHTML(inst));
// 		this._attachHandlers(inst);
// 		var cover = inst.dpDiv.find('iframe.ui-datepicker-cover'); // IE6- only
// 		if( !!cover.length ){ //avoid call to outerXXXX() when not in IE6
// 			cover.css({left: -borders[0], top: -borders[1], width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()})
// 		}
// 		inst.dpDiv.find('.' + this._dayOverClass + ' a').mouseover();
// 		var numMonths = this._getNumberOfMonths(inst);
// 		var cols = numMonths[1];
// 		var width = 17;
// 		inst.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width('');
// 		if (cols > 1)
// 			inst.dpDiv.addClass('ui-datepicker-multi-' + cols).css('width', (width * cols) + 'em');
// 		inst.dpDiv[(numMonths[0] != 1 || numMonths[1] != 1 ? 'add' : 'remove') +
// 			'Class']('ui-datepicker-multi');
// 		inst.dpDiv[(this._get(inst, 'isRTL') ? 'add' : 'remove') +
// 			'Class']('ui-datepicker-rtl');
// 		if (inst == $.datepicker._curInst && $.datepicker._datepickerShowing && inst.input &&
// 				// #6694 - don't focus the input if it's already focused
// 				// this breaks the change event in IE
// 				inst.input.is(':visible') && !inst.input.is(':disabled') && inst.input[0] != document.activeElement)
// 			inst.input.focus();
// 		// deffered render of the years select (to avoid flashes on Firefox) 
// 		if( inst.yearshtml ){
// 			var origyearshtml = inst.yearshtml;
// 			setTimeout(function(){
// 				//assure that inst.yearshtml didn't change.
// 				if( origyearshtml === inst.yearshtml && inst.yearshtml ){
// 					inst.dpDiv.find('select.ui-datepicker-year:first').replaceWith(inst.yearshtml);
// 				}
// 				origyearshtml = inst.yearshtml = null;
// 			}, 0);
// 		}
// 	},

// 	/* Retrieve the size of left and top borders for an element.
// 	   @param  elem  (jQuery object) the element of interest
// 	   @return  (number[2]) the left and top borders */
// 	_getBorders: function(elem) {
// 		var convert = function(value) {
// 			return {thin: 1, medium: 2, thick: 3}[value] || value;
// 		};
// 		return [parseFloat(convert(elem.css('border-left-width'))),
// 			parseFloat(convert(elem.css('border-top-width')))];
// 	},

// 	/* Check positioning to remain on screen. */
// 	_checkOffset: function(inst, offset, isFixed) {
// 		var dpWidth = inst.dpDiv.outerWidth();
// 		var dpHeight = inst.dpDiv.outerHeight();
// 		var inputWidth = inst.input ? inst.input.outerWidth() : 0;
// 		var inputHeight = inst.input ? inst.input.outerHeight() : 0;
// 		var viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft());
// 		var viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());

// 		offset.left -= (this._get(inst, 'isRTL') ? (dpWidth - inputWidth) : 0);
// 		offset.left -= (isFixed && offset.left == inst.input.offset().left) ? $(document).scrollLeft() : 0;
// 		offset.top -= (isFixed && offset.top == (inst.input.offset().top + inputHeight)) ? $(document).scrollTop() : 0;

// 		// now check if datepicker is showing outside window viewport - move to a better place if so.
// 		offset.left -= Math.min(offset.left, (offset.left + dpWidth > viewWidth && viewWidth > dpWidth) ?
// 			Math.abs(offset.left + dpWidth - viewWidth) : 0);
// 		offset.top -= Math.min(offset.top, (offset.top + dpHeight > viewHeight && viewHeight > dpHeight) ?
// 			Math.abs(dpHeight + inputHeight) : 0);

// 		return offset;
// 	},

// 	/* Find an object's position on the screen. */
// 	_findPos: function(obj) {
// 		var inst = this._getInst(obj);
// 		var isRTL = this._get(inst, 'isRTL');
// 		while (obj && (obj.type == 'hidden' || obj.nodeType != 1 || $.expr.filters.hidden(obj))) {
// 			obj = obj[isRTL ? 'previousSibling' : 'nextSibling'];
// 		}
// 		var position = $(obj).offset();
// 		return [position.left, position.top];
// 	},

// 	/* Hide the date picker from view.
// 	   @param  input  element - the input field attached to the date picker */
// 	_hideDatepicker: function(input) {
// 		var inst = this._curInst;
// 		if (!inst || (input && inst != $.data(input, PROP_NAME)))
// 			return;
// 		if (this._datepickerShowing) {
// 			var showAnim = this._get(inst, 'showAnim');
// 			var duration = this._get(inst, 'duration');
// 			var postProcess = function() {
// 				$.datepicker._tidyDialog(inst);
// 			};

// 			// DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
// 			if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) )
// 				inst.dpDiv.hide(showAnim, $.datepicker._get(inst, 'showOptions'), duration, postProcess);
// 			else
// 				inst.dpDiv[(showAnim == 'slideDown' ? 'slideUp' :
// 					(showAnim == 'fadeIn' ? 'fadeOut' : 'hide'))]((showAnim ? duration : null), postProcess);
// 			if (!showAnim)
// 				postProcess();
// 			this._datepickerShowing = false;
// 			var onClose = this._get(inst, 'onClose');
// 			if (onClose)
// 				onClose.apply((inst.input ? inst.input[0] : null),
// 					[(inst.input ? inst.input.val() : ''), inst]);
// 			this._lastInput = null;
// 			if (this._inDialog) {
// 				this._dialogInput.css({ position: 'absolute', left: '0', top: '-100px' });
// 				if ($.blockUI) {
// 					$.unblockUI();
// 					$('body').append(this.dpDiv);
// 				}
// 			}
// 			this._inDialog = false;
// 		}
// 	},

// 	/* Tidy up after a dialog display. */
// 	_tidyDialog: function(inst) {
// 		inst.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar');
// 	},

// 	/* Close date picker if clicked elsewhere. */
// 	_checkExternalClick: function(event) {
// 		if (!$.datepicker._curInst)
// 			return;

// 		var $target = $(event.target),
// 			inst = $.datepicker._getInst($target[0]);

// 		if ( ( ( $target[0].id != $.datepicker._mainDivId &&
// 				$target.parents('#' + $.datepicker._mainDivId).length == 0 &&
// 				!$target.hasClass($.datepicker.markerClassName) &&
// 				!$target.closest("." + $.datepicker._triggerClass).length &&
// 				$.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI) ) ) ||
// 			( $target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != inst ) )
// 			$.datepicker._hideDatepicker();
// 	},

// 	/* Adjust one of the date sub-fields. */
// 	_adjustDate: function(id, offset, period) {
// 		var target = $(id);
// 		var inst = this._getInst(target[0]);
// 		if (this._isDisabledDatepicker(target[0])) {
// 			return;
// 		}
// 		this._adjustInstDate(inst, offset +
// 			(period == 'M' ? this._get(inst, 'showCurrentAtPos') : 0), // undo positioning
// 			period);
// 		this._updateDatepicker(inst);
// 	},

// 	/* Action for current link. */
// 	_gotoToday: function(id) {
// 		var target = $(id);
// 		var inst = this._getInst(target[0]);
// 		if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
// 			inst.selectedDay = inst.currentDay;
// 			inst.drawMonth = inst.selectedMonth = inst.currentMonth;
// 			inst.drawYear = inst.selectedYear = inst.currentYear;
// 		}
// 		else {
// 			var date = new Date();
// 			inst.selectedDay = date.getDate();
// 			inst.drawMonth = inst.selectedMonth = date.getMonth();
// 			inst.drawYear = inst.selectedYear = date.getFullYear();
// 		}
// 		this._notifyChange(inst);
// 		this._adjustDate(target);
// 	},

// 	/* Action for selecting a new month/year. */
// 	_selectMonthYear: function(id, select, period) {
// 		var target = $(id);
// 		var inst = this._getInst(target[0]);
// 		inst['selected' + (period == 'M' ? 'Month' : 'Year')] =
// 		inst['draw' + (period == 'M' ? 'Month' : 'Year')] =
// 			parseInt(select.options[select.selectedIndex].value,10);
// 		this._notifyChange(inst);
// 		this._adjustDate(target);
// 	},

// 	/* Action for selecting a day. */
// 	_selectDay: function(id, month, year, td) {
// 		var target = $(id);
// 		if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
// 			return;
// 		}
// 		var inst = this._getInst(target[0]);
// 		inst.selectedDay = inst.currentDay = $('a', td).html();
// 		inst.selectedMonth = inst.currentMonth = month;
// 		inst.selectedYear = inst.currentYear = year;
// 		this._selectDate(id, this._formatDate(inst,
// 			inst.currentDay, inst.currentMonth, inst.currentYear));
// 	},

// 	/* Erase the input field and hide the date picker. */
// 	_clearDate: function(id) {
// 		var target = $(id);
// 		var inst = this._getInst(target[0]);
// 		this._selectDate(target, '');
// 	},

// 	/* Update the input field with the selected date. */
// 	_selectDate: function(id, dateStr) {
// 		var target = $(id);
// 		var inst = this._getInst(target[0]);
// 		dateStr = (dateStr != null ? dateStr : this._formatDate(inst));
// 		if (inst.input)
// 			inst.input.val(dateStr);
// 		this._updateAlternate(inst);
// 		var onSelect = this._get(inst, 'onSelect');
// 		if (onSelect)
// 			onSelect.apply((inst.input ? inst.input[0] : null), [dateStr, inst]);  // trigger custom callback
// 		else if (inst.input)
// 			inst.input.trigger('change'); // fire the change event
// 		if (inst.inline)
// 			this._updateDatepicker(inst);
// 		else {
// 			this._hideDatepicker();
// 			this._lastInput = inst.input[0];
// 			if (typeof(inst.input[0]) != 'object')
// 				inst.input.focus(); // restore focus
// 			this._lastInput = null;
// 		}
// 	},

// 	/* Update any alternate field to synchronise with the main field. */
// 	_updateAlternate: function(inst) {
// 		var altField = this._get(inst, 'altField');
// 		if (altField) { // update alternate field too
// 			var altFormat = this._get(inst, 'altFormat') || this._get(inst, 'dateFormat');
// 			var date = this._getDate(inst);
// 			var dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
// 			$(altField).each(function() { $(this).val(dateStr); });
// 		}
// 	},

// 	/* Set as beforeShowDay function to prevent selection of weekends.
// 	   @param  date  Date - the date to customise
// 	   @return [boolean, string] - is this date selectable?, what is its CSS class? */
// 	noWeekends: function(date) {
// 		var day = date.getDay();
// 		return [(day > 0 && day < 6), ''];
// 	},

// 	/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
// 	   @param  date  Date - the date to get the week for
// 	   @return  number - the number of the week within the year that contains this date */
// 	iso8601Week: function(date) {
// 		var checkDate = new Date(date.getTime());
// 		// Find Thursday of this week starting on Monday
// 		checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
// 		var time = checkDate.getTime();
// 		checkDate.setMonth(0); // Compare with Jan 1
// 		checkDate.setDate(1);
// 		return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
// 	},

// 	/* Parse a string value into a date object.
// 	   See formatDate below for the possible formats.

// 	   @param  format    string - the expected format of the date
// 	   @param  value     string - the date in the above format
// 	   @param  settings  Object - attributes include:
// 	                     shortYearCutoff  number - the cutoff year for determining the century (optional)
// 	                     dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
// 	                     dayNames         string[7] - names of the days from Sunday (optional)
// 	                     monthNamesShort  string[12] - abbreviated names of the months (optional)
// 	                     monthNames       string[12] - names of the months (optional)
// 	   @return  Date - the extracted date value or null if value is blank */
// 	parseDate: function (format, value, settings) {
// 		if (format == null || value == null)
// 			throw 'Invalid arguments';
// 		value = (typeof value == 'object' ? value.toString() : value + '');
// 		if (value == '')
// 			return null;
// 		var shortYearCutoff = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff;
// 		shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
// 				new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
// 		var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
// 		var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
// 		var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
// 		var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
// 		var year = -1;
// 		var month = -1;
// 		var day = -1;
// 		var doy = -1;
// 		var literal = false;
// 		// Check whether a format character is doubled
// 		var lookAhead = function(match) {
// 			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
// 			if (matches)
// 				iFormat++;
// 			return matches;
// 		};
// 		// Extract a number from the string value
// 		var getNumber = function(match) {
// 			var isDoubled = lookAhead(match);
// 			var size = (match == '@' ? 14 : (match == '!' ? 20 :
// 				(match == 'y' && isDoubled ? 4 : (match == 'o' ? 3 : 2))));
// 			var digits = new RegExp('^\\d{1,' + size + '}');
// 			var num = value.substring(iValue).match(digits);
// 			if (!num)
// 				throw 'Missing number at position ' + iValue;
// 			iValue += num[0].length;
// 			return parseInt(num[0], 10);
// 		};
// 		// Extract a name from the string value and convert to an index
// 		var getName = function(match, shortNames, longNames) {
// 			var names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
// 				return [ [k, v] ];
// 			}).sort(function (a, b) {
// 				return -(a[1].length - b[1].length);
// 			});
// 			var index = -1;
// 			$.each(names, function (i, pair) {
// 				var name = pair[1];
// 				if (value.substr(iValue, name.length).toLowerCase() == name.toLowerCase()) {
// 					index = pair[0];
// 					iValue += name.length;
// 					return false;
// 				}
// 			});
// 			if (index != -1)
// 				return index + 1;
// 			else
// 				throw 'Unknown name at position ' + iValue;
// 		};
// 		// Confirm that a literal character matches the string value
// 		var checkLiteral = function() {
// 			if (value.charAt(iValue) != format.charAt(iFormat))
// 				throw 'Unexpected literal at position ' + iValue;
// 			iValue++;
// 		};
// 		var iValue = 0;
// 		for (var iFormat = 0; iFormat < format.length; iFormat++) {
// 			if (literal)
// 				if (format.charAt(iFormat) == "'" && !lookAhead("'"))
// 					literal = false;
// 				else
// 					checkLiteral();
// 			else
// 				switch (format.charAt(iFormat)) {
// 					case 'd':
// 						day = getNumber('d');
// 						break;
// 					case 'D':
// 						getName('D', dayNamesShort, dayNames);
// 						break;
// 					case 'o':
// 						doy = getNumber('o');
// 						break;
// 					case 'm':
// 						month = getNumber('m');
// 						break;
// 					case 'M':
// 						month = getName('M', monthNamesShort, monthNames);
// 						break;
// 					case 'y':
// 						year = getNumber('y');
// 						break;
// 					case '@':
// 						var date = new Date(getNumber('@'));
// 						year = date.getFullYear();
// 						month = date.getMonth() + 1;
// 						day = date.getDate();
// 						break;
// 					case '!':
// 						var date = new Date((getNumber('!') - this._ticksTo1970) / 10000);
// 						year = date.getFullYear();
// 						month = date.getMonth() + 1;
// 						day = date.getDate();
// 						break;
// 					case "'":
// 						if (lookAhead("'"))
// 							checkLiteral();
// 						else
// 							literal = true;
// 						break;
// 					default:
// 						checkLiteral();
// 				}
// 		}
// 		if (iValue < value.length){
// 			var extra = value.substr(iValue);
// 			if (!/^\s+/.test(extra)) {
// 				throw "Extra/unparsed characters found in date: " + extra;
// 			}
// 		}
// 		if (year == -1)
// 			year = new Date().getFullYear();
// 		else if (year < 100)
// 			year += new Date().getFullYear() - new Date().getFullYear() % 100 +
// 				(year <= shortYearCutoff ? 0 : -100);
// 		if (doy > -1) {
// 			month = 1;
// 			day = doy;
// 			do {
// 				var dim = this._getDaysInMonth(year, month - 1);
// 				if (day <= dim)
// 					break;
// 				month++;
// 				day -= dim;
// 			} while (true);
// 		}
// 		var date = this._daylightSavingAdjust(new Date(year, month - 1, day));
// 		if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day)
// 			throw 'Invalid date'; // E.g. 31/02/00
// 		return date;
// 	},

// 	/* Standard date formats. */
// 	ATOM: 'yy-mm-dd', // RFC 3339 (ISO 8601)
// 	COOKIE: 'D, dd M yy',
// 	ISO_8601: 'yy-mm-dd',
// 	RFC_822: 'D, d M y',
// 	RFC_850: 'DD, dd-M-y',
// 	RFC_1036: 'D, d M y',
// 	RFC_1123: 'D, d M yy',
// 	RFC_2822: 'D, d M yy',
// 	RSS: 'D, d M y', // RFC 822
// 	TICKS: '!',
// 	TIMESTAMP: '@',
// 	W3C: 'yy-mm-dd', // ISO 8601

// 	_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
// 		Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

// 	/* Format a date object into a string value.
// 	   The format can be combinations of the following:
// 	   d  - day of month (no leading zero)
// 	   dd - day of month (two digit)
// 	   o  - day of year (no leading zeros)
// 	   oo - day of year (three digit)
// 	   D  - day name short
// 	   DD - day name long
// 	   m  - month of year (no leading zero)
// 	   mm - month of year (two digit)
// 	   M  - month name short
// 	   MM - month name long
// 	   y  - year (two digit)
// 	   yy - year (four digit)
// 	   @ - Unix timestamp (ms since 01/01/1970)
// 	   ! - Windows ticks (100ns since 01/01/0001)
// 	   '...' - literal text
// 	   '' - single quote

// 	   @param  format    string - the desired format of the date
// 	   @param  date      Date - the date value to format
// 	   @param  settings  Object - attributes include:
// 	                     dayNamesShort    string[7] - abbreviated names of the days from Sunday (optional)
// 	                     dayNames         string[7] - names of the days from Sunday (optional)
// 	                     monthNamesShort  string[12] - abbreviated names of the months (optional)
// 	                     monthNames       string[12] - names of the months (optional)
// 	   @return  string - the date in the above format */
// 	formatDate: function (format, date, settings) {
// 		if (!date)
// 			return '';
// 		var dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort;
// 		var dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames;
// 		var monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort;
// 		var monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames;
// 		// Check whether a format character is doubled
// 		var lookAhead = function(match) {
// 			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
// 			if (matches)
// 				iFormat++;
// 			return matches;
// 		};
// 		// Format a number, with leading zero if necessary
// 		var formatNumber = function(match, value, len) {
// 			var num = '' + value;
// 			if (lookAhead(match))
// 				while (num.length < len)
// 					num = '0' + num;
// 			return num;
// 		};
// 		// Format a name, short or long as requested
// 		var formatName = function(match, value, shortNames, longNames) {
// 			return (lookAhead(match) ? longNames[value] : shortNames[value]);
// 		};
// 		var output = '';
// 		var literal = false;
// 		if (date)
// 			for (var iFormat = 0; iFormat < format.length; iFormat++) {
// 				if (literal)
// 					if (format.charAt(iFormat) == "'" && !lookAhead("'"))
// 						literal = false;
// 					else
// 						output += format.charAt(iFormat);
// 				else
// 					switch (format.charAt(iFormat)) {
// 						case 'd':
// 							output += formatNumber('d', date.getDate(), 2);
// 							break;
// 						case 'D':
// 							output += formatName('D', date.getDay(), dayNamesShort, dayNames);
// 							break;
// 						case 'o':
// 							output += formatNumber('o',
// 								Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
// 							break;
// 						case 'm':
// 							output += formatNumber('m', date.getMonth() + 1, 2);
// 							break;
// 						case 'M':
// 							output += formatName('M', date.getMonth(), monthNamesShort, monthNames);
// 							break;
// 						case 'y':
// 							output += (lookAhead('y') ? date.getFullYear() :
// 								(date.getYear() % 100 < 10 ? '0' : '') + date.getYear() % 100);
// 							break;
// 						case '@':
// 							output += date.getTime();
// 							break;
// 						case '!':
// 							output += date.getTime() * 10000 + this._ticksTo1970;
// 							break;
// 						case "'":
// 							if (lookAhead("'"))
// 								output += "'";
// 							else
// 								literal = true;
// 							break;
// 						default:
// 							output += format.charAt(iFormat);
// 					}
// 			}
// 		return output;
// 	},

// 	/* Extract all possible characters from the date format. */
// 	_possibleChars: function (format) {
// 		var chars = '';
// 		var literal = false;
// 		// Check whether a format character is doubled
// 		var lookAhead = function(match) {
// 			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
// 			if (matches)
// 				iFormat++;
// 			return matches;
// 		};
// 		for (var iFormat = 0; iFormat < format.length; iFormat++)
// 			if (literal)
// 				if (format.charAt(iFormat) == "'" && !lookAhead("'"))
// 					literal = false;
// 				else
// 					chars += format.charAt(iFormat);
// 			else
// 				switch (format.charAt(iFormat)) {
// 					case 'd': case 'm': case 'y': case '@':
// 						chars += '0123456789';
// 						break;
// 					case 'D': case 'M':
// 						return null; // Accept anything
// 					case "'":
// 						if (lookAhead("'"))
// 							chars += "'";
// 						else
// 							literal = true;
// 						break;
// 					default:
// 						chars += format.charAt(iFormat);
// 				}
// 		return chars;
// 	},

// 	/* Get a setting value, defaulting if necessary. */
// 	_get: function(inst, name) {
// 		return inst.settings[name] !== undefined ?
// 			inst.settings[name] : this._defaults[name];
// 	},

// 	/* Parse existing date and initialise date picker. */
// 	_setDateFromField: function(inst, noDefault) {
// 		if (inst.input.val() == inst.lastVal) {
// 			return;
// 		}
// 		var dateFormat = this._get(inst, 'dateFormat');
// 		var dates = inst.lastVal = inst.input ? inst.input.val() : null;
// 		var date, defaultDate;
// 		date = defaultDate = this._getDefaultDate(inst);
// 		var settings = this._getFormatConfig(inst);
// 		try {
// 			date = this.parseDate(dateFormat, dates, settings) || defaultDate;
// 		} catch (event) {
// 			this.log(event);
// 			dates = (noDefault ? '' : dates);
// 		}
// 		inst.selectedDay = date.getDate();
// 		inst.drawMonth = inst.selectedMonth = date.getMonth();
// 		inst.drawYear = inst.selectedYear = date.getFullYear();
// 		inst.currentDay = (dates ? date.getDate() : 0);
// 		inst.currentMonth = (dates ? date.getMonth() : 0);
// 		inst.currentYear = (dates ? date.getFullYear() : 0);
// 		this._adjustInstDate(inst);
// 	},

// 	/* Retrieve the default date shown on opening. */
// 	_getDefaultDate: function(inst) {
// 		return this._restrictMinMax(inst,
// 			this._determineDate(inst, this._get(inst, 'defaultDate'), new Date()));
// 	},

// 	/* A date may be specified as an exact value or a relative one. */
// 	_determineDate: function(inst, date, defaultDate) {
// 		var offsetNumeric = function(offset) {
// 			var date = new Date();
// 			date.setDate(date.getDate() + offset);
// 			return date;
// 		};
// 		var offsetString = function(offset) {
// 			try {
// 				return $.datepicker.parseDate($.datepicker._get(inst, 'dateFormat'),
// 					offset, $.datepicker._getFormatConfig(inst));
// 			}
// 			catch (e) {
// 				// Ignore
// 			}
// 			var date = (offset.toLowerCase().match(/^c/) ?
// 				$.datepicker._getDate(inst) : null) || new Date();
// 			var year = date.getFullYear();
// 			var month = date.getMonth();
// 			var day = date.getDate();
// 			var pattern = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g;
// 			var matches = pattern.exec(offset);
// 			while (matches) {
// 				switch (matches[2] || 'd') {
// 					case 'd' : case 'D' :
// 						day += parseInt(matches[1],10); break;
// 					case 'w' : case 'W' :
// 						day += parseInt(matches[1],10) * 7; break;
// 					case 'm' : case 'M' :
// 						month += parseInt(matches[1],10);
// 						day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
// 						break;
// 					case 'y': case 'Y' :
// 						year += parseInt(matches[1],10);
// 						day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
// 						break;
// 				}
// 				matches = pattern.exec(offset);
// 			}
// 			return new Date(year, month, day);
// 		};
// 		var newDate = (date == null || date === '' ? defaultDate : (typeof date == 'string' ? offsetString(date) :
// 			(typeof date == 'number' ? (isNaN(date) ? defaultDate : offsetNumeric(date)) : new Date(date.getTime()))));
// 		newDate = (newDate && newDate.toString() == 'Invalid Date' ? defaultDate : newDate);
// 		if (newDate) {
// 			newDate.setHours(0);
// 			newDate.setMinutes(0);
// 			newDate.setSeconds(0);
// 			newDate.setMilliseconds(0);
// 		}
// 		return this._daylightSavingAdjust(newDate);
// 	},

// 	/* Handle switch to/from daylight saving.
// 	   Hours may be non-zero on daylight saving cut-over:
// 	   > 12 when midnight changeover, but then cannot generate
// 	   midnight datetime, so jump to 1AM, otherwise reset.
// 	   @param  date  (Date) the date to check
// 	   @return  (Date) the corrected date */
// 	_daylightSavingAdjust: function(date) {
// 		if (!date) return null;
// 		date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
// 		return date;
// 	},

// 	/* Set the date(s) directly. */
// 	_setDate: function(inst, date, noChange) {
// 		var clear = !date;
// 		var origMonth = inst.selectedMonth;
// 		var origYear = inst.selectedYear;
// 		var newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
// 		inst.selectedDay = inst.currentDay = newDate.getDate();
// 		inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
// 		inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
// 		if ((origMonth != inst.selectedMonth || origYear != inst.selectedYear) && !noChange)
// 			this._notifyChange(inst);
// 		this._adjustInstDate(inst);
// 		if (inst.input) {
// 			inst.input.val(clear ? '' : this._formatDate(inst));
// 		}
// 	},

// 	/* Retrieve the date(s) directly. */
// 	_getDate: function(inst) {
// 		var startDate = (!inst.currentYear || (inst.input && inst.input.val() == '') ? null :
// 			this._daylightSavingAdjust(new Date(
// 			inst.currentYear, inst.currentMonth, inst.currentDay)));
// 			return startDate;
// 	},

// 	/* Attach the onxxx handlers.  These are declared statically so
// 	 * they work with static code transformers like Caja.
// 	 */
// 	_attachHandlers: function(inst) {
// 		var stepMonths = this._get(inst, 'stepMonths');
// 		var id = '#' + inst.id.replace( /\\\\/g, "\\" );
// 		inst.dpDiv.find('[data-handler]').map(function () {
// 			var handler = {
// 				prev: function () {
// 					window['DP_jQuery_' + dpuuid].datepicker._adjustDate(id, -stepMonths, 'M');
// 				},
// 				next: function () {
// 					window['DP_jQuery_' + dpuuid].datepicker._adjustDate(id, +stepMonths, 'M');
// 				},
// 				hide: function () {
// 					window['DP_jQuery_' + dpuuid].datepicker._hideDatepicker();
// 				},
// 				today: function () {
// 					window['DP_jQuery_' + dpuuid].datepicker._gotoToday(id);
// 				},
// 				selectDay: function () {
// 					window['DP_jQuery_' + dpuuid].datepicker._selectDay(id, +this.getAttribute('data-month'), +this.getAttribute('data-year'), this);
// 					return false;
// 				},
// 				selectMonth: function () {
// 					window['DP_jQuery_' + dpuuid].datepicker._selectMonthYear(id, this, 'M');
// 					return false;
// 				},
// 				selectYear: function () {
// 					window['DP_jQuery_' + dpuuid].datepicker._selectMonthYear(id, this, 'Y');
// 					return false;
// 				}
// 			};
// 			$(this).bind(this.getAttribute('data-event'), handler[this.getAttribute('data-handler')]);
// 		});
// 	},
	
// 	/* Generate the HTML for the current state of the date picker. */
// 	_generateHTML: function(inst) {
// 		var today = new Date();
// 		today = this._daylightSavingAdjust(
// 			new Date(today.getFullYear(), today.getMonth(), today.getDate())); // clear time
// 		var isRTL = this._get(inst, 'isRTL');
// 		var showButtonPanel = this._get(inst, 'showButtonPanel');
// 		var hideIfNoPrevNext = this._get(inst, 'hideIfNoPrevNext');
// 		var navigationAsDateFormat = this._get(inst, 'navigationAsDateFormat');
// 		var numMonths = this._getNumberOfMonths(inst);
// 		var showCurrentAtPos = this._get(inst, 'showCurrentAtPos');
// 		var stepMonths = this._get(inst, 'stepMonths');
// 		var isMultiMonth = (numMonths[0] != 1 || numMonths[1] != 1);
// 		var currentDate = this._daylightSavingAdjust((!inst.currentDay ? new Date(9999, 9, 9) :
// 			new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
// 		var minDate = this._getMinMaxDate(inst, 'min');
// 		var maxDate = this._getMinMaxDate(inst, 'max');
// 		var drawMonth = inst.drawMonth - showCurrentAtPos;
// 		var drawYear = inst.drawYear;
// 		if (drawMonth < 0) {
// 			drawMonth += 12;
// 			drawYear--;
// 		}
// 		if (maxDate) {
// 			var maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
// 				maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
// 			maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
// 			while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
// 				drawMonth--;
// 				if (drawMonth < 0) {
// 					drawMonth = 11;
// 					drawYear--;
// 				}
// 			}
// 		}
// 		inst.drawMonth = drawMonth;
// 		inst.drawYear = drawYear;
// 		var prevText = this._get(inst, 'prevText');
// 		prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
// 			this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
// 			this._getFormatConfig(inst)));
// 		var prev = (this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
// 			'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click"' +
// 			' title="' + prevText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>' :
// 			(hideIfNoPrevNext ? '' : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+ prevText +'"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'e' : 'w') + '">' + prevText + '</span></a>'));
// 		var nextText = this._get(inst, 'nextText');
// 		nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
// 			this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
// 			this._getFormatConfig(inst)));
// 		var next = (this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
// 			'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click"' +
// 			' title="' + nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>' :
// 			(hideIfNoPrevNext ? '' : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+ nextText + '"><span class="ui-icon ui-icon-circle-triangle-' + ( isRTL ? 'w' : 'e') + '">' + nextText + '</span></a>'));
// 		var currentText = this._get(inst, 'currentText');
// 		var gotoDate = (this._get(inst, 'gotoCurrent') && inst.currentDay ? currentDate : today);
// 		currentText = (!navigationAsDateFormat ? currentText :
// 			this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));
// 		var controls = (!inst.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' +
// 			this._get(inst, 'closeText') + '</button>' : '');
// 		var buttonPanel = (showButtonPanel) ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (isRTL ? controls : '') +
// 			(this._isInRange(inst, gotoDate) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click"' +
// 			'>' + currentText + '</button>' : '') + (isRTL ? '' : controls) + '</div>' : '';
// 		var firstDay = parseInt(this._get(inst, 'firstDay'),10);
// 		firstDay = (isNaN(firstDay) ? 0 : firstDay);
// 		var showWeek = this._get(inst, 'showWeek');
// 		var dayNames = this._get(inst, 'dayNames');
// 		var dayNamesShort = this._get(inst, 'dayNamesShort');
// 		var dayNamesMin = this._get(inst, 'dayNamesMin');
// 		var monthNames = this._get(inst, 'monthNames');
// 		var monthNamesShort = this._get(inst, 'monthNamesShort');
// 		var beforeShowDay = this._get(inst, 'beforeShowDay');
// 		var showOtherMonths = this._get(inst, 'showOtherMonths');
// 		var selectOtherMonths = this._get(inst, 'selectOtherMonths');
// 		var calculateWeek = this._get(inst, 'calculateWeek') || this.iso8601Week;
// 		var defaultDate = this._getDefaultDate(inst);
// 		var html = '';
// 		for (var row = 0; row < numMonths[0]; row++) {
// 			var group = '';
// 			this.maxRows = 4;
// 			for (var col = 0; col < numMonths[1]; col++) {
// 				var selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
// 				var cornerClass = ' ui-corner-all';
// 				var calender = '';
// 				if (isMultiMonth) {
// 					calender += '<div class="ui-datepicker-group';
// 					if (numMonths[1] > 1)
// 						switch (col) {
// 							case 0: calender += ' ui-datepicker-group-first';
// 								cornerClass = ' ui-corner-' + (isRTL ? 'right' : 'left'); break;
// 							case numMonths[1]-1: calender += ' ui-datepicker-group-last';
// 								cornerClass = ' ui-corner-' + (isRTL ? 'left' : 'right'); break;
// 							default: calender += ' ui-datepicker-group-middle'; cornerClass = ''; break;
// 						}
// 					calender += '">';
// 				}
// 				calender += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + cornerClass + '">' +
// 					(/all|left/.test(cornerClass) && row == 0 ? (isRTL ? next : prev) : '') +
// 					(/all|right/.test(cornerClass) && row == 0 ? (isRTL ? prev : next) : '') +
// 					this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
// 					row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
// 					'</div><table class="ui-datepicker-calendar"><thead>' +
// 					'<tr>';
// 				var thead = (showWeek ? '<th class="ui-datepicker-week-col">' + this._get(inst, 'weekHeader') + '</th>' : '');
// 				for (var dow = 0; dow < 7; dow++) { // days of the week
// 					var day = (dow + firstDay) % 7;
// 					thead += '<th' + ((dow + firstDay + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : '') + '>' +
// 						'<span title="' + dayNames[day] + '">' + dayNamesMin[day] + '</span></th>';
// 				}
// 				calender += thead + '</tr></thead><tbody>';
// 				var daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
// 				if (drawYear == inst.selectedYear && drawMonth == inst.selectedMonth)
// 					inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
// 				var leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
// 				var curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate
// 				var numRows = (isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows); //If multiple months, use the higher number of rows (see #7043)
// 				this.maxRows = numRows;
// 				var printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
// 				for (var dRow = 0; dRow < numRows; dRow++) { // create date picker rows
// 					calender += '<tr>';
// 					var tbody = (!showWeek ? '' : '<td class="ui-datepicker-week-col">' +
// 						this._get(inst, 'calculateWeek')(printDate) + '</td>');
// 					for (var dow = 0; dow < 7; dow++) { // create date picker days
// 						var daySettings = (beforeShowDay ?
// 							beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, '']);
// 						var otherMonth = (printDate.getMonth() != drawMonth);
// 						var unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
// 							(minDate && printDate < minDate) || (maxDate && printDate > maxDate);
// 						tbody += '<td class="' +
// 							((dow + firstDay + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') + // highlight weekends
// 							(otherMonth ? ' ui-datepicker-other-month' : '') + // highlight days from other months
// 							((printDate.getTime() == selectedDate.getTime() && drawMonth == inst.selectedMonth && inst._keyEvent) || // user pressed key
// 							(defaultDate.getTime() == printDate.getTime() && defaultDate.getTime() == selectedDate.getTime()) ?
// 							// or defaultDate is current printedDate and defaultDate is selectedDate
// 							' ' + this._dayOverClass : '') + // highlight selected day
// 							(unselectable ? ' ' + this._unselectableClass + ' ui-state-disabled': '') +  // highlight unselectable days
// 							(otherMonth && !showOtherMonths ? '' : ' ' + daySettings[1] + // highlight custom dates
// 							(printDate.getTime() == currentDate.getTime() ? ' ' + this._currentClass : '') + // highlight selected day
// 							(printDate.getTime() == today.getTime() ? ' ui-datepicker-today' : '')) + '"' + // highlight today (if different)
// 							((!otherMonth || showOtherMonths) && daySettings[2] ? ' title="' + daySettings[2] + '"' : '') + // cell title
// 							(unselectable ? '' : ' data-handler="selectDay" data-event="click" data-month="' + printDate.getMonth() + '" data-year="' + printDate.getFullYear() + '"') + '>' + // actions
// 							(otherMonth && !showOtherMonths ? '&#xa0;' : // display for other months
// 							(unselectable ? '<span class="ui-state-default">' + printDate.getDate() + '</span>' : '<a class="ui-state-default' +
// 							(printDate.getTime() == today.getTime() ? ' ui-state-highlight' : '') +
// 							(printDate.getTime() == currentDate.getTime() ? ' ui-state-active' : '') + // highlight selected day
// 							(otherMonth ? ' ui-priority-secondary' : '') + // distinguish dates from other months
// 							'" href="#">' + printDate.getDate() + '</a>')) + '</td>'; // display selectable date
// 						printDate.setDate(printDate.getDate() + 1);
// 						printDate = this._daylightSavingAdjust(printDate);
// 					}
// 					calender += tbody + '</tr>';
// 				}
// 				drawMonth++;
// 				if (drawMonth > 11) {
// 					drawMonth = 0;
// 					drawYear++;
// 				}
// 				calender += '</tbody></table>' + (isMultiMonth ? '</div>' + 
// 							((numMonths[0] > 0 && col == numMonths[1]-1) ? '<div class="ui-datepicker-row-break"></div>' : '') : '');
// 				group += calender;
// 			}
// 			html += group;
// 		}
// 		html += buttonPanel + ($.browser.msie && parseInt($.browser.version,10) < 7 && !inst.inline ?
// 			'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : '');
// 		inst._keyEvent = false;
// 		return html;
// 	},

// 	/* Generate the month and year header. */
// 	_generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
// 			secondary, monthNames, monthNamesShort) {
// 		var changeMonth = this._get(inst, 'changeMonth');
// 		var changeYear = this._get(inst, 'changeYear');
// 		var showMonthAfterYear = this._get(inst, 'showMonthAfterYear');
// 		var html = '<div class="ui-datepicker-title">';
// 		var monthHtml = '';
// 		// month selection
// 		if (secondary || !changeMonth)
// 			monthHtml += '<span class="ui-datepicker-month">' + monthNames[drawMonth] + '</span>';
// 		else {
// 			var inMinYear = (minDate && minDate.getFullYear() == drawYear);
// 			var inMaxYear = (maxDate && maxDate.getFullYear() == drawYear);
// 			monthHtml += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
// 			for (var month = 0; month < 12; month++) {
// 				if ((!inMinYear || month >= minDate.getMonth()) &&
// 						(!inMaxYear || month <= maxDate.getMonth()))
// 					monthHtml += '<option value="' + month + '"' +
// 						(month == drawMonth ? ' selected="selected"' : '') +
// 						'>' + monthNamesShort[month] + '</option>';
// 			}
// 			monthHtml += '</select>';
// 		}
// 		if (!showMonthAfterYear)
// 			html += monthHtml + (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '');
// 		// year selection
// 		if ( !inst.yearshtml ) {
// 			inst.yearshtml = '';
// 			if (secondary || !changeYear)
// 				html += '<span class="ui-datepicker-year">' + drawYear + '</span>';
// 			else {
// 				// determine range of years to display
// 				var years = this._get(inst, 'yearRange').split(':');
// 				var thisYear = new Date().getFullYear();
// 				var determineYear = function(value) {
// 					var year = (value.match(/c[+-].*/) ? drawYear + parseInt(value.substring(1), 10) :
// 						(value.match(/[+-].*/) ? thisYear + parseInt(value, 10) :
// 						parseInt(value, 10)));
// 					return (isNaN(year) ? thisYear : year);
// 				};
// 				var year = determineYear(years[0]);
// 				var endYear = Math.max(year, determineYear(years[1] || ''));
// 				year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
// 				endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
// 				inst.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';
// 				for (; year <= endYear; year++) {
// 					inst.yearshtml += '<option value="' + year + '"' +
// 						(year == drawYear ? ' selected="selected"' : '') +
// 						'>' + year + '</option>';
// 				}
// 				inst.yearshtml += '</select>';
				
// 				html += inst.yearshtml;
// 				inst.yearshtml = null;
// 			}
// 		}
// 		html += this._get(inst, 'yearSuffix');
// 		if (showMonthAfterYear)
// 			html += (secondary || !(changeMonth && changeYear) ? '&#xa0;' : '') + monthHtml;
// 		html += '</div>'; // Close datepicker_header
// 		return html;
// 	},

// 	/* Adjust one of the date sub-fields. */
// 	_adjustInstDate: function(inst, offset, period) {
// 		var year = inst.drawYear + (period == 'Y' ? offset : 0);
// 		var month = inst.drawMonth + (period == 'M' ? offset : 0);
// 		var day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) +
// 			(period == 'D' ? offset : 0);
// 		var date = this._restrictMinMax(inst,
// 			this._daylightSavingAdjust(new Date(year, month, day)));
// 		inst.selectedDay = date.getDate();
// 		inst.drawMonth = inst.selectedMonth = date.getMonth();
// 		inst.drawYear = inst.selectedYear = date.getFullYear();
// 		if (period == 'M' || period == 'Y')
// 			this._notifyChange(inst);
// 	},

// 	/* Ensure a date is within any min/max bounds. */
// 	_restrictMinMax: function(inst, date) {
// 		var minDate = this._getMinMaxDate(inst, 'min');
// 		var maxDate = this._getMinMaxDate(inst, 'max');
// 		var newDate = (minDate && date < minDate ? minDate : date);
// 		newDate = (maxDate && newDate > maxDate ? maxDate : newDate);
// 		return newDate;
// 	},

// 	/* Notify change of month/year. */
// 	_notifyChange: function(inst) {
// 		var onChange = this._get(inst, 'onChangeMonthYear');
// 		if (onChange)
// 			onChange.apply((inst.input ? inst.input[0] : null),
// 				[inst.selectedYear, inst.selectedMonth + 1, inst]);
// 	},

// 	/* Determine the number of months to show. */
// 	_getNumberOfMonths: function(inst) {
// 		var numMonths = this._get(inst, 'numberOfMonths');
// 		return (numMonths == null ? [1, 1] : (typeof numMonths == 'number' ? [1, numMonths] : numMonths));
// 	},

// 	/* Determine the current maximum date - ensure no time components are set. */
// 	_getMinMaxDate: function(inst, minMax) {
// 		return this._determineDate(inst, this._get(inst, minMax + 'Date'), null);
// 	},

// 	/* Find the number of days in a given month. */
// 	_getDaysInMonth: function(year, month) {
// 		return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
// 	},

// 	/* Find the day of the week of the first of a month. */
// 	_getFirstDayOfMonth: function(year, month) {
// 		return new Date(year, month, 1).getDay();
// 	},

// 	/* Determines if we should allow a "next/prev" month display change. */
// 	_canAdjustMonth: function(inst, offset, curYear, curMonth) {
// 		var numMonths = this._getNumberOfMonths(inst);
// 		var date = this._daylightSavingAdjust(new Date(curYear,
// 			curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
// 		if (offset < 0)
// 			date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
// 		return this._isInRange(inst, date);
// 	},

// 	/* Is the given date in the accepted range? */
// 	_isInRange: function(inst, date) {
// 		var minDate = this._getMinMaxDate(inst, 'min');
// 		var maxDate = this._getMinMaxDate(inst, 'max');
// 		return ((!minDate || date.getTime() >= minDate.getTime()) &&
// 			(!maxDate || date.getTime() <= maxDate.getTime()));
// 	},

// 	/* Provide the configuration settings for formatting/parsing. */
// 	_getFormatConfig: function(inst) {
// 		var shortYearCutoff = this._get(inst, 'shortYearCutoff');
// 		shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
// 			new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
// 		return {shortYearCutoff: shortYearCutoff,
// 			dayNamesShort: this._get(inst, 'dayNamesShort'), dayNames: this._get(inst, 'dayNames'),
// 			monthNamesShort: this._get(inst, 'monthNamesShort'), monthNames: this._get(inst, 'monthNames')};
// 	},

// 	/* Format the given date for display. */
// 	_formatDate: function(inst, day, month, year) {
// 		if (!day) {
// 			inst.currentDay = inst.selectedDay;
// 			inst.currentMonth = inst.selectedMonth;
// 			inst.currentYear = inst.selectedYear;
// 		}
// 		var date = (day ? (typeof day == 'object' ? day :
// 			this._daylightSavingAdjust(new Date(year, month, day))) :
// 			this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
// 		return this.formatDate(this._get(inst, 'dateFormat'), date, this._getFormatConfig(inst));
// 	}
// });

// /*
//  * Bind hover events for datepicker elements.
//  * Done via delegate so the binding only occurs once in the lifetime of the parent div.
//  * Global instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
//  */ 
// function bindHover(dpDiv) {
// 	var selector = 'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
// 	return dpDiv.delegate(selector, 'mouseout', function() {
// 			$(this).removeClass('ui-state-hover');
// 			if (this.className.indexOf('ui-datepicker-prev') != -1) $(this).removeClass('ui-datepicker-prev-hover');
// 			if (this.className.indexOf('ui-datepicker-next') != -1) $(this).removeClass('ui-datepicker-next-hover');
// 		})
// 		.delegate(selector, 'mouseover', function(){
// 			if (!$.datepicker._isDisabledDatepicker( instActive.inline ? dpDiv.parent()[0] : instActive.input[0])) {
// 				$(this).parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover');
// 				$(this).addClass('ui-state-hover');
// 				if (this.className.indexOf('ui-datepicker-prev') != -1) $(this).addClass('ui-datepicker-prev-hover');
// 				if (this.className.indexOf('ui-datepicker-next') != -1) $(this).addClass('ui-datepicker-next-hover');
// 			}
// 		});
// }

// /* jQuery extend now ignores nulls! */
// function extendRemove(target, props) {
// 	$.extend(target, props);
// 	for (var name in props)
// 		if (props[name] == null || props[name] == undefined)
// 			target[name] = props[name];
// 	return target;
// };

// /* Invoke the datepicker functionality.
//    @param  options  string - a command, optionally followed by additional parameters or
// 	                Object - settings for attaching new datepicker functionality
//    @return  jQuery object */
// $.fn.datepicker = function(options){
	
// 	/* Verify an empty collection wasn't passed - Fixes #6976 */
// 	if ( !this.length ) {
// 		return this;
// 	}
	
// 	/* Initialise the date picker. */
// 	if (!$.datepicker.initialized) {
// 		$(document).mousedown($.datepicker._checkExternalClick).
// 			find(document.body).append($.datepicker.dpDiv);
// 		$.datepicker.initialized = true;
// 	}

// 	var otherArgs = Array.prototype.slice.call(arguments, 1);
// 	if (typeof options == 'string' && (options == 'isDisabled' || options == 'getDate' || options == 'widget'))
// 		return $.datepicker['_' + options + 'Datepicker'].
// 			apply($.datepicker, [this[0]].concat(otherArgs));
// 	if (options == 'option' && arguments.length == 2 && typeof arguments[1] == 'string')
// 		return $.datepicker['_' + options + 'Datepicker'].
// 			apply($.datepicker, [this[0]].concat(otherArgs));
// 	return this.each(function() {
// 		typeof options == 'string' ?
// 			$.datepicker['_' + options + 'Datepicker'].
// 				apply($.datepicker, [this].concat(otherArgs)) :
// 			$.datepicker._attachDatepicker(this, options);
// 	});
// };

// $.datepicker = new Datepicker(); // singleton instance
// $.datepicker.initialized = false;
// $.datepicker.uuid = new Date().getTime();
// $.datepicker.version = "1.9.0";

// // Workaround for #4055
// // Add another global to avoid noConflict issues with inline event handlers
// window['DP_jQuery_' + dpuuid] = $;

// })(jQuery);

