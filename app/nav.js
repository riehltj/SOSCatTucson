const sidebar = () => {
    menu = document.querySelector('.side-nav-container').classList;
    hamburger = document.querySelector('.nav-menu').classList;

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