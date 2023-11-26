'use client'

import style from '../style/frontPage.module.css';
import Image from 'next/image';

import isologo from '../public/icons/isologo.png'
import Button from './Button';
import { usePathname } from 'next/navigation';

const FrontPage = ({background, TitleOfGame, descriptionGame, iconOfGame }) => {

  const routeCurrent = usePathname();

  return (
    <section className={style.frontPage}>
      <Image
        className={style.background}
        src={background}
        alt='isologo OrcaGames'
      />

      {
        (routeCurrent == '/') ? 
        (
          <div className={style.container}>
            <div className={style.isologo}>
              <Image
                className={style.image}
                src={isologo}
                height={130}
                alt='background'
              />

              <h1 className={style.title}>
                Orco 
                <br/>
                Games 
                <br/>
                <span>Studio</span>
              </h1>
            </div>

            <p className={style.parrafo}>
              Descubre nuestros emocionantes juegos que te transportarán a mundos inexplorados. ¿Estás listo para desatar tu lado jugador y sumergirte en experiencias únicas? ¡Únete a la diversión ahora!"
            </p>

            <div className={style.containerButtons}>
              <Button
                linkingTo='/contact'
                title='Contacto'

              />

              <Button
                linkingTo='/about'
                title='Sobre nosotros'
              />
            </div>

          </div>
        ) 
        : 
        (
          <div className={style.containerInfoGame}>
            <div className={style.containerTxtGame}>
              <h1 className={style.titleGame}>
                {TitleOfGame}
              </h1>
              
              <p className={style.parrafoGame}>
                {descriptionGame}
              </p>
            </div>

            <div className={style.containerIconGame}>
              <Image 
                className={style.iconImg}
                src={iconOfGame}
                height={150}
              />
            </div>
          </div>
        )
      }
      
    </section>
  )
}

export default FrontPage;