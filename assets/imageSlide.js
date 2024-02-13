 window.onload = function() {
    const kindWrap = document.querySelector('.slide');
    const slider = kindWrap.querySelector('.slider_img');
    const slideLis = slider.querySelectorAll('li')
    const moveButton = kindWrap.querySelector('.arrow');

    /* 주요 변수 초기화 */  
    let currentIdx = 0;
    let translate = 0;
    const speedTime = 500;

    /* CSSOM 셋업 */
    const liWidth = slideLis[0].clientWidth;
    const sliderWidth = liWidth * slideLis.length;
    slider.style.width = `${sliderWidth}px` ;

    /* 리스너 설치하기 */
    moveButton.addEventListener('click', moveSlide);

    /* 슬라이드 실행 */
    function move(D) {
      currentIdx += (-1 * D);
      translate += liWidth * D;
      slider.style.transform = `translateX(${translate}px)`;
      slider.style.transition = `all ${speedTime}ms ease`
  }


    /* 버튼 클릭 */
    function moveSlide(event) {
      event.preventDefault();
      if (event.target.className === 'next') {
        if (currentIdx === slideLis.length -1) return;
          move(-1);
      } else {
          if (currentIdx === 0) return;
            move(1);
        }
    }

  }
