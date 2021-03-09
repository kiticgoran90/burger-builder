import React from 'react'
import classes from './Button.module.css'

const Button = (props) => (
    <button
        disabled={props.disabled} 
        className={[classes.Button, classes[props.btnType]].join(' ')}      // example className={'Button Success'}
        onClick={props.clicked}
    >
        {props.children}
    </button>
)

export default Button
