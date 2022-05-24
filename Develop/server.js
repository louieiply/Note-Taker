const express = require("express");
const api = require("./routes/index");
const path = require("path");

const PORT = process.env.port || 3002;
const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api",api);

app.use(express.static('public'));

// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

app.get('/notes', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);