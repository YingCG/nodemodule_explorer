// import http module
const http = require("http");

//create a server
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write("Hello from node.js server. You have visited /.");
    res.write("New info");
  }
  else if ((req.url === "/dog")) {
    res.write(
      `<img src="https://images.app.goo.gl/dftMWxQCy3WjcFiP9" width="100%">`
    );
  } else if (req.url === "/cat") {
    res.write(
      `<img src="https://images.app.goo.gl/pzLSUX9SU5A8GJjW8"> width="100%">`
    );
  } else if (req.url === "/users") {
    res.setHeader("Content-Type", "application/json");
    const jsonString = JSON.stringify({ user: "mushroomhead" });
    res.write(jsonString);
  } else {
    res.write(`<h1>Sorry, we only have cat & dogs </h1>`);
  }
  res.end();
});

//start the server
server.listen(4002);
console.log("start server on port", 4002);
