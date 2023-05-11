System.register(["jimu-core","jimu-ui/advanced/setting-components","jimu-ui","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/expression-builder","jimu-ui/advanced/rich-text-editor"],(function(e,t){var n={},o={},a={},l={},r={},i={};return{setters:[function(e){n.AllDataSourceTypes=e.AllDataSourceTypes,n.Immutable=e.Immutable,n.React=e.React,n.ReactRedux=e.ReactRedux,n.classNames=e.classNames,n.css=e.css,n.getAppStore=e.getAppStore,n.jsx=e.jsx,n.lodash=e.lodash},function(e){o.SettingRow=e.SettingRow,o.SettingSection=e.SettingSection},function(e){a.Button=e.Button,a.Switch=e.Switch,a.TextArea=e.TextArea,a.defaultMessages=e.defaultMessages,a.hooks=e.hooks,a.richTextUtils=e.richTextUtils},function(e){l.DataSourceSelector=e.DataSourceSelector},function(e){r.ExpressionInput=e.ExpressionInput,r.ExpressionInputType=e.ExpressionInputType},function(e){i.FormatType=e.FormatType,i.RichTextFormatKeys=e.RichTextFormatKeys,i.RichTextFormats=e.RichTextFormats,i.richTextEditorUtils=e.richTextEditorUtils,i.useEditorSelectionFormats=e.useEditorSelectionFormats}],execute:function(){e((()=>{var e={28716:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2a.5.5 0 0 0 0 1H7l-1.868 8.406a.488.488 0 0 0 .953.212L8 3h3.5a.5.5 0 0 0 0-1h-8Zm-1 11a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm6.64-3.86a.477.477 0 0 1 .674 0l1.686 1.686 1.686-1.686a.477.477 0 1 1 .674.674L12.174 11.5l1.686 1.686a.477.477 0 1 1-.674.674L11.5 12.174 9.814 13.86a.477.477 0 1 1-.674-.674l1.686-1.686L9.14 9.814a.477.477 0 0 1 0-.674Z" fill="#000"></path></svg>'},48891:e=>{"use strict";e.exports=n},30726:e=>{"use strict";e.exports=a},338:e=>{"use strict";e.exports=l},39342:e=>{"use strict";e.exports=r},65492:e=>{"use strict";e.exports=i},77756:e=>{"use strict";e.exports=o}},t={};function s(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,s),a.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var c={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(c),s.d(c,{default:()=>f});var e=s(48891),t=s(77756),n=s(30726),o=s(338);const a={wrap:"Wrap",verticalAlignment:"Vertical alignment"};var l=s(39342),r=s(28716),i=s.n(r);const u=t=>{const n=window.SVG,{className:o}=t,a=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}(t,["className"]),l=(0,e.classNames)("jimu-icon jimu-icon-component",o);return n?e.React.createElement(n,Object.assign({className:l,src:i()},a)):e.React.createElement("svg",Object.assign({className:l},a))};var p=s(65492);const d=e.css`
  > * {
    user-select: none;
  }
`,m=t=>{const{editor:o,onChange:a}=t,l=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}(t,["editor","onChange"]),[,r]=(0,p.useEditorSelectionFormats)(o,!0),i=null==o?void 0:o.isEnabled(),s=n.hooks.useTranslate(),c=e.React.useMemo((()=>i?r:(e=>{let t=e.getLength();return t=t>0?t-1:t,{index:0,length:t}})(o)),[i,r,o]);return(0,e.jsx)(n.Button,Object.assign({css:d},l,{icon:!0,type:"tertiary",size:"sm",onClick:()=>{const e=i?"user":"api",t={type:p.FormatType.INLINE,key:p.RichTextFormatKeys.Clear,value:null};p.richTextEditorUtils.formatText(o,c,t,e),null==a||a(null==o?void 0:o.root.innerHTML)},title:s("clearAllFormats"),"aria-label":s("clearAllFormats")}),(0,e.jsx)(u,null))};const g=t=>{const{editor:n}=t,o=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n}(t,["editor"]),[a,l]=(0,p.useEditorSelectionFormats)(n,!0),r=e.React.useMemo((()=>{var t;let n=a;return null!=(null===(t=null==n?void 0:n.link)||void 0===t?void 0:t.link)&&(n=e.lodash.assign({},n,{link:n.link.link})),n}),[a]);return e.React.createElement(p.RichTextFormats,Object.assign({editor:n,formats:r,selection:l},o))},S=(0,e.Immutable)([e.AllDataSourceTypes.FeatureLayer,e.AllDataSourceTypes.SceneLayer]),v=(0,e.Immutable)([l.ExpressionInputType.Static,l.ExpressionInputType.Attribute,l.ExpressionInputType.Statistics,l.ExpressionInputType.Expression]),x=(0,e.Immutable)([]),f=r=>{var i,s,c,u,p,d,f,y;const{id:b,intl:h,config:E,useDataSources:w,useDataSourcesEnabled:R,onSettingChange:T}=r,O="Web Experience Template"===(null===(s=null===(i=(0,e.getAppStore)().getState().appStateInBuilder)||void 0===i?void 0:i.appInfo)||void 0===s?void 0:s.type),j=null===(u=null===(c=null==E?void 0:E.style)||void 0===c?void 0:c.wrap)||void 0===u||u,I=null==E?void 0:E.text,M=null==E?void 0:E.placeholder,F=e.React.useMemo((()=>{var e;return null!==(e=n.richTextUtils.getHTMLTextContent(M))&&void 0!==e?e:""}),[M]),D=null==E?void 0:E.tooltip,P=e.ReactRedux.useSelector((e=>e.appStateInBuilder)),A=null===(d=null===(p=null==P?void 0:P.widgetsMutableStateVersion)||void 0===p?void 0:p[b])||void 0===d?void 0:d.editor,k=null===(y=null===(f=null==P?void 0:P.widgetsRuntimeInfo)||void 0===f?void 0:f[b])||void 0===y?void 0:y.isInlineEditing,C=R&&(null==w?void 0:w.length)>0,[L,N]=e.React.useState(null),[U,B]=e.React.useState(!1);e.React.useEffect((()=>{var e;const t=window._appWindow._mutableStoreManager,n=null!==(e=null==t?void 0:t.getStateValue([b,"editor"]))&&void 0!==e?e:null;N(n)}),[A,b]);const V=n.hooks.useTranslate(a,n.defaultMessages),_=e=>{const t=n.richTextUtils.isBlankRichText(I)&&!!M,o=!k&&t?"placeholder":"text";T({id:b,config:E.set(o,e)})},H=C?v:(0,e.Immutable)([l.ExpressionInputType.Static]);return e.React.createElement("div",{className:"widget-setting-text jimu-widget-setting"},e.React.createElement(t.SettingSection,null,e.React.createElement(t.SettingRow,null,e.React.createElement(o.DataSourceSelector,{isMultiple:!0,types:S,useDataSources:w,useDataSourcesEnabled:R,onToggleUseDataEnabled:()=>{T({id:b,useDataSourcesEnabled:!R})},onChange:e=>{null!=e&&T({id:b,useDataSources:e})},widgetId:b}))),e.React.createElement(t.SettingSection,null,e.React.createElement(t.SettingRow,{flow:"no-wrap",label:V("wrap")},e.React.createElement(n.Switch,{checked:j,onChange:()=>{T({id:b,config:E.setIn(["style","wrap"],!j)})},"aria-label":V("wrap")})),e.React.createElement(t.SettingRow,{label:V("tooltip")}),e.React.createElement(t.SettingRow,null,e.React.createElement("div",{className:"w-100"},e.React.createElement(l.ExpressionInput,{"aria-label":V("tooltip"),autoHide:!0,useDataSources:C?w:x,onChange:e=>{null!=e&&(T({id:b,config:E.set("tooltip",e)}),B(!1))},openExpPopup:()=>B(!0),expression:"object"==typeof D?D:null,isExpPopupOpen:U,closeExpPopup:()=>B(!1),types:H,widgetId:b}))),O&&e.React.createElement(t.SettingRow,{flow:"wrap",label:V("placeholder")},e.React.createElement(n.TextArea,{"aria-label":V("placeholder"),defaultValue:F,onAcceptValue:e=>{e=e.replace(/\n/gm,"");const t=((e,t)=>{const o=n.richTextUtils.getHTMLTextContent(e);return e.replace(null==o?void 0:o.trim(),t)})(M,e);T({id:b,config:E.set("placeholder",t)})}}))),null!=L&&e.React.createElement(t.SettingSection,null,e.React.createElement(t.SettingRow,{flow:"no-wrap",label:h.formatMessage({id:"textFormat",defaultMessage:n.defaultMessages.textFormat})},e.React.createElement(m,{editor:L,onChange:_})),e.React.createElement(t.SettingRow,null,e.React.createElement(g,{editor:L,useDataSources:w,widgetId:b,onChange:_}))))}})(),c})())}}}));