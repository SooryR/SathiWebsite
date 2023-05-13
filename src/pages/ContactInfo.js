import React from 'react';
import './ContactInfo.css';

function ContactInfo() {
  return (
    <div className="contact-info-container">
      <h2>Contact Information</h2>
      <ul>
        <li><i className="fas fa-phone"></i> Phone: (647) · 782 · 3410</li>
        <li><i className="far fa-envelope"></i> Email: saththiyajayan@gmail.com</li>
        <li><i className="fab fa-linkedin"></i> LinkedIn: <a href="linkedin.com/in/sathi-r-24951a98">linkedin.com/in/sathi-r-24951a98</a></li>
      </ul>
    </div>
  );
}

export {ContactInfo};
