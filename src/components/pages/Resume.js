import React from 'react';
import '../../App.css';
import '../../assets/files/Resume.pdf';
import Arrow from '../../assets/images/clickarrow.png'

function Resume() {
	return (
		<section className='resume'>
				<a href={require("../../assets/files/Resume.pdf")} download>
					<h1>My Resume</h1>
				</a>
                
                <div>
                   <img src= {Arrow} alt="clickme" />
                </div>
		</section>
	);
}

export default Resume;