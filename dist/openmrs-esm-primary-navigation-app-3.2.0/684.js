(self.webpackChunk_openmrs_esm_primary_navigation_app=self.webpackChunk_openmrs_esm_primary_navigation_app||[]).push([[684],{8684:(e,n,t)=>{"use strict";t.r(n),t.d(n,{I18nContext:()=>j,I18nextProvider:()=>te,Trans:()=>H,Translation:()=>ne,composeInitialProps:()=>N,date:()=>ce,getDefaults:()=>P,getI18n:()=>x,getInitialProps:()=>I,initReactI18next:()=>k,number:()=>ue,plural:()=>fe,select:()=>le,selectOrdinal:()=>pe,setDefaults:()=>w,setI18n:()=>S,time:()=>se,useSSR:()=>re,useTranslation:()=>q,withSSR:()=>ae,withTranslation:()=>X});var r=t(6017);function o(e,n){if(null==e)return{};var t,o,i=(0,r.Z)(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c=t(6983),s=t.n(c),u=t(1432),l=t.n(u),f=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function p(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(l()[t[1]]||"/"===e.charAt(e.length-2))&&(n.voidElement=!0),n.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var o=new RegExp(f),i=null;null!==(i=o.exec(e));)if(i[0].trim())if(i[1]){var a=i[1].trim(),c=[a,""];a.indexOf("=")>-1&&(c=a.split("=")),n.attrs[c[0]]=c[1],o.lastIndex--}else i[2]&&(n.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return n}var d=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,y=/^\s*$/,g=Object.create(null);const m=function(e,n){n||(n={}),n.components||(n.components=g);var t,r=[],o=[],i=-1,a=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");r.push({type:"text",content:-1===c?e:e.substring(0,c)})}return e.replace(d,(function(c,s){if(a){if(c!=="</"+t.name+">")return;a=!1}var u,l="/"!==c.charAt(1),f=c.startsWith("\x3c!--"),d=s+c.length,g=e.charAt(d);if(f){var m=p(c);return i<0?(r.push(m),r):((u=o[i]).children.push(m),r)}if(l&&(i++,"tag"===(t=p(c)).type&&n.components[t.name]&&(t.type="component",a=!0),t.voidElement||a||!g||"<"===g||t.children.push({type:"text",content:e.slice(d,e.indexOf("<",d))}),0===i&&r.push(t),(u=o[i-1])&&u.children.push(t),o[i]=t),(!l||t.voidElement)&&(i>-1&&(t.voidElement||t.name===c.slice(2,-1))&&(i--,t=-1===i?r:o[i]),!a&&"<"!==g&&g)){u=-1===i?r:o[i].children;var b=e.indexOf("<",d),h=e.slice(d,-1===b?void 0:b);y.test(h)&&(h=" "),(b>-1&&i+u.length>=0||" "!==h)&&u.push({type:"text",content:h})}})),r};function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v,O={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},j=s().createContext();function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};O=h(h({},O),e)}function P(){return O}var E=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.usedNamespaces={}}var n;return(n=[{key:"addUsedNamespaces",value:function(e){var n=this;e.forEach((function(e){n.usedNamespaces[e]||(n.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}])&&function(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(e.prototype,n),e}();function S(e){v=e}function x(){return v}var k={type:"3rdParty",init:function(e){w(e.options.react),S(e)}};function N(e){return function(n){return new Promise((function(t){var r=I();e.getInitialProps?e.getInitialProps(n).then((function(e){t(h(h({},e),r))})):t(r)}))}}function I(){var e=x(),n=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],t={},r={};return e.languages.forEach((function(t){r[t]={},n.forEach((function(n){r[t][n]=e.getResourceBundle(t,n)||{}}))})),t.initialI18nStore=r,t.initialLanguage=e.language,t}function D(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var R={};function C(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&R[n[0]]||("string"==typeof n[0]&&(R[n[0]]=new Date),D.apply(void 0,n))}function A(e,n,t){e.loadNamespaces(n,(function(){e.isInitialized?t():e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}))}function T(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return C("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],o=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e)||!n.hasResourceBundle(r,e)&&n.services.backendConnector.backend&&(!a(r,e)||o&&!a(i,e)))}function z(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}var L=["format"],_=["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"];function B(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?B(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function V(e,n){if(!e)return!1;var t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function K(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function W(e){return Array.isArray(e)?e:[e]}function F(e,n){if(!e)return"";var t="",r=W(e),a=n.transKeepBasicHtmlNodesFor||[];return r.forEach((function(e,r){if("string"==typeof e)t+="".concat(e);else if(s().isValidElement(e)){var c=Object.keys(e.props).length,u=a.indexOf(e.type)>-1,l=e.props.children;if(!l&&u&&0===c)t+="<".concat(e.type,"/>");else if(l||u&&0===c)if(e.props.i18nIsDynamicList)t+="<".concat(r,"></").concat(r,">");else if(u&&1===c&&"string"==typeof l)t+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var f=F(l,n);t+="<".concat(r,">").concat(f,"</").concat(r,">")}else t+="<".concat(r,"></").concat(r,">")}else if(null===e)D("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===i(e)){var p=e.format,d=o(e,L),y=Object.keys(d);if(1===y.length){var g=p?"".concat(y[0],", ").concat(p):y[0];t+="{{".concat(g,"}}")}else D("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else D("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),t}function H(e){var n=e.children,t=e.count,r=e.parent,a=e.i18nKey,u=e.tOptions,l=void 0===u?{}:u,f=e.values,p=e.defaults,d=e.components,y=e.ns,g=e.i18n,b=e.t,h=o(e,_),v=(0,c.useContext)(j)||{},O=v.i18n,w=v.defaultNS,E=g||O||x();if(!E)return C("You will need to pass in an i18next instance by using i18nextReactModule"),n;var S=b||E.t.bind(E)||function(e){return e},k=U(U({},P()),E.options&&E.options.react),N=y||S.ns||w||E.options&&E.options.defaultNS;N="string"==typeof N?[N]:N||["translation"];var I=p||F(n,k)||k.transEmptyNodeValue||a,D=k.hashTransKey,R=a||(D?D(I):I),A=f?l.interpolation:{interpolation:U(U({},l.interpolation),{},{prefix:"#$?",suffix:"?$#"})},T=U(U(U(U({},l),{},{count:t},f),A),{},{defaultValue:I,ns:N}),z=function(e,n,t,r,o){if(""===n)return[];var a=r.transKeepBasicHtmlNodesFor||[],c=n&&new RegExp(a.join("|")).test(n);if(!e&&!c)return[n];var u={};!function e(n){W(n).forEach((function(n){"string"!=typeof n&&(V(n)?e(K(n)):"object"!==i(n)||s().isValidElement(n)||Object.assign(u,n))}))}(e);var l=m("<0>".concat(n,"</0>")),f=U(U({},u),o);function p(e,n,t){var r=K(e),o=y(r,n.children,t);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return s().isValidElement(e)}))}(r)&&0===o.length?r:o}function d(e,n,t,r,o){e.dummy&&(e.children=n),t.push(s().cloneElement(e,U(U({},e.props),{},{key:r}),o?void 0:n))}function y(n,o,u){var l=W(n);return W(o).reduce((function(n,o,g){var m,b,h,v=o.children&&o.children[0]&&o.children[0].content&&t.services.interpolator.interpolate(o.children[0].content,f,t.language);if("tag"===o.type){var O=l[parseInt(o.name,10)];!O&&1===u.length&&u[0][o.name]&&(O=u[0][o.name]),O||(O={});var j=0!==Object.keys(o.attrs).length?(m={props:o.attrs},(h=U({},b=O)).props=Object.assign(m.props,b.props),h):O,w=s().isValidElement(j),P=w&&V(o,!0)&&!o.voidElement,E=c&&"object"===i(j)&&j.dummy&&!w,S="object"===i(e)&&null!==e&&Object.hasOwnProperty.call(e,o.name);if("string"==typeof j){var x=t.services.interpolator.interpolate(j,f,t.language);n.push(x)}else if(V(j)||P)d(j,p(j,o,u),n,g);else if(E){var k=y(l,o.children,u);n.push(s().cloneElement(j,U(U({},j.props),{},{key:g}),k))}else if(Number.isNaN(parseFloat(o.name)))if(S)d(j,p(j,o,u),n,g,o.voidElement);else if(r.transSupportBasicHtmlNodes&&a.indexOf(o.name)>-1)if(o.voidElement)n.push(s().createElement(o.name,{key:"".concat(o.name,"-").concat(g)}));else{var N=y(l,o.children,u);n.push(s().createElement(o.name,{key:"".concat(o.name,"-").concat(g)},N))}else if(o.voidElement)n.push("<".concat(o.name," />"));else{var I=y(l,o.children,u);n.push("<".concat(o.name,">").concat(I,"</").concat(o.name,">"))}else if("object"!==i(j)||w)1===o.children.length&&v?n.push(s().cloneElement(j,U(U({},j.props),{},{key:g}),v)):n.push(s().cloneElement(j,U(U({},j.props),{},{key:g})));else{var D=o.children[0]?v:null;D&&n.push(D)}}else if("text"===o.type){var R=r.transWrapTextNodes,C=t.services.interpolator.interpolate(o.content,f,t.language);R?n.push(s().createElement(R,{key:"".concat(o.name,"-").concat(g)},C)):n.push(C)}return n}),[])}return K(y([{dummy:!0,children:e}],l,W(e||[]))[0])}(d||n,R?S(R,T):I,E,k,T),L=void 0!==r?r:k.defaultTransParent;return L?s().createElement(L,h,z):z}function M(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function $(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return M(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?M(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function q(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,c.useContext)(j)||{},o=r.i18n,i=r.defaultNS,a=t||o||x();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new E),!a){C("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},u=[s,{},!1];return u.t=s,u.i18n={},u.ready=!1,u}a.options.react&&void 0!==a.options.react.wait&&C("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=Y(Y(Y({},P()),a.options.react),n),f=l.useSuspense,p=e||i||a.options&&a.options.defaultNS;p="string"==typeof p?[p]:p||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(p);var d=(a.isInitialized||a.initializedStoreOnce)&&p.every((function(e){return T(e,a,l)}));function y(){return a.getFixedT(null,"fallback"===l.nsMode?p:p[0])}var g=(0,c.useState)(y),m=$(g,2),b=m[0],h=m[1],v=(0,c.useRef)(!0);(0,c.useEffect)((function(){var e=l.bindI18n,n=l.bindI18nStore;function t(){v.current&&h(y)}return v.current=!0,d||f||A(a,p,(function(){v.current&&h(y)})),e&&a&&a.on(e,t),n&&a&&a.store.on(n,t),function(){v.current=!1,e&&a&&e.split(" ").forEach((function(e){return a.off(e,t)})),n&&a&&n.split(" ").forEach((function(e){return a.store.off(e,t)}))}}),[a,p.join()]);var O=(0,c.useRef)(!0);(0,c.useEffect)((function(){v.current&&!O.current&&h(y),O.current=!1}),[a]);var w=[b,a,d];if(w.t=b,w.i18n=a,w.ready=d,d)return w;if(!d&&!f)return w;throw new Promise((function(e){A(a,p,(function(){e()}))}))}var G=["forwardedRef"];function J(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?J(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function X(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function r(r){var i=r.forwardedRef,a=o(r,G),c=$(q(e,a),3),u=c[0],l=c[1],f=c[2],p=Q(Q({},a),{},{t:u,i18n:l,tReady:f});return n.withRef&&i?p.ref=i:!n.withRef&&i&&(p.forwardedRef=i),s().createElement(t,p)}return r.displayName="withI18nextTranslation(".concat(z(t),")"),r.WrappedComponent=t,n.withRef?s().forwardRef((function(e,n){return s().createElement(r,Object.assign({},e,{forwardedRef:n}))})):r}}var ee=["ns","children"];function ne(e){var n=e.ns,t=e.children,r=$(q(n,o(e,ee)),3),i=r[0],a=r[1],c=r[2];return t(i,{i18n:a,lng:a.language},c)}function te(e){var n=e.i18n,t=e.defaultNS,r=e.children,o=(0,c.useMemo)((function(){return{i18n:n,defaultNS:t}}),[n,t]);return(0,c.createElement)(j.Provider,{value:o},r)}function re(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.i18n,o=(0,c.useContext)(j)||{},i=o.i18n,a=r||i||x();a.options&&a.options.isClone||(e&&!a.initializedStoreOnce&&(a.services.resourceStore.data=e,a.options.ns=Object.values(e).reduce((function(e,n){return Object.keys(n).forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}),a.options.ns),a.initializedStoreOnce=!0,a.isInitialized=!0),n&&!a.initializedLanguageOnce&&(a.changeLanguage(n),a.initializedLanguageOnce=!0))}var oe=["initialI18nStore","initialLanguage"];function ie(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ae(){return function(e){function n(n){var t=n.initialI18nStore,r=n.initialLanguage,i=o(n,oe);return re(t,r),s().createElement(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ie(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ie(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},i))}return n.getInitialProps=N(e),n.displayName="withI18nextSSR(".concat(z(e),")"),n.WrappedComponent=e,n}}var ce=function(){return""},se=function(){return""},ue=function(){return""},le=function(){return""},fe=function(){return""},pe=function(){return""}},1432:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},6017:(e,n,t)=>{"use strict";function r(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,{Z:()=>r})}}]);