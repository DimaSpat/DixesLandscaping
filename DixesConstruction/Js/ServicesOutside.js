let buttono = document.getElementsByClassName("services-outside-close")[0];
let dialogo = document.getElementsByClassName("services-outside-dialog")[0];
let btno = document.getElementById("service-outside");
let modalo = document.getElementById("modal-services-outside");

btno.addEventListener('click', function() {
    modalo.classList.add('show');
    setTimeout(function() {
        dialogo.style.transform = "rotateX(0)";
    }, 200);
});

buttono.addEventListener('click', function() {
    dialogo.style.transform = "rotateX(90deg)";
    setTimeout(function() {
        modalo.classList.remove('show');
    }, 200);
});

document.addEventListener('click', function(event) {
    if (event.target == modalo) {
        dialogo.style.transform = "rotateX(90deg)";
        setTimeout(function() {
            modalo.classList.remove('show');
        }, 200);
    }
});
