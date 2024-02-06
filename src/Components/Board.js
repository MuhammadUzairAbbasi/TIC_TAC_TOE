import Square from "./Square";
import React from "react";
import "../styles.css";
import 'animate.css';

export default function Board(props){
 
    function CalculateWinner(){
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (props.squares[a] && props.squares[a] === props.squares[b] && props.squares[a] === props.squares[c]) {
          return {
            winner: props.squares[a],
            winningLine: lines[i]
          };
        }
      }
      return null;

    }

    function handleClick(i){

        if (props.squares[i] || CalculateWinner(props.squares)){
            return;
        }
        const nextSquares = props.squares.slice();
        if (props.nextVal) {
          nextSquares[i] = "X";
        } else {
          nextSquares[i] = "O";
        }
      props.onplay(nextSquares)
    }



const winner = CalculateWinner();
let status;
if (winner) {
  status = (
    <div>
      <p>Winner: {winner.winner}</p>
      <p>Winning Line: {winner.winningLine.join(', ')}</p>
    </div>
  );
} else {
  status = ' Next player: ' + (props.nextVal ? 'X' : 'O');
}
function Restart(){
  window.location.reload();
}

    return(
      <>
      <h2 className="status animate__animated animate__zoomInUp animate_slower">{status}</h2>
        <div className="board animate__animated animate__zoomInUp animate_slower">
           <div className="board-row">
        <Square id="0" value={props.squares[0]} onSquareClick={() => handleClick(0)} />
        <Square id="1" value={props.squares[1]} onSquareClick={() => handleClick(1)} />
        <Square id="2" value={props.squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square id="3" value={props.squares[3]} onSquareClick={() => handleClick(3)} />
        <Square id="4" value={props.squares[4]} onSquareClick={() => handleClick(4)} />
        <Square id="5" value={props.squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square id="6" value={props.squares[6]} onSquareClick={() => handleClick(6)} />
        <Square id="7" value={props.squares[7]} onSquareClick={() => handleClick(7)} />
        <Square id="8" value={props.squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

        <button className="Clear animate__animated animate__fadeInDownBig animate_slower " onClick={Restart}>Reset</button>
        </div> 
      </>
      
    );
}