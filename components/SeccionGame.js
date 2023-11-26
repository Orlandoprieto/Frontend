import Image from 'next/image';
import style from '../style/seccionGames.module.css'
import Button from './Button';
import ButtonGooglePlay from './ButtonGooglePlay';

const SeccionGame = ({
  title,
  parrafo,
  pageGame,
  linkGooglePlay,
  img
}) => {
  return ( 
    <section className={style.seccionGame}>
      <div className={style.container}>
        <div className={style.infoJuego}>
          <h2>{title}</h2>
          <p>{parrafo}</p>
          
          <div className={style.containerButtons}>
            <Button 
              title='Ver mas'
              linkingTo={pageGame}
              
            />

            <ButtonGooglePlay
              linkingTo={linkGooglePlay}
            />
          </div>    
        </div>

        <div className={style.containerImg}>
          <Image
            className={style.img}
            src={img}
          />
        </div>
      </div>
    </section>
  )
}

export default SeccionGame;