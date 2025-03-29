import React from 'react';
import './styles/notfound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-subtitle">Page Under Construction</h2>
      <p className="not-found-message">
        The content you’re looking for isn’t available yet. We’re actively
        expanding the site, so stay tuned. You can return to the home page, or
        reach out if you have any questions.
      </p>
      <a className="not-found-link" href="/">
        Return to Home
      </a>
    </div>
  );
};

export default NotFound;
