$('.dropdown-toggle').dropdown()

const container = document.querySelector('.selected-dropdown-item');
const wallet = document.querySelector('.wallet-address');
const paypalInputField = document.querySelector('.second-input-paypal')
const nonePaypalInputField = document.querySelector('.second-input')
const form = document.querySelector('.deposit-payment')

$('.dropdown-menu').on('click', function (e) {

  if (e.target.textContent === 'Pay pal') {
    wallet.style.display = 'none';
    paypalInputField.classList.remove('paypal-inactive')
    nonePaypalInputField.classList.add('paypal-inactive')
    form.style.height = '75%'
  } 
  
  // if (e.target.textContent !== 'Pay pal') 
  else { 
    wallet.style.display = 'block';
    paypalInputField.classList.add('paypal-inactive')
    nonePaypalInputField.classList.remove('paypal-inactive')
    form.style.height = '140px'
  }

    container.textContent = e.target.textContent;
  })