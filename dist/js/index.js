(()=>{"use strict";let e={x:0,y:0},t={x:0,y:0};function r(){return t=e,e}window.addEventListener("keydown",(r=>{if("F5"!==r.key)switch(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(r.key)||alert("請使用方向鍵"),r.key){case"ArrowUp":if(0!==t.y)break;e={x:0,y:-1};break;case"ArrowDown":if(0!==t.y)break;e={x:0,y:1};break;case"ArrowLeft":if(0!==t.x)break;e={x:-1,y:0};break;case"ArrowRight":if(0!==t.x)break;e={x:1,y:0}}}));const o=[{x:11,y:11}];let n=0;function a(e,{ignoreHead:t=!1}={}){return o.some(((r,o)=>{return(!t||0!==o)&&(a=e,(n=r).x===a.x&&n.y===a.y);var n,a}))}console.log(o.length);let i={x:10,y:1};const l=document.getElementById("game-board");let s=0,d=!1;window.requestAnimationFrame((function e(t){var c;d?confirm("You lose. Press ok to restart.")&&location.reload():(window.requestAnimationFrame(e),(t-s)/1e3<1/4||(s=t,function(){!function(){for(let e=0;e<n;e++)o.push({...o[o.length-1]});n=0}();const e=r();for(let e=o.length-2;e>=0;e--)o[e+1]={...o[e]};o[0].x+=e.x,o[0].y+=e.y}(),a(i)&&(n+=5,i=function(){let e;for(;null==e||a(e);)e={x:Math.floor(21*Math.random())+1,y:Math.floor(21*Math.random())+1};return e}()),c=o[0],d=c.x<1||c.x>21||c.y<1||c.y>21||a(o[0],{ignoreHead:!0}),l.innerHTML="",function(e){o.forEach((t=>{const r=document.createElement("div");r.style.gridRowStart=t.y,r.style.gridColumnStart=t.x,r.classList.add("snake"),e.appendChild(r)}))}(l),function(e){const t=document.createElement("div");t.style.gridRowStart=i.y,t.style.gridColumnStart=i.x,t.classList.add("food"),e.appendChild(t)}(l)))}))})();