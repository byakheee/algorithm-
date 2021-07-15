const input = {
    labyrinthCol: 7,
    labyrinthRow: 8,
    startCol: 2,
    startRow: 2,
    goalCol: 4,
    goalRow: 5,
    labyrinth: [
        '########',
        '#......#',
        '#.######',
        '#..#...#',
        '#..##..#',
        '##.....#',
        '########',
    ],
}
const queue = []

function solve() {
    const moveCol = [1, 0, -1, 0];
    const moveRow = [0, 1, 0, -1];
    queue.push(() => bfs(0, startCol-1, startRow-1, goalCol, goalRow, moveCol, moveRow, labyrinth))
    while (queue.length > 0) {
        const count = queue.shift()()
        if (count > 1) return count
    }
    return -1;
}

function bfs(i, col, row, goalCol, goalRow, moveCol, moveRow, labyrinth) {
    if (col === goalCol && row === goalRow) return i;
    for (let j = 0; j < moveCol.length; j++) {
        if (labyrinth[col + moveCol[j]][row + moveRow[j]] === '#') continue;
        queue.push(() => bfs(i + 1, col + moveCol[j], row + moveRow[j], goalCol, goalRow, moveCol, moveRow, labyrinth))
    }
}

console.log(`result is ${solve(input)}.`)