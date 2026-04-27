import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-container">
        <p>&copy; {new Date().getFullYear()} Dhanveer M. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
          Built with React & Modern CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
