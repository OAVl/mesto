(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._formElement=n,this._inputList=this._formElement.querySelectorAll(this._config.inputSelector),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector),this._inputErrorClass=this._formElement.querySelector(this._config.inputErrorClass)}var n,r;return n=t,(r=[{key:"_handleFieldValidation",value:function(e,t){this._element=e.target;var n=this._formElement.querySelector("#".concat(this._element.id,"-error"));this._element.setCustomValidity(""),this._element.classList.toggle(t,!this._element.validity.valid),n.textContent=this._element.validationMessage}},{key:"_setEventListener",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(t){e._handleFieldValidation(t,e._inputErrorClass)}))})),this._formElement.addEventListener("input",(function(){e._handleFormInput()}))}},{key:"_handleFormInput",value:function(){this._toggleButton()}},{key:"_toggleButton",value:function(){this._buttonElement.disabled=!this._formElement.checkValidity()}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListener()}},{key:"resetValidation",value:function(){this._toggleButton(),this._inputList.forEach((function(e){e.setCustomValidity("")}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._link=n,this._cardSelector=r,this._handleCardClick=o}var t,r;return t=e,(r=[{key:"_handleToggleLike",value:function(e){e.target.classList.toggle("element__like_active")}},{key:"_handleOpenBigImage",value:function(){this._handleCardClick(this._name,this._link)}},{key:"_handleCardRemove",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__like").addEventListener("click",(function(t){e._handleToggleLike(t)})),this._element.querySelector(".element__button-delete").addEventListener("click",(function(){e._handleCardRemove()})),this._element.querySelector(".element__image").addEventListener("click",(function(){e._handleOpenBigImage(e._name,e._link)}))}},{key:"createCard",value:function(){this._element=this._cardSelector.content.cloneNode(!0).children[0];var e=this._element.querySelector(".element__image");return this._element.querySelector(".element__title").textContent=this._name,e.src=this._link,e.alt=this._name,this._setEventListeners(),this._element}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__button-close"))&&e.close()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=c(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function c(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function p(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&s(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function u(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,n))._imgPopup=e,r._titlePopup=t,r}return t=u,(n=[{key:"open",value:function(e,t){this._imgPopup.src=t,this._imgPopup.alt=e,this._titlePopup.textContent=e,l(f(u.prototype),"open",this).call(this)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(i);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},_.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Object.defineProperty(e,"prototype",{value:Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),writable:!1}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e,t){var n,r=t.submitRenderer;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitRenderer=r,n._inputList=n._popup.querySelectorAll(".popup__field"),n._formPopup=n._popup.querySelector(".popup__form"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;_(g(u.prototype),"setEventListeners",this).call(this),this._formPopup.addEventListener("submit",(function(t){t.preventDefault(),e._submitRenderer(e._getInputValues())}))}},{key:"close",value:function(){this._formPopup.reset(),_(g(u.prototype),"close",this).call(this)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(i),E=document.querySelector(".popup__img"),w=document.querySelector(".popup__text"),j=document.querySelector(".popup_profile"),O=document.querySelector(".profile__button-edit"),S=document.querySelector(".template-element"),P=document.querySelector(".popup_element"),L=document.querySelector(".profile__button-add"),C=j.querySelector(".popup__form"),q=P.querySelector(".popup__form"),R=document.querySelector(".popup_profile").querySelectorAll(".popup__field"),x={formSelector:".popup__form",inputSelector:".popup__field",submitButtonSelector:".popup__button",inputErrorClass:"popup__field_type_error"};function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t){var n=t.name,r=t.job;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._job=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._dataUser={},this._dataUser.userName=this._name.textContent,this._dataUser.userJob=this._job.textContent,this._dataUser}},{key:"setUserInfo",value:function(e,t){this._name.textContent=e,this._job.textContent=t}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),U=new d(E,w,".popup_image");function D(e,t){U.open(e,t)}function N(e,t){return new r(e,t,S,D).createCard()}var F=new V({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=e.name,n=e.link;F.addItem(N(t,n))}},".elements"),J=new B({name:".profile__name",job:".profile__description"}),A=new k(".popup_profile",{submitRenderer:function(e){var t=e.userName,n=e.userJob;J.setUserInfo(t,n),A.close()}}),z=new k(".popup_element",{submitRenderer:function(e){var t=e.elementName,n=e.link;F.addItem(N(t,n)),z.close()}});A.setEventListeners(),z.setEventListeners(),U.setEventListeners(),F.renderItems();var M=new t(x,C);M.enableValidation();var G=new t(x,q);G.enableValidation(),O.addEventListener("click",(function(){var e=J.getUserInfo();R.forEach((function(t){t.value=e.userName,"userJob"===t.name&&(t.value=e.userJob)})),M.resetValidation(),A.open()})),L.addEventListener("click",(function(){G.resetValidation(),z.open()})),fetch("https://mesto.nomoreparties.co/v1/cohort-33/cards",{headers:{authorization:"64bb6b0d-30e4-4045-98e0-b8c9c8bc125a"}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))})();