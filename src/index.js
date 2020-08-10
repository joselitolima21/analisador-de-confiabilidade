import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import './styles/global.css'
import './styles/fonts.css'

function App() {
    return (
        <Routes />
    );
}



ReactDOM.render(<App />, document.getElementById('root'));