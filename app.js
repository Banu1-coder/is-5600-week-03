const http = require('http');
const url = require('url');

const port = process.env.PORT || 3000;

const server = http.createServer(function (request, response) {
  response.setHeader('Content-Type', 'application/json');

  const data = {
    text: 'hi',
    number: [1, 2, 3]
  };

  response.end(JSON.stringify(data));
});

server.listen(port, function () {
  console.log(`Server is listening on port ${port}`);
});

