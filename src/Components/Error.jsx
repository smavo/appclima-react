import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

function Error({ mensaje }) {
    return (
        <Fragment>
            <p className="red darken-4 error">{mensaje}</p>
        </Fragment>
    )
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Error;
