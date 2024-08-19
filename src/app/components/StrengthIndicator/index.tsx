import styles from "./StrengthIndicator.module.scss"
import React, {useEffect, useState} from "react";


interface StrengthIndicatorProps {
    value: number
}

type StrengthIndicatorBarsProps = StrengthIndicatorProps

enum StrengthState {
    TOO_WEAK = 'TOO WEAK!',
    WEAK = 'WEAK',
    MEDIUM = 'MEDIUM',
    STRONG = 'STRONG'
}

const StrengIndicatorBars: React.FC<StrengthIndicatorBarsProps> = ({value}) => {
    switch (value) {
        case 1:
            return <>
                <div className={styles.barTooWeak}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </>
        case 2:
            return <>
                <div className={styles.barWeak}></div>
                <div className={styles.barWeak}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </>
        case 3:
            return <>
                <div className={styles.barMedium}></div>
                <div className={styles.barMedium}></div>
                <div className={styles.barMedium}></div>
                <div className={styles.bar}></div>
            </>
        case 4:
            return <>
                <div className={styles.barStrong}></div>
                <div className={styles.barStrong}></div>
                <div className={styles.barStrong}></div>
                <div className={styles.barStrong}></div>
            </>

        default:
            return <>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </>
    }
}

const StrengthIndicator: React.FC<StrengthIndicatorProps> = ({value}) => {
    const [strengthState, setStrengthState] = useState(StrengthState.TOO_WEAK)

    useEffect(() => {
        switch (value) {
            case 1:
                setStrengthState(StrengthState.TOO_WEAK);
                break;
            case 2:
                setStrengthState(StrengthState.WEAK);
                break;
            case 3:
                setStrengthState(StrengthState.MEDIUM);
                break;
            case 4:
                setStrengthState(StrengthState.STRONG);
                break;
        }
    }, [value]);
    return (
        <div className={styles.strengthIndicatorContainer}>
            <div className={styles.strengIndicatorTitle}>
                STRENGTH
            </div>
            <div className={styles.strengIndicator}>
                <div className={styles.strengIndicatorLabel}>{strengthState}</div>
                <div className={styles.strengIndicatorBars}>
                    <StrengIndicatorBars value={value}/>
                </div>
            </div>
        </div>
    )
}

export default StrengthIndicator
