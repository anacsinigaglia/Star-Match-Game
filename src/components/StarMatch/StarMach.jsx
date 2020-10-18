import React from 'react';

function StarMatch() {
    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                    <div className="star" />
                </div>
                <div className="right">
                    <div className="number">1</div>
                    <div className="number">2</div>
                    <div className="number">3</div>
                    <div className="number">4</div>
                    <div className="number">5</div>
                    <div className="number">6</div>
                    <div className="number">7</div>
                    <div className="number">8</div>
                    <div className="number">9</div>
                </div>
            </div>
            <div className="timer">Time Remaining: 10</div>
        </div>
    )
}

export default StarMatch;