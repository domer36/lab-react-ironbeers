import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div>
                <img src="/images/beers.png" />
                <h1><Link to='/beers'>All Beers</Link></h1>
                <p>lorem jekjriweofjseiofjisdkhfjsdhfjsdfhjdshfjsdfhipaeufjoisf uwefuowi fhowr fuiwe hfuw hfuiwehf iuwhfuiwhfuiwehfuisdhafjkdshfjksdah fjds fjksd jfads fhjwsdk</p>
            </div>
            <div>
                <img src="/images/new-beer.png" />
                <h1><Link to='/random-beer'>Random Beer</Link></h1>
                <p>lorem jekjriweofjseiofjisdkhfjsdhfjsdfhjdshfjsdfhipaeufjoisf uwefuowi fhowr fuiwe hfuw hfuiwehf iuwhfuiwhfuiwehfuisdhafjkdshfjksdah fjds fjksd jfads fhjwsdk</p>
            </div>
            <div>
                <img src="/images/random-beer.png" />
                <h1><Link to='/new-beer'>New Beer</Link></h1>
                <p>lorem jekjriweofjseiofjisdkhfjsdhfjsdfhjdshfjsdfhipaeufjoisf uwefuowi fhowr fuiwe hfuw hfuiwehf iuwhfuiwhfuiwehfuisdhafjkdshfjksdah fjds fjksd jfads fhjwsdk</p>
            </div>
        </div>
    )
}

export default Home


