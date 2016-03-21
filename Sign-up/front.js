$(document).ready(function() {
    $('.about').hide();
    var lis = $('li').hide();
    lis.eq(0).fadeIn(1000);
    var i = 1;
    $('.one, .two').on('click', function(){
        lis.eq(i).fadeIn(1000);
        i++;
        lis.eq(i-2).fadeOut(1000);
        
        if(i > 6)
        {
            $('.center').addClass('anim')
            $('.about').fadeIn(1000);
        }
    })();

    
});