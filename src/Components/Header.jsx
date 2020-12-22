import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

function Header({ titulo }) {
    return (
        <Fragment>

            <nav>
                <div className="nav-wrapper teal darken-1">
                    <a href="#!" className="brand-logo">{titulo}</a>
                    {/*<ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>*/}
                </div>
            </nav>
        </Fragment>
    )
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header
