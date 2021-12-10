spaceID = "1rv1y4xvb9pz";
deliveryAPI = "3kylAhFTf0KH7heGr6zWEtmKLTbES6Rce_I-PqKM1gc";
previewAPI = "jvLfyr3OHAlpChq5jb5taopbz4MHvTffk02tPanM5MU";

baseURL = "https://cdn.contentful.com";

dataURL = `${baseURL}/spaces/${spaceID}/entries?access_token=${deliveryAPI}`;

const populateSwiper = (catImg) => {
  console.log(catImg);
};

const grabImg = (catData) => {
  catImg = [];
  for (let j = 0; j < Object.keys(catData).length; j++) {
    let assetId = catData[j].imgs[0].sys.id;

    imgURL = `${baseURL}/spaces/${spaceID}/assets/${assetId}?access_token=${deliveryAPI}`;

    fetch(imgURL)
      .then((response) => response.json())
      .then((imgData) => {
        catImg = imgData.fields.file.url;
        console.log(catImg);

        baseDiv = document.getElementById("img-js");
        let newImgTag = document.createElement("img");
        newImgTag.src = catImg;
        console.log(newImgTag);

        document.getElementById("img-js").appendChild(newImgTag);
        console.log("img updated");
      });
  }
  populateSwiper(catImg);
};

fetch(dataURL)
  .then((response) => response.json())
  .then((data) => {
    let numCats = data.items.length;
    let catData = {};

    for (let i = 0; i < numCats; i++) {
      let apiData = data.items[i].fields;

      catData[i] = {
        name: data.items[i].fields.name,
        age: apiData.age,
        bio: apiData.bio,
        imgs: apiData.imgs,
        needs: apiData.specialNeeds,
      };
    }

    grabImg(catData);
  });
//
