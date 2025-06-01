function redirectToForm(button) {
    const productName = button.getAttribute('data-product');
    const productImg = button.getAttribute('data-img');
    const productPrice = button.getAttribute('data-price');
    window.location.href = `form.html?product=${encodeURIComponent(productName)}&img=${encodeURIComponent(productImg)}&price=${encodeURIComponent(productPrice)}`;
}