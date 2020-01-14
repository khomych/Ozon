'use sctrict';

//checkbox
const checkbox = document.querySelectorAll('.filter-check_checkbox');
const btnCart = document.getElementById('cart');
const cartModal = document.querySelector('.cart');

const cards = document.querySelectorAll('.goods .card');

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
    document.body.style.overflow = 'hidden';
});

cartModal.addEventListener(('click'), (event) => {

    const target = event.target;
    if (target.classList.contains('cart') || target.classList.contains('cart-close')) {
        cartModal.style.display = 'none';
        document.body.style.overflow = '';
    }
});
//end корзина

//работа с товаром
cards.forEach(card => {
    const btn = card.querySelector('button');
    btn.addEventListener('click', () => {


    });
});
//end работа с товаром