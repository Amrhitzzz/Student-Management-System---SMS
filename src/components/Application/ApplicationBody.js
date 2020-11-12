import React, { useState, useContext} from 'react';
import appstyle from "./application.module.css";
import { Theme } from "../../context/Themecontext"

const ApplicationBody = () => {
    const [subtitle, setSubTitle] = useState("")
    const [description, setDescription] = useState("");

    const theme = useContext(Theme);
    
    return (
        <>
            <div className={appstyle.main} style={theme[0]}>
                <div className={appstyle.subtitle}>
                    <label htmlFor="subjecttitle">Subject Title</label>
                    <br/>
                    <input type="text"
                        placeholder="e.g Application for sick leave"
                        onChange={(e)=>setSubTitle(e.target.value)}
                        value={subtitle}
                        id="subjecttitle"
                        className={appstyle.subtitle_input}
                        style={theme[11]}
                    />
                </div>

                <div className={appstyle.description}>
                    <label htmlFor="description">Description</label>
                    <br/>
                    <textarea name="" id="" cols="30" rows="10"
                        onChange={(e)=>setDescription(e.target.value)}
                        value={description}
                        id="description"
                        className={appstyle.description_input}
                        style={theme[11]}
                     />
                </div>
                <div className={appstyle.btngroup} >
                    <button className={appstyle.btn} style={theme[11]}>SEND</button>
                    <button className={appstyle.btn} style={theme[11]}>RESET</button>
                </div>
            </div>

        </>
    );
};

export default ApplicationBody;