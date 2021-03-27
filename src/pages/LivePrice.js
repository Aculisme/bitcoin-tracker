import {useState} from 'react'

import {Prices} from '../components/Prices'

export function LivePricePage() {
    const [gbp, setGbp] = useState(null)

    function refreshPrices() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((response) => response.json())
        .then((json) => console.log(json));  // do something idk
    }

    return (
        <div>
            <h1>live website price </h1>
            <Prices usd={123} eur={1234} gbp={gbp} />
            <button onClick={refreshPrices}>Refresh prices</button>
        </div>
    )
}