import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
  import Home from './Componenet/Home';
  import About from "./Componenet/About";
  import Contect from "./Componenet/Contect";
  import "./Componenet/style.css";
  import Navbar1 from "./Componenet/Navbar1";
  import Projects from "./Componenet/Projects";
  import Skills from './Componenet/Skills';
class App extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Navbar1/>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about-us">
                            <About />
                        </Route>
                        <Route path="/contact-us">
                            <Contect/>
                        </Route>
                        <Route path="/Projects">
                            <Projects />
                        </Route>
                        <Route path="/Skills">
                            <Skills />
                        </Route>
                    </Switch>
                </Router>
            </React.Fragment>
        )  
    }
}

export default App;