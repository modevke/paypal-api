export interface ItemInterface{
    name: string;
    sku: string;
    price: string;
    currency: string;
    quantity: string;
}

export interface TransactionInterface{
    amount:{
        total: string;
        currency: string;
    },
    description: string;
    item_list: {
        items: Array<ItemInterface>
    }
}

export interface ExecuteInterface{
    payerId: string;
    paymentId: string;
}