// https://www.urionlinejudge.com.br/judge/en/problems/view/1331

var input = require('fs').readFileSync(__dirname + '/blocks-stdin', 'utf8');
var lines = input.split('\n');

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

const pop = ({blocks, checker, colors, points}, i) => {
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
     points: points + totalPopped * totalPopped
   };
}

const doCalculate = (foo, max) => {
  const {blocks, points} = foo;

  if (blocks > 0) {
    let localMax = -1;
    for (let i = 0; i < blocks; i += 1) {
      const popped = pop(foo, i);

      if (foo.checker[popped.colors] && popped.colors.length > 0) {
        localMax = foo.checker[popped.colors];
      } else {
        const cur = doCalculate(popped, points);
        localMax = cur > localMax ? cur : localMax;
        foo.checker[popped.colors] = localMax;
      }
    }

    return localMax > max ? localMax : max;
  }

  return points > max ? points : max;
}

const calculate = (blocks, colors) => {
  const obj = {
    blocks: blocks,
    checker: {},
    colors: colors,
    points: 0
  };

  doCalculate(obj, 0);
  console.log(Object.keys(obj.checker).length);
  return 0;
}

// ====================================================

var tests = parseInt(lines.shift());

for (let i = 1; i <= tests; i++) {
    const blocks = parseInt(lines.shift());
    const colors = lines.shift().split(' ');

    const max = calculate(blocks, colors)

    // console.log("Case " + i + ": " + max);
}