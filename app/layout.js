export const metadata = {
  title: 'Orco Games Studio',
  description: 'Descubre nuestros emocionantes juegos que te transportarán a mundos inexplorados. ¿Estás listo para desatar tu lado jugador y sumergirte en experiencias únicas? ¡Únete a la diversión ahora!',
}

//components
import Footer from '../components/Footer';
import Header from '../components/Header';

import '../style/global.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
