//pop up de log
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
function showDescription(description) {
        const descriptionDiv = document.getElementById('event-description');
        descriptionDiv.textContent = description;
        descriptionDiv.style.display = 'block';
    }


    function openPopup(imgSrc, description, date) {
        const popup = document.getElementById('popup');
        const popupImg = document.getElementById('popup-img');
        const popupDescription = document.getElementById('popup-description');
        const popupDate = document.getElementById('popup-date');

        popupImg.src = imgSrc;
        popupDescription.textContent = description;
        popupDate.textContent = date;

        popup.style.display = 'flex';
    }

    function closePopup() {
        const popup = document.getElementById('popup');
        popup.style.display = 'none';
    }
    function toggleDropdown() {
        const dropdown = document.getElementById('user-dropdown');
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }

    function logout() {
                // Redirecione para a página de login ou realize outra ação
        window.location.href = '../index.html';
    }

    // Fecha o dropdown ao clicar fora dele
    document.addEventListener('click', function (event) {
        const dropdown = document.getElementById('user-dropdown');
        const userIcon = document.querySelector('.img_nav_login');
        if (!dropdown.contains(event.target) && event.target !== userIcon) {
            dropdown.style.display = 'none';
        }
    });
// Função para adicionar um evento
function adicionarEvento() {
    const imgSrc = prompt("Digite o URL da imagem:");
    const description = prompt("Digite a descrição do evento:");
    const date = prompt("Digite a data do evento (YYYY-MM-DD):");

    if (!imgSrc || !description || !date) {
        alert("Todos os campos são obrigatórios!");
        return;
    }

    const gallery = document.getElementById("gallery");
    const newEvent = document.createElement("div");
    newEvent.classList.add("gallery-item");

    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = description;
    img.classList.add("gallery-img");

    const desc = document.createElement("p");
    desc.classList.add("gallery-description");
    desc.textContent = description;

    const eventDate = document.createElement("p");
    eventDate.classList.add("gallery-date");
    eventDate.textContent = `Dia ${date}`;

    newEvent.appendChild(img);
    newEvent.appendChild(desc);
    newEvent.appendChild(eventDate);
    gallery.appendChild(newEvent);

    alert("Evento adicionado com sucesso!");
}

function editarEvento() {
    alert("Função para editar evento chamada!");
    // Adicione aqui a lógica para editar um evento
}

function cancelarAcao() {
    alert("Ação cancelada!");
    // Adicione aqui a lógica para cancelar a ação
}

let editingEvent = null;
let selectedEvent = null; // Armazena o evento selecionado para edição
let deleteMode = false; // Indica se o modo de exclusão está ativo

// Função para habilitar o modo de exclusão
function enableDeleteMode() {
    deleteMode = true;
    alert("Clique em um evento para selecioná-lo para exclusão.");
}

// Função para selecionar um evento
function selectEvent(element) {
    // Remove a seleção anterior
    const previousSelected = document.querySelector(".gallery-item.selected");
    if (previousSelected) {
        previousSelected.classList.remove("selected");
    }

    // Marca o novo evento como selecionado
    element.classList.add("selected");
    selectedEvent = element;
}

// Função para selecionar um evento para edição
function selectEventForEditing(element) {
    // Remove a seleção anterior
    const previousSelected = document.querySelector(".gallery-item.selected");
    if (previousSelected) {
        previousSelected.classList.remove("selected");
    }

    // Marca o novo evento como selecionado
    element.classList.add("selected");
    selectedEvent = element;
}

// Abre o modal para editar o evento selecionado
function openEditEventModal() {
    if (!selectedEvent) {
        alert("Por favor, selecione um evento para editar.");
        return;
    }

    const imgSrc = selectedEvent.querySelector("img").src;
    const description = selectedEvent.querySelector(".gallery-description").textContent;
    const date = selectedEvent.querySelector(".gallery-date").textContent.replace("Dia ", "");

    document.getElementById("modal-title").textContent = "Editar Evento";
    document.getElementById("event-form").reset();
    document.getElementById("event-description").value = description;
    document.getElementById("event-date").value = date;

    document.getElementById("event-modal").style.display = "block";
}

// Abre o modal para adicionar um evento
function openAddEventModal() {
    const modal = document.getElementById("event-modal");
    const modalTitle = document.getElementById("modal-title");
    modalTitle.textContent = "Adicionar Evento"; // Define o título do modal
    modal.style.display = "block"; // Exibe o modal

    // Limpa os campos do formulário
    document.getElementById("event-img").value = "";
    document.getElementById("event-description").value = "";
    document.getElementById("event-date").value = "";

    // Remove qualquer atributo de edição
    document.getElementById("event-form").dataset.editing = "false";
}

// Salva o evento (adiciona ou edita)
document.getElementById("event-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário

    const isEditing = this.dataset.editing === "true"; // Verifica se está editando
    const imgInput = document.getElementById("event-img");
    const descriptionInput = document.getElementById("event-description");
    const dateInput = document.getElementById("event-date");

    const description = descriptionInput.value;
    const date = dateInput.value;

    // Verifica se os campos obrigatórios estão preenchidos
    if (!description || !date) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    if (isEditing) {
        // Caso esteja editando, atualiza o item existente
        const editingItem = document.querySelector(".gallery-item.editing");
        if (editingItem) {
            const imgElement = editingItem.querySelector(".gallery-img");
            const descriptionElement = editingItem.querySelector(".gallery-description");
            const dateElement = editingItem.querySelector(".gallery-date");

            if (imgInput.files[0]) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    imgElement.src = e.target.result;
                };
                reader.readAsDataURL(imgInput.files[0]);
            }

            descriptionElement.textContent = description;
            dateElement.textContent = `Dia ${new Date(date).toLocaleDateString("pt-BR")}`;
            editingItem.classList.remove("editing");
        }
    } else {
        // Caso esteja adicionando, cria um novo item
        const gallery = document.getElementById("gallery");

        const newItem = document.createElement("div");
        newItem.classList.add("gallery-item");
        newItem.setAttribute("onclick", "selectEventForEditing(this)");

        const newImg = document.createElement("img");
        newImg.classList.add("gallery-img");
        if (imgInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                newImg.src = e.target.result;
            };
            reader.readAsDataURL(imgInput.files[0]);
        } else {
            newImg.src = "../../imgs/default-placeholder.png"; // Imagem padrão caso nenhuma seja selecionada
        }

        const newDescription = document.createElement("p");
        newDescription.classList.add("gallery-description");
        newDescription.textContent = description;

        const newDate = document.createElement("p");
        newDate.classList.add("gallery-date");
        newDate.textContent = `Dia ${new Date(date).toLocaleDateString("pt-BR")}`;

        newItem.appendChild(newImg);
        newItem.appendChild(newDescription);
        newItem.appendChild(newDate);

        gallery.appendChild(newItem); // Adiciona o novo item à galeria
    }

    // Fecha o modal após salvar
    closeModal();
});

// Abre o modal para editar um evento
function openEditEventModal() {
    const selectedItem = document.querySelector(".gallery-item.selected");
    if (!selectedItem) {
        alert("Por favor, selecione um evento para editar.");
        return;
    }

    const modal = document.getElementById("event-modal");
    const modalTitle = document.getElementById("modal-title");
    modalTitle.textContent = "Editar Evento"; // Define o título do modal
    modal.style.display = "block"; // Exibe o modal

    // Preenche os campos do formulário com os dados do item selecionado
    const imgElement = selectedItem.querySelector(".gallery-img");
    const descriptionElement = selectedItem.querySelector(".gallery-description");
    const dateElement = selectedItem.querySelector(".gallery-date");

    document.getElementById("event-description").value = descriptionElement.textContent;
    document.getElementById("event-date").value = new Date(dateElement.textContent.replace("Dia ", "")).toISOString().split("T")[0];

    // Marca o item como sendo editado
    selectedItem.classList.add("editing");
    document.getElementById("event-form").dataset.editing = "true";
}

// Fecha o modal
function closeModal() {
    const modal = document.getElementById("event-modal");
    modal.style.display = "none"; // Esconde o modal

    // Remove a classe de edição de qualquer item
    const editingItem = document.querySelector(".gallery-item.editing");
    if (editingItem) {
        editingItem.classList.remove("editing");
    }
}

// Função para selecionar um evento para exclusão
function selectEventForDeletion(element) {
    if (!deleteMode) return; // Só permite selecionar se o modo de exclusão estiver ativo

    // Remove a seleção anterior
    const previousSelected = document.querySelector(".gallery-item.selected");
    if (previousSelected) {
        previousSelected.classList.remove("selected");
    }

    // Marca o novo evento como selecionado
    element.classList.add("selected");
    selectedEvent = element;

    // Confirmação antes de excluir
    const confirmDelete = confirm("Tem certeza de que deseja excluir este evento?");
    if (confirmDelete) {
        selectedEvent.remove(); // Remove o evento da galeria
        selectedEvent = null; // Limpa a seleção
        deleteMode = false; // Desativa o modo de exclusão
        alert("Evento excluído com sucesso!");
    } else {
        // Caso o usuário cancele, desativa o modo de exclusão
        deleteMode = false;
        selectedEvent.classList.remove("selected");
        selectedEvent = null;
    }
}

// Adiciona o evento de clique para selecionar um evento
document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", function () {
        selectEventForDeletion(this);
    });
});
