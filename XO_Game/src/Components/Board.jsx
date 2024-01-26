import { useState } from 'react';
import '../Board.css'
// import Status from './Status'

export default function Board({board, setBoard, currentPlayer, setCurrentPlayer ,setWinStatus, pointer, setPointer}){
    
    function changeCell(event){
        const cellId = event.target.id;
        const newCellValue = {...board}

        if(board[cellId] === ''){newCellValue[cellId] = currentPlayer
        setBoard(newCellValue)

        // review status
        const winner=calculateWinner(newCellValue);
        if(winner !== null){
            setWinStatus(true)
            setPointer('pointer')
        }
        else{
        let nextPlayer = 'x'
        if (currentPlayer === 'x'){
            nextPlayer='o'
        }
        setCurrentPlayer(nextPlayer)}}
    }

    function calculateWinner(board){
         const lines = [
            [r1c1, r1c2, r1c3],
            [r2c1, r2c2, r2c3],
            [r3c1, r3c2, r3c3],
            [r1c1,r2c1, r3c1],
            [r1c2, r2c2, r3c2],
            [r1c3, r2c3, r3c3],
            [r1c1, r2c2, r3c3],
            [r1c3, r2c2, r3c1]
          ];
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a.id] && board[a.id] === board[b.id] && board[a.id] === board[c.id]) {
              return board[a.id];
            }
            
          }
          return null;
    }


    return(<section>
        <h2>Board</h2>
        <div id='board-container' className={pointer}>
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