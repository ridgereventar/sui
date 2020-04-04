import React from 'react';

const ThemeContext = React.createContext();
export const ThemeContextConsumer = ThemeContext.Consumer;

const initialState = {
    colors: [
        {
            type: "Primary", 
            hex: "", 
            rgb: "",
            swatch: []
        }, 
        {
            type: "Secondary", 
            hex: "", 
            rgb: "",
            swatch: []
        }, 
        {
            type: "Tertiary", 
            hex: "", 
            rgb: "",
            swatch: []
        } 
    ],
    fonts: [
        {
            type: "Primary", 
            name: "", 
            url: "",
            weights: []
        },
        {
            type: "Secondary", 
            name: "", 
            url: "",
            weights: []
        }
    ]
}

export class ThemeContextProvider extends React.Component {

    
    constructor(props) {
        super(props);
        if(props.value) {
            this.state = props.value;
        } else {
            state = initialState;
        }
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContext;