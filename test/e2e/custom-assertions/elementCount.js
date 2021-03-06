// from vue-loader
exports.assertion = function (selector, count) {
  this.message = 'Testing if element <' + selector + '> has count: ' + count
  this.expected = count
  this.pass = function (val) {
    return val === this.expected
  }
  this.value = function (res) {
    return res.value
  }
  this.command = function (cb) {
    var self = this
    return this.api.execute(function (selector) {
      return (window.$ || document.querySelectorAll)(selector).length
    }, [selector], function (res) {
      cb.call(self, res)
    })
  }
}
