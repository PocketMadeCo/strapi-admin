"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[2282],{29920:(e,t,r)=>{var a=r(34398);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(20566)),i=a(r(32735)),l=r(5636),u=r(63865),d=r(37178),o=a(r(60216));function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){var t=e.description,r=e.disabled,a=e.intlLabel,n=e.error,o=e.name,s=e.onChange,f=e.placeholder,p=e.providerToEditName,m=e.type,b=e.value,g=(0,l.useIntl)().formatMessage,v="noName"===o?"".concat(strapi.backendURL,"/api/connect/").concat(p,"/callback"):b,y=g({id:a.id,defaultMessage:a.defaultMessage},c({provider:p},a.values)),h=t?g({id:t.id,defaultMessage:t.defaultMessage},c({provider:p},t.values)):"";if("bool"===m)return i.default.createElement(u.ToggleInput,{"aria-label":o,checked:b,disabled:r,hint:h,label:y,name:o,offLabel:g({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:g({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:function(e){s({target:{name:o,value:e.target.checked}})}});var P=f?g({id:f.id,defaultMessage:f.defaultMessage},c({},f.values)):"",E=n?g({id:n,defaultMessage:n}):"";return i.default.createElement(d.TextInput,{"aria-label":o,disabled:r,error:E,label:y,name:o,onChange:s,placeholder:P,type:m,value:v})};f.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},f.propTypes={description:o.default.shape({id:o.default.string.isRequired,defaultMessage:o.default.string.isRequired,values:o.default.object}),disabled:o.default.bool,error:o.default.string,intlLabel:o.default.shape({id:o.default.string.isRequired,defaultMessage:o.default.string.isRequired,values:o.default.object}).isRequired,name:o.default.string.isRequired,onChange:o.default.func.isRequired,placeholder:o.default.shape({id:o.default.string.isRequired,defaultMessage:o.default.string.isRequired,values:o.default.object}),providerToEditName:o.default.string.isRequired,type:o.default.string.isRequired,value:o.default.oneOfType([o.default.bool,o.default.string])};var p=f;t.default=p},68842:(e,t,r)=>{var a=r(34398);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(16950)),i=a(r(32735)),l=r(5636),u=r(44526),d=r(90662),o=r(71657),s=r(78330),c=r(4122),f=a(r(60216)),p=r(83281),m=r(10938),b=a(r(29920)),g=function(e){var t=e.headerBreadcrumbs,r=e.initialData,a=e.isSubmiting,f=e.layout,g=e.isOpen,v=e.onSubmit,y=e.onToggle,h=e.providerToEditName,P=(0,l.useIntl)().formatMessage;return g?i.default.createElement(c.ModalLayout,{onClose:y,labelledBy:"title"},i.default.createElement(c.ModalHeader,null,i.default.createElement(o.Breadcrumbs,{label:t.join(", ")},t.map((function(e){return i.default.createElement(o.Crumb,{key:e},e)})))),i.default.createElement(p.Formik,{onSubmit:function(e){return v(e)},initialValues:r,validationSchema:f.schema,validateOnChange:!1},(function(e){var t=e.errors,r=e.handleChange,l=e.values;return i.default.createElement(m.Form,null,i.default.createElement(c.ModalBody,null,i.default.createElement(d.Stack,{spacing:1},i.default.createElement(s.Grid,{gap:5},f.form.map((function(e){return e.map((function(e){return i.default.createElement(s.GridItem,{key:e.name,col:e.size,xs:12},i.default.createElement(b.default,(0,n.default)({},e,{error:t[e.name],onChange:r,value:l[e.name],providerToEditName:h})))}))}))))),i.default.createElement(c.ModalFooter,{startActions:i.default.createElement(u.Button,{variant:"tertiary",onClick:y,type:"button"},P({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:i.default.createElement(i.default.Fragment,null,i.default.createElement(u.Button,{type:"submit",loading:a},P({id:"app.components.Button.save",defaultMessage:"Save"})))}))}))):null};g.defaultProps={initialData:null,providerToEditName:null},g.propTypes={headerBreadcrumbs:f.default.arrayOf(f.default.string).isRequired,initialData:f.default.object,layout:f.default.shape({form:f.default.arrayOf(f.default.array),schema:f.default.object}).isRequired,isOpen:f.default.bool.isRequired,isSubmiting:f.default.bool.isRequired,onSubmit:f.default.func.isRequired,onToggle:f.default.func.isRequired,providerToEditName:f.default.string};var v=g;t.default=v},94475:(e,t,r)=>{var a=r(34398),n=r(87002);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ProvidersPage=void 0;var i=a(r(67945)),l=a(r(16950)),u=a(r(20566)),d=a(r(85374)),o=a(r(43408)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=C(t);if(r&&r.has(e))return r.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(a,l,u):a[l]=e[l]}a.default=e,r&&r.set(e,a);return a}(r(32735)),c=r(5636),f=r(10938),p=a(r(23973)),m=a(r(23940)),b=r(16925),g=r(11856),v=r(16540),y=r(29270),h=r(53214),P=r(95602),E=r(28004),O=r(20763),w=a(r(95717)),M=r(84968),T=a(r(78551)),j=r(8106),k=a(r(21519)),q=r(86286),R=a(r(74472)),L=a(r(68842));function C(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(C=function(e){return e?r:t})(e)}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,u.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=function(){var e=(0,c.useIntl)().formatMessage;(0,f.useFocusWhenNavigate)();var t=(0,y.useNotifyAT)().notifyStatus,r=(0,M.useQueryClient)(),a=(0,f.useTracking)().trackUsage,n=(0,s.useRef)(a),C=(0,s.useState)(!1),_=(0,o.default)(C,2),x=_[0],D=_[1],U=(0,s.useState)(!1),B=(0,o.default)(U,2),F=B[0],I=B[1],N=(0,s.useState)(null),z=(0,o.default)(N,2),A=z[0],W=z[1],H=(0,f.useNotification)(),Q=(0,f.useOverlayBlocker)(),V=Q.lockApp,G=Q.unlockApp,X=(0,s.useMemo)((function(){return{update:R.default.updateProviders}}),[]),J=(0,f.useRBAC)(X),K=J.isLoading,Y=J.allowedActions.canUpdate,Z=(0,M.useQuery)("get-providers",(function(){return(0,j.fetchData)(H)}),{onSuccess:function(){t(e({id:(0,q.getTrad)("Providers.data.loaded"),defaultMessage:"Providers have been loaded"}))},initialData:{}}),$=Z.isLoading,ee=Z.data,te=Z.isFetching,re=$||te,ae=(0,M.useMutation)(j.putProvider,{onSuccess:function(){var e=(0,d.default)(i.default.mark((function e(){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.invalidateQueries("get-providers");case 2:H({type:"info",message:{id:(0,q.getTrad)("notification.success.submit")}}),n.current("didEditAuthenticationProvider"),I(!1),oe(),G();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),onError:function(){H({type:"warning",message:{id:"notification.error"}}),G(),I(!1)},refetchActive:!1}),ne=(0,s.useMemo)((function(){return(0,k.default)(ee)}),[ee]),ie=ne.length,le=(0,s.useMemo)((function(){if(!A)return!1;var e=ne.find((function(e){return e.name===A}));return(0,p.default)(e,"subdomain")}),[ne,A]),ue=e({id:(0,q.getTrad)("HeaderNav.link.providers"),defaultMessage:"Providers"}),de=(0,s.useMemo)((function(){return"email"===A?T.default.email:le?T.default.providersWithSubdomain:T.default.providers}),[A,le]),oe=function(){D((function(e){return!e}))},se=function(e){Y&&(W(e.name),oe())},ce=function(){var e=(0,d.default)(i.default.mark((function e(t){var r;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:I(!0),V(),n.current("willEditAuthenticationProvider"),r=S(S({},ee),{},(0,u.default)({},A,t)),ae.mutate({providers:r});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.default.createElement(g.Layout,null,s.default.createElement(f.SettingsPageTitle,{name:ue}),s.default.createElement(v.Main,null,s.default.createElement(g.HeaderLayout,{title:e({id:(0,q.getTrad)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),re||K?s.default.createElement(f.LoadingIndicatorPage,null):s.default.createElement(g.ContentLayout,null,s.default.createElement(h.Table,{colCount:4,rowCount:ie+1},s.default.createElement(h.Thead,null,s.default.createElement(h.Tr,null,s.default.createElement(h.Th,null,s.default.createElement(P.Typography,{variant:"sigma",textColor:"neutral600"},s.default.createElement(E.VisuallyHidden,null,e({id:(0,q.getTrad)("Providers.image"),defaultMessage:"Image"})))),s.default.createElement(h.Th,null,s.default.createElement(P.Typography,{variant:"sigma",textColor:"neutral600"},e({id:(0,q.getTrad)("Providers.name"),defaultMessage:"Name"}))),s.default.createElement(h.Th,null,s.default.createElement(P.Typography,{variant:"sigma",textColor:"neutral600"},e({id:(0,q.getTrad)("Providers.status"),defaultMessage:"Status"}))),s.default.createElement(h.Th,null,s.default.createElement(P.Typography,{variant:"sigma"},s.default.createElement(E.VisuallyHidden,null,e({id:(0,q.getTrad)("Providers.settings"),defaultMessage:"Settings"})))))),s.default.createElement(h.Tbody,null,ne.map((function(t){return s.default.createElement(h.Tr,(0,l.default)({key:t.name},(0,f.onRowClick)({fn:function(){return se(t)},condition:Y})),s.default.createElement(h.Td,{width:""},s.default.createElement(b.FontAwesomeIcon,{icon:t.icon})),s.default.createElement(h.Td,{width:"45%"},s.default.createElement(P.Typography,{fontWeight:"semiBold",textColor:"neutral800"},t.name)),s.default.createElement(h.Td,{width:"65%"},s.default.createElement(P.Typography,{textColor:t.enabled?"success600":"danger600","data-testid":"enable-".concat(t.name)},t.enabled?e({id:(0,q.getTrad)("Providers.enabled"),defaultMessage:"Enabled"}):e({id:(0,q.getTrad)("Providers.disabled"),defaultMessage:"Disabled"}))),s.default.createElement(h.Td,f.stopPropagation,Y&&s.default.createElement(O.IconButton,{onClick:function(){return se(t)},noBorder:!0,icon:s.default.createElement(w.default,null),label:"Edit"})))})))))),s.default.createElement(L.default,{initialData:ee[A],isOpen:x,isSubmiting:F,layout:de,headerBreadcrumbs:[e({id:(0,q.getTrad)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),(0,m.default)(A)],onToggle:oe,onSubmit:ce,providerToEditName:A}))};t.ProvidersPage=x;var D=function(){return s.default.createElement(f.CheckPagePermissions,{permissions:R.default.readProviders},s.default.createElement(x,null))};t.default=D},8106:(e,t,r)=>{var a=r(34398);Object.defineProperty(t,"__esModule",{value:!0}),t.putProvider=t.fetchData=void 0;var n=a(r(67945)),i=a(r(85374)),l=r(86286),u=function(){var e=(0,i.default)(n.default.mark((function e(t){var r,a;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.axiosInstance.get((0,l.getRequestURL)("providers"));case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(0),t({type:"warning",message:{id:"notification.error"}}),new Error("error");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();t.fetchData=u;t.putProvider=function(e){return l.axiosInstance.put((0,l.getRequestURL)("providers"),e)}},21519:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(92891),n=function(e){return(0,a.sortBy)(Object.keys(e).reduce((function(t,r){var a=e[r],n=a.icon,i=a.enabled,l=a.subdomain,u="envelope"===n?["fas","envelope"]:["fab",n];return void 0!==l?t.push({name:r,icon:u,enabled:i,subdomain:l}):t.push({name:r,icon:u,enabled:i}),t}),[]),"name")};t.default=n},78551:(e,t,r)=>{var a=r(87002);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var d=i?Object.getOwnPropertyDescriptor(e,l):null;d&&(d.get||d.set)?Object.defineProperty(n,l,d):n[l]=e[l]}n.default=e,r&&r.set(e,n);return n}(r(5173)),i=r(10938),l=r(86286);function u(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}var d={id:(0,l.getTrad)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},o={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},s={id:(0,l.getTrad)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},c={id:(0,l.getTrad)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},f={id:(0,l.getTrad)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},p={id:(0,l.getTrad)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},m={id:(0,l.getTrad)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},b={id:(0,l.getTrad)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},g={email:{form:[[{intlLabel:c,name:"enabled",type:"bool",description:s,size:6}]],schema:n.object().shape({enabled:n.bool().required(i.translatedErrors.required)})},providers:{form:[[{intlLabel:c,name:"enabled",type:"bool",description:s,size:6,validations:{required:!0}}],[{intlLabel:f,name:"key",type:"text",placeholder:m,size:12,validations:{required:!0}}],[{intlLabel:b,name:"secret",type:"text",placeholder:m,size:12,validations:{required:!0}}],[{intlLabel:d,placeholder:o,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:p,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:n.object().shape({enabled:n.bool().required(i.translatedErrors.required),key:n.string().when("enabled",{is:!0,then:n.string().required(i.translatedErrors.required),otherwise:n.string()}),secret:n.string().when("enabled",{is:!0,then:n.string().required(i.translatedErrors.required),otherwise:n.string()}),callback:n.string().when("enabled",{is:!0,then:n.string().required(i.translatedErrors.required),otherwise:n.string()})})},providersWithSubdomain:{form:[[{intlLabel:c,name:"enabled",type:"bool",description:s,size:6,validations:{required:!0}}],[{intlLabel:f,name:"key",type:"text",placeholder:m,size:12,validations:{required:!0}}],[{intlLabel:b,name:"secret",type:"text",placeholder:m,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,l.getTrad)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,l.getTrad)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:d,placeholder:o,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:p,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:n.object().shape({enabled:n.bool().required(i.translatedErrors.required),key:n.string().when("enabled",{is:!0,then:n.string().required(i.translatedErrors.required),otherwise:n.string()}),secret:n.string().when("enabled",{is:!0,then:n.string().required(i.translatedErrors.required),otherwise:n.string()}),subdomain:n.string().when("enabled",{is:!0,then:n.string().required(i.translatedErrors.required),otherwise:n.string()}),callback:n.string().when("enabled",{is:!0,then:n.string().required(i.translatedErrors.required),otherwise:n.string()})})}};t.default=g},26958:(e,t,r)=>{var a=r(34398);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(67945)),i=a(r(85374)),l=a(r(43653)),u=r(10938),d=l.default.create({baseURL:"http://localhost:1337"});d.interceptors.request.use(function(){var e=(0,i.default)(n.default.mark((function e(t){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.headers={Authorization:"Bearer ".concat(u.auth.getToken()),Accept:"application/json","Content-Type":"application/json"},e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){Promise.reject(e)})),d.interceptors.response.use((function(e){return e}),(function(e){var t;throw 401===(null===(t=e.response)||void 0===t?void 0:t.status)&&(u.auth.clearAppStorage(),window.location.reload()),e}));var o=d;t.default=o},8005:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(92891),n=function(e){return Object.keys(e).reduce((function(t,r){var n=e[r].controllers,i=Object.keys(n).reduce((function(e,t){return(0,a.isEmpty)(n[t])||(e[t]=n[t]),e}),{});return(0,a.isEmpty)(i)||(t[r]={controllers:i}),t}),{})};t.default=n},85084:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){return e.reduce((function(e,t){return e.push({label:t,value:t}),e}),[])};t.default=r},96758:(e,t,r)=>{var a=r(34398);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(92569)),i=function(e){return"/".concat(n.default,"/").concat(e)};t.default=i},86286:(e,t,r)=>{var a=r(34398);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"axiosInstance",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"cleanPermissions",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"formatPolicies",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"getRequestURL",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"getTrad",{enumerable:!0,get:function(){return u.default}});var n=a(r(26958)),i=a(r(8005)),l=a(r(96758)),u=a(r(63080)),d=a(r(85084))}}]);