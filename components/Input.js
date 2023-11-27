import style from '../style/input.module.css'

const Input = ({ type, id, label, isTextarea}) => {
  return (
    <div className={style.container}>
      <label className={style.label} for={id}>{label}</label>
      {
        (!isTextarea) ? (
          <input 
            className={style.input} 
            id={id} 
            type={type}></input>
        ) : (
          <textarea 
            className={style.textarea} 
            id={id} 
            type={type}></textarea>
        )
      }
      
    </div>
  )
}

export default Input