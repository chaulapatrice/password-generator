import styles from "./Card.module.scss"

import React from "react";

interface CardProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode
}

const Card: React.FC<CardProps> = ({children, ...props}) => {
    return <div {...props} className={styles.card}>{children}</div>
}

export default Card