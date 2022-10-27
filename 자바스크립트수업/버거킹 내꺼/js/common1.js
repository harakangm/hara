// 1. pc버전 서브메뉴 관련 코드 작성

const menu = document.querySelector(".menu__main") // 전체메뉴
const subMenus = document.querySelectorAll('.list__drop') // 하위 메뉴
const panel = document.querySelector('.header__panel') // 하위 메뉴 나올때 뒤에 있는 흰색 판넬
const header = document.querySelector('.header') //전체 헤더

// 처음 매개변수는 이벤트명 하위 메뉴 보여줌
menu.addEventListener('mouseover', function(){
    // 마우스 오버했을때 이벤트 발생
    panel.style.display ='block'

    subMenus.forEach(function(subMenu){
        subMenu.style.display = 'block'
    })
})

menu.addEventListener('mouseover', function(){
    panel.style.display = 'block'
    subMenus.forEach(function(subMenu){
        subMenu.style.display = 'block'
    })
})


//하위 메뉴 숨김

header.addEventListener('mouseout', function(){
    //마우스를 땟을 흰색 판넬 배경을 보여줌
    panel.style.display = 'none'
    // 마우스를 땟을때 메뉴를 숨겨줌
    subMenus.forEach(function(subMenu){
       subMenu.style.display ='none'
    })
})

panel.addEventListener('mouseout', function(){
    
    panel.style.display = 'none'
    // 마우스를 땟을때 메뉴를 숨겨줌
    subMenus.forEach(function(subMenu){
        subMenu.style.display ='none'
    })
})





// 2. 모바일 버전 메뉴 보이기, 숨기기 이벤트 추가
const Mhamburger = document.querySelector('.mobile.hamburger') //햄버거
const Mclose = document.querySelector('.mobile.close') //닫기 버튼
const Mnav = document.querySelector('.header__Mnav') //모바일 메뉴 전체

Mhamburger.addEventListener('click', function(){
    Mnav.style.display = 'block';
})

Mclose.addEventListener('click', function(){
    Mnav.style.display = 'none'
})


// 3. 모바일 하위 메뉴 보이기 숨기기

function showHide(e) {
    // 칠드런 자식 요소
    const MListDrop = e.children[2]; //내가 선택한 메뉴의 하위메뉴
    //const displayAttr = MListDrop.style.display;
    const displayAttr = window.getComputedStyle(MListDrop).display

    if (displayAttr === 'none') {
        MListDrop.style.display = 'block';
    } else {    
        MListDrop.style.display = 'none';
    }
}

// 4. width 가 767px 이상일 때 모바일 메뉴 보임 방지

window.addEventListener('resize', function(){
    //innerWidth: 윈도우의 창크기를 구함
    let winWidth = window.innerWidth;

    if(winWidth => 767) {
        Mnav.style.display ='none'
    }
})



