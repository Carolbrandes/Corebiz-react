export interface Parcela {
    quantify: number;
    value: number;
  }
  
  export interface Produto {
    productId: number;
    productName: string;
    stars: number;
    imageUrl: string;
    listPrice: number | null;
    price: number;
    installments: Array<Parcela> | [];
  }
  
 