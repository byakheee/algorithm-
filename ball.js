"use strict";
// cout << solve(2, 3, 100, 400, 200) << endl; // 1400 
// cout << solve(2, 3, 100, 400, 300) << endl; // 1600 
// cout << solve(5, 5, 464, 464, 464) << endl; // 4640 
// cout << solve(1, 4, 20, -30, -10) << endl; // -100 
// cout << solve(9, 1, -1, -10, 4) << endl; // 0

const solve = (redNum, blueNum, redP, blueP, bothP) => {
    // redP + blueP と bothP のどちらが多いか
    if (redP + blueP > bothP * 2) {
        return redP * redNum + blueP * blueNum
    }
    return bothP * 2 * Math.min(redNum, blueNum) + Math.max(redP, blueP) * Math.abs(redNum - blueNum)
}

const main = () => {
    console.log(solve(2, 3, 100, 400, 200));
    console.log(solve(2, 3, 100, 400, 300));
    console.log(solve(5, 5, 464, 464, 464));
    console.log(solve(1, 4, 20, -30, -10));
    console.log(solve(9, 1, -1, -10, 4));
}

main();