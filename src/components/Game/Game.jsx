import React, { useEffect, useState } from 'react';
import { utils } from '../const/utils';
import PlayAgain from '../PlayAgain/PlayAgain';
import PlayNumber from '../PlayNumber/PlayNumber';
import StarsDisplay from '../StarsDisplay/StarsDisplay';
import './Game.scss';

function Game(props) {
    const [stars, setStars] = useState(utils.random(1, 9));
    const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(10);

    const gameStatus = availableNums.length === 0 
        ? 'won'
        : secondsLeft === 0 ? 'lost' : 'active'

    useEffect(() => {
        if (secondsLeft > 0 && availableNums.length > 0) {
            const timerId = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);
            return () => clearTimeout(timerId); //sempre retornar uma função que limpa o useEffect!
        }
    });

    const candidatesAreWrong = utils.sum(candidateNums) > stars;

    const numberStatus = (number) => {
        if (!availableNums.includes(number)) {
            return 'used';
        }

        if (candidateNums.includes(number)) {
            return candidatesAreWrong ? 'wrong' : 'candidate';
        }

        return 'available';
    };

    const onNumberClick = (number, currentStatus) => {
        if (currentStatus == 'used') {
            return;
        }

        const newCandidateNums =
            currentStatus === 'available'
                ? candidateNums.concat(number)
                : candidateNums.filter(cn => cn !== number);

        if (utils.sum(newCandidateNums) !== stars) {
            setCandidateNums(newCandidateNums);
        } else {
            const newAvailableNums = availableNums.filter(
                n => !newCandidateNums.includes(n)
            );
            setStars(utils.randomSumIn(newAvailableNums, 9));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
    };

    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">

                <div className="left">
                    {gameStatus !== 'active'
                        ? (<PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />) //ajuda a reset o game
                        : (<StarsDisplay count={stars} />)
                    }
                </div>

                <div className="right">
                    {utils.range(1, 9).map(number =>
                        <PlayNumber
                            key={number}
                            status={numberStatus(number)}
                            number={number}
                            onClick={onNumberClick} />)
                    }
                </div>
            </div>

            <div className="timer">Time Remaining: {secondsLeft}</div>

        </div>
    )
}

export default Game;