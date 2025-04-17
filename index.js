
const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files from current directory
app.use(express.static('./'));

// Explicitly handle main routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/contact-me.html', (req, res) => res.sendFile(path.join(__dirname, 'contact-me.html')));
app.get('/about.html', (req, res) => res.sendFile(path.join(__dirname, 'about.html')));

// Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
