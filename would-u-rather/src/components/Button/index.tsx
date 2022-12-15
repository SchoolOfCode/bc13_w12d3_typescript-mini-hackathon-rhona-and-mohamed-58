import React from 'react'

type ButtonProps = {
  onClick: () => void,
  text: string;
  className: string
}

function Button(props: ButtonProps ) {
  return (
    <button className={props.className} onClick={props.onClick}>{props.text}</button>
  )
}

export default Button