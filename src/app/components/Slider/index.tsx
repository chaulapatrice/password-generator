import React, {useRef, useEffect} from "react";
import styles from "./Slider.module.scss"


interface SliderProps extends React.HTMLProps<HTMLInputElement> {
    value: number
    onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void
    min: number,
    max: number
}

const Slider: React.FC<SliderProps> = ({type, value, onChange, ...props}) => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        const input = inputRef.current;
        if (!input) {
            return;
        }
        input.style.backgroundSize =  `${((value - input.min) / (input.max - input.min)) * 100}% 100%`
    }, [inputRef.current?.value]);

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderInfo}>
                <div className={styles.sliderLabel}>
                    Character Length
                </div>
                <div className={styles.sliderValue}>
                    {value}
                </div>
            </div>
            <div className={styles.slider}>
                <input ref={inputRef} type={'range'}  {...props} value={value} onChange={onChange}
                       className={styles.slider}/>
            </div>
        </div>
    )
}

export default Slider