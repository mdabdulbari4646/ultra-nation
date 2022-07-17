/* eslint-disable no-const-assign */
import React from 'react';

const SelectedCountry = (props) => {
    const seslectedCountry = props.selectedCountry;
    let totalPopulation = 0;
    for (let i = 0; i < seslectedCountry.length; i++) {
        const country = seslectedCountry[i];
        totalPopulation = totalPopulation + country.population;
        
    }
    return (
        <div>
            <h2>This is selectedCountry: {seslectedCountry.length}</h2>
            <p>Total population: {totalPopulation}</p>
        </div>
    );
};

export default SelectedCountry;