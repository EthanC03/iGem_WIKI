let progressBar = document.getElementById("progressBar");
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 40;
  progressBar.style.height = progressHeight + "%";
  if (progressHeight >= "10") {
    $('#rb').fadeIn();
  } else {
    $('#rb').fadeOut();
  }
};

$("#rb").bind("click", function () {
  $("html, body").animate({ scrollTop: 0 });
});