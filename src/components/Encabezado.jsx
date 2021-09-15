import React from 'react'

const Encabezado = () => {
    return (
        <header>
            <a href="">
                <img src="logo.png" alt="icono" height="50px" weight="50px"></img>
            </a>
            <nav>
                <ul>
                    <li><a href="https://rickandmortyapi.com/documentation">Docs</a></li>
                    <li><a href="https://rickandmortyapi.com/about">About</a></li>
                    <li><a href="https://rickandmortyapi.com/help-us">HELP US</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Encabezado
