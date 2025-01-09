document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const posting = document.getElementById('posting').value.trim();
    const password = document.getElementById('password').value.trim();

    // Basic validations
    if (cpf.length !== 8 || isNaN(cpf)) {
        alert('CPF number must be exactly 8 digits.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Data object for demonstration
    const formData = {
        name,
        email,
        cpf,
        posting,
        password,
    };

    const captchaResponse = grecaptcha.getResponse();

    if (!captchaResponse) {
        e.preventDefault();
        alert('Please complete the CAPTCHA verification.');
        return;
    }

    alert('Form submitted successfully!');
    console.log('CAPTCHA verified');
    console.log('User data submitted:', formData);

    // Redirect or clear form
    alert('Signup successful!');
    this.reset();
});
