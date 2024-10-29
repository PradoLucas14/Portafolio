import React from 'react';
import vectorImage from '../../assets/Home/vector1.webp'; // Importa el vector desde la ruta
import "./About.css"

function About() {
  return (
    <div className="about-container">
      <div className="column column-vector">
        <div className="imgContainer">
            <img src={vectorImage} alt="Vector" className="vector-image" />
        </div>
      </div>
      <div className="column column-text">
        <p>
          Aquí va el texto que describe la página o el propósito de tu sitio.
          Puedes agregar más contenido o ajustar el estilo según tus necesidades.
        </p>
      </div>
    </div>
  );
}

export default About;
