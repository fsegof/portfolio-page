/*! For license information please see 6179.js.LICENSE.txt */
"use strict";(globalThis.itsecWebpackJsonP=globalThis.itsecWebpackJsonP||[]).push([[6179],{36179:(e,t,n)=>{n.d(t,{T2:()=>te,Z8:()=>K,w2:()=>w,KM:()=>fe,Xp:()=>ne,ss:()=>be,gN:()=>x,Lu:()=>ke,rN:()=>pe,s8:()=>v,Yw:()=>F,yR:()=>b,yA:()=>$,mp:()=>Q,in:()=>Y});var s=n(6293),i=n(64893),r=n(95122),o=n(31511),a=n(94184),l=n.n(a),c=n(92819),d=n(9576);function u({id:e,isVisible:t,children:n}){return(0,s.createElement)("div",{className:"itsec-site-scan__details",id:e,style:{display:t?"block":"none"}},(0,s.createElement)("ul",null,n))}function h({type:e,status:t,description:n,children:o}){const a=(0,d.useInstanceId)(h),[m,p]=(0,s.useState)(!1);let f;switch(t){case"clean":f=(0,r.__)("Clean","better-wp-security");break;case"warn":f=(0,r.__)("Warn","better-wp-security");break;case"error":f=(0,r.__)("Error","better-wp-security");break;default:f=t}const g=(0,s.createElement)("span",{className:`itsec-site-scan__status itsec-site-scan__status--${t}`},f);return(0,s.createElement)("div",{className:l()("itsec-site-scan-results-section",`itsec-site-scan-results-${e}-section`)},(0,c.isEmpty)(o)?(0,s.createElement)("p",null,g," ",n):(0,s.createElement)(s.Fragment,null,(0,s.createElement)("p",null,g,n,(0,s.createElement)(i.Button,{variant:"link",className:"itsec-site-scan-toggle-details",onClick:()=>p(!m),"aria-expanded":m,"aria-controls":`itsec-site-scan__details--${a}`},m?(0,r.__)("Hide Details","better-wp-security"):(0,r.__)("Show Details","better-wp-security"))),(0,s.createElement)(u,{id:`itsec-site-scan__details--${a}`,isVisible:m},o)))}const m=function({results:e,showErrorDetails:t=!1}){const n=e;return(0,s.createElement)(h,{status:"error",description:(0,r.__)("The scan failed to properly scan the site.","better-wp-security")},(0,s.createElement)("p",null,(0,r.sprintf)((0,r.__)("Error Message: %s","better-wp-security"),n.getErrorMessage())),(0,s.createElement)("p",null,(0,r.sprintf)((0,r.__)("Error Code: %s","better-wp-security"),n.getErrorCode())),t&&n.getErrorData()&&(0,s.createElement)(s.Fragment,null,(0,s.createElement)("p",null,(0,r.__)("If you contact support about this error, please provide the following debug details:","better-wp-security")),(0,s.createElement)("pre",null,JSON.stringify({code:n.getErrorCode(),data:n.getErrorData()},null,2))))};function p({status:e,children:t}){return(0,s.createElement)("li",{className:`itsec-site-scan__detail itsec-site-scan__detail--${e}`},(0,s.createElement)("span",null,t))}const f=function({results:e}){return e.errors.length>0&&(0,s.createElement)(h,{type:"system-error",status:"error",description:(0,r.__)("The scan failed to properly scan the site.","better-wp-security")},e.errors.map(((e,t)=>(0,s.createElement)(p,{key:t,status:"error"},e.message))))},g=function({results:e,entry:t}){let n=(0,c.get)(e,["_embedded","ithemes-security:site-scan-issues",0],[]);return(0,c.isArray)(n)||(n=[]),(0,s.createElement)(h,{type:"malware",status:t.status,description:t.title},n.filter((e=>e.entry===t.slug)).map(((e,t)=>(0,s.createElement)(p,{key:t,status:e.status},(0,s.createElement)("a",{href:e.link},e.description)))))},b=function({results:e,showSiteUrl:t=!0,showErrorDetails:n=!0}){const i=e.url;let a;return(0,o.ZE)(e)?a=(0,o.NC)(e):"error"===e.code&&(a=(0,o.NC)(e.errors[0])),(0,s.createElement)("div",{className:"itsec-site-scan-results"},t&&i&&(0,s.createElement)("h4",null,(0,r.sprintf)((0,r.__)("Site: %s","better-wp-security"),i)),a?(0,s.createElement)(m,{results:a,showErrorDetails:n}):(0,s.createElement)(s.Fragment,null,(0,s.createElement)(f,{results:e}),e.entries.map(((t,n)=>(0,s.createElement)(g,{results:e,entry:t,key:n})))))};function v({json:e}){return(0,s.createElement)("pre",{className:"itsec-component-print-r"},E((0,c.cloneDeep)(e)))}function E(e,t=10,n=0,i=!0){if((0,c.isString)(e))return 0===e.length?(0,s.createElement)("strong",null,"[empty string]"):e;if((0,c.isNumber)(e))return(0,s.createElement)("strong",null,`[number] ${e}`);if((0,c.isBoolean)(e))return(0,s.createElement)("strong",null,e?"[boolean] true":"[boolean] false");if(null==e)return(0,s.createElement)("strong",null,"null");if((0,c.isArray)(e)||(0,c.isPlainObject)(e)){const r=[];if(i&&r.push((0,s.createElement)("strong",{key:"header"},"Array")),0===(0,c.size)(e))return r.push("()"),r;if(n===t)return r.push(`(${e.length})`),r;let o=0;for(const t of(0,c.keys)(e))t.length>o&&(o=t.length);const a=y(n);return(0,c.forEach)(e,((e,i)=>{r.push((0,s.createElement)(s.Fragment,{key:i},"\n",a,i,y(o-(0,c.toString)(i).length," "),"  ",(0,s.createElement)("strong",null,"=>")," ",E(e,t,n+1)))})),r}return(0,s.createElement)("strong",null,"[*]")}function y(e,t="    "){let n="";for(let s=0;s<=e;s++)n+=t;return n}var _=n(4942);const N=()=>{};class k extends s.Component{constructor(e){super(e),this.state={isHovering:!1},this.onMouseEnter=this.onMouseEnter.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseOut=this.onMouseOut.bind(this),this.setIsHovering=this.setIsHovering.bind(this),this.unsetIsHovering=this.unsetIsHovering.bind(this),this.componentWillUnmount=this.componentWillUnmount.bind(this),this.timerIds=[]}onMouseEnter(e){this.props.onMouseEnter({e,setIsHovering:this.setIsHovering,unsetIsHovering:this.unsetIsHovering})}onMouseLeave(e){this.props.onMouseLeave({e,setIsHovering:this.setIsHovering,unsetIsHovering:this.unsetIsHovering})}onMouseOver(e){this.props.onMouseOver({e,setIsHovering:this.setIsHovering,unsetIsHovering:this.unsetIsHovering})}onMouseOut(e){this.props.onMouseOut({e,setIsHovering:this.setIsHovering,unsetIsHovering:this.unsetIsHovering})}componentWillUnmount(){this.clearTimers()}setIsHovering(){this.clearTimers();const e=setTimeout((()=>{const e={isHovering:!0};this.setState(e,(()=>{this.props.onHoverChanged(e)}))}),this.props.hoverDelayInMs);this.timerIds.push(e)}unsetIsHovering(){this.clearTimers();const e=setTimeout((()=>{const e={isHovering:!1};this.setState(e,(()=>{this.props.onHoverChanged(e)}))}),this.props.hoverOffDelayInMs);this.timerIds.push(e)}clearTimers(){const e=this.timerIds;for(;e.length;)clearTimeout(e.pop())}render(){const{children:e,className:t}=this.props;return(0,s.createElement)("div",{className:t,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut},e)}}(0,_.Z)(k,"displayName","HoverDetector"),(0,_.Z)(k,"defaultProps",{hoverDelayInMs:0,hoverOffDelayInMs:0,onHoverChanged:N,onMouseEnter:({setIsHovering:e})=>e(),onMouseLeave:({unsetIsHovering:e})=>e(),onMouseOver:N,onMouseOut:N,shouldDecorateChildren:!0}),n(60976);var I=n(87462);function w({value:e,onChange:t,options:n,label:r,help:o,disabled:a,readOnly:d,className:u,style:h,hideLabelFromVision:m}){let p,f;return(0,c.isArray)(e)?(p=t=>e.includes(t.value),f=n=>s=>t(s?[...e,n.value]:e.filter((e=>e!==n.value)))):(p=t=>e[t.value]||!1,f=n=>s=>t({...e,[n.value]:s})),(0,s.createElement)("fieldset",{className:l()("components-base-control",u,h&&`itsec-components-checkbox-group-control--style-${h}`)},(0,s.createElement)("div",{className:"components-base-control__field"},m&&(0,s.createElement)(i.VisuallyHidden,null,r),!m&&(0,s.createElement)("legend",{className:"components-base-control__label"},r),o&&(0,s.createElement)("p",{className:"components-base-control__help"},o),(0,s.createElement)("div",{className:"itsec-components-checkbox-group-control__options"},n.map((e=>(0,s.createElement)(i.CheckboxControl,(0,I.Z)({},(0,c.omit)(e,["value","disabled","readOnly"]),{key:e.value,checked:p(e),onChange:f(e),disabled:a||e.disabled,readOnly:d||e.readOnly,className:p(e)&&"itsec-components-checkbox-group-control__option--is-checked",__nextHasNoMarginBottom:!0})))))))}var C=n(59588),L=n.n(C);let T,S;T=Symbol.iterator;class M{constructor(e,t,n,s=null,i=[]){(0,_.Z)(this,"tree",void 0),(0,_.Z)(this,"name",void 0),(0,_.Z)(this,"data",void 0),(0,_.Z)(this,"parent",void 0),(0,_.Z)(this,"children",void 0),this.tree=e,this.name=t,this.data=n,this.parent=s,this.children=i}getParent(){return this.parent?this.tree.nodes[this.parent]:null}getAllParents(){const e=[];let t=this.getParent();for(;t;)e.push(t.name),t=t.getParent();return e}hasChildren(){return this.children.length>0}getAllChildren(){const e=[];if(!this.hasChildren())return e;for(const t of this)e.push(t.name,...t.getAllChildren());return e}*[T](){for(let e=0;e<this.children.length;e++){const t=this.children[e];yield this.tree.nodes[t]}}}S=Symbol.iterator;class H{constructor(){(0,_.Z)(this,"nodes",{}),(0,_.Z)(this,"ordered",[])}add(e,t,n=null){this.ordered.push(e),this.nodes[e]?(this.nodes[e].data=t,this.nodes[e].parent=n):this.nodes[e]=new M(this,e,t,n),n&&(this.nodes[n]?this.nodes[n].children.push(e):this.nodes[n]=new M(this,n))}*[S](){for(let e=0;e<this.ordered.length;e++){const t=this.ordered[e];this.nodes[t].parent||(yield this.nodes[t])}}}const O=L()((e=>{const t=new H;for(const n of e)t.add(n.value,n,n.parent);return t}));class D extends s.Component{constructor(){super(...arguments),(0,_.Z)(this,"props",void 0),this.renderOption=this.renderOption.bind(this),this.isChecked=this.isChecked.bind(this),this.isIndeterminate=this.isIndeterminate.bind(this),this.onChange=this.onChange.bind(this)}indeterminate(e){e.indeterminate=!0}isChecked(e){return!!e&&((0,c.isArray)(this.props.value)?this.props.value.includes(e.name)||this.isChecked(e.getParent()):this.props.value[e.name]||this.isChecked(e.getParent()))}isIndeterminate(e){if(!e.hasChildren())return!1;for(const t of e){if(this.isChecked(t))return!0;if(this.isIndeterminate(t))return!0}return!1}onChange(e,t){const n=[e.name,...e.getAllChildren()],s=t?[]:e.getAllParents();if((0,c.isArray)(this.props.value)){let e;e=t?[...this.props.value,...n]:this.props.value.filter((e=>!n.includes(e)&&!s.includes(e))),this.props.onChange(e)}else this.props.onChange({...this.props.value,...n.reduce(((e,n)=>e[n]=t),{}),...s.reduce(((e,t)=>e[t]=!1),{})})}render(){const{label:e,help:t,options:n}=this.props,i=O(n);return(0,s.createElement)("div",{className:"components-base-control"},(0,s.createElement)("div",{className:"components-base-control__field"},(0,s.createElement)("div",{className:"components-base-control__label"},e),t&&(0,s.createElement)("p",{className:"components-base-control__help"},t)),(0,s.createElement)("ul",{className:"components-hierarchical-checkbox-control__group"},Array.from(i,this.renderOption)))}renderOption(e){const{value:t,selectable:n=!0,...r}=e.data,o=this.isChecked(e),a=!o&&this.isIndeterminate(e);return(0,s.createElement)("li",{key:t,className:l()("components-hierarchical-checkbox-control__option",{"components-hierarchical-checkbox-control__option--has-children":e.hasChildren()})},(0,s.createElement)(i.CheckboxControl,(0,I.Z)({},r,{checked:!!n&&o,disabled:!n||this.props.disabled,indeterminate:a,onChange:t=>this.onChange(e,t)})),e.hasChildren()&&(0,s.createElement)("ul",{className:"components-hierarchical-checkbox-control__group"},Array.from(e,this.renderOption)))}}const x=D;var P=n(48015);(0,d.compose)([(0,P.withSelect)(((e,{context:t="ithemes-security"})=>({notices:e("core/notices").getNotices(t)}))),(0,P.withDispatch)(((e,{context:t="ithemes-security"})=>({onRemove:n=>e("core/notices").removeNotice(n,t)})))])((function({notices:e,onRemove:t}){const n=(0,c.filter)(e,(e=>e.isDismissible&&(!e.type||"default"===e.type))),r=(0,c.filter)(e,(e=>!(e.isDismissible||e.type&&"default"!==e.type))),o=(0,c.filter)(e,{type:"snackbar"});return(0,s.createElement)(s.Fragment,null,(0,s.createElement)(i.NoticeList,{notices:r,className:"components-editor-notices__pinned"}),(0,s.createElement)(i.NoticeList,{notices:n,className:"components-editor-notices__dismissible",onRemove:t}),i.SnackbarList&&(0,s.createElement)(i.SnackbarList,{notices:o,className:"components-editor-notices__snackbar",onRemove:t}))}));const Z=function({className:e,status:t,children:n,onRemove:o=c.noop,isDismissible:a=!0,actions:d=[]}){const u=l()(e,"notice","notice-alt","notice-"+t,{"is-dismissible":a});return(0,s.createElement)("div",{className:u},(0,s.createElement)("p",null,n,d.map((({className:e,label:t,onClick:n,url:r,isLink:a=!1},c)=>(0,s.createElement)(i.Button,{key:c,href:r,isSmall:!a&&!r,variant:(r||a)&&"link",onClick:r?void 0:()=>{o(),n()},className:l()("notice__action",e)},t)))),a&&(0,s.createElement)("button",{type:"button",className:"notice-dismiss",onClick:o},(0,s.createElement)("span",{className:"screen-reader-text"},(0,r.__)("Dismiss this notice","better-wp-security"))))};(0,d.compose)([(0,P.withSelect)(((e,{context:t="ithemes-security"})=>({notices:e("core/notices").getNotices(t)}))),(0,P.withDispatch)(((e,{context:t="ithemes-security"})=>({onRemove:n=>e("core/notices").removeNotice(n,t)})))])((function({notices:e,onRemove:t}){const n=function(e){if(!i.SnackbarList)return e.length;let t=0;for(const n of e)"snackbar"!==n.type&&t++;return t}(e),r=function(e){const t=(0,s.useRef)();return(0,s.useEffect)((()=>{t.current=e})),t.current}(n);(0,s.useEffect)((()=>{n>r&&window.itsecSettingsPage&&window.itsecSettingsPage.scrollTop()}),[n,r]);const o=i.SnackbarList?(0,c.filter)(e,{type:"snackbar"}):[];return(0,s.createElement)(s.Fragment,null,(0,s.createElement)("div",{className:"itsec-module-settings-notice-list"},e.map((e=>{return"snackbar"===e.type&&i.SnackbarList?null:(0,s.createElement)(Z,(0,I.Z)({},(0,c.omit)(e,["content"]),{key:e.id,onRemove:(n=e.id,()=>t(n))}),e.content);var n}))),i.SnackbarList&&(0,s.createElement)(i.SnackbarList,{notices:o,className:"components-editor-notices__snackbar",onRemove:t}))}));var R=n(11984),B=n(28184),A=n(79526);function K({id:e,label:t,hideLabelFromVision:n,className:r,heading:o,checked:a,help:c,onChange:u,indeterminate:h,...m}){const p=(0,d.useInstanceId)(K);return e=e||`itsec-inspector-checkbox-control-${p}`,(0,s.createElement)(i.BaseControl,{label:o,id:e,help:c,className:r},(0,s.createElement)("span",{className:"components-checkbox-control__input-container"},(0,s.createElement)("input",(0,I.Z)({id:e,className:l()("components-checkbox-control__input",{"components-checkbox-control__input--indeterminate":h}),type:"checkbox",value:"1",onChange:e=>u(e.target.checked),checked:a,"aria-describedby":c?e+"__help":void 0},m,{ref:e=>e&&(e.indeterminate=h)})),a&&(0,s.createElement)(R.Z,{icon:B.Z,className:"components-checkbox-control__checked",role:"presentation"}),h&&(0,s.createElement)(R.Z,{icon:A.Z,className:"components-checkbox-control__checked",role:"presentation"})),t&&(n?(0,s.createElement)(i.VisuallyHidden,{as:"label",htmlFor:e},t):(0,s.createElement)("label",{className:"components-checkbox-control__label",htmlFor:e},t)))}function F({help:e,label:t,multiple:n=!1,onChange:r,options:o=[],className:a,hideLabelFromVision:l,__nextHasNoMarginBottom:u,...h}){const m=`inspector-select-control-${(0,d.useInstanceId)(F)}`,p=(0,c.groupBy)(o,"optgroup");return!(0,c.isEmpty)(o)&&(0,s.createElement)(i.BaseControl,{label:t,hideLabelFromVision:l,id:m,help:e,className:a,__nextHasNoMarginBottom:u},(0,s.createElement)("select",(0,I.Z)({id:m,className:"components-select-control__input",onChange:e=>{if(n){const t=[...e.target.options].filter((({selected:e})=>e)).map((({value:e})=>e));r(t)}else r(e.target.value)},"aria-describedby":e?`${m}__help`:void 0,multiple:n},h),(0,c.map)(p,((e,t)=>{const n=e.map(((e,t)=>(0,s.createElement)("option",{key:`${e.label}-${e.value}-${t}`,value:e.value,disabled:e.disabled},e.label)));return"undefined"===t?n:(0,s.createElement)("optgroup",{label:t,key:t},n)}))))}function $({value:e,onChange:t,...n}){(0,c.isArray)(e)||(e=(0,c.isString)(e)?[e]:[]);const[r,o]=(0,s.useState)(e.join("\n"));return e.join("\n").trim()!==r.trim()&&o(e.join("\n")),(0,s.createElement)(i.TextareaControl,(0,I.Z)({value:r,onChange:e=>{o(e),t(e.split("\n").map((e=>e.trim())).filter((e=>e.length>0)))}},n))}function W({tabId:e,onClick:t,children:n,selected:r,...o}){return(0,s.createElement)(i.Button,(0,I.Z)({role:"tab",tabIndex:r?null:-1,"aria-selected":r,id:e,onClick:t},o),n)}class U extends s.Component{constructor(){super(...arguments),this.handleClick=this.handleClick.bind(this),this.onNavigate=this.onNavigate.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}handleClick(e){const{onSelect:t=c.noop}=this.props;t(e)}onNavigate(e,t){const n=this.event;n&&"tab"===n.target.getAttribute("role")&&n.preventDefault(),t.click()}onKeyDown(e){this.event=e}render(){const{activeClass:e="is-active",className:t,instanceId:n,orientation:r="horizontal",tabs:o,selected:a,isStyled:d}=this.props,u=(0,c.find)(o,{name:a})||o[0],h=n+"-"+u.name;return(0,s.createElement)("div",{className:l()("itsec-tab-panel",t,{"itsec-tab-panel--styled":d})},(0,s.createElement)(i.NavigableMenu,{role:"tablist",orientation:r,onNavigate:this.onNavigate,onKeyDown:this.onKeyDown,className:"components-tab-panel__tabs"},o.map((t=>(0,s.createElement)(W,{className:l()("itsec-tab-panel__tab",t.className,{[e]:t.name===u.name}),tabId:n+"-"+t.name,"aria-controls":n+"-"+t.name+"-view",selected:t.name===u.name,key:t.name,onClick:(0,c.partial)(this.handleClick,t.name)},t.title)))),u&&(0,s.createElement)("div",{"aria-labelledby":h,role:"tabpanel",id:h+"-view",className:"components-tab-panel__tab-content",tabIndex:"0"},this.props.children(u)))}}(0,d.withInstanceId)(U);var z=n(81834),V=n.n(z),j=n(65813);class q extends s.Component{constructor(){super(...arguments),this.handleClick=this.handleClick.bind(this),this.onNavigate=this.onNavigate.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.toggleTab=this.toggleTab.bind(this),this.getSelectedTabs=this.getSelectedTabs.bind(this),this.isSelected=this.isSelected.bind(this),this.getSelectedId=this.getSelectedId.bind(this),this.getLabelledBy=this.getLabelledBy.bind(this),this.getTabId=this.getTabId.bind(this),this.getTabPanelId=this.getTabPanelId.bind(this),this.isTabDisabled=this.isTabDisabled.bind(this),this.isNonMultiSelectableTabSelected=this.isNonMultiSelectableTabSelected.bind(this)}handleClick(e,t){t.metaKey||t.ctrlKey?this.toggleTab(e):this.props.onSelect([e])}onNavigate(e,t){const n=this.event;if(n){if("tab"===n.target.getAttribute("role")&&n.preventDefault(),n.ctrlKey)return;if(n.shiftKey){if(this.isTabDisabled(this.props.tabs[e]))return;const t=this.props.tabs[e].name;return void this.toggleTab(t)}}t.click()}onKeyDown(e){if(!e.nativeEvent&&(this.event=e,e.ctrlKey&&("Space"===e.code||32===e.keyCode))){e.preventDefault();const t=e.target.dataset.tabname;t&&this.toggleTab(t)}}toggleTab(e){const t=(0,c.find)(this.props.tabs,{name:e});t&&!1===t.allowMultiple||(this.props.selected.includes(e)?this.props.onSelect(this.props.selected.filter((t=>t!==e))):this.props.onSelect([...this.props.selected,e]))}getSelectedTabs(){const e=this.props.selected;!e.length&&this.props.initialTab&&e.push(this.props.initialTab);const t=[];return this.props.tabs.forEach((e=>{this.props.selected.includes(e.name)&&t.push(e)})),t}isSelected(e,t){return e.some((e=>e.name===t.name))}isTabDisabled(e){const{pressedModifierKeys:t}=this.props;if(this.props.selected.includes(e.name))return!1;if(!1!==e.allowMultiple&&!this.isNonMultiSelectableTabSelected())return!1;if(t.meta||t.ctrl)return!0;if(t.shift){const{activeElement:e}=document;if(e.parentElement&&e.parentElement.id===`components-tab-panel__tabs-${this.props.instanceId}`)return!0}return!1}isNonMultiSelectableTabSelected(){if(1!==this.props.selected.length)return!1;const e=(0,c.find)(this.props.tabs,{name:this.props.selected[0]});return e&&!1===e.allowMultiple}getSelectedId(e){return 1===e.length?this.getTabPanelId(e[0].name):`components-tab-panel__panel-${this.props.instanceId}-${(0,c.map)(e,"name").join("-")}`}getLabelledBy(e){return e.map((e=>this.getTabId(e.name))).join(",")}getTabId(e){return`components-tab-panel__tab-${this.props.instanceId}-${e}`}getTabPanelId(e){return`components-tab-panel__panel-${this.props.instanceId}-${e}`}componentDidUpdate(e){if(1!==this.props.selected.length)return;if(!V()(this.props.selected,e.selected))return;const t=this.props.selected[0];if((0,c.find)(this.props.tabs,{name:t}))return;const n=(0,c.findIndex)(e.tabs,{name:t});if(-1===n)return;const s=Math.max(n-1,0),i=this.props.tabs[s];i&&this.props.onSelect([i.name])}render(){const{tabs:e,className:t,activeClass:n="is-active",orientation:r="horizontal"}=this.props,o=this.getSelectedTabs(),a=this.getSelectedId(o);return(0,s.createElement)("div",{className:t},(0,s.createElement)(i.NavigableMenu,{role:"tablist","aria-multiselectable":!0,orientation:r,onNavigate:this.onNavigate,onKeyDown:this.onKeyDown,className:"components-tab-panel__tabs",id:`components-tab-panel__tabs-${this.props.instanceId}`},e.map((e=>{const t=this.isSelected(o,e),i=t&&o.length>1?a:this.getTabPanelId(e.name);return(0,s.createElement)(W,{className:l()(e.className,{[n]:t}),tabId:this.getTabId(e.name),"aria-controls":i,selected:t,disabled:this.isTabDisabled(e),key:e.name,onClick:(0,c.partial)(this.handleClick,e.name),"data-tabname":e.name},e.title)}))),o.length>0&&(0,s.createElement)("div",{"aria-labelledby":this.getLabelledBy(o),role:"tabpanel",id:a,className:"components-tab-panel__tab-content",tabIndex:"0"},this.props.children(o)))}}(0,d.compose)([d.withInstanceId,j.lo])(q);var G=n(64239),J=n(81019);function Y(e,t,n=void 0){for(let s=0;s<e.length;s++){const i=t(e[s],n,s);if(i!==Y.skip){if(i===Y.halt)return i;if((0,c.isArray)(e[s].children)&&Y.halt===Y(e[s].children,t,e[s]))return Y.halt}}}function Q({id:e,tree:t,active:n,setActive:r,onActivate:o,onLoad:a,label:l,help:c,...d}){const u=(0,s.useRef)(),h=(0,s.useMemo)((()=>{const e={};return Y(t,((t,n,s)=>{e[t.id]={item:t,index:s,parent:n?.id}})),e}),[t]),[m,p]=(0,s.useState)([]),[f,g]=(0,s.useState)([]),b=e+"__item__",v=async e=>{!0===e.children&&a&&(g((t=>[...t,e.id])),await a(e.id),g((t=>t.filter((t=>t!==e.id))))),p((t=>t.includes(e.id)?t.filter((t=>t!==e.id)):[...t,e.id]))};return(0,s.createElement)(i.BaseControl,{help:c,className:"itsec-tree"},(0,s.createElement)("span",{className:"components-base-control__label",id:e+"__tree_label"},l),(0,s.createElement)("ul",(0,I.Z)({ref:u,id:e,role:"tree",tabIndex:0,onKeyDown:async e=>{d.onKeyDown&&d.onKeyDown(e);const{keyCode:s}=e;if(o&&[J.ENTER,J.SPACE].includes(s)&&o(n),![J.UP,J.DOWN,J.RIGHT,J.LEFT].includes(s))return;e.stopPropagation(),e.preventDefault();const i=h[n];if(!i)return void r(t[0].id);const{item:a,parent:l}=i;let c;switch(s){case J.UP:c=function(e,t,n){let s;return Y(e,(e=>e.id===t?Y.halt:(s=e,!1===e.children||n.includes(e.id)?void 0:Y.skip))),s}(t,a.id,m)?.id;break;case J.DOWN:c=function(e,t,n){let s,i=!1;return Y(e,(e=>(s=e,i?Y.halt:(e.id===t&&(i=!0),!1===e.children||n.includes(e.id)?void 0:Y.skip)))),s}(t,a.id,m)?.id;break;case J.RIGHT:a.children&&(m.includes(a.id)?c=a.children?.[0].id:await v(a));break;case J.LEFT:a.children&&m.includes(a.id)?await v(a):c=l}if(c&&(r(c),u.current)){const e=u.current.ownerDocument.getElementById(b+c);e.scrollIntoViewIfNeeded?e.scrollIntoViewIfNeeded():(0,G.Z)(e,{scrollMode:"if-needed"})}},onFocus:n?void 0:()=>r(t[0].id),"aria-activedescendant":n?b+n:void 0,"aria-labelledby":e+"__tree_label"},d),t.map((e=>(0,s.createElement)(X,{key:e.id,idBase:b,active:n,setActive:r,expandedIds:m,onToggle:v,loadingIds:f,item:e})))))}function X(e){const{idBase:t,item:n,expandedIds:i,loadingIds:r,onToggle:o,active:a,setActive:c}=e,d=!!n.children,u=i.includes(n.id);return(0,s.createElement)("li",{id:t+n.id,role:"treeitem","aria-selected":a===n.id?"true":void 0,"aria-expanded":d?u:void 0,className:l()("itsec-tree__item",{"itsec-tree__item--loading":r.includes(n.id)})},(0,s.createElement)("span",{onClick:async()=>{await o(n),c(n.id)},"aria-label":n.label},n.label),d&&n.children.length>0&&(0,s.createElement)("ul",{role:"group"},n.children.map((t=>(0,s.createElement)(X,(0,I.Z)({key:t.id},e,{item:t}))))))}Y.halt=Symbol("halt"),Y.skip=Symbol("skip");const ee=["group","treeitem","option","menuitem","tab"].join(" "),te=(0,s.forwardRef)((function({active:e,onKeyDown:t=c.noop,onNavigate:n,orientation:i="vertical",cycle:r=!0,descendantRoles:o=ee,as:a="div",children:l,...d},u){const h=(0,s.useRef)();return(0,s.useImperativeHandle)(u,(()=>({focus(){h.current.focus()}}))),(0,s.createElement)(a,(0,I.Z)({ref:h,tabIndex:0,"aria-activedescendant":e,"aria-orientation":i,onKeyDown:s=>{const a=function(e,t){let n=[J.DOWN],s=[J.UP];return"horizontal"===t&&(n=[J.RIGHT],s=[J.LEFT]),"both"===t&&(n=[J.RIGHT,J.DOWN],s=[J.LEFT,J.UP]),(0,c.includes)(n,e)?1:(0,c.includes)(s,e)?-1:(0,c.includes)([J.DOWN,J.UP,J.LEFT,J.RIGHT],e)?0:void 0}(s.keyCode,i);if(t(s,a),void 0===a)return;s.stopPropagation(),s.preventDefault();const l=function(e,t){const n=t.split(" ").map((e=>`[role="${e}"]`)).join(", ");return e.querySelectorAll(n)}(h.current,o),d=(0,c.findIndex)(l,{id:e}),u=r?function(e,t,n){const s=e+n;return s<0?t+s:s>=t?s-t:s}(d,l.length,a):d+a;if(u>=0&&u<l.length){const e=l[u];!function(e,t){if(t.scrollIntoViewIfNeeded)return void t.scrollIntoViewIfNeeded();const n=e.ownerDocument.defaultView.getComputedStyle(e),s=parseInt(n.getPropertyValue("border-top-width")),i=t.offsetTop-e.offsetTop<e.scrollTop,r=t.offsetTop-e.offsetTop+t.clientHeight-s>e.scrollTop+e.clientHeight;(i||r)&&(e.scrollTop=t.offsetTop-e.offsetTop-e.clientHeight/2-s+t.clientHeight/2,e.scrollLeft=0)}(h.current,e),n(e.id)}}},d),l)}));function ne(){return(0,s.createElement)("div",{style:{flexGrow:1},"aria-hidden":!0,className:"itsec-component-flex-spacer"})}var se=n(52117);const ie=(0,se.Z)(i.Dashicon,{shouldForwardProp:e=>"size"!==e&&"padding"!==e,target:"e15jp5o50"})("border-radius:50%;font-size:calc(",(({size:e})=>e)," - (",(({padding:e})=>e)," * 2));padding:",(({padding:e})=>e),";padding-left:calc(",(({padding:e})=>e)," + 0.5px);background:",(({theme:e})=>e.colors.primary.base),";color:#ffffff;");function re({size:e=20,className:t}){const n=`var(--itsec-recommended-icon-size, ${"number"==typeof e?`${e}px`:e})`,i=`calc(${n} / 5)`;return(0,s.createElement)(ie,{className:t,icon:"star-filled",size:n,padding:i})}const oe={error:{primary:"#551515",secondary:"#F7ABAB",icon:"warning"},info:{primary:"#005169",secondary:"#ecfaff",icon:"info"},warning:{primary:"#a9582e",secondary:"#fdddcd",icon:"flag"},success:{primary:"#237739",secondary:"#ddf1e2",icon:"yes-alt"}},ae=(0,se.Z)("div",{target:"e2e3eg46"})("display:flex;padding:.75rem .5rem;border-radius:4px;margin-bottom:",(({noMargins:e})=>!e&&"1rem"),";background:",(({type:e})=>oe[e].secondary),";border:",(({type:e,hasBorder:t})=>t&&`1px solid ${oe[e].primary}`),";"),le=(0,se.Z)("h3",{target:"e2e3eg45"})("font-size:1.25rem;margin:0 0 0.5rem 0;color:",(({type:e})=>oe[e].primary),";"),ce=(0,se.Z)(i.Dashicon,{shouldForwardProp:e=>"type"!==e,target:"e2e3eg44"})("color:",(({type:e})=>oe[e].primary),";margin-right:0.5rem;"),de=(0,se.Z)(re,{target:"e2e3eg43"})({name:"u7ytkp",styles:"margin-right:0.5rem"}),ue=(0,se.Z)("ul",{target:"e2e3eg42"})({name:"ti75j2",styles:"margin:0"}),he=(0,se.Z)("li",{target:"e2e3eg41"})("margin:0 0 0.25rem 0;color:",(({type:e})=>oe[e].primary),";&:last-child{margin-bottom:0;}"),me=(0,se.Z)(i.Button,{shouldForwardProp:e=>"type"!==e,target:"e2e3eg40"})("margin-left:auto;padding:0!important;min-width:0!important;min-height:0!important;height:min-content!important;&:hover{color:",(({theme:e})=>e.colors.primary.base),";}.dashicon{color:",(({type:e})=>oe[e].primary),";margin-left:0;margin-right:0;&:hover{color:",(({theme:e})=>e.colors.primary.base),";}}");function pe({type:e="info",title:t,messages:n=[],className:i,onDismiss:r,hasBorder:o,recommended:a,noMargins:d}){return(n=(0,c.castArray)(n)).length?(0,s.createElement)(ae,{type:e,hasBorder:o,recommended:a,noMargins:d,className:l()("itsec-message-list",`itsec-message-list--type-${e}`,i)},a?(0,s.createElement)(de,null):(0,s.createElement)(ce,{icon:oe[e].icon,type:e}),(0,s.createElement)("div",null,t&&(0,s.createElement)(le,null,t),(0,s.createElement)(ue,null,n.map(((t,n)=>(0,s.createElement)(he,{key:n,type:e},t))))),r&&(0,s.createElement)(me,{icon:"dismiss",type:e,onClick:r})):null}function fe({errors:e,apiError:t,schemaError:n,title:i,className:r,hasBorder:a,noMargins:l}){const c=[...e||[],...(0,o.Y3)(t),...(n||[]).map((e=>e.stack))];return c.length?(0,s.createElement)(pe,{messages:c,title:i,className:r,hasBorder:a,noMargins:l,type:"error"}):null}var ge=n(31600);function be({topic:e,fallback:t}){const n=(0,P.useSelect)((e=>e(ge.HELP_STORE_NAME).isEnabled()));return void 0===n?null:n?(0,s.createElement)(Ee,{topic:e,fallback:t}):(0,s.createElement)(ve,null)}function ve(){const[e,t]=(0,s.useState)(!0),[n,o]=(0,s.useState)(!1),{enableHelp:a}=(0,P.useDispatch)(ge.HELP_STORE_NAME);return e&&(0,s.createElement)(i.Modal,{title:(0,r.__)("Privacy Notice","better-wp-security"),onRequestClose:()=>t(!1),className:"itsec-help-list__enable-modal"},(0,s.createElement)("p",null,(0,r.__)("Loading help remotely requires making an API request to iThemes.com. Only the requested help topic is transmitted.","better-wp-security")),(0,s.createElement)("footer",null,(0,s.createElement)("a",{href:"https://go.solidwp.com/privacy-policy"},(0,r.__)("Privacy Policy","better-wp-security")),(0,s.createElement)(i.Button,{isBusy:n,onClick:async()=>{o(!0),await a(),o(!1)},variant:"primary"},(0,r.__)("Continue","better-wp-security"))))}function Ee({topic:e,fallback:t}){const{help:n,isLoaded:i,fallbackHelp:o,fallbackLoaded:a}=(0,P.useSelect)((n=>({help:n(ge.HELP_STORE_NAME).getHelp(e),isLoaded:n(ge.HELP_STORE_NAME).hasFinishedResolution("getHelp",[e]),fallbackHelp:t?n(ge.HELP_STORE_NAME).getHelp(t):[],fallbackLoaded:!t||n(ge.HELP_STORE_NAME).hasFinishedResolution("getHelp",[t])})));if(!i||!a)return null;const l=(0,c.groupBy)([...n,...o],"type");return(0,s.createElement)(React.Fragment,null,(0,s.createElement)(ye,{title:(0,r.__)("Help Center","better-wp-security"),icon:"sos",link:"https://help.ithemes.com/hc/en-us/categories/200147050/",items:l.hc}),(0,s.createElement)(ye,{title:(0,r.__)("Blog","better-wp-security"),icon:"book-alt",link:"https://ithemes.com/blog/",items:l.post}),(0,s.createElement)(ye,{title:(0,r.__)("Video","better-wp-security"),icon:"youtube",link:"https://www.youtube.com/channel/UCYSDQEcxAppePTn5E7iNpFg",items:l.video}))}function ye({title:e,icon:t,link:n,items:o}){return(0,s.createElement)(i.Card,{className:l()("itsec-help-list-section",{"itsec-help-list-section--has-content":!!o})},(0,s.createElement)("header",null,(0,s.createElement)("a",{href:n},(0,s.createElement)(i.Dashicon,{icon:t,className:"itsec-help-list-section__icon"}),(0,s.createElement)("h3",null,e),(0,s.createElement)(i.Dashicon,{icon:"arrow-right-alt",className:"itsec-help-list-section__more"}))),(0,s.createElement)("section",null,o?o.map((e=>(0,s.createElement)("article",{key:e.title},(0,s.createElement)("a",{href:e.link},(0,s.createElement)("h4",null,e.title),(0,s.createElement)(ke,{content:e.description,tagName:"p"}))))):(0,s.createElement)("p",null,(0,r.__)("No relevant content at this time.","better-wp-security"))))}var _e=n(63108),Ne=n(73727);function ke({transform:e,...t}){return(0,s.createElement)(_e.Lu,(0,I.Z)({},t,{transform:(n,i)=>{if(e){const t=e(n,i);if(void 0!==t)return t}if("a"===n.tagName.toLowerCase()&&n.dataset.itsecPath&&!t.noHtml)return(0,s.createElement)(Ne.rU,{to:n.dataset.itsecPath},i)}}))}},65813:(e,t,n)=>{n.d(t,{r5:()=>f,OR:()=>g,Zk:()=>v,_:()=>E,qq:()=>y,eH:()=>p,gU:()=>l,nP:()=>c,Sj:()=>h,lo:()=>u,vl:()=>o});var s=n(87462),i=n(6293),r=n(9576);function o(e){return(0,r.createHigherOrderComponent)((t=>class extends i.Component{render(){return(0,i.createElement)(t,(0,s.Z)({},this.props,e))}}),"withProps")}var a=n(92819);function l(e,t,n={}){return(0,r.createHigherOrderComponent)((s=>class extends i.Component{constructor(){super(...arguments),this.debouncedPropInvoke=(0,a.debounce)(((...t)=>this.props[e](...t)),"function"==typeof t?t(this.props):t,n),this.handler=(e,...t)=>(e&&"function"==typeof e.persist&&e.persist(),this.debouncedPropInvoke(e,...t))}componentWillUnmount(){this.debouncedPropInvoke.cancel()}render(){const t={...this.props,[e]:this.handler};return(0,i.createElement)(s,t)}}),"withDebounceHandler")}function c(e,t){let n;return n=(0,a.isFunction)(t)?[{delay:e,cb:t}]:e,(0,r.createHigherOrderComponent)((e=>class extends i.Component{constructor(){super(...arguments),this.intervalIds=[]}componentDidMount(){for(const e of n)(t=>{this.intervalIds.push(setInterval((()=>t(this.props)),e.delay))})(e.cb)}componentWillUnmount(){this.intervalIds.forEach(clearInterval)}render(){return(0,i.createElement)(e,this.props)}}),"withInterval")}var d=n(4942);(0,r.createHigherOrderComponent)((e=>{var t;return t=class extends i.Component{constructor(...e){super(...e),(0,d.Z)(this,"state",{width:1280}),(0,d.Z)(this,"mounted",!1),(0,d.Z)(this,"ref",null),(0,d.Z)(this,"onWindowResize",(()=>{if(!this.mounted)return;const e=(0,i.findDOMNode)(this);if(e instanceof window.HTMLElement){const t=e.offsetWidth;this.setState({width:t})}}))}componentDidMount(){this.mounted=!0,window.addEventListener("resize",this.onWindowResize),document.getElementById("collapse-button").addEventListener("click",this.onWindowResize),this.onWindowResize()}componentWillUnmount(){this.mounted=!1,window.removeEventListener("resize",this.onWindowResize),document.getElementById("collapse-button").removeEventListener("click",this.onWindowResize)}render(){const{measureBeforeMount:t,...n}=this.props;return t&&!this.mounted?(0,i.createElement)("div",{className:this.props.className,style:this.props.style}):(0,i.createElement)(e,(0,s.Z)({},n,{width:this.state.width+20}))}},(0,d.Z)(t,"defaultProps",{measureBeforeMount:!1}),t}),"withWidth");const u=(0,r.createHigherOrderComponent)((e=>class extends i.Component{constructor(){super(...arguments),(0,d.Z)(this,"state",{pressed:{shift:!1,ctrl:!1,meta:!1,alt:!1}}),(0,d.Z)(this,"mounted",!1),this.listener=this.listener.bind(this),this.onBlur=this.onBlur.bind(this)}componentDidMount(){this.mounted=!0,window.addEventListener("keydown",this.listener),window.addEventListener("keyup",this.listener),window.addEventListener("click",this.listener),window.addEventListener("blur",this.onBlur)}componentWillUnmount(){this.mounted=!1,window.removeEventListener("keydown",this.listener),window.removeEventListener("keyup",this.listener),window.removeEventListener("click",this.listener),window.removeEventListener("blur",this.onBlur)}listener(e){this.mounted&&this.setState({pressed:{shift:e.shiftKey,ctrl:e.ctrlKey,meta:e.metaKey,alt:e.altKey}})}onBlur(){this.setState({pressed:{shift:!1,ctrl:!1,meta:!1,alt:!1}})}render(){return(0,i.createElement)(e,(0,s.Z)({pressedModifierKeys:this.state.pressed},this.props))}}),"withPressedModifierKeys"),h=(0,r.createHigherOrderComponent)((e=>function({navigate:t,...n}){return(0,i.createElement)(e,(0,s.Z)({},n,{onClick:e=>{try{n.onClick&&n.onClick(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||n.target&&"_self"!==n.target||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),t())}}))}),"withNavigate"),m=new WeakMap;function p(e,t){(0,i.useLayoutEffect)((()=>{m.has(e)||(t(),m.set(e,!0))}),[])}function f(e,t=!0){const[n,s]=(0,i.useState)("idle"),[r,o]=(0,i.useState)(null),[a,l]=(0,i.useState)(null),c=(0,i.useCallback)(((...t)=>(s("pending"),l(null),e(...t).then((e=>{o(e),s("success")})).catch((e=>{l(e),o(null),s("error")})))),[e]);return(0,i.useEffect)((()=>{t&&c()}),[c,t]),{execute:c,status:n,value:r,error:a}}function g(e,t,n=window){const s=(0,i.useRef)();(0,i.useEffect)((()=>{s.current=t}),[t]),(0,i.useEffect)((()=>{if(!n||!n.addEventListener)return;const t=e=>s.current(e);return n.addEventListener(e,t),()=>n.removeEventListener(e,t)}),[e,n])}const b=["button","submit"];function v(e){const t=(0,i.useRef)(e);(0,i.useEffect)((()=>{t.current=e}),[e]);const n=(0,i.useRef)(!1),s=(0,i.useRef)(),r=(0,i.useCallback)((()=>{clearTimeout(s.current)}),[]);(0,i.useEffect)((()=>()=>r()),[]),(0,i.useEffect)((()=>{e||r()}),[e,r]);const o=(0,i.useCallback)((e=>{const{type:t,target:s}=e;(0,a.includes)(["mouseup","touchend"],t)?n.current=!1:function(e){if(!(e instanceof window.HTMLElement))return!1;switch(e.nodeName){case"A":case"BUTTON":return!0;case"INPUT":return(0,a.includes)(b,e.type)}return!1}(s)&&(n.current=!0)}),[]),l=(0,i.useCallback)((e=>{e.persist(),n.current||(s.current=setTimeout((()=>{document.hasFocus()?"function"==typeof t.current&&t.current(e):e.preventDefault()}),0))}),[]);return{onFocus:r,onMouseDown:o,onMouseUp:o,onTouchStart:o,onTouchEnd:o,onBlur:l}}function E(e,t){const[n,s]=(0,i.useState)((()=>{try{const n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(e){return console.error(e),t}}));return[n,t=>{try{const i=t instanceof Function?t(n):t;s(i),window.localStorage.setItem(e,JSON.stringify(i))}catch(e){console.error(e)}}]}function y(e){const t=(0,i.useRef)(null),n=(0,i.useRef)(!1),s=(0,i.useRef)(e),r=(0,i.useRef)(e);return r.current=e,(0,i.useLayoutEffect)((()=>{e.forEach(((e,i)=>{const r=s.current[i];"function"==typeof e&&e!==r&&!1===n.current&&(r(null),e(t.current))})),s.current=e}),e),(0,i.useLayoutEffect)((()=>{n.current=!1})),(0,i.useCallback)((e=>{t.current=e,n.current=!0,(e?r.current:s.current).forEach((t=>{"function"==typeof t?t(e):t&&t.hasOwnProperty("current")&&(t.current=e)}))}),[])}n(48015),n(31600)}}]);