import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian ? "Vegetarian" : "Not Vegetarian"}</td>
      <td><button onClick={() => props.editPizza(props.id)} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
