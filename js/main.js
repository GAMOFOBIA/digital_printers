document.addEventListener("DOMContentLoaded", function () {
  // ==========================================
  // 1. INJECT UNIVERSAL HEADER & SIDEBAR
  // ==========================================
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = `
      <!-- Overlay -->
      <div class="sidebar-overlay" id="sidebar-overlay" onclick="closeSidebar()"></div>

      <!-- Sidebar Panel -->
      <div class="sidebar-panel" id="sidebar-panel">
        <div class="sidebar-header">
          <button class="close-sidebar-btn" onclick="closeSidebar()" aria-label="Close">
            <svg viewBox="0 0 24 24" width="24" height="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/></svg>
          </button>
        </div>
        
        <div class="sidebar-content">
          <h2>ABOUT</h2>
          <div class="sidebar-divider"></div>
          <p>
            Arihant Offset Printers is the complete solution for all your printing needs. We pride ourselves on being able to provide top quality printing and unparalleled customer service whatever your requirements. If you would like to know how Arihant Offset Printer can help you, then please get in touch today.
          </p>
          
          <div class="sidebar-socials">
            <a href="#"><svg viewBox="0 0 24 24" width="20" height="20"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="currentColor"/></svg></a>
            <a href="#"><svg viewBox="0 0 24 24" width="20" height="20"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" fill="currentColor"/></svg></a>
            <a href="#"><svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="currentColor"/></svg></a>
            <a href="#"><svg viewBox="0 0 24 24" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor"/></svg></a>
          </div>
        </div>
      </div>

      <!-- Header -->
      <header class="site-header" id="main-header">
        <div class="header-container">
          
          <a href="index.html" class="logo">
            <img src="images/arihant.png" alt="Arihant Offset Printers">
          </a>

          <nav class="main-nav" id="main-nav">
            <a href="index.html" class="nav-link">HOME</a>
            <a href="about.html" class="nav-link">ABOUT</a>
            <a href="services.html" class="nav-link">ALL SERVICES</a>
            <a href="careers.html" class="nav-link">CAREERS</a>
            <a href="contact.html" class="nav-link">CONTACT</a>
          </nav>

          <div class="header-icons">
            <button class="icon-btn" aria-label="Search">
              <svg viewBox="0 0 24 24" width="20" height="20"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="currentColor"/></svg>
            </button>
            <button class="icon-btn menu-toggle-btn" onclick="handleMenuClick()" aria-label="Menu">
              <svg viewBox="0 0 24 24" width="24" height="24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor"/></svg>
            </button>
          </div>

        </div>
      </header>
    `;

    // ==========================================
    // 7. COMPANY OVERVIEW TABS LOGIC
    // ==========================================
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");

    if (tabBtns.length > 0) {
      tabBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          // 1. Remove active class from all buttons and panes
          tabBtns.forEach((b) => b.classList.remove("active"));
          tabPanes.forEach((p) => p.classList.remove("active"));

          // 2. Add active class to clicked button
          btn.classList.add("active");

          // 3. Find the matching content pane and make it active
          const targetId = btn.getAttribute("data-target");
          document.getElementById(targetId).classList.add("active");
        });
      });
    }
  }

  // ==========================================
  // 2. INJECT UNIVERSAL FOOTER
  // ==========================================
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = `
      <footer class="site-footer">
        <div class="footer-container">
          
          <div class="footer-col">
            <h3>LATEST SERVICES</h3>
            <ul>
              <li><a href="#">POPUPS AND LARGE FORMAT</a></li>
              <li><a href="#">LEAFLETS AND FLYERS</a></li>
              <li><a href="#">FOLDERS</a></li>
              <li><a href="#">MAGAZINES</a></li>
              <li><a href="#">BUSINESS STATIONARY</a></li>
              <li><a href="#">BROCHURE AND BOOKLET</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h3>LINK FOOTER</h3>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="careers.html">Careers</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h3>SUBSCRIBE OUR NEWSLETTER</h3>
            <p>Subscribe to update news from us</p>
            <!-- ADDED ID HERE FOR JS INTEGRATION -->
<form action="https://formsubmit.co/rishi@arihantoffset.com" method="POST" class="footer-newsletter" id="newsletter-form">
  <input type="email" name="email" id="newsletter-email" placeholder="Enter your email" required>
  <button type="submit" class="footer-btn">SUBSCRIBE</button>
  
  <!-- FormSubmit Settings (Optional) -->
  <input type="hidden" name="_captcha" value="false"> <!-- Disables captcha popup -->
  <input type="hidden" name="_subject" value="New Newsletter Subscription!">
</form>
            
            <h3 class="upload-heading">UPLOAD YOUR ART WORK</h3>
            <a href="upload-artwork.html" class="footer-btn">CLICK HERE</a>
          </div>

          <div class="footer-col contact-col">
            <h3>CONTACT INFO</h3>
            
            <div class="contact-item">
              <svg viewBox="0 0 24 24" width="24" height="24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor"/></svg>
              <div>
                Address: Behind J.K. Steel, Bhaisthan Road,<br>Raipur (C.G.)
              </div>
            </div>
            
            <div class="contact-item">
              <svg viewBox="0 0 24 24" width="24" height="24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/></svg>
              <div>
                (+91) 7000377316<br>
                rishi@arihantoffset.com
              </div>
            </div>
            
            <div class="contact-item">
              <svg viewBox="0 0 24 24" width="24" height="24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" fill="currentColor"/></svg>
              <div>(+91) 9826414299</div>
            </div>
            
            <p class="contact-link"><a href="contact.html">Send us an email and we'll get in touch shortly</a></p>
          </div>

        </div>

        <div class="footer-bottom">
          <div class="footer-bottom-container">
            <!-- ADDED LINK TO WES CONSULTANCY -->
            <p>© Copyright Arihant Offset Printers 2019. All Rights Reserved. <a href="https://wes.co.in/" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: underline;">WES Consultancy & Services Pvt. Ltd.</a></p>
            
            <!-- UPDATED SOCIAL ICONS TO MATCH SCREENSHOT -->
            <div class="footer-socials">
              <!-- Facebook -->
              <a href="#" aria-label="Facebook" style="background-color: #4e5d94;"><svg viewBox="0 0 24 24" width="16" height="16"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" fill="#fff"/></svg></a>
              
              <!-- Twitter -->
              <a href="#" aria-label="Twitter" style="background-color: #2b96d1;"><svg viewBox="0 0 24 24" width="16" height="16"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="#fff"/></svg></a>
              
              <!-- Behance -->
              <a href="#" aria-label="Behance" style="background-color: #0d8bd6;"><svg viewBox="0 0 24 24" width="16" height="16"><path d="M22 7h-7V5h7v2zm-11.1 5.3c1-.3 1.7-1.1 1.7-2.3 0-2.3-1.9-3-3.9-3H2v13h7.1c2.5 0 4.5-1.1 4.5-3.6 0-1.7-.8-2.9-2.7-3.1zM5.5 8.7h2.4c.9 0 1.6.3 1.6 1.3 0 1-.7 1.3-1.6 1.3H5.5V8.7zm2.7 7.5H5.5v-2.8h2.8c1.1 0 1.8.4 1.8 1.4 0 1.1-.8 1.4-1.9 1.4zM24 12.8c0-2.4-1.6-4.3-4.2-4.3-2.6 0-4.3 1.9-4.3 4.4 0 2.5 1.7 4.3 4.4 4.3 2 0 3.6-1 4-2.8h-2.3c-.2.7-.8 1.1-1.6 1.1-1.1 0-1.8-.7-1.8-1.9h5.8v-.8zm-5.8-1.3c0-.9.6-1.5 1.5-1.5.9 0 1.5.6 1.5 1.5h-3z"/></svg></a>
              
              <!-- Pinterest -->
              <a href="#" aria-label="Pinterest" style="background-color: #c43a2c;"><svg viewBox="0 0 24 24" width="16" height="16"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.195 0 7.455 2.99 7.455 6.983 0 4.168-2.626 7.519-6.273 7.519-1.225 0-2.378-.637-2.771-1.385l-.753 2.87c-.272 1.05-1.006 2.363-1.498 3.159 1.103.343 2.275.53 3.487.53 6.621 0 11.988-5.367 11.988-11.987C24.017 5.367 18.638 0 12.017 0z" fill="#fff"/></svg></a>

              <!-- WordPress -->
              <a href="#" aria-label="WordPress" style="background-color: #2a97d6;"><svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5c-5.799 0-10.5-4.701-10.5-10.5S6.201 1.5 12 1.5s10.5 4.701 10.5 10.5-4.701 10.5-10.5 10.5zm-7.6-10.5c0 3.127 1.799 5.838 4.429 7.178L4.53 10.88c-.084.361-.13.74-.13 1.12zm13.214-2.394c0-.86-.313-1.445-.313-2.222 0-.814.703-1.486 1.526-1.486.062 0 .118.007.173.013-1.673-1.54-3.941-2.494-6.439-2.494-3.375 0-6.427 1.722-8.163 4.352.239.007.459.013.643.013.894 0 2.255-.11 2.255-.11.442-.026.494.632.051.684 0 0-.455.052-1.013.079 1.526 4.523 3.043 8.984 3.043 8.984l2.476-7.045-1.735-4.797c-.442-.026-.84-.052-.84-.052-.442-.026-.39-.684.051-.658 0 0 1.337.104 2.132.104.894 0 2.255-.104 2.255-.104.443-.026.495.632.052.658 0 0-.456.026-1.014.052l2.434 7.143.839-2.778zm-3.826 4.143l-2.243 6.545c2.51-.92 4.329-3.105 4.717-5.773l-2.474-6.772z" fill="#fff"/></svg></a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
  // ==========================================
  // 3. ACTIVE PAGE HIGHLIGHTING
  // ==========================================
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // ==========================================
  // 4. HEADER SCROLL EFFECT
  // ==========================================
  const header = document.getElementById("main-header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // ==========================================
  // 5. SCROLL REVEAL ANIMATIONS
  // ==========================================
  const reveals = document.querySelectorAll(".reveal");
  const revealOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
  const revealOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    });
  }, revealOptions);
  reveals.forEach((reveal) => {
    revealOnScroll.observe(reveal);
  });

  // ==========================================
  // 6. HERO SLIDER LOGIC (FIXED FOR ANIMATIONS)
  // ==========================================
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (slides.length > 0) {
    let currentSlide = 0;
    let slideInterval;
    const intervalTime = 5000;

    function showSlide(index) {
      slides.forEach((slide) => {
        slide.classList.remove("active", "prev");
      });
      slides[currentSlide].classList.add("prev");
      slides[index].classList.add("active");

      dots.forEach((dot) => dot.classList.remove("active"));
      dots[index].classList.add("active");

      currentSlide = index;
    }

    function nextSlide() {
      let nextIndex = (currentSlide + 1) % slides.length;
      showSlide(nextIndex);
    }

    function prevSlide() {
      let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(prevIndex);
    }

    function resetTimer() {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }

    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetTimer();
    });
    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetTimer();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
        resetTimer();
      });
    });

    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// ==========================================
// 7. MENU TOGGLE LOGIC (SMART)
// ==========================================
function handleMenuClick() {
  if (window.innerWidth <= 992) {
    document.querySelector(".main-nav").classList.toggle("active");
  } else {
    openSidebar();
  }
}

function openSidebar() {
  document.getElementById("sidebar-panel").classList.add("active");
  document.getElementById("sidebar-overlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  document.getElementById("sidebar-panel").classList.remove("active");
  document.getElementById("sidebar-overlay").classList.remove("active");
  document.body.style.overflow = "auto";
}

// ==========================================
// 8. COUNTER COUNT-UP ANIMATION
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  const counterValues = document.querySelectorAll(".counter-value");

  if (counterValues.length > 0) {
    // Use Intersection Observer so it only runs when scrolled into view
    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = +entry.target.getAttribute("data-target");
            const duration = 2000; // 2 seconds
            const stepTime = Math.abs(Math.floor(duration / target));

            let current = 0;
            const timer = setInterval(() => {
              current += 1;
              entry.target.innerText = current;

              if (current >= target) {
                entry.target.innerText = target;
                clearInterval(timer);
              }
            }, stepTime);

            // Stop observing once it has animated
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    ); // Triggers when 50% of the card is visible

    counterValues.forEach((counter) => {
      counterObserver.observe(counter);
    });
  }
});

// ==========================================
// 9. WHAT WE DO TABS LOGIC
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  const serviceTabs = document.querySelectorAll(".service-tab");
  const serviceContents = document.querySelectorAll(".service-content");

  if (serviceTabs.length > 0) {
    serviceTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        // 1. Remove active class from all tabs and contents
        serviceTabs.forEach((t) => t.classList.remove("active"));
        serviceContents.forEach((c) => c.classList.remove("active"));

        // 2. Add active class to clicked tab
        tab.classList.add("active");

        // 3. Show the matching content
        const targetId = tab.getAttribute("data-target");
        document.getElementById(targetId).classList.add("active");
      });
    });
  }
});

// ==========================================
// 10. TESTIMONIAL SLIDER LOGIC
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const indicators = document.querySelectorAll(".indicator");

  if (testimonialCards.length > 0) {
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        // 1. Remove active from all cards and indicators
        testimonialCards.forEach((card) => card.classList.remove("active"));
        indicators.forEach((ind) => ind.classList.remove("active"));

        // 2. Add active to the clicked indicator and its corresponding card
        indicator.classList.add("active");
        testimonialCards[index].classList.add("active");
      });
    });
  }
});

// ==========================================
// 11. ABOUT PAGE SLIDER LOGIC
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  const aboutSlides = document.querySelectorAll(".about-slide");

  if (aboutSlides.length > 0) {
    let currentAboutSlide = 0;

    setInterval(() => {
      // Remove active class from current slide
      aboutSlides[currentAboutSlide].classList.remove("active");

      // Calculate next slide index
      currentAboutSlide = (currentAboutSlide + 1) % aboutSlides.length;

      // Add active class to next slide
      aboutSlides[currentAboutSlide].classList.add("active");
    }, 4000); // Changes image every 4 seconds
  }
});

// ==========================================
// 12. ABOUT TESTIMONIAL SLIDER LOGIC
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  const tSlides = document.querySelectorAll(".testimonial-slide");
  const tDots = document.querySelectorAll(".t-dot");

  if (tSlides.length > 0) {
    let tCurrentSlide = 0;

    // Function to switch slides
    function showTSlide(index) {
      // Don't run if clicking the currently active slide
      if (index === tCurrentSlide) return;

      // 1. Move current active slide to the left (add 'prev')
      tSlides[tCurrentSlide].classList.remove("active");
      tSlides[tCurrentSlide].classList.add("prev");

      // 2. Update dots
      tDots.forEach((dot) => dot.classList.remove("active"));
      tDots[index].classList.add("active");

      // 3. Bring in the new slide from the right
      tSlides[index].classList.add("active");
      tSlides[index].classList.remove("prev");

      // 4. Update tracker
      tCurrentSlide = index;
    }

    // Add click event to dots
    tDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showTSlide(index);
      });
    });

    // Auto-play every 5 seconds
    setInterval(() => {
      let nextIndex = (tCurrentSlide + 1) % tSlides.length;
      showTSlide(nextIndex);
    }, 5000);
  }
});
