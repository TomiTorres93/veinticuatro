import React from 'react'

export default function Section({img, siguiente, atras, tittle, text}) {
    return (
        <div className='gallery'>
            <div class="line"  style={{ "width": "0%" }} key={Math.random()}></div>
            <img className='imgGallery' src={img} alt="" />
            <p className='modalTittle'>  {tittle} </p>
            <p> {text} </p>


            <button className='siguienteButton' style={{ "height": window.screen.height}}>
                Siguiente historia
            </button>

            <button className='atrasButton' style={{ "height": window.screen.height}}>
                Atrás
            </button>

        </div>
    )
}
