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

    // The Theme Context is set to the value prop given by the user. 
    // If no value is given, Theme Context will be a blank template called 'initialState'
    
    constructor(props) {
        super(props);
        if(props.value) {
            this.state = props.value;
        } else {
            this.state = initialState;
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