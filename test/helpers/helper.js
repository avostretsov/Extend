module.exports = {
  verifyUrlToBe(url) {
    browser.waitUntil(
      function() {
        return browser.getUrl() === url
      },
      5000,
      "url didn't update with " + url + ' after 5s'
    )
  }
}
