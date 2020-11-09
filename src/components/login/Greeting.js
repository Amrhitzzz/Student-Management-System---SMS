import React from 'react';
 
const Greeting = () => {
    let dates = new Date();
    let times = dates.getHours();
    let greeting = "";
    if (times >= 1 && times < 12) {
        greeting = 'Good Morning';
    } else if (times >= 12 && times < 19) {
        greeting = "Good Afternooon";
    } else {
        greeting = 'Good Night';
    }
    
    return (
        <>
            <h2>{greeting}</h2>
        </>
    );
}

export default Greeting;
