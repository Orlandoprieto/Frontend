import style from '../style/footer.module.css';

import Image from 'next/image';
import Link from 'next/link';

import Redes from './Redes';

import logoFooter from '../public/icons/logofooter.png'

const Footer = () => {
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

          <form action="">
            <input  placeholder='Email address' type="email"/>
            <button type="submit">Suscribirme</button>
          </form>
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

