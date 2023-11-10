let buttonot = document.getElementsByClassName("services-other-close") [0];
let dialogot = document.getElementsByClassName("services-other-dialog") [0];
let btnot = document.getElementById("service-other");
let modalot = document.getElementById("modal-services-other");

btnot.addEventListener('click', function() {
    modalot.classList.add('show');
    setTimeout(function() {
        dialogot.style.transform = "rotateX(0)";
    }, 200)
})

buttonot.addEventListener('click', function() {
    dialogot.style.transform = "rotateX(90deg)";
    setTimeout(function() {
        modalot.classList.remove('show');
    }, 200)
})

document.addEventListener('click', function() {
    if(event.target == modalot) {
        dialogot.style.transform = "rotateX(90deg)";
        setTimeout(function() {
            modalot.classList.remove('show');
        }, 200)
    }
})