import './Button.css'

function Button(props) {

  let {nr} = props
 
  if (nr > 100) {
      nr -= 50
  }

  return (
    <div className = "react-button"> Button {nr} </div>
  )
}

export default Button
