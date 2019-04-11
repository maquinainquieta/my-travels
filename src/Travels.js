// src/Travel.js
import React from "react";

import Travel from "./Travel"

const array = [{
    destination:'City: Batumi',
    country:'Country: Republic of Georgia',
    photo:'https://static1.squarespace.com/static/57b9b98a29687f1ef5c622df/t/57bb6549197aeabfa1266eb0/1528034527036/radisson+blu+batumi?format=2500w',
    distance:'Distance from Madrid: 3,762 km'
}, {
    destination:'City: Cairo',
          country:'Country: Egypt',
          photo:'https://suitcasemag.com/wp-content/uploads/2019/02/cairo-feature-image-1920x1080.jpg',
          distance:'Distance from Madrid: 3,350 km'
    }
, {
    destination:'City: Meteora',
          country:'Country: Greece',
          photo:'https://mikripatrida.com/~/frontend/mikri-patrida_meteora_splash_9d7bdf6c07f5667577675146e0347796.jpg',
          distance:'Distance from Madrid: 2,150 km'
}
, {
    destination:'City: Railay',
          country:'Country: Thailand',
          photo:'https://lonelyplanetimages.imgix.net/mastheads/128074626_high.jpg?sharp=10&vib=20&w=1200',
          distance:'Distance from Madrid: 10,478 km'
}
, {
    destination:'City: Singapore',
          country:'Country: Singapore',
          photo:'https://ovecedu.com/wp-content/uploads/2016/09/singapore-1.jpg',
          distance:'Distance from Madrid: 11,388 km'
}
];

const Travels = () => (
    <div>
    <h2>Travels.js</h2>
    {array.map(item => (
        <Travel
        destination = {item.destination}
        country = {item.country}
        photo = {item.photo}
        distance = {item.distance}
        />
    ))}
 </div>
)

export default Travels;