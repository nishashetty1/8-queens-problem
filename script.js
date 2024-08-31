const board = document.getElementById('board');
const message = document.getElementById('message');
const newGameBtn = document.getElementById('newGame');
const solveBtn = document.getElementById('solve');
const undoBtn = document.getElementById('undo');

const CROWN = '👑';
let queens = [];
let moveHistory = [];

function createBoard() {
    board.innerHTML = '';
    for (let i = 0; i < 64; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.index = i;
        cell.addEventListener('click', () => cellClick(i));
        board.appendChild(cell);
    }
}

function cellClick(index) {
    const cell = board.children[index];
    if (cell.textContent === CROWN) {
        removeQueen(index);
    } else if (!cell.classList.contains('marked') && queens.length < 8) {
        placeQueen(index);
    }
    updateBoard();
}

function placeQueen(index) {
    queens.push(index);
    moveHistory.push(index);
    board.children[index].textContent = CROWN;
    updateBoard();
}

function removeQueen(index) {
    queens = queens.filter(q => q !== index);
    moveHistory = moveHistory.filter(m => m !== index);
    board.children[index].textContent = '';
    clearMarkedCells();
    updateBoard();
}

function updateBoard() {
    clearMarkedCells();
    queens.forEach(index => markThreatenedCells(index));
    if (queens.length === 8 && queens.every(q => !isInvalidPlacement(q))) {
        message.textContent = "Congratulations! You've solved the 8 Queens Puzzle!";
    } else {
        message.textContent = `Queens placed: ${queens.length}/8`;
    }
}

function clearMarkedCells() {
    for (let i = 0; i < 64; i++) {
        board.children[i].classList.remove('marked');
    }
}

function markThreatenedCells(index) {
    const row = Math.floor(index / 8);
    const col = index % 8;
    for (let i = 0; i < 64; i++) {
        const cellRow = Math.floor(i / 8);
        const cellCol = i % 8;
        if (i !== index && (cellRow === row || cellCol === col || Math.abs(cellRow - row) === Math.abs(cellCol - col))) {
            const cell = board.children[i];
            if (cell.textContent !== CROWN) {
                cell.classList.add('marked');
            }
        }
    }
}

function isInvalidPlacement(index) {
    const row = Math.floor(index / 8);
    const col = index % 8;
    return queens.some((q, i) => {
        if (q === index) return false;
        const qRow = Math.floor(q / 8);
        const qCol = q % 8;
        return row === qRow || col === qCol || Math.abs(row - qRow) === Math.abs(col - qCol);
    });
}

function getRandomValidPositions(count) {
    const positions = [];
    while (positions.length < count) {
        const index = Math.floor(Math.random() * 64);
        if (!positions.some(p => isConflict(p, index))) {
            positions.push(index);
        }
    }
    return positions;
}

function isConflict(pos1, pos2) {
    const row1 = Math.floor(pos1 / 8);
    const col1 = pos1 % 8;
    const row2 = Math.floor(pos2 / 8);
    const col2 = pos2 % 8;
    return row1 === row2 || col1 === col2 || Math.abs(row1 - row2) === Math.abs(col1 - col2);
}

function* queensGenerator(n, i, a, b, c) {
    if (i < n) {
        for (let j = 0; j < n; j++) {
            if (!a.includes(j) && !b.includes(i + j) && !c.includes(i - j)) {
                yield* queensGenerator(n, i + 1, [...a, j], [...b, i + j], [...c, i - j]);
            }
        }
    } else {
        yield a;
    }
}

async function solve() {
    queens = [];
    moveHistory = [];
    createBoard();
    message.textContent = "AI is solving the puzzle...";
    
    const solutions = Array.from(queensGenerator(8, 0, [], [], []));
    const randomSolution = solutions[Math.floor(Math.random() * solutions.length)];
    
    for (let i = 0; i < randomSolution.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const index = randomSolution[i] * 8 + i;
        placeQueen(index);
        updateBoard();
    }
    message.textContent = "Puzzle solved by AI!";
}

function undo() {
    if (moveHistory.length > 2) {
        const lastMove = moveHistory.pop();
        removeQueen(lastMove);
        updateBoard();
    }
}

function newGame() {
    queens = getRandomValidPositions(2);
    moveHistory = [...queens];
    createBoard();
    queens.forEach(index => {
        board.children[index].textContent = CROWN;
    });
    updateBoard();
    message.textContent = "Place 6 more queens on the board.";
}

newGameBtn.addEventListener('click', newGame);
solveBtn.addEventListener('click', solve);
undoBtn.addEventListener('click', undo);

newGame();