import { FocusEventHandler } from "react";
import styles from "./styles.module.scss";

interface Props {
  type: string;
  placeholder: string;
  value: string | number;
  onChange: Function;
  mensagemErro?: string;
  onBlur?: FocusEventHandler;
}

export const Input = (props: Props) => {
  return (
    <>
      <input
        className={styles.input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          props.onChange(e.target.value)
        }
        onBlur={props.onBlur}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
      />
      {props.mensagemErro && (
        <p className={styles.erro}>{props.mensagemErro}</p>
      )}
    </>
  );
};
