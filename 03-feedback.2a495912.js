var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,o=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),s=Object.prototype.toString,c=Math.max,m=Math.min,g=function(){return l.Date.now()};function d(e,t,n){var i,r,a,o,f,u,l=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,a=r;return i=r=void 0,l=t,o=e.apply(a,n)}function j(e){return l=e,f=setTimeout(S,t),s?y(e):o}function O(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-l>=a}function S(){var e=g();if(O(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-u);return d?m(n,a-(e-l)):n}(e))}function T(e){return f=void 0,b&&i?y(e):(i=r=void 0,o)}function h(){var e=g(),n=O(e);if(i=arguments,r=this,u=e,n){if(void 0===f)return j(u);if(d)return f=setTimeout(S,t),y(u)}return void 0===f&&(f=setTimeout(S,t)),o}return t=p(t)||0,v(n)&&(s=!!n.leading,a=(d="maxWait"in n)?c(p(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=r=f=void 0},h.flush=function(){return void 0===f?o:T(g())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||a.test(e)?o(e.slice(2),f?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),d(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form");b.addEventListener("input",t((function(e){"email"===e.target.name?(y.email=e.target.value,y.message=b.elements.message.value):"message"===e.target.name&&(y.message=e.target.value,y.email=b.elements.email.value);localStorage.setItem("feedback-form-state",JSON.stringify(null!=y?y:{}))}),500)),b.addEventListener("submit",(function(e){if(e.preventDefault(),!b.elements.email.value||!b.elements.message.value)return void alert("Заповніть всі поля!");console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()}));let y={email:"",message:""};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(b.elements.email.value=e.email,b.elements.message.value=e.message)}();
//# sourceMappingURL=03-feedback.2a495912.js.map