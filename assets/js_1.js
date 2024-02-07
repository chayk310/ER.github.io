const sliderWrap = document.querySelector(".slider__wrap");
const sliderImg = sliderWrap.querySelector(".slider__img");         //보여지는 영역
const sliderInner = sliderWrap.querySelector(".slider__inner");     //움직이는 영역
const slider = sliderWrap.querySelectorAll(".slider");              //개별 이미지
const sliderDot = sliderWrap.querySelector(".slider__dot");         //닷 메뉴
const sliderBtn = sliderWrap.querySelectorAll(".slider__btn a");    //버튼

let currentIndex = 0;                                               //현재 보이는 이미지
let sliderCount = slider.length;                                    //이미지 갯수
let sliderInterval = 2000;                                          //이미지 변경 간격 시간
let sliderWidth = slider[0].offsetWidth;                            //이미지 가로 값
let dotIndex = "";

function init(){
  //이미지 갯수만큼 닷 메뉴 생성
  slider.forEach(() => dotIndex += "<a href ='#' class='dot'>이미지</a>");
  sliderDot.innerHTML = dotIndex;

  //첫 번째 닷 메뉴한테 활성화 표시하기
  sliderDot.firstChild.classList.add("active");
}
init();


//이미지 이동시키기
function gotoSlider(num){
  sliderInner.style.transition = "all 400ms";
  sliderInner.style.transform = "translateX("+ -sliderWidth * num +"px)";
  currentIndex = num;

  //닷 메뉴 활성화하기
  let dotActive = document.querySelectorAll(".slider__dot .dot");
  dotActive.forEach((active) => active.classList.remove("active"));
  dotActive[num].classList.add("active");
}

//버튼을 클릭했을 때
sliderBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
  let prevIndex = (currentIndex+(sliderCount-1)) % sliderCount;
  let nextIndex = (currentIndex+1) % sliderCount;   //1 2 3 4 0 1 2 3 4

  if(btn.classList.contains("prev")){
     gotoSlider(prevIndex);
   } else {
     gotoSlider(nextIndex);
   }
  });
});

//dot 클릭
document.querySelectorAll(".slider__dot .dot").forEach((dot, index) => {
   dot.addEventListener("click", () => {
      gotoSlider(index);
   });
});
