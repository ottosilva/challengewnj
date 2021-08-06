import React from 'react';
import PropTypes from 'prop-types';


const Pais = ({pais}) => {

    const { name, population, flag, capital } = pais;

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={flag} alt={name} />
                </div>
                <div className="card-content">
                    <h3>{name}</h3>
                    <h5>Capital: {capital}</h5>
                    <p>Habitantes: {population}</p>
                </div>
            </div>
        </div>
    );
}

Pais.propTypes = {
    pais: PropTypes.object.isRequired
}

export default Pais;