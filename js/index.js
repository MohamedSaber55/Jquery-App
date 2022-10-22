

$(document).ready(function () {
    $(".home .layer span").click(function () {
        $(this).toggleClass("span-view")
        $(".home .layer .nav").toggleClass("nav-view")
    })
    $(".accordion-page .container .row .one h3").click(function () {
        $(".accordion-page .container .row .one p").slideToggle(500);
    })
    $(".accordion-page .container .row .two h3").click(function () {
        $(".accordion-page .container .row .two p").slideToggle(500);
    })
    $(".accordion-page .container .row .three h3").click(function () {
        $(".accordion-page .container .row .three p").slideToggle(500);
    })
    $(".accordion-page .container .row .four h3").click(function () {
        $(".accordion-page .container .row .four p").slideToggle(500);
    })



    $("#countdown-active").countdown("2023/01/01", function(event) {
        $(this).html(event.strftime(`
        <div class="col-md-3"><div class="single-countdown"><h2>%D</h2><span>Days</span></div></div>
        <div class="col-md-3"><div class="single-countdown"><h2>%H</h2><span>Hour</span></div></div>
        <div class="col-md-3"><div class="single-countdown"><h2>%M</h2><span>Minutes</span></div></div>
        <div class="col-md-3"><div class="single-countdown"><h2>%S</h2><span>Seconds</span></div></div>
        `));
    });
    let maxTextLength =$("#text-area").attr("maxlength");
    $('#chars-remaining').html(`<span class="text-danger fs-5" >${maxTextLength} </span>Character Remaining`)
    $('#text-area').keyup(function () {
    let textAreaValue = $('#text-area').val();
    $('#chars-remaining').html(`<span class="text-danger fs-5" >${maxTextLength-Number(textAreaValue.length)} </span>Character Remaining`)
});

})



