!function(){var e,t,a,i;e=document.querySelector("[data-menu-button]"),t=document.querySelector("[data-menu]"),a=document.querySelector("#menu"),i=document.querySelector("body"),e.addEventListener("click",(function(){var a="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-active"),e.setAttribute("aria-expanded",!a),t.classList.toggle("is-open"),i.classList.toggle("no-scroll")})),a.addEventListener("click",(function(){var a="true"===e.getAttribute("aria-expanded")||!1;e.classList.toggle("is-active"),e.setAttribute("aria-expanded",!a),t.classList.toggle("is-open"),i.classList.toggle("no-scroll")})),window.matchMedia("(min-width: 1280px)").addEventListener("change",(function(a){a.matches&&(t.classList.remove("is-open"),e.classList.remove("is-active"),e.setAttribute("aria-expanded",!1))}))}();
//# sourceMappingURL=index.81bcaa13.js.map