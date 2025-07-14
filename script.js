// Product Order Modal Trigger
document.querySelectorAll('.orderBtn').forEach(button => {
  button.addEventListener('click', function () {
    const productCard = this.closest('.product-card');
    const productName = productCard.querySelector('.card-title').innerText;
    const productImage = productCard.querySelector('.card-img-top').getAttribute('src');

    document.getElementById('selectedProduct').innerText = "You selected: " + productName;
    document.getElementById('selectedProductImage').setAttribute('src', productImage);

    const orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
    orderModal.show();
  });
});


// Order Form Submission (Optional Alert)
document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();
  window.location.href = 'order-success.html';
});


// Live Product Search
function searchProducts() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const productCards = document.querySelectorAll('#productList > .col-md-3');

  productCards.forEach(card => {
    const title = card.querySelector('.card-title').innerText.toLowerCase();
    if (title.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// (live search)
document.getElementById('searchInput').addEventListener('keyup', searchProducts);
document.getElementById('searchBtn').addEventListener('click', searchProducts);


// Category filter
document.querySelectorAll('.category-filter').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const selectedCategory = this.getAttribute('data-category');
    const allProducts = document.querySelectorAll('#productList .col-md-3');

    allProducts.forEach(product => {
      const productCategory = product.getAttribute('data-category');
      if (selectedCategory === 'All' || productCategory === selectedCategory) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  });
});
