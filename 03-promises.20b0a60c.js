function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var r=i("eWCmQ");const l=document.querySelector(".form");let s={delay:0,step:0,amount:0,position:1};function a(t,o){const n=Math.random()>.3;new Promise(((e,i)=>{const r={position:t,delay:o};n?e(r):i(r)})).then((({position:t,delay:o})=>{setTimeout((()=>e(r).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)),o)})).catch((({position:t,delay:o})=>{setTimeout((()=>e(r).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)),o)}))}l.addEventListener("input",(e=>s[e.target.name]=+e.target.value)),l.addEventListener("submit",(function(e){e.preventDefault();let t=s.delay;for(let e=0;e<s.amount;e+=1)a(s.position,t),s.position+=1,t+=s.step,console.log(t)}));
//# sourceMappingURL=03-promises.20b0a60c.js.map