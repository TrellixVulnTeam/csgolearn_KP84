"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[892],{892:(t,e,n)=>{n.r(e),n.d(e,{default:()=>f});var o=n(600);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e){return i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=s(t);if(e){var r=s(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return l(this,n)}}function l(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return u(t)}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(s,React.Component);var e,n,r,l=a(s);function s(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s),(e=l.call(this,t)).handleClick=e.handleClick.bind(u(e)),e}return e=s,(n=[{key:"handleClick",value:function(){o(".list").is(":visible")?o(".list").removeClass("showitems"):o(".list").addClass("showitems")}},{key:"render",value:function(){var t=this;return React.createElement("div",{className:"navigation"},React.createElement("div",{onClick:this.handleClick,className:"icon"},"☰"),React.createElement("div",{className:"list"},React.createElement("a",{onClick:function(){t.props.handleNavClick("mainContent"),t.handleClick()},className:this.props.activeContent.mainContent},"Главная"),React.createElement("a",{onClick:function(){t.props.handleNavClick("throwContent"),t.handleClick()},className:this.props.activeContent.throwContent},"Раскидкa"),React.createElement("a",{onClick:function(){t.props.handleNavClick("settingContent"),t.handleClick()},className:this.props.activeContent.settingContent},"Настройки"),React.createElement("a",{onClick:function(){t.props.handleNavClick("updateContent"),t.handleClick()},className:this.props.activeContent.updateContent},"Обновления")))}}])&&c(e.prototype,n),r&&c(e,r),Object.defineProperty(e,"prototype",{writable:!1}),s}()}}]);