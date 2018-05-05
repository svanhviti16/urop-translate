import React from 'react';
import ReactDOM from 'react-dom';

export default class About extends React.Component {
    render () {
        return (
            <div className="about-page">
                <p>Á þessum vef getur þú slegið inn texta á ensku, allt að 200 stafabil, og fengið íslenska þýðingu úr tveimur þýðingavélum. Önnur þýðingavélin er Google Translate en hin er nýr íslensku hugbúnaður sem er í þróun hjá Stofnun Árna Magnússonar í íslenskum fræðum. Þýðingarnar birtast af handahófi hægra eða vinstra megin og velja má þýðinguna sem er betri með því að smella á hana. Með því að velja þýðingu hjálpar þú til við gæðamat á vélþýðingunum sem gagnast við að gera íslenskuna gildandi í stafrænum heimi.</p>
                <p>Vefurinn er unninn sem rannsóknarverkefni nemanda í tölvunarfræði við Háskólann í Reykjavík. Höfundur: <a href="mailto:svanhviti16@hr.is">Svanhvít Lilja Ingólfsdóttir</a>.</p>
                <img id="google-logo" src={ require('../resources/google-logo.png') } /> 
            </div>
        );
    }
}