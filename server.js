var http = require('http'),
    port = process.env.PORT || 8001,
    app = require('./lib/app');

http.createServer(app.requestHandler).listen(parseInt(port));

