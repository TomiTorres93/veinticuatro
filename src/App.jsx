import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import { Link } from 'react-router-dom';




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

  const [popMadres, setPopMadres] = useState(false)

  const popMadresF = () => {
    if (popMadres === true) {
      setPopMadres(false)
    } else {
      setPopMadres(true)
    }
  }

  const [popcidh, setPopcidh] = useState(false)

  const popcidhF = () => {
    if (popcidh === true) {
      setPopcidh(false)
    } else {
      setPopcidh(true)
    }
  }

  const [popSolicitada, setPopSolicitada] = useState(false)

  const popSolicitadaF = () => {
    if (popSolicitada === true) {
      setPopSolicitada(false)
    } else {
      setPopSolicitada(true)
    }
  }


  const [popBaRock, setPopBaRock] = useState(false)

  const popBaRockF = () => {
    if (popBaRock === true) {
      setPopBaRock(false)
    } else {
      setPopBaRock(true)
    }
  }

  const [popCamps, setPopCamps] = useState(false)

  const popCampsF = () => {
    if (popCamps === true) {
      setPopCamps(false)
    } else {
      setPopCamps(true)
    }
  }





  return (
    <BrowserRouter>
      <div className="WebCont" >

        <div className='lineaItemCont zindex10002' id='inicio'>
          <div className='zindex1000'>
            <img className='logoEduc' src="https://educacionymemoria.github.io/Prevencion-del-Maltrato-Infanto-Juvenil/images/logo-edym-fullblanco.png" alt="" />

            <h1 className='tittle'>Un recorrido hacia la democracia</h1>
            <p className='parrafoZero'>Esta línea de tiempo abarca algunos de los hechos que condujeron a las elecciones de 1983 y la restauración de la democracia. Al hacer click en cada título se despliega un texto explicativo que contiene más información, fotos o videos. En los textos se insertan hipervínculos que conducen a materiales complementarios que nutren los contenidos principales.
            </p>



            <a href='#cero' className='optionTittle'> INICIAR </a>
            <p className='lineainicio'></p>

          </div>


        </div>


        <div id='cero' className='lineaItemCont'>
          <div className='textsCont'>
            <a href='#inicio' className='volver1primero'>VOLVER AL INICIO</a>
            <button onClick={open} className='openLineButtonPrimera'>ABRIR LÍNEA DE TIEMPO</button>
            <img className='lineImg' src="https://firebasestorage.googleapis.com/v0/b/educacionymemoria-d8332.appspot.com/o/1976%20Familiares%20de%20detenidos%20desaparecidos.jpeg?alt=media&token=b3dab524-c81a-4f85-bdca-4f26c33683ad" alt="" />
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>Nace la organización de derechos humanos Familiares de Detenidos y Desaparecidos por Razones Políticas   </p>
              <p className='lineaItemText'>Fue conformada por familias que se conocieron en Buenos Aires durante sus gestiones ante los organismos oficiales para averiguar por sus desaparecidos/as. Su lugar de reunión fue la Liga Argentina por los Derechos Humanos.</p>
            </div>
            {/* POP UP */}
            <p className='popUpText'></p>

            <div className='creditosContR'>
              <p className='creditos'>Foto: Familiares de personas detenidas y desaparecidas por razones políticas.
              </p>
              <a className='creditos' target='_blank' href="http://biblioteca.varela.gov.ar/nota.aspx?id=59  ">Crédito: Biblioteca de la Memoria.</a>
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


        {/* 30/04/1977 —Surgen las agrupaciones Madres y Abuelas de Plaza de Mayo  */}

        <div id='1976' className='lineaItemCont'>
          <a href='#cero' className='volver2'>VOLVER A LA FECHA ANTERIOR</a>
          <button onClick={open} className='openLineButton2'>ABRIR LÍNEA DE TIEMPO</button>
          <div className='textsCont'>
            <p className='lineaFecha'>1977</p>
            <span className='lineaItemSubTittle'>30/04/1977</span>
            <img className='lineImg' src="https://www.argentina.gob.ar/sites/default/files/imagengaleria_img_int04_796_abuelas.jpg" alt="" />
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>Surgen las agrupaciones Madres y Abuelas de Plaza de Mayo </p>
              <p className='lineaItemText'>Un grupo de <Link className='links' target='_blank' to="https://youtu.be/fzbekLua6aA">14 mujeres</Link> se reunió ese día en la Plaza de Mayo para reclamar por la aparición con vida de sus hijos secuestrados, torturados y desaparecidos por la dictadura militar. Agentes de la Policía les advirtieron que las reuniones estaban prohibidas por el <Link className='links' target='_blank' to="https://www.youtube.com/watch?v=CAQvuvGPNC8">Estado de sitio</Link> y comenzaron a caminar en círculos. Luego se organizaron bajo el nombre<button className='button2' onClick={popMadresF}>Madres de Plaza de Mayo </button>y adoptaron la modalidad de las rondas.
              </p>



              <p className='clickText'>Clickeá en la/s palabra/s resaltadas para información complementaria.</p>
              <p className='clickText2'>Links a video/información complementaria.</p>


            </div>


            <div className='creditosContL'>
              <p className='creditos'>Foto: Abuelas de Plaza de Mayo.
              </p>
              <a className='creditos' target='_blank' href="https://www.argentina.gob.ar/derechoshumanos/argentina-te-busca/abuelas-de-plaza-de-mayo">Crédito: Argentina.gob.ar.</a>
            </div>

          </div>
          {popMadres === true ?

            <div className='popUp'>
              <button onClick={popMadresF} className='closeModal'>Cerrar</button>
              <p className='links infoCompTittle'>Información complementaria</p>
              De este grupo se desprendió después <Link className='links' target='_blank' to="https://youtu.be/fzbekLua6aA">Abuelas de Plaza de Mayo,</Link> que nació el 15 de mayo de ese mismo año, cuando un grupo de abuelas presentó un habeas corpus ante la justicia de Morón en denuncia de la existencia de niñas y niños desaparecidos. Y más adelante la organización de las Madres se dividió en <Link className='links' target='_blank' to="https://youtu.be/fzbekLua6aA">Madres de Plaza de Mayo</Link> y <Link className='links' target='_blank' to="https://youtu.be/fzbekLua6aA">Madres de Plaza de Mayo Línea Fundadora.</Link>

            </div>

            : <></>}

          <p className='linea1b'></p>
          <p className='linea2b'></p>
          <p className='linea3b'></p>
          <p className='linea4b'></p>

          <p className='linea6b'></p>
          <a href='#mundial' className='lineaFecha3'>IR  AL 1 DE JUNIO DE 1978</a>
        </div>



        {/* 01/06/1978 — El Mundial expone la dictadura ante el mundo  */}



        <div id='mundial' className='lineaItemCont'>
          <div className='textsCont'>
            <p className='lineaFecha'>1978</p>
            <span className='lineaItemSubTittle'>01/06/1978</span>
            <a href='#1976' className='volver1'>VOLVER A LA FECHA ANTERIOR</a>
            <button onClick={open} className='openLineButton'>ABRIR LÍNEA DE TIEMPO</button>
            <img className='lineImg' src="https://www.infobae.com/new-resizer/egdgrQlXHLbeMXGbXcwoL2GRa2o=/992x558/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/YJMAR5NY5JD2XPXDNY5AXTFJEY" alt="" />
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>El Mundial expone la dictadura ante el mundo </p>
              <p className='lineaItemText'>Durante el Mundial de Fútbol celebrado en Argentina algunos jugadores de los seleccionados holandés y suizo se acercaron a la Plaza de Mayo para conocer a las Madres y las Abuelas. Esto atrajo mucha atención y la noticia sobre el reclamo de familiares de detenidos/desaparecidos/as llegó a la prensa internacional. </p>

            </div>

            <div className='creditosContR'>
              <p className='creditos'>Foto: Se habla sobre la dictadura en la prensa francesa.
              </p>
              <a className='creditos' target='_blank' href="https://www.argentina.gob.ar/derechoshumanos/argentina-te-busca/abuelas-de-plaza-de-mayo">Crédito: L’Epique (desde Infobae).</a>
            </div>

          </div>


          <p className='linea1'></p>
          <p className='linea2'></p>
          <p className='linea3'></p>
          <p className='linea4'></p>

          <p className='linea6'></p>
          <a href='#obrero' className='lineaFecha2'>IR  AL 30 DE MARZO DE 1979</a>
        </div>


        {/* 30-03-1979 — Recomposición del movimiento obrero  */}

        <div id='obrero' className='lineaItemCont'>
          <a href='#mundial' className='volver2'>VOLVER A LA FECHA ANTERIOR</a>
          <button onClick={open} className='openLineButton2'>ABRIR LÍNEA DE TIEMPO</button>
          <div className='textsCont'>
            <p className='lineaFecha'>1979</p>
            <span className='lineaItemSubTittle'>30/03/1979</span>
            <img className='lineImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ksoM-tFKxG1FsMEwUVt0rE021-FeDWffjG6nrVAUPgPP15xCUH3KoFnKYF2WMGfqj-Y&usqp=CAU" alt="" />
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>Recomposición del movimiento obrero </p>
              <p className='lineaItemText'>Debido a la crisis económica las y los trabajadores se animaron a organizar huelgas y otras medidas de fuerza. En septiembre se creó la Central Única de Trabajadores Argentinos.
              </p>

            </div>

            <div className='creditosContL'>
              <p className='creditos'>Foto: Paro de trabajadoras y trabajadores de la fábrica Alpargatas.
              </p>
              <a className='creditos' target='_blank' href="https://www.argentina.gob.ar/derechoshumanos/argentina-te-busca/abuelas-de-plaza-de-mayo">Crédito: Universidad Nacional de Cuyo.</a>
            </div>

          </div>


          <p className='linea1b'></p>
          <p className='linea2b'></p>
          <p className='linea3b'></p>
          <p className='linea4b'></p>

          <p className='linea6b'></p>
          <a href='#nietos' className='lineaFecha3'>IR  AL 2 DE AGOSTO DE 1979</a>
        </div>



        {/* 02-08-1979
Primeros nietos/as recuperados/as
  */}



        <div id='nietos' className='lineaItemCont'>
          <div className='textsCont'>
            <p className='lineaFecha'>1979</p>
            <span className='lineaItemSubTittle'>02/08/1979</span>
            <a href='#obrero' className='volver1'>VOLVER A LA FECHA ANTERIOR</a>
            <button onClick={open} className='openLineButton'>ABRIR LÍNEA DE TIEMPO</button>
            <img className='lineImg' src="https://www.abuelas.org.ar/img/thumbs/caso_GRISONAS_Victoria_310.jpg" alt="" />
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>Primeros nietos/as recuperados/as</p>
              <p className='lineaItemText'> <Link className='links' target='_blank' to="https://www.abuelas.org.ar/caso/julien-grisonas-victoria-eva-227">Anatole y Victoria,</Link> hijo e hija de Victoria Lucía Grisonas y Mario Roger Julien, desaparecidos en 1976, fueron encontrados. El 2 de agosto se firmó un certificado notarial entre la familia biológica y el matrimonio que las adoptó, donde se acordó que mantendrían vínculos con su familia de origen. De este modo se les restituyó la identidad y se convirtieron en los primeros nietos recuperados. </p>
              <p className='clickText2'>Links a video/información complementaria.</p>
            </div>

            <div className='creditosContR'>
              <p className='creditos'>Foto: Una niña y un niño apropiados son los primeros en recuperar su identidad.
              </p>
              <a className='creditos' target='_blank' href="https://www.argentina.gob.ar/derechoshumanos/argentina-te-busca/abuelas-de-plaza-de-mayo">Crédito: Abuelas de Plaza de Mayo.</a>
            </div>

          </div>


          <p className='linea1'></p>
          <p className='linea2'></p>
          <p className='linea3'></p>
          <p className='linea4'></p>

          <p className='linea6'></p>
          <a href='#cidh' className='lineaFecha2'>IR  AL 6 DE SEPTIEMBRE DE 1979</a>
        </div>



        {/*06-09-1979 — Visita de la Comisión Interamericana de Derechos Humanos */}

        <div id='cidh' className='lineaItemCont'>
          <a href='#nietos' className='volver2'>VOLVER A LA FECHA ANTERIOR</a>
          <button onClick={open} className='openLineButton2'>ABRIR LÍNEA DE TIEMPO</button>
          <div className='textsCont'>
            <p className='lineaFecha'>1979</p>
            <span className='lineaItemSubTittle'>06/09/1979</span>
            <img className='lineImg' src="https://cpm-aec3.kxcdn.com/wp-content/uploads/sites/16/2019/09/asociacion-abuelas-de-plaza-de-mayo.jpg" alt="" />
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>Visita de la Comisión Interamericana de Derechos Humanos </p>
              <p className='lineaItemText'>
                Por las denuncias sobre violaciones a los derechos humanos, entre el 6 y el 20 de septiembre la<Link className='links' target='_blank' to="https://youtu.be/gEVAfKqWv34">CIDH</Link>se hace presente en nuestro país<button className='button2' onClick={popcidhF}>para investigar</button>las denuncias contra la dictadura. El gobierno de facto respondió con una campaña de prensa bajo la consigna “Los argentinos somos derechos y humanos”.
              </p>

            </div>

            <div className='creditosContL'>
              <p className='creditos'>Foto: Madres de Plaza de Mayo junto a la CIDH en la visita al país.
              </p>
              <a className='creditos' target='_blank' href="https://cpm-aec3.kxcdn.com/wp-content/uploads/sites/16/2019/09/asociacion-abuelas-de-plaza-de-mayo.jpg">Crédito: comisionporlamemoria.org</a>
            </div>

          </div>

          {popcidh === true ?

            <div className='popUp'>
              <button onClick={popcidhF} className='closeModal'>Cerrar</button>
              <p className='links infoCompTittle'>Información complementaria</p>
              "Fue un alivio y una protección a la vez. En las filas que formamos frente a las oficinas de la CIDH no podían reprimirnos ni cometer actos de violencia física, como sí sufríamos en Plaza de Mayo los jueves cuando íbamos a la ronda", afirmó<Link className='links' target='_blank' to="https://www.youtube.com/watch?v=RqqQAo51QkE">Estela de Carlotto,</Link>presidenta de Abuelas de Plaza de Mayo.




            </div>

            : <></>}


          <p className='linea1b'></p>
          <p className='linea2b'></p>
          <p className='linea3b'></p>
          <p className='linea4b'></p>

          <p className='linea6b'></p>
          <a href='#nietos2' className='lineaFecha3'>IR  AL 19 DE MARZO DE 1980</a>
        </div>





        {/* 19/03/1980
Abuelas de Plaza de Mayo encuentra a dos nietas
  */}


        <div id='nietos2' className='lineaItemCont'>
          <div className='textsCont'>
            <p className='lineaFecha'>1980</p>
            <span className='lineaItemSubTittle'>19/03/1980</span>
            <a href='#cidh' className='volver1'>VOLVER A LA FECHA ANTERIOR</a>
            <button onClick={open} className='openLineButton'>ABRIR LÍNEA DE TIEMPO</button>
            <img className='lineImg' src="https://www.cultura.gob.ar/media/uploads/4_hYaaLrq.jpg" alt="" />
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>Abuelas de Plaza de Mayo encuentra a dos nietas</p>
              <p className='lineaItemText'>

                El trabajo de las integrantes del organismo de derechos humanos logra que se localice a<Link className='links' target='_blank' to="https://youtu.be/Ktb0L-cgFAM">Tatiana</Link> y Laura Ruarte Britos, hijas de madre y padre desaparecido/a, y se les restituya la <a className='links' target='_blank' to="https://youtu.be/-9OaEYQ8zZY">identidad.</a>


              </p>

            </div>

            <div className='creditosContR'>
              <p className='creditos'>Foto: Tatiana Ruarte Britos.
              </p>
              <a className='creditos' target='_blank' href="https://www.cultura.gob.ar/tatiana-sfiligoy-el-proceso-de-restitucion-es-para-toda-la-vida-donde--8460/">Crédito: Ministerio de Cultura de la Nación.</a>
            </div>

          </div>


          <p className='linea1'></p>
          <p className='linea2'></p>
          <p className='linea3'></p>
          <p className='linea4'></p>

          <p className='linea6'></p>
          <a href='#solicitada' className='lineaFecha2'>IR  AL 13 DE AGOSTO DE 1980</a>
        </div>







        {/*13-08-1980 — La solicitada que pedía los nombres de las personas desaparecidas */}

        <div id='solicitada' className='lineaItemCont'>
          <a href='#nietos2' className='volver2'>VOLVER A LA FECHA ANTERIOR</a>
          <button onClick={open} className='openLineButton2'>ABRIR LÍNEA DE TIEMPO</button>
          <div className='textsCont'>
            <p className='lineaFecha'>1979</p>
            <span className='lineaItemSubTittle'>13/08/1980</span>
            <img className='lineImg' src="https://2.bp.blogspot.com/-LTQv5O5gfJc/Td7wKO2NZYI/AAAAAAAACpI/lorZ2R0XFZM/s1600/Escanear0128.jpg" alt="" />
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>La solicitada que pedía los nombres de las personas desaparecidas</p>
              <p className='lineaItemText'>
                Fue redactada por la organización Familiares de Desaparecidos y Detenidos por Razones Políticas, con la <button className='button2' onClick={popSolicitadaF}>firma</button> de integrantes de todos los organismos de derechos humanos. Integrantes de Madres de Plaza de Mayo, como <Link className='links' target='_blank' to="https://www.youtube.com/watch?v=4N6i76idQ3c">Azucena Villaflor</Link>, también habían desaparecido en esta fecha.

              </p>

            </div>

            <div className='creditosContL'>
              <p className='creditos'>Foto: Solicitada pide respuestas sobre las desapariciones.
              </p>
              <a className='creditos' target='_blank' href="https://repositorio.uca.edu.ar/bitstream/123456789/10726/1/momentary-lapse-history-borges.pdf">Crédito: repositorio UCA.</a>
            </div>

          </div>

          {popSolicitada === true ?

            <div className='popUp'>
              <button onClick={popSolicitadaF} className='closeModal'>Cerrar</button>
              <p className='links infoCompTittle'>Información complementaria</p>
              También la firmaron distintas personalidades de la cultura como Olga Orozco, Adolfo Bioy Casares, Ernesto Sabato, Leonor Manso, Francisco Madariaga y Jorge Luis Borges.




            </div>

            : <></>}


          <p className='linea1b'></p>
          <p className='linea2b'></p>
          <p className='linea3b'></p>
          <p className='linea4b'></p>

          <p className='linea6b'></p>
          <a href='#nobel' className='lineaFecha3'>IR  AL 13 DE OCTUBRE DE 1980</a>
        </div>





        {/* 13/10/1980  Premio Nobel de la Paz
  */}


        <div id='nobel' className='lineaItemCont'>
          <div className='textsCont'>
            <p className='lineaFecha'>1980</p>
            <span className='lineaItemSubTittle'>13/10/1980</span>
            <a href='#cidh' className='volver1'>VOLVER A LA FECHA ANTERIOR</a>
            <button onClick={open} className='openLineButton'>ABRIR LÍNEA DE TIEMPO</button>
            <img className='lineImg' src="https://www.cultura.gob.ar/media/uploads/perez-esquivel3.jpg" alt="" />
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>Premio Nobel de la Paz</p>
              <p className='lineaItemText'>

                Lo recibió Adolfo Pérez Esquivel  por su lucha en favor de los Derechos Humanos y la defensa de la democracia en América Latina a través de medios no violentos. Luego fue designado miembro del comité ejecutivo de la Asamblea Permanente de las Naciones Unidas sobre Derechos Humanos.


              </p>

            </div>

            <div className='creditosContR'>
              <p className='creditos'>Foto: Adolfo Pérez Esquivel recibe el Premio Nobel de la Paz.
              </p>
              <a className='creditos' target='_blank' href="https://www.cultura.gob.ar/adolfo-perez-esquivel-premio-nobel-de-la-paz-9627/">Crédito: Universidad de Buenos Aires a través del Ministerio de Cultura de la Nación.</a>
            </div>

          </div>


          <p className='linea1'></p>
          <p className='linea2'></p>
          <p className='linea3'></p>
          <p className='linea4'></p>

          <p className='linea6'></p>
          <a href='#rearman' className='lineaFecha2'>IR  AL 14 DE JULIO DE 1981</a>
        </div>


        {/* Se rearman las fuerzas políticas */}

        <div id='rearman' className='lineaItemCont'>
          <a href='#nobel' className='volver2'>VOLVER A LA FECHA ANTERIOR</a>
          <button onClick={open} className='openLineButton2'>ABRIR LÍNEA DE TIEMPO</button>
          <div className='textsCont'>
            <p className='lineaFecha'>1981</p>
            <span className='lineaItemSubTittle'>14/07/1981</span>
            {/* <img className='lineImg' src="https://2.bp.blogspot.com/-LTQv5O5gfJc/Td7wKO2NZYI/AAAAAAAACpI/lorZ2R0XFZM/s1600/Escanear0128.jpg" alt="" /> */}
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>Se rearman las fuerzas políticas</p>
              <p className='lineaItemText'>
                Se formó la Asamblea Multipartidaria, integrada por la Unión Cívica Radical, el Partido Justicialista, el Movimiento de Integración y Desarrollo, el Partido Intransigente y la Democracia Cristiana para organizarse y reunir fuerzas en oposición al régimen militar.
              </p>

            </div>

            {/* <div className='creditosContL'>
            <p className='creditos'>Foto: Solicitada pide respuestas sobre las desapariciones. 
            </p>
            <a className='creditos' target='_blank' href="https://repositorio.uca.edu.ar/bitstream/123456789/10726/1/momentary-lapse-history-borges.pdf">Crédito: repositorio UCA.</a>
          </div> */}

          </div>



          <p className='linea1b'></p>
          <p className='linea2b'></p>
          <p className='linea3b'></p>
          <p className='linea4b'></p>

          <p className='linea6b'></p>
          <a href='#pazpan' className='lineaFecha3'>IR  AL 7 DE NOVIEMBRE DE 1981</a>
        </div>


        {/* Paz, pan y trabajo
  */}


        <div id='pazpan' className='lineaItemCont'>
          <div className='textsCont'>
            <p className='lineaFecha'>1981</p>
            <span className='lineaItemSubTittle'>7/11/1981</span>
            <a href='#rearman' className='volver1'>VOLVER A LA FECHA ANTERIOR</a>
            <button onClick={open} className='openLineButton'>ABRIR LÍNEA DE TIEMPO</button>
            <img className='lineImg' src="https://www.comisionporlamemoria.org/archivos/archivo/publicoyconfidencial-II/images/images4/36.jpg" alt="" />
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>Paz, pan y trabajo</p>
              <p className='lineaItemText'>

                La CGT-Brasil organizó una marcha hacia la Iglesia San Cayetano de Liniers bajo la consigna “Paz, pan y trabajo”. Concurrieron unas 30.000 personas y se escuchó  la consigna “se va a acabar, se va a acabar, la dictadura militar”. Hubo presencia de algunos partidos políticos y organismos de derechos humanos.

              </p>

            </div>

            <div className='creditosContR'>
              <p className='creditos'>Foto: Movilización popular contra la dictadura.
              </p>
              <a className='creditos' target='_blank' href="https://www.comisionporlamemoria.org/archivos/archivo/publicoyconfidencial-II/seleccion4.html#img36 ">Crédito: Comisión Provincial por la Memoria.</a>
            </div>

          </div>


          <p className='linea1'></p>
          <p className='linea2'></p>
          <p className='linea3'></p>
          <p className='linea4'></p>

          <p className='linea6'></p>
          <a href='#resistencia' className='lineaFecha2'>IR  AL 9 DE DICIEMBRE DE 1981</a>
        </div>



        {/* Primera Marcha de la Resistencia */}

        <div id='resistencia' className='lineaItemCont'>
          <a href='#pazpan' className='volver2'>VOLVER A LA FECHA ANTERIOR</a>
          <button onClick={open} className='openLineButton2'>ABRIR LÍNEA DE TIEMPO</button>
          <div className='textsCont'>
            <p className='lineaFecha'>1981</p>
            <span className='lineaItemSubTittle'>9/12/1981</span>
            <img className='lineImg' src="https://www.archivosenuso.org/sites/default/files/romero/117/117-a.jpg" alt="" />
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>Primera Marcha de la Resistencia</p>
              <p className='lineaItemText'>
                Fue organizada por Madres de Plaza de Mayo. Pasaron la noche en la Plaza y al día siguiente se sumaron todos los organismos de derechos humanos. Se repetiría cada año hasta la actualidad.
              </p>

            </div>

            <div className='creditosContL'>
              <p className='creditos'>Foto: 1° Marcha de la Resistencia.
              </p>
              <a className='creditos' target='_blank' href="http://www.archivosenuso.org/search/node/1%C2%B0%20marcha%20de%20la%20resistencia#viewer=/viewer/1205&js= 
">Crédito: Colección Gráfica Política. Archivo de artistas Juan Carlos Romero.</a>
            </div>

          </div>



          <p className='linea1b'></p>
          <p className='linea2b'></p>
          <p className='linea3b'></p>
          <p className='linea4b'></p>

          <p className='linea6b'></p>
          <a href='#delia' className='lineaFecha3'>IR  AL 15 DE ABRIL DE 1982</a>
        </div>



        {/* El cartel de la Abuela Delia Giovanola
  */}


        <div id='delia' className='lineaItemCont'>
          <div className='textsCont'>
            <p className='lineaFecha'>1982</p>
            <span className='lineaItemSubTittle'>15/04/1982</span>
            <a href='#resistencia' className='volver1'>VOLVER A LA FECHA ANTERIOR</a>
            <button onClick={open} className='openLineButton'>ABRIR LÍNEA DE TIEMPO</button>
            <img className='lineImg imgAligRight' src="https://cdn.educ.ar/dinamico/UnidadHtml__get__587a3874-6a6d-480a-b321-c8bf888ab62d/2abril/img/destacadoppal.jpg" alt="" />
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>El cartel de la Abuela Delia Giovanola</p>
              <p className='lineaItemText'>

                Para visibilizar los crímenes de la dictadura, la <Link className='links' target='_blank' to="https://www.youtube.com/watch?v=Q99DLSRLIrA">Abuela de Plaza de Mayo</Link> aprovechó la cobertura de la prensa internacional de la Guerra de Malvinas. En la Plaza de Mayo posó con un cartel que decía: “Las Malvinas son argentinas, los desaparecidos también”. La foto se publicó en diarios y revistas de distintos países y ayudó a visibilizar la lucha de los organismos de DDHH.

              </p>

            </div>

            <div className='creditosContR'>
              <p className='creditos'>Foto: Delia Giovanolla, una de las 12 fundadoras de Abuelas de Plaza de Mayo.
              </p>
              <a className='creditos' target='_blank' href="https://cdn.educ.ar/dinamico/UnidadHtml__get__587a3874-6a6d-480a-b321-c8bf888ab62d/2abril/index.html">Crédito: Educ.ar.</a>
            </div>

          </div>


          <p className='linea1'></p>
          <p className='linea2'></p>
          <p className='linea3'></p>
          <p className='linea4'></p>

          <p className='linea6'></p>
          <a href='#masiva' className='lineaFecha2'>IR  AL 30 DE MARZO DE 1982</a>
        </div>






        {/* Masiva movilización popular  */}

        <div id='masiva' className='lineaItemCont'>
          <a href='#delia' className='volver2'>VOLVER A LA FECHA ANTERIOR</a>
          <button onClick={open} className='openLineButton2'>ABRIR LÍNEA DE TIEMPO</button>
          <div className='textsCont'>
            <p className='lineaFecha'>1982</p>
            <span className='lineaItemSubTittle'>30/03/1982</span>
            <img className='lineImg' src="https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2022/03/62437e042e91a_1200.jpg" alt="" />
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>Masiva movilización popular </p>
              <p className='lineaItemText'>
                La CGT-Brasil convocó a una movilización en Plaza de Mayo de la cual participaron muchas organizaciones políticas y de derechos humanos. Hubo una fuerte represión de las Fuerzas de Seguridad que provocó la muerte de José Ortiz, un trabajador mendocino, centenares de heridos y más de mil detenidos.
              </p>

            </div>

            <div className='creditosContL'>
              <p className='creditos'>Foto: la CGT marcha a Plaza de Mayo.
              </p>
              <a className='creditos' target='_blank' href="https://www.telam.com.ar/notas/202203/587904-40-anos-cgt-movilizaba-desafiaba-dictadura.html">Crédito: Télam.</a>
            </div>

          </div>



          <p className='linea1b'></p>
          <p className='linea2b'></p>
          <p className='linea3b'></p>
          <p className='linea4b'></p>

          <p className='linea6b'></p>
          <a href='#malvinas' className='lineaFecha3'>IR  AL 14 DE JUNIO DE 1982</a>
        </div>


        {/*Capitulación argentina en Malvinas
  */}


        <div id='malvinas' className='lineaItemCont'>
          <div className='textsCont'>
            <p className='lineaFecha'>1982</p>
            <span className='lineaItemSubTittle'>14/06/1982</span>
            <a href='#masiva' className='volver1'>VOLVER A LA FECHA ANTERIOR</a>
            <button onClick={open} className='openLineButton'>ABRIR LÍNEA DE TIEMPO</button>
            <img className='lineImg imgAligRight' src="https://scontent.faep9-1.fna.fbcdn.net/v/t1.6435-9/55857680_2904566299568567_6570703495001800704_n.jpg?stp=dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=_b7-NMD1Yp4AX-_USEk&_nc_ht=scontent.faep9-1.fna&oh=00_AfAqIXi4DWbVTMpXUr1n3Gdmuw5882oM9_4bpS_Zbt_o4Q&oe=64F4CDEA" alt="" />
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>Capitulación argentina en Malvinas</p>
              <p className='lineaItemText'>

                Se produjo la rendición incondicional de las Fuerzas argentinas en la <Link className='links' target='_blank' to="https://www.youtube.com/watch?v=a6_eCKdBngg&ab_channel=EducacionBA">Guerra de Malvinas,</Link> hecho que  aceleró el camino hacia la recuperación de la democracia. La primera reacción popular fue una protesta contra el gobierno de facto en la Plaza de Mayo.

              </p>

            </div>

            <div className='creditosContR'>
              <p className='creditos'>Foto: Capitulación de la Guerra de Malvinas.
              </p>
              <a className='creditos' target='_blank' href="https://www.facebook.com/ArchivoGeneraldelaNacionArgentina/posts/2904568356235028/?locale=es_LA
">Crédito: Archivo General de la Nación Argentina.</a>
            </div>

          </div>


          <p className='linea1'></p>
          <p className='linea2'></p>
          <p className='linea3'></p>
          <p className='linea4'></p>

          <p className='linea6'></p>
          <a href='#disolucion' className='lineaFecha2'>IR  AL 23 DE JUNIO DE 1982</a>
        </div>


        {/* 
    Disolución de la Junta Militar
    */}

        <div id='disolucion' className='lineaItemCont'>
          <a href='#malvinas' className='volver2'>VOLVER A LA FECHA ANTERIOR</a>
          <button onClick={open} className='openLineButton2'>ABRIR LÍNEA DE TIEMPO</button>
          <div className='textsCont'>
            <p className='lineaFecha'>1982</p>
            <span className='lineaItemSubTittle'>23/06/1982</span>
            {/* <img className='lineImg' src="https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2022/03/62437e042e91a_1200.jpg" alt="" /> */}
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>Disolución de la Junta Militar</p>
              <p className='lineaItemText'>
                Una consecuencia política de haber perdido la Guerra de Malvinas fue la crisis institucional que atravesó al gobierno de facto. Se disolvió la Junta Militar tras la desvinculación de la Marina y la Fuerza Aérea y comenzó un proceso de inevitable debilitamiento.
              </p>

            </div>

            {/* <div className='creditosContL'>
            <p className='creditos'>Foto: la CGT marcha a Plaza de Mayo.
            </p>
            <a className='creditos' target='_blank' href="https://www.telam.com.ar/notas/202203/587904-40-anos-cgt-movilizaba-desafiaba-dictadura.html">Crédito: Télam.</a>
          </div> */}

          </div>



          <p className='linea1b'></p>
          <p className='linea2b'></p>
          <p className='linea3b'></p>
          <p className='linea4b'></p>

          <p className='linea6b'></p>
          <a href='#veda' className='lineaFecha3'>IR  AL 1 DE JULIO DE 1982</a>
        </div>


        {/*
     Levantamiento de la veda política
  */}


        <div id='veda' className='lineaItemCont'>
          <div className='textsCont'>
            <p className='lineaFecha'>1982</p>
            <span className='lineaItemSubTittle'>01/07/1982</span>
            <a href='#malvinas' className='volver1'>VOLVER A LA FECHA ANTERIOR</a>
            <button onClick={open} className='openLineButton'>ABRIR LÍNEA DE TIEMPO</button>
            {/* <img className='lineImg imgAligRight' src="https://scontent.faep9-1.fna.fbcdn.net/v/t1.6435-9/55857680_2904566299568567_6570703495001800704_n.jpg?stp=dst-jpg_p180x540&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=_b7-NMD1Yp4AX-_USEk&_nc_ht=scontent.faep9-1.fna&oh=00_AfAqIXi4DWbVTMpXUr1n3Gdmuw5882oM9_4bpS_Zbt_o4Q&oe=64F4CDEA" alt="" /> */}
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>Levantamiento de la veda política</p>
              <p className='lineaItemText'>
                Asumió la presidencia de facto Reynaldo Bignone, encabezando al Ejército, y una de sus primeras medidas de gobierno fue el decreto que estableció el levantamiento de la veda política. Este hecho reanimó la actividad y la organización político-partidaria y paulatinamente se fue generando un clima de mayor <Link className='links' target='_blank' to="https://www.youtube.com/watch?v=fHXCU6TU5gE">libertad.</Link>



              </p>

            </div>

            {/* <div className='creditosContR'>
            <p className='creditos'>Foto: Capitulación de la Guerra de Malvinas.
            </p>
            <a className='creditos' target='_blank' href="https://www.facebook.com/ArchivoGeneraldelaNacionArgentina/posts/2904568356235028/?locale=es_LA
">Crédito: Archivo General de la Nación Argentina.</a>
          </div> */}

          </div>


          <p className='linea1'></p>
          <p className='linea2'></p>
          <p className='linea3'></p>
          <p className='linea4'></p>

          <p className='linea6'></p>
          <a href='#rock' className='lineaFecha2'>IR  AL 6 DE NOVIEMBRE DE 1982</a>
        </div>


        {/* 
 El rock se sube al escenario
    */}

        <div id='rock' className='lineaItemCont'>
          <a href='#veda' className='volver2'>VOLVER A LA FECHA ANTERIOR</a>
          <button onClick={open} className='openLineButton2'>ABRIR LÍNEA DE TIEMPO</button>
          <div className='textsCont'>
            <p className='lineaFecha'>1982</p>
            <span className='lineaItemSubTittle'>06/11/1982</span>
            <img className='lineImg' src="https://1.bp.blogspot.com/-SX3JfP3DhVU/YGPKtTXCP4I/AAAAAAAAPEw/K30CgB3284wn627fRx5jjGDT4leI3NnPwCLcBGAsYHQ/w409-h409/B.A.Rock%2B%252782%2B2%2B-%2BPortada.jpg" alt="" />
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>El rock se sube al escenario</p>
              <p className='lineaItemText'>
                Uno de los hechos que habla sobre la recomposición de la vida cultural hacia el final de la dictadura fue la realización del<button className='button2' onClick={popBaRockF}> Festival B.A. Rock.
                </button> Se hizo durante los cuatro sábados de noviembre en las canchas de rugby del club Obras Sanitarias.
              </p>

            </div>

            <div className='creditosContL'>
              <p className='creditos'>Foto: Festival B.A. Rock.
              </p>
              <a className='creditos' target='_blank' href="http://naveargenta.blogspot.com/2021/04/barock-82-varios-artistas-1983.html">Crédito: La Nave del Rock.</a>
            </div>

          </div>

          {popBaRock === true ?

            <div className='popUp'>
              <button onClick={popBaRockF} className='closeModal'>Cerrar</button>
              <p className='links infoCompTittle'>Información complementaria</p>
              Tocaron Los Abuelos de la Nada, Riff, V8, Los Encargados, Alejandro Lerner, Rubén Rada y Raúl Porchetto. El invitado especial fue Luis Alberto Spinetta.

            </div>

            : <></>}


          <p className='linea1b'></p>
          <p className='linea2b'></p>
          <p className='linea3b'></p>
          <p className='linea4b'></p>

          <p className='linea6b'></p>
          <a href='#resistencia2' className='lineaFecha3'>IR  AL 9 DE DICIEMBRE DE 1982</a>
        </div>


        {/* 
Segunda Marcha de la Resistencia    */}

<div id='resistencia2' className='lineaItemCont'>
          <a href='#rock' className='volver1'>VOLVER A LA FECHA ANTERIOR</a>
          <button onClick={open} className='openLineButton'>ABRIR LÍNEA DE TIEMPO</button>
          <div className='textsCont'>
            <p className='lineaFecha'>1982</p>
            <span className='lineaItemSubTittle'>09/12/1982</span>
            {/* <img className='lineImg' src="https://1.bp.blogspot.com/-SX3JfP3DhVU/YGPKtTXCP4I/AAAAAAAAPEw/K30CgB3284wn627fRx5jjGDT4leI3NnPwCLcBGAsYHQ/w409-h409/B.A.Rock%2B%252782%2B2%2B-%2BPortada.jpg" alt="" /> */}
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>Segunda Marcha de la Resistencia</p>
              <p className='lineaItemText'>
              Se realizó un año después de la primera jornada convocada por Madres de Plaza de Mayo y tuvo una respuesta muy importante y un gran peso simbólico.
              </p>

            </div>

            {/* <div className='creditosContL'>
              <p className='creditos'>Foto: Festival B.A. Rock.
              </p>
              <a className='creditos' target='_blank' href="http://naveargenta.blogspot.com/2021/04/barock-82-varios-artistas-1983.html">Crédito: La Nave del Rock.</a>
            </div> */}

          </div>

    


          <p className='linea1'></p>
          <p className='linea2'></p>
          <p className='linea3'></p>
          <p className='linea4'></p>

          <p className='linea6'></p>
          <a href='#multipartidaria' className='lineaFecha2'>IR  AL 16 DE DICIEMBRE DE 1982</a>
        </div>




        {/*
 Marcha de la Multipartidaria por la Democracia 

  */}


<div id='multipartidaria' className='lineaItemCont'>
          <div className='textsCont'>
            <p className='lineaFecha'>1982</p>
            <span className='lineaItemSubTittle'>16/12/1982</span>
            <a href='#resistencia2' className='volver2'>VOLVER A LA FECHA ANTERIOR</a>
            <button onClick={open} className='openLineButton2'>ABRIR LÍNEA DE TIEMPO</button>
            <img className='lineImg imgAligRight' src="https://d5ofdvz67shaj.cloudfront.net/original/?url=https://cdn.radionacional.com.ar/wp-content/uploads/2021/12/marcha-multisectorial-510.jpg" alt="" />
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>Marcha de la Multipartidaria por la Democracia 
</p>
              <p className='lineaItemText'>
              Se concretó la Marcha que concentró a 100.000 personas en Plaza de Mayo. Se elevó un petitorio con críticas a la política socioeconómica y el reclamo de elecciones nacionales. Adhirieron organizaciones de derechos humanos, partidos políticos, la CGT y organizaciones estudiantiles.



              </p>

            </div>

            <div className='creditosContL'>
            <p className='creditos'>Foto: Marcha Multipartidaria por la Democracia.
            </p>
            <a className='creditos' target='_blank' href="https://www.radionacional.com.ar/a-39-anos-de-la-masiva-marcha-de-la-multipartidaria-contra-la-dictadura/">Crédito: Radio Nacional.</a>
          </div>

          </div>


          <p className='linea1b'></p>
          <p className='linea2b'></p>
          <p className='linea3b'></p>
          <p className='linea4b'></p>

          <p className='linea6b'></p>
          <a href='#camps' className='lineaFecha3'>IR  AL 27 DE ENERO DE 1983</a>
        </div>



    {/* 
La confesión de Camps   */}

<div id='camps' className='lineaItemCont'>
          <a href='#multipartidaria' className='volver1'>VOLVER A LA FECHA ANTERIOR</a>
          <button onClick={open} className='openLineButton'>ABRIR LÍNEA DE TIEMPO</button>
          <div className='textsCont'>
            <p className='lineaFecha'>1983</p>
            <span className='lineaItemSubTittle'>27/01/1983</span>
            {/* <img className='lineImg' src="https://1.bp.blogspot.com/-SX3JfP3DhVU/YGPKtTXCP4I/AAAAAAAAPEw/K30CgB3284wn627fRx5jjGDT4leI3NnPwCLcBGAsYHQ/w409-h409/B.A.Rock%2B%252782%2B2%2B-%2BPortada.jpg" alt="" /> */}
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>La confesión de Camps</p>
              <p className='lineaItemText'>
              En una entrevista publicada  en el “Diario Pueblo” el genocida  <button className='button2' onClick={popCampsF}>Ramón Camps 
 </button> admitió: "Todos sabemos que los desaparecidos están muertos, pero un país no puede manejarse con fantasmas". 
              </p>

            </div>
{/* <div className='creditosContL'>
              <p className='creditos'>Foto: Festival B.A. Rock.
              </p>
              <a className='creditos' target='_blank' href="http://naveargenta.blogspot.com/2021/04/barock-82-varios-artistas-1983.html">Crédito: La Nave del Rock.</a>
            </div>  */}

          </div>

          {popCamps === true ?

<div className='popUp'>
  <button onClick={popCampsF} className='closeModal'>Cerrar</button>
  <p className='links infoCompTittle'>Información complementaria</p>
  Camps fue jefe de la Policía de la Provincia de Buenos y comandaba el Circuito Camps, una red constituida de 29 centros clandestinos de detención y tortura de la provincia de Buenos Aires. Fue responsable de las <Link className='links' target='_blank' to="https://youtu.be/0gKLpuGrlZA">desapariciones</Link> de <Link className='links' target='_blank' to="https://www.youtube.com/watch?v=kqZ9Qe3ocLI"> La Noche de los Lápices. </Link>



</div>

: <></>}



          <p className='linea1'></p>
          <p className='linea2'></p>
          <p className='linea3'></p>
          <p className='linea4'></p>

          <p className='linea6'></p>
          <a href='#elecciones' className='lineaFecha2'>IR  AL 28 DE ENERO DE 1983</a>
        </div>


        {/*
El esperado llamado a elecciones
  */}


<div id='elecciones' className='lineaItemCont'>
          <div className='textsCont'>
            <p className='lineaFecha'>1983</p>
            <span className='lineaItemSubTittle'>28/02/1983</span>
            <a href='#camps' className='volver2'>VOLVER A LA FECHA ANTERIOR</a>
            <button onClick={open} className='openLineButton2'>ABRIR LÍNEA DE TIEMPO</button>
            {/* <img className='lineImg imgAligRight' src="https://d5ofdvz67shaj.cloudfront.net/original/?url=https://cdn.radionacional.com.ar/wp-content/uploads/2021/12/marcha-multisectorial-510.jpg" alt="" /> */}
            <iframe width="450" height="270" src="https://www.youtube.com/embed/vaQfoXeq_Ys?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>El esperado llamado a elecciones

</p>
              <p className='lineaItemText'>
              Tras siete años de <Link className='links' target='_blank' to="https://youtu.be/v0v7vdZ32ig">dictadura</Link> que dejaron como consecuencia a 30.000 personas desaparecidas y miles <Link className='links' target='_blank' to="https://youtu.be/J-MnzgcghT4">exiliadas</Link>, el entonces presidente de facto Reynaldo Bignone habló por cadena nacional y anunció el llamado a elecciones generales. Presentó el cronograma electoral que le daría inicio al camino certero de retorno a la democracia. 


              </p>

            </div>

            <div className='creditosContL'>
            <p className='creditos'>Video: el llamado a elecciones.
            </p>
            <a className='creditos' target='_blank' href="https://www.radionacional.com.ar/a-39-anos-de-la-masiva-marcha-de-la-multipartidaria-contra-la-dictadura/">Crédito: La TV Pública.</a>
          </div>

          </div>


          <p className='linea1b'></p>
          <p className='linea2b'></p>
          <p className='linea3b'></p>
          <p className='linea4b'></p>

          <p className='linea6b'></p>
          <a href='#desapariciones' className='lineaFecha3'>IR  AL 29 DE ABRIL DE 1983</a>
        </div>

    {/* 
El documento que admitió las desapariciones  */}

<div id='desapariciones' className='lineaItemCont'>
          <a href='#elecciones' className='volver1'>VOLVER A LA FECHA ANTERIOR</a>
          <button onClick={open} className='openLineButton'>ABRIR LÍNEA DE TIEMPO</button>
          <div className='textsCont'>
            <p className='lineaFecha'>1983</p>
            <span className='lineaItemSubTittle'>29/04/1983</span>
            {/* <img className='lineImg' src="https://1.bp.blogspot.com/-SX3JfP3DhVU/YGPKtTXCP4I/AAAAAAAAPEw/K30CgB3284wn627fRx5jjGDT4leI3NnPwCLcBGAsYHQ/w409-h409/B.A.Rock%2B%252782%2B2%2B-%2BPortada.jpg" alt="" /> */}
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>El documento que admitió las desapariciones</p>
              <p className='lineaItemText'>
              Se difundió el <Link className='links' target='_blank' to="https://es.wikisource.org/wiki/Documento_Final_de_la_Junta_Militar_sobre_la_guerra_contra_la_subversi%C3%B3n_y_el_terrorismo#CONSIDERACIONES_FINALES">“Documento Final de la Junta Militar sobre la guerra contra la subversión y el terrorismo”</Link> que pretendía justificar la violencia estatal, negaba la existencia de centros clandestinos, descalificaba las denuncias sobre desapariciones, no obstante afirmaba que “se considera muertos” a los desaparecidos.
              </p>

            </div>
{/* <div className='creditosContL'>
              <p className='creditos'>Foto: Festival B.A. Rock.
              </p>
              <a className='creditos' target='_blank' href="http://naveargenta.blogspot.com/2021/04/barock-82-varios-artistas-1983.html">Crédito: La Nave del Rock.</a>
            </div>  */}

          </div>

          <p className='linea1'></p>
          <p className='linea2'></p>
          <p className='linea3'></p>
          <p className='linea4'></p>

          <p className='linea6'></p>
          <a href='#autoanmistia' className='lineaFecha2'>IR  AL 20 DE AGOSTO DE 1983</a>
        </div>



        {/*
Marcha contra la autoamnistía
  */}


<div id='autoanmistia' className='lineaItemCont'>
          <div className='textsCont'>
            <p className='lineaFecha'>1983</p>
            <span className='lineaItemSubTittle'>20/08/1983</span>
            <a href='#desapariciones' className='volver2'>VOLVER A LA FECHA ANTERIOR</a>
            <button onClick={open} className='openLineButton2'>ABRIR LÍNEA DE TIEMPO</button>
            {/* <img className='lineImg imgAligRight' src="https://d5ofdvz67shaj.cloudfront.net/original/?url=https://cdn.radionacional.com.ar/wp-content/uploads/2021/12/marcha-multisectorial-510.jpg" alt="" /> */}

            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>Marcha contra la autoamnistía
</p>
              <p className='lineaItemText'>
              Una movilización multitudinaria rechazó la sanción de una ley de <Link className='links' target='_blank' to="https://youtu.be/6JysP5bFtrI">autoamnistía</Link> de la Junta Militar de la cual participaron integrantes de todos los partidos políticos, organizaciones de DDHH, representantes de la iglesia y millares de personas sin organización.

              </p>

            </div>
{/* 
            <div className='creditosContL'>
            <p className='creditos'>Foto: el llamado a elecciones.
            </p>
            <a className='creditos' target='_blank' href="https://www.radionacional.com.ar/a-39-anos-de-la-masiva-marcha-de-la-multipartidaria-contra-la-dictadura/">Crédito: La TV Pública.</a>
          </div> */}

          </div>


          <p className='linea1b'></p>
          <p className='linea2b'></p>
          <p className='linea3b'></p>
          <p className='linea4b'></p>

          <p className='linea6b'></p>
          <a href='#elecciones2' className='lineaFecha3'>IR  AL 30 DE OCTUBRE DE 1983</a>
        </div>


    {/* 
¡Argentina volvió a votar! */}

<div id='elecciones2' className='lineaItemCont'>
          <a href='#autoanmistia' className='volver1'>VOLVER A LA FECHA ANTERIOR</a>
          <button onClick={open} className='openLineButton'>ABRIR LÍNEA DE TIEMPO</button>
          <div className='textsCont'>
            <p className='lineaFecha'>1983</p>
            <span className='lineaItemSubTittle'>30/10/1983</span>
            <img className='lineImg' src="https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2022/12/639334d1d353d_655.jpg" alt="" />
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>¡Argentina volvió a votar!</p>
              <p className='lineaItemText'>
              Se realizaron las <Link className='links' target='_blank' to="https://educacionymemoria.github.io/Dia-de-la-Restauracion-de-la-Democracia/">elecciones</Link> y para muchísimas personas de más de 25 años fue su primera experiencia electoral. La presidencia la ganó la fórmula Raúl Alfonsín-Víctor Martínez, de la Unión Cívica Radical, que recibió el 51,75% de los votos.  
              </p>

            </div>
<div className='creditosContL'>
              <p className='creditos'>Foto: Los comicios de 1983.
              </p>
              <a className='creditos' target='_blank' href="https://www.telam.com.ar/especial-democracia-40-anios">Crédito: Agencia Télam.</a>
            </div> 

          </div>

          <p className='linea1'></p>
          <p className='linea2'></p>
          <p className='linea3'></p>
          <p className='linea4'></p>

          <p className='linea6'></p>
          <a href='#resultados' className='lineaFecha2'>RESULTADO DE LAS ELECCIONES</a>
        </div>

        {/*
Marcha contra la autoamnistía
  */}


<div id='resultados' className='lineaItemCont'>
          <div className='textsCont'>
            <p className='lineaFecha'>1983</p>
            <span className='lineaItemSubTittle'>20/08/1983</span>
            <a href='#elecciones2' className='volver2'>VOLVER A LA FECHA ANTERIOR</a>
            <button onClick={open} className='openLineButton2'>ABRIR LÍNEA DE TIEMPO</button>
            <img className='lineImgG' src="https://www.argentina.gob.ar/sites/default/files/00-presidente_vice_30_octubre_1983-totalpais_0.png" alt="" />

            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'> El resultado de las elecciones
</p>
              <p className='lineaItemText'>
              La fórmula Alfonsín - Martínez obtiene el triunfo en las elecciones de 1983 con el 51,75% de los fotos.

              </p>

            </div>

            <div className='creditosContL'>
            <p className='creditos'>Foto: Resultados de las elecciones nacionales de 1983.
            </p>
            <a className='creditos' target='_blank' href="https://www.argentina.gob.ar/interior/dine/resultadosyestadisticas/1983#4">Crédito: Dirección Nacional Electoral.</a>
          </div>

          </div>


          <p className='linea1b'></p>
          <p className='linea2b'></p>
          <p className='linea3b'></p>
          <p className='linea4b'></p>

          <p className='linea6b'></p>
          <a href='#asuncion' className='lineaFecha3'>IR  AL 10 DE DICIEMBRE DE 1983</a>
        </div>




    {/* 
Asumió la presidencia Raúl Alfonsín */}

<div id='asuncion' className='lineaItemCont'>
          <a href='#resultados' className='volver1'>VOLVER A LA FECHA ANTERIOR</a>
          <button onClick={open} className='openLineButton'>ABRIR LÍNEA DE TIEMPO</button>
          <div className='textsCont'>
            <p className='lineaFecha'>1983</p>
            <span className='lineaItemSubTittle'>10/12/1983</span>
            <img className='lineImg' src="https://www.elhistoriador.com.ar/wp-content/uploads/2017/11/alfonsin_democracia_argentina_g-1.jpg" alt="" />
            <div className='columnaLineaTexts'>
              <p className='lineaItemTittle'>Asumió la presidencia Raúl Alfonsín</p>
              <p className='lineaItemText'>
              La República Argentina recuperó la democracia y el funcionamiento institucional. En un acto multitudinario Alfonsín dió un <Link className='links' target='_blank' to="https://www.youtube.com/watch?v=gTRQi6aTOQY">histórico discurso</Link>
 desde el Cabildo, frente a la Plaza de Mayo. También reanudó la actividad en el Congreso de la Nación, que había sido cerrado tras el golpe de Estado y reemplazado por la Comisión de Asesoramiento Legislativo.
              </p>

            </div>
<div className='creditosContR'>
              <p className='creditos'>Foto: Asunción del presidente Raúl Alfonsín.
              </p>
              <a className='creditos' target='_blank' href="https://www.elhistoriador.com.ar/raul-alfonsin-tenemos-un-metodo-la-democracia-para-la-argentina-tenemos-un-combate-vencer-a-quienes-desde-adentro-o-desde-afuera-quieren-impedir-esa-democracia/">Crédito: El Historiador.</a>
            </div> 

          </div>

          <p className='linea1'></p>
          <p className='linea2'></p>
          <p className='linea3'></p>
 
          <a href='#inicio' className='lineaFecha2'>VOLVER AL INICIO</a>
        </div>
















        {openLinea === true ?
          <div className='todalalinea'>
            <button onClick={close} className='openLineButtonInv'>CERRAR LÍNEA DE TIEMPO</button>
            <img className='grain' src="https://firebasestorage.googleapis.com/v0/b/coqueteria-b7812.appspot.com/o/default%2Fgrain.jpg?alt=media&token=08bce4fa-4ab5-4f87-ada4-611e4230acb3" alt="" />
            <p className='todalalineaItemTittle'> Un recorrido hacia la democracia </p>

            <div className='alignLeft'>

            <div className='todalalineaRow'>
              <p className='anioTodaLaLinea'>1976</p>
              <a href='#1977' onClick={close} className='todalalineaYear'>
                <p className='todalalineaYearText bggrey'>01/09/1976</p>
                <p className='todalalineaYearText'>Nace la organización de derechos humanos Familiares de Detenidos y Desaparecidos por Razones Políticas</p>
                </a>
    
            </div>

            
            <div className='todalalineaRow'>
              <p className='anioTodaLaLinea'>1977</p>
              <a href='#1977' onClick={close} className='todalalineaYear'>
                <p className='todalalineaYearText bggrey'>30/04/1977</p>
                <p className='todalalineaYearText'>Surgen las agrupaciones  de Madres y Abuelas de Plaza de Mayo</p>
              </a>

              <a href='#1977' onClick={close} className='todalalineaYear'>
                <p className='todalalineaYearText bggrey'>01/06/1978</p>
                <p className='todalalineaYearText'>El Mundial expone la dictadura ante el mundo</p>
              </a>

     
            </div>

            <div className='todalalineaRow'>
              <p className='anioTodaLaLinea'>1978</p>
              <a href='#1977' onClick={close} className='todalalineaYear'>
                <p className='todalalineaYearText bggrey'>30/04/1977</p>
                <p className='todalalineaYearText'>Surgen las agrupaciones  de Madres y Abuelas de Plaza de Mayo</p>
              </a>

              <a href='#1977' onClick={close} className='todalalineaYear'>
                <p className='todalalineaYearText bggrey'>01/06/1978</p>
                <p className='todalalineaYearText'>El Mundial expone la dictadura ante el mundo</p>
              </a>

              <a href='#1977' onClick={close} className='todalalineaYear'>
                <p className='todalalineaYearText bggrey'>01/06/1978</p>
                <p className='todalalineaYearText'>El Mundial expone la dictadura ante el mundo</p>
              </a>
              <a href='#1977' onClick={close} className='todalalineaYear'>
                <p className='todalalineaYearText bggrey'>01/06/1978</p>
                <p className='todalalineaYearText'>El Mundial expone la dictadura ante el mundo</p>
              </a>

              <a href='#1977' onClick={close} className='todalalineaYear'>
                <p className='todalalineaYearText bggrey'>01/06/1978</p>
                <p className='todalalineaYearText'>El Mundial expone la dictadura ante el mundo</p>
              </a>
     
            </div>

            <div className='todalalineaRow'>
              <p className='anioTodaLaLinea'>1979</p>
              <a href='#1977' onClick={close} className='todalalineaYear'>
                <p className='todalalineaYearText bggrey'>30/04/1977</p>
                <p className='todalalineaYearText'>Surgen las agrupaciones  de Madres y Abuelas de Plaza de Mayo</p>
              </a>

              <a href='#1977' onClick={close} className='todalalineaYear'>
                <p className='todalalineaYearText bggrey'>01/06/1978</p>
                <p className='todalalineaYearText'>El Mundial expone la dictadura ante el mundo</p>
              </a>

              <a href='#1977' onClick={close} className='todalalineaYear'>
                <p className='todalalineaYearText bggrey'>01/06/1978</p>
                <p className='todalalineaYearText'>El Mundial expone la dictadura ante el mundo</p>
              </a>

              <a href='#1977' onClick={close} className='todalalineaYear'>
                <p className='todalalineaYearText bggrey'>01/06/1978</p>
                <p className='todalalineaYearText'>El Mundial expone la dictadura ante el mundo</p>
              </a>

     
            </div>

            <div className='todalalineaRow'>
              <p className='anioTodaLaLinea'>1980</p>
              <a href='#1977' onClick={close} className='todalalineaYear'>
                <p className='todalalineaYearText bggrey'>30/04/1977</p>
                <p className='todalalineaYearText'>Surgen las agrupaciones  de Madres y Abuelas de Plaza de Mayo</p>
              </a>

              <a href='#1977' onClick={close} className='todalalineaYear'>
                <p className='todalalineaYearText bggrey'>01/06/1978</p>
                <p className='todalalineaYearText'>El Mundial expone la dictadura ante el mundo</p>
              </a>


              <a href='#1977' onClick={close} className='todalalineaYear'>
                <p className='todalalineaYearText bggrey'>01/06/1978</p>
                <p className='todalalineaYearText'>El Mundial expone la dictadura ante el mundo</p>
              </a>


              <a href='#1977' onClick={close} className='todalalineaYear'>
                <p className='todalalineaYearText bggrey'>01/06/1978</p>
                <p className='todalalineaYearText'>El Mundial expone la dictadura ante el mundo</p>
              </a>
     
            </div>

          </div>
          </div> : <></>


        }



      </div>



    </BrowserRouter>
  )

}

export default App;
