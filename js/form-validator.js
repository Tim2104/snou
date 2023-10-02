/*
 *  создание элемента-подсказки если форма заполнена не верно или не полностью.
 */

$(document).ready(function() {
    
    $("form").on("submit", function(event) {
      $("[data-f]").each(function() {

         if (!$(this).val()) {
             
            event.preventDefault();
            warning("#alert", $(this), "поле не должно быть пустым!");
            return false;
             
            } else if (!/[\d|\w]+@[\d|\w]+\.\w+/s.test($("input[email]").val())) {
                
                event.preventDefault();
                warning("#alert", $("input[email]"), "введите корректный email!");
                
            }

        });

    });


    $("[data-f]").on("focus", function() {

        if ($("div#alert")) $("div#alert").remove();

    });
});


/*
 *  функция warning для генерации блока-подсказки.
 *  порядок аргументов: id блока-подсказки; элемент к которому относится блок; текст сообщения.
 */

function warning(id, target, text) {
    
    if ($(document.body).find($(id)).length == 0) {
        
        $(document.body).append(`<div id="alert" class="_alert">
                                <div class="_alert-text">
                                    <div class="_alert-angle"></div>
                                    <span></span>
                                </div>
                            </div>`);
    }
    
    var y = target.offset().top + parseInt($("._alert").css("height"));
    var x = target.offset().left + parseInt($("._alert").css("width")) / 2.5;
    
    $("._alert").css({
                        "top": y + "px",
                        "left": x + "px"
                    });
    $("._alert-text span").text(text);
    
}
