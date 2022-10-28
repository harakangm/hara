//모바일 햄버거 버튼 클릭시
$('.hamburger').click(function(){
    $('.mobile.hamburger').hide()
    $('.mobile.close').show()

    $('#mobile_menu').empty()

    var nav = $('.nav').clone()

    $('#mobile_menu').append(nav) // append: 내가 선택한 요소에 하위 태그로 들어옴
    $('#mobile_menu').show()

    

}) 
//모바일 햄버거 닫기
$('.close').click(function(){
    $('.mobile.hamburger').show()
    $('.mobile.close').hide()
    $('#mobile_menu').hide()
})

// 브라우저 리사이징 될 때 모바일 메뉴 보이는 버그 방지
$(window).resize(function(){
    var width = $(window).width()
    
    if(width >= 767){
        if ($("#mobile_menu").is(":visible")) {
            $(".mobile.hamburger").show();
            $(".mobile.close").hide();
            $("#mobile_menu").hide();
        }

    }
})