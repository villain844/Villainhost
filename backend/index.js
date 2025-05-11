const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

let whitelist = [];
let blacklist = [];

const ADMIN_USER = "villain321";
const ADMIN_PASS = "villain";
const USER_PASS = "villainhost";

app.post("/akses", (req, res) => {
  const { nomor, password } = req.body;
  if (!nomor || !password) return res.status(400).send("Data tidak lengkap");
  if (blacklist.includes(nomor)) return res.status(403).send("Nomor diblokir");
  if (password !== USER_PASS) return res.status(403).send("Password salah");
  if (whitelist.includes(nomor)) return res.status(409).send("Nomor sudah terdaftar");
  whitelist.push(nomor);
  res.send("Akses berhasil ditambahkan");
});

app.post("/admin/login", (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER && password === ADMIN_PASS) return res.send("OK");
  res.status(403).send("Gagal login");
});

app.get("/admin/data", (req, res) => {
  res.json({ whitelist, blacklist });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
