function toggleDropdown() {
	const dropdown = document.getElementById('user-dropdown');
	dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}


// Fecha o dropdown ao clicar fora dele
document.addEventListener('click', function(event) {
	const dropdown = document.getElementById('user-dropdown');
	const userIcon = document.querySelector('.img_nav_login');
	if (!dropdown.contains(event.target) && event.target !== userIcon) {
		dropdown.style.display = 'none';
	}
});

function updateLocationInfo() {
	const locationSelect = document.getElementById('location');
	const selectedOption = locationSelect.options[locationSelect.selectedIndex];
	const imageSrc = selectedOption.getAttribute('data-img');
	const description = selectedOption.getAttribute('data-desc');

	// Atualiza a imagem e a descrição
	document.getElementById('location-image').src = imageSrc;
	document.getElementById('location-description').textContent = description;
}
