$(function(){
    $('.menu').mouseenter(function () {
        $('.box').addClass('on')
    })
    $('.menu').mouseleave(function () {
        $('.box').removeClass('on')
    })
    $('.tabnav li').click(function () {
        $('.tabnav li').removeClass('on')
        $(this).addClass('on')
        $('.item').hide()

        // popup
    //    setTimeout(function(){
    //     $('.popup').addClass('remove');
    //    },2500)


        let idx = $(this).index() //클릭한 번호
        // console.log(idx)
        $('.item').eq(idx).fadeIn()
    })
    //첫번째꺼가 클릭 되어 있는 상태 만들기
    $('.tabnav li').eq(0).trigger('click')

    $('.sound').click(function(){
        $(this).toggleClass('on')
        // $(active 클래스 붙은 애).addClass
        // if(그 클래스가 있으면){
        //     $(그 비디오).attr(muted, play)
        // }else {
        //     $(그 비디오).attr(뮤트, 음소거)
        // }
        let video = $(this).next('video')[0]
        video.muted = !video.muted
    })
})