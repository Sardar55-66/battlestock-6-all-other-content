$('.input-file input[type=file]').on('change', function(){
	let file = this.files[0];
	$(this).closest('.input-file').find('.input-file-text').html(file.name);
});




const checkboxLabels = Array.from(document.querySelectorAll('.register-link'))

checkboxLabels.forEach(el => {
	el.addEventListener('click', (e) => {
		checkboxLabels.forEach(el => el.classList.remove('add-square'))
		e.target.classList.add('add-square')
	})
})