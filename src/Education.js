import React from 'react'

function Education() {
    return (
        <>
           <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">University of Ubon Ratchathani</h3>
                            <div class="subheading mb-3">Bachelor of Science</div>
                            <div>Computer Science</div>
                            <p>GPA: 2.50</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">July 2018 - Present</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Dongsawang Witthaya High School</h3>
                            <div class="subheading mb-3">Science-Mathematics</div>
                            <p>GPA: 2.89</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">May 2015 - March 2018</span></div>
                    </div>
                </div>
            </section>
            <hr class="m-0" /> 
        </>
    )
}

export default Education
