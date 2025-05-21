document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    window.location.href = "./Pages/Morador/pagina_eventos.html";
});
function showRecoveryForm() {
    document.querySelector('.login-container').style.display = 'none';
    document.getElementById('recovery-container').style.display = 'block';
}

function hideRecoveryForm() {
    document.querySelector('.login-container').style.display = 'block';
    document.getElementById('recovery-container').style.display = 'none';
}
function showRegisterForm() {
    document.querySelector('.login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'block';
}

function hideRegisterForm() {
    document.querySelector('.login-container').style.display = 'block';
    document.getElementById('register-container').style.display = 'none';
}

document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("phone").value;
    const verificationCode = document.getElementById("verificationCode").value;
    const receiveByEmail = document.getElementById("receiveByEmail").checked;
    const receiveByPhone = document.getElementById("receiveByPhone").checked;

    if (!receiveByEmail && !receiveByPhone) {
        alert("Por favor, selecione uma opção para receber o código.");
        return;
    }

    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
    }

    alert("Cadastro realizado com sucesso!");
    // Aqui você pode adicionar a lógica para enviar os dados ao servidor
    window.location.href = "../Pages/Morador/pagina_eventos.html"; // Redireciona para a página inicial
});

function logout() {
    // Redireciona para a página de login
    window.location.href = "../index.html";
}

function redirectToEvents(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário
    window.location.href = "./Pages/Morador/pagina_eventos.html"; // Redireciona para a página de eventos
}

// Verificar se as senhas coincidem
const passwordInput = document.getElementById('register-password');
const confirmPasswordInput = document.getElementById('register-confirm-password');
const passwordWarning = document.getElementById('password-warning');

// Verificar se as senhas coincidem enquanto o usuário digita
confirmPasswordInput.addEventListener('input', () => {
    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordWarning.style.display = 'block'; // Mostra o aviso
    } else {
        passwordWarning.style.display = 'none'; // Esconde o aviso
    }
});

// Também verificar no campo de senha principal
passwordInput.addEventListener('input', () => {
    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordWarning.style.display = 'block'; // Mostra o aviso
    } else {
        passwordWarning.style.display = 'none'; // Esconde o aviso
    }
});

// Impedir o envio do formulário se as senhas não coincidirem
const form = document.querySelector('form'); // Substitua pelo seletor correto do formulário
form.addEventListener('submit', (e) => {
    if (passwordInput.value !== confirmPasswordInput.value) {
        e.preventDefault(); // Impede o envio do formulário
        passwordWarning.style.display = 'block'; // Mostra o aviso
    }
});

function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    const icon = input.nextElementSibling; // Seleciona o ícone ao lado do input

    if (input.type === "password") {
        input.type = "text"; // Mostra a senha
        icon.classList.remove('fa-eye'); // Remove o ícone de olho aberto
        icon.classList.add('fa-eye-slash'); // Adiciona o ícone de olho fechado
    } else {
        input.type = "password"; // Oculta a senha
        icon.classList.remove('fa-eye-slash'); // Remove o ícone de olho fechado
        icon.classList.add('fa-eye'); // Adiciona o ícone de olho aberto
    }
}

const recoveryOption = document.getElementById('recovery-option');
const emailRecoveryGroup = document.getElementById('email-recovery-group');
const phoneRecoveryGroup = document.getElementById('phone-recovery-group');

// Alternar entre e-mail e número de celular
recoveryOption.addEventListener('change', () => {
    if (recoveryOption.value === 'email') {
        emailRecoveryGroup.style.display = 'block';
        phoneRecoveryGroup.style.display = 'none';
    } else if (recoveryOption.value === 'phone') {
        emailRecoveryGroup.style.display = 'none';
        phoneRecoveryGroup.style.display = 'block';
    }
});

// Enviar o código de recuperação
function sendRecoveryCode() {
    const recoveryOption = document.getElementById('recovery-option').value;
    const email = document.getElementById('recovery-email').value;
    const phone = document.getElementById('recovery-phone').value;

    if (recoveryOption === 'email' && !email) {
        alert('Por favor, insira seu e-mail.');
        return;
    }

    if (recoveryOption === 'phone' && !phone) {
        alert('Por favor, insira seu número de celular.');
        return;
    }



    // Exibe o campo para inserir o código
    document.getElementById('code-group').style.display = 'block';
    document.getElementById('send-code-button').style.display = 'none';
    document.getElementById('verify-code-button').style.display = 'inline-block';
}

document.getElementById('recoveryForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const code = document.getElementById('recovery-code').value;
    const codeError = document.getElementById('code-error'); // Seleciona o elemento da mensagem de erro

    if (!code) {
        codeError.textContent = 'Por favor, insira o código de recuperação.';
        codeError.style.display = 'block'; // Exibe a mensagem de erro
        return;
    }

    // Simula a verificação do código
    if (code === '123456') { // Substitua por uma lógica real de verificação
        codeError.style.display = 'none'; // Esconde a mensagem de erro, se houver
        document.getElementById('recovery-container').style.display = 'none'; // Esconde o contêiner de recuperação
        document.getElementById('reset-password-container').style.display = 'block'; // Mostra o contêiner de redefinição de senha
    } else {
        codeError.textContent = 'Código inválido. Tente novamente.';
        codeError.style.display = 'block'; // Exibe a mensagem de erro
    }
});

document.getElementById('resetPasswordForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const newPassword = document.getElementById('new-password').value;
    const confirmNewPassword = document.getElementById('confirm-new-password').value;
    const resetPasswordError = document.getElementById('reset-password-error');

    if (newPassword !== confirmNewPassword) {
        resetPasswordError.textContent = 'As senhas não coincidem.';
        resetPasswordError.style.display = 'block'; // Exibe a mensagem de erro
        return;
    }

    resetPasswordError.style.display = 'none'; // Esconde a mensagem de erro

    window.location.href = 'index.html'; // Redireciona para a página de login
});
