spaceID = "1rv1y4xvb9pz";
deliveryAPI = "3kylAhFTf0KH7heGr6zWEtmKLTbES6Rce_I-PqKM1gc";
previewAPI = "jvLfyr3OHAlpChq5jb5taopbz4MHvTffk02tPanM5MU";

baseURL = "https://cdn.contentful.com";
dataURL = `${baseURL}/spaces/${spaceID}/entries?access_token=${deliveryAPI}`;

catData = [];
catImg = [];

const detailDisplay = (catData) => {
  [...document.querySelectorAll('.cat-container')].forEach(function (link) {
    link.addEventListener('click', function (link) {
      let numOfCats = catData.length;

      let hideChk = link.target.classList[0];
      let idNum = link.currentTarget.id.match(/\d+/)[0];
      let rem = idNum / 3 % 1;
      if (hideChk == "hide") {
        tp = link.currentTarget.parentElement.previousElementSibling
        console.log(tp)
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

        middle.style.display = "flex";
        left.style.display = "flex";
        right.style.display = "flex"

        newDisplay.classList.remove('flex')
        newDisplay.classList.remove('active-adopt')


      }
      else if (numOfCats == idNum) {
        console.log("last kitty")
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


}

const populateAdopt = (catData) => {
  for (i = 0; i < catData.length; i++) {
    catName = catData[i].name;
    displayImage = catData[i].imgs;
    bio = catData[i].bio;
    age = catData[i].age;
    needs = catData[i].needs;
    sex = catData[i].sex;

    const targetDiv = document.getElementById('grid-container');
    //create first visible div
    const firstDiv = document.createElement('div')
    firstDiv.id = `cat${i + 1}`
    firstDiv.className = "cat-container"
    // imgDiv
    const imgDiv = document.createElement('div')
    imgDiv.className = 'cat-img'
    //img
    const imgEl = document.createElement('img')
    imgEl.src = displayImage;
    imgEl.alt = catName;

    imgDiv.appendChild(imgEl)
    firstDiv.appendChild(imgDiv)

    // nameDiv
    const nameDiv = document.createElement('div')
    nameDiv.className = 'cat-name-adopt'
    //linkEl
    const linkEl = document.createElement('a')
    linkEl.href = "#99"
    //h3El
    const h3El = document.createElement('h3')
    h3El.innerHTML = catName;

    linkEl.appendChild(h3El)
    nameDiv.appendChild(linkEl)
    firstDiv.appendChild(nameDiv)
    targetDiv.appendChild(firstDiv)






    const secondDiv = document.createElement('div')
    secondDiv.className = 'details-container'
    //build details div
    const detailDiv = document.createElement('div')
    detailDiv.className = 'cat-container'
    detailDiv.id = `cat${i + 1}`
    //img div inside detail
    const detailImgDiv = document.createElement('div')
    detailImgDiv.className = 'cat-img'
    //img inside div
    const detailImgEl = document.createElement('img')
    detailImgEl.src = displayImage;
    detailImgDiv.alt = catName

    detailImgDiv.appendChild(detailImgEl)
    detailDiv.appendChild(detailImgDiv)
    secondDiv.appendChild(detailDiv)
    targetDiv.appendChild(secondDiv)

    //build name div
    const hideDiv = document.createElement('div')
    hideDiv.className = 'cat-name-adopt'

    //build link inside name
    const linkName = document.createElement('a')
    linkName.class = 'hide'
    linkName.href = "#97"

    //insert Hide Link
    const h3Hide = document.createElement('h3')
    h3Hide.className = "hide"
    h3Hide.innerHTML = "hide"

    linkName.appendChild(h3Hide)
    hideDiv.appendChild(linkName)
    detailDiv.appendChild(hideDiv)
    secondDiv.appendChild(detailDiv)
    //build bio div
    const details = document.createElement('div')
    details.className = 'details'

    const detailsCatName = document.createElement('div')
    detailsCatName.className = "cat-name-adopt"

    const catNameLink = document.createElement('a')
    catNameLink.href = "./catPage.html"

    const catNameLinkH3 = document.createElement('h3')
    catNameLinkH3.innerHTML = catName;


    const ageEl = document.createElement('p')
    ageEl.innerHTML = `AGE: ${age}`
    const sexEl = document.createElement('p')
    sexEl.innerHTML = `SEX: ${sex}`;
    const pEl = document.createElement('p')
    pEl.innerHTML = `BIO: ${bio}`;
    const needsEl = document.createElement('p')
    needsEl.innerHTML = `SPECIAL NEEDS: ${needs}`;


    catNameLink.appendChild(catNameLinkH3)
    detailsCatName.appendChild(catNameLink)
    details.appendChild(detailsCatName)

    details.appendChild(ageEl)
    details.appendChild(sexEl)
    details.appendChild(pEl)
    details.appendChild(needsEl)

    secondDiv.appendChild(details)
    targetDiv.appendChild(secondDiv)


  }
  detailDisplay(catData);
}

const populateIndex = (catData) => {
  for (i = 0; i < catData.length; i++) {
    catName = catData[i].name;
    displayImage = catData[i].imgs;
    const targetNode = document.getElementById('swiperJs');
    //creating base
    const baseEl = document.createElement("a");
    baseEl.href = "./catPage.html";
    baseEl.className = "swiper-slide";
    //inserting image
    const imgEl = document.createElement("img")
    imgEl.src = displayImage;
    imgEl.className = 'slide-img'
    imgEl.alt = "image of a cat up for adoption"
    baseEl.appendChild(imgEl)
    //inserting cat's name
    const h2El = document.createElement('h2')
    h2El.className = 'cat-name'
    h2El.innerHTML = catName;
    baseEl.appendChild(h2El)
    //insert it all now
    targetNode.appendChild(baseEl)
  }
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 0,
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      500: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    },


    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
}

const selectDom = async (catData) => {
  var fileName = location.href.split("/").slice(-1);
  if (fileName[0] == "index.html") {
    await populateIndex(catData);
  }
  else if (fileName[0] == "adopt.html") {
    await populateAdopt(catData)
  }
  else {
    return 0
  }
};

const buildCatObj = async (data, catImg, i) => {
  catData[i] = {
    name: data.items[i].fields.name,
    age: data.items[i].fields.age,
    bio: data.items[i].fields.bio,
    sex: data.items[i].fields.sex,
    imgs: catImg[i],
    needs: data.items[i].fields.specialNeeds,
  };
};

const getImgUrl = async (assetId, i) => {
  imgURL = `${baseURL}/spaces/${spaceID}/assets/${assetId}?access_token=${deliveryAPI}`;
  const response = await fetch(imgURL);
  const imgData = await response.json();
  catImg[i] = imgData.fields.file.url;
};

const getAssetId = async (data) => {
  numCats = Object.keys(data.items).length;
  assetId = "";
  for (i = 0; i < numCats; i++) {
    assetId = data.items[i].fields.imgs[0].sys.id;
    await getImgUrl(assetId, i);
    await buildCatObj(data, catImg, i);
  }
  selectDom(catData);
  return
};

const init = async () => {
  const response = await fetch(dataURL);
  const data = await response.json();
  getAssetId(data);
};

init();
