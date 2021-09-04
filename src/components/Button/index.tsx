
import styles from "./styles.module.scss"

interface Props{
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    className?: string
    width?: string
    height?: string
    bg?: string
    color?: string
}

export const Button = (props: Props) => {
    return <button style={{width: props.width, height: props.height, backgroundColor: props.bg, color: props.color}} onClick={props.onClick}  className={`${styles.botao} ${props.className}`}>{props.children}</button>
}