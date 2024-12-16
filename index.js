export const getSum = (a, b) => a + b;
export const castBoolean = (value) => Boolean(value);
export const capitalize = (text, i) => {
  if (i < 0 || i >= text.length) {
    return text;
  }
  return text.slice(0, i) + text[i].toUpperCase() + text.slice(i + 1);
};
export const countCapitalLetters = (text) => {
    let count = 0;
    for (const char of text) {
        if (char >= 'A' && char <= 'Z') {
            count++;
        }
    }
    return count;
};

