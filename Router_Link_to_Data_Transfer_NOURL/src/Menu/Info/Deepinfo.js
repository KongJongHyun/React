import React from 'react';

const Deepinfo = ({location ,match}) => {
    console.log(match.params.id);
    console.log(location.query.area)
    
    return(
        <div>
            <h2></h2>
        </div>
    )
}
export default Deepinfo;