export const formatarPreco = (valor: number) => valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

export const isEmailValido = (email: string) => {
    const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return regex.test(email)
}

export const isCampoPreenchido = (valor: string) => valor.length !== 0 ? true : false

export const onBlurEmailValidacao = (email: string, validador: Function, validadorCampoPreenchido: Function, setErroEmail: Function) => {
    if(!validador(email) || !validadorCampoPreenchido(email)){
        setErroEmail("Preencha com um e-mail válido")
    } else{
        setErroEmail("")
    }
}

export const onBlurCampoPreenchido = (valor: string, validador: Function, setCampoErro: Function, mensagem: string) => {
    if(!validador(valor)){
        setCampoErro(mensagem)
    } else{
        setCampoErro("")
    }
}
