import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'

function App() {
  return (
    <div className="container">
      <div className="content">
        <Routes/>
      </div>
    </div>
  );
}



ReactDOM.render(<App />, document.getElementById('root'));
