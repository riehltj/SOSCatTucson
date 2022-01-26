spaceID = "1rv1y4xvb9pz";
deliveryAPI = "3kylAhFTf0KH7heGr6zWEtmKLTbES6Rce_I-PqKM1gc";
previewAPI = "jvLfyr3OHAlpChq5jb5taopbz4MHvTffk02tPanM5MU";

baseURL = "https://cdn.contentful.com";
dataURL = `${baseURL}/spaces/${spaceID}/entries?access_token=${deliveryAPI}`;

let catData = {
  name: [],
  age: [],
  bio: [],
  imgs: [],
  needs: []
};
let catImgUrl = [];
const catSel = () => {

  [...document.querySelectorAll('.cat-container')].forEach(function (link) {
    link.addEventListener('click', function (link) {

      let hideChk = link.target.classList[0];
      let idNum = link.currentTarget.id.match(/\d+/)[0];
      let rem = idNum / 3 % 1;

      console.log(rem)
      if (hideChk == "hide") {
        // tp = link.currentTarget.parentElement.previousElementSibling
        if (rem < 0.3) {
          console.log("Right Column");
          right = link.currentTarget.parentElement.previousElementSibling;
          middle = right.previousElementSibling.previousElementSibling;
          left = middle.previousElementSibling.previousElementSibling;
          if (right == null) {
            middle.style.display = "flex";
            left.style.display = "flex";
          } else if (middle == null) {
            left.style.display = "flex"
          } else {
            middle.style.display = "flex";
            left.style.display = "flex";
            right.style.display = "flex"
          }
          newDisplay = link.currentTarget.parentElement;

        } else if (rem < 0.4) {
          console.log("Left Column");
          left = link.currentTarget.parentElement.previousElementSibling;
          middle = left.nextElementSibling.nextElementSibling
          right = middle.nextElementSibling.nextElementSibling
          if (right == null) {
            middle.style.display = "flex";
            left.style.display = "flex";
          } else if (middle == null) {
            left.style.display = "flex"
          } else {
            middle.style.display = "flex";
            left.style.display = "flex";
            right.style.display = "flex"
          }
          newDisplay = link.currentTarget.parentElement;

        } else if (rem < 0.7) {
          console.log("Middle Column ");
          middle = link.currentTarget.parentElement.previousElementSibling;
          right = middle.nextElementSibling.nextElementSibling;
          left = middle.previousElementSibling.previousElementSibling;

          newDisplay = link.currentTarget.parentElement;

          if (right == null) {
            middle.style.display = "flex";
            left.style.display = "flex";
          } else if (middle == null) {
            left.style.display = "flex"
          } else {
            middle.style.display = "flex";
            left.style.display = "flex";
            right.style.display = "flex"
          }
          newDisplay.classList.remove('flex')
          newDisplay.classList.remove('active-adopt')
        } else {
          console.log("error")
        }


        newDisplay.classList.remove('flex')
        newDisplay.classList.remove('active-adopt')


      } else {


        if (rem < 0.3) {
          right = link.currentTarget;
          middle = link.currentTarget.previousElementSibling.previousElementSibling;
          left = middle.previousElementSibling.previousElementSibling;
          if (right == null) {
            middle.style.display = "none";
            left.style.display = "none";
          } else if (middle == null) {
            left.style.display = "none";
          } else {
            middle.style.display = "none";
            left.style.display = "none";
            right.style.display = "none"
          }
          newDisplay = right.nextElementSibling;
        } else if (rem < 0.4) {
          console.log("Left Column");
          left = link.currentTarget;
          middle = link.currentTarget.nextElementSibling.nextElementSibling;
          right = middle.nextElementSibling.nextElementSibling;
          if (right == null) {
            middle.style.display = "none";
            left.style.display = "none";
          } else if (middle == null) {
            left.style.display = "none";
          } else {
            middle.style.display = "none";
            left.style.display = "none";
            right.style.display = "none"
          }
          newDisplay = left.nextElementSibling;
        } else if (rem < 0.7) {

          console.log("Middle Column");
          middle = link.currentTarget;
          left = middle.previousElementSibling.previousElementSibling
          right = middle.nextElementSibling.nextElementSibling
          newDisplay = middle.nextElementSibling

          if (right == null) {
            middle.style.display = "none";
            left.style.display = "none";
          } else if (middle == null) {
            left.style.display = "none";
          } else {
            middle.style.display = "none";
            left.style.display = "none";
            right.style.display = "none"
          }
        } else {
          console.error("error");
        }

        newDisplay.classList.add('flex')

        setTimeout(function () {
          newDisplay.classList.add('active-adopt')
        }, 10)


      }

    });

  });


}

const buildAdopt = (apiData, numCats, catImgUrl) => {
  base = document.getElementById('grid-container')

  for (i = 0; i < numCats; i++) {
    let jsName = apiData[i].fields.name
    let jsBio = apiData[i].fields.bio
    let jsImg = catImgUrl[i];

    shownDiv = document.createElement('div');
    shownDiv.id = `cat${i + 1}`
    shownDiv.className = 'cat-container'

    imgDiv = document.createElement('div')
    imgDiv.className = 'cat-img'

    img = document.createElement('img')
    img.alt = `${jsName} looking cute`;
    img.src = jsImg;

    imgDiv.appendChild(img);

    nameDiv = document.createElement('div');
    nameDiv.className = 'cat-name-adopt';

    nameAnchor = document.createElement('a');
    nameAnchor.href = '#99';

    nameh3 = document.createElement('h3');
    nameh3.innerHTML = jsName;

    nameAnchor.appendChild(nameh3);
    nameDiv.appendChild(nameAnchor)
    shownDiv.appendChild(imgDiv)
    shownDiv.appendChild(nameDiv)
    //DETAIL CONTAINER

    detailDiv = document.createElement('div')
    detailDiv.className = 'details-container'

    containerDiv = document.createElement('div');
    containerDiv.className = 'cat-container'
    containerDiv.id = `$cat${i + 1}`
    imgDiv = document.createElement('div')
    imgDiv.className = 'cat-img'

    img = document.createElement('img')
    img.alt = `${jsName} looking cute`;
    img.src = jsImg;
    imgDiv.appendChild(img);
    containerDiv.appendChild(imgDiv);
    //Hide DIV
    hideDiv = document.createElement('div')
    hideDiv.className = 'cat-name-adopt'

    hideAnchor = document.createElement('a');
    hideAnchor.href = '#99'

    hideH3 = document.createElement('h3');
    hideH3.className = 'hide'
    hideH3.innerHTML = "HIDE"

    hideAnchor.appendChild(hideH3)
    hideDiv.appendChild(hideAnchor);
    containerDiv.appendChild(hideDiv)
    //details DIV
    dDiv = document.createElement('div')
    dDiv.className = "details"

    divLink = document.createElement('div')
    divLink.className = 'cat-name-adopt'

    pageLink = document.createElement('a')
    pageLink.href = "./catPage.html"

    h3Link = document.createElement('h3')
    h3Link.innerHTML = jsName;
    pageLink.appendChild(h3Link)
    divLink.appendChild(pageLink)

    para = document.createElement('p')
    para.innerHTML = jsBio;
    dDiv.appendChild(divLink)
    dDiv.appendChild(para)

    // Appending all divs
    detailDiv.appendChild(containerDiv);
    // detailDiv.appendChild(hideDiv)
    detailDiv.appendChild(dDiv)

    base.appendChild(shownDiv)
    base.appendChild(detailDiv)
  }

  catSel();

}


const buildIndex = async (apiData, numCats, catImgUrl) => {
  base = document.getElementById('swiperJs');

  for (x = 0; x < numCats; x++) {
    let jsName = apiData[x].fields.name
    let jsImg = catImgUrl[x];
    a = document.createElement('a')
    a.className = 'swiper-slide'
    a.href = './catPage.html'

    div = document.createElement('div')
    div.className = 'swiper-img-bg';

    img = document.createElement('img');
    img.className = 'slide-img';
    img.src = jsImg;

    divh2 = document.createElement('a')
    divh2.className = 'swiper-cat-name-bg';

    h2 = document.createElement('h2')
    h2.className = 'cat-name'
    h2.innerHTML = jsName;

    div.appendChild(img)
    divh2.appendChild(h2)

    a.appendChild(div);
    a.appendChild(divh2)
    base.appendChild(a)
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

const selectDomPage = async (catImgUrl, apiData, numCats) => {
  let path = window.location.pathname;
  let page = path.split("/").pop();
  console.log(page)
  // ---------------------Choices of Pages------------------------
  if (page == 'index.html') {
    buildIndex(apiData, numCats, catImgUrl);
  } else if (page == 'adopt.html') {
    buildAdopt(apiData, numCats, catImgUrl)
  }
  else {
    buildIndex(apiData, numCats, catImgUrl);
  }

}

const getImgUrl = async (catAsset) => {
  for (j = 0; j < catAsset.length; j++) {
    let catAssetId = catAsset[j];

    imgURL = `${baseURL}/spaces/${spaceID}/assets/${catAssetId}?access_token=${deliveryAPI}`;
    await fetch(imgURL)
      .then((response) => response.json())
      .then((imgData) => {
        catImgUrl[j] = imgData.fields.file.url;
      })
  }
  return
};
const getCatData = async (data) => {
  let apiData = data.items;
  let catAsset = [];
  let numCats = Object.keys(data.items).length;
  for (let i = 0; i < numCats; i++) {
    catAsset[i] = apiData[i].fields.imgs[0].sys.id
  }
  await getImgUrl(catAsset);
  selectDomPage(catImgUrl, apiData, numCats)

}

const init = async () => {
  let response = await fetch(dataURL);
  let data = await response.json();
  getCatData(data);
};

init();