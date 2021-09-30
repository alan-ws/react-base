const a = [1, 2, 3, 4, [[[[3]]], [[[[]]]]], [2, [3], [[4]], [3]]];

const flatArray = (arr) => {
  let result = arr;
  while (result.some(Array.isArray)) {
    result = [].concat.apply([], result);
  }
  return result;
};

console.log(flatArray(a));
