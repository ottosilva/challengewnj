import React from 'react';
import Pais from './Pais';
import PropTypes from 'prop-types';

const ListadoPaises = ({paises}) => {

    if (!paises) {
        return null;
    };
    
    return(
    <div className="row">
        {paises.map(pais => (
            <Pais 
                key={pais.alpha3Code}
                pais={pais}
            />
        ))} 
    </div>)
}

ListadoPaises.propTypes = {
    paises: PropTypes.array.isRequired
}
 
export default ListadoPaises;