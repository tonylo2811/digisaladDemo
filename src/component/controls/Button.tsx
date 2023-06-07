
interface ButtonProps {
    buttonText: string;
    customStyle?: string;
    color?: string;
}

export const Button: React.FC<ButtonProps> = ({buttonText, customStyle, color})=>{
    return(
        <button 
            id="button"
            className={customStyle && customStyle}
            style={{"backgroundColor": `${color&&color}`}}
        >{buttonText}</button>
    )
} 