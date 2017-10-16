window.onload = function() {

    $(".button__show--contact").on("click", function() {
        $(".overlay").show();
        $(".contact").show();
    });

    $(".contact__button--close").on("click", function() {
        $(".overlay").hide();
        $(".contact").hide();
    });

    $(".figure").on("click", function() {
        $(this).find(".figure__text").slideToggle("slow");
    });
};