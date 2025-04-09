import { IProduct } from "./IProducts.interface";
import { IUser } from "./IUser.interface";


export interface ICart {
    cart_users: IUser;
    cart_products: ICartDetail[];
    total_all_price: number
}


export interface ICartDetail {
    id?: string
    cart_detail: ICart;
    product_detail: IProduct;
    quantity: number;
    total_price: number;
}


