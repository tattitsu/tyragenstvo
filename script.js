// Данные для карточек туров
const toursData = [
    {
        id: 1,
        title: "Волшебная Италия",
        location: "Италия: Рим, Флоренция, Венеция",
        duration: "10 дней",
        price: 125000,
        image: "images/2.jpg",
        description: "Увлекательное путешествие по самым красивым городам Италии. Вы увидите древний Рим, романтичную Венецию и живописную Флоренцию.",
        included: [
            "Авиаперелет Москва-Рим, Венеция-Москва",
            "Проживание в отелях 4* с завтраками",
            "Трансферы и все переезды по маршруту",
            "Экскурсии с профессиональным гидом",
            "Входные билеты в музеи и достопримечательности",
            "Медицинская страховка"
        ],
        program: [
            "День 1: Прибытие в Рим, трансфер в отель, свободное время",
            "День 2-3: Экскурсии по Риму: Колизей, Ватикан, фонтан Треви",
            "День 4: Переезд во Флоренцию, обзорная экскурсия",
            "День 5: Свободный день во Флоренции или экскурсия в Пизу",
            "День 6-7: Переезд в Венецию, прогулка на гондоле",
            "День 8-9: Свободное время в Венеции, шопинг",
            "День 10: Трансфер в аэропорт, вылет в Москву"
        ]
    },
    {
        id: 2,
        title: "Греческие острова",
        location: "Греция: Санторини, Миконос, Крит",
        duration: "8 дней",
        price: 98000,
        image: "images/3.jpg",
        description: "Незабываемое путешествие по самым красивым островам Греции. Белоснежные домики, лазурное море и потрясающие закаты.",
        included: [
            "Авиаперелет Москва-Афины, Афины-Москва",
            "Внутренние перелеты между островами",
            "Проживание в отелях 4* с завтраками",
            "Трансферы и все переезды по маршруту",
            "Морские экскурсии на катере",
            "Медицинская страховка",
            "Ужины на Санторини"
        ],
        program: [
            "День 1: Прибытие в Афины, перелет на Санторини",
            "День 2-3: Экскурсии по Санторини, посещение Ии",
            "День 4: Переезд на пароме на Миконос",
            "День 5: Свободный день на Миконосе",
            "День 6: Перелет на Крит, экскурсия в Кносский дворец",
            "День 7: Свободный день на Крите",
            "День 8: Трансфер в аэропорт, вылет в Москву"
        ]
    },
    {
        id: 3,
        title: "Испанское побережье",
        location: "Испания: Барселона, Коста-Брава",
        duration: "7 дней",
        price: 75000,
        image: "images/4.jpg",
        description: "Комбинированный тур с осмотром достопримечательностей Барселоны и отдыхом на лучших пляжах Коста-Бравы.",
        included: [
            "Авиаперелет Москва-Барселона, Барселона-Москва",
            "Проживание в отелях 4* с завтраками",
            "Трансферы и все переезды по маршруту",
            "Обзорная экскурсия по Барселоне",
            "Входные билеты в Саграда Фамилия",
            "Медицинская страховка"
        ],
        program: [
            "День 1: Прибытие в Барселону, трансфер в отель",
            "День 2: Обзорная экскурсия по Барселоне",
            "День 3: Посещение Саграда Фамилия и парка Гуэль",
            "День 4: Переезд в Коста-Брава, размещение в отеле",
            "День 5-6: Свободное время на пляже",
            "День 7: Трансфер в аэропорт, вылет в Москву"
        ]
    },
    {
        id: 4,
        title: "Париж и Лазурный берег",
        location: "Франция: Париж, Ницца, Канны",
        duration: "9 дней",
        price: 115000,
        image: "images/5.jpg",
        description: "Романтичное путешествие по самой элегантной стране Европы. От величественного Парижа до солнечного Лазурного берега.",
        included: [
            "Авиаперелет Москва-Париж, Ницца-Москва",
            "Проживание в отелях 4* с завтраками",
            "Трансферы и все переезды по маршруту",
            "Обзорная экскурсия по Парижу",
            "Билеты на Эйфелеву башню",
            "Экскурсия в Версаль",
            "Медицинская страховка"
        ],
        program: [
            "День 1: Прибытие в Париж, трансфер в отель",
            "День 2: Обзорная экскурсия по Парижу",
            "День 3: Экскурсия в Версаль",
            "День 4: Свободный день в Париже",
            "День 5: Переезд в Ниццу на скоростном поезде",
            "День 6-7: Экскурсии по Лазурному берегу",
            "День 8: Свободный день в Ницце",
            "День 9: Трансфер в аэропорт, вылет в Москву"
        ]
    },
    {
        id: 5,
        title: "Райские Мальдивы",
        location: "Мальдивы: атолл Северный Мале",
        duration: "7 дней",
        price: 145000,
        image: "images/6.jpg",
        description: "Идеальный отдых на райских островах. Кристально чистая вода, белоснежные пляжи и комфортабельные бунгало над водой.",
        included: [
            "Авиаперелет Москва-Мале, Мале-Москва",
            "Проживание в бунгало над водой 5*",
            "Трансфер на гидросамолете до острова",
            "Питание 'всё включено'",
            "Сноркелинг с маской и трубкой",
            "Спа-процедуры на выбор",
            "Медицинская страховка"
        ],
        program: [
            "День 1: Прибытие в Мале, трансфер на гидросамолете на остров",
            "День 2-6: Отдых на острове, сноркелинг, спа-процедуры",
            "День 7: Трансфер в аэропорт, вылет в Москву"
        ]
    },
    {
        id: 6,
        title: "Экзотический Тайланд",
        location: "Тайланд: Бангкок, Пхукет",
        duration: "10 дней",
        price: 89000,
        image: "images/7.jpg",
        description: "Экзотическое путешествие в страну улыбок. Яркий Бангкок и райский остров Пхукет ждут вас.",
        included: [
            "Авиаперелет Москва-Бангкок, Пхукет-Москва",
            "Проживание в отелях 4-5* с завтраками",
            "Трансферы и все переезды по маршруту",
            "Экскурсия по Бангкоку",
            "Экскурсия на острова Пхи-Пхи",
            "Тайский массаж",
            "Медицинская страховка"
        ],
        program: [
            "День 1: Прибытие в Бангкок, трансфер в отель",
            "День 2: Обзорная экскурсия по Бангкоку",
            "День 3: Посещение плавучего рынка",
            "День 4: Перелет на Пхукет, размещение в отеле",
            "День 5-8: Отдых на Пхукете, экскурсии",
            "День 9: Свободный день, шопинг",
            "День 10: Трансфер в аэропорт, вылет в Москву"
        ]
    }
];


// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Скрываем прелоадер через 2 секунды
    setTimeout(function() {
        document.getElementById('preloader').classList.add('loaded');
        document.body.style.overflow = 'auto';
        
        // Инициализация всех функций после загрузки
        setTimeout(function() {
            initTours();
            initMenu();
            initForm();
            initBackToTop();
            initSorting();
            initModal();
            initNewsletter();
            initScrollAnimations();
        }, 500);
    }, 2000);
});

// Инициализация карточек туров
function initTours() {
    const toursContainer = document.getElementById('toursContainer');
    toursContainer.innerHTML = '';
    
    // Сортируем туры по id (по умолчанию)
    const sortedTours = [...toursData].sort((a, b) => a.id - b.id);
    
    sortedTours.forEach(tour => {
        const tourCard = document.createElement('div');
        tourCard.className = 'tour-card';
        tourCard.setAttribute('data-price', tour.price);
        tourCard.setAttribute('data-duration', parseInt(tour.duration));
        
        tourCard.innerHTML = `
            <div class="tour-img-container">
                <img src="${tour.image}" alt="${tour.title}" class="tour-img">
            </div>
            <div class="tour-info">
                <h3 class="tour-title">${tour.title}</h3>
                <div class="tour-location">
                    <i class="fas fa-map-marker-alt"></i> ${tour.location}
                </div>
                <div class="tour-details">
                    <div class="tour-duration">
                        <i class="far fa-calendar-alt"></i> ${tour.duration}
                    </div>
                    <div class="tour-price">${tour.price.toLocaleString()} ₽</div>
                </div>
                <button class="tour-btn" data-tour-id="${tour.id}">Подробнее</button>
            </div>
        `;
        
        toursContainer.appendChild(tourCard);
    });
    
    // Добавляем обработчики событий для кнопок "Подробнее"
    document.querySelectorAll('.tour-btn').forEach(button => {
        button.addEventListener('click', function() {
            const tourId = parseInt(this.getAttribute('data-tour-id'));
            openTourModal(tourId);
        });
    });
}

// Инициализация меню
function initMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Переключение мобильного меню
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            this.innerHTML = navList.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : 
                '<i class="fas fa-bars"></i>';
        });
    }
    
    // Плавная прокрутка по якорям
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Закрываем мобильное меню если открыто
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            // Обновляем активную ссылку
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Плавная прокрутка
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Обновление активной ссылки при прокрутке
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Инициализация формы заявки
function initForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Получаем значения полей
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const destination = document.getElementById('destination').value;
            
            // Валидация
            if (!name || !phone || !destination) {
                showFormMessage('Пожалуйста, заполните все обязательные поля', 'error');
                return;
            }
            
            if (phone.length < 10) {
                showFormMessage('Введите корректный номер телефона', 'error');
                return;
            }
            
            // Имитация отправки на сервер
            showFormMessage('Отправка данных...', '');
            
            setTimeout(() => {
                showFormMessage('Спасибо! Мы свяжемся с вами в ближайшее время.', 'success');
                contactForm.reset();
                
                // Скрываем сообщение через 5 секунд
                setTimeout(() => {
                    formMessage.textContent = '';
                    formMessage.className = 'form-message';
                }, 5000);
            }, 1500);
        });
    }
    
    function showFormMessage(text, type) {
        if (formMessage) {
            formMessage.textContent = text;
            formMessage.className = 'form-message';
            if (type) {
                formMessage.classList.add(type);
            }
        }
    }
}

// Инициализация кнопки "Наверх"
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Инициализация сортировки
function initSorting() {
    const sortDefault = document.getElementById('sortDefault');
    const sortPrice = document.getElementById('sortPrice');
    const sortDuration = document.getElementById('sortDuration');
    
    if (sortDefault && sortPrice && sortDuration) {
        sortDefault.addEventListener('click', function() {
            setActiveSortBtn(this);
            sortTours('default');
        });
        
        sortPrice.addEventListener('click', function() {
            setActiveSortBtn(this);
            sortTours('price');
        });
        
        sortDuration.addEventListener('click', function() {
            setActiveSortBtn(this);
            sortTours('duration');
        });
    }
    
    function setActiveSortBtn(activeBtn) {
        document.querySelectorAll('.sort-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    }
}

// Сортировка туров
function sortTours(sortBy) {
    const toursContainer = document.getElementById('toursContainer');
    const tourCards = Array.from(document.querySelectorAll('.tour-card'));
    
    tourCards.sort((a, b) => {
        if (sortBy === 'price') {
            return parseInt(a.getAttribute('data-price')) - parseInt(b.getAttribute('data-price'));
        } else if (sortBy === 'duration') {
            return parseInt(a.getAttribute('data-duration')) - parseInt(b.getAttribute('data-duration'));
        } else {
            // По умолчанию - по id
            const idA = parseInt(tourCards.indexOf(a));
            const idB = parseInt(tourCards.indexOf(b));
            return idA - idB;
        }
    });
    
    // Анимация перестановки
    toursContainer.innerHTML = '';
    tourCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        toursContainer.appendChild(card);
    });
    
    // Перепривязываем обработчики событий
    document.querySelectorAll('.tour-btn').forEach(button => {
        button.addEventListener('click', function() {
            const tourId = parseInt(this.getAttribute('data-tour-id'));
            openTourModal(tourId);
        });
    });
}

// Инициализация модального окна
function initModal() {
    const modal = document.getElementById('tourModal');
    const closeBtn = document.querySelector('.modal-close');
    
    if (modal && closeBtn) {
        // Закрытие по клику на крестик
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        // Закрытие по клику вне модального окна
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // Закрытие по клавише Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                modal.style.display = 'none';
            }
        });
    }
}

// Открытие модального окна с информацией о туре
function openTourModal(tourId) {
    const modal = document.getElementById('tourModal');
    const tour = toursData.find(t => t.id === tourId);
    
    if (!tour || !modal) return;
    
    // Заполняем данные
    document.getElementById('modalTitle').textContent = tour.title;
    document.getElementById('modalLocation').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${tour.location}`;
    document.getElementById('modalDuration').textContent = tour.duration;
    document.getElementById('modalPrice').textContent = `${tour.price.toLocaleString()} ₽`;
    document.getElementById('modalImage').src = tour.image;
    document.getElementById('modalImage').alt = tour.title;
    document.getElementById('modalDescription').textContent = tour.description;
    
    // Заполняем список "Что включено"
    const includedList = document.getElementById('modalIncluded');
    includedList.innerHTML = '';
    tour.included.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        includedList.appendChild(li);
    });
    
    // Заполняем программу тура
    const programDiv = document.getElementById('modalProgram');
    programDiv.innerHTML = '';
    tour.program.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        programDiv.appendChild(dayDiv);
    });
    
    // Показываем модальное окно
    modal.style.display = 'flex';
}

// Инициализация формы рассылки
function initNewsletter() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                // Имитация отправки
                alert('Спасибо за подписку! Теперь вы будете первыми получать горящие предложения.');
                emailInput.value = '';
            }
        });
    }
}

// Анимация элементов при прокрутке
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.tour-card, .included-item, .review-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}