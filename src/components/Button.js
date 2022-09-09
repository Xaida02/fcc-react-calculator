import React from "https://cdn.skypack.dev/react@17.0.1";
import '../stylesheets/Button.css';





function Button(props) {

    const isOperator = str => str.match(/^[-+*/%]/);

    return ( 
      <div onClick={ () => props.handleClick(props.children)} id={props.id} className={`button-container ${isOperator(props.children)? 'operator' : "" }`.trimEnd()} >
          {props.children}
      </div>
    )
}


export default Button