export const formatarPreco = (valor: number) => valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})