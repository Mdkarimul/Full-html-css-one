/* =====================================================
   Resume section tabs and tab contents
===================================================== */

const resumeTabs = document.querySelector('.resume-tabs');
window.onload = ()=>{
   console.log(resumeTabs);
}
console.log(resumeTabs);
const resumePortfolioTabBtnd = resumeTabs.querySelectorAll('.tab-btn');
const resumeTabContents = document.querySelectorAll('.resume-tab-content');

const resumeTabNav = function(resumeTabClick) {

    resumeTabContents.forEach((resumeTabContent)=>{
      resumeTabContent[resumeTabClick].style.display="none";
      resumeTabContent[resumeTabClick].classList.remove('active');
    })


    resumePortfolioTabBtnd.forEach((resumePortfolioTabBtn)=>{
      resumePortfolioTabBtn[resumeTabClick].classList.remove('active');
    })

   resumeTabContents[resumeTabClick].style.display="flex";
   resumeTabContents[resumeTabClick].classList.add('active');
   resumePortfolioTabBtnd[resumeTabClick].classList.add('active');
}
resumePortfolioTabBtnd.forEach((resumePortfolioTabBtnd,i)=>{
   resumePortfolioTabBtnd.addEventListener('click',()=>{
      resumeTabNav(i);
   })
})



/* =====================================================
   Service modal open/close function
===================================================== */

const serviceCardWithModals = document.querySelectorAll('.service-container .card-with-modal');
serviceCardWithModal.forEach((serviceCardWithModal)=>{
   const serviceCard = serviceCardWithModal.querySelector('.service-card');
   const serviceBackDrop = serviceCardWithModal.querySelector('.service-modal-backdrop');
   const modalCloseBtn = serviceCardWithModal.querySelector('.modal-close-btn');
   const serviceModal = serviceCardWithModal.querySelector('.service-modal');
   serviceCard.addEventListener('click',()=>{
      serviceBackDrop.style.display="flex";
      setTimeout(()=>{
         serviceBackDrop.classList.add('active');
      },100)
      setTimeout(()=>{
         serviceModal.classList.add('active');
      },300)
      
      
   })
   modalCloseBtn.addEventListener('click',()=>{
      serviceBackDrop.style.display="none";
   })
})

/* =====================================================
   Portfolio modals, tabs and cards
===================================================== */

// Filter portfolio cards according to portfolio tabs.

document.addEventListener('DOMContentLoaded',()=>{
   const portfolioTabs = document.querySelector('portfolio-tabs');
   const portfolioTabBtns  = document.querySelectorAll('.tab-btn');
   const cardWithModals = document.querySelector('.portfolio-container .card-with-modal');

   portfolioTabBtns.forEach((tabBtn)=>{
      tabBtn.addEventListener('click',()=>{
         const filter = tabBtn.getAttribute('data-filter');
         cardWithModals.forEach((cardWithModal)=>{
            if(filter==="all" || cardWithModal.classList.contains(filter)){
              cardWithModal.style.opacity = "1";
            }
         });
      })
   })


})

// Open/Close Portfolio modals.

/* =====================================================
   Testimonial Swiper
===================================================== */

/* =====================================================
   Send/Receive emails from contact form - EmailJS
===================================================== */

/* =====================================================
   Shrink the height of the header on scroll
===================================================== */

/* =====================================================
   Bottom navigation menu
===================================================== */

// Each bottom navigation menu items active on page scroll.

// Javascript to show bottom navigation menu on home(page load).

// Javascript to show/hide bottom navigation menu on home(scroll).

// Hide bottom navigation menu on click menu-hide-btn.

// Show bottom navigation menu on click menu-show-btn.

/* =====================================================
   To-top-button with scroll indicator bar
===================================================== */

/* =====================================================
   Customized cursor on mousemove
===================================================== */

// Cursor effects on hover website elements.

/* =====================================================
   Website dark/light theme
===================================================== */

// Change theme and save current theme on click the theme button.

// Get saved theme icon and theme on document loaded.

/* =====================================================
   ScrollReveal JS animations
===================================================== */

// Common reveal options to create reveal animations.

// Target elements and specify options to create reveal animations.