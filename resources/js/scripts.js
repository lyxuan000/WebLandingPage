$(document).ready(
    function(){
        //sticky nav
       $('.about-section').waypoint(
           function(direction){
               if(direction == "down")
               {
                   $('nav').addClass('sticky');
               }
               else
               {
                   $('nav').removeClass('sticky');
               }
           },
           {
               offset: '600px' /* khi croll cách about section 600px thì sẽ ko hiện */
           }
       )
       // Scroll hiệu ứng mượt khi sroll
       $('a').click(function(event){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 700);
        event.preventDefault();
    });
    
    }
)

