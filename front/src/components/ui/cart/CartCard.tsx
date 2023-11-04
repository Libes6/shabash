import React, {FC} from 'react';
import {IProduct} from "@/types/product.interface";
import Image from "next/image";
import {ICartInterface} from "@/types/cart.interface";
import {useActions} from "@/hooks/useActions";
import {FiMinus, FiPlus} from "react-icons/fi";
import { AiFillDelete } from 'react-icons/Ai';
import {RiDeleteBinLine} from "react-icons/ri";

const CartCard: FC<ICartInterface> = (card) => {
    const { addToCart, removeFromCart,changeQuantity } = useActions();
    return (
        <div className='flex gap-4'>
            <Image src={`${card.product.images[0]}`} alt={card.product.name} width={130} height={100}/>
            <div className='flex flex-col'>
                <div className='text-black text-md font-semibold'>  {card.product.name}</div>
                <div className='text-black text-sm font-normal mt-2'> {card.product.price} ₽</div>
                <div className='flex items-center gap-3 mt-2'>
                    <button onClick={()=>removeFromCart({id:card.id})}><RiDeleteBinLine size={20}/> </button>
                    <button onClick={()=>changeQuantity({id:card.id,type:'minus'})} disabled={card.quantity==1}><FiMinus size={13}/> </button>

                    <input className='w-10 bg-red opacity-40 text-center text-white text-sm' disabled readOnly value={card.quantity}/>
                    <button onClick={()=>changeQuantity({id:card.id,type:'plus'})}><FiPlus size={13}/> </button>

                </div>







            </div>
        </div>
    );
};

export default CartCard;