'use client'

import style from '../style/footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Redes from './Redes';
import logoFooter from '../public/icons/logofooter.png'
import registerMail from '../utility/registerMail.js';
import PulseLoader from 'react-spinners/PulseLoader'
import {useState} from 'react';

const Footer = () => {

  const [register, setRegister] = useState({})

  const handlerClick = async (event) => {
    event.preventDefault()

    setRegister(null)

    const res = await registerMail()

    setRegister(res)

    setTimeout(() => {
      setRegister({})
    }, 2000);
  }

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <section className={style.newsletter}>
          <h3>Newsletter</h3>
          <p>
            ¡No te pierdas las últimas novedades!
            Al suscribirte, recibirás en tu bandeja de entrada información valiosa sobre futuros proyectos.
            Agradecemos tu interés. Atentamente, Orco Games.
          </p>

          <form onSubmit={handlerClick}>
            <input id='mail' placeholder='Correo Electrónico'/>
            <button type="submit">Suscribirme</button>
          </form>

          <div className={style.message}>
            {
              (register == null) ? (
                <PulseLoader color="#ffff00" />
              ) : (
                <span style={{color: 'white'}}>
                  {register.message}  
                </span>
              )
            }
          </div>
        </section>

        <section className={style.footerSeccion}>
          <div className={style.logoContainer}> 
            <Image
              src={logoFooter}
              height={70}
              alt='logo_orco-games_footer'
            />
          </div>

          <div className={style.follow}>
            <span>Seguinos en</span>
            <Redes/>
          </div>
        </section>

        <section className={style.creditos}>
          <span>
            Hecho por<Link href="https://www.facebook.com/"> Orlando Prieto</Link>.
          </span>
        </section>
      </div>
    </footer>
  )
}

export default Footer;

