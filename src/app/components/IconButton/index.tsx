"use client"
import React from "react";
import styles from './IconButton.module.scss'

interface IconButtonProps extends React.HTMLProps<HTMLButtonElement> {
    children: React.ReactNode
}

const IconButton: React.FC<IconButtonProps> = ({children, ...props}) => {
    return (
        <button className={styles.btn} {...props}>
            {children}
        </button>
    )
}

export default IconButton