import { useState } from 'react';
import Board from './Board';
import Reset from './Reset';

export default function GameManager(){
    const [board , setBoard]=useState({
        r1c1:'',r1c2:'',r1c3:'',
        r2c1:'',r2c2:'',r2c3:'',
        r3c1:'',r3c2:'',r3c3:'',
});
const [boardDefault , setBoardDefault]=useState({
    r1c1:'',r1c2:'',r1c3:'',
    r2c1:'',r2c2:'',r2c3:'',
    r3c1:'',r3c2:'',r3c3:'',
});
    const[currentPlayer, setCurrentPlayer]=useState('o')
    const[status, setStatus] = useState('play') ;
    const [pointer , setPointer]=useState('button');
    return(<section>
        <h2>GameManager</h2>
        {status === 'play'? <h2>{currentPlayer} turn</h2>:null}
    {status === 'win'? <h2>{currentPlayer} WINS!</h2>:null}
    {status === 'draw'? <h2>Draw</h2>:null}
        
        <Board board={board} setBoard={setBoard} 
            currentPlayer={currentPlayer} 
            setCurrentPlayer={setCurrentPlayer}
            status={status}
            setStatus={setStatus}
            pointer={pointer}
            setPointer={setPointer}
            />
        <Reset setBoard={setBoard} boardDefault={boardDefault} setPointer={setPointer} setStatus={setStatus}/>
        </section>)
};