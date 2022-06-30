const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello from http server");
    res.end();
  } else if (req.url == "/icecream") {
    res.write("Here's your ice-cream");
    res.end();
  } else if (req.url === "/api/userlist") {
    const userList = [
      { id: 5, name: "John", age: 36 },
      { id: 6, name: "Jane", age: 26 },
      { id: 7, name: "Don", age: 20 },
    ];
    const stringifiedResponse = JSON.stringify(userList);
    res.write(stringifiedResponse);
    res.end();
  } else if (req.url === "/api/greet") {
    res.write("Hello Juju, thanks for visiting this URL");
    res.end();
  } else {
    res.write("Invalid url endpoint");
    res.end();
  }
});

server.listen(4001);
