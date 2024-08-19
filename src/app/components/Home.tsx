"use client"
import React, {useEffect, useState} from "react"
import Button from "@/app/components/Button";
import ArrowRightIcon from "@/app/components/icons/ArrowRightIcon";
import Slider from "./Slider"
import StrengthIndicator from "@/app/components/StrengthIndicator";
import CheckBox from "@/app/components/CheckBox";
import TextField from "@/app/components/TextField";
import IconButton from "@/app/components/IconButton";
import CopyIcon from "@/app/components/icons/CopyIcon";
import Card from "@/app/components/Card";
import {getColor} from "@/app/constants/color";
import styles from "./Home.module.scss"

interface HomeProps {
    children: React.ReactNode
}

type CharacterType = 'uppercase' | 'lowercase' | 'number' | 'symbol'
const randomBetween = (min, max): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomNumber = (max): number => {
    return Math.floor(Math.random() * max)
}
const Home: React.FC<HomeProps> = ({children}) => {
    const [password, setPassword] = useState<string>('')
    const [passwordLength, setPasswordLength] = useState(8)
    const [passwordStrength, setPasswordStrength] = useState(0)
    const [hasUppercaseLetters, setHasUppercaseLetters] = useState(false)
    const [hasLowercaseLetters, setHasLowercaseLetters] = useState(false)
    const [hasNumbers, setHasNumbers] = useState(false)
    const [hasSymbols, setHasSymbols] = useState(false)
    const [copiedPassword, setCopiedPassword] = useState(false)
    const onPasswordLengthChanged = (event: React.SyntheticEvent<HTMLInputElement>) => {
        setPasswordLength(parseInt(event.currentTarget.value))
    }

    const handleGeneratePassword = () => {
        const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '1234567890';
        const symbols = '@$!%*#?&';
        let newStrength = 0;
        let newPassword = '';

        //To improve the chances a character is added to the password use a smaller array to define character types
        // Also keep track of characters that are now included

        const characterTypes: Array<CharacterType> = []
        if (hasUppercaseLetters) {
            characterTypes.push('uppercase')
            newStrength += 1;
        }

        if (hasLowercaseLetters) {
            characterTypes.push('lowercase')
            newStrength += 1;
        }

        if (hasNumbers) {
            characterTypes.push('number')
            newStrength += 1;
        }

        if (hasSymbols) {
            characterTypes.push('symbol')
            newStrength += 1;
        }

        const includedCharacters: Array<CharacterType> = []

        let countCharacters = 0;

        const getCharacterByType = (characterType: CharacterType) => {
            switch (characterType) {
                case 'uppercase':
                    return uppercaseLetters.charAt(randomNumber(uppercaseLetters.length))
                case 'lowercase':
                    return lowercaseLetters.charAt(randomNumber(lowercaseLetters.length))
                case 'number':
                    return numbers.charAt(randomNumber(numbers.length))
                case 'symbol':
                    return symbols.charAt(randomNumber(symbols.length))
            }
        }

        // Makes sure that at least one character is included
        while (!characterTypes.every(characterType => includedCharacters.includes(characterType))) {
            const randomCharacterType = characterTypes[randomNumber(characterTypes.length)];
            if (includedCharacters.includes(randomCharacterType)) {
                continue
            }
            newPassword += getCharacterByType(randomCharacterType);
            includedCharacters.push(randomCharacterType)
            countCharacters++;
        }

        // Now just do random, let it do the magic
        while (countCharacters < passwordLength) {
            const randomCharacterType = characterTypes[randomNumber(characterTypes.length)];
            newPassword += getCharacterByType(randomCharacterType);
            countCharacters++;
        }

        setPassword(newPassword)
        setPasswordStrength(newStrength)
    }

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(password)
            setCopiedPassword(true)
        } catch (error) {
            alert("Error copying password")
        }
    }

    useEffect(() => {
        setCopiedPassword(false)
    }, [password]);


    return <div className={styles.home}>
        <h1>Password Generator</h1>
        <TextField value={password} readOnly placeholder={'P4$5W0rD!'} style={{width: '100%'}}
                   endAdornment={copiedPassword ?
                       <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}><span
                           style={{color: getColor('neon-green'), fontSize: '18px'}}>Copied</span><IconButton
                           onClick={handleCopy}><CopyIcon/></IconButton></div> :
                       <IconButton disabled={!password} onClick={handleCopy}><CopyIcon/></IconButton>}/>
        <Card style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
        }}>
            <Slider value={passwordLength} onChange={onPasswordLengthChanged} min={8} max={16}/>
            <CheckBox checked={hasUppercaseLetters} onChange={() => setHasUppercaseLetters(!hasUppercaseLetters)}
                      label={'Include Uppercase Letters'}/>
            <CheckBox checked={hasLowercaseLetters} onChange={() => setHasLowercaseLetters(!hasLowercaseLetters)}
                      label={'Include Lowercase Letters'}/>
            <CheckBox checked={hasNumbers} onChange={() => setHasNumbers(!hasNumbers)} label={'Include Numbers'}/>
            <CheckBox checked={hasSymbols} onChange={() => setHasSymbols(!hasSymbols)} label={'Include Symbols'}/>
            <StrengthIndicator value={passwordStrength}/>
            <Button endIcon={<ArrowRightIcon/>}
                    disabled={!hasUppercaseLetters && !hasLowercaseLetters && !hasNumbers && !hasSymbols}
                    onClick={handleGeneratePassword}
                    style={{width: '100%'}}>Generate</Button>
        </Card>
    </div>
}

export default Home;