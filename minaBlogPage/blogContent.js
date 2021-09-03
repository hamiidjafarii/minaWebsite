$('#navbarSupportedContent a').click(function(line) {
    line.preventDefault();
    $("#navbarSupportedContent a").removeClass('active');
    $(this).addClass('active');
});

$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 20){
            $('#btn-back-to-top').fadeIn();
        } else {
            $('#btn-back-to-top').fadeOut();
        }
    });


    $("#btn-back-to-top").click(function(){
        $('html , body').animate({scrollTop : 0},800)
    });
});