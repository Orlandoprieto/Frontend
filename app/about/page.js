import style from "../../style/aboutUs.module.css";

import Image from "next/image";

import eye from "../../public/icons/eye-outline.png";
import compromiso from "../../public/icons/compromiso.png";

const About = () => {
    return (
        <main>
            <div className={style.container}>
                <h1>Sobre nosotros</h1>

                <p>¡Bienvenido a Orco Games!
                    Somos un estudio entusiasta del mundo de los videojuegos, creado en el año 2023. Nos encontramos en Lomas de Zamora, Buenos Aires, Argentina, donde canalizamos nuestra pasión y dedicación para crear experiencias de juego únicas.
                </p>
            </div>

            <div className={style.container}>
                <Image
                    className={style.img}
                    src={compromiso}
                    height={100}
                    alt="img_compromiso"
                />

                <h2>Nuestro Compromiso</h2>

                <p>
                    En cada proyecto que emprendemos, nos esforzamos por ofrecer juegos de alta calidad que resalten por su originalidad, jugabilidad envolvente y narrativas cautivadoras. Valoramos la retroalimentación de nuestros jugadores y la comunidad, ya que nos impulsa a mejorar constantemente y a crear experiencias que realmente conecten con ellos.
                </p>
            </div>

            <div className={style.container}>
                <Image
                    className={style.img}
                    src={eye}
                    height={100}
                    alt="img_vision"
                />

                <h2>Nuestra Visión</h2>

                <p>
                    Nuestra visión es convertirnos en un referente reconocido en la industria de los videojuegos, tanto a nivel local como internacional. Aspiramos a establecer relaciones duraderas con nuestros jugadores, basadas en la confianza, la calidad y la innovación. Queremos inspirar a la comunidad gamer con cada proyecto que desarrollamos.
                </p>
            </div>
        </main>
    )
}

export default About;