import Link from "next/link";
import style from '../style/button.module.css';

const Button = ({
  title,
  linkingTo,
  height,
  width
}) => {
  return ( 
    <div className = {style.button}
    style = {
      {
        height: height,
        width: width,
      }
    }>
      <Link className = {style.link} href = {linkingTo}> 
        {
          title
        } 
      </Link> 
    </div>
  )
}

export default Button;