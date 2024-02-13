window.onload = function() {
  const kindWrap =  document.querySelector('.kind_wrap');
  const slider = kindWrap.querySelector('.slider');
  const slideLis = slider.querySelectorAll('li')
  const moveButton = kindWrap.querySelector('.arrow');

  /* ul 넓이 계산해 주기 */
  const liWidth = slideLis[0].clientWidth;
  const sliderWidth = liWidth * slideLis.length;
  slider.style.width = `${sliderWidth}px` ;
  

  /* 리스너 설치하기 */
  let currentIdx = 0; // 슬라이드 현재 번호
  let translate = 0; // 슬라이드 위치 값
  const speedTime = 500;
  moveButton.addEventListener('click', moveSlide);

  function move(n){
        currentIdx += (-1 * n);
        translate += n * liWidth;
        slider.style.transform = `translateX(${translate}px)`;
        slider.style.transition = `all ${speedTime}ms ease`;
  }
  
  function moveSlide(event) {
    event.preventDefault();
    if (event.target.className === 'next') {
      if (currentIdx !== slideLis.length -1) {
          move(-1);
      }
    } else if (event.target.className === 'prev') {
        if (currentIdx !== 0) {
          move(1);
        }
      }
  }

}
