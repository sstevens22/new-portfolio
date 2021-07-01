import React from 'react';
import '../../App.css';
import { Button } from '../Button';

export default function Contact() {
    return <section className='contact'>
         
        <div>
				<form id="contact-form">
					<div>
						<label htmlFor="Name">Name:</label>
						<br></br>
						<input
							type="text"
							name="Name"
						/>
					</div>
					<div>
						<label htmlFor="email">Email address:</label>
						<br></br>
						<input
							type="email"
							name="email"
							
						/>
					</div>
					<div>
						<label htmlFor="Message">Message:</label>
						<br></br>
						<textarea
							name="Message"
							rows="5"
						/>
					</div>
					
					<Button buttonStyle='btn--primary'>Send</Button>
				</form>
			</div>
        </section>;
    
    
};

