import React from 'react';
import { colors } from '../const/colors';

function Number(props) {
    return (
        <>
            <button className="number" 
                    style={{ backgroundColor: colors[props.status] }}
                    onClick={ () => console.log('Num', props.number) }>
                        {props.number}
            </button>
        </>
    )
}

export default Number;


