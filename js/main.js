$(function () {


    var myCircle = Circles.create({
        id: 'circles-1',
        radius: 80,
        value: 80,
        maxValue: 100,
        width: 10,
        text: $('#circles-1 + .spec__circles-title').html(),
        colors: ['#2e2e2e', '#fcb404'],
        duration: 400,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });
    var myCircle = Circles.create({
        id: 'circles-2',
        radius: 80,
        value: 80,
        maxValue: 100,
        width: 10,
        text: $('#circles-2 + .spec__circles-title').html(),
        colors: ['#2e2e2e', '#fcb404'],
        duration: 400,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true,

    });
    var myCircle = Circles.create({
        id: 'circles-3',
        radius: 80,
        value: 80,
        maxValue: 100,
        width: 10,
        text: $('#circles-3 + .spec__circles-title').html(),
        colors: ['#2e2e2e', '#fcb404'],
        duration: 400,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });




});
$(document).ready(function () {

    $(".spec__left").addClass("hidden").viewportChecker({
        classToAdd: 'visible animated rollIn slow',
        offset: 200
    });
    $(".spec__price").addClass("hidden").viewportChecker({
        classToAdd: 'visible animated flipInX slow',
        offset: 200
    });

    $(".spec__moto").addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight',
        offset: 200
    });

    $(".spec__circles-inner").addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp faster',
        offset: 100
    });

    $(".features__perfomance").addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight',
        offset: 200
    });

    $(".features__comfort").addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft',
        offset: 200
    });

    $(".features__moto img").addClass("hidden").viewportChecker({
        classToAdd: 'visible animated zoomIn',
        offset: 300
    });

    $(".preview__leftside").addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInLeft',
        removeClassAfterAnimation: true,
        classToRemove: 'hidden',
        offset: 200
    });

    $(".preview__moto img").addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInRight',
        removeClassAfterAnimation: true,
        classToRemove: 'hidden',
        offset: 200
    });

    $(".preview__moto-btn").addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn  slower',
        removeClassAfterAnimation: true,
        classToRemove: 'hidden',
        offset: 200
    });

    $(".preview__moto-btn").on('click', function () {
        $(".preview__moto img").removeClass("animated bounceInRight");
        setTimeout(function () {
            $('.preview__moto img').addClass("animated myflip");
            $(".preview__moto-btn").addClass("animated zoomOut");
            $('.preview__moto-btn').attr('disabled', 'disable');
        }, 100)
        setTimeout(function () {
            $(".preview__moto-btn").removeClass("animated zoomOut");
            $(".preview__moto-btn").addClass("animated zoomIn");

        }, 2500)
        setTimeout(function () {
            $('.preview__moto img').removeClass("animated myflip");
            $(".preview__moto-btn").removeClass("animated zoomIn");
            $('.preview__moto-btn').removeAttr('disabled', 'disable');
        }, 5000)

    });

    $(".footer__btn").on("click touchstart", function () {
        $(this).addClass("fly");
        that = this
        setTimeout(function () {
            $(that).removeClass("fly");
        }, 4800)
    });


    


});
$(document).ready(function () {

    $(window).resize(function (event) {
        $(".item__content").css("display", "none");
        sizeCheck();
        
    });

    function spoller() {
        $(".item__title").removeClass('active');
        $(".item__title").click(function (event) {
            $(this).toggleClass('active').next().slideToggle(300);
        });

    }

    function sizeCheck() {
        var w = $(window).width();        
        if (w < 460) {
            $(".item__title").off();
            spoller();
        } else {
            $(".item__title").off();
            $(".item__content").css("display", "block");
        }

    }
    sizeCheck();
})

