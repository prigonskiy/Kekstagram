const MAX_HASHTAG_LENGTH = 20;
const MAX_COMMENTARY_LENGTH = 140;
const SCALE = {
  defaultValue: 1,
  step: 0.25,
};
const MOCKS = {
  commentaries: [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ],
  descriptions: [
    'Красиво',
    'Не очень',
    'Ха-ха-ха',
    'Пицца 3.14 сыра',
    'Монитор мелковат',
    'Где мои инструменты?',
    'Чувак, где моя тачка?',
    'Simple thought',
  ],
  likes: {
    min: 15,
    max: 200,
  },
  names: [
    'Петя',
    'Вася',
    'Маша',
    'Марина',
  ],
  numberOfPhotos: 25,
  numberOfAvatars: 6,
  maxId: 1000,
};

// Получение рандомного целого числа из диапазона
const getRandomInteger = (firstValue, secondValue) => {
  let min = firstValue < secondValue ? firstValue : secondValue;
  let max = firstValue >= secondValue ? firstValue : secondValue;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Проверка длины строки: должна быть не больше limit
const checkStringLength = (string, limit) => string.length <= limit;

// Получение случайного элемента массива
const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

// Создание уникального числа из диапазона
const getUniqueRandomInteger = (arrayOfUsedIntegers, firstValue, secondValue) => {
  let number;
  do {
    number = getRandomInteger(firstValue, secondValue);
  } while (arrayOfUsedIntegers.includes(number));
  arrayOfUsedIntegers.push(number);
  return(number);
};

// Создание объекта с комментарием пользователя
const createCommentary = (commentaryId) => ({
  id: commentaryId,
  avatar: `img/avatar-${getRandomInteger(1, MOCKS.numberOfPhotos)}.svg`,
  message: Array.from({length: getRandomInteger(1, 2)}, (() => getRandomArrayElement(MOCKS.commentaries))).join(' '),
  name: getRandomArrayElement(MOCKS.names),
});

// Создание объекта с описанием фотографии
const createPhotoDescription = (photoId, commentaryId) => ({
  id: photoId + 1,
  url: `photos/${photoId + 1}.jpg`,
  description: getRandomArrayElement(MOCKS.descriptions),
  likes: getRandomInteger(MOCKS.likes.min, MOCKS.likes.max),
  comments: createCommentary(commentaryId),
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

MAX_HASHTAG_LENGTH;
MAX_COMMENTARY_LENGTH;
SCALE;
checkStringLength('строка', MAX_COMMENTARY_LENGTH);
createArrayOfPhotoDescriptions();
