import {GetStaticProps, NextPage} from 'next';
import { Inter } from 'next/font/google';
import Home from "@/components/sreeens/home/Home";
import {IProduct, TypePaginationProducts, TypeProducts} from "@/types/product.interface";
import {ProductService} from "@/services/product/product.service";
import Chat from "@/components/sreeens/chat/Chat";
import {PostService} from "@/services/post/post.service";
import PostPage from "@/components/ui/post/postPage/PostPage";
import {PostList} from "@/types/post.interface";
import {useQuery} from "@tanstack/react-query";

const inter = Inter({
  subsets: ['latin'],
});

const query = {}
const HomePage: NextPage<PostList> = ({post}) => {

  return <Home post={post} />
}

export const getStaticProps:GetStaticProps =async ()=>{
  const {data} =await PostService.getALL()

  return {
    props: {post: data},
  };
}

export default HomePage;
