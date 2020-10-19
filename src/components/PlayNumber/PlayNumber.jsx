import React from 'react';
import { colors } from '../const/colors';

function Number(props) {
    return (
        <>
            <button className="number" 
                    style={{ backgroundColor: colors[props.status] }}
                    onClick={ () => props.onClick(props.number, props.status) }>
                        {props.number}
            </button>
        </>
    )
}

export default Number;


