

let selectedEvent = null; // Armazena um evento para edição
let deleteMode = false; // Indica se o modo de exclusão está ativo

// Fecha o dropdown ao clicar fora dele
document.addEventListener('click', function(event) {
	const dropdown = document.getElementById('user-dropdown');
	const userIcon = document.querySelector('.img_nav_login');
	if (!dropdown.contains(event.target) && event.target !== userIcon) {
		dropdown.style.display = 'none';
	}
});

// Adiciona o evento de clique para selecionar um evento
document.querySelectorAll(".item_box").forEach((item) => {
	item.addEventListener("click", function() {
		selectEventForDeletion(this);
	});
});

//pop up de log
function toggleDropdown() {
	const dropdown = document.getElementById('user-dropdown');
	dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
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

// Função para selecionar um evento
function selectEvent(element) {
	// Remove a seleção anterior
	const previousSelected = document.querySelector(".item_box.selected");
	if (previousSelected) {
		previousSelected.classList.remove("selected");
	}
	// Marca o novo evento como selecionado
	element.classList.add("selected");
	selectedEvent = element;
}

// Abre o modal para adicionar um evento
function openAddItemModal() {
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

	const rawDate = dateElement.textContent.trim();
	const [day, month, year] = rawDate.split("/");

	const formattedDate = `${year}-${month}-${day}`;
	document.getElementById("event-date-edit").value = formattedDate;

}

// Fecha o modal
function closeModal() {
	const modal1 = document.getElementById("event-modal-add");
	const modal2 = document.getElementById("event-modal-edit");
	modal1.style.display = "none";
	modal2.style.display = "none";
}

// Função para habilitar o modo de exclusão
function enableDeleteMode() {
	deleteMode = true;
	alert("Clique em um evento para selecioná-lo para exclusão.");
}

// Função para selecionar um evento para exclusão
function selectEventForDeletion(element) {
	if (!deleteMode) return; // Só permite selecionar se o modo de exclusão estiver ativo

	// Remove a seleção anterior
	const previousSelected = document.querySelector(".gallery-item.selected");
	if (previousSelected) {
		previousSelected.classList.remove("selected");
	}

	const id = selectedEvent.querySelector(".gallery-id").textContent;
	// Marca o novo evento como selecionado
	element.classList.add("selected");
	selectedEvent = element;
	// Confirmação antes de excluir
	const confirmDelete = confirm("Tem certeza de que deseja excluir este evento?");
	if (confirmDelete) {
		fetch(`deleteEvento/${id}`, {
			method: 'POST'
		})
			.then(response => {
				if (response.redirected || response.ok) {
					selectedEvent.remove();
					selectedEvent = null;
					deleteMode = false;
					alert("Evento excluído com sucesso!");
				} else {
					alert("Erro ao excluir evento.");
				}
			})
			.catch(error => {
				console.error("Erro:", error);
				alert("Erro ao tentar excluir o evento.");
			});
	} else {
		// Caso o usuário cancele, desativa o modo de exclusão
		deleteMode = false;
		selectedEvent.classList.remove("selected");
		selectedEvent = null;
	}
}


/*//pop up de log
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
// Abre o modal para adicionar um item
function openAddItemModal() {
    document.getElementById("add-item-form").reset(); // Reseta os campos do formulário
    document.getElementById("add-item-modal").style.display = "block"; // Exibe o modal
}

// Fecha o modal
function closeModal() {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        modal.style.display = "none"; // Oculta todos os modais
    });

    // Remove a seleção do item ao fechar o modal
    if (selectedItem) {
        selectedItem.classList.remove("selected");
        selectedItem = null;
    }
}

// Salva o item na lista
function handleAddItemSubmit(e) {
    e.preventDefault(); // Evita o comportamento padrão do formulário

    const imgInput = document.getElementById("item-img");
    const time = document.getElementById("item-time").value;
    const location = document.getElementById("item-location").value;
    const name = document.getElementById("item-name").value;
    const description = document.getElementById("item-description").value;

    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!imgInput.files[0] || !time || !location || !name || !description) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Cria um URL temporário para a imagem
    const imgSrc = URL.createObjectURL(imgInput.files[0]);

    // Seleciona a lista de itens
    const list = document.getElementById("lost-and-found-list");

    // Cria um novo item
    const newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.setAttribute("onclick", "handleItemClick(this)");

    // Adiciona a imagem ao item
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = name;
    img.classList.add("item-img");

    // Adiciona os detalhes do item
    const timeElement = document.createElement("p");
    timeElement.innerHTML = `<strong>Horário:</strong> ${time}`;

    const locationElement = document.createElement("p");
    locationElement.innerHTML = `<strong>Local:</strong> ${location}`;

    const nameElement = document.createElement("p");
    nameElement.innerHTML = `<strong>Nome:</strong> ${name}`;

    const descriptionElement = document.createElement("p");
    descriptionElement.innerHTML = `<strong>Descrição:</strong> ${description}`;

    // Adiciona os elementos ao novo item
    newItem.appendChild(img);
    newItem.appendChild(timeElement);
    newItem.appendChild(locationElement);
    newItem.appendChild(nameElement);
    newItem.appendChild(descriptionElement);

    // Adiciona o novo item à lista
    list.appendChild(newItem);

    // Fecha o modal
    closeModal();

    // Exibe uma mensagem de sucesso
    alert("Item adicionado com sucesso!");
}

let selectedItem = null; // Armazena o item selecionado
let editMode = false; // Indica se o modo de edição está ativo
let deleteMode = false; // Indica se o modo de exclusão está ativo

// Função para habilitar o modo de edição
function enableEditMode() {
    editMode = true; // Ativa o modo de edição
    deleteMode = false; // Garante que o modo de exclusão esteja desativado
    document.getElementById("lost-and-found-list").classList.add("edit-mode");
    document.getElementById("lost-and-found-list").classList.remove("delete-mode");
}

// Função para habilitar o modo de exclusão
function enableDeleteMode() {
    deleteMode = true; // Ativa o modo de exclusão
    editMode = false; // Garante que o modo de edição esteja desativado
    document.getElementById("lost-and-found-list").classList.add("delete-mode");
    document.getElementById("lost-and-found-list").classList.remove("edit-mode");
}

// Função para adicionar um item à lista
function openAddItemModal() {
    document.getElementById("add-item-form").reset(); // Reseta os campos do formulário
    document.getElementById("add-item-modal").style.display = "block"; // Exibe o modal
}

// Fecha o modal
function closeModal() {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
        modal.style.display = "none";
    });

    // Remove a seleção do item ao fechar o modal
    if (selectedItem) {
        selectedItem.classList.remove("selected");
        selectedItem = null;
    }
}

// Salva o item na lista
function handleAddItemSubmit(e) {
    e.preventDefault(); // Evita o comportamento padrão do formulário

    const imgInput = document.getElementById("item-img");
    const time = document.getElementById("item-time").value;
    const location = document.getElementById("item-location").value;
    const name = document.getElementById("item-name").value;
    const description = document.getElementById("item-description").value;

    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!imgInput.files[0] || !time || !location || !name || !description) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Cria um URL temporário para a imagem
    const imgSrc = URL.createObjectURL(imgInput.files[0]);

    // Seleciona a lista de itens
    const list = document.getElementById("lost-and-found-list");

    // Cria um novo item
    const newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.setAttribute("onclick", "handleItemClick(this)");

    // Adiciona a imagem ao item
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = name;
    img.classList.add("item-img");

    // Adiciona os detalhes do item
    const timeElement = document.createElement("p");
    timeElement.innerHTML = `<strong>Horário:</strong> ${time}`;

    const locationElement = document.createElement("p");
    locationElement.innerHTML = `<strong>Local:</strong> ${location}`;

    const nameElement = document.createElement("p");
    nameElement.innerHTML = `<strong>Nome:</strong> ${name}`;

    const descriptionElement = document.createElement("p");
    descriptionElement.innerHTML = `<strong>Descrição:</strong> ${description}`;

    // Adiciona os elementos ao novo item
    newItem.appendChild(img);
    newItem.appendChild(timeElement);
    newItem.appendChild(locationElement);
    newItem.appendChild(nameElement);
    newItem.appendChild(descriptionElement);

    // Adiciona o novo item à lista
    list.appendChild(newItem);

    // Fecha o modal
    closeModal();

    // Exibe uma mensagem de sucesso
    alert("Item adicionado com sucesso!");
}

// Registra o evento de envio do formulário apenas uma vez
document.getElementById("add-item-form").addEventListener("submit", handleAddItemSubmit);

// Função para lidar com cliques em itens (editar ou excluir)
function handleItemClick(element) {
    if (editMode) {
        selectItemForEditing(element);
    } else if (deleteMode) {
        selectItemForDeletion(element);
    }
}

// Função para selecionar um item para edição
function selectItemForEditing(element) {
    if (!editMode) return; // Só permite selecionar se o modo de edição estiver ativo

    // Remove a seleção anterior
    const previousSelected = document.querySelector(".item.selected");
    if (previousSelected) {
        previousSelected.classList.remove("selected");
    }

    // Marca o novo item como selecionado
    element.classList.add("selected");
    selectedItem = element;

    // Preenche o modal com os dados do item selecionado
    const imgSrc = selectedItem.querySelector("img").src;
    const time = selectedItem.querySelector("p:nth-child(2)").textContent.replace("Horário: ", "").trim();
    const location = selectedItem.querySelector("p:nth-child(3)").textContent.replace("Local: ", "").trim();
    const name = selectedItem.querySelector("p:nth-child(4)").textContent.replace("Nome: ", "").trim();
    const description = selectedItem.querySelector("p:nth-child(5)").textContent.replace("Descrição: ", "").trim();

    document.getElementById("edit-item-time").value = time;
    document.getElementById("edit-item-location").value = location;
    document.getElementById("edit-item-name").value = name;
    document.getElementById("edit-item-description").value = description;

    // O campo de imagem não pode ser preenchido automaticamente por questões de segurança
    document.getElementById("edit-item-img").value = "";

    // Abre o modal
    document.getElementById("edit-item-modal").style.display = "block";

    // Desativa o modo de edição após abrir o modal
    editMode = false;
    document.getElementById("lost-and-found-list").classList.remove("edit-mode");
}

// Salva as alterações no item
document.getElementById("edit-item-form").addEventListener("submit", function (e) {
    e.preventDefault();

    if (!selectedItem) return; // Garante que um item esteja selecionado

    const imgInput = document.getElementById("edit-item-img");
    const time = document.getElementById("edit-item-time").value;
    const location = document.getElementById("edit-item-location").value;
    const name = document.getElementById("edit-item-name").value;
    const description = document.getElementById("edit-item-description").value;

    if (imgInput.files[0]) {
        const imgSrc = URL.createObjectURL(imgInput.files[0]);
        selectedItem.querySelector("img").src = imgSrc;
    }

    selectedItem.querySelector("p:nth-child(2)").innerHTML = `<strong>Horário:</strong> ${time}`;
    selectedItem.querySelector("p:nth-child(3)").innerHTML = `<strong>Local:</strong> ${location}`;
    selectedItem.querySelector("p:nth-child(4)").innerHTML = `<strong>Nome:</strong> ${name}`;
    selectedItem.querySelector("p:nth-child(5)").innerHTML = `<strong>Descrição:</strong> ${description}`;

    closeModal(); // Fecha o modal após salvar as alterações
    alert("Item editado com sucesso!");
});

// Função para selecionar um item para exclusão
function selectItemForDeletion(element) {
    if (!deleteMode) return; // Só permite selecionar se o modo de exclusão estiver ativo

    // Remove a seleção anterior
    const previousSelected = document.querySelector(".item.selected");
    if (previousSelected) {
        previousSelected.classList.remove("selected");
    }

    // Marca o novo item como selecionado
    element.classList.add("selected");
    selectedItem = element;

    // Exibe o pop-up de confirmação
    const confirmation = confirm("Tem certeza de que deseja excluir este item?");
    if (confirmation) {
        // Remove o item da lista
        selectedItem.remove();
        selectedItem = null;

        // Desativa o modo de exclusão
        deleteMode = false;
        document.getElementById("lost-and-found-list").classList.remove("delete-mode");
    } else {
        // Caso o usuário cancele, remove a seleção
        selectedItem.classList.remove("selected");
        selectedItem = null;
    }
}*/

