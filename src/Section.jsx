import React, { useState, useEffect, useRef } from 'react';

export default function Section({ img, siguiente, atras, tittle, text1, text2, text3, section, stay, openMod, pic, link1, link2, link3 }) {

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


            <div className={textsNone === true ? "textAndPicCont" : "textAndPicCont opacity100"}>

                <div className={pic != null ? 'textscont w70' : "textscont"}>
                <p className='modalTittle'>  {tittle} </p>
                <a className={link1 != null ? 'parrafo w70 texthover' : "parrafo w70"} href={link1 != null ? link1 : undefined} target="_blank"> {text1} </a>

                <a className={link2 != null ? 'parrafo w70 texthover' : "parrafo w70"} href={link2 != null ? link2 : undefined} target="_blank"> {text2} </a>

                <a className={link3 != null ? 'parrafo w70 texthover' : "parrafo w70"} href={link3 != null ? link3 : undefined} target="_blank"> {text3} </a>
            
                </div>

                {pic != null ? <><img className='picStyle' src={pic} alt="" /> </> : <></>
                }


            </div>


            { pic !== null  ? <> </> : <img className='logoEducPlacas' src="https://educacionymemoria.github.io/Prevencion-del-Maltrato-Infanto-Juvenil/images/logo-edym-fullblanco.png" alt="" />}

            <div className='gallery'>
                <div class="line" style={{ "width": "0%" }} key={Math.random()}></div>
                <img className='imgGallery' src={img} alt="" />



                <button onClick={siguiente} className='siguienteButton' style={{ "height": window.screen.height }}>
                    Siguiente historia
                </button>

                <button onClick={atras} className='atrasButton' style={{ "height": window.screen.height }}>
                    Atrás
                </button>

            </div>
        </>
    )
}
