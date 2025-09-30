# TechHub - Premium Electronics Store 🛒

A modern, responsive e-commerce website for electronics with integrated M-Pesa payment simulation. Built with vanilla HTML, CSS, and JavaScript.

![TechHub Store](https://img.shields.io/badge/Status-Active-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🌟 Features

- **Product Catalog**: 12 premium electronics products across multiple categories
- **Search Functionality**: Real-time search across product names and descriptions
- **Category Filtering**: Quick filter by Smartphones, Laptops, Headphones, Watches, and Tablets
- **Shopping Cart**: Full cart management with add, remove, and quantity controls
- **M-Pesa Integration**: Simulated M-Pesa payment gateway (demo only)
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Smooth animations, gradient designs, and interactive elements
- **Footer with Quick Links**: Easy navigation and contact information

## 📁 Project Structure

```
techhub-store/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or dependencies required!

### Installation

1. **Download the project files**
   - Download or clone all files into a single folder

2. **Ensure all files are in the same directory**
   ```
   techhub-store/
   ├── index.html
   ├── styles.css
   └── script.js
   ```

3. **Open the website**
   - Double-click `index.html`
   - Or right-click and select "Open with" → your preferred browser

That's it! The store will load immediately.

## 🎯 How to Use

### For Customers

1. **Browse Products**
   - Scroll through the product grid
   - Use category filters to narrow down selections
   - Search for specific products using the search bar

2. **Add to Cart**
   - Click "Add to Cart" on any product
   - View cart by clicking the cart icon (top right)
   - Adjust quantities using +/- buttons
   - Remove items as needed

3. **Checkout**
   - Click "Checkout with M-Pesa"
   - Enter phone number (format: 254XXXXXXXXX)
   - Click "Pay Now"
   - Wait for confirmation message

### For Developers

#### Adding New Products

Edit the `products` array in `script.js`:

```javascript
{
    id: 13,
    name: "Your Product Name",
    price: 50000,
    category: "smartphones", // or "laptops", "headphones", "watches", "tablets"
    image: "https://your-image-url.com/image.jpg",
    description: "Product description here."
}
```

#### Customizing Colors

Main color scheme in `styles.css`:

```css
/* Primary Gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Accent Colors */
--primary-purple: #667eea;
--secondary-purple: #764ba2;
--success-green: #2ed573;
--danger-red: #ff4757;
```

#### Modifying Categories

1. Update category filters in `index.html`
2. Update filter buttons to match your categories
3. Ensure product categories match filter names

## 🔧 Customization Guide

### Changing Store Name

In `index.html`, find and replace:
```html
<div class="logo">TechHub</div>
```

### Updating Contact Information

In the footer section of `index.html`:
```html
<li><a href="#">support@techhub.co.ke</a></li>
<li><a href="#">+254 700 123 456</a></li>
<li><a href="#">Nairobi, Kenya</a></li>
```

### Adjusting Layout

- **Product grid columns**: Edit `grid-template-columns` in `.product-grid` (styles.css)
- **Spacing**: Modify `gap` properties throughout styles.css
- **Border radius**: Change `border-radius` values for sharper/rounder edges

## 💳 M-Pesa Integration

**Note**: This is a simulated payment system for demonstration purposes only.

For **production use**, you need to:

1. Register for M-Pesa Daraja API at [Safaricom Developer Portal](https://developer.safaricom.co.ke/)
2. Obtain API credentials (Consumer Key & Secret)
3. Implement STK Push (Lipa Na M-Pesa Online)
4. Add backend server for secure API calls
5. Implement proper error handling and callbacks

**Current simulation**:
- No actual charges occur
- No real API calls are made
- Transaction IDs are randomly generated

## 📱 Browser Compatibility

| Browser | Supported | Version |
|---------|-----------|---------|
| Chrome  | ✅ Yes    | 90+     |
| Firefox | ✅ Yes    | 88+     |
| Safari  | ✅ Yes    | 14+     |
| Edge    | ✅ Yes    | 90+     |
| Opera   | ✅ Yes    | 76+     |

## 🎨 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Flexbox, Grid, animations, and transitions
- **JavaScript (ES6+)**: Dynamic functionality and interactivity
- **External Resources**: Unsplash for product images

## 📊 Product Categories

- 📱 **Smartphones**: iPhones, Samsung Galaxy, Google Pixel
- 💻 **Laptops**: MacBooks, Dell XPS, HP Spectre
- 🎧 **Headphones**: Sony, AirPods, premium audio
- ⌚ **Smart Watches**: Apple Watch, Samsung Galaxy Watch
- 📲 **Tablets**: iPad Pro, Microsoft Surface

## 🐛 Known Issues

- Product images require internet connection (loaded from Unsplash)
- Cart data is lost on page refresh (no localStorage used)
- M-Pesa payment is simulated only

## 🚧 Future Enhancements

- [ ] Add user authentication
- [ ] Implement real M-Pesa API integration
- [ ] Add product reviews and ratings
- [ ] Include wishlist functionality
- [ ] Add order history tracking
- [ ] Implement admin dashboard
- [ ] Add product comparison feature
- [ ] Include email notifications
- [ ] Multi-language support
- [ ] Dark mode toggle

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Support

For questions or issues:
- Email: support@techhub.co.ke
- Phone: +254 700 123 456
- Location: Nairobi, Kenya

## 🙏 Acknowledgments

- Product images from [Unsplash](https://unsplash.com)
- Icons and emojis from Unicode standard
- Inspired by modern e-commerce design trends

## 📸 Screenshots

### Desktop View
- Clean, modern interface with gradient backgrounds
- Smooth hover effects and animations
- Responsive product grid

### Mobile View
- Optimized for touch interactions
- Collapsible navigation
- Single-column product layout

---

**Made with ❤️ for electronics enthusiasts**

*Last Updated: September 30, 2025*