document.addEventListener('DOMContentLoaded', () => {
  const products = [
    {
      id: 1,
      name: "Гостиная",
      characteristics: "Современный интерьер с открытым пространством, большими окнами и минималистичной мебелью.",
      price: "150,000 руб.",
      image: "https://i.pinimg.com/474x/a8/9c/70/a89c706ebbd19beefec394f480f68154.jpg"
    },
    {
      id: 2,
      name: "Кухня",
      characteristics: "Скандинавский стиль с белыми фасадами и деревянными элементами.",
      price: "100,000 руб.",
      image: "https://i.pinimg.com/474x/a6/36/21/a63621ddde5fd5d0e87f30608698102a.jpg"
    },
    {
      id: 3,
      name: "Спальня",
      characteristics: "Уютная спальня с мягкими текстурами и атмосферным освещением.",
      price: "120,000 руб.",
      image: "https://i.pinimg.com/originals/ed/3d/06/ed3d06d62a07bb9160c62166fa1f4ea0.jpg"
    },
    {
      id: 4,
      name: "Ванная комната",
      characteristics: "Современная ванная с элементами из натурального камня и стекла.",
      price: "80,000 руб.",
      image: "https://i.pinimg.com/originals/6a/b1/c1/6ab1c151b67a8b01d85de47dda858b49.jpg"
    },
    {
      id: 5,
      name: "Кабинет",
      characteristics: "Просторный кабинет с большим рабочим столом и стеллажами для книг.",
      price: "110,000 руб.",
      image: "https://i.pinimg.com/474x/55/54/89/5554899381096df813ac6353c18f03aa.jpg"
    },
    {
      id: 6,
      name: "Кухня",
      characteristics: "Скандинавский стиль с белыми фасадами и деревянными элементами.",
      price: "100,000 руб.",
      image: "https://i.pinimg.com/474x/a6/36/21/a63621ddde5fd5d0e87f30608698102a.jpg"
    },
    {
      id: 7,
      name: "Спальня",
      characteristics: "Уютная спальня с мягкими текстурами и атмосферным освещением.",
      price: "120,000 руб.",
      image: "https://i.pinimg.com/originals/ed/3d/06/ed3d06d62a07bb9160c62166fa1f4ea0.jpg"
    },
    {
      id: 8,
      name: "Ванная комната",
      characteristics: "Современная ванная с элементами из натурального камня и стекла.",
      price: "80,000 руб.",
      image: "https://i.pinimg.com/originals/6a/b1/c1/6ab1c151b67a8b01d85de47dda858b49.jpg"
    },
    {
      id: 9,
      name: "Кабинет",
      characteristics: "Просторный кабинет с большим рабочим столом и стеллажами для книг.",
      price: "110,000 руб.",
      image: "https://i.pinimg.com/474x/55/54/89/5554899381096df813ac6353c18f03aa.jpg"
    }
  ];

  const productsPerPage = 9;
  let currentPage = 1;

  function renderProducts(page) {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    const paginatedProducts = products.slice(start, end);

    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = ''; // Clear previous content

    paginatedProducts.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <h3>${product.name}</h3>
        <p>${product.characteristics}</p>
        <div class="price">${product.price}</div>
        <input type="number" class="product-quantity" min="0" placeholder="Quantity">
      `;
      productGrid.appendChild(card);
    });
  }

  function renderPagination() {
    const pageCount = Math.ceil(products.length / productsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= pageCount; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.classList.add('page-button');
      if (i === currentPage) {
        button.classList.add('disabled');
      }
      button.addEventListener('click', () => {
        currentPage = i;
        renderProducts(currentPage);
        renderPagination();
      });
      pagination.appendChild(button);
    }
  }

  function updateTotalQuantity() {
    const quantities = document.querySelectorAll(".product-quantity");
    let totalQuantity = 0;

    quantities.forEach((input) => {
      const value = parseInt(input.value, 10) || 0; // Если значение не числовое, используем 0
      totalQuantity += value;
    });

    const totalCountElement = document.getElementById("totalCount");
    totalCountElement.textContent = `Общее количество товаров: ${totalQuantity}`;
  }

  // Добавляем обработчик на изменение инпутов для обновления общего количества
  document.getElementById('productGrid').addEventListener('input', updateTotalQuantity);

  renderProducts(currentPage);
  renderPagination();
});
