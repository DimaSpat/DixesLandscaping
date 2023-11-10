let buttoni = document.getElementsByClassName("services-inside-close") [0];
let dialogi = document.getElementsByClassName("services-inside-dialog") [0];
let btni = document.getElementById("service-incide");
let modali = document.getElementById("modal-services-inside");

btni.addEventListener('click', function() {
    modali.classList.add('show');
    setTimeout(function() {
        dialogi.style.transform = "rotateX(0)";
    }, 200)
})

buttoni.addEventListener('click', function() {
    dialogi.style.transform = "rotateX(90deg)";
    setTimeout(function() {
        modali.classList.remove('show');
    }, 200)
})

document.addEventListener('click', function() {
    if(event.target == modali) {
        dialogi.style.transform = "rotateX(90deg)";
        setTimeout(function() {
            modali.classList.remove('show');
        }, 200)
    }
})