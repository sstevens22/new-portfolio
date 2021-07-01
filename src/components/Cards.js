import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
      <div className='cards'>
        <h1>Check these out!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
            <a
					href="https://gamesters-paradise.herokuapp.com/dashboard"
					target="_blank"
					rel="blank"
          class='social-icon-link'
				>
          <i class='fas fa-rocket' />
				</a>
              <CardItem
                src='images/Gamesters.jpg'
                text='We spend most our lives living in a Gamesters paradise.'
                label='Gamesters Paradise'
                path='/services'
              />
              <a
					href="https://merriammassey.github.io/job-search/"
					target="_blank"
					rel="blank"
          class='social-icon-link'
				>
          <i class='fas fa-rocket' />
				</a>
              <CardItem
                src='images/Jobless.png'
                text='A job search engine designed to help you make the next step in your career!'
                label='Jobless'
                path='/services'
              />
            </ul>
            <ul className='cards__items'>
            <a
					href="https://sstevens22.github.io/run-buddy/"
					target="_blank"
					rel="blank"
          class='social-icon-link'
				>
          <i class='fas fa-rocket' />
				</a>
              <CardItem
                src='images/RunBuddyMockup.jpg'
                text='Achieve all your fitness goals with help from these top trainers!'
                label='Run Buddy'
                path='/services'
              />
              <a
					href="https://sstevens22.github.io/My-Portfolio/"
					target="_blank"
					rel="blank"
          class='social-icon-link'
				>
          <i class='fas fa-rocket' />
				</a>
              <CardItem
                src='images/Portfoliomockup.jpg'
                text='Oh how I have grown. This is my first go at a portfolio!'
                label='An Old Portfolio'
                path='/products'
              />
              <a
					href="https://sstevens22.github.io/Horiseon/"
					target="_blank"
					rel="blank"
          class='social-icon-link'
				>
          <i class='fas fa-rocket' />
				</a>
              <CardItem
                src='images/HoriseonMock.png'
                text='Horiseon team business catalog.'
                label='Horiseon'
                path='/sign-up'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }

export default Cards;
