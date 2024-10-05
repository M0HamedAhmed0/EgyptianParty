$(document).ready(function () {
    $(".loader").animate({ width: "0px" }, 3000);
    $(".open").on("click", function () {
        $(".menu").animate({ width: "300px" }, 500);
        $(".home-content").animate({ marginLeft: "300px" }, 500);
    });

    ////////////////////////////// Scroll Menu

    $(".menu a[href^='#']").on("click", function (e) {
        e.preventDefault();
        let sectionLocation = $(this).attr("href");
        let sectionTop = $(sectionLocation).offset().top;
        $("html , body").animate({ scrollTop: sectionTop }, 2000);
    });

    ////////////////////////////// Accordion Menu

    $(".close").on("click", function () {
        $(".menu").animate({ width: "0px" }, 500);
        $(".home-content").animate({ marginLeft: "0px" }, 500);
    });

    $(".header").on("click", function () {
        $(this).next().slideToggle(500);
        $(".heading").not($(this).next()).slideUp(500);
    });

    //////////////////////////////Counter Functions

    $(window).on("load", function () {
        function counterTime() {
            let time = new Date("Oct 25 2023 GMT+0300");
            let now = new Date();
            let timeDifference = (time - now) / 1000;

            let days = Math.floor(timeDifference / 86400);
            let hours = Math.floor((timeDifference - days * 86400) / 3600);
            let minutes = Math.floor(
                (timeDifference - days * 86400 - hours * 3600) / 60
            );
            let seconds = Math.floor(
                timeDifference - days * 86400 - hours * 3600 - minutes * 60
            );

            $(".days").html(days + " D");
            $(".hours").html(hours + " H");
            $(".minutes").html(minutes + " M");
            $(".seconds").html(seconds + " S");
        }
        setInterval(counterTime, 1000);
    });

    ////////////////////////////// Textarea

    $("textarea").keyup(function () {
        let max = 100;
        let len = $(this).val().length;
        let remaining = max - len;
        if (remaining <= 0) {
            $(".number").text("your available character finished");
            $(this).attr("disabled", true);
        } else {
            $(".number").text(remaining);
        }
    });
});
