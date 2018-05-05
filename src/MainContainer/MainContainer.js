import React from 'react';
import ReactDOM from 'react-dom';
import SourceInput from '../SourceInput/SourceInput.js'
import TranslationContainer from '../TranslationContainer/TranslationContainer.js'

export default class MainContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            source: '',
            googleTranslation: '',
            arniTranslation: ''
        };
        this.updateGoogleTranslation = this.updateGoogleTranslation.bind(this);
        this.updateArniTranslation = this.updateArniTranslation.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log('handleChange')
        console.log(e.target.value);
        this.setState({source: e.target.value});
    }

    updateGoogleTranslation(translation) {
        this.setState({ googleTranslation: translation.translation });
        console.log(translation.translation);
    }

    updateArniTranslation(translation) {
        this.setState({ arniTranslation: translation.translation });
        console.log(translation.translation);
    }
    // handle fall þegar smellt er á annaðhvort result-itemið í translationcontainer, þá vil ég senda allar upplýsingar inn í gagnagrunn
    handleSelection(e) {

        console.log("in handle selection" + e.target.id);
        const form = { 
            source: this.state.source,
            google: this.state.googleTranslation,
            arni: this.state.arniTranslation,
            chosen: e.target.id,
            date: new Date()
        };

        fetch('http://localhost:3001/api/rate', {  
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
        })
    }

    render () {
        return ( 
        <div className='main-container'>
            <SourceInput updateGoogleTranslation={this.updateGoogleTranslation} handleChange={this.handleChange}/>
            <TranslationContainer googleTranslation={this.state.googleTranslation} handleSelection={this.handleSelection} />
        </div>
        )
    }
}