// 部分和問題
// N個の正の整数a0,a1,...,aN－1と正の整数Wが与えられます
// a0,a1,...,aN－1の中から何個かの整数を選んで総和をWとすることができるかどうかを判定してください．

// const input = { // true
//   N: 5,
//   W: 10,
//   a: [1, 2, 4, 5, 11],
// }

// const input = { // false
//   N: 4,
//   W: 10,
//   a: [1, 5, 8, 11],
// }

const input = { // true
  N: 4,
  W: 14,
  a: [3, 2, 6, 5],
}

const cache = {0: true};

function solve(input) {
  return dfs(input.N, input.W, input.a)
}

function dfs(i, W, a) {
  if (cache[W] !== undefined) {
    console.log(`index is ${i}, W is ${W}, hit!`);
    return cache[W];
  }
  if (W === 0) return true;
  if (i === 0) return false;

  // 選ばない場合 || 選ぶ場合
  return cache[W] = dfs(i - 1, W, a) || dfs(i - 1, W - a[i - 1], a);
}

console.log(`result is ${solve(input)}`);
