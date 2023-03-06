// Получение рандомного целого числа из диапазона
const getRandomInteger = (firstValue, secondValue) => {
  let min = firstValue < secondValue ? firstValue : secondValue;
  let max = firstValue >= secondValue ? firstValue : secondValue;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Проверка длины строки: должна быть не больше limit
const limitStringLength = (string, limit) => {
  return string.length <= limit;
}
