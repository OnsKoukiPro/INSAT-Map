System.register(["jimu-core","jimu-arcgis"],(function(e,t){var a={},i={};return{setters:[function(e){a.AbstractDataAction=e.AbstractDataAction,a.DataSourceStatus=e.DataSourceStatus,a.DataSourceTypes=e.DataSourceTypes,a.MutableStoreManager=e.MutableStoreManager,a.defaultMessages=e.defaultMessages,a.getAppStore=e.getAppStore,a.i18n=e.i18n,a.utils=e.utils},function(e){i.ADD_TO_MAP_DATA_ID_PREFIX=e.ADD_TO_MAP_DATA_ID_PREFIX,i.ActionType=e.ActionType,i.DataChangeType=e.DataChangeType,i.MapViewManager=e.MapViewManager,i.zoomToUtils=e.zoomToUtils}],execute:function(){e((()=>{"use strict";var e={26826:e=>{e.exports=i},48891:e=>{e.exports=a}},t={};function o(a){var i=t[a];if(void 0!==i)return i.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,o),n.exports}o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{o.r(n),o.d(n,{default:()=>i});var e=o(48891),t=o(26826),a=function(e,t,a,i){return new(a||(a=Promise))((function(o,n){function r(e){try{s(i.next(e))}catch(e){n(e)}}function u(e){try{s(i.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,u)}s((i=i.apply(e,t||[])).next())}))};class i extends e.AbstractDataAction{constructor(){super(...arguments),this._viewManager=t.MapViewManager.getInstance()}isSupported(t){var i,o;return a(this,void 0,void 0,(function*(){const a=null==t?void 0:t.dataSource,n=this._getActiveViewId(this.widgetId,(0,e.getAppStore)().getState().jimuMapViewsInfo),r=this._viewManager.getJimuMapViewById(n);return!(!a||a.getStatus()===e.DataSourceStatus.NotReady)&&(a.type!==e.DataSourceTypes.SceneLayer&&a.type!==e.DataSourceTypes.SceneService||"2d"!==(null===(i=null==r?void 0:r.view)||void 0===i?void 0:i.type))&&(null==a?void 0:a.supportSpatialInfo)&&(null==a?void 0:a.supportSpatialInfo())&&!!(null==a?void 0:a.createJSAPILayerByDataSource)&&!a.isInAppConfig()&&0===(null===(o=t.records)||void 0===o?void 0:o.length)}))}onExecute(i,o){var n,r;return a(this,void 0,void 0,(function*(){const a=this._getActiveViewId(this.widgetId,(0,e.getAppStore)().getState().jimuMapViewsInfo),o=(null===(n=e.MutableStoreManager.getInstance().getStateValue([this.widgetId]))||void 0===n?void 0:n.addToMapDatas)||{},u=e.i18n.getIntl(),s=i.name||"",d=u.formatMessage({id:"action_addedData",defaultMessage:e.defaultMessages.action_addedData},{label:s});o[`${t.ADD_TO_MAP_DATA_ID_PREFIX}dataAction_${e.utils.getUUID()}`]={mapWidgetId:this.widgetId,jimuMapViewId:a,dataSourceId:i.dataSource.id,type:t.ActionType.DataAction,dataChangeType:t.DataChangeType.Create,title:d},e.MutableStoreManager.getInstance().updateStateValue(this.widgetId,"addToMapDatas",o);const c=this._viewManager.getJimuMapViewById(a);return c&&(null===(r=i.dataSource)||void 0===r||r.createJSAPILayerByDataSource().then((e=>{t.zoomToUtils.zoomTo(null==c?void 0:c.view,e,null)}))),yield Promise.resolve(!0)}))}_getActiveViewId(e,t){let a=Object.keys(t||{}).find((a=>t[a].mapWidgetId===e&&t[a].isActive));return a||(a=Object.keys(t||{}).find((a=>t[a].mapWidgetId===e))),a}}})(),n})())}}}));