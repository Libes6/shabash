import { instance } from '@/api/api.interceptor';
import {IOrder} from "@/types/order.interface";
import {IPost} from "@/types/post.interface";

const POST='posts'

export const PostService ={
    async getALL() {
        return instance<IPost[]>({
            url: `${POST}`,
            method: 'GET',
        });
    },
}

