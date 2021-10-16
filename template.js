let progressBar = document.getElementById("progressBar");
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 40;
    progressBar.style.height = progressHeight + "%";
    
    if (progressHeight >= "5") {
        $('#rb').fadeIn();
    } else {
        $('#rb').fadeOut();
    }

    if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
        $('#progressBar').fadeOut();
    } else {
        $('#progressBar').fadeIn();
    }
}

$('#rb').click(function () {
    $('html, body').animate({ scrollTop: 0 });
});