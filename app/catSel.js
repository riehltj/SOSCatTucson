[...document.querySelectorAll('.cat-container')].forEach(function (link) {
    link.addEventListener('click', function (link) {
        console.log(link)
        let hideChk = link.target.classList[0];
        let idNum = link.currentTarget.id.match(/\d+/)[0];
        let rem = idNum / 3 % 1;

        if (hideChk == "hide") {
            // tp = link.currentTarget.parentElement.previousElementSibling
            if (rem < 0.3) {
                console.log("Right Column");
                right = link.currentTarget.parentElement.previousElementSibling;
                middle = right.previousElementSibling.previousElementSibling;
                left = middle.previousElementSibling.previousElementSibling;

                newDisplay = link.currentTarget.parentElement;

            }
            else if (rem < 0.4) {
                console.log("Left Column");
                left = link.currentTarget.parentElement.previousElementSibling;
                middle = left.nextElementSibling.nextElementSibling
                right = middle.nextElementSibling.nextElementSibling

                newDisplay = link.currentTarget.parentElement;



            }
            else if (rem < 0.7) {
                console.log("Middle Column ");
                middle = link.currentTarget.parentElement.previousElementSibling;
                right = middle.nextElementSibling.nextElementSibling;
                left = middle.previousElementSibling.previousElementSibling;

                newDisplay = link.currentTarget.parentElement;

            }
            else {
                console.log("error")
            }
            console.log(left.id, middle.id, right.id, newDisplay);


            middle.style.display = "flex";
            left.style.display = "flex";
            right.style.display = "flex"

            newDisplay.classList.remove('flex')
            newDisplay.classList.remove('active-adopt')


        }

        else {


            if (rem < 0.3) {
                right = link.currentTarget;
                middle = link.currentTarget.previousElementSibling.previousElementSibling;
                left = middle.previousElementSibling.previousElementSibling;

                newDisplay = right.nextElementSibling;
            }
            else if (rem < 0.4) {
                left = link.currentTarget;
                middle = link.currentTarget.nextElementSibling.nextElementSibling;
                right = middle.nextElementSibling.nextElementSibling;

                newDisplay = left.nextElementSibling;
            }

            else if (rem < 0.7) {
                middle = link.currentTarget;
                left = middle.previousElementSibling.previousElementSibling
                right = middle.nextElementSibling.nextElementSibling

                newDisplay = middle.nextElementSibling
            }
            else {
                console.error("error");
            }



            middle.style.display = "none";
            left.style.display = "none";
            right.style.display = "none"

            newDisplay.classList.add('flex')

            setTimeout(function () {
                newDisplay.classList.add('active-adopt')
            }, 10)


        }

    });

});
