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

// Создание уникального целого числа из диапазона
const getUniqueRandomInteger = (arrayOfUsedIntegers, firstValue, secondValue) => {
  let number;
  do {
    number = getRandomInteger(firstValue, secondValue);
  } while (arrayOfUsedIntegers.includes(number));
  arrayOfUsedIntegers.push(number);
  return(number);
};

export { getRandomInteger, checkStringLength, getRandomArrayElement, getUniqueRandomInteger};
