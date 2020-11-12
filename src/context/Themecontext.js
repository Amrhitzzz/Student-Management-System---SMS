import React, { useState, createContext } from 'react';

const Status = createContext();
const Toggle = createContext();
const Theme = createContext();

export { Toggle, Theme, Status };
export default function Themecontext(props) {
    const [istrue, setistrue] = useState(true);

    const Toggletheme = () => {
        setistrue(prev => !prev)
    }

    const theme = [
        // theme[0]
        {
            backgroundColor : istrue ? "#2d3436" : "#fff",
            color : istrue ? "#fff" : "#3a3a3a",
        },
        //theme[1]
        {
             boxShadow: istrue ? "0px 12px 18px rgba(1, 1, 1, 0.5)" : "0px 10px 25px rgba(181, 173, 243, 0.5)" 
            //  boxShadow: istrue ? "0px 0px 7px 4px rgb(0 0 0 / 22%)" : " 0px 0px 7px 4px rgb(230 230 230 / 93%)" 
        },
        // theme[2] : input field inside color 
        {
            backgroundColor : istrue ? "#3f484b" : "#f1f1f1",
            color : istrue ? "#fff" : "#3a3a3a",
        },
        //theme[3] : submit button outer
        {
            backgroundColor : istrue ? "#fff" : "#3a3a3a",
        },
        //theme[4] : submit btn icon
        {
            color : istrue ?  "#3a3a3a" : "#fff" 
        },
        //theme[5] : backtowebsite 
        {
            textDecoration : "none",
            color : istrue ? "#fff" : "#3a3a3a",
        },
        //theme[6] : box shadow for home page header
        {
            boxShadow: istrue ? "9px 12px 18px rgba(1, 1, 1, 0.5)" : "9px 10px 25px rgba(181, 173, 243, 0.5)" 
            // boxShadow : istrue ? "12px 0px 18px 1px black" : "7px 0px 4px 7px #dedede" 
        },
        //theme[7] : box shadow for home page sidebar
        {
            boxShadow: istrue ? "4px 12px 18px rgba(1, 1, 1, 0.5)" : "4px 10px 25px rgba(181, 173, 243, 0.5)" 
            // boxShadow : istrue ? "11px 0px 19px -12px black" : "-4px 0px 14px 7px #dedede" 
        },
        //theme[8] : border top for home page 
        {
            borderTop : istrue ? "3px solid #fff" : "3px solid #3a3a3a",
            boxShadow: istrue ? "0px 12px 18px rgba(1, 1, 1, 0.5)" : "0px 10px 25px rgba(181, 173, 243, 0.5)" 
            // boxShadow: istrue ? "0px 0px 7px 4px rgb(0 0 0 / 22%)" : " 0px 0px 7px 4px rgb(230 230 230 / 93%)" 
        },
        //theme[9] : border side for home page notices
        {
            borderLeft : istrue ? "3px solid #fff" : "3px solid #3a3a3a",
            boxShadow: istrue ? "0px 12px 18px rgba(1, 1, 1, 0.5)" : "0px 10px 25px rgba(181, 173, 243, 0.5)" 
            // boxShadow: istrue ? "0px 0px 7px 4px rgb(0 0 0 / 22%)" : " 0px 0px 7px 4px rgb(230 230 230 / 93%)" 
        },
        // theme[10] color only
        {
            color : istrue ? "#fff" : "#3a3a3a"
        },
        //theme[11] : color and border
        {
            boxShadow: istrue ? "0px 12px 18px rgba(1, 1, 1, 0.5)" : "0px 10px 25px rgba(181, 173, 243, 0.5)" ,
            color: istrue ? "#fff" : "#3a3a3a",
            backgroundColor : istrue ? "#2D3436" : "#fff"

        }
    ]
    
    return (
        <Status.Provider value={istrue}>
            <Toggle.Provider value={Toggletheme}>
                <Theme.Provider value={theme}>
                     {props.children}
                </Theme.Provider>
            </Toggle.Provider>
        </Status.Provider>
    )
}