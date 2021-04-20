import React from 'react'; 
  
function About () { 
    return(
        <div className =  "about">
            <h1 className = "text-center text-danger my-5">About </h1>
            <div className = "intro" data-wow-delay="2.8s">
                <p><span>I'm</span> Lucky Shukla</p>
                <p>I'm Lucky I solve problems in creative ways. <br></br>
                SBS where I am completing my final year at the <br></br>
                College of Engineering, I have learned the importance <br></br>
                of applying the latest technology to modern-day projects. </p>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <ul>
                                <li><i class="fas fa-calendar-alt"></i><b> Date of birth:</b> 22 july 2000</li>
                                <li><i class="fab fa-font-awesome-flag"></i><b> Nationality:</b> Indian</li>
                                <li><i class="fas fa-arrows-alt"></i><b> Freelance:</b> Available</li>
                                <li><i class="fas fa-phone-alt"></i><b> Phone:</b> +91 9598248167</li>
                            </ul>
                        </div>
                        <div class="col-sm">
                            <ul>
                                <li><i class="fas fa-map-marker-alt"></i><b> Address:</b> Prayagraj, Indian</li>
                                <li><i class="fas fa-envelope"></i><b> Email:</b> luckyshuklakunda@gmail.com</li>
                                <li><i class="fas fa-globe"></i><b> Spoken Langages:</b> Hindi - English</li>
                                <li><i class="fab fa-skype"></i><b> Skype:</b> jesica.silva</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    )

} 
export default About;