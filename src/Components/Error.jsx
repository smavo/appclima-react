import React,{ Fragment } from 'react'

function Error({mensaje}) {
    return (
        <Fragment>
            <p className="red darken-4 error">{mensaje}</p>
        </Fragment>
    )
}

export default Error
