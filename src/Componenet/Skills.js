import React from 'react';
import {Progress} from "reactstrap"
// import './resumeData.json'
const Skills = () =>{

    return (
      <section className="my-resume" id="resume">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					{/* <!-- Section title start --> */}
					<div className="section-title">
						<h2 style = {{color:"white"}}>My Resume</h2>
                  <p></p>
					</div>
					{/* <!-- Section title end --> */}
				</div>
			</div>

			<div className="row mb-5 pb-5">
				<div className="col-md-6">
					<div className="experience">
						<h3 className="sub-title"><i className="fa fa-briefcase"></i> Internship</h3>

						{/* <!-- Experience Slider Start --> */}
						<div className="swiper-container experience-slider">
							<div className="swiper-wrapper">
								{/* <!-- Experience Slide start --> */}
								<div className="swiper-slide">
									<div className="experience-single">
										<h5>June 2019 - july 2019</h5>
										<h4>Python - Cetpa Infotech Pvt.Ltd</h4>
										<p style = {{color:'white'}}>Using Python Liberary OpenCV create Attendance Sheet using face recognigation and store all the data in mySQL Database</p>
									</div>
								</div>
								{/* <!-- Experience Slide end --> */}

								{/* <!-- Experience Slide start --> */}
								<div className="swiper-slide">
									<div className="experience-single">
										<h5>Jan 2021 - march 2021</h5>
										<h4>Front-End Developer - AER</h4>
										<p style = {{color:'white'}}>Using JavaScript framework ReactJs and Redux Develop a site and fetch data from Json file</p>
									</div>
								</div>
								{/* <!-- Experience Slide end --> */}

								{/* <!-- Experience Slide start --> */}
								<div className="swiper-slide">
									<div className="experience-single">
										<h5>2010 - Present</h5>
										<h4>WordPress Developer - Themeforest</h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
									</div>
								</div>
								{/* <!-- Experience Slide end --> */}
							</div>

							{/* <!-- Experience Pagination Start --> */}
							<div className="experience-pagination"></div>
							{/* <!-- Experience Pagination Start --> */}
						</div>
						{/* <!-- Experience Slider Start --> */}
					</div>
				</div>

				<div className="col-md-6">
					<div className="education">
						<h3 className="sub-title"><i className="fa fa-graduation-cap"></i> Education</h3>

						{/* <!-- Education Slider Start --> */}
						<div className="swiper-container education-slider">
							<div className="swiper-wrapper">
								{/* <!-- Experience Slide start --> */}
								<div className="swiper-slide">
									<div className="experience-single">
										<h5>2017 - 2021</h5>
										<h4>Bachalor - Shaheed bhagat singh state Technical campus</h4>
										<p style = {{color:'white'}}>Computer science and Engineering (7.0/10)</p>
									</div>
								</div>
								{/* <!-- Experience Slide end --> */}

								{/* <!-- Experience Slide start --> */}
								<div className="swiper-slide">
									<div className="experience-single">
										<h5>2014 - 2016</h5>
										<h4>Intermedit(10+2) - T P inter College</h4>
										<p style ={{color:'white'}}>Math (67%/100)</p>
									</div>
								</div>
                        <div className="swiper-slide">
									<div className="experience-single">
										<h5>2012 - 2014</h5>
										<h4>Matric - T P inter College</h4>
										<p style ={{color:'white'}}>Science (78%/100)</p>
									</div>
								</div>
								{/* <!-- Experience Slide end --> */}
							</div>

							{/* <!-- Education Pagination Start --> */}
							<div className="education-pagination"></div>
							{/* <!-- Education Pagination Start --> */}
						</div>
						{/* <!-- Education Slider End --> */}
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-md-6">
					<div className="skill">
						<h3 className="sub-title"><i className="fa fa-star-o"></i>My Skills</h3>

						{/* <!-- Skill Content Start --> */}
						<div className="skill-content">
							<div className="row">
								<div className="col-md-6">
									{/* <!-- Skill Single Start --> */}
									<div className="skill-single">
                              <h5>Python</h5>
										<Progress className="progress-lg" value={85} color="primary"></Progress>
									</div>
									{/* <!-- Skill Single End --> */}
								</div>

								<div className="col-md-6">
									{/* <!-- Skill Single Start --> */}
									<div className="skill-single">
                              <h5>HTML 5</h5>
                           <Progress className="progress-lg" value={95} color="primary"></Progress>
									</div>
									{/* <!-- Skill Single End --> */}
								</div>

								<div className="col-md-6">
									{/* <!-- Skill Single Start --> */}
									<div className="skill-single">
										<h5>CSS</h5>
										<Progress className="progress-lg" value={85} color="primary"></Progress>
									</div>
									{/* <!-- Skill Single End --> */}
								</div>

								<div className="col-md-6">
									
									<div className="skill-single">
										<h5>Bootstrap</h5>
										<Progress className="progress-lg" value={95} color="primary"></Progress>
									</div>
									
								</div>

								<div className="col-md-6">
									
									<div className="skill-single">
										<h5>JavaScript</h5>
										<Progress className="progress-lg" value={85} color="primary"></Progress>
									</div>
									
								</div>

								<div className="col-md-6">
									
									<div className="skill-single">
										<h5>ReactJs</h5>
										<Progress className="progress-lg" value={70} color="primary"></Progress>
									</div>
                           </div>
                           <div className="col-md-6">
									
									<div className="skill-single">
										<h5>Data stracture and algoritham</h5>
										<Progress className="progress-lg" value={65} color="primary"></Progress>
									</div>
									
								</div>
                        <div className="col-md-6">
									
									<div className="skill-single">
										<h5>mySQL</h5>
										<Progress className="progress-lg" value={70} color="primary"></Progress>
									</div>
							</div>
                     </div>
						</div>
						{/* <!-- Skill Content End --> */}
                  
					</div>
				</div>
			</div>
		</div>
	</section>
    );
  }


export default Skills;