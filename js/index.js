$(function () {
    $('#dowebok').fullpage({
        navigation: true,
        sectionsColor: ['#f9dd67', '#84a2d4', '#ef674d', '#ffeedd', '#cf4759', '#85d9ed', '#8ac060', '#84d9ed'],
        afterLoad: function (a, index) {
            $('.section').removeClass('animation')
            $('.section').eq(index - 1).addClass('animation');
            $('.section2 .search').attr('style', '').attr('src', 'images/02/search01.png')
            // $('.section2 .sofas').attr('style', '')
            // $('.section4 .carBox').attr('style', '')
            // $('.section4 .keybox').attr('style', '')
            $('.section4 .words').attr('src', 'images/04/words02.png');
            $('.section>div div,.section>div img').attr('style','');
            $('.section6').css('backgroundPositionX','-200px')
            if (index == 2) {
                $('.search').animate({
                    right: 820
                }, 1000, 'easeOutBounce', function () {
                    $('.search').attr('src', 'images/02/search02.png').delay(500).animate({
                        right: 648,
                        top: 446,
                        height:38
                    }, 500, function () {
                        $('.sofas').delay(500).animate({
                            width: 441,
                            height: 218
                        }, 500)
                    })

                })
            } else if (index == 3) {
                $('.section3').addClass('animation')
            } else if (index == 4) {
                $('.carBox').animate({
                    marginLeft: 1500
                }, 1800, 'easeInElastic', function () {
                    $('.words').attr('src', 'images/04/words01.png');
                    $('.keybox').animate({
                        opacity: 1
                    }, 500)
                })
            } else if (index == 6) {
                $('.xiangzi').animate({
                    bottom: 120
                }, 1700, function () {
                    $('.section6').animate({
                        backgroundPositionX: -1100
                    }, 2000, function () {
                        $('.man').animate({
                            height: 160
                        }, 500, function () {
                            $('.man').animate({
                                left: 740
                            },500,function () { 
                                $('.door').show()
                                setTimeout(function () { 
                                $('.girl').show()                                    
                                 },500)
                             })
                        })
                    })
                })
            }else if(index==7){
                $('.good').delay(1000).fadeIn(2000)
            }else if(index==8){
                $('.section8').mousemove(function (e) { 
                    e = e || window.event
                    $('.hand').css('left',e.pageX-60)
                    $('.hand').css('top',e.pageY-60)
                 })
                 $('.begin').mouseover(function () { 
                     $(this).attr('src','images/08/begin.gif');
                  })
                  $('.again').click(function () { 
                      $.fn.fullpage.moveTo(1);
                   })
            }

        }
    });
})