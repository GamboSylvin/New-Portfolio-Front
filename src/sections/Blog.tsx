import TertiaryCTA from "../buttons/TertiaryCTA";
import BlogCard from "../CardsAndContainers/BlogCard";
import RightArrowIcon from "../assets/right-arrow.svg?react";
// import { useRouteLoaderData } from "react-router";
// import type { BlogCardProps } from "../CardsAndContainers/BlogCard";

function Blog() {
//   let data = useRouteLoaderData("dataRoot") as { posts: { content: BlogCardProps[] } };
//   let posts = data.posts.content;
  return (
    <section id="blog" className="min-h-screen bg-gray-50 py-12 px-12">
        <div className="titleContainer mb-12">
            <h1 className="text-3xl font-bold text-center mb-6">Thoughts and Writings</h1>
            <p className="text-center text-xs md:text-base text-gray-600">I write about web development, programming, and other cool stuff.</p>
        </div>
        <div className="blogPostsContainer flex flex-col gap-6 mb-12">
            {/* {posts.map((post, index) => 
                <BlogCard 
                    key={index} 
                    title={post.title}
                    content={post.content}
                    imageUrl={post.imageUrl}
                    postUrl={post.postUrl}
                    createdAt={post.createdAt}
                />
            )}     */}
            <BlogCard imageUrl="pesonal-sample.png"/>
            <BlogCard/>
            <BlogCard/>
        </div>
        <div className="flex justify-center">
            <TertiaryCTA text="View All Posts" url="/blog" Icon={RightArrowIcon} />
        </div>
    </section>
  );
}

export default Blog;