$(document).ready(function() {
    
    $(".nav-item").on("click", function() {

        $(".nav-block-lnk").slideDown(500);

    });

    $(".nav-menu-closer").on("click", function() {

        $(".nav-block-lnk").slideUp(700);
    });
    
    
    var clone, isClone = false;
    
    $(document).on("scroll", function() {
        
        if($(this).scrollTop() > 500) {
            
            if(!isClone) {
                
                isClone = true;

                clone = $("header")
                    .clone(true)
                    .prependTo("html")
                    .css({
                        "padding": "10px",
                        "position": "fixed",
                        "top": 0,
                        "left": 0,
                        "height": "64px",
                        "right": 0,
                        "z-index": 9999,
                        "opacity": 0
                    })
                    .animate({
                        opacity: 1
                }, 350);
                
                clone.find("nav").css({
                    "align-items": "flex-start",
                    "-o-align-items": "flex-start",
                    "-ms-align-items": "flex-start",
                    "-moz-align-items": "flex-start",
                });
                clone.find(".nav-item").css({
                    "padding": "0 8px",
                    "height": "62px"
                });
            }
        }
        else if($(this).scrollTop() < 170 && isClone) {
            
            clone.animate({
                    opacity: 0
                }, 400, function() {
                
                    clone.remove();
                
                });
            
            isClone = false;
            
        }
    });

});