import React from 'react'

const Tarjeta = () => {
    return (
        <div className="Tarjeta">
            <div className="ImagenTarjeta">
                <img src="Armothy.jpeg" alt="imagen" />
            </div>
            <div className="DescripcionTarjeta">
                <h4><a href="">Armothy</a></h4>
                <p className="Estado">
                    Estado - Tipo de Criatura
                </p>
                <div className="LocacionTarjeta">
                    <h5>Ultima locacion conocida</h5>
                    <p>Localizacion</p>
                </div>
            </div>
        </div>
    )
}

export default Tarjeta
