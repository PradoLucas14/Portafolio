import React from 'react'
import "./Banner.css"

export default function banner() {
  return (
    <div className='BannerHome'>
        <div className="BannerOverlay">
        <div className="container">
            <div className="row">
            <div className="col-12 col-md-6 colum-custom">
                <p>Columna 1: Contenido aquí</p>
            </div>
            <div className="col-12 col-md-6 d-none d-md-block colum-custom">
                <p>Columna 2: Contenido aquí</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
