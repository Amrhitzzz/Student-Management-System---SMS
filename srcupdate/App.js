import React from 'react';
import { BrowserRouter as Router , Switch, Route } from "react-router-dom";

const App = () => {
    return(
        <>
            <Router>
                <Switch>
                    <Route exact path="/"
                        render={()=> loginstatus ? <Home /> : <Login/> }
                    />
                    
                    <Route exact path="/home"
                        render={()=> loginstatus ? 
                        <Home /> : <Login/> }
                     />

                     <Route exact path = "/home/app" 
                         render={() => loginstatus ? 
                        <App /> : <Login/>
                         }
                     />

                </Switch>
            </Router>
        </>
    );
};

export default App;