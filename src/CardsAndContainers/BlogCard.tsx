type BlogCardProps = {
    id?: number;
    title?: string;
    content?: string;
    imageUrl?: string;
    postUrl?: string;
    createdAt?: string;
};

function BlogCard({ title, content, imageUrl, postUrl, createdAt }: BlogCardProps) {
    return (
        <div className="blog-card flex flex-col md:flex-row bg-white rounded-lg shadow overflow-hidden">
            <div className="blog-image flex-1">
                <img src={`https://res.cloudinary.com/dosaqiiuk/image/upload/${imageUrl}`} alt="Blog Image" className="w-full h-full object-cover" />
            </div>
            <div className="blog-content py-6 flex-5 ml-4">
                <p className="text-sm text-gray-500 mb-4">{createdAt || "Jan 1, 2024"}</p>
                <h3>{title || "Blog Title"}</h3>
                <p className="truncate">{content || "Short description of the blog post..."}</p>
                <a href={postUrl || "#"} className="text-blue-500 hover:text-blue-700">
                    Read More
                </a>
            </div>
        </div>
    );
}

export default BlogCard;

export type { BlogCardProps };