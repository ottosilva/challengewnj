import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario= ({guardarRegion})=> {

    //creamos las opciones 
    const OPCIONES = [
        {value: 'africa', label:'Africa'},
        {value: 'americas', label:'America'},
        {value: 'asia', label:'Asia'},
        {value: 'europe', label:'Europa'},
        {value: 'oceania', label:'Oceania'},
    ]

    //utilizamos el custom Hook
    const [region, SelectRegion] = useSelect('americas', OPCIONES);

    //submit al form, pasar region a app.js
    const definirRegion = e =>{
        e.preventDefault();
        guardarRegion(region)
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={definirRegion}
                >
                    <h2 className={styles.heading}>Busca paises por región</h2>

                    <SelectRegion />

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="buscar"
                        />
                    </div>
                </form>
            </div>
            
        </div>
    )
}

Formulario.propTypes = {
    guardarRegion: PropTypes.func.isRequired
}

export default Formulario
