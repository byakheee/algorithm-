// 部分和問題
// N個の正の整数a0,a1,...,aN－1と正の整数Wが与えられます
// a0,a1,...,aN－1の中から何個かの整数を選んで総和をWとすることができるかどうかを判定してください．
// 
// const input = { // true
//   N: 5,
//   W: 10,
//   a: [1, 2, 4, 5, 11],
// }

const input = { // false
  N: 4,
  W: 10,
  a: [1, 5, 8, 11],
}

function solve(input) {
  for (let bit = 0; bit < (1 << input.N); bit++) {
    var sum = 0
    for (let i = 0; i < input.N; i++) {
      if (bit & (1 << i)) {
        sum += input.a[i]
      }
    }
    if (sum === input.W) return true
  }
  return false
}

console.log(`result is ${solve(input)}`);
