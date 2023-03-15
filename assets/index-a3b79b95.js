(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const u="https://jsonplaceholder.typicode.com/users";async function f(){try{const n=await fetch(u);return n.ok||console.log("fetching users not ok"),await n.json()}catch(n){console.log("fetching users not ok, error message: "+n)}}const y=`<span class="material-symbols-outlined">
person
</span>`,h=`<span class="material-symbols-outlined">
apartment
</span>`,g=`<span class="material-symbols-outlined">
badge
</span>`,b=`<span class="material-symbols-outlined">
call
</span>`,$=`<span class="material-symbols-outlined">
mail
</span>`,v=`<span class="material-symbols-outlined">
language
</span>`;function E(n,e){const s=document.createElement("div");s.classList.add("card"),s.id="card"+e.id,n.appendChild(s);const t=`<div class="textDiv">
    <img src="${`https://robohash.org/${e.email}?gravatar=yes`}" />
    <p>${y}${e.name}</p>
    <p>${h}${e.company.name}</p>
    <p>${g}${e.company.bs}</p>
    <p>${b}${e.phone}</p>
    <p>${$}${e.email}</p>
    <p>${v}www.${e.website}</p>
  </div>`;s.innerHTML=t}const d=n=>{const e=document.getElementById("app"),s=document.createElement("div");s.id="container",e.appendChild(s),n.forEach(c=>{E(s,c)})};function m(n){const e=n.filter(c=>c.name.toLowerCase().includes(input.value.toLowerCase()));document.getElementById("container").remove(),d(e)}const w=document.getElementById("app"),a=document.createElement("div");a.id="inputCont";const p=document.createElement("input");p.id="input";const i=document.createElement("button");i.id="btn";i.innerText="Filter users by name";w.appendChild(a);a.appendChild(p);a.appendChild(i);let r;f().then(n=>{r=n,d(r)});i.addEventListener("click",()=>{m(r)});p.addEventListener("keypress",n=>{n.key=="Enter"&&m(r)});
