import React, { useContext } from 'react';
import cx from 'classnames';

import './Button.css'

import ThemeContext from '../../ThemeContext';

const Button = (props) => {
    
    const theme = useContext(ThemeContext);
    console.log(theme);
    const {colors} = theme;

    return (
        
        <button className={cx(
            "btn-basic",
            `btn--roundness-${props.roundness}`, 
            {
                ["btn-border"]: props.border                
            })} 
            style={{
                border: props.border ? `solid ${colors[props.filter].hex} 1px` : 'none',
                backgroundColor: props.fill ? colors[props.filter].hex : 'transparent'
            }}>
            Basic
            {props.children}
        </button>
    )
}

Button.defaultProps = {
    fill: true,
    filter: 3
}

export default Button;