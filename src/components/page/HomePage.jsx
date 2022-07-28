import React from 'react';

const footerStyle = {
  position: 'fixed',
  left: 0,
  bottom: 0,
  padding: '20px',
  width: '100%',
  textAlign: 'center',
};

export default function HomePage() {
  return (
    <>
      <h1 className="display-1">Uber Summer Practice Order Management Frontend</h1>
      <p className="lead">
        Feel free to use as a starting point for your project
      </p>
      <p>
        This is a sample React application using React Bootstrap component
        library. It also shows how to do data fetching with React hooks. For
        more information refer to README of the repo, or React-Bootstrap,
        Bootstrap and React docs.
      </p>
      <footer style={footerStyle}>
        <blockquote className="blockquote text-center">
          <p><small>Do or do not. There is no try.</small></p>
          <div className="blockquote-footer">
            Yoda
          </div>
        </blockquote>
      </footer>
    </>
  );
}
