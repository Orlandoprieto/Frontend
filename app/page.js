import FrontPage from "../components/FrontPage";
import SeccionGame from "../components/SeccionGame";
import backgroundFrontPage from '../public/img/backgroundFrontPage.jpg'

import imgInterrupted from '../public/img/interrup_Portada.png'

const MainPage = () => {
  return ( 
    <main >
      <FrontPage
        background={backgroundFrontPage}
      />
      
      <SeccionGame
        title='Interrupted Scan'
        parrafo='Vivirás la adrenalina de aventurarte en lo desconocido, sintiendo la responsabilidad de la humanidad sobre tus hombros. ¿Podrás superar los obstáculos y guiar a la humanidad hacia un futuro prometedor?'
        pageGame='/interrupted-scan'
        linkGooglePlay='https://play.google.com/store/apps/details?id=com.OrcoGamesStudio.InterruptedScan'
        img={imgInterrupted}
      />

    </main>
  )
}

export default MainPage;