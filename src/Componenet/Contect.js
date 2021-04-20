import React from 'react'; 

function Contact (){ 
return (
		<div className = "Contect">
			<h1 className = "text-center text-danger my-5" >Get in Touch </h1>
			<p className = "text-center " 
				style = {{color : "white"}}>
				Feel free to drop me a line - Contact us
			</p>
			<div className="row">
				<div className="col-md-8 offset-md-2">
					 {/* Contact Form start  */}
					<div className="contact-form">
						<form id="contactForm" action="#" method="post">
							<div className="row">
								<div className="form-group col-md-6 col-sm-6">
									<input type="text" class="form-control" placeholder="Your Name"/>
								</div>

								<div className="form-group col-md-6 col-sm-6">
									<input type="email" class="form-control" placeholder="Your Email Address"/>
								</div>

								<div className="form-group col-md-12 col-sm-12">
									<input type="text" class="form-control" placeholder="Subject"/>
								</div>

								<div className="form-group col-md-12 col-sm-12">
									<textarea rows="4" class="form-control" placeholder="How can i help you?"></textarea>
								</div>

								<div class="col-md-12 col-sm-12 text-center">
									<button type="submit" class="btn-contact">Contact Now</button>
								</div>
							</div>
						</form>
					</div>
					 {/* Contact Form end  */}
				</div>
			</div>
			{/* <!-- Contact Information Section Starts --> */}
				<div className="contact-information">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								{/* <!-- Contact info single start --> */}
								<div className="contact-info-single wow fadeInUp" data-wow-delay="0.3s">
									<h3>Address</h3>
									<p style = {{color:"white"}}>SBS Engineering College <br />Ferozpur Punjab</p>
								</div>
								{/* <!-- Contact info single end --> */}
							</div>

							<div className="col-lg-4">
								{/* <!-- Contact info single start --> */}
								<div className="contact-info-single wow fadeInUp" data-wow-delay="0.6s">
									<h3>Phone No.</h3>
									<p style ={{color:"white"}}>+91 9598248167 <br />+91 8299577831 </p>
								</div>
								{/* <!-- Contact info single end --> */}
							</div>

							<div className="col-lg-4">
								{/* <!-- Contact info single start --> */}
								<div className="contact-info-single wow fadeInUp" data-wow-delay="0.9s">
									<h3>Email</h3>
									<p style = {{color:"white"}}>luckyshuklakunda@gamil.com<br/>luckyshuklalaru29@gmail.com</p>
								</div>
								{/* <!-- Contact info single end --> */}
							</div>
						</div>
					</div>
				</div>
	{/* <!-- Contact Information Section Ends --> */}
		</div> 
)
}; 

export default Contact; 
