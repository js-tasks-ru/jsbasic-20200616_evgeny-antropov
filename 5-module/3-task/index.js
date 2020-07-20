function initCarousel() {
  let container = document.querySelector('.container');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let slide = document.querySelector('.carousel__slide');
  let carousel = document.querySelector('.carousel__inner');
  let position = 0; //начальная позиция слайдера
  let currentSlideNumber = 0; //номер текущего слайда
  let slideWidth = slide.offsetWidth;
  let maxPosition = -(3 * slideWidth);

  function carouselTranslate(position) {
    carousel.style.transform = `translateX(${position + 'px'}`;
  }

  function slideMovement(button) {
    if (button === arrowLeft) {
      //сдвиг влево
      --currentSlideNumber;
      position = -carousel.offsetWidth * currentSlideNumber; // номер слайда * на ширину слайда
      carouselTranslate(position);
    } else if (button === arrowRight) {
      //сдвиг вправо
      ++currentSlideNumber;
      position = -carousel.offsetWidth * currentSlideNumber; // номер слайда * на ширину слайда
      carouselTranslate(position);
    }
  }

  function checkPosition() {
    //проверяем значение position и скрываем кнопки переключения слайдов
    if (position === 0) {
      arrowLeft.style.display = 'none';
    } else if (position === maxPosition) {
      arrowRight.style.display = 'none';
    } else {
      arrowRight.style.display = '';
      arrowLeft.style.display = '';
    }
  }

  checkPosition();

  container.addEventListener('click', function(evt) {
    let target = evt.target.closest('div.carousel__arrow');

    if (!target) return;

    slideMovement(target);
    checkPosition();
  })

}
