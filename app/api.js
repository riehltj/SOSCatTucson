spaceID = "1rv1y4xvb9pz";
deliveryAPI = "3kylAhFTf0KH7heGr6zWEtmKLTbES6Rce_I-PqKM1gc";
previewAPI = "jvLfyr3OHAlpChq5jb5taopbz4MHvTffk02tPanM5MU";

baseURL = "https://cdn.contentful.com";
dataURL = `${baseURL}/spaces/${spaceID}/entries?access_token=${deliveryAPI}`;

let catData = { name: [], age: [], bio: [], imgs: [], needs: [] };
let catImgUrl = [];
// const buildCatData = async (catImgUrl, apiData, numCats) => {
//   console.log(numCats)
//   for (x = 0; x < numCats; x++) {
//     console.log(apiData[x].fields.name)
//     // catData.name[x] = apiData[x].fields.name;
//     // catData.age[x] = apiData.age;
//     // catData.bio[x] = apiData.bio;
//     // catData.imgs[x] = catImgUrl[x];
//     // catData.needs[x] = apiData.specialNeeds;
//   }
//   // return catData
// }

const buildIndex = async (apiData, numCats, catImgUrl) => {
  console.log("Building Index")
  for (x = 0; x < numCats; x++) {
    let jsName = apiData[x].fields.name
    let jsImg = catImgUrl[x];
  }
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
      .then(() => console.log("Completed"))
  }
  return
};
const getCatData = (data) => {

  let apiData = data.items;
  let catAsset = [];
  let numCats = Object.keys(data.items).length;
  for (let i = 0; i < numCats; i++) {
    catAsset[i] = apiData[i].fields.imgs[0].sys.id
  }
  getImgUrl(catAsset);
  selectDomPage(catImgUrl, apiData, numCats)

}




const init = async () => {

  let response = await fetch(dataURL);
  let data = await response.json();
  getCatData(data);


};

init();
