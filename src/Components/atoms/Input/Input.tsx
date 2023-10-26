import {FC} from "react";
import styles from './Input.module.css'

interface InputProps {
    placeholder: string;
    styleType: 'primary' | 'secondary' | 'default';
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input:FC<InputProps> = (
    {   placeholder,
        styleType,
        value,
        onChange }
) => {
    return (
        <input
            className={styles[styleType]}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;