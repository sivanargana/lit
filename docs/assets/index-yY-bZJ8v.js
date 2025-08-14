(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe=globalThis,Ae=oe.ShadowRoot&&(oe.ShadyCSS===void 0||oe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xe=Symbol(),Ue=new WeakMap;let Ke=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==xe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ae&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Ue.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ue.set(t,e))}return e}toString(){return this.cssText}};const lt=s=>new Ke(typeof s=="string"?s:s+"",void 0,xe),te=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((r,n,i)=>r+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[i+1],s[0]);return new Ke(t,s,xe)},ct=(s,e)=>{if(Ae)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),n=oe.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=t.cssText,s.appendChild(r)}},He=Ae?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return lt(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ut,defineProperty:ht,getOwnPropertyDescriptor:dt,getOwnPropertyNames:pt,getOwnPropertySymbols:gt,getPrototypeOf:ft}=Object,he=globalThis,Re=he.trustedTypes,mt=Re?Re.emptyScript:"",bt=he.reactiveElementPolyfillSupport,J=(s,e)=>s,le={toAttribute(s,e){switch(e){case Boolean:s=s?mt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},we=(s,e)=>!ut(s,e),je={attribute:!0,type:String,converter:le,reflect:!1,useDefault:!1,hasChanged:we};Symbol.metadata??=Symbol("metadata"),he.litPropertyMetadata??=new WeakMap;let B=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=je){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(e,r,t);n!==void 0&&ht(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){const{get:n,set:i}=dt(this.prototype,e)??{get(){return this[t]},set(l){this[t]=l}};return{get:n,set(l){const c=n?.call(this);i?.call(this,l),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??je}static _$Ei(){if(this.hasOwnProperty(J("elementProperties")))return;const e=ft(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(J("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(J("properties"))){const t=this.properties,r=[...pt(t),...gt(t)];for(const n of r)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,n]of t)this.elementProperties.set(r,n)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const n=this._$Eu(t,r);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const n of r)t.unshift(He(n))}else e!==void 0&&t.push(He(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ct(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(n!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:le).toAttribute(t,r.type);this._$Em=e,i==null?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){const r=this.constructor,n=r._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const i=r.getPropertyOptions(n),l=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:le;this._$Em=n;const c=l.fromAttribute(t,i.type);this[n]=c??this._$Ej?.get(n)??c,this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){const n=this.constructor,i=this[e];if(r??=n.getPropertyOptions(e),!((r.hasChanged??we)(i,t)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:n,wrapped:i},l){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,l??t??this[e]),i!==!0||l!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,i]of this._$Ep)this[n]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,i]of r){const{wrapped:l}=i,c=this[n];l!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,i,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};B.elementStyles=[],B.shadowRootOptions={mode:"open"},B[J("elementProperties")]=new Map,B[J("finalized")]=new Map,bt?.({ReactiveElement:B}),(he.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=globalThis,ce=Se.trustedTypes,Le=ce?ce.createPolicy("lit-html",{createHTML:s=>s}):void 0,Xe="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,Ye="?"+j,vt=`<${Ye}>`,z=document,X=()=>z.createComment(""),Y=s=>s===null||typeof s!="object"&&typeof s!="function",ke=Array.isArray,yt=s=>ke(s)||typeof s?.[Symbol.iterator]=="function",ye=`[ 	
\f\r]`,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,De=/-->/g,ze=/>/g,L=RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ne=/'/g,Ie=/"/g,Qe=/^(?:script|style|textarea|title)$/i,$t=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),de=$t(1),N=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Be=new WeakMap,D=z.createTreeWalker(z,129);function et(s,e){if(!ke(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Le!==void 0?Le.createHTML(e):e}const _t=(s,e)=>{const t=s.length-1,r=[];let n,i=e===2?"<svg>":e===3?"<math>":"",l=Z;for(let c=0;c<t;c++){const p=s[c];let m,$,b=-1,k=0;for(;k<p.length&&(l.lastIndex=k,$=l.exec(p),$!==null);)k=l.lastIndex,l===Z?$[1]==="!--"?l=De:$[1]!==void 0?l=ze:$[2]!==void 0?(Qe.test($[2])&&(n=RegExp("</"+$[2],"g")),l=L):$[3]!==void 0&&(l=L):l===L?$[0]===">"?(l=n??Z,b=-1):$[1]===void 0?b=-2:(b=l.lastIndex-$[2].length,m=$[1],l=$[3]===void 0?L:$[3]==='"'?Ie:Ne):l===Ie||l===Ne?l=L:l===De||l===ze?l=Z:(l=L,n=void 0);const O=l===L&&s[c+1].startsWith("/>")?" ":"";i+=l===Z?p+vt:b>=0?(r.push(m),p.slice(0,b)+Xe+p.slice(b)+j+O):p+j+(b===-2?c:O)}return[et(s,i+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class Q{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let i=0,l=0;const c=e.length-1,p=this.parts,[m,$]=_t(e,t);if(this.el=Q.createElement(m,r),D.currentNode=this.el.content,t===2||t===3){const b=this.el.content.firstChild;b.replaceWith(...b.childNodes)}for(;(n=D.nextNode())!==null&&p.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const b of n.getAttributeNames())if(b.endsWith(Xe)){const k=$[l++],O=n.getAttribute(b).split(j),U=/([.?@])?(.*)/.exec(k);p.push({type:1,index:i,name:U[2],strings:O,ctor:U[1]==="."?xt:U[1]==="?"?wt:U[1]==="@"?St:pe}),n.removeAttribute(b)}else b.startsWith(j)&&(p.push({type:6,index:i}),n.removeAttribute(b));if(Qe.test(n.tagName)){const b=n.textContent.split(j),k=b.length-1;if(k>0){n.textContent=ce?ce.emptyScript:"";for(let O=0;O<k;O++)n.append(b[O],X()),D.nextNode(),p.push({type:2,index:++i});n.append(b[k],X())}}}else if(n.nodeType===8)if(n.data===Ye)p.push({type:2,index:i});else{let b=-1;for(;(b=n.data.indexOf(j,b+1))!==-1;)p.push({type:7,index:i}),b+=j.length-1}i++}}static createElement(e,t){const r=z.createElement("template");return r.innerHTML=e,r}}function q(s,e,t=s,r){if(e===N)return e;let n=r!==void 0?t._$Co?.[r]:t._$Cl;const i=Y(e)?void 0:e._$litDirective$;return n?.constructor!==i&&(n?._$AO?.(!1),i===void 0?n=void 0:(n=new i(s),n._$AT(s,t,r)),r!==void 0?(t._$Co??=[])[r]=n:t._$Cl=n),n!==void 0&&(e=q(s,n._$AS(s,e.values),n,r)),e}class At{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??z).importNode(t,!0);D.currentNode=n;let i=D.nextNode(),l=0,c=0,p=r[0];for(;p!==void 0;){if(l===p.index){let m;p.type===2?m=new re(i,i.nextSibling,this,e):p.type===1?m=new p.ctor(i,p.name,p.strings,this,e):p.type===6&&(m=new kt(i,this,e)),this._$AV.push(m),p=r[++c]}l!==p?.index&&(i=D.nextNode(),l++)}return D.currentNode=z,n}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class re{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),Y(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==N&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):yt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&Y(this._$AH)?this._$AA.nextSibling.data=e:this.T(z.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Q.createElement(et(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{const i=new At(n,this),l=i.u(this.options);i.p(t),this.T(l),this._$AH=i}}_$AC(e){let t=Be.get(e.strings);return t===void 0&&Be.set(e.strings,t=new Q(e)),t}k(e){ke(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const i of e)n===t.length?t.push(r=new re(this.O(X()),this.O(X()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class pe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}_$AI(e,t=this,r,n){const i=this.strings;let l=!1;if(i===void 0)e=q(this,e,t,0),l=!Y(e)||e!==this._$AH&&e!==N,l&&(this._$AH=e);else{const c=e;let p,m;for(e=i[0],p=0;p<i.length-1;p++)m=q(this,c[r+p],t,p),m===N&&(m=this._$AH[p]),l||=!Y(m)||m!==this._$AH[p],m===A?e=A:e!==A&&(e+=(m??"")+i[p+1]),this._$AH[p]=m}l&&!n&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class xt extends pe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}}class wt extends pe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}}class St extends pe{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){if((e=q(this,e,t,0)??A)===N)return;const r=this._$AH,n=e===A&&r!==A||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==A&&(r===A||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class kt{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const Et=Se.litHtmlPolyfillSupport;Et?.(Q,re),(Se.litHtmlVersions??=[]).push("3.3.1");const Ft=(s,e,t)=>{const r=t?.renderBefore??e;let n=r._$litPart$;if(n===void 0){const i=t?.renderBefore??null;r._$litPart$=n=new re(e.insertBefore(X(),i),i,void 0,t??{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=globalThis;let K=class extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ft(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return N}};K._$litElement$=!0,K.finalized=!0,Ee.litElementHydrateSupport?.({LitElement:K});const Ct=Ee.litElementPolyfillSupport;Ct?.({LitElement:K});(Ee.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:we},Ot=(s=Pt,e,t)=>{const{kind:r,metadata:n}=t;let i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),r==="setter"&&((s=Object.create(s)).wrapped=!0),i.set(t.name,s),r==="accessor"){const{name:l}=t;return{set(c){const p=e.get.call(this);e.set.call(this,c),this.requestUpdate(l,p,s)},init(c){return c!==void 0&&this.C(l,void 0,s,c),c}}}if(r==="setter"){const{name:l}=t;return function(c){const p=this[l];e.call(this,c),this.requestUpdate(l,p,s)}}throw Error("Unsupported decorator location: "+r)};function P(s){return(e,t)=>typeof t=="object"?Ot(s,e,t):((r,n,i)=>{const l=n.hasOwnProperty(i);return n.constructor.createProperty(i,r),l?Object.getOwnPropertyDescriptor(n,i):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fe(s){return P({...s,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt={ATTRIBUTE:1},Mt=s=>(...e)=>({_$litDirective$:s,values:e});let Ut=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=Mt(class extends Ut{constructor(s){if(super(s),s.type!==Tt.ATTRIBUTE||s.name!=="class"||s.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(s){return" "+Object.keys(s).filter(e=>s[e]).join(" ")+" "}update(s,[e]){if(this.st===void 0){this.st=new Set,s.strings!==void 0&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}const t=s.element.classList;for(const r of this.st)r in e||(t.remove(r),this.st.delete(r));for(const r in e){const n=!!e[r];n===this.st.has(r)||this.nt?.has(r)||(n?(t.add(r),this.st.add(r)):(t.remove(r),this.st.delete(r)))}return N}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=s=>s??A;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=Symbol.for(""),Ht=s=>{if(s?.r===rt)return s?._$litStatic$},qe=(s,...e)=>({_$litStatic$:e.reduce((t,r,n)=>t+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+s[n+1],s[0]),r:rt}),We=new Map,Rt=s=>(e,...t)=>{const r=t.length;let n,i;const l=[],c=[];let p,m=0,$=!1;for(;m<r;){for(p=e[m];m<r&&(i=t[m],(n=Ht(i))!==void 0);)p+=n+e[++m],$=!0;m!==r&&c.push(i),l.push(p),m++}if(m===r&&l.push(e[r]),$){const b=l.join("$$lit$$");(e=We.get(b))===void 0&&(l.raw=l,We.set(b,e=l)),t=c}return s(e,...t)},Ge=Rt(de),jt=te`
  :host {
  --msr-spinner-track-width:2px;
  --msr-spinner-track-color: var(--msr-color-gray-300);
  --msr-spinner-indicator-color: var(--msr-color-primary-500);
    width: 1em;
    height: 1em;
  }
  .spinner {
    position: relative;
    width: 100%;
    height: 100%;
    animation-name:spinner;
    animation-duration:600ms;
    animation-iteration-count:infinite;
   animation-timing-function:linear;
 
  }
  .spinner:before,
  .spinner:after {
    content: "";
    position: absolute;
    inset: 0px;
    width: 100%;
    height: 100%;
    border: var(--msr-spinner-track-width) solid transparent;
    border-radius: 99999px;
  
  }
  .spinner:before {
    border-color: var(--msr-spinner-track-color);
  }
  .spinner:after {
    border-left-color: var(--msr-spinner-indicator-color);
  }
    @keyframes spinner{
    to{
    transform:rotate(360deg)
    }
    }
`,Lt=te`
:host *, :host ::before, :host ::after{
    box-sizing:border-box;
  }
    :host{
    display:inline-block; 
    width:auto;
    }
  
`,Ce=class Ce extends K{static get styles(){return[Lt,...this.msrStyles]}};Ce.msrStyles=[];let W=Ce;var Dt=Object.getOwnPropertyDescriptor,zt=(s,e,t,r)=>{for(var n=r>1?void 0:r?Dt(e,t):e,i=s.length-1,l;i>=0;i--)(l=s[i])&&(n=l(n)||n);return n};let _e=class extends W{render(){return de`
    <div class="spinner"></div>  
    `}};_e.msrStyles=[jt];_e=zt([ge("msr-spinner")],_e);const Nt=te`
  .btn {
   display: inline-flex;
   align-items: center;
   justify-content: center;
   padding: 0;
   margin: 0;
   border: 1px solid transparent;
   background-color: transparent;
   border-radius: 4px;
   text-decoration: none;
   cursor: pointer;
 }

 .btn.btn--small {
   min-height: 32px;
 }

 .btn.btn--medium {
   min-height: 40px;
 }

 .btn.btn--large {
   min-height: 50px;
 }

 .btn .btn__label {
   display: inline-block;
   line-height: 1;
   font-weight: 500;
   font-family: var(--msr-font-family);
   color: currentColor;
 }

 .btn.btn--medium .btn__label {
   font-size: 14px;
   padding: 0 1rem;
 }

 .btn.btn--small .btn__label {
   font-size: 12px;
   padding: 0 0.75rem;
 }

 .btn.btn--large .btn__label {
   font-size: 16px;
   padding: 0 1.25rem;
 }

 .btn.btn--medium.btn--has-prefix {
   padding-left: 1rem;
 }

 .btn.btn--small.btn--has-prefix {
   padding-left: 0.75rem;
 }

 .btn.btn--large.btn--has-prefix {
   padding-left: 1.25rem;
 }

 .btn.btn--medium.btn--has-suffix,
 .btn.btn--medium.btn--loading {
   padding-right: 1rem;
 }

 .btn.btn--small.btn--has-suffix,
 .btn.btn--small.btn--loading {
   padding-right: 0.75rem;
 }

 .btn.btn--large.btn--has-suffix,
 .btn.btn--large.btn--loading {
   padding-right: 1.25rem;
 }

 .btn.btn--pill {
   border-radius: 9999px;
 }

 .btn.btn--circle {
   border-radius: 9999px;
 }

 .btn.btn--small.btn--circle {
   width: 32px;
 }

 .btn.btn--medium.btn--circle {
   width: 40px;
 }

 .btn.btn--large.btn--circle {
   width: 50px;
 }

 .btn:hover.btn--text {
   background-color: var(--msr-color-primary-50); 
 }

 .btn.btn--default {
   background-color: var(--msr-color-foreground);
   border-color: var(--msr-color-gray-300);
   color: var(--msr-color-gray-900);
 }

 .btn:hover.btn--default {
   background-color: var(--msr-color-primary-50);
   border-color: var(--msr-color-primary-400);
   color: var(--msr-color-primary-900);
 }

 .btn.btn--primary {
   background-color: var(--msr-color-primary-500);
   border-color: var(--msr-color-primary-500);
   color: white;
 }

 .btn:hover.btn--primary {
   background-color: var(--msr-color-primary-600);
   border-color: var(--msr-color-primary-600);
 }

 .btn.btn--success {
   background-color: var(--msr-color-green-500);
   border-color: var(--msr-color-green-500);
   color: white;
 }

 .btn:hover.btn--success {
   background-color: var(--msr-color-green-600);
   border-color: var(--msr-color-green-600);
 }

 .btn.btn--neutral {
   background-color: var(--msr-color-gray-500);
   border-color: var(--msr-color-gray-500);
   color: white;
 }

 .btn:hover.btn--neutral {
   background-color: var(--msr-color-gray-600);
   border-color: var(--msr-color-gray-600);
 }

 .btn.btn--warning {
   background-color: var(--msr-color-amber-500);
   background-color: var(--msr-color-amber-500);
   color: black;
 }

 .btn:hover.btn--warning {
   background-color: var(--msr-color-amber-600);
   border-color: var(--msr-color-amber-600);
 }

 .btn.btn--danger {
   background-color: var(--msr-color-red-500);
   border-color: var(--msr-color-red-500);
   color: white;
 }

 .btn:hover.btn--danger {
   background-color: var(--msr-color-red-600);
   border-color: var(--msr-color-red-600);
 }

 .btn.btn--default.btn--outline {
   background-color: transparent;
   border-color: var(--msr-color-gray-300);
   color: var(--msr-color-gray-900);
 }

 .btn:hover.btn--default.btn--outline {
   border-color: var(--msr-color-primary-500);
   background-color: var(--msr-color-primary-500);
   color: white;
 }

 .btn.btn--primary.btn--outline {
   background-color: transparent;
   border-color: var(--msr-color-primary-500);
   color: var(--msr-color-primary-500);
 }

 .btn:hover.btn--primary.btn--outline {
   background-color: var(--msr-color-primary-500);
   color: white;
 }

 .btn.btn--success.btn--outline {
   background-color: transparent;
   border-color: var(--msr-color-green-500);
   color: var(--msr-color-green-500);
 }

 .btn:hover.btn--success.btn--outline {
   background-color: var(--msr-color-green-500);
   color: white;
 }

 .btn.btn--neutral.btn--outline {
   background-color: transparent;
   border-color: var(--msr-color-gray-500);
   color: var(--msr-color-gray-500);
 }

 .btn:hover.btn--neutral.btn--outline {
   background-color: var(--msr-color-gray-500);
   color: white;
 }

 .btn.btn--warning.btn--outline {
   background-color: transparent;
   border-color: var(--msr-color-amber-500);
   color: var(--msr-color-amber-500);
 }

 .btn:hover.btn--warning.btn--outline {
   background-color: var(--msr-color-amber-500);
   color: black;
 }

 .btn.btn--danger.btn--outline {
   background-color: transparent;
   border-color: var(--msr-color-red-500);
   color: var(--msr-color-red-500);
 }

 .btn:hover.btn--danger.btn--outline {
   background-color: var(--msr-color-red-500);
   color: white;
 }

 .btn.btn--disabled {
   opacity: 0.5;
   pointer-events: none;
 }

 msr-spinner {
   font-size: 150%;
   --msr-spinner-track-color:color-mix(in srgb, currentColor 30%, transparent);
   --msr-spinner-indicator-color:currentColor;
 }
`;var It=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,C=(s,e,t,r)=>{for(var n=r>1?void 0:r?Bt(e,t):e,i=s.length-1,l;i>=0;i--)(l=s[i])&&(n=(r?l(e,t,n):l(n))||n);return r&&n&&It(e,t,n),n};let S=class extends W{constructor(){super(...arguments),this.hasPrefix=!1,this.hasSuffix=!1,this.hasLabel=!1,this.href="",this.variant="default",this.size="medium",this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}checkSlot(s){return s.target.assignedNodes({flatten:!0}).length>0}render(){const s=this.href?qe`a`:qe`button`;return Ge`
      <${s}
      class=${tt({btn:!0,"btn--default":this.variant==="default","btn--primary":this.variant==="primary","btn--success":this.variant==="success","btn--neutral":this.variant==="neutral","btn--warning":this.variant==="warning","btn--danger":this.variant==="danger","btn--text":this.variant==="text","btn--small":this.size==="small","btn--medium":this.size==="medium","btn--large":this.size==="large","btn--circle":this.circle,"btn--disabled":this.disabled,"btn--loading":this.loading,"btn--outline":this.outline,"btn--pill":this.pill,"btn--has-prefix":this.hasPrefix,"btn--has-suffix":this.hasSuffix,"btn--has-label":this.hasLabel})}
    ?disabled=${V(this.href?void 0:this.disabled)}
    type=${V(this.href?void 0:this.type)}
    href=${V(this.href?this.href:void 0)}
    target=${V(this.href?this.target:void 0)}
         download=${V(this.href?this.download:void 0)}
      ><slot name="prefix" class="btn__prefix" @slotchange=${e=>this.hasPrefix=this.checkSlot(e)}></slot>
        <slot class="btn__label" @slotchange=${e=>this.hasLabel=this.checkSlot(e)}></slot>
        <slot name="suffix" class="btn__suffix" @slotchange=${e=>this.hasSuffix=this.checkSlot(e)}></slot>
         ${this.loading?Ge`<msr-spinner></msr-spinner>`:A}
       </${s}>
    `}};S.msrStyles=[Nt];C([fe()],S.prototype,"hasPrefix",2);C([fe()],S.prototype,"hasSuffix",2);C([fe()],S.prototype,"hasLabel",2);C([P()],S.prototype,"href",2);C([P({reflect:!0})],S.prototype,"variant",2);C([P({reflect:!0})],S.prototype,"size",2);C([P({type:Boolean,reflect:!0})],S.prototype,"disabled",2);C([P({type:Boolean,reflect:!0})],S.prototype,"loading",2);C([P({type:Boolean,reflect:!0})],S.prototype,"outline",2);C([P({type:Boolean,reflect:!0})],S.prototype,"pill",2);C([P({type:Boolean,reflect:!0})],S.prototype,"circle",2);C([P()],S.prototype,"download",2);C([P()],S.prototype,"type",2);C([P()],S.prototype,"target",2);S=C([ge("msr-button")],S);const qt=te`
  .card {
    background-color: white;
    border: 1px solid var(--msr-color-gray-300);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
  }

  .card .card__header {
    display: none;
    flex-direction: column;
    border-bottom: 1px solid var(--msr-color-gray-300);
    padding: 0.5rem 1rem;
  }

  .card .card__header [slot="header"] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card.card--has-header .card__header {
    display: flex;
  }

  .card .card__body {
    display: block;
    padding: 1rem;
  }
`;var Wt=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,nt=(s,e,t,r)=>{for(var n=r>1?void 0:r?Gt(e,t):e,i=s.length-1,l;i>=0;i--)(l=s[i])&&(n=(r?l(e,t,n):l(n))||n);return r&&n&&Wt(e,t,n),n};let ue=class extends W{constructor(){super(...arguments),this.hasHeader=!1}render(){return de`
    <div class=${tt({card:!0,"card--has-header":this.hasHeader})}>
    <slot class="card__image" name="image"></slot>
    <slot class="card__header" name="header" @slotchange=${e=>this.hasHeader=e.target.assignedNodes({flatten:!0}).length>0}></slot>
    <slot class="card__body"></slot>
    <slot class="card__footer" name="footer"></slot>
    </div>  
    `}};ue.msrStyles=[qt];nt([fe()],ue.prototype,"hasHeader",2);ue=nt([ge("msr-card")],ue);const Zt=te`
 

pre{
margin:0px;
 display:block;
 background-color:var(--msr-color-gray-200);
 padding:1rem;
border-radius:5px;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: slategray;
}

.token.punctuation {
	color: #999;
}

.token.namespace {
	opacity: .7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
	color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
	color: #9a6e3a;
	
}

.token.atrule,
.token.attr-value,
.token.keyword {
	color: #07a;
}

.token.function,
.token.class-name {
	color: #DD4A68;
}

.token.regex,
.token.important,
.token.variable {
	color: #e90;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}
`;var Ze=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vt(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var $e={exports:{}},Ve;function Jt(){return Ve||(Ve=1,function(s){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(r){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,l={},c={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function o(a){return a instanceof p?new p(a.type,o(a.content),a.alias):Array.isArray(a)?a.map(o):a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(o){return Object.prototype.toString.call(o).slice(8,-1)},objId:function(o){return o.__id||Object.defineProperty(o,"__id",{value:++i}),o.__id},clone:function o(a,u){u=u||{};var h,d;switch(c.util.type(a)){case"Object":if(d=c.util.objId(a),u[d])return u[d];h={},u[d]=h;for(var f in a)a.hasOwnProperty(f)&&(h[f]=o(a[f],u));return h;case"Array":return d=c.util.objId(a),u[d]?u[d]:(h=[],u[d]=h,a.forEach(function(v,g){h[g]=o(v,u)}),h);default:return a}},getLanguage:function(o){for(;o;){var a=n.exec(o.className);if(a)return a[1].toLowerCase();o=o.parentElement}return"none"},setLanguage:function(o,a){o.className=o.className.replace(RegExp(n,"gi"),""),o.classList.add("language-"+a)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(h){var o=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(h.stack)||[])[1];if(o){var a=document.getElementsByTagName("script");for(var u in a)if(a[u].src==o)return a[u]}return null}},isActive:function(o,a,u){for(var h="no-"+a;o;){var d=o.classList;if(d.contains(a))return!0;if(d.contains(h))return!1;o=o.parentElement}return!!u}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(o,a){var u=c.util.clone(c.languages[o]);for(var h in a)u[h]=a[h];return u},insertBefore:function(o,a,u,h){h=h||c.languages;var d=h[o],f={};for(var v in d)if(d.hasOwnProperty(v)){if(v==a)for(var g in u)u.hasOwnProperty(g)&&(f[g]=u[g]);u.hasOwnProperty(v)||(f[v]=d[v])}var _=h[o];return h[o]=f,c.languages.DFS(c.languages,function(E,H){H===_&&E!=o&&(this[E]=f)}),f},DFS:function o(a,u,h,d){d=d||{};var f=c.util.objId;for(var v in a)if(a.hasOwnProperty(v)){u.call(a,v,a[v],h||v);var g=a[v],_=c.util.type(g);_==="Object"&&!d[f(g)]?(d[f(g)]=!0,o(g,u,null,d)):_==="Array"&&!d[f(g)]&&(d[f(g)]=!0,o(g,u,v,d))}}},plugins:{},highlightAll:function(o,a){c.highlightAllUnder(document,o,a)},highlightAllUnder:function(o,a,u){var h={callback:u,container:o,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};c.hooks.run("before-highlightall",h),h.elements=Array.prototype.slice.apply(h.container.querySelectorAll(h.selector)),c.hooks.run("before-all-elements-highlight",h);for(var d=0,f;f=h.elements[d++];)c.highlightElement(f,a===!0,h.callback)},highlightElement:function(o,a,u){var h=c.util.getLanguage(o),d=c.languages[h];c.util.setLanguage(o,h);var f=o.parentElement;f&&f.nodeName.toLowerCase()==="pre"&&c.util.setLanguage(f,h);var v=o.textContent,g={element:o,language:h,grammar:d,code:v};function _(H){g.highlightedCode=H,c.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,c.hooks.run("after-highlight",g),c.hooks.run("complete",g),u&&u.call(g.element)}if(c.hooks.run("before-sanity-check",g),f=g.element.parentElement,f&&f.nodeName.toLowerCase()==="pre"&&!f.hasAttribute("tabindex")&&f.setAttribute("tabindex","0"),!g.code){c.hooks.run("complete",g),u&&u.call(g.element);return}if(c.hooks.run("before-highlight",g),!g.grammar){_(c.util.encode(g.code));return}if(a&&r.Worker){var E=new Worker(c.filename);E.onmessage=function(H){_(H.data)},E.postMessage(JSON.stringify({language:g.language,code:g.code,immediateClose:!0}))}else _(c.highlight(g.code,g.grammar,g.language))},highlight:function(o,a,u){var h={code:o,grammar:a,language:u};if(c.hooks.run("before-tokenize",h),!h.grammar)throw new Error('The language "'+h.language+'" has no grammar.');return h.tokens=c.tokenize(h.code,h.grammar),c.hooks.run("after-tokenize",h),p.stringify(c.util.encode(h.tokens),h.language)},tokenize:function(o,a){var u=a.rest;if(u){for(var h in u)a[h]=u[h];delete a.rest}var d=new b;return k(d,d.head,o),$(o,d,a,d.head,0),U(d)},hooks:{all:{},add:function(o,a){var u=c.hooks.all;u[o]=u[o]||[],u[o].push(a)},run:function(o,a){var u=c.hooks.all[o];if(!(!u||!u.length))for(var h=0,d;d=u[h++];)d(a)}},Token:p};r.Prism=c;function p(o,a,u,h){this.type=o,this.content=a,this.alias=u,this.length=(h||"").length|0}p.stringify=function o(a,u){if(typeof a=="string")return a;if(Array.isArray(a)){var h="";return a.forEach(function(_){h+=o(_,u)}),h}var d={type:a.type,content:o(a.content,u),tag:"span",classes:["token",a.type],attributes:{},language:u},f=a.alias;f&&(Array.isArray(f)?Array.prototype.push.apply(d.classes,f):d.classes.push(f)),c.hooks.run("wrap",d);var v="";for(var g in d.attributes)v+=" "+g+'="'+(d.attributes[g]||"").replace(/"/g,"&quot;")+'"';return"<"+d.tag+' class="'+d.classes.join(" ")+'"'+v+">"+d.content+"</"+d.tag+">"};function m(o,a,u,h){o.lastIndex=a;var d=o.exec(u);if(d&&h&&d[1]){var f=d[1].length;d.index+=f,d[0]=d[0].slice(f)}return d}function $(o,a,u,h,d,f){for(var v in u)if(!(!u.hasOwnProperty(v)||!u[v])){var g=u[v];g=Array.isArray(g)?g:[g];for(var _=0;_<g.length;++_){if(f&&f.cause==v+","+_)return;var E=g[_],H=E.inside,Pe=!!E.lookbehind,Oe=!!E.greedy,st=E.alias;if(Oe&&!E.pattern.global){var it=E.pattern.toString().match(/[imsuy]*$/)[0];E.pattern=RegExp(E.pattern.source,it+"g")}for(var Te=E.pattern||E,F=h.next,M=d;F!==a.tail&&!(f&&M>=f.reach);M+=F.value.length,F=F.next){var I=F.value;if(a.length>o.length)return;if(!(I instanceof p)){var ne=1,T;if(Oe){if(T=m(Te,M,o,Pe),!T||T.index>=o.length)break;var se=T.index,at=T.index+T[0].length,R=M;for(R+=F.value.length;se>=R;)F=F.next,R+=F.value.length;if(R-=F.value.length,M=R,F.value instanceof p)continue;for(var G=F;G!==a.tail&&(R<at||typeof G.value=="string");G=G.next)ne++,R+=G.value.length;ne--,I=o.slice(M,R),T.index-=M}else if(T=m(Te,0,I,Pe),!T)continue;var se=T.index,ie=T[0],me=I.slice(0,se),Me=I.slice(se+ie.length),be=M+I.length;f&&be>f.reach&&(f.reach=be);var ae=F.prev;me&&(ae=k(a,ae,me),M+=me.length),O(a,ae,ne);var ot=new p(v,H?c.tokenize(ie,H):ie,st,ie);if(F=k(a,ae,ot),Me&&k(a,F,Me),ne>1){var ve={cause:v+","+_,reach:be};$(o,a,u,F.prev,M,ve),f&&ve.reach>f.reach&&(f.reach=ve.reach)}}}}}}function b(){var o={value:null,prev:null,next:null},a={value:null,prev:o,next:null};o.next=a,this.head=o,this.tail=a,this.length=0}function k(o,a,u){var h=a.next,d={value:u,prev:a,next:h};return a.next=d,h.prev=d,o.length++,d}function O(o,a,u){for(var h=a.next,d=0;d<u&&h!==o.tail;d++)h=h.next;a.next=h,h.prev=a,o.length-=d}function U(o){for(var a=[],u=o.head.next;u!==o.tail;)a.push(u.value),u=u.next;return a}if(!r.document)return r.addEventListener&&(c.disableWorkerMessageHandler||r.addEventListener("message",function(o){var a=JSON.parse(o.data),u=a.language,h=a.code,d=a.immediateClose;r.postMessage(c.highlight(h,c.languages[u],u)),d&&r.close()},!1)),c;var x=c.util.currentScript();x&&(c.filename=x.src,x.hasAttribute("data-manual")&&(c.manual=!0));function y(){c.manual||c.highlightAll()}if(!c.manual){var w=document.readyState;w==="loading"||w==="interactive"&&x&&x.defer?document.addEventListener("DOMContentLoaded",y):window.requestAnimationFrame?window.requestAnimationFrame(y):window.setTimeout(y,16)}return c}(e);s.exports&&(s.exports=t),typeof Ze<"u"&&(Ze.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(n,i){var l={};l["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[i]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var c={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};c["language-"+i]={pattern:/[\s\S]+/,inside:t.languages[i]};var p={};p[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:c},t.languages.insertBefore("markup","cdata",p)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(r,n){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:t.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(r){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+n.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var i=r.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",n=function(x,y){return"✖ Error "+x+" while fetching file: "+y},i="✖ Error: File does not exist or is empty",l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},c="data-src-status",p="loading",m="loaded",$="failed",b="pre[data-src]:not(["+c+'="'+m+'"]):not(['+c+'="'+p+'"])';function k(x,y,w){var o=new XMLHttpRequest;o.open("GET",x,!0),o.onreadystatechange=function(){o.readyState==4&&(o.status<400&&o.responseText?y(o.responseText):o.status>=400?w(n(o.status,o.statusText)):w(i))},o.send(null)}function O(x){var y=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(x||"");if(y){var w=Number(y[1]),o=y[2],a=y[3];return o?a?[w,Number(a)]:[w,void 0]:[w,w]}}t.hooks.add("before-highlightall",function(x){x.selector+=", "+b}),t.hooks.add("before-sanity-check",function(x){var y=x.element;if(y.matches(b)){x.code="",y.setAttribute(c,p);var w=y.appendChild(document.createElement("CODE"));w.textContent=r;var o=y.getAttribute("data-src"),a=x.language;if(a==="none"){var u=(/\.(\w+)$/.exec(o)||[,"none"])[1];a=l[u]||u}t.util.setLanguage(w,a),t.util.setLanguage(y,a);var h=t.plugins.autoloader;h&&h.loadLanguages(a),k(o,function(d){y.setAttribute(c,m);var f=O(y.getAttribute("data-range"));if(f){var v=d.split(/\r\n?|\n/g),g=f[0],_=f[1]==null?v.length:f[1];g<0&&(g+=v.length),g=Math.max(0,Math.min(g-1,v.length)),_<0&&(_+=v.length),_=Math.max(0,Math.min(_,v.length)),d=v.slice(g,_).join(`
`),y.hasAttribute("data-start")||y.setAttribute("data-start",String(g+1))}w.textContent=d,t.highlightElement(w)},function(d){y.setAttribute(c,$),w.textContent=d})}}),t.plugins.fileHighlight={highlight:function(y){for(var w=(y||document).querySelectorAll(b),o=0,a;a=w[o++];)t.highlightElement(a)}};var U=!1;t.fileHighlight=function(){U||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),U=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()}($e)),$e.exports}var Kt=Jt();const Je=Vt(Kt);var Xt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,Fe=(s,e,t,r)=>{for(var n=r>1?void 0:r?Yt(e,t):e,i=s.length-1,l;i>=0;i--)(l=s[i])&&(n=(r?l(e,t,n):l(n))||n);return r&&n&&Xt(e,t,n),n};let ee=class extends W{constructor(){super(...arguments),this.language="markup",this.code=""}firstUpdated(){const s=this.shadowRoot?.querySelector("code");s.innerHTML=Je.highlight(this.code,Je.languages[this.language],this.language)}render(){return de`
      <pre><code class="language-${this.language}"></code></pre>
    `}};ee.msrStyles=[Zt];Fe([P()],ee.prototype,"language",2);Fe([P()],ee.prototype,"code",2);ee=Fe([ge("msr-code")],ee);
