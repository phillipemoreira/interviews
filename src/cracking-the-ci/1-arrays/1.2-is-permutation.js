const isPermutation = (a, b) => {
  const freq = [];

  if (a.length !== b.length) return false;

  a.split('').forEach((element) => {
    freq[element] = freq[element]
    ? freq[element] += 1
    : 1
  });

  let result = true;
  b.split('').forEach((element) => {
    if (!freq[element]) {
      result = false;
    }

    freq[element]--;

    if (freq[element] < 0) {
      result = false;
    }
  });

  return result;
};

exports.isPermutation = isPermutation;