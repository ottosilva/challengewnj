import React from 'react';

const Pais = ({name, population, flag }) => {

    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={flag} alt={name}/>
                </div>
                <div    className="card-content">
                    <h3>{name}</h3>
                    <p>population: {population}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Pais;