import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import './styles/global.css'
import './styles/fonts.css'

function App() {
    return (
        <div className="container" >
            <div className="content" >
                <Routes />
            </div>
        </div >
    );
}



ReactDOM.render(<App />, document.getElementById('root'));