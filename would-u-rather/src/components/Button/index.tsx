import React from 'react'

type ButtonProps = {
    onClick: () => void,
    children: React.ReactNode; 
}

function Button(props: ButtonProps) {
  return (
    <Button onClick={props.onClick}>{props.children}</Button>
  )
}

export default Button