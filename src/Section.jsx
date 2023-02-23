import React, { useState, useEffect, useRef } from 'react';

export default function Section({ img, siguiente, atras, tittle, text1, text2, text3, section, stay, openMod }) {

    const timerRef = useRef(null);
    const timerRef2 = useRef(null);

    const [textsNone, setTextsNone] = useState(true)

    const openModF = () => {
        openMod()
    }
    useEffect(() => {
      clearTimeout(timerRef.current);
  
      timerRef.current = setTimeout(() => {
        openModF()
        setTextsNone(true)
      }, 11000);
  
      return () => clearTimeout(timerRef.current);
    }, [section, stay]);

    useEffect(() => {
        clearTimeout(timerRef2.current);
    
        timerRef2.current = setTimeout(() => {
            setTextsNone(false)
        }, 100);
    
        return () => clearTimeout(timerRef2.current);
    }, [section, stay]);



    return (
        <>

        
        <div className={textsNone === true ? "textscont" :   "textscont opacity100"  }>
        <p className='modalTittle'>  {tittle} </p>
        <p className='parrafo'> {text1} </p>
        <p className='parrafo'> {text2} </p>
        <p className='parrafo'> {text3} </p>
        <img className='logoEducPlacas' src="https://educacionymemoria.github.io/Prevencion-del-Maltrato-Infanto-Juvenil/images/logo-edym-fullblanco.png" alt="" />
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
