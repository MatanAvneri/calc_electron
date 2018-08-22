import React from 'react'
import './style.css'

const Button = ({children, operation, className}) => {
    const classes = ['button', className].join(' ')
    return (
        <div data-op={operation} className={classes}>
            {children}
        </div>
    )
}

export default Button
