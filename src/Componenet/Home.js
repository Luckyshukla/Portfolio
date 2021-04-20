import React from 'react'; 
import Typewriter from "typewriter-effect";
function Home (){ 
    return (
        <div className ="sidebar">
            <div class="hero-image">
                <div class="hero-text">
                    <h1>Hi There I'm</h1>
                    <div className="App">
                        <Typewriter
                        onInit={(typewriter)=> {  
                        typewriter      
                        .typeString("UI/UX Designer")        
                        .pauseFor(100)
                        .deleteAll()
                        .typeString("Web Developer")
                        .start();
                        }}
                        />
                    </div>
                    <div className = "icons">
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-linkedin-in"></i>
                        <i class="fab fa-github"></i>
                        <i class="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
            
            {/* <img className = "bg" src={images} alt ="logo"></img> */}
        </div>
    ) 
} 
  
export default Home; 
