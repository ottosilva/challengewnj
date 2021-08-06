import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPaises from './components/ListadoPaises';


function App() {

  //creando el state de region
  const [region, guardarRegion] = useState('');

  //creando el state de paises
  const [paises, guardarPaises] = useState([]);

  //ejecutar el llamado a la API
  useEffect(() => {
    const consultaAPI = async () => {
      const url = `https://restcountries.eu/rest/v2/region/${region}`;
      // const countries = await axios.get(url);
      const respuesta = await fetch(url);
      const paises = await respuesta.json();
      guardarPaises(paises);
      console.log(paises);
    };
    consultaAPI();
  }, [region])

  return (
    <Fragment>
      <Header
        titulo='Challenge Whale & Jaguar'
      />
      <div className="container-white">
        <Formulario 
          guardarRegion={guardarRegion}
        />

        <ListadoPaises
          paises={paises}
        />
      </div>
    </Fragment>
  );
}

export default App;
