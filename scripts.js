let cart = [];
let cartCount = 0;

function showLoginForm() {
  document.getElementById('login-section').style.display = 'block';
  document.getElementById('register-section').style.display = 'none';
}

function showRegisterForm() {
  document.getElementById('login-section').style.display = 'none';
  document.getElementById('register-section').style.display = 'block';
}

function showCatalog() {
  document.getElementById('catalog-section').style.display = 'block';
  document.getElementById('cart-page').style.display = 'none';
}

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  cartCount++;
  updateCartIcon();
  alert(`${productName} ha sido añadido al carrito.`);
}

function updateCartIcon() {
  document.getElementById('cart-count').textContent = cartCount;
}

function showCart() {
  document.getElementById('catalog-section').style.display = 'none';
  document.getElementById('cart-page').style.display = 'block';
  updateCartPage();
}

function updateCartPage() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
  let total = 0;

  for (let item of cart) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price.toFixed(2)}</span>
    `;
    cartItemsContainer.appendChild(cartItem);
    total += item.price;
  }

  document.getElementById('cart-total').textContent = total.toFixed(2);
}

function logout() {
  document.getElementById('main-nav').style.display = 'none';
  document.getElementById('cart-icon').style.display = 'none';
  document.getElementById('catalog-section').style.display = 'none';
  document.getElementById('cart-page').style.display = 'none';
  document.getElementById('login-section').style.display = 'block';
  cart = [];
  cartCount = 0;
  updateCartIcon();
}

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('login-section').style.display = 'none';
  document.getElementById('main-nav').style.display = 'block';
  document.getElementById('cart-icon').style.display = 'block';
  document.getElementById('catalog-section').style.display = 'block';
});

document.getElementById('register-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Registro exitoso. Por favor, inicia sesión.');
  showLoginForm();
});

document.getElementById('checkout-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
  const deliveryMethod = document.querySelector('input[name="delivery-method"]:checked').value;
  alert(`Gracias por tu compra! Método de pago: ${paymentMethod}, Método de entrega: ${deliveryMethod}`);
  cart = [];
  cartCount = 0;
  updateCartIcon();
  showCatalog();
});
