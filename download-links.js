/*
 * Point the download buttons at the files the latest release actually has.
 *
 * The buttons used to hard-code file names: the Android one at
 * `latest/download/echoit.apk`, a name no release has ever had (404), and the
 * Windows one at the 0.4.0 installer, which goes stale the moment a new
 * version ships. Asset names carry the version (EchoIt_0.4.0_aarch64.apk), so
 * no fixed `latest/download/<name>` URL can work.
 *
 * The markup keeps working links to the current release, so the buttons work
 * with JavaScript off or if GitHub's API does not answer. This only upgrades
 * them to whatever the latest release contains — chosen by file type, not by
 * name — so a new release needs no edit here.
 */
(function () {
  var API = 'https://api.github.com/repos/mrsarthi/EchoIt-Messenger/releases/latest';
  var buttons = [
    { id: 'btn-android', match: function (n) { return /\.apk$/i.test(n); } },
    { id: 'btn-windows', match: function (n) { return /-setup\.exe$/i.test(n); } },
  ];

  fetch(API, { headers: { Accept: 'application/vnd.github+json' } })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (release) {
      if (!release || !Array.isArray(release.assets)) return;
      // The beta box names the version people will get; keep it the real one.
      var version = document.getElementById('release-version');
      if (version && release.tag_name) version.textContent = release.tag_name;
      buttons.forEach(function (b) {
        var el = document.getElementById(b.id);
        var asset = release.assets.find(function (a) { return b.match(a.name); });
        if (el && asset && asset.browser_download_url) {
          el.href = asset.browser_download_url;
          if (release.tag_name) el.title = asset.name + ' (' + release.tag_name + ')';
        }
      });
    })
    .catch(function () {
      // Keep the links already in the page; they point at a real release.
    });
})();
