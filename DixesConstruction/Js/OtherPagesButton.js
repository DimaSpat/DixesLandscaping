var buttons = document.getElementsByClassName("redirectButton");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var redirectURL = this.getAttribute("data-redirect");
    window.location.href = redirectURL;
  });
}
