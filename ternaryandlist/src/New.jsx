import React from 'react'

function New() {
    const planets = [
        {name : "Mars" , isGasPlanet : false},
        {name : "Earth" , isGasPlanet : false},
        {name : "Jupiter" , isGasPlanet : true},
        {name : "Venus" , isGasPlanet : false},
        {name : "Neptune" , isGasPlanet : true},
        {name : "Uranus" , isGasPlanet : true},

    ]
return (
    <div>
        {planets.map((value, key)=>
            ( value.isGasPlanet && <h1>{value.name}</h1>)
        )}
    </div>
)
}

export default New