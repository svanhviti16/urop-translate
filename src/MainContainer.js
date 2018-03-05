import React from 'react';
import ReactDOM from 'react-dom';
import SourceInput from './SourceInput.js'
import TranslationContainer from './TranslationContainer.js'

export default class MainContainer extends React.Component {
    render () {
        return ( 
        <div className='main-container'>
            <SourceInput />
            <TranslationContainer />
        </div>
        )
    }
}