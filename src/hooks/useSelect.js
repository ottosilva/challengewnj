import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {

    //state del customHook
    const [state, setState] = useState(stateInicial)


    const SelectRegion = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => setState(e.target.value)}
        >
            {opciones.map(opcion => (
                <option
                    key={opcion.value}
                    value={opcion.value}>
                    {opcion.label}
                </option>
            ))}
        </select>
    );
    return [state, SelectRegion]
}

export default useSelect;
