'use client'

import Image from 'next/image';
import style from '../style/header.module.css';
import Link from 'next/link';

import logo from '../public/icons/logo.png'
import Redes from './Redes';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {


const [scroll, setScroll] = useState(0);

const routeActive = usePathname()

useEffect(() => {
  window.addEventListener('scroll', () => {
    setScroll(window.scrollY)
  })
}, [])

  return ( 
    (routeActive == '/') ? (
      <header className={(scroll == 0 ? style.headerHidden : style.header)}>
      <div className={style.header_container}>
        <div className={style.containerlogo}>
            <Link href='/'>
              <Image
                src={logo}
                alt='logo'
                height={40}
              />
            </Link>
        </div>

        <nav className={style.nav}>
          <ul className={style.list}>
            <li className={style.routes} key={0}>
              <Link className={style.link} href='/contacto'>
                Contacto
              </Link>
            </li>

            <li className={style.routes} key={1}>
              <Link className={style.link} href='/about'>
                Nosotros
              </Link>
            </li>

            <li className={style.redes} key={2}>
              <Redes/>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    ) : (
      <header className={style.headerStatic}>
      <div className={style.header_container}>
        <div className={style.containerlogo}>
            <Link href='/'>
              <Image
                src={logo}
                alt='logo'
                height={40}
              />
            </Link>
        </div>

        <nav className={style.nav}>
          <ul className={style.list}>
            <li className={style.routes} key={0}>
              <Link className={style.link} href='/contacto'>
                Contacto
              </Link>
            </li>

            <li className={style.routes} key={1}>
              <Link className={style.link} href='/about'>
                Nosotros
              </Link>
            </li>

            <li className={style.redes} key={2}>
              <Redes/>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    )
  )
}

export default Header;