import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'node-fetch';
import FormData from 'form-data';

export default class SourceInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
        this.props.handleChange(e);
    }

    handleSubmit(e) {
        e.preventDefault();

        const form = { text: this.state.value};

        fetch('http://localhost:3001/api/translate', {  
            method: 'POST', 
            body: JSON.stringify(form),
            headers: new Headers({ 'Content-Type': 'application/json' })
            })
            .then((res) => {
                if (res.ok){
                  return res.json();
                } else {
                  throw new Error ('Something went wrong with your fetch');
                }
            }).then((json) => {
            this.props.updateGoogleTranslation(json);
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleSubmit(e);
        }
    }
    
    render () {
        return ( 
            <div className='source-input'>
                <form id="input-form" onSubmit={(e) => { this.handleSubmit(e) }}>
                    <textarea value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress} id='textbox' placeholder="Sláðu inn texta á ensku hér" maxLength='200' autoFocus="autoFocus"/>
                    <input id="translate-button" type="submit" value="Þýða" />
                </form>
            </div>
        )
    }
}