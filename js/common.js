function openNavbar() {
    document.getElementsByClassName("hamburger-menu")[0].style.display = "none";
    document.getElementsByClassName("close-menu")[0].style.display = "block";
    document.getElementsByClassName("dropdown-div")[0].style.display = "flex";
}
function closeNavbar() {
    document.getElementsByClassName("hamburger-menu")[0].style.display = "block";
    document.getElementsByClassName("close-menu")[0].style.display = "none";
    document.getElementsByClassName("dropdown-div")[0].style.display = "none";
}

window.addEventListener('resize', resized);

function resized() {
    var w = window.outerWidth;
    if (w > 600) {
        document.getElementsByClassName("hamburger-menu")[0].style.display = "none";
        document.getElementsByClassName("close-menu")[0].style.display = "none";
        document.getElementsByClassName("dropdown-div")[0].style.display = "none";
    } else {
        document.getElementsByClassName("hamburger-menu")[0].style.display = "block";
    }
}