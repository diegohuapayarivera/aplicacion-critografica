import express from "express";
import jwt from "jsonwebtoken";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post("/api", (req, res) => {
  //auth user
  const user = { id: 1 };
  const token = jwt.sign({ user }, "secret_key");
  console.log(token)
  res.json({ token });
});

app.get("/api/protected", ensureToken, (req, res) => {
  jwt.verify(req.token, "secret_key", (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        text: "protected Response!",
        data,
      });
    }
  });
});

function ensureToken (req, res, next) {
  const bearerHeader = req.headers["authorization"];
  console.log(bearerHeader);
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
};

app.listen(3000, () => {
  console.log("Server on port 3000");
});
