import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Section from './Section';

function App() {

  const date = new Date();

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
    setSection(section + 1)
    setOpenModal(false)
    setTimer(Date.now())
    setTimeRev(Date.now() + 10000)
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
    if(stay === true) {
      setStay(false)
    } else {
      setStay(true)
    }
  }



  return (
    <div className="WebCont" style={{ "height": window.screen.height, "width": "100%" }}>

      {openModal === true ?

        <div className='modalCont' style={{ "height": window.screen.height, "width": window.screen.width }}>
          <div className='tittleCont'>
            <button onClick={closeModal} className='optionTittle'>Quiero seguir leyendo</button>
            <button onClick={siguiente} className='optionTittle'>Pasar a la siguiente historia</button>
            {section != 1 ? <button onClick={anterior} className='optionTittle'>Volver a la historia anterior</button> : <></>}
       
          </div>

        </div>

        :

        <></>


      }

      {section === 0 ?
        <div className='sectionZeroCont' style={{ "height": window.screen.height, "width": "100%" }}>
          <div className='zindex1000'>
          <img className='logoEduc' src="https://educacionymemoria.github.io/Prevencion-del-Maltrato-Infanto-Juvenil/images/logo-edym-fullblanco.png" alt="" />

          <h1 className='tittle'>Un recorrido hacia la democracia</h1>
          <p className='parrafoZero'>Las y los invitamos a caminar junto a Educación y Memoria el camino que condujo a nuestro país a las elecciones de 1983, siete años después del comienzo de la última dictadura cívico-militar iniciada el 24 de marzo de 1976.</p>
          
          <button  onClick={siguiente} className='optionTittle'> INICIAR </button>
          
          </div>
    
          <div className='gallery'>
                <img className='imgGallery' src={imgZero} alt="" />

            </div>
            
        </div>
      :section === 1 ? 
        <Section openMod={openMod} section={section} stay={stay} siguiente={siguiente} tras={anterior} img={img1} tittle="1979" 
        
        text1="Por las denuncias sobre violaciones a los derechos humanos la Comisión Interamericana de DDHH llega a la Argentina -click para más info sobre la CIDH-. La dictadura responde con una campaña de prensa bajo la consigna “Los argentinos somos derechos y humanos”."
        
        link1="https://carasycaretas.org.ar/2019/08/27/la-cidh-en-la-argentina/"

        
        text2="Debido a la crisis económica las y los trabajadores organizan huelgas y otras medidas de fuerza y empieza a recomponerse el movimiento obrero. En septiembre se creó la Central Única de Trabajadores Argentinos. Haciendo click acá encontrarás más información sobre la huelga en Alpargatas." 

        link2="https://drive.google.com/file/d/1waTE4sgms8rYSBQtCpoVo-22fSAggBAR/view"

        pic="https://raw.githubusercontent.com/TomiTorres93/veinticuatro/main/src/images/alpargatas.png"
        
        
        text3="Las Abuelas de Plaza de Mayo restituyeron la identidad de los primeros nietos, Anatole y Victoria, hijos de Victoria Lucía Grisonas y Mario Roger Julien, desaparecidos en 1976."  
        
        link3={null}
        />

        

      : section === 2 ?
        <Section openMod={openMod} section={section} stay={stay}  siguiente={siguiente} atras={anterior} img={img2} tittle="1977"  text1="Por las denuncias sobre violaciones a los derechos humanos la Comisión Interamericana de DDHH llega a la Argentina. La dictadura responde con una campaña de prensa bajo la consigna “Los argentinos somos derechos y humanos”." text2="Debido a la crisis económica las y los trabajadores organizan huelgas y otras medidas de fuerza y empieza a recomponerse el movimiento obrero. En septiembre se creó la Central Única de Trabajadores Argentinos." text3="Las Abuelas de Plaza de Mayo restituyeron la identidad de los primeros nietos, Anatole y Victoria, hijos de Victoria Lucía Grisonas y Mario Roger Julien, desaparecidos en 1976."  />
      :  section === 3 ?
      <Section openMod={openMod} section={section} stay={stay}  siguiente={siguiente} atras={anterior} img={img3} tittle="1977"  text1="Por las denuncias sobre violaciones a los derechos humanos la Comisión Interamericana de DDHH llega a la Argentina. La dictadura responde con una campaña de prensa bajo la consigna “Los argentinos somos derechos y humanos”." text2="Debido a la crisis económica las y los trabajadores organizan huelgas y otras medidas de fuerza y empieza a recomponerse el movimiento obrero. En septiembre se creó la Central Única de Trabajadores Argentinos." text3="Las Abuelas de Plaza de Mayo restituyeron la identidad de los primeros nietos, Anatole y Victoria, hijos de Victoria Lucía Grisonas y Mario Roger Julien, desaparecidos en 1976." />
    : section === 4 ?
    <Section openMod={openMod} section={section} stay={stay}  siguiente={siguiente} atras={anterior} img={img4} tittle="1977" text1="Por las denuncias sobre violaciones a los derechos humanos la Comisión Interamericana de DDHH llega a la Argentina. La dictadura responde con una campaña de prensa bajo la consigna “Los argentinos somos derechos y humanos”." text2="Debido a la crisis económica las y los trabajadores organizan huelgas y otras medidas de fuerza y empieza a recomponerse el movimiento obrero. En septiembre se creó la Central Única de Trabajadores Argentinos." text3="Las Abuelas de Plaza de Mayo restituyeron la identidad de los primeros nietos, Anatole y Victoria, hijos de Victoria Lucía Grisonas y Mario Roger Julien, desaparecidos en 1976."  />
  : section === 2 ?
  <Section openMod={openMod} section={section} stay={stay}  siguiente={siguiente} atras={anterior} img={img5} tittle="1977"  text1="Por las denuncias sobre violaciones a los derechos humanos la Comisión Interamericana de DDHH llega a la Argentina. La dictadura responde con una campaña de prensa bajo la consigna “Los argentinos somos derechos y humanos”." text2="Debido a la crisis económica las y los trabajadores organizan huelgas y otras medidas de fuerza y empieza a recomponerse el movimiento obrero. En septiembre se creó la Central Única de Trabajadores Argentinos." text3="Las Abuelas de Plaza de Mayo restituyeron la identidad de los primeros nietos, Anatole y Victoria, hijos de Victoria Lucía Grisonas y Mario Roger Julien, desaparecidos en 1976." />
: <></>


      }



    </div>


  );
}

export default App;
