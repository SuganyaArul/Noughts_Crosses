import { useState } from 'react';
import Board from './Board';
import Reset from './Reset';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function GameManager(){
    const [board , setBoard]=useState({
        r1c1:'',r1c2:'',r1c3:'',
        r2c1:'',r2c2:'',r2c3:'',
        r3c1:'',r3c2:'',r3c3:'',
});
    const [boardDefault , setBoardDefault]=useState({...board});
    const[currentPlayer, setCurrentPlayer]=useState('O')
    const[status, setStatus] = useState('play') ;
    const [pointer , setPointer]=useState('button');
    const [seen, setSeen] =useState(false);
    function togglePop(){
        setSeen(!seen);
    }
    return(<section>
        {status === 'play'? <h2>Player: {currentPlayer} turn</h2>:null}

    {status === 'win'? 
    <div className='popup'>
        <div className='popup-inner'>
        <h2>Player {currentPlayer} WINS the game !</h2>
        <button onClick={()=>{setStatus('play');
        setBoard(boardDefault);setPointer('button');}}>OK</button>
        </div>
    </div>
    :null}
    {status === 'draw'? <h2>Ouch It's an Draw Try Again!!!</h2>:null}
        
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