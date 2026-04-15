// Product data with web images
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: 145000,
        category: "smartphones",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
        description: "Latest iPhone with A17 Pro chip, titanium design, and advanced camera system.",
        rating: 4.8,
        specs: "6.7\" display, 512GB, Purple Titanium"
    },
    {
        id: 2,
        name: "MacBook Pro M3",
        price: 180000,
        category: "laptops",
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop",
        description: "Powerful laptop with M3 chip, perfect for professionals and creators.",
        rating: 4.9,
        specs: "14\" display, 512GB SSD, Space Black"
    },
    {
        id: 3,
        name: "Sony WH-1000XM5",
        price: 35000,
        category: "headphones",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
        description: "Industry-leading noise canceling headphones with premium sound quality.",
        rating: 4.7,
        specs: "ANC, 8-hour battery, Bluetooth 5.3"
    },
    {
        id: 4,
        name: "Apple Watch Series 9",
        price: 42000,
        category: "watches",
        image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=300&fit=crop",
        description: "Advanced smartwatch with health monitoring and fitness tracking.",
        rating: 4.6,
        specs: "1.9\" LTPO display, 18-hour battery, Always-on"
    },
    {
        id: 5,
        name: "Samsung Galaxy S24 Ultra",
        price: 135000,
        category: "smartphones",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop",
        description: "Premium Android phone with S Pen, exceptional camera, and large display.",
        rating: 4.8,
        specs: "6.8\" display, 512GB, Graphite"
    },
    {
        id: 6,
        name: "Dell XPS 13",
        price: 125000,
        category: "laptops",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
        description: "Ultra-portable laptop with stunning InfinityEdge display.",
        rating: 4.7,
        specs: "13.3\" FHD+, Intel Core i5, Silver"
    },
    {
        id: 7,
        name: "iPad Pro 12.9",
        price: 95000,
        category: "tablets",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
        description: "Professional tablet with M2 chip and Liquid Retina XDR display.",
        rating: 4.8,
        specs: "12.9\" display, 256GB, Space Gray"
    },
    {
        id: 8,
        name: "AirPods Pro 2",
        price: 28000,
        category: "headphones",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop",
        description: "Wireless earbuds with active noise cancellation and spatial audio.",
        rating: 4.5,
        specs: "ANC, Spatial Audio, 6-hour battery"
    },
    {
        id: 9,
        name: "Samsung Galaxy Watch 6",
        price: 38000,
        category: "watches",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
        description: "Advanced Android smartwatch with comprehensive health tracking.",
        rating: 4.6,
        specs: "1.3\" AMOLED, 40-hour battery, Gold"
    },
    {
        id: 10,
        name: "HP Spectre x360",
        price: 140000,
        category: "laptops",
        image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=400&h=300&fit=crop",
        description: "Convertible laptop with premium build quality and long battery life.",
        rating: 4.7,
        specs: "13.5\" touchscreen, Intel i7, Pale Gold"
    },
    {
        id: 11,
        name: "Google Pixel 8 Pro",
        price: 115000,
        category: "smartphones",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        description: "AI-powered smartphone with exceptional photography capabilities.",
        rating: 4.9,
        specs: "6.7\" display, 256GB, Obsidian"
    },
    {
        id: 12,
        name: "Microsoft Surface Pro 9",
        price: 110000,
        category: "tablets",
        image: "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?w=400&h=300&fit=crop",
        description: "Versatile 2-in-1 device that works as both laptop and tablet.",
        rating: 4.6,
        specs: "13\" touchscreen, Intel Core i5, Graphite"
    }
];

let cart = [];
let currentFilter = 'all';

// Initialize the store
function initStore() {
    displayProducts(products);
    updateCartCount();
}

// Display products
function displayProducts(productsToShow) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card product-view-standard';
        productCard.setAttribute('data-product-id', product.id);
        productCard.innerHTML = `
            <div class="view-toggle">
                <button class="view-btn view-compact-btn" title="Compact view" onclick="switchView(${product.id}, 'compact')">⊡</button>
                <button class="view-btn view-standard-btn active" title="Standard view" onclick="switchView(${product.id}, 'standard')">≡</button>
                <button class="view-btn view-extended-btn" title="Extended view" onclick="switchView(${product.id}, 'extended')">⊞</button>
            </div>

            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/400x300?text=Product+Image'">

            <div class="product-title">${product.name}</div>
            <div class="product-price">KSh ${product.price.toLocaleString()}</div>

            <div class="product-description">${product.description}</div>

            <div class="product-extended" style="display: none;">
                <div class="product-rating">★ ${product.rating} Rating</div>
                <div class="product-specs">${product.specs}</div>
            </div>

            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
}

// Switch product view
function switchView(productId, viewType) {
    const card = document.querySelector(`[data-product-id="${productId}"]`);
    if (!card) return;

    // Remove all view classes
    card.classList.remove('product-view-compact', 'product-view-standard', 'product-view-extended');
    card.classList.add(`product-view-${viewType}`);

    // Update active button
    card.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
    const btnClass = viewType === 'compact' ? 'view-compact-btn' : viewType === 'standard' ? 'view-standard-btn' : 'view-extended-btn';
    card.querySelector(`.${btnClass}`).classList.add('active');

    // Show/hide elements based on view
    const description = card.querySelector('.product-description');
    const extended = card.querySelector('.product-extended');

    switch(viewType) {
        case 'compact':
            description.style.display = 'none';
            extended.style.display = 'none';
            break;
        case 'standard':
            description.style.display = 'block';
            extended.style.display = 'none';
            break;
        case 'extended':
            description.style.display = 'block';
            extended.style.display = 'block';
            break;
    }
}

// Filter products
function filterProducts(category) {
    currentFilter = category;
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Find the button with matching category
    const activeBtn = Array.from(document.querySelectorAll('.filter-btn')).find(btn => 
        btn.textContent.toLowerCase().includes(category) || 
        (category === 'all' && btn.textContent === 'All Products')
    );
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    displayProducts(filteredProducts);
    
    // Scroll to products
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchInput').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
        
        if (currentFilter !== 'all') {
            const categoryFiltered = filteredProducts.filter(product => 
                product.category === currentFilter
            );
            displayProducts(categoryFiltered);
        } else {
            displayProducts(filteredProducts);
        }
    });
});

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartCount();
    
    // Show success animation
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = 'Added!';
    btn.style.background = '#1b5e20';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = 'linear-gradient(45deg, #1b5e20, #2d7a2f)';
    }, 1000);
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

// Toggle cart modal
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal.style.display === 'block') {
        cartModal.style.display = 'none';
    } else {
        cartModal.style.display = 'block';
        displayCartItems();
    }
}

// Display cart items
function displayCartItems() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        cartTotal.textContent = 'Total: KSh 0';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">KSh ${item.price.toLocaleString()}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <div>
                <div style="font-weight: bold; margin-bottom: 10px;">KSh ${itemTotal.toLocaleString()}</div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = `Total: KSh ${total.toLocaleString()}`;
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            displayCartItems();
        }
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    displayCartItems();
}

// Show M-Pesa modal
function showMpesaModal() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('mpesaTotal').textContent = `KSh ${total.toLocaleString()}`;
    document.getElementById('mpesaModal').style.display = 'block';
}

// Close M-Pesa modal
function closeMpesaModal() {
    document.getElementById('mpesaModal').style.display = 'none';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('successMessage').innerHTML = '';
    document.getElementById('loading').style.display = 'none';
}

// Process payment
function processPayment() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Validate phone number
    if (!phoneNumber || phoneNumber.length < 10) {
        alert('Please enter a valid phone number');
        return;
    }

    // Show loading
    document.getElementById('loading').style.display = 'block';
    
    // Simulate M-Pesa payment process
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        
        // Simulate payment success
        const successMessage = document.getElementById('successMessage');
        successMessage.innerHTML = `
            <div class="success-message">
                Payment Successful!<br>
                Transaction ID: MPX${Date.now()}<br>
                Amount: KSh ${total.toLocaleString()}<br>
                Phone: ${phoneNumber}
            </div>
        `;

        // Clear cart
        cart = [];
        updateCartCount();

        // Close modals after 3 seconds
        setTimeout(() => {
            closeMpesaModal();
            toggleCart();
            alert('Thank you for your purchase! Your order will be processed shortly.');
        }, 3000);

    }, 2000);
}

// Initialize the store when page loads
window.addEventListener('load', initStore);
