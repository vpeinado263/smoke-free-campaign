import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';

const about = () => {
  return (
    <div>
        <Header/>
        <main>
            <h2>La Adiccion ala nicotina</h2>
            <p>
            La nicotina es una droga que se encuentra en los cigarrillos y que genera una fuerte dependencia.
            Fumar cigarrillos puede llevar a enfermedades como el cáncer, problemas respiratorios, y enfermedades
            cardíacas. El consumo prolongado de tabaco es extremadamente dañino para la salud.
            </p>
        </main>
        <Footer/>
    </div>
  )
}

export default about;