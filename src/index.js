'use sctrict';

//checkbox
const checkbox = document.querySelectorAll('.filter-check_checkbox');
const btnCart = document.getElementById('cart');
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

//end checkbox

//корзина

btnCart.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

cartModal.addEventListener(('click'), (event) => {

    const target = event.target;
    if (target.classList.contains('cart') || target.classList.contains('cart-close')) {
        cartModal.style.display = 'none';
    }
});
//end корзина