import '../Board.css'
export default function Board({board, setBoard, currentPlayer, setCurrentPlayer}){
    function renderBoard(event){
        console.dir(event.target);
        console.log(event.target.value);
        
    }
    return(<section>
        <h2>Board</h2>
        <div id='board-container'>
        <div id='r1c1' className='board-square' onClick={(event)=>renderBoard(event)}>{board.r1c1}</div>
        <div id='r1c2' className='board-square'></div>
        <div id='r1c3' className='board-square'></div>
        <div id='r2c1' className='board-square'></div>
        <div id='r2c2' className='board-square'></div>
        <div id='r2c3' className='board-square'></div>
        <div id='r3c1' className='board-square'></div>
        <div id='r3c2' className='board-square'></div>
        <div id='r3c3' className='board-square'></div>
        </div>
        </section>)
}