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
                <div className="texContainer">
                    <h2>Conoceme:</h2>
                    <p>
                        Soy un desarrollador web con un año de experiencia y una pasión inagotable por resolver problemas a través de tecnología innovadora. 
                        He creado aplicaciones intuitivas y dinámicas que mejoran la experiencia del usuario, y domino herramientas modernas que optimizan 
                        l rendimiento y la estética. Mi meta es llevar cada proyecto al siguiente nivel con un enfoque ágil, creativo y orientado a resultados. 
                        ¡Listo para impulsar el éxito de tu equipo con código de calidad y soluciones frescas!
                    </p>
                    <div className='redesAbout'>
                        <div className="red"></div>
                        <div className="red"></div>
                        <div className="red"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
