import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  //creando el state de countries
  const [countries, setCountries] = useState([]);

  //ejecutar el llamado a la API
  useEffect(() => {
    const getCountries = async () => {
      const url = 'https://restcountries.eu/rest/v2/all';
      const countries = await axios.get(url);
      console.log(countries.data);
    };
    getCountries();
  }, [])

  return (
    <Fragment>
      <Header
        titulo='Challenge Whale & Jaguar'
      />
      <div className="container-white">
        <Formulario />
      </div>
    </Fragment>
  );
}

export default App;
