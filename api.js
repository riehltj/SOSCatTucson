spaceID = "1rv1y4xvb9pz";
deliveryAPI = "3kylAhFTf0KH7heGr6zWEtmKLTbES6Rce_I-PqKM1gc";
previewAPI = "jvLfyr3OHAlpChq5jb5taopbz4MHvTffk02tPanM5MU";

baseURL = "https://cdn.contentful.com";
dataURL = `${baseURL}/spaces/${spaceID}/entries?access_token=${deliveryAPI}`;

catData = [];
catImg = [];

const selectDom = async (catData) => {
  var fileName = location.href.split("/").slice(-1);
  if (fileName[0] == "index.html") {
    console.log(catData[0].name);
    catName = catData[0].name;
    displayImage = catData[0].imgs[0];

    const targetNode = document.getElementById("swiper-wrapper");
    const baseEl = document.createElement("a");
    baseEl.href = "./catPage.html";
    baseEl.className = "swiper-slide";
    //add other elements here, experiment
  }
};

const buildCatObj = async (data, catImg, i) => {
  catData[i] = {
    name: data.items[i].fields.name,
    age: data.items[i].fields.age,
    bio: data.items[i].fields.bio,
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
};

const init = async () => {
  const response = await fetch(dataURL);
  const data = await response.json();
  getAssetId(data);
};

init();
