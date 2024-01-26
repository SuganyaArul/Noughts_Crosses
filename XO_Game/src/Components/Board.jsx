import '../Board.css'
// import Status from './Status'

export default function Board({board, setBoard, currentPlayer, setCurrentPlayer}){
    function changeCell(event){
        const cellId = event.target.id;
        const newCellValue = {...board}

        if(board[cellId] === ''){newCellValue[cellId] = currentPlayer
        setBoard(newCellValue)

        // review status
            


        let nextPlayer = 'x'
        if (currentPlayer === 'x'){
            nextPlayer='o'
        }
        setCurrentPlayer(nextPlayer)}
    }
    return(<section>
        <h2>Board</h2>
        <div id='board-container'>
        <div id='r1c1' className='board-square' onClick={(event)=>changeCell(event)}>{board.r1c1}</div>
        <div id='r1c2' className='board-square' onClick={(event)=>changeCell(event)}>{board.r1c2}</div>
        <div id='r1c3' className='board-square' onClick={(event)=>changeCell(event)}>{board.r1c3}</div>
        <div id='r2c1' className='board-square' onClick={(event)=>changeCell(event)}>{board.r2c1}</div>
        <div id='r2c2' className='board-square' onClick={(event)=>changeCell(event)}>{board.r2c2}</div>
        <div id='r2c3' className='board-square' onClick={(event)=>changeCell(event)}>{board.r2c3}</div>
        <div id='r3c1' className='board-square' onClick={(event)=>changeCell(event)}>{board.r3c1}</div>
        <div id='r3c2' className='board-square' onClick={(event)=>changeCell(event)}>{board.r3c2}</div>
        <div id='r3c3' className='board-square' onClick={(event)=>changeCell(event)}>{board.r3c3}</div>
        </div>
        </section>)
}