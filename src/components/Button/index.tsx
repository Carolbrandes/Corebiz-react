
import styles from "./styles.module.scss"

interface Props{
    children: React.ReactNode;
    funcao: React.MouseEventHandler<HTMLButtonElement>
    className?: string
    width?: string
}

export const Button = (props: Props) => {
    return <button style={{width: props.width}} onClick={props.funcao}  className={`${styles.botao} ${props.className}`}>{props.children}</button>
}