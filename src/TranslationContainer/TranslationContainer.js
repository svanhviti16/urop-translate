import React from 'react';
import ReactDOM from 'react-dom';

export default class TranslationContainer extends React.Component {
    
    // returns a number in the range 0 < max
    getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    render () {
        return ( 
        <div className='translation-container'>
            <button className="result-item" id="result-google" style={{order: this.getRandomInt(2)}}>{this.props.googleTranslation}</button>
            <button className="result-item" id="result-arni" ></button>
        </div>
        )
    }
}
