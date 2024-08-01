import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './Banner.css';

export default function Banner() {
  const handleDownload = (event) => {
    event.preventDefault();
    Swal.fire({
      title: '¿Estás seguro de que quieres descargar el documento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, descargar',
      cancelButtonText: 'No, cancelar',
      customClass: {
        popup: 'custom-popup',
        title: 'custom-title',
        confirmButton: 'custom-confirm-button',
        cancelButton: 'custom-cancel-button'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const link = document.createElement('a');
        link.href = '/docs/Lucas Nahuel Prado - CV.pdf';
        link.download = "Lucas Nahuel Prado - CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  };
  return (
    <div className='BannerHome'>
      <div className="BannerOverlay">
        <div className="Bannertitle">
          <h3>Hola, soy</h3>
          <h2>Lucas Prado</h2>
          <p>DESARROLLADOR FULL STACK</p>
          <div className="BannerBtns">
          <a href="https://github.com/PradoLucas14" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-custom me-2">
              <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff" }} className='icon' />
              <p>GitHub</p>
            </button>
          </a>
          <button className="btn btn-custom" onClick={handleDownload}>
            <FontAwesomeIcon icon={faDownload} style={{ color: "#ffffff" }} className='icon' />
            <p>Descargar CV</p>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
