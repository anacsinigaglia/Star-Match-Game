import React from 'react';
import { utils } from '../const/utils';

function StarsDisplay(props) {

    return (
        <div>
            {utils.range(1, props.count).map(starId =>
                <div key={starId} className="star" />
            )}
        </div>
    )

}

export default StarsDisplay;