// 1 задача
export const getSquare = (num) => num * num;

// 2 задача
export const isEven = (num) => num % 2 === 0;

// 3 задача
export const castNumber = (value) => {
  const num = Number(value);
  return isNaN(num) ? 'given value is not convertible' : num;
};

// 4 задача
export const countVowels = (text) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
  let count = 0;
  for (const char of text) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};
