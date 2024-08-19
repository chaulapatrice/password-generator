"use client"
import React from "react";
import styles from "./Button.module.scss"

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    children: React.ReactNode,
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({children, startIcon, endIcon, ...props}) => {
    return <button className={styles.btn} {...props}>
        {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
        {children}
        {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
    </button>
}

export default Button