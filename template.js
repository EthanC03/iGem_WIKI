const totalHeight = document.body.scrollHeight - window.innerHeight;
const progressBar = document.getElementById("progressBar");

window.onscroll = () => {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.height = progressHeight + "%";
    if (progressHeight > 20 && progressHeight < 100) {
        $('#progressBar').fadeIn();
    } else {
        $('#progressBar').fadeOut();
    }
};