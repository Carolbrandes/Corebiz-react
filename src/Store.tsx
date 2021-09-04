import React, { useState } from "react";
import {ProdutoCarrinho} from "./interface"


interface Props {
    children: React.ReactNode;
}

interface globalContext{
    listaCarrinho: Array<ProdutoCarrinho>
    setListaCarrinho: Function
}

export const AppContext = React.createContext<globalContext>({listaCarrinho: [], setListaCarrinho: () => {}});

const Store = (props: Props) => {
  const [listaCarrinho, setListaCarrinho] = useState([]);

  return (
    <AppContext.Provider value={{ listaCarrinho, setListaCarrinho }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default Store;
