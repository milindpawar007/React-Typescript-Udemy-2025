import { ReactNode, useEffect, useState } from "react";
import { get } from "./util/http";
import BlogPosts, { BlogPost } from "./components/BlogPosts";
import fetchingImg from './assets/data-fetching.png'

type RawDataBlogPost = {
  id:number;
  userId: number;
  title:string;
  body:string

}
function App() {
 const [fetchPost, SetFetchPost]= useState<BlogPost[]>();

 useEffect(()=>{
  async function FetchPost(){
  const data = (await  get('https://jsonplaceholder.typicode.com//posts')) as RawDataBlogPost[]
  
   const blogPost = data.map((post)=>{
          return {
            id: post.userId,
    title: post.title,
    text: post.body
           }
   })

   SetFetchPost(blogPost)
  }

 FetchPost()

 },[])
  
 let content:ReactNode;
 if(fetchPost){
  content =<BlogPosts posts={fetchPost}/>
 }
 return <main>
    <img src={fetchingImg} alt="fetching"/>
    {content}
 </main>


}

export default App;
