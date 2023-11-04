export interface IPost {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  likes: number;
  views: number;
  tag: string;
  flag: string;
  images: string[];
  user: {
    id: number;
    username: string | null;
    email: string;
    image: string;
  };
  review: { id: string }[];
}
export interface PostList {
  post: [];
}
