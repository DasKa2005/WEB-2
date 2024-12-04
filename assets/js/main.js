const serviceCards = document.querySelectorAll('.service-card');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

const serviceDetails = [
  {
    title: "Дизайн интерьеров",
    content: "Создаем уникальные концепции дизайна, учитывающие ваши предпочтения и стиль. Мы поможем вам визуализировать пространство и сделать его функциональным и уютным."
  },
  {
    title: "Выбор мебели",
    content: "Поможем выбрать качественную и стильную мебель для вашего пространства. Наши эксперты помогут подобрать элементы, которые идеально впишутся в ваш интерьер."
  },
  {
    title: "Консультации по цветам",
    content: "Советы по выбору цветовой палитры, которая гармонирует с вашим интерьером. Мы поможем вам найти идеальные сочетания."
  },
  {
    title: "Ремонт и отделка",
    content: "Полный спектр услуг по ремонту и отделке, чтобы ваш интерьер был идеальным. Мы гарантируем высокое качество выполнения работ."
  },
  {
    title: "Декорирование",
    content: "Выбор и расстановка декоративных элементов для завершения образа. Сделаем ваш дом стильным и уютным."
  },
  {
    title: "Планирование пространства",
    content: "Эффективное использование пространства для удобства и функциональности. Мы поможем организовать ваш интерьер."
  },
  {
    title: "Ландшафтный дизайн",
    content: "Создаем красивые и функциональные внешние пространства для вашего дома. Мы поможем оформить ваш участок."
  },
  {
    title: "Анализ стиля",
    content: "Помогаем выбрать стиль, который отражает вашу индивидуальность. Мы учитываем все ваши пожелания."
  },
  {
    title: "Технический надзор",
    content: "Обеспечиваем контроль за качеством работ на каждом этапе проекта. Мы следим за выполнением всех норм и стандартов."
  },
  {
    title: "Освещение",
    content: "Разработка концепции освещения для создания комфортной атмосферы. Мы подберем идеальные решения для вашего пространства."
  }
];

// Функция для открытия модального окна
function openModal(index) {
  const service = serviceDetails[index];
  modalContent.innerHTML = `<h2>${service.title}</h2><p>${service.content}</p>`;
  modalOverlay.style.display = 'flex';
}

// Функция для закрытия модального окна
function closeModalFunc() {
  modalOverlay.style.display = 'none';
}

// Привязываем обработчики событий к карточкам
serviceCards.forEach((card, index) => {
  card.addEventListener('click', () => openModal(index));
});

// Закрываем модальное окно при нажатии на кнопку закрытия
closeModal.addEventListener('click', closeModalFunc);

// Закрываем модальное окно при клике вне его
modalOverlay.addEventListener('click', closeModalFunc);

// Получаем элементы
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');
const navbarLinks = document.querySelectorAll('.navbar-links a');
const sections = document.querySelectorAll('section');

// Функция для открытия бокового меню
menuToggle.addEventListener('click', () => {
  sidebar.style.display = 'block';
});

// Функция для закрытия бокового меню
closeSidebar.addEventListener('click', () => {
  sidebar.style.display = 'none';
});

// Подсветка активного раздела
window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navbarLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("closeSidebar");
  const overlay = document.getElementById("overlay");

  // Функция для открытия сайдбара
  const openSidebar = () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
  };

  // Функция для закрытия сайдбара
  const closeSidebarFunc = () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  };

  // Обработчики событий
  menuToggle.addEventListener("click", openSidebar);
  closeSidebar.addEventListener("click", closeSidebarFunc);
  overlay.addEventListener("click", closeSidebarFunc);
});
