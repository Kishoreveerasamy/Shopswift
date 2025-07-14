let selectedCategory = 'All';  // Default category

// 🔁 Filter Function: Applies BOTH search and category filter
function filterProducts() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const products = document.querySelectorAll('#productList > .col-md-3');

  products.forEach(product => {
    const title = product.querySelector('.card-title').innerText.toLowerCase();
    const category = product.getAttribute('data-category');

    const matchesCategory = (selectedCategory === 'All' || category === selectedCategory);
    const matchesSearch = title.includes(searchTerm);

    product.style.display = (matchesCategory && matchesSearch) ? 'block' : 'none';
  });
}

// ✅ Category Filter Handler
document.querySelectorAll('.category-filter').forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    selectedCategory = this.getAttribute('data-category');
    filterProducts();  // Apply combined filter
  });
});

// ✅ Search Filter Handler
document.getElementById('searchInput').addEventListener('keyup', filterProducts);


// ✅ Modal Trigger - Works fine, keep it
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

// ✅ Order Submit Redirect
document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();
  window.location.href = 'order-success.html';
});
