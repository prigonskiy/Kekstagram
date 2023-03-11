import { createArrayOfPhotoDescriptions } from './data.js';

const pictureTemplate = document.querySelector('#picture').content;
const picturesContainer = document.querySelector('.pictures');
const pictureFragment = document.createDocumentFragment();
const picturesArray = createArrayOfPhotoDescriptions();

picturesArray.forEach(({url, comments, likes}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').setAttribute('src', url);
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureFragment.appendChild(pictureElement);
});

picturesContainer.appendChild(pictureFragment);
