import express from "express";

const app = express();
app.use(express.json());

let messages = []; // simpan chat sementara

// ambil semua pesan
app.get("/api/messages", (req, res) => {
  res.json(messages);
});

// kirim pesan
app.post("/api/send", (req, res) => {
  const { text, from } = req.body;
  if (!text) return res.status(400).json({ error: "Pesan kosong" });

  const msg = { text, from, time: Date.now() };
  messages.push(msg);

  res.json({ success: true, msg });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server jalan di port", port));
