// generate array of n elements from start with increment of 1
export const range = (start, n) => {
  return [...Array(n).keys()].map(i => i + start);
}