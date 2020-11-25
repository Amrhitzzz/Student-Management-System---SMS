import React from 'react';
import resultstyle from "./result.module.css";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default function Resultbody() {
    // const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <>
            <div className={resultstyle.resultoption}>
                <div className={resultstyle.resultsem}>
                    <h2>Select Semester</h2>
                    <FormControl variant="filled" className={resultstyle.formControl}>
                        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className={resultstyle.resultsem}>
                    <h2>Select Semester</h2>
                    <FormControl variant="filled" className={resultstyle.formControl}>
                        <InputLabel 
                        id="demo-simple-select-filled-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className={resultstyle.resultsearchanddownload}>
                    <button className={resultstyle.resultbtn}>Search</button>
                    <button className={resultstyle.resultbtn}>Download</button>
                </div>
            </div>

            <div className={resultstyle.marksheets}>

            </div>
        </>
    )
}
