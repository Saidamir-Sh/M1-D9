function generateNumber() {
    let board = document.querySelector('#board')
    for(let i = 0; i < 76; i++) {
        let randomNum = Math.floor(Math.random() * 76) + 1
        let cell = document.createElement('div')
        cell.setAttribute("id", "cell")
        cell.classList.add('cell')
        cell.innerText = randomNum
        board.appendChild(cell)
    }
}