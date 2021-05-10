$(function(){

    $('.lst-bbs li:first-child').click(function(event){

        event.preventDefault()
        $('#modal').css('display', 'flex')
    })

    $('.btn-close').click(function(){
        $('#modal').hide()
    })

    let now=1,
        width=100

    setInterval(function(){

        if(now<3){

            $('.slide>ul').animate({
            left: (width * now * (-1))+'%'
            })

            now++
        
        }else{
            $('.slide>ul').animate({
                left:0
            })
            now = 1
        }
    }, 3000)
    

})