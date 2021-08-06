import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';

const Formulario= ()=> {

    //creamos las opciones 
    const OPCIONES = [
        {value: 'africa', label:'Africa'},
        {value: 'americas', label:'America'},
        {value: 'asia', label:'Asia'},
        {value: 'europe', label:'Europa'},
        {value: 'oceania', label:'Oceania'},
    ]

    //utilizamos el custom Hook
    const [continente, SelectContinente] = useSelect('americas', OPCIONES);

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form>
                    <h2 className={styles.heading}>Busca paises por región</h2>

                    <SelectContinente />

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

export default Formulario
