import {FC} from "react";
import styles from './Button.module.css'

interface ButtonProps {
    text?: string;
    onClick?: () => void;
    styleType: 'headerButton' | 'itemButton' | 'redButton';
    imgSrc?: string;
}

const Button:FC<ButtonProps> = (
    {   text,
        onClick,
        styleType,
        imgSrc }
) => {
    return (
        <button className={styles[styleType]} onClick={onClick}>
            {imgSrc && <img className={styles.img} src={imgSrc} alt={text} />}
            {text && text}
        </button>
    );
};

export default Button;