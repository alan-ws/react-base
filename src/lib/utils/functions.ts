export function debounce(fn: (...args: any[]) => void, time: number) {
  let timeoutId: NodeJS.Timeout | null;
  return wrapper;

  function wrapper(...args: any[]) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      timeoutId = null;
      fn(...args);
    }, time);
  }
}

// TWO flatten methods - will test for performance
export const flatArray = <T extends Array<T>>(arr: T[]): T[] => {
  let result = arr;

  while (result.some(Array.isArray)) {
    result = [].concat.apply([], result);
  }
  return result;
};

export function flatten<T extends Array<T>>(arr: T[]): T[] {
  let nA = [...arr];

  for (let i = 0; nA.length > i; ) {
    if (typeof nA[i] === 'number') i++;

    if (Array.isArray(nA[i])) {
      nA.splice(i, 1, ...nA[i]);
    }
  }

  return nA;
}
