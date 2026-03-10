/**
 * auth-nav.js
 * Runs on every page that includes it.
 * Reads the user_session cookie set by the server on login and:
 *  - Replaces "Register / Sign in" with "Hello, [Name] | Sign out"
 *  - Hides the Register link in customer-links
 *  - If on login.html or register.html while already logged in, redirects to index.html
 */
(function () {
  "use strict";

  function getCookieValue(name) {
    var match = document.cookie.match(
      new RegExp("(?:^|; )" + name + "=([^;]*)"),
    );
    return match ? decodeURIComponent(match[1]) : null;
  }

  function updateNavbar(user) {
    // Update every .customer-links list on the page (desktop + mobile)
    var allLists = document.querySelectorAll(".customer-links");
    allLists.forEach(function (ul) {
      var items = ul.querySelectorAll("li");
      items.forEach(function (li) {
        // Detect the Register / Sign in list item
        var hasRegister = li.querySelector('a[href="register.html"]');
        var hasLogin = li.querySelector('a[href="login.html"]');
        if (hasRegister || hasLogin) {
          li.innerHTML =
            '<span style="font-weight:600;">Hello, ' +
            user.name +
            "</span>" +
            " &nbsp;|&nbsp; " +
            '<a href="/logout">Sign out</a>';
        }
      });
    });
  }

  function init() {
    var raw = getCookieValue("user_session");
    if (!raw) return; // not logged in – leave navbar as-is

    var user;
    try {
      user = JSON.parse(raw);
    } catch (e) {
      return;
    }
    if (!user || !user.name) return;

    // If visitor is on login or register page while already logged in, send them home
    var path = window.location.pathname;
    if (path.endsWith("login.html") || path.endsWith("register.html")) {
      window.location.replace("/index.html");
      return;
    }

    updateNavbar(user);
  }

  // Wait for DOM to be ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
