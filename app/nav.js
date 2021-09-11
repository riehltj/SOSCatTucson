const sidebar = () => {
    menu = document.querySelector('.side-nav-container').classList;
    hamburger = document.querySelector('.nav-icon').classList;
    if (menu.contains('active')) {
        //collapse menu
        menu.remove('active');
        hamburger.remove('active')
    }
    else {
        menu.add('active')
        hamburger.add('active')
    }


}


const locationBox = () => {
    box = document.querySelector('.location-popout-container').classList

    if (box.contains('active')) {
        box.remove('active')
    }
    else {
        box.add('active')
    }
}



document.querySelector('.nav-menu').addEventListener('click', sidebar)

document.querySelector('.nav-location').addEventListener('click', locationBox)

document.addEventListener('click', function (event) {
    pointer = event.target.classList[0]
    menu = document.querySelector('.side-nav-container').classList;
    hamburger = document.querySelector('.nav-menu').classList;
    box = document.querySelector('.location-popout-container').classList
    // console.log(box);


    if (pointer == "nav-menu" || pointer == "nav-icon") {

        //do nothing

    }
    else {
        console.log(pointer);
        box.remove('active')
        menu.remove('active');
        hamburger.remove('active')
    }


});

