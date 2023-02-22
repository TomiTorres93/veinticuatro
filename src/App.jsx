import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Section from './Section';

function App() {

  const date = new Date();


  let img1 = "http://www.jus.mendoza.gov.ar/documents/43978/0/madreplazademayo.jpg/a28584fc-2e25-4716-acb2-46d9a845613e?t=1427244453853"

  let img2 = "https://magisterio.uncuyo.edu.ar/cache/dia-de-la-memoria_800_900.jpg"


  const [timer, setTimer] = useState(Date.now())
  const [section, setSection] = useState(1)
  const [timeRev, setTimeRev] = useState(Date.now() + 10000)
  const [openModal, setOpenModal] = useState(false)
  const [stay, setStay] = useState(false)
  const [img, setImg] = useState(img1)

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

}, 11000);
}, [section, stay])


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

      {section === 1 ?
        <Section img={img1} tittle="1976" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ducimus itaque doloremque nobis iste at amet, voluptatem accusantium quaerat dolorem distinctio aperiam voluptatum molestias repellat praesentium veritatis libero asperiores laudantium."   />
      : section === 2 ?
        <Section img={img2} tittle="1977" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ducimus itaque doloremque nobis iste at amet, voluptatem accusantium quaerat dolorem distinctio aperiam voluptatum molestias repellat praesentium veritatis libero asperiores laudantium."  />
      : <></>


      }



    </div>


  );
}

export default App;
