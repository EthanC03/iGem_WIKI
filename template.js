let progressBar = document.getElementById("progressBar");
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 40;
    progressBar.style.height = progressHeight + "%";
}

$('#rb').bind('click', function () {
    $('html,body').animate({ scrollTop: 0 });
});

$("a[href^='#']").click(function (e) {
    e.preventDefault();
    var position = $($(this).attr("href")).offset().top;
    $("body, html").animate({
        scrollTop: position
    });
});