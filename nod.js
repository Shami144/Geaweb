const express = require('express');
const fetch = require('node-fetch');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/signup', async (req, res) => {
    const { name, email, cpf, posting, password, 'g-recaptcha-response': captcha } = req.body;

    // Verify CAPTCHA
    const secretKey = 'YOUR_SECRET_KEY_HERE';
    const captchaVerifyURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;

    const response = await fetch(captchaVerifyURL, { method: 'POST' });
    const data = await response.json();

    if (!data.success) {
        return res.status(400).send('CAPTCHA verification failed. Please try again.');
    }

    // Proceed with saving the user data
    res.send('Signup successful');
});