import Swiper from 'swiper/bundle';

function swiper() {
  const swiper = new Swiper('.swiper', {
    
    slidesPerView: 'auto',
    spaceBetween: 12,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    breakpoints: {
      840: {
        spaceBetween: 12
      }
    }

  });
}

export default swiper;