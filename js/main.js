$(document).ready(function () {
    // START JS

    // Evento al click della freccia sinistra
    $(".prev").click(
        function() {
            prevImage();
        }
    );
    
    // Evento al click della freccia destra
    $(".next").click(
        function() {
            nextImage();
        }
    );

    // Evento alla pressione dei tasti
    $(document).keydown(
        function() {
            if(event.which == 37) {
                prevImage();
            } else if (event.which == 39) {
                nextImage();
            }
        }
    );

    // Evento al click sui pallini
    $(".nav > i").click(
        function() { 
            var currentImage;
            var activeImage = $(".images img.active");
            var activeCircle = $(".nav i.active");
            
            activeImage.removeClass("active");
            activeCircle.removeClass("active");       
            
            $(this).addClass("active");
            currentImage = $(this).index();
            $(".images > img").eq(currentImage).addClass("active");
        }
    );


    // MY FUNCTIONS-----------------------------------------------

    function prevImage() {
        var activeImage = $(".images img.active");
        var activeCircle = $(".nav i.active");
        var lastImage = $(".images img.last");
        var lastCircle = $(".nav i.last");

        activeImage.removeClass("active");
        activeCircle.removeClass("active");

        if (activeImage.hasClass("first") == true) {
            lastImage.addClass("active");
            lastCircle.addClass("active");
        } else {
            activeImage.prev("img").addClass("active");
            activeCircle.prev().addClass("active");
        }
    }

    function nextImage() {
        var activeImage = $(".images img.active");
        var activeCircle = $(".nav i.active");
        var firstImage = $(".images img.first");
        var firstCircle = $(".nav i.first");

        activeImage.removeClass("active");
        activeCircle.removeClass("active");

        if (activeImage.hasClass("last") == true) {
            firstImage.addClass("active");
            firstCircle.addClass("active");
        } else {
            activeImage.next("img").addClass("active");
            activeCircle.next().addClass("active");
        }
    }

    // END JS
});
