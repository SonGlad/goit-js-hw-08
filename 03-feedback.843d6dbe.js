!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return m.Date.now()};function y(e,t,n){var r,i,a,u,f,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function S(e){return c=e,f=setTimeout(j,t),s?y(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function j(){var e=g();if(h(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-l);return m?p(n,a-(e-c)):n}(e))}function O(e){return f=void 0,d&&r?y(e):(r=i=void 0,u)}function w(){var e=g(),n=h(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return S(l);if(m)return f=setTimeout(j,t),y(l)}return void 0===f&&(f=setTimeout(j,t)),u}return t=I(t)||0,b(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(I(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},w.flush=function(){return void 0===f?u:O(g())},w}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function I(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var S=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},h=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},j={form:document.querySelector(".feedback-form"),emailInput:document.querySelector('input[name="email"]'),messageInput:document.querySelector('textarea[name="message"]')},O="feedback-form-state",w=e(t)((function(){var e={email:j.messageInput.value.trim(),message:j.emailInput.value.trim()};S(O,e)}),500);j.form.addEventListener("input",w),document.addEventListener("DOMContentLoaded",(function(e){var t=h(O);t&&(j.emailInput.value=t.email,j.messageInput.value=t.message)})),j.form.addEventListener("submit",(function(e){e.preventDefault(),h(O),localStorage.removeItem(O),j.emailInput.value="",j.messageInput.value="";var t={email:j.emailInput.value,message:j.messageInput.value};console.log(t)}))}();
//# sourceMappingURL=03-feedback.843d6dbe.js.map
