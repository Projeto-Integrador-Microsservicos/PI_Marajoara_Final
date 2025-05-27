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

// Abre o modal para adicionar um evento
function openAddEventModal() {
    const modal = document.getElementById("event-modal-add");
    modal.style.display = "block"; // Exibe o modal

    // Limpa os campos do formulário
    document.getElementById("event-img").value = "";
    document.getElementById("event-description").value = "";
    document.getElementById("event-date").value = "";
}



function openEditEventModal() {
    const selectedItem = document.querySelector(".gallery-item.selected");
    if (!selectedItem) {
        alert("Por favor, selecione um evento para editar.");
        return;
    }

    const modal = document.getElementById("event-modal-edit");
    modal.style.display = "block";

    const idElement = selectedItem.querySelector(".gallery-id");
    const descriptionElement = selectedItem.querySelector(".gallery-description");
    const dateElement = selectedItem.querySelector(".gallery-date");

    // Preenchendo os campos do formulário
    document.getElementById("event-id-edit").value = idElement.textContent;
    document.getElementById("event-description-edit").value = descriptionElement.textContent;

    const rawDate = dateElement?.textContent.trim().replace("Dia ", "");
    const dateObj = new Date(rawDate);
    if (!isNaN(dateObj)) {
        document.getElementById("event-date-edit").value = dateObj.toISOString().split("T")[0];
    } else {
        console.error("Data inválida:", rawDate);
    }

}

// Fecha o modal
function closeModal() {
    const modal1 = document.getElementById("event-modal-add");
	const modal2 = document.getElementById("event-modal-edit");
	modal1.style.display = "none";
	modal2.style.display = "none";

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
