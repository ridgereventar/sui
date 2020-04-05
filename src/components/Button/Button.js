import React, { useContext } from 'react';
import cx from 'classnames';
import css from './Button.module.scss';
import ThemeContext from '../../ThemeContext';

const Button = (props) => {
    const {roundness, border, fill, colorIndex, children} = props;
    const theme = useContext(ThemeContext);
    const {colors} = theme;

    return (
        <button className={cx(
            css.root,
            {
                [css[`roundness_${roundness}`]]: !!roundness,
                [css.border]: border                
            })} 
            style={{
                border: border ? `solid ${colors[colorIndex].hex} 1px` : 'none',
                backgroundColor: fill ? colors[colorIndex].hex : 'transparent'
            }}>
            Basic
            {children}
        </button>
    )
}

export default Button;