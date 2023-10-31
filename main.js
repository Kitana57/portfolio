var swiper = new Swiper(".slide-content", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    fade:"true",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints:{
        0:{
            slidesPerView:1,
        },
        520:{
            slidesPerView:2,
        },
        950:{
            slidesPerView:3,
        },
        
    }
  });

const nav_header = document.querySelector("header")
const section_first = document.querySelector(".first-sec");

const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);
    ent.isIntersecting === false ? document.body.classList.add('sticky') : document.body.classList.remove('sticky');

  },
  {
  root:null,
  rootMargin: "-50px",
  threshold: 0,
});

observer.observe(section_first);