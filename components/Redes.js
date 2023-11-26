import Image from 'next/image';
import Link from 'next/link';
import style from '../style/redes.module.css';

import logo_instagram from '../public/icons/logo-instagram.png';
import logo_facebook from '../public/icons/logo-facebook.png';
import logo_youTube from '../public/icons/logo-youtube.png';

const redesSociales = [
  {
    icon: logo_instagram,
    link: 'https://www.instagram.com/',
    alt: 'logo_instagram',
    id:0
  },
  {
    icon: logo_facebook,
    link: 'https://www.facebook.com/',
    alt: 'logo_facebook',
    id:1
  },
  {
    icon: logo_youTube,
    link: 'https://www.youtube.com/',
    alt: 'logo_youTube',
    id:2
  }
]


const Redes = () => {

  return(
    <ul className={style.container}>
      {
        redesSociales.map(redSocial => {
          
          return(
            <li className={style.red}>
              <Link target='_blank' href={redSocial.link}>
                <Image
                  src={redSocial.icon}  
                  alt={redSocial.alt}  
                  height={26}
                  key={"redes" + redSocial.id}
                />
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Redes;