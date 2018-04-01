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
        console.log('handleChange')
        console.log(e.target.value);
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({value: e.target.value});

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

    render () {
        return ( 
            <div className='source-input' id="flex-container">
                <form onSubmit={(e) => { this.handleSubmit(e) }}>
                    <textarea value={this.state.value} onChange={this.handleChange} className="flex-item-bigger" id='textbox' maxLength='200' autoFocus="autoFocus"/>
                    <input id="translate-button" className="flex-item-smaller" type="submit" value="Þýða" />
                    <label >Sláðu inn texta á ensku til að þýða</label>
                </form>
            </div>
        )
    }
}