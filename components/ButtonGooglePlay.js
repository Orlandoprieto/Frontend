import Link from "next/link";
import style from '../style/button.module.css';
import Image from "next/image";

import badge_Google_play from '../public/icons/google-play-badge.png';

const ButtonGooglePlay = ({linkingTo}) => {
  return ( 
    <div className = {style.googlePlay}>
      <Link target="_blank" className={style.link} href={linkingTo}> 
        <Image
          src={badge_Google_play}
          height={40}
          alt='logo_Google_play'
        /> 
      </Link> 
    </div>
  )
}

export default ButtonGooglePlay;