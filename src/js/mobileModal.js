const mobileModal = document.querySelector('.mobile-menu_modal');
const openButton = document.querySelector('.burger')

openButton.addEventListener('click', () => {
    if (mobileModal.classList.contains('activation-mobile-menu_modal')) {
        mobileModal.classList.remove('activation-mobile-menu_modal')
    } else if (!mobileModal.classList.contains('activation-mobile-menu_modal')) {
        mobileModal.classList.add('activation-mobile-menu_modal')
    }
})


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })