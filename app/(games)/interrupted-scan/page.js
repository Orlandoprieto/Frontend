//componenets
import FrontPage from "../../../components/FrontPage";
import Multimedia from "../../../components/Multimedia";

//imagenes
import img_a from '../../../public/img/Screenshot_20231105_172508.jpeg';
import img_b from '../../../public/img/Screenshot_20231105_173215.jpeg';
import img_c from '../../../public/img/Screenshot_20231105_173456.jpeg';
import IconInterruptedScan from '../../../public/icons/IconInterruptedScan.jpg';
import backgroudImg from '../../../public/img/portada interrupted scan.jpg';

import DownloadGame from "../../../components/DownloadGame";


const InterruptedScanPage = () => {

   const img = [
      {
         id: 1,
         img: img_a,
      },
      {
         id: 2,
         img: img_b,
      },
      {
         id: 3,
         img: img_c,
      },
   ]
      
   return ( 
      <main >
         <FrontPage 
            background = { backgroudImg }
            TitleOfGame = 'Interrupted Scan'
            descriptionGame = 'Con la Tierra enfrentando desafíos insalvables, la única esperanza para la supervivencia de nuestra especie radica en buscar nuevos planetas habitables. Sin embargo, un enjambre de meteoritos amenaza constantemente nuestras misiones, poniendo en peligro nuestro destino.'
            iconOfGame = {IconInterruptedScan}
         />

         <Multimedia 
            linkVideo='https://www.youtube.com/embed/vCrt6BxTXV4?si=XFptXdlKquQugIkV'
            imagenes={img}
         />

         <DownloadGame
            linkingTo='https://play.google.com/store/apps/details?id=com.OrcoGamesStudio.InterruptedScan'
            parrafo='¿Estás listo para salvar a la humanidad y explorar las estrellas? ¡Descarga nuestro juego, enfrenta la furia de los meteoritos y forja un nuevo futuro para la humanidad en planetas inexplorados! El destino de la humanidad está en tus manos.'
         />

      </main>
   )
}

export default InterruptedScanPage;