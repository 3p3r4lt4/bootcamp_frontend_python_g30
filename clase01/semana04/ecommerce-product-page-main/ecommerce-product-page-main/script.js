class EcommerceApp {
  constructor() {
    this.currentSlide = 0;
    this.cartCount = 0;
    this.quantity = 0;
    
    this.init();
  }
  
  init() {
    this.initSlider();
    this.initCart();
    this.initQuantity();
  }
  
  initSlider() {
    const slides = document.querySelectorAll('.slider__image');
    const thumbs = document.querySelectorAll('.slider__thumb');
    const prevBtn = document.querySelector('.slider__btn--prev');
    const nextBtn = document.querySelector('.slider__btn--next');
    
    if (prevBtn) prevBtn.addEventListener('click', () => this.prevSlide(slides, thumbs));
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide(slides, thumbs));
    
    thumbs.forEach((thumb, index) => {
      thumb.addEventListener('click', () => this.goToSlide(index, slides, thumbs));
    });
  }
  
  initCart() {
    const cartIcon = document.querySelector('.nav__cart');
    const cart = document.querySelector('.cart');
    const addToCartBtn = document.querySelector('.button--primary');
    
    cartIcon.addEventListener('click', () => {
      cart.classList.toggle('cart--open');
    });
    
    addToCartBtn.addEventListener('click', () => {
      if (this.quantity > 0) {
        this.cartCount = this.quantity;
        this.updateCart();
        cart.classList.add('cart--open');
      }
    });
  }
  
  initQuantity() {
    const minusBtn = document.querySelector('.quantity__btn:first-child');
    const plusBtn = document.querySelector('.quantity__btn:last-child');
    const quantityValue = document.querySelector('.quantity__value');
    
    minusBtn.addEventListener('click', () => {
      if (this.quantity > 0) {
        this.quantity--;
        quantityValue.textContent = this.quantity;
      }
    });
    
    plusBtn.addEventListener('click', () => {
      this.quantity++;
      quantityValue.textContent = this.quantity;
    });
  }
  
  goToSlide(index, slides, thumbs) {
    this.currentSlide = index;
    this.updateSlider(slides, thumbs);
  }
  
  nextSlide(slides, thumbs) {
    this.currentSlide = (this.currentSlide + 1) % slides.length;
    this.updateSlider(slides, thumbs);
  }
  
  prevSlide(slides, thumbs) {
    this.currentSlide = (this.currentSlide - 1 + slides.length) % slides.length;
    this.updateSlider(slides, thumbs);
  }
  
  updateSlider(slides, thumbs) {
    slides.forEach((slide, index) => {
      slide.classList.toggle('slider__image--active', index === this.currentSlide);
    });
    
    thumbs.forEach((thumb, index) => {
      thumb.classList.toggle('slider__thumb--active', index === this.currentSlide);
    });
  }
  
  updateCart() {
    const cartItems = document.querySelector('.cart__items');
    const cartEmpty = document.querySelector('.cart__empty');
    
    if (this.cartCount > 0) {
      cartEmpty.style.display = 'none';
      cartItems.innerHTML = `
        <div class="cart__item">
          <img src="./images/image-product-1-thumbnail.jpg" alt="Product" class="cart__item-image">
          <div class="cart__item-info">
            <div class="cart__item-name">Fall Limited Edition Sneakers</div>
            <div class="cart__item-price">$125.00 x ${this.cartCount} <strong>$${(125 * this.cartCount).toFixed(2)}</strong></div>
          </div>
          <button class="cart__item-delete">
            <img src="./images/icon-delete.svg" alt="Delete">
          </button>
        </div>
        <button class="button button--primary" style="margin: 1rem;">Checkout</button>
      `;
      
      // Agregar evento para eliminar
      document.querySelector('.cart__item-delete').addEventListener('click', () => {
        this.cartCount = 0;
        this.updateCart();
      });
    } else {
      cartItems.innerHTML = '<div class="cart__empty">Your cart is empty</div>';
    }
  }
}

// Inicializar la app
document.addEventListener('DOMContentLoaded', () => {
  new EcommerceApp();
});