import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class SourceInput extends React.Component {

    
    render () {
        return ( 
            <div className='source-input' id="flex-container">
                <textarea className="flex-item-bigger" id='textbox' maxLength='200' onChange={this.handleChange} autoFocus="autoFocus"/>
                <input id="translate-button" className="flex-item-smaller" type="submit" value="Þýða" />
                <label >Sláðu inn texta á ensku til að þýða</label>
            </div>
        )
    }
}