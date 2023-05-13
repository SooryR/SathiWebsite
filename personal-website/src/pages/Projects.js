import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="project-container">
      <div className="project">
        <h2>Python Web Scraper</h2>
        <p className="project-date">Aug 2017 - Present</p>
        <ul>
          <li>Created a Flask web app</li>
          <li>The scraper is based on Beautiful Soup python module</li>
          <li>Scrapped information are from <a href="https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)">https://bulbapedia.bulbagarden.net/wiki/Pikachu</a></li>
          <li>The scrapped information is displayed in a neater way</li>
        </ul>
      </div>
      <div className="project">
        <h2>UX Testing</h2>
        <p className="project-date">Sep 2016 - Dec 2016</p>
        <ul>
          <li>Ran manual testing on a website (<a href="http://broomcompany.com/">http://broomcompany.com/</a>)</li>
          <li>Logged all the problems that website had</li>
          <li>Worked with a group of 2, including a team leader and developers</li>
          <li>Possessed an Agile mindset when working on this project</li>
        </ul>
      </div>
      <div className="project">
        <h2>Meal Exchange</h2>
        <p className="project-date">Jan 2016 - Apr 2016</p>
        <ul>
          <li>Created a back end for a website that allows the user to check required fields for that year's Trick or Eat event</li>
          <li>Used JSON and MySQL to retrieve and save data to the server</li>
          <li>Ran multiple tests on the server to see if we were able to retrieve the information that we wanted (whitebox testing)</li>
        </ul>
      </div>
      <div className="project">
        <h2>Telegram</h2>
        <p className="project-date">Jan 2016 - Apr 2016</p>
        <ul>
          <li>Telegram is a messenger app that allows the users to send encrypted messages across different platforms</li>
          <li>Used JavaScript, HTML, and CSS to resolve all the open issues from GitHub</li>
          <li>Worked on a scrum team and became familiar with agile practices</li>
        </ul>
      </div>
    </div>
  );
}

export {Projects};
