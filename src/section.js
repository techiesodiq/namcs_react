import React from 'react'

const section = () => {
    return (
        
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="about-image">
                            <img src="./img/about-us.png" alt="about us" class="img-fluid"/>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 about-title">
                        <h2 class="text-uppercase pt-5">
                            <span>Let me</span>
                            <span>introduce</span>
                            <span>myself</span>
                        </h2>
                        <div class="paragraph py-4 w-75">
                            <p class="para">
                                I am a multi-faceted, dynamic and committed engineer with relevant hands-on experience in Software Development, Embedded Systems Development, Internet of Things (IoT), Robotics and Artificial Intelligence (AI). 
                            </p>
                            <p class="para">
                                I am a creative leader and an innovative problem solver who has consistently execute projects within limited time and budget limit. With my skills, I connect the dots in my work and take pride in what I do.
                            </p>
                        </div>
                        <button type="button" class="btn button primary-button text-uppercase">Download CV</button>
                    </div>
                </div>
            </div>
    )
}

export default section
