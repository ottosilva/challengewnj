import React from 'react';
import Pais from './Pais';

const ListadoPaises = ({paises}) => {

    if (!paises) {
        return null;
    };
    
    return(
    <div className="row">
        {paises.map(pais => (
            <Pais 
                key={pais.alpha3Code}
                name={pais.name}
                population={pais.population}
                flag={pais.flag}
            />
        ))} 
    </div>)
}
 
export default ListadoPaises;