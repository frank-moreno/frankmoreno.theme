

const swiper = new Swiper('.swiper-projects', {
    observeSlideChildren: true,
    slideToClickedSlide: true,
    updateOnWindowResize: true,
    slidesPerView: 1.5,
    spaceBetween: 0,
    // loop: true,
    speed: 5000,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        760: {
            slidesPerView: 1.5
        },
        992: {
            slidesPerView: 1.5
        }
    },
    autoplay: {
       delay: 4000,
       disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    // navigation: {
    //     nextEl: '.swiper-button-prev',
    //     prevEl: '.swiper-button-next',
    // },
    grabCursor: true
  });

  const swiper_projects = new Swiper('.swiper-project-images', {
    observeSlideChildren: true,
    slideToClickedSlide: true,
    updateOnWindowResize: true,
    slidesPerView: 1.5,
    spaceBetween: 0,
    // loop: true,
    speed: 5000,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        760: {
            slidesPerView: 1.5
        },
        992: {
            slidesPerView: 1.5
        }
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    // navigation: {
    //     nextEl: '.swiper-button-prev',
    //     prevEl: '.swiper-button-next',
    // },
    grabCursor: true
  });

  const howtigoes = new Swiper('.howitgoes-swiper', {
    observeSlideChildren: true,
    slideToClickedSlide: true,
    updateOnWindowResize: true,
    slidesPerView: 1,
    spaceBetween: 20,
    // loop: true,
    speed: 3000,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        760: {
            slidesPerView: 1.5
        },
        992: {
            slidesPerView: 2.5
        }
    },
    // autoplay: {
    //    delay: 2000,
    //    disableOnInteraction: false,
    // },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     dynamicBullets: true,
    //   },
    grabCursor: true
  });