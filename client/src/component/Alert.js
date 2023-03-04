import React from 'react'

function Alert ( props ) {
    const captialized = ( word ) => {
        const lower = word.toLowerCase();
        return lower.charAt( 0 ).toUpperCase() + lower.slice( 1 );
    }
    return (
        <div style={{ height: '0px' }}>
            {props.alert && <div className={`alert text-center alert-${ props.alert.type } alert-dismissible fade show`} role="alert">
                <strong>{captialized( props.alert.type )} </strong> : {props.alert.msg} 
            </div>}
        </div>
    )
}

export default Alert