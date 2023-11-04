import {EnumOrderStatus} from "@/types/order.interface";

export const orderStatusRu =(status:EnumOrderStatus)=>{
    switch (status){
        case EnumOrderStatus.DELIVERED:return 'Доставлен'
        case EnumOrderStatus.PAYED: return 'Оплачено'
        case EnumOrderStatus.PENDING:return 'Ожидание оплаты'
        case EnumOrderStatus.SHIPPED: return 'Отправлен'
    }


}