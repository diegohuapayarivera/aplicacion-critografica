import express, { json } from "express";
import nodeRSA from "node-rsa";

const app = express();

app.use(json());

//node RSA
const key = new nodeRSA({ b: 1024 });
//routes
app.get("/", (req, res) => {
  res.send("Hello, world");
});

app.post("/exampleone/encrypt", (req, res) => {
    console.log(key.encrypt(req.body.mensaje, "base64"))
    res.json(key.encrypt(req.body.mensaje, "base64"))
});

app.post("/exampleone/decrypt", (req, res) => {
  console.log(req.body.mensaje);
  res.json(key.decrypt(req.body.mensaje, "utf8"));
});

app.listen(3000, () => {
  console.log("listen on port 3000");
});
