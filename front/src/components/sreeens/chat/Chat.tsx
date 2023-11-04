import React, {FC, useEffect, useRef} from 'react';
import Meta from "@/components/ui/Meta";
import Layout from "@/components/ui/layout/Layout";
import {useQuery} from "@tanstack/react-query";
import {ChatService} from "@/services/chat/chat.service";
import {io,Socket} from "socket.io-client";
import {useProfile} from "@/hooks/useProfile";
import {Button, Grid, Stack, TextField} from "@mui/material";
import {GrAd} from "react-icons/all";

const Chat: FC = () => {
    const [socket, setSocket] = React.useState<Socket>();

    const [messages, setMessages] = React.useState<{user:any, text:string,updateAt:string}[]>([]);
    const [message, setMessage] = React.useState<string>('');
const {profile}=useProfile()
console.log(profile)
    const send =(value: any)=>{
        if(socket){
            socket.emit('NewMessage', value);
        }
    }
    useEffect(() => {
        const newSocket = io('http://localhost:4201/');
        setSocket(newSocket)


    },[setSocket])
const messageListener =(message:any)=>{
        console.log(message);
        setMessages([...messages, message])
}
    const connectionListener =(message:any)=>{
        console.log(message);
        setMessages(message)
    }

useEffect(() => {
    if(socket){
        socket.on('NewMessage', messageListener)
        return () => {
            socket.off('NewMessage', messageListener)
        }
    }
},[messageListener])

    useEffect(() => {
        if(socket){
            socket.on('connection', connectionListener)
            return () => {
                socket.off('connection', connectionListener)
            }
        }
    },[])
    return (
        <Meta title='Чат'>
            <Layout>
                <h1>Чат</h1>
                <Stack spacing={2} className='h-[72vh] px-20 overflow-auto flex-auto overflow-x-hidden '>
                    {messages.map((message, index) => (
                        <div className='px-3 py-1 bg-gray-100 flex relative' key={index}>
                           <p className='rounded-full w-10 h-10 bg-blue text-white text-center items-center flex justify-center absolute top-0 left-[-45px]'><span>{message?.user.email[0]}</span></p>


                            <div className='flex flex-col'>
                                <div className='flex gap-2'>
                                    <p className='text-blue'>{message?.user.email}</p>
                                    <p>{new Date(message?.user?.updateAt).toLocaleDateString()}</p>
                                </div>
                                <p>{message?.text}</p>
                            </div>


                        </div>
                    ))}
                </Stack>
                    <div className={'mt-6  flex gap-4 w-full px-16'}>
                        <TextField fullWidth size={'small'} label={'Введите сообщение'} type="text" placeholder="Введите сообщение" onChange={(e) => setMessage(e.target.value)}/>
                    <Button variant="contained"  onClick={() => send({user:profile,text:message,userId:profile?.id})}>Отправить</Button>
                    </div>
            </Layout>
        </Meta>
    );
};

export default Chat;