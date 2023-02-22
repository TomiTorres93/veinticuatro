import React from 'react'

export default function Section({ img, siguiente, atras, tittle, text }) {
    return (
        <>
             <div className='textscont'>
                <p className='modalTittle'>  {tittle} </p>
                <p className='parrafo'> {text} </p>
            </div>


            <div className='gallery'>
                <div class="line" style={{ "width": "0%" }} key={Math.random()}></div>
                <img className='imgGallery' src={img} alt="" />


   
                <button onClick={siguiente}  className='siguienteButton' style={{ "height": window.screen.height }}>
                    Siguiente historia
                </button>

                <button onClick={atras} className='atrasButton' style={{ "height": window.screen.height }}>
                    Atrás
                </button>

            </div>
        </>
    )
}
