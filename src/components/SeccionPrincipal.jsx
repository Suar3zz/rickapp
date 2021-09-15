import React from 'react'
import { Card } from 'react-bootstrap'
import Tarjeta from './Tarjeta'

const SeccionPrincipal = () => {
    return (
        <main>
           <div>
               <h1>The Rick and Morty API</h1>
           </div>
           <div className="Tarjetero">
            <Tarjeta/>
            <Tarjeta/>
            <Tarjeta/>
            <Tarjeta/>
            <Tarjeta/>
            <Tarjeta/>
           </div>
        </main>
    )
}

export default SeccionPrincipal
