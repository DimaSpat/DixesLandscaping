let button = document.getElementsByClassName("modal_close") [0];
let dialog = document.getElementsByClassName("modal_dialog") [0];
let btn = document.getElementById("see-projects-button");
let modal = document.getElementById("modal");

btn.addEventListener('click', function() {
    modal.classList.add('show');
    setTimeout(function() {
        dialog.style.transform = "rotateX(0)";
    }, 200)
})

button.addEventListener('click', function() {
    dialog.style.transform = "rotateX(90deg)";
    setTimeout(function() {
        modal.classList.remove('show');
    }, 200)
})

document.addEventListener('click', function() {
    if(event.target == modal) {
        dialog.style.transform = "rotateX(90deg)";
        setTimeout(function() {
            modal.classList.remove('show');
        }, 200)
    }
})