//components
import ButtonGooglePlay from "./ButtonGooglePlay"

import style from '../style/downloadGame.module.css'

const DownloadGame = ({linkingTo, parrafo}) => {
  return (
    <section className={style.downloadGame}>
            <div className={style.containerDownload}>
              <div className={style.txt}>
                <h2 className={style.title}>¡Descárgalo desde Google Play!</h2>
                <p className={style.parrafo}>{parrafo}</p>
              </div>

              <div className={style.containerIconGp}>
                <ButtonGooglePlay
                  linkingTo={linkingTo}
                />
              </div>
            </div>
    </section>
  )
}

export default DownloadGame