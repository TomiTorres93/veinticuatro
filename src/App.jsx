import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Section from './Section';

function App() {

  const date = new Date();

  const [openLinea, setOpenLinea] = useState(false)

  const close = () => {
    setOpenLinea(false)
  }

  const open = () => {
    setOpenLinea(true)
  }


  let imgZero = "https://www.cultura.gob.ar/media/uploads/cierre_de_campana_de_raul_alfonsin_en_la_av._9_de_julio_-_llamado_a_elecciones_-_1983.jpg"
  let img1 = "http://www.jus.mendoza.gov.ar/documents/43978/0/madreplazademayo.jpg/a28584fc-2e25-4716-acb2-46d9a845613e?t=1427244453853"

  let img2 = "https://quedigital.com.ar/web/wp-content/uploads/2022/03/MARCHA-24-DE-MARZO-443.jpg"
  let img3 = "https://images.pagina12.com.ar/styles/focal_content_1200x1050/public/media/articles/56767/g0520205-salguero.jpg?itok=7zic_LZO"
  let img4 = "https://static.eldiario.es/clip/a6966d14-ee52-4070-b755-97a984f7ec8c_16-9-discover-aspect-ratio_default_0.jpg"
  let img5 = "https://www.rosarionoticias.gob.ar/uploads/fotos/p1aeifmeeg1jif3prpvho2efukc.jpg"

  const [timer, setTimer] = useState(Date.now())
  const [section, setSection] = useState(0)
  const [timeRev, setTimeRev] = useState(Date.now() + 10000)
  const [openModal, setOpenModal] = useState(false)
  const [stay, setStay] = useState(false)


  // const changePic = () => {
  //   if(img == img1) {
  //     setImg(img2)
  //     setTimer(Date.now())
  //     setTimeRev(Date.now() + 10000)
  //   } else {
  //     setImg(img1)
  //     setTimer(Date.now())
  //     setTimeRev(Date.now() + 10000)
  //   }


  const openMod = () => {


    setOpenModal(true)


  }

  // useEffect(() => {

  // }, [section, stay])


  const siguiente = () => {
    if (section === 10) {
      setSection(0)
      setOpenModal(false)
      setTimer(Date.now())
      setTimeRev(Date.now() + 10000)
    } else {
      setSection(section + 1)
      setOpenModal(false)
      setTimer(Date.now())
      setTimeRev(Date.now() + 10000)
    }

  }

  const anterior = () => {
    setSection(section - 1)
    setOpenModal(false)
    setTimer(Date.now())
    setTimeRev(Date.now() + 10000)
  }

  const closeModal = () => {
    setSection(section)
    setOpenModal(false)
    setTimer(Date.now())
    setTimeRev(Date.now() + 10000)
    if (stay === true) {
      setStay(false)
    } else {
      setStay(true)
    }
  }


  return (
    <div className="WebCont" >

      <div className='lineaItemCont zindex10002'  id='inicio'>
        <div className='zindex1000'>
          <img className='logoEduc' src="https://educacionymemoria.github.io/Prevencion-del-Maltrato-Infanto-Juvenil/images/logo-edym-fullblanco.png" alt="" />

          <h1 className='tittle'>Un recorrido hacia la democracia</h1>
          <p className='parrafoZero'>Las y los invitamos a compartir junto a Educación y Memoria el camino que condujo a nuestro país a las elecciones de 1983, siete años después del comienzo de la última dictadura cívico-militar iniciada el 24 de marzo de 1976.</p>

          <a href='#cero' className='optionTittle'> INICIAR </a>
          <p className='lineainicio'></p>

        </div>


      </div>


      <div id='cero' className='lineaItemCont'>
        <div className='textsCont'>
        <a href='#inicio' className='volver1primero'>VOLVER AL INICIO</a>
        <button onClick={open} className='openLineButtonPrimera'>ABRIR LÍNEA DE TIEMPO</button>
          <img className='lineImg' src="https://memoriaabierta.org.ar/wp/wp-content/uploads/2020/07/Ronda-en-Plaza-de-Mayo-cl.jpg" alt="" />
          <div className='columnaLineaTexts'>
            <p className='lineaItemTittle'>Nace la organización de derechos humanos Familiares de Detenidos y Desaparecidos por Razones Políticas   </p>
            <p className='lineaItemText'>Fue conformada por familias que se conocieron en Buenos Aires durante sus gestiones ante los organismos oficiales para averiguar por sus desaparecidos/as. Su lugar de reunión fue la Liga Argentina por los Derechos Humanos. </p>

          </div>
        
        </div>

        <p className='lineaFecha'>1976</p>
        <span className='lineaItemSubTittle'>01/09/1976</span>
        <p className='linea1primero'></p>
        {/* <p className='linea2'></p> */}
        <p className='linea3'></p>
        <p className='linea4'></p>
       
        <p className='linea6'></p>
        <a href='#1976' className='lineaFecha2'>IR  AL 30 DE ABRIL DE 1977</a>
      </div>


      <div id='1976' className='lineaItemCont'>
      <a href='#cero' className='volver2'>VOLVER A LA FECHA ANTERIOR</a>
      <button onClick={open} className='openLineButton2'>ABRIR LÍNEA DE TIEMPO</button>
        <div className='textsCont'>
          <img className='lineImg' src="https://memoriaabierta.org.ar/wp/wp-content/uploads/2020/07/Ronda-en-Plaza-de-Mayo-cl.jpg" alt="" />
          <div className='columnaLineaTexts'>
            <p className='lineaItemTittle'>Nace la organización de derechos humanos Familiares de Detenidos y Desaparecidos por Razones Políticas   </p>
            <p className='lineaItemText'>Fue conformada por familias que se conocieron en Buenos Aires durante sus gestiones ante los organismos oficiales para averiguar por sus desaparecidos/as. Su lugar de reunión fue la Liga Argentina por los Derechos Humanos. </p>

          </div>
       
        </div>

        <p className='lineaFecha'>1976</p>
        <span className='lineaItemSubTittle'>01/09/1976</span>
        <p className='linea1b'></p>
        <p className='linea2b'></p>
        <p className='linea3b'></p>
        <p className='linea4b'></p>
   
        <p className='linea6b'></p>
        <a href='#1977' className='lineaFecha3'>IR  AL 30 DE ABRIL DE 1977</a>
      </div>


      <div id='1977' className='lineaItemCont'>
        <div className='textsCont'>
        <a href='#1976' className='volver1'>VOLVER A LA FECHA ANTERIOR</a>
        <button onClick={open} className='openLineButton'>ABRIR LÍNEA DE TIEMPO</button>
          <img className='lineImg' src="https://memoriaabierta.org.ar/wp/wp-content/uploads/2020/07/Ronda-en-Plaza-de-Mayo-cl.jpg" alt="" />
          <div className='columnaLineaTexts'>
            <p className='lineaItemTittle'>Nace la organización de derechos humanos Familiares de Detenidos y Desaparecidos por Razones Políticas   </p>
            <p className='lineaItemText'>Fue conformada por familias que se conocieron en Buenos Aires durante sus gestiones ante los organismos oficiales para averiguar por sus desaparecidos/as. Su lugar de reunión fue la Liga Argentina por los Derechos Humanos. </p>

          </div>
         
        </div>

        <p className='lineaFecha'>1976</p>
        <span className='lineaItemSubTittle'>01/09/1976</span>
        <p className='linea1'></p>
        <p className='linea2'></p>
        <p className='linea3'></p>
        <p className='linea4'></p>
 
        <p className='linea6'></p>
        <p className='lineaFecha2'>IR  AL 30 DE ABRIL DE 1977</p>
      </div>


    {openLinea === true ?     
    <div className='todalalinea'>
      <button onClick={close} className='openLineButtonInv'>CERRAR LÍNEA DE TIEMPO</button>
      <img className='grain' src="https://firebasestorage.googleapis.com/v0/b/coqueteria-b7812.appspot.com/o/default%2Fgrain.jpg?alt=media&token=08bce4fa-4ab5-4f87-ada4-611e4230acb3" alt="" />
      <p className='todalalineaItemTittle'> Un recorrido hacia la democracia </p>
      <a href='#1977' onClick={close} className='todalalineaYear'>01/09/1976 — Nace la organización de derechos humanos Familiares de Detenidos y Desaparecidos por Razones Políticas</a>
      <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/long-arrow-down.png" alt="long-arrow-down"/>
      <a href='#1977' onClick={close} className='todalalineaYear'>30/04/1977 — Surgen las agrupaciones  de Madres y Abuelas de Plaza de Mayos</a>
      <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/long-arrow-down.png" alt="long-arrow-down"/>
      <a href='#1977' onClick={close} className='todalalineaYear'>01/06/1978 — El Mundial expone la dictadura ante el mundo</a>
      <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/long-arrow-down.png" alt="long-arrow-down"/>
      <a href='#1977' onClick={close} className='todalalineaYear'>1976: Nace la organización de derechos humanos Familiares de Detenidos y Desaparecidos por Razones Políticas</a>


    </div> : <></>
    
    
    }



    </div>





  )
}

export default App;
