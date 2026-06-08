const books = [
    {
        id: 1,
        title: "Từ điển lịch sử Việt Nam ",
        author: "Trần Quốc Vượng",
        price: 249000,
        oldPrice: 329000,
        category: "Lịch sử cổ đại",
        rating: 4.5,
        imageUrl: "https://tse1.mm.bing.net/th/id/OIP.LzhzIiPnbEqF4TBiqpMV8gAAAA?pid=Api&h=220&P=0",
        description: "Những giai đoạn lịch sử sơ kỳ của nước ta từ thời Đông Sơn đến độc lập",
        pages: 456,
        publisher: "Từ điển Việt Nam ",
        year: 2023
    },
    {
        id: 2,
        title: "Cách mạng Tháng Tám năm 1945",
        author: "Hồ Chí Minh",
        price: 189000,
        oldPrice: 269000,
        category: "Lịch sử cách mạng",
        rating: 4.8,
        imageUrl: "https://tse2.mm.bing.net/th/id/OIP.f77PVna6OGe9U-yJi1rDNgHaK2?pid=Api&h=220&P=0",
        description: "Hành trình cách mạng vẫn mãi còn in sâu trong lòng dân tộc",
        pages: 368,
        publisher: "Nhà xuất bản Chính trị Quốc gia",
        year: 2022
    },
    {
        id: 3,
        title: "Chiến tranh Việt Nam - Sự thật lịch sử",
        author: "Bùi Tín",
        price: 159000,
        oldPrice: 229000,
        category: "Lịch sử hiện đại",
        rating: 4.6,
        imageUrl: "https://tse2.mm.bing.net/th/id/OIP.eaNBc0K5Dg3XzM5PFCuQTgHaHa?pid=Api&h=220&P=0",
        description: "Những trang sử đau thương nhưng vinh quang của dân tộc Việt",
        pages: 312,
        publisher: "Nhà xuất bản Thế giới",
        year: 2021
    },
    {
        id: 4,
        title: "Tây Sơn - Thế lực thay đổi lịch sử",
        author: "Trương Như Ấu",
        price: 199000,
        oldPrice: 279000,
        category: "Lịch sử cổ đại",
        rating: 4.4,
        imageUrl: "https://tse2.mm.bing.net/th/id/OIP.18IGykoOEhmtUl0Z6Z1EhwHaJW?pid=Api&h=220&P=0",
        description: "Cuộc nổi dậy anh hùng của nhân dân Tây Sơn thay đổi định mệnh",
        pages: 420,
        publisher: "Nhà xuất bản Hội Nhà văn",
        year: 2023
    },
    {
        id: 5,
        title: "Hồ Chí Minh - Lãnh tụ vĩ đại",
        author: "Võ Văn Kiệt",
        price: 219000,
        oldPrice: 299000,
        category: "Tiểu sử lịch sử",
        rating: 4.7,
        imageUrl: "https://tse4.mm.bing.net/th/id/OIP.4EgMpAJoFQiRFVeHfz40gAHaLD?pid=Api&h=220&P=0",
        description: "Cuộc đời và sự nghiệp của Bác Hồ - vị lãnh tụ vĩ đại của dân tộc",
        pages: 525,
        publisher: "Nhà xuất bản Chính trị Quốc gia",
        year: 2022
    },
    {
        id: 6,
        title: "Văn hóa Việt Nam qua các thời kỳ",
        author: "Trần Văn Giáp",
        price: 169000,
        oldPrice: 239000,
        category: "Văn hóa - Lịch sử",
        rating: 4.9,
        imageUrl: "https://tse3.mm.bing.net/th/id/OIP.ExUCU5t8-xppawEOwRtbJwHaHa?pid=Api&h=220&P=0",
        description: "Di sản văn hóa phong phú của dân tộc Việt Nam qua các thế kỷ",
        pages: 287,
        publisher: "Nhà xuất bản Văn học",
        year: 2020
    },
    {
        id: 7,
        title: "Nhân dân Việt Nam trong cuộc kháng chiến",
        author: "Trường Chinh",
        price: 139000,
        oldPrice: 199000,
        category: "Lịch sử cách mạng",
        rating: 4.3,
        imageUrl: "https://tse2.mm.bing.net/th/id/OIP.P4nAiq34bDwxAJB-8B3uqgHaKt?pid=Api&h=220&P=0",
        description: "Tinh thần bất khuất và sức mạnh tập thể của nhân dân",
        pages: 345,
        publisher: "Nhà xuất bản Sự thật",
        year: 2021
    },
    {
        id: 8,
        title: "Đường Hồ Chí Minh - Tuyến đường anh hùng",
        author: "Quang Trung",
        price: 229000,
        oldPrice: 319000,
        category: "Lịch sử hiện đại",
        rating: 4.5,
        imageUrl: "https://tse3.mm.bing.net/th/id/OIP.ZUg7HoUVtbsQO3fxsxBf5AHaHa?pid=Api&h=220&P=0",
        description: "Lối mòn chiến thắng nổi tiếng trong lịch sử kháng chiến",
        pages: 398,
        publisher: "Nhà xuất bản Quân đội",
        year: 2023
    },
    {
        id: 9,
        title: "Phong trào Yên Bái - Khởi đầu của cách mạng",
        author: "Việt Tân",
        price: 179000,
        oldPrice: 259000,
        category: "Lịch sử cách mạng",
        rating: 4.6,
        imageUrl: "https://tse4.mm.bing.net/th/id/OIP.ozTdraca4NjYNX1pCwpA3wHaNK?pid=Api&h=220&P=0",
        description: "Những vị anh hùng liệt sĩ của phong trào Yên Bái",
        pages: 367,
        publisher: "Nhà xuất bản Lao động",
        year: 2023
    },
    {
        id: 10,
        title: "Nho giáo và xã hội phong kiến Việt Nam",
        author: "Ngô Sĩ Liên",
        price: 249000,
        oldPrice: 329000,
        category: "Văn hóa - Lịch sử",
        rating: 4.7,
        imageUrl: "https://tse4.mm.bing.net/th/id/OIP.tzBoqjhRinHATCNshg_wEwHaHa?pid=Api&h=220&P=0",
        description: "Ảnh hưởng của nho giáo đối với nền văn minh Việt Nam",
        pages: 412,
        publisher: "Nhà xuất bản Giáo dục",
        year: 2024
    },
    {
        id: 11,
        title: "Giai đoạn độc lập dân tộc thế kỷ XIX",
        author: "Nguyễn Ái Quốc",
        price: 159000,
        oldPrice: 239000,
        category: "Lịch sử hiện đại",
        rating: 4.4,
        imageUrl: "https://tse2.mm.bing.net/th/id/OIP.YN0uQIGehw64F3bMKmm4SQHaL0?pid=Api&h=220&P=0",
        description: "Cuộc đấu tranh giành độc lập của dân tộc Việt",
        pages: 334,
        publisher: "Nhà xuất bản Thế giới",
        year: 2022
    },
    {
        id: 12,
        title: "Ngày thống nhất đất nước",
        author: "Lê Tắc",
        price: 199000,
        oldPrice: 279000,
        category: "Tiểu sử lịch sử",
        imageUrl: "https://tse1.mm.bing.net/th/id/OIP.P6vHl1guoYOncoeroUEBtgHaK3?pid=Api&h=220&P=0",
        description: "Ngày Thống nhất đất nước - Sự kiện trọng đại trong lịch sử Việt Nam",
        pages: 456,
        publisher: "Nhà xuất bản Hội Nhà văn",
        year: 2023
    },
    {
        id: 13,
        title: "Trần Hưng Đạo - Vị danh tướng lịch sử",
        author: "Phan Bội Châu",
        price: 189000,
        oldPrice: 269000,
        category: "Tiểu sử lịch sử",
        rating: 4.5,
        imageUrl: "https://tse1.mm.bing.net/th/id/OIP.amDEA3EkPYSo33BDcDB1mAHaJW?pid=Api&h=220&P=0",
        description: "Cuộc đời anh hùng và những chiến công bất bại",
        pages: 298,
        publisher: "Nhà xuất bản Trẻ",
        year: 2021
    },
    {
        id: 14,
        title: "Dân tộc việt nam ta là một dân tộc anh hùng",
        author: "Bùi Kỷ",
        price: 219000,
        oldPrice: 299000,
        category: "Lịch sử cách mạng",
        rating: 4.3,
        imageUrl: "https://tse3.mm.bing.net/th/id/OIP.ZHhf1t7i3AP99l_Dh3MmNQAAAA?pid=Api&h=220&P=0",
        description: "Dân tộc Việt Nam với tinh thần bất khuất và sức mạnh đoàn kết",
        pages: 489,
        publisher: "Nhà xuất bản Sự thật",
        year: 2022
    },
    {
        id: 15,
        title: "Kinh tế Việt Nam thăng trầm và đột phá",
        author: "Tôn Thất Tùng",
        price: 209000,
        oldPrice: 289000,
        category: "Văn hóa - Lịch sử",
        rating: 4.6,
        imageUrl: "https://tse1.mm.bing.net/th/id/OIP.4LWSQKyBabU_S5iLiSVDtgHaHa?pid=Api&h=220&P=0",
        description: "Kinh tế việt nam thăng trầm và đột phá trong lịch sử phát triển",
        pages: 405,
        publisher: "Nhà xuất bản Kinh tế",
        year: 2023
    },
    {
        id: 16,
        title: "Phan Bội Châu - Anh hùng chống thực dân",
        author: "Nguyễn Ổn Nhất",
        price: 169000,
        oldPrice: 249000,
        category: "Tiểu sử lịch sử",
        rating: 4.7,
        imageUrl: "https://tse1.mm.bing.net/th/id/OIP.W380lltQotOpKjAy1RHrNwHaHa?pid=Api&h=220&P=0",
        description: "Cuộc đấu tranh chống thực dân Pháp của Phan Bội Châu",
        pages: 376,
        publisher: "Nhà xuất bản Tổng hợp TPHCM",
        year: 2020
    },
    {
        id: 17,
        title: "Lịch sử Đại Việt - Từ thủa sơ khai",
        author: "Trịnh Hữu Tứ",
        price: 239000,
        oldPrice: 319000,
        category: "Lịch sử cổ đại",
        rating: 4.4,
        imageUrl: "https://tse1.mm.bing.net/th/id/OIP.-KNQuszZ4dM-otTMLyiu-QHaKt?pid=Api&h=220&P=0",
        description: "Hành trình phát triển của đất nước từ thời xưa",
        pages: 523,
        publisher: "Nhà xuất bản Đại học Quốc gia",
        year: 2024
    },
    {
        id: 18,
        title: "Di sản văn hóa - Bản sắc Việt Nam",
        author: "Tô Vĩnh Diện",
        price: 179000,
        oldPrice: 259000,
        category: "Văn hóa - Lịch sử",
        rating: 4.9,
        imageUrl: "https://tse3.mm.bing.net/th/id/OIP.ExUCU5t8-xppawEOwRtbJwHaHa?pid=Api&h=220&P=0",
        description: "Nét đẹp và bản sắc của nền văn hóa Việt Nam",
        pages: 313,
        publisher: "Nhà xuất bản Văn hóa Thông tin",
        year: 2021
    }
];

let cart = [];
let filteredBooks = [...books];

// Set default image URLs for books if none provided
books.forEach(book => {
    if (!book.imageUrl) {
        book.imageUrl = 'assets/logo.jpg';
    }
});

function resolveImagePath(path) {
    if (!path) return '';
    const pagePath = window.location.pathname;
    const isHtmlPage = pagePath.includes('/html/') || pagePath.includes('\\html\\') || pagePath.endsWith('/html') || pagePath.endsWith('\\html');
    if (isHtmlPage && !path.startsWith('../') && !path.startsWith('/')) {
        return `../${path}`;
    }
    return path;
}

// ========== Initialize ========== 
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedBooks();
    loadAllBooks();
    updateCartCount();
    loadCart();
});

// ========== Section Navigation ========== 
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    // Show selected section (if exists)
    const targetSection = document.getElementById(sectionId);
    if (targetSection) targetSection.classList.add('active');

    // Update active nav link using data-section attribute
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
    if (activeLink) activeLink.classList.add('active');

    // Close cart if open
    closeCart();
}

// ========== Books Display ========== 
function loadFeaturedBooks() {
    const featuredBooks = books.slice(0, 4);
    const container = document.getElementById('featuredBooks');
    container.innerHTML = featuredBooks.map(book => createBookCard(book)).join('');
}

function loadAllBooks() {
    const container = document.getElementById('productsList');
    container.innerHTML = filteredBooks.map(book => createBookCard(book)).join('');
}

function createBookCard(book) {
    const imageMarkup = book.imageUrl
        ? `<img src="${resolveImagePath(book.imageUrl)}" alt="${book.title} cover">`
        : `<span>${book.image}</span>`;

    return `
        <div class="book-card">
            <div class="book-cover">
                ${imageMarkup}
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">Tác giả: ${book.author}</p>
                <span class="book-category">${book.category}</span>
                <div class="book-rating">
                    <span class="star">★</span> ${book.rating}/5
                </div>
                <p class="book-description">${book.description}</p>
                <div class="book-footer">
                    <div>
                        <span class="book-price">${book.price.toLocaleString()} VND</span>
                        <span class="book-old-price">${book.oldPrice.toLocaleString()} VND</span>
                    </div>
                </div>
                <div class="book-actions">
                    <button class="btn-view" onclick="viewBookDetails(${book.id})">Xem chi tiết</button>
                    <button class="btn-add-to-cart" onclick="addToCart(${book.id})">Thêm vào giỏ</button>
                </div>
            </div>
        </div>
    `;
}

// ========== Book Details ========== 
function viewBookDetails(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    const imageMarkup = book.imageUrl
        ? `<img src="${resolveImagePath(book.imageUrl)}" alt="${book.title} cover">`
        : book.image;

    const bookDetail = document.getElementById('bookDetail');
    bookDetail.innerHTML = `
        <div class="book-detail">
            <div class="book-detail-image">
                ${imageMarkup}
            </div>
            <div class="book-detail-info">
                <h2>${book.title}</h2>
                <p class="book-detail-author">Tác giả: ${book.author}</p>
                <div>
                    <span class="book-detail-price">${book.price.toLocaleString()} VND</span>
                    ${book.oldPrice ? `<span class="book-detail-old-price">${book.oldPrice.toLocaleString()} VND</span>` : ''}
                </div>
                <div class="book-detail-rating">
                    <span class="star">★</span> ${book.rating}/5 | Thích thú
                </div>
                <p class="book-detail-description">${book.description}</p>
                
                <div class="book-detail-specs">
                    <div class="spec-item">
                        <span class="spec-label">Nhà xuất bản</span>
                        <span class="spec-value">${book.publisher}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Năm xuất bản</span>
                        <span class="spec-value">${book.year}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Số trang</span>
                        <span class="spec-value">${book.pages}</span>
                    </div>
                    <div class="spec-item">
                        <span class="spec-label">Danh mục</span>
                        <span class="spec-value">${book.category}</span>
                    </div>
                </div>

                <div class="quantity-selector">
                    <label>Số lượng:</label>
                    <input type="number" id="quantityInput" value="1" min="1" max="10">
                </div>

                <button class="btn-primary" onclick="addToCartWithQuantity(${bookId})">
                    🛒 Thêm vào giỏ hàng
                </button>
            </div>
        </div>
    `;

    const modal = document.getElementById('bookModal');
    modal.classList.add('active');
}

function closeBookModal() {
    document.getElementById('bookModal').classList.remove('active');
}

// ========== Cart Functions ========== 
function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    const existingItem = cart.find(item => item.id === bookId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: book.id,
            title: book.title,
            price: book.price,
            quantity: 1,
            image: book.image,
            author: book.author
        });
    }

    saveCart();
    updateCartCount();
    showNotification(`${book.title} đã được thêm vào giỏ hàng!`);
}

function addToCartWithQuantity(bookId) {
    const quantity = parseInt(document.getElementById('quantityInput').value) || 1;
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    const existingItem = cart.find(item => item.id === bookId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: book.id,
            title: book.title,
            price: book.price,
            quantity: quantity,
            image: book.image,
            author: book.author
        });
    }

    saveCart();
    updateCartCount();
    closeBookModal();
    showNotification(`${book.title} (x${quantity}) đã được thêm vào giỏ hàng!`);
}

function removeFromCart(bookId) {
    cart = cart.filter(item => item.id !== bookId);
    saveCart();
    updateCart();
}

function updateCartItem(bookId, quantity) {
    const item = cart.find(item => item.id === bookId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        saveCart();
        updateCart();
    }
}

function updateCart() {
    updateCartCount();
    displayCartItems();
    updateCartTotal();
}

function displayCartItems() {
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Giỏ hàng trống</p>';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">${item.image}</div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">${item.price.toLocaleString()} VND</div>
                <div class="cart-item-quantity">
                    <button onclick="updateCartItem(${item.id}, ${item.quantity - 1})">−</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateCartItem(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
        </div>
    `).join('');
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = total.toLocaleString() + ' VND';
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function showCart() {
    document.getElementById('cartSidebar').classList.add('active');
    displayCartItems();
    updateCartTotal();
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
}

// ========== Search Function ========== 
function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    if (!query) {
        filteredBooks = [...books];
    } else {
        filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query) ||
            book.description.toLowerCase().includes(query)
        );
    }

    loadAllBooks();
    showSection('products');
}

// ========== Filter Functions ========== 
function filterByCategory(category) {
    document.getElementById('categoryFilter').value = category;
    filterBooks();
    showSection('products');
}

function filterBooks() {
    let filtered = [...books];

    // Filter by category
    const category = document.getElementById('categoryFilter').value;
    if (category) {
        filtered = filtered.filter(book => book.category === category);
    }

    // Sort
    const sort = document.getElementById('sortFilter').value;
    switch(sort) {
        case 'pricelow':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'pricehigh':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            filtered.sort((a, b) => b.year - a.year);
            break;
    }

    filteredBooks = filtered;
    loadAllBooks();
}

// ========== Contact Form ========== 
function submitContact(event) {
    event.preventDefault();

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;

    // Validate
    if (!name || !email || !subject || !message) {
        showNotification('Vui lòng điền đầy đủ thông tin!', 'error');
        return;
    }

    // Simulate sending (in real app, send to server)
    console.log('Contact Form Data:', {name, email, subject, message});

    // Reset form
    event.target.reset();
    showNotification('Cảm ơn bạn! Chúng tôi sẽ liên hệ với bạn sớm.', 'success');
}

// ========== User Registration ==========
function registerUser(event) {
    event.preventDefault();
    const name = document.getElementById('regName')?.value.trim();
    const email = document.getElementById('regEmail')?.value.trim().toLowerCase();
    const password = document.getElementById('regPassword')?.value;
    const confirm = document.getElementById('regPasswordConfirm')?.value;

    if (!name || !email || !password) {
        showNotification('Vui lòng điền đầy đủ thông tin!', 'error');
        return;
    }
    if (password !== confirm) {
        showNotification('Mật khẩu xác nhận không khớp', 'error');
        return;
    }

    const users = JSON.parse(localStorage.getItem('bookstoreUsers') || '[]');
    if (users.find(u => u.email === email)) {
        showNotification('Email này đã được sử dụng', 'error');
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem('bookstoreUsers', JSON.stringify(users));
    showNotification('Đăng ký thành công! Bạn có thể đăng nhập sau.', 'success');
    event.target.reset();
}

// ========== Checkout ========== 
function checkout() {
    if (cart.length === 0) {
        showNotification('Giỏ hàng trống!', 'error');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderSummary = cart.map(item => `${item.title} (x${item.quantity})`).join(', ');

    // Simulate checkout process
    alert(`Đơn hàng của bạn:\n${orderSummary}\n\nTổng tiền: ${total.toLocaleString()} VND\n\nVui lòng tiếp tục thanh toán.`);
    
    // Clear cart after checkout
    cart = [];
    saveCart();
    updateCart();
    closeCart();
    showNotification('Thanh toán thành công!', 'success');
}

// ========== Local Storage ========== 
function saveCart() {
    localStorage.setItem('bookstoreCart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('bookstoreCart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartCount();
    }
}

// ========== Notification ========== 
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background-color: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    if (!document.querySelector('style[data-notification]')) {
        style.setAttribute('data-notification', 'true');
        document.head.appendChild(style);
    }

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========== Keyboard Shortcuts ========== 
document.addEventListener('keydown', function(event) {
    // Ctrl/Cmd + K for search
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        document.getElementById('searchInput').focus();
    }

    // ESC to close modals
    if (event.key === 'Escape') {
        closeBookModal();
        closeCart();
    }
});

// ========== Smooth Scroll ========== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
