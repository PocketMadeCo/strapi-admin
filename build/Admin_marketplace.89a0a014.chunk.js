(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[5516],{75152:function(e,t,a){var r;e.exports=(r=a(32735),function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=187)}({0:function(e,t){e.exports=r},187:function(e,t,a){"use strict";a.r(t);var r=a(0);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}t.default=function(e){return r.createElement("svg",n({width:"1em",height:"1em",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.571 18.272H10.43v-8.47H2.487a.2.2 0 01-.14-.343L11.858.058a.2.2 0 01.282 0l9.513 9.4a.2.2 0 01-.14.343H13.57v8.47zM2.2 21.095a.2.2 0 00-.2.2v2.424c0 .11.09.2.2.2h19.6a.2.2 0 00.2-.2v-2.424a.2.2 0 00-.2-.2H2.2z",fill:"#212134"}))}}}))},25794:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(84968),n=a(10938),l=a(70669),i=function(e){var t=(0,n.useNotification)();return(0,r.useQuery)("list-installed-plugins",(function(){return(0,l.fetchInstalledPlugins)()}),{onSuccess:function(){e&&e()},onError:function(){t({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};t.default=i},70669:(e,t,a)=>{"use strict";var r=a(99489);Object.defineProperty(t,"__esModule",{value:!0}),t.fetchInstalledPlugins=void 0;var n=r(a(28129)),l=r(a(68357)),i=a(17888),u=function(){var e=(0,l.default)(n.default.mark((function e(){var t,a;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.axiosInstance.get("/admin/plugins");case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.fetchInstalledPlugins=u},95665:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(84968),n=a(10938),l=a(30840),i=function(e){var t=(0,n.useNotification)();return(0,r.useQuery)("list-marketplace-plugins",(function(){return(0,l.fetchMarketplacePlugins)()}),{onSuccess:function(){e&&e()},onError:function(){t({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};t.default=i},30840:(e,t,a)=>{"use strict";var r=a(99489);Object.defineProperty(t,"__esModule",{value:!0}),t.fetchMarketplacePlugins=void 0;var n=r(a(28129)),l=r(a(56156)),i=r(a(68357)),u=r(a(43653));function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){(0,l.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var s=function(){var e=(0,i.default)(n.default.mark((function e(){var t,a,r;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.default.get("".concat("https://market-api.strapi.io","/plugins"));case 2:return t=e.sent,a=t.data,r=d(d({},a),{},{data:a.data.filter((function(e){return"v4"===e.attributes.strapiCompatibility}))}),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.fetchMarketplacePlugins=s},84306:(e,t,a)=>{"use strict";var r=a(99489);Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyPluginGrid=void 0;var n=r(a(32735)),l=r(a(19615)),i=a(9808),u=a(11856),o=(0,l.default)(i.Box).withConfig({displayName:"EmptyPluginGrid__EmptyPluginCard",componentId:"sc-lmx01e-0"})(["background:",";opacity:0.33;"],(function(e){var t=e.theme;return"linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ".concat(t.colors.neutral150," 100%)")}));t.EmptyPluginGrid=function(){return n.default.createElement(u.GridLayout,null,Array(12).fill(null).map((function(e,t){return n.default.createElement(o,{key:"empty-plugin-card-".concat(t),height:"234px",hasRadius:!0})})))}},55071:(e,t,a)=>{"use strict";var r=a(99489);Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyPluginSearch=void 0;var n=r(a(32735)),l=r(a(60216)),i=a(95602),u=a(9808),o=a(19192),d=a(78752),s=r(a(97042)),c=a(84306),f=function(e){var t=e.content;return n.default.createElement(u.Box,{position:"relative"},n.default.createElement(c.EmptyPluginGrid,null),n.default.createElement(u.Box,{position:"absolute",top:11,width:"100%"},n.default.createElement(o.Flex,{alignItems:"center",justifyContent:"center",direction:"column"},n.default.createElement(d.Icon,{as:s.default,color:"",width:"160px",height:"88px"}),n.default.createElement(u.Box,{paddingTop:6},n.default.createElement(i.Typography,{variant:"delta",as:"p",textColor:"neutral600"},t)))))};t.EmptyPluginSearch=f,f.propTypes={content:l.default.string.isRequired}},15326:(e,t,a)=>{"use strict";var r=a(99489);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(32735)),l=r(a(60216)),i=a(5636),u=r(a(19615)),o=a(9808),d=a(90662),s=a(95602),c=a(44526),f=a(74064),p=a(19192),g=a(78752),m=a(44826),y=r(a(82372)),v=r(a(68192)),h=r(a(88677)),P=r(a(14356)),b=a(10938),E=a(59087),k=r(a(77016)),M=(0,u.default)(s.Typography).withConfig({displayName:"PluginCard__EllipsisText",componentId:"sc-1mq536v-0"})(["display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;"]),x=function(e){var t=e.plugin,a=e.installedPluginNames,r=e.useYarn,l=t.attributes,u=(0,i.useIntl)().formatMessage,x=(0,b.useNotification)(),O=(0,b.useTracking)().trackUsage,w=a.includes(l.npmPackageName),j=r?"yarn add ".concat(l.npmPackageName):"npm install ".concat(l.npmPackageName),_=u({id:"admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi",defaultMessage:"Made by Strapi"});return n.default.createElement(p.Flex,{direction:"column",justifyContent:"space-between",paddingTop:4,paddingRight:6,paddingBottom:4,paddingLeft:6,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",alignItems:"normal"},n.default.createElement(o.Box,null,n.default.createElement(o.Box,{as:"img",src:l.logo.url,alt:"".concat(l.name," logo"),hasRadius:!0,width:11,height:11}),n.default.createElement(o.Box,{paddingTop:4},n.default.createElement(s.Typography,{as:"h3",variant:"delta"},n.default.createElement(p.Flex,{alignItems:"center"},l.name,l.validated&&!l.madeByStrapi&&n.default.createElement(m.Tooltip,{description:u({id:"admin.pages.MarketPlacePage.plugin.tooltip.verified",defaultMessage:"Plugin verified by Strapi"})},n.default.createElement(p.Flex,null,n.default.createElement(g.Icon,{as:P.default,marginLeft:2,color:"success600"}))),l.madeByStrapi&&n.default.createElement(m.Tooltip,{description:_},n.default.createElement(p.Flex,null,n.default.createElement(o.Box,{as:"img",src:k.default,alt:_,marginLeft:1,width:6,height:"auto"})))))),n.default.createElement(o.Box,{paddingTop:2},n.default.createElement(M,{as:"p",variant:"omega",textColor:"neutral600"},l.description))),n.default.createElement(d.Stack,{horizontal:!0,spacing:2,style:{alignSelf:"flex-end"},paddingTop:6},n.default.createElement(f.LinkButton,{size:"S",href:"https://market.strapi.io/plugins/".concat(l.slug),endIcon:n.default.createElement(y.default,null),"aria-label":u({id:"admin.pages.MarketPlacePage.plugin.info.label",defaultMessage:"Learn more about {pluginName}"},{pluginName:l.name}),variant:"tertiary",onClick:function(){return O("didPluginLearnMore")}},u({id:"admin.pages.MarketPlacePage.plugin.info.text",defaultMessage:"Learn more"})),w?n.default.createElement(o.Box,{paddingLeft:4},n.default.createElement(g.Icon,{as:h.default,marginRight:2,width:12,height:12,color:"success600"}),n.default.createElement(s.Typography,{variant:"omega",textColor:"success600",fontWeight:"bold"},u({id:"admin.pages.MarketPlacePage.plugin.installed",defaultMessage:"Installed"}))):n.default.createElement(E.CopyToClipboard,{onCopy:function(){O("willInstallPlugin"),x({type:"success",message:{id:"admin.pages.MarketPlacePage.plugin.copy.success"}})},text:j},n.default.createElement(c.Button,{size:"S",startIcon:n.default.createElement(v.default,null),variant:"secondary"},u({id:"admin.pages.MarketPlacePage.plugin.copy",defaultMessage:"Copy install command"})))))};x.propTypes={plugin:l.default.shape({id:l.default.string.isRequired,attributes:l.default.shape({name:l.default.string.isRequired,description:l.default.string.isRequired,slug:l.default.string.isRequired,npmPackageName:l.default.string.isRequired,npmPackageUrl:l.default.string.isRequired,repositoryUrl:l.default.string.isRequired,logo:l.default.object.isRequired,developerName:l.default.string.isRequired,validated:l.default.bool.isRequired,madeByStrapi:l.default.bool.isRequired,strapiCompatibility:l.default.oneOf(["v3","v4"]).isRequired}).isRequired}).isRequired,installedPluginNames:l.default.arrayOf(l.default.string).isRequired,useYarn:l.default.bool.isRequired};var O=x;t.default=O},76384:(e,t,a)=>{"use strict";var r=a(99489),n=a(45559);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MarketPlacePage=void 0;var l=r(a(61432)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var a=w(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=l?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=e[i]}r.default=e,a&&a.set(e,r);return r}(a(32735)),u=a(5636),o=a(99357),d=a(84968),s=r(a(58469)),c=a(10938),f=a(78330),p=a(11856),g=a(16540),m=a(89978),y=a(9808),v=a(74064),h=a(29270),P=r(a(75152)),b=r(a(15326)),E=a(55071),k=a(43092),M=r(a(25794)),x=r(a(95665)),O=r(a(59700));function w(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(w=function(e){return e?a:t})(e)}var j=function(){var e=(0,u.useIntl)().formatMessage,t=(0,c.useTracking)().trackUsage,a=(0,h.useNotifyAT)().notifyStatus,r=(0,i.useRef)(t),n=(0,c.useNotification)(),O=(0,i.useState)(""),w=(0,l.default)(O,2),j=w[0],_=w[1];(0,c.useFocusWhenNavigate)();var S=e({id:"admin.pages.MarketPlacePage.title",defaultMessage:"Marketplace"}),R=(0,x.default)((function(){a(e({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:S}))})),T=R.status,I=R.data,C=(0,M.default)(),B=C.status,N=C.data,L=(0,d.useQuery)("app-information",k.fetchAppInformation,{onError:function(){n({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),q=L.data,A=L.status,G=[T,B,A].includes("loading"),W=[T,B,A].includes("error");if((0,i.useEffect)((function(){r.current("didGoToMarketplace")}),[]),W)return i.default.createElement(p.Layout,null,i.default.createElement(p.ContentLayout,null,i.default.createElement(y.Box,{paddingTop:8},i.default.createElement(c.AnErrorOccurred,null))));if(G)return i.default.createElement(p.Layout,null,i.default.createElement(g.Main,{"aria-busy":!0},i.default.createElement(c.LoadingIndicatorPage,null)));var D,H,F=(D=I.data,H=j,(0,s.default)(D,H,{keys:[{threshold:s.default.rankings.WORD_STARTS_WITH,key:"attributes.name"},{threshold:s.default.rankings.WORD_STARTS_WITH,key:"attributes.description"}]})),z=N.plugins.map((function(e){return e.packageName}));return i.default.createElement(p.Layout,null,i.default.createElement(g.Main,null,i.default.createElement(o.Helmet,{title:e({id:"admin.pages.MarketPlacePage.helmet",defaultMessage:"Marketplace - Plugins"})}),i.default.createElement(p.HeaderLayout,{title:e({id:"admin.pages.MarketPlacePage.title",defaultMessage:"Marketplace"}),subtitle:e({id:"admin.pages.MarketPlacePage.subtitle",defaultMessage:"Get more out of Strapi"}),primaryAction:i.default.createElement(v.LinkButton,{startIcon:i.default.createElement(P.default,null),variant:"tertiary",href:"https://market.strapi.io/submit-plugin",onClick:function(){return t("didSubmitPlugin")}},e({id:"admin.pages.MarketPlacePage.submit.plugin.link",defaultMessage:"Submit your plugin"}))}),i.default.createElement(p.ContentLayout,null,i.default.createElement(y.Box,{width:"25%",paddingBottom:4},i.default.createElement(m.Searchbar,{name:"searchbar",onClear:function(){return _("")},value:j,onChange:function(e){return _(e.target.value)},clearLabel:e({id:"admin.pages.MarketPlacePage.search.clear",defaultMessage:"Clear the plugin search"}),placeholder:e({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search for a plugin"})},e({id:"admin.pages.MarketPlacePage.search.placeholder",defaultMessage:"Search for a plugin"}))),j.length>0&&!F.length?i.default.createElement(E.EmptyPluginSearch,{content:e({id:"admin.pages.MarketPlacePage.search.empty",defaultMessage:'No result for "{target}"'},{target:j})}):i.default.createElement(f.Grid,{gap:4},F.map((function(e){return i.default.createElement(f.GridItem,{col:4,s:6,xs:12,style:{height:"100%"},key:e.id},i.default.createElement(b.default,{plugin:e,installedPluginNames:z,useYarn:q.data.useYarn}))}))))))};t.MarketPlacePage=j;var _=function(){return i.default.createElement(c.CheckPagePermissions,{permissions:O.default.marketplace.main},i.default.createElement(j,null))};t.default=_},43092:(e,t,a)=>{"use strict";var r=a(99489);Object.defineProperty(t,"__esModule",{value:!0}),t.fetchAppInformation=void 0;var n=r(a(28129)),l=r(a(68357)),i=a(17888),u=function(){var e=(0,l.default)(n.default.mark((function e(){var t,a;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.axiosInstance.get("/admin/information");case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.fetchAppInformation=u},77016:(e,t,a)=>{"use strict";e.exports=a.p+"90f49a385afb000fb1d4.svg"}}]);