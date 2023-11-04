import { instance } from '@/api/api.interceptor';
import {ICategory} from "@/types/category.interface";

const CHAT = '/chat';


export const ChatService = {

    async getALL() {
        return instance({
            url: `${CHAT}`,
            method: 'GET',
        });
    },

    async create(data: any) {
        return instance<ICategory>({
            url: `${CHAT}`,
            method: 'POST',
            data: data,
        });
    },
}