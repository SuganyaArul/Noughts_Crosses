export default function Reset({setBoard, boardDefault, setPointer, setStatus}){
    return(<button onClick={()=>{setBoard(boardDefault);
        setPointer('button');
        setStatus('play')}}>Play Again!!!</button>)
}