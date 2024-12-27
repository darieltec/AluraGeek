// Referencias al DOM
const productForm = document.getElementById("product-form");
const productContainer = document.getElementById("product-container");

// Función para agregar un producto
function addProduct(event) {
  event.preventDefault();

  // Obtener valores del formulario
  const name = document.getElementById("product-name").value;
  const price = document.getElementById("product-price").value;
  const image = document.getElementById("product-image").value;

  // Crear elemento de producto
  const product = document.createElement("div");
  product.classList.add("product");
  product.innerHTML = `
    <img src="${image}" alt="${name}">
    <h4>${name}</h4>
    <p>S/. ${price}</p>
    <button class="delete-btn" title="Eliminar producto">🗑️</button>
  `;

  // Agregar funcionalidad de eliminar
  product.querySelector(".delete-btn").addEventListener("click", () => {
    product.remove();
  });

  // Agregar producto al contenedor
  productContainer.appendChild(product);

  // Limpiar formulario
  productForm.reset();
}

// Escuchar evento de envío
productForm.addEventListener("submit", addProduct);


