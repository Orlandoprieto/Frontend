import Input from "../../components/Input"
import style from '../../style/seccionForm.module.css'

const ContactPage = () => {
  return ( 
    <section className={style.sectionForm}>
      <h2 className={style.title}>¿Alguna pregunta?</h2> 

      <form className={style.formContact}>
        <Input 
          
          type='text'
          label='¿Cual es tu nombre?'
          id='contact_nombre'
        />

        <Input 
          
          type='text'
          label='¿Cual es tu apellido?'
          id='contact_apellido'
        />

        <Input 
          
          type='mail'
          label='Dirección de correo electronico'
          id='contact_mail'
        />

        <Input   
          isTextarea={true}
          type='text'
          label='Aquí tu mensaje'
          id='contact_mensaje'
        />

        <button className={style.submit} type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default ContactPage