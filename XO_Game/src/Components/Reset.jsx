export default function Reset({setBoard, boardDefault, setPointer, setWinStatus}){
    return(<button onClick={()=>{setBoard(boardDefault);
        setPointer('button');
        setWinStatus(false)}}>Reset</button>)
}