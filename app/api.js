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

const buildIndex = async (apiData, numCats, catImgUrl) => {
  base = document.getElementById('swiperJs');

  for (x = 0; x < numCats; x++) {

    console.log(catImgUrl[x])
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
  // ---------------------Choices of Pages------------------------
  if (page == 'index.html') {
    buildIndex(apiData, numCats, catImgUrl);
    let anchor = document.createElement('a')
    anchor.href = "test"
    anchor.class = "swiper-slide"
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