const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/contact', (req, res) => {
  const { name, email, company, phone, message } = req.body;
  console.log('--- New Contact Submission ---');
  console.log(`Name:    ${name}`);
  console.log(`Email:   ${email}`);
  console.log(`Company: ${company}`);
  console.log(`Phone:   ${phone || 'Not provided'}`);
  console.log(`Message: ${message}`);
  console.log('------------------------------');
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`AV Sales Consultancy running at http://localhost:${PORT}`);
});
