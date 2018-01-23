const request = require('request');
const marked = require('marked');


module.exports = function loader(source) {
  const callback = this.async();
  request.get(source, (error, response, body) => {
    try {
      const html = `<div class="md-padding"><md-content>${marked(body)}</md-content></div>`;
      const json = JSON.stringify(html)
        .replace(/\u2028/g, '\\u2028')
        .replace(/\u2029/g, '\\u2029');
      callback(error, "module.exports = " + json);
    } catch(err) {
      callback(err);
    }
  });
};
