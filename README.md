Þessi vefur er hluti af rannsóknarvinnu í grunnnámi í tölvunarfræði við Háskólann í Reykjavík vorið 2018. Verkið vann Svanhvít Lilja Ingólfsdóttir, þýðandi og tölvunarfræðinemi, og leiðbeinandi var Jón Guðnason, dósent og forstöðumaður Gervigreindarseturs HR. 

Á vefnum er hægt að þýða ensku yfir á íslensku með hjálp tveggja þýðingavéla. Önnur vélin er Google Translate og hin er væntanleg íslensk þýðingavél sem er í þróun hjá Árnastofnun (ekki tilbúin þegar þetta er skrifað). Sú vél mun notast samhliða málheild til þjálfunar á tauganeti, og er á byrjunarstigi. 

Virkni vefsins er þannig að notandi skrifar eða límir inn texta til þýðingar. Tvær þýðingar birtast þá hlið við hlið, og handahófskennt er hvorum megin hvor þýðing birtist. Notandinn getur valið betri þýðinguna með því að smella á hana. Gögnin um valið eru vistuð í gagnagrunn og niðurstöðurnar úr þessum samanburði verður fyrst um sinn hægt að nota til að gæðameta gögnin sem íslenska þýðingavélin byggir á en síðar meir til að meta gæði þýðinganna sjálfra.

Vefurinn er skrifaður í React JS og bakendinn í Node.js með staðbundnum MongoDB-gagnagrunni. Til þess að keyra verkið þarf að gera nokkra hluti. 

Hér er notast við keyfile frá Google Cloud Translation API sem gefur leyfi til þess að kallað sé á forritaskilin sem skila þýðingum frá Google Translate, og þarf sá sem ætlar að keyra verkið að afla sér slíks lykils. Þegar hann er fenginn þarf að gera eftirfarandi: 

- Sækja [Node.js](https://nodejs.org/en/). 

- Sækja [MongoDB](https://www.mongodb.com/) og keyra svo `mongod`

- Klóna þetta verk og keyra `npm install`.

- Keyra upp vefþjóninn með skipuninni `node server/server.js`

- Keyra `npm start` og þá opnast vefurinn á `http://localhost:3000/`


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

