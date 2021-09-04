import { useEffect, useState } from "react";
import { useMedia } from "../../hooks/useMedia";
import styles from "./styles.module.scss";

interface Props {
  imagemDesktop: string;
  imagemMobile: string;
  heightDesktop: string;
  heightMobile: string;
  children?: React.ReactNode;
}

export const Banner = (props: Props) => {
  const [banner, setBanner] = useState({});
  const size = useMedia();

  useEffect(() => {
    size[0] >= 769
      ? setBanner({
          backgroundImage: `url(${props.imagemDesktop})`,
          height: props.heightDesktop,
        })
      : setBanner({
          backgroundImage: `url(${props.imagemMobile})`,
          height: props.heightMobile,
        });
  }, []);

  useEffect(() => {
    size[0] >= 769
      ? setBanner({
          backgroundImage: `url(${props.imagemDesktop})`,
          height: props.heightDesktop,
        })
      : setBanner({
          backgroundImage: `url(${props.imagemMobile})`,
          height: props.heightMobile,
        });
  }, [size]);

  return (
    <div style={banner} className={styles.banner}>
      {props.children}
    </div>
  );
};
