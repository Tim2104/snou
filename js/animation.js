/*
 *  функция анимации.
 *  
 *  свойства объекта-аргумента:
 *  
 *  {
 *      element:  селектор,
 *      action:   событие-инициатор анимации,
 *      addClass: добавляемый класс. осуществляет анимацию,
 *      rmClass:  удаляемый класс. завершает анимацию.
 *  }
 */
function animate(obj) {
    
    obj = obj || {};
    
    $(obj.element).on(obj.action, function() {
        
        if(obj.addClass) $(this).addClass(obj.addClass);
        
        if(obj.rmClass) {
            if($(this).hasClass(obj.rmClass)) $(this).removeClass(obj.rmClass);
        }
        
    });
    
}

$(document).ready(function() {
   
/*
 *  анимация слайдера.
 *  элемент слайда смещается вниз и одновременно увеличивается, добавляется тень.
 *  
 */
    animate({
        element: ".blog-slider-case",
        action: "mouseover",
        addClass: "shadow-translate-in",
        rmClass: "shadow-translate-out"
    });
    
    animate({
        element: ".blog-slider-case",
        action: "mouseout",
        addClass: "shadow-translate-out",
        rmClass: "shadow-translate-in"
    });
    
/*
 *  анимация кнопки со стрелкой вниз.
 *  увеличивается радиус тени, затем уменьшается не до конца.
 *  
 */ 
    animate({
        element: ".banner-arrow-wrap",
        action: "mouseover",
        addClass: "shadow-rise"
    });
    
    animate({
        element: ".banner-arrow-wrap",
        action: "mouseout",
        rmClass: "shadow-rise"
    });
    
});