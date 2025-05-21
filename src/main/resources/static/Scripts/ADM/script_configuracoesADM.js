function closePopup() {
        const popup = document.getElementById('popup');
        popup.style.display = 'none';
    }
    function toggleDropdown() {
        const dropdown = document.getElementById('user-dropdown');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }

    // Fecha o dropdown ao clicar fora dele
    document.addEventListener('click', function (event) {
        const dropdown = document.getElementById('user-dropdown');
        const userIcon = document.querySelector('.img_nav_login');
        if (!dropdown.contains(event.target) && event.target !== userIcon) {
            dropdown.style.display = 'none';
        }
    });
let porteiros = [
    { nome: "João Silva", email: "joao@marajoara.com" },
    { nome: "Maria Souza", email: "maria@marajoara.com" }
];

function renderPorteiros() {
    const tbody = document.getElementById('porteiros-tbody');
    tbody.innerHTML = '';
    porteiros.forEach((porteiro, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${porteiro.nome}</td>
            <td>${porteiro.email}</td>
            <td>
                <button onclick="editPorteiro(${idx})">Editar</button>
                <button onclick="deletePorteiro(${idx})">Excluir</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openAddModal() {
    document.getElementById('modal-title').innerText = "Adicionar Porteiro";
    document.getElementById('porteiro-nome').value = '';
    document.getElementById('porteiro-email').value = '';
    document.getElementById('porteiro-form').onsubmit = addPorteiro;
    document.getElementById('porteiro-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('porteiro-modal').style.display = 'none';
}

function addPorteiro(e) {
    e.preventDefault();
    porteiros.push({
        nome: document.getElementById('porteiro-nome').value,
        email: document.getElementById('porteiro-email').value
    });
    closeModal();
    renderPorteiros();
}

function editPorteiro(idx) {
    document.getElementById('modal-title').innerText = "Editar Porteiro";
    document.getElementById('porteiro-nome').value = porteiros[idx].nome;
    document.getElementById('porteiro-email').value = porteiros[idx].email;
    document.getElementById('porteiro-form').onsubmit = function(e) {
        e.preventDefault();
        porteiros[idx].nome = document.getElementById('porteiro-nome').value;
        porteiros[idx].email = document.getElementById('porteiro-email').value;
        closeModal();
        renderPorteiros();
    };
    document.getElementById('porteiro-modal').style.display = 'block';
}

function deletePorteiro(idx) {
    porteiros.splice(idx, 1);
    renderPorteiros();
}

// Inicializa a tabela ao carregar a página
window.onload = function() {
    if (document.getElementById('porteiros-tbody')) {
        renderPorteiros();
    }
};