import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Shubham Roy. All rights reserved.</p>
      </div>
      <div className="contact-details">
        <p>Contact: rajshubham160900@gmail.com</p>
        <p>Phone: +91 8603034154</p>
        {/* Add more contact details as needed */}
      </div>
    </footer>
  );
};

export default Footer;
