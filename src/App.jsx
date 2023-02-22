import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Section from './Section';

function App() {

  const date = new Date();


  let img1 = "http://www.jus.mendoza.gov.ar/documents/43978/0/madreplazademayo.jpg/a28584fc-2e25-4716-acb2-46d9a845613e?t=1427244453853"

  let img2 = "https://quedigital.com.ar/web/wp-content/uploads/2022/03/MARCHA-24-DE-MARZO-443.jpg"
  let img3 = "https://images.pagina12.com.ar/styles/focal_content_1200x1050/public/media/articles/56767/g0520205-salguero.jpg?itok=7zic_LZO"
  let img4 = "https://static.eldiario.es/clip/a6966d14-ee52-4070-b755-97a984f7ec8c_16-9-discover-aspect-ratio_default_0.jpg"
  let img5 = "https://www.rosarionoticias.gob.ar/uploads/fotos/p1aeifmeeg1jif3prpvho2efukc.jpg"

  const [timer, setTimer] = useState(Date.now())
  const [section, setSection] = useState(0)
  const [timeRev, setTimeRev] = useState(Date.now() + 30000)
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


useEffect(() => {
  setTimeout(() => {

    setOpenModal(true)

}, 31000);
}, [section, stay])


  const siguiente = () => {
    setSection(section + 1)
    setOpenModal(false)
    setTimer(Date.now())
    setTimeRev(Date.now() + 30000)
  }

  const anterior = () => {
    setSection(section - 1)
    setOpenModal(false)
    setTimer(Date.now())
    setTimeRev(Date.now() + 30000)
  }

  const closeModal = () => {
    setSection(section)
    setOpenModal(false)
    setTimer(Date.now())
    setTimeRev(Date.now() + 30000)
    if(stay === true) {
      setStay(false)
    } else {
      setStay(true)
    }
  }



  return (
    <div className="WebCont" style={{ "height": window.screen.height, "width": window.screen.width }}>

      {openModal === true ?

        <div className='modalCont' style={{ "height": window.screen.height, "width": window.screen.width }}>
          <div className='tittleCont'>
            <button onClick={closeModal} className='modalTittle'>Quiero seguir leyendo</button>
            <button onClick={siguiente} className='modalTittle'>Pasar a la siguiente historia</button>
            {section != 1 ? <button onClick={anterior} className='modalTittle'>Volver a la historia anterior</button> : <></>}
          </div>

        </div>

        :

        <></>


      }

      {section === 0 ?
        <div className='sectionZeroCont'>
          <button  onClick={siguiente} className='modalTittle'> Iniciar recorrido </button>

        </div>
      :section === 1 ?
        <Section siguiente={siguiente} tras={anterior} img={img1} tittle="1976" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ducimus itaque doloremque nobis iste at amet, voluptatem accusantium quaerat dolorem distinctio aperiam voluptatum molestias repellat praesentium veritatis libero asperiores laudantium."   />
      : section === 2 ?
        <Section siguiente={siguiente} atras={anterior} img={img2} tittle="1977" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ducimus itaque doloremque nobis iste at amet, voluptatem accusantium quaerat dolorem distinctio aperiam voluptatum molestias repellat praesentium veritatis libero asperiores laudantium."  />
      :  section === 3 ?
      <Section siguiente={siguiente} atras={anterior} img={img3} tittle="1977" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ducimus itaque doloremque nobis iste at amet, voluptatem accusantium quaerat dolorem distinctio aperiam voluptatum molestias repellat praesentium veritatis libero asperiores laudantium."  />
    : section === 4 ?
    <Section siguiente={siguiente} atras={anterior} img={img4} tittle="1977" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ducimus itaque doloremque nobis iste at amet, voluptatem accusantium quaerat dolorem distinctio aperiam voluptatum molestias repellat praesentium veritatis libero asperiores laudantium."  />
  : section === 2 ?
  <Section siguiente={siguiente} atras={anterior} img={img5} tittle="1977" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ducimus itaque doloremque nobis iste at amet, voluptatem accusantium quaerat dolorem distinctio aperiam voluptatum molestias repellat praesentium veritatis libero asperiores laudantium."  />
: <></>


      }



    </div>


  );
}

export default App;
