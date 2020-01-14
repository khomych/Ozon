'use sctrict';

//checkbox
const checkbox = document.querySelectorAll('.filter-check_checkbox');
const cart = document.getElementById('cart');
const cartModal = document.querySelector('.cart');

checkbox.forEach((item) => {
    item.addEventListener(('change'), function() {
        if (item.checked) {
            item.nextElementSibling.classList.add('checked');
        } else {
            item.nextElementSibling.classList.remove('checked');
        }
    });
});


cart.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

cartModal.addEventListener(('click'), (event) => {

    const target = event.target;
    if (target.classList.contains('cart') || target.classList.contains('cart-close')) {
        cartModal.style.display = 'none';
    }
});
//end checkbox