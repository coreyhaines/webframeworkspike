var sys = require('sys');
exports.requestHandler = function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Request:\n');
  res.write(sys.inspect(req, 5));
  res.write('\n');
  res.write('URL:\n');
  res.write(sys.inspect(require('url').parse(req.url), 5));
  res.end('\n');
}
