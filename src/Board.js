import React, {useState} from "react";
import Square from "./Square";

function Board(){
    const [squares, setSquares] =  useState(Array(9).fill(null));
    const [xisNext, setxisNext] = useState(true);
    function handlingClick(i){
        if(calculateWinner(squares) || squares[i]){
            return;
        }
        const nextSquares = squares.slice();
        nextSquares[i] = xisNext?'X':'O';
        setSquares(nextSquares);
        setxisNext(!xisNext);
    }
    function renderingSquare(i){
        return <Square value={squares[i]} onClick={() => handlingClick(i)} />;
    }
    const winner = calculateWinner(squares);
    let status;
    if(winner){
        status = 'Winner: ' + winner;
    }
    else{
        status = 'Next Player '+(xisNext ? 'X' : 'O');
    }
    return(
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderingSquare(0)}
                {renderingSquare(1)}
                {renderingSquare(2)}
            </div>
            <div className="board-row">
                {renderingSquare(3)}
                {renderingSquare(4)}
                {renderingSquare(5)}
            </div>
            <div className="board-row">
                {renderingSquare(6)}
                {renderingSquare(7)}
                {renderingSquare(8)}
            </div>
        </div>
    );
}
function calculateWinner(squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
}
export default Board;