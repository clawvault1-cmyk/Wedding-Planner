(function () {
  "use strict";

  var urls = window.CHECKOUT_URLS || {};

  function checkoutUrl(value) {
    if (typeof value !== "string") return "";
    var trimmed = value.trim();
    if (!trimmed) return "";
    try {
      var url = new URL(trimmed);
      if (url.protocol === "https:" || url.protocol === "http:") return url.href;
    } catch (error) {
      return "";
    }
    return "";
  }

  var links = document.querySelectorAll("[data-checkout]");
  for (var i = 0; i < links.length; i += 1) {
    var link = links[i];
    var href = checkoutUrl(urls[link.getAttribute("data-checkout")]);
    if (href) {
      link.setAttribute("href", href);
      link.removeAttribute("aria-disabled");
      continue;
    }
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var note = event.currentTarget.parentElement.querySelector(".checkout-note");
      if (note) note.hidden = false;
    });
  }
})();
