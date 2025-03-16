// Updated Product data with new information
const products = [
    {
        id: 1,
        name: 'Đen',
        image: 'assets/images/products/image1.jpg',
        color: 'Đen',
        material: 'Polyester',
        description: 'Vải dù thô mềm mịn'
    },
    {
        id: 2,
        name: 'Xanh Lá Pastel',
        image: 'assets/images/products/image2.jpg',
        color: 'Xanh Lá Pastel',
        material: 'Polyester',
        description: 'Vải dù thô mềm mịn'
    },
    {
        id: 3,
        name: 'Nâu Pastel',
        image: 'assets/images/products/image3.jpg',
        color: 'Nâu Pastel',
        material: 'Polyester',
        description: 'Vải dù thô mềm mịn'
    },
    {
        id: 4,
        name: 'Dusty Blue',
        image: 'assets/images/products/image4.jpg',
        color: 'Dusty Blue',
        material: '100% Cotton'
    },
    {
        id: 5,
        name: 'Chino',
        image: 'assets/images/products/image5.jpg',
        color: 'Chino',
        material: '100% Cotton'
    },
    {
        id: 6,
        name: 'Short Pant Nike',
        image: 'assets/images/products/image9.jpg',
        color: 'Black',
        material: '100% Cotton'
    },
    {
        id: 7,
        name: 'Short Pant Stussy',
        image: 'assets/images/products/image7.jpg',
        color: 'Olive',
        material: '100% Cotton'
    },
    {
        id: 8,
        name: 'Short Pant The North Face',
        image: 'assets/images/products/image8.jpg',
        color: 'Grey',
        material: '100% Cotton'
    }
];

// Product Information
const productInfo = {
    title: "QUẦN SHORT UNISEX CUSTOM NIKE",
    subtitle: "FORM BOXY VẢI DÙ THÔ MỀM MỊN",
    highlights: [
        {
            icon: "fas fa-tshirt",
            title: "Chất Liệu",
            description: "Polyester thoáng khí, không lộ bóng"
        },
        {
            icon: "fas fa-ruler",
            title: "Kích Thước",
            description: "M - XL (Size L chọn XL)"
        },
        {
            icon: "fas fa-palette",
            title: "Màu Sắc",
            description: "Đen, Xanh Lá Pastel, Nâu Pastel"
        }
    ],
    features: [
        "Logo được thêu siêu nét",
        "Có dây buộc ở hong quần",
        "Vải được may 1 lớp duy nhất",
        "Đảm bảo chắc chắn và thoáng mát",
        "Chống nước tốt"
    ],
    care: [
        "Giặt trong nước lạnh hoặc nước ấm dưới 30 độ",
        "Giặt máy bình thường (Khuyến khích giặt bằng tay)",
        "Phơi trong bóng râm, tránh tiếp xúc trực tiếp ánh sáng mặt trời",
        "Dùng bàn ủi ở nhiệt độ thấp vừa phải"
    ],
    returnPolicy: {
        duration: "7 ngày",
        conditions: [
            "Sản phẩm bị lỗi (Phản hồi shop kèm video mở hàng ngay khi nhận sản phẩm)",
            "Chỉ hỗ trợ đổi hàng khi sản phẩm chưa được sử dụng còn nguyên tem và tag giá của cửa hàng"
        ]
    },
    contact: {
        facebook: "facebook.com/outline.totebag",
        phone: "0859 483 285"
    }
};

// Function to generate product slides
function generateProductSlides() {
    const productSlider = document.getElementById('productSlider');
    
    products.forEach(product => {
        const slide = `
            <div class="swiper-slide">
                <div class="product-card">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>${product.material}</p>
                        <p>${product.description}</p>
                        <button class="view-details">View Details</button>
                    </div>
                </div>
            </div>
        `;
        productSlider.innerHTML += slide;
    });
}

// Function to generate product information HTML
function generateProductInfo() {
    const productInfoSection = document.createElement('div');
    productInfoSection.className = 'product-information';
    
    const highlightsHTML = `
        <div class="product-highlights">
            ${productInfo.highlights.map(highlight => `
                <div class="highlight-card">
                    <div class="highlight-icon">
                        <i class="${highlight.icon}"></i>
                    </div>
                    <div class="highlight-content">
                        <h3>${highlight.title}</h3>
                        <p>${highlight.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Make sure the button has the correct ID
    const sizeButtonHTML = `
        <button id="sizeGuideBtn" class="size-guide-btn">
            <i class="fas fa-ruler"></i>
            Bảng Size
        </button>
    `;
    
    productInfoSection.innerHTML = `
        <div class="product-info-header">
            <h2 class="product-title">${productInfo.title}</h2>
            <p class="product-subtitle">${productInfo.subtitle}</p>
        </div>

        ${highlightsHTML}

        <div class="product-features-section">
            <h3>Đặc Điểm Nổi Bật</h3>
            <div class="features-grid">
                ${productInfo.features.map(feature => `
                    <div class="feature-item">
                        <i class="fas fa-check"></i>
                        <span>${feature}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="care-instructions-section">
            <h3>Hướng Dẫn Bảo Quản</h3>
            <div class="care-grid">
                ${productInfo.care.map(instruction => `
                    <div class="care-item">
                        <i class="fas fa-info-circle"></i>
                        <span>${instruction}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="return-policy-section">
            <h3>Chính Sách Đổi Trả</h3>
            <div class="policy-conditions">
                <div class="policy-duration">
                    <i class="fas fa-clock"></i>
                    <span>Hỗ trợ đổi trả trong vòng ${productInfo.returnPolicy.duration}</span>
                </div>
                ${productInfo.returnPolicy.conditions.map(condition => `
                    <div class="condition-item">
                        <i class="fas fa-exclamation-circle"></i>
                        <span>${condition}</span>
                    </div>
                `).join('')}
            </div>
        </div>

        ${sizeButtonHTML}
    `;

    return productInfoSection;
}

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', function() {
    generateProductSlides();
    
    // Initialize Swiper with navigation
    const swiper = new Swiper('.product-slider', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        grabCursor: true, // Shows grab cursor when hovering over slider
        mousewheel: true, // Enables mouse wheel scrolling
        keyboard: {      // Enables keyboard navigation
            enabled: true,
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        // Responsive breakpoints
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    // Initialize Hero Slider
    const heroSlider = new Swiper('.hero-slider', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Add click event listeners to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function() {
            const productId = this.dataset.productId;
            const product = products.find(p => p.id === parseInt(productId));
            showProductDetails(product);
        });
    });

    // Add animation classes to elements
    const sections = document.querySelectorAll('.size-info, .features-info, .care-info, .return-policy, .contact-info');
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
    });

    // Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });

    // Add product information
    const productsSection = document.querySelector('.products');
    productsSection.after(generateProductInfo());

    // Quick Contact Panel
    const quickContactBtn = document.querySelector('.quick-contact-btn');
    const quickContactPanel = document.querySelector('.quick-contact-panel');

    if (quickContactBtn && quickContactPanel) {
        // Toggle panel
        quickContactBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            quickContactPanel.classList.toggle('active');
            
            // Change icon when panel is open
            const icon = this.querySelector('i');
            if (quickContactPanel.classList.contains('active')) {
                icon.classList.remove('fa-comments');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-comments');
            }
        });

        // Close panel when clicking outside
        document.addEventListener('click', function(e) {
            if (!quickContactPanel.contains(e.target) && 
                !quickContactBtn.contains(e.target)) {
                quickContactPanel.classList.remove('active');
                const icon = quickContactBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-comments');
            }
        });

        // Handle touch events better
        let touchStartY = 0;
        document.addEventListener('touchstart', function(e) {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        document.addEventListener('touchmove', function(e) {
            const touchY = e.touches[0].clientY;
            const deltaY = touchY - touchStartY;

            // If user is scrolling down and panel is open, close it
            if (deltaY > 30 && quickContactPanel.classList.contains('active')) {
                quickContactPanel.classList.remove('active');
                const icon = quickContactBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-comments');
            }
        }, { passive: true });

        // Prevent panel from closing when interacting with links
        quickContactPanel.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        // Show button when scrolling down
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) { // Show after scrolling 300px
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        // Smooth scroll to top when clicked
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Better touch handling for mobile
        backToTopButton.addEventListener('touchend', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Size Guide Modal
    function openSizeGuide() {
        document.getElementById('sizeGuideModal').style.display = 'block';
    }

    document.querySelector('.close-modal').addEventListener('click', () => {
        document.getElementById('sizeGuideModal').style.display = 'none';
    });

    // Add smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add loading animation for images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
    });

    // Add this to your existing JavaScript
    function initializeSizeGuide() {
        const modal = document.getElementById('sizeGuideModal');
        const sizeGuideButtons = document.querySelectorAll('.size-guide-btn');
        const closeBtn = document.querySelector('.close-modal');

        // Open modal
        sizeGuideButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
        });

        // Close modal
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
        });

        // Close on outside click
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    // Call this function when the page loads
    document.addEventListener('DOMContentLoaded', initializeSizeGuide);

    // Get the modal elements
    const modal = document.getElementById('sizeGuideModal');
    const btn = document.getElementById('sizeGuideBtn');
    const closeBtn = document.querySelector('.close-modal');

    if (!modal || !btn || !closeBtn) {
        console.error('Modal elements not found');
        return;
    }

    // Open modal
    btn.onclick = function() {
        console.log('Button clicked'); // Debug log
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Close modal with X button
    closeBtn.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    // Close modal when clicking outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    // Close modal with ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // Mobile Navigation Handler
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Remove any duplicate menu toggles that might exist
    const duplicateToggles = document.querySelectorAll('.menu-toggle');
    duplicateToggles.forEach(toggle => {
        if (toggle !== mobileMenuToggle) {
            toggle.remove();
        }
    });

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    const icon = mobileMenuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && 
                !e.target.closest('.navbar') && 
                navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});

// Function to show product details (you can customize this)
function showProductDetails(product) {
    console.log('Showing details for:', product.name);
    // Add your modal or product detail view implementation here
}

// Navigation menu items in Vietnamese
const navItems = [
    { text: 'Trang Chủ', link: '#' },
    { text: 'Bộ Sưu Tập', link: '#collection' },
    { text: 'Về Chúng Tôi', link: '#about' },
    { text: 'Liên Hệ', link: '#contact' }
];

// Footer content in Vietnamese
const footerContent = {
    contact: {
        phone: "Điện thoại: 0123 456 789",
        address: "Địa chỉ: 123 Đường ABC, Quận XYZ, TP.HCM",
        email: "Email: contact@outlinestore.com"
    },
    hours: {
        title: "Giờ Mở Cửa",
        times: [
            "Thứ 2 - Thứ 6: 9:00 - 21:00",
            "Thứ 7 - Chủ Nhật: 10:00 - 22:00"
        ]
    },
    social: {
        title: "Kết Nối Với Chúng Tôi",
        links: [
            { name: "Facebook", url: "#" },
            { name: "Instagram", url: "#" },
            { name: "TikTok", url: "#" },
            { name: "Shopee", url: "#" }
        ]
    },
    copyright: "© 2024 Outline Store. Tất cả quyền được bảo lưu."
};

// Mobile Navigation Handler
function initializeMobileNav() {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    navbar.insertBefore(menuToggle, navLinks);
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Touch event handlers for better mobile interaction
function initializeTouchInteractions() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Better touch feedback
    const buttons = document.querySelectorAll('button, .size-guide-btn, .nav-link');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.opacity = '0.8';
        });
        button.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });
}

// Initialize mobile features
document.addEventListener('DOMContentLoaded', () => {
    initializeMobileNav();
    initializeTouchInteractions();
});

// Size Guide Modal Handler
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('sizeGuideModal');
    const sizeGuideBtn = document.getElementById('sizeGuideBtn');
    const closeBtn = document.querySelector('.close-modal');

    if (!modal || !sizeGuideBtn || !closeBtn) {
        console.error('Size guide elements not found');
        return;
    }

    // Open modal
    sizeGuideBtn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    // Close modal with X button
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
}); 