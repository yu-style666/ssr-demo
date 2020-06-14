const express = require("express");
const next = require("next");

const bodyParser = require("body-parser");

const port = parseInt(process.env.PORT, 10) || 8080;

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: "./src" });

const handle = app.getRequestHandler();

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

app.prepare().then(() => {
  server.get("/", (req, res) => {
    return app.render(req, res, "/", req.query);
  });

  server.get("/index", (req, res) => {
    return app.render(req, res, "/index", req.query);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.use((req, res, next) => {
    res.statusCode = 200;
    next();
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
