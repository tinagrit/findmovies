function to(x) {
  document.getElementById(x).scrollIntoView(true);
}

function link(x) {
  location.href = x;
}

window.onscroll = function() {
    if (document.body.scrollTop > 45 || document.documentElement.scrollTop > 45) {
        document.querySelector("nav.fix").style.top = "0";
      } else {
        document.querySelector("nav.fix").style.top = "-80px";
      }
};