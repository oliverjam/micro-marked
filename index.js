const marked = require('marked');
const { json } = require('micro');

module.exports = async (req, res) => {
  const { markdown } = await json(req);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  return marked(markdown);
};
