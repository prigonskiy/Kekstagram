import { MOCKS } from './const.js';
import { getRandomInteger, getRandomArrayElement, getUniqueRandomInteger } from './util.js';

// Создание объекта с комментарием пользователя
const createCommentary = (commentaryId) => ({
  id: commentaryId,
  avatar: `img/avatar-${getRandomInteger(1, MOCKS.numberOfPhotos)}.svg`,
  message: Array.from({length: getRandomInteger(1, 2)}, (() => getRandomArrayElement(MOCKS.commentaries))).join(' '),
  name: getRandomArrayElement(MOCKS.names),
});

const createArrayOfCommentaries = (commentaryId) => {
  const commentaries = [];
  const numberOfCommentaries = getRandomInteger(1, 10);
  for (let currentCommentary = 0; currentCommentary < numberOfCommentaries; currentCommentary++) {
    commentaries[currentCommentary] = createCommentary(commentaryId);
  }
  return commentaries;
};

// Создание объекта с описанием фотографии
const createPhotoDescription = (photoId, commentaryId) => ({
  id: photoId + 1,
  url: `photos/${photoId + 1}.jpg`,
  description: getRandomArrayElement(MOCKS.descriptions),
  likes: getRandomInteger(MOCKS.likes.min, MOCKS.likes.max),
  comments: createArrayOfCommentaries(commentaryId),
});

// Создание массива из объектов с описаниями фотографий
const createArrayOfPhotoDescriptions = () => {
  const photoDescriptions = [];
  const usedCommentaryId = [];
  for (let currentPhoto = 0; currentPhoto < MOCKS.numberOfPhotos; currentPhoto++) {
    const commentaryId = getUniqueRandomInteger(usedCommentaryId, 1, MOCKS.maxId);
    photoDescriptions[currentPhoto] = createPhotoDescription(currentPhoto, commentaryId);
  }
  return photoDescriptions;
};

export { createArrayOfPhotoDescriptions };
