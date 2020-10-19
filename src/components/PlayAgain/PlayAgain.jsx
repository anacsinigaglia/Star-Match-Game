import React from 'react';
import './PlayAgain.scss';

function PlayAgain(props) {
    return (
        <>
            <div className="game-done">
                <div className="message" style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}>
                    {props.gameStatus === 'lost' ? 'Game Over' : 'Winner!'}
                </div>
                <button onClick={props.onClick}>Play again</button>
            </div>
        </>
    )
}

export default PlayAgain;