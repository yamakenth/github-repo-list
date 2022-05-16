// generate array of num from min to max inclusive
export const range = (min, max) => {
  return [...Array(max - min + 1).keys()].map(i => i + min);
}