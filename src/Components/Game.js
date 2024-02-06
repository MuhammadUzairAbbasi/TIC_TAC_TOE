import { useState } from "react";
import Board  from "./Board";

export default function Game(){
    const [nextVal,setnextVal]=useState(true);
    const [history,sethistory]=useState([Array(9).fill(null)]);
    const currentSquare=history[history.length - 1];
    
  function HandlePlay(nextSquares){
    sethistory([...history, nextSquares]);
    setnextVal(!nextVal);
  }  

  // const move=history.map((squares,move)=>{
  //   let description;
  //   if(move > 0){
  //       description="go to "+ move;
  //   }
  //   else{
  //       description="go to start";
  //   }
  //   return <li key={move}>
  //   <button className="move-description">{description}</button>
  //   </li>
  // })

    return <div className="game">
        <Board  nextVal={nextVal} squares={currentSquare} onplay={HandlePlay} />

        {/* <div className="game-info animate__animated animate__zoomInUp animate_slower">
            <ol>{move}</ol>
        </div> */}
    </div>
}