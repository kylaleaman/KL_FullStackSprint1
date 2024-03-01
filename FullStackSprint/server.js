const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const path = require('path'); 

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src'));

// POST route to handle form submission and token generation
app.post('/generateToken', (req, res) => {
  const { username } = req.body;
  const token = generateToken(username);
  res.json({ token: token });
});

// Route handler for the root URL ("/")
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

  
// Function to generate token using crypto
function generateToken(username) {
  // Generate a random token using crypto module
  const token = crypto.randomBytes(20).toString('hex');
  return token;
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

