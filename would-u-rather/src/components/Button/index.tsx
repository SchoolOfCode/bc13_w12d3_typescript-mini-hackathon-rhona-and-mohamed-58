import React from 'react'

type ButtonProps = {
  onClick: () => void,
  text: string;
}

function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

export default Button