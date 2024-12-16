
export const getSquare = (num) => num * num;

export const isEven = (num) => num % 2 === 0;


export const castNumber = (value) => {
  const num = Number(value);
  return isNaN(num) ? 'given value is not convertible' : num;
};

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
# work
