(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4721],{85344:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config-public-details",function(){return t(99928)}])},10063:function(e,n,t){"use strict";t.d(n,{Q:function(){return u},Z:function(){return d}});var r=t(85893),a=t(67294),i=t(84485),s=t(20550),o=t(48419),c=t(78464),l=i.Z.Title,u="#5a67d8";function d(e){var n=(0,a.useState)(""),t=n[0],i=n[1],d=e.title,f=e.description,h=e.placeholder,m=e.maxLength,p=e.values,v=e.handleDeleteIndex,g=e.handleCreateString,x=e.submitStatus,j=e.continuousStatusMessage;return(0,r.jsxs)("div",{className:"edit-string-array-container",children:[(0,r.jsx)(l,{level:3,className:"section-title",children:d}),(0,r.jsx)("p",{className:"description",children:f}),(0,r.jsx)("div",{className:"edit-current-strings",children:null===p||void 0===p?void 0:p.map((function(e,n){return(0,r.jsx)(s.Z,{closable:!0,onClose:function(){v(n)},color:u,children:e},"tag-".concat(e,"-").concat(n))}))}),j&&(0,r.jsx)("div",{className:"continuous-status-section",children:(0,r.jsx)(c.Z,{status:j})}),(0,r.jsx)("div",{className:"add-new-string-section",children:(0,r.jsx)(o.ZP,{fieldName:"string-input",value:t,onChange:function(e){var n=e.value;i(n)},onPressEnter:function(){var e=t.trim();g(e),i("")},maxLength:m,placeholder:h,status:x})})]})}d.defaultProps={maxLength:50,description:null,submitStatus:null,continuousStatusMessage:null}},15976:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r=t(34051),a=t.n(r),i=t(85893),s=t(67294),o=t(94594),c=t(83192),l=t(78464),u=t(25964),d=t(35159);function f(e,n,t,r,a,i,s){try{var o=e[i](s),c=o.value}catch(l){return void t(l)}o.done?n(c):Promise.resolve(c).then(r,a)}function h(e){var n=(0,s.useState)(null),t=n[0],r=n[1],h=null,m=((0,s.useContext)(d.aC)||{}).setFieldInConfigState,p=e.apiPath,v=e.checked,g=e.reversed,x=void 0!==g&&g,j=e.configPath,y=void 0===j?"":j,w=e.disabled,b=void 0!==w&&w,N=e.fieldName,S=e.label,C=e.tip,k=e.useSubmit,P=e.onChange,T=function(){r(null),clearTimeout(h),h=null},Z=function(){var e,n=(e=a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!k){e.next=6;break}return r((0,c.kg)(c.Jk)),t=x?!n:n,e.next=5,(0,u.Si)({apiPath:p,data:{value:t},onSuccess:function(){m({fieldName:N,value:t,path:y}),r((0,c.kg)(c.zv))},onError:function(e){r((0,c.kg)(c.Un,"There was an error: ".concat(e)))}});case 5:h=setTimeout(T,u.sI);case 6:P&&P(n);case 7:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function s(e){f(i,r,a,s,o,"next",e)}function o(e){f(i,r,a,s,o,"throw",e)}s(void 0)}))});return function(e){return n.apply(this,arguments)}}(),E=null!==t&&t.type===c.Jk;return(0,i.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[S&&(0,i.jsx)("div",{className:"label-side",children:(0,i.jsx)("span",{className:"formfield-label",children:S})}),(0,i.jsxs)("div",{className:"input-side",children:[(0,i.jsxs)("div",{className:"input-group",children:[(0,i.jsx)(o.Z,{className:"switch field-".concat(N),loading:E,onChange:Z,defaultChecked:v,checked:v,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:b}),(0,i.jsx)(l.Z,{status:t})]}),(0,i.jsx)("p",{className:"field-tip",children:C})]})]})}h.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},99928:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return q}});var r=t(85893),a=t(67294),i=t(84485),s=t(50197),o=t(35159),c=t(25964),l=t(15976),u=t(34051),d=t.n(u),f=t(77916),h=t(71577),m=t(50888),p=t(88484),v=t(78464),g=t(83192),x=t(58827);function j(e,n,t,r,a,i,s){try{var o=e[i](s),c=o.value}catch(l){return void t(l)}o.done?n(c):Promise.resolve(c).then(r,a)}var y=["image/png","image/jpeg","image/gif"];function w(){var e,n=(0,a.useState)(null),t=n[0],i=n[1],s=(0,a.useState)(!1),l=s[0],u=s[1],w=(0,a.useState)(0),b=w[0],N=w[1],S=(0,a.useContext)(o.aC)||{},C=S.setFieldInConfigState,k=S.serverConfig,P=null===k||void 0===k||null===(e=k.instanceDetails)||void 0===e?void 0:e.logo,T=(0,a.useState)(null),Z=T[0],E=T[1],_=null,I=c.ZQ.apiPath,O=c.ZQ.tip,U=function(){E(null),clearTimeout(_),_=null},L=function(){var e,n=(e=d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t===P){e.next=5;break}return E((0,g.kg)(g.Jk)),e.next=4,(0,c.Si)({apiPath:I,data:{value:t},onSuccess:function(){C({fieldName:"logo",value:t,path:""}),E((0,g.kg)(g.zv)),u(!1),N(Math.floor(100*Math.random()))},onError:function(e){E((0,g.kg)(g.Un,"There was an error: ".concat(e))),u(!1)}});case 4:_=setTimeout(U,c.sI);case 5:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function s(e){j(i,r,a,s,o,"next",e)}function o(e){j(i,r,a,s,o,"throw",e)}s(void 0)}))});return function(){return n.apply(this,arguments)}}(),A="".concat(x.WB,"logo?random=").concat(b);return(0,r.jsxs)("div",{className:"formfield-container logo-upload-container",children:[(0,r.jsx)("div",{className:"label-side",children:(0,r.jsx)("span",{className:"formfield-label",children:"Logo"})}),(0,r.jsxs)("div",{className:"input-side",children:[(0,r.jsxs)("div",{className:"input-group",children:[(0,r.jsx)("img",{src:A,alt:"avatar",className:"logo-preview"}),(0,r.jsx)(f.Z,{name:"logo",listType:"picture",className:"avatar-uploader",showUploadList:!1,accept:y.join(","),beforeUpload:function(e){return u(!0),new Promise((function(n,t){if(!y.includes(e.type)){var r="File type is not supported: ".concat(e.type);return E((0,g.kg)(g.Un,"There was an error: ".concat(r))),_=setTimeout(U,c.sI),u(!1),t()}!function(e,n){var t=new FileReader;t.addEventListener("load",(function(){return n(t.result)})),t.readAsDataURL(e)}(e,(function(e){return i(e),n()}))}))},customRequest:L,disabled:l,children:l?(0,r.jsx)(m.Z,{style:{color:"white"}}):(0,r.jsx)(h.Z,{icon:(0,r.jsx)(p.Z,{})})})]}),(0,r.jsx)(v.Z,{status:Z}),(0,r.jsx)("p",{className:"field-tip",children:O})]})]})}function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){b(e,n,t[n])}))}return e}var S=i.Z.Title;function C(){var e=(0,a.useState)(null),n=e[0],t=e[1],i=((0,a.useContext)(o.aC)||{}).serverConfig,u=i.instanceDetails,d=i.yp,f=d.instanceUrl;if((0,a.useEffect)((function(){t(N({},u,d))}),[u,d]),!n)return null;var h=function(e){var r=e.fieldName,a=e.value;t(N({},n,b({},r,a)))},m=""!==f;return(0,r.jsxs)("div",{className:"edit-general-settings",children:[(0,r.jsx)(S,{level:3,className:"section-title",children:"Configure Instance Details"}),(0,r.jsx)("br",{}),(0,r.jsx)(s.ZP,N({fieldName:"name"},c.RE,{value:n.name,initialValue:u.name,onChange:h})),(0,r.jsx)(s.ZP,N({fieldName:"instanceUrl"},c.cj,{value:n.instanceUrl,initialValue:d.instanceUrl,type:s.xA,onChange:h,onSubmit:function(){""===n.instanceUrl&&!0===d.enabled&&(0,c.Si)({apiPath:c.AP,data:{value:!1}})}})),(0,r.jsx)(s.ZP,N({fieldName:"summary"},c.rs,{type:s.Sk,value:n.summary,initialValue:u.summary,onChange:h})),(0,r.jsx)(w,{}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{className:"description",children:["Increase your audience by appearing in the"," ",(0,r.jsx)("a",{href:"https://directory.owncast.online",target:"_blank",rel:"noreferrer",children:(0,r.jsx)("strong",{children:"Owncast Directory"})}),". This is an external service run by the Owncast project."," ",(0,r.jsx)("a",{href:"https://owncast.online/docs/directory/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn more"}),"."]}),!d.instanceUrl&&(0,r.jsxs)("p",{className:"description",children:["You must set your ",(0,r.jsx)("strong",{children:"Server URL"})," above to enable the directory."]}),(0,r.jsxs)("div",{className:"config-yp-container",children:[(0,r.jsx)(l.Z,N({fieldName:"enabled",useSubmit:!0},c.P,{checked:n.enabled,disabled:!m})),(0,r.jsx)(l.Z,N({fieldName:"nsfw",useSubmit:!0},c.EY,{checked:n.nsfw,disabled:!m}))]})]})}var k=t(20550),P=t(48419),T=t(10063);function Z(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function E(e,n,t,r,a,i,s){try{var o=e[i](s),c=o.value}catch(l){return void t(l)}o.done?n(c):Promise.resolve(c).then(r,a)}function _(e){return function(e){if(Array.isArray(e))return Z(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return Z(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Z(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var I=i.Z.Title;function O(){var e=(0,a.useState)(""),n=e[0],t=e[1],i=(0,a.useState)(null),s=i[0],l=i[1],u=(0,a.useContext)(o.aC)||{},f=u.serverConfig,h=u.setFieldInConfigState,m=f.instanceDetails.tags,p=void 0===m?[]:m,v=c.y_.apiPath,x=c.y_.maxLength,j=c.y_.placeholder,y=c.y_.configPath,w=null;(0,a.useEffect)((function(){return function(){clearTimeout(w)}}),[]);var b=function(){l(null),w=null,clearTimeout(w)},N=function(){var e,n=(e=d().mark((function e(n){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l((0,g.kg)(g.Jk)),e.next=3,(0,c.Si)({apiPath:v,data:{value:n},onSuccess:function(){h({fieldName:"tags",value:n,path:y}),l((0,g.kg)(g.zv,"Tags updated.")),t(""),w=setTimeout(b,c.sI)},onError:function(e){l((0,g.kg)(g.Un,e)),w=setTimeout(b,c.sI)}});case 3:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function s(e){E(i,r,a,s,o,"next",e)}function o(e){E(i,r,a,s,o,"throw",e)}s(void 0)}))});return function(e){return n.apply(this,arguments)}}();return(0,r.jsxs)("div",{className:"tag-editor-container",children:[(0,r.jsx)(I,{level:3,className:"section-title",children:"Add Tags"}),(0,r.jsx)("p",{className:"description",children:"This is a great way to categorize your Owncast server on the Directory!"}),(0,r.jsx)("div",{className:"edit-current-strings",children:p.map((function(e,n){return(0,r.jsx)(k.Z,{closable:!0,onClose:function(){!function(e){b();var n=_(p);n.splice(e,1),N(n)}(n)},color:T.Q,children:e},"tag-".concat(e,"-").concat(n))}))}),(0,r.jsx)("div",{className:"add-new-string-section",children:(0,r.jsx)(P.ZP,{fieldName:"tag-input",value:n,className:"new-tag-input",onChange:function(e){var n=e.value;s||l(null),t(n)},onPressEnter:function(){b();var e=n.trim();if(""!==e)if(p.some((function(n){return n.toLowerCase()===e.toLowerCase()})))l((0,g.kg)(g.dG,"This tag is already used!"));else{var t=_(p).concat([e]);N(t)}else l((0,g.kg)(g.dG,"Please enter a tag"))},maxLength:x,placeholder:j,status:s})})]})}var U=t(91017),L=t(5152),A=t(9980),D=t.n(A);t(56780);function F(e,n,t,r,a,i,s){try{var o=e[i](s),c=o.value}catch(l){return void t(l)}o.done?n(c):Promise.resolve(c).then(r,a)}function z(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function s(e){F(i,r,a,s,o,"next",e)}function o(e){F(i,r,a,s,o,"throw",e)}s(void 0)}))}}var M=new(D()),J=(0,L.default)((function(){return t.e(1912).then(t.bind(t,1912))}),{loadableGenerated:{webpack:function(){return[1912]}},ssr:!1}),R=i.Z.Title;function G(){var e=(0,a.useState)(""),n=e[0],t=e[1],i=(0,a.useState)(null),s=i[0],l=i[1],u=(0,a.useState)(!1),f=u[0],m=u[1],p=(0,a.useContext)(o.aC)||{},x=p.serverConfig,j=p.setFieldInConfigState,y=x.instanceDetails,w=y.extraPageContent,b=null,N=function(){l(null),m(!1),clearTimeout(b),b=null};function S(){return(S=z(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l((0,g.kg)(g.Jk)),e.next=3,(0,c.Si)({apiPath:c.AA,data:{value:n},onSuccess:function(e){j({fieldName:"extraPageContent",value:n,path:"instanceDetails"}),l((0,g.kg)(g.zv,e))},onError:function(e){l((0,g.kg)(g.Un,e))}});case 3:b=setTimeout(N,c.sI);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,a.useEffect)((function(){t(w)}),[y]),(0,r.jsxs)("div",{className:"edit-page-content",children:[(0,r.jsx)(R,{level:3,className:"section-title",children:"Custom Page Content"}),(0,r.jsxs)("p",{className:"description",children:["Edit the content of your page by using simple"," ",(0,r.jsx)("a",{href:"https://www.markdownguide.org/basic-syntax/",target:"_blank",rel:"noopener noreferrer",children:"Markdown syntax"}),"."]}),(0,r.jsx)(J,{style:{height:"30em"},value:n,renderHTML:function(e){return M.render(e)},onChange:function(e){var n=e.text;t(n),n===w||f?n===w&&f&&m(!1):m(!0)},config:{htmlClass:"markdown-editor-preview-pane",markdownClass:"markdown-editor-pane"}}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"page-content-actions",children:[f&&(0,r.jsx)(h.Z,{type:"primary",onClick:function(){return S.apply(this,arguments)},children:"Save"}),(0,r.jsx)(v.Z,{status:s})]})]})}function Q(e,n,t,r,a,i,s){try{var o=e[i](s),c=o.value}catch(l){return void t(l)}o.done?n(c):Promise.resolve(c).then(r,a)}function V(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function s(e){Q(i,r,a,s,o,"next",e)}function o(e){Q(i,r,a,s,o,"throw",e)}s(void 0)}))}}var X=i.Z.Title;function Y(){var e=(0,a.useState)(""),n=e[0],t=e[1],i=(0,a.useState)(null),s=i[0],l=i[1],u=(0,a.useState)(!1),f=u[0],m=u[1],p=(0,a.useContext)(o.aC)||{},x=p.serverConfig,j=p.setFieldInConfigState,y=x.instanceDetails,w=y.customStyles,b=null,N=function(){l(null),m(!1),clearTimeout(b),b=null};function S(){return(S=V(d().mark((function e(){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l((0,g.kg)(g.Jk)),e.next=3,(0,c.Si)({apiPath:c.d$,data:{value:n},onSuccess:function(e){j({fieldName:"customStyles",value:n,path:"instanceDetails"}),l((0,g.kg)(g.zv,e))},onError:function(e){l((0,g.kg)(g.Un,e))}});case 3:b=setTimeout(N,c.sI);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,a.useEffect)((function(){t(w)}),[y]),(0,r.jsxs)("div",{className:"edit-custom-css",children:[(0,r.jsx)(X,{level:3,className:"section-title",children:"Customize your page styling with CSS"}),(0,r.jsxs)("p",{className:"description",children:["Customize the look and feel of your Owncast instance by overriding the CSS styles of various components on the page. Refer to the"," ",(0,r.jsx)("a",{href:"https://owncast.online/docs/website/",rel:"noopener noreferrer",target:"_blank",children:"CSS & Components guide"}),"."]}),(0,r.jsx)("p",{className:"description",children:"Please input plain CSS text, as this will be directly injected onto your page during load."}),(0,r.jsx)(P.ZP,{fieldName:"customStyles",type:P.Sk,value:n,maxLength:null,onChange:function(e){var n=e.value;t(n),n===w||f?n===w&&f&&m(!1):m(!0)},placeholder:"/* Enter custom CSS here */"}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"page-content-actions",children:[f&&(0,r.jsx)(h.Z,{type:"primary",onClick:function(){return S.apply(this,arguments)},children:"Save"}),(0,r.jsx)(v.Z,{status:s})]})]})}var $=i.Z.Title;function q(){return(0,r.jsxs)("div",{className:"config-public-details-page",children:[(0,r.jsx)($,{children:"General Settings"}),(0,r.jsxs)("p",{className:"description",children:["The following are displayed on your site to describe your stream and its content."," ",(0,r.jsx)("a",{href:"https://owncast.online/docs/website/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]}),(0,r.jsxs)("div",{className:"top-container",children:[(0,r.jsx)("div",{className:"form-module instance-details-container",children:(0,r.jsx)(C,{})}),(0,r.jsxs)("div",{className:"form-module social-items-container ",children:[(0,r.jsx)("div",{className:"form-module tags-module",children:(0,r.jsx)(O,{})}),(0,r.jsx)("div",{className:"form-module social-handles-container",children:(0,r.jsx)(U.Z,{})})]})]}),(0,r.jsx)("div",{className:"form-module page-content-module",children:(0,r.jsx)(G,{})}),(0,r.jsx)("div",{className:"form-module page-content-module",children:(0,r.jsx)(Y,{})})]})}}},function(e){e.O(0,[1741,6003,7910,2589,1017,9774,2888,179],(function(){return n=85344,e(e.s=n);var n}));var n=e.O();_N_E=n}]);