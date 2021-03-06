import React from 'react';
import ReactDOM from 'react-dom';

export default class TranslationContainer extends React.Component {
    
    // returns 1 or 0, which determines the order of the results
    getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    render () {
        return (
            <div> 
                <div className='translation-container'>
                    <button className="result-item" id="google" type="button" lang="is-x-mtfrom-en" onClick={this.props.handleSelection} style={{order: this.getRandomInt(2)}}>{this.props.googleTranslation}</button>
                    <button className="result-item" id="arni" type="button" lang="is-x-mtfrom-en" onClick={this.props.handleSelection}></button>
                </div>
                <p id="instructions">Smelltu á þýðinguna sem þér þykir betri til að hjálpa til við að meta gæði vélþýðinganna.</p>
            </div>
        )
    }
}
