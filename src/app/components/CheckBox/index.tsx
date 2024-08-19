import styles from "./CheckBox.module.scss"
import React from "react"

interface CheckBoxProps extends React.HTMLProps<HTMLInputElement> {
    label: string
}

const CheckBox: React.FC<CheckBoxProps> = ({type, label, onChange, value, checked, ...props}) => {
    return (
        <label className={styles.checkBoxLabel}>
            <input type={'checkbox'} value={value} onChange={onChange} checked={checked} {...props}/>
            {label}
        </label>
    )
}

export default CheckBox