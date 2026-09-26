/* Website-only, cookieless Umami analytics. Preserve existing analytics. */
(function () {
  if (navigator.doNotTrack === '1' || navigator.globalPrivacyControl === true) return;
  var script = document.createElement('script');
  script.src = 'https://aiaiai.help/umami/script.js';
  script.async = true;
  script.dataset.websiteId = '5e8da01a-2b23-4477-bc25-9214b13f0d77';
  script.dataset.hostUrl = 'https://aiaiai.help/umami';
  script.dataset.domains = 'ai-scarlett.github.io';
  script.dataset.doNotTrack = 'true';
  script.dataset.excludeSearch = 'true';
  script.dataset.excludeHash = 'true';
  document.head.appendChild(script);
})();
