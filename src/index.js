'use sctrict';

//checkbox
const checkbox = document.getElementById('discount-checkbox');
const cart = document.getElementById('cart');
const cartModal = document.querySelector('.cart');


checkbox.addEventListener(('change'), function() {
    if (this.checked) {
        this.nextElementSibling.classList.add('checked');
    } else {
        this.nextElementSibling.classList.remove('checked');
    }

});

cart.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});
//end checkbox