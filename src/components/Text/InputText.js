import React, { useContext } from 'react';
import cx from 'classnames';
import css from './InputText.module.scss';
import ThemeContext from '../../ThemeContext';

const InputText = (props) => {
    
    const {roundness, line, colorIndex, border} = props;
    const theme = useContext(ThemeContext);
    const {colors} = theme;

    return (
        <React.Fragment>
            <label className={css.label_root}> Label </label>
            
            <input className={cx(
                css.input_root,
                {
                    [css[`roundness_${roundness}`]]: !!roundness,
                    [css.line]: line
                }
                )}
                style={{
                    border: border ?  `solid ${colors[colorIndex].hex} 1px` : 'none',
                    borderBottom: line ? `solid ${colors[colorIndex].hex} 1px` : `solid ${colors[colorIndex].hex} 1px` 
                }}
                placeholder="input text"
                type="text"
                id=""
                name=""
                />
        </React.Fragment>
    )
}


export default InputText;