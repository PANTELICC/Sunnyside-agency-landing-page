$(document).ready(function(){var ind = true;
    $('.ham').click(function(){
        
        if(ind){
            $('.header .nav ul').css('display','flex');
            ind = false
        }
        else{
            $('.header .nav ul').css('display','none');
            ind = true;
        }

    });
});