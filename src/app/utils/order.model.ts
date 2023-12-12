import { LocationModel } from "./location.model";
import { UserInformation } from "./user.information";

export type OrderModel = {
    id: number; 
    location: LocationModel; 
    status: string; 
    confirmed: boolean; 
    payMentMethode: string; 
    createdAt: Date; 
    updatedAt: Date; 
    totalQuantity: number; 
    totalPrice: number; 
    cartItems: cartItem[]; 
    deliveryDate?: Date; 
    userInformation: UserInformation;
}


type cartItem = {
    productSku: string; 
    quantity: number; 
    price: number; 
    initialPrice: number; 
    product: string; 
    imageUrl: string; 
}