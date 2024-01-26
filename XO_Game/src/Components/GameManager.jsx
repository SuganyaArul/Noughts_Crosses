import { useState } from 'react';
import Board from './Board';
import Reset from './Reset';
import Status from './Status';
export default function GameManager(){
    const [board , setBoard]=useState({
        r1c1:'',r1c2:'',r1c3:'',
        r2c1:'',r2c2:'',r2c3:'',
        r3c1:'',r3c2:'',r3c3:'',
});
    const[currentPlayer, setCurrentPlayer]=useState('o')
    const[winStatus, setWinStatus] = useState(false) 
    return(<section>
        <h2>GameManager</h2>
        <p>Current Player : {currentPlayer}</p>
        <Board board={board} setBoard={setBoard} 
            currentPlayer={currentPlayer} 
            setCurrentPlayer={setCurrentPlayer}
            status={winStatus}
            setStatus={setWinStatus}
            />
        <Reset setBoard={setBoard}/>
        <Status board={board}/>
        </section>)
};