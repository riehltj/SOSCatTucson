display = 0;

const subMenu = () => {
    dropdown = event.target.nextSibling.nextSibling
    arrow = event.target

    // console.log(arrow);

    if (display === 0) {
        if (dropdown === null) {
            dropdown = event.target.parentNode.parentNode.nextSibling.nextSibling
        }
        else {
            arrow = event.target.childNodes[1].childNodes[1]
        }
        dropdown.style.display = "flex"
        arrow.style.transform = "rotate(-90deg)"
        display = 1;
    }
    else {
        if (dropdown === null) {
            dropdown = event.target.parentNode.parentNode.nextSibling.nextSibling
        }

        else {
            arrow = event.target.childNodes[1].childNodes[1]

        }
        dropdown.style.display = "none"
        arrow.style.transform = "rotate(0deg)"
        display = 0;
    }
}


[...document.querySelectorAll('.dropdown-menu')].forEach(function (item) {
    item.addEventListener('click', subMenu)
});
