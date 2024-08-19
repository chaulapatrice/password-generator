import styles from "./TextField.module.scss"
import React from "react"


interface TextFieldProps extends React.HTMLProps<HTMLInputElement> {
    type?: 'text' | 'email' | 'password',
    startAdornment?: React.ReactNode,
    endAdornment?: React.ReactNode
}

const TextField: React.FC<TextFieldProps> = ({type = 'text', startAdornment, endAdornment, ...props}) => {
    return (
        <div className={styles.textFieldContainer}>
            {startAdornment && <span className={styles.startAdornment}>{startAdornment}</span>}
            <input type={type} {...props}/>
            {endAdornment && <span className={styles.startAdornment}>{endAdornment}</span>}
        </div>)
}

export default TextField