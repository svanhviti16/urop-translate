import React from 'react';
import ReactDOM from 'react-dom';
import SourceInput from '../SourceInput/SourceInput.js'
import TranslationContainer from '../TranslationContainer/TranslationContainer.js'

export default class MainContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            googleTranslation: ''
        };
        this.updateGoogleTranslation = this.updateGoogleTranslation.bind(this);
    }
    updateGoogleTranslation(translation) {
        this.setState({ googleTranslation: translation.translation });
        console.log(translation.translation);
    }

    render () {
        return ( 
        <div className='main-container'>
            <SourceInput updateGoogleTranslation={this.updateGoogleTranslation}/>
            <TranslationContainer googleTranslation={this.state.googleTranslation} />
        </div>
        )
    }
}