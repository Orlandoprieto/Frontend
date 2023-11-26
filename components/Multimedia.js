import Image from "next/image";

import style from '../style/multimedia.module.css'

const Multimedia = ({linkVideo, imagenes}) => {
    if(Array.isArray(imagenes) == false) throw new Error('parametro imagenes debe ser un array')
    if(imagenes.length < 3) throw new Error('el array debe tener almenos tres elementos')

    return(
        <section className = {style.multimedia}>
            <div className = {style.containerMultimedia} >

                <div className={style.containervideo}>
                    <iframe 
                        className={style.video}
                        src={linkVideo} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                    />
                </div>

                <div className ={style.imagenes}>
                    {
                        imagenes.map(imagen => {
                            return (
                                <div className={style.containerImg}>
                                    <Image
                                        className={style.imagen}
                                        src={imagen.img}
                                        key={"imagen_del_juego" + imagen.id}
                                        alt="image_the_game"
                                    />
                                </div>
                            )
                        })
                    }

                    
                </div> 
            </div> 
        </section>
    )
}

export default Multimedia;