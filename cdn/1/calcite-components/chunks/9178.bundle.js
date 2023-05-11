/*! For license information please see 9178.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[9178],{9178:(e,t,i)=>{i.r(t),i.d(t,{calcite_input:()=>f});var n=i(6553),a=i(4479),s=i(4967),r=i(8908),o=i(6296),l=i(4094),c=i(3201),u=i(8337),d=i(900),h=i(5056),m=i(8020),p=i(8363);const b="number-button-item--horizontal",g="number-button-item",v={tel:"phone",password:"lock",email:"email-address",date:"calendar",time:"clock",search:"search"},f=class{constructor(e){(0,n.r)(this,e),this.calciteInternalInputFocus=(0,n.c)(this,"calciteInternalInputFocus",6),this.calciteInternalInputBlur=(0,n.c)(this,"calciteInternalInputBlur",6),this.calciteInputInput=(0,n.c)(this,"calciteInputInput",7),this.calciteInputChange=(0,n.c)(this,"calciteInputChange",6),this.childElType="input",this.previousValueOrigin="initial",this.mutationObserver=(0,h.c)("mutation",(()=>this.setDisabledAction())),this.userChangedValue=!1,this.keyDownHandler=e=>{this.readOnly||this.disabled||(this.isClearable&&"Escape"===e.key&&(this.clearInputValue(e),e.preventDefault()),"Enter"!==e.key||e.defaultPrevented||(0,s.s)(this)&&e.preventDefault())},this.clearInputValue=e=>{this.setValue({committing:!0,nativeEvent:e,origin:"user",value:""})},this.emitChangeIfUserModified=()=>{"user"===this.previousValueOrigin&&this.value!==this.previousEmittedValue&&(this.calciteInputChange.emit(),this.setPreviousEmittedValue(this.value))},this.inputBlurHandler=()=>{this.calciteInternalInputBlur.emit(),this.emitChangeIfUserModified()},this.clickHandler=e=>{const t=(0,a.g)(this.el,"action");e.target!==t&&this.setFocus()},this.inputFocusHandler=()=>{this.calciteInternalInputFocus.emit()},this.inputInputHandler=e=>{this.disabled||this.readOnly||this.setValue({nativeEvent:e,origin:"user",value:e.target.value})},this.inputKeyDownHandler=e=>{this.disabled||this.readOnly||"Enter"===e.key&&this.emitChangeIfUserModified()},this.inputNumberInputHandler=e=>{if(this.disabled||this.readOnly)return;const t=e.target.value;u.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const i=u.n.delocalize(t);"insertFromPaste"===e.inputType?((0,u.i)(i)||e.preventDefault(),this.setValue({nativeEvent:e,origin:"user",value:(0,u.p)(i)}),this.childNumberEl.value=this.localizedValue):this.setValue({nativeEvent:e,origin:"user",value:i})},this.inputNumberKeyDownHandler=e=>{if("number"!==this.type||this.disabled||this.readOnly)return;if("ArrowUp"===e.key)return e.preventDefault(),void this.nudgeNumberValue("up",e);if("ArrowDown"===e.key)return void this.nudgeNumberValue("down",e);const t=[...o.n,"ArrowLeft","ArrowRight","Backspace","Delete","Enter","Escape","Tab"];if(e.altKey||e.ctrlKey||e.metaKey)return;const i=e.shiftKey&&"Tab"===e.key;if(!t.includes(e.key)||e.shiftKey&&!i){if(u.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},e.key===u.n.decimal){if(!this.value&&!this.childNumberEl.value)return;if(this.value&&-1===this.childNumberEl.value.indexOf(u.n.decimal))return}if(/[eE]/.test(e.key)){if(!this.value&&!this.childNumberEl.value)return;if(this.value&&!/[eE]/.test(this.childNumberEl.value))return}if("-"===e.key){if(!this.value&&!this.childNumberEl.value)return;if(this.value&&this.childNumberEl.value.split("-").length<=2)return}e.preventDefault()}else"Enter"===e.key&&this.emitChangeIfUserModified()},this.nudgeNumberValue=(e,t)=>{if(t instanceof KeyboardEvent&&t.repeat||"number"!==this.type)return;const i=this.maxString?parseFloat(this.maxString):null,n=this.minString?parseFloat(this.minString):null;this.incrementOrDecrementNumberValue(e,i,n,t),this.nudgeNumberValueIntervalId&&window.clearInterval(this.nudgeNumberValueIntervalId);let a=!0;this.nudgeNumberValueIntervalId=window.setInterval((()=>{a?a=!1:this.incrementOrDecrementNumberValue(e,i,n,t)}),150)},this.numberButtonPointerUpAndOutHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)},this.numberButtonPointerDownHandler=e=>{if(!(0,a.i)(e))return;e.preventDefault();const t=e.target.dataset.adjustment;this.disabled||this.nudgeNumberValue(t,e)},this.hiddenInputChangeHandler=e=>{e.target.name===this.name&&this.setValue({value:e.target.value,origin:"direct"}),e.stopPropagation()},this.setChildElRef=e=>{this.childEl=e},this.setChildNumberElRef=e=>{this.childNumberEl=e},this.setInputValue=e=>{("text"!==this.type||this.childEl)&&("number"!==this.type||this.childNumberEl)&&(this[`child${"number"===this.type?"Number":""}El`].value=e)},this.setPreviousEmittedValue=e=>{this.previousEmittedValue=this.normalizeValue(e)},this.setPreviousValue=e=>{this.previousValue=this.normalizeValue(e)},this.setValue=({committing:e=!1,nativeEvent:t,origin:i,previousValue:n,value:a})=>{if(this.setPreviousValue(n??this.value),this.previousValueOrigin=i,"number"===this.type){u.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator,signDisplay:"never"};const e=(0,u.s)(this.numberingSystem&&"latn"!==this.numberingSystem||"latn"!==u.a?u.n.delocalize(a):a),t=a&&!e?(0,u.i)(this.previousValue)?this.previousValue:"":e,n=u.n.localize(t);this.localizedValue=n,this.userChangedValue="user"===i&&this.value!==t,this.value=["-","."].includes(t)?"":t}else this.userChangedValue="user"===i&&this.value!==a,this.value=a;"direct"===i&&(this.setInputValue(a),this.previousEmittedValue=a),t&&(this.calciteInputInput.emit().defaultPrevented?(this.value=this.previousValue,this.localizedValue="number"===this.type?u.n.localize(this.previousValue):this.previousValue):e&&this.emitChangeIfUserModified())},this.inputKeyUpHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)},this.alignment="start",this.autofocus=!1,this.clearable=!1,this.disabled=!1,this.groupSeparator=!1,this.hidden=!1,this.icon=void 0,this.iconFlipRtl=!1,this.label=void 0,this.loading=!1,this.numberingSystem=void 0,this.localeFormat=!1,this.max=void 0,this.min=void 0,this.maxLength=void 0,this.minLength=void 0,this.name=void 0,this.numberButtonType="vertical",this.placeholder=void 0,this.prefixText=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.step=void 0,this.autocomplete=void 0,this.pattern=void 0,this.accept=void 0,this.multiple=!1,this.inputMode="text",this.enterKeyHint=void 0,this.suffixText=void 0,this.editingEnabled=!1,this.type="text",this.value="",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.localizedValue=void 0,this.slottedActionElDisabledInternally=!1}disabledWatcher(){this.setDisabledAction()}maxWatcher(){this.maxString=this.max?.toString()||null}minWatcher(){this.minString=this.min?.toString()||null}onMessagesChange(){}valueWatcher(e,t){this.userChangedValue||(this.setValue({origin:"direct",previousValue:t,value:null==e||""==e?"":"number"===this.type?(0,u.i)(e)?e:this.previousValue||"":e}),this.warnAboutInvalidNumberValue(e)),this.userChangedValue=!1}updateRequestedIcon(){this.requestedIcon=(0,a.d)(v,this.icon,this.type)}get isClearable(){return!this.isTextarea&&(this.clearable||"search"===this.type)&&this.value.length>0}get isTextarea(){return"textarea"===this.childElType}effectiveLocaleChange(){(0,p.u)(this,this.effectiveLocale)}connectedCallback(){(0,u.c)(this),(0,p.c)(this),this.scale=(0,a.h)(this.el,"scale",this.scale),this.status=(0,a.h)(this.el,"status",this.status),this.inlineEditableEl=this.el.closest("calcite-inline-editable"),this.inlineEditableEl&&(this.editingEnabled=this.inlineEditableEl.editingEnabled||!1),(0,l.c)(this),(0,s.c)(this),this.setPreviousEmittedValue(this.value),this.setPreviousValue(this.value),"number"===this.type&&(this.warnAboutInvalidNumberValue(this.value),this.setValue({origin:"connected",value:(0,u.i)(this.value)?this.value:""})),this.mutationObserver?.observe(this.el,{childList:!0}),this.setDisabledAction(),this.el.addEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}disconnectedCallback(){(0,l.d)(this),(0,s.d)(this),(0,u.d)(this),(0,p.d)(this),this.mutationObserver?.disconnect(),this.el.removeEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}async componentWillLoad(){(0,c.s)(this),this.childElType="textarea"===this.type?"textarea":"input",this.maxString=this.max?.toString(),this.minString=this.min?.toString(),this.requestedIcon=(0,a.d)(v,this.icon,this.type),await(0,p.s)(this)}componentDidLoad(){(0,c.a)(this)}componentShouldUpdate(e,t,i){return!("number"===this.type&&"value"===i&&e&&!(0,u.i)(e)&&(this.setValue({origin:"reset",value:t}),1))}componentDidRender(){(0,r.u)(this)}async setFocus(){await(0,c.c)(this),"number"===this.type?this.childNumberEl?.focus():this.childEl?.focus()}async selectText(){"number"===this.type?this.childNumberEl?.select():this.childEl?.select()}async internalSyncChildElValue(){"number"===this.type?this.childNumberEl.value=this.value:this.childEl.value=this.value}onLabelClick(){this.setFocus()}incrementOrDecrementNumberValue(e,t,i,n){const{value:a}=this,s="any"===this.step?1:Math.abs(this.step||1),r=a&&""!==a?parseFloat(a):0,o=r+s*("up"===e?1:-1),l="number"==typeof i&&!isNaN(i)&&o<i?i:"number"==typeof t&&!isNaN(t)&&o>t?t:o,c=(0,d.d)(r),u=(0,d.d)(s);this.setValue({committing:!0,nativeEvent:n,origin:"user",value:l.toFixed(Math.max(c,u))})}onFormReset(){this.setValue({origin:"reset",value:this.defaultValue})}syncHiddenFormInput(e){const{type:t}=this;e.type=t,"number"===t?(e.min=this.min?.toString(10)??"",e.max=this.max?.toString(10)??""):"text"===t&&(null!=this.minLength&&(e.minLength=this.minLength),null!=this.maxLength&&(e.maxLength=this.maxLength))}setDisabledAction(){const e=(0,a.g)(this.el,"action");e&&(this.disabled?(null==e.getAttribute("disabled")&&(this.slottedActionElDisabledInternally=!0),e.setAttribute("disabled","")):this.slottedActionElDisabledInternally&&(e.removeAttribute("disabled"),this.slottedActionElDisabledInternally=!1))}normalizeValue(e){return"number"===this.type?(0,u.i)(e)?e:"":e}warnAboutInvalidNumberValue(e){"number"===this.type&&e&&!(0,u.i)(e)&&console.warn(`The specified value "${e}" cannot be parsed, or is out of range.`)}render(){const e=(0,a.b)(this.el),t=(0,n.h)("div",{class:"loader"},(0,n.h)("calcite-progress",{label:this.messages.loading,type:"indeterminate"})),i=(0,n.h)("button",{"aria-label":this.messages.clear,class:"clear-button",disabled:this.disabled||this.readOnly,onClick:this.clearInputValue,tabIndex:-1,type:"button"},(0,n.h)("calcite-icon",{icon:"x",scale:"l"===this.scale?"m":"s"})),r=(0,n.h)("calcite-icon",{class:"icon",flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:"l"===this.scale?"m":"s"}),o="horizontal"===this.numberButtonType,c=(0,n.h)("button",{"aria-hidden":"true",class:{[g]:!0,[b]:o},"data-adjustment":"up",disabled:this.disabled||this.readOnly,onPointerDown:this.numberButtonPointerDownHandler,onPointerOut:this.numberButtonPointerUpAndOutHandler,onPointerUp:this.numberButtonPointerUpAndOutHandler,tabIndex:-1,type:"button"},(0,n.h)("calcite-icon",{icon:"chevron-up",scale:"l"===this.scale?"m":"s"})),u=(0,n.h)("button",{"aria-hidden":"true",class:{[g]:!0,[b]:o},"data-adjustment":"down",disabled:this.disabled||this.readOnly,onPointerDown:this.numberButtonPointerDownHandler,onPointerOut:this.numberButtonPointerUpAndOutHandler,onPointerUp:this.numberButtonPointerUpAndOutHandler,tabIndex:-1,type:"button"},(0,n.h)("calcite-icon",{icon:"chevron-down",scale:"l"===this.scale?"m":"s"})),d=(0,n.h)("div",{class:"number-button-wrapper"},c,u),h=(0,n.h)("div",{class:"prefix"},this.prefixText),p=(0,n.h)("div",{class:"suffix"},this.suffixText),v="number"===this.type?(0,n.h)("input",{accept:this.accept,"aria-label":(0,l.g)(this),autocomplete:this.autocomplete,autofocus:!!this.autofocus||null,defaultValue:this.defaultValue,disabled:!!this.disabled||null,enterKeyHint:this.enterKeyHint,inputMode:this.inputMode,key:"localized-input",maxLength:this.maxLength,minLength:this.minLength,multiple:this.multiple,name:void 0,onBlur:this.inputBlurHandler,onFocus:this.inputFocusHandler,onInput:this.inputNumberInputHandler,onKeyDown:this.inputNumberKeyDownHandler,onKeyUp:this.inputKeyUpHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildNumberElRef,type:"text",value:this.localizedValue}):null,f="number"!==this.type?[(0,n.h)(this.childElType,{accept:this.accept,"aria-label":(0,l.g)(this),autocomplete:this.autocomplete,autofocus:!!this.autofocus||null,class:{"editing-enabled":this.editingEnabled,"inline-child":!!this.inlineEditableEl},defaultValue:this.defaultValue,disabled:!!this.disabled||null,enterKeyHint:this.enterKeyHint,inputMode:this.inputMode,max:this.maxString,maxLength:this.maxLength,min:this.minString,minLength:this.minLength,multiple:this.multiple,name:this.name,onBlur:this.inputBlurHandler,onFocus:this.inputFocusHandler,onInput:this.inputInputHandler,onKeyDown:this.inputKeyDownHandler,onKeyUp:this.inputKeyUpHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildElRef,required:!!this.required||null,step:this.step,tabIndex:this.disabled||this.inlineEditableEl&&!this.editingEnabled?-1:null,type:this.type,value:this.value}),this.isTextarea?(0,n.h)("div",{class:"resize-icon-wrapper"},(0,n.h)("calcite-icon",{icon:"chevron-down",scale:"l"===this.scale?"m":"s"})):null]:null;return(0,n.h)(n.H,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},(0,n.h)("div",{class:{wrapper:!0,[m.C.rtl]:"rtl"===e}},"number"!==this.type||"horizontal"!==this.numberButtonType||this.readOnly?null:u,this.prefixText?h:null,(0,n.h)("div",{class:"element-wrapper"},v,f,this.isClearable?i:null,this.requestedIcon?r:null,this.loading?t:null),(0,n.h)("div",{class:"action-wrapper"},(0,n.h)("slot",{name:"action"})),"number"!==this.type||"vertical"!==this.numberButtonType||this.readOnly?null:d,this.suffixText?p:null,"number"!==this.type||"horizontal"!==this.numberButtonType||this.readOnly?null:c,(0,n.h)(s.H,{component:this})))}static get assetsDirs(){return["assets"]}get el(){return(0,n.g)(this)}static get watchers(){return{disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],type:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}};f.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) textarea{block-size:1.5rem;min-block-size:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) input[type=file]{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=s]) textarea{block-size:auto;padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) textarea{min-block-size:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) input[type=file]{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=m]) textarea{block-size:auto;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) textarea{min-block-size:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) input[type=file]{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([scale=l]) textarea{block-size:auto;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([disabled]) textarea{resize:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host textarea,:host input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}:host input[type=search]::-webkit-search-decoration{-webkit-appearance:none}:host input,:host textarea{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}:host input::placeholder,:host input:-ms-input-placeholder,:host input::-ms-input-placeholder,:host textarea::placeholder,:host textarea:-ms-input-placeholder,:host textarea::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}:host input:focus,:host textarea:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}:host input[readonly],:host textarea[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host input[readonly]:focus,:host textarea[readonly]:focus{color:var(--calcite-ui-text-1)}:host calcite-icon{color:var(--calcite-ui-text-3)}:host textarea,:host input{outline-color:transparent}:host textarea:focus,:host input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:-2px}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.icon,.resize-icon-wrapper{z-index:1}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:start}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:end}:host input[type=number]{-moz-appearance:textfield}:host input[type=number]::-webkit-inner-spin-button,:host input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0px}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-ui-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-ui-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-ui-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-ui-text-1)}.number-button-item:active{background-color:var(--calcite-ui-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host input::-webkit-calendar-picker-indicator{display:none}:host input[type=date]::-webkit-input-placeholder{visibility:hidden !important}:host textarea::-webkit-resizer{position:absolute;inset-block-end:0px;box-sizing:border-box;padding-block:0px;padding-inline:0.25rem;inset-inline-end:0}.resize-icon-wrapper{inset-block-end:2px;inset-inline-end:2px;pointer-events:none;position:absolute;block-size:0.75rem;inline-size:0.75rem;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3)}.resize-icon-wrapper calcite-icon{inset-block-end:0.25rem;inset-inline-end:0.25rem;transform:rotate(-45deg)}.calcite--rtl .resize-icon-wrapper calcite-icon{transform:rotate(45deg)}:host([type=color]) input{padding:0.25rem}:host([type=file]) input{cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);text-align:center}:host([type=file][scale=s]) input{padding-block:1px;padding-inline:0.5rem}:host([type=file][scale=m]) input{padding-block:0.25rem;padding-inline:0.75rem}:host([type=file][scale=l]) input{padding-block:0.5rem;padding-inline:1rem}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}:host .inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host .inline-child .editing-enabled{background-color:inherit}:host .inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"},4967:(e,t,i)=>{i.d(t,{H:()=>f,a:()=>p,c:()=>d,d:()=>m,r:()=>u,s:()=>c});var n=i(4479),a=i(6553);const s="hidden-form-input";function r(e){return"checked"in e}const o=new WeakMap,l=new WeakSet;function c(e){const{formEl:t}=e;return!!t&&("requestSubmit"in t?t.requestSubmit():t.submit(),!0)}function u(e){e.formEl?.reset()}function d(e){const{el:t,value:i}=e,a=(0,n.c)(t,"form");if(!a||function(e,t){const i="calciteInternalFormComponentRegister";let n=!1;return e.addEventListener(i,(e=>{n=e.composedPath().some((e=>l.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(i,{bubbles:!0,composed:!0})),n}(a,t))return;e.formEl=a,e.defaultValue=i,r(e)&&(e.defaultChecked=e.checked);const s=(e.onFormReset||h).bind(e);a.addEventListener("reset",s),o.set(e.el,s),l.add(t)}function h(){r(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function m(e){const{el:t,formEl:i}=e;if(!i)return;const n=o.get(t);i.removeEventListener("reset",n),o.delete(t),e.formEl=null,l.delete(t)}function p(e,t){e.defaultValue=t}const b=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},g=e=>e.removeEventListener("change",b);function v(e,t,i){const{defaultValue:n,disabled:a,name:s,required:o}=e;t.defaultValue=n,t.disabled=a,t.name=s,t.required=o,t.tabIndex=-1,r(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?i||"on":""):t.value=i||"",e.syncHiddenFormInput?.(t)}const f=({component:e})=>(function(e){const{el:t,formEl:i,name:n,value:a}=e,{ownerDocument:r}=t,o=t.querySelectorAll(`input[slot="${s}"]`);if(!i||!n)return void o.forEach((e=>{g(e),e.remove()}));const l=Array.isArray(a)?a:[a],c=[],u=new Set;let d;o.forEach((t=>{const i=l.find((e=>e==t.value));null!=i?(u.add(i),v(e,t,i)):c.push(t)})),l.forEach((t=>{if(u.has(t))return;let i=c.pop();i||(i=r.createElement("input"),i.slot=s),d||(d=r.createDocumentFragment()),d.append(i),i.addEventListener("change",b),v(e,i,t)})),d&&t.append(d),c.forEach((e=>{g(e),e.remove()}))}(e),(0,a.h)("slot",{name:s}))},8908:(e,t,i)=>{function n(){}function a(e,t=!1){if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void(e.el.click=n);e.el.click=HTMLElement.prototype.click,"function"==typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}i.d(t,{u:()=>a})},6296:(e,t,i)=>{function n(e){return"Enter"===e||" "===e}i.d(t,{i:()=>n,n:()=>a});const a=["0","1","2","3","4","5","6","7","8","9"]},4094:(e,t,i)=>{i.d(t,{a:()=>r,c:()=>h,d:()=>m,g:()=>p,l:()=>s});var n=i(4479);const a="calciteInternalLabelClick",s="calciteInternalLabelConnected",r="calciteInternaLabelDisconnected",o="calcite-label",l=new WeakMap,c=new WeakMap,u=new WeakMap,d=new Set;function h(e){const t=(e=>{const{id:t}=e,i=t&&(0,n.q)(e,{selector:`${o}[for="${t}"]`});if(i)return i;const a=(0,n.c)(e,o);return!a||function(e,t){let i;const n="custom-element-ancestor-check",a=n=>{n.stopImmediatePropagation();const a=n.composedPath();i=a.slice(a.indexOf(t),a.indexOf(e))};return e.addEventListener(n,a,{once:!0}),t.dispatchEvent(new CustomEvent(n,{composed:!0,bubbles:!0})),e.removeEventListener(n,a),i.filter((i=>i!==t&&i!==e)).filter((e=>e.tagName?.includes("-"))).length>0}(a,e)?null:a})(e.el);if(l.has(t)||!t&&d.has(e))return;const i=v.bind(e);if(t){e.labelEl=t;const n=b.bind(e);l.set(e.labelEl,n),e.labelEl.addEventListener(a,n),d.delete(e),document.removeEventListener(s,c.get(e)),u.set(e,i),document.addEventListener(r,i)}else d.has(e)||(i(),document.removeEventListener(r,u.get(e)))}function m(e){if(d.delete(e),document.removeEventListener(s,c.get(e)),document.removeEventListener(r,u.get(e)),c.delete(e),u.delete(e),!e.labelEl)return;const t=l.get(e.labelEl);e.labelEl.removeEventListener(a,t),l.delete(e.labelEl)}function p(e){return e.label||e.labelEl?.textContent?.trim()||""}function b(e){this.disabled||this.el.contains(e.detail.sourceEvent.target)||this.onLabelClick(e)}function g(){d.has(this)&&h(this)}function v(){d.add(this);const e=c.get(this)||g.bind(this);c.set(this,e),document.addEventListener(s,e)}},3201:(e,t,i)=>{i.d(t,{a:()=>r,c:()=>o,s:()=>s});const n=new WeakMap,a=new WeakMap;function s(e){a.set(e,new Promise((t=>n.set(e,t))))}function r(e){n.get(e)()}function o(e){return a.get(e)}},8337:(e,t,i)=>{i.d(t,{a:()=>E,b:()=>I,c:()=>C,d:()=>S,g:()=>z,i:()=>c,n:()=>D,p:()=>u,s:()=>b});var n=i(4479),a=i(6296),s=i(5056);const r=new RegExp("-","g"),o=new RegExp("\\.?0+$");class l{constructor(e){if(this.add=e=>l.fromBigInt(this.value+new l(e).value),this.subtract=e=>l.fromBigInt(this.value-new l(e).value),this.multiply=e=>l._divRound(this.value*new l(e).value,l.SHIFT),this.divide=e=>l._divRound(this.value*l.SHIFT,new l(e).value),e instanceof l)return e;const[t,i]=String(e).split(".").concat("");this.value=BigInt(t+i.padEnd(l.DECIMALS,"0").slice(0,l.DECIMALS))+BigInt(l.ROUNDED&&i[l.DECIMALS]>="5"),this.isNegative="-"===e.charAt(0)}getIntegersAndDecimals(){const e=this.value.toString().replace(r,"").padStart(l.DECIMALS+1,"0");return{integers:e.slice(0,-l.DECIMALS),decimals:e.slice(-l.DECIMALS).replace(o,"")}}toString(){const{integers:e,decimals:t}=this.getIntegersAndDecimals();return`${this.isNegative?"-":""}${e}${t.length?"."+t:""}`}formatToParts(e){const{integers:t,decimals:i}=this.getIntegersAndDecimals(),n=e.numberFormatter.formatToParts(BigInt(t));return this.isNegative&&n.unshift({type:"minusSign",value:e.minusSign}),i.length&&(n.push({type:"decimal",value:e.decimal}),i.split("").forEach((e=>n.push({type:"fraction",value:e})))),n}format(e){const{integers:t,decimals:i}=this.getIntegersAndDecimals();return`${this.isNegative?e.minusSign:""}${e.numberFormatter.format(BigInt(t))}${i.length?`${e.decimal}${i.split("").map((t=>e.numberFormatter.format(Number(t)))).join("")}`:""}`}}function c(e){return!(!e||isNaN(Number(e)))}function u(e){return e&&(t=e,a.n.some((e=>t.includes(e))))?g(e,(e=>{let t=!1;const i=e.split("").filter(((e,i)=>e.match(/\./g)&&!t?(t=!0,!0):!(!e.match(/\-/g)||0!==i)||a.n.includes(e))).reduce(((e,t)=>e+t));return c(i)?new l(i).toString():""})):"";var t}l.DECIMALS=100,l.ROUNDED=!0,l.SHIFT=BigInt("1"+"0".repeat(l.DECIMALS)),l._divRound=(e,t)=>l.fromBigInt(e/t+(l.ROUNDED?e*BigInt(2)/t%BigInt(2):BigInt(0))),l.fromBigInt=e=>Object.assign(Object.create(l.prototype),{value:e});const d=/^([-0])0+(?=\d)/,h=/(?!^\.)\.$/,m=/(?!^-)-/g,p=/^-\b0\b\.?0*$/,b=e=>g(e,(e=>{const t=e.replace(m,"").replace(h,"").replace(d,"$1");return c(t)?p.test(t)?t:new l(t).toString():e}));function g(e,t){if(!e)return e;const i=e.toLowerCase().indexOf("e")+1;return i?e.replace(/[eE]*$/g,"").substring(0,i).concat(e.slice(i).replace(/[eE]/g,"")).split(/[eE]/).map(((e,i)=>t(1===i?e.replace(/\./g,""):e))).join("e").replace(/^e/,"1e"):t(e)}const v="en",f=["ar","bg","bs","ca","cs","da","de","el",v,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],y=["ar","bg","bs","ca","cs","da","de","de-CH","el",v,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],x=["arab","arabext","bali","beng","deva","fullwide","gujr","guru","hanidec","khmr","knda","laoo","latn","limb","mlym","mong","mymr","orya","tamldec","telu","thai","tibt"],w=e=>x.includes(e),k=(new Intl.NumberFormat).resolvedOptions().numberingSystem,E="arab"!==k&&w(k)?k:"latn",I=e=>w(e)?e:E;function z(e,t="cldr"){const i="cldr"===t?y:f;return e?i.includes(e)?e:"nb"===(e=e.toLowerCase())?"no":"t9n"===t&&"pt"===e?"pt-BR":(e.includes("-")&&(e=e.replace(/(\w+)-(\w+)/,((e,t,i)=>`${t}-${i.toUpperCase()}`)),i.includes(e)||(e=e.split("-")[0])),"zh"===e?"zh-CN":i.includes(e)?e:(console.warn(`Translations for the "${e}" locale are not available and will fall back to the default, English (en).`),v)):v}const V=new Set;function C(e){!function(e){e.effectiveLocale=function(e){return e.el.lang||(0,n.c)(e.el,"[lang]")?.lang||document.documentElement.lang||v}(e)}(e),0===V.size&&O?.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0}),V.add(e)}function S(e){V.delete(e),0===V.size&&O.disconnect()}const O=(0,s.c)("mutation",(e=>{e.forEach((e=>{const t=e.target;V.forEach((e=>{if(!(0,n.a)(t,e.el))return;const i=(0,n.c)(e.el,"[lang]");if(!i)return void(e.effectiveLocale=v);const a=i.lang;e.effectiveLocale=i.hasAttribute("lang")&&""===a?v:a}))}))})),D=new class{constructor(){this.delocalize=e=>this._numberFormatOptions?g(e,(e=>e.trim().replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex))):e,this.localize=e=>this._numberFormatOptions?g(e,(e=>c(e.trim())?new l(e.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):e)):e}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(e){if(e.locale=z(e?.locale),e.numberingSystem=I(e?.numberingSystem),!this._numberFormatOptions&&e.locale===v&&e.numberingSystem===E&&2===Object.keys(e).length||JSON.stringify(this._numberFormatOptions)===JSON.stringify(e))return;this._numberFormatOptions=e,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const t=new Map(this._digits.map(((e,t)=>[e,t]))),i=new Intl.NumberFormat(this._numberFormatOptions.locale).formatToParts(-12345678.9);this._actualGroup=i.find((e=>"group"===e.type)).value,this._group=0===this._actualGroup.trim().length?" ":this._actualGroup,this._decimal=i.find((e=>"decimal"===e.type)).value,this._minusSign=i.find((e=>"minusSign"===e.type)).value,this._getDigitIndex=e=>t.get(e)}}},900:(e,t,i)=>{i.d(t,{c:()=>n,d:()=>a});const n=(e,t,i)=>Math.max(t,Math.min(e,i)),a=e=>{const t=(""+e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}},5056:(e,t,i)=>{function n(e,t,i){const n=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new n(t,i)}i.d(t,{c:()=>n})},8363:(e,t,i)=>{i.d(t,{c:()=>d,d:()=>h,s:()=>l,u:()=>u});var n=i(6553),a=i(8337);const s={};function r(){throw new Error("could not fetch component message bundle")}function o(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function l(e){e.defaultMessages=await c(e,e.effectiveLocale),o(e)}async function c(e,t){const{el:i}=e,o=i.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const i=`${t}_${e}`;return s[i]||(s[i]=fetch((0,n.a)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||r(),e.json()))).catch((()=>r()))),s[i]}((0,a.g)(t,"t9n"),o)}async function u(e,t){e.defaultMessages=await c(e,t),o(e)}function d(e){e.onMessagesChange=m}function h(e){e.onMessagesChange=void 0}function m(){o(this)}}}]);