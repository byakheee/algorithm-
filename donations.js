"use strict";
// 時計回りに住人が並んでおり、配列に寄付額が入っている
// 
// input (ctrl+d)
// returns
// 
// 10 3 2 5 7 8
// 19
//
// 11 15
// 15
//
// 7 7 7 7 7 7 7
// 21
//
// 1 2 3 4 5 1 2 3 4 5
// 16
//
// 94 40 49 65 21 21 106 80 92 81 679 4 61 6 237 12 72 74 29 95 265 35 47 1 61 397 52 72 37 51 1 81 45 435 7 36 57 86 81 72
// 2926

const dfs = (i, current, neighbors, usedFirst) => {
    if (i >= neighbors.length) return current

    let max = 0;
    // 使う場合
    if (i !== (neighbors.length -1) || !usedFirst) {
        max = dfs(i+2, current + neighbors[i], neighbors, 0 === i ? true : usedFirst);
    }

    // 使わない場合
    return Math.max(max, dfs(i+1, current, neighbors, usedFirst));
}

const main = arg => {
    if (typeof arg != 'string') return 0;
    const neighbors = arg.trim().split(' ').map(s => Number.parseInt(s));
    console.log(neighbors);
    console.log(`max is ${dfs(0, 0, neighbors, false)}`);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));  