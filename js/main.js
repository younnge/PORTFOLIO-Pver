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


    gsap.registerPlugin(ScrollTrigger);
    const ani1 = gsap.timeline();
    const s1 = document.querySelector('.section1')
    ani1.to('.s1', { rotate: 720, duration: 3 }, "text"),
    ani1.to('.s2', { rotate: -720, duration: 3 }, "text"),
    ani1.to('.p', { autoAlpha: 1, xPercent: 20, delay: 0.2, y: -20 }, "text")
    ani1.to('.first', { autoAlpha: 1, xPercent: 40, delay: 0.4, y: -60 }, "text")
    ani1.to('.r', { autoAlpha: 1, xPercent: 80, delay: 0.6, y: -20 }, "text")
    ani1.to('.t', { autoAlpha: 1, xPercent: 60, delay: 0.8, y: -60 }, "text")
    ani1.to('.f', { autoAlpha: 1, xPercent: 100, delay: 1, y: -20 }, "text")
    ani1.to('.second', { autoAlpha: 1, xPercent: 90, delay: 1.2, y: -60 }, "text")
    ani1.to('.l', { autoAlpha: 1, xPercent: 180, y: -100, delay: 1.4, y: -80 }, "text")
    ani1.to('.i', { autoAlpha: 1, xPercent: 260, delay: 1.6, y: -90 }, "text")
    ani1.to('.third', { autoAlpha: 1, xPercent: 160, delay: 1.8, y: -70 }, "text")
    ani1.to('.s', { autoAlpha: 1, xPercent: 20, delay: 0.3 }, "text")
    ani1.to('.u', { autoAlpha: 1, xPercent: 50, delay: 0.6, y: 20 }, "text")
    ani1.to('.n', { autoAlpha: 1, xPercent: 60, delay: 0.9, y: 60 }, "text")
    ani1.to('.y', { autoAlpha: 1, xPercent: 70, delay: 1.2, y: 30 }, "text")
    ani1.to('.fourth', { autoAlpha: 1, xPercent: 100, delay: 1.5, y: 40 }, "text")
    ani1.to('.usecond', { autoAlpha: 1, xPercent: 100, delay: 1.8, y: 50 }, "text")
    ani1.to('.nthird', { autoAlpha: 1, xPercent: 170, delay: 2.1, y: 60 }, "text")
    ani1.to('.g', { autoAlpha: 1, xPercent: 140, delay: 2.4, y: 90 }, "text")

    ScrollTrigger.create({
        animation: ani1,
        trigger: s1,
        start: "top top",
        end: "+=3000 bottom",
        pin: true,
        scrub: 3,
    })

    const ani2 = gsap.timeline();
    const s2 = document.querySelector('.section2')
    ani2.fromTo('.top', { left: -100, xPercent: 100 }, { left: 0, xPercent: 0 }, "film"),
        ani2.fromTo('.bottom', { right: -100, xPercent: -100 }, { right: 0, xPercent: 0 }, "film")

    ScrollTrigger.create({
        animation: ani2,
        trigger: s2,
        start: "top top",
        end: "+=3000 bottom",
        pin: true,
        scrub: 3,
    })

    const ani3 = gsap.timeline();
    const s3 = document.querySelector('.section3')
    ani3.fromTo('.clip1', { yPercent: -200, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1 }
        , "a"),
    ani3.fromTo('.clip2', { yPercent: -200, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, delay: 0.3 }
        , "a"),
    ani3.fromTo('.clip3', { yPercent: -200, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, delay: 0.2 }
        , "a"),
    ani3.fromTo('.clip4', { yPercent: - 200, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, delay: 0.4 }
        , "a"),

    ani3.fromTo('.photo1', { yPercent: 200, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1 }
        , "a"),
    ani3.fromTo('.photo2', { yPercent: 200, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, delay: 0.3 }
        , "a"),
    ani3.fromTo('.photo3', { yPercent: 200, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, delay: 0.2 }
        , "a"),
    ani3.fromTo('.photo4', { yPercent: 200, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, delay: 0.4 }
        , "a"),

        ScrollTrigger.create({
            animation: ani3,
            trigger: s3,
            start: "top top",
            end: "+=6000 bottom",
            pin: true,
            scrub: 3,
        })

    const bs = document.querySelector(".bs");
    const sections = gsap.utils.toArray(".bs > #section");
    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: bs,
            start: "top top",
            end: () => "+=" + (bs.offsetWidth - innerWidth),
            pin: true,
            anticipatePin: 1,
            scrub: 5,
            invalidateOnRefresh: true,
        }
    })

    AOS.init({
        duration: 3000,
    });


    // coding part
    $('.smallbox').click(function () {
        $(this).toggleClass('on').siblings().removeClass('on')
    })


    $(document).ready(function () {

        $(window).scroll(function () {
            console.log($(this).scrollTop())
            $('main .sections').each(function () {
                if ($(this).offset().top <= $(window).scrollTop()) {
                    $('.box ul li').removeClass('on')
                    let idx = $(this).index()
                    $('.box ul li').eq(idx).addClass('on')
                }
            })
        })
        $('.box ul li').click(function () {
            $(this).addClass('on').siblings().removeClass('on')

            let idx = $(this).index()
            let section = $('main  .sections').eq(idx)
            let sd = section.offset().top - (114)
            $('html, body').animate({
                scrollTop: sd
            })
        })

        $('.round').click(function () {
            $('html, body').animate({
                scrollTop: 0,
            }, 500)
        })
        $('.box ul li.iii').click(function () {
            $('html, body').animate({
                scrollTop: 4950,
            }, 500)
        })
        $('.box ul li.ggg').click(function () {
            $('html, body').animate({
                scrollTop: 10950,
            }, 500)
        })
        $('.box ul li.qqq').click(function () {
            $('html, body').animate({
                scrollTop: 12000,
            }, 500)
        })
        $('.box ul li.ccc').click(function () {
            $('html, body').animate({
                scrollTop: 15800,
            }, 500)
        })
        $('.box ul li.vvv').click(function () {
            $('html, body').animate({
                scrollTop: 19600,
            }, 500)
        })
        $('.box ul li.www').click(function () {
            $('html, body').animate({
                scrollTop: 21100,
            }, 500)
        })
        $('html,body').animate({
            scrollTop: 0
        }, 200)

        window.addEventListener('load', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

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
    });
})