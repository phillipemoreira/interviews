// https://www.urionlinejudge.com.br/judge/en/problems/view/1331

var input = require('fs').readFileSync(__dirname + '/blocks-stdin', 'utf8');
var lines = input.split('\n');

const keyIt = (arr) => {
  const key = [];
  let counter = 0;
  const aux = {};

  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    if (aux[v] >= 0) {
      key.push(aux[v]);
    } else {
      aux[v] = counter;
      key.push(counter);
      counter++;
    }
  }

  return key;
}

const calculateUnique = (colors) => colors.filter((v, i, a) => a.indexOf(v) === i).length

const countLeft = (colors, i) => {
  let result = 0;

  let il = i - 1;
  while (il >= 0) {
    if (colors[il] === colors[i]) {
      result++;
      il--;
    } else break;
  }

  return result;
};

const countRight = (colors, i) => {
  let result = 0;

  let ir = i + 1;
  while (ir < colors.length) {
    if (colors[ir] === colors[i]) {
      result++;
      ir++;
    } else break;
  }

  return result;
}

const pop = ({blocks, checker, colors, steps}, i) => {
  // Calculating popped to left and right;
  const l = countLeft(colors, i);
  const r = countRight(colors, i);
  const totalPopped = l + r + 1;

  // Recreating colors array;
  const a = colors.slice(0, i - l);
  const b = colors.slice(i + r + 1, colors.length);
  const newColors = a.concat(b);

  return {
    blocks: blocks - totalPopped,
    checker: checker,
    colors: newColors,
    uniqueColors: calculateUnique(newColors),
    points: totalPopped * totalPopped,
    steps: steps + 1
  };
}

let calls = 0;
let min = 202;
let cacheUsed = 0;
let cache = {};

const doCalculate = (obj, points) => {
  // Counting calls;
  calls++;

  const locals = [0];
  const {blocks, colors, steps} = obj;
  // Very important
  const key = keyIt(colors);

  // Using simplified key cache
  if (cache[key] > 0) {
    cacheUsed++;
    return cache[key] + points;
  }

  for (let i = 0; i < blocks; i += 1) {
    const popped = pop(obj, i);

    // Checking unecessary work.
    if (popped.steps + popped.uniqueColors < min) {
      const child = doCalculate(popped, popped.points);
      locals.push(child);
    }
  }

  const localMax = locals.reduce((a, b) => Math.max(a, b));
  const max = points + localMax;

  // Caching max.
  if (colors.length > 0) {
    cache[key] = localMax;
  }

  // Got to the bottom, storing the current minimum number of steps to get there.
  if (colors.length === 0) {
    min = min < steps ? min : steps;
  }

  return max;
}

const calculate = (blocks, colors) => {
  const obj = {
    blocks: blocks,
    colors: colors,
    uniqueColors: calculateUnique(colors),
    points: 0,
    steps: 0
  };

  return doCalculate(obj, 0, -1);
}

// ====================================================

var tests = parseInt(lines.shift());

for (let i = 1; i <= tests; i++) {
    const blocks = parseInt(lines.shift());
    const colors = lines.shift().split(' ');

    min = 202;
    calls = 0;
    cacheUsed = 0;
    cache = {};

    const max = calculate(blocks, colors)
    console.log("Case " + i + ": " + max);

    console.log("|-cache used: " + cacheUsed + " times.");
    console.log("|-number of cached combinations: " + Object.keys(cache).length);
    console.log("|-calls to doCalculate: " + calls);
    console.log('=============================>');
}